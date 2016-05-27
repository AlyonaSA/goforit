var app = require('../js/script.js');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var powResult;

        powResult = app.pow(2, 2);

        expect(powResult).toBe(4);
    });
    it("expectation", function() {
        expect(app.pow(2, 3)).toBe(8);
    });
    it("expectation", function() {
        expect(app.pow(2, -2)).toBe(0.25);
    });
    it("expectation", function() {
      expect(app.pow(-2, 2)).toBe(4);
    });
    it("expectation", function() {
      expect(app.pow(3, 3)).toBe(27);
    });
    it("expectation", function() {
      expect(app.pow(-2, 3)).toBe(-8);
    });
});
