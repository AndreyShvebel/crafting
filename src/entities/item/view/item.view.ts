import { ItemController } from '../model/item.controller';
import { ItemEvents } from '../model/item.model';

export class ItemView {
    block: HTMLElement;
    image: HTMLElement;
    counterLabel: HTMLElement;

    constructor(private readonly itemController: ItemController) {
        this.block = document.createElement('div');
        this.image = document.createElement('img');
        this.counterLabel = document.createElement('span');
    }

    initListeners() {
        this.block.addEventListener('drag', () => {
            this.itemController.events.emit(ItemEvents.drag);
        });
    }
}
