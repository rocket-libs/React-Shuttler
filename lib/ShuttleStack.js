"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = ShuttleStack;
