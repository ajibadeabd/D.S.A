// // // // function maxDepth(node)
// // // //     {
// // // //         if (node == null)
// // // //             return -1;
// // // //         else
// // // //         {
// // // //             /* compute the depth of each subtree */
// // // //             let lDepth = maxDepth(node.left);
// // // //             let rDepth = maxDepth(node.right);
// // // //             console.log(lDepth,rDepth)
   
// // // //             /* use the larger one */
// // // //             // if (lDepth > rDepth)
// // // //             //     return (lDepth + 1);
// // // //             //  else
// // // //             //     return (rDepth + 1);
// // // //         }
// // // //     }
     
// // // //     /* Driver program to test above functions */
     
// // // // // A binary tree node
// // // // class Node
// // // // {
// // // //     constructor(item)
// // // //     {
// // // //         this.data=item;
// // // //         this.left=this.right=null;
// // // //     }
// // // // }
// // // //        root = new Node(1);
// // // //         root.left = new Node(2);
// // // //         root.right = new Node(3);
// // // //         // root.left.left = new Node(4);
// // // //         // root.left.right = new Node(5);
// // // //         // root.left.right.right = new Node(7);
// // // //         // root.left.right.left = new Node(7);
// // // //    console.log(maxDepth(root)+1)

// // // function calcTime (digits, num ){
// // //     const digits_arr = Array.from(digits);
// // //     // console.log(digits_arr)
// // //     let last_index = 0, new_index, time =0;
// // //     for (const n of num) {
// // //         // console.log(n)
// // //         new_index =digits_arr.findIndex(x => x===n);
// // //         console.log(new_index)
// // //         time += Math.abs(new_index - last_index);
// // //         // console.log(time)

// // //         last_index = new_index;
// // //     }
// // //     return time;
// // // }
// // // console.log(calcTime('8459761203','5439'))



// // // // digits = '8459761203', num = 




// // const arr = [1,3,2,4]

// // let a=0

// // javascript

// // i   arr                         swap (indices)
// //   let array =  [1,3,2]   
//   let array =  [7, 1, 3, 2, 4, 5, 6]   
// //    [2, 1, 3, 7, 4, 5, 6]   
// //    [1, 2, 3, 7, 4, 5, 6]   
// //    [1, 2, 3, 4, 7, 5, 6]   
// //    [1, 2, 3, 4, 5, 7, 6]   
// //    [1, 2, 3, 4, 5, 6, 7]

// // while(){
// // array.sort((a,b)=>{console.log(1);return a-b})
// // }
// // for(){

// // }

 
// console.log(sortArrays(array))
// function sortArrays(arr)
// {


// //     let length= arr.length
// // let s = {}
// // let a=0
// // 		for (let j = 0; j < length; j++) {
// // s[j]=arr[j]
// //         }
// //         console.log(s)
// //         for (let j = 0; j < length; j++) {
// //             if(arr[j]>arr[j+1]){
// //                 a=arr[j]
// //                 console.log(a)

// //             }

// //         }

// // 	// Finding the length of array 'arr'
// // 		let length = arr.length;

// // 		// Sorting using a single loop
// // 		for (let j = 0; j < length - 1; j++) {

// // 			// Checking the condition for two
// // 			// simultaneous elements of the array
// // 			if (arr[j] > arr[j + 1]) {
// // console.log(1)
// // 				// Swapping the elements.
// // 				let temp = arr[j];
// // 				arr[j] = arr[j + 1];
// // 				arr[j + 1] = temp;

// // 				// updating the value of j = -1
// // 				// so after getting updated for j++
// // 				// in the loop it becomes 0 and
// // 				// the loop begins from the start.
// // 				// j = -1;
// // 			}
// // 		}

// 		// return arr;
// }

  let array =  [7, 1, 3, 2, 4, 5, 6]   
 
console.log(minSwaps(array))
function minSwaps(arr)
{
	let n = arr.length;

		// Create two arrays and
		// use as pairs where first
		// array is element and second array
		// is position of first element
		let arrpos = [];
		for (let i = 0; i < n; i++)
			arrpos.push([arr[i], i]);
		console.log(arrpos)

		// Sort the array by array element values to
		// get right position of every element as the
		// elements of second array.
		arrpos.sort(function(a,b){return a[0]-b[0];});
		console.log(arrpos)


		// To keep track of visited elements. Initialize
		// all elements as not visited or false.
		let vis = new Array(n);

		for(let i=0;i<n;i++)
		{
			vis[i]=false;
		}
		
console.log(vis)
		// Initialize result
		let ans = 0;
		
		// Traverse array elements
		for (let i = 0; i < n; i++)
		{
			// already swapped and corrected or
			// already present at correct pos
			if (vis[i] || arrpos[i][1] == i)
				continue;

			// find out the number of node in
			// this cycle and add in ans
			let cycle_size = 0;
			let j = i;
			while (!vis[j])
			{
				vis[j] = true;

				// move to next node
				
				j = arrpos[j][1];
				
				cycle_size++;
			}

			// Update answer by adding current cycle.
			if(cycle_size > 0)
			{
				ans += (cycle_size - 1);
			}
		}

		// Return result
		return ans;
}
