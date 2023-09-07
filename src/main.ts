import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HttpHeaders } from '@angular/common/http';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
//console.log(window.localStorage.getItem("token"));

//postMessage(url,data,{headers:header})

  