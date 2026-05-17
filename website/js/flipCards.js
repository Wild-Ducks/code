/*
 * Flip Card Interaction
 *
 * Enables click-to-flip behavior for
 * consulting service cards.
 */

document.addEventListener("DOMContentLoaded", function () {

    /* Find all flip cards on the page */

    const cards = document.querySelectorAll(".flip-card");

    /* Attach click behavior */

    cards.forEach((card) => {

        card.addEventListener("click", function () {

            this
                .querySelector(".flip-card-inner")
                .classList.toggle("flipped");

        });

    });

});