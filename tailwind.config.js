/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(255, 255, 255, 0.04)",
          "400": "rgba(255, 255, 255, 0.12)",
        },
        blueviolet: "#8c52ff",
        mediumslateblue: {
          "100": "#a66bff",
          "200": "#8c5ced",
        },
        "solid-white": "#fff",
        lavender: "#dcd5eb",
        thistle: "#decffc",
        plum: "#c8b0f6",
        mediumpurple: "#b48ffc",
        slateblue: "#855ed0",
      },
      spacing: {},
      fontFamily: {
        "league-spartan": "'League Spartan'",
        "lexend-deca": "'Lexend Deca'",
        'roboto': ['Roboto', 'sans-serif'] // Adding Roboto with a fallback to sans-serif
      },
      borderRadius: {
        "101xl": "120px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1750: {
        raw: "screen and (max-width: 1750px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
