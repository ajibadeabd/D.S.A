function beautifulDays(l, j, k) {
    // Write your code here
    // console.log(i,j,k)
    let ret=0
    for(let i=l;i<=j;i++){
        // console.log()
        let rev = Number(String(i).split("").reverse().join(""))
        let res = Math.abs(((i - rev)/k))
        if(res>0) ret++
    }
    console.log(ret)
    return ret


}

// function beautifulDays2(l, j, k) {
//     // Write your code here
//     // console.log(i,j,k)
//     let ret=0
//     let days={}
//     for(let i=l;i<j;i++){


//     }
//         for(let i=l;i<j;i++){
//         // console.log()
//         // let res = String(i).split("").reverse().join("")
//         let res = (i+ -String(i).split("").reverse().join(""))/k
//     console.log(res)

//         if(res>0) ret++
        
//     }
//     console.log(ret)


// }



beautifulDays(13,45,3)
// beautifulDays(20,23,6)
// beautifulDays2(20,23,6)

// console.log(9,( 39- 93)/3)