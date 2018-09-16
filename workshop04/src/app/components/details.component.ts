import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  canShare = false;
  people: People;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private swdbSvc: StarWarsDatabaseService
  ) { }

  ngOnInit() { 
    this.canShare = !!navigator['share'];
    const cid = parseInt(this.activatedRoute.snapshot.params.cid)
    console.log('> pid = ', cid);
    this.swdbSvc.find(cid)
      .then(result => {
        this.people = result
        console.log('result: ', result);
      })
      .catch(err => {
        this.snackBar.open(`Not found ${cid}`, '', {
          duration: 2000
        })
        .afterDismissed().toPromise()
        .then(() => {
          this.router.navigate(['/']);
        })
      });
  }

  share() {
    navigator['share']({
      title: `Star Wars!`,
      text: `Sharing ${this.people.name} with the world!`,
      url: 'https://chukmunnlee.github.io/madh5sept'
    })
  }

  back() {
    this.router.navigate(['/']);
  }

}
