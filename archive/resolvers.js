import players from "./data.js";

export default {
  Query: {
    me: () => players[1],
    players: (root, { status }) =>
      players.filter((player) => status.find((s) => s === player.status)),
    player: (root, { id }, context) => {
      return players.find((player) => player.id === id);
    },
  },
};
