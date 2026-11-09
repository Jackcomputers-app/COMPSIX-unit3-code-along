
const { countWords, findMax } = require('./dataProcessor');

describe('Text Processing Tests', () => {

    test('should count words in simple text', () => {
        const result = countWords('Hello world test');
        expect(result).toBe(3);
    });

    test('should handle a single word', () => {
        const result = countWords('Hello');
        expect(result).toBe(1);
    });

    test('should handle empty text', () => {
        const result = countWords('');
        expect(result).toBe(0);
    });

    test('should handle extra spaces around text', () => {
        const result = countWords('  Hello world  ');
        expect(result).toBe(2);
    });

});

describe('Number Processing Tests', () => {

    test('should find the maximum number', () => {
        const result = findMax([5, 10, 3, 8]);
        expect(result).toBe(10);
    });

    test('should work with negative numbers', () => {
        const result = findMax([-5, -10, -3, -8]);
        expect(result).toBe(-3);
    });

    test('should handle a single number', () => {
        const result = findMax([42]);
        expect(result).toBe(42);
    });

    test('should handle duplicate numbers', () => {
        const result = findMax([10, 10, 5, 3]);
        expect(result).toBe(10);
    });

});
