import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector : 'bug-search',
    styleUrls : ['style.css'],
    template : `
     <section class="search">
            <label for="">Search :</label>
            <input type="text" [(ngModel)]="searchBug" (keyup)="setSearch()" >
            <label for="">Is Closed :</label>
            <input type="checkbox" >
        </section>
    `
})
export class BugSearch{
    @Output()
    OnSearch:EventEmitter<string> = new EventEmitter<string>();

    setSearch(){
        console.log(this.searchBug);
        this.OnSearch.emit(this.searchBug);
    }
    searchBug:string = '';
}