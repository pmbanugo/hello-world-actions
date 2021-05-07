var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });

  describe("#.length", function () {
    it("should return the correct lenght of an array", function () {
      assert.strictEqual([1, 2, 3].length, 3);
    });
  });
});
