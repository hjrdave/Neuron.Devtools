import FixedPanel from "./components/templates/FixedPanel";
import FloatingIcon from "./components/atoms/FloatingIcon";
import Store, { CustomStyles } from "./Store";
import StoreOptions from "./components/atoms/StoreOptions";
interface Props {
  openPanel?: boolean;
  customStyles?: CustomStyles;
  bottomPanel?: boolean;
  topPanel?: boolean;
  leftPanel?: boolean;
  rightPanel?: boolean;
}
export default function Panel({
  openPanel,
  customStyles,
  bottomPanel,
  topPanel,
  leftPanel,
  rightPanel,
}: Props) {
  return (
    <>
      <Store />
      <StoreOptions
        openPanel={openPanel}
        customStyles={customStyles}
        bottomPanel={bottomPanel}
        topPanel={topPanel}
        leftPanel={leftPanel}
        rightPanel={rightPanel}
      />
      <FixedPanel />
      <FloatingIcon />
    </>
  );
}
