

function maxDifference(px) {
    const d = px.map((p,j)=>{
        if(j!=0){
            return px.slice(0,j)
        }
    }).map((n,i,ne)=>{
        if(n){
        let cur = ne[i][ne[i].length-1]
        let s = ne[i].filter((k)=>cur>k).sort((a,b)=>b-a)
        if(!isNaN(cur - s[s.length-1])){
            return (cur - s[s.length-1])
        }
        return 
        }
    }).filter((nnn)=>nnn!=undefined).sort((a,b)=>b-a)[0]
    
    console.log(d)
}

maxDifference(
 [2, 3, 10, 2, 4, 8, 1]
// [ 10, 8, 7, 6, 5 ]

)



