function minimumSwaps(numbers) {
    let numberIndex = numbers.reduce((initial,current,i)=>{
      initial[current] =i
      return initial
    },{})
    return  numbers.reduce((swap,element,i) => {
      if(element!=i+1){
        let elementIndex = numberIndex[element]
        let otherElem = numberIndex[i+1]
        numbers[i]=numbers[otherElem] // swap the element with intended element 
        numbers[otherElem] = element
        numberIndex[i+1] = elementIndex // update index after swapping
        numberIndex[element] = otherElem // update index after swapping
        swap++
      }
      return swap
    },0);
    }