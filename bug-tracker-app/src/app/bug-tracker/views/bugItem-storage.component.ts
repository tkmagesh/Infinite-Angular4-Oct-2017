import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from '../services/BugStorage.service';

@Component({	
	selector: 'bug-item',
	template : `
		<li>
			<span class="bugname" (click)="bugClicked(bug)" 
				[ngClass]="{closed : bug.isClosed}"
				title="{{bug.name}}">{{bug.name | trimText:40 }}</span>
			<div class="datetime">{{bug.createdAt | elapsed}}</div>
		</li>
	`
})
export class BugItemComponent implements OnInit {

	@Input('data')
	bug : Bug ;

	@Output()
	toggle : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugStorage : BugStorageService) {
	}


	ngOnInit() {
		
	}

	bugClicked(bugToToggle){
		/*bug.isClosed = !bug.isClosed;*/
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.toggle.emit(toggledBug);
	}
}