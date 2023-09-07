import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class AddBookService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public addBook(bookForm: any): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post('http://localhost:8089/books/addBook', bookForm,{headers:header});
      }

    public getAllAuthors(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/authors",{headers:header});
    }

    public getAllPublisher(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/publishers",{headers:header});
    }



    
}