 
function timeConversion(s) {
    // Write your code here
    const time = s.slice(-2)
   return s.split(":").map((num,i,arr)=>{
        if(arr[arr.length-1].slice(-2)=="PM" && i==0)
            {
            return  num<12?+num+12:num
        }else if(arr[arr.length-1].slice(-2)=="AM" && i==0)
            {
                let s = String(+num-12).length==1?"0".concat(String(+num-12)):String(+num-12)
            return  num>=12?s:num
        }
        else if(i==(arr.length-1))
            return num.slice(0,2)
           
        return num
    }).join(":")



}

console.log(timeConversion("12:05:00AM"))