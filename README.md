# purgehtml-es6

This npm library helps to remove html markup from template literals. Can be used in React and Angular as well.

## Getting Started

Follow the below steps in order to use this library as a dependency in your project:

### Prerequisites

Make sure you have node.js installed in your system.

### Installing

npm install purgehtml-es6

## Example

import {purgeHTML} from 'purgehtml-es6';

const item = "teapot";

const str = purgeHTML &#96;`<h1>I'm a <strong>${item}</strong></h1>`&#96;;

console.log(str);



This will give the output as follows:

I'm a teapot



### Note 
If you are not passing a template literal to the function, for example:

`purgeHTML('<h1>I'm a </h1>','<h2>strong</h2>','<h3>teapot</h3>');`

This will give the output as follows:

I'm a strongteapot

## Library explained

The purgeHTML function in src/index.js is exported which does the heavy lifting of removing html markup from any template string passed to it.

The test/test.js contains unit tests created using Jest.

The following commands are pre-defined for the app:
* npm run test : Will run all the test cases defined
* npm run build : Will create the dist folder with the final index.js file
* npm run release : Will first run the test cases, if all pass, then will build the library, if this passes as well, will finally publish the library

## Authors

**Saharsa Mohanty**

## Built With

* [Babel](https://babeljs.io/) - Transpiler
* [Jest](https://jestjs.io/) - Testing the library

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
