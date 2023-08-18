document.getElementById("search-button").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value;
    window.location.href = `https://gglvxd.eu.org/search.html?q=${encodeURIComponent(searchQuery)}`;
  });
  