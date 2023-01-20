let count = 0
const insertion_Sort = (s) => {
    let start =  performance.now();
    let position = 0

    for (let i = 0; i < s.length-1; ) {
        count++
        if (s[i] > s[i + 1]) {
           [s[i], s[i + 1]] = [s[i+1], s[i ]] 
            i--;
        } else {
            i=position + 1
            position++
        }
    }
    let end =  performance.now();
  console.log(end-start,"millisecond")
    return s
  }
  console.log(
 insertion_Sort([3, 0, 2, 5, -1, 4, 1])
)
 console.log(count, "iteration times")

 
let   c=  0 
const insertion_Sorts = (nums) => {
    let start =  performance.now();
    for (let i = 1; i < nums.length; i++) {
        c++
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        c++
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }

    let end =  performance.now();
  console.log(end-start,"millisecond")
    return nums
  }
  console.log(insertion_Sorts([3, 0, 2, 5, -1, 4, 1]));
  console.log({c})


 
let   ccc=  0 
const insertion_Sorts1 = (nums) => {
    let start =  performance.now();
    for (let i = 1; i < nums.length; i++) {
        ccc++
      let j = i
      while (j >= 0 && nums[j] > nums[j+1]) {
        ccc++
       [ nums[j + 1], nums[j ]] =    [ nums[j], nums[j +1]] 
        j--
      }
    }

    let end =  performance.now();
  console.log(end-start,"millisecond",1)
    return nums
  }
  console.log(insertion_Sorts1([3, 0, 2, 5, -1, 4, 1]));
  console.log({c})
 
let   cc=  0 
const insertion_Sort2 = (nums) => {
    let start =  performance.now();

    for (let i = 1; i < nums.length; i++) {
        cc++
      let temp = nums[i]

    for(j=i-1;j>=0&& nums[j]>temp;j--){
        nums[j + 1] = nums[j]
    }
    nums[j+1] = temp

    }

    let end =  performance.now();
  console.log(end-start,"millisecond")

    return nums
  }
  console.log(insertion_Sort2([3, 0, 2, 5, -1, 4, 1]));
  console.log({c})
 

let   czc=  0 
const insertion_Sort2z = (nums) => {
    let start =  performance.now();

    for (let i = 1; i < nums.length; i++) {
        czc++
    for(j=i-1;j>=0&& nums[j]>nums[j+1];j--){
       [ nums[j + 1], nums[j ] ] = [nums[j], nums[j + 1]]
    }
    }

    let end =  performance.now();
  console.log(end-start,"millisecond",2)

    return nums
  }
  console.log(insertion_Sort2z([3, 0, 2, 5, -1, 4, 1]));
  console.log({c})
 