/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#fff",
        darkslategray: {
          "100": "#125a70",
          "200": "#055b74",
          "300": "#353e47",
          "400": "#383737",
        },
        gray: {
          "100": "#878c91",
          "200": "#7e7e7e",
          "300": "#121c27",
          "400": "#0a1119",
          "500": "#090f16",
          "600": "#010205",
          "700": "rgba(0, 8, 22, 0.62)",
          "800": "rgba(0, 0, 0, 0.5)",
          "900": "rgba(255, 255, 255, 0.3)",
          "1000": "rgba(255, 255, 255, 0.15)",
          "1100": "rgba(255, 255, 255, 0.7)",
        },
        mediumblue: {
          "100": "#5927e5",
          "200": "#4e23e1",
          "300": "rgba(89, 39, 229, 0.4)",
        },
        black: "#000",
        cadetblue: {
          "100": "#2f8eaa",
          "200": "rgba(47, 142, 170, 0.5)",
        },
        aliceblue: {
          "100": "#def4fe",
          "200": "rgba(222, 244, 254, 0.7)",
          "300": "rgba(222, 244, 254, 0.8)",
        },
        dimgray: {
          "100": "#5d5d5d",
          "200": "#5c5d5f",
          "300": "#4b535d",
        },
        blueviolet: "#513cd9",
        whitesmoke: "#f0f0f0",
        lightslategray: {
          "100": "#828e9c",
          "200": "#7c859e",
        },
        silver: "#c4c4c4",
        lightgray: {
          "100": "#d7d7d7",
          "200": "#d3d5d6",
        },
        midnightblue: "#310138",
        aqua: "rgba(54, 249, 249, 0.4)",
        crimson: "rgba(226, 45, 98, 0.45)",
        "branding-hostinger-periwinkle": "#d5dfff",
        "branding-hostinger-storm-gray": "#727586",
        "branding-hostinger-meteorite": "#2f1c6a",
        "neutral-dark-grey": "#737b90",
        purple: "#60016e",
        steelblue: "rgba(39, 130, 156, 0.58)",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "public-sans": "'Public Sans'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        inter: "Inter",
        "fonts-hostingercom-dm-sans-regular-14": "'DM Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        xl: "20px",
        "981xl": "1000px",
        "20xl": "39px",
        "8xs": "5px",
        "3xs": "10px",
        "37xl": "56px",
        "31xl": "50px",
        "2xl": "21px",
        "21xl": "40px",
        "71xl": "90px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      "65xl": "84px",
      "23xl": "42px",
      "lgi-4": "19.4px",
      "4xl": "23px",
      "lg-3": "18.3px",
      mini: "15px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "smi-8": "12.8px",
      "smi-6": "12.6px",
      "smi-7": "12.7px",
      xs: "12px",
      "smi-4": "12.4px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      sm: "14px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
