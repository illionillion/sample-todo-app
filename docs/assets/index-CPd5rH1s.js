function p1(e, t) {
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
function $m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Mm = { exports: {} },
  ba = {},
  jm = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
  h1 = Symbol.for("react.portal"),
  m1 = Symbol.for("react.fragment"),
  g1 = Symbol.for("react.strict_mode"),
  y1 = Symbol.for("react.profiler"),
  v1 = Symbol.for("react.provider"),
  x1 = Symbol.for("react.context"),
  b1 = Symbol.for("react.forward_ref"),
  S1 = Symbol.for("react.suspense"),
  k1 = Symbol.for("react.memo"),
  w1 = Symbol.for("react.lazy"),
  wf = Symbol.iterator;
function C1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wf && e[wf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Im = Object.assign,
  Dm = {};
function eo(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dm),
    (this.updater = r || Lm);
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vm() {}
Vm.prototype = eo.prototype;
function Ic(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dm),
    (this.updater = r || Lm);
}
var Dc = (Ic.prototype = new Vm());
Dc.constructor = Ic;
Im(Dc, eo.prototype);
Dc.isPureReactComponent = !0;
var Cf = Array.isArray,
  Bm = Object.prototype.hasOwnProperty,
  Vc = { current: null },
  Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Om(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Bm.call(t, n) && !Nm.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: xi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Vc.current,
  };
}
function _1(e, t) {
  return {
    $$typeof: xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function P1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var _f = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? P1("" + e.key)
    : t.toString(36);
}
function hs(e, t, r, n, o) {
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
          case xi:
          case h1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = n === "" ? "." + ml(s, 0) : n),
      Cf(o)
        ? ((r = ""),
          e != null && (r = e.replace(_f, "$&/") + "/"),
          hs(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (Bc(o) &&
            (o = _1(
              o,
              r +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(_f, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), Cf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = n + ml(i, a);
      s += hs(i, t, r, l, o);
    }
  else if (((l = C1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + ml(i, a++)), (s += hs(i, t, r, l, o));
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
function Ni(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    hs(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function E1(e) {
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
var Ye = { current: null },
  ms = { transition: null },
  z1 = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: ms,
    ReactCurrentOwner: Vc,
  };
function Fm() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Ni,
  forEach: function (e, t, r) {
    Ni(
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
      Ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = eo;
F.Fragment = m1;
F.Profiler = y1;
F.PureComponent = Ic;
F.StrictMode = g1;
F.Suspense = S1;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z1;
F.act = Fm;
F.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = Im({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Vc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Bm.call(t, l) &&
        !Nm.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: xi, type: e.type, key: o, ref: i, props: n, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: x1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: v1, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Om;
F.createFactory = function (e) {
  var t = Om.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: b1, render: e };
};
F.isValidElement = Bc;
F.lazy = function (e) {
  return { $$typeof: w1, _payload: { _status: -1, _result: e }, _init: E1 };
};
F.memo = function (e, t) {
  return { $$typeof: k1, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ms.transition;
  ms.transition = {};
  try {
    e();
  } finally {
    ms.transition = t;
  }
};
F.unstable_act = Fm;
F.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ye.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
F.useId = function () {
  return Ye.current.useId();
};
F.useImperativeHandle = function (e, t, r) {
  return Ye.current.useImperativeHandle(e, t, r);
};
F.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
F.useReducer = function (e, t, r) {
  return Ye.current.useReducer(e, t, r);
};
F.useRef = function (e) {
  return Ye.current.useRef(e);
};
F.useState = function (e) {
  return Ye.current.useState(e);
};
F.useSyncExternalStore = function (e, t, r) {
  return Ye.current.useSyncExternalStore(e, t, r);
};
F.useTransition = function () {
  return Ye.current.useTransition();
};
F.version = "18.3.1";
jm.exports = F;
var S = jm.exports;
const Sa = $m(S),
  Pf = p1({ __proto__: null, default: Sa }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var T1 = S,
  A1 = Symbol.for("react.element"),
  R1 = Symbol.for("react.fragment"),
  $1 = Object.prototype.hasOwnProperty,
  M1 = T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  j1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wm(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) $1.call(t, n) && !j1.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: A1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: M1.current,
  };
}
ba.Fragment = R1;
ba.jsx = Wm;
ba.jsxs = Wm;
Mm.exports = ba;
var b = Mm.exports,
  fu = {},
  Hm = { exports: {} },
  ct = {},
  Um = { exports: {} },
  Gm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, V) {
    var N = $.length;
    $.push(V);
    e: for (; 0 < N; ) {
      var se = (N - 1) >>> 1,
        me = $[se];
      if (0 < o(me, V)) ($[se] = V), ($[N] = me), (N = se);
      else break e;
    }
  }
  function r($) {
    return $.length === 0 ? null : $[0];
  }
  function n($) {
    if ($.length === 0) return null;
    var V = $[0],
      N = $.pop();
    if (N !== V) {
      $[0] = N;
      e: for (var se = 0, me = $.length, ln = me >>> 1; se < ln; ) {
        var Wt = 2 * (se + 1) - 1,
          so = $[Wt],
          Ht = Wt + 1,
          H = $[Ht];
        if (0 > o(so, N))
          Ht < me && 0 > o(H, so)
            ? (($[se] = H), ($[Ht] = N), (se = Ht))
            : (($[se] = so), ($[Wt] = N), (se = Wt));
        else if (Ht < me && 0 > o(H, N)) ($[se] = H), ($[Ht] = N), (se = Ht);
        else break e;
      }
    }
    return V;
  }
  function o($, V) {
    var N = $.sortIndex - V.sortIndex;
    return N !== 0 ? N : $.id - V.id;
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
    h = !1,
    x = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y($) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u);
      else if (V.startTime <= $)
        n(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = r(u);
    }
  }
  function k($) {
    if (((v = !1), y($), !x))
      if (r(l) !== null) (x = !0), re(C);
      else {
        var V = r(u);
        V !== null && ne(k, V.startTime - $);
      }
  }
  function C($, V) {
    (x = !1), v && ((v = !1), p(E), (E = -1)), (h = !0);
    var N = f;
    try {
      for (
        y(V), d = r(l);
        d !== null && (!(d.expirationTime > V) || ($ && !B()));

      ) {
        var se = d.callback;
        if (typeof se == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var me = se(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof me == "function" ? (d.callback = me) : d === r(l) && n(l),
            y(V);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var ln = !0;
      else {
        var Wt = r(u);
        Wt !== null && ne(k, Wt.startTime - V), (ln = !1);
      }
      return ln;
    } finally {
      (d = null), (f = N), (h = !1);
    }
  }
  var _ = !1,
    P = null,
    E = -1,
    R = 5,
    T = -1;
  function B() {
    return !(e.unstable_now() - T < R);
  }
  function xe() {
    if (P !== null) {
      var $ = e.unstable_now();
      T = $;
      var V = !0;
      try {
        V = P(!0, $);
      } finally {
        V ? Ie() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var Ie;
  if (typeof g == "function")
    Ie = function () {
      g(xe);
    };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(),
      te = Re.port2;
    (Re.port1.onmessage = xe),
      (Ie = function () {
        te.postMessage(null);
      });
  } else
    Ie = function () {
      w(xe, 0);
    };
  function re($) {
    (P = $), _ || ((_ = !0), Ie());
  }
  function ne($, V) {
    E = w(function () {
      $(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), re(C));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var N = f;
      f = V;
      try {
        return $();
      } finally {
        f = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, V) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var N = f;
      f = $;
      try {
        return V();
      } finally {
        f = N;
      }
    }),
    (e.unstable_scheduleCallback = function ($, V, N) {
      var se = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? se + N : se))
          : (N = se),
        $)
      ) {
        case 1:
          var me = -1;
          break;
        case 2:
          me = 250;
          break;
        case 5:
          me = 1073741823;
          break;
        case 4:
          me = 1e4;
          break;
        default:
          me = 5e3;
      }
      return (
        (me = N + me),
        ($ = {
          id: c++,
          callback: V,
          priorityLevel: $,
          startTime: N,
          expirationTime: me,
          sortIndex: -1,
        }),
        N > se
          ? (($.sortIndex = N),
            t(u, $),
            r(l) === null &&
              $ === r(u) &&
              (v ? (p(E), (E = -1)) : (v = !0), ne(k, N - se)))
          : (($.sortIndex = me), t(l, $), x || h || ((x = !0), re(C))),
        $
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function ($) {
      var V = f;
      return function () {
        var N = f;
        f = V;
        try {
          return $.apply(this, arguments);
        } finally {
          f = N;
        }
      };
    });
})(Gm);
Um.exports = Gm;
var L1 = Um.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I1 = S,
  lt = L1;
function z(e) {
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
var Ym = new Set(),
  Ho = {};
function rn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (Ho[e] = t, e = 0; e < t.length; e++) Ym.add(t[e]);
}
var Jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pu = Object.prototype.hasOwnProperty,
  D1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ef = {},
  zf = {};
function V1(e) {
  return pu.call(zf, e)
    ? !0
    : pu.call(Ef, e)
      ? !1
      : D1.test(e)
        ? (zf[e] = !0)
        : ((Ef[e] = !0), !1);
}
function B1(e, t, r, n) {
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
function N1(e, t, r, n) {
  if (t === null || typeof t > "u" || B1(e, t, r, n)) return !0;
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
function Xe(e, t, r, n, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nc = /[\-:]([a-z])/g;
function Oc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Oc);
    Le[t] = new Xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Oc);
    Le[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nc, Oc);
  Le[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fc(e, t, r, n) {
  var o = Le.hasOwnProperty(t) ? Le[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (N1(t, r, o, n) && (r = null),
    n || o === null
      ? V1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
var nr = I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oi = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  Wc = Symbol.for("react.strict_mode"),
  hu = Symbol.for("react.profiler"),
  Xm = Symbol.for("react.provider"),
  Km = Symbol.for("react.context"),
  Hc = Symbol.for("react.forward_ref"),
  mu = Symbol.for("react.suspense"),
  gu = Symbol.for("react.suspense_list"),
  Uc = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  Qm = Symbol.for("react.offscreen"),
  Tf = Symbol.iterator;
function ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tf && e[Tf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  gl;
function xo(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var yl = !1;
function vl(e, t) {
  if (!e || yl) return "";
  yl = !0;
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
    (yl = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? xo(e) : "";
}
function O1(e) {
  switch (e.tag) {
    case 5:
      return xo(e.type);
    case 16:
      return xo("Lazy");
    case 13:
      return xo("Suspense");
    case 19:
      return xo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return "";
  }
}
function yu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case yn:
      return "Portal";
    case hu:
      return "Profiler";
    case Wc:
      return "StrictMode";
    case mu:
      return "Suspense";
    case gu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Km:
        return (e.displayName || "Context") + ".Consumer";
      case Xm:
        return (e._context.displayName || "Context") + ".Provider";
      case Hc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Uc:
        return (
          (t = e.displayName || null), t !== null ? t : yu(e.type) || "Memo"
        );
      case sr:
        (t = e._payload), (e = e._init);
        try {
          return yu(e(t));
        } catch {}
    }
  return null;
}
function F1(e) {
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
      return yu(t);
    case 8:
      return t === Wc ? "StrictMode" : "Mode";
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
function wr(e) {
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
function qm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function W1(e) {
  var t = qm(e) ? "checked" : "value",
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
function Fi(e) {
  e._valueTracker || (e._valueTracker = W1(e));
}
function Zm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = qm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Ls(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vu(e, t) {
  var r = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = wr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Jm(e, t) {
  (t = t.checked), t != null && Fc(e, "checked", t, !1);
}
function xu(e, t) {
  Jm(e, t);
  var r = wr(t.value),
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
    ? bu(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && bu(e, t.type, wr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rf(e, t, r) {
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
function bu(e, t, r) {
  (t !== "number" || Ls(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var bo = Array.isArray;
function $n(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + wr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Su(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $f(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (bo(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: wr(r) };
}
function e0(e, t) {
  var r = wr(t.value),
    n = wr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Mf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function t0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ku(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? t0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Wi,
  r0 = (function (e) {
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
        Wi = Wi || document.createElement("div"),
          Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Uo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Po = {
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
  H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function (e) {
  H1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Po[t] = Po[e]);
  });
});
function n0(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Po.hasOwnProperty(e) && Po[e])
      ? ("" + t).trim()
      : t + "px";
}
function o0(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = n0(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var U1 = fe(
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
function wu(e, t) {
  if (t) {
    if (U1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Cu(e, t) {
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
var _u = null;
function Gc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pu = null,
  Mn = null,
  jn = null;
function jf(e) {
  if ((e = ki(e))) {
    if (typeof Pu != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = Pa(t)), Pu(e.stateNode, e.type, t));
  }
}
function i0(e) {
  Mn ? (jn ? jn.push(e) : (jn = [e])) : (Mn = e);
}
function s0() {
  if (Mn) {
    var e = Mn,
      t = jn;
    if (((jn = Mn = null), jf(e), t)) for (e = 0; e < t.length; e++) jf(t[e]);
  }
}
function a0(e, t) {
  return e(t);
}
function l0() {}
var xl = !1;
function u0(e, t, r) {
  if (xl) return e(t, r);
  xl = !0;
  try {
    return a0(e, t, r);
  } finally {
    (xl = !1), (Mn !== null || jn !== null) && (l0(), s0());
  }
}
function Go(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Pa(r);
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
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var Eu = !1;
if (Jt)
  try {
    var lo = {};
    Object.defineProperty(lo, "passive", {
      get: function () {
        Eu = !0;
      },
    }),
      window.addEventListener("test", lo, lo),
      window.removeEventListener("test", lo, lo);
  } catch {
    Eu = !1;
  }
function G1(e, t, r, n, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Eo = !1,
  Is = null,
  Ds = !1,
  zu = null,
  Y1 = {
    onError: function (e) {
      (Eo = !0), (Is = e);
    },
  };
function X1(e, t, r, n, o, i, s, a, l) {
  (Eo = !1), (Is = null), G1.apply(Y1, arguments);
}
function K1(e, t, r, n, o, i, s, a, l) {
  if ((X1.apply(this, arguments), Eo)) {
    if (Eo) {
      var u = Is;
      (Eo = !1), (Is = null);
    } else throw Error(z(198));
    Ds || ((Ds = !0), (zu = u));
  }
}
function nn(e) {
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
function c0(e) {
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
function Lf(e) {
  if (nn(e) !== e) throw Error(z(188));
}
function Q1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nn(e)), t === null)) throw Error(z(188));
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
        if (i === r) return Lf(o), e;
        if (i === n) return Lf(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
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
        if (!s) throw Error(z(189));
      }
    }
    if (r.alternate !== n) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}
function d0(e) {
  return (e = Q1(e)), e !== null ? f0(e) : null;
}
function f0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = f0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var p0 = lt.unstable_scheduleCallback,
  If = lt.unstable_cancelCallback,
  q1 = lt.unstable_shouldYield,
  Z1 = lt.unstable_requestPaint,
  ge = lt.unstable_now,
  J1 = lt.unstable_getCurrentPriorityLevel,
  Yc = lt.unstable_ImmediatePriority,
  h0 = lt.unstable_UserBlockingPriority,
  Vs = lt.unstable_NormalPriority,
  ex = lt.unstable_LowPriority,
  m0 = lt.unstable_IdlePriority,
  ka = null,
  Vt = null;
function tx(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : ox,
  rx = Math.log,
  nx = Math.LN2;
function ox(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rx(e) / nx) | 0)) | 0;
}
var Hi = 64,
  Ui = 4194304;
function So(e) {
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
function Bs(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (n = So(a)) : ((i &= s), i !== 0 && (n = So(i)));
  } else (s = r & ~o), s !== 0 ? (n = So(s)) : i !== 0 && (n = So(i));
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
      (r = 31 - Et(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function ix(e, t) {
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
function sx(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Et(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & r) || a & n) && (o[s] = ix(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Tu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function g0() {
  var e = Hi;
  return (Hi <<= 1), !(Hi & 4194240) && (Hi = 64), e;
}
function bl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function bi(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = r);
}
function ax(e, t) {
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
    var o = 31 - Et(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function Xc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Et(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var Q = 0;
function y0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var v0,
  Kc,
  x0,
  b0,
  S0,
  Au = !1,
  Gi = [],
  pr = null,
  hr = null,
  mr = null,
  Yo = new Map(),
  Xo = new Map(),
  ur = [],
  lx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Df(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pr = null;
      break;
    case "dragenter":
    case "dragleave":
      hr = null;
      break;
    case "mouseover":
    case "mouseout":
      mr = null;
      break;
    case "pointerover":
    case "pointerout":
      Yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xo.delete(t.pointerId);
  }
}
function uo(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ki(t)), t !== null && Kc(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ux(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (pr = uo(pr, e, t, r, n, o)), !0;
    case "dragenter":
      return (hr = uo(hr, e, t, r, n, o)), !0;
    case "mouseover":
      return (mr = uo(mr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Yo.set(i, uo(Yo.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Xo.set(i, uo(Xo.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function k0(e) {
  var t = Br(e.target);
  if (t !== null) {
    var r = nn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = c0(r)), t !== null)) {
          (e.blockedOn = t),
            S0(e.priority, function () {
              x0(r);
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
function gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (_u = n), r.target.dispatchEvent(n), (_u = null);
    } else return (t = ki(r)), t !== null && Kc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Vf(e, t, r) {
  gs(e) && r.delete(t);
}
function cx() {
  (Au = !1),
    pr !== null && gs(pr) && (pr = null),
    hr !== null && gs(hr) && (hr = null),
    mr !== null && gs(mr) && (mr = null),
    Yo.forEach(Vf),
    Xo.forEach(Vf);
}
function co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Au ||
      ((Au = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, cx)));
}
function Ko(e) {
  function t(o) {
    return co(o, e);
  }
  if (0 < Gi.length) {
    co(Gi[0], e);
    for (var r = 1; r < Gi.length; r++) {
      var n = Gi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    pr !== null && co(pr, e),
      hr !== null && co(hr, e),
      mr !== null && co(mr, e),
      Yo.forEach(t),
      Xo.forEach(t),
      r = 0;
    r < ur.length;
    r++
  )
    (n = ur[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < ur.length && ((r = ur[0]), r.blockedOn === null); )
    k0(r), r.blockedOn === null && ur.shift();
}
var Ln = nr.ReactCurrentBatchConfig,
  Ns = !0;
function dx(e, t, r, n) {
  var o = Q,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (Q = 1), Qc(e, t, r, n);
  } finally {
    (Q = o), (Ln.transition = i);
  }
}
function fx(e, t, r, n) {
  var o = Q,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (Q = 4), Qc(e, t, r, n);
  } finally {
    (Q = o), (Ln.transition = i);
  }
}
function Qc(e, t, r, n) {
  if (Ns) {
    var o = Ru(e, t, r, n);
    if (o === null) Al(e, t, n, Os, r), Df(e, n);
    else if (ux(o, e, t, r, n)) n.stopPropagation();
    else if ((Df(e, n), t & 4 && -1 < lx.indexOf(e))) {
      for (; o !== null; ) {
        var i = ki(o);
        if (
          (i !== null && v0(i),
          (i = Ru(e, t, r, n)),
          i === null && Al(e, t, n, Os, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else Al(e, t, n, null, r);
  }
}
var Os = null;
function Ru(e, t, r, n) {
  if (((Os = null), (e = Gc(n)), (e = Br(e)), e !== null))
    if (((t = nn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = c0(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Os = e), null;
}
function w0(e) {
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
      switch (J1()) {
        case Yc:
          return 1;
        case h0:
          return 4;
        case Vs:
        case ex:
          return 16;
        case m0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dr = null,
  qc = null,
  ys = null;
function C0() {
  if (ys) return ys;
  var e,
    t = qc,
    r = t.length,
    n,
    o = "value" in dr ? dr.value : dr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === o[i - n]; n++);
  return (ys = o.slice(e, 1 < n ? 1 - n : void 0));
}
function vs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yi() {
  return !0;
}
function Bf() {
  return !1;
}
function dt(e) {
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
        ? Yi
        : Bf),
      (this.isPropagationStopped = Bf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Yi));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Yi));
      },
      persist: function () {},
      isPersistent: Yi,
    }),
    t
  );
}
var to = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zc = dt(to),
  Si = fe({}, to, { view: 0, detail: 0 }),
  px = dt(Si),
  Sl,
  kl,
  fo,
  wa = fe({}, Si, {
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
    getModifierState: Jc,
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
        : (e !== fo &&
            (fo && e.type === "mousemove"
              ? ((Sl = e.screenX - fo.screenX), (kl = e.screenY - fo.screenY))
              : (kl = Sl = 0),
            (fo = e)),
          Sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : kl;
    },
  }),
  Nf = dt(wa),
  hx = fe({}, wa, { dataTransfer: 0 }),
  mx = dt(hx),
  gx = fe({}, Si, { relatedTarget: 0 }),
  wl = dt(gx),
  yx = fe({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vx = dt(yx),
  xx = fe({}, to, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bx = dt(xx),
  Sx = fe({}, to, { data: 0 }),
  Of = dt(Sx),
  kx = {
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
  wx = {
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
  Cx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _x(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cx[e]) ? !!t[e] : !1;
}
function Jc() {
  return _x;
}
var Px = fe({}, Si, {
    key: function (e) {
      if (e.key) {
        var t = kx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? wx[e.keyCode] || "Unidentified"
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
    getModifierState: Jc,
    charCode: function (e) {
      return e.type === "keypress" ? vs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Ex = dt(Px),
  zx = fe({}, wa, {
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
  Ff = dt(zx),
  Tx = fe({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jc,
  }),
  Ax = dt(Tx),
  Rx = fe({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $x = dt(Rx),
  Mx = fe({}, wa, {
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
  jx = dt(Mx),
  Lx = [9, 13, 27, 32],
  ed = Jt && "CompositionEvent" in window,
  zo = null;
Jt && "documentMode" in document && (zo = document.documentMode);
var Ix = Jt && "TextEvent" in window && !zo,
  _0 = Jt && (!ed || (zo && 8 < zo && 11 >= zo)),
  Wf = " ",
  Hf = !1;
function P0(e, t) {
  switch (e) {
    case "keyup":
      return Lx.indexOf(t.keyCode) !== -1;
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
function E0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function Dx(e, t) {
  switch (e) {
    case "compositionend":
      return E0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hf = !0), Wf);
    case "textInput":
      return (e = t.data), e === Wf && Hf ? null : e;
    default:
      return null;
  }
}
function Vx(e, t) {
  if (xn)
    return e === "compositionend" || (!ed && P0(e, t))
      ? ((e = C0()), (ys = qc = dr = null), (xn = !1), e)
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
      return _0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bx = {
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
function Uf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bx[e.type] : t === "textarea";
}
function z0(e, t, r, n) {
  i0(n),
    (t = Fs(t, "onChange")),
    0 < t.length &&
      ((r = new Zc("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var To = null,
  Qo = null;
function Nx(e) {
  B0(e, 0);
}
function Ca(e) {
  var t = kn(e);
  if (Zm(t)) return e;
}
function Ox(e, t) {
  if (e === "change") return t;
}
var T0 = !1;
if (Jt) {
  var Cl;
  if (Jt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Gf = document.createElement("div");
      Gf.setAttribute("oninput", "return;"),
        (_l = typeof Gf.oninput == "function");
    }
    Cl = _l;
  } else Cl = !1;
  T0 = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Yf() {
  To && (To.detachEvent("onpropertychange", A0), (Qo = To = null));
}
function A0(e) {
  if (e.propertyName === "value" && Ca(Qo)) {
    var t = [];
    z0(t, Qo, e, Gc(e)), u0(Nx, t);
  }
}
function Fx(e, t, r) {
  e === "focusin"
    ? (Yf(), (To = t), (Qo = r), To.attachEvent("onpropertychange", A0))
    : e === "focusout" && Yf();
}
function Wx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ca(Qo);
}
function Hx(e, t) {
  if (e === "click") return Ca(t);
}
function Ux(e, t) {
  if (e === "input" || e === "change") return Ca(t);
}
function Gx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == "function" ? Object.is : Gx;
function qo(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!pu.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Xf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kf(e, t) {
  var r = Xf(e);
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
    r = Xf(r);
  }
}
function R0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? R0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $0() {
  for (var e = window, t = Ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ls(e.document);
  }
  return t;
}
function td(e) {
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
function Yx(e) {
  var t = $0(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    R0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && td(r)) {
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
          (o = Kf(r, i));
        var s = Kf(r, n);
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
var Xx = Jt && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  $u = null,
  Ao = null,
  Mu = !1;
function Qf(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Mu ||
    bn == null ||
    bn !== Ls(n) ||
    ((n = bn),
    "selectionStart" in n && td(n)
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
    (Ao && qo(Ao, n)) ||
      ((Ao = n),
      (n = Fs($u, "onSelect")),
      0 < n.length &&
        ((t = new Zc("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = bn))));
}
function Xi(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Sn = {
    animationend: Xi("Animation", "AnimationEnd"),
    animationiteration: Xi("Animation", "AnimationIteration"),
    animationstart: Xi("Animation", "AnimationStart"),
    transitionend: Xi("Transition", "TransitionEnd"),
  },
  Pl = {},
  M0 = {};
Jt &&
  ((M0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sn.animationend.animation,
    delete Sn.animationiteration.animation,
    delete Sn.animationstart.animation),
  "TransitionEvent" in window || delete Sn.transitionend.transition);
function _a(e) {
  if (Pl[e]) return Pl[e];
  if (!Sn[e]) return e;
  var t = Sn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in M0) return (Pl[e] = t[r]);
  return e;
}
var j0 = _a("animationend"),
  L0 = _a("animationiteration"),
  I0 = _a("animationstart"),
  D0 = _a("transitionend"),
  V0 = new Map(),
  qf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zr(e, t) {
  V0.set(e, t), rn(t, [e]);
}
for (var El = 0; El < qf.length; El++) {
  var zl = qf[El],
    Kx = zl.toLowerCase(),
    Qx = zl[0].toUpperCase() + zl.slice(1);
  zr(Kx, "on" + Qx);
}
zr(j0, "onAnimationEnd");
zr(L0, "onAnimationIteration");
zr(I0, "onAnimationStart");
zr("dblclick", "onDoubleClick");
zr("focusin", "onFocus");
zr("focusout", "onBlur");
zr(D0, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ko =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  qx = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));
function Zf(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), K1(n, t, void 0, e), (e.currentTarget = null);
}
function B0(e, t) {
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
          Zf(o, a, u), (i = l);
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
          Zf(o, a, u), (i = l);
        }
    }
  }
  if (Ds) throw ((e = zu), (Ds = !1), (zu = null), e);
}
function oe(e, t) {
  var r = t[Vu];
  r === void 0 && (r = t[Vu] = new Set());
  var n = e + "__bubble";
  r.has(n) || (N0(t, e, 2, !1), r.add(n));
}
function Tl(e, t, r) {
  var n = 0;
  t && (n |= 4), N0(r, e, n, t);
}
var Ki = "_reactListening" + Math.random().toString(36).slice(2);
function Zo(e) {
  if (!e[Ki]) {
    (e[Ki] = !0),
      Ym.forEach(function (r) {
        r !== "selectionchange" && (qx.has(r) || Tl(r, !1, e), Tl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ki] || ((t[Ki] = !0), Tl("selectionchange", !1, t));
  }
}
function N0(e, t, r, n) {
  switch (w0(t)) {
    case 1:
      var o = dx;
      break;
    case 4:
      o = fx;
      break;
    default:
      o = Qc;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Eu ||
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
function Al(e, t, r, n, o) {
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
          if (((s = Br(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            n = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  u0(function () {
    var u = i,
      c = Gc(r),
      d = [];
    e: {
      var f = V0.get(e);
      if (f !== void 0) {
        var h = Zc,
          x = e;
        switch (e) {
          case "keypress":
            if (vs(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = Ex;
            break;
          case "focusin":
            (x = "focus"), (h = wl);
            break;
          case "focusout":
            (x = "blur"), (h = wl);
            break;
          case "beforeblur":
          case "afterblur":
            h = wl;
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
            h = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = mx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ax;
            break;
          case j0:
          case L0:
          case I0:
            h = vx;
            break;
          case D0:
            h = $x;
            break;
          case "scroll":
            h = px;
            break;
          case "wheel":
            h = jx;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = bx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ff;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var g = u, y; g !== null; ) {
          y = g;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              p !== null && ((k = Go(g, p)), k != null && v.push(Jo(g, k, y)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < v.length &&
          ((f = new h(f, x, null, r, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            r !== _u &&
            (x = r.relatedTarget || r.fromElement) &&
            (Br(x) || x[er]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((x = r.relatedTarget || r.toElement),
              (h = u),
              (x = x ? Br(x) : null),
              x !== null &&
                ((w = nn(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((v = Nf),
            (k = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ff),
              (k = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (w = h == null ? f : kn(h)),
            (y = x == null ? f : kn(x)),
            (f = new v(k, g + "leave", h, r, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (k = null),
            Br(c) === u &&
              ((v = new v(p, g + "enter", x, r, c)),
              (v.target = y),
              (v.relatedTarget = w),
              (k = v)),
            (w = k),
            h && x)
          )
            t: {
              for (v = h, p = x, g = 0, y = v; y; y = un(y)) g++;
              for (y = 0, k = p; k; k = un(k)) y++;
              for (; 0 < g - y; ) (v = un(v)), g--;
              for (; 0 < y - g; ) (p = un(p)), y--;
              for (; g--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = un(v)), (p = un(p));
              }
              v = null;
            }
          else v = null;
          h !== null && Jf(d, f, h, v, !1),
            x !== null && w !== null && Jf(d, w, x, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? kn(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = Ox;
        else if (Uf(f))
          if (T0) C = Ux;
          else {
            C = Wx;
            var _ = Fx;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Hx);
        if (C && (C = C(e, u))) {
          z0(d, C, r, c);
          break e;
        }
        _ && _(e, f, u),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            bu(f, "number", f.value);
      }
      switch (((_ = u ? kn(u) : window), e)) {
        case "focusin":
          (Uf(_) || _.contentEditable === "true") &&
            ((bn = _), ($u = u), (Ao = null));
          break;
        case "focusout":
          Ao = $u = bn = null;
          break;
        case "mousedown":
          Mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mu = !1), Qf(d, r, c);
          break;
        case "selectionchange":
          if (Xx) break;
        case "keydown":
        case "keyup":
          Qf(d, r, c);
      }
      var P;
      if (ed)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        xn
          ? P0(e, r) && (E = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (_0 &&
          r.locale !== "ko" &&
          (xn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && xn && (P = C0())
            : ((dr = c),
              (qc = "value" in dr ? dr.value : dr.textContent),
              (xn = !0))),
        (_ = Fs(u, E)),
        0 < _.length &&
          ((E = new Of(E, e, null, r, c)),
          d.push({ event: E, listeners: _ }),
          P ? (E.data = P) : ((P = E0(r)), P !== null && (E.data = P)))),
        (P = Ix ? Dx(e, r) : Vx(e, r)) &&
          ((u = Fs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Of("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    B0(d, t);
  });
}
function Jo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Fs(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Go(e, r)),
      i != null && n.unshift(Jo(e, i, o)),
      (i = Go(e, t)),
      i != null && n.push(Jo(e, i, o))),
      (e = e.return);
  }
  return n;
}
function un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jf(e, t, r, n, o) {
  for (var i = t._reactName, s = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Go(r, i)), l != null && s.unshift(Jo(r, l, a)))
        : o || ((l = Go(r, i)), l != null && s.push(Jo(r, l, a)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zx = /\r\n?/g,
  Jx = /\u0000|\uFFFD/g;
function ep(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zx,
      `
`,
    )
    .replace(Jx, "");
}
function Qi(e, t, r) {
  if (((t = ep(t)), ep(e) !== t && r)) throw Error(z(425));
}
function Ws() {}
var ju = null,
  Lu = null;
function Iu(e, t) {
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
var Du = typeof setTimeout == "function" ? setTimeout : void 0,
  eb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tp = typeof Promise == "function" ? Promise : void 0,
  tb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tp < "u"
        ? function (e) {
            return tp.resolve(null).then(e).catch(rb);
          }
        : Du;
function rb(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rl(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), Ko(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  Ko(t);
}
function gr(e) {
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
function rp(e) {
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
var ro = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + ro,
  ei = "__reactProps$" + ro,
  er = "__reactContainer$" + ro,
  Vu = "__reactEvents$" + ro,
  nb = "__reactListeners$" + ro,
  ob = "__reactHandles$" + ro;
function Br(e) {
  var t = e[It];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[er] || r[It])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = rp(e); e !== null; ) {
          if ((r = e[It])) return r;
          e = rp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ki(e) {
  return (
    (e = e[It] || e[er]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Pa(e) {
  return e[ei] || null;
}
var Bu = [],
  wn = -1;
function Tr(e) {
  return { current: e };
}
function ie(e) {
  0 > wn || ((e.current = Bu[wn]), (Bu[wn] = null), wn--);
}
function J(e, t) {
  wn++, (Bu[wn] = e.current), (e.current = t);
}
var Cr = {},
  We = Tr(Cr),
  Ze = Tr(!1),
  Kr = Cr;
function Wn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Cr;
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
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function Hs() {
  ie(Ze), ie(We);
}
function np(e, t, r) {
  if (We.current !== Cr) throw Error(z(168));
  J(We, t), J(Ze, r);
}
function O0(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(z(108, F1(e) || "Unknown", o));
  return fe({}, r, n);
}
function Us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cr),
    (Kr = We.current),
    J(We, e),
    J(Ze, Ze.current),
    !0
  );
}
function op(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(z(169));
  r
    ? ((e = O0(e, t, Kr)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ie(Ze),
      ie(We),
      J(We, e))
    : ie(Ze),
    J(Ze, r);
}
var Gt = null,
  Ea = !1,
  $l = !1;
function F0(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function ib(e) {
  (Ea = !0), F0(e);
}
function Ar() {
  if (!$l && Gt !== null) {
    $l = !0;
    var e = 0,
      t = Q;
    try {
      var r = Gt;
      for (Q = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Gt = null), (Ea = !1);
    } catch (o) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), p0(Yc, Ar), o);
    } finally {
      (Q = t), ($l = !1);
    }
  }
  return null;
}
var Cn = [],
  _n = 0,
  Gs = null,
  Ys = 0,
  ht = [],
  mt = 0,
  Qr = null,
  Yt = 1,
  Xt = "";
function Lr(e, t) {
  (Cn[_n++] = Ys), (Cn[_n++] = Gs), (Gs = e), (Ys = t);
}
function W0(e, t, r) {
  (ht[mt++] = Yt), (ht[mt++] = Xt), (ht[mt++] = Qr), (Qr = e);
  var n = Yt;
  e = Xt;
  var o = 32 - Et(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Et(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (o -= s),
      (Yt = (1 << (32 - Et(t) + o)) | (r << o) | n),
      (Xt = i + e);
  } else (Yt = (1 << i) | (r << o) | n), (Xt = e);
}
function rd(e) {
  e.return !== null && (Lr(e, 1), W0(e, 1, 0));
}
function nd(e) {
  for (; e === Gs; )
    (Gs = Cn[--_n]), (Cn[_n] = null), (Ys = Cn[--_n]), (Cn[_n] = null);
  for (; e === Qr; )
    (Qr = ht[--mt]),
      (ht[mt] = null),
      (Xt = ht[--mt]),
      (ht[mt] = null),
      (Yt = ht[--mt]),
      (ht[mt] = null);
}
var st = null,
  it = null,
  ae = !1,
  _t = null;
function H0(e, t) {
  var r = gt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function ip(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (it = gr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Qr !== null ? { id: Yt, overflow: Xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = gt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (st = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ou(e) {
  if (ae) {
    var t = it;
    if (t) {
      var r = t;
      if (!ip(e, t)) {
        if (Nu(e)) throw Error(z(418));
        t = gr(r.nextSibling);
        var n = st;
        t && ip(e, t)
          ? H0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (st = e));
      }
    } else {
      if (Nu(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (st = e);
    }
  }
}
function sp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function qi(e) {
  if (e !== st) return !1;
  if (!ae) return sp(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Iu(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Nu(e)) throw (U0(), Error(z(418)));
    for (; t; ) H0(e, t), (t = gr(t.nextSibling));
  }
  if ((sp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              it = gr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = st ? gr(e.stateNode.nextSibling) : null;
  return !0;
}
function U0() {
  for (var e = it; e; ) e = gr(e.nextSibling);
}
function Hn() {
  (it = st = null), (ae = !1);
}
function od(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var sb = nr.ReactCurrentBatchConfig;
function po(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(z(147, e));
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
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}
function Zi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ap(e) {
  var t = e._init;
  return t(e._payload);
}
function G0(e) {
  function t(p, g) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [g]), (p.flags |= 16)) : y.push(g);
    }
  }
  function r(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function n(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function o(p, g) {
    return (p = br(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, g, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((p.flags |= 2), g) : y)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, g, y, k) {
    return g === null || g.tag !== 6
      ? ((g = Bl(y, p.mode, k)), (g.return = p), g)
      : ((g = o(g, y)), (g.return = p), g);
  }
  function l(p, g, y, k) {
    var C = y.type;
    return C === vn
      ? c(p, g, y.props.children, k, y.key)
      : g !== null &&
          (g.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === sr &&
              ap(C) === g.type))
        ? ((k = o(g, y.props)), (k.ref = po(p, g, y)), (k.return = p), k)
        : ((k = _s(y.type, y.key, y.props, null, p.mode, k)),
          (k.ref = po(p, g, y)),
          (k.return = p),
          k);
  }
  function u(p, g, y, k) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Nl(y, p.mode, k)), (g.return = p), g)
      : ((g = o(g, y.children || [])), (g.return = p), g);
  }
  function c(p, g, y, k, C) {
    return g === null || g.tag !== 7
      ? ((g = Gr(y, p.mode, k, C)), (g.return = p), g)
      : ((g = o(g, y)), (g.return = p), g);
  }
  function d(p, g, y) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Bl("" + g, p.mode, y)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Oi:
          return (
            (y = _s(g.type, g.key, g.props, null, p.mode, y)),
            (y.ref = po(p, null, g)),
            (y.return = p),
            y
          );
        case yn:
          return (g = Nl(g, p.mode, y)), (g.return = p), g;
        case sr:
          var k = g._init;
          return d(p, k(g._payload), y);
      }
      if (bo(g) || ao(g))
        return (g = Gr(g, p.mode, y, null)), (g.return = p), g;
      Zi(p, g);
    }
    return null;
  }
  function f(p, g, y, k) {
    var C = g !== null ? g.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(p, g, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Oi:
          return y.key === C ? l(p, g, y, k) : null;
        case yn:
          return y.key === C ? u(p, g, y, k) : null;
        case sr:
          return (C = y._init), f(p, g, C(y._payload), k);
      }
      if (bo(y) || ao(y)) return C !== null ? null : c(p, g, y, k, null);
      Zi(p, y);
    }
    return null;
  }
  function h(p, g, y, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (p = p.get(y) || null), a(g, p, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Oi:
          return (p = p.get(k.key === null ? y : k.key) || null), l(g, p, k, C);
        case yn:
          return (p = p.get(k.key === null ? y : k.key) || null), u(g, p, k, C);
        case sr:
          var _ = k._init;
          return h(p, g, y, _(k._payload), C);
      }
      if (bo(k) || ao(k)) return (p = p.get(y) || null), c(g, p, k, C, null);
      Zi(g, k);
    }
    return null;
  }
  function x(p, g, y, k) {
    for (
      var C = null, _ = null, P = g, E = (g = 0), R = null;
      P !== null && E < y.length;
      E++
    ) {
      P.index > E ? ((R = P), (P = null)) : (R = P.sibling);
      var T = f(p, P, y[E], k);
      if (T === null) {
        P === null && (P = R);
        break;
      }
      e && P && T.alternate === null && t(p, P),
        (g = i(T, g, E)),
        _ === null ? (C = T) : (_.sibling = T),
        (_ = T),
        (P = R);
    }
    if (E === y.length) return r(p, P), ae && Lr(p, E), C;
    if (P === null) {
      for (; E < y.length; E++)
        (P = d(p, y[E], k)),
          P !== null &&
            ((g = i(P, g, E)), _ === null ? (C = P) : (_.sibling = P), (_ = P));
      return ae && Lr(p, E), C;
    }
    for (P = n(p, P); E < y.length; E++)
      (R = h(P, p, E, y[E], k)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? E : R.key),
          (g = i(R, g, E)),
          _ === null ? (C = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        P.forEach(function (B) {
          return t(p, B);
        }),
      ae && Lr(p, E),
      C
    );
  }
  function v(p, g, y, k) {
    var C = ao(y);
    if (typeof C != "function") throw Error(z(150));
    if (((y = C.call(y)), y == null)) throw Error(z(151));
    for (
      var _ = (C = null), P = g, E = (g = 0), R = null, T = y.next();
      P !== null && !T.done;
      E++, T = y.next()
    ) {
      P.index > E ? ((R = P), (P = null)) : (R = P.sibling);
      var B = f(p, P, T.value, k);
      if (B === null) {
        P === null && (P = R);
        break;
      }
      e && P && B.alternate === null && t(p, P),
        (g = i(B, g, E)),
        _ === null ? (C = B) : (_.sibling = B),
        (_ = B),
        (P = R);
    }
    if (T.done) return r(p, P), ae && Lr(p, E), C;
    if (P === null) {
      for (; !T.done; E++, T = y.next())
        (T = d(p, T.value, k)),
          T !== null &&
            ((g = i(T, g, E)), _ === null ? (C = T) : (_.sibling = T), (_ = T));
      return ae && Lr(p, E), C;
    }
    for (P = n(p, P); !T.done; E++, T = y.next())
      (T = h(P, p, E, T.value, k)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? E : T.key),
          (g = i(T, g, E)),
          _ === null ? (C = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        P.forEach(function (xe) {
          return t(p, xe);
        }),
      ae && Lr(p, E),
      C
    );
  }
  function w(p, g, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === vn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Oi:
          e: {
            for (var C = y.key, _ = g; _ !== null; ) {
              if (_.key === C) {
                if (((C = y.type), C === vn)) {
                  if (_.tag === 7) {
                    r(p, _.sibling),
                      (g = o(_, y.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === sr &&
                    ap(C) === _.type)
                ) {
                  r(p, _.sibling),
                    (g = o(_, y.props)),
                    (g.ref = po(p, _, y)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                r(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            y.type === vn
              ? ((g = Gr(y.props.children, p.mode, k, y.key)),
                (g.return = p),
                (p = g))
              : ((k = _s(y.type, y.key, y.props, null, p.mode, k)),
                (k.ref = po(p, g, y)),
                (k.return = p),
                (p = k));
          }
          return s(p);
        case yn:
          e: {
            for (_ = y.key; g !== null; ) {
              if (g.key === _)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  r(p, g.sibling),
                    (g = o(g, y.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  r(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = Nl(y, p.mode, k)), (g.return = p), (p = g);
          }
          return s(p);
        case sr:
          return (_ = y._init), w(p, g, _(y._payload), k);
      }
      if (bo(y)) return x(p, g, y, k);
      if (ao(y)) return v(p, g, y, k);
      Zi(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        g !== null && g.tag === 6
          ? (r(p, g.sibling), (g = o(g, y)), (g.return = p), (p = g))
          : (r(p, g), (g = Bl(y, p.mode, k)), (g.return = p), (p = g)),
        s(p))
      : r(p, g);
  }
  return w;
}
var Un = G0(!0),
  Y0 = G0(!1),
  Xs = Tr(null),
  Ks = null,
  Pn = null,
  id = null;
function sd() {
  id = Pn = Ks = null;
}
function ad(e) {
  var t = Xs.current;
  ie(Xs), (e._currentValue = t);
}
function Fu(e, t, r) {
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
function In(e, t) {
  (Ks = e),
    (id = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (id !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (Ks === null) throw Error(z(308));
      (Pn = e), (Ks.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var Nr = null;
function ld(e) {
  Nr === null ? (Nr = [e]) : Nr.push(e);
}
function X0(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), ld(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    tr(e, n)
  );
}
function tr(e, t) {
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
var ar = !1;
function ud(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function K0(e, t) {
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
function Qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Y & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      tr(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), ld(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    tr(e, r)
  );
}
function xs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
function lp(e, t) {
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
function Qs(e, t, r, n) {
  var o = e.updateQueue;
  ar = !1;
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
        h = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((f = t), (h = r), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == "function")) {
                d = x.call(h, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = v.payload),
                (f = typeof x == "function" ? x.call(h, d, f) : x),
                f == null)
              )
                break e;
              d = fe({}, d, f);
              break e;
            case 2:
              ar = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
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
    (Zr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function up(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(z(191, o));
        o.call(n);
      }
    }
}
var wi = {},
  Bt = Tr(wi),
  ti = Tr(wi),
  ri = Tr(wi);
function Or(e) {
  if (e === wi) throw Error(z(174));
  return e;
}
function cd(e, t) {
  switch ((J(ri, t), J(ti, e), J(Bt, wi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ku(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ku(t, e));
  }
  ie(Bt), J(Bt, t);
}
function Gn() {
  ie(Bt), ie(ti), ie(ri);
}
function Q0(e) {
  Or(ri.current);
  var t = Or(Bt.current),
    r = ku(t, e.type);
  t !== r && (J(ti, e), J(Bt, r));
}
function dd(e) {
  ti.current === e && (ie(Bt), ie(ti));
}
var ue = Tr(0);
function qs(e) {
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
var Ml = [];
function fd() {
  for (var e = 0; e < Ml.length; e++)
    Ml[e]._workInProgressVersionPrimary = null;
  Ml.length = 0;
}
var bs = nr.ReactCurrentDispatcher,
  jl = nr.ReactCurrentBatchConfig,
  qr = 0,
  de = null,
  _e = null,
  ze = null,
  Zs = !1,
  Ro = !1,
  ni = 0,
  ab = 0;
function De() {
  throw Error(z(321));
}
function pd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!At(e[r], t[r])) return !1;
  return !0;
}
function hd(e, t, r, n, o, i) {
  if (
    ((qr = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bs.current = e === null || e.memoizedState === null ? db : fb),
    (e = r(n, o)),
    Ro)
  ) {
    i = 0;
    do {
      if (((Ro = !1), (ni = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (ze = _e = null),
        (t.updateQueue = null),
        (bs.current = pb),
        (e = r(n, o));
    } while (Ro);
  }
  if (
    ((bs.current = Js),
    (t = _e !== null && _e.next !== null),
    (qr = 0),
    (ze = _e = de = null),
    (Zs = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function md() {
  var e = ni !== 0;
  return (ni = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (de.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function xt() {
  if (_e === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = ze === null ? de.memoizedState : ze.next;
  if (t !== null) (ze = t), (_e = e);
  else {
    if (e === null) throw Error(z(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      ze === null ? (de.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ll(e) {
  var t = xt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = _e,
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
      if ((qr & c) === c)
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
          (de.lanes |= c),
          (Zr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = n) : (l.next = a),
      At(n, t.memoizedState) || (Qe = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (de.lanes |= i), (Zr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Il(e) {
  var t = xt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    At(i, t.memoizedState) || (Qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function q0() {}
function Z0(e, t) {
  var r = de,
    n = xt(),
    o = t(),
    i = !At(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (Qe = !0)),
    (n = n.queue),
    gd(tg.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ii(9, eg.bind(null, r, n, o, t), void 0, null),
      Te === null)
    )
      throw Error(z(349));
    qr & 30 || J0(r, t, o);
  }
  return o;
}
function J0(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function eg(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), rg(t) && ng(e);
}
function tg(e, t, r) {
  return r(function () {
    rg(t) && ng(e);
  });
}
function rg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !At(e, r);
  } catch {
    return !0;
  }
}
function ng(e) {
  var t = tr(e, 1);
  t !== null && zt(t, e, 1, -1);
}
function cp(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cb.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function ii(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function og() {
  return xt().memoizedState;
}
function Ss(e, t, r, n) {
  var o = $t();
  (de.flags |= e),
    (o.memoizedState = ii(1 | t, r, void 0, n === void 0 ? null : n));
}
function za(e, t, r, n) {
  var o = xt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (_e !== null) {
    var s = _e.memoizedState;
    if (((i = s.destroy), n !== null && pd(n, s.deps))) {
      o.memoizedState = ii(t, r, i, n);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = ii(1 | t, r, i, n));
}
function dp(e, t) {
  return Ss(8390656, 8, e, t);
}
function gd(e, t) {
  return za(2048, 8, e, t);
}
function ig(e, t) {
  return za(4, 2, e, t);
}
function sg(e, t) {
  return za(4, 4, e, t);
}
function ag(e, t) {
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
function lg(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), za(4, 4, ag.bind(null, t, e), r)
  );
}
function yd() {}
function ug(e, t) {
  var r = xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && pd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function cg(e, t) {
  var r = xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && pd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function dg(e, t, r) {
  return qr & 21
    ? (At(r, t) || ((r = g0()), (de.lanes |= r), (Zr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = r));
}
function lb(e, t) {
  var r = Q;
  (Q = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = jl.transition;
  jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = r), (jl.transition = n);
  }
}
function fg() {
  return xt().memoizedState;
}
function ub(e, t, r) {
  var n = xr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pg(e))
  )
    hg(t, r);
  else if (((r = X0(e, t, r, n)), r !== null)) {
    var o = Ge();
    zt(r, e, n, o), mg(r, t, n);
  }
}
function cb(e, t, r) {
  var n = xr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (pg(e)) hg(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = a), At(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), ld(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = X0(e, t, o, n)),
      r !== null && ((o = Ge()), zt(r, e, n, o), mg(r, t, n));
  }
}
function pg(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function hg(e, t) {
  Ro = Zs = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function mg(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
var Js = {
    readContext: vt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  db = {
    readContext: vt,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: dp,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Ss(4194308, 4, ag.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = $t();
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
        (e = e.dispatch = ub.bind(null, de, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cp,
    useDebugValue: yd,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = cp(!1),
        t = e[0];
      return (e = lb.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = de,
        o = $t();
      if (ae) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), Te === null)) throw Error(z(349));
        qr & 30 || J0(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        dp(tg.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        ii(9, eg.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = $t(),
        t = Te.identifierPrefix;
      if (ae) {
        var r = Xt,
          n = Yt;
        (r = (n & ~(1 << (32 - Et(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = ni++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = ab++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fb = {
    readContext: vt,
    useCallback: ug,
    useContext: vt,
    useEffect: gd,
    useImperativeHandle: lg,
    useInsertionEffect: ig,
    useLayoutEffect: sg,
    useMemo: cg,
    useReducer: Ll,
    useRef: og,
    useState: function () {
      return Ll(oi);
    },
    useDebugValue: yd,
    useDeferredValue: function (e) {
      var t = xt();
      return dg(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(oi)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: q0,
    useSyncExternalStore: Z0,
    useId: fg,
    unstable_isNewReconciler: !1,
  },
  pb = {
    readContext: vt,
    useCallback: ug,
    useContext: vt,
    useEffect: gd,
    useImperativeHandle: lg,
    useInsertionEffect: ig,
    useLayoutEffect: sg,
    useMemo: cg,
    useReducer: Il,
    useRef: og,
    useState: function () {
      return Il(oi);
    },
    useDebugValue: yd,
    useDeferredValue: function (e) {
      var t = xt();
      return _e === null ? (t.memoizedState = e) : dg(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(oi)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: q0,
    useSyncExternalStore: Z0,
    useId: fg,
    unstable_isNewReconciler: !1,
  };
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Wu(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : fe({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Ta = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ge(),
      o = xr(e),
      i = Qt(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = yr(e, i, o)),
      t !== null && (zt(t, e, o, n), xs(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ge(),
      o = xr(e),
      i = Qt(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = yr(e, i, o)),
      t !== null && (zt(t, e, o, n), xs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ge(),
      n = xr(e),
      o = Qt(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = yr(e, o, n)),
      t !== null && (zt(t, e, n, r), xs(t, e, n));
  },
};
function fp(e, t, r, n, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !qo(r, n) || !qo(o, i)
        : !0
  );
}
function gg(e, t, r) {
  var n = !1,
    o = Cr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = vt(i))
      : ((o = Je(t) ? Kr : We.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Wn(e, o) : Cr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ta),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function pp(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ta.enqueueReplaceState(t, t.state, null);
}
function Hu(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = {}), ud(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = vt(i))
    : ((i = Je(t) ? Kr : We.current), (o.context = Wn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wu(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ta.enqueueReplaceState(o, o.state, null),
      Qs(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var r = "",
      n = t;
    do (r += O1(n)), (n = n.return);
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
function Dl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Uu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var hb = typeof WeakMap == "function" ? WeakMap : Map;
function yg(e, t, r) {
  (r = Qt(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ta || ((ta = !0), (tc = n)), Uu(e, t);
    }),
    r
  );
}
function vg(e, t, r) {
  (r = Qt(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Uu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Uu(e, t),
          typeof n != "function" &&
            (vr === null ? (vr = new Set([this])) : vr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    r
  );
}
function hp(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new hb();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = zb.bind(null, e, t, r)), t.then(e, e));
}
function mp(e) {
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
function gp(e, t, r, n, o) {
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
              : ((t = Qt(-1, 1)), (t.tag = 2), yr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var mb = nr.ReactCurrentOwner,
  Qe = !1;
function Ue(e, t, r, n) {
  t.child = e === null ? Y0(t, null, r, n) : Un(t, e.child, r, n);
}
function yp(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    In(t, o),
    (n = hd(e, t, r, n, i, o)),
    (r = md()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        rr(e, t, o))
      : (ae && r && rd(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
  );
}
function vp(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !_d(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), xg(e, t, i, n, o))
      : ((e = _s(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : qo), r(s, n) && e.ref === t.ref)
    )
      return rr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = br(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xg(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qo(i, n) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), rr(e, t, o);
  }
  return Gu(e, t, r, n, o);
}
function bg(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(zn, ot),
        (ot |= r);
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
          J(zn, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        J(zn, ot),
        (ot |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      J(zn, ot),
      (ot |= n);
  return Ue(e, t, o, r), t.child;
}
function Sg(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gu(e, t, r, n, o) {
  var i = Je(r) ? Kr : We.current;
  return (
    (i = Wn(t, i)),
    In(t, o),
    (r = hd(e, t, r, n, i, o)),
    (n = md()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        rr(e, t, o))
      : (ae && n && rd(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
  );
}
function xp(e, t, r, n, o) {
  if (Je(r)) {
    var i = !0;
    Us(t);
  } else i = !1;
  if ((In(t, o), t.stateNode === null))
    ks(e, t), gg(t, r, n), Hu(t, r, n, o), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = vt(u))
      : ((u = Je(r) ? Kr : We.current), (u = Wn(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && pp(t, s, n, u)),
      (ar = !1);
    var f = t.memoizedState;
    (s.state = f),
      Qs(t, n, s, o),
      (l = t.memoizedState),
      a !== n || f !== l || Ze.current || ar
        ? (typeof c == "function" && (Wu(t, r, c, n), (l = t.memoizedState)),
          (a = ar || fp(t, r, a, n, f, l, u))
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
      K0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = vt(l))
        : ((l = Je(r) ? Kr : We.current), (l = Wn(t, l)));
    var h = r.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && pp(t, s, n, l)),
      (ar = !1),
      (f = t.memoizedState),
      (s.state = f),
      Qs(t, n, s, o);
    var x = t.memoizedState;
    a !== d || f !== x || Ze.current || ar
      ? (typeof h == "function" && (Wu(t, r, h, n), (x = t.memoizedState)),
        (u = ar || fp(t, r, u, n, f, x, l) || !1)
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
  return Yu(e, t, r, n, i, o);
}
function Yu(e, t, r, n, o, i) {
  Sg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return o && op(t, r, !1), rr(e, t, i);
  (n = t.stateNode), (mb.current = t);
  var a =
    s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Un(t, e.child, null, i)), (t.child = Un(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = n.state),
    o && op(t, r, !0),
    t.child
  );
}
function kg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? np(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && np(e, t.context, !1),
    cd(e, t.containerInfo);
}
function bp(e, t, r, n, o) {
  return Hn(), od(o), (t.flags |= 256), Ue(e, t, r, n), t.child;
}
var Xu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ku(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wg(e, t, r) {
  var n = t.pendingProps,
    o = ue.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    J(ue, o & 1),
    e === null)
  )
    return (
      Ou(t),
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
                : (i = $a(s, n, 0, null)),
              (e = Gr(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ku(r)),
              (t.memoizedState = Xu),
              e)
            : vd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return gb(e, t, s, n, a, o, r);
  if (i) {
    (i = n.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(s & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = br(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = br(a, i)) : ((i = Gr(i, s, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ku(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Xu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = br(i, { mode: "visible", children: n.children })),
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
function vd(e, t) {
  return (
    (t = $a({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ji(e, t, r, n) {
  return (
    n !== null && od(n),
    Un(t, e.child, null, r),
    (e = vd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gb(e, t, r, n, o, i, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Dl(Error(z(422)))), Ji(e, t, s, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = $a({ mode: "visible", children: n.children }, o, 0, null)),
          (i = Gr(i, o, s, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && Un(t, e.child, null, s),
          (t.child.memoizedState = Ku(s)),
          (t.memoizedState = Xu),
          i);
  if (!(t.mode & 1)) return Ji(e, t, s, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(z(419))), (n = Dl(i, n, void 0)), Ji(e, t, s, n);
  }
  if (((a = (s & e.childLanes) !== 0), Qe || a)) {
    if (((n = Te), n !== null)) {
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
          ((i.retryLane = o), tr(e, o), zt(n, e, o, -1));
    }
    return Cd(), (n = Dl(Error(z(421)))), Ji(e, t, s, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = gr(o.nextSibling)),
      (st = t),
      (ae = !0),
      (_t = null),
      e !== null &&
        ((ht[mt++] = Yt),
        (ht[mt++] = Xt),
        (ht[mt++] = Qr),
        (Yt = e.id),
        (Xt = e.overflow),
        (Qr = t)),
      (t = vd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Sp(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Fu(e.return, t, r);
}
function Vl(e, t, r, n, o) {
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
function Cg(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Ue(e, t, n.children, r), (n = ue.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sp(e, r, t);
        else if (e.tag === 19) Sp(e, r, t);
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
  if ((J(ue, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && qs(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Vl(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && qs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Vl(t, !0, r, null, i);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = br(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = br(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function yb(e, t, r) {
  switch (t.tag) {
    case 3:
      kg(t), Hn();
      break;
    case 5:
      Q0(t);
      break;
    case 1:
      Je(t.type) && Us(t);
      break;
    case 4:
      cd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      J(Xs, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (J(ue, ue.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? wg(e, t, r)
            : (J(ue, ue.current & 1),
              (e = rr(e, t, r)),
              e !== null ? e.sibling : null);
      J(ue, ue.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Cg(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        J(ue, ue.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bg(e, t, r);
  }
  return rr(e, t, r);
}
var _g, Qu, Pg, Eg;
_g = function (e, t) {
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
Qu = function () {};
Pg = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), Or(Bt.current);
    var i = null;
    switch (r) {
      case "input":
        (o = vu(e, o)), (n = vu(e, n)), (i = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })),
          (n = fe({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Su(e, o)), (n = Su(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Ws);
    }
    wu(r, n);
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
            (Ho.hasOwnProperty(u)
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
                (Ho.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && oe("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Eg = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ho(e, t) {
  if (!ae)
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
function Ve(e) {
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
function vb(e, t, r) {
  var n = t.pendingProps;
  switch ((nd(t), t.tag)) {
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
      return Ve(t), null;
    case 1:
      return Je(t.type) && Hs(), Ve(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Gn(),
        ie(Ze),
        ie(We),
        fd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (qi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (oc(_t), (_t = null)))),
        Qu(e, t),
        Ve(t),
        null
      );
    case 5:
      dd(t);
      var o = Or(ri.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Pg(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(z(166));
          return Ve(t), null;
        }
        if (((e = Or(Bt.current)), qi(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[It] = t), (n[ei] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              oe("cancel", n), oe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ko.length; o++) oe(ko[o], n);
              break;
            case "source":
              oe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", n), oe("load", n);
              break;
            case "details":
              oe("toggle", n);
              break;
            case "input":
              Af(n, i), oe("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", n);
              break;
            case "textarea":
              $f(n, i), oe("invalid", n);
          }
          wu(r, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qi(n.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qi(n.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ho.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  oe("scroll", n);
            }
          switch (r) {
            case "input":
              Fi(n), Rf(n, i, !0);
              break;
            case "textarea":
              Fi(n), Mf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Ws);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = t0(r)),
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
            (e[It] = t),
            (e[ei] = n),
            _g(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Cu(r, n)), r)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ko.length; o++) oe(ko[o], e);
                o = n;
                break;
              case "source":
                oe("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = n);
                break;
              case "details":
                oe("toggle", e), (o = n);
                break;
              case "input":
                Af(e, n), (o = vu(e, n)), oe("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = fe({}, n, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                $f(e, n), (o = Su(e, n)), oe("invalid", e);
                break;
              default:
                o = n;
            }
            wu(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? o0(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && r0(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && Uo(e, l)
                        : typeof l == "number" && Uo(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Ho.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && oe("scroll", e)
                          : l != null && Fc(e, i, l, s));
              }
            switch (r) {
              case "input":
                Fi(e), Rf(e, n, !1);
                break;
              case "textarea":
                Fi(e), Mf(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + wr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? $n(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      $n(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ws);
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
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) Eg(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = Or(ri.current)), Or(Bt.current), qi(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[It] = t),
            (i = n.nodeValue !== r) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qi(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qi(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[It] = t),
            (t.stateNode = n);
      }
      return Ve(t), null;
    case 13:
      if (
        (ie(ue),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && it !== null && t.mode & 1 && !(t.flags & 128))
          U0(), Hn(), (t.flags |= 98560), (i = !1);
        else if (((i = qi(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[It] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (i = !1);
        } else _t !== null && (oc(_t), (_t = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Ee === 0 && (Ee = 3) : Cd())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        Gn(), Qu(e, t), e === null && Zo(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return ad(t.type._context), Ve(t), null;
    case 17:
      return Je(t.type) && Hs(), Ve(t), null;
    case 19:
      if ((ie(ue), (i = t.memoizedState), i === null)) return Ve(t), null;
      if (((n = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (n) ho(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = qs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ho(i, !1),
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
                return J(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > Xn &&
            ((t.flags |= 128), (n = !0), ho(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = qs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ho(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
            )
              return Ve(t), null;
          } else
            2 * ge() - i.renderingStartTime > Xn &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), ho(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (r = ue.current),
          J(ue, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        wd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? ot & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function xb(e, t) {
  switch ((nd(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        ie(Ze),
        ie(We),
        fd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return dd(t), null;
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ue), null;
    case 4:
      return Gn(), null;
    case 10:
      return ad(t.type._context), null;
    case 22:
    case 23:
      return wd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  Oe = !1,
  bb = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function En(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        pe(e, t, n);
      }
    else r.current = null;
}
function qu(e, t, r) {
  try {
    r();
  } catch (n) {
    pe(e, t, n);
  }
}
var kp = !1;
function Sb(e, t) {
  if (((ju = Ns), (e = $0()), td(e))) {
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
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = s + n),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === o && (a = s),
                f === i && ++c === n && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Lu = { focusedElem: e, selectionRange: r }, Ns = !1, j = t; j !== null; )
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
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : wt(t.type, v),
                      w,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
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
                throw Error(z(163));
            }
        } catch (k) {
          pe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (x = kp), (kp = !1), x;
}
function $o(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && qu(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Aa(e, t) {
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
function Zu(e) {
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
function zg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[It], delete t[ei], delete t[Vu], delete t[nb], delete t[ob])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tg(e.return)) return null;
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
function Ju(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = Ws));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ju(e, t, r), e = e.sibling; e !== null; ) Ju(e, t, r), (e = e.sibling);
}
function ec(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ec(e, t, r), e = e.sibling; e !== null; ) ec(e, t, r), (e = e.sibling);
}
var $e = null,
  Ct = !1;
function or(e, t, r) {
  for (r = r.child; r !== null; ) Ag(e, t, r), (r = r.sibling);
}
function Ag(e, t, r) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(ka, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Oe || En(r, t);
    case 6:
      var n = $e,
        o = Ct;
      ($e = null),
        or(e, t, r),
        ($e = n),
        (Ct = o),
        $e !== null &&
          (Ct
            ? ((e = $e),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : $e.removeChild(r.stateNode));
      break;
    case 18:
      $e !== null &&
        (Ct
          ? ((e = $e),
            (r = r.stateNode),
            e.nodeType === 8
              ? Rl(e.parentNode, r)
              : e.nodeType === 1 && Rl(e, r),
            Ko(e))
          : Rl($e, r.stateNode));
      break;
    case 4:
      (n = $e),
        (o = Ct),
        ($e = r.stateNode.containerInfo),
        (Ct = !0),
        or(e, t, r),
        ($e = n),
        (Ct = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && qu(r, t, s),
            (o = o.next);
        } while (o !== n);
      }
      or(e, t, r);
      break;
    case 1:
      if (
        !Oe &&
        (En(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          pe(r, t, a);
        }
      or(e, t, r);
      break;
    case 21:
      or(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Oe = (n = Oe) || r.memoizedState !== null), or(e, t, r), (Oe = n))
        : or(e, t, r);
      break;
    default:
      or(e, t, r);
  }
}
function Cp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new bb()),
      t.forEach(function (n) {
        var o = Ab.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function kt(e, t) {
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
              ($e = a.stateNode), (Ct = !1);
              break e;
            case 3:
              ($e = a.stateNode.containerInfo), (Ct = !0);
              break e;
            case 4:
              ($e = a.stateNode.containerInfo), (Ct = !0);
              break e;
          }
          a = a.return;
        }
        if ($e === null) throw Error(z(160));
        Ag(i, s, o), ($e = null), (Ct = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rg(t, e), (t = t.sibling);
}
function Rg(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Rt(e), n & 4)) {
        try {
          $o(3, e, e.return), Aa(3, e);
        } catch (v) {
          pe(e, e.return, v);
        }
        try {
          $o(5, e, e.return);
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 1:
      kt(t, e), Rt(e), n & 512 && r !== null && En(r, r.return);
      break;
    case 5:
      if (
        (kt(t, e),
        Rt(e),
        n & 512 && r !== null && En(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Uo(o, "");
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = r !== null ? r.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Jm(o, i),
              Cu(a, s);
            var u = Cu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? o0(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? r0(o, d)
                  : c === "children"
                    ? Uo(o, d)
                    : Fc(o, c, d, u);
            }
            switch (a) {
              case "input":
                xu(o, i);
                break;
              case "textarea":
                e0(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? $n(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $n(o, !!i.multiple, i.defaultValue, !0)
                      : $n(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ei] = i;
          } catch (v) {
            pe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Rt(e), n & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), Rt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Ko(t.containerInfo);
        } catch (v) {
          pe(e, e.return, v);
        }
      break;
    case 4:
      kt(t, e), Rt(e);
      break;
    case 13:
      kt(t, e),
        Rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Sd = ge())),
        n & 4 && Cp(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || c), kt(t, e), (Oe = u)) : kt(t, e),
        Rt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((f = j), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $o(4, f, f.return);
                  break;
                case 1:
                  En(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (v) {
                      pe(n, r, v);
                    }
                  }
                  break;
                case 5:
                  En(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Pp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (j = h)) : Pp(d);
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
                      (a.style.display = n0("display", s)));
              } catch (v) {
                pe(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                pe(e, e.return, v);
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
      kt(t, e), Rt(e), n & 4 && Cp(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Tg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Uo(o, ""), (n.flags &= -33));
          var i = wp(e);
          ec(e, i, o);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            a = wp(e);
          Ju(e, a, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kb(e, t, r) {
  (j = e), $g(e);
}
function $g(e, t, r) {
  for (var n = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && n) {
      var s = o.memoizedState !== null || es;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Oe;
        a = es;
        var u = Oe;
        if (((es = s), (Oe = l) && !u))
          for (j = o; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ep(o)
                : l !== null
                  ? ((l.return = s), (j = l))
                  : Ep(o);
        for (; i !== null; ) (j = i), $g(i), (i = i.sibling);
        (j = o), (es = a), (Oe = u);
      }
      _p(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : _p(e);
  }
}
function _p(e) {
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
              Oe || Aa(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : wt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && up(t, i, n);
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
                up(t, s, r);
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
                    d !== null && Ko(d);
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
              throw Error(z(163));
          }
        Oe || (t.flags & 512 && Zu(t));
      } catch (f) {
        pe(t, t.return, f);
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
function Pp(e) {
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
function Ep(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Aa(4, t);
          } catch (l) {
            pe(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              pe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Zu(t);
          } catch (l) {
            pe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Zu(t);
          } catch (l) {
            pe(t, s, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
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
var wb = Math.ceil,
  ea = nr.ReactCurrentDispatcher,
  xd = nr.ReactCurrentOwner,
  yt = nr.ReactCurrentBatchConfig,
  Y = 0,
  Te = null,
  Ce = null,
  je = 0,
  ot = 0,
  zn = Tr(0),
  Ee = 0,
  si = null,
  Zr = 0,
  Ra = 0,
  bd = 0,
  Mo = null,
  Ke = null,
  Sd = 0,
  Xn = 1 / 0,
  Ut = null,
  ta = !1,
  tc = null,
  vr = null,
  ts = !1,
  fr = null,
  ra = 0,
  jo = 0,
  rc = null,
  ws = -1,
  Cs = 0;
function Ge() {
  return Y & 6 ? ge() : ws !== -1 ? ws : (ws = ge());
}
function xr(e) {
  return e.mode & 1
    ? Y & 2 && je !== 0
      ? je & -je
      : sb.transition !== null
        ? (Cs === 0 && (Cs = g0()), Cs)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : w0(e.type))),
          e)
    : 1;
}
function zt(e, t, r, n) {
  if (50 < jo) throw ((jo = 0), (rc = null), Error(z(185)));
  bi(e, r, n),
    (!(Y & 2) || e !== Te) &&
      (e === Te && (!(Y & 2) && (Ra |= r), Ee === 4 && cr(e, je)),
      et(e, n),
      r === 1 && Y === 0 && !(t.mode & 1) && ((Xn = ge() + 500), Ea && Ar()));
}
function et(e, t) {
  var r = e.callbackNode;
  sx(e, t);
  var n = Bs(e, e === Te ? je : 0);
  if (n === 0)
    r !== null && If(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && If(r), t === 1))
      e.tag === 0 ? ib(zp.bind(null, e)) : F0(zp.bind(null, e)),
        tb(function () {
          !(Y & 6) && Ar();
        }),
        (r = null);
    else {
      switch (y0(n)) {
        case 1:
          r = Yc;
          break;
        case 4:
          r = h0;
          break;
        case 16:
          r = Vs;
          break;
        case 536870912:
          r = m0;
          break;
        default:
          r = Vs;
      }
      r = Ng(r, Mg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Mg(e, t) {
  if (((ws = -1), (Cs = 0), Y & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (Dn() && e.callbackNode !== r) return null;
  var n = Bs(e, e === Te ? je : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = na(e, n);
  else {
    t = n;
    var o = Y;
    Y |= 2;
    var i = Lg();
    (Te !== e || je !== t) && ((Ut = null), (Xn = ge() + 500), Ur(e, t));
    do
      try {
        Pb();
        break;
      } catch (a) {
        jg(e, a);
      }
    while (!0);
    sd(),
      (ea.current = i),
      (Y = o),
      Ce !== null ? (t = 0) : ((Te = null), (je = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Tu(e)), o !== 0 && ((n = o), (t = nc(e, o)))), t === 1)
    )
      throw ((r = si), Ur(e, 0), cr(e, n), et(e, ge()), r);
    if (t === 6) cr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !Cb(o) &&
          ((t = na(e, n)),
          t === 2 && ((i = Tu(e)), i !== 0 && ((n = i), (t = nc(e, i)))),
          t === 1))
      )
        throw ((r = si), Ur(e, 0), cr(e, n), et(e, ge()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Ir(e, Ke, Ut);
          break;
        case 3:
          if (
            (cr(e, n), (n & 130023424) === n && ((t = Sd + 500 - ge()), 10 < t))
          ) {
            if (Bs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ge(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Du(Ir.bind(null, e, Ke, Ut), t);
            break;
          }
          Ir(e, Ke, Ut);
          break;
        case 4:
          if ((cr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var s = 31 - Et(n);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (n &= ~i);
          }
          if (
            ((n = o),
            (n = ge() - n),
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
                          : 1960 * wb(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Du(Ir.bind(null, e, Ke, Ut), n);
            break;
          }
          Ir(e, Ke, Ut);
          break;
        case 5:
          Ir(e, Ke, Ut);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return et(e, ge()), e.callbackNode === r ? Mg.bind(null, e) : null;
}
function nc(e, t) {
  var r = Mo;
  return (
    e.current.memoizedState.isDehydrated && (Ur(e, t).flags |= 256),
    (e = na(e, t)),
    e !== 2 && ((t = Ke), (Ke = r), t !== null && oc(t)),
    e
  );
}
function oc(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function Cb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!At(i(), o)) return !1;
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
function cr(e, t) {
  for (
    t &= ~bd,
      t &= ~Ra,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Et(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function zp(e) {
  if (Y & 6) throw Error(z(327));
  Dn();
  var t = Bs(e, 0);
  if (!(t & 1)) return et(e, ge()), null;
  var r = na(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Tu(e);
    n !== 0 && ((t = n), (r = nc(e, n)));
  }
  if (r === 1) throw ((r = si), Ur(e, 0), cr(e, t), et(e, ge()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ir(e, Ke, Ut),
    et(e, ge()),
    null
  );
}
function kd(e, t) {
  var r = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && ((Xn = ge() + 500), Ea && Ar());
  }
}
function Jr(e) {
  fr !== null && fr.tag === 0 && !(Y & 6) && Dn();
  var t = Y;
  Y |= 1;
  var r = yt.transition,
    n = Q;
  try {
    if (((yt.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = n), (yt.transition = r), (Y = t), !(Y & 6) && Ar();
  }
}
function wd() {
  (ot = zn.current), ie(zn);
}
function Ur(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), eb(r)), Ce !== null))
    for (r = Ce.return; r !== null; ) {
      var n = r;
      switch ((nd(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Hs();
          break;
        case 3:
          Gn(), ie(Ze), ie(We), fd();
          break;
        case 5:
          dd(n);
          break;
        case 4:
          Gn();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          ad(n.type._context);
          break;
        case 22:
        case 23:
          wd();
      }
      r = r.return;
    }
  if (
    ((Te = e),
    (Ce = e = br(e.current, null)),
    (je = ot = t),
    (Ee = 0),
    (si = null),
    (bd = Ra = Zr = 0),
    (Ke = Mo = null),
    Nr !== null)
  ) {
    for (t = 0; t < Nr.length; t++)
      if (((r = Nr[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (n.next = s);
        }
        r.pending = n;
      }
    Nr = null;
  }
  return e;
}
function jg(e, t) {
  do {
    var r = Ce;
    try {
      if ((sd(), (bs.current = Js), Zs)) {
        for (var n = de.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Zs = !1;
      }
      if (
        ((qr = 0),
        (ze = _e = de = null),
        (Ro = !1),
        (ni = 0),
        (xd.current = null),
        r === null || r.return === null)
      ) {
        (Ee = 1), (si = t), (Ce = null);
        break;
      }
      e: {
        var i = e,
          s = r.return,
          a = r,
          l = t;
        if (
          ((t = je),
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
          var h = mp(s);
          if (h !== null) {
            (h.flags &= -257),
              gp(h, s, a, i, t),
              h.mode & 1 && hp(i, u, t),
              (t = h),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              hp(i, u, t), Cd();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ae && a.mode & 1) {
          var w = mp(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              gp(w, s, a, i, t),
              od(Yn(l, a));
            break e;
          }
        }
        (i = l = Yn(l, a)),
          Ee !== 4 && (Ee = 2),
          Mo === null ? (Mo = [i]) : Mo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = yg(i, l, t);
              lp(i, p);
              break e;
            case 1:
              a = l;
              var g = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (vr === null || !vr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = vg(i, a, t);
                lp(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dg(r);
    } catch (C) {
      (t = C), Ce === r && r !== null && (Ce = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Lg() {
  var e = ea.current;
  return (ea.current = Js), e === null ? Js : e;
}
function Cd() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Te === null || (!(Zr & 268435455) && !(Ra & 268435455)) || cr(Te, je);
}
function na(e, t) {
  var r = Y;
  Y |= 2;
  var n = Lg();
  (Te !== e || je !== t) && ((Ut = null), Ur(e, t));
  do
    try {
      _b();
      break;
    } catch (o) {
      jg(e, o);
    }
  while (!0);
  if ((sd(), (Y = r), (ea.current = n), Ce !== null)) throw Error(z(261));
  return (Te = null), (je = 0), Ee;
}
function _b() {
  for (; Ce !== null; ) Ig(Ce);
}
function Pb() {
  for (; Ce !== null && !q1(); ) Ig(Ce);
}
function Ig(e) {
  var t = Bg(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dg(e) : (Ce = t),
    (xd.current = null);
}
function Dg(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = xb(r, t)), r !== null)) {
        (r.flags &= 32767), (Ce = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (Ce = null);
        return;
      }
    } else if (((r = vb(r, t, ot)), r !== null)) {
      Ce = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function Ir(e, t, r) {
  var n = Q,
    o = yt.transition;
  try {
    (yt.transition = null), (Q = 1), Eb(e, t, r, n);
  } finally {
    (yt.transition = o), (Q = n);
  }
  return null;
}
function Eb(e, t, r, n) {
  do Dn();
  while (fr !== null);
  if (Y & 6) throw Error(z(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (ax(e, i),
    e === Te && ((Ce = Te = null), (je = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ts ||
      ((ts = !0),
      Ng(Vs, function () {
        return Dn(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = yt.transition), (yt.transition = null);
    var s = Q;
    Q = 1;
    var a = Y;
    (Y |= 4),
      (xd.current = null),
      Sb(e, r),
      Rg(r, e),
      Yx(Lu),
      (Ns = !!ju),
      (Lu = ju = null),
      (e.current = r),
      kb(r),
      Z1(),
      (Y = a),
      (Q = s),
      (yt.transition = i);
  } else e.current = r;
  if (
    (ts && ((ts = !1), (fr = e), (ra = o)),
    (i = e.pendingLanes),
    i === 0 && (vr = null),
    tx(r.stateNode),
    et(e, ge()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (ta) throw ((ta = !1), (e = tc), (tc = null), e);
  return (
    ra & 1 && e.tag !== 0 && Dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === rc ? jo++ : ((jo = 0), (rc = e))) : (jo = 0),
    Ar(),
    null
  );
}
function Dn() {
  if (fr !== null) {
    var e = y0(ra),
      t = yt.transition,
      r = Q;
    try {
      if (((yt.transition = null), (Q = 16 > e ? 16 : e), fr === null))
        var n = !1;
      else {
        if (((e = fr), (fr = null), (ra = 0), Y & 6)) throw Error(z(331));
        var o = Y;
        for (Y |= 4, j = e.current; j !== null; ) {
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
                      $o(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling,
                        h = c.return;
                      if ((zg(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (j = f);
                        break;
                      }
                      j = h;
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
                    $o(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (j = p);
                break e;
              }
              j = i.return;
            }
        }
        var g = e.current;
        for (j = g; j !== null; ) {
          s = j;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (j = y);
          else
            e: for (s = g; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Aa(9, a);
                  }
                } catch (C) {
                  pe(a, a.return, C);
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
          ((Y = o), Ar(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        )
          try {
            Vt.onPostCommitFiberRoot(ka, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (Q = r), (yt.transition = t);
    }
  }
  return !1;
}
function Tp(e, t, r) {
  (t = Yn(r, t)),
    (t = yg(e, t, 1)),
    (e = yr(e, t, 1)),
    (t = Ge()),
    e !== null && (bi(e, 1, t), et(e, t));
}
function pe(e, t, r) {
  if (e.tag === 3) Tp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (vr === null || !vr.has(n)))
        ) {
          (e = Yn(r, e)),
            (e = vg(t, e, 1)),
            (t = yr(t, e, 1)),
            (e = Ge()),
            t !== null && (bi(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zb(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Te === e &&
      (je & r) === r &&
      (Ee === 4 || (Ee === 3 && (je & 130023424) === je && 500 > ge() - Sd)
        ? Ur(e, 0)
        : (bd |= r)),
    et(e, t);
}
function Vg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ui), (Ui <<= 1), !(Ui & 130023424) && (Ui = 4194304))
      : (t = 1));
  var r = Ge();
  (e = tr(e, t)), e !== null && (bi(e, t, r), et(e, r));
}
function Tb(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Vg(e, r);
}
function Ab(e, t) {
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
      throw Error(z(314));
  }
  n !== null && n.delete(t), Vg(e, r);
}
var Bg;
Bg = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) Qe = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Qe = !1), yb(e, t, r);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), ae && t.flags & 1048576 && W0(t, Ys, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      ks(e, t), (e = t.pendingProps);
      var o = Wn(t, We.current);
      In(t, r), (o = hd(null, t, n, e, o, r));
      var i = md();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(n) ? ((i = !0), Us(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ud(t),
            (o.updater = Ta),
            (t.stateNode = o),
            (o._reactInternals = t),
            Hu(t, n, e, r),
            (t = Yu(null, t, n, !0, i, r)))
          : ((t.tag = 0), ae && i && rd(t), Ue(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (ks(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = $b(n)),
          (e = wt(n, e)),
          o)
        ) {
          case 0:
            t = Gu(null, t, n, e, r);
            break e;
          case 1:
            t = xp(null, t, n, e, r);
            break e;
          case 11:
            t = yp(null, t, n, e, r);
            break e;
          case 14:
            t = vp(null, t, n, wt(n.type, e), r);
            break e;
        }
        throw Error(z(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : wt(n, o)),
        Gu(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : wt(n, o)),
        xp(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((kg(t), e === null)) throw Error(z(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          K0(e, t),
          Qs(t, n, null, r);
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
            (o = Yn(Error(z(423)), t)), (t = bp(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = Yn(Error(z(424)), t)), (t = bp(e, t, n, r, o));
            break e;
          } else
            for (
              it = gr(t.stateNode.containerInfo.firstChild),
                st = t,
                ae = !0,
                _t = null,
                r = Y0(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Hn(), n === o)) {
            t = rr(e, t, r);
            break e;
          }
          Ue(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Q0(t),
        e === null && Ou(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Iu(n, o) ? (s = null) : i !== null && Iu(n, i) && (t.flags |= 32),
        Sg(e, t),
        Ue(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && Ou(t), null;
    case 13:
      return wg(e, t, r);
    case 4:
      return (
        cd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Un(t, null, n, r)) : Ue(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : wt(n, o)),
        yp(e, t, n, o, r)
      );
    case 7:
      return Ue(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          J(Xs, n._currentValue),
          (n._currentValue = s),
          i !== null)
        )
          if (At(i.value, s)) {
            if (i.children === o.children && !Ze.current) {
              t = rr(e, t, r);
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
                      (l = Qt(-1, r & -r)), (l.tag = 2);
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
                      Fu(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(z(341));
                (s.lanes |= r),
                  (a = s.alternate),
                  a !== null && (a.lanes |= r),
                  Fu(s, r, t),
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
        Ue(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        In(t, r),
        (o = vt(o)),
        (n = n(o)),
        (t.flags |= 1),
        Ue(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = wt(n, t.pendingProps)),
        (o = wt(n.type, o)),
        vp(e, t, n, o, r)
      );
    case 15:
      return xg(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : wt(n, o)),
        ks(e, t),
        (t.tag = 1),
        Je(n) ? ((e = !0), Us(t)) : (e = !1),
        In(t, r),
        gg(t, n, o),
        Hu(t, n, o, r),
        Yu(null, t, n, !0, e, r)
      );
    case 19:
      return Cg(e, t, r);
    case 22:
      return bg(e, t, r);
  }
  throw Error(z(156, t.tag));
};
function Ng(e, t) {
  return p0(e, t);
}
function Rb(e, t, r, n) {
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
function gt(e, t, r, n) {
  return new Rb(e, t, r, n);
}
function _d(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $b(e) {
  if (typeof e == "function") return _d(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hc)) return 11;
    if (e === Uc) return 14;
  }
  return 2;
}
function br(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = gt(e.tag, t, e.key, e.mode)),
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
function _s(e, t, r, n, o, i) {
  var s = 2;
  if (((n = e), typeof e == "function")) _d(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case vn:
        return Gr(r.children, o, i, t);
      case Wc:
        (s = 8), (o |= 8);
        break;
      case hu:
        return (
          (e = gt(12, r, t, o | 2)), (e.elementType = hu), (e.lanes = i), e
        );
      case mu:
        return (e = gt(13, r, t, o)), (e.elementType = mu), (e.lanes = i), e;
      case gu:
        return (e = gt(19, r, t, o)), (e.elementType = gu), (e.lanes = i), e;
      case Qm:
        return $a(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xm:
              s = 10;
              break e;
            case Km:
              s = 9;
              break e;
            case Hc:
              s = 11;
              break e;
            case Uc:
              s = 14;
              break e;
            case sr:
              (s = 16), (n = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(s, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Gr(e, t, r, n) {
  return (e = gt(7, e, n, t)), (e.lanes = r), e;
}
function $a(e, t, r, n) {
  return (
    (e = gt(22, e, n, t)),
    (e.elementType = Qm),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, r) {
  return (e = gt(6, e, null, t)), (e.lanes = r), e;
}
function Nl(e, t, r) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mb(e, t, r, n, o) {
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
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Pd(e, t, r, n, o, i, s, a, l) {
  return (
    (e = new Mb(e, t, r, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ud(i),
    e
  );
}
function jb(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Og(e) {
  if (!e) return Cr;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Je(r)) return O0(e, r, t);
  }
  return t;
}
function Fg(e, t, r, n, o, i, s, a, l) {
  return (
    (e = Pd(r, n, !0, e, o, i, s, a, l)),
    (e.context = Og(null)),
    (r = e.current),
    (n = Ge()),
    (o = xr(r)),
    (i = Qt(n, o)),
    (i.callback = t ?? null),
    yr(r, i, o),
    (e.current.lanes = o),
    bi(e, o, n),
    et(e, n),
    e
  );
}
function Ma(e, t, r, n) {
  var o = t.current,
    i = Ge(),
    s = xr(o);
  return (
    (r = Og(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Qt(i, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = yr(o, t, s)),
    e !== null && (zt(e, o, s, i), xs(e, o, s)),
    s
  );
}
function oa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ap(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ed(e, t) {
  Ap(e, t), (e = e.alternate) && Ap(e, t);
}
function Lb() {
  return null;
}
var Wg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function zd(e) {
  this._internalRoot = e;
}
ja.prototype.render = zd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Ma(e, t, null, null);
};
ja.prototype.unmount = zd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jr(function () {
      Ma(null, e, null, null);
    }),
      (t[er] = null);
  }
};
function ja(e) {
  this._internalRoot = e;
}
ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = b0();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < ur.length && t !== 0 && t < ur[r].priority; r++);
    ur.splice(r, 0, e), r === 0 && k0(e);
  }
};
function Td(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function La(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rp() {}
function Ib(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = oa(s);
        i.call(u);
      };
    }
    var s = Fg(t, n, e, 0, null, !1, !1, "", Rp);
    return (
      (e._reactRootContainer = s),
      (e[er] = s.current),
      Zo(e.nodeType === 8 ? e.parentNode : e),
      Jr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = oa(l);
      a.call(u);
    };
  }
  var l = Pd(e, 0, !1, null, null, !1, !1, "", Rp);
  return (
    (e._reactRootContainer = l),
    (e[er] = l.current),
    Zo(e.nodeType === 8 ? e.parentNode : e),
    Jr(function () {
      Ma(t, l, r, n);
    }),
    l
  );
}
function Ia(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = oa(s);
        a.call(l);
      };
    }
    Ma(t, s, e, o);
  } else s = Ib(r, t, e, o, n);
  return oa(s);
}
v0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = So(t.pendingLanes);
        r !== 0 &&
          (Xc(t, r | 1), et(t, ge()), !(Y & 6) && ((Xn = ge() + 500), Ar()));
      }
      break;
    case 13:
      Jr(function () {
        var n = tr(e, 1);
        if (n !== null) {
          var o = Ge();
          zt(n, e, 1, o);
        }
      }),
        Ed(e, 1);
  }
};
Kc = function (e) {
  if (e.tag === 13) {
    var t = tr(e, 134217728);
    if (t !== null) {
      var r = Ge();
      zt(t, e, 134217728, r);
    }
    Ed(e, 134217728);
  }
};
x0 = function (e) {
  if (e.tag === 13) {
    var t = xr(e),
      r = tr(e, t);
    if (r !== null) {
      var n = Ge();
      zt(r, e, t, n);
    }
    Ed(e, t);
  }
};
b0 = function () {
  return Q;
};
S0 = function (e, t) {
  var r = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = r;
  }
};
Pu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((xu(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
            var o = Pa(n);
            if (!o) throw Error(z(90));
            Zm(n), xu(n, o);
          }
        }
      }
      break;
    case "textarea":
      e0(e, r);
      break;
    case "select":
      (t = r.value), t != null && $n(e, !!r.multiple, t, !1);
  }
};
a0 = kd;
l0 = Jr;
var Db = { usingClientEntryPoint: !1, Events: [ki, kn, Pa, i0, s0, kd] },
  mo = {
    findFiberByHostInstance: Br,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Vb = {
    bundleType: mo.bundleType,
    version: mo.version,
    rendererPackageName: mo.rendererPackageName,
    rendererConfig: mo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = d0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mo.findFiberByHostInstance || Lb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rs.isDisabled && rs.supportsFiber)
    try {
      (ka = rs.inject(Vb)), (Vt = rs);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Db;
ct.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Td(t)) throw Error(z(200));
  return jb(e, t, null, r);
};
ct.createRoot = function (e, t) {
  if (!Td(e)) throw Error(z(299));
  var r = !1,
    n = "",
    o = Wg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pd(e, 1, !1, null, null, r, !1, n, o)),
    (e[er] = t.current),
    Zo(e.nodeType === 8 ? e.parentNode : e),
    new zd(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = d0(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
  return Jr(e);
};
ct.hydrate = function (e, t, r) {
  if (!La(t)) throw Error(z(200));
  return Ia(null, e, t, !0, r);
};
ct.hydrateRoot = function (e, t, r) {
  if (!Td(e)) throw Error(z(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    s = Wg;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = Fg(t, null, e, 1, r ?? null, o, !1, i, s)),
    (e[er] = t.current),
    Zo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new ja(t);
};
ct.render = function (e, t, r) {
  if (!La(t)) throw Error(z(200));
  return Ia(null, e, t, !1, r);
};
ct.unmountComponentAtNode = function (e) {
  if (!La(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Jr(function () {
        Ia(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[er] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = kd;
ct.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!La(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Ia(e, t, r, !1, n);
};
ct.version = "18.3.1-next-f1338f8080-20240426";
function Hg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg);
    } catch (e) {
      console.error(e);
    }
}
Hg(), (Hm.exports = ct);
var Ad = Hm.exports,
  $p = Ad;
(fu.createRoot = $p.createRoot), (fu.hydrateRoot = $p.hydrateRoot);
var Vn = (e) => typeof e == "number",
  Ci = (e) => Object.prototype.toString.call(e) === "[object String]",
  _i = (e) => typeof e > "u" && e === void 0,
  Bb = (e) => e === null,
  ve = (e) =>
    e !== null && (typeof e == "object" || typeof e == "function") && !U(e),
  U = (e) => Array.isArray(e),
  en = (e) => typeof e == "function",
  Nb = (e) => /[0-9].*[px|rem|em|%|vw|vh]$/.test(e);
function Fr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class Ob extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var wo = Ob;
function ai(e) {
  if (typeof e != "string") throw new wo(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = Kb.test(e) ? Hb(e) : e;
  const r = Ub.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(li(a, 2), 16)),
      parseInt(li(s[3] || "f", 2), 16) / 255,
    ];
  }
  const n = Gb.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || "ff", 16) / 255,
    ];
  }
  const o = Yb.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || "1"),
    ];
  }
  const i = Xb.exec(t);
  if (i) {
    const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Fr(0, 100, a) !== a) throw new wo(e);
    if (Fr(0, 100, l) !== l) throw new wo(e);
    return [...Qb(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new wo(e);
}
function Fb(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Mp = (e) => parseInt(e.replace(/_/g, ""), 36),
  Wb =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = Mp(t.substring(0, 3)),
          n = Mp(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - n.length; i++) o += "0";
        return (e[r] = `${o}${n}`), e;
      }, {});
function Hb(e) {
  const t = e.toLowerCase().trim(),
    r = Wb[Fb(t)];
  if (!r) throw new wo(e);
  return `#${r}`;
}
const li = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  Ub = new RegExp(`^#${li("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  Gb = new RegExp(`^#${li("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  Yb = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${li(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i",
  ),
  Xb =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  Kb = /^[a-z]+$/i,
  jp = (e) => Math.round(e * 255),
  Qb = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(jp);
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
      h = u + c;
    return [d, f, h].map(jp);
  };
function Ug(e, t, r, n) {
  return `rgba(${Fr(0, 255, e).toFixed()}, ${Fr(0, 255, t).toFixed()}, ${Fr(0, 255, r).toFixed()}, ${parseFloat(Fr(0, 1, n).toFixed(3))})`;
}
function Gg(e, t, r) {
  const n = (C, _) => (_ === 3 ? C : C / 255),
    [o, i, s, a] = ai(e).map(n),
    [l, u, c, d] = ai(t).map(n),
    f = d - a,
    h = r * 2 - 1,
    v = ((h * f === -1 ? h : h + f / (1 + h * f)) + 1) / 2,
    w = 1 - v,
    p = (o * w + l * v) * 255,
    g = (i * w + u * v) * 255,
    y = (s * w + c * v) * 255,
    k = d * r + a * (1 - r);
  return Ug(p, g, y, k);
}
function qb(e, t) {
  const [r, n, o, i] = ai(e);
  return Ug(r, n, o, i - t);
}
function Lo(e) {
  const [t, r, n, o] = ai(e);
  let i = (s) => {
    const a = Fr(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
var Lp = () => {},
  qe = (e, ...t) => (en(e) ? e(...t) : e),
  Ne =
    (...e) =>
    (t, ...r) => {
      e.some(
        (n) => (
          n == null || n(t, ...r), t == null ? void 0 : t.defaultPrevented
        ),
      );
    },
  Zb =
    (...e) =>
    (...t) =>
      e.forEach((r) => (r == null ? void 0 : r(...t))),
  on = ({
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
  Yr =
    globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  Pi = (e) => S.Children.toArray(e).filter((t) => S.isValidElement(t)),
  Jb = (e) => S.isValidElement(e) || Ci(e) || Vn(e),
  Ol = (e, ...t) =>
    e.find((r) => t.some((n) => r.type === n))
      ? e.sort((r, n) =>
          t.some((o) => r.type === o)
            ? -1
            : t.some((o) => n.type === o)
              ? 1
              : 0,
        )
      : [void 0, ...e],
  G = (...e) => e.filter(Boolean).join(" "),
  mn = (e, t) => {
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
  ia =
    (...e) =>
    (t) => {
      e.forEach((r) => {
        mn(r, t);
      });
    },
  Sr = (e, t = []) => {
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
  sa = (e, t) => {
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
  eS = 0,
  tS = (e) => `${e}-${++eS}-${new Date().getTime()}`,
  Rd = () =>
    !!(typeof window < "u" && window.document && window.document.createElement),
  rS = () => {
    var e, t;
    return (t = (e = navigator.userAgentData) == null ? void 0 : e.platform) !=
      null
      ? t
      : navigator.platform;
  },
  nS = (e) => Rd() && e.test(rS()),
  oS = () => nS(/^mac/i),
  iS = (e) => {
    if (Vn(e)) return e;
    if (_i(e)) return 0;
    if (e.includes("px")) return parseFloat(e);
    const t = Rd();
    let r = 16;
    if (t) {
      const n = window.getComputedStyle(document.documentElement),
        o = parseFloat(n.fontSize);
      isNaN(o) || (r = o);
    }
    return parseFloat(e) * r;
  },
  ke = (e) => (e ? "" : void 0),
  ns = (e) => (e ? !0 : void 0),
  sS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  I = (e) => e === "gray" || e === "neutral",
  ye = (e) => e === "yellow" || e === "cyan" || e === "lime",
  M =
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
        return U(c) ? Lo(String(n !== "dark" ? c[0] : c[1])) : Lo(String(c));
      } catch {
        try {
          return Lo(t);
        } catch {
          return "#000000";
        }
      }
    },
  Se = (e, t) => (r, n) => {
    const o = M(e, e)(r, n);
    return Lo(Gg(o, "#fff", t / 100));
  },
  Z = (e, t) => (r, n) => {
    const o = M(e, e)(r, n);
    return Lo(Gg(o, "#000", t / 100));
  },
  Pe = (e, t) => (r, n) => {
    const o = M(e, e)(r, n);
    return qb(o, 1 - t);
  },
  aS = ({ string: e, colors: t } = {}) => {
    const r = lS();
    return e && t ? cS(e, t) : e && !t ? uS(e) : t && !e ? dS(t) : r;
  },
  lS = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")}`,
  uS = (e) => {
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
  cS = (e, t) => {
    let r = 0;
    if (e.length === 0) return t[0];
    for (let n = 0; n < e.length; n += 1)
      (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
    return (r = ((r % t.length) + t.length) % t.length), t[r];
  },
  dS = (e) => e[Math.floor(Math.random() * e.length)],
  fS = (e) => {
    const [t, r, n] = ai(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  pS = (e) => (t, r) => {
    const n = t ? M(e)(t, r) : e;
    return fS(n) < 128 ? "dark" : "light";
  },
  hS = (e) => (t, r) => pS(e)(t, r) === "light",
  Yg = (e, t) => {
    if (!t.length) return e;
    const [r, ...n] = t;
    if (n.length === 0 && r in e) {
      const { [r]: o, ...i } = e;
      return i;
    }
    return e[r] && ve(e[r]) ? { ...e, [r]: Yg(e[r], n) } : e;
  },
  Ei = (e, t) =>
    t.reduce((r, n) => {
      const o = Ci(n) ? n.split(".") : [];
      return Yg(r, o);
    }, e),
  ic = (e, t, r = "__fallback") =>
    t.reduce((n, o) => {
      const i = Ci(o) ? o.split(".") : [];
      if (!i.length) return n;
      const s = L(e, o, r);
      return (
        s === r ||
          (n = he(
            n,
            i.reduceRight((a, l) => ({ [l]: l === i.at(-1) ? s : a }), {}),
          )),
        n
      );
    }, {}),
  mS = (e, t) => {
    const r = {},
      n = {};
    for (const [o, i] of Object.entries(e))
      t.includes(o) ? (r[o] = i) : (n[o] = i);
    return [r, n];
  },
  Xg = (e, t) => {
    const r = {};
    return (
      Object.entries(e).forEach(([n, o]) => {
        t(n, o, e) && (r[n] = o);
      }),
      r
    );
  },
  Da = (e) => Xg(e, (t, r) => r != null),
  he = (e, t, r = !1) => {
    let n = Object.assign({}, e);
    if (ve(t))
      if (ve(e))
        for (const [o, i] of Object.entries(t)) {
          const s = e[o];
          r && U(i) && U(s)
            ? (n[o] = s.concat(...i))
            : !en(i) && ve(i) && e.hasOwnProperty(o)
              ? (n[o] = he(s, i, r))
              : Object.assign(n, { [o]: i });
        }
      else n = t;
    return n;
  },
  sc = (e, t = 1 / 0, r = []) =>
    (!ve(e) && !U(e)) || !t
      ? e
      : Object.entries(e).reduce(
          (n, [o, i]) => (
            ve(i) && !Object.keys(i).some((s) => r.includes(s))
              ? Object.entries(sc(i, t - 1, r)).forEach(([s, a]) => {
                  n[`${o}.${s}`] = a;
                })
              : (n[o] = i),
            n
          ),
          {},
        ),
  gS = (e) => e.reduce((t, [r, n]) => ((t[r] = n), t), {}),
  Kg = (e) => Object.keys(e),
  Co = (e, t) =>
    U(e)
      ? e.map(t)
      : ve(e)
        ? Object.entries(e).reduce((r, [n, o]) => ((r[n] = t(o)), r), {})
        : t(e),
  yS = (e, t, r, n) => {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
    return e === void 0 ? r : e;
  },
  vS = (e) => {
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
  L = vS(yS),
  xS = (e, ...t) => {
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
  bS = (e) => e.default || e,
  SS = (e, t = "") => e.replace(/\s+/g, t),
  kS = (e) => {
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
  Ip = (e) =>
    e
      .toLowerCase()
      .replace(/[_-](.)/g, (t, r) => r.toUpperCase())
      .replace(/^(.)/, (t, r) => r.toUpperCase()),
  wS = (e) =>
    e
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .toLowerCase()
      .replace(/^-/, ""),
  Va = (e, ...t) => t.join(` ${e} `).replace(/calc/g, ""),
  Dp = (...e) => `calc(${Va("+", ...e)})`,
  Vp = (...e) => `calc(${Va("-", ...e)})`,
  ac = (...e) => `calc(${Va("*", ...e)})`,
  Bp = (...e) => `calc(${Va("/", ...e)})`,
  Np = (e) =>
    e != null && !isNaN(parseFloat(e.toString()))
      ? String(e).startsWith("-")
        ? String(e).slice(1)
        : `-${e}`
      : ac(e, -1),
  Pt = Object.assign(
    (e) => ({
      add: (...t) => Pt(Dp(e, ...t)),
      subtract: (...t) => Pt(Vp(e, ...t)),
      multiply: (...t) => Pt(ac(e, ...t)),
      divide: (...t) => Pt(Bp(e, ...t)),
      negate: () => Pt(Np(e)),
      toString: () => e.toString(),
    }),
    { add: Dp, subtract: Vp, multiply: ac, divide: Bp, negate: Np },
  ),
  CS = { getDocument: () => document, getWindow: () => window },
  _S = S.createContext(CS),
  Qg = ({ children: e, environment: t, disabled: r }) => {
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
    return b.jsxs(_S.Provider, {
      value: o,
      children: [
        e,
        i ? b.jsx("span", { id: "__ui_dev", hidden: !0, ref: n }) : null,
      ],
    });
  };
Qg.displayName = "EnvironmentProvider";
function PS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function ES(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var qg = (function () {
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
          this._insertTag(ES(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = PS(o);
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
  Be = "-ms-",
  aa = "-moz-",
  X = "-webkit-",
  Zg = "comm",
  $d = "rule",
  Md = "decl",
  zS = "@import",
  Jg = "@keyframes",
  TS = "@layer",
  AS = Math.abs,
  Ba = String.fromCharCode,
  RS = Object.assign;
function $S(e, t) {
  return Me(e, 0) ^ 45
    ? (((((((t << 2) ^ Me(e, 0)) << 2) ^ Me(e, 1)) << 2) ^ Me(e, 2)) << 2) ^
        Me(e, 3)
    : 0;
}
function ey(e) {
  return e.trim();
}
function MS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, r) {
  return e.replace(t, r);
}
function lc(e, t) {
  return e.indexOf(t);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function ui(e, t, r) {
  return e.slice(t, r);
}
function jt(e) {
  return e.length;
}
function jd(e) {
  return e.length;
}
function os(e, t) {
  return t.push(e), e;
}
function jS(e, t) {
  return e.map(t).join("");
}
var Na = 1,
  Kn = 1,
  ty = 0,
  tt = 0,
  we = 0,
  no = "";
function Oa(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Na,
    column: Kn,
    length: s,
    return: "",
  };
}
function go(e, t) {
  return RS(Oa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function LS() {
  return we;
}
function IS() {
  return (
    (we = tt > 0 ? Me(no, --tt) : 0), Kn--, we === 10 && ((Kn = 1), Na--), we
  );
}
function at() {
  return (
    (we = tt < ty ? Me(no, tt++) : 0), Kn++, we === 10 && ((Kn = 1), Na++), we
  );
}
function Nt() {
  return Me(no, tt);
}
function Ps() {
  return tt;
}
function zi(e, t) {
  return ui(no, e, t);
}
function ci(e) {
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
function ry(e) {
  return (Na = Kn = 1), (ty = jt((no = e))), (tt = 0), [];
}
function ny(e) {
  return (no = ""), e;
}
function Es(e) {
  return ey(zi(tt - 1, uc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function DS(e) {
  for (; (we = Nt()) && we < 33; ) at();
  return ci(e) > 2 || ci(we) > 3 ? "" : " ";
}
function VS(e, t) {
  for (
    ;
    --t &&
    at() &&
    !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97));

  );
  return zi(e, Ps() + (t < 6 && Nt() == 32 && at() == 32));
}
function uc(e) {
  for (; at(); )
    switch (we) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uc(we);
        break;
      case 40:
        e === 41 && uc(e);
        break;
      case 92:
        at();
        break;
    }
  return tt;
}
function BS(e, t) {
  for (; at() && e + we !== 57; ) if (e + we === 84 && Nt() === 47) break;
  return "/*" + zi(t, tt - 1) + "*" + Ba(e === 47 ? e : at());
}
function NS(e) {
  for (; !ci(Nt()); ) at();
  return zi(e, tt);
}
function OS(e) {
  return ny(zs("", null, null, null, [""], (e = ry(e)), 0, [0], e));
}
function zs(e, t, r, n, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      h = 0,
      x = 0,
      v = 1,
      w = 1,
      p = 1,
      g = 0,
      y = "",
      k = o,
      C = i,
      _ = n,
      P = y;
    w;

  )
    switch (((x = g), (g = at()))) {
      case 40:
        if (x != 108 && Me(P, d - 1) == 58) {
          lc((P += K(Es(g), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Es(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += DS(x);
        break;
      case 92:
        P += VS(Ps() - 1, 7);
        continue;
      case 47:
        switch (Nt()) {
          case 42:
          case 47:
            os(FS(BS(at(), Ps()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * v:
        a[u++] = jt(P) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            p == -1 && (P = K(P, /\f/g, "")),
              h > 0 &&
                jt(P) - d &&
                os(
                  h > 32
                    ? Fp(P + ";", n, r, d - 1)
                    : Fp(K(P, " ", "") + ";", n, r, d - 2),
                  l,
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (os((_ = Op(P, t, r, u, c, o, a, y, (k = []), (C = []), d)), i),
              g === 123)
            )
              if (c === 0) zs(P, t, _, _, k, i, d, a, C);
              else
                switch (f === 99 && Me(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zs(
                      e,
                      _,
                      _,
                      n && os(Op(e, _, _, 0, 0, o, a, y, o, (k = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      n ? k : C,
                    );
                    break;
                  default:
                    zs(P, _, _, _, [""], C, 0, a, C);
                }
        }
        (u = c = h = 0), (v = p = 1), (y = P = ""), (d = s);
        break;
      case 58:
        (d = 1 + jt(P)), (h = x);
      default:
        if (v < 1) {
          if (g == 123) --v;
          else if (g == 125 && v++ == 0 && IS() == 125) continue;
        }
        switch (((P += Ba(g)), g * v)) {
          case 38:
            p = c > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (jt(P) - 1) * p), (p = 1);
            break;
          case 64:
            Nt() === 45 && (P += Es(at())),
              (f = Nt()),
              (c = d = jt((y = P += NS(Ps())))),
              g++;
            break;
          case 45:
            x === 45 && jt(P) == 2 && (v = 0);
        }
    }
  return i;
}
function Op(e, t, r, n, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = jd(f), x = 0, v = 0, w = 0;
    x < n;
    ++x
  )
    for (var p = 0, g = ui(e, d + 1, (d = AS((v = s[x])))), y = e; p < h; ++p)
      (y = ey(v > 0 ? f[p] + " " + g : K(g, /&\f/g, f[p]))) && (l[w++] = y);
  return Oa(e, t, r, o === 0 ? $d : a, l, u, c);
}
function FS(e, t, r) {
  return Oa(e, t, r, Zg, Ba(LS()), ui(e, 2, -2), 0);
}
function Fp(e, t, r, n) {
  return Oa(e, t, r, Md, ui(e, 0, n), ui(e, n + 1, -1), n);
}
function Bn(e, t) {
  for (var r = "", n = jd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function WS(e, t, r, n) {
  switch (e.type) {
    case TS:
      if (e.children.length) break;
    case zS:
    case Md:
      return (e.return = e.return || e.value);
    case Zg:
      return "";
    case Jg:
      return (e.return = e.value + "{" + Bn(e.children, n) + "}");
    case $d:
      e.value = e.props.join(",");
  }
  return jt((r = Bn(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function HS(e) {
  var t = jd(e);
  return function (r, n, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](r, n, o, i) || "";
    return s;
  };
}
function US(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Wp = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function oy(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var GS = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Nt()), o === 38 && i === 12 && (r[n] = 1), !ci(i);

    )
      at();
    return zi(t, tt);
  },
  YS = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (ci(o)) {
        case 0:
          o === 38 && Nt() === 12 && (r[n] = 1), (t[n] += GS(tt - 1, r, n));
          break;
        case 2:
          t[n] += Es(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Nt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ba(o);
      }
    while ((o = at()));
    return t;
  },
  XS = function (t, r) {
    return ny(YS(ry(t), r));
  },
  Hp = new WeakMap(),
  KS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Hp.get(n)) &&
        !o
      ) {
        Hp.set(t, !0);
        for (
          var i = [], s = XS(r, i), a = n.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  QS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function iy(e, t) {
  switch ($S(e, t)) {
    case 5103:
      return X + "print-" + e + e;
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
      return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + aa + e + Be + e + e;
    case 6828:
    case 4268:
      return X + e + Be + e + e;
    case 6165:
      return X + e + Be + "flex-" + e + e;
    case 5187:
      return (
        X + e + K(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + Be + "flex-$1$2") + e
      );
    case 5443:
      return X + e + Be + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        X +
        e +
        Be +
        "flex-line-pack" +
        K(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return X + e + Be + K(e, "shrink", "negative") + e;
    case 5292:
      return X + e + Be + K(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        X +
        "box-" +
        K(e, "-grow", "") +
        X +
        e +
        Be +
        K(e, "grow", "positive") +
        e
      );
    case 4554:
      return X + K(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return (
        K(K(K(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return (
        K(
          K(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + Be + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        X +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, X + "$1$2") + e;
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
      if (jt(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45) break;
          case 102:
            return (
              K(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  X +
                  "$2-$3$1" +
                  aa +
                  (Me(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~lc(e, "stretch")
              ? iy(K(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Me(e, t + 1) !== 115) break;
    case 6444:
      switch (Me(e, jt(e) - 3 - (~lc(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + X) + e;
        case 101:
          return (
            K(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                X +
                (Me(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                X +
                "$2$3$1" +
                Be +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Me(e, t + 11)) {
        case 114:
          return X + e + Be + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + Be + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + Be + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + Be + e + e;
  }
  return e;
}
var qS = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Md:
          t.return = iy(t.value, t.length);
          break;
        case Jg:
          return Bn([go(t, { value: K(t.value, "@", "@" + X) })], o);
        case $d:
          if (t.length)
            return jS(t.props, function (i) {
              switch (MS(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Bn(
                    [go(t, { props: [K(i, /:(read-\w+)/, ":" + aa + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return Bn(
                    [
                      go(t, {
                        props: [K(i, /:(plac\w+)/, ":" + X + "input-$1")],
                      }),
                      go(t, { props: [K(i, /:(plac\w+)/, ":" + aa + "$1")] }),
                      go(t, { props: [K(i, /:(plac\w+)/, Be + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  ZS = [qS],
  sy = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (v) {
        var w = v.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ZS,
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
      u = [KS, QS];
    {
      var c,
        d = [
          WS,
          US(function (v) {
            c.insert(v);
          }),
        ],
        f = HS(u.concat(o, d)),
        h = function (w) {
          return Bn(OS(w), f);
        };
      l = function (w, p, g, y) {
        (c = g),
          h(w ? w + "{" + p.styles + "}" : p.styles),
          y && (x.inserted[p.name] = !0);
      };
    }
    var x = {
      key: r,
      sheet: new qg({
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
function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    la.apply(null, arguments)
  );
}
var ay = { exports: {} },
  q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ae = typeof Symbol == "function" && Symbol.for,
  Ld = Ae ? Symbol.for("react.element") : 60103,
  Id = Ae ? Symbol.for("react.portal") : 60106,
  Fa = Ae ? Symbol.for("react.fragment") : 60107,
  Wa = Ae ? Symbol.for("react.strict_mode") : 60108,
  Ha = Ae ? Symbol.for("react.profiler") : 60114,
  Ua = Ae ? Symbol.for("react.provider") : 60109,
  Ga = Ae ? Symbol.for("react.context") : 60110,
  Dd = Ae ? Symbol.for("react.async_mode") : 60111,
  Ya = Ae ? Symbol.for("react.concurrent_mode") : 60111,
  Xa = Ae ? Symbol.for("react.forward_ref") : 60112,
  Ka = Ae ? Symbol.for("react.suspense") : 60113,
  JS = Ae ? Symbol.for("react.suspense_list") : 60120,
  Qa = Ae ? Symbol.for("react.memo") : 60115,
  qa = Ae ? Symbol.for("react.lazy") : 60116,
  ek = Ae ? Symbol.for("react.block") : 60121,
  tk = Ae ? Symbol.for("react.fundamental") : 60117,
  rk = Ae ? Symbol.for("react.responder") : 60118,
  nk = Ae ? Symbol.for("react.scope") : 60119;
function ft(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ld:
        switch (((e = e.type), e)) {
          case Dd:
          case Ya:
          case Fa:
          case Ha:
          case Wa:
          case Ka:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ga:
              case Xa:
              case qa:
              case Qa:
              case Ua:
                return e;
              default:
                return t;
            }
        }
      case Id:
        return t;
    }
  }
}
function ly(e) {
  return ft(e) === Ya;
}
q.AsyncMode = Dd;
q.ConcurrentMode = Ya;
q.ContextConsumer = Ga;
q.ContextProvider = Ua;
q.Element = Ld;
q.ForwardRef = Xa;
q.Fragment = Fa;
q.Lazy = qa;
q.Memo = Qa;
q.Portal = Id;
q.Profiler = Ha;
q.StrictMode = Wa;
q.Suspense = Ka;
q.isAsyncMode = function (e) {
  return ly(e) || ft(e) === Dd;
};
q.isConcurrentMode = ly;
q.isContextConsumer = function (e) {
  return ft(e) === Ga;
};
q.isContextProvider = function (e) {
  return ft(e) === Ua;
};
q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ld;
};
q.isForwardRef = function (e) {
  return ft(e) === Xa;
};
q.isFragment = function (e) {
  return ft(e) === Fa;
};
q.isLazy = function (e) {
  return ft(e) === qa;
};
q.isMemo = function (e) {
  return ft(e) === Qa;
};
q.isPortal = function (e) {
  return ft(e) === Id;
};
q.isProfiler = function (e) {
  return ft(e) === Ha;
};
q.isStrictMode = function (e) {
  return ft(e) === Wa;
};
q.isSuspense = function (e) {
  return ft(e) === Ka;
};
q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Fa ||
    e === Ya ||
    e === Ha ||
    e === Wa ||
    e === Ka ||
    e === JS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qa ||
        e.$$typeof === Qa ||
        e.$$typeof === Ua ||
        e.$$typeof === Ga ||
        e.$$typeof === Xa ||
        e.$$typeof === tk ||
        e.$$typeof === rk ||
        e.$$typeof === nk ||
        e.$$typeof === ek))
  );
};
q.typeOf = ft;
ay.exports = q;
var ok = ay.exports,
  uy = ok,
  ik = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  sk = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  cy = {};
cy[uy.ForwardRef] = ik;
cy[uy.Memo] = sk;
var ak = !0;
function Vd(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var dy = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || ak === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  Bd = function (t, r, n) {
    dy(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function lk(e) {
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
var uk = {
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
  ck = /[A-Z]|^ms/g,
  dk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Up = function (t) {
    return t != null && typeof t != "boolean";
  },
  Fl = oy(function (e) {
    return fy(e) ? e : e.replace(ck, "-$&").toLowerCase();
  }),
  Gp = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(dk, function (n, o, i) {
            return (Lt = { name: o, styles: i, next: Lt }), o;
          });
    }
    return uk[t] !== 1 && !fy(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function di(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Lt = { name: r.name, styles: r.styles, next: Lt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Lt = { name: n.name, styles: n.styles, next: Lt }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return fk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Lt,
          s = r(e);
        return (Lt = i), di(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function fk(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += di(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (n += i + "{" + t[s] + "}")
          : Up(s) && (n += Fl(i) + ":" + Gp(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Up(s[a]) && (n += Fl(i) + ":" + Gp(i, s[a]) + ";");
      else {
        var l = di(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Fl(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Yp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Lt,
  Nn = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Lt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += di(n, r, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += di(n, r, t[a])), o && (i += s[a]);
    Yp.lastIndex = 0;
    for (var l = "", u; (u = Yp.exec(i)) !== null; ) l += "-" + u[1];
    var c = lk(i) + l;
    return { name: c, styles: i, next: Lt };
  },
  pk = function (t) {
    return t();
  },
  py = Pf.useInsertionEffect ? Pf.useInsertionEffect : !1,
  hk = py || pk,
  Xp = py || S.useLayoutEffect,
  hy = S.createContext(typeof HTMLElement < "u" ? sy({ key: "css" }) : null);
hy.Provider;
var my = function (t) {
    return S.forwardRef(function (r, n) {
      var o = S.useContext(hy);
      return t(r, o, n);
    });
  },
  fi = S.createContext({}),
  mk = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return la({}, t, r);
  },
  gk = Wp(function (e) {
    return Wp(function (t) {
      return mk(e, t);
    });
  }),
  yk = function (t) {
    var r = S.useContext(fi);
    return (
      t.theme !== r && (r = gk(r)(t.theme)),
      S.createElement(fi.Provider, { value: r }, t.children)
    );
  },
  Nd = my(function (e, t) {
    var r = e.styles,
      n = Nn([r], void 0, S.useContext(fi)),
      o = S.useRef();
    return (
      Xp(
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
      Xp(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && Bd(t, n.next, !0), s.tags.length)) {
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
function vk() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Nn(t);
}
var xk = function () {
    var t = vk.apply(void 0, arguments),
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
  bk = typeof Element < "u",
  Sk = typeof Map == "function",
  kk = typeof Set == "function",
  wk = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ts(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Ts(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (Sk && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Ts(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (kk && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (wk && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (bk && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !Ts(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ck = function (t, r) {
  try {
    return Ts(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Kp = $m(Ck);
function Qp(e, t) {
  if (e.inserted[t.name] === void 0) return e.insert("", t, e.sheet, !0);
}
function qp(e, t, r) {
  var n = [],
    o = Vd(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var _k = function (t) {
    var r = sy(t);
    (r.sheet.speedy = function (a) {
      this.isSpeedy = a;
    }),
      (r.compat = !0);
    var n = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = Nn(u, r.registered, void 0);
        return Bd(r, d, !1), r.key + "-" + d.name;
      },
      o = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = Nn(u, r.registered),
          f = "animation-" + d.name;
        return (
          Qp(r, {
            name: d.name,
            styles: "@keyframes " + f + "{" + d.styles + "}",
          }),
          f
        );
      },
      i = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        var d = Nn(u, r.registered);
        Qp(r, d);
      },
      s = function () {
        for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
          u[c] = arguments[c];
        return qp(r.registered, n, Pk(u));
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
      getRegisteredStyles: Vd.bind(null, r.registered),
      merge: qp.bind(null, r.registered, n),
    };
  },
  Pk = function e(t) {
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
_k({ key: "css" });
var Ek =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  zk = oy(function (e) {
    return (
      Ek.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Tk = zk,
  Ak = function (t) {
    return t !== "theme";
  },
  Zp = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Tk : Ak;
  },
  Jp = function (t, r, n) {
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
  Rk = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      dy(r, n, o),
      hk(function () {
        return Bd(r, n, o);
      }),
      null
    );
  },
  $k = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = Jp(t, r, n),
      l = a || Zp(o),
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
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var x = my(function (v, w, p) {
        var g = (u && v.as) || o,
          y = "",
          k = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var _ in v) C[_] = v[_];
          C.theme = S.useContext(fi);
        }
        typeof v.className == "string"
          ? (y = Vd(w.registered, k, v.className))
          : v.className != null && (y = v.className + " ");
        var P = Nn(d.concat(k), w.registered, C);
        (y += w.key + "-" + P.name), s !== void 0 && (y += " " + s);
        var E = u && a === void 0 ? Zp(g) : l,
          R = {};
        for (var T in v) (u && T === "as") || (E(T) && (R[T] = v[T]));
        return (
          (R.className = y),
          (R.ref = p),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(Rk, {
              cache: w,
              serialized: P,
              isStringTag: typeof g == "string",
            }),
            S.createElement(g, R),
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
          return e(v, la({}, r, w, { shouldForwardProp: Jp(x, w, !0) })).apply(
            void 0,
            d,
          );
        }),
        x
      );
    };
  },
  Mk = [
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
  cc = $k.bind();
Mk.forEach(function (e) {
  cc[e] = cc(e);
});
var eh = Rd() ? new qg({ key: "css", container: document.head }) : void 0,
  dc = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  th = [
    "rotate(var(--ui-rotate, 0))",
    "scaleX(var(--ui-scale-x, 1))",
    "scaleY(var(--ui-scale-y, 1))",
    "skewX(var(--ui-skew-x, 0))",
    "skewY(var(--ui-skew-y, 0))",
  ],
  jk = new Set(Object.values(dc)),
  gy = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  rh = (e) => Ci(e) && e.includes("(") && e.includes(")"),
  Lk = (e) => /^var\(--.+\)$/.test(e),
  Ik = (e) => {
    let t = parseFloat(e.toString());
    const r = e.toString().replace(String(t), "");
    return { isUnitless: !r, value: e, unit: r };
  },
  Wr = (e, t) => (r) => {
    const n = Ci(t) ? t.match(/fallback\(([^,)]+),?\s*([^]+)?\)/) : null,
      [, o, i] = n ?? [];
    o && (t = o);
    const s = `${e}.${t}`;
    return ve(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].ref : i ?? t;
  },
  fc = (e, t) => {
    var r;
    if (e == null || gy.has(e)) return e;
    if (!rh(e)) return `url('${e}')`;
    const o = /(^[a-z-A-Z]+)\((.*)\)/g,
      [, i, s] = (r = o.exec(e)) != null ? r : [];
    if (!i || !s) return e;
    const a = i.includes("-gradient") ? i : `${i}-gradient`,
      [l, ...u] = s
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);
    if (!u.length) return e;
    const c = l in dc ? dc[l] : l;
    u.unshift(c);
    const d = u.map((f) => {
      if (jk.has(f)) return f;
      const h = f.indexOf(" ");
      let [x, v] = h !== -1 ? [f.slice(0, h), f.slice(h + 1)] : [f];
      const w = rh(v) ? v : v && v.split(" "),
        p = `colors.${x}`;
      return (
        (x = p in t.__cssMap ? t.__cssMap[p].ref : x),
        w ? [x, ...(U(w) ? w : [w])].join(" ") : x
      );
    });
    return `${a}(${d.join(", ")})`;
  },
  Dk = (e) =>
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
  pc = (e, t, r) => {
    if (e == null || gy.has(e)) return e;
    if (ve(e)) {
      const {
          keyframes: n,
          animationDuration: o = "0s",
          animationTimingFunction: i = "ease",
          delay: s = "0s",
          iterationCount: a = "1",
          direction: l = "normal",
          fillMode: u = "none",
          playState: c = "running",
        } = r(Dk(e))(t),
        { name: d, styles: f } = xk(n);
      return (
        eh == null || eh.insert(f), `${d} ${o} ${i} ${s} ${a} ${l} ${u} ${c}`
      );
    } else
      return e.includes(",")
        ? ((e = e
            .split(",")
            .map((n) => ((n = n.trim()), (n = Wr("animations", n)(t)), n))
            .join(",")),
          e)
        : ((e = Wr("animations", e)(t)), e);
  },
  Vk = (e) =>
    e === "auto"
      ? [
          "translateX(var(--ui-translate-x, 0))",
          "translateY(var(--ui-translate-y, 0))",
          ...th,
        ].join(" ")
      : e === "auto-3d"
        ? [
            "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0)",
            ...th,
          ].join(" ")
        : e,
  Bk =
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
  Wl = (e) => (t, r) =>
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
          maxWidth: h,
          h: x,
          height: v,
          minH: w,
          minHeight: p,
          maxH: g,
          maxHeight: y,
          ...k
        },
      ) => {
        var C;
        if (
          (u ?? (u = l),
          d ?? (d = c),
          h ?? (h = f),
          v ?? (v = x),
          p ?? (p = w),
          y ?? (y = g),
          !s)
        ) {
          const P = Da({
            width: u,
            minWidth: d,
            maxWidth: h,
            height: v,
            minHeight: p,
            maxHeight: y,
            ...k,
          });
          s = Object.entries(P)
            .map(([E, R]) => ((R = Wr("sizes", R)(r)), `(${wS(E)}: ${R})`))
            .join(" and ");
        }
        const _ = `@${e} ${(C = o ?? i) != null ? C : ""} ${s}`;
        return (n[_] = a), n;
      },
      {},
    ),
  le =
    (e, t) =>
    (r = "light") =>
      r === "light" ? e : t,
  m = {
    var: (e, t) =>
      e.reduce((r, { __prefix: n, name: o, token: i, value: s }) => {
        var a, l;
        return (
          (o = `--${(l = n ?? ((a = t.__config.var) == null ? void 0 : a.prefix)) != null ? l : "ui"}-${o}`),
          ve(s)
            ? (s = Object.entries(s).reduce(
                (c, [d, f]) => ((c[d] = Wr(i, f)(t)), c),
                {},
              ))
            : U(s)
              ? (s = s.map((c) => Wr(i, c)(t)))
              : (s = Wr(i, s)(t)),
          (r[o] = s),
          r
        );
      }, {}),
    token: (e, t, r) => (n, o, i) => {
      var s;
      n = Wr(e, n)(o);
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
      const { isUnitless: t } = Ik(e);
      return t || Vn(e) ? `${e}px` : e;
    },
    deg: (e) =>
      Lk(e) || e == null
        ? e
        : (typeof e == "string" && !e.endsWith("deg")) || Vn(e)
          ? `${e}deg`
          : e,
    fraction:
      (e) =>
      (t, ...r) => (
        Vn(t) && t <= 1 && (t = `${t * 100}%`), e && (t = e(t, ...r)), t
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
    gradient: fc,
    animation: pc,
    transform: Vk,
    filter: Bk,
    media: Wl("media"),
    container: Wl("container"),
    supports: Wl("supports"),
  },
  W = (e) => S.forwardRef(e),
  As = (e, t) => {
    const r = ["@media screen"];
    return (
      e && r.push("and", `(min-width: ${e}px)`),
      t && r.push("and", `(max-width: ${t}px)`),
      r.length > 1 ? r.join(" ") : void 0
    );
  },
  Nk = (e, t) => {
    const r = t === "down";
    return Object.entries(e).map(([n, o], i, s) => {
      var a;
      const [, l] = (a = s[i + 1]) != null ? a : [];
      let u = r ? l : o,
        c = r ? o : l;
      n === "base" && (r ? (c = void 0) : (u = void 0)),
        r ? u && (u += 1) : c && (c -= 1);
      const d = As(void 0, c),
        f = As(u),
        h = As(u, c);
      return {
        breakpoint: n,
        minW: u,
        maxW: c,
        query: t === "down" ? d : f,
        maxWQuery: d,
        minWQuery: f,
        minMaxQuery: h,
      };
    });
  },
  Ok = (e, t) =>
    Object.fromEntries(
      Object.entries(e)
        .map(([r, n]) => [r, iS(n)])
        .sort((r, n) => (t === "down" ? n[1] - r[1] : r[1] - n[1])),
    ),
  Fk = (e, t = "down") => {
    if (!e) return;
    (e.base = t === "down" ? "9999px" : "0px"), (e = Ok(e, t));
    const r = Kg(e),
      n = Nk(e, t);
    return {
      keys: r,
      isResponsive: (i) => {
        const s = Object.keys(i);
        return s.length > 0 && s.every((a) => r.includes(a));
      },
      queries: n,
    };
  },
  _r = {
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
  Wk = Object.keys(_r),
  A = {
    accentColor: {
      properties: "accentColor",
      token: "colors",
      transform: m.token("colors"),
    },
    alignContent: !0,
    alignItems: !0,
    alignSelf: !0,
    alignTracks: !0,
    all: !0,
    animation: {
      properties: "animation",
      token: "animations",
      transform: m.token("animations", m.animation),
    },
    animationComposition: !0,
    animationDelay: !0,
    animationDirection: !0,
    animationDuration: {
      properties: "animationDuration",
      token: "transitions.duration",
      transform: m.token("transitions.duration"),
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
      transform: m.token("transitions.easing"),
    },
    appearance: !0,
    aspectRatio: !0,
    backfaceVisibility: {
      properties: "backfaceVisibility",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    background: {
      properties: "background",
      token: "colors",
      transform: m.token("colors"),
    },
    backgroundAttachment: !0,
    backgroundBlendMode: !0,
    backgroundClip: { properties: "backgroundClip", transform: m.bgClip },
    backgroundColor: {
      properties: "backgroundColor",
      token: "colors",
      transform: m.token("colors"),
    },
    backgroundImage: {
      properties: "backgroundImage",
      token: "gradients",
      transform: m.token("gradients", m.gradient),
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
      transform: m.token("sizes", m.fraction(m.px)),
    },
    border: {
      properties: "border",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderBlock: {
      properties: "borderBlock",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderBlockColor: {
      properties: "borderBlockColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderBlockEnd: {
      properties: "borderBlockEnd",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderBlockEndColor: {
      properties: "borderBlockEndColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderBlockEndStyle: !0,
    borderBlockEndWidth: { properties: "borderBlockEndWidth", transform: m.px },
    borderBlockStart: {
      properties: "borderBlockStart",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderBlockStartColor: {
      properties: "borderBlockStartColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderBlockStartStyle: !0,
    borderBlockStartWidth: {
      properties: "borderBlockStartWidth",
      transform: m.px,
    },
    borderBlockStyle: !0,
    borderBlockWidth: { properties: "borderBlockWidth", transform: m.px },
    borderBottom: {
      properties: "borderBottom",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderBottomColor: {
      properties: "borderBottomColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderBottomLeftRadius: {
      properties: "borderBottomLeftRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderBottomRightRadius: {
      properties: "borderBottomRightRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderBottomStyle: !0,
    borderBottomWidth: { properties: "borderBottomWidth", transform: m.px },
    borderCollapse: !0,
    borderColor: {
      properties: "borderColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderEndEndRadius: {
      properties: "borderEndEndRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderEndStartRadius: {
      properties: "borderEndStartRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderImage: {
      properties: "borderImage",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderImageOutset: !0,
    borderImageRepeat: !0,
    borderImageSlice: !0,
    borderImageSource: !0,
    borderImageWidth: { properties: "borderImageWidth", transform: m.px },
    borderInline: {
      properties: "borderInline",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderInlineColor: {
      properties: "borderInlineColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderInlineEnd: {
      properties: "borderInlineEnd",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderInlineEndColor: {
      properties: "borderInlineEndColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderInlineEndStyle: !0,
    borderInlineEndWidth: {
      properties: "borderInlineEndWidth",
      transform: m.px,
    },
    borderInlineStart: {
      properties: "borderInlineStart",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderInlineStartColor: {
      properties: "borderInlineStartColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderInlineStartStyle: !0,
    borderInlineStartWidth: {
      properties: "borderInlineStartWidth",
      transform: m.px,
    },
    borderInlineStyle: !0,
    borderInlineWidth: { properties: "borderInlineWidth", transform: m.px },
    borderLeft: {
      properties: "borderLeft",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderLeftColor: {
      properties: "borderLeftColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderLeftStyle: !0,
    borderLeftWidth: { properties: "borderLeftWidth", transform: m.px },
    borderRadius: {
      properties: "borderRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderRight: {
      properties: "borderRight",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderRightColor: {
      properties: "borderRightColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderRightStyle: !0,
    borderRightWidth: { properties: "borderRightWidth", transform: m.px },
    borderSpacing: !0,
    borderStartEndRadius: {
      properties: "borderStartEndRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderStartStartRadius: {
      properties: "borderStartStartRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderStyle: !0,
    borderTop: {
      properties: "borderTop",
      token: "borders",
      transform: m.token("borders", m.px),
    },
    borderTopColor: {
      properties: "borderTopColor",
      token: "colors",
      transform: m.token("colors"),
    },
    borderTopLeftRadius: {
      properties: "borderTopLeftRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderTopRightRadius: {
      properties: "borderTopRightRadius",
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderTopStyle: !0,
    borderTopWidth: { properties: "borderTopWidth", transform: m.px },
    borderWidth: { properties: "borderWidth", transform: m.px },
    bottom: {
      properties: "bottom",
      token: "spaces",
      transform: m.token("spaces", m.px),
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
      transform: m.token("shadows"),
    },
    boxSizing: !0,
    breakAfter: !0,
    breakBefore: !0,
    breakInside: !0,
    captionSide: !0,
    caretColor: {
      properties: "caretColor",
      token: "colors",
      transform: m.token("colors"),
    },
    clear: !0,
    clip: !0,
    clipPath: !0,
    color: {
      properties: "color",
      token: "colors",
      transform: m.token("colors"),
    },
    colorInterpolation: !0,
    columnCount: !0,
    columnFill: !0,
    columnGap: {
      properties: "columnGap",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    columnRule: { properties: "columnRule", transform: m.px },
    columnRuleColor: {
      properties: "columnRuleColor",
      token: "colors",
      transform: m.token("colors"),
    },
    columnRuleStyle: !0,
    columnRuleWidth: { properties: "columnRuleWidth", transform: m.px },
    columnSpan: !0,
    columnWidth: { properties: "columnWidth", transform: m.px },
    columns: !0,
    contain: !0,
    containIntrinsicBlockSize: !0,
    containIntrinsicHeight: !0,
    containIntrinsicInlineSize: !0,
    containIntrinsicSize: !0,
    containIntrinsicWidth: {
      properties: "containIntrinsicWidth",
      transform: m.px,
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
      transform: m.token("sizes", m.px),
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
      transform: m.token("fonts"),
    },
    fontFeatureSettings: !0,
    fontKerning: !0,
    fontLanguageOverride: !0,
    fontOpticalSizing: !0,
    fontPalette: !0,
    fontSize: {
      properties: "fontSize",
      token: "fontSizes",
      transform: m.token("fontSizes", m.px),
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
      transform: m.token("fontWeights"),
    },
    forcedColorAdjust: !0,
    gap: {
      properties: "gap",
      token: "spaces",
      transform: m.token("spaces", m.px),
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
      transform: m.token("sizes", m.fraction(m.px)),
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
      transform: m.token("sizes", m.fraction(m.px)),
    },
    inset: {
      properties: "inset",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetBlock: {
      properties: "insetBlock",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetBlockEnd: {
      properties: "insetBlockEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetBlockStart: {
      properties: "insetBlockStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetInline: {
      properties: "insetInline",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetInlineEnd: {
      properties: "insetInlineEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetInlineStart: {
      properties: "insetInlineStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    isolation: !0,
    justifyContent: !0,
    justifyItems: !0,
    justifySelf: !0,
    justifyTracks: !0,
    left: {
      properties: "left",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    letterSpacing: {
      properties: "letterSpacing",
      token: "letterSpacings",
      transform: m.token("letterSpacings"),
    },
    lineBreak: !0,
    lineHeight: {
      properties: "lineHeight",
      token: "lineHeights",
      transform: m.token("lineHeights"),
    },
    lineHeightStep: !0,
    listStyle: !0,
    listStyleImage: !0,
    listStylePosition: !0,
    listStyleType: !0,
    margin: {
      properties: "margin",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginBlock: {
      properties: "marginBlock",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginBlockEnd: {
      properties: "marginBlockEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginBlockStart: {
      properties: "marginBlockStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginBottom: {
      properties: "marginBottom",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginInline: {
      properties: "marginInline",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginInlineEnd: {
      properties: "marginInlineEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginInlineStart: {
      properties: "marginInlineStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginLeft: {
      properties: "marginLeft",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginRight: {
      properties: "marginRight",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginTop: {
      properties: "marginTop",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginTrim: !0,
    mask: !0,
    maskBorder: !0,
    maskBorderMode: !0,
    maskBorderOutset: !0,
    maskBorderRepeat: !0,
    maskBorderSlice: !0,
    maskBorderSource: !0,
    maskBorderWidth: { properties: "maskBorderWidth", transform: m.px },
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
      transform: m.token("sizes", m.fraction(m.px)),
    },
    maxHeight: {
      properties: "maxHeight",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    maxInlineSize: {
      properties: "maxInlineSize",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    maxWidth: {
      properties: "maxWidth",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    minBlockSize: {
      properties: "minBlockSize",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    minHeight: {
      properties: "minHeight",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    minInlineSize: {
      properties: "minInlineSize",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    minWidth: {
      properties: "minWidth",
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
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
      transform: m.token("colors"),
    },
    outlineOffset: !0,
    outlineStyle: !0,
    outlineWidth: { properties: "outlineWidth", transform: m.px },
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
      transform: m.token("spaces", m.px),
    },
    paddingBlock: {
      properties: "paddingBlock",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingBlockEnd: {
      properties: "paddingBlockEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingBlockStart: {
      properties: "paddingBlockStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingBottom: {
      properties: "paddingBottom",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingInline: {
      properties: "paddingInline",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingInlineEnd: {
      properties: "paddingInlineEnd",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingInlineStart: {
      properties: "paddingInlineStart",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingLeft: {
      properties: "paddingLeft",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingRight: {
      properties: "paddingRight",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingTop: {
      properties: "paddingTop",
      token: "spaces",
      transform: m.token("spaces", m.px),
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
      transform: m.token("spaces", m.px),
    },
    rowGap: {
      properties: "rowGap",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    rubyAlign: !0,
    rubyPosition: !0,
    scrollBehavior: !0,
    scrollMargin: {
      properties: "scrollMargin",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginBlock: !0,
    scrollMarginBlockEnd: !0,
    scrollMarginBlockStart: !0,
    scrollMarginBottom: {
      properties: "scrollMarginBottom",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginInline: !0,
    scrollMarginInlineEnd: !0,
    scrollMarginInlineStart: !0,
    scrollMarginLeft: {
      properties: "scrollMarginLeft",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginRight: {
      properties: "scrollMarginRight",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginTop: {
      properties: "scrollMarginTop",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPadding: {
      properties: "scrollPadding",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingBlock: !0,
    scrollPaddingBlockEnd: !0,
    scrollPaddingBlockStart: !0,
    scrollPaddingBottom: {
      properties: "scrollPaddingBottom",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingInline: !0,
    scrollPaddingInlineEnd: !0,
    scrollPaddingInlineStart: !0,
    scrollPaddingLeft: {
      properties: "scrollPaddingLeft",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingRight: {
      properties: "scrollPaddingRight",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingTop: {
      properties: "scrollPaddingTop",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollTimeline: !0,
    scrollTimelineAxis: !0,
    scrollTimelineName: !0,
    scrollbarColor: !0,
    scrollbarGutter: !0,
    scrollbarWidth: { properties: "scrollbarWidth", transform: m.px },
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
      transform: m.token("colors"),
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
      transform: m.token("colors"),
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
      transform: m.token("shadows"),
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
      transform: m.token("spaces", m.px),
    },
    touchAction: !0,
    transform: { properties: "transform", transform: m.transform },
    transformBox: !0,
    transformOrigin: !0,
    transformStyle: !0,
    transitionBehavior: !0,
    transitionDelay: !0,
    transitionDuration: {
      properties: "transitionDuration",
      token: "transitions.duration",
      transform: m.token("transitions.duration"),
    },
    transitionProperty: {
      properties: "transitionProperty",
      token: "transitions.property",
      transform: m.token("transitions.property"),
    },
    transitionTimingFunction: {
      properties: "transitionTimingFunction",
      token: "transitions.easing",
      transform: m.token("transitions.easing"),
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
      transform: m.token("sizes", m.fraction(m.px)),
    },
    willChange: !0,
    wordBreak: !0,
    wordSpacing: !0,
    writingMode: !0,
    zIndex: {
      properties: "zIndex",
      token: "zIndices",
      transform: m.token("zIndices"),
    },
    zoom: !0,
    alignmentBaseline: !0,
    azimuth: !0,
    baselineShift: !0,
    clipRule: !0,
    dominantBaseline: !0,
    fill: { properties: "fill", token: "colors", transform: m.token("colors") },
    fillOpacity: !0,
    fillRule: !0,
    floodColor: {
      properties: "floodColor",
      token: "colors",
      transform: m.token("colors"),
    },
    floodOpacity: !0,
    glyphOrientationVertical: !0,
    lightingColor: {
      properties: "lightingColor",
      token: "colors",
      transform: m.token("colors"),
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
      transform: m.token("colors"),
    },
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeLinecap: !0,
    strokeLinejoin: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: { properties: "strokeWidth", transform: m.px },
    textAnchor: !0,
    vectorEffect: !0,
    marginX: {
      properties: ["marginInlineStart", "marginInlineEnd"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    marginY: {
      properties: ["marginTop", "marginBottom"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingX: {
      properties: ["paddingInlineStart", "paddingInlineEnd"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    paddingY: {
      properties: ["paddingTop", "paddingBottom"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginX: {
      properties: ["scrollMarginLeft", "scrollMarginRight"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollMarginY: {
      properties: ["scrollMarginTop", "scrollMarginBottom"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingX: {
      properties: ["scrollPaddingLeft", "scrollPaddingRight"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scrollPaddingY: {
      properties: ["scrollPaddingTop", "scrollPaddingBottom"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetX: {
      properties: ["left", "right"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    insetY: {
      properties: ["top", "bottom"],
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    borderY: {
      properties: ["borderTop", "borderBottom"],
      token: "borders",
      transform: m.token("borders"),
    },
    borderX: {
      properties: ["borderLeft", "borderRight"],
      token: "borders",
      transform: m.token("borders"),
    },
    borderTopRadius: {
      properties: ["borderTopLeftRadius", "borderTopRightRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderBottomRadius: {
      properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderRightRadius: {
      properties: ["borderTopRightRadius", "borderBottomRightRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderLeftRadius: {
      properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderInlineStartRadius: {
      properties: ["borderStartStartRadius", "borderStartEndRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    borderInlineEndRadius: {
      properties: ["borderEndStartRadius", "borderEndEndRadius"],
      token: "radii",
      transform: m.token("radii", m.px),
    },
    boxSize: {
      properties: ["width", "height"],
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    minBoxSize: {
      properties: ["minWidth", "minHeight"],
      token: "sizes",
      transform: m.token("sizes", m.fraction(m.px)),
    },
    maxBoxSize: {
      properties: ["maxWidth", "maxHeight"],
      transform: m.fraction(m.px),
    },
    translateX: {
      properties: "--ui-translate-x",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    translateY: {
      properties: "--ui-translate-y",
      token: "spaces",
      transform: m.token("spaces", m.px),
    },
    scale: { properties: ["--ui-scale-x", "--ui-scale-y"] },
    scaleX: { properties: "--ui-scale-x" },
    scaleY: { properties: "--ui-scale-y" },
    rotate: { properties: "--ui-rotate", transform: m.deg },
    skewX: { properties: "--ui-skew-x", transform: m.deg },
    skewY: { properties: "--ui-skew-y", transform: m.deg },
    filter: { transform: m.filter() },
    blur: {
      properties: "--ui-blur",
      token: "blurs",
      transform: m.token("blurs", m.function("blur")),
    },
    brightness: {
      properties: "--ui-brightness",
      transform: m.function("brightness"),
    },
    contrast: {
      properties: "--ui-contrast",
      transform: m.function("contrast"),
    },
    dropShadow: {
      properties: "--ui-drop-shadow",
      token: "shadows",
      transform: m.token("shadows", m.function("drop-shadow")),
    },
    grayscale: {
      properties: "--ui-grayscale",
      transform: m.function("grayscale"),
    },
    hueRotate: {
      properties: "--ui-hue-rotate",
      transform: m.function("hue-rotate", m.deg),
    },
    invert: { properties: "--ui-invert", transform: m.function("invert") },
    saturate: {
      properties: "--ui-saturate",
      transform: m.function("saturate"),
    },
    sepia: { properties: "--ui-sepia", transform: m.function("sepia") },
    backdropFilter: { transform: m.filter("backdrop") },
    backdropBlur: {
      properties: "--ui-backdrop-blur",
      token: "blurs",
      transform: m.token("blurs", m.function("blur")),
    },
    backdropBrightness: {
      properties: "--ui-backdrop-brightness",
      transform: m.function("brightness"),
    },
    backdropContrast: {
      properties: "--ui-backdrop-contrast",
      transform: m.function("contrast"),
    },
    backdropDropShadow: {
      properties: "--ui-backdrop-drop-shadow",
      token: "shadows",
      transform: m.token("shadows", m.function("drop-shadow")),
    },
    backdropGrayscale: {
      properties: "--ui-backdrop-grayscale",
      transform: m.function("grayscale"),
    },
    backdropHueRotate: {
      properties: "--ui-backdrop-hue-rotate",
      transform: m.function("hue-rotate", m.deg),
    },
    backdropInvert: {
      properties: "--ui-backdrop-invert",
      transform: m.function("invert"),
    },
    backdropSaturate: {
      properties: "--ui-backdrop-saturate",
      transform: m.function("saturate"),
    },
    backdropSepia: {
      properties: "--ui-backdrop-sepia",
      transform: m.function("sepia"),
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
    isTruncated: { isSkip: !0, transform: m.isTruncated },
    layerStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: m.styles("layerStyles"),
    },
    textStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: m.styles("textStyles"),
    },
    apply: { isProcessResult: !0, isSkip: !0, transform: m.styles() },
    var: { isProcessSkip: !0, isSkip: !0, transform: m.var },
  },
  Hk = {
    accent: A.accentColor,
    bg: A.background,
    bgAttachment: { properties: "backgroundAttachment" },
    bgBlendMode: { properties: "backgroundBlendMode" },
    bgClip: A.backgroundClip,
    bgColor: A.backgroundColor,
    bgImage: A.backgroundImage,
    bgImg: A.backgroundImage,
    bgGradient: A.backgroundImage,
    bgOrigin: { properties: "backgroundOrigin" },
    bgPosition: { properties: "backgroundPosition" },
    bgPositionX: { properties: "backgroundPositionX" },
    bgPosX: { properties: "backgroundPositionX" },
    bgPositionY: { properties: "backgroundPositionY" },
    bgPosY: { properties: "backgroundPositionY" },
    bgRepeat: { properties: "backgroundRepeat" },
    bgSize: { properties: "backgroundSize" },
    roundedBottomLeft: A.borderBottomLeftRadius,
    roundedBottomRight: A.borderBottomRightRadius,
    borderBottomEndRadius: A.borderEndEndRadius,
    roundedBottomEnd: A.borderEndEndRadius,
    borderBottomStartRadius: A.borderEndStartRadius,
    roundedBottomStart: A.borderEndStartRadius,
    borderEnd: A.borderInlineEnd,
    borderEndColor: A.borderInlineEndColor,
    borderEndStyle: { properties: "borderInlineEndStyle" },
    borderEndWidth: A.borderInlineEndWidth,
    borderStart: A.borderInlineStart,
    borderStartColor: A.borderInlineStartColor,
    borderStartStyle: { properties: "borderInlineStartStyle" },
    borderStartWidth: A.borderInlineStartWidth,
    rounded: A.borderRadius,
    borderTopEndRadius: A.borderStartEndRadius,
    roundedTopEnd: A.borderStartEndRadius,
    borderTopStartRadius: A.borderStartStartRadius,
    roundedTopStart: A.borderStartStartRadius,
    roundedTopLeft: A.borderTopLeftRadius,
    roundedTopRight: A.borderTopRightRadius,
    shadow: A.boxShadow,
    caret: A.caretColor,
    textColor: A.color,
    gx: A.columnGap,
    gapX: A.columnGap,
    flexDir: { properties: "flexDirection" },
    text: A.fontSize,
    g: A.gap,
    h: A.height,
    insetEnd: A.insetInlineEnd,
    insetStart: A.insetInlineStart,
    tracking: A.letterSpacing,
    leading: A.lineHeight,
    listStyleImg: { properties: "listStyleImage" },
    listStylePos: { properties: "listStylePosition" },
    m: A.margin,
    mb: A.marginBottom,
    me: A.marginInlineEnd,
    marginEnd: A.marginInlineEnd,
    ms: A.marginInlineStart,
    marginStart: A.marginInlineStart,
    ml: A.marginLeft,
    mr: A.marginRight,
    mt: A.marginTop,
    maxH: A.maxHeight,
    maxW: A.maxWidth,
    minH: A.minHeight,
    minW: A.minWidth,
    blendMode: { properties: "mixBlendMode" },
    overscroll: { properties: "overscrollBehavior" },
    overscrollX: { properties: "overscrollBehaviorX" },
    overscrollY: { properties: "overscrollBehaviorY" },
    p: A.padding,
    pb: A.paddingBottom,
    pe: A.paddingInlineEnd,
    paddingEnd: A.paddingInlineEnd,
    ps: A.paddingInlineStart,
    paddingStart: A.paddingInlineStart,
    pl: A.paddingLeft,
    pr: A.paddingRight,
    pt: A.paddingTop,
    pos: { properties: "position" },
    gy: A.rowGap,
    gapY: A.rowGap,
    textDecor: { properties: "textDecoration" },
    w: A.width,
    z: A.zIndex,
    mx: A.marginX,
    my: A.marginY,
    px: A.paddingX,
    py: A.paddingY,
    roundedTop: A.borderTopRadius,
    roundedBottom: A.borderBottomRadius,
    roundedRight: A.borderRightRadius,
    roundedLeft: A.borderLeftRadius,
    borderStartRadius: A.borderInlineStartRadius,
    roundedStart: A.borderInlineStartRadius,
    borderEndRadius: A.borderInlineEndRadius,
    roundedEnd: A.borderInlineEndRadius,
  },
  Uk = {
    _media: { isProcessSkip: !0, isSkip: !0, transform: m.media },
    _container: { isProcessSkip: !0, isSkip: !0, transform: m.container },
    _supports: { isProcessSkip: !0, isSkip: !0, transform: m.supports },
  },
  Od = { ...A, ...Hk, ...Uk },
  Gk = ["var", "_media", "_container", "_supports"],
  Yk = Object.keys(Od),
  nh = (e) => Gk.includes(e),
  Xk = (e, t) => ({ [e]: t[0], [_r._dark]: { [e]: t[1] } }),
  Kk = (e, t, r) =>
    r.reduce((n, { breakpoint: o, query: i }) => {
      const s = t[o];
      return i ? s && (n[i] = { [e]: s }) : (n[e] = t[o]), n;
    }, {}),
  Qk = (e, t) => (r) => {
    if (!r.__breakpoints) return e;
    const { isResponsive: n, queries: o } = r.__breakpoints;
    let i = {};
    for (let [s, a] of Object.entries(e))
      if (((a = qe(a, r)), a != null)) {
        if (U(a) && !(nh(s) && !t)) {
          i = he(i, Xk(s, a));
          continue;
        }
        if (ve(a) && n(a) && !(nh(s) && !t)) {
          i = he(i, Kk(s, a, o));
          continue;
        }
        i[s] = a;
      }
    return i;
  },
  qk = ({ theme: e, styles: t = {}, pseudos: r = {}, disableStyleProp: n }) => {
    const o = (i, s = !1) => {
      var a, l, u;
      const c = qe(i, e),
        d = Qk(c, s)(e);
      let f = {};
      for (let [h, x] of Object.entries(d)) {
        if ((n != null && n(h)) || ((x = qe(x, e)), x == null)) continue;
        h in r && (h = r[h]);
        let v = t[h];
        if (
          (v === !0 && (v = { properties: h }),
          ve(x) && !(v != null && v.isProcessSkip))
        ) {
          (f[h] = (a = f[h]) != null ? a : {}), (f[h] = he(f[h], o(x, !0)));
          continue;
        }
        if (
          ((x =
            (u =
              (l = v == null ? void 0 : v.transform) == null
                ? void 0
                : l.call(v, x, e, Qn, f)) != null
              ? u
              : x),
          ((v != null && v.isProcessResult) ||
            (v != null && v.isProcessSkip)) &&
            (x = o(x, !0)),
          !s && v != null && v.static)
        ) {
          const p = qe(v.static, e);
          f = he(f, p);
        }
        const w = qe(v == null ? void 0 : v.properties, e);
        if (w)
          if (U(w)) {
            for (const p of w) f[p] = x;
            continue;
          } else if (ve(x)) {
            f = he(f, x);
            continue;
          } else {
            f[w] = x;
            continue;
          }
        if (ve(x)) {
          f = he(f, x);
          continue;
        }
        f[h] = x;
      }
      return f;
    };
    return o;
  },
  Qn = (e) => (t, r) =>
    qk({ theme: t, styles: Od, pseudos: _r, disableStyleProp: r })(e),
  Zk = (e, t) => {
    const r = `--${[t, SS(e, "-")].filter(Boolean).join("-")}`,
      n = `var(${r})`;
    return { variable: r, reference: n };
  },
  oh = (e, t) => ((e = e.replace(/\./g, "-")), Zk(e, t)),
  cn =
    (e, t = "ui") =>
    ({ baseTokens: r, cssMap: n = {}, cssVars: o = {} } = {}) => {
      for (let [i, { isSemantic: s, value: a }] of Object.entries(e)) {
        const l = (w = "") => {
            var p;
            const [g] = i.split("."),
              y = [g, w].join(".");
            if (!((p = e[y]) != null ? p : r == null ? void 0 : r[y]))
              return [, w];
            const { variable: C, reference: _ } = oh(y, t);
            return [C, _];
          },
          { variable: u, reference: c } = oh(i, t);
        let d, f;
        const h = { __cssMap: n };
        if (i.startsWith("animations."))
          U(a)
            ? (d = a.map((w) => pc(w, h, Qn)).join(","))
            : (d = pc(a, h, Qn));
        else {
          let [w, p] = U(a) ? [...a] : [a];
          if (i.startsWith("gradients.")) {
            const [g, y] = l(w),
              [k, C] = l(p);
            g ? (d = y) : (d = fc(l(w)[1], h)), k ? (f = C) : (f = fc(p, h));
          } else (d = w), (f = p);
        }
        if (!s) {
          if (i.startsWith("spaces") && !_i(d)) {
            const w = i.split("."),
              [p, ...g] = w,
              y = `${p}.-${g.join(".")}`,
              k = Pt.negate(d),
              C = Pt.negate(c);
            n[y] = { value: k, var: u, ref: C };
          }
          (o[u] = d),
            f && (o = he(o, { [_r._dark]: { [u]: f } })),
            (n[i] = { value: d, var: u, ref: c });
          continue;
        }
        const [x, v] = l(d);
        if (((o = he(o, { [u]: v })), f)) {
          const [, w] = l(f);
          o = he(o, { [_r._dark]: { [u]: w } });
        }
        n[i] = { value: x ?? d, var: u, ref: c };
      }
      return { cssMap: n, cssVars: o };
    },
  ih = [
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
  sh = ["gradients"],
  Jk = (e, t) => {
    var r;
    e = ew(e);
    const { breakpoints: n, themeSchemes: o } = e ?? {},
      i = (r = t == null ? void 0 : t.var) == null ? void 0 : r.prefix,
      s = dn(e),
      a = dn(e, "secondary"),
      l = dn(e, "animation");
    let { cssMap: u, cssVars: c } = ah(cn(s, i), cn(a, i), cn(l, i))();
    if (o)
      for (const [f, h] of Object.entries(o)) {
        const x = dn(h),
          v = dn(h, "secondary"),
          w = dn(h, "animation");
        let { cssVars: p } = ah(
          cn(x, i),
          cn(v, i),
          cn(w, i),
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
        __breakpoints: Fk(n, t == null ? void 0 : t.breakpoint),
      }),
      e
    );
  },
  dn = (e, t = "primary") => {
    var r;
    let n = [],
      o = [],
      i = [];
    switch (t) {
      case "primary":
        (n = [...ih, "transitions"]),
          (o = [...ih, "transitions", "colorSchemes"]);
        break;
      case "secondary":
        (n = [...sh]), (o = [...sh]);
        break;
      case "animation":
        (n = ["animations"]), (o = ["animations"]), (i = ["keyframes"]);
        break;
    }
    const s = ic(e, n),
      a = ic((r = e.semantics) != null ? r : {}, o),
      l = Object.entries(sc(s, 1 / 0, i)).map(([c, d]) => [
        c,
        { isSemantic: !1, value: d },
      ]),
      u = Object.entries(sc(a, 1 / 0, i)).reduce((c, [d, f]) => {
        if (d.startsWith("colorSchemes.")) {
          const [, h] = d.split(".");
          sS.forEach((x) => {
            const v = { isSemantic: !0, value: `${f}.${x}` };
            c.push([`colors.${h}.${x}`, v]);
          });
        } else {
          const h = { isSemantic: !0, value: f };
          c.push([d, h]);
        }
        return c;
      }, []);
    return gS([...l, ...u]);
  },
  ah =
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
  ew = (e) => Ei(e, ["__cssMap", "__cssVar", "__breakpoints"]),
  Ft = (e, t = []) => Ei(e, ["size", "variant", "colorScheme", ...t]),
  yy =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => ua(vy(o)({ omit: r, pick: n }), i), e),
  ee =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => ua(vy(o)({ omit: r, pick: n, isMulti: !0 }), i), e),
  ua = (e, t) => {
    let r = Object.assign({}, e);
    if (ve(t) && ve(e))
      for (const [n, o] of Object.entries(t)) {
        const i = e[n];
        e.hasOwnProperty(n)
          ? !en(i) && !en(o)
            ? (r[n] = ua(i, o))
            : (r[n] = (s) => ua(qe(i, s), qe(o, s)))
          : Object.assign(r, { [n]: o });
      }
    else r = t;
    return r;
  },
  vy =
    (e) =>
    ({ omit: t, pick: r, isMulti: n = !1 }) => (
      ve(e) &&
        (t.length && (e = Io(e, t, n)(Ei)), r.length && (e = Io(e, r, n)(ic))),
      e
    ),
  Io =
    (e, t, r, n = []) =>
    (o) => (
      ve(e) &&
        ((e = o(e, t)),
        Object.entries(e ?? {}).forEach(([i, s]) => {
          const a = t.filter((u) => u !== i),
            l = [...n, i];
          tw(l, r) &&
            (en(s)
              ? (e[i] = (u) => Io(s(u), a, r, l)(o))
              : o === Ei || Object.keys(s).some((u) => a.includes(u))
                ? (e[i] = Io(s, a, r, l)(o))
                : (e[i] = he(e[i], Io(s, a, r, l)(o))));
        })),
      e
    ),
  tw = (e, t) => {
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
  rw = (e, t, r = !0) => {
    const n = {};
    return (
      Object.entries(e).forEach(([o, i]) => {
        switch (o) {
          case "baseStyle":
            en(i) ? (n[o] = (s) => i(s)[t]) : (n[o] = i[t]);
            break;
          case "variants":
          case "sizes":
            n[o] = Object.entries(i).reduce(
              (s, [a, l]) => (
                en(l) ? (s[a] = (u) => l(u)[t]) : (s[a] = l[t]), s
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
  Hl = "ui-color-mode",
  xy = !!(globalThis != null && globalThis.document),
  lh = (e) => ({
    ssr: !1,
    type: "localStorage",
    get:
      (t = "light") =>
      (r = e) => {
        if (!xy) return t;
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
  uh = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  Ul = (e, t) => ({
    ssr: !!t,
    type: "cookie",
    get:
      (r = "light") =>
      (n = e) =>
        t ? uh(t, n) || r : (xy && uh(document.cookie, n)) || r,
    set:
      (r) =>
      (n = e) => {
        document.cookie = `${n}=${r}; max-age=31536000; path=/`;
      },
  }),
  nw = {
    localStorage: lh(Hl),
    cookieStorage: Ul(Hl),
    ssr: (e) => Ul(Hl, e),
    createLocalStorage: lh,
    createCookieStorage: Ul,
  },
  is = { light: "ui-light", dark: "ui-dark" },
  ow = {
    light: "(prefers-color-scheme: light)",
    dark: "(prefers-color-scheme: dark)",
  },
  iw = ({ isPreventTransition: e = !0 }) => {
    const t = (a) => {
        const l = e ? s() : void 0;
        (document.documentElement.dataset.mode = a),
          (document.documentElement.style.colorScheme = a),
          l == null || l();
      },
      r = (a) => {
        document.body.classList.add(a ? is.dark : is.light),
          document.body.classList.remove(a ? is.light : is.dark);
      },
      n = () => window.matchMedia(ow.dark),
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
  { localStorage: sw } = nw,
  aw = (e, t) => (r) => (e.type === "cookie" && e.ssr ? e.get(t)(r) : t),
  by = S.createContext({}),
  lw = ({
    colorMode: e,
    colorModeManager: t = sw,
    storageKey: r,
    config: {
      initialColorMode: n = "light",
      disableTransitionOnChange: o = !0,
    } = {},
    children: i,
  }) => {
    const [s, a] = S.useState(() => aw(t, n)(r)),
      [l, u] = S.useState(void 0),
      d = s === "system" ? l || (n === "dark" ? "dark" : "light") : s,
      {
        getSystemColorMode: f,
        setClassName: h,
        setDataset: x,
        addListener: v,
      } = S.useMemo(() => iw({ isPreventTransition: o }), [o]),
      w = S.useCallback(
        (k) => {
          const C = k === "system" ? f() : k;
          a(k), h(C === "dark"), x(C), t.set(k)(r);
        },
        [t, f, h, x, r],
      ),
      p = S.useCallback(
        (k) => {
          u(k), s === "system" && (h(k === "dark"), x(k));
        },
        [s, h, x],
      ),
      g = S.useCallback(() => {
        w(d === "dark" ? "light" : "dark");
      }, [w, d]);
    Yr(() => {
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
        changeColorMode: e ? Lp : w,
        toggleColorMode: e ? Lp : g,
        forced: e !== void 0,
      }),
      [e, d, s, w, g],
    );
    return b.jsx(by.Provider, { value: y, children: i });
  },
  Ti = () => {
    const e = S.useContext(by);
    return e ?? { colorMode: "light", internalColorMode: "light", forced: !1 };
  },
  Gl = "ui-theme-scheme",
  Sy = !!(globalThis != null && globalThis.document),
  ch = (e) => ({
    ssr: !1,
    type: "localStorage",
    get:
      (t = "base") =>
      (r = e) => {
        if (!Sy) return t;
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
  dh = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  Yl = (e, t) => ({
    ssr: !!t,
    type: "cookie",
    get:
      (r = "base") =>
      (n = e) =>
        t ? dh(t, n) || r : (Sy && dh(document.cookie, n)) || r,
    set:
      (r) =>
      (n = e) => {
        document.cookie = `${n}=${r}; max-age=31536000; path=/`;
      },
  }),
  uw = {
    localStorage: ch(Gl),
    cookieStorage: Yl(Gl),
    ssr: (e) => Yl(Gl, e),
    createLocalStorage: ch,
    createCookieStorage: Yl,
  },
  { localStorage: cw } = uw,
  dw = ({
    theme: e = {},
    config: t,
    themeSchemeManager: r = cw,
    storageKey: n,
    children: o,
  }) => {
    const [i, s] = S.useState(
        r.get(t == null ? void 0 : t.initialThemeScheme)(n),
      ),
      a = S.useCallback(
        (u) => {
          const c = t != null && t.disableTransitionOnChange ? mw() : void 0;
          (document.documentElement.dataset.theme = u),
            c == null || c(),
            s(u),
            r.set(u)(n);
        },
        [t, r, n],
      ),
      l = S.useMemo(() => Jk(e, t), [e, t]);
    return (
      S.useEffect(() => {
        const u = r.get()(n);
        u && a(u);
      }, [a, r, n]),
      b.jsxs(yk, {
        theme: { themeScheme: i, changeThemeScheme: a, ...l },
        children: [b.jsx(fw, {}), o],
      })
    );
  },
  fw = () =>
    b.jsx(Nd, {
      styles: ({ __cssVars: e }) => ({ ":host, :root, [data-mode]": e }),
    }),
  pw = () => {
    const { colorMode: e } = Ti();
    return b.jsx(Nd, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = L(t, "styles.resetStyle", {});
        const o = qe(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Qn(o)(t);
      },
    });
  },
  hw = () => {
    const { colorMode: e } = Ti();
    return b.jsx(Nd, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = L(t, "styles.globalStyle", {});
        const o = qe(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Qn(o)(t);
      },
    });
  },
  Za = () => {
    const { themeScheme: e, changeThemeScheme: t, ...r } = S.useContext(fi),
      n = S.useMemo(() => {
        var i;
        if (_i(e) || e === "base") return r;
        const s = (i = r.themeSchemes) == null ? void 0 : i[e];
        return s ? he(r, s) : r;
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
  mw = () => {
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
  gw =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      const [o, i] = e,
        s = Xr(t[o], r)({ isMulti: n, query: _r._light }),
        a = Xr(t[i], r)({ isMulti: n, query: _r._dark });
      return [s, a];
    },
  yw =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      var o, i;
      const s = Kg(e);
      if (s.length === 1 && "base" in e)
        return Xr(t[e.base], r)({ isMulti: n });
      {
        const { queries: a = [] } =
            (o = r.theme.__breakpoints) != null ? o : {},
          { breakpoint: l } = (i = r.theme.__config) != null ? i : {},
          u = l === "down",
          c = a
            .filter(({ breakpoint: f }) => f !== "base" && s.includes(f))
            .sort((f, h) => {
              var x, v, w, p;
              return u
                ? ((x = f.maxW) != null ? x : 0) -
                    ((v = h.maxW) != null ? v : 0)
                : ((w = h.minW) != null ? w : 0) -
                    ((p = f.minW) != null ? p : 0);
            })[0];
        let d = !1;
        return a.reduce(
          (
            f,
            { breakpoint: h, minW: x, maxW: v, maxWQuery: w, minWQuery: p },
            g,
          ) => {
            var y;
            const k = e[h],
              C = h === c.breakpoint;
            if (h === "base" || !k) return f;
            if (!d) {
              const E = e.base,
                R = a[g - 1],
                T = R == null ? void 0 : R[u ? "minWQuery" : "maxWQuery"],
                B = Xr(E ? t[E] : {}, r)({ isMulti: n, query: T });
              (f = he(f, B)), (d = !0);
            }
            let _ = u ? w : p;
            if (!C) {
              let E = g + 1,
                R;
              for (; E < a.length; ) {
                const T = (y = a[E]) != null ? y : {};
                if (e[T.breakpoint]) {
                  const B = E - 1;
                  R = a[B];
                  break;
                }
                E += 1;
              }
              (x = u ? (R == null ? void 0 : R.minW) : x),
                (v = u ? v : R == null ? void 0 : R.maxW),
                (_ = As(x, v));
            }
            const P = Xr(t[k], r)({ isMulti: n, query: _ });
            return (f = he(f, P)), f;
          },
          {},
        );
      }
    },
  fh =
    (e, t, r) =>
    ({ isMulti: n = !1 }) => {
      let o = {};
      if (U(e)) {
        const [i, s] = gw(e, t, r)({ isMulti: n });
        o = he(i, s);
      } else
        ve(e)
          ? (o = yw(e, t, r)({ isMulti: n }))
          : (o = Xr(t[e], r)({ isMulti: n }));
      return o;
    },
  Xr =
    (e, t) =>
    ({ isMulti: r = !1, query: n }) => {
      let o = qe(e, t);
      if (r)
        for (const [i, s] of Object.entries(o ?? {})) {
          const a = qe(s, t);
          n ? (o = he(o, { [i]: { [n]: a } })) : (o = he(o, { [i]: a }));
        }
      else if (n) return { [n]: o };
      return o;
    },
  ky = (e, t, { isMulti: r, isProcessSkip: n, styles: o } = {}) => {
    var i, s, a, l;
    const { theme: u, themeScheme: c } = Za(),
      { colorMode: d } = Ti(),
      f = S.useRef({}),
      h = S.useRef(o ?? {});
    if (!n) {
      const v = L(u, `components.${e}`);
      if (
        ((t = he(
          (i = v == null ? void 0 : v.defaultProps) != null ? i : {},
          Da(t),
        )),
        v)
      ) {
        const w = Ei(t, ["children"]);
        let p = Xr((s = v.baseStyle) != null ? s : {}, {
          theme: u,
          colorMode: d,
          themeScheme: c,
          ...w,
        })({ isMulti: r });
        const g = fh(t.variant, (a = v.variants) != null ? a : {}, {
            theme: u,
            colorMode: d,
            themeScheme: c,
            ...w,
          })({ isMulti: r }),
          y = fh(t.size, (l = v.sizes) != null ? l : {}, {
            theme: u,
            colorMode: d,
            themeScheme: c,
            ...w,
          })({ isMulti: r });
        (p = he(p, y)), (p = he(p, g)), Kp(h.current, p) || (h.current = p);
      }
    }
    return Kp(f.current, t) || (f.current = t), [h.current, f.current];
  },
  oo = (e, t, r) => ky(e, t, r),
  Ai = (e, t, r) => ky(e, t, { isMulti: !0, ...r }),
  vw = new Set([
    ...Yk,
    ...Wk,
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
  xw = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]),
  bw = (e) => (t) => {
    var r;
    return (
      xw.has(t) ||
      ((r = e == null ? void 0 : e(t)) != null ? r : !1) ||
      !vw.has(t)
    );
  },
  Sw = bS(cc),
  kw = { ...Od, ..._r },
  ww =
    ({ baseStyle: e, disableStyleProp: t }) =>
    (r) => {
      const { theme: n, css: o, __css: i, sx: s, ...a } = r,
        l = Xg(a, (d) => d in kw),
        u = qe(e, r),
        c = Qn(xS({}, i, u, Da(l), s))(n, t);
      return o ? [c, o] : c;
    },
  Xl = (e, { baseStyle: t, disableStyleProp: r, ...n } = {}) => {
    n.shouldForwardProp || (n.shouldForwardProp = bw(r));
    const o = ww({ baseStyle: t, disableStyleProp: r }),
      i = Sw(e, n)(o),
      s = S.forwardRef((a, l) => {
        const { colorMode: u, forced: c } = Ti();
        return S.createElement(i, {
          ref: l,
          "data-mode": c ? u : void 0,
          ...a,
        });
      });
    return (s.displayName = "UIComponent"), s;
  },
  Cw = () => {
    const e = new Map();
    return new Proxy(Xl, {
      apply: (t, r, [n, o]) => Xl(n, o),
      get: (t, r) => (e.has(r) || e.set(r, Xl(r)), e.get(r)),
    });
  },
  O = Cw(),
  _w = (e, t) => {
    const { theme: r } = Za(),
      { colorMode: n } = Ti();
    return Pw(e, t)(r, n);
  },
  Pw = (e, t) => (r, n) => {
    var o, i, s;
    let a = L(r, `${e}.${t}`);
    if (_i(a))
      if (
        ((a = L(r, `semantics.${e}.${t}`)),
        U(a)
          ? (a = [
              (o = L(r, `${e}.${a[0]}`)) != null ? o : a[0],
              (i = L(r, `${e}.${a[1]}`)) != null ? i : a[1],
            ])
          : (a = (s = L(r, `${e}.${a}`)) != null ? s : a),
        U(a))
      ) {
        const [l, u] = a;
        if (((a = n === "light" ? l : u), U(a))) {
          const [c, d] = a;
          return n === "light" ? c : d;
        } else return a;
      } else return a;
    else if (U(a)) {
      const [l, u] = a;
      return n === "light" ? l : u;
    } else return a;
  },
  St = W(({ as: e, viewBox: t, size: r, className: n, __css: o, ...i }, s) => {
    const a = Co(r, (u) => (Nb(u) ? u : _w("fontSizes", u))),
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
      ? b.jsx(O.svg, {
          as: e,
          className: G("ui-icon", n),
          __css: l,
          boxSize: a,
          ...i,
        })
      : b.jsx(O.svg, {
          ref: s,
          verticalAlign: "middle",
          viewBox: t,
          className: G("ui-icon", n),
          __css: l,
          boxSize: a,
          ...i,
        });
  }),
  Ew = (e) =>
    b.jsx(St, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
      }),
    }),
  zw = (e) =>
    b.jsx(St, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
      }),
    }),
  ph = (e) =>
    b.jsx(St, {
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
      }),
    }),
  Tw = (e) =>
    b.jsx(St, {
      focusable: "false",
      "aria-hidden": !0,
      viewBox: "0 0 24 24",
      ...e,
      children: b.jsx("path", {
        fill: "currentColor",
        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
      }),
    }),
  Aw = W(({ color: e, duration: t = "1.8s", ...r }, n) =>
    b.jsx(St, {
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
  Rw = W(({ color: e, duration: t = "3s", ...r }, n) => {
    const o = typeof t == "string" ? parseFloat(t) : t;
    return b.jsx(St, {
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
  $w = W(({ color: e, duration: t = "1.4s", ...r }, n) => {
    const o = typeof t == "string" ? parseFloat(t) : t;
    return b.jsx(St, {
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
  Mw = W(({ color: e, duration: t = "3s", ...r }, n) =>
    b.jsx(St, {
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
  jw = W(({ color: e, duration: t = "1s", ...r }, n) =>
    b.jsxs(St, {
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
  Lw = W(({ color: e, duration: t = "1s", ...r }, n) =>
    b.jsxs(St, {
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
  Iw = W(({ color: e, secondaryColor: t, duration: r = "1s", ...n }, o) =>
    b.jsx(St, {
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
  qn = W((e, t) => {
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
      ] = oo("Loading", e),
      f = S.useMemo(
        () => ({
          className: G("ui-loading", n),
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
        return b.jsx(Lw, { ref: t, ...f });
      case "audio":
        return b.jsx($w, { ref: t, ...f });
      case "dots":
        return b.jsx(jw, { ref: t, ...f });
      case "puff":
        return b.jsx(Aw, { ref: t, ...f });
      case "rings":
        return b.jsx(Rw, { ref: t, ...f });
      case "circles":
        return b.jsx(Mw, { ref: t, ...f });
      default:
        return b.jsx(Iw, { ref: t, ...f });
    }
  });
const ca = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ja = S.createContext({});
function Dw() {
  return S.useContext(Ja).visualElement;
}
const Ri = S.createContext(null),
  el = typeof document < "u",
  da = el ? S.useLayoutEffect : S.useEffect,
  wy = S.createContext({ strict: !1 });
function Vw(e, t, r, n) {
  const o = Dw(),
    i = S.useContext(wy),
    s = S.useContext(Ri),
    a = S.useContext(ca).reducedMotion,
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
    da(() => {
      u && u.render();
    }),
    S.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? da : S.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Tn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Bw(e, t, r) {
  return S.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : Tn(r) && (r.current = n));
    },
    [t],
  );
}
function pi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function tl(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Fd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Wd = ["initial", ...Fd];
function rl(e) {
  return tl(e.animate) || Wd.some((t) => pi(e[t]));
}
function Cy(e) {
  return !!(rl(e) || e.variants);
}
function Nw(e, t) {
  if (rl(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || pi(r) ? r : void 0,
      animate: pi(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ow(e) {
  const { initial: t, animate: r } = Nw(e, S.useContext(Ja));
  return S.useMemo(() => ({ initial: t, animate: r }), [hh(t), hh(r)]);
}
function hh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const mh = {
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
  hi = {};
for (const e in mh) hi[e] = { isEnabled: (t) => mh[e].some((r) => !!t[r]) };
function Fw(e) {
  for (const t in e) hi[t] = { ...hi[t], ...e[t] };
}
function nl(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Do = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let Ww = 1;
function Hw() {
  return nl(() => {
    if (Do.hasEverUpdated) return Ww++;
  });
}
const Hd = S.createContext({}),
  _y = S.createContext({}),
  Uw = Symbol.for("motionComponentSymbol");
function Gw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && Fw(e);
  function i(a, l) {
    let u;
    const c = { ...S.useContext(ca), ...a, layoutId: Yw(a) },
      { isStatic: d } = c,
      f = Ow(a),
      h = d ? void 0 : Hw(),
      x = n(a, d);
    if (!d && el) {
      f.visualElement = Vw(o, x, c, t);
      const v = S.useContext(_y),
        w = S.useContext(wy).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, w, e, h, v));
    }
    return S.createElement(
      Ja.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      r(o, a, h, Bw(x, f.visualElement, l), x, d, f.visualElement),
    );
  }
  const s = S.forwardRef(i);
  return (s[Uw] = o), s;
}
function Yw({ layoutId: e }) {
  const t = S.useContext(Hd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Xw(e) {
  function t(n, o = {}) {
    return Gw(e(n, o));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
  });
}
const Kw = [
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
function Ud(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Kw.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const fa = {};
function Qw(e) {
  Object.assign(fa, e);
}
const ol = [
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
  sn = new Set(ol);
function Py(e, { layout: t, layoutId: r }) {
  return (
    sn.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!fa[e] || e === "opacity"))
  );
}
const rt = (e) => !!(e && e.getVelocity),
  qw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Zw = ol.length;
function Jw(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o,
) {
  let i = "";
  for (let s = 0; s < Zw; s++) {
    const a = ol[s];
    if (e[a] !== void 0) {
      const l = qw[a] || a;
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
const Ey = (e) => (t) => typeof t == "string" && t.startsWith(e),
  zy = Ey("--"),
  hc = Ey("var(--"),
  eC = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Zn = (e, t, r) => Math.min(Math.max(r, e), t),
  an = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Vo = { ...an, transform: (e) => Zn(0, 1, e) },
  ss = { ...an, default: 1 },
  Bo = (e) => Math.round(e * 1e5) / 1e5,
  mi = /(-)?([\d]*\.?[\d])+/g,
  mc =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  tC =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function $i(e) {
  return typeof e == "string";
}
const Mi = (e) => ({
    test: (t) => $i(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  ir = Mi("deg"),
  Ot = Mi("%"),
  D = Mi("px"),
  rC = Mi("vh"),
  nC = Mi("vw"),
  gh = {
    ...Ot,
    parse: (e) => Ot.parse(e) / 100,
    transform: (e) => Ot.transform(e * 100),
  },
  yh = { ...an, transform: Math.round },
  Ty = {
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
    rotate: ir,
    rotateX: ir,
    rotateY: ir,
    rotateZ: ir,
    scale: ss,
    scaleX: ss,
    scaleY: ss,
    scaleZ: ss,
    skew: ir,
    skewX: ir,
    skewY: ir,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Vo,
    originX: gh,
    originY: gh,
    originZ: D,
    zIndex: yh,
    fillOpacity: Vo,
    strokeOpacity: Vo,
    numOctaves: yh,
  };
function Gd(e, t, r, n) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (zy(d)) {
      i[d] = f;
      continue;
    }
    const h = Ty[d],
      x = eC(f, h);
    if (sn.has(d)) {
      if (((l = !0), (s[d] = x), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = x)) : (o[d] = x);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = Jw(e.transform, r, c, n))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Yd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ay(e, t, r) {
  for (const n in t) !rt(t[n]) && !Py(n, r) && (e[n] = t[n]);
}
function oC({ transformTemplate: e }, t, r) {
  return S.useMemo(() => {
    const n = Yd();
    return (
      Gd(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function iC(e, t, r) {
  const n = e.style || {},
    o = {};
  return (
    Ay(o, n, e),
    Object.assign(o, oC(e, t, r)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function sC(e, t, r) {
  const n = {},
    o = iC(e, t, r);
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
const aC = new Set([
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
function pa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    aC.has(e)
  );
}
let Ry = (e) => !pa(e);
function $y(e) {
  e && (Ry = (t) => (t.startsWith("on") ? !pa(t) : e(t)));
}
try {
  $y(require("@emotion/is-prop-valid").default);
} catch {}
function lC(e, t, r) {
  const n = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Ry(o) ||
        (r === !0 && pa(o)) ||
        (!t && !pa(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (n[o] = e[o]));
  return n;
}
function vh(e, t, r) {
  return typeof e == "string" ? e : D.transform(t + r * e);
}
function uC(e, t, r) {
  const n = vh(t, e.x, e.width),
    o = vh(r, e.y, e.height);
  return `${n} ${o}`;
}
const cC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  dC = { offset: "strokeDashoffset", array: "strokeDasharray" };
function fC(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? cC : dC;
  e[i.offset] = D.transform(-n);
  const s = D.transform(t),
    a = D.transform(r);
  e[i.array] = `${s} ${a}`;
}
function Xd(
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
  if ((Gd(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: h, dimensions: x } = e;
  f.transform && (x && (h.transform = f.transform), delete f.transform),
    x &&
      (n !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = uC(
        x,
        n !== void 0 ? n : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && fC(f, i, s, a, !1);
}
const My = () => ({ ...Yd(), attrs: {} }),
  Kd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function pC(e, t, r, n) {
  const o = S.useMemo(() => {
    const i = My();
    return (
      Xd(i, t, { enableHardwareAcceleration: !1 }, Kd(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Ay(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function hC(e = !1) {
  return (r, n, o, i, { latestValues: s }, a) => {
    const u = (Ud(r) ? pC : sC)(n, s, a, r),
      d = { ...lC(n, typeof r == "string", e), ...u, ref: i },
      { children: f } = n,
      h = S.useMemo(() => (rt(f) ? f.get() : f), [f]);
    return (
      o && (d["data-projection-id"] = o),
      S.createElement(r, { ...d, children: h })
    );
  };
}
const Qd = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function jy(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const Ly = new Set([
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
function Iy(e, t, r, n) {
  jy(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(Ly.has(o) ? o : Qd(o), t.attrs[o]);
}
function qd(e, t) {
  const { style: r } = e,
    n = {};
  for (const o in r)
    (rt(r[o]) || (t.style && rt(t.style[o])) || Py(o, e)) && (n[o] = r[o]);
  return n;
}
function Dy(e, t) {
  const r = qd(e, t);
  for (const n in e)
    if (rt(e[n]) || rt(t[n])) {
      const o = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      r[o] = e[n];
    }
  return r;
}
function Zd(e, t, r, n = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  );
}
const ha = (e) => Array.isArray(e),
  mC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  gC = (e) => (ha(e) ? e[e.length - 1] || 0 : e);
function Rs(e) {
  const t = rt(e) ? e.get() : e;
  return mC(t) ? t.toValue() : t;
}
function yC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i,
) {
  const s = { latestValues: vC(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const Vy = (e) => (t, r) => {
  const n = S.useContext(Ja),
    o = S.useContext(Ri),
    i = () => yC(e, t, n, o);
  return r ? i() : nl(i);
};
function vC(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const f in i) o[f] = Rs(i[f]);
  let { initial: s, animate: a } = e;
  const l = rl(e),
    u = Cy(e);
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
      !tl(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const x = Zd(e, h);
        if (!x) return;
        const { transitionEnd: v, transition: w, ...p } = x;
        for (const g in p) {
          let y = p[g];
          if (Array.isArray(y)) {
            const k = c ? y.length - 1 : 0;
            y = y[k];
          }
          y !== null && (o[g] = y);
        }
        for (const g in v) o[g] = v[g];
      }),
    o
  );
}
const xC = {
    useVisualState: Vy({
      scrapeMotionValuesFromProps: Dy,
      createRenderState: My,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Xd(
          r,
          n,
          { enableHardwareAcceleration: !1 },
          Kd(t.tagName),
          e.transformTemplate,
        ),
          Iy(t, r);
      },
    }),
  },
  bC = {
    useVisualState: Vy({
      scrapeMotionValuesFromProps: qd,
      createRenderState: Yd,
    }),
  };
function SC(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Ud(e) ? xC : bC),
    preloadedFeatures: r,
    useRender: hC(t),
    createVisualElement: n,
    Component: e,
  };
}
function Kt(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const By = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function il(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const kC = (e) => (t) => By(t) && e(t, il(t));
function qt(e, t, r, n) {
  return Kt(e, t, kC(r), n);
}
const wC = (e, t) => (r) => t(e(r)),
  kr = (...e) => e.reduce(wC);
function Ny(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const xh = Ny("dragHorizontal"),
  bh = Ny("dragVertical");
function Oy(e) {
  let t = !1;
  if (e === "y") t = bh();
  else if (e === "x") t = xh();
  else {
    const r = xh(),
      n = bh();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Fy() {
  const e = Oy(!0);
  return e ? (e(), !1) : !0;
}
class Rr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Sh(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"),
    n = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || Fy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[n] && a[n](i, s);
    };
  return qt(e.current, r, o, { passive: !e.getProps()[n] });
}
class CC extends Rr {
  mount() {
    this.unmount = kr(Sh(this.node, !0), Sh(this.node, !1));
  }
  unmount() {}
}
class _C extends Rr {
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
    this.unmount = kr(
      Kt(this.node.current, "focus", () => this.onFocus()),
      Kt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Wy = (e, t) => (t ? (e === t ? !0 : Wy(e, t.parentElement)) : !1),
  Tt = (e) => e;
function Kl(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, il(r));
}
class PC extends Rr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Tt),
      (this.removeEndListeners = Tt),
      (this.removeAccessibleListeners = Tt),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const n = this.node.getProps(),
          i = qt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Wy(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
            },
            { passive: !(n.onTap || n.onPointerUp) },
          ),
          s = qt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = kr(i, s)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Kl("up", this.node.getProps().onTap);
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Kt(this.node.current, "keyup", s)),
              Kl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          r = Kt(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && Kl("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Kt(this.node.current, "blur", n);
        this.removeAccessibleListeners = kr(r, o);
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
      !Fy()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && n(t, r);
  }
  mount() {
    const t = this.node.getProps(),
      r = qt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Kt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = kr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const gc = new WeakMap(),
  Ql = new WeakMap(),
  EC = (e) => {
    const t = gc.get(e.target);
    t && t(e);
  },
  zC = (e) => {
    e.forEach(EC);
  };
function TC({ root: e, ...t }) {
  const r = e || document;
  Ql.has(r) || Ql.set(r, {});
  const n = Ql.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(zC, { root: e, ...t })), n[o];
}
function AC(e, t, r) {
  const n = TC(t);
  return (
    gc.set(e, r),
    n.observe(e),
    () => {
      gc.delete(e), n.unobserve(e);
    }
  );
}
const RC = { some: 0, all: 1 };
class $C extends Rr {
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
        threshold: typeof o == "number" ? o : RC[o],
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
          h = c ? d : f;
        h && h(u);
      };
    return AC(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(MC(t, r)) && this.startObserver();
  }
  unmount() {}
}
function MC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const jC = {
  inView: { Feature: $C },
  tap: { Feature: PC },
  focus: { Feature: _C },
  hover: { Feature: CC },
};
function Hy(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
const LC = (e) => /^\-?\d*\.?\d+$/.test(e),
  IC = (e) => /^0[^.\s]+$/.test(e),
  Zt = { delta: 0, timestamp: 0 },
  Uy = (1 / 60) * 1e3,
  DC = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  Gy =
    typeof window < "u"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(DC()), Uy);
function VC(e) {
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
const BC = 40;
let yc = !0,
  gi = !1,
  vc = !1;
const ji = ["read", "update", "preRender", "render", "postRender"],
  sl = ji.reduce((e, t) => ((e[t] = VC(() => (gi = !0))), e), {}),
  Fe = ji.reduce((e, t) => {
    const r = sl[t];
    return (e[t] = (n, o = !1, i = !1) => (gi || OC(), r.schedule(n, o, i))), e;
  }, {}),
  Pr = ji.reduce((e, t) => ((e[t] = sl[t].cancel), e), {}),
  ql = ji.reduce((e, t) => ((e[t] = () => sl[t].process(Zt)), e), {}),
  NC = (e) => sl[e].process(Zt),
  Yy = (e) => {
    (gi = !1),
      (Zt.delta = yc ? Uy : Math.max(Math.min(e - Zt.timestamp, BC), 1)),
      (Zt.timestamp = e),
      (vc = !0),
      ji.forEach(NC),
      (vc = !1),
      gi && ((yc = !1), Gy(Yy));
  },
  OC = () => {
    (gi = !0), (yc = !0), vc || Gy(Yy);
  };
function Jd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ef(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class tf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jd(this.subscriptions, t), () => ef(this.subscriptions, t);
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
function rf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const FC = (e) => !isNaN(parseFloat(e));
class WC {
  constructor(t, r = {}) {
    (this.version = "9.1.7"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        (this.prev = this.current), (this.current = n);
        const { delta: i, timestamp: s } = Zt;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Fe.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Fe.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = FC(this.current)),
      (this.owner = r.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new tf());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            Fe.read(() => {
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
      ? rf(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Jn(e, t) {
  return new WC(e, t);
}
const nf = (e, t) => (r) =>
    !!(
      ($i(r) && tC.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Xy = (e, t, r) => (n) => {
    if (!$i(n)) return n;
    const [o, i, s, a] = n.match(mi);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  HC = (e) => Zn(0, 255, e),
  Zl = { ...an, transform: (e) => Math.round(HC(e)) },
  Hr = {
    test: nf("rgb", "red"),
    parse: Xy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      Zl.transform(e) +
      ", " +
      Zl.transform(t) +
      ", " +
      Zl.transform(r) +
      ", " +
      Bo(Vo.transform(n)) +
      ")",
  };
function UC(e) {
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
const xc = { test: nf("#"), parse: UC, transform: Hr.transform },
  An = {
    test: nf("hsl", "hue"),
    parse: Xy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ot.transform(Bo(t)) +
      ", " +
      Ot.transform(Bo(r)) +
      ", " +
      Bo(Vo.transform(n)) +
      ")",
  },
  He = {
    test: (e) => Hr.test(e) || xc.test(e) || An.test(e),
    parse: (e) =>
      Hr.test(e) ? Hr.parse(e) : An.test(e) ? An.parse(e) : xc.parse(e),
    transform: (e) =>
      $i(e) ? e : e.hasOwnProperty("red") ? Hr.transform(e) : An.transform(e),
  },
  Ky = "${c}",
  Qy = "${n}";
function GC(e) {
  var t, r;
  return (
    isNaN(e) &&
    $i(e) &&
    (((t = e.match(mi)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(mc)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
function ma(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0,
    n = 0;
  const o = e.match(mc);
  o && ((r = o.length), (e = e.replace(mc, Ky)), t.push(...o.map(He.parse)));
  const i = e.match(mi);
  return (
    i && ((n = i.length), (e = e.replace(mi, Qy)), t.push(...i.map(an.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  );
}
function qy(e) {
  return ma(e).values;
}
function Zy(e) {
  const { values: t, numColors: r, tokenised: n } = ma(e),
    o = t.length;
  return (i) => {
    let s = n;
    for (let a = 0; a < o; a++)
      s = s.replace(a < r ? Ky : Qy, a < r ? He.transform(i[a]) : Bo(i[a]));
    return s;
  };
}
const YC = (e) => (typeof e == "number" ? 0 : e);
function XC(e) {
  const t = qy(e);
  return Zy(e)(t.map(YC));
}
const Er = {
    test: GC,
    parse: qy,
    createTransformer: Zy,
    getAnimatableNone: XC,
  },
  KC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function QC(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(mi) || [];
  if (!n) return e;
  const o = r.replace(n, "");
  let i = KC.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const qC = /([a-z-]*)\(.*?\)/g,
  bc = {
    ...Er,
    getAnimatableNone: (e) => {
      const t = e.match(qC);
      return t ? t.map(QC).join(" ") : e;
    },
  },
  ZC = {
    ...Ty,
    color: He,
    backgroundColor: He,
    outlineColor: He,
    fill: He,
    stroke: He,
    borderColor: He,
    borderTopColor: He,
    borderRightColor: He,
    borderBottomColor: He,
    borderLeftColor: He,
    filter: bc,
    WebkitFilter: bc,
  },
  of = (e) => ZC[e];
function sf(e, t) {
  let r = of(e);
  return (
    r !== bc && (r = Er), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const Jy = (e) => (t) => t.test(e),
  JC = { test: (e) => e === "auto", parse: (e) => e },
  ev = [an, D, Ot, ir, nC, rC, JC],
  yo = (e) => ev.find(Jy(e)),
  e2 = [...ev, He, Er],
  t2 = (e) => e2.find(Jy(e));
function r2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function n2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function al(e, t, r) {
  const n = e.getProps();
  return Zd(n, t, r !== void 0 ? r : n.custom, r2(e), n2(e));
}
function o2(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Jn(r));
}
function i2(e, t) {
  const r = al(e, t);
  let {
    transitionEnd: n = {},
    transition: o = {},
    ...i
  } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = gC(i[s]);
    o2(e, s, a);
  }
}
function s2(e, t, r) {
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
          (typeof c == "string" && (LC(c) || IC(c))
            ? (c = parseFloat(c))
            : !t2(c) && Er.test(u) && (c = sf(l, u)),
          e.addValue(l, Jn(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function a2(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function l2(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = a2(o, t);
    if (i !== void 0) n[o] = i;
    else {
      const s = r.getValue(o);
      s && (n[o] = s.get());
    }
  }
  return n;
}
function ga(e) {
  return !!(rt(e) && e.add);
}
const u2 = "framerAppearId",
  c2 = "data-" + Qd(u2);
let yi = Tt;
const $s = (e) => e * 1e3,
  d2 = { current: !1 },
  af = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  lf = (e) => (t) => 1 - e(1 - t),
  uf = (e) => e * e,
  f2 = lf(uf),
  cf = af(uf),
  ce = (e, t, r) => -r * e + r * t + e;
function Jl(e, t, r) {
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
function p2({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (o = Jl(l, a, e + 1 / 3)), (i = Jl(l, a, e)), (s = Jl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n,
  };
}
const eu = (e, t, r) => {
    const n = e * e;
    return Math.sqrt(Math.max(0, r * (t * t - n) + n));
  },
  h2 = [xc, Hr, An],
  m2 = (e) => h2.find((t) => t.test(e));
function kh(e) {
  const t = m2(e);
  let r = t.parse(e);
  return t === An && (r = p2(r)), r;
}
const tv = (e, t) => {
  const r = kh(e),
    n = kh(t),
    o = { ...r };
  return (i) => (
    (o.red = eu(r.red, n.red, i)),
    (o.green = eu(r.green, n.green, i)),
    (o.blue = eu(r.blue, n.blue, i)),
    (o.alpha = ce(r.alpha, n.alpha, i)),
    Hr.transform(o)
  );
};
function rv(e, t) {
  return typeof e == "number"
    ? (r) => ce(e, t, r)
    : He.test(e)
      ? tv(e, t)
      : ov(e, t);
}
const nv = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, s) => rv(i, t[s]));
    return (i) => {
      for (let s = 0; s < n; s++) r[s] = o[s](i);
      return r;
    };
  },
  g2 = (e, t) => {
    const r = { ...e, ...t },
      n = {};
    for (const o in r)
      e[o] !== void 0 && t[o] !== void 0 && (n[o] = rv(e[o], t[o]));
    return (o) => {
      for (const i in n) r[i] = n[i](o);
      return r;
    };
  },
  ov = (e, t) => {
    const r = Er.createTransformer(t),
      n = ma(e),
      o = ma(t);
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? kr(nv(n.values, o.values), r)
      : (s) => `${s > 0 ? t : e}`;
  },
  vi = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  wh = (e, t) => (r) => ce(e, t, r);
function y2(e) {
  return typeof e == "number"
    ? wh
    : typeof e == "string"
      ? He.test(e)
        ? tv
        : ov
      : Array.isArray(e)
        ? nv
        : typeof e == "object"
          ? g2
          : wh;
}
function v2(e, t, r) {
  const n = [],
    o = r || y2(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] : t;
      a = kr(l, a);
    }
    n.push(a);
  }
  return n;
}
function iv(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  yi(i === t.length),
    yi(!n || !Array.isArray(n) || n.length === i - 1),
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = v2(t, n, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = vi(e[c], e[c + 1], u);
      return s[c](d);
    };
  return r ? (u) => l(Zn(e[0], e[i - 1], u)) : l;
}
function x2(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = vi(0, t, n);
    e.push(ce(r, 1, o));
  }
}
function b2(e) {
  const t = [0];
  return x2(t, e.length - 1), t;
}
function S2(e, t) {
  return e.map((r) => r * t);
}
const sv = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  k2 = 1e-7,
  w2 = 12;
function C2(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = sv(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > k2 && ++a < w2);
  return s;
}
function av(e, t, r, n) {
  if (e === t && r === n) return Tt;
  const o = (i) => C2(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : sv(o(i), t, n));
}
const lv = (e) => 1 - Math.sin(Math.acos(e)),
  df = lf(lv),
  _2 = af(df),
  uv = av(0.33, 1.53, 0.69, 0.99),
  ff = lf(uv),
  P2 = af(ff),
  E2 = (e) =>
    (e *= 2) < 1 ? 0.5 * ff(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ch = {
    linear: Tt,
    easeIn: uf,
    easeInOut: cf,
    easeOut: f2,
    circIn: lv,
    circInOut: _2,
    circOut: df,
    backIn: ff,
    backInOut: P2,
    backOut: uv,
    anticipate: E2,
  },
  _h = (e) => {
    if (Array.isArray(e)) {
      yi(e.length === 4);
      const [t, r, n, o] = e;
      return av(t, r, n, o);
    } else if (typeof e == "string") return yi(Ch[e] !== void 0), Ch[e];
    return e;
  },
  z2 = (e) => Array.isArray(e) && typeof e[0] != "number";
function T2(e, t) {
  return e.map(() => t || cf).splice(0, e.length - 1);
}
function Sc({ keyframes: e, ease: t = cf, times: r, duration: n = 300 }) {
  e = [...e];
  const o = z2(t) ? t.map(_h) : _h(t),
    i = { done: !1, value: e[0] },
    s = S2(r && r.length === e.length ? r : b2(e), n);
  function a() {
    return iv(s, e, { ease: Array.isArray(o) ? o : T2(e, o) });
  }
  let l = a();
  return {
    next: (u) => ((i.value = l(u)), (i.done = u >= n), i),
    flipTarget: () => {
      e.reverse(), (l = a());
    },
  };
}
const tu = 0.001,
  A2 = 0.01,
  R2 = 10,
  $2 = 0.05,
  M2 = 1;
function j2({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Zn($2, M2, s)),
    (e = Zn(A2, R2, e / 1e3)),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - r,
            h = kc(u, s),
            x = Math.exp(-d);
          return tu - (f / h) * x;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * r + r,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            v = kc(Math.pow(u, 2), s);
          return ((-o(u) + tu > 0 ? -1 : 1) * ((f - h) * x)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -tu + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = I2(o, i, a);
  if (((e = e * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: s * 2 * Math.sqrt(n * u), duration: e };
  }
}
const L2 = 12;
function I2(e, t, r) {
  let n = r;
  for (let o = 1; o < L2; o++) n = n - e(n) / t(n);
  return n;
}
function kc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const D2 = ["duration", "bounce"],
  V2 = ["stiffness", "damping", "mass"];
function Ph(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function B2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ph(e, V2) && Ph(e, D2)) {
    const r = j2(e);
    (t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
const N2 = 5;
function cv({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
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
    } = B2(n);
  let h = O2,
    x = c ? -(c / 1e3) : 0;
  const v = l / (2 * Math.sqrt(a * u));
  function w() {
    const p = i - o,
      g = Math.sqrt(a / u) / 1e3,
      y = Math.abs(p) < 5;
    if ((r || (r = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), v < 1)) {
      const k = kc(g, v);
      h = (C) => {
        const _ = Math.exp(-v * g * C);
        return (
          i -
          _ * (((x + v * g * p) / k) * Math.sin(k * C) + p * Math.cos(k * C))
        );
      };
    } else if (v === 1) h = (k) => i - Math.exp(-g * k) * (p + (x + g * p) * k);
    else {
      const k = g * Math.sqrt(v * v - 1);
      h = (C) => {
        const _ = Math.exp(-v * g * C),
          P = Math.min(k * C, 300);
        return (
          i - (_ * ((x + v * g * p) * Math.sinh(P) + k * p * Math.cosh(P))) / k
        );
      };
    }
  }
  return (
    w(),
    {
      next: (p) => {
        const g = h(p);
        if (f) s.done = p >= d;
        else {
          let y = x;
          if (p !== 0)
            if (v < 1) {
              const _ = Math.max(0, p - N2);
              y = rf(g - h(_), p - _);
            } else y = 0;
          const k = Math.abs(y) <= r,
            C = Math.abs(i - g) <= t;
          s.done = k && C;
        }
        return (s.value = s.done ? i : g), s;
      },
      flipTarget: () => {
        (x = -x), ([o, i] = [i, o]), w();
      },
    }
  );
}
cv.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const O2 = (e) => 0;
function F2({
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
const W2 = { decay: F2, keyframes: Sc, tween: Sc, spring: cv };
function dv(e, t, r = 0) {
  return e - t - r;
}
function H2(e, t = 0, r = 0, n = !0) {
  return n ? dv(t + -e, t, r) : t - (e - t) + r;
}
function U2(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const G2 = (e) => {
  const t = ({ delta: r }) => e(r);
  return { start: () => Fe.update(t, !0), stop: () => Pr.update(t) };
};
function ya({
  duration: e,
  driver: t = G2,
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
  type: h = "keyframes",
  ...x
}) {
  const v = r;
  let w,
    p = 0,
    g = e,
    y = !1,
    k = !0,
    C;
  const _ = W2[s.length > 2 ? "keyframes" : h] || Sc,
    P = s[0],
    E = s[s.length - 1];
  let R = { done: !1, value: P };
  const { needsInterpolation: T } = _;
  T && T(P, E) && ((C = iv([0, 100], [P, E], { clamp: !1 })), (s = [0, 100]));
  const B = _({ ...x, duration: e, keyframes: s });
  function xe() {
    p++,
      o === "reverse"
        ? ((k = p % 2 === 0), (r = H2(r, g, i, k)))
        : ((r = dv(r, g, i)), o === "mirror" && B.flipTarget()),
      (y = !1),
      d && d();
  }
  function Ie() {
    w && w.stop(), c && c();
  }
  function Re(re) {
    k || (re = -re),
      (r += re),
      y ||
        ((R = B.next(Math.max(0, r))),
        C && (R.value = C(R.value)),
        (y = k ? R.done : r <= 0)),
      f && f(R.value),
      y &&
        (p === 0 && (g = g !== void 0 ? g : r),
        p < n ? U2(r, g, i, k) && xe() : Ie());
  }
  function te() {
    l && l(), (w = t(Re)), w.start();
  }
  return (
    a && te(),
    {
      stop: () => {
        u && u(), w && w.stop();
      },
      set currentTime(re) {
        (r = v), Re(re);
      },
      sample: (re) => {
        r = v;
        const ne = e && typeof e == "number" ? Math.max(e * 0.5, 50) : 50;
        let $ = 0;
        for (Re(0); $ <= re; ) {
          const V = re - $;
          Re(Math.min(V, ne)), ($ += ne);
        }
        return R;
      },
    }
  );
}
function Y2(e) {
  return !e || Array.isArray(e) || (typeof e == "string" && fv[e]);
}
const _o = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  fv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _o([0, 0.65, 0.55, 1]),
    circOut: _o([0.55, 0, 1, 0.45]),
    backIn: _o([0.31, 0.01, 0.66, -0.59]),
    backOut: _o([0.33, 1.53, 0.69, 0.99]),
  };
function X2(e) {
  if (e) return Array.isArray(e) ? _o(e) : fv[e];
}
function K2(
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
      easing: X2(a),
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    },
  );
}
const Eh = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  ru = {},
  pv = {};
for (const e in Eh)
  pv[e] = () => (ru[e] === void 0 && (ru[e] = Eh[e]()), ru[e]);
function Q2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const q2 = new Set(["opacity", "clipPath", "filter", "transform"]),
  as = 10;
function Z2(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      pv.waapi() &&
      q2.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0
    )
  )
    return !1;
  let { keyframes: s, duration: a = 300, elapsed: l = 0, ease: u } = o;
  if (o.type === "spring" || !Y2(o.ease)) {
    if (o.repeat === 1 / 0) return;
    const d = ya({ ...o, elapsed: 0 });
    let f = { done: !1, value: s[0] };
    const h = [];
    let x = 0;
    for (; !f.done && x < 2e4; ) (f = d.sample(x)), h.push(f.value), (x += as);
    (s = h), (a = x - as), (u = "linear");
  }
  const c = K2(e.owner.current, t, s, {
    ...o,
    delay: -l,
    duration: a,
    ease: u,
  });
  return (
    (c.onfinish = () => {
      e.set(Q2(s, o)), Fe.update(() => c.cancel()), n && n();
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
          const f = ya({ ...o, autoplay: !1 });
          e.setWithVelocity(f.sample(d - as).value, f.sample(d).value, as);
        }
        Fe.update(() => c.cancel());
      },
    }
  );
}
function hv(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (Pr.read(n), e(i - t));
    };
  return Fe.read(n, !0), () => Pr.read(n);
}
function J2({ keyframes: e, elapsed: t, onUpdate: r, onComplete: n }) {
  const o = () => {
    r && r(e[e.length - 1]), n && n();
  };
  return t ? { stop: hv(o, -t) } : o();
}
function e_({
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
  onStop: h,
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
  function g(k) {
    v && v.stop(),
      (v = ya({
        keyframes: [0, 1],
        velocity: 0,
        ...k,
        driver: c,
        onUpdate: (C) => {
          d && d(C), k.onUpdate && k.onUpdate(C);
        },
        onComplete: f,
        onStop: h,
      }));
  }
  function y(k) {
    g({ type: "spring", stiffness: s, damping: a, restDelta: l, ...k });
  }
  if (w(x)) y({ velocity: t, keyframes: [x, p(x)] });
  else {
    let k = o * t + x;
    typeof u < "u" && (k = u(k));
    const C = p(k),
      _ = C === r ? -1 : 1;
    let P, E;
    const R = (T) => {
      (P = E),
        (E = T),
        (t = rf(T - P, Zt.delta)),
        ((_ === 1 && T > C) || (_ === -1 && T < C)) &&
          y({ keyframes: [T, C], velocity: t });
    };
    g({
      type: "decay",
      keyframes: [x, 0],
      velocity: t,
      timeConstant: i,
      power: o,
      restDelta: l,
      modifyTarget: u,
      onUpdate: w(k) ? R : void 0,
    });
  }
  return { stop: () => v && v.stop() };
}
const t_ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  r_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  n_ = { type: "keyframes", duration: 0.8 },
  o_ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  i_ = (e, { keyframes: t }) =>
    t.length > 2
      ? n_
      : sn.has(e)
        ? e.startsWith("scale")
          ? r_(t[1])
          : t_
        : o_,
  wc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && Er.test(t) && !t.startsWith("url("))
        );
function s_({
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
function zh(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function Th(e) {
  return typeof e == "number" ? 0 : sf("", e);
}
function mv(e, t) {
  return e[t] || e.default || e;
}
function a_(e, t, r, n) {
  const o = wc(t, r);
  let i = n.from !== void 0 ? n.from : e.get();
  return (
    i === "none" && o && typeof r == "string"
      ? (i = sf(t, r))
      : zh(i) && typeof r == "string"
        ? (i = Th(r))
        : !Array.isArray(r) && zh(r) && typeof i == "string" && (r = Th(i)),
    Array.isArray(r) ? (r[0] === null && (r[0] = i), r) : [i, r]
  );
}
const pf =
  (e, t, r, n = {}) =>
  (o) => {
    const i = mv(n, e) || {},
      s = i.delay || n.delay || 0;
    let { elapsed: a = 0 } = n;
    a = a - $s(s);
    const l = a_(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = wc(e, u),
      f = wc(e, c);
    let h = {
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
    if (!d || !f || d2.current || i.type === !1) return J2(h);
    if (i.type === "inertia") return e_(h);
    if (
      (s_(i) || (h = { ...h, ...i_(e, h) }),
      h.duration && (h.duration = $s(h.duration)),
      h.repeatDelay && (h.repeatDelay = $s(h.repeatDelay)),
      t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate)
    ) {
      const x = Z2(t, e, h);
      if (x) return x;
    }
    return ya(h);
  };
function l_(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Cc(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string") n = Cc(e, t, r);
  else {
    const o = typeof t == "function" ? al(e, t, r.custom) : t;
    n = gv(e, o, r);
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
function Cc(e, t, r = {}) {
  const n = al(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => gv(e, n, r) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return u_(e, t, u + l, c, d, r);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(u);
  } else return Promise.all([i(), s(r.delay)]);
}
function gv(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
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
      h = a[d];
    if (!f || h === void 0 || (c && d_(c, d))) continue;
    const x = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const w = e.getProps()[c2];
      w && (x.elapsed = window.HandoffAppearAnimations(w, d, f, Fe));
    }
    let v = f.start(
      pf(d, f, h, e.shouldReduceMotion && sn.has(d) ? { type: !1 } : x),
    );
    ga(l) && (l.add(d), (v = v.then(() => l.remove(d)))), u.push(v);
  }
  return Promise.all(u).then(() => {
    s && i2(e, s);
  });
}
function u_(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => a - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(c_)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Cc(u, t, { ...i, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function c_(e, t) {
  return e.sortNodePosition(t);
}
function d_({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
const f_ = [...Fd].reverse(),
  p_ = Fd.length;
function h_(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => l_(e, r, n)));
}
function m_(e) {
  let t = h_(e);
  const r = y_();
  let n = !0;
  const o = (l, u) => {
    const c = al(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
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
      h = new Set();
    let x = {},
      v = 1 / 0;
    for (let p = 0; p < p_; p++) {
      const g = f_[p],
        y = r[g],
        k = c[g] !== void 0 ? c[g] : d[g],
        C = pi(k),
        _ = g === u ? y.isActive : null;
      _ === !1 && (v = p);
      let P = k === d[g] && k !== c[g] && C;
      if (
        (P && n && e.manuallyAnimateOnMount && (P = !1),
        (y.protectedKeys = { ...x }),
        (!y.isActive && _ === null) ||
          (!k && !y.prevProp) ||
          tl(k) ||
          typeof k == "boolean")
      )
        continue;
      const E = g_(y.prevProp, k);
      let R = E || (g === u && y.isActive && !P && C) || (p > v && C);
      const T = Array.isArray(k) ? k : [k];
      let B = T.reduce(o, {});
      _ === !1 && (B = {});
      const { prevResolvedValues: xe = {} } = y,
        Ie = { ...xe, ...B },
        Re = (te) => {
          (R = !0), h.delete(te), (y.needsAnimating[te] = !0);
        };
      for (const te in Ie) {
        const re = B[te],
          ne = xe[te];
        x.hasOwnProperty(te) ||
          (re !== ne
            ? ha(re) && ha(ne)
              ? !Hy(re, ne) || E
                ? Re(te)
                : (y.protectedKeys[te] = !0)
              : re !== void 0
                ? Re(te)
                : h.add(te)
            : re !== void 0 && h.has(te)
              ? Re(te)
              : (y.protectedKeys[te] = !0));
      }
      (y.prevProp = k),
        (y.prevResolvedValues = B),
        y.isActive && (x = { ...x, ...B }),
        n && e.blockInitialAnimation && (R = !1),
        R &&
          !P &&
          f.push(
            ...T.map((te) => ({ animation: te, options: { type: g, ...l } })),
          );
    }
    if (h.size) {
      const p = {};
      h.forEach((g) => {
        const y = e.getBaseTarget(g);
        y !== void 0 && (p[g] = y);
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
      d.forEach((h) => {
        var x;
        return (x = h.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (r[l].isActive = u);
    const f = s(c, l);
    for (const h in r) r[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
  };
}
function g_(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Hy(t, e) : !1;
}
function jr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function y_() {
  return {
    animate: jr(!0),
    whileInView: jr(),
    whileHover: jr(),
    whileTap: jr(),
    whileDrag: jr(),
    whileFocus: jr(),
    exit: jr(),
  };
}
class v_ extends Rr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = m_(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), tl(t) && (this.unmount = t.subscribe(this.node));
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
let x_ = 0;
class b_ extends Rr {
  constructor() {
    super(...arguments), (this.id = x_++);
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
const S_ = { animation: { Feature: v_ }, exit: { Feature: b_ } },
  Ah = (e, t) => Math.abs(e - t);
function k_(e, t) {
  const r = Ah(e.x, t.x),
    n = Ah(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class yv {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = ou(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = k_(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: h } = Zt;
        this.history.push({ ...f, timestamp: h });
        const { onStart: x, onMove: v } = this.handlers;
        c ||
          (x && x(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = nu(c, this.transformPagePoint)),
          Fe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = ou(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : nu(c, this.transformPagePoint),
            this.history,
          );
        this.startEvent && d && d(u, h), f && f(u, h);
      }),
      !By(t))
    )
      return;
    (this.handlers = r), (this.transformPagePoint = n);
    const o = il(t),
      i = nu(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = Zt;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = r;
    l && l(t, ou(i, this.history)),
      (this.removeListeners = kr(
        qt(window, "pointermove", this.handlePointerMove),
        qt(window, "pointerup", this.handlePointerUp),
        qt(window, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Pr.update(this.updatePoint);
  }
}
function nu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ou({ point: e }, t) {
  return {
    point: e,
    delta: Rh(e, vv(t)),
    offset: Rh(e, w_(t)),
    velocity: C_(t, 0.1),
  };
}
function w_(e) {
  return e[0];
}
function vv(e) {
  return e[e.length - 1];
}
function C_(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = vv(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > $s(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = (o.timestamp - n.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ut(e) {
  return e.max - e.min;
}
function _c(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function $h(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ce(t.min, t.max, e.origin)),
    (e.scale = ut(r) / ut(t)),
    (_c(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ce(r.min, r.max, e.origin) - e.originPoint),
    (_c(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function No(e, t, r, n) {
  $h(e.x, t.x, r.x, n ? n.originX : void 0),
    $h(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Mh(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + ut(t));
}
function __(e, t, r) {
  Mh(e.x, t.x, r.x), Mh(e.y, t.y, r.y);
}
function jh(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + ut(t));
}
function Oo(e, t, r) {
  jh(e.x, t.x, r.x), jh(e.y, t.y, r.y);
}
function P_(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ce(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ce(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function Lh(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function E_(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: Lh(e.x, r, o), y: Lh(e.y, t, n) };
}
function Ih(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function z_(e, t) {
  return { x: Ih(e.x, t.x), y: Ih(e.y, t.y) };
}
function T_(e, t) {
  let r = 0.5;
  const n = ut(e),
    o = ut(t);
  return (
    o > n
      ? (r = vi(t.min, t.max - n, e.min))
      : n > o && (r = vi(e.min, e.max - o, t.min)),
    Zn(0, 1, r)
  );
}
function A_(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Pc = 0.35;
function R_(e = Pc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Pc),
    { x: Dh(e, "left", "right"), y: Dh(e, "top", "bottom") }
  );
}
function Dh(e, t, r) {
  return { min: Vh(e, t), max: Vh(e, r) };
}
function Vh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fo = () => ({ x: Bh(), y: Bh() }),
  Nh = () => ({ min: 0, max: 0 }),
  be = () => ({ x: Nh(), y: Nh() });
function Mt(e) {
  return [e("x"), e("y")];
}
function xv({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function $_({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function M_(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function iu(e) {
  return e === void 0 || e === 1;
}
function Ec({ scale: e, scaleX: t, scaleY: r }) {
  return !iu(e) || !iu(t) || !iu(r);
}
function Dr(e) {
  return Ec(e) || bv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function bv(e) {
  return Oh(e.x) || Oh(e.y);
}
function Oh(e) {
  return e && e !== "0%";
}
function va(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function Fh(e, t, r, n, o) {
  return o !== void 0 && (e = va(e, o, n)), va(e, r, n) + t;
}
function zc(e, t = 0, r = 1, n, o) {
  (e.min = Fh(e.min, t, r, n, o)), (e.max = Fh(e.max, t, r, n, o));
}
function Sv(e, { x: t, y: r }) {
  zc(e.x, t.translate, t.scale, t.originPoint),
    zc(e.y, r.translate, r.scale, r.originPoint);
}
function j_(e, t, r, n = !1) {
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
        Rn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Sv(e, s)),
      n && Dr(i.latestValues) && Rn(e, i.latestValues));
  }
  (t.x = Wh(t.x)), (t.y = Wh(t.y));
}
function Wh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function lr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Hh(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = ce(e.min, e.max, i);
  zc(e, t[r], t[n], s, t.scale);
}
const L_ = ["x", "scaleX", "originX"],
  I_ = ["y", "scaleY", "originY"];
function Rn(e, t) {
  Hh(e.x, t, L_), Hh(e.y, t, I_);
}
function kv(e, t) {
  return xv(M_(e.getBoundingClientRect(), t));
}
function D_(e, t, r) {
  const n = kv(e, r),
    { scroll: o } = t;
  return o && (lr(n.x, o.offset.x), lr(n.y, o.offset.y)), n;
}
const V_ = new WeakMap();
class B_ {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = be()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(il(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Oy(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Mt((x) => {
            let v = this.getAxisMotionValue(x).get() || 0;
            if (Ot.test(v)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const p = w.layout.layoutBox[x];
                p && (v = ut(p) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[x] = v;
          }),
          f && f(l, u);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: x } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = N_(x)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, x),
          this.updateAxis("y", u.point, x),
          this.visualElement.render(),
          h && h(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new yv(
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
    if (!n || !ls(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (s = P_(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints;
    t && Tn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
        ? (this.constraints = E_(n.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = R_(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Mt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = A_(n.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Tn(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = D_(n, o.root, this.visualElement.getTransformPagePoint());
    let s = z_(o.layout.layoutBox, i);
    if (r) {
      const a = r($_(s));
      (this.hasMutatedConstraints = !!a), a && (s = xv(a));
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
      u = Mt((c) => {
        if (!ls(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
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
    return n.start(pf(t, n, 0, r));
  }
  stopAnimation() {
    Mt((t) => this.getAxisMotionValue(t).stop());
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
    Mt((r) => {
      const { drag: n } = this.getProps();
      if (!ls(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - ce(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!Tn(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Mt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = T_({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Mt((s) => {
        if (!ls(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ce(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    V_.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = qt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        Tn(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const s = Kt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Mt((c) => {
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
        dragElastic: s = Pc,
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
function ls(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function N_(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class O_ extends Rr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Tt),
      (this.removeListeners = Tt),
      (this.controls = new B_(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Tt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
class F_ extends Rr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Tt);
  }
  onPointerDown(t) {
    this.session = new yv(t, this.createPanHandlers(), {
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
    this.removePointerDownListener = qt(this.node.current, "pointerdown", (t) =>
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
function W_() {
  const e = S.useContext(Ri);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = S.useId();
  return S.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function H_() {
  return U_(S.useContext(Ri));
}
function U_(e) {
  return e === null ? !0 : e.isPresent;
}
function Uh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const vo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const r = Uh(e, t.target.x),
        n = Uh(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  wv = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function G_(e) {
  const t = wv.exec(e);
  if (!t) return [,];
  const [, r, n] = t;
  return [r, n];
}
function Tc(e, t, r = 1) {
  const [n, o] = G_(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  return i ? i.trim() : hc(o) ? Tc(o, t, r + 1) : o;
}
function Y_(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element)) return { target: t, transitionEnd: r };
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!hc(i)) return;
      const s = Tc(i, n);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!hc(i)) continue;
    const s = Tc(i, n);
    s && ((t[o] = s), r && r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const Gh = "_$css",
  X_ = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes("var("),
        i = [];
      o && (e = e.replace(wv, (h) => (i.push(h), Gh)));
      const s = Er.parse(e);
      if (s.length > 5) return n;
      const a = Er.createTransformer(e),
        l = typeof s[0] != "number" ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const d = ce(u, c, 0.5);
      typeof s[2 + l] == "number" && (s[2 + l] /= d),
        typeof s[3 + l] == "number" && (s[3 + l] /= d);
      let f = a(s);
      if (o) {
        let h = 0;
        f = f.replace(Gh, () => {
          const x = i[h];
          return h++, x;
        });
      }
      return f;
    },
  };
class K_ extends Sa.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    Qw(Q_),
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
      (Do.hasEverUpdated = !0);
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
              Fe.postRender(() => {
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
function Cv(e) {
  const [t, r] = W_(),
    n = S.useContext(Hd);
  return Sa.createElement(K_, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: S.useContext(_y),
    isPresent: t,
    safeToRemove: r,
  });
}
const Q_ = {
  borderRadius: {
    ...vo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: vo,
  borderTopRightRadius: vo,
  borderBottomLeftRadius: vo,
  borderBottomRightRadius: vo,
  boxShadow: X_,
};
function q_(e, t, r = {}) {
  const n = rt(e) ? e : Jn(e);
  return (
    n.start(pf("", n, t, r)),
    { stop: () => n.stop(), isAnimating: () => n.isAnimating() }
  );
}
const _v = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Z_ = _v.length,
  Yh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xh = (e) => typeof e == "number" || D.test(e);
function J_(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ce(0, r.opacity !== void 0 ? r.opacity : 1, e5(n))),
      (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, t5(n))))
    : i &&
      (e.opacity = ce(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n,
      ));
  for (let s = 0; s < Z_; s++) {
    const a = `border${_v[s]}Radius`;
    let l = Kh(t, a),
      u = Kh(r, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Xh(l) === Xh(u)
        ? ((e[a] = Math.max(ce(Yh(l), Yh(u), n), 0)),
          (Ot.test(u) || Ot.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = ce(t.rotate || 0, r.rotate || 0, n));
}
function Kh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const e5 = Pv(0, 0.5, df),
  t5 = Pv(0.5, 0.95, Tt);
function Pv(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(vi(e, t, n)));
}
function Qh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function pt(e, t) {
  Qh(e.x, t.x), Qh(e.y, t.y);
}
function qh(e, t, r, n, o) {
  return (
    (e -= t), (e = va(e, 1 / r, n)), o !== void 0 && (e = va(e, 1 / o, n)), e
  );
}
function r5(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (Ot.test(t) &&
      ((t = parseFloat(t)), (t = ce(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ce(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = qh(e.min, t, r, a, o)),
    (e.max = qh(e.max, t, r, a, o));
}
function Zh(e, t, [r, n, o], i, s) {
  r5(e, t[r], t[n], t[o], t.scale, i, s);
}
const n5 = ["x", "scaleX", "originX"],
  o5 = ["y", "scaleY", "originY"];
function Jh(e, t, r, n) {
  Zh(e.x, t, n5, r ? r.x : void 0, n ? n.x : void 0),
    Zh(e.y, t, o5, r ? r.y : void 0, n ? n.y : void 0);
}
function em(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ev(e) {
  return em(e.x) && em(e.y);
}
function Ac(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function tm(e) {
  return ut(e.x) / ut(e.y);
}
class i5 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ef(this.members, t),
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
function rm(e, t, r) {
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
const s5 = (e, t) => e.depth - t.depth;
class a5 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Jd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ef(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(s5),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function l5(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
const nm = ["", "X", "Y", "Z"],
  om = 1e3;
let u5 = 0;
const Vr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function zv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = u5++),
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
          (Vr.totalNodes =
            Vr.resolvedTargetDeltas =
            Vr.recalculatedProjection =
              0),
            this.nodes.forEach(f5),
            this.nodes.forEach(g5),
            this.nodes.forEach(y5),
            this.nodes.forEach(p5),
            l5(Vr);
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
      this.root === this && (this.nodes = new a5());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new tf()),
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
            (d = hv(f, 250)),
            Do.hasAnimatedSinceResize &&
              ((Do.hasAnimatedSinceResize = !1), this.nodes.forEach(sm));
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
              hasRelativeTargetChanged: h,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || k5,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: p } =
                  c.getProps(),
                g = !this.targetLayout || !Ac(this.targetLayout, x) || h,
                y = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const k = { ...mv(v, "layout"), onPlay: w, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                !f && this.animationProgress === 0 && sm(this),
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
        Pr.preRender(this.updateProjection);
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
        this.nodes && this.nodes.forEach(v5),
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(im);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(w5), this.potentialNodes.clear()),
        this.nodes.forEach(m5),
        this.nodes.forEach(c5),
        this.nodes.forEach(d5),
        this.clearAllSnapshots(),
        ql.update(),
        ql.preRender(),
        ql.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(h5), this.sharedNodes.forEach(x5);
    }
    scheduleUpdateProjection() {
      Fe.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Fe.postRender(() => {
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
        (this.layoutCorrected = be()),
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
        a = this.projectionDelta && !Ev(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Dr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        C5(l),
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
      if (!s) return be();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (lr(a.x, l.offset.x), lr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = be();
      pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            pt(a, s);
            const { scroll: f } = this.root;
            f && (lr(a.x, -f.offset.x), lr(a.y, -f.offset.y));
          }
          lr(a.x, c.offset.x), lr(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = be();
      pt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Rn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Dr(c.latestValues) && Rn(l, c.latestValues);
      }
      return Dr(this.latestValues) && Rn(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = be();
      pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Dr(u.latestValues)) continue;
        Ec(u.latestValues) && u.updateSnapshot();
        const c = be(),
          d = u.measurePageBox();
        pt(c, d),
          Jh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Dr(this.latestValues) && Jh(a, this.latestValues), a;
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
              (this.relativeTarget = be()),
              (this.relativeTargetOrigin = be()),
              Oo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              pt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = be()), (this.targetWithTransforms = be())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? __(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : pt(this.target, this.layout.layoutBox),
                  Sv(this.target, this.targetDelta))
                : pt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target
              ? ((this.relativeParent = f),
                (this.relativeTarget = be()),
                (this.relativeTargetOrigin = be()),
                Oo(this.relativeTargetOrigin, this.target, f.target),
                pt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Vr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ec(this.parent.latestValues) ||
          bv(this.parent.latestValues)
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
      pt(this.layoutCorrected, this.layout.layoutBox),
        j_(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: f } = a;
      if (!f) return;
      this.projectionDelta ||
        ((this.projectionDelta = Fo()),
        (this.projectionDeltaWithTransform = Fo()));
      const h = this.treeScale.x,
        x = this.treeScale.y,
        v = this.projectionTransform;
      No(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = rm(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== h ||
          this.treeScale.y !== x) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", f)),
        Vr.recalculatedProjection++;
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
        d = Fo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = be(),
        h = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        v = h !== x,
        w = this.getStack(),
        p = !w || w.members.length <= 1,
        g = !!(v && !p && this.options.crossfade === !0 && !this.path.some(S5));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (k) => {
        const C = k / 1e3;
        am(d.x, s.x, C),
          am(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Oo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            b5(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && Ac(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = be()),
            pt(y, this.relativeTarget)),
          v &&
            ((this.animationValues = c), J_(c, u, this.latestValues, C, g, p)),
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
          (Pr.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Fe.update(() => {
          (Do.hasAnimatedSinceResize = !0),
            (this.currentAnimation = q_(0, om, {
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
        (this.mixTargetDelta && this.mixTargetDelta(om),
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
          Tv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || be();
          const d = ut(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = ut(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        pt(a, l),
          Rn(a, c),
          No(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new i5()),
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
      for (let c = 0; c < nm.length; c++) {
        const d = "rotate" + nm[c];
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
          (u.pointerEvents = Rs(s.pointerEvents) || ""),
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
            (v.pointerEvents = Rs(s.pointerEvents) || "")),
          this.hasProjected &&
            !Dr(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = rm(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: x } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${x.origin * 100}% 0`),
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
      for (const v in fa) {
        if (f[v] === void 0) continue;
        const { correct: w, applyTo: p } = fa[v],
          g = u.transform === "none" ? f[v] : w(f[v], d);
        if (p) {
          const y = p.length;
          for (let k = 0; k < y; k++) u[p[k]] = g;
        } else u[v] = g;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Rs(s.pointerEvents) || "" : "none"),
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
        this.root.nodes.forEach(im),
        this.root.sharedNodes.clear();
    }
  };
}
function c5(e) {
  e.updateLayout();
}
function d5(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = r.source !== e.layout.source;
    i === "size"
      ? Mt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            h = ut(f);
          (f.min = n[d].min), (f.max = f.min + h);
        })
      : Tv(i, r.layoutBox, n) &&
        Mt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            h = ut(n[d]);
          f.max = f.min + h;
        });
    const a = Fo();
    No(a, n, r.layoutBox);
    const l = Fo();
    s ? No(l, e.applyTransform(o, !0), r.measuredBox) : No(l, n, r.layoutBox);
    const u = !Ev(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const x = be();
          Oo(x, r.layoutBox, f.layoutBox);
          const v = be();
          Oo(v, n, h.layoutBox),
            Ac(x, v) || (c = !0),
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
function f5(e) {
  Vr.totalNodes++,
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
function p5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function h5(e) {
  e.clearSnapshot();
}
function im(e) {
  e.clearMeasurements();
}
function m5(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function sm(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function g5(e) {
  e.resolveTargetDelta();
}
function y5(e) {
  e.calcProjection();
}
function v5(e) {
  e.resetRotation();
}
function x5(e) {
  e.removeLeadSnapshot();
}
function am(e, t, r) {
  (e.translate = ce(t.translate, 0, r)),
    (e.scale = ce(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function lm(e, t, r, n) {
  (e.min = ce(t.min, r.min, n)), (e.max = ce(t.max, r.max, n));
}
function b5(e, t, r, n) {
  lm(e.x, t.x, r.x, n), lm(e.y, t.y, r.y, n);
}
function S5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const k5 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function w5(e, t) {
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
function um(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function C5(e) {
  um(e.x), um(e.y);
}
function Tv(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !_c(tm(t), tm(r), 0.2))
  );
}
const _5 = zv({
    attachResizeListener: (e, t) => Kt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  su = { current: void 0 },
  Av = zv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!su.current) {
        const e = new _5(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (su.current = e);
      }
      return su.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  P5 = {
    pan: { Feature: F_ },
    drag: { Feature: O_, ProjectionNode: Av, MeasureLayout: Cv },
  },
  E5 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  Rv = (e) => E5.has(e),
  z5 = (e) => Object.keys(e).some(Rv),
  cm = (e) => e === an || e === D,
  dm = (e, t) => parseFloat(e.split(", ")[t]),
  fm =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/);
      if (o) return dm(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/);
        return i ? dm(i[1], e) : 0;
      }
    },
  T5 = new Set(["x", "y", "z"]),
  A5 = ol.filter((e) => !T5.has(e));
function R5(e) {
  const t = [];
  return (
    A5.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const pm = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: fm(4, 13),
    y: fm(5, 14),
  },
  $5 = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      r.forEach((u) => {
        a[u] = pm[u](n, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      r.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = pm[u](l, i));
      }),
      e
    );
  },
  M5 = (e, t, r = {}, n = {}) => {
    (t = { ...t }), (n = { ...n });
    const o = Object.keys(t).filter(Rv);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = r[l],
          d = yo(c);
        const f = t[l];
        let h;
        if (ha(f)) {
          const x = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = yo(c));
          for (let w = v; w < x; w++) h ? yi(yo(f[w]) === h) : (h = yo(f[w]));
        } else h = yo(f);
        if (d !== h)
          if (cm(d) && cm(h)) {
            const x = u.get();
            typeof x == "string" && u.set(parseFloat(x)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === D && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (s || ((i = R5(e)), (s = !0)),
                a.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = $5(t, e, a);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        el && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function j5(e, t, r, n) {
  return z5(t) ? M5(e, t, r, n) : { target: t, transitionEnd: n };
}
const L5 = (e, t, r, n) => {
    const o = Y_(e, t, n);
    return (t = o.target), (n = o.transitionEnd), j5(e, t, r, n);
  },
  Rc = { current: null },
  $v = { current: !1 };
function I5() {
  if ((($v.current = !0), !!el))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Rc.current = e.matches);
      e.addListener(t), t();
    } else Rc.current = !1;
}
function D5(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      s = r[o];
    if (rt(i)) e.addValue(o, i), ga(n) && n.add(o);
    else if (rt(s)) e.addValue(o, Jn(i, { owner: e })), ga(n) && n.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Jn(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Mv = Object.keys(hi),
  V5 = Mv.length,
  hm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  B5 = Wd.length;
class N5 {
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
      (this.scheduleRender = () => Fe.render(this.render, !1, !0));
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
      (this.isControllingVariants = rl(r)),
      (this.isVariantNode = Cy(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && rt(f) && (f.set(a[d], !1), ga(u) && u.add(d));
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
      $v.current || I5(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Rc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Pr.update(this.notifyUpdate),
      Pr.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = sn.has(t),
      o = r.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Fe.update(this.notifyUpdate, !1, !0),
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
    for (let u = 0; u < V5; u++) {
      const c = Mv[u],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: h,
          MeasureLayout: x,
        } = hi[c];
      h && (a = h),
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
        layoutScroll: h,
        layoutRoot: x,
      } = r;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && Tn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
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
      : be();
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
    for (let n = 0; n < hm.length; n++) {
      const o = hm[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = D5(
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
    for (let n = 0; n < B5; n++) {
      const o = Wd[n],
        i = this.props[o];
      (pi(i) || i === !1) && (r[o] = i);
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
        ((n = Jn(r, { owner: this })), this.addValue(t, n)),
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
          ? (r = Zd(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !rt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new tf()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class jv extends N5 {
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
    let s = l2(n, t || {}, this);
    if ((o && (r && (r = o(r)), n && (n = o(n)), s && (s = o(s))), i)) {
      s2(this, n, s);
      const a = L5(this, n, s, r);
      (r = a.transitionEnd), (n = a.target);
    }
    return { transition: t, transitionEnd: r, ...n };
  }
}
function O5(e) {
  return window.getComputedStyle(e);
}
class F5 extends jv {
  readValueFromInstance(t, r) {
    if (sn.has(r)) {
      const n = of(r);
      return (n && n.default) || 0;
    } else {
      const n = O5(t),
        o = (zy(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return kv(t, r);
  }
  build(t, r, n, o) {
    Gd(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return qd(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    rt(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    jy(t, r, n, o);
  }
}
class W5 extends jv {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (sn.has(r)) {
      const n = of(r);
      return (n && n.default) || 0;
    }
    return (r = Ly.has(r) ? r : Qd(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return be();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Dy(t, r);
  }
  build(t, r, n, o) {
    Xd(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Iy(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Kd(t.tagName)), super.mount(t);
  }
}
const H5 = (e, t) =>
    Ud(e)
      ? new W5(t, { enableHardwareAcceleration: !1 })
      : new F5(t, { enableHardwareAcceleration: !0 }),
  U5 = { layout: { ProjectionNode: Av, MeasureLayout: Cv } },
  G5 = { ...S_, ...jC, ...P5, ...U5 },
  io = Xw((e, t) => SC(e, t, G5, H5));
function Lv() {
  const e = S.useRef(!1);
  return (
    da(
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
function Y5() {
  const e = Lv(),
    [t, r] = S.useState(0),
    n = S.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [S.useCallback(() => Fe.postRender(n), [n]), t];
}
class X5 extends S.Component {
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
function K5({ children: e, isPresent: t }) {
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
      X5,
      { isPresent: t, childRef: n, sizeRef: o },
      S.cloneElement(e, { ref: n }),
    )
  );
}
const au = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = nl(Q5),
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
    s === "popLayout" && (e = S.createElement(K5, { isPresent: r }, e)),
    S.createElement(Ri.Provider, { value: u }, e)
  );
};
function Q5() {
  return new Map();
}
function q5(e) {
  return S.useEffect(() => () => e(), []);
}
const gn = (e) => e.key || "";
function Z5(e, t) {
  e.forEach((r) => {
    const n = gn(r);
    t.set(n, r);
  });
}
function J5(e) {
  const t = [];
  return (
    S.Children.forEach(e, (r) => {
      S.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const ll = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  o && (s = "wait");
  let [a] = Y5();
  const l = S.useContext(Hd).forceRender;
  l && (a = l);
  const u = Lv(),
    c = J5(e);
  let d = c;
  const f = new Set(),
    h = S.useRef(d),
    x = S.useRef(new Map()).current,
    v = S.useRef(!0);
  if (
    (da(() => {
      (v.current = !1), Z5(c, x), (h.current = d);
    }),
    q5(() => {
      (v.current = !0), x.clear(), f.clear();
    }),
    v.current)
  )
    return S.createElement(
      S.Fragment,
      null,
      d.map((y) =>
        S.createElement(
          au,
          {
            key: gn(y),
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
  const w = h.current.map(gn),
    p = c.map(gn),
    g = w.length;
  for (let y = 0; y < g; y++) {
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
        _ = () => {
          x.delete(y), f.delete(y);
          const P = h.current.findIndex((E) => E.key === y);
          if ((h.current.splice(P, 1), !f.size)) {
            if (((h.current = c), u.current === !1)) return;
            a(), n && n();
          }
        };
      d.splice(
        C,
        0,
        S.createElement(
          au,
          {
            key: gn(k),
            isPresent: !1,
            onExitComplete: _,
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
            au,
            { key: gn(y), isPresent: !0, presenceAffectsLayout: i, mode: s },
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
function eP({ children: e, isValidProp: t, ...r }) {
  t && $y(t),
    (r = { ...S.useContext(ca), ...r }),
    (r.isStatic = nl(() => r.isStatic));
  const n = S.useMemo(
    () => r,
    [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion],
  );
  return S.createElement(ca.Provider, { value: n }, e);
}
var ul = W(({ as: e = "div", className: t, ...r }, n) =>
    b.jsx(O.div, { as: io[e], ref: n, className: G("ui-motion", t), ...r }),
  ),
  [Iv, tP] = on({ strict: !1, name: "PortalContext" }),
  rP = ({ children: e, containerRef: t, appendToParentPortal: r }) => {
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
      Yr(() => s({}), []),
      Yr(() => {
        if (!(!i || !o))
          return (
            o.appendChild(i),
            () => {
              o.removeChild(i);
            }
          );
      }, [i, o]),
      o && i
        ? Ad.createPortal(b.jsx(Iv, { value: r ? i : null, children: e }), i)
        : null
    );
  },
  nP = ({ appendToParentPortal: e, children: t }) => {
    const [r, n] = S.useState(null),
      o = S.useRef(null),
      [, i] = S.useState({});
    S.useEffect(() => i({}), []);
    const s = tP();
    return (
      Yr(() => {
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
        ? Ad.createPortal(
            b.jsx(Iv, { value: o.current, children: t }),
            o.current,
          )
        : b.jsx("span", { ref: (a) => (a ? n(a) : void 0) })
    );
  },
  cl = ({
    containerRef: e,
    appendToParentPortal: t = !0,
    isDisabled: r,
    children: n,
  }) =>
    r
      ? n
      : e
        ? b.jsx(rP, { containerRef: e, appendToParentPortal: t, children: n })
        : b.jsx(nP, { appendToParentPortal: t, children: n });
cl.className = "ui-portal";
cl.selector = ".ui-portal";
var dl = (e, t) => {
    const r = Sr(e);
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
  Dt = function () {
    return (
      (Dt =
        Object.assign ||
        function (t) {
          for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
      Dt.apply(this, arguments)
    );
  };
function Dv(e, t) {
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
function oP(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ms = "right-scroll-bar-position",
  js = "width-before-scroll-bar",
  iP = "with-scroll-bars-hidden",
  sP = "--removed-body-scroll-bar-size";
function lu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function aP(e, t) {
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
var lP = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  mm = new WeakMap();
function uP(e, t) {
  var r = aP(null, function (n) {
    return e.forEach(function (o) {
      return lu(o, n);
    });
  });
  return (
    lP(
      function () {
        var n = mm.get(r);
        if (n) {
          var o = new Set(n),
            i = new Set(e),
            s = r.current;
          o.forEach(function (a) {
            i.has(a) || lu(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || lu(a, s);
            });
        }
        mm.set(r, e);
      },
      [e],
    ),
    r
  );
}
function cP(e) {
  return e;
}
function dP(e, t) {
  t === void 0 && (t = cP);
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
function fP(e) {
  e === void 0 && (e = {});
  var t = dP(null);
  return (t.options = Dt({ async: !0, ssr: !1 }, e)), t;
}
var Vv = function (e) {
  var t = e.sideCar,
    r = Dv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return S.createElement(n, Dt({}, r));
};
Vv.isSideCarExport = !0;
function pP(e, t) {
  return e.useMedium(t), Vv;
}
var Bv = fP(),
  uu = function () {},
  fl = S.forwardRef(function (e, t) {
    var r = S.useRef(null),
      n = S.useState({
        onScrollCapture: uu,
        onWheelCapture: uu,
        onTouchMoveCapture: uu,
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
      h = e.noIsolation,
      x = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      p = w === void 0 ? "div" : w,
      g = e.gapMode,
      y = Dv(e, [
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
      C = uP([r, t]),
      _ = Dt(Dt({}, y), o);
    return S.createElement(
      S.Fragment,
      null,
      c &&
        S.createElement(k, {
          sideCar: Bv,
          removeScrollBar: u,
          shards: d,
          noIsolation: h,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: r,
          gapMode: g,
        }),
      s
        ? S.cloneElement(S.Children.only(a), Dt(Dt({}, _), { ref: C }))
        : S.createElement(p, Dt({}, _, { className: l, ref: C }), a),
    );
  });
fl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fl.classNames = { fullWidth: js, zeroRight: Ms };
var hP = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function mP() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hP();
  return t && e.setAttribute("nonce", t), e;
}
function gP(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function yP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var vP = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = mP()) && (gP(t, r), yP(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  xP = function () {
    var e = vP();
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
  Nv = function () {
    var e = xP(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  bP = { left: 0, top: 0, right: 0, gap: 0 },
  cu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  SP = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [cu(r), cu(n), cu(o)];
  },
  kP = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return bP;
    var t = SP(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  wP = Nv(),
  On = "data-scroll-locked",
  CP = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          iP,
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
          On,
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
          Ms,
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
          js,
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
        .concat(Ms, " .")
        .concat(
          Ms,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(js, " .")
        .concat(
          js,
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
          On,
          `] {
    `,
        )
        .concat(sP, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  gm = function () {
    var e = parseInt(document.body.getAttribute(On) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  _P = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(On, (gm() + 1).toString()),
        function () {
          var e = gm() - 1;
          e <= 0
            ? document.body.removeAttribute(On)
            : document.body.setAttribute(On, e.toString());
        }
      );
    }, []);
  },
  PP = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n;
    _P();
    var i = S.useMemo(
      function () {
        return kP(o);
      },
      [o],
    );
    return S.createElement(wP, { styles: CP(i, !t, o, r ? "" : "!important") });
  },
  $c = !1;
if (typeof window < "u")
  try {
    var us = Object.defineProperty({}, "passive", {
      get: function () {
        return ($c = !0), !0;
      },
    });
    window.addEventListener("test", us, us),
      window.removeEventListener("test", us, us);
  } catch {
    $c = !1;
  }
var fn = $c ? { passive: !1 } : !1,
  EP = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ov = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !EP(e) && r[t] === "visible")
    );
  },
  zP = function (e) {
    return Ov(e, "overflowY");
  },
  TP = function (e) {
    return Ov(e, "overflowX");
  },
  ym = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = Fv(e, n);
      if (o) {
        var i = Wv(e, n),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  AP = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  RP = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Fv = function (e, t) {
    return e === "v" ? zP(t) : TP(t);
  },
  Wv = function (e, t) {
    return e === "v" ? AP(t) : RP(t);
  },
  $P = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  MP = function (e, t, r, n, o) {
    var i = $P(e, window.getComputedStyle(t).direction),
      s = i * n,
      a = r.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var h = Wv(e, a),
        x = h[0],
        v = h[1],
        w = h[2],
        p = v - w - i * x;
      (x || p) && Fv(e, a) && ((d += p), (f += x)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  cs = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  vm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  xm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  jP = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  LP = function (e) {
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
  IP = 0,
  pn = [];
function DP(e) {
  var t = S.useRef([]),
    r = S.useRef([0, 0]),
    n = S.useRef(),
    o = S.useState(IP++)[0],
    i = S.useState(Nv)[0],
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
          var v = oP([e.lockRef.current], (e.shards || []).map(xm), !0).filter(
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
      var p = cs(v),
        g = r.current,
        y = "deltaX" in v ? v.deltaX : g[0] - p[0],
        k = "deltaY" in v ? v.deltaY : g[1] - p[1],
        C,
        _ = v.target,
        P = Math.abs(y) > Math.abs(k) ? "h" : "v";
      if ("touches" in v && P === "h" && _.type === "range") return !1;
      var E = ym(P, _);
      if (!E) return !0;
      if ((E ? (C = P) : ((C = P === "v" ? "h" : "v"), (E = ym(P, _))), !E))
        return !1;
      if (
        (!n.current && "changedTouches" in v && (y || k) && (n.current = C), !C)
      )
        return !0;
      var R = n.current || C;
      return MP(R, w, v, R === "h" ? y : k, !0);
    }, []),
    l = S.useCallback(function (v) {
      var w = v;
      if (!(!pn.length || pn[pn.length - 1] !== i)) {
        var p = "deltaY" in w ? vm(w) : cs(w),
          g = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              jP(C.delta, p)
            );
          })[0];
        if (g && g.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!g) {
          var y = (s.current.shards || [])
              .map(xm)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            k = y.length > 0 ? a(w, y[0]) : !s.current.noIsolation;
          k && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = S.useCallback(function (v, w, p, g) {
      var y = { name: v, delta: w, target: p, should: g, shadowParent: VP(p) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (k) {
            return k !== y;
          });
        }, 1);
    }, []),
    c = S.useCallback(function (v) {
      (r.current = cs(v)), (n.current = void 0);
    }, []),
    d = S.useCallback(function (v) {
      u(v.type, vm(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = S.useCallback(function (v) {
      u(v.type, cs(v), v.target, a(v, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      pn.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, fn),
      document.addEventListener("touchmove", l, fn),
      document.addEventListener("touchstart", c, fn),
      function () {
        (pn = pn.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, fn),
          document.removeEventListener("touchmove", l, fn),
          document.removeEventListener("touchstart", c, fn);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    x = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    x ? S.createElement(i, { styles: LP(o) }) : null,
    h ? S.createElement(PP, { gapMode: e.gapMode }) : null,
  );
}
function VP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const BP = pP(Bv, DP);
var Hv = S.forwardRef(function (e, t) {
  return S.createElement(fl, Dt({}, e, { ref: t, sideCar: BP }));
});
Hv.classNames = fl.classNames;
var NP = S.createContext({}),
  ds = () => ({
    isLoading: S.createRef(),
    start: S.createRef(),
    finish: S.createRef(),
    update: S.createRef(),
    force: S.createRef(),
  }),
  fs = (e) => ({
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
  OP = (e) => e + 1,
  FP = (e) => (e === 0 ? e : e - 1),
  WP = ({ screen: e, page: t, background: r, custom: n, children: o }) => {
    var i, s, a, l, u;
    const c = S.useRef(ds()),
      d = S.useRef(ds()),
      f = S.useRef(ds()),
      h = S.useRef(ds()),
      x = fs(c),
      v = fs(d),
      w = fs(f),
      p = fs(h),
      g = { screen: x, page: v, background: w, custom: p };
    return b.jsxs(NP.Provider, {
      value: g,
      children: [
        o,
        b.jsx(ps, {
          controlRefs: c,
          ...e,
          component:
            (i = e == null ? void 0 : e.component) != null
              ? i
              : (y) => b.jsx(Gv, { ...y }),
        }),
        b.jsx(ps, {
          controlRefs: d,
          ...t,
          component:
            (s = t == null ? void 0 : t.component) != null
              ? s
              : (y) => b.jsx(Yv, { ...y }),
        }),
        b.jsx(ps, {
          controlRefs: f,
          ...r,
          blockScrollOnMount:
            (a = r == null ? void 0 : r.blockScrollOnMount) != null ? a : !1,
          component:
            (l = r == null ? void 0 : r.component) != null
              ? l
              : (y) => b.jsx(Xv, { ...y }),
        }),
        b.jsx(ps, {
          controlRefs: h,
          blockScrollOnMount:
            (u = r == null ? void 0 : r.blockScrollOnMount) != null ? u : !1,
          ...n,
          component: n == null ? void 0 : n.component,
        }),
      ],
    });
  },
  ps = ({
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
      [{ loadingCount: d, message: f, duration: h }, x] = S.useState({
        loadingCount: i ? 1 : 0,
        message: void 0,
        duration: s,
      }),
      {
        isLoading: v,
        start: w,
        finish: p,
        update: g,
        force: y,
      } = S.useMemo(
        () => ({
          isLoading: () => c.current,
          start: ({ message: C, duration: _ = s } = {}) => {
            (c.current = !0),
              x(({ loadingCount: P }) => ({
                loadingCount: OP(P),
                message: C,
                duration: _,
              }));
          },
          update: (C) => x((_) => ({ ..._, ...C })),
          finish: () => {
            (c.current = !1),
              x(({ loadingCount: C }) => ({
                loadingCount: FP(C),
                message: void 0,
                duration: s,
              }));
          },
          force: ({ loadingCount: C = 0, message: _, duration: P = s }) => {
            (c.current = !!C), x({ loadingCount: C, message: _, duration: P });
          },
        }),
        [s],
      );
    mn(e.current.isLoading, v),
      mn(e.current.start, w),
      mn(e.current.finish, p),
      mn(e.current.update, g),
      mn(e.current.force, y);
    const k = {
      initialState: i,
      icon: a,
      text: l,
      message: f,
      duration: h,
      onFinish: p,
    };
    return (
      sa(() => {
        (i || Vn(s)) &&
          x({ loadingCount: i ? 1 : 0, message: void 0, duration: s });
      }, [i, s]),
      b.jsx(ll, {
        initial: !1,
        children: d
          ? b.jsx(cl, {
              appendToParentPortal: t,
              containerRef: r,
              children: b.jsx(Hv, {
                allowPinchZoom: n,
                enabled: o,
                forwardProps: !0,
                children: b.jsx(S.Fragment, {
                  children: b.jsx(HP, { component: u, ...k }),
                }),
              }),
            })
          : null,
      })
    );
  },
  HP = ({ component: e, ...t }) =>
    typeof e == "function" ? e(t) : b.jsx(b.Fragment, {}),
  hf = ({ message: e, ...t }) =>
    e ? (Jb(e) ? e : b.jsx(O.p, { ...t, children: e })) : null,
  UP = (e = "fade") => ({
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
  Uv = (e = "fill") => ({
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
  xa = (e, t = "fade") => ({
    initial: e ? !1 : "initial",
    animate: "animate",
    exit: "exit",
    variants: UP(t),
  }),
  Gv = S.memo(
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
        dl(i, o),
        b.jsx(ul, {
          className: "ui-loading-screen",
          ...xa(e),
          __css: Uv(),
          children: b.jsxs(O.div, {
            __css: s,
            children: [
              b.jsx(qn, { size: "6xl", ...t }),
              b.jsx(hf, { message: n, lineClamp: 3, ...r }),
            ],
          }),
        })
      );
    },
  );
Gv.displayName = "ScreenComponent";
var Yv = S.memo(
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
      dl(i, o),
      b.jsx(ul, {
        className: "ui-loading-page",
        ...xa(e),
        __css: Uv("transparent"),
        children: b.jsxs(O.div, {
          as: io.div,
          className: "ui-loading-page__inner",
          ...xa(e, "scaleFade"),
          __css: s,
          children: [
            b.jsx(qn, { size: "6xl", ...t }),
            b.jsx(hf, { message: n, lineClamp: 3, ...r }),
          ],
        }),
      })
    );
  },
);
Yv.displayName = "PageComponent";
var Xv = S.memo(
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
      dl(i, o),
      b.jsxs(ul, {
        className: "ui-loading-background",
        ...xa(e, "scaleFade"),
        __css: s,
        children: [
          b.jsx(qn, { size: "xl", ...t }),
          b.jsx(hf, { message: n, fontSize: "sm", lineClamp: 1, ...r }),
        ],
      })
    );
  },
);
Xv.displayName = "BackgroundComponent";
var Kv = {
    info: { icon: zw, colorScheme: "info" },
    success: { icon: Ew, colorScheme: "success" },
    warning: { icon: ph, colorScheme: "warning" },
    error: { icon: ph, colorScheme: "danger" },
    loading: { icon: qn, colorScheme: "primary" },
  },
  [GP, mf] = on({
    name: "AlertStylesContext",
    errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
  }),
  YP = (e, t) => {
    var r, n;
    return (n =
      (r = t == null ? void 0 : t[e]) == null ? void 0 : r.colorScheme) != null
      ? n
      : Kv[e].colorScheme;
  },
  XP = (e, t) => {
    var r, n;
    return (n = (r = t == null ? void 0 : t[e]) == null ? void 0 : r.icon) !=
      null
      ? n
      : Kv[e].icon;
  },
  KP = W(({ status: e = "info", colorScheme: t, ...r }, n) => {
    var o, i, s;
    const { theme: a } = Za(),
      l =
        (s =
          (i = (o = a.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {};
    t ?? (t = YP(e, l));
    const [u, c] = Ai("Alert", { ...r, colorScheme: t }),
      { className: d, children: f, ...h } = Ft(c),
      x = {
        w: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        ...u.container,
      };
    return b.jsx(GP, {
      value: { status: e, styles: u },
      children: b.jsx(O.div, {
        ref: n,
        className: G("ui-alert", d),
        role: "alert",
        __css: x,
        ...h,
        children: f,
      }),
    });
  }),
  QP = ({ className: e, children: t, variant: r = "oval", ...n }) => {
    var o, i, s;
    const { status: a, styles: l } = mf(),
      { theme: u } = Za(),
      c =
        (s =
          (i = (o = u.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {},
      d = XP(a, c),
      f = { ...l.icon, ...(a === "loading" ? l.loading : {}) };
    return b.jsx(O.span, {
      display: "inherit",
      className: G("ui-alert__icon", e),
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
  qP = W(({ className: e, ...t }, r) => {
    const { styles: n } = mf(),
      o = { display: "block", ...n.title };
    return b.jsx(O.p, {
      ref: r,
      className: G("ui-alert__title", e),
      __css: o,
      ...t,
    });
  }),
  ZP = W(({ className: e, ...t }, r) => {
    const { styles: n } = mf(),
      o = { ...n.description };
    return b.jsx(O.span, {
      ref: r,
      className: G("ui-alert__desc", e),
      __css: o,
      ...t,
    });
  }),
  JP = (e, t, r) => Math.min(Math.max(e, t), r),
  Qv = ({
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
        const h = JP(0.01 * f, 0.2, f > 100 ? 0.75 : 0.5);
        return b.jsx(
          ll,
          {
            mode: "popLayout",
            children: b.jsx(ul, {
              as: "span",
              className: G("ui-ripple", e),
              initial: { transform: "scale(0)", opacity: 0.35 },
              animate: { transform: "scale(2)", opacity: 0 },
              exit: { opacity: 0 },
              transition: { duration: h },
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
              onAnimationComplete: Ne(r, () => n(u)),
            }),
          },
          u,
        );
      }),
    });
  },
  qv = ({ disabled: e, isDisabled: t, ...r } = {}) => {
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
              key: tS(d.length.toString()),
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
    return { ripples: n, onPointerDown: Ne(i, r.onPointerDown), onClear: s };
  },
  eE = W((e, t) => {
    const [r, n] = oo("CloseButton", e),
      {
        className: o,
        children: i,
        isDisabled: s,
        isRounded: a,
        __css: l,
        disableRipple: u,
        ...c
      } = Ft(n),
      { onPointerDown: d, ...f } = qv({ ...c, isDisabled: u || s }),
      h = {
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
    return b.jsxs(O.button, {
      ref: t,
      type: "button",
      "aria-label": "Close",
      className: G("ui-close-button", o),
      disabled: s,
      __css: h,
      ...c,
      onPointerDown: d,
      children: [
        i || b.jsx(Tw, { width: "1em", height: "1em" }),
        b.jsx(Qv, { isDisabled: u || s, ...f }),
      ],
    });
  }),
  tE = (e, t) => e.find((r) => r.id === t),
  bm = (e, t) => {
    const r = Zv(e, t),
      n = r ? e[r].findIndex((o) => o.id === t) : -1;
    return { placement: r, index: n };
  },
  Zv = (e, t) => {
    for (const [r, n] of Object.entries(e)) if (tE(n, t)) return r;
  },
  Sm = 0,
  rE = (
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
    (Sm += 1),
    t ?? (t = Sm),
    {
      id: t,
      placement: r,
      status: i,
      duration: n,
      message: e,
      onDelete: () => Wo.remove(String(t), r),
      isDelete: !1,
      onCloseComplete: o,
      style: s,
    }
  ),
  nE = (e) => {
    const { component: t } = e;
    return (n) =>
      typeof t == "function" ? t({ ...n, ...e }) : b.jsx(sE, { ...n, ...e });
  },
  oE = {
    top: [],
    "top-left": [],
    "top-right": [],
    bottom: [],
    "bottom-left": [],
    "bottom-right": [],
  },
  iE = (e) => {
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
          a = rE(o, i),
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
            const h = l.includes("top") ? [a, ...f] : [...f, a];
            return { ...c, [l]: h };
          }),
          u
        );
      },
      update: (o, i) => {
        n((s) => {
          const a = { ...s },
            { placement: l, index: u } = bm(a, o);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...i, message: nE(i) }), a
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
          const s = Zv(i, o);
          return s
            ? {
                ...i,
                [s]: i[s].map((a) => (a.id == o ? { ...a, isDelete: !0 } : a)),
              }
            : i;
        });
      },
      isActive: (o) => !!bm(Wo.getSnapshot(), o).placement,
    };
  },
  Wo = iE(oE),
  sE = ({
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
    b.jsxs(KP, {
      status: r,
      variant: e,
      colorScheme: t,
      alignItems: "start",
      boxShadow:
        "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
      className: G("ui-notice", a),
      pe: s ? 8 : void 0,
      children: [
        b.jsx(QP, {
          variant: n == null ? void 0 : n.variant,
          className: "ui-notice__icon",
          ...(n != null && n.color ? { color: n.color } : {}),
          children: n == null ? void 0 : n.children,
        }),
        b.jsxs(O.div, {
          flex: "1",
          children: [
            o
              ? b.jsx(qP, {
                  className: "ui-notice__title",
                  lineClamp: 1,
                  children: o,
                })
              : null,
            i
              ? b.jsx(ZP, {
                  className: "ui-notice__desc",
                  lineClamp: 3,
                  children: i,
                })
              : null,
          ],
        }),
        s
          ? b.jsx(eE, {
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
  aE = ({
    variants: e,
    gap: t = "fallback(4, 1rem)",
    appendToParentPortal: r,
    containerRef: n,
  }) => {
    const o = S.useSyncExternalStore(
        Wo.subscribe,
        Wo.getSnapshot,
        Wo.getSnapshot,
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
          O.ul,
          {
            className: G("ui-notice__list", `ui-notice__list--${s}`),
            __css: f,
            children: b.jsx(ll, {
              initial: !1,
              children: a.map((h) => b.jsx(Jv, { variants: e, ...h }, h.id)),
            }),
          },
          s,
        );
      });
    return b.jsx(cl, { appendToParentPortal: r, containerRef: n, children: i });
  },
  lE = {
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
  Jv = S.memo(
    ({
      variants: e = lE,
      placement: t,
      duration: r = 5e3,
      message: n,
      onCloseComplete: o,
      isDelete: i = !1,
      onDelete: s,
      style: a,
    }) => {
      const [l, u] = S.useState(r),
        c = H_();
      sa(() => {
        c || o == null || o();
      }, [c]),
        sa(() => {
          u(r);
        }, [r]);
      const d = () => u(null),
        f = () => u(r),
        h = () => {
          c && s();
        };
      S.useEffect(() => {
        c && i && s();
      }, [c, i, s]),
        dl(h, l);
      const x = { pointerEvents: "auto", maxW: "36rem", minW: "20rem", ...a };
      return b.jsx(io.li, {
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
        children: b.jsx(O.div, {
          className: "ui-notice__list__item__inner",
          __css: x,
          children: qe(n, { onClose: h }),
        }),
      });
    },
  );
Jv.displayName = "NoticeComponent";
var uE = {
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
  cE = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  dE = {
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
  fE = {
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
  pE = {
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
  e1 = {
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
  hE = {
    ...e1,
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
  mE = {
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
  gE = { sm: "4px", md: "8px", lg: "12px", xl: "16px", "2xl": "24px" },
  yE = {},
  vE = { sm: "30em", md: "48em", lg: "61em", xl: "80em", "2xl": "90em" },
  xE = {
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
  bE = {
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
  SE = {
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
  kE = {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  wE = {},
  CE = {},
  _E = {
    animations: CE,
    blurs: gE,
    borders: yE,
    breakpoints: vE,
    colors: xE,
    fontSizes: bE,
    fontWeights: SE,
    fonts: kE,
    gradients: wE,
    letterSpacings: cE,
    lineHeights: dE,
    radii: fE,
    shadows: pE,
    sizes: hE,
    spaces: e1,
    transitions: mE,
    zIndices: uE,
  },
  PE = {
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
  EE = {},
  zE = {
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
  TE = {},
  AE = {
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
  $r = {
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
  t1 = ee($r, {
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
  pl = {
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
  gf = ee(t1, pl, {
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
  yf = ee(gf, {
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
  Li = ee($r, yf, {
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
  RE = ee(Li)(),
  $E = {
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
  ME = {
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
  jE = {
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
            bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
  LE = {
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
              bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
              bg: [Se(`${r}.600`, 24)(e, t), Z(`${r}.600`, 16)(e, t)],
              color: "white",
            },
            ...(o
              ? { borderWidth: "1px", borderStyle: "solid", me: "-1px" }
              : { borderWidth: "1px", borderStyle: "solid", mb: "-1px" }),
          },
        };
      },
      rounded: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
        const n = le(
          M(`${r}.500`)(e, t),
          M(I(r) ? `${r}.100` : `${r}.400`)(e, t),
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
            bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
            bg: [Se(`${r}.600`, 24)(e, t), Z(`${r}.600`, 16)(e, t)],
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
  IE = {
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
          bg: [Se(`${r}.600`, 24)(e, t), Z(`${r}.600`, 16)(e, t)],
          color: "white",
        }),
      },
      subtle: {
        container: ({
          theme: e,
          colorMode: t,
          colorScheme: r = "primary",
        }) => ({
          bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
          color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
        }),
      },
      outline: {
        container: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
          const n = le(
            M(`${r}.500`)(e, t),
            M(I(r) ? `${r}.100` : `${r}.400`)(e, t),
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
  DE = yy(rw($r, "field"), {
    baseStyle: { py: "2", lineHeight: "short", verticalAlign: "top" },
    variants: { unstyled: { h: "auto", py: "0", px: "0" } },
    sizes: {
      xs: { py: "2", minH: "20" },
      sm: { py: "2", minH: "20" },
      md: { py: "2", minH: "20" },
      lg: { py: "3", minH: "20" },
    },
  })(),
  VE = {
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
          bg: [I(r) ? "blackAlpha.200" : `${r}.50`, Pe(`${r}.500`, 0.12)(e, t)],
        },
        _selected: {
          bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 72)(e, t)],
        },
        _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
      }),
      solid: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        _hover: {
          bg: [I(r) ? "blackAlpha.200" : `${r}.100`, Z(`${r}.300`, 72)(e, t)],
        },
        _selected: {
          bg: I(r)
            ? [`${r}.100`, `${r}.700`]
            : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
          color: [I(r) || ye(r) ? "black" : "white", "white"],
        },
        _focusVisible: { borderColor: "transparent", boxShadow: "outline" },
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        border: "1px solid",
        borderColor: "border",
        _hover: {
          bg: [I(r) ? "blackAlpha.200" : `${r}.50`, Pe(`${r}.500`, 0.12)(e, t)],
        },
        _selected: {
          bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 72)(e, t)],
          borderColor: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 72)(e, t)],
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
  BE = {
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
  NE = {
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
              _after: { bg: I(n) ? "border" : Pe(`${n}.600`, 0.12)(t, r) },
            },
          },
          _focusVisible: {
            outline: "none",
            _after: { bg: I(n) ? "border" : `${n}.100` },
            _dark: {
              _after: { bg: I(n) ? "border" : Pe(`${n}.600`, 0.24)(t, r) },
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
  OE = {
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
  FE = {
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
  WE = {
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
            : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [I(e) || ye(e) ? "black" : "white", "white"],
          rounded: "md",
        },
        button: {
          rounded: "md",
          _checked: { color: [I(e) || ye(e) ? "black" : "white", "white"] },
        },
      }),
      rounded: ({ colorScheme: e = "gray" }) => ({
        container: { rounded: "full" },
        cursor: {
          bg: I(e)
            ? ["whiteAlpha.800", `${e}.700`]
            : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [I(e) || ye(e) ? "black" : "white", "white"],
          rounded: "full",
        },
        button: {
          rounded: "full",
          _checked: { color: [I(e) || ye(e) ? "black" : "white", "white"] },
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
  HE = {
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
  UE = ee($r, {
    baseStyle: { container: { gap: "sm" }, field: { textAlign: "center" } },
    variants: { unstyled: { field: { h: "auto" } } },
    sizes: {
      xs: { field: { fontSize: "xs", boxSize: "6", rounded: "sm" } },
      sm: { field: { fontSize: "sm", boxSize: "8", rounded: "md" } },
      md: { field: { fontSize: "md", boxSize: "10", rounded: "md" } },
      lg: { field: { fontSize: "lg", boxSize: "12", rounded: "md" } },
    },
  })({ omit: ["addon", "sizes"] }),
  GE = {
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
  YE = {
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
        const s = le("rgba(255, 255, 255, 0.15)", "rgba(0,0,0,0.1)")(t),
          a = i
            ? U(i)
              ? le(M(i[0], i[0])(e, t), M(i[1], i[1])(e, t))(t)
              : M(i, i)(e, t)
            : M(`${r}.500`)(e, t);
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
  Ii = {
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
  XE = ee(Ii, {
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
  KE = {
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
  QE = ee(Li)(),
  r1 = {
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
        _disabled: { bg: [Se("black", 72)(e, t), Z("white", 64)] },
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
  qE = ee(r1)(),
  ZE = {
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
  JE = ee(Li)(),
  e4 = ee($r, {
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
  t4 = {
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
              : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            borderColor: I(e)
              ? [`${e}.50`, `${e}.700`]
              : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            color: [I(e) || ye(e) ? "black" : "white", "white"],
            _hover: {
              bg: I(e)
                ? [`${e}.100`, `${e}.800`]
                : [ye(e) ? `${e}.500` : `${e}.600`, `${e}.700`],
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
          _hover: { bg: [`${r}.50`, Pe(`${r}.600`, 0.12)(e, t)] },
          _active: {
            bg: I(r)
              ? [`${r}.300`, "whiteAlpha.300"]
              : [`${r}.200`, Pe(`${r}.200`, 0.24)(e, t)],
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
  n1 = {
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
                      I(r) ? Se(`${r}.50`, 72)(e, t) : Se(`${r}.50`, 64)(e, t),
                      Pe(`${r}.300`, 0.04)(e, t),
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
                      Pe(`${r}.400`, 0.08)(e, t),
                      Pe(`${r}.300`, 0.12)(e, t),
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
                I(r) ? Se(`${r}.50`, 72)(e, t) : Se(`${r}.50`, 64)(e, t),
                Pe(`${r}.300`, 0.04)(e, t),
              ],
            },
            ...(i
              ? {
                  cursor: "pointer",
                  transitionProperty: "common",
                  transitionDuration: "slow",
                  _hover: {
                    bg: [
                      Pe(`${r}.400`, 0.08)(e, t),
                      Pe(`${r}.300`, 0.12)(e, t),
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
  o1 = ee(n1, {
    baseStyle: { sortIcon: {} },
    sizes: {
      sm: { sortIcon: { right: 2 } },
      md: { sortIcon: { right: 3 } },
      lg: { sortIcon: { right: 4 } },
      xl: { sortIcon: { right: 6 } },
    },
  })(),
  r4 = ee(o1, {
    baseStyle: { pagingControl: { gridTemplateColumns: "1fr 5fr 1fr" } },
    sizes: {
      sm: { pagingControl: { gap: 2 } },
      md: { pagingControl: { gap: 4 } },
      lg: { pagingControl: { gap: 6 } },
      xl: { pagingControl: { gap: 8 } },
    },
  })(),
  n4 = {
    baseStyle: {
      container: {},
      item: {},
      icon: { me: "2", display: "inline-block", verticalAlign: "middle" },
    },
  },
  o4 = {
    baseStyle: {},
    defaultProps: { variant: "oval", colorScheme: "primary", size: "1em" },
  },
  i4 = {
    baseStyle: { px: "1", py: "1" },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        bg: [Se(`${r}.600`, 24)(e, t), Z(`${r}.600`, 16)(e, t)],
        color: "white",
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => ({
        bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "gray" }) => {
        const n = le(
          M(`${r}.500`)(e, t),
          M(I(r) ? `${r}.100` : `${r}.400`)(e, t),
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
  s4 = {
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
  a4 = ee(Li)(),
  l4 = ee(yf)(),
  u4 = {
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
  c4 = {
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
        bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
  d4 = {
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
  f4 = {
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
  vf = {
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
  p4 = ee(vf)(),
  h4 = {
    baseStyle: { borderColor: "border" },
    variants: {
      solid: { borderStyle: "solid" },
      dashed: { borderStyle: "dashed" },
      dotted: { borderStyle: "dotted" },
    },
    defaultProps: { variant: "solid" },
  },
  i1 = ee(Ii, {
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
            : Pt.add(L(e, "sizes.3xs"), r ? L(e, "sizes.16") : "0px"),
          h: Pt.add(L(e, "sizes.3xs"), L(e, "sizes.1")),
        },
        label: { fontSize: "xs" },
      }),
      md: ({ theme: e, withLegend: t, withLabels: r }) => ({
        container: {
          w: t
            ? "full"
            : Pt.add(L(e, "sizes.2xs"), r ? L(e, "sizes.16") : "0px"),
          h: "2xs",
        },
        label: { fontSize: "sm" },
      }),
      lg: ({ theme: e, withLegend: t, withLabels: r }) => ({
        container: {
          w: t
            ? "full"
            : Pt.add(L(e, "sizes.xs"), r ? L(e, "sizes.16") : "0px"),
          h: "xs",
        },
        label: { fontSize: "md" },
      }),
    },
    defaultProps: { size: "md" },
  })({ omit: ["line", "grid", "sizes.full"] }),
  m4 = ee(i1)(),
  g4 = ee(vf, {
    baseStyle: {
      container: ({ isFullHeight: e, placement: t }) => ({
        ...(e ? { height: "100dvh", rounded: 0 } : {}),
        [`rounded${Ip(t)}`]: 0,
      }),
      inner: {},
      body: { overflow: "auto" },
      dragBar: ({ placement: e }) => ({
        [`margin${Ip(kS(e))}`]: "md",
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
  y4 = {
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
          bg: ["success.50", Pe("success.400", 0.12)(e, t)],
          borderColor: ["success.500", "success.400"],
        },
        _reject: {
          bg: ["danger.50", Pe("danger.400", 0.12)(e, t)],
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
  v4 = {
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
        const o = U(r)
            ? le(M(r[0], r[0])(e, t), M(r[1], r[1])(e, t))(t)
            : M(r, r)(e, t),
          i = U(n)
            ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
            : M(n, n)(e, t);
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
  x4 = ee($r)(),
  b4 = {
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
  S4 = {
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
  s1 = {
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
        const o = U(n)
          ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
          : M(n, n)(e, t);
        return {
          bg: I(r)
            ? [`${r}.50`, `${r}.700`]
            : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
          color: [I(r) || ye(r) ? "black" : "white", "white"],
          _hover: {
            bg: I(r)
              ? [`${r}.100`, `${r}.800`]
              : [ye(r) ? `${r}.500` : `${r}.600`, `${r}.700`],
            _disabled: {
              bg: I(r)
                ? [`${r}.50`, `${r}.700`]
                : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
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
        const o = U(n)
          ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
          : M(n, n)(e, t);
        return {
          border: "1px solid",
          borderColor: [`${r}.600`, `${r}.500`],
          color: I(r)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${r}.600`, `${r}.500`],
          bg: "transparent",
          _hover: { bg: [`${r}.50`, Pe(`${r}.600`, 0.12)(e, t)] },
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
        const o = U(n)
          ? le(M(n[0], n[0])(e, t), M(n[1], n[1])(e, t))(t)
          : M(n, n)(e, t);
        return {
          color: I(r)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${r}.600`, `${r}.500`],
          bg: "transparent",
          _hover: { bg: [`${r}.50`, Pe(`${r}.600`, 0.12)(e, t)] },
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
  k4 = yy(s1, {
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
  w4 = ee($r, pl, {
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
  C4 = {
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
  _4 = {
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
  P4 = {
    baseStyle: {
      w: "100%",
      display: "flex",
      flexDirection: "column",
      gap: { base: "lg", sm: "md" },
      p: { base: "lg", sm: "md" },
    },
  },
  E4 = ee(pl, { baseStyle: { trigger: {} } })(),
  z4 = {
    baseStyle: {
      group: {},
      container: ({ theme: e, colorMode: t, name: r }) => {
        const n = r ? aS({ string: r }) : le("gray.200", "gray.500")(t);
        return {
          bg: n,
          color: hS(n)(e, t) ? "white" : "black",
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
  T4 = {
    baseStyle: {
      px: 1,
      textTransform: "uppercase",
      fontSize: "xs",
      rounded: "sm",
      fontWeight: "bold",
    },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        bg: [Se(`${r}.600`, 24)(e, t), Z(`${r}.600`, 16)(e, t)],
        color: "white",
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => {
        const n = le(
          M(`${r}.500`)(e, t),
          M(I(r) ? `${r}.100` : Pe(`${r}.400`, 0.92)(e, t))(e, t),
        )(t);
        return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
      },
    },
    defaultProps: { variant: "subtle", colorScheme: "primary" },
  },
  A4 = ee(Ii, {
    baseStyle: {
      bar: {},
      activeBar: {},
      background: { fill: "transparent" },
      cursor: { strokeDasharray: "5 5" },
    },
  })({ omit: ["dot", "activeDot"] }),
  R4 = {
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
  $4 = {
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
              : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [I(r) || ye(r) ? "black" : "white", "white"],
          },
        },
        cell: {
          _between: {
            bg: [
              I(r) ? Pe(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              Z(`${r}.300`, 72)(e, t),
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
                : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
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
              : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [I(r) || ye(r) ? "black" : "white", "white"],
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
            bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, I(r) ? `${r}.50` : `${r}.200`],
          },
        },
        cell: {
          _between: {
            bg: [
              I(r) ? Pe(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              Z(`${r}.300`, 72)(e, t),
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
              bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
            bg: [I(r) ? `${r}.50` : `${r}.100`, Z(`${r}.300`, 58)(e, t)],
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
  M4 = {
    baseStyle: { container: {}, header: {}, body: { flex: "1" }, footer: {} },
    variants: {
      elevated: { container: { boxShadow: ["md", "dark-md"] } },
      outline: { container: { borderWidth: "1px" } },
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: {
          bg: [Se(`${r}.600`, 16)(e, t), Z(`${r}.600`, 16)(e, t)],
          color: "white",
        },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: { bg: [`${r}.100`, Z(`${r}.300`, 58)(e, t)] },
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
  j4 = {
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
  L4 = {
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
  I4 = {
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
        icon: { color: [Se(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: { bg: [`${r}.100`, Z(`${r}.300`, 58)(e, t)] },
        icon: { color: [Se(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      solid: ({ theme: e, colorMode: t, colorScheme: r = "primary" }) => ({
        container: {
          bg: [Se(`${r}.600`, 16)(e, t), Z(`${r}.600`, 16)(e, t)],
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
            bg: [Se(`${r}.600`, 16)(e, t), `${r}.400`],
            rounded: "full",
          },
        },
        icon: { color: [Se(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      "left-accent": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        container: {
          bg: [`${r}.100`, Z(`${r}.300`, 58)(e, t)],
          pl: 3,
          borderLeft: "0.25rem solid",
          borderLeftColor: [Se(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [Se(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      "top-accent": ({
        theme: e,
        colorMode: t,
        colorScheme: r = "primary",
      }) => ({
        container: {
          bg: [`${r}.100`, Z(`${r}.300`, 58)(e, t)],
          pt: 3,
          borderTop: "0.25rem solid",
          borderTopColor: [Se(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [Se(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
    },
    defaultProps: { variant: "basic", colorScheme: "primary" },
  },
  a1 = {
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
  D4 = ee(a1)(),
  V4 = ee(Ii, { baseStyle: { area: {} } })({ omit: ["line"] }),
  B4 = ee(gf)(),
  N4 = {
    Toggle: VE,
    Accordion: L4,
    Alert: I4,
    AlphaSlider: D4,
    AreaChart: V4,
    Autocomplete: B4,
    Avatar: z4,
    Badge: T4,
    BarChart: A4,
    Breadcrumb: R4,
    Button: s1,
    Calendar: $4,
    Card: M4,
    Carousel: j4,
    Checkbox: S4,
    CloseButton: k4,
    ColorPicker: w4,
    ColorSelector: C4,
    ColorSwatch: _4,
    Container: P4,
    ContextMenu: E4,
    DatePicker: Li,
    Dialog: p4,
    Divider: h4,
    DonutChart: m4,
    Drawer: g4,
    Dropzone: y4,
    Editable: v4,
    FileInput: x4,
    FormControl: b4,
    Heading: u4,
    HueSlider: a1,
    Indicator: c4,
    Input: $r,
    Kbd: d4,
    LineChart: Ii,
    Link: f4,
    List: n4,
    Loading: o4,
    Mark: i4,
    Markdown: s4,
    Menu: pl,
    Modal: vf,
    MonthPicker: a4,
    MultiAutocomplete: l4,
    MultiDatePicker: JE,
    MultiSelect: yf,
    NativeSelect: t1,
    NumberInput: e4,
    Pagination: t4,
    PagingTable: r4,
    PieChart: i1,
    PinInput: UE,
    Popover: GE,
    Progress: YE,
    RadarChart: XE,
    Radio: KE,
    RangeDatePicker: QE,
    RangeSlider: qE,
    Rating: ZE,
    Reorder: BE,
    Resizable: NE,
    SaturationSlider: OE,
    ScrollArea: FE,
    SegmentedControl: WE,
    Select: gf,
    NativeTable: n1,
    Skeleton: HE,
    Slider: r1,
    Stat: $E,
    Stepper: ME,
    Switch: jE,
    Table: o1,
    Tabs: LE,
    Tag: IE,
    Textarea: DE,
    Tooltip: AE,
    YearPicker: RE,
  },
  O4 = {
    initialThemeScheme: "base",
    initialColorMode: "light",
    var: { prefix: "ui" },
    breakpoint: "down",
  },
  F4 = {
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
  W4 = {
    styles: {
      globalStyle: PE,
      resetStyle: zE,
      layerStyles: EE,
      textStyles: TE,
    },
    semantics: F4,
    components: N4,
    ..._E,
  },
  H4 = O4,
  U4 = ({
    theme: e = W4,
    config: t = H4,
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
    return b.jsx(dw, {
      theme: e,
      config: t,
      themeSchemeManager: s,
      storageKey: a,
      children: b.jsx(lw, {
        colorModeManager: o,
        storageKey: i,
        config: t,
        children: b.jsx(Qg, {
          environment: l,
          disabled: u,
          children: b.jsx(eP, {
            ...((d = t.motion) == null ? void 0 : d.config),
            children: b.jsxs(WP, {
              ...t.loading,
              children: [
                r ? null : b.jsx(pw, {}),
                n ? null : b.jsx(hw, {}),
                c,
                b.jsx(aE, { ...t.notice }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  G4 = ({ value: e, ...t }) => {
    var r;
    (r = t.onUpdate) != null || (t.onUpdate = (c, d) => c !== d);
    const n = Sr(t.onChange),
      o = Sr(t.onUpdate),
      [i, s] = S.useState(t.defaultValue),
      a = e !== void 0,
      l = a ? e : i,
      u = Sr(
        (c) => {
          const d = qe(c, l);
          o(l, d) && ((!a || _i(d) || Bb(d)) && s(d), n(d));
        },
        [a, l, n, o],
      );
    return [l, u];
  },
  [Y4, X4] = on({ strict: !1, name: "ButtonGroupContext" });
W(
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
      h = S.useMemo(() => ({ size: t, variant: r, isDisabled: i }), [t, r, i]);
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
      b.jsx(Y4, {
        value: h,
        children: b.jsx(O.div, {
          ref: c,
          role: "group",
          className: G("ui-button-group", e),
          "data-attached": ke(o),
          __css: f,
          ...u,
        }),
      })
    );
  },
);
var du = W(({ children: e, ...t }, r) => {
    const n = X4(),
      [o, i] = oo("Button", { ...n, ...t }),
      {
        className: s,
        as: a,
        type: l,
        isRounded: u,
        isLoading: c,
        isActive: d,
        isDisabled: f = n == null ? void 0 : n.isDisabled,
        leftIcon: h,
        rightIcon: x,
        loadingIcon: v,
        loadingText: w,
        loadingPlacement: p = "start",
        disableRipple: g,
        __css: y,
        ...k
      } = Ft(i),
      C = f || c,
      { ref: _, type: P } = K4(a),
      { onPointerDown: E, ...R } = qv({ ...k, isDisabled: g || C }),
      T = S.useMemo(() => {
        var Ie;
        const Re =
          "_focus" in o
            ? he((Ie = o._focus) != null ? Ie : {}, {
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
          ...(n ? { _focus: Re } : {}),
          ...(u ? { borderRadius: "fallback(full, 9999px)" } : {}),
        };
      }, [o, y, n, u]),
      B = { leftIcon: h, rightIcon: x, children: e },
      xe = { loadingIcon: v, loadingText: w };
    return b.jsxs(O.button, {
      ref: ia(r, _),
      as: a,
      className: G("ui-button", s),
      type: l ?? P,
      disabled: C,
      "data-active": ke(d),
      "data-loading": ke(c),
      __css: T,
      ...k,
      onPointerDown: E,
      children: [
        c && p === "start"
          ? b.jsx(km, { className: "ui-button__loading--start", ...xe })
          : null,
        c
          ? w || b.jsx(O.span, { opacity: 0, children: b.jsx(wm, { ...B }) })
          : b.jsx(wm, { ...B }),
        c && p === "end"
          ? b.jsx(km, { className: "ui-button__loading--end", ...xe })
          : null,
        b.jsx(Qv, { isDisabled: g || C, ...R }),
      ],
    });
  }),
  km = ({ className: e, loadingIcon: t, loadingText: r }) => {
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
            ? b.jsx(qn, { color: "current", variant: t })
            : t || b.jsx(qn, { color: "current" }),
        [t],
      );
    return b.jsx(O.div, {
      className: G("ui-button__loading", e),
      __css: n,
      children: o,
    });
  },
  wm = ({ leftIcon: e, rightIcon: t, children: r }) =>
    b.jsxs(b.Fragment, {
      children: [
        e ? b.jsx(Cm, { children: e }) : null,
        r,
        t ? b.jsx(Cm, { children: t }) : null,
      ],
    }),
  Cm = ({ children: e, className: t, ...r }) =>
    b.jsx(O.span, {
      className: G("ui-button__icon", t),
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      "aria-hidden": !0,
      ...r,
      children: e,
    }),
  K4 = (e) => {
    const t = S.useRef(!e),
      r = S.useCallback((o) => {
        o && (t.current = o.tagName === "BUTTON");
      }, []),
      n = t.current ? "button" : void 0;
    return { ref: r, type: n };
  },
  [Q4, Di] = on({ strict: !1, name: "FormControlContext" }),
  [q4, hl] = on({ strict: !1, name: "FormControlStyleContext" });
W(({ id: e, ...t }, r) => {
  const [n, o] = Ai("FormControl", t),
    {
      className: i,
      isRequired: s = !1,
      isDisabled: a = !1,
      isInvalid: l = !1,
      isReadOnly: u = !1,
      isReplace: c = !0,
      label: d,
      helperMessage: f,
      errorMessage: h,
      children: x,
      requiredIndicator: v,
      optionalIndicator: w,
      ...p
    } = Ft(o);
  e ?? (e = S.useId());
  const [g, y] = S.useState(!1),
    k = Pi(x),
    [C] = Ol(k, _m),
    [_] = Ol(k, Pm),
    [P] = Ol(k, Em),
    E = !!C,
    R = !!_,
    T = !!P,
    B = { ...n.container };
  return b.jsx(Q4, {
    value: {
      id: e,
      isFocused: g,
      isRequired: s,
      isDisabled: a,
      isInvalid: l,
      isReadOnly: u,
      isReplace: c,
      onFocus: () => y(!0),
      onBlur: () => y(!1),
    },
    children: b.jsx(q4, {
      value: n,
      children: b.jsxs(O.div, {
        ref: r,
        className: G("ui-form__control", i),
        role: "group",
        "data-focus": ke(g),
        "data-disabled": ke(a),
        "data-invalid": ke(l),
        "data-readonly": ke(u),
        __css: B,
        ...p,
        children: [
          !E && d
            ? b.jsx(_m, {
                requiredIndicator: v,
                optionalIndicator: w,
                children: d,
              })
            : null,
          x,
          !R && f ? b.jsx(Pm, { children: f }) : null,
          !T && h ? b.jsx(Em, { children: h }) : null,
        ],
      }),
    }),
  });
});
var l1 = ({
    id: e,
    disabled: t,
    readOnly: r,
    required: n,
    isDisabled: o,
    isReadOnly: i,
    isRequired: s,
    isInvalid: a,
    ...l
  }) => {
    var u, c, d;
    const f = Di(),
      h = e ?? (f == null ? void 0 : f.id),
      x = (u = t ?? o) != null ? u : f == null ? void 0 : f.isDisabled,
      v = (c = r ?? i) != null ? c : f == null ? void 0 : f.isReadOnly,
      w = (d = n ?? s) != null ? d : f == null ? void 0 : f.isRequired,
      p = a ?? (f == null ? void 0 : f.isInvalid);
    return {
      id: h,
      isDisabled: x,
      isReadOnly: v,
      isRequired: w,
      isInvalid: p,
      ...l,
    };
  },
  u1 = ({
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
    const d = Di();
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
        "aria-disabled": ns(t),
        "aria-readonly": ns(r),
        "aria-required": ns(n),
        "aria-invalid": ns(a),
        "data-readonly": ke(r),
        onFocus: Ne(d == null ? void 0 : d.onFocus, l),
        onBlur: Ne(d == null ? void 0 : d.onBlur, u),
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
  Z4 = [
    "disabled",
    "required",
    "readOnly",
    "aria-disabled",
    "aria-readonly",
    "aria-required",
    "aria-invalid",
    "data-readonly",
    "onFocus",
    "onBlur",
    "_hover",
    "_active",
    "_focus",
    "_invalid",
    "_focusVisible",
  ],
  J4 = Z4,
  _m = W(
    (
      {
        className: e,
        htmlFor: t,
        isRequired: r,
        requiredIndicator: n = b.jsx(ez, {}),
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
          isDisabled: h,
          isInvalid: x,
          isReadOnly: v,
        } = (l = Di()) != null ? l : {},
        w = (u = hl()) != null ? u : {};
      r ?? (r = d);
      const p = {
        display: "block",
        pointerEvents: v ? "none" : void 0,
        ...w.label,
      };
      return b.jsxs(O.label, {
        ref: a,
        className: G("ui-form__label", e),
        "data-focus": ke(f),
        "data-disabled": ke(h),
        "data-readonly": ke(v),
        "data-invalid": ke(x),
        htmlFor: t ?? c,
        __css: p,
        style: { cursor: h ? "not-allowed" : void 0 },
        ...s,
        children: [i, r ? n : o],
      });
    },
  ),
  ez = W(({ className: e, ...t }, r) => {
    var n;
    const i = { ...((n = hl()) != null ? n : {}).requiredIndicator };
    return b.jsx(O.span, {
      ref: r,
      className: G("ui-form__required-indicator", e),
      role: "presentation",
      "aria-hidden": !0,
      __css: i,
      ...t,
      children: "*",
    });
  }),
  Pm = W(({ className: e, ...t }, r) => {
    var n, o;
    const { isInvalid: i, isReplace: s } = (n = Di()) != null ? n : {},
      a = (o = hl()) != null ? o : {};
    if (s && i) return null;
    const l = { ...a.helperMessage };
    return b.jsx(O.div, {
      ref: r,
      className: G("ui-form__helper-message", e),
      __css: l,
      ...t,
    });
  }),
  Em = W(({ className: e, ...t }, r) => {
    var n, o;
    const { isInvalid: i } = (n = Di()) != null ? n : {},
      s = (o = hl()) != null ? o : {};
    if (!i) return null;
    const a = { ...s.errorMessage };
    return b.jsx(O.div, {
      ref: r,
      className: G("ui-form__error-message", e),
      "aria-live": "polite",
      __css: a,
      ...t,
    });
  }),
  Mc = !1,
  Vi = null,
  tn = !1,
  jc = !1,
  Lc = new Set(),
  xf = (e, t) => Lc.forEach((r) => r(e, t)),
  tz = (e) =>
    !(
      e.metaKey ||
      (!oS && e.altKey) ||
      e.ctrlKey ||
      e.key === "Control" ||
      e.key === "Shift" ||
      e.key === "Meta"
    ),
  zm = (e) => {
    (tn = !0), tz(e) && ((Vi = "keyboard"), xf("keyboard", e));
  },
  hn = (e) => {
    if (
      ((Vi = "pointer"),
      e.type === "mousedown" ||
        e.type === "pointerdown" ||
        e.type === "pointerup")
    ) {
      if (
        ((tn = !0),
        (e.composedPath ? e.composedPath()[0] : e.target).matches(
          ":focus-visible",
        ))
      )
        return;
      xf("pointer", e);
    }
  },
  rz = (e) =>
    e.mozInputSource === 0 && e.isTrusted
      ? !0
      : e.detail === 0 && !e.pointerType,
  nz = (e) => {
    rz(e) && ((tn = !0), (Vi = "virtual"));
  },
  oz = (e) => {
    e.target === window ||
      e.target === document ||
      (!tn && !jc && ((Vi = "virtual"), xf("virtual", e)),
      (tn = !1),
      (jc = !1));
  },
  iz = () => {
    (tn = !1), (jc = !0);
  },
  Tm = () => Vi !== "pointer",
  sz = () => {
    if (typeof window > "u" || Mc) return;
    const { focus: e } = HTMLElement.prototype;
    (HTMLElement.prototype.focus = function (...r) {
      (tn = !0), this && e.apply(this, r);
    }),
      document.addEventListener("keydown", zm, !0),
      document.addEventListener("keyup", zm, !0),
      document.addEventListener("click", nz, !0),
      window.addEventListener("focus", oz, !0),
      window.addEventListener("blur", iz, !1),
      typeof PointerEvent < "u"
        ? (document.addEventListener("pointerdown", hn, !0),
          document.addEventListener("pointermove", hn, !0),
          document.addEventListener("pointerup", hn, !0))
        : (document.addEventListener("mousedown", hn, !0),
          document.addEventListener("mousemove", hn, !0),
          document.addEventListener("mouseup", hn, !0)),
      (Mc = !0);
  },
  az = (e, { force: t } = {}) => {
    t && (Mc = !1), sz(), e(Tm());
    const r = () => e(Tm());
    return (
      Lc.add(r),
      () => {
        Lc.delete(r);
      }
    );
  },
  c1 = W(
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
            w: Co(e, (v) => (c(v) ? "100%" : "fix-content")),
            h: Co(e, (v) => (c(v) ? "fix-content" : "100%")),
            borderLeftWidth: Co(e, (v) => (c(v) ? 0 : "1px")),
            borderBottomWidth: Co(e, (v) => (c(v) ? "1px" : 0)),
          }),
          [e],
        ),
        f = Pi(a),
        h = i
          ? f.map((v, w) => {
              const p = typeof v.key < "u" ? v.key : w,
                g = S.cloneElement(i, { __css: d });
              return b.jsxs(S.Fragment, { children: [w ? g : null, v] }, p);
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
      return b.jsx(O.div, {
        ref: u,
        className: G("ui-stack", s),
        __css: x,
        ...l,
        children: h,
      });
    },
  ),
  Am = W(({ className: e, ...t }, r) =>
    b.jsx(c1, {
      ref: r,
      className: G("ui-stack--horizontal", e),
      direction: "row",
      align: "center",
      ...t,
    }),
  );
W(({ className: e, ...t }, r) =>
  b.jsx(c1, {
    ref: r,
    className: G("ui-stack--vertical", e),
    direction: "column",
    align: "stretch",
    w: "100%",
    ...t,
  }),
);
W(
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
      h = {
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
          Pi(s).map((y, k) => {
            var C;
            const _ = S.createRef();
            u.current.set(k, _);
            const P = (C = y.key) != null ? C : k,
              E = r + k,
              R = `calc(var(--ui-space) * ${k})`;
            let T = {};
            (T = { ...T, position: "absolute", zIndex: E }),
              (T = { ...T, ...x(R) }),
              (T = { ...T, ...v(R) });
            const B = { ...y.props, ref: ia(y.ref, _), __css: T },
              xe = S.cloneElement(y, B);
            return b.jsx(S.Fragment, { children: xe }, P);
          }),
        [s, r, x, v],
      );
    return (
      S.useEffect(() => {
        if (!i) return;
        let p = t.includes("left"),
          g = t.includes("top"),
          y = 0,
          k = 0;
        o && ((p = !p), (g = !g));
        for (const C of u.current.values()) {
          if (!C.current) continue;
          let {
            offsetParent: _,
            offsetWidth: P,
            offsetHeight: E,
            offsetTop: R,
            offsetLeft: T,
          } = C.current;
          _ &&
            (p && (T = _.offsetWidth - T - P),
            g && (R = _.offsetHeight - R - E),
            (P += T),
            (E += R),
            P > y && (y = P),
            E > k && (k = E));
        }
        d({ width: y, height: k });
      }, [w, t, o, i]),
      b.jsx(O.div, {
        ref: l,
        className: G("ui-stack--depth", e),
        __css: h,
        ...a,
        children: w,
      })
    );
  },
);
var lz = W((e, t) => {
    const [r, n] = oo("Container", e),
      { className: o, centerContent: i, ...s } = Ft(n),
      a = S.useMemo(
        () => ({ alignItems: i ? "center" : void 0, ...r }),
        [i, r],
      );
    return b.jsx(O.section, {
      ref: t,
      className: G("ui-container", o),
      __css: a,
      ...s,
    });
  }),
  d1 = W(
    (
      {
        direction: e,
        justify: t,
        align: r,
        wrap: n,
        basis: o,
        grow: i,
        shrink: s,
        ...a
      },
      l,
    ) => {
      const u = {
        display: "flex",
        flexDirection: e,
        justifyContent: t,
        alignItems: r,
        flexWrap: n,
        flexBasis: o,
        flexGrow: i,
        flexShrink: s,
      };
      return b.jsx(O.div, { ref: l, __css: u, ...a });
    },
  );
W((e, t) => b.jsx(d1, { ref: t, wrap: "wrap", ...e }));
var Rm = (e) => e && ve(e) && ve(e.target),
  uz = ({ value: e, defaultValue: t = [], onChange: r, isNative: n, ...o }) => {
    const i = Sr(r),
      [s, a] = G4({ value: e, defaultValue: t, onChange: i }),
      l = S.useCallback(
        (c) => {
          const d = Rm(c) ? c.target.checked : !s.includes(c),
            f = Rm(c) ? c.target.value : c,
            h = d ? [...s, f] : s.filter((x) => String(x) !== String(f));
          a(h);
        },
        [s, a],
      ),
      u = S.useCallback(
        (c, d = null) => ({
          ...c,
          ref: d,
          [n ? "checked" : "isChecked"]: s.some(
            (f) => String(c == null ? void 0 : c.value) === String(f),
          ),
          onChange: l,
        }),
        [l, n, s],
      );
    return {
      props: o,
      value: s,
      setValue: a,
      onChange: l,
      getCheckboxProps: u,
    };
  },
  [cz, dz] = on({ strict: !1, name: "CheckboxGroupContext" }),
  fz = S.forwardRef(
    (
      {
        className: e,
        size: t,
        variant: r,
        colorScheme: n,
        children: o,
        items: i = [],
        direction: s = "column",
        gap: a,
        ...l
      },
      u,
    ) => {
      const { value: c, onChange: d, props: f } = uz(l),
        {
          isRequired: h,
          isReadOnly: x,
          isDisabled: v,
          isInvalid: w,
          ...p
        } = l1(f),
        g = Pi(o);
      let y = [];
      return (
        !g.length &&
          i.length &&
          (y = i.map(({ label: k, value: C, ..._ }, P) =>
            b.jsx(bf, { value: C, ..._, children: k }, P),
          )),
        b.jsx(cz, {
          value: {
            size: t,
            variant: r,
            colorScheme: n,
            isRequired: h,
            isReadOnly: x,
            isDisabled: v,
            isInvalid: w,
            value: c,
            onChange: d,
          },
          children: b.jsx(d1, {
            ref: u,
            className: G("ui-checkbox-group", e),
            role: "group",
            direction: s,
            gap: a ?? (s === "row" ? "1rem" : void 0),
            ...p,
            children: o ?? y,
          }),
        })
      );
    },
  );
fz.displayName = "CheckboxGroup";
var pz = ({ id: e, ...t }) => {
    e ?? (e = S.useId());
    const {
        id: r,
        name: n,
        value: o,
        isChecked: i,
        defaultIsChecked: s,
        tabIndex: a,
        required: l,
        disabled: u,
        readOnly: c,
        isIndeterminate: d,
        onChange: f,
        onFocus: h,
        onBlur: x,
        ...v
      } = u1({ id: e, ...t }),
      [{ "aria-readonly": w, ...p }, g] = mS(v, J4),
      [y, k] = S.useState(!1),
      [C, _] = S.useState(!1),
      [P, E] = S.useState(!1),
      [R, T] = S.useState(!1),
      B = S.useRef(null),
      [xe, Ie] = S.useState(!0),
      [Re, te] = S.useState(!!s),
      re = i !== void 0,
      ne = re ? i : Re,
      $ = Sr(
        (H) => {
          if (c || u) {
            H.preventDefault();
            return;
          }
          re || te(!ne || d ? !0 : H.target.checked), f == null || f(H);
        },
        [c, u, re, ne, d],
      ),
      V = Sr(h),
      N = Sr(x),
      se = S.useCallback(
        ({ key: H }) => {
          H === " " && T(!0);
        },
        [T],
      ),
      me = S.useCallback(
        ({ key: H }) => {
          H === " " && T(!1);
        },
        [T],
      );
    S.useEffect(() => az(k), []),
      Yr(() => {
        B.current && (B.current.indeterminate = !!d);
      }, [d]),
      sa(() => {
        u && _(!1);
      }, [u, _]),
      Yr(() => {
        var H;
        (H = B.current) != null &&
          H.form &&
          (B.current.form.onreset = () => te(!!s));
      }, []),
      Yr(() => {
        B.current && B.current.checked !== ne && te(B.current.checked);
      }, [B.current]);
    const ln = S.useCallback(
        (H = {}, Mr = null) => ({
          ...p,
          ...H,
          ref: ia(Mr, (nt) => {
            nt && Ie(nt.tagName === "LABEL");
          }),
          "data-checked": ke(ne),
          onClick: Ne(H.onClick, () => {
            var nt;
            xe ||
              ((nt = B.current) == null || nt.click(),
              requestAnimationFrame(() => {
                var kf;
                return (kf = B.current) == null ? void 0 : kf.focus();
              }));
          }),
        }),
        [ne, xe, p],
      ),
      Wt = S.useCallback(
        (H = {}, Mr = null) => ({
          ...p,
          ...H,
          ref: Mr,
          "data-active": ke(R),
          "data-hover": ke(P),
          "data-checked": ke(ne),
          "data-focus": ke(C),
          "data-focus-visible": ke(C && y),
          "data-indeterminate": ke(d),
          "aria-hidden": !0,
          onMouseDown: Ne(H.onMouseDown, (nt) => {
            C && nt.preventDefault(), T(!0);
          }),
          onMouseUp: Ne(H.onMouseUp, () => T(!1)),
          onMouseEnter: Ne(H.onMouseEnter, () => E(!0)),
          onMouseLeave: Ne(H.onMouseLeave, () => E(!1)),
        }),
        [R, ne, C, P, y, d, p],
      ),
      so = S.useCallback(
        (H = {}, Mr = null) => ({
          ...p,
          ...H,
          ref: ia(B, Mr),
          id: e,
          type: "checkbox",
          name: n,
          value: o,
          tabIndex: a,
          required: l,
          disabled: u,
          readOnly: c,
          checked: ne,
          style: {
            border: "0px",
            clip: "rect(0px, 0px, 0px, 0px)",
            height: "1px",
            width: "1px",
            margin: "-1px",
            padding: "0px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute",
          },
          onChange: Ne(H.onChange, $),
          onBlur: Ne(H.onBlur, N, () => _(!1)),
          onFocus: Ne(H.onFocus, V, () => _(!0)),
          onKeyDown: Ne(H.onKeyDown, se),
          onKeyUp: Ne(H.onKeyUp, me),
        }),
        [p, e, n, o, a, l, u, c, ne, $, N, V, se, me],
      ),
      Ht = S.useCallback(
        (H = {}, Mr = null) => ({
          ...p,
          ...H,
          ref: Mr,
          "data-checked": ke(ne),
          onMouseDown: Ne(H.onMouseDown, (nt) => {
            nt.preventDefault(), nt.stopPropagation();
          }),
          onTouchStart: Ne(H.onTouchStart, (nt) => {
            nt.preventDefault(), nt.stopPropagation();
          }),
        }),
        [ne, p],
      );
    return {
      props: g,
      isFocusVisible: y,
      isFocused: C,
      isHovered: P,
      isActive: R,
      isChecked: ne,
      isIndeterminate: d,
      getContainerProps: ln,
      getIconProps: Wt,
      getInputProps: so,
      getLabelProps: Ht,
    };
  },
  bf = S.forwardRef((e, t) => {
    var r, n, o, i;
    const s = dz(),
      { value: a, ...l } = { ...s },
      u = l1(e),
      [c, d] = Ai("Checkbox", { ...l, ...e }),
      {
        className: f,
        gap: h = "0.5rem",
        isRequired: x = (r = l.isRequired) != null ? r : u.isRequired,
        isReadOnly: v = (n = l.isReadOnly) != null ? n : u.isReadOnly,
        isDisabled: w = (o = l.isDisabled) != null ? o : u.isDisabled,
        isInvalid: p = (i = l.isInvalid) != null ? i : u.isInvalid,
        iconProps: g,
        inputProps: y,
        labelProps: k,
        children: C,
        ..._
      } = Ft(d),
      P = a && _.value ? a.includes(_.value) : _.isChecked,
      E = l.onChange && _.value ? Zb(l.onChange, _.onChange) : _.onChange,
      {
        isChecked: R,
        isIndeterminate: T,
        getContainerProps: B,
        getInputProps: xe,
        getIconProps: Ie,
        getLabelProps: Re,
        props: te,
      } = pz({
        ..._,
        isRequired: x,
        isReadOnly: v,
        isDisabled: w,
        isInvalid: p,
        isChecked: P,
        onChange: E,
      }),
      { children: re, ...ne } = { ...g },
      $ = S.cloneElement(re ?? b.jsx(hz, {}), {
        __css: {
          opacity: R || T ? 1 : 0,
          transform: R || T ? "scale(1)" : "scale(0.95)",
          transitionProperty: "transform",
          transitionDuration: "normal",
        },
        isIndeterminate: T,
        isChecked: R,
        isRequired: x,
        isReadOnly: v,
        isDisabled: w,
        isInvalid: p,
      });
    return b.jsxs(O.label, {
      className: G("ui-checkbox", f),
      ...B(),
      __css: {
        cursor: "pointer",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "top",
        gap: h,
        ...c.container,
      },
      ...te,
      children: [
        b.jsx(O.input, { className: "ui-checkbox__input", ...xe(y, t) }),
        b.jsx(O.span, {
          className: "ui-checkbox__icon",
          __css: {
            pointerEvents: v ? "none" : void 0,
            position: "relative",
            display: "inline-block",
            userSelect: "none",
            ...c.icon,
          },
          ...Ie(ne),
          children: $,
        }),
        b.jsx(O.span, {
          className: "ui-checkbox__label",
          __css: { ...c.label },
          ...Re(k),
          children: C,
        }),
      ],
    });
  });
bf.displayName = "Checkbox";
var hz = ({
    isIndeterminate: e,
    isChecked: t,
    isRequired: r,
    isReadOnly: n,
    isDisabled: o,
    isInvalid: i,
    ...s
  }) =>
    b.jsx(ll, {
      initial: !1,
      children:
        e || t
          ? b.jsx(O.div, {
              __css: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              children: b.jsx(O.div, {
                as: io.div,
                variants: { unchecked: { scale: 0.5 }, checked: { scale: 1 } },
                initial: "unchecked",
                animate: "checked",
                exit: "unchecked",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: e ? b.jsx(gz, { ...s }) : b.jsx(mz, { ...s }),
              }),
            })
          : null,
    }),
  mz = (e) =>
    b.jsx(O.svg, {
      as: io.svg,
      width: "1.2em",
      viewBox: "0 0 12 10",
      variants: {
        unchecked: { opacity: 0, strokeDashoffset: 16 },
        checked: {
          opacity: 1,
          strokeDashoffset: 0,
          transition: { duration: 0.2 },
        },
      },
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16,
      },
      ...e,
      children: b.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" }),
    }),
  gz = (e) =>
    b.jsx(O.svg, {
      as: io.svg,
      width: "1.2em",
      viewBox: "0 0 24 24",
      variants: {
        unchecked: { scaleX: 0.65, opacity: 0 },
        checked: {
          scaleX: 1,
          opacity: 1,
          transition: { scaleX: { duration: 0 }, opacity: { duration: 0.02 } },
        },
      },
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: b.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
    }),
  yz = W((e, t) => {
    const [r, n] = oo("Heading", e),
      { className: o, ...i } = Ft(n);
    return b.jsx(O.h1, {
      ref: t,
      className: G("ui-heading", o),
      __css: r,
      ...i,
    });
  }),
  vz = W((e, t) => {
    const [r, n] = oo("Text", e),
      { className: o, align: i, decoration: s, casing: a, ...l } = Ft(n),
      u = Da({ textAlign: i, textDecoration: s, textTransform: a });
    return b.jsx(O.p, {
      ref: t,
      className: G("ui-text", o),
      __css: r,
      ...u,
      ...l,
    });
  }),
  xz = W((e, t) => {
    const [r, n] = Ai("Input", e);
    let { className: o, htmlSize: i, __css: s, ...a } = Ft(n);
    a = u1(a);
    const l = { ...r.field, ...s };
    return b.jsx(O.input, {
      ref: t,
      className: G("ui-input", o),
      size: i,
      __css: l,
      ...a,
    });
  }),
  [bz, f1] = on({
    name: "ListContext",
    errorMessage: `useList returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Sf = W((e, t) => {
    const [r, n] = Ai("List", e),
      {
        className: o,
        children: i,
        styleType: s = "none",
        stylePosition: a,
        gap: l = "fallback(2, 0.5rem)",
        ...u
      } = Ft(n),
      c = Pi(i),
      d = {
        display: "flex",
        flexDirection: "column",
        gap: l,
        ms: s !== "none" ? "1.4em" : void 0,
        "& > li": { ps: s === "decimal" ? "0.3em" : void 0 },
        ...r.container,
      };
    return b.jsx(bz, {
      value: r,
      children: b.jsx(O.ul, {
        ref: t,
        listStyleType: s,
        listStylePosition: a,
        role: "list",
        className: G("ui-list", o),
        __css: d,
        ...u,
        children: c,
      }),
    });
  });
W(({ ...e }, t) => b.jsx(Sf, { ref: t, as: "ul", styleType: "disc", ...e }));
W(({ ...e }, t) =>
  b.jsx(Sf, { ref: t, as: "ol", styleType: "decimal", ms: "1.2em", ...e }),
);
var Sz = W(({ className: e, ...t }, r) => {
  const o = { ...f1().item };
  return b.jsx(O.li, {
    ref: r,
    className: G("ui-list-item", e),
    __css: o,
    ...t,
  });
});
W(({ className: e, ...t }, r) => {
  const o = { ...f1().icon };
  return b.jsx(St, {
    ref: r,
    className: G("ui-list-icon", e),
    role: "presentation",
    __css: o,
    ...t,
  });
});
const kz = "todoDB",
  bt = "todos",
  wz = 1,
  Bi = () =>
    new Promise((e, t) => {
      const r = indexedDB.open(kz, wz);
      (r.onupgradeneeded = function () {
        const n = this.result;
        n.objectStoreNames.contains(bt) ||
          n.createObjectStore(bt, { keyPath: "id", autoIncrement: !0 });
      }),
        (r.onsuccess = (n) => {
          const o = n.target.result;
          e(o);
        }),
        (r.onerror = (n) => {
          t(n.target.error);
        });
    }),
  Cz = async (e) => {
    (await Bi()).transaction(bt, "readwrite").objectStore(bt).add(e);
  },
  _z = async () => {
    const n = (await Bi()).transaction(bt, "readonly").objectStore(bt).getAll();
    return new Promise((o, i) => {
      (n.onsuccess = (s) => {
        o(s.target.result);
      }),
        (n.onerror = (s) => {
          i(s.target.error);
        });
    });
  },
  Pz = async (e, t) => {
    const o = (await Bi()).transaction(bt, "readwrite").objectStore(bt),
      i = o.get(e);
    (i.onsuccess = (s) => {
      const l = { ...s.target.result, ...t };
      o.put(l);
    }),
      (i.onerror = (s) => {
        console.error("Failed to update todo", s.target.error);
      });
  },
  Ez = async (e) => {
    (await Bi()).transaction(bt, "readwrite").objectStore(bt).delete(e);
  },
  zz = async () => {
    (await Bi()).transaction(bt, "readwrite").objectStore(bt).clear();
  };
function Tz() {
  const [e, t] = S.useState(""),
    [r, n] = S.useState([]),
    o = (c) => t(c.currentTarget.value),
    i = async () => {
      e !== "" && (await Cz({ name: e, isCompleted: !1 }), await u(), t(""));
    },
    s = async (c) => {
      const d = r.find((f) => f.id === c);
      d &&
        (await Pz(c, { isCompleted: !d.isCompleted }),
        n((f) =>
          f.map((h) =>
            h.id === c ? { ...h, isCompleted: !h.isCompleted } : h,
          ),
        ));
    },
    a = async (c) => {
      c !== 0 && (await Ez(c), n((d) => d.filter((f) => f.id !== c)));
    },
    l = async () => {
      await zz(), n([]);
    },
    u = async () => {
      const c = await _z();
      n(c);
    };
  return (
    S.useEffect(() => {
      u();
    }, []),
    b.jsx(b.Fragment, {
      children: b.jsxs(lz, {
        maxW: "2xl",
        m: "auto",
        children: [
          b.jsx(yz, { children: "Todo App" }),
          b.jsxs(Am, {
            gap: 0,
            children: [
              b.jsx(xz, {
                type: "text",
                placeholder: "Enter your todo.",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                value: e,
                onChange: o,
              }),
              b.jsx(du, {
                colorScheme: "primary",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                onClick: i,
                children: "Add",
              }),
              b.jsx(du, {
                colorScheme: "danger",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                onClick: l,
                children: "All Clear",
              }),
            ],
          }),
          r.length === 0
            ? b.jsx(vz, { children: "No todo." })
            : b.jsx(Sf, {
                children: r.map((c) =>
                  b.jsxs(
                    Sz,
                    {
                      as: Am,
                      justifyContent: "space-between",
                      children: [
                        b.jsx(bf, {
                          isChecked: c.isCompleted,
                          flexGrow: 1,
                          h: "full",
                          onChange: () => s(c.id || 0),
                          children: c.name,
                        }),
                        b.jsx(du, {
                          variant: "outline",
                          colorScheme: "danger",
                          onClick: () => a(c.id || 0),
                          children: "Delete",
                        }),
                      ],
                    },
                    c.id,
                  ),
                ),
              }),
        ],
      }),
    })
  );
}
fu.createRoot(document.getElementById("root")).render(
  b.jsx(Sa.StrictMode, { children: b.jsx(U4, { children: b.jsx(Tz, {}) }) }),
);
