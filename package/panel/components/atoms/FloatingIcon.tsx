import LogoNeuron from "../../../assets/logo-neuron.svg";
import usePanel from "../../hooks/usePanel";

export default function FloatingIcon() {
  const { openPanel, open } = usePanel();
  return (
    <>
      {!open ? (
        <div
          className={`bg-gray-800 hover:bg-gray-900 rounded-full cursor-pointer scale-95 hover:scale-100 transition-transform transition-colors shadow-sm -z-50`}
          style={{ width: "65px" }}
          onClick={openPanel}
        >
          <img src={LogoNeuron} className={"w-auto p-2"} />
        </div>
      ) : null}
    </>
  );
}
