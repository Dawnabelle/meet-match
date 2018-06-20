import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  private events = new Map();
  private dates : Date[] = [];
  // private ascSort = function(date1 : Date, date2 : Date) {
  //   return date1.getTime() - date2.getTime();
  // };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.apiService.getEvents().subscribe(res => {
      res['events'].forEach(event => {
        if (event.venue != undefined){
          let endTime: number = parseInt(event.time) + parseInt(event.duration);

          event.time = new Date (parseInt(event.time));
          event.duration = new Date (endTime);
          event.local_date = new Date (event.local_date);

          if (this.events[event.local_date] !== null && this.events[event.local_date] != undefined) {
            if (!Array.isArray(this.events[event.local_date])){
              let list = this.events[event.local_date];
              this.events[event.local_date] = [list];
            }
            this.events[event.local_date].push(event);
          } else {
              this.events[event.local_date] = event;
              this.dates.push(event.local_date);
          }
        }
      });
    });
    // this.dates.sort(this.ascSort);
    console.log(this.events);
    console.log(this.dates);
  }

  public reformatDates(date : Date) {
      let formattedDate: Date = new Date(date);
      return formattedDate.toDateString();
  }



}
