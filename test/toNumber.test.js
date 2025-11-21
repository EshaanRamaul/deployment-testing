import {expect} from 'chai'
import toNumber from '../src/toNumber.js'
//tests for the toNumber utility function

describe('toNumber', () => {
  //returns numeric input unchanged
  it('Should return number as is', () => {
    expect(toNumber(3.2)).to.equal(3.2)
  })
  //converts numeric strings to numbers
  it('Should convert string to number', () => {
    expect(toNumber('3.2')).to.equal(3.2)
  })
  //handles Infinity without modification
  it('Should handle infinity correctly', () => {
    expect(toNumber(Infinity)).to.equal(Infinity)
  })
  //converts binary string correctly
  it('converts binary strings', () => {
    expect(toNumber('0b101')).to.equal(5)
  })
  //converts octal string correctly
  it('converts octal strings', () => {
    expect(toNumber('0o10')).to.equal(8)
  })
  //returns NaN for Symbol input
  it('Returns NaN for symbols', () => {
      const result = toNumber(Symbol('test'))
      expect(result).to.be.NaN
  })
  //Handles zero correctly
  it('Converts zero', () => {
    expect(toNumber(0)).to.equal(0)
  })
  //treats null as 0
  it('Handles null values', () => {
    expect(toNumber(null)).to.equal(0)
  })
  //trims whitespace before converting stringto number
  it('Handles space trimming', () => {
    expect(toNumber('  32  ')).to.equal(32)
  })
})