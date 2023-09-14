import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http:HttpClient) { }

  getAdmin() {
      var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
      return this.http.get("http://localhost:8089/users/isAdmin", {headers:header});
  }
}
