import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from './cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {

  cartItems:any[] = [];
  error:any;
  data : any;
  constructor(private cartService: CartService, private router:Router, private activeRoute:ActivatedRoute){}

   ngOnChanges(changes: SimpleChanges): void {
    
  }
   public onClickDeleteFromCart(bookID:any){
    const updateForm = {
      bookID:''
    }
    updateForm.bookID = JSON.stringify(bookID);
    
    this.cartService.updateCartItems(updateForm).subscribe((data) => this.data = data, error=> { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        alert(error.error.text);
        window.location.reload();
      }else {
        alert("Something Went Wrong With Cart, Try Again after Sometime...!!!");
      }
    });

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
