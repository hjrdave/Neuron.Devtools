import PanelContainer from "../organisms/PanelContainer";
import SelectorBar from "../molecules/SelectorBar";
import StateViewer from "../atoms/StateViewer";
import usePanel from "../../hooks/usePanel";
import { PanelPositions, useNeuron, useWeakNeuron } from "../../Store";

export default function FixedPanel() {
  const { position, open, isStacked } = usePanel();
  const positionStyles =
    position === PanelPositions.Top
      ? "top-2 left-20 right-20"
      : position === PanelPositions.Bottom
      ? "bottom-2 left-20 right-20"
      : position === PanelPositions.Left
      ? "left-2 top-2 w-1/5"
      : position === PanelPositions.Right
      ? "right-2 top-2 w-1/5"
      : "";
  const [storeList] = useNeuron((store) => store.devtools_storeList);
  const [keyList] = useNeuron((store) => store.devtools_keyList);
  const [selectedStore, setSelectedStore] = useNeuron(
    (store) => store.devtools_selectedStore
  );
  const [selectedKey, setSelectedKey] = useNeuron(
    (store) => store.devtools_selectedKey
  );
  const [selectedType, setSelectedType] = useNeuron(
    (store) => store.devtools_selectedType
  );
  const [dynamicState] = useWeakNeuron(selectedStore);
  return (
    <>
      {open ? (
        <PanelContainer className={positionStyles}>
          <SelectorBar
            isStacked={isStacked}
            storeOptions={storeList}
            keyOptions={keyList}
            onStoreChange={(value) => setSelectedStore(value ?? "")}
            onKeyChange={(value) => setSelectedKey(value ?? "")}
            onTypeChange={(value) => setSelectedType(value ?? "")}
            selectedStore={selectedStore}
            selectedKey={selectedKey}
            selectedType={selectedType}
          />
          <StateViewer
            storeData={(dynamicState as any)?.[selectedKey]?.[selectedType]}
            selectedStore={selectedStore}
            selectedKey={selectedKey}
            selectedType={selectedType}
          />
        </PanelContainer>
      ) : null}
    </>
  );
}
