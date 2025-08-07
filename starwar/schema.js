export default `
  scalar UUID @specifiedBy(url: "https://tools.ietf.org/html/rfc4122")

  type Mutation {
    addPlanet(input: AddPlanetInput!): Planet
    createPlanet(input: AddPlanetInput!): Planet
  }

  input AddPlanetInput {
    name: String!
    population: String!
  }

  """
  ## Starwars movie api
  Star wars киноны талаарх тест апи
  """
  type Query {     
      """ *Star wars* кинонд гардаг ***дүр_үү_дийг*** авах """
      people: [Person]
      
      """ _Star wars_ кинонд гардаг __гаригуудыг__ авах """
      planets(end: Int = 7, start: Int = 0): [Planet]

      starships: [Starship]
      search(term: String!): [StarwarObject!]
  }

  type Person{
    name: String!
    height: Int
    gender: String
    createDate: String
    weapon: [Weapon!]
  }

  type Weapon {
    id: UUID
    name: String!
    damage: String!
    description: String @deprecated(reason: "name болон damage талбаруудыг ашиглана уу.")
  }

  """ Кинонд гарсан гаригийн тухай мэдээлэл өгнө """
  type Planet{
    """
    Гаригийн нэр
    """
    name: String!


    # population нэрийг цаашид солимоор
    population: String!
  }

  type Starship{
    name: String!
    crew: String!
  }

  union StarwarObject = Person | Planet | Starship
`;
