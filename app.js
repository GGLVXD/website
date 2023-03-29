const usersPerPage = 100;
let currentPage = 1;
let endIndex = usersPerPage;
const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const loadBtn = document.getElementById("loadBtn");
const loadCount = document.getElementById("loadCount");

function displayUsers(startIndex, endIndex) {
  userList.innerHTML = "";
  for (let i = startIndex; i < endIndex && i < users.length; i++) {
    const user = users[i];
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${user.name} $${user.amount}`;
    userList.appendChild(li);
  }
}

loadBtn.addEventListener("click", () => {
  currentPage++;
  const startIndex = (currentPage - 1) * usersPerPage;
  endIndex = currentPage * usersPerPage;
  if (startIndex >= users.length) {
    loadBtn.disabled = true;
    return;
  }
  displayUsers(startIndex, endIndex);
  loadCount.textContent = `Loaded ${endIndex} users`;
});

displayUsers(0, endIndex);
loadCount.textContent = `Loaded ${endIndex} users`;
