import {expect} from 'chai'
import camelCase from '../src/camelCase.js'
//tests for the camelCase function

describe('camelCase', () => {
  //turns Foo Bar into fooBar
  it('converts "Foo Bar" to "fooBar"', () => {
    expect(camelCase('Foo Bar')).to.equal('fooBar')
  })
  //handles dashes and extra separators and stil makes fooBar
  it('converts "--foo-bar--" to "fooBar"', () => {
    expect(camelCase('--foo-bar--')).to.equal('fooBar')
  })

  //handles uppercase with underscores and converts to fooBar
  it('converts "__FOO_BAR__" to "fooBar"', () => {
    expect(camelCase('__FOO_BAR__')).to.equal('fooBar')
  })

  //keeps single words camelCased correctly
  it('Handles single words correctly', () => {
    expect(camelCase('foo')).to.equal('foo')
    expect(camelCase('Foo')).to.equal('foo')
  })

  //converts non string values to string using toString
  it('Makes non-string values using toString', () => {
    expect(camelCase(1234)).to.equal('1234')
  })
})
