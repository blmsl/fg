import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components, only available from barrel if exported in ./app/components/index.ts
import { NavComponent, GalleryComponent } from 'app/components';
// Services
import { ApiService } from 'app/services';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
