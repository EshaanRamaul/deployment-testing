import {expect} from "chai"
import capitalize from '../src/capitalize.js'
//tests for the capitalize function

describe('Capitalize',() => {
    //turns FRED into Fred
    it('Capitalizes FRED to Fred',() => {
        expect(capitalize('FRED')).to.equal('Fred')
    })
    //turns fred into Fred
    it('Capitalizes fred to Fred',() => {
        expect(capitalize('fred')).to.equal('Fred')
    })
    //converts non-string values to string using toString
    it ('Makes non-string values using toString',() => {
        expect(capitalize(1234)).to.equal('1234')
    })
    //returns empty string when input is empty
    it ('Handles empty strings',() => {
        expect(capitalize('')).to.equal('')
    })
    //works for single characters and keeps A as A
    it ('Handles single character strings',() => {
        expect(capitalize('a')).to.equal('A')
        expect(capitalize('A')).to.equal('A')
    })
})
