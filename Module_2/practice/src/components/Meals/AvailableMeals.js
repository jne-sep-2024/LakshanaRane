import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hamburger",
    description: "The Classic Burger",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Fried chicken",
    description: "Special crispy chicken.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbeque Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {

//   const mealsList = DUMMY_MEALS.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//       //   {...DUMMY_MEALS}
//     />
//   ));

  return (
    <section className={classes.mealsList}>
      {/* <ul>{mealsList}</ul> */}
      {DUMMY_MEALS.map((meal)=>(
        <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
      ))}
      
    </section>
  );
};

export default AvailableMeals;
