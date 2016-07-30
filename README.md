# loopback-jsonschema-types

Simple module mapping loopbacks built in types to jsonschema types

[![NPM](https://nodei.co/npm/loopback-jsonschema-types.png?downloads=true&stars=true)](https://nodei.co/npm/loopback-jsonschema-types/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

[![Build Status](https://travis-ci.org/mediasuitenz/loopback-jsonschema-types.svg)](https://travis-ci.org/digitalsadhu/loopback-jsonschema-types)

## Installation

```
npm install loopback-jsonschema-types --save
```

## Usage

Require the module
```js
const types = require('loopback-jsonschema-types')
```

Then just pass any valid loopback type definition to the module to get back a
jsonschema object. https://docs.strongloop.com/display/public/LB/LoopBack+types#LoopBacktypes-Objecttypes

### A few examples:

A simple string representation
```js
types('string')
```

A native javascript type
```js
types(String)
```

using the type property (see loopback docs)
```js
types({type: String})
```

#### arrays
```js
types([String])
types(['String'])
types({type: [String]})
```

## Additional information

See extensive tests in the test folder for additional usage information.