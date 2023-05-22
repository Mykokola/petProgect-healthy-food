const recipsList = document.querySelector('.recip-list'),
      saveRecip = JSON.parse(localStorage.getItem('RECIP_SAVE'))
if(saveRecip.recipList.length){
    recipsList.innerHTML = ``
    recipsList.insertAdjacentHTML('beforeend',saveRecip.recipList.join(''))
}
