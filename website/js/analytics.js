/*
 * Google Analytics Integration
 *
 * Loads Google Analytics asynchronously
 * for site traffic and engagement tracking.
 */

(function () {

    /* Create analytics script element */

    var script = document.createElement("script");

    script.async = true;

    script.src =
        "https://www.googletagmanager.com/gtag/js?id=G-92DH3F3K2Z";

    /* Inject script into document head */

    document.head.appendChild(script);

    /* Initialize analytics after load */

    script.onload = function () {

        window.dataLayer = window.dataLayer || [];

        function gtag() {

            dataLayer.push(arguments);

        }

        gtag("js", new Date());

        gtag(
            "config",
            "G-92DH3F3K2Z"
        );

    };

})();