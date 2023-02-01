
 let sum = -(2**53)
 function hourglassSum(arr) {
   console.log(arr)
 
 const allSum = (arr,i,n)=>{
 
   let pl = arr[i][n-2]+arr[i][n-1] +arr[i][n]
   let pl1 =  arr[i+1][n-1]
   let pl2 = arr[i+2][n-2]+arr[i+2][n-1] +arr[i+2][n]
   return (pl+pl1+pl2)
 
 } 
 
     for(let i=0; i<=arr.length-3;i++){
   let pl = arr[i][0]+arr[i][1] +arr[i][2]
   let pl1 =  arr[i+1][1]
   let pl2 = arr[i+2][0]+arr[i+2][1] +arr[i+2][2]
 
   // allSum()
 
   let pl21 = arr[i][1]+arr[i][2] +arr[i][3]
   let pl12 =  arr[i+1][2]
   let pl22 = arr[i+2][1]+arr[i+2][2] +arr[i+2][3]
 
 
 
   let pl31 = arr[i][2] +arr[i][3] + arr[i][4]
   let pl32 =  arr[i+1][3]
   let pl33 = arr[i+2][2]+arr[i+2][4] +arr[i+2][3]
 
 
   let pl41 = arr[i][3] +arr[i][4] + arr[i][5]
   let pl42 =  arr[i+1][4]
   let pl43 = arr[i+2][3]+arr[i+2][4] +arr[i+2][5]
 
  
 
   // let all3 =pl+pl1+pl2 
   let all1 =pl21+pl12+pl22 
   let all2 =pl31+pl32+pl33 
   let all4 =pl41+pl42+pl43 
   let all3 =allSum(arr,i,2)
 
   let all =  Math.max(all3,all1,all2,all4)
      if( all > sum ) sum=all
   }
 }
 

let arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]
hourglassSum(arr) 