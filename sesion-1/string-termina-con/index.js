/*

STRING TERMINA CON

Hacer una función que reciba 2 strings 
(siempre los va a recibir), y devuelva 
si el primero termina con el segundo. 

Ejemplos:
func("abc", "bc"); // returns true
func("abc", "d"); // returns false

*/

function terminaCon(str1, str2) {
  // Verificar que los dos parámetros se reciban
  if (typeof str1 != "string" || typeof str2 != "string") {
    return false;
  } else if (str1.length < 1 || str2.length < 1) {
    return false;
  }

  // Convertir strings en lower case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Verificar si el string 2 es parte del 1
  // sin no lo es, retornar false
  const verificacion = str1.lastIndexOf(str2);
  if (verificacion == -1) {
    return false;
  } else {
    // Verificar si str2 es el final de str1
    if (verificacion + str2.length == str1.length) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = terminaCon;
