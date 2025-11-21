import {expect} from 'chai'
import at from '../src/at.js'
//tests for the at function

describe('at', () => {
  //gets the value from a single given path
  it('Gets value at a single path', () => {
    const obj = { a:{ b: 2 }, c: 3 }
    expect(at(obj,['a.b'])).to.deep.equal([2])
  })
  //gets values from more than one path and returns them in order
  it('Gets values at multiple paths', () => {
    const obj = { a: {b: 2 }, c: 3 }
    expect(at(obj, ['a.b','c'])).to.deep.equal([2, 3])
  })
  //returns undefined in the result array when the path does not exist
  it('Returns undefined for missing path', () => {
    const obj= {a: 1}
    expect(at(obj,['b'])).to.deep.equal([undefined])
  })
  //works with arrays as the source and uses indexes as paths
  it('Handles array input', () => {
    const arr= [10, 20, 30]
    expect(at(arr,[0, 2])).to.deep.equal([10, 30])
  })
  //returns an empty array when no paths are given
  it('Returns empty array for empty paths', () => {
    const obj = {a: 1}
    expect(at(obj,[])).to.deep.equal([])
  })
  //handles null object and returns undefined for the path
  it('Handles null object correctly', () => {
    expect(at(null,['a'])).to.deep.equal([undefined])
  })
})
