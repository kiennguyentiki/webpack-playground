!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    (function (e) {
      if (
        ((e.__TF_MINIAPP_COMPILER_VERSION__ = "1.93.10"),
        self !== e && (self = e),
        !self.__tfAppInited)
      ) {
        if (((self.__tfAppInited = 1), !self.TFApp)) {
          var t = location.search.match(/tfp=([^&#]+)/);
          if (t && t[1]) {
            var o = decodeURIComponent(t[1]);
            o && importScripts(o + "/tf-tiniapp.worker.js");
          } else {
            var r = location.search.match(/__enableCache=([^&#]+)/);
            if (r && "YES" === r[1]) {
              var p = "";
              location.hash &&
                location.hash.match(/NOCACHE/) &&
                (p = "#NOCACHE"),
                importScripts(
                  "miniapp-resource://framework/tf-tiniapp.worker.js" + p
                );
            }
          }
        }
        (void 0 !== e ? e : self).tfAppJson = {
          $homepage: "pages/index/index",
        };
        const i = self.TFApp.getAppContext
          ? self.TFApp.getAppContext().TFApp
          : self.TFApp;
        (self.App = i.App),
          (self.getApp = i.getApp),
          (self.Page = i.Page),
          (self.Component = i.Component),
          (self.$global = i.$global),
          (self.my = i.bridge),
          (self.getCurrentPages = i.getCurrentPages),
          i.registerApp && i.registerApp({ appJSON: tfAppJson }),
          self.TFApp.bootstrapApp({
            success: function () {
              n(3), n(4);
            },
          });
      }
    }.call(this, n(2)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    App({
      onLaunch(e) {
        console.log("App onLaunch");
      },
      onShow(e) {},
    });
  },
  function (e, t) {
    ($global.currentPageConfig = { pagePath: "pages/index/index" }),
      Page({
        onLoad(e) {},
        onReady() {},
        onShow() {},
        onHide() {},
        onUnload() {},
        onSeo(pageQuery) {
          my.request({
            url: "https://api.tala.xyz/miniapp/api/apps",
            success: () => {
              const seoData = "hello world";
              return seoData;
            },
            fail: () => {},
          });
        },
      });
  },
]);
