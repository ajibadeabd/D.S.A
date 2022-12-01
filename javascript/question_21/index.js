

let queue = [1 ,2 ,5, 3, 7,8, 6, 4];
//let queue = [2, 5, 1, 3, 4];
//2 1 5 3 4

let time  = 0
for(let i=0;i<=queue.length;i++){
    if(queue[i]>(i+1)){
if((queue[i]-(i+1))>2) {
    //console.log(queue[i]-(i+1))
    // console.log("Too chaotic")
 //   return 
}else{
    time+=queue[i]-(i+1)
}
    }else if(queue[i]>queue[i+1]){
    time++

    }

}
// console.log(time)


function minimumBribes(q){
    // Write your code here
    
    let hops  = [];
    
    for (let k = q.length - 1; k >= 0;) {
        // console.log(q[k] , q[k+1])
        if (q[k] > q[k+1]) {
            hops[q[k]] = (hops[q[k]] || 0)+1;
            if (hops[q[k]] > 2) {
                console.log("Too chaotic");
                return;
            }
            
            [q[k], q[k+1]] = [q[k+1], q[k]];
            k < q.length-1 && k++;
        } else {
            k--;
        }
    }
    
    console.log(hops.reduce((a, b) => a + b));
}

minimumBribes(queue)



function minimumBribes(q) {
    let bribes = 0;
    
    for (let i = q.length - 1; i >= 0; i--) {
      if (q[i] === i + 1) continue;
      
      if (i - 1 >= 0 && q[i - 1] === i + 1) { // 1 bribe
        bribes += 1
        swap(q, i, i - 1);
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) { // 2 bribes
        bribes += 2
        swap(q, i - 1, i - 2);
        swap(q, i, i - 1);
      } else { // 3 or more bribes
        console.log("Too chaotic");
        return;
      }
    }
    
    console.log(bribes);
  }

  minimumBribes(q)