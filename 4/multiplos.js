function somaMultiplos(x) {
  let soma = 0

  for (let i = 1; i < x; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i
    }
  }

  return soma
}

console.log(somaMultiplos(10))
