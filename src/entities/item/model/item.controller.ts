import { ItemEvents, ItemModel } from './item.model';

export class ItemController {
    constructor(private readonly itemModel: ItemModel) {}

    decreaseAmount() {
        this.itemModel.emitter.emit(ItemEvents.decrease);
    }

    increaseAmount() {
        this.itemModel.emitter.emit(ItemEvents.increase);
    }

    drag() {
        this.itemModel.emitter.emit(ItemEvents.drag);
    }

    get events() {
        return this.itemModel.emitter;
    }

    get itemData() {
        return {
            id: this.itemModel.id,
            name: this.itemModel.name,
            description: this.itemModel.description,
            img: this.itemModel.img,
            amount: this.itemModel.amount,
        };
    }
}
