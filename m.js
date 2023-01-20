
// let hash={
// e:"e",
//     a:"a",
    
//     b:"a",
//     b:"a"

// }


// let frequentWords = Object.keys(hash).sort((a, b) => {
//     if (hash[b] === hash[a]) {
//         return a.localeCompare(b);
//     } else {
//         return hash[b] - hash[a];
//     }
// });

// console.log(frequentWords)
// console.log("d".localeCompare("d"))

const arr = [3, 2, 1];

const response = arr.every((value, index, arr) =>{
    // return  value > arr[index + 1] || index === arr.length - 1}
    if(index+1===arr.length){
return true
    }
    return  value > arr[index+1] 
}
    );

console.log(response);