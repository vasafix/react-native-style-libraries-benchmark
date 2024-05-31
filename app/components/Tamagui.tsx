import React from "react";
import { Stack, TamaguiProvider } from "tamagui";

import config from "../configs/tamagui.config";
import { COUNT } from "../consts";
import { View } from "react-native";

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Stack borderColor="red" borderWidth={2} key={i} padding={5} />
        ))}
      </View>
    </TamaguiProvider>
  );
};

export default Tamagui;
