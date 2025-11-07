// ../../../../.cache/deno/npm/registry.npmjs.org/preact/10.27.2/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n3, l4) {
  for (var u5 in l4) n3[u5] = l4[u5];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l4, u5, t4) {
  var i5, r4, o4, e4 = {};
  for (o4 in u5) "key" == o4 ? i5 = u5[o4] : "ref" == o4 ? r4 = u5[o4] : e4[o4] = u5[o4];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o4 in l4.defaultProps) void 0 === e4[o4] && (e4[o4] = l4.defaultProps[o4]);
  return m(l4, e4, i5, r4, null);
}
function m(n3, t4, i5, r4, o4) {
  var e4 = {
    type: n3,
    props: t4,
    key: i5,
    ref: r4,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == o4 ? ++u : o4,
    __i: -1,
    __u: 0
  };
  return null == o4 && null != l.vnode && l.vnode(e4), e4;
}
function k(n3) {
  return n3.children;
}
function x(n3, l4) {
  this.props = n3, this.context = l4;
}
function S(n3, l4) {
  if (null == l4) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var u5; l4 < n3.__k.length; l4++) if (null != (u5 = n3.__k[l4]) && null != u5.__e) return u5.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  var l4, u5;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++) if (null != (u5 = n3.__k[l4]) && null != u5.__e) {
      n3.__e = n3.__c.base = u5.__e;
      break;
    }
    return C(n3);
  }
}
function M(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n3, u5, t4, r4, o4, f5, c4, s4 = 1; i.length; ) i.length > s4 && i.sort(e), n3 = i.shift(), s4 = i.length, n3.__d && (t4 = void 0, r4 = void 0, o4 = (r4 = (u5 = n3).__v).__e, f5 = [], c4 = [], u5.__P && ((t4 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(t4), O(u5.__P, t4, r4, u5.__n, u5.__P.namespaceURI, 32 & r4.__u ? [
    o4
  ] : null, f5, null == o4 ? S(r4) : o4, !!(32 & r4.__u), c4), t4.__v = r4.__v, t4.__.__k[t4.__i] = t4, N(f5, t4, c4), r4.__e = r4.__ = null, t4.__e != o4 && C(t4)));
  $.__r = 0;
}
function I(n3, l4, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, y5, w5, d4, g4, _4, m4 = t4 && t4.__k || v, b3 = l4.length;
  for (f5 = P(u5, l4, m4, f5, b3), a4 = 0; a4 < b3; a4++) null != (y5 = u5.__k[a4]) && (h5 = -1 == y5.__i ? p : m4[y5.__i] || p, y5.__i = a4, g4 = O(n3, y5, h5, i5, r4, o4, e4, f5, c4, s4), w5 = y5.__e, y5.ref && h5.ref != y5.ref && (h5.ref && B(h5.ref, null, y5), s4.push(y5.ref, y5.__c || w5, y5)), null == d4 && null != w5 && (d4 = w5), (_4 = !!(4 & y5.__u)) || h5.__k === y5.__k ? f5 = A(y5, f5, n3, _4) : "function" == typeof y5.type && void 0 !== g4 ? f5 = g4 : w5 && (f5 = w5.nextSibling), y5.__u &= -7);
  return u5.__e = d4, f5;
}
function P(n3, l4, u5, t4, i5) {
  var r4, o4, e4, f5, c4, s4 = u5.length, a4 = s4, h5 = 0;
  for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o4 = l4[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? (f5 = r4 + h5, (o4 = n3.__k[r4] = "string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? m(null, o4, null, null, null) : w(o4) ? m(k, {
    children: o4
  }, null, null, null) : null == o4.constructor && o4.__b > 0 ? m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : o4).__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = L(o4, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i5 > s4 ? h5-- : i5 < s4 && h5++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h5-- : c4 == f5 + 1 ? h5++ : (c4 > f5 ? h5-- : h5++, o4.__u |= 4))) : n3.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u5[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = S(e4)), D(e4, e4));
  return t4;
}
function A(n3, l4, u5, t4) {
  var i5, r4;
  if ("function" == typeof n3.type) {
    for (i5 = n3.__k, r4 = 0; i5 && r4 < i5.length; r4++) i5[r4] && (i5[r4].__ = n3, l4 = A(i5[r4], l4, u5, t4));
    return l4;
  }
  n3.__e != l4 && (t4 && (l4 && n3.type && !l4.parentNode && (l4 = S(n3)), u5.insertBefore(n3.__e, l4 || null)), l4 = n3.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 == l4.nodeType);
  return l4;
}
function L(n3, l4, u5, t4) {
  var i5, r4, o4, e4 = n3.key, f5 = n3.type, c4 = l4[u5], s4 = null != c4 && 0 == (2 & c4.__u);
  if (null === c4 && null == n3.key || s4 && e4 == c4.key && f5 == c4.type) return u5;
  if (t4 > (s4 ? 1 : 0)) {
    for (i5 = u5 - 1, r4 = u5 + 1; i5 >= 0 || r4 < l4.length; ) if (null != (c4 = l4[o4 = i5 >= 0 ? i5-- : r4++]) && 0 == (2 & c4.__u) && e4 == c4.key && f5 == c4.type) return o4;
  }
  return -1;
}
function T(n3, l4, u5) {
  "-" == l4[0] ? n3.setProperty(l4, null == u5 ? "" : u5) : n3[l4] = null == u5 ? "" : "number" != typeof u5 || y.test(l4) ? u5 : u5 + "px";
}
function j(n3, l4, u5, t4, i5) {
  var r4, o4;
  n: if ("style" == l4) if ("string" == typeof u5) n3.style.cssText = u5;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l4 in t4) u5 && l4 in u5 || T(n3.style, l4, "");
    if (u5) for (l4 in u5) t4 && u5[l4] == t4[l4] || T(n3.style, l4, u5[l4]);
  }
  else if ("o" == l4[0] && "n" == l4[1]) r4 = l4 != (l4 = l4.replace(f, "$1")), o4 = l4.toLowerCase(), l4 = o4 in n3 || "onFocusOut" == l4 || "onFocusIn" == l4 ? o4.slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r4] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = c, n3.addEventListener(l4, r4 ? a : s, r4)) : n3.removeEventListener(l4, r4 ? a : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i5) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3) try {
      n3[l4] = null == u5 ? "" : u5;
      break n;
    } catch (n4) {
    }
    "function" == typeof u5 || (null == u5 || false === u5 && "-" != l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u5 ? "" : u5));
  }
}
function F(n3) {
  return function(u5) {
    if (this.l) {
      var t4 = this.l[u5.type + n3];
      if (null == u5.t) u5.t = c++;
      else if (u5.t < t4.u) return;
      return t4(l.event ? l.event(u5) : u5);
    }
  };
}
function O(n3, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, p5, v4, y5, _4, m4, b3, S2, C3, M2, $2, P2, A3, H, L2, T3, j3 = u5.type;
  if (null != u5.constructor) return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [
    f5 = u5.__e = t4.__e
  ]), (a4 = l.__b) && a4(u5);
  n: if ("function" == typeof j3) try {
    if (b3 = u5.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a4 = j3.contextType) && i5[a4.__c], M2 = a4 ? C3 ? C3.props.value : a4.__ : i5, t4.__c ? m4 = (h5 = u5.__c = t4.__c).__ = h5.__E : (S2 ? u5.__c = h5 = new j3(b3, M2) : (u5.__c = h5 = new x(b3, M2), h5.constructor = j3, h5.render = E), C3 && C3.sub(h5), h5.props = b3, h5.state || (h5.state = {}), h5.context = M2, h5.__n = i5, p5 = h5.__d = true, h5.__h = [], h5._sb = []), S2 && null == h5.__s && (h5.__s = h5.state), S2 && null != j3.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = d({}, h5.__s)), d(h5.__s, j3.getDerivedStateFromProps(b3, h5.__s))), v4 = h5.props, y5 = h5.state, h5.__v = u5, p5) S2 && null == j3.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), S2 && null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
    else {
      if (S2 && null == j3.getDerivedStateFromProps && b3 !== v4 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(b3, M2), !h5.__e && null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(b3, h5.__s, M2) || u5.__v == t4.__v) {
        for (u5.__v != t4.__v && (h5.props = b3, h5.state = h5.__s, h5.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
          n4 && (n4.__ = u5);
        }), $2 = 0; $2 < h5._sb.length; $2++) h5.__h.push(h5._sb[$2]);
        h5._sb = [], h5.__h.length && e4.push(h5);
        break n;
      }
      null != h5.componentWillUpdate && h5.componentWillUpdate(b3, h5.__s, M2), S2 && null != h5.componentDidUpdate && h5.__h.push(function() {
        h5.componentDidUpdate(v4, y5, _4);
      });
    }
    if (h5.context = M2, h5.props = b3, h5.__P = n3, h5.__e = false, P2 = l.__r, A3 = 0, S2) {
      for (h5.state = h5.__s, h5.__d = false, P2 && P2(u5), a4 = h5.render(h5.props, h5.state, h5.context), H = 0; H < h5._sb.length; H++) h5.__h.push(h5._sb[H]);
      h5._sb = [];
    } else do {
      h5.__d = false, P2 && P2(u5), a4 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
    } while (h5.__d && ++A3 < 25);
    h5.state = h5.__s, null != h5.getChildContext && (i5 = d(d({}, i5), h5.getChildContext())), S2 && !p5 && null != h5.getSnapshotBeforeUpdate && (_4 = h5.getSnapshotBeforeUpdate(v4, y5)), L2 = a4, null != a4 && a4.type === k && null == a4.key && (L2 = V(a4.props.children)), f5 = I(n3, w(L2) ? L2 : [
      L2
    ], u5, t4, i5, r4, o4, e4, f5, c4, s4), h5.base = u5.__e, u5.__u &= -161, h5.__h.length && e4.push(h5), m4 && (h5.__E = h5.__ = null);
  } catch (n4) {
    if (u5.__v = null, c4 || null != o4) if (n4.then) {
      for (u5.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
      o4[o4.indexOf(f5)] = null, u5.__e = f5;
    } else {
      for (T3 = o4.length; T3--; ) g(o4[T3]);
      z(u5);
    }
    else u5.__e = t4.__e, u5.__k = t4.__k, n4.then || z(u5);
    l.__e(n4, u5, t4);
  }
  else null == o4 && u5.__v == t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = q(t4.__e, u5, t4, i5, r4, o4, e4, c4, s4);
  return (a4 = l.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
}
function z(n3) {
  n3 && n3.__c && (n3.__c.__e = true), n3 && n3.__k && n3.__k.forEach(z);
}
function N(n3, u5, t4) {
  for (var i5 = 0; i5 < t4.length; i5++) B(t4[i5], t4[++i5], t4[++i5]);
  l.__c && l.__c(u5, n3), n3.some(function(u6) {
    try {
      n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
        n4.call(u6);
      });
    } catch (n4) {
      l.__e(n4, u6.__v);
    }
  });
}
function V(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b && n3.__b > 0 ? n3 : w(n3) ? n3.map(V) : d({}, n3);
}
function q(u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, v4, y5, d4, _4, m4, b3 = i5.props, k3 = t4.props, x3 = t4.type;
  if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((d4 = e4[a4]) && "setAttribute" in d4 == !!x3 && (x3 ? d4.localName == x3 : 3 == d4.nodeType)) {
      u5 = d4, e4[a4] = null;
      break;
    }
  }
  if (null == u5) {
    if (null == x3) return document.createTextNode(k3);
    u5 = document.createElementNS(o4, x3, k3.is && k3), c4 && (l.__m && l.__m(t4, e4), c4 = false), e4 = null;
  }
  if (null == x3) b3 === k3 || c4 && u5.data == k3 || (u5.data = k3);
  else {
    if (e4 = e4 && n.call(u5.childNodes), b3 = i5.props || p, !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < u5.attributes.length; a4++) b3[(d4 = u5.attributes[a4]).name] = d4.value;
    for (a4 in b3) if (d4 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v4 = d4;
    else if (!(a4 in k3)) {
      if ("value" == a4 && "defaultValue" in k3 || "checked" == a4 && "defaultChecked" in k3) continue;
      j(u5, a4, null, d4, o4);
    }
    for (a4 in k3) d4 = k3[a4], "children" == a4 ? y5 = d4 : "dangerouslySetInnerHTML" == a4 ? h5 = d4 : "value" == a4 ? _4 = d4 : "checked" == a4 ? m4 = d4 : c4 && "function" != typeof d4 || b3[a4] === d4 || j(u5, a4, d4, b3[a4], o4);
    if (h5) c4 || v4 && (h5.__html == v4.__html || h5.__html == u5.innerHTML) || (u5.innerHTML = h5.__html), t4.__k = [];
    else if (v4 && (u5.innerHTML = ""), I("template" == t4.type ? u5.content : u5, w(y5) ? y5 : [
      y5
    ], t4, i5, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f5, e4 ? e4[0] : i5.__k && S(i5, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) g(e4[a4]);
    c4 || (a4 = "value", "progress" == x3 && null == _4 ? u5.removeAttribute("value") : null != _4 && (_4 !== u5[a4] || "progress" == x3 && !_4 || "option" == x3 && _4 != b3[a4]) && j(u5, a4, _4, b3[a4], o4), a4 = "checked", null != m4 && m4 != u5[a4] && j(u5, a4, m4, b3[a4], o4));
  }
  return u5;
}
function B(n3, u5, t4) {
  try {
    if ("function" == typeof n3) {
      var i5 = "function" == typeof n3.__u;
      i5 && n3.__u(), i5 && null == u5 || (n3.__u = n3(u5));
    } else n3.current = u5;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function D(n3, u5, t4) {
  var i5, r4;
  if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current != n3.__e || B(i5, null, u5)), null != (i5 = n3.__c)) {
    if (i5.componentWillUnmount) try {
      i5.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u5);
    }
    i5.base = i5.__P = null;
  }
  if (i5 = n3.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && D(i5[r4], u5, t4 || "function" != typeof n3.type);
  t4 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function E(n3, l4, u5) {
  return this.constructor(n3, u5);
}
function G(u5, t4, i5) {
  var r4, o4, e4, f5;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u5, t4), o4 = (r4 = "function" == typeof i5) ? null : i5 && i5.__k || t4.__k, e4 = [], f5 = [], O(t4, u5 = (!r4 && i5 || t4).__k = _(k, null, [
    u5
  ]), o4 || p, p, t4.namespaceURI, !r4 && i5 ? [
    i5
  ] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e4, !r4 && i5 ? i5 : o4 ? o4.__e : t4.firstChild, r4, f5), N(e4, u5, f5);
}
n = v.slice, l = {
  __e: function(n3, l4, u5, t4) {
    for (var i5, r4, o4; l4 = l4.__; ) if ((i5 = l4.__c) && !i5.__) try {
      if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n3)), o4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t4 || {}), o4 = i5.__d), o4) return i5.__E = i5;
    } catch (l5) {
      n3 = l5;
    }
    throw n3;
  }
}, u = 0, t = function(n3) {
  return null != n3 && null == n3.constructor;
}, x.prototype.setState = function(n3, l4) {
  var u5;
  u5 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u5), this.props)), n3 && d(u5, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), M(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l4) {
  return n3.__v.__b - l4.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// ../../../../.cache/deno/npm/registry.npmjs.org/preact/10.27.2/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e4, t4, n3, o4, i5, u5) {
  t4 || (t4 = {});
  var a4, c4, p5 = t4;
  if ("ref" in p5) for (c4 in p5 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p5[c4] = t4[c4];
  var l4 = {
    type: e4,
    props: p5,
    key: n3,
    ref: a4,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --f2,
    __i: -1,
    __u: 0,
    __source: i5,
    __self: u5
  };
  if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p5[c4] && (p5[c4] = a4[c4]);
  return l.vnode && l.vnode(l4), l4;
}

// ../../../../.cache/deno/npm/registry.npmjs.org/preact/10.27.2/hooks/dist/hooks.module.js
var t2;
var r2;
var u3;
var i3;
var o2 = 0;
var f3 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n3, t4) {
  c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
  var u5 = r2.__H || (r2.__H = {
    __: [],
    __h: []
  });
  return n3 >= u5.__.length && u5.__.push({}), u5.__[n3];
}
function d2(n3) {
  return o2 = 1, h2(D2, n3);
}
function h2(n3, u5, i5) {
  var o4 = p2(t2++, 2);
  if (o4.t = n3, !o4.__c && (o4.__ = [
    i5 ? i5(u5) : D2(void 0, u5),
    function(n4) {
      var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
      t4 !== r4 && (o4.__N = [
        r4,
        o4.__[1]
      ], o4.__c.setState({}));
    }
  ], o4.__c = r2, !r2.__f)) {
    var f5 = function(n4, t4, r4) {
      if (!o4.__c.__H) return true;
      var u6 = o4.__c.__H.__.filter(function(n5) {
        return !!n5.__c;
      });
      if (u6.every(function(n5) {
        return !n5.__N;
      })) return !c4 || c4.call(this, n4, t4, r4);
      var i6 = o4.__c.props !== n4;
      return u6.forEach(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i6 = true);
        }
      }), c4 && c4.call(this, n4, t4, r4) || i6;
    };
    r2.__f = true;
    var c4 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r4) {
      if (this.__e) {
        var u6 = c4;
        c4 = void 0, f5(n4, t4, r4), c4 = u6;
      }
      e4 && e4.call(this, n4, t4, r4);
    }, r2.shouldComponentUpdate = f5;
  }
  return o4.__N || o4.__;
}
function T2(n3, r4) {
  var u5 = p2(t2++, 7);
  return C2(u5.__H, r4) && (u5.__ = n3(), u5.__H = r4, u5.__h = n3), u5.__;
}
function j2() {
  for (var n3; n3 = f3.shift(); ) if (n3.__P && n3.__H) try {
    n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
  } catch (t4) {
    n3.__H.__h = [], c2.__e(t4, n3.__v);
  }
}
c2.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c2.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
}, c2.__r = function(n3) {
  a2 && a2(n3), t2 = 0;
  var i5 = (r2 = n3.__c).__H;
  i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u3 = r2;
}, c2.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
    n4.u && (n4.__H = n4.u), n4.u = void 0;
  })), u3 = r2 = null;
}, c2.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r4) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c2.__e(r4, n4.__v);
    }
  }), l2 && l2(n3, t4);
}, c2.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r4 = n3.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r4.__H = void 0, t4 && c2.__e(t4, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r4 = function() {
    clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u5 = setTimeout(r4, 35);
  k2 && (t4 = requestAnimationFrame(r4));
}
function z2(n3) {
  var t4 = r2, u5 = n3.__c;
  "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
    return t5 !== n3[r4];
  });
}
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// ../../../../.cache/deno/npm/registry.npmjs.org/@preact/signals-core/1.12.1/dist/signals-core.module.js
var i4 = Symbol.for("preact-signals");
function t3() {
  if (!(s3 > 1)) {
    var i5, t4 = false;
    while (void 0 !== h3) {
      var r4 = h3;
      h3 = void 0;
      f4++;
      while (void 0 !== r4) {
        var o4 = r4.o;
        r4.o = void 0;
        r4.f &= -3;
        if (!(8 & r4.f) && c3(r4)) try {
          r4.c();
        } catch (r5) {
          if (!t4) {
            i5 = r5;
            t4 = true;
          }
        }
        r4 = o4;
      }
    }
    f4 = 0;
    s3--;
    if (t4) throw i5;
  } else s3--;
}
function r3(i5) {
  if (s3 > 0) return i5();
  s3++;
  try {
    return i5();
  } finally {
    t3();
  }
}
var o3 = void 0;
function n2(i5) {
  var t4 = o3;
  o3 = void 0;
  try {
    return i5();
  } finally {
    o3 = t4;
  }
}
var h3 = void 0;
var s3 = 0;
var f4 = 0;
var v3 = 0;
function e3(i5) {
  if (void 0 !== o3) {
    var t4 = i5.n;
    if (void 0 === t4 || t4.t !== o3) {
      t4 = {
        i: 0,
        S: i5,
        p: o3.s,
        n: void 0,
        t: o3,
        e: void 0,
        x: void 0,
        r: t4
      };
      if (void 0 !== o3.s) o3.s.n = t4;
      o3.s = t4;
      i5.n = t4;
      if (32 & o3.f) i5.S(t4);
      return t4;
    } else if (-1 === t4.i) {
      t4.i = 0;
      if (void 0 !== t4.n) {
        t4.n.p = t4.p;
        if (void 0 !== t4.p) t4.p.n = t4.n;
        t4.p = o3.s;
        t4.n = void 0;
        o3.s.n = t4;
        o3.s = t4;
      }
      return t4;
    }
  }
}
function u4(i5, t4) {
  this.v = i5;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t4 ? void 0 : t4.watched;
  this.Z = null == t4 ? void 0 : t4.unwatched;
  this.name = null == t4 ? void 0 : t4.name;
}
u4.prototype.brand = i4;
u4.prototype.h = function() {
  return true;
};
u4.prototype.S = function(i5) {
  var t4 = this, r4 = this.t;
  if (r4 !== i5 && void 0 === i5.e) {
    i5.x = r4;
    this.t = i5;
    if (void 0 !== r4) r4.e = i5;
    else n2(function() {
      var i6;
      null == (i6 = t4.W) || i6.call(t4);
    });
  }
};
u4.prototype.U = function(i5) {
  var t4 = this;
  if (void 0 !== this.t) {
    var r4 = i5.e, o4 = i5.x;
    if (void 0 !== r4) {
      r4.x = o4;
      i5.e = void 0;
    }
    if (void 0 !== o4) {
      o4.e = r4;
      i5.x = void 0;
    }
    if (i5 === this.t) {
      this.t = o4;
      if (void 0 === o4) n2(function() {
        var i6;
        null == (i6 = t4.Z) || i6.call(t4);
      });
    }
  }
};
u4.prototype.subscribe = function(i5) {
  var t4 = this;
  return E2(function() {
    var r4 = t4.value, n3 = o3;
    o3 = void 0;
    try {
      i5(r4);
    } finally {
      o3 = n3;
    }
  }, {
    name: "sub"
  });
};
u4.prototype.valueOf = function() {
  return this.value;
};
u4.prototype.toString = function() {
  return this.value + "";
};
u4.prototype.toJSON = function() {
  return this.value;
};
u4.prototype.peek = function() {
  var i5 = o3;
  o3 = void 0;
  try {
    return this.value;
  } finally {
    o3 = i5;
  }
};
Object.defineProperty(u4.prototype, "value", {
  get: function() {
    var i5 = e3(this);
    if (void 0 !== i5) i5.i = this.i;
    return this.v;
  },
  set: function(i5) {
    if (i5 !== this.v) {
      if (f4 > 100) throw new Error("Cycle detected");
      this.v = i5;
      this.i++;
      v3++;
      s3++;
      try {
        for (var r4 = this.t; void 0 !== r4; r4 = r4.x) r4.t.N();
      } finally {
        t3();
      }
    }
  }
});
function d3(i5, t4) {
  return new u4(i5, t4);
}
function c3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i) return true;
  return false;
}
function a3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
    var r4 = t4.S.n;
    if (void 0 !== r4) t4.r = r4;
    t4.S.n = t4;
    t4.i = -1;
    if (void 0 === t4.n) {
      i5.s = t4;
      break;
    }
  }
}
function l3(i5) {
  var t4 = i5.s, r4 = void 0;
  while (void 0 !== t4) {
    var o4 = t4.p;
    if (-1 === t4.i) {
      t4.S.U(t4);
      if (void 0 !== o4) o4.n = t4.n;
      if (void 0 !== t4.n) t4.n.p = o4;
    } else r4 = t4;
    t4.S.n = t4.r;
    if (void 0 !== t4.r) t4.r = void 0;
    t4 = o4;
  }
  i5.s = r4;
}
function y2(i5, t4) {
  u4.call(this, void 0);
  this.x = i5;
  this.s = void 0;
  this.g = v3 - 1;
  this.f = 4;
  this.W = null == t4 ? void 0 : t4.watched;
  this.Z = null == t4 ? void 0 : t4.unwatched;
  this.name = null == t4 ? void 0 : t4.name;
}
y2.prototype = new u4();
y2.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === v3) return true;
  this.g = v3;
  this.f |= 1;
  if (this.i > 0 && !c3(this)) {
    this.f &= -2;
    return true;
  }
  var i5 = o3;
  try {
    a3(this);
    o3 = this;
    var t4 = this.x();
    if (16 & this.f || this.v !== t4 || 0 === this.i) {
      this.v = t4;
      this.f &= -17;
      this.i++;
    }
  } catch (i6) {
    this.v = i6;
    this.f |= 16;
    this.i++;
  }
  o3 = i5;
  l3(this);
  this.f &= -2;
  return true;
};
y2.prototype.S = function(i5) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.S(t4);
  }
  u4.prototype.S.call(this, i5);
};
y2.prototype.U = function(i5) {
  if (void 0 !== this.t) {
    u4.prototype.U.call(this, i5);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
    }
  }
};
y2.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
  }
};
Object.defineProperty(y2.prototype, "value", {
  get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i5 = e3(this);
    this.h();
    if (void 0 !== i5) i5.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  }
});
function w3(i5, t4) {
  return new y2(i5, t4);
}
function _2(i5) {
  var r4 = i5.u;
  i5.u = void 0;
  if ("function" == typeof r4) {
    s3++;
    var n3 = o3;
    o3 = void 0;
    try {
      r4();
    } catch (t4) {
      i5.f &= -2;
      i5.f |= 8;
      b(i5);
      throw t4;
    } finally {
      o3 = n3;
      t3();
    }
  }
}
function b(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
  i5.x = void 0;
  i5.s = void 0;
  _2(i5);
}
function g2(i5) {
  if (o3 !== this) throw new Error("Out-of-order effect");
  l3(this);
  o3 = i5;
  this.f &= -2;
  if (8 & this.f) b(this);
  t3();
}
function p3(i5, t4) {
  this.x = i5;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t4 ? void 0 : t4.name;
}
p3.prototype.c = function() {
  var i5 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t4 = this.x();
    if ("function" == typeof t4) this.u = t4;
  } finally {
    i5();
  }
};
p3.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _2(this);
  a3(this);
  s3++;
  var i5 = o3;
  o3 = this;
  return g2.bind(this, i5);
};
p3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h3;
    h3 = this;
  }
};
p3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) b(this);
};
p3.prototype.dispose = function() {
  this.d();
};
function E2(i5, t4) {
  var r4 = new p3(i5, t4);
  try {
    r4.c();
  } catch (i6) {
    r4.d();
    throw i6;
  }
  var o4 = r4.d.bind(r4);
  o4[Symbol.dispose] = o4;
  return o4;
}

// ../../../../.cache/deno/npm/registry.npmjs.org/@preact/signals/2.3.2/dist/signals.module.js
var h4;
var p4;
var w4;
var m3 = [];
E2(function() {
  h4 = this.N;
})();
function y4(i5, t4) {
  l[i5] = t4.bind(null, l[i5] || function() {
  });
}
function _3(i5) {
  if (w4) w4();
  w4 = i5 && i5.S();
}
function g3(i5) {
  var n3 = this, r4 = i5.data, f5 = useSignal(r4);
  f5.value = r4;
  var e4 = T2(function() {
    var i6 = n3, r5 = n3.__v;
    while (r5 = r5.__) if (r5.__c) {
      r5.__c.__$f |= 4;
      break;
    }
    var o4 = w3(function() {
      var i7 = f5.value.value;
      return 0 === i7 ? 0 : true === i7 ? "" : i7 || "";
    }), e5 = w3(function() {
      return !Array.isArray(o4.value) && !t(o4.value);
    }), u6 = E2(function() {
      this.N = F2;
      if (e5.value) {
        var n4 = o4.value;
        if (i6.__v && i6.__v.__e && 3 === i6.__v.__e.nodeType) i6.__v.__e.data = n4;
      }
    }), c5 = n3.__$u.d;
    n3.__$u.d = function() {
      u6();
      c5.call(this);
    };
    return [
      e5,
      o4
    ];
  }, []), u5 = e4[0], c4 = e4[1];
  return u5.value ? c4.peek() : c4.value;
}
g3.displayName = "ReactiveTextNode";
Object.defineProperties(u4.prototype, {
  constructor: {
    configurable: true,
    value: void 0
  },
  type: {
    configurable: true,
    value: g3
  },
  props: {
    configurable: true,
    get: function() {
      return {
        data: this
      };
    }
  },
  __b: {
    configurable: true,
    value: 1
  }
});
y4("__b", function(i5, n3) {
  if ("function" == typeof n3.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  if ("string" == typeof n3.type) {
    var t4, r4 = n3.props;
    for (var o4 in r4) if ("children" !== o4) {
      var f5 = r4[o4];
      if (f5 instanceof u4) {
        if (!t4) n3.__np = t4 = {};
        t4[o4] = f5;
        r4[o4] = f5.peek();
      }
    }
  }
  i5(n3);
});
y4("__r", function(i5, n3) {
  if ("function" == typeof n3.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n3);
  if (n3.type !== k) {
    _3();
    var t4, o4 = n3.__c;
    if (o4) {
      o4.__$f &= -2;
      if (void 0 === (t4 = o4.__$u)) o4.__$u = t4 = function(i6) {
        var n4;
        E2(function() {
          n4 = this;
        });
        n4.c = function() {
          o4.__$f |= 1;
          o4.setState({});
        };
        return n4;
      }();
    }
    p4 = o4;
    _3(t4);
  }
  i5(n3);
});
y4("__e", function(i5, n3, t4, r4) {
  if ("undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  _3();
  p4 = void 0;
  i5(n3, t4, r4);
});
y4("diffed", function(i5, n3) {
  if ("function" == typeof n3.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  _3();
  p4 = void 0;
  var t4;
  if ("string" == typeof n3.type && (t4 = n3.__e)) {
    var r4 = n3.__np, o4 = n3.props;
    if (r4) {
      var f5 = t4.U;
      if (f5) for (var e4 in f5) {
        var u5 = f5[e4];
        if (void 0 !== u5 && !(e4 in r4)) {
          u5.d();
          f5[e4] = void 0;
        }
      }
      else {
        f5 = {};
        t4.U = f5;
      }
      for (var a4 in r4) {
        var c4 = f5[a4], v4 = r4[a4];
        if (void 0 === c4) {
          c4 = b2(t4, a4, v4, o4);
          f5[a4] = c4;
        } else c4.o(v4, o4);
      }
    }
  }
  i5(n3);
});
function b2(i5, n3, t4, r4) {
  var o4 = n3 in i5 && void 0 === i5.ownerSVGElement, f5 = d3(t4);
  return {
    o: function(i6, n4) {
      f5.value = i6;
      r4 = n4;
    },
    d: E2(function() {
      this.N = F2;
      var t5 = f5.value.value;
      if (r4[n3] !== t5) {
        r4[n3] = t5;
        if (o4) i5[n3] = t5;
        else if (t5) i5.setAttribute(n3, t5);
        else i5.removeAttribute(n3);
      }
    })
  };
}
y4("unmount", function(i5, n3) {
  if ("string" == typeof n3.type) {
    var t4 = n3.__e;
    if (t4) {
      var r4 = t4.U;
      if (r4) {
        t4.U = void 0;
        for (var o4 in r4) {
          var f5 = r4[o4];
          if (f5) f5.d();
        }
      }
    }
  } else {
    var e4 = n3.__c;
    if (e4) {
      var u5 = e4.__$u;
      if (u5) {
        e4.__$u = void 0;
        u5.d();
      }
    }
  }
  i5(n3);
});
y4("__h", function(i5, n3, t4, r4) {
  if (r4 < 3 || 9 === r4) n3.__$f |= 2;
  i5(n3, t4, r4);
});
x.prototype.shouldComponentUpdate = function(i5, n3) {
  var t4 = this.__$u, r4 = t4 && void 0 !== t4.s;
  for (var o4 in n3) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var f5 = 2 & this.__$f;
    if (!(r4 || f5 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(r4 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var e4 in i5) if ("__source" !== e4 && i5[e4] !== this.props[e4]) return true;
  for (var u5 in this.props) if (!(u5 in i5)) return true;
  return false;
};
function useSignal(i5, n3) {
  return d2(function() {
    return d3(i5, n3);
  })[0];
}
var q2 = function(i5) {
  queueMicrotask(function() {
    queueMicrotask(i5);
  });
};
function x2() {
  r3(function() {
    var i5;
    while (i5 = m3.shift()) h4.call(i5);
  });
}
function F2() {
  if (1 === m3.push(this)) (l.requestAnimationFrame || q2)(x2);
}

// src/main.tsx
var count = d3(0);
var app = /* @__PURE__ */ u2("div", {
  children: [
    /* @__PURE__ */ u2("p", {
      children: count
    }),
    /* @__PURE__ */ u2("button", {
      type: "button",
      onClick: () => count.value++,
      children: "+"
    }),
    /* @__PURE__ */ u2("button", {
      type: "button",
      onClick: () => count.value--,
      children: "-"
    })
  ]
});
G(app, document.body);
