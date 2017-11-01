import { Injectable } from '@angular/core';

import { Bug } from '../models/Bug';
import { BugOperationsService } from './BugOperations.service';

@Injectable()
export class BugStorageService{
	private currentBugId : number = 0;
	private storage : Storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService){

	}
	addNew(bugName : string) : Bug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	private save(bug : Bug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.save(toggledBug);
		return toggledBug;
	}

	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id.toString());
	}

	getAll() : Bug[]{
		let result : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				data = this.storage.getItem(key),
				bug = JSON.parse(data);
			result.push(bug);
		}
		return result;
	}

}