/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        text: "#0F172A",
        muted: "#64748B",
        button: "#1E40AF",
      },
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        poppinsSemibold: ["Poppins_600SemiBold"],
        inter: ["Inter_400Regular"],
      },
    },
  },
  plugins: [],
};
