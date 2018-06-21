import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() childEvent : Object;
  
  private hiddenInfo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    if (this.hiddenInfo === false) {
      this.hiddenInfo = true;
    } else {
      this.hiddenInfo = false;
    }
  }

}
