import { useAppSelector } from "../../redux/store";

export const useMealStatistics = () => {
  const meals = useAppSelector((state) => state.meals);

  const getMealPercentage = () => {
    const totalMeals = meals.length;

    const mealsByDiet = meals.reduce(
      (acc, meal) => {
        if (meal.isInDiet) {
          acc.isInDiet += 1;
        } else {
          acc.isNotInDiet += 1;
        }

        return acc;
      },
      {
        isInDiet: 0,
        isNotInDiet: 0,
      }
    );

    const inDietPercentage = (mealsByDiet.isInDiet / totalMeals) * 100;
    const notInDietPercentage = (mealsByDiet.isNotInDiet / totalMeals) * 100;

    if (mealsByDiet.isInDiet > mealsByDiet.isNotInDiet) {
      return {
        percentage: inDietPercentage.toFixed(2),
        label: "of meals are in your diet",
        backgroundColor: "#E5F0DB",
        arrowColor: "#639339",
      };
    } else
      return {
        percentage: notInDietPercentage.toFixed(2),
        label: "of meals are not in your diet",
        backgroundColor: "#F4E6E7",
        arrowColor: "#BF3B44",
      };
  };

  return {
    getMealPercentage,
  };
};
