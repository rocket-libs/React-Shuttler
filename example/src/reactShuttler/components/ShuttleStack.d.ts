export default class ShuttleStack<TModel> {
    model: TModel;
    private listners;
    constructor(initialModel: TModel);
    subscribe(fn: (model: TModel) => void): () => void;
    push(model: TModel): void;
}
