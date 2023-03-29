import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import type { Blueprint } from "vuetify/lib/framework.mjs";
import {
  appvaGreenDark,
  appvaGreenLight,
  appvaSmokeBlueDark,
  appvaSmokeBlueLight,
} from "./themes";

export const appva: Blueprint = {
  defaults: {
    VAppBar: {
      VBtn: {
        color: "on-primary",
      },
    },
    VBtn: {
      rounded: "pill",
      variant: "flat",
      color: "primary",
      ripple: true,
    },
    VBtnToggle: {
      VBtn: {
        rounded: "0",
      },
    },
    VCheckboxBtn: {
      color: "primary",
    },
    VSheet: {
      elevation: 0,
      rounded: "lg",
      border: true,
    },
    VSnackbar: {
      timeout: 7000,
      color: "primary-darken-1",
      VBtn: {
        color: "on-primary",
      },
    },
    VTable: {
      VTooltip: {
        activator: "parent",
        location: "bottom",
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "green-light",
    themes: {
      ["smoke-light"]: appvaSmokeBlueLight,
      ["smoke-dark"]: appvaSmokeBlueDark,
      ["green-light"]: appvaGreenLight,
      ["green-dark"]: appvaGreenDark,
    },
  },
};
