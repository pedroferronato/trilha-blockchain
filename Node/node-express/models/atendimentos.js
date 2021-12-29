const moment = require('moment')
const axios = require('axios')
const conexao = require('../infra/database/conexao')
const repositorio = require('../repositorios/atendimentos')

class Atendimento {
    constructor() {
        this.dataValida = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao)
        this.clienteValido = (tamanho) => tamanho >= 5

        this.valida = (parametros) => {
            this.validacoes.filter(campo => {
                const { nome } = campo
                const parametro = parametros[nome]
                return !campo.valido(parametro)
            })
        }

        this.validacoes = [
            {
                nome: 'data', 
                valido: this.dataValida, 
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente', 
                valido: this.clienteValido, 
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
    }

    adicionar(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    
        const parametros = {
            data: {data, dataCriacao},
            cliente: { tamanho: atendimento.cliente.length}
        }
        const erros = this.valida(parametros)

        const existemErros = erros.length

        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            
            const resultados = repositorio.adicionar(atendimentoDatado)
            const id = resultados.insertId
            return { ...atendimento, id }
        }
    }

    listar() {
        return repositorio.listar()
    }

    buscar(res, id) {
        const sql = 'SELECT * FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, async (erro, result) => {
            let atendimento = result[0]
            const cpf = atendimento.cliente
            if (erro) {
                res.status(400).json(erro)
            } else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                res.status(200).json(atendimento)
            }
        })
    }

    alterar(res, atendimento, id) {
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'

        if (atendimento.data) {
            atendimento.data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        conexao.query(sql, [atendimento, id], (erro, result) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...result, id})
            }
        })
    }

    excluir(res, id) {
        const sql = 'DELETE FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, result) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento