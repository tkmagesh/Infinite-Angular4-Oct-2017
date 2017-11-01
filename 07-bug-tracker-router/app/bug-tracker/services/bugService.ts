import {Injectable} from '@angular/core';


import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable}  from 'rxjs/Observable';

@Injectable()
export class BugService{
    constructor(private http : Http){

    }
    getAll(){
        return this.http
            .get('http://localhost:3000/bugs')
            .map(response => response.json())
    }

    addNew(newBug){
        
        return this.http
            .post('http://localhost:3000/bugs', newBug)
            .map(response => response.json());
    }

    save(bug){
        console.log('triggering save fgor ', bug);
        return this.http
            .put('http://localhost:3000/bugs/' + bug.id, bug)
            .map(response => response.json())
            .subscribe(response => {});
    }

    remove(bug){
        return this.http
            .delete('http://localhost:3000/bugs/' + bug.id)
            .subscribe(response => {});
    }
}