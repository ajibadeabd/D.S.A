console.log('fr');

// let s = [11, 1, 9, 3, 4, 6, 7,1];
let s = [4, 6, 3, 1, 2];
for (let i = 0; i < s.length; ) {
  if (s[i] > s[i + 1]) {
    let a = s[i];
    s[i] = s[i + 1];
    s[i + 1] = a;
    i--;
  } else {
    i++;
  }
}
// console.log(s);
//  let a = 0
// let z = 0;

// while (z < s.length) {
//   console.log(z);
//   if (s[z] < s[z + 1]) {
//     let a = s[z];
//     s[z] = s[z + 1];
//     s[z + 1] = a;
//     // i=i-2;
//     z = z - 1;
//   } else {
//     z = z + 1;
//   }
// }
// console.log(s);

let m = 'bcba';
let sI = [1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0,1, 2, 1,2, 0, 0];
let eI = [3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0,3, 3, 1,2, 0, 0];
let sub = [2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0,2, 0, 0];


// setInterval(()=>{
//   console.log(process.hrtime.bigint() +4000000000n ,process.hrtime.bigint())
//   // console.log()
// },5000)
// m = m.split("")
let time1 = performance.now();
let loopTime1 = 0;
let res = '';
// const start = performance.now();

// await functionToBeMeasured();

// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);
for (let i = 0; i < eI.length; i++) {
  loopTime1++;

  let z = sI[i];
  let zx = eI[i];
  for (let j = z; j <= zx; j++) {
    res += m[j];
  }
  res+=" "
}
console.log(res);

console.log('loop time taken =', performance.now() - time1, {loopTimes: loopTime1});

// console.log(count);

// for (let i = 0; i < m.split('').length; i++) {
//   let res = '';
// }
let time = performance.now();
let test = true;
let t = {
  next: 0,
  currentIndex: 0,
  firstIndex: 0,
};
let res2 = '';
let loopTime = 0;
while (test) {
  loopTime++;
  if (t.currentIndex < sI.length) {
    if (t.firstIndex === 0) {
      t.next = sI[t.currentIndex];
      t.firstIndex = 1;
    }
    if (t.next <= eI[t.currentIndex]) {
      res2 += m[t.next];
      t.next++;
    } else {
      res2 += ' ';
      t.currentIndex++;
      t.firstIndex = 0;
      t.next = 0;
    }
  } else {
    test = false;
  }
}
console.log(res2);
console.log('loop time taken =', performance.now() - time, {loopTimes: loopTime});
