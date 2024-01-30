import React, { Fragment } from "react";
import { Select as SelectMTW, Option } from "@material-tailwind/react";
interface Props {
  placeholder?: string;
  className?: string;
  onChange?: (value?: string) => void;
  options?: string[];
  value?: string;
}
export default function Select({
  placeholder,
  className,
  options,
  onChange,
  value,
}: Props) {
  const _value =
    (value as string)?.length > 0 ? (
      value
    ) : (
      <span className={"opacity-75"}>{placeholder}</span>
    );
  return (
    <>
      <SelectMTW
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        placeholder={placeholder}
        className={`rounded-none border-gray-800 text-white ${className}`}
        labelProps={{ className: "hidden" }}
        menuProps={{ className: "bg-gray-800 border-0" }}
        value={_value as string}
      >
        {options?.map((option, index) => (
          <Fragment key={index}>
            <Option
              onClick={() => onChange?.(option)}
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
