import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  private events = new Object();
  private dates : Date[] = [];
  // private ascSort = function(date1 : Date, date2 : Date) {
  //   return date1.getTime() - date2.getTime();
  // };
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  goToDetailPage(clickedEvent: object) {
    this.router.navigate(['details/', clickedEvent['id']])
  }

  public getEvents() {
    this.apiService.getEvents().subscribe(res => {
      res['events'].forEach(event => {
        if (event.venue != undefined){
          let endTime: number = parseInt(event.time) + parseInt(event.duration);

          event.time = new Date (parseInt(event.time));
          event.duration = new Date (endTime);
          event.local_date = new Date (event.local_date);

          if (this.events[event.local_date.toString()] !== null && this.events[event.local_date.toString()] != undefined) {
            if (!Array.isArray(this.events[event.local_date.toString()])){
              let list = this.events[event.local_date.toString()];
              this.events[event.local_date.toString()] = [list];
            }
            this.events[event.local_date.toString()].push(event);
          } else {
              this.events[event.local_date.toString()] = [event];
              this.dates.push(event.local_date);
          }
        }
      });
    });
    console.log(this.events);
    console.log(this.dates);
  }

  public reformatDates(date : Date) {
      let formattedDate: Date = new Date(date);
      return formattedDate.toDateString();
  }

  public checkKeys(date : Date) {
    let monthDay: string = date.toString().slice(4, 11);
    let eventKeys = Array.from(Object.keys(this.events));
    let keyPresent: boolean = false;

    eventKeys.forEach(key => {
      if (key.match(monthDay)) {
        keyPresent = true;
      }
    });
    return keyPresent;
  }
}
