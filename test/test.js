import {purgeHTML} from '../src';

test('purgeHTML test 1', () => {
    expect(purgeHTML(`<h1>Test 1</h1>`)).toBe('Test 1');
});

const variable1 = '2';
test('purgeHTML test 2', () => {
    expect(purgeHTML(`<h1>Test ${variable1}</h1>`)).toBe('Test 2');
});

const variable2 = '<br>3';
test('purgeHTML test 3', () => {
    expect(purgeHTML(`<h1>Test ${variable2}</h1>`)).toBe('Test 3');
});

const variable3 = '<br/>4';
test('purgeHTML test 4', () => {
    expect(purgeHTML(`<h1>Test ${variable3}</h1>`)).toBe('Test 4');
});