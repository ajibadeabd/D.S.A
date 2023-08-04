
function angryProfessor(k, a) {
    // Write your code here
    let ans = a.reduce((pre,curr,i)=>{

        if(a[i]<=0){
            pre++
        }
        return pre
    },0)
    console.log(ans)
    return ans>=k?"NO":"YES"
}
console.log(
angryProfessor(4,[-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]))