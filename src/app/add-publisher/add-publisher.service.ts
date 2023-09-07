import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class AddPublisherService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public addPublisher(addPublisher: any): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
        return this.httpClient.post('http://localhost:8089/publishers/addPublisher', addPublisher,{headers:header} );
    
      }
      
    
    
}