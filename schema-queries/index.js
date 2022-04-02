const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`

# pontos de entrada para queries
  type Query {
    Users: [User]
  }

  type User {
    id: ID!
    name: String
    email: String
    password: Float

  }
`;

const resolvers = {
  Query: {
    Users: () => [
      {
        id: "1",
        name: "John Doe",
        email: "eurico@gmail.com",
        password: "123456"
      },
    ],
  },
};

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
