import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { AgmCoreModule, MapTypeStyle, GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMap, Marker } from '@agm/core/services/google-maps-types';

import { EventsService } from './events.service';
import { UserService } from './user.service';

declare const google;
declare const Marker;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    USER_URL = 'https://pdxmeetupsserver.herokuapp.com/api';
    MEETUPS_URL = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-122.6587&topic_category=34&page=50`;
    private keyword : String = "";
    private key: String = "1987d7e31d25226a76c7a416b2e31";

    constructor(
      private http: HttpClient,
      private eventsService : EventsService,
      private userService : UserService,
      private gmapsApi: GoogleMapsAPIWrapper) {}

    markers: marker[] =[]; // Populate with Event Id, Color, lat lng
    map : any;

    getEvents() {
      return this.http.get(`${this.MEETUPS_URL}&text=${this.keyword}&key=${this.key}`) // Calls Meetup API
    }

    getUsers() {
      let response : Object = {
        "users" : this.http.get<Object[]>(`${this.USER_URL}/users`)
      }
      return response;
    }

    saveEvents() {
      this.getEvents().subscribe(res => {
        res['events'].forEach(event => {
          this.eventsService.addEvent(event);
        });
      });
    }

    saveUsers() {
      this.getUsers()['users'].forEach(user => {
        this.userService.addUser(user);
      });
    }

    mapEvents() {
      this.gmapsApi.getNativeMap().then(map => {
        // this.map = map;
        // const mapMarkers = [];

        this.getEvents().subscribe(
          res => {
            res['events'].forEach( event => {
              console.log(event);
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(event.latitude, event.longitude)
              });
              this.markers.push(marker);
            });
            console.log(this.markers);
          }
        )
      });
    }
}

interface marker {
  lat: number;
  lng: number;
}
