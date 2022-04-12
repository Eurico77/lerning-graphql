const { gql, ApolloServer } = require("apollo-server");
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api";

const typeDefs = gql`

  type Query {
    Characters: [Character]!
    Character(id: ID!): Character
  }

  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!

  }
`;

const resolvers = {
  Query: {
    Characters: async () => {
      const { data } = await axios.get(`${URL}/character`);
      console.log(data);
      return data.results;
    },

    Character: async (_, { id }) => {
      const { data } = await axios.get(`${URL}/character/${id}`);
      return data;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
