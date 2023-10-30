const Triangle = require('../lib/Triangle');
describe('Triangle', () => {
    describe('Initialization', () => {
        it('should be an instance of the Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('color', () => {
        it('should store the shade color of the triangle', () => {
            const triangle = new Triangle('blue');
            expect(triangle.color).toEqual('blue');
        });
    });

    describe('render', () => {
        it('should return a polygon svg tag with its color', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toEqual('<polygon points="150,0 224,162 56,162" fill="blue" />');
        });
    });
});