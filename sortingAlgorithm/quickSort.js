function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
console.log ( quickSort(left).concat([pivot], quickSort(right)))
    return quickSort(left).concat([pivot], quickSort(right));
  }

   (

    quickSort([9,5,3])
  )



  let c = [1,2,2,2,3,3,5,6,7]
let res =   c.reduce((prev,curr)=>{
    prev[0][curr]  = ++prev[0][curr] || 1
    prev[0][curr]> prev[1]? prev[1]= prev[0][curr]:null
    return prev
},[{},0])
console.log(res[1])