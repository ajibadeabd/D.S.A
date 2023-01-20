
let keyboard = [40,50,60]
let drive = [5,8,12]
let b =6


let stuff = drive.length>keyboard.length?drive.length:keyboard.length
let stuff2 = drive.length<keyboard.length?keyboard.length:drive.length


let s = []
for(let i = 0; i<stuff;i++){
    for(let j = 0; j<stuff2;j++){
        if(keyboard[i] + drive[j]<=b){
         s.push(keyboard[i] + drive[j])
        }

    }
}
s.sort((a,b)=>b-a)
console.log(s[0])