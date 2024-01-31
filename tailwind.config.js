/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./package/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: false,
  },
  theme: {
    color: {
      neuron: "#57c09b",
    },
    extend: {},
  },
  plugins: [],
});
