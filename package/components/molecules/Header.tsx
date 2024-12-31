import NeuronLogo from "../../assets/logo-neuron.svg";
import PanelPosition from "../atoms/PanelPosition";
import { usePanel } from "../../usePanel";

export default function Header() {
  const panel = usePanel();
  return (
    <>
      <div className="tw-relative tw-bg-clip-border tw-overflow-hidden tw-bg-transparent tw-text-gray-700 tw-shadow-none tw-m-0 tw-p-3 tw-rounded-none tw-flex tw-justify-between">
        <img src={NeuronLogo} width={30} />
        <div className={"tw-flex"}>
          <PanelPosition />
          <p className={"tw-ps-4 tw-pt-1"}>
            <i
              className={`fa-solid fa-minus tw-cursor-pointer tw-text-gray-500 hover:tw-text-white`}
              onClick={panel.closePanel}
            ></i>
          </p>
        </div>
      </div>
    </>
  );
}
