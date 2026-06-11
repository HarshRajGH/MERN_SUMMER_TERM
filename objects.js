const students = [
{
    name: "Harsh",
    age: 20,
    city: "Bihar",
    isGraduated: true,
    hobbies: ["Reading", "Coding", "Traveling"],
    total_marks: 95,
},
{
    name: "Priya",
    age: 22,
    city: "Delhi",
    isGraduated: false,
    hobbies: ["Painting", "Dancing", "Writing"],
    total_marks: 78,
},
{
    name: "Rahul",
    age: 25,
    city: "Mumbai",
    isGraduated: true,
    total_marks: 92,
    hobbies: ["Cooking", "Gaming", "Hiking"],
},
{
    name: "Anjali",
    age: 19,
    city: "Kolkata",
    isGraduated: false,
    hobbies: ["Singing", "Yoga", "Photography"],
    total_marks: 88
}
];

const updatedStudents = students.map(s=>{
    const percentage = (s.total_marks / 150) * 100;
    // s.percentage = percentage.toFixed(2).toString() + "%";
    // return s; //here we are mutating the original object, which is not a good practice. Instead, we can create a new object with the percentage property and return it.
    return {
        ...s,
        percentage: percentage.toFixed(2).toString() + "%"
    }
});
console.log("Original students:", students); 
console.log("Updated students:", updatedStudents); 

//array map

// const arr =[2,3,4,5,6];
// const doubledArr = arr.map((num)=>{
//     return num * 2;
// });
// console.log(`Original array: ${arr}`);
// console.log(`Doubled array: ${doubledArr}`);


//reduce function....

const sumOfAges = students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
}, 0);
console.log(`The sum of ages of all students is: ${sumOfAges}`);

// Questions 1= use the reduce function to find the average marks of all students
const totalMarks = students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total_marks;
}, 0);
const averageMarks = totalMarks / students.length;
console.log(`The average marks of all students is: ${averageMarks.toFixed(2)}`);

//Questions 2 = use map Add result status to each student object based on their percenrage.
//if percentage is above 60% then result is "Pass" otherwise "Fail".

const updatedStudentsWithResult = updatedStudents.map(s => {
    const percentage = (s.total_marks / 150) * 100;
    const result = percentage > 60 ? "Pass" : "Fail";
    return {
        ...s,
        percentage: percentage.toFixed(2) + "%",
        result: result
    };
});
console.log("Updated students with result status:", updatedStudentsWithResult);

//filter function in js
const studentsAbove85 = students.filter(s => s.total_marks >= 85);
console.log("Students with marks above 85: ", studentsAbove85);

const percentageAbove60 = updatedStudents.filter(s => (s.total_marks / 150) * 100 > 60);
console.log("Students with percentage above 60%: ", percentageAbove60);
