import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import AboutMeal from "../AboutMeal";
import { IMealItem } from "../../types/MealItem";
import { RootStackParamList } from "../../types/ParamScreens";

function MealItem(props: IMealItem) {
  const { id, title, imageUrl, duration, complexity, affordability } = props;
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealDetails">>();

  function selectMealHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressButton : null)}
        onPress={selectMealHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <AboutMeal
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    elevation: 4,
  },
  pressButton: {
    opacity: 0.8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
