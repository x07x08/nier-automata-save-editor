"use strict";

// Docs

/** @returns {HTMLElement} */
function crel() { };
crel = undefined;

/**
 * @param {Blob} blob
 * @param {String} name
 * @param {any} opts
*/
function saveAs(blob, name, opts) { };
saveAs = undefined;

// crel.js
/*
Copyright (C) 2012 Kory Nunn
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(e => { const t = "function", n = "isNode", o = (e, t) => typeof e === t, r = (e, t) => { null !== t && (Array.isArray(t) ? t.map(t => r(e, t)) : (i[n](t) || (t = document.createTextNode(t)), e.appendChild(t))) }; function i(e, a) { let d, f, l = arguments, c = 1; if (e = i.isElement(e) ? e : document.createElement(e), o(a, "object") && !i[n](a) && !Array.isArray(a)) for (d in c++, a) f = a[d], o(d = i.attrMap[d] || d, t) ? d(e, f) : o(f, t) ? e[d] = f : e.setAttribute(d, f); for (; c < l.length; c++)r(e, l[c]); return e } i.attrMap = {}, i.isElement = (e => e instanceof Element), i[n] = (e => e instanceof Node), i.proxy = new Proxy(i, { get: (e, t) => (!(t in i) && (i[t] = i.bind(null, t)), i[t]) }), e(i, t) })((e, t) => { "object" == typeof exports ? module.exports = e : typeof define === t && define.amd ? define(() => e) : this.crel = e });

/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/
(function (a, b) { if ("function" == typeof define && define.amd) define([], b); else if ("undefined" != typeof exports) b(); else { b(), a.FileSaver = { exports: {} }.exports } })(this, function () { "use strict"; function b(a, b) { return "undefined" == typeof b ? b = { autoBom: !1 } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = { autoBom: !b }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], { type: a.type }) : a } function c(a, b, c) { var d = new XMLHttpRequest; d.open("GET", a), d.responseType = "blob", d.onload = function () { g(d.response, b, c) }, d.onerror = function () { console.error("could not download file") }, d.send() } function d(a) { var b = new XMLHttpRequest; b.open("HEAD", a, !1); try { b.send() } catch (a) { } return 200 <= b.status && 299 >= b.status } function e(a) { try { a.dispatchEvent(new MouseEvent("click")) } catch (c) { var b = document.createEvent("MouseEvents"); b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b) } } var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function () { } : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) { var i = f.URL || f.webkitURL, j = document.createElement("a"); g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () { i.revokeObjectURL(j.href) }, 4E4), setTimeout(function () { e(j) }, 0)) } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) { if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g); else if (d(f)) c(f, g, h); else { var i = document.createElement("a"); i.href = f, i.target = "_blank", setTimeout(function () { e(i) }) } } : function (b, d, e, g) { if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e); var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent); if ((j || h && i || a) && "undefined" != typeof FileReader) { var k = new FileReader; k.onloadend = function () { var a = k.result; a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null }, k.readAsDataURL(b) } else { var l = f.URL || f.webkitURL, m = l.createObjectURL(b); g ? g.location = m : location.href = m, g = null, setTimeout(function () { l.revokeObjectURL(m) }, 4E4) } }); f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g) });

// https://gitlab.com/catamphetamine/virtual-scroller

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).VirtualScroller = t() }(this, (function () { "use strict"; function e(e) { return (e % 1 == 0 ? e : e.toFixed(2)) + "px" } var t = "It looks like you're using Internet Explorer which doesn't support CSS variables required for a <tbody/> container. VirtualScroller has been switched into \"bypass\" mode (render all items). See: https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1"; function n() { return "undefined" == typeof window || !window.document.documentMode } var i = "VirtualScroller", r = "VirtualScrollerStyle"; function o(e) { return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, o(e) } function s(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function a(e, t) { if (t && ("object" === o(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function (e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) } function l(e) { var t = "function" == typeof Map ? new Map : void 0; return l = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e; var n; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) { if (t.has(e)) return t.get(e); t.set(e, i) } function i() { return u(e, arguments, f(this).constructor) } return i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), c(i, e) }, l(e) } function u(e, t, n) { return u = h() ? Reflect.construct : function (e, t, n) { var i = [null]; i.push.apply(i, t); var r = new (Function.bind.apply(e, i)); return n && c(r, n.prototype), r }, u.apply(null, arguments) } function h() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (e) { return !1 } } function c(e, t) { return c = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e }, c(e, t) } function f(e) { return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) }, f(e) } var d = function (e) { !function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && c(e, t) }(u, e); var t, n, i, r, o, l = (t = u, n = h(), function () { var e, i = f(t); if (n) { var r = f(this).constructor; e = Reflect.construct(i, arguments, r) } else e = i.apply(this, arguments); return a(this, e) }); function u(e) { var t = e.renderedElementIndex, n = e.renderedElementsCount, i = e.message; return function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u), l.call(this, i || function (e) { var t = e.renderedElementIndex, n = e.renderedElementsCount; return "Element with index ".concat(t, " was not found in the list of Rendered Item Elements in the Items Container of Virtual Scroller. There're only ").concat(n, " Elements there.") }({ renderedElementIndex: t, renderedElementsCount: n })) } return i = u, r && s(i.prototype, r), o && s(i, o), Object.defineProperty(i, "prototype", { writable: !1 }), i }(l(Error)); function m(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var g = function () { function e(t) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.getElement = t } var t, n, i; return t = e, (n = [{ key: "_getNthRenderedItemElement", value: function (e) { var t = this.getElement().childNodes; if (e > t.length - 1) throw new d({ renderedElementIndex: e, renderedElementsCount: t.length }); return t[e] } }, { key: "getNthRenderedItemTopOffset", value: function (e) { return this._getNthRenderedItemElement(e).getBoundingClientRect().top - this.getElement().getBoundingClientRect().top } }, { key: "getNthRenderedItemHeight", value: function (e) { return this._getNthRenderedItemElement(e).getBoundingClientRect().height } }, { key: "getHeight", value: function () { return this.getElement().getBoundingClientRect().height } }, { key: "clear", value: function () { for (; this.getElement().firstChild;)this.getElement().removeChild(this.getElement().firstChild) } }]) && m(t.prototype, n), i && m(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(); function p(e) { return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, p(e) } function I(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function v(e, t) { if (t && ("object" === p(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function (e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) } function y(e) { var t = "function" == typeof Map ? new Map : void 0; return y = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e; var n; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) { if (t.has(e)) return t.get(e); t.set(e, i) } function i() { return b(e, arguments, C(this).constructor) } return i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), w(i, e) }, y(e) } function b(e, t, n) { return b = S() ? Reflect.construct : function (e, t, n) { var i = [null]; i.push.apply(i, t); var r = new (Function.bind.apply(e, i)); return n && w(r, n.prototype), r }, b.apply(null, arguments) } function S() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (e) { return !1 } } function w(e, t) { return w = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e }, w(e, t) } function C(e) { return C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) }, C(e) } var O = function (e) { !function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && w(e, t) }(a, e); var t, n, i, r, o, s = (t = a, n = S(), function () { var e, i = C(t); if (n) { var r = C(this).constructor; e = Reflect.construct(i, arguments, r) } else e = i.apply(this, arguments); return v(this, e) }); function a() { return function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), s.call(this, "[virtual-scroller] Scrollable container not found") } return i = a, r && I(i.prototype, r), o && I(i, o), Object.defineProperty(i, "prototype", { writable: !1 }), i }(y(Error)); function R(e) { return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, R(e) } function H(e, t) { return H = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e }, H(e, t) } function x(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (e) { return !1 } }(); return function () { var n, i = P(e); if (t) { var r = P(this).constructor; n = Reflect.construct(i, arguments, r) } else n = i.apply(this, arguments); return T(this, n) } } function T(e, t) { if (t && ("object" === R(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function (e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) } function P(e) { return P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) }, P(e) } function j(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function E(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function L(e, t, n) { return t && E(e.prototype, t), n && E(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e } var z = function () { function e(t, n) { j(this, e), this.getElement = t, this.getItemsContainerElement = n } return L(e, [{ key: "getScrollY", value: function () { return this.getElement().scrollTop } }, { key: "scrollToY", value: function (e) { this.getElement().scrollTo ? this.getElement().scrollTo(0, e) : this.getElement().scrollTop = e } }, { key: "getWidth", value: function () { if (!this.getElement()) throw new O; return this.getElement().offsetWidth } }, { key: "getHeight", value: function () { if (!this.getElement()) throw new O; return this.getElement().offsetHeight } }, { key: "getItemsContainerTopOffset", value: function () { var e = this.getElement().getBoundingClientRect().top, t = this.getElement().clientTop; return this.getItemsContainerElement().getBoundingClientRect().top - e + this.getScrollY() - t } }, { key: "onScroll", value: function (e) { var t = this.getElement(); return t.addEventListener("scroll", e), function () { return t.removeEventListener("scroll", e) } } }, { key: "onResize", value: function (e) { var t; if ("undefined" != typeof ResizeObserver) { var n = new ResizeObserver((function (t) { t[0], e() })), i = this.getElement(); n.observe(i), t = function () { return n.unobserve(i) } } var r = B(e, { itemsContainerElement: this.getItemsContainerElement() }); return function () { t && t(), r() } } }]), e }(), M = function (e) { !function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && H(e, t) }(n, e); var t = x(n); function n(e) { return j(this, n), t.call(this, (function () { return window }), e) } return L(n, [{ key: "getScrollY", value: function () { return window.pageYOffset } }, { key: "getWidth", value: function () { return window.innerWidth } }, { key: "getHeight", value: function () { return window.innerHeight } }, { key: "getItemsContainerTopOffset", value: function () { var e = document.clientTop || document.body.clientTop || 0; return this.getItemsContainerElement().getBoundingClientRect().top + this.getScrollY() - e } }, { key: "onResize", value: function (e) { return B(e, { itemsContainerElement: this.getItemsContainerElement() }) } }]), n }(z); function B(e, t) { var n = t.itemsContainerElement, i = function () { document.fullscreenElement && !document.fullscreenElement.contains(n) || e() }; return window.addEventListener("resize", i), function () { return window.removeEventListener("resize", i) } } for (var A = "undefined" == typeof window ? global : window, k = ["moz", "webkit"], _ = "AnimationFrame", V = A["request" + _], N = A["cancel" + _] || A["cancelRequest" + _], D = 0; !V && D < k.length; D++)V = A[k[D] + "Request" + _], N = A[k[D] + "Cancel" + _] || A[k[D] + "CancelRequest" + _]; if (!V || !N) { var W = 0, F = 0, U = []; V = function (e) { if (0 === U.length) { var t = Date.now(), n = Math.max(0, 16.666666666666668 - (t - W)); W = n + t, setTimeout((function () { var e = U.slice(0); U.length = 0; for (var t = 0; t < e.length; t++)if (!e[t].cancelled) try { e[t].callback(W) } catch (e) { setTimeout((function () { throw e }), 0) } }), Math.round(n)) } return U.push({ handle: ++F, callback: e, cancelled: !1 }), F }, N = function (e) { for (var t = 0; t < U.length; t++)U[t].handle === e && (U[t].cancelled = !0) } } function Y(e) { return V.call(A, e) } function q(e, t) { var n = Date.now(), i = Y((function r() { Date.now() - n >= t ? e() : i = Y(r) })); return { clear: function () { return function () { N.apply(A, arguments) }(i) } } } function G(e) { e && e.clear() } function J(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var $ = function () { function e(t) { var n = t.getListTopOffset, i = t.onListTopOffsetChange; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.getListTopOffset = n, this.onListTopOffsetChange = i } var t, n, i; return t = e, (n = [{ key: "onListTopOffset", value: function (e) { void 0 === this.listTopOffsetInsideScrollableContainer && this.start(), this.listTopOffsetInsideScrollableContainer = e } }, { key: "start", value: function () { this._isActive = !0, this.watchListTopOffset() } }, { key: "isStarted", value: function () { return this._isActive } }, { key: "stop", value: function () { this._isActive = !1, this.watchListTopOffsetTimer && (G(this.watchListTopOffsetTimer), this.watchListTopOffsetTimer = void 0) } }, { key: "watchListTopOffset", value: function () { var e = this, t = Date.now(); !function n() { e._isActive && (void 0 !== e.listTopOffsetInsideScrollableContainer && e.getListTopOffset() !== e.listTopOffsetInsideScrollableContainer && e.onListTopOffsetChange(), Date.now() - t < 3e3 && (e.watchListTopOffsetTimer = q(n, 500))) }() } }]) && J(t.prototype, n), i && J(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), K = { createItemsContainer: function (e) { return new g(e) }, createScrollableContainer: function (e, t) { return e ? new z(e, t) : "undefined" != typeof window ? new M(t) : void 0 }, watchListTopOffset: function (e) { var t = e.getListTopOffset, n = e.onListTopOffsetChange; return new $({ getListTopOffset: t, onListTopOffsetChange: n }) } }; function Q(e) { return function (e) { if (Array.isArray(e)) return X(e) }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function (e, t) { if (!e) return; if ("string" == typeof e) return X(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t) }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function X(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, i = new Array(t); n < t; n++)i[n] = e[n]; return i } function Z() { if (ie()) { for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i]; (e = console).log.apply(e, Q(["[virtual-scroller]"].concat(n))) } } function ee() { for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i]; if (re()) return ne.apply(this, n); (e = console).warn.apply(e, Q(["[virtual-scroller]"].concat(n))) } function te() { for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i]; (e = console).error.apply(e, Q(["[virtual-scroller]"].concat(n))) } function ne() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; var i = function () { return new Error(["[virtual-scroller]"].concat(t).join(" ")) }; if ("undefined" != typeof window) te.apply(this, ["ERROR"].concat(t)), setTimeout((function () { throw i() }), 0); else { var r = oe("VirtualScrollerCatchError"); if (r) return r(i()); if (oe("VirtualScrollerThrowErrors")) throw i(); te.apply(this, ["ERROR"].concat(t)) } } function ie() { var e = oe("VirtualScrollerDebug"); if (void 0 !== e) return !0 === e || "debug" === e } function re() { return oe("VirtualScrollerWarningsAreErrors") } function oe(e) { return "undefined" != typeof window ? window[e] : "undefined" != typeof global ? global[e] : void 0 } function se(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function ae(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? se(Object(n), !0).forEach((function (t) { le(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function le(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function ue(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var he = function () { function e(t) { var n = t.bypass, i = t.getInitialEstimatedItemHeight, r = t.getInitialEstimatedVisibleItemRowsCount, o = t.measureItemsBatchSize, s = t.getPrerenderMargin, a = t.getVerticalSpacing, l = t.getVerticalSpacingBeforeResize, u = t.getColumnsCount, h = t.getColumnsCountBeforeResize, c = t.getItemHeight, f = t.getItemHeightBeforeResize, d = t.getBeforeResizeItemsCount, m = t.getAverageItemHeight, g = t.getMaxVisibleAreaHeight, p = t.getPreviouslyCalculatedLayout; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.bypass = n, this.getInitialEstimatedItemHeight = i, this.getInitialEstimatedVisibleItemRowsCount = r, this.measureItemsBatchSize = o, this.getPrerenderMargin = s, this.getVerticalSpacing = a, this.getVerticalSpacingBeforeResize = l, this.getColumnsCount = u, this.getColumnsCountBeforeResize = h, this.getItemHeight = c, this.getItemHeightBeforeResize = f, this.getBeforeResizeItemsCount = d, this.getAverageItemHeight = m, this.getMaxVisibleAreaHeight = g, this.getPreviouslyCalculatedLayout = p } var t, n, i; return t = e, n = [{ key: "getInitialLayoutValueWithFallback", value: function (e, t, n) { try { return t() } catch (t) { if (t instanceof O) return Z('Scrollable container size is not known at this point, so "'.concat(e, "\" can't be calculated yet. Default to"), n), n; throw t } } }, { key: "getInitialLayoutValues", value: function (e) { var t, n, i = this, r = e.itemsCount, o = e.columnsCount, s = e.beforeStart; if (r > 0) { var a = function () { return i.getInitialLastShownItemIndex({ itemsCount: r, columnsCount: o, firstShownItemIndex: t }) }; t = 0, n = s ? this.getInitialLayoutValueWithFallback("lastShownItemIndex", a, 0) : a() } return { beforeItemsHeight: 0, afterItemsHeight: 0, firstShownItemIndex: t, lastShownItemIndex: n } } }, { key: "getInitialLastShownItemIndex", value: function (e) { var t = e.itemsCount, n = e.columnsCount, i = e.firstShownItemIndex; if (this.bypass) return t - 1; var r = 1; if (this.getMaxVisibleAreaHeight()) r = this.getEstimatedRowsCountForHeight(this.getMaxVisibleAreaHeight() + this.getPrerenderMargin()); else if (this.getInitialEstimatedVisibleItemRowsCount && (r = this.getInitialEstimatedVisibleItemRowsCount(), isNaN(r))) throw new Error("[virtual-scroller] `getEstimatedVisibleItemRowsCount()` must return a number"); return Math.min(i + (r * n - 1), t - 1) } }, { key: "getEstimatedRowsCountForHeight", value: function (e) { var t = this.getEstimatedItemHeight(), n = this.getVerticalSpacing(); return t ? Math.ceil((e + n) / (t + n)) : 1 } }, { key: "getEstimatedItemHeight", value: function () { var e = this.getAverageItemHeight(); if (e) return e; if (this.getInitialEstimatedItemHeight) { var t = this.getInitialEstimatedItemHeight(); if (isNaN(t)) throw new Error("[virtual-scroller] `getInitialEstimatedItemHeight()` must return a number"); return t } return 0 } }, { key: "getLayoutUpdateForItemsDiff", value: function (e, t, n) { var i = e.firstShownItemIndex, r = e.lastShownItemIndex, o = e.beforeItemsHeight, s = e.afterItemsHeight, a = t.prependedItemsCount, l = t.appendedItemsCount, u = n.itemsCount, h = n.columnsCount, c = n.shouldRestoreScrollPosition, f = n.onResetGridLayout, d = this.getAverageItemHeight(), m = this.getVerticalSpacing(); if (l > 0 && (s += Math.ceil(l / h) * (m + d)), a > 0 && (i += a, r += a, o += Math.ceil(a / h) * (d + m), c && (i = 0, o = 0), a % h > 0)) { f(), ee("~ Prepended items count", a, "is not divisible by Columns Count", h, "~"), ee("Layout reset required"); var g = r - i + 1; if (i = 0, o = 0, !c && a > g) { var p = u - ((r = this.getInitialLastShownItemIndex({ itemsCount: u, columnsCount: h, firstShownItemIndex: i })) + 1); s = Math.ceil(p / h) * (m + d) } } return { beforeItemsHeight: o, afterItemsHeight: s, firstShownItemIndex: i, lastShownItemIndex: r } } }, { key: "getItemNotMeasuredIndexes", value: function (e, t) { var n = t.itemsCount, i = t.firstShownItemIndex, r = t.nonMeasuredAreaHeight, o = t.indexOfTheFirstItemInTheRow; Z("Item index", e, "height is required for calculations but hasn't been measured yet. Mark the item as \"shown\", rerender the list, measure the item's height and redo the layout."); var s = this.getColumnsCount(), a = Math.min(this.getEstimatedRowsCountForHeight(r) * s, this.measureItemsBatchSize || 1 / 0); return void 0 === i && (i = o), { firstNonMeasuredItemIndex: e, firstShownItemIndex: i, lastShownItemIndex: Math.min(o + a - 1, n - 1) } } }, { key: "getShownItemIndexes", value: function (e) { var t = e.itemsCount, n = e.visibleAreaInsideTheList, i = this._getShownItemIndex({ itemsCount: t, fromIndex: 0, visibleAreaInsideTheList: n, findFirstShownItemIndex: !0 }); if (null === i) return this.getNonVisibleListShownItemIndexes(); if (void 0 !== i.firstNonMeasuredItemIndex) return i; var r = i, o = r.firstShownItemIndex, s = r.beforeItemsHeight; return null === (i = this._getShownItemIndex({ itemsCount: t, fromIndex: o, beforeItemsHeight: s, visibleAreaInsideTheList: n, findLastShownItemIndex: !0 })) ? this.getNonVisibleListShownItemIndexes() : void 0 !== i.firstNonMeasuredItemIndex ? i : { firstShownItemIndex: o, lastShownItemIndex: i.lastShownItemIndex } } }, { key: "_getShownItemIndex", value: function (e) { var t = e.beforeResize, n = e.itemsCount, i = e.visibleAreaInsideTheList, r = e.findFirstShownItemIndex, o = e.findLastShownItemIndex, s = e.fromIndex, a = e.beforeItemsHeight; if (0 === s && (a = 0), void 0 === a) throw new Error("[virtual-scroller] `beforeItemsHeight` not passed to `Layout.getShownItemIndexes()` when starting from index " + s); if (!t) { var l = this.getBeforeResizeItemsCount(); if (l > s) { var u = this._getShownItemIndex(ae(ae({}, e), {}, { beforeResize: !0, itemsCount: l })), h = u.notFound, c = u.beforeItemsHeight, f = u.firstShownItemIndex, d = u.lastShownItemIndex; if (!h) { var m = this.getColumnsCount(); return { firstShownItemIndex: void 0 === f ? void 0 : Math.floor(f / m) * m, lastShownItemIndex: void 0 === d ? void 0 : Math.floor(d / m) * m, beforeItemsHeight: c } } a = c, s += l } } for (var g = t ? this.getColumnsCountBeforeResize() : this.getColumnsCount(), p = t ? this.getVerticalSpacingBeforeResize() : this.getVerticalSpacing(), I = s; I < n;) { for (var v = I, y = n > v + g ? p : 0, b = 0, S = 0; S < g && I < n;) { var w = t ? this.getItemHeightBeforeResize(I) : this.getItemHeight(I); if (void 0 === w) return this.getItemNotMeasuredIndexes(I, { itemsCount: n, firstShownItemIndex: o ? s : void 0, indexOfTheFirstItemInTheRow: v, nonMeasuredAreaHeight: i.bottom + this.getPrerenderMargin() - a }); b = Math.max(b, w), S++, I++ } var C = a + b, O = C > i.top - this.getPrerenderMargin(), R = C + y >= i.bottom + this.getPrerenderMargin(); if (r) { if (O) return { firstShownItemIndex: v, beforeItemsHeight: a } } else if (o && R) return { lastShownItemIndex: Math.min(v + g - 1, n - 1) }; a += b + y } return t ? { notFound: !0, beforeItemsHeight: a } : r ? (ee("The list is supposed to be visible but no visible item has been found"), null) : o ? { lastShownItemIndex: n - 1 } : void 0 } }, { key: "getNonVisibleListShownItemIndexes", value: function () { var e = { firstShownItemIndex: 0, lastShownItemIndex: 0 }; return void 0 === this.getItemHeight(0) && (e.firstNonMeasuredItemIndex = 0), e } }, { key: "getBeforeItemsHeight", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.beforeResize, i = 0, r = 0; if (!n) { var o = this.getBeforeResizeItemsCount(); o > 0 && (i = this.getBeforeItemsHeight(Math.min(e, o), { beforeResize: !0 }), r = o) } for (var s = n ? this.getColumnsCountBeforeResize() : this.getColumnsCount(), a = n ? this.getVerticalSpacingBeforeResize() : this.getVerticalSpacing(); r < e;) { for (var l = 0, u = 0; u < s;) { var h = n ? this.getItemHeightBeforeResize(r) : this.getItemHeight(r); void 0 === h && (h = this.getAverageItemHeight()), l = Math.max(l, h), r++, u++ } i += l, i += a } return i } }, { key: "getAfterItemsHeight", value: function (e, t) { for (var n = this.getColumnsCount(), i = 0, r = e + 1; r < t;) { for (var o = 0, s = 0; s < n && r < t;) { var a = this.getItemHeight(r); void 0 === a && (a = this.getAverageItemHeight()), o = Math.max(o, a), r++, s++ } i += this.getVerticalSpacing(), i += o } return i } }, { key: "getItemTopOffset", value: function (e) { for (var t = 0, n = this.getBeforeResizeItemsCount(), i = 0 === n ? 0 : Math.ceil(n / this.getColumnsCountBeforeResize()), r = e < n ? Math.floor(e / this.getColumnsCountBeforeResize()) : i, o = 0; o < r;)t += this.getItemHeightBeforeResize(o * this.getColumnsCountBeforeResize()), t += this.getVerticalSpacingBeforeResize(), o++; for (var s = Math.floor((e - n) / this.getColumnsCount()), a = 0; a < s;) { for (var l = 0, u = 0; u < this.getColumnsCount();) { var h = this.getItemHeight(n + a * this.getColumnsCount() + u); if (void 0 === h) return; l = Math.max(l, h), u++ } t += l, t += this.getVerticalSpacing(), a++ } return t } }], n && ue(t.prototype, n), i && ue(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), ce = "scroll", fe = "stopped scrolling", de = "manual", me = "started", ge = "non-measured item heights have been measured", pe = "viewport width changed", Ie = "viewport height changed", ve = "viewport size unchanged", ye = "item height changed", be = "items changed", Se = "list top offset changed"; function we(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var Ce = function () { function e(t) { var n, i, r, o = this, s = t.bypass, a = t.getWidth, l = t.getHeight, u = t.listenForResize, h = t.onResizeStart, c = t.onResizeStop, f = t.onHeightChange, d = t.onWidthChange, m = t.onNoChange; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), r = function () { if (o.isActive) { var e = o.width, t = o.height; o.width = o.getWidth(), o.height = o.getHeight(), o.width === e ? o.height === t ? o.onNoChange() : o.onHeightChange(t, o.height) : o.onWidthChange(e, o.width) } }, (i = "_onResize") in (n = this) ? Object.defineProperty(n, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[i] = r, this.bypass = s, this.onHeightChange = f, this.onWidthChange = d, this.onNoChange = m, this.getWidth = a, this.getHeight = l, this.listenForResize = u, this.onResize = function (e, t) { var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = i.onStart, o = i.onStop; return function () { for (var i = this, s = arguments.length, a = new Array(s), l = 0; l < s; l++)a[l] = arguments[l]; return new Promise((function (s) { n ? G(n) : r && r(), n = q((function () { n = void 0, o && o(), e.apply(i, a), s() }), t) })) } }(this._onResize, Oe, { onStart: h, onStop: c }) } var t, n, i; return t = e, (n = [{ key: "start", value: function () { this.isActive = !0, this.bypass || (this.width = this.getWidth(), this.height = this.getHeight(), this.unlistenResize = this.listenForResize(this.onResize)) } }, { key: "stop", value: function () { this.isActive = !1, this.width = void 0, this.height = void 0, this.unlistenResize && (this.unlistenResize(), this.unlistenResize = void 0) } }]) && we(t.prototype, n), i && we(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), Oe = 250; function Re(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function He(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? Re(Object(n), !0).forEach((function (t) { xe(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function xe(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function Te(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var Pe = function () { function e(t) { var n = t.getState, i = t.getVerticalSpacing, r = t.getColumnsCount; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.getState = n, this.getVerticalSpacing = i, this.getColumnsCount = r } var t, n, i; return t = e, n = [{ key: "initializeFromState", value: function (e) { this._includesBeforeResizeInState = Boolean(e.beforeResize) } }, { key: "cleanUpBeforeResizeItemHeights", value: function () { var e = this.getState(), t = e.firstShownItemIndex, n = e.lastShownItemIndex, i = e.itemHeights, r = e.beforeResize; if (r && t < r.itemHeights.length) { Z('~ Clean up "before resize" item heights and correct scroll position ~'); for (var o = 0, s = Math.floor(r.itemHeights.length / this.getColumnsCount()), a = Math.min(s * this.getColumnsCount() - 1, n), l = t; l <= a;) { for (var u = 0, h = 0; h < this.getColumnsCount() && l <= a;) { var c = i[l]; void 0 === c && (c = this.getAverageItemHeight()), u = Math.max(u, c), l++, h++ } o += u, o += this.getVerticalSpacing() } for (var f = 0, d = Math.min(r.itemHeights.length, n + 1), m = Math.ceil(d / r.columnsCount), g = 0 === t ? 0 : Math.floor((t - 1) / r.columnsCount) + 1; g < m;)f += r.itemHeights[g * r.columnsCount], f += r.verticalSpacing, g++; if (0 === t) Z('Drop all "before resize" item heights'); else { var p = t, I = r.itemHeights.length - 1; p === I ? Z("For item index", p, '— drop "before resize" height', r.itemHeights[p]) : Z("For item indexes from", p, "to", I, '— drop "before resize" heights', r.itemHeights.slice(p)) } return r.itemHeights.splice(t, r.itemHeights.length - t), { scrollBy: o - f, beforeResize: 0 === t ? void 0 : He({}, r) } } } }, { key: "snapshotBeforeResizeItemHeights", value: function (e) { var t = e.firstShownItemIndex, n = e.newFirstShownItemIndex; e.newColumnsCount; var i = this.getColumnsCount(), r = this.getVerticalSpacing(); this._includesBeforeResizeInState = !0; var o = this.getState(), s = o.beforeResize, a = o.itemHeights, l = s ? s.itemHeights.length : 0; if (l > 0) { if (s.columnsCount !== i || s.verticalSpacing !== r) { for (var u = 0, h = Math.ceil(l / s.columnsCount), c = 0; c < h;)u += s.itemHeights[c * s.columnsCount], u += s.verticalSpacing, c++; for (var f = 0, d = t; d < n;) { for (var m = 0, g = 0; g < i && d < n;)m = Math.max(m, a[d]), g++, d++; f += m, f += r } var p = u + f, I = Math.ceil(n / i); return new Array(n).fill(Math.max(0, p / I - r)) } return s.itemHeights.concat(je(a, n, i).slice(s.itemHeights.length)) } return je(a, n, i) } }, { key: "shouldIncludeBeforeResizeValuesInState", value: function () { return this._includesBeforeResizeInState } }], n && Te(t.prototype, n), i && Te(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(); function je(e, t, n) { e = e.slice(0, Math.ceil(t / n) * n); for (var i = 0; i * n < t;) { for (var r = 0, o = 0; o < n;)r = Math.max(r, e[i * n + o]), o++; for (o = 0; o < n;)e[i * n + o] = r, o++; i++ } return e.slice(0, t) } function Ee(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function Le(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var ze = function () { function e(t) { var n = this, i = t.bypass, r = t.scrollableContainer, o = t.itemsContainer, s = t.onScroll, a = t.initialScrollPosition, l = t.onScrollPositionChange, u = t.isImmediateLayoutScheduled, h = t.hasNonRenderedItemsAtTheTop, c = t.hasNonRenderedItemsAtTheBottom, f = t.getLatestLayoutVisibleArea, d = t.getListTopOffset, m = t.getPrerenderMargin, g = t.onScrolledToTop, p = t.waitForScrollingToStop; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Le(this, "scrollByY", (function (e) { n.scrollToY(n.getScrollY() + e) })), Le(this, "onScrollListener", (function () { if (n.onScrollPositionChange && n.onScrollPositionChange(n.getScrollY()), n.onScrolledToTop && n.getScrollY() < n.getListTopOffset() && n.onScrolledToTop(), !n.bypass && !n.ignoreScrollEvents) { n.cancelOnStopScrollingTimer(); var e = n.getLatestLayoutVisibleArea() && (n.getScrollY() < n.getLatestLayoutVisibleArea().top - n.getPrerenderMargin() && n.hasNonRenderedItemsAtTheTop() || n.getScrollY() + n.scrollableContainer.getHeight() > n.getLatestLayoutVisibleArea().bottom + n.getPrerenderMargin() && n.hasNonRenderedItemsAtTheBottom()); if (Z(e ? "The user has scrolled far enough: perform a re-layout" : "The user is scrolling: perform a re-layout when they stop scrolling"), e || !1 === n.waitForScrollingToStop) return n.onScroll(); n.isImmediateLayoutScheduled() || (n.shouldCallOnScrollListenerWhenStopsScrolling = !0, n.watchOnStopScrolling()) } })), this.bypass = i, this.scrollableContainer = r, this.itemsContainer = o, this.onScroll = s, this.initialScrollPosition = a, this.onScrollPositionChange = l, this.isImmediateLayoutScheduled = u, this.hasNonRenderedItemsAtTheTop = h, this.hasNonRenderedItemsAtTheBottom = c, this.getLatestLayoutVisibleArea = f, this.getListTopOffset = d, this.getPrerenderMargin = m, this.onScrolledToTop = g, this.waitForScrollingToStop = p } var t, n, i; return t = e, (n = [{ key: "start", value: function () { void 0 !== this.initialScrollPosition && (this.scrollToY(this.initialScrollPosition), this.initialScrollPosition = void 0), this.onScrollPositionChange && this.onScrollPositionChange(this.getScrollY()), this.stopListeningToScroll = this.scrollableContainer.onScroll(this.onScrollListener) } }, { key: "stop", value: function () { this.stopListeningToScroll(), this.stopListeningToScroll = void 0, this.shouldCallOnScrollListenerWhenStopsScrolling = void 0, this.cancelOnStopScrollingTimer() } }, { key: "scrollToY", value: function (e) { this.ignoreScrollEvents = !0, this.scrollableContainer.scrollToY(e), this.ignoreScrollEvents = void 0 } }, { key: "getScrollY", value: function () { return this.scrollableContainer.getScrollY() } }, { key: "cancelOnStopScrollingTimer", value: function () { this.onStopScrollingTimer && (G(this.onStopScrollingTimer), this.onStopScrollingTimer = void 0) } }, { key: "cancelScheduledLayout", value: function () { this.cancelOnStopScrollingTimer() } }, { key: "watchOnStopScrolling", value: function () { var e = this; this.onStopScrollingTimer = q((function () { e.onStopScrollingTimer = void 0, e.shouldCallOnScrollListenerWhenStopsScrolling && (e.shouldCallOnScrollListenerWhenStopsScrolling = void 0, e.onScroll({ delayed: !0 })) }), Me) } }, { key: "getVisibleAreaBounds", value: function () { var e = this.getScrollY(); return { top: e, bottom: e + this.scrollableContainer.getHeight() } } }]) && Ee(t.prototype, n), i && Ee(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), Me = 100; function Be(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var Ae = function () { function e(t) { var n = t.itemsContainer, i = t.getListTopOffset; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.itemsContainer = n, this.getListTopOffset = i } var t, n, i; return t = e, (n = [{ key: "snapshotListHeightBeforeAddingNewItems", value: function (e) { var t = e.previousItems, n = e.newItems, i = e.prependedItemsCount; 0 !== t.length && 0 !== i && (this._snapshot = { previousItems: t, newItems: n, itemIndex: i, itemTopOffset: this.itemsContainer.getNthRenderedItemTopOffset(0), listTopOffset: this.getListTopOffset() }) } }, { key: "getAnchorItemIndex", value: function () { return this._snapshot.itemIndex } }, { key: "hasSnapshot", value: function () { return void 0 !== this._snapshot } }, { key: "getListBottomOffsetChange", value: function () { var e = this._snapshot, t = e.itemIndex, n = e.itemTopOffset, i = e.listTopOffset; return this.itemsContainer.getNthRenderedItemTopOffset(t) - n + (this.getListTopOffset() - i) } }, { key: "reset", value: function () { this._snapshot = void 0 } }]) && Be(t.prototype, n), i && Be(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(); function ke(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } var _e = function () { function e(t) { var n = t.container; t.itemHeights; var i = t.getItemHeight, r = t.setItemHeight; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.container = n, this._get = i, this._set = r, this.reset() } var t, n, i; return t = e, n = [{ key: "reset", value: function () { this.measuredItemsHeight = 0, this.firstMeasuredItemIndex = void 0, this.lastMeasuredItemIndex = void 0 } }, { key: "readItemHeightsFromState", value: function (e) { for (var t = e.itemHeights, n = 0; n < t.length;) { if (void 0 === t[n]) { if (void 0 !== this.firstMeasuredItemIndex) { this.lastMeasuredItemIndex = n - 1; break } } else void 0 === this.firstMeasuredItemIndex && (this.firstMeasuredItemIndex = n), this.measuredItemsHeight += t[n]; n++ } } }, { key: "_measureItemHeight", value: function (e, t) { return this.container.getNthRenderedItemHeight(e - t) } }, { key: "measureItemHeights", value: function (e, t) { if (Z("~ Measure item heights ~"), void 0 !== e) { void 0 !== this.firstMeasuredItemIndex && (e > this.lastMeasuredItemIndex + 1 || t < this.firstMeasuredItemIndex - 1) && (Z("Non-measured items gap detected. Reset first and last measured item indexes."), this.reset()); for (var n = [], i = this.firstMeasuredItemIndex, r = this.lastMeasuredItemIndex, o = !1, s = e; s <= t;) { if (void 0 === this._get(s)) { n.push(s); var a = this._measureItemHeight(s, e); Z("Item index", s, "height", a), this._set(s, a), (void 0 === i || s < i) && (this.measuredItemsHeight += a, o || (this.firstMeasuredItemIndex = s, o = !0)), (void 0 === r || s > r) && (void 0 !== r && (this.measuredItemsHeight += a), this.lastMeasuredItemIndex = s) } else { var l = this._get(s), u = this._measureItemHeight(s, e); l !== u && (ee("Item index", s, "height changed unexpectedly: it was", l, "before, but now it is", u, '. Whenever an item\'s height changes for whatever reason, a developer must call `onItemHeightDidChange(i)` right after that change. If you are calling `onItemHeightDidChange(i)` correctly, then there\'re several other possible causes. For example, perhaps you forgot to persist the item\'s "state" by calling `setItemState(i, newState)` when that "state" did change, and so the item\'s "state" got lost when the item element was unmounted, which resulted in a different item height when the item was shown again with no previous "state". Or perhaps you\'re running your application in "devleopment" mode and `VirtualScroller` has initially rendered the list before your CSS styles or custom fonts have loaded, resulting in different item height measurements "before" and "after" the page has fully loaded.'), this._set(s, u)) } s++ } return n } } }, { key: "remeasureItemHeight", value: function (e, t) { var n = this._get(e), i = this._measureItemHeight(e, t); return this._set(e, i), this.measuredItemsHeight += i - n, i } }, { key: "getAverage", value: function () { return void 0 === this.lastMeasuredItemIndex ? 0 : this.measuredItemsHeight / (this.lastMeasuredItemIndex - this.firstMeasuredItemIndex + 1) } }, { key: "onPrepend", value: function (e) { void 0 !== this.firstMeasuredItemIndex && (this.firstMeasuredItemIndex += e, this.lastMeasuredItemIndex += e) } }], n && ke(t.prototype, n), i && ke(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), e }(); function Ve(e, t) { for (var n = 0; n < e.length;)e[n] = t(n), n++; return e } function Ne(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function De(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ne(Object(n), !0).forEach((function (t) { We(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function We(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function Fe(e) { var t = De({}, e); return e.itemHeights && (t.itemHeights = e.itemHeights.slice()), e.itemStates && (t.itemStates = e.itemStates.slice()), e.beforeResize && (t.beforeResize = De({}, e.beforeResize), t.beforeResize.itemHeights = e.beforeResize.itemHeights.slice()), t } function Ue(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function Ye(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ue(Object(n), !0).forEach((function (t) { qe(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function qe(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function Ge(e) { var t = this, n = e.state, i = e.getInitialItemState, r = e.onStateChange, o = e.render, s = e.items; function a() { return this.state } function l(e) { this.state = e } function u(e, t) { this.state = e, o(this.state, this.previousState), this.onRender() } function h(e) { var t = e.getInitialItemState, n = s, i = Ye(Ye({}, f.call(this, n, { beforeStart: !0 })), {}, { items: n, itemStates: Ve(new Array(n.length), (function (e) { return t(n[e]) })) }); return ie() && Z("Initial state (autogenerated)", Fe(i)), Z("First shown item index", i.firstShownItemIndex), Z("Last shown item index", i.lastShownItemIndex), i } function c(e) { return ie() && Z("Restore state", Fe(e)), function (e, t) { var n = t.columnsCount, i = e.columnsCount || 1; if (i !== n) return ee("~ Columns Count changed from", i, "to", n, "~"), !0; if (Math.floor(e.firstShownItemIndex / n) * n !== e.firstShownItemIndex) return ee("~ First Shown Item Index", e.firstShownItemIndex, "is not divisible by Columns Count", n, "~"), !0 }(e = Ye(Ye({}, e = function (e) { return e.beforeResize && 0 === e.beforeResize.itemHeights.length && (e.beforeResize = void 0), e }(e)), {}, { verticalSpacing: void 0 }), { columnsCount: this.getActualColumnsCount() }) && (ee("Reset Layout"), e = Ye(Ye({}, e), f.call(this, e.items, { beforeStart: !1 }))), e } function f(e, t) { var n = this, i = t.beforeStart, r = e.length, o = function () { return n.getActualColumnsCount() }; i ? this.layout.getInitialLayoutValueWithFallback("columnsCount", o, 1) : o(); var s = this.layout.getInitialLayoutValues({ itemsCount: r, columnsCount: this.getActualColumnsCount(), beforeStart: i }), a = s.firstShownItemIndex, l = s.lastShownItemIndex, u = s.beforeItemsHeight, h = s.afterItemsHeight, c = new Array(r); return this.onBeforeShowItems(e, c, a, l), { itemHeights: c, columnsCount: this.getActualColumnsCountForState(), verticalSpacing: this.verticalSpacing, firstShownItemIndex: a, lastShownItemIndex: l, beforeItemsHeight: u, afterItemsHeight: h } } this.onStateChange = r, this._render = o, this.getInitialItemState = i, this._setItemState = function (e, n) { ie() && (Z("~ Item state changed ~"), Z("Item index", e), Z("Previous state\n" + JSON.stringify(t.getState().itemStates[e], null, 2)), Z("New state\n" + JSON.stringify(n, null, 2))), t.getState().itemStates[e] = n, t.newItemsWillBeRendered && (t.itemStatesThatChangedWhileNewItemsWereBeingRendered || (t.itemStatesThatChangedWhileNewItemsWereBeingRendered = {}), t.itemStatesThatChangedWhileNewItemsWereBeingRendered[String(e)] = n) }, this.getState = function () { return t._getState() }, this.updateState = function (e) { ie() && (Z("~ Set state ~"), Z(Fe(e))), e.items && (t._isSettingNewItems || ne("A `stateUpdate` can only contain `items` property as a result of calling `.setItems()`")), t._isSettingNewItems = void 0, t.waitingForRender = !0, t.previousState = t.getState(), t.mostRecentSetStateValue || (t.mostRecentSetStateValue = t.getState()), t.mostRecentSetStateValue = Ye(Ye({}, t.mostRecentSetStateValue), e), t._setState(t.mostRecentSetStateValue, e) }, this.getInitialState = function () { return n ? c.call(t, n) : h.call(t, { getInitialItemState: i }) }, this.useState = function (e) { var n = e.getState, i = e.setState, r = e.updateState; if (t._isActive) throw new Error("[virtual-scroller] `VirtualScroller` has already been started"); if (t._getState) throw new Error("[virtual-scroller] Custom state storage has already been configured"); if (o) throw new Error("[virtual-scroller] Creating a `VirtualScroller` class instance with a `render()` parameter implies using the default (internal) state storage"); if (i && r) throw new Error("[virtual-scroller] When using a custom state storage, one must supply either `setState()` or `updateState()` function but not both"); if (!n || !i && !r) throw new Error("[virtual-scroller] When using a custom state storage, one must supply both `getState()` and `setState()`/`updateState()` functions"); t._usesCustomStateStorage = !0, t._getState = n, t._setState = function (e, t) { i ? i(e) : r(t) } }, this.useDefaultStateStorage = function () { if (!o) throw new Error("[virtual-scroller] When using the default (internal) state management, one must supply a `render(state, prevState)` function parameter"); t._getState = a.bind(t), t._setState = u.bind(t), l.bind(t)(t.getInitialState()) } } var Je = .9; function $e() { var e = this; function t() { var e = this.getState(), t = e.firstShownItemIndex, n = e.lastShownItemIndex; Z("~ Measure item vertical spacing ~"); var i = function (e) { var t = e.itemsContainer, n = e.renderedItemsCount; if (n > 1) for (var i = t.getNthRenderedItemTopOffset(0), r = t.getNthRenderedItemHeight(0), o = 1; o < n;) { var s = t.getNthRenderedItemTopOffset(o), a = t.getNthRenderedItemHeight(o); if (s + Je >= i + r) { var l = s - (i + r); return Math.max(0, l) } r = Math.max(r, a), o++ } }({ itemsContainer: this.itemsContainer, renderedItemsCount: n - t + 1 }); if (void 0 !== i) return Z("Item vertical spacing", i), i; Z("Not enough items rendered to measure vertical spacing") } this.getVerticalSpacing = function () { return e.verticalSpacing || 0 }, this.getVerticalSpacingBeforeResize = function () { var t = e.getState().beforeResize; return t && t.verticalSpacing || 0 }, this.measureVerticalSpacingIfNotMeasured = function () { if (void 0 === e.verticalSpacing) return e.verticalSpacing = t.call(e), e.verticalSpacing } } function Ke(e) { var t = this, n = e.getColumnsCount; if (n) { var i = { getWidth: function () { return t.scrollableContainer.getWidth() } }; this.getActualColumnsCountForState = function () { var e = n(i); if (1 !== e) return e } } else this.getActualColumnsCountForState = function () { }; this.getActualColumnsCount = function () { return t.getActualColumnsCountForState() || 1 }, this.getColumnsCount = function () { return t.getState() && t.getState().columnsCount || 1 } } function Qe(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function Xe(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? Qe(Object(n), !0).forEach((function (t) { Ze(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function Ze(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function et() { var e = this; function t(e) { var n = e.stateUpdate, o = Date.now(), s = i.call(this), a = s.firstShownItemIndex, l = s.lastShownItemIndex, u = s.shownItemsHeight, h = s.firstNonMeasuredItemIndex; if (this.listHeightMeasurement.hasSnapshot() && (l < this.listHeightMeasurement.getAnchorItemIndex() && (l = this.listHeightMeasurement.getAnchorItemIndex()), h = void 0), !r.call(this, a, l)) return Z("~ Because some of the will-be-hidden item heights (listed above) have changed since they've last been measured, redo layout. ~"), t.call(this, { stateUpdate: n }); var c = this.layout.getBeforeItemsHeight(a), f = this.layout.getAfterItemsHeight(l, this.getItemsCount()), d = Date.now() - o; Z("~ Calculated Layout" + (this.bypass ? " (bypass)" : "") + " ~"), d < tt || ee("Layout calculated in", d, "ms"), this.getColumnsCount() && Z("Columns count", this.getColumnsCount()), Z("First shown item index", a), Z("Last shown item index", l), Z("Before items height", c), Z("After items height (actual or estimated)", f), Z("Average item height (used for estimated after items height calculation)", this.itemHeights.getAverage()), ie() && (Z("Item heights", this.getState().itemHeights.slice()), Z("Item states", this.getState().itemStates.slice())), this.onBeforeShowItems(this.getState().items, this.getState().itemHeights, a, l), this.firstNonMeasuredItemIndex = h, this.previouslyCalculatedLayout = void 0 === u ? void 0 : { firstShownItemIndex: a, lastShownItemIndex: l, beforeItemsHeight: c, shownItemsHeight: u }, this.updateState(Xe({ firstShownItemIndex: a, lastShownItemIndex: l, beforeItemsHeight: c, afterItemsHeight: f }, n)) } function n() { var e = this.scroll.getVisibleAreaBounds(); this.latestLayoutVisibleArea = e; var t = this.getListTopOffsetInsideScrollableContainer(); return { top: e.top - t, bottom: e.bottom - t } } function i() { var e = this.getItemsCount(), t = n.call(this); return this.bypass ? { firstShownItemIndex: 0, lastShownItemIndex: e - 1 } : t.top < this.itemsContainer.getHeight() + this.layout.getPrerenderMargin() && t.bottom > 0 - this.layout.getPrerenderMargin() ? this.layout.getShownItemIndexes({ itemsCount: this.getItemsCount(), visibleAreaInsideTheList: t }) : (Z("The entire list is off-screen. No items are visible."), this.layout.getNonVisibleListShownItemIndexes()) } function r(e, t) { for (var n = !0, i = this.getState().firstShownItemIndex; i <= this.getState().lastShownItemIndex;) { if (i >= e && i <= t); else { var r = this.getState().itemHeights[i], a = o.call(this, i); a !== r && (n && (Z("~ Validate will-be-hidden item heights. ~"), s.call(this, i, r, a)), n = !1, ee("Item index", i, "is no longer visible and will be unmounted. Its height has changed from", r, "to", a, "since it was last measured. This is not necessarily a bug, and could happen, for example, on screen width change, or when there're several `onItemHeightDidChange(i)` calls issued at the same time, and the first one triggers a re-layout before the rest of them have had a chance to be executed.")) } i++ } return n } function o(e) { var t = this.getState().firstShownItemIndex; return this.itemHeights.remeasureItemHeight(e, t) } function s(e, t, n) { var i = this.previouslyCalculatedLayout; if (i) { var r = n - t; e < i.firstShownItemIndex ? i.beforeItemsHeight += r : e > i.lastShownItemIndex ? void 0 !== i.afterItemsHeight && (i.afterItemsHeight += r) : i.shownItemsHeight += n - t } } this.onUpdateShownItemIndexes = function (n) { var i = n.reason, r = n.stateUpdate, o = function () { r && e.updateState(r) }; return e.newItemsWillBeRendered || e.widthHasChanged || e._isResizing || 0 === e.getItemsCount() ? o() : (e.scroll.cancelScheduledLayout(), r = e.cancelLayoutTimer({ stateUpdate: r }), Z("~ Update Layout (on ".concat(i, ") ~")), void t.call(e, { stateUpdate: r })) }, this.getListTopOffsetInsideScrollableContainer = function () { var t = e.scrollableContainer.getItemsContainerTopOffset(); return e.listTopOffsetWatcher && e.listTopOffsetWatcher.onListTopOffset(t), t }, this._onItemHeightDidChange = function (t) { Z("~ On Item Height Did Change was called ~"), Z("Item index", t); var n = e.getState(), i = n.itemHeights, r = n.firstShownItemIndex, a = n.lastShownItemIndex; if (!(t >= r && t <= a)) return ee("The item is no longer rendered. This is not necessarily a bug, and could happen, for example, when when a developer calls `onItemHeightDidChange(i)` while looping through a batch of items."); var l = i[t]; if (void 0 !== l) { var u; Z("~ Re-measure item height ~"); try { u = o.call(e, t) } catch (e) { if (e instanceof d) return ne('"onItemHeightDidChange()" has been called for item index '.concat(t, " but the item is not currently rendered and can't be measured. The exact error was: ").concat(e.message)) } Z("Previous height", l), Z("New height", u), l !== u && (Z("~ Item height has changed. Should update layout. ~"), s.call(e, t, l, u), e._isActive && (e.waitingForRender ? (Z("~ Another state update is already waiting to be rendered. Delay the layout update until then. ~"), e.updateLayoutAfterRenderBecauseItemHeightChanged = !0) : e.onUpdateShownItemIndexes({ reason: ye })), e.newItemsWillBeRendered && (e.itemHeightsThatChangedWhileNewItemsWereBeingRendered || (e.itemHeightsThatChangedWhileNewItemsWereBeingRendered = {}), e.itemHeightsThatChangedWhileNewItemsWereBeingRendered[String(t)] = u)) } }, this.getPrerenderMargin = function () { return 1 * e.scrollableContainer.getHeight() }, this.onBeforeShowItems = function (t, n, i, r) { if (e.onItemInitialRender) for (var o = i; o <= r;)void 0 === n[o] && e.onItemInitialRender(t[o]), o++ }, this.measureItemHeightsAndSpacing = function () { e.itemHeights.measureItemHeights(e.getState().firstShownItemIndex, e.getState().lastShownItemIndex); var t = e.measureVerticalSpacingIfNotMeasured(); if (t && 0 !== t) return { verticalSpacing: t } }, this.cancelLayoutTimer = function (t) { var n = t.stateUpdate; return e.layoutTimer ? (G(e.layoutTimer), e.layoutTimer = void 0, n || e.layoutTimerStateUpdate ? (n = Xe(Xe({}, e.layoutTimerStateUpdate), n), e.layoutTimerStateUpdate = void 0, n) : void 0) : n }, this.scheduleLayoutTimer = function (t) { var n = t.reason, i = t.stateUpdate; e.layoutTimerStateUpdate = i, e.layoutTimer = q((function () { e.layoutTimerStateUpdate = void 0, e.layoutTimer = void 0, e.onUpdateShownItemIndexes({ reason: n, stateUpdate: i }) }), 0) } } var tt = 15; function nt(e) { return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, nt(e) } var it = Object.prototype.hasOwnProperty; function rt(e, t) { return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t } function ot(e, t) { if (rt(e, t)) return !0; if ("object" !== nt(e) || null === e || "object" !== nt(t) || null === t) return !1; var n = Object.keys(e), i = Object.keys(t); if (n.length !== i.length) return !1; for (var r = 0; r < n.length; r++)if (!it.call(t, n[r]) || !rt(e[n[r]], t[n[r]])) return !1; return !0 } function st(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function at(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? st(Object(n), !0).forEach((function (t) { lt(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function lt(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function ut() { var t = this; function n(e, t) { if (e) { var n = e.prependedItemsCount; e.appendedItemsCount; var i = this.getState(), r = i.itemHeights, o = i.itemStates; if (this.itemHeightsThatChangedWhileNewItemsWereBeingRendered) for (var s = 0, a = Object.keys(this.itemHeightsThatChangedWhileNewItemsWereBeingRendered); s < a.length; s++) { var l = a[s]; r[n + Number(l)] = this.itemHeightsThatChangedWhileNewItemsWereBeingRendered[l] } if (this.itemStatesThatChangedWhileNewItemsWereBeingRendered) for (var u = 0, h = Object.keys(this.itemStatesThatChangedWhileNewItemsWereBeingRendered); u < h.length; u++) { var c = h[u]; o[n + Number(c)] = this.itemStatesThatChangedWhileNewItemsWereBeingRendered[c] } if (0 === n) return this.previouslyCalculatedLayout && (this.previouslyCalculatedLayout.firstShownItemIndex === t.firstShownItemIndex && this.previouslyCalculatedLayout.lastShownItemIndex === t.lastShownItemIndex || (ee('Unexpected (non-matching) "firstShownItemIndex" or "lastShownItemIndex" encountered in "onRender()" after appending items'), ee("Previously calculated layout", this.previouslyCalculatedLayout), ee("New layout", t), this.previouslyCalculatedLayout = void 0)), "SEAMLESS_APPEND"; if (this.listHeightMeasurement.hasSnapshot()) { if (0 === t.firstShownItemIndex) { Z("~ Restore Scroll Position ~"); var f = this.listHeightMeasurement.getListBottomOffsetChange({ beforeItemsHeight: t.beforeItemsHeight }); return this.listHeightMeasurement.reset(), f ? (Z("Scroll down by", f), this.scroll.scrollByY(f)) : Z("Scroll position hasn't changed"), this.previouslyCalculatedLayout && (0 === this.previouslyCalculatedLayout.firstShownItemIndex && this.previouslyCalculatedLayout.lastShownItemIndex === t.lastShownItemIndex - n ? this.previouslyCalculatedLayout = { beforeItemsHeight: 0, shownItemsHeight: this.previouslyCalculatedLayout.shownItemsHeight + f, firstShownItemIndex: 0, lastShownItemIndex: t.lastShownItemIndex } : (ee('Unexpected (non-matching) "firstShownItemIndex" or "lastShownItemIndex" encountered in "onRender()" after prepending items'), ee("Previously calculated layout", this.previouslyCalculatedLayout), ee("New layout", t), this.previouslyCalculatedLayout = void 0)), "SEAMLESS_PREPEND" } ee('Unexpected "firstShownItemIndex" '.concat(t.firstShownItemIndex, ' encountered in "onRender()" after prepending items. Expected 0.')) } } this.previouslyCalculatedLayout = void 0 } function i(e) { var t = e.reason, n = e.stateUpdate; this._useTimeoutInRenderLoop ? (n = this.cancelLayoutTimer({ stateUpdate: n }), this.scheduleLayoutTimer({ reason: t, stateUpdate: n })) : this.onUpdateShownItemIndexes({ reason: t, stateUpdate: n }) } function r() { var e = Boolean(this.widthHasChanged); this.widthHasChanged = void 0; var t = void 0 !== this.firstNonMeasuredItemIndex; t && Z("Non-measured item index", this.firstNonMeasuredItemIndex), this.firstNonMeasuredItemIndex = void 0, this.newItemsWillBeRendered = void 0, this.itemHeightsThatChangedWhileNewItemsWereBeingRendered = void 0, this.itemStatesThatChangedWhileNewItemsWereBeingRendered = void 0; var n = this.updateLayoutAfterRenderBecauseItemHeightChanged; return this.updateLayoutAfterRenderBecauseItemHeightChanged = void 0, { nonMeasuredItemsHaveBeenRendered: t, itemHeightHasChanged: n, widthHasChanged: e } } this._onRender = function (o, s) { var a, l, u; t.waitingForRender = !1, Z("~ Rendered ~"), ie() && Z("State", Fe(o)), t.onStateChange && (ot(o, s) || t.onStateChange(o)), t.tbody && (a = t.getItemsContainerElement(), l = o.beforeItemsHeight, u = o.afterItemsHeight, a.style.setProperty("--VirtualScroller-paddingTop", e(l)), a.style.setProperty("--VirtualScroller-paddingBottom", e(u))), t.mostRecentSetStateValue && (ot(o, t.mostRecentSetStateValue) || (ee("The most recent state that was set", Fe(t.mostRecentSetStateValue)), ne("`VirtualScroller` has been rendered with a `state` that is not equal to the most recently set one"))); var h, c = r.call(t), f = c.nonMeasuredItemsHaveBeenRendered, d = c.itemHeightHasChanged, m = c.widthHasChanged; if (d && (h = ye), s || h) { if (f && (h = ge), m && (h = pe, t.itemHeights.reset(), t.verticalSpacing = void 0), s) { var g = s.items, p = o.items; if (p !== g) { var I = t.getItemsDiff(g, p); if (I) { var v = I.prependedItemsCount; t.itemHeights.onPrepend(v) } else t.itemHeights.reset(); m || "SEAMLESS_PREPEND" !== n.call(t, I, o) && (h = be) } } var y; if (s && (o.firstShownItemIndex !== s.firstShownItemIndex || o.lastShownItemIndex !== s.lastShownItemIndex || o.items !== s.items) || m) { var b = t.measureItemHeightsAndSpacing(); b && (y = at(at({}, y), b)) } var S = t.beforeResize.cleanUpBeforeResizeItemHeights(); if (void 0 !== S) { var w = S.scrollBy, C = S.beforeResize; Z("Correct scroll position by", w), t.scroll.scrollByY(w), y = at(at({}, y), {}, { beforeResize: C }) } t._isActive ? h ? i.call(t, { stateUpdate: y, reason: h }) : y ? t.updateState(y) : Z("~ Finished Layout ~") : t._afterRenderStateUpdateThatWasStopped = y } } } function ht() { var e = this; this.onContainerResize = function () { e.previouslyCalculatedLayout = void 0, e.listHeightMeasurement.reset(); var t = e.newItemsWillBeRendered ? e.newItemsWillBeRendered.count : e.getState().itemHeights.length, n = e.newItemsWillBeRendered ? e.newItemsWillBeRendered.layout : e.getState(), i = { scrollableContainerWidth: e.scrollableContainer.getWidth(), firstShownItemIndex: n.firstShownItemIndex, lastShownItemIndex: n.lastShownItemIndex, beforeItemsHeight: n.beforeItemsHeight, afterItemsHeight: n.afterItemsHeight, itemHeights: new Array(t), columnsCount: e.getActualColumnsCountForState(), verticalSpacing: void 0 }, r = n.firstShownItemIndex, o = n.lastShownItemIndex, s = e.getActualColumnsCount(), a = Math.floor(r / s) * s, l = Math.min(Math.ceil((o + 1) / s) * s, t) - 1; a !== r && (Z("Columns Count changed from", e.getState().columnsCount || 1, "to", s), Z("First Shown Item Index needs to change from", r, "to", a)), i.firstShownItemIndex = a, i.lastShownItemIndex = l; var u = e.getVerticalSpacing(), h = e.getColumnsCount(); e.shouldDiscardBeforeResizeItemHeights() || 0 === a ? e.beforeResize.shouldIncludeBeforeResizeValuesInState() && (i.beforeResize = void 0) : i.beforeResize = { verticalSpacing: u, columnsCount: h, itemHeights: e.beforeResize.snapshotBeforeResizeItemHeights({ firstShownItemIndex: r, newFirstShownItemIndex: a, newColumnsCount: s }) }, e.widthHasChanged = { stateUpdate: i }, e.updateState(i) }, this.shouldDiscardBeforeResizeItemHeights = function () { if (e.newItemsWillBeRendered) { var t = e.newItemsWillBeRendered, n = t.prepend, i = t.replace; return n || i } } } function ct(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function ft(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? ct(Object(n), !0).forEach((function (t) { dt(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function dt(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function mt() { var e = this; this.getItemsCount = function () { return e.getState().items.length }, this._setItems = function (t) { var n, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.getState(), s = o.items, a = e.getState(), l = a.itemStates, u = e.widthHasChanged ? e.widthHasChanged.stateUpdate : e.getState(), h = u.itemHeights; Z("~ Update items ~"); var c = e.getItemsDiff(s, t); if (c) { var f, d = e.widthHasChanged ? e.widthHasChanged.stateUpdate : e.getState(), m = d.firstShownItemIndex, g = d.lastShownItemIndex, p = d.beforeItemsHeight, I = d.afterItemsHeight, v = 0 === m && (r.preserveScrollPositionOnPrependItems || r.preserveScrollPosition), y = c.prependedItemsCount, b = c.appendedItemsCount; n = e.layout.getLayoutUpdateForItemsDiff({ firstShownItemIndex: m, lastShownItemIndex: g, beforeItemsHeight: p, afterItemsHeight: I }, { prependedItemsCount: y, appendedItemsCount: b }, { itemsCount: t.length, columnsCount: e.getActualColumnsCount(), shouldRestoreScrollPosition: v, onResetGridLayout: function () { return f = !0 } }), y > 0 && (Z("Prepend", y, "items"), h = new Array(y).concat(h), l = Ve(new Array(y), (function (n) { return e.getInitialItemState(t[n]) })).concat(l), v ? (Z("Will restore scroll position"), e.listHeightMeasurement.snapshotListHeightBeforeAddingNewItems({ previousItems: s, newItems: t, prependedItemsCount: y }), void 0 !== e.firstNonMeasuredItemIndex && (e.firstNonMeasuredItemIndex += y)) : (Z("Reset layout"), f ? (Z("Reason: Prepended items count", y, "is not divisible by Columns Count", e.getActualColumnsCount()), h = new Array(t.length)) : Z("Reason: Prepended items' heights are unknown"), n = e.layout.getInitialLayoutValues({ itemsCount: t.length, columnsCount: e.getActualColumnsCount() }), e.firstNonMeasuredItemIndex = void 0)), b > 0 && (Z("Append", b, "items"), h = h.concat(new Array(b)), l = l.concat(Ve(new Array(b), (function (n) { return e.getInitialItemState(t[y + s.length + n]) })))), i = { prepend: y > 0, append: b > 0 } } else Z("Items have changed, and", c ? "a re-layout from scratch has been requested." : "it's not a simple append and/or prepend.", "Rerender the entire list from scratch."), Z("Previous items", s), Z("New items", t), h = new Array(t.length), l = Ve(new Array(t.length), (function (n) { return e.getInitialItemState(t[n]) })), n = e.layout.getInitialLayoutValues({ itemsCount: t.length, columnsCount: e.getActualColumnsCount() }), e.firstNonMeasuredItemIndex = void 0, e.listHeightMeasurement.reset(), i = { replace: !0 }; Z("~ Update state ~"), Z("First shown item index", n.firstShownItemIndex), Z("Last shown item index", n.lastShownItemIndex), Z("Before items height", n.beforeItemsHeight), Z("After items height (actual or estimated)", n.afterItemsHeight), e.onBeforeShowItems(t, h, n.firstShownItemIndex, n.lastShownItemIndex), e.newItemsWillBeRendered = ft(ft({}, i), {}, { count: t.length, layout: n }); var S = ft(ft({}, n), {}, { items: t, itemStates: l, itemHeights: h }); e.beforeResize.shouldIncludeBeforeResizeValuesInState() && (e.shouldDiscardBeforeResizeItemHeights() ? S.beforeResize = void 0 : S.beforeResize = e.widthHasChanged ? e.widthHasChanged.stateUpdate.beforeResize : e.getState().beforeResize), e._isSettingNewItems = !0, e.updateState(S) }, this.getItemsDiff = function (t, n) { return function (e, t, n) { var i = -1, r = -1; if (e.length > 0 && (i = function (e, t, n) { for (var i = 0; i < e.length;) { if (n(e[i], t)) return i; i++ } return -1 }(t, e[0], n), i >= 0 && function (e, t, n, i) { for (var r = 0; r < e.length;) { if (t.length <= n + r || !i(t[n + r], e[r])) return !1; r++ } return !0 }(e, t, i, n) && (r = i + e.length - 1)), i >= 0 && r >= 0) return { prependedItemsCount: i, appendedItemsCount: t.length - (r + 1) } }(t, n, e.isItemEqual) } } function gt(e, i) { var r = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = o.render, a = o.state, l = o.getInitialItemState, u = void 0 === l ? function () { } : l, h = o.onStateChange, c = o.initialScrollPosition, f = o.onScrollPositionChange, d = o.scrollableContainer, m = o.measureItemsBatchSize, g = void 0 === m ? 50 : m, p = o.getColumnsCount, I = o.getItemId, v = o.tbody, y = o.estimatedItemHeight, b = o.getEstimatedVisibleItemRowsCount, S = o.onItemInitialRender, w = o.onItemFirstRender, C = o._useTimeoutInRenderLoop, O = o._waitForScrollingToStop, R = o.engine, H = o.bypass, x = o.getEstimatedItemHeight, T = o.getScrollableContainer; if (Z("~ Initialize ~"), this.engine = R || K, x || "number" != typeof y || (x = function () { return y }), !T && d && (T = function () { return d }), this.getItemsContainerElement = e, o.getState || o.setState) throw new Error("[virtual-scroller] `getState`/`setState` options usage has changed in the new version. See the readme for more details."); if (v) { if (this.engine !== K) throw new Error("[virtual-scroller] `tbody` option is only supported for DOM rendering engine"); Z("~ <tbody/> detected ~"), this.tbody = !0, n() || (Z("~ <tbody/> not supported ~"), ne(t), H = !0) } H && Z('~ "bypass" mode ~'), this.bypass = H, this._useTimeoutInRenderLoop = C, this.isItemEqual = I ? function (e, t) { return I(e) === I(t) } : function (e, t) { return e === t }, S ? this.onItemInitialRender = S : w && (this.onItemInitialRender = function (e) { ee("`onItemFirstRender(i)` is deprecated, use `onItemInitialRender(item)` instead."); var t = r.getState().items.indexOf(e); t >= 0 && w(t) }), a && (i = a.items), Z("Items count", i.length), x && Z("Estimated item height", x()), Ge.call(this, { state: a, getInitialItemState: u, onStateChange: h, render: s, items: i }), $e.call(this), Ke.call(this, { getColumnsCount: p }), et.call(this), ut.call(this), ht.call(this), mt.call(this), pt.call(this, { getScrollableContainer: T, getEstimatedItemHeight: x, getEstimatedVisibleItemRowsCount: b, measureItemsBatchSize: g, initialScrollPosition: c, onScrollPositionChange: f, waitForScrollingToStop: O }), a && (this.itemHeights.readItemHeightsFromState(a), this.beforeResize.initializeFromState(a)) } function pt(e) { var t = this, n = e.getScrollableContainer, i = e.getEstimatedItemHeight, r = e.getEstimatedVisibleItemRowsCount, o = e.measureItemsBatchSize, s = e.initialScrollPosition, a = e.onScrollPositionChange, l = e.waitForScrollingToStop; this.itemsContainer = this.engine.createItemsContainer(this.getItemsContainerElement), this.getItemsContainerElement() && this.itemsContainer.clear(), this.scrollableContainer = this.engine.createScrollableContainer(n, this.getItemsContainerElement), this.itemHeights = new _e({ container: this.itemsContainer, getItemHeight: function (e) { return t.getState().itemHeights[e] }, setItemHeight: function (e, n) { return t.getState().itemHeights[e] = n } }), this.layout = new he({ bypass: this.bypass, getInitialEstimatedItemHeight: i, getInitialEstimatedVisibleItemRowsCount: r, measureItemsBatchSize: o, getPrerenderMargin: function () { return t.getPrerenderMargin() }, getVerticalSpacing: function () { return t.getVerticalSpacing() }, getVerticalSpacingBeforeResize: function () { return t.getVerticalSpacingBeforeResize() }, getColumnsCount: function () { return t.getColumnsCount() }, getColumnsCountBeforeResize: function () { return t.getState().beforeResize && t.getState().beforeResize.columnsCount }, getItemHeight: function (e) { return t.getState().itemHeights[e] }, getItemHeightBeforeResize: function (e) { return t.getState().beforeResize && t.getState().beforeResize.itemHeights[e] }, getBeforeResizeItemsCount: function () { return t.getState().beforeResize ? t.getState().beforeResize.itemHeights.length : 0 }, getAverageItemHeight: function () { return t.itemHeights.getAverage() }, getMaxVisibleAreaHeight: function () { return t.scrollableContainer && t.scrollableContainer.getHeight() }, getPreviouslyCalculatedLayout: function () { return t.previouslyCalculatedLayout } }), this.scrollableContainerResizeHandler = new Ce({ bypass: this.bypass, getWidth: function () { return t.scrollableContainer.getWidth() }, getHeight: function () { return t.scrollableContainer.getHeight() }, listenForResize: function (e) { return t.scrollableContainer.onResize(e) }, onResizeStart: function () { Z("~ Scrollable container resize started ~"), t._isResizing = !0 }, onResizeStop: function () { Z("~ Scrollable container resize finished ~"), t._isResizing = void 0 }, onNoChange: function () { t.onUpdateShownItemIndexes({ reason: ve }) }, onHeightChange: function () { return t.onUpdateShownItemIndexes({ reason: Ie }) }, onWidthChange: function (e, n) { Z("~ Scrollable container width changed from", e, "to", n, "~"), t.onContainerResize() } }), this.scroll = new ze({ bypass: this.bypass, scrollableContainer: this.scrollableContainer, itemsContainer: this.itemsContainer, waitForScrollingToStop: l, onScroll: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.delayed; t.onUpdateShownItemIndexes({ reason: n ? fe : ce }) }, initialScrollPosition: s, onScrollPositionChange: a, isImmediateLayoutScheduled: function () { return Boolean(t.layoutTimer) }, hasNonRenderedItemsAtTheTop: function () { return t.getState().firstShownItemIndex > 0 }, hasNonRenderedItemsAtTheBottom: function () { return t.getState().lastShownItemIndex < t.getItemsCount() - 1 }, getLatestLayoutVisibleArea: function () { return t.latestLayoutVisibleArea }, getListTopOffset: this.getListTopOffsetInsideScrollableContainer, getPrerenderMargin: function () { return t.getPrerenderMargin() } }), this.listHeightMeasurement = new Ae({ itemsContainer: this.itemsContainer, getListTopOffset: this.getListTopOffsetInsideScrollableContainer }), this.engine.watchListTopOffset && (this.listTopOffsetWatcher = this.engine.watchListTopOffset({ getListTopOffset: this.getListTopOffsetInsideScrollableContainer, onListTopOffsetChange: function (e) { return e.reason, t.onUpdateShownItemIndexes({ reason: Se }) } })), this.beforeResize = new Pe({ getState: this.getState, getVerticalSpacing: this.getVerticalSpacing, getColumnsCount: this.getColumnsCount }) } function It(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function vt(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? It(Object(n), !0).forEach((function (t) { St(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function yt(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function bt(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function St(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var wt = function () { function e(t, n) { var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; yt(this, e), St(this, "stop", (function () { if (!i._isActive) throw new Error("[virtual-scroller] Can't stop a `VirtualScroller` that hasn't been started"); i._isActive = !1, Z("~ Stop ~"), i.scrollableContainerResizeHandler.stop(), i.scroll.stop(), i.listTopOffsetWatcher && i.listTopOffsetWatcher.isStarted() && i.listTopOffsetWatcher.stop(), i.cancelLayoutTimer({}) })), St(this, "updateLayout", (function () { i.hasToBeStarted(), i.onUpdateShownItemIndexes({ reason: de }) })), St(this, "onRender", (function () { i._onRender(i.getState(), i.previousState) })), gt.call(this, t, n, r) } var t, n, o; return t = e, n = [{ key: "start", value: function () { if (this._isActive) throw new Error("[virtual-scroller] `VirtualScroller` has already been started"); var e = !1 === this._isActive; e || (this.waitingForRender = !0, this._usesCustomStateStorage || this.useDefaultStateStorage(), this._render && this._render(this.getState())), Z(e ? "~ Start (restart) ~" : "~ Start ~"), this._isActive = !0, this.listHeightMeasurement.reset(), this._isResizing = void 0, this._isSettingNewItems = void 0, this.tbody && (this.getItemsContainerElement().classList.contains(i) && Boolean(document.getElementById(r)) || function (e) { e.classList.add(i); var t = document.createElement("style"); t.id = r, t.innerText = "\n\t\ttbody.".concat(i, ":before {\n\t\t\tcontent: '';\n\t\t\tdisplay: table-row;\n\t\t\theight: var(--VirtualScroller-paddingTop);\n\t\t}\n\t\ttbody.").concat(i, ":after {\n\t\t\tcontent: '';\n\t\t\tdisplay: table-row;\n\t\t\theight: var(--VirtualScroller-paddingBottom);\n\t\t}\n\t").replace(/[\n\t]/g, ""), document.head.appendChild(t) }(this.getItemsContainerElement())); var t = this._afterRenderStateUpdateThatWasStopped; this._afterRenderStateUpdateThatWasStopped = void 0, this.verticalSpacing = void 0; var n = this.measureItemHeightsAndSpacing(); if (n && (t = vt(vt({}, t), n)), this.scrollableContainerResizeHandler.start(), this.scroll.start(), void 0 === this.getState().scrollableContainerWidth) { var o = this.scrollableContainer.getWidth(); t = vt(vt({}, t), {}, { scrollableContainerWidth: o }) } else { var s = this.scrollableContainer.getWidth(), a = this.getState().scrollableContainerWidth; if (s !== a) return Z("~ Scrollable container width changed from", a, "to", s, "~"), this.onContainerResize() } if (this._usesCustomStateStorage && this.getActualColumnsCount() !== (this.getState().columnsCount || 1)) return this.onContainerResize(); this.onUpdateShownItemIndexes({ reason: me, stateUpdate: t }) } }, { key: "hasToBeStarted", value: function () { if (!this._isActive) throw new Error("[virtual-scroller] `VirtualScroller` hasn't been started") } }, { key: "getItemScrollPosition", value: function (e) { var t = this.layout.getItemTopOffset(e); if (void 0 !== t) return this.getListTopOffsetInsideScrollableContainer() + t } }, { key: "onItemHeightChange", value: function (e) { ee("`.onItemHeightChange(i)` method was renamed to `.onItemHeightDidChange(i)`"), this.onItemHeightDidChange(e) } }, { key: "onItemHeightDidChange", value: function (e) { this._onItemHeightDidChange(e) } }, { key: "setItemState", value: function (e, t) { this._setItemState(e, t) } }, { key: "onItemStateChange", value: function (e, t) { this.setItemState(e, t) } }, { key: "setItems", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return this.hasToBeStarted(), this._setItems(e, t) } }], n && bt(t.prototype, n), o && bt(t, o), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), Ct = ["onMount", "onItemUnmount"]; function Ot(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); t && (i = i.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i) } return n } function Rt(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ot(Object(n), !0).forEach((function (t) { Pt(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function Ht(e, t) { if (null == e) return {}; var n, i, r = function (e, t) { if (null == e) return {}; var n, i, r = {}, o = Object.keys(e); for (i = 0; i < o.length; i++)n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]); return r }(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (i = 0; i < o.length; i++)n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) } return r } function xt(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function Tt(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } function Pt(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var jt = function () { function t(n, i, r) { var o = this, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; xt(this, t), Pt(this, "render", (function (t, n) { var i = t.items, r = t.firstShownItemIndex, s = t.lastShownItemIndex, a = t.beforeItemsHeight, l = t.afterItemsHeight; o.tbody || (o.container.style.paddingTop = e(a), o.container.style.paddingBottom = e(l)); var u = n && i === n.items && i.length > 0; if (u) for (var h = n.lastShownItemIndex; h >= n.firstShownItemIndex;)h >= r && h <= s || (Z("DOM: Remove element for item index", h), o.unmountItem(o.container.childNodes[h - n.firstShownItemIndex])), h--; else for (Z("DOM: Rerender the list from scratch"); o.container.firstChild;)o.unmountItem(o.container.firstChild); for (var c = u, f = c && o.container.firstChild, d = r; d <= s;) { if (u && d >= n.firstShownItemIndex && d <= n.lastShownItemIndex) c && (c = !1); else { var m = o.renderItem(i[d]); c ? (Z("DOM: Prepend element for item index", d), o.container.insertBefore(m, f)) : (Z("DOM: Append element for item index", d), o.container.appendChild(m)) } d++ } })), Pt(this, "onUnmount", (function () { ee("`.onUnmount()` instance method name is deprecated, use `.stop()` instance method name instead."), o.stop() })), Pt(this, "destroy", (function () { ee("`.destroy()` instance method name is deprecated, use `.stop()` instance method name instead."), o.stop() })), Pt(this, "stop", (function () { o.virtualScroller.stop() })), Pt(this, "start", (function () { o.virtualScroller.start() })), this.container = n, this.renderItem = r; var a = s.onMount, l = s.onItemUnmount, u = Ht(s, Ct); this.onItemUnmount = l, this.tbody = "TBODY" === this.container.tagName, this.virtualScroller = new wt((function () { return o.container }), i, Rt(Rt({}, u), {}, { render: this.render, tbody: this.tbody })), this.start(), a && a() } var n, i, r; return n = t, i = [{ key: "unmountItem", value: function (e) { this.container.removeChild(e), this.onItemUnmount && this.onItemUnmount(e) } }, { key: "onItemHeightChange", value: function (e) { ee("`.onItemHeightChange(i)` method was renamed to `.onItemHeightDidChange(i)`"), this.onItemHeightDidChange(e) } }, { key: "onItemHeightDidChange", value: function (e) { this.virtualScroller.onItemHeightDidChange(e) } }, { key: "setItemState", value: function (e, t) { this.virtualScroller.setItemState(e, t) } }, { key: "updateItems", value: function (e, t) { ee("`.updateItems()` method was renamed to `.setItems(i)`"), this.setItems(e, t) } }, { key: "setItems", value: function (e, t) { this.virtualScroller.setItems(e, t) } }], i && Tt(n.prototype, i), r && Tt(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), t }(); return jt }));

const TypedArray = Object.getPrototypeOf(Uint8Array);

function FixedSizeSaveFile(size, data) {
	return {
		__proto__: FixedSizeSaveFile.prototype,
		size: size,
		/** @type DataView */
		data: data,
	};
}

function GetTypedValue(data, type, pos, littleEndian = false) {
	switch (type) {
		case Uint8Array:
			return data.getUint8(pos);

		case Uint8ClampedArray:
			return data.getUint8(pos);

		case Uint16Array:
			return data.getUint16(pos, littleEndian);

		case Uint32Array:
			return data.getUint32(pos, littleEndian);

		case Int8Array:
			return data.getInt8(pos);

		case Int16Array:
			return data.getInt16(pos, littleEndian);

		case Int32Array:
			return data.getInt32(pos, littleEndian);

		case Float32Array:
			return data.getFloat32(pos, littleEndian);

		case Float64Array:
			return data.getFloat64(pos, littleEndian);

		case BigUint64Array:
			return data.getBigUint64(pos, littleEndian);

		case BigInt64Array:
			return data.getBigInt64(pos, littleEndian);

		default:
			return null;
	}
}

function SetTypedValue(data, type, pos, val, littleEndian = false) {
	switch (type) {
		case Uint8Array:
			data.setUint8(pos, val);

			break;

		case Uint8ClampedArray:
			data.setUint8(pos, val);

			break;

		case Uint16Array:
			data.setUint16(pos, val, littleEndian);

			break;

		case Uint32Array:
			data.setUint32(pos, val, littleEndian);

			break;

		case Int8Array:
			data.setInt8(pos, val);

			break;

		case Int16Array:
			data.setInt16(pos, val, littleEndian);

			break;

		case Int32Array:
			data.setInt32(pos, val, littleEndian);

			break;

		case Float32Array:
			data.setFloat32(pos, val, littleEndian);

			break;

		case Float64Array:
			data.setFloat64(pos, val, littleEndian);

			break;

		case BigUint64Array:
			data.setBigUint64(pos, val, littleEndian);

			break;

		case BigInt64Array:
			data.setBigInt64(pos, val, littleEndian);

			break;

		default:
			return;
	}
}

function CheckboxUpdateCall() {
	CheckboxUpdate(this);
}

function CheckboxUpdate(encValue) {
	encValue.elem.checked = !!encValue.value;
}

function CheckboxChange(event) {
	const checked = !!event.target.checked;

	event.target.parentEncodedValue.value = checked;

	event.target.parentEncodedValue.update();
}

function BasicChange(event) {
	const val = Number(event.target.value);

	event.target.parentEncodedValue.value = val;

	event.target.parentEncodedValue.update();
}

function BasicInit(encValue, changeFunc) {
	if (encValue.elem) {
		encValue.elem.parentEncodedValue = encValue;

		encValue.elem.addEventListener("change", changeFunc);
	}
}

function BasicUpdate(encValue) {
	if (encValue.elem) {
		encValue.elem.value = encValue.value;
	}
}

function EncodedValue(
	fs,
	type,
	pos,
	length = 1,
	prev = undefined,
	littleEndian = true,
	elem = undefined,
) {
	return {
		__proto__: EncodedValue.prototype,
		fs: fs,
		type: type,
		length: length,
		pos: prev == undefined ? pos : prev.pos + prev.type.BYTES_PER_ELEMENT * prev.length,
		littleEndian: littleEndian,
		/** @type {HTMLElement}*/
		elem: elem,

		init() {
			BasicInit(this, BasicChange);
		},

		update() {
			BasicUpdate(this);
		},

		get value() {
			if (!this.fs.data) return null;

			if ((this.length > 1) && (this.type.prototype instanceof TypedArray)) {
				return new this.type(this.fs.data.buffer.slice(this.pos, this.pos + this.length));
			}

			if (this.type.prototype instanceof TypedArray) {
				return GetTypedValue(this.fs.data, this.type, this.pos, this.littleEndian);
			} else {
				switch (this.type) {
					case String:
						return this._value;
				}
			}
		},

		set value(val) {
			if (!this.fs.data) return;

			if (((this.length > 1) && (this.type.prototype instanceof TypedArray))
				&& ((val.prototype instanceof TypedArray) || Array.isArray(val))) {
				const lowest = Math.min(this.length, val.length);

				for (let index = 0; index < lowest; index++) {
					SetTypedValue(this.fs.data, this.type, this.pos + index, val[index], this.littleEndian);
				}

				return;
			}

			if (this.type.prototype instanceof TypedArray) {
				SetTypedValue(this.fs.data, this.type, this.pos, val, this.littleEndian);
			} else {
				switch (this.type) {
					case String:
						this._value = new TextDecoder().decode(val);
						this._value = this._value.slice(0, this._value.indexOf(NULL));

						break;
				}
			}
		},
	};
}

function CustomEncodedValue(
	getter,
	setter,
	fs,
	type,
	pos,
	length = 1,
	prev = undefined,
	littleEndian = true,
	elem = undefined,
) {
	const obj = {
		__proto__: EncodedValue.prototype,
		fs: fs,
		type: type,
		length: length,
		pos: prev == undefined ? pos : prev.pos + prev.type.BYTES_PER_ELEMENT * prev.length,
		littleEndian: littleEndian,
		/** @type {HTMLElement}*/
		elem: elem,
	};

	Object.defineProperty(obj, "value", {
		get: getter,
		set: setter,
	});

	return obj;
}

const levelLimits = {
	1: 0, 2: 48, 3: 139, 4: 294, 5: 525, 6: 843, 7: 1259, 8: 1782, 9: 2421, 10: 3184, 11: 4080, 12: 5116, 13: 6300, 14: 7638, 15: 9139, 16: 10809, 17: 12654, 18: 14682, 19: 16898, 20: 19309, 21: 21920, 22: 24739, 23: 27770, 24: 31019, 25: 34493, 26: 38196, 27: 42134, 28: 46312, 29: 50736, 30: 55412, 31: 60343, 32: 65536, 33: 70994, 34: 76724, 35: 82730, 36: 89017, 37: 95590, 38: 102453, 39: 109611, 40: 117070, 41: 124832, 42: 132904, 43: 141288, 44: 149991, 45: 159016, 46: 168368, 47: 178051, 48: 188068, 49: 198426, 50: 209127, 51: 220177, 52: 231578, 53: 243336, 54: 255454, 55: 267937, 56: 280788, 57: 294011, 58: 307611, 59: 321591, 60: 335956, 61: 350709, 62: 365854, 63: 381395, 64: 397336, 65: 413680, 66: 430431, 67: 447594, 68: 465171, 69: 483167, 70: 501585, 71: 520429, 72: 539702, 73: 559408, 74: 579552, 75: 600135, 76: 621162, 77: 642637, 78: 664562, 79: 686942, 80: 709780, 81: 733079, 82: 756843, 83: 781075, 84: 805779, 85: 830958, 86: 856615, 87: 882754, 88: 909379, 89: 936491, 90: 964096, 91: 992196, 92: 1020794, 93: 1049894, 94: 1079499, 95: 1109612, 96: 1140237, 97: 1171376, 98: 1203033, 99: 1235211
};

const itemsArraySize = 256;
const itemSize = 12;
const weaponsSize = 20;
const chipSize = 32 + 16;

const ItemStatus = {
	Active: 0x00070000,
	Inactive: -1,
};

function ItemListElement(labelText, type, list = "") {
	let label = crel("span");
	label.innerText = labelText;

	const div = crel("div", { class: "hoverable" });
	const input = crel("input", { type: type, list: list, name: "stfu" });
	initInput(input);
	initHoverable(div);

	return {
		final: crel("div", { class: "status-entry" },
			label,
			crel(div, input)
		),
		input: input,
	};
}

function Item() {
	return {
		__proto__: Item.prototype,
		id: undefined,
		status: undefined,
		quantity: undefined,

		get name() {
			const knownItem = knownItemsList[this.id.value];

			if (knownItem) {
				return knownItem;
			} else {
				return (this.id.value != -1) ? "Unknown" : "Undefined";
			}
		},

		add() {
			const mainObj = this;

			const listContents = crel("div", { class: "list-contents" });

			const buttonText = crel("span", { class: "hoverable-content" });
			buttonText.innerText = this.name;

			let retElem = ItemListElement("ID :", "text", "inventoryList");

			crel(listContents, retElem.final);

			this.id.elem = retElem.input;
			this.id.elem.parentEncodedValue = this.id;
			this.id.elem.addEventListener("change", BasicChange);

			this.id.update = function () {
				const val = this.value;

				BasicUpdate(this);

				if ((val == null) || (val == undefined)) return;

				buttonText.innerText = mainObj.name;
			};

			retElem = ItemListElement("Status :", "checkbox");

			crel(listContents, retElem.final);

			this.status.elem = retElem.input;
			this.status.elem.parentEncodedValue = this.status;

			this.status.update = function () {
				this.elem.checked = (this.value == ItemStatus.Active);
			};

			this.status.elem.addEventListener("change", function (event) {
				const checked = event.target.checked ? ItemStatus.Active : ItemStatus.Inactive;

				event.target.parentEncodedValue.value = checked;

				event.target.parentEncodedValue.update();
			});

			retElem = ItemListElement("Quantity :", "number");

			crel(listContents, retElem.final);

			this.quantity.elem = retElem.input;
			this.quantity.elem.parentEncodedValue = this.quantity;
			this.quantity.elem.addEventListener("change", BasicChange);

			const buttonElem = crel("button", { class: "hoverable selectable expandable" });
			//buttonElem.dataset.groupId = "itemsList";

			initHoverable(buttonElem);

			crel(buttonElem, buttonText);
			initList(buttonElem, undefined, listContents);

			initSelectable(buttonElem, true);

			this.elem = buttonElem;

			this.id.update();
			this.status.update();
			this.quantity.update();
		},

		read(fs, pos) {
			this.id = EncodedValue(fs, Int32Array, pos);
			this.status = EncodedValue(fs, Int32Array, undefined, undefined, this.id);
			this.quantity = EncodedValue(fs, Int32Array, undefined, undefined, this.status);
		}
	};
}

const knownItemsList = {
	0x00000000: "Small Recovery",
	0x00000001: "Medium Recovery",
	0x00000002: "Large Recovery",
	0x00000003: "Full Recovery",
	0x0000003C: "Visual Cure",
	0x00000046: "Aural Cure",
	0x0000004B: "Cure Manipulation",
	0x00000050: "Cure All Status",
	0x0000005A: "Cure All + Heal All",
	0x00000032: "Volt-Proof Salve",
	0x00000064: "Melee Attack Up (S)",
	0x00000066: "Melee Attack Up (L)",
	0x0000006E: "Ranged Attack Up (S)",
	0x00000070: "Ranged Attack Up (L)",
	0x00000078: "Melee Defense Up (S)",
	0x0000007A: "Melee Defense Up (L)",
	0x00000082: "Ranged Defense Up (S)",
	0x00000084: "Ranged Defense Up (L)",
	0x0000008C: "Skill Salve (S)",
	0x0000008E: "Skill Salve (L)",
	0x00000096: "Impact Bracer (S)",
	0x00000098: "Impact Bracer (L)",
	0x000000A0: "Speed Salve (S)",
	0x000000A2: "Speed Salve (L)",
	0x000000AA: "Popola's Booze",
	0x0000012C: "Animal Bait",
	0x0000014A: "Small G Luck+",
	0x0000014C: "Large G Luck+",
	0x00000190: "E-Drug",
	0x0000019A: "Forbidden Fruit",
	0x00000258: "Copper Ore",
	0x00000259: "Iron Ore",
	0x0000025A: "Silver Ore",
	0x0000025B: "Gold Ore",
	0x00000212: "Rusted Clump",
	0x00000262: "Dented Plate",
	0x00000217: "Titanium Alloy",
	0x00000218: "Memory Alloy",
	0x000001FE: "Beast Hide",
	0x0000021C: "Broken Key",
	0x00000283: "Warped Wire",
	0x00000284: "Stretched Coil",
	0x00000286: "Broken Circuit",
	0x00000208: "Stripped Screw",
	0x00000209: "Pristine Screw",
	0x0000020D: "Small Gear",
	0x0000020E: "Large Gear",
	0x0000027B: "Rusty Bolt",
	0x0000022B: "New Bolt",
	0x0000027C: "Crushed Nut",
	0x00000230: "Clean Nut",
	0x00000285: "Dented Socket",
	0x00000282: "Sturdy Socket",
	0x00000226: "Severed Cable",
	0x00000227: "Pristine Cable",
	0x00000221: "Broken Battery",
	0x00000222: "Large Battery",
	0x0000023A: "Machine Arm",
	0x0000023B: "Machine Leg",
	0x0000023C: "Machine Torso",
	0x0000023D: "Machine Head",
	0x000002A8: "Crystal",
	0x000002AE: "Pearl",
	0x0000027F: "Black Pearl",
	0x00000278: "Pyrite",
	0x00000279: "Amber",
	0x000002AF: "Moldavite",
	0x000002B0: "Meteorite",
	0x00000213: "Meteorite Shard",
	0x00000244: "Simple Gadget",
	0x00000245: "Elaborate Gadget",
	0x00000246: "Complex Gadget",
	0x00000247: "Powerup Part S",
	0x00000248: "Powerup Part M",
	0x00000249: "Powerup Part L",
	0x00000270: "Tree Seed",
	0x0000026D: "Plant Seed",
	0x0000026E: "Tree Sap",
	0x00000272: "Mushroom",
	0x0000027E: "Eagle Eggs",
	0x0000027D: "Giant Egg",
	0x00000273: "Torn Book",
	0x000002AC: "Tech Manual",
	0x000002AD: "Thick Dictionary",
	0x0000026F: "Pure Water",
	0x00000275: "Tanning Agent",
	0x00000277: "Dye",
	0x0000027A: "Natural Rubber",
	0x00000274: "Machine Oil",
	0x00000276: "Filler Metal",
	0x00000204: "Moose Meat",
	0x00000203: "Boar Meat",
	0x00000206: "W. Moose Meat",
	0x00000205: "W. Boar Meat",
	0x00000280: "Shattered Earring",
	0x00000281: "Drab Bracelet",
	0x000002A9: "Lovely Choker",
	0x000002AB: "Precious Earrings",
	0x00000271: "Desert Rose",
	0x000002AA: "Ancient Mask",
	0x000002B2: "Machine Core",
	0x000002B3: "Pascal's Core",
	0x000002B4: "Children's Cores",
	0x000002B5: "Pascal's Book",
	0x0000034D: "Elevator Key",
	0x00000352: "Book: \"Pensées\"",
	0x00000353: "Fuel Filter",
	0x00000354: "Viscous Oil",
	0x00000334: "Forest Access Key",
	0x00000335: "Ocean Access Key",
	0x00000336: "Park Access Key",
	0x000002EE: "Rusty Music Box",
	0x000002BC: "Letter for Sartre",
	0x000002BD: "Beautiful Glass",
	0x000002BE: "Machine Fossil",
	0x000002BF: "Sartre's Letter",
	0x000002CB: "Memory Chip",
	0x000002CC: "Man's Journal",
	0x000002D0: "Data Chip A",
	0x000002D1: "Data Chip B",
	0x000002D2: "Data Chip C",
	0x000002D3: "Data Chip D",
	0x000002D4: "Data Chip E",
	0x000002F8: "Desert Photo",
	0x000002F9: "Amusement Park Photo",
	0x000002FA: "Forest Photo",
	0x00000307: "Package",
	0x0000030C: "Broken Toy",
	0x0000030D: "Accounting Book",
	0x0000030E: "Small Shoe",
	0x00000316: "Tri-color Cable",
	0x00000317: "Four-color Cable",
	0x00000318: "Five-color Cable",
	0x00000319: "Toothbrush",
	0x0000031A: "Cosmetics",
	0x0000031B: "Dietary Goods",
	0x0000031C: "Writing Implement",
	0x0000031D: "Medical Journal",
	0x00000340: "Machine Part",
	0x00000341: "Stamp",
	0x00000342: "Stamp Card",
	0x00000343: "Aged Stick",
	0x00000344: "Commandment Slab",
	0x00000345: "Filthy Mask",
	0x00000346: "Statue of a Girl",
	0x0000034A: "Rigid Tree Bark",
	0x00000347: "Toy Material",
	0x00000348: "Storage Element",
	0x00000349: "Plug-in Chip",
	0x000002E4: "Rusty Dog Tag",
	0x000002E5: "Dirty Dog Tag",
	0x000002E6: "Damaged Dog Tag",
	0x000002E7: "Bloody Dog Tag",
	0x0000034B: "Membership Card",
	0x0000034C: "Dirty Bag",
	0x00000398: "Sachet",
	0x00000399: "Quality Sachet",
	0x0000039A: "Choice Sachet",
	0x000003A2: "Sound Data 1",
	0x000003A3: "Sound Data 2",
	0x000003A4: "Sound Data 3",
	0x000003A5: "Sound Data 4",
	0x000003A6: "Sound Data 5",
	0x000003A7: "Record: 3C3C1D119440927",
	0x000003A8: "Record: CEO",
	0x000003B6: "Play System Pod",
	0x000003B7: "Grimoire Weiss",
	0x000003B8: "Cardboard Pod",
	0x000003B9: "Blue Stripes Pod",
	0x000003BA: "Retro Red Pod",
	0x000003BB: "Retro White Pod",
	0x000003BC: "Retro Black Pod",
	0x000003BD: "Retro Grey Pod",
	0x000003BE: "Retro Purple Pod",
	0x000003BF: "amazarashi Head",
	0x000003C0: "Emil Bullets",
	0x000003C1: "CEO Bullets",
	0x000003D4: "Dress Module",
	0x000003D5: "Heavy Armor A",
	0x000003D6: "Heavy Armor B",
	0x000003D7: "Revealing Outfit",
	0x000003D8: "Young Man's Outfit",
	0x000003D9: "Destroyer Outfit",
	0x00000369: "Pink Ribbon",
	0x0000036A: "Blue Ribbon",
	0x000003DE: "Machine Mask",
	0x000003DF: "Emil's Head",
	0x000003E1: "Emil Mask",
	0x000003E0: "Lunar Tear",
	0x000003E3: "Adam's Glasses",
	0x000003E4: "Alien Mask",
	0x00000367: "Camouflage Goggles",
	0x00000368: "A2 Wig",
	0x000003E2: "Sand Mask",
	0x000003E5: "Valve: Left Eye",
	0x000003E6: "Valve: Right Eye",
	0x000003E7: "Valve: Both Eyes",
	0x00000366: "Valve: Head",
	0x0000036B: "Proof of Oath",
	0x0000036C: "Masamune Mask",
	0x0000036D: "Matsuda Mask",
	0x0000036E: "Sato Mask",
	0x00000370: "White Hair",
	0x00000371: "Black Hair",
	0x00000372: "Brown Hair",
	0x00000373: "Red Hair",
	0x00000374: "Blue Hair",
	0x00000375: "Green Hair",
	0x00000376: "Purple Hair",
	0x00000377: "Ash Grey Hair",
	0x00000378: "Golden Hair",
	0x00000379: "Pastel Pink Hair",
	0x0000037A: "Light Blue Hair",
	0x0000037B: "Lime Green Hair",
	0x0000037C: "Light Purple Hair",
	0x0000037D: "Neon White Hair",
	0x0000037E: "Neon Yellow Hair",
	0x0000037F: "Neon Pink Hair",
	0x00000380: "Neon Blue Hair",
	0x00000381: "Neon Green Hair",
	0x00000382: "Neon Purple Hair",
};

const invetoryListElement = document.getElementById("inventoryList");

for (const itemId in knownItemsList) {
	crel(invetoryListElement, crel("option", { value: itemId, label: knownItemsList[itemId] }));
}

function Weapon(defaultId) {
	return {
		__proto__: Weapon.prototype,
		obtained: {},
		defaultId: defaultId,
		currentId: undefined,

		id: undefined,
		level: undefined,
		newItem: undefined,
		newStory: undefined,
		enemies: undefined,

		get name() {
			const knownWeapon = knownWeaponsList[this.currentId];

			if (knownWeapon) {
				return knownWeapon;
			} else {
				return (this.currentId != -1) ? "Unknown" : "Undefined";
			}
		},

		add() {
			const mainObj = this;

			const listContents = crel("div", { class: "list-contents" });

			const buttonText = crel("span", { class: "hoverable-content" });
			buttonText.innerText = this.name;

			let retElem = ItemListElement("Lv :", "number");

			crel(listContents, retElem.final);

			this.level.elem = retElem.input;
			this.level.elem.parentEncodedValue = this.level;
			this.level.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("Obtained :", "checkbox");

			crel(listContents, retElem.final);

			this.obtained.elem = retElem.input;
			this.obtained.elem.parentEncodedValue = this.obtained;

			this.obtained.update = function () {
				this.elem.checked = (mainObj.currentId == mainObj.id.value);
			};

			this.obtained.elem.addEventListener("change", function (event) {
				mainObj.id.value = event.target.checked ? mainObj.currentId : -1;

				event.target.parentEncodedValue.update();
			});

			retElem = ItemListElement("Enemies :", "number");

			crel(listContents, retElem.final);

			this.enemies.elem = retElem.input;
			this.enemies.elem.parentEncodedValue = this.enemies;
			this.enemies.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("New item :", "checkbox");

			crel(listContents, retElem.final);

			this.newItem.elem = retElem.input;
			this.newItem.elem.parentEncodedValue = this.newItem;

			this.newItem.update = CheckboxUpdateCall;
			this.newItem.elem.addEventListener("change", CheckboxChange);

			retElem = ItemListElement("New story :", "checkbox");

			crel(listContents, retElem.final);

			this.newStory.elem = retElem.input;
			this.newStory.elem.parentEncodedValue = this.newStory;

			this.newStory.update = CheckboxUpdateCall;
			this.newStory.elem.addEventListener("change", CheckboxChange);

			const buttonElem = crel("button", { class: "hoverable selectable expandable" });
			//buttonElem.dataset.groupId = "weaponsList";

			initHoverable(buttonElem);

			crel(buttonElem, buttonText);
			initList(buttonElem, undefined, listContents);

			initSelectable(buttonElem, true);

			this.elem = buttonElem;

			this.level.update();
			this.obtained.update();
			this.enemies.update();
			this.newItem.update();
			this.newStory.update();
		},

		read(fs, pos) {
			this.id = EncodedValue(fs, Int32Array, pos);

			this.currentId = (this.id.value == -1) ? this.defaultId : this.id.value;

			this.level = EncodedValue(fs, Int32Array, undefined, undefined, this.id);
			this.newItem = EncodedValue(fs, Int32Array, undefined, undefined, this.level);
			this.newStory = EncodedValue(fs, Int32Array, undefined, undefined, this.newItem);
			this.enemies = EncodedValue(fs, Int32Array, undefined, undefined, this.newStory);
		}
	};
}

const knownWeaponsList = {
	0x000003EB: "Faith",
	0x000003F5: "Iron Pipe",
	0x000003FC: "Beastbane",
	0x00000410: "Phoenix Dagger",
	0x00000406: "Ancient Overlord",
	0x0000041A: "Type-40 Sword",
	0x00000424: "Type-3 Sword",
	0x0000042E: "Virtuous Contract",
	0x0000042F: "Cruel Oath",
	0x00000438: "YoRHa-issue Blade",
	0x00000442: "Machine Sword",
	0x000004B3: "Iron Will",
	0x000004BD: "Fang of the Twins",
	0x000004C4: "Beastlord",
	0x000004CE: "Phoenix Sword",
	0x000004D8: "Type-40 Blade",
	0x000004E2: "Type-3 Blade",
	0x000004EC: "Virtuous Treaty",
	0x000004ED: "Cruel Blood Oath",
	0x000004F6: "Machine Axe",
	0x00000578: "Phoenix Lance",
	0x0000058C: "Beastcurse",
	0x00000596: "Dragoon Lance",
	0x000005A0: "Spear of the Usurper",
	0x000005AA: "Type-40 Lance",
	0x000005B4: "Type-3 Lance",
	0x000005BE: "Virtuous Dignity",
	0x000005BF: "Cruel Arrogance",
	0x000005C8: "Machine Spear",
	0x00000668: "Angel's Folly",
	0x0000065E: "Demon's Cry",
	0x0000064A: "Type-40 Fists",
	0x00000640: "Type-3 Fists",
	0x00000654: "Virtuous Grief",
	0x00000655: "Cruel Lament",
	0x00000672: "Machine Heads",
	0x00000753: "Engine Blade",
	0x00000754: "Cypress Stick",
	0x00000755: "Emil Heads",
};

function updateChip(chip) {
	const knownChip = knownChipsList[chip.type.value];

	if (knownChip) {
		chip.baseCode.value = knownChip.baseCode;
		chip.baseId.value = knownChip.baseId;

		if (knownChip.hasLevels) {
			if (chip.level.value < 0) {
				chip.level.value = 0;
			}

			if (chip.level.value > 8) {
				chip.level.value = 8;
			}

			chip.baseCode.value += chip.level.value;
			chip.baseId.value += chip.level.value;
		} else {
			chip.level.value = 0;
		}
	} else if (chip.type.value == -1) {
		chip.baseCode.value = -1;
		chip.baseId.value = -1;
	}

	chip.baseId.update();
	chip.baseCode.update();
}

function Chip() {
	return {
		__proto__: Chip.prototype,
		baseCode: undefined,
		baseId: undefined,

		type: undefined,
		level: undefined,
		weight: undefined,
		slotA: undefined,
		slotB: undefined,
		slotC: undefined,

		get name() {
			const knownChip = knownChipsList[this.type.value];

			if (knownChip) {
				return knownChip.name;
			} else {
				return (this.type.value != -1) ? "Unknown" : "Undefined";
			}
		},

		add() {
			const mainObj = this;

			const listContents = crel("div", { class: "list-contents" });

			const buttonText = crel("span", { class: "hoverable-content" });
			buttonText.innerText = this.name;

			let retElem = ItemListElement("Type :", "text", "chipsList");

			crel(listContents, retElem.final);

			this.type.elem = retElem.input;
			this.type.elem.parentEncodedValue = this.type;
			this.type.elem.addEventListener("change", BasicChange);

			this.type.update = function () {
				const val = this.value;

				updateChip(mainObj);

				BasicUpdate(this);

				if ((val == null) || (val == undefined)) return;

				buttonText.innerText = mainObj.name;

				BasicUpdate(mainObj.level);
			};

			retElem = ItemListElement("Lv :", "number");

			crel(listContents, retElem.final);

			this.level.elem = retElem.input;
			this.level.elem.parentEncodedValue = this.level;
			this.level.elem.addEventListener("change", BasicChange);

			this.level.update = function () {
				updateChip(mainObj);

				BasicUpdate(this);
			};

			retElem = ItemListElement("Weight :", "number");

			crel(listContents, retElem.final);

			this.weight.elem = retElem.input;
			this.weight.elem.parentEncodedValue = this.weight;
			this.weight.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("Slot A :", "number");

			crel(listContents, retElem.final);

			this.slotA.elem = retElem.input;
			this.slotA.elem.parentEncodedValue = this.slotA;
			this.slotA.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("Slot B :", "number");

			crel(listContents, retElem.final);

			this.slotB.elem = retElem.input;
			this.slotB.elem.parentEncodedValue = this.slotB;
			this.slotB.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("Slot C :", "number");

			crel(listContents, retElem.final);

			this.slotC.elem = retElem.input;
			this.slotC.elem.parentEncodedValue = this.slotC;
			this.slotC.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("ID :", "number");

			crel(listContents, retElem.final);

			this.baseId.elem = retElem.input;
			this.baseId.elem.parentEncodedValue = this.baseId;
			this.baseId.elem.addEventListener("change", BasicChange);

			retElem = ItemListElement("Code :", "number");

			crel(listContents, retElem.final);

			this.baseCode.elem = retElem.input;
			this.baseCode.elem.parentEncodedValue = this.baseCode;
			this.baseCode.elem.addEventListener("change", BasicChange);

			const buttonElem = crel("button", { class: "hoverable selectable expandable" });
			//buttonElem.dataset.groupId = "chipsList";

			initHoverable(buttonElem);

			crel(buttonElem, buttonText);
			initList(buttonElem, undefined, listContents);

			initSelectable(buttonElem, true);

			this.elem = buttonElem;

			this.type.update();
			this.weight.update();
			this.slotA.update();
			this.slotB.update();
			this.slotC.update();
		},

		read(fs, pos) {
			this.baseCode = EncodedValue(fs, Int32Array, pos);
			this.baseId = EncodedValue(fs, Int32Array, undefined, undefined, this.baseCode);
			this.type = EncodedValue(fs, Int32Array, undefined, undefined, this.baseId);
			this.level = EncodedValue(fs, Int32Array, undefined, undefined, this.type);
			this.weight = EncodedValue(fs, Int32Array, undefined, undefined, this.level);
			this.slotA = EncodedValue(fs, Int32Array, undefined, undefined, this.weight);
			this.slotB = EncodedValue(fs, Int32Array, undefined, undefined, this.slotA);
			this.slotC = EncodedValue(fs, Int32Array, undefined, undefined, this.slotB);
		}
	};
}

const knownChipsList = {
	0x00000001: { name: "Weapon Attack Up", hasLevels: true, baseId: 0x00000BB9, baseCode: 0x00000000 },
	0x00000002: { name: "Down-Attack Up", hasLevels: true, baseId: 0x00000BC2, baseCode: 0x00000009 },
	0x00000003: { name: "Critical Up", hasLevels: true, baseId: 0x00000BCB, baseCode: 0x00000012 },
	0x00000004: { name: "Ranged Attack Up", hasLevels: true, baseId: 0x00000BD4, baseCode: 0x0000001B },
	0x00000005: { name: "Fast Cooldown", hasLevels: true, baseId: 0x00000BDD, baseCode: 0x000000A3 },
	0x00000006: { name: "Melee Defence Up", hasLevels: true, baseId: 0x00000BE6, baseCode: 0x00000049 },
	0x00000007: { name: "Ranged Defence Up", hasLevels: true, baseId: 0x00000BEF, baseCode: 0x00000052 },
	0x00000008: { name: "Anti Chain Damage", hasLevels: true, baseId: 0x00000BF8, baseCode: 0x0000005B },
	0x00000009: { name: "Max HP Up", hasLevels: true, baseId: 0x00000C01, baseCode: 0x0000006D },
	0x0000000A: { name: "Offensive Heal", hasLevels: true, baseId: 0x00000C0A, baseCode: 0x00000076 },
	0x0000000B: { name: "Deadly Heal", hasLevels: true, baseId: 0x00000C13, baseCode: 0x0000007F },
	0x0000000C: { name: "Auto-Heal", hasLevels: true, baseId: 0x00000C1C, baseCode: 0x00000088 },
	0x0000000D: { name: "Evade Range Up", hasLevels: true, baseId: 0x00000C25, baseCode: 0x000000AC },
	0x0000000E: { name: "Moving Speed Up", hasLevels: true, baseId: 0x00000C2E, baseCode: 0x000000B5 },
	0x0000000F: { name: "Drop Rate Up", hasLevels: true, baseId: 0x00000C37, baseCode: 0x000000BE },
	0x00000010: { name: "EXP Gain Up", hasLevels: true, baseId: 0x00000C40, baseCode: 0x000000C7 },
	0x00000011: { name: "Shock Wave", hasLevels: true, baseId: 0x00000C49, baseCode: 0x00000024 },
	0x00000012: { name: "Last Stand", hasLevels: true, baseId: 0x00000C52, baseCode: 0x0000002D },
	0x00000013: { name: "Damage Absorb", hasLevels: true, baseId: 0x00000C5B, baseCode: 0x00000091 },
	0x00000014: { name: "Vengeance", hasLevels: true, baseId: 0x00000C64, baseCode: 0x000000D0 },
	0x00000015: { name: "Reset", hasLevels: true, baseId: 0x00000C6D, baseCode: 0x0000009A },
	0x00000016: { name: "Overclock", hasLevels: true, baseId: 0x00000C76, baseCode: 0x000000D9 },
	0x00000017: { name: "Resilience", hasLevels: true, baseId: 0x00000C7F, baseCode: 0x00000064 },
	0x00000018: { name: "Counter", hasLevels: true, baseId: 0x00000C91, baseCode: 0x00000036 },
	0x00000019: { name: "Taunt Up", hasLevels: true, baseId: 0x00000C9A, baseCode: 0x000000E2 },
	0x0000001A: { name: "Charge Attack", hasLevels: true, baseId: 0x00000CA3, baseCode: 0x0000003F },
	0x0000001B: { name: "Auto-use Item", hasLevels: true, baseId: 0x00000CAC, baseCode: 0x000000EB },
	0x0000001D: { name: "Hijack Boost", hasLevels: true, baseId: 0x00000CBE, baseCode: 0x000000FD },
	0x0000001E: { name: "Stun", hasLevels: true, baseId: 0x00000CD9, baseCode: 0x00000106 },
	0x0000001F: { name: "Combust", hasLevels: true, baseId: 0x00000CE2, baseCode: 0x0000010F },
	0x00000022: { name: "Heal Drops Up", hasLevels: true, baseId: 0x00000CFD, baseCode: 0x00000118 },
	0x00000023: { name: "Item Scan", hasLevels: false, baseId: 0x00000C88, baseCode: 0x000000F5 },
	0x00000026: { name: "Death Rattle", hasLevels: false, baseId: 0x00000D06, baseCode: 0x00000121 },
	0x00000027: { name: "HUD: HP Gauge", hasLevels: false, baseId: 0x00000D07, baseCode: 0x00000123 },
	0x00000028: { name: "HUD: Sound Waves", hasLevels: false, baseId: 0x00000D08, baseCode: 0x0000012D },
	0x00000029: { name: "HUD: Enemy Data", hasLevels: false, baseId: 0x00000D09, baseCode: 0x00000126 },
	0x0000002A: { name: "OS Chip", hasLevels: false, baseId: 0x00000D0A, baseCode: 0x00000122 },
	0x0000002C: { name: "Evasive System", hasLevels: false, baseId: 0x00000D0B, baseCode: 0x000000F6 },
	0x0000002D: { name: "Continuous Combo", hasLevels: false, baseId: 0x00000D0C, baseCode: 0x00000048 },
	0x0000002E: { name: "Bullet Detonation", hasLevels: false, baseId: 0x00000D0D, baseCode: 0x000000F7 },
	0x0000002F: { name: "Auto-collect Items", hasLevels: false, baseId: 0x00000D0E, baseCode: 0x000000F4 },
	0x00000030: { name: "HUD: Skill Gauge", hasLevels: false, baseId: 0x00000D0F, baseCode: 0x00000125 },
	0x00000031: { name: "HUD: Text Log", hasLevels: false, baseId: 0x00000D10, baseCode: 0x00000129 },
	0x00000032: { name: "HUD: Mini-map", hasLevels: false, baseId: 0x00000D11, baseCode: 0x00000127 },
	0x00000033: { name: "HUD: EXP Gauge", hasLevels: false, baseId: 0x00000D12, baseCode: 0x00000124 },
	0x00000034: { name: "HUD: Save Points", hasLevels: false, baseId: 0x00000D13, baseCode: 0x0000012A },
	0x00000035: { name: "HUD: Damage Values", hasLevels: false, baseId: 0x00000D14, baseCode: 0x0000012C },
	0x00000036: { name: "HUD: Objectives", hasLevels: false, baseId: 0x00000D15, baseCode: 0x00000128 },
	0x00000037: { name: "HUD: Control", hasLevels: false, baseId: 0x00000D16, baseCode: 0x0000012E },
	0x0000003A: { name: "HUD: Fishing Spots", hasLevels: false, baseId: 0x00000D19, baseCode: 0x0000012B },
	0x0000003B: { name: "Auto-Attack", hasLevels: false, baseId: 0x00000D1A, baseCode: 0x000000F8 },
	0x0000003C: { name: "Auto-Fire", hasLevels: false, baseId: 0x00000D1B, baseCode: 0x000000F9 },
	0x0000003D: { name: "Auto-Evade", hasLevels: false, baseId: 0x00000D1C, baseCode: 0x000000FA },
	0x0000003E: { name: "Auto-Program", hasLevels: false, baseId: 0x00000D1D, baseCode: 0x000000FB },
	0x0000003F: { name: "Auto-Weapon Switch", hasLevels: false, baseId: 0x00000D1E, baseCode: 0x000000FC },
};

const chipsListElement = document.getElementById("chipsList");

for (const chipId in knownChipsList) {
	crel(chipsListElement, crel("option", { value: chipId, label: knownChipsList[chipId].name }));
}

let itemsList = [];
let weaponsList = [];
let chipsList = [];

function getLevel(exp) {
	let ret = null;

	for (const level in levelLimits) {
		const levelExp = levelLimits[level];

		if (exp < levelExp) {
			break;
		}

		ret = level;
	}

	return ret;
}

let loadedSaveFile = FixedSizeSaveFile(0x399CC, null);
let saveFileText = undefined;

const values = {};
values.experience = EncodedValue(loadedSaveFile, Uint32Array, 0x3871C);
values.experience.elem = document.getElementById("statusExperience");

values.experience.update = function () {
	const val = this.value;

	BasicUpdate(this);

	if ((val == null) || (val == undefined)) return;

	levelElement.innerText = `Lv: ${getLevel(val)}`;
};

values.funds = EncodedValue(loadedSaveFile, Uint32Array, 0x3056C);
values.funds.elem = document.getElementById("statusFunds");

for (const key in values) {
	values[key].init();
}

const loadSaveButton = document.getElementById("loadSaveButton");
const updateSaveButton = document.getElementById("updateSaveButton");
const realSaveButton = document.getElementById("realSaveButton");
const errorElement = document.getElementById("statusError");
const levelElement = document.getElementById("statusLevel");
const characterElement = document.getElementById("statusCharacter");
const itemsTabContentElement = document.getElementById("items_tab_content");
const weaponsTabContentElement = document.getElementById("weapons_tab_content");
const chipsTabContentElement = document.getElementById("chips_tab_content");

let scrollersList = [];

realSaveButton.addEventListener("click", function (event) {
	event.target.value = null;
});

function readSaveFile(event) {
	try {
		errorElement.innerText = "NO ERROR";

		loadedSaveFile.data = new DataView(event.target.result, 0, loadedSaveFile.size);

		for (const key in values) {
			values[key].update();
		}

		saveFileText = new TextDecoder().decode(loadedSaveFile.data.buffer);
		const characterNamePos = saveFileText.indexOf("PL/") + `PL/`.length;

		characterElement.innerText = saveFileText.slice(characterNamePos,
			saveFileText.indexOf("\n", characterNamePos)
		);

		event.target.removeEventListener("load", readSaveFile);

		for (let index = 0; index < itemsArraySize; index++) {
			const item = Item();
			item.read(loadedSaveFile, 0x30570 + index * itemSize);
			item.add();

			itemsList.push(item);

			const chip = Chip();
			chip.read(loadedSaveFile, 0x324BC + index * chipSize)
			chip.add();

			chipsList.push(chip);
		}

		for (const weaponId in knownWeaponsList) {
			const weapon = Weapon(weaponId);
			weapon.read(loadedSaveFile, 0x31D70 + weaponsList.length * weaponsSize);
			weapon.add();

			weaponsList.push(weapon);
		}

		scrollersList.push(new VirtualScroller(
			itemsTabContentElement,
			itemsList,
			function (item) {
				return item.elem;
			},
			{
				getScrollableContainer: function () {
					return itemsTabContentElement.parentElement;
				},
			}),
			new VirtualScroller(
				weaponsTabContentElement,
				weaponsList,
				function (item) {
					return item.elem;
				},
				{
					getScrollableContainer: function () {
						return weaponsTabContentElement.parentElement;
					},
				}),
			new VirtualScroller(
				chipsTabContentElement,
				chipsList,
				function (item) {
					return item.elem;
				},
				{
					getScrollableContainer: function () {
						return chipsTabContentElement.parentElement;
					},
				})
		);
	} catch (err) {
		errorElement.innerText = "Check console";

		throw err;
	}
}

const defaultText = `NO DATA`;

realSaveButton.addEventListener("change", function (event) {
	loadedSaveFile.data = null;
	errorElement.innerText = defaultText;
	characterElement.innerText = defaultText;
	levelElement.innerText = defaultText;
	itemsTabContentElement.innerHTML = defaultText;
	weaponsTabContentElement.innerHTML = defaultText;
	chipsTabContentElement.innerHTML = defaultText;
	itemsList = [];
	weaponsList = [];
	chipsList = [];

	for (const scroller of scrollersList) {
		scroller.stop();
	}

	scrollersList = [];

	for (const key in values) {
		values[key].update();
	}

	if (event.target.files.length == 0) {
		return;
	}

	const fileReader = new FileReader();

	fileReader.addEventListener("load", readSaveFile);
	fileReader.readAsArrayBuffer(event.target.files[0]);
});

loadSaveButton.addEventListener("click", function (event) {
	loadSaveButton.blur();

	realSaveButton.click();
});

updateSaveButton.addEventListener("click", function (event) {
	playSound(SELECT_SOUND);

	updateSaveButton.blur();

	if (!loadedSaveFile.data) return;

	saveAs(new Blob([loadedSaveFile.data], { type: "application/octet-stream", }), "out.dat");
});

// Audio-visual area

let soundToggle = true;

const HOVER_SOUND = "../external/sounds/hover.ogg";
const SELECT_SOUND = "../external/sounds/select.ogg";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

/** @param {HTMLElement} parent */

function fixList(parent) {
	if (!parent._custom || !parent._custom.list) return;

	const list = parent._custom.list.active;

	if (!list) return;

	list.style.top = ``;

	const listPos = list.getBoundingClientRect();
	const bigContainer = parent.parentElement;
	const scrollContainer = bigContainer.parentElement;
	const parentPos = parent.getBoundingClientRect();

	let resTop = parentPos.top + parentPos.height / 2 - listPos.height / 2;

	list.style.top = `${(resTop)}px`;

	let resLeft = parentPos.left + parentPos.width;

	if ((resLeft + listPos.width) > window.innerWidth) {
		resLeft = parentPos.left - listPos.width;
	}

	if (resLeft < 0) {
		resLeft = window.innerWidth / 2 - listPos.width / 2;
	}

	list.style.left = `${(resLeft)}px`;

	if (!(scrollContainer.clientHeight < scrollContainer.scrollHeight)) {
		return;
	}

	const scrollContainerPos = scrollContainer.getBoundingClientRect();

	if (resTop < scrollContainerPos.top) {
		resTop = scrollContainerPos.top - parentPos.height;
	} else if ((resTop + listPos.height) > scrollContainerPos.bottom) {
		resTop = scrollContainerPos.bottom - listPos.height;
	}

	list.style.top = `${(resTop)}px`;
}

function showList(list) {
	list.style.opacity = 100;
	list.style.pointerEvents = "all";
}

function hideList(list) {
	list.style.opacity = 0;
	list.style.pointerEvents = "none";
}

function clearList(elem) {
	if (!elem._custom || !elem._custom.list) return;

	let currentList = elem._custom.list.active;

	if (!currentList) return;

	elem._custom.list.active = null;

	hideList(currentList);

	currentList.addEventListener("transitionend", endTransition);
}

function makeList(elem) {
	if (!elem._custom || !elem._custom.list) return;

	let list = undefined;

	if (elem._custom.list.makeFunc) {
		list = crel("div", {
			class: "list-contents",
		});

		elem._custom.list.makeFunc(list);
	} else if (elem._custom.list.existingList) {
		list = elem._custom.list.existingList;
	}

	elem._custom.list.active = list;

	crel(document.querySelector("#main_content>:not(.tab-content) .visible-content"), elem._custom.list.active);

	list.offsetWidth;

	showList(list);
}

function endTransition(event) {
	this.remove();

	this.removeEventListener("transitionend", endTransition);
}

function initList(elem, makeFunc = undefined, existingList = undefined) {
	elem._custom = {};
	elem._custom.list = {};

	if (makeFunc) {
		elem._custom.list.makeFunc = makeFunc;
	}

	if (existingList) {
		elem._custom.list.existingList = existingList;
	}
}

function BgSong(name = "", title = "") {
	return {
		__proto__: BgSong.prototype,
		name: name,
		title: title,
		/** @type {HTMLAudioElement} */
		obj: null,
		/** @type {HTMLElement} */
		elem: null,

		add() {
			const song = this;

			const content = crel("span", { class: "hoverable-content" });
			content.innerText = song.title;

			song.elem = crel("button", {
				class: "hoverable expandable selectable",
				tabindex: "0",
				"data-group-id": "songsList",
			});

			song.elem.addEventListener("click", function (event) {
				for (const _song of songsList) {
					_song.obj.pause();
				}

				if (!song.elem.classList.contains("selected")) {
					song.obj.play();
				}
			});

			initHoverable(song.elem);
			initSelectable(song.elem, true);

			crel(song.elem, content);
		},

		init() {
			const song = this;

			song.obj = new Audio(song.name);
			song.obj.loop = true;
			song.add();

			song.obj.addEventListener("error", function (event) {
				song.elem.remove();
				song.obj = null;

				for (let index = 0; index < songsList.length; index++) {
					if (songsList[index] != song) continue;

					songsList.splice(index, 1);
				}
			});
		},
	};
}

const songsList = [
	BgSong("../external/sounds/bgm1.ogg", "City Ruins - Rays of Light (Low Version)"),
	BgSong("../external/sounds/bgm2.ogg", "City Ruins - Shade (Low Version)"),
	BgSong("../external/sounds/bgm3.ogg", "Fortress of Lies (Instrumental)"),
];

for (const song of songsList) {
	song.init();
}

const songsListButton = document.getElementById("songsList");

initList(songsListButton, function (list) {
	for (const song of songsList) {
		crel(list, song.elem);
	}
});

const selectablesList = document.querySelectorAll(".selectable");
const tabsList = document.querySelectorAll("[data-content-id]");
const hoverablesList = document.querySelectorAll(".hoverable");
const inputsList = document.querySelectorAll("input");
const soundToggleButton = document.getElementById("soundToggle");

soundToggleButton.classList.toggle("selected", soundToggle);

function initInput(input) {
	input.addEventListener("change", function (event) {
		playSound(SELECT_SOUND);
	});

	input.addEventListener("focus", function (event) {
		playSound(HOVER_SOUND);
	});
}

for (const input of inputsList) {
	initInput(input);
}

function playSound(soundName) {
	if (!soundToggle) return;

	const sound = new Audio(soundName);

	sound.play().catch(() => { });
}

function endLetterAnimation(event) {
	if (event.animationName != "showletters-anim") return;

	const children = this.querySelectorAll(".tab-title-letter");

	for (const child of children) {
		clearInterval(child.letterAnimationInterval);
		child.innerText = child.initialText;
	}
}

function endAnimation(event) {
	if (event.animationName != "showhoverable-anim") return;

	event.target.style.animation = "";
	event.target.style.opacity = ``;

	event.target.removeEventListener("animationend", endAnimation);
}

function initHoverable(hoverable) {
	hoverable.addEventListener("mouseenter", function (event) {
		if (this.classList.contains("active")) return;

		playSound(HOVER_SOUND);
	});

	hoverable.addEventListener("mousedown", function (event) {
		this.canPlaySound = false;
	});

	hoverable.addEventListener("focus", function (event) {
		if (this.classList.contains("active") || !this.canPlaySound) {
			this.canPlaySound = true;

			return;
		}

		playSound(HOVER_SOUND);
	});

	hoverable.addEventListener("animationend", endAnimation);

	const selDec = crel("img", { class: "dec-selectable", src: "../external/images/selector.svg" });
	crel(hoverable, selDec, crel("span", { class: "dec-selectable-squares" }));
}

for (const hoverable of hoverablesList) {
	initHoverable(hoverable);
}

function toggleSelectable(selectable, force = undefined) {
	if (selectable.dataset.groupId) {
		const others = document.querySelectorAll(`[data-group-id=${selectable.dataset.groupId}]`);

		for (const _item of others) {
			if (_item == selectable) continue;

			_item.classList.toggle("selected", false);
			clearList(_item);
		}
	}

	if (selectable.classList.toggle("selected", force)) {
		makeList(selectable);

		fixList(selectable);
	} else {
		clearList(selectable);
	}
}

function initSelectable(selectable, force = false) {
	if (!force && ((selectable.classList.contains("tab-button")))) {
		return;
	}

	selectable.addEventListener("click", function (event) {
		if (!event.target.classList.contains("selectable")) return;

		playSound(SELECT_SOUND);

		toggleSelectable(event.target);
	});
}

window.addEventListener("click", function (event) {
	const targets = event.composedPath();

	for (const target of targets) {
		if (!target.classList) continue;

		if (target.classList.contains("hoverable") || target.classList.contains("list-contents")) {
			return;
		}
	}

	const elems = document.querySelector("#main_content>:not(.tab-content) .visible-content").querySelectorAll(".selected");

	for (const elem of elems) {
		if (!elem._custom || !elem._custom.list) continue;

		elem.classList.remove("selected");
		clearList(elem);
	}
});

for (const selectable of selectablesList) {
	initSelectable(selectable);
}

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

/** @param {HTMLElement} elem */

function changeLetter(elem) {
	elem.innerText = letters[getRandomInt(0, letters.length)];
}

/** @param {HTMLElement} tab */

function updateContent(tab, isSelectable = false) {
	const content = document.getElementById(tab.dataset.contentId);

	if (!content) return;

	const tabContent = document.getElementById(tab.dataset.tabId);

	if (!tabContent) return;

	let children = tabContent.querySelectorAll(".tab-title-letter");

	for (const child of children) {
		if (!child.initialText) {
			child.initialText = child.innerText;
		}

		clearInterval(child.letterAnimationInterval);
		child.innerText = child.initialText;
	}

	const _tabsList = document.querySelectorAll("[data-content-id]");

	for (const _tab of _tabsList) {
		if (_tab.dataset.contentId != tab.dataset.contentId) continue;

		_tab.classList.toggle("active", false);

		const _tabContent = document.getElementById(_tab.dataset.tabId);

		if (!_tabContent) continue;

		_tabContent.classList.toggle("tab-content", true);
	}

	content.classList.remove("content");

	if (isSelectable) {
		const isOn = tab.classList.contains("selected");

		tab.classList.toggle("active", isOn);
		tabContent.classList.toggle("tab-content", !isOn);
	} else {
		tab.classList.toggle("active", true);
		tabContent.classList.toggle("tab-content", false);
	}

	children = tabContent.querySelectorAll(".hoverable");

	let index = 0;
	let animDelay = 0;

	for (const child of children) {
		animDelay = Math.min(index * 0.015, 0.375);
		child.style.opacity = `0`;
		child.style.animation = `showhoverable-anim var(--animation-duration) ${animDelay}s linear forwards`;

		child.addEventListener("animationend", endAnimation);

		index++;
	}

	children = tabContent.querySelectorAll(".tab-title-letter");

	for (const child of children) {
		child.letterAnimationInterval = setInterval(changeLetter, 100, child);
	}

	children = tabContent.querySelectorAll(".tab-title");

	for (const child of children) {
		child.addEventListener("animationend", endLetterAnimation);
	}

	// https://stackoverflow.com/questions/44846614/trigger-css-animations-in-javascript#63561659
	content.offsetWidth;
	content.classList.add("content");
}

function tabClickHandler(event) {
	const isSelectable = this.classList.contains("selectable");

	if (this.classList.contains("active") && !isSelectable) return;

	if (!isSelectable) playSound(SELECT_SOUND);

	updateContent(this, isSelectable);
}

for (const tab of tabsList) {
	if (tab.classList.contains("active")) {
		updateContent(tab);
	}

	tab.addEventListener("click", tabClickHandler);
}

soundToggleButton.addEventListener("click", function (event) {
	soundToggle = soundToggleButton.classList.contains("selected");
});
