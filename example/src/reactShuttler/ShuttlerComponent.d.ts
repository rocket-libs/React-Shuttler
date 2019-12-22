import React from 'react';
import ShuttleStack from '../Shuttler/ShuttleStack';
interface IProps<TModel> {
    shuttleStack: ShuttleStack<TModel>;
}
interface IState {
    refreshTrigger: number;
}
export default abstract class ShuttlerComponent<TModel> extends React.PureComponent<IProps<TModel>, IState> {
    state: {
        refreshTrigger: number;
    };
    unsubscribe: () => void;
    abstract modelWasPushed(): void;
    pushDelta(model: TModel | any): void;
    pushFullModel(model: TModel): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export {};
