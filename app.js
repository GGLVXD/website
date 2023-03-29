// Define variables
const userList = document.getElementById("userList");
const search = document.getElementById("search");
const loadBtn = document.getElementById("loadBtn");
const usersPerPage = 100;
let currentPage = 1;
let users = [];

// Fetch data from JSON file
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    users = data;
    displayUsers(users.slice(0, usersPerPage));
  });

// Display users on page
function displayUsers(users) {
  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.classList.add("user");
    li.innerHTML = `<span class="name">${user.name}</span><span class="amount">$${user.amount}</span>`;
    userList.appendChild(li);
  });
}

loadBtn.addEventListener("click", () => {
  currentPage++;
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;
  if (startIndex >= users.length) {
    loadBtn.disabled = true;
    return;
  }
  displayUsers(users.slice(startIndex, endIndex));
});


// Search users as the user types
search.addEventListener("keyup", () => {
  const searchValue = search.value.toLowerCase();
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue));
  displayUsers(filteredUsers);
});
