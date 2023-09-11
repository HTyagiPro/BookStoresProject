import { Component, OnInit } from '@angular/core';
import { BookService } from './book-shelf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {


  
  books:any[] = [];
  error:any;
  data:any;
    constructor(private bookService: BookService, private router:Router, private activeRoute:ActivatedRoute){}

    public onClickAddToCart(bookId:any){
      this.bookService.addToCart(bookId).subscribe((data)=> this.data = data,error => { 
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



    ngOnInit(): void {
      this.bookService.getAllBooks().subscribe((data)=> this.books = data,error => { 
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
