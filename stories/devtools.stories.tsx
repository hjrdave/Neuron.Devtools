import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "@material-tailwind/react";
import { DevtoolsPanel } from "../package/index";
import { Store, useNeuron, ScoreActions } from "./Store";
import "../package/index.css";

export default {
  title: "Tests/Devtools",
} as Meta;

const App = () => {
  const [fruit, setFruit] = useNeuron((store) => store.fruit);
  const [score, , { increment, decrement }] = useNeuron<number, ScoreActions>(
    (store) => store.score
  );
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
      <p>Fruit: {fruit}</p>
      <p>Score: {score}</p>
    </>
  );
};

const PanelTemplate: StoryFn = () => {
  return (
    <>
      <DevtoolsPanel floatPanelRight floatBtnBottomLeft />
      <Store />
      <App />
    </>
  );
};
export const Panel = PanelTemplate.bind({});
Panel.args = {};
