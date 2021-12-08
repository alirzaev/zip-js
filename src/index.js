module.exports = {
    zip: function (...arrays) {
        const minLength = Math.min(...(arrays.map(array => array.length)));

        const iterable = {};
        iterable[Symbol.iterator] = function* () {
            for (let i = 0; i < minLength; ++i) {
                const items = arrays.map(array => array[i]);

                yield items;
            }
        };

        return Array.of(...iterable);
    }
}
