import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ContactUs} from 'src/app/models/contactus';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  model:ContactUs=new ContactUs();
  ButtonText:string="Send"
  message:string;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  contactus(form:NgForm){
    this.ButtonText="Please wait...."
    this.authService.contactus(this.model).subscribe(
      (response:boolean)=>{
      if (response==true )
        {
          this.ButtonText="Send";
          this.message="Message sent Successfully";
          form.reset();
        }
        else
        {
          this.ButtonText="Send";
          this.message="Message Not sent.Please try again....... ";
          form.reset();
        }
    }
    );

}

}
