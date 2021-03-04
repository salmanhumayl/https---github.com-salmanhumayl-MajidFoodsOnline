import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessengerService } from 'src/app/services/messenger.service';
import {UserInfo} from '../../models/UserInfo';
import {Customer} from '../../models/customer';
import {Login} from '../../models/Login';
import { NgForm } from '@angular/forms';
import { HomeUrl } from 'src/app/config/api';
import { asLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  currentUser: UserInfo[]=[];
  RegistrationModel:Customer=new Customer();
  LoginModel:Login=new Login();
  Success:boolean=false;
  SuccessLogin:boolean=false;
  UserAlreadyExist:boolean=false;
  Source:string;
  HomeUrl=HomeUrl;
  buttonText:string="Register"

  @ViewChild('btnregister') btnregister: ElementRef;

  constructor(private msg:MessengerService,public authService: AuthenticationService,
    private router:Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.Source=this.route.snapshot.queryParams['Source'];

  }

  Login(form:NgForm){

    this.SuccessLogin=true;
    this.authService.removeToken();
    this.authService.Login(this.LoginModel).subscribe(
      (response:number)=>{
       if(response == 0 )
          {
            alert("Invalid Login Credentials")
            this.SuccessLogin=false;
          }
        else {
          this.authService.GetUserInfo(response).subscribe(
            (UserInfo:UserInfo)=>{
                this.authService.storeToken(UserInfo.Token);
                this.authService.StoreUserInfo(UserInfo);
                this.msg.isLoggedIn$.next(true);
                this.msg.isWelComeName$.next(UserInfo.FirstName);
                if (this.returnUrl!=null && this.Source=='X')
                {
                  this.router.navigateByUrl(this.returnUrl);
                }
                else if (this.Source=='X')
                {
                  this.router.navigate(['login']);
                }
                else
                {
                  form.reset()
                  //this.SuccessLogin=true;
                  window.location.href=this.HomeUrl;
                }
              }
            )
          }
      }
    );

    }


    UserRegistration(form:NgForm){
      this.btnregister.nativeElement.disabled=true;
      this.buttonText="Please wait...."
      this.UserAlreadyExist=false;
      this.authService.Registration(this.RegistrationModel).subscribe(
        (response)=>{
            if (response!="")
            {
              this.LoginModel.Email="";
              this.LoginModel.Password="";
              this.Success=false;
              this.UserAlreadyExist=true;
              this.buttonText="Register";
              this.btnregister.nativeElement.disabled=false;
              return false;
            }

           this.LoginModel.Email=this.RegistrationModel.Email;
           this.LoginModel.Password=this.RegistrationModel.Password;
           this.authService.removeToken();
           this.authService.Login(this.LoginModel).subscribe(

          (UserInfo:UserInfo)=>{
              this.Success=true
              this.UserAlreadyExist=false;
              this.authService.storeToken(UserInfo.Token);
              this.authService.StoreUserInfo(UserInfo);
              this.msg.isLoggedIn$.next(true);
              this.msg.isWelComeName$.next(UserInfo.FirstName);
              if (this.returnUrl!=null && this.Source=='X')
              {
                this.router.navigateByUrl(this.returnUrl);
              }
              else if (this.Source=='X')
              {
                this.router.navigate(['login']);
              }
              else
              {
                form.reset()
                window.location.href=this.HomeUrl;
              }
            }
      )

     }
      )

     }
}

