
function jumpingOnClouds(c) {
    let  count = 0
    let  position = 0
    c.map((_,i)=>{
        console.log(i)
        if(position==i){
            if(c[i+2]==0){
            count++
            position=i+2
        }else if (c[i+1]==0){
             count++
            position=i+1
            
        }
        }
    })
return count
}
// console.log(jumpingOnClouds([0,1,0,0,0,1,0]))
// console.log(jumpingOnClouds([0 ,0 ,1 ,0 ,0 ,1 ,0]))


function jumpingOnClouds2(c) {
    let  count = 0
    let  position = 0

    for(let i =0;i<c.length;i++){
        console.log(i)
        if(position==i){
            if(c[i+2]==0){
            count++
            position=i+2
            i++
        }else if (c[i+1]==0){
             count++
            position=i+1
            
        }
        }
    }
   
return count
}
// ==> O(answer +  1) better than O(n), but still pertially still O(n) ,it saves you time for iteration by skipping some iteration time
// console.log(jumpingOnClouds2([0,1,0,0,0,1,0]))
console.log(jumpingOnClouds2([0 ,0 ,1 ,0 ,0 ,1 ,0,0,0,1,0]))  
// console.log(jumpingOnClouds2([0 ,0 ,1 ,0 ,0 ,1 ,0]))  
