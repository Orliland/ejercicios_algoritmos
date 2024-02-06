const elementosPares = require("./index");

test("Comprobar que elementos se repiten de manera par", () => {
  expect(elementosPares([1, 1, 2, 3, 4, 4, 5])).toStrictEqual([1, 4]);
});
