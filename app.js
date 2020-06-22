var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["English"] = 0] = "English";
    LanguageKnown[LanguageKnown["French"] = 1] = "French";
    LanguageKnown[LanguageKnown["Spanish"] = 2] = "Spanish";
})(LanguageKnown || (LanguageKnown = {}));
var student = {
    Name: "Ana",
    Age: 35,
    Phone: 2123123,
    Language: LanguageKnown[LanguageKnown.Spanish]
};
var studentsList = [
    { Name: "Eduardo", Age: 34, Phone: 3242343, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "Leonor", Age: 65, Phone: 980808, Language: LanguageKnown[LanguageKnown.French] }
];
studentsList.push(student);
// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];
//     console.log("Idade: " + element.Age 
//     + " com Nome: " + element.Name 
//     + " e Telefone: " + element.Phone 
//     + "e falam Idioma: " + element.Language
//   )
// }
//Parameters with Type
function GetStudents(students) {
    students.forEach(function (element) {
        console.log("Idade: " + element.Age + " com Nome: " + element.Name + " e Telefone: " + element.Phone + "e falam Idioma: " + element.Language);
    });
}
GetStudents(studentsList);
//Rest Parameters
function GetNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    num.forEach(function (element) {
        console.log(element);
    });
}
GetNumbers("1", "2", "3", "4");
//Default Parameters
function GetMessage(msg) {
    if (msg === void 0) { msg = "Oi"; }
    console.log(msg);
}
GetMessage("olar");
//###################################Functions Advanced#################//
//Anonymous function
var NomeCompleto = function (lName, fName) {
    return lName + "...." + fName;
};
console.log(NomeCompleto("Del Prado", "Ana"));
//Arrow function
var FullName = function (lName, fName) { return fName + ".." + lName; };
console.log(FullName("Del Prado", "Ana"));
//#################################Classes####################################//
var Student = /** @class */ (function () {
    function Student(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Student.prototype.GetFullName = function () {
        return this.fname + " " + this.lname;
    };
    return Student;
}());
var s = new Student("Ana", "Prado");
console.log(s.GetFullName());
//# sourceMappingURL=app.js.map