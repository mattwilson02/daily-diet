import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import AddNewMeal from "../screens/AddNewMeal";
import MealConfirmation from "../screens/MealConfirmation";

export type RootStackParamList = {
  Dashboard: undefined;
  AddNewMeal: undefined;
  MealConfirmation: { id: string };
};

export const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="AddNewMeal"
          component={AddNewMeal}
          options={{ headerTitle: "New Meal" }}
        />
        <Stack.Screen name="MealConfirmation" component={MealConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
