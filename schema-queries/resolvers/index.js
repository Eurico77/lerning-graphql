module.exports.resolvers = {
  User: {
    salary: (obj) => {
      console.log(obj);
      return obj.salary_now * 2;
    },
    email: ({ email }) => {
      return email.toUpperCase();
    },
  },

  Query: {
    Users: () => [
      {
        id: "1",
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        age: 30,
        salary_now: 2000.25,
      },
      {
        id: "2",
        name: "Enrico",
        email: "eurico@gmail.com",
        age: 25,
        salary_now: 70000.25,
      },
    ],
  },
};
