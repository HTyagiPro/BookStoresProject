import { Component } from '@angular/core';
import { BookService } from '../book-shelf/book-shelf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddBookService } from './add-books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  books:any[] = []; 
  authorArr:any[] = [];
  publisherArr:any[] = [];
  
  error:any;
    constructor(private addBookService: AddBookService, private router:Router, private activeRoute:ActivatedRoute){}

    data: any;
    public formSubmit(bookForm:NgForm){
      this.addBookService.addBook(bookForm.value).subscribe((data:any)=> {
        this.data = data
      },error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          //window.localStorage.setItem("token", error.error.text);
          alert(error.error.text);
        }else {
          alert("Something Went Wrong.");
        }
      });
    }


    ngOnInit(): void {
      this.addBookService.getAllAuthors().subscribe((data)=> this.authorArr = data,error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          window.localStorage.setItem("token", error.error.text);
          alert(error.error.text);
        }else {
          alert("Something Went Wrong.");
        }
      });
      
      this.addBookService.getAllPublisher().subscribe((data)=> this.publisherArr = data, error=> { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          alert(error.error.text);
          //window.location.reload();
        }else {
          alert(error.error.text);
        }
      });
    }
}
