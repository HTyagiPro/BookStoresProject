import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AddCustomerService {

  constructor(private httpClient: HttpClient) { }

  public addCustomer(myFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.httpClient.post('http://localhost:8089/customers/addCustomer', myFormValue,{headers:header});
  }

}