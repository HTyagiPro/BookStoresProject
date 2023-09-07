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
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,BookService, AddBookService, AddAuthorService,AddPublisherService, SearchBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
