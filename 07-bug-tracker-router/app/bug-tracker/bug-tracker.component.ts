import {Component, OnInit} from '@angular/core';
import {BugOperations} from './services/bugOperations';
import {BugService} from './services/bugService';

import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable}  from 'rxjs/Observable';

@Component({
    selector : 'bug-tracker',
    styleUrls : ['style.css'],
    template : `
    <div class="content">
        <a routerLink='/add'>Create New</a>
        <bug-stats [Bugs]="bugs"></bug-stats>
        <bug-search (OnSearch)="onSearchBug($event)"></bug-search>
        <bug-sort (OnSort)="onSortBug($event)"></bug-sort>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" [(ngModel)]="newBug">
            <input type="button" value="Add New" (click)="onAddNew()">
        </section>
        <section class="list">
            <ol>
               <li [className]="bug.isClosed ? 'closed' : ''" *ngFor="let bug of (bugs | filter:searchBug | sort:sortOrder)" (click) = "toggle(bug)">
                    <span>{{bug.name | trimText}}</span>
                    <div><a [routerLink]="['/details',bug.id]">More</a></div>
               </li>
            </ol>
            <input type="button" value="Remove Closed" (click)="removeClosed()">
        </section>
    </div>
    `
})
export class BugTracker implements OnInit{
    bugs = [];

    newBug:string = '';

    searchBug:string = '';

    sortOrder:{name : string, descending : boolean } = {name : '', descending : false};
    //sortOrder:string = '';

    constructor(private bugOperations : BugOperations, private bugService : BugService){
        
    }

    ngOnInit(){
        this.bugService.getAll().subscribe(bugs => this.bugs = bugs);
    }
    
    onSearchBug(bugName){
        console.log('search bug name = ', bugName);
        this.searchBug = bugName;
    }

    onSortBug(sortOrder){
        this.sortOrder = sortOrder;
    }

    onAddNew(){
        var newBugData = this.bugOperations.createNew(this.newBug);
        this.bugService.addNew(newBugData).subscribe(bug => this.bugs.push(bug));
    }

    toggle(bug){
        this.bugOperations.toggle(bug);
        this.bugService.save(bug);
    }
    
    removeClosed(){
        for(let i:number = this.bugs.length-1; i >=0; i--){
            if (this.bugs[i].isClosed){
                this.bugService.remove(this.bugs[i]);
                this.bugs.splice(i,1);
            }
        }
    }
}