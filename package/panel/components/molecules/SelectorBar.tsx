import BreadCrumbs from "./BreadCrumbs";
import Select from "../atoms/Select";
import usePanel from "../../hooks/usePanel";

export default function SelectorBar() {
  const panel = usePanel();
  return (
    <>
      <div className={"border-b border-gray-800"}>
        <div className={`flex ${panel.isStacked ? "flex-col" : "flex-row"}`}>
          <div className={"w-full p-3"}>
            <BreadCrumbs storeName="Fruit" stateKey="Apple" stateType="state" />
          </div>
          <div className={"border-s border-gray-800 pe-3"}></div>
          <Select placeholder="Store" className={"ps-3"} />
          <div className={"border-s border-gray-800 pe-3"}></div>
          <Select placeholder="Store" className={"ps-3"} />
          <div className={"border-s border-gray-800 pe-3"}></div>
          <Select placeholder="State" className={"ps-3"} />
        </div>
      </div>
    </>
  );
}
