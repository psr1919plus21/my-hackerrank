const getTotalX = require('./getTotalX.js');

describe('getTotalX', function() {
    it('should handle', function() {
        const expected = 3;
        const actual = getTotalX([2, 4], [16, 32, 96]);

        expect(expected).toEqual(actual);
    });

    it('should handle', function() {
        const expected = 2;
        const actual = getTotalX([3, 4], [24, 48]);

        expect(expected).toEqual(actual);
    });
});