import { CounterEvents } from '../types';
import { CounterView } from '../view/counter.view';
import { CounterModel } from './counter.model';

export class CounterController {
    constructor(
        private readonly counterView: CounterView,
        private readonly counterModel: CounterModel
    ) {
        this.counterView.update(this.counterModel.count);
        this.initListeners();
    }

    initListeners() {
        this.counterView.incrementButton.addEventListener('click', () => {
            this.counterModel.increment();
        });
        this.counterView.decrementButton.addEventListener('click', () => {
            this.counterModel.decrement();
        });

        this.counterModel.events.addListener(CounterEvents.update, () => {
            this.counterView.update(this.counterModel.count);
        });
    }
}
