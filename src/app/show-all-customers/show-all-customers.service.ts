import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class CustomerService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public getAllCustomers(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/customers",{headers:header});
    }

    
}