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
    public formSubmit(orderForm:NgForm){
      this.placeOrderService.placeOrder(orderForm.value).subscribe((data:any)=> this.data = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        window.localStorage.setItem("token", error.error.text);
        alert("Order Placed Successfully.")
        this.router.navigateByUrl('/app-arsenal-box');

      }else {
        alert("Wrong Credintials.");
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
