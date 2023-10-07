import { counterView } from 'entities/counter';

export const app = (root: HTMLElement | null) => {
    counterView.render(root);
};
