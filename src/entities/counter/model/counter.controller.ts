import { CounterEvents, CounterModel } from './counter.model';

export class CounterController {
    constructor(readonly counterModel: CounterModel) {}

    increase() {
        this.counterModel.emitter.emit(CounterEvents.changeValue, 1);
        return this.counterModel.count;
    }

    decrease() {
        this.counterModel.emitter.emit(CounterEvents.changeValue, -1);
        return this.counterModel.count;
    }

    get count() {
        return this.counterModel.count;
    }

    get events() {
        return this.counterModel.emitter;
    }
}
