import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector : 'bug-sort',
    styleUrls : ['style.css'],
    
    template : `
    <section class="sort">
            <label for="">Order By :</label>
            <input type="text" [(ngModel)] = "sortOrder.name" (keyup)="setSortOrder()">
            <label for="">Descending ? :</label>
            <input type="checkbox" [(ngModel)] = "sortOrder.descending" (click)="setSortOrder()">
        </section>
  `
})
export class BugSort{
    sortOrder:{name : string, descending : boolean} = {name : '', descending : false}

    @Output()
    OnSort:EventEmitter<{name : string, descending : boolean}> = new EventEmitter<{name : string, descending : boolean}>();

    setSortOrder(){
        this.OnSort.emit(this.sortOrder)
    }
}