const API_URL = "your backend api"; // Update with your API endpoint

// Fetch and render recipes
async function fetchRecipes() {
  const response = await fetch(API_URL);
  const recipes = await response.json();
  renderRecipes(recipes);
}

// Render recipes in the table
function renderRecipes(recipes) {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = recipes
    .map(
      (recipe) => `
      <tr>
        <td>${recipe.title}</td>
        <td>${recipe.ingredients}</td>
        <td class="actions">
          <button class="edit" onclick="editRecipe(${recipe.id})">Edit</button>
          <button class="delete" onclick="deleteRecipe(${recipe.id})">Delete</button>
        </td>
      </tr>
    `
    )
    .join("");
}

// Add or update a recipe
async function submitForm(event) {
  event.preventDefault();

  const id = document.getElementById("recipe-id").value;
  const title = document.getElementById("recipe-title").value;
  const ingredients = document.getElementById("recipe-ingredients").value;
  const instructions = document.getElementById("recipe-instructions").value;

  const method = id ? "PUT" : "POST";
  const url = id ? `${API_URL}/${id}` : API_URL;

  await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, ingredients, instructions }),
  });

  resetForm();
  fetchRecipes();
}

// Populate form for editing
async function editRecipe(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const recipe = await response.json();

  document.getElementById("recipe-id").value = recipe.id;
  document.getElementById("recipe-title").value = recipe.title;
  document.getElementById("recipe-ingredients").value = recipe.ingredients;
  document.getElementById("recipe-instructions").value = recipe.instructions;
  document.getElementById("submit-btn").innerText = "Update Recipe";
}

// Delete a recipe
async function deleteRecipe(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchRecipes();
}

// Reset form to default state
function resetForm() {
  document.getElementById("recipe-form").reset();
  document.getElementById("recipe-id").value = "";
  document.getElementById("submit-btn").innerText = "Add Recipe";
}

// Initialize event listeners and fetch data
document.getElementById("recipe-form").addEventListener("submit", submitForm);
fetchRecipes();
