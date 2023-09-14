import { Component } from '@angular/core';
import { SearchBooksService } from './search-books.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {

  constructor(private searchBooksService : SearchBooksService, private route: Router ) {}
  books: any;
  error : any;
  flag:boolean = false;
  data : any;


  public onClickAddToCart(bookId:any){
    this.searchBooksService.addToCart(bookId).subscribe((data)=> this.data = data,error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        alert("Item Added to cart.")
        //window.localStorage.setItem("token", error.error.text);
      }else {
        alert("Wrong Credintials.");
      }
    });

  }


  public formSubmit(searchBooks:NgForm){
    this.flag = true;
    this.searchBooksService.searchBooks(searchBooks.value).subscribe((data:any)=> this.books = data, 
    error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        window.localStorage.setItem("token", error.error.text);
        
        this.route.navigateByUrl('/');
      }else {
        alert("Wrong Credintials.");
      }
    })    
  }



}
