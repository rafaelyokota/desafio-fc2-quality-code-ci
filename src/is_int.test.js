const isInt = require('./is_int');

test("not int passing string", () => {
    const expected = false;
    expect(isInt("asd")).toBe(expected);
});

test("passing int", () => {
    const expected = true;
    expect(isInt(1)).toBe(expected);
});