import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './details/details.component';
import { FriendsComponent } from './friends/friends.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserEventsComponent } from './user-events/user-events.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN5uD_Uw7DzOv6HeG7n55IdeZdeZkKWiA'
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [ AppComponent, EventsComponent, DetailsComponent, FriendsComponent, UserEventsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
