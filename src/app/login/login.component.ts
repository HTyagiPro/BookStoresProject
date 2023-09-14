import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../nevbar/navbar.service';
@Component({
  selector: '/',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService : LoginService, private route: Router) {}
  data: any;
  error : any;
  public formSubmit(loginForm:NgForm){
    this.loginService.logIn(loginForm.value).subscribe((data:any)=> this.data = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        window.localStorage.setItem("token", error.error.text);
        this.route.navigateByUrl('/app-arsenal-box');
      }else {
        alert("Wrong Credintials.");
      }
    })    
  }


  

}

