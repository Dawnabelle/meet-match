import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.ApiService.getEvents().subscribe((data: Array<object>) => {
    })
  }

}
