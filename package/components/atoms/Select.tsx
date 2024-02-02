import { ReactNode } from "react";
import {
  default as ReactSelect,
  OptionProps,
  CSSObjectWithLabel,
  components,
} from "react-select";
interface Props {
  placeholder?: string;
  className?: string;
  onChange?: (value?: string) => void;
  options?: string[];
  value?: string;
  optionIcon?: ReactNode;
  uniqueOptionIcon?: (value?: string) => ReactNode;
  isStacked?: boolean;
}
export default function Select({
  placeholder,
  className,
  options,
  onChange,
  value,
  optionIcon,
  isStacked,
  uniqueOptionIcon,
}: Props) {
  const _options = options?.map((option) => ({
    label: option,
    value: option,
  }));
  const { Option } = components;
  const IconOption = (props: any) => (
    <Option {...props}>
      {optionIcon ?? uniqueOptionIcon?.(props.data.value)}

      {props.data.label}
    </Option>
  );
  return (
    <>
      <ReactSelect
        className={className}
        placeholder={placeholder}
        options={_options}
        components={{ Option: IconOption }}
        onChange={(selected) => {
          onChange?.(selected?.value);
        }}
        value={value ? { label: value, value: value } : undefined}
        styles={
          {
            control: (baseStyles: CSSObjectWithLabel) => ({
              ...baseStyles,
              backgroundColor: "transparent",
              borderRadius: "0px",
              borderColor: "rgb(31,41,55)!important",
              height: "100%",
              cursor: "pointer",
              boxShadow: "none!important",
              borderTop: "1px solid rgb(31,41,55)!important",
              borderBottom: `${
                isStacked ? "0px" : "1px"
              } solid rgb(31,41,55)!important`,
              borderRight: "0px solid rgb(31,41,55)!important",
              borderLeft: "1px solid rgb(31,41,55)!important",
            }),
            singleValue: (baseStyles: any) => ({
              ...baseStyles,
              color: "rgba(255,255,255)",
              fontSize: ".85rem",
            }),
            indicatorSeparator: (baseStyles: any) => ({
              ...baseStyles,
              display: "none",
            }),
            input: (baseStyles: any) => ({
              ...baseStyles,
              color: "rgba(255,255,255)",
              fontSize: ".85rem",
            }),
            menu: (baseStyles: any) => ({
              ...baseStyles,
              backgroundColor: "rgb(31 41 55)",
              padding: ".5rem",
            }),
            option: (baseStyles: CSSObjectWithLabel, props: OptionProps) => ({
              ...baseStyles,
              cursor: "pointer",
              backgroundColor: props.isSelected
                ? "rgb(96 125 139)"
                : props.isFocused
                ? "inherited"
                : "inherited",
              borderRadius: ".5rem",
              color: props.isSelected
                ? "rgb(17 24 39)"
                : props.isFocused
                ? "white"
                : "white",
              fontSize: ".85rem",
            }),
            placeholder: (baseStyles: any) => ({
              ...baseStyles,
              color: "#374051",
              fontSize: ".85rem",
            }),
          } as any
        }
      />
    </>
  );
}
