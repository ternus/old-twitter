// ==UserScript==
// @name         Get Old Twitter Back
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Remove new rounded Twitter styling
// @author       ternus
// @match        https://twitter.com/
// @homepage     https://github.com/ternus/old-twitter
// @grant        none
// ==/UserScript==

(function() {
    $('body').removeClass('edge-design');
})();
