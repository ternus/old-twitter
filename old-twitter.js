// ==UserScript==
// @name         Get Old Twitter Back
// @namespace    https://cternus.net
// @version      0.1.7
// @description  Remove new rounded Twitter styling
// @author       ternus
// @match        https://twitter.com/*
// @match        https://www.twitter.com/*
// @homepage     https://github.com/ternus/old-twitter
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    // Remove at start
    document.body.classList.remove('edge-design');

    // Twitter doesn't do real page reloads -- the entire UI is jQuery,
    // so we have to do this kinda-janky check to make sure `edge-design`
    // doesn't sneak back in.
    document.body.addEventListener('DOMSubtreeModified', function() {
        document.body.classList.remove('edge-design');
    });
})();

