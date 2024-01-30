import FixedPanel from "./components/templates/FixedPanel";
import FloatingIcon from "./components/atoms/FloatingIcon";
import Store, { CustomStyles } from "./Store";
import StoreOptions from "./components/atoms/StoreOptions";
interface Props {
  openPanelOnLoad?: boolean;
  customStyles?: CustomStyles;
  floatPanelBottom?: boolean;
  floatPanelTop?: boolean;
  floatPanelRight?: boolean;
  floatPanelLeft?: boolean;
  floatBtnTopRight?: boolean;
  floatBtnBottomRight?: boolean;
  floatBtnTopLeft?: boolean;
  floatBtnBottomLeft?: boolean;
}
export default function Panel({
  openPanelOnLoad,
  customStyles,
  floatPanelTop,
  floatPanelRight,
  floatPanelBottom,
  floatPanelLeft,
  floatBtnTopRight,
  floatBtnBottomRight,
  floatBtnTopLeft,
  floatBtnBottomLeft,
}: Props) {
  return (
    <>
      <Store />
      <StoreOptions
        openPanelOnLoad={openPanelOnLoad}
        customStyles={customStyles}
        floatPanelBottom={floatPanelBottom}
        floatPanelTop={floatPanelTop}
        floatPanelLeft={floatPanelLeft}
        floatPanelRight={floatPanelRight}
      />
      <FloatingIcon
        topLeft={floatBtnTopLeft}
        topRight={floatBtnTopRight}
        bottomLeft={floatBtnBottomLeft}
        bottomRight={floatBtnBottomRight}
      />
      <FixedPanel />
    </>
  );
}
