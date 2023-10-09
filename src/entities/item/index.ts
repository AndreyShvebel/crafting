import { ItemController } from './model/item.controller';
import { ItemModel } from './model/item.model';
import { IItemModel } from './model/types';
import { ItemView } from './view/item.view';

export const createItem = (root: HTMLElement | null, itemData: IItemModel) => {
    const itemModel = new ItemModel(itemData);
    const itemView = new ItemView();
    new ItemController(itemModel, itemView);

    itemView.render(root);
};
