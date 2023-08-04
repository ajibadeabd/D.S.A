 
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let sign = {
        "positive":0,
        "zero":0,
        "negative":0,
    }
    const response = arr.map((num,index)=>{
        if( num<0){
            sign.negative+=1
        }
        else if(num=="0"){
            sign.zero+=1
        }else{
            sign.positive+=1
        }
    })
    console.log((sign.positive/arr.length).toFixed(6))
    console.log((sign.negative/arr.length).toFixed(6))
    console.log((sign.zero/arr.length).toFixed(6))
    

}
plusMinus([1,2,-3])