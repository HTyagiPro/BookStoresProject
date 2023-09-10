import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceOrderService } from './place-order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
  
    constructor(private placeOrderService: PlaceOrderService, private router:Router, private activeRoute:ActivatedRoute){}

    books:any[] = [];
    data: any;
    error:any;
    flag : boolean = false;
    orderDetails:any;
    public formSubmit(orderForm:NgForm){
      this.placeOrderService.placeOrder(orderForm.value).subscribe((data:any)=> this.data = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        
        window.alert("Order Placed Successfully.");
        //window.location.reload();
        this.placeOrderService.getplacedOrderDetails().subscribe((data:any)=> this.orderDetails = data);
        
        this.flag = true;

        this.router.navigateByUrl('/https://rzp.io/l/arsenalPay');

      }else {
        alert("Something Went Wrong...Try again after sometime.");
      }
    }) 
    }


    ngOnInit(): void {
      this.placeOrderService.getAllBooks().subscribe((data)=> this.books = data,error => { 
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
