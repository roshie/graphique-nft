export const colors = {
  redviolet: "#DA18A3",
  white: "#FFFFFF",
  dark: "#24252D",
  grey1: "#E3E1E3",
  grey2: "#888888",
  grey3: "#4F4F4F",
  black1: "#2D2E36",
  black2: "#1B1A21",
  black3: "#2A2D3A",
  black4: "#24252D",
  gradient: "linear-gradient(#EB1484, #C81CC5)",
};

export const props = {
  gradient: colors.gradient,
  primary: colors.redviolet,
};

export const lightTheme = {
  themeName: "light",
  body: colors.white,
  text: colors.black1,
  navLink: colors.grey2,
  navLinkActive: colors.black1,
  border: colors.grey1,
  card: colors.white,
  ...props,
};

export const darkTheme = {
  themeName: "dark",
  body: colors.dark,
  text: colors.white,
  navLink: colors.grey3,
  navLinkActive: colors.white,
  border: colors.black1,
  card: colors.black3,
  ...props,
};
