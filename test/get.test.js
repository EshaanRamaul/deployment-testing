import {expect} from 'chai'
import get from '../src/get.js'
// Tests for the get function

describe('get', () => {
  //reads a value from a top level key
  it('Gets value at simple path', () => {
    const obj = { a: 1, b: 2 }
    expect(get(obj,'a')).to.equal(1)
  })
  //reads a value from a nested object using dot notation
  it('Gets value at nested path with dot notation', () => {
    const obj = { a:{b:{c: 3 } } }
    expect(get(obj,'a.b.c')).to.equal(3)
  })
  //supports array style access in the path string
  it('Gets value at path with array access', () => {
    const obj = { a: [{ b: { c: 3 } }] }
    expect(get(obj, 'a[0].b.c')).to.equal(3)
  })
  //allows using an array of keys as the path
  it('Gets value with array path notation', () => {
    const obj = {a: [{ b:{ c: 3 } }] }
    expect(get(obj, ['a','0','b','c'])).to.equal(3)
  })
  //returns the default value when the given path does not exist
  it('Returns defaultValue when path missing', () => {
    const obj = {a: { b: 1 } }
    expect(get(obj, 'a.b.c','default')).to.equal('default')
  })
  //returns default value when object is null
  it('Returns defaultValue for null object', () => {
    expect(get(null,'a.b.c','fallback')).to.equal('fallback')
  })
  //returns default value when object is undefined
  it('Returns defaultValue for undefined object', () => {
    expect(get(undefined,'any.path','default')).to.equal('default')
  })
  //returns undefined if path is missing and no default is given
  it('Returns undefined when path missing and no default', () => {
    const obj = { a: 1 }
    expect(get(obj, 'b')).to.be.undefined
  })
  //handles long nested paths that dont exist and falls back to default
  it('Handles deeply nested missing paths', () => {
    const obj = { a: { x: 1 } }
    expect(get(obj,'a.b.c.d','missing')).to.equal('missing')
  })
})