import {expect} from 'chai'
import endsWith from '../src/endsWith.js'
//Tests for the endsWith function

describe('endsWith', () => {
  //true when the string actually ends with the given target
  it('Returns true when string ends with target', () => {
    expect(endsWith('abc','c')).to.equal(true)
  })
  //false when the last characters do not match the target
  it('Returns false when string does not end with target', () => {
    expect(endsWith('abc','b')).to.equal(false)
  })
  //uses the position argument to only look at part of the string
  it('Uses the position parameter to limit the search', () => {
    //check only first 2 characters 'ab'
    expect(endsWith('abc','b',2)).to.equal(true)
    expect(endsWith('abc','c',2)).to.equal(false)
  })
  //if position is bigger than length it is treated as string.length
  it('Clamps position to string length when position is larger than length', () => {
    //position 10 should be treated as 3 for 'abc'
    expect(endsWith('abc', 'c', 10)).to.equal(true)
  })
  //negative position is treated as 0 so nothing can match
  it('Treats negative position as 0 and returns false', () => {
    expect(endsWith('abc','a',-1)).to.equal(false)
  })
  //NaN position is also treated as 0 so it returns false
  it('Treats NaN position as 0 and returns false', () => {
    const pos = NaN
    expect(endsWith('abc','a',pos)).to.equal(false)
  })
  //empty target is always considered to be at the end of the string
  it('Returns true when target is empty string', () => {
    expect(endsWith('abc','')).to.equal(true)
    expect(endsWith('','')).to.equal(true)
  })
  //works correctly for one-character strings
  it('Works with single-character strings', () => {
    expect(endsWith('a','a')).to.equal(true)
    expect(endsWith('a','b')).to.equal(false)
  })
})