import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";


@Injectable()
export class MyOrderHistoryService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }


    public getOrderHistory(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/orders/getOrderHistory",{headers:header});
    }

    public getMyOrders() : Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/orders/getMyOrderHistory",{headers:header});
    }

    public setMyOrdersRating(rateForm : any) : Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post("http://localhost:8089/ratings/setRating", rateForm,{headers:header});
    }

    public returnBook(orderDetails : any) : Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        console.log(orderDetails);
        
        return this.httpClient.post("http://localhost:8089/order-items/return", orderDetails,{headers:header});
    }

  
}