export default class ShuttleStack<TModel>{
  model: TModel;
  private listners: {(model: TModel): void; } [] = [];

  constructor(initialModel: TModel){
    this.model = initialModel;
  }

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