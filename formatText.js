function formatText(text) {
    let words = text.split(" ");
    var newWords = []
    for (let i in words) {
        if (!newWords.includes(words[i])) {
            newWords.push(words[i])
        }
    }
    return newWords.join(" ")
  }
  

  /// optimized code 
  function formatText(text) {
    let hashMappedString = text.split(" ").reduce((previousState,currentElement)=>{
      previousState[currentElement]  = currentElement
      return previousState
    },{})
    console.log(hashMappedString)
  
    var newWords = ""
    for (let word in hashMappedString) {
            newWords+=` ${word}`
        console.log(word)
    }
    return newWords.trim() // to remove the space in the beginning
  }
  console.log(formatText("aaaa bbbb cccc bbbb cccc dddd eeee")) // this code has the time complexity of O(n) + O(n) which is O(2n) which is O(n) by ignoring the constant
  
  console.log(Math.min(1,2,4,5))