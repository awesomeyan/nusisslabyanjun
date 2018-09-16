import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { People } from './models';

const URL = 'https://swapi.co/api/people/';

@Injectable()
export class StarWarsService {

    constructor(private http: HttpClient) { }

    searchPeople(id: number): Promise<People> {
        console.log('search people: ', id);
        return (
            this.http.get<People>(`https://swapi.co/api/people/${id}`)
                .toPromise()            
                .then(result => {
                    result.id = id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                    return (result);
                })
        );
    }
}