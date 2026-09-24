let studentName = "Jason";
let age = 20;
let passingGrade = 75;
let total = 0;
let average = 0;

//Arrays
let subjects = ["Math","Science","Math","Programming"];
let grades = [80,85,90,95];
let remarks = ["Passed","Passed","Passed","Passed"];

// L1
for(let i = 0;i < subjects.length;i++){
    console.log(subjects[i] + ": " + grades[i]);
}

//L2
for(let i = 0;i < grades.length;i++){
    total += grades[i];
}

//calculate average
average = total / grades.length;

//C1
if(average >= 90){
    console.log("Excellent!");
}

//C2
if(average >= 75){
    console.log("Status: PASSED");
}else{
    console.log("Status:FAIELD");
}

//L3
for(let i = 0;i <grades.length; i++){

    //C3 
    if(grades[i] >= passingGrade){
    remarks[i] = "Passed";
}else{
    remarks[i] = "Faield";
   }
}

// END PROGRAM //

console.log("\n=================================");
console.log("       THIS IS ACTIVITY 1.1");
console.log("=================================");