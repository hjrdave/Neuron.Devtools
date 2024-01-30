import { ReactNode, useEffect } from "react";
import useCustomStyles from "../../hooks/useCustomStyles";
import usePanel from "../../hooks/usePanel";
import { CustomStyles } from "../../Store";

interface Props {
  openPanelOnLoad?: boolean;
  customStyles?: CustomStyles;
  floatPanelBottom?: boolean;
  floatPanelTop?: boolean;
  floatPanelLeft?: boolean;
  floatPanelRight?: boolean;
  children?: ReactNode;
}
export default function PanelOptions({
  openPanelOnLoad,
  customStyles,
  floatPanelBottom,
  floatPanelTop,
  floatPanelLeft,
  floatPanelRight,
  children,
}: Props) {
  const { setCustomStyles } = useCustomStyles();
  const panel = usePanel();
  const defaultPanelState = () => (openPanelOnLoad ? panel.openPanel() : null);
  const defaultPanelPosition = () => {
    floatPanelBottom
      ? panel.attachBottom()
      : floatPanelTop
      ? panel.attachTop()
      : floatPanelLeft
      ? panel.attachLeft()
      : floatPanelRight
      ? panel.attachRight()
      : panel.attachTop();
  };
  useEffect(() => {
    defaultPanelState();
    defaultPanelPosition();
    customStyles ? setCustomStyles(customStyles) : null;
  }, []);
  return <>{children}</>;
}
