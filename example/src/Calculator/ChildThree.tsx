import React from 'react';

import { ShuttlerComponent } from '../reactComponentLib';
import CalculatorModel from './CalculatorModel';


export default class ChildThree extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        console.log(this.props.shuttleStack.model);
        
    }

    get _inputValue(): string{
        if(this.props.shuttleStack.model){
            return this.props.shuttleStack.model.answer;
        }else{
            return "";
        }
    }

    render(){
        return <div>
                    <input 
                        defaultValue={this._inputValue}
                        readOnly={true}
                        type="text"/>
                </div>
        
    }
}