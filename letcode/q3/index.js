/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    
    let rev = String(+String(num).split("").reverse().join("")).split("").reverse().join("")

    return(rev==num)
};


/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return  num==0 ||  !!(num%10)
    };