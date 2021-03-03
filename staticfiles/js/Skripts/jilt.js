/*
Jilt Storefront JS
Version 1.0.0

Copyright (c) 2015-2018, SkyVerge, Inc.
Licensed under the GNU General Public License v3.0
http://www.gnu.org/licenses/gpl-3.0.html
*/
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
!(function (t) {
  (function (t) {
    "use strict";
    t.fn.typeWatch = function (e) {
      var o = [
        "TEXT",
        "TEXTAREA",
        "PASSWORD",
        "TEL",
        "SEARCH",
        "URL",
        "EMAIL",
        "DATETIME",
        "DATE",
        "MONTH",
        "WEEK",
        "TIME",
        "DATETIME-LOCAL",
        "NUMBER",
        "RANGE",
        "DIV",
      ];
      var i = t.extend(
        {
          wait: 750,
          callback: function () {},
          highlight: true,
          captureLength: 2,
          allowSubmit: false,
          inputTypes: o,
        },
        e
      );
      function n(t, e) {
        var o = t.type === "DIV" ? jQuery(t.el).html() : jQuery(t.el).val();
        if (
          (o.length >= i.captureLength && o != t.text) ||
          (e && (o.length >= i.captureLength || i.allowSubmit)) ||
          (o.length == 0 && t.text)
        ) {
          t.text = o;
          t.cb.call(t.el, o);
        }
      }
      function r(t) {
        var e = (t.type || t.nodeName).toUpperCase();
        if (jQuery.inArray(e, i.inputTypes) >= 0) {
          var o = {
            timer: null,
            text: e === "DIV" ? jQuery(t).html() : jQuery(t).val(),
            cb: i.callback,
            el: t,
            type: e,
            wait: i.wait,
          };
          if (i.highlight && e !== "DIV")
            jQuery(t).focus(function () {
              this.select();
            });
          var r = function (t) {
            var i = o.wait;
            var r = false;
            var a = e;
            if (
              typeof t.keyCode != "undefined" &&
              t.keyCode == 13 &&
              a !== "TEXTAREA" &&
              e !== "DIV"
            ) {
              console.log("OVERRIDE");
              i = 1;
              r = true;
            }
            var s = function () {
              n(o, r);
            };
            clearTimeout(o.timer);
            o.timer = setTimeout(s, i);
          };
          jQuery(t).on("keydown paste cut input", r);
        }
      }
      return this.each(function () {
        r(this);
      });
    };
  })(t.jQuery);
})(this),
  (function (t, e, o) {
    "use strict";
    !(function (i) {
      function n(t, e) {
        return (
          (this.$element = i(t)),
          e &&
            (("string" !== i.type(e.delay) && "number" !== i.type(e.delay)) ||
              (e.delay = { show: e.delay, hide: e.delay })),
          (this.options = i.extend({}, l, e)),
          (this._defaults = l),
          (this._name = r),
          (this._targetclick = !1),
          this.init(),
          c.push(this.$element),
          this
        );
      }
      var r = "webuiPopover",
        a = "webui-popover",
        s = "webui.popover",
        l = {
          placement: "auto",
          container: null,
          width: "auto",
          height: "auto",
          trigger: "click",
          style: "",
          selector: !1,
          delay: { show: null, hide: 300 },
          async: { type: "GET", before: null, success: null, error: null },
          cache: !0,
          multi: !1,
          arrow: !0,
          title: "",
          content: "",
          closeable: !1,
          padding: !0,
          url: "",
          type: "html",
          direction: "",
          animation: null,
          template:
            '<div class="webui-popover"><div class="webui-arrow"></div><div class="webui-popover-inner"><a href="#" class="close"></a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',
          backdrop: !1,
          dismissible: !0,
          onShow: null,
          onHide: null,
          abortXHR: !0,
          autoHide: !1,
          offsetTop: 0,
          offsetLeft: 0,
          iframeOptions: {
            frameborder: "0",
            allowtransparency: "true",
            id: "",
            name: "",
            scrolling: "",
            onload: "",
            height: "",
            width: "",
          },
          hideEmpty: !1,
        },
        u = a + "-rtl",
        c = [],
        d = i('<div class="webui-popover-backdrop"></div>'),
        p = 0,
        h = !1,
        m = -2e3,
        f = i(e),
        g = function (t, e) {
          return isNaN(t) ? e || 0 : Number(t);
        },
        w = function (t) {
          return t.data("plugin_" + r);
        },
        y = function () {
          for (var t = null, e = 0; e < c.length; e++)
            (t = w(c[e])) && t.hide(!0);
          f.trigger("hiddenAll." + s);
        },
        v = function (t) {
          for (var e = null, o = 0; o < c.length; o++)
            (e = w(c[o])) && e.id !== t.id && e.hide(!0);
          f.trigger("hiddenAll." + s);
        },
        _ =
          "ontouchstart" in e.documentElement &&
          /Mobi/.test(navigator.userAgent),
        b = function (t) {
          var e = { x: 0, y: 0 };
          if (
            "touchstart" === t.type ||
            "touchmove" === t.type ||
            "touchend" === t.type ||
            "touchcancel" === t.type
          ) {
            var o =
              t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
            (e.x = o.pageX), (e.y = o.pageY);
          } else
            ("mousedown" !== t.type &&
              "mouseup" !== t.type &&
              "click" !== t.type) ||
              ((e.x = t.pageX), (e.y = t.pageY));
          return e;
        };
      (n.prototype = {
        init: function () {
          if (
            this.$element[0] instanceof e.constructor &&
            !this.options.selector
          )
            throw new Error(
              "`selector` option must be specified when initializing " +
                this.type +
                " on the window.document object!"
            );
          "manual" !== this.getTrigger() &&
            (_
              ? this.$element
                  .off("touchend", this.options.selector)
                  .on(
                    "touchend",
                    this.options.selector,
                    i.proxy(this.toggle, this)
                  )
              : "click" === this.getTrigger()
              ? this.$element
                  .off("click", this.options.selector)
                  .on(
                    "click",
                    this.options.selector,
                    i.proxy(this.toggle, this)
                  )
              : "hover" === this.getTrigger() &&
                this.$element
                  .off("mouseenter mouseleave click", this.options.selector)
                  .on(
                    "mouseenter",
                    this.options.selector,
                    i.proxy(this.mouseenterHandler, this)
                  )
                  .on(
                    "mouseleave",
                    this.options.selector,
                    i.proxy(this.mouseleaveHandler, this)
                  )),
            (this._poped = !1),
            (this._inited = !0),
            (this._opened = !1),
            (this._idSeed = p),
            (this.id = r + this._idSeed),
            (this.options.container = i(
              this.options.container || e.body
            ).first()),
            this.options.backdrop && d.appendTo(this.options.container).hide(),
            p++,
            "sticky" === this.getTrigger() && this.show(),
            this.options.selector &&
              (this._options = i.extend({}, this.options, { selector: "" }));
        },
        destroy: function () {
          for (var t = -1, e = 0; e < c.length; e++)
            if (c[e] === this.$element) {
              t = e;
              break;
            }
          c.splice(t, 1),
            this.hide(),
            this.$element.data("plugin_" + r, null),
            "click" === this.getTrigger()
              ? this.$element.off("click")
              : "hover" === this.getTrigger() &&
                this.$element.off("mouseenter mouseleave"),
            this.$target && this.$target.remove();
        },
        getDelegateOptions: function () {
          var t = {};
          return (
            this._options &&
              i.each(this._options, function (e, o) {
                l[e] !== o && (t[e] = o);
              }),
            t
          );
        },
        hide: function (t, e) {
          if ((t || "sticky" !== this.getTrigger()) && this._opened) {
            e && (e.preventDefault(), e.stopPropagation()),
              this.xhr &&
                !0 === this.options.abortXHR &&
                (this.xhr.abort(), (this.xhr = null));
            var o = i.Event("hide." + s);
            if ((this.$element.trigger(o, [this.$target]), this.$target)) {
              this.$target.removeClass("in").addClass(this.getHideAnimation());
              var n = this;
              setTimeout(function () {
                n.$target.hide(), n.getCache() || n.$target.remove();
              }, n.getHideDelay());
            }
            this.options.backdrop && d.hide(),
              (this._opened = !1),
              this.$element.trigger("hidden." + s, [this.$target]),
              this.options.onHide && this.options.onHide(this.$target);
          }
        },
        resetAutoHide: function () {
          var t = this,
            e = t.getAutoHide();
          e &&
            (t.autoHideHandler && clearTimeout(t.autoHideHandler),
            (t.autoHideHandler = setTimeout(function () {
              t.hide();
            }, e)));
        },
        delegate: function (t) {
          var e = i(t).data("plugin_" + r);
          return (
            e ||
              ((e = new n(t, this.getDelegateOptions())),
              i(t).data("plugin_" + r, e)),
            e
          );
        },
        toggle: function (t) {
          var e = this;
          t &&
            (t.preventDefault(),
            t.stopPropagation(),
            this.options.selector && (e = this.delegate(t.currentTarget))),
            e[e.getTarget().hasClass("in") ? "hide" : "show"]();
        },
        hideAll: function () {
          y();
        },
        hideOthers: function () {
          v(this);
        },
        show: function () {
          if (!this._opened) {
            var t = this.getTarget()
              .removeClass()
              .addClass(a)
              .addClass(this._customTargetClass);
            if (
              (this.options.multi || this.hideOthers(),
              !this.getCache() || !this._poped || "" === this.content)
            ) {
              if (
                ((this.content = ""),
                this.setTitle(this.getTitle()),
                this.options.closeable ||
                  t.find(".close").off("click").remove(),
                this.isAsync()
                  ? this.setContentASync(this.options.content)
                  : this.setContent(this.getContent()),
                this.canEmptyHide() && "" === this.content)
              )
                return;
              t.show();
            }
            this.displayContent(),
              this.options.onShow && this.options.onShow(t),
              this.bindBodyEvents(),
              this.options.backdrop && d.show(),
              (this._opened = !0),
              this.resetAutoHide();
          }
        },
        displayContent: function () {
          var t = this.getElementPosition(),
            e = this.getTarget()
              .removeClass()
              .addClass(a)
              .addClass(this._customTargetClass),
            o = this.getContentElement(),
            n = e[0].offsetWidth,
            r = e[0].offsetHeight,
            l = "bottom",
            c = i.Event("show." + s);
          if (this.canEmptyHide()) {
            var d = o.children().html();
            if (null !== d && 0 === d.trim().length) return;
          }
          this.$element.trigger(c, [e]);
          var p = this.$element.data("width") || this.options.width;
          "" === p && (p = this._defaults.width), "auto" !== p && e.width(p);
          var h = this.$element.data("height") || this.options.height;
          "" === h && (h = this._defaults.height),
            "auto" !== h && o.height(h),
            this.options.style &&
              this.$target.addClass(a + "-" + this.options.style),
            "rtl" !== this.options.direction || o.hasClass(u) || o.addClass(u),
            this.options.arrow || e.find(".webui-arrow").remove(),
            e.detach().css({ top: m, left: m, display: "block" }),
            this.getAnimation() && e.addClass(this.getAnimation()),
            e.appendTo(this.options.container),
            (l = this.getPlacement(t)),
            this.$element.trigger("added." + s),
            this.initTargetEvents(),
            this.options.padding ||
              ("auto" !== this.options.height &&
                o.css("height", o.outerHeight()),
              this.$target.addClass("webui-no-padding")),
            this.options.maxHeight &&
              o.css("maxHeight", this.options.maxHeight),
            this.options.maxWidth && o.css("maxWidth", this.options.maxWidth),
            (n = e[0].offsetWidth),
            (r = e[0].offsetHeight);
          var f = this.getTargetPositin(t, l, n, r);
          if (
            (this.$target.css(f.position).addClass(l).addClass("in"),
            "iframe" === this.options.type)
          ) {
            var g = e.find("iframe"),
              w = e.width(),
              y = g.parent().height();
            "" !== this.options.iframeOptions.width &&
              "auto" !== this.options.iframeOptions.width &&
              (w = this.options.iframeOptions.width),
              "" !== this.options.iframeOptions.height &&
                "auto" !== this.options.iframeOptions.height &&
                (y = this.options.iframeOptions.height),
              g.width(w).height(y);
          }
          if (
            (this.options.arrow || this.$target.css({ margin: 0 }),
            this.options.arrow)
          ) {
            var v = this.$target.find(".webui-arrow");
            v.removeAttr("style"),
              "left" === l || "right" === l
                ? v.css({ top: this.$target.height() / 2 })
                : ("top" !== l && "bottom" !== l) ||
                  v.css({ left: this.$target.width() / 2 }),
              f.arrowOffset &&
                (-1 === f.arrowOffset.left || -1 === f.arrowOffset.top
                  ? v.hide()
                  : v.css(f.arrowOffset));
          }
          (this._poped = !0),
            this.$element.trigger("shown." + s, [this.$target]);
        },
        isTargetLoaded: function () {
          return 0 === this.getTarget().find("i.glyphicon-refresh").length;
        },
        getTriggerElement: function () {
          return this.$element;
        },
        getTarget: function () {
          if (!this.$target) {
            var t = r + this._idSeed;
            (this.$target = i(this.options.template).attr("id", t)),
              (this._customTargetClass =
                this.$target.attr("class") !== a
                  ? this.$target.attr("class")
                  : null),
              this.getTriggerElement().attr("data-target", t);
          }
          return (
            this.$target.data("trigger-element") ||
              this.$target.data("trigger-element", this.getTriggerElement()),
            this.$target
          );
        },
        removeTarget: function () {
          this.$target.remove(),
            (this.$target = null),
            (this.$contentElement = null);
        },
        getTitleElement: function () {
          return this.getTarget().find("." + a + "-title");
        },
        getContentElement: function () {
          return (
            this.$contentElement ||
              (this.$contentElement = this.getTarget().find(
                "." + a + "-content"
              )),
            this.$contentElement
          );
        },
        getTitle: function () {
          return (
            this.$element.attr("data-title") ||
            this.options.title ||
            this.$element.attr("title")
          );
        },
        getUrl: function () {
          return this.$element.attr("data-url") || this.options.url;
        },
        getAutoHide: function () {
          return this.$element.attr("data-auto-hide") || this.options.autoHide;
        },
        getOffsetTop: function () {
          return (
            g(this.$element.attr("data-offset-top")) || this.options.offsetTop
          );
        },
        getOffsetLeft: function () {
          return (
            g(this.$element.attr("data-offset-left")) || this.options.offsetLeft
          );
        },
        getCache: function () {
          var t = this.$element.attr("data-cache");
          if (void 0 !== t)
            switch (t.toLowerCase()) {
              case "true":
              case "yes":
              case "1":
                return !0;
              case "false":
              case "no":
              case "0":
                return !1;
            }
          return this.options.cache;
        },
        getTrigger: function () {
          return this.$element.attr("data-trigger") || this.options.trigger;
        },
        getDelayShow: function () {
          var t = this.$element.attr("data-delay-show");
          return void 0 !== t
            ? t
            : 0 === this.options.delay.show
            ? 0
            : this.options.delay.show || 100;
        },
        getHideDelay: function () {
          var t = this.$element.attr("data-delay-hide");
          return void 0 !== t
            ? t
            : 0 === this.options.delay.hide
            ? 0
            : this.options.delay.hide || 100;
        },
        getAnimation: function () {
          var t = this.$element.attr("data-animation");
          return t || this.options.animation;
        },
        getHideAnimation: function () {
          var t = this.getAnimation();
          return t ? t + "-out" : "out";
        },
        setTitle: function (t) {
          var e = this.getTitleElement();
          t
            ? ("rtl" !== this.options.direction ||
                e.hasClass(u) ||
                e.addClass(u),
              e.html(t))
            : e.remove();
        },
        hasContent: function () {
          return this.getContent();
        },
        canEmptyHide: function () {
          return this.options.hideEmpty && "html" === this.options.type;
        },
        getIframe: function () {
          var t = i("<iframe></iframe>").attr("src", this.getUrl()),
            e = this;
          return (
            i.each(this._defaults.iframeOptions, function (o) {
              "undefined" != typeof e.options.iframeOptions[o] &&
                t.attr(o, e.options.iframeOptions[o]);
            }),
            t
          );
        },
        getContent: function () {
          if (this.getUrl())
            switch (this.options.type) {
              case "iframe":
                this.content = this.getIframe();
                break;
              case "html":
                try {
                  (this.content = i(this.getUrl())),
                    this.content.is(":visible") || this.content.show();
                } catch (o) {
                  throw new Error(
                    "Unable to get popover content. Invalid selector specified."
                  );
                }
            }
          else if (!this.content) {
            var t = "";
            if (
              ((t = i.isFunction(this.options.content)
                ? this.options.content.apply(this.$element[0], [this])
                : this.options.content),
              (this.content = this.$element.attr("data-content") || t),
              !this.content)
            ) {
              var e = this.$element.next();
              e && e.hasClass(a + "-content") && (this.content = e);
            }
          }
          return this.content;
        },
        setContent: function (t) {
          var e = this.getTarget(),
            o = this.getContentElement();
          "string" == typeof t
            ? o.html(t)
            : t instanceof i &&
              (o.html(""),
              this.options.cache
                ? t.removeClass(a + "-content").appendTo(o)
                : t
                    .clone(!0, !0)
                    .removeClass(a + "-content")
                    .appendTo(o)),
            (this.$target = e);
        },
        isAsync: function () {
          return "async" === this.options.type;
        },
        setContentASync: function (t) {
          var e = this;
          this.xhr ||
            (this.xhr = i.ajax({
              url: this.getUrl(),
              type: this.options.async.type,
              cache: this.getCache(),
              beforeSend: function (t, o) {
                e.options.async.before && e.options.async.before(e, t, o);
              },
              success: function (o) {
                e.bindBodyEvents(),
                  t && i.isFunction(t)
                    ? (e.content = t.apply(e.$element[0], [o]))
                    : (e.content = o),
                  e.setContent(e.content);
                var n = e.getContentElement();
                n.removeAttr("style"),
                  e.displayContent(),
                  e.options.async.success && e.options.async.success(e, o);
              },
              complete: function () {
                e.xhr = null;
              },
              error: function (t, o) {
                e.options.async.error && e.options.async.error(e, t, o);
              },
            }));
        },
        bindBodyEvents: function () {
          h ||
            (this.options.dismissible && "click" === this.getTrigger()
              ? _
                ? f
                    .off("touchstart.webui-popover")
                    .on(
                      "touchstart.webui-popover",
                      i.proxy(this.bodyTouchStartHandler, this)
                    )
                : (f
                    .off("keyup.webui-popover")
                    .on(
                      "keyup.webui-popover",
                      i.proxy(this.escapeHandler, this)
                    ),
                  f
                    .off("click.webui-popover")
                    .on(
                      "click.webui-popover",
                      i.proxy(this.bodyClickHandler, this)
                    ))
              : "hover" === this.getTrigger() &&
                f
                  .off("touchend.webui-popover")
                  .on(
                    "touchend.webui-popover",
                    i.proxy(this.bodyClickHandler, this)
                  ));
        },
        mouseenterHandler: function (t) {
          var e = this;
          t && this.options.selector && (e = this.delegate(t.currentTarget)),
            e._timeout && clearTimeout(e._timeout),
            (e._enterTimeout = setTimeout(function () {
              e.getTarget().is(":visible") || e.show();
            }, this.getDelayShow()));
        },
        mouseleaveHandler: function () {
          var t = this;
          clearTimeout(t._enterTimeout),
            (t._timeout = setTimeout(function () {
              t.hide();
            }, this.getHideDelay()));
        },
        escapeHandler: function (t) {
          27 === t.keyCode && this.hideAll();
        },
        bodyTouchStartHandler: function (t) {
          var e = this,
            o = i(t.currentTarget);
          o.on("touchend", function (t) {
            e.bodyClickHandler(t), o.off("touchend");
          }),
            o.on("touchmove", function () {
              o.off("touchend");
            });
        },
        bodyClickHandler: function (t) {
          h = !0;
          for (var e = !0, o = 0; o < c.length; o++) {
            var i = w(c[o]);
            if (i && i._opened) {
              var n = i.getTarget().offset(),
                r = n.left,
                a = n.top,
                s = n.left + i.getTarget().width(),
                l = n.top + i.getTarget().height(),
                u = b(t),
                d = u.x >= r && u.x <= s && u.y >= a && u.y <= l;
              if (d) {
                e = !1;
                break;
              }
            }
          }
          e && y();
        },
        initTargetEvents: function () {
          "hover" === this.getTrigger() &&
            this.$target
              .off("mouseenter mouseleave")
              .on("mouseenter", i.proxy(this.mouseenterHandler, this))
              .on("mouseleave", i.proxy(this.mouseleaveHandler, this)),
            this.$target
              .find(".close")
              .off("click")
              .on("click", i.proxy(this.hide, this, !0));
        },
        getPlacement: function (t) {
          var e,
            o = this.options.container,
            i = o.innerWidth(),
            n = o.innerHeight(),
            r = o.scrollTop(),
            a = o.scrollLeft(),
            s = Math.max(0, t.left - a),
            l = Math.max(0, t.top - r),
            u =
              "horizontal" ===
              (e =
                "function" == typeof this.options.placement
                  ? this.options.placement.call(
                      this,
                      this.getTarget()[0],
                      this.$element[0]
                    )
                  : this.$element.data("placement") || this.options.placement),
            c = "vertical" === e,
            d = "auto" === e || u || c;
          return (
            d
              ? (e =
                  s < i / 3
                    ? l < n / 3
                      ? u
                        ? "right-bottom"
                        : "bottom-right"
                      : l < (2 * n) / 3
                      ? c
                        ? l <= n / 2
                          ? "bottom-right"
                          : "top-right"
                        : "right"
                      : u
                      ? "right-top"
                      : "top-right"
                    : s < (2 * i) / 3
                    ? l < n / 3
                      ? u
                        ? s <= i / 2
                          ? "right-bottom"
                          : "left-bottom"
                        : "bottom"
                      : l < (2 * n) / 3
                      ? u
                        ? s <= i / 2
                          ? "right"
                          : "left"
                        : l <= n / 2
                        ? "bottom"
                        : "top"
                      : u
                      ? s <= i / 2
                        ? "right-top"
                        : "left-top"
                      : "top"
                    : l < n / 3
                    ? u
                      ? "left-bottom"
                      : "bottom-left"
                    : l < (2 * n) / 3
                    ? c
                      ? l <= n / 2
                        ? "bottom-left"
                        : "top-left"
                      : "left"
                    : u
                    ? "left-top"
                    : "top-left")
              : "auto-top" === e
              ? (e =
                  s < i / 3
                    ? "top-right"
                    : s < (2 * i) / 3
                    ? "top"
                    : "top-left")
              : "auto-bottom" === e
              ? (e =
                  s < i / 3
                    ? "bottom-right"
                    : s < (2 * i) / 3
                    ? "bottom"
                    : "bottom-left")
              : "auto-left" === e
              ? (e =
                  l < n / 3
                    ? "left-top"
                    : l < (2 * n) / 3
                    ? "left"
                    : "left-bottom")
              : "auto-right" === e &&
                (e =
                  l < n / 3
                    ? "right-bottom"
                    : l < (2 * n) / 3
                    ? "right"
                    : "right-top"),
            e
          );
        },
        getElementPosition: function () {
          var t = this.$element[0].getBoundingClientRect(),
            o = this.options.container,
            n = o.css("position");
          if (o.is(e.body) || "static" === n)
            return i.extend({}, this.$element.offset(), {
              width: this.$element[0].offsetWidth || t.width,
              height: this.$element[0].offsetHeight || t.height,
            });
          if ("fixed" === n) {
            var r = o[0].getBoundingClientRect();
            return {
              top: t.top - r.top + o.scrollTop(),
              left: t.left - r.left + o.scrollLeft(),
              width: t.width,
              height: t.height,
            };
          }
          return "relative" === n
            ? {
                top: this.$element.offset().top - o.offset().top,
                left: this.$element.offset().left - o.offset().left,
                width: this.$element[0].offsetWidth || t.width,
                height: this.$element[0].offsetHeight || t.height,
              }
            : void 0;
        },
        getTargetPositin: function (t, o, i, n) {
          var r = t,
            a = this.options.container,
            s = this.$element.outerWidth(),
            l = this.$element.outerHeight(),
            u = e.documentElement.scrollTop + a.scrollTop(),
            c = e.documentElement.scrollLeft + a.scrollLeft(),
            d = {},
            p = null,
            h = this.options.arrow ? 20 : 0,
            f = 10,
            g = s < h + f ? h : 0,
            w = l < h + f ? h : 0,
            y = 0,
            v = e.documentElement.clientHeight + u,
            _ = e.documentElement.clientWidth + c,
            b = r.left + r.width / 2 - g > 0,
            j = r.left + r.width / 2 + g < _,
            M = r.top + r.height / 2 - w > 0,
            C = r.top + r.height / 2 + w < v;
          switch (o) {
            case "bottom":
              d = { top: r.top + r.height, left: r.left + r.width / 2 - i / 2 };
              break;
            case "top":
              d = { top: r.top - n, left: r.left + r.width / 2 - i / 2 };
              break;
            case "left":
              d = { top: r.top + r.height / 2 - n / 2, left: r.left - i };
              break;
            case "right":
              d = { top: r.top + r.height / 2 - n / 2, left: r.left + r.width };
              break;
            case "top-right":
              (d = { top: r.top - n, left: b ? r.left - g : f }),
                (p = { left: b ? Math.min(s, i) / 2 + g : m });
              break;
            case "top-left":
              (y = j ? g : -f),
                (d = { top: r.top - n, left: r.left - i + r.width + y }),
                (p = { left: j ? i - Math.min(s, i) / 2 - g : m });
              break;
            case "bottom-right":
              (d = { top: r.top + r.height, left: b ? r.left - g : f }),
                (p = { left: b ? Math.min(s, i) / 2 + g : m });
              break;
            case "bottom-left":
              (y = j ? g : -f),
                (d = { top: r.top + r.height, left: r.left - i + r.width + y }),
                (p = { left: j ? i - Math.min(s, i) / 2 - g : m });
              break;
            case "right-top":
              (y = C ? w : -f),
                (d = { top: r.top - n + r.height + y, left: r.left + r.width }),
                (p = { top: C ? n - Math.min(l, n) / 2 - w : m });
              break;
            case "right-bottom":
              (d = { top: M ? r.top - w : f, left: r.left + r.width }),
                (p = { top: M ? Math.min(l, n) / 2 + w : m });
              break;
            case "left-top":
              (y = C ? w : -f),
                (d = { top: r.top - n + r.height + y, left: r.left - i }),
                (p = { top: C ? n - Math.min(l, n) / 2 - w : m });
              break;
            case "left-bottom":
              (d = { top: M ? r.top - w : f, left: r.left - i }),
                (p = { top: M ? Math.min(l, n) / 2 + w : m });
          }
          return (
            (d.top += this.getOffsetTop()),
            (d.left += this.getOffsetLeft()),
            { position: d, arrowOffset: p }
          );
        },
      }),
        (i.fn[r] = function (t, e) {
          var o = [],
            a = this.each(function () {
              var a = i.data(this, "plugin_" + r);
              a
                ? "destroy" === t
                  ? a.destroy()
                  : "string" == typeof t && o.push(a[t]())
                : (t
                    ? "string" == typeof t
                      ? "destroy" !== t &&
                        (e || ((a = new n(this, null)), o.push(a[t]())))
                      : "object" == typeof t && (a = new n(this, t))
                    : (a = new n(this, null)),
                  i.data(this, "plugin_" + r, a));
            });
          return o.length ? o : a;
        });
      var j = {
        show: function (t, e) {
          e
            ? i(t).webuiPopover(e).webuiPopover("show")
            : i(t).webuiPopover("show");
        },
        hide: function (t) {
          i(t).webuiPopover("hide");
        },
        create: function (t, e) {
          (e = e || {}), i(t).webuiPopover(e);
        },
        isCreated: function (t) {
          var e = !0;
          return (
            i(t).each(function (t, n) {
              e = e && i(n).data("plugin_" + r) !== o;
            }),
            e
          );
        },
        hideAll: function () {
          y();
        },
        updateContent: function (t, e) {
          var o = i(t).data("plugin_" + r);
          if (o) {
            var n = o.getCache();
            (o.options.cache = !1),
              (o.options.content = e),
              o._opened
                ? ((o._opened = !1), o.show())
                : o.isAsync()
                ? o.setContentASync(e)
                : o.setContent(e),
              (o.options.cache = n);
          }
        },
        updateContentAsync: function (t, e) {
          var o = i(t).data("plugin_" + r);
          if (o) {
            var n = o.getCache(),
              a = o.options.type;
            (o.options.cache = !1),
              (o.options.url = e),
              o._opened
                ? ((o._opened = !1), o.show())
                : ((o.options.type = "async"), o.setContentASync(o.content)),
              (o.options.cache = n),
              (o.options.type = a);
          }
        },
        setDefaultOptions: function (t) {
          l = i.extend({}, l, t);
        },
      };
      t.WebuiPopovers = j;
    })(t.jQuery);
  })(window, document);
var _slicedToArray = (function () {
    function t(t, e) {
      var o = [],
        i = !0,
        n = !1,
        r = undefined;
      try {
        for (
          var a, s = t[Symbol.iterator]();
          !(i = (a = s.next()).done) && (o.push(a.value), !e || o.length !== e);
          i = !0
        );
      } catch (l) {
        (n = !0), (r = l);
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (n) throw r;
        }
      }
      return o;
    }
    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  })(),
  _createClass = (function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  })();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.Helpers = (function () {
    function t() {
      _classCallCheck(this, t);
    }
    return (
      _createClass(t, null, [
        {
          key: "initialize",
          value: function (t) {
            var e = t.params,
              o = e === undefined ? {} : e,
              i = t.customization,
              n = i === undefined ? {} : i;
            (JiltStorefront.Helpers.defaultLanguage =
              n.defaultLanguage || "en"),
              (JiltStorefront.Helpers.texts = n.texts || o.texts || {});
          },
        },
        {
          key: "getText",
          value: function (t) {
            var e =
                arguments.length <= 1 || arguments[1] === undefined
                  ? { key: undefined, defaultValue: undefined }
                  : arguments[1],
              o = JiltStorefront.Helpers.getLanguageLocale().language,
              i = JiltStorefront.Helpers.texts,
              n = JiltStorefront.Helpers.safeGet(
                i,
                "translation." + e.key,
                JiltStorefront.Helpers.safeGet(i, "translation." + t)
              );
            return (
              n ||
              ((n = JiltStorefront.Helpers.safeGet(
                i,
                o + ".translation." + e.key,
                JiltStorefront.Helpers.safeGet(i, o + ".translation." + t)
              ))
                ? n
                : (n = JiltStorefront.Helpers.safeGet(
                    i,
                    JiltStorefront.Helpers.defaultLanguage +
                      ".translation." +
                      e.key,
                    JiltStorefront.Helpers.safeGet(
                      i,
                      JiltStorefront.Helpers.defaultLanguage +
                        ".translation." +
                        t
                    )
                  )) ||
                  e.defaultValue ||
                  ("string" == typeof e ? e : t))
            );
          },
        },
        {
          key: "isCheckoutField",
          value: function (t, e) {
            var o;
            return null != (o = t.attr("name")) && e(o);
          },
        },
        {
          key: "isValidEmail",
          value: function (t) {
            return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(t);
          },
        },
        {
          key: "setContactSource",
          value: function (t, e) {
            var o;
            return (
              (o = { customer: { email: t, contact_source: e } }),
              JiltStorefront.CustomerSession.updateCustomerSession(o)
            );
          },
        },
        {
          key: "validateOrderData",
          value: function (t, e) {
            var o;
            return (
              !!this.isCheckoutField(t, e) &&
              !!(o = t.val()) &&
              o !== t.data("jilt-value")
            );
          },
        },
        {
          key: "popoverCheckmarkSrc",
          value: function () {
            return "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQ0Mi41MzMgNDQyLjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQyLjUzMyA0NDIuNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQzNC41MzksOTguNDk5bC0zOC44MjgtMzguODI4Yy01LjMyNC01LjMyOC0xMS43OTktNy45OTMtMTkuNDEtNy45OTNjLTcuNjE4LDAtMTQuMDkzLDIuNjY1LTE5LjQxNyw3Ljk5M0wxNjkuNTksMjQ3LjI0OCAgIGwtODMuOTM5LTg0LjIyNWMtNS4zMy01LjMzLTExLjgwMS03Ljk5Mi0xOS40MTItNy45OTJjLTcuNjE2LDAtMTQuMDg3LDIuNjYyLTE5LjQxNyw3Ljk5Mkw3Ljk5NCwyMDEuODUyICAgQzIuNjY0LDIwNy4xODEsMCwyMTMuNjU0LDAsMjIxLjI2OWMwLDcuNjA5LDIuNjY0LDE0LjA4OCw3Ljk5NCwxOS40MTZsMTAzLjM1MSwxMDMuMzQ5bDM4LjgzMSwzOC44MjggICBjNS4zMjcsNS4zMzIsMTEuOCw3Ljk5NCwxOS40MTQsNy45OTRjNy42MTEsMCwxNC4wODQtMi42NjksMTkuNDE0LTcuOTk0bDM4LjgzLTM4LjgyOEw0MzQuNTM5LDEzNy4zMyAgIGM1LjMyNS01LjMzLDcuOTk0LTExLjgwMiw3Ljk5NC0xOS40MTdDNDQyLjUzNywxMTAuMzAyLDQzOS44NjQsMTAzLjgyOSw0MzQuNTM5LDk4LjQ5OXoiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
          },
        },
        {
          key: "addPopoverToDOM",
          value: function () {
            var t,
              e,
              o,
              i,
              n,
              r,
              a,
              s,
              l,
              u,
              c,
              d,
              p =
                arguments.length <= 0 || arguments[0] === undefined
                  ? {}
                  : arguments[0],
              h = p.enterYourEmail,
              m =
                h === undefined
                  ? JiltStorefront.Helpers.getText(
                      "Enter your email",
                      JiltStorefront.Index.params.enter_your_email_message
                    )
                  : h,
              f = p.dismissMessage,
              g =
                f === undefined
                  ? JiltStorefront.Helpers.getText(
                      "dismissMessage",
                      JiltStorefront.Index.params.popover_dismiss_message
                    )
                  : f;
            return (
              ((d = document.createElement("div")).style.display = "none"),
              (d.id = "jilt-popover-content"),
              ((s = document.createElement("div")).className =
                "jilt-popover-email-input-group"),
              ((u = document.createElement("span")).className =
                "jilt-popover-email-input"),
              ((l = document.createElement("input")).name =
                "jilt-popover-email"),
              (l.className = "js-jilt-popover-email"),
              (l.type = "email"),
              (l.autocomplete = "email"),
              (l.placeholder = m),
              ((t = document.createElement("span")).className =
                "jilt-popover-email-addon"),
              ((e = document.createElement("img")).className =
                "js-jilt-popover-email-icon"),
              (e.src =
                "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMS42MjYgNTExLjYyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjYyNiA1MTEuNjI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5LjEwNiwxNzguNzI5YzYuNDcyLDQuNTY3LDI1Ljk4MSwxOC4xMzEsNTguNTI4LDQwLjY4NWMzMi41NDgsMjIuNTU0LDU3LjQ4MiwzOS45Miw3NC44MDMsNTIuMDk5ICAgIGMxLjkwMywxLjMzNSw1Ljk0Niw0LjIzNywxMi4xMzEsOC43MWM2LjE4Niw0LjQ3NiwxMS4zMjYsOC4wOTMsMTUuNDE2LDEwLjg1MmM0LjA5MywyLjc1OCw5LjA0MSw1Ljg1MiwxNC44NDksOS4yNzcgICAgYzUuODA2LDMuNDIyLDExLjI3OSw1Ljk5NiwxNi40MTgsNy43YzUuMTQsMS43MTgsOS44OTgsMi41NjksMTQuMjc1LDIuNTY5aDAuMjg3aDAuMjg4YzQuMzc3LDAsOS4xMzctMC44NTIsMTQuMjc3LTIuNTY5ICAgIGM1LjEzNy0xLjcwNCwxMC42MTUtNC4yODEsMTYuNDE2LTcuN2M1LjgwNC0zLjQyOSwxMC43NTItNi41MiwxNC44NDUtOS4yNzdjNC4wOTMtMi43NTksOS4yMjktNi4zNzYsMTUuNDE3LTEwLjg1MiAgICBjNi4xODQtNC40NzcsMTAuMjMyLTcuMzc1LDEyLjEzNS04LjcxYzE3LjUwOC0xMi4xNzksNjIuMDUxLTQzLjExLDEzMy42MTUtOTIuNzljMTMuODk0LTkuNzAzLDI1LjUwMi0yMS40MTEsMzQuODI3LTM1LjExNiAgICBjOS4zMzItMTMuNjk5LDEzLjk5My0yOC4wNywxMy45OTMtNDMuMTA1YzAtMTIuNTY0LTQuNTIzLTIzLjMxOS0xMy41NjUtMzIuMjY0Yy05LjA0MS04Ljk0Ny0xOS43NDktMTMuNDE4LTMyLjExNy0xMy40MThINDUuNjc5ICAgIGMtMTQuNjU1LDAtMjUuOTMzLDQuOTQ4LTMzLjgzMiwxNC44NDRDMy45NDksNzkuNTYyLDAsOTEuOTM0LDAsMTA2Ljc3OWMwLDExLjk5MSw1LjIzNiwyNC45ODUsMTUuNzAzLDM4Ljk3NCAgICBDMjYuMTY5LDE1OS43NDMsMzcuMzA3LDE3MC43MzYsNDkuMTA2LDE3OC43Mjl6IiBmaWxsPSIjNjY2NjY2Ii8+CgkJPHBhdGggZD0iTTQ4My4wNzIsMjA5LjI3NWMtNjIuNDI0LDQyLjI1MS0xMDkuODI0LDc1LjA4Ny0xNDIuMTc3LDk4LjUwMWMtMTAuODQ5LDcuOTkxLTE5LjY1LDE0LjIyOS0yNi40MDksMTguNjk5ICAgIGMtNi43NTksNC40NzMtMTUuNzQ4LDkuMDQxLTI2Ljk4LDEzLjcwMmMtMTEuMjI4LDQuNjY4LTIxLjY5Miw2Ljk5NS0zMS40MDEsNi45OTVoLTAuMjkxaC0wLjI4NyAgICBjLTkuNzA3LDAtMjAuMTc3LTIuMzI3LTMxLjQwNS02Ljk5NWMtMTEuMjI4LTQuNjYxLTIwLjIyMy05LjIyOS0yNi45OC0xMy43MDJjLTYuNzU1LTQuNDctMTUuNTU5LTEwLjcwOC0yNi40MDctMTguNjk5ICAgIGMtMjUuNjk3LTE4Ljg0Mi03Mi45OTUtNTEuNjgtMTQxLjg5Ni05OC41MDFDMTcuOTg3LDIwMi4wNDcsOC4zNzUsMTkzLjc2MiwwLDE4NC40Mzd2MjI2LjY4NWMwLDEyLjU3LDQuNDcxLDIzLjMxOSwxMy40MTgsMzIuMjY1ICAgIGM4Ljk0NSw4Ljk0OSwxOS43MDEsMTMuNDIyLDMyLjI2NCwxMy40MjJoNDIwLjI2NmMxMi41NiwwLDIzLjMxNS00LjQ3MywzMi4yNjEtMTMuNDIyYzguOTQ5LTguOTQ5LDEzLjQxOC0xOS42OTQsMTMuNDE4LTMyLjI2NSAgICBWMTg0LjQzN0M1MDMuNDQxLDE5My41NjksNDkzLjkyNywyMDEuODU0LDQ4My4wNzIsMjA5LjI3NXoiIGZpbGw9IiM2NjY2NjYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"),
              ((r = document.createElement("span")).className =
                "js-jilt-popover-email-typing-indicator"),
              (r.style = "display: none;"),
              ((o = document.createElement("img")).className = "dot"),
              (o.src =
                "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3oiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"),
              ((i = document.createElement("img")).className = "dot"),
              (i.src =
                "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3oiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"),
              ((n = document.createElement("img")).className = "dot"),
              (n.src =
                "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3oiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"),
              (a = document.createElement("span")),
              (c = JiltStorefront.Index.params.show_email_usage_notice
                ? "" + g
                : "<a href='#' class='js-jilt-popover-bypass'>" + g + "</a>"),
              (a.innerHTML = c),
              r.appendChild(o),
              r.appendChild(i),
              r.appendChild(n),
              t.appendChild(e),
              t.appendChild(r),
              u.appendChild(l),
              s.appendChild(u),
              s.appendChild(t),
              d.appendChild(s),
              d.appendChild(a),
              document.body.appendChild(d)
            );
          },
        },
        {
          key: "addPopoverStyleToDOM",
          value: function () {
            var t, e;
            return (
              (e =
                '.webui-popover-content{display:none}.webui-popover-rtl{direction:rtl;text-align:right}.webui-popover{position:absolute;top:-1;left:0;z-index:999999999999999;display:none;min-width:50px;min-height:32px;padding:1px;text-align:left;white-space:normal;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2)}.webui-popover.top,.webui-popover.top-left,.webui-popover.top-right{margin-top:-10px}.webui-popover.right,.webui-popover.right-top,.webui-popover.right-bottom{margin-left:10px}.webui-popover.bottom,.webui-popover.bottom-left,.webui-popover.bottom-right{margin-top:10px}.webui-popover.left,.webui-popover.left-top,.webui-popover.left-bottom{margin-left:-10px}.webui-popover.pop{-webkit-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);-webkit-transition:transform .15s cubic-bezier(0.3,0,0,1.5);-o-transition:transform .15s cubic-bezier(0.3,0,0,1.5);transition:transform .15s cubic-bezier(0.3,0,0,1.5);opacity:0;filter:alpha(opacity=0)}.webui-popover.pop-out{-webkit-transition-property:"opacity,transform";-o-transition-property:"opacity,transform";transition-property:"opacity,transform";-webkit-transition:.15s linear;-o-transition:.15s linear;transition:.15s linear;opacity:0;filter:alpha(opacity=0)}.webui-popover.fade,.webui-popover.fade-out{-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear;opacity:0;filter:alpha(opacity=0)}.webui-popover.out{opacity:0;filter:alpha(opacity=0)}.webui-popover.in{-webkit-transform:none;-o-transform:none;transform:none;opacity:1;filter:alpha(opacity=100)}.webui-popover .webui-popover-content{padding:9px 14px;overflow:auto;display:block}.webui-popover .webui-popover-content>div:first-child{width:99%}.webui-popover-inner .close{font-family:arial;margin:8px 10px 0 0;float:right;font-size:16px;font-weight:bold;line-height:16px;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20);text-decoration:none}.webui-popover-inner .close:hover,.webui-popover-inner .close:focus{opacity:.5;filter:alpha(opacity=50)}.webui-popover-inner .close:after{content:"\0D7";width:.8em;height:.8em;padding:4px;position:relative}.webui-popover-title{padding:8px 14px;margin:0;font-size:14px;font-weight:bold;line-height:18px;background-color:#fff;border-bottom:1px solid #f2f2f2;border-radius:5px 5px 0 0}.webui-popover-content{padding:9px 14px;overflow:auto;display:none}.webui-popover-inverse{background-color:#333;color:#eee}.webui-popover-inverse .webui-popover-title{background:#333;border-bottom:1px solid #3b3b3b;color:#eee}.webui-no-padding .webui-popover-content{padding:0}.webui-no-padding .list-group-item{border-right:0;border-left:0}.webui-no-padding .list-group-item:first-child{border-top:0}.webui-no-padding .list-group-item:last-child{border-bottom:0}.webui-popover>.webui-arrow,.webui-popover>.webui-arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.webui-popover>.webui-arrow{border-width:11px}.webui-popover>.webui-arrow:after{border-width:10px;content:""}.webui-popover.top>.webui-arrow,.webui-popover.top-right>.webui-arrow,.webui-popover.top-left>.webui-arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,0.25);border-bottom-width:0}.webui-popover.top>.webui-arrow:after,.webui-popover.top-right>.webui-arrow:after,.webui-popover.top-left>.webui-arrow:after{content:" ";bottom:1px;margin-left:-10px;border-top-color:#fff;border-bottom-width:0}.webui-popover.right>.webui-arrow,.webui-popover.right-top>.webui-arrow,.webui-popover.right-bottom>.webui-arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,0.25)}.webui-popover.right>.webui-arrow:after,.webui-popover.right-top>.webui-arrow:after,.webui-popover.right-bottom>.webui-arrow:after{content:" ";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.webui-popover.bottom>.webui-arrow,.webui-popover.bottom-right>.webui-arrow,.webui-popover.bottom-left>.webui-arrow{top:-11px;left:50%;margin-left:-11px;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,0.25);border-top-width:0}.webui-popover.bottom>.webui-arrow:after,.webui-popover.bottom-right>.webui-arrow:after,.webui-popover.bottom-left>.webui-arrow:after{content:" ";top:1px;margin-left:-10px;border-bottom-color:#fff;border-top-width:0}.webui-popover.left>.webui-arrow,.webui-popover.left-top>.webui-arrow,.webui-popover.left-bottom>.webui-arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,0.25)}.webui-popover.left>.webui-arrow:after,.webui-popover.left-top>.webui-arrow:after,.webui-popover.left-bottom>.webui-arrow:after{content:" ";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.webui-popover-inverse.top>.webui-arrow,.webui-popover-inverse.top-left>.webui-arrow,.webui-popover-inverse.top-right>.webui-arrow,.webui-popover-inverse.top>.webui-arrow:after,.webui-popover-inverse.top-left>.webui-arrow:after,.webui-popover-inverse.top-right>.webui-arrow:after{border-top-color:#333}.webui-popover-inverse.right>.webui-arrow,.webui-popover-inverse.right-top>.webui-arrow,.webui-popover-inverse.right-bottom>.webui-arrow,.webui-popover-inverse.right>.webui-arrow:after,.webui-popover-inverse.right-top>.webui-arrow:after,.webui-popover-inverse.right-bottom>.webui-arrow:after{border-right-color:#333}.webui-popover-inverse.bottom>.webui-arrow,.webui-popover-inverse.bottom-left>.webui-arrow,.webui-popover-inverse.bottom-right>.webui-arrow,.webui-popover-inverse.bottom>.webui-arrow:after,.webui-popover-inverse.bottom-left>.webui-arrow:after,.webui-popover-inverse.bottom-right>.webui-arrow:after{border-bottom-color:#333}.webui-popover-inverse.left>.webui-arrow,.webui-popover-inverse.left-top>.webui-arrow,.webui-popover-inverse.left-bottom>.webui-arrow,.webui-popover-inverse.left>.webui-arrow:after,.webui-popover-inverse.left-top>.webui-arrow:after,.webui-popover-inverse.left-bottom>.webui-arrow:after{border-left-color:#333}.webui-popover i.icon-refresh:before{content:""}.webui-popover i.icon-refresh{display:block;width:30px;height:30px;font-size:20px;top:50%;left:50%;position:absolute;margin-left:-15px;margin-right:-15px;background:url(../img/loading.gif) no-repeat}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg)}}@keyframes rotate{100%{transform:rotate(360deg)}}.webui-popover-backdrop{background-color:rgba(0,0,0,0.65);width:100%;height:100%;position:fixed;top:0;left:0;z-index:9998}.webui-popover .dropdown-menu{display:block;position:relative;top:0;border:0;box-shadow:none;float:none}' +
                "#jilt-popover-content {\n  max-width: 270px\n}\n#jilt-popover-content .jilt-popover-email-input-group {\n  position: relative;\n  margin-bottom: 1em;\n  white-space: nowrap\n}\n#jilt-popover-content .jilt-popover-email-input {\n  display: inline-block;\n  width: 100%;\n  min-width: 180px\n}\n#jilt-popover-content>span {\n  display: block;\n  font-size: .75em;\n  width: 100%\n}\n#jilt-popover-content>span a {\n  text-decoration: underline !important\n}\n#jilt-popover-content>span a.js-wc-jilt-popover-bypass {\n  display: block;\n  text-align: center\n}\n#jilt-popover-content .js-jilt-popover-email {\n  display: block;\n  width: 100%;\n  min-width: 180px;\n  padding: .6em 2.5em .6em .8em;\n  margin-bottom: 1em;\n  line-height: 1.6em\n}\n#jilt-popover-content .jilt-popover-email-addon {\n  display: inline-block;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  color: #666;\n  position: relative;\n  right: 2em;\n  width: 1em !important;\n}\n#jilt-popover-content .jilt-popover-email-addon img {\n  margin: 0px;\n}\n#jilt-popover-content .js-jilt-popover-email-icon {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: text-top\n}\n#jilt-popover-content .js-jilt-popover-email-typing-indicator {\n  text-align: center;\n  width: 1em;\n  height: 1em\n}\n#jilt-popover-content .js-jilt-popover-email-typing-indicator .dot {\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  margin-right: 4px;\n  animation: typewave .75s linear infinite\n}\n#jilt-popover-content .js-jilt-popover-email-typing-indicator .dot:nth-child(2) {\n  animation-delay: -0.55s\n}\n#jilt-popover-content .js-jilt-popover-email-typing-indicator .dot:nth-child(3) {\n  animation-delay: -0.45s\n}\n#jilt-popover-content .jilt-email-success {\n  animation: zoomfly .3s linear\n}\n.webui-popover h3.webui-popover-title {\n  padding: 8px 14px\n}\n@-moz-keyframes spin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg)\n  }\n}\n@keyframes typewave {\n  0%,\n  60%,\n  100% {\n    transform: initial\n  }\n  30% {\n    transform: translateY(-7px)\n  }\n}\n@keyframes zoomfly {\n  100% {\n    transform: scale(2, 2);\n    opacity: .5\n  }\n}\n@media only screen and (min-width: 576px) {\n  #jilt-popover-content {\n    max-width: 350px;\n  }\n\n  #jilt-popover-content .jilt-popover-email-input {\n    width: 100%;\n    min-width: 300px;\n  }\n\n  #jilt-popover-content .js-jilt-popover-email {\n    width: 100%;\n    min-width: 300px;\n  }\n}"),
              ((t = document.createElement("style")).type = "text/css"),
              t.styleSheet ? (t.styleSheet.cssText = e) : (t.innerHTML = e),
              document.head.appendChild(t)
            );
          },
        },
        {
          key: "parseQueryParams",
          value: function (t) {
            var e;
            return (
              (e = {}),
              "" === t
                ? e
                : (t.split("&").forEach(function (t) {
                    var o;
                    return (
                      (o = t.split("=", 2)),
                      (e[o[0]] =
                        "" === o[1] || void 0 === o[1]
                          ? o[1]
                          : decodeURIComponent(o[1]))
                    );
                  }),
                  e)
            );
          },
        },
        {
          key: "redirect",
          value: function (t) {
            if (null != t) return (document.location.href = t);
          },
        },
        {
          key: "getWindowLocationSearch",
          value: function () {
            return window.location.search;
          },
        },
        {
          key: "safeGet",
          value: function (t, e, o) {
            if (!t) return o;
            var i, n;
            if ((Array.isArray(e) && (i = e.slice(0)), "string" == typeof e)) {
              var r = t[e];
              if (r !== undefined) return r;
              i = e.split(".");
            }
            if (("symbol" == typeof e && (i = [e]), !Array.isArray(i)))
              throw new Error(
                "props arg must be an array, a string or a symbol"
              );
            for (; i.length; ) {
              if (((n = i.shift()), !t)) return o;
              var a = t[n] && t[n][i.join(".")];
              if (a !== undefined) return a;
              if ((t = t[n]) === undefined) return o;
            }
            return t;
          },
        },
        {
          key: "getLanguageLocale",
          value: function () {
            var t = (navigator.userLanguage || navigator.language)
                .replace("-", "_")
                .toLowerCase()
                .split("_"),
              e = _slicedToArray(t, 2);
            return { language: e[0], locale: e[1] };
          },
        },
      ]),
      t
    );
  })());
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.CustomerSession = (function () {
    function t() {
      _classCallCheck(this, t);
    }
    return (
      _createClass(t, null, [
        {
          key: "startSession",
          value: function () {
            var t;
            return (t = localStorage.getItem("jilt_customer_session_id"))
              ? ((JiltStorefront.Index.params.session_uuid = t), t)
              : ((t = this._generateUUID()),
                localStorage.setItem("jilt_customer_session_id", t),
                (JiltStorefront.Index.params.session_uuid = t),
                this.createCustomerSession(
                  this._generateNewCustomerSessionData(t)
                ),
                t);
          },
        },
        {
          key: "identifyCustomer",
          value: function () {
            var t, e, o;
            if (null != window.jiltStorefrontParams.customerID)
              t = {
                customer: {
                  customer_id: window.jiltStorefrontParams.customerID,
                },
              };
            else {
              if (
                "" ===
                (o = JiltStorefront.Helpers.getWindowLocationSearch().substring(
                  1
                ))
              )
                return;
              null !=
                (e = JiltStorefront.Helpers.parseQueryParams(o))
                  .utm_customer_id &&
                (t = { customer: { jilt_id: e.utm_customer_id } });
            }
            if (null != t) return this.updateCustomerSession(t);
          },
        },
        {
          key: "_generateNewCustomerSessionData",
          value: function (t) {
            return {
              customer_session: {
                uuid: t,
                user_agent: navigator.userAgent,
                browser_language: navigator.languages
                  ? navigator.languages[0]
                  : navigator.language || navigator.userLanguage,
                initial_referrer: document.referrer,
                landing_page: window.location.href,
              },
            };
          },
        },
        {
          key: "createCustomerSession",
          value: function (t) {
            var e;
            return (
              (e = JiltStorefront.API.generateURL("customer_sessions")),
              JiltStorefront.API.request({
                method: "POST",
                endpoint: e,
                data: t,
              })
            );
          },
        },
        {
          key: "updateCustomerSession",
          value: function (t) {
            var e,
              o =
                arguments.length <= 1 || arguments[1] === undefined
                  ? function () {}
                  : arguments[1];
            return (
              (e = JiltStorefront.API.generateURL(
                "customer_sessions",
                JiltStorefront.Index.params.session_uuid
              )),
              JiltStorefront.API.request(
                { method: "PUT", endpoint: e, data: t },
                o,
                o
              )
            );
          },
        },
        {
          key: "_generateUUID",
          value: function (t) {
            return null != t
              ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
              : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  JiltStorefront.CustomerSession._generateUUID
                );
          },
        },
      ]),
      t
    );
  })()),
  function () {
    window.JiltStorefront || (window.JiltStorefront = {}),
      (JiltStorefront.API = (function () {
        function t() {}
        return (
          (t.CONTACT_SOURCE_CHECKOUT = "jiltjs_checkout"),
          (t.CONTACT_SOURCE_POPOVER = "jiltjs_add_to_cart_popover"),
          (t.request = function (t, e, o) {
            var i, n, r, a, s, l, u, c, d, p, h;
            return (
              (l = t.method),
              (s = t.endpoint),
              (r = t.data),
              (n = null != (u = t.contentType) ? u : "application/json"),
              (a = null != (c = t.dataType) ? c : "text"),
              (i = null == (d = t.async) || d),
              (h = null != (p = t.timeout) ? p : 0),
              "application/json" === n && (r = JSON.stringify(r)),
              JiltStorefront.$.ajax({
                method: l,
                type: l,
                url: s,
                headers: {
                  "x-jilt-shop-domain":
                    JiltStorefront.Index.params.x_jilt_shop_domain,
                },
                data: r,
                contentType: n,
                dataType: a,
                async: i,
                timeout: h,
              })
                .done(function (t) {
                  if ("function" == typeof e) return e(t);
                })
                .fail(function (t) {
                  if ("function" == typeof o) return o(t);
                })
            );
          }),
          (t.sendByBeacon = function (t) {
            var e, o, i;
            return (
              (o = t.params),
              (i = t.url),
              (e = t.data),
              null != navigator.sendBeacon &&
                ((e.auth_token = o.public_key),
                navigator.sendBeacon(
                  i + "/beacon",
                  new Blob([JiltStorefront.$.param(e)], {
                    type: "application/x-www-form-urlencoded",
                  })
                ),
                !0)
            );
          }),
          (t.generateURL = function (t, e) {
            var o;
            return (
              (o =
                (JiltStorefront.Index.params.api_url ||
                  "https://api.jilt.com") +
                "/v2/shops/" +
                JiltStorefront.Index.params.shop_uuid +
                "/" +
                t),
              null == e ? o : o + "/" + e
            );
          }),
          t
        );
      })());
  }.call(this);
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.WooCommerce = (function () {
    function t(e) {
      var o;
      _classCallCheck(this, t),
        (this.handleEmailBypass = this.handleEmailBypass.bind(this)),
        (this.handleCartPage = this.handleCartPage.bind(this)),
        (this.handleCheckoutPage = this.handleCheckoutPage.bind(this)),
        (this.registerEmailCollectionOptOut = this.registerEmailCollectionOptOut.bind(
          this
        )),
        (this.handleFragmentsRefreshed = this.handleFragmentsRefreshed.bind(
          this
        )),
        (this.legacyHandleFragmentsRefreshed = this.legacyHandleFragmentsRefreshed.bind(
          this
        )),
        (this.updateCartData = this.updateCartData.bind(this)),
        (this.updateOrder = this.updateOrder.bind(this)),
        (this.params = e),
        (this.adding_to_cart = !1),
        null == this.params.email_collection_opt_out &&
          this.registerEmailCollectionOptOut(),
        this.params.capture_email_on_add_to_cart && this.initAddToCart(),
        this.initCartUpdates(),
        (o = JiltStorefront.$("form.woocommerce-checkout, form.checkout"))
          .length && this.handleCheckoutPage(o);
    }
    return (
      _createClass(t, [
        {
          key: "initCartUpdates",
          value: function () {
            var t = this;
            return (
              this.detectForceCartUpdatePage() &&
                this.updateCartData("page load", !0),
              this.params.tracking_elem_selector &&
              JiltStorefront.$(this.params.tracking_elem_selector).length
                ? JiltStorefront.$(document.body)
                    .on("updated_shipping_method", this.updateCartData)
                    .on("wc_fragments_refreshed", this.handleFragmentsRefreshed)
                    .on("adding_to_cart", function () {
                      return (t.adding_to_cart = !0);
                    })
                    .on("wc_fragments_loaded", function () {
                      if (t.adding_to_cart) return t.handleFragmentsRefreshed();
                    })
                : JiltStorefront.$(document.body)
                    .on(
                      "added_to_cart removed_from_cart updated_cart_totals updated_shipping_method applied_coupon removed_coupon updated_checkout",
                      function (e) {
                        return t.updateCartData(e.type);
                      }
                    )
                    .on(
                      "wc_fragments_refreshed",
                      this.legacyHandleFragmentsRefreshed
                    )
            );
          },
        },
        {
          key: "detectForceCartUpdatePage",
          value: function () {
            return (
              JiltStorefront.$(
                [
                  "body.woocommerce-cart",
                  "body.woocommerce-checkout",
                  "form.woocommerce-cart-form",
                  "form.woocommerce-checkout",
                ].join(", ")
              ).length > 0
            );
          },
        },
        {
          key: "initAddToCart",
          value: function () {
            var t = this;
            return (
              JiltStorefront.Helpers.addPopoverStyleToDOM(),
              JiltStorefront.Helpers.addPopoverToDOM(),
              JiltStorefront.$(document.body).on(
                "click.jilt_capture_email",
                '[href*="add-to-cart="]',
                function (e) {
                  var o;
                  if (
                    "true" !==
                    (o = JiltStorefront.$(e.target)).attr(
                      "data-jilt_exclude_capture"
                    )
                  )
                    return (
                      e.preventDefault(),
                      e.stopImmediatePropagation(),
                      t.handleAddedToCart(o, !0)
                    );
                }
              ),
              JiltStorefront.$(window).on("load", function () {
                return JiltStorefront.$(document.body).on(
                  "click.jilt_capture_email",
                  "button.single_add_to_cart_button",
                  function (e) {
                    var o;
                    if (
                      ((o = JiltStorefront.$(e.target)),
                      JiltStorefront.$("form.cart").length)
                    )
                      return (
                        e.preventDefault(),
                        e.stopImmediatePropagation(),
                        t.handleProductPage(o, !0)
                      );
                  }
                );
              })
            );
          },
        },
        {
          key: "handleAddedToCart",
          value: function (t) {
            var e,
              o = this;
            return (
              (e =
                !(arguments.length <= 1 || arguments[1] === undefined) &&
                arguments[1]
                  ? function () {
                      return t[0].click();
                    }
                  : null),
              this.initEmailCapture(t, e),
              setTimeout(function () {
                if ("function" == typeof t.webuiPopover)
                  return t.webuiPopover("show");
              }, 0),
              JiltStorefront.$(".js-jilt-popover-bypass").on(
                "click",
                function (e) {
                  return (
                    t.addClass("popover-dismissed"), o.handleEmailBypass(e, t)
                  );
                }
              )
            );
          },
        },
        {
          key: "handleProductPage",
          value: function (t) {
            var e,
              o,
              i =
                !(arguments.length <= 1 || arguments[1] === undefined) &&
                arguments[1];
            return (
              (e = JiltStorefront.$("form.cart")),
              (o = i
                ? function () {
                    return t[0].click();
                  }
                : null),
              t.hasClass("wc-variation-selection-needed") ||
                (this.initEmailCapture(t, o, !0),
                setTimeout(function () {
                  if ("function" == typeof t.webuiPopover)
                    return t.webuiPopover("show");
                }, 0)),
              e.on("submit.jilt_capture_email", function (t) {
                return (
                  $button.hasClass("popover-shown") && t.preventDefault(), !0
                );
              })
            );
          },
        },
        {
          key: "initEmailCapture",
          value: function (t) {
            var e,
              o,
              i,
              n,
              r = this,
              a =
                arguments.length <= 1 || arguments[1] === undefined
                  ? null
                  : arguments[1];
            return (
              (i = JiltStorefront.$("input.js-jilt-popover-email")),
              (e = JiltStorefront.$(".jilt-popover-email-addon")),
              (o = e.find(".js-jilt-popover-email-icon")),
              (n = e.find(".js-jilt-popover-email-typing-indicator")),
              "function" != typeof t.webuiPopover
                ? this.handleEmailBypass(null, t, a)
                : (t.webuiPopover({
                    title: JiltStorefront.Helpers.getText(
                      "Reserve this item in your cart!",
                      this.params.add_to_cart_title
                    ),
                    animation: "pop",
                    placement: "auto-bottom",
                    url: "#jilt-popover-content",
                    onShow: function () {
                      return (
                        t.addClass("popover-shown"),
                        i.focus(),
                        e.width(e.height())
                      );
                    },
                    onHide: function () {
                      return (
                        JiltStorefront.Helpers.isValidEmail(i.val()) ||
                          t.hasClass("popover-dismissed") ||
                          r.handleEmailBypass(null, t, a),
                        t.webuiPopover("destroy")
                      );
                    },
                  }),
                  i.typeWatch({
                    callback: function (t) {
                      return t ? (o.hide(), n.show()) : (n.hide(), o.show());
                    },
                    wait: 150,
                    captureLength: 1,
                  }),
                  i.typeWatch({
                    callback: function (e) {
                      if (JiltStorefront.Helpers.isValidEmail(e))
                        return (
                          n.hide(),
                          o
                            .show()
                            .addClass("jilt-email-success")
                            .attr(
                              "src",
                              JiltStorefront.Helpers.popoverCheckmarkSrc
                            ),
                          setTimeout(function () {
                            return (
                              t.webuiPopover("hide"),
                              r.terminateAddToCart(),
                              r.setCustomer(
                                { email: e, email_capture_opt_out: !1 },
                                a
                              ),
                              JiltStorefront.Helpers.setContactSource(
                                e,
                                JiltStorefront.API.CONTACT_SOURCE_POPOVER
                              )
                            );
                          }, 500)
                        );
                    },
                    wait: 1250,
                    highlight: !0,
                    allowSubmit: !1,
                    captureLength: 6,
                  }),
                  JiltStorefront.$(".js-jilt-popover-bypass").on(
                    "click",
                    function (e) {
                      return (
                        t.addClass("popover-dismissed"),
                        r.handleEmailBypass(e, t, a)
                      );
                    }
                  ))
            );
          },
        },
        {
          key: "handleEmailBypass",
          value: function (t, e) {
            var o,
              i =
                arguments.length <= 2 || arguments[2] === undefined
                  ? function () {}
                  : arguments[2];
            return (
              (o = { add_to_cart_opt_out: !0 }),
              null != t &&
                (t.preventDefault(),
                JiltStorefront.$(t.target).hasClass(
                  "js-wc-jilt-email-collection-opt-out"
                )
                  ? ((o.email_capture_opt_out = !0),
                    (this.params.email_collection_opt_out = !0))
                  : (o.email_capture_opt_out = !1)),
              "function" == typeof e.webuiPopover && e.webuiPopover("destroy"),
              this.setCustomer(o, i),
              this.terminateAddToCart()
            );
          },
        },
        {
          key: "terminateAddToCart",
          value: function () {
            if (
              (JiltStorefront.$(document.body).off(
                "added_to_cart.jilt_capture_email click.jilt_capture_email"
              ),
              JiltStorefront.$("form.cart").length)
            )
              return JiltStorefront.$("form.cart").off(
                "submit.jilt_capture_email"
              );
          },
        },
        {
          key: "handleCartPage",
          value: function () {
            if (this.params.cart_token) return this.updateCartData();
          },
        },
        {
          key: "handleCheckoutPage",
          value: function (t) {
            var e = this;
            return (
              t.on(
                "focusin select2-open select2:open",
                "input, select",
                function (t) {
                  return e.persistOrderData(t);
                }
              ),
              t.on(
                "focusout select2-close select2:close",
                "input, select",
                function (t) {
                  return e.sendOrderData(t);
                }
              ),
              t.on("change", '[name="payment_method"]', function (t) {
                return e.sendChosenPaymentMethod(t);
              }),
              t.on("change", '[name="order_comments"]', function (t) {
                return e.sendOrderNote(t);
              }),
              JiltStorefront.$(window).on(
                "unload visibilitychange",
                function () {
                  return e.sendOrderDataBeforeUnload();
                }
              )
            );
          },
        },
        {
          key: "registerEmailCollectionOptOut",
          value: function () {
            var t = this;
            return (
              JiltStorefront.$(
                "a.js-wc-jilt-email-collection-opt-out:not(.js-jilt-popover-bypass)"
              ).on("click", function (e) {
                var o, i, n, r;
                return (
                  e.preventDefault(),
                  (r = t.params.ajax_url
                    .toString()
                    .replace(
                      "%%endpoint%%",
                      "jilt_set_customer_email_capture_disallowed"
                    )),
                  (o = { security: t.params.nonce, email_capture_opt_out: !0 }),
                  (i = function (e) {
                    if (t.params.log_threshold <= 100) return console.log(e);
                  }),
                  (n = function (e) {
                    return (
                      t.params.log_threshold <= 100 && console.log(e),
                      JiltStorefront.$(".wc-jilt-email-usage-notice")
                        .slideToggle()
                        .remove(),
                      t.updateOrder(t.params.cart_token, {
                        customer: { declines_cart_reminders: !0 },
                      }),
                      (t.params.email_collection_opt_out = !0)
                    );
                  }),
                  JiltStorefront.API.request(
                    {
                      method: "POST",
                      endpoint: r,
                      data: o,
                      contentType: "application/x-www-form-urlencoded",
                      dataType: "json",
                    },
                    n,
                    i
                  )
                );
              }),
              JiltStorefront.$(".wc-jilt-email-usage-notice a.dismiss-link").on(
                "click",
                function () {
                  return location.reload();
                }
              )
            );
          },
        },
        {
          key: "handleFragmentsRefreshed",
          value: function () {
            var t, e;
            if (wc_cart_fragments_params) {
              try {
                t = JSON.parse(
                  JiltStorefront.$(this.params.tracking_elem_selector).text()
                );
              } catch (o) {
                return o, !1;
              }
              return (
                (e = t.cart_token && t.cart_data) &&
                  this.updateOrder(t.cart_token, t.cart_data),
                e
              );
            }
          },
        },
        {
          key: "legacyHandleFragmentsRefreshed",
          value: function () {
            var t, e, o, i;
            if (wc_cart_fragments_params) {
              t =
                wc_cart_fragments_params.cart_hash_key ||
                wc_cart_fragments_params.ajax_url.toString() + "-wc_cart_hash";
              try {
                if (
                  ((i = !1),
                  (e = window.localStorage.getItem(t)),
                  (o = window.sessionStorage.getItem(t)),
                  (i = null !== e && "" !== e) || (i = null !== o && "" !== o),
                  i)
                )
                  return this.updateCartData("wc_fragments_refreshed", !0);
              } catch (n) {}
            }
          },
        },
        {
          key: "updateCartData",
          value: function (t) {
            var e,
              o = this,
              i =
                !(arguments.length <= 1 || arguments[1] === undefined) &&
                arguments[1];
            if (
              !this.params.email_collection_opt_out &&
              (this.params.log_threshold <= 100 &&
                ((e = this.update_locked ? "(Locked)" : ""),
                null == t && (t = "direct method call"),
                console.log("updateCartData() triggered by `" + t + "` " + e)),
              !this.update_locked)
            )
              return (
                (this.update_locked = !0),
                JiltStorefront.$.get(
                  this.params.ajax_url
                    .toString()
                    .replace("%%endpoint%%", "jilt_get_cart_data")
                )
                  .done(function (t) {
                    if (
                      (o.params.log_threshold <= 100 && console.log(t),
                      t.success && null != t.data)
                    ) {
                      if (t.data.cart_token)
                        return (
                          (o.params.cart_token = t.data.cart_token),
                          o.params.cart_hash !== t.data.cart_hash || !0 === i
                            ? (o.updateOrder(o.params.cart_token, t.data.cart),
                              (o.params.cart_hash = t.data.cart_hash))
                            : o.params.log_threshold <= 100
                            ? console.log(
                                "updateCartData() aborted - no change in cart hash"
                              )
                            : void 0
                        );
                    } else null != t.data && t.data.message && o.params.log_threshold <= 500 && console.error("[Jilt] Could not get cart data: " + t.data.message);
                  })
                  .fail(function (t, e, i) {
                    if (o.params.log_threshold <= 500)
                      return console.error(
                        "[Jilt] Could not get cart data: " + i + " (" + e + ")"
                      );
                  })
                  .always(function () {
                    return (o.update_locked = !1);
                  })
              );
          },
        },
        {
          key: "persistOrderData",
          value: function (t) {
            var e;
            if (
              ((e = JiltStorefront.$(t.target)),
              JiltStorefront.Helpers.isCheckoutField(
                e,
                this.fieldNamesForCheckout
              ))
            )
              return e.val() ? e.data("jilt-value", e.val()) : void 0;
          },
        },
        {
          key: "sendChosenPaymentMethod",
          value: function (t) {
            var e, o;
            if (!this.params.email_collection_opt_out)
              return (
                (o = JiltStorefront.API.generateURL(
                  "orders",
                  this.params.cart_token
                )),
                (e = {
                  cart_token: this.params.cart_token,
                  client_session: {
                    chosen_payment_method: JiltStorefront.$(t.target).val(),
                  },
                }),
                JiltStorefront.API.request({
                  method: "PATCH",
                  endpoint: o,
                  data: e,
                })
              );
          },
        },
        {
          key: "sendOrderNote",
          value: function (t) {
            var e;
            if (!this.params.email_collection_opt_out)
              return (
                JiltStorefront.API.generateURL(
                  "orders",
                  this.params.cart_token
                ),
                (e = {
                  cart_token: this.params.cart_token,
                  note: JiltStorefront.$(t.target).val(),
                }),
                this.updateOrder(e.cart_token, e)
              );
          },
        },
        {
          key: "sendOrderData",
          value: function (t) {
            var e, o, i, n;
            if (
              !this.params.email_collection_opt_out &&
              ((n = (e = JiltStorefront.$(t.target)).val()),
              (i = e.attr("name")),
              JiltStorefront.Helpers.validateOrderData(
                e,
                this.fieldNamesForCheckout
              ) && null != (o = this.generateOrderData(i, n)))
            )
              return this.updateOrder(o.cart_token, o);
          },
        },
        {
          key: "generateOrderData",
          value: function (t, e) {
            var o, i, n, r;
            if (
              ("account_username" === t &&
                (JiltStorefront.Helpers.isValidEmail(
                  JiltStorefront.$("#billing_email").val()
                ) && (e = JiltStorefront.$("#billing_email").val()),
                (t = "billing_email")),
              "shipping_email" === t && (t = "billing_email"),
              ("billing_email" !== t ||
                JiltStorefront.Helpers.isValidEmail(e)) &&
                ((o =
                  0 === t.indexOf("billing_")
                    ? "billing_address"
                    : "shipping_address"),
                (r = t.replace("billing_", "").replace("shipping_", "")),
                null != (n = this.params.order_address_mapping[r])))
            )
              return (
                ((i = {}).cart_token = this.params.cart_token),
                (i[o] = {}),
                (i[o][n] = e),
                "billing_address" === o &&
                  ["email", "first_name", "last_name", "phone"].indexOf(n) >
                    -1 &&
                  ((i.customer = {}),
                  "email" === n &&
                    (i.customer.contact_source =
                      JiltStorefront.API.CONTACT_SOURCE_CHECKOUT),
                  (i.customer[n] = e)),
                i
              );
          },
        },
        {
          key: "sendOrderDataBeforeUnload",
          value: function () {
            var t, e, o, i, n, r, a;
            if (!this.params.email_collection_opt_out) {
              for (a in ((r = JiltStorefront.API.generateURL(
                "orders",
                this.params.cart_token
              )),
              ((e = {}).cart_token = this.params.cart_token),
              (e.customer = {}),
              (e.billing_address = {}),
              (e.shipping_address = {}),
              (i = this.params.order_address_mapping)))
                (o = i[a]),
                  (t = JiltStorefront.$("input[name=billing_" + a + "]").val()),
                  (n = JiltStorefront.$(
                    "input[name=shipping_" + a + "]"
                  ).val()),
                  "email" === a && n && ((t = t || n), (n = null)),
                  ("email" !== a ||
                    JiltStorefront.Helpers.isValidEmail(t) ||
                    ((t = JiltStorefront.$("#account_username").val()),
                    JiltStorefront.Helpers.isValidEmail(t))) &&
                    (t && (e.billing_address[o] = t),
                    ["email", "first_name", "last_name"].indexOf(o) > -1 &&
                      ("email" === o &&
                        (e.customer.contact_source =
                          JiltStorefront.API.CONTACT_SOURCE_CHECKOUT),
                      (e.customer[o] = t)),
                    n && (e.shipping_address[o] = n));
              if (
                !(
                  (JiltStorefront.$.isEmptyObject(e.customer) &&
                    JiltStorefront.$.isEmptyObject(e.billing_address) &&
                    JiltStorefront.$.isEmptyObject(e.shipping_address)) ||
                  JiltStorefront.API.sendByBeacon({
                    params: this.params,
                    url: r,
                    data: e,
                  })
                )
              )
                return JiltStorefront.API.request({
                  method: "PUT",
                  endpoint: r,
                  data: e,
                  async: !1,
                  timeout: 750,
                });
            }
          },
        },
        {
          key: "updateOrder",
          value: function (t, e) {
            var o, i;
            if (!this.params.email_collection_opt_out)
              return (
                (i = JiltStorefront.API.generateURL(
                  "orders",
                  t || this.params.cart_token
                )),
                this.params.log_threshold <= 100 &&
                  console.log({ url: i, data: e }),
                (o = "string" == typeof e ? "text/plain" : "application/json"),
                JiltStorefront.API.request({
                  method: "PUT",
                  endpoint: i,
                  data: e,
                  contentType: o,
                })
              );
          },
        },
        {
          key: "fieldNamesForCheckout",
          value: function (t) {
            return (
              -1 !== t.indexOf("billing_") ||
              -1 !== t.indexOf("shipping_") ||
              "account_username" === t
            );
          },
        },
        {
          key: "setCustomer",
          value: function (t) {
            var e,
              o,
              i,
              n = this,
              r =
                arguments.length <= 1 || arguments[1] === undefined
                  ? function () {}
                  : arguments[1];
            return (
              (i = this.params.ajax_url
                .toString()
                .replace("%%endpoint%%", "jilt_set_customer")),
              (o = {
                security: this.params.nonce,
                email: t.email,
                first_name: t.first_name,
                last_name: t.last_name,
                add_to_cart_opt_out: t.add_to_cart_opt_out,
                email_capture_opt_out: t.email_capture_opt_out,
              }),
              (e = function (t) {
                return n.params.log_threshold <= 100 && console.log(t), r();
              }),
              JiltStorefront.API.request(
                {
                  method: "POST",
                  endpoint: i,
                  data: o,
                  contentType: "application/x-www-form-urlencoded",
                  dataType: "json",
                },
                e,
                e
              )
            );
          },
        },
      ]),
      t
    );
  })());
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.EDD = (function () {
    function t(e) {
      var o,
        i = this;
      _classCallCheck(this, t),
        (this.registerEmailCollectionOptOut = this.registerEmailCollectionOptOut.bind(
          this
        )),
        (this.handleEmailBypass = this.handleEmailBypass.bind(this)),
        (this.fieldNamesForCheckout = this.fieldNamesForCheckout.bind(this)),
        (this.updateCartData = this.updateCartData.bind(this)),
        (this.updateOrder = this.updateOrder.bind(this)),
        (this.getOrdersEndpointURL = this.getOrdersEndpointURL.bind(this)),
        (this.params = e),
        null == this.params.email_collection_opt_out &&
          this.registerEmailCollectionOptOut(),
        this.params.capture_email_on_add_to_cart && this.initAddToCart(),
        this.initCartUpdateEvents(),
        this.params.cart_token &&
          (this.updateCartData("page load", !0),
          (o = JiltStorefront.$(document.body)).on(
            "focusin",
            "input, select",
            function (t) {
              return i.persistOrderData(t);
            }
          ),
          o.on("focusout", "input, select", function (t) {
            return i.sendOrderData(t);
          }),
          o.on("change", "select", function (t) {
            return i.sendOrderData(t);
          }),
          o.on("edd_gateway_loaded", function (t, e) {
            return i.sendChosenPaymentMethod(e);
          }),
          JiltStorefront.$(window).on("unload visibilitychange", function () {
            return i.sendOrderDataBeforeUnload();
          }));
    }
    return (
      _createClass(t, [
        {
          key: "registerEmailCollectionOptOut",
          value: function () {
            var t = this;
            return (
              JiltStorefront.$(document.body).on(
                "click",
                "a.js-edd-jilt-email-collection-opt-out",
                function (e) {
                  return (
                    e.preventDefault(),
                    JiltStorefront.$.ajax({
                      url: t.params.ajax_url,
                      method: "POST",
                      data: {
                        action:
                          "edd_jilt_set_customer_email_collection_opt_out",
                        security: t.params.nonce,
                        email_capture_opt_out: !0,
                      },
                      fail: function (e) {
                        if (t.params.log_threshold <= 100)
                          return console.log(e);
                      },
                      success: function (e) {
                        return (
                          t.params.log_threshold <= 100 && console.log(e),
                          JiltStorefront.$(".edd-jilt-email-usage-notice")
                            .slideToggle()
                            .remove(),
                          (t.params.email_collection_opt_out = !0)
                        );
                      },
                    })
                  );
                }
              ),
              JiltStorefront.$(
                ".edd-jilt-email-usage-notice a.dismiss-link"
              ).on("click", function () {
                return location.reload();
              })
            );
          },
        },
        {
          key: "initAddToCart",
          value: function () {
            var t = this;
            return (
              JiltStorefront.Helpers.addPopoverStyleToDOM(),
              JiltStorefront.Helpers.addPopoverToDOM(),
              JiltStorefront.$(document.body).on(
                "click.jilt_capture_email",
                ".edd-add-to-cart",
                function (e) {
                  return t.handleAddedToCart(JiltStorefront.$(e.target));
                }
              )
            );
          },
        },
        {
          key: "initCartUpdateEvents",
          value: function () {
            var t,
              e = this;
            return (
              (t = [
                "edd_quantity_updated",
                "edd_cart_item_added",
                "edd_gateway_loaded",
                "edd_checkout_error",
                "edd_cart_billing_address_updated",
                "edd_discount_applied",
                "edd_discount_invalid",
                "edd_discount_failed",
                "edd_discount_removed",
                "edd_taxes_recalculated",
              ]),
              JiltStorefront.$(document.body).on(t.join(" "), function (t) {
                return e.updateCartData(t.type);
              })
            );
          },
        },
        {
          key: "handleAddedToCart",
          value: function (t) {
            var e;
            return (
              (e =
                !(arguments.length <= 1 || arguments[1] === undefined) &&
                arguments[1]
                  ? function () {
                      return t[0].click();
                    }
                  : function () {}),
              this.initEmailCapture(t, e),
              setTimeout(function () {
                if ("function" == typeof t.webuiPopover)
                  return t.webuiPopover("show");
              }, 0)
            );
          },
        },
        {
          key: "initEmailCapture",
          value: function (t) {
            var e,
              o,
              i,
              n,
              r = this,
              a =
                arguments.length <= 1 || arguments[1] === undefined
                  ? function () {}
                  : arguments[1];
            return (
              (i = JiltStorefront.$("input.js-jilt-popover-email")),
              (e = JiltStorefront.$(".jilt-popover-email-addon")),
              (o = e.find(".js-jilt-popover-email-icon")),
              (n = e.find(".js-jilt-popover-email-typing-indicator")),
              "function" != typeof t.webuiPopover
                ? this.handleEmailBypass(null, t, a)
                : (t.webuiPopover({
                    title: JiltStorefront.Helpers.getText(
                      "Reserve this item in your cart!",
                      this.params.add_to_cart_title
                    ),
                    animation: "pop",
                    placement: "auto-bottom",
                    url: "#jilt-popover-content",
                    onShow: function () {
                      return i.focus(), e.width(e.height());
                    },
                    onHide: function () {
                      return (
                        JiltStorefront.Helpers.isValidEmail(i.val()) ||
                          t.hasClass("popover-dismissed") ||
                          r.handleEmailBypass(null, t, a),
                        t.webuiPopover("destroy")
                      );
                    },
                  }),
                  i.typeWatch({
                    callback: function (t) {
                      return t ? (o.hide(), n.show()) : (n.hide(), o.show());
                    },
                    wait: 150,
                    captureLength: 1,
                  }),
                  i.typeWatch({
                    callback: function (e) {
                      if (JiltStorefront.Helpers.isValidEmail(e))
                        return (
                          n.hide(),
                          o
                            .show()
                            .addClass("jilt-email-success")
                            .attr(
                              "src",
                              JiltStorefront.Helpers.popoverCheckmarkSrc
                            ),
                          setTimeout(function () {
                            return (
                              t.webuiPopover("hide"),
                              r.terminateAddToCart(),
                              r.setCustomer({ email: e }, a),
                              JiltStorefront.Helpers.setContactSource(
                                e,
                                JiltStorefront.API.CONTACT_SOURCE_POPOVER
                              )
                            );
                          }, 500)
                        );
                    },
                    wait: 1250,
                    highlight: !0,
                    allowSubmit: !1,
                    captureLength: 6,
                  }),
                  JiltStorefront.$(document.body).on(
                    "click",
                    ".js-jilt-popover-bypass",
                    function (e) {
                      return (
                        t.addClass("popover-dismissed"),
                        r.handleEmailBypass(e, t, a)
                      );
                    }
                  ))
            );
          },
        },
        {
          key: "handleEmailBypass",
          value: function (t, e) {
            var o,
              i =
                arguments.length <= 2 || arguments[2] === undefined
                  ? function () {}
                  : arguments[2];
            return (
              (o = { add_to_cart_opt_out: !0 }),
              null != t
                ? (t.preventDefault(),
                  JiltStorefront.$(t.target).hasClass(
                    "js-edd-jilt-email-collection-opt-out"
                  ) &&
                    ((o.email_capture_opt_out = !0),
                    (this.params.email_collection_opt_out = !0)))
                : (o.email_capture_opt_out = !1),
              "function" == typeof e.webuiPopover && e.webuiPopover("destroy"),
              this.setCustomer(
                {
                  add_to_cart_opt_out: !0,
                  email_capture_opt_out: null != t || void 0,
                },
                i
              ),
              this.terminateAddToCart()
            );
          },
        },
        {
          key: "terminateAddToCart",
          value: function () {
            return JiltStorefront.$(document.body).off(
              "click.jilt_capture_email"
            );
          },
        },
        {
          key: "persistOrderData",
          value: function (t) {
            var e;
            if (
              ((e = JiltStorefront.$(t.target)),
              JiltStorefront.Helpers.isCheckoutField(
                e,
                this.fieldNamesForCheckout
              ))
            )
              return e.val() ? e.data("jilt-value", e.val()) : void 0;
          },
        },
        {
          key: "sendChosenPaymentMethod",
          value: function (t) {
            var e, o;
            if (!this.params.email_collection_opt_out)
              return (
                (o = this.getOrdersEndpointURL()),
                (e = {
                  cart_token: this.params.cart_token,
                  client_session: { options: { gateway: t } },
                }),
                JiltStorefront.API.request({
                  method: "PATCH",
                  endpoint: o,
                  data: e,
                })
              );
          },
        },
        {
          key: "sendOrderData",
          value: function (t) {
            var e, o, i, n, r;
            if (
              !this.params.email_collection_opt_out &&
              ((r = (e = JiltStorefront.$(t.target)).val()),
              (i = e.attr("name")),
              JiltStorefront.Helpers.validateOrderData(
                e,
                this.fieldNamesForCheckout
              ) && null != (o = this.generateOrderData(i, r)))
            )
              return (
                (n = this.getOrdersEndpointURL()),
                JiltStorefront.API.request({
                  method: "PATCH",
                  endpoint: n,
                  data: o,
                })
              );
          },
        },
        {
          key: "generateOrderData",
          value: function (t, e) {
            var o, i, n;
            if (
              ("edd_email" !== t || JiltStorefront.Helpers.isValidEmail(e)) &&
              null != (i = this.params.payment_field_mapping[t])
            )
              return (
                ((o = {}).cart_token = this.params.cart_token),
                (o.billing_address = {}),
                (o.billing_address[i] = e),
                ["email", "first_name", "last_name", "phone"].indexOf(i) > -1 &&
                  ((o.customer = {}),
                  "email" === i &&
                    (o.customer.contact_source =
                      JiltStorefront.API.CONTACT_SOURCE_CHECKOUT),
                  (o.customer[i] = e)),
                (n = this.params.address_field_mapping[t]) &&
                  ((o.client_session = { customer: { address: {} } }),
                  (o.client_session.customer.address[n] = e)),
                o
              );
          },
        },
        {
          key: "sendOrderDataBeforeUnload",
          value: function () {
            var t, e, o, i, n, r, a;
            if (!this.params.email_collection_opt_out) {
              for (o in ((a = this.getOrdersEndpointURL()),
              ((e = {}).cart_token = this.params.cart_token),
              (e.customer = {}),
              (e.billing_address = {}),
              (e.shipping_address = {}),
              (e.client_session = { customer: { address: {} } }),
              (n = this.params.order_address_mapping)))
                (i = n[o]),
                  (t = JiltStorefront.$(
                    "input[name=" + o + "], select[name=" + o + "]"
                  ).val()),
                  ("edd_email" !== o ||
                    JiltStorefront.Helpers.isValidEmail(t)) &&
                    t &&
                    ((e.billing_address[i] = t),
                    (r = this.params.address_field_mapping[o]) &&
                      (e.client_session.customer.address[r] = t),
                    ["email", "first_name", "last_name"].indexOf(i) > -1 &&
                      ("email" === i &&
                        (e.customer.contact_source =
                          JiltStorefront.API.CONTACT_SOURCE_CHECKOUT),
                      (e.customer[i] = t)));
              if (
                !(
                  (JiltStorefront.$.isEmptyObject(e.customer) &&
                    JiltStorefront.$.isEmptyObject(e.billing_address)) ||
                  JiltStorefront.API.sendByBeacon({
                    params: params,
                    url: a,
                    data: e,
                  })
                )
              )
                return JiltStorefront.API.request({
                  method: "PUT",
                  endpoint: a,
                  data: e,
                  async: !1,
                  timeout: 750,
                });
            }
          },
        },
        {
          key: "fieldNamesForCheckout",
          value: function (t) {
            return (
              -1 !== t.indexOf("edd_") || this.params.payment_field_mapping[t]
            );
          },
        },
        {
          key: "setCustomer",
          value: function (t) {
            var e = this,
              o =
                arguments.length <= 1 || arguments[1] === undefined
                  ? function () {}
                  : arguments[1];
            return JiltStorefront.$.ajax({
              method: "POST",
              url: this.params.ajax_url,
              data: {
                action: "edd_jilt_set_customer",
                _ajax_nonce: this.params.nonce,
                email: t.email,
                first_name: t.first_name,
                last_name: t.last_name,
                opt_out: t.opt_out,
                add_to_cart_opt_out: t.add_to_cart_opt_out,
                email_capture_opt_out: t.email_capture_opt_out,
              },
              success: function (t) {
                return e.params.log_threshold <= 100 && console.log(t), o();
              },
              failure: function (t) {
                return e.params.log_threshold <= 100 && console.error(t), o();
              },
            });
          },
        },
        {
          key: "updateCartData",
          value: function (t) {
            var e,
              o = this,
              i =
                !(arguments.length <= 1 || arguments[1] === undefined) &&
                arguments[1];
            if (
              (this.params.log_threshold <= 100 &&
                ((e = this.update_locked ? "(Locked)" : ""),
                null == t && (t = "direct method call"),
                console.log("updateCartData() triggered by `" + t + "` " + e)),
              !this.update_locked)
            )
              return (
                (this.update_locked = !0),
                JiltStorefront.$.get(
                  this.params.ajax_url.toString() +
                    "?action=edd_jilt_get_cart_data"
                )
                  .done(function (t) {
                    if (
                      (o.params.log_threshold <= 100 && console.log(t),
                      t.success && null != t.data)
                    ) {
                      if (t.data.cart_token)
                        return (
                          (o.params.cart_token = t.data.cart_token),
                          o.params.cart_hash !== t.data.cart_hash || !0 === i
                            ? (o.updateOrder(o.params.cart_token, t.data.cart),
                              (o.params.cart_hash = t.data.cart_hash))
                            : o.params.log_threshold <= 100
                            ? console.log(
                                "updateCartData() aborted - no change in cart hash"
                              )
                            : void 0
                        );
                    } else null != t.data && t.data.message && o.params.log_threshold <= 500 && console.error("[Jilt] Could not get cart data: " + t.data.message);
                  })
                  .fail(function (t, e, i) {
                    if (o.params.log_threshold <= 500)
                      return console.error(
                        "[Jilt] Could not get cart data: " + i + " (" + e + ")"
                      );
                  })
                  .always(function () {
                    return (o.update_locked = !1);
                  })
              );
          },
        },
        {
          key: "updateOrder",
          value: function (t, e) {
            var o, i;
            return (
              (i = this.getOrdersEndpointURL()),
              this.params.log_threshold <= 100 &&
                console.log({ url: i, data: e }),
              (o = "string" == typeof e ? "text/plain" : "application/json"),
              JiltStorefront.API.request({
                method: "PUT",
                endpoint: i,
                data: e,
                contentType: o,
              })
            );
          },
        },
        {
          key: "getOrdersEndpointURL",
          value: function () {
            return this.params.orders_endpoint
              ? this.params.orders_endpoint + "/" + this.params.cart_token
              : JiltStorefront.API.generateURL(
                  "orders",
                  this.params.cart_token
                );
          },
        },
      ]),
      t
    );
  })());
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.Shopify = (function () {
    function t(e) {
      _classCallCheck(this, t),
        (this.handleEmailBypass = this.handleEmailBypass.bind(this)),
        (this.updateCartData = this.updateCartData.bind(this)),
        (this.updateCartAndRedirect = this.updateCartAndRedirect.bind(this)),
        (this.params = e),
        (this.add_to_cart_selectors =
          '#AddToCart, #AddToCart-product-template, #AddToCart--product-template, .AddToCartText, .add_to_cart, .add-to-cart, #add-to-cart, form[action^="/cart/add"] button[type="submit"]'),
        this.params.capture_email_on_add_to_cart && this.initAddToCart(),
        this.checkCartData(this.updateCartData);
    }
    return (
      _createClass(t, [
        {
          key: "initAddToCart",
          value: function () {
            var t = this;
            if (
              (JiltStorefront.$(document.body).on(
                "click.jilt_check_cart",
                this.add_to_cart_selectors,
                function () {
                  return setTimeout(function () {
                    return t.checkCartData(t.updateCartData, !1);
                  }, 1e3);
                }
              ),
              !localStorage.getItem("jilt_customer_email"))
            )
              return JiltStorefront.$(document.body).on(
                "click.jilt_capture_email",
                this.add_to_cart_selectors,
                function (e) {
                  var o;
                  return (
                    e.preventDefault(),
                    (o = JiltStorefront.$(e.currentTarget)),
                    t.handleAddedToCart(o, !0)
                  );
                }
              );
          },
        },
        {
          key: "getText",
          value: function (t, e) {
            return JiltStorefront.Helpers.getText(t, e);
          },
        },
        {
          key: "handleAddedToCart",
          value: function (t, e) {
            var o;
            if (!localStorage.getItem("jilt_customer_email"))
              return (
                JiltStorefront.Helpers.addPopoverStyleToDOM(),
                JiltStorefront.Helpers.addPopoverToDOM(),
                (o = e
                  ? function () {
                      return t[0].click();
                    }
                  : null),
                this.initEmailCapture(t, o),
                setTimeout(function () {
                  if ("function" == typeof t.webuiPopover)
                    return t.webuiPopover("show");
                }, 0)
              );
            t[0].click();
          },
        },
        {
          key: "initEmailCapture",
          value: function (t, e) {
            var o,
              i,
              n,
              r,
              a = this;
            return (
              (n = JiltStorefront.$("input.js-jilt-popover-email")),
              (o = JiltStorefront.$(".jilt-popover-email-addon")),
              (i = o.find(".js-jilt-popover-email-icon")),
              (r = o.find(".js-jilt-popover-email-typing-indicator")),
              "function" != typeof t.webuiPopover
                ? this.handleEmailBypass(null, t, e)
                : (t.webuiPopover({
                    title: this.getText("Reserve this item in your cart!"),
                    animation: "pop",
                    placement: "auto-bottom",
                    url: "#jilt-popover-content",
                    onShow: function () {
                      return (
                        t.addClass("popover-shown"),
                        n.focus(),
                        o.width(o.height())
                      );
                    },
                    onHide: function () {
                      return (
                        JiltStorefront.Helpers.isValidEmail(n.val()) ||
                          t.hasClass("popover-dismissed") ||
                          a.handleEmailBypass(null, t, e),
                        t.webuiPopover("destroy")
                      );
                    },
                  }),
                  n.typeWatch({
                    callback: function (t) {
                      return t ? (i.hide(), r.show()) : (r.hide(), i.show());
                    },
                    wait: 150,
                    captureLength: 1,
                  }),
                  n.typeWatch({
                    callback: function (o) {
                      if (JiltStorefront.Helpers.isValidEmail(o))
                        return (
                          r.hide(),
                          i
                            .show()
                            .addClass("jilt-email-success")
                            .attr(
                              "src",
                              JiltStorefront.Helpers.popoverCheckmarkSrc
                            ),
                          setTimeout(function () {
                            return (
                              t.webuiPopover("hide"),
                              a.setCustomerEmail(
                                o,
                                JiltStorefront.API.CONTACT_SOURCE_POPOVER
                              ),
                              a.terminateAddToCart(),
                              e()
                            );
                          }, 500)
                        );
                    },
                    wait: 1250,
                    highlight: !0,
                    allowSubmit: !1,
                    captureLength: 6,
                  }),
                  JiltStorefront.$(".js-jilt-popover-bypass").on(
                    "click",
                    function (o) {
                      return (
                        t.addClass("popover-dismissed"),
                        a.handleEmailBypass(o, t, e)
                      );
                    }
                  ))
            );
          },
        },
        {
          key: "handleEmailBypass",
          value: function (t, e) {
            var o =
              arguments.length <= 2 || arguments[2] === undefined
                ? function () {}
                : arguments[2];
            return (
              null != t && t.preventDefault(),
              "function" == typeof e.webuiPopover && e.webuiPopover("destroy"),
              this.terminateAddToCart(),
              this.setCustomerEmail("false"),
              o()
            );
          },
        },
        {
          key: "terminateAddToCart",
          value: function () {
            return JiltStorefront.$(document.body).off(
              "click.jilt_capture_email",
              this.add_to_cart_selectors
            );
          },
        },
        {
          key: "setCustomerEmail",
          value: function (t, e) {
            var o;
            if ((localStorage.setItem("jilt_customer_email", t), "false" !== t))
              return (
                (o = { customer: { email: t } }),
                e &&
                  (localStorage.setItem("jilt_customer_contact_source", e),
                  (o.customer.contact_source = e)),
                JiltStorefront.CustomerSession.updateCustomerSession(o)
              );
          },
        },
        {
          key: "checkCartData",
          value: function (t) {
            var e = this,
              o =
                arguments.length <= 1 ||
                arguments[1] === undefined ||
                arguments[1];
            return JiltStorefront.$.ajax({
              type: "GET",
              url: "/cart.js",
              dataType: "json",
            }).done(function (i) {
              var n;
              if (
                ((n = e.normalizeShopifyCartData(i)),
                (e.params.localCart = n),
                null != t && "function" == typeof t && t(n),
                o)
              )
                return e.regenerateCart();
            });
          },
        },
        {
          key: "updateCartData",
          value: function (t) {
            var e,
              o,
              i,
              n =
                arguments.length <= 1 || arguments[1] === undefined
                  ? function () {}
                  : arguments[1];
            return t.item_count > 0
              ? ((e = { order: t }),
                (i = localStorage.getItem("jilt_customer_email")) &&
                  ((e.customer = { email: i }),
                  (o = localStorage.getItem("jilt_customer_contact_source")) &&
                    (e.customer.contact_source = o)),
                JiltStorefront.CustomerSession.updateCustomerSession(e, n))
              : null != n && "function" == typeof n
              ? n()
              : void 0;
          },
        },
        {
          key: "regenerateCart",
          value: function () {
            var t,
              e,
              o,
              i,
              n = this;
            if (
              "" !==
              (e = JiltStorefront.Helpers.getWindowLocationSearch().substring(
                1
              ))
            )
              return null !=
                (t = JiltStorefront.Helpers.parseQueryParams(e)).jilt_cart_token
                ? (this.params.localCart.item_count > 0 && this.clearCart(),
                  (i = JiltStorefront.API.generateURL(
                    "orders",
                    t.jilt_cart_token
                  )),
                  (o = function (t) {
                    var o, i;
                    return (i = JSON.parse(t)).checkout_url
                      ? JiltStorefront.Helpers.redirect(
                          i.checkout_url + "?" + e
                        )
                      : (o = n.generateOrderData(JSON.parse(t)))
                      ? (n.addRegeneratingNotice(),
                        n.addToCart(o, function () {
                          return n.updateCartAndRedirect("/checkout?" + e);
                        }))
                      : void 0;
                  }),
                  JiltStorefront.API.request({ method: "GET", endpoint: i }, o))
                : void 0;
          },
        },
        {
          key: "generateOrderData",
          value: function (t) {
            if (t.line_items.length)
              return t.line_items.map(function (t) {
                return {
                  id: t.remote_variant_id,
                  quantity: t.quantity,
                  properties: t.properties,
                };
              });
          },
        },
        {
          key: "updateCartAndRedirect",
          value: function (t) {
            var e = this;
            return this.checkCartData(void 0, !1)
              .done(function (o) {
                return e.updateCartData(o, function () {
                  return JiltStorefront.Helpers.redirect(t);
                });
              })
              .fail(this.removeRegeneratingNotice());
          },
        },
        {
          key: "addToCart",
          value: function (t, e) {
            return JiltStorefront.$.ajax({
              type: "POST",
              url: "/cart/add.js",
              dataType: "json",
              data: { items: t },
            }).done(function () {
              return e();
            });
          },
        },
        {
          key: "clearCart",
          value: function () {
            return JiltStorefront.$.ajax({
              type: "POST",
              url: "/cart/clear.js",
              data: "json",
            });
          },
        },
        {
          key: "addRegeneratingNotice",
          value: function () {
            var t, e, o, i, n;
            return (
              ((n = document.createElement("div")).id =
                "jilt-regenerating-message"),
              (n.style =
                "text-align: center; width: 50%; height: 125px; border: 1px solid #4E7FA4; border-radius: 4px; position: fixed; top: 0; left: 0; right: 0; bottom: 0; margin: auto; background-color: #fff; padding: 20px; z-index: 2050;"),
              (i = document.createElement("div")),
              ((o = document.createElement("img")).src =
                "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzM4LjY0IDE1Ny42OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMmI1NDc1Ij48cGF0aCBkPSJtMTkzLjExIDBoMzMuMDd2MTUzLjU0aC0zMy4wN3oiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuNjggLTE3MS4xNikiPjxwYXRoIGQ9Im0yMDguNTYgMTcxLjE2djQ1LjEzbDMzLjA4LTMzLjE1di0xMnptMCAxNTMuNTRoMzMuMDh2LTEwOC42MmwtMzMuMDggMzMuMTR6Ii8+PHBhdGggZD0ibTE0Mi40MiAxNzEuMTZ2MTA0LjUxcTAgMTEtNS42MyAxNi44dC0xNS4yNyA1Ljc1YTI5LjUxIDI5LjUxIDAgMCAxIC0xOC42MS02LjIybC0yMi4yMyAyMi4yOXExNi43OCAxNC41NCA0My4zNyAxNC41NWE2Ni44MSA2Ni44MSAwIDAgMCAyMC4wOS0zIDQ4LjIyIDQ4LjIyIDAgMCAwIDE2Ljg2LTkuMiA0NC4yOSA0NC4yOSAwIDAgMCAxMS43Mi0xNS44OHE0LjM1LTkuNjcgNC4zNi0yMi43OXYtMTA2LjgxeiIvPjxwYXRoIGQ9Im00MDEuNjkgMjk4LjkzYy0uNjcuMzUtMS4zNS43LTIgMWEyMC4zOCAyMC4zOCAwIDAgMSAtOC43MyAxLjczcS02LjY2IDAtOS43Ni00LjI2dC0zLjEtMTIuMDl2LTUyLjY5aDI3Ljc5di0yNmgtMjcuODN2LTM1LjQ2aC0zMy4wNnYzNS40NWgtMTd2MjZoMTd2NTAuODdhNzYuMDUgNzYuMDUgMCAwIDAgMi4wNyAxOC40MiAzNS4yOCAzNS4yOCAwIDAgMCA2LjkzIDE0LjE2IDMyLjM3IDMyLjM3IDAgMCAwIDEyLjYzIDkuMjFxNy44IDMuMzUgMTkuMjkgMy4zNCAxOC4wNiAwIDMzLjQ1LTEyeiIvPjwvZz48L2c+PC9zdmc+"),
              (o.style = "width: 100px; height: 47px;"),
              (e = document.createElement("div")),
              ((t = document.createElement("h3")).innerHTML =
                "Hang on! Regenerating the cart for you..."),
              e.appendChild(t),
              i.appendChild(o),
              n.appendChild(i),
              n.appendChild(e),
              document.body.appendChild(n)
            );
          },
        },
        {
          key: "removeRegeneratingNotice",
          value: function () {
            var t;
            return (t = document.getElementById(
              "jilt-regenerating-message"
            )).parentNode.removeChild(t);
          },
        },
        {
          key: "normalizeShopifyCartData",
          value: function (t) {
            return (
              (t.shop_id = this.params.shop_uuid),
              (t.updated_at = new Date()),
              (t.cart_token = t.token),
              delete t.token,
              (t.line_items = t.items),
              delete t.items,
              t
            );
          },
        },
      ]),
      t
    );
  })());
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
JiltStorefront.SignupForm = (function () {
  function t(e) {
    var o = this,
      i =
        arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    _classCallCheck(this, t);
    var n = e.signup_form || {};
    "undefined" != typeof n.enabled &&
      Boolean(JSON.parse(n.enabled)) &&
      ((this.enabled = !0),
      (this.nameFieldsEnabled =
        n.name_fields_enabled &&
        !("true" !== n.name_fields_enabled.toString().toLowerCase())),
      (this.secondsDelay = n.seconds_delay),
      (this.exitIntent = n.exit_intent),
      (this.heading = this.getText("signupFormHeading", n.heading || "")),
      (this.content = this.getText("signupFormContent", n.content || "")),
      (this.tags = n.tags),
      (this.listIds = n.list_ids),
      (this.buttonColor = n.button_color),
      (this.buttonTextColor = n.button_text_color),
      (this.platform = e.platform),
      this.addFormToDOM(),
      this.addStylesToDOM(),
      this.addEventListeners(),
      -1 === document.cookie.indexOf("jilt_signup_form_shown") &&
        (this.secondsDelay &&
          !this.exitIntent &&
          window.setTimeout(function () {
            return o.displaySignupForm();
          }, 1e3 * this.secondsDelay),
        this.exitIntent &&
          window.addEventListener("mouseout", function (t) {
            return o.displaySignupFormIfOutsideBoundaries(t);
          })),
      location.search.match(/jilt-signup-form=true/) &&
        this.displaySignupForm(),
      i.onJiltSignupformLoaded && i.onJiltSignupformLoaded(this));
  }
  return (
    _createClass(t, [
      {
        key: "getText",
        value: function (t, e) {
          return JiltStorefront.Helpers.getText(t, e);
        },
      },
      {
        key: "addEventListeners",
        value: function () {
          var t = this;
          JiltStorefront.$(document.body)
            .on(
              "click.jilt_signup_form",
              ".jilt-sign-up-form__close, .jilt-sign-up-form__bypass",
              function () {
                t.hideSignupForm();
              }
            )
            .on(
              "click.jilt_signup_form",
              ".jilt-sign-up-form__overlay",
              function (e) {
                JiltStorefront.$(e.target).hasClass(
                  "jilt-sign-up-form__overlay"
                ) && t.hideSignupForm();
              }
            )
            .on(
              "keydown.jilt_signup_form",
              ".jilt-sign-up-form__overlay",
              function (e) {
                27 == e.keyCode && t.hideSignupForm();
              }
            )
            .on(
              "submit.jilt_signup_form",
              ".jilt-sign-up-form__form",
              function (e) {
                t.handleFormSubmit(e);
              }
            );
        },
      },
      {
        key: "handleFormSubmit",
        value: function (t) {
          if (
            ((this.submitting = !0),
            t.preventDefault(),
            !this.form
              .find('input[name="contact_me_by_fax_only"]')
              .is(":checked"))
          ) {
            var e = this.form.find('input[name="email"]').val().trim();
            if (!JiltStorefront.Helpers.isValidEmail(e))
              return this.form.find(".jilt-sign-up-form__error").show(), !1;
            var o = {
              customer: {
                email: e,
                accepts_marketing: !0,
                tags: this.tags,
                list_ids: this.listIds,
                consent_context: window.location.href,
                consent_notice: this.heading + " " + this.content,
                contact_source: "app_popup_01",
              },
            };
            if (this.nameFieldsEnabled) {
              var i = this.form.find('input[name="first_name"]').val().trim(),
                n = this.form.find('input[name="last_name"]').val().trim();
              i && (o.customer.first_name = i), n && (o.customer.last_name = n);
            }
            return (
              o.customer.email &&
                ("shopify" == this.platform
                  ? localStorage.setItem(
                      "jilt_customer_email",
                      o.customer.email
                    )
                  : jilt.setCustomer({
                      email: o.customer.email,
                      email_capture_opt_out: !1,
                    }),
                JiltStorefront.CustomerSession.updateCustomerSession(o)),
              this.form.find(".jilt-sign-up-form__form").hide(),
              this.form.find(".jilt-sign-up-form__success").show(),
              !1
            );
          }
        },
      },
      {
        key: "addFormToDOM",
        value: function () {
          (this.form = JiltStorefront.$(
            '<div class="jilt-sign-up-form__overlay">'
          )),
            this.form.html(this.generateMarkup()).appendTo(document.body);
        },
      },
      {
        key: "displaySignupForm",
        value: function () {
          (this.previousActiveElement = document.activeElement),
            this.form &&
              (this.form.addClass("jilt-sign-up-form__overlay--is-visible"),
              this.setSignUpFormCookie(),
              this.form.find("input").first().focus());
        },
      },
      {
        key: "setSignUpFormCookie",
        value: function () {
          var t = new Date();
          t.setTime(t.getTime() + 2592e6),
            (document.cookie =
              "jilt_signup_form_shown=true;path=/;expires=" + t.toUTCString());
        },
      },
      {
        key: "displaySignupFormIfOutsideBoundaries",
        value: function (t) {
          var e = t.relatedTarget || t.toElement,
            o = Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            );
          t.clientWidth >= o - 100 ||
            t.clientY >= 100 ||
            e ||
            this.displaySignupForm();
        },
      },
      {
        key: "hideSignupForm",
        value: function () {
          this.previousActiveElement.focus(),
            this.form && this.form.remove(),
            JiltStorefront.$(document.body).off(".jilt_signup_form");
        },
      },
      {
        key: "addStylesToDOM",
        value: function () {
          var t = this.generateStyles(),
            e = document.createElement("style");
          (e.type = "text/css"),
            e.styleSheet ? (e.styleSheet.cssText = t) : (e.innerHTML = t),
            document.head.appendChild(e);
        },
      },
      {
        key: "generateMarkup",
        value: function () {
          return (
            '\n      <div class="jilt-sign-up-form__content" role="alertdialog" aria-labelledby="jilt-sign-up-form-heading" aria-describedby="jilt-sign-up-form-heading">\n        <form class="jilt-sign-up-form__form">\n          <div class="jilt-sign-up-form__bypass"></div>\n          <h3 class="jilt-sign-up-form__heading" id="jilt-sign-up-form-heading">' +
            this.heading +
            "</h3>\n          " +
            this.contentMarkup() +
            "\n          " +
            this.nameFieldsMarkup() +
            '\n          <div class="jilt-sign-up-form__inputs">\n            <label for="jilt-sign-up-form-email">' +
            this.getText("Email") +
            '</label>\n\n            <input class="jilt-sign-up-form__input jilt-sign-up-form__input_full"\n            id="jilt-sign-up-form-email"\n            autocomplete="email"\n            type="text"\n            name="email" placeholder="' +
            this.getText("Email") +
            '" required="required" />\n          </div>\n          <p class="jilt-sign-up-form__error" style="display: none;" role="alert">' +
            this.getText("Please enter a valid email address", {
              key: "invalidEmail",
            }) +
            '</p>\n          <input type="checkbox" name="contact_me_by_fax_only" value="1" style="display:none !important" tabindex="-1" autocomplete="off">\n          <button class="jilt-sign-up-form__submit" type="submit">' +
            this.getText("Subscribe") +
            '</button>\n        </form>\n        <div class="jilt-sign-up-form__success" style="display:none;" role="alert">\n          <p>' +
            this.getText("Thanks for signing up!", {
              key: "thanksForSigningUp",
            }) +
            '</p>\n          <button class="jilt-sign-up-form__close">' +
            this.getText("Close") +
            "</button>\n        </div>\n      </div>\n    "
          );
        },
      },
      {
        key: "contentMarkup",
        value: function () {
          return this.content.length
            ? '\n      <p class="jilt-sign-up-form__description">' +
                this.content +
                "</p>\n    "
            : "";
        },
      },
      {
        key: "nameFieldsMarkup",
        value: function () {
          return this.nameFieldsEnabled
            ? '\n      <div class="jilt-sign-up-form__inputs">\n        <label for="jilt-sign-up-form-first-name">' +
                this.getText("First name", { key: "firstName" }) +
                '</label><input type="text" name="first_name"\n        autocomplete="given-name"\n        class="jilt-sign-up-form__input jilt-sign-up-form__input--half" id="jilt-sign-up-form-first-name" placeholder="' +
                this.getText("First name", { key: "firstName" }) +
                '" required="required" />\n        <label for="jilt-sign-up-form-last-name">' +
                this.getText("Last name", { key: "lastName" }) +
                '</label><input type="text" name="last_name"\n        autocomplete="family-name"\n        class="jilt-sign-up-form__input jilt-sign-up-form__input--half jilt-signup-form__inputs--last" id="jilt-sign-up-form-last-name" placeholder="' +
                this.getText("Last name") +
                '" required="required" />\n      </div>\n    '
            : "";
        },
      },
      {
        key: "generateStyles",
        value: function () {
          return (
            '\n      .jilt-sign-up-form__error {\n        color: #ff0000;\n      }\n\n      .jilt-sign-up-form__success {\n        text-align: center;\n      }\n\n      .jilt-sign-up-form__overlay {\n        background-color: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out;\n        visibility: hidden;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        z-index: 3000;\n      }\n\n      .jilt-sign-up-form__overlay--is-visible {\n        opacity: 1;\n        visibility: visible;\n      }\n\n      .jilt-sign-up-form__content {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        right: auto;\n        bottom: auto;\n        border: 0px;\n        background: rgb(255, 255, 255);\n        overflow: visible;\n        border-radius: 4px;\n        outline: none;\n        padding: 1em;\n        margin-right: -50%;\n        transform: translate(-50%, -50%);\n        height: auto;\n        min-width: 80%;\n        max-width: 600px;\n        z-index: 3000;\n      }\n\n      .jilt-sign-up-form__content label {\n        display: none;\n      }\n\n      .jilt-sign-up-form__bypass {\n        display: block;\n        position: absolute;\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        border: 2px solid #000000;\n        background: #ffffff;\n        top: -15px;\n        right: -15px;\n        cursor: pointer;\n      }\n\n      .jilt-sign-up-form__bypass:before,\n      .jilt-sign-up-form__bypass:after {\n        display: block;\n        position: absolute;\n        width: 2px;\n        height: 10px;\n        content: "";\n        background: #000000;\n        left: 50%;\n        top: 50%;\n      }\n\n      .jilt-sign-up-form__bypass:before {\n        transform: translate(-50%,-50%) rotate(45deg);\n      }\n\n      .jilt-sign-up-form__bypass:after {\n        transform: translate(-50%,-50%) rotate(-45deg);\n      }\n\n      .jilt-sign-up-form__heading {\n        font-size: 2em;\n        margin-bottom: 0.25em;\n        margin-top: 0;\n        text-align: center;\n      }\n\n      .jilt-sign-up-form__description {\n        margin-bottom: 1em;\n        margin-top: 0;\n        text-align: center;\n      }\n\n      .jilt-sign-up-form__form {\n        text-align: center;\n      }\n\n      .jilt-sign-up-form__inputs {\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        margin-bottom: .8em;\n      }\n\n      .jilt-sign-up-form__input {\n        margin-bottom: .8em;\n      }\n\n      .jilt-signup-form__inputs--last {\n        margin-bottom: 0;\n      }\n\n      .jilt-sign-up-form__input_full {\n        width: 100%;\n      }\n\n      .jilt-sign-up-form__submit, .jilt-sign-up-form__close {\n        background-color: ' +
            this.buttonColor +
            ";\n        color: " +
            this.buttonTextColor +
            ";\n        border: 0;\n        padding: .6em 1.2em;\n      }\n\n      @media only screen and (min-width: 768px) {\n        .jilt-sign-up-form__content {\n          min-width: 600px;\n        }\n\n        .jilt-sign-up-form__inputs {\n          flex-direction: row;\n        }\n\n        .jilt-sign-up-form__input--half {\n          width: 48%;\n          margin-bottom: 0;\n        }\n      }\n\n      @media only screen and (max-width: 768px) {\n        .jilt-sign-up-form__content {\n          max-width: 80%;\n        }\n      }\n    "
          );
        },
      },
    ]),
    t
  );
})();
_createClass = (function () {
  function t(t, e) {
    for (var o = 0; o < e.length; o++) {
      var i = e[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, o, i) {
    return o && t(e.prototype, o), i && t(e, i), e;
  };
})();
window.JiltStorefront || (window.JiltStorefront = {}),
  (JiltStorefront.Index = function () {
    var t = (function () {
      function t(e) {
        var o = e.params,
          i = e.customization,
          n = i === undefined ? {} : i;
        _classCallCheck(this, t),
          this.loadjQuery(),
          null != o &&
            (JiltStorefront.CustomerSession.startSession(),
            JiltStorefront.CustomerSession.identifyCustomer(),
            (window.jilt = (function () {
              switch (o.platform) {
                case "woocommerce":
                  return new window.JiltStorefront.WooCommerce(o);
                case "edd":
                  return new window.JiltStorefront.EDD(o);
                case "shopify":
                  return new window.JiltStorefront.Shopify(o);
              }
            })()),
            new JiltStorefront.SignupForm(o, n));
      }
      return (
        _createClass(t, null, [
          {
            key: "initialize",
            value: function (t) {
              var e = t.params,
                o = t.customization;
              JiltStorefront.Helpers.initialize({
                params: e,
                customization: o,
              });
            },
          },
        ]),
        _createClass(t, [
          {
            key: "loadjQuery",
            value: function () {
              var t = null,
                e = window.jQuery;
              if (null == e) {
                ((t = document.createElement("script")).src =
                  "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"),
                  (t.onload = t.onreadystatechange = function () {
                    return (
                      (e = jQuery.noConflict(!0))(t).remove(),
                      (JiltStorefront.$ = e)
                    );
                  });
                try {
                  document.body.appendChild(t);
                } catch (o) {
                  o;
                  try {
                    document.documentElement.childNodes[0].appendChild(t);
                  } catch (o) {
                    o, console.warn("Jilt.js: error loading");
                  }
                }
              }
              return (JiltStorefront.$ = e);
            },
          },
        ]),
        t
      );
    })();
    return (
      (t.params = window.jiltStorefrontParams),
      (t.customization = window.jiltStorefrontCustomization),
      t.initialize({ params: t.params, customization: t.customization }),
      t
    );
  }.call(undefined)),
  new JiltStorefront.Index({
    params: JiltStorefront.Index.params,
    customization: JiltStorefront.Index.customization,
  });