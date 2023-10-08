import stickImg from 'shared/assets/items/stick.webp';

import { createItem } from 'entities/item';

export const app = (root: HTMLElement | null) => {
    createItem(root, { id: 'stick', amount: 10, description: 'stick', name: 'stick', img: stickImg });
};
