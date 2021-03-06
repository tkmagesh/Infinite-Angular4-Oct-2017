import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from '../services/BugServer.service';

@Component({
	selector: 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="createNewClicked()">
		</section>
	`
})
export class BugEditComponent implements OnInit {

	newBugName : string = '';

	@Output()
	create : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugServer : BugServerService) {

	}

	ngOnInit() {
		
	}

	createNewClicked(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.create.emit(newBug));
		
	}
}