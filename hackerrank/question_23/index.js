 

function  dayOfProgrammer(year){ 

   
let dayBefore = 243
if(year>=1700 && year<= 1917&&year%4==0){
    dayBefore++
}else if(year==1918){
  dayBefore=dayBefore-13
}
else if(year%400==0){
  console.log(year%4)
  dayBefore++
}else if(year%4==0 && year%100!=0){
  dayBefore++
}
  let diff = 256-dayBefore
  return `${diff}.09.${year}`
}
 console.log(
 dayOfProgrammer(1918)

 )
 