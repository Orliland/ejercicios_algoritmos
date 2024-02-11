const transformador = require("./index");

test("Debería transforma el objeto input a output", () => {
  expect(
    transformador({
      nombres: ["Juan", "Pedro", "María"],
      edades: [23, 45, 18],
    })
  ).toStrictEqual([
    {
      id: 1,
      nombre: "Juan",
      edad: 23,
    },
    {
      id: 2,
      nombre: "Pedro",
      edad: 45,
    },
    {
      id: 3,
      nombre: "María",
      edad: 18,
    },
  ]);
});
