export type ZipItem<T> = T extends [infer First, ...infer Rest] ? (First extends (infer V)[] ? [V, ...ZipItem<Rest>] : First) : T;

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 * 
 * @param {T} arrays The arrays to process.
 * @returns {ZipItem<T>} Returns the new array of grouped elements.
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
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
