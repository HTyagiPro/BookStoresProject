import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  public signUpUser(myFormValue: any): Observable<any> {
    return this.httpClient.post('http://localhost:8089/users/signup', myFormValue);
  }

}