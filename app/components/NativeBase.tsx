import { NativeBaseProvider, Box } from "native-base";
import { COUNT } from "../consts";
import { View } from "react-native";

const NativeBase = () => {
  return (
    <NativeBaseProvider>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Box key={i} borderWidth="2px" p="5px" borderColor="#F00" />
        ))}
      </View>
    </NativeBaseProvider>
  );
};

export default NativeBase;
