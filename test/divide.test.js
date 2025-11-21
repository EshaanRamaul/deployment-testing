import {expect} from 'chai'
import divide from '../src/divide.js'
//tests for the divide function

describe('divide', () =>{ 
  //returns a number when dividing two positive values
  it('Divide two positive numbers', () => {
    expect(divide(6,4)).to.be.a('number')
  })
  //works when the first number is negative
  it('Works with negative numbers', () => {
    expect(divide(-6,4)).to.be.a('number')
  })
  //returns a number even when dividing by zero
  it('Handles division by zero', () => {
    const result =divide(6,0)
    expect(result).to.be.a('number')
  })
  //handles the case where the dividend is zero
  it ('Handles zero dividend', () => {
    const result = divide(0,5)
    expect(result).to.be.a('number')
  })
})