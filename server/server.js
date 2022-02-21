const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
// const mongoose = require('mongoose')

// const dbURI = 'mongodb://localhose:27017/printing_galore_db'




const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');


async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    // app.use('/', express.static('src/images'));
    app.use('/uploads', express.static('src'));
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });


    // CONNECT TO MONGODB
    // await mongoose.connect(dbURI, {
    //     useUnifedTopology: true,
    //     useNewUrlParser: true,
    // })
    // console.log(`Connected to ${dbURI}`)

    await server.start();
    server.applyMiddleware({ app, bodyParserConfig: true });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);