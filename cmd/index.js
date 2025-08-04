// Энэ код нь GraphQL server ажиллуулахгүйгээр, GraphQL query-г шууд Node.js-ийн дотор ажиллуулж,
// console.log()-оор хариуг гаргаж өгөх CLI (command-line interface) загварын програм юм.

// Энэ код нь GraphQL сервер эхлүүлэхгүйгээр, Node.js дээр query-гээ тестлэх энгийн арга юм.

import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql } from "graphql";

// 1. GraphQL-ийн schema болон resolvers тодорхойлно
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

// 2. Schema-г makeExecutableSchema()-аар үүсгэж байна
// Энэ функц typeDefs ба resolvers-ийг нэгтгээд ажиллах боломжтой GraphQL schema болгож хувиргана.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// 3. Query-г terminal-аас авах
// process.argv бол терминалд бичсэн аргументуудыг агуулдаг массив.
// process.argv[2] гэдэг нь гурав дахь аргумент буюу:
// node file.js "query { hello }"
// ↑ энэ хэсэг
const query = process.argv[2];

// 4. graphql() функцээр query-г ажиллуулна
// graphql() нь schema болон query-г аваад хариуг тооцоолж өгдөг.
graphql({
  schema,
  source: query,
}).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
