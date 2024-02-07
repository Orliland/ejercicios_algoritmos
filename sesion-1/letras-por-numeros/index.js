/*

LETRAS POR NÚMEROS

Remplazar las letras de un string por su 
index en el alfabeto (e.g. A = 1, B = 2, C = ...)

Consideraciones adicionales:
* Ignorar espacios
* Hacer clean up del string antes de comenzar 
  el swap (para eliminar acentos y caracteres 
  especiales, se sugiere meter en este proceso 
  de clean up el ignorado de espacios.)

Ejemplo:
func("abc def"); // returns '1 2 3 4 5 6';

*/

function letraPorNumero(texto) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Convertir texto en array
  texto = texto.toLowerCase();
  let textoArray = [...texto];

  // clean up texto: remover acentos, espacios y caracteres especiales
  const vocales = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
  textoArray = textoArray.map((element) => {
    if (Object.hasOwn(vocales, element)) {
      // Si la letra es una vocal con acento, se remueve este
      // y se devuelve la posición de la vocal en el alfabeto
      const vocal = vocales[element];
      return alfabeto.indexOf(vocal) + 1;
    } else {
      // Se comprueba si el carácter esta en el alfabeto
      // Si lo esta, se devuelve su posición, si no, se ignora
      const index = alfabeto.indexOf(element);
      if (index != -1) {
        return index + 1;
      }
    }
  });

  // Eliminar undefined que fueron creados por aquellos caracteres que no
  // son partes del alfabeto
  textoArray = textoArray.filter((e) => {
    return e !== undefined;
  });

  // Unir los indices mediante espacios y retornarlos
  return textoArray.join(" ");
}

console.log(letraPorNumero("Orlando"));

module.exports = letraPorNumero;
