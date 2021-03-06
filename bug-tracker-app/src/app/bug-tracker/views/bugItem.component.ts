import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from '../services/BugServer.service';


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

	constructor(private bugServer : BugServerService) {
	}


	ngOnInit() {
		
	}

	bugClicked(bugToToggle){
		/*bug.isClosed = !bug.isClosed;*/
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.toggle.emit(toggledBug));
		
	}
}