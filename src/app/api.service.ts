import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    USER_URL = 'https://pdxmeetups.herokuapp.com/api';
    MEETUPS_URL = `https://api.meetup.com/find/upcoming_events?photo-host=public&topic_category=34&page=20&text=`;
    constructor(private http:HttpClient) {}
    keyword : String = "ruby";
    sigId: String = "231200293";
    sig: String = "53a911c54a8d172e98264d9bb8ea3f2f88f99e70";

    getEvents() {
      this.http.get(`${this.MEETUPS_URL}${this.keyword}&sig_id=${this.sigId}&sig=${this.sig}`) // Calls Meetup API
    }

    getUsers() {
      this.http.get(`${this.USER_URL}/users`) // User API
    }
}
