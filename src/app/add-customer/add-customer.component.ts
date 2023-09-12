import { Component } from '@angular/core';
import { AddCustomerService } from './add-customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  error:any;
  flag : boolean = false;
  customer : any;
  constructor(private addCustomerService: AddCustomerService, private router:Router, private activeRoute:ActivatedRoute){}

  data: any;
  public formSubmit(customerForm:NgForm){
    this.addCustomerService.addCustomer(customerForm.value).subscribe((data:any)=> {
      this.data = data;

    },error => { 
      if (error.status == 200){
        this.addCustomerService.getAddedCustomer().subscribe((data:any) => this.customer = data);
        this.flag = true;
        alert("Customer Added Successfully!!!");
        
      }
      console.log(error.error.text);
      console.log(error.status);
    });
  }
}
