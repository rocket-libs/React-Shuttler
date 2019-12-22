export default class ShuttleStack<TModel> {
    _model: TModel | undefined;
    listners: {
        (model: TModel): void;
    }[];
    subscribe(fn: (model: TModel) => void): () => void;
    push(model: TModel): void;
    get model(): TModel | undefined;
}
