/* eslint-disable */
import React from 'react';

class ShuttleStack {
    constructor() {
        this.listners = [];
    }
    subscribe(fn) {
        this.listners.push(fn);
        const unsubscribe = () => this.listners = this.listners.filter(singleFn => singleFn !== fn);
        return unsubscribe;
    }
    push(model) {
        this._model = model;
        this.listners.map(singleFn => singleFn(model));
    }
    get model() {
        return this._model;
    }
}

class ShuttlerComponent extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.unsubscribe = () => { throw new Error("Unsubscribe callback is not set"); };
    }
    pushDelta(model) {
        this.pushFullModel(Object.assign(this.props.shuttleStack.model, model));
    }
    pushFullModel(model) {
        this.props.shuttleStack.push(model);
    }
    componentDidMount() {
        this.unsubscribe = this.props.shuttleStack.subscribe(() => {
            this.modelWasPushed();
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
}

export { ShuttleStack, ShuttlerComponent };
