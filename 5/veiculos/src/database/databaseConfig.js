const sqlite3 = require('sqlite3').verbose()
const { open } = require('sqlite')
const path = require('path')

async function connect() {
  return open ({
    filename: path.join(__dirname,'veiculos.db'),
    driver: sqlite3.Database
  })
}

module.exports = connect
