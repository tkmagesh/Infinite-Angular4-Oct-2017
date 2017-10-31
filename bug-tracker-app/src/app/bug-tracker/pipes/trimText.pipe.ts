import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(value: any, trimLength : number = 30): any{
		return value.length <= trimLength ? value : value.substr(0,trimLength) + '...';
	}

}