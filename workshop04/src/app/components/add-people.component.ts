import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {StarWarsStorageService} from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';
@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(private router: Router, private swStSvc: StarWarsStorageService, private swSvc: StarWarsService) { }

  ngOnInit() {
  }

  navigateBack(){
    this.router.navigate(['/']);
  }

  save(form: NgForm){
    console.log('people id: ', form.value.peopleId);
    this.swStSvc.find(form.value.peopleId)
      .then(
      () => {
        this.router.navigate(['/']);
        throw false;
      },
        this.swSvc.searchPeople.bind(this.swSvc)
      )
      .then(this.swStSvc.save.bind(this.swStSvc))
      .then(id =>{
        console.log('id: ', id)
        this.router.navigate(['/'], {
            queryParams: {
              message: `Saved${id}`
            }
        });

      })
      .catch(err => {
        if(!err){
          return;
        }
        console.error('err: ', err);
      });
    // this.swStSvc.find(form.value.peopleId)
    //   .then(
    //     (result) => {
    //       console.log('from cache ', result)
    //     },
    //     this.swSvc.searchPeople.bind(this.swSvc) 
    //   )
    //   .then(this.swStSvc.save.bind(this.swStSvc))
    //   .catch(err => {
    //     console.error('err: ', err);
    //   });

    // this.swSvc.searchPeople(this.form.value.peopleId)
    // .then(this.swStSvc.save.bind(this.swSvc))
    // .then(result => {
    //   console.log('result ', result);
    //   this.swStSvc.save(result);


    
    form.resetForm();


  }
}
