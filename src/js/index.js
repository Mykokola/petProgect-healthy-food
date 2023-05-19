import { fetchFood } from './fetchfood';
import { drawCuntFoodNutrition } from './drawCaloriesCaunt';
import { fetchDish } from './fetchDishs';
import { drawDishsList } from './drawDishsList';
const cauntFoodBtn = document.querySelector('.count-calories-btn'),
  cauntCaloriesResult = document.querySelector('.caunt-calories-result'),
  choiceFoddBtn = document.querySelector('.choice-food-button'),
  choiceFoodList = document.querySelector('.choice-food-list');


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
   
  }).then(e => {
    const saveRecips = []
    choiceFoodList.addEventListener('click', e => {
    e.preventDefault()
      if(e.target.type === 'button' &&  saveRecips.indexOf(e.target.parentNode.parentNode) === -1){
        saveRecips.push(e.target.parentNode.parentNode.outerHTML)
        console.log(e.target.parentNode.parentNode.outerHTML)
      }
  localStorage.setItem('RECIP_SAVE', JSON.stringify({'recipList':saveRecips}))
      console.log(JSON.parse(localStorage.getItem('RECIP_SAVE')))
  })

  }).catch(e => {
    console.log(e.message)
  })
})
