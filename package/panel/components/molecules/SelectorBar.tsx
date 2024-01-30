import { useState, useEffect } from "react";
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
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isStacked) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [isStacked]);

  return (
    <>
      <div className={" border-gray-800"}>
        <div className={`flex border-1 ${isStacked ? "flex-col" : "flex-row"}`}>
          {/**Non Stacked Breadcrumbs */}
          <div
            className={`w-full flex-col  border-b border-t border-gray-800 ${
              !isStacked ? "border-b" : "hidden"
            }`}
          >
            <BreadCrumbs
              storeName={selectedStore}
              stateKey={selectedKey}
              stateType={selectedType}
            />
          </div>
          {isStacked ? (
            <div
              onClick={() => setShow((prev) => (prev ? false : true))}
              className={
                "flex justify-center border-t border-gray-800 cursor-pointer hover:bg-gray-800"
              }
            >
              <i className="fa-solid fa-ellipsis text-3xl text-white"></i>
            </div>
          ) : null}
          {show ? (
            <>
              <Select
                placeholder="Select Store"
                className={`ps-3 border-r-0`}
                options={storeOptions}
                onChange={onStoreChange}
                value={selectedStore}
              />
              <Select
                placeholder="Select Key"
                className={`ps-3 border-r-0 ${isStacked ? "border-t-0" : ""}`}
                options={keyOptions}
                onChange={onKeyChange}
                value={selectedKey}
              />
              <Select
                placeholder="Select Type"
                className={`ps-3 border-r-0 ${isStacked ? "border-t-0" : ""}`}
                options={["state", "payload", "features", "actions"]}
                onChange={onTypeChange}
                value={selectedType}
              />
            </>
          ) : null}
          {/**Stacked Breadcrumbs */}
          <div
            className={`w-full flex-col  border-b ${
              show ? "" : "border-t"
            } border-gray-800 ${!isStacked ? "hidden" : ""}`}
          >
            <BreadCrumbs
              storeName={selectedStore}
              stateKey={selectedKey}
              stateType={selectedType}
            />
          </div>
        </div>
      </div>
    </>
  );
}