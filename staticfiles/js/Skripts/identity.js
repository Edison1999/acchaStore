/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("signalsFBEventsGetIwlUrl", function () {
      return (function (a, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("signalsFBEventsGetTier");
          e.exports = function (b, c) {
            c = a(c);
            c = c == null ? "www.facebook.com" : "www." + c + ".facebook.com";
            return "https://" + c + "/signals/iwl.js?pixel_id=" + b;
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsGetTier", function () {
      return (function (f, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = /^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,
            b = ["https://www.facebook.com/tr", "https://www.facebook.com/tr/"];
          e.exports = function (c) {
            if (b.indexOf(c) !== -1) return null;
            var d = a.exec(c);
            if (d == null) throw new Error("Malformed tier: " + c);
            return d[1];
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEvents.plugins.iwlbootstrapper",
      function () {
        return (function (a, b, c, d) {
          var e = { exports: {} };
          e.exports;
          (function () {
            "use strict";
            var c = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
              d = f.getFbeventsModules("SignalsFBEventsLogging"),
              g = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
              h = f.getFbeventsModules("SignalsFBEventsPlugin"),
              i = f.getFbeventsModules("signalsFBEventsGetIwlUrl"),
              j = f.getFbeventsModules("signalsFBEventsGetTier"),
              k = d.logUserError,
              l = /^https:\/\/.*\.facebook\.com$/i,
              m = "FACEBOOK_IWL_CONFIG_STORAGE_KEY",
              n = a.sessionStorage
                ? a.sessionStorage
                : {
                    getItem: function (a) {
                      return null;
                    },
                    removeItem: function (a) {},
                    setItem: function (a, b) {},
                  };
            e.exports = new h(function (d, e) {
              function h(c, d) {
                var e = b.createElement("script");
                e.async = !0;
                e.onload = function () {
                  if (!a.FacebookIWL || !a.FacebookIWL.init) return;
                  var b = j(g.ENDPOINT);
                  b != null &&
                    a.FacebookIWL.set &&
                    a.FacebookIWL.set("tier", b);
                  d();
                };
                a.FacebookIWLSessionEnd = function () {
                  n.removeItem(m), a.close();
                };
                e.src = i(c, g.ENDPOINT);
                b.body && b.body.appendChild(e);
              }
              var o = !1,
                p = function (a) {
                  return !!(
                    e &&
                    e.pixelsByID &&
                    Object.prototype.hasOwnProperty.call(e.pixelsByID, a)
                  );
                };
              function q() {
                if (o) return;
                var b = n.getItem(m);
                if (!b) return;
                b = JSON.parse(b);
                var c = b.pixelID,
                  d = b.graphToken,
                  e = b.sessionStartTime;
                o = !0;
                h(c, function () {
                  var b = p(c) ? c : null;
                  a.FacebookIWL.init(b, d, e);
                });
              }
              function r(b) {
                if (o) return;
                h(b, function () {
                  return a.FacebookIWL.showConfirmModal(b);
                });
              }
              function s(a, b, c) {
                n.setItem(
                  m,
                  JSON.stringify({
                    graphToken: a,
                    pixelID: b,
                    sessionStartTime: c,
                  })
                ),
                  q();
              }
              c.listen(function (b) {
                var c = b.graphToken;
                b = b.pixelID;
                s(c, b);
                a.FacebookIWLSessionEnd = function () {
                  return n.removeItem(m);
                };
              });
              function d(a) {
                var b = a.data,
                  c = b.graphToken,
                  d = b.msg_type,
                  f = b.pixelID;
                b = b.sessionStartTime;
                if (
                  e &&
                  e.pixelsByID &&
                  e.pixelsByID[f] &&
                  e.pixelsByID[f].codeless === "false"
                ) {
                  k({ pixelID: f, type: "SITE_CODELESS_OPT_OUT" });
                  return;
                }
                if (
                  n.getItem(m) ||
                  !l.test(a.origin) ||
                  !(
                    a.data &&
                    (d === "FACEBOOK_IWL_BOOTSTRAP" ||
                      d === "FACEBOOK_IWL_CONFIRM_DOMAIN")
                  )
                )
                  return;
                switch (d) {
                  case "FACEBOOK_IWL_BOOTSTRAP":
                    a.source.postMessage(
                      "FACEBOOK_IWL_BOOTSTRAP_ACK",
                      a.origin
                    );
                    s(c, f, b);
                    break;
                  case "FACEBOOK_IWL_CONFIRM_DOMAIN":
                    a.source.postMessage(
                      "FACEBOOK_IWL_CONFIRM_DOMAIN_ACK",
                      a.origin
                    );
                    r(f);
                    break;
                }
              }
              if (n.getItem(m)) {
                q();
                return;
              }
              a.opener && a.addEventListener("message", d);
            });
          })();
          return e.exports;
        })(a, b, c, d);
      }
    );
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.iwlbootstrapper", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    var g = (function () {
      function a(a, b) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (
            var a = a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ](),
              g;
            !(d = (g = a.next()).done);
            d = !0
          ) {
            c.push(g.value);
            if (b && c.length === b) break;
          }
        } catch (a) {
          (e = !0), (f = a);
        } finally {
          try {
            !d && a["return"] && a["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      return function (b, c) {
        if (Array.isArray(b)) return b;
        else if (
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
          Object(b)
        )
          return a(b, c);
        else
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
      };
    })();
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("sha256_with_dependencies_new", function () {
      return (function (f, g, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          function a(a) {
            var b = "",
              c = void 0,
              d;
            for (var e = 0; e < a.length; e++)
              (c = a.charCodeAt(e)),
                (d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
                c >= 55296 &&
                  c <= 56319 &&
                  d >= 56320 &&
                  d <= 57343 &&
                  ((c = 65536 + ((c & 1023) << 10) + (d & 1023)), e++),
                c <= 127
                  ? (b += String.fromCharCode(c))
                  : c <= 2047
                  ? (b += String.fromCharCode(
                      192 | ((c >>> 6) & 31),
                      128 | (c & 63)
                    ))
                  : c <= 65535
                  ? (b += String.fromCharCode(
                      224 | ((c >>> 12) & 15),
                      128 | ((c >>> 6) & 63),
                      128 | (c & 63)
                    ))
                  : c <= 2097151 &&
                    (b += String.fromCharCode(
                      240 | ((c >>> 18) & 7),
                      128 | ((c >>> 12) & 63),
                      128 | ((c >>> 6) & 63),
                      128 | (c & 63)
                    ));
            return b;
          }
          function b(a, b) {
            return (b >>> a) | (b << (32 - a));
          }
          function c(a, b, c) {
            return (a & b) ^ (~a & c);
          }
          function d(a, b, c) {
            return (a & b) ^ (a & c) ^ (b & c);
          }
          function f(a) {
            return b(2, a) ^ b(13, a) ^ b(22, a);
          }
          function g(a) {
            return b(6, a) ^ b(11, a) ^ b(25, a);
          }
          function h(a) {
            return b(7, a) ^ b(18, a) ^ (a >>> 3);
          }
          function i(a) {
            return b(17, a) ^ b(19, a) ^ (a >>> 10);
          }
          function j(a, b) {
            return (a[b & 15] +=
              i(a[(b + 14) & 15]) + a[(b + 9) & 15] + h(a[(b + 1) & 15]));
          }
          var k = [
              1116352408,
              1899447441,
              3049323471,
              3921009573,
              961987163,
              1508970993,
              2453635748,
              2870763221,
              3624381080,
              310598401,
              607225278,
              1426881987,
              1925078388,
              2162078206,
              2614888103,
              3248222580,
              3835390401,
              4022224774,
              264347078,
              604807628,
              770255983,
              1249150122,
              1555081692,
              1996064986,
              2554220882,
              2821834349,
              2952996808,
              3210313671,
              3336571891,
              3584528711,
              113926993,
              338241895,
              666307205,
              773529912,
              1294757372,
              1396182291,
              1695183700,
              1986661051,
              2177026350,
              2456956037,
              2730485921,
              2820302411,
              3259730800,
              3345764771,
              3516065817,
              3600352804,
              4094571909,
              275423344,
              430227734,
              506948616,
              659060556,
              883997877,
              958139571,
              1322822218,
              1537002063,
              1747873779,
              1955562222,
              2024104815,
              2227730452,
              2361852424,
              2428436474,
              2756734187,
              3204031479,
              3329325298,
            ],
            l = new Array(8),
            m = new Array(2),
            n = new Array(64),
            o = new Array(16),
            p = "0123456789abcdef";
          function q(a, b) {
            var c = (a & 65535) + (b & 65535);
            a = (a >> 16) + (b >> 16) + (c >> 16);
            return (a << 16) | (c & 65535);
          }
          function r() {
            (m[0] = m[1] = 0),
              (l[0] = 1779033703),
              (l[1] = 3144134277),
              (l[2] = 1013904242),
              (l[3] = 2773480762),
              (l[4] = 1359893119),
              (l[5] = 2600822924),
              (l[6] = 528734635),
              (l[7] = 1541459225);
          }
          function s() {
            var a = void 0,
              b = void 0,
              e = void 0,
              h = void 0,
              i = void 0,
              m = void 0,
              p = void 0,
              r = void 0,
              s = void 0,
              t = void 0;
            e = l[0];
            h = l[1];
            i = l[2];
            m = l[3];
            p = l[4];
            r = l[5];
            s = l[6];
            t = l[7];
            for (var u = 0; u < 16; u++)
              o[u] =
                n[(u << 2) + 3] |
                (n[(u << 2) + 2] << 8) |
                (n[(u << 2) + 1] << 16) |
                (n[u << 2] << 24);
            for (var u = 0; u < 64; u++)
              (a = t + g(p) + c(p, r, s) + k[u]),
                u < 16 ? (a += o[u]) : (a += j(o, u)),
                (b = f(e) + d(e, h, i)),
                (t = s),
                (s = r),
                (r = p),
                (p = q(m, a)),
                (m = i),
                (i = h),
                (h = e),
                (e = q(a, b));
            l[0] += e;
            l[1] += h;
            l[2] += i;
            l[3] += m;
            l[4] += p;
            l[5] += r;
            l[6] += s;
            l[7] += t;
          }
          function t(a, b) {
            var c = void 0,
              d,
              e = 0;
            d = (m[0] >> 3) & 63;
            var f = b & 63;
            (m[0] += b << 3) < b << 3 && m[1]++;
            m[1] += b >> 29;
            for (c = 0; c + 63 < b; c += 64) {
              for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
              s();
              d = 0;
            }
            for (var g = 0; g < f; g++) n[g] = a.charCodeAt(e++);
          }
          function u() {
            var a = (m[0] >> 3) & 63;
            n[a++] = 128;
            if (a <= 56) for (var b = a; b < 56; b++) n[b] = 0;
            else {
              for (var b = a; b < 64; b++) n[b] = 0;
              s();
              for (var a = 0; a < 56; a++) n[a] = 0;
            }
            n[56] = (m[1] >>> 24) & 255;
            n[57] = (m[1] >>> 16) & 255;
            n[58] = (m[1] >>> 8) & 255;
            n[59] = m[1] & 255;
            n[60] = (m[0] >>> 24) & 255;
            n[61] = (m[0] >>> 16) & 255;
            n[62] = (m[0] >>> 8) & 255;
            n[63] = m[0] & 255;
            s();
          }
          function v() {
            var a = "";
            for (var b = 0; b < 8; b++)
              for (var c = 28; c >= 0; c -= 4) a += p.charAt((l[b] >>> c) & 15);
            return a;
          }
          function w(a) {
            var b = 0;
            for (var c = 0; c < 8; c++)
              for (var d = 28; d >= 0; d -= 4)
                a[b++] = p.charCodeAt((l[c] >>> d) & 15);
          }
          function x(a, b) {
            r();
            t(a, a.length);
            u();
            if (b) w(b);
            else return v();
          }
          function y(b) {
            var c =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !0,
              d = arguments[2];
            if (b === null || b === void 0) return null;
            var e = b;
            c && (e = a(b));
            return x(e, d);
          }
          e.exports = y;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.identity", function () {
      return (function (a, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logUserError;
          a = f.getFbeventsModules("SignalsFBEventsPlugin");
          var c = f.getFbeventsModules("SignalsFBEventsUtils");
          c = c.FBSet;
          var d = f.getFbeventsModules("sha256_with_dependencies_new"),
            h = /^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,
            i = /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,
            j = /^\s+|\s+$/g;
          Object.prototype.hasOwnProperty;
          var k = new c(["uid"]);
          function l(a) {
            return !!a && i.test(a);
          }
          function m(a) {
            return a.replace(j, "");
          }
          function n(a) {
            return a.toLowerCase();
          }
          function o(a, c) {
            if (a === "em" || a === "email") {
              var d = typeof c === "string" ? m(n(c)) : "";
              if (d == null || d === "") return null;
              if (!l(d)) {
                b({
                  key_type: "email address",
                  key_val: a,
                  type: "PII_INVALID_TYPE",
                });
                throw new Error();
              }
              return d;
            }
            return c;
          }
          function p(a, c) {
            if (c == null) return null;
            var e = /\[(.*)\]/.exec(a);
            if (e == null) throw new Error();
            e = g(e, 2);
            e = e[1];
            if (k.has(e)) {
              if (l(c)) {
                b({ key: a, type: "PII_UNHASHED_PII" });
                throw new Error();
              }
              return c;
            }
            if (h.test(c)) return c.toLowerCase();
            a = o(e, c);
            return a != null ? d(a) : null;
          }
          c = new a(function (a) {
            a.piiTranslator = p;
          });
          c.piiTranslator = p;
          e.exports = c;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.identity");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.identity", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.identity", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
