import React from 'react';
import { ShuttlerComponent } from '../reactComponentLib';
import CalculatorModel from './CalculatorModel';


export default class ChildOne extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        
    }

    _valueChanged(e: any){
        this.pushDelta({firstNumber: parseFloat(e.target.value)});
    }

    get _inputValue(): number | undefined{
        if(this.props.shuttleStack.model){
            return this.props.shuttleStack.model.firstNumber;
        }else{
            return undefined;
        }
    }

    render(){
        return <div>
                    <input 
                        defaultValue={this._inputValue}
                        onChange={(e: any) => this._valueChanged(e)}
                        type="text"/>
                </div>
        
    }
}