import 'mocha';
import { assert, expect } from 'chai';

import { zip } from '..';

describe('zip function', () => {
    it('should return pairs of nth items of given arrays', () => {
        const result = zip([1, 2, 3], ['a', 'b', 'c']);

        const expected = [[1, 'a'], [2, 'b'], [3, 'c']];

        expect(result).to.deep.equal(expected);
    });
    it('should return an array of single-item arrays of given array', () => {
        const result = zip([1, 2, 3]);

        const expected = [[1], [2], [3]];

        expect(result).to.deep.equal(expected);
    });
    it("should shrink the resulting array's length to the length of the shortest array", () => {
        const result = zip([1, 2, 3], ['a', 'b', 'c', 'd', 'e']);

        const expected = [[1, 'a'], [2, 'b'], [3, 'c']];

        expect(result).to.deep.equal(expected);
    });
    it('should process nested arrays as well', () => {
        const result = zip(['a', 'b', 'c'], [1, 2, [3]]);

        const expected = [['a', 1], ['b', 2], ['c', [3]]];

        expect(result).to.deep.equal(expected);
    });
    it('should fail on null', () => {
        assert.throw(() => zip(null as any as number[]), TypeError);
    });
    it('should fail on undefined', () => {
        assert.throw(() => zip(undefined as any as number[]), TypeError);
    });
});
