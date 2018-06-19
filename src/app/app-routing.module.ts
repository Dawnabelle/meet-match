import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent }   from './friends/friends.component';
import { EventsComponent }      from './events/events.component';
import { DetailsComponent }  from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'all-events', component: EventsComponent },
  { path: 'my-events', component: UserEventsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'friends', component: FriendsComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
