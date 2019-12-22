import React from 'react';
import CalculatorModel from './CalculatorModel';
import { ShuttlerComponent } from '../reactComponentLib';


export default class ChildTwo extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        
    }

    get _inputValue(): number | undefined{
        if(this.props.shuttleStack.model){
            return this.props.shuttleStack.model.secondNumber;
        }else{
            return undefined;
        }
    }

    _valueChanged(e: any){
        this.pushDelta({secondNumber: parseFloat(e.target.value)});
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