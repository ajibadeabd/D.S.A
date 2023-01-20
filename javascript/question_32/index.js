 
let s =[1 ,1 ,1 ,2 ,3 ,5]
let a  = 0
let b  = 0
 s.sort((a,b)=>a-b)

for(let i=0;i<s.length-2;i++){
    if(s[i] + s[i+1]>s[i+2]){
        if(a<s[i] + s[i+1]){
            a= s[i] + s[i+1]
            b=[s[i] , s[i+1] , s[i+2]]
        }
    }
}
console.log(b==0?[-1]:b)
