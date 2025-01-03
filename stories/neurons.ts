import { NeuronClient } from "@sandstack/neuron/react";
import { Devtools } from "../package/index";

const { neuron, client } = new NeuronClient({
  modules: [Devtools({ storeName: "testNeuronClient" })],
});

export const useFruit = neuron("apple", { key: "fruit" });
export const usePerson = neuron(
  {
    name: "Bob",
    gender: "male",
    jobTitle: "Developer",
  },
  { key: "person" }
);
export const useScore = neuron(1000, {
  key: "score",
  actions: (dispatch) => ({
    increment: () =>
      dispatch((payload) => {
        payload.state = payload.prevState + 10;
      }),
    decrement: () =>
      dispatch((payload) => {
        payload.state = payload.prevState - 10;
      }),
  }),
});
export const useUserName = neuron("Captain Foo", { key: "userName" });
export const useCarList = neuron(["toyota", "ford", "chevy"], {
  key: "carList",
});
