import { Component } from '@angular/core'

@Component({
	selector : 'math-calculator-1',
	template : `
		<h1>Math Calculator - 1</h1>
		<hr>
		<input type="number" #txtNumber1>
		<input type="number" #txtNumber2>
		<input type="button" value="Add"  (click)="addClick(txtNumber1.value, txtNumber2.value)">
		<input type="button" value="Subtract" (click)="subtractClick(txtNumber1.value, txtNumber2.value)">      
		<input type="button" value="Multiply" (click)="multiplyClick(txtNumber1.value, txtNumber2.value)">
		<input type="button" value="Divide" (click)="divideClick(txtNumber1.value, txtNumber2.value)">
		<div>{{result}}</div>
	`
})
export class MathCalculator1Component{
	result : number = 0;

	addClick(number1Value, number2Value){
		this.result = parseInt(number1Value, 10) + parseInt(number2Value, 10);
	}
	subtractClick(number1Value, number2Value){
		this.result = parseInt(number1Value, 10) - parseInt(number2Value, 10);		
	}
	multiplyClick(number1Value, number2Value){
		this.result = parseInt(number1Value, 10) * parseInt(number2Value, 10);		
	}
	divideClick(number1Value, number2Value){
		this.result = parseInt(number1Value, 10) / parseInt(number2Value, 10);		
	}
}