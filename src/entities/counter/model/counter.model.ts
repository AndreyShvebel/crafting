import EventEmitter from 'eventemitter3';

import { CounterEvents } from '../types';

export class CounterModel {
    count: number = 0;
    events: EventEmitter = new EventEmitter();
    constructor() {}
    increment() {
        this.count += 1;
        this.events.emit(CounterEvents.update);
    }
    decrement() {
        this.count -= 1;
        this.events.emit(CounterEvents.update);
    }
}
