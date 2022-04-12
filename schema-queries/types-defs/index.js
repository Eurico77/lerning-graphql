module.exports = (gql) => {
  return gql`
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
};
