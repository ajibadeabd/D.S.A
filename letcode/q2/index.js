/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(words) {
    let se = words.reduce((a,b)=>{
        // a[1] = Math.max(b.length,a[1])
       let rev =  b.split("").reverse().join("")
        if(a[0][b] == rev){
            a[0][b]=rev
            delete  a[0][b]
            a[2]+=b.length *2
        }else{
            a[0][rev]=b
        }
        a[1] = Math.max(a[1],b.length)
        return a
    },[{},0,0])
    console.log(se)
    if(se[2]==0){
        let v = ""
        for(c in se[0]){
            v+=c
        }
        console.log(v)
        if(v===v.split("").reverse().join("")){
            return v.length
        }else{
            return se[1]
        }
    }else{
       return se[2]
    } 
    };

    console.log(longestPalindrome(["lc","cl","gg"]))

    let s = "1800"
    let rev = String(+(s.split("")).reverse().join("")).split("").reverse().join("")

    console.log(rev===s)