import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent {

  constructor(private route:Router)
 {}
  logout() {
    window.alert('logged out');
    window.localStorage.removeItem('token');
    this.route.navigateByUrl('/');

  }

}
