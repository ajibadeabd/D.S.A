
function getTotalX(a, b) {
    // Write your code here
    const number = []
    // console.log(a,b)
    const d =b[0]/a[a.length-1]
    // console.log(d)
    let  arr = [ ]
    let isFactor = true
    let c = 0
    for(let i = a[a.length-1];i<=b[0];i++){
        // let s = a[a.length-1]+ (i * d)
        // console.log(i)
        for(let j = 0; j<a.length; j++){
            if(i%a[j]!=0){
                isFactor = false
                break;

            }
        }
        for(let k = 0; k<b.length; k++){
            if(i%k!=0){
                isFactor = false
                break;

            }
        }
        if(isFactor){
            c++

            //console.log(i+': Ok')
        }
        // arr.push(s)
    }
    console.log(c)



}
getTotalX([ 2, 4 ] ,[ 16, 32, 96 ])