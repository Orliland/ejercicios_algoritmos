// ELEMENTOS PARES

/*

Dada una lista de elementos (array), crear una función 
que retorne una nueva lista con solo los elemento que 
aparecen en una cantidad pares de veces

*/

function elementosPares(array) {
  // Recorrer el array y contar cuantas veces aparece cada elemento
  // Si ya se encuentra en el Map, sumar 1 a su contador,
  // si no, agregarlo al Map con un contador de 1
  let elementosCount = new Map();
  array.forEach((element) => {
    if (elementosCount.has(element)) {
      elementosCount.set(element, elementosCount.get(element) + 1);
    } else {
      elementosCount.set(element, 1);
    }
  });

  // Recorrer el Map y si el modulo de la cantidad que aparece es 0,
  // agregarlo al array de elementos pares
  let elementosPares = [];
  elementosCount.forEach((value, key) => {
    if (value % 2 === 0) {
      elementosPares.push(key);
    }
  });

  return elementosPares;
}

module.exports = elementosPares;
