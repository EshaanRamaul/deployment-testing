import { expect } from 'chai'
import chunk from '../src/chunk.js'
//tests for the chunk function

describe('chunk', () => {
  //splits array into pieces of size 2
  it('Splits array into chunks of given size', () => {
    const result = chunk(['a','b','c','d'], 2)
    expect(result).to.deep.equal([['a', 'b'], ['c', 'd']])
  })
  //splits array into pieces of size 3 last chunk has the leftover item
  it('Splits array into chunks of given size', () => {
    const result = chunk(['a','b','c','d'], 3)
    expect(result).to.deep.equal([['a','b','c'], ['d']])
  })
  //uses default size 1 when no size is given
  it('Uses default size=1 when size is not provided', () => {
    const result = chunk(['a','b','c'])
    expect(result).to.deep.equal([['a'], ['b'], ['c']])
  })
  //when size is bigger than array length returns one chunk with everything
  it('Returns the whole array as a single chunk when size is larger than length', () => {
    const result = chunk([1, 2],5)
    expect(result).to.deep.equal([[1,2]])
  })
  //treats null or undefined as empty input and returns an empty array
  it('Returns empty array when array is null or undefined', () => {
    expect(chunk(null, 2)).to.deep.equal([])
    expect(chunk(undefined, 2)).to.deep.equal([])
  })
  //returns empty array if size is 0 or negative
  it('Returns empty array when size is 0 or negative', () => {
    expect(chunk([1,2,3], 0)).to.deep.equal([])
    expect(chunk([1,2,3], -1)).to.deep.equal([])
  })
  //rounds non integer sizes using toInteger before chunking
  it('Converts non integer size using toInteger', () => {
    const result = chunk([1, 2, 3, 4, 5], 2.7)
    //2.7 is treated as 2 so chunks are of size 2
    expect(result).to.deep.equal([[1, 2], [3, 4], [5]])
  })
  //makes the expected number of chunks based on array length and size
  it('Creates the correct number of chunks', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = chunk(arr, 2)
    expect(result.length).to.equal(3)
  })
  //does not change the original array
  it('Does not mutate the original array', () => {
    const arr = [1,2,3,4]
    const copy = [...arr] //save a copy to compare later
    chunk(arr, 2)
    expect(arr).to.deep.equal(copy)
  })
})