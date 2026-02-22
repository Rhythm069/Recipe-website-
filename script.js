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

const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.style.display = "flex"; 
    contactForm.reset(); 
});


closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});


window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});