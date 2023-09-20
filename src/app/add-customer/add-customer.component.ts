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
    this.addCustomerService.addCustomer(customerForm.value).subscribe((data:any)=>  this.data = data,
      error => { 
      if (error.status == 200){
        alert(error.error.text);
        this.addCustomerService.getAddedCustomer().subscribe((data:any) => this.customer = data, error=> { 
          this.error = JSON.stringify(error.error.text);
          if (error.status == 200)
          {
            this.flag = true;
            //window.location.reload();
          }else {
            alert("Something Went Wrong With Review, Try Again after Sometime...!!!");
          }
        });
        
      }
      console.log(error.error.text);
      console.log(error.status);
    });
  }
}
