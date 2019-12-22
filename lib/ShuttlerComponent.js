"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ShuttlerComponent extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            refreshTrigger: 0
        };
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
exports.default = ShuttlerComponent;
