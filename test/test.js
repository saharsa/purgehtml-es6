import {purgeHTML} from '../src';

test('purgeHTML test 1', () => {
    expect(purgeHTML(`<h1>I am a little teapot.</h1>`)).toBe('I am a little teapot.');
});

const variable1 = 'am';
const variable2 = 'little';
const variable3 = '<hr/>strong';
const variable4 = '<br>stout';

test('purgeHTML test 2', () => {
    expect(purgeHTML `<h1>I ${variable1} a little teapot, strong and stout</h1>`).toBe('I am a little teapot, strong and stout');
});


test('purgeHTML test 3', () => {
    expect(purgeHTML `<h1>I ${variable1} a ${variable2} teapot, strong and stout`).toBe('I am a little teapot, strong and stout');
});


test('purgeHTML test 4', () => {
    expect(purgeHTML `<h1>I am a little teapot, ${variable3}${variable4}`).toBe('I am a little teapot, strongstout');
});

test('purgeHTML test 5', () => {
    expect(purgeHTML `${variable2}${variable3}${variable4}`).toBe('littlestrongstout');
});