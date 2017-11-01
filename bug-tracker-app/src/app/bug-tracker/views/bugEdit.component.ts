import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from '../services/BugStorage.service';

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

	constructor(private bugStorage : BugStorageService) {

	}

	ngOnInit() {
		
	}

	createNewClicked(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		this.create.emit(newBug);
	}
}