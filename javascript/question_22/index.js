function migratoryBirds1(array){
  const ans= array.reduce((prev,curr)=>{
    prev[curr]= !prev[curr]? 1:prev[curr] +1
    return prev
  },{})
  return Object.entries(ans).sort((a, b) => b[1]-a[1])
}
 console.log(
migratoryBirds1([1,1,2,1,2,3,2,4,6,6])[0][0]

 )
 

function migratoryBirds(array){
  const ans= array.reduce((prev,curr)=>{
    prev[0][curr]= !prev[0][curr]? 1:prev[0][curr] +1
if(prev[0][curr]>=prev[1][1] ){
  prev[1] = [curr,prev[0][curr]]
  if(curr<prev[1][0]&&prev[1][0]!==0) prev[1][0]=curr
}
    return prev
  },[{},[0,0]])
  return ans[1][0]
}
 console.log(
migratoryBirds([1,1,2,2,3,2,4,6,6,1])

 )
 