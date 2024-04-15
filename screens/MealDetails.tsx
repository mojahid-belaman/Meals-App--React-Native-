import { useLayoutEffect } from "react";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/ParamScreens";
import { MEALS } from "../data/dummy-data";
import AboutMeal from "../components/AboutMeal";
import SubTitle from "../components/mealDetails/SubTitle";
import Lists from "../components/mealDetails/Lists";
import IconButton from "../components/IconButton";
import { useAppDispatch, useAppSelector } from "../store/redux/store";
import {
  addToFavorites,
  removeFavorites,
} from "../store/redux/slices/favoriteSlice";

function MealDetailsScreen() {
  const favorite = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealDetails">>();
  const route = useRoute<RouteProp<RootStackParamList, "MealDetails">>();

  const mealId = route.params.mealId;
  const mealDisplay = MEALS.find((meal) => meal.id === mealId);
  const mealsIsFavorite = favorite?.ids.includes(mealId);

  function favoriteMealHandler() {
    if (mealsIsFavorite) {
      dispatch(removeFavorites(mealId));
    } else dispatch(addToFavorites(mealId));

    navigation.navigate("Drawer");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealsIsFavorite ? "star" : "staro"}
          color="white"
          onPress={favoriteMealHandler}
        />
      ),
    });
  }, [navigation, favoriteMealHandler, mealsIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: mealDisplay!.imageUrl }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>{mealDisplay!.title}</Text>
        <AboutMeal
          duration={mealDisplay!.duration}
          complexity={mealDisplay!.complexity}
          affordability={mealDisplay!.affordability}
          style={styles.detailText}
        />
        <View style={styles.outerContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <Lists data={mealDisplay?.ingredients} />
            <SubTitle>Steps</SubTitle>
            <Lists data={mealDisplay?.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    marginVertical: 15,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  detailText: {
    color: "#CCC",
  },
  listContainer: {
    width: "80%",
  },
  outerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});
