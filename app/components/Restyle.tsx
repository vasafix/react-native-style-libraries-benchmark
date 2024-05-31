import { COUNT } from "../consts";
import theme from "../configs/restyle-theme";
import {
  BoxProps,
  ThemeProvider,
  VariantProps,
  createBox,
  createRestyleComponent,
  createVariant,
} from "@shopify/restyle";
import { RestyleTheme } from "../configs/restyle-theme";
import { View } from "react-native";

const RestyleBox = createBox<RestyleTheme>();

const variant = createVariant<RestyleTheme, "boxVariants">({
  themeKey: "boxVariants",
});

export const Box = createRestyleComponent<
  VariantProps<RestyleTheme, "boxVariants"> & BoxProps<RestyleTheme>,
  RestyleTheme
>([variant], RestyleBox);

const Restyle = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Box key={i} />
        ))}
      </View>
    </ThemeProvider>
  );
};

export default Restyle;
