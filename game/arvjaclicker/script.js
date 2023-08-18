let cookieCount = 0;
let cookiesPerSecond = 1;
let upgrades = [
  { name: "Upgrade 1", cps: 2, cost: 30 },
  { name: "Upgrade 2", cps: 20, cost: 1000 },
  { name: "Upgrade 3", cps: 200, cost: 10000 }
];

// Load data from local storage
cookieCount = parseInt(localStorage.getItem("cookieCount")) || cookieCount;
cookiesPerSecond = parseInt(localStorage.getItem("cookiesPerSecond")) || cookiesPerSecond;

for (let i = 0; i < upgrades.length; i++) {
  upgrades[i].cost = parseInt(localStorage.getItem(`upgrade${i + 1}Cost`)) || upgrades[i].cost;
}

function updateCookieCount() {
  document.getElementById("cookieCount").textContent = cookieCount;
}

function updateUpgradeCost(index) {
  const upgradeCostElement = document.getElementById(`upgrade${index + 1}Cost`);
  upgradeCostElement.textContent = upgrades[index].cost;
}

function clickCookie() {
  cookieCount += 1;
  updateCookieCount();
  saveToLocalStorage();
}

function buyUpgrade(index) {
  if (cookieCount >= upgrades[index].cost) {
    cookieCount -= upgrades[index].cost;
    cookiesPerSecond += upgrades[index].cps;
    upgrades[index].cost *= 2;
    updateCookieCount();
    updateUpgradeCost(index);
    saveToLocalStorage();
  }
}

function updateCookies() {
  cookieCount += cookiesPerSecond;
  updateCookieCount();
  saveToLocalStorage();
}

// Function to save data to local storage
function saveToLocalStorage() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
  for (let i = 0; i < upgrades.length; i++) {
    localStorage.setItem(`upgrade${i + 1}Cost`, upgrades[i].cost);
  }
}

// Initial setup
setInterval(updateCookies, 1000);
updateCookieCount();
for (let i = 0; i < upgrades.length; i++) {
  updateUpgradeCost(i);
}
