//state & behavior
export class MathCalculatorModel{
	number1 : number = 0;
	number2 : number = 0;
	result : number = 0;

	add(){
		this.result = this.number1 + this.number2;
	}
	subtract(){
		this.result = this.number1 - this.number2;
	}
	multiply(){
		this.result = this.number1 * this.number2;
	}
	divide(){
		this.result = this.number1 / this.number2;
	}

	clear(){
		this.number1 = 0;
		this.number2 = 0;
		this.result = 0;
	}
}

export class Dummy{

}