
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) {
        return "NO";
    }
    let dis =   x1-x2
    let dat =   v2-v1
    let unknown = Math.round(dis/dat)
    return (x1 + (v1*unknown)) == (x2 +(v2*unknown)) && unknown>0 ?"YES":"NO"
}
console.log(kangaroo(1,2,3,4))
// console.log(kangaroo(1817 ,9931, 8417 ,190))
