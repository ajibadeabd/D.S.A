// // // // // // let permArr = [];
// // // // // // let usedChars = [];

// // // // // // function permute(chars) {
// // // // // //     // const chars = input.split("");
// // // // // //     console.log({chars})
// // // // // //     for (let i = 0; i < chars.length; i++) {
// // // // // //         const ch = chars.splice(i, 1);
// // // // // //         usedChars.push(ch);
// // // // // //         if (chars.length === 0) {
// // // // // //             permArr[permArr.length] = usedChars.join("");
// // // // // //         }
// // // // // //         permute(chars);
// // // // // //         chars.splice(i, 0, ch);
// // // // // //         usedChars.pop();
// // // // // //     }
// // // // // //     return permArr
// // // // // // };
// // // // // // console.log(
// // // // // // permute([1,2,3,4,5]))
// // // // // // function permute(arr, permutations = []) {
// // // // // //     if (!arr.length) {
// // // // // //       return [permutations];
// // // // // //     }
// // // // // //     let result = [];
// // // // // //     for (let i = 0; i < arr.length; i++) {
// // // // // //       let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
// // // // // //       result = result.concat(permute(remaining, permutations.concat(arr[i])));
// // // // // //     }
// // // // // //     return result;
// // // // // //   }
// // // // // let a =0
// // // // //   function permute(arr, permutations = '') {
// // // // //     if(arr.length===0){
// // // // // // console.log(permutations)
        
// // // // //     } 
// // // // //     for(let i=0;i<arr.length;i++){
// // // // //         a++
// // // // //         let aa = arr.substring(0,i) + arr.substring(i+1)
// // // // //         // let aaa = arr.substring(i+1)
// // // // //         console.log(aa)
// // // // //         // console.log(a)

// // // // //         permute(aa,permutations+arr[i])
       
// // // // // }
// // // // // return true

// // // // // }
  
// // // // // let arr = "123"
// // // // // // let arr = [1, 2, 3];
// // // // // let permutations = permute(arr);
// // // // // console.log(permutations);


// // // // let s = "xaxbbbxx"
// // // // if (s.length % 2 !=0) return -1
    
// // // // const mid = Math.floor(s.length/2)
// // // // // if (mid%2!=0) return -1
// // // // let left = s.slice(mid)
// // // // let right = s.slice(0,mid)
// // // // let firstHash = left.split("").reduce((a,b)=>{
// // // //     a[b] = ++a[b] || 1
// // // //     return a
// // // // },{})
// // // // console.log(firstHash)
// // // // let second= right.split("").reduce((a,b,i,arr)=>{
// // // //     // a[a] = ++a[a] || 1
// // // //     if(!firstHash[b]){
// // // //         a++
// // // //     }else{
// // // //          firstHash[b]--
// // // //     }
// // // //     return a
// // // // },0)

// // // // console.log(second, left,right)

// // // let a = "abca"
// // // let d = "xyzx"
// // // let hash  ={}
// // // // a.split("").reduce((a,b,i)=>{a[b]=d[i];return a},{})
// // // let track  = true
// // // for(let i=0;i<d.length;i++){
// // //     if(hash[a[i]]){
// // //         if(hash[a[i]]!==d[i])
// // //         track=false
// // //         break
// // //     }else{
// // //         hash[a[i]]=d[i]
// // //     }

// // // }
// // // console.log(hash,track)


// // // let queue = [2, 5, 1, 3, 4];
// // // let q = [2, 5, 1, 3, 4];
// // // // Too chaotic
// // // let time = 0
// // // for(let i=0;i<queue.length;i++){


// // // }

// // let hops  = [];
    
// // // for (let k = q.length - 1; k >= 0;) {
// // //     if (q[k] > q[k+1]) {
// // //         hops[q[k]] = (hops[q[k]] || 0)+1;
// // //         if (hops[q[k]] > 2) {
// // //             console.log("Too chaotic");
// // //             return;
// // //         }
        
// // //         [q[k], q[k+1]] = [q[k+1], q[k]];
// // //         k < q.length-1 && k++;
// // //     } else {
// // //         k--;
// // //     }
// // // }

// // // console.log(hops.reduce((a, b) => a + b));
// // let q = [1 ,2 ,5 ,3 ,7, 8 ,6 ,4]



// // // let hops  = [];
    
// // // for (let k = q.length - 1; k >= 0;) {

// // //     if(){

// // //     }
// // // }


// // let c = [1 ,2 ,5 ,3 ,7 ,8 ,6 ,4]
// // // let s = 0
// // // for(let i=0;i<c.length-2;i++){
// // //     if(c[i]>c[i+1] && c[i]-c[i+1] ==1){
// // //         [c[i],c[i+1]]=[c[i+1],c[i]]
// // //         s++
// // //     }else if(c[i]>c[i+1] && c[i]-c[i+1]==2){
// // //         [c[i],c[i+1]]=[c[i+1],c[i]]
// // //         if(i==2) console.log(c[i],"here")
// // //         [c[i+1],c[i+2]]=[c[i+2],c[i+1]]
// // //         s+=2
// // //     }else if(  c[i]-c[i+1] > 2){
// // //         console.log("Too chaotic");
// // //         // return 
// // //     }
// // //     console.log(c)

// // // }
// // // console.log(s,c)



// // let s = 0
// // for(let i=1;i<c.length;i++){
// //     if(c[i-1]>c[i] && c[i-1]-c[i] ==1){
// //         [c[i-1],c[i]]=[c[i],c[i-1]]
// //         s++
// //     }else if(c[i-1]>c[i] && c[i-1]-c[i] ==2){
// //         [c[i-1],c[i]]=[c[i],c[i-1]]
// //         if(i==2) console.log("dd")
// //         [c[i],c[i+1]]=[c[i+1],c[i]]
// //         s+=2
// //     }else if(  c[i-1]-c[i] > 2){
// //         console.log("Too chaotic");
// //         return 
// //     }

// // // }
// // }
// // console.log(s)

let q = [1 ,2 ,5 ,3 ,7, 8 ,6 ,4]

function minimumBribes(q) {
    let bribes = 0;
    
    for (let i = q.length - 1; i >= 0; i--) {
      if (q[i] === i + 1) continue;
      
      if (i - 1 >= 0 && q[i - 1] === i + 1) { // 1 bribe
        bribes += 1
        ;[ q[i], q[i - 1]] = [ q[i - 1] , q[i] ]
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) { // 2 bribes
        bribes += 2
        ;[ q[i-2], q[i - 1]] = [ q[i - 1] , q[i-2] ]
        ;[ q[i], q[i - 1]] = [ q[i - 1] , q[i] ]
      } else { // 3 or more bribes
        console.log("Too chaotic");
        return;
      }
     console.log(q)

    }
     console.log(bribes)
  }

  minimumBribes(q)


// let s = NaN
// //   {"id":"21191070-0783-4107-b7a0-3a5115bf54ac","isTimed":true,"questionsAnswered":22,"questionsTotal":25,"state":"in-progress","question":{"stem":"<p>You need to create an application that requires database and file system access. How can you implement this using the JavaScript language?</p>\n","stemMarkdown":"","stemImage":null,"answers":[{"index":"0","text":"<p>Use a specialized JavaScript runtime that is made for writing server-side applications that can access server resources.</p>\n","textMarkdown":""},{"index":"1","text":"<p>Create a custom JavaScript library for interacting with server resources that call built-in OS-level functionality using JS interop functionality.</p>\n","textMarkdown":""},{"index":"2","text":"<p>Use the regular JavaScript syntax and use the built-in functions for accessing databases or the server file system.</p>\n","textMarkdown":""},{"index":"3","text":"<p>Create a regular browser-based JavaScript application that uses the browser API to interact with server resources from the domain it is hosted.</p>\n","textMarkdown":""}],"submittedAnswer":"0","timeRemaining":16,"timeTotal":70,"state":"submitted"},"isRetake":false,"isDoOver":false,"score":null}

// console.log(typeof s)

// function Person(name) {   
//     if (!(this instanceof Person)) {    
//       return new Person(name);   
//     }     
//     this.name = name;
//  }


//  let ss = new Person("dbh")
//  console.log(ss.name
//  )


//  let config = {
//     data: { "number": 99 },
//     getConfig: function() { return this.data; }
//   };
//   let getConfig = config.getConfig.bind(config);
//   console.log(
//   getConfig())



// let myMap = new Map();
// myMap.set('item1','Foo');
// myMap.set('item2','Bar');


// // this.greeting = "Hello, Universe!";

// let person = {
//   greeting: "Hello, World!",
//   greetUser: () => {

//     let s=""
//     console.log(this);
//   }
// };

// person.greetUser();
// console.log(
// Number.isInteger(0/2))

// console.log(Object.keys([1,4]));

// function func(phrase) {
//     console.log("%s, how are you?", phrase);
//   }
//   func.call(this,"fcr")


// const obj1 = {};
// // let foo = {    
// //     get name(){    
// //       return "this.name";  
// //     },    
// //     set name(n){    
// //       this.name = n;  
// //     }
// //   }
// //   foo.name = "foo";

// const myPrm1 = new Promise((resolve, reject) => 
//                            setTimeout(reject, true, 'Hi!'));
// const myPrm2 = new Promise((resolve, reject) => 
//                            setTimeout(reject, false, 'World'));
// const myPrm3 = new Promise((resolve, reject) => 
//                            setTimeout(resolve, true, 'Bye'));
// const myPrms = [myPrm1, myPrm2, myPrm3];




// const statusPromise = Promise.allSettled(myPrms)
//     .then(statusArray => {
//         // Use the `status` property to access the status of each promise
//         // Use the `value` property to access the value of the fulfilled promises
//         // Use the `reason` property to access the reason of the rejected promises
//         statusArray.forEach(status => console.log(status.status));
//     })
//     .catch(error => console.log(error));





//     class Test{
//         constructor(){
//            this._name="abdu"
//         }
//     }


//     let test = new Test()
//     console.log(test._name)
    
// function minimumBribes(q){
//     // Write your code here
    
//     let hops  = [];
    
//     for (let k = q.length - 1; k >= 0;) {
//         // console.log(q[k] , q[k+1])
//         if (q[k] > q[k+1]) {
//             hops[q[k]] = (hops[q[k]] || 0)+1;
//             if (hops[q[k]] > 2) {
//                 console.log("Too chaotic");
//                 return;
//             }
            
//             [q[k], q[k+1]] = [q[k+1], q[k]];
//             k < q.length-1 && k++;
//         } else {
//             k--;
//         }
//         console.log(q,hops)
//     }
    
//     console.log(hops.reduce((a, b) => a + b));
// }
// let queue = [1 ,2 ,5, 3, 7,8, 6, 4];
// minimumBribes(queue)

// let q = [1 ,2 ,5, 3, 7,8, 6, 4];

// for (let k = q.length - 1; k >= 0; k--) {
     
// }
// console.log(q)

let a = [1,2,3,4,5];
[a[4],a[0],a[1],a[3]] = [a[0],a[4],a[3],a[1]]

       console.log(a)