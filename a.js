 
// // // let m = 'bcba';
// // // let sI = [1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0];
// // // let eI = [3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0];
// // // let sub = [2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0];
 
// // // let time1 = performance.now();
// // // let loopTime1 = 0;
// // // let res = ''; 
// // // for (let i = 0; i < eI.length; i++) {
// // //   loopTime1++;

// // //   let z = sI[i];
// // //   let zx = eI[i];
// // //   for (let j = z; j <= zx; j++) {
// // //     res += m[j];
// // //   }
// // //   res+=" "
// // // }
// // // console.log(res);

// // // console.log('loop time taken =', `${performance.now() - time1} nano sec`, {loopTimes: loopTime1});

// // // // console.log(count);

// // // // for (let i = 0; i < m.split('').length; i++) {
// // // //   let res = '';
// // // // }
// // // let time = performance.now();
// // // let test = true;
// // // let t = {
// // //   next: 0,
// // //   currentIndex: 0,
// // //   firstIndex: 0,
// // // };
// // // let res2 = '';
// // // let loopTime = 0;
// // // while (test) {
// // //   loopTime++;
// // //   if (t.currentIndex < sI.length) {
// // //     if (t.firstIndex === 0) {
// // //       t.next = sI[t.currentIndex];
// // //       t.firstIndex = 1;
// // //     }
// // //     if (t.next <= eI[t.currentIndex]) {
// // //       res2 += m[t.next];
// // //       t.next++;
// // //     } else {
// // //       res2 += ' ';
// // //       t.currentIndex++;
// // //       t.firstIndex = 0;
// // //       t.next = 0;
// // //     }
// // //   } else {
// // //     test = false;
// // //   }
// // // }
// // // console.log(res2);
// // // console.log('loop time taken =', `${performance.now() - time} nano sec`, {loopTimes: loopTime});



// // // let s = performance.now()





// // // let ss = performance.now()

// // // console.log(ss-s)
// // //   console.log(process.hrtime.bigint() +4000000000n ,process.hrtime.bigint())
// // let start = process.hrtime.bigint()
// // function removeNb (n) {
// //   if(n===1) return null;

// //   let sum = (n * (n+1))/2;

// //   let retArr = [];
// //   let a = n;
// //   while( a !== 0){
// //     let b = n;
// //     while( b !== 0){
// //        if(b != a && a*b == ((sum - b) - a) ){
// //          retArr.push([a,b]);
// //        }
// //        b--;
// //     }
// //     a--;
// //   }
// //   retArr.sort( (a,b) => a[0] - b[0]);
// //   return retArr;
// // } 

// // console.log(
// // removeNb(933))
// // let start2 = process.hrtime.bigint()
// // console.log(start2-start)


// // let start3 = process.hrtime.bigint()

// // function removeNb (n) {
// //   let retArr = [];
// //   let a = 1;
// //   let b = 0;
// //   let sumN = (n * (n+1))/2; 

// //   while( a <= n){
// //     b = parseInt((sumN - a) / (a + 1));
// //     if( b < n && a*b == ((sumN - b) - a) ) 
// //       retArr.push([a,b]);
// //     a++;
// //   }
// //   return retArr;
// // }


// // console.log(
// //   removeNb(26))
  
// // let start4 = process.hrtime.bigint()
// // console.log(start4-start3)

// let n = 100;
// let sumOfNum = n => {
//   return (n * (n + 1)) / 2;
// };
// let sum = sumOfNum(n);
// let response = [];
// for (let i = 1; i <= 26; i++) {
//   let s = (sum - i) / (i + 1);
//   if (s % 1 == 0 && s * i == sum - s - i && s <= n) {
//     response.push([s, i]);
//   }
// }

// // console.log(response)
// let s1 = process.hrtime.bigint() 

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j
//       }
//       console.log(arr)
//     }
//     if (lowest !== i) {
//       // Swap
//       ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//     }
//   }
//   return arr
// }
// // console.log(
  
//   selectionSort([3, 5, 1, 2])
  
// let s11 = process.hrtime.bigint() 

// console.log(s11-s1)
//   // ,"lll") // [1, 2, 3, 5]


// console.log("test")
// let s2 = process.hrtime.bigint() 

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // SWAP
//         ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//       console.log(arr)

//     }
//   }
//   return arr
// }
// // console.log(
//   bubbleSort( [3, 5, 1, 2])
//   // ) // [1, 2, 2, 3]

// let s21 = process.hrtime.bigint() 

// console.log(s21-s2)
// // console.log("test")
// let s3 = process.hrtime.bigint() 
// let s = [3, 5, 1, 2]
// for (let i = 0; i < s.length; ) {
// if (s[i] > s[i + 1]) {
//     s[i,i+1]= s[i+1,i]
//     i--;
// } else {
//     i++;
// }
// // console.log(s)
// }
// let s31 = process.hrtime.bigint() 

// console.log(s31-s3)
// // console.log(s)

let s= [1,2,"d","a",1,0,"3"]

let numbers = []
let strings = []

let sort = ()=>{

for(let i=0; i<s.length-1;i++){
        if(isNaN(s[i])) {
          strings.push(s[i])
        }else{
          numbers.push(s[i])
        }
}
return [...numbers,...strings]
}
console.log(
  sort()
)