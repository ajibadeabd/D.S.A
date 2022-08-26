
function gradingStudents(grades) {
   // Write your code here
   return grades.map((grade)=>{
       const eachGrade= String(grade)
       const lastNumber= eachGrade[eachGrade.length-1]
       let aa 
       if(grade<37) return grade
       let gage = lastNumber > 5 ? 10 : 5
       aa = lastNumber>5? (gage-lastNumber)<3: (gage-lastNumber) <3
       return ! aa ? +eachGrade : grade + (gage-lastNumber)
   })

}
console.log(gradingStudents([13,44,76,98,37,39,33]))