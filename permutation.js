// // let permArr = [];
// // let usedChars = [];

// // function permute(chars) {
// //     // const chars = input.split("");
// //     console.log({chars})
// //     for (let i = 0; i < chars.length; i++) {
// //         const ch = chars.splice(i, 1);
// //         usedChars.push(ch);
// //         if (chars.length === 0) {
// //             permArr[permArr.length] = usedChars.join("");
// //         }
// //         permute(chars);
// //         chars.splice(i, 0, ch);
// //         usedChars.pop();
// //     }
// //     return permArr
// // };
// // console.log(
// // permute([1,2,3,4,5]))
// // function permute(arr, permutations = []) {
// //     if (!arr.length) {
// //       return [permutations];
// //     }
// //     let result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
// //       result = result.concat(permute(remaining, permutations.concat(arr[i])));
// //     }
// //     return result;
// //   }
// let a =0
//   function permute(arr, permutations = '') {
//     if(arr.length===0){
// // console.log(permutations)
        
//     } 
//     for(let i=0;i<arr.length;i++){
//         a++
//         let aa = arr.substring(0,i) + arr.substring(i+1)
//         // let aaa = arr.substring(i+1)
//         console.log(aa)
//         // console.log(a)

//         permute(aa,permutations+arr[i])
       
// }
// return true

// }
  
// let arr = "123"
// // let arr = [1, 2, 3];
// let permutations = permute(arr);
// console.log(permutations);

