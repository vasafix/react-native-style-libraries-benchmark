import { COUNT } from "../consts";
import { View } from "react-native";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const NativeBase = () => {
  return (
    <GluestackUIProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Box key={i} borderWidth={2} p={5} borderColor="#F00" />
        ))}
      </View>
    </GluestackUIProvider>
  );
};

export default NativeBase;
