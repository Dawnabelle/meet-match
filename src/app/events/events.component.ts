import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

private events: Array<object> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.apiService.getEvents().subscribe((data: Array<object>) => {
      this.events = data;
      console.log(data);
    });
  }

}
