'use strict'

const _ = require('lodash')

const typeMap = {
  'any': {anyOf: [{type: 'array'}, {type: 'boolean'}, {type: 'object'}, {type: 'string'}, {type: 'number'}, {type: 'null'}]},
  'array': {type: 'array'},
  'boolean': {type: 'boolean'},
  'buffer':	{type: 'object'},
  'date': {oneOf: [{type: 'object'}, {type: 'string'}]},
  'geopoint':	{type: 'object'},
  'null': {type: 'null'},
  'number': {type: 'number'},
  'object': {type: 'object'},
  'string': {type: 'string'}
}

module.exports = function (type) {
  let typeKey = type
  let processAsArray = false
  if (Array.isArray(type)) {
    processAsArray = true
    type = type[0]
    typeKey = type
  }
  if (_.isObject(type) && Array.isArray(type.type)) {
    processAsArray = true
    type = type.type[0]
    typeKey = type
  }
  if (type === null) {
    typeKey = 'null'
  }
  if (_.isObject(type) && !Array.isArray(type)) {
    if (_.isObject(type.sharedClass)) {
      typeKey = 'object'
    } else if (type.name) {
      typeKey = type.name
    } else if (type.type) {
      if (_.isObject(type.type) && type.type.name) {
        typeKey = type.type.name
      } else {
        typeKey = type.type
      }
    } else if (type.type === null) {
      typeKey = 'null'
    } else {
      typeKey = 'object'
    }
  }
  let mapped = typeMap[typeKey.toLowerCase()]

  if (processAsArray) {
    mapped = {type: 'array', items: {type: mapped.type}}
  }

  return mapped
}
