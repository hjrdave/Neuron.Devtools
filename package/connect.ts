import { IPayload } from "@sandstack/neuron";
import { addNeuronDataStore, updateNeuronDataByStoreName } from "./neurons";
export class DevtoolsConnection implements IDevtoolsConnection {
  public storeName?: string;
  connectToPanel = (storeName: string) => {
    this.storeName = storeName;
    addNeuronDataStore({
      [this.storeName]: {},
    });
  };
  sendPayloadToPanel = (payload: IPayload) => {
    if (this.storeName) {
      updateNeuronDataByStoreName(this.storeName, payload);
    } else {
      console.error(
        `Neuron Devtools:`,
        `Store must be connected to Devtools Panel. Make sure you have ran 'connectToPanel' first.`
      );
    }
  };
}

interface IDevtoolsConnection {
  storeName?: string;
  connectToPanel: (storeName: string) => void;
  sendPayloadToPanel: (payload: IPayload<unknown>) => void;
}
