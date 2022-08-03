// javascript

function staircase(n) {
    // Write your code here
    let hash = "#"
    for(let i=0; i<n; i++){
        console.log(Array(n-1-i).fill(' ').join('') +hash)
        hash+="#"
    }
}
staircase(6) // O(n*n) array.fill is O(n)

// javascript
function staircase2(n) {
    // Write your code here
    let sp = { 
        "-1":"",
        "0":" ",
    }
    for(let i=1; i<=n; i++){
        sp[i]= sp[i-1] + " "
    }
    let hash = "#"
    for(let i=0; i<n; i++){
        console.log(sp[n-i-2]+hash)
        hash+="#"
    }
}
staircase2(6) // O(2n) --> O(n)

 