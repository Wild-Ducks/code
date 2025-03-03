fetch("/code/website/meta.html")
  .then(response => response.text())
  .then(data => {
    document.head.insertAdjacentHTML("afterbegin", data);
  })
  .catch(error => console.error("Error loading metadata:", error));
