function minimumSwaps1(arr) {
    let swaps = 0;

    let address = arr.reduce((prev,curr,i)=>{ 
        prev[curr] = i
        return prev
    },{})
    for (let i = 0; i < arr.length-1 && arr[i]!==i; i++) {
if(i+1!=arr[i]){
    let numberToBeSwapped = arr[i] // number to be swapped
    let indexOfExpValue = address[i+1] // index of expected value
    arr[i] = arr[indexOfExpValue]
    arr[indexOfExpValue] = numberToBeSwapped
    address[arr[i]]=i  
    address[numberToBeSwapped]=indexOfExpValue
    swaps++
}
    }
    return swaps
}

console.log(minimumSwaps1([7, 1, 3, 2, 4, 5, 6]))
console.log(minimumSwaps1([2,3,1,5,4,6]))

  