 
let s =
[4,6,4,5,6,2,1]
// [2,1]
// // [
// //    1,2,3,1,2
// // // 5,5,2,1
// //   ]

// // let response = [1]
// // let total = 1
// // for(let i =1;i<s.length;i++){
// //     if(s[i]>s[i-1]){
// //             response.push(response[response.length-1]+1)
// //             total+=response[response.length-1]
// //         }else  if(  s[i]==s[i-1]){
// //             response.push(
// //                 response[response.length-1]==1?1:response[response.length-1]-1
// //                 )


// //         }else  if(   s[i]>s[i+1] ){
// //         response.push(response[response.length-1]-1)
// //         total+=response[response.length-1]

// //     }else{
// //         response.push(1)
// //         total++
// //     }
// // }

// // console.log(response)
// // console.log(total)

// // // let res = s.reduce((prev,b,i)=>{
// // //     if(b>s[i-1]){
// // //         if(!prev[0].length){
// // //             prev[0].push(1)
// // //             prev[1]+= prev[0][prev[0].length-1]
// // //         }else{
// // //             prev[0].push(prev[0][prev[0].length-1]+1)
// // //             prev[1]+= prev[0][prev[0].length-1]
// // //         }
// // //     }else  if(  s[i+1] <  s[i+2]  ){
// // //         // prev[0].push(1)
// // //         prev[0].push(prev[0][prev[0].length-1]-1)

// // //         prev[1]+= prev[0][prev[0].length-1]
// // //     }else{
// // //         prev[0].push(1)

// // //     }
// // //     return prev
// // // },[[],0])

// // // console.log(res)




// // function candies(n, arr) {
// //     // Write your code here
// //  const results =Array(arr.length).fill(1);
// // for(let i=1;i <arr.length;i++){
// //     if(arr[i] > arr[i-1]){
// //         results[i] = results[i-1] + 1
// //     }     
// // }
// // arr.reverse();
// //      results.reverse();
// //      for(let i=1;i <arr.length;i++){
// //     if(arr[i] > arr[i-1] && results[i] <= results[ i-1]){
// //         results[i] = results[i-1] + 1
// //     }     
// // }
// //  console.log(results)
// // return results.reduce((a,sum) => sum +a);
// // }

function candies(n, arr) {
    let c1 = getCandyCounts(arr);
    let c2 = getCandyCounts(arr.reverse());
    return c2
    .map((c,i) => Math.max(c, c1[i]))
    
    .reduce((a,b) => a + b);
}

function getCandyCounts(arr) {
    let c = [1], n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let a = arr[i];
        let b = arr[i - 1];
        if (a > b) {
            c.push(c[i - 1] + 1);
        } else {
            c.push(1);
        }
    }
    return c;
}
console.log(
candies(1,s))


{

let s =
// [
//     1, 2, 1, 2, 1,
//     2, 3, 4, 3, 1
//   ]
[4,6,4,5,6,2]

let res = []
for(let i=0;i<s.length;i++){
    if(i==0){
        if(s[i]>s[i+1]){
            res.push(2)
        }else{
            res.push(1)
        }
    }else{
        let length = res.length

        if(s[i]>s[i-1]){
            res.push(res[length-1]+1)
            // console.log(s[i])

        }else if(s[i]==s[i-1]){
            let lastNumber = res[length-1]
           let x =  lastNumber==1? ++lastNumber:--lastNumber
            res.push(x)
        }else if(s[i]<s[i-1] && s[i+1]!==undefined ){
            if(s[i]>s[i+1] ){
            res.push(2)

            }else{
            let lastNumber = res[length-1]
           let x =  --lastNumber 
           res.push(x)}
        }else{
            res.push(1)
        }

    }

}
console.log(res)
console.log(res.reduce((a,b)=>a+b))

}