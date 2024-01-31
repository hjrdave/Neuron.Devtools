import { CSSProperties } from "react";
import LogoNeuron from "../../assets/logo-neuron.svg";
import usePanel from "../../hooks/usePanel";

interface Props {
  topLeft?: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  bottomLeft?: boolean;
  style?: CSSProperties;
}
export default function FloatingIcon({
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
  style,
}: Props) {
  const { openPanel, open } = usePanel();
  return (
    <>
      {!open ? (
        <div
          className={`fixed ${
            topLeft
              ? "top-2 left-2"
              : topRight
              ? "top-2 right-2"
              : bottomRight
              ? "bottom-2 right-2"
              : bottomLeft
              ? "bottom-2 left-2"
              : "bottom-2 left-2"
          } size-16 bg-gray-800 hover:bg-gray-900 rounded-full cursor-pointer scale-95 hover:scale-100 transition-transform transition-colors shadow-sm z-50`}
          onClick={openPanel}
          style={style}
        >
          <img src={LogoNeuron} className={"w-auto p-2"} />
        </div>
      ) : null}
    </>
  );
}
