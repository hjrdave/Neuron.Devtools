import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "@material-tailwind/react";
import { DevtoolsPanel } from "../package/index";
import { Store, useNeuron, ScoreActions } from "./Store";
import { Store2, useNeuron as useNeuron2 } from "./Store2";
import "../package/index.css";

export default {
  title: "Tests/Devtools",
} as Meta;

const App = () => {
  const [fruit, setFruit] = useNeuron((store) => store.fruit);
  const [score, , { increment, decrement }] = useNeuron<number, ScoreActions>(
    (store) => store.score
  );
  const [pokemon] = useNeuron2((store) => store.pokemon);
  const [lifePoints] = useNeuron2((store) => store.lifePoints);
  const [pokemonTrainer] = useNeuron2((store) => store.pokemonTrainer);
  return (
    <>
      <Button onClick={() => setFruit("Pineapple")} className={"mx-1"}>
        Update Fruit
      </Button>
      <Button onClick={increment} className={"mx-1"}>
        Increment
      </Button>
      <Button onClick={decrement} className={"mx-1"}>
        Decrement
      </Button>
      <p className={"pt-3"}>Fruit: {fruit}</p>
      <p>Score: {score}</p>
      <p>Pokemon: {pokemon}</p>
      <p>Life Points: {lifePoints}</p>
      <p>Pokemon Trainer: {pokemonTrainer.name}</p>
    </>
  );
};

const PanelTemplate: StoryFn = () => {
  return (
    <>
      <DevtoolsPanel floatBtnBottomRight attachPanelRight />
      <Store />
      <Store2 />
      <App />
    </>
  );
};
export const Panel = PanelTemplate.bind({});
Panel.args = {};
