import PositionRightIcon from "../../../assets/position-right.svg";
import PositionLeftIcon from "../../../assets/position-left.svg";
import PositionTopIcon from "../../../assets/position-top.svg";
import PositionBottomIcon from "../../../assets/position-bottom.svg";
import { PanelPositions } from "../../Store";
import usePanel from "../../hooks/usePanel";

export default function PanelPosition() {
  const panel = usePanel();
  return (
    <>
      <div className={"flex"}>
        <img
          src={PositionLeftIcon}
          width={"25"}
          className={`me-1 cursor-pointer ${
            panel.position === PanelPositions.Left
              ? "opacity-100"
              : "opacity-50 hover:opacity-75"
          }`}
          onClick={panel.attachLeft}
        />
        <img
          src={PositionTopIcon}
          width={"25"}
          className={`me-1 cursor-pointer ${
            panel.position === PanelPositions.Top
              ? "opacity-100"
              : "opacity-50 hover:opacity-75"
          }`}
          onClick={panel.attachTop}
        />
        <img
          src={PositionRightIcon}
          width={"25"}
          className={`me-1 cursor-pointer ${
            panel.position === PanelPositions.Right
              ? "opacity-100"
              : "opacity-50 hover:opacity-75"
          }`}
          onClick={panel.attachRight}
        />
        <img
          src={PositionBottomIcon}
          width={"25"}
          className={`me-1 cursor-pointer ${
            panel.position === PanelPositions.Bottom
              ? "opacity-100"
              : "opacity-50 hover:opacity-75"
          }`}
          onClick={panel.attachBottom}
        />
      </div>
    </>
  );
}
