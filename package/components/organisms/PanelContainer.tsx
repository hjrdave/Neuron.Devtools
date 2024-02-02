import LogoNeuron from "../../assets/logo-neuron.svg";
import Header from "../molecules/Header";
import { useNeuron } from "../../Store";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
}
export default function PanelContainer({ children, className }: Props) {
  const [storeList] = useNeuron((store) => store.devtools_storeList);
  const isConnection = storeList
    ? storeList?.length > 0
      ? true
      : false
    : false;

  return (
    <>
      <div className={"tw-relative"}>
        <div
          className={`tw-flex tw-flex-col tw-bg-clip-border tw-rounded-xl tw-text-gray-700 tw-shadow-md tw-bg-gray-900 tw-z-50 tw-fixed ${className}`}
        >
          <Header />
          {isConnection ? (
            <>
              <div className={"tw-p-0 tw-pb-3"}>{children}</div>
            </>
          ) : (
            <div className={"tw-pt-4 tw-pb-8 tw-border-t tw-border-gray-800"}>
              <div className={"tw-flex tw-justify-center"}>
                <img src={LogoNeuron} className={"tw-p-2"} width={100} />
              </div>
              <p className={"tw-text-[#57c09b] tw-text-sm tw-text-center"}>
                No stores are connected.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
