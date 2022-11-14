import {
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
  UseToastOptions,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "system",
};

export const defaultScroll = {
  "&::-webkit-scrollbar": { width: "4px", height: "4px" },
  "&::-webkit-scrollbar-track": { width: "4px" },
  "&::-webkit-scrollbar-thumb": {
    background: "#bbb",
    borderRadius: "10px",
  },
  scrollbarColor: "#bbb transparent",
  scrollbarWidth: "thin",
};

export function toastDefaultStyle(
  status: UseToastOptions["status"] = "info"
): UseToastOptions {
  return {
    status,
    containerStyle: {
      background:
        status === "error"
          ? "var(--chakra-colors-secondary-500)"
          : "var(--chakra-colors-primary-400)",
      boxShadow: "0 0 1em rgba(0,0,0, 0.2)",
      borderRadius: "7px",
      color: "white",
    },
    variant: "none",
    duration: 4000,
    position: "top-right",
    isClosable: true,
  };
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        color: (props: StyleFunctionProps) =>
          props.colorMode === "light" ? "primary.500" : "#a5a5a5",
        bg: (props: StyleFunctionProps) =>
          props.colorMode === "light" ? "#fff" : "#161616",
        overflow: "overlay",
        ...defaultScroll,
      },
    },
  },
  fonts: {
    body: "",
  },
  colors: {
    primary: {},
    secondary: {},
  },
  sizes: {},
  borders: {},
  components: {
    Container: {
      baseStyle: {
        maxWidth: { base: "100%", xl: "1636px" },
        px: { base: "25px" },
      },
      variants: {
        centered: {
          display: "flex",
          flexDir: "column",
          alignItems: "center",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "0.25rem",
        _focus: {},
      },
      variants: {
        custom: {
          p: "9px 20px",
          h: "auto",
          bg: "primary.400",
          borderRadius: "0.25rem",
          color: "#fbfcfd",
          fontWeight: "500",
          transition: "0.3s",
          border: "1px solid var(--chakra-colors-primary-300)",
          _hover: {
            bg: "var(--chakra-colors-primary-500)",
            border: "1px solid var(--chakra-colors-primary-300)",
          },
        },
        "custom-outline": {
          border: "1px solid #343434",
          bg: "#2e2e2e",
          _focus: { outline: "4px solid #343434" },
          _hover: { bg: "#343434" },
        },
        danger: {
          color: "#fff",
          bg: "var(--chakra-colors-secondary-700)",
          border: "1px solid var(--chakra-colors-secondary-400)",
          _hover: {
            bg: "var(--chakra-colors-secondary-400)!important",
            color: "#ffffff",
          },
          fontWeight: "bold",
        },
      },
    },
    a: {
      _hover: {
        texteDecoration: "none",
      },
    },
    Input: {
      variants: {
        "custom-outline": {
          border: "1px solid #343434",
          bg: "#2e2e2e",
          _focus: { outline: "4px solid #343434" },
        },
      },
    },
  },
});

export default theme;
