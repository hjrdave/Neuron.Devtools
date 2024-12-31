import { client } from "./neurons";
import { IPayload } from "@sandstack/neuron";
import { NEURON_KEY } from "./neurons";
export class DevtoolsConnection implements IDevtoolsConnection {
  public storeName?: string;
  connectToPanel = (storeName: string) => {
    this.storeName = storeName;
    client.neuron({}, { key: this.storeName });
    const currentStoreList =
      client.getRef<string[]>(NEURON_KEY.STORE_LIST) ?? [];
    const updatedStoreList = [...currentStoreList, this.storeName];
    client.dispatch(NEURON_KEY.STORE_LIST, (payload) => {
      payload.state = updatedStoreList;
    });
  };
  sendPayloadToPanel = (payload: IPayload<unknown>) => {
    if (this.storeName) {
      const allStoreItems = client.getRef<{ [key: string]: any }>(
        this.storeName
      );
      client.dispatch(this.storeName, () => {
        payload.state = {
          ...allStoreItems,
          [payload.key]: {
            state: payload.state,
            payload: {
              key: payload.key,
              state: payload.state,
              prevState: payload.prevState,
              isDispatchCancelled: payload.isDispatchCancelled(),
            },
          },
        };
      });
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
