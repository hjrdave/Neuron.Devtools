import { NeuronClient } from "@sandstack/neuron/react";
import { Persist } from "@sandstack/neuron/persist";
import { CSSProperties } from "react";

export const PANEL_POSITIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  RIGHT: "right",
  LEFT: "left",
  EXPAND: "expand",
};

export const NEURON_KEY = {
  STORE_LIST: "devtools_storeList",
  PANEL_POSITION: "devtools_panelPosition",
  SELECTED_STORE: "devtools_selectedStore",
  KEY_LIST: "devtools_keyList",
  SELECTED_TYPE: "devtools_selectedType",
  SELECTED_KEY: "devtools_selectedKey",
  OPEN_PANEL: "devtools_openPanel",
  CUSTOM_STYLES: "devtools_customStyles",
};

export const {
  neuron,
  useNeuron,
  connect: client,
} = new NeuronClient({
  modules: [Persist()],
});

export const useStoreList = neuron<string[], unknown>([], {
  key: NEURON_KEY.STORE_LIST,
  onDispatch: (payload) => {
    payload.state = [...new Set(payload.state)];
  },
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
export const useSelectedStore = neuron("", {
  key: NEURON_KEY.SELECTED_STORE,
  onCallback: () => {
    const selectedStoreData = client.getRef<string[]>(
      NEURON_KEY.SELECTED_STORE
    );
    const keyList = Object.keys(selectedStoreData);
    client.dispatch(
      NEURON_KEY.KEY_LIST,
      (payload) => (payload.state = keyList)
    );
  },
});

export const useSelectedKey = neuron("", { key: NEURON_KEY.SELECTED_KEY });

export const useSelectedType = neuron("", { key: NEURON_KEY.SELECTED_TYPE });

export const useOpenPanel = neuron<boolean, unknown>(false, {
  key: NEURON_KEY.OPEN_PANEL,
});

export const useKeyList = neuron<string[], unknown>([], {
  key: NEURON_KEY.KEY_LIST,
});

export const useCustomStyles = neuron<CustomStyles, unknown>(
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
