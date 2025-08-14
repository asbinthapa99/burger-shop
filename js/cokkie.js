document.addEventListener("DOMContentLoaded", function () {
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
    const cookieConsent = document.getElementById("cookie-consent");

    // Check if the user has already accepted cookies
    const cookiesAccepted = document.cookie.split("; ").find(row => row.startsWith("cookiesAccepted="));

    if (!cookiesAccepted) {
        // Show the cookie consent popup
        cookieConsent.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        // Hide the cookie consent popup
        cookieConsent.style.display = "none";

        // Set a cookie to remember the user's choice
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 30; // 30 days
    });

    declineButton.addEventListener("click", function () {
        // Hide the cookie consent popup
        cookieConsent.style.display = "none";

        // Optionally, set a cookie to remember the user's choice
        document.cookie = "cookiesAccepted=false; path=/; max-age=" + 60 * 60 * 24 * 30; // 30 days
    });
});