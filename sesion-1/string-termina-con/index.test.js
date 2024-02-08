const terminaCon = require("./index");

test("Debería devolver true si el string termina con el segundo parámetro", () => {
  expect(terminaCon("abc", "bc")).toBe(true);
});

test("Debería devolver false si el string no termina con el segundo parámetro", () => {
  expect(terminaCon("abc", "d")).toBe(false);
});
