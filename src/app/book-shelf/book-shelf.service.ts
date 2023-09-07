import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class BookService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public getAllBooks(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/books",{headers:header});
    }

    
}