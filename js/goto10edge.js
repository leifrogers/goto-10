/**
 * Absurd recreation of the storied goto10 function
 *
 * here's the edge/chrome specific js that uses normal slashes
 * for the characters since the big soliduses seem to be
 * incompatible.
 * 
 * kerning issues have resulted but that's where we're at at the moment.
 * 
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '/') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '\\');}, 1);