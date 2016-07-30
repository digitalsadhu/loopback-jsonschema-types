'use strict'
/* global describe, it, beforeEach */
const assert = require('assert')
const types = require('../')
const loopback = require('loopback')
let app, Post, Author

describe('smoke tests', function () {
  beforeEach(function () {
    app = loopback()
    app.set('legacyExplorer', false)
    const ds = loopback.createDataSource('memory')
    Author = ds.createModel('author', {name: String})
    Post = ds.createModel('post', {
      string1: String,
      string2: 'string',
      string3: {type: 'string'},
      number: {type: Number},
      array1: 'Array',
      array2: {type: [Number]},
      array3: [String],
      date: {type: 'date'},
      object1: {type: 'object'},
      object2: {prop: 1},
      object3: Author,
      any: 'any',
      point: 'GeoPoint',
      null1: null,
      null2: 'null',
      boolean: Boolean
    })
    app.model(Post)
    app.use(loopback.rest())
  })

  it('string 1', function () {
    const type = types(Post.definition.rawProperties.string1)
    assert.deepEqual(type, {type: 'string'})
  })

  it('string 2', function () {
    const type = types(Post.definition.rawProperties.string2)
    assert.deepEqual(type, {type: 'string'})
  })

  it('string 3', function () {
    const type = types(Post.definition.rawProperties.string3)
    assert.deepEqual(type, {type: 'string'})
  })

  it('number', function () {
    const type = types(Post.definition.rawProperties.number)
    assert.deepEqual(type, {type: 'number'})
  })

  it('array 1', function () {
    const type = types(Post.definition.rawProperties.array1)
    assert.deepEqual(type, {type: 'array'})
  })

  it('array 2', function () {
    const type = types(Post.definition.rawProperties.array2)
    assert.deepEqual(type, {type: 'array', items: {type: 'number'}})
  })

  it('array 3', function () {
    const type = types(Post.definition.rawProperties.array3)
    assert.deepEqual(type, {type: 'array', items: {type: 'string'}})
  })

  it('date', function () {
    const type = types(Post.definition.rawProperties.date)
    assert.deepEqual(type, {oneOf: [{type: 'object'}, {type: 'string'}]})
  })

  it('object 1', function () {
    const type = types(Post.definition.rawProperties.object1)
    assert.deepEqual(type, {type: 'object'})
  })

  it('object 2', function () {
    const type = types(Post.definition.rawProperties.object2)
    assert.deepEqual(type, {type: 'object'})
  })

  it('object 3', function () {
    const type = types(Post.definition.rawProperties.object3)
    assert.deepEqual(type, {type: 'object'})
  })

  it('any', function () {
    const type = types(Post.definition.rawProperties.any)
    assert.deepEqual(type, {anyOf: [{type: 'array'}, {type: 'boolean'}, {type: 'object'}, {type: 'string'}, {type: 'number'}, {type: 'null'}]})
  })

  it('null 2', function () {
    const type = types(Post.definition.rawProperties.null2)
    assert.deepEqual(type, {type: 'null'})
  })

  it('boolean', function () {
    const type = types(Post.definition.rawProperties.boolean)
    assert.deepEqual(type, {type: 'boolean'})
  })

  it('GeoPoint', function () {
    const type = types(Post.definition.rawProperties.point)
    assert.deepEqual(type, {type: 'object'})
  })
})
