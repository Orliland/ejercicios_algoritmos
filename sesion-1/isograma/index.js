/*

ISOGRAMA

Un isograma es una palabra que no tiene letras repetidas. Consideraciones 
adicionales:

* Un string vacío es un isograma
* La función tiene que ser case sensitive e ignorar acentos
* Si el string tienen mas de una palabra retornar false
* Se tiene que hacer clean up del string antes de comparar

Ejemplos:

func("Murciélago"); // returns true
func("reto"); // returns false
func("Casa"); // returns false
func("PeRrO"); // returns false
func("GaTo"); // returns true


*/

function esIsograma(str) {
  // Comprobar si el string tienen mas de una palabra
  if (str.split(" ").length > 1) {
    return false;
  }

  //Clean up: eliminar espacios al principio y al final
  str.trim();

  // convertir string a minúsculas y en un array
  str = [...str.toLowerCase()];

  // remover acentos, verificar si la letra se encuentra en un objeto de vocales con acento
  // si asi lo es, cambiarla por la vocal sin acento.
  const vocales = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
  str.map((element) => {
    if (Object.hasOwn(vocales, element)) {
      return vocales[element];
    } else {
      return element;
    }
  });

  // Aplicar Set para verificar si hay elementos repetidos
  const caracteresUnicos = new Set(str);

  // Comparar longitud de string original y el Set para ver si hay diferencia de longitud
  // Si la hay, quiere decir que hubo elementos repetidos, por lo que no era un isograma
  if (caracteresUnicos.size === str.length) {
    return true;
  } else {
    return false;
  }
}

module.exports = esIsograma;
