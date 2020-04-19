const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const ctx = 'Hola'
    return {
      ctx
    }
  }
})

// Arrancar el Servidor
server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en ${url}`)
})
