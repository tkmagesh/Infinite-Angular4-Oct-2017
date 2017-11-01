import {Component, Input} from '@angular/core';


@Component({
    selector : 'bug-stats',
    styleUrls : ['style.css'],
    
    template : `
    <section class="stats">
            <span class="closed">{{Bugs | closedCount}}</span>
            <span> / </span>
            <span>{{Bugs.length}}</span>
        </section>
  `
})
export class BugStats{
    @Input()
    Bugs : any = null;
}