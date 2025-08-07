import { faker } from "@faker-js/faker";

export default {
  User: {
    friends: (root) => {
      console.log("Дуудагдлаа...");
      return [fakeUser(), fakeUser(), fakeUser()];
    },
  },
  Query: {
    me: () => fakeUser(),
  },
};

function fakeUser() {
  return { name: faker.person.fullName };
}
