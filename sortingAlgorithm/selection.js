


// let aa = [29,72,98,13,87,66,52,51,36];

// let temp=aa[0] ,index = 0
// for(let i = 1;i<aa.length;i++){
//     for(let j = i;j<aa.length;j++){
//         if(aa[j] < temp){
//             temp=aa[j]
//             index=j
             
//         }  

//     }
//     if(aa[i-1]>aa[index]){
//         ;[aa[i-1],aa[index]] = [temp,aa[i-1]]
//         temp=aa[i+1]
//     }
// }
// console.log(aa)

// let a = [29,72,98,13,87,66,52,51,36];


// for(let i = 0;i<a.length-1;i++){
// let   index = i
//     for(let j = i+1;j<a.length;j++){
//         if(a[j] < a[index]){
//             index=j
//         }  
//     }
// if(i!=index){
//     ;[a[i],a[index]] = [a[index],a[i]]
// }
// }
// console.log(a)





function max (arr,num){
    if(num>arr.length){
return null
    }

    let max = -Infinity
    for(let i = 0;i<arr.length-num+1; i++){
     let   temp = 0
    for(let j = 0;j<num; j++){
        temp+=arr[i+j]
    }
    if(temp>max){
        max=temp
    }

    }
    return max
}
console.log(
max([1,2,3,4,5,6,7,8,9,11],6))


function max(arr, num) {
    if (num > arr.length) {
      return null;
    }
    let max = -Infinity;
    let currentSumOf3 = 0;
  
    for (let i = 0; i < num; i++) {
      currentSumOf3 += arr[i];
    }
    for (let i = 1; i < arr.length - num + 1; i++) {
      currentSumOf3 = currentSumOf3 - arr[i - 1] + arr[num + i - 1];
      if (max < currentSumOf3) max = currentSumOf3;
    }
    return max;
  }
max([1,2,3,4,5,6,7,8,9,11],6)