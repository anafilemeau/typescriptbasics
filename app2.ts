enum LanguagesKnown {Ingles, Frances, Espanhol}

console.log("Revisão")

let a = 10;

if (a == 10) {
    let a = "test"
    console.log("Igual")
    console.log(a)
}

//---------------------------

let student2 = {
    Nome: "Ana",
    Idade: 35,
    Telefone: 23129090,
    Idioma: LanguagesKnown[LanguagesKnown.Frances]
} 

let studentList = [
    {Nome: "Eduardo", Idade: 33, Telefone: 34219004, Idioma: LanguagesKnown[LanguagesKnown.Ingles]},
    {Nome: "Monet", Idade: 6, Telefone: 34219054, Idioma: LanguagesKnown[LanguagesKnown.Espanhol]},
    {Nome: "Leonor", Idade: 65, Telefone: 34219504, Idioma: LanguagesKnown[LanguagesKnown.Frances]},
]

studentList.push(student2)

for (let index = 0; index < studentList.length; index++) {
    const element = studentList[index];
 
    console.log("Nome:" + element.Nome + "/Idade:" + element.Idade + "/Tel:" + element.Telefone + "/Idioma:" +element.Idioma )
}
//-----------------------------------------------------------------