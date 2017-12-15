import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//TODO module vs component
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
// import { HeroComponent } from './hero/hero.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here


import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';//moi ../hero.service
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
   // HeroComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
