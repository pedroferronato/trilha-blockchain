const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// const objPersonagem2 = objPersonagem
// objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem.nome) // Gandalf, o Cinzento
// console.log(objPersonagem2.nome) // Gandalf, o Cinzento

// Receber um objeto não significa cópia e sim referência, 
// Object.create() gera uma npva instância baseada no proto do arg espeficicado
const objPersonagem2 = Object.create(objPersonagem)

objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento