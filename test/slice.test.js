import {expect} from 'chai'
import slice from '../src/slice.js'
//Tests for the slice function

describe('slice', () => {
  const arr = [1,2,3,4,5]
  //returns elements between start and end indexes
  it('Slices from start to end', () => {
    expect(slice(arr,1,3)).to.deep.equal([2,3])
  })
  //counts from the end of the array
  it('Handles negative end index', () => {
    expect(slice(arr,1, -1)).to.deep.equal([2,3,4])
  })
  //stops at the end of the array if end is bigger than the length
  it('Handles end greater than length', () => {
    expect(slice(arr,3,99)).to.deep.equal([4,5])
  })
})