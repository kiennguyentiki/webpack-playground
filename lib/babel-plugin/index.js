const babel = require("@babel/core");

const code = "const n = 1";

const output = babel.transformSync(code, {
  plugins: [
    // your first babel plugin 😎😎
    function myCustomPlugin() {
      return {
        visitor: {
          Identifier(path) {
            // in this example change all the variable `n` to `x`
            if (path.isIdentifier({ name: "n" })) {
              path.node.name = "x";
            }
          },
        },
      };
    },
  ],
});

console.log(output.code); // 'const x = 1;'
