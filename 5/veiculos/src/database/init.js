const connect = require('./databaseConfig')

async function init() {
  const db = await connect()

  await db.exec(`
    CREATE TABLE IF NOT EXISTS veiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      veiculo TEXT,
      marca TEXT,
      ano INTEGER,
      descricao TEXT,
      vendido BOOLEAN,
      created DATETIME,
      updated DATETIME
    )
  `)

  console.log('Tabela de veiculos criada')
  await db.close()
}

init()
