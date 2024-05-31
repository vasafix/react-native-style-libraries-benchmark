import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { COUNT } from "../consts";
import { UnistylesRegistry } from "react-native-unistyles";
import theme from "../configs/unistyles-theme";

UnistylesRegistry.addThemes({
  default: theme,
}).addConfig({
  initialTheme: "default",
});

const Unistyles = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={styles.box} />
      ))}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  box: {
    borderColor: theme.colors.primary,
    padding: 5,
    borderWidth: 2,
  },
}));

export default Unistyles;
