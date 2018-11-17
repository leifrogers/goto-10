/**
 * Absurd recreation of the storied goto10 function
 *
 * here's the edge/chrome specific js that uses normal slashes
 * for the characters since the big soliduses seem to be
 * incompatible.
 * 
 * firefox is iffy with this as the word wrap breaks at odd places
 * 
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '/') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '\\');}, 1);