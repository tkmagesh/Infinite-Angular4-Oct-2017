import { Component } from '@angular/core'

import { MathCalculatorModel } from './MathCalculatorModel';

@Component({
	selector : 'math-calculator-1',
	template : `
		<h1>Math Calculator - 1</h1>
		<hr>
		<input type="number" [(ngModel)]="model.number1">
		<input type="number" [(ngModel)]="model.number2">
		<input type="button" value="Add"  (click)="model.add()">
		<input type="button" value="Subtract" (click)="model.subtract()">      
		<input type="button" value="Multiply" (click)="model.multiply()">
		<input type="button" value="Divide" (click)="model.divide()">

		<math-result [data]="model.result"></math-result>
		<input type="button" value="Reset" (click)="model.clear()"/>
	`
})
export class MathCalculator1Component{
	
	/*model : MathCalculatorModel ;

	constructor( mathCalcualator : MathCalculatorModel){
		this.model = mathCalcualator;
	}*/

	constructor(private model : MathCalculatorModel){
		
	}

	
}