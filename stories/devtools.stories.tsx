import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DevtoolsPanel } from "../package/index";
import { useFruit, useScore } from "./neurons";

export default {
  title: "Tests/Devtools",
} as Meta;

const App = () => {
  const [fruit, { set: setFruit }] = useFruit();
  const [score, { increment, decrement }] = useScore();
  return (
    <>
      <button onClick={() => setFruit("Pineapple")} className={"mx-1"}>
        Update Fruit
      </button>
      <button onClick={increment} className={"mx-1"}>
        Increment
      </button>
      <button onClick={decrement} className={"mx-1"}>
        Decrement
      </button>
      <p className={"pt-3"}>Fruit: {fruit}</p>
      <p>Score: {score}</p>
    </>
  );
};

const PanelTemplate: StoryFn = () => {
  return (
    <>
      <DevtoolsPanel floatBtnBottomRight attachPanelRight />
      <App />
    </>
  );
};
export const Panel = PanelTemplate.bind({});
Panel.args = {};
