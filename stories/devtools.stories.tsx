import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DevtoolsPanel } from "../package/index";
import "../package/index.css";

export default {
  title: "Tests/Devtools",
} as Meta;

const PanelTemplate: StoryFn = () => {
  return (
    <>
      <DevtoolsPanel />
    </>
  );
};
export const Panel = PanelTemplate.bind({});
Panel.args = {};
