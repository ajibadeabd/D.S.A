const source1 = [
    [{age: 23, name: 'john'}],
    [{age: 24, name: 'jane'}],
    [{age: 25, name: 'sam'}],
    [{age: 26, name: 'smith'}]
  ];
  
  const source2 = [
    [{age: 23, name: 'john'}],
    [{age: 24, name: 'jane'}],
    [{age: 25, name: 'sam'}],
    [{age: 26, name: 'smith'}],
    [{age: 27, name: 'mike'}],
    [{age: 28, name: 'joanne'}],
    [{age: 29, name: 'lois'}],
    [{age: 30, name: 'paul'}]
  ];
  
 
// let source  = [...source1,...source2].flat().reduce((initialState,currentObject)=>{
// let [newSource,hashMap]=initialState
// if( hashMap[currentObject.age] === undefined){
//     hashMap[currentObject.age] = currentObject.name
//     newSource.push(currentObject)
// }
// return initialState
// },[[],{}])[0]
//   console.log({ source});



//   const source1 = [
//     [{age: 23, name: 'john'}],
//     [{age: 24, name: 'jane'}],
//     [{age: 25, name: 'sam'}],
//     [{age: 26, name: 'smith'}]
//   ];
  
//   const source2 = [
//     [{age: 23, name: 'john'}],
//     [{age: 24, name: 'jane'}],
//     [{age: 25, name: 'sam'}],
//     [{age: 26, name: 'smith'}],
//     [{age: 27, name: 'mike'}],
//     [{age: 28, name: 'joanne'}],
//     [{age: 29, name: 'lois'}],
//     [{age: 30, name: 'paul'}]
//   ];
  
 
let source  = [...source1,...source2].flat().reduce((initialState,currentObject)=>{
let [newSource,hashMap]=initialState
if( hashMap[currentObject.age] === undefined){
    hashMap[currentObject.age] = currentObject.name
    newSource.push(currentObject)
} 
return initialState
},[[],{}])[0]
  console.log({ source});
let c = 0
  function flattenArray(arr) {
    let stack = [arr];
    let result = [];
    while (stack.length > 0) {
      let current = stack.pop();
      for (let i = 0; i < current.length; i++) {
        c++

        if (Array.isArray(current[i])) {
          stack.push(current[i]);
        } else {
          result.push(current[i]);
        }
      }
    }
    return result;
  }
  
  let input = [[1,2,3,1,2,3],[1,2,3,4,5,6],[1,2,3,7,8,9]];
  let flattened = flattenArray(input);
  console.log(flattened,c);

  console.log("****************")

 let initialArray =
[{
    "Field A": "ABC",
    "Variable Field A": "66"
},
{
    "Field A": "DEF",
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



let response  = initialArray.reduce((storage,currentValue)=>{

  //console.log(currentValue)
  if(storage[currentValue["Field A"]] ){
    storage[currentValue["Field A"]] = {...storage[currentValue["Field A"]],...currentValue}

  }else{
    storage[currentValue["Field A"]]=currentValue
  }
  return storage
},{})
console.log(Object.values(response))

// let getKeys = Object.keys(initialArray)
// console.log(getKeys)


