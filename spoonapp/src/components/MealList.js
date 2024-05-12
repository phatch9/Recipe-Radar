import Meal from './Meal';

export default function MealList({ mealData }) {
  console.log('MealList receiving:', mealData);

  if (!mealData || mealData.length === 0) {  // Checking if mealData is an array and has elements
      return <div>No meals found. Please adjust your search criteria.</div>;
  }

  return (
      <main>
          <section className="meals">
              {mealData.map((meal, index) => (
                  <Meal key={meal.id || index} meal={meal} />
              ))}
          </section>
      </main>
  );
}