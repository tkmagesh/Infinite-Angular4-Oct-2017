import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugServerService } from './services/BugServer.service';


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
				<bug-item 
					*ngFor="let bug of ( bugs | sort:bugSortBy:bugSortDescending )"
					[data]="bug"
					(toggle)="onToggle($event)"
				>
				</bug-item>
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

	constructor(private bugServer : BugServerService){
		
	}

	ngOnInit(){
		this.loadBugs();
	}
	private loadBugs(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	bugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onToggle(toggledBug){
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	removeClosedClicked(){
		
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug).subscribe(_ => {}));

		this.loadBugs();
		//this.bugs = this.bugServer.getAll();

	}


} 



