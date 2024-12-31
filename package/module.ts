import { Module } from "@sandstack/neuron";
import { DevtoolsConnection } from "./connect";

interface Options {
  storeName: string;
}

const moduleName = `@sandstack/neuron-devtools`; //need a unique id that is passed by store

export const Devtools = ({ storeName }: Options) => {
  const devtools = new DevtoolsConnection();
  devtools.connectToPanel(storeName);
  return new Module({
    name: moduleName,
    onInit: (payload) => {
      devtools.sendPayloadToPanel(payload);
    },
    onCallback: (payload) => {
      devtools.sendPayloadToPanel(payload);
    },
  });
};
