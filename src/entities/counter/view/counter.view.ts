export class CounterView {
    wrapper: HTMLElement;
    label: HTMLElement;
    incrementButton: HTMLElement;
    decrementButton: HTMLElement;

    constructor() {
        this.wrapper = document.createElement('div');
        this.label = document.createElement('span');
        this.incrementButton = document.createElement('button');
        this.decrementButton = document.createElement('button');

        this.incrementButton.textContent = 'Increment';
        this.decrementButton.textContent = 'Decrement';

        this.wrapper.appendChild(this.label);
        this.wrapper.appendChild(this.decrementButton);
        this.wrapper.appendChild(this.incrementButton);
    }

    update(value: number): void {
        this.label.textContent = value.toString();
    }

    render(root: HTMLElement | null): void {
        root?.appendChild(this.wrapper);
    }
}
