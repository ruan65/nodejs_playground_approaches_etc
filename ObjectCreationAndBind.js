let printThis = function () {
  console.log(this)
}

function talk() {
  console.log(this.sound)
}


let bird = {
  whatIs: printThis,
  sound: 'tweet tweet',
  speak: talk
}

bird.whatIs()
bird.speak()

talk()

this.sound = 'hihi'

talk()

let talkHere = talk.bind(this)

talkHere()
