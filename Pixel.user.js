// ==UserScript==
// @name         PixelDrain Redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects Pixeldrain URLs to CDN
// @author       Your Name
// @match        https://pixeldrain.com/u/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the file ID from the URL
    const urlPath = window.location.pathname;
    const fileId = urlPath.split('/').pop(); // Get the last part of the URL

    if (fileId) {
        // Construct the new URL
        const newUrl = `https://cdn.pd7.workers.dev/api/file/${fileId}`;
        
        // Redirect to the new URL
        window.location.replace(newUrl);
    }
})();
