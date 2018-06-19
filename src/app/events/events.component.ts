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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.apiService.getEvents().subscribe(res => {
      for (let i = 0; i < res['events'].length; i++) {
        if (res['events'][i].venue != undefined){
          let endTime: number = parseInt(res['events'][i].time) + parseInt(res['events'][i].duration);

          res['events'][i].time = new Date (parseInt(res['events'][i].time));
          res['events'][i].duration = new Date (endTime);
          // res['events'][i].local_date = this.reformatDates(res['events'][i].local_date);

          if (this.events[res['events'][i].local_date] !== null && this.events[res['events'][i].local_date] != undefined) {
            if (!Array.isArray(this.events[res['events'][i].local_date])){
              let list = this.events[res['events'][i].local_date];
              this.events[res['events'][i].local_date] = [list];
            }
            this.events[res['events'][i].local_date].push(res['events'][i]);
          } else {
              this.events[res['events'][i].local_date] = res['events'][i];
              this.dates.push(new Date(res['events'][i].local_date));
          }
        }
      }
    });
    this.dates.sort(function(date1,date2) {
      return date1.getTime() - date2.getTime();
    });
    console.log(this.events);
    console.log(this.dates);
  }

  public reformatDates(date : Date) {
      let formattedDate: Date = new Date(date);
      return formattedDate.toDateString();
  }

}
