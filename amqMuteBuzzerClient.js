// ==UserScript==
// @name         AMQ Mute Button Buzzer
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Posts the time when the player mutes their audio per round, acting as a buzzer
// @author       BobTheSheriff
// @match        https://animemusicquiz.com/*
// @require 	 
// @grant        none
// @copyright    MIT license? idk lol
// ==/UserScript==

/* Usage:
When you recognize a song, mute the audio by clicking the volume icon next to the slider.
Then, enter your answer in the answer bar. Do not unmute your audio (if you do, it will be counted as a missed buzzer).
Your audio will be automatically unmuted going into the results phase, and when the next song is loaded.

The time taken to hit the buzzer, as well as whether or not your answer was correct, will be posted in the chat.

Shoutout to Zolhungaj and TheJoseph98 as I mostly looked at their scripts to figure out how to write this
*/

// rejoin: rejoin game or join game (both happen)

"use strict"
let playerScores = {};

quizScoreCounter = new Listener("game chat update", (data) =>{
	// make sure you're in game
	let responses = {...playerScores}
	
	for (let item of data.messages){
		if (item.message.slice(0,3) === "###"){
			
			if item.message.includes("incorrectly"){responses.item.sender() = -1}
			
			else if item.message.includes("correctly"){
				answertime = parseInt(item.message.slice(15))
				responses.item.sender() = answertime;
		}
		//debug
		console.log(responses);
	}
})

new Listener("Game Starting", (data) => {
	// get players for score tracking
	for (let player of data.players){
		playerScores[player.name] = 0;
	}
}).bindListener()


new Listener("guess phase over", () => {
	quizScoreCounter.bindListener();
}).bindListener()


new Listener("play next song", () => {
	quizScoreCounter.unbindListener();
}).bindListener()
