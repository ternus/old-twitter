// ==UserScript==
// @name         Get Old Twitter Back
// @namespace    https://cternus.net
// @version      0.1.5
// @description  Remove new rounded Twitter styling
// @author       ternus
// @match        https://twitter.com/*
// @homepage     https://github.com/ternus/old-twitter
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    document.body.classList.remove('edge-design');
})();
