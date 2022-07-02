const fetch = require("axios");
// do something - init runtime
global.self = {};
global.TFApp = {
  bootstrapApp: ({ success }) => {
    success();
  },
  App: () => {},
  Page: (publicInstance) => {
    console.log($global.currentPageConfig.pagePath);
    publicInstance.onSeo($global.pageQuery);
  },
  Component: () => {},
  $global: {},
  bridge: {
    request: async ({ url, success, fail }) => {
      try {
        const res = await fetch(url);
        const result = success(res);
        console.log(result);
      } catch (e) {
        fail(e);
      }
    },
  },
};
$global = TFApp.$global;
global.location = {
  search: {
    match: () => true,
  },
};

$global.pagePath = "pages/page1/index";
$global.pageQuery = "bookId=10";

require("./index.worker.js");

// => pages/index/index
