const Circle = require('../lib/Circle');
describe('Circle', () => {
    describe('Initialization', () => {
        it('should be an instance of the Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('color', () => {
        it('should store the shade color of the circle', () => {
            const circle = new Circle('blue');
            expect(circle.color).toEqual('blue');
        });
    });

    describe('render', () => {
        it('should return a circle svg tag with its color', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
});
