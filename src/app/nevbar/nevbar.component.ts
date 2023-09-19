import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent implements OnInit {
  showAdmin = false;

  constructor(private route:Router,private navService:NavbarService)
 {}
  ngOnInit(): void {
    
    if(window.localStorage.getItem('isAdmin') == '1$1#') {
      // show
      this.showAdmin = true;
    } else {}
  }
  logout() {
    window.alert('logged out');
    window.localStorage.clear();
    this.route.navigateByUrl('/');
  }

}
