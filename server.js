const http = require('node:http')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(3000)
