// content.js

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            const discussionTitle =  document.querySelector('div[data-testid="discussions-topic-header"] h3'); // this is the css/html that can help to identify the discussion title, seems dynamically changing
            if (discussionTitle) {
                document.title = "💬 | " + discussionTitle.textContent.trim();
                console.log("Discussion title found and tab title updated.");
                observer.disconnect();
            }
        }
    });
});

// Configuration of the observer:
const config = { childList: true, subtree: true };
// Start observing the body for added nodes
observer.observe(document.body, config);