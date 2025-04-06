class Eleicao {
  constructor(total, validos, brancos, nulos) {
    this.total = total
    this.validos = validos
    this.brancos = brancos
    this.nulos = nulos
  }

  votosValidos() {
    const result = (this.validos/this.total) * 100
    return result + '%'
  }

  votosBrancos() {
    const result = (this.brancos/this.total) * 100
    return result + '%'
  }

  votosNulos() {
    const result = (this.nulos/this.total) * 100
    return result + '%'
  }
}

const e = new Eleicao(1000, 800, 150, 50)

console.log(e.votosValidos())
console.log(e.votosBrancos())
console.log(e.votosNulos())
