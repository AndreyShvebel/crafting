import EventEmitter from 'eventemitter3';

import { IItemModel, ItemEvents } from './types';

const MAX_AMOUNT = 64;
const MIN_AMOUNT = 0;

export class ItemModel {
    id: string;
    name: string;
    description: string;
    img: string;
    amount: number;
    events: EventEmitter = new EventEmitter();

    constructor({ id, name, description, img, amount }: IItemModel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.amount = this.validateAmount(amount);
        this.emitUpdate();
    }

    decrementAmount() {
        this.amount = this.validateAmount(this.amount - 1);
        this.emitUpdate();
    }

    incrementAmount() {
        this.amount = this.validateAmount(this.amount + 1);
        this.emitUpdate();
    }

    setAmount(value: number) {
        this.amount = this.validateAmount(value);
        this.emitUpdate();
    }

    emitUpdate() {
        this.events.emit(ItemEvents.update, this.amount);
    }

    validateAmount(value: number) {
        if (value > MAX_AMOUNT) {
            return MAX_AMOUNT;
        }
        if (value < MIN_AMOUNT) {
            return MIN_AMOUNT;
        }
        return value;
    }
}
