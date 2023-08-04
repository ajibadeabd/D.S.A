function hack(word){
  let hackerrank= "hackerrank";
  
      let position =  0 
      for(let i = 0 ; i<word.length;i++){
          if( hackerrank[position] ===word[i]){
           position++
          }
      }
      return position===hackerrank.length?"YES":"NO"
  
  }
  console.log(
  hack("haacckkerrannkk"))
  
  
  console.log(
      hack("hackerworld"))