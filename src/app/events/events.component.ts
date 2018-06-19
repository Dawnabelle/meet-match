import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

private events: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.apiService.getEvents().subscribe(res => {
      console.log(res);
      for (let i = 0; i < res['events'].length; i++) {
        if (res['events'][i].venue != undefined){
          this.events.push(res['events'][i]);
          console.log(this.events);
        }
      }
    });
  }
}
