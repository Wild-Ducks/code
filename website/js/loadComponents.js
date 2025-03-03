document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert the header
    fetch("/code/website/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    // Fetch and insert the footer
    fetch("/code/website/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
