const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const {MONGODB} = require('./config');

const typeDefs = require("./graphql/TypeDefs");
const resolvers = require("./resolvers");

mongoose.connect(MONGODB,{ useNewUrlParser:true,useUnifiedTopology: true }).then(()=>console.log(`🥳 MongoDB Connected !`));
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
  