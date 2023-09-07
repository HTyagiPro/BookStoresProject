import { Component } from '@angular/core';
import { AddAuthorService } from './add-author.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  constructor(private addAuthorService : AddAuthorService, private route: Router) {}
  data: any;
  error : any;
  public formSubmit(addAuthor:NgForm){
    console.log(addAuthor.value)
    this.addAuthorService.addAuthor(addAuthor.value).subscribe((data:any)=> this.data = data, 
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
