export enum ItemEvents {
    drag = 'DRAG',
    dragEnd = 'DRAG_END',
    drop = 'DROP',
    decrease = 'DECREASE',
    increase = 'INCREASE',
}

export interface IItemModel {
    id: string;
    name: string;
    description: string;
    img: string;
    amount: number;
}
