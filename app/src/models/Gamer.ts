import { types } from "mobx-state-tree";

export const Gamer = types
  .model({
    gamerId: types.string,
    email: types.string,
    phone: types.string,
  })
  .actions((self) => ({
    changeEmail(newEmail: string) {
      self.email = newEmail;
    },
  }));
