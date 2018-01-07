const Bacon = require('baconjs')
const stream = new Bacon.Bus()

const delay = (ms) => {
  const startPoint = new Date().getTime()
  while (new Date().getTime() - startPoint <= ms) {/* wait */}
}


stream
  .onValue(v => console.log(v))

stream.push(['hello', 'kitty'])
delay(2000)
stream.push('kitty')