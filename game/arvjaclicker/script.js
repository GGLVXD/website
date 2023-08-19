let cookieCount = 0;
let cookiesPerSecond = 1;
let upgrades = [
  { name: "Upgrade 1", cps: 2, cost: 30 },
  { name: "Upgrade 2", cps: 20, cost: 100 },
  { name: "Upgrade 3", cps: 200, cost: 1000 }
];

let endgameUpgradeCost = 10000000;
let endgameUpgradeBought = JSON.parse(localStorage.getItem("endgameUpgradeBought")) || false;

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
  document.getElementById("cookiesPerSecond").textContent = cookiesPerSecond;
  saveToLocalStorage();
}

function updateEndgameUpgrade() {
  const endgameTitle = document.getElementById("endgame-title");
  const endgameDescription = document.getElementById("endgame-description");
  const endgameButton = document.getElementById("endgame-button");

  if (!endgameUpgradeBought) {
    endgameButton.textContent = `pirkt (10000000 arvji)`;
    endgameTitle.textContent = "Pabeidz speli";
    endgameDescription.textContent = "Pabeidz speli lai vari iziet beidzot ara.";
  } else {
    endgameButton.textContent = "apsties saiti";
    endgameTitle.textContent = "Spele ir pabeikta!";
    endgameDescription.textContent = "Tu pabeidzi speli!";
  }
}

function handleEndgameUpgrade() {
  if (!endgameUpgradeBought && cookieCount >= endgameUpgradeCost) {
    endgameUpgradeBought = true;
    localStorage.setItem("endgameUpgradeBought", JSON.stringify(endgameUpgradeBought));
    updateEndgameUpgrade();
    // Redirect to a different page here
    window.location.href = "https://gglvxd.eu.org/game/arvjaclicker/finnaly.html"; // Replace with the actual URL
  } else if (endgameUpgradeBought) {
    // Redirect to the endgame page if it's already bought
    window.location.href = "https://gglvxd.eu.org/game/arvjaclicker/finnaly.html"; // Replace with the actual URL
  }
}

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
document.getElementById("cookiesPerSecond").textContent = cookiesPerSecond;
for (let i = 0; i < upgrades.length; i++) {
  updateUpgradeCost(i);
}
updateEndgameUpgrade();
document.getElementById("endgame-button").addEventListener("click", handleEndgameUpgrade);

