import { Component, OnInit } from '@angular/core';
import {Address} from './model';
import {AddressService} from './address.service';
import {MatTabChangeEvent} from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private tabs = [
  {label: 'A - E', pattern: /^[a-e].*/i},
    {label: 'F - J', pattern: /^[f-j].*/i},
    {label: 'K - O', pattern: /^[k-o].*/i},
    {label: 'P - T', pattern: /^[p-t].*/i},
    {label: 'U - Z', pattern: /^[u-z].*/i}
  ]
// addressSvc: AddressService;

constructor(private addressSvc: AddressService){
  // this.addressSvc = svc;
}
processAddress(address: Address){
  console.log('addresses: ', address);
  this.addressSvc.addNewAddress(address)
  .then(result =>{
    console.log("Saved: ", result);
  })
  .catch(err => {
    console.error('err: ', err);
  });
}

ngOnInit(){
  this.addressSvc.findAddress(this.tabs[0].pattern)
  .then(addr =>{
    console.log('address: ', addr)
  })
  .catch(err =>{
    console.log('err: ', err);
  })
}

loadAddress(event: MatTabChangeEvent){
  console.log('event: ', this.tabs[event.index].pattern);
  const patt = this.tabs[event.index].pattern;
  this.addressSvc.findAddress(patt)
  .then(addr =>{
    console.log('address: ', addr)
  })
  .catch(err =>{
    console.log('err: ', err);
  })

}
}
