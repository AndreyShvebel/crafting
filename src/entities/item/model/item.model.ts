import EventEmitter from 'eventemitter3';

export enum ItemEvents {
    drag = 'DRAG',
    dragEnd = 'DRAG_END',
    drop = 'DROP',
    decrease = 'DECREASE',
    increase = 'INCREASE',
}

interface IItemModel {
    id: string;
    name: string;
    description: string;
    img: string;
    amount: number;
}

export class ItemModel {
    id: string;
    name: string;
    description: string;
    img: string;
    amount: number;

    readonly emitter = new EventEmitter();

    constructor({ id, name, description, img, amount }: IItemModel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.amount = amount;

        this.initListeners();
    }

    initListeners() {
        this.emitter.addListener(ItemEvents.drag, () => {
            this.amount -= 1;
        });
        this.emitter.addListener(ItemEvents.dragEnd, () => {
            this.amount += 1;
        });
        this.emitter.addListener(ItemEvents.drop, () => {});
    }
}
