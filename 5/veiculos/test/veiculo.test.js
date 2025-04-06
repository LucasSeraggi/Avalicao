const request = require('supertest')
const app = require('../src/app')
const connect = require('../src/database/databaseConfig')

beforeAll(async () => {
  const db = await connect()
  await db.run('DELETE FROM veiculos')
  await db.run(`DELETE FROM sqlite_sequence WHERE name='veiculos'`)
})

afterAll(async () => {
  const db = await connect()
  await db.close()
})


describe('API de Veículos', () => {
  it('Criar veiculo', async () => {
    const res = await request(app).post('/veiculo').send({
      veiculo: 'Astra',
      marca: 'Chevrolet',
      ano: 2001,
      descricao: 'Hatchback azul',
      vendido: false
    })

    expect(res.status).toBe(201)
  })

  it('Listar veiculo por id', async () => {
    const res = await request(app).get(`/veiculo/${1}`)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('id')
  })

  it('Atualizar veiculo', async () => {
    const update = await request(app).put(`/veiculo/${1}`).send({
      veiculo: 'Palio',
      marca: 'Fiat',
      ano: 2008,
      descricao: 'Hatch branco',
      vendido: true
    })

    expect(update.status).toBe(200)
    expect(update.body.veiculo).toBe('Palio')
    expect(update.body.vendido).toBe(true)
  })

  it('Listar veiculos', async () => {
    await request(app).post('/veiculo').send({
      veiculo: 'Civic',
      marca: 'Honda',
      ano: 2020,
      decricao: 'Sedã prata',
      vendido: false
    })

    const res = await request(app).get('/veiculo')
    // console.log(res.body)
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })
})
