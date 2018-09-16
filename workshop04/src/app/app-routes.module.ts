import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddPeopleComponent } from './components/add-people.component';
import { DetailsComponent } from './components/details.component';

const ROUTES: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'add', component: AddPeopleComponent },
  { path: 'detail/:cid', component: DetailsComponent },

  //Catch all
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  //{ path: '**', component: PeopleListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
