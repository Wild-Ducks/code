/*
 * Shared Component Loader
 *
 * Dynamically loads the shared header and footer
 * across all Wild Ducks LLC pages.
 */

document.addEventListener("DOMContentLoaded", function () {

    /* Load shared header */

    fetch("/website/header.html")

        .then(response => response.text())

        .then(data => {

            document.querySelector("header").innerHTML = data;

        })

        .catch(error => {

            console.error(
                "Error loading header:",
                error
            );

        });

    /* Load shared footer */

    fetch("/website/footer.html")

        .then(response => response.text())

        .then(data => {

            document.querySelector("footer").innerHTML = data;

        })

        .catch(error => {

            console.error(
                "Error loading footer:",
                error
            );

        });

});