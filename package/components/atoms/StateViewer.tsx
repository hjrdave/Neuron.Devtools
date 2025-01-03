import ReactJson from "react-json-view";

interface Props {
  selectedStore?: string;
  selectedType?: string;
  selectedKey?: string;
  storeData?: any;
}
export default function StateViewer({
  selectedType,
  storeData,
  selectedKey,
}: Props) {
  // const { customStyles } = useCustomStyles();
  return (
    <>
      <ReactJson
        name={selectedType}
        src={{ [selectedKey ?? ""]: storeData }}
        theme="monokai"
        enableClipboard
        displayDataTypes={false}
        displayObjectSize={false}
        style={{
          padding: "1rem",
          backgroundColor: "black",
          fontSize: ".75rem",
          //   ...customStyles.stateViewer,
        }}
      />
    </>
  );
}
