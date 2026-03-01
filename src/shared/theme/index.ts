import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      light: string;
      main: string;
      dark: string;
      muted: string;
      tag: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      light?: string;
      main?: string;
      dark?: string;
      muted?: string;
      tag?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1ea7d7",
    },

    background: {
      default: "#f4f7fb",
      paper: "#ffffff",
    },

    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },

    divider: "#e5e7eb",

    brand: {
      light: "#eaf4fb",
      main: "#1ea7d7",
      dark: "#0f6f91",
      muted: "#b9e3f7",
      tag: "#133e63",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",

    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },

    subtitle1: { fontWeight: 500 },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 16,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #e5e7eb",
        },
      },
    },
  },
});