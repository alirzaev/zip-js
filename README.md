# zip-js

A simple zip function implementation

## Installation

```shell
$ npm install @alirzaev/zip-js
```

## Usage

```js
import { zip } from '@alirzaev/zip-js';

zip(['a', 'b'], [1, 2], [true, false]);

// => [['a', 1, true], ['b', 2, false]]
```

## Running tests

```shell
$ npm test
```