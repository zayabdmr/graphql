import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql } from "graphql";

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World from GraphQL!",
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const query = process.argv[2];

graphql({
  schema,
  source: query,
}).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
