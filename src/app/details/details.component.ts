import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ EventsService ]
})
export class DetailsComponent implements OnInit {
  eventId: string;
  eventToDisplay: Object;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = urlParameters['id'];
    });
    this.eventToDisplay = this.eventsService.getEventById(this.eventId);
  }

}
