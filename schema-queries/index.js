const { gql, ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers");
const types = require("./types-defs");
const typeDefs = types(gql);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cacheControl: {
    defaultMaxAge: 5,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
