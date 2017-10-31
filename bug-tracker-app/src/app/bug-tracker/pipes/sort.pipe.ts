import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number ;
}


@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparer(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] === item2[attrName]) return 0;
			return 1;
		}
	}
	/*private getDescendingComparer(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return 1;
			if (item1[attrName] === item2[attrName]) return 0;
			return -1;
		}
	}*/
	private getDescendingComparer(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1
		}
	}
	transform(list: any[], attrName : string, isDescending : boolean = false): any{
		let comparer = this.getComparer(attrName);
		if (isDescending){
			comparer = this.getDescendingComparer(comparer);
		}
		return list.sort(comparer);
	}
}