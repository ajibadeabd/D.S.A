

const bubble_Sort = (s) => {
    // let s= [3, 0, 2, 5, -1, 4, 1]
    let start =  performance.now();
for (let i = 0; i < s.length; ) {
  if (s[i] > s[i + 1]) {
      let a = s[i];
      s[i] = s[i + 1];
      s[i + 1] = a;
      i--;
  } else {
      i++;
  }

  }


return s
} 
  console.log( bubble_Sort([3, 0, 2, 5, -1, 4, 1]))

 

function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length - 1; i > 0; i--) {
      noSwaps = true
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          // SWAP
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
    return arr
  }
  console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1])) // [1, 2, 2, 3]{ j: 0 }
    