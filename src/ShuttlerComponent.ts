import React from 'react';
import ShuttleStack from '../Shuttler/ShuttleStack';

interface IProps<TModel>{
    shuttleStack: ShuttleStack<TModel>
}

interface IState{
    refreshTrigger: number
}

export default abstract class ShuttlerComponent<TModel> extends React.PureComponent<IProps<TModel>,IState>{
    
    state={
        refreshTrigger: 0
    };
    

    unsubscribe: () => void = () => { throw new Error("Unsubscribe callback is not set");}

    abstract modelWasPushed(): void;

    
    pushDelta(model: TModel | any){
        this.pushFullModel(Object.assign(this.props.shuttleStack.model,model as TModel));
    }

    pushFullModel(model: TModel){
        this.props.shuttleStack.push(model);
    }

    componentDidMount(){
        this.unsubscribe = this.props.shuttleStack.subscribe(() => {
            this.modelWasPushed();
            this.forceUpdate();
        });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
}