export function loadRecipeEditor () {
  const mainContainer = document.getElementById("mainContainer");
  const recipeEditorContainer = document.createElement("div");
    recipeEditorContainer.setAttribute("class", "flexColumn spacedEvenly");
  
    // RECIPE EDITING FORM
    const recipeEditorForm = document.createElement("form");

    const valueArray = [
      {
        value: "Category",
        type: "select"
      },
      {
        value: "Name",
        type: "text"
      },
      {
        value: "Ingredients",
        type: "text"
      },
      {
        value: "Instructions",
        type: "textArea"
      },
      {
        value: "Notes",
        type: "textArea"
      }
    ]

    for (i in valueArray){
      let value = valueArray[i].value;
      let type = valueArray[i].type;

      let container = document.createElement("div");
      container.id = `form${value}Container`;

      let label = document.createElement("label");
      label.textContent = `${value}: `;
      label.id = `form${value}Label`
      label.setAttribute("for", `form${value}Input`);
 

      let input = document.createElement("");
      input.id = `form${value}Input`;
      input.name = `form${value}Input`;    
    }

    
}

export function showRecipeEditor (recipe=undefined) {
  if (recipe){
    let name = recipe.name;
    let ingredients = recipe.ingredients;
    let instructions = recipe.instructions;
    let notes = recipe.notes;
  }

  }
