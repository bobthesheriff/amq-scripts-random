// ==UserScript==
// @name         MAL Review Score Unhider
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Puts the score of the review next to the "recommended"/"mixed"/"not recommended" tag
// @author       BobTheSheriff
// @match        https://myanimelist.net/anime/*
// @downloadURL  https://github.com/bobthesheriff/amq-scripts-random/raw/main/MALReviewScore.js
// @updateURL    https://github.com/bobthesheriff/amq-scripts-random/raw/main/MALReviewScore.js
// @grant        none
// @copyright    MIT license
// ==/UserScript==

"use strict"
function editReview(review){
	let tag = review.getElementsByClassName("tags")[0].childNodes[0];
	let score = review.getElementsByClassName("num")[0].childNodes[0].data;

	tag.innerHTML = tag.innerHTML + " - " + score;
}

let reviews = document.getElementsByClassName("review-element js-review-element");

for (let i=0; i < reviews.length; i++){
	editReview(reviews[i]);
}
