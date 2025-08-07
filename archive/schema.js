export default `
  type Query {
      me: Player!
      players(status: [Status!]!): [Player!]!
      player(id: ID!): Player
  }
  type Player {
    id: ID!
    name: String!
    rating: Float
    hasTeam: Boolean
    age: Int!
  }
  enum Status {
    ONLINE, OFFLINE, DISABLED, BANNED
  }
  
  interface Game {
    gameId: ID!,
    name: String!
    description: String!
    players: [Player!]!
    maxPlayerNumber: Int!
  }

  type Chess implements Game{
    gameId: ID!,
    name: String!
    description: String!
    players: [Player!]!
    maxPlayerNumber: Int!
    whitePlayerName: String!,
    blackPlayerName: String!,
    status: GameStatusEnum!,    
  }

  enum GameStatusEnum {
    PENDING, INPROGRESS, FINISHED
  }

  type CounterStrike implements Game {
    gameId: ID!
    name: String!
    description: String!
    players: [Player!]!
    maxPlayerNumber: Int!
    maps: [Map!]!
  }

  enum Map {
    de_dust2, de_mirage, de_inferno
  }
`;
