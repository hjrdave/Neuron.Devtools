import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import LogoNeuron from "../../../assets/logo-neuron.svg";
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
      <div className={"relative"}>
        <Card className={`bg-gray-900 z-50 fixed ${className}`}>
          <Header />
          {isConnection ? (
            <>
              <CardBody className={"p-0"}>{children}</CardBody>
              <CardFooter className={"p-2"}>
                <></>
              </CardFooter>
            </>
          ) : (
            <div className={"pt-4 pb-8 border-t border-gray-800"}>
              <div className={"flex justify-center"}>
                <img src={LogoNeuron} className={"p-2"} width={100} />
              </div>
              <p className={"text-[#57c09b] text-sm text-center"}>
                No stores are connected.
              </p>
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
