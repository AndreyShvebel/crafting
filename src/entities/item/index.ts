import { ItemController } from './model/item.controller';
import { ItemModel } from './model/item.model';
import { IItemModel } from './model/types';
import { ItemView } from './view/item.view';

export const createItem = (root: HTMLElement | null, itemData: IItemModel) => {
    const itemModel = new ItemModel(itemData);
    const itemController = new ItemController(itemModel);
    const itemView = new ItemView(itemController);

    itemView.render(root);
};
