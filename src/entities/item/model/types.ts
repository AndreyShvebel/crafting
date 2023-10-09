export enum ItemEvents {
    drag = 'DRAG',
    dragEnd = 'DRAG_END',
    drop = 'DROP',
    decrease = 'DECREASE',
    increase = 'INCREASE',
    update = 'UPDATE',
}

export interface IItemModel {
    id: string;
    name: string;
    description: string;
    img: string;
    amount: number;
}
