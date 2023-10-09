import EventEmitter from 'eventemitter3';

import { ItemView } from '../view/item.view';
import { ItemModel } from './item.model';
import { ItemEvents } from './types';

export class ItemController {
    readonly events = new EventEmitter();

    constructor(
        private readonly itemModel: ItemModel,
        private readonly itemView: ItemView
    ) {
        this.initEvents();
        this.itemView.init({
            id: this.itemModel.id,
            name: this.itemModel.name,
            description: this.itemModel.description,
            img: this.itemModel.img,
            amount: this.itemModel.amount,
        });
    }

    initEvents() {
        this.itemView.block.addEventListener('dragstart', () => {
            this.itemModel.decrementAmount();
        });
        this.itemView.block.addEventListener('dragend', event => {
            this.itemModel.incrementAmount();
        });

        this.itemModel.events.addListener(ItemEvents.update, (value: number) => {
            this.itemView.update(value);
        });
    }
}
