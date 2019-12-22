import React from 'react';
import ShuttleStack from './ShuttleStack';
interface IProps<TModel> {
    shuttleStack: ShuttleStack<TModel>;
}
export default abstract class ShuttlerComponent<TModel> extends React.PureComponent<IProps<TModel>> {
    unsubscribe: () => void;
    abstract modelWasPushed(): void;
    pushDelta(model: TModel | any): void;
    pushFullModel(model: TModel): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export {};
