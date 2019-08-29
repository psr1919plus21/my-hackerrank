const kangaroo = require('./kangoroo.js');

describe('kangoroo', function() {
    it('should handle: 1, 2, 2, 1', function() {
        const actual = kangaroo(1, 2, 2, 1);
        const expected = 'YES';

        expect(actual).toEqual(expected);
    });

    it('should handle: 1, 2, 2, 2', function() {
        const actual = kangaroo(1, 2, 2, 2);
        const expected = 'NO';

        expect(actual).toEqual(expected);
    });

    it('should handle: 0, 3, 4, 2', function() {
        const actual = kangaroo(0, 3, 4, 2);
        const expected = 'YES';

        expect(actual).toEqual(expected);
    });

    it('should handle: 0, 2, 5, 3', function() {
        const actual = kangaroo(0, 2, 5, 3);
        const expected = 'NO';

        expect(actual).toEqual(expected);
    });

    it('should handle: 14 4 98 2', function() {
        const actual = kangaroo(14, 4, 98, 2);
        const expected = 'YES';

        expect(actual).toEqual(expected);
    });
});