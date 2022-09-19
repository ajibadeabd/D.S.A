
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    let filter = bill.filter((b,i)=>i!=k)
    const sum = Math.abs((filter.reduce((a,b)=>a+b)/2)-b)
    let res= sum==0?"Bon Appetit":sum
    console.log(res)
}

let total = 0
function bonAppetit2(bill, k, b) {
    for(let i=0; i<bill.length;i++){
        if(i!=k) total+=bill[i]
    }
    let sum = Math.abs((total/2)-b)
    let res= sum==0?"Bon Appetit":sum
    console.log(res)


}

    bonAppetit([3 ,10 ,2 ,9], 1, 12);
    bonAppetit2([3 ,10 ,2 ,9], 1, 7);