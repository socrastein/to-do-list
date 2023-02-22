export function recipeStore(recipe){
  let key = `${recipe.category}-${recipe.name}`
  let valueArray = [];

  Object.keys(recipe).forEach((key) =>{
    if(typeof recipe.key !== "function"){
      valueArray.push(`${recipe.key}`);
    }
  });

  value = valueArray.join(".");
  localStorage[key] = value;
  console.log(`Recipe key: ${key} stored, value:`)
  console.log(value);
}

export function recipeCreate(name, ingredients, instructions, notes, category) {
  let newRecipe = { name, ingredients, instructions, notes, category };
  recipeStore(newRecipe);
  return newRecipe;
}

export function recipeDelete(recipe){
  let key = `${recipe.category}-${recipe.name}`;

  if(localStorage[key]){
    localStorage.removeItem(key);
    console.log("Recipe removed");
  } else console.warn("Recipe not found in storage");
}


