function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
  
  console.log(
  merge([1, 4,8], [2, 6, 9])) // [1, 2, 4, 6, 9]



  function merge2(left, right) {
    let sortedArr = [] // the sorted items will go here
    let i = j = 0
    while ((left.length + right.length )!==(i+j)) {
      if (left[i] < right[j]) {
        sortedArr.push(left[i])
        i++
      } else {
        sortedArr.push(right[j])
        j++
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr]
  }
  
  console.log(
  merge2([1, 3, 4, 5, 6, 8], [4, 6, 8, 9, 11])) // [1, 2, 4, 6, 9]


  //the above code only works for a sorted array


// // // let p = 0
// // //   function mergeSort(arr) {
// // //     p++
// // //     // Base case
// // //     if (arr.length <= 1) return arr
// // //     let mid = Math.floor(arr.length / 2)
// // //     // Recursive calls
// // //     let left = mergeSort(arr.slice(0, mid))
// // //     let right = mergeSort(arr.slice(mid))
// // //     console.log(arr.slice(0, mid),arr.slice(mid),{p})
// // //     return merge(left, right)
// // //   }
// // // console.log(  mergeSort([3, 5, 8, 5, 99,2, 1])) // [1, 3, 5, 5, 8, 99]
 


// // //   // l
// // // let m= [4, 6, 3, 1, 2];
// // // m.sort((a,b)=>{
// // //   // console.log(m)
// // //   return a-b})

// // //   console.log(m)

// // let s = '{()}'
// // // let s = '(){}'
// // // let arr = s.split("'").join().split("")
// // let left = s.slice(s.length/2)
// // let right = s.slice(0,s.length/2)
// // if(left === right.split("").reverse().join){
// //   console.log("f")
// // }

// // console.log(left,right)




// let s  = [ 1,2,3,4,5,6,6]


// console.log(s[0,1,2])
// let a = s.splice(1,1,9)
// // console.log(s,a)


// // let  isValid = ''
let  isValid = '({{}}{(){}}){}'

const dd = (isValid)=>{

}

dd(isValid) 
 

const isValid2 = (s) => {
  const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
    // console.log(stack)
  }
  
  return stack.length === 0;
};
const isValid3 = (s) => {
  const stack = [];
  let init = {
    "}":"{",
    "]":"[",
    ")":"(",
  }
  let end = {
    "{":"}",
    "[":"]",
    "(":")",
  }
  for (let i = s.length-1; i >=0; i--) {
    const top = stack[stack.length - 1];
    if ( init[s[i]] ) {
      stack.push(s[i]);
    } else if(end[stack.pop()]===top && stack.length !== 0){
      return false;
    }
  }
  
  return stack.length === 0;
};

console.log( isValid2(isValid))
console.log( isValid3(isValid))



let ss = [1,3,5]
let s = [0,6,7]
let sort2Sorted =  ()=> {
  if(ss.length || s.length) return []
  let sort = []
while(ss.length && s.length){
  // if(ss)


}}

console.log(sort2Sorted())