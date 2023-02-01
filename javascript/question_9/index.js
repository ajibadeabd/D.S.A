
function rotLeft(array, d) {
    // Write your code here
let remove  = array.slice(d)
let remain = array.slice(0,d)
 remove.push(...remain)
return remove 

}
