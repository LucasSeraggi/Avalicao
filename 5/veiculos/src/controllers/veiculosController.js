const { validate } = require('../validations/veiculoValidations')
const connect = require('../database/databaseConfig')

module.exports = {
  getAll: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = 'SELECT * FROM veiculos'
      const result = await db.all(resQuery)
      res.json(result)
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  getById: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = 'SELECT * FROM veiculos WHERE id = ?'
      const result = await db.get(resQuery, [req.params.id])
      result ? res.json(result) : res.status(404).send('Não encontrado')
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  getByParams: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = 'SELECT * FROM veiculos WHERE marca = ? AND ano = ? AND cor = ?'
      const { marca, ano, cor } = req.query
      const result = await db.all(resQuery, [marca, ano, cor])
      res.json(result)      
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  create: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = 'INSERT INTO veiculos (veiculo, marca, ano, descricao, vendido, created, updated) VALUES (?, ?, ?, ?, ?, ?, ?)'
      const { veiculo, marca, ano, descricao, vendido } = req.body
      if (!validate(marca)) return res.status(400).send('Marca não reconhecida') 
      const today = new Date().toISOString()
      await db.run(resQuery, [veiculo, marca, ano, descricao, vendido, today, today])
      res.status(201).send('Veiculo cadastrado') 
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  updateAll: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = `UPDATE veiculos SET veiculo=?, marca=?, ano=?, descricao=?, vendido=?, updated=? WHERE id=?`
      const { veiculo, marca, ano, descricao, vendido } = req.body
      const today = new Date().toISOString()
      await db.run(resQuery, [veiculo, marca, ano, descricao, vendido, today, req.params.id])
      res.status(200).json({ ...req.body, message:'Veiculo atualizado'})    
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  updateParams: async (req, res) => {
    const db = await connect()
    try {
      const keys = []
      const values = []
      const today = new Date().toISOString()
      for (let key in req.body) {
        keys.push(`${key} = ?`)
        values.push(req.body[key])
      }
      values.push(today)
      values.push(req.params.id)
      const resQuery = `UPDATE veiculos SET ${updates.join(', ')}, updated=? WHERE id=?`
      await db.run(resQuery, values)
      res.send('Parametros atualizados')
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  },

  delete: async (req, res) => {
    const db = await connect()
    try {
      const resQuery = 'DELETE FROM veiculos WHERE id = ?'
      await db.run(resQuery, [req.params.id])
      res.send('Veiculo excluido')
    } catch (err) {
      console.log(err)
      res.status(400).send('Erro interno do servidor')
    }
    db.close()
  }
}
