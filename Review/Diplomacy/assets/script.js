// -*- coding: utf-8 -*-
(function () { const A = document.createElement("link").relList; if (A && A.supports && A.supports("modulepreload")) return; for (const I of document.querySelectorAll('link[rel="modulepreload"]')) M(I); new MutationObserver(I => { for (const D of I) if (D.type === "childList") for (const b of D.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && M(b) }).observe(document, { childList: !0, subtree: !0 }); function l(I) { const D = {}; return I.integrity && (D.integrity = I.integrity), I.referrerpolicy && (D.referrerPolicy = I.referrerpolicy), I.crossorigin === "use-credentials" ? D.credentials = "include" : I.crossorigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D } function M(I) { if (I.ep) return; I.ep = !0; const D = l(I); fetch(I.href, D) } })(); function Ce() { } function Ol(h) { return h() } function Il() { return Object.create(null) } function Ar(h) { h.forEach(Ol) } function E0(h) { return typeof h == "function" } function L0(h, A) { return h != h ? A == A : h !== A || h && typeof h == "object" || typeof h == "function" } function O0(h) { return Object.keys(h).length === 0 } function It(h, A) { h.appendChild(A) } function gt(h, A, l) { h.insertBefore(A, l || null) } function et(h) { h.parentNode.removeChild(h) } function b0(h, A) { for (let l = 0; l < h.length; l += 1)h[l] && h[l].d(A) } function Rt(h) { return document.createElement(h) } function Be(h) { return document.createTextNode(h) } function dr() { return Be(" ") } function W0(h, A, l, M) { return h.addEventListener(A, l, M), () => h.removeEventListener(A, l, M) } function Zt(h, A, l) { l == null ? h.removeAttribute(A) : h.getAttribute(A) !== l && h.setAttribute(A, l) } function P0(h) { return Array.from(h.childNodes) } function Ki(h, A) { A = "" + A, h.wholeText !== A && (h.data = A) } function ht(h, A, l) { h.classList[l ? "add" : "remove"](A) } let zi; function ve(h) { zi = h } const Ae = [], Rl = [], pr = [], Sl = [], M0 = Promise.resolve(); let $i = !1; function U0() { $i || ($i = !0, M0.then(bl)) } function Hi(h) { pr.push(h) } const Gi = new Set; let gr = 0; function bl() { const h = zi; do { for (; gr < Ae.length;) { const A = Ae[gr]; gr++, ve(A), F0(A.$$) } for (ve(null), Ae.length = 0, gr = 0; Rl.length;)Rl.pop()(); for (let A = 0; A < pr.length; A += 1) { const l = pr[A]; Gi.has(l) || (Gi.add(l), l()) } pr.length = 0 } while (Ae.length); for (; Sl.length;)Sl.pop()(); $i = !1, Gi.clear(), ve(h) } function F0(h) { if (h.fragment !== null) { h.update(), Ar(h.before_update); const A = h.dirty; h.dirty = [-1], h.fragment && h.fragment.p(h.ctx, A), h.after_update.forEach(Hi) } } const D0 = new Set; function N0(h, A) { h && h.i && (D0.delete(h), h.i(A)) } function G0(h, A, l, M) { const { fragment: I, on_mount: D, on_destroy: b, after_update: G } = h.$$; I && I.m(A, l), M || Hi(() => { const x = D.map(Ol).filter(E0); b ? b.push(...x) : Ar(x), h.$$.on_mount = [] }), G.forEach(Hi) } function $0(h, A) { const l = h.$$; l.fragment !== null && (Ar(l.on_destroy), l.fragment && l.fragment.d(A), l.on_destroy = l.fragment = null, l.ctx = []) } function H0(h, A) { h.$$.dirty[0] === -1 && (Ae.push(h), U0(), h.$$.dirty.fill(0)), h.$$.dirty[A / 31 | 0] |= 1 << A % 31 } function q0(h, A, l, M, I, D, b, G = [-1]) { const x = zi; ve(h); const W = h.$$ = { fragment: null, ctx: null, props: D, update: Ce, not_equal: I, bound: Il(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(A.context || (x ? x.$$.context : [])), callbacks: Il(), dirty: G, skip_bound: !1, root: A.target || x.$$.root }; b && b(W.root); let $ = !1; if (W.ctx = l ? l(h, A.props || {}, (E, Q, ...nn) => { const An = nn.length ? nn[0] : Q; return W.ctx && I(W.ctx[E], W.ctx[E] = An) && (!W.skip_bound && W.bound[E] && W.bound[E](An), $ && H0(h, E)), Q }) : [], W.update(), $ = !0, Ar(W.before_update), W.fragment = M ? M(W.ctx) : !1, A.target) { if (A.hydrate) { const E = P0(A.target); W.fragment && W.fragment.l(E), E.forEach(et) } else W.fragment && W.fragment.c(); A.intro && N0(h.$$.fragment), G0(h, A.target, A.anchor, A.customElement), bl() } ve(x) } class K0 { $destroy() { $0(this, 1), this.$destroy = Ce } $on(A, l) { const M = this.$$.callbacks[A] || (this.$$.callbacks[A] = []); return M.push(l), () => { const I = M.indexOf(l); I !== -1 && M.splice(I, 1) } } $set(A) { this.$$set && !O0(A) && (this.$$.skip_bound = !0, this.$$set(A), this.$$.skip_bound = !1) } } var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qi = { exports: {} };/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function (h, A) {
    (function () {
        var l, M = "4.17.21", I = 200, D = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", b = "Expected a function", G = "Invalid `variable` option passed into `_.template`", x = "__lodash_hash_undefined__", W = 500, $ = "__lodash_placeholder__", E = 1, Q = 2, nn = 4, An = 1, Kn = 2, _n = 1, pt = 2, Zi = 4, Dn = 8, St = 16, Nn = 32, Et = 64, zn = 128, Yt = 256, vr = 512, Wl = 30, Pl = "...", Ml = 800, Ul = 16, Yi = 1, Fl = 2, Dl = 3, dt = 1 / 0, rt = 9007199254740991, Nl = 17976931348623157e292, we = 0 / 0, Gn = 4294967295, Gl = Gn - 1, $l = Gn >>> 1, Hl = [["ary", zn], ["bind", _n], ["bindKey", pt], ["curry", Dn], ["curryRight", St], ["flip", vr], ["partial", Nn], ["partialRight", Et], ["rearg", Yt]], Lt = "[object Arguments]", xe = "[object Array]", ql = "[object AsyncFunction]", Xt = "[object Boolean]", Jt = "[object Date]", Kl = "[object DOMException]", me = "[object Error]", ye = "[object Function]", Xi = "[object GeneratorFunction]", bn = "[object Map]", Qt = "[object Number]", zl = "[object Null]", Zn = "[object Object]", Ji = "[object Promise]", Zl = "[object Proxy]", Vt = "[object RegExp]", Wn = "[object Set]", kt = "[object String]", Te = "[object Symbol]", Yl = "[object Undefined]", jt = "[object WeakMap]", Xl = "[object WeakSet]", ne = "[object ArrayBuffer]", Ot = "[object DataView]", Cr = "[object Float32Array]", Br = "[object Float64Array]", wr = "[object Int8Array]", xr = "[object Int16Array]", mr = "[object Int32Array]", yr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Rr = "[object Uint32Array]", Jl = /\b__p \+= '';/g, Ql = /\b(__p \+=) '' \+/g, Vl = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Qi = /&(?:amp|lt|gt|quot|#39);/g, Vi = /[&<>"']/g, kl = RegExp(Qi.source), jl = RegExp(Vi.source), no = /<%-([\s\S]+?)%>/g, to = /<%([\s\S]+?)%>/g, ki = /<%=([\s\S]+?)%>/g, eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ro = /^\w*$/, io = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sr = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(Sr.source), Er = /^\s+/, fo = /\s/, lo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, oo = /\{\n\/\* \[wrapped with (.+)\] \*/, _o = /,? & /, so = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, co = /[()=,{}\[\]\/\s]/, ao = /\\(\\)?/g, ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ji = /\w*$/, go = /^[-+]0x[0-9a-f]+$/i, po = /^0b[01]+$/i, Ao = /^\[object .+?Constructor\]$/, vo = /^0o[0-7]+$/i, Co = /^(?:0|[1-9]\d*)$/, Bo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ie = /($^)/, wo = /['\n\r\u2028\u2029\\]/g, Re = "\\ud800-\\udfff", xo = "\\u0300-\\u036f", mo = "\\ufe20-\\ufe2f", yo = "\\u20d0-\\u20ff", nu = xo + mo + yo, tu = "\\u2700-\\u27bf", eu = "a-z\\xdf-\\xf6\\xf8-\\xff", To = "\\xac\\xb1\\xd7\\xf7", Io = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ro = "\\u2000-\\u206f", So = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ru = "A-Z\\xc0-\\xd6\\xd8-\\xde", iu = "\\ufe0e\\ufe0f", uu = To + Io + Ro + So, Lr = "['\u2019]", Eo = "[" + Re + "]", fu = "[" + uu + "]", Se = "[" + nu + "]", lu = "\\d+", Lo = "[" + tu + "]", ou = "[" + eu + "]", _u = "[^" + Re + uu + lu + tu + eu + ru + "]", Or = "\\ud83c[\\udffb-\\udfff]", Oo = "(?:" + Se + "|" + Or + ")", su = "[^" + Re + "]", br = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wr = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt = "[" + ru + "]", cu = "\\u200d", au = "(?:" + ou + "|" + _u + ")", bo = "(?:" + bt + "|" + _u + ")", hu = "(?:" + Lr + "(?:d|ll|m|re|s|t|ve))?", gu = "(?:" + Lr + "(?:D|LL|M|RE|S|T|VE))?", pu = Oo + "?", du = "[" + iu + "]?", Wo = "(?:" + cu + "(?:" + [su, br, Wr].join("|") + ")" + du + pu + ")*", Po = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mo = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Au = du + pu + Wo, Uo = "(?:" + [Lo, br, Wr].join("|") + ")" + Au, Fo = "(?:" + [su + Se + "?", Se, br, Wr, Eo].join("|") + ")", Do = RegExp(Lr, "g"), No = RegExp(Se, "g"), Pr = RegExp(Or + "(?=" + Or + ")|" + Fo + Au, "g"), Go = RegExp([bt + "?" + ou + "+" + hu + "(?=" + [fu, bt, "$"].join("|") + ")", bo + "+" + gu + "(?=" + [fu, bt + au, "$"].join("|") + ")", bt + "?" + au + "+" + hu, bt + "+" + gu, Mo, Po, lu, Uo].join("|"), "g"), $o = RegExp("[" + cu + Re + nu + iu + "]"), Ho = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ko = -1, Y = {}; Y[Cr] = Y[Br] = Y[wr] = Y[xr] = Y[mr] = Y[yr] = Y[Tr] = Y[Ir] = Y[Rr] = !0, Y[Lt] = Y[xe] = Y[ne] = Y[Xt] = Y[Ot] = Y[Jt] = Y[me] = Y[ye] = Y[bn] = Y[Qt] = Y[Zn] = Y[Vt] = Y[Wn] = Y[kt] = Y[jt] = !1; var Z = {}; Z[Lt] = Z[xe] = Z[ne] = Z[Ot] = Z[Xt] = Z[Jt] = Z[Cr] = Z[Br] = Z[wr] = Z[xr] = Z[mr] = Z[bn] = Z[Qt] = Z[Zn] = Z[Vt] = Z[Wn] = Z[kt] = Z[Te] = Z[yr] = Z[Tr] = Z[Ir] = Z[Rr] = !0, Z[me] = Z[ye] = Z[jt] = !1; var zo = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, Zo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Yo = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Xo = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Jo = parseFloat, Qo = parseInt, vu = typeof de == "object" && de && de.Object === Object && de, Vo = typeof self == "object" && self && self.Object === Object && self, un = vu || Vo || Function("return this")(), Mr = A && !A.nodeType && A, At = Mr && !0 && h && !h.nodeType && h, Cu = At && At.exports === Mr, Ur = Cu && vu.process, yn = function () { try { var s = At && At.require && At.require("util").types; return s || Ur && Ur.binding && Ur.binding("util") } catch { } }(), Bu = yn && yn.isArrayBuffer, wu = yn && yn.isDate, xu = yn && yn.isMap, mu = yn && yn.isRegExp, yu = yn && yn.isSet, Tu = yn && yn.isTypedArray; function vn(s, g, a) { switch (a.length) { case 0: return s.call(g); case 1: return s.call(g, a[0]); case 2: return s.call(g, a[0], a[1]); case 3: return s.call(g, a[0], a[1], a[2]) }return s.apply(g, a) } function ko(s, g, a, B) { for (var R = -1, H = s == null ? 0 : s.length; ++R < H;) { var tn = s[R]; g(B, tn, a(tn), s) } return B } function Tn(s, g) { for (var a = -1, B = s == null ? 0 : s.length; ++a < B && g(s[a], a, s) !== !1;); return s } function jo(s, g) { for (var a = s == null ? 0 : s.length; a-- && g(s[a], a, s) !== !1;); return s } function Iu(s, g) { for (var a = -1, B = s == null ? 0 : s.length; ++a < B;)if (!g(s[a], a, s)) return !1; return !0 } function it(s, g) { for (var a = -1, B = s == null ? 0 : s.length, R = 0, H = []; ++a < B;) { var tn = s[a]; g(tn, a, s) && (H[R++] = tn) } return H } function Ee(s, g) { var a = s == null ? 0 : s.length; return !!a && Wt(s, g, 0) > -1 } function Fr(s, g, a) { for (var B = -1, R = s == null ? 0 : s.length; ++B < R;)if (a(g, s[B])) return !0; return !1 } function X(s, g) { for (var a = -1, B = s == null ? 0 : s.length, R = Array(B); ++a < B;)R[a] = g(s[a], a, s); return R } function ut(s, g) { for (var a = -1, B = g.length, R = s.length; ++a < B;)s[R + a] = g[a]; return s } function Dr(s, g, a, B) { var R = -1, H = s == null ? 0 : s.length; for (B && H && (a = s[++R]); ++R < H;)a = g(a, s[R], R, s); return a } function n_(s, g, a, B) { var R = s == null ? 0 : s.length; for (B && R && (a = s[--R]); R--;)a = g(a, s[R], R, s); return a } function Nr(s, g) { for (var a = -1, B = s == null ? 0 : s.length; ++a < B;)if (g(s[a], a, s)) return !0; return !1 } var t_ = Gr("length"); function e_(s) { return s.split("") } function r_(s) { return s.match(so) || [] } function Ru(s, g, a) { var B; return a(s, function (R, H, tn) { if (g(R, H, tn)) return B = H, !1 }), B } function Le(s, g, a, B) { for (var R = s.length, H = a + (B ? 1 : -1); B ? H-- : ++H < R;)if (g(s[H], H, s)) return H; return -1 } function Wt(s, g, a) { return g === g ? p_(s, g, a) : Le(s, Su, a) } function i_(s, g, a, B) { for (var R = a - 1, H = s.length; ++R < H;)if (B(s[R], g)) return R; return -1 } function Su(s) { return s !== s } function Eu(s, g) { var a = s == null ? 0 : s.length; return a ? Hr(s, g) / a : we } function Gr(s) { return function (g) { return g == null ? l : g[s] } } function $r(s) { return function (g) { return s == null ? l : s[g] } } function Lu(s, g, a, B, R) { return R(s, function (H, tn, z) { a = B ? (B = !1, H) : g(a, H, tn, z) }), a } function u_(s, g) { var a = s.length; for (s.sort(g); a--;)s[a] = s[a].value; return s } function Hr(s, g) { for (var a, B = -1, R = s.length; ++B < R;) { var H = g(s[B]); H !== l && (a = a === l ? H : a + H) } return a } function qr(s, g) { for (var a = -1, B = Array(s); ++a < s;)B[a] = g(a); return B } function f_(s, g) { return X(g, function (a) { return [a, s[a]] }) } function Ou(s) { return s && s.slice(0, Mu(s) + 1).replace(Er, "") } function Cn(s) { return function (g) { return s(g) } } function Kr(s, g) { return X(g, function (a) { return s[a] }) } function te(s, g) { return s.has(g) } function bu(s, g) { for (var a = -1, B = s.length; ++a < B && Wt(g, s[a], 0) > -1;); return a } function Wu(s, g) { for (var a = s.length; a-- && Wt(g, s[a], 0) > -1;); return a } function l_(s, g) { for (var a = s.length, B = 0; a--;)s[a] === g && ++B; return B } var o_ = $r(zo), __ = $r(Zo); function s_(s) { return "\\" + Xo[s] } function c_(s, g) { return s == null ? l : s[g] } function Pt(s) { return $o.test(s) } function a_(s) { return Ho.test(s) } function h_(s) { for (var g, a = []; !(g = s.next()).done;)a.push(g.value); return a } function zr(s) { var g = -1, a = Array(s.size); return s.forEach(function (B, R) { a[++g] = [R, B] }), a } function Pu(s, g) { return function (a) { return s(g(a)) } } function ft(s, g) { for (var a = -1, B = s.length, R = 0, H = []; ++a < B;) { var tn = s[a]; (tn === g || tn === $) && (s[a] = $, H[R++] = a) } return H } function Oe(s) { var g = -1, a = Array(s.size); return s.forEach(function (B) { a[++g] = B }), a } function g_(s) { var g = -1, a = Array(s.size); return s.forEach(function (B) { a[++g] = [B, B] }), a } function p_(s, g, a) { for (var B = a - 1, R = s.length; ++B < R;)if (s[B] === g) return B; return -1 } function d_(s, g, a) { for (var B = a + 1; B--;)if (s[B] === g) return B; return B } function Mt(s) { return Pt(s) ? v_(s) : t_(s) } function Pn(s) { return Pt(s) ? C_(s) : e_(s) } function Mu(s) { for (var g = s.length; g-- && fo.test(s.charAt(g));); return g } var A_ = $r(Yo); function v_(s) { for (var g = Pr.lastIndex = 0; Pr.test(s);)++g; return g } function C_(s) { return s.match(Pr) || [] } function B_(s) { return s.match(Go) || [] } var w_ = function s(g) {
            g = g == null ? un : Ut.defaults(un.Object(), g, Ut.pick(un, qo)); var a = g.Array, B = g.Date, R = g.Error, H = g.Function, tn = g.Math, z = g.Object, Zr = g.RegExp, x_ = g.String, In = g.TypeError, be = a.prototype, m_ = H.prototype, Ft = z.prototype, We = g["__core-js_shared__"], Pe = m_.toString, K = Ft.hasOwnProperty, y_ = 0, Uu = function () { var n = /[^.]+$/.exec(We && We.keys && We.keys.IE_PROTO || ""); return n ? "Symbol(src)_1." + n : "" }(), Me = Ft.toString, T_ = Pe.call(z), I_ = un._, R_ = Zr("^" + Pe.call(K).replace(Sr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ue = Cu ? g.Buffer : l, lt = g.Symbol, Fe = g.Uint8Array, Fu = Ue ? Ue.allocUnsafe : l, De = Pu(z.getPrototypeOf, z), Du = z.create, Nu = Ft.propertyIsEnumerable, Ne = be.splice, Gu = lt ? lt.isConcatSpreadable : l, ee = lt ? lt.iterator : l, vt = lt ? lt.toStringTag : l, Ge = function () { try { var n = mt(z, "defineProperty"); return n({}, "", {}), n } catch { } }(), S_ = g.clearTimeout !== un.clearTimeout && g.clearTimeout, E_ = B && B.now !== un.Date.now && B.now, L_ = g.setTimeout !== un.setTimeout && g.setTimeout, $e = tn.ceil, He = tn.floor, Yr = z.getOwnPropertySymbols, O_ = Ue ? Ue.isBuffer : l, $u = g.isFinite, b_ = be.join, W_ = Pu(z.keys, z), en = tn.max, ln = tn.min, P_ = B.now, M_ = g.parseInt, Hu = tn.random, U_ = be.reverse, Xr = mt(g, "DataView"), re = mt(g, "Map"), Jr = mt(g, "Promise"), Dt = mt(g, "Set"), ie = mt(g, "WeakMap"), ue = mt(z, "create"), qe = ie && new ie, Nt = {}, F_ = yt(Xr), D_ = yt(re), N_ = yt(Jr), G_ = yt(Dt), $_ = yt(ie), Ke = lt ? lt.prototype : l, fe = Ke ? Ke.valueOf : l, qu = Ke ? Ke.toString : l; function u(n) { if (V(n) && !S(n) && !(n instanceof F)) { if (n instanceof Rn) return n; if (K.call(n, "__wrapped__")) return zf(n) } return new Rn(n) } var Gt = function () { function n() { } return function (t) { if (!J(t)) return {}; if (Du) return Du(t); n.prototype = t; var e = new n; return n.prototype = l, e } }(); function ze() { } function Rn(n, t) { this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = l } u.templateSettings = { escape: no, evaluate: to, interpolate: ki, variable: "", imports: { _: u } }, u.prototype = ze.prototype, u.prototype.constructor = u, Rn.prototype = Gt(ze.prototype), Rn.prototype.constructor = Rn; function F(n) { this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Gn, this.__views__ = [] } function H_() { var n = new F(this.__wrapped__); return n.__actions__ = hn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = hn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = hn(this.__views__), n } function q_() { if (this.__filtered__) { var n = new F(this); n.__dir__ = -1, n.__filtered__ = !0 } else n = this.clone(), n.__dir__ *= -1; return n } function K_() { var n = this.__wrapped__.value(), t = this.__dir__, e = S(n), r = t < 0, i = e ? n.length : 0, f = ec(0, i, this.__views__), o = f.start, _ = f.end, c = _ - o, p = r ? _ : o - 1, d = this.__iteratees__, v = d.length, C = 0, w = ln(c, this.__takeCount__); if (!e || !r && i == c && w == c) return gf(n, this.__actions__); var y = []; n: for (; c-- && C < w;) { p += t; for (var O = -1, T = n[p]; ++O < v;) { var U = d[O], N = U.iteratee, xn = U.type, an = N(T); if (xn == Fl) T = an; else if (!an) { if (xn == Yi) continue n; break n } } y[C++] = T } return y } F.prototype = Gt(ze.prototype), F.prototype.constructor = F; function Ct(n) { var t = -1, e = n == null ? 0 : n.length; for (this.clear(); ++t < e;) { var r = n[t]; this.set(r[0], r[1]) } } function z_() { this.__data__ = ue ? ue(null) : {}, this.size = 0 } function Z_(n) { var t = this.has(n) && delete this.__data__[n]; return this.size -= t ? 1 : 0, t } function Y_(n) { var t = this.__data__; if (ue) { var e = t[n]; return e === x ? l : e } return K.call(t, n) ? t[n] : l } function X_(n) { var t = this.__data__; return ue ? t[n] !== l : K.call(t, n) } function J_(n, t) { var e = this.__data__; return this.size += this.has(n) ? 0 : 1, e[n] = ue && t === l ? x : t, this } Ct.prototype.clear = z_, Ct.prototype.delete = Z_, Ct.prototype.get = Y_, Ct.prototype.has = X_, Ct.prototype.set = J_; function Yn(n) { var t = -1, e = n == null ? 0 : n.length; for (this.clear(); ++t < e;) { var r = n[t]; this.set(r[0], r[1]) } } function Q_() { this.__data__ = [], this.size = 0 } function V_(n) { var t = this.__data__, e = Ze(t, n); if (e < 0) return !1; var r = t.length - 1; return e == r ? t.pop() : Ne.call(t, e, 1), --this.size, !0 } function k_(n) { var t = this.__data__, e = Ze(t, n); return e < 0 ? l : t[e][1] } function j_(n) { return Ze(this.__data__, n) > -1 } function ns(n, t) { var e = this.__data__, r = Ze(e, n); return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this } Yn.prototype.clear = Q_, Yn.prototype.delete = V_, Yn.prototype.get = k_, Yn.prototype.has = j_, Yn.prototype.set = ns; function Xn(n) { var t = -1, e = n == null ? 0 : n.length; for (this.clear(); ++t < e;) { var r = n[t]; this.set(r[0], r[1]) } } function ts() { this.size = 0, this.__data__ = { hash: new Ct, map: new (re || Yn), string: new Ct } } function es(n) { var t = ir(this, n).delete(n); return this.size -= t ? 1 : 0, t } function rs(n) { return ir(this, n).get(n) } function is(n) { return ir(this, n).has(n) } function us(n, t) { var e = ir(this, n), r = e.size; return e.set(n, t), this.size += e.size == r ? 0 : 1, this } Xn.prototype.clear = ts, Xn.prototype.delete = es, Xn.prototype.get = rs, Xn.prototype.has = is, Xn.prototype.set = us; function Bt(n) { var t = -1, e = n == null ? 0 : n.length; for (this.__data__ = new Xn; ++t < e;)this.add(n[t]) } function fs(n) { return this.__data__.set(n, x), this } function ls(n) { return this.__data__.has(n) } Bt.prototype.add = Bt.prototype.push = fs, Bt.prototype.has = ls; function Mn(n) { var t = this.__data__ = new Yn(n); this.size = t.size } function os() { this.__data__ = new Yn, this.size = 0 } function _s(n) { var t = this.__data__, e = t.delete(n); return this.size = t.size, e } function ss(n) { return this.__data__.get(n) } function cs(n) { return this.__data__.has(n) } function as(n, t) { var e = this.__data__; if (e instanceof Yn) { var r = e.__data__; if (!re || r.length < I - 1) return r.push([n, t]), this.size = ++e.size, this; e = this.__data__ = new Xn(r) } return e.set(n, t), this.size = e.size, this } Mn.prototype.clear = os, Mn.prototype.delete = _s, Mn.prototype.get = ss, Mn.prototype.has = cs, Mn.prototype.set = as; function Ku(n, t) { var e = S(n), r = !e && Tt(n), i = !e && !r && at(n), f = !e && !r && !i && Kt(n), o = e || r || i || f, _ = o ? qr(n.length, x_) : [], c = _.length; for (var p in n) (t || K.call(n, p)) && !(o && (p == "length" || i && (p == "offset" || p == "parent") || f && (p == "buffer" || p == "byteLength" || p == "byteOffset") || kn(p, c))) && _.push(p); return _ } function zu(n) { var t = n.length; return t ? n[fi(0, t - 1)] : l } function hs(n, t) { return ur(hn(n), wt(t, 0, n.length)) } function gs(n) { return ur(hn(n)) } function Qr(n, t, e) { (e !== l && !Un(n[t], e) || e === l && !(t in n)) && Jn(n, t, e) } function le(n, t, e) { var r = n[t]; (!(K.call(n, t) && Un(r, e)) || e === l && !(t in n)) && Jn(n, t, e) } function Ze(n, t) { for (var e = n.length; e--;)if (Un(n[e][0], t)) return e; return -1 } function ps(n, t, e, r) { return ot(n, function (i, f, o) { t(r, i, e(i), o) }), r } function Zu(n, t) { return n && Hn(t, rn(t), n) } function ds(n, t) { return n && Hn(t, pn(t), n) } function Jn(n, t, e) { t == "__proto__" && Ge ? Ge(n, t, { configurable: !0, enumerable: !0, value: e, writable: !0 }) : n[t] = e } function Vr(n, t) { for (var e = -1, r = t.length, i = a(r), f = n == null; ++e < r;)i[e] = f ? l : Oi(n, t[e]); return i } function wt(n, t, e) { return n === n && (e !== l && (n = n <= e ? n : e), t !== l && (n = n >= t ? n : t)), n } function Sn(n, t, e, r, i, f) { var o, _ = t & E, c = t & Q, p = t & nn; if (e && (o = i ? e(n, r, i, f) : e(n)), o !== l) return o; if (!J(n)) return n; var d = S(n); if (d) { if (o = ic(n), !_) return hn(n, o) } else { var v = on(n), C = v == ye || v == Xi; if (at(n)) return Af(n, _); if (v == Zn || v == Lt || C && !i) { if (o = c || C ? {} : Uf(n), !_) return c ? Ys(n, ds(o, n)) : Zs(n, Zu(o, n)) } else { if (!Z[v]) return i ? n : {}; o = uc(n, v, _) } } f || (f = new Mn); var w = f.get(n); if (w) return w; f.set(n, o), cl(n) ? n.forEach(function (T) { o.add(Sn(T, t, e, T, n, f)) }) : _l(n) && n.forEach(function (T, U) { o.set(U, Sn(T, t, e, U, n, f)) }); var y = p ? c ? Ai : di : c ? pn : rn, O = d ? l : y(n); return Tn(O || n, function (T, U) { O && (U = T, T = n[U]), le(o, U, Sn(T, t, e, U, n, f)) }), o } function As(n) { var t = rn(n); return function (e) { return Yu(e, n, t) } } function Yu(n, t, e) { var r = e.length; if (n == null) return !r; for (n = z(n); r--;) { var i = e[r], f = t[i], o = n[i]; if (o === l && !(i in n) || !f(o)) return !1 } return !0 } function Xu(n, t, e) { if (typeof n != "function") throw new In(b); return ge(function () { n.apply(l, e) }, t) } function oe(n, t, e, r) { var i = -1, f = Ee, o = !0, _ = n.length, c = [], p = t.length; if (!_) return c; e && (t = X(t, Cn(e))), r ? (f = Fr, o = !1) : t.length >= I && (f = te, o = !1, t = new Bt(t)); n: for (; ++i < _;) { var d = n[i], v = e == null ? d : e(d); if (d = r || d !== 0 ? d : 0, o && v === v) { for (var C = p; C--;)if (t[C] === v) continue n; c.push(d) } else f(t, v, r) || c.push(d) } return c } var ot = xf($n), Ju = xf(jr, !0); function vs(n, t) { var e = !0; return ot(n, function (r, i, f) { return e = !!t(r, i, f), e }), e } function Ye(n, t, e) { for (var r = -1, i = n.length; ++r < i;) { var f = n[r], o = t(f); if (o != null && (_ === l ? o === o && !wn(o) : e(o, _))) var _ = o, c = f } return c } function Cs(n, t, e, r) { var i = n.length; for (e = L(e), e < 0 && (e = -e > i ? 0 : i + e), r = r === l || r > i ? i : L(r), r < 0 && (r += i), r = e > r ? 0 : hl(r); e < r;)n[e++] = t; return n } function Qu(n, t) { var e = []; return ot(n, function (r, i, f) { t(r, i, f) && e.push(r) }), e } function fn(n, t, e, r, i) { var f = -1, o = n.length; for (e || (e = lc), i || (i = []); ++f < o;) { var _ = n[f]; t > 0 && e(_) ? t > 1 ? fn(_, t - 1, e, r, i) : ut(i, _) : r || (i[i.length] = _) } return i } var kr = mf(), Vu = mf(!0); function $n(n, t) { return n && kr(n, t, rn) } function jr(n, t) { return n && Vu(n, t, rn) } function Xe(n, t) { return it(t, function (e) { return jn(n[e]) }) } function xt(n, t) { t = st(t, n); for (var e = 0, r = t.length; n != null && e < r;)n = n[qn(t[e++])]; return e && e == r ? n : l } function ku(n, t, e) { var r = t(n); return S(n) ? r : ut(r, e(n)) } function sn(n) { return n == null ? n === l ? Yl : zl : vt && vt in z(n) ? tc(n) : gc(n) } function ni(n, t) { return n > t } function Bs(n, t) { return n != null && K.call(n, t) } function ws(n, t) { return n != null && t in z(n) } function xs(n, t, e) { return n >= ln(t, e) && n < en(t, e) } function ti(n, t, e) { for (var r = e ? Fr : Ee, i = n[0].length, f = n.length, o = f, _ = a(f), c = 1 / 0, p = []; o--;) { var d = n[o]; o && t && (d = X(d, Cn(t))), c = ln(d.length, c), _[o] = !e && (t || i >= 120 && d.length >= 120) ? new Bt(o && d) : l } d = n[0]; var v = -1, C = _[0]; n: for (; ++v < i && p.length < c;) { var w = d[v], y = t ? t(w) : w; if (w = e || w !== 0 ? w : 0, !(C ? te(C, y) : r(p, y, e))) { for (o = f; --o;) { var O = _[o]; if (!(O ? te(O, y) : r(n[o], y, e))) continue n } C && C.push(y), p.push(w) } } return p } function ms(n, t, e, r) { return $n(n, function (i, f, o) { t(r, e(i), f, o) }), r } function _e(n, t, e) { t = st(t, n), n = Gf(n, t); var r = n == null ? n : n[qn(Ln(t))]; return r == null ? l : vn(r, n, e) } function ju(n) { return V(n) && sn(n) == Lt } function ys(n) { return V(n) && sn(n) == ne } function Ts(n) { return V(n) && sn(n) == Jt } function se(n, t, e, r, i) { return n === t ? !0 : n == null || t == null || !V(n) && !V(t) ? n !== n && t !== t : Is(n, t, e, r, se, i) } function Is(n, t, e, r, i, f) { var o = S(n), _ = S(t), c = o ? xe : on(n), p = _ ? xe : on(t); c = c == Lt ? Zn : c, p = p == Lt ? Zn : p; var d = c == Zn, v = p == Zn, C = c == p; if (C && at(n)) { if (!at(t)) return !1; o = !0, d = !1 } if (C && !d) return f || (f = new Mn), o || Kt(n) ? Wf(n, t, e, r, i, f) : js(n, t, c, e, r, i, f); if (!(e & An)) { var w = d && K.call(n, "__wrapped__"), y = v && K.call(t, "__wrapped__"); if (w || y) { var O = w ? n.value() : n, T = y ? t.value() : t; return f || (f = new Mn), i(O, T, e, r, f) } } return C ? (f || (f = new Mn), nc(n, t, e, r, i, f)) : !1 } function Rs(n) { return V(n) && on(n) == bn } function ei(n, t, e, r) { var i = e.length, f = i, o = !r; if (n == null) return !f; for (n = z(n); i--;) { var _ = e[i]; if (o && _[2] ? _[1] !== n[_[0]] : !(_[0] in n)) return !1 } for (; ++i < f;) { _ = e[i]; var c = _[0], p = n[c], d = _[1]; if (o && _[2]) { if (p === l && !(c in n)) return !1 } else { var v = new Mn; if (r) var C = r(p, d, c, n, t, v); if (!(C === l ? se(d, p, An | Kn, r, v) : C)) return !1 } } return !0 } function nf(n) { if (!J(n) || _c(n)) return !1; var t = jn(n) ? R_ : Ao; return t.test(yt(n)) } function Ss(n) { return V(n) && sn(n) == Vt } function Es(n) { return V(n) && on(n) == Wn } function Ls(n) { return V(n) && cr(n.length) && !!Y[sn(n)] } function tf(n) { return typeof n == "function" ? n : n == null ? dn : typeof n == "object" ? S(n) ? uf(n[0], n[1]) : rf(n) : yl(n) } function ri(n) { if (!he(n)) return W_(n); var t = []; for (var e in z(n)) K.call(n, e) && e != "constructor" && t.push(e); return t } function Os(n) { if (!J(n)) return hc(n); var t = he(n), e = []; for (var r in n) r == "constructor" && (t || !K.call(n, r)) || e.push(r); return e } function ii(n, t) { return n < t } function ef(n, t) { var e = -1, r = gn(n) ? a(n.length) : []; return ot(n, function (i, f, o) { r[++e] = t(i, f, o) }), r } function rf(n) { var t = Ci(n); return t.length == 1 && t[0][2] ? Df(t[0][0], t[0][1]) : function (e) { return e === n || ei(e, n, t) } } function uf(n, t) { return wi(n) && Ff(t) ? Df(qn(n), t) : function (e) { var r = Oi(e, n); return r === l && r === t ? bi(e, n) : se(t, r, An | Kn) } } function Je(n, t, e, r, i) { n !== t && kr(t, function (f, o) { if (i || (i = new Mn), J(f)) bs(n, t, o, e, Je, r, i); else { var _ = r ? r(mi(n, o), f, o + "", n, t, i) : l; _ === l && (_ = f), Qr(n, o, _) } }, pn) } function bs(n, t, e, r, i, f, o) { var _ = mi(n, e), c = mi(t, e), p = o.get(c); if (p) { Qr(n, e, p); return } var d = f ? f(_, c, e + "", n, t, o) : l, v = d === l; if (v) { var C = S(c), w = !C && at(c), y = !C && !w && Kt(c); d = c, C || w || y ? S(_) ? d = _ : k(_) ? d = hn(_) : w ? (v = !1, d = Af(c, !0)) : y ? (v = !1, d = vf(c, !0)) : d = [] : pe(c) || Tt(c) ? (d = _, Tt(_) ? d = gl(_) : (!J(_) || jn(_)) && (d = Uf(c))) : v = !1 } v && (o.set(c, d), i(d, c, r, f, o), o.delete(c)), Qr(n, e, d) } function ff(n, t) { var e = n.length; if (!!e) return t += t < 0 ? e : 0, kn(t, e) ? n[t] : l } function lf(n, t, e) { t.length ? t = X(t, function (f) { return S(f) ? function (o) { return xt(o, f.length === 1 ? f[0] : f) } : f }) : t = [dn]; var r = -1; t = X(t, Cn(m())); var i = ef(n, function (f, o, _) { var c = X(t, function (p) { return p(f) }); return { criteria: c, index: ++r, value: f } }); return u_(i, function (f, o) { return zs(f, o, e) }) } function Ws(n, t) { return of(n, t, function (e, r) { return bi(n, r) }) } function of(n, t, e) { for (var r = -1, i = t.length, f = {}; ++r < i;) { var o = t[r], _ = xt(n, o); e(_, o) && ce(f, st(o, n), _) } return f } function Ps(n) { return function (t) { return xt(t, n) } } function ui(n, t, e, r) { var i = r ? i_ : Wt, f = -1, o = t.length, _ = n; for (n === t && (t = hn(t)), e && (_ = X(n, Cn(e))); ++f < o;)for (var c = 0, p = t[f], d = e ? e(p) : p; (c = i(_, d, c, r)) > -1;)_ !== n && Ne.call(_, c, 1), Ne.call(n, c, 1); return n } function _f(n, t) { for (var e = n ? t.length : 0, r = e - 1; e--;) { var i = t[e]; if (e == r || i !== f) { var f = i; kn(i) ? Ne.call(n, i, 1) : _i(n, i) } } return n } function fi(n, t) { return n + He(Hu() * (t - n + 1)) } function Ms(n, t, e, r) { for (var i = -1, f = en($e((t - n) / (e || 1)), 0), o = a(f); f--;)o[r ? f : ++i] = n, n += e; return o } function li(n, t) { var e = ""; if (!n || t < 1 || t > rt) return e; do t % 2 && (e += n), t = He(t / 2), t && (n += n); while (t); return e } function P(n, t) { return yi(Nf(n, t, dn), n + "") } function Us(n) { return zu(zt(n)) } function Fs(n, t) { var e = zt(n); return ur(e, wt(t, 0, e.length)) } function ce(n, t, e, r) { if (!J(n)) return n; t = st(t, n); for (var i = -1, f = t.length, o = f - 1, _ = n; _ != null && ++i < f;) { var c = qn(t[i]), p = e; if (c === "__proto__" || c === "constructor" || c === "prototype") return n; if (i != o) { var d = _[c]; p = r ? r(d, c, _) : l, p === l && (p = J(d) ? d : kn(t[i + 1]) ? [] : {}) } le(_, c, p), _ = _[c] } return n } var sf = qe ? function (n, t) { return qe.set(n, t), n } : dn, Ds = Ge ? function (n, t) { return Ge(n, "toString", { configurable: !0, enumerable: !1, value: Pi(t), writable: !0 }) } : dn; function Ns(n) { return ur(zt(n)) } function En(n, t, e) { var r = -1, i = n.length; t < 0 && (t = -t > i ? 0 : i + t), e = e > i ? i : e, e < 0 && (e += i), i = t > e ? 0 : e - t >>> 0, t >>>= 0; for (var f = a(i); ++r < i;)f[r] = n[r + t]; return f } function Gs(n, t) { var e; return ot(n, function (r, i, f) { return e = t(r, i, f), !e }), !!e } function Qe(n, t, e) { var r = 0, i = n == null ? r : n.length; if (typeof t == "number" && t === t && i <= $l) { for (; r < i;) { var f = r + i >>> 1, o = n[f]; o !== null && !wn(o) && (e ? o <= t : o < t) ? r = f + 1 : i = f } return i } return oi(n, t, dn, e) } function oi(n, t, e, r) { var i = 0, f = n == null ? 0 : n.length; if (f === 0) return 0; t = e(t); for (var o = t !== t, _ = t === null, c = wn(t), p = t === l; i < f;) { var d = He((i + f) / 2), v = e(n[d]), C = v !== l, w = v === null, y = v === v, O = wn(v); if (o) var T = r || y; else p ? T = y && (r || C) : _ ? T = y && C && (r || !w) : c ? T = y && C && !w && (r || !O) : w || O ? T = !1 : T = r ? v <= t : v < t; T ? i = d + 1 : f = d } return ln(f, Gl) } function cf(n, t) { for (var e = -1, r = n.length, i = 0, f = []; ++e < r;) { var o = n[e], _ = t ? t(o) : o; if (!e || !Un(_, c)) { var c = _; f[i++] = o === 0 ? 0 : o } } return f } function af(n) { return typeof n == "number" ? n : wn(n) ? we : +n } function Bn(n) { if (typeof n == "string") return n; if (S(n)) return X(n, Bn) + ""; if (wn(n)) return qu ? qu.call(n) : ""; var t = n + ""; return t == "0" && 1 / n == -dt ? "-0" : t } function _t(n, t, e) { var r = -1, i = Ee, f = n.length, o = !0, _ = [], c = _; if (e) o = !1, i = Fr; else if (f >= I) { var p = t ? null : Vs(n); if (p) return Oe(p); o = !1, i = te, c = new Bt } else c = t ? [] : _; n: for (; ++r < f;) { var d = n[r], v = t ? t(d) : d; if (d = e || d !== 0 ? d : 0, o && v === v) { for (var C = c.length; C--;)if (c[C] === v) continue n; t && c.push(v), _.push(d) } else i(c, v, e) || (c !== _ && c.push(v), _.push(d)) } return _ } function _i(n, t) { return t = st(t, n), n = Gf(n, t), n == null || delete n[qn(Ln(t))] } function hf(n, t, e, r) { return ce(n, t, e(xt(n, t)), r) } function Ve(n, t, e, r) { for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && t(n[f], f, n);); return e ? En(n, r ? 0 : f, r ? f + 1 : i) : En(n, r ? f + 1 : 0, r ? i : f) } function gf(n, t) { var e = n; return e instanceof F && (e = e.value()), Dr(t, function (r, i) { return i.func.apply(i.thisArg, ut([r], i.args)) }, e) } function si(n, t, e) { var r = n.length; if (r < 2) return r ? _t(n[0]) : []; for (var i = -1, f = a(r); ++i < r;)for (var o = n[i], _ = -1; ++_ < r;)_ != i && (f[i] = oe(f[i] || o, n[_], t, e)); return _t(fn(f, 1), t, e) } function pf(n, t, e) { for (var r = -1, i = n.length, f = t.length, o = {}; ++r < i;) { var _ = r < f ? t[r] : l; e(o, n[r], _) } return o } function ci(n) { return k(n) ? n : [] } function ai(n) { return typeof n == "function" ? n : dn } function st(n, t) { return S(n) ? n : wi(n, t) ? [n] : Kf(q(n)) } var $s = P; function ct(n, t, e) { var r = n.length; return e = e === l ? r : e, !t && e >= r ? n : En(n, t, e) } var df = S_ || function (n) { return un.clearTimeout(n) }; function Af(n, t) { if (t) return n.slice(); var e = n.length, r = Fu ? Fu(e) : new n.constructor(e); return n.copy(r), r } function hi(n) { var t = new n.constructor(n.byteLength); return new Fe(t).set(new Fe(n)), t } function Hs(n, t) { var e = t ? hi(n.buffer) : n.buffer; return new n.constructor(e, n.byteOffset, n.byteLength) } function qs(n) { var t = new n.constructor(n.source, ji.exec(n)); return t.lastIndex = n.lastIndex, t } function Ks(n) { return fe ? z(fe.call(n)) : {} } function vf(n, t) { var e = t ? hi(n.buffer) : n.buffer; return new n.constructor(e, n.byteOffset, n.length) } function Cf(n, t) { if (n !== t) { var e = n !== l, r = n === null, i = n === n, f = wn(n), o = t !== l, _ = t === null, c = t === t, p = wn(t); if (!_ && !p && !f && n > t || f && o && c && !_ && !p || r && o && c || !e && c || !i) return 1; if (!r && !f && !p && n < t || p && e && i && !r && !f || _ && e && i || !o && i || !c) return -1 } return 0 } function zs(n, t, e) { for (var r = -1, i = n.criteria, f = t.criteria, o = i.length, _ = e.length; ++r < o;) { var c = Cf(i[r], f[r]); if (c) { if (r >= _) return c; var p = e[r]; return c * (p == "desc" ? -1 : 1) } } return n.index - t.index } function Bf(n, t, e, r) { for (var i = -1, f = n.length, o = e.length, _ = -1, c = t.length, p = en(f - o, 0), d = a(c + p), v = !r; ++_ < c;)d[_] = t[_]; for (; ++i < o;)(v || i < f) && (d[e[i]] = n[i]); for (; p--;)d[_++] = n[i++]; return d } function wf(n, t, e, r) { for (var i = -1, f = n.length, o = -1, _ = e.length, c = -1, p = t.length, d = en(f - _, 0), v = a(d + p), C = !r; ++i < d;)v[i] = n[i]; for (var w = i; ++c < p;)v[w + c] = t[c]; for (; ++o < _;)(C || i < f) && (v[w + e[o]] = n[i++]); return v } function hn(n, t) { var e = -1, r = n.length; for (t || (t = a(r)); ++e < r;)t[e] = n[e]; return t } function Hn(n, t, e, r) { var i = !e; e || (e = {}); for (var f = -1, o = t.length; ++f < o;) { var _ = t[f], c = r ? r(e[_], n[_], _, e, n) : l; c === l && (c = n[_]), i ? Jn(e, _, c) : le(e, _, c) } return e } function Zs(n, t) { return Hn(n, Bi(n), t) } function Ys(n, t) { return Hn(n, Pf(n), t) } function ke(n, t) { return function (e, r) { var i = S(e) ? ko : ps, f = t ? t() : {}; return i(e, n, m(r, 2), f) } } function $t(n) { return P(function (t, e) { var r = -1, i = e.length, f = i > 1 ? e[i - 1] : l, o = i > 2 ? e[2] : l; for (f = n.length > 3 && typeof f == "function" ? (i--, f) : l, o && cn(e[0], e[1], o) && (f = i < 3 ? l : f, i = 1), t = z(t); ++r < i;) { var _ = e[r]; _ && n(t, _, r, f) } return t }) } function xf(n, t) { return function (e, r) { if (e == null) return e; if (!gn(e)) return n(e, r); for (var i = e.length, f = t ? i : -1, o = z(e); (t ? f-- : ++f < i) && r(o[f], f, o) !== !1;); return e } } function mf(n) { return function (t, e, r) { for (var i = -1, f = z(t), o = r(t), _ = o.length; _--;) { var c = o[n ? _ : ++i]; if (e(f[c], c, f) === !1) break } return t } } function Xs(n, t, e) { var r = t & _n, i = ae(n); function f() { var o = this && this !== un && this instanceof f ? i : n; return o.apply(r ? e : this, arguments) } return f } function yf(n) { return function (t) { t = q(t); var e = Pt(t) ? Pn(t) : l, r = e ? e[0] : t.charAt(0), i = e ? ct(e, 1).join("") : t.slice(1); return r[n]() + i } } function Ht(n) { return function (t) { return Dr(xl(wl(t).replace(Do, "")), n, "") } } function ae(n) { return function () { var t = arguments; switch (t.length) { case 0: return new n; case 1: return new n(t[0]); case 2: return new n(t[0], t[1]); case 3: return new n(t[0], t[1], t[2]); case 4: return new n(t[0], t[1], t[2], t[3]); case 5: return new n(t[0], t[1], t[2], t[3], t[4]); case 6: return new n(t[0], t[1], t[2], t[3], t[4], t[5]); case 7: return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]) }var e = Gt(n.prototype), r = n.apply(e, t); return J(r) ? r : e } } function Js(n, t, e) { var r = ae(n); function i() { for (var f = arguments.length, o = a(f), _ = f, c = qt(i); _--;)o[_] = arguments[_]; var p = f < 3 && o[0] !== c && o[f - 1] !== c ? [] : ft(o, c); if (f -= p.length, f < e) return Ef(n, t, je, i.placeholder, l, o, p, l, l, e - f); var d = this && this !== un && this instanceof i ? r : n; return vn(d, this, o) } return i } function Tf(n) { return function (t, e, r) { var i = z(t); if (!gn(t)) { var f = m(e, 3); t = rn(t), e = function (_) { return f(i[_], _, i) } } var o = n(t, e, r); return o > -1 ? i[f ? t[o] : o] : l } } function If(n) { return Vn(function (t) { var e = t.length, r = e, i = Rn.prototype.thru; for (n && t.reverse(); r--;) { var f = t[r]; if (typeof f != "function") throw new In(b); if (i && !o && rr(f) == "wrapper") var o = new Rn([], !0) } for (r = o ? r : e; ++r < e;) { f = t[r]; var _ = rr(f), c = _ == "wrapper" ? vi(f) : l; c && xi(c[0]) && c[1] == (zn | Dn | Nn | Yt) && !c[4].length && c[9] == 1 ? o = o[rr(c[0])].apply(o, c[3]) : o = f.length == 1 && xi(f) ? o[_]() : o.thru(f) } return function () { var p = arguments, d = p[0]; if (o && p.length == 1 && S(d)) return o.plant(d).value(); for (var v = 0, C = e ? t[v].apply(this, p) : d; ++v < e;)C = t[v].call(this, C); return C } }) } function je(n, t, e, r, i, f, o, _, c, p) { var d = t & zn, v = t & _n, C = t & pt, w = t & (Dn | St), y = t & vr, O = C ? l : ae(n); function T() { for (var U = arguments.length, N = a(U), xn = U; xn--;)N[xn] = arguments[xn]; if (w) var an = qt(T), mn = l_(N, an); if (r && (N = Bf(N, r, i, w)), f && (N = wf(N, f, o, w)), U -= mn, w && U < p) { var j = ft(N, an); return Ef(n, t, je, T.placeholder, e, N, j, _, c, p - U) } var Fn = v ? e : this, tt = C ? Fn[n] : n; return U = N.length, _ ? N = pc(N, _) : y && U > 1 && N.reverse(), d && c < U && (N.length = c), this && this !== un && this instanceof T && (tt = O || ae(tt)), tt.apply(Fn, N) } return T } function Rf(n, t) { return function (e, r) { return ms(e, n, t(r), {}) } } function nr(n, t) { return function (e, r) { var i; if (e === l && r === l) return t; if (e !== l && (i = e), r !== l) { if (i === l) return r; typeof e == "string" || typeof r == "string" ? (e = Bn(e), r = Bn(r)) : (e = af(e), r = af(r)), i = n(e, r) } return i } } function gi(n) { return Vn(function (t) { return t = X(t, Cn(m())), P(function (e) { var r = this; return n(t, function (i) { return vn(i, r, e) }) }) }) } function tr(n, t) { t = t === l ? " " : Bn(t); var e = t.length; if (e < 2) return e ? li(t, n) : t; var r = li(t, $e(n / Mt(t))); return Pt(t) ? ct(Pn(r), 0, n).join("") : r.slice(0, n) } function Qs(n, t, e, r) { var i = t & _n, f = ae(n); function o() { for (var _ = -1, c = arguments.length, p = -1, d = r.length, v = a(d + c), C = this && this !== un && this instanceof o ? f : n; ++p < d;)v[p] = r[p]; for (; c--;)v[p++] = arguments[++_]; return vn(C, i ? e : this, v) } return o } function Sf(n) { return function (t, e, r) { return r && typeof r != "number" && cn(t, e, r) && (e = r = l), t = nt(t), e === l ? (e = t, t = 0) : e = nt(e), r = r === l ? t < e ? 1 : -1 : nt(r), Ms(t, e, r, n) } } function er(n) { return function (t, e) { return typeof t == "string" && typeof e == "string" || (t = On(t), e = On(e)), n(t, e) } } function Ef(n, t, e, r, i, f, o, _, c, p) { var d = t & Dn, v = d ? o : l, C = d ? l : o, w = d ? f : l, y = d ? l : f; t |= d ? Nn : Et, t &= ~(d ? Et : Nn), t & Zi || (t &= ~(_n | pt)); var O = [n, t, i, w, v, y, C, _, c, p], T = e.apply(l, O); return xi(n) && $f(T, O), T.placeholder = r, Hf(T, n, t) } function pi(n) { var t = tn[n]; return function (e, r) { if (e = On(e), r = r == null ? 0 : ln(L(r), 292), r && $u(e)) { var i = (q(e) + "e").split("e"), f = t(i[0] + "e" + (+i[1] + r)); return i = (q(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r)) } return t(e) } } var Vs = Dt && 1 / Oe(new Dt([, -0]))[1] == dt ? function (n) { return new Dt(n) } : Fi; function Lf(n) { return function (t) { var e = on(t); return e == bn ? zr(t) : e == Wn ? g_(t) : f_(t, n(t)) } } function Qn(n, t, e, r, i, f, o, _) { var c = t & pt; if (!c && typeof n != "function") throw new In(b); var p = r ? r.length : 0; if (p || (t &= ~(Nn | Et), r = i = l), o = o === l ? o : en(L(o), 0), _ = _ === l ? _ : L(_), p -= i ? i.length : 0, t & Et) { var d = r, v = i; r = i = l } var C = c ? l : vi(n), w = [n, t, e, r, i, d, v, f, o, _]; if (C && ac(w, C), n = w[0], t = w[1], e = w[2], r = w[3], i = w[4], _ = w[9] = w[9] === l ? c ? 0 : n.length : en(w[9] - p, 0), !_ && t & (Dn | St) && (t &= ~(Dn | St)), !t || t == _n) var y = Xs(n, t, e); else t == Dn || t == St ? y = Js(n, t, _) : (t == Nn || t == (_n | Nn)) && !i.length ? y = Qs(n, t, e, r) : y = je.apply(l, w); var O = C ? sf : $f; return Hf(O(y, w), n, t) } function Of(n, t, e, r) { return n === l || Un(n, Ft[e]) && !K.call(r, e) ? t : n } function bf(n, t, e, r, i, f) { return J(n) && J(t) && (f.set(t, n), Je(n, t, l, bf, f), f.delete(t)), n } function ks(n) { return pe(n) ? l : n } function Wf(n, t, e, r, i, f) { var o = e & An, _ = n.length, c = t.length; if (_ != c && !(o && c > _)) return !1; var p = f.get(n), d = f.get(t); if (p && d) return p == t && d == n; var v = -1, C = !0, w = e & Kn ? new Bt : l; for (f.set(n, t), f.set(t, n); ++v < _;) { var y = n[v], O = t[v]; if (r) var T = o ? r(O, y, v, t, n, f) : r(y, O, v, n, t, f); if (T !== l) { if (T) continue; C = !1; break } if (w) { if (!Nr(t, function (U, N) { if (!te(w, N) && (y === U || i(y, U, e, r, f))) return w.push(N) })) { C = !1; break } } else if (!(y === O || i(y, O, e, r, f))) { C = !1; break } } return f.delete(n), f.delete(t), C } function js(n, t, e, r, i, f, o) { switch (e) { case Ot: if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1; n = n.buffer, t = t.buffer; case ne: return !(n.byteLength != t.byteLength || !f(new Fe(n), new Fe(t))); case Xt: case Jt: case Qt: return Un(+n, +t); case me: return n.name == t.name && n.message == t.message; case Vt: case kt: return n == t + ""; case bn: var _ = zr; case Wn: var c = r & An; if (_ || (_ = Oe), n.size != t.size && !c) return !1; var p = o.get(n); if (p) return p == t; r |= Kn, o.set(n, t); var d = Wf(_(n), _(t), r, i, f, o); return o.delete(n), d; case Te: if (fe) return fe.call(n) == fe.call(t) }return !1 } function nc(n, t, e, r, i, f) { var o = e & An, _ = di(n), c = _.length, p = di(t), d = p.length; if (c != d && !o) return !1; for (var v = c; v--;) { var C = _[v]; if (!(o ? C in t : K.call(t, C))) return !1 } var w = f.get(n), y = f.get(t); if (w && y) return w == t && y == n; var O = !0; f.set(n, t), f.set(t, n); for (var T = o; ++v < c;) { C = _[v]; var U = n[C], N = t[C]; if (r) var xn = o ? r(N, U, C, t, n, f) : r(U, N, C, n, t, f); if (!(xn === l ? U === N || i(U, N, e, r, f) : xn)) { O = !1; break } T || (T = C == "constructor") } if (O && !T) { var an = n.constructor, mn = t.constructor; an != mn && "constructor" in n && "constructor" in t && !(typeof an == "function" && an instanceof an && typeof mn == "function" && mn instanceof mn) && (O = !1) } return f.delete(n), f.delete(t), O } function Vn(n) { return yi(Nf(n, l, Xf), n + "") } function di(n) { return ku(n, rn, Bi) } function Ai(n) { return ku(n, pn, Pf) } var vi = qe ? function (n) { return qe.get(n) } : Fi; function rr(n) { for (var t = n.name + "", e = Nt[t], r = K.call(Nt, t) ? e.length : 0; r--;) { var i = e[r], f = i.func; if (f == null || f == n) return i.name } return t } function qt(n) { var t = K.call(u, "placeholder") ? u : n; return t.placeholder } function m() { var n = u.iteratee || Mi; return n = n === Mi ? tf : n, arguments.length ? n(arguments[0], arguments[1]) : n } function ir(n, t) { var e = n.__data__; return oc(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map } function Ci(n) { for (var t = rn(n), e = t.length; e--;) { var r = t[e], i = n[r]; t[e] = [r, i, Ff(i)] } return t } function mt(n, t) { var e = c_(n, t); return nf(e) ? e : l } function tc(n) { var t = K.call(n, vt), e = n[vt]; try { n[vt] = l; var r = !0 } catch { } var i = Me.call(n); return r && (t ? n[vt] = e : delete n[vt]), i } var Bi = Yr ? function (n) { return n == null ? [] : (n = z(n), it(Yr(n), function (t) { return Nu.call(n, t) })) } : Di, Pf = Yr ? function (n) { for (var t = []; n;)ut(t, Bi(n)), n = De(n); return t } : Di, on = sn; (Xr && on(new Xr(new ArrayBuffer(1))) != Ot || re && on(new re) != bn || Jr && on(Jr.resolve()) != Ji || Dt && on(new Dt) != Wn || ie && on(new ie) != jt) && (on = function (n) { var t = sn(n), e = t == Zn ? n.constructor : l, r = e ? yt(e) : ""; if (r) switch (r) { case F_: return Ot; case D_: return bn; case N_: return Ji; case G_: return Wn; case $_: return jt }return t }); function ec(n, t, e) { for (var r = -1, i = e.length; ++r < i;) { var f = e[r], o = f.size; switch (f.type) { case "drop": n += o; break; case "dropRight": t -= o; break; case "take": t = ln(t, n + o); break; case "takeRight": n = en(n, t - o); break } } return { start: n, end: t } } function rc(n) { var t = n.match(oo); return t ? t[1].split(_o) : [] } function Mf(n, t, e) { t = st(t, n); for (var r = -1, i = t.length, f = !1; ++r < i;) { var o = qn(t[r]); if (!(f = n != null && e(n, o))) break; n = n[o] } return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && cr(i) && kn(o, i) && (S(n) || Tt(n))) } function ic(n) { var t = n.length, e = new n.constructor(t); return t && typeof n[0] == "string" && K.call(n, "index") && (e.index = n.index, e.input = n.input), e } function Uf(n) { return typeof n.constructor == "function" && !he(n) ? Gt(De(n)) : {} } function uc(n, t, e) { var r = n.constructor; switch (t) { case ne: return hi(n); case Xt: case Jt: return new r(+n); case Ot: return Hs(n, e); case Cr: case Br: case wr: case xr: case mr: case yr: case Tr: case Ir: case Rr: return vf(n, e); case bn: return new r; case Qt: case kt: return new r(n); case Vt: return qs(n); case Wn: return new r; case Te: return Ks(n) } } function fc(n, t) {
                var e = t.length; if (!e) return n; var r = e - 1; return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(lo, `{
/* [wrapped with `+ t + `] */
`)
            } function lc(n) { return S(n) || Tt(n) || !!(Gu && n && n[Gu]) } function kn(n, t) { var e = typeof n; return t = t == null ? rt : t, !!t && (e == "number" || e != "symbol" && Co.test(n)) && n > -1 && n % 1 == 0 && n < t } function cn(n, t, e) { if (!J(e)) return !1; var r = typeof t; return (r == "number" ? gn(e) && kn(t, e.length) : r == "string" && t in e) ? Un(e[t], n) : !1 } function wi(n, t) { if (S(n)) return !1; var e = typeof n; return e == "number" || e == "symbol" || e == "boolean" || n == null || wn(n) ? !0 : ro.test(n) || !eo.test(n) || t != null && n in z(t) } function oc(n) { var t = typeof n; return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null } function xi(n) { var t = rr(n), e = u[t]; if (typeof e != "function" || !(t in F.prototype)) return !1; if (n === e) return !0; var r = vi(e); return !!r && n === r[0] } function _c(n) { return !!Uu && Uu in n } var sc = We ? jn : Ni; function he(n) { var t = n && n.constructor, e = typeof t == "function" && t.prototype || Ft; return n === e } function Ff(n) { return n === n && !J(n) } function Df(n, t) { return function (e) { return e == null ? !1 : e[n] === t && (t !== l || n in z(e)) } } function cc(n) { var t = _r(n, function (r) { return e.size === W && e.clear(), r }), e = t.cache; return t } function ac(n, t) { var e = n[1], r = t[1], i = e | r, f = i < (_n | pt | zn), o = r == zn && e == Dn || r == zn && e == Yt && n[7].length <= t[8] || r == (zn | Yt) && t[7].length <= t[8] && e == Dn; if (!(f || o)) return n; r & _n && (n[2] = t[2], i |= e & _n ? 0 : Zi); var _ = t[3]; if (_) { var c = n[3]; n[3] = c ? Bf(c, _, t[4]) : _, n[4] = c ? ft(n[3], $) : t[4] } return _ = t[5], _ && (c = n[5], n[5] = c ? wf(c, _, t[6]) : _, n[6] = c ? ft(n[5], $) : t[6]), _ = t[7], _ && (n[7] = _), r & zn && (n[8] = n[8] == null ? t[8] : ln(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = i, n } function hc(n) { var t = []; if (n != null) for (var e in z(n)) t.push(e); return t } function gc(n) { return Me.call(n) } function Nf(n, t, e) { return t = en(t === l ? n.length - 1 : t, 0), function () { for (var r = arguments, i = -1, f = en(r.length - t, 0), o = a(f); ++i < f;)o[i] = r[t + i]; i = -1; for (var _ = a(t + 1); ++i < t;)_[i] = r[i]; return _[t] = e(o), vn(n, this, _) } } function Gf(n, t) { return t.length < 2 ? n : xt(n, En(t, 0, -1)) } function pc(n, t) { for (var e = n.length, r = ln(t.length, e), i = hn(n); r--;) { var f = t[r]; n[r] = kn(f, e) ? i[f] : l } return n } function mi(n, t) { if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__") return n[t] } var $f = qf(sf), ge = L_ || function (n, t) { return un.setTimeout(n, t) }, yi = qf(Ds); function Hf(n, t, e) { var r = t + ""; return yi(n, fc(r, dc(rc(r), e))) } function qf(n) { var t = 0, e = 0; return function () { var r = P_(), i = Ul - (r - e); if (e = r, i > 0) { if (++t >= Ml) return arguments[0] } else t = 0; return n.apply(l, arguments) } } function ur(n, t) { var e = -1, r = n.length, i = r - 1; for (t = t === l ? r : t; ++e < t;) { var f = fi(e, i), o = n[f]; n[f] = n[e], n[e] = o } return n.length = t, n } var Kf = cc(function (n) { var t = []; return n.charCodeAt(0) === 46 && t.push(""), n.replace(io, function (e, r, i, f) { t.push(i ? f.replace(ao, "$1") : r || e) }), t }); function qn(n) { if (typeof n == "string" || wn(n)) return n; var t = n + ""; return t == "0" && 1 / n == -dt ? "-0" : t } function yt(n) { if (n != null) { try { return Pe.call(n) } catch { } try { return n + "" } catch { } } return "" } function dc(n, t) { return Tn(Hl, function (e) { var r = "_." + e[0]; t & e[1] && !Ee(n, r) && n.push(r) }), n.sort() } function zf(n) { if (n instanceof F) return n.clone(); var t = new Rn(n.__wrapped__, n.__chain__); return t.__actions__ = hn(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t } function Ac(n, t, e) { (e ? cn(n, t, e) : t === l) ? t = 1 : t = en(L(t), 0); var r = n == null ? 0 : n.length; if (!r || t < 1) return []; for (var i = 0, f = 0, o = a($e(r / t)); i < r;)o[f++] = En(n, i, i += t); return o } function vc(n) { for (var t = -1, e = n == null ? 0 : n.length, r = 0, i = []; ++t < e;) { var f = n[t]; f && (i[r++] = f) } return i } function Cc() { var n = arguments.length; if (!n) return []; for (var t = a(n - 1), e = arguments[0], r = n; r--;)t[r - 1] = arguments[r]; return ut(S(e) ? hn(e) : [e], fn(t, 1)) } var Bc = P(function (n, t) { return k(n) ? oe(n, fn(t, 1, k, !0)) : [] }), wc = P(function (n, t) { var e = Ln(t); return k(e) && (e = l), k(n) ? oe(n, fn(t, 1, k, !0), m(e, 2)) : [] }), xc = P(function (n, t) { var e = Ln(t); return k(e) && (e = l), k(n) ? oe(n, fn(t, 1, k, !0), l, e) : [] }); function mc(n, t, e) { var r = n == null ? 0 : n.length; return r ? (t = e || t === l ? 1 : L(t), En(n, t < 0 ? 0 : t, r)) : [] } function yc(n, t, e) { var r = n == null ? 0 : n.length; return r ? (t = e || t === l ? 1 : L(t), t = r - t, En(n, 0, t < 0 ? 0 : t)) : [] } function Tc(n, t) { return n && n.length ? Ve(n, m(t, 3), !0, !0) : [] } function Ic(n, t) { return n && n.length ? Ve(n, m(t, 3), !0) : [] } function Rc(n, t, e, r) { var i = n == null ? 0 : n.length; return i ? (e && typeof e != "number" && cn(n, t, e) && (e = 0, r = i), Cs(n, t, e, r)) : [] } function Zf(n, t, e) { var r = n == null ? 0 : n.length; if (!r) return -1; var i = e == null ? 0 : L(e); return i < 0 && (i = en(r + i, 0)), Le(n, m(t, 3), i) } function Yf(n, t, e) { var r = n == null ? 0 : n.length; if (!r) return -1; var i = r - 1; return e !== l && (i = L(e), i = e < 0 ? en(r + i, 0) : ln(i, r - 1)), Le(n, m(t, 3), i, !0) } function Xf(n) { var t = n == null ? 0 : n.length; return t ? fn(n, 1) : [] } function Sc(n) { var t = n == null ? 0 : n.length; return t ? fn(n, dt) : [] } function Ec(n, t) { var e = n == null ? 0 : n.length; return e ? (t = t === l ? 1 : L(t), fn(n, t)) : [] } function Lc(n) { for (var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e;) { var i = n[t]; r[i[0]] = i[1] } return r } function Jf(n) { return n && n.length ? n[0] : l } function Oc(n, t, e) { var r = n == null ? 0 : n.length; if (!r) return -1; var i = e == null ? 0 : L(e); return i < 0 && (i = en(r + i, 0)), Wt(n, t, i) } function bc(n) { var t = n == null ? 0 : n.length; return t ? En(n, 0, -1) : [] } var Wc = P(function (n) { var t = X(n, ci); return t.length && t[0] === n[0] ? ti(t) : [] }), Pc = P(function (n) { var t = Ln(n), e = X(n, ci); return t === Ln(e) ? t = l : e.pop(), e.length && e[0] === n[0] ? ti(e, m(t, 2)) : [] }), Mc = P(function (n) { var t = Ln(n), e = X(n, ci); return t = typeof t == "function" ? t : l, t && e.pop(), e.length && e[0] === n[0] ? ti(e, l, t) : [] }); function Uc(n, t) { return n == null ? "" : b_.call(n, t) } function Ln(n) { var t = n == null ? 0 : n.length; return t ? n[t - 1] : l } function Fc(n, t, e) { var r = n == null ? 0 : n.length; if (!r) return -1; var i = r; return e !== l && (i = L(e), i = i < 0 ? en(r + i, 0) : ln(i, r - 1)), t === t ? d_(n, t, i) : Le(n, Su, i, !0) } function Dc(n, t) { return n && n.length ? ff(n, L(t)) : l } var Nc = P(Qf); function Qf(n, t) { return n && n.length && t && t.length ? ui(n, t) : n } function Gc(n, t, e) { return n && n.length && t && t.length ? ui(n, t, m(e, 2)) : n } function $c(n, t, e) { return n && n.length && t && t.length ? ui(n, t, l, e) : n } var Hc = Vn(function (n, t) { var e = n == null ? 0 : n.length, r = Vr(n, t); return _f(n, X(t, function (i) { return kn(i, e) ? +i : i }).sort(Cf)), r }); function qc(n, t) { var e = []; if (!(n && n.length)) return e; var r = -1, i = [], f = n.length; for (t = m(t, 3); ++r < f;) { var o = n[r]; t(o, r, n) && (e.push(o), i.push(r)) } return _f(n, i), e } function Ti(n) { return n == null ? n : U_.call(n) } function Kc(n, t, e) { var r = n == null ? 0 : n.length; return r ? (e && typeof e != "number" && cn(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : L(t), e = e === l ? r : L(e)), En(n, t, e)) : [] } function zc(n, t) { return Qe(n, t) } function Zc(n, t, e) { return oi(n, t, m(e, 2)) } function Yc(n, t) { var e = n == null ? 0 : n.length; if (e) { var r = Qe(n, t); if (r < e && Un(n[r], t)) return r } return -1 } function Xc(n, t) { return Qe(n, t, !0) } function Jc(n, t, e) { return oi(n, t, m(e, 2), !0) } function Qc(n, t) { var e = n == null ? 0 : n.length; if (e) { var r = Qe(n, t, !0) - 1; if (Un(n[r], t)) return r } return -1 } function Vc(n) { return n && n.length ? cf(n) : [] } function kc(n, t) { return n && n.length ? cf(n, m(t, 2)) : [] } function jc(n) { var t = n == null ? 0 : n.length; return t ? En(n, 1, t) : [] } function na(n, t, e) { return n && n.length ? (t = e || t === l ? 1 : L(t), En(n, 0, t < 0 ? 0 : t)) : [] } function ta(n, t, e) { var r = n == null ? 0 : n.length; return r ? (t = e || t === l ? 1 : L(t), t = r - t, En(n, t < 0 ? 0 : t, r)) : [] } function ea(n, t) { return n && n.length ? Ve(n, m(t, 3), !1, !0) : [] } function ra(n, t) { return n && n.length ? Ve(n, m(t, 3)) : [] } var ia = P(function (n) { return _t(fn(n, 1, k, !0)) }), ua = P(function (n) { var t = Ln(n); return k(t) && (t = l), _t(fn(n, 1, k, !0), m(t, 2)) }), fa = P(function (n) { var t = Ln(n); return t = typeof t == "function" ? t : l, _t(fn(n, 1, k, !0), l, t) }); function la(n) { return n && n.length ? _t(n) : [] } function oa(n, t) { return n && n.length ? _t(n, m(t, 2)) : [] } function _a(n, t) { return t = typeof t == "function" ? t : l, n && n.length ? _t(n, l, t) : [] } function Ii(n) { if (!(n && n.length)) return []; var t = 0; return n = it(n, function (e) { if (k(e)) return t = en(e.length, t), !0 }), qr(t, function (e) { return X(n, Gr(e)) }) } function Vf(n, t) { if (!(n && n.length)) return []; var e = Ii(n); return t == null ? e : X(e, function (r) { return vn(t, l, r) }) } var sa = P(function (n, t) { return k(n) ? oe(n, t) : [] }), ca = P(function (n) { return si(it(n, k)) }), aa = P(function (n) { var t = Ln(n); return k(t) && (t = l), si(it(n, k), m(t, 2)) }), ha = P(function (n) { var t = Ln(n); return t = typeof t == "function" ? t : l, si(it(n, k), l, t) }), ga = P(Ii); function pa(n, t) { return pf(n || [], t || [], le) } function da(n, t) { return pf(n || [], t || [], ce) } var Aa = P(function (n) { var t = n.length, e = t > 1 ? n[t - 1] : l; return e = typeof e == "function" ? (n.pop(), e) : l, Vf(n, e) }); function kf(n) { var t = u(n); return t.__chain__ = !0, t } function va(n, t) { return t(n), n } function fr(n, t) { return t(n) } var Ca = Vn(function (n) { var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, i = function (f) { return Vr(f, n) }; return t > 1 || this.__actions__.length || !(r instanceof F) || !kn(e) ? this.thru(i) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({ func: fr, args: [i], thisArg: l }), new Rn(r, this.__chain__).thru(function (f) { return t && !f.length && f.push(l), f })) }); function Ba() { return kf(this) } function wa() { return new Rn(this.value(), this.__chain__) } function xa() { this.__values__ === l && (this.__values__ = al(this.value())); var n = this.__index__ >= this.__values__.length, t = n ? l : this.__values__[this.__index__++]; return { done: n, value: t } } function ma() { return this } function ya(n) { for (var t, e = this; e instanceof ze;) { var r = zf(e); r.__index__ = 0, r.__values__ = l, t ? i.__wrapped__ = r : t = r; var i = r; e = e.__wrapped__ } return i.__wrapped__ = n, t } function Ta() { var n = this.__wrapped__; if (n instanceof F) { var t = n; return this.__actions__.length && (t = new F(this)), t = t.reverse(), t.__actions__.push({ func: fr, args: [Ti], thisArg: l }), new Rn(t, this.__chain__) } return this.thru(Ti) } function Ia() { return gf(this.__wrapped__, this.__actions__) } var Ra = ke(function (n, t, e) { K.call(n, e) ? ++n[e] : Jn(n, e, 1) }); function Sa(n, t, e) { var r = S(n) ? Iu : vs; return e && cn(n, t, e) && (t = l), r(n, m(t, 3)) } function Ea(n, t) { var e = S(n) ? it : Qu; return e(n, m(t, 3)) } var La = Tf(Zf), Oa = Tf(Yf); function ba(n, t) { return fn(lr(n, t), 1) } function Wa(n, t) { return fn(lr(n, t), dt) } function Pa(n, t, e) { return e = e === l ? 1 : L(e), fn(lr(n, t), e) } function jf(n, t) { var e = S(n) ? Tn : ot; return e(n, m(t, 3)) } function nl(n, t) { var e = S(n) ? jo : Ju; return e(n, m(t, 3)) } var Ma = ke(function (n, t, e) { K.call(n, e) ? n[e].push(t) : Jn(n, e, [t]) }); function Ua(n, t, e, r) { n = gn(n) ? n : zt(n), e = e && !r ? L(e) : 0; var i = n.length; return e < 0 && (e = en(i + e, 0)), ar(n) ? e <= i && n.indexOf(t, e) > -1 : !!i && Wt(n, t, e) > -1 } var Fa = P(function (n, t, e) { var r = -1, i = typeof t == "function", f = gn(n) ? a(n.length) : []; return ot(n, function (o) { f[++r] = i ? vn(t, o, e) : _e(o, t, e) }), f }), Da = ke(function (n, t, e) { Jn(n, e, t) }); function lr(n, t) { var e = S(n) ? X : ef; return e(n, m(t, 3)) } function Na(n, t, e, r) { return n == null ? [] : (S(t) || (t = t == null ? [] : [t]), e = r ? l : e, S(e) || (e = e == null ? [] : [e]), lf(n, t, e)) } var Ga = ke(function (n, t, e) { n[e ? 0 : 1].push(t) }, function () { return [[], []] }); function $a(n, t, e) { var r = S(n) ? Dr : Lu, i = arguments.length < 3; return r(n, m(t, 4), e, i, ot) } function Ha(n, t, e) { var r = S(n) ? n_ : Lu, i = arguments.length < 3; return r(n, m(t, 4), e, i, Ju) } function qa(n, t) { var e = S(n) ? it : Qu; return e(n, sr(m(t, 3))) } function Ka(n) { var t = S(n) ? zu : Us; return t(n) } function za(n, t, e) { (e ? cn(n, t, e) : t === l) ? t = 1 : t = L(t); var r = S(n) ? hs : Fs; return r(n, t) } function Za(n) { var t = S(n) ? gs : Ns; return t(n) } function Ya(n) { if (n == null) return 0; if (gn(n)) return ar(n) ? Mt(n) : n.length; var t = on(n); return t == bn || t == Wn ? n.size : ri(n).length } function Xa(n, t, e) { var r = S(n) ? Nr : Gs; return e && cn(n, t, e) && (t = l), r(n, m(t, 3)) } var Ja = P(function (n, t) { if (n == null) return []; var e = t.length; return e > 1 && cn(n, t[0], t[1]) ? t = [] : e > 2 && cn(t[0], t[1], t[2]) && (t = [t[0]]), lf(n, fn(t, 1), []) }), or = E_ || function () { return un.Date.now() }; function Qa(n, t) { if (typeof t != "function") throw new In(b); return n = L(n), function () { if (--n < 1) return t.apply(this, arguments) } } function tl(n, t, e) { return t = e ? l : t, t = n && t == null ? n.length : t, Qn(n, zn, l, l, l, l, t) } function el(n, t) { var e; if (typeof t != "function") throw new In(b); return n = L(n), function () { return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = l), e } } var Ri = P(function (n, t, e) { var r = _n; if (e.length) { var i = ft(e, qt(Ri)); r |= Nn } return Qn(n, r, t, e, i) }), rl = P(function (n, t, e) { var r = _n | pt; if (e.length) { var i = ft(e, qt(rl)); r |= Nn } return Qn(t, r, n, e, i) }); function il(n, t, e) { t = e ? l : t; var r = Qn(n, Dn, l, l, l, l, l, t); return r.placeholder = il.placeholder, r } function ul(n, t, e) { t = e ? l : t; var r = Qn(n, St, l, l, l, l, l, t); return r.placeholder = ul.placeholder, r } function fl(n, t, e) { var r, i, f, o, _, c, p = 0, d = !1, v = !1, C = !0; if (typeof n != "function") throw new In(b); t = On(t) || 0, J(e) && (d = !!e.leading, v = "maxWait" in e, f = v ? en(On(e.maxWait) || 0, t) : f, C = "trailing" in e ? !!e.trailing : C); function w(j) { var Fn = r, tt = i; return r = i = l, p = j, o = n.apply(tt, Fn), o } function y(j) { return p = j, _ = ge(U, t), d ? w(j) : o } function O(j) { var Fn = j - c, tt = j - p, Tl = t - Fn; return v ? ln(Tl, f - tt) : Tl } function T(j) { var Fn = j - c, tt = j - p; return c === l || Fn >= t || Fn < 0 || v && tt >= f } function U() { var j = or(); if (T(j)) return N(j); _ = ge(U, O(j)) } function N(j) { return _ = l, C && r ? w(j) : (r = i = l, o) } function xn() { _ !== l && df(_), p = 0, r = c = i = _ = l } function an() { return _ === l ? o : N(or()) } function mn() { var j = or(), Fn = T(j); if (r = arguments, i = this, c = j, Fn) { if (_ === l) return y(c); if (v) return df(_), _ = ge(U, t), w(c) } return _ === l && (_ = ge(U, t)), o } return mn.cancel = xn, mn.flush = an, mn } var Va = P(function (n, t) { return Xu(n, 1, t) }), ka = P(function (n, t, e) { return Xu(n, On(t) || 0, e) }); function ja(n) { return Qn(n, vr) } function _r(n, t) { if (typeof n != "function" || t != null && typeof t != "function") throw new In(b); var e = function () { var r = arguments, i = t ? t.apply(this, r) : r[0], f = e.cache; if (f.has(i)) return f.get(i); var o = n.apply(this, r); return e.cache = f.set(i, o) || f, o }; return e.cache = new (_r.Cache || Xn), e } _r.Cache = Xn; function sr(n) { if (typeof n != "function") throw new In(b); return function () { var t = arguments; switch (t.length) { case 0: return !n.call(this); case 1: return !n.call(this, t[0]); case 2: return !n.call(this, t[0], t[1]); case 3: return !n.call(this, t[0], t[1], t[2]) }return !n.apply(this, t) } } function n1(n) { return el(2, n) } var t1 = $s(function (n, t) { t = t.length == 1 && S(t[0]) ? X(t[0], Cn(m())) : X(fn(t, 1), Cn(m())); var e = t.length; return P(function (r) { for (var i = -1, f = ln(r.length, e); ++i < f;)r[i] = t[i].call(this, r[i]); return vn(n, this, r) }) }), Si = P(function (n, t) { var e = ft(t, qt(Si)); return Qn(n, Nn, l, t, e) }), ll = P(function (n, t) { var e = ft(t, qt(ll)); return Qn(n, Et, l, t, e) }), e1 = Vn(function (n, t) { return Qn(n, Yt, l, l, l, t) }); function r1(n, t) { if (typeof n != "function") throw new In(b); return t = t === l ? t : L(t), P(n, t) } function i1(n, t) { if (typeof n != "function") throw new In(b); return t = t == null ? 0 : en(L(t), 0), P(function (e) { var r = e[t], i = ct(e, 0, t); return r && ut(i, r), vn(n, this, i) }) } function u1(n, t, e) { var r = !0, i = !0; if (typeof n != "function") throw new In(b); return J(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), fl(n, t, { leading: r, maxWait: t, trailing: i }) } function f1(n) { return tl(n, 1) } function l1(n, t) { return Si(ai(t), n) } function o1() { if (!arguments.length) return []; var n = arguments[0]; return S(n) ? n : [n] } function _1(n) { return Sn(n, nn) } function s1(n, t) { return t = typeof t == "function" ? t : l, Sn(n, nn, t) } function c1(n) { return Sn(n, E | nn) } function a1(n, t) { return t = typeof t == "function" ? t : l, Sn(n, E | nn, t) } function h1(n, t) { return t == null || Yu(n, t, rn(t)) } function Un(n, t) { return n === t || n !== n && t !== t } var g1 = er(ni), p1 = er(function (n, t) { return n >= t }), Tt = ju(function () { return arguments }()) ? ju : function (n) { return V(n) && K.call(n, "callee") && !Nu.call(n, "callee") }, S = a.isArray, d1 = Bu ? Cn(Bu) : ys; function gn(n) { return n != null && cr(n.length) && !jn(n) } function k(n) { return V(n) && gn(n) } function A1(n) { return n === !0 || n === !1 || V(n) && sn(n) == Xt } var at = O_ || Ni, v1 = wu ? Cn(wu) : Ts; function C1(n) { return V(n) && n.nodeType === 1 && !pe(n) } function B1(n) { if (n == null) return !0; if (gn(n) && (S(n) || typeof n == "string" || typeof n.splice == "function" || at(n) || Kt(n) || Tt(n))) return !n.length; var t = on(n); if (t == bn || t == Wn) return !n.size; if (he(n)) return !ri(n).length; for (var e in n) if (K.call(n, e)) return !1; return !0 } function w1(n, t) { return se(n, t) } function x1(n, t, e) { e = typeof e == "function" ? e : l; var r = e ? e(n, t) : l; return r === l ? se(n, t, l, e) : !!r } function Ei(n) { if (!V(n)) return !1; var t = sn(n); return t == me || t == Kl || typeof n.message == "string" && typeof n.name == "string" && !pe(n) } function m1(n) { return typeof n == "number" && $u(n) } function jn(n) { if (!J(n)) return !1; var t = sn(n); return t == ye || t == Xi || t == ql || t == Zl } function ol(n) { return typeof n == "number" && n == L(n) } function cr(n) { return typeof n == "number" && n > -1 && n % 1 == 0 && n <= rt } function J(n) { var t = typeof n; return n != null && (t == "object" || t == "function") } function V(n) { return n != null && typeof n == "object" } var _l = xu ? Cn(xu) : Rs; function y1(n, t) { return n === t || ei(n, t, Ci(t)) } function T1(n, t, e) { return e = typeof e == "function" ? e : l, ei(n, t, Ci(t), e) } function I1(n) { return sl(n) && n != +n } function R1(n) { if (sc(n)) throw new R(D); return nf(n) } function S1(n) { return n === null } function E1(n) { return n == null } function sl(n) { return typeof n == "number" || V(n) && sn(n) == Qt } function pe(n) { if (!V(n) || sn(n) != Zn) return !1; var t = De(n); if (t === null) return !0; var e = K.call(t, "constructor") && t.constructor; return typeof e == "function" && e instanceof e && Pe.call(e) == T_ } var Li = mu ? Cn(mu) : Ss; function L1(n) { return ol(n) && n >= -rt && n <= rt } var cl = yu ? Cn(yu) : Es; function ar(n) { return typeof n == "string" || !S(n) && V(n) && sn(n) == kt } function wn(n) { return typeof n == "symbol" || V(n) && sn(n) == Te } var Kt = Tu ? Cn(Tu) : Ls; function O1(n) { return n === l } function b1(n) { return V(n) && on(n) == jt } function W1(n) { return V(n) && sn(n) == Xl } var P1 = er(ii), M1 = er(function (n, t) { return n <= t }); function al(n) { if (!n) return []; if (gn(n)) return ar(n) ? Pn(n) : hn(n); if (ee && n[ee]) return h_(n[ee]()); var t = on(n), e = t == bn ? zr : t == Wn ? Oe : zt; return e(n) } function nt(n) { if (!n) return n === 0 ? n : 0; if (n = On(n), n === dt || n === -dt) { var t = n < 0 ? -1 : 1; return t * Nl } return n === n ? n : 0 } function L(n) { var t = nt(n), e = t % 1; return t === t ? e ? t - e : t : 0 } function hl(n) { return n ? wt(L(n), 0, Gn) : 0 } function On(n) { if (typeof n == "number") return n; if (wn(n)) return we; if (J(n)) { var t = typeof n.valueOf == "function" ? n.valueOf() : n; n = J(t) ? t + "" : t } if (typeof n != "string") return n === 0 ? n : +n; n = Ou(n); var e = po.test(n); return e || vo.test(n) ? Qo(n.slice(2), e ? 2 : 8) : go.test(n) ? we : +n } function gl(n) { return Hn(n, pn(n)) } function U1(n) { return n ? wt(L(n), -rt, rt) : n === 0 ? n : 0 } function q(n) { return n == null ? "" : Bn(n) } var F1 = $t(function (n, t) { if (he(t) || gn(t)) { Hn(t, rn(t), n); return } for (var e in t) K.call(t, e) && le(n, e, t[e]) }), pl = $t(function (n, t) { Hn(t, pn(t), n) }), hr = $t(function (n, t, e, r) { Hn(t, pn(t), n, r) }), D1 = $t(function (n, t, e, r) { Hn(t, rn(t), n, r) }), N1 = Vn(Vr); function G1(n, t) { var e = Gt(n); return t == null ? e : Zu(e, t) } var $1 = P(function (n, t) { n = z(n); var e = -1, r = t.length, i = r > 2 ? t[2] : l; for (i && cn(t[0], t[1], i) && (r = 1); ++e < r;)for (var f = t[e], o = pn(f), _ = -1, c = o.length; ++_ < c;) { var p = o[_], d = n[p]; (d === l || Un(d, Ft[p]) && !K.call(n, p)) && (n[p] = f[p]) } return n }), H1 = P(function (n) { return n.push(l, bf), vn(dl, l, n) }); function q1(n, t) { return Ru(n, m(t, 3), $n) } function K1(n, t) { return Ru(n, m(t, 3), jr) } function z1(n, t) { return n == null ? n : kr(n, m(t, 3), pn) } function Z1(n, t) { return n == null ? n : Vu(n, m(t, 3), pn) } function Y1(n, t) { return n && $n(n, m(t, 3)) } function X1(n, t) { return n && jr(n, m(t, 3)) } function J1(n) { return n == null ? [] : Xe(n, rn(n)) } function Q1(n) { return n == null ? [] : Xe(n, pn(n)) } function Oi(n, t, e) { var r = n == null ? l : xt(n, t); return r === l ? e : r } function V1(n, t) { return n != null && Mf(n, t, Bs) } function bi(n, t) { return n != null && Mf(n, t, ws) } var k1 = Rf(function (n, t, e) { t != null && typeof t.toString != "function" && (t = Me.call(t)), n[t] = e }, Pi(dn)), j1 = Rf(function (n, t, e) { t != null && typeof t.toString != "function" && (t = Me.call(t)), K.call(n, t) ? n[t].push(e) : n[t] = [e] }, m), nh = P(_e); function rn(n) { return gn(n) ? Ku(n) : ri(n) } function pn(n) { return gn(n) ? Ku(n, !0) : Os(n) } function th(n, t) { var e = {}; return t = m(t, 3), $n(n, function (r, i, f) { Jn(e, t(r, i, f), r) }), e } function eh(n, t) { var e = {}; return t = m(t, 3), $n(n, function (r, i, f) { Jn(e, i, t(r, i, f)) }), e } var rh = $t(function (n, t, e) { Je(n, t, e) }), dl = $t(function (n, t, e, r) { Je(n, t, e, r) }), ih = Vn(function (n, t) { var e = {}; if (n == null) return e; var r = !1; t = X(t, function (f) { return f = st(f, n), r || (r = f.length > 1), f }), Hn(n, Ai(n), e), r && (e = Sn(e, E | Q | nn, ks)); for (var i = t.length; i--;)_i(e, t[i]); return e }); function uh(n, t) { return Al(n, sr(m(t))) } var fh = Vn(function (n, t) { return n == null ? {} : Ws(n, t) }); function Al(n, t) { if (n == null) return {}; var e = X(Ai(n), function (r) { return [r] }); return t = m(t), of(n, e, function (r, i) { return t(r, i[0]) }) } function lh(n, t, e) { t = st(t, n); var r = -1, i = t.length; for (i || (i = 1, n = l); ++r < i;) { var f = n == null ? l : n[qn(t[r])]; f === l && (r = i, f = e), n = jn(f) ? f.call(n) : f } return n } function oh(n, t, e) { return n == null ? n : ce(n, t, e) } function _h(n, t, e, r) { return r = typeof r == "function" ? r : l, n == null ? n : ce(n, t, e, r) } var vl = Lf(rn), Cl = Lf(pn); function sh(n, t, e) { var r = S(n), i = r || at(n) || Kt(n); if (t = m(t, 4), e == null) { var f = n && n.constructor; i ? e = r ? new f : [] : J(n) ? e = jn(f) ? Gt(De(n)) : {} : e = {} } return (i ? Tn : $n)(n, function (o, _, c) { return t(e, o, _, c) }), e } function ch(n, t) { return n == null ? !0 : _i(n, t) } function ah(n, t, e) { return n == null ? n : hf(n, t, ai(e)) } function hh(n, t, e, r) { return r = typeof r == "function" ? r : l, n == null ? n : hf(n, t, ai(e), r) } function zt(n) { return n == null ? [] : Kr(n, rn(n)) } function gh(n) { return n == null ? [] : Kr(n, pn(n)) } function ph(n, t, e) { return e === l && (e = t, t = l), e !== l && (e = On(e), e = e === e ? e : 0), t !== l && (t = On(t), t = t === t ? t : 0), wt(On(n), t, e) } function dh(n, t, e) { return t = nt(t), e === l ? (e = t, t = 0) : e = nt(e), n = On(n), xs(n, t, e) } function Ah(n, t, e) { if (e && typeof e != "boolean" && cn(n, t, e) && (t = e = l), e === l && (typeof t == "boolean" ? (e = t, t = l) : typeof n == "boolean" && (e = n, n = l)), n === l && t === l ? (n = 0, t = 1) : (n = nt(n), t === l ? (t = n, n = 0) : t = nt(t)), n > t) { var r = n; n = t, t = r } if (e || n % 1 || t % 1) { var i = Hu(); return ln(n + i * (t - n + Jo("1e-" + ((i + "").length - 1))), t) } return fi(n, t) } var vh = Ht(function (n, t, e) { return t = t.toLowerCase(), n + (e ? Bl(t) : t) }); function Bl(n) { return Wi(q(n).toLowerCase()) } function wl(n) { return n = q(n), n && n.replace(Bo, o_).replace(No, "") } function Ch(n, t, e) { n = q(n), t = Bn(t); var r = n.length; e = e === l ? r : wt(L(e), 0, r); var i = e; return e -= t.length, e >= 0 && n.slice(e, i) == t } function Bh(n) { return n = q(n), n && jl.test(n) ? n.replace(Vi, __) : n } function wh(n) { return n = q(n), n && uo.test(n) ? n.replace(Sr, "\\$&") : n } var xh = Ht(function (n, t, e) { return n + (e ? "-" : "") + t.toLowerCase() }), mh = Ht(function (n, t, e) { return n + (e ? " " : "") + t.toLowerCase() }), yh = yf("toLowerCase"); function Th(n, t, e) { n = q(n), t = L(t); var r = t ? Mt(n) : 0; if (!t || r >= t) return n; var i = (t - r) / 2; return tr(He(i), e) + n + tr($e(i), e) } function Ih(n, t, e) { n = q(n), t = L(t); var r = t ? Mt(n) : 0; return t && r < t ? n + tr(t - r, e) : n } function Rh(n, t, e) { n = q(n), t = L(t); var r = t ? Mt(n) : 0; return t && r < t ? tr(t - r, e) + n : n } function Sh(n, t, e) { return e || t == null ? t = 0 : t && (t = +t), M_(q(n).replace(Er, ""), t || 0) } function Eh(n, t, e) { return (e ? cn(n, t, e) : t === l) ? t = 1 : t = L(t), li(q(n), t) } function Lh() { var n = arguments, t = q(n[0]); return n.length < 3 ? t : t.replace(n[1], n[2]) } var Oh = Ht(function (n, t, e) { return n + (e ? "_" : "") + t.toLowerCase() }); function bh(n, t, e) { return e && typeof e != "number" && cn(n, t, e) && (t = e = l), e = e === l ? Gn : e >>> 0, e ? (n = q(n), n && (typeof t == "string" || t != null && !Li(t)) && (t = Bn(t), !t && Pt(n)) ? ct(Pn(n), 0, e) : n.split(t, e)) : [] } var Wh = Ht(function (n, t, e) { return n + (e ? " " : "") + Wi(t) }); function Ph(n, t, e) { return n = q(n), e = e == null ? 0 : wt(L(e), 0, n.length), t = Bn(t), n.slice(e, e + t.length) == t } function Mh(n, t, e) {
                var r = u.templateSettings; e && cn(n, t, e) && (t = l), n = q(n), t = hr({}, t, r, Of); var i = hr({}, t.imports, r.imports, Of), f = rn(i), o = Kr(i, f), _, c, p = 0, d = t.interpolate || Ie, v = "__p += '", C = Zr((t.escape || Ie).source + "|" + d.source + "|" + (d === ki ? ho : Ie).source + "|" + (t.evaluate || Ie).source + "|$", "g"), w = "//# sourceURL=" + (K.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`; n.replace(C, function (T, U, N, xn, an, mn) {
                    return N || (N = xn), v += n.slice(p, mn).replace(wo, s_), U && (_ = !0, v += `' +
__e(`+ U + `) +
'`), an && (c = !0, v += `';
`+ an + `;
__p += '`), N && (v += `' +
((__t = (`+ N + `)) == null ? '' : __t) +
'`), p = mn + T.length, T
                }), v += `';
`; var y = K.call(t, "variable") && t.variable; if (!y) v = `with (obj) {
`+ v + `
}
`; else if (co.test(y)) throw new R(G); v = (c ? v.replace(Jl, "") : v).replace(Ql, "$1").replace(Vl, "$1;"), v = "function(" + (y || "obj") + `) {
`+ (y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`: `;
`) + v + `return __p
}`; var O = ml(function () { return H(f, w + "return " + v).apply(l, o) }); if (O.source = v, Ei(O)) throw O; return O
            } function Uh(n) { return q(n).toLowerCase() } function Fh(n) { return q(n).toUpperCase() } function Dh(n, t, e) { if (n = q(n), n && (e || t === l)) return Ou(n); if (!n || !(t = Bn(t))) return n; var r = Pn(n), i = Pn(t), f = bu(r, i), o = Wu(r, i) + 1; return ct(r, f, o).join("") } function Nh(n, t, e) { if (n = q(n), n && (e || t === l)) return n.slice(0, Mu(n) + 1); if (!n || !(t = Bn(t))) return n; var r = Pn(n), i = Wu(r, Pn(t)) + 1; return ct(r, 0, i).join("") } function Gh(n, t, e) { if (n = q(n), n && (e || t === l)) return n.replace(Er, ""); if (!n || !(t = Bn(t))) return n; var r = Pn(n), i = bu(r, Pn(t)); return ct(r, i).join("") } function $h(n, t) { var e = Wl, r = Pl; if (J(t)) { var i = "separator" in t ? t.separator : i; e = "length" in t ? L(t.length) : e, r = "omission" in t ? Bn(t.omission) : r } n = q(n); var f = n.length; if (Pt(n)) { var o = Pn(n); f = o.length } if (e >= f) return n; var _ = e - Mt(r); if (_ < 1) return r; var c = o ? ct(o, 0, _).join("") : n.slice(0, _); if (i === l) return c + r; if (o && (_ += c.length - _), Li(i)) { if (n.slice(_).search(i)) { var p, d = c; for (i.global || (i = Zr(i.source, q(ji.exec(i)) + "g")), i.lastIndex = 0; p = i.exec(d);)var v = p.index; c = c.slice(0, v === l ? _ : v) } } else if (n.indexOf(Bn(i), _) != _) { var C = c.lastIndexOf(i); C > -1 && (c = c.slice(0, C)) } return c + r } function Hh(n) { return n = q(n), n && kl.test(n) ? n.replace(Qi, A_) : n } var qh = Ht(function (n, t, e) { return n + (e ? " " : "") + t.toUpperCase() }), Wi = yf("toUpperCase"); function xl(n, t, e) { return n = q(n), t = e ? l : t, t === l ? a_(n) ? B_(n) : r_(n) : n.match(t) || [] } var ml = P(function (n, t) { try { return vn(n, l, t) } catch (e) { return Ei(e) ? e : new R(e) } }), Kh = Vn(function (n, t) { return Tn(t, function (e) { e = qn(e), Jn(n, e, Ri(n[e], n)) }), n }); function zh(n) { var t = n == null ? 0 : n.length, e = m(); return n = t ? X(n, function (r) { if (typeof r[1] != "function") throw new In(b); return [e(r[0]), r[1]] }) : [], P(function (r) { for (var i = -1; ++i < t;) { var f = n[i]; if (vn(f[0], this, r)) return vn(f[1], this, r) } }) } function Zh(n) { return As(Sn(n, E)) } function Pi(n) { return function () { return n } } function Yh(n, t) { return n == null || n !== n ? t : n } var Xh = If(), Jh = If(!0); function dn(n) { return n } function Mi(n) { return tf(typeof n == "function" ? n : Sn(n, E)) } function Qh(n) { return rf(Sn(n, E)) } function Vh(n, t) { return uf(n, Sn(t, E)) } var kh = P(function (n, t) { return function (e) { return _e(e, n, t) } }), jh = P(function (n, t) { return function (e) { return _e(n, e, t) } }); function Ui(n, t, e) { var r = rn(t), i = Xe(t, r); e == null && !(J(t) && (i.length || !r.length)) && (e = t, t = n, n = this, i = Xe(t, rn(t))); var f = !(J(e) && "chain" in e) || !!e.chain, o = jn(n); return Tn(i, function (_) { var c = t[_]; n[_] = c, o && (n.prototype[_] = function () { var p = this.__chain__; if (f || p) { var d = n(this.__wrapped__), v = d.__actions__ = hn(this.__actions__); return v.push({ func: c, args: arguments, thisArg: n }), d.__chain__ = p, d } return c.apply(n, ut([this.value()], arguments)) }) }), n } function n0() { return un._ === this && (un._ = I_), this } function Fi() { } function t0(n) { return n = L(n), P(function (t) { return ff(t, n) }) } var e0 = gi(X), r0 = gi(Iu), i0 = gi(Nr); function yl(n) { return wi(n) ? Gr(qn(n)) : Ps(n) } function u0(n) { return function (t) { return n == null ? l : xt(n, t) } } var f0 = Sf(), l0 = Sf(!0); function Di() { return [] } function Ni() { return !1 } function o0() { return {} } function _0() { return "" } function s0() { return !0 } function c0(n, t) { if (n = L(n), n < 1 || n > rt) return []; var e = Gn, r = ln(n, Gn); t = m(t), n -= Gn; for (var i = qr(r, t); ++e < n;)t(e); return i } function a0(n) { return S(n) ? X(n, qn) : wn(n) ? [n] : hn(Kf(q(n))) } function h0(n) { var t = ++y_; return q(n) + t } var g0 = nr(function (n, t) { return n + t }, 0), p0 = pi("ceil"), d0 = nr(function (n, t) { return n / t }, 1), A0 = pi("floor"); function v0(n) { return n && n.length ? Ye(n, dn, ni) : l } function C0(n, t) { return n && n.length ? Ye(n, m(t, 2), ni) : l } function B0(n) { return Eu(n, dn) } function w0(n, t) { return Eu(n, m(t, 2)) } function x0(n) { return n && n.length ? Ye(n, dn, ii) : l } function m0(n, t) { return n && n.length ? Ye(n, m(t, 2), ii) : l } var y0 = nr(function (n, t) { return n * t }, 1), T0 = pi("round"), I0 = nr(function (n, t) { return n - t }, 0); function R0(n) { return n && n.length ? Hr(n, dn) : 0 } function S0(n, t) { return n && n.length ? Hr(n, m(t, 2)) : 0 } return u.after = Qa, u.ary = tl, u.assign = F1, u.assignIn = pl, u.assignInWith = hr, u.assignWith = D1, u.at = N1, u.before = el, u.bind = Ri, u.bindAll = Kh, u.bindKey = rl, u.castArray = o1, u.chain = kf, u.chunk = Ac, u.compact = vc, u.concat = Cc, u.cond = zh, u.conforms = Zh, u.constant = Pi, u.countBy = Ra, u.create = G1, u.curry = il, u.curryRight = ul, u.debounce = fl, u.defaults = $1, u.defaultsDeep = H1, u.defer = Va, u.delay = ka, u.difference = Bc, u.differenceBy = wc, u.differenceWith = xc, u.drop = mc, u.dropRight = yc, u.dropRightWhile = Tc, u.dropWhile = Ic, u.fill = Rc, u.filter = Ea, u.flatMap = ba, u.flatMapDeep = Wa, u.flatMapDepth = Pa, u.flatten = Xf, u.flattenDeep = Sc, u.flattenDepth = Ec, u.flip = ja, u.flow = Xh, u.flowRight = Jh, u.fromPairs = Lc, u.functions = J1, u.functionsIn = Q1, u.groupBy = Ma, u.initial = bc, u.intersection = Wc, u.intersectionBy = Pc, u.intersectionWith = Mc, u.invert = k1, u.invertBy = j1, u.invokeMap = Fa, u.iteratee = Mi, u.keyBy = Da, u.keys = rn, u.keysIn = pn, u.map = lr, u.mapKeys = th, u.mapValues = eh, u.matches = Qh, u.matchesProperty = Vh, u.memoize = _r, u.merge = rh, u.mergeWith = dl, u.method = kh, u.methodOf = jh, u.mixin = Ui, u.negate = sr, u.nthArg = t0, u.omit = ih, u.omitBy = uh, u.once = n1, u.orderBy = Na, u.over = e0, u.overArgs = t1, u.overEvery = r0, u.overSome = i0, u.partial = Si, u.partialRight = ll, u.partition = Ga, u.pick = fh, u.pickBy = Al, u.property = yl, u.propertyOf = u0, u.pull = Nc, u.pullAll = Qf, u.pullAllBy = Gc, u.pullAllWith = $c, u.pullAt = Hc, u.range = f0, u.rangeRight = l0, u.rearg = e1, u.reject = qa, u.remove = qc, u.rest = r1, u.reverse = Ti, u.sampleSize = za, u.set = oh, u.setWith = _h, u.shuffle = Za, u.slice = Kc, u.sortBy = Ja, u.sortedUniq = Vc, u.sortedUniqBy = kc, u.split = bh, u.spread = i1, u.tail = jc, u.take = na, u.takeRight = ta, u.takeRightWhile = ea, u.takeWhile = ra, u.tap = va, u.throttle = u1, u.thru = fr, u.toArray = al, u.toPairs = vl, u.toPairsIn = Cl, u.toPath = a0, u.toPlainObject = gl, u.transform = sh, u.unary = f1, u.union = ia, u.unionBy = ua, u.unionWith = fa, u.uniq = la, u.uniqBy = oa, u.uniqWith = _a, u.unset = ch, u.unzip = Ii, u.unzipWith = Vf, u.update = ah, u.updateWith = hh, u.values = zt, u.valuesIn = gh, u.without = sa, u.words = xl, u.wrap = l1, u.xor = ca, u.xorBy = aa, u.xorWith = ha, u.zip = ga, u.zipObject = pa, u.zipObjectDeep = da, u.zipWith = Aa, u.entries = vl, u.entriesIn = Cl, u.extend = pl, u.extendWith = hr, Ui(u, u), u.add = g0, u.attempt = ml, u.camelCase = vh, u.capitalize = Bl, u.ceil = p0, u.clamp = ph, u.clone = _1, u.cloneDeep = c1, u.cloneDeepWith = a1, u.cloneWith = s1, u.conformsTo = h1, u.deburr = wl, u.defaultTo = Yh, u.divide = d0, u.endsWith = Ch, u.eq = Un, u.escape = Bh, u.escapeRegExp = wh, u.every = Sa, u.find = La, u.findIndex = Zf, u.findKey = q1, u.findLast = Oa, u.findLastIndex = Yf, u.findLastKey = K1, u.floor = A0, u.forEach = jf, u.forEachRight = nl, u.forIn = z1, u.forInRight = Z1, u.forOwn = Y1, u.forOwnRight = X1, u.get = Oi, u.gt = g1, u.gte = p1, u.has = V1, u.hasIn = bi, u.head = Jf, u.identity = dn, u.includes = Ua, u.indexOf = Oc, u.inRange = dh, u.invoke = nh, u.isArguments = Tt, u.isArray = S, u.isArrayBuffer = d1, u.isArrayLike = gn, u.isArrayLikeObject = k, u.isBoolean = A1, u.isBuffer = at, u.isDate = v1, u.isElement = C1, u.isEmpty = B1, u.isEqual = w1, u.isEqualWith = x1, u.isError = Ei, u.isFinite = m1, u.isFunction = jn, u.isInteger = ol, u.isLength = cr, u.isMap = _l, u.isMatch = y1, u.isMatchWith = T1, u.isNaN = I1, u.isNative = R1, u.isNil = E1, u.isNull = S1, u.isNumber = sl, u.isObject = J, u.isObjectLike = V, u.isPlainObject = pe, u.isRegExp = Li, u.isSafeInteger = L1, u.isSet = cl, u.isString = ar, u.isSymbol = wn, u.isTypedArray = Kt, u.isUndefined = O1, u.isWeakMap = b1, u.isWeakSet = W1, u.join = Uc, u.kebabCase = xh, u.last = Ln, u.lastIndexOf = Fc, u.lowerCase = mh, u.lowerFirst = yh, u.lt = P1, u.lte = M1, u.max = v0, u.maxBy = C0, u.mean = B0, u.meanBy = w0, u.min = x0, u.minBy = m0, u.stubArray = Di, u.stubFalse = Ni, u.stubObject = o0, u.stubString = _0, u.stubTrue = s0, u.multiply = y0, u.nth = Dc, u.noConflict = n0, u.noop = Fi, u.now = or, u.pad = Th, u.padEnd = Ih, u.padStart = Rh, u.parseInt = Sh, u.random = Ah, u.reduce = $a, u.reduceRight = Ha, u.repeat = Eh, u.replace = Lh, u.result = lh, u.round = T0, u.runInContext = s, u.sample = Ka, u.size = Ya, u.snakeCase = Oh, u.some = Xa, u.sortedIndex = zc, u.sortedIndexBy = Zc, u.sortedIndexOf = Yc, u.sortedLastIndex = Xc, u.sortedLastIndexBy = Jc, u.sortedLastIndexOf = Qc, u.startCase = Wh, u.startsWith = Ph, u.subtract = I0, u.sum = R0, u.sumBy = S0, u.template = Mh, u.times = c0, u.toFinite = nt, u.toInteger = L, u.toLength = hl, u.toLower = Uh, u.toNumber = On, u.toSafeInteger = U1, u.toString = q, u.toUpper = Fh, u.trim = Dh, u.trimEnd = Nh, u.trimStart = Gh, u.truncate = $h, u.unescape = Hh, u.uniqueId = h0, u.upperCase = qh, u.upperFirst = Wi, u.each = jf, u.eachRight = nl, u.first = Jf, Ui(u, function () { var n = {}; return $n(u, function (t, e) { K.call(u.prototype, e) || (n[e] = t) }), n }(), { chain: !1 }), u.VERSION = M, Tn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) { u[n].placeholder = u }), Tn(["drop", "take"], function (n, t) { F.prototype[n] = function (e) { e = e === l ? 1 : en(L(e), 0); var r = this.__filtered__ && !t ? new F(this) : this.clone(); return r.__filtered__ ? r.__takeCount__ = ln(e, r.__takeCount__) : r.__views__.push({ size: ln(e, Gn), type: n + (r.__dir__ < 0 ? "Right" : "") }), r }, F.prototype[n + "Right"] = function (e) { return this.reverse()[n](e).reverse() } }), Tn(["filter", "map", "takeWhile"], function (n, t) { var e = t + 1, r = e == Yi || e == Dl; F.prototype[n] = function (i) { var f = this.clone(); return f.__iteratees__.push({ iteratee: m(i, 3), type: e }), f.__filtered__ = f.__filtered__ || r, f } }), Tn(["head", "last"], function (n, t) { var e = "take" + (t ? "Right" : ""); F.prototype[n] = function () { return this[e](1).value()[0] } }), Tn(["initial", "tail"], function (n, t) { var e = "drop" + (t ? "" : "Right"); F.prototype[n] = function () { return this.__filtered__ ? new F(this) : this[e](1) } }), F.prototype.compact = function () { return this.filter(dn) }, F.prototype.find = function (n) { return this.filter(n).head() }, F.prototype.findLast = function (n) { return this.reverse().find(n) }, F.prototype.invokeMap = P(function (n, t) { return typeof n == "function" ? new F(this) : this.map(function (e) { return _e(e, n, t) }) }), F.prototype.reject = function (n) { return this.filter(sr(m(n))) }, F.prototype.slice = function (n, t) { n = L(n); var e = this; return e.__filtered__ && (n > 0 || t < 0) ? new F(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== l && (t = L(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e) }, F.prototype.takeRightWhile = function (n) { return this.reverse().takeWhile(n).reverse() }, F.prototype.toArray = function () { return this.take(Gn) }, $n(F.prototype, function (n, t) { var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], f = r || /^find/.test(t); !i || (u.prototype[t] = function () { var o = this.__wrapped__, _ = r ? [1] : arguments, c = o instanceof F, p = _[0], d = c || S(o), v = function (U) { var N = i.apply(u, ut([U], _)); return r && C ? N[0] : N }; d && e && typeof p == "function" && p.length != 1 && (c = d = !1); var C = this.__chain__, w = !!this.__actions__.length, y = f && !C, O = c && !w; if (!f && d) { o = O ? o : new F(this); var T = n.apply(o, _); return T.__actions__.push({ func: fr, args: [v], thisArg: l }), new Rn(T, C) } return y && O ? n.apply(this, _) : (T = this.thru(v), y ? r ? T.value()[0] : T.value() : T) }) }), Tn(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) { var t = be[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n); u.prototype[n] = function () { var i = arguments; if (r && !this.__chain__) { var f = this.value(); return t.apply(S(f) ? f : [], i) } return this[e](function (o) { return t.apply(S(o) ? o : [], i) }) } }), $n(F.prototype, function (n, t) { var e = u[t]; if (e) { var r = e.name + ""; K.call(Nt, r) || (Nt[r] = []), Nt[r].push({ name: t, func: e }) } }), Nt[je(l, pt).name] = [{ name: "wrapper", func: l }], F.prototype.clone = H_, F.prototype.reverse = q_, F.prototype.value = K_, u.prototype.at = Ca, u.prototype.chain = Ba, u.prototype.commit = wa, u.prototype.next = xa, u.prototype.plant = ya, u.prototype.reverse = Ta, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Ia, u.prototype.first = u.prototype.head, ee && (u.prototype[ee] = ma), u
        }, Ut = w_(); At ? ((At.exports = Ut)._ = Ut, Mr._ = Ut) : un._ = Ut
    }).call(de)
})(qi, qi.exports); const z0 = qi.exports, Z0 = `1、中國古代官方使者的身份象徵是 。
A. 虎符
B. 節*
C. 國書
2、明朝初年，鄭和奉命出使 次下西洋的航海活動，最遠曾到達非洲東海岸和紅海沿岸。
A. 5
B. 6
C .7*
3、鄭成功於 1661 年打敗了 殖民者而收復台灣。
A. 日本
B. 荷蘭*
C. 葡萄牙
4、1792 年，英國國王喬治三世派出馬嘎爾尼使團出訪中國。這個使團的實際任務是 。
A. 向乾隆皇帝祝壽
B. 進一步開拓中國市場*
C. 為對中國開戰做準備
5、鴉片戰爭之前，清政府負責對外事務的機構是 。
A. 軍機處
B. 禮部和理藩院*
C. 國子監
6、鴉片戰爭前夕，清政府對中外貿易進行嚴格的限制和管理，規定外國商船只能在 港口停泊。
A. 廣州*
B. 虎門
C. 廈門
7、把鴉片戰爭作為中國近代史的開端，最主要的根據是 。
A. 中國社會性質發生了變化*
B. 中國社會經濟發生了變化
C. 中國社會統治階層發生了變化
8、對於鴉片的毒害，感歎 “使數十年之後，中原幾無可以禦敵之兵，且無可以充餉之銀” 的清政府官員是 。
A. 林則徐*
B. 曾國藩
C. 李鴻章
9、下列對洋務運動的表述中不正確的是 。
A. 洋務運動的目的在於富國強兵
B. 洋務運動提出來要實行君主立憲制*
C. 洋務運動是中國外交觀念的一次大變革
10、在洋務運動時期所建立起來的軍事工業中，規模最大的是 。
A. 江南製造總局*
B. 金陵機器局
C. 天津機器局
11、近代中國規模最大、實力最強的海軍艦隊是 。
A. 北洋水師*
B. 南洋水師
C. 福建水師
12、西方國家在北京設立公使館之後，中國 皇帝第一次接見了外國公使。
A. 乾隆
B. 道光
C. 同治*
13、1901 年，清政府宣佈撤銷 ，改設外務部。
A. 理藩院
B. 大理寺
C. 總理各國事務衙門*
14、1909 年，清政府按照美國退還 “庚子賠款” 的要求，開始進行選送留美學生的工作，設立了 。
A. 福州航政學堂
B. 清華留美預備學堂* 
C. 燕京大學
15、在中國的抗日戰爭期間，美、英、蘇三國中最早向中國提供援助的國家是 。
A. 蘇聯*
B. 美國
C. 英國
16、在 上，中國代表不顧列強壓力，拒絕簽署了《凡爾賽和約》。
A. 華盛頓會議
B. 巴黎和會*
C. 雅爾達會議
17、中國最早開放的五個通商口岸是 。
A. 廣州、廈門、福州、寧波、天津
B. 廣州、廈門、福州、上海、寧波*
C. 廣州、深圳、福州、上海、寧波
18、近代以後，西方國家在中國享有 “片面最惠國待遇” ，這裏的“片面”指的是 。
A. 只有部分西方國家享有這一權利
B. 西方國家只在部分領域享受這一權利
C. 只是中國給西方國家這項權利，西方國家不給予中國這項權利*
19、最早規定西方人在中國不受中國法律約束、即給予西方國家領事裁判權的條約文件是 。
A.《南京條約》
B.《五口通商章程》
C.《虎門條約》*
20、西方國家在中國劃出的第一塊租界是 。
A. 位於香港的英租界
B. 位於上海的英租界*
C. 位於上海的法租界
21、鴉片戰爭後萌發的新思想主要“新”在 。
A. 主張學習西方，尋求強國禦敵的方法*
B. 面對當時的社會現實，提出要進行改革
C. 提出要推翻清政府的統治，建立資本主義制度
22、將黑龍江以北、外興安嶺以南六十萬平方公里的領土割讓給俄國的條約是 。
A.《中俄瑗琿條約》*
B.《中俄天津條約》
C.《中俄北京條約》
23、將烏蘇里江以東四十萬平方公里的領土割讓給俄國的條約是 。
A.《中俄瑗琿條約》
B.《中俄天津條約》
C.《中俄北京條約》*
24、1860 年，英法聯軍侵入北京，焚毀了被稱為“萬園之園”的 。
A. 頤和園
B. 圓明園*
C. 清漪園
25、洋務運動中，洋務派最先提出來的是要學習西方的軍事技術。原因在於 。
A. 軍事技術學起來最容易
B. 中國希望建設現代化的軍隊以對外擴張
C. 在之前的幾次戰爭中感受到西方武器的先進*
26、中國派出的第一位駐外公使是郭嵩燾。他被派往的國家是 。
A. 英國*
B. 美國
C. 俄國
27、李鴻章在晚清時期成為辦外交的主要人物，他在處理對外事務時的身份是 。
A. 總理衙門大臣
B. 南洋大臣
C. 北洋大臣*
28、中國第一位在美國取得學位的留學生是 。
A. 詹天佑
B. 容閎*
C. 鐘文耀
29、19 世紀 80 年代，收回新疆地區的軍事將領是 。
A. 張之洞
B. 左宗棠*
C. 曾國藩
30、1894 年，日本發動侵華“甲午戰爭”。次年，中國戰敗，被迫簽訂《馬關條約》， 被迫割讓給日本。
A. 台灣及其附屬島嶼、澎湖列島*
B. 香港及其附近島嶼
C. 台灣
31、19 世紀末，台灣人民爆發了反割台鬥爭。這是由 所引起的。
A. 鴉片戰爭
B. 中法戰爭
C. 中日甲午戰爭*
32、19 世紀末 20 世紀初，西方國家掀起了瓜分中國的狂潮，紛紛在中國劃分勢力範圍。當時中國的長江流域是 的勢力範圍。
A. 法國
B. 英國*
C. 美國
33、19 世紀末 20 世紀初，在西方各國掀起瓜分中國狂潮的同時，他們之間的矛盾也越來越嚴重。為解決這些矛盾，美國提出 政策。
A. 門戶開放*
B. 自由貿易
C. 國際共管
34、北京東交民巷被劃為使館區是在 。
A. 第二次鴉片戰爭之後
B. 西方列強瓜分中國的狂潮之中
C. 八國聯軍進攻北京之後*
35、“庚子賠款”指的是 中規定的賠款。
A.《馬關條約》
B.《辛丑條約》*
C. “二十一條”
36、《辛丑條約》是中國清政府在八國聯軍攻入北京後與外國列強簽訂的喪權辱國條約。與中國簽訂《辛丑條約》的國家有 個。
A. 8
B. 11*
C. 12
37、我們經常說“不平等條約”，這裡的“不平等”主要指的是 。
A. 締結過程不是雙方自願
B. 條約內容損害主權，不對等
C. 以上兩者*
38、曾兩次發動侵藏戰爭的西方國家是 。
A. 日本
B. 俄國
C. 英國*
39、孫中山頒佈的《中華民國臨時約法》規定，中華民國的主權屬於 。
A. 總統
B. 議會
C. 全體國民*
40、1914 年，在“西姆拉會議”期間，英印政府和西藏地方代表背著中國中央政府而非法炮製出來的 是中印東段邊界爭端的主要禍根。
A. 馬奇諾防線
B. 印巴分治線
C. 麥克馬洪線*
41、第一次世界大戰的交戰雙方是 。
A. 同盟國與協約國*
B. 同盟國與軸心國
C. 協約國與軸心國
42、第一次世界大戰爆發後，日本藉口對德宣戰，出兵 。
A. 德國
B. 中國青島*
C. 歐洲
43、“五四運動”的導火線是 。
A. 巴黎和會上，中國外交失敗*
B. 俄國十月革命的影響
C. 袁世凱稱帝
44、在“五四運動”的鬥爭目標中， 得以完全實現。
A. 外爭國權，內懲國賊
B. 廢除“二十一條”
C. 拒絕在《凡爾賽和約》上簽字*
45、下列口號能全面反映“五四”運動性質的是 。
A. 外爭國權，內懲國賊*
B. 誓死力爭，還我青島
C. 廢除“二十一條”
46、自鴉片戰爭以來中國與西方大國簽訂的第一個平等條約是 。
A. 1919 年 6 月《凡爾賽和約》
B. 1919 年 9 月《聖日爾曼條約》
C. 1921 年《中德協約》*
47、標誌著日本開始大規模侵華，中國人民開始局部抗戰的事件是 。
A. 皇姑屯事件
B. 九一八事變*
C. 盧溝橋事件
48、標誌著中國人民開始全面抗戰的事件是 。
A. 皇姑屯事件
B. 西安事變
C. 盧溝橋事件*
49、 年 12 月，日本攻佔南京，在長達一個星期的時間中，對南京市民進行了慘無人道的大屠殺。
A. 1931
B. 1937*
C. 1938
50、第二次世界大戰的交戰雙方是 。
A. 同盟國與協約國
B. 同盟國與軸心國*
C. 協約國與軸心國
51、第二次世界大戰後，中國根據 和 等國際法律文件，收回被日本竊取的包括台灣、澎湖列島等領土，釣魚島應一併歸還中國。
A.《開羅宣言》、《波茨坦公告》*
B.《華盛頓宣言》、《波茨坦公告》
C.《日內瓦公約》、《開羅宣言》
52、1945 年 4 月到 6 月，中國參加了舊金山會議並簽署了 。
A.《聯合國家宣言》
B.《聯合國憲章》*
C.《三藩市和約》
53、自 年 10 月 25 日起，台灣結束了半個世紀的殖民地歷史，從日本侵略者手中重新回到祖國懷抱。
A. 1937
B. 1945*
C. 1949
54、第二次世界大戰期間，香港被 侵略者佔領了 3 年零 8 個月。
A. 英國
B. 日本*
C. 美國
55、1945 年 6 月 25 日，出席聯合國家國際組織會議的 50 個國家代表一致通過了 。
A.《敦巴頓橡樹園建議案》
B.《國際法規約》
C.《聯合國憲章》*
56、聯合國的創始會員國有 個。
A .30
B. 60
C. 51*
57、以下不屬於《聯合國憲章》規定聯合國及其會員國應遵守的基本原則是 。
A. 各會員國主權平等
B. 各會員國應以和平方式解決其國際爭端
C. 聯合國可以干涉會員國國內管轄之事件*
58、1947 年 10 月 31 日，聯合國大會通過決議，確定每年的 10 月 24 日為 。
A. 全球議程日
B. 世界和平日
C. 聯合國日*
59、亞非拉地區的國家開始真正擺脫歐洲殖民主義的控制，大批地成為獨立主權國家，是在 。
A. 19 世紀後半期
B. 第一次世界大戰
C. 第二次世界大戰以後*
60、中華人民共和國成立前夕，毛澤東主席提出“打掃乾淨屋子再請客”方針的意思是 。
A. 要在新的基礎上同世界各國建立新的外交關係
B. 在徹底清除帝國主義在華特權和殘餘勢力後再與西方國家建立外交關係*
C. 倒向社會主義一邊
61、中華人民共和國成立前夕，毛澤東主席提出的“另起爐灶”方針的意思是 。
A. 要在新的基礎上同世界各國建立新的外交關係*
B. 在徹底清除帝國主義在華特權和殘餘勢力後再請客人進來
C. 倒向社會主義一邊
62、1949 年 10 月 1 日中華人民共和國成立當天，我國政府向世界宣告了中國政府同外國建交的原則：凡願意遵守 、互相尊重領土主權等項原則的國家，中國都願意與之建交。
A. 和平共處、互利
B. 平等、互利*
C. 對等、合作
63、新中國第一任外長是 。
A. 陳毅 
B. 周恩來* 
C. 錢其琛
64、1949 年 10 月 1 日中華人民共和國成立後，第一個承認並與中國建立外交關係的國家是 。
A. 印度
B. 蘇聯*
C. 瑞典
65、1949 年 11 月，新中國首位駐外使節 在克里姆林宮向前蘇聯最高蘇維埃主席團主席什維爾尼克呈遞了新中國第一份國書。
A. 王稼祥 *
B. 黃鎮
C. 王炳南
66、 年，新中國代表首次出席聯合國大會和安理會並發言。
A. 1949
B. 1950*
C. 1960
67、1950 年，朝鮮戰爭爆發，中國 。
A. 派出志願軍入朝參戰*
B. 與亞、非國家在聯合國提出譴責議案
C. 舉行六方會談，透過會談解決戰爭問題
68、《聯合國憲章》是當今世界最重要的多邊條約，確立了聯合國的宗旨、原則和組織機構設置，規定了成員國的責任、權利、義務及處理國際關係、維護世界和平與安全的基本原則和方法。 _______不屬於《聯合國憲章》規定的宗旨和原則。
A. 維持國際和平及安全
B. 各會員國主權平等
C. 促進人類可持續發展*
69、1954 年，中國與蘇聯、美國、英國、法國一道，參加了 ，這是新中國首次以五大國之一的身份和地位參加討論國際問題。
A. 日內瓦會議*
B. 萬隆會議
C. 里約會議
70、1955 年 4 月在印度尼西亞召開的 ，又稱第一次亞非會議，是亞非兩大洲歷史上的一個重要里程碑。周恩來總理率團與會，提出了著名的“求同存異”方針。
A. 日內瓦會議
B. 萬隆會議*
C. 坎昆會議
71、“和平共處五項原則”是在 1953 年周恩來總理會見 代表團時首次提出的。
A. 印度*
B. 緬甸
C. 蘇聯
72、“和平共處五項原則”是中國對外關係的基本原則，是中國對國際法的重大貢獻。 不屬於該五項原則。
A. 擱置爭議*
B. 互不侵犯
C. 互不干涉內政
73、1955 年，在 上，中國代表團團長周恩來總理提出了“求同存異”的原則，促成了大會圓滿成功。當時一位元美國記者評論周總理在該次會議中的作用時說：“周恩來並不打算改變任何一個堅持反共立場的領導人的態度，但是他改變了會議的航向。”
A. 巴黎和會
B. 萬隆會議*
C. 日內瓦會議
74、 不是新中國在處理邊界問題時的原則。
A. 堅持和平外交談判
B. 採取和平談判與軍事震懾相結合的方式*
C. 在最終解決問題以前，維持現狀，不以武力改變現狀
75、“擱置爭議，共同開發”的基本思路不包括 。
A. 在不具備徹底解決的條件下，可以先不談主權歸屬。
B. 共同開發，增進相互瞭解，為最終合理解決主權的歸屬創造條件。
C. 擱置爭議，是要放棄主權。*
76、新中國成立後，在力所能及的範圍內，向非洲、亞洲、東歐、拉美和南太平洋地區的 160 多個國家提供了援助。以下不屬於我國對外援助方式的是 。
A. 有償援助*
B. 無息貸款
C. 優惠貸款
77、中華人民共和國第二任外交部長是 。
A. 姬鵬飛
B. 陳毅*
C. 吳學謙
78、新中國第一次承辦的世界性體育賽事是 。
A. 1961 年世界乒乓球錦標賽*
B. 1990 年亞運會
C. 2008 年北京奧運會
79、最早與中國解決了陸地邊界問題的國家是 。
A. 緬甸*
B. 尼泊爾
C. 巴基斯坦
80、1963 年，中國向 派出援外醫療隊，開創了同發展中國家以醫療隊為主要形式的衛生合作和援助歷史。
A. 阿爾及利亞*
B. 埃塞俄比亞
C. 坦桑尼亞
81、中國有關國際秩序的主張不包括 。
A. 倡導多邊主義，主張促進國際關係民主化
B. 實行大國共管*
C. 樹立以互信、互利、平等和協作為核心的新安全觀
82、根據 1992 年通過的《中華人民共和國領海及毗鄰區法》，中華人民共和國領海的寬度從領海基線量起為 海里。
A. 12*
B. 24
C. 36
83、中國政府關於國籍問題的原則立場，正確的表述是 。
A. 反對華僑加入所在國的國籍，但必須根據自願
B. 不贊成雙重國籍*
C. 以血統為准
84、《維也納領事關係公約》是公約成員國之間處理雙邊領事關係的一個國際準則，它於 年在維也納簽訂。
A. 1961
B. 1962
C. 1963*
85、中國於 年加入《維也納領事關係公約》。
A. 1949
B. 1979*
C. 1985
86、 ，中華人民共和國恢復在聯合國的合法席位。
A. 1949 年 10 月 1 日
B. 1971 年 10 月 25 日*
C. 1971 年 12 月 15 日
87、非洲聯盟的前身是成立於 1963 年 5 月 25 日的非洲統一組織，現共有 54 個成員國。非盟總部設在 。
A. 埃塞俄比亞首都亞的斯亞貝巴 *
B. 南非最大城市約翰內斯堡
C. 尼日利亞首都阿布賈
88、中華人民共和國曾有過“代辦級外交關係”的兩個國家是 。
A. 英國和荷蘭*
B. 法國和英國
C. 英國和瑞士
89、中國自 1970 年起歷時 6 年在非洲援建完成一條全長 1860 公里的鐵路，被譽為“自由之路”、“解放之路”，數十名中國援建專家為之付出生命代價。2013 年 3 月，國家主席習近平在坦桑尼亞進行國事訪問期間，專程到援建中國專家公墓緬懷為中坦、中非友好事業獻出生命的烈士們。這條被譽為“自由之路”、“解放之路”的鐵路連接 
A. 坦桑尼亞、莫桑比克
B. 莫桑比克、贊比亞
C. 坦桑尼亞、贊比亞*
90、_______年 5 月 10 日，第 25 屆世界衛生大會通過決議，恢復中國在世界衛生組織中的合法席位。
A. 1972*
B. 1979
C. 1968
91、60 年代初期，中國與 經過和平談判，將世界第一高峰珠穆朗瑪峰劃為界峰，成為兩國友好的一個標誌。
A. 巴基斯坦
B. 尼泊爾*
C. 不丹
92、世界衛生組織（WHO）成立於 年，是負責處理世界衛生領域問題的聯合國專門機構。
A. 1941
B. 1948*
C. 1976
93、 是聯合國的六大主要機構之一，根據聯合國憲章的宗旨和原則，負有維護國際和平與安全的責任，是唯一有權採取強制行動的聯合國機構。
A. 聯合國大會
B. 安全理事會*
C. 國際法院
94、日本首相 在任時，日本與中國實現邦交正常化。
A. 佐藤榮作
B. 田中角榮*
C. 三木武夫
95、20 世紀 70 年代，中國外交的主要成就是中美關係正常化、中日邦交正常化以及 。
A. 中國恢復在聯合國合法席位*
B. 中蘇建交
C. 中印建交
96、1970 年 2 月 18 日，美國總統 發表對外政策報告，強調中國不應該被繼續孤立在國際大家庭之外。
A. 尼克遜*
B. 甘迺迪
C. 約翰遜
97、1971 年出現中美“乒乓外交”。在這個過程中，發揮了重要作用的中國乒乓球運動員是 。
A. 劉國梁
B. 莊則棟*
C. 孔令輝
98、在中美建交前，從 1955 年 8 月至 1970 年 2 月，中美之間共進行 136 次 級會談。
A. 大使*
B. 外長
C. 公使
99、中美建交的三項原則是： ；撤走美國在台灣和台灣海峽地區的一切武裝力量和軍事設施；廢除同台灣的所謂《共同防禦條約》。
A. 美國必須斷絕同台灣的所謂外交關係*
B. 互相尊重主權和領土完整
C. 不干涉內政
100、新中國成立後至中日邦交正常化之前的 20 多年裡，中日兩國的交往模式是 。
A. 官方為主、民間為輔
B. 半民半官、齊頭並進
C. 半民半官、以民促官*
101、上海合作組織成員國元首理事會是上合組織最高機構，就組織內所有重大問題作出決定和指示，該理事會 年舉辦 1 次例會。
A. 1 年*
B. 2 年
C. 3 年
102、2001 年 6 月 15 日，上海合作組織成員國六國元首在 簽署了《上海合作組織成立宣言》，宣告上合組織正式成立。
A. 烏茲別克斯坦塔什干 
B. 俄羅斯聖彼德堡
C. 中國上海*
103、以下不屬於上海合作組織成員國的是 。
A. 烏茲別克斯坦
B. 巴西*
C. 印度
104、上海合作組織現有兩個常設機構，分別是設於北京的秘書處和 。
A. 設於上海的秘書處
B. 設於青島的秘書處
C. 設於烏茲別克斯坦首都塔什干的地區反恐怖機構*
105、上海合作組織秘書長由各成員國按其國名俄文字母排序輪流擔任，其一屆任期為 。
A. 2 年
B. 3 年*
C. 4 年
106、締結友好城市是民間外交的一種重要形式，我國自 1973 年開始開展這一活動。中國與外國締結的第一對友好城市是 。
A. 中國天津與日本神戶*
B. 中國上海與日本橫濱
C. 中國西安與日本奈良
107、蘇聯領導人戈爾巴喬夫於 年訪華，中蘇關係實現正常化。
A. 1987
B. 1989*
C. 1991
108、1982 年 1 月，鄧小平在會見外賓時第一次把解決 問題的方針概括為“一國兩制”。
A. 台灣*
B. 香港
C. 澳門
109、外交部建部後就有發言人的實踐，也是最早正式建立發言人制度的國家部委。1982 年 3 月26 日，第一次以外交部發言人名義舉行新聞發佈會的是 。
A. 李肇星
B. 沈國放
C. 錢其琛*
110、20 世紀 80 年代，提出當今時代主題是“和平與發展”問題的中國領導人是 。
A. 周恩來
B. 毛澤東
C. 鄧小平*
111、 年 12 月 25 日，蘇聯國旗從克里姆林宮降下，正式標誌蘇聯這個超級大國進入歷史。
A. 1991*
B. 1992
C. 1993
112、1997 年，北約首腦會議在馬德里舉行，確定波蘭、捷克和匈牙利首批加入北約，這就是所謂 的開始。
A.“北約東擴””*
B.“北約擴大”
C.“北約包容”
113、《馬斯特里赫特條約》於 年 11 月 1 日開始生效，標誌著歐洲聯盟正式成立。
A. 1992
B. 1993*
C. 1997
114、中國首次發表國防白皮書是 年。
A. 2008
B. 1971
C. 1998*
115、2001 年 11 月 10 日，在多哈舉行的世界貿易組織第四屆部長級會議審議並通過了中國加入WTO 的決定，標誌著中國長達 年恢復和加入 WTO 談判進程的結束。
A. 10
B. 15*
C. 20
116、關稅及貿易總協定(General Agreement on Tariffs and Trade， GATT) 是一個政府間締結的有關關稅和貿易規則的多邊國際協定。關貿總協定是 的前身。
A. 世界貿易組織*
B. 國際貨幣基金組織
C. 國際復興開發銀行
117、________年 12 月 11 日，中國加入世界貿易組織。
A. 2001*
B. 2005
C. 2008
118、世界貿易組織旨在通過實施市場開放、非歧視和公平貿易等原則，來實現世界貿易自由化。目前，世界貿易組織共有 個成員國。
A. 153
B. 164*
C. 159
119、“韜光養晦，有所作為”的外交戰略思想是由 提出的。
A. 鄧小平*
B. 江澤民
C. 胡錦濤
120、1991 年 9 月至 1992 年 6 月，包括俄羅斯，中國先後同蘇聯解體後出現的 個獨立國家建立了外交關係。
A. 15*
B. 14
C. 12
121、中國參加聯合國維和行動以來，不斷擴大參與規模和領域，中國維和部隊的足跡遍及全球大部分熱點地區。中國開始參與維和行動是在________年。
A. 1987
B. 1989*
C. 1991
122、自 2003 年以來蘇丹達爾富爾地區出現人道主義危機，100 多萬人流離失所，聯合國向該地區派遣了維和部隊。第一支進駐的維和部隊來自________。
A. 中國*
B. 韓國
C. 美國
123、2002 年 6 月 7 日，上海合作組織成員國元首共同簽署了《關於地區反恐怖機構的協定》，共同打擊“三股勢力”。這三股勢力分別指________。
A. 分裂勢力、宗教勢力、恐怖勢力
B. 宗教勢力、極端勢力、分裂勢力
C. 分裂勢力、極端勢力、恐怖勢力*
124、目前， 是聯合國五個常任理事國中派出維和人員最多的國家。
A. 美國
B. 俄羅斯
C. 中國*
125、2005 年 9 月 15 日，時任國家主席胡錦濤在聯合國成立 60 周年首腦會議上發表講話，他在講話中提出 的倡議。
A. 構建和諧世界*
B. 加強能源、財經合作
C. 加強反恐合作
126、2023 年 5 月 25 日，國務委員兼外交部長秦剛在北京出席慶祝“非洲日”招待會並致辭。秦剛表示，中方始終支援 在解決地區衝突問題上發揮主導作用，支持非洲人民以非洲方式解決非洲問題。
A. 非盟、非洲次區域組織*
B. 聯合國安理會
C. 二十國集團
127、21 世紀以來，全球的關注熱點漸趨由歐洲轉向亞洲，東南亞國家聯盟作為亞洲區域合作的代表受到更多關注。東盟共有 個成員國。
A. 9
B. 10*
C. 11
128、中國外交部 負責協調處理涉及海外中國公民和法人合法權益保障的工作。
A. 領事保護處
B. 領事保護中心*
C. 領事司
129、2005 年 11 月 12 日，第 13 屆南亞區域合作聯盟（南盟）首腦會議在孟加拉首都達卡開幕，會議原則同意接納中國作為 參與該組織。
A. 正式成員
B. 非正式成員
C. 觀察員*
130、美國對台軍售違反了中美之間的 。
A. 1972 年《上海公報》
B. 1979 年《中美建交公報》
C. 1982 年《八·一七公報》*
131、2018 年 3 月 11 日， 投票表決通過《中華人民共和國憲法修正案》。
A. 全國人民代表大會*
B. 中國人民政治協商會議
C. 最高人民法院 
132、下列表述不屬於新的憲法法修正案中關於我國外交政策方面新增內容的是 。
A. 堅持和平發展道路，堅持互利共贏開放戰略
B. 推動構建人類命運共同體
C. 堅持獨立自主的對外政策*
133、2023 年 5 月 18 日至 19 日，中國－中亞峰會在陝西西安成功舉行。此次峰會對中國－中亞機制進行了立柱架樑和全面佈局。中國－中亞元首會晤機制正式建立，每兩年舉辦一次，下次峰會將於 2025 年在 舉行。
A. 吉爾吉斯斯坦
B. 烏茲別克斯坦
C. 哈薩克斯坦*
134、2023 年 2 月 21 日，“全球安全倡議：破解安全困境的中國方案”藍廳論壇在北京舉行。國務委員兼外交部長秦剛表示，習近平主席鄭重提出了全球安全倡議，堅持共同、綜合、合作、可持續的安全觀，以構建 為長遠目標，宣導走出一條對話而不對抗、結伴而不結盟、共贏而非零和的新型安全之路。
A. 安全共同體*
B. 人類命運共同體
C. 發展共同體
135、中共十九大報告指出，必須把維護中央對香港、澳門特別行政區______和保障特別行政區___有機結合起來，確保“一國兩制”方針不會變、不動搖，確保“一國兩制”實踐不變形、不走樣。
A. 主權、基本權利
B. 全面管治權、高度自治權*
C. 主權、自治權
136、中國在氣候變化問題上堅持 原則。
A. 互利共贏
B. 共同但有區別的責任*
C. 合作開發
137、中國的中央政府從哪個朝代開始在西藏地區設立地方機構進行管轄？
A. 唐朝
B. 元朝*
C. 清朝
138、2023 年 2 月 16 日，國務委員兼外交部長秦剛表示， 將是世界上首個專門以調解方式解決國際爭端的政府間國際法律組織，是踐行《聯合國憲章》和平解決國際爭端原則的重要實踐，也是向國際社會提供的一項全球法治公共產品。
A. 國際調解院*
B. 海牙國際法院
C. 國際海洋法法庭
139、2018 年 5 月 1 日，中國與______簽署聯合公報，相互承認並建立大使級外交關係。
A. 聖多美和普林西比
B. 多米尼克
C. 多米尼加*
140、我國根據 精神，參照有關國際慣例和我國外交實踐，制定了《中華人民共和國外交特權與豁免條例》，並與 1986 年公佈實施。
A.《維也納外交關係公約》*
B.《維也納領事關係公約》
C.《聯合國憲章》
141、2023 年 3 月 7 日，國務委員兼外交部長秦剛表示，我們將以元首外交為引領，特別是全力辦好首次“中國＋中亞五國”元首峰會和 兩大主場外交，不斷展現中國外交的獨特風範。
A. 上海合作組織峰會
B. 金磚國家領導人會晤
C. 第三屆“一帶一路”國際合作高峰論壇*
142、2023 年 3 月 7 日，國務委員兼外交部長秦剛表示，烏克蘭危機有着複雜的歷史經緯和現實原因，本質是 。我們始終根據事情本身的是非曲直，獨立自主作出判斷。在和平與戰爭之間，選擇和平；在對話和制裁之間，選擇對話；在降溫和拱火之間，選擇降溫。
A. 歐洲安全治理矛盾的大爆發*
B. 北約東擴帶來的惡果
C. 資本主義深層矛盾的大爆發
143、2023 年 3 月 26 日，國務委員兼外交部長秦剛在北京同 外長雷納舉行會談並代表兩國政府簽署建交公報。
A. 洪都拉斯*
B. 巴拉圭
C. 海地
144、中共十九大報告指出，要以 建設為重點，堅持引進來和走出去並重，遵循共商共建共享原則，加強創新能力開放合作，形成陸海內外聯動、東西雙向互濟的開放格局。
A.“一帶一路”* 
B. 經濟
C. 21 世紀海上絲綢之路
145、哈薩克斯坦駐 總領館是哈薩克斯坦在中國設立的第三個總領事館，也是中亞國家在中國西部地區設立的首個領事機構。
A. 成都
B. 長沙
C. 西安*
146、當地時間 2023 年 5 月 15 日，國務委員兼外交部長秦剛向聯合國巴勒斯坦“災難日”75 周年紀念活動書面致辭。秦剛表示，習近平主席連續 10 年向聯合國“聲援巴勒斯坦人民國際日”紀念大會致賀電，多次就促進巴勒斯坦問題解決提出中方倡議主張，強調堅定推進以“ ”為基礎的政治解決，加強國際社會促和努力。
A. 兩國方案*
B. 巴以停火
C. 恢復和談
147、當地時間 2023 年 4 月 13 日，國務委員兼外長秦剛在撒馬爾罕主持召開中俄巴伊四國外長阿富汗問題第二次非正式會議。秦剛表示，日前，中方發佈了《 概念文件》和《關於阿富汗問題的中國立場》，倡導以團結精神適應深刻調整的國際格局，以共贏思維應對複雜交織的安全挑戰，重申以政治方式推動解決阿富汗等國際地區熱點問題。
A. 全球安全倡議*
B. 全球發展倡議
C. 全球文明倡議
148、印度與巴基斯坦持續紛爭的核心問題是：_________。
A. 喀什米爾問題*
B. 反恐問題
C. 防止核擴散問題
149、中共十九大報告呼籲，各國人民同心協力，構建________，建設持久和平、普遍安全、共同繁榮、開放包容、清潔美麗的世界。
A. 人類命運共同體*
B. 新型大國關係
C. 大國外交
150、2023 年 2 月 10 日，國家主席習近平在釣魚台國賓館會見柬埔寨首相洪森。習近平指出，雙方可以從政治、產能、農業、能源、安全、人文六大領域入手，著力打造中柬“鑽石六邊”合作架構。產能上，重點建設“______走廊”。
A. 魚米
B. 工業發展*
C. 風電
151、2023 年 1 月 16 日，中共中央政治局委員、中央外事工作委員會辦公室主任王毅同法國總統外事顧問博納通電話。王毅表示，今年是中國歐盟建立全面戰略夥伴關係______周年，中方願同法方和其他歐盟成員國一道，堅持相互尊重、對話合作、互利共贏，為中歐全面戰略夥伴關係注入新動力。
A. 10
B. 20*
C. 30
152、中國和巴基斯坦的關係是 。
A. 全面戰略合作夥伴關係
B. 建設性戰略夥伴關係
C. 全天候戰略合作夥伴關係*
153、2023 年 2 月，中國政府發佈《關於政治解決烏克蘭危機的中國立場》，指出 是解決烏克蘭危機的唯一可行出路。一切有利於和平解決危機的努力都應得到鼓勵和支持。
A. 停火止戰
B. 保持克制
C. 對話談判*
154、以下哪一項不是新中國在處理邊界問題時的原則：__________。
A. 堅持和平外交
B. 採取和平談判與軍事震懾相結合的方式*
C. 在最終解決問題以前，維持現狀，不以武力改變現狀
155、2011 年，西亞北非局勢動盪後，中國政府圓滿完成從動盪地區撤離中國公民的行動。從 ______撤出 35860 名中國公民，是新中國成立以來最大規模一次有組織撤離海外中國人員的行動。
A. 埃及
B. 利比亞*
C. 敘利亞
156、在利比亞撤僑行動中，中國履行國際人道主義義務，在力所能及的情況下幫助 12 個國家撤出了約 名外籍公民。
A. 1200
B. 1800
C. 2100*
157、2011 年 7 月，在印尼巴厘島舉行了落實《南海各方行為宣言》高官會。《南海各方行為宣言》是 2002 年由中國和 國家簽署的。
A. 東盟*
B. 歐盟
C. 非盟
158、首個會址設在中國的非官方區域性合作組織是 ，於 2001 年成立。
A. 博鰲亞洲論壇*
B. 上海合作組織
C. 金磚國家會議
159、 是第一個在中國境內宣佈成立、第一個以中國城市命名的國際組織，旨在維護中亞地區的和平、穩定與安全。
A. 國際紅十字會香港分會
B. 上海合作組織*
C. 博鰲亞洲論壇
160、當地時間 2023 年 2 月 18 日，中共中央政治局委員、中央外事工作委員會辦公室主任王毅在德國出席慕尼黑安全會議。王毅表示，______擾亂世界安寧，已成為國際和平面臨的最大破壞性因素。
A. 烏克蘭危機
B. 強權政治、霸權行徑*
C. 北約東擴
161、達沃斯論壇，又稱世界經濟論壇，是以研究和探討世界經濟領域存在的問題、促進國際經濟合作與交流為宗旨的非官方國際性機構，在國際上擁有廣泛的影響力。第一屆達沃斯論壇於 1971年在 召開。
A. 瑞士*
B. 法國
C. 西班牙
162、世界經濟論壇領軍者年會，又稱“夏季達沃斯論壇”，自 2007 年開始每年在中國舉辦一屆，沒有舉辦過的城市是 。
A. 大連
B. 天津
C. 青島*
163、當地時間 2023 年 3 月 21 日，國家主席習近平在莫斯科同俄羅斯總統普京舉行會談並簽署《關於深化新時代全面戰略協作夥伴關係的聯合聲明》。《聲明》指出，雙方敦促______作為唯一未完成化武銷毀的締約國加快庫存化武銷毀，敦促日本儘快完成遺棄在華化學武器的銷毀。
A. 美國*
B. 日本
C. 德國
164、2011 年 9 月 27 日，中日韓三國合作秘書處正式成立，標誌著三國合作邁入了一個新的階段。請問，三國合作秘書處定址於 。
A. 韓國首爾*
B. 日本東京
C. 中國北京
165、2023 年 3 月 10 日，沙特阿拉伯和 達成北京協定。雙方同意恢復外交關係，強調將共同努力，維護國際關係基本準則，促進國際地區和平與安全。
A. 伊拉克
B. 伊朗*
C. 也門
166、2023 年 3 月 15 日，中共中央總書記、國家主席習近平在中國共產黨與世界政黨高層對話會上提出全球文明倡議，指出我們要共同倡導弘揚全人類共同價值，和平、發展、 、正義、民主、自由是各國人民的共同追求，要以寬廣胸懷理解不同文明對價值內涵的認識，不將自己的價值觀和模式強加於人，不搞意識形態對抗。
A. 公平*
B. 公正
C. 公允
167、 是第一個明確支持非盟加入 G20 的國家。
A. 美國
B. 俄羅斯
C. 中國*
168、2023 年 4 月，中國政府發佈《關於阿富汗問題的中國立場》，指出 作為阿富汗問題的始作俑者，扣押阿富汗海外資產，對阿富汗實施單邊制裁，是阿富汗人道主義狀況無法實質改善的最大外部因素。
A. 美國*
B. 以色列
C. 土耳其
169、2023 年 4 月 6 日，國家主席習近平在人民大會堂會見歐盟委員會主席馮德萊恩。習近平主席指出， 是中國核心利益中的核心。
A. 南海問題
B. 涉疆問題
C. 台灣問題*
170、為進一步加強中國與非洲國家在新形勢下的友好合作，共同應對經濟全球化挑戰，謀求共同發展，在中非雙方共同倡議下，中非合作論壇於_________正式成立。
A. 2000 年*
B. 2001 年
C. 2002 年
171、2023 年 3 月 27 日至 4 月 1 日，新加坡共和國總理李顯龍對中國進行正式訪問。其間，雙方一致同意將中新關係提升為 夥伴關係，為雙邊關係規劃未來發展、明確戰略方向。
A. 全方位高質量的前瞻性*
B. 全方位戰略
C. 全天候戰略合作
172、2023 年 3 月 30 日上午，國務院總理李強在海南博鰲出席博鰲亞洲論壇 2023 年年會開幕式。李強總理指出，誕生於近 70 年前的和平共處五項原則和“萬隆精神”，是亞洲人民的智慧結晶；以相互尊重、協商一致、 等為重要原則的“亞洲方式”，為國家間合作發展提供了基本遵循。
A. 照顧各方核心利益
B. 照顧各方重大關切
C. 照顧各方舒適度*
173、澳門特區行政長官為外國領導人訪澳舉行歡迎活動時，懸掛旗的順序（面向觀眾）是怎樣的。
A. 區旗在右，來訪國國旗在中，中國國旗在左。
B. 來訪國國旗在右，區旗在中，中國國旗在左。
C. 來訪國國旗在右，中國國旗在中，區旗在左。*
174、鄭觀應是中國近代史上改良主義的傑出代表。他憂國憂民，竭力拯救中國的思想，集中體現在他在澳門定居後所編寫的_______一書中。
A.《喻世明言》
B.《警世通言》
C.《盛世危言》*
175、2023 年 4 月 26 日，國家主席習近平應約同烏克蘭總統澤連斯基通電話。習近平主席表示，烏克蘭危機複雜演變，對國際形勢產生重大影響。在烏克蘭危機問題上，中方始終站在和平一邊，核心立場就是 。
A. 停火止戰
B. 勸和促談*
C. 保持中立
176、________是中國南海中沙群島中唯一露出水面的島礁，是由中國最早發現、命名並列入中國版圖實施主權管轄的。
A. 中業島
B. 黃岩島*
C. 太平島
177、《中國—巴西應對氣候變化聯合聲明》指出， 對溫室氣體排放承擔歷史責任，應當早於 2050 年實現氣候中和，率先強化氣候行動並提供氣候資金。
A. 發達國家*
B. 南方國家
C. 後工業化國家
178、以下關於釣魚島的表述中，不正確的一項是________：
A. 1785 年，當時日本著名的海防論者林子平所繪《三國通覽圖說》一書中，已經在地圖上明確標明釣魚島是中國的領土。
B. 日本人從 1895 年開始對釣魚島進行正式管轄。*
C. 1971 年日美簽訂 “歸還沖繩協定” 時，釣魚島也被劃入 “歸還區域” 。
179、1844 年美國用戰爭恫嚇和外交訛詐在澳門的望廈村強迫清政府簽訂了_____，又稱《望廈條約》。
A. 中美《五口通商章程》*
B. 中美《海關徵稅規則》
C. 中美《領事裁判條約》
180、1887 年 12 月，葡萄牙政府強迫清政府簽訂________，宣佈中國“允准葡國永駐管理澳門及屬澳之地”，等於承認了葡萄牙對澳門的管治權。
A.《中葡天津條約》
B.《中葡和好通商條約》*
C.《黃埔條約》
181、2023 年 5 月 25 日，第 29 次中國—東盟高官磋商在廣東深圳舉行。今年是習近平主席提出建設更為緊密的中國—東盟命運共同體________周年，也是中方加入《東南亞友好合作條約》________周年。
A. 10、20*
B. 20、10
C. 10、30
182、2023 年 4 月 14 日，國家主席習近平指出，中國和________分別是東西半球最大的發展中國家和重要新興市場國家，互為全面戰略夥伴，擁有廣泛共同利益，兩國關係的全局性、戰略性、全球性影響日益突出。
A. 阿根廷
B. 智利
C. 巴西*
183、2023 年 4 月 6 日下午，國家主席習近平在人民大會堂同來華進行國事訪問的法國總統馬克龍舉行會談。習近平主席強調指出，________是中法關係的突出特徵和寶貴財富，值得雙方精心呵護。
A. 穩定性*
B. 創新性
C. 協同性
184、2023 年 4 月 6 日下午，國家主席習近平在北京同法國總統馬克龍共同出席中法企業家委員會第五次會議閉幕式並致辭。習近平主席強調，2014 年兩國建交 50 周年之際，我將中法建交精神概括為“獨立自主、相互理解、 、互利共贏”。這一精神引領中法關係始終走在中國與西方大國關係前列。
A. 肝膽相照
B. 互不侵犯
C. 高瞻遠矚*
185、亞洲基礎設施投資銀行是首個由中國倡議設立的多邊金融機構，總部設在________，法定資本 1000 億美元。
A. 北京*
B. 首爾
C. 曼谷
186、2023 年 3 月 30 日上午，國務院總理李強出席博鰲亞洲論壇 2023 年年會開幕式，並發表主旨演講。李強表示，中國要建設的現代化，是人口規模巨大、全體人民共同富裕、物質文明和精神文明相協調、人與自然和諧共生、 的現代化，我們決不會通過戰爭、殖民、掠奪等方式實現現代化，一定會用和平和發展的方式使 14 億多人口整體邁進現代化社會。
A. 走互利共贏道路
B. 走和平發展道路*
C. 走和諧共生道路
187、聯合國安理會五個常任理事國是_________。
A. 中國、美國、俄羅斯、英國、法國*
B. 中國、美國、俄羅斯、法國、印度
C. 中國、美國、印度、巴西、英國
188、2023 年 3 月 27 日，中共中央政治局委員、中央外辦主任王毅在北京會見東盟秘書長高金洪。王毅表示，要推動“一帶一路”倡議和東盟“印太展望”對接合作，建設好和平、安寧、 、美麗、友好的共同家園，建設更為緊密的中國東盟命運共同體。
A. 繁榮*
B. 發達
C. 富裕
189、當地時間 2023 年 1 月 11 日，國務委員兼外交部長秦剛在亞的斯亞貝巴出席非洲疾控中心總部竣工儀式。秦剛表示，非洲疾控中心總部項目是習近平主席在 2018 年中非合作論壇北京峰會上宣佈的對非合作旗艦項目，是繼 後中非合作的又一標誌性項目。
A. 蒙內鐵路
B. 布維水電站
C. 非盟會議中心*
190、國際法院於 1946 年成立，是唯一具有一般管轄權的普遍性國際法院，系聯合國六大機構之一。新中國成立來，先後有三位中國人擔任國際法院法官。以下_________沒有擔任過國際法院法官一職。
A .梅汝璈*
B. 倪征燠
C. 薛捍勤
191、_________的“上海精神”是上海合作組織的靈魂，是各成員國彼此關係行為的準則與合作原則。
A.“共商共建共享”
B.“互信、互利、平等、協商，尊重多樣文明，謀求共同發展”*
C.“團結互信、安危共擔、互利共贏、包容互鑒”
192、2023 年 2 月 21 日，國務委員兼外交部長秦剛宣佈中方正式發佈《全球安全倡議概念文件》。《概念文件》具有鮮明的行動導向：堅定支持 安全治理核心作用；努力促進大國協調和良性互動；積極推動對話和平解決熱點問題；有效應對傳統與非傳統安全挑戰；不斷加強全球安全治理體系和能力建設。
A. 聯合國*
B. 二十國集團
C. 七國集團
193、中國政府於 年簽署《經濟、社會及文化權利國際公約》。
A. 1978
B. 1997*
C. 2001
194、中國是 國際公約的保存國。
A.《國際竹藤組織成立協定》*
B.《聯合國海洋法公約》
C.《煙草控制框架公約》
195、《聯合國海洋法公約》於 1994 年 11 月 16 日生效，對當前全球領海主權爭端、海上天然資源管理、污染處理等具有重要的指導和裁決作用。以下關於公約表述正確的一項是 。
A. 公約確立了公海航行船舶由聯合國管轄的原則
B. 中國未接受國際海洋法法庭的管轄*
C. 美國是公約成員國
196、各國外交代表在駐在國的禮賓順序是按 原則排列。
A. 外交代表的職務級別 
B. 外交代表遞交國書的日期* 
C. 外交代表所派遣國家的順序
197、下列關於新疆說法錯誤的是_______________。
A. 涉疆問題不是人權、民族、宗教問題，而是反暴恐反分裂問題。
B. 歷史上，維吾爾族先民受突厥人奴役，兩者是被奴役和奴役的關係。
C. 伊斯蘭教是維吾爾族天生信仰且唯一信仰的宗教。*
198、2023 年 2 月 27 日，國務委員兼外交部長秦剛在北京以視頻方式出席聯合國人權理事會第 52屆會議高級別會議並發表致辭。秦剛表示，人權是不可分割的，生存權和 權是首要基本人權，公民權利和政治權利、經濟社會文化權利必須同等重視、系統推進。
A. 發展*
B. 安全
C. 投票
199、中國支持維護國際核不擴散體系，維護中東地區的和平與穩定，主張通過 解決伊朗核問題。
A. 外交談判和平*
B. 經濟制裁
C. 軍事封鎖
200、國際法院法官經 產生。
A. 聯合國安理會 5 個常任理事國一致推薦
B. 各國政府推薦
C. 聯合國大會和安理會選舉*
201、中國與東南亞國家山水相接，關係十分緊密。流經東南亞許多國家的湄公河在中國境內稱為 。
A. 鴨綠江
B. 瀾滄江*
C. 金沙江
202、2005 年 12 月，中國在非洲開辦的首家孔子學院舉行揭幕儀式。該學院位於_________。
A. 肯尼亞內羅畢*
B. 埃及開羅
C. 南非約翰內斯堡
203、2023 年 3 月 7 日，國務委員兼外交部長秦剛在兩會記者會上表示，10 年裡，“一帶一路”倡議拉動近萬億美元投資規模，形成 3000 多個合作項目，為沿線國家創造 42 萬個工作崗位，讓將近 4000 萬人擺脫貧困。 幫助 20 多個國家的年輕人掌握了職業技能。
A. 孔子課堂
B. 孔子學院
C. 魯班工坊*
204、與中國陸地接壤的共有 個國家。
A. 13 
B. 14* 
C. 15
205、2023 年 3 月 22 日，國務委員兼外交部長秦剛向慶祝阿拉伯國家聯盟成立 78 周年和阿盟駐華代表處成立 30 周年招待會致信。秦剛表示，中方願與阿方一道努力，共同落實好峰會成果，弘揚“ 、平等互利、包容互鑒”的中阿友好精神，朝著構建面向新時代的中阿命運共同體邁出堅實步伐，共同開創中阿關係更美好的未來。
A. 守望相助*
B. 相互尊重
C. 互利共贏
206、2009 年 10 月，全國人大常委會通過《中華人民共和國駐外外交人員法》。以下說法不正確的是 。
A. 根據該法，外交職務分為：特命全權大使、副大使、代表、副代表、公使、參贊、一等秘書、二等秘書、三等秘書、隨員。*
B. 根據該法，特命全權大使是中華人民共和國在駐在國的代表。
C. 根據該法，維護中國公民和法人在國外的正當權益是駐外外交人員的法定職責。
207、今年是習近平主席提出構建人類命運共同體重大理念十周年。該理念以 為價值追求，弘揚和平、發展、公平、正義、民主、自由，促進不同文明和社會制度和諧共生。
A. 共商共建共用
B. 全人類共同價值*
C. 全球發展倡議
208、聯合國於 1961 年初在國際法委員會草擬的關於外交往來和豁免公約草案的基礎上通過《維也納外交關係公約》，對 作了全面、具體的規定。
A. 外交特權
B. 外交關係制度*
C. 外交豁免
209、常駐外交使節制度的出現最早是在 。
A. 古希臘 
B. 古羅馬 
C. 義大利*
210、“國事訪問”是指 。
A. 一國政府首腦接受另一國政府首腦的邀請，對該國進行正式訪問。
B. 一國外交部長接受另一國外交部長的邀請，對該國進行正式訪問。
C. 一國國家元首接受另一國國家元首的邀請，對該國進行正式訪問。*
211、歡迎儀式上鳴放禮炮是表示對來訪國的友好和尊重，禮炮的響數根據來訪人身份而定。政府首腦訪問時鳴放禮炮的響數是 響。
A. 21
B. 19*
C. 17
212、在聯合國，外交代表的位次排列原則是 。
A. 國家字母順序*
B. 代表到任順序
C. 代表級別順序
213、每個國家都有代表本國的動物標誌。以下 是錯誤的。
A. 公牛是西班牙的代表
B. 白頭鷹是美國的代表
C. 知更鳥是德國的代表*
214、西餐中，紅白葡萄酒配餐的基本原則是 。
A. 紅酒配紅肉，白酒配白肉*
B. 紅酒配白肉，白酒配紅肉
C. 紅酒配紅肉，白酒配紅肉
215、大使正式就任的標誌是 。
A. 派遣國元首向其簽發派遣國書 
B. 大使向接受國元首遞交國書*
C. 大使抵達接受國
216、無任所大使是外交使節的一種，又稱 大使。
A. 名譽
B. 友誼
C. 巡迴*
217、常駐外交代表機構有不同的級別，以下不屬於常駐外交代表機構的是 。
A. 特使辦公室* 
B. 大使館 
C. 公使館
218、______有權在其乘坐的汽車上懸掛本國國旗。
A. 參贊
B. 一等秘書
C. 大使*
219、______是俄羅斯特有的迎接貴客的禮節。
A. 給客人獻哈達
B. 給客人獻鹽和麵包*
C. 給客人獻水
220、法文縮寫：R. S. V. P. 是什麼意思 。
A. 恭候大駕光臨
B. 敬請賜覆*
C. 若因故缺席，敬請告知
221、一國公民因政治原因逃亡他國，要求准予居留，被要求國接受上述逃亡者的要求，不予引渡，准予居留，就是給予 庇護。
A. 政治*
B. 外交
C. 人生
222、和平解決國際爭端的司法方式是 。
A. 談判 
B. 斡旋
C. 仲裁*
223、聯合國教科文組織總部所在地是 。
A. 德國柏林
B. 法國巴黎*
C. 奧地利維也納
224、聯合國教科文組織的英文縮寫是 。
A. UNESCO*
B. UNHRC
C. UNDP
225、國際民航組織 1944 年成立，總部設在加拿大的 。
A. 多倫多
B. 渥太華
C. 蒙特利爾*
226、禁止化學武器組織根據《禁止生物化學武器公約》成立，總部設於 。
A. 荷蘭海牙*
B. 美國紐約
C. 瑞士日內瓦
227、 國際原子能機構是一個專門致力於 的國際機構。
A. 和平利用原子能*
B. 推廣利用原子能
C. 禁止利用原子能
228、《全面禁止核試驗條約》於 年 9 月 10 日召開的聯合國大會獲得通過。
A. 1996*
B. 2001
C. 2006
229、裁軍談判會議是世界上唯一的多邊裁軍談判機構，在推動國際軍控、裁軍和防擴散進程方面具有不可替代的作用。該會議每年三次在 召開。
A. 紐約
B. 維也納
C. 日內瓦*
230、中國共產黨在與各國政黨交往中，遵循“獨立自主、_________、互相尊重、互不干涉內部事務”四項基本原則。
A. 完全平等*
B. 平等互利
C. 合作共贏
231、 年 1 月 1 日，歐元正式問世。
A. 1999*
B. 2000
C. 2008
232、歐元的最初倡導者是擔任過盧森堡首相的 。
A. 維爾納*
B. 讓·莫納
C. 舒曼
233、伊斯蘭教的三大傳統節日不包括 。
A. 開齋節
B. 盂蘭盆節*
C. 古爾邦節
234、以下不屬於發展中國家組織的是 。
A. 亞太經合組織*
B. 阿拉伯國家聯盟
C. 里約集團
235、當今世界一體化程度最高的區域經濟組織是 。
A. 亞太經合組織
B. 歐洲聯盟*
C. 非洲統一組織
236、當地時間 2023 年 4 月 13 日，國務委員兼外交部長秦剛在撒馬爾罕會見俄羅斯外長拉夫羅夫。秦剛表示，面對變亂交織的世界，習近平主席提出一系列重大倡議和理念，推動攜手構建持久和平、普遍安全、共同繁榮、 、清潔美麗的世界，彙聚各方共識最大公約數，為共同應對全球挑戰貢獻中國方案，歡迎俄方積極支持參與。
A. 合作共贏
B. 兼收並蓄
C. 開放包容*
237、世界第一個把發達國家和發展中國家聯繫在一起的區域經濟集團是 。
A. 歐洲經濟共同體
B. 非洲統一組織
C. 北美自由貿易區*
238、下面不屬於石油輸出國組織（OPEC）的國家是 。
A. 阿聯
B. 委內瑞拉
C. 俄羅斯*
239、世界銀行的前身是 。
A. 國際貿易組織
B. 國際復興開發銀行*
C. 國際貨幣基金組織
240、30 多年來，中國已派出維和人員 5 萬余人次，赴 20 多個國家和地區參加聯合國維和行動，先後有 25 名維和人員獻出寶貴生命。目前，中國是聯合國第________大維和攤款國和安理會常任理事國中第________大出兵國，共有2200多名中國官兵在8個維和任務區執行任務，中國“藍盔”成為聯合國維護和平的關鍵力量。
A. 二、一*
B. 二、二
C. 一、一
241、2017 年 10 月底，澳門被聯合國教科文組織評為________。這一成功，也是繼“澳門歷史城區”被聯合國教科文組織列入《世界遺產名錄》、“清代澳門地方衙門檔案（一六九三—一八八六）”獲列《世界記憶名錄》後，為澳門增添的又一張亮麗的國際名片。
A. 美食之城
B. 創意城市美食之都*
C. 創意美食之都
242、中國處理朝鮮問題堅持的三個原則是________。
A. 堅持半島無核化，堅持維護半島和平，堅持對話解決問題*
B. 堅持和平談判，堅持半島無核化，堅持半島地區發展
C. 堅持半島無核化，堅持對話解決問題，堅持安理會主導
243、2014 年 3 月，中國國家主席習近平歷史性訪問歐盟總部，同歐盟領導人就打造中歐________四大夥伴關係達成重要共識，進一步豐富了中歐全面戰略夥伴關係的內涵，為雙方關係發展指明了戰略方向。
A. 和平、增長、改革、文明*
B. 和平、合作、共贏、文明
C. 和平、增長、改革、共贏
244、據目前的考古發現，距今 年前，我國古代的先民就在澳門一帶居住、活動。
A. 6000 *
B. 5000
C. 2000
245、澳門在 2200 多年前就正式繪入中國版圖，在秦朝時澳門屬 管轄。
A. 桂林
B. 南海*
C. 象郡
246、16、17 世紀以澳門為貿易樞紐的 “海上絲綢之路” ，為何被稱為“絲銀之路”，是因為 。
A. 絲綢和白銀是貿易的主要物品*
B. 貿易利潤驚人
C. 貿易航線狹窄
247、1614 年，明朝政府正式宣佈允許葡萄牙人居留澳門，葡萄牙人還獲得了一系列權利。 _______權利他們當時並未獲得。
A. 主權*
B. 自治權
C. 貿易權
248、針對租居澳門的葡萄牙人，明朝政府採取的方針是 。
A. 華夷分治
B. 盡行驅逐
C. 建城設官而縣治之*
249、 年，澳門出版了世界上第一本英漢詞典：《華英字典》。
A. 1815*
B. 1816
C. 1817
250、1839 年， 作為欽差大臣和兩廣總督鄧廷楨一起入澳禁煙。
A. 林則徐*
B. 張之洞
C. 李鴻章
251、1839 年，林則徐在廣東虎門銷煙後，巡視澳門並在澳門的 接見了當時的澳葡官員，“宣佈恩威，申明禁令”。
A. 媽閣廟
B. 觀音廟
C. 蓮峰廟*
252、十九世紀末，康有為、梁啟超在澳門創辦的報紙是 。
A.《時務報》
B.《知新報》*
C.《大公報》
253、由於清朝政府的昏庸腐敗、軟弱無能， 1845 年，葡萄牙國王公然宣佈開放澳門為 。
A.“自由港”*
B.“租借地”
C.“領土”
254、《望廈條約》於 1844 年 7 月 3 日在澳門望廈村簽訂，是近現代中國與_______簽訂的第一個不平等條約。
A. 美國*
B. 英國
C. 葡萄牙
255、首個在澳門設立秘書處的政府間國際組織是________：
A. 世界氣象組織
B. 颱風委員會*
C. 世界博彩研究協會
256、中國積極踐行________的全球治理觀，支援發展中國家在全球政治、經濟、安全事務中獲得更大發言權。
A. 共商共建共享*
B. 共商共建共用
C. 共商共用共享
257、1892 年， 抵達澳門任鏡湖醫院首席醫師，開創了鏡湖醫院西醫行醫的先河。
A. 孫中山*
B. 楊鶴齡
C. 陳少白
258、抗日戰爭爆發後，澳門同胞成立各種“救災會”，其目的是 。
A. 救濟災民
B. 義演
C. 支援抗戰*
259、為加強澳門與葡語系國家的體育交流， 年澳門舉辦了第一屆葡語系奧林匹克委員會總會運動會。
A. 2003 
B. 2006* 
C. 2008
260、 年後，葡萄牙人開始公開趕走清朝的駐澳官員。
A. 1849 *
B. 1335
C. 1553
261、1844 年 10 月 24 日，清政府派兩廣總督耆英與法國特使兼全權公使拉萼尼在法國軍艦 “阿基米德” 號上簽訂了《黃埔條約》，1845 年 8 月 25 日在_______交換批准。
A. 澳門*
B. 廣州 
C. 香港
262、1887 年 12 月，葡萄牙政府強迫清政府簽訂_______，宣佈中國“允准葡國永駐管理澳門及屬澳之地”，等於承認了葡萄牙對澳門的管治權。
A.《中葡天津條約》
B.《中葡和好通商條約》*
C.《黃埔條約》
263、中國常駐聯合國代表黃華於_______年 3 月致函聯合國非殖民化特委會主席，反對將香港和澳門列入“反殖宣言”中適用的殖民地地區名單之內。
A. 1976
B. 1982
C. 1972*
264、中葡雙方經過_______輪談判，最終就《中葡聯合聲明》文本達成一致。
A. 五 
B. 六 
C. 四* 
265、《中華人民共和國政府和葡萄牙共和國政府關於澳門問題的聯合聲明》（《中葡聯合聲明》）的生效標誌著澳門問題的順利解決，澳門自此進入主權交接的過渡時期。《中葡聯合聲明》的生效時間是_______。
A .1987 年 4 月 13 日
B. 1988 年 1 月 15 日*
C. 1999 年 12 月 20 日
266、_______，《中華人民共和國澳門特別行政區基本法》公佈。
A. 1988 年 4 月 13 日
B. 1993 年 3 月 31 日*
C. 1995 年 3 月 31 日
267、澳門特別行政區基本法第一條的內容是_______。
A. 澳門特別行政區是中華人民共和國不可分離的部分*
B. 澳門特別行政區以法律保護私有財產權
C. 澳門特別行政區依法保障澳門居民和其他人的權利和自由
268、澳門特別行政區是中華人民共和國的一個享有高度自治權的地方行政區域，直轄於_______。
A. 中央人民政府* 
B. 全國人民代表大會
C. 全國人民代表大會常務委員會
269、澳門特別行政區的高度自治權由 授予。
A. 全國人民代表大會*
B. 國務院
C. 國家主席
270、澳門特別行政區行政長官在當地通過選舉或協商產生，由_______任命。
A. 全國人民代表大會 
B. 全國人民代表大會常務委員會
C. 中央人民政府*
271、澳門特別行政區基本法規定， 澳門特別行政區不實行社會主義的制度和政策，保持原有的資本主義制度和生活方式_______年不變。
A. 50*
B. 100
C. 300
272、澳門特別行政區的行政機關、立法機關和司法機關，除使用中文外，還可使用 。
A. 英文
B. 漢語
C. 葡文*
273、根據澳門基本法的規定， 澳門特別行政區的外交事務與國防事務由 負責管理。
A. 澳門特別行政區政府
B. 中央人民政府*
C. 中華人民共和國外交部駐澳門特別行政區特派員公署
274、依據澳門特別行政區基本法，澳門特別行政區享有_________。（1）獨立的外交權（2）行政管理權（3）獨立的防務權（4）獨立的司法權和終審權（5）立法權
A.（3）（4）（5） 
B.（2）（4）（5）*
C.（1）（2）（4）（5）
275、澳門可以“_______”的名義參加不以國家為單位參加的國際組織和國際會議。
A. 中國
B. 澳門
C. 中國澳門*
276、澳門特別行政區行政長官由年滿 40 周歲、在澳門通常居住連續滿_______年並在外國無居留權的澳門特別行政區永久性居民中的中國公民擔任。
A. 三十
B. 二十*
C. 五十
277、在海外華人的國籍問題上，中國政府歷來主張 。
A. 雙重國籍
B. 僑居在國外的華僑可以自由選擇國籍，在華僑選擇居住國國籍的同時，就自然放棄了中國國籍*
C .必須保留中國國籍
278、由澳門特別行政區行政長官提名並須中央人民政府任命的官員是 。（1）經濟財政司長 （2）審計長 （3）廉政專員 （4）檢察長 （5）立法會主席
A.（1）（2）（3）（4）（5）
B.（1）（3）（4）（5）
C.（1）（2）（3）（4）*
279、根據《中華人民共和國澳門特別行政區基本法》，以下關於中央和澳門特區表述不正確的一項是______。
A. 外交部在澳門設立特派員公署處理外交事務
B. 中央人民政府授權澳門特區依照《基本法》自行處理有關的對外事務
C. 澳門特區享有獨立的司法權和終審權，特區法院對國防、外交等國家行為有管轄權*
280、中央人民政府嚴格根據《中華人民共和國澳門特別行政區基本法》和 方針處理涉及澳門特別行政區的條約和法律服務，為澳門特別行政區在有關領域參與國際合作、保持對外交往提供支援。
A.“和平共處”
B.“一國兩制”*
C.“依法治國”
281、澳門特別行政區的代表，可作為中華人民共和國政府代表團的_______，參加由中央人民政府進行的與澳門特別行政區直接有關的外交談判。
A. 助手 
B. 成員* 
C. 助理
282、聯合國安全理事會是聯合國中唯一有權對國際和平與安全採取行動的機構，由中國、法國、俄羅斯、英國、美國等 5 個常任理事國和 10 個非常任理事國組成。非常任理事國按_______原則由聯合國大會選舉產生，任期_______年，不能連選連任。
A. 地區分配，2*
B. 對等分配，3
C. 人口分配，4
283、我國積極承擔國際責任，是聯合國會費第二大出資國、聯合國維和行動經費第二大出資國，也是安理會五個常任理事國中派出維和人員________的國家。
A. 最多*
B. 第二多
C. 第三多
284、2018 年 6 月 22 日至 23 日，中央外事工作會議在北京召開，確立了習近平外交思想的指導地位。習近平外交思想以“十個堅持”為總體框架和核心要義，以下哪項不是 “十個堅持” 的內容？________
A. 堅持以維護世界和平、促進共同發展為宗旨推動構建人類命運共同體
B. 堅持以實現中華民族偉大復興為使命推進中國特色大國外交
C. 堅持獨立自主和平外交方針、和平共處五項原則*
285、當前，世界多極化、經濟全球化、社會信息化、文化多樣化深入發展，國際社會進入格局調整、體系變革的關鍵階段。我國提出了推動構建以________為核心的新型國際關係思想，成為引導 21 世紀國際關係發展的重要理念和新時代中國特色大國外交的重要內容。
A. 相互尊重、霸權主義、零和博弈
B. 相互尊重、公平正義、零和博弈
C. 相互尊重、公平正義、合作共贏*
286、我國始終將周邊置於外交全局的首要位置，以促進周邊和平、穩定、發展為己任，始終踐行________理念和________周邊外交方針。
A. 親誠惠容；以鄰為善、以鄰為伴*
B. 真實親誠；和平相處
C. 親誠惠容；多元文化共存
287、中央人民政府授權澳門特區政府依照法律給持有澳門永久性居民身份證的中國公民簽發_______。
A. 中華人民共和國澳門特別行政區護照*
B. 港澳同胞回鄉證
C. 澳門行政區旅遊證件
288、中國簽證是中國簽證機關頒發給外國公民出入或過境中國的許可證明，分為外交簽證、禮遇簽證、公務簽證和_______四個種類。
A. 普通簽證*
B. 旅遊簽證
C. 過境簽證
289、“五通”是共建“一帶一路”倡議的核心內容，以下哪項不是“五通”之一？
A. 民心相通
B. 政策溝通
C. 經濟聯通*
290、《澳門特別行政區基本法》規定，中華人民共和國外交部在澳門設立機構，處理 _______事務。中央人民政府授權澳門特別行政區依照《基本法》自行處理有關的_______事務。
A. 外交、對外*
B. 對外、對外
C. 外交、涉外
291、澳門在隋朝時屬 管轄。
A. 南海縣*
B. 珠崖縣
C. 長安縣
292、_______是中國領事官員可以提供的協助。
A. 為遺失旅行證件或無證件回國的中國公民簽發旅行證或回國證明*
B. 為當事人長期保管行李物品
C. 為中國國內有關機關出具的證書或文書辦理公證
293、領事官員不可以提供的協助是_______。
A. 協助當事人尋找失蹤或久無音訊的親友
B. 在所在國發生重大突發事件時，為當事人撤離危險地區提供諮詢和必要的協助
C. 為當事人在當地謀職*
294、《中華人民共和國領事特權與豁免條例》由中華人民共和國第七屆全國人民代表大會常務委員會第十六次會議於_______通過，自公佈之日起施行。
A. 1988 年 10 月 1 日
B. 1990 年 10 月 30 日*
C. 1992 年 11 月 10 日
295、未經中華人民共和國中央政府批准，外國只能在澳門特別行政區設立_______。
A. 領事館
B. 名譽領事館
C. 民間機構*
296、_______年 1 月 29 日-11 月 6 日，澳門主辦了第_______屆東亞運動會。此次運動會是歷屆東亞運動會中參加國家與地區數量最多的一屆。
A. 2001、三
B. 2005、四*
C. 2009、五
297、中國與葡萄牙於_______正式建立外交關係。
A. 1974 年 4 月 25 日
B. 1979 年 2 月 8 日*
C. 1986 年 6 月 30 日
298、以下關於澳門特別行政區與世界貿易組織（World Trade Organization，簡稱 WTO）關係描述不正確的一項是_______。
A. 澳門以 “中國澳門” 名義加入世界貿易組織
B. 澳門以國際自由港身份加入世界貿易組織*
C. 澳門於 1991 年 1 月加入世界貿易組織的前身關貿總協定
299、外國國家航空器進入澳門特別行政區須經_______許可。
A. 澳門特別行政區行政長官
B. 中央人民政府*
C. 澳門特別行政區政府
300、2005 年 7 月 15 日，在第_______屆聯合國教科文組織世界遺產委員會會議上，澳門歷史城區正式被列入《世界文化遺產名錄》，成為中國第_______處世界遺產。
A. 30、31 
B. 29、30 
C. 29、31*
`; function El(h, A, l) { const M = h.slice(); return M[8] = A[l], M[10] = l, M } function Y0(h) { let A; return { c() { A = Rt("p"), A.textContent = "\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u984C\u76EE" }, m(l, M) { gt(l, A, M) }, p: Ce, d(l) { l && et(A) } } } function X0(h) { let A, l = h[2].text + "", M, I, D, b = h[2].choices, G = []; for (let x = 0; x < b.length; x += 1)G[x] = Ll(El(h, b, x)); return { c() { A = Rt("p"), M = Be(l), I = dr(), D = Rt("ul"); for (let x = 0; x < G.length; x += 1)G[x].c(); Zt(A, "class", "text-lg"), Zt(D, "class", "mt-4") }, m(x, W) { gt(x, A, W), It(A, M), gt(x, I, W), gt(x, D, W); for (let $ = 0; $ < G.length; $ += 1)G[$].m(D, null) }, p(x, W) { if (W & 4 && l !== (l = x[2].text + "") && Ki(M, l), W & 14) { b = x[2].choices; let $; for ($ = 0; $ < b.length; $ += 1) { const E = El(x, b, $); G[$] ? G[$].p(E, W) : (G[$] = Ll(E), G[$].c(), G[$].m(D, null)) } for (; $ < G.length; $ += 1)G[$].d(1); G.length = b.length } }, d(x) { x && et(A), x && et(I), x && et(D), b0(G, x) } } } function Ll(h) { let A, l = h[8].text + "", M, I, D, b; function G() { return h[4](h[10]) } return { c() { A = Rt("li"), M = Be(l), I = dr(), Zt(A, "class", "py-3.5 px-2"), ht(A, "bg-green-500", h[3] && h[8].correct), ht(A, "bg-red-500", h[1] === h[10] && !h[8].correct), ht(A, "text-white", h[1] === h[10] || h[3] && h[8].correct), ht(A, "font-bold", h[1] === h[10] || h[3] && h[8].correct) }, m(x, W) { gt(x, A, W), It(A, M), It(A, I), D || (b = W0(A, "click", G), D = !0) }, p(x, W) { h = x, W & 4 && l !== (l = h[8].text + "") && Ki(M, l), W & 12 && ht(A, "bg-green-500", h[3] && h[8].correct), W & 6 && ht(A, "bg-red-500", h[1] === h[10] && !h[8].correct), W & 14 && ht(A, "text-white", h[1] === h[10] || h[3] && h[8].correct), W & 14 && ht(A, "font-bold", h[1] === h[10] || h[3] && h[8].correct) }, d(x) { x && et(A), D = !1, b() } } } function J0(h) { let A, l, M, I = h[0].length + "", D, b, G, x; function W(Q, nn) { return Q[2] ? X0 : Y0 } let $ = W(h), E = $(h); return { c() { A = Rt("main"), l = Rt("p"), M = Be("\u5269\u9918\u554F\u984C: "), D = Be(I), b = dr(), E.c(), G = dr(), x = Rt("footer"), x.textContent = "", Zt(l, "class", "mb-6 text-sm"), Zt(A, "class", "p-4 min-h-[80vh]"), Zt(x, "class", "px-2 text-center") }, m(Q, nn) { gt(Q, A, nn), It(A, l), It(l, M), It(l, D), It(A, b), E.m(A, null), gt(Q, G, nn), gt(Q, x, nn) }, p(Q, [nn]) { nn & 1 && I !== (I = Q[0].length + "") && Ki(D, I), $ === ($ = W(Q)) && E ? E.p(Q, nn) : (E.d(1), E = $(Q), E && (E.c(), E.m(A, null))) }, i: Ce, o: Ce, d(Q) { Q && et(A), E.d(), Q && et(G), Q && et(x) } } } function Q0(h, A, l) {
    let M, I; const D = [], b = Z0.trim().split(`
`); for (let E = 0; E < b.length; E += 4) { const Q = b[E].trim(), nn = []; for (let An = 0; An < 3; An++) { let Kn = b[E + An + 1].trim(); const _n = Kn.endsWith("*"); _n && (Kn = Kn.slice(0, -1)), nn.push({ text: Kn, correct: _n }) } D.push({ text: Q, choices: nn }) } let G = z0.shuffle(D), x; function W() { const E = G.shift(); !(I != null && I.correct) && E && G.push(E), l(0, G), l(1, x = void 0) } const $ = E => x === void 0 && l(1, x = E); return h.$$.update = () => { h.$$.dirty & 1 && l(2, M = G[0]), h.$$.dirty & 6 && l(3, I = x !== void 0 ? M.choices[x] : void 0), h.$$.dirty & 2 && x !== void 0 && setTimeout(W, 1000) }, [G, x, M, I, $]
} class V0 extends K0 { constructor(A) { super(), q0(this, A, Q0, J0, L0, {}) } } new V0({ target: document.getElementById("app") });
