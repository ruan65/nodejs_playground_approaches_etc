const pause = (ms) => {
  const startPoint = new Date().getTime()
  while (new Date().getTime() - startPoint <= ms) {/* wait */}
}

let printTheMessage = (msg, callback) => {
  console.log(msg)
  pause(4000)
  callback()
}


printTheMessage("Hello", () => console.log("message has printed!!!"))
