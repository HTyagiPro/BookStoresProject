import { Component, OnInit } from '@angular/core';
import { BookService } from './book-shelf.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {


  
  books:any[] = [];
  error:any;
    constructor(private bookService: BookService, private router:Router, private activeRoute:ActivatedRoute){}

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
