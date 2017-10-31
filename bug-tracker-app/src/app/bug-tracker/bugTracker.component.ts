import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
		<hr>
		<section class="stats">
			<span class="closed">1</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<section class="sort">
			<label for="">Order By :</label>
			<select name="" id="">
				<option value="id">[Default]</option>
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
				<option value="createdAt">Created At</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" name="" id="">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create New" (click)="createNewClicked(txtBugName.value)">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of bugs">
					<span class="bugname" (click)="bugClicked(bug)">{{bug | json}}</span>
					<div class="datetime">[Created At]</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed">
		</section>
	`,
	styleUrls : []
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	createNewClicked(bugName : string){
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	bugClicked(bug){
		bug.isClosed = !bug.isClosed;
	}
} 



