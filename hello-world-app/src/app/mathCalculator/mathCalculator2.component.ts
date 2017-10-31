import { Component } from '@angular/core';
import { MathCalculatorModel } from './MathCalculatorModel';
@Component({
	selector : 'math-calculator-2',
	template : `
		<h1>Math Calculator - 2</h1>
		<hr>
		<input type="number" [(ngModel)]="model.number1">
		<select [(ngModel)]="operator">
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="number" [(ngModel)]="model.number2">
		<input type="button" value="Calculate" (click)="calculate()">
		<div>{{model.result}}</div>
	`
})
export class MathCalculator2Component{
	model : MathCalculatorModel = new MathCalculatorModel();

	operator : string = '';

	calculate(){
		switch (this.operator) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}
	}
}