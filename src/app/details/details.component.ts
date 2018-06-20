import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ ApiService ]
})
export class DetailsComponent implements OnInit {
  eventId: string;
  eventToDisplay: object;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = urlParameters['id'];
    });
    this.eventToDisplay = this.apiService.getEventById(this.eventId);
  }

}
