import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [ApiService, EventsService]
})

export class EventsComponent implements OnInit {
  private savedEvents : Object;
  private dates: Date[];

  constructor(private apiService: ApiService, private router: Router, private eventsService: EventsService) { }

  ngOnInit() {
    this.apiService.saveEvents();
    this.savedEvents = this.eventsService.getEvents();
    this.dates = this.eventsService.getDates();
    console.log(this.savedEvents);
  }

  goToDetailPage(clickedEvent: object) {
    this.router.navigate(['details/', clickedEvent['id']])
  }

}
