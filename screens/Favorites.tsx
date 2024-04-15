import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/mealList/MealList";
import { useAppSelector } from "../store/redux/store";

function FavoritesScreen() {
  const favorite = useAppSelector((state) => state.favorite);
  let content = (
    <View style={styles.container}>
      <Text style={styles.notFound}>You have No favorites yet!</Text>
    </View>
  );

  if (favorite?.ids.length === 0) {
    return content;
  }
  const favoriteMeals = MEALS.filter((meal) => favorite?.ids.includes(meal.id));
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  notFound: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
});
