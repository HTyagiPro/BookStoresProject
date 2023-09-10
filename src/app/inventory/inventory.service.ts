import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class InventoryService{
    
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public updateInventory(inventoryForm: any) :Observable<any> {
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post("http://localhost:8089/inventory/updateInv",inventoryForm,{headers:header});
    }


    public getInventoryBooks(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/inventory",{headers:header});
    }

    public getAllBooks(): Observable<any>{
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.get("http://localhost:8089/books",{headers:header});
    }
  
}