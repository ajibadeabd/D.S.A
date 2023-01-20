let c = 0

function insertionSort(array) {
    if(array.length<2) return array

    const center = Math.floor(array.length/2)
    let left  = insertionSort(array.slice(0,center))
    let right  = insertionSort(array.slice(center))
    // console.log(firstHalf,secondHalf)
    
    // return merge2(left, right)
    let sortedArr = [] // the sorted items will go here
    let i = j = 0
    while ((left.length + right.length )!==(i+j)) {
    if (left[i] <= right[j] && left[i] && right[j]) {
        sortedArr.push(left[i])
        i++
      } else if( left[i] > right[j] && left[i] && right[j]){
        sortedArr.push(right[j])
        j++
      }else if( left[i] && !right[j] && left[i]){
        sortedArr.push(left[i])
        i++

      }else if( right[j] && !left[i] && right[j]){
        // sortedArr.push(right[j])
        // j++
      }
    }
    c++

    return [...sortedArr]

}

function merge2(left, right) {
    let sortedArr = [] // the sorted items will go here
    let i = j = 0
    while ((left.length + right.length )!==(i+j)) {
      
    if (left[i] <= right[j] && left[i] && right[j]) {
        sortedArr.push(left[i])
        i++
      } else if( left[i] > right[j] && left[i] && right[j]){
        sortedArr.push(right[j])
        j++
      }else if( left[i] && !right[j] && left[i]){
        sortedArr.push(left[i])
        i++

      }else if( right[j] && !left[i] && right[j]){
        sortedArr.push(right[j])
        j++
      }
    }
    return [...sortedArr]
  }
//  console.log( merge2([1,4,2,],[1,3,6]))
console.log(insertionSort([4,3,2,1]),c)

  