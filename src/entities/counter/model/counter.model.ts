import { EventEmitter } from 'eventemitter3';

export enum CounterEvents {
    decrease = 'DECREASE',
    increase = 'INCREASE',
    changeValue = 'CHANGE_VALUE',
}

export class CounterModel {
    count: number = 0;
    emitter: EventEmitter = new EventEmitter();

    constructor() {
        this.initListeners();
    }

    initListeners() {
        this.emitter.addListener(CounterEvents.changeValue, value => {
            this.count += Number(value);
            console.log(this.count);
        });
    }
}
