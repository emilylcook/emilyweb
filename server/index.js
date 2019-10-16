require('dotenv').config()

const server = require('./src/server')
const PORT = process.env.PORT || 4000

server.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})
