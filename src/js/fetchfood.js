const cauntFoodInp = document.querySelector('.caunt-calories-section-input');
const fetchFood = async () => {
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=548b5471&app_key=a8400ab0cc8505640d3ad8260901c1cc&ingr=${cauntFoodInp.value}`)
    const food = await response.json()
    return food
}
export {fetchFood};
