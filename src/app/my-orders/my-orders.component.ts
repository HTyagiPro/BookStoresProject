import { Component, OnInit } from '@angular/core';
import { MyOrderHistoryService } from './my-orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private myOrderHistoryService:MyOrderHistoryService){}
  orders :any[] = [];
  myOrders :any[] = [];
  error:any;
  data:any;
  

  public getMyOrderHistory():any{
      this.myOrderHistoryService.getMyOrders().subscribe((data) => this.myOrders = data);
  }

  ngOnInit(): void {
    this.getMyOrderHistory();
  }

}
