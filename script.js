function searchRecipes() {

    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {
        let name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });


    document.getElementById("recipesSection").scrollIntoView({
        behavior: "smooth"
    });
}