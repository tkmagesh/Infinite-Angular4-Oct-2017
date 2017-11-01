import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sort',
    pure : false
})
export class Sort implements PipeTransform{
    transform(data : Array<any>, sortOrder : any) : Array<any>{
        if (sortOrder.name){
            var order = sortOrder.descending ? -1 : 1;
            return data.sort(function(b1, b2){
                if (b1[sortOrder.name] > b2[sortOrder.name]) return 1 * order;
                if (b1[sortOrder.name] < b2[sortOrder.name]) return -1 * order;
                return 0;
            } )
        } else {
            return data;
        }
    }
}








