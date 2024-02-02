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
      <span className={"tw-text-white tw-pe-3"}>
        <i
          className={`fa-solid tw-pe-2 tw-text-[#57c09b] ${
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
          <i className="fa-solid fa-chevron-right tw-ps-2 tw-text-gray-500"></i>
        ) : null}
      </span>
    </>
  );
}
