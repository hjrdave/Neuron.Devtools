import { Fragment } from "react";
import { Select as SelectMTW, Option } from "@material-tailwind/react";
interface Props {
  placeholder?: string;
  className?: string;
  onChange?: (value?: string) => void;
  options?: string[];
  selected?: string;
}
export default function Select({
  placeholder,
  className,
  options,
  onChange,
}: Props) {
  return (
    <>
      <SelectMTW
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        placeholder={placeholder}
        onChange={onChange}
        className={`rounded-none border-gray-800 border-t-0 border-b-0 border-r-0 ${className}`}
        labelProps={{ className: "hidden" }}
        menuProps={{ className: "bg-gray-800 border-0" }}
      >
        {options?.map((option, index) => (
          <Fragment key={index}>
            <Option
              className={
                "text-white bg-transparent hover:bg-transparent hover:text-white list-none"
              }
              index={index + 1}
              value={option}
            >
              {option}
            </Option>
          </Fragment>
        ))}
      </SelectMTW>
    </>
  );
}
