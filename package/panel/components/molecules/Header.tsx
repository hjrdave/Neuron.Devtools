import { CardHeader } from "@material-tailwind/react";
import NeuronLogo from "../../../assets/logo-neuron.svg";
import PanelPosition from "../atoms/PanelPosition";
import usePanel from "../../hooks/usePanel";

export default function Header() {
  const panel = usePanel();
  return (
    <>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 p-3 rounded-none flex justify-between"
      >
        <img src={NeuronLogo} width={30} />
        <div className={"flex"}>
          <PanelPosition />
          <p className={"ps-4"}>
            <i
              className={`fa-solid fa-minus cursor-pointer text-gray-500 hover:text-white`}
              onClick={panel.closePanel}
            ></i>
          </p>
        </div>
      </CardHeader>
    </>
  );
}
