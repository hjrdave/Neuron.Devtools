import { useEffect } from "react";
import useCustomStyles from "../../hooks/useCustomStyles";
import usePanel from "../../hooks/usePanel";
import { CustomStyles } from "../../Store";

interface Props {
  openPanelOnLoad?: boolean;
  customStyles?: CustomStyles;
  attachPanelBottom?: boolean;
  attachPanelTop?: boolean;
  attachPanelLeft?: boolean;
  attachPanelRight?: boolean;
}
export default function PanelOptions({
  openPanelOnLoad,
  customStyles,
  attachPanelBottom,
  attachPanelTop,
  attachPanelLeft,
  attachPanelRight,
}: Props) {
  const { setCustomStyles } = useCustomStyles();
  const panel = usePanel();
  const defaultPanelState = () => (openPanelOnLoad ? panel.openPanel() : null);
  const defaultPanelPosition = () => {
    attachPanelBottom
      ? panel.attachBottom()
      : attachPanelTop
      ? panel.attachTop()
      : attachPanelLeft
      ? panel.attachLeft()
      : attachPanelRight
      ? panel.attachRight()
      : panel.attachTop();
  };
  useEffect(() => {
    defaultPanelState();
    defaultPanelPosition();
    customStyles ? setCustomStyles(customStyles) : null;
  }, []);
  return null;
}
