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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {component:LoginComponent, path:""},
  {component:SignupComponent, path:"app-signup",canActivate: [AuthGuard]},
  {component:BookShelfComponent, path:"app-book-shelf",canActivate: [AuthGuard]},
  {component:AddBooksComponent, path:"app-add-books",canActivate: [AuthGuard]},
  {component:ShowAllCustomersComponent, path:"app-show-all-customers",canActivate: [AuthGuard]},
  {component:ShowAllUsersComponent, path:"app-show-all-users",canActivate: [AuthGuard]},
  {component:SearchBooksComponent, path:"app-search-books",canActivate: [AuthGuard]},
  {component:InventoryComponent, path:"app-inventory",canActivate: [AuthGuard]},
  {component:AddAuthorComponent, path:"app-add-author",canActivate: [AuthGuard]},
  {component:AddPublisherComponent, path:"app-add-publisher",canActivate: [AuthGuard]},
  {component:PlaceOrderComponent, path:"app-place-order",canActivate: [AuthGuard]},
  {component:PlaceCartOrderComponent, path:"app-place-cart-order",canActivate: [AuthGuard]},
  {component:CartComponent, path:"app-cart",canActivate: [AuthGuard]},
  {component:OrderHistoryComponent, path:"app-order-history",canActivate: [AuthGuard]},
  {component:MyOrdersComponent, path:"app-my-orders",canActivate: [AuthGuard]},
  {component:AddCustomerComponent, path:"app-add-customer"},
  {component:ArsenalBoxComponent, path:"app-arsenal-box",canActivate: [AuthGuard]}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
