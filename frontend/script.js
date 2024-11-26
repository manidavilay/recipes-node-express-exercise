const API_URL = "enter yourbackend api here";

// Fetch and render items
async function fetchItems() {
  const response = await fetch(API_URL);
  const items = await response.json();
  renderItems(items);
}

// Render items in the table
function renderItems(items) {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = items
    .map(
      (item) => `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td class="actions">
          <button class="edit" onclick="editItem(${item.id})">Edit</button>
          <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
        </td>
      </tr>
    `
    )
    .join("");
}

// Add or update an item
async function submitForm(event) {
  event.preventDefault();

  const id = document.getElementById("item-id").value;
  const name = document.getElementById("item-name").value;
  const description = document.getElementById("item-description").value;

  const method = id ? "PUT" : "POST";
  const url = id ? `${API_URL}/${id}` : API_URL;

  await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  });

  resetForm();
  fetchItems();
}

// Populate form for editing
async function editItem(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const item = await response.json();

  document.getElementById("item-id").value = item.id;
  document.getElementById("item-name").value = item.name;
  document.getElementById("item-description").value = item.description;
  document.getElementById("submit-btn").innerText = "Update";
}

// Delete an item
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchItems();
}

// Reset form to default state
function resetForm() {
  document.getElementById("crud-form").reset();
  document.getElementById("item-id").value = "";
  document.getElementById("submit-btn").innerText = "Add";
}

// Initialize event listeners and fetch data
document.getElementById("crud-form").addEventListener("submit", submitForm);
fetchItems();
