import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private signupService : SignupService) {}
  data: any;
  public formSubmit(signupForm:NgForm){
    this.signupService.signUpUser(signupForm.value).subscribe((data:any)=> {
      this.data = data
    }, error => { // second parameter is to listen for error
      console.log(error.error.text);
      console.log(error.status);
    });
  }
  
}
