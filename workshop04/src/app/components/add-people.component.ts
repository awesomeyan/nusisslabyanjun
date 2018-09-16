import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(private router: Router,
    private swdbSvc: StarWarsDatabaseService,
    private swSvc: StarWarsService) { }

  ngOnInit() { }

  save(form: NgForm) {
    console.log('ngform: ', form.value.peopleId);
    this.swdbSvc.find(form.value.peopleId)
      .then(
        () => {  //resolve
          this.router.navigate(['/']);
          throw false;
        },
        this.swSvc.searchPeople.bind(this.swSvc)
      )
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      .then(id => {
        console.log('id: ', id);
        this.router.navigate(['/'], { 
          queryParams: { message: `Saved ${id}` }
        });
      })
      .catch(err => {
        if (!err) {
          return;
        }
        console.error('>>> error: ', err)
        this.router.navigate(['/'], { 
          queryParams: { message: `Error: ${err}` }
        });
      })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
