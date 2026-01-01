const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (query) {
    window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  }
});

