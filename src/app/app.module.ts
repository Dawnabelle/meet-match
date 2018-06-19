import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN5uD_Uw7DzOv6HeG7n55IdeZdeZkKWiA'
    })
  ],
  providers: [],
  declarations: [ AppComponent, EventsComponent, DetailsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
