import {Component, OnInit} from '@angular/core';
import {BugOperations} from '../../services/bugOperations';
import {BugService} from '../../services/bugService';
import {Router} from '@angular/router';

import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable}  from 'rxjs/Observable';

@Component({
    selector : 'bug-add',
    styleUrls : ['style.css'],
    template : `

        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" [(ngModel)]="newBug">
            <input type="button" value="Add New" (click)="onAddNew()">
        </section>
        
    `
})
export class BugAdd implements OnInit{
   

    newBug:string = '';

    

    constructor(private bugOperations : BugOperations, private bugService : BugService, private router : Router){
        
    }

    ngOnInit(){
       
    }
    
    

    onAddNew(){
        var newBugData = this.bugOperations.createNew(this.newBug);
        this.bugService.addNew(newBugData).subscribe(bug => this.router.navigate(['bugs']));
    }

    
}