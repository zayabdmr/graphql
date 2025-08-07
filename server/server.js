import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const players = [
  { id: "JG8NG", name: "Нараа", rating: 4.4, hasTeam: false, age: 23 },
  { id: "AJQEE", name: "Төрөө", rating: 3.8, hasTeam: true, age: 17 },
  { id: "5WFU3", name: "Болдоо", rating: 4.7, hasTeam: true, age: 28 },
];

const typeDefs = `
   type Query {
     me: Player
     players: [Player!]!
     player(id: ID!): Player
 }
 type Player {
   id: ID!
   name: String!
   rating: Float
   hasTeam: Boolean
   age: Int!
 }
`;

const resolvers = {
  Query: {
    me: () => players[2],
    players: () => players,
    player: (root, { id }, context) => {
      return players.find((player) => player.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4567 } });

console.log(`🚀 Аполло graphql сэрвэр: ${url}`);
