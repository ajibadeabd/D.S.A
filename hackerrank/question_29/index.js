
function marcsCakewalk(calorie) {
    return calorie.sort((a,b)=>b-a).reduce((prev, curr,i)=>{
        prev += ((2**i) * curr)
        return prev
     },0)
    
    }
    