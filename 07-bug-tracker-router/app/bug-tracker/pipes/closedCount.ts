import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'closedCount',
    pure : false
})
export class ClosedCount implements PipeTransform{
    transform(bugs : any) : number{
        return bugs.reduce((result, bug) => bug.isClosed ? ++result :  result, 0);
    }
}