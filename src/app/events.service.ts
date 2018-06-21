import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events = new Object();
  private dates : Date[] = [];
  private eventCount : number = 0;

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
      this.eventCount = this.eventCount + 1;
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

}
