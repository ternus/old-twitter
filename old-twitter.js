// ==UserScript==
// @name         Old Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Remove new rounded Twitter styling
// @author       ternus
// @match        https://twitter.com/
// @homepage     https://github.com/ternus/old-twitter
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    $('body').removeClass('edge-design');
})();
