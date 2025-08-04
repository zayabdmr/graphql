import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//  Энэ хэсэг нь GraphQL схем буюу хэрэглэгч ямар төрлийн мэдээлэл асууж болохыг тодорхойлж байна.
const typeDefs = `
  type Query {
    hello: String
    ognoo: String
  }
`;

// Энэ бол resolvers буюу хэрэглэгч hello, ognoo query асуухад яг ямар өгөгдөл буцаахыг заадаг функцууд.
const resolvers = {
  Query: {
    hello: () => "Hello world",
    ognoo: () => new Date().toLocaleString(),
  },
};

// typeDefs, resolvers-оо Apollo Server-д өгч байна.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Серверийг ажиллуулах
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

// Консолд хэвлэх
console.log(`🚀 Server ready at ${url}`);
