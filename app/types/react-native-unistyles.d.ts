import theme from "../configs/unistyles-theme";

type AppThemes = {
  default: typeof theme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
