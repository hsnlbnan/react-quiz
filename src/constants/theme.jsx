import { variant } from "styled-system";

export const colors = {
  black: {
    900: "#141414",
    800: "#313233",
    700: "#4E5052",
    600: "#76777A",
    500: "#9D9FA3",
    400: "#C4C7CC",
    300: "#DCDEE0",
    200: "#E8E9EB",
    100: "#F2F3F5",
    50: "#F7F8FA",
    transparent: {
      80: "rgba(19, 20, 20, 0.80)",
      40: "rgba(19, 20, 20, 0.4)",
      20: "rgba(19, 20, 20, 0.2)",
      8: "rgba(19, 20, 20, 0.08)",
    },
  },
  green: {
    700: "#00A34C",
    500: "#00B856",
    300: "#6CE0A2",
    100: "#E6FAEF",
  },
  primary: {
    50: "#F3EEFF",
    100: "#E6DDFD",
    200: "#CDBAFB",
    300: "#B398F9",
    400: "#9A75F7",
    500: "#8153F5",
    600: "#613EB8",
    700: "#412A7B",
    800: "#20153D",
    900: "#0D0819",
  },
  red: {
    700: "#CC1836",
    500: "#F53152",
    300: "#FF99AA",
    100: "#FFF2F4",
  },
  secondary: {
    700: "#9BC200",
    500: "#AFDB00",
    400: "#D3E58A",
    100: "#F2FAD2",
  },
  white: {
    full: "#FFFFFF",
    transparent: {
      72: "rgba(255, 255, 255, 0.72)",
      48: "rgba(255, 255, 255, 0.48)",
    },
  },
  yellow: {
    700: "#E0B700",
    500: "#F5CC00",
    300: "#FFEB85",
    100: "#FFFBE5",
  },
};

const fontSizes = {
  H1: 52,
  H2: 40,
  H3: 32,
  H4: 24,
  H5: 20,
  H6: 9,
  LeadParagraph: 16,
  Paragraph: 14,
  Caption: 12,
  Tiny: 10,
};

const lineHeights = {
  H1: "56px",
  H2: "44px",
  H3: "36px",
  H4: "32px",
  H5: "24px",
  H6: "14px",
  LeadParagraph: "24px",
  Paragraph: "20px",
  Caption: "18px",
  Tiny: "14px",
};

// using default space values from styled-system
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const theme = {
  colors,
  fontSizes,
  lineHeights,
  space,
  buttons: {
    standard: {
      backgroundColor: "white",
      border: "1px solid",
      borderColor: colors.black[300],
      borderRadius: "100px",
      color: colors.white["full"],

      "&:hover": {
        borderColor: colors.primary[300],
        color: colors.primary[400],
      },

      "&:focus": {
        backgroundColor: "white",
        borderColor: colors.primary[400],
      },

      "&:active": {
        backgroundColor: colors.primary[500],
        borderColor: colors.primary[500],
        color: "white",
      },

      "&:disabled": {
        backgroundColor: colors.black[50],
        borderColor: colors.black[200],
        color: colors.black[300],
        cursor: "not-allowed",
      },
    },

    primary: {
      backgroundColor: colors.primary[500],
      border: "1px solid",
      borderRadius: "10px",
      color: "white",

      "&:hover": {
        backgroundColor: colors.primary[600],
        color: "white",
      },

      "&:disabled": {
        backgroundColor: colors.primary[50],
        color: colors.primary[200],
        borderColor: colors.primary[50],
        cursor: "not-allowed",
      },
    },

    outline: {
      backgroundColor: "white",
      border: "1px solid",
      borderRadius: "4px",
      color: colors.primary[500],

      "&:hover": {
        backgroundColor: colors.primary[50],
        color: colors.primary[500],
      },

      "&:disabled": {
        backgroundColor: colors.white["full"],
        color: colors.primary[50],
        borderColor: colors.primary[50],
        cursor: "not-allowed",
      },

      "&:focus": {
        backgroundColor: colors.white["full"],
        borderColor: colors.primary[500],
        color: colors.primary[500],
      },
    },
  },
  buttonSizes: {
    large: {
      fontSize: toPx(fontSizes.LeadParagraph),
      paddingBottom: toPx(space[3]),
      paddingLeft: toPx(space[5]),
      paddingRight: toPx(space[5]),
      paddingTop: toPx(space[3]),
    },

    medium: {
      fontSize: toPx(fontSizes.Paragraph),
      paddingBottom: toPx(space[2]),
      paddingLeft: toPx(space[3]),
      paddingRight: toPx(space[3]),
      paddingTop: toPx(space[2]),
    },

    small: {
      fontSize: toPx(fontSizes.Caption),
      paddingBottom: toPx(space[1]),
      paddingLeft: toPx(space[2]),
      paddingRight: toPx(space[2]),
      paddingTop: toPx(space[1]),
    },
  },

  textStyles: {
    H1: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H1),
      fontWeight: 700,
      lineHeight: lineHeights.H1,
      marginBottom: toPx(space[4]),
    },

    H2: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H2),
      fontWeight: 700,
      lineHeight: lineHeights.H2,
      marginBottom: toPx(space[4]),
    },

    H3: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H3),
      fontWeight: 700,
      lineHeight: lineHeights.H3,
      marginBottom: toPx(space[4]),
    },

    H4: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H4),
      fontWeight: 700,
      lineHeight: lineHeights.H4,
      marginBottom: toPx(space[4]),
    },

    H5: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H5),
      fontWeight: 700,
      lineHeight: lineHeights.H5,
      marginBottom: toPx(space[4]),
    },

    H6: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.H6),
      fontWeight: 700,
      lineHeight: lineHeights.H6,
      marginBottom: toPx(space[4]),
    },

    LeadParagraph: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.LeadParagraph),
      fontWeight: 400,
      lineHeight: lineHeights.LeadParagraph,
      marginBottom: toPx(space[4]),
    },

    Paragraph: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.Paragraph),
      fontWeight: 400,
      lineHeight: lineHeights.Paragraph,
      marginBottom: toPx(space[4]),
    },

    Caption: {
      color: colors.black[900],
      fontSize: toPx(fontSizes.Caption),
      fontWeight: 400,
      lineHeight: lineHeights.Caption,
      marginBottom: toPx(space[4]),
    },
  },
};

export const buttonStyle = variant({
  key: "buttons",
  prop: "buttonStyle",
});

export const buttonSize = variant({
  key: "buttonSizes",
  prop: "buttonSize",
});

export const textStyle = variant({
  key: "textStyles",
  prop: "textStyle",
});

export default theme;

function toPx(value) {
  return `${value}px`;
}
