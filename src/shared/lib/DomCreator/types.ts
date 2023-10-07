export type NewDomElement<K> = {
    tag: K;
    props?: {
        [key: string]: string;
    } | null;
    children?: NewDomElement<K>[];
};
