// 1. VARIABLES - 3 //

let schoolName = "North West Samar State University";
let schoolYear = "2026-2027";
let passingGrade = 75;
let systemStatus = "Active";


// 2. ARRAYS  //

let students = ["Jason", "Limuel", "Meynard", "Justin"];

let courses = ["BSCS", "BSIT", "BSIS","MMD"];

let grades = [85, 90, 78, 92];

let subjects = ["Programming", "Database", "Networking","Software Engineering"];


// 3. OBJECT LITERAL 1 //

const school = {
    name: " North West Samar State University",
    location: "Calbayog City,",
    students: 10000
};

// 4. OBJECT LITERAL 2 //

const classroom = {
    roomNumber: "Room 204",
    capacity: 50,
    building: "College of computing and information sciences"
};


// 5. CLASS 1 - Person //

class Person {

    // CONSTRUCTOR 1 //
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // METHOD 1 //
    introduce() {
        console.log(`Hello! My name is ${this.name}.`);
    }

    // METHOD 2 //
    showAge() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}


// 6. CLASS 2 - Student //
// INHERITANCE 1 //

class Student extends Person {

    constructor(name, age, course, grade) {
        super(name, age);

        // ENCAPSULATION 1 //
        this._course = course;

        // ENCAPSULATION 2 //
        this._grade = grade;
    }

    // METHOD 3 //
    study() {
        console.log(`${this.name} is studying ${this._course}.`);
    }

    // Encapsulation using getter //
    getGrade() {
        return this._grade;
    }

    // Encapsulation using setter //
    setGrade(newGrade) {
        if (newGrade >= 0 && newGrade <= 100) {
            this._grade = newGrade;
        } else {
            console.log("Invalid grade.");
        }
    }

    // CONDITIONAL 1 //
    checkStatus() {
        if (this._grade >= passingGrade) {
            console.log(`${this.name}: PASSED`);
        } else {
            console.log(`${this.name}: FAILED`);
        }
    }
}

// 7. CLASS 3 - Teacher //
// INHERITANCE 2 //

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // METHOD 4 //
    teach() {
        console.log(
            `${this.name} is teaching ${this.subject}.`
        );
    }

    // POLYMORPHISM 1 //
    introduce() {
        console.log(
            `I am Teacher ${this.name}, and I teach ${this.subject}.`
        );
    }
}

// 8. CLASS 4 - Course //

class Course {

    constructor(courseName, duration) {
        this.courseName = courseName;
        this.duration = duration;
    }

    // METHOD 5 //
    showCourse() {
        console.log(
            `Course: ${this.courseName} | Duration: ${this.duration} years`
        );
    }

    // METHOD 6 //
    enroll(student) {
        console.log(
            `${student.name} enrolled in ${this.courseName}.`
        );
    }
}

// 9. ABSTRACTION 1 //

function calculateAverage(numbers) {

    let total = 0;

    // LOOP 1 - for loop
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total / numbers.length;
}

// 10. OBJECTS - 4 OBJECTS //

let student1 = new Student(
    "Jason",
    20,
    "BSCS",
    85
);

let student2 = new Student(
    "Limuel",
    20,
    "BSCS",
    72
);

let teacher1 = new Teacher(
    "Meynard",
    20,
    "Programming"
);

let course1 = new Course(
    "Computer Science",
    4
);

// DISPLAY SCHOOL INFORMATION //

console.log("=================================");
console.log("      STUDENT MANAGEMENT SYSTEM");
console.log("=================================");

console.log("School:", school.name);
console.log("Location:", school.location);
console.log("School Year:", schoolYear);
console.log("Status:", systemStatus);

console.log("\nClassroom Information:");
console.log("Room:", classroom.roomNumber);
console.log("Capacity:", classroom.capacity);

// OBJECT METHODS //

console.log("\n--- STUDENT INFORMATION ---");

student1.introduce();
student1.showAge();
student1.study();
student1.checkStatus();

console.log("\nStudent 2:");

student2.introduce();
student2.showAge();
student2.study();
student2.checkStatus();

// TEACHER INFORMATION //

console.log("\n--- TEACHER INFORMATION ---");

teacher1.introduce();
teacher1.showAge();
teacher1.teach();

// COURSE INFORMATION //

console.log("\n--- COURSE INFORMATION ---");

course1.showCourse();
course1.enroll(student1);

// ABSTRACTION //

console.log("\n--- GRADE CALCULATION ---");

let studentGrades = [85, 90, 88];

let average = calculateAverage(studentGrades);

console.log("Average Grade:", average);


// CONDITIONALS //


// CONDITIONAL 2 //

if (average >= 90) {
    console.log("Excellent performance!");
} else if (average >= 75) {
    console.log("Good performance!");
} else {
    console.log("Needs improvement.");
}

// CONDITIONAL 3 //

if (student1.getGrade() >= 75 && student2.getGrade() >= 75) {
    console.log("Both students passed.");
} else {
    console.log("At least one student failed.");
}


// LOOPS //


// LOOP 1 - for loop //

console.log("\n--- STUDENT LIST ---");

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
}


// LOOP 2  //

console.log("\n--- COURSES ---");

for (let course of courses) {
    console.log(course);
}


// LOOP 3 //

console.log("\n--- GRADES ---");

let index = 0;

while (index < grades.length) {
    console.log("Grade:", grades[index]);
    index++;
}


// ENCAPSULATION TEST //

console.log("\n--- ENCAPSULATION TEST ---");

console.log("Original Grade:", student1.getGrade());

student1.setGrade(95);

console.log("Updated Grade:", student1.getGrade());

student1.checkStatus();


// ARRAY OF SUBJECTS //

console.log("\n--- SUBJECTS ---");

subjects.forEach(function(subject) {
    console.log("Subject:", subject);
});


// END PROGRAM //

console.log("\n=================================");
console.log("       PROGRAM FINISHED");
console.log("=================================");

console.log("\n=================================");
console.log("  THIS IS ACTIVITY 1.2 THANK YOU");
console.log("=================================");