import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class LoginService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public logIn(loginForm: any): Observable<any> {
   
        return this.httpClient.post('http://localhost:8089/users/login', loginForm);
    
      }
      
    
    
}