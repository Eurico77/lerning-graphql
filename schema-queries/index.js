const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`

# pontos de entrada para queries
  type Query {
    Users: [User!]!
  }

  type User {
    id: ID!
    name: String
    email: String
    age: Int
    salary: Float

  }
`;

const resolvers = {
  Query: {
    Users: () => [
      {
        id: "1",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        age: 30,
        salary: 2000.25
      },
      {
        id: "2",
        name: "Eurico",
        email: "eurico@gmail.com",
        age: 25,
        salary: 70000.25
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
