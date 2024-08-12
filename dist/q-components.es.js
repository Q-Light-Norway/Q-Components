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
  var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(p, d, S) {
    var y, w = {}, P = null, x = null;
    S !== void 0 && (P = "" + S), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (y in d) u.call(d, y) && !g.hasOwnProperty(y) && (w[y] = d[y]);
    if (p && p.defaultProps) for (y in d = p.defaultProps, d) w[y] === void 0 && (w[y] = d[y]);
    return { $$typeof: t, type: p, key: P, ref: x, props: w, _owner: _.current };
  }
  return Z.Fragment = n, Z.jsx = b, Z.jsxs = b, Z;
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
    var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), W = Symbol.iterator, q = "@@iterator";
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
        var i = $.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (r += "%s", o = o.concat([f]));
        var v = o.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var rr = !1, tr = !1, ar = !1, nr = !1, or = !1, de;
    de = Symbol.for("react.module.reference");
    function lr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === g || or || e === _ || e === S || e === y || nr || e === x || rr || tr || ar || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === w || e.$$typeof === b || e.$$typeof === p || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function ir(e, r, o) {
      var i = e.displayName;
      if (i)
        return i;
      var f = r.displayName || r.name || "";
      return f !== "" ? o + "(" + f + ")" : o;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case n:
          return "Portal";
        case g:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return ve(r) + ".Consumer";
          case b:
            var o = e;
            return ve(o._context) + ".Provider";
          case d:
            return ir(e, e.render, "ForwardRef");
          case w:
            var i = e.displayName || null;
            return i !== null ? i : k(e.type) || "Memo";
          case P: {
            var f = e, v = f._payload, c = f._init;
            try {
              return k(c(v));
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
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
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
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = K.current, K.current = null, sr();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (j) {
              i = j;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var s = j.stack.split(`
`), R = i.stack.split(`
`), m = s.length - 1, h = R.length - 1; m >= 1 && h >= 0 && s[m] !== R[h]; )
            h--;
          for (; m >= 1 && h >= 0; m--, h--)
            if (s[m] !== R[h]) {
              if (m !== 1 || h !== 1)
                do
                  if (m--, h--, h < 0 || s[m] !== R[h]) {
                    var C = `
` + s[m].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (m >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ee = !1, K.current = v, ur(), Error.prepareStackTrace = f;
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
        case S:
          return Y("Suspense");
        case y:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return fr(e.render);
          case w:
            return B(e.type, r, o);
          case P: {
            var i = e, f = i._payload, v = i._init;
            try {
              return B(v(f), r, o);
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
    function vr(e, r, o, i, f) {
      {
        var v = Function.call.bind(L);
        for (var c in e)
          if (v(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var R = Error((i || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[c](r, c, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              s = m;
            }
            s && !(s instanceof Error) && (G(f), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, c, typeof s), G(null)), s instanceof Error && !(s.message in Re) && (Re[s.message] = !0, G(f), E("Failed %s type: %s", o, s.message), G(null));
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
    }, Te, Se, te;
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
        var o = k(I.current.type);
        te[o] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(I.current.type), e.ref), te[o] = !0);
      }
    }
    function _r(e, r) {
      {
        var o = function() {
          Te || (Te = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Rr = function(e, r, o, i, f, v, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: c,
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
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function jr(e, r, o, i, f) {
      {
        var v, c = {}, s = null, R = null;
        o !== void 0 && (Ce(o), s = "" + o), yr(r) && (Ce(r.key), s = "" + r.key), br(r) && (R = r.ref, Er(r, f));
        for (v in r)
          L.call(r, v) && !hr.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (v in m)
            c[v] === void 0 && (c[v] = m[v]);
        }
        if (s || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && _r(c, h), R && wr(c, h);
        }
        return Rr(e, s, R, f, i, I.current, c);
      }
    }
    var ae = $.ReactCurrentOwner, Pe = $.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, o = B(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function ke() {
      {
        if (ae.current) {
          var e = k(ae.current.type);
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
        e && e._owner && e._owner !== ae.current && (i = " It was passed a child from " + k(e._owner.type) + "."), F(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), F(null);
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
          var f = X(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), c; !(c = v.next()).done; )
              oe(c.value) && Ae(c.value, r);
        }
      }
    }
    function Tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          o = r.propTypes;
        else
          return;
        if (o) {
          var i = k(r);
          vr(o, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var f = k(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(e) {
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
    function Fe(e, r, o, i, f, v) {
      {
        var c = lr(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Or();
          R ? s += R : s += ke();
          var m;
          e === null ? m = "null" : re(e) ? m = "array" : e !== void 0 && e.$$typeof === t ? (m = "<" + (k(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, s);
        }
        var h = jr(e, r, o, f, v);
        if (h == null)
          return h;
        if (c) {
          var C = r.children;
          if (C !== void 0)
            if (i)
              if (re(C)) {
                for (var D = 0; D < C.length; D++)
                  Ve(C[D], e);
                Object.freeze && Object.freeze(C);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(C, e);
        }
        if (L.call(r, "key")) {
          var V = k(e), j = Object.keys(r).filter(function($r) {
            return $r !== "key";
          }), le = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[V + le]) {
            var Vr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, V, Vr, V), $e[V + le] = !0;
          }
        }
        return e === u ? Sr(h) : Tr(h), h;
      }
    }
    function Pr(e, r, o) {
      return Fe(e, r, o, !0);
    }
    function kr(e, r, o) {
      return Fe(e, r, o, !1);
    }
    var xr = kr, Ar = Pr;
    N.Fragment = u, N.jsx = xr, N.jsxs = Ar;
  }()), N;
}
process.env.NODE_ENV === "production" ? ie.exports = Dr() : ie.exports = Mr();
var O = ie.exports;
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
  defaultKey: u = "name"
}) => {
  const [_, g] = se({
    key: u,
    direction: "asc"
    /* ASC */
  }), b = () => {
    g((d) => ({
      ...d,
      direction: d.direction === "asc" ? "desc" : "asc"
      /* ASC */
    }));
  }, p = (d) => {
    g((S) => ({
      key: d,
      direction: "desc"
      /* DESC */
    }));
  };
  return /* @__PURE__ */ O.jsx(ce.Provider, { value: { sort: _, setSort: g, setSortKey: p, toggleSort: b }, children: /* @__PURE__ */ O.jsx(
    "table",
    {
      className: T.table,
      style: t || {
        gridTemplateColumns: n == null ? void 0 : n.map((d) => `minmax(${d.min}, ${d.max})`).join(" ")
      },
      children: a
    }
  ) });
}, Ot = ({ children: a, propKey: t }) => {
  const { sort: n } = ue(ce), [u, _] = se([]);
  return Fr(() => {
    if (!a || !Array.isArray(a) || !t || !n || !n.key)
      return;
    const g = a.sort((b, p) => n.direction === U.ASC ? b.props[t][n.key] > p.props[t][n.key] ? 1 : -1 : b.props[t][n.key] < p.props[t][n.key] ? 1 : -1);
    _([...g]);
  }, [n, a]), !a || !Array.isArray(a) || !t ? /* @__PURE__ */ O.jsx("tbody", { className: T.tableBody, children: a }) : /* @__PURE__ */ O.jsx("tbody", { className: T.tableBody, children: u });
}, Ct = ({ children: a, handleClick: t, header: n, secondary: u }) => {
  const _ = () => n && !u ? T.headerRow : n && u ? T.secondaryHeader : u ? T.secondaryRow : T.row;
  return n ? /* @__PURE__ */ O.jsx("thead", { className: T.tableHead, onClick: t, children: /* @__PURE__ */ O.jsx("tr", { className: _(), children: a }) }) : /* @__PURE__ */ O.jsx("tr", { className: _(), onClick: t, children: a });
}, Tt = ({ children: a, className: t, centered: n }) => /* @__PURE__ */ O.jsx(
  "td",
  {
    className: `${T.rowCell} ${t || ""} ${n ? "centered" : ""}`,
    children: a
  }
), St = ({ children: a, isOpen: t }) => /* @__PURE__ */ O.jsx(
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
  for (var u in a)
    Je.call(a, u) && t.indexOf(u) < 0 && (n[u] = a[u]);
  if (a != null && J)
    for (var u of J(a))
      t.indexOf(u) < 0 && ze.call(a, u) && (n[u] = a[u]);
  return n;
};
const qe = z((a, t) => {
  const n = a, {
    alt: u,
    color: _,
    size: g,
    weight: b,
    mirrored: p,
    children: d,
    weights: S
  } = n, y = Ze(n, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), w = ue(et), {
    color: P = "currentColor",
    size: x,
    weight: W = "regular",
    mirrored: q = !1
  } = w, X = Ze(w, [
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
      width: g ?? x,
      height: g ?? x,
      fill: _ ?? P,
      viewBox: "0 0 256 256",
      transform: p || q ? "scale(-1, 1)" : void 0
    }, X), y),
    !!u && /* @__PURE__ */ l.createElement("title", null, u),
    d,
    S.get(b ?? W)
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
const Pt = ({
  children: a,
  className: t,
  overrideClassName: n,
  sortKey: u,
  centered: _,
  noSort: g,
  ...b
}) => {
  const { sort: p, setSortKey: d, toggleSort: S } = ue(ce), [y, w] = se(!1), P = () => {
    g || (p.key !== u && d(u), p.key === u && S());
  }, x = n || t || T.headerCell;
  return /* @__PURE__ */ O.jsxs(
    "th",
    {
      className: x,
      onMouseOver: () => w(!0),
      onMouseLeave: () => w(!1),
      onClick: () => P(),
      children: [
        a,
        !g && y && p.key !== u && /* @__PURE__ */ O.jsx(Qe, { size: 16, weight: "light", ...b }),
        !g && p.key === u && p.direction === U.DESC && /* @__PURE__ */ O.jsx(Ke, { size: 16, weight: "light", ...b }),
        !g && p.key === u && p.direction === U.ASC && /* @__PURE__ */ O.jsx(Xe, { size: 16, weight: "light", ...b })
      ]
    }
  );
};
export {
  Pt as HeaderCell,
  Ct as Row,
  Tt as RowCell,
  St as RowGroup,
  jt as Table,
  Ot as TableBody
};
//# sourceMappingURL=q-components.es.js.map
