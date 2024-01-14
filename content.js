// content.js

document.addEventListener('DOMContentLoaded', () => {
    const discussionTitle = document.querySelector('h3[emphasis="high"]');
    if (discussionTitle) {
        document.title = discussionTitle.textContent.trim();
    }
});
