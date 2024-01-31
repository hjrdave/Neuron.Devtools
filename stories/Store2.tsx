import React from "react";
import { createStore } from "@sandstack/neuron/react";
import { Persist, PersistProps } from "@sandstack/neuron/persist";
import { Devtools } from "../package/index";

interface IState {
  pokemon: string;
  lifePoints: number;
  pokemonTrainer: {
    name: string;
    age: number;
    ranking: string;
  };
}

export interface LifePointActions {
  increment: () => void;
  decrement: () => void;
}

export const { State, Module, useNeuron } = createStore<IState, PersistProps>();

export function Store2() {
  return (
    <>
      <Module use={Persist} />
      <Module use={Devtools({ storeName: "pokemonStore" })} />
      <State name={"pokemon"} state={"Pikachu"} />
      <State
        name={"lifePoints"}
        state={2000}
        actions={(dispatch) => ({
          increment: () =>
            dispatch((payload) => {
              payload.state = payload.prevState + 10;
            }),
          decrement: () =>
            dispatch((payload) => {
              payload.state = payload.prevState - 10;
            }),
        })}
      />
      <State
        name={"pokemonTrainer"}
        state={{
          name: "Ash",
          age: 10,
          ranking: "Master",
        }}
      />
    </>
  );
}
