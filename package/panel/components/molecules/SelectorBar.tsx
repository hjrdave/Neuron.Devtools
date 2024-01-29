import BreadCrumbs from "./BreadCrumbs";
import Select from "../atoms/Select";

interface Props {
  isStacked?: boolean;
  onStoreChange: (store?: string) => void;
  onKeyChange: (key?: string) => void;
  onTypeChange: (key?: string) => void;
  selectedStore?: string;
  selectedKey?: string;
  selectedType?: string;
  storeOptions?: string[];
  keyOptions?: string[];
}
export default function SelectorBar({
  isStacked,
  onStoreChange,
  onKeyChange,
  onTypeChange,
  selectedKey,
  selectedStore,
  selectedType,
  storeOptions,
  keyOptions,
}: Props) {
  return (
    <>
      <div className={"border-b border-gray-800"}>
        <div className={`flex ${isStacked ? "flex-col" : "flex-row"}`}>
          <div className={"w-full p-3"}>
            <BreadCrumbs
              storeName={selectedStore}
              stateKey={selectedKey}
              stateType={selectedType}
            />
          </div>
          <Select
            placeholder="Select Store"
            className={"ps-3"}
            options={storeOptions}
            onChange={onStoreChange}
          />
          <Select
            placeholder="Select Key"
            className={"ps-3"}
            options={keyOptions}
            onChange={onKeyChange}
          />
          <Select
            placeholder="Select Type"
            className={"ps-3"}
            options={["state", "payload", "features", "actions"]}
            onChange={onTypeChange}
          />
        </div>
      </div>
    </>
  );
}
