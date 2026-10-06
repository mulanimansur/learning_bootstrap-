// Welcome message

alert("Welcome to Royal Decoration 👑");

// Search functionality
const searchForm = document.querySelector('form[role="search"]');
const searchInput = searchForm.querySelector('input[type="search"]');

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    }
    else if (searchText.includes("birthday")) {
        alert("Birthday Decoration available 🎂");
    }
    else if (searchText.includes("wedding")) {
        alert("Wedding Decoration available 💍");
    }
    else if (searchText.includes("anniversary")) {
        alert("Anniversary Decoration available ❤️");
    }
    else if (searchText.includes("floral")) {
        alert("Floral Decoration available 🌸");
    }
    else {
        alert("Decoration not found.");
    }
});