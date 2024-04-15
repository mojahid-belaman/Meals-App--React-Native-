import { Pressable, StyleSheet, Text, View } from "react-native";

interface ICategoryGrid {
  title: string;
  color: string;
  onPress: () => void;
}

function CategoryGrid(props: ICategoryGrid) {
  const { title, color, onPress } = props;
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPress : null,
        ]}
        android_ripple={{ color: "#ccc", borderless: true }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
  button: {
    flex: 1,
  },
  buttonPress: {
    opacity: 0.7,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
