import getFile from '../index.js'

test('Return a file', () => {
    expect(typeof getFile()).toBe('function');
});