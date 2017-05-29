var value = require('./values')

// Don't really need jQuery, but just an example of its use
var $ = require('jquery')
var _ = require('underscore')

// Trying out an import from the 'values' file
console.log('We begin:')
console.log(value.something)
console.log(value.sum(5,6))

// Working with underscore
console.log('\nNow testing underscore library:')

function print (elem) {
    console.log('Printing: ' + elem)
}

var list = [1, 2, 3]

_.each(list, print)
