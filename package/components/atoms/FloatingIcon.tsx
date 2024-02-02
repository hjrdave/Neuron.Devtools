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
          className={`tw-fixed ${
            topLeft
              ? "tw-top-2 tw-left-2"
              : topRight
              ? "tw-top-2 tw-right-2"
              : bottomRight
              ? "tw-bottom-2 tw-right-2"
              : bottomLeft
              ? "tw-bottom-2 tw-left-2"
              : "tw-bottom-2 tw-left-2"
          } tw-size-16 tw-bg-gray-800 hover:tw-bg-gray-900 tw-rounded-full tw-cursor-pointer tw-scale-95 hover:tw-scale-100 tw-transition-transform tw-transition-colors tw-shadow-sm tw-z-50`}
          onClick={openPanel}
          style={style}
        >
          <img src={LogoNeuron} className={"tw-w-auto tw-p-2"} />
        </div>
      ) : null}
    </>
  );
}
