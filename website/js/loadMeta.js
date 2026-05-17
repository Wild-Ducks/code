/*
 * Shared Metadata Loader
 *
 * Dynamically inserts shared SEO and social metadata
 * into each page head section.
 */

fetch("/website/meta.html")

    .then(response => response.text())

    .then(data => {

        document.head.insertAdjacentHTML(
            "afterbegin",
            data
        );

    })

    .catch(error => {

        console.error(
            "Error loading metadata:",
            error
        );

    });