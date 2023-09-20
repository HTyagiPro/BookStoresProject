import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPublisherService } from './add-publisher.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent {
  constructor(private addAuthorService : AddPublisherService, private route: Router) {}
  data: any;
  error : any;
  flag : boolean = false;
  publisher:any;
  public formSubmit(addPublisher:NgForm){
    this.addAuthorService.addPublisher(addPublisher.value).subscribe((data:any)=> this.data = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        //window.localStorage.setItem("token", error.error.text);
        alert(error.error.text);
        this.flag = true;
        this.addAuthorService.getAddedPublisher().subscribe((data:any)=> this.publisher= data);

        //this.route.navigateByUrl('/');
      }else {
        alert("Wrong Credintials.");
      }
    })    
  }


}
