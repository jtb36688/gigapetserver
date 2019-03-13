
exports.seed = function(knex, Promise) {
  return knex('children_food').truncate()
    .then(function () {
      return knex('children_food').insert([
        {foodId: 1, mealTime:"Breakfast", childId: 1, dayId: 1},
        {foodId: 1, mealTime:"Lunch", childId: 1, dayId: 1},
        {foodId: 1, mealTime:"Dinner", childId: 1, dayId: 1},
        {foodId: 1, mealTime:"Breakfast", childId: 1, dayId: 2},
        {foodId: 1, mealTime:"Lunch", childId: 1, dayId: 2},
        {foodId: 1, mealTime:"Dinner", childId: 1, dayId: 2},
        {foodId: 2, mealTime:"Breakfast", childId: 2, dayId: 1},
        {foodId: 2, mealTime:"Lunch", childId: 2, dayId: 1},
        {foodId: 2, mealTime:"Dinner", childId: 2, dayId: 1},
        {foodId: 2, mealTime:"Breakfast", childId: 2, dayId: 2},
        {foodId: 2, mealTime:"Lunch", childId: 2, dayId: 2},
        {foodId: 2, mealTime:"Dinner", childId: 2, dayId: 2},
        {foodId: 3, mealTime:"Breakfast", childId: 3, dayId: 1},
        {foodId: 4, mealTime:"Lunch", childId: 3, dayId: 1},
        {foodId: 5, mealTime:"Dinner", childId: 3, dayId: 1},
        {foodId: 3, mealTime:"Breakfast", childId: 3, dayId: 2},
        {foodId: 4, mealTime:"Lunch", childId: 3, dayId: 2},
        {foodId: 5, mealTime:"Dinner", childId: 3, dayId: 2},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ]);
    });
};
