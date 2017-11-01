import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'filter',
    pure : false
})
export class Filter implements PipeTransform{
    transform(data : Array<any>, filterBy : any) : Array<any>{
        return filterBy ? data.filter(data => data.name.indexOf(filterBy) !== -1) : data;
    }
}