/*
 * Shared Metadata Loader
 *
 * Dynamically inserts shared SEO and social metadata
 * into each page head section.
 */

fetch("/meta.html")

    .then(response => {

        if (!response.ok) {

            throw new Error(
                `meta.html returned ${response.status}`
            );

        }

        return response.text();

    })

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