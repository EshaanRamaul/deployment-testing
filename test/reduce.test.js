import {expect} from 'chai'
import reduce from '../src/reduce.js'
// Tests for the reduce function

describe('reduce', () => {
  //adds up all numbers in the array when a starting value is given
  it('Sums array with accumulator', () => {
    expect(reduce([1,2,3], (sum, n) => sum + n, 0)).to.equal(6)
  })
  //uses the first element as the starting value when no accumulator is passed
  it('Reduces without initial accumulator uses first element', () => {
    expect(reduce([2,3,4], (sum, n) => sum + n)).to.equal(9)
  })
  //groups object keys by their values into an object of arrays
  it('Groups object keys by value', () => {
    const obj = { a:1, b:2, c:1 }
    const out = reduce(obj,(res,val,key) => {
      (res[val] || (res[val]= [])).push(key)
      return res
    }, {})
    expect(out['1']).to.include('a').and.to.include('c')
    expect(out['2']).to.include('b')
  })
  //returns the initial accumulator when the array is empty
  it('Handles empty array with accumulator', () => {
    expect(reduce([], (s, n) => s + n, 0)).to.equal(0)
  })
})