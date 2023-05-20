function drawDishsList(dishsList){
  
    return dishsList.map(elem => {
       elem = elem.recipe
       const {label,ingredientLines,images} = elem
       return `<li class="choice-food-item">
       <img src="${images.SMALL.url}" alt="">
       <div>
       <h3 class="choice-food-item--title">${label} </h3>
       <p class="choice-food-item--paragraf">${ingredientLines.join('')}</p>
       <button type="button" class="choice-food-item--save-recipe-btn">Save the recipe</button>
       </div>
       </li>`
     }).join('')
   }
export {drawDishsList}