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

  SuccessLogin:boolean=true;
  UserAlreadyExist:boolean=false;
  Source:string;
  HomeUrl=HomeUrl;
  buttonText:string="Register"
  LoginButtonText="Login";

  @ViewChild('btnregister') btnregister: ElementRef;

  constructor(private msg:MessengerService,public authService: AuthenticationService,
    private router:Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.Source=this.route.snapshot.queryParams['Source'];

  }

  Login(form:NgForm){

    this.LoginButtonText="Logging Please wait...."
    this.authService.removeToken();
    this.authService.Login(this.LoginModel).subscribe(
      (response:number)=>{
       if(response == 0 )
          {
            this.SuccessLogin=false;
            this.LoginButtonText="Login";
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
        (response:number)=>{
          if (response> 0)
            {
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
                  window.location.href=this.HomeUrl;
                }
              }
            )
            }
           else
           {

            this.UserAlreadyExist=true;
            this.buttonText="Register";
            this.RegistrationModel.FirstName="";
            this.RegistrationModel.LastName="";
            this.RegistrationModel.Password="";
            this.LoginModel.Email=this.RegistrationModel.Email
            this.RegistrationModel.Email="";
            this.btnregister.nativeElement.disabled=false;

           }
     }
      )

     }
}

