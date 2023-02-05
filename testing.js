// // const source1 = [
// //     [{age: 23, name: 'john'}],
// //     [{age: 24, name: 'jane'}],
// //     [{age: 25, name: 'sam'}],
// //     [{age: 26, name: 'smith'}]
// //   ];
  
// //   const source2 = [
// //     [{age: 23, name: 'john'}],
// //     [{age: 24, name: 'jane'}],
// //     [{age: 25, name: 'sam'}],
// //     [{age: 26, name: 'smith'}],
// //     [{age: 27, name: 'mike'}],
// //     [{age: 28, name: 'joanne'}],
// //     [{age: 29, name: 'lois'}],
// //     [{age: 30, name: 'paul'}]
// //   ];
  
 
// // // let source  = [...source1,...source2].flat().reduce((initialState,currentObject)=>{
// // // let [newSource,hashMap]=initialState
// // // if( hashMap[currentObject.age] === undefined){
// // //     hashMap[currentObject.age] = currentObject.name
// // //     newSource.push(currentObject)
// // // }
// // // return initialState
// // // },[[],{}])[0]
// // //   console.log({ source});



// // //   const source1 = [
// // //     [{age: 23, name: 'john'}],
// // //     [{age: 24, name: 'jane'}],
// // //     [{age: 25, name: 'sam'}],
// // //     [{age: 26, name: 'smith'}]
// // //   ];
  
// // //   const source2 = [
// // //     [{age: 23, name: 'john'}],
// // //     [{age: 24, name: 'jane'}],
// // //     [{age: 25, name: 'sam'}],
// // //     [{age: 26, name: 'smith'}],
// // //     [{age: 27, name: 'mike'}],
// // //     [{age: 28, name: 'joanne'}],
// // //     [{age: 29, name: 'lois'}],
// // //     [{age: 30, name: 'paul'}]
// // //   ];
  
 
// // let source  = [...source1,...source2].flat().reduce((initialState,currentObject)=>{
// // let [newSource,hashMap]=initialState
// // if( hashMap[currentObject.age] === undefined){
// //     hashMap[currentObject.age] = currentObject.name
// //     newSource.push(currentObject)
// // } 
// // return initialState
// // },[[],{}])[0]
// //   console.log({ source});
// // let c = 0
// //   function flattenArray(arr) {
// //     let stack = [arr];
// //     let result = [];
// //     while (stack.length > 0) {
// //       let current = stack.pop();
// //       for (let i = 0; i < current.length; i++) {
// //         c++

// //         if (Array.isArray(current[i])) {
// //           stack.push(current[i]);
// //         } else {
// //           result.push(current[i]);
// //         }
// //       }
// //     }
// //     return result;
// //   }
  
// //   let input = [[1,2,3,1,2,3],[1,2,3,4,5,6],[1,2,3,7,8,9]];
// //   let flattened = flattenArray(input);
// //   console.log(flattened,c);

// //   console.log("****************")

// //  let initialArray =
// // [{
// //     "Field A": "ABC",
// //     "Variable Field A": "66"
// // },
// // {
// //     "Field A": "DEF",
// //     "Variable Field A": "70"
// // },
// // {
// //     "Field A": "GHI",
// //     "Variable Field A": "135"
// // },
// // {
// //     "Field A": "JKL",
// //     "Variable Field A": "19"
// // },
// // {
// //     "Field A": "ABC",
// //     "Variable Field B": "-729"
// // },
// // {
// //     "Field A": "GHI",
// //     "Variable Field B": "962"
// // },
// // {
// //     "Field A": "DEF",
// //     "Variable Field B": "334"
// // },
// // {
// //     "Field A": "JKL",
// //     "Variable Field B":"241"
// // }]



// // let response  = initialArray.reduce((storage,currentValue)=>{

// //   //console.log(currentValue)
// //   if(storage[currentValue["Field A"]] ){
// //     storage[currentValue["Field A"]] = {...storage[currentValue["Field A"]],...currentValue}

// //   }else{
// //     storage[currentValue["Field A"]]=currentValue
// //   }
// //   return storage
// // },{})
// // // console.log(Object.values(response))

// // // let getKeys = Object.keys(initialArray)
// // // console.log(getKeys)


// // function str_hash(s) {
// //   var hash = 0, i, chr;
// //   if (s.length === 0) return hash;
// //   for (i = 0; i < s.length; i++)
// //   {
// //     chr   = s.charCodeAt(i);

// //     hash  = ((hash * 2 ** 5) - hash) + chr;
// //     hash |= 0;
// //   }
// //   return hash;
// // };
// // console.log(
// // str_hash("PUT LONG STRING HERE"))

// // let num = 4
// // let shiftBy = 2
// // console.log(num * 2**shiftBy)
// // console.log(num << shiftBy)

 

// const checkInclude = (item, include) => {
//   let numOfSatisfied = 0;

//   conditions: for (let cond of include) {

//     for (let [key, value] of Object.entries(item)) {
//       // console.log(cond)
//       if (cond.hasOwnProperty(key) && cond[key] === value) {
//         numOfSatisfied++;
//         continue conditions;
//       }
//     }
//   }

//   return numOfSatisfied === include.length ? true : false;
// };

// const filterInclude = (data, include) => {
//   const result = data.filter((item) => checkInclude(item, include));

//   return result;
// };
// let data =[
//   { user: "mike@mail.com", rating: 20, disabled: false },
//   { user: "greg@mail.com", rating: 14, disabled: false },
//   { user: "john@mail.com", rating: 25, disabled: true }
// ]


// let include =  [{ disabled: false }, { rating: 20 }]
// // console.log(filterInclude(data,include))


// let mec = Object.entries(include)

// {
// // const checkInclude = (item, include) =>
// //   include.every(
// //     cond => Object.entries(cond)
// //     .every(([key, value]) => item.hasOwnProperty(key) && item[key] === value)
// //     );

// // const filterInclude = (data, include) => data.filter(item => checkInclude(item, include));


// // // console.log(filterInclude(data,include))



// }

// {

// let s = (data, include) => data.filter(item => {

// for(let key in include){
// console.log(key)

// }

// });

// console.log(s(data,include))


// }


 

let array = [{
    "Field A": "ABC",
    "Variable Field A": "66"
},
{
    "Field A": "DEF",
    "Variable Field A": "70"
},
{
    "Field B": "DEF",
    "Variable Field A": "70"
},
{
    "Field A": "GHI",
    "Variable Field A": "135"
},
{
    "Field A": "JKL",
    "Variable Field A": "19"
},
{
    "Field A": "ABC",
    "Variable Field B": "-729"
},
{
    "Field A": "GHI",
    "Variable Field B": "962"
},
{
    "Field A": "DEF",
    "Variable Field B": "334"
},
{
    "Field A": "JKL",
    "Variable Field B":"241"
}]



let response = array.reduce((storage,objectField)=>{
  let [ [fieldKey, fieldValue],[fieldVariableKey,fieldVariableValue]] = Object.entries(objectField);
  if(!storage[fieldKey+fieldValue] ){
    storage[fieldKey+fieldValue]=objectField
  }else{
    storage[fieldKey+fieldValue][fieldVariableKey]=fieldVariableValue
  }
  return storage
},{})

response = Object.values(response)
// 
// console.log(response)

// {
//   let response = array.reduce((storage, objectField) => {
//     let keyValue = Object.entries(objectField);
//     if (!storage[keyValue[0][0]]) {
//       storage[keyValue[0][0]] = objectField;
//     } else {
//       storage[keyValue[0][0]][keyValue[1][0]] = keyValue[1][1];
//     }
//     return storage;
//   }, {});
  
//   response = Object.values(response);
//   console.log(response)
// }


let data= [
  { user: "mike@mail.com", rating: 20, disabled: false },
  { user: "greg@mail.com", rating: 14, disabled: false },
  { user: "john@mail.com", rating: 25, disabled: true }
]


let include= [{ disabled: false }, { rating: 20 }]