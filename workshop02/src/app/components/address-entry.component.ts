import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Address} from '../model';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.css']
})
export class AddressEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Output()
  newAddress = new EventEmitter<Address>();
  
  processForm(form: NgForm){
    console.log('form: ', form.value);
    // this.newAddress.next(form.value);

    //Cast form.value Address
    this.newAddress.next(<Address> form.value);
    form.resetForm();
  }

}
