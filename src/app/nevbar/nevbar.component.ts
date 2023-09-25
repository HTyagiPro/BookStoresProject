import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent implements OnInit {
  showAdmin: boolean = false;
  loggedIn: boolean = false;

  constructor(private route:Router,private navService:NavbarService) {}
  ngOnInit(): void {
    
    if(window.sessionStorage.getItem('isAdmin') == '1$1#') {
      this.showAdmin = true;
    } else {}
    if(window.localStorage.getItem('token') || window.sessionStorage.getItem('token')){
      this.loggedIn = true;
    }
  }
  logout() {
    window.alert('Logged Out, Thanks for visit...');
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.route.navigateByUrl('/');
  }

  isLoggedIn(){
  }

}
