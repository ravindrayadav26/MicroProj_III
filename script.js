// Importing JSON file
import foodData from "./food.json" assert { type: "json" };

// 1. List all the food items
function AllFoodItems(data) {
  return data.map((item) => item.foodname);
}
console.log("List all the food items:", AllFoodItems(foodData));

// 2. List all the food items with category vegetables
function Vegetables(data) {
  return data
    .filter((item) => item.category === "Vegetable")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category vegetables:",
  Vegetables(foodData, "Vegetable")
);

//  3. List all the food items with category fruit
function Fruits(data) {
  return data
    .filter((item) => item.category === "Fruit")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category fruit:",
  Fruits(foodData, "Fruit")
);

//  4. List all the food items with category protein
function Proteins(data) {
  return data
    .filter((item) => item.category === "Protein")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category protein:",
  Proteins(foodData, "Protein")
);

//  5. List all the food items with category nuts
function Nuts(data) {
  return data
    .filter((item) => item.category === "Nuts")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category nuts:",
  Nuts(foodData, "Nuts")
);

//  6. List all the food items with category grains
function Grains(data) {
  return data
    .filter((item) => item.category === "Grain")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category grains:",
  Grains(foodData, "Grain")
);

//  7. List all the food items with category dairy
function Dairy(data) {
  return data
    .filter((item) => item.category === "Dairy")
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with category dairy:",
  Dairy(foodData, "Dairy")
);

//  8. List all the food items with calorie above 100
function Above100Calories(data, threshold) {
  return data
    .filter((item) => item.calorie > threshold)
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with calorie above 100:",
  Above100Calories(foodData, 100)
);

//  9. List all the food items with calorie below 100
function Below100Calories(data, threshold) {
  return data
    .filter((item) => item.calorie < threshold)
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with calorie below 100:",
  Below100Calories(foodData, 100)
);

//  10. List all the food items with highest protein content to lowest
function SortedByProtein(data) {
  return data
    .slice()
    .sort((a, b) => b.protiens - a.protiens)
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with highest protein content to lowest:",
  SortedByProtein(foodData)
);

//  11. List all the food items with lowest carb content to highest
function SortedByCarb(data) {
  return data
    .slice()
    .sort((a, b) => a.cab - b.cab)
    .map((item) => item.foodname);
}
console.log(
  "List all the food items with lowest carb content to highest:",
  SortedByCarb(foodData)
);
