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

const routes: Routes = [
  {component:LoginComponent, path:""},
  {component:SignupComponent, path:"app-signup"},
  {component:BookShelfComponent, path:"app-book-shelf"},
  {component:AddBooksComponent, path:"app-add-books"},
  {component:SearchBooksComponent, path:"app-search-books"},
  {component: AddAuthorComponent, path:"app-add-author"},
  {component: AddPublisherComponent, path:"app-add-publisher"},
  {component: AddCustomerComponent, path:"app-add-customer"},
  {component:ArsenalBoxComponent, path:"app-arsenal-box"}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
