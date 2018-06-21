import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { EventsService } from '../events.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [ApiService, EventsService, UserService]
})

export class EventsComponent implements OnInit {
  private savedEvents : Object;
  private dates: Date[];
  private users: Object[];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private eventsService: EventsService,
    private userService : UserService) { }

  ngOnInit() {
    this.apiService.saveEvents();
    // this.apiService.saveUsers();
    this.savedEvents = this.eventsService.getEvents();
    this.dates = this.eventsService.getDates();
    // this.users = this.userService.getUsers();
    console.log(this.savedEvents);
  }

  goToDetailPage(clickedEvent: object) {
    this.router.navigate(['details/', clickedEvent['id']])
  }

}
