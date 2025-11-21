import {expect} from 'chai'
import every from '../src/every.js'
// Tests for the every function

describe('every', () => {
  //returns true when every item in the array matches the condition
  it('Returns true when all elements satisfy the predicate', () => {
    const result = every([2,4,6], (n) => n% 2 === 0)
    expect(result).to.equal(true)
  })
  //returns false if at least one item does not match the condition
  it('Returns false when at least one element fails the predicate', () => {
    const result = every([true,1, null, 'yes'], Boolean)
    expect(result).to.equal(false)
  })
  //for an empty array, returns true (vacuous truth)
  it('Returns true for an empty array)', () => {
    const result = every([], (n) => n>0)
    expect(result).to.equal(true)
  })
  //treats null or undefined arrays as empty and returns true
  it('Returns true when array is null or undefined', () => {
    expect(every(null, () => false)).to.equal(true)
    expect(every(undefined, () => false)).to.equal(true)
  })
  //passes value, index, and the whole array to the callback
  it('Passes value,index and array to the condition function', () => {
    const calls = []
    const result = every([10, 20], (value,index,array) => {
      calls.push({value,index,array })
      return true
    })
    expect(result).to.equal(true)
    expect(calls).to.have.lengthOf(2)
    expect(calls[0]).to.deep.include({ value: 10, index: 0 })
    expect(calls[0].array).to.deep.equal([10, 20])
  })
  //stops checking as soon as the condition fails
  it('Stops iterating as soon as the condition returns false', () => {
    let callCount= 0
    const result= every([1,2,3,4], (value) => {
      callCount++
      return value<3 //will be false for 3
    })
    expect(result).to.equal(false)
    expect(callCount).to.equal(3) // called for 1,2,3 only
  })
})