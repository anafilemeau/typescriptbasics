var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["Ingles"] = 0] = "Ingles";
    LanguagesKnown[LanguagesKnown["Frances"] = 1] = "Frances";
    LanguagesKnown[LanguagesKnown["Espanhol"] = 2] = "Espanhol";
})(LanguagesKnown || (LanguagesKnown = {}));
console.log("Revisão");
var a = 10;
if (a == 10) {
    var a_1 = "test";
    console.log("Igual");
    console.log(a_1);
}
//---------------------------
var student2 = {
    Nome: "Ana",
    Idade: 35,
    Telefone: 23129090,
    Idioma: LanguagesKnown[LanguagesKnown.Frances]
};
var studentList = [
    { Nome: "Eduardo", Idade: 33, Telefone: 34219004, Idioma: LanguagesKnown[LanguagesKnown.Ingles] },
    { Nome: "Monet", Idade: 6, Telefone: 34219054, Idioma: LanguagesKnown[LanguagesKnown.Espanhol] },
    { Nome: "Leonor", Idade: 65, Telefone: 34219504, Idioma: LanguagesKnown[LanguagesKnown.Frances] },
];
studentList.push(student2);
for (var index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    console.log("Nome:" + element.Nome + "/Idade:" + element.Idade + "/Tel:" + element.Telefone + "/Idioma:" + element.Idioma);
}
//# sourceMappingURL=app2.js.map