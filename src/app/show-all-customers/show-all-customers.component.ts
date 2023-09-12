import { Component } from '@angular/core';
import { CustomerService } from './show-all-customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styleUrls: ['./show-all-customers.component.css']
})
export class ShowAllCustomersComponent {
  customers:any[] = [];
  error:any;
  addedCustomer:any;
    constructor(private customerService: CustomerService, private router:Router, private activeRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.customerService.getAllCustomers().subscribe((data)=> this.customers = data,error => { 
        this.error = JSON.stringify(error.error.text);
        if (error.status == 200)
        {
          window.localStorage.setItem("token", error.error.text);
        }else {
          alert("Wrong Credintials.");
        }
      });
      
    }
}
