const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const {MONGODB} = require('./config')
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
    Query: {
      books: () => 'hi',
    },
  };
mongoose.connect(MONGODB,{ useNewUrlParser:true,useUnifiedTopology: true }).then(()=>console.log(`🥳 MongoDB Connected !`));
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
  