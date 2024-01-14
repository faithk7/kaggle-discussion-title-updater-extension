// content.js

console.log("Test Extension loaded.");

function logDOMLoaded() {
    console.log("DOM fully loaded and parsed.");
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    logDOMLoaded();
} else {
    document.addEventListener('DOMContentLoaded', logDOMLoaded);
}
