(s) {
    // Write your code here
 if (s.length % 2 !=0) return -1
    const mid = Math.floor(s.length/2)
    let left = s.slice(mid)
    let right = s.slice(0,mid)
    let firstHash = left.split("").reduce((a,b)=>{
        a[b] = ++a[b] || 1
        return a
    },{})
    let second= right.split("").reduce((a,b,i,arr)=>{
        if(!firstHash[arr[i]]){
            a++
        }else{
         firstHash[b]--
        }
        return a
    },0)
    return second

}
