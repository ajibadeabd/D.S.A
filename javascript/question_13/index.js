
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let Na= 0
    let No= 0
    let it = apples.length > oranges.length?apples.length:oranges.length
    for(let i = 0;i<it;i++){
        if(apples[i] && a+apples[i]>=s && a+apples[i] <= t){
            Na++
        }
        if(oranges[i] && b+oranges[i]>=s && b+oranges[i] <= t){
            No++
 
        }
    }
    console.log(Na)
    console.log(No)
 } 
 // console.log(countApplesAndOranges(2,3 ,1 ,5 ,[ 2], [ -2 ]))
 // console.log(countApplesAndOranges(7 ,10 ,4 ,12 ,[ 2,3,-4 ], [ 3,-2,-4 ]))
 // console.log(countApplesAndOranges(7 ,11 ,5 ,15 ,[ -2, 2, 1 ], [ 5, -6 ]))
  countApplesAndOranges(7 ,11 ,5 ,15 ,[ -2, 2, 1 ], [ 5, -6 ])
 
 
 function countApplesAndOranges2(s, t, a, b, apples, oranges) {
     // Write your code here
 
     const app=  apples.filter((apple)=> a+apple >=s && a+apple <= t)
     const ora=  oranges.filter((orange)=> b+orange >=s && b+orange <= t)
     console.log(app.length)
     console.log(ora.length)
 
  }
 // console.log(countApplesAndOranges2(2,3 ,1 ,5 ,[ 2], [ -2 ]))
  
 //  console.log(countApplesAndOranges2(7 ,10 ,4 ,12 ,[ 2,3,-4 ], [ 3,-2,-4 ]))
 //  console.log(countApplesAndOranges2(7 ,11 ,5 ,15 ,[ -2, 2, 1 ], [ 5, -6 ]))