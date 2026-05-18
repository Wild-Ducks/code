/*
 * Shared Component Loader
 *
 * Loads shared header and footer across all Wild Ducks LLC pages.
 */

document.addEventListener("DOMContentLoaded", async () => {
    async function loadComponent(selector, file) {
        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`${file} returned ${response.status}`);
            }

            document.querySelector(selector).innerHTML =
                await response.text();

        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }

    loadComponent("header", "/header.html");
    loadComponent("footer", "/footer.html");
});