import { fetchFood } from './fetchfood';
import { drawCuntFoodNutrition } from './drawCaloriesCaunt';
import { fetchDish } from './fetchDishs';
import { drawDishsList } from './drawDishsList';
if(!(localStorage.getItem('RECIP_SAVE'))){
localStorage.setItem('RECIP_SAVE', JSON.stringify({ recipList: [] }));
}
const cauntFoodBtn = document.querySelector('.count-calories-btn'),
  cauntCaloriesResult = document.querySelector('.caunt-calories-result'),
  choiceFoddBtn = document.querySelector('.choice-food-button'),
  choiceFoodList = document.querySelector('.choice-food-list'),
  saveRecipLocal = JSON.parse(localStorage.getItem('RECIP_SAVE')).recipList;

let saveRecips = [];
if (saveRecipLocal) {
  saveRecips = [...saveRecipLocal];
  console.log(saveRecips)
}

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

  fetchDish()
    .then(dishsList => {
      if (dishsList) {
        choiceFoodList.innerHTML = ``;
      }
      choiceFoodList.insertAdjacentHTML(
        'beforeend',
        drawDishsList(dishsList.hits)
      );
    })
    .then(e => {
      choiceFoodList.addEventListener('click', e => {
        e.preventDefault();
        let elemDish = e.target.parentNode.parentNode.outerHTML;
       elemDish =  elemDish.replace(
          '<button type="button" class="choice-food-item--save-recipe-btn">Save the recipe</button>',
          ''
        );
        if (e.target.type === 'button' && titleChecker(elemDish,saveRecips)) {
          saveRecips.push(elemDish);
        }
        localStorage.setItem(
          'RECIP_SAVE',
          JSON.stringify({ recipList: saveRecips })
        );
      });
    })
    .catch(e => {
      console.log(e.message);
    });
});
function titleCreator(title){
  let titleGenerator = title.split(' ')
   return titleGenerator.slice(titleGenerator.indexOf('<h3'),titleGenerator.indexOf('</h3>\n')).join(' ').replace('<h3 class="choice-food-item--title">',``)
}
function titleChecker(elemDish,titleMass){
  elemDish = titleCreator(elemDish)
  for(let i = 0;i < titleMass.length;i++){
    if(titleCreator(titleMass[i]) === elemDish){
      return 0
    }
  }
  return 1
}
