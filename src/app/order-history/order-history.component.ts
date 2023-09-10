import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from './order-history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  constructor(private orderHistoryService : OrderHistoryService, private router:Router, private activeRoute:ActivatedRoute){}

  orders :any[] = [];
  error:any;

  ngOnInit(): void {
    this.orderHistoryService.getOrderHistory().subscribe((data)=> this.orders = data,error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
       // window.localStorage.setItem("token", error.error.text);
      }else {
        alert("Wrong Credintials.");
      }
    });
    
  }
}
