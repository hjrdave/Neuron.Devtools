import { Select as SelectMTW, Option } from "@material-tailwind/react";
interface Props {
  placeholder?: string;
  className?: string;
}
export default function Select({ placeholder, className }: Props) {
  return (
    <>
      <SelectMTW
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        className={`border-0 text-white ${className}`}
        variant="static"
        menuProps={{ className: "bg-gray-800 border-0" }}
        labelProps={{ className: "hidden" }}
        placeholder={placeholder}
      >
        <Option className={"text-white"}>Material Tailwind HTML</Option>
        <Option className={"text-white"}>Material Tailwind React</Option>
        <Option className={"text-white"}>Material Tailwind Vue</Option>
        <Option className={"text-white"}>Material Tailwind Angular</Option>
        <Option className={"text-white"}>Material Tailwind Svelte</Option>
      </SelectMTW>
    </>
  );
}
