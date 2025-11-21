import {expect} from 'chai'
import filter from '../src/filter.js'
// Tests for the filter function

describe('filter', () => {
  // keeps only numbers that match the given condition
  it('Filters array by condition', () => {
    const arr = [1,2,3,4,5]
    const result = filter(arr, (n) => n > 2)
    expect(result).to.deep.equal([3,4,5])
  })
  //filters a list of objects based on a field
  it('Filters objects in array', () => {
    const users = [
      { name:'alice', active: true },
      { name:'bob', active: false },
      { name:'charlie', active: true }
    ]
    const result = filter(users, (u) => u.active)
    expect(result).to.have.lengthOf(2)
    expect(result[0].name).to.equal('alice')
    expect(result[1].name).to.equal('charlie')
  })
  //returns an empty array when nothing matches the condition
  it('Returns empty array for no matches', () => {
    const arr = [1, 2, 3]
    const result = filter(arr, (n) => n > 10)
    expect(result).to.deep.equal([])
  })
  //works with an empty input array
  it('Handles empty array correctly', () => {
    expect(filter([], (n) => n > 0)).to.deep.equal([])
  })
  //treats null input as an empty array
  it('Handles null array correctly', () => {
    expect(filter(null, (n) => n > 0)).to.deep.equal([])
  })
  //passes the index of each item to the predicate
  it('Invokes predicate with index', () => {
    const indices = []
    filter([10, 20, 30], (val, idx) => {
      indices.push(idx)
      return true
    })
    expect(indices).to.deep.equal([0, 1, 2])
  })
})