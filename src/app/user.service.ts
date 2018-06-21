import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : Object[] = [];

  constructor() { }

  addUser(user: Object) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
