/**
 * Absurd recreation of the storied goto10 function
 *
 * uses U+29F8 (big solidus) and U+29F9 (big reverse solidus)
 * for the slashes since it better fills the line
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧸') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧹');}, 1);