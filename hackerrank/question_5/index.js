function birthdayCakeCandles(candles) {
    // Write your code here
    
    return candles.sort((a,s)=>a-s).filter((num)=>num==candles[candles.length-1]).length
    

}
console.log(birthdayCakeCandles([22,121,55,66,121]))
