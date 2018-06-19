import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    USER_URL = 'https://pdxmeetups.herokuapp.com/api';
    MEETUPS_URL = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-122.6587&topic_category=34&page=50`;
    constructor(private http: HttpClient) {}
    private keyword : String = "";
    private key: String = "1987d7e31d25226a76c7a416b2e31";

    getEvents() {
      return this.http.get(`${this.MEETUPS_URL}&text=${this.keyword}&key=${this.key}`) // Calls Meetup API
    }

    getUsers() {
      return this.http.get(`${this.USER_URL}/users`) // User API
    }
}
