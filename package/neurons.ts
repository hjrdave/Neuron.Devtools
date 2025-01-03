import { NeuronClient } from "@sandstack/neuron/react";
//import { Persist } from "@sandstack/neuron/persist";
import { CSSProperties } from "react";
import { IPayload } from "@sandstack/neuron";

export const PANEL_POSITIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  RIGHT: "right",
  LEFT: "left",
  EXPAND: "expand",
};

export const NEURON_KEY = {
  NEURON_DATA_STORES: "devtools_neuronDataStores",
  NEURON_STORE_NAME_LIST: "devtools_neuronStoreNameList",
  NEURON_KEY_LIST: "devtools_neuronKeyList",
  SELECTED_NEURON_KEY: "devtools_selectedNeuronKey",
  SELECTED_TYPE: "devtools_selectedType",
  PANEL_POSITION: "devtools_panelPosition",
  SELECTED_STORE: "devtools_selectedStore",
  OPEN_PANEL: "devtools_openPanel",
  CUSTOM_STYLES: "devtools_customStyles",
};

export const { neuron, useNeuron, client } = new NeuronClient({
  // modules: [Persist()],
});
export const useNeuronDataStores = neuron<NeuronDataByStoreName>(
  {},
  {
    key: NEURON_KEY.NEURON_DATA_STORES,
    onCallback: (payload) => {
      const storeNameList = Object.keys(payload.state);
      client.dispatch(
        NEURON_KEY.NEURON_STORE_NAME_LIST,
        (payload) => (payload.state = storeNameList)
      );
    },
  }
);
export const addNeuronDataStore = (newDataStore: NeuronDataByStoreName) =>
  client.dispatch(
    NEURON_KEY.NEURON_DATA_STORES,
    (payload) => (payload.state = { ...payload.prevState, ...newDataStore })
  );
export const getNeuronDataStores = () => {
  return client.getRef<NeuronDataByStoreName>(NEURON_KEY.NEURON_DATA_STORES);
};
export const setNeuronDataStores = (
  updatedNeuronDataStores: NeuronDataByStoreName
) => {
  client.dispatch(
    NEURON_KEY.NEURON_DATA_STORES,
    (payload) => (payload.state = updatedNeuronDataStores)
  );
};
export const updateNeuronDataByStoreName = (
  storeName: string,
  payload: IPayload
) => {
  const neuronKey = payload.key;
  const allNeuronDataStores = getNeuronDataStores();
  allNeuronDataStores[storeName][neuronKey] = {
    payload: {
      state: payload.state,
      prevState: payload.prevState,
    },
  };
  const updatedNeuronDataStores = { ...allNeuronDataStores };
  setNeuronDataStores(updatedNeuronDataStores);
};
export const useStoreNameList = neuron<string[]>([], {
  key: NEURON_KEY.NEURON_STORE_NAME_LIST,
});
export const useSelectedStore = neuron("", {
  key: NEURON_KEY.SELECTED_STORE,
  onCallback: (payload) => {
    const neuronDataStores = client.getRef<string[]>(
      NEURON_KEY.NEURON_DATA_STORES
    );
    const keyList = Object.keys(neuronDataStores[payload.state as any]);
    client.dispatch(
      NEURON_KEY.NEURON_KEY_LIST,
      (payload) => (payload.state = keyList)
    );
  },
});
export const useSelectedKey = neuron("", {
  key: NEURON_KEY.SELECTED_NEURON_KEY,
});
export const useSelectedType = neuron("", { key: NEURON_KEY.SELECTED_TYPE });
export const useKeyList = neuron<string[]>([], {
  key: NEURON_KEY.NEURON_KEY_LIST,
});
export const usePanelPosition = neuron(PANEL_POSITIONS.TOP, {
  key: NEURON_KEY.PANEL_POSITION,
  actions: (dispatch) => ({
    changeToTop: () =>
      dispatch((payload) => {
        payload.state = PANEL_POSITIONS.TOP;
      }),
    changeToBottom: () =>
      dispatch((payload) => {
        payload.state = PANEL_POSITIONS.BOTTOM;
      }),
    changeToRight: () =>
      dispatch((payload) => {
        payload.state = PANEL_POSITIONS.RIGHT;
      }),
    changeToLeft: () =>
      dispatch((payload) => {
        payload.state = PANEL_POSITIONS.LEFT;
      }),
  }),
});
export const useOpenPanel = neuron(false, {
  key: NEURON_KEY.OPEN_PANEL,
});

export const useCustomStyles = neuron<CustomStyles>(
  {},
  { key: NEURON_KEY.CUSTOM_STYLES }
);

export interface StateItem {
  [stateKey: string]: {
    state: any;
    actions?: any;
    features?: any;
    payload?: any;
  };
}

export interface CustomStyles {
  floatingIcon?: CSSProperties;
}

export interface DataByNeuronKey {
  [neuronKey: string]: {
    payload?: {
      state?: unknown;
      prevState?: unknown;
    };
  };
}
export interface NeuronDataByStoreName {
  [storeName: string]: DataByNeuronKey;
}
