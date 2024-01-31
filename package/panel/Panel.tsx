import FixedPanel from "./components/templates/FixedPanel";
import FloatingIcon from "./components/atoms/FloatingIcon";
import Store, { CustomStyles } from "./Store";
import StoreOptions from "./components/atoms/StoreOptions";
import "../index.css";
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
          <Store />
          <StoreOptions
            openPanelOnLoad={openPanelOnLoad}
            customStyles={customStyles}
            attachPanelBottom={attachPanelBottom}
            attachPanelTop={attachPanelTop}
            attachPanelLeft={attachPanelLeft}
            attachPanelRight={attachPanelRight}
          />
          <FloatingIcon
            topLeft={floatBtnTopLeft}
            topRight={floatBtnTopRight}
            bottomLeft={floatBtnBottomLeft}
            bottomRight={floatBtnBottomRight}
            style={customStyles?.floatingIcon}
          />
          <FixedPanel />
        </>
      ) : null}
    </>
  );
}
