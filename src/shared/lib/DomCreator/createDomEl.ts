import type { NewDomElement } from './types';

export const createDomEl = <K extends keyof HTMLElementTagNameMap>({
    tag,
    props = null,
    children,
}: NewDomElement<K>): HTMLElementTagNameMap[K] => {
    const newElement = document.createElement(tag);

    Object.entries(props ?? {}).map(([attribute, value]) => {
        newElement.setAttribute(attribute, value);
    });

    children?.forEach(child => {
        const childrenElement = createDomEl(child);
        newElement.appendChild(childrenElement);
    });

    return newElement;
};
