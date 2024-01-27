import PanelContainer from "../organisms/PanelContainer";
import SelectorBar from "../molecules/SelectorBar";
import StateViewer from "../atoms/StateViewer";
import usePanel from "../../hooks/usePanel";
import { PanelPositions } from "../../Store";

export default function FixedPanel() {
  const { position, open } = usePanel();
  const positionStyles =
    position === PanelPositions.Top
      ? "top-2 left-20 right-20"
      : position === PanelPositions.Bottom
      ? "bottom-2 left-20 right-20"
      : position === PanelPositions.Left
      ? "left-2 top-2 w-1/5"
      : position === PanelPositions.Right
      ? "right-2 top-2 w-1/5"
      : "";
  return (
    <>
      {open ? (
        <PanelContainer className={positionStyles}>
          <SelectorBar />
          <StateViewer />
        </PanelContainer>
      ) : null}
    </>
  );
}
