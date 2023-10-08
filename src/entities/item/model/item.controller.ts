import EventEmitter from 'eventemitter3';

import { ItemModel } from './item.model';
import { ItemEvents } from './types';

export class ItemController {
    readonly events = new EventEmitter();

    constructor(private readonly itemModel: ItemModel) {
        this.initEvents();
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

    initEvents() {
        this.events.addListener(ItemEvents.drag, () => {
            this.itemModel.decrementAmount();
        });

        this.events.addListener(ItemEvents.dragEnd, () => {
            this.itemModel.incrementAmount();
        });
    }
}
