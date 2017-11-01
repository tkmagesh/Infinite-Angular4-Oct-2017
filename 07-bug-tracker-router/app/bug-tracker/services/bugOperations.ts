import {Injectable} from '@angular/core';

@Injectable()
export class BugOperations{
    createNew(bugName){
        return {
            id : 0,
            name : bugName,
            isClosed : false
        }
    }

    toggle(bug){
        bug.isClosed = !bug.isClosed
    }
}