import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, SectionList } from "react-native";
import { RootStackParamList } from "../../routes";
import { AntDesign } from "@expo/vector-icons";
import { useAppSelector } from "../../redux/store";
import Button from "../../components/Button";
import { format } from "date-fns";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Dashboard = ({ navigation }: Props) => {
  const meals = useAppSelector((state) => state.meals);

  const groupedData = meals.reduce((groupedAccumulator, meal) => {
    const date = format(new Date(meal.dateTime), "dd.MM.yyyy");

    if (groupedAccumulator[date]) {
      groupedAccumulator[date].push(meal);
    } else {
      groupedAccumulator[date] = [meal];
    }

    return groupedAccumulator;
  }, {});

  const sections = Object.keys(groupedData).map((date) => ({
    title: date,
    data: groupedData[date],
  }));

  return (
    <View style={{ paddingHorizontal: 24, flex: 1 }}>
      <View
        style={{
          alignItems: "flex-start",
          gap: 8,
          flex: 1,

          maxHeight: "10%",
        }}
      >
        <Text style={{ color: "#1B1D1E", fontSize: 16 }}>Meals</Text>
        <Button onPress={() => navigation.navigate("AddNewMeal")}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <AntDesign name="plus" size={18} color="white" />
            <Text style={{ color: "white", fontWeight: "700" }}>New meal</Text>
          </View>
        </Button>
      </View>
      <SectionList
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
        renderSectionHeader={({ section: { title } }) => {
          return (
            <Text style={{ color: "#1B1D1E", fontSize: 16, marginTop: 24 }}>
              {title}
            </Text>
          );
        }}
        sections={sections}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Dashboard;
