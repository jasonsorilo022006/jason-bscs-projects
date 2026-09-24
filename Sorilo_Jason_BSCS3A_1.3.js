// 10 LET VARIABLES //

let studentName = "Jason";
let studentAge = 20;
let studentCourse = "BSCS";
let studentYear = 3;
let attendance = 92;
let grade = 85;
let uniformStatus = "Complete";
let classroomStatus = "Clean";
let libraryBooks = 2;
let schoolStatus = "Active";

// 10 CONST VARIABLES //

const schoolName = "North West Samar State University";
const schoolYear = "2026-2027";
const passingGrade = 75;
const minimumAttendance = 80;
const schoolStart = "7:30 AM";
const schoolEnd = "5:00 PM";
const uniformRule = "Wear the proper school uniform.";
const respectRule = "Respect teachers and classmates.";
const cleanlinessRule = "Keep the classroom clean.";
const cheatingRule = "Cheating is strictly prohibited.";

// 5 ARROW FUNCTIONS //

const checkGrade = (grade) => {
    return grade >= passingGrade;
};

const checkAttendance = (attendance) => {
    return attendance >= minimumAttendance;
};

const greetStudent = (name) => {
    return `Welcome, ${name}!`;
};

const calculateBooks = (books) => {
    return books + 1;
};

const displayRule = (rule) => {
    return `School Rule: ${rule}`;
};

// 10 TEMPLATE LITERALS //

console.log(`${schoolName}`);
console.log(`School Year: ${schoolYear}`);
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Course: ${studentCourse}`);
console.log(`Year Level: ${studentYear}`);
console.log(`Attendance: ${attendance}%`);
console.log(`Grade: ${grade}`);
console.log(`Uniform Status: ${uniformStatus}`);
console.log(`Classroom Status: ${classroomStatus}`);

// 3 DESTRUCTURED ARRAYS //

const studentNames = ["Jason", "Limuel", "Meynard"];
const [firstStudent, secondStudent, thirdStudent] = studentNames;

const subjects = ["Programming", "Networking", "Database"];
const [subjectOne, subjectTwo, subjectThree] = subjects;

const schoolHours = ["7:30 AM", "12:00 PM", "5:00 PM"];
const [openingTime, lunchTime, closingTime] = schoolHours;

// 3 DESTRUCTURED OBJECT LITERALS //

const student = {
    name: "Jason",
    course: "BSCS",
    year: 3
};

const { name, course, year } = student;


const teacher = {
    teacherName: "Mr. Santos",
    subject: "Programming",
    room: "Laboratory 1"
};

const { teacherName, subject, room } = teacher;


const classroom = {
    building: "Main Building",
    floor: 2,
    capacity: 40
};

const { building, floor, capacity } = classroom;

// 2 ARRAYS USING SPREAD OPERATOR //

const morningStudents = ["Jason", "Limuel", "Meynard"];
const afternoonStudents = ["Justin", "Mark", "John"];

const allStudents = [...morningStudents, ...afternoonStudents];

const newStudents = ["Anna", "Maria"];
const completeStudentList = [...allStudents, ...newStudents];

// 2 OBJECT LITERALS USING SPREAD OPERATOR //

const basicStudentInfo = {
    name: "Jason",
    course: "BSCS"
};

const additionalStudentInfo = {
    year: 3,
    section: "3A"
};

const completeStudentInfo = {
    ...basicStudentInfo,
    ...additionalStudentInfo
};


const basicRule = {
    uniform: "Required",
    attendance: "80% minimum"
};

const additionalRule = {
    cleanliness: "Required",
    respect: "Required"
};

const completeRules = {
    ...basicRule,
    ...additionalRule
};

// 2 ARRAYS USING .map() //

const students = ["Jason", "Limuel", "Meynard", "Justin"];

const studentGreetings = students.map((student) => {
    return `Hello, ${student}!`;
});

console.log("\nStudent Greetings:");
console.log(studentGreetings);


const grades = [85, 90, 78, 92];

const updatedGrades = grades.map((grade) => {
    return grade + 2;
});

console.log("\nUpdated Grades:");
console.log(updatedGrades);

// 2 ARRAYS USING .filter() //

const allGrades = [65, 75, 80, 85, 90, 70];

const passingStudents = allGrades.filter((grade) => {
    return grade >= passingGrade;
});

console.log("\nPassing Grades:");
console.log(passingStudents);


const studentAttendance = [70, 82, 90, 95, 75, 60];

const qualifiedStudents = studentAttendance.filter((attendance) => {
    return attendance >= minimumAttendance;
});

console.log("\nQualified Attendance:");
console.log(qualifiedStudents);

// 2 OBJECT LITERALS USING OPTIONAL CHAINING //

const studentProfile = {
    name: "Jason",
    contact: {
        email: "jasonsorilo711@gmail.com"
    }
};

const studentEmail = studentProfile.contact?.email;

console.log(`\nStudent Email: ${studentEmail}`);


const schoolInformation = {
    name: "North West Samar State University",
    president: {
        name: "Atty.Lorelie Fabillar-Tangaran,DM"
    }
};

const presidentName = schoolInformation.president?.name;

console.log(`President: ${presidentName}`);


// SCHOOL RULES OUTPUT //

console.log("\n==========================================");
console.log("           SCHOOL RULES");
console.log("==========================================");

console.log(displayRule(uniformRule));
console.log(displayRule(respectRule));
console.log(displayRule(cleanlinessRule));
console.log(displayRule(cheatingRule));

console.log(`School hours are from ${schoolStart} to ${schoolEnd}.`);


//  CHECK STUDENT STATUS //

console.log("\n==========================================");
console.log("          STUDENT STATUS");
console.log("==========================================");

console.log(greetStudent(studentName));

if (checkGrade(grade)) {
    console.log(`Grade Result: ${grade} is passing.`);
} else {
    console.log(`Grade Result: ${grade} is failing.`);
}

if (checkAttendance(attendance)) {
    console.log(`Attendance Result: ${attendance}% meets the requirement.`);
} else {
    console.log(`Attendance Result: ${attendance}% is below the requirement.`);
}

console.log(`Current library books: ${libraryBooks}`);
console.log(`After borrowing another book: ${calculateBooks(libraryBooks)}`);


//  DESTRUCTURED DATA OUTPUT //

console.log("\n==========================================");
console.log("       DESTRUCTURED INFORMATION");
console.log("==========================================");

console.log(`Students: ${firstStudent}, ${secondStudent}, ${thirdStudent}`);
console.log(`Subjects: ${subjectOne}, ${subjectTwo}, ${subjectThree}`);
console.log(`School Hours: ${openingTime}, ${lunchTime}, ${closingTime}`);

console.log(`Student: ${name}, ${course}, Year ${year}`);
console.log(`Teacher: ${teacherName}, ${subject}, ${room}`);
console.log(`Classroom: ${building}, Floor ${floor}, Capacity ${capacity}`);


//  SPREAD OPERATOR OUTPUT //

console.log("\n==========================================");
console.log("          SPREAD OPERATORS");
console.log("==========================================");

console.log("All Students:", allStudents);
console.log("Complete Student List:", completeStudentList);

console.log("Complete Student Information:", completeStudentInfo);
console.log("Complete School Rules:", completeRules);


// END OF PROGRAM //

console.log("\n==========================================");
console.log("       END PROGRAM                ");
console.log("       THANK YOU                  ");
console.log("==========================================");