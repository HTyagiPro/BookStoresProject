import { Component, OnInit } from '@angular/core';
import { MyOrderHistoryService } from './my-orders.service';
import { NgForm } from '@angular/forms';

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
  data2:any;
  
  public formSubmit(review : any,bookId:any){
        
    const data = {
      review: '',
      bookID:''
    }
    data.review = JSON.stringify(JSON.parse(review));
    data.bookID = JSON.stringify(bookId);

    this.myOrderHistoryService.setMyOrdersRating(data).subscribe((data2) => this.data2 = data2);
  }

  public getMyOrderHistory():any{
      this.myOrderHistoryService.getMyOrders().subscribe((data) => this.myOrders = data);
  }

  ngOnInit(): void {
    this.getMyOrderHistory();
  }


  onRatingUpdated(rating: number) {
    // Handle the rating update logic here
    
  }
  public applyReturn(bookID:any){

  }
}
