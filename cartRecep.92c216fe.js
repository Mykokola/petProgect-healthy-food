const e=document.querySelector(".caunt-calories-section-input"),t=async()=>{const t=await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=548b5471&app_key=a8400ab0cc8505640d3ad8260901c1cc&ingr=${e.value}`);return await t.json()};function a(e){const{parsed:t}=e;if(t.length){const e=t[0].food,{image:a,nutrients:c,label:n}=e,{CHOCDF:o,ENERC_KCAL:r,FAT:i,PROCNT:s}=c;return`<img \n        width="305px" class="caunt-calories-result--img" src="${a}">\n        <h2 class="count-calories-result-titile">${n}</h2>\n        <p class="coutn-caliries-result--abaut">Protein:${Math.trunc(s)}</p>\n        <p class="coutn-caliries-result--abaut">Fat:${Math.trunc(i)}</p>\n        <p class="coutn-caliries-result--abaut">Energy:${Math.trunc(r)}</p>\n        <p class="coutn-caliries-result--abaut">Carbs:${Math.trunc(o)}</p>`}return'  <h2 class="count-calories-result-titile">Sorry, but I don\'t know such a product :(</h2>'}const c=document.querySelector(".choice-food-input");let n;const o=async()=>{if(c.value!==n){const e=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${c.value}&app_id=aa65fcc4&app_key=f3caedd0bc456a2c084050f824421aa6&imageSize=SMALL`),t=await e.json();return n=c.value,t}};function r(e){return e.map((e=>{e=e.recipe;const{label:t,ingredientLines:a,images:c}=e;return`<li class="choice-food-item">\n       <img src="${c.SMALL.url}" alt="">\n       <div>\n       <h3 class="choice-food-item--title">${t}</h3>\n       <p class="choice-food-item--paragraf">${a.join("")}</p>\n       <button type="button" class="choice-food-item--save-recipe-btn">Save the recipe</button>\n       </div>\n       </li>`})).join("")}const i=document.querySelector(".count-calories-btn"),s=document.querySelector(".caunt-calories-result"),l=document.querySelector(".choice-food-button"),u=document.querySelector(".choice-food-list");i.addEventListener("click",(e=>{e.preventDefault(),s.innerHTML="",t().then((e=>{s.insertAdjacentHTML("beforeend",a(e))}))})),l.addEventListener("click",(e=>{e.preventDefault(),o().then((e=>{e&&(u.innerHTML=""),u.insertAdjacentHTML("beforeend",r(e.hits))})).then((e=>{const t=[];u.addEventListener("click",(e=>{e.preventDefault(),"button"===e.target.type&&-1===t.indexOf(e.target.parentNode.parentNode)&&(t.push(e.target.parentNode.parentNode.outerHTML),console.log(e.target.parentNode.parentNode.outerHTML)),localStorage.setItem("RECIP_SAVE",JSON.stringify({recipList:t})),console.log(JSON.parse(localStorage.getItem("RECIP_SAVE")))}))})).catch((e=>{console.log(e.message)}))}));
//# sourceMappingURL=cartRecep.92c216fe.js.map
