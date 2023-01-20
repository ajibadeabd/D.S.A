let ss = ''
let closestNumber = (numbers)=>{
    numbers = numbers.sort((a,b)=>{
      // console.log({a,b})
      return a-b})
   //  console.log(numbers)
let dif = numbers[1] - numbers[0]
for(let i=0;i<numbers.length-1;i++){
   if((numbers[i+1] - numbers[i])<dif){
      ss=numbers[i] + " " + numbers[i+1] + " "
      dif = numbers[i+1] - numbers[i]
   } else if((numbers[i+1] - numbers[i])==dif){
      ss+=numbers[i] + " " + numbers[i+1] + " "
   }
}
return dif
}
console.log(
// closestNumber([-5 ,15 ,25, 71 ,63,93 ,101])

closestNumber([-59, -36, -13, 1 ,-53, -92 ,-2, -96, -54, 75])

 )
 
 