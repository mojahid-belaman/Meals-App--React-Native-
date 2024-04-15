import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface IIconButton {
  icon: any;
  color: string;
  onPress: () => void;
}

function IconButton(props: IIconButton) {
  const { icon, color, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && style.pressed}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
