/** @type {import('tailwindcss').Config} */

export default {
  content: ["./package/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  important: "#neuron-devtools",
  prefix: "tw-",
  corePlugins: { preflight: false },
  theme: {
    color: {
      neuron: "#57c09b",
    },
    extend: {},
  },
  plugins: [],
};
