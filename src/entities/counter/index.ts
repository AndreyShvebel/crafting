import { CounterController } from './model/counter.controller';
import { CounterModel } from './model/counter.model';
import { CounterView } from './view/counter.view';

export const counterView = new CounterView(new CounterController(new CounterModel()));
