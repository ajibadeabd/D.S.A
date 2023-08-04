// // const s = [ 

// //     {
// //         a:"1",
// //         b:"b",
// //         c:"c",
// //     },
// //     {
// //         a:"2",
// //         b:"b",
// //         c:"s",
// //     },
// //     {
// //         a:"3",
// //         b:"m",
// //         c:"3",
// //     },
// //     {
// //         a:"5",
// //         b:"m",
// //         c:"8",
// //     },
// //     {
// //         a:"4",
// //         b:"n",
// //         c:"3",
// //     },
// //  ]
// let s = [
//     {"date": "2022-05-17 17:12:35", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-17 19:13:07", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-17 21:14:51", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-17 23:17:23", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-18 01:40:13", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-18 03:42:44", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-18 05:45:29", "balance": "5000.00", "equity": "5000.00"},
//     {"date": "2022-05-18 07:47:45", "balance": "5000.00", "equity": "5006.57"},
//     {"date": "2022-05-18 09:50:28", "balance": "5000.00", "equity": "5039.23"},
//     {"date": "2022-05-18 11:54:30", "balance": "5011.00", "equity": "5042.70"},
//     {"date": "2022-05-18 13:59:15", "balance": "5054.43", "equity": "5075.96"},
//     {"date": "2022-05-18 16:04:10", "balance": "5019.42", "equity": "5039.81"},
//     {"date": "2022-05-18 18:08:40", "balance": "5024.60", "equity": "5042.72"},
//     {"date": "2022-05-18 20:11:16", "balance": "4987.68", "equity": "5011.77"},
//     {"date": "2022-05-18 22:15:20", "balance": "4984.84", "equity": "5009.74"},
//     {"date": "2022-05-19 00:19:49", "balance": "4984.84", "equity": "5007.62"},
//     {"date": "2022-05-19 02:34:15", "balance": "4963.67", "equity": "4969.83"},
//     {"date": "2022-05-19 04:37:46", "balance": "4968.85", "equity": "4979.87"},
//     {"date": "2022-05-19 06:42:36", "balance": "4949.19", "equity": "4956.55"},
//     {"date": "2022-05-19 08:48:43", "balance": "4949.19", "equity": "4939.42"},
//     {"date": "2022-05-19 10:54:26", "balance": "4943.63", "equity": "4984.86"},
//     {"date": "2022-05-19 13:00:33", "balance": "4888.68", "equity": "4856.72"},
//     {"date": "2022-05-19 15:07:59", "balance": "4884.91", "equity": "4901.97"},
//     {"date": "2022-05-19 17:16:08", "balance": "4835.83", "equity": "4840.23"},
//     {"date": "2022-05-19 19:23:13", "balance": "4780.47", "equity": "4780.47"},
//     {"date": "2022-05-19 21:31:47", "balance": "4780.47", "equity": "4807.31"},
//     {"date": "2022-05-19 23:41:03", "balance": "4782.05", "equity": "4787.49"},
//     {"date": "2022-05-20 03:26:53", "balance": "4741.33", "equity": "4740.78"},
//     {"date": "2022-05-20 05:32:11", "balance": "4708.35", "equity": "4720.97"},
//     {"date": "2022-05-20 07:37:49", "balance": "4708.42", "equity": "4697.10"},
//     {"date": "2022-05-20 09:43:47", "balance": "4672.66", "equity": "4748.88"},
//     {"date": "2022-05-20 13:17:06", "balance": "4768.50", "equity": "4830.38"},
//     {"date": "2022-05-20 15:23:13", "balance": "4785.10", "equity": "4836.28"},
//     {"date": "2022-05-20 19:17:44", "balance": "4865.21", "equity": "4949.96"},
//     {"date": "2022-05-20 21:29:10", "balance": "4865.21", "equity": "4964.02"},
//     {"date": "2022-05-20 23:40:03", "balance": "4865.62", "equity": "4942.19"},
//     {"date": "2022-05-21 01:50:15", "balance": "4865.62", "equity": "4977.39"},
//     {"date": "2022-05-21 06:07:53", "balance": "5089.49", "equity": "5095.09"},
//     {"date": "2022-05-21 08:15:54", "balance": "5089.49", "equity": "5080.84"},
//     {"date": "2022-05-21 10:26:17", "balance": "5070.56", "equity": "5065.95"},
//     {"date": "2022-05-21 12:35:12", "balance": "5096.06", "equity": "5195.97"},
//     {"date": "2022-05-21 14:43:36", "balance": "5139.68", "equity": "5188.93"},
//     {"date": "2022-05-21 16:52:04", "balance": "5110.41", "equity": "5101.78"},
//     {"date": "2022-05-21 19:35:11", "balance": "5070.72", "equity": "5076.63"},
//     {"date": "2022-05-21 21:44:45", "balance": "5047.41", "equity": "5008.04"},
//     {"date": "2022-05-21 23:53:58", "balance": "4988.55", "equity": "5102.41"},
//     {"date": "2022-05-22 05:01:35", "balance": "4988.55", "equity": "5079.71"},
//     {"date": "2022-05-22 07:20:20", "balance": "4979.37", "equity": "4961.79"},
//     {"date": "2022-05-22 09:40:02", "balance": "4835.34", "equity": "4835.34"},
//     {"date": "2022-05-22 11:59:24", "balance": "4835.34", "equity": "4822.08"},
//     {"date": "2022-05-22 14:18:49", "balance": "4805.82", "equity": "4875.56"},
//     {"date": "2022-05-22 16:39:30", "balance": "4768.84", "equity": "4795.29"},
//     {"date": "2022-05-22 20:18:05", "balance": "4766.21", "equity": "4836.62"},
//     {"date": "2022-05-22 22:37:55", "balance": "4774.19", "equity": "5065.03"},
//     {"date": "2022-05-23 00:57:43", "balance": "4835.53", "equity": "5058.67"},
//     {"date": "2022-05-23 03:18:08", "balance": "4872.70", "equity": "4982.99"},
//     {"date": "2022-05-23 05:38:10", "balance": "4780.28", "equity": "4976.57"},
//     {"date": "2022-05-23 09:49:19", "balance": "4957.08", "equity": "5025.13"},
//     {"date": "2022-05-23 12:08:27", "balance": "4957.08", "equity": "5017.35"},
//     {"date": "2022-05-23 14:27:37", "balance": "4955.08", "equity": "5074.87"},
//     {"date": "2022-05-23 16:46:25", "balance": "4969.98", "equity": "5083.88"},
//     {"date": "2022-05-23 19:07:08", "balance": "5033.32", "equity": "5103.19"},
//     {"date": "2022-05-23 21:29:33", "balance": "5078.79", "equity": "5115.93"},
//     {"date": "2022-05-23 23:51:20", "balance": "5104.00", "equity": "5158.06"},
//     {"date": "2022-05-24 02:13:13", "balance": "5122.38", "equity": "5167.90"},
//     {"date": "2022-05-24 04:34:37", "balance": "5131.05", "equity": "5216.99"},
//     {"date": "2022-05-24 06:56:11", "balance": "5131.05", "equity": "5228.82"},
//     {"date": "2022-05-24 10:20:26", "balance": "5350.49", "equity": "5386.06"},
//     {"date": "2022-05-24 15:10:22", "balance": "5296.44", "equity": "5324.82"},
//     {"date": "2022-05-24 17:39:13", "balance": "5257.12", "equity": "5290.05"},
//     {"date": "2022-05-24 20:05:47", "balance": "5257.12", "equity": "5292.84"},
//     {"date": "2022-05-24 22:31:28", "balance": "5235.27", "equity": "5271.56"},
//     {"date": "2022-05-25 00:57:18", "balance": "5235.27", "equity": "5261.90"},
//     {"date": "2022-05-25 03:24:08", "balance": "5235.27", "equity": "5262.06"},
//     {"date": "2022-05-25 05:49:27", "balance": "5161.23", "equity": "5192.27"},
//     {"date": "2022-05-25 08:16:19", "balance": "5161.57", "equity": "5200.76"},
//     {"date": "2022-05-25 10:40:35", "balance": "5177.47", "equity": "5215.91"},
//     {"date": "2022-05-25 13:04:28", "balance": "5196.17", "equity": "5250.66"},
//     {"date": "2022-05-25 15:30:02", "balance": "5321.99", "equity": "5358.82"},
//     {"date": "2022-05-25 17:56:21", "balance": "5327.63", "equity": "5368.20"},
//     {"date": "2022-05-25 22:53:12", "balance": "5304.74", "equity": "5298.34"},
//     {"date": "2022-05-26 01:20:05", "balance": "5172.36", "equity": "5189.65"},
//     {"date": "2022-05-26 03:47:14", "balance": "5139.14", "equity": "5151.68"},
//     {"date": "2022-05-26 06:14:47", "balance": "5139.14", "equity": "5149.80"},
//     {"date": "2022-05-26 08:42:11", "balance": "5139.14", "equity": "5144.27"},
//     {"date": "2022-05-26 11:13:00", "balance": "5064.90", "equity": "5110.47"},
//     {"date": "2022-05-26 13:41:10", "balance": "5085.75", "equity": "5118.82"},
//     {"date": "2022-05-26 16:09:28", "balance": "5140.68", "equity": "5199.37"},
//     {"date": "2022-05-26 18:37:05", "balance": "5122.53", "equity": "5151.73"},
//     {"date": "2022-05-26 21:06:52", "balance": "5132.66", "equity": "5078.08"},
//     {"date": "2022-05-26 23:35:46", "balance": "5132.66", "equity": "5048.59"},
//     {"date": "2022-05-27 02:05:56", "balance": "5132.66", "equity": "5012.59"},
//     {"date": "2022-05-27 04:35:33", "balance": "4883.58", "equity": "4883.58"},
//     {"date": "2022-05-27 07:05:24", "balance": "4883.58", "equity": "4883.58"},
//     {"date": "2022-05-27 09:35:52", "balance": "4883.58", "equity": "4883.58"},
//     {"date": "2022-05-27 12:01:20", "balance": "4889.14", "equity": "4876.76"},
//     {"date": "2022-05-27 14:30:05", "balance": "4907.43", "equity": "4908.14"},
//     {"date": "2022-05-27 16:58:46", "balance": "4875.85", "equity": "4875.85"},
//     {"date": "2022-05-27 19:28:03", "balance": "4875.85", "equity": "4875.85"},
//     {"date": "2022-05-27 21:57:47", "balance": "4876.85", "equity": "4876.85"},
//     {"date": "2022-05-28 00:27:02", "balance": "4876.85", "equity": "4893.77"},
//     {"date": "2022-05-28 02:57:11", "balance": "4876.85", "equity": "4915.59"},
//     {"date": "2022-05-28 05:26:33", "balance": "4876.85", "equity": "4986.51"},
//     {"date": "2022-05-28 07:56:07", "balance": "4876.85", "equity": "5020.95"},
//     {"date": "2022-05-28 12:09:51", "balance": "4836.00", "equity": "4868.20"},
//     {"date": "2022-05-28 14:41:16", "balance": "4836.00", "equity": "4815.92"},
//     {"date": "2022-05-28 17:13:55", "balance": "4782.42", "equity": "4739.99"},
//     {"date": "2022-05-28 19:45:03", "balance": "4782.52", "equity": "4781.00"},
//     {"date": "2022-05-28 22:17:27", "balance": "4741.29", "equity": "4741.29"},
//     {"date": "2022-05-29 00:59:54", "balance": "4753.68", "equity": "4753.68"},
//     {"date": "2022-05-29 03:57:27", "balance": "4697.75", "equity": "4697.75"},
//     {"date": "2022-05-29 06:34:52", "balance": "4697.75", "equity": "4697.75"},
//     {"date": "2022-05-29 09:12:33", "balance": "4697.75", "equity": "4727.63"},
//     {"date": "2022-05-29 12:31:26", "balance": "4697.75", "equity": "4716.50"},
//     {"date": "2022-05-29 15:08:41", "balance": "4723.17", "equity": "4793.73"},
// ]



// //  const a= s.reduce((previousValue,currentValue,currentIndex,array)=>{
// //     //  console.log(previousValue)
// //     previousValue[currentValue.b]=previousValue[currentValue.b] || []
// //     // previousValue.push(currentValue)
// //     previousValue[currentValue.b].push(currentValue)
// //     return  previousValue

// //     //  console.log(previousValue,currentValue,currentIndex,array)

// //  },{})
// // s=s.sort((a,b)=>new Date(a.date).getDate()-new Date(b.date).getDate())
//  let hash = []
// let ss =  s.map((s,i,m,n)=>{
//      this[new Date(s.date).getDate()]= this[new Date(s.date).getDate()]|| []
//      this[new Date(s.date).getDate()].push(s)
//      return this
//  },[])[0]
// // console.log(ss)
// // console.log(a)
// for(let item in ss){
// hash.push(ss[item])
//     console.log(ss)

// }
// // console.log(hash)


// //  callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
// // console.log(a)


// // // // const ages = [3, 10, 18, 20];
// // // // document.getElementById("demo").innerHTML = ages.some(checkAdult);

// // // // function checkAdult(age) {
// // // //   return age > 189;
// // // // }


// // // // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // // // const myBest = fruits.slice(0,2);
// // // // fist value = index
// // // // second value = 



// // // Array.prototype.sleep=function(){
// // //         for (let i = 0; i < this.length; i++) {
// // //             this[i] = this[i].toUpperCase();


// // //     }
// // // }

// // // let aa = ["s","ss"]
// // // aa.sleep()
// // // console.log(aa)
// // // function Person(first, last, eye) {
// // //     this.firstName = first;
// // //     this.lastName = last;
// // //     this.eyeColor = eye;

// // //   }
// // //   const myFather = new Person("John", "Doe", "blue");
// // //   const myMother = new Person("Sally", "Rally", "green");
  
// // //   Person.prototype.nationality = "English";
  

// // //   console.log(myFather.nationality)
// // //   console.log(myFather)
// // //   console.log(myFather.eyeColor)

// // // Parameter	Description
// // // object	Required.
// // // The object to convert to an array.
// // // mapFunction	Optional.
// // // A map function to call on each item.
// // // thisValue	Optional.
// // // A value to use as thisfor the mapFunction

// // let text = "ABCDEFG"
// // const myArr = Array.from(text,(a,b)=>{
// //     // console.log(this)
// //     if(b%2==0){
// //     return b*b
// //     }
// //     return this
// // });
// // // console.log(myArr)

// // let sum = 0;
// // const numbers = [65, 44, 12, 4];
// // numbers.forEach(myFunction);

// // function myFunction(item) {
// //     // console.log(this)
// //   sum += item;
// // }

// // console.log(numbers.constructor)


// // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// //   fruits.copyWithin(3,1)


// // // //   console.log(fruits)



// // // // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // const f = fruits.entries();
// // // // console.log()

// // // for (let x of f) {
// // // //   console.log(x)

// // // }

// // // const ages = [32, 33, 16, 40];

// // // const c=ages.every(checkAge)
// // // console.log(c)
// // // function checkAge(age,i,j) {
// // //     console.log(i,j)
// // //   return age > 30;
// // // }

// // // const agess = [3, 10, 18, 20];

// // // function checkAge(age) {
// // //   return age >= 18;
// // // }

// // // // function myFunction() {
// // //     console.log(agess.find(checkAge))
// // // //   document.getElementById("demo").innerHTML = ages.find(checkAge);
// // // // }


// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// },0)
// Promise.resolve(3).then(console.log)
// console.log(4)

// try {
// let c= 0
// let v = c + n
// console.log(v) 
// }catch(error){
//     console.log(error.name)
// }

let d = [1,2,3,4,5,6,7]



// delete  d[1]
// delete  d[4]

// console.log(d.length)
// let a = [1,2,3,4]
// for(let s = 0;s<a.length;s++){
//     a.splice(s,1)

// }

let a = {s:"a"}

a.k=a

console.log(a)
// console.log(JSON.stringify(a))