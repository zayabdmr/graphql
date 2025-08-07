export default `
  type Query {      
      me: User
  }

  type User{
    name: String!
    friends: [User!]
  }
`;
