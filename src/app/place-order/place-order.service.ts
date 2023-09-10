import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class PlaceOrderService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public placeOrder(orderForm:any):Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post("http://localhost:8089/orders/placeOrder",orderForm, {headers:header});
    }


    public getplacedOrderDetails(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/orders/getPlacedOrder",{headers:header});
    }


    public getAllBooks(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/books",{headers:header});
    }
  
}