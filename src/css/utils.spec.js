const { loadCss, findClasses } = require("./utils");

describe("find css class", () => {
  beforeAll(() => {
    loadCss(`
.p-small { padding: 8px; }
.pt-small { padding-top: 8px; }
.pr-small { padding-right: 8px; }
.pb-small { padding-bottom: 8px; }
.pl-small { padding-left: 8px; }
.px-small { padding-left: 8px; padding-right: 8px; }
.py-small { padding-top: 8px; padding-bottom: 8px; }
`);
  });
  const testCases = [
    {
      input: [["padding", "8px"]],
      output: ["p-small"],
    },
    {
      input: [["padding-top", "8px"]],
      output: ["pt-small"],
    },
    {
      input: [["padding-bottom", "8px"]],
      output: ["pb-small"],
    },
    {
      input: [
        ["padding-bottom", "8px"],
        ["padding-top", "8px"],
      ],
      output: ["pb-small", "pt-small"],
    },
  ];

  testCases.forEach((tc, index) => {
    it(`should pass test #{index}`, () => {
      expect(findClasses(tc.input)).toEqual(tc.output);
    });
  });
});
