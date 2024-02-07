const letraPorNumero = require("./index");

test("Debería devolver la representación en números", () => {
  expect(letraPorNumero("abc")).toBe("1 2 3");
});

test("Debería omitir espacios", () => {
  expect(letraPorNumero("abc def")).toBe("1 2 3 4 5 6");
});

test("Debería omitir mayúsculas", () => {
  expect(letraPorNumero("abc def")).toBe("1 2 3 4 5 6");
});
