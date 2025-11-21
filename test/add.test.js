 import {expect} from 'chai'
import add from '../src/add.js'
//tests for the add function

describe('Addition Function', () => {
    //adds two positive numbers together
    it('Adds two positive numbers', () => {
        expect(add(2, 3)).to.equal(5)
    })
    //works correctly when both numbers are negative
    it('Works correctly with negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5)
    })
    //handles zero as one of the inputs
    it('Handles zero correctly', () => {
        expect(add(0, 5)).to.equal(5)
    })
})
