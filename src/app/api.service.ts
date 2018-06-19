import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class apiService {

    constructor(private http:HttpClient) {}

    makeCalls() {
        return forkJoin(
            this.http.get(''), // Meetup API
            this.http.get(''), // User API
            this.http.get('') // GoogleMaps API
        );
    }
}
