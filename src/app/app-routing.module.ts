import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { ArsenalBoxComponent } from './arsenal-box/arsenal-box.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ShowAllCustomersComponent } from './show-all-customers/show-all-customers.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CartComponent } from './cart/cart.component';
import { PlaceCartOrderComponent } from './place-cart-order/place-cart-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {component:LoginComponent, path:""},
  {component:SignupComponent, path:"app-signup"},
  {component:BookShelfComponent, path:"app-book-shelf"},
  {component:AddBooksComponent, path:"app-add-books"},
  {component:ShowAllCustomersComponent, path:"app-show-all-customers"},
  {component:ShowAllUsersComponent, path:"app-show-all-users"},
  {component:SearchBooksComponent, path:"app-search-books"},
  {component:InventoryComponent, path:"app-inventory"},
  {component:AddAuthorComponent, path:"app-add-author"},
  {component:AddPublisherComponent, path:"app-add-publisher"},
  {component:PlaceOrderComponent, path:"app-place-order"},
  {component:PlaceCartOrderComponent, path:"app-place-cart-order"},
  {component:CartComponent, path:"app-cart"},
  {component:OrderHistoryComponent, path:"app-order-history"},
  {component:MyOrdersComponent, path:"app-my-orders"},
  {component:AddCustomerComponent, path:"app-add-customer"},
  {component:ArsenalBoxComponent, path:"app-arsenal-box"}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
