// let c = 0



// function insertionSort1(array) {
//     if(array.length<2) return array

//     const center = Math.floor(array.length/2)
//     let left  = insertionSort1(array.slice(0,center))
//     let right  = insertionSort1(array.slice(center))
//     // console.log(firstHalf,secondHalf)
    
//     // return merge2(left, right)
//     let sortedArr = [] // the sorted items will go here
//     let i = 0,j = 0
//     while ((left.length + right.length )!==(i+j)) {
//     c++
//     // console.log(left,right,c)
//     if (
//         left[i] <= right[j] 
//         && left[i] !==undefined 
//         && right[j]!==undefined
//         ) {
//         sortedArr.push(left[i])
//         i++

//       } else if(
//          left[i] >= right[j] 
//          && left[i]!==undefined 
//          && right[j]!==undefined
//          ){
//         sortedArr.push(right[j])
//         j++
//       }else if( left[i]!==undefined && !right[j]  ){
//         sortedArr.push(left[i])
//         i++

//       }else if( right[j]!==undefined && !left[i]  ){
//         sortedArr.push(right[j])
//         j++
//       }

// if(i==left.length && j==0){
//     console.log("ddd")

// }else{
//     console.log("aaa")

// }

//     }

//     return [...sortedArr]

// }

// console.log(
//     insertionSort1(
//         [1,2,3,4,5,6,7,8]
//         ),c
//     )
// console.log(

//     // insertionSort([6,5,4,3,2,1])
//     )
 

// //     insertionSort([1, 1, 1, 2 ,2])

// function insertionSort(arr) {
//     // Write your code here
//     let answer = 0;
//     function merge(i, mid, j) {
//         const L = arr.slice(i, mid+1);
//         const R = arr.slice(mid+1, j+1);
//         let l = 0;
//         let r = 0;
//         const lenL = L.length;
//         const lenR = R.length;
//         L.push(Number.POSITIVE_INFINITY);
//         R.push(Number.POSITIVE_INFINITY);
         
//         for(let k = i; k < j + 1; k++) {
//             if(L[l] <= R[r]) {
//                 arr[k] = L[l];
//                 l++;
//             }else{
//                 arr[k] = R[r];
//                 answer += lenL - l;
//                 r++;
//             }
//         }
//     }
    
//     function mergeSort(i,j){
//         if( j - i <= 0) return;
//         const mid = Math.floor((j+i)/2);
//         mergeSort(i, mid);
//         mergeSort(mid+1, j);
//         merge(i, mid, j);
//         // console.log({i,mid,j})

//     }
    
//     mergeSort(0, arr.length -1)
//     console.log(arr)
//     return answer
// }




const s = [3,2,1]
// const s = [-1,22,18,16,-1,0,34,2,-1]
let count = 0
function merge(right,left){
    let r =0,l=0;
    let newArray  = []
    while((r+l)!=(right.length+left.length)){
        if(right[r]==left[l]){
            newArray.push(right[r])
            newArray.push(left[l])
            r++
            l++
            // count++

        }else if(right[r]<left[l]){
            newArray.push(right[r])
            r++
        }
        else if(right[r]>left[l]){
            newArray.push(left[l])
            l++
            console.log(left.length)
            count = count + l
        }
        else if(right[r]!==undefined && !left[l]){
            newArray.push(right[r])
            r++
        }
        else if(left[l]!==undefined && !right[r]){
            newArray.push(left[l])
            l++
        }
    }
    return newArray
}

function mergeSort(s){

    if(s.length===1) return s
    let mid  = Math.floor(s.length/2)
    let left = mergeSort(s.slice(mid))
    let right =  mergeSort(s.slice(0,mid))
    // console.log(left,right)
    return merge(right,left)
}

console.log(mergeSort(s),count)