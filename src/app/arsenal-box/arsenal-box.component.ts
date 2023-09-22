import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../nevbar/navbar.service';

@Component({
  selector: '/',
  templateUrl: './arsenal-box.component.html',
  styleUrls: ['./arsenal-box.component.css']
})
export class ArsenalBoxComponent implements OnInit {

  constructor(private nevService : NavbarService){}
  error:any;

  ngOnInit(): void {
  this.isAdmin();    
  }
  isAdmin() {
    this.nevService.getAdmin().subscribe((res)=>{
      
      //console.log(res);
      
      
    },error => { 
      if (error.status == 200) {
        window.localStorage.setItem("isAdmin", error.error.text);
        window.sessionStorage.setItem("isAdmin", error.error.text);
      }
    });


    

  }
}
