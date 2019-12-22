export default class ShuttleStack<TModel>{
    model: TModel;

    constructor(initialModel: TModel){
      this.push(initialModel);
    }

    listners: {(model: TModel): void; } [] = [];

    subscribe( fn: (model: TModel) => void) : () => void {
        this.listners.push(fn);
        const unsubscribe = () => this.listners = this.listners.filter(singleFn => singleFn !== fn);
        return unsubscribe;
    }

    push(model: TModel){
        this.model = model;
        this.listners.map(singleFn => singleFn(model));
    }
}