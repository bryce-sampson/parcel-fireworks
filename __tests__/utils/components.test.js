const Components = require("../../src/js/utils/Components");
let components;

beforeEach(() => {
  components = new Components();
});

test("should create an element", () => {
  //   console.log(components.createElement("p"));
  expect(
    components.createElement("p") instanceof HTMLParagraphElement
  ).toBeTruthy();
});

test("should throw error", () => {
  expect(components.createElement()).to();
});
