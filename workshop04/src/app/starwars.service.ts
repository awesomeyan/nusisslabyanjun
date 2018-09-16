
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {People} from './model';

const URL = 'https://swapi.co/api/people';

@Injectable()
export class StarWarsService{
    constructor(private http: HttpClient){

    }

    searchPeople(id: number): Promise<People>{
        //this.http.get(URL + id) //string concat
        return (
        this.http.get<People>(`https://swapi.co/api/people/${id}`) //string interpolation
            .toPromise()
            .then(result => {
                result.id = id;
                result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                return (result);
            })
        );
    }
}

