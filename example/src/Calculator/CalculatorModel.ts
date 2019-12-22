export default class CalculatorModel{
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    get answer(): string{
        if(this.firstNumber && this.secondNumber){
            return (this.secondNumber + this.firstNumber).toString();
        }else{
            return "Not Known";
        }
    }

}