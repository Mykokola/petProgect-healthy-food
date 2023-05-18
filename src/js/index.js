import { fetchFood } from './fetchfood';
import { drawCuntFoodNutrition } from './drawCaloriesCaunt';

const cauntFoodBtn = document.querySelector('.count-calories-btn'),
  cauntCaloriesResult = document.querySelector('.caunt-calories-result');
cauntFoodBtn.addEventListener('click', e => {
  e.preventDefault();
  cauntCaloriesResult.innerHTML = ``;
  fetchFood().then(foodCal => {
    console.log(foodCal)
    cauntCaloriesResult.insertAdjacentHTML(
      'beforeend',
      drawCuntFoodNutrition(foodCal)
    );
  });
});
const fetchDish = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=aa65fcc4&app_key=f3caedd0bc456a2c084050f824421aa6&imageSize=SMALL`)
    const food = await response.json()
    return food
}
fetchDish().then(e => console.log(e))