let rawGrades = [22, 38, 33, 73, 81, 56];

const result = gradingStudents(rawGrades);
console.log(result);

function gradingStudents(grades) {
   let result = grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const gradeRightNumber = +('' + grade)[1];
        const diffBasis = gradeRightNumber <= 5 ? 5 : 10;
        const rangeDiff = diffBasis - gradeRightNumber;
        
        if (rangeDiff < 3) {
            return grade + rangeDiff;
        } else {
            return grade;
        }  
   });

   return result;
}