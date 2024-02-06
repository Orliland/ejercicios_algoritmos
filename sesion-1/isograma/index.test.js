const esIsograma = require("./index");

test("debería devolver true si es un isograma", () => {
  expect(esIsograma("gato")).toBe(true);
  expect(esIsograma("Murcielago")).toBe(true);
  expect(esIsograma("Casa")).toBe(false);
  expect(esIsograma("PeRro")).toBe(false);
  expect(esIsograma("GaTo")).toBe(true);
});
