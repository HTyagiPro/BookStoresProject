import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private router:Router, private activeRoute:ActivatedRoute){}
  inventory:any[] = [];
  error :any;
  data :any;

  public formSubmit(inventoryForm:NgForm){
    this.inventoryService.updateInventory(inventoryForm.value).subscribe((data:any)=> this.data = data, 
  error => { 
    this.error = JSON.stringify(error.error.text);
    if (error.status == 200)
    {
      
      alert(error.error.text);
      window.location.reload();
    
    }else {
      alert("Wrong Credintials.");
    }
  });
  }

  books:any[] = [];

  ngOnInit(): void {
    this.inventoryService.getAllBooks().subscribe((data)=> this.books = data,error => { 
      this.error = JSON.stringify(error.error.text);
      if (error.status == 200)
      {
        window.localStorage.setItem("token", error.error.text);
      }else {
        alert("Wrong Credintials.");
      }
    });

    this.inventoryService.getInventoryBooks().subscribe((data)=> this.inventory = data,error => { 
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
