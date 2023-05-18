function drawCuntFoodNutrition(foodNutrition) {
  const { parsed } = foodNutrition;
  if (parsed.length) {
    const food = parsed[0].food;
    const { image, nutrients, label } = food;
    const { CHOCDF, ENERC_KCAL, FAT, PROCNT } = nutrients;
    return `<img 
        width="305px" class="caunt-calories-result--img" src="${image}">
        <h2 class="count-calories-result-titile">${label}</h2>
        <p class="coutn-caliries-result--abaut">Protein:${Math.trunc(
          PROCNT
        )}</p>
        <p class="coutn-caliries-result--abaut">Fat:${Math.trunc(FAT)}</p>
        <p class="coutn-caliries-result--abaut">Energy:${Math.trunc(
          ENERC_KCAL
        )}</p>
        <p class="coutn-caliries-result--abaut">Carbs:${Math.trunc(
          CHOCDF
        )}</p>`;
  }
  return `  <h2 class="count-calories-result-titile">Sorry, but I don't know such a product :(</h2>`;
}

export { drawCuntFoodNutrition };
