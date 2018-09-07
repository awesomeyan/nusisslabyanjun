import { Component, OnInit } from '@angular/core';
import { StarWarsStorageService } from '../starwars.storage.service';
import {People} from '../model';
import {Router,ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  people: People[] = []
  
  constructor(private swdbSvc: StarWarsStorageService, private router: Router, private activatedRoute:ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.swdbSvc.getAll()
    .then(result =>{
      this.people = result;
      console.log('People ', this.people);
    })
    .catch(err =>{
      console.error('Error: ', err);
    })

    if(this.activatedRoute.snapshot.queryParams.message){
      this.snackbar.open(this.activatedRoute.snapshot.queryParams.message,'',{duration: 1000});
    }
  }

  navigateToAdd(){
    this.router.navigate(['/add']);
  }

}
