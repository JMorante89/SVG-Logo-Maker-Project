const Square = require('../lib/Square');
describe('Square', () => {
    describe('Initialization', () => {
        it('should be an instance of the Square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('color', () => {
        it('should store the shade color of the square', () => {
            const square = new Square('blue');
            expect(square.color).toEqual('blue');
        });
    });

    describe('render', () => {
        it('should return a rect svg tag with its color', () => {
            const square = new Square('blue');
            expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
        });
    });
});