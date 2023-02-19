/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    
    let rev = String(+String(num).split("").reverse().join("")).split("").reverse().join("")

    return(rev==num)
};