/**
 * crisp-client
 * @version v2.7.0 e92e58b
 * @author Crisp IM SARL
 * @date 1/15/2021
 */
(function () {
  var n = !1;
  try {
    var w = {},
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Library = new ((function () {
      function t() {
        var t = "constructor",
          n,
          i,
          s,
          e,
          c,
          a,
          o,
          r,
          h;
        try {
          this.ns = "CrispLibrary";
          var u = {},
            g = w,
            l = { environment: "production" };
          function f(t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          (u.Console =
            ((h = {}),
            (h.n = l.environment),
            (h.i = "development" == h.n),
            (h.s = void 0 !== window.console),
            (h.a = h.i && h.s),
            (h.o = function (t, n, i) {}),
            (h.warn = function (t, n) {
              h.a && console.warn(t, n), h.o("warn", t, n);
            }),
            (h.error = function (t, n) {
              h.a && console.error(t, n), h.o("error", t, n);
            }),
            (h.info = function (t, n) {
              h.a && console.info(t, n), h.o("info", t, n);
            }),
            (h.log = function (t, n) {
              h.a && console.log(t, n), h.o("log", t, n);
            }),
            (h.debug = function (t, n) {
              h.a &&
                (void 0 !== console.debug
                  ? console.debug(t, n)
                  : console.log(t, n)),
                h.o("debug", t, n);
            }),
            (h.set_log_sink = function (t) {
              if ("function" != typeof t) throw new Error("Invalid function");
              h.o = t;
            }),
            h)),
            (o = function () {
              return (function s(e, c, a) {
                function o(n, t) {
                  if (!c[n]) {
                    if (!e[n]) {
                      var i = "function" == typeof require && require;
                      if (!t && i) return i(n, !0);
                      if (r) return r(n, !0);
                      throw (
                        (((i = new Error(
                          "Cannot find module '" + n + "'"
                        )).code = "MODULE_NOT_FOUND"),
                        i)
                      );
                    }
                    (i = c[n] = { exports: {} }),
                      e[n][0].call(
                        i.exports,
                        function (t) {
                          return o(e[n][1][t] || t);
                        },
                        i,
                        i.exports,
                        s,
                        e,
                        c,
                        a
                      );
                  }
                  return c[n].exports;
                }
                for (
                  var r = "function" == typeof require && require, t = 0;
                  t < a.length;
                  t++
                )
                  o(a[t]);
                return o;
              })(
                {
                  1: [
                    function (r, t, o) {
                      "use strict";
                      function h(t) {
                        return null != t && "" !== t;
                      }
                      function u(n) {
                        return (Array.isArray(n)
                          ? n.map(u)
                          : n && "object" == typeof n
                          ? Object.keys(n).filter(function (t) {
                              return n[t];
                            })
                          : [n]
                        )
                          .filter(h)
                          .join(" ");
                      }
                      (o.merge = function t(n, i) {
                        if (1 === arguments.length) {
                          for (var s = n[0], e = 1; e < n.length; e++)
                            s = t(s, n[e]);
                          return s;
                        }
                        var c,
                          a = n.class,
                          o = i.class;
                        for (c in ((a || o) &&
                          ((a = a || []),
                          (o = o || []),
                          Array.isArray(a) || (a = [a]),
                          Array.isArray(o) || (o = [o]),
                          (n.class = a.concat(o).filter(h))),
                        i))
                          "class" != c && (n[c] = i[c]);
                        return n;
                      }),
                        (o.joinClasses = u),
                        (o.cls = function (t, n) {
                          for (var i = [], s = 0; s < t.length; s++)
                            n && n[s]
                              ? i.push(o.escape(u([t[s]])))
                              : i.push(u(t[s]));
                          var e = u(i);
                          return e.length ? ' class="' + e + '"' : "";
                        }),
                        (o.style = function (n) {
                          return n && "object" == typeof n
                            ? Object.keys(n)
                                .map(function (t) {
                                  return t + ":" + n[t];
                                })
                                .join(";")
                            : n;
                        }),
                        (o.attr = function (t, n, i, s) {
                          return (
                            "style" === t && (n = o.style(n)),
                            "boolean" == typeof n || null == n
                              ? n
                                ? " " + (s ? t : t + '="' + t + '"')
                                : ""
                              : 0 == t.indexOf("data") && "string" != typeof n
                              ? " " +
                                t +
                                "='" +
                                JSON.stringify(n).replace(/'/g, "&apos;") +
                                "'"
                              : i
                              ? " " + t + '="' + o.escape(n) + '"'
                              : " " + t + '="' + n + '"'
                          );
                        }),
                        (o.attrs = function (t, n) {
                          var i = [],
                            s = Object.keys(t);
                          if (s.length)
                            for (var e = 0; e < s.length; ++e) {
                              var c = s[e],
                                a = t[c];
                              "class" == c
                                ? (a = u(a)) && i.push(" " + c + '="' + a + '"')
                                : i.push(o.attr(c, a, !1, n));
                            }
                          return i.join("");
                        }),
                        (o.escape = function (t) {
                          var n = String(t)
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;");
                          return n === "" + t ? t : n;
                        }),
                        (o.rethrow = function n(i, t, s, e) {
                          if (!(i instanceof Error)) throw i;
                          if (!(("undefined" == typeof window && t) || e))
                            throw ((i.message += " on line " + s), i);
                          try {
                            e = e || r("fs").readFileSync(t, "utf8");
                          } catch (t) {
                            n(i, null, s);
                          }
                          var c = e.split("\n"),
                            a = Math.max(s - 3, 0),
                            o = Math.min(c.length, s + 3),
                            o = c
                              .slice(a, o)
                              .map(function (t, n) {
                                return (
                                  ((n = n + a + 1) == s ? "  > " : "    ") +
                                  n +
                                  "| " +
                                  t
                                );
                              })
                              .join("\n");
                          throw (
                            ((i.path = t),
                            (i.message =
                              (t || "Jade") +
                              ":" +
                              s +
                              "\n" +
                              o +
                              "\n\n" +
                              i.message),
                            i)
                          );
                        });
                    },
                    { fs: 2 },
                  ],
                  2: [function (t, n, i) {}, {}],
                },
                {},
                [1]
              )(1);
            }),
            "object" == typeof __crisp_void_exports &&
            "undefined" != typeof module
              ? (module.exports = o())
              : "function" == typeof __crisp_void_define && define.amd
              ? define([], o)
              : (void 0 !== u
                  ? (r = u)
                  : "undefined" != typeof global
                  ? (r = global)
                  : "undefined" != typeof self && (r = self),
                (r.jade = o())),
            (c = u),
            (a = function () {
              var c = document,
                s = window,
                n = Array.prototype,
                a = n.slice,
                i = n.filter,
                o = /^#[\w-]*$/,
                r = /^\.[\w-]*$/,
                h = /^[\w-]*$/;
              function u(t, n) {
                return new u.fn.init(t, n);
              }
              var t = (u.fn = u.prototype = { cash: !0, length: 0 });
              (t.init = function (t, n) {
                var i,
                  s,
                  e = [];
                if (!t) return this;
                if (((this.length = 1), "string" != typeof t))
                  return t.cash ? t : ((this[0] = t), this);
                if (
                  "<" === t.charAt(0) &&
                  ">" === t.charAt(t.length - 1) &&
                  3 <= t.length
                )
                  e = u.parseHTML(t);
                else {
                  if (((i = o.test(t)), (s = t.slice(1)), !n && i))
                    return (this[0] = c.getElementById(s)), this;
                  (n = u(n)[0] || c),
                    (e = a.call(
                      h.test(s)
                        ? r.test(t)
                          ? c.getElementsByClassName(s)
                          : c.getElementsByTagName(t)
                        : n.querySelectorAll(t)
                    ));
                }
                return (this.length = 0), u.merge(this, e), this;
              }),
                (t.init.prototype = t),
                (u.each = function (t, n) {
                  for (var i = t.length, s = 0; s < i; s++)
                    n.call(t[s], t[s], s, t);
                }),
                (u.extend = t.extend = function (t, n) {
                  for (var i in (n || ((n = t), (t = this)), n))
                    n.hasOwnProperty(i) && (t[i] = n[i]);
                  return t;
                }),
                (u.matches = function (t, n) {
                  return (
                    t.matches ||
                    t.matchesSelector ||
                    t.msMatchesSelector ||
                    t.mozMatchesSelector ||
                    t.webkitMatchesSelector ||
                    t.oMatchesSelector
                  ).call(t, n);
                }),
                (u.merge = function (t, n) {
                  for (var i = +n.length, s = t.length, e = 0; e < i; s++, e++)
                    t[s] = n[e];
                  return (t.length = s), t;
                }),
                (u.parseHTML = function (t) {
                  var n,
                    i,
                    s = /^<(\w+)\s*\/?>(?:<\/\1>|)$/.exec(t);
                  return s
                    ? [c.createElement(s[1])]
                    : ((n = n || c.createDocumentFragment()),
                      ((i =
                        i ||
                        n.appendChild(c.createElement("div"))).innerHTML = t),
                      (s = i),
                      a.call(s.childNodes));
                }),
                (u.unique = function (t) {
                  return u.merge(
                    u(),
                    a.call(t).filter(function (t, n, i) {
                      return i.indexOf(t) === n;
                    })
                  );
                });
              var e = /\S+/g;
              function l(t, n) {
                return parseInt(s.getComputedStyle(t[0], null)[n], 10);
              }
              t.extend({
                addClass: function (t) {
                  var n,
                    i = t.match(e);
                  return (
                    this.each(function (t) {
                      if (((n = i.length), t.classList))
                        for (; n--; ) t.classList.add(i[n]);
                      else
                        for (; n--; )
                          -1 ===
                            (" " + t.className + " ").indexOf(
                              " " + i[n] + " "
                            ) && (t.className += " " + i[n]);
                    }),
                    this
                  );
                },
                attr: function (n, i) {
                  return i
                    ? (this.each(function (t) {
                        return t.setAttribute(n, i);
                      }),
                      this)
                    : this[0].getAttribute(n);
                },
                hasClass: function (t) {
                  return this[0].classList
                    ? this[0].classList.contains(t)
                    : -1 !== this[0].className.indexOf(t);
                },
                prop: function (t) {
                  return this[0][t];
                },
                removeAttr: function (n) {
                  return (
                    this.each(function (t) {
                      return t.removeAttribute(n);
                    }),
                    this
                  );
                },
                removeClass: function (t) {
                  var n,
                    i,
                    s = t.match(e);
                  return (
                    this.each(function (t) {
                      if (((n = s.length), t.classList))
                        for (; n--; ) t.classList.remove(s[n]);
                      else {
                        for (i = " " + t.className + " "; n--; )
                          i = i.replace(" " + s[n] + " ", " ");
                        t.className = i.trim();
                      }
                    }),
                    this
                  );
                },
              }),
                t.extend({
                  add: function () {
                    for (
                      var t = a.call(this), n = 0, i = arguments.length;
                      n < i;
                      n++
                    )
                      t = t.concat(a.call(u(arguments[n])));
                    return u.unique(t);
                  },
                  each: function (t) {
                    u.each(this, t);
                  },
                  eq: function (t) {
                    return u(this[t]);
                  },
                  filter: function (n) {
                    return "string" == typeof n
                      ? i.call(this, function (t) {
                          return u.matches(t, n);
                        })
                      : i.call(this, n);
                  },
                  first: function () {
                    return u(this[0]);
                  },
                  get: function (t) {
                    return this[t];
                  },
                  index: function (t) {
                    return (t
                      ? a.call(u(t).children())
                      : a.call(u(this[0]).parent().children())
                    ).indexOf(this[0]);
                  },
                  last: function () {
                    return u(this[this.length - 1]);
                  },
                }),
                t.extend({
                  css: function (i, n) {
                    if ("object" != typeof i)
                      return n
                        ? (this.each(function (t) {
                            return (t.style[i] = n);
                          }),
                          this)
                        : s.getComputedStyle(this[0], null)[i];
                    this.each(function (t) {
                      for (var n in i)
                        i.hasOwnProperty(n) && (t.style[n] = i[n]);
                    });
                  },
                }),
                t.extend({
                  data: function (n, i) {
                    return i
                      ? (this.each(function (t) {
                          t.dataset
                            ? (t.dataset[n] = i)
                            : u(t).attr("data-" + n, i);
                        }),
                        this)
                      : this[0].dataset
                      ? this[0].dataset[n]
                      : u(this[0]).attr("data-" + n);
                  },
                  removeData: function (n) {
                    return (
                      this.each(function (t) {
                        t.dataset
                          ? delete t.dataset[n]
                          : u(t).removeAttr("data-" + n);
                      }),
                      this
                    );
                  },
                }),
                t.extend({
                  height: function () {
                    return this[0].getBoundingClientRect().height;
                  },
                  innerWidth: function () {
                    return this[0].clientWidth;
                  },
                  innerHeight: function () {
                    return this[0].clientHeight;
                  },
                  outerWidth: function (t) {
                    return !0 === t
                      ? this[0].offsetWidth +
                          (l(this, "margin-left") ||
                            l(this, "marginLeft") ||
                            0) +
                          (l(this, "margin-right") ||
                            l(this, "marginRight") ||
                            0)
                      : this[0].offsetWidth;
                  },
                  outerHeight: function (t) {
                    return !0 === t
                      ? this[0].offsetHeight +
                          (l(this, "margin-top") || l(this, "marginTop") || 0) +
                          (l(this, "margin-bottom") ||
                            l(this, "marginBottom") ||
                            0)
                      : this[0].offsetHeight;
                  },
                  width: function () {
                    return this[0].getBoundingClientRect().width;
                  },
                });
              var f = {};
              function d(t, n, i) {
                var s = u(t).data("cshid") || e() + e(!0) + e(!0) + e();
                function e(t) {
                  var n = (Math.random().toString(16) + "000000000").substr(
                    2,
                    8
                  );
                  return t ? "-" + n.substr(0, 4) + "-" + n.substr(4, 4) : n;
                }
                u(t).data("cshid", s),
                  s in f || (f[s] = {}),
                  n in f[s] || (f[s][n] = []),
                  f[s][n].push(i);
              }
              t.extend({
                off: function (i, s) {
                  return (
                    this.each(function (t) {
                      if (s) t.removeEventListener(i, s);
                      else
                        for (var n in f[u(t).data("cshid")][i])
                          t.removeEventListener(i, f[u(t).data("cshid")][i][n]);
                    }),
                    this
                  );
                },
                on: function (n, s, e) {
                  return (
                    "function" == typeof s
                      ? ((e = s),
                        this.each(function (t) {
                          d(u(t), n, e), t.addEventListener(n, e);
                        }))
                      : this.each(function (i) {
                          function t(t) {
                            var n = t.target;
                            if (u.matches(n, s)) e.call(n);
                            else {
                              for (; !u.matches(n, s); ) {
                                if (n === i) return !1;
                                n = n.parentNode;
                              }
                              n && e.call(n);
                            }
                          }
                          d(u(i), n, t), i.addEventListener(n, t);
                        }),
                    this
                  );
                },
                ready: function (t) {
                  this[0].addEventListener("DOMContentLoaded", t);
                },
                trigger: function (t) {
                  var n = c.createEvent("HTMLEvents");
                  return (
                    n.initEvent(t, !0, !1),
                    this.each(function (t) {
                      return t.dispatchEvent(n);
                    }),
                    this
                  );
                },
              });
              var p = encodeURIComponent;
              return (
                t.extend({
                  serialize: function () {
                    for (
                      var t, n, i = this[0], s = "", e = i.elements.length - 1;
                      0 <= e;
                      e--
                    )
                      if (
                        (t = i.elements[e]).name &&
                        "file" !== t.type &&
                        "reset" !== t.type
                      )
                        if ("select-multiple" === t.type)
                          for (
                            n = i.elements[e].options.length - 1;
                            0 <= n;
                            n--
                          )
                            t.options[n].selected &&
                              (s +=
                                "&" +
                                t.name +
                                "=" +
                                p(t.options[n].value).replace(/%20/g, "+"));
                        else
                          "submit" !== t.type &&
                            "button" !== t.type &&
                            (s +=
                              "&" +
                              t.name +
                              "=" +
                              p(t.value).replace(/%20/g, "+"));
                    return s.substr(1);
                  },
                  val: function (n) {
                    return void 0 === n
                      ? this[0].value
                      : (this.each(function (t) {
                          return (t.value = n);
                        }),
                        this);
                  },
                }),
                t.extend({
                  append: function (t) {
                    return this[0].appendChild(u(t)[0]), this;
                  },
                  appendTo: function (t) {
                    return u(t)[0].appendChild(this[0]), this;
                  },
                  clone: function () {
                    return u(this[0].cloneNode(!0));
                  },
                  empty: function () {
                    return (
                      this.each(function (t) {
                        return (t.innerHTML = "");
                      }),
                      this
                    );
                  },
                  html: function (t) {
                    var n;
                    return "undefined" === t
                      ? this[0].innerHTML
                      : ((n = "object" == typeof t ? u(t)[0].outerHTML : t),
                        this.each(function (t) {
                          return (t.innerHTML = "" + n);
                        }),
                        this);
                  },
                  insertAfter: function (t) {
                    return (
                      u(t)[0].insertAdjacentHTML("afterend", this[0].outerHTML),
                      this
                    );
                  },
                  insertBefore: function (t) {
                    return (
                      u(t)[0].insertAdjacentHTML(
                        "beforebegin",
                        this[0].outerHTML
                      ),
                      this
                    );
                  },
                  prepend: function (t) {
                    return (
                      u(this)[0].insertAdjacentHTML(
                        "afterBegin",
                        u(t)[0].outerHTML
                      ),
                      this
                    );
                  },
                  prependTo: function (t) {
                    return (
                      u(t)[0].insertAdjacentHTML(
                        "afterBegin",
                        this[0].outerHTML
                      ),
                      this
                    );
                  },
                  remove: function () {
                    this.each(function (t) {
                      return t.parentNode.removeChild(t);
                    });
                  },
                  text: function (n) {
                    return n
                      ? (this.each(function (t) {
                          return (t.textContent = n);
                        }),
                        this)
                      : this[0].textContent;
                  },
                }),
                t.extend({
                  children: function (n) {
                    return n
                      ? u(this[0].children).filter(function (t) {
                          return u.matches(t, n);
                        })
                      : u.fn.extend(this[0].children, u.fn);
                  },
                  closest: function (t) {
                    return !t || u.matches(this[0], t)
                      ? this
                      : this.parent().closest(t);
                  },
                  is: function (t) {
                    return (
                      !!t &&
                      (t.cash
                        ? this[0] === t[0]
                        : "string" == typeof t && u.matches(this[0], t))
                    );
                  },
                  find: function (t) {
                    return u.fn.extend(this[0].querySelectorAll(t), u.fn);
                  },
                  has: function (n) {
                    return i.call(this, function (t) {
                      return 0 !== u(t).find(n).length;
                    });
                  },
                  next: function () {
                    return u(this[0].nextElementSibling);
                  },
                  not: function (n) {
                    return i.call(this, function (t) {
                      return !u.matches(t, n);
                    });
                  },
                  parent: function () {
                    var t = n.map.call(this, function (t) {
                      return t.parentElement || c.body.parentNode;
                    });
                    return u.unique(t);
                  },
                  parents: function (n) {
                    var i,
                      s = [],
                      e = 0;
                    return (
                      this.each(function (t) {
                        for (i = t; i !== c.body.parentNode; )
                          (i = i.parentElement),
                            (!n || (n && u.matches(i, n))) && ((s[e] = i), e++);
                      }),
                      u.unique(s)
                    );
                  },
                  prev: function () {
                    return u(this[0].previousElementSibling);
                  },
                  siblings: function () {
                    var t = this.parent().children(),
                      n = this[0];
                    return i.call(t, function (t) {
                      return t !== n;
                    });
                  },
                }),
                u
              );
            }),
            "function" == typeof __crisp_void_define && define.amd
              ? define(a)
              : "undefined" != typeof __crisp_void_exports
              ? (module.exports = a())
              : (c.cash = c.$ = a()),
            (s = u),
            (v.prototype.init = function (t) {
              var n =
                ((i.prototype.code = function (t, n) {
                  var i = 1 < arguments.length && void 0 !== n ? n : "small";
                  return this.parent.template.render("smiley", {
                    name: t,
                    size: i,
                  });
                }),
                (i.prototype.parse = function (t) {
                  var n,
                    i,
                    s = void 0,
                    e = void 0,
                    c = t;
                  for (s in this.h)
                    if (this.h.hasOwnProperty(s))
                      for (n = this.h[s]; null !== (i = c.match(n)); )
                        (e = "small"),
                          c === i[2] && (e = "large"),
                          (i = this.code(s, e)),
                          (c = c.replace(n, "$1" + i + "$3"));
                  return c;
                }),
                (i.prototype.count = function (t) {
                  var n = 0,
                    i = void 0,
                    s = void 0,
                    e = t;
                  for (i in this.h)
                    if (this.h.hasOwnProperty(i))
                      for (s = this.h[i]; !0 === s.test(e); )
                        n++, (e = e.replace(s, "$1[]$3"));
                  return n;
                }),
                (i.prototype.name = function (t) {
                  var n,
                    i = void 0,
                    s = null;
                  for (i in this.h)
                    if (
                      this.h.hasOwnProperty(i) &&
                      ((n = this.h[i]), t.match(n))
                    ) {
                      s = i;
                      break;
                    }
                  return s;
                }),
                (i.prototype.u = function () {
                  var t = void 0;
                  for (t in ((this.h = {}), this.l))
                    this.h[t] = new RegExp(
                      "(^|\\s|\\()" + this.l[t] + "($|\\s|\\))",
                      "i"
                    );
                }),
                i);
              function i(t) {
                (this.parent = t),
                  (this.smiley_map = {
                    angry: ":@",
                    blushing: ":$",
                    confused: "x)",
                    cool: "8)",
                    crying: ":'(",
                    embarrased: ":/",
                    heart: "<3",
                    laughing: ":'D",
                    sad: ":(",
                    sick: ":S",
                    "small-smile": ":)",
                    "big-smile": ":D",
                    "thumbs-up": "+1",
                    surprised: ":o",
                    tongue: ":P",
                    winking: ";)",
                  }),
                  (this.l = {
                    angry: "((?:=|:)(?:-)?@)",
                    blushing: "((?:=|:)(?:-)?\\$)",
                    cool: "(8(?:-)?\\))",
                    confused: "(x(?:-)?\\))",
                    crying: "((?:=|:)'(?:-)?\\()",
                    embarrased: "((?:=|:)(?:-)?\\/)",
                    heart: "(&lt;3)",
                    laughing: "((?:=|:)(?:-)?'D)",
                    sad: "((?:=|:)(?:-)?(?:\\(|\\|))",
                    sick: "((?:=|:)(?:-)?S)",
                    "small-smile": "((?:=|:)(?:-)?\\))",
                    "big-smile": "((?:=|:)(?:-)?D)",
                    "thumbs-up": "(\\+1)",
                    surprised: "((?:=|:)(?:-)?o)",
                    tongue: "((?:=|:)(?:-)?P)",
                    winking: "(;(?:-)?\\))",
                  }),
                  this.u();
              }
              var s =
                ((e.prototype.format = function (t, n, i) {
                  for (
                    var s,
                      e = 1 < arguments.length && void 0 !== n ? n : {},
                      c = 2 < arguments.length && void 0 !== i ? i : [],
                      a = void 0,
                      o = t,
                      a = 0;
                    a < this.d.length;
                    a++
                  )
                    (s = this.d[a]),
                      -1 === c.indexOf(s) && (o = this.v[s].bind(this)(o, e));
                  return o;
                }),
                (e.prototype.replace = function (t, n) {
                  for (
                    var i,
                      s = 1 < arguments.length && void 0 !== n ? n : [],
                      e = void 0,
                      c = t,
                      e = 0;
                    e < s.length;
                    e++
                  )
                    (i = e + 1), (c = c.replace("%" + i + "s", s[e]));
                  return c;
                }),
                (e.prototype.attribute = function (t) {
                  return this._(t, {}, this.g);
                }),
                (e.prototype.html = function (t, n) {
                  var i = 1 < arguments.length && void 0 !== n && n;
                  return this._(t, {}, !0 === i ? this.w : this.b);
                }),
                (e.prototype.escape_regex = function (t) {
                  return t.replace(this.k, "\\$&");
                }),
                (e.prototype._ = function (t, n, i) {
                  var s,
                    e = void 0,
                    c = t,
                    a =
                      (2 < arguments.length && void 0 !== i ? i : null) ||
                      this.b;
                  for (e in a)
                    a.hasOwnProperty(e) && ((s = a[e]), (c = c.replace(s, e)));
                  return c;
                }),
                (e.prototype.F = function (t, n) {
                  return t.replace(/\n(\s+)?\n(\s+)?\n/g, "\n\n");
                }),
                (e.prototype.C = function (t, n) {
                  var i = 1 < arguments.length && void 0 !== n ? n : {},
                    i = this.parent.template.render("new_line", {}, i);
                  return t.trim().replace(/\n/g, i);
                }),
                (e.prototype.j = function (t, n) {
                  var e = this,
                    c = 1 < arguments.length && void 0 !== n ? n : {};
                  return t.replace(this.q.email, function (t, n, i, s) {
                    return (
                      "" +
                      n +
                      e.parent.template.render(
                        "link_email",
                        {
                          email: i,
                          no_external_link:
                            e.parent.config.runtime.no_external_link || !1,
                        },
                        c
                      ) +
                      s
                    );
                  });
                }),
                (e.prototype.z = function (t, n) {
                  var e = this,
                    c = 1 < arguments.length && void 0 !== n ? n : {};
                  return t.replace(this.q.phone, function (t, n, i, s) {
                    return (
                      "" +
                      n +
                      e.parent.template.render(
                        "link_phone",
                        {
                          phone: i,
                          no_external_link:
                            e.parent.config.runtime.no_external_link || !1,
                        },
                        c
                      ) +
                      s
                    );
                  });
                }),
                (e.prototype.S = function (t, n) {
                  var i = 1 < arguments.length && void 0 !== n ? n : {};
                  t = "\n" + t + "\n";
                  for (var s = 0; s < this.A.length; s++)
                    t = t.replace(this.A[s][1], this.I(this.A[s], i));
                  return t.trim();
                }),
                (e.prototype.D = function (t, n) {
                  var e = this,
                    c = 1 < arguments.length && void 0 !== n ? n : {};
                  return t.replace(this.q.domain, function (t, n, i, s) {
                    return (
                      "" +
                      n +
                      e.parent.template.render(
                        "link_domain",
                        {
                          domain_value: i,
                          domain_name: i,
                          no_external_link:
                            e.parent.config.runtime.no_external_link || !1,
                        },
                        c
                      ) +
                      s
                    );
                  });
                }),
                (e.prototype.T = function (t, n) {
                  var e = this,
                    c = 1 < arguments.length && void 0 !== n ? n : {};
                  return t.replace(this.q.uri, function (t, n, i, s) {
                    return (
                      "" +
                      n +
                      e.parent.template.render(
                        "link_uri",
                        {
                          uri_value: i,
                          uri_name: i,
                          no_external_link:
                            e.parent.config.runtime.no_external_link || !1,
                        },
                        c
                      ) +
                      s
                    );
                  });
                }),
                (e.prototype.B = function (t, n) {
                  return this.parent.Smileys.parse(t);
                }),
                (e.prototype.I = function (a, t) {
                  var o = this,
                    r = 1 < arguments.length && void 0 !== t ? t : {};
                  return function (t, n, i, s, e) {
                    var c = {
                        type: null,
                        value: null,
                        url_crisp_image: o.parent.config.url.crisp_image,
                        no_external_link:
                          o.parent.config.runtime.no_external_link || !1,
                      },
                      n = ("string" == typeof n ? n : null) || "",
                      e = ("string" == typeof e ? e : null) || "";
                    return (
                      (c.type = i),
                      (c.value = s),
                      -1 !== o.U.indexOf(a[0]) &&
                        "string" == typeof c.value &&
                        (c.value = c.value.trim()),
                      -1 !== o.R.indexOf(a[0]) &&
                        "string" == typeof c.value &&
                        (c.value = o.N(c.value)),
                      "" +
                        n +
                        o.parent.template.render("markdown_" + a[0], c, r) +
                        e
                    );
                  };
                }),
                (e.prototype.N = function (t) {
                  return (t = this._(t, {}, this.O)).replace(
                    this.M,
                    function (t) {
                      return "&#" + t.charCodeAt(0) + ";";
                    }
                  );
                }),
                (e.prototype.L = function (t, n, i) {
                  var s = 1 < arguments.length && void 0 !== n ? n : "gi",
                    e = 2 < arguments.length && void 0 !== i ? i : {};
                  return new RegExp(
                    "" + (e.prefix || "") + t + (e.suffix || ""),
                    s
                  );
                }),
                (e.prototype.P = function () {
                  this.q = {
                    email: this.L(
                      "([\\w\\._-]+@[\\w\\.\\/_-]+)",
                      "gi",
                      this.J.links
                    ),
                    phone: this.L(
                      "(\\+[0-9]{1,3}[ \\(\\)\\-0-9]{7,20})",
                      "gi",
                      this.J.links
                    ),
                    domain: this.L(
                      [
                        "((?:[^<>\\(\\)\\s,@]+)(?:\\.(?:",
                        this.H.map(this.escape_regex.bind(this)).join("|"),
                        ")))",
                      ].join(""),
                      "gim",
                      this.J.links
                    ),
                    uri: this.L(
                      "((?:https?|ftps?|file):(?:[^<>\\(\\)\\s,]+))",
                      "gim",
                      this.J.links
                    ),
                  };
                }),
                (e.prototype.W = function () {
                  this.A = [
                    [
                      "code_block",
                      this.L(
                        "(`{2,3})((?:\\n+)?(?:(?!\\2).(?:\\n+)?)*)(?:\\2)",
                        "gi",
                        {
                          prefix: "(\\s|<[^<>]+\\/>|^)",
                          suffix: "(\\s|\\.|,|:|$)",
                        }
                      ),
                    ],
                    [
                      "code_inline",
                      this.L("(`{1})([^`]*)(?:\\2)", "gim", {
                        prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                        suffix: "(\\s|\\.|,|:|\\)|<\\/[^<>]+>|$)",
                      }),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{1})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{2})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{3})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{4})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{5})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "title",
                      this.L(
                        "(#{6})(?:[\\s]+)([^#].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "image",
                      this.L(
                        "!\\[([^\\[]*)\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                    [
                      "link",
                      this.L("\\[([^\\[]+)\\]\\(([^\\)]+)\\)", "gim", {
                        prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                        suffix: "(\\s|.|,|:|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)",
                      }),
                    ],
                    [
                      "youtube",
                      this.L(
                        "\\$\\{youtube\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                    [
                      "vimeo",
                      this.L(
                        "\\$\\{vimeo\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                    [
                      "dailymotion",
                      this.L(
                        "\\$\\{dailymotion\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                    [
                      "frame",
                      this.L(
                        "\\$\\{frame\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                    [
                      "bold",
                      this.L(
                        "(\\*\\*)(.*?)(?:\\2)",
                        "gim",
                        this.J.markdown_formatting
                      ),
                    ],
                    [
                      "underline",
                      this.L(
                        "(__)(.*?)(?:\\2)",
                        "gim",
                        this.J.markdown_formatting
                      ),
                    ],
                    [
                      "italic",
                      this.L(
                        "(\\*|_)(.*?)(?:\\2)",
                        "gim",
                        this.J.markdown_formatting
                      ),
                    ],
                    [
                      "delete",
                      this.L(
                        "(\\~\\~)(.*?)(?:\\2)",
                        "gim",
                        this.J.markdown_formatting
                      ),
                    ],
                    [
                      "highlight",
                      this.L(
                        "(\\+\\+)(.*?)(?:\\2)",
                        "gim",
                        this.J.markdown_formatting
                      ),
                    ],
                    [
                      "list",
                      this.L("(\\*)(?:[\\s]+)", "gim", this.J.markdown_list),
                    ],
                    [
                      "list",
                      this.L(
                        "(?:([\\d]{1,2})\\.)(?:[\\s]+)",
                        "gim",
                        this.J.markdown_list
                      ),
                    ],
                    [
                      "blockquote",
                      this.L(
                        "(&gt;|\\>)(?:[\\s]+)(.*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "emphasis",
                      this.L(
                        "(\\|{1})(?:[\\s]+)([^\\|].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "emphasis",
                      this.L(
                        "(\\|{2})(?:[\\s]+)([^\\|].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "emphasis",
                      this.L(
                        "(\\|{3})(?:[\\s]+)([^\\|].*)",
                        "gim",
                        this.J.markdown_simple
                      ),
                    ],
                    [
                      "interpolate",
                      this.L(
                        '(?:\\{\\{\\s*)([^\\{\\}\\|\\s]+)(?:\\s*\\|\\s*(?:(?:&quot;)|")([^&"]*)(?:(?:&quot;)|"))?(?:\\s*\\}\\})',
                        "gim",
                        { prefix: "(\\s|\\(|^)", suffix: "" }
                      ),
                    ],
                    [
                      "line",
                      this.L("(-{3,})", "gim", {
                        prefix: "(^)(\\s+)?",
                        suffix: "(\\s|$)",
                      }),
                    ],
                    [
                      "color",
                      this.L(
                        "\\$\\{color\\}\\[(#[0-9A-Fa-f]{6})\\]\\(([^\\)]+)\\)",
                        "gim",
                        this.J.markdown_includes
                      ),
                    ],
                  ];
                }),
                e);
              function e(t) {
                (this.parent = t),
                  (this.H = [
                    "com",
                    "net",
                    "org",
                    "info",
                    "biz",
                    "mobi",
                    "chat",
                    "email",
                    "help",
                    "watch",
                    "name",
                    "pro",
                    "aero",
                    "asia",
                    "cat",
                    "coop",
                    "edu",
                    "gov",
                    "int",
                    "jobs",
                    "mil",
                    "museum",
                    "post",
                    "tel",
                    "travel",
                    "xxx",
                    "xyz",
                    "top",
                    "site",
                    "online",
                    "club",
                    "shop",
                    "work",
                    "app",
                    "live",
                    "store",
                    "space",
                    "website",
                    "tech",
                    "life",
                    "dev",
                    "blog",
                    "cloud",
                    "page",
                    "link",
                    "design",
                    "group",
                    "company",
                    "agency",
                    "network",
                    "media",
                    "immo",
                    "ac",
                    "ad",
                    "ae",
                    "af",
                    "ag",
                    "ai",
                    "al",
                    "am",
                    "an",
                    "ao",
                    "aq",
                    "ar",
                    "as",
                    "at",
                    "au",
                    "aw",
                    "ax",
                    "az",
                    "ba",
                    "bb",
                    "bd",
                    "be",
                    "bf",
                    "bg",
                    "bh",
                    "bi",
                    "bj",
                    "bl",
                    "bm",
                    "bn",
                    "bo",
                    "bq",
                    "br",
                    "bs",
                    "bt",
                    "bv",
                    "bw",
                    "by",
                    "bz",
                    "ca",
                    "cc",
                    "cd",
                    "cf",
                    "cg",
                    "ch",
                    "ci",
                    "ck",
                    "cl",
                    "cm",
                    "cn",
                    "co",
                    "cr",
                    "cu",
                    "cv",
                    "cw",
                    "cx",
                    "cy",
                    "cz",
                    "de",
                    "dj",
                    "dk",
                    "dm",
                    "do",
                    "dz",
                    "ec",
                    "ee",
                    "eg",
                    "eh",
                    "er",
                    "es",
                    "et",
                    "eu",
                    "fi",
                    "fj",
                    "fk",
                    "fm",
                    "fo",
                    "fr",
                    "ga",
                    "gb",
                    "gd",
                    "ge",
                    "gf",
                    "gg",
                    "gh",
                    "gi",
                    "gl",
                    "gm",
                    "gn",
                    "gp",
                    "gq",
                    "gr",
                    "gs",
                    "gt",
                    "gu",
                    "gw",
                    "gy",
                    "hk",
                    "hm",
                    "hn",
                    "hr",
                    "ht",
                    "hu",
                    "id",
                    "ie",
                    "il",
                    "im",
                    "in",
                    "io",
                    "iq",
                    "ir",
                    "is",
                    "it",
                    "je",
                    "jm",
                    "jo",
                    "jp",
                    "ke",
                    "kg",
                    "kh",
                    "ki",
                    "km",
                    "kn",
                    "kp",
                    "kr",
                    "kw",
                    "ky",
                    "kz",
                    "la",
                    "lb",
                    "lc",
                    "li",
                    "lk",
                    "lr",
                    "ls",
                    "lt",
                    "lu",
                    "lv",
                    "ly",
                    "ma",
                    "mc",
                    "md",
                    "me",
                    "mf",
                    "mg",
                    "mh",
                    "mk",
                    "ml",
                    "mm",
                    "mn",
                    "mo",
                    "mp",
                    "mq",
                    "mr",
                    "ms",
                    "mt",
                    "mu",
                    "mv",
                    "mw",
                    "mx",
                    "my",
                    "mz",
                    "na",
                    "nc",
                    "ne",
                    "nf",
                    "ng",
                    "ni",
                    "nl",
                    "no",
                    "np",
                    "nr",
                    "nu",
                    "nz",
                    "om",
                    "pa",
                    "pe",
                    "pf",
                    "pg",
                    "ph",
                    "pk",
                    "pl",
                    "pm",
                    "pn",
                    "pr",
                    "ps",
                    "pt",
                    "pw",
                    "py",
                    "qa",
                    "re",
                    "ro",
                    "rs",
                    "ru",
                    "rw",
                    "sa",
                    "sb",
                    "sc",
                    "sd",
                    "se",
                    "sg",
                    "sh",
                    "si",
                    "sj",
                    "sk",
                    "sl",
                    "sm",
                    "sn",
                    "so",
                    "sr",
                    "ss",
                    "st",
                    "su",
                    "sv",
                    "sx",
                    "sy",
                    "sz",
                    "tc",
                    "td",
                    "tf",
                    "tg",
                    "th",
                    "tj",
                    "tk",
                    "tl",
                    "tm",
                    "tn",
                    "to",
                    "tp",
                    "tr",
                    "tt",
                    "tv",
                    "tw",
                    "tz",
                    "ua",
                    "ug",
                    "uk",
                    "um",
                    "us",
                    "uy",
                    "uz",
                    "va",
                    "vc",
                    "ve",
                    "vg",
                    "vi",
                    "vn",
                    "vu",
                    "wf",
                    "ws",
                    "ye",
                    "yt",
                    "za",
                    "zm",
                    "zw",
                  ]),
                  (this.w = {
                    "&": /&amp;/g,
                    "<": /&lt;/g,
                    ">": /&gt;/g,
                    '"': /&quot;/g,
                  }),
                  (this.b = {
                    "&amp;": /&/g,
                    "&lt;": /</g,
                    "&gt;": />/g,
                    "&quot;": /"/g,
                  }),
                  (this.g = {
                    "\\\\": /\\/g,
                    "\\t": /\t/g,
                    "\\n": /\n/g,
                    "\\u00A0": /\u00A0/g,
                  }),
                  (this.O = { "<": /&lt;/g, ">": /&gt;/g }),
                  (this.k = /[-\/\\^$*+?.()|[\]{}]/g),
                  (this.M = /([\#$\*\_\-+![\]\(\)`~><\.|{}])/g),
                  (this.J = {
                    links: {
                      prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                      suffix: "(,|\\s|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)",
                    },
                    markdown_simple: { prefix: "(^)", suffix: "($)" },
                    markdown_includes: {
                      prefix: "(\\s|<[^<>]+\\/>|<[^<>]+>|\\(|^)",
                      suffix: "(\\s|.|,|:|<[^<>]+\\/>|\\)|$)",
                    },
                    markdown_formatting: {
                      prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                      suffix: "",
                    },
                    markdown_list: { prefix: "(^\\s*)", suffix: "(.*?)($)" },
                  }),
                  (this.U = [
                    "title",
                    "list",
                    "code_block",
                    "code_inline",
                    "blockquote",
                    "emphasis",
                  ]),
                  (this.R = ["code_block", "code_inline"]),
                  (this.d = [
                    "escape",
                    "consecutive_lines",
                    "markdown",
                    "links_uri",
                    "links_domain",
                    "emails",
                    "phones",
                    "smileys",
                    "new_lines",
                  ]),
                  (this.v = {
                    escape: this._,
                    consecutive_lines: this.F,
                    new_lines: this.C,
                    emails: this.j,
                    phones: this.z,
                    markdown: this.S,
                    links_domain: this.D,
                    links_uri: this.T,
                    smileys: this.B,
                  }),
                  this.P(),
                  this.W();
              }
              var c =
                ((a.prototype.parse_first_name = function (t) {
                  return this.G(t, 1);
                }),
                (a.prototype.parse_last_name = function (t) {
                  return this.G(t, 3);
                }),
                (a.prototype.G = function (t, n) {
                  var i = (t || "").trim();
                  return (
                    !i || ((t = i.match(this.V)) && t[n] && (i = t[n].trim())),
                    i
                  );
                }),
                a);
              function a(t) {
                (this.parent = t), (this.V = /^(\S+)((?:\s+)(.+))?$/);
              }
              this.K(t),
                (this.Smileys = new n(this)),
                (this.Parse = new s(this)),
                (this.Name = new c(this));
            }),
            (v.prototype.K = function (t) {
              t && t.template && (this.template = t.template),
                t && t.config && (this.config = t.config);
            }),
            (e = v),
            (s.CrispLibraryWeb = new e());
          var d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
          function f(t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          (n = u),
            (i = (function () {
              function t() {}
              return (
                (t.prototype.init = function t(n) {
                  var o = {},
                    i = this;
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var e =
                    ((c.prototype.set_ignore_privacy = function (t) {
                      var n = 0 < arguments.length && void 0 !== t && t;
                      this.X = n;
                    }),
                    (c.prototype.set_visitor_compose = function (t) {
                      var n = !(0 < arguments.length && void 0 !== t) || t;
                      this.Y = n;
                    }),
                    (c.prototype.reset = function () {
                      this.Z();
                    }),
                    (c.prototype.Z = function () {
                      (this.X = !1), (this.Y = !0);
                    }),
                    c);
                  function c(t) {
                    (this.parent = t), this.Z();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var a =
                    ((r.prototype.set_timeout = function (t, n) {
                      var i = this,
                        s = setTimeout(
                          function () {
                            delete i.Q[s], t();
                          },
                          1 < arguments.length && void 0 !== n ? n : 0
                        );
                      return (this.Q[s] = s);
                    }),
                    (r.prototype.clear_timeout = function (t) {
                      t in this.Q &&
                        (clearTimeout(this.Q[t]), delete this.Q[t]);
                    }),
                    (r.prototype.set_interval = function (t, n) {
                      var i = setInterval(
                        t,
                        1 < arguments.length && void 0 !== n ? n : 0
                      );
                      return (this.tt[i] = i);
                    }),
                    (r.prototype.clear_interval = function (t) {
                      t in this.tt &&
                        (clearInterval(this.tt[t]), delete this.tt[t]);
                    }),
                    (r.prototype.reset = function () {
                      for (var t in this.Q) this.clear_timeout(t);
                      for (var n in this.tt) this.clear_interval(n);
                      this.Z();
                    }),
                    (r.prototype.Z = function () {
                      (this.Q = {}), (this.tt = {});
                    }),
                    r);
                  function r(t) {
                    (this.parent = t), this.Z();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var h =
                    ((u.prototype.add_event = function (t, n, i, s, e) {
                      var c = 4 < arguments.length && void 0 !== e ? e : {},
                        a = this.nt(t, n, i);
                      if (a in this.it)
                        throw new Error(
                          "Event listener is already registered for '" +
                            i +
                            "' event on '" +
                            n +
                            "' instance, cannot re-register"
                        );
                      window[n].addEventListener(i, s, c),
                        (this.it[a] = [s, c]);
                    }),
                    (u.prototype.remove_event = function (t, n, i) {
                      var s = this.nt(t, n, i);
                      s in this.it &&
                        ((t = this.it[s]),
                        window[n].removeEventListener(i, t[0], t[1]),
                        delete this.it[s]);
                    }),
                    (u.prototype.apply_patch = function (t, n, i, s, e) {
                      if ((t = this.nt(t, n, i)) in this.st)
                        throw new Error(
                          "Patch is already registered for '" +
                            i +
                            "' method on '" +
                            n +
                            "' instance, cannot re-register"
                        );
                      var c = s[i];
                      "function" == typeof c &&
                        ((s[i] = function () {
                          var t = c.apply(s, arguments);
                          return e(arguments), t;
                        }),
                        (this.st[t] = [s, c]));
                    }),
                    (u.prototype.revoke_patch = function (t, n, i) {
                      (t = this.nt(t, n, i)) in this.st &&
                        (((n = this.st[t])[0][i] = n[1]), delete this.st[t]);
                    }),
                    (u.prototype.reset = function () {
                      for (var t in this.it) {
                        var n = this.et(t);
                        null !== n && this.remove_event(n[0], n[1], n[2]);
                      }
                      for (var i in this.st) {
                        var s = this.et(i);
                        null !== s && this.revoke_patch(s[0], s[1], s[2]);
                      }
                      this.Z();
                    }),
                    (u.prototype.nt = function (t, n, i) {
                      return t + ":" + n + ":" + i;
                    }),
                    (u.prototype.et = function (t) {
                      return 3 === (t = t.split(":")).length ? t : null;
                    }),
                    (u.prototype.Z = function () {
                      (this.it = {}), (this.st = {});
                    }),
                    u);
                  function u(t) {
                    (this.parent = t), this.Z();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var l =
                    ((f.prototype.get_state = function () {
                      this.ct(this.parent.socket.connected || !1);
                    }),
                    (f.prototype.at = function () {
                      var t = this;
                      this.parent.socket.on("connect", function () {
                        t.ct(!0);
                      }),
                        this.parent.socket.on("disconnect", function () {
                          t.ct(!1);
                        }),
                        this.parent.socket.on("reconnect_failed", function () {
                          t.ct(!1, !0);
                        });
                    }),
                    (f.prototype.ct = function (t, n) {
                      var i = !(0 < arguments.length && void 0 !== t) || t,
                        s = 1 < arguments.length && void 0 !== n && n;
                      this.parent.event.publish("socket:state", {
                        connected: i,
                        failed_reconnect: s,
                      });
                    }),
                    f);
                  function f(t) {
                    (this.parent = t), this.at();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var d =
                    ((p.prototype.Z = function () {
                      (this.ot = !1),
                        (this.rt = null),
                        (this.it = []),
                        (this.ht = {}),
                        (this.ut = null),
                        (this.lt = null),
                        (this.ft = null),
                        (this.dt = null);
                    }),
                    (p.prototype.bind_to = function (t, n, i, s, e) {
                      var c = 3 < arguments.length && void 0 !== s ? s : null,
                        a = 4 < arguments.length && void 0 !== e ? e : null;
                      (this.rt = t),
                        (this.it = n),
                        (this.ht = i),
                        (this.ut = c),
                        (this.lt = a),
                        !0 !== this.ot
                          ? this.parent.stream.connect()
                          : this.pt();
                    }),
                    (p.prototype.unbind_from = function () {
                      this.vt(), this.parent.stream.disconnect();
                    }),
                    (p.prototype.reset = function () {
                      this.Z();
                    }),
                    (p.prototype.at = function () {
                      var t = this;
                      this.parent.stream.on("connect", function () {
                        (t.ot = !0), t.pt();
                      }),
                        this.parent.stream.on("disconnect", function () {
                          (t.ot = !1), t.yt();
                        }),
                        this.parent.stream.on("socket:bound", function () {
                          t.mt();
                        });
                    }),
                    (p.prototype.pt = function () {
                      var t;
                      this.ft !== this.rt || this.dt !== this.it
                        ? ((this.ft = this.rt),
                          (this.dt = this.it),
                          (t = []),
                          this.ft && t.push(this.ft),
                          this.parent.stream.emit("socket:bind", {
                            ray: "client",
                            events: this.dt,
                            rooms: t,
                            context: this.ht,
                          }))
                        : this.mt();
                    }),
                    (p.prototype.yt = function () {
                      null !== this.lt && this.lt(),
                        this.vt(),
                        (this.ft = null),
                        (this.dt = null);
                    }),
                    (p.prototype.mt = function () {
                      null !== this.ut && this.ut(), this.vt();
                    }),
                    (p.prototype.vt = function () {
                      (this.rt = null),
                        (this.it = []),
                        (this.ht = {}),
                        (this.ut = null),
                        (this.lt = null);
                    }),
                    p);
                  function p(t) {
                    (this.parent = t), this.Z(), this.at();
                  }
                  var v =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        };
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var y =
                    ((m.prototype.update = function (t, n, i, s) {
                      var e =
                          2 < arguments.length && void 0 !== i
                            ? i
                            : function () {},
                        c =
                          3 < arguments.length && void 0 !== s
                            ? s
                            : function () {},
                        a = { ray: this._t(t), type: t, data: n };
                      this.gt.push(a.ray),
                        (this.wt[a.ray] = { success: e, error: c }),
                        this.parent.socket.emit("storage:sync:update", a),
                        this.parent.event.publish("storage:sync:update", a);
                    }),
                    (m.prototype.get_stamp_local = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : [],
                        i = this.bt(t, i);
                      return (
                        ("object" === v(window.localStorage) &&
                          window.localStorage.getItem(i)) ||
                        ""
                      );
                    }),
                    (m.prototype.set_stamp_local = function (t, n, i) {
                      var s = 1 < arguments.length && void 0 !== n ? n : [],
                        e = 2 < arguments.length && void 0 !== i ? i : "",
                        s = this.bt(t, s);
                      return (
                        "object" === v(window.localStorage) &&
                        (window.localStorage.setItem(s, e), !0)
                      );
                    }),
                    (m.prototype.remove_stamp_local = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : [],
                        i = this.bt(t, i);
                      return (
                        "object" === v(window.localStorage) &&
                        (window.localStorage.removeItem(i), !0)
                      );
                    }),
                    (m.prototype.clear_stamp_local = function () {
                      if ("object" !== v(window.localStorage)) return !1;
                      for (var t in window.localStorage)
                        window.localStorage.hasOwnProperty(t) &&
                          0 === t.indexOf(this.kt) &&
                          window.localStorage.removeItem(t);
                      return !0;
                    }),
                    (m.prototype.is_syncing_storage = function () {
                      return 0 < this.gt.length && !0;
                    }),
                    (m.prototype.reset = function () {
                      this.clear_stamp_local(), this.Z();
                    }),
                    (m.prototype.bt = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : [],
                        s = this.kt + "/" + t;
                      return 0 < i.length && (s += "/" + i.join("/")), s;
                    }),
                    (m.prototype.Z = function () {
                      (this.xt = 1),
                        (this.Ft = 0),
                        (this.wt = {}),
                        (this.gt = []);
                    }),
                    (m.prototype.at = function () {
                      this.parent.socket.on(
                        "storage:sync:updated",
                        this.Ct.Et(this)
                      );
                    }),
                    (m.prototype.Ct = function (t) {
                      var n;
                      "object" === v(this.wt[t.ray]) &&
                        (t.error
                          ? this.wt[t.ray].error()
                          : this.wt[t.ray].success(),
                        delete this.wt[t.ray],
                        -1 !== (n = this.gt.indexOf(t.ray)) &&
                          this.gt.splice(n, 1)),
                        this.parent.event.publish("storage:sync:updated", t);
                    }),
                    (m.prototype._t = function (t) {
                      return (
                        t +
                        "/" +
                        Math.floor(Math.random() * this.jt) +
                        "/" +
                        this.Ft++
                      );
                    }),
                    m);
                  function m(t) {
                    (this.parent = t),
                      (this.jt = 1e5),
                      (this.kt = "crisp-client"),
                      this.Z(),
                      this.at();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var _ =
                    ((g.prototype.update_message = function (t, n) {
                      (n = { fingerprint: t, content: n }),
                        this.parent.socket.emit("message:update", n),
                        this.qt(n, "local");
                    }),
                    (g.prototype.send_raw_message = function (t, n) {
                      var i,
                        s = this,
                        e = 1 < arguments.length && void 0 !== n ? n : 0;
                      -1 === this.zt.indexOf(t.fingerprint) &&
                        this.zt.push(t.fingerprint),
                        this.parent.platform_name &&
                          this.parent.platform_signature_key &&
                          ((_signature_data = [
                            this.parent.Session.St,
                            t.fingerprint,
                            t.type,
                          ]),
                          (i = this.parent.sha256.hmac.create(
                            this.parent.platform_signature_key
                              .split("/")
                              .map(function (t) {
                                return String.fromCharCode(parseInt(t, 36));
                              })
                              .join("")
                          )).update("[" + _signature_data.join("|") + "]"),
                          (t.signature =
                            this.parent.platform_name + ":" + i.hex())),
                        this.parent.event.publish("message:send", t),
                        this.parent.Schedule.set_timeout(function () {
                          s.parent.socket.emit("message:send", t);
                        }, e);
                    }),
                    (g.prototype.send_text_message = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : 0;
                      this.send_raw_message(
                        {
                          type: "text",
                          origin: "chat",
                          content: t,
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        i
                      );
                    }),
                    (g.prototype.send_file_message = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : 0;
                      this.send_raw_message(
                        {
                          type: "file",
                          origin: "chat",
                          content: { name: t, url: n, type: i },
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        e
                      );
                    }),
                    (g.prototype.send_animation_message = function (t, n, i) {
                      var s = 2 < arguments.length && void 0 !== i ? i : 0;
                      this.send_raw_message(
                        {
                          type: "animation",
                          origin: "chat",
                          content: { url: t, type: n },
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        s
                      );
                    }),
                    (g.prototype.send_audio_message = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : 0;
                      this.send_raw_message(
                        {
                          type: "audio",
                          origin: "chat",
                          content: { url: t, type: n, duration: i },
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        e
                      );
                    }),
                    (g.prototype.send_picker_message = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : 0;
                      this.send_raw_message(
                        {
                          type: "picker",
                          origin: "chat",
                          content: { id: t, text: n, choices: i },
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        e
                      );
                    }),
                    (g.prototype.send_field_message = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : 0;
                      this.send_raw_message(
                        {
                          type: "field",
                          origin: "chat",
                          content: { id: t, text: n, explain: i },
                          timestamp: new Date().getTime(),
                          fingerprint: this.At(),
                        },
                        e
                      );
                    }),
                    (g.prototype.send_message_compose = function (t, n) {
                      var i = this,
                        s = 1 < arguments.length && void 0 !== n ? n : null;
                      ((!0 !== this.parent.Config.X &&
                        "1" === (navigator || {}).doNotTrack) ||
                        !1 === this.parent.Config.Y) &&
                        (s = null),
                        (s = this.It(s));
                      var e = t !== this.Dt.local.type && !0;
                      (1 == e ||
                        s !== (this.Dt.local.excerpt || null) ||
                        ("start" === this.Dt.local.type &&
                          this.Tt &&
                          new Date().getTime() - this.Tt >= this.Bt)) &&
                        ((this.Tt = new Date().getTime()),
                        (this.Dt.local = { type: t }),
                        s && (this.Dt.local.excerpt = s),
                        1 == e &&
                          null !== this.Ut &&
                          (this.parent.Schedule.clear_timeout(this.Ut),
                          (this.Ut = null)),
                        null === this.Ut &&
                          (this.Ut = this.parent.Schedule.set_timeout(
                            function () {
                              (i.Ut = null),
                                i.parent.socket.emit(
                                  "message:compose:send",
                                  i.Dt.local
                                ),
                                i.parent.event.publish(
                                  "message:compose:send",
                                  i.Dt.local
                                );
                            },
                            1 == e ? 0 : this.Rt
                          )));
                    }),
                    (g.prototype.send_message_thread = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : "",
                        s = { type: t };
                      i && (s.text = i),
                        this.parent.socket.emit("message:thread", s),
                        this.parent.event.publish("message:thread", s);
                    }),
                    (g.prototype.receive_message_local = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : null,
                        e = {
                          from: "operator",
                          type: t,
                          origin: "local",
                          timestamp: new Date().getTime(),
                          content: n,
                          fingerprint: null !== e ? e : this.At(),
                          user: i,
                        };
                      this.parent.socket.emit("message:received:local", e),
                        this.Nt(e);
                    }),
                    (g.prototype.receive_message_mirror = function (
                      t,
                      n,
                      i,
                      s
                    ) {
                      (s = {
                        from: "operator",
                        type: t,
                        origin: n,
                        timestamp: new Date().getTime(),
                        content: i,
                        fingerprint: s,
                      }),
                        this.parent.socket.emit("message:received:mirror", s);
                    }),
                    (g.prototype.get_message_compose = function () {
                      this.parent.event.publish(
                        "message:compose:received",
                        this.Dt.remote
                      );
                    }),
                    (g.prototype.get_cached_messages = function () {
                      return this.Ot;
                    }),
                    (g.prototype.count_message_history = function () {
                      return this.Ot.length;
                    }),
                    (g.prototype.count_message_history_diff = function () {
                      return this.Mt.length;
                    }),
                    (g.prototype.get_message_history = function () {
                      for (var t = 0; t < this.Ot.length; t++) {
                        var n = this.Ot[t];
                        (n.origin = "history"),
                          (n.index = { current: t + 1, total: this.Ot.length }),
                          n.is_me
                            ? this.parent.event.publish(
                                "history:message:sent",
                                n
                              )
                            : this.parent.event.publish(
                                "history:message:received",
                                n
                              );
                      }
                      for (var i = 0; i < this.Mt.length; i++)
                        this.$t(this.Mt[i], "diff");
                      this.Mt = [];
                    }),
                    (g.prototype.is_sending_messages = function () {
                      return 0 < this.zt.length && !0;
                    }),
                    (g.prototype.mark_messages_as_read = function (t) {
                      var n = !(0 < arguments.length && void 0 !== t) || t;
                      !0 === this.Lt(void 0, void 0, n) && this.Pt();
                    }),
                    (g.prototype.set_messages_in_view = function (t) {
                      (this.Jt = t), this.mark_messages_as_read(!1);
                    }),
                    (g.prototype.get_unread_messages = function () {
                      (this.Ht = -1), this.Wt();
                    }),
                    (g.prototype.set_unread_messages_callback = function (t) {
                      this.Gt = t;
                    }),
                    (g.prototype.reset = function () {
                      this.Z();
                    }),
                    (g.prototype.Vt = function (t) {
                      this.Kt(t);
                    }),
                    (g.prototype.Xt = function (t) {
                      t && (this.Dt.remote = t);
                    }),
                    (g.prototype.Yt = function (t) {
                      if (t) {
                        this.Zt(t);
                        for (var n = 0; n < t.length; n++) this.Mt.push(t[n]);
                        this.Wt();
                      }
                    }),
                    (g.prototype.Kt = function (t) {
                      (t = t || []),
                        (this.Ot = t),
                        (this.Qt = []),
                        this.Zt(this.Ot);
                      for (var n = 0; n < this.Ot.length; n++) {
                        var i = this.Ot[n];
                        this.Qt.push(i.fingerprint),
                          t[n].is_me || i.read || this.tn.push(i.fingerprint);
                      }
                      this.Wt();
                    }),
                    (g.prototype.Z = function () {
                      (this.Ot = []),
                        (this.Qt = []),
                        (this.Mt = []),
                        (this.tn = []),
                        (this.zt = []),
                        (this.nn = []),
                        (this.Ut = null),
                        (this.Jt = !1),
                        (this.Gt = function () {}),
                        (this.Ht = -1),
                        (this.Tt = 0),
                        (this.Dt = {
                          local: { type: "stop" },
                          remote: { type: "stop" },
                        });
                    }),
                    (g.prototype.at = function () {
                      this.parent.socket.on(
                        "message:updated",
                        this.qt.Et(this)
                      ),
                        this.parent.socket.on("message:sent", this.in.Et(this)),
                        this.parent.socket.on(
                          "message:received",
                          this.sn.Et(this)
                        ),
                        this.parent.socket.on(
                          "message:received:local",
                          this.Nt.Et(this)
                        ),
                        this.parent.socket.on(
                          "message:compose:received",
                          this.en.Et(this)
                        ),
                        this.parent.socket.on(
                          "message:acknowledge:read:send",
                          this.cn.Et(this)
                        ),
                        this.parent.socket.on(
                          "message:acknowledge:read:received",
                          this.an.Et(this)
                        ),
                        this.parent.socket.on(
                          "message:acknowledge:pending",
                          this.rn.Et(this)
                        );
                    }),
                    (g.prototype.It = function (t) {
                      var n = null;
                      return (
                        null === t ||
                          ((t = t.match(this.hn)) && (n = (t[1] || "").trim())),
                        n
                      );
                    }),
                    (g.prototype.un = function (t) {
                      this.parent.socket.emit("message:acknowledge:pending", {
                        origin: "chat",
                        fingerprints: t,
                      }),
                        this.parent.socket.emit(
                          "message:acknowledge:delivered",
                          { origin: "chat", fingerprints: t }
                        );
                    }),
                    (g.prototype.ln = function (t) {
                      this.parent.socket.emit(
                        "message:acknowledge:read:received",
                        { origin: "chat", fingerprints: t }
                      );
                    }),
                    (g.prototype.dn = function (t, n) {
                      var i = !1;
                      !1 === n && ((this.tn = []), this.Wt());
                      for (var s = 0; s < this.Ot.length; s++) {
                        var e = this.Ot[s];
                        !0 === e.read ||
                          (0 !== t.length && -1 === t.indexOf(e.fingerprint)) ||
                          (n === (!0 === e.is_me) &&
                            ((i = e.read = !0), this.pn(e)));
                      }
                      return i;
                    }),
                    (g.prototype.Lt = function (t, n, i) {
                      var s = 0 < arguments.length && void 0 !== t ? t : [],
                        e = 1 < arguments.length && void 0 !== n && n,
                        c = e || !1;
                      return (
                        !1 === e &&
                          (!0 === (2 < arguments.length && void 0 !== i && i) ||
                            !0 === this.Jt) &&
                          0 < this.tn.length &&
                          (this.ln(this.tn), (c = !0)),
                        !0 === c && this.dn(s, e)
                      );
                    }),
                    (g.prototype.Pt = function (t, n) {
                      if (0 < this.nn.length) {
                        for (var i = [], s = 0; s < this.Ot.length; s++) {
                          var e = this.Ot[s];
                          -1 !== this.nn.indexOf(e.fingerprint) &&
                            (delete e.index, i.push(e));
                        }
                        (this.nn = []),
                          this.parent.Storage.update("message", i, t, n);
                      } else "function" == typeof t && t();
                    }),
                    (g.prototype.vn = function (t, n, i) {
                      null === this.yn(t.fingerprint)
                        ? (this.Qt.push(t.fingerprint),
                          this.Ot.push(t),
                          this.Lt(),
                          this.pn(t),
                          this.Pt(n, i))
                        : "function" == typeof n && n();
                    }),
                    (g.prototype.yn = function (t) {
                      return (
                        (0 <= (t = this.Qt.indexOf(t)) && this.Ot[t]) || null
                      );
                    }),
                    (g.prototype.pn = function (t) {
                      -1 === this.nn.indexOf(t.fingerprint) &&
                        this.nn.push(t.fingerprint);
                    }),
                    (g.prototype.Zt = function (t) {
                      t.sort(function (t, n) {
                        return t.timestamp < n.timestamp
                          ? -1
                          : t.timestamp > n.timestamp
                          ? 1
                          : 0;
                      });
                    }),
                    (g.prototype.At = function () {
                      var t =
                        "" +
                        new Date().getTime() +
                        Math.ceil(100 * Math.random());
                      return (
                        t.length < 15 &&
                          (t += new Array(15 - t.length + 1).join("0")),
                        parseInt(t, 10)
                      );
                    }),
                    (g.prototype.$t = function (t, n) {
                      t.is_me ? this.in(t, n) : this.sn(t, n);
                    }),
                    (g.prototype.Wt = function (t) {
                      var n = 0 < arguments.length && void 0 !== t ? t : [],
                        i = this.tn.length;
                      i !== this.Ht &&
                        ((this.Ht = i),
                        "function" == typeof this.Gt &&
                          this.Gt(i, this.tn, [].concat(this.Ot, n)));
                    }),
                    (g.prototype.qt = function (t, n) {
                      var i =
                          1 < arguments.length && void 0 !== n ? n : "network",
                        s = this.yn(t.fingerprint);
                      null !== s &&
                        ((s.content = t.content),
                        (s.edited = !0),
                        this.$t(s, "update"),
                        "local" !== i && (this.pn(s), this.Pt()));
                    }),
                    (g.prototype.in = function (t, n) {
                      var i = this,
                        s =
                          1 < arguments.length && void 0 !== n ? n : "network",
                        e = this.zt.indexOf(t.fingerprint);
                      -1 !== e && this.zt.splice(e, 1);
                      var c = t.origin;
                      (t.origin = s),
                        (t.index = { current: 1, total: 1 }),
                        this.vn(t, function () {
                          "chat" === c ||
                            ("network" !== s && "diff" !== s) ||
                            i.un([t.fingerprint]),
                            i.parent.event.publish("message:sent", t);
                        }),
                        1 === this.count_message_history() &&
                          this.parent.Session.mn();
                    }),
                    (g.prototype.sn = function (t, n, i) {
                      var s = this,
                        e =
                          1 < arguments.length && void 0 !== n ? n : "network",
                        c =
                          2 < arguments.length && void 0 !== i
                            ? i
                            : "message:received";
                      (t.origin = e),
                        (t.index = { current: 1, total: 1 }),
                        "update" !== e &&
                          (this.tn.push(t.fingerprint), this.Wt([t])),
                        this.vn(t, function () {
                          ("network" !== e && "diff" !== e) ||
                            s.un([t.fingerprint]),
                            s.parent.event.publish(c, t);
                        });
                    }),
                    (g.prototype.Nt = function (t) {
                      this.sn(t, "local", "message:received:local");
                    }),
                    (g.prototype.en = function (t) {
                      (this.Dt.remote = t),
                        this.parent.event.publish(
                          "message:compose:received",
                          t
                        );
                    }),
                    (g.prototype.cn = function (t) {
                      !0 === this.Lt(t.fingerprints, !0) && this.Pt(),
                        this.parent.event.publish(
                          "message:acknowledge:read:send",
                          t.fingerprints
                        );
                    }),
                    (g.prototype.an = function (t) {
                      for (var n = 0; n < t.fingerprints.length; n++) {
                        var i = this.tn.indexOf(t.fingerprints[n]);
                        -1 !== i && this.tn.splice(i, 1);
                      }
                      this.Wt();
                    }),
                    (g.prototype.rn = function (t) {
                      this.parent.event.publish(
                        "message:acknowledge:pending",
                        t.fingerprints
                      );
                    }),
                    g);
                  function g(t) {
                    (this.parent = t),
                      (this.Bt = 6e4),
                      (this.Rt = 6e3),
                      (this.hn = new RegExp(
                        [
                          "(^(?:\\S+(?:(?:\\s+|\\?|\\!|\\.|\\(|\\)|:|;)|(?:[\\u4e00-\\u9fff])|(?:[\\u0e00-\\u0e7f])))+).*$",
                        ].join(""),
                        "i"
                      )),
                      this.Z(),
                      this.at();
                  }
                  var v =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        };
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var w =
                    ((b.prototype.save = function () {
                      var t = { domain: this.gn(), expires: this.wn() },
                        n = this.bn();
                      (t.sameSite = n.policy),
                        !0 === n.secure && (t.secure = !0),
                        this.parent.cookie.set(this.kn(), this.St, t),
                        this.parent.token_id &&
                          this.parent.cookie.set(
                            this.kn(this.parent.token_id),
                            this.St,
                            t
                          ),
                        this.parent.event.publish("session:saved", this.St);
                    }),
                    (b.prototype.storage_session_retrieve = function (t) {
                      this.xn(t.state), this.parent.Message.Vt(t.message);
                    }),
                    (b.prototype.sync_session_diff = function (t) {
                      this.parent.Message.Xt(t.compose),
                        this.parent.Message.Yt(t.messages);
                    }),
                    (b.prototype.sync_user_data = function (t) {
                      for (var n = 0; n < this.Fn.length; n++) {
                        var i = this.Fn[n];
                        this.En[i] && this.En[i] !== t[i]
                          ? this["set_" + i](this.En[i], !0, this.Cn[i])
                          : (this.En[i] = t[i] || null);
                      }
                      this.jn(t.segments || [], this.En.segments),
                        this.qn(t.data || {}, this.En.data);
                    }),
                    (b.prototype.send_device = function () {
                      var t,
                        n,
                        i = document.location.href || "";
                      this.zn !== i &&
                        ((this.zn = i),
                        (t = new Date().getTime()) - (this.Sn || 0) >=
                          this.An &&
                          ((this.Sn = t),
                          (n = document.title).length > this.In &&
                            ((n = n.substring(0, this.In - this.Dn.length)),
                            (n += this.Dn)),
                          !0 === this.Tn.test(i) &&
                            (("?" !==
                              (t = (i = i.replace(this.Tn, "$1$3"))[
                                i.length - 1
                              ]) &&
                              "&" !== t) ||
                              (i = i.substr(0, i.length - 1))),
                          i.length > this.Bn && (i = i.split("?")[0] || ""),
                          (i = { page_url: i, page_title: n }),
                          (n = (document.referrer || "").split("?")[0] || "") &&
                            (i.page_referrer = n),
                          this.parent.socket.emit("session:device", i)));
                    }),
                    (b.prototype.send_event = function (t) {
                      for (
                        var n = 0 < arguments.length && void 0 !== t ? t : [],
                          i = { events: [] },
                          s = 0;
                        s < n.length;
                        s++
                      ) {
                        var e = n[s],
                          c = { text: e[0] };
                        null !== e[1] && (c.data = e[1]),
                          null !== e[2] && (c.color = e[2]),
                          i.events.push(c);
                      }
                      0 < i.events.length &&
                        this.parent.socket.emit("session:event", i);
                    }),
                    (b.prototype.get_request_initiate = function (t) {
                      Object.keys &&
                        0 === Object.keys(this.Un).length &&
                        0 < this.parent.Message.count_message_history_diff() &&
                        this.Rn({}),
                        "function" == typeof t && t();
                    }),
                    (b.prototype.get_state = function (t) {
                      this.handle_state(this.Un, t);
                    }),
                    (b.prototype.handle_state = function (t, n) {
                      (this.Un = t),
                        this.parent.event.publish("session:state", this.Un),
                        "function" == typeof n && n();
                    }),
                    (b.prototype.set_state = function (t, n) {
                      for (var i in t) this.Un[i] = t[i];
                      this.parent.Storage.update("state", t),
                        this.sync_state(t, n);
                    }),
                    (b.prototype.sync_state = function (t, n) {
                      this.parent.socket.emit("session:state", t),
                        "function" == typeof n && n();
                    }),
                    (b.prototype.create = function () {
                      var t = {
                        website_id: this.parent.website_id,
                        website_domain: this.parent.website_domain,
                        useragent: this.parent.device.useragent || "",
                        timezone: this.parent.device.timezone || 0,
                        capabilities: this.parent.device.capabilities || [],
                        locales: this.parent.device.locales || [],
                      };
                      this.parent.token_id &&
                        (t.token_id = this.parent.token_id),
                        this.parent.socket.emit("session:create", t);
                    }),
                    (b.prototype.get_email = function () {
                      return this.En.email;
                    }),
                    (b.prototype.set_email = function (t, n, i) {
                      var s,
                        e = 1 < arguments.length && void 0 !== n && n,
                        c = 2 < arguments.length && void 0 !== i ? i : null,
                        a = {};
                      null !== c &&
                        ("string" === (s = void 0 === c ? "undefined" : v(c))
                          ? (a.verify = c)
                          : "object" === s && (a = c)),
                        !0 === this.Nn("email", t, e, a) && this.mn();
                    }),
                    (b.prototype.get_phone = function () {
                      return this.En.phone;
                    }),
                    (b.prototype.set_phone = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n && n;
                      this.Nn("phone", t, i);
                    }),
                    (b.prototype.get_nickname = function () {
                      return this.En.nickname;
                    }),
                    (b.prototype.set_nickname = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n && n;
                      this.Nn("nickname", t, i);
                    }),
                    (b.prototype.get_avatar = function () {
                      return this.En.avatar;
                    }),
                    (b.prototype.set_avatar = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n && n;
                      this.Nn("avatar", t, i);
                    }),
                    (b.prototype.get_company = function () {
                      return this.En.company;
                    }),
                    (b.prototype.set_company = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n && n;
                      this.Nn("company", t, i);
                    }),
                    (b.prototype.get_data = function (t) {
                      var n = 0 < arguments.length && void 0 !== t ? t : null;
                      return null === n
                        ? this.En.data
                        : this.En.data[n] || null;
                    }),
                    (b.prototype.set_data = function (t) {
                      this.qn(this.En.data || {}, t);
                    }),
                    (b.prototype.set_segments = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n && n;
                      this.jn(this.En.segments || [], t, i);
                    }),
                    (b.prototype.mark_active = function () {
                      var t = new Date().getTime();
                      t - Math.min(this.On || t, this.Mn || t) >= this.$n &&
                        this.Ln(!0),
                        (this.On = t);
                    }),
                    (b.prototype.acquire_saved = function () {
                      var t = this.Pn(),
                        n = null,
                        i = (location.search || "").match(this.Jn),
                        s = (document.referrer || "").match(this.Hn);
                      return (
                        i && i[2] && i[2] !== t.current && (n = i[2] || null),
                        s &&
                          s[1] === this.parent.url_go &&
                          s[3] !== t.current &&
                          (n = s[3] || null),
                        (s = n || t.current),
                        (n = null),
                        t.previous &&
                          t.current !== t.previous &&
                          t.current === s &&
                          (n = t.previous),
                        { session_id: s, merge: n }
                      );
                    }),
                    (b.prototype.restore = function () {
                      var t = this.acquire_saved();
                      this.Wn(t.session_id, t.merge);
                    }),
                    (b.prototype.join = function (t) {
                      var n = 0 < arguments.length && void 0 !== t && t,
                        n = {
                          session_id: this.St,
                          expire: this.Gn,
                          storage: !0,
                          sync: n,
                          useragent: this.parent.device.useragent || "",
                          timezone: this.parent.device.timezone || 0,
                          capabilities: this.parent.device.capabilities || [],
                          locales: this.parent.device.locales || [],
                        };
                      null !== this.Vn && (n.merge = { session_id: this.Vn }),
                        this.parent.socket.emit("session:join", n);
                    }),
                    (b.prototype.reset = function (t, n) {
                      var i = null;
                      try {
                        for (var s in this.parent) {
                          var e = this.parent[s];
                          e !== this &&
                            e &&
                            "object" === (void 0 === e ? "undefined" : v(e)) &&
                            "function" == typeof e.reset &&
                            e.reset();
                        }
                        this.Kn();
                      } catch (t) {
                        i = t;
                      }
                      i
                        ? "function" == typeof n && n(i)
                        : "function" == typeof t && t();
                    }),
                    (b.prototype.mn = function () {
                      var t = this;
                      this.En.email &&
                        (this.Xn && this.parent.Schedule.clear_timeout(this.Xn),
                        (this.Xn = this.parent.Schedule.set_timeout(
                          function () {
                            (t.Xn = null), t.Ln(!0);
                          },
                          this.Yn
                        )));
                    }),
                    (b.prototype.Z = function () {
                      (this.St = null),
                        (this.Vn = null),
                        (this.Zn = !1),
                        (this.On = 0),
                        (this.Mn = new Date().getTime()),
                        (this.Qn = null),
                        (this.Xn = null),
                        (this.zn = null),
                        (this.Sn = null),
                        (this.En = {}),
                        (this.Cn = {}),
                        (this.Un = {});
                    }),
                    (b.prototype.at = function () {
                      var t = this;
                      this.parent.socket.on(
                        "session:created",
                        this.ti.Et(this)
                      ),
                        this.parent.socket.on(
                          "session:joined",
                          this.ni.Et(this)
                        ),
                        this.parent.socket.on(
                          "session:state",
                          this.ii.Et(this)
                        ),
                        this.parent.socket.on(
                          "session:error",
                          this.si.Et(this)
                        ),
                        this.parent.socket.on(
                          "session:request:initiate",
                          this.Rn.Et(this)
                        ),
                        this.parent.socket.on(
                          "session:request:purge",
                          this.ei.Et(this)
                        ),
                        this.parent.socket.on("connect", function () {
                          t.Zn ? t.join(!0) : t.restore();
                        });
                    }),
                    (b.prototype.ti = function (t) {
                      var n;
                      t.error
                        ? this.parent.event.publish("session:created", {
                            error: t.error,
                          })
                        : ((n = !!this.parent.token_id),
                          (this.St = t.session_id),
                          this.save(),
                          this.join(n),
                          this.parent.event.publish("session:created", {
                            session_id: this.St,
                          }));
                    }),
                    (b.prototype.ni = function (t) {
                      t.error
                        ? this.parent.event.publish("session:joined", {
                            error: t.error,
                          })
                        : (this.Zn || ((this.Zn = !0), this.send_device()),
                          this.parent.Website.set_users_available(
                            t.users_available
                          ),
                          this.storage_session_retrieve(t.storage || {}),
                          this.sync_session_diff(t.sync || {}),
                          this.sync_user_data(t),
                          this.parent.Browsing.restore_browsing_state(),
                          this.parent.event.publish("session:joined", t),
                          this.ci(t.last_active));
                    }),
                    (b.prototype.ii = function (t) {
                      this.handle_state(t);
                    }),
                    (b.prototype.si = function (t) {
                      "email:invalid_format" === t.type &&
                        (delete this.En.email, delete this.Cn.email),
                        this.parent.event.publish("session:error", t);
                    }),
                    (b.prototype.Rn = function (t) {
                      this.parent.event.publish("session:request:initiate", t);
                    }),
                    (b.prototype.ei = function (t) {
                      this.parent.event.publish("session:request:purge", t);
                    }),
                    (b.prototype.Kn = function () {
                      this.Z();
                      var t = { domain: this.gn() };
                      this.parent.cookie.expire(this.kn(), t),
                        this.parent.token_id &&
                          this.parent.cookie.expire(
                            this.kn(this.parent.token_id),
                            t
                          );
                    }),
                    (b.prototype.Pn = function () {
                      var t = { previous: null, current: null };
                      return (
                        this.parent.token_id
                          ? (this.parent.runtime_configuration &&
                              !0 ===
                                this.parent.runtime_configuration
                                  .session_merge &&
                              (t.previous =
                                this.parent.cookie.get(this.kn()) || null),
                            (t.current =
                              this.parent.cookie.get(
                                this.kn(this.parent.token_id)
                              ) || null))
                          : (t.current =
                              this.parent.cookie.get(this.kn()) || null),
                        t
                      );
                    }),
                    (b.prototype.Wn = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : null;
                      null !== i && (this.Vn = i),
                        t
                          ? ((this.St = t), this.save(), this.join(!0))
                          : this.create();
                    }),
                    (b.prototype.xn = function (t) {
                      this.Un = t || {};
                    }),
                    (b.prototype.ci = function (t) {
                      var n = 0 < arguments.length && void 0 !== t ? t : 0;
                      (this.On = n || new Date().getTime()), this.Ln();
                    }),
                    (b.prototype.Ln = function (t) {
                      var n = this,
                        i = 0 < arguments.length && void 0 !== t && t;
                      this.Qn && this.parent.Schedule.clear_timeout(this.Qn),
                        (this.Qn = this.parent.Schedule.set_timeout(
                          function () {
                            (n.Qn = null),
                              (n.Mn = new Date().getTime()),
                              n.parent.socket.emit("session:heartbeat", {
                                last_active: n.On || 0,
                                availability: {
                                  type: "online",
                                  time: { for: n.Gn },
                                },
                              }),
                              n.Ln();
                          },
                          !0 === i ? 0 : this.ai
                        ));
                    }),
                    (b.prototype.kn = function (t) {
                      var n = 0 < arguments.length && void 0 !== t ? t : null,
                        i = [this.parent.website_id];
                      return (
                        n && i.push(n), this.parent.Storage.bt("session", i)
                      );
                    }),
                    (b.prototype.wn = function () {
                      return "number" == typeof this.parent.cookie_expire &&
                        0 < this.parent.cookie_expire
                        ? this.parent.cookie_expire
                        : this.oi;
                    }),
                    (b.prototype.gn = function () {
                      return "string" == typeof this.parent.cookie_domain &&
                        this.parent.cookie_domain
                        ? this.parent.cookie_domain
                        : this.ri();
                    }),
                    (b.prototype.bn = function () {
                      return !0 ===
                        this.parent.runtime_configuration
                          .cross_origin_cookies &&
                        "https:" === document.location.protocol
                        ? { policy: "none", secure: !0 }
                        : { policy: "lax" };
                    }),
                    (b.prototype.ri = function () {
                      var t = document.domain,
                        n = t,
                        i = this.bn(),
                        s =
                          "samesite=" +
                          i.policy +
                          ";" +
                          (!0 === i.secure ? "secure;" : "");
                      try {
                        for (
                          var e = 0,
                            c = n.split("."),
                            a = this.parent.Storage.bt("domain-detect", [
                              "" + new Date().getTime(),
                            ]);
                          e < c.length - 1 &&
                          -1 === document.cookie.indexOf(a + "=" + a);

                        )
                          (n = c.slice(-1 - ++e).join(".")),
                            (document.cookie =
                              a + "=" + a + ";domain=" + n + ";" + s);
                        document.cookie =
                          a +
                          "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" +
                          n +
                          ";" +
                          s;
                      } catch (t) {
                      } finally {
                        return n || t;
                      }
                    }),
                    (b.prototype.Nn = function (t, n, i, s) {
                      var e = 3 < arguments.length && void 0 !== s ? s : {},
                        c = !1;
                      if (
                        (!0 === (2 < arguments.length && void 0 !== i && i)
                          ? (c = !0)
                          : n instanceof Object
                          ? !1 === this.hi(this.En[t], n) && (c = !0)
                          : this.En[t] !== n && (c = !0),
                        !0 !== c ||
                          ((this.En[t] = n), (this.Cn[t] = e), !0 !== this.Zn))
                      )
                        return !1;
                      var a,
                        o = {};
                      for (a in ((o[t] = n), e)) o[a] = e[a];
                      return this.parent.socket.emit("session:set_" + t, o), !0;
                    }),
                    (b.prototype.jn = function (t, n, i) {
                      for (
                        var s = 1 < arguments.length && void 0 !== n ? n : [],
                          e = 2 < arguments.length && void 0 !== i && i,
                          c = [],
                          a = 0;
                        a < s.length;
                        a++
                      ) {
                        var o = (s[a] || "").trim().toLowerCase();
                        o && -1 === t.indexOf(o) && c.push(o);
                      }
                      var r = void 0;
                      !0 === e
                        ? 0 < c.length || t.length !== s.length
                          ? ((r = [].concat(s)), (this.En.segments = r))
                          : (r = [])
                        : ((r = c), (this.En.segments = t.concat(r))),
                        0 < r.length &&
                          !0 === this.Zn &&
                          ((r = { segments: r }),
                          !0 === e && (r.overwrite = !0),
                          this.parent.socket.emit("session:set_segments", r));
                    }),
                    (b.prototype.qn = function (t, n) {
                      var i,
                        s,
                        e = 1 < arguments.length && void 0 !== n ? n : {},
                        c = !1,
                        a = {};
                      for (i in e) t[i] !== e[i] && ((c = !0), (a[i] = e[i]));
                      for (s in ((this.En.data = t), a)) this.En.data[s] = a[s];
                      !0 === c &&
                        !0 === this.Zn &&
                        this.parent.socket.emit("session:set_data", {
                          data: a,
                        });
                    }),
                    (b.prototype.hi = function (t, n) {
                      if (t instanceof Object && n instanceof Object) {
                        var i,
                          s,
                          e = {};
                        for (i in t) e[i] = !0;
                        for (s in n) e[s] = !0;
                        var c,
                          a = !0;
                        for (c in e)
                          if (!1 === this.hi(t[c], n[c])) {
                            a = !1;
                            break;
                          }
                        return a;
                      }
                      return t === n && !0;
                    }),
                    b);
                  function b(t) {
                    (this.parent = t),
                      (this.Hn = new RegExp(
                        "^(https?\\:\\/\\/[^/]+)\\/chat\\/resume\\/\\?target_url=(.+)&session_id=(.+)$"
                      )),
                      (this.Jn = /^\?.*(crisp_sid=([^&=]+)).*$/),
                      (this.Tn = /(\?.*)(crisp_sid=[^&=]+&?)(.*)$/),
                      (this.$n = 9e4),
                      (this.Yn = 5e3),
                      (this.An = 3e3),
                      (this.Bn = 240),
                      (this.In = 80),
                      (this.Dn = "..."),
                      (this.ai = 24e4),
                      (this.Gn = 3e5),
                      (this.oi = 15768e3),
                      (this.Fn = [
                        "email",
                        "phone",
                        "nickname",
                        "avatar",
                        "company",
                      ]),
                      this.parent.disable_autoload || (this.Z(), this.at());
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var k =
                    ((x.prototype.get_users_available = function () {
                      this.ui(!1);
                    }),
                    (x.prototype.set_users_available = function (t) {
                      this.li = t;
                    }),
                    (x.prototype.reset = function () {
                      this.Z();
                    }),
                    (x.prototype.Z = function () {
                      this.li = !1;
                    }),
                    (x.prototype.at = function () {
                      this.parent.socket.on(
                        "website:users:available",
                        this.fi.Et(this)
                      );
                    }),
                    (x.prototype.fi = function (t) {
                      "boolean" == typeof t &&
                        (this.set_users_available(t), this.ui(!0));
                    }),
                    (x.prototype.ui = function (t) {
                      var n = 0 < arguments.length && void 0 !== t && t;
                      this.parent.event.publish("website:users:available", {
                        available: this.li,
                        changed: n,
                      });
                    }),
                    x);
                  function x(t) {
                    (this.parent = t), this.Z(), this.at();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var F =
                    ((E.prototype.get_url_upload = function (t, n) {
                      (n = {
                        id: "" + new Date().getTime(),
                        from: "visitor",
                        file: { name: t, type: n },
                      }),
                        this.parent.socket.emit(
                          "bucket:url:upload:generate",
                          n
                        ),
                        this.parent.event.publish(
                          "bucket:url:upload:generate",
                          n
                        );
                    }),
                    (E.prototype.at = function () {
                      this.parent.socket.on(
                        "bucket:url:upload:generated",
                        this.di.Et(this)
                      );
                    }),
                    (E.prototype.di = function (t) {
                      this.parent.event.publish(
                        "bucket:url:upload:generated",
                        t
                      );
                    }),
                    E);
                  function E(t) {
                    (this.parent = t), this.at();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var C =
                    ((j.prototype.get_animation_list = function (t, n) {
                      var i = 0 < arguments.length && void 0 !== t ? t : null,
                        s = 1 < arguments.length && void 0 !== n ? n : 1,
                        s = {
                          id: new Date().getTime(),
                          from: "visitor",
                          list: { page: s },
                        };
                      i && (s.list.query = i),
                        this.parent.socket.emit("media:animation:list", s),
                        this.parent.event.publish("media:animation:list", s);
                    }),
                    (j.prototype.at = function () {
                      this.parent.socket.on(
                        "media:animation:listed",
                        this.pi.Et(this)
                      );
                    }),
                    (j.prototype.pi = function (t) {
                      this.parent.event.publish("media:animation:listed", t);
                    }),
                    j);
                  function j(t) {
                    (this.parent = t), this.at();
                  }
                  function q(t, n, i) {
                    return (
                      n in t
                        ? Object.defineProperty(t, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[n] = i),
                      t
                    );
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var z =
                    ((S.prototype.get_article_search = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : null;
                      return this.vi(
                        "search",
                        this.yi,
                        "query",
                        this.mi.Et(this),
                        t,
                        i
                      );
                    }),
                    (S.prototype.get_article_suggest = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : null;
                      return this.vi(
                        "suggest",
                        this._i,
                        "part",
                        this.gi.Et(this),
                        t,
                        i
                      );
                    }),
                    (S.prototype.report_article_search = function (t, n) {
                      var i = 1 < arguments.length && void 0 !== n ? n : "";
                      (i = (i || "").trim()) &&
                        ((i = { report: { locale: t, query: i } }),
                        this.parent.socket.emit("helpdesk:article:report", i),
                        this.parent.event.publish(
                          "helpdesk:article:report",
                          i
                        ));
                    }),
                    (S.prototype.reset = function () {
                      this.Z();
                    }),
                    (S.prototype.Z = function () {
                      (this.yi = {}), (this._i = {});
                    }),
                    (S.prototype.at = function () {
                      this.parent.socket.on(
                        "helpdesk:article:searched",
                        this.mi.Et(this)
                      ),
                        this.parent.socket.on(
                          "helpdesk:article:suggested",
                          this.gi.Et(this)
                        );
                    }),
                    (S.prototype.mi = function (t) {
                      return this.wi("search", this.yi, "query", t);
                    }),
                    (S.prototype.gi = function (t) {
                      return this.wi("suggest", this._i, "part", t);
                    }),
                    (S.prototype.vi = function (t, n, i, s, e, c) {
                      var a = 5 < arguments.length && void 0 !== c ? c : null,
                        o = (n[a || "default"] || {})[e],
                        r = "helpdesk:article:" + t,
                        h = q(
                          { id: new Date().getTime(), from: "visitor" },
                          t,
                          q({ locale: a }, i, e)
                        );
                      this.parent.event.publish(r, h),
                        o
                          ? this.parent.Schedule.set_timeout(function () {
                              s(
                                q(
                                  { id: h.id, results: o },
                                  t,
                                  q({ locale: a }, i, e)
                                )
                              );
                            }, this.bi)
                          : this.parent.socket.emit(r, h);
                    }),
                    (S.prototype.wi = function (t, n, i, s) {
                      var e;
                      s[t] &&
                        "string" == typeof s[t][i] &&
                        ((n[(e = s[t].locale || "default")] = n[e] || {}),
                        (n[e][s[t][i]] = s.results)),
                        this.parent.event.publish(
                          "helpdesk:article:" + t + "ed",
                          s
                        );
                    }),
                    S);
                  function S(t) {
                    (this.parent = t), (this.bi = 100), this.Z(), this.at();
                  }
                  var v =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        };
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var A = (function () {
                      function t(t) {
                        (this.parent = t),
                          (this.ki = 1e4),
                          (this.xi = 45e3),
                          (this.Fi = 45e3),
                          (this.Ei = 1e3),
                          (this.Ci = 1e3),
                          (this.ji = 500),
                          (this.qi = 1e3),
                          (this.zi = 2e4),
                          (this.Si = 50),
                          (this.Ai = 10),
                          (this.Ii = [
                            "browsing:action:start",
                            "browsing:action:stop",
                            "browsing:action:heartbeat",
                            "browsing:debug:start",
                            "browsing:debug:stop",
                            "browsing:debug:heartbeat",
                            "browsing:debug:execute",
                            "browsing:assist:start",
                            "browsing:assist:stop",
                            "browsing:assist:heartbeat",
                            "browsing:assist:mouse",
                            "browsing:assist:scroll",
                            "browsing:assist:click",
                          ]),
                          this.Z(),
                          this.at(),
                          this.Di(),
                          this.Ti(),
                          this.Bi(),
                          this.Ui(),
                          this.Ri(),
                          this.Ni();
                      }
                      return (
                        (t.prototype.init = function (t, n, i) {
                          var s = this;
                          this.parent.Stream.bind_to(
                            null,
                            this.Ii,
                            { session_id: this.parent.Session.St },
                            function () {
                              -1 ===
                                (s.parent.device.capabilities || []).indexOf(
                                  "browsing"
                                ) ||
                              (!0 !== s.parent.Config.X &&
                                "1" === (navigator || {}).doNotTrack)
                                ? (s.parent.stream.emit(
                                    "client:browsing:request:decline",
                                    {}
                                  ),
                                  s.Oi())
                                : ((s.Mi = t.deps.tree_mirror || null),
                                  (s.$i = !0) === t.resume
                                    ? (s.parent.stream.emit(
                                        "client:browsing:resume",
                                        { browsing_id: s.Li }
                                      ),
                                      s.Ln(!0),
                                      !0 === s.Pi && s.Ji(!0))
                                    : (s.Ln(!0),
                                      s.parent.stream.emit(
                                        "client:browsing:request:accept",
                                        { useragent: navigator.userAgent }
                                      ))),
                                "function" == typeof n && n();
                            },
                            function () {
                              "function" == typeof i && i();
                            }
                          );
                        }),
                        (t.prototype.restore_browsing_state = function () {
                          this.Li &&
                            (!1 === this.Hi()
                              ? this.Wi({ resume: !0 })
                              : this.Oi());
                        }),
                        (t.prototype.toggle_ignore_scroll_event = function (t) {
                          var n = 0 < arguments.length && void 0 !== t && t;
                          this.Gi = n;
                        }),
                        (t.prototype.reset = function () {
                          !0 === this.Pi && this.Oi(),
                            this.Z(),
                            this.Vi(),
                            this.Ki();
                        }),
                        (t.prototype.Z = function () {
                          if (
                            (this.parent.Schedule.clear_interval(this.Xi),
                            this.parent.Schedule.clear_interval(this.Yi),
                            this.parent.Schedule.clear_interval(this.Zi),
                            this.parent.Schedule.clear_interval(this.Qi),
                            "object" === v(this.ts))
                          )
                            for (var t in this.ts)
                              this.parent.Schedule.clear_timeout(this.ts[t]);
                          if ("object" === v(this.ss))
                            for (var n in this.ss)
                              this.parent.Schedule.clear_timeout(
                                this.ss[n].dead_timeout
                              );
                          (this.es || {}).defer_event &&
                            this.parent.Schedule.clear_timeout(
                              this.es.defer_event
                            ),
                            (this.$i = !1),
                            (this.Li = null),
                            (this.Pi = !1),
                            (this.Mn = null),
                            (this.Xi = null),
                            (this.Yi = null),
                            (this.Zi = null),
                            (this.Qi = null),
                            (this.Gi = !1),
                            (this.cs = null),
                            (this.Mi = null),
                            (this.as = null),
                            (this.ts = {}),
                            (this.os = []),
                            (this.ss = {
                              debug: {
                                ongoing: !1,
                                last_heartbeat: null,
                                dead_timeout: null,
                                limits: { window_last: null, window_count: 0 },
                              },
                              assist: {
                                ongoing: !1,
                                last_heartbeat: null,
                                dead_timeout: null,
                              },
                            }),
                            (this.rs = { x: 0, y: 0, last_x: 0, last_y: 0 }),
                            (this.hs = { x: 0, y: 0, last_x: 0, last_y: 0 }),
                            (this.es = {
                              last_call: new Date().getTime(),
                              defer_event: null,
                            });
                        }),
                        (t.prototype.kn = function () {
                          return this.parent.Storage.bt("browsing", [
                            this.parent.website_id,
                          ]);
                        }),
                        (t.prototype.at = function () {
                          this.parent.socket.on(
                            "browsing:request:initiate",
                            this.Wi.Et(this)
                          ),
                            this.parent.stream.on(
                              "client:browsing:request:initiated",
                              this.us.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:action:start",
                              this.ls.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:action:stop",
                              this.ds.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:action:heartbeat",
                              this.ps.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:debug:start",
                              this.vs.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:debug:stop",
                              this.ys.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:debug:heartbeat",
                              this._s.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:debug:execute",
                              this.gs.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:start",
                              this.bs.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:stop",
                              this.ks.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:heartbeat",
                              this.xs.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:mouse",
                              this.Fs.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:scroll",
                              this.Es.Et(this)
                            ),
                            this.parent.stream.on(
                              "client:browsing:assist:click",
                              this.Cs.Et(this)
                            );
                        }),
                        (t.prototype.Ti = function () {
                          "object" === v(window.console)
                            ? (this.js = {
                                log: window.console.log,
                                debug: window.console.debug,
                                info: window.console.info,
                                warn: window.console.warn,
                                error: window.console.error,
                              })
                            : (this.js = {});
                        }),
                        (t.prototype.Di = function () {
                          var t;
                          "object" !== v(window.sessionStorage) ||
                            ((t = window.sessionStorage.getItem(this.kn())) &&
                              ((t = JSON.parse(t)),
                              (this.Li = t.browsing_id || null),
                              (this.Pi = t.is_playing || !1),
                              (this.Mn = t.last_heartbeat || null)));
                        }),
                        (t.prototype.qs = function () {
                          var t,
                            s = this,
                            e = this;
                          for (t in this.js)
                            (function (n) {
                              var i = s.js[n];
                              window.console[n] === i &&
                                (window.console[n] = function () {
                                  var t = Array.prototype.slice.call(arguments);
                                  e.zs.Et(e)(n, t), i.apply(this, t);
                                });
                            })(t);
                        }),
                        (t.prototype.Ki = function () {
                          for (var t in this.js) {
                            var n = this.js[t];
                            window.console[t] !== n && (window.console[t] = n);
                          }
                        }),
                        (t.prototype.zs = function (t, n) {
                          var i;
                          !0 === this.ss.debug.ongoing &&
                            ((i = new Date().getTime()),
                            (null === this.ss.debug.limits.window_last ||
                              i - this.ss.debug.limits.window_last >=
                                this.zi) &&
                              ((this.ss.debug.limits.window_last = i),
                              (this.ss.debug.limits.window_count = 0)),
                            ++this.ss.debug.limits.window_count <= this.Si &&
                              this.Ss(t, n));
                        }),
                        (t.prototype.Wi = function (t) {
                          (!0 === this.$i && !0 !== t.resume) ||
                            (!0 !== t.resume && this.Oi(),
                            this.parent.event.publish(
                              "browsing:request:initiate",
                              t || {}
                            ));
                        }),
                        (t.prototype.us = function (t) {
                          !0 === this.$i &&
                            ((this.Li = t.browsing_id),
                            (this.Mn = new Date().getTime()),
                            this.As());
                        }),
                        (t.prototype.ls = function () {
                          !0 === this.$i && this.Li && this.Ji();
                        }),
                        (t.prototype.ds = function () {
                          !0 === this.$i && this.Li && this.Oi();
                        }),
                        (t.prototype.ps = function () {
                          !0 === this.$i &&
                            this.Li &&
                            ((this.Mn = new Date().getTime()), this.As());
                        }),
                        (t.prototype.vs = function () {
                          !0 === this.$i &&
                            this.Li &&
                            (this.qs(), this.Is("debug"));
                        }),
                        (t.prototype.ys = function () {
                          !0 === this.$i &&
                            this.Li &&
                            (this.Ki(), this.Ds("debug"));
                        }),
                        (t.prototype._s = function () {
                          !0 === this.$i && this.Li && this.Ts("debug");
                        }),
                        (t.prototype.gs = function t(n) {
                          if (
                            !0 === this.$i &&
                            this.Li &&
                            !0 === this.ss.debug.ongoing &&
                            n.execute
                          )
                            try {
                              var i = eval(n.execute);
                              this.Bs(n.execute, i);
                            } catch (t) {
                              var s;
                              t &&
                                ((s = t.name + ": " + t.message),
                                this.Bs(n.execute, null, "error"),
                                this.Ss("error", [s]));
                            }
                        }),
                        (t.prototype.bs = function () {
                          !0 === this.$i &&
                            this.Li &&
                            !0 === this.Is("assist") &&
                            this.parent.event.publish(
                              "browsing:assist:started",
                              {}
                            );
                        }),
                        (t.prototype.ks = function () {
                          !0 === this.$i &&
                            this.Li &&
                            !0 === this.Ds("assist") &&
                            this.parent.event.publish(
                              "browsing:assist:stopped",
                              {}
                            );
                        }),
                        (t.prototype.xs = function () {
                          !0 === this.$i && this.Li && this.Ts("assist");
                        }),
                        (t.prototype.Fs = function (t) {
                          !0 === this.$i &&
                            this.Li &&
                            !0 === this.ss.assist.ongoing &&
                            this.parent.event.publish(
                              "browsing:assist:mouse",
                              t
                            );
                        }),
                        (t.prototype.Es = function (t) {
                          !0 === this.$i &&
                            this.Li &&
                            !0 === this.ss.assist.ongoing &&
                            this.parent.event.publish(
                              "browsing:assist:scroll",
                              t
                            );
                        }),
                        (t.prototype.Cs = function (t) {
                          !0 === this.$i &&
                            this.Li &&
                            !0 === this.ss.assist.ongoing &&
                            this.parent.event.publish(
                              "browsing:assist:click",
                              t
                            );
                        }),
                        (t.prototype.As = function () {
                          "object" === v(window.sessionStorage) &&
                            JSON &&
                            "function" == typeof JSON.stringify &&
                            window.sessionStorage.setItem(
                              this.kn(),
                              JSON.stringify({
                                browsing_id: this.Li,
                                is_playing: this.Pi,
                                last_heartbeat: this.Mn,
                              })
                            );
                        }),
                        (t.prototype.Vi = function () {
                          "object" === v(window.sessionStorage) &&
                            "object" === v(window.sessionStorage) &&
                            window.sessionStorage.removeItem(this.kn());
                        }),
                        (t.prototype.Ji = function (t) {
                          var n = 0 < arguments.length && void 0 !== t && t;
                          (this.Pi = !0),
                            (this.Mn = new Date().getTime()),
                            this.As(),
                            this.Us(),
                            this.Rs(!0),
                            this.Ns(!0),
                            this.Os(!0),
                            !0 !== n &&
                              this.parent.stream.emit(
                                "client:browsing:action:started",
                                {}
                              );
                        }),
                        (t.prototype.Oi = function () {
                          var t = this.Pi;
                          this.as && this.as.disconnect(),
                            this.Z(),
                            this.As(),
                            !0 === t &&
                              this.parent.stream.emit(
                                "client:browsing:action:stopped",
                                {}
                              ),
                            this.parent.Stream.unbind_from();
                        }),
                        (t.prototype.Us = function () {
                          var e = this;
                          if ((this.Ms(), this.$s(), this.Ls(), this.as))
                            return this.Ps(this.cs);
                          this.as = new this.Mi(document, {
                            initialize: function (t, n) {
                              (e.cs = { f: "initialize", args: [t, n] }),
                                e.Ps(e.cs);
                            },
                            applyChanged: function (t, n, i, s) {
                              e.os.push({
                                f: "applyChanged",
                                args: [t, n, i, s],
                              });
                            },
                          });
                        }),
                        (t.prototype.Ps = function (t) {
                          t.f &&
                            t.args &&
                            "function" == typeof JSON.stringify &&
                            this.parent.stream.emit(
                              "client:browsing:stream:mirror",
                              { f: t.f, args: JSON.stringify(t.args) }
                            );
                        }),
                        (t.prototype.$s = function () {
                          this.parent.stream.emit(
                            "client:browsing:stream:tab",
                            {
                              title: document.title,
                              url: document.location.href,
                              width:
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth,
                              height:
                                window.innerHeight ||
                                document.documentElement.clientHeight ||
                                document.body.clientHeight,
                            }
                          );
                        }),
                        (t.prototype.Ms = function () {
                          this.parent.stream.emit(
                            "client:browsing:stream:mouse",
                            { x: this.rs.x, y: this.rs.y }
                          );
                        }),
                        (t.prototype.Ls = function () {
                          this.parent.stream.emit(
                            "client:browsing:stream:scroll",
                            { x: this.hs.x, y: this.hs.y }
                          );
                        }),
                        (t.prototype.Js = function () {
                          this.parent.stream.emit(
                            "client:browsing:stream:click",
                            {}
                          );
                        }),
                        (t.prototype.Bs = function (t, n, i) {
                          var s =
                              1 < arguments.length && void 0 !== n ? n : void 0,
                            e = 2 < arguments.length && void 0 !== i ? i : null;
                          !0 === this.ss.debug.ongoing &&
                            ("error" !==
                              (e = {
                                execute: t,
                                type:
                                  null !== e
                                    ? e
                                    : void 0 === s
                                    ? "undefined"
                                    : v(s),
                              }).type &&
                              "undefined" !== e.type &&
                              (e.value = this.Hs(s)),
                            this.parent.stream.emit(
                              "client:browsing:debug:executed",
                              e
                            ));
                        }),
                        (t.prototype.Ss = function (t, n) {
                          var i = 1 < arguments.length && void 0 !== n ? n : [];
                          if (!0 === this.ss.debug.ongoing && 0 < i.length) {
                            for (
                              var s = { message: "", traceback: "" }, e = 0;
                              e < i.length;
                              e++
                            ) {
                              var c = "message";
                              "object" === v(i[e]) &&
                                0 < e &&
                                (c = "traceback"),
                                s[c] &&
                                  (s[c] += "traceback" === c ? "\n" : " "),
                                (s[c] += this.Hs(i[e], !0));
                            }
                            var a = { level: t, message: s.message };
                            s.traceback && (a.traceback = s.traceback),
                              this.parent.stream.emit(
                                "client:browsing:debug:stream",
                                a
                              );
                          }
                        }),
                        (t.prototype.Is = function (t) {
                          var n = !0 !== this.ss[t].ongoing && !0;
                          return (
                            (this.ss[t].ongoing = !0),
                            this.Ts(t),
                            this.parent.stream.emit(
                              "client:browsing:" + t + ":started",
                              {}
                            ),
                            n
                          );
                        }),
                        (t.prototype.Ds = function (t) {
                          return (
                            !0 === this.ss[t].ongoing &&
                            (this.Ts(t, !1),
                            (this.ss[t].ongoing = !1),
                            this.parent.stream.emit(
                              "client:browsing:" + t + ":stopped",
                              {}
                            ),
                            !0)
                          );
                        }),
                        (t.prototype.Ts = function (t, n) {
                          var i = this,
                            s = !(1 < arguments.length && void 0 !== n) || n;
                          !0 === this.ss[t].ongoing &&
                            (null !== this.ss[t].dead_timeout &&
                              (this.parent.Schedule.clear_timeout(
                                this.ss[t].dead_timeout
                              ),
                              (this.ss[t].dead_timeout = null)),
                            !0 === s
                              ? ((this.ss[
                                  t
                                ].last_heartbeat = new Date().getTime()),
                                (this.ss[
                                  t
                                ].dead_timeout = this.parent.Schedule.set_timeout(
                                  function () {
                                    i.Ds(t);
                                  },
                                  this.Fi
                                )))
                              : (this.ss[t].last_heartbeat = null));
                        }),
                        (t.prototype.Bi = function () {
                          var n = this;
                          this.parent.Listener.add_event(
                            "browsing",
                            "document",
                            "mousemove",
                            function (t) {
                              (n.rs.last_x = t.pageX), (n.rs.last_y = t.pageY);
                            }
                          );
                        }),
                        (t.prototype.Ui = function () {
                          var i = this;
                          this.parent.Listener.add_event(
                            "browsing",
                            "window",
                            "resize",
                            function () {
                              null !== i.es.defer_event &&
                                i.parent.Schedule.clear_timeout(
                                  i.es.defer_event
                                ),
                                (i.es.defer_event = i.parent.Schedule.set_timeout(
                                  function () {
                                    i.es.defer_event = null;
                                    var t = i.es.last_call,
                                      n = new Date().getTime();
                                    (i.es.last_call = n),
                                      t &&
                                        n > t + i.Ci &&
                                        !0 === i.Pi &&
                                        i.$s();
                                  },
                                  i.Ei
                                ));
                            }
                          );
                        }),
                        (t.prototype.Ri = function (t) {
                          var n = this;
                          this.parent.Listener.add_event(
                            "browsing",
                            "window",
                            "scroll",
                            function () {
                              var t;
                              !0 !== n.Gi &&
                                ((t = document.documentElement),
                                (n.hs.last_x =
                                  (window.pageXOffset || t.scrollLeft) -
                                  (t.clientLeft || 0)),
                                (n.hs.last_y =
                                  (window.pageYOffset || t.scrollTop) -
                                  (t.clientTop || 0)));
                            }
                          );
                        }),
                        (t.prototype.Ni = function () {
                          var n = this;
                          this.parent.Listener.add_event(
                            "browsing",
                            "window",
                            "click",
                            function (t) {
                              !0 !== n.Pi ||
                                t.Ws ||
                                n.Gs("click", function () {
                                  n.Js(), n.Ms();
                                });
                            }
                          );
                        }),
                        (t.prototype.Hi = function () {
                          return (
                            null === this.Mn ||
                            (null !== this.Mn &&
                              new Date().getTime() - this.Mn >= this.xi)
                          );
                        }),
                        (t.prototype.Ln = function (t) {
                          var n = this,
                            i = !(0 < arguments.length && void 0 !== t) || t;
                          null !== this.Xi &&
                            this.parent.Schedule.clear_interval(this.Xi),
                            !0 === i &&
                              (this.Xi = this.parent.Schedule.set_interval(
                                function () {
                                  n.parent.stream.emit(
                                    "client:browsing:heartbeat",
                                    {}
                                  ),
                                    !0 === n.Hi() && n.Oi();
                                },
                                this.ki
                              ));
                        }),
                        (t.prototype.Rs = function (t) {
                          var n = this,
                            i = !(0 < arguments.length && void 0 !== t) || t;
                          null !== this.Zi &&
                            (this.parent.Schedule.clear_interval(this.Zi),
                            (this.Zi = null)),
                            !0 === i &&
                              (this.Zi = this.parent.Schedule.set_interval(
                                function () {
                                  (n.rs.last_x === n.rs.x &&
                                    n.rs.last_y === n.rs.y) ||
                                    !0 !== n.Pi ||
                                    ((n.rs.x = n.rs.last_x),
                                    (n.rs.y = n.rs.last_y),
                                    n.Ms());
                                },
                                this.Ci
                              ));
                        }),
                        (t.prototype.Ns = function (t) {
                          var n = this,
                            i = !(0 < arguments.length && void 0 !== t) || t;
                          null !== this.Qi &&
                            (this.parent.Schedule.clear_interval(this.Qi),
                            (this.Qi = null)),
                            !0 === i &&
                              (this.Qi = this.parent.Schedule.set_interval(
                                function () {
                                  (n.hs.last_x === n.hs.x &&
                                    n.hs.last_y === n.hs.y) ||
                                    !0 !== n.Pi ||
                                    ((n.hs.x = n.hs.last_x),
                                    (n.hs.y = n.hs.last_y),
                                    n.Ms(),
                                    n.Ls());
                                },
                                this.Ci
                              ));
                        }),
                        (t.prototype.Os = function (t) {
                          var n = this,
                            i = !(0 < arguments.length && void 0 !== t) || t;
                          null !== this.Yi &&
                            this.parent.Schedule.clear_interval(this.Yi),
                            !0 === i &&
                              (this.Yi = this.parent.Schedule.set_interval(
                                function () {
                                  for (
                                    var t = 0;
                                    t < n.os.length && !(t >= n.Ai);
                                    t++
                                  )
                                    n.Ps(n.os[t]);
                                  n.os.splice(n.Ai, 1);
                                },
                                this.qi
                              ));
                        }),
                        (t.prototype.Hs = function (t, n) {
                          return !0 ===
                            (1 < arguments.length && void 0 !== n && n) &&
                            "string" == typeof t
                            ? t
                            : "function" == typeof JSON.stringify
                            ? JSON.stringify(t)
                            : "" + t;
                        }),
                        (t.prototype.Gs = function (t, n) {
                          var i = this;
                          void 0 === this.ts[t] &&
                            (this.ts[t] = this.parent.Schedule.set_timeout(
                              function () {
                                delete i.ts[t], n();
                              },
                              this.ji
                            ));
                        }),
                        t
                      );
                    })(),
                    v =
                      "function" == typeof Symbol &&
                      "symbol" == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t;
                          }
                        : function (t) {
                            return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                          };
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var I =
                    ((D.prototype.init = function (t, n, i) {
                      var s = this;
                      this.parent.Stream.bind_to(
                        null,
                        this.Ii,
                        { session_id: this.parent.Session.St },
                        function () {
                          (s.Vs = t.mode || null),
                            (s.Ks = t.ice || []),
                            !0 === t.has_support
                              ? (s.parent.stream.emit(
                                  "client:call:request:initiated",
                                  { call_id: t.call_id }
                                ),
                                s.Ln(!0))
                              : s.parent.stream.emit(
                                  "client:call:request:decline",
                                  {}
                                ),
                            "function" == typeof n && n();
                        },
                        function () {
                          "function" == typeof i && i();
                        }
                      );
                    }),
                    (D.prototype.accept = function () {
                      !0 === this.$i &&
                        ((this.Xs = !0),
                        this.parent.stream.emit(
                          "client:call:request:accept",
                          {}
                        ));
                    }),
                    (D.prototype.decline = function () {
                      !0 === this.$i &&
                        (this.parent.stream.emit(
                          "client:call:request:decline",
                          {}
                        ),
                        this.Oi());
                    }),
                    (D.prototype.stop = function () {
                      !0 === this.$i &&
                        (this.parent.stream.emit(
                          "client:call:action:stopped",
                          {}
                        ),
                        this.Oi());
                    }),
                    (D.prototype.toggle_audio = function () {
                      return this.Ys("audio", "getAudioTracks");
                    }),
                    (D.prototype.toggle_video = function () {
                      return this.Ys("video", "getVideoTracks");
                    }),
                    (D.prototype.toggle_screensharing = function () {
                      return (
                        !0 === this.$i &&
                          null !== this.Zs.local &&
                          (!1 === this.Qs ? this.te() : this.ne()),
                        this.Qs
                      );
                    }),
                    (D.prototype.is_ongoing = function () {
                      return !0 === this.$i && null !== this.ie && !0;
                    }),
                    (D.prototype.has_support_screensharing = function () {
                      return !(
                        !navigator.mediaDevices ||
                        "function" !=
                          typeof navigator.mediaDevices.getDisplayMedia
                      );
                    }),
                    (D.prototype.get_stream = function (t) {
                      return this.Zs[t] || null;
                    }),
                    (D.prototype.reset = function () {
                      !0 === this.$i && this.Oi(), this.Z();
                    }),
                    (D.prototype.Z = function () {
                      (this.$i = !1),
                        (this.Qs = !1),
                        (this.Xs = !1),
                        (this.Li = null),
                        (this.ie = null),
                        (this.Xi = null),
                        (this.se = null),
                        (this.Vs = null),
                        (this.Ks = []),
                        (this.Zs = { local: null, remote: null }),
                        (this.ee = { video: null });
                    }),
                    (D.prototype.at = function () {
                      this.parent.socket.on(
                        "call:request:initiate",
                        this.Wi.Et(this)
                      ),
                        this.parent.stream.on(
                          "client:call:request:accepted",
                          this.ce.Et(this)
                        ),
                        this.parent.stream.on(
                          "client:call:request:declined",
                          this.ae.Et(this)
                        ),
                        this.parent.stream.on(
                          "client:call:action:stopped",
                          this.oe.Et(this)
                        ),
                        this.parent.stream.on(
                          "client:call:signaling:sdp",
                          this.re.Et(this)
                        ),
                        this.parent.stream.on(
                          "client:call:signaling:candidate",
                          this.he.Et(this)
                        );
                    }),
                    (D.prototype.Wi = function (t) {
                      !0 !== this.$i &&
                        ((t.has_support =
                          -1 !==
                          (this.parent.device.capabilities || []).indexOf(
                            "call"
                          )),
                        (this.$i = !0),
                        this.parent.event.publish("call:request:initiate", t));
                    }),
                    (D.prototype.ce = function () {
                      !0 === this.$i && !0 !== this.Xs && this.Oi();
                    }),
                    (D.prototype.ae = function () {
                      !0 === this.$i && this.Oi();
                    }),
                    (D.prototype.oe = function () {
                      !0 === this.$i && this.Oi();
                    }),
                    (D.prototype.re = function (t) {
                      var n = this;
                      !0 === this.$i &&
                        (this.ue(),
                        "operator" === t.from &&
                          this.ie
                            .setRemoteDescription(
                              new RTCSessionDescription(t.sdp)
                            )
                            .then(function () {
                              return (
                                n.parent.event.publish(
                                  "call:peer:remote:success",
                                  {}
                                ),
                                null === n.Zs.local
                                  ? n.le()
                                  : "offer" === t.sdp.type
                                  ? n.fe("answer")
                                  : Promise.resolve()
                              );
                            })
                            .catch(function () {
                              n.parent.event.publish(
                                "call:peer:remote:error",
                                {}
                              );
                            }));
                    }),
                    (D.prototype.he = function (t) {
                      !0 === this.$i &&
                        (this.ue(),
                        "operator" === t.from &&
                          "object" === v(t.candidate) &&
                          null !== t.candidate &&
                          this.ie
                            .addIceCandidate(
                              new RTCIceCandidate({
                                sdpMLineIndex: t.candidate.sdpMLineIndex,
                                candidate: t.candidate.candidate,
                              })
                            )
                            .catch(function () {}));
                    }),
                    (D.prototype.ue = function () {
                      var i = this;
                      null === this.ie &&
                        ((this.ie = new RTCPeerConnection({
                          iceServers: this.Ks,
                        })),
                        (this.ie.onicecandidate = function (t) {
                          t &&
                            t.candidate &&
                            i.parent.stream.emit(
                              "client:call:signaling:candidate",
                              { from: "user", candidate: t.candidate }
                            );
                        }),
                        (this.ie.ontrack = function (t) {
                          (t = t.streams[0]),
                            (i.Zs.remote = t),
                            i.parent.event.publish(
                              "call:media:remote:success",
                              {}
                            ),
                            (t.onremovetrack = function () {
                              i.parent.event.publish(
                                "call:media:remote:success",
                                {}
                              );
                            });
                        }),
                        (this.ie.oniceconnectionstatechange = function (t) {
                          var n = i.ie;
                          (null !== n &&
                            "failed" !== n.iceConnectionState &&
                            "closed" !== n.iceConnectionState) ||
                            i.de(),
                            null !== n &&
                              "disconnected" === n.iceConnectionState &&
                              (i.se = i.parent.Schedule.set_timeout(
                                function () {
                                  ((i.se = null) !== i.ie &&
                                    "connected" === n.iceConnectionState) ||
                                    i.de();
                                },
                                i.pe
                              ));
                        }),
                        (this.ie.onnegotiationneeded = function () {
                          i.fe("offer");
                        }),
                        (this.ie.onclose = function () {
                          i.de();
                        }));
                    }),
                    (D.prototype.le = function () {
                      function n() {
                        i.parent.event.publish("call:peer:local:error", {});
                      }
                      var i = this;
                      this.ve(function (t) {
                        navigator.mediaDevices
                          .getUserMedia({
                            audio: !0,
                            video: "video" === i.Vs && !0 === t.video,
                          })
                          .then(function (t) {
                            return (
                              (i.Zs.local = t),
                              i.parent.event.publish(
                                "call:media:local:success",
                                {}
                              ),
                              i.ye(t)
                            );
                          })
                          .catch(n);
                      }, n);
                    }),
                    (D.prototype.ye = function (t) {
                      for (var n = t.getTracks(), i = 0; i < n.length; i++)
                        this.ie.addTrack(n[i], t);
                      this.fe("answer");
                    }),
                    (D.prototype.ve = function (i, s) {
                      var e = { audio: !1, video: !1 };
                      navigator.mediaDevices &&
                      navigator.mediaDevices.enumerateDevices
                        ? navigator.mediaDevices
                            .enumerateDevices()
                            .then(function (t) {
                              for (var n = 0; n < t.length; n++)
                                switch (t[n].kind) {
                                  case "audioinput":
                                    e.audio = !0;
                                    break;
                                  case "videoinput":
                                    e.video = !0;
                                }
                              !0 !== e.audio ? s() : i(e);
                            })
                            .catch(s)
                        : i(e);
                    }),
                    (D.prototype.fe = function (t) {
                      var n = this,
                        i = 0 < arguments.length && void 0 !== t ? t : "offer",
                        s = void 0;
                      return Promise.resolve()
                        .then(function () {
                          var t = {
                            OfferToReceiveAudio: !0,
                            OfferToReceiveVideo: !0,
                          };
                          return "answer" === i
                            ? n.ie.createAnswer(t)
                            : n.ie.createOffer(t);
                        })
                        .then(function (t) {
                          return (s = t), n.ie.setLocalDescription(s);
                        })
                        .then(function () {
                          return (
                            n.parent.stream.emit("client:call:signaling:sdp", {
                              from: "user",
                              sdp: s,
                            }),
                            n.parent.event.publish(
                              "call:peer:local:success",
                              {}
                            ),
                            Promise.resolve()
                          );
                        })
                        .catch(function () {
                          return (
                            n.parent.event.publish("call:peer:local:error", {}),
                            Promise.resolve()
                          );
                        });
                    }),
                    (D.prototype.Oi = function () {
                      this.de();
                    }),
                    (D.prototype.de = function () {
                      if (null !== this.ie) {
                        for (
                          var t = this.ie.getSenders(), n = 0;
                          n < t.length;
                          n++
                        )
                          null !== t[n].track && t[n].track.stop();
                        null !== this.ee.video && this.ee.video.stop(),
                          this.ie.close(),
                          (this.ie = null);
                      }
                      null !== this.se &&
                        (this.parent.Schedule.clear_timeout(this.se),
                        (this.se = null)),
                        this.parent.Stream.unbind_from(),
                        (this.$i = !1),
                        (this.Qs = !1),
                        (this.Xs = !1),
                        (this.Vs = null),
                        (this.Ks = []),
                        (this.Zs.local = null),
                        (this.Zs.remote = null),
                        (this.ee.video = null),
                        this.Ln(!1),
                        this.parent.event.publish("call:action:stopped", {});
                    }),
                    (D.prototype.Ys = function (t, n) {
                      var i = !1;
                      if (!0 === this.$i && null !== this.Zs.local) {
                        for (
                          var s = !1, e = this.Zs.local[n](), c = 0;
                          c < e.length;
                          c++
                        )
                          (s = !0), (i = !e[c].enabled), (e[c].enabled = i);
                        !0 === s &&
                          ((n = !0 === i ? "started" : "ended"),
                          this.parent.event.publish("call:track:local:" + n, {
                            media: t,
                          }));
                      }
                      return i;
                    }),
                    (D.prototype.te = function () {
                      var e = this;
                      !0 === this.has_support_screensharing() &&
                        ((this.Qs = !0),
                        navigator.mediaDevices
                          .getDisplayMedia({ video: !0 })
                          .then(function (t) {
                            for (
                              var t = t.getTracks()[0],
                                n = e.ie.getSenders(),
                                i = null,
                                s = 0;
                              s < n.length;
                              s++
                            )
                              if (n[s].track && "video" === n[s].track.kind) {
                                i = n[s];
                                break;
                              }
                            null !== i
                              ? ((e.ee.video = i.track), i.replaceTrack(t))
                              : (i = e.ie.addTrack(t, e.Zs.local)),
                              (t.onended = function () {
                                null !== e.ie &&
                                  (e.me(i),
                                  e.parent.event.publish(
                                    "call:track:local:ended",
                                    { media: "screensharing" }
                                  ));
                              }),
                              e.parent.event.publish(
                                "call:track:local:started",
                                { media: "screensharing" }
                              );
                          })
                          .catch(function (t) {
                            e.Qs = !1;
                          }));
                    }),
                    (D.prototype.ne = function () {
                      for (
                        var t = this.ie.getSenders(), n = null, i = 0;
                        i < t.length;
                        i++
                      )
                        if (t[i].track && "video" === t[i].track.kind) {
                          n = t[i];
                          break;
                        }
                      null !== n &&
                        (n.track.stop(),
                        n.track.dispatchEvent(new Event("ended")));
                    }),
                    (D.prototype.me = function (t) {
                      null !== this.ee.video
                        ? (t.replaceTrack(this.ee.video),
                          (this.ee.video = null))
                        : this.ie.removeTrack(t),
                        (this.Qs = !1);
                    }),
                    (D.prototype.Ln = function (t) {
                      var n = this,
                        i = !(0 < arguments.length && void 0 !== t) || t;
                      null !== this.Xi &&
                        this.parent.Schedule.clear_interval(this.Xi),
                        !0 === i &&
                          (this.Xi = this.parent.Schedule.set_interval(
                            function () {
                              n.parent.stream.emit("client:call:heartbeat", {});
                            },
                            this.ki
                          ));
                    }),
                    D);
                  function D(t) {
                    (this.parent = t),
                      (this.ki = 1e4),
                      (this.pe = 5e3),
                      (this.Ii = [
                        "call:request:initiate",
                        "call:request:accepted",
                        "call:request:declined",
                        "call:action:stopped",
                        "call:signaling:sdp",
                        "call:signaling:candidate",
                      ]),
                      this.Z(),
                      this.at();
                  }
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var T =
                    ((B.prototype.fired = function (t, n) {
                      (n = { identifier: t, name: n }),
                        this.parent.socket.emit("trigger:fired", n),
                        this.parent.event.publish("trigger:fired", n);
                    }),
                    B);
                  function B(t) {
                    this.parent = t;
                  }
                  var v =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        };
                  function s(t, n) {
                    if (!(t instanceof n))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var U =
                      ((O.prototype.configure = function (t) {
                        (this.ge = t.project),
                          (this.we = t.revision),
                          (this.be = t.environment),
                          (this.ke = t.useragent),
                          (this.xe = t.page);
                      }),
                      (O.prototype.report = function (t, n, i) {
                        if (
                          !(this.ge && this.we && this.be && this.ke && this.xe)
                        )
                          throw new Error(
                            "Missing a configuration parameter. Did you call configure() before?"
                          );
                        "object" === (void 0 === i ? "undefined" : v(i)) &&
                          i instanceof Error &&
                          (i = {
                            fileName: i.fileName,
                            lineNumber: i.lineNumber,
                            columnNumber: i.columnNumber,
                            message: i.message,
                            stack: i.stack,
                          }),
                          (i = {
                            project: this.ge,
                            revision: this.we,
                            environment: this.be,
                            useragent: this.ke,
                            page: this.xe,
                            level: t,
                            namespace: n,
                            traceback: i,
                          }),
                          this.parent.socket.emit("issue:report", i),
                          this.parent.event.publish("issue:report", i);
                      }),
                      (O.prototype.Z = function () {
                        (this.ge = null),
                          (this.we = null),
                          (this.be = null),
                          (this.ke = null),
                          (this.xe = null);
                      }),
                      O),
                    R,
                    N;
                  function O(t) {
                    (this.parent = t), this.Z();
                  }
                  (R = o),
                    (N = function () {
                      return (
                        (e = {}),
                        (i.m = s = [
                          function (t, n, i) {
                            function s(t, n) {
                              "object" ===
                                (void 0 === t ? "undefined" : c(t)) &&
                                ((n = t), (t = void 0)),
                                (n = n || {});
                              var i = a(t),
                                s = i.source,
                                e = i.id,
                                t = i.path,
                                t = r[e] && t in r[e].nsps,
                                e =
                                  n.forceNew ||
                                  n["force new connection"] ||
                                  !1 === n.multiplex ||
                                  t
                                    ? o(s, n)
                                    : (r[e] || (r[e] = o(s, n)), r[e]);
                              return (
                                i.query && !n.query && (n.query = i.query),
                                e.socket(i.path, n)
                              );
                            }
                            var c =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                  ? function (t) {
                                      return typeof t;
                                    }
                                  : function (t) {
                                      return t &&
                                        "function" == typeof Symbol &&
                                        t.constructor === Symbol &&
                                        t !== Symbol.prototype
                                        ? "symbol"
                                        : typeof t;
                                    },
                              a = i(1),
                              e = i(4),
                              o = i(9);
                            i(3)("socket.io-client"), (t.exports = n = s);
                            var r = (n.managers = {});
                            (n.protocol = e.protocol),
                              (n.connect = s),
                              (n.Manager = i(9)),
                              (n.Socket = i(28));
                          },
                          function (t, n, i) {
                            var s = i(2);
                            i(3)("socket.io-client:url"),
                              (t.exports = function (t, n) {
                                var i = t;
                                return (
                                  (n =
                                    n ||
                                    ("undefined" != typeof location &&
                                      location)),
                                  null == t && (t = n.protocol + "//" + n.host),
                                  "string" == typeof t &&
                                    ("/" === t.charAt(0) &&
                                      (t =
                                        "/" === t.charAt(1)
                                          ? n.protocol + t
                                          : n.host + t),
                                    /^(https?|wss?):\/\//.test(t) ||
                                      (t =
                                        void 0 !== n
                                          ? n.protocol + "//" + t
                                          : "https://" + t),
                                    (i = s(t))),
                                  i.port ||
                                    (/^(http|ws)$/.test(i.protocol)
                                      ? (i.port = "80")
                                      : /^(http|ws)s$/.test(i.protocol) &&
                                        (i.port = "443")),
                                  (i.path = i.path || "/"),
                                  (t =
                                    -1 !== i.host.indexOf(":")
                                      ? "[" + i.host + "]"
                                      : i.host),
                                  (i.id =
                                    i.protocol + "://" + t + ":" + i.port),
                                  (i.href =
                                    i.protocol +
                                    "://" +
                                    t +
                                    (n && n.port === i.port
                                      ? ""
                                      : ":" + i.port)),
                                  i
                                );
                              });
                          },
                          function (t, n) {
                            var o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                              r = [
                                "source",
                                "protocol",
                                "authority",
                                "userInfo",
                                "user",
                                "password",
                                "host",
                                "port",
                                "relative",
                                "path",
                                "directory",
                                "file",
                                "query",
                                "anchor",
                              ];
                            t.exports = function (t) {
                              var n = t,
                                i = t.indexOf("["),
                                s = t.indexOf("]");
                              -1 != i &&
                                -1 != s &&
                                (t =
                                  t.substring(0, i) +
                                  t.substring(i, s).replace(/:/g, ";") +
                                  t.substring(s, t.length));
                              for (
                                var e = o.exec(t || ""), c = {}, a = 14;
                                a--;

                              )
                                c[r[a]] = e[a] || "";
                              return (
                                -1 != i &&
                                  -1 != s &&
                                  ((c.source = n),
                                  (c.host = c.host
                                    .substring(1, c.host.length - 1)
                                    .replace(/;/g, ":")),
                                  (c.authority = c.authority
                                    .replace("[", "")
                                    .replace("]", "")
                                    .replace(/;/g, ":")),
                                  (c.ipv6uri = !0)),
                                c
                              );
                            };
                          },
                          function (t, n) {
                            t.exports = function () {
                              return function () {};
                            };
                          },
                          function (t, a, n) {
                            function i() {}
                            function s(t) {
                              var n = "" + t.type;
                              if (
                                ((a.BINARY_EVENT !== t.type &&
                                  a.BINARY_ACK !== t.type) ||
                                  (n += t.attachments + "-"),
                                t.nsp && "/" !== t.nsp && (n += t.nsp + ","),
                                null != t.id && (n += t.id),
                                null != t.data)
                              ) {
                                if (
                                  !1 ===
                                  (t = (function (t) {
                                    try {
                                      return JSON.stringify(t);
                                    } catch (t) {
                                      return !1;
                                    }
                                  })(t.data))
                                )
                                  return f;
                                n += t;
                              }
                              return n;
                            }
                            function e() {
                              this.reconstructor = null;
                            }
                            function c(t) {
                              (this.reconPack = t), (this.buffers = []);
                            }
                            function o(t) {
                              return {
                                type: a.ERROR,
                                data: "parser error: " + t,
                              };
                            }
                            var r = (n(3)("socket.io-parser"), n(5)),
                              h = n(6),
                              u = n(7),
                              l = n(8);
                            (a.protocol = 4),
                              (a.types = [
                                "CONNECT",
                                "DISCONNECT",
                                "EVENT",
                                "ACK",
                                "ERROR",
                                "BINARY_EVENT",
                                "BINARY_ACK",
                              ]),
                              (a.CONNECT = 0),
                              (a.DISCONNECT = 1),
                              (a.EVENT = 2),
                              (a.ACK = 3),
                              (a.ERROR = 4),
                              (a.BINARY_EVENT = 5),
                              (a.BINARY_ACK = 6),
                              (a.Encoder = i),
                              (a.Decoder = e);
                            var f = a.ERROR + '"encode error"';
                            (i.prototype.encode = function (t, n) {
                              var i;
                              a.BINARY_EVENT === t.type ||
                              a.BINARY_ACK === t.type
                                ? ((i = n),
                                  h.removeBlobs(t, function (t) {
                                    var n = h.deconstructPacket(t),
                                      t = s(n.packet);
                                    (n = n.buffers).unshift(t), i(n);
                                  }))
                                : n([s(t)]);
                            }),
                              r(e.prototype),
                              (e.prototype.add = function (t) {
                                var n;
                                if ("string" == typeof t)
                                  (n = (function (t) {
                                    var n = 0,
                                      i = { type: Number(t.charAt(0)) };
                                    if (null == a.types[i.type])
                                      return o("unknown packet type " + i.type);
                                    if (
                                      a.BINARY_EVENT === i.type ||
                                      a.BINARY_ACK === i.type
                                    ) {
                                      for (
                                        var s = "";
                                        "-" !== t.charAt(++n) &&
                                        ((s += t.charAt(n)), n != t.length);

                                      );
                                      if (s != Number(s) || "-" !== t.charAt(n))
                                        throw new Error("Illegal attachments");
                                      i.attachments = Number(s);
                                    }
                                    if ("/" === t.charAt(n + 1))
                                      for (
                                        i.nsp = "";
                                        ++n &&
                                        "," !== (e = t.charAt(n)) &&
                                        ((i.nsp += e), n !== t.length);

                                      );
                                    else i.nsp = "/";
                                    var e,
                                      c = t.charAt(n + 1);
                                    if ("" !== c && Number(c) == c) {
                                      for (i.id = ""; ++n; ) {
                                        if (
                                          null == (e = t.charAt(n)) ||
                                          Number(e) != e
                                        ) {
                                          --n;
                                          break;
                                        }
                                        if (
                                          ((i.id += t.charAt(n)),
                                          n === t.length)
                                        )
                                          break;
                                      }
                                      i.id = Number(i.id);
                                    }
                                    if (t.charAt(++n)) {
                                      if (
                                        !1 ===
                                          (c = (function (t) {
                                            try {
                                              return JSON.parse(t);
                                            } catch (t) {
                                              return !1;
                                            }
                                          })(t.substr(n))) ||
                                        (i.type !== a.ERROR && !u(c))
                                      )
                                        return o("invalid payload");
                                      i.data = c;
                                    }
                                    return i;
                                  })(t)),
                                    a.BINARY_EVENT === n.type ||
                                    a.BINARY_ACK === n.type
                                      ? ((this.reconstructor = new c(n)),
                                        0 ===
                                          this.reconstructor.reconPack
                                            .attachments &&
                                          this.emit("decoded", n))
                                      : this.emit("decoded", n);
                                else {
                                  if (!l(t) && !t.base64)
                                    throw new Error("Unknown type: " + t);
                                  if (!this.reconstructor)
                                    throw new Error(
                                      "got binary data when not reconstructing a packet"
                                    );
                                  (n = this.reconstructor.takeBinaryData(t)) &&
                                    ((this.reconstructor = null),
                                    this.emit("decoded", n));
                                }
                              }),
                              (e.prototype.destroy = function () {
                                this.reconstructor &&
                                  this.reconstructor.finishedReconstruction();
                              }),
                              (c.prototype.takeBinaryData = function (t) {
                                return (
                                  this.buffers.push(t),
                                  this.buffers.length !==
                                  this.reconPack.attachments
                                    ? null
                                    : ((t = h.reconstructPacket(
                                        this.reconPack,
                                        this.buffers
                                      )),
                                      this.finishedReconstruction(),
                                      t)
                                );
                              }),
                              (c.prototype.finishedReconstruction = function () {
                                (this.reconPack = null), (this.buffers = []);
                              });
                          },
                          function (t, n, i) {
                            function s(t) {
                              if (t)
                                return (function (t) {
                                  for (var n in s.prototype)
                                    t[n] = s.prototype[n];
                                  return t;
                                })(t);
                            }
                            ((t.exports = s).prototype.on = s.prototype.addEventListener = function (
                              t,
                              n
                            ) {
                              return (
                                (this.Fe = this.Fe || {}),
                                (this.Fe["$" + t] =
                                  this.Fe["$" + t] || []).push(n),
                                this
                              );
                            }),
                              (s.prototype.once = function (t, n) {
                                function i() {
                                  this.off(t, i), n.apply(this, arguments);
                                }
                                return (i.fn = n), this.on(t, i), this;
                              }),
                              (s.prototype.off = s.prototype.removeListener = s.prototype.removeAllListeners = s.prototype.removeEventListener = function (
                                t,
                                n
                              ) {
                                if (
                                  ((this.Fe = this.Fe || {}),
                                  0 == arguments.length)
                                )
                                  return (this.Fe = {}), this;
                                var i = this.Fe["$" + t];
                                if (!i) return this;
                                if (1 == arguments.length)
                                  return delete this.Fe["$" + t], this;
                                for (var s, e = 0; e < i.length; e++)
                                  if ((s = i[e]) === n || s.fn === n) {
                                    i.splice(e, 1);
                                    break;
                                  }
                                return this;
                              }),
                              (s.prototype.emit = function (t) {
                                this.Fe = this.Fe || {};
                                var n = [].slice.call(arguments, 1),
                                  i = this.Fe["$" + t];
                                if (i)
                                  for (
                                    var s = 0, e = (i = i.slice(0)).length;
                                    s < e;
                                    ++s
                                  )
                                    i[s].apply(this, n);
                                return this;
                              }),
                              (s.prototype.listeners = function (t) {
                                return (
                                  (this.Fe = this.Fe || {}),
                                  this.Fe["$" + t] || []
                                );
                              }),
                              (s.prototype.hasListeners = function (t) {
                                return !!this.listeners(t).length;
                              });
                          },
                          function (t, n, i) {
                            var u = i(7),
                              l = i(8),
                              i = Object.prototype.toString,
                              f =
                                "function" == typeof Blob ||
                                ("undefined" != typeof Blob &&
                                  "[object BlobConstructor]" === i.call(Blob)),
                              d =
                                "function" == typeof File ||
                                ("undefined" != typeof File &&
                                  "[object FileConstructor]" === i.call(File));
                            (n.deconstructPacket = function (t) {
                              var n = [],
                                i = t.data;
                              return (
                                (t.data = (function t(n, i) {
                                  if (!n) return n;
                                  if (l(n)) {
                                    var s = { Ee: !0, num: i.length };
                                    return i.push(n), s;
                                  }
                                  if (u(n)) {
                                    for (
                                      var e = new Array(n.length), c = 0;
                                      c < n.length;
                                      c++
                                    )
                                      e[c] = t(n[c], i);
                                    return e;
                                  }
                                  if ("object" != typeof n || n instanceof Date)
                                    return n;
                                  var a,
                                    e = {};
                                  for (a in n) e[a] = t(n[a], i);
                                  return e;
                                })(i, n)),
                                (t.attachments = n.length),
                                { packet: t, buffers: n }
                              );
                            }),
                              (n.reconstructPacket = function (t, n) {
                                return (
                                  (t.data = (function t(n, i) {
                                    if (!n) return n;
                                    if (n && n.Ee) return i[n.num];
                                    if (u(n))
                                      for (var s = 0; s < n.length; s++)
                                        n[s] = t(n[s], i);
                                    else if ("object" == typeof n)
                                      for (var e in n) n[e] = t(n[e], i);
                                    return n;
                                  })(t.data, n)),
                                  (t.attachments = void 0),
                                  t
                                );
                              }),
                              (n.removeBlobs = function (t, o) {
                                var r = 0,
                                  h = t;
                                (function t(n, i, s) {
                                  if (!n) return n;
                                  if (
                                    (f && n instanceof Blob) ||
                                    (d && n instanceof File)
                                  ) {
                                    r++;
                                    var e = new FileReader();
                                    (e.onload = function () {
                                      s
                                        ? (s[i] = this.result)
                                        : (h = this.result),
                                        --r || o(h);
                                    }),
                                      e.readAsArrayBuffer(n);
                                  } else if (u(n))
                                    for (var c = 0; c < n.length; c++)
                                      t(n[c], c, n);
                                  else if ("object" == typeof n && !l(n))
                                    for (var a in n) t(n[a], a, n);
                                })(h),
                                  r || o(h);
                              });
                          },
                          function (t, n) {
                            var i = {}.toString;
                            t.exports =
                              Array.isArray ||
                              function (t) {
                                return "[object Array]" == i.call(t);
                              };
                          },
                          function (t, n) {
                            t.exports = function (t) {
                              return (
                                (i && Buffer.isBuffer(t)) ||
                                (s && (t instanceof ArrayBuffer || e(t)))
                              );
                            };
                            var i =
                                "function" == typeof Buffer &&
                                "function" == typeof Buffer.isBuffer,
                              s = "function" == typeof ArrayBuffer,
                              e = function (t) {
                                return "function" == typeof ArrayBuffer.isView
                                  ? ArrayBuffer.isView(t)
                                  : t.buffer instanceof ArrayBuffer;
                              };
                          },
                          function (t, n, i) {
                            function s(t, n) {
                              if (!(this instanceof s)) return new s(t, n);
                              t &&
                                "object" ===
                                  (void 0 === t ? "undefined" : e(t)) &&
                                ((n = t), (t = void 0)),
                                ((n = n || {}).path = n.path || "/socket.io"),
                                (this.nsps = {}),
                                (this.subs = []),
                                (this.opts = n),
                                this.reconnection(!1 !== n.reconnection),
                                this.reconnectionAttempts(
                                  n.reconnectionAttempts || 1 / 0
                                ),
                                this.reconnectionDelay(
                                  n.reconnectionDelay || 1e3
                                ),
                                this.reconnectionDelayMax(
                                  n.reconnectionDelayMax || 5e3
                                ),
                                this.randomizationFactor(
                                  n.randomizationFactor || 0.5
                                ),
                                (this.backoff = new f({
                                  min: this.reconnectionDelay(),
                                  max: this.reconnectionDelayMax(),
                                  jitter: this.randomizationFactor(),
                                })),
                                this.timeout(
                                  null == n.timeout ? 2e4 : n.timeout
                                ),
                                (this.readyState = "closed"),
                                (this.uri = t),
                                (this.connecting = []),
                                (this.lastPing = null),
                                (this.encoding = !1),
                                (this.packetBuffer = []),
                                (t = n.parser || o),
                                (this.encoder = new t.Encoder()),
                                (this.decoder = new t.Decoder()),
                                (this.autoConnect = !1 !== n.autoConnect),
                                this.autoConnect && this.open();
                            }
                            var e =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                  ? function (t) {
                                      return typeof t;
                                    }
                                  : function (t) {
                                      return t &&
                                        "function" == typeof Symbol &&
                                        t.constructor === Symbol &&
                                        t !== Symbol.prototype
                                        ? "symbol"
                                        : typeof t;
                                    },
                              r = i(10),
                              c = i(28),
                              a = i(5),
                              o = i(4),
                              h = i(30),
                              u = i(31),
                              l = (i(3)("socket.io-client:manager"), i(27)),
                              f = i(32),
                              d = Object.prototype.hasOwnProperty;
                            ((t.exports = s).prototype.emitAll = function () {
                              for (var t in (this.emit.apply(this, arguments),
                              this.nsps))
                                d.call(this.nsps, t) &&
                                  this.nsps[t].emit.apply(
                                    this.nsps[t],
                                    arguments
                                  );
                            }),
                              (s.prototype.updateSocketIds = function () {
                                for (var t in this.nsps)
                                  d.call(this.nsps, t) &&
                                    (this.nsps[t].id = this.generateId(t));
                              }),
                              (s.prototype.generateId = function (t) {
                                return (
                                  ("/" === t ? "" : t + "#") + this.engine.id
                                );
                              }),
                              a(s.prototype),
                              (s.prototype.reconnection = function (t) {
                                return arguments.length
                                  ? ((this.Ce = !!t), this)
                                  : this.Ce;
                              }),
                              (s.prototype.reconnectionAttempts = function (t) {
                                return arguments.length
                                  ? ((this._reconnectionAttempts = t), this)
                                  : this._reconnectionAttempts;
                              }),
                              (s.prototype.reconnectionDelay = function (t) {
                                return arguments.length
                                  ? ((this._reconnectionDelay = t),
                                    this.backoff && this.backoff.setMin(t),
                                    this)
                                  : this._reconnectionDelay;
                              }),
                              (s.prototype.randomizationFactor = function (t) {
                                return arguments.length
                                  ? ((this._randomizationFactor = t),
                                    this.backoff && this.backoff.setJitter(t),
                                    this)
                                  : this._randomizationFactor;
                              }),
                              (s.prototype.reconnectionDelayMax = function (t) {
                                return arguments.length
                                  ? ((this._reconnectionDelayMax = t),
                                    this.backoff && this.backoff.setMax(t),
                                    this)
                                  : this._reconnectionDelayMax;
                              }),
                              (s.prototype.timeout = function (t) {
                                return arguments.length
                                  ? ((this.je = t), this)
                                  : this.je;
                              }),
                              (s.prototype.maybeReconnectOnOpen = function () {
                                !this.reconnecting &&
                                  this.Ce &&
                                  0 === this.backoff.attempts &&
                                  this.reconnect();
                              }),
                              (s.prototype.open = s.prototype.connect = function (
                                i,
                                t
                              ) {
                                if (~this.readyState.indexOf("open"))
                                  return this;
                                this.engine = r(this.uri, this.opts);
                                var n = this.engine,
                                  s = this;
                                (this.readyState = "opening"),
                                  (this.skipReconnect = !1);
                                var e,
                                  c,
                                  a = h(n, "open", function () {
                                    s.onopen(), i && i();
                                  }),
                                  o = h(n, "error", function (t) {
                                    var n;
                                    s.cleanup(),
                                      (s.readyState = "closed"),
                                      s.emitAll("connect_error", t),
                                      i
                                        ? (((n = new Error(
                                            "Connection error"
                                          )).data = t),
                                          i(n))
                                        : s.maybeReconnectOnOpen();
                                  });
                                return (
                                  !1 !== this.je &&
                                    ((e = this.je),
                                    (c = setTimeout(function () {
                                      a.destroy(),
                                        n.close(),
                                        n.emit("error", "timeout"),
                                        s.emitAll("connect_timeout", e);
                                    }, e)),
                                    this.subs.push({
                                      destroy: function () {
                                        clearTimeout(c);
                                      },
                                    })),
                                  this.subs.push(a),
                                  this.subs.push(o),
                                  this
                                );
                              }),
                              (s.prototype.onopen = function () {
                                this.cleanup(),
                                  (this.readyState = "open"),
                                  this.emit("open");
                                var t = this.engine;
                                this.subs.push(h(t, "data", u(this, "ondata"))),
                                  this.subs.push(
                                    h(t, "ping", u(this, "onping"))
                                  ),
                                  this.subs.push(
                                    h(t, "pong", u(this, "onpong"))
                                  ),
                                  this.subs.push(
                                    h(t, "error", u(this, "onerror"))
                                  ),
                                  this.subs.push(
                                    h(t, "close", u(this, "onclose"))
                                  ),
                                  this.subs.push(
                                    h(
                                      this.decoder,
                                      "decoded",
                                      u(this, "ondecoded")
                                    )
                                  );
                              }),
                              (s.prototype.onping = function () {
                                (this.lastPing = new Date()),
                                  this.emitAll("ping");
                              }),
                              (s.prototype.onpong = function () {
                                this.emitAll(
                                  "pong",
                                  new Date() - this.lastPing
                                );
                              }),
                              (s.prototype.ondata = function (t) {
                                this.decoder.add(t);
                              }),
                              (s.prototype.ondecoded = function (t) {
                                this.emit("packet", t);
                              }),
                              (s.prototype.onerror = function (t) {
                                this.emitAll("error", t);
                              }),
                              (s.prototype.socket = function (t, n) {
                                function i() {
                                  ~l(s.connecting, e) || s.connecting.push(e);
                                }
                                var s,
                                  e = this.nsps[t];
                                return (
                                  e ||
                                    ((e = new c(this, t, n)),
                                    (this.nsps[t] = e),
                                    (s = this),
                                    e.on("connecting", i),
                                    e.on("connect", function () {
                                      e.id = s.generateId(t);
                                    }),
                                    this.autoConnect && i()),
                                  e
                                );
                              }),
                              (s.prototype.destroy = function (t) {
                                ~(t = l(this.connecting, t)) &&
                                  this.connecting.splice(t, 1),
                                  this.connecting.length || this.close();
                              }),
                              (s.prototype.packet = function (i) {
                                var s = this;
                                i.query &&
                                  0 === i.type &&
                                  (i.nsp += "?" + i.query),
                                  s.encoding
                                    ? s.packetBuffer.push(i)
                                    : ((s.encoding = !0),
                                      this.encoder.encode(i, function (t) {
                                        for (var n = 0; n < t.length; n++)
                                          s.engine.write(t[n], i.options);
                                        (s.encoding = !1),
                                          s.processPacketQueue();
                                      }));
                              }),
                              (s.prototype.processPacketQueue = function () {
                                var t;
                                0 < this.packetBuffer.length &&
                                  !this.encoding &&
                                  ((t = this.packetBuffer.shift()),
                                  this.packet(t));
                              }),
                              (s.prototype.cleanup = function () {
                                for (
                                  var t = this.subs.length, n = 0;
                                  n < t;
                                  n++
                                )
                                  this.subs.shift().destroy();
                                (this.packetBuffer = []),
                                  (this.encoding = !1),
                                  (this.lastPing = null),
                                  this.decoder.destroy();
                              }),
                              (s.prototype.close = s.prototype.disconnect = function () {
                                (this.skipReconnect = !0),
                                  (this.reconnecting = !1),
                                  "opening" === this.readyState &&
                                    this.cleanup(),
                                  this.backoff.reset(),
                                  (this.readyState = "closed"),
                                  this.engine && this.engine.close();
                              }),
                              (s.prototype.onclose = function (t) {
                                this.cleanup(),
                                  this.backoff.reset(),
                                  (this.readyState = "closed"),
                                  this.emit("close", t),
                                  this.Ce &&
                                    !this.skipReconnect &&
                                    this.reconnect();
                              }),
                              (s.prototype.reconnect = function () {
                                if (this.reconnecting || this.skipReconnect)
                                  return this;
                                var t,
                                  n,
                                  i = this;
                                this.backoff.attempts >=
                                this._reconnectionAttempts
                                  ? (this.backoff.reset(),
                                    this.emitAll("reconnect_failed"),
                                    (this.reconnecting = !1))
                                  : ((t = this.backoff.duration()),
                                    (this.reconnecting = !0),
                                    (n = setTimeout(function () {
                                      i.skipReconnect ||
                                        (i.emitAll(
                                          "reconnect_attempt",
                                          i.backoff.attempts
                                        ),
                                        i.emitAll(
                                          "reconnecting",
                                          i.backoff.attempts
                                        ),
                                        i.skipReconnect ||
                                          i.open(function (t) {
                                            t
                                              ? ((i.reconnecting = !1),
                                                i.reconnect(),
                                                i.emitAll(
                                                  "reconnect_error",
                                                  t.data
                                                ))
                                              : i.onreconnect();
                                          }));
                                    }, t)),
                                    this.subs.push({
                                      destroy: function () {
                                        clearTimeout(n);
                                      },
                                    }));
                              }),
                              (s.prototype.onreconnect = function () {
                                var t = this.backoff.attempts;
                                (this.reconnecting = !1),
                                  this.backoff.reset(),
                                  this.updateSocketIds(),
                                  this.emitAll("reconnect", t);
                              });
                          },
                          function (t, n, i) {
                            (t.exports = i(11)), (t.exports.parser = i(15));
                          },
                          function (t, n, i) {
                            function l(t, n) {
                              return this instanceof l
                                ? ((n = n || {}),
                                  t &&
                                    "object" == typeof t &&
                                    ((n = t), (t = null)),
                                  t
                                    ? ((t = o(t)),
                                      (n.hostname = t.host),
                                      (n.secure =
                                        "https" === t.protocol ||
                                        "wss" === t.protocol),
                                      (n.port = t.port),
                                      t.query && (n.query = t.query))
                                    : n.host && (n.hostname = o(n.host).host),
                                  (this.secure =
                                    null != n.secure
                                      ? n.secure
                                      : "undefined" != typeof location &&
                                        "https:" === location.protocol),
                                  n.hostname &&
                                    !n.port &&
                                    (n.port = this.secure ? "443" : "80"),
                                  (this.agent = n.agent || !1),
                                  (this.hostname =
                                    n.hostname ||
                                    ("undefined" != typeof location
                                      ? location.hostname
                                      : "localhost")),
                                  (this.port =
                                    n.port ||
                                    ("undefined" != typeof location &&
                                    location.port
                                      ? location.port
                                      : this.secure
                                      ? 443
                                      : 80)),
                                  (this.query = n.query || {}),
                                  "string" == typeof this.query &&
                                    (this.query = r.decode(this.query)),
                                  (this.upgrade = !1 !== n.upgrade),
                                  (this.path =
                                    (n.path || "/engine.io").replace(
                                      /\/$/,
                                      ""
                                    ) + "/"),
                                  (this.forceJSONP = !!n.forceJSONP),
                                  (this.jsonp = !1 !== n.jsonp),
                                  (this.forceBase64 = !!n.forceBase64),
                                  (this.enablesXDR = !!n.enablesXDR),
                                  (this.withCredentials =
                                    !1 !== n.withCredentials),
                                  (this.timestampParam =
                                    n.timestampParam || "t"),
                                  (this.timestampRequests =
                                    n.timestampRequests),
                                  (this.transports = n.transports || [
                                    "websocket",
                                  ]),
                                  (this.transportOptions =
                                    n.transportOptions || {}),
                                  (this.readyState = ""),
                                  (this.writeBuffer = []),
                                  (this.prevBufferLen = 0),
                                  (this.policyPort = n.policyPort || 843),
                                  (this.rememberUpgrade =
                                    n.rememberUpgrade || !1),
                                  (this.binaryType = null),
                                  (this.onlyBinaryUpgrades =
                                    n.onlyBinaryUpgrades),
                                  (this.perMessageDeflate =
                                    !1 !== n.perMessageDeflate &&
                                    (n.perMessageDeflate || {})),
                                  !0 === this.perMessageDeflate &&
                                    (this.perMessageDeflate = {}),
                                  this.perMessageDeflate &&
                                    null == this.perMessageDeflate.threshold &&
                                    (this.perMessageDeflate.threshold = 1024),
                                  (this.pfx = n.pfx || null),
                                  (this.key = n.key || null),
                                  (this.passphrase = n.passphrase || null),
                                  (this.cert = n.cert || null),
                                  (this.ca = n.ca || null),
                                  (this.ciphers = n.ciphers || null),
                                  (this.rejectUnauthorized =
                                    void 0 === n.rejectUnauthorized ||
                                    n.rejectUnauthorized),
                                  (this.forceNode = !!n.forceNode),
                                  (this.isReactNative =
                                    "undefined" != typeof navigator &&
                                    "string" == typeof navigator.product &&
                                    "reactnative" ===
                                      navigator.product.toLowerCase()),
                                  ("undefined" != typeof self &&
                                    !this.isReactNative) ||
                                    (n.extraHeaders &&
                                      0 < Object.keys(n.extraHeaders).length &&
                                      (this.extraHeaders = n.extraHeaders),
                                    n.localAddress &&
                                      (this.localAddress = n.localAddress)),
                                  (this.id = null),
                                  (this.upgrades = null),
                                  (this.pingInterval = null),
                                  (this.pingTimeout = null),
                                  (this.pingIntervalTimer = null),
                                  (this.pingTimeoutTimer = null),
                                  void this.open())
                                : new l(t, n);
                            }
                            var s = i(12),
                              e = i(5),
                              c = (i(3)("engine.io-client:socket"), i(27)),
                              a = i(15),
                              o = i(2),
                              r = i(23);
                            ((t.exports = l).priorWebsocketSuccess = !1),
                              e(l.prototype),
                              (l.protocol = a.protocol),
                              ((l.Socket = l).Transport = i(14)),
                              (l.transports = i(12)),
                              (l.parser = i(15)),
                              (l.prototype.createTransport = function (t) {
                                var n = (function (t) {
                                  var n,
                                    i = {};
                                  for (n in t)
                                    t.hasOwnProperty(n) && (i[n] = t[n]);
                                  return i;
                                })(this.query);
                                (n.EIO = a.protocol), (n.transport = t);
                                var i = this.transportOptions[t] || {};
                                return (
                                  this.id && (n.sid = this.id),
                                  new s[t]({
                                    query: n,
                                    socket: this,
                                    agent: i.agent || this.agent,
                                    hostname: i.hostname || this.hostname,
                                    port: i.port || this.port,
                                    secure: i.secure || this.secure,
                                    path: i.path || this.path,
                                    forceJSONP: i.forceJSONP || this.forceJSONP,
                                    jsonp: i.jsonp || this.jsonp,
                                    forceBase64:
                                      i.forceBase64 || this.forceBase64,
                                    enablesXDR: i.enablesXDR || this.enablesXDR,
                                    withCredentials:
                                      i.withCredentials || this.withCredentials,
                                    timestampRequests:
                                      i.timestampRequests ||
                                      this.timestampRequests,
                                    timestampParam:
                                      i.timestampParam || this.timestampParam,
                                    policyPort: i.policyPort || this.policyPort,
                                    pfx: i.pfx || this.pfx,
                                    key: i.key || this.key,
                                    passphrase: i.passphrase || this.passphrase,
                                    cert: i.cert || this.cert,
                                    ca: i.ca || this.ca,
                                    ciphers: i.ciphers || this.ciphers,
                                    rejectUnauthorized:
                                      i.rejectUnauthorized ||
                                      this.rejectUnauthorized,
                                    perMessageDeflate:
                                      i.perMessageDeflate ||
                                      this.perMessageDeflate,
                                    extraHeaders:
                                      i.extraHeaders || this.extraHeaders,
                                    forceNode: i.forceNode || this.forceNode,
                                    localAddress:
                                      i.localAddress || this.localAddress,
                                    requestTimeout:
                                      i.requestTimeout || this.requestTimeout,
                                    protocols: i.protocols || void 0,
                                    isReactNative: this.isReactNative,
                                  })
                                );
                              }),
                              (l.prototype.open = function () {
                                var t;
                                if (
                                  this.rememberUpgrade &&
                                  l.priorWebsocketSuccess &&
                                  -1 !== this.transports.indexOf("websocket")
                                )
                                  t = "websocket";
                                else {
                                  if (0 === this.transports.length) {
                                    var n = this;
                                    return void setTimeout(function () {
                                      n.emit(
                                        "error",
                                        "No transports available"
                                      );
                                    }, 0);
                                  }
                                  t = this.transports[0];
                                }
                                this.readyState = "opening";
                                try {
                                  t = this.createTransport(t);
                                } catch (t) {
                                  return (
                                    this.transports.shift(), void this.open()
                                  );
                                }
                                t.open(), this.setTransport(t);
                              }),
                              (l.prototype.setTransport = function (t) {
                                var n = this;
                                this.transport &&
                                  this.transport.removeAllListeners(),
                                  (this.transport = t)
                                    .on("drain", function () {
                                      n.onDrain();
                                    })
                                    .on("packet", function (t) {
                                      n.onPacket(t);
                                    })
                                    .on("error", function (t) {
                                      n.onError(t);
                                    })
                                    .on("close", function () {
                                      n.onClose("transport close");
                                    });
                              }),
                              (l.prototype.probe = function (t) {
                                function n() {
                                  var t;
                                  u.onlyBinaryUpgrades &&
                                    ((t =
                                      !this.supportsBinary &&
                                      u.transport.supportsBinary),
                                    (h = h || t)),
                                    h ||
                                      (r.send([
                                        { type: "ping", data: "probe" },
                                      ]),
                                      r.once("packet", function (t) {
                                        h ||
                                          ("pong" === t.type &&
                                          "probe" === t.data
                                            ? ((u.upgrading = !0),
                                              u.emit("upgrading", r),
                                              r &&
                                                ((l.priorWebsocketSuccess =
                                                  "websocket" === r.name),
                                                u.transport.pause(function () {
                                                  h ||
                                                    ("closed" !==
                                                      u.readyState &&
                                                      (o(),
                                                      u.setTransport(r),
                                                      r.send([
                                                        { type: "upgrade" },
                                                      ]),
                                                      u.emit("upgrade", r),
                                                      (r = null),
                                                      (u.upgrading = !1),
                                                      u.flush()));
                                                })))
                                            : (((t = new Error(
                                                "probe error"
                                              )).transport = r.name),
                                              u.emit("upgradeError", t)));
                                      }));
                                }
                                function i() {
                                  h || ((h = !0), o(), r.close(), (r = null));
                                }
                                function s(t) {
                                  ((t = new Error(
                                    "probe error: " + t
                                  )).transport = r.name),
                                    i(),
                                    u.emit("upgradeError", t);
                                }
                                function e() {
                                  s("transport closed");
                                }
                                function c() {
                                  s("socket closed");
                                }
                                function a(t) {
                                  r && t.name !== r.name && i();
                                }
                                function o() {
                                  r.removeListener("open", n),
                                    r.removeListener("error", s),
                                    r.removeListener("close", e),
                                    u.removeListener("close", c),
                                    u.removeListener("upgrading", a);
                                }
                                var r = this.createTransport(t, { probe: 1 }),
                                  h = !1,
                                  u = this;
                                (l.priorWebsocketSuccess = !1),
                                  r.once("open", n),
                                  r.once("error", s),
                                  r.once("close", e),
                                  this.once("close", c),
                                  this.once("upgrading", a),
                                  r.open();
                              }),
                              (l.prototype.onOpen = function () {
                                if (
                                  ((this.readyState = "open"),
                                  (l.priorWebsocketSuccess =
                                    "websocket" === this.transport.name),
                                  this.emit("open"),
                                  this.flush(),
                                  "open" === this.readyState &&
                                    this.upgrade &&
                                    this.transport.pause)
                                )
                                  for (
                                    var t = 0, n = this.upgrades.length;
                                    t < n;
                                    t++
                                  )
                                    this.probe(this.upgrades[t]);
                              }),
                              (l.prototype.onPacket = function (t) {
                                if (
                                  "opening" === this.readyState ||
                                  "open" === this.readyState ||
                                  "closing" === this.readyState
                                )
                                  switch (
                                    (this.emit("packet", t),
                                    this.emit("heartbeat"),
                                    t.type)
                                  ) {
                                    case "open":
                                      this.onHandshake(JSON.parse(t.data));
                                      break;
                                    case "pong":
                                      this.setPing(), this.emit("pong");
                                      break;
                                    case "error":
                                      var n = new Error("server error");
                                      (n.code = t.data), this.onError(n);
                                      break;
                                    case "message":
                                      this.emit("data", t.data),
                                        this.emit("message", t.data);
                                  }
                              }),
                              (l.prototype.onHandshake = function (t) {
                                this.emit("handshake", t),
                                  (this.id = t.sid),
                                  (this.transport.query.sid = t.sid),
                                  (this.upgrades = this.filterUpgrades(
                                    t.upgrades
                                  )),
                                  (this.pingInterval = t.pingInterval),
                                  (this.pingTimeout = t.pingTimeout),
                                  this.onOpen(),
                                  "closed" !== this.readyState &&
                                    (this.setPing(),
                                    this.removeListener(
                                      "heartbeat",
                                      this.onHeartbeat
                                    ),
                                    this.on("heartbeat", this.onHeartbeat));
                              }),
                              (l.prototype.onHeartbeat = function (t) {
                                clearTimeout(this.pingTimeoutTimer);
                                var n = this;
                                n.pingTimeoutTimer = setTimeout(function () {
                                  "closed" !== n.readyState &&
                                    n.onClose("ping timeout");
                                }, t || n.pingInterval + n.pingTimeout);
                              }),
                              (l.prototype.setPing = function () {
                                var t = this;
                                clearTimeout(t.pingIntervalTimer),
                                  (t.pingIntervalTimer = setTimeout(
                                    function () {
                                      t.ping(), t.onHeartbeat(t.pingTimeout);
                                    },
                                    t.pingInterval
                                  ));
                              }),
                              (l.prototype.ping = function () {
                                var t = this;
                                this.sendPacket("ping", function () {
                                  t.emit("ping");
                                });
                              }),
                              (l.prototype.onDrain = function () {
                                this.writeBuffer.splice(0, this.prevBufferLen),
                                  (this.prevBufferLen = 0) ===
                                  this.writeBuffer.length
                                    ? this.emit("drain")
                                    : this.flush();
                              }),
                              (l.prototype.flush = function () {
                                "closed" !== this.readyState &&
                                  this.transport.writable &&
                                  !this.upgrading &&
                                  this.writeBuffer.length &&
                                  (this.transport.send(this.writeBuffer),
                                  (this.prevBufferLen = this.writeBuffer.length),
                                  this.emit("flush"));
                              }),
                              (l.prototype.write = l.prototype.send = function (
                                t,
                                n,
                                i
                              ) {
                                return (
                                  this.sendPacket("message", t, n, i), this
                                );
                              }),
                              (l.prototype.sendPacket = function (t, n, i, s) {
                                "function" == typeof n &&
                                  ((s = n), (n = void 0)),
                                  "function" == typeof i &&
                                    ((s = i), (i = null)),
                                  "closing" !== this.readyState &&
                                    "closed" !== this.readyState &&
                                    (((i = i || {}).compress =
                                      !1 !== i.compress),
                                    (i = { type: t, data: n, options: i }),
                                    this.emit("packetCreate", i),
                                    this.writeBuffer.push(i),
                                    s && this.once("flush", s),
                                    this.flush());
                              }),
                              (l.prototype.close = function () {
                                function t() {
                                  s.onClose("forced close"),
                                    s.transport.close();
                                }
                                function n() {
                                  s.removeListener("upgrade", n),
                                    s.removeListener("upgradeError", n),
                                    t();
                                }
                                function i() {
                                  s.once("upgrade", n),
                                    s.once("upgradeError", n);
                                }
                                var s;
                                return (
                                  ("opening" !== this.readyState &&
                                    "open" !== this.readyState) ||
                                    ((this.readyState = "closing"),
                                    (s = this).writeBuffer.length
                                      ? this.once("drain", function () {
                                          (this.upgrading ? i : t)();
                                        })
                                      : (this.upgrading ? i : t)()),
                                  this
                                );
                              }),
                              (l.prototype.onError = function (t) {
                                (l.priorWebsocketSuccess = !1),
                                  this.emit("error", t),
                                  this.onClose("transport error", t);
                              }),
                              (l.prototype.onClose = function (t, n) {
                                ("opening" !== this.readyState &&
                                  "open" !== this.readyState &&
                                  "closing" !== this.readyState) ||
                                  (clearTimeout(this.pingIntervalTimer),
                                  clearTimeout(this.pingTimeoutTimer),
                                  this.transport.removeAllListeners("close"),
                                  this.transport.close(),
                                  this.transport.removeAllListeners(),
                                  (this.readyState = "closed"),
                                  (this.id = null),
                                  this.emit("close", t, n),
                                  (this.writeBuffer = []),
                                  (this.prevBufferLen = 0));
                              }),
                              (l.prototype.filterUpgrades = function (t) {
                                for (
                                  var n = [], i = 0, s = t.length;
                                  i < s;
                                  i++
                                )
                                  ~c(this.transports, t[i]) && n.push(t[i]);
                                return n;
                              });
                          },
                          function (t, n, i) {
                            (i = i(13)), (n.websocket = i);
                          },
                          function (t, n, i) {
                            function s(t) {
                              t && t.forceBase64 && (this.supportsBinary = !1),
                                (this.perMessageDeflate = t.perMessageDeflate),
                                (this.usingBrowserWebSocket =
                                  e && !t.forceNode),
                                (this.protocols = t.protocols),
                                this.usingBrowserWebSocket || (l = c),
                                a.call(this, t);
                            }
                            var e,
                              c,
                              a = i(14),
                              o = i(15),
                              r = i(23),
                              h = i(24),
                              u = i(25);
                            if (
                              (i(3)("engine.io-client:websocket"),
                              "undefined" != typeof WebSocket
                                ? (e = WebSocket)
                                : "undefined" != typeof self &&
                                  (e = self.WebSocket || self.MozWebSocket),
                              "undefined" == typeof window)
                            )
                              try {
                                c = i(26);
                              } catch (t) {}
                            var l = e || c;
                            h((t.exports = s), a),
                              (s.prototype.name = "websocket"),
                              (s.prototype.supportsBinary = !0),
                              (s.prototype.doOpen = function () {
                                if (this.check()) {
                                  var t = this.uri(),
                                    n = this.protocols,
                                    i = {
                                      agent: this.agent,
                                      perMessageDeflate: this.perMessageDeflate,
                                    };
                                  (i.pfx = this.pfx),
                                    (i.key = this.key),
                                    (i.passphrase = this.passphrase),
                                    (i.cert = this.cert),
                                    (i.ca = this.ca),
                                    (i.ciphers = this.ciphers),
                                    (i.rejectUnauthorized = this.rejectUnauthorized),
                                    this.extraHeaders &&
                                      (i.headers = this.extraHeaders),
                                    this.localAddress &&
                                      (i.localAddress = this.localAddress);
                                  try {
                                    this.ws =
                                      this.usingBrowserWebSocket &&
                                      !this.isReactNative
                                        ? n
                                          ? new l(t, n)
                                          : new l(t)
                                        : new l(t, n, i);
                                  } catch (t) {
                                    return this.emit("error", t);
                                  }
                                  void 0 === this.ws.binaryType &&
                                    (this.supportsBinary = !1),
                                    this.ws.supports && this.ws.supports.binary
                                      ? ((this.supportsBinary = !0),
                                        (this.ws.binaryType = "nodebuffer"))
                                      : (this.ws.binaryType = "arraybuffer"),
                                    this.addEventListeners();
                                }
                              }),
                              (s.prototype.addEventListeners = function () {
                                var n = this;
                                (this.ws.onopen = function () {
                                  n.onOpen();
                                }),
                                  (this.ws.onclose = function () {
                                    n.onClose();
                                  }),
                                  (this.ws.onmessage = function (t) {
                                    n.onData(t.data);
                                  }),
                                  (this.ws.onerror = function (t) {
                                    n.onError("websocket error", t);
                                  });
                              }),
                              (s.prototype.write = function (t) {
                                var s = this;
                                this.writable = !1;
                                for (var e = t.length, n = 0, i = e; n < i; n++)
                                  !(function (i) {
                                    o.encodePacket(
                                      i,
                                      s.supportsBinary,
                                      function (t) {
                                        var n;
                                        s.usingBrowserWebSocket ||
                                          ((n = {}),
                                          i.options &&
                                            (n.compress = i.options.compress),
                                          !s.perMessageDeflate ||
                                            (("string" == typeof t
                                              ? Buffer.byteLength(t)
                                              : t.length) <
                                              s.perMessageDeflate.threshold &&
                                              (n.compress = !1)));
                                        try {
                                          s.usingBrowserWebSocket
                                            ? s.ws.send(t)
                                            : s.ws.send(t, n);
                                        } catch (t) {}
                                        --e ||
                                          (s.emit("flush"),
                                          setTimeout(function () {
                                            (s.writable = !0), s.emit("drain");
                                          }, 0));
                                      }
                                    );
                                  })(t[n]);
                              }),
                              (s.prototype.onClose = function () {
                                a.prototype.onClose.call(this);
                              }),
                              (s.prototype.doClose = function () {
                                void 0 !== this.ws && this.ws.close();
                              }),
                              (s.prototype.uri = function () {
                                var t = this.query || {},
                                  n = this.secure ? "wss" : "ws",
                                  i = "";
                                return (
                                  this.port &&
                                    (("wss" == n &&
                                      443 !== Number(this.port)) ||
                                      ("ws" == n &&
                                        80 !== Number(this.port))) &&
                                    (i = ":" + this.port),
                                  this.timestampRequests &&
                                    (t[this.timestampParam] = u()),
                                  this.supportsBinary || (t.b64 = 1),
                                  (t = r.encode(t)).length && (t = "?" + t),
                                  n +
                                    "://" +
                                    (-1 !== this.hostname.indexOf(":")
                                      ? "[" + this.hostname + "]"
                                      : this.hostname) +
                                    i +
                                    this.path +
                                    t
                                );
                              }),
                              (s.prototype.check = function () {
                                return !(
                                  !l ||
                                  ("qe" in l && this.name === s.prototype.name)
                                );
                              });
                          },
                          function (t, n, i) {
                            function s(t) {
                              (this.path = t.path),
                                (this.hostname = t.hostname),
                                (this.port = t.port),
                                (this.secure = t.secure),
                                (this.query = t.query),
                                (this.timestampParam = t.timestampParam),
                                (this.timestampRequests = t.timestampRequests),
                                (this.readyState = ""),
                                (this.agent = t.agent || !1),
                                (this.socket = t.socket),
                                (this.enablesXDR = t.enablesXDR),
                                (this.withCredentials = t.withCredentials),
                                (this.pfx = t.pfx),
                                (this.key = t.key),
                                (this.passphrase = t.passphrase),
                                (this.cert = t.cert),
                                (this.ca = t.ca),
                                (this.ciphers = t.ciphers),
                                (this.rejectUnauthorized =
                                  t.rejectUnauthorized),
                                (this.forceNode = t.forceNode),
                                (this.isReactNative = t.isReactNative),
                                (this.extraHeaders = t.extraHeaders),
                                (this.localAddress = t.localAddress);
                            }
                            var e = i(15);
                            i(5)((t.exports = s).prototype),
                              (s.prototype.onError = function (t, n) {
                                return (
                                  ((t = new Error(t)).type = "TransportError"),
                                  (t.description = n),
                                  this.emit("error", t),
                                  this
                                );
                              }),
                              (s.prototype.open = function () {
                                return (
                                  ("closed" !== this.readyState &&
                                    "" !== this.readyState) ||
                                    ((this.readyState = "opening"),
                                    this.doOpen()),
                                  this
                                );
                              }),
                              (s.prototype.close = function () {
                                return (
                                  ("opening" !== this.readyState &&
                                    "open" !== this.readyState) ||
                                    (this.doClose(), this.onClose()),
                                  this
                                );
                              }),
                              (s.prototype.send = function (t) {
                                if ("open" !== this.readyState)
                                  throw new Error("Transport not open");
                                this.write(t);
                              }),
                              (s.prototype.onOpen = function () {
                                (this.readyState = "open"),
                                  (this.writable = !0),
                                  this.emit("open");
                              }),
                              (s.prototype.onData = function (t) {
                                (t = e.decodePacket(t, this.socket.binaryType)),
                                  this.onPacket(t);
                              }),
                              (s.prototype.onPacket = function (t) {
                                this.emit("packet", t);
                              }),
                              (s.prototype.onClose = function () {
                                (this.readyState = "closed"),
                                  this.emit("close");
                              });
                          },
                          function (t, f, n) {
                            function c(t, n, i) {
                              for (
                                var e = new Array(t.length),
                                  s = o(t.length, i),
                                  c = 0;
                                c < t.length;
                                c++
                              )
                                (function (i, t, s) {
                                  n(t, function (t, n) {
                                    (e[i] = n), s(t, e);
                                  });
                                })(c, t[c], s);
                            }
                            var s,
                              i = n(16),
                              a = n(17),
                              d = n(18),
                              o = n(19),
                              r = n(20);
                            "undefined" != typeof ArrayBuffer && (s = n(21));
                            var e =
                                "undefined" != typeof navigator &&
                                /Android/i.test(navigator.userAgent),
                              h =
                                "undefined" != typeof navigator &&
                                /PhantomJS/i.test(navigator.userAgent),
                              u = e || h;
                            f.protocol = 3;
                            var l = (f.packets = {
                                open: 0,
                                close: 1,
                                ping: 2,
                                pong: 3,
                                message: 4,
                                upgrade: 5,
                                noop: 6,
                              }),
                              p = i(l),
                              v = { type: "error", data: "parser error" },
                              y = n(22);
                            (f.encodePacket = function (t, n, i, s) {
                              "function" == typeof n && ((s = n), (n = !1)),
                                "function" == typeof i && ((s = i), (i = null));
                              var e,
                                c,
                                a =
                                  void 0 === t.data
                                    ? void 0
                                    : t.data.buffer || t.data;
                              if (
                                "undefined" != typeof ArrayBuffer &&
                                a instanceof ArrayBuffer
                              )
                                return (function (t, n, i) {
                                  if (!n) return f.encodeBase64Packet(t, i);
                                  var n = t.data,
                                    s = new Uint8Array(n),
                                    e = new Uint8Array(1 + n.byteLength);
                                  e[0] = l[t.type];
                                  for (var c = 0; c < s.length; c++)
                                    e[c + 1] = s[c];
                                  return i(e.buffer);
                                })(t, n, s);
                              if (void 0 !== y && a instanceof y)
                                return (
                                  (e = t),
                                  (c = s),
                                  n
                                    ? u
                                      ? (function (t, n, i) {
                                          if (!n)
                                            return f.encodeBase64Packet(t, i);
                                          var s = new FileReader();
                                          return (
                                            (s.onload = function () {
                                              f.encodePacket(
                                                {
                                                  type: t.type,
                                                  data: s.result,
                                                },
                                                n,
                                                !0,
                                                i
                                              );
                                            }),
                                            s.readAsArrayBuffer(t.data)
                                          );
                                        })(e, n, c)
                                      : (((n = new Uint8Array(1))[0] =
                                          l[e.type]),
                                        c(new y([n.buffer, e.data])))
                                    : f.encodeBase64Packet(e, c)
                                );
                              if (a && a.base64)
                                return (
                                  (o = t),
                                  s("b" + f.packets[o.type] + o.data.data)
                                );
                              var o = l[t.type];
                              return (
                                void 0 !== t.data &&
                                  (o += i
                                    ? r.encode(String(t.data), { strict: !1 })
                                    : String(t.data)),
                                s("" + o)
                              );
                            }),
                              (f.encodeBase64Packet = function (n, i) {
                                var s,
                                  e = "b" + f.packets[n.type];
                                if (void 0 !== y && n.data instanceof y) {
                                  var c = new FileReader();
                                  return (
                                    (c.onload = function () {
                                      var t = c.result.split(",")[1];
                                      i(e + t);
                                    }),
                                    c.readAsDataURL(n.data)
                                  );
                                }
                                try {
                                  s = String.fromCharCode.apply(
                                    null,
                                    new Uint8Array(n.data)
                                  );
                                } catch (t) {
                                  for (
                                    var a = new Uint8Array(n.data),
                                      o = new Array(a.length),
                                      r = 0;
                                    r < a.length;
                                    r++
                                  )
                                    o[r] = a[r];
                                  s = String.fromCharCode.apply(null, o);
                                }
                                return (e += btoa(s)), i(e);
                              }),
                              (f.decodePacket = function (t, n, i) {
                                if (void 0 === t) return v;
                                if ("string" != typeof t)
                                  return (
                                    (s = new Uint8Array(t)[0]),
                                    (t = d(t, 1)),
                                    y && "blob" === n && (t = new y([t])),
                                    { type: p[s], data: t }
                                  );
                                if ("b" === t.charAt(0))
                                  return f.decodeBase64Packet(t.substr(1), n);
                                if (
                                  i &&
                                  !1 ===
                                    (t = (function (t) {
                                      try {
                                        t = r.decode(t, { strict: !1 });
                                      } catch (t) {
                                        return !1;
                                      }
                                      return t;
                                    })(t))
                                )
                                  return v;
                                var s = t.charAt(0);
                                return Number(s) == s && p[s]
                                  ? 1 < t.length
                                    ? { type: p[s], data: t.substring(1) }
                                    : { type: p[s] }
                                  : v;
                              }),
                              (f.decodeBase64Packet = function (t, n) {
                                var i = p[t.charAt(0)];
                                return s
                                  ? ((t = s.decode(t.substr(1))),
                                    "blob" === n && y && (t = new y([t])),
                                    { type: i, data: t })
                                  : {
                                      type: i,
                                      data: { base64: !0, data: t.substr(1) },
                                    };
                              }),
                              (f.encodePayload = function (t, i, s) {
                                "function" == typeof i && ((s = i), (i = null));
                                var e = a(t);
                                return i && e
                                  ? y && !u
                                    ? f.encodePayloadAsBlob(t, s)
                                    : f.encodePayloadAsArrayBuffer(t, s)
                                  : t.length
                                  ? void c(
                                      t,
                                      function (t, n) {
                                        f.encodePacket(
                                          t,
                                          !!e && i,
                                          !1,
                                          function (t) {
                                            n(null, t.length + ":" + t);
                                          }
                                        );
                                      },
                                      function (t, n) {
                                        return s(n.join(""));
                                      }
                                    )
                                  : s("0:");
                              }),
                              (f.decodePayload = function (t, n, i) {
                                if ("string" != typeof t)
                                  return f.decodePayloadAsBinary(t, n, i);
                                if (
                                  ("function" == typeof n &&
                                    ((i = n), (n = null)),
                                  "" === t)
                                )
                                  return i(v, 0, 1);
                                for (
                                  var s, e, c = "", a = 0, o = t.length;
                                  a < o;
                                  a++
                                ) {
                                  var r = t.charAt(a);
                                  if (":" === r) {
                                    if ("" === c || c != (s = Number(c)))
                                      return i(v, 0, 1);
                                    if (c != (e = t.substr(a + 1, s)).length)
                                      return i(v, 0, 1);
                                    if (e.length) {
                                      if (
                                        ((e = f.decodePacket(e, n, !1)),
                                        v.type === e.type && v.data === e.data)
                                      )
                                        return i(v, 0, 1);
                                      if (!1 === i(e, a + s, o)) return;
                                    }
                                    (a += s), (c = "");
                                  } else c += r;
                                }
                                return "" !== c ? i(v, 0, 1) : void 0;
                              }),
                              (f.encodePayloadAsArrayBuffer = function (t, s) {
                                return t.length
                                  ? void c(
                                      t,
                                      function (t, n) {
                                        f.encodePacket(t, !0, !0, function (t) {
                                          return n(null, t);
                                        });
                                      },
                                      function (t, n) {
                                        var i = n.reduce(function (t, n) {
                                            return (
                                              t +
                                              (n =
                                                "string" == typeof n
                                                  ? n.length
                                                  : n.byteLength).toString()
                                                .length +
                                              n +
                                              2
                                            );
                                          }, 0),
                                          a = new Uint8Array(i),
                                          o = 0;
                                        return (
                                          n.forEach(function (t) {
                                            var n = "string" == typeof t,
                                              i = t;
                                            if (n) {
                                              for (
                                                var s = new Uint8Array(
                                                    t.length
                                                  ),
                                                  e = 0;
                                                e < t.length;
                                                e++
                                              )
                                                s[e] = t.charCodeAt(e);
                                              i = s.buffer;
                                            }
                                            a[o++] = n ? 0 : 1;
                                            for (
                                              var c = i.byteLength.toString(),
                                                e = 0;
                                              e < c.length;
                                              e++
                                            )
                                              a[o++] = parseInt(c[e]);
                                            for (
                                              a[o++] = 255,
                                                s = new Uint8Array(i),
                                                e = 0;
                                              e < s.length;
                                              e++
                                            )
                                              a[o++] = s[e];
                                          }),
                                          s(a.buffer)
                                        );
                                      }
                                    )
                                  : s(new ArrayBuffer(0));
                              }),
                              (f.encodePayloadAsBlob = function (t, i) {
                                c(
                                  t,
                                  function (t, a) {
                                    f.encodePacket(t, !0, !0, function (t) {
                                      var n = new Uint8Array(1);
                                      if (((n[0] = 1), "string" == typeof t)) {
                                        for (
                                          var i = new Uint8Array(t.length),
                                            s = 0;
                                          s < t.length;
                                          s++
                                        )
                                          i[s] = t.charCodeAt(s);
                                        (t = i.buffer), (n[0] = 0);
                                      }
                                      for (
                                        var e = (t instanceof ArrayBuffer
                                            ? t.byteLength
                                            : t.size
                                          ).toString(),
                                          c = new Uint8Array(e.length + 1),
                                          s = 0;
                                        s < e.length;
                                        s++
                                      )
                                        c[s] = parseInt(e[s]);
                                      (c[e.length] = 255),
                                        y &&
                                          ((n = new y([n.buffer, c.buffer, t])),
                                          a(null, n));
                                    });
                                  },
                                  function (t, n) {
                                    return i(new y(n));
                                  }
                                );
                              }),
                              (f.decodePayloadAsBinary = function (t, i, s) {
                                "function" == typeof i && ((s = i), (i = null));
                                for (var n = t, e = []; 0 < n.byteLength; ) {
                                  for (
                                    var c = new Uint8Array(n),
                                      a = 0 === c[0],
                                      o = "",
                                      r = 1;
                                    255 !== c[r];
                                    r++
                                  ) {
                                    if (310 < o.length) return s(v, 0, 1);
                                    o += c[r];
                                  }
                                  (n = d(n, 2 + o.length)), (o = parseInt(o));
                                  var h = d(n, 0, o);
                                  if (a)
                                    try {
                                      h = String.fromCharCode.apply(
                                        null,
                                        new Uint8Array(h)
                                      );
                                    } catch (t) {
                                      var u = new Uint8Array(h);
                                      for (h = "", r = 0; r < u.length; r++)
                                        h += String.fromCharCode(u[r]);
                                    }
                                  e.push(h), (n = d(n, o));
                                }
                                var l = e.length;
                                e.forEach(function (t, n) {
                                  s(f.decodePacket(t, i, !0), n, l);
                                });
                              });
                          },
                          function (t, n) {
                            t.exports =
                              Object.keys ||
                              function (t) {
                                var n,
                                  i = [],
                                  s = Object.prototype.hasOwnProperty;
                                for (n in t) s.call(t, n) && i.push(n);
                                return i;
                              };
                          },
                          function (n, t, i) {
                            (function (c) {
                              var a = i(7),
                                t = Object.prototype.toString,
                                o =
                                  "function" == typeof c.Blob ||
                                  "[object BlobConstructor]" === t.call(c.Blob),
                                r =
                                  "function" == typeof c.File ||
                                  "[object FileConstructor]" === t.call(c.File);
                              n.exports = function t(n) {
                                if (!n || "object" != typeof n) return !1;
                                if (a(n)) {
                                  for (var i = 0, s = n.length; i < s; i++)
                                    if (t(n[i])) return !0;
                                  return !1;
                                }
                                if (
                                  ("function" == typeof c.Buffer &&
                                    c.Buffer.isBuffer &&
                                    c.Buffer.isBuffer(n)) ||
                                  ("function" == typeof c.ArrayBuffer &&
                                    n instanceof ArrayBuffer) ||
                                  (o && n instanceof Blob) ||
                                  (r && n instanceof File)
                                )
                                  return !0;
                                if (
                                  n.toJSON &&
                                  "function" == typeof n.toJSON &&
                                  1 === arguments.length
                                )
                                  return t(n.toJSON(), !0);
                                for (var e in n)
                                  if (
                                    Object.prototype.hasOwnProperty.call(
                                      n,
                                      e
                                    ) &&
                                    t(n[e])
                                  )
                                    return !0;
                                return !1;
                              };
                            }.call(
                              t,
                              (function () {
                                return this;
                              })()
                            ));
                          },
                          function (t, n) {
                            t.exports = function (t, n, i) {
                              var s = t.byteLength;
                              if (((n = n || 0), (i = i || s), t.slice))
                                return t.slice(n, i);
                              if (
                                (n < 0 && (n += s),
                                i < 0 && (i += s),
                                s < i && (i = s),
                                s <= n || i <= n || 0 === s)
                              )
                                return new ArrayBuffer(0);
                              for (
                                var e = new Uint8Array(t),
                                  c = new Uint8Array(i - n),
                                  a = n,
                                  o = 0;
                                a < i;
                                a++, o++
                              )
                                c[o] = e[a];
                              return c.buffer;
                            };
                          },
                          function (t, n) {
                            function a() {}
                            t.exports = function (t, i, s) {
                              function e(t, n) {
                                if (e.count <= 0)
                                  throw new Error(
                                    "after called too many times"
                                  );
                                --e.count,
                                  t
                                    ? ((c = !0), i(t), (i = s))
                                    : 0 !== e.count || c || i(null, n);
                              }
                              var c = !1;
                              return (
                                (s = s || a), 0 === (e.count = t) ? i() : e
                              );
                            };
                          },
                          function (t, n) {
                            function o(t) {
                              for (
                                var n, i, s = [], e = 0, c = t.length;
                                e < c;

                              )
                                55296 <= (n = t.charCodeAt(e++)) &&
                                n <= 56319 &&
                                e < c
                                  ? 56320 == (64512 & (i = t.charCodeAt(e++)))
                                    ? s.push(
                                        ((1023 & n) << 10) + (1023 & i) + 65536
                                      )
                                    : (s.push(n), e--)
                                  : s.push(n);
                              return s;
                            }
                            function r(t, n) {
                              if (!(55296 <= t && t <= 57343)) return 1;
                              if (n)
                                throw Error(
                                  "Lone surrogate U+" +
                                    t.toString(16).toUpperCase() +
                                    " is not a scalar value"
                                );
                            }
                            function h(t, n) {
                              return f(((t >> n) & 63) | 128);
                            }
                            function c() {
                              if (u <= l) throw Error("Invalid byte index");
                              var t = 255 & a[l];
                              if ((l++, 128 == (192 & t))) return 63 & t;
                              throw Error("Invalid continuation byte");
                            }
                            var a,
                              u,
                              l,
                              f = String.fromCharCode;
                            t.exports = {
                              version: "2.1.2",
                              encode: function (t, n) {
                                for (
                                  var i = !1 !== (n = n || {}).strict,
                                    s = o(t),
                                    e = s.length,
                                    c = -1,
                                    a = "";
                                  ++c < e;

                                )
                                  a += (function (t, n) {
                                    if (0 == (4294967168 & t)) return f(t);
                                    var i = "";
                                    return (
                                      0 == (4294965248 & t)
                                        ? (i = f(((t >> 6) & 31) | 192))
                                        : 0 == (4294901760 & t)
                                        ? (r(t, n) || (t = 65533),
                                          (i = f(((t >> 12) & 15) | 224)),
                                          (i += h(t, 6)))
                                        : 0 == (4292870144 & t) &&
                                          ((i = f(((t >> 18) & 7) | 240)),
                                          (i += h(t, 12)),
                                          (i += h(t, 6))),
                                      i + f((63 & t) | 128)
                                    );
                                  })(s[c], i);
                                return a;
                              },
                              decode: function (t, n) {
                                var i = !1 !== (n = n || {}).strict;
                                (a = o(t)), (u = a.length), (l = 0);
                                for (
                                  var s, e = [];
                                  !1 !==
                                  (s = (function (t) {
                                    var n, i;
                                    if (u < l)
                                      throw Error("Invalid byte index");
                                    if (l == u) return !1;
                                    if (((n = 255 & a[l]), l++, 0 == (128 & n)))
                                      return n;
                                    if (192 == (224 & n)) {
                                      if (128 <= (i = ((31 & n) << 6) | c()))
                                        return i;
                                      throw Error("Invalid continuation byte");
                                    }
                                    if (224 == (240 & n)) {
                                      if (
                                        2048 <=
                                        (i =
                                          ((15 & n) << 12) | (c() << 6) | c())
                                      )
                                        return r(i, t) ? i : 65533;
                                      throw Error("Invalid continuation byte");
                                    }
                                    if (
                                      240 == (248 & n) &&
                                      65536 <=
                                        (i =
                                          ((7 & n) << 18) |
                                          (c() << 12) |
                                          (c() << 6) |
                                          c()) &&
                                      i <= 1114111
                                    )
                                      return i;
                                    throw Error("Invalid UTF-8 detected");
                                  })(i));

                                )
                                  e.push(s);
                                return (function (t) {
                                  for (
                                    var n, i = t.length, s = -1, e = "";
                                    ++s < i;

                                  )
                                    65535 < (n = t[s]) &&
                                      ((e += f(
                                        (((n -= 65536) >>> 10) & 1023) | 55296
                                      )),
                                      (n = 56320 | (1023 & n))),
                                      (e += f(n));
                                  return e;
                                })(e);
                              },
                            };
                          },
                          function (t, n) {
                            var u =
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                            (n.encode = function (t) {
                              for (
                                var n = new Uint8Array(t),
                                  i = n.length,
                                  s = "",
                                  e = 0;
                                e < i;
                                e += 3
                              )
                                (s += u[n[e] >> 2]),
                                  (s += u[((3 & n[e]) << 4) | (n[e + 1] >> 4)]),
                                  (s +=
                                    u[
                                      ((15 & n[e + 1]) << 2) | (n[e + 2] >> 6)
                                    ]),
                                  (s += u[63 & n[e + 2]]);
                              return (
                                i % 3 == 2
                                  ? (s = s.substring(0, s.length - 1) + "=")
                                  : i % 3 == 1 &&
                                    (s = s.substring(0, s.length - 2) + "=="),
                                s
                              );
                            }),
                              (n.decode = function (t) {
                                var n,
                                  i,
                                  s,
                                  e,
                                  c = 0.75 * t.length,
                                  a = t.length,
                                  o = 0;
                                "=" === t[t.length - 1] &&
                                  (c--, "=" === t[t.length - 2] && c--);
                                for (
                                  var c = new ArrayBuffer(c),
                                    r = new Uint8Array(c),
                                    h = 0;
                                  h < a;
                                  h += 4
                                )
                                  (n = u.indexOf(t[h])),
                                    (i = u.indexOf(t[h + 1])),
                                    (s = u.indexOf(t[h + 2])),
                                    (e = u.indexOf(t[h + 3])),
                                    (r[o++] = (n << 2) | (i >> 4)),
                                    (r[o++] = ((15 & i) << 4) | (s >> 2)),
                                    (r[o++] = ((3 & s) << 6) | (63 & e));
                                return c;
                              });
                          },
                          function (t, n) {
                            function s(t) {
                              return t.map(function (t) {
                                if (t.buffer instanceof ArrayBuffer) {
                                  var n,
                                    i = t.buffer;
                                  return (
                                    t.byteLength !== i.byteLength &&
                                      ((n = new Uint8Array(t.byteLength)).set(
                                        new Uint8Array(
                                          i,
                                          t.byteOffset,
                                          t.byteLength
                                        )
                                      ),
                                      (i = n.buffer)),
                                    i
                                  );
                                }
                                return t;
                              });
                            }
                            function i(t, n) {
                              n = n || {};
                              var i = new c();
                              return (
                                s(t).forEach(function (t) {
                                  i.append(t);
                                }),
                                n.type ? i.getBlob(n.type) : i.getBlob()
                              );
                            }
                            function e(t, n) {
                              return new Blob(s(t), n || {});
                            }
                            var c =
                                void 0 !== c
                                  ? c
                                  : "undefined" != typeof WebKitBlobBuilder
                                  ? WebKitBlobBuilder
                                  : "undefined" != typeof MSBlobBuilder
                                  ? MSBlobBuilder
                                  : "undefined" != typeof MozBlobBuilder &&
                                    MozBlobBuilder,
                              a = (function () {
                                try {
                                  return 2 === new Blob(["hi"]).size;
                                } catch (t) {
                                  return !1;
                                }
                              })(),
                              o =
                                a &&
                                (function () {
                                  try {
                                    return (
                                      2 ===
                                      new Blob([new Uint8Array([1, 2])]).size
                                    );
                                  } catch (t) {
                                    return !1;
                                  }
                                })(),
                              r =
                                c && c.prototype.append && c.prototype.getBlob;
                            "undefined" != typeof Blob &&
                              ((i.prototype = Blob.prototype),
                              (e.prototype = Blob.prototype)),
                              (t.exports = a ? (o ? Blob : e) : r ? i : void 0);
                          },
                          function (t, n) {
                            (n.encode = function (t) {
                              var n,
                                i = "";
                              for (n in t)
                                t.hasOwnProperty(n) &&
                                  (i.length && (i += "&"),
                                  (i +=
                                    encodeURIComponent(n) +
                                    "=" +
                                    encodeURIComponent(t[n])));
                              return i;
                            }),
                              (n.decode = function (t) {
                                for (
                                  var n = {},
                                    i = t.split("&"),
                                    s = 0,
                                    e = i.length;
                                  s < e;
                                  s++
                                ) {
                                  var c = i[s].split("=");
                                  n[
                                    decodeURIComponent(c[0])
                                  ] = decodeURIComponent(c[1]);
                                }
                                return n;
                              });
                          },
                          function (t, n) {
                            t.exports = function (t, n) {
                              function i() {}
                              (i.prototype = n.prototype),
                                (t.prototype = new i()),
                                (t.prototype.constructor = t);
                            };
                          },
                          function (t, n) {
                            function i(t) {
                              for (
                                var n = "";
                                (n = c[t % a] + n), 0 < (t = Math.floor(t / a));

                              );
                              return n;
                            }
                            function s() {
                              var t = i(+new Date());
                              return t !== e
                                ? ((r = 0), (e = t))
                                : t + "." + i(r++);
                            }
                            for (
                              var e,
                                c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
                                  ""
                                ),
                                a = 64,
                                o = {},
                                r = 0,
                                h = 0;
                              h < a;
                              h++
                            )
                              o[c[h]] = h;
                            (s.encode = i),
                              (s.decode = function (t) {
                                var n = 0;
                                for (h = 0; h < t.length; h++)
                                  n = n * a + o[t.charAt(h)];
                                return n;
                              }),
                              (t.exports = s);
                          },
                          function (t, n) {
                            t.exports = function () {
                              throw new Error(
                                "ws does not work in the browser. Browser clients must use the native WebSocket object"
                              );
                            };
                          },
                          function (t, n) {
                            var s = [].indexOf;
                            t.exports = function (t, n) {
                              if (s) return t.indexOf(n);
                              for (var i = 0; i < t.length; ++i)
                                if (t[i] === n) return i;
                              return -1;
                            };
                          },
                          function (t, n, i) {
                            function s(t, n, i) {
                              (this.io = t),
                                (this.nsp = n),
                                ((this.json = this).ids = 0),
                                (this.acks = {}),
                                (this.receiveBuffer = []),
                                (this.sendBuffer = []),
                                (this.connected = !1),
                                (this.disconnected = !0),
                                (this.flags = {}),
                                i && i.query && (this.query = i.query),
                                this.io.autoConnect && this.open();
                            }
                            var e =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                  ? function (t) {
                                      return typeof t;
                                    }
                                  : function (t) {
                                      return t &&
                                        "function" == typeof Symbol &&
                                        t.constructor === Symbol &&
                                        t !== Symbol.prototype
                                        ? "symbol"
                                        : typeof t;
                                    },
                              c = i(4),
                              a = i(5),
                              o = i(29),
                              r = i(30),
                              h = i(31),
                              u = (i(3)("socket.io-client:socket"), i(23)),
                              l = i(17);
                            t.exports = s;
                            var f = {
                                connect: 1,
                                connect_error: 1,
                                connect_timeout: 1,
                                connecting: 1,
                                disconnect: 1,
                                error: 1,
                                reconnect: 1,
                                reconnect_attempt: 1,
                                reconnect_failed: 1,
                                reconnect_error: 1,
                                reconnecting: 1,
                                ping: 1,
                                pong: 1,
                              },
                              d = a.prototype.emit;
                            a(s.prototype),
                              (s.prototype.subEvents = function () {
                                var t;
                                this.subs ||
                                  ((t = this.io),
                                  (this.subs = [
                                    r(t, "open", h(this, "onopen")),
                                    r(t, "packet", h(this, "onpacket")),
                                    r(t, "close", h(this, "onclose")),
                                  ]));
                              }),
                              (s.prototype.open = s.prototype.connect = function () {
                                return (
                                  this.connected ||
                                    (this.subEvents(),
                                    this.io.open(),
                                    "open" === this.io.readyState &&
                                      this.onopen(),
                                    this.emit("connecting")),
                                  this
                                );
                              }),
                              (s.prototype.send = function () {
                                var t = o(arguments);
                                return (
                                  t.unshift("message"),
                                  this.emit.apply(this, t),
                                  this
                                );
                              }),
                              (s.prototype.emit = function (t) {
                                if (f.hasOwnProperty(t))
                                  return d.apply(this, arguments), this;
                                var n = o(arguments),
                                  i = {
                                    type: (
                                      void 0 !== this.flags.binary
                                        ? this.flags.binary
                                        : l(n)
                                    )
                                      ? c.BINARY_EVENT
                                      : c.EVENT,
                                    data: n,
                                    options: {},
                                  };
                                return (
                                  (i.options.compress =
                                    !this.flags || !1 !== this.flags.compress),
                                  "function" == typeof n[n.length - 1] &&
                                    ((this.acks[this.ids] = n.pop()),
                                    (i.id = this.ids++)),
                                  this.connected
                                    ? this.packet(i)
                                    : this.sendBuffer.push(i),
                                  (this.flags = {}),
                                  this
                                );
                              }),
                              (s.prototype.packet = function (t) {
                                (t.nsp = this.nsp), this.io.packet(t);
                              }),
                              (s.prototype.onopen = function () {
                                var t;
                                "/" !== this.nsp &&
                                  (this.query
                                    ? ((t =
                                        "object" === e(this.query)
                                          ? u.encode(this.query)
                                          : this.query),
                                      this.packet({
                                        type: c.CONNECT,
                                        query: t,
                                      }))
                                    : this.packet({ type: c.CONNECT }));
                              }),
                              (s.prototype.onclose = function (t) {
                                (this.connected = !1),
                                  (this.disconnected = !0),
                                  delete this.id,
                                  this.emit("disconnect", t);
                              }),
                              (s.prototype.onpacket = function (t) {
                                var n = t.nsp === this.nsp,
                                  i = t.type === c.ERROR && "/" === t.nsp;
                                if (n || i)
                                  switch (t.type) {
                                    case c.CONNECT:
                                      this.onconnect();
                                      break;
                                    case c.EVENT:
                                    case c.BINARY_EVENT:
                                      this.onevent(t);
                                      break;
                                    case c.ACK:
                                    case c.BINARY_ACK:
                                      this.onack(t);
                                      break;
                                    case c.DISCONNECT:
                                      this.ondisconnect();
                                      break;
                                    case c.ERROR:
                                      this.emit("error", t.data);
                                  }
                              }),
                              (s.prototype.onevent = function (t) {
                                var n = t.data || [];
                                null != t.id && n.push(this.ack(t.id)),
                                  this.connected
                                    ? d.apply(this, n)
                                    : this.receiveBuffer.push(n);
                              }),
                              (s.prototype.ack = function (n) {
                                var i = this,
                                  s = !1;
                                return function () {
                                  var t;
                                  s ||
                                    ((s = !0),
                                    (t = o(arguments)),
                                    i.packet({
                                      type: l(t) ? c.BINARY_ACK : c.ACK,
                                      id: n,
                                      data: t,
                                    }));
                                };
                              }),
                              (s.prototype.onack = function (t) {
                                var n = this.acks[t.id];
                                "function" == typeof n &&
                                  (n.apply(this, t.data),
                                  delete this.acks[t.id]);
                              }),
                              (s.prototype.onconnect = function () {
                                (this.connected = !0),
                                  (this.disconnected = !1),
                                  this.emit("connect"),
                                  this.emitBuffered();
                              }),
                              (s.prototype.emitBuffered = function () {
                                for (
                                  var t = 0;
                                  t < this.receiveBuffer.length;
                                  t++
                                )
                                  d.apply(this, this.receiveBuffer[t]);
                                for (
                                  this.receiveBuffer = [], t = 0;
                                  t < this.sendBuffer.length;
                                  t++
                                )
                                  this.packet(this.sendBuffer[t]);
                                this.sendBuffer = [];
                              }),
                              (s.prototype.ondisconnect = function () {
                                this.destroy(),
                                  this.onclose("io server disconnect");
                              }),
                              (s.prototype.destroy = function () {
                                if (this.subs) {
                                  for (var t = 0; t < this.subs.length; t++)
                                    this.subs[t].destroy();
                                  this.subs = null;
                                }
                                this.io.destroy(this);
                              }),
                              (s.prototype.close = s.prototype.disconnect = function () {
                                return (
                                  this.connected &&
                                    this.packet({ type: c.DISCONNECT }),
                                  this.destroy(),
                                  this.connected &&
                                    this.onclose("io client disconnect"),
                                  this
                                );
                              }),
                              (s.prototype.compress = function (t) {
                                return (this.flags.compress = t), this;
                              }),
                              (s.prototype.binary = function (t) {
                                return (this.flags.binary = t), this;
                              });
                          },
                          function (t, n) {
                            t.exports = function (t, n) {
                              for (
                                var i = [], s = (n = n || 0) || 0;
                                s < t.length;
                                s++
                              )
                                i[s - n] = t[s];
                              return i;
                            };
                          },
                          function (t, n) {
                            t.exports = function (t, n, i) {
                              return (
                                t.on(n, i),
                                {
                                  destroy: function () {
                                    t.removeListener(n, i);
                                  },
                                }
                              );
                            };
                          },
                          function (t, n) {
                            var s = [].slice;
                            t.exports = function (t, n) {
                              if (
                                ("string" == typeof n && (n = t[n]),
                                "function" != typeof n)
                              )
                                throw new Error("bind() requires a function");
                              var i = s.call(arguments, 2);
                              return function () {
                                return n.apply(t, i.concat(s.call(arguments)));
                              };
                            };
                          },
                          function (t, n) {
                            function i(t) {
                              (t = t || {}),
                                (this.ms = t.min || 100),
                                (this.max = t.max || 1e4),
                                (this.factor = t.factor || 2),
                                (this.jitter =
                                  0 < t.jitter && t.jitter <= 1 ? t.jitter : 0),
                                (this.attempts = 0);
                            }
                            ((t.exports = i).prototype.duration = function () {
                              var t,
                                n,
                                i =
                                  this.ms *
                                  Math.pow(this.factor, this.attempts++);
                              return (
                                this.jitter &&
                                  ((t = Math.random()),
                                  (n = Math.floor(t * this.jitter * i)),
                                  (i =
                                    0 == (1 & Math.floor(10 * t))
                                      ? i - n
                                      : i + n)),
                                0 | Math.min(i, this.max)
                              );
                            }),
                              (i.prototype.reset = function () {
                                this.attempts = 0;
                              }),
                              (i.prototype.setMin = function (t) {
                                this.ms = t;
                              }),
                              (i.prototype.setMax = function (t) {
                                this.max = t;
                              }),
                              (i.prototype.setJitter = function (t) {
                                this.jitter = t;
                              });
                          },
                        ]),
                        (i.c = e),
                        (i.p = ""),
                        i(0)
                      );
                      function i(t) {
                        if (e[t]) return e[t].exports;
                        var n = (e[t] = { exports: {}, id: t, loaded: !1 });
                        return (
                          s[t].call(n.exports, n, n.exports, i),
                          (n.loaded = !0),
                          n.exports
                        );
                      }
                      var s, e;
                    }),
                    "object" == typeof __crisp_void_exports &&
                    "object" == typeof module
                      ? (module.exports = N())
                      : "function" == typeof __crisp_void_define && define.amd
                      ? define([], N)
                      : "object" == typeof __crisp_void_exports
                      ? (exports.io = N())
                      : (R.io = N()),
                    (function (t, n) {
                      "use strict";
                      var i;
                      "function" == typeof __crisp_void_define && define.amd
                        ? define(["exports"], n)
                        : "object" == typeof __crisp_void_exports
                        ? n(exports)
                        : ((i = {}), n((t.PubSub = i)));
                    })(("object" == typeof o && o) || this, function (i) {
                      "use strict";
                      var r = {},
                        s = -1;
                      function o(t) {
                        for (var n in t) if (t.hasOwnProperty(n)) return !0;
                        return !1;
                      }
                      function h(t, n, i) {
                        try {
                          t(n, i);
                        } catch (t) {
                          setTimeout(
                            (function (t) {
                              return function () {
                                throw t;
                              };
                            })(t),
                            0
                          );
                        }
                      }
                      function u(t, n, i) {
                        t(n, i);
                      }
                      function l(t, n, i, s) {
                        var e,
                          c = r[n],
                          a = s ? u : h;
                        if (r.hasOwnProperty(n))
                          for (e in c) c.hasOwnProperty(e) && a(c[e], t, i);
                      }
                      function e(t, n, i, s) {
                        var e,
                          c,
                          a,
                          s =
                            ((c = n),
                            (a = s),
                            function () {
                              var t = String(e),
                                n = t.lastIndexOf(".");
                              for (l(e, e, c, a); -1 !== n; )
                                (n = (t = t.substr(0, n)).lastIndexOf(".")),
                                  l(e, t, c, a);
                            });
                        return (
                          !!(function (t) {
                            for (
                              var n = String(t),
                                i = Boolean(r.hasOwnProperty(n) && o(r[n])),
                                s = n.lastIndexOf(".");
                              !i && -1 !== s;

                            )
                              (s = (n = n.substr(0, s)).lastIndexOf(".")),
                                (i = Boolean(r.hasOwnProperty(n) && o(r[n])));
                            return i;
                          })((e = t)) && (!0 === i ? s() : setTimeout(s, 0), !0)
                        );
                      }
                      (i.publish = function (t, n) {
                        return e(t, n, !1, i.immediateExceptions);
                      }),
                        (i.publishSync = function (t, n) {
                          return e(t, n, !0, i.immediateExceptions);
                        }),
                        (i.subscribe = function (t, n) {
                          if ("function" != typeof n) return !1;
                          r.hasOwnProperty(t) || (r[t] = {});
                          var i = "uid_" + String(++s);
                          return (r[t][i] = n), i;
                        }),
                        (i.clearAllSubscriptions = function () {
                          r = {};
                        }),
                        (i.clearSubscriptions = function (t) {
                          for (var n in r)
                            r.hasOwnProperty(n) &&
                              0 === n.indexOf(t) &&
                              delete r[n];
                        }),
                        (i.unsubscribe = function (t) {
                          var n,
                            i,
                            s,
                            e = "string" == typeof t && r.hasOwnProperty(t),
                            c = !e && "string" == typeof t,
                            a = "function" == typeof t,
                            o = !1;
                          if (!e) {
                            for (n in r)
                              if (r.hasOwnProperty(n)) {
                                if (((i = r[n]), c && i[t])) {
                                  delete i[t], (o = t);
                                  break;
                                }
                                if (a)
                                  for (s in i)
                                    i.hasOwnProperty(s) &&
                                      i[s] === t &&
                                      (delete i[s], (o = !0));
                              }
                            return o;
                          }
                          delete r[t];
                        });
                    }),
                    (function (a) {
                      "use strict";
                      function t(t) {
                        var c = function (t, n, i) {
                          return 1 === arguments.length
                            ? c.get(t)
                            : c.set(t, n, i);
                        };
                        return (
                          (c.ze = t.document),
                          (c._cacheKeyPrefix = "cookey."),
                          (c._maxExpireDate = new Date(
                            "Fri, 31 Dec 9999 23:59:59 UTC"
                          )),
                          (c.defaults = { path: "/", secure: !1, sameSite: a }),
                          (c.get = function (t) {
                            return (
                              c._cachedDocumentCookie !== c.ze.cookie &&
                                c._renewCache(),
                              (t = c.Se[c._cacheKeyPrefix + t]) === a
                                ? a
                                : decodeURIComponent(t)
                            );
                          }),
                          (c.set = function (t, n, i) {
                            return (
                              ((i = c._getExtendedOptions(
                                i
                              )).expires = c._getExpiresDate(
                                n === a ? -1 : i.expires
                              )),
                              (c.ze.cookie = c._generateCookieString(t, n, i)),
                              c
                            );
                          }),
                          (c.expire = function (t, n) {
                            return c.set(t, a, n);
                          }),
                          (c._getExtendedOptions = function (t) {
                            return {
                              path: (t && t.path) || c.defaults.path,
                              domain: (t && t.domain) || c.defaults.domain,
                              expires: (t && t.expires) || c.defaults.expires,
                              secure: (t && t.secure !== a ? t : c.defaults)
                                .secure,
                              sameSite:
                                (t && t.sameSite) || c.defaults.sameSite,
                            };
                          }),
                          (c._isValidDate = function (t) {
                            return (
                              "[object Date]" ===
                                Object.prototype.toString.call(t) &&
                              !isNaN(t.getTime())
                            );
                          }),
                          (c._getExpiresDate = function (t, n) {
                            if (
                              ((n = n || new Date()),
                              "number" == typeof t
                                ? (t =
                                    t === 1 / 0
                                      ? c._maxExpireDate
                                      : new Date(n.getTime() + 1e3 * t))
                                : "string" == typeof t && (t = new Date(t)),
                              t && !c._isValidDate(t))
                            )
                              throw new Error("Invalid expires");
                            return t;
                          }),
                          (c._generateSameSiteString = function (t) {
                            switch ((t && t.sameSite) || c.defaults.sameSite) {
                              case a:
                                return "";
                              case "None":
                              case "none":
                                return ";sameSite=None";
                              case "Lax":
                              case "lax":
                                return ";sameSite=Lax";
                              case "Strict":
                              case "strict":
                                return ";sameSite=Strict";
                              default:
                                throw new TypeError("Invalid sameSite");
                            }
                          }),
                          (c._generateCookieString = function (t, n, i) {
                            return (
                              (n =
                                (t = (t = t.replace(
                                  /[^#$&+\^`|]/g,
                                  encodeURIComponent
                                ))
                                  .replace(/\(/g, "%28")
                                  .replace(/\)/g, "%29")) +
                                "=" +
                                (n + "").replace(
                                  /[^!#$&-+\--:<-\[\]-~]/g,
                                  encodeURIComponent
                                )),
                              (n += (i = i || {}).path
                                ? ";path=" + i.path
                                : ""),
                              (n += i.domain ? ";domain=" + i.domain : ""),
                              (n += i.expires
                                ? ";expires=" + i.expires.toUTCString()
                                : ""),
                              (n += i.secure ? ";secure" : "") +
                                c._generateSameSiteString(i)
                            );
                          }),
                          (c._getCacheFromString = function (t) {
                            for (
                              var n = {}, i = t ? t.split("; ") : [], s = 0;
                              s < i.length;
                              s++
                            ) {
                              var e = c._getKeyValuePairFromCookieString(i[s]);
                              n[c._cacheKeyPrefix + e.key] === a &&
                                (n[c._cacheKeyPrefix + e.key] = e.value);
                            }
                            return n;
                          }),
                          (c._getKeyValuePairFromCookieString = function (t) {
                            var n,
                              i = (i = t.indexOf("=")) < 0 ? t.length : i,
                              s = t.substr(0, i);
                            try {
                              n = decodeURIComponent(s);
                            } catch (t) {}
                            return { key: n, value: t.substr(i + 1) };
                          }),
                          (c._renewCache = function () {
                            (c.Se = c._getCacheFromString(c.ze.cookie)),
                              (c._cachedDocumentCookie = c.ze.cookie);
                          }),
                          c
                        );
                      }
                      o.Cookies = o && "object" == typeof o.document ? t(o) : t;
                    })(),
                    (function () {
                      "use strict";
                      var t = o,
                        l = "invalid",
                        f = "undefined" != typeof ArrayBuffer,
                        r = "0123456789abcdef".split(""),
                        i = [-2147483648, 8388608, 32768, 128],
                        h = [24, 16, 8, 0],
                        _ = [
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
                        n = [];
                      function d(t) {
                        t
                          ? ((n[0] = n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0),
                            (this.blocks = n))
                          : (this.blocks = [
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                            ]),
                          (this.h0 = 1779033703),
                          (this.h1 = 3144134277),
                          (this.h2 = 1013904242),
                          (this.h3 = 2773480762),
                          (this.h4 = 1359893119),
                          (this.h5 = 2600822924),
                          (this.h6 = 528734635),
                          (this.h7 = 1541459225),
                          (this.block = this.start = this.bytes = this.hBytes = 0),
                          (this.finalized = this.hashed = !1),
                          (this.first = !0);
                      }
                      function s(t, n) {
                        var i = typeof t;
                        if ("string" == i) {
                          for (
                            var s, e = [], c = t.length, a = 0, o = 0;
                            o < c;
                            ++o
                          )
                            (s = t.charCodeAt(o)) < 128
                              ? (e[a++] = s)
                              : (s < 2048
                                  ? (e[a++] = 192 | (s >> 6))
                                  : (s < 55296 || 57344 <= s
                                      ? (e[a++] = 224 | (s >> 12))
                                      : ((s =
                                          65536 +
                                          (((1023 & s) << 10) |
                                            (1023 & t.charCodeAt(++o)))),
                                        (e[a++] = 240 | (s >> 18)),
                                        (e[a++] = 128 | ((s >> 12) & 63))),
                                    (e[a++] = 128 | ((s >> 6) & 63))),
                                (e[a++] = 128 | (63 & s)));
                          t = e;
                        } else {
                          if ("object" != i) throw new Error(l);
                          if (null === t) throw new Error(l);
                          if (f && t.constructor === ArrayBuffer)
                            t = new Uint8Array(t);
                          else if (
                            !(Array.isArray(t) || (f && ArrayBuffer.isView(t)))
                          )
                            throw new Error(l);
                        }
                        64 < t.length && (t = new d(!0).update(t).digest());
                        for (var r = [], h = [], o = 0; o < 64; ++o) {
                          var u = t[o] || 0;
                          (r[o] = 92 ^ u), (h[o] = 54 ^ u);
                        }
                        d.call(this, n),
                          this.update(h),
                          (this.oKeyPad = r),
                          (this.inner = !0),
                          (this.memory = n);
                      }
                      Array.isArray ||
                        (Array.isArray = function (t) {
                          return (
                            "[object Array]" ===
                            Object.prototype.toString.call(t)
                          );
                        }),
                        f &&
                          !ArrayBuffer.isView &&
                          (ArrayBuffer.isView = function (t) {
                            return (
                              "object" == typeof t &&
                              t.buffer &&
                              t.buffer.constructor === ArrayBuffer
                            );
                          }),
                        (d.prototype.update = function (t) {
                          if (!this.finalized) {
                            var n,
                              i = typeof t;
                            if ("string" != i) {
                              if ("object" != i) throw new Error(l);
                              if (null === t) throw new Error(l);
                              if (f && t.constructor === ArrayBuffer)
                                t = new Uint8Array(t);
                              else if (
                                !(
                                  Array.isArray(t) ||
                                  (f && ArrayBuffer.isView(t))
                                )
                              )
                                throw new Error(l);
                              n = !0;
                            }
                            for (
                              var s, e, c = 0, a = t.length, o = this.blocks;
                              c < a;

                            ) {
                              if (
                                (this.hashed &&
                                  ((this.hashed = !1),
                                  (o[0] = this.block),
                                  (o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0)),
                                n)
                              )
                                for (e = this.start; c < a && e < 64; ++c)
                                  o[e >> 2] |= t[c] << h[3 & e++];
                              else
                                for (e = this.start; c < a && e < 64; ++c)
                                  (s = t.charCodeAt(c)) < 128
                                    ? (o[e >> 2] |= s << h[3 & e++])
                                    : (s < 2048
                                        ? (o[e >> 2] |=
                                            (192 | (s >> 6)) << h[3 & e++])
                                        : (s < 55296 || 57344 <= s
                                            ? (o[e >> 2] |=
                                                (224 | (s >> 12)) << h[3 & e++])
                                            : ((s =
                                                65536 +
                                                (((1023 & s) << 10) |
                                                  (1023 & t.charCodeAt(++c)))),
                                              (o[e >> 2] |=
                                                (240 | (s >> 18)) <<
                                                h[3 & e++]),
                                              (o[e >> 2] |=
                                                (128 | ((s >> 12) & 63)) <<
                                                h[3 & e++])),
                                          (o[e >> 2] |=
                                            (128 | ((s >> 6) & 63)) <<
                                            h[3 & e++])),
                                      (o[e >> 2] |=
                                        (128 | (63 & s)) << h[3 & e++]));
                              (this.lastByteIndex = e),
                                (this.bytes += e - this.start),
                                64 <= e
                                  ? ((this.block = o[16]),
                                    (this.start = e - 64),
                                    this.hash(),
                                    (this.hashed = !0))
                                  : (this.start = e);
                            }
                            return (
                              4294967295 < this.bytes &&
                                ((this.hBytes +=
                                  (this.bytes / 4294967296) << 0),
                                (this.bytes = this.bytes % 4294967296)),
                              this
                            );
                          }
                        }),
                        (d.prototype.finalize = function () {
                          var t, n;
                          this.finalized ||
                            ((this.finalized = !0),
                            (t = this.blocks),
                            (n = this.lastByteIndex),
                            (t[16] = this.block),
                            (t[n >> 2] |= i[3 & n]),
                            (this.block = t[16]),
                            56 <= n &&
                              (this.hashed || this.hash(),
                              (t[0] = this.block),
                              (t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0)),
                            (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                            (t[15] = this.bytes << 3),
                            this.hash());
                        }),
                        (d.prototype.hash = function () {
                          for (
                            var t,
                              n,
                              i,
                              s,
                              e,
                              c,
                              a,
                              o,
                              r = this.h0,
                              h = this.h1,
                              u = this.h2,
                              l = this.h3,
                              f = this.h4,
                              d = this.h5,
                              p = this.h6,
                              v = this.h7,
                              y = this.blocks,
                              m = 16;
                            m < 64;
                            ++m
                          )
                            (t =
                              (((s = y[m - 15]) >>> 7) | (s << 25)) ^
                              ((s >>> 18) | (s << 14)) ^
                              (s >>> 3)),
                              (n =
                                (((s = y[m - 2]) >>> 17) | (s << 15)) ^
                                ((s >>> 19) | (s << 13)) ^
                                (s >>> 10)),
                              (y[m] = (y[m - 16] + t + y[m - 7] + n) << 0);
                          for (o = h & u, m = 0; m < 64; m += 4)
                            this.first
                              ? ((e = 704751109),
                                (v =
                                  ((s = y[0] - 210244248) - 1521486534) << 0),
                                (l = (s + 143694565) << 0),
                                (this.first = !1))
                              : ((t =
                                  ((r >>> 2) | (r << 30)) ^
                                  ((r >>> 13) | (r << 19)) ^
                                  ((r >>> 22) | (r << 10))),
                                (i = (e = r & h) ^ (r & u) ^ o),
                                (v =
                                  (l +
                                    (s =
                                      v +
                                      (n =
                                        ((f >>> 6) | (f << 26)) ^
                                        ((f >>> 11) | (f << 21)) ^
                                        ((f >>> 25) | (f << 7))) +
                                      ((f & d) ^ (~f & p)) +
                                      _[m] +
                                      y[m])) <<
                                  0),
                                (l = (s + (t + i)) << 0)),
                              (t =
                                ((l >>> 2) | (l << 30)) ^
                                ((l >>> 13) | (l << 19)) ^
                                ((l >>> 22) | (l << 10))),
                              (i = (c = l & r) ^ (l & h) ^ e),
                              (p =
                                (u +
                                  (s =
                                    p +
                                    (n =
                                      ((v >>> 6) | (v << 26)) ^
                                      ((v >>> 11) | (v << 21)) ^
                                      ((v >>> 25) | (v << 7))) +
                                    ((v & f) ^ (~v & d)) +
                                    _[m + 1] +
                                    y[m + 1])) <<
                                0),
                              (t =
                                (((u = (s + (t + i)) << 0) >>> 2) | (u << 30)) ^
                                ((u >>> 13) | (u << 19)) ^
                                ((u >>> 22) | (u << 10))),
                              (i = (a = u & l) ^ (u & r) ^ c),
                              (d =
                                (h +
                                  (s =
                                    d +
                                    (n =
                                      ((p >>> 6) | (p << 26)) ^
                                      ((p >>> 11) | (p << 21)) ^
                                      ((p >>> 25) | (p << 7))) +
                                    ((p & v) ^ (~p & f)) +
                                    _[m + 2] +
                                    y[m + 2])) <<
                                0),
                              (t =
                                (((h = (s + (t + i)) << 0) >>> 2) | (h << 30)) ^
                                ((h >>> 13) | (h << 19)) ^
                                ((h >>> 22) | (h << 10))),
                              (i = (o = h & u) ^ (h & l) ^ a),
                              (f =
                                (r +
                                  (s =
                                    f +
                                    (n =
                                      ((d >>> 6) | (d << 26)) ^
                                      ((d >>> 11) | (d << 21)) ^
                                      ((d >>> 25) | (d << 7))) +
                                    ((d & p) ^ (~d & v)) +
                                    _[m + 3] +
                                    y[m + 3])) <<
                                0),
                              (r = (s + (t + i)) << 0);
                          (this.h0 = (this.h0 + r) << 0),
                            (this.h1 = (this.h1 + h) << 0),
                            (this.h2 = (this.h2 + u) << 0),
                            (this.h3 = (this.h3 + l) << 0),
                            (this.h4 = (this.h4 + f) << 0),
                            (this.h5 = (this.h5 + d) << 0),
                            (this.h6 = (this.h6 + p) << 0),
                            (this.h7 = (this.h7 + v) << 0);
                        }),
                        (d.prototype.toString = d.prototype.hex = function () {
                          this.finalize();
                          var t = this.h0,
                            n = this.h1,
                            i = this.h2,
                            s = this.h3,
                            e = this.h4,
                            c = this.h5,
                            a = this.h6,
                            o = this.h7;
                          return (
                            r[(t >> 28) & 15] +
                            r[(t >> 24) & 15] +
                            r[(t >> 20) & 15] +
                            r[(t >> 16) & 15] +
                            r[(t >> 12) & 15] +
                            r[(t >> 8) & 15] +
                            r[(t >> 4) & 15] +
                            r[15 & t] +
                            r[(n >> 28) & 15] +
                            r[(n >> 24) & 15] +
                            r[(n >> 20) & 15] +
                            r[(n >> 16) & 15] +
                            r[(n >> 12) & 15] +
                            r[(n >> 8) & 15] +
                            r[(n >> 4) & 15] +
                            r[15 & n] +
                            r[(i >> 28) & 15] +
                            r[(i >> 24) & 15] +
                            r[(i >> 20) & 15] +
                            r[(i >> 16) & 15] +
                            r[(i >> 12) & 15] +
                            r[(i >> 8) & 15] +
                            r[(i >> 4) & 15] +
                            r[15 & i] +
                            r[(s >> 28) & 15] +
                            r[(s >> 24) & 15] +
                            r[(s >> 20) & 15] +
                            r[(s >> 16) & 15] +
                            r[(s >> 12) & 15] +
                            r[(s >> 8) & 15] +
                            r[(s >> 4) & 15] +
                            r[15 & s] +
                            r[(e >> 28) & 15] +
                            r[(e >> 24) & 15] +
                            r[(e >> 20) & 15] +
                            r[(e >> 16) & 15] +
                            r[(e >> 12) & 15] +
                            r[(e >> 8) & 15] +
                            r[(e >> 4) & 15] +
                            r[15 & e] +
                            r[(c >> 28) & 15] +
                            r[(c >> 24) & 15] +
                            r[(c >> 20) & 15] +
                            r[(c >> 16) & 15] +
                            r[(c >> 12) & 15] +
                            r[(c >> 8) & 15] +
                            r[(c >> 4) & 15] +
                            r[15 & c] +
                            r[(a >> 28) & 15] +
                            r[(a >> 24) & 15] +
                            r[(a >> 20) & 15] +
                            r[(a >> 16) & 15] +
                            r[(a >> 12) & 15] +
                            r[(a >> 8) & 15] +
                            r[(a >> 4) & 15] +
                            r[15 & a] +
                            r[(o >> 28) & 15] +
                            r[(o >> 24) & 15] +
                            r[(o >> 20) & 15] +
                            r[(o >> 16) & 15] +
                            r[(o >> 12) & 15] +
                            r[(o >> 8) & 15] +
                            r[(o >> 4) & 15] +
                            r[15 & o]
                          );
                        }),
                        (d.prototype.digest = function () {
                          this.finalize();
                          var t = this.h0,
                            n = this.h1,
                            i = this.h2,
                            s = this.h3,
                            e = this.h4,
                            c = this.h5,
                            a = this.h6,
                            o = this.h7;
                          return [
                            (t >> 24) & 255,
                            (t >> 16) & 255,
                            (t >> 8) & 255,
                            255 & t,
                            (n >> 24) & 255,
                            (n >> 16) & 255,
                            (n >> 8) & 255,
                            255 & n,
                            (i >> 24) & 255,
                            (i >> 16) & 255,
                            (i >> 8) & 255,
                            255 & i,
                            (s >> 24) & 255,
                            (s >> 16) & 255,
                            (s >> 8) & 255,
                            255 & s,
                            (e >> 24) & 255,
                            (e >> 16) & 255,
                            (e >> 8) & 255,
                            255 & e,
                            (c >> 24) & 255,
                            (c >> 16) & 255,
                            (c >> 8) & 255,
                            255 & c,
                            (a >> 24) & 255,
                            (a >> 16) & 255,
                            (a >> 8) & 255,
                            255 & a,
                            (o >> 24) & 255,
                            (o >> 16) & 255,
                            (o >> 8) & 255,
                            255 & o,
                          ];
                        }),
                        ((s.prototype = new d()).finalize = function () {
                          var t;
                          d.prototype.finalize.call(this),
                            this.inner &&
                              ((this.inner = !1),
                              (t = this.digest()),
                              d.call(this, this.memory),
                              this.update(this.oKeyPad),
                              this.update(t),
                              d.prototype.finalize.call(this));
                        });
                      var e =
                        ((c.create = function () {
                          return new d();
                        }),
                        (c.update = function (t) {
                          return c.create().update(t);
                        }),
                        c);
                      function c(t) {
                        return new d(!0).update(t).hex();
                      }
                      function a(t, n) {
                        return new s(t, !0).update(n).hex();
                      }
                      ((e.sha256 = e).sha256.hmac =
                        ((a.create = function (t) {
                          return new s(t);
                        }),
                        (a.update = function (t, n) {
                          return a.create(t).update(n);
                        }),
                        a)),
                        (t.sha256 = e.sha256);
                    })(),
                    this.Ae(),
                    this.K(n),
                    this.Ie(n, o),
                    (this.Config = new e(this)),
                    (this.Schedule = new a(this)),
                    (this.Listener = new h(this)),
                    (this.Socket = new l(this)),
                    (this.Stream = new d(this)),
                    (this.Storage = new y(this)),
                    (this.Browsing = new A(this)),
                    (this.Call = new I(this)),
                    (this.Message = new _(this)),
                    (this.Session = new w(this)),
                    (this.Website = new k(this)),
                    (this.Bucket = new F(this)),
                    (this.Media = new C(this)),
                    (this.Helpdesk = new z(this)),
                    (this.Trigger = new T(this)),
                    (this.Issue = new U(this)),
                    this.it(),
                    !0 === n.connect_socket && this.socket.connect();
                }),
                (t.prototype.Ae = function () {
                  this.Z();
                }),
                (t.prototype.Z = function () {
                  delete this.environment,
                    delete this.disable_autoload,
                    delete this.url_go,
                    delete this.website_domain,
                    delete this.website_id,
                    delete this.token_id,
                    delete this.cookie_expire,
                    delete this.cookie_domain,
                    delete this.platform_name,
                    delete this.platform_signature_key,
                    delete this.runtime_configuration,
                    delete this.device;
                }),
                (t.prototype.K = function (t) {
                  t &&
                    t.environment &&
                    (this.environment = t.environment || "development"),
                    t &&
                      t.disable_autoload &&
                      (this.disable_autoload = t.disable_autoload),
                    t && t.url_go && (this.url_go = t.url_go),
                    t &&
                      t.website_domain &&
                      (this.website_domain = t.website_domain),
                    t && t.website_id && (this.website_id = t.website_id),
                    t && t.token_id && (this.token_id = t.token_id),
                    t &&
                      t.cookie_expire &&
                      (this.cookie_expire = t.cookie_expire),
                    t &&
                      t.cookie_domain &&
                      (this.cookie_domain = t.cookie_domain),
                    t &&
                      t.platform_name &&
                      (this.platform_name = t.platform_name),
                    t &&
                      t.platform_signature_key &&
                      (this.platform_signature_key = t.platform_signature_key),
                    t &&
                      t.runtime_configuration &&
                      (this.runtime_configuration = t.runtime_configuration),
                    (this.device = {}),
                    t && t.useragent && (this.device.useragent = t.useragent),
                    t && t.timezone && (this.device.timezone = t.timezone),
                    t &&
                      t.capabilities &&
                      (this.device.capabilities = t.capabilities),
                    t && t.locales && (this.device.locales = t.locales);
                }),
                (t.prototype.Ie = function (t, n) {
                  var i = ["websocket"];
                  (this.event = n.PubSub),
                    (this.socket = n.io(t.url_relay_client, {
                      path: t.website_id ? "/" + t.website_id + "/" : "/",
                      transports: i,
                      autoConnect: !1,
                      timeout: 25e3,
                      reconnectionDelay: 15e3,
                      reconnectionDelayMax: 6e4,
                      reconnectionAttempts: 5,
                      randomizationFactor: 0.5,
                    })),
                    (this.stream = n.io(t.url_relay_stream, {
                      path: "/",
                      transports: i,
                      reconnection: !1,
                      autoConnect: !1,
                    })),
                    (this.cookie = n.Cookies(window)),
                    (this.sha256 = n.sha256);
                }),
                (t.prototype.it = function () {
                  var t = this;
                  this.Listener.add_event(
                    "index",
                    "window",
                    "unload",
                    function () {
                      !0 === t.socket.connected && t.socket.disconnect(),
                        !0 === t.stream.connected && t.stream.disconnect();
                    }
                  ),
                    this.Listener.add_event(
                      "index",
                      "window",
                      "popstate",
                      function () {
                        t.De();
                      }
                    ),
                    "object" === d(window.history) &&
                      (this.Listener.apply_patch(
                        "index",
                        "window.history",
                        "pushState",
                        window.history,
                        function () {
                          t.De();
                        }
                      ),
                      this.Listener.apply_patch(
                        "index",
                        "window.history",
                        "replaceState",
                        window.history,
                        function () {
                          t.De();
                        }
                      ));
                }),
                (t.prototype.De = function () {
                  this.Session.send_device(),
                    this.event.publish("window:history", {
                      page_url: document.location.href,
                      page_domain: document.location.hostname,
                    });
                }),
                t
              );
            })()),
            (n.CrispLibraryClient = new i());
          var p = {
            client: function (t) {
              var d = [];
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l, f) {
                  d.push(
                    '<div class="crisp-client"><div class="cc-l3zb"></div><div id="crisp-chatbox"' +
                      g.Library.jade.runtime.attr("lang", "" + o, !0, !1) +
                      g.Library.jade.runtime.attr("dir", "" + i, !0, !1) +
                      ' translate="no"' +
                      g.Library.jade.runtime.attr(
                        "data-blocked",
                        "" + n,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-lock-maximized",
                        "" + u,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-last-operator-face",
                        "" + h,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-availability-tooltip",
                        "" + t,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-hide-vacation",
                        "" + a,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-hide-on-away",
                        "" + e,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-hide-on-mobile",
                        "" + c,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-position-reverse",
                        "" + l,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-full-view",
                        "" + s,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-small-view",
                        "" + f,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr(
                        "data-large-view",
                        "" + r,
                        !0,
                        !1
                      ) +
                      ' data-availability="none" data-is-activity-ongoing="false" data-was-availability-online="false" data-has-local-messages="false" class="cc-kv6t"></div></div>'
                  );
                }.call(
                  this,
                  "availability_tooltip" in (t = t || {})
                    ? t.availability_tooltip
                    : "undefined" != typeof availability_tooltip
                    ? availability_tooltip
                    : void 0,
                  "blocked" in t
                    ? t.blocked
                    : "undefined" != typeof blocked
                    ? blocked
                    : void 0,
                  "direction" in t
                    ? t.direction
                    : "undefined" != typeof direction
                    ? direction
                    : void 0,
                  "full_view" in t
                    ? t.full_view
                    : "undefined" != typeof full_view
                    ? full_view
                    : void 0,
                  "hide_on_away" in t
                    ? t.hide_on_away
                    : "undefined" != typeof hide_on_away
                    ? hide_on_away
                    : void 0,
                  "hide_on_mobile" in t
                    ? t.hide_on_mobile
                    : "undefined" != typeof hide_on_mobile
                    ? hide_on_mobile
                    : void 0,
                  "hide_vacation" in t
                    ? t.hide_vacation
                    : "undefined" != typeof hide_vacation
                    ? hide_vacation
                    : void 0,
                  "lang" in t
                    ? t.lang
                    : "undefined" != typeof lang
                    ? lang
                    : void 0,
                  "large_view" in t
                    ? t.large_view
                    : "undefined" != typeof large_view
                    ? large_view
                    : void 0,
                  "last_operator_face" in t
                    ? t.last_operator_face
                    : "undefined" != typeof last_operator_face
                    ? last_operator_face
                    : void 0,
                  "lock_maximized" in t
                    ? t.lock_maximized
                    : "undefined" != typeof lock_maximized
                    ? lock_maximized
                    : void 0,
                  "position_reverse" in t
                    ? t.position_reverse
                    : "undefined" != typeof position_reverse
                    ? position_reverse
                    : void 0,
                  "small_view" in t
                    ? t.small_view
                    : "undefined" != typeof small_view
                    ? small_view
                    : void 0
                ),
                d.join("")
              );
            },
            viewport: function (t) {
              var n = [];
              return (
                function (t) {
                  n.push(
                    '<meta name="viewport"' +
                      g.Library.jade.runtime.attr("content", "" + t, !0, !1) +
                      "/>"
                  );
                }.call(
                  this,
                  "content" in (t = t || {})
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0
                ),
                n.join("")
              );
            },
            clear: function () {
              var t = [];
              return t.push('<span class="cc-iuse"></span>'), t.join("");
            },
            style_color: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<div class="cc-lcor"><style type="text/css">.crisp-client .cc-kv6t .cc-6zjc,\n.crisp-client .cc-kv6t .cc-1mk2:hover {\n  color: ' +
                      g.Library.jade.runtime.escape(
                        null == (n = t.reverse.hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-10m9,\n.crisp-client .cc-kv6t .cc-17tf:hover {\n  color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-dkda,\n.crisp-client .cc-kv6t .cc-r4ie:hover {\n  color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[700].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-jq4y,\n.crisp-client .cc-kv6t .cc-5lan:hover {\n  color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-k5w4 {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t.reverse.hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-5ekd {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-16jc {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[600].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1ada,\n.crisp-client .cc-kv6t .cc-ew5j:before,\n.crisp-client .cc-kv6t .cc-ew5j:after {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-y5jx {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[20].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-y6ot,\n.crisp-client .cc-kv6t .cc-183m:hover {\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[10].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1ybb {\n  background-image: linear-gradient(125deg, " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      " -10%, " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].hex) ? "" : n
                      ) +
                      " 100%) !important;\n}\n\n.crisp-client .cc-kv6t .cc-ofgq,\n.crisp-client .cc-kv6t .cc-fg2d:hover {\n  border-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t.reverse.hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-2ydi {\n  border-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].rgba(0.175)) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1aev,\n.crisp-client .cc-kv6t .cc-2hzo:hover,\n.crisp-client .cc-kv6t .cc-18sf:before,\n.crisp-client .cc-kv6t .cc-18sf:after {\n  border-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1nph {\n  border-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].rgba(0.15)) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1o96 {\n  border-top-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-ve3u,\n.crisp-client .cc-kv6t .cc-1nmg:hover {\n  border-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[20].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-clw4::placeholder {\n  color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[200].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-2n8m::placeholder {\n  color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[200].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-3x4f,\n.crisp-client .cc-kv6t .cc-1afs:hover,\n.crisp-client .cc-kv6t .cc-3x4f:hover,\n.crisp-client .cc-kv6t .cc-1afs:active,\n.crisp-client .cc-kv6t .cc-3x4f:active,\n.crisp-client .cc-kv6t .cc-1c1d:hover .cc-1f87,\n.crisp-client .cc-kv6t .cc-1c1d .cc-1f87:active {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-4xbu,\n.crisp-client .cc-kv6t .cc-caj5:hover {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[700].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-4xbu:hover,\n.crisp-client .cc-kv6t .cc-caj5:active {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[800].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-4xbu:active {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[900].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-g73w:hover .cc-199t {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[700].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-g73w .cc-199t:active {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[800].hex) ? "" : n
                      ) +
                      ' !important;\n}\n\n.crisp-client .cc-kv6t .cc-vuur,\n.crisp-client .cc-kv6t .cc-7rgf[data-active="true"] {\n  background: ' +
                      g.Library.jade.runtime.escape(
                        null == (n = t[500].hex) ? "" : n
                      ) +
                      ' !important;\n}\n\n.crisp-client .cc-kv6t .cc-vuur:hover,\n.crisp-client .cc-kv6t .cc-7rgf[data-active="true"]:active {\n  background: ' +
                      g.Library.jade.runtime.escape(
                        null == (n = t[600].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-vuur:active {\n  background: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[700].hex) ? "" : n
                      ) +
                      " !important;\n}\n\n.crisp-client .cc-kv6t .cc-1gmp::selection,\n.crisp-client .cc-kv6t .cc-1gmp *::selection {\n  color: #191919 !important;\n  background-color: " +
                      g.Library.jade.runtime.escape(
                        null == (n = t[100].hex) ? "" : n
                      ) +
                      " !important;\n}</style></div>"
                  );
                }.call(
                  this,
                  "colors" in (t = t || {})
                    ? t.colors
                    : "undefined" != typeof colors
                    ? colors
                    : void 0
                ),
                i.join("")
              );
            },
            style_other: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    '<div class="cc-1kny"><style type="text/css">.crisp-client .cc-kv6t {\n  z-index: ' +
                      g.Library.jade.runtime.escape(null == (i = t) ? "" : i) +
                      ";\n}\n</style>"
                  ),
                    !1 === n &&
                      s.push(
                        '<style type="text/css">.crisp-client .cc-kv6t .cc-1xry .cc-ge4v .cc-bdff .cc-x32x .cc-1j74 .cc-ujtk {\n  display: none !important;\n}</style>'
                      ),
                    s.push("</div>");
                }.call(
                  this,
                  "container_index" in (t = t || {})
                    ? t.container_index
                    : "undefined" != typeof container_index
                    ? container_index
                    : void 0,
                  "show_operator_count" in t
                    ? t.show_operator_count
                    : "undefined" != typeof show_operator_count
                    ? show_operator_count
                    : void 0
                ),
                s.join("")
              );
            },
            style_position: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push('<div class="cc-1wmh">'),
                    t.default_button_horizontal &&
                      i.push(
                        '<style type="text/css">.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="false"] .cc-1xry .cc-unoo,\n.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="false"] .cc-1xry .cc-ge4v {\n  margin-right: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="false"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-right: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="true"] .cc-1xry .cc-unoo,\n.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="true"] .cc-1xry .cc-ge4v {\n  margin-left: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="false"][data-position-reverse="true"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-left: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_horizontal) ? "" : n
                          ) +
                          "px !important;\n}\n</style>"
                      ),
                    t.default_button_vertical &&
                      i.push(
                        '<style type="text/css">.crisp-client .cc-kv6t[data-full-view="false"] .cc-1xry .cc-unoo,\n.crisp-client .cc-kv6t[data-full-view="false"] .cc-1xry .cc-ge4v {\n  margin-bottom: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_vertical) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="false"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-bottom: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.default_button_vertical) ? "" : n
                          ) +
                          "px !important;\n}\n</style>"
                      ),
                    t.mobile_button_horizontal &&
                      i.push(
                        '<style type="text/css">.crisp-client .cc-kv6t[data-full-view="true"][data-position-reverse="false"] .cc-1xry .cc-unoo {\n  margin-right: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="true"][data-position-reverse="false"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-right: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="true"][data-position-reverse="true"] .cc-1xry .cc-unoo {\n  margin-left: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_horizontal) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="true"][data-position-reverse="true"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-left: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_horizontal) ? "" : n
                          ) +
                          "px !important;\n}\n</style>"
                      ),
                    t.mobile_button_vertical &&
                      i.push(
                        '<style type="text/css">.crisp-client .cc-kv6t[data-full-view="true"] .cc-1xry .cc-unoo {\n  margin-bottom: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_vertical) ? "" : n
                          ) +
                          'px !important;\n}\n\n.crisp-client .cc-kv6t[data-full-view="true"] .cc-1xry .cc-unoo .cc-1c9v .cc-1bue {\n  margin-bottom: ' +
                          g.Library.jade.runtime.escape(
                            null == (n = t.mobile_button_vertical) ? "" : n
                          ) +
                          "px !important;\n}</style>"
                      ),
                    i.push("</div>");
                }.call(
                  this,
                  "position" in (t = t || {})
                    ? t.position
                    : "undefined" != typeof position
                    ? position
                    : void 0
                ),
                i.join("")
              );
            },
            new_line: function () {
              var t = [];
              return t.push('<br class="cc-1yy7"/>'), t.join("");
            },
            link_phone: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    "<a" +
                      g.Library.jade.runtime.attr("href", "tel:" + t, !1, !1) +
                      ' class="cc-w8bm cc-kbw4">' +
                      (null == (n = t) ? "" : n) +
                      "</a>"
                  );
                }.call(
                  this,
                  "phone" in (t = t || {})
                    ? t.phone
                    : "undefined" != typeof phone
                    ? phone
                    : void 0
                ),
                i.join("")
              );
            },
            link_email: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    "<a" +
                      g.Library.jade.runtime.attr(
                        "href",
                        "mailto:" + t,
                        !1,
                        !1
                      ) +
                      ' class="cc-w8bm cc-1tbt">' +
                      (null == (n = t) ? "" : n) +
                      "</a>"
                  );
                }.call(
                  this,
                  "email" in (t = t || {})
                    ? t.email
                    : "undefined" != typeof email
                    ? email
                    : void 0
                ),
                i.join("")
              );
            },
            link_uri: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    "<a" +
                      g.Library.jade.runtime.attr("href", "" + n, !1, !1) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-w8bm cc-tn3x">' +
                      (null == (i = t) ? "" : i) +
                      "</a>"
                  );
                }.call(
                  this,
                  "uri_name" in (t = t || {})
                    ? t.uri_name
                    : "undefined" != typeof uri_name
                    ? uri_name
                    : void 0,
                  "uri_value" in t
                    ? t.uri_value
                    : "undefined" != typeof uri_value
                    ? uri_value
                    : void 0
                ),
                s.join("")
              );
            },
            link_domain: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    "<a" +
                      g.Library.jade.runtime.attr(
                        "href",
                        "http://" + n + "/",
                        !1,
                        !1
                      ) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-w8bm cc-1vy9">' +
                      (null == (i = t) ? "" : i) +
                      "</a>"
                  );
                }.call(
                  this,
                  "domain_name" in (t = t || {})
                    ? t.domain_name
                    : "undefined" != typeof domain_name
                    ? domain_name
                    : void 0,
                  "domain_value" in t
                    ? t.domain_value
                    : "undefined" != typeof domain_value
                    ? domain_value
                    : void 0
                ),
                s.join("")
              );
            },
            markdown_blockquote: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-i0y3">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_color: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    "<span" +
                      g.Library.jade.runtime.attr(
                        "style",
                        "color: " + t + " !important;",
                        !0,
                        !1
                      ) +
                      ' class="cc-rxbq cc-ffl9">' +
                      (null == (i = n) ? "" : i) +
                      "</span>"
                  );
                }.call(
                  this,
                  "type" in (t = t || {})
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                s.join("")
              );
            },
            markdown_bold: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-1a3u cc-151q">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_code_inline: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-1pni cc-15fv cc-y5jx">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_code_block: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-1pni cc-1yj2 cc-y5jx">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_delete: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-xs0r">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_highlight: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-12z0">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_emphasis: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-9ky1 cc-151q">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_image: function (t) {
              var e = [];
              return (
                function (t, n, i, s) {
                  e.push(""),
                    (s = t(s)),
                    e.push(
                      '<span class="cc-rxbq cc-1nuy"><img' +
                        g.Library.jade.runtime.attr(
                          "src",
                          i + "/process/original/?url=" + s,
                          !1,
                          !1
                        ) +
                        g.Library.jade.runtime.attr("alt", "" + n, !1, !1) +
                        "/></span>"
                    );
                }.call(
                  this,
                  "encodeURIComponent" in (t = t || {})
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "url_crisp_image" in t
                    ? t.url_crisp_image
                    : "undefined" != typeof url_crisp_image
                    ? url_crisp_image
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                e.join("")
              );
            },
            markdown_interpolate: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    '<span class="cc-rxbq cc-lpfn">{{ ' +
                      g.Library.jade.runtime.escape(null == (i = t) ? "" : i) +
                      g.Library.jade.runtime.escape(
                        null == (i = n ? ' | "' + n + '"' : "") ? "" : i
                      ) +
                      " }}</span>"
                  );
                }.call(
                  this,
                  "type" in (t = t || {})
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                s.join("")
              );
            },
            markdown_italic: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-1afx">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_line: function () {
              var t = [];
              return (
                t.push('<span class="cc-rxbq cc-11yu"></span>'), t.join("")
              );
            },
            markdown_link: function (t) {
              var s,
                e = [];
              return (
                function (t, n, i) {
                  e.push(
                    "<a" +
                      g.Library.jade.runtime.attr(
                        "href",
                        "" + t.filter_link_safe(i),
                        !1,
                        !1
                      ) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-rxbq cc-hsr1">' +
                      (null == (s = n) ? "" : s) +
                      "</a>"
                  );
                }.call(
                  this,
                  "methods" in (t = t || {})
                    ? t.methods
                    : "undefined" != typeof methods
                    ? methods
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                e.join("")
              );
            },
            markdown_list: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    "<span" +
                      g.Library.jade.runtime.attr("data-type", "" + t, !1, !1) +
                      ' class="cc-rxbq cc-u7eq">' +
                      (null == (i = n) ? "" : i) +
                      "</span>"
                  );
                }.call(
                  this,
                  "type" in (t = t || {})
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                s.join("")
              );
            },
            markdown_title: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    "<span" +
                      g.Library.jade.runtime.attr("data-type", "" + t, !1, !1) +
                      ' class="cc-rxbq cc-1gez cc-151q">' +
                      (null == (i = n) ? "" : i) +
                      "</span>"
                  );
                }.call(
                  this,
                  "type" in (t = t || {})
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                s.join("")
              );
            },
            markdown_underline: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span class="cc-rxbq cc-dp0e">' +
                      (null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "value" in (t = t || {})
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                i.join("")
              );
            },
            markdown_youtube: function (t) {
              var c = [];
              return (
                function (t, n, i, s) {
                  c.push("");
                  var e =
                      "https://www.youtube.com/embed/" +
                      t(s) +
                      "?autoplay=1&rel=0",
                    s = t(
                      "https://img.youtube.com/vi/" + t(s) + "/hqdefault.jpg"
                    );
                  c.push(
                    "<a" +
                      g.Library.jade.runtime.attr("href", e, !0, !1) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-rxbq cc-1fry cc-cep7"><span class="cc-d4zh cc-xxo7 cc-94yb cc-1c2b"><img' +
                      g.Library.jade.runtime.attr(
                        "src",
                        i +
                          "/process/resize/?url=" +
                          s +
                          "&width=960&height=960",
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr("alt", "" + n, !0, !1) +
                      "/></span></a>"
                  );
                }.call(
                  this,
                  "encodeURIComponent" in (t = t || {})
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "url_crisp_image" in t
                    ? t.url_crisp_image
                    : "undefined" != typeof url_crisp_image
                    ? url_crisp_image
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                c.join("")
              );
            },
            markdown_vimeo: function (t) {
              var s,
                e = [];
              return (
                function (t, n, i) {
                  e.push(""),
                    (i = "https://vimeo.com/" + t(i) + "?autoplay=1"),
                    e.push(
                      "<a" +
                        g.Library.jade.runtime.attr("href", i, !1, !1) +
                        ' rel="noopener noreferrer" target="_blank" class="cc-w8bm cc-tn3x">' +
                        (null == (s = n || i) ? "" : s) +
                        "</a>"
                    );
                }.call(
                  this,
                  "encodeURIComponent" in (t = t || {})
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                e.join("")
              );
            },
            markdown_dailymotion: function (t) {
              var c = [];
              return (
                function (t, n, i, s) {
                  c.push("");
                  var e = "https://www.dailymotion.com/embed/video/" + t(s),
                    s = t(
                      "https://www.dailymotion.com/thumbnail/video/" + t(s)
                    );
                  c.push(
                    "<a" +
                      g.Library.jade.runtime.attr("href", e, !0, !1) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-rxbq cc-1fry cc-1taz"><span class="cc-d4zh cc-168u cc-94yb cc-1c2b"><img' +
                      g.Library.jade.runtime.attr(
                        "src",
                        i +
                          "/process/resize/?url=" +
                          s +
                          "&width=320&height=240",
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr("alt", "" + n, !0, !1) +
                      "/></span></a>"
                  );
                }.call(
                  this,
                  "encodeURIComponent" in (t = t || {})
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "url_crisp_image" in t
                    ? t.url_crisp_image
                    : "undefined" != typeof url_crisp_image
                    ? url_crisp_image
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                c.join("")
              );
            },
            markdown_frame: function (t) {
              var s,
                e = [];
              return (
                function (t, n, i) {
                  e.push(
                    "<a" +
                      g.Library.jade.runtime.attr(
                        "href",
                        "" + t.filter_link_safe(i),
                        !1,
                        !1
                      ) +
                      ' rel="noopener noreferrer" target="_blank" class="cc-w8bm cc-tn3x">' +
                      (null == (s = n || i) ? "" : s) +
                      "</a>"
                  );
                }.call(
                  this,
                  "methods" in (t = t || {})
                    ? t.methods
                    : "undefined" != typeof methods
                    ? methods
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "value" in t
                    ? t.value
                    : "undefined" != typeof value
                    ? value
                    : void 0
                ),
                e.join("")
              );
            },
            smiley: function (t) {
              var i = [];
              return (
                function (t, n) {
                  i.push(
                    "<span" +
                      g.Library.jade.runtime.attr("data-size", n, !0, !1) +
                      g.Library.jade.runtime.attr("data-name", t, !0, !1) +
                      ' class="cc-tkf1"></span>'
                  );
                }.call(
                  this,
                  "name" in (t = t || {})
                    ? t.name
                    : "undefined" != typeof name
                    ? name
                    : void 0,
                  "size" in t
                    ? t.size
                    : "undefined" != typeof size
                    ? size
                    : void 0
                ),
                i.join("")
              );
            },
            magnify: function (t) {
              var e = [];
              return (
                function (t, n, i, s) {
                  e.push(
                    '<div tabindex="0"' +
                      g.Library.jade.runtime.attr("data-type", "" + s, !0, !1) +
                      ' data-state="loading" class="cc-1nn0"><span class="cc-a87x cc-1eqr"></span>'
                  ),
                    "embed" === s
                      ? e.push(
                          '<iframe type="text/html"' +
                            g.Library.jade.runtime.attr("src", "" + i, !0, !1) +
                            ' frameborder="0" sandbox="allow-popups allow-same-origin allow-scripts" class="cc-z6hh"></iframe>'
                        )
                      : e.push(
                          "<img" +
                            g.Library.jade.runtime.attr("src", "" + i, !0, !1) +
                            ' alt="" class="cc-z6hh"/>'
                        ),
                    e.push('<div class="cc-1sfm"><div class="cc-5gev">'),
                    t.previous &&
                      e.push(
                        '<a data-action="previous" role="button" class="cc-12xv"></a>'
                      ),
                    "file" === s &&
                      e.push(
                        '<a data-action="download"' +
                          g.Library.jade.runtime.attr("href", "" + i, !0, !1) +
                          g.Library.jade.runtime.attr(
                            "download",
                            "" + (n || i),
                            !0,
                            !1
                          ) +
                          ' rel="noopener noreferrer" target="_blank" class="cc-12xv"></a>'
                      ),
                    e.push(
                      '<a data-action="close" role="button" class="cc-12xv"></a>'
                    ),
                    t.next &&
                      e.push(
                        '<a data-action="next" role="button" class="cc-12xv"></a>'
                      ),
                    e.push("</div></div></div>");
                }.call(
                  this,
                  "fingerprints" in (t = t || {})
                    ? t.fingerprints
                    : "undefined" != typeof fingerprints
                    ? fingerprints
                    : void 0,
                  "name" in t
                    ? t.name
                    : "undefined" != typeof name
                    ? name
                    : void 0,
                  "source" in t
                    ? t.source
                    : "undefined" != typeof source
                    ? source
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0
                ),
                e.join("")
              );
            },
            article: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    '<div tabindex="0" data-state="loading" class="cc-k0ox"><span class="cc-ikw0 cc-1eqr"></span><div class="cc-12ru"><div class="cc-4k0k"><div class="cc-1ov4"><a role="button" class="cc-1o7o cc-151q">' +
                      g.Library.jade.runtime.escape(
                        null == (i = t("article", "controls_close")) ? "" : i
                      ) +
                      "</a><a" +
                      g.Library.jade.runtime.attr("href", n.url + "/", !0, !1) +
                      ' target="_blank" rel="noopener noreferrer" class="cc-16od cc-1ada cc-151q">' +
                      g.Library.jade.runtime.escape(
                        null == (i = t("article", "controls_view")) ? "" : i
                      ) +
                      '</a></div><div class="cc-1btj cc-y6ot"><iframe type="text/html"' +
                      g.Library.jade.runtime.attr(
                        "src",
                        n.url + "/reader/",
                        !0,
                        !1
                      ) +
                      ' frameborder="0" class="cc-q2us"></iframe></div></div></div></div>'
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "frame" in t
                    ? t.frame
                    : "undefined" != typeof frame
                    ? frame
                    : void 0
                ),
                s.join("")
              );
            },
            spotlight: function (t) {
              var s,
                e = [];
              return (
                function (t, n) {
                  e.push(
                    '<div tabindex="0" data-state="loaded" data-has-results="false" class="cc-1qlo"><div class="cc-1pql"><div class="cc-16yo"><form action="#" method="post" class="cc-1ipv">'
                  );
                  var i = t("spotlight", "search_form_field");
                  e.push(
                    '<span class="cc-1282 cc-1ada"><span class="cc-12t6 cc-1eqr"></span></span><input type="text" name="spotlight_query"' +
                      g.Library.jade.runtime.attr(
                        "placeholder",
                        "" + i,
                        !0,
                        !1
                      ) +
                      ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="100" class="cc-tdrg cc-clw4 cc-1lut cc-kgeu"/><span class="cc-4wnb cc-kgeu"></span><span class="cc-16kz cc-kgeu"></span></form><div class="cc-16io">'
                  ),
                    n &&
                      e.push(
                        '<ul class="cc-1fvn"><li data-type="close" class="cc-mn2r"><a role="button" class="cc-4obg cc-1o4r cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (s = t("spotlight", "action_close"))
                              ? ""
                              : s
                          ) +
                          '</a></li><li data-type="open" class="cc-mn2r cc-jq4y"><a' +
                          g.Library.jade.runtime.attr("href", "" + n, !0, !1) +
                          ' target="_blank" rel="noopener noreferrer" class="cc-4obg cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (s = t("spotlight", "action_open")) ? "" : s
                          ) +
                          "</a></li></ul>"
                      ),
                    e.push("</div></div></div></div>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "url" in t ? t.url : "undefined" != typeof url ? url : void 0
                ),
                e.join("")
              );
            },
            spotlight_results: function (t) {
              var r,
                h = [];
              return (
                function (e, c, a, o, t) {
                  h.push('<div class="cc-1u0c">'),
                    0 < o.length
                      ? (h.push('<ul class="cc-6716">'),
                        function () {
                          var t = o;
                          if ("number" == typeof t.length)
                            for (var n = 0, i = t.length; n < i; n++) {
                              var s = t[n];
                              h.push(
                                "<li" +
                                  g.Library.jade.runtime.attr(
                                    "data-locale",
                                    "" + s.locale,
                                    !0,
                                    !1
                                  ) +
                                  g.Library.jade.runtime.attr(
                                    "data-slug",
                                    "" + s.slug,
                                    !0,
                                    !1
                                  ) +
                                  ' class="cc-7rhc"><a' +
                                  g.Library.jade.runtime.attr(
                                    "href",
                                    "" +
                                      c +
                                      s.locale +
                                      "/article/" +
                                      s.slug +
                                      "/",
                                    !0,
                                    !1
                                  ) +
                                  ' target="_blank" rel="noopener noreferrer"' +
                                  g.Library.jade.runtime.attr(
                                    "data-active",
                                    !0 === a && 0 === n ? "true" : "false",
                                    !0,
                                    !1
                                  ) +
                                  ' class="cc-1h5e cc-7rgf"><span class="cc-bdl5 cc-151q">' +
                                  g.Library.jade.runtime.escape(
                                    null == (r = s.title) ? "" : r
                                  ) +
                                  '</span><span class="cc-1kt8 cc-kgeu">' +
                                  g.Library.jade.runtime.escape(
                                    null == (r = e("spotlight", "result_view"))
                                      ? ""
                                      : r
                                  ) +
                                  "</span></a></li>"
                              );
                            }
                          else
                            for (n in ((i = 0), t))
                              i++,
                                (s = t[n]),
                                h.push(
                                  "<li" +
                                    g.Library.jade.runtime.attr(
                                      "data-locale",
                                      "" + s.locale,
                                      !0,
                                      !1
                                    ) +
                                    g.Library.jade.runtime.attr(
                                      "data-slug",
                                      "" + s.slug,
                                      !0,
                                      !1
                                    ) +
                                    ' class="cc-7rhc"><a' +
                                    g.Library.jade.runtime.attr(
                                      "href",
                                      "" +
                                        c +
                                        s.locale +
                                        "/article/" +
                                        s.slug +
                                        "/",
                                      !0,
                                      !1
                                    ) +
                                    ' target="_blank" rel="noopener noreferrer"' +
                                    g.Library.jade.runtime.attr(
                                      "data-active",
                                      !0 === a && 0 === n ? "true" : "false",
                                      !0,
                                      !1
                                    ) +
                                    ' class="cc-1h5e cc-7rgf"><span class="cc-bdl5 cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null == (r = s.title) ? "" : r
                                    ) +
                                    '</span><span class="cc-1kt8 cc-kgeu">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (r = e("spotlight", "result_view"))
                                        ? ""
                                        : r
                                    ) +
                                    "</span></a></li>"
                                );
                        }.call(this),
                        h.push("</ul>"))
                      : h.push(
                          '<span class="cc-8qof cc-151q">' +
                            g.Library.jade.runtime.escape(
                              null == (r = e("spotlight", "result_empty"))
                                ? ""
                                : r
                            ) +
                            "</span>"
                        ),
                    h.push("</div>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "base_url" in t
                    ? t.base_url
                    : "undefined" != typeof base_url
                    ? base_url
                    : void 0,
                  "has_active" in t
                    ? t.has_active
                    : "undefined" != typeof has_active
                    ? has_active
                    : void 0,
                  "results" in t
                    ? t.results
                    : "undefined" != typeof results
                    ? results
                    : void 0,
                  "undefined" in t ? t.undefined : void 0
                ),
                h.join("")
              );
            },
            date_now: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="now" class="cc-1ho2">' +
                      g.Library.jade.runtime.escape(
                        null == (n = t("date", "now")) ? "" : n
                      ) +
                      "</span>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0
                ),
                i.join("")
              );
            },
            date_seconds: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="seconds" class="cc-1ho2">' +
                      g.Library.jade.runtime.escape(
                        null == (n = t("date", "second")) ? "" : n
                      ) +
                      "</span>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0
                ),
                i.join("")
              );
            },
            date_minutes: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push('<span data-type="minutes" class="cc-1ho2">'),
                    1 === n
                      ? s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("date", "minute_singular")) ? "" : i
                          )
                        )
                      : s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("date", "minute_plural", [n]))
                              ? ""
                              : i
                          )
                        ),
                    s.push("</span>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "minutes" in t
                    ? t.minutes
                    : "undefined" != typeof minutes
                    ? minutes
                    : void 0
                ),
                s.join("")
              );
            },
            date_hours: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push('<span data-type="hours" class="cc-1ho2">'),
                    1 === n
                      ? s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("date", "hour_singular")) ? "" : i
                          )
                        )
                      : s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("date", "hour_plural", [n])) ? "" : i
                          )
                        ),
                    s.push("</span>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "hours" in t
                    ? t.hours
                    : "undefined" != typeof hours
                    ? hours
                    : void 0
                ),
                s.join("")
              );
            },
            date_far_away: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="far_away" class="cc-1ho2">' +
                      g.Library.jade.runtime.escape(null == (n = t) ? "" : n) +
                      "</span>"
                  );
                }.call(
                  this,
                  "date_full" in (t = t || {})
                    ? t.date_full
                    : "undefined" != typeof date_full
                    ? date_full
                    : void 0
                ),
                i.join("")
              );
            },
            duration_now: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="now" class="cc-blao">' +
                      g.Library.jade.runtime.escape(
                        null == (n = t("duration", "now")) ? "" : n
                      ) +
                      "</span>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0
                ),
                i.join("")
              );
            },
            duration_seconds: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="seconds" class="cc-blao">' +
                      g.Library.jade.runtime.escape(
                        null == (n = t("duration", "second")) ? "" : n
                      ) +
                      "</span>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0
                ),
                i.join("")
              );
            },
            duration_minutes: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push('<span data-type="minutes" class="cc-blao">'),
                    1 === n
                      ? s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("duration", "minute_singular"))
                              ? ""
                              : i
                          )
                        )
                      : s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("duration", "minute_plural", [n]))
                              ? ""
                              : i
                          )
                        ),
                    s.push("</span>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "minutes" in t
                    ? t.minutes
                    : "undefined" != typeof minutes
                    ? minutes
                    : void 0
                ),
                s.join("")
              );
            },
            duration_hours: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push('<span data-type="hours" class="cc-blao">'),
                    1 === n
                      ? s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("duration", "hour_singular"))
                              ? ""
                              : i
                          )
                        )
                      : s.push(
                          g.Library.jade.runtime.escape(
                            null == (i = t("duration", "hour_plural", [n]))
                              ? ""
                              : i
                          )
                        ),
                    s.push("</span>");
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "hours" in t
                    ? t.hours
                    : "undefined" != typeof hours
                    ? hours
                    : void 0
                ),
                s.join("")
              );
            },
            duration_days: function (t) {
              var n,
                i = [];
              return (
                function (t) {
                  i.push(
                    '<span data-type="days" class="cc-blao">' +
                      g.Library.jade.runtime.escape(
                        null == (n = t("duration", "days")) ? "" : n
                      ) +
                      "</span>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0
                ),
                i.join("")
              );
            },
            chat: function (t) {
              var y,
                m = [],
                _ = {};
              return (
                function (t, c, a, n, i, s, e, o, r, h, u, l) {
                  m.push(""),
                    m.push(""),
                    (_["text-space"] = y = function () {
                      this && this.block,
                        this && this.attributes,
                        m.push("<span> </span>");
                    }),
                    m.push(
                      '<div class="cc-1xry cc-1gmp"><div data-visible="true" data-chat-status="none" class="cc-ge4v"><div class="cc-bdff">'
                    );
                  var f = s.chat.tile && "default" !== s.chat.tile && !0;
                  m.push(
                    "<div" +
                      g.Library.jade.runtime.attr(
                        "data-tile",
                        s.chat.tile ? s.chat.tile : null,
                        !0,
                        !1
                      ) +
                      ' data-with-website-name="true"' +
                      g.Library.jade.runtime.cls(
                        [
                          "cc-x32x",
                          "cc-1ada",
                          !0 === f ? "cc-1c1d cc-1ybb" : "cc-g73w",
                        ],
                        [null, null, !0]
                      ) +
                      '><span class="cc-1j74">'
                  );
                  var d = r.active_operators(l.id, s),
                    p = r.count_other_operators(s);
                  (function () {
                    var t = d;
                    if ("number" == typeof t.length)
                      for (var n = 0, i = t.length; n < i; n++) {
                        var s = t[n],
                          e = c(240, s.type, s.identifier, s.avatar);
                        m.push(
                          '<span class="cc-furf cc-he6y cc-1xll"><span' +
                            g.Library.jade.runtime.attr(
                              "style",
                              "background-image: url('" + e + "') !important;",
                              !0,
                              !1
                            ) +
                            ' class="cc-1do6 cc-wsm4"></span><span' +
                            g.Library.jade.runtime.attr(
                              "data-has-name",
                              s.name ? "true" : "false",
                              !0,
                              !1
                            ) +
                            ' class="cc-1wwd cc-1tzl cc-1ntm cc-1wsx"><span class="cc-1ybw cc-h1yx cc-kgeu">' +
                            g.Library.jade.runtime.escape(
                              null == (y = s.name) ? "" : y
                            ) +
                            "</span></span></span>"
                        );
                      }
                    else
                      for (n in ((i = 0), t))
                        i++,
                          (s = t[n]),
                          (e = c(240, s.type, s.identifier, s.avatar)),
                          m.push(
                            '<span class="cc-furf cc-he6y cc-1xll"><span' +
                              g.Library.jade.runtime.attr(
                                "style",
                                "background-image: url('" +
                                  e +
                                  "') !important;",
                                !0,
                                !1
                              ) +
                              ' class="cc-1do6 cc-wsm4"></span><span' +
                              g.Library.jade.runtime.attr(
                                "data-has-name",
                                s.name ? "true" : "false",
                                !0,
                                !1
                              ) +
                              ' class="cc-1wwd cc-1tzl cc-1ntm cc-1wsx"><span class="cc-1ybw cc-h1yx cc-kgeu">' +
                              g.Library.jade.runtime.escape(
                                null == (y = s.name) ? "" : y
                              ) +
                              "</span></span></span>"
                          );
                  }.call(this),
                    0 < p &&
                      m.push(
                        "<span" +
                          g.Library.jade.runtime.cls(
                            [
                              "cc-ujtk",
                              "cc-151q",
                              !0 === f ? "cc-5ekd" : "cc-16jc",
                            ],
                            [null, null, !0]
                          ) +
                          ">" +
                          g.Library.jade.runtime.escape(
                            null == (y = p) ? "" : y
                          ) +
                          "+</span>"
                      ),
                    m.push(
                      '<span class="cc-iuse"></span></span><span class="cc-1k9z"><span class="cc-2dnw cc-6zjc cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("theme_text", [
                              "default_chat",
                              s.chat.theme_text + "_chat",
                            ]))
                            ? ""
                            : y
                        ) +
                        '</span><span class="cc-1wea cc-6zjc cc-151q"><span data-type="operator_name" class="cc-155a cc-txwe cc-6zjc"></span><span data-type="website_from" class="cc-155a cc-6zjc">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_header_ongoing_from"))
                            ? ""
                            : y
                        ) +
                        '</span><span data-type="website_name" class="cc-155a cc-6zjc">' +
                        g.Library.jade.runtime.escape(
                          null == (y = s.website.name) ? "" : y
                        ) +
                        '</span><span class="cc-iuse"></span></span><span class="cc-h139"><span data-id="online" class="cc-1k4b cc-6zjc">'
                    ),
                    (p = !0 === s.chat.activity_metrics && n.metrics && !0),
                    m.push(
                      '<span data-type="default"' +
                        g.Library.jade.runtime.attr(
                          "data-duration",
                          !0 === p ? n.metrics.raw : null,
                          !0,
                          !1
                        ) +
                        ' class="cc-2r1p cc-6zjc cc-kgeu">'
                    ),
                    !0 === p
                      ? m.push(
                          g.Library.jade.runtime.escape(
                            null ==
                              (y = a(
                                "chat",
                                "chat_header_ongoing_status_metrics",
                                [n.metrics.format]
                              ))
                              ? ""
                              : y
                          )
                        )
                      : m.push(
                          g.Library.jade.runtime.escape(
                            null ==
                              (y = a(
                                "chat",
                                "chat_header_ongoing_status_online"
                              ))
                              ? ""
                              : y
                          )
                        ),
                    m.push(
                      '</span><span data-type="ongoing" class="cc-2r1p cc-6zjc cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("chat", "chat_header_ongoing_status_online"))
                            ? ""
                            : y
                        ) +
                        '</span></span><span data-id="away" class="cc-1k4b cc-6zjc">'
                    ),
                    (p = !0 === s.chat.activity_metrics && n.last && !0),
                    m.push(
                      '<span data-type="default"' +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          !0 === p ? n.last.raw : null,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-format",
                          !0 === p
                            ? a("chat", "chat_header_ongoing_status_last")
                            : null,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-watch",
                          !0 === p ? "true" : null,
                          !0,
                          !1
                        ) +
                        ' class="cc-2r1p cc-12fb cc-6zjc cc-kgeu">'
                    ),
                    !0 === p
                      ? m.push(
                          g.Library.jade.runtime.escape(
                            null ==
                              (y = a(
                                "chat",
                                "chat_header_ongoing_status_last",
                                [n.last.format]
                              ))
                              ? ""
                              : y
                          )
                        )
                      : m.push(
                          g.Library.jade.runtime.escape(
                            null ==
                              (y = a("chat", "chat_header_ongoing_status_away"))
                              ? ""
                              : y
                          )
                        ),
                    m.push(
                      '</span><span data-type="ongoing" class="cc-2r1p cc-6zjc cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("chat", "chat_header_ongoing_status_away"))
                            ? ""
                            : y
                        ) +
                        '</span></span><span class="cc-iuse"></span></span><span class="cc-cqnw">'
                    ));
                  var v = [
                    [
                      "email",
                      a("chat", "chat_header_ongoing_channel_continue_email"),
                    ],
                    [
                      "phone",
                      a("chat", "chat_header_ongoing_channel_continue_phone"),
                    ],
                    ["messenger", "Messenger"],
                    ["telegram", "Telegram"],
                    ["twitter", "Twitter"],
                  ];
                  !0 === i.helpdesk.search &&
                    m.push(
                      '<a data-channel="spotlight" role="button" class="cc-1qlt cc-3x4f cc-1xll"><span class="cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_welcome_helpdesk"))
                            ? ""
                            : y
                        ) +
                        "</span></span></a>"
                    ),
                    function () {
                      var t = v;
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n],
                            e = r.generate_channel_link(s[0]),
                            c =
                              -1 !== ["email", "phone"].indexOf(s[0])
                                ? "_parent"
                                : "_blank";
                          e &&
                            c &&
                            m.push(
                              "<a" +
                                g.Library.jade.runtime.attr(
                                  "data-channel",
                                  "" + s[0],
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "href",
                                  "" + e,
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "target",
                                  "" + c,
                                  !0,
                                  !1
                                ) +
                                ' rel="noopener noreferrer"' +
                                g.Library.jade.runtime.cls(
                                  [
                                    "cc-1qlt",
                                    "cc-1xll",
                                    !0 === f ? "cc-3x4f" : "cc-4xbu",
                                  ],
                                  [null, null, !0]
                                ) +
                                '><span class="cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu">' +
                                g.Library.jade.runtime.escape(
                                  null ==
                                    (y = a(
                                      "chat",
                                      "chat_header_ongoing_channel_continue",
                                      [s[1]]
                                    ))
                                    ? ""
                                    : y
                                ) +
                                "</span></span></a>"
                            );
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            (e = r.generate_channel_link(s[0])),
                            (c =
                              -1 !== ["email", "phone"].indexOf(s[0])
                                ? "_parent"
                                : "_blank"),
                            e &&
                              c &&
                              m.push(
                                "<a" +
                                  g.Library.jade.runtime.attr(
                                    "data-channel",
                                    "" + s[0],
                                    !0,
                                    !1
                                  ) +
                                  g.Library.jade.runtime.attr(
                                    "href",
                                    "" + e,
                                    !0,
                                    !1
                                  ) +
                                  g.Library.jade.runtime.attr(
                                    "target",
                                    "" + c,
                                    !0,
                                    !1
                                  ) +
                                  ' rel="noopener noreferrer"' +
                                  g.Library.jade.runtime.cls(
                                    [
                                      "cc-1qlt",
                                      "cc-1xll",
                                      !0 === f ? "cc-3x4f" : "cc-4xbu",
                                    ],
                                    [null, null, !0]
                                  ) +
                                  '><span class="cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu">' +
                                  g.Library.jade.runtime.escape(
                                    null ==
                                      (y = a(
                                        "chat",
                                        "chat_header_ongoing_channel_continue",
                                        [s[1]]
                                      ))
                                      ? ""
                                      : y
                                  ) +
                                  "</span></span></a>"
                              );
                    }.call(this),
                    m.push(
                      '<span class="cc-iuse"></span></span></span><span' +
                        g.Library.jade.runtime.cls(
                          ["cc-wdhl", !0 === f ? "cc-1f87" : "cc-199t"],
                          [null, !0]
                        ) +
                        '><span class="cc-1asz"></span></span></div><span class="cc-uryd"></span></div><div' +
                        g.Library.jade.runtime.attr(
                          "data-has-health",
                          h.url &&
                            !0 === s.chat.status_health_dead &&
                            s.website.status &&
                            "dead" === s.website.status.health &&
                            18e4 <= t.now() - s.website.status.since
                            ? "true"
                            : "false",
                          !0,
                          !1
                        ) +
                        ' data-has-offline="false" class="cc-qqzz"><div' +
                        g.Library.jade.runtime.attr(
                          "data-refer-hide-space",
                          "urn:crisp.im:debranding:0" in s.plugins &&
                            !0 !== s.website.trial
                            ? "true"
                            : "false",
                          !0,
                          !1
                        ) +
                        ' class="cc-5b24">'
                    ),
                    (t =
                      !0 !== i.runtime.lock_maximized &&
                      (!0 === s.chat.hide_vacation || !0 === i.blocked)),
                    m.push(
                      '<div class="cc-41gl cc-1vnk cc-2ydi"><div class="cc-15u8"><span class="cc-18rr cc-ic7l"></span><span class="cc-1mjm"><span class="cc-qn0f cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_offline_main")) ? "" : y
                        ) +
                        '</span><span class="cc-10sl cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_offline_fail")) ? "" : y
                        ) +
                        '</span><span class="cc-uyy1 cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_offline_label")) ? "" : y
                        ) +
                        "</span></span></div></div>"
                    ),
                    h.url &&
                      (m.push(
                        '<div class="cc-1c6m cc-1vnk cc-2ydi"><div class="cc-138l"><span class="cc-7s5d cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (y = a("chat", "chat_health_main")) ? "" : y
                          ) +
                          '</span><span class="cc-s6qy cc-kgeu"><a' +
                          g.Library.jade.runtime.attr(
                            "href",
                            "" + h.url,
                            !0,
                            !1
                          ) +
                          ' target="_blank" rel="noopener noreferrer" class="cc-1qlv cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (y = a("chat", "chat_health_label_link"))
                              ? ""
                              : y
                          ) +
                          "</a>"
                      ),
                      _["text-space"](),
                      m.push(
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_health_label_updates"))
                            ? ""
                            : y
                        ) + "</span></div></div>"
                      )),
                    m.push(
                      '<div class="cc-1pvj cc-y6ot"><div class="cc-1v5j"><div class="cc-3lvj"></div><div class="cc-192e"></div></div></div>'
                    ),
                    !0 === s.chat.file_transfer &&
                      m.push(
                        '<div class="cc-2uua"><div class="cc-1hl5"></div><div class="cc-1b7n cc-1aev"><div class="cc-16re"><div class="cc-1toe cc-1ada"></div><div class="cc-1ehq cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (y = a("chat", "chat_form_attach_tooltip"))
                              ? ""
                              : y
                          ) +
                          "</div></div></div></div>"
                      ),
                    m.push(
                      '<div data-has-animation="true" class="cc-1tha"><div class="cc-batn cc-ve3u"><div class="cc-h39l"><a role="button" data-type="smiley" class="cc-mxq4 cc-183m cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("chat", "chat_pickers_selector_smileys"))
                            ? ""
                            : y
                        ) +
                        '</a><a role="button" data-type="gif" class="cc-mxq4 cc-183m cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_pickers_selector_gifs"))
                            ? ""
                            : y
                        ) +
                        '</a></div><div class="cc-vcjp"><div data-type="smiley" class="cc-5ftt"><span class="cc-yb0h">'
                    ),
                    function () {
                      var t = o.smileys;
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n];
                          m.push(
                            '<span data-size="large"' +
                              g.Library.jade.runtime.attr(
                                "data-name",
                                n,
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-value",
                                s,
                                !0,
                                !1
                              ) +
                              ' class="cc-dnqb cc-tkf1"></span>'
                          );
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            m.push(
                              '<span data-size="large"' +
                                g.Library.jade.runtime.attr(
                                  "data-name",
                                  n,
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "data-value",
                                  s,
                                  !0,
                                  !1
                                ) +
                                ' class="cc-dnqb cc-tkf1"></span>'
                            );
                    }.call(this),
                    m.push(
                      '</span></div><div data-type="gif" data-has-search="false" class="cc-5ftt"><span class="cc-r00v"><span data-action="search" class="cc-z5zp">'
                    ),
                    (i = a("chat", "chat_pickers_gif_search")),
                    m.push(
                      '<a role="button" class="cc-1k8e"></a><input type="text" name="gif_search"' +
                        g.Library.jade.runtime.attr(
                          "placeholder",
                          "" + i,
                          !0,
                          !1
                        ) +
                        ' maxlength="25" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" class="cc-19m8 cc-1lut cc-kgeu"/></span></span><span class="cc-yb0h"></span><span class="cc-1ydc"><span data-notice="no_results" class="cc-bj9g cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_pickers_gif_no_results"))
                            ? ""
                            : y
                        ) +
                        '</span></span></div></div></div></div><div class="cc-14ou"><a role="button" data-type="new_messages" class="cc-sel9"><span class="cc-1mtf"><span class="cc-tez9"></span><span class="cc-1691 cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_alerts_new_messages"))
                            ? ""
                            : y
                        ) +
                        '</span></span></a><a role="button" data-type="warn_reply" class="cc-sel9"><div class="cc-1mtf"><span class="cc-1691 cc-151q">'
                    ),
                    (h = "email_default"),
                    !0 === s.chat.phone_visitors && !0 !== s.chat.email_visitors
                      ? (h =
                          !0 === s.chat.force_identify
                            ? "phone_force"
                            : "phone_default")
                      : !0 === s.chat.force_identify && (h = "email_force"),
                    m.push(
                      g.Library.jade.runtime.escape(
                        null == (y = a("chat", "chat_alerts_warn_reply_" + h))
                          ? ""
                          : y
                      ) +
                        '</span></div></a><a role="button" data-type="email_invalid" class="cc-sel9"><div class="cc-1mtf"><span class="cc-1691 cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_alerts_email_invalid"))
                            ? ""
                            : y
                        ) +
                        '</span></div></a><div data-type="wait_reply" class="cc-sel9"><div class="cc-1mtf"><span class="cc-1691 cc-151q"><span data-id="online" class="cc-ripp">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("chat", "chat_alerts_wait_reply_online"))
                            ? ""
                            : y
                        ) +
                        '</span><span data-id="away" class="cc-ripp">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_alerts_wait_reply_away"))
                            ? ""
                            : y
                        ) +
                        '</span></span></div></div></div><div data-has-value="false"' +
                        g.Library.jade.runtime.attr(
                          "data-is-locked",
                          1 == t ? "true" : "false",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-retain-lock",
                          1 == t ? "true" : "false",
                          !0,
                          !1
                        ) +
                        ' class="cc-g7iw cc-2ydi"><form name="form_message" action="#" method="post" class="cc-1uz4">'
                    ),
                    (i = a("chat", "chat_form_field_message")),
                    (h = a("chat", "chat_form_field_disabled")),
                    m.push(
                      '<textarea name="message"' +
                        g.Library.jade.runtime.attr(
                          "placeholder",
                          "" + (1 == t ? h : i),
                          !0,
                          !1
                        ) +
                        ' cols="20" rows="1" dir="auto" autocapitalize="off" autocomplete="off"' +
                        g.Library.jade.runtime.attr(
                          "disabled",
                          1 == t ? "" : null,
                          !0,
                          !1
                        ) +
                        ' data-has-selection-range="data-has-selection-range" class="cc-pjpe cc-1lut cc-2n8m cc-kgeu"></textarea></form><div class="cc-1cxr"><div class="cc-t0eq"><div data-type="smiley" data-state="none" class="cc-1y2e"><span class="cc-1926 cc-1xll"><span class="cc-1tzl cc-68z9 cc-1wsx"><span class="cc-h1yx cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null == (y = a("chat", "chat_form_smiley_tooltip"))
                            ? ""
                            : y
                        ) +
                        '</span></span><span data-variant="inactive" class="cc-1oxy cc-11vl cc-1aev"><span class="cc-7ebe"><span class="cc-nqfv cc-8kb8 cc-ew5j"></span><span class="cc-kpmf cc-8kb8 cc-18sf"></span></span></span><span data-variant="active" class="cc-1oxy cc-11vl cc-1ada cc-1aev"><span class="cc-7ebe"><span class="cc-nqfv cc-8kb8 cc-1ada"></span><span class="cc-kpmf cc-8kb8 cc-ew5j"></span></span></span></span></div>'
                    ),
                    !0 === s.chat.file_transfer &&
                      m.push(
                        '<div data-type="file" data-state="none" class="cc-1y2e"><span class="cc-1926 cc-1xll"><span class="cc-1tzl cc-68z9 cc-1wsx"><span class="cc-h1yx cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (y = a("chat", "chat_form_attach_tooltip"))
                              ? ""
                              : y
                          ) +
                          '</span></span><input type="file" name="attach_file" title="" multiple="multiple" class="cc-do6v"/><span class="cc-1oxy cc-1e7d cc-1aev cc-8kb8 cc-ew5j"></span><span class="cc-1wj3"><span class="cc-1uc7 cc-1nph cc-1o96"></span></span></span></div>'
                      ),
                    m.push(
                      '<span class="cc-13gu"><span class="cc-br7s cc-vuur"><span class="cc-hf7r"></span></span></span><span class="cc-iuse"></span></div><span class="cc-iuse"></span></div></div>'
                    ),
                    ("urn:crisp.im:debranding:0" in s.plugins &&
                      !0 !== s.website.trial) ||
                      (m.push(
                        '<div class="cc-19cg cc-ve3u"><div class="cc-z2iy">'
                      ),
                      (t = e(l.domain)),
                      (l = e(l.name)),
                      m.push(
                        "<a" +
                          g.Library.jade.runtime.attr(
                            "href",
                            o.url.crisp_web +
                              "/livechat/?ref=chatbox&domain=" +
                              t +
                              "&name=" +
                              l,
                            !0,
                            !1
                          ) +
                          ' target="_blank" rel="noopener noreferrer" class="cc-13dp"><span class="cc-3f6y cc-kgeu">We run on</span><span class="cc-1204"></span><span class="cc-3f6y cc-37qh cc-151q">Crisp</span><span class="cc-iuse"></span></a><span class="cc-iuse"></span></div><span class="cc-iuse"></span></div>'
                      )),
                    m.push(
                      '</div></div></div><a data-visible="false" data-is-failure="false" role="button" class="cc-unoo"><span class="cc-1c9v"><span data-id="new_messages" class="cc-1bue"><span class="cc-t81c"><span class="cc-86w0"><span class="cc-6uue cc-hy0f"></span></span><span class="cc-2zuy"></span></span><span class="cc-1bcp"><span class="cc-1s28"><span data-for-id="new_messages" class="cc-1div cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (y = a("chat", "minimized_tooltip_message_compose"))
                            ? ""
                            : y
                        ) +
                        '<span class="cc-1hs9"><span class="cc-1q5i"><span data-variant="inactive" class="cc-1oxy cc-11vl"><span class="cc-7ebe"><span class="cc-nqfv"></span><span class="cc-kpmf"></span></span></span><span class="cc-1oxy cc-1e7d"></span></span></span></span><span class="cc-iuse"></span></span></span></span></span><span class="cc-7doi cc-1ada"><span data-id="chat_opened" class="cc-1iv2"><span data-is-ongoing="false" class="cc-15mo">'
                    ),
                    !0 === s.chat.last_operator_face &&
                    0 < s.website.active_operators.length
                      ? ((s = s.website.active_operators[0]),
                        (s = c(240, "operator", s.user_id, s.avatar)),
                        m.push(
                          '<span class="cc-10ml cc-he6y"><span' +
                            g.Library.jade.runtime.attr(
                              "style",
                              "background-image: url('" + s + "') !important;",
                              !0,
                              !1
                            ) +
                            ' class="cc-1dx3 cc-wsm4"></span></span>'
                        ))
                      : m.push(
                          '<span class="cc-10ml cc-he6y"><span class="cc-1dx3 cc-wsm4"></span></span>'
                        ),
                    m.push(
                      '<span class="cc-1j7n"></span><span class="cc-12u5 cc-151q">0</span></span></span></span></a><span data-visible="false" data-visible-subtle="false" class="cc-yqwh"><span class="cc-je17"></span></span></div>'
                    );
                }.call(
                  this,
                  "Date" in (t = t || {})
                    ? t.Date
                    : "undefined" != typeof Date
                    ? Date
                    : void 0,
                  "_a" in t ? t._a : "undefined" != typeof _a ? _a : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "activity" in t
                    ? t.activity
                    : "undefined" != typeof activity
                    ? activity
                    : void 0,
                  "chatbox" in t
                    ? t.chatbox
                    : "undefined" != typeof chatbox
                    ? chatbox
                    : void 0,
                  "configuration" in t
                    ? t.configuration
                    : "undefined" != typeof configuration
                    ? configuration
                    : void 0,
                  "encodeURIComponent" in t
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "environment" in t
                    ? t.environment
                    : "undefined" != typeof environment
                    ? environment
                    : void 0,
                  "methods" in t
                    ? t.methods
                    : "undefined" != typeof methods
                    ? methods
                    : void 0,
                  "status" in t
                    ? t.status
                    : "undefined" != typeof status
                    ? status
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "website" in t
                    ? t.website
                    : "undefined" != typeof website
                    ? website
                    : void 0
                ),
                m.join("")
              );
            },
            minimized_authorized: function (t) {
              var h,
                u = [];
              return (
                function (t, e, n, c, a, i, s, o) {
                  u.push(""),
                    u.push(
                      '<div class="cc-1xry cc-1gmp"><a data-maximized="false"' +
                        g.Library.jade.runtime.attr(
                          "data-is-failure",
                          "false",
                          !0,
                          !1
                        ) +
                        ' role="button" class="cc-unoo"><span class="cc-1c9v">'
                    ),
                    u.push(
                      '<span data-id="general_entice"' +
                        g.Library.jade.runtime.attr(
                          "data-with-helpdesk",
                          a && a.url ? "true" : "false",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-concealed",
                          !0 === n ? "true" : "false",
                          !0,
                          !1
                        ) +
                        ' class="cc-1bue"><span class="cc-1bcp"><span class="cc-1s28 cc-kgeu">'
                    );
                  var r,
                    o = i.active_operators(o.id, c);
                  u.push(
                    '<span class="cc-tkyh"><span class="cc-1t9t"><span class="cc-g0ak cc-hy0f"></span><span' +
                      g.Library.jade.runtime.attr(
                        "data-has-avatar",
                        0 < o.length ? "true" : "false",
                        !0,
                        !1
                      ) +
                      ' class="cc-xc93"><span class="cc-17df"><span class="cc-od26 cc-151q">' +
                      g.Library.jade.runtime.escape(
                        null ==
                          (h = e("theme_text", [
                            "default_chat",
                            c.chat.theme_text + "_chat",
                          ]))
                          ? ""
                          : h
                      ) +
                      '</span><span data-id="online" class="cc-1rau cc-kgeu">' +
                      g.Library.jade.runtime.escape(
                        null ==
                          (h = e("minimized", "tooltip_entice_status_online"))
                          ? ""
                          : h
                      ) +
                      '</span><span data-id="away" class="cc-1rau cc-kgeu">' +
                      g.Library.jade.runtime.escape(
                        null ==
                          (h = e("minimized", "tooltip_entice_status_away"))
                          ? ""
                          : h
                      ) +
                      "</span></span>"
                  ),
                    0 < o.length &&
                      ((r = t(240, (r = o[0]).type, r.identifier, r.avatar)),
                      u.push(
                        '<span class="cc-56dg"><span class="cc-8exe cc-he6y"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + r + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1h5w cc-wsm4"></span></span></span>'
                      )),
                    u.push("</span></span></span>"),
                    function () {
                      var t = ["online", "away"];
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n];
                          u.push(
                            "<span" +
                              g.Library.jade.runtime.attr(
                                "data-when",
                                "" + s,
                                !0,
                                !1
                              ) +
                              ' class="cc-rzi5">'
                          ),
                            "away" === s && a && a.url
                              ? u.push(
                                  '<span data-pop="spotlight" class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_split_helpdesk"
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    '</span></span></span><span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_split_chat"
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    "</span></span></span>"
                                )
                              : u.push(
                                  '<span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_full_chat",
                                          [c.website.name]
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    "</span></span></span>"
                                ),
                            u.push("</span>");
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            u.push(
                              "<span" +
                                g.Library.jade.runtime.attr(
                                  "data-when",
                                  "" + s,
                                  !0,
                                  !1
                                ) +
                                ' class="cc-rzi5">'
                            ),
                            "away" === s && a && a.url
                              ? u.push(
                                  '<span data-pop="spotlight" class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_split_helpdesk"
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    '</span></span></span><span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_split_chat"
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    "</span></span></span>"
                                )
                              : u.push(
                                  '<span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">' +
                                    g.Library.jade.runtime.escape(
                                      null ==
                                        (h = e(
                                          "minimized",
                                          "tooltip_entice_full_chat",
                                          [c.website.name]
                                        ))
                                        ? ""
                                        : h
                                    ) +
                                    "</span></span></span>"
                                ),
                            u.push("</span>");
                    }.call(this),
                    u.push("</span></span></span>"),
                    u.push("</span>"),
                    u.push(
                      '<span class="cc-7doi cc-1ada"><span data-id="chat_closed" class="cc-1iv2"><span class="cc-1yxw"><span class="cc-16qx cc-1eqr"></span></span><span data-is-ongoing="false" class="cc-15mo">'
                    ),
                    !0 === c.chat.last_operator_face &&
                      0 < c.website.active_operators.length &&
                      ((r = t(
                        240,
                        "operator",
                        (t = c.website.active_operators[0]).user_id,
                        t.avatar
                      )),
                      u.push(
                        '<span class="cc-10ml cc-he6y"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + r + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1dx3 cc-wsm4"></span></span>'
                      )),
                    u.push("</span></span></span>"),
                    u.push("</a></div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "conceal_general_entice" in t
                    ? t.conceal_general_entice
                    : "undefined" != typeof conceal_general_entice
                    ? conceal_general_entice
                    : void 0,
                  "configuration" in t
                    ? t.configuration
                    : "undefined" != typeof configuration
                    ? configuration
                    : void 0,
                  "helpdesk" in t
                    ? t.helpdesk
                    : "undefined" != typeof helpdesk
                    ? helpdesk
                    : void 0,
                  "methods" in t
                    ? t.methods
                    : "undefined" != typeof methods
                    ? methods
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "website" in t
                    ? t.website
                    : "undefined" != typeof website
                    ? website
                    : void 0
                ),
                u.join("")
              );
            },
            minimized_unauthorized: function (t) {
              var c,
                a = [];
              return (
                function (t, n, i, s, e) {
                  a.push(""),
                    a.push(
                      '<div class="cc-1xry cc-1gmp"><a data-maximized="false"' +
                        g.Library.jade.runtime.attr(
                          "data-is-failure",
                          "true",
                          !0,
                          !1
                        ) +
                        ' role="button" class="cc-unoo"><span class="cc-1c9v">'
                    ),
                    a.push(
                      '<span data-id="failure_notice" class="cc-1bue"><span class="cc-1bcp"><span class="cc-1s28 cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (c = n("minimized", "unauthorized_pane"))
                            ? ""
                            : c
                        ) +
                        "</span></span></span>"
                    ),
                    a.push("</span>"),
                    a.push(
                      '<span class="cc-7doi cc-1uwh"><span data-id="in_failure" class="cc-1iv2"><span data-is-ongoing="false" class="cc-15mo"></span></span></span>'
                    ),
                    a.push("</a></div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "conceal_general_entice" in t
                    ? t.conceal_general_entice
                    : "undefined" != typeof conceal_general_entice
                    ? conceal_general_entice
                    : void 0,
                  "configuration" in t
                    ? t.configuration
                    : "undefined" != typeof configuration
                    ? configuration
                    : void 0,
                  "helpdesk" in t
                    ? t.helpdesk
                    : "undefined" != typeof helpdesk
                    ? helpdesk
                    : void 0
                ),
                a.join("")
              );
            },
            chat_preview_message: function (t) {
              var l,
                f = [];
              return (
                function (t, n, i, s, e, c, a, o, r, h, u) {
                  if (
                    (f.push(""),
                    "text" === h ||
                      "file" === h ||
                      "animation" === h ||
                      "audio" === h ||
                      "picker" === h ||
                      "field" === h)
                  ) {
                    switch (
                      (f.push('<span class="cc-1mdn"><span class="cc-2244">'),
                      (r = t(240, u.type || r, u.user_id, u.avatar)),
                      f.push(
                        '<span class="cc-j5l1 cc-he6y"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + r + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1nza cc-wsm4"></span></span><span class="cc-1oup"><span class="cc-12sh"></span><span class="cc-1f2m"><span class="cc-7pex cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null ==
                              (l = n("chat", "minimized_tooltip_message_from"))
                              ? ""
                              : l
                          ) +
                          '</span><span class="cc-14a1 cc-151q">'
                      ),
                      "website" === u.type
                        ? f.push(
                            "" +
                              g.Library.jade.runtime.escape(
                                null == (l = u.nickname) ? "" : l
                              )
                          )
                        : f.push(
                            "" +
                              g.Library.jade.runtime.escape(
                                null == (l = s(u.nickname)) ? "" : l
                              )
                          ),
                      f.push(
                        '</span><span class="cc-iuse"></span></span><span class="cc-raz0 cc-kgeu">'
                      ),
                      h)
                    ) {
                      case "text":
                        f.push(null == (l = i(e, o)) ? "" : l);
                        break;
                      case "file":
                      case "animation":
                        switch (e.type) {
                          case "image/jpg":
                          case "image/jpeg":
                          case "image/png":
                            (c = c(e.url)),
                              "animation" === h
                                ? f.push(
                                    "<span" +
                                      g.Library.jade.runtime.attr(
                                        "style",
                                        "background-image: url('" +
                                          a.url.crisp_image +
                                          "/process/original/?url=" +
                                          c +
                                          "') !important;",
                                        !0,
                                        !1
                                      ) +
                                      ' class="cc-14ob"></span>'
                                  )
                                : f.push(
                                    "<span" +
                                      g.Library.jade.runtime.attr(
                                        "style",
                                        "background-image: url('" +
                                          a.url.crisp_image +
                                          "/process/resize/?url=" +
                                          c +
                                          "&width=180&height=180') !important;",
                                        !0,
                                        !1
                                      ) +
                                      ' class="cc-14ob"></span>'
                                  );
                            break;
                          default:
                            "animation" === h
                              ? f.push("🎉")
                              : (f.push("📦"),
                                e.name &&
                                  f.push(
                                    " " +
                                      g.Library.jade.runtime.escape(
                                        null == (l = e.name) ? "" : l
                                      )
                                  ));
                        }
                        break;
                      case "audio":
                        f.push("🎧");
                        break;
                      case "picker":
                      case "field":
                        f.push(null == (l = i(e.text, o)) ? "" : l);
                    }
                    f.push(
                      '</span></span></span><span class="cc-iuse"></span></span>'
                    );
                  }
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_f" in t ? t._f : "undefined" != typeof _f ? _f : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "encodeURIComponent" in t
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "environment" in t
                    ? t.environment
                    : "undefined" != typeof environment
                    ? environment
                    : void 0,
                  "format_context" in t
                    ? t.format_context
                    : "undefined" != typeof format_context
                    ? format_context
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "type" in t
                    ? t.type
                    : "undefined" != typeof type
                    ? type
                    : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                f.join("")
              );
            },
            chat_message_text: function (t) {
              var p,
                v = [],
                y = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l, f, d) {
                  v.push(""),
                    v.push(""),
                    (y["text-space"] = p = function () {
                      this && this.block,
                        this && this.attributes,
                        v.push("<span> </span>");
                    }),
                    v.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + h,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + a,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + o,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "text",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + !1,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === h &&
                      ((t = t(240, d.type || h, d.user_id, d.avatar)),
                      v.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      d.nickname &&
                        (v.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === d.type
                          ? v.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (p = d.nickname) ? "" : p
                                )
                            )
                          : v.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (p = s(d.nickname)) ? "" : p
                                )
                            ),
                        v.push("</span></span>")),
                      v.push("</span>")),
                    v.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === h ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === h ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        ">" +
                        (null == (p = i(e, r)) ? "" : p)
                    ),
                    u.preview &&
                      function () {
                        var t,
                          n,
                          i = u.preview;
                        if ("number" == typeof i.length)
                          for (var s = 0, e = i.length; s < e; s++) {
                            var c = i[s];
                            v.push(
                              "<span" +
                                g.Library.jade.runtime.attr(
                                  "data-variant",
                                  "" + (c.variant || "none"),
                                  !0,
                                  !1
                                ) +
                                ' class="cc-1kz7">'
                            ),
                              c.preview && c.preview.embed && c.preview.image
                                ? ((t = l.image_url_resize(c.preview.image)),
                                  v.push(
                                    "<a" +
                                      g.Library.jade.runtime.attr(
                                        "href",
                                        "" + c.preview.embed,
                                        !0,
                                        !1
                                      ) +
                                      ' rel="noopener noreferrer" target="_blank" data-type="embed"' +
                                      g.Library.jade.runtime.attr(
                                        "style",
                                        "background-image: url('" +
                                          t +
                                          "') !important;",
                                        !0,
                                        !1
                                      ) +
                                      ' class="cc-djxv cc-94yb cc-1c2b"><span class="cc-18zh"></span></a>'
                                  ))
                                : (c.preview &&
                                    c.preview.image &&
                                    ((t = l.image_url_resize(c.preview.image)),
                                    v.push(
                                      "<a" +
                                        g.Library.jade.runtime.attr(
                                          "href",
                                          "" + c.url,
                                          !0,
                                          !1
                                        ) +
                                        ' rel="noopener noreferrer" target="_blank" data-type="image"' +
                                        g.Library.jade.runtime.attr(
                                          "data-target",
                                          "" + (c.variant || "none"),
                                          !0,
                                          !1
                                        ) +
                                        g.Library.jade.runtime.attr(
                                          "style",
                                          "background-image: url('" +
                                            t +
                                            "') !important;",
                                          !0,
                                          !1
                                        ) +
                                        ' class="cc-djxv"></a>'
                                    )),
                                  v.push(
                                    "<a" +
                                      g.Library.jade.runtime.attr(
                                        "href",
                                        "" + c.url,
                                        !0,
                                        !1
                                      ) +
                                      ' rel="noopener noreferrer" target="_blank" data-type="link"' +
                                      g.Library.jade.runtime.attr(
                                        "data-target",
                                        "" + (c.variant || "none"),
                                        !0,
                                        !1
                                      ) +
                                      g.Library.jade.runtime.cls(
                                        [
                                          "cc-djxv",
                                          "cc-151q",
                                          "operator" === h
                                            ? "cc-k5w4" +
                                              ("helpdesk" !== c.variant
                                                ? " cc-10m9"
                                                : "")
                                            : "",
                                        ],
                                        [null, null, !0]
                                      ) +
                                      ">"
                                  ),
                                  (n = c.title || c.website || c.url),
                                  v.push(
                                    g.Library.jade.runtime.escape(
                                      null == (p = n) ? "" : p
                                    ) + "</a>"
                                  )),
                              v.push("</span>");
                          }
                        else
                          for (s in ((e = 0), i))
                            e++,
                              (c = i[s]),
                              v.push(
                                "<span" +
                                  g.Library.jade.runtime.attr(
                                    "data-variant",
                                    "" + (c.variant || "none"),
                                    !0,
                                    !1
                                  ) +
                                  ' class="cc-1kz7">'
                              ),
                              c.preview && c.preview.embed && c.preview.image
                                ? ((t = l.image_url_resize(c.preview.image)),
                                  v.push(
                                    "<a" +
                                      g.Library.jade.runtime.attr(
                                        "href",
                                        "" + c.preview.embed,
                                        !0,
                                        !1
                                      ) +
                                      ' rel="noopener noreferrer" target="_blank" data-type="embed"' +
                                      g.Library.jade.runtime.attr(
                                        "style",
                                        "background-image: url('" +
                                          t +
                                          "') !important;",
                                        !0,
                                        !1
                                      ) +
                                      ' class="cc-djxv cc-94yb cc-1c2b"><span class="cc-18zh"></span></a>'
                                  ))
                                : (c.preview &&
                                    c.preview.image &&
                                    ((t = l.image_url_resize(c.preview.image)),
                                    v.push(
                                      "<a" +
                                        g.Library.jade.runtime.attr(
                                          "href",
                                          "" + c.url,
                                          !0,
                                          !1
                                        ) +
                                        ' rel="noopener noreferrer" target="_blank" data-type="image"' +
                                        g.Library.jade.runtime.attr(
                                          "data-target",
                                          "" + (c.variant || "none"),
                                          !0,
                                          !1
                                        ) +
                                        g.Library.jade.runtime.attr(
                                          "style",
                                          "background-image: url('" +
                                            t +
                                            "') !important;",
                                          !0,
                                          !1
                                        ) +
                                        ' class="cc-djxv"></a>'
                                    )),
                                  v.push(
                                    "<a" +
                                      g.Library.jade.runtime.attr(
                                        "href",
                                        "" + c.url,
                                        !0,
                                        !1
                                      ) +
                                      ' rel="noopener noreferrer" target="_blank" data-type="link"' +
                                      g.Library.jade.runtime.attr(
                                        "data-target",
                                        "" + (c.variant || "none"),
                                        !0,
                                        !1
                                      ) +
                                      g.Library.jade.runtime.cls(
                                        [
                                          "cc-djxv",
                                          "cc-151q",
                                          "operator" === h
                                            ? "cc-k5w4" +
                                              ("helpdesk" !== c.variant
                                                ? " cc-10m9"
                                                : "")
                                            : "",
                                        ],
                                        [null, null, !0]
                                      ) +
                                      ">"
                                  ),
                                  (n = c.title || c.website || c.url),
                                  v.push(
                                    g.Library.jade.runtime.escape(
                                      null == (p = n) ? "" : p
                                    ) + "</a>"
                                  )),
                              v.push("</span>");
                      }.call(this),
                    v.push('</span><span class="cc-iuse"></span></span>'),
                    c &&
                      (v.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + a,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (p = c) ? "" : p
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== u.participant &&
                        !0 !== u.edited &&
                        !0 !== u.translated) ||
                        (v.push('<span class="cc-66kp">('),
                        !0 === u.participant &&
                          (v.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (p = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : p
                            )
                          ),
                          (!0 !== u.edited && !0 !== u.translated) ||
                            (v.push(","), y["text-space"]())),
                        !0 === u.edited &&
                          (v.push(
                            g.Library.jade.runtime.escape(
                              null == (p = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : p
                            )
                          ),
                          !0 === u.translated &&
                            (v.push(","), y["text-space"]())),
                        !0 === u.translated &&
                          v.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (p = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : p
                            )
                          ),
                        v.push(")</span>")),
                      v.push("</span></span></span>")),
                    v.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === h &&
                      v.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (p = n("chat", "chat_message_info_read"))
                              ? ""
                              : p
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (p = n("chat", "chat_message_error_retry"))
                              ? ""
                              : p
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    v.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_f" in t ? t._f : "undefined" != typeof _f ? _f : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "format_context" in t
                    ? t.format_context
                    : "undefined" != typeof format_context
                    ? format_context
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "methods" in t
                    ? t.methods
                    : "undefined" != typeof methods
                    ? methods
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                v.join("")
              );
            },
            chat_message_file: function (t) {
              var d,
                p = [],
                v = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l) {
                  p.push("");
                  var f = -1 !== o.types.file_preview.indexOf(s.type) && !0;
                  p.push(""),
                    (v["text-space"] = d = function () {
                      this && this.block,
                        this && this.attributes,
                        p.push("<span> </span>");
                    }),
                    p.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + h,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + c,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + r,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "file",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + f,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === h &&
                      ((t = t(240, l.type || h, l.user_id, l.avatar)),
                      p.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      l.nickname &&
                        (p.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === l.type
                          ? p.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (d = l.nickname) ? "" : d
                                )
                            )
                          : p.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (d = i(l.nickname)) ? "" : d
                                )
                            ),
                        p.push("</span></span>")),
                      p.push("</span>")),
                    p.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === h ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === h ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        '><span class="cc-1epp"><span class="cc-q81n cc-kgeu">'
                    ),
                    s.name
                      ? p.push(
                          "" +
                            g.Library.jade.runtime.escape(
                              null == (d = s.name) ? "" : d
                            )
                        )
                      : p.push(
                          g.Library.jade.runtime.escape(
                            null == (d = n("chat", "chat_message_file_name"))
                              ? ""
                              : d
                          )
                        ),
                    p.push("</span>"),
                    1 == f
                      ? (p.push(
                          "<a" +
                            g.Library.jade.runtime.attr(
                              "href",
                              "" + s.url,
                              !0,
                              !1
                            ) +
                            g.Library.jade.runtime.attr(
                              "data-name",
                              "" + s.name,
                              !0,
                              !1
                            ) +
                            ' rel="noopener noreferrer" class="cc-nn4g">'
                        ),
                        (a = a(s.url)),
                        p.push(
                          "<span" +
                            g.Library.jade.runtime.attr(
                              "style",
                              "background-image: url('" +
                                o.url.crisp_image +
                                "/process/resize/?url=" +
                                a +
                                "&width=600&height=600') !important;",
                              !0,
                              !1
                            ) +
                            ' class="cc-fqnb"></span></a>'
                        ))
                      : p.push(
                          "<a" +
                            g.Library.jade.runtime.attr(
                              "href",
                              "" + s.url,
                              !0,
                              !1
                            ) +
                            g.Library.jade.runtime.attr(
                              "download",
                              "text/html" === s.type
                                ? null
                                : "" + (s.name || s.url),
                              !0,
                              !1
                            ) +
                            ' rel="noopener noreferrer" target="_blank"' +
                            g.Library.jade.runtime.cls(
                              [
                                "cc-1mhl",
                                "operator" === h ? "cc-k5w4 cc-10m9" : "",
                              ],
                              [null, !0]
                            ) +
                            '><span class="cc-32av cc-151q">' +
                            g.Library.jade.runtime.escape(
                              null ==
                                (d = n("chat", "chat_message_file_button"))
                                ? ""
                                : d
                            ) +
                            "</span></a>"
                        ),
                    p.push(
                      '</span></span><span class="cc-iuse"></span></span>'
                    ),
                    e &&
                      (p.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + c,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (d = e) ? "" : d
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== u.participant &&
                        !0 !== u.edited &&
                        !0 !== u.translated) ||
                        (p.push('<span class="cc-66kp">('),
                        !0 === u.participant &&
                          (p.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (d = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : d
                            )
                          ),
                          (!0 !== u.edited && !0 !== u.translated) ||
                            (p.push(","), v["text-space"]())),
                        !0 === u.edited &&
                          (p.push(
                            g.Library.jade.runtime.escape(
                              null == (d = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : d
                            )
                          ),
                          !0 === u.translated &&
                            (p.push(","), v["text-space"]())),
                        !0 === u.translated &&
                          p.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (d = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : d
                            )
                          ),
                        p.push(")</span>")),
                      p.push("</span></span></span>")),
                    p.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === h &&
                      p.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (d = n("chat", "chat_message_info_read"))
                              ? ""
                              : d
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (d = n("chat", "chat_message_error_retry"))
                              ? ""
                              : d
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    p.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "encodeURIComponent" in t
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "environment" in t
                    ? t.environment
                    : "undefined" != typeof environment
                    ? environment
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                p.join("")
              );
            },
            chat_message_animation: function (t) {
              var f,
                d = [],
                p = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l) {
                  d.push(""),
                    d.push(""),
                    (p["text-space"] = f = function () {
                      this && this.block,
                        this && this.attributes,
                        d.push("<span> </span>");
                    }),
                    d.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + h,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + c,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + r,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "animation",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + !0,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === h &&
                      ((t = t(240, l.type || h, l.user_id, l.avatar)),
                      d.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      l.nickname &&
                        (d.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === l.type
                          ? d.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (f = l.nickname) ? "" : f
                                )
                            )
                          : d.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (f = i(l.nickname)) ? "" : f
                                )
                            ),
                        d.push("</span></span>")),
                      d.push("</span>")),
                    d.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === h ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === h ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        ">"
                    ),
                    (l = s.url.match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/)[1]),
                    (s = a(s.url)),
                    d.push(
                      "<span" +
                        g.Library.jade.runtime.attr(
                          "data-source",
                          l || null,
                          !0,
                          !1
                        ) +
                        ' class="cc-wrpn"><span' +
                        g.Library.jade.runtime.attr(
                          "style",
                          "background-image: url('" +
                            o.url.crisp_image +
                            "/process/original/?url=" +
                            s +
                            "') !important;",
                          !0,
                          !1
                        ) +
                        ' class="cc-1rh5"><span class="cc-nl2z"><span class="cc-1pbj"></span></span></span></span></span><span class="cc-iuse"></span></span>'
                    ),
                    e &&
                      (d.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + c,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (f = e) ? "" : f
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== u.participant &&
                        !0 !== u.edited &&
                        !0 !== u.translated) ||
                        (d.push('<span class="cc-66kp">('),
                        !0 === u.participant &&
                          (d.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (f = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : f
                            )
                          ),
                          (!0 !== u.edited && !0 !== u.translated) ||
                            (d.push(","), p["text-space"]())),
                        !0 === u.edited &&
                          (d.push(
                            g.Library.jade.runtime.escape(
                              null == (f = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : f
                            )
                          ),
                          !0 === u.translated &&
                            (d.push(","), p["text-space"]())),
                        !0 === u.translated &&
                          d.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (f = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : f
                            )
                          ),
                        d.push(")</span>")),
                      d.push("</span></span></span>")),
                    d.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === h &&
                      d.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (f = n("chat", "chat_message_info_read"))
                              ? ""
                              : f
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (f = n("chat", "chat_message_error_retry"))
                              ? ""
                              : f
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    d.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "encodeURIComponent" in t
                    ? t.encodeURIComponent
                    : "undefined" != typeof encodeURIComponent
                    ? encodeURIComponent
                    : void 0,
                  "environment" in t
                    ? t.environment
                    : "undefined" != typeof environment
                    ? environment
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                d.join("")
              );
            },
            chat_message_audio: function (t) {
              var u,
                l = [],
                f = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h) {
                  l.push(""),
                    l.push(""),
                    (f["text-space"] = u = function () {
                      this && this.block,
                        this && this.attributes,
                        l.push("<span> </span>");
                    }),
                    l.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + o,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + c,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + a,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "audio",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + !1,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === o &&
                      ((t = t(240, h.type || o, h.user_id, h.avatar)),
                      l.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      h.nickname &&
                        (l.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === h.type
                          ? l.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (u = h.nickname) ? "" : u
                                )
                            )
                          : l.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (u = i(h.nickname)) ? "" : u
                                )
                            ),
                        l.push("</span></span>")),
                      l.push("</span>")),
                    l.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === o ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === o ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        '><span data-state="none" class="cc-1qf4"><span class="cc-uxhm"><a role="button"' +
                        g.Library.jade.runtime.cls(
                          ["cc-784v", "operator" === o ? "cc-caj5" : ""],
                          [null, !0]
                        ) +
                        '></a><span class="cc-8dhr"></span><span class="cc-u2t4 cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null == (u = r.duration) ? "" : u
                        ) +
                        '</span><span class="cc-iuse"></span></span><span' +
                        g.Library.jade.runtime.cls(
                          ["cc-1ep3", "operator" === o ? "cc-16jc" : ""],
                          [null, !0]
                        ) +
                        '></span><audio preload="none" class="cc-cccw"><source' +
                        g.Library.jade.runtime.attr("src", "" + s.url, !0, !1) +
                        g.Library.jade.runtime.attr(
                          "type",
                          "" + s.type,
                          !0,
                          !1
                        ) +
                        '/></audio></span></span><span class="cc-iuse"></span></span>'
                    ),
                    e &&
                      (l.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + c,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (u = e) ? "" : u
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== r.participant &&
                        !0 !== r.edited &&
                        !0 !== r.translated) ||
                        (l.push('<span class="cc-66kp">('),
                        !0 === r.participant &&
                          (l.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (u = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : u
                            )
                          ),
                          (!0 !== r.edited && !0 !== r.translated) ||
                            (l.push(","), f["text-space"]())),
                        !0 === r.edited &&
                          (l.push(
                            g.Library.jade.runtime.escape(
                              null == (u = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : u
                            )
                          ),
                          !0 === r.translated &&
                            (l.push(","), f["text-space"]())),
                        !0 === r.translated &&
                          l.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (u = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : u
                            )
                          ),
                        l.push(")</span>")),
                      l.push("</span></span></span>")),
                    l.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === o &&
                      l.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (u = n("chat", "chat_message_info_read"))
                              ? ""
                              : u
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (u = n("chat", "chat_message_error_retry"))
                              ? ""
                              : u
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    l.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                l.join("")
              );
            },
            chat_message_picker: function (t) {
              var d,
                p = [],
                v = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l, f) {
                  p.push(""),
                    p.push(""),
                    (v["text-space"] = d = function () {
                      this && this.block,
                        this && this.attributes,
                        p.push("<span> </span>");
                    }),
                    p.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + h,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + a,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + o,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "picker",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + !1,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === h &&
                      ((t = t(240, f.type || h, f.user_id, f.avatar)),
                      p.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      f.nickname &&
                        (p.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === f.type
                          ? p.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (d = f.nickname) ? "" : d
                                )
                            )
                          : p.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (d = s(f.nickname)) ? "" : d
                                )
                            ),
                        p.push("</span></span>")),
                      p.push("</span>")),
                    p.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === h ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === h ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        ">" +
                        (null == (d = i(e.text, r)) ? "" : d) +
                        "<span" +
                        g.Library.jade.runtime.attr(
                          "data-has-selected",
                          !0 === u.has_selected ? "true" : "false",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-choices-count",
                          "" + e.choices.length,
                          !0,
                          !1
                        ) +
                        ' class="cc-1mx4">'
                    ),
                    function () {
                      var t = e.choices;
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n];
                          p.push(
                            '<a role="button"' +
                              g.Library.jade.runtime.attr(
                                "data-value",
                                "" + s.value,
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-selected",
                                !0 === s.selected ? "true" : "false",
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.cls(
                                [
                                  "cc-1u43",
                                  !0 !== u.has_selected || !0 === s.selected
                                    ? "cc-151q"
                                    : "cc-kgeu",
                                ],
                                [null, !0]
                              ) +
                              ">" +
                              g.Library.jade.runtime.escape(
                                null == (d = s.label) ? "" : d
                              ) +
                              "</a>"
                          );
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            p.push(
                              '<a role="button"' +
                                g.Library.jade.runtime.attr(
                                  "data-value",
                                  "" + s.value,
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "data-selected",
                                  !0 === s.selected ? "true" : "false",
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.cls(
                                  [
                                    "cc-1u43",
                                    !0 !== u.has_selected || !0 === s.selected
                                      ? "cc-151q"
                                      : "cc-kgeu",
                                  ],
                                  [null, !0]
                                ) +
                                ">" +
                                g.Library.jade.runtime.escape(
                                  null == (d = s.label) ? "" : d
                                ) +
                                "</a>"
                            );
                    }.call(this),
                    p.push(
                      '</span></span><span class="cc-iuse"></span></span>'
                    ),
                    c &&
                      (p.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + a,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (d = c) ? "" : d
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== u.participant &&
                        !0 !== u.edited &&
                        !0 !== u.translated) ||
                        (p.push('<span class="cc-66kp">('),
                        !0 === u.participant &&
                          (p.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (d = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : d
                            )
                          ),
                          (!0 !== u.edited && !0 !== u.translated) ||
                            (p.push(","), v["text-space"]())),
                        !0 === u.edited &&
                          (p.push(
                            g.Library.jade.runtime.escape(
                              null == (d = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : d
                            )
                          ),
                          !0 === u.translated &&
                            (p.push(","), v["text-space"]())),
                        !0 === u.translated &&
                          p.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (d = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : d
                            )
                          ),
                        p.push(")</span>")),
                      p.push("</span></span></span>")),
                    p.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === h &&
                      p.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (d = n("chat", "chat_message_info_read"))
                              ? ""
                              : d
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (d = n("chat", "chat_message_error_retry"))
                              ? ""
                              : d
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    p.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_f" in t ? t._f : "undefined" != typeof _f ? _f : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "format_context" in t
                    ? t.format_context
                    : "undefined" != typeof format_context
                    ? format_context
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                p.join("")
              );
            },
            chat_message_field: function (t) {
              var f,
                d = [],
                p = {};
              return (
                function (t, n, i, s, e, c, a, o, r, h, u, l) {
                  d.push(""),
                    d.push(""),
                    (p["text-space"] = f = function () {
                      this && this.block,
                        this && this.attributes,
                        d.push("<span> </span>");
                    }),
                    d.push(
                      "<div" +
                        g.Library.jade.runtime.attr(
                          "data-from",
                          "" + h,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-date-iso",
                          "" + a,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-fingerprint",
                          "" + o,
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-type",
                          "field",
                          !0,
                          !1
                        ) +
                        g.Library.jade.runtime.attr(
                          "data-is-preview",
                          "" + !1,
                          !0,
                          !1
                        ) +
                        ' class="cc-b3wa">'
                    ),
                    "operator" === h &&
                      ((t = t(240, l.type || h, l.user_id, l.avatar)),
                      d.push(
                        '<span class="cc-1s5n cc-he6y cc-1xll"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1jl7 cc-wsm4"></span>'
                      ),
                      l.nickname &&
                        (d.push(
                          '<span class="cc-1tzl cc-1ntm cc-1wsx"><span class="cc-h1yx cc-kgeu">'
                        ),
                        "website" === l.type
                          ? d.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (f = l.nickname) ? "" : f
                                )
                            )
                          : d.push(
                              "" +
                                g.Library.jade.runtime.escape(
                                  null == (f = s(l.nickname)) ? "" : f
                                )
                            ),
                        d.push("</span></span>")),
                      d.push("</span>")),
                    d.push(
                      '<span class="cc-xfpr cc-1xll"><span' +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-1yfu",
                            "cc-1lut",
                            "operator" === h ? "cc-1ada" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.cls(
                          [
                            "cc-xtol",
                            "cc-kgeu",
                            "operator" === h ? "cc-6zjc" : "",
                          ],
                          [null, null, !0]
                        ) +
                        "><span" +
                        g.Library.jade.runtime.attr(
                          "data-has-value",
                          e.value ? "true" : "false",
                          !0,
                          !1
                        ) +
                        ' class="cc-1lj6 cc-143v">'
                    ),
                    e.previous &&
                      "operator" === h &&
                      d.push('<a role="button" class="cc-2t7n cc-4xbu"></a>'),
                    d.push(null == (f = i(e.text, r)) ? "" : f),
                    e.value || "operator" !== h
                      ? d.push(
                          "<span" +
                            g.Library.jade.runtime.cls(
                              ["cc-vzs4", e.value ? "cc-151q" : "cc-kgeu"],
                              [null, !0]
                            ) +
                            ">" +
                            g.Library.jade.runtime.escape(
                              null == (f = e.value || e.explain) ? "" : f
                            ) +
                            "</span>"
                        )
                      : d.push(
                          '<form action="#" method="post" class="cc-hp1x"><input type="text"' +
                            g.Library.jade.runtime.attr(
                              "name",
                              "message_field_" + e.id,
                              !0,
                              !1
                            ) +
                            g.Library.jade.runtime.attr(
                              "placeholder",
                              "" + e.explain,
                              !0,
                              !1
                            ) +
                            ' autocapitalize="off" autocorrect="off" spellcheck="false" class="cc-1t9k cc-clw4 cc-kgeu"/><a role="button" class="cc-fosr cc-4xbu cc-151q">' +
                            g.Library.jade.runtime.escape(
                              null ==
                                (f = n(
                                  "chat",
                                  "chat_message_text_identity_ask_field_submit"
                                ))
                                ? ""
                                : f
                            ) +
                            "</a></form>"
                        ),
                    d.push(
                      '</span></span><span class="cc-iuse"></span></span>'
                    ),
                    c &&
                      (d.push(
                        '<span class="cc-iqjx cc-1tzl cc-68z9 cc-sc6q"><span class="cc-h1yx cc-kgeu"><span' +
                          g.Library.jade.runtime.attr(
                            "data-date-iso",
                            "" + a,
                            !0,
                            !1
                          ) +
                          ' data-date-watch="true" class="cc-1k3j">' +
                          g.Library.jade.runtime.escape(
                            null == (f = c) ? "" : f
                          ) +
                          '</span><span class="cc-1kje">'
                      ),
                      (!0 !== u.participant &&
                        !0 !== u.edited &&
                        !0 !== u.translated) ||
                        (d.push('<span class="cc-66kp">('),
                        !0 === u.participant &&
                          (d.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (f = n("chat", "chat_message_tag_participant"))
                                ? ""
                                : f
                            )
                          ),
                          (!0 !== u.edited && !0 !== u.translated) ||
                            (d.push(","), p["text-space"]())),
                        !0 === u.edited &&
                          (d.push(
                            g.Library.jade.runtime.escape(
                              null == (f = n("chat", "chat_message_tag_edited"))
                                ? ""
                                : f
                            )
                          ),
                          !0 === u.translated &&
                            (d.push(","), p["text-space"]())),
                        !0 === u.translated &&
                          d.push(
                            g.Library.jade.runtime.escape(
                              null ==
                                (f = n("chat", "chat_message_tag_translated"))
                                ? ""
                                : f
                            )
                          ),
                        d.push(")</span>")),
                      d.push("</span></span></span>")),
                    d.push(
                      '<span class="cc-iuse"></span></span><span class="cc-iuse"></span>'
                    ),
                    "visitor" === h &&
                      d.push(
                        '<span class="cc-1did"><span class="cc-k5zk"><span class="cc-crgu"></span><span class="cc-1u5t cc-kgeu">' +
                          g.Library.jade.runtime.escape(
                            null == (f = n("chat", "chat_message_info_read"))
                              ? ""
                              : f
                          ) +
                          '</span><span class="cc-iuse"></span></span><span class="cc-iuse"></span></span><a role="button" class="cc-pus6"><span class="cc-fnu6 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (f = n("chat", "chat_message_error_retry"))
                              ? ""
                              : f
                          ) +
                          '</span><span class="cc-1pp5 cc-ic7l"></span><span class="cc-iuse"></span></a><span class="cc-iuse"></span>'
                      ),
                    d.push("</div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "_f" in t ? t._f : "undefined" != typeof _f ? _f : void 0,
                  "_n" in t ? t._n : "undefined" != typeof _n ? _n : void 0,
                  "content" in t
                    ? t.content
                    : "undefined" != typeof content
                    ? content
                    : void 0,
                  "date_formatted" in t
                    ? t.date_formatted
                    : "undefined" != typeof date_formatted
                    ? date_formatted
                    : void 0,
                  "date_iso" in t
                    ? t.date_iso
                    : "undefined" != typeof date_iso
                    ? date_iso
                    : void 0,
                  "fingerprint" in t
                    ? t.fingerprint
                    : "undefined" != typeof fingerprint
                    ? fingerprint
                    : void 0,
                  "format_context" in t
                    ? t.format_context
                    : "undefined" != typeof format_context
                    ? format_context
                    : void 0,
                  "from" in t
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "metas" in t
                    ? t.metas
                    : "undefined" != typeof metas
                    ? metas
                    : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                d.join("")
              );
            },
            chat_bubble_composing: function (t) {
              var s = [];
              return (
                function (t) {
                  s.push('<div class="cc-1deq"><span class="cc-1ro5 cc-1ada">'),
                    function () {
                      var t = [1, 2, 3];
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++)
                          s.push('<span class="cc-1ssv cc-k5w4"></span>');
                      else
                        for (n in ((i = 0), t))
                          i++, s.push('<span class="cc-1ssv cc-k5w4"></span>');
                    }.call(this),
                    s.push('</span><span class="cc-iuse"></span></div>');
                }.call(
                  this,
                  "undefined" in (t = t || {}) ? t.undefined : void 0
                ),
                s.join("")
              );
            },
            chat_bubble_thread: function (t) {
              var e,
                c = [];
              return (
                function (t, n, i, s) {
                  c.push(
                    "<div" +
                      g.Library.jade.runtime.attr("data-day", "" + t, !0, !1) +
                      g.Library.jade.runtime.attr(
                        "data-month",
                        "" + n,
                        !0,
                        !1
                      ) +
                      g.Library.jade.runtime.attr("data-year", "" + s, !0, !1) +
                      ' class="cc-7bf0">'
                  ),
                    i &&
                      c.push(
                        '<div class="cc-1pll"><span class="cc-1p79 cc-151q">' +
                          g.Library.jade.runtime.escape(
                            null == (e = i) ? "" : e
                          ) +
                          "</span></div>"
                      ),
                    c.push('<div class="cc-12zj"></div></div>');
                }.call(
                  this,
                  "day" in (t = t || {})
                    ? t.day
                    : "undefined" != typeof day
                    ? day
                    : void 0,
                  "month" in t
                    ? t.month
                    : "undefined" != typeof month
                    ? month
                    : void 0,
                  "title" in t
                    ? t.title
                    : "undefined" != typeof title
                    ? title
                    : void 0,
                  "year" in t
                    ? t.year
                    : "undefined" != typeof year
                    ? year
                    : void 0
                ),
                c.join("")
              );
            },
            chat_bubble_group: function (t) {
              var i = [];
              return (
                function (t, n) {
                  i.push(
                    "<div" +
                      g.Library.jade.runtime.attr("data-from", "" + t, !0, !1) +
                      g.Library.jade.runtime.attr(
                        "data-user-marker",
                        "" + n,
                        !0,
                        !1
                      ) +
                      ' class="cc-w6n9 wp-exclude-emoji"></div>'
                  );
                }.call(
                  this,
                  "from" in (t = t || {})
                    ? t.from
                    : "undefined" != typeof from
                    ? from
                    : void 0,
                  "user_marker" in t
                    ? t.user_marker
                    : "undefined" != typeof user_marker
                    ? user_marker
                    : void 0
                ),
                i.join("")
              );
            },
            chat_picker_gif_item: function () {
              var t = [];
              return (
                t.push(
                  '<span data-removable="true" data-loading="true" class="cc-dnqb cc-ofgq cc-2hzo"></span>'
                ),
                t.join("")
              );
            },
            chat_game: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    '<div data-loaded="false" class="cc-6mrt"><span class="cc-w0in"><a role="button" class="cc-1shm cc-151q">' +
                      g.Library.jade.runtime.escape(
                        null == (i = t("chat", "chat_game_controls_stop"))
                          ? ""
                          : i
                      ) +
                      '</a></span><iframe type="text/html"' +
                      g.Library.jade.runtime.attr(
                        "src",
                        n.url.crisp_game + "/",
                        !0,
                        !1
                      ) +
                      ' frameborder="0" class="cc-1h0y"></iframe><span class="cc-8f7k cc-1ada"><span class="cc-104h cc-1eqr"></span></span></div>'
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "environment" in t
                    ? t.environment
                    : "undefined" != typeof environment
                    ? environment
                    : void 0
                ),
                s.join("")
              );
            },
            browsing_assist: function (t) {
              var i,
                s = [];
              return (
                function (t, n) {
                  s.push(
                    '<div class="cc-9f6h"><div class="cc-r0ql"><span class="cc-lvhc cc-1xll cc-y69k"><span class="cc-lr8p"></span><span class="cc-1fiq"></span><span class="cc-1tzl cc-t8b6 cc-sc6q"><span class="cc-h1yx cc-kgeu">' +
                      g.Library.jade.runtime.escape(
                        null ==
                          (i = t("browsing", "assist_mouse_tooltip", [
                            n.website.name,
                          ]))
                          ? ""
                          : i
                      ) +
                      "</span></span></span></div></div>"
                  );
                }.call(
                  this,
                  "_e" in (t = t || {})
                    ? t._e
                    : "undefined" != typeof _e
                    ? _e
                    : void 0,
                  "configuration" in t
                    ? t.configuration
                    : "undefined" != typeof configuration
                    ? configuration
                    : void 0
                ),
                s.join("")
              );
            },
            call_ring: function (t) {
              var o,
                r = [];
              return (
                function (t, n, i, s, e, c) {
                  r.push(
                    '<div data-browsing-ignore="true" class="cc-1iv0"><div class="cc-1j7a"><div class="cc-ll62 cc-he6y">'
                  ),
                    (t = t(240, c.type, c.user_id)),
                    r.push(
                      "<span" +
                        g.Library.jade.runtime.attr(
                          "style",
                          "background-image: url('" + t + "') !important;",
                          !0,
                          !1
                        ) +
                        ' class="cc-1smo cc-wsm4"></span></div><div class="cc-1ba8"><div class="cc-1o9s cc-kgeu">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (o = n("call", "ring_title_website", [
                              i.website.name,
                            ]))
                            ? ""
                            : o
                        ) +
                        '</div><div class="cc-1wln cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null ==
                            (o = n("call", "ring_title_label", [c.nickname]))
                            ? ""
                            : o
                        ) +
                        '</div></div><ul class="cc-15jz">'
                    );
                  var a = [
                    ["decline", n("call", "ring_actions_decline"), null],
                    ["accept", n("call", "ring_actions_accept"), s],
                  ];
                  (function () {
                    var t = a;
                    if ("number" == typeof t.length)
                      for (var n = 0, i = t.length; n < i; n++) {
                        var s = t[n];
                        r.push(
                          "<li" +
                            g.Library.jade.runtime.attr(
                              "data-action",
                              "" + s[0],
                              !0,
                              !1
                            ) +
                            g.Library.jade.runtime.attr(
                              "data-mode",
                              s[2] ? s[2] : null,
                              !0,
                              !1
                            ) +
                            ' class="cc-ui2y"><a role="button" class="cc-ekfv"></a><span class="cc-1ans cc-151q">' +
                            g.Library.jade.runtime.escape(
                              null == (o = s[1]) ? "" : o
                            ) +
                            "</span></li>"
                        );
                      }
                    else
                      for (n in ((i = 0), t))
                        i++,
                          (s = t[n]),
                          r.push(
                            "<li" +
                              g.Library.jade.runtime.attr(
                                "data-action",
                                "" + s[0],
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-mode",
                                s[2] ? s[2] : null,
                                !0,
                                !1
                              ) +
                              ' class="cc-ui2y"><a role="button" class="cc-ekfv"></a><span class="cc-1ans cc-151q">' +
                              g.Library.jade.runtime.escape(
                                null == (o = s[1]) ? "" : o
                              ) +
                              "</span></li>"
                          );
                  }.call(this),
                    r.push("</ul></div></div>"));
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "configuration" in t
                    ? t.configuration
                    : "undefined" != typeof configuration
                    ? configuration
                    : void 0,
                  "mode" in t
                    ? t.mode
                    : "undefined" != typeof mode
                    ? mode
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                r.join("")
              );
            },
            call_screen: function (t) {
              var h,
                u = [];
              return (
                function (t, e, n, i, s, c) {
                  u.push(
                    '<div data-browsing-ignore="true" class="cc-1iv0"><div tabindex="0" data-mode="maximized" class="cc-1j41">'
                  ),
                    (t = t(240, c.type, c.user_id)),
                    u.push(
                      '<div class="cc-3jjj"><div data-type="remote" class="cc-r1gp">'
                    ),
                    "audio" === i &&
                      u.push(
                        '<span class="cc-1tpr cc-he6y"><span' +
                          g.Library.jade.runtime.attr(
                            "style",
                            "background-image: url('" + t + "') !important;",
                            !0,
                            !1
                          ) +
                          ' class="cc-1wt9 cc-wsm4"></span></span>'
                      ),
                    u.push(
                      '<video alt="" autoplay="autoplay" playsinline="playsinline" class="cc-19cv"></video></div><ul class="cc-jtwe">'
                    );
                  var a = ["audio"];
                  "video" === i && a.push("video"),
                    function () {
                      var t = a;
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n];
                          u.push(
                            "<li" +
                              g.Library.jade.runtime.attr(
                                "data-type",
                                "" + s,
                                !0,
                                !1
                              ) +
                              ' class="cc-10o9 cc-kgeu">' +
                              g.Library.jade.runtime.escape(
                                null ==
                                  (h = e(
                                    "call",
                                    "screen_label_" + s + "_muted"
                                  ))
                                  ? ""
                                  : h
                              ) +
                              "</li>"
                          );
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            u.push(
                              "<li" +
                                g.Library.jade.runtime.attr(
                                  "data-type",
                                  "" + s,
                                  !0,
                                  !1
                                ) +
                                ' class="cc-10o9 cc-kgeu">' +
                                g.Library.jade.runtime.escape(
                                  null ==
                                    (h = e(
                                      "call",
                                      "screen_label_" + s + "_muted"
                                    ))
                                    ? ""
                                    : h
                                ) +
                                "</li>"
                            );
                    }.call(this),
                    u.push(
                      '</ul><div class="cc-hin6"><div class="cc-1s4f"><span class="cc-1nrx cc-he6y"><span' +
                        g.Library.jade.runtime.attr(
                          "style",
                          "background-image: url('" + t + "') !important;",
                          !0,
                          !1
                        ) +
                        ' class="cc-bg8a cc-wsm4"></span></span><div class="cc-117p"><span class="cc-1vsh"><span class="cc-yaq8 cc-151q">' +
                        g.Library.jade.runtime.escape(
                          null == (h = c.nickname) ? "" : h
                        ) +
                        '</span></span><span class="cc-gu0k">'
                    );
                  var o = ["connecting", "ongoing"];
                  (function () {
                    var t = o;
                    if ("number" == typeof t.length)
                      for (var n = 0, i = t.length; n < i; n++) {
                        var s = t[n];
                        u.push(
                          "<span" +
                            g.Library.jade.runtime.attr(
                              "data-state",
                              "" + s,
                              !0,
                              !1
                            ) +
                            ' class="cc-ulj3 cc-kgeu">' +
                            g.Library.jade.runtime.escape(
                              null == (h = e("call", "screen_status_" + s))
                                ? ""
                                : h
                            ) +
                            "</span>"
                        );
                      }
                    else
                      for (n in ((i = 0), t))
                        i++,
                          (s = t[n]),
                          u.push(
                            "<span" +
                              g.Library.jade.runtime.attr(
                                "data-state",
                                "" + s,
                                !0,
                                !1
                              ) +
                              ' class="cc-ulj3 cc-kgeu">' +
                              g.Library.jade.runtime.escape(
                                null == (h = e("call", "screen_status_" + s))
                                  ? ""
                                  : h
                              ) +
                              "</span>"
                          );
                  }.call(this),
                    u.push(
                      '<span class="cc-j34c"></span><span class="cc-x7ly cc-kgeu">0:00:00</span></span></div></div><div class="cc-uefb">'
                    ));
                  var r = [
                    ["audio", !0, !1, !0],
                    ["hangup", !1, !0, !0],
                    ["toggle", !1, !0, !0],
                    ["screensharing", !1, !0, n.screensharing],
                  ];
                  "video" === i && r.unshift(["video", !0, !1, !0]),
                    function () {
                      var t = r;
                      if ("number" == typeof t.length)
                        for (var n = 0, i = t.length; n < i; n++) {
                          var s = t[n];
                          u.push(
                            '<a role="button"' +
                              g.Library.jade.runtime.attr(
                                "data-type",
                                "" + s[0],
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-state",
                                !0 === s[1] ? "true" : null,
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-visible",
                                !0 === s[2] ? "true" : "false",
                                !0,
                                !1
                              ) +
                              g.Library.jade.runtime.attr(
                                "data-unsupported",
                                !1 === s[3] ? "true" : null,
                                !0,
                                !1
                              ) +
                              ' class="cc-1qzq"></a>'
                          );
                        }
                      else
                        for (n in ((i = 0), t))
                          i++,
                            (s = t[n]),
                            u.push(
                              '<a role="button"' +
                                g.Library.jade.runtime.attr(
                                  "data-type",
                                  "" + s[0],
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "data-state",
                                  !0 === s[1] ? "true" : null,
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "data-visible",
                                  !0 === s[2] ? "true" : "false",
                                  !0,
                                  !1
                                ) +
                                g.Library.jade.runtime.attr(
                                  "data-unsupported",
                                  !1 === s[3] ? "true" : null,
                                  !0,
                                  !1
                                ) +
                                ' class="cc-1qzq"></a>'
                            );
                    }.call(this),
                    u.push("</div></div>"),
                    "video" === i &&
                      u.push(
                        '<div data-type="local" class="cc-r1gp"><video alt="" autoplay="autoplay" playsinline="playsinline" muted="muted"></video><span class="cc-fi91"><span class="cc-qely"></span></span></div>'
                      ),
                    u.push("</div></div></div>");
                }.call(
                  this,
                  "_a" in (t = t || {})
                    ? t._a
                    : "undefined" != typeof _a
                    ? _a
                    : void 0,
                  "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0,
                  "features" in t
                    ? t.features
                    : "undefined" != typeof features
                    ? features
                    : void 0,
                  "mode" in t
                    ? t.mode
                    : "undefined" != typeof mode
                    ? mode
                    : void 0,
                  "undefined" in t ? t.undefined : void 0,
                  "user" in t
                    ? t.user
                    : "undefined" != typeof user
                    ? user
                    : void 0
                ),
                u.join("")
              );
            },
          };
          (this.logger = u.Console),
            (this.dom = u.cash),
            (this.crisp = {
              web: u.CrispLibraryWeb,
              client: u.CrispLibraryClient,
            }),
            (this.jade = { runtime: u.jade, client: p }),
            this.t();
        } catch (t) {}
        function v() {}
      }
      return (
        (t.prototype.t = function () {
          try {
            this.Te();
          } catch (t) {}
        }),
        (t.prototype.Te = function () {
          try {
            this.dom.fn.extend({
              safe_css_text: function (e, c) {
                if (e)
                  return "object" === (void 0 === e ? "undefined" : o(e)) || c
                    ? (this.each(function (t) {
                        var n = {};
                        "object" === (void 0 === e ? "undefined" : o(e))
                          ? (n = e)
                          : (n[e] = c);
                        var i,
                          s = "";
                        for (i in n)
                          n.hasOwnProperty(i) &&
                            (s += i + ": " + n[i] + " !important;");
                        t.style.cssText = s;
                      }),
                      this)
                    : this[0].style.cssText;
                this.each(function (t) {
                  t.style.cssText = "";
                });
              },
            });
          } catch (t) {}
        }),
        t
      );
    })())()),
      (w.Polyfill =
        ((W.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (W.prototype.schedule_warn_incompatible = function (t) {
          var n = this,
            i = 0 < arguments.length && void 0 !== t && t;
          try {
            null !== this.Be && clearTimeout(this.Be),
              (this.Be = setTimeout(
                function () {
                  !(n.Be = null) !== w.Pipeline.Ue && n.Re();
                },
                !0 === i ? 0 : this.Ne
              ));
          } catch (t) {}
        }),
        (W.prototype.Oe = function () {
          try {
            this.Me();
          } catch (t) {}
        }),
        (W.prototype.Me = function () {
          try {
            Function.prototype.Et = function (t) {
              var n,
                i,
                s,
                e = void 0;
              if ("function" != typeof this)
                throw new TypeError(
                  "Function.prototype.__crisp_bind - not callable"
                );
              return (
                (e = Array.prototype.slice.call(arguments, 1)),
                (i = function () {}),
                (s = function () {
                  return n.apply(
                    this instanceof i ? this : t,
                    e.concat(Array.prototype.slice.call(arguments))
                  );
                }),
                (n = this).prototype && (i.prototype = this.prototype),
                (s.prototype = new i()),
                s
              );
            };
          } catch (t) {}
        }),
        (W.prototype.Re = function () {
          try {
            var t = window;
            if (
              t &&
              t.console &&
              "function" == typeof t.console.warn &&
              "function" == typeof Function.prototype.toString
            ) {
              for (
                var n,
                  i,
                  s,
                  e,
                  c = [
                    [
                      null,
                      t,
                      [
                        "eval",
                        "escape",
                        "unescape",
                        "decodeURI",
                        "encodeURI",
                        "decodeURIComponent",
                        "encodeURIComponent",
                        "setTimeout",
                        "clearTimeout",
                        "setInterval",
                        "clearInterval",
                        "parseInt",
                        "parseFloat",
                        "RTCPeerConnection",
                        "MutationObserver",
                        "XMLHttpRequest",
                        "AudioContext",
                        "WebSocket",
                      ],
                    ],
                    [
                      null,
                      t,
                      [
                        "Array",
                        "Object",
                        "String",
                        "Date",
                        "Function",
                        "RegExp",
                        "Event",
                        "Error",
                      ],
                    ],
                    [
                      "Array.prototype",
                      t.Array.prototype,
                      [
                        "push",
                        "pop",
                        "indexOf",
                        "includes",
                        "sort",
                        "splice",
                        "slice",
                        "shift",
                        "unshift",
                        "map",
                        "forEach",
                      ],
                    ],
                    ["Object", t.Object, ["keys", "values"]],
                    [
                      "Object.prototype",
                      t.Object.prototype,
                      ["hasOwnProperty"],
                    ],
                    ["String", t.String, ["fromCharCode"]],
                    [
                      "String.prototype",
                      t.String.prototype,
                      [
                        "indexOf",
                        "charAt",
                        "charCodeAt",
                        "trim",
                        "toLowerCase",
                        "toUpperCase",
                        "slice",
                        "replace",
                        "match",
                      ],
                    ],
                    [
                      "Math",
                      t.Math,
                      ["random", "round", "floor", "ceil", "abs"],
                    ],
                    ["Date", t.Date, ["now"]],
                    [
                      "Date.prototype",
                      t.Date.prototype,
                      ["getTime", "toISOString"],
                    ],
                    [
                      "Function.prototype",
                      t.Function.prototype,
                      ["bind", "apply", "call"],
                    ],
                    ["RegExp.prototype", t.RegExp.prototype, ["test", "exec"]],
                    [
                      "Event.prototype",
                      t.Event.prototype,
                      ["preventDefault", "stopPropagation"],
                    ],
                    [
                      "document",
                      t.document,
                      [
                        "createElement",
                        "addEventListener",
                        "removeEventListener",
                      ],
                    ],
                    ["JSON", t.JSON, ["stringify", "parse"]],
                    [
                      "localStorage",
                      t.localStorage,
                      ["setItem", "getItem", "removeItem"],
                    ],
                    [
                      "sessionStorage",
                      t.sessionStorage,
                      ["setItem", "getItem", "removeItem"],
                    ],
                  ],
                  a = [],
                  o = 0;
                o < c.length;
                o++
              )
                if (void 0 === (s = (n = c[o])[1])) a.push(n[0] || "[root]");
                else {
                  i = n[2] || [];
                  for (var r = 0; r < i.length; r++)
                    void 0 === (e = s[i[r]]) ||
                      this.$e.test("" + e) ||
                      (null !== n[0]
                        ? a.push(n[0] + "." + i[r])
                        : a.push(i[r]));
                }
              0 < a.length &&
                console.warn(
                  '[WARNING] Crisp found shims of native JavaScript methods. This can alter the chatbox behavior and break things. Make sure not to override listed functions to ensure your chatbox works as expected. You may be looking for other JavaScript libraries in use on this page.\n\nYou can disable this warning by adding: $crisp.push(["safe", true]) to your page JavaScript.\n\nMethods to check:',
                  a
                );
            }
          } catch (t) {}
        }),
        (W.prototype.Z = function () {
          try {
            this.Be = null;
          } catch (t) {}
        }),
        new W()));
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Utility =
      ((H.prototype.reset = function () {
        try {
          this.Z();
        } catch (t) {}
      }),
      (H.prototype.get_or_fallback = function (t, n, i) {
        var s = 2 < arguments.length && void 0 !== i ? i : null,
          e = t;
        try {
          e =
            null !== s
              ? (void 0 === t ? "undefined" : o(t)) !== s
                ? n
                : t
              : t || n;
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (H.prototype.lower_string_first = function (t) {
        var n = t;
        try {
          t && (n = "" + t.charAt(0).toLowerCase() + t.slice(1));
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.pad_number = function (t, n) {
        var i,
          s = 1 < arguments.length && void 0 !== n ? n : "00",
          e = s;
        try {
          0 <= t &&
            ((i = s.length - Math.ceil((t + 1) / 10)),
            (e = t ? s.substr(0, i) + t : s));
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (H.prototype.filter_link_safe = function (t) {
        var n = "#";
        try {
          t && !1 === this.Le.test(t) && (n = t);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.filter_image_url_resize = function (t, n, i) {
        var s = "";
        try {
          s =
            t.substring(0, w.Base.Pe.length) === w.Base.Pe
              ? t
              : w.Base.Pe +
                "/process/resize/?url=" +
                encodeURIComponent(t) +
                "&width=" +
                n +
                "&height=" +
                i;
        } catch (t) {
        } finally {
          return s;
        }
      }),
      (H.prototype.to_hashcode = function (t) {
        var n = 0;
        try {
          if (0 < t.length)
            for (var i = 0; i < t.length; i++)
              (n = (n << 5) - n + t.charCodeAt(i)), (n &= n);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.is_empty = function (t) {
        var n = !0;
        try {
          0 < this.keys(t).length && (n = !1);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.is_equal = function (t, n) {
        var i = !0;
        try {
          var s,
            e = -1,
            c = void 0;
          if (
            (void 0 === t ? "undefined" : o(t)) !==
            (void 0 === n ? "undefined" : o(n))
          )
            i = !1;
          else if (
            t &&
            "object" === (void 0 === t ? "undefined" : o(t)) &&
            n &&
            "object" === (void 0 === n ? "undefined" : o(n))
          )
            for (
              t instanceof Array || n instanceof Array
                ? ((c = this.union(t, n)),
                  (t.length === c.length && n.length === c.length) || (i = !1))
                : (c = this.union(this.keys(t), this.keys(n)));
              ++e < c.length && !0 === i;

            )
              (s = c[e]), (i = this.is_equal(t[s], n[s]));
          else i = t === n && !0;
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (H.prototype.keys = function (t) {
        var n = [];
        try {
          "object" === (void 0 === t ? "undefined" : o(t)) &&
            t &&
            (n = Object.keys(t));
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.clone = function (t) {
        var n = void 0;
        try {
          var i,
            s = void 0,
            n = Array.isArray(t) ? [] : {};
          for (s in t)
            (i = t[s]),
              (n[s] =
                "object" === (void 0 === i ? "undefined" : o(i))
                  ? this.clone(i)
                  : i);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (H.prototype.intersect = function (t, n) {
        var i = [];
        try {
          for (var s = 0; s < t.length; s++)
            -1 !== n.indexOf(t[s]) && i.push(t[s]);
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (H.prototype.union = function (t, n) {
        var i = [];
        try {
          for (var s = 0; s < t.length; s++)
            -1 === i.indexOf(t[s]) && i.push(t[s]);
          for (var e = 0; e < n.length; e++)
            -1 === i.indexOf(n[e]) && i.push(n[e]);
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (H.prototype.extract = function (t, n, i, s) {
        var e = 2 < arguments.length && void 0 !== i ? i : "",
          c = 3 < arguments.length && void 0 !== s ? s : 1,
          a = n || e || "";
        try {
          var o = (n || "").trim().match(t),
            a = o && o[c] ? o[c] : e || "";
        } catch (t) {
        } finally {
          return a;
        }
      }),
      (H.prototype.compare_rule = function (t, n, i, s) {
        var e = 2 < arguments.length && void 0 !== i ? i : ".",
          c = 3 < arguments.length && void 0 !== s ? s : ".",
          a = !1;
        try {
          !0 === this.Je.test(n) &&
            (n = (n = n.replace(this.Je, this.He)).replace(this.We, "")),
            (a =
              -1 !== n.indexOf("*")
                ? ((n = (n = (n = (n = n.replace(this.Ge, this.Ve)).replace(
                    this.Ke,
                    this.Xe
                  )).replace(this.Ye, c + "*")).replace(this.Ze, e + "*")),
                  new RegExp("^" + n + "$").test(t) && !0)
                : t === n && !0);
        } catch (t) {
        } finally {
          return a;
        }
      }),
      (H.prototype.compare_rules = function (t, n, i, s, e) {
        var c = 3 < arguments.length && void 0 !== s ? s : ".",
          a = 4 < arguments.length && void 0 !== e ? e : ".",
          o = !1,
          r = !1,
          h = !1;
        try {
          if (0 < n.length) {
            for (var u = 0; u < n.length && !0 !== r; )
              (r = this.compare_rule(t, n[u], c, a)), u++;
            !1 === r && (o = !0);
          }
          if (!1 === r && 0 < i.length) {
            for (var l = 0; l < i.length && !0 !== h; )
              (h = this.compare_rule(t, i[l], c, a)), l++;
            o = h;
          }
        } catch (t) {
        } finally {
          return o;
        }
      }),
      (H.prototype.normalize_url_path = function (t, n, i) {
        var s = 2 < arguments.length && void 0 !== i ? i : "",
          e = "";
        try {
          n
            ? 1 < n.length &&
              "/" !== n[n.length - 1] &&
              "*" !== n[n.length - 1] &&
              (n += "/")
            : (n = "/"),
            (e = "" + s + t + n);
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (H.prototype.compare_page_rules = function (t, n, i) {
        var s = 2 < arguments.length && void 0 !== i ? i : null,
          e = !1;
        try {
          if (0 < n.length) {
            var c,
              a = [],
              o = [],
              r = [];
            null === s && (s = w.Base.Qe);
            for (var h = 0; h < n.length; h++) {
              var u = (n[h] || "").trim();
              u &&
                (!1 === this.tc.test(u) && (u = this.normalize_url_path(s, u)),
                (c = u.match(this.tc))
                  ? a.push(this.normalize_url_path(c[2], c[3], c[1]))
                  : a.push("" + s + u));
            }
            for (
              var l = (l = t.match(this.tc))
                  ? this.normalize_url_path(l[2], l[3], l[1])
                  : null,
                f = 0;
              f < a.length;
              f++
            )
              (!0 === this.Je.test(a[f]) ? o : r).push(a[f]);
            !0 === this.compare_rules(l, o, r, "[^/]", ".") && (e = !0);
          }
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (H.prototype.play_media = function (t) {
        try {
          var n = t.play();
          void 0 !== n &&
            "function" == typeof n.catch &&
            n.catch(function (t) {});
        } catch (t) {}
      }),
      (H.prototype.acquire_channel_url_regex = function (t, n, i) {
        var s,
          e = 2 < arguments.length && void 0 !== i ? i : "",
          c = null;
        try {
          w.Base.nc.channels[t] &&
            ((c = (this.ic[t] || {})[n]) ||
              ((s = w.Chat.Interface.sc("helpdesk")),
              (c = new RegExp(
                "^" + w.Library.crisp.web.Parse.escape_regex(s) + e + "$"
              )),
              (this.ic[t] = this.ic[t] || {}),
              (this.ic[t][n] = c)));
        } catch (t) {
        } finally {
          return c;
        }
      }),
      (H.prototype.set_timeout = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n ? n : 0,
          s = null;
        try {
          if (!w.Library.crisp.client.Schedule)
            throw new Error(
              "Could not set timeout after " +
                i +
                "ms, as the schedule wrapper is not yet available"
            );
          s = w.Library.crisp.client.Schedule.set_timeout(t, i);
        } catch (t) {
        } finally {
          return s;
        }
      }),
      (H.prototype.clear_timeout = function (t) {
        try {
          if (!w.Library.crisp.client.Schedule)
            throw new Error(
              "Could not clear timeout #" +
                t +
                ", as the schedule wrapper is not yet available"
            );
          w.Library.crisp.client.Schedule.clear_timeout(t);
        } catch (t) {}
      }),
      (H.prototype.set_interval = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n ? n : 0,
          s = null;
        try {
          if (!w.Library.crisp.client.Schedule)
            throw new Error(
              "Could not set interval every " +
                i +
                "ms, as the schedule wrapper is not yet available"
            );
          s = w.Library.crisp.client.Schedule.set_interval(t, i);
        } catch (t) {
        } finally {
          return s;
        }
      }),
      (H.prototype.clear_interval = function (t) {
        try {
          if (!w.Library.crisp.client.Schedule)
            throw new Error(
              "Could not clear interval #" +
                t +
                ", as the schedule wrapper is not yet available"
            );
          w.Library.crisp.client.Schedule.clear_interval(t);
        } catch (t) {}
      }),
      (H.prototype.add_event_listener = function (t, n, i, s, e) {
        var c = 4 < arguments.length && void 0 !== e ? e : {};
        try {
          if (!w.Library.crisp.client.Listener)
            throw new Error(
              "Could not add event listener '" +
                i +
                "' to '" +
                n +
                "' instance, as the listener wrapper is not yet available"
            );
          w.Library.crisp.client.Listener.add_event(t, n, i, s, c);
        } catch (t) {}
      }),
      (H.prototype.remove_event_listener = function (t, n, i) {
        try {
          if (!w.Library.crisp.client.Listener)
            throw new Error(
              "Could not remove event listener '" +
                i +
                "' from '" +
                n +
                "' instance, as the listener wrapper is not yet available"
            );
          w.Library.crisp.client.Listener.remove_event(t, n, i);
        } catch (t) {}
      }),
      (H.prototype.reset_instance_children = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n ? n : null;
        try {
          var s,
            e = null !== i ? i : t,
            c = [];
          for (s in t) {
            var a = t[s];
            a !== e &&
              a &&
              "object" === (void 0 === a ? "undefined" : o(a)) &&
              "function" == typeof a.reset &&
              a.reset(c);
          }
          for (; 0 < c.length; ) c.shift()();
        } catch (t) {}
      }),
      (H.prototype.Z = function () {
        try {
          this.ic = {};
        } catch (t) {}
      }),
      new H())),
      (w.Feature =
        ((J.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (J.prototype.has_screen_touch = function () {
          try {
            return this.ec;
          } catch (t) {}
        }),
        (J.prototype.has_css_animations = function () {
          try {
            return this.cc;
          } catch (t) {}
        }),
        (J.prototype.has_html_audio = function () {
          try {
            return null !== this.ac && !0;
          } catch (t) {}
        }),
        (J.prototype.html_audio_format = function () {
          try {
            return this.ac;
          } catch (t) {}
        }),
        (J.prototype.oc = function (t) {
          var n = !1;
          try {
            n = !!(t in window);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (J.prototype.rc = function (t) {
          var n = !1;
          try {
            var i = document.documentElement.style,
              s = ["Khtml", "Ms", "O", "Moz", "Webkit"],
              e = s.length;
            if (t in i) n = !0;
            else
              for (
                t = t.replace(/^[a-z]/, function (t) {
                  return t.toUpperCase();
                });
                e--;

              )
                if (s[e] + t in i) {
                  n = !0;
                  break;
                }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (J.prototype.hc = function () {
          var n = this;
          try {
            (this.ec =
              (this.oc("ontouchstart") || 0 < navigator.maxTouchPoints) && !0),
              window.addEventListener(
                "touchstart",
                function t() {
                  (n.ec = !0), window.removeEventListener("touchstart", t);
                },
                !1
              );
          } catch (t) {}
        }),
        (J.prototype.uc = function () {
          var t = null;
          try {
            var n = !(
                !(s = document.createElement("audio")).canPlayType ||
                !s.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "")
              ),
              i = !(
                !s.canPlayType ||
                !s
                  .canPlayType('audio/mp4; codecs="mp4a.40.2"')
                  .replace(/no/, "")
              ),
              s = !(
                !s.canPlayType ||
                !s.canPlayType("audio/mpeg;").replace(/no/, "")
              );
            1 == n ? (t = "oga") : 1 == i ? (t = "m4a") : 1 == s && (t = "mp3");
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (J.prototype.Z = function () {
          try {
            (this.cc = this.rc("animation")), (this.ac = this.uc()), this.hc();
          } catch (t) {}
        }),
        new J()));
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Action =
      ((P.prototype.reset = function () {
        try {
          void 0 === w.Base.lc.__spool.pending_actions &&
            (w.Base.lc.__spool.pending_actions = []);
        } catch (t) {}
      }),
      (P.prototype.do_chat_open = function () {
        !0 === w.Chat.fc ? w.Chat.Interface.dc() : w.Minimized.Interface.pc();
      }),
      (P.prototype.do_chat_close = function () {
        !0 === w.Chat.fc && w.Chat.Interface.vc();
      }),
      (P.prototype.do_chat_toggle = function () {
        !0 === this.is_chat_closed()
          ? this.do_chat_open()
          : this.do_chat_close();
      }),
      (P.prototype.do_chat_show = function () {
        !0 === this.is_chat_hidden() &&
          null !== w.Base.yc &&
          (w.Base.yc.safe_css_text("display", "block"), w.Chat.Interface.mc());
      }),
      (P.prototype.do_chat_hide = function () {
        !0 === this.is_chat_visible() &&
          null !== w.Base.yc &&
          w.Base.yc.safe_css_text("display", "none");
      }),
      (P.prototype.do_helpdesk_search = function () {
        if (!0 !== w.Chat.Interface._c())
          throw new Error("Helpdesk search is unavailable");
        this.do_chat_show();
      }),
      (P.prototype.do_helpdesk_article_open = function (t, n) {
        if ("string" != typeof t || !t)
          throw new Error("Invalid article locale");
        if ("string" != typeof n || !n) throw new Error("Invalid article slug");
        if (!0 !== w.Chat.Interface.gc(t, n))
          throw new Error("Helpdesk article is unavailable");
        this.do_chat_show();
      }),
      (P.prototype.do_helpdesk_query = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : "";
        w.Base.wc(function () {
          w.Library.crisp.client.Helpdesk.get_article_search(
            n,
            w.Locale.code()
          );
        });
      }),
      (P.prototype.do_message_send = function (i, s) {
        var e = this;
        w.Base.wc(function () {
          var t = e.bc(i, s);
          if (null !== t.type && null !== t.content) {
            var n = !0 === w.Chat.Message.kc() ? e.xc : 0;
            switch (t.type) {
              case "text":
                w.Library.crisp.client.Message.send_text_message(t.content, n);
                break;
              case "file":
                w.Library.crisp.client.Message.send_file_message(
                  t.content.name,
                  t.content.url,
                  t.content.type,
                  n
                );
                break;
              case "animation":
                w.Library.crisp.client.Message.send_animation_message(
                  t.content.url,
                  t.content.type,
                  n
                );
                break;
              case "audio":
                w.Library.crisp.client.Message.send_audio_message(
                  t.content.url,
                  t.content.type,
                  t.content.duration,
                  n
                );
                break;
              case "picker":
                w.Library.crisp.client.Message.send_picker_message(
                  t.content.id,
                  t.content.text,
                  t.content.choices,
                  n
                );
                break;
              case "field":
                w.Library.crisp.client.Message.send_field_message(
                  t.content.id,
                  t.content.text,
                  t.content.explain,
                  n
                );
            }
            w.Chat.Fc();
          }
        });
      }),
      (P.prototype.do_message_show = function (n, i, t, s) {
        var e = this,
          c = 2 < arguments.length && void 0 !== t ? t : null,
          a = 3 < arguments.length && void 0 !== s && s;
        w.Base.wc(function () {
          var t = e.bc(n, i);
          null !== t.type &&
            null !== t.content &&
            w.Chat.Message.Ec(t.type, t.content, c, a);
        });
      }),
      (P.prototype.do_message_read = function () {
        !0 === w.Chat.fc &&
          w.Library.crisp.client.Message.mark_messages_as_read();
      }),
      (P.prototype.do_message_thread_start = function (t) {
        if ("string" != typeof t || !t)
          throw new Error("Invalid message thread start text");
        if (!0 !== w.Chat.fc)
          throw new Error("Chat must be active for message thread to start");
        w.Base.wc(function () {
          w.Library.crisp.client.Message.send_message_thread("start", t);
        });
      }),
      (P.prototype.do_message_thread_end = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : "";
        if (n && ("string" != typeof n || !n))
          throw new Error("Invalid message thread end text");
        if (!0 !== w.Chat.fc)
          throw new Error("Chat must be active for message thread to end");
        w.Base.wc(function () {
          w.Library.crisp.client.Message.send_message_thread("end", n || "");
        });
      }),
      (P.prototype.do_session_reset = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Cc(!1, !0),
          w.Library.crisp.client.Storage.clear_stamp_local(),
          w.Library.crisp.client.Session.reset(),
          !1 === n
            ? (w.Base.jc(), w.Base.reset(), w.Base.qc())
            : document.location.reload(!1);
      }),
      (P.prototype.do_trigger_run = function (t) {
        if (!0 !== w.Trigger.zc(t)) throw new Error("Trigger does not exist");
      }),
      (P.prototype.is_chat_opened = function () {
        return !(!0 !== w.Chat.Interface.Sc || !0 !== w.Chat.fc);
      }),
      (P.prototype.is_chat_closed = function () {
        return !1 === this.is_chat_opened() && !0;
      }),
      (P.prototype.is_chat_visible = function () {
        return !1 === this.is_chat_hidden() && !0;
      }),
      (P.prototype.is_chat_hidden = function () {
        return (
          (null === w.Base.yc || "none" === w.Base.yc.css("display")) && !0
        );
      }),
      (P.prototype.is_chat_small = function () {
        return !1 === w.Base.Ac() && !0;
      }),
      (P.prototype.is_chat_large = function () {
        return !1 === this.is_chat_small() && !0;
      }),
      (P.prototype.is_session_ongoing = function () {
        return (!0 === w.Chat.Message.Ic || !0 === w.Chat.Message.Dc) && !0;
      }),
      (P.prototype.is_website_available = function () {
        return w.Availability.Tc && !0;
      }),
      (P.prototype.get_chat_unread_count = function () {
        return w.Chat.Notification.Bc || 0;
      }),
      (P.prototype.get_message_text = function () {
        return (
          (!0 === w.Chat.fc &&
            w.Chat.Selector.get("form_textarea_message").val()) ||
          ""
        );
      }),
      (P.prototype.get_session_identifier = function () {
        return w.Broker.St || null;
      }),
      (P.prototype.get_session_data = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        return w.Library.crisp.client.Session.get_data(n) || null;
      }),
      (P.prototype.get_user_email = function () {
        return w.Library.crisp.client.Session.get_email() || null;
      }),
      (P.prototype.get_user_phone = function () {
        return w.Library.crisp.client.Session.get_phone() || null;
      }),
      (P.prototype.get_user_nickname = function () {
        return w.Library.crisp.client.Session.get_nickname() || null;
      }),
      (P.prototype.get_user_avatar = function () {
        return w.Library.crisp.client.Session.get_avatar() || null;
      }),
      (P.prototype.get_user_company = function () {
        var t = w.Library.crisp.client.Session.get_company() || null;
        return (
          ((t || {}).employment || {}).title &&
            (t.employment = [t.employment.title, t.employment.role]),
          ((t || {}).geolocation || {}).country &&
            (t.geolocation = [
              t.geolocation.country,
              t.geolocation.city || null,
            ]),
          t
        );
      }),
      (P.prototype.set_message_text = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        if ("string" != typeof n) throw new Error("Invalid message text");
        var i = w.Chat.Selector.get("form_textarea_message");
        i && !0 !== i.is(":disabled") && (i.val(n), i.trigger("keypress"));
      }),
      (P.prototype.set_session_data = function (c, a) {
        w.Base.wc(function () {
          for (
            var t,
              n = c instanceof Array && c[0] instanceof Array ? c : [[c, a]],
              i = {},
              s = 0;
            s < n.length;
            s++
          ) {
            var e = n[s][1];
            e &&
              "string" == typeof e &&
              ("false" === e
                ? (e = !1)
                : "true" === e
                ? (e = !0)
                : !1 === isNaN(e) && (e = Number(e))),
              (i[n[s][0]] = e);
          }
          if (!0 !== w.Validate.is_data(i)) throw new Error("Invalid data");
          for (t in (w.Library.crisp.client.Session.set_data(i), i))
            w.Trigger.Uc("user_data", { key: t, value: i[t] });
        }, !0);
      }),
      (P.prototype.set_session_segments = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n && n;
        w.Base.wc(function () {
          if (!t || !0 !== w.Validate.are_segments(t))
            throw new Error("Invalid segments value");
          w.Library.crisp.client.Session.set_segments(t, i);
        }, !0);
      }),
      (P.prototype.set_session_event = function (i, t, n) {
        var s = 1 < arguments.length && void 0 !== t ? t : null,
          e = 2 < arguments.length && void 0 !== n ? n : null;
        w.Base.wc(function () {
          var t = i instanceof Array && i[0] instanceof Array ? i : [[i, s, e]];
          if (!0 !== w.Validate.are_events(t))
            throw new Error("Invalid event text or data");
          w.Library.crisp.client.Session.send_event(t);
          for (var n = 0; n < t.length; n++)
            w.Trigger.Uc("user_event", { text: t[n][0] });
        }, !0);
      }),
      (P.prototype.set_user_email = function (t, n) {
        var i = 0 < arguments.length && void 0 !== t ? t : null,
          s = 1 < arguments.length && void 0 !== n ? n : null;
        if (!i || !0 !== w.Validate.is_email(i))
          throw new Error("Invalid email");
        if (null !== s && !0 !== this.Rc.test(s))
          throw new Error(
            "Invalid verify signature (should be lowercase HMAC-SHA256)"
          );
        w.Library.crisp.client.Session.set_email(i, !1, s),
          this.Nc(),
          this.Oc("user:email:changed", i);
      }),
      (P.prototype.set_user_phone = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        if (
          ("number" == typeof n && (n = "" + n),
          !n || !0 !== w.Validate.is_phone(n))
        )
          throw new Error("Invalid phone");
        w.Library.crisp.client.Session.set_phone(n),
          this.Nc(),
          this.Oc("user:phone:changed", n);
      }),
      (P.prototype.set_user_nickname = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        if ("string" != typeof n || !n) throw new Error("Invalid nickname");
        w.Library.crisp.client.Session.set_nickname(n),
          this.Oc("user:nickname:changed", n);
      }),
      (P.prototype.set_user_avatar = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        if (!n || !0 !== w.Validate.is_avatar(n))
          throw new Error("Invalid avatar");
        w.Library.crisp.client.Session.set_avatar(n),
          this.Oc("user:avatar:changed", n);
      }),
      (P.prototype.set_user_company = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n ? n : {};
        if (!t) throw new Error("Invalid company name");
        var s = { name: t };
        if (i.url) {
          if ("string" != typeof i.url) throw new Error("Invalid URL");
          s.url = i.url;
        }
        if (i.description) {
          if ("string" != typeof i.description)
            throw new Error("Invalid description");
          s.description = i.description;
        }
        if ((i.employment || [])[0]) {
          if (
            "string" != typeof i.employment[0] ||
            "string" != typeof i.employment[1]
          )
            throw new Error("Invalid employment");
          s.employment = { title: i.employment[0], role: i.employment[1] };
        }
        if ((i.geolocation || [])[0]) {
          if (
            "string" != typeof i.geolocation[0] ||
            (i.geolocation[1] && "string" != typeof i.geolocation[1])
          )
            throw new Error("Invalid geolocation");
          s.geolocation = {
            country: i.geolocation[0],
            city: i.geolocation[1] || null,
          };
        }
        w.Library.crisp.client.Session.set_company(s);
      }),
      (P.prototype.config_availability_tooltip = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Mc("availability_tooltip", n),
          !0 === n && !0 !== w.Base.Ac() && w.Minimized.Interface.$c();
      }),
      (P.prototype.config_hide_vacation = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Mc("hide_vacation", n);
      }),
      (P.prototype.config_hide_on_away = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Mc("hide_on_away", n);
      }),
      (P.prototype.config_hide_on_mobile = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Mc("hide_on_mobile", n);
      }),
      (P.prototype.config_position_reverse = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Base.Mc("position_reverse", n);
      }),
      (P.prototype.config_sound_mute = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        w.Sound.mute(n);
      }),
      (P.prototype.config_color_theme = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        w.Base.Lc({ color: { theme: n } });
      }),
      (P.prototype.config_container_index = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : null;
        w.Base.Lc({ other: { container_index: n } });
      }),
      (P.prototype.config_show_operator_count = function (t) {
        var n = !(0 < arguments.length && void 0 !== t) || t;
        w.Base.Lc({ other: { show_operator_count: n } });
      }),
      (P.prototype.Pc = function (t, n) {
        if ("function" != typeof n)
          throw new Error("Handler must be a function");
        this.Jc[t] = n;
      }),
      (P.prototype.Hc = function (t) {
        void 0 !== this.Jc[t] && delete this.Jc[t];
      }),
      (P.prototype.Oc = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n ? n : [];
        if (-1 === this.Wc.indexOf(t))
          throw new Error("Event namespace not recognized: " + t);
        if ("function" == typeof this.Jc[t])
          try {
            this.Jc[t].apply(
              window,
              i instanceof Array ? i : void 0 !== i ? [i] : []
            );
          } catch (t) {}
      }),
      (P.prototype.Gc = function () {
        try {
          var t = w.Base.lc.__spool.pending_actions;
          if ((delete w.Base.lc.__spool.pending_actions, t && 0 < t.length))
            for (var n = 0; n < t.length; n++)
              try {
                w.Pipeline.push(t[n]);
              } catch (t) {}
        } catch (t) {}
      }),
      (P.prototype.Nc = function () {
        !0 === w.Chat.fc &&
          (!0 === w.Chat.Message.Ic && w.Chat.Alert.Vc("wait_reply", "show"),
          w.Chat.Alert.Vc("warn_reply", "hide"),
          w.Chat.Alert.Vc("email_invalid", "hide"),
          w.Chat.Intent.Vc("identity", !1));
      }),
      (P.prototype.bc = function (t, n) {
        var i = { type: null, content: null };
        switch (t) {
          case "text":
            if ("string" != typeof n || !n)
              throw new Error("Invalid text message");
            (i.type = "text"), (i.content = n);
            break;
          case "file":
            if (
              "object" !== (void 0 === n ? "undefined" : o(n)) ||
              !n.name ||
              !n.url ||
              !n.type
            )
              throw new Error("Invalid file message");
            (i.type = "file"),
              (i.content = { name: n.name, url: n.url, type: n.type });
            break;
          case "animation":
            if (
              "object" !== (void 0 === n ? "undefined" : o(n)) ||
              !n.url ||
              !n.type
            )
              throw new Error("Invalid animation message");
            (i.type = "animation"), (i.content = { url: n.url, type: n.type });
            break;
          case "audio":
            if (
              "object" !== (void 0 === n ? "undefined" : o(n)) ||
              !n.url ||
              !n.type ||
              !n.duration
            )
              throw new Error("Invalid audio message");
            (i.type = "audio"),
              (i.content = { url: n.url, type: n.type, duration: n.duration });
            break;
          case "picker":
            if (
              "object" !== (void 0 === n ? "undefined" : o(n)) ||
              !n.id ||
              !n.text ||
              0 === (n.choices || []).length
            )
              throw new Error("Invalid picker message");
            (i.type = "picker"),
              (i.content = { id: n.id, text: n.text, choices: n.choices });
            break;
          case "field":
            if (
              "object" !== (void 0 === n ? "undefined" : o(n)) ||
              !n.id ||
              !n.text ||
              !n.explain
            )
              throw new Error("Invalid field message");
            (i.type = "field"),
              (i.content = { id: n.id, text: n.text, explain: n.explain });
        }
        return i;
      }),
      new P())),
      (w.Pipeline =
        ((L.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (L.prototype.push = function (t) {
          void 0 !== ((window.$crisp || {}).__spool || {}).pending_actions
            ? window.$crisp.__spool.pending_actions.push(t)
            : t[0] &&
              void 0 !== t[1] &&
              -1 !== this.Kc.indexOf(t[0]) &&
              "function" == typeof this[t[0]] &&
              this[t[0]](t[1], t[2] || []);
        }),
        (L.prototype.get = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : [];
          return this.Xc("get", t, this.Yc(i));
        }),
        (L.prototype.set = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : [];
          return this.Xc("set", t, this.Yc(i));
        }),
        (L.prototype.is = function (t) {
          return this.Xc("is", t);
        }),
        (L.prototype.do = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : [];
          return this.Xc("do", t, this.Yc(i));
        }),
        (L.prototype.on = function (t, n) {
          return this.Zc("on", t, [t, n]);
        }),
        (L.prototype.off = function (t) {
          return this.Zc("off", t, [t]);
        }),
        (L.prototype.config = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : [];
          return this.Xc("config", t, this.Yc(i));
        }),
        (L.prototype.safe = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          if ("boolean" != typeof n)
            throw new Error("Safe mode value must be 'true' or 'false'.");
          this.Ue = n;
        }),
        (L.prototype.help = function () {
          var t,
            n = [];
          for (t in w.Action) {
            var i = t.split("_");
            1 < i.length &&
              -1 !== this.Kc.indexOf(i[0]) &&
              "function" == typeof w.Action[t] &&
              n.push("$crisp." + i[0] + "('" + i.slice(1).join(":") + "')");
          }
          for (var s = 0; s < this.Qc.length; s++)
            for (var e = 0; e < w.Action.Wc.length; e++)
              n.push("$crisp." + this.Qc[s] + "('" + w.Action.Wc[e] + "')");
          return n;
        }),
        (L.prototype.Yc = function (t) {
          return t ? (t instanceof Array ? t : [t]) : [];
        }),
        (L.prototype.Xc = function (t, n, i) {
          var s = 2 < arguments.length && void 0 !== i ? i : [];
          try {
            var e = t + "_" + (n || "").replace(/:/g, "_");
            if ("function" == typeof w.Action[e])
              return w.Action[e].apply(w.Action, s);
            this.ta(n);
          } catch (t) {
            if (!0 !== this.Ue) throw t;
          }
        }),
        (L.prototype.Zc = function (t, n, i) {
          var s = 2 < arguments.length && void 0 !== i ? i : [];
          try {
            var e = w.Action.na[t];
            if ("function" != typeof e)
              throw new Error("No such event method for action: " + t);
            if (-1 !== w.Action.Wc.indexOf(n)) return e.apply(w.Action, s);
            this.ta(n);
          } catch (t) {
            if (!0 !== this.Ue) throw t;
          }
        }),
        (L.prototype.ta = function (t) {
          throw new Error(
            "No such namespace: " +
              t +
              " - Call $crisp.help() for a list of available actions."
          );
        }),
        (L.prototype.Z = function () {
          try {
            this.Ue = !1;
          } catch (t) {}
        }),
        new L())),
      (w.Validate =
        (($.prototype.is_email = function (t) {
          var n = !1;
          try {
            t.match(this.ia) && (n = !0);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        ($.prototype.is_phone = function (t) {
          var n = !1;
          try {
            t.match(this.sa) && (n = !0);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        ($.prototype.is_avatar = function (t) {
          var n = !1;
          try {
            t.match(this.ea) && (n = !0);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        ($.prototype.is_data = function (t) {
          var n = !1;
          try {
            if (t instanceof Object)
              for (var i in ((n = 0 < w.Utility.keys(t).length && !0), t)) {
                var s = t[i];
                ("string" != typeof i ||
                  !0 !== this.aa.test(i) ||
                  ("string" != typeof s &&
                    "boolean" != typeof s &&
                    "number" != typeof s)) &&
                  (n = !1);
              }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        ($.prototype.are_events = function (t) {
          var n = !1;
          try {
            if (t instanceof Array) {
              n = 0 < t.length && !0;
              for (var i = 0; i < t.length; i++)
                ("string" == typeof t[i][0] &&
                  t[i][0] &&
                  (!1 !== w.Utility.is_empty(t[i][1]) ||
                    !1 !== this.is_data(t[i][1]))) ||
                  (n = !1);
            }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        ($.prototype.are_segments = function (t) {
          var n = !1;
          try {
            if (t instanceof Array) {
              n = !0;
              for (var i = [], s = 0; s < t.length; s++) {
                var e = (t[s] || "").trim();
                if (!e || e.length > this.oa || -1 !== i.indexOf(e)) {
                  n = !1;
                  break;
                }
                i.push(e);
              }
            }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        new $())),
      (w.Date =
        ((M.prototype.timestamp_to_iso = function (t) {
          try {
            return new Date(t).toISOString();
          } catch (t) {}
        }),
        (M.prototype.iso_to_timestamp = function (t) {
          try {
            return new Date(t).getTime();
          } catch (t) {}
        }),
        (M.prototype.timestamp_to_properties = function (t) {
          var n,
            i,
            s,
            e = { day: "none", month: "none", year: "none", title: null };
          try {
            0 < t &&
              ((n = new Date(t)),
              (i = w.Locale.text("days", this.ra[n.getDay()])),
              (s = w.Locale.text("months", this.ha[n.getMonth()])),
              (e.day = "" + n.getDate()),
              (e.month = "" + (n.getMonth() + 1)),
              (e.year = "" + n.getFullYear()),
              (e.title = i + ", " + n.getDate() + " " + s),
              new Date().getYear() !== n.getYear() &&
                (e.title += " (" + e.year + ")"));
          } catch (t) {
          } finally {
            return e;
          }
        }),
        (M.prototype.seconds_in_timestamp = function (t) {
          var n = 0;
          try {
            if (isNaN(t)) throw new Error("Timestamp is not a number");
            n = Math.floor(parseInt(t, 10) / this.ua);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (M.prototype.timestamp = function () {
          try {
            return new Date().getTime();
          } catch (t) {}
        }),
        (M.prototype.difference = function (t, n) {
          var i = -1;
          try {
            i = this.iso_to_timestamp(t) - this.iso_to_timestamp(n);
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (M.prototype.equal = function (t, n) {
          var i = !1;
          try {
            i = 0 === this.difference(t, n) && !0;
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (M.prototype.format_time = function (t, n) {
          var i,
            s,
            e,
            c = 1 < arguments.length && void 0 !== n && n,
            a = "0:00";
          try {
            0 <= t &&
              ((t = Math.round(t)),
              (i = Math.floor(t / this.la)),
              (s = Math.floor((t % this.la) / this.fa)),
              (e = (t % this.fa) % this.la),
              (a =
                0 < i || !0 === c
                  ? i +
                    ":" +
                    w.Utility.pad_number(s, "00") +
                    ":" +
                    w.Utility.pad_number(e, "00")
                  : s + ":" + w.Utility.pad_number(e, "00")));
          } catch (t) {
          } finally {
            return a;
          }
        }),
        (M.prototype.format_date = function (t) {
          var n = null;
          try {
            var i = new Date(),
              s = new Date(t),
              i = i.getTime() - s.getTime();
            if (
              ((i = this.da(i)).type ||
                ((i.type = "far_away"),
                (i.data = { date_full: s.toLocaleDateString() })),
              !(n = w.Library.dom(
                w.Template.render("date_" + i.type, i.data)
              ).text()))
            )
              throw new Error("Empty parsed date for ISO string: " + t);
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (M.prototype.format_duration = function (t, n) {
          var i = !(1 < arguments.length && void 0 !== n) || n,
            s = null;
          try {
            var e = this.da(t, i);
            if (
              (e.type || (e.type = "days"),
              !(s = w.Library.dom(
                w.Template.render("duration_" + e.type, e.data)
              ).text()))
            )
              throw new Error("Empty parsed duration for duration: " + t);
          } catch (t) {
          } finally {
            return s;
          }
        }),
        (M.prototype.digest = function () {
          var e = this;
          try {
            null !== w.Base.yc &&
              w.Base.yc
                .find('[data-date-iso][data-date-watch="true"]')
                .each(function (t, n, i) {
                  var s = i.eq(n),
                    i = s.attr("data-date-iso"),
                    n = s.attr("data-date-format"),
                    i = e.format_date(i);
                  n &&
                    (i = w.Library.crisp.web.Parse.replace(n, [
                      w.Utility.lower_string_first(i),
                    ])),
                    s.text(i);
                });
          } catch (t) {}
        }),
        (M.prototype.watch = function () {
          var t = this;
          try {
            w.Utility.set_timeout(function () {
              try {
                t.digest(), t.watch();
              } catch (t) {}
            }, this.pa * this.ua);
          } catch (t) {}
        }),
        (M.prototype.da = function (t, n) {
          var i = !(1 < arguments.length && void 0 !== n) || n,
            s = {};
          try {
            var e = Math.round(t / this.ua);
            e < 10 && !0 === i
              ? (s.type = "now")
              : e < this.fa
              ? (s.type = "seconds")
              : e < this.la
              ? ((s.type = "minutes"),
                (s.data = { minutes: Math.floor(e / this.fa) }))
              : e < this.va &&
                ((s.type = "hours"),
                (s.data = { hours: Math.floor(e / this.la) }));
          } catch (t) {
          } finally {
            return s;
          }
        }),
        new M())),
      (w.Theme =
        ((O.prototype.colors = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n,
            s = {};
          try {
            var e,
              c =
                !0 !== i ? w.Plugin.get_customization("color", "chatbox") : {},
              a = this.ya[t] || this.ya[this.ma];
            for (e in (this.ga(c, a), c))
              s[e] = { hex: c[e], rgba: this.wa.Et(this, c[e]) };
          } catch (t) {
          } finally {
            return s;
          }
        }),
        (O.prototype.ga = function (t, n) {
          try {
            for (var i in n) t[i] || (t[i] = n[i]);
          } catch (t) {}
        }),
        (O.prototype.wa = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : 1,
            s = "rgba(0, 0, 0, 1)";
          try {
            var e = [0, 0, 0],
              c = t.match(this.ba);
            c &&
              ((e[0] = parseInt(c[1], this.ka)),
              (e[1] = parseInt(c[2], this.ka)),
              (e[2] = parseInt(c[3], this.ka))),
              (s = "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + i + ")");
          } catch (t) {
          } finally {
            return s;
          }
        }),
        new O())),
      (w.Plugin =
        ((N.prototype.get_triggers = function () {
          var t = {};
          try {
            t =
              (
                (w.Base.nc.plugins["urn:crisp.im:triggers:0"] || {}).settings ||
                {}
              ).triggers || {};
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (N.prototype.get_customization = function (t, n, i) {
          var s = 2 < arguments.length && void 0 !== i ? i : null,
            e = null;
          try {
            (e =
              (((w.Base.nc.plugins["urn:crisp.im:customization:0"] || {})
                .settings || {})[t] || {})[n] || {}),
              s && (e = e[s] || null);
          } catch (t) {
          } finally {
            return e;
          }
        }),
        new N())),
      (w.Sound =
        ((R.prototype.reset = function () {
          try {
            this.stop(), this.Z();
          } catch (t) {}
        }),
        (R.prototype.allow = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          try {
            this.xa = n;
          } catch (t) {}
        }),
        (R.prototype.mute = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          try {
            this.Fa = n;
          } catch (t) {}
        }),
        (R.prototype.initialize = function (t) {
          try {
            if (!1 === this.xa) return;
            this.Ea[t] = this.Ea[t] || {};
            for (var n = this.Ca[t], i = 0; i < n.length; i++)
              void 0 === this.Ea[t][n[i]] && this.ja(t, n[i]);
          } catch (t) {}
        }),
        (R.prototype.start = function (i, s, t, n) {
          var e = this,
            c = 2 < arguments.length && void 0 !== t && t,
            a = 3 < arguments.length && void 0 !== n ? n : 50;
          try {
            if (!1 === this.xa) return;
            if (!0 === w.Feature.has_html_audio() && !0 === this.qa(i)) {
              var o = this.Ca[i];
              if (void 0 === o) throw new Error("Subset does not exist: " + i);
              if (-1 === o.indexOf(s))
                throw new Error(
                  "Sound does not exist: " + s + " in subset " + i
                );
              this.stop(),
                this.ja(
                  i,
                  s,
                  function (t) {
                    var n;
                    null !== e.za &&
                      ("suspended" === e.za.state && e.za.resume(),
                      (n = e.za.createGain()).gain.setValueAtTime(a / 100, 0),
                      n.connect(e.za.destination),
                      (e.Sa = e.za.createBufferSource()),
                      (e.Sa.buffer = t),
                      (e.Sa.loop = c),
                      e.Sa.connect(n),
                      e.Sa.start(),
                      (e.Aa = i),
                      (e.Ia = s));
                  },
                  function (t) {}
                );
            }
          } catch (t) {}
        }),
        (R.prototype.stop = function (t, n) {
          var i = 0 < arguments.length && void 0 !== t ? t : null,
            s = 1 < arguments.length && void 0 !== n ? n : null;
          try {
            null === this.Sa ||
              (null !== i && i !== this.Aa) ||
              (null !== s && s !== this.Ia) ||
              (this.Sa.stop(),
              (this.Sa = null),
              (this.Aa = null),
              (this.Ia = null));
          } catch (t) {}
        }),
        (R.prototype.ja = function (n, i, t, s) {
          var e,
            c,
            a = this,
            o = 2 < arguments.length && void 0 !== t ? t : function () {},
            r = 3 < arguments.length && void 0 !== s ? s : function () {};
          try {
            (this.Ea[n] = this.Ea[n] || {}),
              (this.Da[n] = this.Da[n] || {}),
              void 0 === this.Da[n][i]
                ? ((this.Da[n][i] = { success: [o], error: [r] }),
                  void 0 !== this.Ea[n][i]
                    ? this.Ta("success", n, i, this.Ea[n][i])
                    : (e = this.Ba(n, i)) &&
                      ((c = new XMLHttpRequest()).open("GET", e, !0),
                      (c.responseType = "arraybuffer"),
                      (c.onload = function () {
                        null === a.za && (a.za = a.Ua()),
                          null !== a.za
                            ? a.za.decodeAudioData(
                                c.response,
                                function (t) {
                                  (a.Ea[n][i] = t), a.Ta("success", n, i, t);
                                },
                                function (t) {
                                  a.Ta("error", n, i, t);
                                }
                              )
                            : a.Ta("error", n, i);
                      }),
                      (c.onerror = function (t) {
                        a.Ta("error", n, i, t);
                      }),
                      c.send()))
                : (this.Da[n][i].success.push(o), this.Da[n][i].error.push(r));
          } catch (t) {}
        }),
        (R.prototype.Ta = function (t, n, i, s) {
          var e = 3 < arguments.length && void 0 !== s ? s : null,
            c = (this.Da[n] || {})[i];
          if (void 0 !== c) {
            for (var a = 0; a < c[t].length; a++) c[t][a](e);
            delete this.Da[n][i];
          }
        }),
        (R.prototype.Ba = function (t, n) {
          var i = null;
          try {
            var s = w.Feature.html_audio_format();
            null !== s &&
              (i =
                w.Base.Ra +
                "/static/sounds/" +
                t +
                "/" +
                n +
                "." +
                s +
                "?" +
                w.Base.Na);
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (R.prototype.Ua = function () {
          var t = null;
          try {
            try {
              !0 === w.Event.Oa &&
                ("function" == typeof AudioContext
                  ? (t = new AudioContext())
                  : "function" == typeof webkitAudioContext &&
                    (t = new webkitAudioContext()));
            } catch (t) {}
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (R.prototype.qa = function (t) {
          var n = !0;
          try {
            var i = !this.Fa && !0,
              s =
                "call" === t || !0 !== w.Library.crisp.client.Call.is_ongoing(),
              n = i && s && !0;
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (R.prototype.Z = function () {
          try {
            (this.xa = !0),
              (this.Fa = !1),
              (this.za = null),
              (this.Sa = null),
              (this.Aa = null),
              (this.Ia = null),
              (this.Ea = {}),
              (this.Da = {});
          } catch (t) {}
        }),
        new R()));
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Locale =
      ((U.prototype.reset = function () {
        try {
          this.Z();
        } catch (t) {}
      }),
      (U.prototype.detect = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : [],
          i = this.Ma;
        try {
          var s = void 0,
            e = void 0,
            c = [];
          for (
            n.length &&
              ((this.$a = w.Utility.intersect(n, this.La)),
              0 < this.$a.length &&
                -1 === this.$a.indexOf(i) &&
                (i = this.Ma = this.$a[0])),
              s = 0;
            s < w.Base.Pa.length;
            s++
          )
            (e = w.Base.Pa[s]) &&
              (c.push(e.toLowerCase()),
              -1 !== e.indexOf("-") &&
                (e = e.split("-")[0]) &&
                c.push(e.toLowerCase()));
          for (s = 0; s < c.length; s++)
            if (-1 !== this.$a.indexOf(c[s])) {
              i = c[s];
              break;
            }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (U.prototype.load = function (t, n) {
        var i = this;
        try {
          var s = t;
          -1 === this.$a.indexOf(t) && (s = this.Ma),
            null !== this.Ja &&
              this.Ja.Ha.locale_code !== t &&
              (this.Ja = null),
            null === this.Ja
              ? w.Base.Wa("locale", "locales/" + s + ".js", function (t) {
                  try {
                    i.Ga(s, t, n);
                  } catch (t) {}
                })
              : "function" == typeof n && n();
        } catch (t) {}
      }),
      (U.prototype.name = function () {
        var t = null;
        try {
          if (null === this.Ja)
            throw new Error("Cannot get locale name, locale data not loaded");
          t = this.Ja.Ha.locale_name;
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (U.prototype.code = function () {
        var t = null;
        try {
          if (null === this.Ja)
            throw new Error("Cannot get locale code, locale data not loaded");
          t = this.Ja.Ha.locale_code;
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (U.prototype.direction = function () {
        var t = null;
        try {
          if (null === this.Ja)
            throw new Error(
              "Cannot get locale direction, locale data not loaded"
            );
          (t = this.Ja.Ha.locale_direction),
            -1 === this.Va.indexOf(t) && (t = this.Ka);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (U.prototype.text = function (t, n, i) {
        var s = 2 < arguments.length && void 0 !== i ? i : [],
          e = null;
        try {
          var c = void 0,
            a = void 0;
          if (
            ("object" === (void 0 === n ? "undefined" : o(n))
              ? ((c = n[0]), (a = n[1]))
              : (c = a = n),
            null === this.Ja)
          )
            throw new Error("Cannot get locale text, locale data not loaded");
          if (void 0 === this.Ja.Xa[t])
            throw new Error("Locale text group not found: " + t);
          if (void 0 === this.Ja.Xa[t][a])
            throw new Error(
              "Locale text namespace not found in group: " + a + " in " + t
            );
          (e = w.Plugin.get_customization("text", t, c) || this.Ja.Xa[t][a]),
            (e = w.Library.crisp.web.Parse.replace(e, s)),
            (e = this.Ya(e));
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (U.prototype.Ga = function (t, n, i) {
        try {
          if (null !== this.Ja)
            throw new Error(
              "Locale has already been loaded (double requested handled?)"
            );
          if ("object" !== (void 0 === n ? "undefined" : o(n)))
            throw new Error("Did not receive a proper locale data file");
          if (n.Ha.locale_code !== t)
            throw new Error(
              "Received a mismatching locale code, expected: " + t
            );
          (this.Ja = n), "function" == typeof i && i();
        } catch (t) {
        } finally {
          return null;
        }
      }),
      (U.prototype.Ya = function (n) {
        var i = null;
        try {
          try {
            i = decodeURIComponent(escape(n));
          } catch (t) {
            i = n;
          }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (U.prototype.Z = function () {
        try {
          this.Ja = null;
        } catch (t) {}
      }),
      new U())),
      (w.Avatar =
        ((B.prototype.url = function (t, n, i, s) {
          var e = 3 < arguments.length && void 0 !== s ? s : null,
            c = "";
          try {
            c = e
              ? e.substring(0, w.Base.Pe.length) === w.Base.Pe
                ? e
                : w.Base.Pe +
                  "/process/thumbnail/?url=" +
                  encodeURIComponent(e) +
                  "&width=" +
                  t +
                  "&height=" +
                  t +
                  "&" +
                  w.Base.nc.website.buster
              : w.Base.Pe +
                "/avatar/" +
                n +
                "/" +
                (i || "default") +
                "/" +
                t +
                "/?" +
                w.Base.nc.website.buster;
          } catch (t) {
          } finally {
            return c;
          }
        }),
        (B.prototype.active_operators = function (t, n) {
          var i = [];
          try {
            var s = n.website.active_operators;
            if (0 < s.length)
              for (var e = 0; e < s.length; e++)
                e < this.Za &&
                  i.push({
                    type: "operator",
                    identifier: s[e].user_id,
                    avatar: s[e].avatar,
                    name: w.Library.crisp.web.Name.parse_first_name(
                      s[e].nickname
                    ),
                  });
            else
              i.push({ type: "website", identifier: t, name: n.website.name });
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (B.prototype.count_other_operators = function (t) {
          var n = 0;
          try {
            var i = (t.website.active_operators || []).length || 0;
            t.website.count_operators > i &&
              (n = Math.min(this.Qa, t.website.count_operators - i));
          } catch (t) {
          } finally {
            return n;
          }
        }),
        new B()));
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Template =
      ((T.prototype.render = function (t, n, i) {
        var s = 1 < arguments.length && void 0 !== n ? n : {},
          e = 2 < arguments.length && void 0 !== i ? i : {},
          c = "";
        try {
          if ("function" != typeof w.Library.jade.client[t])
            throw new Error("No such template: " + t);
          if ("object" !== (void 0 === s ? "undefined" : o(s)))
            throw new Error("Object argument is not an object");
          if (
            ((s._e = w.Locale.text.Et(w.Locale)),
            (s._f = w.Library.crisp.web.Parse.format.Et(
              w.Library.crisp.web.Parse
            )),
            (s._n = w.Library.crisp.web.Name.parse_first_name.Et(
              w.Library.crisp.web.Name
            )),
            (s._a = w.Avatar.url.Et(w.Avatar)),
            !1 === w.Utility.is_empty(e))
          )
            for (var a in e) void 0 === s[a] && (s[a] = e[a]);
          c = w.Library.jade.client[t](s).trim();
        } catch (t) {
        } finally {
          return c;
        }
      }),
      new T())),
      (w.Broker =
        ((D.prototype.init = function (
          t,
          n,
          i,
          s,
          e,
          c,
          a,
          o,
          r,
          h,
          u,
          l,
          f,
          d,
          p
        ) {
          var v = !(14 < arguments.length && void 0 !== p) || p;
          try {
            w.Library.crisp.client.init({
              environment: t,
              url_relay_client: n,
              url_relay_stream: i,
              url_go: s,
              website_domain: e,
              website_id: c,
              token_id: a,
              cookie_expire: o,
              cookie_domain: r,
              useragent: h,
              timezone: u,
              capabilities: l,
              locales: f,
              runtime_configuration: d,
              connect_socket: v,
              platform_name: "crisp-client",
              platform_signature_key:
                "25/2z/2h/3e/33/34/2g/20/2i/1v/2t/24/24/3c/2s/22",
            }),
              (this.no = w.Library.crisp.client.event),
              w.Base.so(),
              this.eo(),
              this.co(),
              this.ao(),
              this.oo(),
              this.ro(),
              this.ho(),
              this.uo(),
              this.lo(),
              this.fo(),
              this.po(),
              this.vo(),
              this.yo(),
              this.mo(),
              this._o(),
              this.go(),
              this.wo(),
              this.bo(),
              this.ko(),
              this.xo(),
              this.Fo(),
              this.Eo(),
              this.Co(),
              this.jo(),
              this.qo(),
              this.zo(),
              this.So(),
              this.Ao(),
              this.Io(),
              this.Do(),
              this.To(),
              this.Bo(),
              this.Uo(),
              this.Ro(),
              this.No(),
              this.Oo(),
              this.Mo(),
              this.$o(),
              this.Lo(),
              this.Po(),
              this.Jo(),
              this.Ho(),
              this.Wo(),
              this.Go(),
              this.Vo(),
              this.Ko(),
              this.Xo(),
              this.Yo(),
              this.Zo(),
              this.Qo();
          } catch (t) {}
        }),
        (D.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (D.prototype.eo = function () {
          var i = this;
          try {
            this.no.subscribe("socket:state", function (t, n) {
              !0 !== w.Chat.fc ||
                (n.connected === i.tr && n.failed_reconnect === i.nr) ||
                ((i.tr = n.connected || !1),
                (i.nr = n.failed_reconnect || !1),
                w.Chat.Interface.ir(i.tr, i.nr));
            });
          } catch (t) {}
        }),
        (D.prototype.co = function () {
          var i = this;
          try {
            this.no.subscribe("session:created", function (t, n) {
              n.error
                ? "invalid_website_id" === n.error && w.Base.run_error()
                : n.session_id && (i.sr = !0);
            });
          } catch (t) {}
        }),
        (D.prototype.ao = function () {
          var i = this;
          try {
            this.no.subscribe("session:joined", function (t, n) {
              n.error
                ? "invalid_session" === n.error &&
                  ++i.er <= i.cr &&
                  w.Library.crisp.client.Session.reset(
                    function () {
                      w.Library.crisp.client.Session.create();
                    },
                    function () {}
                  )
                : ((i.St = n.session_id || null),
                  (i.ar = n.session_hash || null),
                  !1 === n.socket && !0 !== n.initiated && w.Base.Cc(!0),
                  !0 === i.or
                    ? ((i.or = !1),
                      w.Base.rr(n, function (t, n, i) {
                        !0 !== i &&
                          (w.Base.spawn_client(t),
                          w.Library.crisp.client.Website.get_users_available());
                      }))
                    : !0 === w.Chat.fc && w.Chat.Message.hr());
            });
          } catch (t) {}
        }),
        (D.prototype.oo = function () {
          var s = this;
          try {
            this.no.subscribe("session:state", function (t, n) {
              if ((1 === s.ur && (s.ur++, (s.lr = !0)), !1 === w.Chat.fc)) {
                if (null !== s.fr.master) {
                  s.fr.master(w.Utility.is_empty(n) ? null : n);
                  for (var i = 0; i < s.fr.actions.length; i++)
                    s.fr.actions[i]();
                  (s.fr.master = null), (s.fr.actions = []);
                } else
                  w.Utility.is_empty(n)
                    ? (w.Minimized.init(!0, s.sr),
                      w.Library.crisp.client.Session.get_request_initiate())
                    : w.Chat.init(n);
                w.Base.dr();
              } else !0 === w.Chat.fc && w.Chat.State.receive(n);
              s.pr();
            });
          } catch (t) {}
        }),
        (D.prototype.ro = function () {
          try {
            this.no.subscribe("session:error", function (t, n) {
              "email:invalid_format" === n.type &&
                w.Chat.Alert.Vc({
                  warn_reply: "hide",
                  wait_reply: "hide",
                  email_invalid: "show",
                });
            });
          } catch (t) {}
        }),
        (D.prototype.ho = function () {
          try {
            this.no.subscribe("session:request:initiate", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.uo = function () {
          try {
            this.no.subscribe("session:request:purge", function (t, n) {
              w.Action.do_session_reset();
            });
          } catch (t) {}
        }),
        (D.prototype.lo = function () {
          var i = this;
          try {
            this.no.subscribe("website:users:available", function (t, n) {
              w.Availability.receive(n.available, n.changed),
                0 === i.ur
                  ? (i.ur++, w.Library.crisp.client.Session.get_state())
                  : w.Availability.apply();
            });
          } catch (t) {}
        }),
        (D.prototype.fo = function () {
          var i = this;
          try {
            this.no.subscribe("message:received", function (t, n) {
              i.sn(n);
            });
          } catch (t) {}
        }),
        (D.prototype.po = function () {
          var i = this;
          try {
            this.no.subscribe("message:received:local", function (t, n) {
              i.sn(n);
            });
          } catch (t) {}
        }),
        (D.prototype.vo = function () {
          try {
            this.no.subscribe("message:send", function (t, n) {
              !0 === w.Chat.fc && w.Chat.Message.sent(n);
            });
          } catch (t) {}
        }),
        (D.prototype.yo = function () {
          try {
            this.no.subscribe("message:sent", function (t, n) {
              !0 === w.Chat.fc && w.Chat.Message.sent_acknowledgement(n),
                w.Action.Oc("message:sent", n);
            });
          } catch (t) {}
        }),
        (D.prototype._o = function () {
          try {
            this.no.subscribe("message:compose:send", function (t, n) {
              w.Action.Oc("message:compose:sent", n);
            });
          } catch (t) {}
        }),
        (D.prototype.go = function () {
          try {
            this.no.subscribe(
              "message:acknowledge:pending",
              function (t, n) {}
            );
          } catch (t) {}
        }),
        (D.prototype.wo = function () {
          try {
            this.no.subscribe("message:acknowledge:read:send", function (t, n) {
              w.Chat.Message.vr(n);
            });
          } catch (t) {}
        }),
        (D.prototype.bo = function () {
          try {
            this.no.subscribe(
              "message:acknowledge:read:received",
              function (t, n) {}
            );
          } catch (t) {}
        }),
        (D.prototype.ko = function () {
          try {
            this.no.subscribe("message:thread", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.mo = function () {
          try {
            this.no.subscribe("message:compose:received", function (t, n) {
              if (!0 === w.Chat.fc && !0 !== w.Base.nc.chat.operator_privacy)
                switch (n.type) {
                  case "start":
                    w.Chat.Message.yr(n.timestamp);
                    break;
                  case "stop":
                    w.Chat.Message.mr();
                }
              w.Action.Oc("message:compose:received", n);
            });
          } catch (t) {}
        }),
        (D.prototype.xo = function () {
          try {
            this.no.subscribe("history:message:received", function (t, n) {
              !0 === w.Chat.fc && w.Chat.Message.received_from_history(n);
            });
          } catch (t) {}
        }),
        (D.prototype.Fo = function () {
          try {
            this.no.subscribe("history:message:sent", function (t, n) {
              !0 === w.Chat.fc && w.Chat.Message.sent_from_history(n);
            });
          } catch (t) {}
        }),
        (D.prototype.Eo = function () {
          try {
            this.no.subscribe("call:request:initiate", function (t, n) {
              w.Library.crisp.client.Call.init(
                {
                  ice: w.Base._r,
                  call_id: n.call_id,
                  mode: n.mode,
                  has_support: n.has_support,
                },
                function () {
                  w.Call.ring(n);
                },
                function () {}
              );
            });
          } catch (t) {}
        }),
        (D.prototype.Co = function () {
          try {
            this.no.subscribe("call:action:stopped", function (t, n) {
              w.Call.stop(n);
            });
          } catch (t) {}
        }),
        (D.prototype.jo = function () {
          try {
            this.no.subscribe("call:peer:local:error", function (t, n) {
              w.Call.error("peer_local");
            });
          } catch (t) {}
        }),
        (D.prototype.qo = function () {
          try {
            this.no.subscribe("call:peer:remote:error", function (t, n) {
              w.Call.error("peer_remote");
            });
          } catch (t) {}
        }),
        (D.prototype.zo = function () {
          try {
            this.no.subscribe("call:media:local:success", function (t, n) {
              w.Call.success("media_local");
            });
          } catch (t) {}
        }),
        (D.prototype.So = function () {
          try {
            this.no.subscribe("call:media:local:error", function (t, n) {
              w.Call.error("media_local");
            });
          } catch (t) {}
        }),
        (D.prototype.Ao = function () {
          try {
            this.no.subscribe("call:media:remote:success", function (t, n) {
              w.Call.success("media_remote");
            });
          } catch (t) {}
        }),
        (D.prototype.Io = function () {
          try {
            this.no.subscribe("call:track:local:started", function (t, n) {
              w.Call.toggle_media_status(n.media, !0);
            });
          } catch (t) {}
        }),
        (D.prototype.Do = function () {
          try {
            this.no.subscribe("call:track:local:ended", function (t, n) {
              w.Call.toggle_media_status(n.media, !1);
            });
          } catch (t) {}
        }),
        (D.prototype.To = function () {
          var i = this;
          try {
            this.no.subscribe("browsing:request:initiate", function (t, n) {
              i.gr.push(function () {
                w.Base.Wa("browsing", "browsing.js", function (t) {
                  try {
                    w.Library.crisp.client.Browsing.init(
                      {
                        resume: n.resume || !1,
                        deps: { tree_mirror: t.TreeMirrorClient },
                      },
                      function () {},
                      function () {}
                    );
                  } catch (t) {}
                });
              }),
                i.pr();
            });
          } catch (t) {}
        }),
        (D.prototype.Bo = function () {
          try {
            this.no.subscribe("browsing:assist:started", function (t, n) {
              w.Browsing.Assist.start();
            });
          } catch (t) {}
        }),
        (D.prototype.Uo = function () {
          try {
            this.no.subscribe("browsing:assist:stopped", function (t, n) {
              w.Browsing.Assist.stop();
            });
          } catch (t) {}
        }),
        (D.prototype.Ro = function () {
          try {
            this.no.subscribe("browsing:assist:mouse", function (t, n) {
              w.Browsing.Assist.wr(n);
            });
          } catch (t) {}
        }),
        (D.prototype.No = function () {
          try {
            this.no.subscribe("browsing:assist:scroll", function (t, n) {
              w.Browsing.Assist.br(n);
            });
          } catch (t) {}
        }),
        (D.prototype.Oo = function () {
          try {
            this.no.subscribe("browsing:assist:click", function (t, n) {
              w.Browsing.Assist.kr(n);
            });
          } catch (t) {}
        }),
        (D.prototype.Mo = function () {
          var i = this;
          try {
            this.no.subscribe("bucket:url:upload:generate", function (t, n) {
              i.xr.bucket_url_upload_generate = n.id;
            });
          } catch (t) {}
        }),
        (D.prototype.$o = function () {
          var c = this;
          try {
            this.no.subscribe("bucket:url:upload:generated", function (t, n) {
              var i, s, e;
              c.xr.bucket_url_upload_generate === n.id &&
                "preparing" ===
                  w.Chat.Selector.get("form_button_attach").attr(
                    "data-state"
                  ) &&
                ((i = w.Chat.Selector.get("form_message")),
                (s = (n.url || {}).signed || ""),
                (e = (n.url || {}).resource || ""),
                (n = (n.policy || {}).size_limit || 0),
                s && e
                  ? (i.attr("data-action", s),
                    i.attr("data-resource", e),
                    i.attr("data-size-limit", n))
                  : (i.removeAttr("data-action"),
                    i.removeAttr("data-resource"),
                    i.removeAttr("data-size-limit")),
                i.trigger("event:attach"));
            });
          } catch (t) {}
        }),
        (D.prototype.Lo = function () {
          var i = this;
          try {
            this.no.subscribe("media:animation:list", function (t, n) {
              i.xr.media_animation_list = n.id;
            });
          } catch (t) {}
        }),
        (D.prototype.Po = function () {
          var i = this;
          try {
            this.no.subscribe("media:animation:listed", function (t, n) {
              i.xr.media_animation_list === n.id && w.Chat.Picker.Fr(n.results);
            });
          } catch (t) {}
        }),
        (D.prototype.Jo = function () {
          var i = this;
          try {
            this.no.subscribe("helpdesk:article:search", function (t, n) {
              i.xr.helpdesk_article_search = n.id;
            });
          } catch (t) {}
        }),
        (D.prototype.Ho = function () {
          var o = this;
          try {
            this.no.subscribe("helpdesk:article:searched", function (t, n) {
              if (o.xr.helpdesk_article_search === n.id) {
                var i = !(!n.search.query && 0 === n.results.length);
                w.Chat.Interface.Er(n.results, n.search, i);
                var s = w.Chat.Interface.sc("helpdesk");
                if (s) {
                  for (var e, c = [], a = 0; a < n.results.length; a++)
                    (e = n.results[a]),
                      c.push({
                        title: e.title,
                        url: "" + s + e.locale + "/article/" + e.slug + "/",
                      });
                  w.Action.Oc("helpdesk:queried", {
                    query: n.search.query,
                    results: c,
                  });
                }
              }
            });
          } catch (t) {}
        }),
        (D.prototype.Wo = function () {
          var i = this;
          try {
            this.no.subscribe("helpdesk:article:suggest", function (t, n) {
              i.xr.helpdesk_article_suggest = n.id;
            });
          } catch (t) {}
        }),
        (D.prototype.Go = function () {
          var i = this;
          try {
            this.no.subscribe("helpdesk:article:suggested", function (t, n) {
              i.xr.helpdesk_article_suggest === n.id &&
                w.Chat.Interface.Cr(n.results);
            });
          } catch (t) {}
        }),
        (D.prototype.Vo = function () {
          try {
            this.no.subscribe("helpdesk:article:report", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.Ko = function () {
          try {
            this.no.subscribe("storage:sync:update", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.Xo = function () {
          try {
            this.no.subscribe("storage:sync:updated", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.Yo = function () {
          try {
            this.no.subscribe("trigger:fired", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.Zo = function () {
          try {
            this.no.subscribe("issue:report", function (t, n) {});
          } catch (t) {}
        }),
        (D.prototype.Qo = function () {
          try {
            this.no.subscribe("window:history", function (t, n) {
              (w.Base.jr = n.page_url),
                (w.Base.qr = n.page_domain),
                (n = w.Base.zr()),
                null !== w.Base.yc &&
                  w.Base.yc.attr("data-blocked", !0 === n ? "true" : "false"),
                w.Trigger.Sr();
            });
          } catch (t) {}
        }),
        (D.prototype.sn = function (t) {
          try {
            w.Chat.Ar();
            var n = "network" === t.origin && !0;
            w.Chat.Message.received(t, n, n, !0, !1),
              w.Action.Oc("message:received", t);
          } catch (t) {}
        }),
        (D.prototype.pr = function () {
          try {
            if (!0 === this.lr) for (; 0 < this.gr.length; ) this.gr.shift()();
          } catch (t) {}
        }),
        (D.prototype.Z = function () {
          try {
            (this.St = null),
              (this.ar = null),
              (this.tr = !0),
              (this.xr = {}),
              (this.fr = { master: null, actions: [] }),
              (this.no = null),
              (this.sr = !1),
              (this.or = !0),
              (this.nr = !1),
              (this.ur = 0),
              (this.lr = !1),
              (this.gr = []),
              (this.er = 0);
          } catch (t) {}
        }),
        new D())),
      (w.Availability =
        ((I.prototype.init = function () {}),
        (I.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (I.prototype.receive = function (t, n) {
          var i,
            s,
            e = 0 < arguments.length && void 0 !== t && t,
            c = 1 < arguments.length && void 0 !== n && n;
          try {
            (this.Tc = e),
              !0 === c &&
                ((i = w.Date.timestamp()),
                (w.Base.nc.website.last_available = i),
                (s = w.Chat.Selector.get("header_status_type_away")) &&
                  s.attr("data-date-iso", w.Date.timestamp_to_iso(i)),
                w.Date.digest()),
              w.Action.Oc("website:availability:changed", this.Tc);
          } catch (t) {}
        }),
        (I.prototype.apply = function () {
          try {
            var t = !0 === this.Tc ? "online" : "away";
            null !== w.Base.yc &&
              (w.Base.yc.attr("data-availability", t),
              !1 === this.Ir &&
                "online" == t &&
                ((this.Ir = !0),
                w.Base.yc.attr("data-was-availability-online", "true")));
          } catch (t) {}
        }),
        (I.prototype.Z = function () {
          try {
            (this.Tc = !1), (this.Ir = !1);
          } catch (t) {}
        }),
        new I())),
      (w.Event =
        ((A.prototype.init = function () {
          try {
            this.Dr();
          } catch (t) {}
        }),
        (A.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (A.prototype.trigger_interacted = function () {
          try {
            (this.Oa = !0), this.Tr();
          } catch (t) {}
        }),
        (A.prototype.Dr = function () {
          try {
            this.Br(), this.Ur();
          } catch (t) {}
        }),
        (A.prototype.Br = function () {
          try {
            w.Utility.add_event_listener(
              this.ns,
              "window",
              "resize",
              function () {
                try {
                  !0 === w.Chat.fc ? w.Chat.Interface.mc() : w.Base.Rr();
                } catch (t) {}
              }
            );
          } catch (t) {}
        }),
        (A.prototype.Ur = function () {
          try {
            this.Tr(),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "click",
                this.trigger_interacted.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "touchend",
                this.trigger_interacted.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "touchmove",
                this.trigger_interacted.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "keydown",
                this.trigger_interacted.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "mousemove",
                this.Tr.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "focus",
                this.Tr.Et(this),
                this.Nr
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "blur",
                this.Tr.Et(this),
                this.Nr
              );
          } catch (t) {}
        }),
        (A.prototype.Tr = function () {
          var t = this;
          try {
            null !== this.Or && w.Utility.clear_timeout(this.Or),
              (this.Or = w.Utility.set_timeout(function () {
                t.Mr();
              }, this.$r)),
              !0 === this.Lr && w.Library.crisp.client.socket.connect(),
              (this.Lr = !1),
              w.Library.crisp.client.Session.mark_active();
          } catch (t) {}
        }),
        (A.prototype.Mr = function () {
          try {
            !0 === w.Library.crisp.client.socket.connected &&
              ((this.Lr = !0), w.Library.crisp.client.socket.disconnect());
          } catch (t) {}
        }),
        (A.prototype.Z = function () {
          try {
            (this.Oa = !1), (this.Lr = !1), (this.Or = null);
          } catch (t) {}
        }),
        new A()));
    var f = function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t))
        return (function (t, n) {
          var i = [],
            s = !0,
            e = !1,
            c = void 0;
          try {
            for (
              var a, o = t[Symbol.iterator]();
              !(s = (a = o.next()).done) &&
              (i.push(a.value), !n || i.length !== n);
              s = !0
            );
          } catch (t) {
            (e = !0), (c = t);
          } finally {
            try {
              !s && o.return && o.return();
            } finally {
              if (e) throw c;
            }
          }
          return i;
        })(t, n);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    w.Trigger =
      ((S.prototype.init = function (t) {
        try {
          (this.Pr = t), this.Jr();
        } catch (t) {}
      }),
      (S.prototype.reset = function () {
        try {
          this.Z();
        } catch (t) {}
      }),
      (S.prototype.zc = function (t) {
        var n = !1;
        try {
          var i = (this.Pr || {})[t];
          i && !0 === i.enabled && (this.Kc(t, i), (n = !0));
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.Uc = function (t, n) {
        try {
          for (var i = this.Hr[t] || [], s = 0; s < i.length; s++) i[s](n);
        } catch (t) {}
      }),
      (S.prototype.Wr = function (t) {
        try {
          -1 === w.Trigger.Gr.indexOf(t) && w.Trigger.Gr.push(t),
            w.Library.crisp.client.Storage.set_stamp_local(
              this.Vr,
              [w.Base.Kr, "status", t],
              this.Xr
            );
        } catch (t) {}
      }),
      (S.prototype.Sr = function () {
        try {
          var t, n, i, s;
          for (s in this.Pr)
            if (!0 === (t = this.Pr[s]).enabled && (n = t.events))
              for (var e in n)
                "page" === e &&
                  !0 === (i = n[e]).enabled &&
                  this.Yr(s, t, n, i.settings || {});
        } catch (t) {}
      }),
      (S.prototype.Jr = function () {
        try {
          var t,
            n,
            i,
            s,
            e = void 0,
            c = !1;
          for (s in this.Pr)
            if (!0 === (t = this.Pr[s]).enabled && (n = t.events))
              for (var a in n)
                !0 === (i = n[a]).enabled &&
                  "function" == typeof (e = this.Zr[a]) &&
                  (e.Et(this)(s, t, n, i.settings || {}), (c = !0));
          !0 === c && this.Qr();
        } catch (t) {}
      }),
      (S.prototype.Kc = function (e, c) {
        var t,
          a = this;
        try {
          !0 === this.th(c) &&
            !1 === this.nh(e) &&
            ((t = w.Utility.clone(this.Gr)).push(e),
            this.ih(function () {
              w.Chat.State.propagate("trigger", t, !1, function (t) {
                if (!0 === t && !0 === a.th(c) && c.actions) {
                  var n,
                    i,
                    s = void 0;
                  for (i in c.actions)
                    !0 === (n = c.actions[i]).enabled &&
                      "function" == typeof (s = a.sh[i]) &&
                      (s.Et(a)(e, c, n.settings || {}),
                      w.Library.crisp.client.Trigger.fired(e, c.name));
                }
              });
            }));
        } catch (t) {}
      }),
      (S.prototype.ih = function (t) {
        var n = this;
        try {
          w.Base.wc(function () {
            !0 !== n.eh && ((n.eh = !0), w.Chat.Ar()), t();
          });
        } catch (t) {}
      }),
      (S.prototype.th = function (t) {
        var n = !1;
        try {
          if (
            ((n = !1 === w.Base.ch()),
            !0 === this.ah(t, "if_website_online") &&
              (n = !0 === w.Action.is_website_available() && n),
            !0 === this.ah(t, "if_first_visit") &&
              (n =
                "1" ===
                  w.Library.crisp.client.Storage.get_stamp_local(
                    this.Vr,
                    this.oh("count")
                  ) && n),
            !0 === this.ah(t, "if_trigger_sole") &&
              (n = !0 !== w.Chat.Message.rh && n),
            !0 === this.ah(t, "if_countries"))
          ) {
            var i = !1,
              s = (t.behaviors.if_countries || {}).settings;
            if (s) for (var e in s) e === w.Base.nc.chat.country && (i = !0);
            n = i;
          }
          !1 === w.Base.Ac() && !1 === this.hh(t, "desktop") && (n = !1),
            !0 === w.Base.Ac() && !1 === this.hh(t, "mobile") && (n = !1);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.uh = function (t, n) {
        var i = 0 < arguments.length && void 0 !== t && t,
          s = 1 < arguments.length && void 0 !== n ? n : {},
          e = 100;
        try {
          !0 === i && s.after && 0 < s.after && (e = s.after * this.ua);
        } catch (t) {
        } finally {
          return e;
        }
      }),
      (S.prototype.lh = function (t, n, i, s) {
        try {
          if (s.after && 0 < s.after) {
            var e,
              c = !1;
            for (e in i)
              if ("delay" !== e && !0 === i[e].enabled) {
                c = !0;
                break;
              }
            !1 === c && this.fh(t, n, { enabled: !0, settings: s });
          }
        } catch (t) {}
      }),
      (S.prototype.dh = function (n, i, s) {
        var e = this;
        try {
          for (var t = !0, c = 0; c < this.ph.length; c++) {
            var a = this.ph[c];
            if (
              !0 === (s[a] || {}).enabled &&
              !1 === (t = this.vh[a].Et(this)(s))
            )
              break;
          }
          !0 === t &&
            (w.Utility.add_event_listener(
              this.ns,
              "window",
              "mouseout",
              function (t) {
                try {
                  !0 === e.yh &&
                    !t.relatedTarget &&
                    !t.toElement &&
                    t.clientY <= e.mh &&
                    ((e.yh = !1),
                    null === e._h && (e._h = e.fh(n, i, s.delay)));
                } catch (t) {}
              }
            ),
            w.Utility.add_event_listener(
              this.ns,
              "window",
              "mouseover",
              function () {
                try {
                  !0 !== e.yh &&
                    ((e.yh = !0),
                    null !== e._h &&
                      (w.Utility.clear_timeout(e._h), (e._h = null)));
                } catch (t) {}
              }
            ));
        } catch (t) {}
      }),
      (S.prototype.gh = function (e, c, a, o) {
        var r = this;
        try {
          o.ids &&
            0 < o.ids.length &&
            w.Utility.add_event_listener(
              this.ns,
              "document",
              "click",
              function (t) {
                try {
                  if (
                    t &&
                    t.target &&
                    "a" === (t.target.nodeName || "").toLowerCase()
                  )
                    for (var n = 0; n < o.ids.length; n++) {
                      var i = document.getElementById(o.ids[n]),
                        s =
                          "function" == typeof document.querySelector
                            ? document.querySelector(o.ids[n])
                            : null;
                      if (i === t.target || s === t.target) {
                        r.fh(e, c, a.delay);
                        break;
                      }
                    }
                } catch (t) {}
              }
            );
        } catch (t) {}
      }),
      (S.prototype.Yr = function (t, n, i) {
        try {
          !0 !== (i.leave || {}).enabled &&
            !0 === this.wh(i) &&
            this.fh(t, n, i.delay);
        } catch (t) {}
      }),
      (S.prototype.bh = function (t, n, i) {
        try {
          !0 !== (i.leave || {}).enabled &&
            !0 === this.kh(i) &&
            this.fh(t, n, i.delay);
        } catch (t) {}
      }),
      (S.prototype.xh = function (n, i, s, e) {
        var c = this;
        try {
          e.points &&
            0 < w.Utility.keys(e.points).length &&
            this.Fh("user_data", function (t) {
              t.key &&
                t.value &&
                e.points[t.key] === t.value &&
                c.fh(n, i, s.delay);
            });
        } catch (t) {}
      }),
      (S.prototype.Eh = function (n, i, s, e) {
        var c = this;
        try {
          e.texts &&
            0 < e.texts.length &&
            this.Fh("user_event", function (t) {
              -1 !== e.texts.indexOf(t.text) && c.fh(n, i, s.delay);
            });
        } catch (t) {}
      }),
      (S.prototype.Ch = function (t, n, i) {
        var s, e, c;
        try {
          !i ||
            ((s = (i[w.Locale.code()] || i.default || "").trim()) &&
              ((e = w.Utility.to_hashcode("trigger/" + t)),
              !(c = !1) === this.ah(n, "show_as_website") && (c = !0),
              w.Action.do_message_show("text", s, e, c)));
        } catch (t) {}
      }),
      (S.prototype.jh = function () {
        try {
          w.Action.do_chat_open();
        } catch (t) {}
      }),
      (S.prototype.qh = function () {
        try {
          w.Sound.start("events", "chat-message-receive");
        } catch (t) {}
      }),
      (S.prototype.wh = function (t) {
        var n = !1;
        try {
          var i = (t.page || {}).settings;
          i &&
            i.urls &&
            0 < i.urls.length &&
            (n = w.Utility.compare_page_rules(w.Base.jr, i.urls));
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.kh = function (t) {
        var n = !1;
        try {
          var i = (t.url_parameter || {}).settings || {};
          if (0 < w.Utility.keys(i.parameters || {}).length) {
            for (
              var s,
                e = document.location.search || "",
                c = e.slice(e.indexOf("?") + 1).split("&"),
                a = {},
                o = 0;
              o < c.length;
              o++
            ) {
              var r = c[o].split("="),
                r = (h = f(r, 2))[0],
                h = h[1];
              r &&
                (a[r.toLowerCase()] = decodeURIComponent(
                  h || ""
                ).toLowerCase());
            }
            for (s in i.parameters) {
              var u = s.toLowerCase(),
                l = i.parameters[u].toLowerCase() + "";
              if (a[u] === l) {
                n = !0;
                break;
              }
            }
          }
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.fh = function (t, n, i) {
        var s = this,
          e = 2 < arguments.length && void 0 !== i ? i : {},
          c = null;
        try {
          c = w.Utility.set_timeout(function () {
            s.Kc(t, n);
          }, this.uh((e || {}).enabled, (e || {}).settings));
        } catch (t) {
        } finally {
          return c;
        }
      }),
      (S.prototype.Fh = function (t, n) {
        try {
          (this.Hr[t] = this.Hr[t] || []), this.Hr[t].push(n);
        } catch (t) {}
      }),
      (S.prototype.ah = function (t, n) {
        var i = !1;
        try {
          !0 === ((t.behaviors || {})[n] || {}).enabled && (i = !0);
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (S.prototype.nh = function (t) {
        var n = !1;
        try {
          1 != (n = -1 !== this.Gr.indexOf(t) && !0) &&
            (n =
              w.Library.crisp.client.Storage.get_stamp_local(this.Vr, [
                w.Base.Kr,
                "status",
                t,
              ]) === this.Xr && !0);
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.hh = function (t, n) {
        var i = !0;
        try {
          !1 === ((t.platforms || {})[n] || {}).enabled && (i = !1);
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (S.prototype.Qr = function () {
        try {
          var t = this.oh("last"),
            n = this.oh("count"),
            i = parseInt(
              w.Library.crisp.client.Storage.get_stamp_local(this.Vr, t) || "0",
              10
            ),
            s = parseInt(
              w.Library.crisp.client.Storage.get_stamp_local(this.Vr, n) || "0",
              10
            ),
            e = w.Date.timestamp();
          (isNaN(i) || isNaN(s) || s <= 0 || e - i >= this.zh) &&
            ((s += 1),
            (i = e),
            w.Library.crisp.client.Storage.set_stamp_local(this.Vr, n, "" + s)),
            w.Library.crisp.client.Storage.set_stamp_local(this.Vr, t, "" + e);
        } catch (t) {}
      }),
      (S.prototype.oh = function (t) {
        var n = [];
        try {
          n = [w.Base.Kr, "visit", t];
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (S.prototype.Z = function () {
        try {
          (this.Gr = []),
            (this.Pr = null),
            (this.eh = !1),
            (this.yh = !1),
            (this._h = null),
            (this.mh = 10),
            (this.Hr = {});
        } catch (t) {}
      }),
      new S());
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Base =
      ((z.prototype.init = function (t) {
        var n = this,
          i = 0 < arguments.length && void 0 !== t ? t : {};
        try {
          !1 === this.fc &&
            ((this.fc = !0),
            (this.lc = i.dollar_crisp || null),
            (this.Sh = i.project_name || null),
            (this.Ah = i.url_relay_client || null),
            (this.Ih = i.url_relay_stream || null),
            (this.Dh = i.url_website || null),
            (this.Th = i.url_go || null),
            (this.Pe = i.url_image || null),
            (this.Bh = i.url_game || null),
            (this.Ra = i.url_assets || null),
            (this._r = i.rtc_ice || null),
            (this.Uh = i.client_environment || null),
            (this.Na = i.client_revision || null),
            (this.Qe = i.website_domain || null),
            (this.Kr = i.website_id || null),
            (this.Rh = i.token_id || null),
            (this.Nh = i.cookie_expire || null),
            (this.Oh = i.cookie_domain || null),
            (this.jr = i.page_url || null),
            (this.qr = i.page_domain || null),
            (this.Mh = i.browser_useragent || null),
            (this.$h = i.browser_timezone || null),
            (this.Lh = i.browser_capabilities || null),
            (this.Pa = i.browser_locales || null),
            (this.Ph = i.ready_trigger || null),
            (this.Jh = i.reset_handler || null),
            (this.Hh = i.runtime_configuration || {}),
            w.Polyfill.schedule_warn_incompatible(!1),
            this.Wh(
              function (t) {
                (n.Gh = t.socket),
                  (n.Vh = t.buster || 1),
                  !1 ==
                    (t =
                      -1 === document.cookie.indexOf(n.Kh(!0)) &&
                      !1 !== n.Gh &&
                      !0) &&
                    !0 === n.Hh.lock_maximized &&
                    (t = !0),
                  !0 === t ? n.Xh() : n.Yh(),
                  w.Event.init();
              },
              function (t) {
                "invalid_website_id" === t && n.run_error();
              }
            ));
        } catch (t) {}
      }),
      (z.prototype.reset = function () {
        try {
          var t = this.Jh;
          w.Utility.reset_instance_children(w, this),
            this.Z(),
            this.Zh(),
            (this.Jh = t);
        } catch (t) {}
      }),
      (z.prototype.spawn_client = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n && n;
        try {
          this.Qh(),
            (this.nc = t),
            w.Library.crisp.web.init({
              template: w.Template,
              config: { url: { crisp_image: this.Pe }, runtime: this.Hh },
            }),
            !0 !== i &&
              (w.Library.crisp.client.Config.set_ignore_privacy(
                this.nc.chat.ignore_privacy
              ),
              w.Library.crisp.client.Config.set_visitor_compose(
                this.nc.chat.visitor_compose
              )),
            w.Trigger.init(w.Plugin.get_triggers());
          var s = this.zr();
          (this.tu = w.Library.dom(
            w.Template.render("client", {
              lang: w.Locale.code(),
              direction: w.Locale.direction(),
              blocked: s || !1,
              lock_maximized: this.Hh.lock_maximized || !1,
              last_operator_face:
                !0 === this.nc.chat.last_operator_face &&
                0 < this.nc.website.active_operators.length,
              availability_tooltip: this.nc.chat.availability_tooltip,
              hide_vacation: this.nc.chat.hide_vacation,
              hide_on_away: this.nc.chat.hide_on_away,
              hide_on_mobile: this.nc.chat.hide_on_mobile,
              position_reverse: this.nc.chat.position_reverse,
              full_view: this.Ac(),
              small_view: this.nu(),
              large_view: this.iu(),
            })
          )),
            (this.su = this.tu.find(".cc-l3zb")),
            (this.yc = this.tu.find(".cc-kv6t")),
            this.Lc(),
            this.eu();
        } catch (t) {}
      }),
      (z.prototype.run_error = function () {
        var t = this;
        try {
          w.Locale.load(w.Broker.cu.chat.locale, function () {
            t.spawn_client(w.Broker.cu, !0), w.Minimized.init(!0, !1, !0);
          });
        } catch (t) {}
      }),
      (z.prototype.Rr = function () {
        try {
          null !== this.yc &&
            (this.yc.attr(
              "data-full-view",
              !0 === this.Ac() ? "true" : "false"
            ),
            this.yc.attr(
              "data-small-view",
              !0 === this.nu() ? "true" : "false"
            ),
            this.yc.attr(
              "data-large-view",
              !0 === this.iu() ? "true" : "false"
            ));
        } catch (t) {}
      }),
      (z.prototype.Ac = function () {
        try {
          return (
            !0 === this.Hh.lock_full_view ||
            (window.innerHeight < window.innerWidth &&
              window.innerHeight < this.au) ||
            window.innerWidth < this.au
          );
        } catch (t) {}
      }),
      (z.prototype.iu = function () {
        try {
          return (
            (window.innerHeight < window.innerWidth &&
              window.innerHeight >= this.ou) ||
            (window.innerWidth < window.innerHeight &&
              window.innerWidth >= this.ou)
          );
        } catch (t) {}
      }),
      (z.prototype.nu = function () {
        try {
          return (
            (window.innerHeight < window.innerWidth &&
              window.innerHeight < this.ru) ||
            (window.innerWidth < window.innerHeight &&
              window.innerWidth < this.ru)
          );
        } catch (t) {}
      }),
      (z.prototype.ch = function () {
        try {
          if (
            !0 !== this.Hh.lock_maximized &&
            (!0 !== w.Chat.Message.rh || !0 === this.hu())
          ) {
            if (!0 === this.uu()) return !0;
            if (!0 === this.nc.chat.hide_vacation) return !0;
            if (
              !0 === this.nc.chat.hide_on_away &&
              !1 === w.Availability.Ir &&
              !0 !== w.Availability.Tc
            )
              return !0;
            if (!0 === this.nc.chat.hide_on_mobile && !0 === this.nu())
              return !0;
          }
          return !1;
        } catch (t) {}
      }),
      (z.prototype.uu = function () {
        try {
          return (!0 === this.lu || !0 === this.fu) && !0;
        } catch (t) {}
      }),
      (z.prototype.hu = function () {
        try {
          return (
            0 < w.Chat.Message.du &&
            w.Date.timestamp() - w.Chat.Message.du >= this.pu
          );
        } catch (t) {}
      }),
      (z.prototype.zr = function () {
        try {
          var t = w.Locale.code();
          return (
            (this.lu =
              !(
                !(0 < this.nc.chat.allowed_pages.length) ||
                w.Utility.compare_page_rules(
                  this.jr,
                  this.nc.chat.allowed_pages
                )
              ) ||
              (w.Utility.compare_page_rules(
                this.jr,
                this.nc.chat.blocked_pages
              ) &&
                !0)),
            (this.fu = -1 !== this.nc.chat.blocked_locales.indexOf(t)),
            this.uu() || !1
          );
        } catch (t) {}
      }),
      (z.prototype.dr = function () {
        try {
          if ("function" == typeof this.Ph)
            try {
              this.Ph(), (this.Ph = null);
            } catch (t) {}
          w.Action.Gc(),
            w.Action.Oc("session:loaded", w.Broker.St),
            w.Polyfill.schedule_warn_incompatible(!0);
        } catch (t) {}
      }),
      (z.prototype.Cc = function (t, n) {
        var i = !(0 < arguments.length && void 0 !== t) || t,
          s = 1 < arguments.length && void 0 !== n && n;
        try {
          var e = this.Kh(i),
            c = void 0,
            c =
              !0 === s
                ? new Date(0)
                : new Date(
                    new Date().getTime() + (!0 === i ? this.vu : this.yu)
                  );
          document.cookie =
            e + "; expires=" + c.toUTCString() + "; path=/; samesite=lax;";
        } catch (t) {}
      }),
      (z.prototype.Mc = function (t, n) {
        var i,
          s = 1 < arguments.length && void 0 !== n && n;
        try {
          o((this.nc.chat || {})[t]) === (void 0 === s ? "undefined" : o(s)) &&
            ((this.nc.chat[t] = s),
            null !== this.yc &&
              ((i = t.replace(this.mu, "-")),
              this.yc.attr("data-" + i, !0 === s ? "true" : "false")));
        } catch (t) {}
      }),
      (z.prototype.Lc = function (t) {
        var n = 0 < arguments.length && void 0 !== t ? t : {};
        try {
          var i,
            s = this._u;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              s[i] = s[i] || {};
              var e = n[i];
              if (null !== e)
                for (var c in e) e.hasOwnProperty(c) && (s[i][c] = e[c]);
            }
          this.su.empty(),
            this.su.append(
              w.Library.dom(
                w.Template.render("style_color", {
                  colors: w.Theme.colors(
                    s.color.theme || this.nc.chat.theme,
                    !!s.color.theme
                  ),
                })
              )
            ),
            this.su.append(
              w.Library.dom(
                w.Template.render("style_other", {
                  container_index: ("number" == typeof s.other.container_index
                    ? s
                    : this.gu
                  ).other.container_index,
                  show_operator_count: ("boolean" ==
                  typeof s.other.show_operator_count
                    ? s
                    : this.gu
                  ).other.show_operator_count,
                })
              )
            );
          var a = w.Plugin.get_customization("position", "chatbox");
          w.Utility.is_empty(a) ||
            this.su.append(
              w.Library.dom(
                w.Template.render("style_position", { position: a })
              )
            );
        } catch (t) {}
      }),
      (z.prototype.Wa = function (t, n, i, s, e) {
        var c = this,
          a = 3 < arguments.length && void 0 !== s && s,
          o = 4 < arguments.length && void 0 !== e ? e : null;
        try {
          var r = t + "_handler",
            h = document.createElement("script");
          (h.type = "text/javascript"),
            (h.async = 1),
            !0 === a
              ? ((u =
                  n +
                  "?callback=" +
                  encodeURIComponent("window.$crisp.__spool." + r)),
                o && (u += "&" + encodeURIComponent(o)),
                (h.src = u))
              : (h.src = [
                  this.Ra + "/static/javascripts/" + n,
                  "?" + this.Na,
                ].join("")),
            (this.lc.__spool[r] = function (t) {
              h.parentNode.removeChild(h),
                delete c.lc.__spool[r],
                "function" == typeof i && i(t);
            });
          var u = document.getElementsByTagName("head");
          u && u[0] && u[0].appendChild(h);
        } catch (t) {}
      }),
      (z.prototype.rr = function (s, e, t) {
        var c = this,
          n = 2 < arguments.length && void 0 !== t ? t : null;
        try {
          this.Wa(
            "website",
            [
              this.Ra + "/settings/website/",
              encodeURIComponent(this.Kr) + "/",
            ].join(""),
            function (t) {
              var n = !(t && !t.error);
              (t = t || {}).settings = t.settings || {};
              var i = {
                website: {
                  name: t.website || "",
                  domain: w.Utility.extract(c.wu, t.domain, c.Qe, 1),
                  mailer: t.mailer || "",
                  buster: s.buster || 1,
                  count_operators: s.count_operators || 0,
                  active_operators: s.active_operators || t.operators || [],
                  response_metrics: s.response_metrics || {},
                  last_available: s.last_available || w.Date.timestamp(),
                  status: s.status || null,
                  trial: t.trial || !1,
                },
                channels: t.channels || {},
                plugins: t.plugins || {},
                chat: {
                  country: w.Utility.get_or_fallback(
                    (s.context || {}).country,
                    null
                  ),
                  locale: w.Locale.detect(
                    t.settings.locale ? [t.settings.locale] : []
                  ),
                  theme: w.Utility.get_or_fallback(
                    t.settings.color_theme,
                    "default"
                  ),
                  allowed_pages: w.Utility.get_or_fallback(
                    t.settings.allowed_pages,
                    []
                  ),
                  blocked_pages: w.Utility.get_or_fallback(
                    t.settings.blocked_pages,
                    []
                  ),
                  blocked_locales: w.Utility.get_or_fallback(
                    t.settings.blocked_locales,
                    []
                  ),
                  tile: w.Utility.get_or_fallback(
                    t.settings.tile,
                    "default",
                    "string"
                  ),
                  last_operator_face: w.Utility.get_or_fallback(
                    t.settings.last_operator_face,
                    !1,
                    "boolean"
                  ),
                  ongoing_operator_face: w.Utility.get_or_fallback(
                    t.settings.ongoing_operator_face,
                    !0,
                    "boolean"
                  ),
                  activity_metrics: w.Utility.get_or_fallback(
                    t.settings.activity_metrics,
                    !0,
                    "boolean"
                  ),
                  operator_privacy: w.Utility.get_or_fallback(
                    t.settings.operator_privacy,
                    !1,
                    "boolean"
                  ),
                  availability_tooltip: w.Utility.get_or_fallback(
                    t.settings.availability_tooltip,
                    !0,
                    "boolean"
                  ),
                  hide_vacation: w.Utility.get_or_fallback(
                    t.settings.hide_vacation,
                    !1,
                    "boolean"
                  ),
                  hide_on_away: w.Utility.get_or_fallback(
                    t.settings.hide_on_away,
                    !1,
                    "boolean"
                  ),
                  hide_on_mobile: w.Utility.get_or_fallback(
                    t.settings.hide_on_mobile,
                    !1,
                    "boolean"
                  ),
                  position_reverse: w.Utility.get_or_fallback(
                    t.settings.position_reverse,
                    !1,
                    "boolean"
                  ),
                  email_visitors: w.Utility.get_or_fallback(
                    t.settings.email_visitors,
                    !0,
                    "boolean"
                  ),
                  phone_visitors: w.Utility.get_or_fallback(
                    t.settings.phone_visitors,
                    !0,
                    "boolean"
                  ),
                  force_identify: w.Utility.get_or_fallback(
                    t.settings.force_identify,
                    !1,
                    "boolean"
                  ),
                  ignore_privacy: w.Utility.get_or_fallback(
                    t.settings.ignore_privacy,
                    !1,
                    "boolean"
                  ),
                  visitor_compose: w.Utility.get_or_fallback(
                    t.settings.visitor_compose,
                    !0,
                    "boolean"
                  ),
                  file_transfer: w.Utility.get_or_fallback(
                    t.settings.file_transfer,
                    !0,
                    "boolean"
                  ),
                  helpdesk_link: w.Utility.get_or_fallback(
                    t.settings.helpdesk_link,
                    !0,
                    "boolean"
                  ),
                  status_health_dead: w.Utility.get_or_fallback(
                    t.settings.status_health_dead,
                    !0,
                    "boolean"
                  ),
                  wait_game: w.Utility.get_or_fallback(
                    t.settings.wait_game,
                    !1,
                    "boolean"
                  ),
                  theme_text: w.Utility.get_or_fallback(
                    t.settings.text_theme,
                    "default"
                  ),
                  theme_welcome: w.Utility.get_or_fallback(
                    t.settings.welcome_message,
                    "default"
                  ),
                },
              };
              w.Locale.load(i.chat.locale, function () {
                e(i, t, n);
              });
            },
            !0,
            n || s.buster
          );
        } catch (t) {}
      }),
      (z.prototype.wc = function (t, n) {
        var i = 1 < arguments.length && void 0 !== n && n;
        !0 === w.Library.crisp.client.socket.connected
          ? t()
          : !1 !== this.Gh &&
            (w.Broker.fr.actions.push(t),
            null === w.Broker.fr.master &&
              (w.Broker.fr.master = function () {
                !0 === i && w.Minimized.init(!0, !1, !1, !1);
              }),
            w.Library.crisp.client.socket.connect());
      }),
      (z.prototype.so = function () {
        var e = this;
        try {
          "production" === this.Uh &&
            (w.Library.crisp.client.Issue.configure({
              project: this.Sh,
              revision: this.Na,
              environment: this.Uh,
              useragent: this.Mh,
              page: this.jr,
            }),
            w.Library.logger.set_log_sink(function (t, n, i) {
              var s;
              "error" === t &&
                ("object" === o((e.lc || {}).__spool) &&
                  (e.lc.__spool.error_last = { ns: n, value: i }),
                (s = w.Date.timestamp()) - e.bu >= e.ku &&
                  ((e.bu = s), w.Library.crisp.client.Issue.report(t, n, i)));
            }));
        } catch (t) {}
      }),
      (z.prototype.jc = function () {
        try {
          "MutationObserver" in window && (this.xu("html"), this.xu("body")),
            w.Library.crisp.client.socket.disconnect(),
            this.Qh();
        } catch (t) {}
      }),
      (z.prototype.qc = function () {
        try {
          "function" == typeof this.Jh && this.Jh();
        } catch (t) {}
      }),
      (z.prototype.Wh = function (i, s) {
        var e = this;
        try {
          var t =
            (t = new Date()).getFullYear() +
            "-" +
            t.getMonth() +
            "-" +
            t.getDate() +
            "-" +
            t.getHours() +
            "-" +
            t.getMinutes();
          this.Wa(
            "website",
            [
              this.Ra + "/settings/website/",
              encodeURIComponent(this.Kr) + "/prelude/",
            ].join(""),
            function (t) {
              var n = t && t.error ? t.error : null;
              n ? s(n) : i(t || e.Fu);
            },
            !0,
            t
          );
        } catch (t) {}
      }),
      (z.prototype.eu = function () {
        try {
          this.Eu(),
            "MutationObserver" in window &&
              (this.Cu(document.documentElement), this.ju(document.body));
        } catch (t) {}
      }),
      (z.prototype.Eu = function () {
        try {
          var t = w.Library.dom("body") || [];
          0 < t.length && t.append(this.tu);
        } catch (t) {}
      }),
      (z.prototype.Qh = function () {
        try {
          null !== this.tu && (this.tu.remove(), (this.tu = null));
        } catch (t) {}
      }),
      (z.prototype.Xh = function (t) {
        try {
          this.qu(!0);
        } catch (t) {}
      }),
      (z.prototype.Yh = function () {
        var s = this;
        try {
          this.qu(!1),
            this.rr(
              {},
              function (t, n, i) {
                !0 !== i && w.Availability.receive(n.online || !1, !1),
                  s.spawn_client(t),
                  w.Minimized.init(!1, !1, i),
                  s.dr();
              },
              this.Vh
            );
        } catch (t) {}
      }),
      (z.prototype.qu = function (t) {
        var n = 0 < arguments.length && void 0 !== t && t;
        try {
          w.Broker.init(
            this.Uh,
            this.Ah,
            this.Ih,
            this.Th,
            this.Qe,
            this.Kr,
            this.Rh,
            this.Nh,
            this.Oh,
            this.Mh,
            this.$h,
            this.Lh,
            this.Pa,
            this.Hh,
            n
          );
        } catch (t) {}
      }),
      (z.prototype.Cu = function (t) {
        var c = this;
        try {
          this.xu("html"),
            (this.zu.html = new MutationObserver(function (t) {
              for (var n = 0; n < (t || []).length; n++) {
                var i = t[n];
                if ("childList" === i.type && i.addedNodes)
                  for (var s = 0; s < i.addedNodes.length; s++) {
                    var e = i.addedNodes[s];
                    if ("body" === (e.tagName || "").toLowerCase()) {
                      c.ju(e), c.Su();
                      break;
                    }
                  }
              }
            })),
            this.zu.html.observe(t, this.Au);
        } catch (t) {}
      }),
      (z.prototype.ju = function (t) {
        var e = this;
        try {
          this.xu("body"),
            (this.zu.body = new MutationObserver(function (t) {
              for (var n = 0; n < (t || []).length; n++) {
                var i = t[n];
                if ("childList" === i.type && i.removedNodes)
                  for (var s = 0; s < i.removedNodes.length; s++)
                    if (i.removedNodes[s] === e.tu[0]) {
                      e.Su();
                      break;
                    }
              }
            })),
            this.zu.body.observe(t, this.Au);
        } catch (t) {}
      }),
      (z.prototype.xu = function (t) {
        try {
          var n = this.zu[t];
          void 0 !== n && (n.disconnect(), delete this.zu[t]);
        } catch (t) {}
      }),
      (z.prototype.Su = function () {
        var t = this;
        try {
          null === this.Iu &&
            (this.Iu = w.Utility.set_timeout(function () {
              (t.Iu = null), t.Eu();
            }, this.Du));
        } catch (t) {}
      }),
      (z.prototype.Kh = function (t) {
        var n = !(0 < arguments.length && void 0 !== t) || t,
          i = null;
        try {
          i =
            encodeURIComponent("crisp-client/socket/" + this.Kr) +
            "=" +
            encodeURIComponent(!0 === n ? "0" : "1");
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (z.prototype.Zh = function () {
        try {
          (this.tu = null), (this.su = null), (this.yc = null);
        } catch (t) {}
      }),
      (z.prototype.Z = function () {
        try {
          (this.fc = !1),
            (this.nc = {}),
            (this.lc = null),
            (this.Sh = null),
            (this.Ah = null),
            (this.Ih = null),
            (this.Dh = null),
            (this.Th = null),
            (this.Pe = null),
            (this.Bh = null),
            (this.Ra = null),
            (this._r = null),
            (this.Uh = null),
            (this.Na = null),
            (this.Qe = null),
            (this.Kr = null),
            (this.Rh = null),
            (this.Nh = null),
            (this.Oh = null),
            (this.jr = null),
            (this.qr = null),
            (this.Mh = null),
            (this.$h = null),
            (this.Lh = null),
            (this.Pa = null),
            (this.Vh = 1),
            (this.Gh = !0),
            (this.lu = !1),
            (this.fu = !1),
            (this.Ph = null),
            (this.Jh = null),
            (this.Hh = {}),
            (this.bu = 0),
            (this.Iu = null),
            (this._u = { color: {}, other: {} }),
            (this.zu = {});
        } catch (t) {}
      }),
      new z())),
      (w.Minimized =
        ((q.prototype.init = function (t, n, i, s) {
          var e = !(0 < arguments.length && void 0 !== t) || t,
            c = 1 < arguments.length && void 0 !== n && n,
            a = 2 < arguments.length && void 0 !== i && i,
            o = !(3 < arguments.length && void 0 !== s) || s;
          try {
            this.Tu(a), this.Bu(c, a, e, o), (this.fc = !0);
          } catch (t) {}
        }),
        (q.prototype.reset = function () {
          try {
            w.Utility.reset_instance_children(w.Minimized), this.Z();
          } catch (t) {}
        }),
        (q.prototype.Tu = function (t) {
          var n = 0 < arguments.length && void 0 !== t && t;
          try {
            for (
              var i = void 0,
                s = [
                  w.Minimized.Interface,
                  w.Minimized.Selector,
                  w.Minimized.Event,
                ],
                i = 0;
              i < s.length;
              i++
            )
              s[i].init(n);
          } catch (t) {}
        }),
        (q.prototype.Bu = function (t, n, i, s) {
          var e = 0 < arguments.length && void 0 !== t && t,
            c = 1 < arguments.length && void 0 !== n && n,
            a = 2 < arguments.length && void 0 !== i && i,
            o = !(3 < arguments.length && void 0 !== s) || s;
          try {
            !0 !== c
              ? w.Minimized.Interface.Uu(e, a, o)
              : w.Minimized.Interface.Ru(e, o),
              !0 === w.Base.Hh.lock_maximized && w.Minimized.Interface.pc();
          } catch (t) {}
        }),
        (q.prototype.Z = function () {
          try {
            this.fc = !1;
          } catch (t) {}
        }),
        new q())),
      (w.Minimized.Event =
        ((j.prototype.init = function (t) {}),
        (j.prototype.Nu = function () {
          try {
            w.Minimized.Selector.Ou.on("click", function (t) {
              try {
                var n,
                  i = t.target ? w.Library.dom(t.target) : null,
                  s = i ? i.attr("data-pop") : null;
                !i ||
                  s ||
                  ((n = i.parents("[data-pop]")) &&
                    n[0] &&
                    (s = n.attr("data-pop") || null)),
                  s
                    ? "spotlight" === s && w.Action.do_helpdesk_search()
                    : i && i.is(".cc-g0ak")
                    ? w.Minimized.Interface.Mu()
                    : w.Minimized.Interface.pc();
              } catch (t) {
              } finally {
                return !1;
              }
            }),
              (w.Minimized.Selector.Ou[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        new j())),
      (w.Minimized.Interface =
        ((C.prototype.init = function (t) {
          var n = 0 < arguments.length && void 0 !== t && t;
          try {
            this.Bu(n);
          } catch (t) {}
        }),
        (C.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (C.prototype.Uu = function (t, n, i) {
          var s = 0 < arguments.length && void 0 !== t && t,
            e = this,
            c = 1 < arguments.length && void 0 !== n && n,
            a = !(2 < arguments.length && void 0 !== i) || i;
          try {
            var o = !1,
              r = { conceal_general_entice: !1, helpdesk: { url: null } };
            !0 === w.Base.nc.chat.availability_tooltip &&
              (r.conceal_general_entice =
                w.Library.crisp.client.Storage.get_stamp_local(this.$u, [
                  w.Base.Kr,
                  "general_entice",
                  "conceal",
                ]) === this.Lu && !0),
              !0 === w.Base.nc.chat.helpdesk_link &&
                w.Base.nc.channels.helpdesk &&
                w.Base.qr !== w.Base.nc.channels.helpdesk &&
                !0 === w.Library.crisp.client.socket.connected &&
                (r.helpdesk.url = w.Chat.Interface.sc("helpdesk")),
              this.Pu("minimized_authorized", !0, s, a, r),
              (this.pc = function () {
                var n;
                !1 === o &&
                  (!(o = !0) === c
                    ? (e.Ju(!0),
                      (n = w.Utility.set_timeout(function () {
                        w.Broker.St ||
                          (alert(
                            w.Locale.text(
                              "chat",
                              "minimized_connect_alert_failure"
                            )
                          ),
                          w.Library.crisp.client.socket.disconnect(),
                          e.Ju(!1),
                          w.Action.do_chat_hide());
                      }, e.Hu)),
                      (w.Broker.fr.master = function (t) {
                        w.Utility.clear_timeout(n), w.Chat.init(t);
                      }),
                      w.Library.crisp.client.socket.connect())
                    : w.Chat.init());
              }),
              w.Availability.apply(),
              w.Minimized.Event.Nu();
          } catch (t) {}
        }),
        (C.prototype.Ru = function (t, n) {
          var i = 0 < arguments.length && void 0 !== t && t,
            s = !(1 < arguments.length && void 0 !== n) || n;
          try {
            this.Pu("minimized_unauthorized", !1, i, s),
              (this.pc = function () {}),
              w.Minimized.Event.Nu();
          } catch (t) {}
        }),
        (C.prototype.$c = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : null;
          try {
            var i =
              null !== n
                ? n
                : w.Minimized.Selector.Wu.find(
                    [".cc-1bue", '[data-id="general_entice"]'].join("")
                  );
            i && i.safe_css_text("display", "block");
          } catch (t) {}
        }),
        (C.prototype.Mu = function () {
          try {
            var t = w.Minimized.Selector.Wu.find(
              [".cc-1bue", '[data-id="general_entice"]'].join("")
            );
            t && t.attr("data-is-concealed", "true"),
              w.Library.crisp.client.Storage.set_stamp_local(
                this.$u,
                [w.Base.Kr, "general_entice", "conceal"],
                this.Lu
              );
          } catch (t) {}
        }),
        (C.prototype.Pu = function (t, n, i, s, e) {
          var c = !(1 < arguments.length && void 0 !== n) || n,
            a = 2 < arguments.length && void 0 !== i && i,
            o = this,
            r = !(3 < arguments.length && void 0 !== s) || s,
            h = 4 < arguments.length && void 0 !== e ? e : {};
          try {
            var u,
              l,
              f = w.Base.nc,
              d = {
                configuration: f,
                methods: {
                  active_operators: w.Avatar.active_operators.Et(w.Avatar),
                },
                website: { id: w.Base.Kr },
              };
            for (u in h) d[u] = h[u];
            (w.Minimized.Selector.Gu = w.Library.dom(w.Template.render(t, d))),
              w.Base.yc.empty(),
              w.Base.yc.append(w.Minimized.Selector.Gu),
              w.Minimized.Selector.Vu(),
              !0 === c &&
                ((l =
                  !0 !== w.Base.Ac() && !0 === f.chat.availability_tooltip
                    ? w.Minimized.Selector.Wu.find(
                        [".cc-1bue", '[data-id="general_entice"]'].join("")
                      )
                    : null),
                !0 === r && w.Feature.has_css_animations()
                  ? (!0 === a &&
                      (w.Minimized.Selector.Ou.addClass("cc-9axk"),
                      w.Utility.set_timeout(function () {
                        w.Minimized.Selector.Ou.removeClass("cc-9axk");
                      }, this.Ku)),
                    null !== l &&
                      w.Utility.set_timeout(function () {
                        o.$c(l);
                        var t = !0 === a ? "cc-z74s" : "cc-phpq";
                        l.addClass(t),
                          w.Utility.set_timeout(function () {
                            l.removeClass(t);
                          }, o.Xu);
                      }, this.ua * (!0 === a ? this.Yu : this.Zu)))
                  : null !== l && this.$c(l));
          } catch (t) {}
        }),
        (C.prototype.Ju = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          try {
            var i = !0 === n ? "none" : "block",
              s = !0 === n ? "block" : "none";
            w.Minimized.Selector.Ou.find(".cc-15mo").safe_css_text(
              "display",
              i
            ),
              w.Minimized.Selector.Ou.find(".cc-1yxw").safe_css_text(
                "display",
                s
              );
          } catch (t) {}
        }),
        (C.prototype.Bu = function (t) {
          var n = 0 < arguments.length && void 0 !== t && t;
          try {
            !0 !== n && w.Library.crisp.client.Message.get_message_history();
          } catch (t) {}
        }),
        (C.prototype.Z = function () {
          try {
            this.pc = function () {};
          } catch (t) {}
        }),
        new C(w))),
      (w.Minimized.Selector =
        ((E.prototype.init = function (t) {}),
        (E.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (E.prototype.Vu = function () {
          try {
            this.Qu(), this.tl();
          } catch (t) {}
        }),
        (E.prototype.Qu = function () {
          try {
            this.Ou = this.Gu.find(".cc-unoo");
          } catch (t) {}
        }),
        (E.prototype.tl = function () {
          try {
            this.Wu = this.Ou.find(".cc-1c9v");
          } catch (t) {}
        }),
        (E.prototype.Z = function () {
          try {
            (this.Gu = null), (this.Ou = null), (this.Wu = null);
          } catch (t) {}
        }),
        new E())),
      (w.Chat =
        ((F.prototype.init = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : null;
          try {
            this.Tu(),
              null !== n && w.Chat.State.nl(n),
              null === n && w.Action.Oc("chat:initiated"),
              this.Bu(),
              w.Base.Cc(!1),
              (this.fc = !0);
          } catch (t) {}
        }),
        (F.prototype.reset = function () {
          try {
            w.Utility.reset_instance_children(w.Chat), this.Z();
          } catch (t) {}
        }),
        (F.prototype.Ar = function () {
          try {
            this.il(!1);
          } catch (t) {}
        }),
        (F.prototype.Fc = function () {
          try {
            this.il(!0);
          } catch (t) {}
        }),
        (F.prototype.il = function (t) {
          var n = 0 < arguments.length && void 0 !== t && t;
          try {
            !0 !== this.fc &&
              (this.init({ maximized: n }),
              w.Chat.State.propagate("maximized", n, !0));
          } catch (t) {}
        }),
        (F.prototype.Tu = function () {
          try {
            for (
              var t = void 0,
                n = [
                  w.Chat.Alert,
                  w.Chat.Intent,
                  w.Chat.Field,
                  w.Chat.Interface,
                  w.Chat.Message,
                  w.Chat.Misc,
                  w.Chat.Notification,
                  w.Chat.Scroll,
                  w.Chat.State,
                  w.Chat.Selector,
                  w.Chat.Event,
                  w.Chat.Viewport,
                ],
                t = 0;
              t < n.length;
              t++
            )
              n[t].init();
          } catch (t) {}
        }),
        (F.prototype.Bu = function () {
          try {
            w.Chat.Interface.sl(),
              w.Chat.Field.el(),
              w.Availability.apply(),
              w.Library.crisp.client.Socket.get_state(),
              w.Sound.initialize("events"),
              w.Chat.Message.nl(),
              w.Date.watch();
          } catch (t) {}
        }),
        (F.prototype.Z = function () {
          try {
            this.fc = !1;
          } catch (t) {}
        }),
        new F()));
    var o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(t, n, i) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = i),
        t
      );
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    (w.Chat.Alert =
      ((x.prototype.init = function () {}),
      (x.prototype.reset = function () {
        try {
          this.Z();
        } catch (t) {}
      }),
      (x.prototype.Vc = function (t, n) {
        try {
          var i,
            s = void 0,
            e = void 0,
            c = void 0;
          "object" === (void 0 === t ? "undefined" : o(t))
            ? (s = t)
            : ((s = {})[t] = n);
          var a = w.Utility.clone(this.cl);
          for (e in s)
            s.hasOwnProperty(e) &&
              ((i = s[e]),
              (c = !1),
              void 0 !== this.cl[e] && this.cl[e] === i && (c = !0),
              "lock" === this.cl[e] && "unlock" !== i && (c = !0),
              !1 === c && (a[e] = i));
          w.Chat.State.propagate("alert", a);
        } catch (t) {}
      }),
      (x.prototype.al = function (t) {
        var n = !1;
        try {
          n = ("show" === this.cl[t] || "unlock" === this.cl[t]) && !0;
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (x.prototype.ol = function (t, n) {
        try {
          var i = this.rl[n];
          "function" == typeof i && i.Et(this)(t);
        } catch (t) {}
      }),
      (x.prototype.hl = function (t) {
        try {
          this.ul(t);
        } catch (t) {}
      }),
      (x.prototype.ll = function (t) {
        try {
          this.ul(t);
        } catch (t) {}
      }),
      (x.prototype.ul = function (t) {
        try {
          "show" === t ? w.Chat.Message.fl() : w.Chat.Message.dl();
        } catch (t) {}
      }),
      (x.prototype.Z = function () {
        try {
          this.cl = {};
        } catch (t) {}
      }),
      new x())),
      (w.Chat.Intent =
        ((k.prototype.init = function () {}),
        (k.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (k.prototype.Vc = function (t, n, i) {
          var s,
            e = 1 < arguments.length && void 0 !== n ? n : "default",
            c = 2 < arguments.length && void 0 !== i && i;
          try {
            if (-1 === this.pl.indexOf(t))
              throw new Error("Unknown intent: " + t);
            (!0 !== c && !1 === this.cl[t]) ||
              ((s = w.Utility.clone(this.cl)),
              e || !1 === e ? (s[t] = e) : delete s[t],
              w.Chat.State.propagate("intent", s));
          } catch (t) {}
        }),
        (k.prototype.vl = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : null;
          try {
            for (var i, s = void 0, s = 0; s < this.pl.length; s++)
              (i = this.pl[s]), (n || this.cl)[i] || this.yl(i, null);
          } catch (t) {}
        }),
        (k.prototype.yl = function (t, n, i) {
          var s,
            e = 1 < arguments.length && void 0 !== n ? n : "default",
            c = !(2 < arguments.length && void 0 !== i) || i;
          try {
            -1 === this.pl.indexOf(t) ||
              ("function" == typeof (s = this.ml[t]) && s.Et(this)(e, c));
          } catch (t) {}
        }),
        (k.prototype._l = function (t, n) {
          var i = 0 < arguments.length && void 0 !== t ? t : "default",
            s = !(1 < arguments.length && void 0 !== n) || n;
          try {
            i
              ? "default" === i
                ? w.Chat.Message.gl(s)
                : w.Chat.Message.wl(i, s)
              : w.Chat.Message.bl();
          } catch (t) {}
        }),
        (k.prototype.kl = function (t, n) {
          var i = 0 < arguments.length && void 0 !== t ? t : "default",
            s = !(1 < arguments.length && void 0 !== n) || n;
          try {
            i ? w.Chat.Message.xl(s) : w.Chat.Message.Fl();
          } catch (t) {}
        }),
        (k.prototype.Z = function () {
          try {
            this.cl = {};
          } catch (t) {}
        }),
        new k())),
      (w.Chat.Picker =
        ((b.prototype.init = function () {}),
        (b.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (b.prototype.El = function () {
          var t = !1;
          try {
            t = null !== this.Cl && !0;
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (b.prototype.yl = function (t) {
          try {
            var n,
              i = w.Chat.Selector.get("pickers").find(
                [".cc-5ftt", '[data-type="' + t + '"]'].join("")
              );
            0 < i.length &&
              ((n = this.El()),
              this.jl(),
              w.Chat.Selector.get("pickers").attr(
                "data-has-animation",
                !1 === n ? "true" : "false"
              ),
              this.ql(t, i),
              w.Chat.Field.el());
          } catch (t) {}
        }),
        (b.prototype.jl = function () {
          try {
            (this.zl = null) !== this.Cl &&
              (w.Chat.Selector.get("pickers_inner_one").safe_css_text(
                "display",
                "none"
              ),
              w.Chat.Selector.get("content").removeAttr(
                "data-has-picker-" + this.Cl
              ),
              w.Chat.Selector.get("pickers_selector_one").removeClass(
                "cc-1ada"
              ),
              w.Chat.Selector.get("pickers_selector_one").addClass("cc-183m"),
              w.Library.dom(
                [".cc-dnqb", '[data-removable="true"]'].join("")
              ).remove(),
              (this.Cl = null));
          } catch (t) {}
        }),
        (b.prototype.Sl = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : "";
          try {
            if (
              (null !== w.Chat.Event.Al &&
                (w.Utility.clear_timeout(w.Chat.Event.Al),
                (w.Chat.Event.Al = null)),
              this.zl !== n)
            ) {
              this.zl = n;
              var i = w.Chat.Selector.get("pickers_gif").find(".cc-yb0h"),
                s = w.Chat.Selector.get("pickers_gif").find(".cc-1ydc"),
                e = w.Template.render("chat_picker_gif_item");
              i.empty(),
                s.safe_css_text("display", "none"),
                i.safe_css_text("display", "block"),
                w.Chat.Selector.get("pickers_gif").attr(
                  "data-has-search",
                  n ? "true" : "false"
                ),
                w.Chat.Selector.get("pickers_search_input").val() !== n &&
                  w.Chat.Selector.get("pickers_search_input").val(n || "");
              for (var c = 0; c < this.Il; c++) i.append(e);
              w.Chat.Event.Dl(i),
                w.Library.crisp.client.Media.get_animation_list(n);
            }
          } catch (t) {}
        }),
        (b.prototype.Fr = function (t) {
          var s = 0 < arguments.length && void 0 !== t ? t : [];
          try {
            var n = w.Chat.Selector.get("pickers_gif").find(".cc-dnqb"),
              e = 0;
            n &&
              0 < n.length &&
              (n.each(function (t, n, i) {
                (i = i.eq(n)),
                  s[n] && s[n].type && s[n].url
                    ? (i.attr("data-type", s[n].type),
                      i.attr("data-url", s[n].url),
                      i.safe_css_text(
                        "background-image",
                        "url('" +
                          w.Base.Pe +
                          "/process/original/?url=" +
                          encodeURIComponent(s[n].url) +
                          "')"
                      ),
                      i.removeAttr("data-loading"),
                      e++)
                    : i.remove();
              }),
              0 === e &&
                (w.Chat.Selector.get("pickers_gif")
                  .find(".cc-yb0h")
                  .safe_css_text("display", "none"),
                w.Chat.Selector.get("pickers_gif")
                  .find(".cc-1ydc")
                  .safe_css_text("display", "block")));
          } catch (t) {}
        }),
        (b.prototype.ql = function (t, n) {
          try {
            n.safe_css_text("display", "block"),
              w.Chat.Selector.get("content").attr(
                "data-has-picker-" + t,
                "true"
              );
            var i = w.Chat.Selector.get("pickers").find(
              [".cc-mxq4", '[data-type="' + t + '"]'].join("")
            );
            i.removeClass("cc-183m"),
              i.addClass("cc-1ada"),
              (this.Cl = t),
              "function" == typeof (i = this.Tl[t]) && i.Et(this)();
          } catch (t) {}
        }),
        (b.prototype.Bl = function () {
          try {
            this.Sl();
          } catch (t) {}
        }),
        (b.prototype.Z = function () {
          try {
            (this.Cl = null), (this.zl = null);
          } catch (t) {}
        }),
        new b())),
      (w.Chat.Event =
        ((g.prototype.init = function () {}),
        (g.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (g.prototype.Vu = function () {
          try {
            this.Ul(),
              this.Rl(),
              this.Nl(),
              this.Ol(),
              this.Ml(),
              this.$l(),
              this.Ll(),
              this.Pl(),
              this.Jl(),
              this.Hl(),
              this.Wl(),
              this.Gl(),
              this.Vl(),
              this.Kl(),
              this.Xl(),
              this.Yl(),
              this.Zl(),
              this.Ql();
          } catch (t) {}
        }),
        (g.prototype.tf = function (t) {
          var s, n;
          try {
            w.Base.nc.channels.helpdesk &&
              w.Base.qr !== w.Base.nc.channels.helpdesk &&
              !0 !== w.Feature.has_screen_touch() &&
              (null ===
                (s = w.Utility.acquire_channel_url_regex(
                  "helpdesk",
                  "article",
                  "([^/]+)/article/([^/]+)/.*"
                )) ||
                (0 < (n = t.find("a[href]") || []).length &&
                  n.each(function (t) {
                    var n,
                      i = t.getAttribute("href");
                    !i ||
                      ((n = i.match(s)) &&
                        n[1] &&
                        n[2] &&
                        (t.onclick = function () {
                          return (
                            w.Action.do_helpdesk_article_open(n[1], n[2]), !1
                          );
                        }));
                  })));
          } catch (t) {}
        }),
        (g.prototype.nf = function (t) {
          try {
            var n = t.find('.cc-djxv[data-target="helpdesk"]') || [];
            0 < n.length &&
              n.each(function (t) {
                t.onclick = function () {
                  return w.Action.do_helpdesk_search(), !1;
                };
              });
          } catch (t) {}
        }),
        (g.prototype.if = function (t) {
          try {
            var n = t.find('.cc-djxv[data-type="embed"], .cc-1fry') || [];
            if (0 < n.length) {
              n.on("click", function (t) {
                try {
                  var n = t.target ? w.Library.dom(t.target) : [];
                  n.is("a[href]") || (n = n.parents("a[href]")),
                    0 < n.length &&
                      w.Chat.Interface.sf("embed", n.attr("href"));
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
                this.ef(n);
              for (var i = 0; i < n.length; i++)
                n[i].onclick = function () {
                  return !1;
                };
            }
          } catch (t) {}
        }),
        (g.prototype.cf = function (t) {
          try {
            var n = t.find(".cc-nn4g") || [];
            0 < n.length &&
              (n.on("click", function () {
                try {
                  w.Chat.Interface.sf(
                    "file",
                    n.attr("href"),
                    n.attr("data-name"),
                    t.attr("data-fingerprint")
                  );
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(n),
              (n[0].onclick = function () {
                return !1;
              }));
          } catch (t) {}
        }),
        (g.prototype.af = function (t, i) {
          try {
            var n = t.find(".cc-1qf4") || [],
              s = t.find(".cc-784v") || [],
              e = t.find(".cc-u2t4") || [],
              c = t.find(".cc-cccw") || [],
              a = t.find(".cc-1ep3") || [];
            0 < c.length &&
              (0 < n.length &&
                (c[0].addEventListener("play", function () {
                  n.attr("data-state", "loading");
                }),
                c[0].addEventListener("pause", function () {
                  n.attr("data-state", "paused");
                }),
                c[0].addEventListener("canplay", function () {
                  n.attr("data-state", "playing");
                }),
                c[0].addEventListener("stalled", function () {
                  n.attr("data-state", "none");
                })),
              0 < a.length &&
                0 < e.length &&
                c[0].addEventListener("timeupdate", function (t) {
                  var n;
                  t.target &&
                    ((t =
                      0 ===
                      (n =
                        (n = Math.ceil(
                          (t.target.currentTime / t.target.duration) * 100
                        )) < 100
                          ? n
                          : 0)
                        ? i.content.duration || 0
                        : Math.floor(t.target.currentTime)),
                    e.text(w.Date.format_time(t)),
                    a.safe_css_text("width", n + "%"));
                })),
              0 < s.length &&
                (s.on("click", function () {
                  try {
                    0 < c.length &&
                      (c[0].paused ? w.Utility.play_media(c[0]) : c[0].pause());
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }),
                this.ef(s),
                (s[0].onclick = function () {
                  return !1;
                }));
          } catch (t) {}
        }),
        (g.prototype.rf = function (o, r, h) {
          try {
            var t = o.find(".cc-1u43") || [];
            if (0 < t.length) {
              t.on("click", function (t) {
                try {
                  if ((t.stopPropagation(), "from" === r)) {
                    var n = t.target ? w.Library.dom(t.target) : null;
                    if (n) {
                      for (
                        var i = n.attr("data-value"), s = !1, e = null, c = 0;
                        c < h.content.choices.length;
                        c++
                      ) {
                        var a = h.content.choices[c];
                        a.value === i
                          ? !0 !== a.selected &&
                            ((s = a.selected = !0), (e = a.handler))
                          : (a.selected = !1);
                      }
                      !0 === s &&
                        ("function" == typeof e
                          ? e(o)
                          : w.Library.crisp.client.Message.update_message(
                              h.fingerprint,
                              h.content
                            ));
                    }
                  }
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
                this.ef(t);
              for (var n = 0; n < t.length; n++)
                t[n].onclick = function () {
                  return !1;
                };
            }
          } catch (t) {}
        }),
        (g.prototype.hf = function (t, n) {
          try {
            var i,
              s = t.find(".cc-hp1x") || [],
              e = t.find(".cc-1t9k") || [],
              c = t.find(".cc-fosr") || [];
            if (
              (0 < s.length &&
                0 < e.length &&
                ((i = function () {
                  var t = e.val().trim();
                  t &&
                    ((n.content.value = t),
                    "function" == typeof n.content.handler
                      ? n.content.handler(t)
                      : w.Library.crisp.client.Message.update_message(
                          n.fingerprint,
                          n.content
                        ));
                }),
                s.on("submit", function () {
                  try {
                    i();
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }),
                c.on("click", function (t) {
                  try {
                    t.stopPropagation(), i();
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }),
                this.ef(c),
                (s[0].onsubmit = function () {
                  return !1;
                }),
                (c[0].onclick = function () {
                  return !1;
                })),
              n.content.previous)
            ) {
              var a = t.find(".cc-2t7n") || [];
              if (0 < a.length) {
                a.on("click", function (t) {
                  try {
                    t.stopPropagation(), w.Chat.Intent.Vc(n.content.previous);
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }),
                  this.ef(a);
                for (var o = 0; o < a.length; o++)
                  a[o].onclick = function () {
                    return !1;
                  };
              }
            }
          } catch (t) {}
        }),
        (g.prototype.uf = function (n, i) {
          try {
            var t = n.find(".cc-pus6");
            t.on("click", function (t) {
              try {
                t.stopPropagation(),
                  !0 === w.Chat.Message.lf() &&
                    (w.Chat.Message.ff(n),
                    w.Action.do_message_send(i.type, i.content));
              } catch (t) {
              } finally {
                return !1;
              }
            }),
              this.ef(t),
              (t[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.df = function (t) {
          try {
            var n = t.find(".cc-1h0y"),
              i = t.find(".cc-1shm");
            n.on("load", function () {
              try {
                t.attr("data-loaded", "true");
              } catch (t) {}
            }),
              i.on("click", function () {
                try {
                  w.Chat.Game.stop();
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(i),
              (i[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.pf = function (n) {
          try {
            function s() {
              n.remove(), w.Chat.Field.el();
            }
            n.find(".cc-q2us").on("load", function (t) {
              try {
                n.attr("data-state", "loaded");
              } catch (t) {}
            }),
              n.on("keydown", function (t) {
                try {
                  27 === t.keyCode && s();
                } catch (t) {}
              }),
              (n[0].onclick = function (t) {
                var n = !0;
                try {
                  var i = t.target ? w.Library.dom(t.target) : null;
                  i &&
                    (i.is(".cc-k0ox") ||
                      i.is(".cc-ikw0") ||
                      i.is(".cc-12ru") ||
                      i.is(".cc-1o7o")) &&
                    ((n = !1), s());
                } catch (t) {
                } finally {
                  return n;
                }
              }),
              this.ef(n);
          } catch (t) {}
        }),
        (g.prototype.vf = function (i) {
          var s = this;
          try {
            function e() {
              null !== o && (w.Utility.clear_timeout(o), (o = null)),
                null !== w.Chat.Interface.yf &&
                  (w.Utility.clear_timeout(w.Chat.Interface.yf),
                  (w.Chat.Interface.yf = null));
            }
            function c() {
              e(), i.remove(), (w.Chat.Interface.mf = null), w.Chat.Field.el();
            }
            var a = "",
              o = null,
              r = i.find(".cc-tdrg");
            r.on("keyup", function (t) {
              try {
                var n = (t.target.value || "").trim();
                n !== a &&
                  (e(),
                  n
                    ? (i.attr("data-state", "loading"),
                      (o = w.Utility.set_timeout(function () {
                        var t;
                        (o = null),
                          (a = n),
                          w.Action.do_helpdesk_query(n),
                          !n ||
                            ((t = n.substring(n.lastIndexOf(" ") + 1).trim()) &&
                              t.length >= s.gf &&
                              w.Library.crisp.client.Helpdesk.get_article_suggest(
                                t,
                                w.Locale.code()
                              ));
                      }, s.wf)))
                    : (delete w.Broker.xr.helpdesk_article_search,
                      delete w.Broker.xr.helpdesk_article_suggest,
                      (a = ""),
                      w.Chat.Interface.Er([], {}, !1),
                      w.Chat.Interface.Cr([])));
              } catch (t) {}
            }),
              (i[0].onkeydown = function (t) {
                var n = !0;
                try {
                  switch (t.keyCode) {
                    case 27:
                      c(), (n = !1);
                      break;
                    case 13:
                      w.Chat.Interface.bf(i), (n = !1);
                      break;
                    case 38:
                      w.Chat.Interface.kf(i, -1), (n = !1);
                      break;
                    case 40:
                      w.Chat.Interface.kf(i, 1), (n = !1);
                      break;
                    case 9:
                      w.Chat.Interface.xf(i, r), (n = !1);
                      break;
                    default:
                      !0 !== t.shiftKey &&
                        !0 !== t.metaKey &&
                        !0 !== t.ctrlKey &&
                        !0 !== t.altKey &&
                        w.Chat.Interface.Cr([]);
                  }
                } catch (t) {
                } finally {
                  return n;
                }
              }),
              (i[0].onclick = function (t) {
                var n = !0;
                try {
                  var i = t.target ? w.Library.dom(t.target) : null;
                  i &&
                    (i.is(".cc-1qlo") || i.is(".cc-1pql") || i.is(".cc-1o4r")
                      ? ((n = !1), c())
                      : !1 === i.is("a") && r[0].focus());
                } catch (t) {
                } finally {
                  return n;
                }
              }),
              this.ef(i.find(".cc-1o4r"));
          } catch (t) {}
        }),
        (g.prototype.Ff = function (i) {
          try {
            function s(t) {
              0 !== t && (n[0].scrollTop += t);
            }
            var n = i.find(".cc-1u0c"),
              t = n.find(".cc-1h5e"),
              e = 0;
            n.on("wheel", function (t) {
              try {
                s(t.deltaY || 0);
              } catch (t) {}
            }),
              n.on("touchstart", function (t) {
                try {
                  e = ((t.touches || [])[0] || {}).pageY || 0;
                } catch (t) {}
              }),
              n.on("touchmove", function (t) {
                try {
                  var n = ((t.touches || [])[0] || {}).pageY || 0;
                  s(e - n), (e = n);
                } catch (t) {}
              }),
              t.on("mouseenter", function (t) {
                try {
                  w.Chat.Interface.Ef(i, t.target, !0);
                } catch (t) {}
              }),
              t.on("mouseleave", function (t) {
                try {
                  w.Chat.Interface.Ef(i, t.target, !1);
                } catch (t) {}
              }),
              t.on("click", function (t) {
                try {
                  var n;
                  !0 !== w.Feature.has_screen_touch() &&
                    (t.preventDefault(),
                    0 <
                      (n = w.Library.dom(t.target).parents(".cc-7rhc") || [])
                        .length &&
                      (w.Action.do_helpdesk_article_open(
                        n.attr("data-locale"),
                        n.attr("data-slug")
                      ),
                      i.remove(),
                      (w.Chat.Interface.mf = null)));
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              (n[0].onscroll = function (t) {
                t.preventDefault(), t.stopPropagation();
              }),
              (n[0].ontouchmove = function (t) {
                t.stopPropagation();
              });
          } catch (t) {}
        }),
        (g.prototype.Cf = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : {};
          try {
            function e() {
              t.remove(), w.Chat.Field.el();
            }
            function c(t) {
              !(t = i[t]) ||
                (0 <
                  (t =
                    w.Chat.Selector.get("flow_messages").find(
                      [".cc-b3wa", '[data-fingerprint="' + t + '"]'].join("")
                    ) || []).length &&
                  0 < (t = t.find(".cc-nn4g") || []).length &&
                  t[0].click());
            }
            var s = t.find(".cc-z6hh");
            t.on("keydown", function (t) {
              try {
                switch (t.keyCode) {
                  case 27:
                    e();
                    break;
                  case 37:
                    c("previous");
                    break;
                  case 39:
                    c("next");
                }
              } catch (t) {}
            }),
              s.on("load", function () {
                try {
                  t.attr("data-state", "loaded");
                } catch (t) {}
              }),
              (t[0].onclick = function (t) {
                var n = !1;
                try {
                  var i = null,
                    s = t.target ? w.Library.dom(t.target) : null;
                  switch (
                    (s && s.is(".cc-12xv") && (i = s.attr("data-action")), i)
                  ) {
                    case "download":
                      n = !0;
                      break;
                    case "next":
                    case "previous":
                      c(i);
                      break;
                    default:
                      e();
                  }
                } catch (t) {
                } finally {
                  return n;
                }
              }),
              this.ef(t);
          } catch (t) {}
        }),
        (g.prototype.Dl = function (t) {
          try {
            var n = t.find(".cc-dnqb") || [];
            if (0 < n.length) {
              n.on("click", function (t) {
                try {
                  var n, i;
                  t.stopPropagation(),
                    !0 !== w.Chat.Message.lf() ||
                      ((i = t.target ? w.Library.dom(t.target) : null) &&
                        ((n = i.attr("data-type")),
                        (i = i.attr("data-url")) &&
                          n &&
                          (w.Action.do_message_send("animation", {
                            type: n,
                            url: i,
                          }),
                          w.Chat.Picker.jl())));
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
                this.ef(n);
              for (var i = 0; i < n.length; i++)
                n[i].onclick = function () {
                  return !1;
                };
            }
          } catch (t) {}
        }),
        (g.prototype.Ul = function () {
          try {
            w.Chat.Selector.jf.find(".cc-qqzz").on("click", function (t) {
              try {
                var n = t.target ? w.Library.dom(t.target) : null;
                n &&
                  !n.is(".cc-1lut") &&
                  0 === n.parents(".cc-1lut").length &&
                  w.Chat.Field.el();
              } catch (t) {}
            });
          } catch (t) {}
        }),
        (g.prototype.Rl = function () {
          try {
            w.Chat.Selector.jf.on("keydown", function (t) {
              try {
                27 === t.keyCode && w.Action.do_chat_close();
              } catch (t) {}
            }),
              w.Chat.Selector.get("header").on("click", function () {
                try {
                  w.Action.do_chat_close();
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(w.Chat.Selector.get("header")),
              (w.Chat.Selector.get("header")[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.Nl = function () {
          try {
            w.Chat.Selector.Ou.on("click", function (t) {
              try {
                var n = t.target ? w.Library.dom(t.target) : null;
                n && n.is(".cc-6uue")
                  ? w.Action.do_message_read()
                  : w.Action.do_chat_toggle();
              } catch (t) {
              } finally {
                return !1;
              }
            }),
              this.ef(w.Chat.Selector.Ou),
              (w.Chat.Selector.Ou[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.Ol = function () {
          var i = this;
          try {
            var s = null;
            w.Chat.Selector.get("flow").on("scroll", function () {
              try {
                var t = w.Chat.Selector.get("flow")[0].scrollTop;
                (Math.abs(t - (w.Chat.Scroll.qf || 0)) >= i.zf || null !== s) &&
                  ((w.Chat.Scroll.qf = t),
                  (n = w.Chat.Scroll.qf),
                  null !== s && w.Utility.clear_timeout(s),
                  (s = w.Utility.set_timeout(function () {
                    (s = null), w.Chat.State.propagate("scroll", n);
                  }, i.Sf))),
                  w.Chat.Notification.Af();
              } catch (t) {}
              var n;
            }),
              w.Chat.Selector.get("alerts_new_messages").on(
                "click",
                function () {
                  try {
                    w.Chat.Scroll.If();
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }
              ),
              this.ef(w.Chat.Selector.get("alerts_new_messages")),
              (w.Chat.Selector.get(
                "alerts_new_messages"
              )[0].onclick = function () {
                return !1;
              }),
              (w.Chat.Selector.get("flow")[0].onscroll = function (t) {
                t.preventDefault(), t.stopPropagation();
              }),
              (w.Chat.Selector.get("flow")[0].ontouchmove = function (t) {
                t.stopPropagation();
              });
          } catch (t) {}
        }),
        (g.prototype.Ml = function () {
          try {
            var t = w.Chat.Selector.get("header_channel"),
              n = t.filter('[data-channel="spotlight"]') || [];
            t.on("click", function (t) {
              try {
                t.stopPropagation();
                var n = t.target ? w.Library.dom(t.target) : null;
                n &&
                  n.is([".cc-1qlt", '[data-channel="spotlight"]'].join("")) &&
                  w.Action.do_helpdesk_search();
              } catch (t) {}
            }),
              n[0] &&
                (n[0].onclick = function () {
                  return !1;
                });
          } catch (t) {}
        }),
        (g.prototype.$l = function () {
          try {
            var t = w.Chat.Selector.get("pickers_selector_one");
            w.Chat.Selector.get("pickers").on("click", function (t) {
              try {
                var n = t.target ? w.Library.dom(t.target) : null;
                n && 0 === n.parents(".cc-1tha").length && w.Chat.Picker.jl();
              } catch (t) {}
            }),
              t.on("click", function (t) {
                try {
                  var n = t.target ? w.Library.dom(t.target) : null;
                  n &&
                    ((n = n.attr("data-type"))
                      ? w.Chat.Picker.yl(n)
                      : w.Chat.Picker.jl());
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(t);
            for (var n = 0; n < t.length; n++)
              t[n].onclick = function () {
                return !1;
              };
          } catch (t) {}
        }),
        (g.prototype.Ll = function () {
          try {
            var t = w.Chat.Selector.get("pickers_smiley").find(".cc-dnqb");
            w.Chat.Selector.get("form_button_smiley").on("click", function () {
              try {
                !1 === w.Chat.Picker.El()
                  ? w.Chat.Picker.yl("smiley")
                  : w.Chat.Picker.jl();
              } catch (t) {}
            }),
              t.on("click", function (t) {
                try {
                  var n,
                    i,
                    s,
                    e = t.target ? w.Library.dom(t.target) : null,
                    c = e ? e.attr("data-value") : null;
                  c &&
                    ((e = s = void 0),
                    (n = w.Chat.Selector.get("form_textarea_message")),
                    (i = n[0].selectionStart),
                    (s = e = w.Action.get_message_text()) &&
                      (0 < i && " " !== s[i - 1] && (c = " " + c),
                      i < s.length && " " !== s[i] && (c += " ")),
                    (e = s.substr(0, i) + c + s.substr(i)),
                    w.Action.set_message_text(e),
                    n.trigger("keyup"),
                    w.Utility.set_timeout(function () {
                      (i += c.length),
                        (n[0].selectionStart = n[0].selectionEnd = i);
                    }, 0)),
                    w.Chat.Picker.jl(),
                    w.Chat.Field.el();
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(t);
            for (var n = 0; n < t.length; n++)
              t[n].onclick = function () {
                return !1;
              };
          } catch (t) {}
        }),
        (g.prototype.Pl = function () {
          var t = this;
          try {
            var n = w.Chat.Selector.get("pickers_gif").find(".cc-1k8e") || [];
            w.Chat.Selector.get("pickers_search_input").on(
              "keyup",
              function () {
                try {
                  null !== t.Al && w.Utility.clear_timeout(t.Al),
                    (t.Al = w.Utility.set_timeout(function () {
                      var t = w.Chat.Selector.get("pickers_search_input")
                        .val()
                        .trim();
                      w.Chat.Picker.Sl(t);
                    }, t.Df));
                } catch (t) {}
              }
            ),
              0 < n.length &&
                (n.on("click", function () {
                  try {
                    w.Chat.Picker.Sl();
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }),
                this.ef(n),
                (n[0].onclick = function () {
                  return !1;
                }));
          } catch (t) {}
        }),
        (g.prototype.Jl = function () {
          try {
            w.Chat.Selector.get("alerts_warn_reply").on("click", function () {
              try {
                !0 === w.Base.nc.chat.phone_visitors &&
                !0 !== w.Base.nc.chat.email_visitors
                  ? w.Chat.Intent.Vc("identity", "phone")
                  : w.Chat.Intent.Vc("identity", "email");
              } catch (t) {
              } finally {
                return !1;
              }
            }),
              this.ef(w.Chat.Selector.get("alerts_warn_reply")),
              (w.Chat.Selector.get(
                "alerts_warn_reply"
              )[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.Hl = function () {
          try {
            w.Chat.Selector.get("alerts_email_invalid").on(
              "click",
              function () {
                try {
                  w.Chat.Intent.Vc("identity", "email", !0);
                } catch (t) {
                } finally {
                  return !1;
                }
              }
            ),
              this.ef(w.Chat.Selector.get("alerts_email_invalid")),
              (w.Chat.Selector.get(
                "alerts_email_invalid"
              )[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.Wl = function () {
          try {
            function n() {
              w.Chat.Message.send();
            }
            var t = w.Chat.Selector.get("form_textarea_message");
            t.on("keydown", function (t) {
              try {
                if (
                  (w.Event.trigger_interacted(),
                  13 === t.keyCode && !t.shiftKey)
                )
                  return n(), !1;
                if (
                  70 === t.keyCode &&
                  t.ctrlKey &&
                  w.Base.nc.channels.helpdesk &&
                  w.Base.qr !== w.Base.nc.channels.helpdesk
                )
                  return w.Action.do_helpdesk_search(), !1;
              } catch (t) {}
            }),
              w.Chat.Selector.get("form_button_send").on("click", function () {
                try {
                  n();
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              this.ef(w.Chat.Selector.get("form_button_send")),
              (t[0].onkeydown = function (t) {
                if ((t.stopPropagation(), 13 === t.keyCode && !t.shiftKey))
                  return !1;
              }),
              (w.Chat.Selector.get("form_message")[0].onsubmit = function () {
                return !1;
              }),
              (w.Chat.Selector.get(
                "form_button_send"
              )[0].onclick = function () {
                return !1;
              });
          } catch (t) {}
        }),
        (g.prototype.Gl = function () {
          var e = this;
          try {
            function n(t) {
              try {
                var n, i, s;
                (_textarea_val = ""),
                  (13 === t.keyCode && !t.shiftKey) ||
                    ((_textarea_val = w.Action.get_message_text()),
                    null !== a && w.Utility.clear_timeout(a),
                    (a = w.Utility.set_timeout(function () {
                      w.Chat.State.propagate(
                        "textarea",
                        w.Action.get_message_text()
                      );
                    }, e.Tf)),
                    _textarea_val
                      ? ((n =
                          (8.5 * _textarea_val.length) / w.Chat.Interface.Bf),
                        (n += (_textarea_val.match(/\n/g) || []).length),
                        ((s = Math.ceil(n)) - n < e.Uf || s !== c) &&
                          ((c = n = s),
                          (i =
                            w.Chat.Interface.Rf -
                            w.Chat.Interface.Nf +
                            w.Chat.Interface.Nf * n),
                          (s = w.Chat.Interface.Nf * (n - 1)),
                          w.Chat.Selector.get("form_textarea_message").attr(
                            "rows",
                            o + (n - 1)
                          ),
                          i <
                            w.Chat.Interface.Of + w.Chat.Interface.Rf - e.Mf &&
                            (w.Chat.Field.$f(s),
                            w.Chat.Selector.get("form_container").safe_css_text(
                              "height",
                              i + "px"
                            ))),
                        w.Chat.Selector.get("form_container").attr(
                          "data-has-value",
                          "true"
                        ))
                      : (w.Chat.Selector.get("form_container").safe_css_text(
                          null
                        ),
                        w.Chat.Selector.get("form_container").attr(
                          "data-has-value",
                          "false"
                        ),
                        w.Chat.Selector.get("form_textarea_message").attr(
                          "rows",
                          o
                        ),
                        w.Chat.Field.$f(0))),
                  w.Library.crisp.client.Message.send_message_compose(
                    _textarea_val ? "start" : "stop",
                    _textarea_val || null
                  );
              } catch (t) {}
            }
            var c = 1,
              a = null,
              o = parseInt(
                w.Chat.Selector.get("form_textarea_message").attr("rows"),
                10
              );
            w.Chat.Selector.get("form_textarea_message").on(
              "keypress",
              function (t) {
                try {
                  n(t);
                } catch (t) {}
              }
            ),
              w.Chat.Selector.get("form_textarea_message").on(
                "keyup",
                function (t) {
                  try {
                    n(t);
                  } catch (t) {}
                }
              );
          } catch (t) {}
        }),
        (g.prototype.Vl = function () {
          var n,
            i = this;
          try {
            !0 === w.Base.nc.chat.file_transfer &&
              ((n = function (t) {
                t.preventDefault(), t.stopPropagation();
              }),
              w.Chat.Selector.get("content").on("dragover", function (t) {
                n(t),
                  w.Chat.Selector.get("content").attr(
                    "data-has-drop-zone",
                    "true"
                  );
              }),
              w.Chat.Selector.get("drop_over").on("dragleave", function (t) {
                n(t),
                  w.Chat.Selector.get("content").removeAttr(
                    "data-has-drop-zone"
                  );
              }),
              w.Chat.Selector.get("drop_over").on("drop", function (t) {
                return (
                  n(t),
                  w.Chat.Selector.get("content").removeAttr(
                    "data-has-drop-zone"
                  ),
                  t.dataTransfer &&
                    t.dataTransfer.files &&
                    0 < t.dataTransfer.files.length &&
                    i.Lf(t.dataTransfer.files),
                  !1
                );
              }));
          } catch (t) {}
        }),
        (g.prototype.Kl = function () {
          var c = this;
          try {
            !0 === w.Base.nc.chat.file_transfer &&
              w.Chat.Selector.get("form_textarea_message").on(
                "paste",
                function (t) {
                  try {
                    var n =
                      (t.clipboardData || t.originalEvent.clipboardData || {})
                        .items || [];
                    if (0 < n.length) {
                      for (var i, s = [], e = 0; e < n.length; e++)
                        "file" !== n[e].kind ||
                          ((i = n[e].getAsFile()) &&
                            i.type &&
                            -1 !== i.type.indexOf("image/") &&
                            s.push(i));
                      0 < s.length &&
                        (t.preventDefault(),
                        !0 ===
                          confirm(
                            w.Locale.text(
                              "chat",
                              "chat_form_attach_confirm_upload"
                            )
                          ) && c.Lf(s));
                    }
                  } catch (t) {}
                }
              );
          } catch (t) {}
        }),
        (g.prototype.Xl = function () {
          var r = this;
          try {
            !0 === w.Base.nc.chat.file_transfer &&
              w.Chat.Selector.get("form_message").on(
                "event:attach",
                function () {
                  try {
                    function t() {
                      n &&
                        (n.removeEventListener("progress", c, !1),
                        n.removeEventListener("error", e, !1),
                        n.removeEventListener("abort", e, !1),
                        n.removeEventListener("load", s, !1)),
                        (w.Chat.Selector.get(
                          "form_input_attach"
                        )[0].value = null),
                        w.Chat.Selector.get("form_button_attach").attr(
                          "data-state",
                          "none"
                        ),
                        r.Pf.shift(),
                        0 < r.Pf.length && r.Lf(r.Pf);
                    }
                    var n = void 0,
                      i = void 0,
                      s = function () {
                        0 < r.Pf.length &&
                          i &&
                          w.Utility.set_timeout(function () {
                            w.Action.do_message_send("file", {
                              url: i,
                              name: r.Pf[0].name || r.Jf,
                              type: r.Pf[0].type || r.Hf,
                            }),
                              t();
                          }, r.Wf);
                      },
                      e = function () {
                        0 < r.Pf.length &&
                          alert(
                            w.Locale.text(
                              "chat",
                              "chat_form_attach_alert_error"
                            )
                          ),
                          t();
                      },
                      c = function () {
                        w.Chat.Selector.get("form_button_attach").attr(
                          "data-state",
                          "uploading"
                        );
                      },
                      a = w.Chat.Selector.get("form_message").attr(
                        "data-action"
                      ),
                      i = w.Chat.Selector.get("form_message").attr(
                        "data-resource"
                      ),
                      o = parseInt(
                        w.Chat.Selector.get("form_message").attr(
                          "data-size-limit"
                        ),
                        10
                      );
                    if (!r.Pf[0]) return void t();
                    if (!a || !i)
                      return (
                        alert(
                          w.Locale.text("chat", "chat_form_attach_alert_quota")
                        ),
                        void t()
                      );
                    if (r.Pf[0].size >= o)
                      return (
                        alert(
                          w.Locale.text("chat", "chat_form_attach_alert_size")
                        ),
                        void t()
                      );
                    ((n = new XMLHttpRequest()).file = r.Pf[0]),
                      n.addEventListener("progress", c, !1),
                      n.addEventListener("error", e, !1),
                      n.addEventListener("abort", e, !1),
                      n.addEventListener("load", s, !1),
                      n.open("PUT", a, !0),
                      n.setRequestHeader("Content-Disposition", "attachment"),
                      n.send(r.Pf[0]);
                  } catch (t) {
                  } finally {
                    return !1;
                  }
                }
              );
          } catch (t) {}
        }),
        (g.prototype.Yl = function () {
          var n = this;
          try {
            !0 === w.Base.nc.chat.file_transfer &&
              w.Chat.Selector.get("form_input_attach").on(
                "change",
                function (t) {
                  return (
                    !!(t.target.files && 0 < t.target.files.length) &&
                    n.Lf(t.target.files)
                  );
                }
              );
          } catch (t) {}
        }),
        (g.prototype.Zl = function () {
          try {
            w.Utility.add_event_listener(
              this.ns,
              "document",
              "wheel",
              function (t) {
                try {
                  var n,
                    i = t.target ? w.Library.dom(t.target) : null;
                  i &&
                    "number" == typeof t.wheelDelta &&
                    !0 === w.Action.is_chat_opened() &&
                    (0 < i.parents(".crisp-client").length ||
                      i.is(".crisp-client")) &&
                    ((n = w.Chat.Selector.get("flow")) &&
                      n[0] &&
                      (0 < i.parents(".cc-1v5j").length || i.is(".cc-1v5j")) &&
                      ((i = n[0].scrollTop - t.wheelDelta),
                      (n[0].scrollTop = 0 <= i ? i : 0)),
                    t.stopPropagation(),
                    t.preventDefault(),
                    (t.returnValue = !1));
                } catch (t) {}
              },
              { passive: !1 }
            );
          } catch (t) {}
        }),
        (g.prototype.Ql = function () {
          try {
            w.Utility.add_event_listener(
              this.ns,
              "window",
              "beforeunload",
              function (t) {
                var n,
                  i = null;
                if (
                  (!0 ===
                    w.Library.crisp.client.Message.is_sending_messages() &&
                    (i = w.Locale.text("chat", "chat_message_send_abort_warn")),
                  !0 === w.Base.nc.chat.file_transfer &&
                    ((n = w.Chat.Selector.get("form_button_attach").attr(
                      "data-state"
                    )),
                    -1 !== ["preparing", "uploading"].indexOf(n) &&
                      (i = w.Locale.text(
                        "chat",
                        "chat_form_attach_abort_warn"
                      ))),
                  !0 === w.Library.crisp.client.Call.is_ongoing() &&
                    (i = w.Locale.text("call", "call_abort_warn")),
                  i)
                )
                  return (t.returnValue = i);
              }
            );
          } catch (t) {}
        }),
        (g.prototype.ef = function (t) {
          try {
            t.on("touchstart", function (t) {
              try {
                t.preventDefault();
              } catch (t) {}
            }),
              t.on("touchend", function (t) {
                try {
                  t.preventDefault(),
                    t.target &&
                      "function" == typeof t.target.click &&
                      t.target.click();
                } catch (t) {}
              });
          } catch (t) {}
        }),
        (g.prototype.Lf = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : [];
          try {
            if (!0 === w.Chat.Message.lf()) {
              var i = w.Chat.Selector.get("form_button_attach").attr(
                "data-state"
              );
              if (0 < n.length && "none" === i) {
                this.Pf = [];
                for (var s = 0; s < n.length; s++) this.Pf.push(n[s]);
                w.Chat.Selector.get("form_button_attach").attr(
                  "data-state",
                  "preparing"
                ),
                  w.Library.crisp.client.Bucket.get_url_upload(
                    n[0].name || this.Jf,
                    n[0].type || this.Hf
                  );
              }
            }
          } catch (t) {
          } finally {
            return !1;
          }
        }),
        (g.prototype.Z = function () {
          try {
            (this.Pf = []), (this.Al = null);
          } catch (t) {}
        }),
        new g())),
      (w.Chat.Field =
        ((_.prototype.init = function () {}),
        (_.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (_.prototype.el = function (t) {
          var n,
            i,
            s = 0 < arguments.length && void 0 !== t && t;
          try {
            (!0 !== s && w.Feature.has_screen_touch()) ||
              !w.Chat.Interface.Gf() ||
              ((n = w.Chat.Selector.get("flow_messages")) &&
                ((i = null),
                (i =
                  0 < (n = n.find(".cc-1t9k")).length
                    ? n
                    : !0 === w.Chat.Picker.El()
                    ? w.Chat.Selector.get("pickers_search_input")
                    : w.Chat.Selector.get("form_textarea_message")) &&
                  0 < i.length &&
                  i[0].focus()));
          } catch (t) {}
        }),
        (_.prototype.Vf = function () {
          try {
            for (var t = w.Base.yc.find("input"), n = 0; n < t.length; n++)
              t[n].blur();
          } catch (t) {}
        }),
        (_.prototype.$f = function (t) {
          try {
            w.Chat.Selector.jf
              .find([".cc-1pvj", ".cc-1mtf", ".cc-1tha"].join(", "))
              .safe_css_text("margin-bottom", t + "px");
          } catch (t) {}
        }),
        (_.prototype.Z = function () {
          try {
            this.Kf = "";
          } catch (t) {}
        }),
        new _())),
      (w.Chat.Game =
        ((m.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (m.prototype.start = function () {
          try {
            null === this.Xf &&
              ((this.Xf = w.Library.dom(
                w.Template.render("chat_game", {
                  environment: { url: { crisp_game: w.Base.Bh } },
                })
              )),
              w.Chat.Event.df(this.Xf),
              w.Chat.Selector.jf.append(this.Xf));
          } catch (t) {}
        }),
        (m.prototype.stop = function () {
          try {
            null !== this.Xf && (this.Xf.remove(), (this.Xf = null));
          } catch (t) {}
        }),
        (m.prototype.Z = function () {
          try {
            this.Xf = null;
          } catch (t) {}
        }),
        new m())),
      (w.Chat.Interface =
        ((y.prototype.init = function () {
          try {
            this.Yf();
          } catch (t) {}
        }),
        (y.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (y.prototype.Zf = function (t, n) {
          var s = this,
            i = 0 < arguments.length && void 0 !== t ? t : "pane",
            e = !(1 < arguments.length && void 0 !== n) || n;
          try {
            function c(t) {
              var n = "close" === t ? "maximize" : "minimize",
                i = "close" === t ? "minimize" : "maximize";
              null !== s.Qf && w.Utility.clear_timeout(s.Qf),
                w.Chat.Selector.Ou &&
                  (w.Chat.Selector.Ou.removeClass(s.td.minimized[n]),
                  w.Chat.Selector.Ou.addClass(s.td.minimized[i])),
                w.Chat.Selector.nd &&
                  (w.Chat.Selector.nd.removeClass(s.td.shade[n]),
                  w.Chat.Selector.nd.addClass(s.td.shade[i])),
                w.Chat.Selector.jf &&
                  (w.Chat.Selector.jf.removeClass(s.td.chat[n]),
                  w.Chat.Selector.jf.addClass(s.td.chat[i])),
                (s.Qf = w.Utility.set_timeout(function () {
                  o(t);
                }, s.sd));
            }
            var a = "chat" === i ? "true" : "false",
              o = function (t) {
                var n = !(t && "close" !== t);
                1 == !(t && "open" !== t) &&
                  (w.Chat.Selector.Ou &&
                    (w.Chat.Selector.Ou.attr("data-maximized", "true"),
                    w.Chat.Selector.Ou.removeClass(s.td.minimized.maximize)),
                  w.Chat.Selector.nd &&
                    w.Chat.Selector.nd.removeClass(s.td.shade.maximize),
                  w.Chat.Selector.jf &&
                    w.Chat.Selector.jf.removeClass(s.td.chat.maximize)),
                  1 == n &&
                    (w.Chat.Selector.nd &&
                      w.Chat.Selector.nd.attr("data-visible", "false"),
                    w.Chat.Selector.jf &&
                      w.Chat.Selector.jf.attr("data-visible", "false"),
                    w.Chat.Selector.Ou &&
                      w.Chat.Selector.Ou.removeClass(s.td.minimized.minimize),
                    w.Chat.Selector.nd &&
                      w.Chat.Selector.nd.removeClass(s.td.shade.minimize),
                    w.Chat.Selector.jf &&
                      w.Chat.Selector.jf.removeClass(s.td.chat.minimize));
              };
            (this.Sc = "pane" !== i),
              this.ed(),
              this.cd("true" == a),
              !0 === e && w.Feature.has_css_animations()
                ? "pane" === i
                  ? (w.Chat.Selector.Ou &&
                      w.Chat.Selector.Ou.attr("data-maximized", a),
                    c("close"))
                  : (w.Chat.Selector.nd &&
                      w.Chat.Selector.nd.attr("data-visible", a),
                    w.Chat.Selector.jf &&
                      w.Chat.Selector.jf.attr("data-visible", a),
                    c("open"))
                : (o(),
                  w.Chat.Selector.nd &&
                    w.Chat.Selector.nd.attr("data-visible", a),
                  w.Chat.Selector.jf &&
                    w.Chat.Selector.jf.attr("data-visible", a),
                  w.Chat.Selector.Ou &&
                    w.Chat.Selector.Ou.attr("data-maximized", a));
          } catch (t) {}
        }),
        (y.prototype.ir = function (t, n) {
          var i = this,
            s = 0 < arguments.length && void 0 !== t && t,
            e = 1 < arguments.length && void 0 !== n && n;
          try {
            null !== this.ad && w.Utility.clear_timeout(this.ad),
              (this.ad = w.Utility.set_timeout(
                function () {
                  (i.ad = null),
                    !1 === s
                      ? w.Chat.Selector.get("content").attr(
                          "data-has-offline",
                          "true"
                        )
                      : w.Chat.Selector.get("content").removeAttr(
                          "data-has-offline"
                        ),
                    !0 === e
                      ? w.Chat.Selector.get("offline").attr(
                          "data-reconnect-failed",
                          "true"
                        )
                      : w.Chat.Selector.get("offline").removeAttr(
                          "data-reconnect-failed"
                        );
                },
                !0 === s ? 0 : this.od
              ));
          } catch (t) {}
        }),
        (y.prototype.vc = function () {
          try {
            !0 !== w.Base.Hh.lock_maximized &&
              w.Chat.State.propagate("maximized", !1);
          } catch (t) {}
        }),
        (y.prototype.dc = function () {
          try {
            w.Chat.State.propagate("maximized", !0, !1, function () {
              w.Chat.Scroll.If();
            });
          } catch (t) {}
        }),
        (y.prototype.Gf = function () {
          var t = !0;
          try {
            t = this.Sc;
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (y.prototype.sl = function () {
          try {
            var t = w.Base.nc || {},
              n = t.website || {};
            (w.Chat.Selector.Gu = w.Library.dom(
              w.Template.render("chat", {
                activity: {
                  metrics:
                    n.response_metrics &&
                    n.response_metrics.mean &&
                    n.response_metrics.mean >= this.rd &&
                    n.response_metrics.mean < this.hd
                      ? {
                          format: w.Utility.lower_string_first(
                            w.Date.format_duration(n.response_metrics.mean, !1)
                          ),
                          raw: n.response_metrics.mean,
                        }
                      : null,
                  last:
                    n.last_available && 0 < n.last_available
                      ? {
                          format: w.Utility.lower_string_first(
                            w.Date.format_date(
                              w.Date.timestamp_to_iso(n.last_available)
                            )
                          ),
                          raw: w.Date.timestamp_to_iso(n.last_available),
                        }
                      : null,
                },
                configuration: t,
                environment: {
                  smileys: this.ud,
                  url: { crisp_web: w.Base.Dh },
                },
                methods: {
                  active_operators: w.Avatar.active_operators.Et(w.Avatar),
                  count_other_operators: w.Avatar.count_other_operators.Et(
                    w.Avatar
                  ),
                  generate_channel_link: this.sc.Et(this),
                },
                website: {
                  id: w.Base.Kr,
                  domain: w.Base.nc.website.domain,
                  name: w.Base.nc.website.name,
                },
                chatbox: {
                  blocked: w.Base.uu(),
                  runtime: w.Base.Hh,
                  helpdesk: {
                    search:
                      w.Base.nc.chat.helpdesk_link &&
                      w.Base.nc.channels.helpdesk &&
                      w.Base.qr !== w.Base.nc.channels.helpdesk &&
                      !0,
                  },
                },
                status: { url: this.sc("status") },
              })
            )),
              w.Base.yc.empty(),
              w.Base.yc.append(w.Chat.Selector.Gu),
              w.Chat.Selector.Vu(),
              w.Chat.Event.Vu(),
              this.mc(!0),
              this.ld(),
              w.Chat.State.fd(["intent"]);
          } catch (t) {}
        }),
        (y.prototype.sc = function (t) {
          var n = "";
          try {
            var i = w.Base.nc.channels[t] || null;
            switch (t) {
              case "email":
                var s,
                  e = w.Broker.ar;
                e
                  ? ((s = w.Base.nc.website.name),
                    (e = "s." + e + ".i@" + w.Base.nc.website.mailer),
                    (n = "mailto:"),
                    s && (n += '"' + encodeURI(s) + '"'),
                    (n += "<" + encodeURI(e) + ">"))
                  : i && (n = "mailto:" + i);
                break;
              case "phone":
                i && (n = "tel:" + i);
                break;
              case "messenger":
                i && (n = "https://m.me/" + encodeURI(i));
                break;
              case "telegram":
                i && (n = "https://telegram.me/" + encodeURI(i));
                break;
              case "twitter":
                i && (n = "https://twitter.com/" + encodeURI(i));
                break;
              case "helpdesk":
              case "status":
                i &&
                  (n =
                    ("production" === w.Base.Uh ? "https" : "http") +
                    "://" +
                    i +
                    "/");
            }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (y.prototype.mc = function (t) {
          var n,
            i,
            s = 0 < arguments.length && void 0 !== t && t;
          try {
            !0 === w.Action.is_chat_visible() &&
              (!0 === w.Base.iu()
                ? ((this.dd = this.pd), (this.vd = this.yd))
                : !0 === w.Base.nu()
                ? ((this.dd = this.md), (this.vd = this._d))
                : ((this.dd = this.gd), (this.vd = this.wd)),
              w.Base.Rr(),
              !0 === w.Base.Ac() &&
                ((this.dd = window.innerHeight),
                (this.vd = window.innerWidth),
                (this.dd -= w.Chat.Selector.get("header").height())),
              (!0 !== w.Chat.fc && !0 !== s) ||
                ((n = "rtl" === w.Locale.direction() ? "right" : "left"),
                (i = "rtl" === w.Locale.direction() ? "left" : "right"),
                (n = parseInt(
                  w.Chat.Selector.get("form_textarea_message")
                    .css(n)
                    .replace("px", ""),
                  10
                )),
                (i = parseInt(
                  w.Chat.Selector.get("form_act").css(i).replace("px", ""),
                  10
                )),
                (i =
                  this.vd -
                  this.bd -
                  n -
                  i -
                  w.Chat.Selector.get("form_act")[0].offsetWidth),
                w.Chat.Selector.jf.safe_css_text("width", this.vd + "px"),
                w.Chat.Selector.get("content").safe_css_text(
                  "height",
                  this.dd + "px"
                ),
                w.Chat.Selector.get("form_textarea_message").safe_css_text(
                  "width",
                  i + "px"
                ),
                (this.Of = w.Chat.Selector.get("flow").height()),
                (this.Bf = w.Chat.Selector.get(
                  "form_textarea_message"
                ).width()),
                0 === this.Rf &&
                  (this.Rf = w.Chat.Selector.get("form_container").height()),
                0 === this.Nf &&
                  (this.Nf = parseInt(
                    w.Chat.Selector.get("form_textarea_message")
                      .css("line-height")
                      .replace("px", ""),
                    10
                  )),
                (w.Chat.Scroll.kd = this.Of),
                w.Base.Ac() && !0 === this.Gf()
                  ? w.Chat.Viewport.xd()
                  : w.Chat.Viewport.Fd(),
                w.Chat.Selector.get("form_textarea_message").trigger("keyup")),
              w.Sound.allow(!w.Base.Ac() && !0));
          } catch (t) {}
        }),
        (y.prototype.Ed = function () {
          try {
            return this.Cd && this.Gf() && !0;
          } catch (t) {}
        }),
        (y.prototype.gc = function (t, n) {
          var i = !1;
          try {
            var s,
              e,
              c = this.sc("helpdesk");
            c &&
              ((i = !0),
              (s = w.Base.yc.find(".cc-k0ox")),
              (e = w.Library.dom(
                w.Template.render("article", {
                  frame: { url: "" + c + t + "/article/" + n },
                })
              )),
              w.Chat.Event.pf(e),
              0 === s.length
                ? w.Base.yc.append(e)
                : s[0].parentNode.replaceChild(e[0], s[0]),
              w.Utility.set_timeout(function () {
                e[0].focus();
              }, this.jd));
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (y.prototype._c = function () {
          var n = this,
            t = !1;
          try {
            var i = this.sc("helpdesk");
            i &&
              ((t = !0),
              null === this.mf &&
                ((this.mf = w.Library.dom(
                  w.Template.render("spotlight", { url: i })
                )),
                w.Chat.Event.vf(this.mf),
                w.Base.yc.append(this.mf),
                w.Action.do_helpdesk_query(""),
                w.Utility.set_timeout(function () {
                  var t = n.mf.find(".cc-tdrg");
                  t && t[0] && t[0].focus();
                }, this.qd)));
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (y.prototype.sf = function (t, n, i, s) {
          var e = 2 < arguments.length && void 0 !== i ? i : null,
            c = 3 < arguments.length && void 0 !== s ? s : null;
          try {
            var a = w.Base.yc.find(".cc-1nn0"),
              o = w.Chat.Message.zd("file" === t ? c : null),
              r = w.Library.dom(
                w.Template.render("magnify", {
                  type: t,
                  source: n,
                  name: e,
                  fingerprints: o,
                })
              );
            w.Chat.Event.Cf(r, o),
              0 === a.length
                ? w.Base.yc.append(r)
                : a[0].parentNode.replaceChild(r[0], a[0]),
              w.Utility.set_timeout(function () {
                r[0].focus();
              }, this.Sd);
          } catch (t) {}
        }),
        (y.prototype.xf = function (t, n) {
          try {
            var i = (t.find(".cc-4wnb").text() || "").trim();
            i && (n.val("" + (n.val() || "") + i), this.Cr([]));
          } catch (t) {}
        }),
        (y.prototype.bf = function (t) {
          try {
            var n = t.find(".cc-1h5e[data-active='true']");
            n && 0 < n.length && n[0].click();
          } catch (t) {}
        }),
        (y.prototype.kf = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n ? n : 1;
          try {
            var s = t.find(".cc-1h5e") || [];
            if (0 < s.length) {
              for (var e = -1, c = 0; c < s.length; c++)
                if ("true" === w.Library.dom(s[c]).attr("data-active")) {
                  e = c;
                  break;
                }
              (e += i) < 0 ? (e = s.length - 1) : s.length <= e && (e = 0),
                -1 < e && this.Ef(t, s[e], !0);
            }
          } catch (t) {}
        }),
        (y.prototype.Ef = function (t, n, i) {
          var s = 1 < arguments.length && void 0 !== n ? n : null,
            e = 2 < arguments.length && void 0 !== i && i;
          try {
            t.find(".cc-1h5e").attr("data-active", "false"),
              null !== s &&
                w.Library.dom(s).attr(
                  "data-active",
                  !0 === e ? "true" : "false"
                );
          } catch (t) {}
        }),
        (y.prototype.Er = function (t, n, i) {
          var s,
            e = 0 < arguments.length && void 0 !== t ? t : [],
            c = this,
            a = 1 < arguments.length && void 0 !== n ? n : {},
            o = !(2 < arguments.length && void 0 !== i) || i;
          try {
            null !== this.mf &&
              ((s = this.mf.find(".cc-1u0c")) && s.remove(),
              !0 === o &&
                ((s = w.Library.dom(
                  w.Template.render("spotlight_results", {
                    base_url: this.sc("helpdesk"),
                    results: e,
                    has_active: !w.Feature.has_screen_touch() && !0,
                  })
                )),
                this.mf.find(".cc-16io").prepend(s),
                w.Chat.Event.Ff(this.mf)),
              null !== this.yf && w.Utility.clear_timeout(this.yf),
              a.query &&
                (this.yf = w.Utility.set_timeout(function () {
                  c.yf = null;
                  var t = (a.query || "").trim(),
                    n = a.locale || null;
                  e[0] && e[0].locale && (n = e[0].locale),
                    n &&
                      t &&
                      w.Library.crisp.client.Helpdesk.report_article_search(
                        n,
                        t
                      );
                }, this.Ad)),
              this.mf.attr("data-state", "loaded"),
              this.mf.attr("data-has-results", !0 === o ? "true" : "false"));
          } catch (t) {}
        }),
        (y.prototype.Cr = function (t) {
          var n,
            i,
            s,
            e,
            c,
            a = 0 < arguments.length && void 0 !== t ? t : [];
          try {
            null !== this.mf &&
              ((n = this.mf.find(".cc-4wnb")),
              (i = (a[0] || "").toLowerCase()),
              (c = s = null),
              !i ||
                ((e = (c = this.mf.find(".cc-tdrg").val() || "")
                  .substring(c.lastIndexOf(" ") + 1)
                  .trim()
                  .toLowerCase()) &&
                  e.length < i.length &&
                  i.substring(0, e.length) === e &&
                  (s = i.substring(e.length))),
              s && c
                ? ((e = this.mf.find(".cc-16kz")).text(c),
                  n.text(s),
                  (c = "rtl" === w.Locale.direction() ? "right" : "left"),
                  n.safe_css_text(
                    (r((s = {}), c, e[0].offsetWidth + "px"),
                    r(s, "display", "block"),
                    s)
                  ))
                : (n.safe_css_text("display", "none"), n.empty()));
          } catch (t) {}
        }),
        (y.prototype.cd = function (t) {
          var n = this,
            i = 0 < arguments.length && void 0 !== t && t;
          try {
            null !== this.Id &&
              (w.Utility.clear_timeout(this.Id), (this.Id = null)),
              !0 === w.Base.Ac() &&
                window.scroll &&
                (!0 === i
                  ? !0 === w.Base.Ac() &&
                    (this.Id = w.Utility.set_timeout(function () {
                      !(n.Id = null) === n.Gf() &&
                        (-1 === n.Dd && (n.Dd = window.scrollY),
                        window.scroll(
                          window.scrollX,
                          document.body.scrollHeight
                        ));
                    }, this.Td))
                  : -1 < this.Dd &&
                    (window.scroll(window.scrollX, this.Dd), (this.Dd = -1)));
          } catch (t) {}
        }),
        (y.prototype.ed = function () {
          try {
            var t = this.Ed();
            w.Library.crisp.client.Message.set_messages_in_view(t);
          } catch (t) {}
        }),
        (y.prototype.Yf = function () {
          var t = this;
          try {
            (this.Cd = (!window.hasFocus || window.hasFocus()) && !0),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "focus",
                function () {
                  (t.Cd = !0), t.ed();
                },
                { capture: !1 }
              ),
              w.Utility.add_event_listener(
                this.ns,
                "window",
                "blur",
                function () {
                  (t.Cd = !1), t.ed();
                },
                { capture: !1 }
              );
          } catch (t) {}
        }),
        (y.prototype.ld = function () {
          try {
            (this.Sc = !1),
              w.Chat.Selector.nd.attr("data-visible", "false"),
              w.Chat.Selector.jf.attr("data-visible", "false");
          } catch (t) {}
        }),
        (y.prototype.Z = function () {
          try {
            (this.Sc = !0),
              (this.Of = 0),
              (this.Rf = 0),
              (this.Bf = 0),
              (this.Nf = 0),
              (this.Bd = 40),
              (this.mf = null),
              (this.yf = null),
              (this.ad = null),
              (this.Qf = null),
              (this.vd = 0),
              (this.dd = 0),
              (this.Dd = -1),
              (this.Id = null),
              (this.Cd = !0);
          } catch (t) {}
        }),
        new y()));
    var f = function (t, n) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t))
        return (function (t, n) {
          var i = [],
            s = !0,
            e = !1,
            c = void 0;
          try {
            for (
              var a, o = t[Symbol.iterator]();
              !(s = (a = o.next()).done) &&
              (i.push(a.value), !n || i.length !== n);
              s = !0
            );
          } catch (t) {
            (e = !0), (c = t);
          } finally {
            try {
              !s && o.return && o.return();
            } finally {
              if (e) throw c;
            }
          }
          return i;
        })(t, n);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    if (
      ((w.Chat.Message =
        ((v.prototype.init = function () {
          try {
            this.Ud();
          } catch (t) {}
        }),
        (v.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (v.prototype.send = function () {
          var t;
          try {
            !0 !== this.lf() ||
              ((t = (t = w.Action.get_message_text()).trim()) &&
                (w.Action.do_message_send("text", t),
                w.Action.set_message_text(""),
                w.Chat.Selector.get("form_textarea_message").trigger("keyup")));
          } catch (t) {}
        }),
        (v.prototype.received = function (t, n, i, s, e) {
          var c = !(1 < arguments.length && void 0 !== n) || n,
            a = !(2 < arguments.length && void 0 !== i) || i,
            o = !(3 < arguments.length && void 0 !== s) || s,
            r = 4 < arguments.length && void 0 !== e && e;
          try {
            var h = this.ql("from", t),
              h = (u = f(h, 2))[0],
              u = u[1];
            !0 === c &&
              !1 === w.Chat.Interface.Ed() &&
              w.Sound.start("events", "chat-message-receive"),
              !0 === o && w.Chat.Scroll.Rd("from"),
              !0 === a && !1 === u && this.Nd(h),
              t.user &&
                -1 === this.Od.indexOf(t.user.source) &&
                w.Chat.Misc.Md(t.user),
              !1 === r && w.Chat.Game.stop(),
              this.$d && 0 < t.timestamp && this.$d < t.timestamp && this.mr();
          } catch (t) {}
        }),
        (v.prototype.sent = function (t) {
          var n = this;
          try {
            var i,
              s,
              e = this.ql("to", t),
              e = (c = f(e, 2))[0],
              c = c[1];
            w.Chat.Scroll.Rd("to"),
              !1 === c && this.Nd(e),
              this.Ld(t.fingerprint),
              w.Chat.Event.uf(e, t),
              w.Chat.Intent.cl.identity ||
                !1 === w.Chat.Intent.cl.identity ||
                ((c = w.Action.get_user_email()),
                (e = w.Action.get_user_phone()),
                (i = w.Base.nc.chat.email_visitors),
                (s = w.Base.nc.chat.phone_visitors),
                ((c || !0 !== i) && (e || !0 !== s)) || c || e
                  ? w.Chat.Alert.Vc("wait_reply", "show")
                  : (null !== this.Pd && w.Utility.clear_timeout(this.Pd),
                    (this.Pd = w.Utility.set_timeout(function () {
                      n.Pd = null;
                      var t = "default";
                      !1 === (i && s) &&
                        (!0 === i ? (t = "email") : !0 === s && (t = "phone")),
                        w.Chat.Intent.Vc("identity", t),
                        w.Chat.Alert.Vc("warn_reply", "show");
                    }, this.Jd))));
          } catch (t) {}
        }),
        (v.prototype.sent_acknowledgement = function (t) {
          try {
            var n = this.Hd.indexOf(t.fingerprint);
            -1 !== n && this.Hd.splice(n, 1),
              this.ql("to", t),
              this.Wd(),
              w.Chat.Scroll.Rd("to");
          } catch (t) {}
        }),
        (v.prototype.received_from_history = function (t) {
          try {
            this.ql("from", t), t.index.current === t.index.total && this.Gd();
          } catch (t) {}
        }),
        (v.prototype.sent_from_history = function (t) {
          try {
            this.ql("to", t),
              !0 === t.read && this.Vd.push(t.fingerprint),
              t.index.current === t.index.total && this.Gd();
          } catch (t) {}
        }),
        (v.prototype.Kd = function () {
          try {
            var t = w.Locale.text(
                "theme_welcome",
                ["default_chat", w.Base.nc.chat.theme_welcome + "_chat"],
                [w.Base.nc.website.name]
              ),
              n = { website: w.Base.nc.channels.helpdesk, url: null };
            n.website &&
              !0 === w.Base.nc.chat.helpdesk_link &&
              w.Base.qr !== n.website &&
              (n.url = w.Chat.Interface.sc("helpdesk")),
              this.Xd(
                "welcome",
                "default",
                "text",
                t,
                !1,
                !1,
                n.website && n.url
                  ? [
                      {
                        variant: "helpdesk",
                        url: n.url,
                        website: n.website,
                        title: w.Locale.text("chat", "chat_welcome_helpdesk"),
                      },
                    ]
                  : []
              );
          } catch (t) {}
        }),
        (v.prototype.gl = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          try {
            for (
              var i =
                  "**" +
                  w.Locale.text("chat", "chat_message_text_identity_main") +
                  "**\n_" +
                  w.Locale.text("chat", "chat_message_text_identity_ask") +
                  "_",
                s = [],
                e = 0;
              e < this.Yd.length;
              e++
            ) {
              var c = this.Yd[e];
              !0 === w.Base.nc.chat[c + "_visitors"] &&
                s.push({
                  value: c,
                  selected: !1,
                  label: w.Locale.text(
                    "chat",
                    "chat_message_text_identity_pick_" + c
                  ),
                  handler: (function (t) {
                    return function () {
                      w.Chat.Intent.Vc("identity", t);
                    };
                  })(c),
                });
            }
            0 < s.length &&
              this.Xd(
                "identity",
                "default",
                "picker",
                { id: "ask-identity", text: i, choices: s },
                n,
                n
              );
          } catch (t) {}
        }),
        (v.prototype.bl = function () {
          try {
            this.Zd("identity");
          } catch (t) {}
        }),
        (v.prototype.wl = function (n, t) {
          var i,
            s,
            e = this,
            c = !(1 < arguments.length && void 0 !== t) || t;
          try {
            -1 !== this.Yd.indexOf(n) &&
              ((i = "chat_message_text_identity_ask_" + n),
              (s = "chat_message_text_identity_ask_field_" + n),
              this.Xd(
                "identity",
                n,
                "field",
                {
                  id: "identity-" + n,
                  text: "_" + w.Locale.text("chat", i) + "_",
                  explain: w.Locale.text("chat", s),
                  previous: "identity",
                  handler: function (t) {
                    try {
                      w.Action["set_user_" + n](t);
                    } catch (t) {}
                    w.Utility.set_timeout(function () {
                      w.Chat.Field.el();
                    }, e.Qd);
                  },
                },
                c,
                c
              ));
          } catch (t) {}
        }),
        (v.prototype.xl = function (t) {
          var n = !(0 < arguments.length && void 0 !== t) || t;
          try {
            var i =
              "**" +
              w.Locale.text("chat", "chat_message_text_game_main") +
              "**\n_" +
              w.Locale.text("chat", "chat_message_text_game_ask") +
              "_";
            this.Xd(
              "game",
              "default",
              "picker",
              {
                id: "ask-game",
                text: i,
                choices: [
                  {
                    value: "play",
                    selected: !1,
                    label: w.Locale.text(
                      "chat",
                      "chat_message_text_game_pick_yes"
                    ),
                    handler: function () {
                      w.Chat.Game.start(), w.Chat.Intent.Vc("game", !1);
                    },
                  },
                  {
                    value: "ignore",
                    selected: !1,
                    label: w.Locale.text(
                      "chat",
                      "chat_message_text_game_pick_no"
                    ),
                    handler: function () {
                      w.Chat.Intent.Vc("game", !1);
                    },
                  },
                ],
              },
              n,
              n
            );
          } catch (t) {}
        }),
        (v.prototype.Fl = function () {
          try {
            this.Zd("game");
          } catch (t) {}
        }),
        (v.prototype.yr = function (t) {
          try {
            var n =
              (w.Chat.Selector.jf
                ? w.Chat.Selector.jf.find(".cc-1deq")
                : null) || [];
            (this.$d = t),
              0 === n.length &&
                ((n = w.Library.dom(
                  w.Template.render("chat_bubble_composing")
                )),
                w.Chat.Selector.get("flow_events").append(n),
                w.Chat.Scroll.Rd(null),
                this.tp());
          } catch (t) {}
        }),
        (v.prototype.mr = function () {
          try {
            var t = w.Chat.Selector.jf
              ? w.Chat.Selector.jf.find(".cc-1deq")
              : null;
            (this.$d = null), t && 0 < t.length && t.remove();
          } catch (t) {}
        }),
        (v.prototype.vr = function (t, n) {
          try {
            if (!0 !== w.Base.nc.chat.operator_privacy) {
              var i = null;
              if (0 < t.length)
                for (
                  var s = w.Chat.Selector.get("flow_messages").find(".cc-b3wa"),
                    e = s.length - 1;
                  0 <= e;
                  e--
                ) {
                  var c = s[e].getAttribute("data-fingerprint");
                  if (
                    c &&
                    (isNaN(c) || (c = parseInt(c, 10)), -1 !== t.indexOf(c))
                  ) {
                    i = c;
                    break;
                  }
                }
              else {
                var a = w.Chat.Selector.get("flow_messages").find(
                  '.cc-b3wa[data-from="visitor"]'
                );
                0 < a.length && (i = a.last().attr("data-fingerprint") || null);
              }
              null !== i &&
                (w.Chat.Selector.get("flow_messages")
                  .find(".cc-k5zk")
                  .safe_css_text("display", "none"),
                w.Chat.Selector.get("flow_messages")
                  .find([".cc-b3wa", '[data-fingerprint="' + i + '"]'].join(""))
                  .find(".cc-k5zk")
                  .safe_css_text("display", "inline-block"));
            }
          } catch (t) {}
        }),
        (v.prototype.kc = function () {
          var t = !1;
          try {
            for (
              var n = [],
                i = w.Library.crisp.client.Message.get_cached_messages(),
                s = i.length - 1;
              0 <= s && "local" === (i[s].user || {}).source;
              s--
            )
              n.push(i[s]);
            for (var e = 0; e < n.length; e++) {
              var c = n[e];
              -1 === this.np.indexOf(c.fingerprint) &&
                (this.np.push(c.fingerprint),
                w.Library.crisp.client.Message.receive_message_mirror(
                  c.type,
                  this.ip,
                  c.content,
                  c.fingerprint
                ),
                (t = !0));
            }
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (v.prototype.Ec = function (t, n, i, s) {
          var e = 2 < arguments.length && void 0 !== i ? i : null,
            c = 3 < arguments.length && void 0 !== s && s;
          try {
            var a = w.Base.nc.website.active_operators || [],
              o = { source: "local" };
            a[0] && !0 !== c
              ? ((o.user_id = a[0].user_id),
                (o.nickname = a[0].nickname),
                a[0].avatar && (o.avatar = a[0].avatar))
              : ((o.type = "website"),
                (o.user_id = w.Base.Kr),
                (o.nickname = w.Base.nc.website.name)),
              w.Library.crisp.client.Message.receive_message_local(t, n, o, e);
          } catch (t) {}
        }),
        (v.prototype.ff = function (t) {
          try {
            var n,
              i = t.parents(".cc-w6n9");
            (1 === i.find(".cc-b3wa").length
              ? 1 === (n = t.parents(".cc-7bf0")).find(".cc-w6n9").length
                ? n
                : i
              : t
            ).remove();
          } catch (t) {}
        }),
        (v.prototype.nl = function () {
          try {
            w.Chat.Message.Kd(), this.hr();
          } catch (t) {}
        }),
        (v.prototype.hr = function () {
          try {
            w.Library.crisp.client.Message.get_message_compose(),
              w.Library.crisp.client.Message.get_unread_messages(),
              w.Library.crisp.client.Message.get_message_history(),
              0 === w.Library.crisp.client.Message.count_message_history() &&
                this.Gd();
          } catch (t) {}
        }),
        (v.prototype.zd = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : null,
            i = { previous: null, next: null };
          try {
            if (null !== n && !isNaN(n))
              for (
                var s = parseInt(n, 10),
                  e = w.Library.crisp.client.Message.get_cached_messages(),
                  c = 0;
                c < e.length;
                c++
              )
                if (e[c].fingerprint === s) {
                  if (0 < c)
                    for (var a = c - 1; 0 <= a; a--) {
                      var o = e[a];
                      if (!0 === this.sp(o)) {
                        i.previous = o.fingerprint;
                        break;
                      }
                    }
                  if (c < e.length - 1)
                    for (var r = c + 1; r < e.length; r++) {
                      var h = e[r];
                      if (!0 === this.sp(h)) {
                        i.next = h.fingerprint;
                        break;
                      }
                    }
                  break;
                }
          } catch (t) {
          } finally {
            return i;
          }
        }),
        (v.prototype.lf = function () {
          var t = !0;
          try {
            !0 !== w.Broker.tr &&
              ((t = !1), w.Library.crisp.client.socket.connect());
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (v.prototype.fl = function () {
          try {
            !0 === w.Base.nc.chat.force_identify &&
              (w.Chat.Selector.get("form_container").attr(
                "data-is-locked",
                "true"
              ),
              w.Chat.Selector.get("form_textarea_message").attr(
                "disabled",
                !0
              ));
          } catch (t) {}
        }),
        (v.prototype.dl = function () {
          try {
            var t = w.Chat.Selector.get("form_container");
            "true" !== t.attr("data-retain-lock") &&
              (t.removeAttr("data-is-locked"),
              w.Chat.Selector.get("form_textarea_message").removeAttr(
                "disabled"
              ));
          } catch (t) {}
        }),
        (v.prototype.tp = function () {
          var t = this;
          try {
            this.$d &&
              (w.Date.timestamp() - this.$d >= this.ep
                ? this.mr()
                : w.Utility.set_timeout(function () {
                    t.tp();
                  }, this.cp));
          } catch (t) {}
        }),
        (v.prototype.ap = function (t, n, i, s, e, c, a) {
          var o = this,
            r = null,
            h = !1;
          try {
            var u = "from" === n ? "operator" : "visitor",
              l = "operator" == u ? i.avatar || i.user_id : "session",
              f = "",
              d = "";
            0 < e &&
              ((f = w.Date.timestamp_to_iso(e)), (d = w.Date.format_date(f))),
              (r = w.Library.dom(
                w.Template.render("chat_message_" + t, {
                  from: u,
                  user: i,
                  content: s,
                  date_iso: f,
                  date_formatted: d,
                  fingerprint: c,
                  metas: a,
                  configuration: w.Base.nc,
                  format_context: {
                    methods: {
                      filter_link_safe: w.Utility.filter_link_safe.Et(
                        w.Utility
                      ),
                    },
                  },
                  environment: {
                    types: { file_preview: this.op },
                    url: { crisp_image: w.Base.Pe },
                  },
                  methods: {
                    image_url_resize: function (t) {
                      return w.Utility.filter_image_url_resize(t, o.rp, o.hp);
                    },
                  },
                })
              ));
            var p = w.Chat.Selector.get("flow_messages").find(
              [".cc-b3wa", '[data-fingerprint="' + c + '"]'].join("")
            );
            if (0 === p.length) {
              var v = w.Date.timestamp_to_properties(e);
              (!(
                0 <
                (f = w.Chat.Selector.get("flow_messages")
                  .children()
                  .last()).filter(".cc-7bf0").length
              ) ||
                ("none" !== v.day && f.attr("data-day") !== v.day) ||
                ("none" !== v.month && f.attr("data-month") !== v.month) ||
                ("none" !== v.year && f.attr("data-year") !== v.year)) &&
                ((f = w.Library.dom(
                  w.Template.render("chat_bubble_thread", v)
                )),
                w.Chat.Selector.get("flow_messages").append(f)),
                ((f =
                  0 <
                    (v = (d = f.find(".cc-12zj")).children().last()).filter(
                      ".cc-w6n9"
                    ).length && !0) &&
                  (!f ||
                    (v.attr("data-from") === u &&
                      v.attr("data-user-marker") === l))) ||
                  ((v = w.Library.dom(
                    w.Template.render("chat_bubble_group", {
                      from: u,
                      user_marker: l,
                    })
                  )),
                  d.append(v)),
                v.append(r),
                v.append(w.Template.render("clear")),
                (w.Chat.Selector.Bd = r.height());
            } else {
              for (var y = 0; y < this.up.length; y++) {
                var m = this.up[y],
                  _ = p.find(m);
                (m = r.find(m))[0] &&
                  _[0] &&
                  _[0].parentNode.replaceChild(m[0], _[0]);
              }
              p.attr("data-type", t), (r = p), (h = !0);
            }
            this.lp(u, i, e);
          } catch (t) {
          } finally {
            return [r, h];
          }
        }),
        (v.prototype.lp = function (t, n, i) {
          try {
            var s =
              "local" !== n.source && -1 === this.Od.indexOf(n.source) && !0;
            "operator" === t &&
              (this.$d && 0 < i && i > this.$d && this.mr(),
              0 < i &&
                1 == s &&
                (w.Chat.Alert.Vc("wait_reply", "lock"),
                w.Chat.Intent.Vc("game", !1))),
              0 < i &&
                ((this.rh = !0),
                (this.du = i),
                1 == s && ("operator" === t ? (this.Dc = !0) : (this.Ic = !0)),
                this.fp()),
              !1 === this.dp &&
                "local" === n.source &&
                ((this.dp = !0),
                w.Base.yc.attr("data-has-local-messages", "true"));
          } catch (t) {}
        }),
        (v.prototype.fp = function () {
          try {
            var t = !0 === this.rh && !0 !== w.Base.hu();
            this.pp !== t &&
              ((this.pp = t),
              w.Base.yc.attr(
                "data-is-activity-ongoing",
                !0 === this.pp ? "true" : "false"
              ),
              "input" !==
                (t = (
                  (document.activeElement || {}).tagName || ""
                ).toLowerCase()) &&
                "textarea" !== t &&
                w.Chat.Interface.mc());
          } catch (t) {}
        }),
        (v.prototype.Nd = function (t) {
          try {
            w.Feature.has_css_animations() &&
              (t.addClass("cc-18lb"),
              w.Utility.set_timeout(function () {
                t.removeClass("cc-18lb");
              }, this.vp));
          } catch (t) {}
        }),
        (v.prototype.ql = function (t, n) {
          var i = null,
            s = !1;
          try {
            var e = !1,
              c = {},
              a = null;
            switch (n.type) {
              case "text":
                n.content &&
                  ((e = !0),
                  (c = { preview: n.preview }),
                  (a = function () {
                    w.Chat.Event.if(i);
                  }));
                break;
              case "file":
                n.content &&
                  n.content.url &&
                  ((e = !0),
                  (a = function () {
                    w.Chat.Event.cf(i);
                  }));
                break;
              case "animation":
                n.content && n.content.url && (e = !0);
                break;
              case "audio":
                n.content &&
                  n.content.url &&
                  n.content.duration &&
                  ((e = !0),
                  (c = { duration: w.Date.format_time(n.content.duration) }),
                  (a = function () {
                    w.Chat.Event.af(i, n);
                  }));
                break;
              case "picker":
                n.content &&
                  n.content.id &&
                  n.content.text &&
                  0 < (n.content.choices || []).length &&
                  ((e = !0),
                  (c = { has_selected: this.yp(n.content) }),
                  (a = function () {
                    w.Chat.Event.rf(i, t, n);
                  }));
                break;
              case "field":
                n.content &&
                  n.content.id &&
                  n.content.text &&
                  n.content.explain &&
                  ((e = !0),
                  (a = function () {
                    w.Chat.Event.hf(i, n), w.Chat.Field.el(!0);
                  }));
                break;
              default:
                throw new Error(
                  "Got an unsupported message (with type: " + n.type + ")"
                );
            }
            if (!0 !== e)
              throw new Error(
                "Got an invalid " + type + " message, dropping it"
              );
            "to" === t &&
              "participant" === (n.user || {}).type &&
              (c.participant = !0),
              !0 === n.edited && (c.edited = !0),
              !0 === n.translated && (c.translated = !0),
              (c = this.ap(
                n.type,
                t,
                n.user || {},
                n.content,
                n.timestamp,
                n.fingerprint,
                c
              )),
              (c = f(c, 2)),
              (i = c[0]),
              (s = c[1]),
              w.Chat.Event.tf(i),
              "welcome" === (n.user || {}).source &&
                "helpdesk" === ((n.preview || [])[0] || {}).variant &&
                w.Chat.Event.nf(i),
              "function" == typeof a && a();
          } catch (t) {
          } finally {
            return [i, s];
          }
        }),
        (v.prototype.Gd = function () {
          try {
            0 < this.Vd.length && (this.vr(this.Vd, !0), (this.Vd = [])),
              w.Chat.State.mp("intent"),
              w.Chat.State.mp("scroll"),
              this.Wd(!0);
          } catch (t) {}
        }),
        (v.prototype.Ud = function () {
          try {
            w.Library.crisp.client.Message.set_unread_messages_callback(
              function (t, n, i) {
                w.Utility.set_timeout(function () {
                  w.Chat.Notification._p(t, n, i);
                }, 0);
              }
            );
          } catch (t) {}
        }),
        (v.prototype.Ld = function (i) {
          var s = this;
          try {
            this.Hd.push(i),
              w.Utility.set_timeout(function () {
                try {
                  var t,
                    n = s.Hd.indexOf(i);
                  -1 === n ||
                    ((t = w.Chat.Selector.get("flow_messages").find(
                      [".cc-b3wa", '[data-fingerprint="' + i + '"]'].join("")
                    ))
                      .find(".cc-1did")
                      .safe_css_text("display", "none"),
                    t.find(".cc-pus6").safe_css_text("display", "block")),
                    s.Hd.splice(n, 1);
                } catch (t) {}
              }, this.gp);
          } catch (t) {}
        }),
        (v.prototype.Wd = function (t) {
          var n = this,
            i = 0 < arguments.length && void 0 !== t && t;
          try {
            w.Chat.Intent.cl.game ||
              !1 === w.Chat.Intent.cl.game ||
              !0 !== this.Ic ||
              !0 === this.Dc ||
              (null === this.wp &&
                (this.wp = w.Utility.set_timeout(
                  function () {
                    try {
                      !(n.wp = null) !== n.Dc &&
                        !0 === w.Base.nc.chat.wait_game &&
                        w.Chat.Intent.Vc("game");
                    } catch (t) {}
                  },
                  !0 === i ? this.bp : this.kp
                )));
          } catch (t) {}
        }),
        (v.prototype.yp = function (t) {
          var n = !1;
          try {
            for (var i = 0; i < t.choices.length; i++)
              if (!0 === t.choices[i].selected) {
                n = !0;
                break;
              }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (v.prototype.Xd = function (t, n, i, s, e, c, a) {
          var o = 4 < arguments.length && void 0 !== e && e,
            r = !(5 < arguments.length && void 0 !== c) || c,
            h = 6 < arguments.length && void 0 !== a ? a : [];
          try {
            if (-1 === this.Od.indexOf(t))
              throw new Error("Source " + t + " not allowed");
            this.xp[t] !== n &&
              ((this.xp[t] = n),
              this.received(
                {
                  type: i,
                  timestamp: 0,
                  content: s,
                  fingerprint: "$" + t,
                  preview: h,
                  user: {
                    source: t,
                    type: "website",
                    user_id: w.Base.Kr,
                    nickname: w.Base.nc.website.name,
                  },
                },
                !1,
                o,
                r,
                !0
              ));
          } catch (t) {}
        }),
        (v.prototype.Zd = function (t) {
          var n;
          try {
            if (-1 === this.Od.indexOf(t))
              throw new Error("Source " + t + " not allowed");
            this.xp[t] &&
              (delete this.xp[t],
              (n = w.Chat.Selector.get("flow_messages").find(
                [".cc-b3wa", '[data-fingerprint="$' + t + '"]'].join("")
              )) &&
                1 === n.length &&
                this.ff(n));
          } catch (t) {}
        }),
        (v.prototype.sp = function (t) {
          var n = !1;
          try {
            n =
              "file" === t.type &&
              -1 !== this.op.indexOf((t.content || {}).type) &&
              !0;
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (v.prototype.Z = function () {
          try {
            (this.rh = !1),
              (this.Dc = !1),
              (this.Ic = !1),
              (this.du = 0),
              (this.dp = !1),
              (this.pp = !1),
              (this.Hd = []),
              (this.Vd = []),
              (this.np = []),
              (this.Pd = null),
              (this.wp = null),
              (this.$d = null),
              (this.xp = {});
          } catch (t) {}
        }),
        new v())),
      (w.Chat.Misc =
        ((p.prototype.init = function () {}),
        (p.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (p.prototype.Md = function (t) {
          try {
            w.Utility.is_equal(t, this.Fp) ||
              w.Chat.State.propagate("operator", t);
          } catch (t) {}
        }),
        (p.prototype.Z = function () {
          try {
            this.Fp = {};
          } catch (t) {}
        }),
        new p())),
      (w.Chat.Notification =
        ((d.prototype.init = function () {}),
        (d.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (d.prototype._p = function (t, n, i) {
          var s = 0 < arguments.length && void 0 !== t ? t : 0,
            e = this,
            c = 1 < arguments.length && void 0 !== n ? n : [],
            a = 2 < arguments.length && void 0 !== i ? i : [];
          try {
            var o,
              r,
              h = "cc-z74s";
            0 < (this.Bc = s)
              ? (w.Chat.Selector.get("pane_unread").text(s),
                (o =
                  "none" ===
                    w.Chat.Selector.get("tooltips_new_messages").css(
                      "display"
                    ) && !0),
                (r = this.Ep(s, c, a, o)),
                null === this.Cp && (this.Cp = document.title),
                this.Cp &&
                  !0 !== w.Base.ch() &&
                  (document.title = "💬" + s + " - " + this.Cp),
                1 == o &&
                  (w.Feature.has_css_animations()
                    ? (null !== this.jp && w.Utility.clear_timeout(this.jp),
                      (this.jp = w.Utility.set_timeout(function () {
                        (e.jp = null),
                          w.Chat.Selector.get(
                            "tooltips_new_messages"
                          ).safe_css_text("display", "block"),
                          w.Chat.Selector.get("tooltips_new_messages").addClass(
                            h
                          ),
                          0 < r.length &&
                            (w.Chat.Selector.nd.attr(
                              "data-visible-subtle",
                              "true"
                            ),
                            !0 === w.Action.is_chat_closed() &&
                              w.Chat.Selector.nd.addClass(
                                w.Chat.Interface.td.shade.maximize
                              )),
                          w.Utility.set_timeout(function () {
                            w.Chat.Selector.nd.removeClass(
                              w.Chat.Interface.td.shade.maximize
                            ),
                              w.Chat.Selector.get(
                                "tooltips_new_messages"
                              ).removeClass(h);
                          }, e.qp);
                      }, this.zp * this.ua)))
                    : (w.Chat.Selector.get(
                        "tooltips_new_messages"
                      ).safe_css_text("display", "block"),
                      0 < r.length &&
                        w.Chat.Selector.nd.attr("data-visible-subtle", "true")),
                  w.Chat.Selector.get("pane_unread").safe_css_text(
                    "display",
                    "block"
                  )))
              : (null !== this.jp && w.Utility.clear_timeout(this.jp),
                w.Chat.Selector.get("tooltips_new_messages").removeClass(h),
                w.Chat.Selector.get("tooltips_new_messages").safe_css_text(
                  "display",
                  "none"
                ),
                w.Chat.Selector.get("pane_unread").safe_css_text(
                  "display",
                  "none"
                ),
                w.Chat.Selector.nd.attr("data-visible-subtle", "false"),
                w.Chat.Selector.get("tooltips_extended_actions").safe_css_text(
                  "display",
                  "none"
                ),
                w.Chat.Selector.get("tooltips_extended_preview").empty(),
                this.Cp && (document.title = this.Cp));
          } catch (t) {}
        }),
        (d.prototype.Af = function () {
          try {
            var t = w.Chat.Selector.get("flow")[0].scrollTop,
              n = w.Chat.Selector.get("flow")[0].scrollHeight;
            w.Chat.Selector.get("flow")[0].clientHeight + t >=
              n - w.Chat.Interface.Bd &&
              w.Chat.Alert.Vc("new_messages", "hide");
          } catch (t) {}
        }),
        (d.prototype.Ep = function (t, n, i, s) {
          var e = [];
          try {
            var c = null,
              a = !1,
              o = [];
            w.Chat.Selector.get("tooltips_extended_actions").safe_css_text(
              "display",
              "none"
            ),
              w.Chat.Selector.get("tooltips_extended_preview").empty();
            for (
              var r = i.length - 1;
              0 <= r &&
              !(
                -1 !== n.indexOf(i[r].fingerprint) &&
                (e.unshift(i[r]), e.length >= this.Sp)
              );
              r--
            );
            for (var h = 0; h < e.length; h++) {
              var u = w.Library.dom(
                w.Template.render("chat_preview_message", {
                  type: e[h].type,
                  from: e[h].from,
                  content: e[h].content,
                  user: e[h].user || {},
                  format_context: {
                    methods: {
                      filter_link_safe: w.Utility.filter_link_safe.Et(
                        w.Utility
                      ),
                    },
                  },
                  environment: { url: { crisp_image: w.Base.Pe } },
                })
              );
              0 < u.length &&
                ((a = !0),
                u.appendTo(w.Chat.Selector.get("tooltips_extended_preview")),
                h === e.length - 1 && null === c && (c = e[h].fingerprint),
                (null === c && null !== this.Ap) || o.push(u));
            }
            if (
              (!0 === a &&
                w.Chat.Selector.get("tooltips_extended_actions").safe_css_text(
                  "display",
                  "inline-block"
                ),
              null !== c && (this.Ap = c),
              w.Feature.has_css_animations() && 0 < o.length)
            ) {
              for (var l = 0; l < o.length; l++) o[l].addClass("cc-1peb");
              w.Utility.set_timeout(function () {
                for (var t = 0; t < o.length; t++) o[t].removeClass("cc-1peb");
              }, (!0 === s ? this.zp * this.ua : 0) + this.Ip);
            }
          } catch (t) {
          } finally {
            return e;
          }
        }),
        (d.prototype.Z = function () {
          try {
            (this.Bc = 0),
              (this.ua = 1e3),
              (this.zp = 0.1),
              (this.jp = null),
              (this.Ap = null),
              (this.Cp = null),
              (this.qp = 500),
              (this.Ip = 1e3);
          } catch (t) {}
        }),
        new d())),
      (w.Chat.Scroll =
        ((l.prototype.init = function () {}),
        (l.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (l.prototype.If = function (t) {
          var n,
            i = 0 < arguments.length && void 0 !== t ? t : null;
          try {
            null === i &&
              (i =
                (n = w.Chat.Selector.get("flow")[0]).scrollHeight -
                n.clientHeight),
              w.Chat.State.propagate("scroll", i),
              w.Chat.Notification.Af();
          } catch (t) {}
        }),
        (l.prototype.Rd = function (t) {
          var n,
            i,
            s,
            e = 0 < arguments.length && void 0 !== t ? t : "to",
            c = !1;
          try {
            !0 === w.Chat.Interface.Gf() &&
              ((n = w.Chat.Selector.get("flow")[0].scrollTop),
              (i = w.Chat.Selector.get("flow")[0].scrollHeight),
              (s = w.Chat.Selector.get("flow")[0].clientHeight),
              (!n || s + n >= i - this.kd) && ((c = !0), this.If()),
              !1 === c &&
                "from" === e &&
                !1 === w.Chat.Alert.al("warn_reply") &&
                !1 === w.Chat.Alert.al("email_invalid") &&
                !1 === w.Chat.Alert.al("wait_reply") &&
                w.Chat.Alert.Vc("new_messages", "show"));
          } catch (t) {
          } finally {
            return c;
          }
        }),
        (l.prototype.Z = function () {
          try {
            (this.kd = 0), (this.qf = 0);
          } catch (t) {}
        }),
        new l())),
      (w.Chat.Selector =
        ((u.prototype.init = function () {}),
        (u.prototype.reset = function () {
          try {
            this.Z(), this.Zh();
          } catch (t) {}
        }),
        (u.prototype.get = function (t) {
          var n = null;
          try {
            if (void 0 !== this.Dp[t]) n = this.Dp[t];
            else {
              if (void 0 === this.Tp[t])
                throw new Error("Selector with namespace " + t + " not found");
              if (this.Gu) {
                if (0 === (n = this.Gu.find("." + this.Tp[t])).length)
                  throw new Error(
                    "Could not select the element with namespace: " + t
                  );
                this.Dp[t] = n;
              }
            }
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (u.prototype.Vu = function () {
          try {
            this.Bp(), this.Qu();
          } catch (t) {}
        }),
        (u.prototype.Bp = function () {
          try {
            this.Up = w.Library.dom('head meta[name="viewport"]');
          } catch (t) {}
        }),
        (u.prototype.Qu = function () {
          try {
            (this.nd = this.Gu.find(".cc-yqwh")),
              (this.jf = this.Gu.find(".cc-ge4v")),
              (this.Ou = this.Gu.find(".cc-unoo"));
          } catch (t) {}
        }),
        (u.prototype.Zh = function () {
          try {
            (this.Up = null),
              (this.Gu = null),
              (this.nd = null),
              (this.jf = null),
              (this.Ou = null);
          } catch (t) {}
        }),
        (u.prototype.Z = function () {
          try {
            this.Dp = {};
          } catch (t) {}
        }),
        new u())),
      (w.Chat.State =
        ((h.prototype.init = function () {}),
        (h.prototype.reset = function (t) {
          var n = this;
          try {
            this.Z(),
              t.push(function () {
                n.Rp();
              });
          } catch (t) {}
        }),
        (h.prototype.receive = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            var s = void 0,
              e = void 0,
              c = [];
            for (s in t)
              t.hasOwnProperty(s) &&
                (w.Utility.is_equal(t[s], this.Np[s]) ||
                  (c.push(s),
                  (this.Np[s] = t[s]),
                  !1 === i && void 0 !== this.Op[s] && delete this.Op[s]));
            for (e = 0; e < c.length; e++)
              (s = c[e]), this.Mp[s].Et(this)(this.Np[s]);
          } catch (t) {}
        }),
        (h.prototype.propagate = function (t, n, i, s, e) {
          var c,
            a = 2 < arguments.length && void 0 !== i && i,
            o = this,
            r = 3 < arguments.length && void 0 !== s ? s : function () {},
            h = 4 < arguments.length && void 0 !== e ? e : function () {};
          try {
            !0 !== a && w.Utility.is_equal(this.Np[t], n)
              ? "function" == typeof r && r(!1)
              : ((this.Op[t] = n),
                null !== this.$p &&
                  (w.Utility.clear_timeout(this.$p), (this.$p = null)),
                ((c = w.Utility.clone(this.Np))[t] = n),
                this.receive(c, !0),
                (this.$p = w.Utility.set_timeout(function () {
                  var t;
                  w.Utility.is_empty(o.Op)
                    ? "function" == typeof r && r(!1)
                    : ((t = w.Utility.clone(o.Op)),
                      (o.Op = {}),
                      (o.$p = null),
                      w.Library.crisp.client.Session.set_state(t, function (t) {
                        t
                          ? "function" == typeof h && h()
                          : "function" == typeof r && r(!0);
                      }));
                }, this.Lp)));
          } catch (t) {}
        }),
        (h.prototype.nl = function (t) {
          try {
            for (var n in (!0 === w.Base.Ac() && (t.maximized = !1), this.Pp))
              void 0 === t[n] && (t[n] = this.Pp[n]);
            (this.Jp = !0), (this.Np = t), (this.Hp = w.Utility.keys(this.Np));
          } catch (t) {}
        }),
        (h.prototype.mp = function (t) {
          try {
            this.Wp(t, this.Pp[t]);
          } catch (t) {}
        }),
        (h.prototype.fd = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : [];
          try {
            var i = void 0;
            for (i in this.Pp)
              this.Pp.hasOwnProperty(i) &&
                this.Wp(i, this.Pp[i], -1 !== n.indexOf(i));
          } catch (t) {}
        }),
        (h.prototype.Wp = function (t, n, i) {
          var s = 2 < arguments.length && void 0 !== i && i;
          try {
            if ("function" != typeof this.Mp[t])
              throw new Error("No such state handler: " + t);
            void 0 === this.Np[t] && (this.Np[t] = n),
              this.Mp[t].Et(this)(this.Np[t], s);
          } catch (t) {}
        }),
        (h.prototype.Gp = function (t) {
          var n = !1;
          try {
            var i = this.Hp.indexOf(t);
            -1 !== i && (this.Hp.splice(i, 1), (n = !0));
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (h.prototype.Vp = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            if (!1 === i && (this.Gp("trigger"), t && 0 < t.length))
              for (var s = 0; s < t.length; s++) w.Trigger.Wr(t[s]);
          } catch (t) {}
        }),
        (h.prototype.Kp = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            if (!1 === i) {
              this.Gp("alert");
              var s,
                e,
                c,
                a = void 0,
                o = void 0,
                r = void 0,
                h = void 0,
                u = [
                  ["show", "unlock"],
                  ["unlock", "show"],
                  ["hide", "lock"],
                  ["lock", "hide"],
                  ["lock", "show"],
                ];
              for (o in t)
                if (t.hasOwnProperty(o)) {
                  if (
                    ((s = t[o]),
                    (e = w.Chat.Alert.cl[o]),
                    (r = w.Chat.Selector.get("alerts").find(
                      [".cc-sel9", '[data-type="' + o + '"]'].join("")
                    )),
                    (a = !1),
                    e === s)
                  )
                    a = !0;
                  else if ("unlock" !== s && "lock" === e) a = !0;
                  else
                    for (h = 0; h < u.length; h++)
                      e === (c = u[h])[0] && s === c[1] && (a = !0);
                  if (0 < r.length && !1 === a) {
                    if ("show" === s || "unlock" === s)
                      w.Chat.Selector.get("alerts_one").safe_css_text(
                        "display",
                        "none"
                      ),
                        r.safe_css_text("display", "inline-block"),
                        w.Chat.Selector.get("content").attr(
                          "data-has-alert-" + o,
                          "true"
                        ),
                        w.Chat.Alert.ol("show", o);
                    else {
                      if ("hide" !== s && "lock" !== s)
                        throw new Error("Unknown action: " + s);
                      r.safe_css_text("display", "none"),
                        w.Chat.Selector.get("content").removeAttr(
                          "data-has-alert-" + o
                        ),
                        w.Chat.Alert.ol("hide", o);
                    }
                    (w.Chat.Alert.cl[o] = s), w.Chat.Field.el();
                  } else w.Chat.Alert.cl[o] = s;
                }
            }
          } catch (t) {}
        }),
        (h.prototype.Xp = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            if (((w.Chat.Intent.cl = t), !1 === i)) {
              var s = this.Gp("intent"),
                e = void 0;
              for (e in t) w.Chat.Intent.yl(e, t[e], !s);
              w.Chat.Intent.vl(t);
            }
          } catch (t) {}
        }),
        (h.prototype.Yp = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            if (!1 === i) {
              this.Gp("operator");
              var s = void 0,
                e = void 0,
                c = void 0,
                a = void 0,
                o = void 0,
                r = void 0;
              if (
                ((w.Chat.Misc.Fp = t || {}),
                w.Utility.is_empty(w.Chat.Misc.Fp)
                  ? ((s = "initial"), (c = "website"), (a = w.Base.Kr))
                  : ((s = "ongoing"),
                    (c = t.type || "operator"),
                    (a = t.user_id),
                    (o = t.avatar),
                    (e =
                      "website" === t.type
                        ? t.nickname
                        : w.Library.crisp.web.Name.parse_first_name(
                            t.nickname
                          ))),
                (o || a) && (r = w.Avatar.url(this.Zp, c, a, o)),
                r)
              ) {
                if ("ongoing" === s) {
                  for (
                    var h =
                        w.Chat.Selector.get("header_avatar")
                          .first()
                          .siblings() || [],
                      o = w.Chat.Selector.get("header_avatar").find(".cc-1wwd"),
                      u = 0;
                    u < h.length;
                    u++
                  )
                    w.Library.dom(h[u]).remove();
                  o &&
                    (o.attr("data-has-name", e ? "true" : "false"),
                    o.find(".cc-1ybw").text(e || "")),
                    w.Chat.Selector.get("header_operator").text(e || ""),
                    w.Chat.Selector.get("header_avatar_resource").safe_css_text(
                      "background-image",
                      "url('" + r + "')"
                    ),
                    w.Chat.Selector.get("header").attr(
                      "data-with-website-name",
                      e === w.Base.nc.website.name ? "false" : "true"
                    ),
                    !0 === w.Base.nc.chat.ongoing_operator_face &&
                      (w.Chat.Selector.get(
                        "pane_avatar_resource"
                      ).safe_css_text("background-image", "url('" + r + "')"),
                      w.Chat.Selector.get("pane_icon").attr(
                        "data-is-ongoing",
                        "true"
                      ));
                }
                w.Chat.Selector.jf &&
                  w.Chat.Selector.jf.attr("data-chat-status", s);
              }
            }
          } catch (t) {}
        }),
        (h.prototype.Qp = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            !1 === i &&
              !1 === this.Gp("scroll") &&
              ((w.Chat.Scroll.qf = t),
              (w.Chat.Selector.get("flow")[0].scrollTop = w.Chat.Scroll.qf));
          } catch (t) {}
        }),
        (h.prototype.tv = function (t, n) {
          var i,
            s = 1 < arguments.length && void 0 !== n && n;
          try {
            !1 === s &&
              ((i = !0 !== this.Gp("maximized") && !0),
              !0 === w.Base.Hh.lock_maximized && (t = !0),
              !1 === t
                ? (w.Chat.Interface.Zf("pane", i),
                  w.Chat.Field.Vf(),
                  w.Chat.Viewport.Fd(),
                  w.Chat.Picker.jl(),
                  w.Action.Oc("chat:closed"))
                : (w.Chat.Interface.Zf("chat", i),
                  w.Chat.Field.el(),
                  w.Chat.Viewport.xd(),
                  w.Chat.Notification.Af(),
                  w.Action.Oc("chat:opened")));
          } catch (t) {}
        }),
        (h.prototype.nv = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            !1 === i && (this.Gp("textarea"), w.Action.set_message_text(t));
          } catch (t) {}
        }),
        (h.prototype.Rp = function () {
          try {
            this.Pp = {
              trigger: w.Trigger.Gr,
              alert: w.Chat.Alert.cl,
              intent: w.Chat.Intent.cl,
              operator: w.Chat.Misc.Fp,
              scroll: w.Chat.Scroll.qf,
              maximized: w.Chat.Interface.Sc,
              textarea: w.Chat.Field.Kf,
            };
          } catch (t) {}
        }),
        (h.prototype.Z = function () {
          try {
            (this.Jp = !1),
              (this.Np = {}),
              (this.Op = {}),
              (this.Hp = []),
              (this.$p = null);
          } catch (t) {}
        }),
        new h())),
      (w.Chat.Viewport =
        ((a.prototype.init = function () {}),
        (a.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (a.prototype.xd = function () {
          var t;
          try {
            !0 === w.Base.Ac()
              ? (!1 === this.iv &&
                  (null === this.sv && (this.sv = this.G()),
                  ((t = w.Utility.clone(this.sv)).width = "device-width"),
                  (t["initial-scale"] = "1"),
                  (t["maximum-scale"] = "1"),
                  (t["user-scalable"] = "0"),
                  (t = this.ev(t)),
                  null !== w.Chat.Selector.Up && 0 < w.Chat.Selector.Up.length
                    ? w.Chat.Selector.Up.attr("content", t)
                    : ((w.Chat.Selector.Up = w.Library.dom(
                        w.Template.render("viewport", { content: t })
                      )),
                      w.Library.dom("head").append(w.Chat.Selector.Up))),
                (this.iv = !0))
              : (this.iv = !1);
          } catch (t) {}
        }),
        (a.prototype.Fd = function () {
          var t;
          try {
            !0 === this.iv &&
              (null !== w.Chat.Selector.Up &&
                0 < w.Chat.Selector.Up.length &&
                ((t = this.ev(this.sv))
                  ? w.Chat.Selector.Up.attr("content", t)
                  : (w.Chat.Selector.Up.remove(), (w.Chat.Selector.Up = null))),
              (this.iv = !1));
          } catch (t) {}
        }),
        (a.prototype.G = function () {
          var t = {};
          try {
            if (((t = {}), 0 < w.Chat.Selector.Up.length)) {
              var n = w.Chat.Selector.Up.attr("content");
              if ((n = (n = n.trim()).replace(this.cv, ",")))
                for (
                  var i,
                    s,
                    e = void 0,
                    c = void 0,
                    a = void 0,
                    o = -1 !== n.indexOf(",") ? n.split(",") : [n],
                    e = 0;
                  e < o.length;
                  e++
                )
                  -1 !== (c = o[e]).indexOf("=") &&
                    ((i = (a = c.split("="))[0].trim()),
                    (s = a[1].trim()),
                    i && s && (t[i] = s));
            }
          } catch (t) {
          } finally {
            return t;
          }
        }),
        (a.prototype.ev = function (t) {
          var n = "";
          try {
            var i = void 0,
              s = [];
            for (i in t) t.hasOwnProperty(i) && s.push([i, t[i]].join("="));
            n = s.join(", ");
          } catch (t) {
          } finally {
            return n;
          }
        }),
        (a.prototype.Z = function () {
          try {
            (this.iv = !1), (this.sv = null);
          } catch (t) {}
        }),
        new a())),
      (w.Browsing =
        ((c.prototype.reset = function () {
          try {
            w.Utility.reset_instance_children(w.Browsing), this.Zh();
          } catch (t) {}
        }),
        (c.prototype.Zh = function () {
          try {
            (this.av = null), (this.ov = null);
          } catch (t) {}
        }),
        new c())),
      (w.Browsing.Assist =
        ((e.prototype.reset = function () {
          try {
            this.stop(), this.Zh(), this.Z();
          } catch (t) {}
        }),
        (e.prototype.start = function () {
          try {
            null === w.Browsing.ov &&
              ((w.Browsing.ov = this.rv),
              (w.Browsing.av = w.Library.dom(
                w.Template.render("browsing_assist", {
                  configuration: w.Base.nc,
                })
              )),
              (this.hv = w.Browsing.av.find(".cc-lvhc")),
              w.Base.yc.append(w.Browsing.av));
          } catch (t) {}
        }),
        (e.prototype.stop = function () {
          try {
            w.Browsing.ov === this.rv &&
              ((w.Browsing.ov = null),
              w.Browsing.av.remove(),
              (w.Browsing.av = null),
              (this.hv = null));
          } catch (t) {}
        }),
        (e.prototype.wr = function (t) {
          try {
            w.Browsing.ov === this.rv &&
              null !== this.hv &&
              t.mouse &&
              this.hv.safe_css_text({
                display: "inline-block",
                left: t.mouse.x + "px",
                top: t.mouse.y + "px",
              });
          } catch (t) {}
        }),
        (e.prototype.br = function (t) {
          var n = this;
          try {
            if (w.Browsing.ov === this.rv && t.scroll && window.scroll) {
              null !== this.uv && w.Utility.clear_interval(this.uv);
              var i,
                s = { x: window.scrollX, y: window.scrollY },
                e = { x: 0, y: 0 };
              for (i in e)
                e.hasOwnProperty(i) && (e[i] = (t.scroll[i] - s[i]) / this.lv);
              var c = 0,
                a = this.fv / this.lv;
              0 < a &&
                (0 !== e.x || 0 !== e.y) &&
                (w.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!0),
                (this.uv = w.Utility.set_interval(function () {
                  (s.x += e.x),
                    (s.y += e.y),
                    window.scroll(s.x, s.y),
                    ++c >= n.lv &&
                      (w.Utility.clear_interval(n.uv),
                      (n.uv = null) !== n.dv && w.Utility.clear_timeout(n.dv),
                      (n.dv = w.Utility.set_timeout(function () {
                        (n.dv = null),
                          w.Library.crisp.client.Browsing.toggle_ignore_scroll_event(
                            !1
                          );
                      }, n.pv)));
                }, a)));
            }
          } catch (t) {}
        }),
        (e.prototype.kr = function (t) {
          var n,
            i,
            s = this;
          try {
            w.Browsing.ov === this.rv &&
              (null !== this.hv &&
                (this.hv.attr("data-is-clicking", "true"),
                null !== this.vv && w.Utility.clear_timeout(this.vv),
                (this.vv = w.Utility.set_timeout(function () {
                  (s.vv = null), s.hv.removeAttr("data-is-clicking");
                }, this.yv))),
              t.click &&
                ((n = t.click.x - this.mv),
                (i = t.click.y),
                n < 0 && (n = 0),
                (n = document.elementFromPoint(n, i)),
                (i = document.createEvent("MouseEvent")).initMouseEvent(
                  "click",
                  !0,
                  !0,
                  window,
                  null,
                  t.click.x,
                  t.click.y,
                  0,
                  0,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                (i.Ws = !0),
                n && n.dispatchEvent(i)));
          } catch (t) {}
        }),
        (e.prototype.Zh = function () {
          try {
            this.hv = null;
          } catch (t) {}
        }),
        (e.prototype.Z = function () {
          try {
            (this.uv = null), (this.dv = null), (this.vv = null);
          } catch (t) {}
        }),
        new e())),
      (w.Call =
        ((s.prototype.reset = function () {
          try {
            this.Z();
          } catch (t) {}
        }),
        (s.prototype.ring = function (t) {
          try {
            this._v(),
              w.Sound.initialize("call"),
              this.gv(t.user),
              (this.Vs = t.mode),
              (this.wv = w.Library.dom(
                w.Template.render("call_ring", {
                  configuration: w.Base.nc,
                  mode: this.Vs,
                  user: this.bv,
                })
              )),
              this.kv(),
              w.Base.yc.append(this.wv),
              w.Sound.start("call", "call-ring", !0);
          } catch (t) {}
        }),
        (s.prototype.screen = function () {
          try {
            this._v(),
              (this.wv = w.Library.dom(
                w.Template.render("call_screen", {
                  configuration: w.Base.nc,
                  mode: this.Vs,
                  user: this.bv,
                  features: {
                    screensharing: w.Library.crisp.client.Call.has_support_screensharing(),
                  },
                })
              )),
              this.xv(),
              this.Fv("connecting"),
              w.Base.yc.append(this.wv);
          } catch (t) {}
        }),
        (s.prototype.stop = function () {
          try {
            this._v(), w.Sound.start("call", "call-hangup");
          } catch (t) {}
        }),
        (s.prototype.success = function (t) {
          try {
            switch (t) {
              case "media_remote":
                this.Ev();
                break;
              case "media_local":
                this.Cv();
            }
          } catch (t) {}
        }),
        (s.prototype.error = function () {
          try {
            this._v(), w.Sound.start("call", "call-hangup");
          } catch (t) {}
        }),
        (s.prototype.toggle_media_status = function (t, n) {
          var i = 1 < arguments.length && void 0 !== n && n;
          try {
            var s = this.wv.find('.cc-1qzq[data-type="' + t + '"]') || [],
              e = this.wv.find('.cc-10o9[data-type="' + t + '"]') || [],
              c = !1 === i ? "inline-block" : "none";
            0 < s.length && s.attr("data-state", !0 === i ? "true" : "false"),
              0 < e.length && e.safe_css_text("display", c),
              "audio" !== t ||
                (0 < (e = this.wv.find(".cc-fi91") || []).length &&
                  e.safe_css_text("display", c));
          } catch (t) {}
        }),
        (s.prototype._v = function () {
          try {
            null !== this.wv &&
              (this.wv.remove(),
              (this.wv = null),
              (this.jv = null),
              (this.qv = !1),
              this.zv(),
              w.Sound.stop("call", "call-ring"));
          } catch (t) {}
        }),
        (s.prototype.Cv = function () {
          try {
            this.Sv("local");
          } catch (t) {}
        }),
        (s.prototype.Ev = function () {
          var t;
          try {
            !0 === this.Sv("remote") &&
              (this.Fv("ongoing"),
              0 < (t = this.wv.find(".cc-1tpr") || []).length &&
                (!0 === this.Av("remote")
                  ? t.safe_css_text("display", "none")
                  : t.safe_css_text("display", "block")),
              w.Sound.start("call", "call-established"));
          } catch (t) {}
        }),
        (s.prototype.Sv = function (t) {
          var n = this.wv.find('.cc-r1gp[data-type="' + t + '"] video') || [],
            t = w.Library.crisp.client.Call.get_stream(t);
          return 0 < n.length && null !== t && ((n[0].srcObject = t), !0);
        }),
        (s.prototype.gv = function (t) {
          var n = 0 < arguments.length && void 0 !== t ? t : {};
          try {
            this.bv = {
              user_id: n.user_id || w.Base.Kr,
              nickname: n.nickname || w.Base.nc.website.name,
              type: n.user_id ? "operator" : "website",
            };
          } catch (t) {}
        }),
        (s.prototype.Fv = function (t) {
          try {
            var n = this.wv.find(".cc-ulj3") || [],
              i =
                this.wv.find(
                  [".cc-ulj3", '[data-state="' + t + '"]'].join("")
                ) || [],
              s = this.wv.find(".cc-1qzq[data-state]") || [];
            0 < n.length &&
              0 < i.length &&
              (n.safe_css_text("display", "none"),
              i.safe_css_text("display", "inline-block")),
              0 < s.length &&
                s.safe_css_text(
                  "display",
                  "ongoing" === t ? "inline-block" : "none"
                ),
              "ongoing" === t && this.Iv();
          } catch (t) {}
        }),
        (s.prototype.Dv = function () {
          var t, n;
          try {
            "minimized" === this.jv ||
              !0 !== this.Av("remote") ||
              ((t = (this.wv.find('.cc-r1gp[data-type="remote"] video') ||
                [])[0]) &&
                ((n = null),
                "function" ==
                  typeof (n =
                    !1 === this.qv
                      ? t.requestFullscreen ||
                        t.msRequestFullscreen ||
                        t.mozRequestFullScreen ||
                        t.webkitRequestFullScreen ||
                        null
                      : t.exitFullscreen ||
                        t.msExitFullscreen ||
                        t.mozExitFullScreen ||
                        t.webkitExitFullScreen ||
                        null) && n.Et(t)()));
          } catch (t) {}
        }),
        (s.prototype.Tv = function () {
          var t;
          try {
            !0 === this.Av("remote") &&
              ((t = this.wv.find('.cc-r1gp[data-type="remote"]') || []),
              !0 === this.qv
                ? t.attr("data-aspect", "contain")
                : t.removeAttr("data-aspect"));
          } catch (t) {}
        }),
        (s.prototype.Iv = function () {
          var t,
            n = this;
          try {
            this.zv(),
              null === this.Bv &&
                ((t = this.wv.find(".cc-x7ly") || []),
                (this.Uv = 0),
                (this.Bv = w.Utility.set_interval(function () {
                  n.Uv++, 0 < t.length && t.text(w.Date.format_time(n.Uv, !0));
                }, this.ua)));
          } catch (t) {}
        }),
        (s.prototype.zv = function () {
          try {
            null !== this.Bv &&
              (w.Utility.clear_interval(this.Bv), (this.Bv = null));
          } catch (t) {}
        }),
        (s.prototype.kv = function () {
          try {
            var t = this.wv.find(".cc-ekfv") || [];
            if (0 < t.length) {
              t.on("click", function (t) {
                try {
                  var n = t.target ? w.Library.dom(t.target) : [];
                  0 < n.length &&
                    0 < (n = n.parents(".cc-ui2y") || []).length &&
                    ("accept" === n.attr("data-action")
                      ? (w.Library.crisp.client.Call.accept(), w.Call.screen())
                      : w.Library.crisp.client.Call.decline());
                } catch (t) {
                } finally {
                  return !1;
                }
              });
              for (var n = 0; n < t.length; n++)
                t[n].onclick = function () {
                  return !1;
                };
            }
          } catch (t) {}
        }),
        (s.prototype.xv = function () {
          var a = this;
          try {
            var o,
              r,
              h,
              u,
              n,
              e,
              i,
              s,
              t = this.wv.find(".cc-1qzq") || [],
              c = this.wv.find('.cc-r1gp[data-type="remote"] video') || [],
              l = this.wv.find(".cc-1j41") || [];
            if (0 < t.length) {
              t.on("click", function (t) {
                try {
                  var n = t.target ? w.Library.dom(t.target) : [];
                  if (0 < n.length)
                    switch (n.attr("data-type")) {
                      case "video":
                        w.Library.crisp.client.Call.toggle_video();
                        break;
                      case "audio":
                        w.Library.crisp.client.Call.toggle_audio();
                        break;
                      case "screensharing":
                        w.Library.crisp.client.Call.toggle_screensharing();
                        break;
                      case "hangup":
                        w.Library.crisp.client.Call.stop();
                        break;
                      case "toggle":
                        (a.jv =
                          "minimized" === a.jv ? "maximized" : "minimized"),
                          l.attr("data-mode", a.jv),
                          l.safe_css_text(null);
                    }
                } catch (t) {
                } finally {
                  return !1;
                }
              });
              for (var f = 0; f < t.length; f++)
                t[f].onclick = function () {
                  return !1;
                };
            }
            0 < c.length &&
              (c.on("dblclick", function () {
                try {
                  a.Dv();
                } catch (t) {
                } finally {
                  return !1;
                }
              }),
              c.on("fullscreenchange", function () {
                try {
                  (a.qv = !!document.fullscreenElement), a.Tv();
                } catch (t) {
                } finally {
                  return !1;
                }
              })),
              0 < l.length &&
                ((u = h = r = o = void 0),
                (n = function (t, n, i, s) {
                  (o = l.prop("offsetLeft")),
                    (r = l.prop("offsetTop")),
                    (h = t.clientX),
                    (u = t.clientY),
                    w.Utility.add_event_listener(a.ns, "document", n, e),
                    w.Utility.add_event_listener(a.ns, "document", i, s);
                }),
                (e = function (t) {
                  t.preventDefault(), t.stopPropagation();
                  var n = (t.touches || [])[0] ? t.touches[0] : t,
                    i = r + (n.clientY - u),
                    s = o + (n.clientX - h),
                    e = a.Rv,
                    c = a.Rv,
                    t = window.innerWidth - l[0].clientWidth - a.Rv,
                    n = window.innerHeight - l[0].clientHeight - a.Rv;
                  return (
                    s < e ? (s = e) : t < s && (s = t),
                    i < c ? (i = c) : n < i && (i = n),
                    l.safe_css_text({ top: i + "px", left: s + "px" }),
                    !1
                  );
                }),
                (i = function () {
                  w.Utility.remove_event_listener(
                    a.ns,
                    "document",
                    "mousemove"
                  ),
                    w.Utility.remove_event_listener(
                      a.ns,
                      "document",
                      "mouseup"
                    );
                }),
                (s = function () {
                  w.Utility.remove_event_listener(
                    a.ns,
                    "document",
                    "touchmove"
                  ),
                    w.Utility.remove_event_listener(
                      a.ns,
                      "document",
                      "touchend"
                    );
                }),
                l[0].addEventListener("mousedown", function (t) {
                  "minimized" === a.jv && n(t, "mousemove", "mouseup", i);
                }),
                l[0].addEventListener("touchstart", function (t) {
                  "minimized" !== a.jv ||
                    (null !== (t = (t.touches || [])[0] || null) &&
                      n(t, "touchmove", "touchend", s));
                }));
          } catch (t) {}
        }),
        (s.prototype.Av = function (t) {
          return (
            null !== (t = w.Library.crisp.client.Call.get_stream(t)) &&
            0 < t.getVideoTracks().length
          );
        }),
        (s.prototype.Z = function () {
          try {
            (this.wv = null),
              (this.jv = null),
              (this.Vs = null),
              (this.Uv = 0),
              (this.Bv = null),
              (this.qv = !1),
              (this.bv = {});
          } catch (t) {}
        }),
        new s())),
      (_dollar_crisp = {
        push: w.Pipeline.push.Et(w.Pipeline),
        get: w.Pipeline.get.Et(w.Pipeline),
        set: w.Pipeline.set.Et(w.Pipeline),
        is: w.Pipeline.is.Et(w.Pipeline),
        on: w.Pipeline.on.Et(w.Pipeline),
        off: w.Pipeline.off.Et(w.Pipeline),
        do: w.Pipeline.do.Et(w.Pipeline),
        config: w.Pipeline.config.Et(w.Pipeline),
        safe: w.Pipeline.safe.Et(w.Pipeline),
        help: w.Pipeline.help.Et(w.Pipeline),
      }),
      Object.defineProperty(_dollar_crisp, "__init", {
        enumerable: !1,
        value: w.Base.init.Et(w.Base),
      }),
      Object.defineProperty(_dollar_crisp, "__spool", {
        enumerable: !1,
        value: {},
      }),
      Object.defineProperty(_dollar_crisp, "__debug", {
        enumerable: !1,
        value: w,
      }),
      (_dollar_crisp.__spool.pending_actions = []),
      "object" == typeof window.$crisp && 0 < window.$crisp.length)
    )
      for (var i = 0; i < window.$crisp.length; i++)
        _dollar_crisp.__spool.pending_actions.push(window.$crisp[i]);
    window.$crisp = _dollar_crisp;
  } catch (t) {
    if (!0 === n) throw t;
  }
  function s() {
    try {
      (this.ns = "CrispCall"), (this.Rv = 6), (this.ua = 1e3), this.Z();
    } catch (t) {}
  }
  function e() {
    try {
      (this.ns = "CrispBrowsingAssist"),
        (this.rv = "assist"),
        (this.fv = 500),
        (this.pv = 750),
        (this.lv = 100),
        (this.mv = 5),
        (this.yv = 600),
        this.Zh(),
        this.Z();
    } catch (t) {}
  }
  function c() {
    try {
      (this.ns = "CrispBrowsing"), this.Zh();
    } catch (t) {}
  }
  function a() {
    try {
      (this.ns = "CrispChatViewport"), (this.cv = /;/g), this.Z();
    } catch (t) {}
  }
  function h() {
    try {
      (this.ns = "CrispChatState"),
        (this.Lp = 250),
        (this.Zp = 240),
        (this.Mp = {
          trigger: this.Vp,
          alert: this.Kp,
          intent: this.Xp,
          operator: this.Yp,
          scroll: this.Qp,
          maximized: this.tv,
          textarea: this.nv,
        }),
        this.Rp(),
        this.Z();
    } catch (t) {}
  }
  function u() {
    try {
      (this.ns = "CrispChatSelector"),
        (this.Tp = {
          pane_icon: "cc-15mo",
          pane_avatar_resource: "cc-1dx3",
          pane_unread: "cc-12u5",
          header: "cc-x32x",
          header_avatar: "cc-furf",
          header_avatar_resource: "cc-1do6",
          header_operator: "cc-txwe",
          header_status_type_away: "cc-12fb",
          header_channel: "cc-1qlt",
          drop_over: "cc-1hl5",
          content: "cc-qqzz",
          flow: "cc-1v5j",
          flow_messages: "cc-3lvj",
          flow_events: "cc-192e",
          pickers: "cc-1tha",
          pickers_selector_one: "cc-mxq4",
          pickers_inner_one: "cc-5ftt",
          pickers_search_input: "cc-19m8",
          pickers_smiley: ["cc-5ftt", '[data-type="smiley"]'].join(""),
          pickers_gif: ["cc-5ftt", '[data-type="gif"]'].join(""),
          offline: "cc-41gl",
          alerts: "cc-14ou",
          alerts_one: "cc-sel9",
          alerts_new_messages: ["cc-sel9", '[data-type="new_messages"]'].join(
            ""
          ),
          alerts_warn_reply: ["cc-sel9", '[data-type="warn_reply"]'].join(""),
          alerts_email_invalid: ["cc-sel9", '[data-type="email_invalid"]'].join(
            ""
          ),
          form_container: "cc-g7iw",
          form_message: "cc-1uz4",
          form_act: "cc-1cxr",
          form_button_send: "cc-br7s",
          form_button_smiley: ["cc-1y2e", '[data-type="smiley"]'].join(""),
          form_button_attach: ["cc-1y2e", '[data-type="file"]'].join(""),
          form_textarea_message: "cc-pjpe",
          form_input_attach: "cc-do6v",
          tooltips_new_messages: ["cc-1bue", '[data-id="new_messages"]'].join(
            ""
          ),
          tooltips_new_messages_text: [
            "cc-1div",
            '[data-for-id="new_messages"]',
          ].join(""),
          tooltips_extended_actions: "cc-86w0",
          tooltips_extended_preview: "cc-2zuy",
        }),
        this.Zh(),
        this.Z();
    } catch (t) {}
  }
  function l() {
    try {
      (this.ns = "CrispChatScroll"), this.Z();
    } catch (t) {}
  }
  function d() {
    try {
      (this.ns = "CrispChatNotification"), (this.Sp = 5), this.Z();
    } catch (t) {}
  }
  function p() {
    try {
      (this.ns = "CrispChatMisc"), this.Z();
    } catch (t) {}
  }
  function v() {
    try {
      (this.ns = "CrispChatMessage"),
        (this.Jd = 1500),
        (this.Qd = 500),
        (this.gp = 3e4),
        (this.kp = 6e4),
        (this.bp = 3e4),
        (this.vp = 400),
        (this.cp = 5e3),
        (this.ep = 12e4),
        (this.rp = 600),
        (this.hp = 600),
        (this.ip = "urn:crisp.im:triggers:0"),
        (this.Od = ["welcome", "identity", "game"]),
        (this.Yd = ["email", "phone"]),
        (this.op = ["image/jpg", "image/jpeg", "image/png"]),
        (this.up = [".cc-xtol", ".cc-1kje"]),
        this.Z();
    } catch (t) {}
  }
  function y() {
    try {
      (this.ns = "CrispChatInterface"),
        (this._d = 320),
        (this.md = 380),
        (this.wd = 360),
        (this.gd = 460),
        (this.yd = 400),
        (this.pd = 580),
        (this.bd = 8),
        (this.sd = 500),
        (this.jd = 250),
        (this.qd = 100),
        (this.Sd = 250),
        (this.Ad = 1e3),
        (this.od = 1e3),
        (this.rd = 1e3),
        (this.hd = 216e5),
        (this.Td = 500),
        (this.ud = {
          angry: ":@",
          blushing: ":$",
          confused: "x)",
          cool: "8)",
          crying: ":'(",
          embarrased: ":/",
          heart: "<3",
          laughing: ":'D",
          sad: ":(",
          sick: ":S",
          "small-smile": ":)",
          "big-smile": ":D",
          "thumbs-up": "+1",
          surprised: ":o",
          tongue: ":P",
          winking: ";)",
        }),
        (this.td = {
          minimized: { minimize: "cc-b9vr", maximize: "cc-14qm" },
          shade: { minimize: "cc-m8rr", maximize: "cc-1pmi" },
          chat: { minimize: "cc-z8ln", maximize: "cc-12h3" },
        }),
        this.Z();
    } catch (t) {}
  }
  function m() {
    try {
      (this.ns = "CrispChatGame"), this.Z();
    } catch (t) {}
  }
  function _() {
    try {
      (this.ns = "CrispChatField"), this.Z();
    } catch (t) {}
  }
  function g() {
    try {
      (this.ns = "CrispChatEvent"),
        (this.Mf = 120),
        (this.Sf = 1e3),
        (this.zf = 10),
        (this.Df = 500),
        (this.wf = 100),
        (this.gf = 2),
        (this.Tf = 1e3),
        (this.Uf = 0.2),
        (this.Jf = "File"),
        (this.Hf = "application/octet-stream"),
        (this.Wf = 2e3),
        this.Z();
    } catch (t) {}
  }
  function b() {
    try {
      (this.ns = "CrispChatPicker"),
        (this.Il = 10),
        (this.Tl = { gif: this.Bl }),
        this.Z();
    } catch (t) {}
  }
  function k() {
    try {
      (this.ns = "CrispChatIntent"),
        (this.pl = ["identity", "game"]),
        (this.ml = { identity: this._l, game: this.kl }),
        this.Z();
    } catch (t) {}
  }
  function x() {
    try {
      (this.ns = "CrispChatAlert"),
        (this.rl = { warn_reply: this.hl, email_invalid: this.ll }),
        this.Z();
    } catch (t) {}
  }
  function F() {
    try {
      (this.ns = "CrispChat"), this.Z();
    } catch (t) {}
  }
  function E() {
    try {
      (this.ns = "CrispMinimizedSelector"), this.Z();
    } catch (t) {}
  }
  function C() {
    try {
      (this.ns = "CrispMinimizedInterface"),
        (this.ua = 1e3),
        (this.Zu = 0.25),
        (this.Yu = 2),
        (this.Ku = 1e3),
        (this.Xu = 500),
        (this.Hu = 12e3),
        (this.$u = "minimized"),
        (this.Lu = "1"),
        this.Z();
    } catch (t) {}
  }
  function j() {
    try {
      this.ns = "CrispMinimizedEvent";
    } catch (t) {}
  }
  function q() {
    try {
      (this.ns = "CrispMinimized"), this.Z();
    } catch (t) {}
  }
  function z() {
    try {
      (this.ns = "CrispBase"),
        (this.au = 560),
        (this.ru = 620),
        (this.ou = 740),
        (this.pu = 6e5),
        (this.vu = 6e5),
        (this.yu = 1728e5),
        (this.Du = 1e3),
        (this.ku = 1e4),
        (this.mu = /_/g),
        (this.Fu = { socket: !0, buster: 1 }),
        (this.gu = {
          other: { container_index: 1e6, show_operator_count: !0 },
        }),
        (this.Au = {
          childList: !0,
          attributes: !1,
          subtree: !1,
          characterData: !1,
        }),
        (this.wu = /^(?:https?:[\/]*)?([^\/]+)(?:\/.*)?$/i),
        this.Zh(),
        this.Z();
    } catch (t) {}
  }
  function S() {
    try {
      (this.ns = "CrispTrigger"),
        (this.ua = 1e3),
        (this.zh = 18e5),
        (this.Vr = "trigger"),
        (this.Xr = "1"),
        (this.ph = ["page", "url_parameter"]),
        (this.Zr = {
          delay: this.lh,
          leave: this.dh,
          link: this.gh,
          page: this.Yr,
          url_parameter: this.bh,
          user_data: this.xh,
          user_event: this.Eh,
        }),
        (this.sh = { message: this.Ch, open: this.jh, sound: this.qh }),
        (this.vh = { page: this.wh, url_parameter: this.kh }),
        this.Z();
    } catch (t) {}
  }
  function A() {
    try {
      (this.ns = "CrispEvent"),
        (this.$r = 12e5),
        (this.Nr = { capture: !1 }),
        this.Z();
    } catch (t) {}
  }
  function I() {
    try {
      (this.ns = "CrispAvailability"), this.Z();
    } catch (t) {}
  }
  function D() {
    try {
      (this.ns = "CrispBroker"),
        (this.cr = 1),
        (this.cu = {
          chat: {
            country: null,
            locale: "en",
            theme: "default",
            theme_text: "default",
            theme_welcome: "default",
            tile: "default",
            allowed_pages: [],
            blocked_pages: [],
            blocked_locales: [],
            last_operator_face: !1,
            ongoing_operator_face: !0,
            activity_metrics: !0,
            operator_privacy: !1,
            availability_tooltip: !1,
            hide_vacation: !1,
            hide_on_away: !1,
            hide_on_mobile: !1,
            position_reverse: !1,
            email_visitors: !0,
            phone_visitors: !1,
            force_identify: !1,
            ignore_privacy: !1,
            visitor_compose: !0,
            file_transfer: !0,
            helpdesk_link: !0,
            status_health_dead: !0,
            wait_game: !0,
          },
          website: {
            name: "",
            domain: "",
            mailer: "",
            buster: 1,
            count_operators: 0,
            active_operators: [],
            response_metrics: {},
            last_available: w.Date.timestamp(),
            status: null,
            trial: !1,
          },
          channels: {},
          plugins: {},
        }),
        this.Z();
    } catch (t) {}
  }
  function T() {
    try {
      this.ns = "CrispTemplate";
    } catch (t) {}
  }
  function B() {
    try {
      (this.ns = "CrispAvatar"), (this.Za = 3), (this.Qa = 99);
    } catch (t) {}
  }
  function U() {
    try {
      (this.ns = "CrispLocale"),
        (this.Ma = "en"),
        (this.Ka = "ltr"),
        (this.La = [
          "af",
          "ar-ae",
          "ar-sa",
          "ar-ye",
          "ar",
          "az",
          "bg",
          "bn",
          "ca",
          "cs",
          "da",
          "de",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fa",
          "fi",
          "fo",
          "fr",
          "gu",
          "he",
          "hi",
          "hr",
          "hu",
          "hy",
          "id",
          "is",
          "it",
          "ja",
          "ka",
          "ko",
          "lt",
          "lv",
          "ml",
          "mn",
          "ms",
          "nl-be",
          "nl",
          "no",
          "pl",
          "ps",
          "pt-br",
          "pt",
          "ro",
          "ru",
          "sk",
          "sl",
          "sr-cyrl-cs",
          "sr",
          "sv",
          "ta",
          "th",
          "tr",
          "uk",
          "vi",
          "zh-hk",
          "zh-tw",
          "zh",
        ]),
        (this.$a = this.La),
        (this.Va = ["ltr", "rtl"]),
        this.Z();
    } catch (t) {}
  }
  function R() {
    try {
      (this.ns = "CrispSound"),
        (this.Nv = 200),
        (this.Ca = {
          events: ["chat-message-receive"],
          call: ["call-established", "call-hangup", "call-ring"],
        }),
        this.Z();
    } catch (t) {}
  }
  function N() {
    try {
      this.ns = "CrispPlugin";
    } catch (t) {}
  }
  function O() {
    try {
      (this.ns = "CrispTheme"),
        (this.ka = 16),
        (this.ma = "default"),
        (this.ya = {
          default: {
            10: "#F5F8FB",
            20: "#EFF5FE",
            100: "#E2EEFF",
            200: "#6E9BDE",
            500: "#1972F5",
            600: "#055EE1",
            700: "#0057D7",
            800: "#004FC3",
            900: "#004AB5",
            reverse: "#FFFFFF",
          },
          red: {
            10: "#F9F9F9",
            20: "#F9F3F3",
            100: "#FFE5E4",
            200: "#F8796F",
            500: "#E61D0F",
            600: "#CC1B0E",
            700: "#C5170A",
            800: "#B31A0E",
            900: "#93150B",
            reverse: "#FFFFFF",
          },
          pink: {
            10: "#F9F9F9",
            20: "#F7F2F2",
            100: "#FFE0EB",
            200: "#F26C9A",
            500: "#F01D65",
            600: "#DB165A",
            700: "#CE1454",
            800: "#B3124A",
            900: "#A0073C",
            reverse: "#FFFFFF",
          },
          purple: {
            10: "#F9F9F9",
            20: "#F8F3FA",
            100: "#FADDFF",
            200: "#CA60DC",
            500: "#B521CF",
            600: "#9B19B2",
            700: "#9614AE",
            800: "#7D0B91",
            900: "#6B0A7C",
            reverse: "#FFFFFF",
          },
          deep_purple: {
            10: "#F9F9F9",
            20: "#F6F5FA",
            100: "#EDE2FF",
            200: "#936DD6",
            500: "#682AD5",
            600: "#581FBB",
            700: "#5019B0",
            800: "#42178D",
            900: "#310B74",
            reverse: "#FFFFFF",
          },
          indigo: {
            10: "#F9F9F9",
            20: "#F5F5FB",
            100: "#DDE2FF",
            200: "#5D73EA",
            500: "#2943D1",
            600: "#1732C4",
            700: "#112BB9",
            800: "#061FA7",
            900: "#001797",
            reverse: "#FFFFFF",
          },
          blue: {
            10: "#F5F8FB",
            20: "#EFF5FE",
            100: "#E2EEFF",
            200: "#6E9BDE",
            500: "#1972F5",
            600: "#055EE1",
            700: "#0057D7",
            800: "#004FC3",
            900: "#004AB5",
            reverse: "#FFFFFF",
          },
          light_blue: {
            10: "#F9F9F9",
            20: "#EFF5F7",
            100: "#DCF0F9",
            200: "#4CA4CC",
            500: "#009FDE",
            600: "#008CCB",
            700: "#0088C5",
            800: "#0070A3",
            900: "#00618E",
            reverse: "#FFFFFF",
          },
          cyan: {
            10: "#F9F9F9",
            20: "#F1F7F7",
            100: "#DBF7F9",
            200: "#4EA4AF",
            500: "#00A3B4",
            600: "#00909E",
            700: "#008997",
            800: "#007685",
            900: "#005965",
            reverse: "#FFFFFF",
          },
          teal: {
            10: "#F9F9F9",
            20: "#E7F4F4",
            100: "#D6EEE9",
            200: "#44B1A7",
            500: "#00947C",
            600: "#00816C",
            700: "#007B66",
            800: "#006057",
            900: "#005049",
            reverse: "#FFFFFF",
          },
          green: {
            10: "#F9F9F9",
            20: "#EDF5ED",
            100: "#D6F3D7",
            200: "#5BB05E",
            500: "#28A52D",
            600: "#1A941F",
            700: "#148919",
            800: "#086E0C",
            900: "#005C03",
            reverse: "#FFFFFF",
          },
          light_green: {
            10: "#F9F9F9",
            20: "#F0F7F0",
            100: "#DFF6C6",
            200: "#6FB204",
            500: "#6EB700",
            600: "#64A500",
            700: "#5E9C00",
            800: "#426C00",
            900: "#395E00",
            reverse: "#FFFFFF",
          },
          amber: {
            10: "#F9F9F9",
            20: "#F6F4ED",
            100: "#FFF0C1",
            200: "#C5A135",
            500: "#E1AE00",
            600: "#CD9E00",
            700: "#C49700",
            800: "#B28900",
            900: "#A37E00",
            reverse: "#FFFFFF",
          },
          orange: {
            10: "#F9F9F9",
            20: "#F5F5EF",
            100: "#FFECCF",
            200: "#EE9743",
            500: "#EC7500",
            600: "#DB6C00",
            700: "#D06701",
            800: "#B85C01",
            900: "#A45100",
            reverse: "#FFFFFF",
          },
          deep_orange: {
            10: "#F9F9F9",
            20: "#FDF5F5",
            100: "#FFE8E0",
            200: "#DA7859",
            500: "#E45300",
            600: "#CD4A00",
            700: "#C24702",
            800: "#963700",
            900: "#752B00",
            reverse: "#FFFFFF",
          },
          brown: {
            10: "#F9F9F9",
            20: "#F7F1EF",
            100: "#F2EAE7",
            200: "#AF7864",
            500: "#924B32",
            600: "#864027",
            700: "#803C24",
            800: "#702E17",
            900: "#61240E",
            reverse: "#FFFFFF",
          },
          grey: {
            10: "#F9F9F9",
            20: "#F4F4F4",
            100: "#E5E5E5",
            200: "#7D7D7D",
            500: "#7A7A7A",
            600: "#6B6B6B",
            700: "#646464",
            800: "#4C4C4C",
            900: "#3E3E3E",
            reverse: "#FFFFFF",
          },
          blue_grey: {
            10: "#F9F9F9",
            20: "#F2F7F8",
            100: "#DCEDF6",
            200: "#638EA3",
            500: "#457991",
            600: "#396D84",
            700: "#33657D",
            800: "#25556D",
            900: "#1C4D66",
            reverse: "#FFFFFF",
          },
          black: {
            10: "#F9F9F9",
            20: "#F2F2F2",
            100: "#E9E9E9",
            200: "#818181",
            500: "#2A2A2A",
            600: "#3A3A3A",
            700: "#3F3F3F",
            800: "#515151",
            900: "#5B5B5B",
            reverse: "#FFFFFF",
          },
        }),
        (this.ba = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    } catch (t) {}
  }
  function M() {
    try {
      (this.ns = "CrispDate"),
        (this.pa = 15),
        (this.ra = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ]),
        (this.ha = [
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ]),
        (this.ua = 1e3),
        (this.Ov = 60),
        (this.Mv = 24),
        (this.fa = 60),
        (this.la = this.Ov * this.fa),
        (this.va = this.Mv * this.la);
    } catch (t) {}
  }
  function $() {
    try {
      (this.ns = "CrispValidate"),
        (this.oa = 80),
        (this.ia = /^(([^\s@]+)@([^\s@]+)\.([^\s@]+))$/),
        (this.sa = new RegExp(
          [
            "^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?",
            "[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})",
            "(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\/]?",
            "(\\d+))?$",
          ].join(""),
          "i"
        )),
        (this.ea = /^https?:\/\/(.+)$/),
        (this.aa = /^([A-Za-z0-9_\\-]+)$/);
    } catch (t) {}
  }
  function L() {
    try {
      (this.ns = "CrispPipeline"),
        (this.Kc = [
          "get",
          "set",
          "is",
          "do",
          "on",
          "off",
          "config",
          "safe",
          "help",
        ]),
        (this.Qc = ["on", "off"]),
        this.Z();
    } catch (t) {}
  }
  function P() {
    try {
      (this.ns = "CrispAction"),
        (this.Wc = [
          "session:loaded",
          "chat:initiated",
          "chat:opened",
          "chat:closed",
          "message:sent",
          "message:received",
          "message:compose:sent",
          "message:compose:received",
          "user:email:changed",
          "user:phone:changed",
          "user:nickname:changed",
          "user:avatar:changed",
          "website:availability:changed",
          "helpdesk:queried",
        ]),
        (this.na = { on: this.Pc, off: this.Hc }),
        (this.xc = 500),
        (this.Rc = /^([a-f0-9]{64})$/),
        (this.Jc = {});
    } catch (t) {}
  }
  function J() {
    try {
      (this.ns = "CrispFeature"), this.Z();
    } catch (t) {}
  }
  function H() {
    try {
      (this.ns = "CrispUtility"),
        (this.Xe = "[match:single]"),
        (this.Ve = "[match:double]"),
        (this.He = "[match:negate]"),
        (this.Ke = /([\*]{1})/g),
        (this.Ge = /([\*]{2})/g),
        (this.Je = /^([\!]{1})/),
        (this.Ze = /(\[match:single\])/g),
        (this.Ye = /(\[match:double\])/g),
        (this.We = /(\[match:negate\])/g),
        (this.tc = new RegExp(
          [
            "^(\\!)?",
            "(?:https?:[\\/]*)?",
            "(?:www\\.)?([^\\/]+)([^#?]*)?",
            "(?:[\\/]+)?",
            "(?:[#?].*)?",
          ].join(""),
          "i"
        )),
        (this.Le = /^(?:\s*)(?:(?:javascript|vbscript):)/i),
        this.Z();
    } catch (t) {}
  }
  function W() {
    try {
      (this.ns = "CrispPolyfill"),
        (this.Ne = 2e4),
        (this.$e = /\{\s*\[native code\]\s*\}$/),
        this.Z(),
        this.Oe();
    } catch (t) {}
  }
})();