import { ItemController } from '../model/item.controller';
import { ItemEvents } from '../model/types';

export class ItemView {
    block: HTMLElement;
    image: HTMLElement;
    counterLabel: HTMLElement;

    constructor(private readonly itemController: ItemController) {
        this.block = document.createElement('div');
        this.image = document.createElement('img');
        this.counterLabel = document.createElement('span');

        this.image.setAttribute('src', this.itemController.itemData.img);
        this.counterLabel.textContent = this.itemController.itemData.amount.toString();
        this.block.draggable = true;

        this.block.appendChild(this.image);
        this.block.appendChild(this.counterLabel);

        this.initListeners();
    }

    initListeners() {
        this.block.addEventListener('dragstart', () => {
            this.itemController.events.emit(ItemEvents.drag);
        });
        this.block.addEventListener('dragend', event => {
            this.itemController.events.emit(ItemEvents.dragEnd);
            console.log(event);
        });

        this.itemController.events.addListener(ItemEvents.drag, () => {
            this.update();
        });
        this.itemController.events.addListener(ItemEvents.dragEnd, () => {
            this.update();
        });
    }

    update() {
        this.counterLabel.textContent = this.itemController.itemData.amount.toString();
    }

    render(root: HTMLElement | null) {
        root?.appendChild(this.block);
    }
}
