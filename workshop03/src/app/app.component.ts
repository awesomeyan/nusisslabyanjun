import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StarWarsService} from './starwars.service';
import {StarWarsStorageService} from './starwars.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop03';

  // searchForm(forms: NgForm){
  //   console.log(forms.value);
  // }
  constructor(private swSvc: StarWarsService, private swStSvc: StarWarsStorageService){

  }

  

  @ViewChild('peopleForm')
  form: NgForm;


  searchForm(){
    console.log('people id: ', this.form.value.peopleId);

    this.swStSvc.find(this.form.value.peopleId)
      .then(
        (result) => {
          console.log('from cache ', result)
        },
        this.swSvc.searchPeople.bind(this.swSvc) 
      )
      .then(this.swStSvc.save.bind(this.swStSvc))
      .catch(err => {
        console.error('err: ', err);
      });

    // this.swSvc.searchPeople(this.form.value.peopleId)
    // .then(this.swStSvc.save.bind(this.swSvc))
    // .then(result => {
    //   console.log('result ', result);
    //   this.swStSvc.save(result);


    
    this.form.resetForm();


  }
}
