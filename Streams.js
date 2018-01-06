const NumbersStream = {
  each: ( fun ) => {
    setTimeout( () => fun( 1 ), 500 )
    setTimeout( () => fun( 2 ), 1000 )
    setTimeout( () => fun( 3 ), 1500 )
    setTimeout( () => fun( 100 ), 2000 )
  }
}

// NumbersStream.each(console.log)

const fs = require('fs')
const highland = require('highland')

let stream = fs.createReadStream('customers.csv', 'utf-8')

highland(stream)
  .split()
  .map(line => line.split(','))
  .filter(arr2 => arr2[1] > 1)
  .map(arr2 => ({name: arr2[0], clients: arr2[1]}))
  .each(line => console.log('line: ', line))