import { people, interGalaxyPlanets, starships } from "./data.js";
let planets = interGalaxyPlanets;

export default {
  StarwarObject: {
    __resolveType(obj) {
      if (obj.gender) return "Person";
      if (obj.population) return "Planet";
      if (obj.crew) return "Starship";
    },
  },

  Weapon: {
    description: (weapon) => `${weapon.name} - ${weapon.damage}`,
  },

  Person: {
    createDate: (root, args, context) =>
      root.create_date.slice(0, "yyyy-mm-dd".length),
  },

  Mutation: {
    addPlanet: (root, { input: { name, population } }) => {
      const newPlanet = { name, population };
      planets = [...planets, newPlanet];
      return newPlanet;
    },
  },

  Query: {
    people: () => people,
    starships: () => starships,
    planets: (root, { start, end }) => planets.slice(start, end),
    search: (root, { term }) =>
      [...people, ...starships, ...planets].filter(
        (obj) => obj.name.indexOf(term) !== -1
      ),
  },
};
