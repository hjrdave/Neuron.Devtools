import { useEffect } from "react";
import FixedPanel from "./components/templates/FixedPanel";
import FloatingIcon from "./components/atoms/FloatingIcon";
import StoreOptions from "./components/atoms/StoreOptions";
import { CustomStyles, useKeyList, useNeuronDataStores } from "./neurons";
import "./index.css";
interface Props {
  openPanelOnLoad?: boolean;
  customStyles?: CustomStyles;
  attachPanelBottom?: boolean;
  attachPanelTop?: boolean;
  attachPanelRight?: boolean;
  attachPanelLeft?: boolean;
  floatBtnTopRight?: boolean;
  floatBtnBottomRight?: boolean;
  floatBtnTopLeft?: boolean;
  floatBtnBottomLeft?: boolean;
}
export default function Panel({
  openPanelOnLoad,
  customStyles,
  attachPanelTop,
  attachPanelRight,
  attachPanelBottom,
  attachPanelLeft,
  floatBtnTopRight,
  floatBtnBottomRight,
  floatBtnTopLeft,
  floatBtnBottomLeft,
}: Props) {
  return (
    <>
      {process.env.NODE_ENV !== "production" ? (
        <>
          <StoreOptions
            openPanelOnLoad={openPanelOnLoad}
            customStyles={customStyles}
            attachPanelBottom={attachPanelBottom}
            attachPanelTop={attachPanelTop}
            attachPanelLeft={attachPanelLeft}
            attachPanelRight={attachPanelRight}
          />
          <div id={"neuron-devtools"}>
            <FloatingIcon
              topLeft={floatBtnTopLeft}
              topRight={floatBtnTopRight}
              bottomLeft={floatBtnBottomLeft}
              bottomRight={floatBtnBottomRight}
              style={customStyles?.floatingIcon}
            />
            <FixedPanel />
          </div>
        </>
      ) : null}
    </>
  );
}
