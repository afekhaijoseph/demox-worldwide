/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "#F8F7F1",
        dimBackground: "#E8E6E5",
        darkBackground: "#1E4E3E",
        primaryTwo: "#3CBA53",
        secondary: "#FFFFFF",
        accent: "#FCB000",
        secondAccent: "#2ABA39",
        accentSecond: "#EAE8E7",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
