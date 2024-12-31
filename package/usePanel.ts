import { PANEL_POSITIONS, usePanelPosition, useOpenPanel } from "./neurons";

export const usePanel = () => {
  const [position, panelActions] = usePanelPosition();
  const [open, { set: setOpen }] = useOpenPanel();
  const attachRight = panelActions.changeToRight;
  const attachLeft = panelActions.changeToLeft;
  const attachTop = panelActions.changeToTop;
  const attachBottom = panelActions.changeToBottom;
  const closePanel = () => setOpen(false);
  const openPanel = () => setOpen(true);
  const isStacked =
    position === PANEL_POSITIONS.RIGHT || position === PANEL_POSITIONS.LEFT;

  return {
    position,
    attachRight,
    attachLeft,
    attachBottom,
    attachTop,
    closePanel,
    openPanel,
    open,
    isStacked,
  };
};
