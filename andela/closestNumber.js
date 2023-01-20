function closestNumber(numbers) {
	numbers.sort((a, b) => a - b);
   
	let miniDiff = Number.MAX_VALUE;
	let pairs = "";
	for (let i = 0; i < numbers.length - 1; i++) {
	  let absDiff;
	  if (
		(numbers[i] > 0 && numbers[i + 1] > 0) ||
		(numbers[i] < 0 && numbers[i + 1])
	  ) {
		absDiff = Math.abs(numbers[i] - numbers[i + 1]);
	  } else {
		absDiff = Math.abs(numbers[i]) + Math.abs(numbers[i + 1]);
	  }
   
	  if (absDiff < miniDiff) {
		miniDiff = absDiff;
		pairs =[];
		 pairs.push("" + numbers[i] + " " + numbers[i + 1]   )
	  } else if (absDiff == miniDiff) {
		pairs .push( " " + numbers[i] + " " + numbers[i + 1]  )
	  }
	}
	console.log(miniDiff)
	console.log(pairs.join("")
		);
		return miniDiff
  } 

//   closestNumber([-5 ,15 ,25, 71 ,63,93,])
// closestNumber([-5 ,15 ,25, 71 ,63,93 ,101])
closestNumber([-59, -36, -13, 1 ,-53, -92 ,-2, -96, -54, 75])
 