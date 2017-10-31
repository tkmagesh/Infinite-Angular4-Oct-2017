import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector : 'math-result',
	templateUrl : 'mathResult.component.html'
})
export class MathResultComponent{

	@Input()
	data : number = 0;

	resultClass = {
		positive : true,
		negative : false
	}

	ngOnChanges(){
		this.resultClass = {
			positive : this.data >= 0,
			negative : this.data < 0
		}
	}

	isGreaterThan1000(){
		return this.data > 1000;
	}
}