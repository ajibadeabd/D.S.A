



let array =[21,9,7,34,5]
let  smallestNumber =  Math.floor((array.length-1)/2)
const sorted = array.sort((a,b)=>a-b).slice(0,smallestNumber)
const Bigsorted = array.sort((a,b)=>a-b).slice(-(array.length-smallestNumber ))
for(let i = 0; i<array.length;i++){
  console.log(i,1)
  if(i==0) i+2
   if( i!=0 && i!=1&& i%2==0){
    smallestNumber=smallestNumber-1
    Bigsorted.splice(i,0,sorted[smallestNumber])
  }
}


let m= 1
  Bigsorted.map((ar,i)=>{
  if(i==0 || i==1){
    m*=ar
  }else if(i%2==0){
    m*=(1/ar)
  }else{
    m*=ar
  }
}
)



console.log( m.toFixed(1))

