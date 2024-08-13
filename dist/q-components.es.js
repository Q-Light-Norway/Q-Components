import l, { createContext as Ue, useState as se, useContext as ce, useEffect as Fr, forwardRef as z } from "react";
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
  var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(w, p, m) {
    var b, E = {}, P = null, x = null;
    m !== void 0 && (P = "" + m), p.key !== void 0 && (P = "" + p.key), p.ref !== void 0 && (x = p.ref);
    for (b in p) s.call(p, b) && !y.hasOwnProperty(b) && (E[b] = p[b]);
    if (w && w.defaultProps) for (b in p = w.defaultProps, p) E[b] === void 0 && (E[b] = p[b]);
    return { $$typeof: t, type: w, key: P, ref: x, props: E, _owner: C.current };
  }
  return Z.Fragment = n, Z.jsx = v, Z.jsxs = v, Z;
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
    var a = l, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), w = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), W = Symbol.iterator, q = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[q];
      return typeof r == "function" ? r : null;
    }
    var $ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
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
        var d = o.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var rr = !1, tr = !1, ar = !1, nr = !1, or = !1, de;
    de = Symbol.for("react.module.reference");
    function lr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === y || or || e === C || e === m || e === b || nr || e === x || rr || tr || ar || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === E || e.$$typeof === v || e.$$typeof === w || e.$$typeof === p || // This needs to include all possible module reference object
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
    function pe(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case y:
          return "Profiler";
        case C:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return pe(r) + ".Consumer";
          case v:
            var o = e;
            return pe(o._context) + ".Provider";
          case p:
            return ir(e, e.render, "ForwardRef");
          case E:
            var i = e.displayName || null;
            return i !== null ? i : k(e.type) || "Memo";
          case P: {
            var f = e, d = f._payload, u = f._init;
            try {
              return k(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, M = 0, ve, me, be, ge, he, ye, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function sr() {
      {
        if (M === 0) {
          ve = console.log, me = console.info, be = console.warn, ge = console.error, he = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
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
    function cr() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, e, {
              value: ve
            }),
            info: V({}, e, {
              value: me
            }),
            warn: V({}, e, {
              value: be
            }),
            error: V({}, e, {
              value: ge
            }),
            group: V({}, e, {
              value: he
            }),
            groupCollapsed: V({}, e, {
              value: ye
            }),
            groupEnd: V({}, e, {
              value: Ee
            })
          });
        }
        M < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      H = new ur();
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
      var d;
      d = K.current, K.current = null, sr();
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
            } catch (O) {
              i = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              i = O;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            i = O;
          }
          e();
        }
      } catch (O) {
        if (O && i && typeof O.stack == "string") {
          for (var c = O.stack.split(`
`), R = i.stack.split(`
`), g = c.length - 1, h = R.length - 1; g >= 1 && h >= 0 && c[g] !== R[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (c[g] !== R[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || c[g] !== R[h]) {
                    var S = `
` + c[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ee = !1, K.current = d, cr(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", A = D ? Y(D) : "";
      return typeof e == "function" && H.set(e, A), A;
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
        case m:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return fr(e.render);
          case E:
            return B(e.type, r, o);
          case P: {
            var i = e, f = i._payload, d = i._init;
            try {
              return B(d(f), r, o);
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
    function pr(e, r, o, i, f) {
      {
        var d = Function.call.bind(L);
        for (var u in e)
          if (d(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((i || "React class") + ": " + o + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[u](r, u, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              c = g;
            }
            c && !(c instanceof Error) && (G(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, u, typeof c), G(null)), c instanceof Error && !(c.message in Re) && (Re[c.message] = !0, G(f), _("Failed %s type: %s", o, c.message), G(null));
          }
      }
    }
    var vr = Array.isArray;
    function re(e) {
      return vr(e);
    }
    function mr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function br(e) {
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
      if (br(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), Oe(e);
    }
    var I = $.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Te, te;
    te = {};
    function hr(e) {
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
        te[o] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(I.current.type), e.ref), te[o] = !0);
      }
    }
    function _r(e, r) {
      {
        var o = function() {
          Se || (Se = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Te || (Te = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Rr = function(e, r, o, i, f, d, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function jr(e, r, o, i, f) {
      {
        var d, u = {}, c = null, R = null;
        o !== void 0 && (Ce(o), c = "" + o), yr(r) && (Ce(r.key), c = "" + r.key), hr(r) && (R = r.ref, Er(r, f));
        for (d in r)
          L.call(r, d) && !gr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            u[d] === void 0 && (u[d] = g[d]);
        }
        if (c || R) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && _r(u, h), R && wr(u, h);
        }
        return Rr(e, c, R, f, i, I.current, u);
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
    function Ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Cr(r);
        if (xe[o])
          return;
        xe[o] = !0;
        var i = "";
        e && e._owner && e._owner !== ae.current && (i = " It was passed a child from " + k(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), F(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            oe(i) && Ve(i, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = X(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              oe(u.value) && Ve(u.value, r);
        }
      }
    }
    function Sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          o = r.propTypes;
        else
          return;
        if (o) {
          var i = k(r);
          pr(o, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var f = k(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var i = r[o];
          if (i !== "children" && i !== "key") {
            F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var $e = {};
    function Fe(e, r, o, i, f, d) {
      {
        var u = lr(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Or();
          R ? c += R : c += ke();
          var g;
          e === null ? g = "null" : re(e) ? g = "array" : e !== void 0 && e.$$typeof === t ? (g = "<" + (k(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, c);
        }
        var h = jr(e, r, o, f, d);
        if (h == null)
          return h;
        if (u) {
          var S = r.children;
          if (S !== void 0)
            if (i)
              if (re(S)) {
                for (var D = 0; D < S.length; D++)
                  Ae(S[D], e);
                Object.freeze && Object.freeze(S);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(S, e);
        }
        if (L.call(r, "key")) {
          var A = k(e), O = Object.keys(r).filter(function($r) {
            return $r !== "key";
          }), le = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[A + le]) {
            var Ar = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, A, Ar, A), $e[A + le] = !0;
          }
        }
        return e === s ? Tr(h) : Sr(h), h;
      }
    }
    function Pr(e, r, o) {
      return Fe(e, r, o, !0);
    }
    function kr(e, r, o) {
      return Fe(e, r, o, !1);
    }
    var xr = kr, Vr = Pr;
    N.Fragment = s, N.jsx = xr, N.jsxs = Vr;
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
const ue = Ue(
  {}
), jt = ({
  children: a,
  style: t,
  size: n,
  defaultKey: s = "name",
  ...C
}) => {
  const [y, v] = se({
    key: s,
    direction: "asc"
    /* ASC */
  }), w = () => {
    v((m) => ({
      ...m,
      direction: m.direction === "asc" ? "desc" : "asc"
      /* ASC */
    }));
  }, p = (m) => {
    v((b) => ({
      key: m,
      direction: "desc"
      /* DESC */
    }));
  };
  return /* @__PURE__ */ j.jsx(ue.Provider, { value: { sort: y, setSort: v, setSortKey: p, toggleSort: w }, children: /* @__PURE__ */ j.jsx(
    "table",
    {
      className: T.table,
      style: t || {
        gridTemplateColumns: n == null ? void 0 : n.map((m) => `minmax(${m.min}, ${m.max})`).join(" ")
      },
      ...C,
      children: a
    }
  ) });
}, Ot = ({ children: a, ...t }) => {
  const { sort: n } = ce(ue), [s, C] = se([]);
  return Fr(() => {
    if (!a || !Array.isArray(a) || !n || !n.key) return;
    const y = [...a].sort((v, w) => {
      if (!n || !n.key)
        return console.error("Sort key not defined"), 0;
      const p = v, m = w;
      if (!p || !m)
        return console.error("Sortable element not found"), 0;
      if (!p.props || !m.props)
        return console.error("Sortable props not found"), 0;
      if (!p.props.sortObject || !m.props.sortObject)
        return console.error("Sort object not found"), 0;
      const b = p.props.sortObject[n.key], E = m.props.sortObject[n.key];
      return n.direction === U.ASC ? b > E ? 1 : -1 : b < E ? 1 : -1;
    });
    C(y);
  }, [n, a]), !a || !Array.isArray(a) ? /* @__PURE__ */ j.jsx("tbody", { className: T.tableBody, ...t, children: a }) : /* @__PURE__ */ j.jsx("tbody", { className: T.tableBody, ...t, children: s });
}, Ct = ({
  children: a,
  handleClick: t,
  header: n,
  secondary: s,
  sortObject: C,
  ...y
}) => {
  const v = () => n && !s ? T.headerRow : n && s ? T.secondaryHeader : s ? T.secondaryRow : T.row;
  return n ? /* @__PURE__ */ j.jsx("thead", { className: T.tableHead, onClick: t, ...y, children: /* @__PURE__ */ j.jsx("tr", { className: v(), children: a }) }) : /* @__PURE__ */ j.jsx("tr", { className: v(), onClick: t, ...y, children: a });
}, St = ({
  children: a,
  className: t,
  centered: n,
  ...s
}) => /* @__PURE__ */ j.jsx(
  "td",
  {
    className: `${T.rowCell} ${t || ""} ${n ? "centered" : ""}`,
    ...s,
    children: a
  }
), Tt = ({ children: a, isOpen: t, ...n }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: `${T.rowGroup} ${t ? "" : T.rowGroupClosed}`,
    ...n,
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
  for (var s in a)
    Je.call(a, s) && t.indexOf(s) < 0 && (n[s] = a[s]);
  if (a != null && J)
    for (var s of J(a))
      t.indexOf(s) < 0 && ze.call(a, s) && (n[s] = a[s]);
  return n;
};
const qe = z((a, t) => {
  const n = a, {
    alt: s,
    color: C,
    size: y,
    weight: v,
    mirrored: w,
    children: p,
    weights: m
  } = n, b = Ze(n, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), E = ce(et), {
    color: P = "currentColor",
    size: x,
    weight: W = "regular",
    mirrored: q = !1
  } = E, X = Ze(E, [
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
      width: y ?? x,
      height: y ?? x,
      fill: C ?? P,
      viewBox: "0 0 256 256",
      transform: w || q ? "scale(-1, 1)" : void 0
    }, X), b),
    !!s && /* @__PURE__ */ l.createElement("title", null, s),
    p,
    m.get(v ?? W)
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
var ct = Object.defineProperty, ut = Object.defineProperties, ft = Object.getOwnPropertyDescriptors, Ye = Object.getOwnPropertySymbols, dt = Object.prototype.hasOwnProperty, pt = Object.prototype.propertyIsEnumerable, He = (a, t, n) => t in a ? ct(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, vt = (a, t) => {
  for (var n in t || (t = {}))
    dt.call(t, n) && He(a, n, t[n]);
  if (Ye)
    for (var n of Ye(t))
      pt.call(t, n) && He(a, n, t[n]);
  return a;
}, mt = (a, t) => ut(a, ft(t));
const Ke = z((a, t) => /* @__PURE__ */ l.createElement(fe, mt(vt({ ref: t }, a), { weights: Kr })));
Ke.displayName = "ArrowUp";
var bt = Object.defineProperty, gt = Object.defineProperties, ht = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable, Ge = (a, t, n) => t in a ? bt(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n, _t = (a, t) => {
  for (var n in t || (t = {}))
    yt.call(t, n) && Ge(a, n, t[n]);
  if (Be)
    for (var n of Be(t))
      Et.call(t, n) && Ge(a, n, t[n]);
  return a;
}, wt = (a, t) => gt(a, ht(t));
const Qe = z((a, t) => /* @__PURE__ */ l.createElement(fe, wt(_t({ ref: t }, a), { weights: Qr })));
Qe.displayName = "ArrowsDownUp";
const Pt = ({
  children: a,
  className: t,
  overrideClassName: n,
  sortKey: s,
  centered: C,
  ...y
}) => {
  const { sort: v, setSortKey: w, toggleSort: p } = ce(ue), [m, b] = se(!1), E = () => {
    v.key !== s && w(s), v.key === s && p();
  }, P = n || t || T.headerCell;
  return /* @__PURE__ */ j.jsxs(
    "th",
    {
      className: P,
      onMouseOver: () => b(!0),
      onMouseLeave: () => b(!1),
      onClick: () => E(),
      ...y,
      children: [
        a,
        s && /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
          m && v.key !== s && /* @__PURE__ */ j.jsx(Qe, { size: 16, weight: "light" }),
          v.key === s && v.direction === U.DESC && /* @__PURE__ */ j.jsx(Ke, { size: 16, weight: "light" }),
          v.key === s && v.direction === U.ASC && /* @__PURE__ */ j.jsx(Xe, { size: 16, weight: "light" })
        ] })
      ]
    }
  );
};
export {
  Pt as HeaderCell,
  Ct as Row,
  St as RowCell,
  Tt as RowGroup,
  jt as Table,
  Ot as TableBody
};
//# sourceMappingURL=q-components.es.js.map
