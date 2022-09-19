function birthday(s, d, m) {
    // console.log(s,d,m)
    let time = 0
    if(s.length==1){
        if(d==s[0]) return m ==1?1:0
        return 0
    }

    let count = 0
    for(let i=0; i<s.length;i++){
        // console.log(i)
       let  sum = 0
    for(let j=i; j<m+i;j++){
        sum = sum + s[j]
    }
    if(sum==d){
        count++
    }
    }
    // console.log(count)

    return count

}
// const response =  console.log(birthday([4],4,1))
// const response =  birthday([1 ,2 ,1 ,3 ,2],3,2)
const response =  console.log (birthday([
    2 ,3 ,4 ,4 ,2 ,1 ,2 ,5 ,3 ,4 ,4 ,3 ,4 ,1 ,3 ,5 ,4 ,5 ,3 ,1 ,1 ,5 ,4 ,3 ,5 ,3 ,5 ,
    3 ,4 ,4 ,2 ,4 ,5 ,2 ,3 ,2 ,5 ,3 ,4 ,2 ,4 ,3 ,3 ,4 ,3 ,5 ,2 ,5 ,1 ,3, 1 ,4 ,2 ,2 ,
    4 ,3 ,3 ,3 ,3 ,4 ,1 ,1 ,4 ,3 ,1 ,5 ,2 ,5 ,1 ,3 ,5 ,4, 3, 3, 1, 5, 3, 3 ,3 ,4 ,5, 2],26,8)
)