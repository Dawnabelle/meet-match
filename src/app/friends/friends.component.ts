import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  providers: [ApiService, UserService]
})
export class FriendsComponent implements OnInit {
  private users: Array<Object>;

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit() {
    this.apiService.saveUsers();
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

}
