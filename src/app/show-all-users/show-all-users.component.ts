import { Component } from '@angular/core';
import { UserService } from './show-all-users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent {
  users:any[] = [];
  error:any;
    constructor(private userService: UserService, private router:Router, private activeRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.userService.getAllUsers().subscribe((data)=> this.users = data,error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          window.localStorage.setItem("token", error.error.text);
        }else {
          alert("Wrong Credintials.");
        }
      });
      
    }
}
