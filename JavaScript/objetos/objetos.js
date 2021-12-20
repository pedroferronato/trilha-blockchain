const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: 20,
    aliado: {
        nome: "Bilbo",
        classe: "ladrão"
    },
    status: "desaparecido"
}

console.log(objPersonagem)

delete objPersonagem.aliado

console.log(objPersonagem)