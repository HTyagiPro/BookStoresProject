import { Component } from '@angular/core';
import { PlaceCartOrderService } from './place-cart-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-place-cart-order',
  templateUrl: './place-cart-order.component.html',
  styleUrls: ['./place-cart-order.component.css']
})
export class PlaceCartOrderComponent {

  constructor(private placeCartOrderService: PlaceCartOrderService, private cartService: CartService, private router:Router, private activeRoute:ActivatedRoute){}

    books:any[] = [];
    cartItems:any[] = [];
    data: any;
    error:any;
    flag : boolean = false;
    orderDetails:any;

    public formSubmit(cartOrderForm:NgForm){
      console.log(cartOrderForm.value);
      this.placeCartOrderService.placeOrder(cartOrderForm.value).subscribe((data:any)=> this.data = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        window.alert("Order Placed Successfully.");
        //window.location.reload();
        this.flag = true;
        this.placeCartOrderService.getplacedOrderDetails().subscribe((data:any)=> this.orderDetails = data);
        //this.router.navigateByUrl('https://rzp.io/l/arsenalPay');
      }else {
        alert("Something Went Wrong...Try again after sometime.");
      }
    }) 
    }


    ngOnInit(): void {
      this.placeCartOrderService.getAllBooks().subscribe((data)=> this.books = data,error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          window.localStorage.setItem("token", error.error.text);
        }else {
          alert("Wrong Credintials.");
        }
      });

      this.cartService.getAllCartItems().subscribe((data)=> this.cartItems = data,error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          //window.localStorage.setItem("token", error.error.text);
        }else {
          alert("Wrong Credintials.");
        }
      });
      
    }

}
