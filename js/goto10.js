/**
 * Absurd recreation of the storied goto10 function
 *
 * uses U+29F8 (big solidus) and U+29F9 (big reverse solidus)
 * for the slashes since it better fills the line - this appears
 * to screw up microsoft edge and chrome (at least on a surface go)
 * but firefox holds true.
 * 
 * i tried normal / and \ but the word wrap was breaking along with
 * unwanted line spaces, etc.  so the above currently seems the lesser
 * of evils here.
 * 
 */

setInterval(function () {Math.random() > 0.49 ? document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧸') : document.getElementById("goto10").insertAdjacentHTML("beforeend", '⧹');}, 1);