let React = require('react')
let ReactDOM = require('react-dom')
let TestUtils = require('react-dom/test-utils')
let expect = require('expect')
let $ = require('jquery')

let {ImageGallery} = require('ImageGallery')

describe('ImageGallery', () => {
  it('should exist', () => {
    expect(ImageGallery).toExist()
  })

})