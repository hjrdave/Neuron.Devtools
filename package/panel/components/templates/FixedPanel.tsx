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
      ? "bottom-2 left-2 right-2 lg:right-20 lg:left-20"
      : position === PanelPositions.Left
      ? "right-2 left-2 top-2 md:right-auto md:w-80"
      : position === PanelPositions.Right
      ? "right-2 left-2 top-2 md:left-auto md:w-80"
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
            onStoreChange={(value) => {
              setSelectedStore(value ?? "");
              setSelectedKey("");
            }}
            onKeyChange={(value) => setSelectedKey(value ?? "")}
            onTypeChange={(value) => setSelectedType(value ?? "")}
            selectedStore={selectedStore}
            selectedKey={selectedKey}
            selectedType={selectedType}
          />
          {selectedStore && selectedKey && selectedType ? (
            <StateViewer
              storeData={(dynamicState as any)?.[selectedKey]?.[selectedType]}
              selectedStore={selectedStore}
              selectedKey={selectedKey}
              selectedType={selectedType}
            />
          ) : (
            <>
              <div className={"flex justify-center pt-5"}>
                <i className="fa-solid fa-cubes text-5xl"></i>
              </div>
              <p className={"text-center text-sm pt-2 pb-3"}>
                Select a Store, Key, and Type
              </p>
            </>
          )}
        </PanelContainer>
      ) : null}
    </>
  );
}
