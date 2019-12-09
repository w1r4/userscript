// ==UserScript==
// @name        youtube_bypass
// @description Adds live example button, with styling.
// @match       *://www.youtube.com/*
// @match       *://m.youtube.com/*
// @grant       GM_addStyle
// ==/UserScript==

//debugger;

var button = document.createElement("button");
button.innerHTML = "ByPass";
button.style = "top:0;right:0;position:absolute;z-index:99999;padding:5px;border-radius:50%;background-color:#4CAF50;";
document.body.appendChild(button);
button.setAttribute('id', 'myButton');

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);
function ButtonClickAction (zEvent) {
    var url_ori = window.location.href;
    var url_mod = url_ori.replace("youtube.com", "nsfwyoutube.com")
    window.open(url_mod);
}
