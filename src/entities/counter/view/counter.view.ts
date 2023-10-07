import { CounterController } from '../model/counter.controller';
import { CounterEvents } from '../model/counter.model';

export class CounterView {
    root: HTMLElement | null;
    label: HTMLElement;
    increaseButton: HTMLElement;
    decreaseButton: HTMLElement;
    wrapper: HTMLElement;

    constructor(private readonly counterController: CounterController) {
        this.root = document.getElementById('app');

        this.label = document.createElement('span');
        this.label.id = 'counter';
        this.label.textContent = '0';

        this.increaseButton = document.createElement('button');
        this.increaseButton.id = 'counter-increase';
        this.increaseButton.innerText = 'Increase';

        this.decreaseButton = document.createElement('button');
        this.decreaseButton.id = 'counter-decrease';
        this.decreaseButton.innerText = 'Decrease';

        this.wrapper = document.createElement('div');
        this.wrapper.appendChild(this.label);
        this.wrapper.appendChild(this.increaseButton);
        this.wrapper.appendChild(this.decreaseButton);

        this.initListeners();
    }

    initListeners() {
        this.increaseButton.addEventListener('click', () => {
            this.counterController.increase();
        });
        this.decreaseButton.addEventListener('click', () => {
            this.counterController.decrease();
        });

        this.counterController.events.on(CounterEvents.changeValue, () => {
            this.update();
        });
    }

    render() {
        this.root?.appendChild(this.wrapper);
    }

    update() {
        this.label.textContent = this.counterController.count.toString();
    }
}
