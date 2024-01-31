import Crumb, { CrumbTypes } from "../atoms/Crumb";

interface Props {
  storeName?: string;
  stateKey?: string;
  stateType?: string;
}

export default function BreadCrumbs({ storeName, stateKey, stateType }: Props) {
  return (
    <>
      <div className={"p-[.70rem]"}>
        {storeName ? (
          <p className={"text-xs mb-0"}>
            <Crumb type={CrumbTypes.Store} label={storeName} />
            {stateKey ? <Crumb label={stateKey} /> : null}
            {stateType === "state" ? (
              <Crumb type={CrumbTypes.State} label={"state"} hideArrow />
            ) : null}
            {stateType === "payload" ? (
              <Crumb type={CrumbTypes.Payload} label={"payload"} hideArrow />
            ) : null}
            {stateType === "features" ? (
              <Crumb type={CrumbTypes.Features} label={"features"} hideArrow />
            ) : null}
            {stateType === "actions" ? (
              <Crumb type={CrumbTypes.Actions} label={"actions"} hideArrow />
            ) : null}
          </p>
        ) : (
          <p className={"text-xs mb-0"}>No Store Selected.</p>
        )}
      </div>
    </>
  );
}
