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
      <div className={"tw-border-gray-800"}>
        <div
          className={`tw-flex tw-border-1 ${
            isStacked ? "tw-flex-col" : "tw-flex-row"
          }`}
        >
          {/**Non Stacked Breadcrumbs */}
          <div
            className={`tw-w-full tw-flex-col  tw-border-b tw-border-t tw-border-gray-800 ${
              !isStacked ? "tw-border-b" : "tw-hidden"
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
                "tw-flex tw-justify-center tw-border-t tw-border-gray-800 tw-cursor-pointer hover:tw-bg-gray-800"
              }
            >
              <i className="fa-solid fa-ellipsis tw-text-3xl tw-text-gray-500"></i>
            </div>
          ) : null}
          {show ? (
            <>
              <div
                className={`tw-w-full tw-flex ${
                  isStacked ? "tw-flex-col" : "tw-flex-row"
                }`}
              >
                <Select
                  placeholder="Select Store"
                  className={"tw-w-full"}
                  options={storeOptions}
                  onChange={onStoreChange}
                  value={selectedStore}
                  optionIcon={<i className="fa-solid fa-cubes tw-pe-2"></i>}
                  isStacked={isStacked}
                />
                <Select
                  placeholder="Select Key"
                  className={"tw-w-full"}
                  options={keyOptions}
                  onChange={onKeyChange}
                  value={selectedKey}
                  optionIcon={<i className="fa-solid fa-cube tw-pe-2"></i>}
                  isStacked={isStacked}
                />
                <Select
                  placeholder="Select Type"
                  className={"tw-w-full"}
                  options={["state", "payload"]}
                  onChange={onTypeChange}
                  value={selectedType}
                  uniqueOptionIcon={(option) =>
                    option === "state" ? (
                      <i className="fa-solid fa-database tw-pe-2"></i>
                    ) : option === "payload" ? (
                      <i className="fa-solid fa-box-open tw-pe-2"></i>
                    ) : (
                      <></>
                    )
                  }
                />
              </div>
            </>
          ) : null}
          {/**Stacked Breadcrumbs */}
          <div
            className={`tw-w-full tw-flex-col  tw-border-b ${
              show ? "" : "tw-border-t"
            } tw-border-gray-800 ${!isStacked ? "tw-hidden" : ""}`}
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
