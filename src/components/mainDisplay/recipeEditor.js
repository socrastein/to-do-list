export function loadRecipeEditor() {
  const mainContainer = document.getElementById("mainContainer");
  const recipeEditorContainer = document.createElement("div");
  recipeEditorContainer.setAttribute("class", "flexColumn spacedEvenly hidden");
  recipeEditorContainer.id = "recipeEditorContainer";

  mainContainer.appendChild(recipeEditorContainer);

  // RECIPE EDITING FORM
  const recipeEditorForm = document.createElement("form");
  recipeEditorForm.id = "recipeEditorForm";
  recipeEditorForm.action = "index.html";
  recipeEditorForm.method = "post";
  recipeEditorContainer.appendChild(recipeEditorForm);

  const recipeEditorFormFieldset = document.createElement("fieldset");
  recipeEditorFormFieldset.id = "recipeEditorFormFieldset";
  recipeEditorForm.appendChild(recipeEditorFormFieldset);

  const recipeEditorFormFieldsetTitle = document.createElement("legend");
  recipeEditorFormFieldsetTitle.textContent = "Edit Recipe";
  recipeEditorFormFieldset.appendChild(recipeEditorFormFieldsetTitle);

  const formValueArray = [
    {
      title: "Category",
      type: "select",
    },
    {
      title: "Name",
      type: "text",
    },
    {
      title: "Ingredients",
      type: "text",
    },
    {
      title: "Instructions",
      type: "textArea",
    },
    {
      title: "Notes",
      type: "textArea",
    },
  ];

  for (let i in formValueArray) {
    let title = formValueArray[i].title;
    let type = formValueArray[i].type;

    let container = document.createElement("div");
    container.id = `form${title}Container`;
    recipeEditorFormFieldset.appendChild(container);

    let label = document.createElement("label");
    label.textContent = `${title}: `;
    label.id = `form${title}Label`;
    label.setAttribute("for", `form${title}Input`);
    container.appendChild(label);

    let input = document.createElement("input");
    input.id = `form${title}Input`;
    input.name = `form${title}Input`;
    input.type = type;
    container.appendChild(input);
  }
}

export function showRecipeEditor(recipe = undefined) {
  if (recipe) {
    let name = recipe.name;
    let ingredients = recipe.ingredients;
    let instructions = recipe.instructions;
    let notes = recipe.notes;
  }
}
