import { CounterController } from './model/counter.controller';
import { CounterModel } from './model/counter.model';
import { CounterView } from './view/counter.view';

export const createCounter = (root: HTMLElement | null) => {
    const counterModel = new CounterModel();
    const counterView = new CounterView();
    new CounterController(counterView, counterModel);

    counterView.render(root);
};
