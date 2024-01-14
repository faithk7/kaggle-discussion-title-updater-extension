// content.js

console.log("Test Extension loaded.");

function logDOMLoaded() {
    console.log("DOM fully loaded and parsed.");
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("inside the if branch");
    logDOMLoaded();
} else {
    console.log("else branch");
    document.addEventListener('DOMContentLoaded', logDOMLoaded);
}
