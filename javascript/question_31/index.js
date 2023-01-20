 

 let arr = [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ]
 let k=3
 arr.sort((a,b)=>{
     return b[0]-a[0] 
 })
 let response = arr.reduce((prev,curr)=>{
 
     if(curr[1]==0){
         prev.luck +=   curr[0]
     }
     else if (curr[1]==1 && k!=0){
         prev.luck +=   curr[0]
         k--
     }else{
         prev.luck -=   curr[0]
     }
 return prev
 
 },{luck:0})
 
 console.log(response) 