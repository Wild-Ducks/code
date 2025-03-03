document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            this.querySelector(".flip-card-inner").classList.toggle("flipped"); // Toggle flip state
        });
    });
});
