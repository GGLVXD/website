const dataList = document.getElementById('data-list');
const loadMoreButton = document.getElementById('load-more');
const searchInput = document.getElementById('search');

let data = []; // This will be populated by the JSON file later
let displayedData = []; // This will contain the currently displayed data
let loadSize = 100; // How many items to load each time the button is clicked

// Function to render the data to the HTML list
function renderData() {
  dataList.innerHTML = '';
  displayedData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} $${item.amount}`;
    dataList.appendChild(li);
  });
}

// Function to filter the data by name
function filterData(name) {
  displayedData = data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  renderData();
}

// Function to load more data
function loadMore() {
  const startIndex = displayedData.length;
  const endIndex = startIndex + loadSize;
  const newData = data.slice(startIndex, endIndex);
  displayedData = displayedData.concat(newData);
  renderData();
}

// Event listener for the search input
searchInput.addEventListener('input', () => {
  filterData(searchInput.value);
});

// Event listener for the load more button
loadMoreButton.addEventListener('click', () => {
  loadMore();
});

// Load the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    displayedData = data.slice(0, loadSize);
    renderData();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
