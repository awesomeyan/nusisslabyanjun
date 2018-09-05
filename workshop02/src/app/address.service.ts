import { Injectable } from "@angular/core";
import {Address} from './model';

import Dexie from 'dexie';

@Injectable()
export class AddressService {

    private db: Dexie;

    constructor(){
        //Create the database
        this.db = new Dexie('addressbook');
        //Define the object store's schema
        this.db.version(1).stores({
            contacts: 'email,name,address,phone'
        });
    }

    addNewAddress(address: Address): Promise<string>{
        return this.db['contacts'].put(address);
    }

    findAddress(pattern:RegExp): Promise<Address[]>{
        return(
            this.db['contacts'].orderBy('name').filter(addr => {
                return(pattern.test(addr.name));
            })
            .toArray()
        );
    }
}