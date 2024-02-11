/*

TRANSFORMADOR

Hacer una función que reciba un objeto 'data' 
y lo transforme en la estructura output.

const data = {
  nombres: [STRING],
  edades: [INT],
}

const output = [
  { id: [STRING], nombre: [STRING], edad: [INT] },
  ...
]

Ejemplo:
func({ nombres: ["Bruno", "Andrea"], edades: [20, 19] });

Devuelve:
[
  { id: "1", nombre: "Bruno", edad: 20 },
  { id: "2", nombre: "Andrea", edad: 19 },
];

*/

function transformador(data) {
  let users = [];
  for (let i = 0; i < data.nombres.length; i++) {
    const user = { id: i + 1 };
    user.nombre = data.nombres[i];
    user.edad = data.edades[i];
    users = [...users, user];
  }
  return users;
}

module.exports = transformador;
