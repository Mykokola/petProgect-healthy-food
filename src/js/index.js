import { fetchFood } from './fetchfood';
import { drawCuntFoodNutrition } from './drawCaloriesCaunt';
import { fetchDish } from './fetchDishs';
import { drawDishsList } from './drawDishsList';
const cauntFoodBtn = document.querySelector('.count-calories-btn'),
  cauntCaloriesResult = document.querySelector('.caunt-calories-result'),
  choiceFoddBtn = document.querySelector('.choice-food-button'),
  choiceFoodList = document.querySelector('.choice-food-list')
cauntFoodBtn.addEventListener('click', e => {
  e.preventDefault();
  cauntCaloriesResult.innerHTML = ``;
  fetchFood().then(foodCal => {
    cauntCaloriesResult.insertAdjacentHTML(
      'beforeend',
      drawCuntFoodNutrition(foodCal)
    );
  });
});


choiceFoddBtn.addEventListener('click', e => {
  e.preventDefault();

  fetchDish().then(dishsList =>{ 
    if(dishsList){
  choiceFoodList.innerHTML = ``
    }
    choiceFoodList.insertAdjacentHTML('beforeend', drawDishsList(dishsList.hits))
  }).catch(e => {
    console.log(e.message)
  })

})
