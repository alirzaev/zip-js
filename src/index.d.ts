declare type ZipItem<T> = T extends [infer First, ...infer Rest] ? (First extends (infer V)[] ? [V, ...ZipItem<Rest>] : First) : T;
declare function zip<T extends unknown[][]>(...arrays: T): ZipItem<T>[];
