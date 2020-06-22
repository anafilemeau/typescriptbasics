
enum LanguageKnown{English,French,Spanish}

interface StudentInfo{
    Name: String,
    Age: Number,
    Phone: Number,
    Language: String,
}

let student: StudentInfo = {
    Name: "Ana",
    Age: 35,
    Phone: 2123123,
    Language: LanguageKnown[LanguageKnown.Spanish]
}

let studentsList: StudentInfo[] = [
    {Name: "Eduardo", Age:34, Phone:3242343, Language:LanguageKnown[LanguageKnown.English]}, 
    {Name:"Leonor", Age:65, Phone: 980808, Language:LanguageKnown[LanguageKnown.French]}
]

studentsList.push(student)

// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];
//     console.log("Idade: " + element.Age 
//     + " com Nome: " + element.Name 
//     + " e Telefone: " + element.Phone 
//     + "e falam Idioma: " + element.Language
//   )
// }

//Parameters with Type
function GetStudents(students: StudentInfo[]){
    students.forEach(element => {
        console.log("Idade: " + element.Age + " com Nome: " + element.Name + " e Telefone: " + element.Phone + "e falam Idioma: " + element.Language)
    });
}

GetStudents(studentsList)

//Rest Parameters
function GetNumbers(...num: string[]){
    num.forEach(element => {
        console.log(element)
    });
}

GetNumbers("1","2","3","4")

//Default Parameters
function GetMessage(msg: string = "Oi"){
    console.log(msg)
}

GetMessage("olar")

//###################################Functions Advanced#################//
//Anonymous function
let NomeCompleto = function (lName: string, fName: string){
    return lName + "...." + fName;
}
console.log(NomeCompleto("Del Prado", "Ana"));

//Arrow function
let FullName = (lName: string, fName: string) => {return fName + ".." + lName}
console.log(FullName("Del Prado", "Ana"))

//#################################Classes####################################//

class Student{
constructor(private fname, private lname){
}
GetFullName():string{
    return this.fname + " " + this.lname;
}
}


let s = new Student("Ana","Prado");
console.log(s.GetFullName());