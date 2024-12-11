// Template Strings
const courseTeacher = "rahul kumar";
const courseName = "BTECH CS24";
const courseId = "18181810";

const studentData = courseTeacher + " " + courseName + " " + courseId;
console.log(studentData);

const studentDataTemplate = `
${courseTeacher} ${courseName} ${courseId}`;

console.log(studentDataTemplate);

// method of replace
let text = "Hello World! World is awesome.";
let result = text.replace(/World/g, "JavaScript");
console.log(result); 
// Output: "Hello JavaScript! JavaScript is awesome."
