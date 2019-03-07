import {purgeHTML} from '../src';

describe('testing purgeHTML', ()=>{
    
    test('purgeHTML test 0', () => {
        expect(purgeHTML).not.toBeUndefined();
    });
    

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
        expect(purgeHTML `<h1 attr='a'>I ${variable1} a ${variable2} teapot, strong and stout`).toBe('I am a little teapot, strong and stout');
    });
    
    
    test('purgeHTML test 4', () => {
        expect(purgeHTML `<h1>I am a little teapot, ${variable3}${variable4}`).toBe('I am a little teapot, strongstout');
    });
    
    test('purgeHTML test 5', () => {
        expect(purgeHTML `${variable2}${variable3}${variable4}`).toBe('littlestrongstout');
    });

    test('purgeHTML test 6', () => {
        expect(purgeHTML ``).toBe('');
    });

    test('purgeHTML test 7', () => {
        expect(purgeHTML `${1+2}`).toBe('3');
    });
    
    test('purgeHTML test 8', () => {
        expect(purgeHTML ('<h1>Hi</h1>')).toBe('Hi');
    });
    
    test('purgeHTML test 9', () => {
        expect(purgeHTML ('<h1>Hi ${variable1}</h1>')).toBe('Hi ${variable1}');
    });

    test('purgeHTML test 10', () => {
        expect(purgeHTML ('<h1>Hi</h1>','Hello','Greetings!<br>')).toBe('HiHelloGreetings!');
    });
})

