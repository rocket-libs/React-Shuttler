export default class ShuttleStack<TModel>{
  _model: TModel | undefined;
  listners: {(model: TModel): void; } [] = [];

  subscribe( fn: (model: TModel) => void) : () => void {
      this.listners.push(fn);
      const unsubscribe = () => this.listners = this.listners.filter(singleFn => singleFn !== fn);
      return unsubscribe;
  }

  push(model: TModel){
      this._model = model;
      this.listners.map(singleFn => singleFn(model));
  }

  get model(){
      return this._model;
  }
}