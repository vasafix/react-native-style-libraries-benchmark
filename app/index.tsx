import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StyleTypeEnum } from "./consts";
import TimedRender from "./components/TimedRender";
import ReactNative from "./components/ReactNative";
import StyledComponents from "./components/StyledComponents";
import Twrnc from "./components/Twrnc";
import FastStyles from "./components/FastStyles";
import Unistyles from "./components/Unistyles";
import Restyle from "./components/Restyle";
import Tamagui from "./components/Tamagui";
import StyledSystem from "./components/StyledSystem";
import NativeBase from "./components/NativeBase";
import Gluestack from "./components/Gluestack";
import NativeWind from "./components/NativeWind";
import EmotionNative from "./components/EmotionNative";
import Dripsy from "./components/Dripsy";
import Zephyr from "./components/Zephyr";

export default function App() {
  const [styleType, setStyleType] = useState<StyleTypeEnum | undefined>(undefined);

  const onStyleTypePress = (style: StyleTypeEnum) => () => {
    setStyleType(style);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case StyleTypeEnum.REACT_NATIVE:
        return <ReactNative />;
      case StyleTypeEnum.STYLED_COMPONENTS:
        return <StyledComponents />;
      case StyleTypeEnum.TWRNC:
        return <Twrnc />;
      case StyleTypeEnum.FAST_STYLES:
        return <FastStyles />;
      case StyleTypeEnum.UNISTYLES:
        return <Unistyles />;
      case StyleTypeEnum.TAMAGUI:
        return <Tamagui />;
      case StyleTypeEnum.RESTYLE:
        return <Restyle />;
      case StyleTypeEnum.STYLED_SYSTEM:
        return <StyledSystem />;
      case StyleTypeEnum.NATIVE_BASE:
        return <NativeBase />;
      case StyleTypeEnum.GLUESTACK:
        return <Gluestack />;
      case StyleTypeEnum.NATIVE_WIND:
        return <NativeWind />;
      case StyleTypeEnum.EMOTION_NATIVE:
        return <EmotionNative />;
      case StyleTypeEnum.DRIPSY:
        return <Dripsy />;
      case StyleTypeEnum.ZEPHYR:
        return <Zephyr />;
      default:
        return null;
    }
  };

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        {Object.values(StyleTypeEnum).map((style) => (
          <View key={style} style={styles.item}>
            <Button title={style} onPress={onStyleTypePress(style)} />
          </View>
        ))}
      </View>
      {!!styleType && (
        <>
          <Text>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
          <TimedRender key={styleType}>{renderStyleLibrary()}</TimedRender>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  items: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  item: {
    width: 160,
  },
});
