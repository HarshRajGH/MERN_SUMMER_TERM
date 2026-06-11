const student = [
    {
        name: "Harsh Raj",
        course:"Full Stack Development",
        marks: [90, 85, 92, 98]
    },
    {
        name: "Anjali Sharma",
        course:"Full Stack Development",
        marks: [88, 91, 95, 89]
    },
    {
        name: "Rohit Verma",
        course:"Full Stack Development",
        marks: [85, 87, 90, 92]
    },
    {
        name: "Priya Singh",
        course:"Full Stack Development",
        marks: [32, 55, 28, 65]
    }
]
//Convert the given array of student like bellow
// [
//     {
//         name: "Harsh Raj",
//         course:"Full Stack Development",
//         marks: [90, 85, 92, 98],
//         totalMarks: 365,
//         percentage: 91.25'
//         result status: "Pass"// if percentage is greater than 60% otherwise "Fail"
//     }

const updatedStudent = student.map((student) => {
    const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
    const percentage = ((totalMarks / 400) * 100).toFixed(2);
    const resultStatus = percentage > 60 ? "Pass" : "Fail";
    return {
        ...student,
        totalMarks,
        percentage,
        resultStatus
    };
});
console.log(updatedStudent);