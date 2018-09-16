import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {PeopleListComponent} from './components/people-list.component';
import {AddPeopleComponent} from './components/add-people.component';
import { DetailsComponent } from './components/details.component';
//Application Manifest generatopr
const ROUTES: Routes = [
    {path: 'people', component: PeopleListComponent},
    {path: 'add', component: AddPeopleComponent},
    { path: 'detail/:cid', component: DetailsComponent },
        {path: '', component: PeopleListComponent},

    {path: '**', component: PeopleListComponent}
    // {path: '**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]

})

export class AppRoutesModule{}