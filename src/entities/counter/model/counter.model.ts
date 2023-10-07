import { EventEmitter } from 'eventemitter3';

export enum CounterEvents {
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
        });
    }
}
