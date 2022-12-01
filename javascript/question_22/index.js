function migratoryBirds(array){
  const ans= array.reduce((prev,curr)=>{
    prev[curr]= !prev[curr]? 1:prev[curr] +1
    return prev
  },{})
  return Object.entries(ans).sort((a, b) => {
    return b[1]-a[1]
  })[0][0]
}
 console.log(
migratoryBirds([1,1,2,1,2,3,2,4,6,6])

 )