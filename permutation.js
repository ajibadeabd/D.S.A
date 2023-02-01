// // // // // // // // // let permArr = [];
// // // // // // // // // let usedChars = [];

// // // // // // // // // function permute(chars) {
// // // // // // // // //     // const chars = input.split("");
// // // // // // // // //     console.log({chars})
// // // // // // // // //     for (let i = 0; i < chars.length; i++) {
// // // // // // // // //         const ch = chars.splice(i, 1);
// // // // // // // // //         usedChars.push(ch);
// // // // // // // // //         if (chars.length === 0) {
// // // // // // // // //             permArr[permArr.length] = usedChars.join("");
// // // // // // // // //         }
// // // // // // // // //         permute(chars);
// // // // // // // // //         chars.splice(i, 0, ch);
// // // // // // // // //         usedChars.pop();
// // // // // // // // //     }
// // // // // // // // //     return permArr
// // // // // // // // // };
// // // // // // // // // console.log(
// // // // // // // // // permute([1,2,3,4,5]))
// // // // // // // // // function permute(arr, permutations = []) {
// // // // // // // // //     if (!arr.length) {
// // // // // // // // //       return [permutations];
// // // // // // // // //     }
// // // // // // // // //     let result = [];
// // // // // // // // //     for (let i = 0; i < arr.length; i++) {
// // // // // // // // //       let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
// // // // // // // // //       result = result.concat(permute(remaining, permutations.concat(arr[i])));
// // // // // // // // //     }
// // // // // // // // //     return result;
// // // // // // // // //   }
// // // // // // // // let a =0
// // // // // // // //   function permute(arr, permutations = '') {
// // // // // // // //     if(arr.length===0){
// // // // // // // // // console.log(permutations)
        
// // // // // // // //     } 
// // // // // // // //     for(let i=0;i<arr.length;i++){
// // // // // // // //         a++
// // // // // // // //         let aa = arr.substring(0,i) + arr.substring(i+1)
// // // // // // // //         // let aaa = arr.substring(i+1)
// // // // // // // //         console.log(aa)
// // // // // // // //         // console.log(a)

// // // // // // // //         permute(aa,permutations+arr[i])
       
// // // // // // // // }
// // // // // // // // return true

// // // // // // // // }
  
// // // // // // // // let arr = "123"
// // // // // // // // // let arr = [1, 2, 3];
// // // // // // // // let permutations = permute(arr);
// // // // // // // // console.log(permutations);


// // // // // // // let s = "xaxbbbxx"
// // // // // // // if (s.length % 2 !=0) return -1
    
// // // // // // // const mid = Math.floor(s.length/2)
// // // // // // // // if (mid%2!=0) return -1
// // // // // // // let left = s.slice(mid)
// // // // // // // let right = s.slice(0,mid)
// // // // // // // let firstHash = left.split("").reduce((a,b)=>{
// // // // // // //     a[b] = ++a[b] || 1
// // // // // // //     return a
// // // // // // // },{})
// // // // // // // console.log(firstHash)
// // // // // // // let second= right.split("").reduce((a,b,i,arr)=>{
// // // // // // //     // a[a] = ++a[a] || 1
// // // // // // //     if(!firstHash[b]){
// // // // // // //         a++
// // // // // // //     }else{
// // // // // // //          firstHash[b]--
// // // // // // //     }
// // // // // // //     return a
// // // // // // // },0)

// // // // // // // console.log(second, left,right)

// // // // // // let a = "abca"
// // // // // // let d = "xyzx"
// // // // // // let hash  ={}
// // // // // // // a.split("").reduce((a,b,i)=>{a[b]=d[i];return a},{})
// // // // // // let track  = true
// // // // // // for(let i=0;i<d.length;i++){
// // // // // //     if(hash[a[i]]){
// // // // // //         if(hash[a[i]]!==d[i])
// // // // // //         track=false
// // // // // //         break
// // // // // //     }else{
// // // // // //         hash[a[i]]=d[i]
// // // // // //     }

// // // // // // }
// // // // // // console.log(hash,track)


// // // // // // let queue = [2, 5, 1, 3, 4];
// // // // // // let q = [2, 5, 1, 3, 4];
// // // // // // // Too chaotic
// // // // // // let time = 0
// // // // // // for(let i=0;i<queue.length;i++){


// // // // // // }

// // // // // let hops  = [];
    
// // // // // // for (let k = q.length - 1; k >= 0;) {
// // // // // //     if (q[k] > q[k+1]) {
// // // // // //         hops[q[k]] = (hops[q[k]] || 0)+1;
// // // // // //         if (hops[q[k]] > 2) {
// // // // // //             console.log("Too chaotic");
// // // // // //             return;
// // // // // //         }
        
// // // // // //         [q[k], q[k+1]] = [q[k+1], q[k]];
// // // // // //         k < q.length-1 && k++;
// // // // // //     } else {
// // // // // //         k--;
// // // // // //     }
// // // // // // }

// // // // // // console.log(hops.reduce((a, b) => a + b));
// // // // // let q = [1 ,2 ,5 ,3 ,7, 8 ,6 ,4]



// // // // // // let hops  = [];
    
// // // // // // for (let k = q.length - 1; k >= 0;) {

// // // // // //     if(){

// // // // // //     }
// // // // // // }


// // // // // let c = [1 ,2 ,5 ,3 ,7 ,8 ,6 ,4]
// // // // // // let s = 0
// // // // // // for(let i=0;i<c.length-2;i++){
// // // // // //     if(c[i]>c[i+1] && c[i]-c[i+1] ==1){
// // // // // //         [c[i],c[i+1]]=[c[i+1],c[i]]
// // // // // //         s++
// // // // // //     }else if(c[i]>c[i+1] && c[i]-c[i+1]==2){
// // // // // //         [c[i],c[i+1]]=[c[i+1],c[i]]
// // // // // //         if(i==2) console.log(c[i],"here")
// // // // // //         [c[i+1],c[i+2]]=[c[i+2],c[i+1]]
// // // // // //         s+=2
// // // // // //     }else if(  c[i]-c[i+1] > 2){
// // // // // //         console.log("Too chaotic");
// // // // // //         // return 
// // // // // //     }
// // // // // //     console.log(c)

// // // // // // }
// // // // // // console.log(s,c)



// // // // // let s = 0
// // // // // for(let i=1;i<c.length;i++){
// // // // //     if(c[i-1]>c[i] && c[i-1]-c[i] ==1){
// // // // //         [c[i-1],c[i]]=[c[i],c[i-1]]
// // // // //         s++
// // // // //     }else if(c[i-1]>c[i] && c[i-1]-c[i] ==2){
// // // // //         [c[i-1],c[i]]=[c[i],c[i-1]]
// // // // //         if(i==2) console.log("dd")
// // // // //         [c[i],c[i+1]]=[c[i+1],c[i]]
// // // // //         s+=2
// // // // //     }else if(  c[i-1]-c[i] > 2){
// // // // //         console.log("Too chaotic");
// // // // //         return 
// // // // //     }

// // // // // // }
// // // // // }
// // // // // console.log(s)

// // // let q = [1 ,2 ,5 ,3 ,7, 8 ,6 ,4]

// // // function minimumBribes(q) {
// // //     let bribes = 0;
    
// // //     for (let i = q.length - 1; i >= 0; i--) {
// // //       if (q[i] === i + 1) continue;
      
// // //       if (i - 1 >= 0 && q[i - 1] === i + 1) { // 1 bribe
// // //         bribes += 1
// // //         ;[ q[i], q[i - 1]] = [ q[i - 1] , q[i] ]
// // //       } else if (i - 2 >= 0 && q[i - 2] === i + 1) { // 2 bribes
// // //         bribes += 2
// // //         ;[ q[i-2], q[i - 1]] = [ q[i - 1] , q[i-2] ]
// // //         ;[ q[i], q[i - 1]] = [ q[i - 1] , q[i] ]
// // //       } else { // 3 or more bribes
// // //         console.log("Too chaotic");
// // //         return;
// // //       }
// // //      console.log(q)

// // //     }
// // //      console.log(bribes)
// // //   }

// // //   minimumBribes(q)


// // // // let s = NaN
// // // // //   {"id":"21191070-0783-4107-b7a0-3a5115bf54ac","isTimed":true,"questionsAnswered":22,"questionsTotal":25,"state":"in-progress","question":{"stem":"<p>You need to create an application that requires database and file system access. How can you implement this using the JavaScript language?</p>\n","stemMarkdown":"","stemImage":null,"answers":[{"index":"0","text":"<p>Use a specialized JavaScript runtime that is made for writing server-side applications that can access server resources.</p>\n","textMarkdown":""},{"index":"1","text":"<p>Create a custom JavaScript library for interacting with server resources that call built-in OS-level functionality using JS interop functionality.</p>\n","textMarkdown":""},{"index":"2","text":"<p>Use the regular JavaScript syntax and use the built-in functions for accessing databases or the server file system.</p>\n","textMarkdown":""},{"index":"3","text":"<p>Create a regular browser-based JavaScript application that uses the browser API to interact with server resources from the domain it is hosted.</p>\n","textMarkdown":""}],"submittedAnswer":"0","timeRemaining":16,"timeTotal":70,"state":"submitted"},"isRetake":false,"isDoOver":false,"score":null}

// // // // console.log(typeof s)

// // // // function Person(name) {   
// // // //     if (!(this instanceof Person)) {    
// // // //       return new Person(name);   
// // // //     }     
// // // //     this.name = name;
// // // //  }


// // // //  let ss = new Person("dbh")
// // // //  console.log(ss.name
// // // //  )


// // // //  let config = {
// // // //     data: { "number": 99 },
// // // //     getConfig: function() { return this.data; }
// // // //   };
// // // //   let getConfig = config.getConfig.bind(config);
// // // //   console.log(
// // // //   getConfig())



// // // // let myMap = new Map();
// // // // myMap.set('item1','Foo');
// // // // myMap.set('item2','Bar');


// // // // // this.greeting = "Hello, Universe!";

// // // // let person = {
// // // //   greeting: "Hello, World!",
// // // //   greetUser: () => {

// // // //     let s=""
// // // //     console.log(this);
// // // //   }
// // // // };

// // // // person.greetUser();
// // // // console.log(
// // // // Number.isInteger(0/2))

// // // // console.log(Object.keys([1,4]));

// // // // function func(phrase) {
// // // //     console.log("%s, how are you?", phrase);
// // // //   }
// // // //   func.call(this,"fcr")


// // // // const obj1 = {};
// // // // // let foo = {    
// // // // //     get name(){    
// // // // //       return "this.name";  
// // // // //     },    
// // // // //     set name(n){    
// // // // //       this.name = n;  
// // // // //     }
// // // // //   }
// // // // //   foo.name = "foo";

// // // // const myPrm1 = new Promise((resolve, reject) => 
// // // //                            setTimeout(reject, true, 'Hi!'));
// // // // const myPrm2 = new Promise((resolve, reject) => 
// // // //                            setTimeout(reject, false, 'World'));
// // // // const myPrm3 = new Promise((resolve, reject) => 
// // // //                            setTimeout(resolve, true, 'Bye'));
// // // // const myPrms = [myPrm1, myPrm2, myPrm3];




// // // // const statusPromise = Promise.allSettled(myPrms)
// // // //     .then(statusArray => {
// // // //         // Use the `status` property to access the status of each promise
// // // //         // Use the `value` property to access the value of the fulfilled promises
// // // //         // Use the `reason` property to access the reason of the rejected promises
// // // //         statusArray.forEach(status => console.log(status.status));
// // // //     })
// // // //     .catch(error => console.log(error));





// // // //     class Test{
// // // //         constructor(){
// // // //            this._name="abdu"
// // // //         }
// // // //     }


// // // //     let test = new Test()
// // // //     console.log(test._name)
    
// // // // function minimumBribes(q){
// // // //     // Write your code here
    
// // // //     let hops  = [];
    
// // // //     for (let k = q.length - 1; k >= 0;) {
// // // //         // console.log(q[k] , q[k+1])
// // // //         if (q[k] > q[k+1]) {
// // // //             hops[q[k]] = (hops[q[k]] || 0)+1;
// // // //             if (hops[q[k]] > 2) {
// // // //                 console.log("Too chaotic");
// // // //                 return;
// // // //             }
            
// // // //             [q[k], q[k+1]] = [q[k+1], q[k]];
// // // //             k < q.length-1 && k++;
// // // //         } else {
// // // //             k--;
// // // //         }
// // // //         console.log(q,hops)
// // // //     }
    
// // // //     console.log(hops.reduce((a, b) => a + b));
// // // // }
// // // // let queue = [1 ,2 ,5, 3, 7,8, 6, 4];
// // // // minimumBribes(queue)

// // // // let q = [1 ,2 ,5, 3, 7,8, 6, 4];

// // // // for (let k = q.length - 1; k >= 0; k--) {
     
// // // // }
// // // // console.log(q)

// // // let a = [1,2,3,4,5];
// // // [a[4],a[0],a[1],a[3]] = [a[0],a[4],a[3],a[1]]

// // //        console.log(a)






// // // function test(){
// // //     return a=>null
// // // }


// // // const aa = new Uint8Array([5, 10, 15, 20, 25, 30, 35 ]);
// // // const aaa =  [5, 10, 15, 20, 25, 30, 35 ]

// // // console.log(aa[0]) 


// // function isValid(s) {
// //     // Write your code here
// //     let hashString = s.split("").reduce((initial,current)=>{
         
// //         initial[0][current]=++initial[0][current]||1
// //         if(initial[0][current]>initial[1]){
// //             initial[1]=initial[0][current]
// //         }
// //         return initial
// //     },[{},0])
// //     console.log(hashString)
// //     let store = {}
// //     let min = 2**53
// //     for(lett in hashString[0]){
// //     console.log(hashString[0][lett],"Ddd")
// //     if(hashString[0][lett]<min) min=hashString[0][lett]
// //     if(store[hashString[0][lett]]){
// //         store[hashString[0][lett]].push(lett)
// //     }else{
// //         store[hashString[0][lett]]=[lett]
// //     }
// //     }
// //     console.log({min})
// //     store = Object.entries(store)
// //     console.log(store)
// //     if(store.length>2) return "NO"
// // console.log(store)
// // //     if(store[0][1].length>store[1][1].length){
// // //         if(store[1][0]-1 == 0|| store[1][0]-1 ==store[0][0]){
// // //             return "YES"
// // //         }

// // //     }
// // //     else if(store[0][1].length<store[1][1].length){

// // //  if(store[0][0]-1 == 0|| store[0][0]-1 ==store[1][0]){
// // //             return "YES"
// // //         }
// // //     }else{
// // //         if(
// // //             store[0][0]>store[1][0]
// // //             ){}
// // //         // console.log("TGhth")
// // //         // return "NO"
// // //     }

// // // let big= 0

// // // let dd = Object.entries(hashString[0])
// // // let small=  dd[0][1]

// // // // console.log(dd)
// // // dd.forEach((ele)=>{
// // //     console.log(ele)
// // //     if(ele[1]>big) big=ele[1]
// // //     if(ele[1]<small) small=ele[1]
// // // })
// // // console.log(big-small)
// // //     if(big-small>1)return "NO"
// // //     // return "YES"
// // //     let sa = Math.abs(s.length-(hashString[1]*2))
// // // return sa==0|| sa==1?"YES":"NO"
// // }
// // console.log(isValid("aabbccccdd"))
// // // console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))


// // function maxSubArraySum(a, size)
// // {
// //     var maxint = Math.pow(2, 53)
// //     var max_so_far = -maxint - 1
// //     var max_ending_here = 0
// //     //   console.log(max_so_far)
// //     for (var i = 0; i < size; i++)
// //     {
// //         max_ending_here = max_ending_here + a[i]
// //       console.log( {max_ending_here ,max_so_far, k:a[i] })

// //         if (max_so_far < max_ending_here)
// //             max_so_far = max_ending_here
 
// //         if (max_ending_here < 0)
// //             max_ending_here = 0

// //         //  if(i==3)   break
// //     }
// //     return max_so_far
// // }
  
// // // Driver code
// // var a = [ 2,-1,2]
// // // var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
// // // document.write("Maximum contiguous sum is",
// //               console.log( maxSubArraySum(a, a.length))
  


// // {
// //             //   let sub = new Uint8Array([1,2,3]).sort()
// //               let sub = new Uint8Array([1,5,9,1,3]).sort()
// //             //   let sub = new Uint8Array([3,3,9,9,5]).sort()
// //               let x=sub[0]
// //               let xx = 0
// //               for(i=1;i<sub.length;i++){
// //                 x+=sub[i]
// //                 xx++
// //                 if(x>5+1)break
// //               }
// //               let d = sub.subarray(0,xx+1)
// //               console.log(d)
// //             // console.log(  Math.min(x-d[0],x-d[d.length-1]),d)
               
// //             }



// // {
// //     let sub = new Uint8Array([3,3,9,9,5])
// //     let b=[]
// //     for(i=0;i<sub.length;i++){
// //       for(j=i;j<sub.length;j++){
// //         b.push(sub.subarray(i,j+1))
// //       }
// //     }
// //    let sum =  b.reduce((a,b)=>{
// //         let v =b.reduce((a,b)=>a+b)%7
// //         return a>v?a:v
// //     })

// //     console.log(sum)
// // }



// // console.log(8%15)
// // console.log((-8)%15)
// // console.log(22%15)


// // // let node = {
// // //     a:"q"
// // // }
// // // let head = node

// // // let tail =  node
// // //  let newNode = {
// // //     a:"qq"
// // // }
// // // tail.next=newNode
// // // tail=newNode

// // // newNode = {
// // //     a:"qqq"
// // // }
// // // tail.next=newNode
// // // tail=newNode
// // // console.log(head )
// // // console.log(tail)
// // // //add at the begining
// // // let headCon = head

// // // newNode = {
// // //     a:"new headqqq"
// // // }
// // // newNode.next=headCon
// // // head=newNode
// // // console.log(head )
// // // head=head.next
// // // console.log(head ,4)
// // // let temp = head
// // // let pre = head
// // // while(temp.next){
// // //     pre=temp
// // //     temp=temp.next
// // // }
// // // // console.log({temp,pre})
// // // console.log(tail,head,9)
// // // tail=pre
// // // console.log(tail,91)

// // // tail.next=null

// // // console.log(head,5)

// // // console.log("***********")
// // // let mea = {
// // //     value:1,next:null
// // // }
// // // let me = mea

// // // console.log(me)
// // // console.log(mea)
// // // let ne = {
// // //     value:2,next:null

// // // }
// // // mea.next=ne

// // // mea=ne
// // // console.log(me)
// // // console.log(mea)
// // // ne = {
// // //     value:3,next:null

// // // }
// // // mea.next = ne
// // // mea=ne


// // // console.log(me)
// // // console.log(mea)

// // // pre = "me"
// // // temp = me

// // // while(temp.next){
// // //     pre=temp;
// // //     temp=temp.next
// // // }

// // // mea=pre
// // // console.log(pre,temp)
// // // console.log(mea)
// // // console.log(me)

// // // mea.next=null

// // // console.log(mea)
// // // console.log(me)

// let k =3,
// arr= [
//   10,  100, 300,
//  200, 1000,  20,
//   30
// ]


// let array = new  Uint8Array(arr.sort((a,b)=>a-b))
// let sub = array.subarray(0,k)
// let index  = sub.length-1

// console.log(sub[index]-sub[0])

// function twoStrings(s1, s2) { 
// s1 = s1.split(" ")
// s2 = s2.split(" ")
//   let hashS1 = s1.reduce((a,b)=>{
//     a[b]= b
//     return a
//   },{}) 
//   for(let i = 0;i<s2.length;i++){
//     if(s2[i] == hashS1[s2[i]] ){
//       delete hashS1[s2[i]]
//     }else {
//       return "NO"
//     }
//   }
// return "YES"  
// }
// console.log(
//   twoStrings(
//     "two times three is not four",
// "two times is four"
//   )
// )
function ArrayAdditionI(array){
  var largestNum = Math.max.apply(0, array); // gets the largest number in array.
  array.sort(function(a,b){ return a-b;}).pop(); // sorts array and removes last(largest) number.
  function recursionCheck(arr, sum){
  // the base case when array empty.
    if(arr.length === 0){ 
    return sum === 0;
    }
    var arrBeginNum=arr[0];  
    arr = arr.slice(1);

    return recursionCheck(arr, sum) || recursionCheck(arr, sum - arrBeginNum);
  }
return recursionCheck(array, largestNum);
   }

// TESTS
console.log("-----");
console.log(ArrayAdditionI([1,2,3,5,4])); 
console.log(ArrayAdditionI([21,10,12,9,2])); 
console.log(ArrayAdditionI([4,6,23,10,1,3]));  
console.log(ArrayAdditionI([5,7,16,1,2])); 
console.log(ArrayAdditionI([3,5,-1,8,12])); 

let a = [3,5,-1,8,12]
let find=(a)=>{

  let maxNumber = Math.max(...a)
  a.sort((a,b)=>a-b).pop()
  let has = a.reduce((a,b)=>{
    a[b]=b
    return a
  },{})
  let remainingAdd  = a.reduce((a,b)=>a+b,0)
  let  chec = remainingAdd-maxNumber
  let response = !!has[chec]
  console.log(response)
  console.log(remainingAdd,maxNumber)
}

console.log("**********")
find([1,2,3,5,4])
// find([21,10,12,9,2])
// find([4,6,23,10,1,3])
// find([5,7,16,1,2])
// find(a)



let init = [0,1];

let n = 6;

for(let i=1;i<n;i++){
init.push(init[i]+init[i-1])
}
console.log(init)
console.log(init[n])
{
let k=0,j=1
  for(let i=1;i<n;i++){
    [k,j]=[j,k+j]
    }
    console.log({j})

}
function fib(n) {
  let a = 0, b = 1, temp;
  while (n > 0) {
    temp = a;
    a = b;
    b = temp + b;
    n--;
   // console.log(a,b)
  }
  return a;
}

console.log(fib(10))
  



// recursive vib
let count = 0
function fibRec(n){
  count++
  if(n<2) return n
  return fibRec(n-1)+fibRec(n-2)

}

// console.log(fibRec(40),'we called the function ',count,"times with out caching")
let cache={ }
  let ct = 0

function fibRec2(n){
  ct++
  if(n in cache) return cache[n]
  if(n<2) return n

  cache[n]= fibRec2(n-1)+fibRec2(n-2)
  return   cache[n]
}
// console.log(fibRec2(40),'we called the function ',ct,"times with out caching")


{

let arr = ["b","d"]
let arr2 = ["a","b","c","d"]
let long= ''
for(let i=0;i<arr.length;i++){
  let string = ''
  let indexes = arr.reduce((a,b,i)=>{
    a[b]=i
    return a
  },{})
  for(let j=0;j<arr2.length;j++){


  }


}

}

{
console.log(lcs("abcd","bd"))
  function lcs(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));
  console.log(dp)
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    let index = dp[m][n];
    let lcs = Array(index + 1).fill("");
    console.log({
      dp,index
    })
    let i = m,
      j = n;
    while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
        lcs[index - 1] = str1[i - 1];
        i--;
        j--;
        index--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  
    return lcs.join("");
  }
  
  
  
  
}

{
console.log(lcs("abcd","bd"))

  function lcs(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  console.log(dp)
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[m][n];
  }
}