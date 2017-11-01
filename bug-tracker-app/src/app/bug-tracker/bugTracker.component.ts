import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/BugStorage.service';


@Component({
	selector : 'bug-tracker',
	template : `
		<h1>Bug Tracker</h1>
		<hr>
		<bug-stats [data]="bugs"></bug-stats>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="bugSortBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="bugSortDescending">
		</section>
		<bug-edit (create)="bugCreated($event)"></bug-edit>
		<section class="list">
			<ol>
				<li *ngFor="let bug of ( bugs | sort:bugSortBy:bugSortDescending )">
					<span class="bugname" (click)="bugClicked(bug)" 
						[ngClass]="{closed : bug.isClosed}"
						title="{{bug.name}}">{{bug.name | trimText:40 }}</span>
					<div class="datetime">{{bug.createdAt | elapsed}}</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="removeClosedClicked()">
		</section>
	`,
	styleUrls : []
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	bugSortBy : string = '';
	bugSortDescending : boolean =  false;

	newBugName : string = '';

	constructor(private bugStorage : BugStorageService){
		
	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}
	bugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	bugClicked(bugToToggle){
		/*bug.isClosed = !bug.isClosed;*/
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	removeClosedClicked(){
		/*for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}*/

		//this.bugs = this.bugs.filter(bug => !bug.isClosed);

		//remove the closed bugs
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug));

		this.bugs = this.bugStorage.getAll();

	}


} 



