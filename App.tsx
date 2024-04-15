import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/Categories";
import MealsViewScreen from "./screens/MealsView";
import { RootStackParamList } from "./types/ParamScreens";
import MealDetails from "./screens/MealDetails";
import FavoritesScreen from "./screens/Favorites";
import { drawerHeader, stackHeader } from "./utils/screenOption/config";
import { store, useAppSelector } from "./store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const favorite = useAppSelector((state) => state.favorite);
  const favoriteIsFill = favorite?.ids.length === 0;

  return (
    <Drawer.Navigator
      screenOptions={{
        ...drawerHeader,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name={favoriteIsFill ? "favorite-border" : "favorite"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteCtxProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              ...stackHeader,
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsView" component={MealsViewScreen} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteCtxProvider> */}
    </>
  );
}
