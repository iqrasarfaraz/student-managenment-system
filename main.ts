class School{
    name: string;
    students:student[]=[];
    addStudent(stdobj: student){
        this.students.push(stdobj)
    }
    constructor(name:string){
        this.name=name;
    }
}
class student{
    name:string;
    age:number;
    SchoolName:string;

    constructor(name:string,age:number,SchoolName:string){
        this.name=name;
        this.age=age;
        this.SchoolName=SchoolName;
    }
}
{
    class teacher{
        name:string;
        age:n
    }
}
//school data
let school1 =new School("TCF");
let school2 =new School("Oakland Grammer School");
let school3 =new School("Galaxy Grammer Shool");
let school4 =new School("Rah-e-Nijat");
//student data
let s1 =new student("iqra",21,school1.name);
let s2 =new student("sana",18,school3.name);
let s3 =new student("hina",20,school4.name);
let s4 =new student("ayesha",25,school2.name);





console.log(school1)
console.log(s1)