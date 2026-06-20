const students = [
  { id: 1, name: 'Aman', marks: 85, attendance: 92 },
  { id: 2, name: 'Riya', marks: 38, attendance: 76 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 29, attendance: 95 }
];

// filter for students who have passed (marks >= 40 and attendance >= 40)
const passedstudents = students.filter(student => student.marks >= 40 && student.attendance >= 40);
 // map function for report card
const studentReport = students.map(({ name, marks, attendance }) => {
    const grade = marks >= 80 ? 'A' : marks >= 60 ? 'B' : marks >= 40 ? 'C' : 'F';
  return { name, marks, attendance, grade };
});

// reduce function to calculate average marks
const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = (totalMarks / students.length).toFixed(2);

// template literals for output.

console.log(`the passed students are: ${passedstudents.map(student => student.name).join(', ')}`);
console.log('Student Report Card:', studentReport);
console.log(`Average Marks of the class: ${averageMarks}`);

//topper's name and marks
const topper = students.reduce((max, student) => student.marks > max.marks ? student : max, students[0]);
console.log(`Topper: ${topper.name}, Marks: ${topper.marks}`);
