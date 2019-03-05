# purgehtml-es6

This npm library helps to remove html markup from template strings.

## Getting Started

Follow the below steps in order to use this library as a dependency in your project:

### Prerequisites

Make sure you have node.js installed in your system.

### Installing

npm install purgehtml-es6

## Example

import {purgeHTML} from 'purgehtml-es6';

const item = "teapot";
const str = purgeHTML(`<h1>I'm a <strong>${item}</strong></h1>`);
console.log(str);

This will give the output as follows:

I'm a teapot

## Authors

**Saharsa Mohanty**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
