export default class ShuttleStack<TModel> {
    model: TModel;
    constructor(initialModel: TModel);
    listners: {
        (model: TModel): void;
    }[];
    subscribe(fn: (model: TModel) => void): () => void;
    push(model: TModel): void;
    private differentObject;
}
