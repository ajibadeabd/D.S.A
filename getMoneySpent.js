
let keyboard = [40,50,60]
let drive = [5,8,12]
let b = 60


 
let stuff = drive.length>keyboard.length?drive.length:keyboard.length
let stuff2 = drive.length<keyboard.length?keyboard.length:drive.length


let s = 0
for(let i = 0; i<stuff  ;i++){
    for(let j = 0; j<stuff2 ;j++){
        if(keyboard[i] + drive[j] <=b){
            s==0 ? s=keyboard[i] + drive[j]:
            s < keyboard[i] + drive[j]?s=keyboard[i] + drive[j]:s
        }
    }
}
console.log(s!==0?s:-1)





const maxValue = Math.max(
    
    ...drive.filter(d => keyboard.some(k => k + d <= b))//o(n^2)
    
    .map(d => keyboard.map(k => k + d).filter(sum => sum <= b))
    
    .flat()
    // .sort((a, b) => b - a)
    );

console.log(maxValue)
return maxValue !== -Infinity ? maxValue : -1