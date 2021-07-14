const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const  { ConnectDB } = require('./db')
const {Bookrepo, AuthorRepo, BookAuthorRepo} = require('./cqrs')
const app = express()
app.use(express.json())
const run = async () => {
    await ConnectDB()
    const server = new ApolloServer({typeDefs,resolvers,context:() =>({Bookrepo, AuthorRepo, BookAuthorRepo})})
    await server.start()
    server.applyMiddleware({app})
    app.listen(3000,()=>{
        console.log("App run on port 3000")
    })
}
run()