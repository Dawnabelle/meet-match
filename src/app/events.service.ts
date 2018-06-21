import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMap, Marker } from '@agm/core/services/google-maps-types';

declare const google;
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events = new Object();
  private dates : Date[] = [];
<<<<<<< HEAD
  private friendMarkers: marker[] = [];
  private userMarkers: marker[] = [];
  private markers: marker[] = [];
=======
  private eventCount : number = 0;
>>>>>>> master

  constructor() { }

  addEvent(event) {
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
      if (event.local_date.toString().match('Mon') != null && event.local_date.toString().match('Mon').length > 0) {
        this.userMarkers.push({
          "lat":event.venue.lat,
          "lng":event.venue.lon,
          "iconUrl": "./assets/user.png"
        });
      } else if (event.local_date.toString().match('Sun') != null && event.local_date.toString().match('Sun').length > 0) {
        this.friendMarkers.push({
          "lat":event.venue.lat,
          "lng":event.venue.lon,
          "iconUrl": "./assets/friend.png"
        });
      } else {
        this.markers.push({
          "lat":event.venue.lat,
          "lng":event.venue.lon,
          "iconUrl": "./assets/marker.png"
        });
      }
    }
  }

  getEvents(){
    return this.events;
  }

  getEventCount(){
    return this.eventCount;
  }

  getDates(){
    return this.dates;
  }

  getEventById(eventId: string) {
    const searchId = eventId;
    console.log(this.events);
    for (const prop in this.events) {
    console.log(prop);
      this.events[prop].forEach(event => {
          if (event['id'].match(searchId)) {
            return event;
          }
        });
    }
  }

  reformatDates(date : Date) {
      let formattedDate: Date = new Date(date);
      return formattedDate.toDateString();
  }

  checkKeys(date : Date) {
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

  getMarkers(){
    return this.markers;
  }

  getUserMarkers(){
    return this.userMarkers;
  }

  getFriendMarkers(){
    return this.friendMarkers;
  }
}

interface marker {
  lat: number;
  lng: number;
  iconUrl: string;
}
