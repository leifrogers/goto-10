/**
 * Absurd recreation of the storied goto10 function
 *
 * uses U+29F8 (big solidus) and U+29F9 (big reverse solidus)
 * for the slashes since it better fills the line - this appears
 * to screw up microsoft edge and chrome (at least on a surface go)
 * but firefox holds true.
 * 
 * basically, this seems to work fine on all forms of firefox i've ran
 * 
 * edge and chrome...not so much (although chrome running in fedora works)
 * 
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧸') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧹');}, 1);