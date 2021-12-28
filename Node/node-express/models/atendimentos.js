const moment = require('moment')
const axios = require('axios')
const conexao = require('../infra/conexao')

class Atendimento {
    adicionar(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data', 
                valido: dataValida, 
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente', 
                valido: clienteValido, 
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)

        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
    
            const sql = 'INSERT INTO atendimentos SET ?'
            
            conexao.query(sql, atendimentoDatado, (erro, result) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json({atendimentoDatado, id})
                };
            })
        }
    }

    listar(res) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, result) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(result)
            }
        })
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