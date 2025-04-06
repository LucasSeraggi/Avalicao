
function bubbleSort(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < (vetor.length - i - 1); j++) {
      if (vetor[j] > vetor[j + 1]) {
        let aux = vetor[j]
        vetor[j] = vetor[j + 1]
        vetor[j + 1] = aux
      }
    }
  }
  return vetor
}

const v = [5, 3, 2, 4, 7, 1, 0, 6]
console.log(v)
let sortedV = bubbleSort(v)
console.log(sortedV)
