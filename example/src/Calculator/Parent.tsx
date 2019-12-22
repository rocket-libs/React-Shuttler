import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import ChildThree from './ChildThree'
import CalculatorModel from './CalculatorModel'
import { ShuttleStack } from '../reactComponentLib'

export default class Parent extends React.PureComponent{
    shuttleStack: ShuttleStack<CalculatorModel> = new ShuttleStack<CalculatorModel>();

    componentDidMount(){
        this.shuttleStack.push(new CalculatorModel(1,2))
    }

    render(){
        return  <div>
                    <ChildOne
                        shuttleStack={this.shuttleStack} />
                    <div>+</div>
                    <ChildTwo
                        shuttleStack={this.shuttleStack} />
                    <div>=</div>
                    <ChildThree
                        shuttleStack={this.shuttleStack} />
                </div>
    }
}