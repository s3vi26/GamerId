import { Instance, onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { Gamer } from "./Gamer";

const RootModel = types.model({
  gamer: Gamer,
});

let initialState = RootModel.create({
  gamer: {
    gamerId: "",
    email: "",
    phone: "",
  },
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  console.log("Snapshot: ", snapshot);
  localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
