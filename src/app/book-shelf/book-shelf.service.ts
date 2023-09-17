import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";



@Injectable()
export class BookService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public getAllBooks(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/books",{headers:header});
    }

    public addToCart(bookId:any): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post("http://localhost:8089/cart-items/addToCart", {"bookID":bookId}, {headers:header});
    }

    
    public getRating(bookId:any): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/rating/getRating", {headers:header});
    }

    
}