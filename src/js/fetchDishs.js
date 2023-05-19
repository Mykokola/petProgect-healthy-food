const choiceFoodInp = document.querySelector('.choice-food-input')
let checkIdenf;
const fetchDish = async () => {
    if(choiceFoodInp.value !== checkIdenf){
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${choiceFoodInp.value}&app_id=aa65fcc4&app_key=f3caedd0bc456a2c084050f824421aa6&imageSize=SMALL`)
        const food = await response.json()
        checkIdenf = choiceFoodInp.value
        return food
    }
    return 
}
export {fetchDish}