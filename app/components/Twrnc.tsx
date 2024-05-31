import { View } from "react-native";
import tw from "twrnc";
import { COUNT } from "../consts";

const Twrnc = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={tw`border-2 p-[5px] border-[#F00]`} />
      ))}
    </View>
  );
};

export default Twrnc;
