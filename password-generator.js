var generator = require('generate-password')

var password = generator.generate({
  length: 10,
  numbers: true,
})
console.log(password)

const http = require('node:http')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end(`<h1> Passeword : ${password}</h1>\n`)
})

server.listen(3001)
