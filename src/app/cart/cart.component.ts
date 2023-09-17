import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any[] = [];
  error:any;
  constructor(private cartService: CartService, private router:Router, private activeRoute:ActivatedRoute){}

   public onClickDeleteFromCart(bookID:any){

  }


  ngOnInit(): void {
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

onRatingUpdated(rating: number) {
      // Handle the rating update logic here
      
    }
  
}
