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

function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
}

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
   
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)

console.log('===== Prototype =====')
console.log(andre.hasOwnProperty("saldoPoup")) // false
console.log(ju.hasOwnProperty("saldoPoup")) // true
console.log(andre instanceof Cliente) // true
console.log(typeof andre) // object
console.log(typeof ju) // object
console.log(ju instanceof ClientePoupanca) // true
console.log(ju instanceof Cliente) // false
console.log(Function.prototype.isPrototypeOf(Cliente)) // true
console.log(Cliente.constructor === Function) // true