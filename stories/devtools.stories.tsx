import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DevtoolsPanel } from "../package/index";
import { Store } from "./Store";
import "../package/index.css";

export default {
  title: "Tests/Devtools",
} as Meta;

const App = () => {
  return (
    <>
      <p>foo</p>
    </>
  );
};

const PanelTemplate: StoryFn = () => {
  return (
    <>
      <DevtoolsPanel />
      <Store />
      <App />
    </>
  );
};
export const Panel = PanelTemplate.bind({});
Panel.args = {};
