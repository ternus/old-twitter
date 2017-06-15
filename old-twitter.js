// ==UserScript==
// @name         Get Old Twitter Back
// @namespace    https://cternus.net
// @version      0.1.4
// @description  Remove new rounded Twitter styling
// @author       ternus
// @match        https://twitter.com/*
// @homepage     https://github.com/ternus/old-twitter
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    $('body').removeClass('edge-design');
})();
