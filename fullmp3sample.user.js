// ==UserScript==
// @name         Full mp3 sample
// @namespace    https://github.com/bobthesheriff/amq-scripts-random
// @version      0.1
// @description  Full mp3 sample on library
// @author       BobTheSheriff
// @match        https://*.animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/bobthesheriff/amq-scripts-random/raw/main/fullmp3sample.user.js
// @updateURL    https://github.com/bobthesheriff/amq-scripts-random/raw/main/fullmp3sample.user.js
// ==/UserScript==
"use strict"

if (document.getElementById("loginPage")) return;


let pvp = PreviewVideoPlayer.prototype;
pvp.PLAY_LENGTH = 9999
pvp.SAMPLE_TARGET_POINT = 0;



