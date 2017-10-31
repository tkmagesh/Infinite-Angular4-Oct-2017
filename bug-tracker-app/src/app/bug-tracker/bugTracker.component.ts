import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
		<hr>
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="bugSortBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="bugSortDescending">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create New" (click)="createNewClicked(txtBugName.value)">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of ( bugs | sort:bugSortBy:bugSortDescending )">
					<span class="bugname" (click)="bugClicked(bug)" 
						[ngClass]="{closed : bug.isClosed}"
						title="{{bug.name}}">{{bug.name | trimText:40 }}</span>
					<div class="datetime">[Created At]</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="removeClosedClicked()">
		</section>
	`,
	styleUrls : []
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	bugSortBy : string = '';
	bugSortDescending : boolean =  false;

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
	removeClosedClicked(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount(){
		let closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
} 



