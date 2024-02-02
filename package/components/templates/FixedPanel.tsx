import PanelContainer from "../organisms/PanelContainer";
import SelectorBar from "../molecules/SelectorBar";
import StateViewer from "../atoms/StateViewer";
import usePanel from "../../hooks/usePanel";
import { PanelPositions, useNeuron, useWeakNeuron } from "../../Store";

export default function FixedPanel() {
  const { position, open, isStacked } = usePanel();
  const positionStyles =
    position === PanelPositions.Top
      ? "tw-top-2 tw-left-20 tw-right-20"
      : position === PanelPositions.Bottom
      ? "tw-bottom-2 tw-left-2 tw-right-2 lg:tw-right-20 lg:tw-left-20"
      : position === PanelPositions.Left
      ? "tw-right-2 tw-left-2 tw-top-2 md:tw-right-auto md:tw-w-80"
      : position === PanelPositions.Right
      ? "tw-right-2 tw-left-2 tw-top-2 md:tw-left-auto md:tw-w-80"
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
              <div className={"tw-flex tw-justify-center tw-pt-5"}>
                <i className="fa-solid fa-cubes tw-text-5xl"></i>
              </div>
              <p className={"tw-text-center tw-text-sm tw-pt-2 tw-pb-3"}>
                Select a Store, Key, and Type
              </p>
            </>
          )}
        </PanelContainer>
      ) : null}
    </>
  );
}
