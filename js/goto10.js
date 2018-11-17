/**
 * Absurd recreation of the storied goto10 function
 *
 * used to use U+29F8 '⧸' (big solidus) and U+29F9 '⧹' (big reverse solidus)
 * for the slashes since it better fills the line but switched back to normal
 *  /\ as test for edge, etc.
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '/') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '\\');}, 1);