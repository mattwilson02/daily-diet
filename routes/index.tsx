import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import AddNewMeal from "../screens/AddNewMeal";
import MealConfirmation from "../screens/MealConfirmation";
import MealDetails from "../screens/MealDetails";

export type RootStackParamList = {
  Dashboard: undefined;
  AddNewMeal: undefined;
  MealDetails: undefined;
  MealConfirmation: { id: string };
};

export const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddNewMeal"
          component={AddNewMeal}
          options={{ headerTitle: "New Meal" }}
        />
        <Stack.Screen
          name="MealConfirmation"
          component={MealConfirmation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
