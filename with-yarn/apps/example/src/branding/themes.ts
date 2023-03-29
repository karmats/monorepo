import type { ThemeDefinition } from "vuetify";
import { colors } from "@karmats/fundamentals/colors";

const smokeBlueColors = {
  appva: {
    blue: {
      lighten5: "#f6f7fa",
      lighten4: "#eff1f6",
      lighten3: "#e3e7ef",
      lighten2: "#d0d8e5",
      lighten1: "#808fa7",
      base: "#637491",
      darken1: "#404e68",
      darken2: "#222f47",
      darken3: "#1b2537",
      darken4: "#101826",
    },
    danger: {
      lighten5: "#fcedf0",
      lighten4: "#fcdde2",
      lighten3: "#f5a6a6",
      lighten2: "#e86969",
      lighten1: "#db4a4a",
      base: "#c83030",
      darken1: "#aa1717",
      darken2: "#750d0d",
      darken3: "#4c0101",
      darken4: "#2e0000",
    },
    info: {
      lighten5: "#EAF4FF",
      lighten4: "#D1EAFF",
      lighten3: "#A7CFF0",
      lighten2: "#6BACE0",
      lighten1: "#358CD2",
      base: "#216FAD",
      darken1: "#216092",
      darken2: "#144B76",
      darken3: "#0C3657",
      darken4: "#06203B",
    },
    success: {
      lighten5: "#E6F4E7",
      lighten4: "#C4E4C4",
      lighten3: "#9ED39E",
      lighten2: "#62B664",
      lighten1: "#2C9B33",
      base: "#07800A",
      darken1: "#0B6E17",
      darken2: "#005A07",
      darken3: "#024307",
      darken4: "#002503",
    },
    warning: {
      base: "#FB8C00",
    },
  },
};
export const appvaSmokeBlueLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: smokeBlueColors.appva.blue.lighten4,
    primary: smokeBlueColors.appva.blue.darken1,
    "primary-lighten-1": smokeBlueColors.appva.blue.base,
    "primary-lighten-2": smokeBlueColors.appva.blue.lighten1,
    "primary-lighten-3": smokeBlueColors.appva.blue.lighten2,
    "primary-lighten-4": smokeBlueColors.appva.blue.lighten3,
    "primary-lighten-5": smokeBlueColors.appva.blue.lighten4,
    "primary-darken-1": smokeBlueColors.appva.blue.darken2,
    "primary-darken-2": smokeBlueColors.appva.blue.darken3,
    "primary-darken-3": smokeBlueColors.appva.blue.darken4,
    secondary: smokeBlueColors.appva.blue.base,
    error: smokeBlueColors.appva.danger.base,
    info: smokeBlueColors.appva.info.base,
    success: smokeBlueColors.appva.success.base,
    warning: smokeBlueColors.appva.warning.base,
    "on-background": smokeBlueColors.appva.blue.darken4,
    "on-surface": smokeBlueColors.appva.blue.darken4,
  },
  variables: {
    "border-color": smokeBlueColors.appva.blue.darken1,
    "border-opacity": 0.18,
    "high-emphasis-opacity": 1,
    "table-row-height": "48px",
  },
};

export const appvaSmokeBlueDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: smokeBlueColors.appva.blue.darken4,
    surface: smokeBlueColors.appva.blue.darken3,
    primary: smokeBlueColors.appva.blue.lighten1,
    secondary: smokeBlueColors.appva.blue.base,
    error: smokeBlueColors.appva.danger.lighten1,
    info: smokeBlueColors.appva.info.lighten2,
    success: smokeBlueColors.appva.success.lighten2,
    warning: smokeBlueColors.appva.warning.base,
    "on-primary": "#000000",
  },
};

export const appvaGreenLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.gray[10].value,
    primary: colors.primary[60].value,
    "primary-lighten-1": colors.primary[70].value,
    "primary-lighten-2": colors.primary[80].value,
    "primary-lighten-3": colors.primary[90].value,
    "primary-lighten-4": colors.primary[100].value,
    "primary-darken-1": colors.primary[50].value,
    "primary-darken-2": colors.primary[40].value,
    "primary-darken-3": colors.primary[30].value,
    secondary: colors.primary[60].value,
    error: colors.danger[60].value,
    info: colors.information[60].value,
    success: colors.primary[60].value,
    warning: colors.danger[30].value,
    "on-background": colors.primary[30].value,
    "on-surface": colors.primary[30].value,
  },
  variables: {
    "border-color": colors.primary[50].value,
    "border-opacity": 0.18,
    "high-emphasis-opacity": 1,
    "table-row-height": "48px",
  },
};

export const appvaGreenDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: colors.night[10].value,
    surface: colors.primary[40].value,
    primary: colors.primary[70].value,
    secondary: colors.primary[60].value,
    error: colors.danger[50].value,
    info: colors.information[40].value,
    success: colors.primary[40].value,
    warning: colors.danger[30].value,
    "on-primary": "#000000",
  },
};
