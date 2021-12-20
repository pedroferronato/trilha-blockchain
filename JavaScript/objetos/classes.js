class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) { this.saldo += valor }

    exibirSaldo() { console.log(`O saldo da conta é ${this.saldo}`) }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) { this.saldoPoupanca += valor }
}

const pedro = new ClientePoupanca("Pedro", 'p@mail.com', '123.456.789-10', 100, 200)

pedro.depositar(75)
pedro.depositarPoupanca(50)

console.log(pedro)
