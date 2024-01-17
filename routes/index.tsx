import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import AddNewMeal from "../screens/AddNewMeal";

export type RootStackParamList = {
  Dashboard: undefined;
  AddNewMeal: undefined;
};

export const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddNewMeal">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="AddNewMeal"
          component={AddNewMeal}
          options={{ headerTitle: "New Meal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
