// This is a trivial test case, to show that Mocha is working
// Notice that you didn't need to install 'assert'!
var assert = require('assert')

// Notice that this is *not* a test!
// You need to wrap tests in the describe() and it() functions
var something = 1
assert.equal(1, something)

describe('First Test', function () {
    it('should be run and always pass', function () {
        assert.equal(1, something)
    })
    it('should also be run and always pass', function () {
        assert.notEqual(2, something)
    })
})
