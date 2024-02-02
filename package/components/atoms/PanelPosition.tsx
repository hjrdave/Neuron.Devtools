import PositionRightIcon from "../../assets/position-right.svg";
import PositionLeftIcon from "../../assets/position-left.svg";
import PositionTopIcon from "../../assets/position-top.svg";
import PositionBottomIcon from "../../assets/position-bottom.svg";
import { PanelPositions } from "../../Store";
import usePanel from "../../hooks/usePanel";

export default function PanelPosition() {
  const panel = usePanel();
  return (
    <>
      <div className={"tw-flex"}>
        <img
          src={PositionLeftIcon}
          width={"25"}
          className={`tw-me-1 tw-cursor-pointer ${
            panel.position === PanelPositions.Left
              ? "tw-opacity-100"
              : "tw-opacity-50 hover:tw-opacity-75"
          }`}
          onClick={panel.attachLeft}
        />
        <img
          src={PositionTopIcon}
          width={"25"}
          className={`tw-me-1 tw-cursor-pointer ${
            panel.position === PanelPositions.Top
              ? "tw-opacity-100"
              : "tw-opacity-50 hover:tw-opacity-75"
          }`}
          onClick={panel.attachTop}
        />
        <img
          src={PositionRightIcon}
          width={"25"}
          className={`tw-me-1 tw-cursor-pointer ${
            panel.position === PanelPositions.Right
              ? "tw-opacity-100"
              : "tw-opacity-50 hover:tw-opacity-75"
          }`}
          onClick={panel.attachRight}
        />
        <img
          src={PositionBottomIcon}
          width={"25"}
          className={`tw-me-1 tw-cursor-pointer ${
            panel.position === PanelPositions.Bottom
              ? "tw-opacity-100"
              : "tw-opacity-50 hover:tw-opacity-75"
          }`}
          onClick={panel.attachBottom}
        />
      </div>
    </>
  );
}
