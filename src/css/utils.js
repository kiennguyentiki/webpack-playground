const css = require("css");

let cssTree;

function loadCss(cssContent) {
  cssTree = css.parse(cssContent);
}

function findClass(item) {
  const [prop, value] = item;
  const rules = cssTree.stylesheet.rules;
  for (let i = 0; i < rules.length; i++) {
    const declarations = rules[i].declarations;
    for (let j = 0; j < declarations.length; j++) {
      const dProp = declarations[j].property;
      const dValue = declarations[j].value;
      if (dProp === prop && dValue === value) {
        return rules[i].selectors[0];
      }
    }
  }

  return undefined;
}

/**
 * find all css for an item
 * the algorithm is not so smart
 *
 * @param {*} items
 * @returns list of class
 */
function findClasses(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const cssClass = findClass(item);
    if (cssClass) {
      // class is start with . then we need to remove that
      result.push(cssClass.slice(1));
    }
  }
  return result;
}

module.exports = {
  loadCss,
  findClasses,
};
