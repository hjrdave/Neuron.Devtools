import PanelContainer from "../organisms/PanelContainer";
import SelectorBar from "../molecules/SelectorBar";
import StateViewer from "../atoms/StateViewer";
import usePanel from "../../usePanel";
import {
  PANEL_POSITIONS,
  useStoreList,
  useKeyList,
  useSelectedKey,
  useSelectedType,
  useSelectedStore,
  useNeuron,
} from "../../neurons";

export default function FixedPanel() {
  const { position, open, isStacked } = usePanel();
  const positionStyles =
    position === PANEL_POSITIONS.TOP
      ? "tw-top-2 tw-left-20 tw-right-20"
      : position === PANEL_POSITIONS.BOTTOM
      ? "tw-bottom-2 tw-left-2 tw-right-2 lg:tw-right-20 lg:tw-left-20"
      : position === PANEL_POSITIONS.LEFT
      ? "tw-right-2 tw-left-2 tw-top-2 md:tw-right-auto md:tw-w-80"
      : position === PANEL_POSITIONS.RIGHT
      ? "tw-right-2 tw-left-2 tw-top-2 md:tw-left-auto md:tw-w-80"
      : "";
  const [storeList] = useStoreList();
  const [keyList] = useKeyList();
  const [selectedStore, { set: setSelectedStore }] = useSelectedStore();
  const [selectedKey, { set: setSelectedKey }] = useSelectedKey();
  const [selectedType, { set: setSelectedType }] = useSelectedType();
  const [dynamicState] = useNeuron(selectedStore);

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
