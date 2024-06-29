function Kv(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ym = { exports: {} },
  ia = {},
  vm = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
  qv = Symbol.for("react.portal"),
  Zv = Symbol.for("react.fragment"),
  Jv = Symbol.for("react.strict_mode"),
  e1 = Symbol.for("react.profiler"),
  t1 = Symbol.for("react.provider"),
  r1 = Symbol.for("react.context"),
  n1 = Symbol.for("react.forward_ref"),
  o1 = Symbol.for("react.suspense"),
  i1 = Symbol.for("react.memo"),
  s1 = Symbol.for("react.lazy"),
  uf = Symbol.iterator;
function a1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uf && e[uf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bm = Object.assign,
  Sm = {};
function Hn(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sm),
    (this.updater = r || xm);
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function km() {}
km.prototype = Hn.prototype;
function Cc(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sm),
    (this.updater = r || xm);
}
var _c = (Cc.prototype = new km());
_c.constructor = Cc;
bm(_c, Hn.prototype);
_c.isPureReactComponent = !0;
var cf = Array.isArray,
  wm = Object.prototype.hasOwnProperty,
  Pc = { current: null },
  Cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function _m(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      wm.call(t, n) && !Cm.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: li,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Pc.current,
  };
}
function l1(e, t) {
  return {
    $$typeof: li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ec(e) {
  return typeof e == "object" && e !== null && e.$$typeof === li;
}
function u1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var df = /\/+/g;
function il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? u1("" + e.key)
    : t.toString(36);
}
function Ji(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case li:
          case qv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = n === "" ? "." + il(s, 0) : n),
      cf(o)
        ? ((r = ""),
          e != null && (r = e.replace(df, "$&/") + "/"),
          Ji(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ec(o) &&
            (o = l1(
              o,
              r +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(df, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), cf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = n + il(i, a);
      s += Ji(i, t, r, l, o);
    }
  else if (((l = a1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + il(i, a++)), (s += Ji(i, t, r, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function _i(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Ji(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function c1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  es = { transition: null },
  d1 = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: es,
    ReactCurrentOwner: Pc,
  };
function Pm() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: _i,
  forEach: function (e, t, r) {
    _i(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _i(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _i(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ec(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
N.Component = Hn;
N.Fragment = Zv;
N.Profiler = e1;
N.PureComponent = Cc;
N.StrictMode = Jv;
N.Suspense = o1;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d1;
N.act = Pm;
N.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = bm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Pc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      wm.call(t, l) &&
        !Cm.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: li, type: e.type, key: o, ref: i, props: n, _owner: s };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: r1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t1, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = _m;
N.createFactory = function (e) {
  var t = _m.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: n1, render: e };
};
N.isValidElement = Ec;
N.lazy = function (e) {
  return { $$typeof: s1, _payload: { _status: -1, _result: e }, _init: c1 };
};
N.memo = function (e, t) {
  return { $$typeof: i1, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = es.transition;
  es.transition = {};
  try {
    e();
  } finally {
    es.transition = t;
  }
};
N.unstable_act = Pm;
N.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
N.useContext = function (e) {
  return Oe.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
N.useId = function () {
  return Oe.current.useId();
};
N.useImperativeHandle = function (e, t, r) {
  return Oe.current.useImperativeHandle(e, t, r);
};
N.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
N.useReducer = function (e, t, r) {
  return Oe.current.useReducer(e, t, r);
};
N.useRef = function (e) {
  return Oe.current.useRef(e);
};
N.useState = function (e) {
  return Oe.current.useState(e);
};
N.useSyncExternalStore = function (e, t, r) {
  return Oe.current.useSyncExternalStore(e, t, r);
};
N.useTransition = function () {
  return Oe.current.useTransition();
};
N.version = "18.3.1";
vm.exports = N;
var S = vm.exports;
const sa = gm(S),
  ff = Kv({ __proto__: null, default: sa }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f1 = S,
  p1 = Symbol.for("react.element"),
  h1 = Symbol.for("react.fragment"),
  m1 = Object.prototype.hasOwnProperty,
  g1 = f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  y1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Em(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) m1.call(t, n) && !y1.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: p1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: g1.current,
  };
}
ia.Fragment = h1;
ia.jsx = Em;
ia.jsxs = Em;
ym.exports = ia;
var b = ym.exports,
  ru = {},
  zm = { exports: {} },
  ot = {},
  Tm = { exports: {} },
  Am = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, V) {
    var B = R.length;
    R.push(V);
    e: for (; 0 < B; ) {
      var ce = (B - 1) >>> 1,
        we = R[ce];
      if (0 < o(we, V)) (R[ce] = V), (R[B] = we), (B = ce);
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var V = R[0],
      B = R.pop();
    if (B !== V) {
      R[0] = B;
      e: for (var ce = 0, we = R.length, wi = we >>> 1; ce < wi; ) {
        var Er = 2 * (ce + 1) - 1,
          ol = R[Er],
          zr = Er + 1,
          Ci = R[zr];
        if (0 > o(ol, B))
          zr < we && 0 > o(Ci, ol)
            ? ((R[ce] = Ci), (R[zr] = B), (ce = zr))
            : ((R[ce] = ol), (R[Er] = B), (ce = Er));
        else if (zr < we && 0 > o(Ci, B)) (R[ce] = Ci), (R[zr] = B), (ce = zr);
        else break e;
      }
    }
    return V;
  }
  function o(R, V) {
    var B = R.sortIndex - V.sortIndex;
    return B !== 0 ? B : R.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    x = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u);
      else if (V.startTime <= R)
        n(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = r(u);
    }
  }
  function k(R) {
    if (((v = !1), y(R), !x))
      if (r(l) !== null) (x = !0), ke(C);
      else {
        var V = r(u);
        V !== null && Pt(k, V.startTime - R);
      }
  }
  function C(R, V) {
    (x = !1), v && ((v = !1), p(z), (z = -1)), (g = !0);
    var B = f;
    try {
      for (
        y(V), d = r(l);
        d !== null && (!(d.expirationTime > V) || (R && !G()));

      ) {
        var ce = d.callback;
        if (typeof ce == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var we = ce(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof we == "function" ? (d.callback = we) : d === r(l) && n(l),
            y(V);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var wi = !0;
      else {
        var Er = r(u);
        Er !== null && Pt(k, Er.startTime - V), (wi = !1);
      }
      return wi;
    } finally {
      (d = null), (f = B), (g = !1);
    }
  }
  var P = !1,
    _ = null,
    z = -1,
    M = 5,
    A = -1;
  function G() {
    return !(e.unstable_now() - A < M);
  }
  function De() {
    if (_ !== null) {
      var R = e.unstable_now();
      A = R;
      var V = !0;
      try {
        V = _(!0, R);
      } finally {
        V ? at() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }
  var at;
  if (typeof m == "function")
    at = function () {
      m(De);
    };
  else if (typeof MessageChannel < "u") {
    var Ke = new MessageChannel(),
      ye = Ke.port2;
    (Ke.port1.onmessage = De),
      (at = function () {
        ye.postMessage(null);
      });
  } else
    at = function () {
      w(De, 0);
    };
  function ke(R) {
    (_ = R), P || ((P = !0), at());
  }
  function Pt(R, V) {
    z = w(function () {
      R(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), ke(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var B = f;
      f = V;
      try {
        return R();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = f;
      f = R;
      try {
        return V();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, B) {
      var ce = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? ce + B : ce))
          : (B = ce),
        R)
      ) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return (
        (we = B + we),
        (R = {
          id: c++,
          callback: V,
          priorityLevel: R,
          startTime: B,
          expirationTime: we,
          sortIndex: -1,
        }),
        B > ce
          ? ((R.sortIndex = B),
            t(u, R),
            r(l) === null &&
              R === r(u) &&
              (v ? (p(z), (z = -1)) : (v = !0), Pt(k, B - ce)))
          : ((R.sortIndex = we), t(l, R), x || g || ((x = !0), ke(C))),
        R
      );
    }),
    (e.unstable_shouldYield = G),
    (e.unstable_wrapCallback = function (R) {
      var V = f;
      return function () {
        var B = f;
        f = V;
        try {
          return R.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(Am);
Tm.exports = Am;
var v1 = Tm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x1 = S,
  rt = v1;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Rm = new Set(),
  Mo = {};
function Qr(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Mo[e] = t, e = 0; e < t.length; e++) Rm.add(t[e]);
}
var Yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nu = Object.prototype.hasOwnProperty,
  b1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pf = {},
  hf = {};
function S1(e) {
  return nu.call(hf, e)
    ? !0
    : nu.call(pf, e)
      ? !1
      : b1.test(e)
        ? (hf[e] = !0)
        : ((pf[e] = !0), !1);
}
function k1(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function w1(e, t, r, n) {
  if (t === null || typeof t > "u" || k1(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, r, n, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zc = /[\-:]([a-z])/g;
function Tc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zc, Tc);
    Ae[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zc, Tc);
    Ae[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zc, Tc);
  Ae[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ac(e, t, r, n) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (w1(t, r, o, n) && (r = null),
    n || o === null
      ? S1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
        ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
        : ((t = o.attributeName),
          (n = o.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var qt = x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pi = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  ln = Symbol.for("react.fragment"),
  Rc = Symbol.for("react.strict_mode"),
  ou = Symbol.for("react.profiler"),
  $m = Symbol.for("react.provider"),
  Mm = Symbol.for("react.context"),
  $c = Symbol.for("react.forward_ref"),
  iu = Symbol.for("react.suspense"),
  su = Symbol.for("react.suspense_list"),
  Mc = Symbol.for("react.memo"),
  tr = Symbol.for("react.lazy"),
  jm = Symbol.for("react.offscreen"),
  mf = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mf && e[mf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  sl;
function ao(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      sl = (t && t[1]) || "";
    }
  return (
    `
` +
    sl +
    e
  );
}
var al = !1;
function ll(e, t) {
  if (!e || al) return "";
  al = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? ao(e) : "";
}
function C1(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type);
    case 16:
      return ao("Lazy");
    case 13:
      return ao("Suspense");
    case 19:
      return ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ll(e.type, !1)), e;
    case 11:
      return (e = ll(e.type.render, !1)), e;
    case 1:
      return (e = ll(e.type, !0)), e;
    default:
      return "";
  }
}
function au(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case an:
      return "Portal";
    case ou:
      return "Profiler";
    case Rc:
      return "StrictMode";
    case iu:
      return "Suspense";
    case su:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mm:
        return (e.displayName || "Context") + ".Consumer";
      case $m:
        return (e._context.displayName || "Context") + ".Provider";
      case $c:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mc:
        return (
          (t = e.displayName || null), t !== null ? t : au(e.type) || "Memo"
        );
      case tr:
        (t = e._payload), (e = e._init);
        try {
          return au(e(t));
        } catch {}
    }
  return null;
}
function _1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return au(t);
    case 8:
      return t === Rc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Lm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function P1(e) {
  var t = Lm(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (n = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ei(e) {
  e._valueTracker || (e._valueTracker = P1(e));
}
function Im(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Lm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function bs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lu(e, t) {
  var r = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function gf(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = yr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dm(e, t) {
  (t = t.checked), t != null && Ac(e, "checked", t, !1);
}
function uu(e, t) {
  Dm(e, t);
  var r = yr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? cu(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && cu(e, t.type, yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yf(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function cu(e, t, r) {
  (t !== "number" || bs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var lo = Array.isArray;
function kn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + yr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function du(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vf(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(E(92));
      if (lo(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: yr(r) };
}
function Vm(e, t) {
  var r = yr(t.value),
    n = yr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function xf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var zi,
  Nm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        zi = zi || document.createElement("div"),
          zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  E1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function (e) {
  E1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]);
  });
});
function Om(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (mo.hasOwnProperty(e) && mo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fm(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Om(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var z1 = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function pu(e, t) {
  if (t) {
    if (z1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function hu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mu = null;
function jc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gu = null,
  wn = null,
  Cn = null;
function bf(e) {
  if ((e = di(e))) {
    if (typeof gu != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = da(t)), gu(e.stateNode, e.type, t));
  }
}
function Wm(e) {
  wn ? (Cn ? Cn.push(e) : (Cn = [e])) : (wn = e);
}
function Hm() {
  if (wn) {
    var e = wn,
      t = Cn;
    if (((Cn = wn = null), bf(e), t)) for (e = 0; e < t.length; e++) bf(t[e]);
  }
}
function Um(e, t) {
  return e(t);
}
function Gm() {}
var ul = !1;
function Ym(e, t, r) {
  if (ul) return e(t, r);
  ul = !0;
  try {
    return Um(e, t, r);
  } finally {
    (ul = !1), (wn !== null || Cn !== null) && (Gm(), Hm());
  }
}
function Lo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = da(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var yu = !1;
if (Yt)
  try {
    var qn = {};
    Object.defineProperty(qn, "passive", {
      get: function () {
        yu = !0;
      },
    }),
      window.addEventListener("test", qn, qn),
      window.removeEventListener("test", qn, qn);
  } catch {
    yu = !1;
  }
function T1(e, t, r, n, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var go = !1,
  Ss = null,
  ks = !1,
  vu = null,
  A1 = {
    onError: function (e) {
      (go = !0), (Ss = e);
    },
  };
function R1(e, t, r, n, o, i, s, a, l) {
  (go = !1), (Ss = null), T1.apply(A1, arguments);
}
function $1(e, t, r, n, o, i, s, a, l) {
  if ((R1.apply(this, arguments), go)) {
    if (go) {
      var u = Ss;
      (go = !1), (Ss = null);
    } else throw Error(E(198));
    ks || ((ks = !0), (vu = u));
  }
}
function Kr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Xm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Sf(e) {
  if (Kr(e) !== e) throw Error(E(188));
}
function M1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kr(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Sf(o), e;
        if (i === n) return Sf(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function Qm(e) {
  return (e = M1(e)), e !== null ? Km(e) : null;
}
function Km(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Km(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qm = rt.unstable_scheduleCallback,
  kf = rt.unstable_cancelCallback,
  j1 = rt.unstable_shouldYield,
  L1 = rt.unstable_requestPaint,
  de = rt.unstable_now,
  I1 = rt.unstable_getCurrentPriorityLevel,
  Lc = rt.unstable_ImmediatePriority,
  Zm = rt.unstable_UserBlockingPriority,
  ws = rt.unstable_NormalPriority,
  D1 = rt.unstable_LowPriority,
  Jm = rt.unstable_IdlePriority,
  aa = null,
  jt = null;
function V1(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : O1,
  B1 = Math.log,
  N1 = Math.LN2;
function O1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((B1(e) / N1) | 0)) | 0;
}
var Ti = 64,
  Ai = 4194304;
function uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Cs(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (n = uo(a)) : ((i &= s), i !== 0 && (n = uo(i)));
  } else (s = r & ~o), s !== 0 ? (n = uo(s)) : i !== 0 && (n = uo(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - kt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function F1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function W1(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - kt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & r) || a & n) && (o[s] = F1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function xu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function e0() {
  var e = Ti;
  return (Ti <<= 1), !(Ti & 4194240) && (Ti = 64), e;
}
function cl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ui(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = r);
}
function H1(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - kt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function Ic(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - kt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var Q = 0;
function t0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var r0,
  Dc,
  n0,
  o0,
  i0,
  bu = !1,
  Ri = [],
  lr = null,
  ur = null,
  cr = null,
  Io = new Map(),
  Do = new Map(),
  or = [],
  U1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function wf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lr = null;
      break;
    case "dragenter":
    case "dragleave":
      ur = null;
      break;
    case "mouseover":
    case "mouseout":
      cr = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Do.delete(t.pointerId);
  }
}
function Zn(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = di(t)), t !== null && Dc(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function G1(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (lr = Zn(lr, e, t, r, n, o)), !0;
    case "dragenter":
      return (ur = Zn(ur, e, t, r, n, o)), !0;
    case "mouseover":
      return (cr = Zn(cr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Io.set(i, Zn(Io.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Do.set(i, Zn(Do.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function s0(e) {
  var t = jr(e.target);
  if (t !== null) {
    var r = Kr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Xm(r)), t !== null)) {
          (e.blockedOn = t),
            i0(e.priority, function () {
              n0(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ts(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (mu = n), r.target.dispatchEvent(n), (mu = null);
    } else return (t = di(r)), t !== null && Dc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Cf(e, t, r) {
  ts(e) && r.delete(t);
}
function Y1() {
  (bu = !1),
    lr !== null && ts(lr) && (lr = null),
    ur !== null && ts(ur) && (ur = null),
    cr !== null && ts(cr) && (cr = null),
    Io.forEach(Cf),
    Do.forEach(Cf);
}
function Jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bu ||
      ((bu = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, Y1)));
}
function Vo(e) {
  function t(o) {
    return Jn(o, e);
  }
  if (0 < Ri.length) {
    Jn(Ri[0], e);
    for (var r = 1; r < Ri.length; r++) {
      var n = Ri[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    lr !== null && Jn(lr, e),
      ur !== null && Jn(ur, e),
      cr !== null && Jn(cr, e),
      Io.forEach(t),
      Do.forEach(t),
      r = 0;
    r < or.length;
    r++
  )
    (n = or[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < or.length && ((r = or[0]), r.blockedOn === null); )
    s0(r), r.blockedOn === null && or.shift();
}
var _n = qt.ReactCurrentBatchConfig,
  _s = !0;
function X1(e, t, r, n) {
  var o = Q,
    i = _n.transition;
  _n.transition = null;
  try {
    (Q = 1), Vc(e, t, r, n);
  } finally {
    (Q = o), (_n.transition = i);
  }
}
function Q1(e, t, r, n) {
  var o = Q,
    i = _n.transition;
  _n.transition = null;
  try {
    (Q = 4), Vc(e, t, r, n);
  } finally {
    (Q = o), (_n.transition = i);
  }
}
function Vc(e, t, r, n) {
  if (_s) {
    var o = Su(e, t, r, n);
    if (o === null) bl(e, t, n, Ps, r), wf(e, n);
    else if (G1(o, e, t, r, n)) n.stopPropagation();
    else if ((wf(e, n), t & 4 && -1 < U1.indexOf(e))) {
      for (; o !== null; ) {
        var i = di(o);
        if (
          (i !== null && r0(i),
          (i = Su(e, t, r, n)),
          i === null && bl(e, t, n, Ps, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else bl(e, t, n, null, r);
  }
}
var Ps = null;
function Su(e, t, r, n) {
  if (((Ps = null), (e = jc(n)), (e = jr(e)), e !== null))
    if (((t = Kr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Xm(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ps = e), null;
}
function a0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (I1()) {
        case Lc:
          return 1;
        case Zm:
          return 4;
        case ws:
        case D1:
          return 16;
        case Jm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sr = null,
  Bc = null,
  rs = null;
function l0() {
  if (rs) return rs;
  var e,
    t = Bc,
    r = t.length,
    n,
    o = "value" in sr ? sr.value : sr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === o[i - n]; n++);
  return (rs = o.slice(e, 1 < n ? 1 - n : void 0));
}
function ns(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $i() {
  return !0;
}
function _f() {
  return !1;
}
function it(e) {
  function t(r, n, o, i, s) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? $i
        : _f),
      (this.isPropagationStopped = _f),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = $i));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = $i));
      },
      persist: function () {},
      isPersistent: $i,
    }),
    t
  );
}
var Un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nc = it(Un),
  ci = ae({}, Un, { view: 0, detail: 0 }),
  K1 = it(ci),
  dl,
  fl,
  eo,
  la = ae({}, ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Oc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== eo &&
            (eo && e.type === "mousemove"
              ? ((dl = e.screenX - eo.screenX), (fl = e.screenY - eo.screenY))
              : (fl = dl = 0),
            (eo = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  Pf = it(la),
  q1 = ae({}, la, { dataTransfer: 0 }),
  Z1 = it(q1),
  J1 = ae({}, ci, { relatedTarget: 0 }),
  pl = it(J1),
  ex = ae({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tx = it(ex),
  rx = ae({}, Un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nx = it(rx),
  ox = ae({}, Un, { data: 0 }),
  Ef = it(ox),
  ix = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ax = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ax[e]) ? !!t[e] : !1;
}
function Oc() {
  return lx;
}
var ux = ae({}, ci, {
    key: function (e) {
      if (e.key) {
        var t = ix[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? sx[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oc,
    charCode: function (e) {
      return e.type === "keypress" ? ns(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ns(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  cx = it(ux),
  dx = ae({}, la, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zf = it(dx),
  fx = ae({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oc,
  }),
  px = it(fx),
  hx = ae({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mx = it(hx),
  gx = ae({}, la, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yx = it(gx),
  vx = [9, 13, 27, 32],
  Fc = Yt && "CompositionEvent" in window,
  yo = null;
Yt && "documentMode" in document && (yo = document.documentMode);
var xx = Yt && "TextEvent" in window && !yo,
  u0 = Yt && (!Fc || (yo && 8 < yo && 11 >= yo)),
  Tf = " ",
  Af = !1;
function c0(e, t) {
  switch (e) {
    case "keyup":
      return vx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function d0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function bx(e, t) {
  switch (e) {
    case "compositionend":
      return d0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Af = !0), Tf);
    case "textInput":
      return (e = t.data), e === Tf && Af ? null : e;
    default:
      return null;
  }
}
function Sx(e, t) {
  if (un)
    return e === "compositionend" || (!Fc && c0(e, t))
      ? ((e = l0()), (rs = Bc = sr = null), (un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return u0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kx[e.type] : t === "textarea";
}
function f0(e, t, r, n) {
  Wm(n),
    (t = Es(t, "onChange")),
    0 < t.length &&
      ((r = new Nc("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var vo = null,
  Bo = null;
function wx(e) {
  w0(e, 0);
}
function ua(e) {
  var t = fn(e);
  if (Im(t)) return e;
}
function Cx(e, t) {
  if (e === "change") return t;
}
var p0 = !1;
if (Yt) {
  var hl;
  if (Yt) {
    var ml = "oninput" in document;
    if (!ml) {
      var $f = document.createElement("div");
      $f.setAttribute("oninput", "return;"),
        (ml = typeof $f.oninput == "function");
    }
    hl = ml;
  } else hl = !1;
  p0 = hl && (!document.documentMode || 9 < document.documentMode);
}
function Mf() {
  vo && (vo.detachEvent("onpropertychange", h0), (Bo = vo = null));
}
function h0(e) {
  if (e.propertyName === "value" && ua(Bo)) {
    var t = [];
    f0(t, Bo, e, jc(e)), Ym(wx, t);
  }
}
function _x(e, t, r) {
  e === "focusin"
    ? (Mf(), (vo = t), (Bo = r), vo.attachEvent("onpropertychange", h0))
    : e === "focusout" && Mf();
}
function Px(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ua(Bo);
}
function Ex(e, t) {
  if (e === "click") return ua(t);
}
function zx(e, t) {
  if (e === "input" || e === "change") return ua(t);
}
function Tx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : Tx;
function No(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!nu.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function jf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lf(e, t) {
  var r = jf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = jf(r);
  }
}
function m0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? m0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function g0() {
  for (var e = window, t = bs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = bs(e.document);
  }
  return t;
}
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ax(e) {
  var t = g0(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    m0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Wc(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = Lf(r, i));
        var s = Lf(r, n);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rx = Yt && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  ku = null,
  xo = null,
  wu = !1;
function If(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  wu ||
    cn == null ||
    cn !== bs(n) ||
    ((n = cn),
    "selectionStart" in n && Wc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (xo && No(xo, n)) ||
      ((xo = n),
      (n = Es(ku, "onSelect")),
      0 < n.length &&
        ((t = new Nc("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = cn))));
}
function Mi(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var dn = {
    animationend: Mi("Animation", "AnimationEnd"),
    animationiteration: Mi("Animation", "AnimationIteration"),
    animationstart: Mi("Animation", "AnimationStart"),
    transitionend: Mi("Transition", "TransitionEnd"),
  },
  gl = {},
  y0 = {};
Yt &&
  ((y0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function ca(e) {
  if (gl[e]) return gl[e];
  if (!dn[e]) return e;
  var t = dn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in y0) return (gl[e] = t[r]);
  return e;
}
var v0 = ca("animationend"),
  x0 = ca("animationiteration"),
  b0 = ca("animationstart"),
  S0 = ca("transitionend"),
  k0 = new Map(),
  Df =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function kr(e, t) {
  k0.set(e, t), Qr(t, [e]);
}
for (var yl = 0; yl < Df.length; yl++) {
  var vl = Df[yl],
    $x = vl.toLowerCase(),
    Mx = vl[0].toUpperCase() + vl.slice(1);
  kr($x, "on" + Mx);
}
kr(v0, "onAnimationEnd");
kr(x0, "onAnimationIteration");
kr(b0, "onAnimationStart");
kr("dblclick", "onDoubleClick");
kr("focusin", "onFocus");
kr("focusout", "onBlur");
kr(S0, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
Qr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Qr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Qr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Qr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  jx = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
function Vf(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), $1(n, t, void 0, e), (e.currentTarget = null);
}
function w0(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = n.length - 1; 0 <= s; s--) {
          var a = n[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Vf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((a = n[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Vf(o, a, u), (i = l);
        }
    }
  }
  if (ks) throw ((e = vu), (ks = !1), (vu = null), e);
}
function ee(e, t) {
  var r = t[zu];
  r === void 0 && (r = t[zu] = new Set());
  var n = e + "__bubble";
  r.has(n) || (C0(t, e, 2, !1), r.add(n));
}
function xl(e, t, r) {
  var n = 0;
  t && (n |= 4), C0(r, e, n, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Oo(e) {
  if (!e[ji]) {
    (e[ji] = !0),
      Rm.forEach(function (r) {
        r !== "selectionchange" && (jx.has(r) || xl(r, !1, e), xl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || ((t[ji] = !0), xl("selectionchange", !1, t));
  }
}
function C0(e, t, r, n) {
  switch (a0(t)) {
    case 1:
      var o = X1;
      break;
    case 4:
      o = Q1;
      break;
    default:
      o = Vc;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !yu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1);
}
function bl(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = jr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            n = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Ym(function () {
    var u = i,
      c = jc(r),
      d = [];
    e: {
      var f = k0.get(e);
      if (f !== void 0) {
        var g = Nc,
          x = e;
        switch (e) {
          case "keypress":
            if (ns(r) === 0) break e;
          case "keydown":
          case "keyup":
            g = cx;
            break;
          case "focusin":
            (x = "focus"), (g = pl);
            break;
          case "focusout":
            (x = "blur"), (g = pl);
            break;
          case "beforeblur":
          case "afterblur":
            g = pl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Pf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Z1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = px;
            break;
          case v0:
          case x0:
          case b0:
            g = tx;
            break;
          case S0:
            g = mx;
            break;
          case "scroll":
            g = K1;
            break;
          case "wheel":
            g = yx;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = nx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = zf;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              p !== null && ((k = Lo(m, p)), k != null && v.push(Fo(m, k, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((f = new g(f, x, null, r, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            r !== mu &&
            (x = r.relatedTarget || r.fromElement) &&
            (jr(x) || x[Xt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((x = r.relatedTarget || r.toElement),
              (g = u),
              (x = x ? jr(x) : null),
              x !== null &&
                ((w = Kr(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((v = Pf),
            (k = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = zf),
              (k = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (w = g == null ? f : fn(g)),
            (y = x == null ? f : fn(x)),
            (f = new v(k, m + "leave", g, r, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (k = null),
            jr(c) === u &&
              ((v = new v(p, m + "enter", x, r, c)),
              (v.target = y),
              (v.relatedTarget = w),
              (k = v)),
            (w = k),
            g && x)
          )
            t: {
              for (v = g, p = x, m = 0, y = v; y; y = Jr(y)) m++;
              for (y = 0, k = p; k; k = Jr(k)) y++;
              for (; 0 < m - y; ) (v = Jr(v)), m--;
              for (; 0 < y - m; ) (p = Jr(p)), y--;
              for (; m--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Jr(v)), (p = Jr(p));
              }
              v = null;
            }
          else v = null;
          g !== null && Bf(d, f, g, v, !1),
            x !== null && w !== null && Bf(d, w, x, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? fn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var C = Cx;
        else if (Rf(f))
          if (p0) C = zx;
          else {
            C = Px;
            var P = _x;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Ex);
        if (C && (C = C(e, u))) {
          f0(d, C, r, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            cu(f, "number", f.value);
      }
      switch (((P = u ? fn(u) : window), e)) {
        case "focusin":
          (Rf(P) || P.contentEditable === "true") &&
            ((cn = P), (ku = u), (xo = null));
          break;
        case "focusout":
          xo = ku = cn = null;
          break;
        case "mousedown":
          wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wu = !1), If(d, r, c);
          break;
        case "selectionchange":
          if (Rx) break;
        case "keydown":
        case "keyup":
          If(d, r, c);
      }
      var _;
      if (Fc)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        un
          ? c0(e, r) && (z = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (u0 &&
          r.locale !== "ko" &&
          (un || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && un && (_ = l0())
            : ((sr = c),
              (Bc = "value" in sr ? sr.value : sr.textContent),
              (un = !0))),
        (P = Es(u, z)),
        0 < P.length &&
          ((z = new Ef(z, e, null, r, c)),
          d.push({ event: z, listeners: P }),
          _ ? (z.data = _) : ((_ = d0(r)), _ !== null && (z.data = _)))),
        (_ = xx ? bx(e, r) : Sx(e, r)) &&
          ((u = Es(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ef("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    w0(d, t);
  });
}
function Fo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Es(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Lo(e, r)),
      i != null && n.unshift(Fo(e, i, o)),
      (i = Lo(e, t)),
      i != null && n.push(Fo(e, i, o))),
      (e = e.return);
  }
  return n;
}
function Jr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bf(e, t, r, n, o) {
  for (var i = t._reactName, s = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Lo(r, i)), l != null && s.unshift(Fo(r, l, a)))
        : o || ((l = Lo(r, i)), l != null && s.push(Fo(r, l, a)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Lx = /\r\n?/g,
  Ix = /\u0000|\uFFFD/g;
function Nf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lx,
      `
`,
    )
    .replace(Ix, "");
}
function Li(e, t, r) {
  if (((t = Nf(t)), Nf(e) !== t && r)) throw Error(E(425));
}
function zs() {}
var Cu = null,
  _u = null;
function Pu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Eu = typeof setTimeout == "function" ? setTimeout : void 0,
  Dx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Of = typeof Promise == "function" ? Promise : void 0,
  Vx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Of < "u"
        ? function (e) {
            return Of.resolve(null).then(e).catch(Bx);
          }
        : Eu;
function Bx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sl(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), Vo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  Vo(t);
}
function dr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ff(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  $t = "__reactFiber$" + Gn,
  Wo = "__reactProps$" + Gn,
  Xt = "__reactContainer$" + Gn,
  zu = "__reactEvents$" + Gn,
  Nx = "__reactListeners$" + Gn,
  Ox = "__reactHandles$" + Gn;
function jr(e) {
  var t = e[$t];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Xt] || r[$t])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Ff(e); e !== null; ) {
          if ((r = e[$t])) return r;
          e = Ff(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function di(e) {
  return (
    (e = e[$t] || e[Xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function da(e) {
  return e[Wo] || null;
}
var Tu = [],
  pn = -1;
function wr(e) {
  return { current: e };
}
function te(e) {
  0 > pn || ((e.current = Tu[pn]), (Tu[pn] = null), pn--);
}
function Z(e, t) {
  pn++, (Tu[pn] = e.current), (e.current = t);
}
var vr = {},
  Ie = wr(vr),
  Ue = wr(!1),
  Wr = vr;
function Mn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return vr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Ts() {
  te(Ue), te(Ie);
}
function Wf(e, t, r) {
  if (Ie.current !== vr) throw Error(E(168));
  Z(Ie, t), Z(Ue, r);
}
function _0(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(E(108, _1(e) || "Unknown", o));
  return ae({}, r, n);
}
function As(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vr),
    (Wr = Ie.current),
    Z(Ie, e),
    Z(Ue, Ue.current),
    !0
  );
}
function Hf(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r
    ? ((e = _0(e, t, Wr)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      te(Ue),
      te(Ie),
      Z(Ie, e))
    : te(Ue),
    Z(Ue, r);
}
var Nt = null,
  fa = !1,
  kl = !1;
function P0(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Fx(e) {
  (fa = !0), P0(e);
}
function Cr() {
  if (!kl && Nt !== null) {
    kl = !0;
    var e = 0,
      t = Q;
    try {
      var r = Nt;
      for (Q = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Nt = null), (fa = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), qm(Lc, Cr), o);
    } finally {
      (Q = t), (kl = !1);
    }
  }
  return null;
}
var hn = [],
  mn = 0,
  Rs = null,
  $s = 0,
  ut = [],
  ct = 0,
  Hr = null,
  Ot = 1,
  Ft = "";
function Ar(e, t) {
  (hn[mn++] = $s), (hn[mn++] = Rs), (Rs = e), ($s = t);
}
function E0(e, t, r) {
  (ut[ct++] = Ot), (ut[ct++] = Ft), (ut[ct++] = Hr), (Hr = e);
  var n = Ot;
  e = Ft;
  var o = 32 - kt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - kt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (o -= s),
      (Ot = (1 << (32 - kt(t) + o)) | (r << o) | n),
      (Ft = i + e);
  } else (Ot = (1 << i) | (r << o) | n), (Ft = e);
}
function Hc(e) {
  e.return !== null && (Ar(e, 1), E0(e, 1, 0));
}
function Uc(e) {
  for (; e === Rs; )
    (Rs = hn[--mn]), (hn[mn] = null), ($s = hn[--mn]), (hn[mn] = null);
  for (; e === Hr; )
    (Hr = ut[--ct]),
      (ut[ct] = null),
      (Ft = ut[--ct]),
      (ut[ct] = null),
      (Ot = ut[--ct]),
      (ut[ct] = null);
}
var et = null,
  Ze = null,
  re = !1,
  bt = null;
function z0(e, t) {
  var r = dt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Uf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Ze = dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Hr !== null ? { id: Ot, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = dt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (et = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ru(e) {
  if (re) {
    var t = Ze;
    if (t) {
      var r = t;
      if (!Uf(e, t)) {
        if (Au(e)) throw Error(E(418));
        t = dr(r.nextSibling);
        var n = et;
        t && Uf(e, t)
          ? z0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (et = e));
      }
    } else {
      if (Au(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (et = e);
    }
  }
}
function Gf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function Ii(e) {
  if (e !== et) return !1;
  if (!re) return Gf(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Pu(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (Au(e)) throw (T0(), Error(E(418)));
    for (; t; ) z0(e, t), (t = dr(t.nextSibling));
  }
  if ((Gf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ze = dr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = et ? dr(e.stateNode.nextSibling) : null;
  return !0;
}
function T0() {
  for (var e = Ze; e; ) e = dr(e.nextSibling);
}
function jn() {
  (Ze = et = null), (re = !1);
}
function Gc(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
var Wx = qt.ReactCurrentBatchConfig;
function to(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function Di(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Yf(e) {
  var t = e._init;
  return t(e._payload);
}
function A0(e) {
  function t(p, m) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [m]), (p.flags |= 16)) : y.push(m);
    }
  }
  function r(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function n(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function o(p, m) {
    return (p = mr(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, m, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((p.flags |= 2), m) : y)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, y, k) {
    return m === null || m.tag !== 6
      ? ((m = Tl(y, p.mode, k)), (m.return = p), m)
      : ((m = o(m, y)), (m.return = p), m);
  }
  function l(p, m, y, k) {
    var C = y.type;
    return C === ln
      ? c(p, m, y.props.children, k, y.key)
      : m !== null &&
          (m.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === tr &&
              Yf(C) === m.type))
        ? ((k = o(m, y.props)), (k.ref = to(p, m, y)), (k.return = p), k)
        : ((k = cs(y.type, y.key, y.props, null, p.mode, k)),
          (k.ref = to(p, m, y)),
          (k.return = p),
          k);
  }
  function u(p, m, y, k) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Al(y, p.mode, k)), (m.return = p), m)
      : ((m = o(m, y.children || [])), (m.return = p), m);
  }
  function c(p, m, y, k, C) {
    return m === null || m.tag !== 7
      ? ((m = Or(y, p.mode, k, C)), (m.return = p), m)
      : ((m = o(m, y)), (m.return = p), m);
  }
  function d(p, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Tl("" + m, p.mode, y)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Pi:
          return (
            (y = cs(m.type, m.key, m.props, null, p.mode, y)),
            (y.ref = to(p, null, m)),
            (y.return = p),
            y
          );
        case an:
          return (m = Al(m, p.mode, y)), (m.return = p), m;
        case tr:
          var k = m._init;
          return d(p, k(m._payload), y);
      }
      if (lo(m) || Kn(m))
        return (m = Or(m, p.mode, y, null)), (m.return = p), m;
      Di(p, m);
    }
    return null;
  }
  function f(p, m, y, k) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(p, m, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Pi:
          return y.key === C ? l(p, m, y, k) : null;
        case an:
          return y.key === C ? u(p, m, y, k) : null;
        case tr:
          return (C = y._init), f(p, m, C(y._payload), k);
      }
      if (lo(y) || Kn(y)) return C !== null ? null : c(p, m, y, k, null);
      Di(p, y);
    }
    return null;
  }
  function g(p, m, y, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (p = p.get(y) || null), a(m, p, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Pi:
          return (p = p.get(k.key === null ? y : k.key) || null), l(m, p, k, C);
        case an:
          return (p = p.get(k.key === null ? y : k.key) || null), u(m, p, k, C);
        case tr:
          var P = k._init;
          return g(p, m, y, P(k._payload), C);
      }
      if (lo(k) || Kn(k)) return (p = p.get(y) || null), c(m, p, k, C, null);
      Di(m, k);
    }
    return null;
  }
  function x(p, m, y, k) {
    for (
      var C = null, P = null, _ = m, z = (m = 0), M = null;
      _ !== null && z < y.length;
      z++
    ) {
      _.index > z ? ((M = _), (_ = null)) : (M = _.sibling);
      var A = f(p, _, y[z], k);
      if (A === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && A.alternate === null && t(p, _),
        (m = i(A, m, z)),
        P === null ? (C = A) : (P.sibling = A),
        (P = A),
        (_ = M);
    }
    if (z === y.length) return r(p, _), re && Ar(p, z), C;
    if (_ === null) {
      for (; z < y.length; z++)
        (_ = d(p, y[z], k)),
          _ !== null &&
            ((m = i(_, m, z)), P === null ? (C = _) : (P.sibling = _), (P = _));
      return re && Ar(p, z), C;
    }
    for (_ = n(p, _); z < y.length; z++)
      (M = g(_, p, z, y[z], k)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? z : M.key),
          (m = i(M, m, z)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        _.forEach(function (G) {
          return t(p, G);
        }),
      re && Ar(p, z),
      C
    );
  }
  function v(p, m, y, k) {
    var C = Kn(y);
    if (typeof C != "function") throw Error(E(150));
    if (((y = C.call(y)), y == null)) throw Error(E(151));
    for (
      var P = (C = null), _ = m, z = (m = 0), M = null, A = y.next();
      _ !== null && !A.done;
      z++, A = y.next()
    ) {
      _.index > z ? ((M = _), (_ = null)) : (M = _.sibling);
      var G = f(p, _, A.value, k);
      if (G === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && G.alternate === null && t(p, _),
        (m = i(G, m, z)),
        P === null ? (C = G) : (P.sibling = G),
        (P = G),
        (_ = M);
    }
    if (A.done) return r(p, _), re && Ar(p, z), C;
    if (_ === null) {
      for (; !A.done; z++, A = y.next())
        (A = d(p, A.value, k)),
          A !== null &&
            ((m = i(A, m, z)), P === null ? (C = A) : (P.sibling = A), (P = A));
      return re && Ar(p, z), C;
    }
    for (_ = n(p, _); !A.done; z++, A = y.next())
      (A = g(_, p, z, A.value, k)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? z : A.key),
          (m = i(A, m, z)),
          P === null ? (C = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        _.forEach(function (De) {
          return t(p, De);
        }),
      re && Ar(p, z),
      C
    );
  }
  function w(p, m, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ln &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Pi:
          e: {
            for (var C = y.key, P = m; P !== null; ) {
              if (P.key === C) {
                if (((C = y.type), C === ln)) {
                  if (P.tag === 7) {
                    r(p, P.sibling),
                      (m = o(P, y.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === tr &&
                    Yf(C) === P.type)
                ) {
                  r(p, P.sibling),
                    (m = o(P, y.props)),
                    (m.ref = to(p, P, y)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                r(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            y.type === ln
              ? ((m = Or(y.props.children, p.mode, k, y.key)),
                (m.return = p),
                (p = m))
              : ((k = cs(y.type, y.key, y.props, null, p.mode, k)),
                (k.ref = to(p, m, y)),
                (k.return = p),
                (p = k));
          }
          return s(p);
        case an:
          e: {
            for (P = y.key; m !== null; ) {
              if (m.key === P)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  r(p, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  r(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = Al(y, p.mode, k)), (m.return = p), (p = m);
          }
          return s(p);
        case tr:
          return (P = y._init), w(p, m, P(y._payload), k);
      }
      if (lo(y)) return x(p, m, y, k);
      if (Kn(y)) return v(p, m, y, k);
      Di(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (r(p, m.sibling), (m = o(m, y)), (m.return = p), (p = m))
          : (r(p, m), (m = Tl(y, p.mode, k)), (m.return = p), (p = m)),
        s(p))
      : r(p, m);
  }
  return w;
}
var Ln = A0(!0),
  R0 = A0(!1),
  Ms = wr(null),
  js = null,
  gn = null,
  Yc = null;
function Xc() {
  Yc = gn = js = null;
}
function Qc(e) {
  var t = Ms.current;
  te(Ms), (e._currentValue = t);
}
function $u(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Pn(e, t) {
  (js = e),
    (Yc = gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (Yc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gn === null)) {
      if (js === null) throw Error(E(308));
      (gn = e), (js.dependencies = { lanes: 0, firstContext: e });
    } else gn = gn.next = e;
  return t;
}
var Lr = null;
function Kc(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e);
}
function $0(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Kc(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Qt(e, n)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var rr = !1;
function qc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function M0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), W & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Qt(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Kc(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Qt(e, r)
  );
}
function os(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Ic(e, r);
  }
}
function Xf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Ls(e, t, r, n) {
  var o = e.updateQueue;
  rr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((f = t), (g = r), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == "function")) {
                d = x.call(g, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = v.payload),
                (f = typeof x == "function" ? x.call(g, d, f) : x),
                f == null)
              )
                break e;
              d = ae({}, d, f);
              break e;
            case 2:
              rr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = d)) : (c = c.next = g),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Gr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Qf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(E(191, o));
        o.call(n);
      }
    }
}
var fi = {},
  Lt = wr(fi),
  Ho = wr(fi),
  Uo = wr(fi);
function Ir(e) {
  if (e === fi) throw Error(E(174));
  return e;
}
function Zc(e, t) {
  switch ((Z(Uo, t), Z(Ho, e), Z(Lt, fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fu(t, e));
  }
  te(Lt), Z(Lt, t);
}
function In() {
  te(Lt), te(Ho), te(Uo);
}
function j0(e) {
  Ir(Uo.current);
  var t = Ir(Lt.current),
    r = fu(t, e.type);
  t !== r && (Z(Ho, e), Z(Lt, r));
}
function Jc(e) {
  Ho.current === e && (te(Lt), te(Ho));
}
var oe = wr(0);
function Is(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var wl = [];
function ed() {
  for (var e = 0; e < wl.length; e++)
    wl[e]._workInProgressVersionPrimary = null;
  wl.length = 0;
}
var is = qt.ReactCurrentDispatcher,
  Cl = qt.ReactCurrentBatchConfig,
  Ur = 0,
  se = null,
  ve = null,
  Ce = null,
  Ds = !1,
  bo = !1,
  Go = 0,
  Hx = 0;
function Re() {
  throw Error(E(321));
}
function td(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!_t(e[r], t[r])) return !1;
  return !0;
}
function rd(e, t, r, n, o, i) {
  if (
    ((Ur = i),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (is.current = e === null || e.memoizedState === null ? Xx : Qx),
    (e = r(n, o)),
    bo)
  ) {
    i = 0;
    do {
      if (((bo = !1), (Go = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (Ce = ve = null),
        (t.updateQueue = null),
        (is.current = Kx),
        (e = r(n, o));
    } while (bo);
  }
  if (
    ((is.current = Vs),
    (t = ve !== null && ve.next !== null),
    (Ur = 0),
    (Ce = ve = se = null),
    (Ds = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function nd() {
  var e = Go !== 0;
  return (Go = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (se.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function mt() {
  if (ve === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Ce === null ? se.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (ve = e);
  else {
    if (e === null) throw Error(E(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Ce === null ? (se.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function Yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = mt(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = ve,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ur & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = n)) : (l = l.next = d),
          (se.lanes |= c),
          (Gr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = n) : (l.next = a),
      _t(n, t.memoizedState) || (He = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (se.lanes |= i), (Gr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Pl(e) {
  var t = mt(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    _t(i, t.memoizedState) || (He = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function L0() {}
function I0(e, t) {
  var r = se,
    n = mt(),
    o = t(),
    i = !_t(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (He = !0)),
    (n = n.queue),
    od(B0.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Xo(9, V0.bind(null, r, n, o, t), void 0, null),
      _e === null)
    )
      throw Error(E(349));
    Ur & 30 || D0(r, t, o);
  }
  return o;
}
function D0(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function V0(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), N0(t) && O0(e);
}
function B0(e, t, r) {
  return r(function () {
    N0(t) && O0(e);
  });
}
function N0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !_t(e, r);
  } catch {
    return !0;
  }
}
function O0(e) {
  var t = Qt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Kf(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yx.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function Xo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function F0() {
  return mt().memoizedState;
}
function ss(e, t, r, n) {
  var o = zt();
  (se.flags |= e),
    (o.memoizedState = Xo(1 | t, r, void 0, n === void 0 ? null : n));
}
function pa(e, t, r, n) {
  var o = mt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (ve !== null) {
    var s = ve.memoizedState;
    if (((i = s.destroy), n !== null && td(n, s.deps))) {
      o.memoizedState = Xo(t, r, i, n);
      return;
    }
  }
  (se.flags |= e), (o.memoizedState = Xo(1 | t, r, i, n));
}
function qf(e, t) {
  return ss(8390656, 8, e, t);
}
function od(e, t) {
  return pa(2048, 8, e, t);
}
function W0(e, t) {
  return pa(4, 2, e, t);
}
function H0(e, t) {
  return pa(4, 4, e, t);
}
function U0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function G0(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), pa(4, 4, U0.bind(null, t, e), r)
  );
}
function id() {}
function Y0(e, t) {
  var r = mt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && td(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function X0(e, t) {
  var r = mt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && td(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Q0(e, t, r) {
  return Ur & 21
    ? (_t(r, t) || ((r = e0()), (se.lanes |= r), (Gr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = r));
}
function Ux(e, t) {
  var r = Q;
  (Q = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Cl.transition;
  Cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = r), (Cl.transition = n);
  }
}
function K0() {
  return mt().memoizedState;
}
function Gx(e, t, r) {
  var n = hr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    q0(e))
  )
    Z0(t, r);
  else if (((r = $0(e, t, r, n)), r !== null)) {
    var o = Ne();
    wt(r, e, n, o), J0(r, t, n);
  }
}
function Yx(e, t, r) {
  var n = hr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (q0(e)) Z0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, r);
        if (((o.hasEagerState = !0), (o.eagerState = a), _t(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Kc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = $0(e, t, o, n)),
      r !== null && ((o = Ne()), wt(r, e, n, o), J0(r, t, n));
  }
}
function q0(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function Z0(e, t) {
  bo = Ds = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function J0(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Ic(e, r);
  }
}
var Vs = {
    readContext: ht,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Xx = {
    readContext: ht,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: qf,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ss(4194308, 4, U0.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = zt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Gx.bind(null, se, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kf,
    useDebugValue: id,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kf(!1),
        t = e[0];
      return (e = Ux.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = se,
        o = zt();
      if (re) {
        if (r === void 0) throw Error(E(407));
        r = r();
      } else {
        if (((r = t()), _e === null)) throw Error(E(349));
        Ur & 30 || D0(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        qf(B0.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Xo(9, V0.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = zt(),
        t = _e.identifierPrefix;
      if (re) {
        var r = Ft,
          n = Ot;
        (r = (n & ~(1 << (32 - kt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Go++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Hx++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qx = {
    readContext: ht,
    useCallback: Y0,
    useContext: ht,
    useEffect: od,
    useImperativeHandle: G0,
    useInsertionEffect: W0,
    useLayoutEffect: H0,
    useMemo: X0,
    useReducer: _l,
    useRef: F0,
    useState: function () {
      return _l(Yo);
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = mt();
      return Q0(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(Yo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: L0,
    useSyncExternalStore: I0,
    useId: K0,
    unstable_isNewReconciler: !1,
  },
  Kx = {
    readContext: ht,
    useCallback: Y0,
    useContext: ht,
    useEffect: od,
    useImperativeHandle: G0,
    useInsertionEffect: W0,
    useLayoutEffect: H0,
    useMemo: X0,
    useReducer: Pl,
    useRef: F0,
    useState: function () {
      return Pl(Yo);
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = mt();
      return ve === null ? (t.memoizedState = e) : Q0(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Pl(Yo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: L0,
    useSyncExternalStore: I0,
    useId: K0,
    unstable_isNewReconciler: !1,
  };
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Mu(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ae({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ha = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ne(),
      o = hr(e),
      i = Ht(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = fr(e, i, o)),
      t !== null && (wt(t, e, o, n), os(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ne(),
      o = hr(e),
      i = Ht(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = fr(e, i, o)),
      t !== null && (wt(t, e, o, n), os(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ne(),
      n = hr(e),
      o = Ht(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = fr(e, o, n)),
      t !== null && (wt(t, e, n, r), os(t, e, n));
  },
};
function Zf(e, t, r, n, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !No(r, n) || !No(o, i)
        : !0
  );
}
function eg(e, t, r) {
  var n = !1,
    o = vr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ht(i))
      : ((o = Ge(t) ? Wr : Ie.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Mn(e, o) : vr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ha),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Jf(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ha.enqueueReplaceState(t, t.state, null);
}
function ju(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = {}), qc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ht(i))
    : ((i = Ge(t) ? Wr : Ie.current), (o.context = Mn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Mu(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ha.enqueueReplaceState(o, o.state, null),
      Ls(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var r = "",
      n = t;
    do (r += C1(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function El(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Lu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var qx = typeof WeakMap == "function" ? WeakMap : Map;
function tg(e, t, r) {
  (r = Ht(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Ns || ((Ns = !0), (Uu = n)), Lu(e, t);
    }),
    r
  );
}
function rg(e, t, r) {
  (r = Ht(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Lu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Lu(e, t),
          typeof n != "function" &&
            (pr === null ? (pr = new Set([this])) : pr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    r
  );
}
function ep(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new qx();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = db.bind(null, e, t, r)), t.then(e, e));
}
function tp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rp(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), fr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Zx = qt.ReactCurrentOwner,
  He = !1;
function Be(e, t, r, n) {
  t.child = e === null ? R0(t, null, r, n) : Ln(t, e.child, r, n);
}
function np(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Pn(t, o),
    (n = rd(e, t, r, n, i, o)),
    (r = nd()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (re && r && Hc(t), (t.flags |= 1), Be(e, t, n, o), t.child)
  );
}
function op(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !pd(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ng(e, t, i, n, o))
      : ((e = cs(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : No), r(s, n) && e.ref === t.ref)
    )
      return Kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ng(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (No(i, n) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (He = !0);
      else return (t.lanes = e.lanes), Kt(e, t, o);
  }
  return Iu(e, t, r, n, o);
}
function og(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(vn, qe),
        (qe |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(vn, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        Z(vn, qe),
        (qe |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Z(vn, qe),
      (qe |= n);
  return Be(e, t, o, r), t.child;
}
function ig(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Iu(e, t, r, n, o) {
  var i = Ge(r) ? Wr : Ie.current;
  return (
    (i = Mn(t, i)),
    Pn(t, o),
    (r = rd(e, t, r, n, i, o)),
    (n = nd()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (re && n && Hc(t), (t.flags |= 1), Be(e, t, r, o), t.child)
  );
}
function ip(e, t, r, n, o) {
  if (Ge(r)) {
    var i = !0;
    As(t);
  } else i = !1;
  if ((Pn(t, o), t.stateNode === null))
    as(e, t), eg(t, r, n), ju(t, r, n, o), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = ht(u))
      : ((u = Ge(r) ? Wr : Ie.current), (u = Mn(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && Jf(t, s, n, u)),
      (rr = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ls(t, n, s, o),
      (l = t.memoizedState),
      a !== n || f !== l || Ue.current || rr
        ? (typeof c == "function" && (Mu(t, r, c, n), (l = t.memoizedState)),
          (a = rr || Zf(t, r, a, n, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (s.props = n),
          (s.state = l),
          (s.context = u),
          (n = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (s = t.stateNode),
      M0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : vt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = ht(l))
        : ((l = Ge(r) ? Wr : Ie.current), (l = Mn(t, l)));
    var g = r.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Jf(t, s, n, l)),
      (rr = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ls(t, n, s, o);
    var x = t.memoizedState;
    a !== d || f !== x || Ue.current || rr
      ? (typeof g == "function" && (Mu(t, r, g, n), (x = t.memoizedState)),
        (u = rr || Zf(t, r, u, n, f, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(n, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(n, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = x)),
        (s.props = n),
        (s.state = x),
        (s.context = l),
        (n = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Du(e, t, r, n, i, o);
}
function Du(e, t, r, n, o, i) {
  ig(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return o && Hf(t, r, !1), Kt(e, t, i);
  (n = t.stateNode), (Zx.current = t);
  var a =
    s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ln(t, e.child, null, i)), (t.child = Ln(t, null, a, i)))
      : Be(e, t, a, i),
    (t.memoizedState = n.state),
    o && Hf(t, r, !0),
    t.child
  );
}
function sg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wf(e, t.context, !1),
    Zc(e, t.containerInfo);
}
function sp(e, t, r, n, o) {
  return jn(), Gc(o), (t.flags |= 256), Be(e, t, r, n), t.child;
}
var Vu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ag(e, t, r) {
  var n = t.pendingProps,
    o = oe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Z(oe, o & 1),
    e === null)
  )
    return (
      Ru(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ya(s, n, 0, null)),
              (e = Or(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Bu(r)),
              (t.memoizedState = Vu),
              e)
            : sd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Jx(e, t, s, n, a, o, r);
  if (i) {
    (i = n.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(s & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = mr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = mr(a, i)) : ((i = Or(i, s, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Bu(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Vu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = mr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function sd(e, t) {
  return (
    (t = ya({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vi(e, t, r, n) {
  return (
    n !== null && Gc(n),
    Ln(t, e.child, null, r),
    (e = sd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jx(e, t, r, n, o, i, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = El(Error(E(422)))), Vi(e, t, s, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = ya({ mode: "visible", children: n.children }, o, 0, null)),
          (i = Or(i, o, s, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && Ln(t, e.child, null, s),
          (t.child.memoizedState = Bu(s)),
          (t.memoizedState = Vu),
          i);
  if (!(t.mode & 1)) return Vi(e, t, s, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(E(419))), (n = El(i, n, void 0)), Vi(e, t, s, n);
  }
  if (((a = (s & e.childLanes) !== 0), He || a)) {
    if (((n = _e), n !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Qt(e, o), wt(n, e, o, -1));
    }
    return fd(), (n = El(Error(E(421)))), Vi(e, t, s, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ze = dr(o.nextSibling)),
      (et = t),
      (re = !0),
      (bt = null),
      e !== null &&
        ((ut[ct++] = Ot),
        (ut[ct++] = Ft),
        (ut[ct++] = Hr),
        (Ot = e.id),
        (Ft = e.overflow),
        (Hr = t)),
      (t = sd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function ap(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), $u(e.return, t, r);
}
function zl(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function lg(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Be(e, t, n.children, r), (n = oe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ap(e, r, t);
        else if (e.tag === 19) ap(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Z(oe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Is(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          zl(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Is(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        zl(t, !0, r, null, i);
        break;
      case "together":
        zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function as(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, r = mr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = mr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function eb(e, t, r) {
  switch (t.tag) {
    case 3:
      sg(t), jn();
      break;
    case 5:
      j0(t);
      break;
    case 1:
      Ge(t.type) && As(t);
      break;
    case 4:
      Zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      Z(Ms, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Z(oe, oe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? ag(e, t, r)
            : (Z(oe, oe.current & 1),
              (e = Kt(e, t, r)),
              e !== null ? e.sibling : null);
      Z(oe, oe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return lg(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Z(oe, oe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), og(e, t, r);
  }
  return Kt(e, t, r);
}
var ug, Nu, cg, dg;
ug = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Nu = function () {};
cg = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), Ir(Lt.current);
    var i = null;
    switch (r) {
      case "input":
        (o = lu(e, o)), (n = lu(e, n)), (i = []);
        break;
      case "select":
        (o = ae({}, o, { value: void 0 })),
          (n = ae({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = du(e, o)), (n = du(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = zs);
    }
    pu(r, n);
    var s;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (r || (r = {}), (r[s] = l[s]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Mo.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && ee("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dg = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ro(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function tb(e, t, r) {
  var n = t.pendingProps;
  switch ((Uc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return Ge(t.type) && Ts(), $e(t), null;
    case 3:
      return (
        (n = t.stateNode),
        In(),
        te(Ue),
        te(Ie),
        ed(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), bt !== null && (Xu(bt), (bt = null)))),
        Nu(e, t),
        $e(t),
        null
      );
    case 5:
      Jc(t);
      var o = Ir(Uo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        cg(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return $e(t), null;
        }
        if (((e = Ir(Lt.current)), Ii(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[$t] = t), (n[Wo] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ee("cancel", n), ee("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < co.length; o++) ee(co[o], n);
              break;
            case "source":
              ee("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", n), ee("load", n);
              break;
            case "details":
              ee("toggle", n);
              break;
            case "input":
              gf(n, i), ee("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", n);
              break;
            case "textarea":
              vf(n, i), ee("invalid", n);
          }
          pu(r, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Li(n.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Li(n.textContent, a, e),
                    (o = ["children", "" + a]))
                : Mo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ee("scroll", n);
            }
          switch (r) {
            case "input":
              Ei(n), yf(n, i, !0);
              break;
            case "textarea":
              Ei(n), xf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = zs);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bm(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = s.createElement(r, { is: n.is }))
                  : ((e = s.createElement(r)),
                    r === "select" &&
                      ((s = e),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size)))
              : (e = s.createElementNS(e, r)),
            (e[$t] = t),
            (e[Wo] = n),
            ug(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = hu(r, n)), r)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < co.length; o++) ee(co[o], e);
                o = n;
                break;
              case "source":
                ee("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (o = n);
                break;
              case "details":
                ee("toggle", e), (o = n);
                break;
              case "input":
                gf(e, n), (o = lu(e, n)), ee("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = ae({}, n, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                vf(e, n), (o = du(e, n)), ee("invalid", e);
                break;
              default:
                o = n;
            }
            pu(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Fm(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Nm(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && jo(e, l)
                        : typeof l == "number" && jo(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Mo.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && ee("scroll", e)
                          : l != null && Ac(e, i, l, s));
              }
            switch (r) {
              case "input":
                Ei(e), yf(e, n, !1);
                break;
              case "textarea":
                Ei(e), xf(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + yr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? kn(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      kn(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zs);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) dg(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (((r = Ir(Uo.current)), Ir(Lt.current), Ii(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[$t] = t),
            (i = n.nodeValue !== r) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Li(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[$t] = t),
            (t.stateNode = n);
      }
      return $e(t), null;
    case 13:
      if (
        (te(oe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Ze !== null && t.mode & 1 && !(t.flags & 128))
          T0(), jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Ii(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[$t] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (i = !1);
        } else bt !== null && (Xu(bt), (bt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? be === 0 && (be = 3) : fd())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        In(), Nu(e, t), e === null && Oo(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return Qc(t.type._context), $e(t), null;
    case 17:
      return Ge(t.type) && Ts(), $e(t), null;
    case 19:
      if ((te(oe), (i = t.memoizedState), i === null)) return $e(t), null;
      if (((n = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (n) ro(i, !1);
        else {
          if (be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Is(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ro(i, !1),
                    n = s.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Z(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            de() > Vn &&
            ((t.flags |= 128), (n = !0), ro(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Is(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ro(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !re)
            )
              return $e(t), null;
          } else
            2 * de() - i.renderingStartTime > Vn &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), ro(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((r = i.last),
            r !== null ? (r.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = de()),
          (t.sibling = null),
          (r = oe.current),
          Z(oe, n ? (r & 1) | 2 : r & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        dd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? qe & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function rb(e, t) {
  switch ((Uc(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && Ts(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        In(),
        te(Ue),
        te(Ie),
        ed(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Jc(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(E(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return In(), null;
    case 10:
      return Qc(t.type._context), null;
    case 22:
    case 23:
      return dd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  je = !1,
  nb = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function yn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        le(e, t, n);
      }
    else r.current = null;
}
function Ou(e, t, r) {
  try {
    r();
  } catch (n) {
    le(e, t, n);
  }
}
var lp = !1;
function ob(e, t) {
  if (((Cu = _s), (e = g0()), Wc(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== r || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = s + n),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === o && (a = s),
                f === i && ++c === n && (l = s),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (_u = { focusedElem: e, selectionRange: r }, _s = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps,
                    w = x.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : vt(t.type, v),
                      w,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (k) {
          le(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (x = lp), (lp = !1), x;
}
function So(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ou(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function ma(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Fu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$t], delete t[Wo], delete t[zu], delete t[Nx], delete t[Ox])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function up(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = zs));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Wu(e, t, r), e = e.sibling; e !== null; ) Wu(e, t, r), (e = e.sibling);
}
function Hu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Hu(e, t, r), e = e.sibling; e !== null; ) Hu(e, t, r), (e = e.sibling);
}
var Ee = null,
  xt = !1;
function Jt(e, t, r) {
  for (r = r.child; r !== null; ) hg(e, t, r), (r = r.sibling);
}
function hg(e, t, r) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(aa, r);
    } catch {}
  switch (r.tag) {
    case 5:
      je || yn(r, t);
    case 6:
      var n = Ee,
        o = xt;
      (Ee = null),
        Jt(e, t, r),
        (Ee = n),
        (xt = o),
        Ee !== null &&
          (xt
            ? ((e = Ee),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ee.removeChild(r.stateNode));
      break;
    case 18:
      Ee !== null &&
        (xt
          ? ((e = Ee),
            (r = r.stateNode),
            e.nodeType === 8
              ? Sl(e.parentNode, r)
              : e.nodeType === 1 && Sl(e, r),
            Vo(e))
          : Sl(Ee, r.stateNode));
      break;
    case 4:
      (n = Ee),
        (o = xt),
        (Ee = r.stateNode.containerInfo),
        (xt = !0),
        Jt(e, t, r),
        (Ee = n),
        (xt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Ou(r, t, s),
            (o = o.next);
        } while (o !== n);
      }
      Jt(e, t, r);
      break;
    case 1:
      if (
        !je &&
        (yn(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          le(r, t, a);
        }
      Jt(e, t, r);
      break;
    case 21:
      Jt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((je = (n = je) || r.memoizedState !== null), Jt(e, t, r), (je = n))
        : Jt(e, t, r);
      break;
    default:
      Jt(e, t, r);
  }
}
function cp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new nb()),
      t.forEach(function (n) {
        var o = pb.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function yt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (xt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (xt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (xt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error(E(160));
        hg(i, s, o), (Ee = null), (xt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mg(t, e), (t = t.sibling);
}
function mg(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Et(e), n & 4)) {
        try {
          So(3, e, e.return), ma(3, e);
        } catch (v) {
          le(e, e.return, v);
        }
        try {
          So(5, e, e.return);
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 1:
      yt(t, e), Et(e), n & 512 && r !== null && yn(r, r.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Et(e),
        n & 512 && r !== null && yn(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          jo(o, "");
        } catch (v) {
          le(e, e.return, v);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = r !== null ? r.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Dm(o, i),
              hu(a, s);
            var u = hu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Fm(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Nm(o, d)
                  : c === "children"
                    ? jo(o, d)
                    : Ac(o, c, d, u);
            }
            switch (a) {
              case "input":
                uu(o, i);
                break;
              case "textarea":
                Vm(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? kn(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? kn(o, !!i.multiple, i.defaultValue, !0)
                      : kn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Wo] = i;
          } catch (v) {
            le(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Et(e), n & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Et(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Vo(t.containerInfo);
        } catch (v) {
          le(e, e.return, v);
        }
      break;
    case 4:
      yt(t, e), Et(e);
      break;
    case 13:
      yt(t, e),
        Et(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ud = de())),
        n & 4 && cp(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), yt(t, e), (je = u)) : yt(t, e),
        Et(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((f = j), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  So(4, f, f.return);
                  break;
                case 1:
                  yn(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (v) {
                      le(n, r, v);
                    }
                  }
                  break;
                case 5:
                  yn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    fp(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (j = g)) : fp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Om("display", s)));
              } catch (v) {
                le(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                le(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Et(e), n & 4 && cp(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (pg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (jo(o, ""), (n.flags &= -33));
          var i = up(e);
          Hu(e, i, o);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            a = up(e);
          Wu(e, a, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ib(e, t, r) {
  (j = e), gg(e);
}
function gg(e, t, r) {
  for (var n = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && n) {
      var s = o.memoizedState !== null || Bi;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = Bi;
        var u = je;
        if (((Bi = s), (je = l) && !u))
          for (j = o; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? pp(o)
                : l !== null
                  ? ((l.return = s), (j = l))
                  : pp(o);
        for (; i !== null; ) (j = i), gg(i), (i = i.sibling);
        (j = o), (Bi = a), (je = u);
      }
      dp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : dp(e);
  }
}
function dp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || ma(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !je)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : vt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Qf(t, i, n);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Qf(t, s, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Vo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        je || (t.flags & 512 && Fu(t));
      } catch (f) {
        le(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function fp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function pp(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ma(4, t);
          } catch (l) {
            le(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              le(t, o, l);
            }
          }
          var i = t.return;
          try {
            Fu(t);
          } catch (l) {
            le(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Fu(t);
          } catch (l) {
            le(t, s, l);
          }
      }
    } catch (l) {
      le(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var sb = Math.ceil,
  Bs = qt.ReactCurrentDispatcher,
  ad = qt.ReactCurrentOwner,
  pt = qt.ReactCurrentBatchConfig,
  W = 0,
  _e = null,
  ge = null,
  Te = 0,
  qe = 0,
  vn = wr(0),
  be = 0,
  Qo = null,
  Gr = 0,
  ga = 0,
  ld = 0,
  ko = null,
  We = null,
  ud = 0,
  Vn = 1 / 0,
  Bt = null,
  Ns = !1,
  Uu = null,
  pr = null,
  Ni = !1,
  ar = null,
  Os = 0,
  wo = 0,
  Gu = null,
  ls = -1,
  us = 0;
function Ne() {
  return W & 6 ? de() : ls !== -1 ? ls : (ls = de());
}
function hr(e) {
  return e.mode & 1
    ? W & 2 && Te !== 0
      ? Te & -Te
      : Wx.transition !== null
        ? (us === 0 && (us = e0()), us)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : a0(e.type))),
          e)
    : 1;
}
function wt(e, t, r, n) {
  if (50 < wo) throw ((wo = 0), (Gu = null), Error(E(185)));
  ui(e, r, n),
    (!(W & 2) || e !== _e) &&
      (e === _e && (!(W & 2) && (ga |= r), be === 4 && ir(e, Te)),
      Ye(e, n),
      r === 1 && W === 0 && !(t.mode & 1) && ((Vn = de() + 500), fa && Cr()));
}
function Ye(e, t) {
  var r = e.callbackNode;
  W1(e, t);
  var n = Cs(e, e === _e ? Te : 0);
  if (n === 0)
    r !== null && kf(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && kf(r), t === 1))
      e.tag === 0 ? Fx(hp.bind(null, e)) : P0(hp.bind(null, e)),
        Vx(function () {
          !(W & 6) && Cr();
        }),
        (r = null);
    else {
      switch (t0(n)) {
        case 1:
          r = Lc;
          break;
        case 4:
          r = Zm;
          break;
        case 16:
          r = ws;
          break;
        case 536870912:
          r = Jm;
          break;
        default:
          r = ws;
      }
      r = Cg(r, yg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function yg(e, t) {
  if (((ls = -1), (us = 0), W & 6)) throw Error(E(327));
  var r = e.callbackNode;
  if (En() && e.callbackNode !== r) return null;
  var n = Cs(e, e === _e ? Te : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Fs(e, n);
  else {
    t = n;
    var o = W;
    W |= 2;
    var i = xg();
    (_e !== e || Te !== t) && ((Bt = null), (Vn = de() + 500), Nr(e, t));
    do
      try {
        ub();
        break;
      } catch (a) {
        vg(e, a);
      }
    while (!0);
    Xc(),
      (Bs.current = i),
      (W = o),
      ge !== null ? (t = 0) : ((_e = null), (Te = 0), (t = be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = xu(e)), o !== 0 && ((n = o), (t = Yu(e, o)))), t === 1)
    )
      throw ((r = Qo), Nr(e, 0), ir(e, n), Ye(e, de()), r);
    if (t === 6) ir(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !ab(o) &&
          ((t = Fs(e, n)),
          t === 2 && ((i = xu(e)), i !== 0 && ((n = i), (t = Yu(e, i)))),
          t === 1))
      )
        throw ((r = Qo), Nr(e, 0), ir(e, n), Ye(e, de()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Rr(e, We, Bt);
          break;
        case 3:
          if (
            (ir(e, n), (n & 130023424) === n && ((t = ud + 500 - de()), 10 < t))
          ) {
            if (Cs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Eu(Rr.bind(null, e, We, Bt), t);
            break;
          }
          Rr(e, We, Bt);
          break;
        case 4:
          if ((ir(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var s = 31 - kt(n);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (n &= ~i);
          }
          if (
            ((n = o),
            (n = de() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * sb(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Eu(Rr.bind(null, e, We, Bt), n);
            break;
          }
          Rr(e, We, Bt);
          break;
        case 5:
          Rr(e, We, Bt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ye(e, de()), e.callbackNode === r ? yg.bind(null, e) : null;
}
function Yu(e, t) {
  var r = ko;
  return (
    e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256),
    (e = Fs(e, t)),
    e !== 2 && ((t = We), (We = r), t !== null && Xu(t)),
    e
  );
}
function Xu(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function ab(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ir(e, t) {
  for (
    t &= ~ld,
      t &= ~ga,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - kt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function hp(e) {
  if (W & 6) throw Error(E(327));
  En();
  var t = Cs(e, 0);
  if (!(t & 1)) return Ye(e, de()), null;
  var r = Fs(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = xu(e);
    n !== 0 && ((t = n), (r = Yu(e, n)));
  }
  if (r === 1) throw ((r = Qo), Nr(e, 0), ir(e, t), Ye(e, de()), r);
  if (r === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rr(e, We, Bt),
    Ye(e, de()),
    null
  );
}
function cd(e, t) {
  var r = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = r), W === 0 && ((Vn = de() + 500), fa && Cr());
  }
}
function Yr(e) {
  ar !== null && ar.tag === 0 && !(W & 6) && En();
  var t = W;
  W |= 1;
  var r = pt.transition,
    n = Q;
  try {
    if (((pt.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = n), (pt.transition = r), (W = t), !(W & 6) && Cr();
  }
}
function dd() {
  (qe = vn.current), te(vn);
}
function Nr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Dx(r)), ge !== null))
    for (r = ge.return; r !== null; ) {
      var n = r;
      switch ((Uc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Ts();
          break;
        case 3:
          In(), te(Ue), te(Ie), ed();
          break;
        case 5:
          Jc(n);
          break;
        case 4:
          In();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Qc(n.type._context);
          break;
        case 22:
        case 23:
          dd();
      }
      r = r.return;
    }
  if (
    ((_e = e),
    (ge = e = mr(e.current, null)),
    (Te = qe = t),
    (be = 0),
    (Qo = null),
    (ld = ga = Gr = 0),
    (We = ko = null),
    Lr !== null)
  ) {
    for (t = 0; t < Lr.length; t++)
      if (((r = Lr[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (n.next = s);
        }
        r.pending = n;
      }
    Lr = null;
  }
  return e;
}
function vg(e, t) {
  do {
    var r = ge;
    try {
      if ((Xc(), (is.current = Vs), Ds)) {
        for (var n = se.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Ds = !1;
      }
      if (
        ((Ur = 0),
        (Ce = ve = se = null),
        (bo = !1),
        (Go = 0),
        (ad.current = null),
        r === null || r.return === null)
      ) {
        (be = 1), (Qo = t), (ge = null);
        break;
      }
      e: {
        var i = e,
          s = r.return,
          a = r,
          l = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = tp(s);
          if (g !== null) {
            (g.flags &= -257),
              rp(g, s, a, i, t),
              g.mode & 1 && ep(i, u, t),
              (t = g),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ep(i, u, t), fd();
              break e;
            }
            l = Error(E(426));
          }
        } else if (re && a.mode & 1) {
          var w = tp(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              rp(w, s, a, i, t),
              Gc(Dn(l, a));
            break e;
          }
        }
        (i = l = Dn(l, a)),
          be !== 4 && (be = 2),
          ko === null ? (ko = [i]) : ko.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = tg(i, l, t);
              Xf(i, p);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (pr === null || !pr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = rg(i, a, t);
                Xf(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sg(r);
    } catch (C) {
      (t = C), ge === r && r !== null && (ge = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function xg() {
  var e = Bs.current;
  return (Bs.current = Vs), e === null ? Vs : e;
}
function fd() {
  (be === 0 || be === 3 || be === 2) && (be = 4),
    _e === null || (!(Gr & 268435455) && !(ga & 268435455)) || ir(_e, Te);
}
function Fs(e, t) {
  var r = W;
  W |= 2;
  var n = xg();
  (_e !== e || Te !== t) && ((Bt = null), Nr(e, t));
  do
    try {
      lb();
      break;
    } catch (o) {
      vg(e, o);
    }
  while (!0);
  if ((Xc(), (W = r), (Bs.current = n), ge !== null)) throw Error(E(261));
  return (_e = null), (Te = 0), be;
}
function lb() {
  for (; ge !== null; ) bg(ge);
}
function ub() {
  for (; ge !== null && !j1(); ) bg(ge);
}
function bg(e) {
  var t = wg(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sg(e) : (ge = t),
    (ad.current = null);
}
function Sg(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = rb(r, t)), r !== null)) {
        (r.flags &= 32767), (ge = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (be = 6), (ge = null);
        return;
      }
    } else if (((r = tb(r, t, qe)), r !== null)) {
      ge = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function Rr(e, t, r) {
  var n = Q,
    o = pt.transition;
  try {
    (pt.transition = null), (Q = 1), cb(e, t, r, n);
  } finally {
    (pt.transition = o), (Q = n);
  }
  return null;
}
function cb(e, t, r, n) {
  do En();
  while (ar !== null);
  if (W & 6) throw Error(E(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (H1(e, i),
    e === _e && ((ge = _e = null), (Te = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ni ||
      ((Ni = !0),
      Cg(ws, function () {
        return En(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var s = Q;
    Q = 1;
    var a = W;
    (W |= 4),
      (ad.current = null),
      ob(e, r),
      mg(r, e),
      Ax(_u),
      (_s = !!Cu),
      (_u = Cu = null),
      (e.current = r),
      ib(r),
      L1(),
      (W = a),
      (Q = s),
      (pt.transition = i);
  } else e.current = r;
  if (
    (Ni && ((Ni = !1), (ar = e), (Os = o)),
    (i = e.pendingLanes),
    i === 0 && (pr = null),
    V1(r.stateNode),
    Ye(e, de()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ns) throw ((Ns = !1), (e = Uu), (Uu = null), e);
  return (
    Os & 1 && e.tag !== 0 && En(),
    (i = e.pendingLanes),
    i & 1 ? (e === Gu ? wo++ : ((wo = 0), (Gu = e))) : (wo = 0),
    Cr(),
    null
  );
}
function En() {
  if (ar !== null) {
    var e = t0(Os),
      t = pt.transition,
      r = Q;
    try {
      if (((pt.transition = null), (Q = 16 > e ? 16 : e), ar === null))
        var n = !1;
      else {
        if (((e = ar), (ar = null), (Os = 0), W & 6)) throw Error(E(331));
        var o = W;
        for (W |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      So(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling,
                        g = c.return;
                      if ((fg(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (j = f);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    So(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (j = p);
                break e;
              }
              j = i.return;
            }
        }
        var m = e.current;
        for (j = m; j !== null; ) {
          s = j;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (j = y);
          else
            e: for (s = m; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ma(9, a);
                  }
                } catch (C) {
                  le(a, a.return, C);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (j = k);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((W = o), Cr(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(aa, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (Q = r), (pt.transition = t);
    }
  }
  return !1;
}
function mp(e, t, r) {
  (t = Dn(r, t)),
    (t = tg(e, t, 1)),
    (e = fr(e, t, 1)),
    (t = Ne()),
    e !== null && (ui(e, 1, t), Ye(e, t));
}
function le(e, t, r) {
  if (e.tag === 3) mp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (pr === null || !pr.has(n)))
        ) {
          (e = Dn(r, e)),
            (e = rg(t, e, 1)),
            (t = fr(t, e, 1)),
            (e = Ne()),
            t !== null && (ui(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function db(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & r),
    _e === e &&
      (Te & r) === r &&
      (be === 4 || (be === 3 && (Te & 130023424) === Te && 500 > de() - ud)
        ? Nr(e, 0)
        : (ld |= r)),
    Ye(e, t);
}
function kg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ai), (Ai <<= 1), !(Ai & 130023424) && (Ai = 4194304))
      : (t = 1));
  var r = Ne();
  (e = Qt(e, t)), e !== null && (ui(e, t, r), Ye(e, r));
}
function fb(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), kg(e, r);
}
function pb(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), kg(e, r);
}
var wg;
wg = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) He = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (He = !1), eb(e, t, r);
      He = !!(e.flags & 131072);
    }
  else (He = !1), re && t.flags & 1048576 && E0(t, $s, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      as(e, t), (e = t.pendingProps);
      var o = Mn(t, Ie.current);
      Pn(t, r), (o = rd(null, t, n, e, o, r));
      var i = nd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(n) ? ((i = !0), As(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            qc(t),
            (o.updater = ha),
            (t.stateNode = o),
            (o._reactInternals = t),
            ju(t, n, e, r),
            (t = Du(null, t, n, !0, i, r)))
          : ((t.tag = 0), re && i && Hc(t), Be(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (as(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = mb(n)),
          (e = vt(n, e)),
          o)
        ) {
          case 0:
            t = Iu(null, t, n, e, r);
            break e;
          case 1:
            t = ip(null, t, n, e, r);
            break e;
          case 11:
            t = np(null, t, n, e, r);
            break e;
          case 14:
            t = op(null, t, n, vt(n.type, e), r);
            break e;
        }
        throw Error(E(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        Iu(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        ip(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((sg(t), e === null)) throw Error(E(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          M0(e, t),
          Ls(t, n, null, r);
        var s = t.memoizedState;
        if (((n = s.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Dn(Error(E(423)), t)), (t = sp(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = Dn(Error(E(424)), t)), (t = sp(e, t, n, r, o));
            break e;
          } else
            for (
              Ze = dr(t.stateNode.containerInfo.firstChild),
                et = t,
                re = !0,
                bt = null,
                r = R0(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((jn(), n === o)) {
            t = Kt(e, t, r);
            break e;
          }
          Be(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        j0(t),
        e === null && Ru(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Pu(n, o) ? (s = null) : i !== null && Pu(n, i) && (t.flags |= 32),
        ig(e, t),
        Be(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && Ru(t), null;
    case 13:
      return ag(e, t, r);
    case 4:
      return (
        Zc(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ln(t, null, n, r)) : Be(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        np(e, t, n, o, r)
      );
    case 7:
      return Be(e, t, t.pendingProps, r), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Z(Ms, n._currentValue),
          (n._currentValue = s),
          i !== null)
        )
          if (_t(i.value, s)) {
            if (i.children === o.children && !Ue.current) {
              t = Kt(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = Ht(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      $u(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= r),
                  (a = s.alternate),
                  a !== null && (a.lanes |= r),
                  $u(s, r, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Be(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Pn(t, r),
        (o = ht(o)),
        (n = n(o)),
        (t.flags |= 1),
        Be(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = vt(n, t.pendingProps)),
        (o = vt(n.type, o)),
        op(e, t, n, o, r)
      );
    case 15:
      return ng(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        as(e, t),
        (t.tag = 1),
        Ge(n) ? ((e = !0), As(t)) : (e = !1),
        Pn(t, r),
        eg(t, n, o),
        ju(t, n, o, r),
        Du(null, t, n, !0, e, r)
      );
    case 19:
      return lg(e, t, r);
    case 22:
      return og(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Cg(e, t) {
  return qm(e, t);
}
function hb(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, r, n) {
  return new hb(e, t, r, n);
}
function pd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mb(e) {
  if (typeof e == "function") return pd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $c)) return 11;
    if (e === Mc) return 14;
  }
  return 2;
}
function mr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = dt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function cs(e, t, r, n, o, i) {
  var s = 2;
  if (((n = e), typeof e == "function")) pd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ln:
        return Or(r.children, o, i, t);
      case Rc:
        (s = 8), (o |= 8);
        break;
      case ou:
        return (
          (e = dt(12, r, t, o | 2)), (e.elementType = ou), (e.lanes = i), e
        );
      case iu:
        return (e = dt(13, r, t, o)), (e.elementType = iu), (e.lanes = i), e;
      case su:
        return (e = dt(19, r, t, o)), (e.elementType = su), (e.lanes = i), e;
      case jm:
        return ya(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $m:
              s = 10;
              break e;
            case Mm:
              s = 9;
              break e;
            case $c:
              s = 11;
              break e;
            case Mc:
              s = 14;
              break e;
            case tr:
              (s = 16), (n = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dt(s, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Or(e, t, r, n) {
  return (e = dt(7, e, n, t)), (e.lanes = r), e;
}
function ya(e, t, r, n) {
  return (
    (e = dt(22, e, n, t)),
    (e.elementType = jm),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Tl(e, t, r) {
  return (e = dt(6, e, null, t)), (e.lanes = r), e;
}
function Al(e, t, r) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gb(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cl(0)),
    (this.expirationTimes = cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function hd(e, t, r, n, o, i, s, a, l) {
  return (
    (e = new gb(e, t, r, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qc(i),
    e
  );
}
function yb(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function _g(e) {
  if (!e) return vr;
  e = e._reactInternals;
  e: {
    if (Kr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ge(r)) return _0(e, r, t);
  }
  return t;
}
function Pg(e, t, r, n, o, i, s, a, l) {
  return (
    (e = hd(r, n, !0, e, o, i, s, a, l)),
    (e.context = _g(null)),
    (r = e.current),
    (n = Ne()),
    (o = hr(r)),
    (i = Ht(n, o)),
    (i.callback = t ?? null),
    fr(r, i, o),
    (e.current.lanes = o),
    ui(e, o, n),
    Ye(e, n),
    e
  );
}
function va(e, t, r, n) {
  var o = t.current,
    i = Ne(),
    s = hr(o);
  return (
    (r = _g(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Ht(i, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = fr(o, t, s)),
    e !== null && (wt(e, o, s, i), os(e, o, s)),
    s
  );
}
function Ws(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function md(e, t) {
  gp(e, t), (e = e.alternate) && gp(e, t);
}
function vb() {
  return null;
}
var Eg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gd(e) {
  this._internalRoot = e;
}
xa.prototype.render = gd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  va(e, t, null, null);
};
xa.prototype.unmount = gd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yr(function () {
      va(null, e, null, null);
    }),
      (t[Xt] = null);
  }
};
function xa(e) {
  this._internalRoot = e;
}
xa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = o0();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < or.length && t !== 0 && t < or[r].priority; r++);
    or.splice(r, 0, e), r === 0 && s0(e);
  }
};
function yd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ba(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yp() {}
function xb(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = Ws(s);
        i.call(u);
      };
    }
    var s = Pg(t, n, e, 0, null, !1, !1, "", yp);
    return (
      (e._reactRootContainer = s),
      (e[Xt] = s.current),
      Oo(e.nodeType === 8 ? e.parentNode : e),
      Yr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = Ws(l);
      a.call(u);
    };
  }
  var l = hd(e, 0, !1, null, null, !1, !1, "", yp);
  return (
    (e._reactRootContainer = l),
    (e[Xt] = l.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    Yr(function () {
      va(t, l, r, n);
    }),
    l
  );
}
function Sa(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ws(s);
        a.call(l);
      };
    }
    va(t, s, e, o);
  } else s = xb(r, t, e, o, n);
  return Ws(s);
}
r0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = uo(t.pendingLanes);
        r !== 0 &&
          (Ic(t, r | 1), Ye(t, de()), !(W & 6) && ((Vn = de() + 500), Cr()));
      }
      break;
    case 13:
      Yr(function () {
        var n = Qt(e, 1);
        if (n !== null) {
          var o = Ne();
          wt(n, e, 1, o);
        }
      }),
        md(e, 1);
  }
};
Dc = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var r = Ne();
      wt(t, e, 134217728, r);
    }
    md(e, 134217728);
  }
};
n0 = function (e) {
  if (e.tag === 13) {
    var t = hr(e),
      r = Qt(e, t);
    if (r !== null) {
      var n = Ne();
      wt(r, e, t, n);
    }
    md(e, t);
  }
};
o0 = function () {
  return Q;
};
i0 = function (e, t) {
  var r = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = r;
  }
};
gu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((uu(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = da(n);
            if (!o) throw Error(E(90));
            Im(n), uu(n, o);
          }
        }
      }
      break;
    case "textarea":
      Vm(e, r);
      break;
    case "select":
      (t = r.value), t != null && kn(e, !!r.multiple, t, !1);
  }
};
Um = cd;
Gm = Yr;
var bb = { usingClientEntryPoint: !1, Events: [di, fn, da, Wm, Hm, cd] },
  no = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Sb = {
    bundleType: no.bundleType,
    version: no.version,
    rendererPackageName: no.rendererPackageName,
    rendererConfig: no.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: no.findFiberByHostInstance || vb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oi.isDisabled && Oi.supportsFiber)
    try {
      (aa = Oi.inject(Sb)), (jt = Oi);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bb;
ot.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yd(t)) throw Error(E(200));
  return yb(e, t, null, r);
};
ot.createRoot = function (e, t) {
  if (!yd(e)) throw Error(E(299));
  var r = !1,
    n = "",
    o = Eg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = hd(e, 1, !1, null, null, r, !1, n, o)),
    (e[Xt] = t.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    new gd(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Qm(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return Yr(e);
};
ot.hydrate = function (e, t, r) {
  if (!ba(t)) throw Error(E(200));
  return Sa(null, e, t, !0, r);
};
ot.hydrateRoot = function (e, t, r) {
  if (!yd(e)) throw Error(E(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    s = Eg;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = Pg(t, null, e, 1, r ?? null, o, !1, i, s)),
    (e[Xt] = t.current),
    Oo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new xa(t);
};
ot.render = function (e, t, r) {
  if (!ba(t)) throw Error(E(200));
  return Sa(null, e, t, !1, r);
};
ot.unmountComponentAtNode = function (e) {
  if (!ba(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Yr(function () {
        Sa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xt] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = cd;
ot.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ba(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Sa(e, t, r, !1, n);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function zg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg);
    } catch (e) {
      console.error(e);
    }
}
zg(), (zm.exports = ot);
var vd = zm.exports,
  vp = vd;
(ru.createRoot = vp.createRoot), (ru.hydrateRoot = vp.hydrateRoot);
var zn = (e) => typeof e == "number",
  pi = (e) => Object.prototype.toString.call(e) === "[object String]",
  ka = (e) => typeof e > "u" && e === void 0,
  Se = (e) =>
    e !== null && (typeof e == "object" || typeof e == "function") && !O(e),
  O = (e) => Array.isArray(e),
  Xr = (e) => typeof e == "function",
  kb = (e) => /[0-9].*[px|rem|em|%|vw|vh]$/.test(e);
function Dr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class wb extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var fo = wb;
function Ko(e) {
  if (typeof e != "string") throw new fo(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = Rb.test(e) ? Pb(e) : e;
  const r = Eb.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(qo(a, 2), 16)),
      parseInt(qo(s[3] || "f", 2), 16) / 255,
    ];
  }
  const n = zb.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || "ff", 16) / 255,
    ];
  }
  const o = Tb.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || "1"),
    ];
  }
  const i = Ab.exec(t);
  if (i) {
    const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Dr(0, 100, a) !== a) throw new fo(e);
    if (Dr(0, 100, l) !== l) throw new fo(e);
    return [...$b(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new fo(e);
}
function Cb(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const xp = (e) => parseInt(e.replace(/_/g, ""), 36),
  _b =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = xp(t.substring(0, 3)),
          n = xp(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - n.length; i++) o += "0";
        return (e[r] = `${o}${n}`), e;
      }, {});
function Pb(e) {
  const t = e.toLowerCase().trim(),
    r = _b[Cb(t)];
  if (!r) throw new fo(e);
  return `#${r}`;
}
const qo = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  Eb = new RegExp(`^#${qo("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  zb = new RegExp(`^#${qo("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  Tb = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${qo(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i",
  ),
  Ab =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  Rb = /^[a-z]+$/i,
  bp = (e) => Math.round(e * 255),
  $b = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(bp);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      s = i * (1 - Math.abs((o % 2) - 1));
    let a = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((a = i), (l = s))
      : o >= 1 && o < 2
        ? ((a = s), (l = i))
        : o >= 2 && o < 3
          ? ((l = i), (u = s))
          : o >= 3 && o < 4
            ? ((l = s), (u = i))
            : o >= 4 && o < 5
              ? ((a = s), (u = i))
              : o >= 5 && o < 6 && ((a = i), (u = s));
    const c = n - i / 2,
      d = a + c,
      f = l + c,
      g = u + c;
    return [d, f, g].map(bp);
  };
function Tg(e, t, r, n) {
  return `rgba(${Dr(0, 255, e).toFixed()}, ${Dr(0, 255, t).toFixed()}, ${Dr(0, 255, r).toFixed()}, ${parseFloat(Dr(0, 1, n).toFixed(3))})`;
}
function Ag(e, t, r) {
  const n = (C, P) => (P === 3 ? C : C / 255),
    [o, i, s, a] = Ko(e).map(n),
    [l, u, c, d] = Ko(t).map(n),
    f = d - a,
    g = r * 2 - 1,
    v = ((g * f === -1 ? g : g + f / (1 + g * f)) + 1) / 2,
    w = 1 - v,
    p = (o * w + l * v) * 255,
    m = (i * w + u * v) * 255,
    y = (s * w + c * v) * 255,
    k = d * r + a * (1 - r);
  return Tg(p, m, y, k);
}
function Mb(e, t) {
  const [r, n, o, i] = Ko(e);
  return Tg(r, n, o, i - t);
}
function Co(e) {
  const [t, r, n, o] = Ko(e);
  let i = (s) => {
    const a = Dr(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
var Sp = () => {},
  Je = (e, ...t) => (Xr(e) ? e(...t) : e),
  Hs =
    (...e) =>
    (t, ...r) => {
      e.some(
        (n) => (
          n == null || n(t, ...r), t == null ? void 0 : t.defaultPrevented
        ),
      );
    },
  Yn = ({
    strict: e = !0,
    errorMessage:
      t = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r,
    defaultValue: n,
  } = {}) => {
    const o = S.createContext(n);
    o.displayName = r;
    const i = () => {
      var s;
      const a = S.useContext(o);
      if (!a && e) {
        const l = new Error(t);
        throw (
          ((l.name = "ContextError"),
          (s = Error.captureStackTrace) == null || s.call(Error, l, i),
          l)
        );
      }
      return a;
    };
    return [o.Provider, i, o];
  },
  Us =
    globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  wa = (e) => S.Children.toArray(e).filter((t) => S.isValidElement(t)),
  jb = (e) => S.isValidElement(e) || pi(e) || zn(e),
  Rl = (e, ...t) =>
    e.find((r) => t.some((n) => r.type === n))
      ? e.sort((r, n) =>
          t.some((o) => r.type === o)
            ? -1
            : t.some((o) => n.type === o)
              ? 1
              : 0,
        )
      : [void 0, ...e],
  H = (...e) => e.filter(Boolean).join(" "),
  on = (e, t) => {
    if (e != null) {
      if (typeof e == "function") {
        e(t);
        return;
      }
      try {
        e.current = t;
      } catch {
        throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
      }
    }
  },
  Rg =
    (...e) =>
    (t) => {
      e.forEach((r) => {
        on(r, t);
      });
    },
  Lb = (e, t = []) => {
    const r = S.useRef(e);
    return (
      S.useEffect(() => {
        r.current = e;
      }),
      S.useCallback((...n) => {
        var o;
        return (o = r.current) == null ? void 0 : o.call(r, ...n);
      }, t)
    );
  },
  Qu = (e, t) => {
    const r = S.useRef(!1),
      n = S.useRef(!1);
    S.useEffect(() => {
      if (r.current && n.current) return e();
      n.current = !0;
    }, t),
      S.useEffect(
        () => (
          (r.current = !0),
          () => {
            r.current = !1;
          }
        ),
        [],
      );
  },
  Ib = 0,
  Db = (e) => `${e}-${++Ib}-${new Date().getTime()}`,
  $g = () =>
    !!(typeof window < "u" && window.document && window.document.createElement),
  Vb = (e) => {
    if (zn(e)) return e;
    if (ka(e)) return 0;
    if (e.includes("px")) return parseFloat(e);
    const t = $g();
    let r = 16;
    if (t) {
      const n = window.getComputedStyle(document.documentElement),
        o = parseFloat(n.fontSize);
      isNaN(o) || (r = o);
    }
    return parseFloat(e) * r;
  },
  ft = (e) => (e ? "" : void 0),
  Fi = (e) => (e ? !0 : void 0),
  Bb = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  I = (e) => e === "gray" || e === "neutral",
  fe = (e) => e === "yellow" || e === "cyan" || e === "lime",
  $ =
    (e, t = "#000000") =>
    (r = {}, n) => {
      var o, i, s;
      const [a, l] = e.split("."),
        [, u] =
          (s = Object.entries(
            (i = (o = r.semantics) == null ? void 0 : o.colorSchemes) != null
              ? i
              : {},
          ).find(([d]) => a === d)) != null
            ? s
            : [];
      u && (e = `${u}.${l}`);
      const c = L(r, `colors.${e}`, e);
      try {
        return O(c) ? Co(String(n !== "dark" ? c[0] : c[1])) : Co(String(c));
      } catch {
        try {
          return Co(t);
        } catch {
          return "#000000";
        }
      }
    },
  he = (e, t) => (r, n) => {
    const o = $(e, e)(r, n);
    return Co(Ag(o, "#fff", t / 100));
  },
  q = (e, t) => (r, n) => {
    const o = $(e, e)(r, n);
    return Co(Ag(o, "#000", t / 100));
  },
  xe = (e, t) => (r, n) => {
    const o = $(e, e)(r, n);
    return Mb(o, 1 - t);
  },
  Nb = ({ string: e, colors: t } = {}) => {
    const r = Ob();
    return e && t ? Wb(e, t) : e && !t ? Fb(e) : t && !e ? Hb(t) : r;
  },
  Ob = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")}`,
  Fb = (e) => {
    let t = 0;
    if (e.length === 0) return t.toString();
    for (let n = 0; n < e.length; n += 1)
      (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
    let r = "#";
    for (let n = 0; n < 3; n += 1) {
      const o = (t >> (n * 8)) & 255;
      r += `00${o.toString(16)}`.substr(-2);
    }
    return r;
  },
  Wb = (e, t) => {
    let r = 0;
    if (e.length === 0) return t[0];
    for (let n = 0; n < e.length; n += 1)
      (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
    return (r = ((r % t.length) + t.length) % t.length), t[r];
  },
  Hb = (e) => e[Math.floor(Math.random() * e.length)],
  Ub = (e) => {
    const [t, r, n] = Ko(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  Gb = (e) => (t, r) => {
    const n = t ? $(e)(t, r) : e;
    return Ub(n) < 128 ? "dark" : "light";
  },
  Yb = (e) => (t, r) => Gb(e)(t, r) === "light",
  Mg = (e, t) => {
    if (!t.length) return e;
    const [r, ...n] = t;
    if (n.length === 0 && r in e) {
      const { [r]: o, ...i } = e;
      return i;
    }
    return e[r] && Se(e[r]) ? { ...e, [r]: Mg(e[r], n) } : e;
  },
  hi = (e, t) =>
    t.reduce((r, n) => {
      const o = pi(n) ? n.split(".") : [];
      return Mg(r, o);
    }, e),
  Ku = (e, t, r = "__fallback") =>
    t.reduce((n, o) => {
      const i = pi(o) ? o.split(".") : [];
      if (!i.length) return n;
      const s = L(e, o, r);
      return (
        s === r ||
          (n = ue(
            n,
            i.reduceRight((a, l) => ({ [l]: l === i.at(-1) ? s : a }), {}),
          )),
        n
      );
    }, {}),
  jg = (e, t) => {
    const r = {};
    return (
      Object.entries(e).forEach(([n, o]) => {
        t(n, o, e) && (r[n] = o);
      }),
      r
    );
  },
  Ca = (e) => jg(e, (t, r) => r != null),
  ue = (e, t, r = !1) => {
    let n = Object.assign({}, e);
    if (Se(t))
      if (Se(e))
        for (const [o, i] of Object.entries(t)) {
          const s = e[o];
          r && O(i) && O(s)
            ? (n[o] = s.concat(...i))
            : !Xr(i) && Se(i) && e.hasOwnProperty(o)
              ? (n[o] = ue(s, i, r))
              : Object.assign(n, { [o]: i });
        }
      else n = t;
    return n;
  },
  qu = (e, t = 1 / 0, r = []) =>
    (!Se(e) && !O(e)) || !t
      ? e
      : Object.entries(e).reduce(
          (n, [o, i]) => (
            Se(i) && !Object.keys(i).some((s) => r.includes(s))
              ? Object.entries(qu(i, t - 1, r)).forEach(([s, a]) => {
                  n[`${o}.${s}`] = a;
                })
              : (n[o] = i),
            n
          ),
          {},
        ),
  Xb = (e) => e.reduce((t, [r, n]) => ((t[r] = n), t), {}),
  Lg = (e) => Object.keys(e),
  po = (e, t) =>
    O(e)
      ? e.map(t)
      : Se(e)
        ? Object.entries(e).reduce((r, [n, o]) => ((r[n] = t(o)), r), {})
        : t(e),
  Qb = (e, t, r, n) => {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
    return e === void 0 ? r : e;
  },
  Kb = (e) => {
    const t = new WeakMap();
    return (n, o, i, s) => {
      if (typeof n > "u") return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const a = t.get(n);
      if (a.has(o)) return a.get(o);
      const l = e(n, o, i, s);
      return a.set(o, l), l;
    };
  },
  L = Kb(Qb),
  qb = (e, ...t) => {
    if (e == null)
      throw new TypeError("Cannot convert undefined or null to object");
    const r = { ...e };
    for (const n of t)
      if (n != null)
        for (const o in n)
          Object.prototype.hasOwnProperty.call(n, o) &&
            (o in r && delete r[o], (r[o] = n[o]));
    return r;
  },
  Zb = (e) => e.default || e,
  Jb = (e, t = "") => e.replace(/\s+/g, t),
  eS = (e) => {
    switch (e) {
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      case "left":
        return "right";
      case "right":
        return "left";
      case "start":
        return "end";
      case "end":
        return "start";
      case "x":
        return "y";
      case "y":
        return "x";
      case "enter":
        return "exit";
      case "exit":
        return "enter";
      case "vertical":
        return "horizontal";
      case "horizontal":
        return "vertical";
      case "up":
        return "down";
      case "down":
        return "up";
      case "block":
        return "inline";
      case "inline":
        return "block";
      default:
        return e;
    }
  },
  kp = (e) =>
    e
      .toLowerCase()
      .replace(/[_-](.)/g, (t, r) => r.toUpperCase())
      .replace(/^(.)/, (t, r) => r.toUpperCase()),
  tS = (e) =>
    e
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .toLowerCase()
      .replace(/^-/, ""),
  _a = (e, ...t) => t.join(` ${e} `).replace(/calc/g, ""),
  wp = (...e) => `calc(${_a("+", ...e)})`,
  Cp = (...e) => `calc(${_a("-", ...e)})`,
  Zu = (...e) => `calc(${_a("*", ...e)})`,
  _p = (...e) => `calc(${_a("/", ...e)})`,
  Pp = (e) =>
    e != null && !isNaN(parseFloat(e.toString()))
      ? String(e).startsWith("-")
        ? String(e).slice(1)
        : `-${e}`
      : Zu(e, -1),
  St = Object.assign(
    (e) => ({
      add: (...t) => St(wp(e, ...t)),
      subtract: (...t) => St(Cp(e, ...t)),
      multiply: (...t) => St(Zu(e, ...t)),
      divide: (...t) => St(_p(e, ...t)),
      negate: () => St(Pp(e)),
      toString: () => e.toString(),
    }),
    { add: wp, subtract: Cp, multiply: Zu, divide: _p, negate: Pp },
  ),
  rS = { getDocument: () => document, getWindow: () => window },
  nS = S.createContext(rS),
  Ig = ({ children: e, environment: t, disabled: r }) => {
    const n = S.useRef(null),
      o = S.useMemo(
        () =>
          t || {
            getDocument: () => {
              var s, a;
              return (a = (s = n.current) == null ? void 0 : s.ownerDocument) !=
                null
                ? a
                : document;
            },
            getWindow: () => {
              var s, a;
              return (a =
                (s = n.current) == null
                  ? void 0
                  : s.ownerDocument.defaultView) != null
                ? a
                : window;
            },
          },
        [t],
      ),
      i = !r || !t;
    return b.jsxs(nS.Provider, {
      value: o,
      children: [
        e,
        i ? b.jsx("span", { id: "__ui_dev", hidden: !0, ref: n }) : null,
      ],
    });
  };
Ig.displayName = "EnvironmentProvider";
function oS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function iS(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Dg = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(iS(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = oS(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Me = "-ms-",
  Gs = "-moz-",
  Y = "-webkit-",
  Vg = "comm",
  xd = "rule",
  bd = "decl",
  sS = "@import",
  Bg = "@keyframes",
  aS = "@layer",
  lS = Math.abs,
  Pa = String.fromCharCode,
  uS = Object.assign;
function cS(e, t) {
  return ze(e, 0) ^ 45
    ? (((((((t << 2) ^ ze(e, 0)) << 2) ^ ze(e, 1)) << 2) ^ ze(e, 2)) << 2) ^
        ze(e, 3)
    : 0;
}
function Ng(e) {
  return e.trim();
}
function dS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function Ju(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zo(e, t, r) {
  return e.slice(t, r);
}
function At(e) {
  return e.length;
}
function Sd(e) {
  return e.length;
}
function Wi(e, t) {
  return t.push(e), e;
}
function fS(e, t) {
  return e.map(t).join("");
}
var Ea = 1,
  Bn = 1,
  Og = 0,
  Xe = 0,
  me = 0,
  Xn = "";
function za(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Ea,
    column: Bn,
    length: s,
    return: "",
  };
}
function oo(e, t) {
  return uS(za("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pS() {
  return me;
}
function hS() {
  return (
    (me = Xe > 0 ? ze(Xn, --Xe) : 0), Bn--, me === 10 && ((Bn = 1), Ea--), me
  );
}
function tt() {
  return (
    (me = Xe < Og ? ze(Xn, Xe++) : 0), Bn++, me === 10 && ((Bn = 1), Ea++), me
  );
}
function It() {
  return ze(Xn, Xe);
}
function ds() {
  return Xe;
}
function mi(e, t) {
  return Zo(Xn, e, t);
}
function Jo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fg(e) {
  return (Ea = Bn = 1), (Og = At((Xn = e))), (Xe = 0), [];
}
function Wg(e) {
  return (Xn = ""), e;
}
function fs(e) {
  return Ng(mi(Xe - 1, ec(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mS(e) {
  for (; (me = It()) && me < 33; ) tt();
  return Jo(e) > 2 || Jo(me) > 3 ? "" : " ";
}
function gS(e, t) {
  for (
    ;
    --t &&
    tt() &&
    !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97));

  );
  return mi(e, ds() + (t < 6 && It() == 32 && tt() == 32));
}
function ec(e) {
  for (; tt(); )
    switch (me) {
      case e:
        return Xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ec(me);
        break;
      case 40:
        e === 41 && ec(e);
        break;
      case 92:
        tt();
        break;
    }
  return Xe;
}
function yS(e, t) {
  for (; tt() && e + me !== 57; ) if (e + me === 84 && It() === 47) break;
  return "/*" + mi(t, Xe - 1) + "*" + Pa(e === 47 ? e : tt());
}
function vS(e) {
  for (; !Jo(It()); ) tt();
  return mi(e, Xe);
}
function xS(e) {
  return Wg(ps("", null, null, null, [""], (e = Fg(e)), 0, [0], e));
}
function ps(e, t, r, n, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      g = 0,
      x = 0,
      v = 1,
      w = 1,
      p = 1,
      m = 0,
      y = "",
      k = o,
      C = i,
      P = n,
      _ = y;
    w;

  )
    switch (((x = m), (m = tt()))) {
      case 40:
        if (x != 108 && ze(_, d - 1) == 58) {
          Ju((_ += X(fs(m), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += fs(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += mS(x);
        break;
      case 92:
        _ += gS(ds() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            Wi(bS(yS(tt(), ds()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * v:
        a[u++] = At(_) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            p == -1 && (_ = X(_, /\f/g, "")),
              g > 0 &&
                At(_) - d &&
                Wi(
                  g > 32
                    ? zp(_ + ";", n, r, d - 1)
                    : zp(X(_, " ", "") + ";", n, r, d - 2),
                  l,
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (Wi((P = Ep(_, t, r, u, c, o, a, y, (k = []), (C = []), d)), i),
              m === 123)
            )
              if (c === 0) ps(_, t, P, P, k, i, d, a, C);
              else
                switch (f === 99 && ze(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ps(
                      e,
                      P,
                      P,
                      n && Wi(Ep(e, P, P, 0, 0, o, a, y, o, (k = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      n ? k : C,
                    );
                    break;
                  default:
                    ps(_, P, P, P, [""], C, 0, a, C);
                }
        }
        (u = c = g = 0), (v = p = 1), (y = _ = ""), (d = s);
        break;
      case 58:
        (d = 1 + At(_)), (g = x);
      default:
        if (v < 1) {
          if (m == 123) --v;
          else if (m == 125 && v++ == 0 && hS() == 125) continue;
        }
        switch (((_ += Pa(m)), m * v)) {
          case 38:
            p = c > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (a[u++] = (At(_) - 1) * p), (p = 1);
            break;
          case 64:
            It() === 45 && (_ += fs(tt())),
              (f = It()),
              (c = d = At((y = _ += vS(ds())))),
              m++;
            break;
          case 45:
            x === 45 && At(_) == 2 && (v = 0);
        }
    }
  return i;
}
function Ep(e, t, r, n, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], g = Sd(f), x = 0, v = 0, w = 0;
    x < n;
    ++x
  )
    for (var p = 0, m = Zo(e, d + 1, (d = lS((v = s[x])))), y = e; p < g; ++p)
      (y = Ng(v > 0 ? f[p] + " " + m : X(m, /&\f/g, f[p]))) && (l[w++] = y);
  return za(e, t, r, o === 0 ? xd : a, l, u, c);
}
function bS(e, t, r) {
  return za(e, t, r, Vg, Pa(pS()), Zo(e, 2, -2), 0);
}
function zp(e, t, r, n) {
  return za(e, t, r, bd, Zo(e, 0, n), Zo(e, n + 1, -1), n);
}
function Tn(e, t) {
  for (var r = "", n = Sd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function SS(e, t, r, n) {
  switch (e.type) {
    case aS:
      if (e.children.length) break;
    case sS:
    case bd:
      return (e.return = e.return || e.value);
    case Vg:
      return "";
    case Bg:
      return (e.return = e.value + "{" + Tn(e.children, n) + "}");
    case xd:
      e.value = e.props.join(",");
  }
  return At((r = Tn(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function kS(e) {
  var t = Sd(e);
  return function (r, n, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](r, n, o, i) || "";
    return s;
  };
}
function wS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Tp = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Hg(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var CS = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = It()), o === 38 && i === 12 && (r[n] = 1), !Jo(i);

    )
      tt();
    return mi(t, Xe);
  },
  _S = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Jo(o)) {
        case 0:
          o === 38 && It() === 12 && (r[n] = 1), (t[n] += CS(Xe - 1, r, n));
          break;
        case 2:
          t[n] += fs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = It() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Pa(o);
      }
    while ((o = tt()));
    return t;
  },
  PS = function (t, r) {
    return Wg(_S(Fg(t), r));
  },
  Ap = new WeakMap(),
  ES = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ap.get(n)) &&
        !o
      ) {
        Ap.set(t, !0);
        for (
          var i = [], s = PS(r, i), a = n.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  zS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Ug(e, t) {
  switch (cS(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + Gs + e + Me + e + e;
    case 6828:
    case 4268:
      return Y + e + Me + e + e;
    case 6165:
      return Y + e + Me + "flex-" + e + e;
    case 5187:
      return (
        Y + e + X(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + Me + "flex-$1$2") + e
      );
    case 5443:
      return Y + e + Me + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Y +
        e +
        Me +
        "flex-line-pack" +
        X(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Y + e + Me + X(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + Me + X(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Y +
        "box-" +
        X(e, "-grow", "") +
        Y +
        e +
        Me +
        X(e, "grow", "positive") +
        e
      );
    case 4554:
      return Y + X(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return (
        X(X(X(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return (
        X(
          X(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + Me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (At(e) - 1 - t > 6)
        switch (ze(e, t + 1)) {
          case 109:
            if (ze(e, t + 4) !== 45) break;
          case 102:
            return (
              X(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Y +
                  "$2-$3$1" +
                  Gs +
                  (ze(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ju(e, "stretch")
              ? Ug(X(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    case 6444:
      switch (ze(e, At(e) - 3 - (~Ju(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + Y) + e;
        case 101:
          return (
            X(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Y +
                (ze(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Y +
                "$2$3$1" +
                Me +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ze(e, t + 11)) {
        case 114:
          return Y + e + Me + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + Me + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + Me + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + Me + e + e;
  }
  return e;
}
var TS = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case bd:
          t.return = Ug(t.value, t.length);
          break;
        case Bg:
          return Tn([oo(t, { value: X(t.value, "@", "@" + Y) })], o);
        case xd:
          if (t.length)
            return fS(t.props, function (i) {
              switch (dS(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Tn(
                    [oo(t, { props: [X(i, /:(read-\w+)/, ":" + Gs + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return Tn(
                    [
                      oo(t, {
                        props: [X(i, /:(plac\w+)/, ":" + Y + "input-$1")],
                      }),
                      oo(t, { props: [X(i, /:(plac\w+)/, ":" + Gs + "$1")] }),
                      oo(t, { props: [X(i, /:(plac\w+)/, Me + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  AS = [TS],
  Gg = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var w = v.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || AS,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (
            var w = v.getAttribute("data-emotion").split(" "), p = 1;
            p < w.length;
            p++
          )
            i[w[p]] = !0;
          a.push(v);
        },
      );
    var l,
      u = [ES, zS];
    {
      var c,
        d = [
          SS,
          wS(function (v) {
            c.insert(v);
          }),
        ],
        f = kS(u.concat(o, d)),
        g = function (w) {
          return Tn(xS(w), f);
        };
      l = function (w, p, m, y) {
        (c = m),
          g(w ? w + "{" + p.styles + "}" : p.styles),
          y && (x.inserted[p.name] = !0);
      };
    }
    var x = {
      key: r,
      sheet: new Dg({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return x.sheet.hydrate(a), x;
  };
function Ys() {
  return (
    (Ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ys.apply(null, arguments)
  );
}
var Yg = { exports: {} },
  K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pe = typeof Symbol == "function" && Symbol.for,
  kd = Pe ? Symbol.for("react.element") : 60103,
  wd = Pe ? Symbol.for("react.portal") : 60106,
  Ta = Pe ? Symbol.for("react.fragment") : 60107,
  Aa = Pe ? Symbol.for("react.strict_mode") : 60108,
  Ra = Pe ? Symbol.for("react.profiler") : 60114,
  $a = Pe ? Symbol.for("react.provider") : 60109,
  Ma = Pe ? Symbol.for("react.context") : 60110,
  Cd = Pe ? Symbol.for("react.async_mode") : 60111,
  ja = Pe ? Symbol.for("react.concurrent_mode") : 60111,
  La = Pe ? Symbol.for("react.forward_ref") : 60112,
  Ia = Pe ? Symbol.for("react.suspense") : 60113,
  RS = Pe ? Symbol.for("react.suspense_list") : 60120,
  Da = Pe ? Symbol.for("react.memo") : 60115,
  Va = Pe ? Symbol.for("react.lazy") : 60116,
  $S = Pe ? Symbol.for("react.block") : 60121,
  MS = Pe ? Symbol.for("react.fundamental") : 60117,
  jS = Pe ? Symbol.for("react.responder") : 60118,
  LS = Pe ? Symbol.for("react.scope") : 60119;
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kd:
        switch (((e = e.type), e)) {
          case Cd:
          case ja:
          case Ta:
          case Ra:
          case Aa:
          case Ia:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ma:
              case La:
              case Va:
              case Da:
              case $a:
                return e;
              default:
                return t;
            }
        }
      case wd:
        return t;
    }
  }
}
function Xg(e) {
  return st(e) === ja;
}
K.AsyncMode = Cd;
K.ConcurrentMode = ja;
K.ContextConsumer = Ma;
K.ContextProvider = $a;
K.Element = kd;
K.ForwardRef = La;
K.Fragment = Ta;
K.Lazy = Va;
K.Memo = Da;
K.Portal = wd;
K.Profiler = Ra;
K.StrictMode = Aa;
K.Suspense = Ia;
K.isAsyncMode = function (e) {
  return Xg(e) || st(e) === Cd;
};
K.isConcurrentMode = Xg;
K.isContextConsumer = function (e) {
  return st(e) === Ma;
};
K.isContextProvider = function (e) {
  return st(e) === $a;
};
K.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === kd;
};
K.isForwardRef = function (e) {
  return st(e) === La;
};
K.isFragment = function (e) {
  return st(e) === Ta;
};
K.isLazy = function (e) {
  return st(e) === Va;
};
K.isMemo = function (e) {
  return st(e) === Da;
};
K.isPortal = function (e) {
  return st(e) === wd;
};
K.isProfiler = function (e) {
  return st(e) === Ra;
};
K.isStrictMode = function (e) {
  return st(e) === Aa;
};
K.isSuspense = function (e) {
  return st(e) === Ia;
};
K.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ta ||
    e === ja ||
    e === Ra ||
    e === Aa ||
    e === Ia ||
    e === RS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Va ||
        e.$$typeof === Da ||
        e.$$typeof === $a ||
        e.$$typeof === Ma ||
        e.$$typeof === La ||
        e.$$typeof === MS ||
        e.$$typeof === jS ||
        e.$$typeof === LS ||
        e.$$typeof === $S))
  );
};
K.typeOf = st;
Yg.exports = K;
var IS = Yg.exports,
  Qg = IS,
  DS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  VS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Kg = {};
Kg[Qg.ForwardRef] = DS;
Kg[Qg.Memo] = VS;
var BS = !0;
function _d(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var qg = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || BS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  Pd = function (t, r, n) {
    qg(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function NS(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var OS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  FS = /[A-Z]|^ms/g,
  WS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Zg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Rp = function (t) {
    return t != null && typeof t != "boolean";
  },
  $l = Hg(function (e) {
    return Zg(e) ? e : e.replace(FS, "-$&").toLowerCase();
  }),
  $p = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(WS, function (n, o, i) {
            return (Rt = { name: o, styles: i, next: Rt }), o;
          });
    }
    return OS[t] !== 1 && !Zg(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function ei(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Rt = { name: r.name, styles: r.styles, next: Rt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Rt = { name: n.name, styles: n.styles, next: Rt }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return HS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Rt,
          s = r(e);
        return (Rt = i), ei(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function HS(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += ei(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : Rp(s) && (n += $l(i) + ":" + $p(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Rp(s[a]) && (n += $l(i) + ":" + $p(i, s[a]) + ";");
      else {
        var l = ei(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += $l(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Mp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Rt,
  An = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Rt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += ei(n, r, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += ei(n, r, t[a])), o && (i += s[a]);
    Mp.lastIndex = 0;
    for (var l = "", u; (u = Mp.exec(i)) !== null; ) l += "-" + u[1];
    var c = NS(i) + l;
    return { name: c, styles: i, next: Rt };
  },
  US = function (t) {
    return t();
  },
  Jg = ff.useInsertionEffect ? ff.useInsertionEffect : !1,
  GS = Jg || US,
  jp = Jg || S.useLayoutEffect,
  ey = S.createContext(typeof HTMLElement < "u" ? Gg({ key: "css" }) : null);
ey.Provider;
var ty = function (t) {
    return S.forwardRef(function (r, n) {
      var o = S.useContext(ey);
      return t(r, o, n);
    });
  },
  ti = S.createContext({}),
  YS = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return Ys({}, t, r);
  },
  XS = Tp(function (e) {
    return Tp(function (t) {
      return YS(e, t);
    });
  }),
  QS = function (t) {
    var r = S.useContext(ti);
    return (
      t.theme !== r && (r = XS(r)(t.theme)),
      S.createElement(ti.Provider, { value: r }, t.children)
    );
  },
  Ed = ty(function (e, t) {
    var r = e.styles,
      n = An([r], void 0, S.useContext(ti)),
      o = S.useRef();
    return (
      jp(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]',
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t],
      ),
      jp(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && Pd(t, n.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", n, s, !1);
        },
        [t, n.name],
      ),
      null
    );
  });
function KS() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return An(t);
}
var qS = function () {
    var t = KS.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  ZS = typeof Element < "u",
  JS = typeof Map == "function",
  ek = typeof Set == "function",
  tk = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function hs(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!hs(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (JS && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!hs(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (ek && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (tk && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (ZS && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !hs(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var rk = function (t, r) {
  try {
    return hs(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Lp = gm(rk);
function Ip(e, t) {
  if (e.inserted[t.name] === void 0) return e.insert("", t, e.sheet, !0);
}
function Dp(e, t, r) {
  var n = [],
    o = _d(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var nk = function (t) {
    var r = Gg(t);
    (r.sheet.speedy = function (a) {
      this.isSpeedy = a;
    }),
      (r.compat = !0);
    var n = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = An(u, r.registered, void 0);
        return Pd(r, d, !1), r.key + "-" + d.name;
      },
      o = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = An(u, r.registered),
          f = "animation-" + d.name;
        return (
          Ip(r, {
            name: d.name,
            styles: "@keyframes " + f + "{" + d.styles + "}",
          }),
          f
        );
      },
      i = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = An(u, r.registered);
        Ip(r, d);
      },
      s = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        return Dp(r.registered, n, ok(u));
      };
    return {
      css: n,
      cx: s,
      injectGlobal: i,
      keyframes: o,
      hydrate: function (l) {
        l.forEach(function (u) {
          r.inserted[u] = !0;
        });
      },
      flush: function () {
        (r.registered = {}), (r.inserted = {}), r.sheet.flush();
      },
      sheet: r.sheet,
      cache: r,
      getRegisteredStyles: _d.bind(null, r.registered),
      merge: Dp.bind(null, r.registered, n),
    };
  },
  ok = function e(t) {
    for (var r = "", n = 0; n < t.length; n++) {
      var o = t[n];
      if (o != null) {
        var i = void 0;
        switch (typeof o) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(o)) i = e(o);
            else {
              i = "";
              for (var s in o) o[s] && s && (i && (i += " "), (i += s));
            }
            break;
          }
          default:
            i = o;
        }
        i && (r && (r += " "), (r += i));
      }
    }
    return r;
  };
nk({ key: "css" });
var ik =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  sk = Hg(function (e) {
    return (
      ik.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ak = sk,
  lk = function (t) {
    return t !== "theme";
  },
  Vp = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? ak : lk;
  },
  Bp = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  },
  uk = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      qg(r, n, o),
      GS(function () {
        return Pd(r, n, o);
      }),
      null
    );
  },
  ck = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = Bp(t, r, n),
      l = a || Vp(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, g = 1; g < f; g++) d.push(c[g], c[0][g]);
      }
      var x = ty(function (v, w, p) {
        var m = (u && v.as) || o,
          y = "",
          k = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var P in v) C[P] = v[P];
          C.theme = S.useContext(ti);
        }
        typeof v.className == "string"
          ? (y = _d(w.registered, k, v.className))
          : v.className != null && (y = v.className + " ");
        var _ = An(d.concat(k), w.registered, C);
        (y += w.key + "-" + _.name), s !== void 0 && (y += " " + s);
        var z = u && a === void 0 ? Vp(m) : l,
          M = {};
        for (var A in v) (u && A === "as") || (z(A) && (M[A] = v[A]));
        return (
          (M.className = y),
          (M.ref = p),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(uk, {
              cache: w,
              serialized: _,
              isStringTag: typeof m == "string",
            }),
            S.createElement(m, M),
          )
        );
      });
      return (
        (x.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = o),
        (x.__emotion_styles = d),
        (x.__emotion_forwardProp = a),
        Object.defineProperty(x, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (x.withComponent = function (v, w) {
          return e(v, Ys({}, r, w, { shouldForwardProp: Bp(x, w, !0) })).apply(
            void 0,
            d,
          );
        }),
        x
      );
    };
  },
  dk = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  tc = ck.bind();
dk.forEach(function (e) {
  tc[e] = tc(e);
});
var Np = $g() ? new Dg({ key: "css", container: document.head }) : void 0,
  rc = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  Op = [
    "rotate(var(--ui-rotate, 0))",
    "scaleX(var(--ui-scale-x, 1))",
    "scaleY(var(--ui-scale-y, 1))",
    "skewX(var(--ui-skew-x, 0))",
    "skewY(var(--ui-skew-y, 0))",
  ],
  fk = new Set(Object.values(rc)),
  ry = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  Fp = (e) => pi(e) && e.includes("(") && e.includes(")"),
  pk = (e) => /^var\(--.+\)$/.test(e),
  hk = (e) => {
    let t = parseFloat(e.toString());
    const r = e.toString().replace(String(t), "");
    return { isUnitless: !r, value: e, unit: r };
  },
  Vr = (e, t) => (r) => {
    const n = pi(t) ? t.match(/fallback\(([^,)]+),?\s*([^]+)?\)/) : null,
      [, o, i] = n ?? [];
    o && (t = o);
    const s = `${e}.${t}`;
    return Se(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].ref : i ?? t;
  },
  nc = (e, t) => {
    var r;
    if (e == null || ry.has(e)) return e;
    if (!Fp(e)) return `url('${e}')`;
    const o = /(^[a-z-A-Z]+)\((.*)\)/g,
      [, i, s] = (r = o.exec(e)) != null ? r : [];
    if (!i || !s) return e;
    const a = i.includes("-gradient") ? i : `${i}-gradient`,
      [l, ...u] = s
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);
    if (!u.length) return e;
    const c = l in rc ? rc[l] : l;
    u.unshift(c);
    const d = u.map((f) => {
      if (fk.has(f)) return f;
      const g = f.indexOf(" ");
      let [x, v] = g !== -1 ? [f.slice(0, g), f.slice(g + 1)] : [f];
      const w = Fp(v) ? v : v && v.split(" "),
        p = `colors.${x}`;
      return (
        (x = p in t.__cssMap ? t.__cssMap[p].ref : x),
        w ? [x, ...(O(w) ? w : [w])].join(" ") : x
      );
    });
    return `${a}(${d.join(", ")})`;
  },
  mk = (e) =>
    Object.entries(e).reduce(
      (t, [r, n]) => (
        r === "duration"
          ? (t.animationDuration = n)
          : r === "timingFunction"
            ? (t.animationTimingFunction = n)
            : (t[r] = n),
        t
      ),
      {},
    ),
  oc = (e, t, r) => {
    if (e == null || ry.has(e)) return e;
    if (Se(e)) {
      const {
          keyframes: n,
          animationDuration: o = "0s",
          animationTimingFunction: i = "ease",
          delay: s = "0s",
          iterationCount: a = "1",
          direction: l = "normal",
          fillMode: u = "none",
          playState: c = "running",
        } = r(mk(e))(t),
        { name: d, styles: f } = qS(n);
      return (
        Np == null || Np.insert(f), `${d} ${o} ${i} ${s} ${a} ${l} ${u} ${c}`
      );
    } else
      return e.includes(",")
        ? ((e = e
            .split(",")
            .map((n) => ((n = n.trim()), (n = Vr("animations", n)(t)), n))
            .join(",")),
          e)
        : ((e = Vr("animations", e)(t)), e);
  },
  gk = (e) =>
    e === "auto"
      ? [
          "translateX(var(--ui-translate-x, 0))",
          "translateY(var(--ui-translate-y, 0))",
          ...Op,
        ].join(" ")
      : e === "auto-3d"
        ? [
            "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0)",
            ...Op,
          ].join(" ")
        : e,
  yk =
    (e = "filter") =>
    (t) =>
      t !== "auto"
        ? t
        : e === "filter"
          ? [
              "var(--ui-blur, /*!*/ /*!*/)",
              "var(--ui-brightness, /*!*/ /*!*/)",
              "var(--ui-contrast, /*!*/ /*!*/)",
              "var(--ui-drop-shadow, /*!*/ /*!*/)",
              "var(--ui-grayscale, /*!*/ /*!*/)",
              "var(--ui-hue-rotate, /*!*/ /*!*/)",
              "var(--ui-invert, /*!*/ /*!*/)",
              "var(--ui-opacity, /*!*/ /*!*/)",
              "var(--ui-saturate, /*!*/ /*!*/)",
              "var(--ui-sepia, /*!*/ /*!*/)",
            ].join(" ")
          : [
              "var(--ui-backdrop-blur, /*!*/ /*!*/)",
              "var(--ui-backdrop-brightness, /*!*/ /*!*/)",
              "var(--ui-backdrop-contrast, /*!*/ /*!*/)",
              "var(--ui-backdrop-drop-shadow, /*!*/ /*!*/)",
              "var(--ui-backdrop-grayscale, /*!*/ /*!*/)",
              "var(--ui-backdrop-hue-rotate, /*!*/ /*!*/)",
              "var(--ui-backdrop-invert, /*!*/ /*!*/)",
              "var(--ui-backdrop-opacity, /*!*/ /*!*/)",
              "var(--ui-backdrop-saturate, /*!*/ /*!*/)",
              "var(--ui-backdrop-sepia, /*!*/ /*!*/)",
            ].join(" "),
  Ml = (e) => (t, r) =>
    t.reduce(
      (
        n,
        {
          type: o,
          name: i,
          query: s,
          css: a,
          w: l,
          width: u,
          minW: c,
          minWidth: d,
          maxW: f,
          maxWidth: g,
          h: x,
          height: v,
          minH: w,
          minHeight: p,
          maxH: m,
          maxHeight: y,
          ...k
        },
      ) => {
        var C;
        if (
          (u ?? (u = l),
          d ?? (d = c),
          g ?? (g = f),
          v ?? (v = x),
          p ?? (p = w),
          y ?? (y = m),
          !s)
        ) {
          const _ = Ca({
            width: u,
            minWidth: d,
            maxWidth: g,
            height: v,
            minHeight: p,
            maxHeight: y,
            ...k,
          });
          s = Object.entries(_)
            .map(([z, M]) => ((M = Vr("sizes", M)(r)), `(${tS(z)}: ${M})`))
            .join(" and ");
        }
        const P = `@${e} ${(C = o ?? i) != null ? C : ""} ${s}`;
        return (n[P] = a), n;
      },
      {},
    ),
  ne =
    (e, t) =>
    (r = "light") =>
      r === "light" ? e : t,
  h = {
    var: (e, t) =>
      e.reduce((r, { __prefix: n, name: o, token: i, value: s }) => {
        var a, l;
        return (
          (o = `--${(l = n ?? ((a = t.__config.var) == null ? void 0 : a.prefix)) != null ? l : "ui"}-${o}`),
          Se(s)
            ? (s = Object.entries(s).reduce(
                (c, [d, f]) => ((c[d] = Vr(i, f)(t)), c),
                {},
              ))
            : O(s)
              ? (s = s.map((c) => Vr(i, c)(t)))
              : (s = Vr(i, s)(t)),
          (r[o] = s),
          r
        );
      }, {}),
    token: (e, t, r) => (n, o, i) => {
      var s;
      n = Vr(e, n)(o);
      let a = (s = t == null ? void 0 : t(n, o, i)) != null ? s : n;
      return r && (a = r(a, o, i)), a;
    },
    styles:
      (e) =>
      (t, r, n, o = {}) => {
        const i = {},
          s = L(r, e ? `styles.${e}.${t}` : `styles.${t}`, {});
        for (const a in s) (a in o && o[a] != null) || (i[a] = s[a]);
        return i;
      },
    px: (e) => {
      if (e == null) return e;
      const { isUnitless: t } = hk(e);
      return t || zn(e) ? `${e}px` : e;
    },
    deg: (e) =>
      pk(e) || e == null
        ? e
        : (typeof e == "string" && !e.endsWith("deg")) || zn(e)
          ? `${e}deg`
          : e,
    fraction:
      (e) =>
      (t, ...r) => (
        zn(t) && t <= 1 && (t = `${t * 100}%`), e && (t = e(t, ...r)), t
      ),
    isTruncated: (e) => {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        };
    },
    bgClip: (e) =>
      e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e },
    function:
      (e, t) =>
      (r, ...n) => (t && (r = t(r, ...n)), `${e}(${r})`),
    gradient: nc,
    animation: oc,
    transform: gk,
    filter: yk,
    media: Ml("media"),
    container: Ml("container"),
    supports: Ml("supports"),
  },
  F = (e) => S.forwardRef(e),
  ms = (e, t) => {
    const r = ["@media screen"];
    return (
      e && r.push("and", `(min-width: ${e}px)`),
      t && r.push("and", `(max-width: ${t}px)`),
      r.length > 1 ? r.join(" ") : void 0
    );
  },
  vk = (e, t) => {
    const r = t === "down";
    return Object.entries(e).map(([n, o], i, s) => {
      var a;
      const [, l] = (a = s[i + 1]) != null ? a : [];
      let u = r ? l : o,
        c = r ? o : l;
      n === "base" && (r ? (c = void 0) : (u = void 0)),
        r ? u && (u += 1) : c && (c -= 1);
      const d = ms(void 0, c),
        f = ms(u),
        g = ms(u, c);
      return {
        breakpoint: n,
        minW: u,
        maxW: c,
        query: t === "down" ? d : f,
        maxWQuery: d,
        minWQuery: f,
        minMaxQuery: g,
      };
    });
  },
  xk = (e, t) =>
    Object.fromEntries(
      Object.entries(e)
        .map(([r, n]) => [r, Vb(n)])
        .sort((r, n) => (t === "down" ? n[1] - r[1] : r[1] - n[1])),
    ),
  bk = (e, t = "down") => {
    if (!e) return;
    (e.base = t === "down" ? "9999px" : "0px"), (e = xk(e, t));
    const r = Lg(e),
      n = vk(e, t);
    return {
      keys: r,
      isResponsive: (i) => {
        const s = Object.keys(i);
        return s.length > 0 && s.every((a) => r.includes(a));
      },
      queries: n,
    };
  },
  xr = {
    _hover: "&:hover, &[data-hover]",
    _nativeHover: "&:hover",
    _active: "&:active, &[data-active]",
    _nativeActive: "&:active",
    _target: "&:target, &[data-target]",
    _notTarget: "&:not(:target)",
    _nativeTarget: "&:target",
    _focus: "&:focus, &[data-focus]",
    _nativeFocus: "&:focus",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _nativeFocusVisible: "&:focus-visible",
    _focusWithin: "&:focus-within, &[data-focus-within]",
    _nativeFocusWithin: "&:focus-within",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[readonly], &[aria-readonly=true], &[data-readonly]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _before: "&::before",
    _after: "&::after",
    _marker: "&::marker",
    _firstLetter: "&::first-letter",
    _firstLine: "&::first-line",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&:checked, &[data-checked], &[aria-checked=true]",
    _invalid: "&[data-invalid], &[aria-invalid=true]",
    _valid: "&:valid, &[data-valid], &[data-state=valid]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _visited: "&:visited",
    _placeholder: "&::placeholder, &[data-placeholder]",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _autofill: "&:-webkit-autofill",
    _filled: "&[data-filled]",
    _start: "&[data-start]",
    _end: "&[data-end]",
    _outside: "&:where([data-outside])",
    _between: "&[data-between]",
    _weekend: "&:where([data-weekend])",
    _holiday: "&[data-holiday]",
    _today: "&[data-today]",
    _accept: "&[data-accept]",
    _reject: "&[data-reject]",
    _idle: "&[data-idle]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _loaded: "&[data-loaded]",
    _ripple: "& .ui-ripple",
    _vertical: "&:vertical, &[data-orientation=vertical]",
    _horizontal: "&:horizontal, &[data-orientation=horizontal]",
    _scrollbar: "&::-webkit-scrollbar",
    _scrollbarTrack: "&::-webkit-scrollbar-track",
    _scrollbarTrackPiece: "&::-webkit-scrollbar-track-piece",
    _scrollbarThumb: "&::-webkit-scrollbar-thumb",
    _scrollbarButton: "&::-webkit-scrollbar-button",
    _scrollbarCorner: "&::-webkit-scrollbar-corner",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]",
    _light:
      ".ui-light &:not([data-mode]), [data-mode=light] &:not([data-mode]), &[data-mode=light]",
  },
  Sk = Object.keys(xr),
  T = {
    accentColor: {
      properties: "accentColor",
      token: "colors",
      transform: h.token("colors"),
    },
    alignContent: !0,
    alignItems: !0,
    alignSelf: !0,
    alignTracks: !0,
    all: !0,
    animation: {
      properties: "animation",
      token: "animations",
      transform: h.token("animations", h.animation),
    },
    animationComposition: !0,
    animationDelay: !0,
    animationDirection: !0,
    animationDuration: {
      properties: "animationDuration",
      token: "transitions.duration",
      transform: h.token("transitions.duration"),
    },
    animationFillMode: !0,
    animationIterationCount: !0,
    animationName: !0,
    animationPlayState: !0,
    animationRange: !0,
    animationRangeEnd: !0,
    animationRangeStart: !0,
    animationTimeline: !0,
    animationTimingFunction: {
      properties: "animationTimingFunction",
      token: "transitions.easing",
      transform: h.token("transitions.easing"),
    },
    appearance: !0,
    aspectRatio: !0,
    backfaceVisibility: {
      properties: "backfaceVisibility",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    background: {
      properties: "background",
      token: "colors",
      transform: h.token("colors"),
    },
    backgroundAttachment: !0,
    backgroundBlendMode: !0,
    backgroundClip: { properties: "backgroundClip", transform: h.bgClip },
    backgroundColor: {
      properties: "backgroundColor",
      token: "colors",
      transform: h.token("colors"),
    },
    backgroundImage: {
      properties: "backgroundImage",
      token: "gradients",
      transform: h.token("gradients", h.gradient),
    },
    backgroundOrigin: !0,
    backgroundPosition: !0,
    backgroundPositionX: !0,
    backgroundPositionY: !0,
    backgroundRepeat: !0,
    backgroundSize: !0,
    blockSize: {
      properties: "blockSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    border: {
      properties: "border",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderBlock: {
      properties: "borderBlock",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderBlockColor: {
      properties: "borderBlockColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderBlockEnd: {
      properties: "borderBlockEnd",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderBlockEndColor: {
      properties: "borderBlockEndColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderBlockEndStyle: !0,
    borderBlockEndWidth: { properties: "borderBlockEndWidth", transform: h.px },
    borderBlockStart: {
      properties: "borderBlockStart",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderBlockStartColor: {
      properties: "borderBlockStartColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderBlockStartStyle: !0,
    borderBlockStartWidth: {
      properties: "borderBlockStartWidth",
      transform: h.px,
    },
    borderBlockStyle: !0,
    borderBlockWidth: { properties: "borderBlockWidth", transform: h.px },
    borderBottom: {
      properties: "borderBottom",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderBottomColor: {
      properties: "borderBottomColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderBottomLeftRadius: {
      properties: "borderBottomLeftRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderBottomRightRadius: {
      properties: "borderBottomRightRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderBottomStyle: !0,
    borderBottomWidth: { properties: "borderBottomWidth", transform: h.px },
    borderCollapse: !0,
    borderColor: {
      properties: "borderColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderEndEndRadius: {
      properties: "borderEndEndRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderEndStartRadius: {
      properties: "borderEndStartRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderImage: {
      properties: "borderImage",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderImageOutset: !0,
    borderImageRepeat: !0,
    borderImageSlice: !0,
    borderImageSource: !0,
    borderImageWidth: { properties: "borderImageWidth", transform: h.px },
    borderInline: {
      properties: "borderInline",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderInlineColor: {
      properties: "borderInlineColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderInlineEnd: {
      properties: "borderInlineEnd",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderInlineEndColor: {
      properties: "borderInlineEndColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderInlineEndStyle: !0,
    borderInlineEndWidth: {
      properties: "borderInlineEndWidth",
      transform: h.px,
    },
    borderInlineStart: {
      properties: "borderInlineStart",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderInlineStartColor: {
      properties: "borderInlineStartColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderInlineStartStyle: !0,
    borderInlineStartWidth: {
      properties: "borderInlineStartWidth",
      transform: h.px,
    },
    borderInlineStyle: !0,
    borderInlineWidth: { properties: "borderInlineWidth", transform: h.px },
    borderLeft: {
      properties: "borderLeft",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderLeftColor: {
      properties: "borderLeftColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderLeftStyle: !0,
    borderLeftWidth: { properties: "borderLeftWidth", transform: h.px },
    borderRadius: {
      properties: "borderRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderRight: {
      properties: "borderRight",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderRightColor: {
      properties: "borderRightColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderRightStyle: !0,
    borderRightWidth: { properties: "borderRightWidth", transform: h.px },
    borderSpacing: !0,
    borderStartEndRadius: {
      properties: "borderStartEndRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderStartStartRadius: {
      properties: "borderStartStartRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderStyle: !0,
    borderTop: {
      properties: "borderTop",
      token: "borders",
      transform: h.token("borders", h.px),
    },
    borderTopColor: {
      properties: "borderTopColor",
      token: "colors",
      transform: h.token("colors"),
    },
    borderTopLeftRadius: {
      properties: "borderTopLeftRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderTopRightRadius: {
      properties: "borderTopRightRadius",
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderTopStyle: !0,
    borderTopWidth: { properties: "borderTopWidth", transform: h.px },
    borderWidth: { properties: "borderWidth", transform: h.px },
    bottom: {
      properties: "bottom",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    boxAlign: !0,
    boxDecorationBreak: !0,
    boxDirection: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxLines: !0,
    boxOrdinalGroup: !0,
    boxOrient: !0,
    boxPack: !0,
    boxShadow: {
      properties: "boxShadow",
      token: "shadows",
      transform: h.token("shadows"),
    },
    boxSizing: !0,
    breakAfter: !0,
    breakBefore: !0,
    breakInside: !0,
    captionSide: !0,
    caretColor: {
      properties: "caretColor",
      token: "colors",
      transform: h.token("colors"),
    },
    clear: !0,
    clip: !0,
    clipPath: !0,
    color: {
      properties: "color",
      token: "colors",
      transform: h.token("colors"),
    },
    colorInterpolation: !0,
    columnCount: !0,
    columnFill: !0,
    columnGap: {
      properties: "columnGap",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    columnRule: { properties: "columnRule", transform: h.px },
    columnRuleColor: {
      properties: "columnRuleColor",
      token: "colors",
      transform: h.token("colors"),
    },
    columnRuleStyle: !0,
    columnRuleWidth: { properties: "columnRuleWidth", transform: h.px },
    columnSpan: !0,
    columnWidth: { properties: "columnWidth", transform: h.px },
    columns: !0,
    contain: !0,
    containIntrinsicBlockSize: !0,
    containIntrinsicHeight: !0,
    containIntrinsicInlineSize: !0,
    containIntrinsicSize: !0,
    containIntrinsicWidth: {
      properties: "containIntrinsicWidth",
      transform: h.px,
    },
    container: !0,
    containerName: !0,
    containerType: !0,
    content: !0,
    contentVisibility: !0,
    counterIncrement: !0,
    counterReset: !0,
    counterSet: !0,
    cursor: !0,
    direction: !0,
    display: !0,
    emptyCells: !0,
    flex: !0,
    flexBasis: {
      properties: "flexBasis",
      token: "sizes",
      transform: h.token("sizes", h.px),
    },
    flexDirection: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexWrap: !0,
    float: !0,
    font: !0,
    fontFamily: {
      properties: "fontFamily",
      token: "fonts",
      transform: h.token("fonts"),
    },
    fontFeatureSettings: !0,
    fontKerning: !0,
    fontLanguageOverride: !0,
    fontOpticalSizing: !0,
    fontPalette: !0,
    fontSize: {
      properties: "fontSize",
      token: "fontSizes",
      transform: h.token("fontSizes", h.px),
    },
    fontSizeAdjust: !0,
    fontSmooth: !0,
    fontStretch: !0,
    fontStyle: !0,
    fontSynthesis: !0,
    fontSynthesisPosition: !0,
    fontSynthesisSmallCaps: !0,
    fontSynthesisStyle: !0,
    fontSynthesisWeight: !0,
    fontVariant: !0,
    fontVariantAlternates: !0,
    fontVariantCaps: !0,
    fontVariantEastAsian: !0,
    fontVariantEmoji: !0,
    fontVariantLigatures: !0,
    fontVariantNumeric: !0,
    fontVariantPosition: !0,
    fontVariationSettings: !0,
    fontWeight: {
      properties: "fontWeight",
      token: "fontWeights",
      transform: h.token("fontWeights"),
    },
    forcedColorAdjust: !0,
    gap: {
      properties: "gap",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    grid: !0,
    gridArea: !0,
    gridAutoColumns: !0,
    gridAutoFlow: !0,
    gridAutoRows: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnStart: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowStart: !0,
    gridTemplate: !0,
    gridTemplateAreas: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    hangingPunctuation: !0,
    height: {
      properties: "height",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    hyphenateCharacter: !0,
    hyphenateLimitChars: !0,
    hyphens: !0,
    imageOrientation: !0,
    imageRendering: !0,
    imageResolution: !0,
    initialLetter: !0,
    inlineSize: {
      properties: "inlineSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    inset: {
      properties: "inset",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetBlock: {
      properties: "insetBlock",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetBlockEnd: {
      properties: "insetBlockEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetBlockStart: {
      properties: "insetBlockStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetInline: {
      properties: "insetInline",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetInlineEnd: {
      properties: "insetInlineEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetInlineStart: {
      properties: "insetInlineStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    isolation: !0,
    justifyContent: !0,
    justifyItems: !0,
    justifySelf: !0,
    justifyTracks: !0,
    left: {
      properties: "left",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    letterSpacing: {
      properties: "letterSpacing",
      token: "letterSpacings",
      transform: h.token("letterSpacings"),
    },
    lineBreak: !0,
    lineHeight: {
      properties: "lineHeight",
      token: "lineHeights",
      transform: h.token("lineHeights"),
    },
    lineHeightStep: !0,
    listStyle: !0,
    listStyleImage: !0,
    listStylePosition: !0,
    listStyleType: !0,
    margin: {
      properties: "margin",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginBlock: {
      properties: "marginBlock",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginBlockEnd: {
      properties: "marginBlockEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginBlockStart: {
      properties: "marginBlockStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginBottom: {
      properties: "marginBottom",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginInline: {
      properties: "marginInline",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginInlineEnd: {
      properties: "marginInlineEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginInlineStart: {
      properties: "marginInlineStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginLeft: {
      properties: "marginLeft",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginRight: {
      properties: "marginRight",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginTop: {
      properties: "marginTop",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginTrim: !0,
    mask: !0,
    maskBorder: !0,
    maskBorderMode: !0,
    maskBorderOutset: !0,
    maskBorderRepeat: !0,
    maskBorderSlice: !0,
    maskBorderSource: !0,
    maskBorderWidth: { properties: "maskBorderWidth", transform: h.px },
    maskClip: !0,
    maskComposite: !0,
    maskImage: !0,
    maskMode: !0,
    maskOrigin: !0,
    maskPosition: !0,
    maskRepeat: !0,
    maskSize: !0,
    maskType: !0,
    masonryAutoFlow: !0,
    mathDepth: !0,
    mathShift: !0,
    mathStyle: !0,
    maxBlockSize: {
      properties: "maxBlockSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    maxHeight: {
      properties: "maxHeight",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    maxInlineSize: {
      properties: "maxInlineSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    maxWidth: {
      properties: "maxWidth",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    minBlockSize: {
      properties: "minBlockSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    minHeight: {
      properties: "minHeight",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    minInlineSize: {
      properties: "minInlineSize",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    minWidth: {
      properties: "minWidth",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    mixBlendMode: !0,
    objectFit: !0,
    objectPosition: !0,
    offset: !0,
    offsetAnchor: !0,
    offsetDistance: !0,
    offsetPath: !0,
    offsetPosition: !0,
    offsetRotate: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    outline: !0,
    outlineColor: {
      properties: "outlineColor",
      token: "colors",
      transform: h.token("colors"),
    },
    outlineOffset: !0,
    outlineStyle: !0,
    outlineWidth: { properties: "outlineWidth", transform: h.px },
    overflow: !0,
    overflowAnchor: !0,
    overflowBlock: !0,
    overflowClipMargin: !0,
    overflowInline: !0,
    overflowWrap: !0,
    overflowX: !0,
    overflowY: !0,
    overlay: !0,
    overscrollBehavior: !0,
    overscrollBehaviorBlock: !0,
    overscrollBehaviorInline: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    padding: {
      properties: "padding",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingBlock: {
      properties: "paddingBlock",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingBlockEnd: {
      properties: "paddingBlockEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingBlockStart: {
      properties: "paddingBlockStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingBottom: {
      properties: "paddingBottom",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingInline: {
      properties: "paddingInline",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingInlineEnd: {
      properties: "paddingInlineEnd",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingInlineStart: {
      properties: "paddingInlineStart",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingLeft: {
      properties: "paddingLeft",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingRight: {
      properties: "paddingRight",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingTop: {
      properties: "paddingTop",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    page: !0,
    pageBreakAfter: !0,
    pageBreakBefore: !0,
    pageBreakInside: !0,
    paintOrder: !0,
    perspective: !0,
    perspectiveOrigin: !0,
    placeContent: !0,
    placeItems: !0,
    placeSelf: !0,
    pointerEvents: !0,
    position: !0,
    printColorAdjust: !0,
    quotes: !0,
    resize: !0,
    right: {
      properties: "right",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    rowGap: {
      properties: "rowGap",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    rubyAlign: !0,
    rubyPosition: !0,
    scrollBehavior: !0,
    scrollMargin: {
      properties: "scrollMargin",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginBlock: !0,
    scrollMarginBlockEnd: !0,
    scrollMarginBlockStart: !0,
    scrollMarginBottom: {
      properties: "scrollMarginBottom",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginInline: !0,
    scrollMarginInlineEnd: !0,
    scrollMarginInlineStart: !0,
    scrollMarginLeft: {
      properties: "scrollMarginLeft",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginRight: {
      properties: "scrollMarginRight",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginTop: {
      properties: "scrollMarginTop",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPadding: {
      properties: "scrollPadding",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingBlock: !0,
    scrollPaddingBlockEnd: !0,
    scrollPaddingBlockStart: !0,
    scrollPaddingBottom: {
      properties: "scrollPaddingBottom",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingInline: !0,
    scrollPaddingInlineEnd: !0,
    scrollPaddingInlineStart: !0,
    scrollPaddingLeft: {
      properties: "scrollPaddingLeft",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingRight: {
      properties: "scrollPaddingRight",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingTop: {
      properties: "scrollPaddingTop",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollTimeline: !0,
    scrollTimelineAxis: !0,
    scrollTimelineName: !0,
    scrollbarColor: !0,
    scrollbarGutter: !0,
    scrollbarWidth: { properties: "scrollbarWidth", transform: h.px },
    shapeImageThreshold: !0,
    shapeMargin: !0,
    shapeOutside: !0,
    tabSize: !0,
    tableLayout: !0,
    textAlign: !0,
    textAlignLast: !0,
    textCombineUpright: !0,
    textDecoration: !0,
    textDecorationColor: {
      properties: "textDecorationColor",
      token: "colors",
      transform: h.token("colors"),
    },
    textDecorationLine: !0,
    textDecorationSkip: !0,
    textDecorationSkipInk: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textEmphasis: !0,
    textEmphasisColor: {
      properties: "textEmphasisColor",
      token: "colors",
      transform: h.token("colors"),
    },
    textEmphasisPosition: !0,
    textEmphasisStyle: !0,
    textIndent: !0,
    textJustify: !0,
    textOrientation: !0,
    textOverflow: !0,
    textRendering: !0,
    textShadow: {
      properties: "textShadow",
      token: "shadows",
      transform: h.token("shadows"),
    },
    textSizeAdjust: !0,
    textTransform: !0,
    textUnderlineOffset: !0,
    textUnderlinePosition: !0,
    textWrap: !0,
    timelineScope: !0,
    top: {
      properties: "top",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    touchAction: !0,
    transform: { properties: "transform", transform: h.transform },
    transformBox: !0,
    transformOrigin: !0,
    transformStyle: !0,
    transitionBehavior: !0,
    transitionDelay: !0,
    transitionDuration: {
      properties: "transitionDuration",
      token: "transitions.duration",
      transform: h.token("transitions.duration"),
    },
    transitionProperty: {
      properties: "transitionProperty",
      token: "transitions.property",
      transform: h.token("transitions.property"),
    },
    transitionTimingFunction: {
      properties: "transitionTimingFunction",
      token: "transitions.easing",
      transform: h.token("transitions.easing"),
    },
    translate: !0,
    unicodeBidi: !0,
    userSelect: !0,
    verticalAlign: !0,
    viewTimeline: !0,
    viewTimelineAxis: !0,
    viewTimelineInset: !0,
    viewTimelineName: !0,
    viewTransitionName: !0,
    visibility: !0,
    whiteSpace: !0,
    whiteSpaceCollapse: !0,
    widows: !0,
    width: {
      properties: "width",
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    willChange: !0,
    wordBreak: !0,
    wordSpacing: !0,
    writingMode: !0,
    zIndex: {
      properties: "zIndex",
      token: "zIndices",
      transform: h.token("zIndices"),
    },
    zoom: !0,
    alignmentBaseline: !0,
    azimuth: !0,
    baselineShift: !0,
    clipRule: !0,
    dominantBaseline: !0,
    fill: { properties: "fill", token: "colors", transform: h.token("colors") },
    fillOpacity: !0,
    fillRule: !0,
    floodColor: {
      properties: "floodColor",
      token: "colors",
      transform: h.token("colors"),
    },
    floodOpacity: !0,
    glyphOrientationVertical: !0,
    lightingColor: {
      properties: "lightingColor",
      token: "colors",
      transform: h.token("colors"),
    },
    markerEnd: !0,
    markerMid: !0,
    markerStart: !0,
    shapeRendering: !0,
    stopColor: !0,
    stopOpacity: !0,
    stroke: {
      properties: "stroke",
      token: "colors",
      transform: h.token("colors"),
    },
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeLinecap: !0,
    strokeLinejoin: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: { properties: "strokeWidth", transform: h.px },
    textAnchor: !0,
    vectorEffect: !0,
    marginX: {
      properties: ["marginInlineStart", "marginInlineEnd"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    marginY: {
      properties: ["marginTop", "marginBottom"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingX: {
      properties: ["paddingInlineStart", "paddingInlineEnd"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    paddingY: {
      properties: ["paddingTop", "paddingBottom"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginX: {
      properties: ["scrollMarginLeft", "scrollMarginRight"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollMarginY: {
      properties: ["scrollMarginTop", "scrollMarginBottom"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingX: {
      properties: ["scrollPaddingLeft", "scrollPaddingRight"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scrollPaddingY: {
      properties: ["scrollPaddingTop", "scrollPaddingBottom"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetX: {
      properties: ["left", "right"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    insetY: {
      properties: ["top", "bottom"],
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    borderY: {
      properties: ["borderTop", "borderBottom"],
      token: "borders",
      transform: h.token("borders"),
    },
    borderX: {
      properties: ["borderLeft", "borderRight"],
      token: "borders",
      transform: h.token("borders"),
    },
    borderTopRadius: {
      properties: ["borderTopLeftRadius", "borderTopRightRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderBottomRadius: {
      properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderRightRadius: {
      properties: ["borderTopRightRadius", "borderBottomRightRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderLeftRadius: {
      properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderInlineStartRadius: {
      properties: ["borderStartStartRadius", "borderStartEndRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    borderInlineEndRadius: {
      properties: ["borderEndStartRadius", "borderEndEndRadius"],
      token: "radii",
      transform: h.token("radii", h.px),
    },
    boxSize: {
      properties: ["width", "height"],
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    minBoxSize: {
      properties: ["minWidth", "minHeight"],
      token: "sizes",
      transform: h.token("sizes", h.fraction(h.px)),
    },
    maxBoxSize: {
      properties: ["maxWidth", "maxHeight"],
      transform: h.fraction(h.px),
    },
    translateX: {
      properties: "--ui-translate-x",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    translateY: {
      properties: "--ui-translate-y",
      token: "spaces",
      transform: h.token("spaces", h.px),
    },
    scale: { properties: ["--ui-scale-x", "--ui-scale-y"] },
    scaleX: { properties: "--ui-scale-x" },
    scaleY: { properties: "--ui-scale-y" },
    rotate: { properties: "--ui-rotate", transform: h.deg },
    skewX: { properties: "--ui-skew-x", transform: h.deg },
    skewY: { properties: "--ui-skew-y", transform: h.deg },
    filter: { transform: h.filter() },
    blur: {
      properties: "--ui-blur",
      token: "blurs",
      transform: h.token("blurs", h.function("blur")),
    },
    brightness: {
      properties: "--ui-brightness",
      transform: h.function("brightness"),
    },
    contrast: {
      properties: "--ui-contrast",
      transform: h.function("contrast"),
    },
    dropShadow: {
      properties: "--ui-drop-shadow",
      token: "shadows",
      transform: h.token("shadows", h.function("drop-shadow")),
    },
    grayscale: {
      properties: "--ui-grayscale",
      transform: h.function("grayscale"),
    },
    hueRotate: {
      properties: "--ui-hue-rotate",
      transform: h.function("hue-rotate", h.deg),
    },
    invert: { properties: "--ui-invert", transform: h.function("invert") },
    saturate: {
      properties: "--ui-saturate",
      transform: h.function("saturate"),
    },
    sepia: { properties: "--ui-sepia", transform: h.function("sepia") },
    backdropFilter: { transform: h.filter("backdrop") },
    backdropBlur: {
      properties: "--ui-backdrop-blur",
      token: "blurs",
      transform: h.token("blurs", h.function("blur")),
    },
    backdropBrightness: {
      properties: "--ui-backdrop-brightness",
      transform: h.function("brightness"),
    },
    backdropContrast: {
      properties: "--ui-backdrop-contrast",
      transform: h.function("contrast"),
    },
    backdropDropShadow: {
      properties: "--ui-backdrop-drop-shadow",
      token: "shadows",
      transform: h.token("shadows", h.function("drop-shadow")),
    },
    backdropGrayscale: {
      properties: "--ui-backdrop-grayscale",
      transform: h.function("grayscale"),
    },
    backdropHueRotate: {
      properties: "--ui-backdrop-hue-rotate",
      transform: h.function("hue-rotate", h.deg),
    },
    backdropInvert: {
      properties: "--ui-backdrop-invert",
      transform: h.function("invert"),
    },
    backdropSaturate: {
      properties: "--ui-backdrop-saturate",
      transform: h.function("saturate"),
    },
    backdropSepia: {
      properties: "--ui-backdrop-sepia",
      transform: h.function("sepia"),
    },
    colorMode: { properties: "colorScheme" },
    lineClamp: {
      properties: "--ui-line-clamp",
      isSkip: !0,
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--ui-line-clamp)",
      },
    },
    isTruncated: { isSkip: !0, transform: h.isTruncated },
    layerStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: h.styles("layerStyles"),
    },
    textStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: h.styles("textStyles"),
    },
    apply: { isProcessResult: !0, isSkip: !0, transform: h.styles() },
    var: { isProcessSkip: !0, isSkip: !0, transform: h.var },
  },
  kk = {
    accent: T.accentColor,
    bg: T.background,
    bgAttachment: { properties: "backgroundAttachment" },
    bgBlendMode: { properties: "backgroundBlendMode" },
    bgClip: T.backgroundClip,
    bgColor: T.backgroundColor,
    bgImage: T.backgroundImage,
    bgImg: T.backgroundImage,
    bgGradient: T.backgroundImage,
    bgOrigin: { properties: "backgroundOrigin" },
    bgPosition: { properties: "backgroundPosition" },
    bgPositionX: { properties: "backgroundPositionX" },
    bgPosX: { properties: "backgroundPositionX" },
    bgPositionY: { properties: "backgroundPositionY" },
    bgPosY: { properties: "backgroundPositionY" },
    bgRepeat: { properties: "backgroundRepeat" },
    bgSize: { properties: "backgroundSize" },
    roundedBottomLeft: T.borderBottomLeftRadius,
    roundedBottomRight: T.borderBottomRightRadius,
    borderBottomEndRadius: T.borderEndEndRadius,
    roundedBottomEnd: T.borderEndEndRadius,
    borderBottomStartRadius: T.borderEndStartRadius,
    roundedBottomStart: T.borderEndStartRadius,
    borderEnd: T.borderInlineEnd,
    borderEndColor: T.borderInlineEndColor,
    borderEndStyle: { properties: "borderInlineEndStyle" },
    borderEndWidth: T.borderInlineEndWidth,
    borderStart: T.borderInlineStart,
    borderStartColor: T.borderInlineStartColor,
    borderStartStyle: { properties: "borderInlineStartStyle" },
    borderStartWidth: T.borderInlineStartWidth,
    rounded: T.borderRadius,
    borderTopEndRadius: T.borderStartEndRadius,
    roundedTopEnd: T.borderStartEndRadius,
    borderTopStartRadius: T.borderStartStartRadius,
    roundedTopStart: T.borderStartStartRadius,
    roundedTopLeft: T.borderTopLeftRadius,
    roundedTopRight: T.borderTopRightRadius,
    shadow: T.boxShadow,
    caret: T.caretColor,
    textColor: T.color,
    gx: T.columnGap,
    gapX: T.columnGap,
    flexDir: { properties: "flexDirection" },
    text: T.fontSize,
    g: T.gap,
    h: T.height,
    insetEnd: T.insetInlineEnd,
    insetStart: T.insetInlineStart,
    tracking: T.letterSpacing,
    leading: T.lineHeight,
    listStyleImg: { properties: "listStyleImage" },
    listStylePos: { properties: "listStylePosition" },
    m: T.margin,
    mb: T.marginBottom,
    me: T.marginInlineEnd,
    marginEnd: T.marginInlineEnd,
    ms: T.marginInlineStart,
    marginStart: T.marginInlineStart,
    ml: T.marginLeft,
    mr: T.marginRight,
    mt: T.marginTop,
    maxH: T.maxHeight,
    maxW: T.maxWidth,
    minH: T.minHeight,
    minW: T.minWidth,
    blendMode: { properties: "mixBlendMode" },
    overscroll: { properties: "overscrollBehavior" },
    overscrollX: { properties: "overscrollBehaviorX" },
    overscrollY: { properties: "overscrollBehaviorY" },
    p: T.padding,
    pb: T.paddingBottom,
    pe: T.paddingInlineEnd,
    paddingEnd: T.paddingInlineEnd,
    ps: T.paddingInlineStart,
    paddingStart: T.paddingInlineStart,
    pl: T.paddingLeft,
    pr: T.paddingRight,
    pt: T.paddingTop,
    pos: { properties: "position" },
    gy: T.rowGap,
    gapY: T.rowGap,
    textDecor: { properties: "textDecoration" },
    w: T.width,
    z: T.zIndex,
    mx: T.marginX,
    my: T.marginY,
    px: T.paddingX,
    py: T.paddingY,
    roundedTop: T.borderTopRadius,
    roundedBottom: T.borderBottomRadius,
    roundedRight: T.borderRightRadius,
    roundedLeft: T.borderLeftRadius,
    borderStartRadius: T.borderInlineStartRadius,
    roundedStart: T.borderInlineStartRadius,
    borderEndRadius: T.borderInlineEndRadius,
    roundedEnd: T.borderInlineEndRadius,
  },
  wk = {
    _media: { isProcessSkip: !0, isSkip: !0, transform: h.media },
    _container: { isProcessSkip: !0, isSkip: !0, transform: h.container },
    _supports: { isProcessSkip: !0, isSkip: !0, transform: h.supports },
  },
  zd = { ...T, ...kk, ...wk },
  Ck = ["var", "_media", "_container", "_supports"],
  _k = Object.keys(zd),
  Wp = (e) => Ck.includes(e),
  Pk = (e, t) => ({ [e]: t[0], [xr._dark]: { [e]: t[1] } }),
  Ek = (e, t, r) =>
    r.reduce((n, { breakpoint: o, query: i }) => {
      const s = t[o];
      return i ? s && (n[i] = { [e]: s }) : (n[e] = t[o]), n;
    }, {}),
  zk = (e, t) => (r) => {
    if (!r.__breakpoints) return e;
    const { isResponsive: n, queries: o } = r.__breakpoints;
    let i = {};
    for (let [s, a] of Object.entries(e))
      if (((a = Je(a, r)), a != null)) {
        if (O(a) && !(Wp(s) && !t)) {
          i = ue(i, Pk(s, a));
          continue;
        }
        if (Se(a) && n(a) && !(Wp(s) && !t)) {
          i = ue(i, Ek(s, a, o));
          continue;
        }
        i[s] = a;
      }
    return i;
  },
  Tk = ({ theme: e, styles: t = {}, pseudos: r = {}, disableStyleProp: n }) => {
    const o = (i, s = !1) => {
      var a, l, u;
      const c = Je(i, e),
        d = zk(c, s)(e);
      let f = {};
      for (let [g, x] of Object.entries(d)) {
        if ((n != null && n(g)) || ((x = Je(x, e)), x == null)) continue;
        g in r && (g = r[g]);
        let v = t[g];
        if (
          (v === !0 && (v = { properties: g }),
          Se(x) && !(v != null && v.isProcessSkip))
        ) {
          (f[g] = (a = f[g]) != null ? a : {}), (f[g] = ue(f[g], o(x, !0)));
          continue;
        }
        if (
          ((x =
            (u =
              (l = v == null ? void 0 : v.transform) == null
                ? void 0
                : l.call(v, x, e, Nn, f)) != null
              ? u
              : x),
          ((v != null && v.isProcessResult) ||
            (v != null && v.isProcessSkip)) &&
            (x = o(x, !0)),
          !s && v != null && v.static)
        ) {
          const p = Je(v.static, e);
          f = ue(f, p);
        }
        const w = Je(v == null ? void 0 : v.properties, e);
        if (w)
          if (O(w)) {
            for (const p of w) f[p] = x;
            continue;
          } else if (Se(x)) {
            f = ue(f, x);
            continue;
          } else {
            f[w] = x;
            continue;
          }
        if (Se(x)) {
          f = ue(f, x);
          continue;
        }
        f[g] = x;
      }
      return f;
    };
    return o;
  },
  Nn = (e) => (t, r) =>
    Tk({ theme: t, styles: zd, pseudos: xr, disableStyleProp: r })(e),
  Ak = (e, t) => {
    const r = `--${[t, Jb(e, "-")].filter(Boolean).join("-")}`,
      n = `var(${r})`;
    return { variable: r, reference: n };
  },
  Hp = (e, t) => ((e = e.replace(/\./g, "-")), Ak(e, t)),
  en =
    (e, t = "ui") =>
    ({ baseTokens: r, cssMap: n = {}, cssVars: o = {} } = {}) => {
      for (let [i, { isSemantic: s, value: a }] of Object.entries(e)) {
        const l = (w = "") => {
            var p;
            const [m] = i.split("."),
              y = [m, w].join(".");
            if (!((p = e[y]) != null ? p : r == null ? void 0 : r[y]))
              return [, w];
            const { variable: C, reference: P } = Hp(y, t);
            return [C, P];
          },
          { variable: u, reference: c } = Hp(i, t);
        let d, f;
        const g = { __cssMap: n };
        if (i.startsWith("animations."))
          O(a)
            ? (d = a.map((w) => oc(w, g, Nn)).join(","))
            : (d = oc(a, g, Nn));
        else {
          let [w, p] = O(a) ? [...a] : [a];
          if (i.startsWith("gradients.")) {
            const [m, y] = l(w),
              [k, C] = l(p);
            m ? (d = y) : (d = nc(l(w)[1], g)), k ? (f = C) : (f = nc(p, g));
          } else (d = w), (f = p);
        }
        if (!s) {
          if (i.startsWith("spaces") && !ka(d)) {
            const w = i.split("."),
              [p, ...m] = w,
              y = `${p}.-${m.join(".")}`,
              k = St.negate(d),
              C = St.negate(c);
            n[y] = { value: k, var: u, ref: C };
          }
          (o[u] = d),
            f && (o = ue(o, { [xr._dark]: { [u]: f } })),
            (n[i] = { value: d, var: u, ref: c });
          continue;
        }
        const [x, v] = l(d);
        if (((o = ue(o, { [u]: v })), f)) {
          const [, w] = l(f);
          o = ue(o, { [xr._dark]: { [u]: w } });
        }
        n[i] = { value: x ?? d, var: u, ref: c };
      }
      return { cssMap: n, cssVars: o };
    },
  Up = [
    "blurs",
    "borders",
    "colors",
    "fonts",
    "fontSizes",
    "fontWeights",
    "letterSpacings",
    "lineHeights",
    "radii",
    "shadows",
    "sizes",
    "spaces",
    "zIndices",
  ],
  Gp = ["gradients"],
  Rk = (e, t) => {
    var r;
    e = $k(e);
    const { breakpoints: n, themeSchemes: o } = e ?? {},
      i = (r = t == null ? void 0 : t.var) == null ? void 0 : r.prefix,
      s = tn(e),
      a = tn(e, "secondary"),
      l = tn(e, "animation");
    let { cssMap: u, cssVars: c } = Yp(en(s, i), en(a, i), en(l, i))();
    if (o)
      for (const [f, g] of Object.entries(o)) {
        const x = tn(g),
          v = tn(g, "secondary"),
          w = tn(g, "animation");
        let { cssVars: p } = Yp(
          en(x, i),
          en(v, i),
          en(w, i),
        )({ ...s, ...a, ...l });
        c = {
          ...c,
          [`[data-theme=${f}] &:not([data-theme]), &[data-theme=${f}]`]: p,
        };
      }
    return (
      Object.assign(e, {
        __config: t,
        __cssVars: { ...{}, ...c },
        __cssMap: u,
        __breakpoints: bk(n, t == null ? void 0 : t.breakpoint),
      }),
      e
    );
  },
  tn = (e, t = "primary") => {
    var r;
    let n = [],
      o = [],
      i = [];
    switch (t) {
      case "primary":
        (n = [...Up, "transitions"]),
          (o = [...Up, "transitions", "colorSchemes"]);
        break;
      case "secondary":
        (n = [...Gp]), (o = [...Gp]);
        break;
      case "animation":
        (n = ["animations"]), (o = ["animations"]), (i = ["keyframes"]);
        break;
    }
    const s = Ku(e, n),
      a = Ku((r = e.semantics) != null ? r : {}, o),
      l = Object.entries(qu(s, 1 / 0, i)).map(([c, d]) => [
        c,
        { isSemantic: !1, value: d },
      ]),
      u = Object.entries(qu(a, 1 / 0, i)).reduce((c, [d, f]) => {
        if (d.startsWith("colorSchemes.")) {
          const [, g] = d.split(".");
          Bb.forEach((x) => {
            const v = { isSemantic: !0, value: `${f}.${x}` };
            c.push([`colors.${g}.${x}`, v]);
          });
        } else {
          const g = { isSemantic: !0, value: f };
          c.push([d, g]);
        }
        return c;
      }, []);
    return Xb([...l, ...u]);
  },
  Yp =
    (...e) =>
    (t) => {
      let r = {},
        n = {};
      for (const o of e) {
        const { cssMap: i, cssVars: s } = o({
          baseTokens: t,
          cssMap: r,
          cssVars: n,
        });
        (r = { ...r, ...i }), (n = { ...n, ...s });
      }
      return { cssMap: r, cssVars: n };
    },
  $k = (e) => hi(e, ["__cssMap", "__cssVar", "__breakpoints"]),
  Zt = (e, t = []) => hi(e, ["size", "variant", "colorScheme", ...t]),
  ny =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => Xs(oy(o)({ omit: r, pick: n }), i), e),
  J =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => Xs(oy(o)({ omit: r, pick: n, isMulti: !0 }), i), e),
  Xs = (e, t) => {
    let r = Object.assign({}, e);
    if (Se(t) && Se(e))
      for (const [n, o] of Object.entries(t)) {
        const i = e[n];
        e.hasOwnProperty(n)
          ? !Xr(i) && !Xr(o)
            ? (r[n] = Xs(i, o))
            : (r[n] = (s) => Xs(Je(i, s), Je(o, s)))
          : Object.assign(r, { [n]: o });
      }
    else r = t;
    return r;
  },
  oy =
    (e) =>
    ({ omit: t, pick: r, isMulti: n = !1 }) => (
      Se(e) &&
        (t.length && (e = _o(e, t, n)(hi)), r.length && (e = _o(e, r, n)(Ku))),
      e
    ),
  _o =
    (e, t, r, n = []) =>
    (o) => (
      Se(e) &&
        ((e = o(e, t)),
        Object.entries(e ?? {}).forEach(([i, s]) => {
          const a = t.filter((u) => u !== i),
            l = [...n, i];
          Mk(l, r) &&
            (Xr(s)
              ? (e[i] = (u) => _o(s(u), a, r, l)(o))
              : o === hi || Object.keys(s).some((u) => a.includes(u))
                ? (e[i] = _o(s, a, r, l)(o))
                : (e[i] = ue(e[i], _o(s, a, r, l)(o))));
        })),
      e
    ),
  Mk = (e, t) => {
    switch (e[0]) {
      case "baseStyle":
        return e.length < (t ? 2 : 1);
      case "variants":
      case "sizes":
        return e.length < (t ? 3 : 2);
      default:
        return !1;
    }
  },
  jk = (e, t, r = !0) => {
    const n = {};
    return (
      Object.entries(e).forEach(([o, i]) => {
        switch (o) {
          case "baseStyle":
            Xr(i) ? (n[o] = (s) => i(s)[t]) : (n[o] = i[t]);
            break;
          case "variants":
          case "sizes":
            n[o] = Object.entries(i).reduce(
              (s, [a, l]) => (
                Xr(l) ? (s[a] = (u) => l(u)[t]) : (s[a] = l[t]), s
              ),
              {},
            );
            break;
          case "defaultProps":
            r && (n[o] = i);
            break;
        }
      }),
      n
    );
  },
  jl = "ui-color-mode",
  iy = !!(globalThis != null && globalThis.document),
  Xp = (e) => ({
    ssr: !1,
    type: "localStorage",
    get:
      (t = "light") =>
      (r = e) => {
        if (!iy) return t;
        try {
          return localStorage.getItem(r) || t;
        } catch {
          return t;
        }
      },
    set:
      (t) =>
      (r = e) => {
        try {
          localStorage.setItem(r, t);
        } catch {}
      },
  }),
  Qp = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  Ll = (e, t) => ({
    ssr: !!t,
    type: "cookie",
    get:
      (r = "light") =>
      (n = e) =>
        t ? Qp(t, n) || r : (iy && Qp(document.cookie, n)) || r,
    set:
      (r) =>
      (n = e) => {
        document.cookie = `${n}=${r}; max-age=31536000; path=/`;
      },
  }),
  Lk = {
    localStorage: Xp(jl),
    cookieStorage: Ll(jl),
    ssr: (e) => Ll(jl, e),
    createLocalStorage: Xp,
    createCookieStorage: Ll,
  },
  Hi = { light: "ui-light", dark: "ui-dark" },
  Ik = {
    light: "(prefers-color-scheme: light)",
    dark: "(prefers-color-scheme: dark)",
  },
  Dk = ({ isPreventTransition: e = !0 }) => {
    const t = (a) => {
        const l = e ? s() : void 0;
        (document.documentElement.dataset.mode = a),
          (document.documentElement.style.colorScheme = a),
          l == null || l();
      },
      r = (a) => {
        document.body.classList.add(a ? Hi.dark : Hi.light),
          document.body.classList.remove(a ? Hi.light : Hi.dark);
      },
      n = () => window.matchMedia(Ik.dark),
      o = (a) => {
        var l;
        return ((l = n().matches) != null ? l : a === "dark")
          ? "dark"
          : "light";
      },
      i = (a) => {
        const l = n(),
          u = (c) => {
            a(c.matches ? "dark" : "light");
          };
        return (
          typeof l.addListener == "function"
            ? l.addListener(u)
            : l.addEventListener("change", u),
          () => {
            typeof l.removeListener == "function"
              ? l.removeListener(u)
              : l.removeEventListener("change", u);
          }
        );
      },
      s = () => {
        const a = document.createElement("style"),
          l = document.createTextNode(
            "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
          );
        return (
          a.appendChild(l),
          document.head.appendChild(a),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(a);
                });
              });
          }
        );
      };
    return {
      setDataset: t,
      setClassName: r,
      query: n,
      getSystemColorMode: o,
      addListener: i,
      preventTransition: s,
    };
  },
  { localStorage: Vk } = Lk,
  Bk = (e, t) => (r) => (e.type === "cookie" && e.ssr ? e.get(t)(r) : t),
  sy = S.createContext({}),
  Nk = ({
    colorMode: e,
    colorModeManager: t = Vk,
    storageKey: r,
    config: {
      initialColorMode: n = "light",
      disableTransitionOnChange: o = !0,
    } = {},
    children: i,
  }) => {
    const [s, a] = S.useState(() => Bk(t, n)(r)),
      [l, u] = S.useState(void 0),
      d = s === "system" ? l || (n === "dark" ? "dark" : "light") : s,
      {
        getSystemColorMode: f,
        setClassName: g,
        setDataset: x,
        addListener: v,
      } = S.useMemo(() => Dk({ isPreventTransition: o }), [o]),
      w = S.useCallback(
        (k) => {
          const C = k === "system" ? f() : k;
          a(k), g(C === "dark"), x(C), t.set(k)(r);
        },
        [t, f, g, x, r],
      ),
      p = S.useCallback(
        (k) => {
          u(k), s === "system" && (g(k === "dark"), x(k));
        },
        [s, g, x],
      ),
      m = S.useCallback(() => {
        w(d === "dark" ? "light" : "dark");
      }, [w, d]);
    Us(() => {
      u(f());
    }, [n, v, w]),
      S.useEffect(() => {
        const k = t.get()(r);
        k && w(k);
      }, [w, t, r]),
      S.useEffect(() => v(p), [v, p]);
    const y = S.useMemo(
      () => ({
        colorMode: e ?? d,
        internalColorMode: s,
        changeColorMode: e ? Sp : w,
        toggleColorMode: e ? Sp : m,
        forced: e !== void 0,
      }),
      [e, d, s, w, m],
    );
    return b.jsx(sy.Provider, { value: y, children: i });
  },
  gi = () => {
    const e = S.useContext(sy);
    return e ?? { colorMode: "light", internalColorMode: "light", forced: !1 };
  },
  Il = "ui-theme-scheme",
  ay = !!(globalThis != null && globalThis.document),
  Kp = (e) => ({
    ssr: !1,
    type: "localStorage",
    get:
      (t = "base") =>
      (r = e) => {
        if (!ay) return t;
        try {
          return localStorage.getItem(r) || t;
        } catch {
          return t;
        }
      },
    set:
      (t) =>
      (r = e) => {
        try {
          localStorage.setItem(r, String(t));
        } catch {}
      },
  }),
  qp = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  Dl = (e, t) => ({
    ssr: !!t,
    type: "cookie",
    get:
      (r = "base") =>
      (n = e) =>
        t ? qp(t, n) || r : (ay && qp(document.cookie, n)) || r,
    set:
      (r) =>
      (n = e) => {
        document.cookie = `${n}=${r}; max-age=31536000; path=/`;
      },
  }),
  Ok = {
    localStorage: Kp(Il),
    cookieStorage: Dl(Il),
    ssr: (e) => Dl(Il, e),
    createLocalStorage: Kp,
    createCookieStorage: Dl,
  },
  { localStorage: Fk } = Ok,
  Wk = ({
    theme: e = {},
    config: t,
    themeSchemeManager: r = Fk,
    storageKey: n,
    children: o,
  }) => {
    const [i, s] = S.useState(
        r.get(t == null ? void 0 : t.initialThemeScheme)(n),
      ),
      a = S.useCallback(
        (u) => {
          const c = t != null && t.disableTransitionOnChange ? Yk() : void 0;
          (document.documentElement.dataset.theme = u),
            c == null || c(),
            s(u),
            r.set(u)(n);
        },
        [t, r, n],
      ),
      l = S.useMemo(() => Rk(e, t), [e, t]);
    return (
      S.useEffect(() => {
        const u = r.get()(n);
        u && a(u);
      }, [a, r, n]),
      b.jsxs(QS, {
        theme: { themeScheme: i, changeThemeScheme: a, ...l },
        children: [b.jsx(Hk, {}), o],
      })
    );
  },
  Hk = () =>
    b.jsx(Ed, {
      styles: ({ __cssVars: e }) => ({ ":host, :root, [data-mode]": e }),
    }),
  Uk = () => {
    const { colorMode: e } = gi();
    return b.jsx(Ed, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = L(t, "styles.resetStyle", {});
        const o = Je(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Nn(o)(t);
      },
    });
  },
  Gk = () => {
    const { colorMode: e } = gi();
    return b.jsx(Ed, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = L(t, "styles.globalStyle", {});
        const o = Je(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Nn(o)(t);
      },
    });
  },
  Ba = () => {
    const { themeScheme: e, changeThemeScheme: t, ...r } = S.useContext(ti),
      n = S.useMemo(() => {
        var i;
        if (ka(e) || e === "base") return r;
        const s = (i = r.themeSchemes) == null ? void 0 : i[e];
        return s ? ue(r, s) : r;
      }, [e, r]);
    return S.useMemo(
      () => ({
        themeScheme: e,
        changeThemeScheme: t,
        theme: n,
        internalTheme: r,
      }),
      [e, t, n, r],
    );
  },
  Yk = () => {
    const e = document.createElement("style"),
      t = document.createTextNode(
        "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
      );
    return (
      e.appendChild(t),
      document.head.appendChild(e),
      () => {
        window.getComputedStyle(document.body),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              document.head.removeChild(e);
            });
          });
      }
    );
  },
  Xk =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      const [o, i] = e,
        s = Fr(t[o], r)({ isMulti: n, query: xr._light }),
        a = Fr(t[i], r)({ isMulti: n, query: xr._dark });
      return [s, a];
    },
  Qk =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      var o, i;
      const s = Lg(e);
      if (s.length === 1 && "base" in e)
        return Fr(t[e.base], r)({ isMulti: n });
      {
        const { queries: a = [] } =
            (o = r.theme.__breakpoints) != null ? o : {},
          { breakpoint: l } = (i = r.theme.__config) != null ? i : {},
          u = l === "down",
          c = a
            .filter(({ breakpoint: f }) => f !== "base" && s.includes(f))
            .sort((f, g) => {
              var x, v, w, p;
              return u
                ? ((x = f.maxW) != null ? x : 0) -
                    ((v = g.maxW) != null ? v : 0)
                : ((w = g.minW) != null ? w : 0) -
                    ((p = f.minW) != null ? p : 0);
            })[0];
        let d = !1;
        return a.reduce(
          (
            f,
            { breakpoint: g, minW: x, maxW: v, maxWQuery: w, minWQuery: p },
            m,
          ) => {
            var y;
            const k = e[g],
              C = g === c.breakpoint;
            if (g === "base" || !k) return f;
            if (!d) {
              const z = e.base,
                M = a[m - 1],
                A = M == null ? void 0 : M[u ? "minWQuery" : "maxWQuery"],
                G = Fr(z ? t[z] : {}, r)({ isMulti: n, query: A });
              (f = ue(f, G)), (d = !0);
            }
            let P = u ? w : p;
            if (!C) {
              let z = m + 1,
                M;
              for (; z < a.length; ) {
                const A = (y = a[z]) != null ? y : {};
                if (e[A.breakpoint]) {
                  const G = z - 1;
                  M = a[G];
                  break;
                }
                z += 1;
              }
              (x = u ? (M == null ? void 0 : M.minW) : x),
                (v = u ? v : M == null ? void 0 : M.maxW),
                (P = ms(x, v));
            }
            const _ = Fr(t[k], r)({ isMulti: n, query: P });
            return (f = ue(f, _)), f;
          },
          {},
        );
      }
    },
  Zp =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      let o = {};
      if (O(e)) {
        const [i, s] = Xk(e, t, r)({ isMulti: n });
        o = ue(i, s);
      } else
        Se(e)
          ? (o = Qk(e, t, r)({ isMulti: n }))
          : (o = Fr(t[e], r)({ isMulti: n }));
      return o;
    },
  Fr =
    (e, t) =>
    ({ isMulti: r = !1, query: n }) => {
      let o = Je(e, t);
      if (r)
        for (const [i, s] of Object.entries(o ?? {})) {
          const a = Je(s, t);
          n ? (o = ue(o, { [i]: { [n]: a } })) : (o = ue(o, { [i]: a }));
        }
      else if (n) return { [n]: o };
      return o;
    },
  ly = (e, t, { isMulti: r, isProcessSkip: n, styles: o } = {}) => {
    var i, s, a, l;
    const { theme: u, themeScheme: c } = Ba(),
      { colorMode: d } = gi(),
      f = S.useRef({}),
      g = S.useRef(o ?? {});
    if (!n) {
      const v = L(u, `components.${e}`);
      if (
        ((t = ue(
          (i = v == null ? void 0 : v.defaultProps) != null ? i : {},
          Ca(t),
        )),
        v)
      ) {
        const w = hi(t, ["children"]);
        let p = Fr((s = v.baseStyle) != null ? s : {}, {
          theme: u,
          colorMode: d,
          themeScheme: c,
          ...w,
        })({ isMulti: r });
        const m = Zp(t.variant, (a = v.variants) != null ? a : {}, {
            theme: u,
            colorMode: d,
            themeScheme: c,
            ...w,
          })({ isMulti: r }),
          y = Zp(t.size, (l = v.sizes) != null ? l : {}, {
            theme: u,
            colorMode: d,
            themeScheme: c,
            ...w,
          })({ isMulti: r });
        (p = ue(p, y)), (p = ue(p, m)), Lp(g.current, p) || (g.current = p);
      }
    }
    return Lp(f.current, t) || (f.current = t), [g.current, f.current];
  },
  Qn = (e, t, r) => ly(e, t, r),
  Na = (e, t, r) => ly(e, t, { isMulti: !0, ...r }),
  Kk = new Set([
    ..._k,
    ...Sk,
    "textStyle",
    "layerStyle",
    "apply",
    "lineClamp",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  qk = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]),
  Zk = (e) => (t) => {
    var r;
    return (
      qk.has(t) ||
      ((r = e == null ? void 0 : e(t)) != null ? r : !1) ||
      !Kk.has(t)
    );
  },
  Jk = Zb(tc),
  ew = { ...zd, ...xr },
  tw =
    ({ baseStyle: e, disableStyleProp: t }) =>
    (r) => {
      const { theme: n, css: o, __css: i, sx: s, ...a } = r,
        l = jg(a, (d) => d in ew),
        u = Je(e, r),
        c = Nn(qb({}, i, u, Ca(l), s))(n, t);
      return o ? [c, o] : c;
    },
  Vl = (e, { baseStyle: t, disableStyleProp: r, ...n } = {}) => {
    n.shouldForwardProp || (n.shouldForwardProp = Zk(r));
    const o = tw({ baseStyle: t, disableStyleProp: r }),
      i = Jk(e, n)(o),
      s = S.forwardRef((a, l) => {
        const { colorMode: u, forced: c } = gi();
        return S.createElement(i, {
          ref: l,
          "data-mode": c ? u : void 0,
          ...a,
        });
      });
    return (s.displayName = "UIComponent"), s;
  },
  rw = () => {
    const e = new Map();
    return new Proxy(Vl, {
      apply: (t, r, [n, o]) => Vl(n, o),
      get: (t, r) => (e.has(r) || e.set(r, Vl(r)), e.get(r)),
    });
  },
  U = rw(),
  nw = (e, t) => {
    const { theme: r } = Ba(),
      { colorMode: n } = gi();
    return ow(e, t)(r, n);
  },
  ow = (e, t) => (r, n) => {
    var o, i, s;
    let a = L(r, `${e}.${t}`);
    if (ka(a))
      if (
        ((a = L(r, `semantics.${e}.${t}`)),
        O(a)
          ? (a = [
              (o = L(r, `${e}.${a[0]}`)) != null ? o : a[0],
              (i = L(r, `${e}.${a[1]}`)) != null ? i : a[1],
            ])
          : (a = (s = L(r, `${e}.${a}`)) != null ? s : a),
        O(a))
      ) {
        const [l, u] = a;
        if (((a = n === "light" ? l : u), O(a))) {
          const [c, d] = a;
          return n === "light" ? c : d;
        } else return a;
      } else return a;
    else if (O(a)) {
      const [l, u] = a;
      return n === "light" ? l : u;
    } else return a;
  },
  gt = F(({ as: e, viewBox: t, size: r, className: n, __css: o, ...i }, s) => {
    const a = po(r, (u) => (kb(u) ? u : nw("fontSizes", u))),
      l = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: "currentColor",
        ...o,
      };
    return e && typeof e != "string"
      ? b.jsx(U.svg, {
          as: e,
          className: H("ui-icon", n),
          __css: l,
          boxSize: a,
          ...i,
        })
      : b.jsx(U.svg, {
          ref: s,
          verticalAlign: "middle",
          viewBox: t,
          className: H("ui-icon", n),
          __css: l,
          boxSize: a,
          ...i,
        });
  }),
  iw = (e) =>
    b.jsx(gt, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
      }),
    }),
  sw = (e) =>
    b.jsx(gt, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
      }),
    }),
  Jp = (e) =>
    b.jsx(gt, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
      }),
    }),
  aw = (e) =>
    b.jsx(gt, {
      focusable: "false",
      "aria-hidden": !0,
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
      }),
    }),
  lw = F(({ color: e, duration: t = "1.8s", ...r }, n) =>
    b.jsx(gt, {
      ref: n,
      viewBox: "0 0 44 44",
      stroke: e,
      ...r,
      children: b.jsxs("g", {
        fill: "none",
        fillRule: "evenodd",
        strokeWidth: "2",
        children: [
          b.jsxs("circle", {
            cx: "22",
            cy: "22",
            r: "1",
            children: [
              b.jsx("animate", {
                attributeName: "r",
                begin: "0s",
                dur: t,
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-opacity",
                begin: "0s",
                dur: t,
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite",
              }),
            ],
          }),
          b.jsxs("circle", {
            cx: "22",
            cy: "22",
            r: "1",
            children: [
              b.jsx("animate", {
                attributeName: "r",
                begin: "-0.9s",
                dur: t,
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-opacity",
                begin: "-0.9s",
                dur: t,
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite",
              }),
            ],
          }),
        ],
      }),
    }),
  ),
  uw = F(({ color: e, duration: t = "3s", ...r }, n) => {
    const o = typeof t == "string" ? parseFloat(t) : t;
    return b.jsx(gt, {
      ref: n,
      viewBox: "0 0 45 45",
      stroke: e,
      ...r,
      children: b.jsxs("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1)",
        strokeWidth: "2",
        children: [
          b.jsxs("circle", {
            cx: "22",
            cy: "22",
            r: "6",
            strokeOpacity: "0",
            children: [
              b.jsx("animate", {
                attributeName: "r",
                begin: "1.5s",
                dur: `${o}s`,
                values: "6;22",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-opacity",
                begin: "1.5s",
                dur: `${o}s`,
                values: "1;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-width",
                begin: "1.5s",
                dur: `${o}s`,
                values: "2;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            ],
          }),
          b.jsxs("circle", {
            cx: "22",
            cy: "22",
            r: "6",
            strokeOpacity: "0",
            children: [
              b.jsx("animate", {
                attributeName: "r",
                begin: "3s",
                dur: `${o}s`,
                values: "6;22",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-opacity",
                begin: "3s",
                dur: `${o}s`,
                values: "1;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
              b.jsx("animate", {
                attributeName: "stroke-width",
                begin: "3s",
                dur: `${o}s`,
                values: "2;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            ],
          }),
          b.jsx("circle", {
            cx: "22",
            cy: "22",
            r: "8",
            children: b.jsx("animate", {
              attributeName: "r",
              begin: "0s",
              dur: `${o / 2}s`,
              values: "6;1;2;3;4;5;6",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
        ],
      }),
    });
  }),
  cw = F(({ color: e, duration: t = "1.4s", ...r }, n) => {
    const o = typeof t == "string" ? parseFloat(t) : t;
    return b.jsx(gt, {
      ref: n,
      viewBox: "0 0 55 80",
      fill: e,
      ...r,
      children: b.jsxs("g", {
        transform: "matrix(1 0 0 -1 0 80)",
        children: [
          b.jsx("rect", {
            width: "10",
            height: "20",
            rx: "3",
            children: b.jsx("animate", {
              attributeName: "height",
              begin: "0s",
              dur: `${o * 3}s`,
              values:
                "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          b.jsx("rect", {
            x: "15",
            width: "10",
            height: "80",
            rx: "3",
            children: b.jsx("animate", {
              attributeName: "height",
              begin: "0s",
              dur: `${o * 1.4}s`,
              values: "80;55;33;5;75;23;73;33;12;14;60;80",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          b.jsx("rect", {
            x: "30",
            width: "10",
            height: "50",
            rx: "3",
            children: b.jsx("animate", {
              attributeName: "height",
              begin: "0s",
              dur: `${o}s`,
              values: "50;34;78;23;56;23;34;76;80;54;21;50",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          b.jsx("rect", {
            x: "45",
            width: "10",
            height: "30",
            rx: "3",
            children: b.jsx("animate", {
              attributeName: "height",
              begin: "0s",
              dur: `${o * 1.4}s`,
              values: "30;45;13;80;56;72;45;76;34;23;67;30",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
        ],
      }),
    });
  }),
  dw = F(({ color: e, duration: t = "3s", ...r }, n) =>
    b.jsx(gt, {
      ref: n,
      viewBox: "0 0 58 58",
      stroke: e,
      ...r,
      children: b.jsx("g", {
        fill: "none",
        fillRule: "evenodd",
        children: b.jsxs("g", {
          transform: "translate(2 1)",
          stroke: e,
          strokeWidth: "1.5",
          children: [
            b.jsx("circle", {
              cx: "42.601",
              cy: "11.462",
              r: "5",
              fillOpacity: "1",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "1;0;0;0;0;0;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "49.063",
              cy: "27.063",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;1;0;0;0;0;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "42.601",
              cy: "42.663",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;1;0;0;0;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "27",
              cy: "49.125",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;0;1;0;0;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "11.399",
              cy: "42.663",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;0;0;1;0;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "4.938",
              cy: "27.063",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;0;0;0;1;0;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "11.399",
              cy: "11.462",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;0;0;0;0;1;0",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
            b.jsx("circle", {
              cx: "27",
              cy: "5",
              r: "5",
              fillOpacity: "0",
              fill: e,
              children: b.jsx("animate", {
                attributeName: "fill-opacity",
                begin: "0s",
                dur: t,
                values: "0;0;0;0;0;0;0;1",
                calcMode: "linear",
                repeatCount: "indefinite",
              }),
            }),
          ],
        }),
      }),
    }),
  ),
  fw = F(({ color: e, duration: t = "1s", ...r }, n) =>
    b.jsxs(gt, {
      ref: n,
      viewBox: "0 0 120 30",
      fill: e,
      ...r,
      children: [
        b.jsxs("circle", {
          cx: "15",
          cy: "15",
          r: "15",
          children: [
            b.jsx("animate", {
              attributeName: "r",
              from: "15",
              to: "15",
              begin: "0s",
              dur: t,
              values: "15;9;15",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            b.jsx("animate", {
              attributeName: "fill-opacity",
              from: "1",
              to: "1",
              begin: "0s",
              dur: t,
              values: "1;.5;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ],
        }),
        b.jsxs("circle", {
          cx: "60",
          cy: "15",
          r: "9",
          fillOpacity: "0.3",
          children: [
            b.jsx("animate", {
              attributeName: "r",
              from: "9",
              to: "9",
              begin: "0s",
              dur: t,
              values: "9;15;9",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            b.jsx("animate", {
              attributeName: "fill-opacity",
              from: "0.5",
              to: "0.5",
              begin: "0s",
              dur: t,
              values: ".5;1;.5",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ],
        }),
        b.jsxs("circle", {
          cx: "105",
          cy: "15",
          r: "15",
          children: [
            b.jsx("animate", {
              attributeName: "r",
              from: "15",
              to: "15",
              begin: "0s",
              dur: t,
              values: "15;9;15",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            b.jsx("animate", {
              attributeName: "fill-opacity",
              from: "1",
              to: "1",
              begin: "0s",
              dur: t,
              values: "1;.5;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ],
        }),
      ],
    }),
  ),
  pw = F(({ color: e, duration: t = "1s", ...r }, n) =>
    b.jsxs(gt, {
      ref: n,
      viewBox: "0 0 105 105",
      fill: e,
      ...r,
      children: [
        b.jsx("circle", {
          cx: "12.5",
          cy: "12.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "12.5",
          cy: "52.5",
          r: "12.5",
          fillOpacity: ".5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "100ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "52.5",
          cy: "12.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "300ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "52.5",
          cy: "52.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "600ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "92.5",
          cy: "12.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "800ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "92.5",
          cy: "52.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "400ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "12.5",
          cy: "92.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "700ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "52.5",
          cy: "92.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "500ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
        b.jsx("circle", {
          cx: "92.5",
          cy: "92.5",
          r: "12.5",
          children: b.jsx("animate", {
            attributeName: "fill-opacity",
            begin: "200ms",
            dur: t,
            values: "1;.2;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        }),
      ],
    }),
  ),
  hw = F(({ color: e, secondaryColor: t, duration: r = "1s", ...n }, o) =>
    b.jsx(gt, {
      ref: o,
      viewBox: "0 0 38 38",
      stroke: e,
      ...n,
      children: b.jsx("g", {
        fill: "none",
        fillRule: "evenodd",
        children: b.jsxs("g", {
          transform: "translate(1 1)",
          strokeWidth: "2",
          children: [
            b.jsx("circle", {
              ...(t ? { stroke: t } : { strokeOpacity: ".5" }),
              cx: "18",
              cy: "18",
              r: "18",
            }),
            b.jsx("path", {
              d: "M36 18c0-9.94-8.06-18-18-18",
              children: b.jsx("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 18 18",
                to: "360 18 18",
                dur: r,
                repeatCount: "indefinite",
              }),
            }),
          ],
        }),
      }),
    }),
  ),
  On = F((e, t) => {
    const [
        r,
        {
          className: n,
          variant: o = "oval",
          color: i,
          secondaryColor: s,
          colorScheme: a = "primary",
          size: l = "1em",
          dur: u,
          duration: c,
          ...d
        },
      ] = Qn("Loading", e),
      f = S.useMemo(
        () => ({
          className: H("ui-loading", n),
          size: l,
          var: [
            { __prefix: "ui", name: "color", token: "colors", value: i ?? a },
            {
              __prefix: "ui",
              name: "secondary-color",
              token: "colors",
              value: s,
            },
          ],
          color: "var(--ui-color)",
          ...(s ? { secondaryColor: "var(--ui-secondary-color)" } : {}),
          duration: c ?? u,
          __css: { ...r },
          ...d,
        }),
        [n, i, s, a, l, c, u, d, r],
      );
    switch (o) {
      case "grid":
        return b.jsx(pw, { ref: t, ...f });
      case "audio":
        return b.jsx(cw, { ref: t, ...f });
      case "dots":
        return b.jsx(fw, { ref: t, ...f });
      case "puff":
        return b.jsx(lw, { ref: t, ...f });
      case "rings":
        return b.jsx(uw, { ref: t, ...f });
      case "circles":
        return b.jsx(dw, { ref: t, ...f });
      default:
        return b.jsx(hw, { ref: t, ...f });
    }
  });
const Qs = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Oa = S.createContext({});
function mw() {
  return S.useContext(Oa).visualElement;
}
const yi = S.createContext(null),
  Fa = typeof document < "u",
  Ks = Fa ? S.useLayoutEffect : S.useEffect,
  uy = S.createContext({ strict: !1 });
function gw(e, t, r, n) {
  const o = mw(),
    i = S.useContext(uy),
    s = S.useContext(yi),
    a = S.useContext(Qs).reducedMotion,
    l = S.useRef();
  (n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    S.useInsertionEffect(() => {
      u && u.update(r, s);
    }),
    Ks(() => {
      u && u.render();
    }),
    S.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Ks : S.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function xn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function yw(e, t, r) {
  return S.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : xn(r) && (r.current = n));
    },
    [t],
  );
}
function ri(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Wa(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Td = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ad = ["initial", ...Td];
function Ha(e) {
  return Wa(e.animate) || Ad.some((t) => ri(e[t]));
}
function cy(e) {
  return !!(Ha(e) || e.variants);
}
function vw(e, t) {
  if (Ha(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ri(r) ? r : void 0,
      animate: ri(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function xw(e) {
  const { initial: t, animate: r } = vw(e, S.useContext(Oa));
  return S.useMemo(() => ({ initial: t, animate: r }), [eh(t), eh(r)]);
}
function eh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const th = {
    animation: [
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ni = {};
for (const e in th) ni[e] = { isEnabled: (t) => th[e].some((r) => !!t[r]) };
function bw(e) {
  for (const t in e) ni[t] = { ...ni[t], ...e[t] };
}
function Ua(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Po = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let Sw = 1;
function kw() {
  return Ua(() => {
    if (Po.hasEverUpdated) return Sw++;
  });
}
const Rd = S.createContext({}),
  dy = S.createContext({}),
  ww = Symbol.for("motionComponentSymbol");
function Cw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && bw(e);
  function i(a, l) {
    let u;
    const c = { ...S.useContext(Qs), ...a, layoutId: _w(a) },
      { isStatic: d } = c,
      f = xw(a),
      g = d ? void 0 : kw(),
      x = n(a, d);
    if (!d && Fa) {
      f.visualElement = gw(o, x, c, t);
      const v = S.useContext(dy),
        w = S.useContext(uy).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, w, e, g, v));
    }
    return S.createElement(
      Oa.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      r(o, a, g, yw(x, f.visualElement, l), x, d, f.visualElement),
    );
  }
  const s = S.forwardRef(i);
  return (s[ww] = o), s;
}
function _w({ layoutId: e }) {
  const t = S.useContext(Rd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Pw(e) {
  function t(n, o = {}) {
    return Cw(e(n, o));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
  });
}
const Ew = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function $d(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Ew.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const qs = {};
function zw(e) {
  Object.assign(qs, e);
}
const Ga = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  qr = new Set(Ga);
function fy(e, { layout: t, layoutId: r }) {
  return (
    qr.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!qs[e] || e === "opacity"))
  );
}
const Qe = (e) => !!(e && e.getVelocity),
  Tw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Aw = Ga.length;
function Rw(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o,
) {
  let i = "";
  for (let s = 0; s < Aw; s++) {
    const a = Ga[s];
    if (e[a] !== void 0) {
      const l = Tw[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, n ? "" : i)) : r && n && (i = "none"),
    i
  );
}
const py = (e) => (t) => typeof t == "string" && t.startsWith(e),
  hy = py("--"),
  ic = py("var(--"),
  $w = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Fn = (e, t, r) => Math.min(Math.max(r, e), t),
  Zr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Eo = { ...Zr, transform: (e) => Fn(0, 1, e) },
  Ui = { ...Zr, default: 1 },
  zo = (e) => Math.round(e * 1e5) / 1e5,
  oi = /(-)?([\d]*\.?[\d])+/g,
  sc =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Mw =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function vi(e) {
  return typeof e == "string";
}
const xi = (e) => ({
    test: (t) => vi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  er = xi("deg"),
  Dt = xi("%"),
  D = xi("px"),
  jw = xi("vh"),
  Lw = xi("vw"),
  rh = {
    ...Dt,
    parse: (e) => Dt.parse(e) / 100,
    transform: (e) => Dt.transform(e * 100),
  },
  nh = { ...Zr, transform: Math.round },
  my = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: er,
    rotateX: er,
    rotateY: er,
    rotateZ: er,
    scale: Ui,
    scaleX: Ui,
    scaleY: Ui,
    scaleZ: Ui,
    skew: er,
    skewX: er,
    skewY: er,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Eo,
    originX: rh,
    originY: rh,
    originZ: D,
    zIndex: nh,
    fillOpacity: Eo,
    strokeOpacity: Eo,
    numOctaves: nh,
  };
function Md(e, t, r, n) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (hy(d)) {
      i[d] = f;
      continue;
    }
    const g = my[d],
      x = $w(f, g);
    if (qr.has(d)) {
      if (((l = !0), (s[d] = x), !c)) continue;
      f !== (g.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = x)) : (o[d] = x);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = Rw(e.transform, r, c, n))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: g = 0 } = a;
    o.transformOrigin = `${d} ${f} ${g}`;
  }
}
const jd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function gy(e, t, r) {
  for (const n in t) !Qe(t[n]) && !fy(n, r) && (e[n] = t[n]);
}
function Iw({ transformTemplate: e }, t, r) {
  return S.useMemo(() => {
    const n = jd();
    return (
      Md(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function Dw(e, t, r) {
  const n = e.style || {},
    o = {};
  return (
    gy(o, n, e),
    Object.assign(o, Iw(e, t, r)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function Vw(e, t, r) {
  const n = {},
    o = Dw(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = o),
    n
  );
}
const Bw = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Zs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    Bw.has(e)
  );
}
let yy = (e) => !Zs(e);
function vy(e) {
  e && (yy = (t) => (t.startsWith("on") ? !Zs(t) : e(t)));
}
try {
  vy(require("@emotion/is-prop-valid").default);
} catch {}
function Nw(e, t, r) {
  const n = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((yy(o) ||
        (r === !0 && Zs(o)) ||
        (!t && !Zs(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (n[o] = e[o]));
  return n;
}
function oh(e, t, r) {
  return typeof e == "string" ? e : D.transform(t + r * e);
}
function Ow(e, t, r) {
  const n = oh(t, e.x, e.width),
    o = oh(r, e.y, e.height);
  return `${n} ${o}`;
}
const Fw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ww = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Hw(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Fw : Ww;
  e[i.offset] = D.transform(-n);
  const s = D.transform(t),
    a = D.transform(r);
  e[i.array] = `${s} ${a}`;
}
function Ld(
  e,
  {
    attrX: t,
    attrY: r,
    originX: n,
    originY: o,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: a = 0,
    ...l
  },
  u,
  c,
  d,
) {
  if ((Md(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: g, dimensions: x } = e;
  f.transform && (x && (g.transform = f.transform), delete f.transform),
    x &&
      (n !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = Ow(
        x,
        n !== void 0 ? n : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && Hw(f, i, s, a, !1);
}
const xy = () => ({ ...jd(), attrs: {} }),
  Id = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Uw(e, t, r, n) {
  const o = S.useMemo(() => {
    const i = xy();
    return (
      Ld(i, t, { enableHardwareAcceleration: !1 }, Id(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    gy(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Gw(e = !1) {
  return (r, n, o, i, { latestValues: s }, a) => {
    const u = ($d(r) ? Uw : Vw)(n, s, a, r),
      d = { ...Nw(n, typeof r == "string", e), ...u, ref: i },
      { children: f } = n,
      g = S.useMemo(() => (Qe(f) ? f.get() : f), [f]);
    return (
      o && (d["data-projection-id"] = o),
      S.createElement(r, { ...d, children: g })
    );
  };
}
const Dd = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function by(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const Sy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ky(e, t, r, n) {
  by(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(Sy.has(o) ? o : Dd(o), t.attrs[o]);
}
function Vd(e, t) {
  const { style: r } = e,
    n = {};
  for (const o in r)
    (Qe(r[o]) || (t.style && Qe(t.style[o])) || fy(o, e)) && (n[o] = r[o]);
  return n;
}
function wy(e, t) {
  const r = Vd(e, t);
  for (const n in e)
    if (Qe(e[n]) || Qe(t[n])) {
      const o = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      r[o] = e[n];
    }
  return r;
}
function Bd(e, t, r, n = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  );
}
const Js = (e) => Array.isArray(e),
  Yw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Xw = (e) => (Js(e) ? e[e.length - 1] || 0 : e);
function gs(e) {
  const t = Qe(e) ? e.get() : e;
  return Yw(t) ? t.toValue() : t;
}
function Qw(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i,
) {
  const s = { latestValues: Kw(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const Cy = (e) => (t, r) => {
  const n = S.useContext(Oa),
    o = S.useContext(yi),
    i = () => Qw(e, t, n, o);
  return r ? i() : Ua(i);
};
function Kw(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const f in i) o[f] = gs(i[f]);
  let { initial: s, animate: a } = e;
  const l = Ha(e),
    u = cy(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !Wa(d) &&
      (Array.isArray(d) ? d : [d]).forEach((g) => {
        const x = Bd(e, g);
        if (!x) return;
        const { transitionEnd: v, transition: w, ...p } = x;
        for (const m in p) {
          let y = p[m];
          if (Array.isArray(y)) {
            const k = c ? y.length - 1 : 0;
            y = y[k];
          }
          y !== null && (o[m] = y);
        }
        for (const m in v) o[m] = v[m];
      }),
    o
  );
}
const qw = {
    useVisualState: Cy({
      scrapeMotionValuesFromProps: wy,
      createRenderState: xy,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Ld(
          r,
          n,
          { enableHardwareAcceleration: !1 },
          Id(t.tagName),
          e.transformTemplate,
        ),
          ky(t, r);
      },
    }),
  },
  Zw = {
    useVisualState: Cy({
      scrapeMotionValuesFromProps: Vd,
      createRenderState: jd,
    }),
  };
function Jw(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...($d(e) ? qw : Zw),
    preloadedFeatures: r,
    useRender: Gw(t),
    createVisualElement: n,
    Component: e,
  };
}
function Wt(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const _y = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ya(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const e2 = (e) => (t) => _y(t) && e(t, Ya(t));
function Ut(e, t, r, n) {
  return Wt(e, t, e2(r), n);
}
const t2 = (e, t) => (r) => t(e(r)),
  gr = (...e) => e.reduce(t2);
function Py(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const ih = Py("dragHorizontal"),
  sh = Py("dragVertical");
function Ey(e) {
  let t = !1;
  if (e === "y") t = sh();
  else if (e === "x") t = ih();
  else {
    const r = ih(),
      n = sh();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function zy() {
  const e = Ey(!0);
  return e ? (e(), !1) : !0;
}
class _r {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function ah(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"),
    n = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || zy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[n] && a[n](i, s);
    };
  return Ut(e.current, r, o, { passive: !e.getProps()[n] });
}
class r2 extends _r {
  mount() {
    this.unmount = gr(ah(this.node, !0), ah(this.node, !1));
  }
  unmount() {}
}
class n2 extends _r {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = gr(
      Wt(this.node.current, "focus", () => this.onFocus()),
      Wt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Ty = (e, t) => (t ? (e === t ? !0 : Ty(e, t.parentElement)) : !1),
  Ct = (e) => e;
function Bl(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, Ya(r));
}
class o2 extends _r {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ct),
      (this.removeEndListeners = Ct),
      (this.removeAccessibleListeners = Ct),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const n = this.node.getProps(),
          i = Ut(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Ty(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
            },
            { passive: !(n.onTap || n.onPointerUp) },
          ),
          s = Ut(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = gr(i, s)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Bl("up", this.node.getProps().onTap);
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Wt(this.node.current, "keyup", s)),
              Bl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          r = Wt(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && Bl("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Wt(this.node.current, "blur", n);
        this.removeAccessibleListeners = gr(r, o);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      n && n(t, r);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !zy()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && n(t, r);
  }
  mount() {
    const t = this.node.getProps(),
      r = Ut(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Wt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = gr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ac = new WeakMap(),
  Nl = new WeakMap(),
  i2 = (e) => {
    const t = ac.get(e.target);
    t && t(e);
  },
  s2 = (e) => {
    e.forEach(i2);
  };
function a2({ root: e, ...t }) {
  const r = e || document;
  Nl.has(r) || Nl.set(r, {});
  const n = Nl.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(s2, { root: e, ...t })), n[o];
}
function l2(e, t, r) {
  const n = a2(t);
  return (
    ac.set(e, r),
    n.observe(e),
    () => {
      ac.delete(e), n.unobserve(e);
    }
  );
}
const u2 = { some: 0, all: 1 };
class c2 extends _r {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  viewportFallback() {
    requestAnimationFrame(() => {
      this.hasEnteredView = !0;
      const { onViewportEnter: t } = this.node.getProps();
      t && t(null),
        this.node.animationState &&
          this.node.animationState.setActive("whileInView", !0);
    });
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = "some", once: i, fallback: s = !0 } = t;
    if (typeof IntersectionObserver > "u") {
      s && this.viewportFallback();
      return;
    }
    const a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == "number" ? o : u2[o],
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          g = c ? d : f;
        g && g(u);
      };
    return l2(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(d2(t, r)) && this.startObserver();
  }
  unmount() {}
}
function d2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const f2 = {
  inView: { Feature: c2 },
  tap: { Feature: o2 },
  focus: { Feature: n2 },
  hover: { Feature: r2 },
};
function Ay(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
const p2 = (e) => /^\-?\d*\.?\d+$/.test(e),
  h2 = (e) => /^0[^.\s]+$/.test(e),
  Gt = { delta: 0, timestamp: 0 },
  Ry = (1 / 60) * 1e3,
  m2 = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  $y =
    typeof window < "u"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(m2()), Ry);
function g2(e) {
  let t = [],
    r = [],
    n = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r;
        return (
          u && s.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = r.indexOf(l);
        u !== -1 && r.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const y2 = 40;
let lc = !0,
  ii = !1,
  uc = !1;
const bi = ["read", "update", "preRender", "render", "postRender"],
  Xa = bi.reduce((e, t) => ((e[t] = g2(() => (ii = !0))), e), {}),
  Le = bi.reduce((e, t) => {
    const r = Xa[t];
    return (e[t] = (n, o = !1, i = !1) => (ii || x2(), r.schedule(n, o, i))), e;
  }, {}),
  br = bi.reduce((e, t) => ((e[t] = Xa[t].cancel), e), {}),
  Ol = bi.reduce((e, t) => ((e[t] = () => Xa[t].process(Gt)), e), {}),
  v2 = (e) => Xa[e].process(Gt),
  My = (e) => {
    (ii = !1),
      (Gt.delta = lc ? Ry : Math.max(Math.min(e - Gt.timestamp, y2), 1)),
      (Gt.timestamp = e),
      (uc = !0),
      bi.forEach(v2),
      (uc = !1),
      ii && ((lc = !1), $y(My));
  },
  x2 = () => {
    (ii = !0), (lc = !0), uc || $y(My);
  };
function Nd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Od(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Fd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Nd(this.subscriptions, t), () => Od(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Wd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const b2 = (e) => !isNaN(parseFloat(e));
class S2 {
  constructor(t, r = {}) {
    (this.version = "9.1.7"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        (this.prev = this.current), (this.current = n);
        const { delta: i, timestamp: s } = Gt;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Le.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Le.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = b2(this.current)),
      (this.owner = r.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Fd());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            Le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), (this.prev = t), (this.timeDelta = n);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Wd(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r) || null),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = null;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Wn(e, t) {
  return new S2(e, t);
}
const Hd = (e, t) => (r) =>
    !!(
      (vi(r) && Mw.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  jy = (e, t, r) => (n) => {
    if (!vi(n)) return n;
    const [o, i, s, a] = n.match(oi);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  k2 = (e) => Fn(0, 255, e),
  Fl = { ...Zr, transform: (e) => Math.round(k2(e)) },
  Br = {
    test: Hd("rgb", "red"),
    parse: jy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      Fl.transform(e) +
      ", " +
      Fl.transform(t) +
      ", " +
      Fl.transform(r) +
      ", " +
      zo(Eo.transform(n)) +
      ")",
  };
function w2(e) {
  let t = "",
    r = "",
    n = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const cc = { test: Hd("#"), parse: w2, transform: Br.transform },
  bn = {
    test: Hd("hsl", "hue"),
    parse: jy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Dt.transform(zo(t)) +
      ", " +
      Dt.transform(zo(r)) +
      ", " +
      zo(Eo.transform(n)) +
      ")",
  },
  Ve = {
    test: (e) => Br.test(e) || cc.test(e) || bn.test(e),
    parse: (e) =>
      Br.test(e) ? Br.parse(e) : bn.test(e) ? bn.parse(e) : cc.parse(e),
    transform: (e) =>
      vi(e) ? e : e.hasOwnProperty("red") ? Br.transform(e) : bn.transform(e),
  },
  Ly = "${c}",
  Iy = "${n}";
function C2(e) {
  var t, r;
  return (
    isNaN(e) &&
    vi(e) &&
    (((t = e.match(oi)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(sc)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
function ea(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0,
    n = 0;
  const o = e.match(sc);
  o && ((r = o.length), (e = e.replace(sc, Ly)), t.push(...o.map(Ve.parse)));
  const i = e.match(oi);
  return (
    i && ((n = i.length), (e = e.replace(oi, Iy)), t.push(...i.map(Zr.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  );
}
function Dy(e) {
  return ea(e).values;
}
function Vy(e) {
  const { values: t, numColors: r, tokenised: n } = ea(e),
    o = t.length;
  return (i) => {
    let s = n;
    for (let a = 0; a < o; a++)
      s = s.replace(a < r ? Ly : Iy, a < r ? Ve.transform(i[a]) : zo(i[a]));
    return s;
  };
}
const _2 = (e) => (typeof e == "number" ? 0 : e);
function P2(e) {
  const t = Dy(e);
  return Vy(e)(t.map(_2));
}
const Sr = {
    test: C2,
    parse: Dy,
    createTransformer: Vy,
    getAnimatableNone: P2,
  },
  E2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function z2(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(oi) || [];
  if (!n) return e;
  const o = r.replace(n, "");
  let i = E2.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const T2 = /([a-z-]*)\(.*?\)/g,
  dc = {
    ...Sr,
    getAnimatableNone: (e) => {
      const t = e.match(T2);
      return t ? t.map(z2).join(" ") : e;
    },
  },
  A2 = {
    ...my,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: dc,
    WebkitFilter: dc,
  },
  Ud = (e) => A2[e];
function Gd(e, t) {
  let r = Ud(e);
  return (
    r !== dc && (r = Sr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const By = (e) => (t) => t.test(e),
  R2 = { test: (e) => e === "auto", parse: (e) => e },
  Ny = [Zr, D, Dt, er, Lw, jw, R2],
  io = (e) => Ny.find(By(e)),
  $2 = [...Ny, Ve, Sr],
  M2 = (e) => $2.find(By(e));
function j2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function L2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Qa(e, t, r) {
  const n = e.getProps();
  return Bd(n, t, r !== void 0 ? r : n.custom, j2(e), L2(e));
}
function I2(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Wn(r));
}
function D2(e, t) {
  const r = Qa(e, t);
  let {
    transitionEnd: n = {},
    transition: o = {},
    ...i
  } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = Xw(i[s]);
    I2(e, s, a);
  }
}
function V2(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (p2(c) || h2(c))
            ? (c = parseFloat(c))
            : !M2(c) && Sr.test(u) && (c = Gd(l, u)),
          e.addValue(l, Wn(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function B2(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function N2(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = B2(o, t);
    if (i !== void 0) n[o] = i;
    else {
      const s = r.getValue(o);
      s && (n[o] = s.get());
    }
  }
  return n;
}
function ta(e) {
  return !!(Qe(e) && e.add);
}
const O2 = "framerAppearId",
  F2 = "data-" + Dd(O2);
let si = Ct;
const ys = (e) => e * 1e3,
  W2 = { current: !1 },
  Yd = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Xd = (e) => (t) => 1 - e(1 - t),
  Qd = (e) => e * e,
  H2 = Xd(Qd),
  Kd = Yd(Qd),
  ie = (e, t, r) => -r * e + r * t + e;
function Wl(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function U2({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (o = Wl(l, a, e + 1 / 3)), (i = Wl(l, a, e)), (s = Wl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n,
  };
}
const Hl = (e, t, r) => {
    const n = e * e;
    return Math.sqrt(Math.max(0, r * (t * t - n) + n));
  },
  G2 = [cc, Br, bn],
  Y2 = (e) => G2.find((t) => t.test(e));
function lh(e) {
  const t = Y2(e);
  let r = t.parse(e);
  return t === bn && (r = U2(r)), r;
}
const Oy = (e, t) => {
  const r = lh(e),
    n = lh(t),
    o = { ...r };
  return (i) => (
    (o.red = Hl(r.red, n.red, i)),
    (o.green = Hl(r.green, n.green, i)),
    (o.blue = Hl(r.blue, n.blue, i)),
    (o.alpha = ie(r.alpha, n.alpha, i)),
    Br.transform(o)
  );
};
function Fy(e, t) {
  return typeof e == "number"
    ? (r) => ie(e, t, r)
    : Ve.test(e)
      ? Oy(e, t)
      : Hy(e, t);
}
const Wy = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, s) => Fy(i, t[s]));
    return (i) => {
      for (let s = 0; s < n; s++) r[s] = o[s](i);
      return r;
    };
  },
  X2 = (e, t) => {
    const r = { ...e, ...t },
      n = {};
    for (const o in r)
      e[o] !== void 0 && t[o] !== void 0 && (n[o] = Fy(e[o], t[o]));
    return (o) => {
      for (const i in n) r[i] = n[i](o);
      return r;
    };
  },
  Hy = (e, t) => {
    const r = Sr.createTransformer(t),
      n = ea(e),
      o = ea(t);
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? gr(Wy(n.values, o.values), r)
      : (s) => `${s > 0 ? t : e}`;
  },
  ai = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  uh = (e, t) => (r) => ie(e, t, r);
function Q2(e) {
  return typeof e == "number"
    ? uh
    : typeof e == "string"
      ? Ve.test(e)
        ? Oy
        : Hy
      : Array.isArray(e)
        ? Wy
        : typeof e == "object"
          ? X2
          : uh;
}
function K2(e, t, r) {
  const n = [],
    o = r || Q2(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] : t;
      a = gr(l, a);
    }
    n.push(a);
  }
  return n;
}
function Uy(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  si(i === t.length),
    si(!n || !Array.isArray(n) || n.length === i - 1),
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = K2(t, n, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = ai(e[c], e[c + 1], u);
      return s[c](d);
    };
  return r ? (u) => l(Fn(e[0], e[i - 1], u)) : l;
}
function q2(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = ai(0, t, n);
    e.push(ie(r, 1, o));
  }
}
function Z2(e) {
  const t = [0];
  return q2(t, e.length - 1), t;
}
function J2(e, t) {
  return e.map((r) => r * t);
}
const Gy = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  eC = 1e-7,
  tC = 12;
function rC(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = Gy(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > eC && ++a < tC);
  return s;
}
function Yy(e, t, r, n) {
  if (e === t && r === n) return Ct;
  const o = (i) => rC(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : Gy(o(i), t, n));
}
const Xy = (e) => 1 - Math.sin(Math.acos(e)),
  qd = Xd(Xy),
  nC = Yd(qd),
  Qy = Yy(0.33, 1.53, 0.69, 0.99),
  Zd = Xd(Qy),
  oC = Yd(Zd),
  iC = (e) =>
    (e *= 2) < 1 ? 0.5 * Zd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ch = {
    linear: Ct,
    easeIn: Qd,
    easeInOut: Kd,
    easeOut: H2,
    circIn: Xy,
    circInOut: nC,
    circOut: qd,
    backIn: Zd,
    backInOut: oC,
    backOut: Qy,
    anticipate: iC,
  },
  dh = (e) => {
    if (Array.isArray(e)) {
      si(e.length === 4);
      const [t, r, n, o] = e;
      return Yy(t, r, n, o);
    } else if (typeof e == "string") return si(ch[e] !== void 0), ch[e];
    return e;
  },
  sC = (e) => Array.isArray(e) && typeof e[0] != "number";
function aC(e, t) {
  return e.map(() => t || Kd).splice(0, e.length - 1);
}
function fc({ keyframes: e, ease: t = Kd, times: r, duration: n = 300 }) {
  e = [...e];
  const o = sC(t) ? t.map(dh) : dh(t),
    i = { done: !1, value: e[0] },
    s = J2(r && r.length === e.length ? r : Z2(e), n);
  function a() {
    return Uy(s, e, { ease: Array.isArray(o) ? o : aC(e, o) });
  }
  let l = a();
  return {
    next: (u) => ((i.value = l(u)), (i.done = u >= n), i),
    flipTarget: () => {
      e.reverse(), (l = a());
    },
  };
}
const Ul = 0.001,
  lC = 0.01,
  uC = 10,
  cC = 0.05,
  dC = 1;
function fC({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Fn(cC, dC, s)),
    (e = Fn(lC, uC, e / 1e3)),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - r,
            g = pc(u, s),
            x = Math.exp(-d);
          return Ul - (f / g) * x;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * r + r,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            v = pc(Math.pow(u, 2), s);
          return ((-o(u) + Ul > 0 ? -1 : 1) * ((f - g) * x)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -Ul + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = hC(o, i, a);
  if (((e = e * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: s * 2 * Math.sqrt(n * u), duration: e };
  }
}
const pC = 12;
function hC(e, t, r) {
  let n = r;
  for (let o = 1; o < pC; o++) n = n - e(n) / t(n);
  return n;
}
function pc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mC = ["duration", "bounce"],
  gC = ["stiffness", "damping", "mass"];
function fh(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function yC(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!fh(e, gC) && fh(e, mC)) {
    const r = fC(e);
    (t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
const vC = 5;
function Ky({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  let o = e[0],
    i = e[e.length - 1];
  const s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = yC(n);
  let g = xC,
    x = c ? -(c / 1e3) : 0;
  const v = l / (2 * Math.sqrt(a * u));
  function w() {
    const p = i - o,
      m = Math.sqrt(a / u) / 1e3,
      y = Math.abs(p) < 5;
    if ((r || (r = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), v < 1)) {
      const k = pc(m, v);
      g = (C) => {
        const P = Math.exp(-v * m * C);
        return (
          i -
          P * (((x + v * m * p) / k) * Math.sin(k * C) + p * Math.cos(k * C))
        );
      };
    } else if (v === 1) g = (k) => i - Math.exp(-m * k) * (p + (x + m * p) * k);
    else {
      const k = m * Math.sqrt(v * v - 1);
      g = (C) => {
        const P = Math.exp(-v * m * C),
          _ = Math.min(k * C, 300);
        return (
          i - (P * ((x + v * m * p) * Math.sinh(_) + k * p * Math.cosh(_))) / k
        );
      };
    }
  }
  return (
    w(),
    {
      next: (p) => {
        const m = g(p);
        if (f) s.done = p >= d;
        else {
          let y = x;
          if (p !== 0)
            if (v < 1) {
              const P = Math.max(0, p - vC);
              y = Wd(m - g(P), p - P);
            } else y = 0;
          const k = Math.abs(y) <= r,
            C = Math.abs(i - m) <= t;
          s.done = k && C;
        }
        return (s.value = s.done ? i : m), s;
      },
      flipTarget: () => {
        (x = -x), ([o, i] = [i, o]), w();
      },
    }
  );
}
Ky.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const xC = (e) => 0;
function bC({
  keyframes: e = [0],
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 350,
  restDelta: o = 0.5,
  modifyTarget: i,
}) {
  const s = e[0],
    a = { done: !1, value: s };
  let l = r * t;
  const u = s + l,
    c = i === void 0 ? u : i(u);
  return (
    c !== u && (l = c - s),
    {
      next: (d) => {
        const f = -l * Math.exp(-d / n);
        return (a.done = !(f > o || f < -o)), (a.value = a.done ? c : c + f), a;
      },
      flipTarget: () => {},
    }
  );
}
const SC = { decay: bC, keyframes: fc, tween: fc, spring: Ky };
function qy(e, t, r = 0) {
  return e - t - r;
}
function kC(e, t = 0, r = 0, n = !0) {
  return n ? qy(t + -e, t, r) : t - (e - t) + r;
}
function wC(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const CC = (e) => {
  const t = ({ delta: r }) => e(r);
  return { start: () => Le.update(t, !0), stop: () => br.update(t) };
};
function ra({
  duration: e,
  driver: t = CC,
  elapsed: r = 0,
  repeat: n = 0,
  repeatType: o = "loop",
  repeatDelay: i = 0,
  keyframes: s,
  autoplay: a = !0,
  onPlay: l,
  onStop: u,
  onComplete: c,
  onRepeat: d,
  onUpdate: f,
  type: g = "keyframes",
  ...x
}) {
  const v = r;
  let w,
    p = 0,
    m = e,
    y = !1,
    k = !0,
    C;
  const P = SC[s.length > 2 ? "keyframes" : g] || fc,
    _ = s[0],
    z = s[s.length - 1];
  let M = { done: !1, value: _ };
  const { needsInterpolation: A } = P;
  A && A(_, z) && ((C = Uy([0, 100], [_, z], { clamp: !1 })), (s = [0, 100]));
  const G = P({ ...x, duration: e, keyframes: s });
  function De() {
    p++,
      o === "reverse"
        ? ((k = p % 2 === 0), (r = kC(r, m, i, k)))
        : ((r = qy(r, m, i)), o === "mirror" && G.flipTarget()),
      (y = !1),
      d && d();
  }
  function at() {
    w && w.stop(), c && c();
  }
  function Ke(ke) {
    k || (ke = -ke),
      (r += ke),
      y ||
        ((M = G.next(Math.max(0, r))),
        C && (M.value = C(M.value)),
        (y = k ? M.done : r <= 0)),
      f && f(M.value),
      y &&
        (p === 0 && (m = m !== void 0 ? m : r),
        p < n ? wC(r, m, i, k) && De() : at());
  }
  function ye() {
    l && l(), (w = t(Ke)), w.start();
  }
  return (
    a && ye(),
    {
      stop: () => {
        u && u(), w && w.stop();
      },
      set currentTime(ke) {
        (r = v), Ke(ke);
      },
      sample: (ke) => {
        r = v;
        const Pt = e && typeof e == "number" ? Math.max(e * 0.5, 50) : 50;
        let R = 0;
        for (Ke(0); R <= ke; ) {
          const V = ke - R;
          Ke(Math.min(V, Pt)), (R += Pt);
        }
        return M;
      },
    }
  );
}
function _C(e) {
  return !e || Array.isArray(e) || (typeof e == "string" && Zy[e]);
}
const ho = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Zy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ho([0, 0.65, 0.55, 1]),
    circOut: ho([0.55, 0, 1, 0.45]),
    backIn: ho([0.31, 0.01, 0.66, -0.59]),
    backOut: ho([0.33, 1.53, 0.69, 0.99]),
  };
function PC(e) {
  if (e) return Array.isArray(e) ? ho(e) : Zy[e];
}
function EC(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  return e.animate(
    { [t]: r, offset: l },
    {
      delay: n,
      duration: o,
      easing: PC(a),
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    },
  );
}
const ph = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Gl = {},
  Jy = {};
for (const e in ph)
  Jy[e] = () => (Gl[e] === void 0 && (Gl[e] = ph[e]()), Gl[e]);
function zC(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const TC = new Set(["opacity", "clipPath", "filter", "transform"]),
  Gi = 10;
function AC(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      Jy.waapi() &&
      TC.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0
    )
  )
    return !1;
  let { keyframes: s, duration: a = 300, elapsed: l = 0, ease: u } = o;
  if (o.type === "spring" || !_C(o.ease)) {
    if (o.repeat === 1 / 0) return;
    const d = ra({ ...o, elapsed: 0 });
    let f = { done: !1, value: s[0] };
    const g = [];
    let x = 0;
    for (; !f.done && x < 2e4; ) (f = d.sample(x)), g.push(f.value), (x += Gi);
    (s = g), (a = x - Gi), (u = "linear");
  }
  const c = EC(e.owner.current, t, s, {
    ...o,
    delay: -l,
    duration: a,
    ease: u,
  });
  return (
    (c.onfinish = () => {
      e.set(zC(s, o)), Le.update(() => c.cancel()), n && n();
    }),
    {
      get currentTime() {
        return c.currentTime || 0;
      },
      set currentTime(d) {
        c.currentTime = d;
      },
      stop: () => {
        const { currentTime: d } = c;
        if (d) {
          const f = ra({ ...o, autoplay: !1 });
          e.setWithVelocity(f.sample(d - Gi).value, f.sample(d).value, Gi);
        }
        Le.update(() => c.cancel());
      },
    }
  );
}
function ev(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (br.read(n), e(i - t));
    };
  return Le.read(n, !0), () => br.read(n);
}
function RC({ keyframes: e, elapsed: t, onUpdate: r, onComplete: n }) {
  const o = () => {
    r && r(e[e.length - 1]), n && n();
  };
  return t ? { stop: ev(o, -t) } : o();
}
function $C({
  keyframes: e,
  velocity: t = 0,
  min: r,
  max: n,
  power: o = 0.8,
  timeConstant: i = 750,
  bounceStiffness: s = 500,
  bounceDamping: a = 10,
  restDelta: l = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: d,
  onComplete: f,
  onStop: g,
}) {
  const x = e[0];
  let v;
  function w(k) {
    return (r !== void 0 && k < r) || (n !== void 0 && k > n);
  }
  function p(k) {
    return r === void 0
      ? n
      : n === void 0 || Math.abs(r - k) < Math.abs(n - k)
        ? r
        : n;
  }
  function m(k) {
    v && v.stop(),
      (v = ra({
        keyframes: [0, 1],
        velocity: 0,
        ...k,
        driver: c,
        onUpdate: (C) => {
          d && d(C), k.onUpdate && k.onUpdate(C);
        },
        onComplete: f,
        onStop: g,
      }));
  }
  function y(k) {
    m({ type: "spring", stiffness: s, damping: a, restDelta: l, ...k });
  }
  if (w(x)) y({ velocity: t, keyframes: [x, p(x)] });
  else {
    let k = o * t + x;
    typeof u < "u" && (k = u(k));
    const C = p(k),
      P = C === r ? -1 : 1;
    let _, z;
    const M = (A) => {
      (_ = z),
        (z = A),
        (t = Wd(A - _, Gt.delta)),
        ((P === 1 && A > C) || (P === -1 && A < C)) &&
          y({ keyframes: [A, C], velocity: t });
    };
    m({
      type: "decay",
      keyframes: [x, 0],
      velocity: t,
      timeConstant: i,
      power: o,
      restDelta: l,
      modifyTarget: u,
      onUpdate: w(k) ? M : void 0,
    });
  }
  return { stop: () => v && v.stop() };
}
const MC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  jC = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  LC = { type: "keyframes", duration: 0.8 },
  IC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  DC = (e, { keyframes: t }) =>
    t.length > 2
      ? LC
      : qr.has(e)
        ? e.startsWith("scale")
          ? jC(t[1])
          : MC
        : IC,
  hc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && Sr.test(t) && !t.startsWith("url("))
        );
function VC({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function hh(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function mh(e) {
  return typeof e == "number" ? 0 : Gd("", e);
}
function tv(e, t) {
  return e[t] || e.default || e;
}
function BC(e, t, r, n) {
  const o = hc(t, r);
  let i = n.from !== void 0 ? n.from : e.get();
  return (
    i === "none" && o && typeof r == "string"
      ? (i = Gd(t, r))
      : hh(i) && typeof r == "string"
        ? (i = mh(r))
        : !Array.isArray(r) && hh(r) && typeof i == "string" && (r = mh(i)),
    Array.isArray(r) ? (r[0] === null && (r[0] = i), r) : [i, r]
  );
}
const Jd =
  (e, t, r, n = {}) =>
  (o) => {
    const i = tv(n, e) || {},
      s = i.delay || n.delay || 0;
    let { elapsed: a = 0 } = n;
    a = a - ys(s);
    const l = BC(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = hc(e, u),
      f = hc(e, c);
    let g = {
      keyframes: l,
      velocity: t.getVelocity(),
      ...i,
      elapsed: a,
      onUpdate: (x) => {
        t.set(x), i.onUpdate && i.onUpdate(x);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (!d || !f || W2.current || i.type === !1) return RC(g);
    if (i.type === "inertia") return $C(g);
    if (
      (VC(i) || (g = { ...g, ...DC(e, g) }),
      g.duration && (g.duration = ys(g.duration)),
      g.repeatDelay && (g.repeatDelay = ys(g.repeatDelay)),
      t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate)
    ) {
      const x = AC(t, e, g);
      if (x) return x;
    }
    return ra(g);
  };
function NC(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => mc(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string") n = mc(e, t, r);
  else {
    const o = typeof t == "function" ? Qa(e, t, r.custom) : t;
    n = rv(e, o, r);
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
function mc(e, t, r = {}) {
  const n = Qa(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => rv(e, n, r) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return OC(e, t, u + l, c, d, r);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(u);
  } else return Promise.all([i(), s(r.delay)]);
}
function rv(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const f = e.getValue(d),
      g = a[d];
    if (!f || g === void 0 || (c && WC(c, d))) continue;
    const x = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const w = e.getProps()[F2];
      w && (x.elapsed = window.HandoffAppearAnimations(w, d, f, Le));
    }
    let v = f.start(
      Jd(d, f, g, e.shouldReduceMotion && qr.has(d) ? { type: !1 } : x),
    );
    ta(l) && (l.add(d), (v = v.then(() => l.remove(d)))), u.push(v);
  }
  return Promise.all(u).then(() => {
    s && D2(e, s);
  });
}
function OC(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => a - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(FC)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            mc(u, t, { ...i, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function FC(e, t) {
  return e.sortNodePosition(t);
}
function WC({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
const HC = [...Td].reverse(),
  UC = Td.length;
function GC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => NC(e, r, n)));
}
function YC(e) {
  let t = GC(e);
  const r = QC();
  let n = !0;
  const o = (l, u) => {
    const c = Qa(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...g } = c;
      l = { ...l, ...g, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      g = new Set();
    let x = {},
      v = 1 / 0;
    for (let p = 0; p < UC; p++) {
      const m = HC[p],
        y = r[m],
        k = c[m] !== void 0 ? c[m] : d[m],
        C = ri(k),
        P = m === u ? y.isActive : null;
      P === !1 && (v = p);
      let _ = k === d[m] && k !== c[m] && C;
      if (
        (_ && n && e.manuallyAnimateOnMount && (_ = !1),
        (y.protectedKeys = { ...x }),
        (!y.isActive && P === null) ||
          (!k && !y.prevProp) ||
          Wa(k) ||
          typeof k == "boolean")
      )
        continue;
      const z = XC(y.prevProp, k);
      let M = z || (m === u && y.isActive && !_ && C) || (p > v && C);
      const A = Array.isArray(k) ? k : [k];
      let G = A.reduce(o, {});
      P === !1 && (G = {});
      const { prevResolvedValues: De = {} } = y,
        at = { ...De, ...G },
        Ke = (ye) => {
          (M = !0), g.delete(ye), (y.needsAnimating[ye] = !0);
        };
      for (const ye in at) {
        const ke = G[ye],
          Pt = De[ye];
        x.hasOwnProperty(ye) ||
          (ke !== Pt
            ? Js(ke) && Js(Pt)
              ? !Ay(ke, Pt) || z
                ? Ke(ye)
                : (y.protectedKeys[ye] = !0)
              : ke !== void 0
                ? Ke(ye)
                : g.add(ye)
            : ke !== void 0 && g.has(ye)
              ? Ke(ye)
              : (y.protectedKeys[ye] = !0));
      }
      (y.prevProp = k),
        (y.prevResolvedValues = G),
        y.isActive && (x = { ...x, ...G }),
        n && e.blockInitialAnimation && (M = !1),
        M &&
          !_ &&
          f.push(
            ...A.map((ye) => ({ animation: ye, options: { type: m, ...l } })),
          );
    }
    if (g.size) {
      const p = {};
      g.forEach((m) => {
        const y = e.getBaseTarget(m);
        y !== void 0 && (p[m] = y);
      }),
        f.push({ animation: p });
    }
    let w = !!f.length;
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (w = !1),
      (n = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (r[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((g) => {
        var x;
        return (x = g.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (r[l].isActive = u);
    const f = s(c, l);
    for (const g in r) r[g].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
  };
}
function XC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ay(t, e) : !1;
}
function Tr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function QC() {
  return {
    animate: Tr(!0),
    whileInView: Tr(),
    whileHover: Tr(),
    whileTap: Tr(),
    whileDrag: Tr(),
    whileFocus: Tr(),
    exit: Tr(),
  };
}
class KC extends _r {
  constructor(t) {
    super(t), t.animationState || (t.animationState = YC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Wa(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let qC = 0;
class ZC extends _r {
  constructor() {
    super(...arguments), (this.id = qC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: r,
        custom: n,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: n ?? this.node.getProps().custom,
    });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const JC = { animation: { Feature: KC }, exit: { Feature: ZC } },
  gh = (e, t) => Math.abs(e - t);
function e5(e, t) {
  const r = gh(e.x, t.x),
    n = gh(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class nv {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Xl(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = e5(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: g } = Gt;
        this.history.push({ ...f, timestamp: g });
        const { onStart: x, onMove: v } = this.handlers;
        c ||
          (x && x(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Yl(c, this.transformPagePoint)),
          Le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          g = Xl(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Yl(c, this.transformPagePoint),
            this.history,
          );
        this.startEvent && d && d(u, g), f && f(u, g);
      }),
      !_y(t))
    )
      return;
    (this.handlers = r), (this.transformPagePoint = n);
    const o = Ya(t),
      i = Yl(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = Gt;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = r;
    l && l(t, Xl(i, this.history)),
      (this.removeListeners = gr(
        Ut(window, "pointermove", this.handlePointerMove),
        Ut(window, "pointerup", this.handlePointerUp),
        Ut(window, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), br.update(this.updatePoint);
  }
}
function Yl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function yh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xl({ point: e }, t) {
  return {
    point: e,
    delta: yh(e, ov(t)),
    offset: yh(e, t5(t)),
    velocity: r5(t, 0.1),
  };
}
function t5(e) {
  return e[0];
}
function ov(e) {
  return e[e.length - 1];
}
function r5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = ov(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > ys(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = (o.timestamp - n.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function nt(e) {
  return e.max - e.min;
}
function gc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function vh(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ie(t.min, t.max, e.origin)),
    (e.scale = nt(r) / nt(t)),
    (gc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ie(r.min, r.max, e.origin) - e.originPoint),
    (gc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function To(e, t, r, n) {
  vh(e.x, t.x, r.x, n ? n.originX : void 0),
    vh(e.y, t.y, r.y, n ? n.originY : void 0);
}
function xh(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + nt(t));
}
function n5(e, t, r) {
  xh(e.x, t.x, r.x), xh(e.y, t.y, r.y);
}
function bh(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + nt(t));
}
function Ao(e, t, r) {
  bh(e.x, t.x, r.x), bh(e.y, t.y, r.y);
}
function o5(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ie(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ie(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function Sh(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function i5(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: Sh(e.x, r, o), y: Sh(e.y, t, n) };
}
function kh(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function s5(e, t) {
  return { x: kh(e.x, t.x), y: kh(e.y, t.y) };
}
function a5(e, t) {
  let r = 0.5;
  const n = nt(e),
    o = nt(t);
  return (
    o > n
      ? (r = ai(t.min, t.max - n, e.min))
      : n > o && (r = ai(e.min, e.max - o, t.min)),
    Fn(0, 1, r)
  );
}
function l5(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const yc = 0.35;
function u5(e = yc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yc),
    { x: wh(e, "left", "right"), y: wh(e, "top", "bottom") }
  );
}
function wh(e, t, r) {
  return { min: Ch(e, t), max: Ch(e, r) };
}
function Ch(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _h = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ro = () => ({ x: _h(), y: _h() }),
  Ph = () => ({ min: 0, max: 0 }),
  pe = () => ({ x: Ph(), y: Ph() });
function Tt(e) {
  return [e("x"), e("y")];
}
function iv({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function c5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function d5(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Ql(e) {
  return e === void 0 || e === 1;
}
function vc({ scale: e, scaleX: t, scaleY: r }) {
  return !Ql(e) || !Ql(t) || !Ql(r);
}
function $r(e) {
  return vc(e) || sv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function sv(e) {
  return Eh(e.x) || Eh(e.y);
}
function Eh(e) {
  return e && e !== "0%";
}
function na(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function zh(e, t, r, n, o) {
  return o !== void 0 && (e = na(e, o, n)), na(e, r, n) + t;
}
function xc(e, t = 0, r = 1, n, o) {
  (e.min = zh(e.min, t, r, n, o)), (e.max = zh(e.max, t, r, n, o));
}
function av(e, { x: t, y: r }) {
  xc(e.x, t.translate, t.scale, t.originPoint),
    xc(e.y, r.translate, r.scale, r.originPoint);
}
function f5(e, t, r, n = !1) {
  const o = r.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = r[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Sn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), av(e, s)),
      n && $r(i.latestValues) && Sn(e, i.latestValues));
  }
  (t.x = Th(t.x)), (t.y = Th(t.y));
}
function Th(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function nr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Ah(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = ie(e.min, e.max, i);
  xc(e, t[r], t[n], s, t.scale);
}
const p5 = ["x", "scaleX", "originX"],
  h5 = ["y", "scaleY", "originY"];
function Sn(e, t) {
  Ah(e.x, t, p5), Ah(e.y, t, h5);
}
function lv(e, t) {
  return iv(d5(e.getBoundingClientRect(), t));
}
function m5(e, t, r) {
  const n = lv(e, r),
    { scroll: o } = t;
  return o && (nr(n.x, o.offset.x), nr(n.y, o.offset.y)), n;
}
const g5 = new WeakMap();
class y5 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = pe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(Ya(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Ey(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Tt((x) => {
            let v = this.getAxisMotionValue(x).get() || 0;
            if (Dt.test(v)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const p = w.layout.layoutBox[x];
                p && (v = nt(p) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[x] = v;
          }),
          f && f(l, u);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: g,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: x } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = v5(x)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, x),
          this.updateAxis("y", u.point, x),
          this.visualElement.render(),
          g && g(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new nv(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() },
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && i(t, r);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Yi(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (s = o5(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints;
    t && xn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
        ? (this.constraints = i5(n.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = u5(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Tt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = l5(n.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !xn(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = m5(n, o.root, this.visualElement.getTransformPagePoint());
    let s = s5(o.layout.layoutBox, i);
    if (r) {
      const a = r(c5(s));
      (this.hasMutatedConstraints = !!a), a && (s = iv(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Tt((c) => {
        if (!Yi(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          g = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Jd(t, n, 0, r));
  }
  stopAnimation() {
    Tt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r];
    return (
      o ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Tt((r) => {
      const { drag: n } = this.getProps();
      if (!Yi(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - ie(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!xn(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Tt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = a5({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Tt((s) => {
        if (!Yi(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ie(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    g5.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Ut(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        xn(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const s = Wt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Tt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), r(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = yc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Yi(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function v5(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class x5 extends _r {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ct),
      (this.removeListeners = Ct),
      (this.controls = new y5(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ct);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
class b5 extends _r {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ct);
  }
  onPointerDown(t) {
    this.session = new nv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: t,
      onStart: r,
      onMove: n,
      onEnd: (i, s) => {
        delete this.session, o && o(i, s);
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ut(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function S5() {
  const e = S.useContext(yi);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = S.useId();
  return S.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function k5() {
  return w5(S.useContext(yi));
}
function w5(e) {
  return e === null ? !0 : e.isPresent;
}
function Rh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const so = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const r = Rh(e, t.target.x),
        n = Rh(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  uv = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function C5(e) {
  const t = uv.exec(e);
  if (!t) return [,];
  const [, r, n] = t;
  return [r, n];
}
function bc(e, t, r = 1) {
  const [n, o] = C5(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  return i ? i.trim() : ic(o) ? bc(o, t, r + 1) : o;
}
function _5(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element)) return { target: t, transitionEnd: r };
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!ic(i)) return;
      const s = bc(i, n);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!ic(i)) continue;
    const s = bc(i, n);
    s && ((t[o] = s), r && r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const $h = "_$css",
  P5 = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes("var("),
        i = [];
      o && (e = e.replace(uv, (g) => (i.push(g), $h)));
      const s = Sr.parse(e);
      if (s.length > 5) return n;
      const a = Sr.createTransformer(e),
        l = typeof s[0] != "number" ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const d = ie(u, c, 0.5);
      typeof s[2 + l] == "number" && (s[2 + l] /= d),
        typeof s[3 + l] == "number" && (s[3 + l] /= d);
      let f = a(s);
      if (o) {
        let g = 0;
        f = f.replace($h, () => {
          const x = i[g];
          return g++, x;
        });
      }
      return f;
    },
  };
class E5 extends sa.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    zw(z5),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Po.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: o,
        isPresent: i,
      } = this.props,
      s = n.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== r || r === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Le.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function cv(e) {
  const [t, r] = S5(),
    n = S.useContext(Rd);
  return sa.createElement(E5, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: S.useContext(dy),
    isPresent: t,
    safeToRemove: r,
  });
}
const z5 = {
  borderRadius: {
    ...so,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: so,
  borderTopRightRadius: so,
  borderBottomLeftRadius: so,
  borderBottomRightRadius: so,
  boxShadow: P5,
};
function T5(e, t, r = {}) {
  const n = Qe(e) ? e : Wn(e);
  return (
    n.start(Jd("", n, t, r)),
    { stop: () => n.stop(), isAnimating: () => n.isAnimating() }
  );
}
const dv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  A5 = dv.length,
  Mh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  jh = (e) => typeof e == "number" || D.test(e);
function R5(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ie(0, r.opacity !== void 0 ? r.opacity : 1, $5(n))),
      (e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, M5(n))))
    : i &&
      (e.opacity = ie(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n,
      ));
  for (let s = 0; s < A5; s++) {
    const a = `border${dv[s]}Radius`;
    let l = Lh(t, a),
      u = Lh(r, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || jh(l) === jh(u)
        ? ((e[a] = Math.max(ie(Mh(l), Mh(u), n), 0)),
          (Dt.test(u) || Dt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = ie(t.rotate || 0, r.rotate || 0, n));
}
function Lh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const $5 = fv(0, 0.5, qd),
  M5 = fv(0.5, 0.95, Ct);
function fv(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(ai(e, t, n)));
}
function Ih(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function lt(e, t) {
  Ih(e.x, t.x), Ih(e.y, t.y);
}
function Dh(e, t, r, n, o) {
  return (
    (e -= t), (e = na(e, 1 / r, n)), o !== void 0 && (e = na(e, 1 / o, n)), e
  );
}
function j5(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (Dt.test(t) &&
      ((t = parseFloat(t)), (t = ie(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ie(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = Dh(e.min, t, r, a, o)),
    (e.max = Dh(e.max, t, r, a, o));
}
function Vh(e, t, [r, n, o], i, s) {
  j5(e, t[r], t[n], t[o], t.scale, i, s);
}
const L5 = ["x", "scaleX", "originX"],
  I5 = ["y", "scaleY", "originY"];
function Bh(e, t, r, n) {
  Vh(e.x, t, L5, r ? r.x : void 0, n ? n.x : void 0),
    Vh(e.y, t, I5, r ? r.y : void 0, n ? n.y : void 0);
}
function Nh(e) {
  return e.translate === 0 && e.scale === 1;
}
function pv(e) {
  return Nh(e.x) && Nh(e.y);
}
function Sc(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Oh(e) {
  return nt(e.x) / nt(e.y);
}
class D5 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Nd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Od(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0) return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Fh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `),
      u && (n += `rotateX(${u}deg) `),
      c && (n += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (n += `scale(${s}, ${a})`), n || "none";
}
const V5 = (e, t) => e.depth - t.depth;
class B5 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Nd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Od(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(V5),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function N5(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
const Wh = ["", "X", "Y", "Z"],
  Hh = 1e3;
let O5 = 0;
const Mr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function hv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = O5++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Mr.totalNodes =
            Mr.resolvedTargetDeltas =
            Mr.recalculatedProjection =
              0),
            this.nodes.forEach(H5),
            this.nodes.forEach(X5),
            this.nodes.forEach(Q5),
            this.nodes.forEach(U5),
            N5(Mr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new B5());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Fd()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      if (this.instance) return;
      (this.isSVG = s instanceof SVGElement && s.tagName !== "svg"),
        (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = ev(f, 250)),
            Po.hasAnimatedSinceResize &&
              ((Po.hasAnimatedSinceResize = !1), this.nodes.forEach(Gh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || e_,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: p } =
                  c.getProps(),
                m = !this.targetLayout || !Sc(this.targetLayout, x) || g,
                y = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const k = { ...tv(v, "layout"), onPlay: w, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                !f && this.animationProgress === 0 && Gh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        br.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(K5),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Uh);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(t_), this.potentialNodes.clear()),
        this.nodes.forEach(Y5),
        this.nodes.forEach(F5),
        this.nodes.forEach(W5),
        this.clearAllSnapshots(),
        Ol.update(),
        Ol.preRender(),
        Ol.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(G5), this.sharedNodes.forEach(q5);
    }
    scheduleUpdateProjection() {
      Le.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = pe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !pv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || $r(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        r_(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return pe();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (nr(a.x, l.offset.x), nr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = pe();
      lt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            lt(a, s);
            const { scroll: f } = this.root;
            f && (nr(a.x, -f.offset.x), nr(a.y, -f.offset.y));
          }
          nr(a.x, c.offset.x), nr(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = pe();
      lt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Sn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          $r(c.latestValues) && Sn(l, c.latestValues);
      }
      return $r(this.latestValues) && Sn(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = pe();
      lt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !$r(u.latestValues)) continue;
        vc(u.latestValues) && u.updateSnapshot();
        const c = pe(),
          d = u.measurePageBox();
        lt(c, d),
          Bh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return $r(this.latestValues) && Bh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta() {
      var s;
      const a = this.getLead();
      if (
        (this.isProjectionDirty ||
          (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty),
        !(
          ((!!this.resumingFrom || this !== a) &&
            this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        ))
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout
            ? ((this.relativeParent = f),
              (this.relativeTarget = pe()),
              (this.relativeTargetOrigin = pe()),
              Ao(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              lt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = pe()), (this.targetWithTransforms = pe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? n5(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : lt(this.target, this.layout.layoutBox),
                  av(this.target, this.targetDelta))
                : lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target
              ? ((this.relativeParent = f),
                (this.relativeTarget = pe()),
                (this.relativeTargetOrigin = pe()),
                Ao(this.relativeTargetOrigin, this.target, f.target),
                lt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vc(this.parent.latestValues) ||
          sv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      lt(this.layoutCorrected, this.layout.layoutBox),
        f5(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: f } = a;
      if (!f) return;
      this.projectionDelta ||
        ((this.projectionDelta = Ro()),
        (this.projectionDeltaWithTransform = Ro()));
      const g = this.treeScale.x,
        x = this.treeScale.y,
        v = this.projectionTransform;
      To(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = Fh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== g ||
          this.treeScale.y !== x) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", f)),
        Mr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Ro();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = pe(),
        g = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        v = g !== x,
        w = this.getStack(),
        p = !w || w.members.length <= 1,
        m = !!(v && !p && this.options.crossfade === !0 && !this.path.some(J5));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (k) => {
        const C = k / 1e3;
        Yh(d.x, s.x, C),
          Yh(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ao(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Z5(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && Sc(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = pe()),
            lt(y, this.relativeTarget)),
          v &&
            ((this.animationValues = c), R5(c, u, this.latestValues, C, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (br.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Le.update(() => {
          (Po.hasAnimatedSinceResize = !0),
            (this.currentAnimation = T5(0, Hh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Hh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          mv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || pe();
          const d = nt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = nt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        lt(a, l),
          Sn(a, c),
          To(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new D5()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Wh.length; c++) {
        const d = "rotate" + Wh[c];
        l[d] && ((u[d] = l[d]), s.setStaticValue(d, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = gs(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = gs(s.pointerEvents) || "")),
          this.hasProjected &&
            !$r(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Fh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform));
      const { x: g, y: x } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const v in qs) {
        if (f[v] === void 0) continue;
        const { correct: w, applyTo: p } = qs[v],
          m = u.transform === "none" ? f[v] : w(f[v], d);
        if (p) {
          const y = p.length;
          for (let k = 0; k < y; k++) u[p[k]] = m;
        } else u[v] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? gs(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Uh),
        this.root.sharedNodes.clear();
    }
  };
}
function F5(e) {
  e.updateLayout();
}
function W5(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = r.source !== e.layout.source;
    i === "size"
      ? Tt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            g = nt(f);
          (f.min = n[d].min), (f.max = f.min + g);
        })
      : mv(i, r.layoutBox, n) &&
        Tt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            g = nt(n[d]);
          f.max = f.min + g;
        });
    const a = Ro();
    To(a, n, r.layoutBox);
    const l = Ro();
    s ? To(l, e.applyTransform(o, !0), r.measuredBox) : To(l, n, r.layoutBox);
    const u = !pv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const x = pe();
          Ao(x, r.layoutBox, f.layoutBox);
          const v = pe();
          Ao(v, n, g.layoutBox),
            Sc(x, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function H5(e) {
  Mr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function U5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function G5(e) {
  e.clearSnapshot();
}
function Uh(e) {
  e.clearMeasurements();
}
function Y5(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Gh(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function X5(e) {
  e.resolveTargetDelta();
}
function Q5(e) {
  e.calcProjection();
}
function K5(e) {
  e.resetRotation();
}
function q5(e) {
  e.removeLeadSnapshot();
}
function Yh(e, t, r) {
  (e.translate = ie(t.translate, 0, r)),
    (e.scale = ie(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Xh(e, t, r, n) {
  (e.min = ie(t.min, r.min, n)), (e.max = ie(t.max, r.max, n));
}
function Z5(e, t, r, n) {
  Xh(e.x, t.x, r.x, n), Xh(e.y, t.y, r.y, n);
}
function J5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const e_ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function t_(e, t) {
  let r = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i];
      break;
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(
    `[data-projection-id="${t}"]`,
  );
  o && e.mount(o, !0);
}
function Qh(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function r_(e) {
  Qh(e.x), Qh(e.y);
}
function mv(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !gc(Oh(t), Oh(r), 0.2))
  );
}
const n_ = hv({
    attachResizeListener: (e, t) => Wt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Kl = { current: void 0 },
  gv = hv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Kl.current) {
        const e = new n_(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Kl.current = e);
      }
      return Kl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  o_ = {
    pan: { Feature: b5 },
    drag: { Feature: x5, ProjectionNode: gv, MeasureLayout: cv },
  },
  i_ = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  yv = (e) => i_.has(e),
  s_ = (e) => Object.keys(e).some(yv),
  Kh = (e) => e === Zr || e === D,
  qh = (e, t) => parseFloat(e.split(", ")[t]),
  Zh =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/);
      if (o) return qh(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/);
        return i ? qh(i[1], e) : 0;
      }
    },
  a_ = new Set(["x", "y", "z"]),
  l_ = Ga.filter((e) => !a_.has(e));
function u_(e) {
  const t = [];
  return (
    l_.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Jh = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Zh(4, 13),
    y: Zh(5, 14),
  },
  c_ = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      r.forEach((u) => {
        a[u] = Jh[u](n, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      r.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Jh[u](l, i));
      }),
      e
    );
  },
  d_ = (e, t, r = {}, n = {}) => {
    (t = { ...t }), (n = { ...n });
    const o = Object.keys(t).filter(yv);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = r[l],
          d = io(c);
        const f = t[l];
        let g;
        if (Js(f)) {
          const x = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = io(c));
          for (let w = v; w < x; w++) g ? si(io(f[w]) === g) : (g = io(f[w]));
        } else g = io(f);
        if (d !== g)
          if (Kh(d) && Kh(g)) {
            const x = u.get();
            typeof x == "string" && u.set(parseFloat(x)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && g === D && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            g != null &&
            g.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[l] = d.transform(f))
              : (s || ((i = u_(e)), (s = !0)),
                a.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = c_(t, e, a);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Fa && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function f_(e, t, r, n) {
  return s_(t) ? d_(e, t, r, n) : { target: t, transitionEnd: n };
}
const p_ = (e, t, r, n) => {
    const o = _5(e, t, n);
    return (t = o.target), (n = o.transitionEnd), f_(e, t, r, n);
  },
  kc = { current: null },
  vv = { current: !1 };
function h_() {
  if (((vv.current = !0), !!Fa))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (kc.current = e.matches);
      e.addListener(t), t();
    } else kc.current = !1;
}
function m_(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      s = r[o];
    if (Qe(i)) e.addValue(o, i), ta(n) && n.add(o);
    else if (Qe(s)) e.addValue(o, Wn(i, { owner: e })), ta(n) && n.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Wn(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const xv = Object.keys(ni),
  g_ = xv.length,
  em = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  y_ = Ad.length;
class v_ {
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => Le.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = r.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = Ha(r)),
      (this.isVariantNode = cy(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && Qe(f) && (f.set(a[d], !1), ta(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      vv.current || h_(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : kc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      br.update(this.notifyUpdate),
      br.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = qr.has(t),
      o = r.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Le.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i, s) {
    let a, l;
    for (let u = 0; u < g_; u++) {
      const c = xv[u],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: g,
          MeasureLayout: x,
        } = ni[c];
      g && (a = g),
        d(r) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          x && (l = x));
    }
    if (!this.projection && a) {
      this.projection = new a(
        i,
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: g,
        layoutRoot: x,
      } = r;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && xn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: g,
        layoutRoot: x,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted
        ? r.update(this.props, this.prevProps)
        : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : pe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < em.length; n++) {
      const o = em[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = m_(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < y_; n++) {
      const o = Ad[n],
        i = this.props[o];
      (ri(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    r !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = Wn(r, { owner: this })), this.addValue(t, n)),
      n
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props,
      o =
        typeof n == "string" || typeof n == "object"
          ? (r = Bd(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Qe(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Fd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class bv extends v_ {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    { transformValues: o },
    i,
  ) {
    let s = N2(n, t || {}, this);
    if ((o && (r && (r = o(r)), n && (n = o(n)), s && (s = o(s))), i)) {
      V2(this, n, s);
      const a = p_(this, n, s, r);
      (r = a.transitionEnd), (n = a.target);
    }
    return { transition: t, transitionEnd: r, ...n };
  }
}
function x_(e) {
  return window.getComputedStyle(e);
}
class b_ extends bv {
  readValueFromInstance(t, r) {
    if (qr.has(r)) {
      const n = Ud(r);
      return (n && n.default) || 0;
    } else {
      const n = x_(t),
        o = (hy(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return lv(t, r);
  }
  build(t, r, n, o) {
    Md(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Vd(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Qe(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    by(t, r, n, o);
  }
}
class S_ extends bv {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (qr.has(r)) {
      const n = Ud(r);
      return (n && n.default) || 0;
    }
    return (r = Sy.has(r) ? r : Dd(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return pe();
  }
  scrapeMotionValuesFromProps(t, r) {
    return wy(t, r);
  }
  build(t, r, n, o) {
    Ld(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    ky(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Id(t.tagName)), super.mount(t);
  }
}
const k_ = (e, t) =>
    $d(e)
      ? new S_(t, { enableHardwareAcceleration: !1 })
      : new b_(t, { enableHardwareAcceleration: !0 }),
  w_ = { layout: { ProjectionNode: gv, MeasureLayout: cv } },
  C_ = { ...JC, ...f2, ...o_, ...w_ },
  ef = Pw((e, t) => Jw(e, t, C_, k_));
function Sv() {
  const e = S.useRef(!1);
  return (
    Ks(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function __() {
  const e = Sv(),
    [t, r] = S.useState(0),
    n = S.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [S.useCallback(() => Le.postRender(n), [n]), t];
}
class P_ extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function E_({ children: e, isPresent: t }) {
  const r = S.useId(),
    n = S.useRef(null),
    o = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: i, height: s, top: a, left: l } = o.current;
      if (t || !n.current || !i || !s) return;
      n.current.dataset.motionPopId = r;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      P_,
      { isPresent: t, childRef: n, sizeRef: o },
      S.cloneElement(e, { ref: n }),
    )
  );
}
const ql = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = Ua(z_),
    l = S.useId(),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          n && n();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      i ? void 0 : [r],
    );
  return (
    S.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [r]),
    S.useEffect(() => {
      !r && !a.size && n && n();
    }, [r]),
    s === "popLayout" && (e = S.createElement(E_, { isPresent: r }, e)),
    S.createElement(yi.Provider, { value: u }, e)
  );
};
function z_() {
  return new Map();
}
function T_(e) {
  return S.useEffect(() => () => e(), []);
}
const sn = (e) => e.key || "";
function A_(e, t) {
  e.forEach((r) => {
    const n = sn(r);
    t.set(n, r);
  });
}
function R_(e) {
  const t = [];
  return (
    S.Children.forEach(e, (r) => {
      S.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const tf = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  o && (s = "wait");
  let [a] = __();
  const l = S.useContext(Rd).forceRender;
  l && (a = l);
  const u = Sv(),
    c = R_(e);
  let d = c;
  const f = new Set(),
    g = S.useRef(d),
    x = S.useRef(new Map()).current,
    v = S.useRef(!0);
  if (
    (Ks(() => {
      (v.current = !1), A_(c, x), (g.current = d);
    }),
    T_(() => {
      (v.current = !0), x.clear(), f.clear();
    }),
    v.current)
  )
    return S.createElement(
      S.Fragment,
      null,
      d.map((y) =>
        S.createElement(
          ql,
          {
            key: sn(y),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s,
          },
          y,
        ),
      ),
    );
  d = [...d];
  const w = g.current.map(sn),
    p = c.map(sn),
    m = w.length;
  for (let y = 0; y < m; y++) {
    const k = w[y];
    p.indexOf(k) === -1 && f.add(k);
  }
  return (
    s === "wait" && f.size && (d = []),
    f.forEach((y) => {
      if (p.indexOf(y) !== -1) return;
      const k = x.get(y);
      if (!k) return;
      const C = w.indexOf(y),
        P = () => {
          x.delete(y), f.delete(y);
          const _ = g.current.findIndex((z) => z.key === y);
          if ((g.current.splice(_, 1), !f.size)) {
            if (((g.current = c), u.current === !1)) return;
            a(), n && n();
          }
        };
      d.splice(
        C,
        0,
        S.createElement(
          ql,
          {
            key: sn(k),
            isPresent: !1,
            onExitComplete: P,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
          },
          k,
        ),
      );
    }),
    (d = d.map((y) => {
      const k = y.key;
      return f.has(k)
        ? y
        : S.createElement(
            ql,
            { key: sn(y), isPresent: !0, presenceAffectsLayout: i, mode: s },
            y,
          );
    })),
    S.createElement(
      S.Fragment,
      null,
      f.size ? d : d.map((y) => S.cloneElement(y)),
    )
  );
};
function $_({ children: e, isValidProp: t, ...r }) {
  t && vy(t),
    (r = { ...S.useContext(Qs), ...r }),
    (r.isStatic = Ua(() => r.isStatic));
  const n = S.useMemo(
    () => r,
    [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion],
  );
  return S.createElement(Qs.Provider, { value: n }, e);
}
var Ka = F(({ as: e = "div", className: t, ...r }, n) =>
    b.jsx(U.div, { as: ef[e], ref: n, className: H("ui-motion", t), ...r }),
  ),
  [kv, M_] = Yn({ strict: !1, name: "PortalContext" }),
  j_ = ({ children: e, containerRef: t, appendToParentPortal: r }) => {
    const n = t.current,
      o = n ?? (typeof window < "u" ? document.body : void 0),
      i = S.useMemo(() => {
        if (!n) return;
        const { ownerDocument: a } = n,
          l = a.createElement("div");
        return l && (l.className = "ui-portal"), l;
      }, [n]),
      [, s] = S.useState({});
    return (
      Us(() => s({}), []),
      Us(() => {
        if (!(!i || !o))
          return (
            o.appendChild(i),
            () => {
              o.removeChild(i);
            }
          );
      }, [i, o]),
      o && i
        ? vd.createPortal(b.jsx(kv, { value: r ? i : null, children: e }), i)
        : null
    );
  },
  L_ = ({ appendToParentPortal: e, children: t }) => {
    const [r, n] = S.useState(null),
      o = S.useRef(null),
      [, i] = S.useState({});
    S.useEffect(() => i({}), []);
    const s = M_();
    return (
      Us(() => {
        if (!r) return;
        const { ownerDocument: a } = r,
          l = e ? s ?? a.body : a.body;
        if (!l) return;
        (o.current = a.createElement("div")),
          (o.current.className = "ui-portal"),
          l.appendChild(o.current),
          i({});
        const u = o.current;
        return () => {
          l.contains(u) && l.removeChild(u);
        };
      }, [r]),
      o.current
        ? vd.createPortal(
            b.jsx(kv, { value: o.current, children: t }),
            o.current,
          )
        : b.jsx("span", { ref: (a) => (a ? n(a) : void 0) })
    );
  },
  qa = ({
    containerRef: e,
    appendToParentPortal: t = !0,
    isDisabled: r,
    children: n,
  }) =>
    r
      ? n
      : e
        ? b.jsx(j_, { containerRef: e, appendToParentPortal: t, children: n })
        : b.jsx(L_, { appendToParentPortal: t, children: n });
qa.className = "ui-portal";
qa.selector = ".ui-portal";
var Za = (e, t) => {
    const r = Lb(e);
    S.useEffect(() => {
      if (t == null) return;
      let n = null;
      return (
        (n = window.setTimeout(r, t)),
        () => {
          n && window.clearTimeout(n);
        }
      );
    }, [t, r]);
  },
  Mt = function () {
    return (
      (Mt =
        Object.assign ||
        function (t) {
          for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
      Mt.apply(this, arguments)
    );
  };
function wv(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function I_(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var vs = "right-scroll-bar-position",
  xs = "width-before-scroll-bar",
  D_ = "with-scroll-bars-hidden",
  V_ = "--removed-body-scroll-bar-size";
function Zl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function B_(e, t) {
  var r = S.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && ((r.value = n), r.callback(n, o));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var N_ = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  tm = new WeakMap();
function O_(e, t) {
  var r = B_(null, function (n) {
    return e.forEach(function (o) {
      return Zl(o, n);
    });
  });
  return (
    N_(
      function () {
        var n = tm.get(r);
        if (n) {
          var o = new Set(n),
            i = new Set(e),
            s = r.current;
          o.forEach(function (a) {
            i.has(a) || Zl(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Zl(a, s);
            });
        }
        tm.set(r, e);
      },
      [e],
    ),
    r
  );
}
function F_(e) {
  return e;
}
function W_(e, t) {
  t === void 0 && (t = F_);
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, n);
        return (
          r.push(s),
          function () {
            r = r.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var s = r;
          (r = []), s.forEach(i);
        }
        r = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (i) {
        n = !0;
        var s = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(i), (s = r);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (r = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), r;
            },
          });
      },
    };
  return o;
}
function H_(e) {
  e === void 0 && (e = {});
  var t = W_(null);
  return (t.options = Mt({ async: !0, ssr: !1 }, e)), t;
}
var Cv = function (e) {
  var t = e.sideCar,
    r = wv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return S.createElement(n, Mt({}, r));
};
Cv.isSideCarExport = !0;
function U_(e, t) {
  return e.useMedium(t), Cv;
}
var _v = H_(),
  Jl = function () {},
  Ja = S.forwardRef(function (e, t) {
    var r = S.useRef(null),
      n = S.useState({
        onScrollCapture: Jl,
        onWheelCapture: Jl,
        onTouchMoveCapture: Jl,
      }),
      o = n[0],
      i = n[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      g = e.noIsolation,
      x = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      p = w === void 0 ? "div" : w,
      m = e.gapMode,
      y = wv(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      k = f,
      C = O_([r, t]),
      P = Mt(Mt({}, y), o);
    return S.createElement(
      S.Fragment,
      null,
      c &&
        S.createElement(k, {
          sideCar: _v,
          removeScrollBar: u,
          shards: d,
          noIsolation: g,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: r,
          gapMode: m,
        }),
      s
        ? S.cloneElement(S.Children.only(a), Mt(Mt({}, P), { ref: C }))
        : S.createElement(p, Mt({}, P, { className: l, ref: C }), a),
    );
  });
Ja.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ja.classNames = { fullWidth: xs, zeroRight: vs };
var G_ = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Y_() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = G_();
  return t && e.setAttribute("nonce", t), e;
}
function X_(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Q_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var K_ = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = Y_()) && (X_(t, r), Q_(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  q_ = function () {
    var e = K_();
    return function (t, r) {
      S.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  Pv = function () {
    var e = q_(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  Z_ = { left: 0, top: 0, right: 0, gap: 0 },
  eu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  J_ = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [eu(r), eu(n), eu(o)];
  },
  eP = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Z_;
    var t = J_(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  tP = Pv(),
  Rn = "data-scroll-locked",
  rP = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          D_,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          Rn,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(a, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          vs,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          xs,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(vs, " .")
        .concat(
          vs,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(xs, " .")
        .concat(
          xs,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          Rn,
          `] {
    `,
        )
        .concat(V_, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  rm = function () {
    var e = parseInt(document.body.getAttribute(Rn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  nP = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(Rn, (rm() + 1).toString()),
        function () {
          var e = rm() - 1;
          e <= 0
            ? document.body.removeAttribute(Rn)
            : document.body.setAttribute(Rn, e.toString());
        }
      );
    }, []);
  },
  oP = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n;
    nP();
    var i = S.useMemo(
      function () {
        return eP(o);
      },
      [o],
    );
    return S.createElement(tP, { styles: rP(i, !t, o, r ? "" : "!important") });
  },
  wc = !1;
if (typeof window < "u")
  try {
    var Xi = Object.defineProperty({}, "passive", {
      get: function () {
        return (wc = !0), !0;
      },
    });
    window.addEventListener("test", Xi, Xi),
      window.removeEventListener("test", Xi, Xi);
  } catch {
    wc = !1;
  }
var rn = wc ? { passive: !1 } : !1,
  iP = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ev = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !iP(e) && r[t] === "visible")
    );
  },
  sP = function (e) {
    return Ev(e, "overflowY");
  },
  aP = function (e) {
    return Ev(e, "overflowX");
  },
  nm = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = zv(e, n);
      if (o) {
        var i = Tv(e, n),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  lP = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  uP = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  zv = function (e, t) {
    return e === "v" ? sP(t) : aP(t);
  },
  Tv = function (e, t) {
    return e === "v" ? lP(t) : uP(t);
  },
  cP = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  dP = function (e, t, r, n, o) {
    var i = cP(e, window.getComputedStyle(t).direction),
      s = i * n,
      a = r.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var g = Tv(e, a),
        x = g[0],
        v = g[1],
        w = g[2],
        p = v - w - i * x;
      (x || p) && zv(e, a) && ((d += p), (f += x)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Qi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  om = function (e) {
    return [e.deltaX, e.deltaY];
  },
  im = function (e) {
    return e && "current" in e ? e.current : e;
  },
  fP = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  pP = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  hP = 0,
  nn = [];
function mP(e) {
  var t = S.useRef([]),
    r = S.useRef([0, 0]),
    n = S.useRef(),
    o = S.useState(hP++)[0],
    i = S.useState(Pv)[0],
    s = S.useRef(e);
  S.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    S.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = I_([e.lockRef.current], (e.shards || []).map(im), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = S.useCallback(function (v, w) {
      if ("touches" in v && v.touches.length === 2)
        return !s.current.allowPinchZoom;
      var p = Qi(v),
        m = r.current,
        y = "deltaX" in v ? v.deltaX : m[0] - p[0],
        k = "deltaY" in v ? v.deltaY : m[1] - p[1],
        C,
        P = v.target,
        _ = Math.abs(y) > Math.abs(k) ? "h" : "v";
      if ("touches" in v && _ === "h" && P.type === "range") return !1;
      var z = nm(_, P);
      if (!z) return !0;
      if ((z ? (C = _) : ((C = _ === "v" ? "h" : "v"), (z = nm(_, P))), !z))
        return !1;
      if (
        (!n.current && "changedTouches" in v && (y || k) && (n.current = C), !C)
      )
        return !0;
      var M = n.current || C;
      return dP(M, w, v, M === "h" ? y : k, !0);
    }, []),
    l = S.useCallback(function (v) {
      var w = v;
      if (!(!nn.length || nn[nn.length - 1] !== i)) {
        var p = "deltaY" in w ? om(w) : Qi(w),
          m = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              fP(C.delta, p)
            );
          })[0];
        if (m && m.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!m) {
          var y = (s.current.shards || [])
              .map(im)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            k = y.length > 0 ? a(w, y[0]) : !s.current.noIsolation;
          k && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = S.useCallback(function (v, w, p, m) {
      var y = { name: v, delta: w, target: p, should: m, shadowParent: gP(p) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (k) {
            return k !== y;
          });
        }, 1);
    }, []),
    c = S.useCallback(function (v) {
      (r.current = Qi(v)), (n.current = void 0);
    }, []),
    d = S.useCallback(function (v) {
      u(v.type, om(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = S.useCallback(function (v) {
      u(v.type, Qi(v), v.target, a(v, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      nn.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, rn),
      document.addEventListener("touchmove", l, rn),
      document.addEventListener("touchstart", c, rn),
      function () {
        (nn = nn.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, rn),
          document.removeEventListener("touchmove", l, rn),
          document.removeEventListener("touchstart", c, rn);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    x = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    x ? S.createElement(i, { styles: pP(o) }) : null,
    g ? S.createElement(oP, { gapMode: e.gapMode }) : null,
  );
}
function gP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const yP = U_(_v, mP);
var Av = S.forwardRef(function (e, t) {
  return S.createElement(Ja, Mt({}, e, { ref: t, sideCar: yP }));
});
Av.classNames = Ja.classNames;
var vP = S.createContext({}),
  Ki = () => ({
    isLoading: S.createRef(),
    start: S.createRef(),
    finish: S.createRef(),
    update: S.createRef(),
    force: S.createRef(),
  }),
  qi = (e) => ({
    isLoading: () => {
      var t, r, n;
      return (n =
        (r = (t = e.current.isLoading).current) == null ? void 0 : r.call(t)) !=
        null
        ? n
        : !1;
    },
    start: (t) => {
      var r, n;
      return (n = (r = e.current.start).current) == null
        ? void 0
        : n.call(r, t);
    },
    finish: () => {
      var t, r;
      return (r = (t = e.current.finish).current) == null ? void 0 : r.call(t);
    },
    update: (t) => {
      var r, n;
      return (n = (r = e.current.update).current) == null
        ? void 0
        : n.call(r, t);
    },
    force: (t) => {
      var r, n;
      return (n = (r = e.current.force).current) == null
        ? void 0
        : n.call(r, t);
    },
  }),
  xP = (e) => e + 1,
  bP = (e) => (e === 0 ? e : e - 1),
  SP = ({ screen: e, page: t, background: r, custom: n, children: o }) => {
    var i, s, a, l, u;
    const c = S.useRef(Ki()),
      d = S.useRef(Ki()),
      f = S.useRef(Ki()),
      g = S.useRef(Ki()),
      x = qi(c),
      v = qi(d),
      w = qi(f),
      p = qi(g),
      m = { screen: x, page: v, background: w, custom: p };
    return b.jsxs(vP.Provider, {
      value: m,
      children: [
        o,
        b.jsx(Zi, {
          controlRefs: c,
          ...e,
          component:
            (i = e == null ? void 0 : e.component) != null
              ? i
              : (y) => b.jsx($v, { ...y }),
        }),
        b.jsx(Zi, {
          controlRefs: d,
          ...t,
          component:
            (s = t == null ? void 0 : t.component) != null
              ? s
              : (y) => b.jsx(Mv, { ...y }),
        }),
        b.jsx(Zi, {
          controlRefs: f,
          ...r,
          blockScrollOnMount:
            (a = r == null ? void 0 : r.blockScrollOnMount) != null ? a : !1,
          component:
            (l = r == null ? void 0 : r.component) != null
              ? l
              : (y) => b.jsx(jv, { ...y }),
        }),
        b.jsx(Zi, {
          controlRefs: g,
          blockScrollOnMount:
            (u = r == null ? void 0 : r.blockScrollOnMount) != null ? u : !1,
          ...n,
          component: n == null ? void 0 : n.component,
        }),
      ],
    });
  },
  Zi = ({
    controlRefs: e,
    appendToParentPortal: t,
    containerRef: r,
    allowPinchZoom: n = !1,
    blockScrollOnMount: o = !0,
    initialState: i,
    duration: s = null,
    icon: a,
    text: l,
    component: u,
  }) => {
    const c = S.useRef(!1),
      [{ loadingCount: d, message: f, duration: g }, x] = S.useState({
        loadingCount: i ? 1 : 0,
        message: void 0,
        duration: s,
      }),
      {
        isLoading: v,
        start: w,
        finish: p,
        update: m,
        force: y,
      } = S.useMemo(
        () => ({
          isLoading: () => c.current,
          start: ({ message: C, duration: P = s } = {}) => {
            (c.current = !0),
              x(({ loadingCount: _ }) => ({
                loadingCount: xP(_),
                message: C,
                duration: P,
              }));
          },
          update: (C) => x((P) => ({ ...P, ...C })),
          finish: () => {
            (c.current = !1),
              x(({ loadingCount: C }) => ({
                loadingCount: bP(C),
                message: void 0,
                duration: s,
              }));
          },
          force: ({ loadingCount: C = 0, message: P, duration: _ = s }) => {
            (c.current = !!C), x({ loadingCount: C, message: P, duration: _ });
          },
        }),
        [s],
      );
    on(e.current.isLoading, v),
      on(e.current.start, w),
      on(e.current.finish, p),
      on(e.current.update, m),
      on(e.current.force, y);
    const k = {
      initialState: i,
      icon: a,
      text: l,
      message: f,
      duration: g,
      onFinish: p,
    };
    return (
      Qu(() => {
        (i || zn(s)) &&
          x({ loadingCount: i ? 1 : 0, message: void 0, duration: s });
      }, [i, s]),
      b.jsx(tf, {
        initial: !1,
        children: d
          ? b.jsx(qa, {
              appendToParentPortal: t,
              containerRef: r,
              children: b.jsx(Av, {
                allowPinchZoom: n,
                enabled: o,
                forwardProps: !0,
                children: b.jsx(S.Fragment, {
                  children: b.jsx(kP, { component: u, ...k }),
                }),
              }),
            })
          : null,
      })
    );
  },
  kP = ({ component: e, ...t }) =>
    typeof e == "function" ? e(t) : b.jsx(b.Fragment, {}),
  rf = ({ message: e, ...t }) =>
    e ? (jb(e) ? e : b.jsx(U.p, { ...t, children: e })) : null,
  wP = (e = "fade") => ({
    initial: { opacity: 0, scale: e === "scaleFade" ? 0.95 : void 0 },
    animate: {
      opacity: 1,
      scale: e === "scaleFade" ? 1 : void 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: e === "scaleFade" ? 0.95 : void 0,
      transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
    },
  }),
  Rv = (e = "fill") => ({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "fallback(beerus, 9999)",
    bg:
      e === "fill"
        ? ["fallback(white, #fbfbfb)", "fallback(black, #141414)"]
        : "fallback(blackAlpha.600, rgba(0, 0, 0, 0.48))",
    w: "100vw",
    h: "100dvh",
    p: "fallback(4, 1rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  oa = (e, t = "fade") => ({
    initial: e ? !1 : "initial",
    animate: "animate",
    exit: "exit",
    variants: wP(t),
  }),
  $v = S.memo(
    ({
      initialState: e,
      icon: t,
      text: r,
      message: n,
      duration: o,
      onFinish: i,
    }) => {
      const s = {
        maxW: "24rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "fallback(2, 0.5rem)",
      };
      return (
        Za(i, o),
        b.jsx(Ka, {
          className: "ui-loading-screen",
          ...oa(e),
          __css: Rv(),
          children: b.jsxs(U.div, {
            __css: s,
            children: [
              b.jsx(On, { size: "6xl", ...t }),
              b.jsx(rf, { message: n, lineClamp: 3, ...r }),
            ],
          }),
        })
      );
    },
  );
$v.displayName = "ScreenComponent";
var Mv = S.memo(
  ({
    initialState: e,
    icon: t,
    text: r,
    message: n,
    duration: o,
    onFinish: i,
  }) => {
    const s = {
      bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
      maxW: "24rem",
      p: "fallback(4, 1rem)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "fallback(2, 0.5rem)",
      rounded: "fallback(md, 0.375rem)",
      boxShadow: [
        "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
        "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
      ],
    };
    return (
      Za(i, o),
      b.jsx(Ka, {
        className: "ui-loading-page",
        ...oa(e),
        __css: Rv("transparent"),
        children: b.jsxs(U.div, {
          as: ef.div,
          className: "ui-loading-page__inner",
          ...oa(e, "scaleFade"),
          __css: s,
          children: [
            b.jsx(On, { size: "6xl", ...t }),
            b.jsx(rf, { message: n, lineClamp: 3, ...r }),
          ],
        }),
      })
    );
  },
);
Mv.displayName = "PageComponent";
var jv = S.memo(
  ({
    initialState: e,
    icon: t,
    text: r,
    message: n,
    duration: o,
    onFinish: i,
  }) => {
    const s = {
      position: "fixed",
      right: "fallback(4, 1rem)",
      bottom: "fallback(4, 1rem)",
      zIndex: "fallback(beerus, 9999)",
      bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
      maxW: "20rem",
      p: "fallback(2, 0.5rem)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "fallback(2, 0.5rem)",
      rounded: "fallback(md, 0.375rem)",
      boxShadow: [
        "fallback(3xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25))",
        "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
      ],
    };
    return (
      Za(i, o),
      b.jsxs(Ka, {
        className: "ui-loading-background",
        ...oa(e, "scaleFade"),
        __css: s,
        children: [
          b.jsx(On, { size: "xl", ...t }),
          b.jsx(rf, { message: n, fontSize: "sm", lineClamp: 1, ...r }),
        ],
      })
    );
  },
);
jv.displayName = "BackgroundComponent";
var Lv = {
    info: { icon: sw, colorScheme: "info" },
    success: { icon: iw, colorScheme: "success" },
    warning: { icon: Jp, colorScheme: "warning" },
    error: { icon: Jp, colorScheme: "danger" },
    loading: { icon: On, colorScheme: "primary" },
  },
  [CP, nf] = Yn({
    name: "AlertStylesContext",
    errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
  }),
  _P = (e, t) => {
    var r, n;
    return (n =
      (r = t == null ? void 0 : t[e]) == null ? void 0 : r.colorScheme) != null
      ? n
      : Lv[e].colorScheme;
  },
  PP = (e, t) => {
    var r, n;
    return (n = (r = t == null ? void 0 : t[e]) == null ? void 0 : r.icon) !=
      null
      ? n
      : Lv[e].icon;
  },
  EP = F(({ status: e = "info", colorScheme: t, ...r }, n) => {
    var o, i, s;
    const { theme: a } = Ba(),
      l =
        (s =
          (i = (o = a.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {};
    t ?? (t = _P(e, l));
    const [u, c] = Na("Alert", { ...r, colorScheme: t }),
      { className: d, children: f, ...g } = Zt(c),
      x = {
        w: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        ...u.container,
      };
    return b.jsx(CP, {
      value: { status: e, styles: u },
      children: b.jsx(U.div, {
        ref: n,
        className: H("ui-alert", d),
        role: "alert",
        __css: x,
        ...g,
        children: f,
      }),
    });
  }),
  zP = ({ className: e, children: t, variant: r = "oval", ...n }) => {
    var o, i, s;
    const { status: a, styles: l } = nf(),
      { theme: u } = Ba(),
      c =
        (s =
          (i = (o = u.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {},
      d = PP(a, c),
      f = { ...l.icon, ...(a === "loading" ? l.loading : {}) };
    return b.jsx(U.span, {
      display: "inherit",
      className: H("ui-alert__icon", e),
      __css: f,
      ...n,
      children:
        t ||
        b.jsx(d, {
          ...(a === "loading"
            ? { variant: r, color: "currentcolor" }
            : { boxSize: "100%" }),
        }),
    });
  },
  TP = F(({ className: e, ...t }, r) => {
    const { styles: n } = nf(),
      o = { display: "block", ...n.title };
    return b.jsx(U.p, {
      ref: r,
      className: H("ui-alert__title", e),
      __css: o,
      ...t,
    });
  }),
  AP = F(({ className: e, ...t }, r) => {
    const { styles: n } = nf(),
      o = { ...n.description };
    return b.jsx(U.span, {
      ref: r,
      className: H("ui-alert__desc", e),
      __css: o,
      ...t,
    });
  }),
  RP = (e, t, r) => Math.min(Math.max(e, t), r),
  Iv = ({
    className: e,
    ripples: t,
    onAnimationComplete: r,
    onClear: n,
    color: o = "currentColor",
    style: i,
    isDisabled: s,
    ...a
  }) => {
    if (s) return null;
    const l = {
      rounded: "fallback(full, 9999px)",
      zIndex: "fallback(kurillin, 9)",
    };
    return b.jsx(b.Fragment, {
      children: t.map(({ key: u, x: c, y: d, size: f }) => {
        const g = RP(0.01 * f, 0.2, f > 100 ? 0.75 : 0.5);
        return b.jsx(
          tf,
          {
            mode: "popLayout",
            children: b.jsx(Ka, {
              as: "span",
              className: H("ui-ripple", e),
              initial: { transform: "scale(0)", opacity: 0.35 },
              animate: { transform: "scale(2)", opacity: 0 },
              exit: { opacity: 0 },
              transition: { duration: g },
              bgColor: o,
              style: {
                position: "absolute",
                transformOrigin: "center",
                pointerEvents: "none",
                left: c,
                top: d,
                width: `${f}px`,
                height: `${f}px`,
                ...i,
              },
              __css: l,
              ...a,
              onAnimationComplete: Hs(r, () => n(u)),
            }),
          },
          u,
        );
      }),
    });
  },
  Dv = ({ disabled: e, isDisabled: t, ...r } = {}) => {
    const [n, o] = S.useState([]),
      i = S.useCallback(
        (a) => {
          if (e || t) return o([]);
          const l = a.currentTarget,
            u = Math.max(l.clientWidth, l.clientHeight),
            c = l.getBoundingClientRect();
          o((d) => [
            ...d,
            {
              key: Db(d.length.toString()),
              size: u,
              x: a.clientX - c.x - u / 2,
              y: a.clientY - c.y - u / 2,
            },
          ]);
        },
        [e, t],
      ),
      s = S.useCallback((a) => {
        o((l) => l.filter((u) => u.key !== a));
      }, []);
    return { ripples: n, onPointerDown: Hs(i, r.onPointerDown), onClear: s };
  },
  $P = F((e, t) => {
    const [r, n] = Qn("CloseButton", e),
      {
        className: o,
        children: i,
        isDisabled: s,
        isRounded: a,
        __css: l,
        disableRipple: u,
        ...c
      } = Zt(n),
      { onPointerDown: d, ...f } = Dv({ ...c, isDisabled: u || s }),
      g = {
        position: "relative",
        overflow: "hidden",
        outline: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        ...r,
        ...l,
        ...(a ? { borderRadius: "fallback(full, 9999px)" } : {}),
      };
    return b.jsxs(U.button, {
      ref: t,
      type: "button",
      "aria-label": "Close",
      className: H("ui-close-button", o),
      disabled: s,
      __css: g,
      ...c,
      onPointerDown: d,
      children: [
        i || b.jsx(aw, { width: "1em", height: "1em" }),
        b.jsx(Iv, { isDisabled: u || s, ...f }),
      ],
    });
  }),
  MP = (e, t) => e.find((r) => r.id === t),
  sm = (e, t) => {
    const r = Vv(e, t),
      n = r ? e[r].findIndex((o) => o.id === t) : -1;
    return { placement: r, index: n };
  },
  Vv = (e, t) => {
    for (const [r, n] of Object.entries(e)) if (MP(n, t)) return r;
  },
  am = 0,
  jP = (
    e,
    {
      id: t,
      placement: r = "top",
      duration: n,
      onCloseComplete: o,
      status: i,
      style: s,
    },
  ) => (
    (am += 1),
    t ?? (t = am),
    {
      id: t,
      placement: r,
      status: i,
      duration: n,
      message: e,
      onDelete: () => $o.remove(String(t), r),
      isDelete: !1,
      onCloseComplete: o,
      style: s,
    }
  ),
  LP = (e) => {
    const { component: t } = e;
    return (n) =>
      typeof t == "function" ? t({ ...n, ...e }) : b.jsx(VP, { ...n, ...e });
  },
  IP = {
    top: [],
    "top-left": [],
    "top-right": [],
    bottom: [],
    "bottom-left": [],
    "bottom-right": [],
  },
  DP = (e) => {
    let t = e;
    const r = new Set(),
      n = (o) => {
        (t = o(t)), r.forEach((i) => i());
      };
    return {
      getSnapshot: () => t,
      subscribe: (o) => (
        r.add(o),
        () => {
          n(() => e), r.delete(o);
        }
      ),
      remove: (o, i) => {
        n((s) => ({ ...s, [i]: s[i].filter((a) => a.id != o) }));
      },
      create: (o, i) => {
        const s = i.limit,
          a = jP(o, i),
          { placement: l, id: u } = a;
        return (
          n((c) => {
            var d;
            let f = (d = c[l]) != null ? d : [];
            if (s !== void 0 && s > 0 && f.length > s - 1) {
              const x = f.length - (s - 1),
                w = (l.includes("top") ? f.slice(x * -1) : f.slice(0, x)).map(
                  ({ id: p }) => p,
                );
              f = f.map((p) => (w.includes(p.id) ? { ...p, isDelete: !0 } : p));
            }
            const g = l.includes("top") ? [a, ...f] : [...f, a];
            return { ...c, [l]: g };
          }),
          u
        );
      },
      update: (o, i) => {
        n((s) => {
          const a = { ...s },
            { placement: l, index: u } = sm(a, o);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...i, message: LP(i) }), a
          );
        });
      },
      closeAll: ({ placement: o } = {}) => {
        n((i) => {
          let s = [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ];
          return (
            o && (s = o),
            s.reduce(
              (a, l) => ((a[l] = i[l].map((u) => ({ ...u, isDelete: !0 }))), a),
              { ...i },
            )
          );
        });
      },
      close: (o) => {
        n((i) => {
          const s = Vv(i, o);
          return s
            ? {
                ...i,
                [s]: i[s].map((a) => (a.id == o ? { ...a, isDelete: !0 } : a)),
              }
            : i;
        });
      },
      isActive: (o) => !!sm($o.getSnapshot(), o).placement,
    };
  },
  $o = DP(IP),
  VP = ({
    variant: e = "basic",
    colorScheme: t,
    status: r,
    icon: n,
    title: o,
    description: i,
    isClosable: s,
    className: a,
    onClose: l,
  }) =>
    b.jsxs(EP, {
      status: r,
      variant: e,
      colorScheme: t,
      alignItems: "start",
      boxShadow:
        "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
      className: H("ui-notice", a),
      pe: s ? 8 : void 0,
      children: [
        b.jsx(zP, {
          variant: n == null ? void 0 : n.variant,
          className: "ui-notice__icon",
          ...(n != null && n.color ? { color: n.color } : {}),
          children: n == null ? void 0 : n.children,
        }),
        b.jsxs(U.div, {
          flex: "1",
          children: [
            o
              ? b.jsx(TP, {
                  className: "ui-notice__title",
                  lineClamp: 1,
                  children: o,
                })
              : null,
            i
              ? b.jsx(AP, {
                  className: "ui-notice__desc",
                  lineClamp: 3,
                  children: i,
                })
              : null,
          ],
        }),
        s
          ? b.jsx($P, {
              className: "ui-notice__close-button",
              size: "sm",
              onClick: l,
              position: "absolute",
              top: 2,
              right: 2,
            })
          : null,
      ],
    }),
  BP = ({
    variants: e,
    gap: t = "fallback(4, 1rem)",
    appendToParentPortal: r,
    containerRef: n,
  }) => {
    const o = S.useSyncExternalStore(
        $o.subscribe,
        $o.getSnapshot,
        $o.getSnapshot,
      ),
      i = Object.entries(o).map(([s, a]) => {
        const l = s.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
          u = s.includes("bottom")
            ? "env(safe-area-inset-bottom, 0px)"
            : void 0,
          c = s.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
          d = s.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)",
          f = {
            position: "fixed",
            zIndex: "fallback(zarbon, 160)",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            margin: t,
            gap: t,
            top: l,
            bottom: u,
            right: c,
            left: d,
          };
        return b.jsx(
          U.ul,
          {
            className: H("ui-notice__list", `ui-notice__list--${s}`),
            __css: f,
            children: b.jsx(tf, {
              initial: !1,
              children: a.map((g) => b.jsx(Bv, { variants: e, ...g }, g.id)),
            }),
          },
          s,
        );
      });
    return b.jsx(qa, { appendToParentPortal: r, containerRef: n, children: i });
  },
  NP = {
    initial: ({ placement: e }) => ({
      opacity: 0,
      [["top", "bottom"].includes(e) ? "y" : "x"]:
        (e === "bottom" || e.includes("right") ? 1 : -1) * 24,
    }),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Bv = S.memo(
    ({
      variants: e = NP,
      placement: t,
      duration: r = 5e3,
      message: n,
      onCloseComplete: o,
      isDelete: i = !1,
      onDelete: s,
      style: a,
    }) => {
      const [l, u] = S.useState(r),
        c = k5();
      Qu(() => {
        c || o == null || o();
      }, [c]),
        Qu(() => {
          u(r);
        }, [r]);
      const d = () => u(null),
        f = () => u(r),
        g = () => {
          c && s();
        };
      S.useEffect(() => {
        c && i && s();
      }, [c, i, s]),
        Za(g, l);
      const x = { pointerEvents: "auto", maxW: "36rem", minW: "20rem", ...a };
      return b.jsx(ef.li, {
        layout: !0,
        className: "ui-notice__list__item",
        variants: e,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        onHoverStart: d,
        onHoverEnd: f,
        custom: { placement: t },
        style: {
          display: "flex",
          justifyContent: t.includes("left")
            ? "flex-start"
            : t.includes("right")
              ? "flex-end"
              : "center",
        },
        children: b.jsx(U.div, {
          className: "ui-notice__list__item__inner",
          __css: x,
          children: Je(n, { onClose: g }),
        }),
      });
    },
  );
Bv.displayName = "NoticeComponent";
var OP = {
    yamcha: 1,
    kurillin: 9,
    nappa: 99,
    guldo: 100,
    jeice: 110,
    burter: 120,
    recoome: 130,
    ginyu: 140,
    dodoria: 150,
    zarbon: 160,
    freeza: 9996,
    vegeta: 9997,
    sonGoku: 9998,
    beerus: 9999,
  },
  FP = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  WP = {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  HP = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  UP = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "3xl":
      "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgb(0, 112, 240)",
    inline: "inset 0 0 0 3px rgb(0, 112, 240)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-sm":
      "0px 0px 0px 1px　rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2)",
    "dark-md":
      "0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2)",
    "dark-lg":
      "0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)",
  },
  Nv = {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    normal: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
    "4xl": "8rem",
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  GP = {
    ...Nv,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "9xs": "1rem",
    "8xs": "1.5rem",
    "7xs": "2rem",
    "6xs": "3rem",
    "5xs": "4.5rem",
    "4xs": "6rem",
    "3xs": "7.5rem",
    "2xs": "10rem",
    xs: "15rem",
    sm: "20rem",
    md: "24rem",
    lg: "28rem",
    xl: "32rem",
    "2xl": "36rem",
    "3xl": "42rem",
    "4xl": "48rem",
    "5xl": "56rem",
    "6xl": "64rem",
    "7xl": "72rem",
    "8xl": "80rem",
    "9xl": "90rem",
  },
  YP = {
    property: {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },
    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
  },
  XP = { sm: "4px", md: "8px", lg: "12px", xl: "16px", "2xl": "24px" },
  QP = {},
  KP = { sm: "30em", md: "48em", lg: "61em", xl: "80em", "2xl": "90em" },
  qP = {
    transparent: "transparent",
    current: "currentColor",
    black: "#141414",
    white: "#fbfbfb",
    border: ["#dcdcde", "#434248"],
    focus: "#0070F0",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
      950: "rgba(255, 255, 255, 0.96)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
      950: "rgba(0, 0, 0, 0.96)",
    },
    gray: {
      50: "#dedfe3",
      100: "#d3d5da",
      200: "#b7bbc3",
      300: "#9ea3ae",
      400: "#828997",
      500: "#6b7280",
      600: "#565c67",
      700: "#434851",
      800: "#2e3138",
      900: "#1c1e21",
      950: "#101113",
    },
    neutral: {
      50: "#dedede",
      100: "#d4d4d4",
      200: "#bababa",
      300: "#a3a3a3",
      400: "#8a8a8a",
      500: "#737373",
      600: "#5c5c5c",
      700: "#474747",
      800: "#303030",
      900: "#1c1c1c",
      950: "#0f0f0f",
    },
    red: {
      50: "#fdeae8",
      100: "#fbd9d5",
      200: "#f6b2ac",
      300: "#f28c82",
      400: "#ee6a5d",
      500: "#ea4334",
      600: "#de2817",
      700: "#b42013",
      800: "#8a190f",
      900: "#66120b",
      950: "#530f09",
    },
    rose: {
      50: "#feecef",
      100: "#fdd8de",
      200: "#fbb2be",
      300: "#f88b9d",
      400: "#f6657d",
      500: "#f43e5c",
      600: "#f2183c",
      700: "#cf0c2d",
      800: "#a40a23",
      900: "#7d071b",
      950: "#650616",
    },
    pink: {
      50: "#fde8ed",
      100: "#fcd9e3",
      200: "#f9b9ca",
      300: "#f693ad",
      400: "#f37295",
      500: "#f0517c",
      600: "#ec275c",
      700: "#d81347",
      800: "#ae0f39",
      900: "#880c2d",
      950: "#710a25",
    },
    flashy: {
      50: "#fdedf5",
      100: "#fbdaeb",
      200: "#f7b5d6",
      300: "#f390c2",
      400: "#ef6bad",
      500: "#ec4699",
      600: "#e82185",
      700: "#c6156e",
      800: "#a21159",
      900: "#780d42",
      950: "#660b38",
    },
    orange: {
      50: "#fef0e6",
      100: "#fee4d2",
      200: "#fdc7a1",
      300: "#fbac74",
      400: "#fa9247",
      500: "#f97415",
      600: "#e06106",
      700: "#b34d05",
      800: "#863a03",
      900: "#5e2902",
      950: "#461e02",
    },
    amber: {
      50: "#fdf0d8",
      100: "#fde8c4",
      200: "#fbd593",
      300: "#f9c367",
      400: "#f7b23b",
      500: "#f59f0a",
      600: "#ce8509",
      700: "#a26907",
      800: "#764c05",
      900: "#4e3303",
      950: "#362302",
    },
    yellow: {
      50: "#fef4d7",
      100: "#feefc3",
      200: "#fde290",
      300: "#fdd663",
      400: "#fcc931",
      500: "#fbbd04",
      600: "#ce9b03",
      700: "#a67d03",
      800: "#795b02",
      900: "#503d01",
      950: "#372a01",
    },
    lime: {
      50: "#e7facc",
      100: "#ddf7b5",
      200: "#c7f287",
      300: "#b2ee59",
      400: "#9de92b",
      500: "#82cb15",
      600: "#6ba611",
      700: "#507d0d",
      800: "#385809",
      900: "#1e2e05",
      950: "#121c03",
    },
    green: {
      50: "#e0f5e6",
      100: "#d0f1d9",
      200: "#a9e5b9",
      300: "#86da9c",
      400: "#5fce7d",
      500: "#3cc360",
      600: "#31a04f",
      700: "#28813f",
      800: "#1d5e2e",
      900: "#133e1f",
      950: "#0d2b15",
    },
    emerald: {
      50: "#d0fbed",
      100: "#b4f8e2",
      200: "#80f4cd",
      300: "#4defb9",
      400: "#19eba5",
      500: "#10b77f",
      600: "#0d9165",
      700: "#096748",
      800: "#06422e",
      900: "#021710",
      950: "#000503",
    },
    teal: {
      50: "#cdf9f4",
      100: "#b1f6ee",
      200: "#7ef1e3",
      300: "#51ecda",
      400: "#1ee6cf",
      500: "#14b8a5",
      600: "#108e80",
      700: "#0c6a5f",
      800: "#07403a",
      900: "#031c19",
      950: "#010504",
    },
    cyan: {
      50: "#cef6fd",
      100: "#b0f1fd",
      200: "#7ee8fb",
      300: "#4de0f9",
      400: "#16d6f8",
      500: "#07b6d5",
      600: "#0590a8",
      700: "#046e81",
      800: "#034854",
      900: "#012228",
      950: "#011114",
    },
    sky: {
      50: "#ddf3fd",
      100: "#c5eafc",
      200: "#95d9f9",
      300: "#65c8f6",
      400: "#35b7f3",
      500: "#0da2e7",
      600: "#0b87c1",
      700: "#096995",
      800: "#064e6f",
      900: "#042f43",
      950: "#032230",
    },
    blue: {
      50: "#e2edfd",
      100: "#cfe0fc",
      200: "#adcbfa",
      300: "#8bb5f8",
      400: "#659cf6",
      500: "#4387f4",
      600: "#186bf2",
      700: "#0c59d4",
      800: "#0a47a9",
      900: "#07357d",
      950: "#062c6a",
    },
    indigo: {
      50: "#e8e8fd",
      100: "#d9dafc",
      200: "#bdbef9",
      300: "#9c9ef6",
      400: "#8082f4",
      500: "#6467f2",
      600: "#3a3dee",
      700: "#1417e6",
      800: "#1114c0",
      900: "#0d0f96",
      950: "#0b0d83",
    },
    violet: {
      50: "#eee7fe",
      100: "#e3d8fd",
      200: "#cbb6fb",
      300: "#b699fa",
      400: "#a17cf8",
      500: "#895af6",
      600: "#6d34f4",
      700: "#500ced",
      800: "#410ac2",
      900: "#34089b",
      950: "#2e0788",
    },
    purple: {
      50: "#f0e2fe",
      100: "#e9d3fd",
      200: "#d7b1fb",
      300: "#c994fa",
      400: "#b772f8",
      500: "#a855f7",
      600: "#9229f5",
      700: "#7e0bea",
      800: "#6609be",
      900: "#510797",
      950: "#44067f",
    },
    fuchsia: {
      50: "#f9e3fd",
      100: "#f5d0fb",
      200: "#eeaff8",
      300: "#e78af5",
      400: "#e069f2",
      500: "#d948ef",
      600: "#d01eeb",
      700: "#b112ca",
      800: "#900ea4",
      900: "#6b0b7a",
      950: "#5b0967",
    },
  },
  ZP = {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "3rem",
    "7xl": "3.75rem",
    "8xl": "4.5rem",
    "9xl": "6rem",
  },
  JP = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  e4 = {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  t4 = {},
  r4 = {},
  n4 = {
    animations: r4,
    blurs: XP,
    borders: QP,
    breakpoints: KP,
    colors: qP,
    fontSizes: ZP,
    fontWeights: JP,
    fonts: e4,
    gradients: t4,
    letterSpacings: FP,
    lineHeights: WP,
    radii: HP,
    shadows: UP,
    sizes: GP,
    spaces: Nv,
    transitions: YP,
    zIndices: OP,
  },
  o4 = {
    body: {
      fontFamily: "body",
      bg: ["white", "black"],
      color: ["black", "white"],
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      overflowX: "hidden",
    },
    "*::placeholder, *[data-placeholder]": { color: "blackAlpha.600" },
    _dark: {
      "*::placeholder, *[data-placeholder]": { color: "whiteAlpha.400" },
    },
    "*, *::before, *::after": {
      borderWidth: "0",
      borderStyle: "solid",
      borderColor: "border",
      wordWrap: "break-word",
    },
  },
  i4 = {},
  s4 = {
    "*": { boxSizing: "border-box" },
    "::before, ::after": { boxSizing: "inherit" },
    html: {
      lineHeight: 1.15,
      WebkitTextSizeAdjust: "100%",
      WebkitTapHighlightColor: "transparent",
    },
    body: { margin: 0 },
    main: { display: "block" },
    "p, table, blockquote, address, pre, iframe, form, figure, dl": {
      margin: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      fontSize: "inherit",
      lineHeight: "inherit",
      fontWeight: "inherit",
      margin: 0,
    },
    "ul, ol": { margin: 0, padding: 0, listStyle: "none" },
    dt: { fontWeight: "bold" },
    dd: { marginLeft: 0 },
    hr: {
      boxSizing: "content-box",
      height: 0,
      overflow: "visible",
      border: 0,
      borderTop: "1px solid",
      margin: 0,
      clear: "both",
      color: "inherit",
    },
    pre: { fontFamily: "monospace, monospace", fontSize: "inherit" },
    address: { fontStyle: "inherit" },
    a: {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "inherit",
    },
    "abbr[title]": { borderBottom: "none", textDecoration: "underline dotted" },
    "b, strong": { fontWeight: "bolder" },
    "code, kbd, samp": {
      fontFamily: "monospace, monospace",
      fontSize: "inherit",
    },
    small: { fontSize: "80%" },
    "sub, sup": {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
    sub: { bottom: "-0.25em" },
    sup: { top: "-0.5em" },
    img: { borderStyle: "none", verticalAlign: "bottom" },
    "embed, object, iframe": { border: 0, verticalAlign: "bottom" },
    "button, input, optgroup, select, textarea": {
      WebkitAppearance: "none",
      appearance: "none",
      verticalAlign: "middle",
      color: "inherit",
      font: "inherit",
      border: 0,
      background: "transparent",
      padding: 0,
      margin: 0,
      outline: 0,
      borderRadius: 0,
      textAlign: "inherit",
    },
    "[type='checkbox']": {
      WebkitAppearance: "checkbox",
      appearance: "checkbox",
    },
    "[type='radio']": { WebkitAppearance: "radio", appearance: "radio" },
    "button, input": { overflow: "visible" },
    "button, select": { textTransform: "none" },
    "button, [type='button'], [type='reset'], [type='submit']": {
      cursor: "pointer",
      WebkitAppearance: "none",
      appearance: "none",
    },
    "button[disabled], [type='button'][disabled], [type='reset'][disabled], [type='submit'][disabled]":
      { cursor: "default" },
    "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
      { borderStyle: "none", padding: 0 },
    "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring":
      { outline: "1px dotted ButtonText" },
    "select::-ms-expand": { display: "none" },
    option: { padding: 0 },
    fieldset: { margin: 0, padding: 0, border: 0, minWidth: 0 },
    legend: {
      color: "inherit",
      display: "table",
      maxWidth: "100%",
      padding: 0,
      whiteSpace: "normal",
    },
    progress: { verticalAlign: "baseline" },
    textarea: { overflow: "auto" },
    "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button":
      { display: "none" },
    "[type='search']": { outlineOffset: "-2px" },
    "[type='search']::-webkit-search-decoration": { WebkitAppearance: "none" },
    "[type='time']::-webkit-calendar-picker-indicator": { display: "none" },
    "::-webkit-file-upload-button": {
      WebkitAppearance: "button",
      font: "inherit",
    },
    "::-webkit-search-cancel-button": { WebkitAppearance: "none" },
    "label[for]": { cursor: "pointer" },
    details: { display: "block" },
    summary: { display: "list-item" },
    "[contenteditable]": { outline: "none" },
    table: { borderCollapse: "collapse", borderSpacing: 0 },
    caption: { textAlign: "left" },
    "td, th": { verticalAlign: "top", padding: 0 },
    th: { textAlign: "left", fontWeight: "bold" },
    template: { display: "none" },
    "[hidden]": { display: "none !important" },
  },
  a4 = {},
  l4 = {
    baseStyle: {
      rounded: "md",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      px: "sm",
      py: "0.5",
      fontWeight: "medium",
      fontSize: "sm",
      color: "inherit",
      boxShadow: ["md", "dark-md"],
      maxW: "xs",
      zIndex: "dodoria",
    },
  },
  Pr = {
    baseStyle: {
      container: {},
      field: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
      element: { color: ["blackAlpha.600", "whiteAlpha.700"] },
    },
    variants: {
      outline: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          field: {
            border: "1px solid",
            borderColor: "inherit",
            bg: "inherit",
            _hover: { borderColor: ["blackAlpha.500", "whiteAlpha.400"] },
            _readOnly: { boxShadow: "none !important", userSelect: "all" },
            _invalid: { borderColor: [i, i], boxShadow: `0 0 0 1px ${i}` },
            _active: { borderColor: [o, o], boxShadow: `0 0 0 1px ${o}` },
            _focusVisible: {
              zIndex: "yamcha",
              borderColor: [o, o],
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
          addon: {
            border: "1px solid",
            borderColor: ["inherit", "whiteAlpha.50"],
            bg: ["blackAlpha.300", "whiteAlpha.300"],
          },
        };
      },
      filled: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          field: {
            border: "2px solid",
            borderColor: "transparent",
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _hover: { bg: ["blackAlpha.100", "whiteAlpha.100"] },
            _readOnly: { boxShadow: "none !important", userSelect: "all" },
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _active: {
              bg: "transparent",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              bg: "transparent",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
          addon: {
            border: "2px solid transparent",
            bg: ["blackAlpha.300", "whiteAlpha.300"],
          },
        };
      },
      flushed: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          field: {
            borderBottom: "1px solid",
            borderColor: "inherit",
            rounded: "0",
            px: "0",
            bg: "transparent",
            _hover: { borderColor: ["blackAlpha.500", "whiteAlpha.400"] },
            _readOnly: { boxShadow: "none !important", userSelect: "all" },
            _invalid: {
              borderColor: [i, i],
              boxShadow: `0px 1px 0px 0px ${i}`,
            },
            _active: { borderColor: [o, o], boxShadow: `0px 1px 0px 0px ${o}` },
            _focusVisible: {
              borderColor: [o, o],
              boxShadow: `0px 1px 0px 0px ${o}`,
            },
          },
          addon: {
            borderBottom: "1px solid",
            borderColor: "inherit",
            bg: "transparent",
            rounded: "0",
          },
        };
      },
      unstyled: {
        field: { bg: "transparent", minH: "auto", px: "0" },
        addon: { bg: "transparent", minH: "auto", px: "0" },
      },
    },
    sizes: {
      xs: {
        field: { fontSize: "xs", px: "2", minH: "6", rounded: "sm" },
        addon: { fontSize: "xs", px: "2", minH: "6", rounded: "sm" },
      },
      sm: {
        field: { fontSize: "sm", px: "2", minH: "8", rounded: "md" },
        addon: { fontSize: "sm", px: "2", minH: "8", rounded: "md" },
      },
      md: {
        field: { fontSize: "md", px: "3", minH: "10", rounded: "md" },
        addon: { fontSize: "md", px: "3", minH: "10", rounded: "md" },
      },
      lg: {
        field: { fontSize: "lg", px: "4", minH: "12", rounded: "md" },
        addon: { fontSize: "lg", px: "4", minH: "12", rounded: "md" },
      },
    },
    defaultProps: { size: "md", variant: "outline" },
  },
  Ov = J(Pr, {
    baseStyle: {
      container: {},
      field: {
        cursor: "pointer",
        pr: "8",
        pb: "px",
        _focus: { zIndex: "unset" },
        _readOnly: { pointerEvents: "none" },
      },
      icon: {
        w: "6",
        py: "2",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        fontSize: "xl",
        outline: 0,
        rounded: "md",
        _disabled: { opacity: 0.4 },
      },
    },
    sizes: {
      xs: { icon: { pt: "3", fontSize: "lg", insetEnd: "1" } },
      sm: { icon: { insetEnd: "2" } },
      md: { icon: { insetEnd: "2" } },
      lg: { icon: { insetEnd: "2" } },
    },
  })({ omit: ["addon", "element"] }),
  el = {
    baseStyle: {
      button: { transitionProperty: "common", transitionDuration: "normal" },
      list: {
        rounded: "md",
        minW: "xs",
        py: "2",
        bg: ["white", "black"],
        border: "1px solid",
        borderColor: ["blackAlpha.200", "whiteAlpha.100"],
        color: "inherit",
        boxShadow: ["lg", "dark-lg"],
        zIndex: "guldo",
      },
      item: {
        cursor: "pointer",
        py: "1.5",
        px: "3",
        transitionProperty: "background",
        transitionDuration: "ultra-fast",
        transitionTimingFunction: "ease-in",
        _focus: { bg: ["blackAlpha.50", "whiteAlpha.50"] },
        _active: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: { bg: ["white", "black"] },
        },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
      icon: { color: ["blackAlpha.600", "whiteAlpha.700"] },
      command: { opacity: 0.6 },
      divider: { my: "2", borderBottomWidth: "1px", borderColor: "inherit" },
      group: {},
      groupLabel: {
        py: "1.5",
        px: "3",
        fontSize: "sm",
        fontWeight: "semibold",
        color: ["blackAlpha.700", "whiteAlpha.600"],
      },
    },
  },
  of = J(Ov, el, {
    baseStyle: {
      inner: {},
      list: { w: "100%", maxH: "xs", overflowY: "auto" },
      item: {
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
          _disabled: { bg: ["white", "black"] },
        },
        _active: { bg: ["blackAlpha.200", "whiteAlpha.200"] },
      },
      itemIcon: {},
    },
  })({ omit: ["button", "command"] }),
  sf = J(of, {
    baseStyle: {
      clearIcon: {
        transitionProperty: "common",
        transitionDuration: "normal",
        pointerEvents: "auto",
        _hover: { opacity: 0.8 },
        _readOnly: { pointerEvents: "none" },
        _disabled: { pointerEvents: "none", opacity: 0.4 },
        _focusVisible: { boxShadow: "outline" },
      },
    },
  })(),
  Si = J(Pr, sf, {
    baseStyle: {
      container: {},
      field: {
        cursor: "text",
        pb: "px",
        _focus: { zIndex: "unset" },
        _readOnly: { pointerEvents: "none" },
      },
      list: {
        w: "auto",
        minW: "auto",
        maxH: "inherit",
        overflowY: "inherit",
        p: "2",
      },
    },
    sizes: { xs: { icon: { pt: "2", fontSize: "md" } } },
  })({ omit: ["addon", "element", "group", "groupLabel", "item", "itemIcon"] }),
  u4 = J(Si)(),
  c4 = {
    baseStyle: {
      container: {},
      label: {
        color: ["blackAlpha.700", "whiteAlpha.600"],
        fontWeight: "medium",
      },
      number: ({ colorScheme: e }) => ({
        fontFeatureSettings: '"pnum"',
        fontVariantNumeric: "proportional-nums",
        verticalAlign: "baseline",
        fontSize: "5xl",
        color: e
          ? [`${e}.500`, `${e}.600`]
          : ["blackAlpha.800", "whiteAlpha.700"],
        fontWeight: "extrabold",
      }),
      helperMessage: {
        fontSize: "sm",
        color: ["blackAlpha.700", "whiteAlpha.600"],
      },
      icon: {
        marginEnd: "1",
        w: "3.5",
        h: "3.5",
        verticalAlign: "middle",
        var: [
          {
            __prefix: "ui",
            name: "increase",
            token: "colors",
            value: "success.400",
          },
          {
            __prefix: "ui",
            name: "decrease",
            token: "colors",
            value: "danger.400",
          },
        ],
      },
    },
    defaultProps: {},
  },
  d4 = {
    baseStyle: ({ colorScheme: e = "primary" }) => ({
      stepper: {
        w: "100%",
        display: "flex",
        justifyContent: "space-between",
        _vertical: {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
        },
        _horizontal: { flexDirection: "row", alignItems: "center", gap: 4 },
      },
      step: {
        position: "relative",
        display: "flex",
        gap: 2,
        flex: 1,
        flexShrink: 0,
        _horizontal: { alignItems: "center" },
        "&:last-of-type:not([data-stretch])": { flex: "initial" },
      },
      status: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        rounded: "full",
        transitionProperty: "common",
        transitionDuration: "slow",
        "&[data-status=active]": {
          borderWidth: "2px",
          borderColor: [`${e}.500`, `${e}.400`],
        },
        "&[data-status=complete]": {
          bg: [`${e}.500`, `${e}.400`],
          color: ["white", "black"],
        },
        "&[data-status=incomplete]": { borderWidth: "2px" },
      },
      icon: { flexShrink: 0 },
      number: {},
      title: { fontWeight: "medium" },
      description: { color: ["blackAlpha.700", "whiteAlpha.600"] },
      separator: {
        bg: "border",
        flex: 1,
        transitionProperty: "common",
        transitionDuration: "slow",
        "&[data-status=complete]": { bg: [`${e}.500`, `${e}.400`] },
        _vertical: { position: "absolute", w: 0.5, h: "100%" },
        _horizontal: { w: "100%", h: 0.5, ms: 2 },
      },
    }),
    sizes: {
      sm: ({ theme: e }) => ({
        title: { fontSize: "sm" },
        description: { fontSize: "xs" },
        status: { w: 6, h: 6 },
        icon: { w: 4, h: 4 },
        number: { fontSize: "sm" },
        separator: {
          maxHeight: `calc(100% - ${L(e, "sizes.6")} - 8px)`,
          top: `calc(${L(e, "sizes.6")} + 4px)`,
          insetStart: `calc(${L(e, "sizes.6")} / 2 - 1px)`,
        },
      }),
      md: ({ theme: e }) => ({
        title: { fontSize: "md" },
        description: { fontSize: "sn" },
        status: { w: 8, h: 8 },
        icon: { w: 5, h: 5 },
        number: { fontSize: "md" },
        separator: {
          maxHeight: `calc(100% - ${L(e, "sizes.8")} - 8px)`,
          top: `calc(${L(e, "sizes.8")} + 4px)`,
          insetStart: `calc(${L(e, "sizes.8")} / 2 - 1px)`,
        },
      }),
      lg: ({ theme: e }) => ({
        title: { fontSize: "lg" },
        description: { fontSize: "md" },
        status: { w: 10, h: 10 },
        icon: { w: 6, h: 6 },
        number: { fontSize: "lg" },
        separator: {
          maxHeight: `calc(100% - ${L(e, "sizes.10")} - 8px)`,
          top: `calc(${L(e, "sizes.10")} + 4px)`,
          insetStart: `calc(${L(e, "sizes.10")} / 2 - 1px)`,
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "primary" },
  },
  f4 = {
    baseStyle: {
      container: {
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
      track: {
        rounded: "full",
        bg: ["blackAlpha.400", "whiteAlpha.300"],
        transitionProperty: "common",
        transitionDuration: "fast",
        _checked: { justifyContent: "flex-end" },
        _focusVisible: { boxShadow: "outline" },
      },
      thumb: { rounded: "inherit", bg: "white" },
      label: { userSelect: "none" },
    },
    variants: {
      thick: ({ colorScheme: e = "primary" }) => ({
        track: { p: "1", _checked: { bg: [`${e}.500`, `${e}.600`] } },
      }),
      thin: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        track: {
          _checked: {
            bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
          },
        },
        thumb: {
          boxShadow: "dark-md",
          _checked: { bg: [`${r}.500`, `${r}.600`] },
        },
      }),
    },
    sizes: {
      sm: ({ variant: e }) => ({
        track: { w: "6", h: e === "thin" ? "2" : void 0 },
        thumb: { w: "3", h: "3" },
        label: { fontSize: "sm" },
      }),
      md: ({ variant: e }) => ({
        track: { w: "8", h: e === "thin" ? "3" : void 0 },
        thumb: { w: "4", h: "4" },
        label: { fontSize: "md" },
      }),
      lg: ({ variant: e }) => ({
        track: { w: "10", h: e === "thin" ? "4" : void 0 },
        thumb: { w: "5", h: "5" },
        label: { fontSize: "lg" },
      }),
    },
    defaultProps: { size: "md", variant: "thick", colorScheme: "primary" },
  },
  p4 = {
    baseStyle: {
      container: ({ orientation: e }) => ({
        display: "flex",
        flexDirection: e === "vertical" ? "row" : "column",
      }),
      tabList: ({ align: e, orientation: t }) => ({
        flexDirection: t === "vertical" ? "column" : "row",
        justifyContent: e === "center" ? e : `flex-${e}`,
      }),
      tab: ({ isFitted: e }) => ({
        flex: e ? 1 : void 0,
        whiteSpace: "nowrap",
        transitionProperty: "common",
        transitionDuration: "normal",
        _hover: { opacity: 0.7 },
        _focusVisible: { zIndex: "yamcha", boxShadow: "outline" },
        _selected: { _hover: { opacity: 1 } },
        _disabled: { cursor: "not-allowed", opacity: 0.4 },
      }),
      tabPanels: {},
      tabPanel: { p: "md" },
    },
    variants: {
      line: ({ colorScheme: e = "primary", orientation: t }) => {
        const r = t === "vertical";
        return {
          tabList: {
            borderColor: "inherit",
            ...(r ? { borderEndWidth: "1px" } : { borderBottomWidth: "1px" }),
          },
          tab: {
            borderColor: "transparent",
            _selected: {
              color: [`${e}.500`, I(e) ? `${e}.100` : `${e}.400`],
              borderColor: "currentColor",
            },
            ...(r
              ? { borderEndWidth: "1px", borderEndStyle: "solid", me: "-1px" }
              : {
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  mb: "-1px",
                }),
            _ripple: { display: "none" },
          },
        };
      },
      sticky: ({ colorScheme: e = "primary", orientation: t }) => {
        const r = t === "vertical";
        return {
          tabList: {
            borderColor: "inherit",
            ...(r ? { borderEndWidth: "1px" } : { borderBottomWidth: "1px" }),
          },
          tab: {
            borderColor: "transparent",
            _selected: {
              color: [`${e}.500`, I(e) ? `${e}.100` : `${e}.400`],
              borderColor: "inherit",
              ...(r
                ? { borderEndColor: ["white", "black"] }
                : { borderBottomColor: ["white", "black"] }),
            },
            ...(r
              ? {
                  roundedLeft: "md",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  me: "-2px",
                }
              : {
                  roundedTop: "md",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  mb: "-2px",
                }),
            _ripple: { display: "none" },
          },
        };
      },
      "sticky-subtle": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
        orientation: n,
      }) => {
        const o = n === "vertical";
        return {
          tabList: {
            borderColor: "inherit",
            ...(o ? { borderEndWidth: "1px" } : { borderBottomWidth: "1px" }),
          },
          tab: {
            borderColor: "inherit",
            _notLast: {
              ...(o ? { borderBottom: "none" } : { borderEnd: "none" }),
            },
            _selected: {
              bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
              color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
            },
            ...(o
              ? { borderWidth: "1px", borderStyle: "solid", me: "-1px" }
              : { borderWidth: "1px", borderStyle: "solid", mb: "-1px" }),
          },
        };
      },
      "sticky-solid": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
        orientation: n,
      }) => {
        const o = n === "vertical";
        return {
          tabList: {
            borderColor: "inherit",
            ...(o ? { borderEndWidth: "1px" } : { borderBottomWidth: "1px" }),
          },
          tab: {
            borderColor: "inherit",
            _notLast: {
              ...(o ? { borderBottom: "none" } : { borderEnd: "none" }),
            },
            _selected: {
              bg: [he(`${r}.600`, 24)(e, t), q(`${r}.600`, 16)(e, t)],
              color: "white",
            },
            ...(o
              ? { borderWidth: "1px", borderStyle: "solid", me: "-1px" }
              : { borderWidth: "1px", borderStyle: "solid", mb: "-1px" }),
          },
        };
      },
      rounded: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
        const n = ne(
          $(`${r}.500`)(e, t),
          $(I(r) ? `${r}.100` : `${r}.400`)(e, t),
        )(t);
        return {
          tabList: { gap: "sm" },
          tab: {
            borderRadius: "full",
            _selected: { color: n, boxShadow: `inset 0 0 0px 1px ${n}` },
          },
        };
      },
      "rounded-subtle": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        tabList: { gap: "sm" },
        tab: {
          borderRadius: "full",
          _selected: {
            bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
          },
        },
      }),
      "rounded-solid": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        tabList: { gap: "sm" },
        tab: {
          borderRadius: "full",
          _selected: {
            bg: [he(`${r}.600`, 24)(e, t), q(`${r}.600`, 16)(e, t)],
            color: "white",
          },
        },
      }),
      unstyled: {
        tab: { _hover: { opacity: "inherit" }, _ripple: { display: "none" } },
      },
    },
    sizes: {
      sm: { tab: { py: 1, px: 3, fontSize: "sm" } },
      md: { tab: { fontSize: "md", py: 2, px: 4 } },
      lg: { tab: { fontSize: "lg", py: 3, px: 5 } },
    },
    defaultProps: { size: "md", variant: "line", colorScheme: "primary" },
  },
  h4 = {
    baseStyle: {
      container: {
        outline: 0,
        fontWeight: "medium",
        rounded: "md",
        _focusVisible: { boxShadow: "outline" },
      },
      label: { overflow: "visible" },
      closeButton: {
        transitionProperty: "common",
        transitionDuration: "normal",
        rounded: "full",
        opacity: 0.5,
        _disabled: { opacity: 0.4 },
        _hover: {
          opacity: 0.8,
          _disabled: { opacity: 0.4, cursor: "not-allowed" },
        },
        _active: { opacity: 1 },
        _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
      },
    },
    variants: {
      solid: {
        container: ({
          theme: e,
          colorMode: t,
          colorScheme: r = "primary",
        }) => ({
          bg: [he(`${r}.600`, 24)(e, t), q(`${r}.600`, 16)(e, t)],
          color: "white",
        }),
      },
      subtle: {
        container: ({
          theme: e,
          colorMode: t,
          colorScheme: r = "primary",
        }) => ({
          bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
          color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
        }),
      },
      outline: {
        container: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
          const n = ne(
            $(`${r}.500`)(e, t),
            $(I(r) ? `${r}.100` : `${r}.400`)(e, t),
          )(t);
          return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
        },
      },
    },
    sizes: {
      sm: ({ theme: e }) => ({
        container: {
          minH: "6",
          minW: "6",
          fontSize: "xs",
          px: "2",
          lineHeight: L(e, "sizes.6"),
        },
      }),
      md: ({ theme: e }) => ({
        container: {
          minH: "7",
          minW: "7",
          fontSize: "sm",
          px: "2",
          lineHeight: L(e, "sizes.7"),
        },
      }),
      lg: ({ theme: e }) => ({
        container: {
          minH: "8",
          minW: "8",
          fontSize: "md",
          px: "3",
          lineHeight: L(e, "sizes.8"),
        },
      }),
    },
    defaultProps: { size: "md", variant: "subtle", colorScheme: "primary" },
  },
  m4 = ny(jk(Pr, "field"), {
    baseStyle: { py: "2", lineHeight: "short", verticalAlign: "top" },
    variants: { unstyled: { h: "auto", py: "0", px: "0" } },
    sizes: {
      xs: { py: "2", minH: "20" },
      sm: { py: "2", minH: "20" },
      md: { py: "2", minH: "20" },
      lg: { py: "3", minH: "20" },
    },
  })(),
  g4 = {
    baseStyle: {
      cursor: "pointer",
      rounded: "md",
      transitionProperty: "common",
      transitionDuration: "slower",
      _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
      _readOnly: { cursor: "default", _ripple: { display: "none" } },
    },
    variants: {
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        _hover: {
          bg: [I(r) ? "blackAlpha.200" : `${r}.50`, xe(`${r}.500`, 0.12)(e, t)],
        },
        _selected: {
          bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 72)(e, t)],
        },
        _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
      }),
      solid: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        _hover: {
          bg: [I(r) ? "blackAlpha.200" : `${r}.100`, q(`${r}.300`, 72)(e, t)],
        },
        _selected: {
          bg: I(r)
            ? [`${r}.100`, `${r}.700`]
            : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
          color: [I(r) || fe(r) ? "black" : "white", "white"],
        },
        _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        border: "1px solid",
        borderColor: "border",
        _hover: {
          bg: [I(r) ? "blackAlpha.200" : `${r}.50`, xe(`${r}.500`, 0.12)(e, t)],
        },
        _selected: {
          bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 72)(e, t)],
          borderColor: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 72)(e, t)],
        },
        _focusVisible: {
          boxShadow: "outline",
          _invalid: { borderColor: "transparent" },
        },
      }),
      unstyled: {
        bg: "none",
        color: "inherit",
        display: "inline",
        lineHeight: "inherit",
        m: 0,
        p: 0,
        _ripple: { display: "none" },
      },
    },
    sizes: {
      xs: ({ theme: e }) => ({
        minBoxSize: 6,
        fontSize: "xs",
        lineHeight: L(e, "sizes.6"),
      }),
      sm: ({ theme: e }) => ({
        minBoxSize: 8,
        fontSize: "sm",
        lineHeight: L(e, "sizes.8"),
      }),
      md: ({ theme: e }) => ({
        minBoxSize: 10,
        fontSize: "md",
        lineHeight: L(e, "sizes.10"),
      }),
      lg: ({ theme: e }) => ({
        minBoxSize: 12,
        fontSize: "lg",
        lineHeight: L(e, "sizes.12"),
      }),
    },
    defaultProps: { variant: "subtle", size: "md", colorScheme: "gray" },
  },
  y4 = {
    baseStyle: {
      container: { w: "100%" },
      item: {
        w: "100%",
        h: "100%",
        _selected: { boxShadow: ["md", "dark-md"] },
      },
      trigger: { color: ["blackAlpha.300", "whiteAlpha.300"] },
    },
    variants: {
      elevated: {
        item: { bg: ["white", "black"], boxShadow: ["base", "dark-md"] },
      },
      outline: { item: { bg: ["white", "black"], borderWidth: "1px" } },
      unstyled: {
        item: { rounded: 0, p: 0, _selected: { boxShadow: "unset" } },
      },
    },
    sizes: {
      sm: { item: { rounded: "base", p: "sm" } },
      md: { item: { rounded: "md", p: "md" } },
      normal: { item: { rounded: "lg", p: "normal" } },
      lg: { item: { rounded: "xl", p: "lg" } },
    },
    defaultProps: { variant: "outline", size: "md" },
  },
  v4 = {
    baseStyle: ({ direction: e }) => ({
      container: {},
      item: {},
      trigger: {},
      icon: {
        color: ["blackAlpha.600", "whiteAlpha.700"],
        rotate: e === "vertical" ? "90deg" : "0deg",
      },
    }),
    variants: {
      border: ({ direction: e }) => ({
        trigger: {
          bg: "border",
          ...(e === "vertical" ? { h: "px" } : { w: "px" }),
          _focus: { outline: "none" },
          _focusVisible: { outline: "none", bg: "focus" },
          _after: {
            content: "''",
            position: "absolute",
            ...(e === "vertical"
              ? { left: "0", right: "0", transform: "translateY(-50%)" }
              : { top: "0", bottom: "0", transform: "translateX(-50%)" }),
            ...(e === "vertical" ? { h: "2" } : { w: "2" }),
          },
        },
        icon: { p: "1", bg: "border", rounded: "full" },
      }),
      spacer: ({
        direction: e,
        theme: t,
        colorMode: r,
        colorScheme: n = "gray",
      }) => ({
        trigger: {
          ...(e === "vertical" ? { p: "1" } : { p: "1" }),
          _after: {
            transitionProperty: "common",
            transitionDuration: "slower",
            bg: "transparent",
            content: "''",
            display: "block",
            rounded: "full",
            ...(e === "vertical"
              ? { w: "full", h: "2" }
              : { w: "2", h: "full" }),
          },
          _dark: { _after: { bg: "transparent" } },
          _focus: { outline: "none" },
          _active: {
            _after: { bg: I(n) ? "border" : `${n}.50` },
            _dark: {
              _after: { bg: I(n) ? "border" : xe(`${n}.600`, 0.12)(t, r) },
            },
          },
          _focusVisible: {
            outline: "none",
            _after: { bg: I(n) ? "border" : `${n}.100` },
            _dark: {
              _after: { bg: I(n) ? "border" : xe(`${n}.600`, 0.24)(t, r) },
            },
          },
        },
        icon: {
          transitionProperty: "common",
          transitionDuration: "slower",
          _active: { color: ["transparent", "transparent"] },
        },
      }),
      unstyled: ({ direction: e }) => ({
        trigger: {
          _after: {
            content: "''",
            position: "absolute",
            ...(e === "vertical"
              ? { left: "0", right: "0", transform: "translateY(-50%)" }
              : { top: "0", bottom: "0", transform: "translateX(-50%)" }),
            ...(e === "vertical" ? { h: "2" } : { w: "2" }),
          },
        },
      }),
    },
    defaultProps: { variant: "border", colorScheme: "gray" },
  },
  x4 = {
    baseStyle: {
      container: {
        w: "full",
        rounded: "md",
        cursor: "pointer",
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.6, cursor: "not-allowed" },
      },
      inner: { rounded: "md" },
      overlay: { rounded: "md" },
      track: {},
      thumb: {
        rounded: "full",
        outline: 0,
        borderWidth: "3px",
        borderColor: "whiteAlpha.950",
        boxShadow: ["md", "dark-md"],
        transitionProperty: "transform",
        transitionDuration: "normal",
        _active: { transform: "scale(1.15)" },
        _focusVisible: { boxShadow: ["outline", "outline"] },
      },
    },
    sizes: {
      sm: { container: { maxW: "xs" }, thumb: { boxSize: "3" } },
      md: { container: { maxW: "sm" }, thumb: { boxSize: "4" } },
      lg: { container: { maxW: "md" }, thumb: { boxSize: "5" } },
      full: { container: { maxW: "full" }, thumb: { boxSize: "5" } },
    },
    defaultProps: { size: "md" },
  },
  b4 = {
    baseStyle: {
      outline: 0,
      _focusVisible: { boxShadow: "inline" },
      _scrollbar: { w: "3", h: "3" },
      _scrollbarTrack: { bg: "transparent" },
      _scrollbarThumb: {
        bg: "blackAlpha.600",
        bgClip: "padding-box",
        border: "3px solid transparent",
        rounded: "full",
        _nativeHover: { bg: "blackAlpha.800", bgClip: "padding-box" },
      },
      _dark: {
        _scrollbarThumb: {
          bg: "whiteAlpha.600",
          bgClip: "padding-box",
          _nativeHover: { bg: "whiteAlpha.800", bgClip: "padding-box" },
        },
      },
      _scrollbarButton: {},
      _scrollbarCorner: { bg: "transparent" },
      "@-moz-document url-prefix()": {
        scrollbarColor: "whiteAlpha.600 transparent",
        _light: { scrollbarColor: "whiteAlpha.600 transparent" },
        _dark: { scrollbarColor: "whiteAlpha.600 transparent" },
      },
    },
  },
  S4 = {
    baseStyle: {
      container: {
        p: "1",
        bg: ["blackAlpha.100", "whiteAlpha.50"],
        _readOnly: { cursor: "default" },
        _disabled: { cursor: "not-allowed" },
      },
      cursor: { boxShadow: ["md", "dark-md"] },
      button: {
        transitionProperty: "common",
        transitionDuration: "ultra-slow",
        fontWeight: "medium",
        whiteSpace: "nowrap",
        color: ["blackAlpha.800", "whiteAlpha.800"],
        _hover: { opacity: 0.7, _checked: { opacity: 1 } },
        _focusVisible: { boxShadow: "outline" },
        _readOnly: { cursor: "default" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
    },
    variants: {
      basic: ({ colorScheme: e = "gray" }) => ({
        container: { rounded: "lg" },
        cursor: {
          bg: I(e)
            ? ["whiteAlpha.800", `${e}.700`]
            : [fe(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [I(e) || fe(e) ? "black" : "white", "white"],
          rounded: "md",
        },
        button: {
          rounded: "md",
          _checked: { color: [I(e) || fe(e) ? "black" : "white", "white"] },
        },
      }),
      rounded: ({ colorScheme: e = "gray" }) => ({
        container: { rounded: "full" },
        cursor: {
          bg: I(e)
            ? ["whiteAlpha.800", `${e}.700`]
            : [fe(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [I(e) || fe(e) ? "black" : "white", "white"],
          rounded: "full",
        },
        button: {
          rounded: "full",
          _checked: { color: [I(e) || fe(e) ? "black" : "white", "white"] },
        },
      }),
    },
    sizes: {
      sm: {
        container: { minW: "xs" },
        button: { py: "1", px: "2", fontSize: "sm" },
      },
      md: {
        container: { minW: "sm" },
        button: { py: "1.5", px: "3", fontSize: "md" },
      },
      lg: { container: { minW: "md" }, button: { py: "2", px: "4" } },
    },
    defaultProps: { variant: "basic", size: "md" },
  },
  k4 = {
    baseStyle: {
      background: ["blackAlpha.300", "whiteAlpha.300"],
      borderColor: ["blackAlpha.400", "whiteAlpha.400"],
      opacity: 0.7,
      borderRadius: "sm",
    },
    defaultProps: {
      startColor: ["blackAlpha.300", "whiteAlpha.300"],
      endColor: ["blackAlpha.400", "whiteAlpha.400"],
    },
  },
  w4 = J(Pr, {
    baseStyle: { container: { gap: "sm" }, field: { textAlign: "center" } },
    variants: { unstyled: { field: { h: "auto" } } },
    sizes: {
      xs: { field: { fontSize: "xs", boxSize: "6", rounded: "sm" } },
      sm: { field: { fontSize: "sm", boxSize: "8", rounded: "md" } },
      md: { field: { fontSize: "md", boxSize: "10", rounded: "md" } },
      lg: { field: { fontSize: "lg", boxSize: "12", rounded: "md" } },
    },
  })({ omit: ["addon", "sizes"] }),
  C4 = {
    baseStyle: {
      container: {
        rounded: "md",
        bg: ["white", "black"],
        border: "1px solid",
        borderColor: ["blackAlpha.200", "whiteAlpha.100"],
        color: "inherit",
        boxShadow: ["lg", "dark-lg"],
        zIndex: "guldo",
        _focusVisible: { outline: 0, boxShadow: "outline" },
      },
      closeButton: { top: "2", right: "2" },
      header: {
        p: "sm",
        gap: "sm",
        fontWeight: "semibold",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
      body: { my: "sm", px: "sm", gap: "sm" },
      footer: {
        p: "sm",
        gap: "sm",
        borderTop: "1px solid",
        borderColor: "inherit",
      },
    },
  },
  _4 = {
    baseStyle: {
      track: { bg: "border" },
      filledTrack: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
        hasStripe: n,
        isAnimation: o,
        filledTrackColor: i,
      }) => {
        n = !o && n;
        const s = ne("rgba(255, 255, 255, 0.15)", "rgba(0,0,0,0.1)")(t),
          a = i
            ? O(i)
              ? ne($(i[0], i[0])(e, t), $(i[1], i[1])(e, t))(t)
              : $(i, i)(e, t)
            : $(`${r}.500`)(e, t);
        return {
          transitionProperty: "common",
          transitionDuration: "slow",
          bgImage: n
            ? `linear-gradient(
            45deg,
            ${s} 25%,
            transparent 25%,
            transparent 50%,
            ${s} 50%,
            ${s} 75%,
            transparent 75%,
            transparent
          )`
            : o
              ? `linear-gradient(
            to right,
            transparent 0%,
            ${a} 50%,
            transparent 100%
          )`
              : void 0,
          ...(n ? { bgSize: "1rem 1rem" } : {}),
          ...(o ? {} : { bgColor: a }),
        };
      },
    },
    sizes: {
      xs: { track: { h: "1" } },
      sm: { track: { h: "2" } },
      md: { track: { h: "3" } },
      lg: { track: { h: "4" } },
    },
    defaultProps: { size: "md", colorScheme: "primary" },
  },
  ki = {
    baseStyle: {
      container: {},
      chart: {},
      referenceLine: { fillOpacity: 1, fontSize: "xs" },
      grid: { stroke: ["blackAlpha.400", "whiteAlpha.400"], strokeWidth: 1 },
      cursor: {
        fill: ["blackAlpha.50", "whiteAlpha.50"],
        stroke: ["blackAlpha.400", "whiteAlpha.400"],
        strokeWidth: 1,
      },
      xAxis: { color: ["blackAlpha.700", "whiteAlpha.600"], fontSize: "xs" },
      yAxis: { color: ["blackAlpha.700", "whiteAlpha.600"], fontSize: "xs" },
      line: {},
      dot: { strokeWidth: 2 },
      activeDot: { strokeWidth: 2, fill: ["white", "black"] },
      legend: { display: "flex", flexWrap: "wrap", justifyContent: "flex-end" },
      legendItem: {
        display: "flex",
        alignItems: "center",
        rounded: "md",
        gap: "sm",
        transitionProperty: "common",
        transitionDuration: "slower",
        color: ["blackAlpha.800", "whiteAlpha.700"],
        _hover: { bg: ["blackAlpha.50", "whiteAlpha.100"] },
      },
      legendSwatch: { boxSize: "3", rounded: "full" },
      tooltip: {
        display: "flex",
        flexDirection: "column",
        minW: "48",
        gap: "sm",
        rounded: "md",
        bg: ["white", "black"],
        border: "1px solid",
        borderColor: ["blackAlpha.200", "whiteAlpha.100"],
        p: "3",
        fontWeight: "medium",
        fontSize: "sm",
        color: "inherit",
        boxShadow: ["md", "dark-md"],
        maxW: "xs",
        zIndex: "dodoria",
      },
      tooltipTitle: { fontSize: "md" },
      tooltipList: { display: "flex", flexDirection: "column", gap: "xs" },
      tooltipItem: {
        display: "flex",
        alignItems: "center",
        gap: "sm",
        fontSize: "sm",
      },
      tooltipSwatch: { boxSize: "3", rounded: "full" },
      tooltipLabel: { color: ["blackAlpha.800", "whiteAlpha.700"] },
      tooltipValue: { flex: 1, textAlign: "end" },
    },
    variants: {},
    sizes: {
      sm: ({ theme: e }) => ({
        container: { w: "xl", h: "xs" },
        legend: { gap: "xs", mb: "md" },
        legendItem: {
          minH: "6",
          minW: "6",
          fontSize: "xs",
          px: "2",
          lineHeight: L(e, "sizes.6"),
        },
      }),
      md: ({ theme: e }) => ({
        container: { w: "3xl", h: "sm" },
        legend: { gap: "xs", mb: "md" },
        legendItem: {
          minH: "7",
          minW: "7",
          fontSize: "sm",
          px: "3",
          lineHeight: L(e, "sizes.7"),
        },
      }),
      lg: ({ theme: e }) => ({
        container: { w: "5xl", h: "md" },
        legend: { gap: "sm", mb: "md" },
        legendItem: {
          minH: "8",
          minW: "8",
          fontSize: "md",
          px: "3",
          lineHeight: L(e, "sizes.8"),
        },
      }),
      full: ({ theme: e }) => ({
        container: { w: "full", h: "md" },
        legend: { gap: "sm", mb: "md" },
        legendItem: {
          minH: "8",
          minW: "8",
          fontSize: "md",
          px: "3",
          lineHeight: L(e, "sizes.8"),
        },
      }),
    },
    defaultProps: { size: "full" },
  },
  P4 = J(ki, {
    baseStyle: {
      radar: {},
      polarGrid: {
        stroke: ["blackAlpha.400", "whiteAlpha.400"],
        strokeWidth: 1,
      },
      polarAngleAxis: {},
      polarAngleAxisTick: {
        "& > text": {
          fill: ["blackAlpha.700", "whiteAlpha.600"],
          fontSize: "xs",
        },
      },
      polarRadiusAxis: {
        "& > line": { stroke: ["blackAlpha.400", "whiteAlpha.400"] },
      },
      polarRadiusAxisTick: {
        "& > text": {
          fill: ["blackAlpha.700", "whiteAlpha.600"],
          fontSize: "xs",
        },
      },
    },
    sizes: {
      sm: { container: { w: "full" } },
      md: { container: { w: "full" } },
      lg: { container: { w: "full" } },
      full: { container: { w: "full" } },
    },
  })({ omit: ["line", "grid"] }),
  E4 = {
    baseStyle: {
      container: {
        _readOnly: { cursor: "auto" },
        _disabled: { cursor: "not-allowed" },
      },
      icon: ({ colorScheme: e = "primary" }) => ({
        transitionProperty: "box-shadow",
        transitionDuration: "normal",
        border: "2px solid",
        borderColor: "inherit",
        rounded: "full",
        color: "white",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        _checked: {
          _before: {
            content: '""',
            display: "inline-block",
            rounded: "full",
            bg: [`${e}.500`, `${e}.600`],
          },
          _hover: { _before: { bg: [`${e}.600`, `${e}.700`] } },
          _disabled: {
            _before: { bg: ["blackAlpha.400", "whiteAlpha.300"] },
            _dark: { _before: { bg: "whiteAlpha.300" } },
          },
        },
        _disabled: { bg: ["blackAlpha.200", "whiteAlpha.100"] },
        _focusVisible: { boxShadow: "outline" },
        _invalid: {
          borderColor: ["danger.500", "danger.400"],
          _focusVisible: { borderColor: ["inherit", "inherit"] },
        },
      }),
      label: { userSelect: "none", _disabled: { opacity: 0.4 } },
    },
    sizes: {
      sm: {
        icon: { boxSize: "3.5", _before: { boxSize: "1.5" } },
        label: { fontSize: "sm" },
      },
      md: {
        icon: { boxSize: "4", _before: { boxSize: "2" } },
        label: { fontSize: "md" },
      },
      lg: {
        icon: { boxSize: "5", _before: { boxSize: "3" } },
        label: { fontSize: "lg" },
      },
    },
    defaultProps: { size: "md", colorScheme: "primary" },
  },
  z4 = J(Si)(),
  Fv = {
    baseStyle: {
      container: ({ orientation: e }) => ({
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.6, cursor: "not-allowed" },
        ...(e === "vertical" ? { h: "100%" } : { w: "100%" }),
      }),
      track: {
        overflow: "hidden",
        rounded: "sm",
        bg: "border",
        _disabled: { bg: ["blackAlpha.200", "whiteAlpha.400"] },
      },
      filledTrack: ({ colorScheme: e = "primary" }) => ({
        w: "inherit",
        h: "inherit",
        bg: [`${e}.500`, `${e}.400`],
      }),
      mark: { fontSize: "sm" },
      thumb: ({ theme: e, colorMode: t, orientation: r }) => ({
        position: "absolute",
        zIndex: "yamcha",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: 0,
        rounded: "full",
        bg: "white",
        boxShadow: "base",
        border: "1px solid",
        borderColor: "transparent",
        transitionProperty: "transform",
        transitionDuration: "normal",
        _focusVisible: { boxShadow: "outline" },
        _disabled: { bg: [he("black", 72)(e, t), q("white", 64)] },
        ...(r === "vertical"
          ? {
              left: "50%",
              transform: "translateX(-50%)",
              _active: { transform: "translateX(-50%) scale(1.15)" },
            }
          : {
              top: "50%",
              transform: "translateY(-50%)",
              _active: { transform: "translateY(-50%) scale(1.15)" },
            }),
      }),
    },
    sizes: {
      sm: ({ orientation: e }) => ({
        track: e === "vertical" ? { w: "0.5" } : { h: "0.5" },
        thumb: { boxSize: "2.5" },
        mark: e === "vertical" ? { ml: "2" } : { mt: "2" },
      }),
      md: ({ orientation: e }) => ({
        track: e === "vertical" ? { w: "1" } : { h: "1" },
        thumb: { boxSize: "3.5" },
        mark: e === "vertical" ? { ml: "3" } : { mt: "3" },
      }),
      lg: ({ orientation: e }) => ({
        track: e === "vertical" ? { w: "1.5" } : { h: "1.5" },
        thumb: { boxSize: "5" },
        mark: e === "vertical" ? { ml: "4" } : { mt: "4" },
      }),
    },
    defaultProps: { size: "md", colorScheme: "primary" },
  },
  T4 = J(Fv)(),
  A4 = {
    baseStyle: ({ colorScheme: e = "yellow" }) => ({
      container: { w: "max-content" },
      group: { position: "relative" },
      item: {
        cursor: "pointer",
        rounded: "sm",
        color: ["blackAlpha.300", "whiteAlpha.300"],
        outline: "none",
        _notLast: { position: "absolute", top: 0, left: 0 },
        _readOnly: { cursor: "default" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        _focusVisible: { boxShadow: "outline" },
        _filled: { color: [`${e}.500`, `${e}.600`] },
      },
      icon: { fill: "currentColor" },
    }),
    sizes: {
      xs: { icon: { fontSize: "md" } },
      sm: { icon: { fontSize: "lg" } },
      md: { icon: { fontSize: "xl" } },
      lg: { icon: { fontSize: "2xl" } },
      xl: { icon: { fontSize: "3xl" } },
    },
    defaultProps: { size: "md", colorScheme: "yellow" },
  },
  R4 = J(Si)(),
  $4 = J(Pr, {
    baseStyle: {
      stepper: {
        borderStart: "1px solid",
        borderColor: "inherit",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        _hover: { bg: ["blackAlpha.100", "whiteAlpha.100"] },
        _active: { bg: ["blackAlpha.200", "whiteAlpha.200"] },
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
      },
    },
    variants: {
      flushed: {
        stepper: {
          bg: "transparent",
          border: "none",
          _hover: { bg: "transparent", opacity: 0.8 },
          _active: { bg: "transparent", opacity: 0.7 },
          _last: { border: "none" },
        },
      },
      unstyled: {
        stepper: {
          bg: "transparent",
          border: "none",
          _hover: { bg: "transparent" },
          _active: { bg: "transparent" },
          _last: { border: "none" },
        },
      },
    },
    sizes: {
      xs: {
        stepper: {
          fontSize: "xs",
          _first: { borderTopEndRadius: "sm" },
          _last: {
            borderBottomEndRadius: "sm",
            mt: "-1px",
            borderTop: "1px solid",
            borderColor: "inherit",
          },
        },
      },
      sm: {
        stepper: {
          fontSize: "sm",
          _first: { borderTopEndRadius: "md" },
          _last: {
            borderBottomEndRadius: "md",
            mt: "-1px",
            borderTop: "1px solid",
            borderColor: "inherit",
          },
        },
      },
      md: {
        stepper: {
          fontSize: "md",
          _first: { borderTopEndRadius: "md" },
          _last: {
            borderBottomEndRadius: "md",
            mt: "-1px",
            borderTop: "1px solid",
            borderColor: "inherit",
          },
        },
      },
      lg: {
        stepper: {
          fontSize: "lg",
          _first: { borderTopEndRadius: "md" },
          _last: {
            borderBottomEndRadius: "md",
            mt: "-1px",
            borderTop: "1px solid",
            borderColor: "inherit",
          },
        },
      },
    },
  })({ omit: ["addon"] }),
  M4 = {
    baseStyle: {
      container: { _disabled: { cursor: "not-allowed" } },
      inner: { flex: 1 },
      item: {
        px: 1,
        color: ["blackAlpha.600", "whiteAlpha.700"],
        rounded: "md",
        transitionProperty: "common",
        transitionDuration: "slower",
        _selected: { cursor: "default", pointerEvents: "none" },
        _focus: { outline: "none" },
        _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
        _hover: { _disabled: { bg: ["initial", "initial"] } },
        _focusVisible: { boxShadow: "outline" },
      },
      first: {},
      last: {},
      prev: {},
      next: {},
      dots: { pointerEvents: "none" },
    },
    variants: {
      solid: ({ colorScheme: e = "primary" }) => ({
        item: {
          border: "1px solid",
          borderColor: "border",
          _selected: {
            bg: I(e)
              ? [`${e}.50`, `${e}.700`]
              : [fe(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            borderColor: I(e)
              ? [`${e}.50`, `${e}.700`]
              : [fe(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            color: [I(e) || fe(e) ? "black" : "white", "white"],
            _hover: {
              bg: I(e)
                ? [`${e}.100`, `${e}.800`]
                : [fe(e) ? `${e}.500` : `${e}.600`, `${e}.700`],
            },
          },
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: { bg: ["initial", "initial"] },
          },
          _active: { bg: ["blackAlpha.100", "whiteAlpha.100"] },
        },
        dots: { border: "0" },
      }),
      outline: ({ colorScheme: e = "primary" }) => ({
        item: {
          border: "1px solid",
          borderColor: "border",
          _selected: {
            bg: "transparent",
            borderColor: [`${e}.600`, `${e}.500`],
            color: I(e)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${e}.600`, `${e}.500`],
            _hover: { bg: ["transparent", "transparent"] },
          },
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: { bg: ["initial", "initial"] },
          },
          _active: { bg: ["blackAlpha.100", "whiteAlpha.100"] },
        },
        dots: { border: "0" },
      }),
      ghost: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        item: {
          _selected: {
            bg: I(r) ? void 0 : "transparent",
            fontWeight: "semibold",
            color: I(r)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${r}.600`, `${r}.500`],
          },
          _hover: { bg: [`${r}.50`, xe(`${r}.600`, 0.12)(e, t)] },
          _active: {
            bg: I(r)
              ? [`${r}.300`, "whiteAlpha.300"]
              : [`${r}.200`, xe(`${r}.200`, 0.24)(e, t)],
          },
        },
      }),
      unstyled: {
        container: { gap: 0 },
        inner: { gap: 0 },
        item: { bg: "none", color: "inherit", minW: "auto", minH: "auto" },
        _ripple: { display: "none" },
      },
    },
    sizes: {
      xs: {
        container: { gap: "xs" },
        inner: { gap: "xs" },
        item: { minW: 6, minH: 6, fontSize: "xs" },
      },
      sm: {
        container: { gap: "xs" },
        inner: { gap: "xs" },
        item: { minW: 7, minH: 7, fontSize: "sm" },
      },
      md: {
        container: { gap: "sm" },
        inner: { gap: "sm" },
        item: { minW: 8, minH: 8, fontSize: "md" },
      },
      lg: {
        container: { gap: "sm" },
        inner: { gap: "sm" },
        item: { minW: 10, minH: 10, fontSize: "lg" },
      },
      xl: {
        container: { gap: "md" },
        inner: { gap: "md" },
        item: { minW: 12, minH: 12, fontSize: "xl" },
      },
    },
    defaultProps: { variant: "solid", size: "md", colorScheme: "primary" },
  },
  Wv = {
    baseStyle: {
      container: { w: "100%" },
      table: {
        h: "100%",
        w: "100%",
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
      },
      tr: {
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
          _hover: { bg: ["initial", "initial"] },
        },
      },
      th: {
        fontFamily: "heading",
        fontWeight: "semibold",
        textAlign: "start",
        color: ["blackAlpha.700", "whiteAlpha.600"],
        textTransform: "uppercase",
        letterSpacing: "wider",
      },
      td: { textAlign: "start" },
      caption: {
        fontFamily: "heading",
        fontWeight: "medium",
        textAlign: "center",
        color: ["blackAlpha.700", "whiteAlpha.600"],
      },
    },
    variants: {
      simple: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "gray",
        withBorder: n,
        withColumnBorders: o,
        highlightOnSelected: i,
        highlightOnHover: s,
      }) => ({
        table: { ...(n ? { borderWidth: "1px" } : {}) },
        th: {
          borderBottomWidth: "1px",
          "&[data-is-numeric=true]": { textAlign: "end" },
          ...(o ? { _notLast: { borderRightWidth: "1px" } } : {}),
        },
        td: {
          borderBottomWidth: "1px",
          "&[data-is-numeric=true]": { textAlign: "end" },
          ...(o ? { _notLast: { borderRightWidth: "1px" } } : {}),
        },
        tbody: {
          tr: {
            ...(i
              ? {
                  _selected: {
                    bg: [
                      I(r) ? he(`${r}.50`, 72)(e, t) : he(`${r}.50`, 64)(e, t),
                      xe(`${r}.300`, 0.04)(e, t),
                    ],
                  },
                }
              : {}),
            ...(s
              ? {
                  cursor: "pointer",
                  transitionProperty: "common",
                  transitionDuration: "slow",
                  _hover: {
                    bg: [
                      xe(`${r}.400`, 0.08)(e, t),
                      xe(`${r}.300`, 0.12)(e, t),
                    ],
                  },
                }
              : {}),
          },
        },
        tfoot: { tr: { _last: { th: { borderBottomWidth: 0 } } } },
      }),
      striped: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "gray",
        withBorder: n,
        withColumnBorders: o,
        highlightOnHover: i,
      }) => ({
        table: { ...(n ? { borderWidth: "1px" } : {}) },
        th: {
          borderBottomWidth: "1px",
          "&[data-is-numeric=true]": { textAlign: "end" },
          ...(o ? { _notLast: { borderRightWidth: "1px" } } : {}),
        },
        td: {
          borderBottomWidth: "1px",
          "&[data-is-numeric=true]": { textAlign: "end" },
          ...(o ? { _notLast: { borderRightWidth: "1px" } } : {}),
        },
        tbody: {
          tr: {
            _odd: {
              bg: [
                I(r) ? he(`${r}.50`, 72)(e, t) : he(`${r}.50`, 64)(e, t),
                xe(`${r}.300`, 0.04)(e, t),
              ],
            },
            ...(i
              ? {
                  cursor: "pointer",
                  transitionProperty: "common",
                  transitionDuration: "slow",
                  _hover: {
                    bg: [
                      xe(`${r}.400`, 0.08)(e, t),
                      xe(`${r}.300`, 0.12)(e, t),
                    ],
                  },
                }
              : {}),
          },
        },
        tfoot: { tr: { _last: { th: { borderBottomWidth: 0 } } } },
      }),
      unstyled: {},
    },
    sizes: {
      sm: {
        container: { gap: 2 },
        th: { px: 2, py: 1, fontSize: "xs", lineHeight: 5 },
        td: { px: 2, py: 1, fontSize: "xs", lineHeight: 5 },
        caption: { mt: 1, px: 2, py: 1, fontSize: "xs" },
      },
      md: {
        container: { gap: 4 },
        th: { px: 3, py: 2, fontSize: "sm", lineHeight: 5 },
        td: { px: 3, py: 2, fontSize: "sm", lineHeight: 5 },
        caption: { mt: 2, px: 3, py: 2, fontSize: "sm" },
      },
      lg: {
        container: { gap: 6 },
        th: { px: 4, py: 3, lineHeight: 6 },
        td: { px: 4, py: 3, lineHeight: 6 },
        caption: { mt: 3, px: 4, py: 3 },
      },
      xl: {
        container: { gap: 8 },
        th: { px: 6, py: 4, fontSize: "lg", lineHeight: 6 },
        td: { px: 6, py: 4, fontSize: "lg", lineHeight: 6 },
        caption: { mt: 4, px: 6, py: 4, fontSize: "lg" },
      },
    },
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  },
  Hv = J(Wv, {
    baseStyle: { sortIcon: {} },
    sizes: {
      sm: { sortIcon: { right: 2 } },
      md: { sortIcon: { right: 3 } },
      lg: { sortIcon: { right: 4 } },
      xl: { sortIcon: { right: 6 } },
    },
  })(),
  j4 = J(Hv, {
    baseStyle: { pagingControl: { gridTemplateColumns: "1fr 5fr 1fr" } },
    sizes: {
      sm: { pagingControl: { gap: 2 } },
      md: { pagingControl: { gap: 4 } },
      lg: { pagingControl: { gap: 6 } },
      xl: { pagingControl: { gap: 8 } },
    },
  })(),
  L4 = {
    baseStyle: {
      container: {},
      item: {},
      icon: { me: "2", display: "inline-block", verticalAlign: "middle" },
    },
  },
  I4 = {
    baseStyle: {},
    defaultProps: { variant: "oval", colorScheme: "primary", size: "1em" },
  },
  D4 = {
    baseStyle: { px: "1", py: "1" },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        bg: [he(`${r}.600`, 24)(e, t), q(`${r}.600`, 16)(e, t)],
        color: "white",
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => {
        const n = ne(
          $(`${r}.500`)(e, t),
          $(I(r) ? `${r}.100` : `${r}.400`)(e, t),
        )(t);
        return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
      },
      "text-accent": ({ colorScheme: e = "gray" }) => ({
        color: [`${e}.500`, I(e) ? `${e}.100` : `${e}.400`],
        p: 0,
      }),
      unstyled: { p: 0 },
    },
    defaultProps: { variant: "subtle", colorScheme: "secondary" },
  },
  V4 = {
    baseStyle: {
      w: "full",
      "*:first-of-type": { mt: "0 !important" },
      "h1, h2, h3, h4, h5, h6": {
        mt: "24px",
        mb: "16px",
        fontWeight: "semibold",
        lineHeight: "1.25",
      },
      h1: {
        pb: ".3em",
        fontSize: "2em",
        borderBottom: "1px solid",
        borderBottomColor: "border",
      },
      h2: {
        pb: ".3em",
        fontSize: "1.5em",
        borderBottom: "1px solid",
        borderBottomColor: "border",
      },
      h3: { fontSize: "1.25em" },
      h4: { fontSize: "1em" },
      h5: { fontSize: "0.875em" },
      h6: { fontSize: "0.85em" },
      "p, blockquote, ul, ol, dl, table, pre, details": {
        mt: "0px",
        mb: "16px",
      },
      strong: { fontWeight: "semibold" },
      a: { color: "link", textDecoration: "none" },
      img: { maxW: "100%", boxSizing: "content-box" },
      blockquote: {
        px: "1em",
        color: ["blackAlpha.700", "whiteAlpha.600"],
        borderLeft: "0.25em solid",
        borderLeftColor: "border",
      },
      "blockquote>:last-child": { mb: 0 },
      ul: { pl: "2em", listStyleType: "disc" },
      "li + li": { mt: "0.25em" },
      "code:not(pre > *)": {
        py: "0.2em",
        px: "0.4em",
        m: 0,
        fontFamily: "mono",
        fontSize: "85%",
        bg: ["blackAlpha.200", "whiteAlpha.300"],
        rounded: "6px",
      },
      pre: { mt: "16px", fontSize: "92.5%", lineHeight: 1.45, rounded: "6px" },
      hr: { h: "0.25em", p: 0, my: "24px", bg: "border", border: 0 },
      table: {
        display: "block",
        w: "max-content",
        maxW: "100%",
        overflow: "auto",
      },
      tr: { borderTop: "1px solid", borderTopColor: "border" },
      th: { fontWeight: "semibold" },
      "th, td": {
        py: "6px",
        px: "13px",
        border: "1px solid",
        borderColor: "border",
      },
    },
  },
  B4 = J(Si)(),
  N4 = J(sf)(),
  O4 = {
    baseStyle: { fontFamily: "heading", fontWeight: "bold" },
    sizes: {
      "4xl": { fontSize: { base: "7xl", sm: "6xl" } },
      "3xl": { fontSize: { base: "6xl", sm: "5xl" } },
      "2xl": { fontSize: { base: "5xl", sm: "4xl" } },
      xl: { fontSize: { base: "4xl", sm: "3xl" } },
      lg: { fontSize: { base: "3xl", sm: "2xl" } },
      md: { fontSize: "xl" },
      sm: { fontSize: "md" },
      xs: { fontSize: "sm" },
    },
    defaultProps: { size: "xl" },
  },
  F4 = {
    baseStyle: ({ withBorder: e }) => ({
      zIndex: "kurillin",
      rounded: "full",
      w: "fit-content",
      h: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      outline: 0,
      whiteSpace: "nowrap",
      ...(e ? { borderWidth: "0.2em", borderColor: ["white", "black"] } : {}),
    }),
    sizes: {
      sm: { minH: 2, minW: 2, fontSize: "xs", px: 1, lineHeight: 1.6 },
      md: { minH: 3, minW: 3, fontSize: "sm", px: 1.5, lineHeight: 1.5 },
      lg: { minH: 4, minW: 4, fontSize: "md", px: 2, lineHeight: 1.4 },
    },
    variants: {
      solid: ({ colorScheme: e = "primary" }) => ({
        bg: [`${e}.500`, `${e}.600`],
        color: "white",
        var: [
          {
            __prefix: "ui",
            name: "ping",
            token: "colors",
            value: [`${e}.300`, `${e}.400`],
          },
        ],
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
        var: [
          {
            __prefix: "ui",
            name: "ping",
            token: "colors",
            value: ["blackAlpha.400", "whiteAlpha.500"],
          },
        ],
      }),
    },
    defaultProps: { size: "md", variant: "solid", colorScheme: "primary" },
  },
  W4 = {
    baseStyle: {
      fontFamily: "mono",
      bg: ["blackAlpha.50", "whiteAlpha.50"],
      rounded: "md",
      borderWidth: "1px",
      fontSize: "0.8em",
      fontWeight: "bold",
      lineHeight: "shorter",
      py: "0.2em",
      px: "0.4em",
      whiteSpace: "nowrap",
    },
  },
  H4 = {
    baseStyle: {
      transitionProperty: "common",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-out",
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      color: "link",
      _hover: { textDecoration: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  af = {
    baseStyle: {
      container: {
        w: "100%",
        rounded: "md",
        bg: ["white", "black"],
        color: "inherit",
        boxShadow: ["lg", "dark-lg"],
        zIndex: "recoome",
      },
      closeButton: { top: "3", right: "3" },
      overlay: { bg: "blackAlpha.600", zIndex: "burter" },
      header: {
        pt: "md",
        px: "md",
        gap: "md",
        fontSize: "xl",
        fontWeight: "semibold",
      },
      body: { my: "md", px: "md", gap: "md", flex: "1" },
      footer: { px: "md", pb: "md", gap: "md" },
    },
    sizes: {
      xs: { container: { maxW: "xs" } },
      sm: { container: { maxW: "sm" } },
      md: { container: { maxW: "md" } },
      lg: { container: { maxW: "lg" } },
      xl: { container: { maxW: "xl" } },
      "2xl": { container: { maxW: "2xl" } },
      "3xl": { container: { maxW: "3xl" } },
      "4xl": { container: { maxW: "4xl" } },
      "5xl": { container: { maxW: "5xl" } },
      "6xl": { container: { maxW: "6xl" } },
      full: { container: { minW: "100vw", minH: "100dvh", rounded: 0 } },
    },
    defaultProps: { size: "md" },
  },
  U4 = J(af)(),
  G4 = {
    baseStyle: { borderColor: "border" },
    variants: {
      solid: { borderStyle: "solid" },
      dashed: { borderStyle: "dashed" },
      dotted: { borderStyle: "dotted" },
    },
    defaultProps: { variant: "solid" },
  },
  Uv = J(ki, {
    baseStyle: {
      pie: {},
      activeShape: {},
      inactiveShape: {},
      label: {},
      labelLine: {},
      cell: {},
    },
    sizes: {
      sm: ({ theme: e, withLegend: t, withLabels: r }) => ({
        container: {
          w: t
            ? "full"
            : St.add(L(e, "sizes.3xs"), r ? L(e, "sizes.16") : "0px"),
          h: St.add(L(e, "sizes.3xs"), L(e, "sizes.1")),
        },
        label: { fontSize: "xs" },
      }),
      md: ({ theme: e, withLegend: t, withLabels: r }) => ({
        container: {
          w: t
            ? "full"
            : St.add(L(e, "sizes.2xs"), r ? L(e, "sizes.16") : "0px"),
          h: "2xs",
        },
        label: { fontSize: "sm" },
      }),
      lg: ({ theme: e, withLegend: t, withLabels: r }) => ({
        container: {
          w: t
            ? "full"
            : St.add(L(e, "sizes.xs"), r ? L(e, "sizes.16") : "0px"),
          h: "xs",
        },
        label: { fontSize: "md" },
      }),
    },
    defaultProps: { size: "md" },
  })({ omit: ["line", "grid", "sizes.full"] }),
  Y4 = J(Uv)(),
  X4 = J(af, {
    baseStyle: {
      container: ({ isFullHeight: e, placement: t }) => ({
        ...(e ? { height: "100dvh", rounded: 0 } : {}),
        [`rounded${kp(t)}`]: 0,
      }),
      inner: {},
      body: { overflow: "auto" },
      dragBar: ({ placement: e }) => ({
        [`margin${kp(eS(e))}`]: "md",
        ...(e === "top" || e === "bottom"
          ? { mx: "auto", w: "3xs", minH: "2" }
          : { my: "auto", minW: "2", h: "3xs" }),
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        rounded: "full",
      }),
    },
    sizes: {
      xs: { container: { maxW: "xs" } },
      sm: { container: { maxW: "md" } },
      md: { container: { maxW: "lg" } },
      lg: { container: { maxW: "2xl" } },
      xl: { container: { maxW: "4xl" } },
      full: { container: { minW: "100vw", minH: "100dvh", rounded: 0 } },
    },
    defaultProps: { size: "md" },
  })({ omit: ["sizes"] }),
  Q4 = {
    baseStyle: ({ theme: e, colorMode: t }) => ({
      container: {
        color: ["blackAlpha.700", "whiteAlpha.600"],
        rounded: "md",
        w: "100%",
        bg: ["blackAlpha.50", "whiteAlpha.50"],
        outline: 0,
        overflow: "hidden",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        _hover: { cursor: "pointer", bg: ["blackAlpha.100", "whiteAlpha.100"] },
        _loading: {
          cursor: "not-allowed",
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
        _accept: {
          bg: ["success.50", xe("success.400", 0.12)(e, t)],
          borderColor: ["success.500", "success.400"],
        },
        _reject: {
          bg: ["danger.50", xe("danger.400", 0.12)(e, t)],
          borderColor: ["danger.500", "danger.400"],
        },
      },
      overlay: { bg: ["whiteAlpha.600", "blackAlpha.600"], zIndex: "kurillin" },
    }),
    variants: {
      solid: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          container: {
            borderWidth: "1px",
            borderStyle: "solid",
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _focus: {
              zIndex: "yamcha",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              zIndex: "yamcha",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
        };
      },
      dashed: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          container: {
            borderWidth: "1px",
            borderStyle: "dashed",
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _focus: {
              zIndex: "yamcha",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              zIndex: "yamcha",
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
        };
      },
      unstyled: {
        container: {
          color: "inherit",
          rounded: "inherit",
          bg: "transparent",
          h: "auto",
          _hover: { cursor: "inherit", bg: "transparent" },
          _loading: { cursor: "auto", bg: "transparent" },
          _accept: { bg: "transparent", borderColor: "inherit" },
          _reject: { bg: "transparent", borderColor: "inherit" },
        },
        overlay: { bg: "transparent" },
      },
    },
    sizes: {
      xs: { container: { h: "xs" } },
      sm: { container: { h: "sm" } },
      md: { container: { h: "md" } },
      lg: { container: { h: "lg" } },
      full: { container: { h: "full" } },
    },
    defaultProps: { size: "sm", variant: "dashed" },
  },
  K4 = {
    baseStyle: {
      container: { w: "full" },
      preview: {
        rounded: "md",
        p: "1",
        whiteSpace: "pre-line",
        transitionProperty: "common",
        transitionDuration: "normal",
      },
      input: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          rounded: "md",
          p: "1",
          w: "full",
          transitionProperty: "common",
          transitionDuration: "normal",
          _placeholder: { opacity: 0.6 },
          _invalid: { boxShadow: `0px 0px 0px 1px ${i}` },
          _focus: { zIndex: "yamcha", boxShadow: `0px 0px 0px 1px ${o}` },
          _focusVisible: {
            zIndex: "yamcha",
            boxShadow: `0px 0px 0px 1px ${o}`,
          },
        };
      },
      textarea: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = "focus",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(r)
            ? ne($(r[0], r[0])(e, t), $(r[1], r[1])(e, t))(t)
            : $(r, r)(e, t),
          i = O(n)
            ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
            : $(n, n)(e, t);
        return {
          boxSizing: "content-box",
          rounded: "md",
          p: "1",
          w: "full",
          h: "1lh",
          transitionProperty: "common",
          transitionDuration: "normal",
          _placeholder: { opacity: 0.6 },
          _invalid: { boxShadow: `0px 0px 0px 1px ${i}` },
          _focus: { zIndex: "yamcha", boxShadow: `0px 0px 0px 1px ${o}` },
          _focusVisible: {
            zIndex: "yamcha",
            boxShadow: `0px 0px 0px 1px ${o}`,
          },
        };
      },
    },
  },
  q4 = J(Pr)(),
  Z4 = {
    baseStyle: {
      container: { w: "100%", position: "relative" },
      label: {
        fontSize: "md",
        me: "3",
        mb: "2",
        fontWeight: "medium",
        transitionProperty: "common",
        transitionDuration: "normal",
        opacity: 1,
        _disabled: { opacity: 0.4 },
      },
      requiredIndicator: { ms: "1", color: ["danger.500", "danger.400"] },
      helperMessage: {
        mt: "2",
        color: ["blackAlpha.700", "whiteAlpha.600"],
        fontSize: "sm",
      },
      errorMessage: {
        mt: "2",
        color: ["danger.500", "danger.400"],
        fontSize: "sm",
      },
    },
  },
  J4 = {
    baseStyle: {
      container: {
        _readOnly: { cursor: "auto" },
        _disabled: { cursor: "not-allowed" },
      },
      icon: ({ colorScheme: e = "primary" }) => ({
        transitionProperty: "box-shadow",
        transitionDuration: "normal",
        border: "2px solid",
        borderColor: "inherit",
        color: ["white", "black"],
        _checked: {
          bg: `${e}.500`,
          borderColor: `${e}.500`,
          color: ["white", "black"],
          _hover: { bg: `${e}.600`, borderColor: `${e}.600` },
          _disabled: { bg: ["blackAlpha.400", "whiteAlpha.300"] },
        },
        _indeterminate: {
          bg: `${e}.500`,
          borderColor: `${e}.500`,
          color: ["white", "black"],
        },
        _disabled: {
          bg: ["blackAlpha.200", "whiteAlpha.100"],
          borderColor: ["transparent", "transparent"],
        },
        _focusVisible: { boxShadow: "outline" },
        _invalid: {
          borderColor: ["danger.500", "danger.400"],
          _focusVisible: {
            borderColor: "inherit",
            _checked: { borderColor: `${e}.500` },
          },
        },
      }),
      label: { userSelect: "none", _disabled: { opacity: 0.4 } },
    },
    sizes: {
      sm: {
        icon: { boxSize: "3.5", rounded: "base", fontSize: "2xs" },
        label: { fontSize: "sm" },
      },
      md: {
        icon: { boxSize: "4", rounded: "base", fontSize: "2xs" },
        label: { fontSize: "md" },
      },
      lg: {
        icon: { boxSize: "5", rounded: "base", fontSize: "sm" },
        label: { fontSize: "lg" },
      },
    },
    defaultProps: { size: "md", colorScheme: "primary" },
  },
  Gv = {
    baseStyle: {
      cursor: "pointer",
      rounded: "md",
      fontWeight: "semibold",
      transitionProperty: "common",
      transitionDuration: "slower",
      _focus: { outline: "none" },
      _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
      _readOnly: { cursor: "default", _ripple: { display: "none" } },
      _hover: { _disabled: { bg: ["initial", "initial"] } },
    },
    variants: {
      solid: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "gray",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(n)
          ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
          : $(n, n)(e, t);
        return {
          bg: I(r)
            ? [`${r}.50`, `${r}.700`]
            : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
          color: [I(r) || fe(r) ? "black" : "white", "white"],
          _hover: {
            bg: I(r)
              ? [`${r}.100`, `${r}.800`]
              : [fe(r) ? `${r}.500` : `${r}.600`, `${r}.700`],
            _disabled: {
              bg: I(r)
                ? [`${r}.50`, `${r}.700`]
                : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            },
          },
          _invalid: {
            border: "1px solid",
            borderColor: o,
            boxShadow: `0 0 0 1px ${o}`,
          },
          _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
        };
      },
      outline: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "gray",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(n)
          ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
          : $(n, n)(e, t);
        return {
          border: "1px solid",
          borderColor: [`${r}.600`, `${r}.500`],
          color: I(r)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${r}.600`, `${r}.500`],
          bg: "transparent",
          _hover: { bg: [`${r}.50`, xe(`${r}.600`, 0.12)(e, t)] },
          _invalid: { borderColor: [o, o], boxShadow: `0 0 0 1px ${o}` },
          _focusVisible: {
            boxShadow: "outline",
            _invalid: { borderColor: "transparent" },
          },
        };
      },
      link: ({ colorScheme: e = "gray" }) => ({
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        verticalAlign: "baseline",
        color: [`${e}.600`, `${e}.500`],
        _hover: {
          textDecoration: "underline",
          _disabled: { textDecoration: "none" },
        },
        _active: {
          color: [`${e}.700`, `${e}.600`],
          _disabled: { color: [`${e}.600`, `${e}.500`] },
        },
        _focusVisible: { boxShadow: "outline" },
        _ripple: { display: "none" },
      }),
      ghost: ({
        theme: e,
        colorMode: t,
        colorScheme: r = "gray",
        errorBorderColor: n = ["danger.500", "danger.400"],
      }) => {
        const o = O(n)
          ? ne($(n[0], n[0])(e, t), $(n[1], n[1])(e, t))(t)
          : $(n, n)(e, t);
        return {
          color: I(r)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${r}.600`, `${r}.500`],
          bg: "transparent",
          _hover: { bg: [`${r}.50`, xe(`${r}.600`, 0.12)(e, t)] },
          _invalid: {
            border: "1px solid",
            borderColor: o,
            boxShadow: `0 0 0 1px ${o}`,
          },
          _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
        };
      },
      unstyled: {
        bg: "none",
        color: "inherit",
        display: "inline",
        lineHeight: "inherit",
        m: 0,
        p: 0,
        _ripple: { display: "none" },
      },
    },
    sizes: {
      xs: ({ theme: e }) => ({
        h: 6,
        minW: 6,
        fontSize: "xs",
        lineHeight: L(e, "sizes.6"),
        px: 2,
      }),
      sm: ({ theme: e }) => ({
        h: 8,
        minW: 8,
        fontSize: "sm",
        lineHeight: L(e, "sizes.8"),
        px: 3,
      }),
      md: ({ theme: e }) => ({
        h: 10,
        minW: 10,
        fontSize: "md",
        lineHeight: L(e, "sizes.10"),
        px: 4,
      }),
      lg: ({ theme: e }) => ({
        h: 12,
        minW: 12,
        fontSize: "lg",
        lineHeight: L(e, "sizes.12"),
        px: 6,
      }),
    },
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  eE = ny(Gv, {
    baseStyle: {
      _hover: { bg: ["blackAlpha.100", "whiteAlpha.100"] },
      _active: { bg: ["blackAlpha.200", "whiteAlpha.200"] },
      _focusVisible: { boxShadow: "outline" },
    },
    sizes: {
      sm: { boxSize: 6, fontSize: "2xs" },
      md: { boxSize: 8, fontSize: "xs" },
      lg: { boxSize: 10, fontSize: "md" },
    },
    defaultProps: { size: "md" },
  })({ omit: ["variants", "sizes", "defaultProps"] }),
  tE = J(Pr, el, {
    baseStyle: {
      container: {},
      inner: {},
      field: {
        pr: "8",
        pb: "px",
        _focus: { zIndex: "unset" },
        _readOnly: { pointerEvents: "none" },
      },
      swatch: {},
      eyeDropper: {
        w: "6",
        py: "1",
        fontSize: "lg",
        outline: 0,
        rounded: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        pointerEvents: "auto",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        _hover: { color: ["blackAlpha.500", "whiteAlpha.600"] },
        _disabled: { pointerEvents: "none", opacity: 0.4 },
        _focusVisible: { boxShadow: "outline" },
      },
      list: {
        w: "auto",
        minW: "auto",
        maxH: "inherit",
        overflowY: "inherit",
        p: "2",
      },
    },
    sizes: {
      xs: ({ withSwatch: e }) => ({
        field: { pl: e ? "6" : "2" },
        swatch: { insetStart: "1", boxSize: "4" },
        eyeDropper: { insetEnd: "1", fontSize: "sm" },
      }),
      sm: ({ withSwatch: e }) => ({
        field: { pl: e ? "9" : "2" },
        swatch: { insetStart: "2", boxSize: "5" },
        eyeDropper: { insetEnd: "2" },
      }),
      md: ({ withSwatch: e }) => ({
        field: { pl: e ? "10" : "3" },
        swatch: { insetStart: "2", boxSize: "6" },
        eyeDropper: { insetEnd: "2" },
      }),
      lg: ({ withSwatch: e }) => ({
        field: { pl: e ? "12" : "4" },
        swatch: { insetStart: "2" },
        eyeDropper: { insetEnd: "2" },
      }),
    },
  })({
    omit: [
      "addon",
      "element",
      "button",
      "item",
      "command",
      "icon",
      "divider",
      "group",
      "groupLabel",
    ],
  }),
  rE = {
    baseStyle: {
      container: { w: "full" },
      saturationSlider: { maxW: "full" },
      body: {},
      sliders: { flex: "1" },
      hueSlider: {},
      alphaSlider: {},
      eyeDropper: {
        borderColor: "border",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        _hover: {
          borderColor: ["blackAlpha.500", "whiteAlpha.400"],
          _disabled: { borderColor: "inherit" },
        },
      },
      result: {},
      channels: {},
      channelLabel: {
        color: ["blackAlpha.700", "whiteAlpha.600"],
        fontWeight: "medium",
      },
      channel: {},
      swatchesLabel: {
        color: ["blackAlpha.700", "whiteAlpha.600"],
        fontWeight: "medium",
      },
      swatches: {},
      swatch: {
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.6, cursor: "not-allowed" },
      },
    },
    sizes: {
      sm: {
        container: { w: "xs", gap: "sm" },
        body: { gap: "xs" },
        sliders: { gap: "xs" },
        channels: { gap: "xs" },
        eyeDropper: { boxSize: "7", fontSize: "xs" },
        result: { boxSize: "7" },
        channelLabel: { fontSize: "xs" },
        swatchesLabel: { fontSize: "xs" },
        swatches: { gap: "xs" },
      },
      md: {
        container: { w: "sm", gap: "sm" },
        body: { gap: "sm" },
        sliders: { gap: "sm" },
        channels: { gap: "sm" },
        eyeDropper: { boxSize: "10" },
        result: { boxSize: "10" },
        channelLabel: { fontSize: "sm", mb: "xs" },
        swatchesLabel: { fontSize: "sm", mb: "xs" },
        swatches: { gap: "sm" },
      },
      lg: {
        container: { w: "md", gap: "md" },
        body: { gap: "sm" },
        sliders: { gap: "sm" },
        channels: { gap: "sm" },
        eyeDropper: { boxSize: "12", fontSize: "xl" },
        result: { boxSize: "12" },
        channelLabel: { fontSize: "md", mb: "xs" },
        swatchesLabel: { fontSize: "md", mb: "xs" },
        swatches: { gap: "sm" },
      },
      full: {
        container: { w: "full", gap: "md" },
        body: { gap: "sm" },
        sliders: { gap: "sm" },
        channels: { gap: "sm" },
        eyeDropper: { boxSize: "12", fontSize: "xl" },
        result: { boxSize: "12" },
        channelLabel: { fontSize: "md", mb: "xs" },
        swatchesLabel: { fontSize: "md", mb: "xs" },
        swatches: { gap: "sm" },
      },
    },
    defaultProps: { size: "md" },
  },
  nE = {
    baseStyle: { container: {}, overlay: { boxSize: "full" } },
    variants: {
      basic: { container: { rounded: "md" }, overlay: { rounded: "md" } },
      rounded: { container: { rounded: "full" }, overlay: { rounded: "full" } },
    },
    sizes: {
      sm: { container: { boxSize: "6" } },
      md: { container: { boxSize: "8" } },
      lg: { container: { boxSize: "10" } },
    },
    defaultProps: { variant: "basic", size: "md" },
  },
  oE = {
    baseStyle: {
      w: "100%",
      display: "flex",
      flexDirection: "column",
      gap: { base: "lg", sm: "md" },
      p: { base: "lg", sm: "md" },
    },
  },
  iE = J(el, { baseStyle: { trigger: {} } })(),
  sE = {
    baseStyle: {
      group: {},
      container: ({ theme: e, colorMode: t, name: r }) => {
        const n = r ? Nb({ string: r }) : ne("gray.200", "gray.500")(t);
        return {
          bg: n,
          color: Yb(n)(e, t) ? "white" : "black",
          borderColor: ["white", "black"],
          verticalAlign: "top",
          _loaded: { bg: "inherit" },
        };
      },
      name: {},
      excess: {
        borderColor: ["white", "black"],
        bg: ["blackAlpha.200", "whiteAlpha.200"],
      },
      badge: {
        rounded: "full",
        borderWidth: "0.2em",
        borderColor: ["white", "black"],
      },
    },
    sizes: {
      "2xs": ({ theme: e }) => ({
        container: {
          w: "4",
          h: "4",
          fontSize: `calc(${L(e, "sizes.4")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.4")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: {
          w: "4",
          h: "4",
          fontSize: `calc(${L(e, "sizes.4")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
      }),
      xs: ({ theme: e }) => ({
        container: {
          w: "6",
          h: "6",
          fontSize: `calc(${L(e, "sizes.6")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.6")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "6", h: "6" },
      }),
      sm: ({ theme: e }) => ({
        container: {
          w: "8",
          h: "8",
          fontSize: `calc(${L(e, "sizes.8")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.8")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "8", h: "8" },
      }),
      md: ({ theme: e }) => ({
        container: {
          w: "12",
          h: "12",
          fontSize: `calc(${L(e, "sizes.12")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.12")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "12", h: "12" },
      }),
      lg: ({ theme: e }) => ({
        container: {
          w: "16",
          h: "16",
          fontSize: `calc(${L(e, "sizes.16")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.16")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "16", h: "16" },
      }),
      xl: ({ theme: e }) => ({
        container: {
          w: "24",
          h: "24",
          fontSize: `calc(${L(e, "sizes.24")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.24")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "24", h: "24" },
      }),
      "2xl": ({ theme: e }) => ({
        container: {
          w: "32",
          h: "32",
          fontSize: `calc(${L(e, "sizes.32")} / 2.5)`,
        },
        name: {
          fontSize: `calc(${L(e, "sizes.32")} / 2.5)`,
          lineHeight: L(e, "sizes.16"),
        },
        excess: { w: "32", h: "32" },
      }),
    },
    defaultProps: { size: "md" },
  },
  aE = {
    baseStyle: {
      px: 1,
      textTransform: "uppercase",
      fontSize: "xs",
      rounded: "sm",
      fontWeight: "bold",
    },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        bg: [he(`${r}.600`, 24)(e, t), q(`${r}.600`, 16)(e, t)],
        color: "white",
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
        const n = ne(
          $(`${r}.500`)(e, t),
          $(I(r) ? `${r}.100` : xe(`${r}.400`, 0.92)(e, t))(e, t),
        )(t);
        return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
      },
    },
    defaultProps: { variant: "subtle", colorScheme: "primary" },
  },
  lE = J(ki, {
    baseStyle: {
      bar: {},
      activeBar: {},
      background: { fill: "transparent" },
      cursor: { strokeDasharray: "5 5" },
    },
  })({ omit: ["dot", "activeDot"] }),
  uE = {
    baseStyle: {
      container: {},
      item: {},
      link: {
        transitionProperty: "common",
        transitionDuration: "fast",
        transitionTimingFunction: "ease-out",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        "&:not([aria-current=page])": {
          cursor: "pointer",
          _hover: { textDecoration: "underline" },
          _focusVisible: { boxShadow: "outline" },
        },
      },
      separator: {},
      ellipsis: {},
    },
  },
  cE = {
    baseStyle: {
      container: { gap: "md" },
      header: {},
      label: { color: ["blackAlpha.700", "whiteAlpha.600"] },
      labelIcon: { color: ["blackAlpha.500", "whiteAlpha.500"] },
      control: {
        color: ["blackAlpha.500", "whiteAlpha.500"],
        fontSize: "1.25em",
        _hidden: { opacity: 0, pointerEvents: "none" },
      },
      prev: {},
      next: {},
      content: {},
      year: { gridTemplateColumns: "repeat(4, 1fr)" },
      month: { gridTemplateColumns: "repeat(3, 1fr)" },
      button: {
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none",
          _focusVisible: { boxShadow: "0 0 0 3px rgba(125, 125, 125, 0.6)" },
        },
      },
      date: {},
      row: {},
      cell: { transitionProperty: "common", transitionDuration: "slower" },
      weekday: {
        userSelect: "none",
        color: ["blackAlpha.700", "whiteAlpha.600"],
        justifyContent: "center",
        alignItems: "center",
      },
      day: {
        _weekend: { color: ["red.600", "red.400"] },
        _outside: { color: ["blackAlpha.500", "whiteAlpha.500"] },
        _holiday: { color: ["red.600", "red.400"] },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          _ripple: { display: "none" },
        },
      },
    },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        button: {
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: { bg: ["initial", "initial"] },
          },
          _selected: {
            bg: I(r)
              ? [`${r}.50`, `${r}.700`]
              : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [I(r) || fe(r) ? "black" : "white", "white"],
          },
        },
        cell: {
          _between: {
            bg: [
              I(r) ? xe(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              q(`${r}.300`, 72)(e, t),
            ],
            _start: { roundedLeft: "md" },
            _end: { roundedRight: "md" },
          },
        },
        day: {
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _between: { bg: ["initial", "initial"] },
            _selected: {
              bg: I(r)
                ? [`${r}.100`, `${r}.700`]
                : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            },
            _disabled: { bg: ["initial", "initial"] },
          },
          _today: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _between: { bg: ["initial", "initial"] },
          },
          _start: { roundedRight: "0" },
          _end: { roundedLeft: "0" },
          _selected: {
            bg: I(r)
              ? [`${r}.100`, `${r}.700`]
              : [fe(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [I(r) || fe(r) ? "black" : "white", "white"],
            borderColor: ["transparent", "transparent"],
          },
        },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        button: {
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: { bg: ["initial", "initial"] },
          },
          _selected: {
            bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
          },
        },
        cell: {
          _between: {
            bg: [
              I(r) ? xe(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              q(`${r}.300`, 72)(e, t),
            ],
            _start: { roundedLeft: "md" },
            _end: { roundedRight: "md" },
          },
        },
        day: {
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _between: { bg: ["initial", "initial"] },
            _selected: {
              bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
            },
            _disabled: { bg: ["initial", "initial"] },
          },
          _today: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _between: { bg: ["initial", "initial"] },
          },
          _start: { roundedRight: "0" },
          _end: { roundedLeft: "0" },
          _selected: {
            bg: [I(r) ? `${r}.50` : `${r}.100`, q(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
            borderColor: ["transparent", "transparent"],
          },
        },
      }),
      unstyled: {
        container: { gap: "inherit", fontSize: "inherit" },
        content: { w: "auto" },
        label: {
          h: "auto",
          pointerEvents: "inherit",
          _hover: { bg: "inherit" },
          _active: { bg: "inherit", pointerEvents: "inherit" },
        },
        labelIcon: { color: "inherit" },
        control: {
          fontSize: "inherit",
          w: "auto",
          h: "auto",
          _hover: { bg: "inherit" },
          _active: { bg: "inherit" },
          _hidden: { opacity: "inherit", pointerEvents: "inherit" },
        },
        button: {
          h: "auto",
          _hover: { bg: "inherit" },
          _active: { bg: "inherit" },
          _disabled: {
            opacity: "inherit",
            cursor: "inherit",
            boxShadow: "inherit",
            _focusVisible: { boxShadow: "inherit" },
          },
        },
        weekday: { userSelect: "auto", color: "inherit", w: "auto", h: "auto" },
        day: {
          w: "auto",
          h: "auto",
          _hover: { bg: "inherit" },
          _active: { bg: "inherit" },
          _weekend: { color: "inherit" },
          _outside: { color: "inherit" },
          _holiday: { color: "inherit" },
          _disabled: {
            opacity: "inherit",
            cursor: "inherit",
            boxShadow: "inherit",
            _focusVisible: { boxShadow: "inherit" },
          },
        },
      },
    },
    sizes: {
      sm: {
        container: { fontSize: "xs" },
        content: { w: 56 },
        label: { h: 8 },
        control: { w: 8, h: 8 },
        button: { h: 8 },
        weekday: { w: 8, h: 8 },
        day: { w: 8, h: 8 },
      },
      md: {
        container: { fontSize: "sm" },
        content: { w: "17.5rem" },
        label: { h: 10 },
        control: { w: 10, h: 10 },
        button: { h: 10 },
        weekday: { w: 10, h: 10 },
        day: { w: 10, h: 10 },
      },
      lg: {
        container: { fontSize: "md" },
        content: { w: "21rem" },
        label: { h: 12 },
        control: { fontSize: "1.5em", w: 12, h: 12 },
        button: { h: 12 },
        weekday: { w: 12, h: 12 },
        day: { w: 12, h: 12 },
      },
      full: {
        container: { w: "full", fontSize: "md" },
        content: { w: "full" },
        label: { h: 12 },
        control: { fontSize: "1.5em", w: 12, h: 12 },
        button: { h: 12 },
        weekday: { w: "full", h: 12 },
        day: { w: "full", h: 12 },
      },
    },
    defaultProps: { size: "md", variant: "solid", colorScheme: "primary" },
  },
  dE = {
    baseStyle: { container: {}, header: {}, body: { flex: "1" }, footer: {} },
    variants: {
      elevated: { container: { boxShadow: ["md", "dark-md"] } },
      outline: { container: { borderWidth: "1px" } },
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: {
          bg: [he(`${r}.600`, 16)(e, t), q(`${r}.600`, 16)(e, t)],
          color: "white",
        },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: { bg: [`${r}.100`, q(`${r}.300`, 58)(e, t)] },
      }),
      unstyled: {
        container: { rounded: 0 },
        header: { p: 0 },
        body: { p: 0 },
        footer: { p: 0 },
      },
    },
    sizes: {
      sm: {
        container: { rounded: "base" },
        header: { pt: "sm", px: "sm", gap: "sm" },
        body: { py: "sm", px: "sm", gap: "sm" },
        footer: { pb: "sm", px: "sm", gap: "sm" },
      },
      md: {
        container: { rounded: "md" },
        header: { pt: "md", px: "md", gap: "md" },
        body: { py: "md", px: "md", gap: "md" },
        footer: { pb: "md", px: "md", gap: "md" },
      },
      normal: {
        container: { rounded: "lg" },
        header: { pt: "normal", px: "normal", gap: "normal" },
        body: { py: "normal", px: "normal", gap: "normal" },
        footer: { pb: "normal", px: "normal", gap: "normal" },
      },
      lg: {
        container: { rounded: "xl" },
        header: { pt: "lg", px: "lg", gap: "lg" },
        body: { py: "lg", px: "lg", gap: "lg" },
        footer: { pb: "lg", px: "lg", gap: "lg" },
      },
    },
    defaultProps: { variant: "elevated", colorScheme: "primary", size: "md" },
  },
  fE = {
    baseStyle: {
      container: { w: "100%" },
      inner: {},
      slide: {},
      control: {},
      prev: ({ orientation: e }) => ({
        ...(e === "vertical"
          ? { left: "50%", top: "4", transform: "translateX(-50%)" }
          : { top: "50%", left: "4", transform: "translateY(-50%)" }),
      }),
      next: ({ orientation: e }) => ({
        ...(e === "vertical"
          ? { left: "50%", bottom: "4", transform: "translateX(-50%)" }
          : { top: "50%", right: "4", transform: "translateY(-50%)" }),
      }),
      indicators: ({ orientation: e }) => ({
        gap: "md",
        ...(e === "vertical"
          ? {
              py: "4",
              h: "100%",
              top: "50%",
              right: "4",
              transform: "translateY(-50%)",
            }
          : {
              px: "4",
              w: "100%",
              h: "2",
              left: "50%",
              bottom: "4",
              transform: "translateX(-50%)",
            }),
      }),
      indicator: ({ orientation: e }) => ({
        rounded: "full",
        bg: ["whiteAlpha.400", "blackAlpha.400"],
        _hover: { bg: ["whiteAlpha.500", "blackAlpha.500"] },
        _active: { bg: ["whiteAlpha.600", "blackAlpha.600"] },
        _selected: { bg: ["whiteAlpha.700", "blackAlpha.700"] },
        transitionProperty: "common",
        transitionDuration: "slower",
        ...(e === "vertical"
          ? { h: "8", right: "4" }
          : { w: "8", bottom: "4" }),
      }),
    },
    sizes: {
      sm: {
        inner: { h: "sm" },
        indicators: ({ orientation: e }) => ({
          ...(e === "vertical" ? { w: "1.5" } : { h: "1.5" }),
        }),
      },
      md: {
        inner: { h: "md" },
        indicators: ({ orientation: e }) => ({
          ...(e === "vertical" ? { w: "1.5" } : { h: "1.5" }),
        }),
      },
      lg: {
        inner: { h: "lg" },
        indicators: ({ orientation: e }) => ({
          ...(e === "vertical" ? { w: "2" } : { h: "2" }),
        }),
      },
      xl: {
        inner: { h: "xl" },
        indicators: ({ orientation: e }) => ({
          ...(e === "vertical" ? { w: "2" } : { h: "2" }),
        }),
      },
    },
    defaultProps: { size: "md" },
  },
  pE = {
    baseStyle: {
      container: {},
      item: {},
      button: {
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: { boxShadow: "outline" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        py: "3",
        px: "4",
      },
      panel: { px: "4", pb: "3" },
      icon: {
        ml: "auto",
        fontSize: "1.25em",
        color: ["blackAlpha.600", "whiteAlpha.700"],
      },
    },
    variants: {
      basic: {
        item: {
          borderTopWidth: "1px",
          borderColor: "inherit",
          _last: { borderBottomWidth: "1px" },
        },
        button: {
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: { bg: "none" },
          },
        },
      },
      card: {
        item: {
          borderWidth: "1px",
          rounded: "md",
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _expanded: { bg: ["white", "black"] },
          _notFirst: { mt: "md" },
        },
        button: {
          _hover: {
            bg: ["blackAlpha.100", "whiteAlpha.100"],
            _expanded: { bg: "none" },
            _disabled: { bg: "none" },
          },
        },
      },
      unstyled: {},
    },
    defaultProps: { variant: "basic" },
  },
  hE = {
    baseStyle: {
      container: { px: 4, py: 3, rounded: "md" },
      icon: { flexShrink: 0, marginEnd: 3, boxSize: 5 },
      loading: { flexShrink: 0, marginEnd: 3, fontSize: "xl" },
      title: { marginEnd: 2, fontWeight: "bold", lineHeight: 5 },
      description: { lineHeight: 5 },
    },
    variants: {
      basic: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: { bg: ["white", "black"], borderWidth: "1px" },
        icon: { color: [he(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: { bg: [`${r}.100`, q(`${r}.300`, 58)(e, t)] },
        icon: { color: [he(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: {
          bg: [he(`${r}.600`, 16)(e, t), q(`${r}.600`, 16)(e, t)],
          color: "white",
        },
      }),
      "island-accent": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        container: {
          bg: ["white", "black"],
          borderWidth: "1px",
          pl: 7,
          _before: {
            content: '""',
            position: "absolute",
            top: "50%",
            left: 3,
            transform: "translateY(-50%)",
            w: 1,
            h: "calc(100% - 1.5rem)",
            bg: [he(`${r}.600`, 16)(e, t), `${r}.400`],
            rounded: "full",
          },
        },
        icon: { color: [he(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      "left-accent": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        container: {
          bg: [`${r}.100`, q(`${r}.300`, 58)(e, t)],
          pl: 3,
          borderLeft: "0.25rem solid",
          borderLeftColor: [he(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [he(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      "top-accent": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        container: {
          bg: [`${r}.100`, q(`${r}.300`, 58)(e, t)],
          pt: 3,
          borderTop: "0.25rem solid",
          borderTopColor: [he(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [he(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
    },
    defaultProps: { variant: "basic", colorScheme: "primary" },
  },
  Yv = {
    baseStyle: {
      container: {
        w: "100%",
        rounded: "full",
        cursor: "pointer",
        _readOnly: { cursor: "auto" },
        _disabled: { opacity: 0.6, cursor: "not-allowed" },
      },
      overlay: { rounded: "full" },
      track: {},
      thumb: {
        rounded: "full",
        outline: 0,
        borderWidth: "3px",
        borderColor: "whiteAlpha.950",
        boxShadow: ["md", "dark-md"],
        transitionProperty: "transform",
        transitionDuration: "normal",
        _active: { transform: "scale(1.15)" },
        _focusVisible: { boxShadow: ["outline", "outline"] },
      },
    },
    sizes: {
      sm: { container: { h: "3" }, thumb: { boxSize: "3" } },
      md: { container: { h: "4" }, thumb: { boxSize: "4" } },
      lg: { container: { h: "5" }, thumb: { boxSize: "5" } },
    },
    defaultProps: { size: "md" },
  },
  mE = J(Yv)(),
  gE = J(ki, { baseStyle: { area: {} } })({ omit: ["line"] }),
  yE = J(of)(),
  vE = {
    Toggle: g4,
    Accordion: pE,
    Alert: hE,
    AlphaSlider: mE,
    AreaChart: gE,
    Autocomplete: yE,
    Avatar: sE,
    Badge: aE,
    BarChart: lE,
    Breadcrumb: uE,
    Button: Gv,
    Calendar: cE,
    Card: dE,
    Carousel: fE,
    Checkbox: J4,
    CloseButton: eE,
    ColorPicker: tE,
    ColorSelector: rE,
    ColorSwatch: nE,
    Container: oE,
    ContextMenu: iE,
    DatePicker: Si,
    Dialog: U4,
    Divider: G4,
    DonutChart: Y4,
    Drawer: X4,
    Dropzone: Q4,
    Editable: K4,
    FileInput: q4,
    FormControl: Z4,
    Heading: O4,
    HueSlider: Yv,
    Indicator: F4,
    Input: Pr,
    Kbd: W4,
    LineChart: ki,
    Link: H4,
    List: L4,
    Loading: I4,
    Mark: D4,
    Markdown: V4,
    Menu: el,
    Modal: af,
    MonthPicker: B4,
    MultiAutocomplete: N4,
    MultiDatePicker: R4,
    MultiSelect: sf,
    NativeSelect: Ov,
    NumberInput: $4,
    Pagination: M4,
    PagingTable: j4,
    PieChart: Uv,
    PinInput: w4,
    Popover: C4,
    Progress: _4,
    RadarChart: P4,
    Radio: E4,
    RangeDatePicker: z4,
    RangeSlider: T4,
    Rating: A4,
    Reorder: y4,
    Resizable: v4,
    SaturationSlider: x4,
    ScrollArea: b4,
    SegmentedControl: S4,
    Select: of,
    NativeTable: Wv,
    Skeleton: k4,
    Slider: Fv,
    Stat: c4,
    Stepper: d4,
    Switch: f4,
    Table: Hv,
    Tabs: p4,
    Tag: h4,
    Textarea: m4,
    Tooltip: l4,
    YearPicker: u4,
  },
  xE = {
    initialThemeScheme: "base",
    initialColorMode: "light",
    var: { prefix: "ui" },
    breakpoint: "down",
  },
  bE = {
    colors: {
      primary: "blue.500",
      secondary: "violet.500",
      info: "blue.500",
      success: "green.500",
      warning: "orange.500",
      danger: "red.500",
      link: "blue.500",
    },
    colorSchemes: {
      primary: "blue",
      secondary: "violet",
      info: "blue",
      success: "green",
      warning: "orange",
      danger: "red",
      link: "blue",
    },
  },
  SE = {
    styles: {
      globalStyle: o4,
      resetStyle: s4,
      layerStyles: i4,
      textStyles: a4,
    },
    semantics: bE,
    components: vE,
    ...n4,
  },
  kE = xE,
  wE = ({
    theme: e = SE,
    config: t = kE,
    disableResetStyle: r,
    disableGlobalStyle: n,
    colorModeManager: o,
    colorModeStorageKey: i,
    themeSchemeManager: s,
    themeSchemeStorageKey: a,
    environment: l,
    disableEnvironment: u,
    children: c,
  }) => {
    var d;
    return b.jsx(Wk, {
      theme: e,
      config: t,
      themeSchemeManager: s,
      storageKey: a,
      children: b.jsx(Nk, {
        colorModeManager: o,
        storageKey: i,
        config: t,
        children: b.jsx(Ig, {
          environment: l,
          disabled: u,
          children: b.jsx($_, {
            ...((d = t.motion) == null ? void 0 : d.config),
            children: b.jsxs(SP, {
              ...t.loading,
              children: [
                r ? null : b.jsx(Uk, {}),
                n ? null : b.jsx(Gk, {}),
                c,
                b.jsx(BP, { ...t.notice }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  [CE, _E] = Yn({ strict: !1, name: "ButtonGroupContext" });
F(
  (
    {
      className: e,
      size: t,
      variant: r,
      direction: n,
      isAttached: o,
      isDisabled: i,
      gap: s,
      columnGap: a,
      rowGap: l,
      ...u
    },
    c,
  ) => {
    const d = n === "column" || n === "column-reverse",
      f = { display: "inline-flex", flexDirection: n },
      g = S.useMemo(() => ({ size: t, variant: r, isDisabled: i }), [t, r, i]);
    return (
      o
        ? Object.assign(f, {
            "> *:first-of-type:not(:last-of-type)": d
              ? { borderBottomRadius: 0, marginBlockEnd: "-1px" }
              : { borderRightRadius: 0, marginInlineEnd: "-1px" },
            "> *:not(:first-of-type):not(:last-of-type)": d
              ? { borderRadius: 0, marginBlockStart: "-1px" }
              : { borderRadius: 0, marginInlineEnd: "-1px" },
            "> *:not(:first-of-type):last-of-type": d
              ? { borderTopRadius: 0, marginBlockStart: "-1px" }
              : { borderLeftRadius: 0 },
          })
        : Object.assign(f, { gap: s, columnGap: a, rowGap: l }),
      b.jsx(CE, {
        value: g,
        children: b.jsx(U.div, {
          ref: c,
          role: "group",
          className: H("ui-button-group", e),
          "data-attached": ft(o),
          __css: f,
          ...u,
        }),
      })
    );
  },
);
var tu = F(({ children: e, ...t }, r) => {
    const n = _E(),
      [o, i] = Qn("Button", { ...n, ...t }),
      {
        className: s,
        as: a,
        type: l,
        isRounded: u,
        isLoading: c,
        isActive: d,
        isDisabled: f = n == null ? void 0 : n.isDisabled,
        leftIcon: g,
        rightIcon: x,
        loadingIcon: v,
        loadingText: w,
        loadingPlacement: p = "start",
        disableRipple: m,
        __css: y,
        ...k
      } = Zt(i),
      C = f || c,
      { ref: P, type: _ } = PE(a),
      { onPointerDown: z, ...M } = Dv({ ...k, isDisabled: m || C }),
      A = S.useMemo(() => {
        var at;
        const Ke =
          "_focus" in o
            ? ue((at = o._focus) != null ? at : {}, {
                zIndex: "fallback(yamcha, 1)",
              })
            : {};
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "fallback(2, 0.5rem)",
          appearance: "none",
          userSelect: "none",
          position: "relative",
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          overflow: "hidden",
          outline: "none",
          ...o,
          ...y,
          ...(n ? { _focus: Ke } : {}),
          ...(u ? { borderRadius: "fallback(full, 9999px)" } : {}),
        };
      }, [o, y, n, u]),
      G = { leftIcon: g, rightIcon: x, children: e },
      De = { loadingIcon: v, loadingText: w };
    return b.jsxs(U.button, {
      ref: Rg(r, P),
      as: a,
      className: H("ui-button", s),
      type: l ?? _,
      disabled: C,
      "data-active": ft(d),
      "data-loading": ft(c),
      __css: A,
      ...k,
      onPointerDown: z,
      children: [
        c && p === "start"
          ? b.jsx(lm, { className: "ui-button__loading--start", ...De })
          : null,
        c
          ? w || b.jsx(U.span, { opacity: 0, children: b.jsx(um, { ...G }) })
          : b.jsx(um, { ...G }),
        c && p === "end"
          ? b.jsx(lm, { className: "ui-button__loading--end", ...De })
          : null,
        b.jsx(Iv, { isDisabled: m || C, ...M }),
      ],
    });
  }),
  lm = ({ className: e, loadingIcon: t, loadingText: r }) => {
    const n = S.useMemo(
        () => ({
          display: "flex",
          alignItems: "center",
          position: r ? "relative" : "absolute",
          fontSize: "1em",
          lineHeight: "normal",
        }),
        [r],
      ),
      o = S.useMemo(
        () =>
          typeof t == "string"
            ? b.jsx(On, { color: "current", variant: t })
            : t || b.jsx(On, { color: "current" }),
        [t],
      );
    return b.jsx(U.div, {
      className: H("ui-button__loading", e),
      __css: n,
      children: o,
    });
  },
  um = ({ leftIcon: e, rightIcon: t, children: r }) =>
    b.jsxs(b.Fragment, {
      children: [
        e ? b.jsx(cm, { children: e }) : null,
        r,
        t ? b.jsx(cm, { children: t }) : null,
      ],
    }),
  cm = ({ children: e, className: t, ...r }) =>
    b.jsx(U.span, {
      className: H("ui-button__icon", t),
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      "aria-hidden": !0,
      ...r,
      children: e,
    }),
  PE = (e) => {
    const t = S.useRef(!e),
      r = S.useCallback((o) => {
        o && (t.current = o.tagName === "BUTTON");
      }, []),
      n = t.current ? "button" : void 0;
    return { ref: r, type: n };
  },
  [EE, tl] = Yn({ strict: !1, name: "FormControlContext" }),
  [zE, rl] = Yn({ strict: !1, name: "FormControlStyleContext" });
F(({ id: e, ...t }, r) => {
  const [n, o] = Na("FormControl", t),
    {
      className: i,
      isRequired: s = !1,
      isDisabled: a = !1,
      isInvalid: l = !1,
      isReadOnly: u = !1,
      isReplace: c = !0,
      label: d,
      helperMessage: f,
      errorMessage: g,
      children: x,
      requiredIndicator: v,
      optionalIndicator: w,
      ...p
    } = Zt(o);
  e ?? (e = S.useId());
  const [m, y] = S.useState(!1),
    k = wa(x),
    [C] = Rl(k, dm),
    [P] = Rl(k, fm),
    [_] = Rl(k, pm),
    z = !!C,
    M = !!P,
    A = !!_,
    G = { ...n.container };
  return b.jsx(EE, {
    value: {
      id: e,
      isFocused: m,
      isRequired: s,
      isDisabled: a,
      isInvalid: l,
      isReadOnly: u,
      isReplace: c,
      onFocus: () => y(!0),
      onBlur: () => y(!1),
    },
    children: b.jsx(zE, {
      value: n,
      children: b.jsxs(U.div, {
        ref: r,
        className: H("ui-form__control", i),
        role: "group",
        "data-focus": ft(m),
        "data-disabled": ft(a),
        "data-invalid": ft(l),
        "data-readonly": ft(u),
        __css: G,
        ...p,
        children: [
          !z && d
            ? b.jsx(dm, {
                requiredIndicator: v,
                optionalIndicator: w,
                children: d,
              })
            : null,
          x,
          !M && f ? b.jsx(fm, { children: f }) : null,
          !A && g ? b.jsx(pm, { children: g }) : null,
        ],
      }),
    }),
  });
});
var TE = ({
    id: e,
    disabled: t,
    readOnly: r,
    required: n,
    isDisabled: o,
    isReadOnly: i,
    isRequired: s,
    isInvalid: a,
    onFocus: l,
    onBlur: u,
    ...c
  }) => {
    const d = tl();
    return (
      t ?? (t = o ?? (d == null ? void 0 : d.isDisabled)),
      n ?? (n = s ?? (d == null ? void 0 : d.isRequired)),
      r ?? (r = i ?? (d == null ? void 0 : d.isReadOnly)),
      a ?? (a = d == null ? void 0 : d.isInvalid),
      {
        id: e ?? (d == null ? void 0 : d.id),
        disabled: t,
        required: n,
        readOnly: r,
        "aria-disabled": Fi(t),
        "aria-readonly": Fi(r),
        "aria-required": Fi(n),
        "aria-invalid": Fi(a),
        "data-readonly": ft(r),
        onFocus: Hs(d == null ? void 0 : d.onFocus, l),
        onBlur: Hs(d == null ? void 0 : d.onBlur, u),
        ...(t || r
          ? {
              _hover: {},
              _active: {},
              _focus: {},
              _invalid: {},
              _focusVisible: {},
            }
          : {}),
        ...c,
      }
    );
  },
  dm = F(
    (
      {
        className: e,
        htmlFor: t,
        isRequired: r,
        requiredIndicator: n = b.jsx(AE, {}),
        optionalIndicator: o = null,
        children: i,
        ...s
      },
      a,
    ) => {
      var l, u;
      const {
          id: c,
          isRequired: d,
          isFocused: f,
          isDisabled: g,
          isInvalid: x,
          isReadOnly: v,
        } = (l = tl()) != null ? l : {},
        w = (u = rl()) != null ? u : {};
      r ?? (r = d);
      const p = {
        display: "block",
        pointerEvents: v ? "none" : void 0,
        ...w.label,
      };
      return b.jsxs(U.label, {
        ref: a,
        className: H("ui-form__label", e),
        "data-focus": ft(f),
        "data-disabled": ft(g),
        "data-readonly": ft(v),
        "data-invalid": ft(x),
        htmlFor: t ?? c,
        __css: p,
        style: { cursor: g ? "not-allowed" : void 0 },
        ...s,
        children: [i, r ? n : o],
      });
    },
  ),
  AE = F(({ className: e, ...t }, r) => {
    var n;
    const i = { ...((n = rl()) != null ? n : {}).requiredIndicator };
    return b.jsx(U.span, {
      ref: r,
      className: H("ui-form__required-indicator", e),
      role: "presentation",
      "aria-hidden": !0,
      __css: i,
      ...t,
      children: "*",
    });
  }),
  fm = F(({ className: e, ...t }, r) => {
    var n, o;
    const { isInvalid: i, isReplace: s } = (n = tl()) != null ? n : {},
      a = (o = rl()) != null ? o : {};
    if (s && i) return null;
    const l = { ...a.helperMessage };
    return b.jsx(U.div, {
      ref: r,
      className: H("ui-form__helper-message", e),
      __css: l,
      ...t,
    });
  }),
  pm = F(({ className: e, ...t }, r) => {
    var n, o;
    const { isInvalid: i } = (n = tl()) != null ? n : {},
      s = (o = rl()) != null ? o : {};
    if (!i) return null;
    const a = { ...s.errorMessage };
    return b.jsx(U.div, {
      ref: r,
      className: H("ui-form__error-message", e),
      "aria-live": "polite",
      __css: a,
      ...t,
    });
  }),
  Xv = F(
    (
      {
        direction: e = "column",
        justify: t,
        align: r,
        wrap: n,
        gap: o = "fallback(md, 1rem)",
        divider: i,
        className: s,
        children: a,
        ...l
      },
      u,
    ) => {
      const c = (v) => v === "column" || v === "column-reverse",
        d = S.useMemo(
          () => ({
            w: po(e, (v) => (c(v) ? "100%" : "fix-content")),
            h: po(e, (v) => (c(v) ? "fix-content" : "100%")),
            borderLeftWidth: po(e, (v) => (c(v) ? 0 : "1px")),
            borderBottomWidth: po(e, (v) => (c(v) ? "1px" : 0)),
          }),
          [e],
        ),
        f = wa(a),
        g = i
          ? f.map((v, w) => {
              const p = typeof v.key < "u" ? v.key : w,
                m = S.cloneElement(i, { __css: d });
              return b.jsxs(S.Fragment, { children: [w ? m : null, v] }, p);
            })
          : f,
        x = S.useMemo(
          () => ({
            display: "flex",
            flexDirection: e,
            justifyContent: t,
            alignItems: r,
            flexWrap: n,
            gap: o,
          }),
          [r, e, n, o, t],
        );
      return b.jsx(U.div, {
        ref: u,
        className: H("ui-stack", s),
        __css: x,
        ...l,
        children: g,
      });
    },
  ),
  hm = F(({ className: e, ...t }, r) =>
    b.jsx(Xv, {
      ref: r,
      className: H("ui-stack--horizontal", e),
      direction: "row",
      align: "center",
      ...t,
    }),
  );
F(({ className: e, ...t }, r) =>
  b.jsx(Xv, {
    ref: r,
    className: H("ui-stack--vertical", e),
    direction: "column",
    align: "stretch",
    w: "100%",
    ...t,
  }),
);
F(
  (
    {
      className: e,
      direction: t = "bottom",
      startIndex: r = 0,
      gap: n = "fallback(md, 1rem)",
      reverse: o = !1,
      fit: i = !0,
      children: s,
      ...a
    },
    l,
  ) => {
    const u = S.useRef(new Map()),
      [c, d] = S.useState({ width: 0, height: 0 }),
      f = { minWidth: `${c.width}px`, minHeight: `${c.height}px` },
      g = {
        position: "relative",
        overflow: "hidden",
        var: [{ __prefix: "ui", name: "space", token: "spaces", value: n }],
        ...(i ? f : {}),
      },
      x = S.useCallback(
        (p) =>
          t.includes("top")
            ? { [o ? "top" : "bottom"]: p }
            : t.includes("bottom")
              ? { [o ? "bottom" : "top"]: p }
              : { [o ? "bottom" : "top"]: 0 },
        [t, o],
      ),
      v = S.useCallback(
        (p) =>
          t.includes("left")
            ? { [o ? "left" : "right"]: p }
            : t.includes("right")
              ? { [o ? "right" : "left"]: p }
              : { [o ? "right" : "left"]: 0 },
        [t, o],
      ),
      w = S.useMemo(
        () =>
          wa(s).map((y, k) => {
            var C;
            const P = S.createRef();
            u.current.set(k, P);
            const _ = (C = y.key) != null ? C : k,
              z = r + k,
              M = `calc(var(--ui-space) * ${k})`;
            let A = {};
            (A = { ...A, position: "absolute", zIndex: z }),
              (A = { ...A, ...x(M) }),
              (A = { ...A, ...v(M) });
            const G = { ...y.props, ref: Rg(y.ref, P), __css: A },
              De = S.cloneElement(y, G);
            return b.jsx(S.Fragment, { children: De }, _);
          }),
        [s, r, x, v],
      );
    return (
      S.useEffect(() => {
        if (!i) return;
        let p = t.includes("left"),
          m = t.includes("top"),
          y = 0,
          k = 0;
        o && ((p = !p), (m = !m));
        for (const C of u.current.values()) {
          if (!C.current) continue;
          let {
            offsetParent: P,
            offsetWidth: _,
            offsetHeight: z,
            offsetTop: M,
            offsetLeft: A,
          } = C.current;
          P &&
            (p && (A = P.offsetWidth - A - _),
            m && (M = P.offsetHeight - M - z),
            (_ += A),
            (z += M),
            _ > y && (y = _),
            z > k && (k = z));
        }
        d({ width: y, height: k });
      }, [w, t, o, i]),
      b.jsx(U.div, {
        ref: l,
        className: H("ui-stack--depth", e),
        __css: g,
        ...a,
        children: w,
      })
    );
  },
);
var RE = F((e, t) => {
    const [r, n] = Qn("Container", e),
      { className: o, centerContent: i, ...s } = Zt(n),
      a = S.useMemo(
        () => ({ alignItems: i ? "center" : void 0, ...r }),
        [i, r],
      );
    return b.jsx(U.section, {
      ref: t,
      className: H("ui-container", o),
      __css: a,
      ...s,
    });
  }),
  $E = F((e, t) => {
    const [r, n] = Qn("Heading", e),
      { className: o, ...i } = Zt(n);
    return b.jsx(U.h1, {
      ref: t,
      className: H("ui-heading", o),
      __css: r,
      ...i,
    });
  }),
  mm = F((e, t) => {
    const [r, n] = Qn("Text", e),
      { className: o, align: i, decoration: s, casing: a, ...l } = Zt(n),
      u = Ca({ textAlign: i, textDecoration: s, textTransform: a });
    return b.jsx(U.p, {
      ref: t,
      className: H("ui-text", o),
      __css: r,
      ...u,
      ...l,
    });
  }),
  ME = F((e, t) => {
    const [r, n] = Na("Input", e);
    let { className: o, htmlSize: i, __css: s, ...a } = Zt(n);
    a = TE(a);
    const l = { ...r.field, ...s };
    return b.jsx(U.input, {
      ref: t,
      className: H("ui-input", o),
      size: i,
      __css: l,
      ...a,
    });
  }),
  [jE, Qv] = Yn({
    name: "ListContext",
    errorMessage: `useList returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  lf = F((e, t) => {
    const [r, n] = Na("List", e),
      {
        className: o,
        children: i,
        styleType: s = "none",
        stylePosition: a,
        gap: l = "fallback(2, 0.5rem)",
        ...u
      } = Zt(n),
      c = wa(i),
      d = {
        display: "flex",
        flexDirection: "column",
        gap: l,
        ms: s !== "none" ? "1.4em" : void 0,
        "& > li": { ps: s === "decimal" ? "0.3em" : void 0 },
        ...r.container,
      };
    return b.jsx(jE, {
      value: r,
      children: b.jsx(U.ul, {
        ref: t,
        listStyleType: s,
        listStylePosition: a,
        role: "list",
        className: H("ui-list", o),
        __css: d,
        ...u,
        children: c,
      }),
    });
  });
F(({ ...e }, t) => b.jsx(lf, { ref: t, as: "ul", styleType: "disc", ...e }));
F(({ ...e }, t) =>
  b.jsx(lf, { ref: t, as: "ol", styleType: "decimal", ms: "1.2em", ...e }),
);
var LE = F(({ className: e, ...t }, r) => {
  const o = { ...Qv().item };
  return b.jsx(U.li, {
    ref: r,
    className: H("ui-list-item", e),
    __css: o,
    ...t,
  });
});
F(({ className: e, ...t }, r) => {
  const o = { ...Qv().icon };
  return b.jsx(gt, {
    ref: r,
    className: H("ui-list-icon", e),
    role: "presentation",
    __css: o,
    ...t,
  });
});
const IE = "todoDB",
  Vt = "todos",
  DE = 1,
  nl = () =>
    new Promise((e, t) => {
      const r = indexedDB.open(IE, DE);
      (r.onupgradeneeded = function () {
        const n = this.result;
        n.objectStoreNames.contains(Vt) ||
          n.createObjectStore(Vt, { keyPath: "id", autoIncrement: !0 });
      }),
        (r.onsuccess = (n) => {
          const o = n.target.result;
          e(o);
        }),
        (r.onerror = (n) => {
          t(n.target.error);
        });
    }),
  VE = async (e) => {
    (await nl()).transaction(Vt, "readwrite").objectStore(Vt).add(e);
  },
  BE = async () => {
    const n = (await nl()).transaction(Vt, "readonly").objectStore(Vt).getAll();
    return new Promise((o, i) => {
      (n.onsuccess = (s) => {
        o(s.target.result);
      }),
        (n.onerror = (s) => {
          i(s.target.error);
        });
    });
  },
  NE = async (e) => {
    (await nl()).transaction(Vt, "readwrite").objectStore(Vt).delete(e);
  },
  OE = async () => {
    (await nl()).transaction(Vt, "readwrite").objectStore(Vt).clear();
  };
function FE() {
  const [e, t] = S.useState(""),
    [r, n] = S.useState([]),
    o = (u) => t(u.currentTarget.value),
    i = async () => {
      e !== "" && (await VE({ name: e }), await l(), t(""));
    },
    s = async (u) => {
      u !== 0 && (await NE(u), n((c) => c.filter((d) => d.id !== u)));
    },
    a = async () => {
      await OE(), n([]);
    },
    l = async () => {
      const u = await BE();
      n(u);
    };
  return (
    S.useEffect(() => {
      l();
    }, []),
    b.jsx(b.Fragment, {
      children: b.jsxs(RE, {
        maxW: "2xl",
        m: "auto",
        children: [
          b.jsx($E, { children: "Todo App" }),
          b.jsxs(hm, {
            gap: 0,
            children: [
              b.jsx(ME, {
                type: "text",
                placeholder: "Enter your todo.",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                value: e,
                onChange: o,
              }),
              b.jsx(tu, {
                colorScheme: "primary",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                onClick: i,
                children: "Add",
              }),
              b.jsx(tu, {
                colorScheme: "danger",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                onClick: a,
                children: "All Clear",
              }),
            ],
          }),
          r.length === 0
            ? b.jsx(mm, { children: "No todo." })
            : b.jsx(lf, {
                children: r.map((u, c) =>
                  b.jsxs(
                    LE,
                    {
                      as: hm,
                      justifyContent: "space-between",
                      children: [
                        b.jsx(mm, { children: u.name }),
                        b.jsx(tu, {
                          variant: "outline",
                          colorScheme: "danger",
                          onClick: () => s(u.id || 0),
                          children: "Delete",
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
        ],
      }),
    })
  );
}
ru.createRoot(document.getElementById("root")).render(
  b.jsx(sa.StrictMode, { children: b.jsx(wE, { children: b.jsx(FE, {}) }) }),
);
