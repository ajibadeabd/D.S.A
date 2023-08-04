function twoStrings(s1, s2) {
    // Write your code here
    let hashedString = s1.split("").reduce((initial,current)=>{
        initial[current]=current
        return initial
    },{})
    
    for(let i=0;i<s2.length;i++){
        if(s2[i]===hashedString[s2[i]]){
            return "YES"
        }
    }
    return "NO"
}

twoStrings("holla","chaly")