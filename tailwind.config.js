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
        text: "#0F172A",
        muted: "#64748B",
        border: "#E2E8F0",
        foreground: "#0F172A",
        primary: {
          DEFAULT: "#2563EB",
          light: "#DBEAFE",
          tint: "#EFF6FF",
        },
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
