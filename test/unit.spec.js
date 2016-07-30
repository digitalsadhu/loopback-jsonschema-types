'use strict'
/* global describe, it */
const assert = require('assert')
const types = require('../src')

describe('unit tests', function () {
  describe('String', function () {
    it('correct type object from string', function () {
      const type = types('String')
      assert.deepEqual(type, {type: 'string'})
    })

    it('correct type object from string', function () {
      const type = types(String)
      assert.deepEqual(type, {type: 'string'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'String'})
      assert.deepEqual(type, {type: 'string'})
    })

    it('correct type object from object', function () {
      const type = types({type: String})
      assert.deepEqual(type, {type: 'string'})
    })
  })

  describe('Number', function () {
    it('should return correct type object', function () {
      const type = types('Number')
      assert.deepEqual(type, {type: 'number'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'Number'})
      assert.deepEqual(type, {type: 'number'})
    })

    it('correct type object from string', function () {
      const type = types(Number)
      assert.deepEqual(type, {type: 'number'})
    })

    it('correct type object from object', function () {
      const type = types({type: Number})
      assert.deepEqual(type, {type: 'number'})
    })
  })

  describe('Object', function () {
    it('should return correct type object', function () {
      const type = types('Object')
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'Object'})
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from string', function () {
      const type = types(Object)
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from object', function () {
      const type = types({type: Object})
      assert.deepEqual(type, {type: 'object'})
    })
  })

  describe('GeoPoint', function () {
    it('should return correct type object', function () {
      const type = types('GeoPoint')
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'GeoPoint'})
      assert.deepEqual(type, {type: 'object'})
    })
  })

  describe('null', function () {
    it('should return correct type object', function () {
      const type = types('null')
      assert.deepEqual(type, {type: 'null'})
    })

    it('correct type object from string', function () {
      const type = types(null)
      assert.deepEqual(type, {type: 'null'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'null'})
      assert.deepEqual(type, {type: 'null'})
    })

    it('correct type object from object', function () {
      const type = types({type: null})
      assert.deepEqual(type, {type: 'null'})
    })
  })

  describe('date', function () {
    it('should return correct type object', function () {
      const type = types('Date')
      assert.deepEqual(type, {oneOf: [{type: 'object'}, {type: 'string'}]})
    })

    it('correct type object from string', function () {
      const type = types(Date)
      assert.deepEqual(type, {oneOf: [{type: 'object'}, {type: 'string'}]})
    })

    it('correct type object from object', function () {
      const type = types({type: 'Date'})
      assert.deepEqual(type, {oneOf: [{type: 'object'}, {type: 'string'}]})
    })

    it('correct type object from object', function () {
      const type = types({type: Date})
      assert.deepEqual(type, {oneOf: [{type: 'object'}, {type: 'string'}]})
    })
  })

  describe('buffer', function () {
    it('should return correct type object', function () {
      const type = types('buffer')
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from string', function () {
      const type = types(Buffer)
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'buffer'})
      assert.deepEqual(type, {type: 'object'})
    })

    it('correct type object from object', function () {
      const type = types({type: Buffer})
      assert.deepEqual(type, {type: 'object'})
    })
  })

  describe('boolean', function () {
    it('should return correct type object', function () {
      const type = types('boolean')
      assert.deepEqual(type, {type: 'boolean'})
    })

    it('correct type object from string', function () {
      const type = types(Boolean)
      assert.deepEqual(type, {type: 'boolean'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'Boolean'})
      assert.deepEqual(type, {type: 'boolean'})
    })

    it('correct type object from object', function () {
      const type = types({type: Boolean})
      assert.deepEqual(type, {type: 'boolean'})
    })
  })

  describe('array', function () {
    it('should return correct type object', function () {
      const type = types('Array')
      assert.deepEqual(type, {type: 'array'})
    })

    it('correct type object from string', function () {
      const type = types(Array)
      assert.deepEqual(type, {type: 'array'})
    })

    it('correct type object from object', function () {
      const type = types({type: 'Array'})
      assert.deepEqual(type, {type: 'array'})
    })

    it('correct type object from object', function () {
      const type = types({type: Array})
      assert.deepEqual(type, {type: 'array'})
    })

    it('correct type object from object', function () {
      const type = types([String])
      assert.deepEqual(type, {type: 'array', items: {type: 'string'}})
    })

    it('correct type object from object', function () {
      const type = types(['Number'])
      assert.deepEqual(type, {type: 'array', items: {type: 'number'}})
    })

    it('correct type object from object', function () {
      const type = types([{type: Number}])
      assert.deepEqual(type, {type: 'array', items: {type: 'number'}})
    })

    it('correct type object from object', function () {
      const type = types([{type: 'Number'}])
      assert.deepEqual(type, {type: 'array', items: {type: 'number'}})
    })
  })

  describe('any', function () {
    it('should return correct type object', function () {
      const type = types('any')
      assert.deepEqual(type, {anyOf: [{type: 'array'}, {type: 'boolean'}, {type: 'object'}, {type: 'string'}, {type: 'number'}, {type: 'null'}]})
    })

    it('correct type object from object', function () {
      const type = types({type: 'any'})
      assert.deepEqual(type, {anyOf: [{type: 'array'}, {type: 'boolean'}, {type: 'object'}, {type: 'string'}, {type: 'number'}, {type: 'null'}]})
    })
  })
})
