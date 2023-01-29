

function arrayManipulation(n, s) {
let array = new Array(n+1).fill(0)
for(let i=0;i<s.length;i++){
  let firstIndex = s[i][0]
  let lastIndex = s[i][1] +1
  array[firstIndex] =  array[firstIndex] + s[i][2]
  array[lastIndex] =  (array[lastIndex] || 0) - s[i][2]
  console.log(array)
}

const highest = array.reduce((ele,curr,i)=>{
  array[i] = array[i] + (array[i-1] || 0)
  if(ele<array[i]) ele = array[i]
  return ele
},Number.MIN_VALUE)
return highest
}
let array = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]

arrayManipulation(5,array)


function arrayManipulation2(n, s) {
    // Write your code here
    let array = new Array(n+1).fill(0)
for(let i=0;i<s.length;i++){
  let ele = s[i]
  for(let i=ele[0];i<=ele[1];i++){
    array[i] = array[i] + ele[2]
  }
}
return array.sort((a,b)=>b-a)[0]

}
let array2 = [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]

arrayManipulation2(5,array2)



THE FIRST SOLUTION HAS A TIME COMPLEXITY OF O(n)
THE SECOND SOLUTION HAS A TIME COMPLEXITY OF O(n*m)