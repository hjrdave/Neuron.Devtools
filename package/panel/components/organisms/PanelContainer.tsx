import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import Header from "../molecules/Header";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  className?: string;
}
export default function PanelContainer({ children, className }: Props) {
  return (
    <>
      <div className={"relative"}>
        <Card className={`bg-gray-900 z-50 fixed ${className}`}>
          <Header />
          <CardBody className={"p-0"}>{children}</CardBody>
          <CardFooter className={"p-2"}>
            <></>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
