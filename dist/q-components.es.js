import l, { createContext as Ue, useState as se, useContext as ue, useEffect as Fr, forwardRef as z } from "react";
var ie = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Dr() {
  if (De) return Z;
  De = 1;
  var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(y, d, O) {
    var b, C = {}, k = null, x = null;
    O !== void 0 && (k = "" + O), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (b in d) f.call(d, b) && !p.hasOwnProperty(b) && (C[b] = d[b]);
    if (y && y.defaultProps) for (b in d = y.defaultProps, d) C[b] === void 0 && (C[b] = d[b]);
    return { $$typeof: t, type: y, key: k, ref: x, props: C, _owner: h.current };
  }
  return Z.Fragment = n, Z.jsx = _, Z.jsxs = _, Z;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Mr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), W = Symbol.iterator, q = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[q];
      return typeof r == "function" ? r : null;
    }
    var $ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          o[i - 1] = arguments[i];
        er("error", e, o);
      }
    }
    function er(e, r, o) {
      {
        var i = $.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", o = o.concat([c]));
        var v = o.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var rr = !1, tr = !1, ar = !1, nr = !1, or = !1, de;
    de = Symbol.for("react.module.reference");
    function lr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === p || or || e === h || e === O || e === b || nr || e === x || rr || tr || ar || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === C || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function ir(e, r, o) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? o + "(" + c + ")" : o;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case n:
          return "Portal";
        case p:
          return "Profiler";
        case h:
          return "StrictMode";
        case O:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ve(r) + ".Consumer";
          case _:
            var o = e;
            return ve(o._context) + ".Provider";
          case d:
            return ir(e, e.render, "ForwardRef");
          case C:
            var i = e.displayName || null;
            return i !== null ? i : S(e.type) || "Memo";
          case k: {
            var c = e, v = c._payload, u = c._init;
            try {
              return S(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, M = 0, pe, me, ge, he, be, ye, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function sr() {
      {
        if (M === 0) {
          pe = console.log, me = console.info, ge = console.warn, he = console.error, be = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function ur() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: pe
            }),
            info: A({}, e, {
              value: me
            }),
            warn: A({}, e, {
              value: ge
            }),
            error: A({}, e, {
              value: he
            }),
            group: A({}, e, {
              value: be
            }),
            groupCollapsed: A({}, e, {
              value: ye
            }),
            groupEnd: A({}, e, {
              value: Ee
            })
          });
        }
        M < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = $.ReactCurrentDispatcher, Q;
    function Y(e, r, o) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            Q = i && i[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, H;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new cr();
    }
    function we(e, r) {
      if (!e || ee)
        return "";
      {
        var o = H.get(e);
        if (o !== void 0)
          return o;
      }
      var i;
      ee = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = K.current, K.current = null, sr();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (R) {
              i = R;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (R) {
              i = R;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            i = R;
          }
          e();
        }
      } catch (R) {
        if (R && i && typeof R.stack == "string") {
          for (var s = R.stack.split(`
`), w = i.stack.split(`
`), m = s.length - 1, g = w.length - 1; m >= 1 && g >= 0 && s[m] !== w[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (s[m] !== w[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || s[m] !== w[g]) {
                    var P = `
` + s[m].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, P), P;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ee = !1, K.current = v, ur(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", V = D ? Y(D) : "";
      return typeof e == "function" && H.set(e, V), V;
    }
    function fr(e, r, o) {
      return we(e, !1);
    }
    function dr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, dr(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case O:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return fr(e.render);
          case C:
            return B(e.type, r, o);
          case k: {
            var i = e, c = i._payload, v = i._init;
            try {
              return B(v(c), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, Re = {}, je = $.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, o = B(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(o);
      } else
        je.setExtraStackFrame(null);
    }
    function vr(e, r, o, i, c) {
      {
        var v = Function.call.bind(L);
        for (var u in e)
          if (v(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((i || "React class") + ": " + o + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[u](r, u, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              s = m;
            }
            s && !(s instanceof Error) && (G(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, u, typeof s), G(null)), s instanceof Error && !(s.message in Re) && (Re[s.message] = !0, G(c), E("Failed %s type: %s", o, s.message), G(null));
          }
      }
    }
    var pr = Array.isArray;
    function re(e) {
      return pr(e);
    }
    function mr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function gr(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (gr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Oe(e);
    }
    var I = $.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Te, te;
    te = {};
    function br(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var o = S(I.current.type);
        te[o] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), te[o] = !0);
      }
    }
    function _r(e, r) {
      {
        var o = function() {
          Pe || (Pe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function wr(e, r) {
      {
        var o = function() {
          Te || (Te = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Rr = function(e, r, o, i, c, v, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function jr(e, r, o, i, c) {
      {
        var v, u = {}, s = null, w = null;
        o !== void 0 && (Ce(o), s = "" + o), yr(r) && (Ce(r.key), s = "" + r.key), br(r) && (w = r.ref, Er(r, c));
        for (v in r)
          L.call(r, v) && !hr.hasOwnProperty(v) && (u[v] = r[v]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (v in m)
            u[v] === void 0 && (u[v] = m[v]);
        }
        if (s || w) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && _r(u, g), w && wr(u, g);
        }
        return Rr(e, s, w, c, i, I.current, u);
      }
    }
    var ae = $.ReactCurrentOwner, Se = $.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, o = B(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(o);
      } else
        Se.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function ke() {
      {
        if (ae.current) {
          var e = S(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Or(e) {
      return "";
    }
    var xe = {};
    function Cr(e) {
      {
        var r = ke();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Cr(r);
        if (xe[o])
          return;
        xe[o] = !0;
        var i = "";
        e && e._owner && e._owner !== ae.current && (i = " It was passed a child from " + S(e._owner.type) + "."), F(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), F(null);
      }
    }
    function Ve(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            oe(i) && Ae(i, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = X(e);
          if (typeof c == "function" && c !== e.entries)
            for (var v = c.call(e), u; !(u = v.next()).done; )
              oe(u.value) && Ae(u.value, r);
        }
      }
    }
    function Pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          o = r.propTypes;
        else
          return;
        if (o) {
          var i = S(r);
          vr(o, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var c = S(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var i = r[o];
          if (i !== "children" && i !== "key") {
            F(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var $e = {};
    function Fe(e, r, o, i, c, v) {
      {
        var u = lr(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Or();
          w ? s += w : s += ke();
          var m;
          e === null ? m = "null" : re(e) ? m = "array" : e !== void 0 && e.$$typeof === t ? (m = "<" + (S(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, s);
        }
        var g = jr(e, r, o, c, v);
        if (g == null)
          return g;
        if (u) {
          var P = r.children;
          if (P !== void 0)
            if (i)
              if (re(P)) {
                for (var D = 0; D < P.length; D++)
                  Ve(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(P, e);
        }
        if (L.call(r, "key")) {
          var V = S(e), R = Object.keys(r).filter(function($r) {
            return $r !== "key";
          }), le = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[V + le]) {
            var Vr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, V, Vr, V), $e[V + le] = !0;
          }
        }
        return e === f ? Tr(g) : Pr(g), g;
      }
    }
    function Sr(e, r, o) {
      return Fe(e, r, o, !0);
    }
    function kr(e, r, o) {
      return Fe(e, r, o, !1);
    }
    var xr = kr, Ar = Sr;
    N.Fragment = f, N.jsx = xr, N.jsxs = Ar;
  }()), N;
}
process.env.NODE_ENV === "production" ? ie.exports = Dr() : ie.exports = Mr();
var j = ie.exports;
const Lr = "_table_j19ik_1", Ir = "_tableHead_j19ik_22", Zr = "_tableBody_j19ik_23", Nr = "_row_j19ik_24", Wr = "_secondaryRow_j19ik_25", Yr = "_headerRow_j19ik_26", Hr = "_secondaryHeader_j19ik_27", Br = "_rowCell_j19ik_31", Gr = "_headerCell_j19ik_32", Ur = "_rowSettings_j19ik_57", Jr = "_rowGroupClosed_j19ik_66", zr = "_rowGroup_j19ik_66", qr = "_rowGroupTitle_j19ik_78", T = {
  table: Lr,
  tableHead: Ir,
  tableBody: Zr,
  row: Nr,
  secondaryRow: Wr,
  headerRow: Yr,
  secondaryHeader: Hr,
  rowCell: Br,
  headerCell: Gr,
  rowSettings: Ur,
  rowGroupClosed: Jr,
  rowGroup: zr,
  rowGroupTitle: qr
};
var U = /* @__PURE__ */ ((a) => (a.ASC = "asc", a.DESC = "desc", a))(U || {});
const ce = Ue(
  {}
), jt = ({
  children: a,
  style: t,
  size: n,
  defaultKey: f = "name"
}) => {
  const [h, p] = se({
    key: f,
    direction: "asc"
    /* ASC */
  }), _ = () => {
    p((d) => ({
      ...d,
      direction: d.direction === "asc" ? "desc" : "asc"
      /* ASC */
    }));
  }, y = (d) => {
    p((O) => ({
      key: d,
      direction: "desc"
      /* DESC */
    }));
  };
  return /* @__PURE__ */ j.jsx(ce.Provider, { value: { sort: h, setSort: p, setSortKey: y, toggleSort: _ }, children: /* @__PURE__ */ j.jsx(
    "table",
    {
      className: T.table,
      style: t || {
        gridTemplateColumns: n == null ? void 0 : n.map((d) => `minmax(${d.min}, ${d.max})`).join(" ")
      },
      children: a
    }
  ) });
}, Ot = ({
  children: a,
  propKey: t
}) => {
  const { sort: n } = ue(ce), [f, h] = se([]);
  return Fr(() => {
    if (!a || !Array.isArray(a) || !t || !n || !n.key)
      return;
    const p = a.sort((_, y) => n.direction === U.ASC ? _.props[t][n.key] > y.props[t][n.key] ? 1 : -1 : _.props[t][n.key] < y.props[t][n.key] ? 1 : -1);
    h([...p]);
  }, [n, a]), !a || !Array.isArray(a) || !t ? /* @__PURE__ */ j.jsx("tbody", { className: T.tableBody, children: a }) : /* @__PURE__ */ j.jsx("tbody", { className: T.tableBody, children: f });
}, Ct = ({ children: a, handleClick: t, header: n, secondary: f }) => {
  const h = () => n && !f ? T.headerRow : n && f ? T.secondaryHeader : f ? T.secondaryRow : T.row;
  return n ? /* @__PURE__ */ j.jsx("thead", { className: T.tableHead, onClick: t, children: /* @__PURE__ */ j.jsx("tr", { className: h(), children: a }) }) : /* @__PURE__ */ j.jsx("tr", { className: h(), onClick: t, children: a });
}, Pt = ({ children: a, className: t, centered: n }) => /* @__PURE__ */ j.jsx(
  "td",
  {
    className: `${T.rowCell} ${t || ""} ${n ? "centered" : ""}`,
    children: a
  }
), Tt = ({ children: a, isOpen: t }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: `${T.rowGroup} ${t ? "" : T.rowGroupClosed}`,
    children: a
  }
), Xr = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M200,144l-72,72L56,144Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z" }))
  ]
]), Kr = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M200,112H56l72-72Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z" }))
  ]
]), Qr = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M120.49,167.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L68,179V48a12,12,0,0,1,24,0V179l11.51-11.52A12,12,0,0,1,120.49,167.51Zm96-96-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L164,77V208a12,12,0,0,0,24,0V77l11.51,11.52a12,12,0,0,0,17-17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M176,48V208H80V48Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8,8,0,0,0,5.66-13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M116.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L74,193.51V48a6,6,0,0,1,12,0V193.51l21.76-21.75A6,6,0,0,1,116.24,171.76Zm96-96-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L170,62.49V208a6,6,0,0,0,12,0V62.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("path", { d: "M114.83,173.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L76,198.34V48a4,4,0,0,1,8,0V198.34l25.17-25.17A4,4,0,0,1,114.83,173.17Zm96-96-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L172,57.66V208a4,4,0,0,0,8,0V57.66l25.17,25.17a4,4,0,1,0,5.66-5.66Z" }))
  ]
]), et = Ue({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
});
var rt = Object.defineProperty, J = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, ze = Object.prototype.propertyIsEnumerable, Le = (a, t, n) => t in a ? rt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, Ie = (a, t) => {
  for (var n in t || (t = {}))
    Je.call(t, n) && Le(a, n, t[n]);
  if (J)
    for (var n of J(t))
      ze.call(t, n) && Le(a, n, t[n]);
  return a;
}, Ze = (a, t) => {
  var n = {};
  for (var f in a)
    Je.call(a, f) && t.indexOf(f) < 0 && (n[f] = a[f]);
  if (a != null && J)
    for (var f of J(a))
      t.indexOf(f) < 0 && ze.call(a, f) && (n[f] = a[f]);
  return n;
};
const qe = z((a, t) => {
  const n = a, {
    alt: f,
    color: h,
    size: p,
    weight: _,
    mirrored: y,
    children: d,
    weights: O
  } = n, b = Ze(n, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), C = ue(et), {
    color: k = "currentColor",
    size: x,
    weight: W = "regular",
    mirrored: q = !1
  } = C, X = Ze(C, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ l.createElement(
    "svg",
    Ie(Ie({
      ref: t,
      xmlns: "http://www.w3.org/2000/svg",
      width: p ?? x,
      height: p ?? x,
      fill: h ?? k,
      viewBox: "0 0 256 256",
      transform: y || q ? "scale(-1, 1)" : void 0
    }, X), b),
    !!f && /* @__PURE__ */ l.createElement("title", null, f),
    d,
    O.get(_ ?? W)
  );
});
qe.displayName = "IconBase";
const fe = qe;
var tt = Object.defineProperty, at = Object.defineProperties, nt = Object.getOwnPropertyDescriptors, Ne = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, We = (a, t, n) => t in a ? tt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, it = (a, t) => {
  for (var n in t || (t = {}))
    ot.call(t, n) && We(a, n, t[n]);
  if (Ne)
    for (var n of Ne(t))
      lt.call(t, n) && We(a, n, t[n]);
  return a;
}, st = (a, t) => at(a, nt(t));
const Xe = z((a, t) => /* @__PURE__ */ l.createElement(fe, st(it({ ref: t }, a), { weights: Xr })));
Xe.displayName = "ArrowDown";
var ut = Object.defineProperty, ct = Object.defineProperties, ft = Object.getOwnPropertyDescriptors, Ye = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, He = (a, t, n) => t in a ? ut(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, pt = (a, t) => {
  for (var n in t || (t = {}))
    dt.call(t, n) && He(a, n, t[n]);
  if (Ye)
    for (var n of Ye(t))
      vt.call(t, n) && He(a, n, t[n]);
  return a;
}, mt = (a, t) => ct(a, ft(t));
const Ke = z((a, t) => /* @__PURE__ */ l.createElement(fe, mt(pt({ ref: t }, a), { weights: Kr })));
Ke.displayName = "ArrowUp";
var gt = Object.defineProperty, ht = Object.defineProperties, bt = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable, Ge = (a, t, n) => t in a ? gt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, _t = (a, t) => {
  for (var n in t || (t = {}))
    yt.call(t, n) && Ge(a, n, t[n]);
  if (Be)
    for (var n of Be(t))
      Et.call(t, n) && Ge(a, n, t[n]);
  return a;
}, wt = (a, t) => ht(a, bt(t));
const Qe = z((a, t) => /* @__PURE__ */ l.createElement(fe, wt(_t({ ref: t }, a), { weights: Qr })));
Qe.displayName = "ArrowsDownUp";
const St = ({
  children: a,
  className: t,
  sortKey: n,
  centered: f,
  noSort: h
}) => {
  const { sort: p, setSortKey: _, toggleSort: y } = ue(ce), [d, O] = se(!1), b = () => {
    h || (p.key !== n && _(n), p.key === n && y());
  };
  return /* @__PURE__ */ j.jsxs(
    "th",
    {
      className: `${T.headerCell} ${t || ""} ${f ? "centered" : ""}`,
      onMouseOver: () => O(!0),
      onMouseLeave: () => O(!1),
      onClick: () => b(),
      children: [
        a,
        !h && d && p.key !== n && /* @__PURE__ */ j.jsx(Qe, { size: 16, weight: "light" }),
        !h && p.key === n && p.direction === U.DESC && /* @__PURE__ */ j.jsx(Ke, { size: 16, weight: "light" }),
        !h && p.key === n && p.direction === U.ASC && /* @__PURE__ */ j.jsx(Xe, { size: 16, weight: "light" })
      ]
    }
  );
};
export {
  St as HeaderCell,
  Ct as Row,
  Pt as RowCell,
  Tt as RowGroup,
  jt as Table,
  Ot as TableBody
};
//# sourceMappingURL=q-components.es.js.map
