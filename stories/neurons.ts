import { NeuronClient } from "@sandstack/neuron/react";
import { Devtools } from "../package/index";

const { neuron } = new NeuronClient({
  modules: [Devtools({ storeName: "testNeuronClient" })],
});

export const useFruit = neuron("apple");
export const usePerson = neuron({
  name: "Bob",
  gender: "male",
  jobTitle: "Developer",
});
export const useScore = neuron(1000, {
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
export const useUserName = neuron("Captain Foo");
export const useCarList = neuron(["toyota", "ford", "chevy"]);
