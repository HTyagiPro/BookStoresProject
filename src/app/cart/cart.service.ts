import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class CartService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public getAllCartItems(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/cart-items/viewUserCart", {headers:header});
    }

    public updateCartItems(updateForm:any): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post("http://localhost:8089/cart-items/updateItemToCart", updateForm, {headers:header});
    }

    
}