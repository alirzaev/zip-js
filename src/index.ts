export type ZipItem<T> = T extends [infer First, ...infer Rest] ? (First extends (infer V)[] ? [V, ...ZipItem<Rest>] : First) : T;

export function zip<T extends unknown[][]> (...arrays: T): ZipItem<T>[] {
    const minLength = Math.min(...(arrays.map(array => array.length)));

    const iterable = {
        [Symbol.iterator]: function* (): Generator<ZipItem<T>> {
            for (let i = 0; i < minLength; ++i) {
                const items = arrays.map(array => array[i]);

                yield items as ZipItem<T>;
            }
        }
    };

    return Array.of(...iterable);
}
