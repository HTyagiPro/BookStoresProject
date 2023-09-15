import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { ArsenalBoxComponent } from './arsenal-box/arsenal-box.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { BookService } from './book-shelf/book-shelf.service';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddBookService } from './add-books/add-books.service';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAuthorService } from './add-author/add-author.service';
import { AddPublisherService } from './add-publisher/add-publisher.service';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchBooksService } from './search-books/search-books.service';
import { ShowAllCustomersComponent } from './show-all-customers/show-all-customers.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { CustomerService } from './show-all-customers/show-all-customers.service';
import { UserService } from './show-all-users/show-all-users.service';
import { PlaceOrderService } from './place-order/place-order.service';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory/inventory.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderHistoryService } from './order-history/order-history.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { PlaceCartOrderComponent } from './place-cart-order/place-cart-order.component';
import { PlaceCartOrderService } from './place-cart-order/place-cart-order.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrderHistoryService } from './my-orders/my-orders.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { BFormRatingModule } from 'path-to-b-form-rating-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NevbarComponent,
    ArsenalBoxComponent,
    SignupComponent,
    BookShelfComponent,
    AddBooksComponent,
    AddAuthorComponent,
    AddPublisherComponent,
    AddCustomerComponent,
    PlaceOrderComponent,
    SearchBooksComponent,
    ShowAllCustomersComponent,
    ShowAllUsersComponent,
    InventoryComponent,
    OrderHistoryComponent,
    CartComponent,
    PlaceCartOrderComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [LoginService,
              BookService, 
              AddBookService, 
              AddAuthorService,
              AddPublisherService, 
              SearchBooksService, 
              CustomerService,
              UserService,
              PlaceOrderService,
              InventoryService,
              OrderHistoryService,
              CartService,
              PlaceCartOrderService,
              MyOrderHistoryService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
