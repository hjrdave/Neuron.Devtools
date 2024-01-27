export enum CrumbTypes {
  Store = "store",
  State = "state",
  Payload = "payload",
  Features = "features",
  Actions = "actions",
}

interface Props {
  type?: CrumbTypes;
  label: string;
  hideArrow?: boolean;
}
export default function Crumb({ label, type, hideArrow }: Props) {
  return (
    <>
      <span className={"text-white pe-3"}>
        <i
          className={`fa-solid pe-1 ${
            type === CrumbTypes.Store
              ? "fa-cubes"
              : type === CrumbTypes.State
              ? "fa-database"
              : type === CrumbTypes.Payload
              ? "fa-box-open"
              : type === CrumbTypes.Features
              ? "fa-gears"
              : CrumbTypes.Actions === type
              ? "fa-bolt"
              : "fa-cube"
          }`}
        ></i>
        {label}
        {!hideArrow ? (
          <i className={`fa-solid fa-arrow-right-long ps-2`}></i>
        ) : null}
      </span>
    </>
  );
}
