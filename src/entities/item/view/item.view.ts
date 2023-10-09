import { InitItemViewDTO } from '../dto/init-Item-view.dto';

export class ItemView {
    block: HTMLElement;
    image: HTMLElement;
    counterLabel: HTMLElement;

    constructor() {
        this.block = document.createElement('div');
        this.image = document.createElement('img');
        this.counterLabel = document.createElement('span');

        this.block.draggable = true;

        this.block.appendChild(this.image);
        this.block.appendChild(this.counterLabel);
    }

    init(itemData: InitItemViewDTO): void {
        this.image.setAttribute('src', itemData.img);
        this.counterLabel.textContent = itemData.amount.toString();
    }

    update(value: number): void {
        this.counterLabel.textContent = value.toString();
    }

    render(root: HTMLElement | null): void {
        root?.appendChild(this.block);
    }
}
