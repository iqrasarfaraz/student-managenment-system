class School {
    name;
    students = [];
    addStudent(stdobj) {
        this.students.push(stdobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class students {
    name;
    age;
    SchoolName;
    constructor(name, age, SchoolName) {
        this.name = name;
        this.age = age;
        this.SchoolName = SchoolName;
    }
}
//school data
let school1 = new School("TCF");
let school2 = new School("Oakland Grammer School");
let school3 = new School("Galaxy Grammer Shool");
let school4 = new School("Rah-e-Nijat");
//student data
let s1 = new students("iqra", 21, school1.name);
let s2 = new students("sana", 18, school3.name);
let s3 = new students("hina", 20, school4.name);
let s4 = new students("ayesha", 25, school2.name);
console.log(school1);
console.log(s1);
export {};
