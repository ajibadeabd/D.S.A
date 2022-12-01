let arr = [3,9,27]
arr = arr.sort((a,b)=>a-b)
let  response = arr.filter((a)=>{return a==arr[0]})
arr = arr.filter((a)=>{return a!==arr[0]})
let numberOfSplitting = 0
let all=true
while(all){
        if(arr.length==0){
            all=false
        }
    if(arr[arr.length-1]%2==0){
        let aa =arr[arr.length-1]/2
        if(aa==response[0]){
            arr.pop()
            response.push(aa)
            response.push(aa)
        }else{
            arr.pop()
            arr.push(aa)
            arr.push(aa)
        }
        numberOfSplitting++
    }else if(arr[arr.length-1]%2!=0 && arr.length!==0){
        let aa =Math.floor(arr[arr.length-1]/2)
        if(aa==response[0]){
            response.push(aa)
            arr.pop()
            arr.push(aa+1)
        }else{
            arr.pop()
            arr.push(aa)
            arr.push(aa+1)
        }
        numberOfSplitting++
    }
    if(arr.length==0){ 
        all=false
    }
}

console.log(response,numberOfSplitting)