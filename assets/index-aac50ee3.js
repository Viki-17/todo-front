function jd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vs = { exports: {} },
  ho = {},
  Qs = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  Fd = Symbol.for("react.portal"),
  Ud = Symbol.for("react.fragment"),
  Id = Symbol.for("react.strict_mode"),
  Ad = Symbol.for("react.profiler"),
  $d = Symbol.for("react.provider"),
  Bd = Symbol.for("react.context"),
  Hd = Symbol.for("react.forward_ref"),
  Wd = Symbol.for("react.suspense"),
  Vd = Symbol.for("react.memo"),
  Qd = Symbol.for("react.lazy"),
  va = Symbol.iterator;
function Kd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ks = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ys = Object.assign,
  Gs = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gs),
    (this.updater = n || Ks);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xs() {}
Xs.prototype = tr.prototype;
function du(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gs),
    (this.updater = n || Ks);
}
var pu = (du.prototype = new Xs());
pu.constructor = du;
Ys(pu, tr.prototype);
pu.isPureReactComponent = !0;
var ga = Array.isArray,
  Js = Object.prototype.hasOwnProperty,
  hu = { current: null },
  Zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function qs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Js.call(t, r) && !Zs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: nl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hu.current,
  };
}
function Yd(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function Gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ya = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gd("" + e.key)
    : t.toString(36);
}
function Ll(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case Fd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Bo(i, 0) : r),
      ga(l)
        ? ((n = ""),
          e != null && (n = e.replace(ya, "$&/") + "/"),
          Ll(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (mu(l) &&
            (l = Yd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ya, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ga(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Bo(o, u);
      i += Ll(o, t, n, a, l);
    }
  else if (((a = Kd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Bo(o, u++)), (i += Ll(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ll(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Xd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  zl = { transition: null },
  Jd = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: zl,
    ReactCurrentOwner: hu,
  };
W.Children = {
  map: dl,
  forEach: function (e, t, n) {
    dl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = tr;
W.Fragment = Ud;
W.Profiler = Ad;
W.PureComponent = du;
W.StrictMode = Id;
W.Suspense = Wd;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ys({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = hu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Js.call(t, a) &&
        !Zs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $d, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = qs;
W.createFactory = function (e) {
  var t = qs.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Hd, render: e };
};
W.isValidElement = mu;
W.lazy = function (e) {
  return { $$typeof: Qd, _payload: { _status: -1, _result: e }, _init: Xd };
};
W.memo = function (e, t) {
  return { $$typeof: Vd, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = zl.transition;
  zl.transition = {};
  try {
    e();
  } finally {
    zl.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Ne.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
W.useId = function () {
  return Ne.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Ne.current.useRef(e);
};
W.useState = function (e) {
  return Ne.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Ne.current.useTransition();
};
W.version = "18.2.0";
Qs.exports = W;
var L = Qs.exports;
const xt = Od(L),
  vi = jd({ __proto__: null, default: xt }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd = L,
  qd = Symbol.for("react.element"),
  bd = Symbol.for("react.fragment"),
  ep = Object.prototype.hasOwnProperty,
  tp = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  np = { key: !0, ref: !0, __self: !0, __source: !0 };
function bs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) ep.call(t, r) && !np.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: qd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: tp.current,
  };
}
ho.Fragment = bd;
ho.jsx = bs;
ho.jsxs = bs;
Vs.exports = ho;
var P = Vs.exports,
  gi = {},
  ec = { exports: {} },
  Ae = {},
  tc = { exports: {} },
  nc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, A) {
    var O = T.length;
    T.push(A);
    e: for (; 0 < O; ) {
      var X = (O - 1) >>> 1,
        oe = T[X];
      if (0 < l(oe, A)) (T[X] = A), (T[O] = oe), (O = X);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0],
      O = T.pop();
    if (O !== A) {
      T[0] = O;
      e: for (var X = 0, oe = T.length, wn = oe >>> 1; X < wn; ) {
        var Se = 2 * (X + 1) - 1,
          ir = T[Se],
          ht = Se + 1,
          qt = T[ht];
        if (0 > l(ir, O))
          ht < oe && 0 > l(qt, ir)
            ? ((T[X] = qt), (T[ht] = O), (X = ht))
            : ((T[X] = ir), (T[Se] = O), (X = Se));
        else if (ht < oe && 0 > l(qt, O)) (T[X] = qt), (T[ht] = O), (X = ht);
        else break e;
      }
    }
    return A;
  }
  function l(T, A) {
    var O = T.sortIndex - A.sortIndex;
    return O !== 0 ? O : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    p = 1,
    h = null,
    v = 3,
    x = !1,
    k = !1,
    y = !1,
    m = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= T)
        r(s), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(s);
    }
  }
  function w(T) {
    if (((y = !1), d(T), !k))
      if (n(a) !== null) (k = !0), Zt(E);
      else {
        var A = n(s);
        A !== null && or(w, A.startTime - T);
      }
  }
  function E(T, A) {
    (k = !1), y && ((y = !1), f(N), (N = -1)), (x = !0);
    var O = v;
    try {
      for (
        d(A), h = n(a);
        h !== null && (!(h.expirationTime > A) || (T && !me()));

      ) {
        var X = h.callback;
        if (typeof X == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var oe = X(h.expirationTime <= A);
          (A = e.unstable_now()),
            typeof oe == "function" ? (h.callback = oe) : h === n(a) && r(a),
            d(A);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var wn = !0;
      else {
        var Se = n(s);
        Se !== null && or(w, Se.startTime - A), (wn = !1);
      }
      return wn;
    } finally {
      (h = null), (v = O), (x = !1);
    }
  }
  var R = !1,
    z = null,
    N = -1,
    G = 5,
    B = -1;
  function me() {
    return !(e.unstable_now() - B < G);
  }
  function lt() {
    if (z !== null) {
      var T = e.unstable_now();
      B = T;
      var A = !0;
      try {
        A = z(!0, T);
      } finally {
        A ? Be() : ((R = !1), (z = null));
      }
    } else R = !1;
  }
  var Be;
  if (typeof c == "function")
    Be = function () {
      c(lt);
    };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(),
      it = ot.port2;
    (ot.port1.onmessage = lt),
      (Be = function () {
        it.postMessage(null);
      });
  } else
    Be = function () {
      m(lt, 0);
    };
  function Zt(T) {
    (z = T), R || ((R = !0), Be());
  }
  function or(T, A) {
    N = m(function () {
      T(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || x || ((k = !0), Zt(E));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = v;
      }
      var O = v;
      v = A;
      try {
        return T();
      } finally {
        v = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = v;
      v = T;
      try {
        return A();
      } finally {
        v = O;
      }
    }),
    (e.unstable_scheduleCallback = function (T, A, O) {
      var X = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? X + O : X))
          : (O = X),
        T)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = O + oe),
        (T = {
          id: p++,
          callback: A,
          priorityLevel: T,
          startTime: O,
          expirationTime: oe,
          sortIndex: -1,
        }),
        O > X
          ? ((T.sortIndex = O),
            t(s, T),
            n(a) === null &&
              T === n(s) &&
              (y ? (f(N), (N = -1)) : (y = !0), or(w, O - X)))
          : ((T.sortIndex = oe), t(a, T), k || x || ((k = !0), Zt(E))),
        T
      );
    }),
    (e.unstable_shouldYield = me),
    (e.unstable_wrapCallback = function (T) {
      var A = v;
      return function () {
        var O = v;
        v = A;
        try {
          return T.apply(this, arguments);
        } finally {
          v = O;
        }
      };
    });
})(nc);
tc.exports = nc;
var rp = tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc = L,
  Ie = rp;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lc = new Set(),
  Ur = {};
function vn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) lc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yi = Object.prototype.hasOwnProperty,
  lp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wa = {},
  Sa = {};
function op(e) {
  return yi.call(Sa, e)
    ? !0
    : yi.call(wa, e)
    ? !1
    : lp.test(e)
    ? (Sa[e] = !0)
    : ((wa[e] = !0), !1);
}
function ip(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function up(e, t, n, r) {
  if (t === null || typeof t > "u" || ip(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function Le(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vu, gu);
    we[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vu, gu);
    we[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vu, gu);
  we[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var l = we.hasOwnProperty(t) ? we[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (up(t, n, l, r) && (n = null),
    r || l === null
      ? op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pl = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  wu = Symbol.for("react.strict_mode"),
  wi = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  ic = Symbol.for("react.context"),
  Su = Symbol.for("react.forward_ref"),
  Si = Symbol.for("react.suspense"),
  xi = Symbol.for("react.suspense_list"),
  xu = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  uc = Symbol.for("react.offscreen"),
  xa = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ho;
function kr(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || "";
    }
  return (
    `
` +
    Ho +
    e
  );
}
var Wo = !1;
function Vo(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
  var n = Error.prepareStackTrace;
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function ap(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vo(e.type, !1)), e;
    case 11:
      return (e = Vo(e.type.render, !1)), e;
    case 1:
      return (e = Vo(e.type, !0)), e;
    default:
      return "";
  }
}
function ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case Rn:
      return "Portal";
    case wi:
      return "Profiler";
    case wu:
      return "StrictMode";
    case Si:
      return "Suspense";
    case xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ic:
        return (e.displayName || "Context") + ".Consumer";
      case oc:
        return (e._context.displayName || "Context") + ".Provider";
      case Su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xu:
        return (
          (t = e.displayName || null), t !== null ? t : ki(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return ki(e(t));
        } catch {}
    }
  return null;
}
function sp(e) {
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
      return ki(t);
    case 8:
      return t === wu ? "StrictMode" : "Mode";
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
function Kt(e) {
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
function ac(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cp(e) {
  var t = ac(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hl(e) {
  e._valueTracker || (e._valueTracker = cp(e));
}
function sc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ac(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Bl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ka(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cc(e, t) {
  (t = t.checked), t != null && yu(e, "checked", t, !1);
}
function _i(e, t) {
  cc(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ci(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ci(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ea(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ci(e, t, n) {
  (t !== "number" || Bl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function fc(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ca(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ml,
  pc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ml = ml || document.createElement("div"),
          ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ml.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
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
  fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function (e) {
  fp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]);
  });
});
function hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function mc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = hc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var dp = re(
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
  }
);
function Ni(e, t) {
  if (t) {
    if (dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Li(e, t) {
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
var zi = null;
function ku(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ti = null,
  Hn = null,
  Wn = null;
function Pa(e) {
  if ((e = ol(e))) {
    if (typeof Ti != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = wo(t)), Ti(e.stateNode, e.type, t));
  }
}
function vc(e) {
  Hn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Hn = e);
}
function gc() {
  if (Hn) {
    var e = Hn,
      t = Wn;
    if (((Wn = Hn = null), Pa(e), t)) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function yc(e, t) {
  return e(t);
}
function wc() {}
var Qo = !1;
function Sc(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return yc(e, t, n);
  } finally {
    (Qo = !1), (Hn !== null || Wn !== null) && (wc(), gc());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wo(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Di = !1;
if (_t)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    Di = !1;
  }
function pp(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Rr = !1,
  Hl = null,
  Wl = !1,
  Mi = null,
  hp = {
    onError: function (e) {
      (Rr = !0), (Hl = e);
    },
  };
function mp(e, t, n, r, l, o, i, u, a) {
  (Rr = !1), (Hl = null), pp.apply(hp, arguments);
}
function vp(e, t, n, r, l, o, i, u, a) {
  if ((mp.apply(this, arguments), Rr)) {
    if (Rr) {
      var s = Hl;
      (Rr = !1), (Hl = null);
    } else throw Error(C(198));
    Wl || ((Wl = !0), (Mi = s));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xc(e) {
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
function Ra(e) {
  if (gn(e) !== e) throw Error(C(188));
}
function gp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ra(l), e;
        if (o === r) return Ra(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function kc(e) {
  return (e = gp(e)), e !== null ? Ec(e) : null;
}
function Ec(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ec(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _c = Ie.unstable_scheduleCallback,
  Na = Ie.unstable_cancelCallback,
  yp = Ie.unstable_shouldYield,
  wp = Ie.unstable_requestPaint,
  ie = Ie.unstable_now,
  Sp = Ie.unstable_getCurrentPriorityLevel,
  Eu = Ie.unstable_ImmediatePriority,
  Cc = Ie.unstable_UserBlockingPriority,
  Vl = Ie.unstable_NormalPriority,
  xp = Ie.unstable_LowPriority,
  Pc = Ie.unstable_IdlePriority,
  mo = null,
  ft = null;
function kp(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Cp,
  Ep = Math.log,
  _p = Math.LN2;
function Cp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ep(e) / _p) | 0)) | 0;
}
var vl = 64,
  gl = 4194304;
function _r(e) {
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
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = _r(u)) : ((o &= i), o !== 0 && (r = _r(o)));
  } else (i = n & ~l), i !== 0 ? (r = _r(i)) : o !== 0 && (r = _r(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Pp(e, t) {
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
function Rp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - tt(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Pp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ji(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Rc() {
  var e = vl;
  return (vl <<= 1), !(vl & 4194240) && (vl = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - tt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function _u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function Nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lc,
  Cu,
  zc,
  Tc,
  Dc,
  Oi = !1,
  yl = [],
  Ut = null,
  It = null,
  At = null,
  $r = new Map(),
  Br = new Map(),
  Mt = [],
  Lp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function La(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function hr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ol(t)), t !== null && Cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function zp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ut = hr(Ut, e, t, n, r, l)), !0;
    case "dragenter":
      return (It = hr(It, e, t, n, r, l)), !0;
    case "mouseover":
      return (At = hr(At, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return $r.set(o, hr($r.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Br.set(o, hr(Br.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Mc(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xc(n)), t !== null)) {
          (e.blockedOn = t),
            Dc(e.priority, function () {
              zc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zi = r), n.target.dispatchEvent(r), (zi = null);
    } else return (t = ol(n)), t !== null && Cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Tl(e) && n.delete(t);
}
function Tp() {
  (Oi = !1),
    Ut !== null && Tl(Ut) && (Ut = null),
    It !== null && Tl(It) && (It = null),
    At !== null && Tl(At) && (At = null),
    $r.forEach(za),
    Br.forEach(za);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oi ||
      ((Oi = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Tp)));
}
function Hr(e) {
  function t(l) {
    return mr(l, e);
  }
  if (0 < yl.length) {
    mr(yl[0], e);
    for (var n = 1; n < yl.length; n++) {
      var r = yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && mr(Ut, e),
      It !== null && mr(It, e),
      At !== null && mr(At, e),
      $r.forEach(t),
      Br.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    Mc(n), n.blockedOn === null && Mt.shift();
}
var Vn = Lt.ReactCurrentBatchConfig,
  Kl = !0;
function Dp(e, t, n, r) {
  var l = Y,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (Y = 1), Pu(e, t, n, r);
  } finally {
    (Y = l), (Vn.transition = o);
  }
}
function Mp(e, t, n, r) {
  var l = Y,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (Y = 4), Pu(e, t, n, r);
  } finally {
    (Y = l), (Vn.transition = o);
  }
}
function Pu(e, t, n, r) {
  if (Kl) {
    var l = Fi(e, t, n, r);
    if (l === null) ni(e, t, r, Yl, n), La(e, r);
    else if (zp(l, e, t, n, r)) r.stopPropagation();
    else if ((La(e, r), t & 4 && -1 < Lp.indexOf(e))) {
      for (; l !== null; ) {
        var o = ol(l);
        if (
          (o !== null && Lc(o),
          (o = Fi(e, t, n, r)),
          o === null && ni(e, t, r, Yl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var Yl = null;
function Fi(e, t, n, r) {
  if (((Yl = null), (e = ku(r)), (e = rn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yl = e), null;
}
function jc(e) {
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
      switch (Sp()) {
        case Eu:
          return 1;
        case Cc:
          return 4;
        case Vl:
        case xp:
          return 16;
        case Pc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  Ru = null,
  Dl = null;
function Oc() {
  if (Dl) return Dl;
  var e,
    t = Ru,
    n = t.length,
    r,
    l = "value" in Ot ? Ot.value : Ot.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Dl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ml(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wl() {
  return !0;
}
function Ta() {
  return !1;
}
function $e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wl
        : Ta),
      (this.isPropagationStopped = Ta),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wl));
      },
      persist: function () {},
      isPersistent: wl,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nu = $e(nr),
  ll = re({}, nr, { view: 0, detail: 0 }),
  jp = $e(ll),
  Yo,
  Go,
  vr,
  vo = re({}, ll, {
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
    getModifierState: Lu,
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
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((Yo = e.screenX - vr.screenX), (Go = e.screenY - vr.screenY))
              : (Go = Yo = 0),
            (vr = e)),
          Yo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Go;
    },
  }),
  Da = $e(vo),
  Op = re({}, vo, { dataTransfer: 0 }),
  Fp = $e(Op),
  Up = re({}, ll, { relatedTarget: 0 }),
  Xo = $e(Up),
  Ip = re({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = $e(Ip),
  $p = re({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bp = $e($p),
  Hp = re({}, nr, { data: 0 }),
  Ma = $e(Hp),
  Wp = {
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
  Vp = {
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
  Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qp[e]) ? !!t[e] : !1;
}
function Lu() {
  return Kp;
}
var Yp = re({}, ll, {
    key: function (e) {
      if (e.key) {
        var t = Wp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vp[e.keyCode] || "Unidentified"
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
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ml(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gp = $e(Yp),
  Xp = re({}, vo, {
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
  ja = $e(Xp),
  Jp = re({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  Zp = $e(Jp),
  qp = re({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = $e(qp),
  eh = re({}, vo, {
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
  th = $e(eh),
  nh = [9, 13, 27, 32],
  zu = _t && "CompositionEvent" in window,
  Nr = null;
_t && "documentMode" in document && (Nr = document.documentMode);
var rh = _t && "TextEvent" in window && !Nr,
  Fc = _t && (!zu || (Nr && 8 < Nr && 11 >= Nr)),
  Oa = String.fromCharCode(32),
  Fa = !1;
function Uc(e, t) {
  switch (e) {
    case "keyup":
      return nh.indexOf(t.keyCode) !== -1;
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
function Ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function lh(e, t) {
  switch (e) {
    case "compositionend":
      return Ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fa = !0), Oa);
    case "textInput":
      return (e = t.data), e === Oa && Fa ? null : e;
    default:
      return null;
  }
}
function oh(e, t) {
  if (Ln)
    return e === "compositionend" || (!zu && Uc(e, t))
      ? ((e = Oc()), (Dl = Ru = Ot = null), (Ln = !1), e)
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
      return Fc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ih = {
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
function Ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ih[e.type] : t === "textarea";
}
function Ac(e, t, n, r) {
  vc(r),
    (t = Gl(t, "onChange")),
    0 < t.length &&
      ((n = new Nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  Wr = null;
function uh(e) {
  Jc(e, 0);
}
function go(e) {
  var t = Dn(e);
  if (sc(t)) return e;
}
function ah(e, t) {
  if (e === "change") return t;
}
var $c = !1;
if (_t) {
  var Jo;
  if (_t) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var Ia = document.createElement("div");
      Ia.setAttribute("oninput", "return;"),
        (Zo = typeof Ia.oninput == "function");
    }
    Jo = Zo;
  } else Jo = !1;
  $c = Jo && (!document.documentMode || 9 < document.documentMode);
}
function Aa() {
  Lr && (Lr.detachEvent("onpropertychange", Bc), (Wr = Lr = null));
}
function Bc(e) {
  if (e.propertyName === "value" && go(Wr)) {
    var t = [];
    Ac(t, Wr, e, ku(e)), Sc(uh, t);
  }
}
function sh(e, t, n) {
  e === "focusin"
    ? (Aa(), (Lr = t), (Wr = n), Lr.attachEvent("onpropertychange", Bc))
    : e === "focusout" && Aa();
}
function ch(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return go(Wr);
}
function fh(e, t) {
  if (e === "click") return go(t);
}
function dh(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function ph(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : ph;
function Vr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yi.call(t, l) || !rt(e[l], t[l])) return !1;
  }
  return !0;
}
function $a(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ba(e, t) {
  var n = $a(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $a(n);
  }
}
function Hc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wc() {
  for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bl(e.document);
  }
  return t;
}
function Tu(e) {
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
function hh(e) {
  var t = Wc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ba(n, o));
        var i = Ba(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mh = _t && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Ui = null,
  zr = null,
  Ii = !1;
function Ha(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii ||
    zn == null ||
    zn !== Bl(r) ||
    ((r = zn),
    "selectionStart" in r && Tu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zr && Vr(zr, r)) ||
      ((zr = r),
      (r = Gl(Ui, "onSelect")),
      0 < r.length &&
        ((t = new Nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Sl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: Sl("Animation", "AnimationEnd"),
    animationiteration: Sl("Animation", "AnimationIteration"),
    animationstart: Sl("Animation", "AnimationStart"),
    transitionend: Sl("Transition", "TransitionEnd"),
  },
  qo = {},
  Vc = {};
_t &&
  ((Vc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function yo(e) {
  if (qo[e]) return qo[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vc) return (qo[e] = t[n]);
  return e;
}
var Qc = yo("animationend"),
  Kc = yo("animationiteration"),
  Yc = yo("animationstart"),
  Gc = yo("transitionend"),
  Xc = new Map(),
  Wa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  Xc.set(e, t), vn(t, [e]);
}
for (var bo = 0; bo < Wa.length; bo++) {
  var ei = Wa[bo],
    vh = ei.toLowerCase(),
    gh = ei[0].toUpperCase() + ei.slice(1);
  Gt(vh, "on" + gh);
}
Gt(Qc, "onAnimationEnd");
Gt(Kc, "onAnimationIteration");
Gt(Yc, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Gc, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function Va(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vp(r, t, void 0, e), (e.currentTarget = null);
}
function Jc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Va(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Va(l, u, s), (o = a);
        }
    }
  }
  if (Wl) throw ((e = Mi), (Wl = !1), (Mi = null), e);
}
function q(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zc(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), Zc(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[xl]) {
    (e[xl] = !0),
      lc.forEach(function (n) {
        n !== "selectionchange" && (yh.has(n) || ti(n, !1, e), ti(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || ((t[xl] = !0), ti("selectionchange", !1, t));
  }
}
function Zc(e, t, n, r) {
  switch (jc(t)) {
    case 1:
      var l = Dp;
      break;
    case 4:
      l = Mp;
      break;
    default:
      l = Pu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = rn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Sc(function () {
    var s = o,
      p = ku(n),
      h = [];
    e: {
      var v = Xc.get(e);
      if (v !== void 0) {
        var x = Nu,
          k = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Gp;
            break;
          case "focusin":
            (k = "focus"), (x = Xo);
            break;
          case "focusout":
            (k = "blur"), (x = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            x = Xo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Fp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Zp;
            break;
          case Qc:
          case Kc:
          case Yc:
            x = Ap;
            break;
          case Gc:
            x = bp;
            break;
          case "scroll":
            x = jp;
            break;
          case "wheel":
            x = th;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Bp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ja;
        }
        var y = (t & 4) !== 0,
          m = !y && e === "scroll",
          f = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var c = s, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (
            (d.tag === 5 &&
              w !== null &&
              ((d = w),
              f !== null && ((w = Ar(c, f)), w != null && y.push(Kr(c, w, d)))),
            m)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((v = new x(v, k, null, n, p)), h.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          v &&
            n !== zi &&
            (k = n.relatedTarget || n.fromElement) &&
            (rn(k) || k[Ct]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            p.window === p
              ? p
              : (v = p.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          x
            ? ((k = n.relatedTarget || n.toElement),
              (x = s),
              (k = k ? rn(k) : null),
              k !== null &&
                ((m = gn(k)), k !== m || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((x = null), (k = s)),
          x !== k)
        ) {
          if (
            ((y = Da),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ja),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (m = x == null ? v : Dn(x)),
            (d = k == null ? v : Dn(k)),
            (v = new y(w, c + "leave", x, n, p)),
            (v.target = m),
            (v.relatedTarget = d),
            (w = null),
            rn(p) === s &&
              ((y = new y(f, c + "enter", k, n, p)),
              (y.target = d),
              (y.relatedTarget = m),
              (w = y)),
            (m = w),
            x && k)
          )
            t: {
              for (y = x, f = k, c = 0, d = y; d; d = xn(d)) c++;
              for (d = 0, w = f; w; w = xn(w)) d++;
              for (; 0 < c - d; ) (y = xn(y)), c--;
              for (; 0 < d - c; ) (f = xn(f)), d--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = xn(y)), (f = xn(f));
              }
              y = null;
            }
          else y = null;
          x !== null && Qa(h, v, x, y, !1),
            k !== null && m !== null && Qa(h, m, k, y, !0);
        }
      }
      e: {
        if (
          ((v = s ? Dn(s) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === "select" || (x === "input" && v.type === "file"))
        )
          var E = ah;
        else if (Ua(v))
          if ($c) E = dh;
          else {
            E = ch;
            var R = sh;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = fh);
        if (E && (E = E(e, s))) {
          Ac(h, E, n, p);
          break e;
        }
        R && R(e, v, s),
          e === "focusout" &&
            (R = v._wrapperState) &&
            R.controlled &&
            v.type === "number" &&
            Ci(v, "number", v.value);
      }
      switch (((R = s ? Dn(s) : window), e)) {
        case "focusin":
          (Ua(R) || R.contentEditable === "true") &&
            ((zn = R), (Ui = s), (zr = null));
          break;
        case "focusout":
          zr = Ui = zn = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ii = !1), Ha(h, n, p);
          break;
        case "selectionchange":
          if (mh) break;
        case "keydown":
        case "keyup":
          Ha(h, n, p);
      }
      var z;
      if (zu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ln
          ? Uc(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Fc &&
          n.locale !== "ko" &&
          (Ln || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Ln && (z = Oc())
            : ((Ot = p),
              (Ru = "value" in Ot ? Ot.value : Ot.textContent),
              (Ln = !0))),
        (R = Gl(s, N)),
        0 < R.length &&
          ((N = new Ma(N, e, null, n, p)),
          h.push({ event: N, listeners: R }),
          z ? (N.data = z) : ((z = Ic(n)), z !== null && (N.data = z)))),
        (z = rh ? lh(e, n) : oh(e, n)) &&
          ((s = Gl(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Ma("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: s }),
            (p.data = z)));
    }
    Jc(h, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Ar(e, n)),
      o != null && r.unshift(Kr(e, o, l)),
      (o = Ar(e, t)),
      o != null && r.push(Kr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Ar(n, o)), a != null && i.unshift(Kr(n, a, u)))
        : l || ((a = Ar(n, o)), a != null && i.push(Kr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var wh = /\r\n?/g,
  Sh = /\u0000|\uFFFD/g;
function Ka(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wh,
      `
`
    )
    .replace(Sh, "");
}
function kl(e, t, n) {
  if (((t = Ka(t)), Ka(e) !== t && n)) throw Error(C(425));
}
function Xl() {}
var Ai = null,
  $i = null;
function Bi(e, t) {
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
var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
  xh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ya = typeof Promise == "function" ? Promise : void 0,
  kh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ya < "u"
      ? function (e) {
          return Ya.resolve(null).then(e).catch(Eh);
        }
      : Hi;
function Eh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ri(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hr(t);
}
function $t(e) {
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
function Ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  ct = "__reactFiber$" + rr,
  Yr = "__reactProps$" + rr,
  Ct = "__reactContainer$" + rr,
  Wi = "__reactEvents$" + rr,
  _h = "__reactListeners$" + rr,
  Ch = "__reactHandles$" + rr;
function rn(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ga(e); e !== null; ) {
          if ((n = e[ct])) return n;
          e = Ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ol(e) {
  return (
    (e = e[ct] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function wo(e) {
  return e[Yr] || null;
}
var Vi = [],
  Mn = -1;
function Xt(e) {
  return { current: e };
}
function b(e) {
  0 > Mn || ((e.current = Vi[Mn]), (Vi[Mn] = null), Mn--);
}
function Z(e, t) {
  Mn++, (Vi[Mn] = e.current), (e.current = t);
}
var Yt = {},
  Ce = Xt(Yt),
  De = Xt(!1),
  cn = Yt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Jl() {
  b(De), b(Ce);
}
function Xa(e, t, n) {
  if (Ce.current !== Yt) throw Error(C(168));
  Z(Ce, t), Z(De, n);
}
function qc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, sp(e) || "Unknown", l));
  return re({}, n, r);
}
function Zl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (cn = Ce.current),
    Z(Ce, e),
    Z(De, De.current),
    !0
  );
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = qc(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(De),
      b(Ce),
      Z(Ce, e))
    : b(De),
    Z(De, n);
}
var yt = null,
  So = !1,
  li = !1;
function bc(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function Ph(e) {
  (So = !0), bc(e);
}
function Jt() {
  if (!li && yt !== null) {
    li = !0;
    var e = 0,
      t = Y;
    try {
      var n = yt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yt = null), (So = !1);
    } catch (l) {
      throw (yt !== null && (yt = yt.slice(e + 1)), _c(Eu, Jt), l);
    } finally {
      (Y = t), (li = !1);
    }
  }
  return null;
}
var jn = [],
  On = 0,
  ql = null,
  bl = 0,
  He = [],
  We = 0,
  fn = null,
  wt = 1,
  St = "";
function tn(e, t) {
  (jn[On++] = bl), (jn[On++] = ql), (ql = e), (bl = t);
}
function ef(e, t, n) {
  (He[We++] = wt), (He[We++] = St), (He[We++] = fn), (fn = e);
  var r = wt;
  e = St;
  var l = 32 - tt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - tt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (wt = (1 << (32 - tt(t) + l)) | (n << l) | r),
      (St = o + e);
  } else (wt = (1 << o) | (n << l) | r), (St = e);
}
function Du(e) {
  e.return !== null && (tn(e, 1), ef(e, 1, 0));
}
function Mu(e) {
  for (; e === ql; )
    (ql = jn[--On]), (jn[On] = null), (bl = jn[--On]), (jn[On] = null);
  for (; e === fn; )
    (fn = He[--We]),
      (He[We] = null),
      (St = He[--We]),
      (He[We] = null),
      (wt = He[--We]),
      (He[We] = null);
}
var Ue = null,
  Fe = null,
  ee = !1,
  et = null;
function tf(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Fe = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ki(e) {
  if (ee) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Qi(e)) throw Error(C(418));
        t = $t(n.nextSibling);
        var r = Ue;
        t && Za(e, t)
          ? tf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e));
      }
    } else {
      if (Qi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e);
    }
  }
}
function qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function El(e) {
  if (e !== Ue) return !1;
  if (!ee) return qa(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bi(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Qi(e)) throw (nf(), Error(C(418)));
    for (; t; ) tf(e, t), (t = $t(t.nextSibling));
  }
  if ((qa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ue ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function nf() {
  for (var e = Fe; e; ) e = $t(e.nextSibling);
}
function Jn() {
  (Fe = Ue = null), (ee = !1);
}
function ju(e) {
  et === null ? (et = [e]) : et.push(e);
}
var Rh = Lt.ReactCurrentBatchConfig;
function qe(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var eo = Xt(null),
  to = null,
  Fn = null,
  Ou = null;
function Fu() {
  Ou = Fn = to = null;
}
function Uu(e) {
  var t = eo.current;
  b(eo), (e._currentValue = t);
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  (to = e),
    (Ou = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (Ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (to === null) throw Error(C(308));
      (Fn = e), (to.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var ln = null;
function Iu(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function rf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Iu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lf(e, t) {
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
function kt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Iu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function jl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
function ba(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function no(e, t, n, r) {
  var l = e.updateQueue;
  Dt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (p = s = a = null), (u = o);
    do {
      var v = u.lane,
        x = u.eventTime;
      if ((r & v) === v) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            y = u;
          switch (((v = t), (x = n), y.tag)) {
            case 1:
              if (((k = y.payload), typeof k == "function")) {
                h = k.call(x, h, v);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = y.payload),
                (v = typeof k == "function" ? k.call(x, h, v) : k),
                v == null)
              )
                break e;
              h = re({}, h, v);
              break e;
            case 2:
              Dt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = x), (a = h)) : (p = p.next = x),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (pn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function es(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var of = new rc.Component().refs;
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      l = Wt(e),
      o = kt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, l)),
      t !== null && (nt(t, e, l, r), jl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      l = Wt(e),
      o = kt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Bt(e, o, l)),
      t !== null && (nt(t, e, l, r), jl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Wt(e),
      l = kt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Bt(e, l, r)),
      t !== null && (nt(t, e, r, n), jl(t, e, r));
  },
};
function ts(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vr(n, r) || !Vr(l, o)
      : !0
  );
}
function uf(e, t, n) {
  var r = !1,
    l = Yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ke(o))
      : ((l = Me(t) ? cn : Ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Xn(e, l) : Yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xo.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = of), Au(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ke(o))
    : ((o = Me(t) ? cn : Ce.current), (l.context = Xn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Gi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xo.enqueueReplaceState(l, l.state, null),
      no(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === of && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function _l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rs(e) {
  var t = e._init;
  return t(e._payload);
}
function af(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Vt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6
      ? ((c = fi(d, f.mode, w)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function a(f, c, d, w) {
    var E = d.type;
    return E === Nn
      ? p(f, c, d.props.children, w, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Tt &&
            rs(E) === c.type))
      ? ((w = l(c, d.props)), (w.ref = gr(f, c, d)), (w.return = f), w)
      : ((w = $l(d.type, d.key, d.props, null, f.mode, w)),
        (w.ref = gr(f, c, d)),
        (w.return = f),
        w);
  }
  function s(f, c, d, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = di(d, f.mode, w)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, w, E) {
    return c === null || c.tag !== 7
      ? ((c = sn(d, f.mode, w, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = fi("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pl:
          return (
            (d = $l(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = gr(f, null, c)),
            (d.return = f),
            d
          );
        case Rn:
          return (c = di(c, f.mode, d)), (c.return = f), c;
        case Tt:
          var w = c._init;
          return h(f, w(c._payload), d);
      }
      if (Er(c) || dr(c))
        return (c = sn(c, f.mode, d, null)), (c.return = f), c;
      _l(f, c);
    }
    return null;
  }
  function v(f, c, d, w) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pl:
          return d.key === E ? a(f, c, d, w) : null;
        case Rn:
          return d.key === E ? s(f, c, d, w) : null;
        case Tt:
          return (E = d._init), v(f, c, E(d._payload), w);
      }
      if (Er(d) || dr(d)) return E !== null ? null : p(f, c, d, w, null);
      _l(f, d);
    }
    return null;
  }
  function x(f, c, d, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(d) || null), u(c, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case pl:
          return (f = f.get(w.key === null ? d : w.key) || null), a(c, f, w, E);
        case Rn:
          return (f = f.get(w.key === null ? d : w.key) || null), s(c, f, w, E);
        case Tt:
          var R = w._init;
          return x(f, c, d, R(w._payload), E);
      }
      if (Er(w) || dr(w)) return (f = f.get(d) || null), p(c, f, w, E, null);
      _l(c, w);
    }
    return null;
  }
  function k(f, c, d, w) {
    for (
      var E = null, R = null, z = c, N = (c = 0), G = null;
      z !== null && N < d.length;
      N++
    ) {
      z.index > N ? ((G = z), (z = null)) : (G = z.sibling);
      var B = v(f, z, d[N], w);
      if (B === null) {
        z === null && (z = G);
        break;
      }
      e && z && B.alternate === null && t(f, z),
        (c = o(B, c, N)),
        R === null ? (E = B) : (R.sibling = B),
        (R = B),
        (z = G);
    }
    if (N === d.length) return n(f, z), ee && tn(f, N), E;
    if (z === null) {
      for (; N < d.length; N++)
        (z = h(f, d[N], w)),
          z !== null &&
            ((c = o(z, c, N)), R === null ? (E = z) : (R.sibling = z), (R = z));
      return ee && tn(f, N), E;
    }
    for (z = r(f, z); N < d.length; N++)
      (G = x(z, f, N, d[N], w)),
        G !== null &&
          (e && G.alternate !== null && z.delete(G.key === null ? N : G.key),
          (c = o(G, c, N)),
          R === null ? (E = G) : (R.sibling = G),
          (R = G));
    return (
      e &&
        z.forEach(function (me) {
          return t(f, me);
        }),
      ee && tn(f, N),
      E
    );
  }
  function y(f, c, d, w) {
    var E = dr(d);
    if (typeof E != "function") throw Error(C(150));
    if (((d = E.call(d)), d == null)) throw Error(C(151));
    for (
      var R = (E = null), z = c, N = (c = 0), G = null, B = d.next();
      z !== null && !B.done;
      N++, B = d.next()
    ) {
      z.index > N ? ((G = z), (z = null)) : (G = z.sibling);
      var me = v(f, z, B.value, w);
      if (me === null) {
        z === null && (z = G);
        break;
      }
      e && z && me.alternate === null && t(f, z),
        (c = o(me, c, N)),
        R === null ? (E = me) : (R.sibling = me),
        (R = me),
        (z = G);
    }
    if (B.done) return n(f, z), ee && tn(f, N), E;
    if (z === null) {
      for (; !B.done; N++, B = d.next())
        (B = h(f, B.value, w)),
          B !== null &&
            ((c = o(B, c, N)), R === null ? (E = B) : (R.sibling = B), (R = B));
      return ee && tn(f, N), E;
    }
    for (z = r(f, z); !B.done; N++, B = d.next())
      (B = x(z, f, N, B.value, w)),
        B !== null &&
          (e && B.alternate !== null && z.delete(B.key === null ? N : B.key),
          (c = o(B, c, N)),
          R === null ? (E = B) : (R.sibling = B),
          (R = B));
    return (
      e &&
        z.forEach(function (lt) {
          return t(f, lt);
        }),
      ee && tn(f, N),
      E
    );
  }
  function m(f, c, d, w) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Nn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case pl:
          e: {
            for (var E = d.key, R = c; R !== null; ) {
              if (R.key === E) {
                if (((E = d.type), E === Nn)) {
                  if (R.tag === 7) {
                    n(f, R.sibling),
                      (c = l(R, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Tt &&
                    rs(E) === R.type)
                ) {
                  n(f, R.sibling),
                    (c = l(R, d.props)),
                    (c.ref = gr(f, R, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, R);
                break;
              } else t(f, R);
              R = R.sibling;
            }
            d.type === Nn
              ? ((c = sn(d.props.children, f.mode, w, d.key)),
                (c.return = f),
                (f = c))
              : ((w = $l(d.type, d.key, d.props, null, f.mode, w)),
                (w.ref = gr(f, c, d)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case Rn:
          e: {
            for (R = d.key; c !== null; ) {
              if (c.key === R)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = di(d, f.mode, w)), (c.return = f), (f = c);
          }
          return i(f);
        case Tt:
          return (R = d._init), m(f, c, R(d._payload), w);
      }
      if (Er(d)) return k(f, c, d, w);
      if (dr(d)) return y(f, c, d, w);
      _l(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = fi(d, f.mode, w)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return m;
}
var Zn = af(!0),
  sf = af(!1),
  il = {},
  dt = Xt(il),
  Gr = Xt(il),
  Xr = Xt(il);
function on(e) {
  if (e === il) throw Error(C(174));
  return e;
}
function $u(e, t) {
  switch ((Z(Xr, t), Z(Gr, e), Z(dt, il), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ri(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ri(t, e));
  }
  b(dt), Z(dt, t);
}
function qn() {
  b(dt), b(Gr), b(Xr);
}
function cf(e) {
  on(Xr.current);
  var t = on(dt.current),
    n = Ri(t, e.type);
  t !== n && (Z(Gr, e), Z(dt, n));
}
function Bu(e) {
  Gr.current === e && (b(dt), b(Gr));
}
var te = Xt(0);
function ro(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
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
var oi = [];
function Hu() {
  for (var e = 0; e < oi.length; e++)
    oi[e]._workInProgressVersionPrimary = null;
  oi.length = 0;
}
var Ol = Lt.ReactCurrentDispatcher,
  ii = Lt.ReactCurrentBatchConfig,
  dn = 0,
  ne = null,
  ce = null,
  pe = null,
  lo = !1,
  Tr = !1,
  Jr = 0,
  Nh = 0;
function ke() {
  throw Error(C(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Vu(e, t, n, r, l, o) {
  if (
    ((dn = o),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? Dh : Mh),
    (e = n(r, l)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (Jr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (pe = ce = null),
        (t.updateQueue = null),
        (Ol.current = jh),
        (e = n(r, l));
    } while (Tr);
  }
  if (
    ((Ol.current = oo),
    (t = ce !== null && ce.next !== null),
    (dn = 0),
    (pe = ce = ne = null),
    (lo = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Qu() {
  var e = Jr !== 0;
  return (Jr = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function Ye() {
  if (ce === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = pe === null ? ne.memoizedState : pe.next;
  if (t !== null) (pe = t), (ce = e);
  else {
    if (e === null) throw Error(C(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ce,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var p = s.lane;
      if ((dn & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (ne.lanes |= p),
          (pn |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      rt(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ne.lanes |= o), (pn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ai(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    rt(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ff() {}
function df(e, t) {
  var n = ne,
    r = Ye(),
    l = t(),
    o = !rt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Te = !0)),
    (r = r.queue),
    Ku(mf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qr(9, hf.bind(null, n, r, l, t), void 0, null),
      he === null)
    )
      throw Error(C(349));
    dn & 30 || pf(n, t, l);
  }
  return l;
}
function pf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vf(t) && gf(e);
}
function mf(e, t, n) {
  return n(function () {
    vf(t) && gf(e);
  });
}
function vf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function gf(e) {
  var t = Pt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function ls(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Th.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function yf() {
  return Ye().memoizedState;
}
function Fl(e, t, n, r) {
  var l = at();
  (ne.flags |= e),
    (l.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var i = ce.memoizedState;
    if (((o = i.destroy), r !== null && Wu(r, i.deps))) {
      l.memoizedState = qr(t, n, o, r);
      return;
    }
  }
  (ne.flags |= e), (l.memoizedState = qr(1 | t, n, o, r));
}
function os(e, t) {
  return Fl(8390656, 8, e, t);
}
function Ku(e, t) {
  return ko(2048, 8, e, t);
}
function wf(e, t) {
  return ko(4, 2, e, t);
}
function Sf(e, t) {
  return ko(4, 4, e, t);
}
function xf(e, t) {
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
function kf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, xf.bind(null, t, e), n)
  );
}
function Yu() {}
function Ef(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _f(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cf(e, t, n) {
  return dn & 21
    ? (rt(n, t) || ((n = Rc()), (ne.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function Lh(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ii.transition;
  ii.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (ii.transition = r);
  }
}
function Pf() {
  return Ye().memoizedState;
}
function zh(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rf(e))
  )
    Nf(t, n);
  else if (((n = rf(e, t, n, r)), n !== null)) {
    var l = Re();
    nt(n, e, r, l), Lf(n, t, r);
  }
}
function Th(e, t, n) {
  var r = Wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rf(e)) Nf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Iu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = rf(e, t, l, r)),
      n !== null && ((l = Re()), nt(n, e, r, l), Lf(n, t, r));
  }
}
function Rf(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function Nf(e, t) {
  Tr = lo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
var oo = {
    readContext: Ke,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Dh = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: os,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fl(4194308, 4, xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zh.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ls,
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = ls(!1),
        t = e[0];
      return (e = Lh.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        l = at();
      if (ee) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(C(349));
        dn & 30 || pf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        os(mf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        qr(9, hf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = he.identifierPrefix;
      if (ee) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mh = {
    readContext: Ke,
    useCallback: Ef,
    useContext: Ke,
    useEffect: Ku,
    useImperativeHandle: kf,
    useInsertionEffect: wf,
    useLayoutEffect: Sf,
    useMemo: _f,
    useReducer: ui,
    useRef: yf,
    useState: function () {
      return ui(Zr);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = Ye();
      return Cf(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(Zr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: ff,
    useSyncExternalStore: df,
    useId: Pf,
    unstable_isNewReconciler: !1,
  },
  jh = {
    readContext: Ke,
    useCallback: Ef,
    useContext: Ke,
    useEffect: Ku,
    useImperativeHandle: kf,
    useInsertionEffect: wf,
    useLayoutEffect: Sf,
    useMemo: _f,
    useReducer: ai,
    useRef: yf,
    useState: function () {
      return ai(Zr);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = Ye();
      return ce === null ? (t.memoizedState = e) : Cf(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(Zr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: ff,
    useSyncExternalStore: df,
    useId: Pf,
    unstable_isNewReconciler: !1,
  };
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ap(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Oh = typeof WeakMap == "function" ? WeakMap : Map;
function zf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      uo || ((uo = !0), (iu = r)), Ji(e, t);
    }),
    n
  );
}
function Tf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ji(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ji(e, t),
          typeof r != "function" &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function is(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Oh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Xh.bind(null, e, t, n)), t.then(e, e));
}
function us(e) {
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
function as(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fh = Lt.ReactCurrentOwner,
  Te = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? sf(t, null, n, r) : Zn(t, e.child, n, r);
}
function ss(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Qn(t, l),
    (r = Vu(e, t, n, r, o, l)),
    (n = Qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Rt(e, t, l))
      : (ee && n && Du(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
  );
}
function cs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ta(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Df(e, t, o, r, l))
      : ((e = $l(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vr), n(i, r) && e.ref === t.ref)
    )
      return Rt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Vt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Df(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vr(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), Rt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function Mf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(In, Oe),
        (Oe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(In, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(In, Oe),
        (Oe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(In, Oe),
      (Oe |= r);
  return Pe(e, t, l, n), t.child;
}
function jf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zi(e, t, n, r, l) {
  var o = Me(n) ? cn : Ce.current;
  return (
    (o = Xn(t, o)),
    Qn(t, l),
    (n = Vu(e, t, n, r, o, l)),
    (r = Qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Rt(e, t, l))
      : (ee && r && Du(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
  );
}
function fs(e, t, n, r, l) {
  if (Me(n)) {
    var o = !0;
    Zl(t);
  } else o = !1;
  if ((Qn(t, l), t.stateNode === null))
    Ul(e, t), uf(t, n, r), Xi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ke(s))
      : ((s = Me(n) ? cn : Ce.current), (s = Xn(t, s)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ns(t, i, r, s)),
      (Dt = !1);
    var v = t.memoizedState;
    (i.state = v),
      no(t, r, i, l),
      (a = t.memoizedState),
      u !== r || v !== a || De.current || Dt
        ? (typeof p == "function" && (Gi(t, n, p, r), (a = t.memoizedState)),
          (u = Dt || ts(t, n, u, r, v, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      lf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : qe(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (v = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = Me(n) ? cn : Ce.current), (a = Xn(t, a)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || v !== a) && ns(t, i, r, a)),
      (Dt = !1),
      (v = t.memoizedState),
      (i.state = v),
      no(t, r, i, l);
    var k = t.memoizedState;
    u !== h || v !== k || De.current || Dt
      ? (typeof x == "function" && (Gi(t, n, x, r), (k = t.memoizedState)),
        (s = Dt || ts(t, n, s, r, v, k, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qi(e, t, n, r, o, l);
}
function qi(e, t, n, r, l, o) {
  jf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ja(t, n, !1), Rt(e, t, o);
  (r = t.stateNode), (Fh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zn(t, e.child, null, o)), (t.child = Zn(t, null, u, o)))
      : Pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ja(t, n, !0),
    t.child
  );
}
function Of(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xa(e, t.context, !1),
    $u(e, t.containerInfo);
}
function ds(e, t, n, r, l) {
  return Jn(), ju(l), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var bi = { dehydrated: null, treeContext: null, retryLane: 0 };
function eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ff(e, t, n) {
  var r = t.pendingProps,
    l = te.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Z(te, l & 1),
    e === null)
  )
    return (
      Ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Co(i, r, 0, null)),
              (e = sn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = eu(n)),
              (t.memoizedState = bi),
              e)
            : Gu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Uh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Vt(u, o)) : ((o = sn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? eu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Vt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (
    (t = Co({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cl(e, t, n, r) {
  return (
    r !== null && ju(r),
    Zn(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = si(Error(C(422)))), Cl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Co({ mode: "visible", children: r.children }, l, 0, null)),
        (o = sn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, i),
        (t.child.memoizedState = eu(i)),
        (t.memoizedState = bi),
        o);
  if (!(t.mode & 1)) return Cl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(C(419))), (r = si(o, r, void 0)), Cl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Te || u)) {
    if (((r = he), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Pt(e, l), nt(r, e, l, -1));
    }
    return ea(), (r = si(Error(C(421)))), Cl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = $t(l.nextSibling)),
      (Ue = t),
      (ee = !0),
      (et = null),
      e !== null &&
        ((He[We++] = wt),
        (He[We++] = St),
        (He[We++] = fn),
        (wt = e.id),
        (St = e.overflow),
        (fn = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ps(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yi(e.return, t, n);
}
function ci(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ps(e, n, t);
        else if (e.tag === 19) ps(e, n, t);
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
    r &= 1;
  }
  if ((Z(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ro(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ci(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ro(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ci(t, !0, n, null, o);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ul(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Of(t), Jn();
      break;
    case 5:
      cf(t);
      break;
    case 1:
      Me(t.type) && Zl(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Z(eo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ff(e, t, n)
          : (Z(te, te.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Z(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mf(e, t, n);
  }
  return Rt(e, t, n);
}
var If, tu, Af, $f;
If = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tu = function () {};
Af = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), on(dt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ei(e, l)), (r = Ei(e, r)), (o = []);
        break;
      case "select":
        (l = re({}, l, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Pi(e, l)), (r = Pi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xl);
    }
    Ni(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ur.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && q("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
$f = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ah(e, t, n) {
  var r = t.pendingProps;
  switch ((Mu(t), t.tag)) {
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
      return Ee(t), null;
    case 1:
      return Me(t.type) && Jl(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        b(De),
        b(Ce),
        Hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (El(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (su(et), (et = null)))),
        tu(e, t),
        Ee(t),
        null
      );
    case 5:
      Bu(t);
      var l = on(Xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Af(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Ee(t), null;
        }
        if (((e = on(dt.current)), El(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ct] = t), (r[Yr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cr.length; l++) q(Cr[l], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              ka(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              _a(r, o), q("invalid", r);
          }
          Ni(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ur.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              hl(r), Ea(r, o, !0);
              break;
            case "textarea":
              hl(r), Ca(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ct] = t),
            (e[Yr] = r),
            If(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Li(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++) q(Cr[l], e);
                l = r;
                break;
              case "source":
                q("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (l = r);
                break;
              case "details":
                q("toggle", e), (l = r);
                break;
              case "input":
                ka(e, r), (l = Ei(e, r)), q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = re({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                _a(e, r), (l = Pi(e, r)), q("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? mc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && pc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ir(e, a)
                    : typeof a == "number" && Ir(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ur.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && q("scroll", e)
                      : a != null && yu(e, o, a, i));
              }
            switch (n) {
              case "input":
                hl(e), Ea(e, r, !1);
                break;
              case "textarea":
                hl(e), Ca(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) $f(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = on(Xr.current)), on(dt.current), El(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ct] = t),
            (o = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                kl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  kl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ct] = t),
            (t.stateNode = r);
      }
      return Ee(t), null;
    case 13:
      if (
        (b(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128))
          nf(), Jn(), (t.flags |= 98560), (o = !1);
        else if (((o = El(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[ct] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ee(t), (o = !1);
        } else et !== null && (su(et), (et = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? fe === 0 && (fe = 3) : ea())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        qn(), tu(e, t), e === null && Qr(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return Uu(t.type._context), Ee(t), null;
    case 17:
      return Me(t.type) && Jl(), Ee(t), null;
    case 19:
      if ((b(te), (o = t.memoizedState), o === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) yr(o, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ro(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > er &&
            ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ro(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ee)
            )
              return Ee(t), null;
          } else
            2 * ie() - o.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = te.current),
          Z(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        bu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function $h(e, t) {
  switch ((Mu(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Jl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        b(De),
        b(Ce),
        Hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bu(t), null;
    case 13:
      if ((b(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(te), null;
    case 4:
      return qn(), null;
    case 10:
      return Uu(t.type._context), null;
    case 22:
    case 23:
      return bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pl = !1,
  _e = !1,
  Bh = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function nu(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var hs = !1;
function Hh(e, t) {
  if (((Ai = Kl), (e = Wc()), Tu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (v = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++s === l && (u = i),
                v === o && ++p === r && (a = i),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = x;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, Kl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var y = k.memoizedProps,
                    m = k.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : qe(t.type, y),
                      m
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          le(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (k = hs), (hs = !1), k;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && nu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ru(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ct], delete t[Yr], delete t[Wi], delete t[_h], delete t[Ch])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ms(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hf(e.return)) return null;
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
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
var ge = null,
  be = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) Wf(e, t, n), (n = n.sibling);
}
function Wf(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Un(n, t);
    case 6:
      var r = ge,
        l = be;
      (ge = null),
        zt(e, t, n),
        (ge = r),
        (be = l),
        ge !== null &&
          (be
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (be
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? ri(e.parentNode, n)
              : e.nodeType === 1 && ri(e, n),
            Hr(e))
          : ri(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (l = be),
        (ge = n.stateNode.containerInfo),
        (be = !0),
        zt(e, t, n),
        (ge = r),
        (be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && nu(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          le(n, t, u);
        }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), zt(e, t, n), (_e = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bh()),
      t.forEach(function (r) {
        var l = Zh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ge = u.stateNode), (be = !1);
              break e;
            case 3:
              (ge = u.stateNode.containerInfo), (be = !0);
              break e;
            case 4:
              (ge = u.stateNode.containerInfo), (be = !0);
              break e;
          }
          u = u.return;
        }
        if (ge === null) throw Error(C(160));
        Wf(o, i, l), (ge = null), (be = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        le(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vf(t, e), (t = t.sibling);
}
function Vf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), ut(e), r & 4)) {
        try {
          Dr(3, e, e.return), Eo(3, e);
        } catch (y) {
          le(e, e.return, y);
        }
        try {
          Dr(5, e, e.return);
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 1:
      Ze(t, e), ut(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        ut(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ir(l, "");
        } catch (y) {
          le(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && cc(l, o),
              Li(u, i);
            var s = Li(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                h = a[i + 1];
              p === "style"
                ? mc(l, h)
                : p === "dangerouslySetInnerHTML"
                ? pc(l, h)
                : p === "children"
                ? Ir(l, h)
                : yu(l, p, h, s);
            }
            switch (u) {
              case "input":
                _i(l, o);
                break;
              case "textarea":
                fc(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Bn(l, !!o.multiple, x, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(l, !!o.multiple, o.defaultValue, !0)
                      : Bn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yr] = o;
          } catch (y) {
            le(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hr(t.containerInfo);
        } catch (y) {
          le(e, e.return, y);
        }
      break;
    case 4:
      Ze(t, e), ut(e);
      break;
    case 13:
      Ze(t, e),
        ut(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Zu = ie())),
        r & 4 && vs(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (s = _e) || p), Ze(t, e), (_e = s)) : Ze(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (D = e, p = e.child; p !== null; ) {
            for (h = D = p; D !== null; ) {
              switch (((v = D), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, v, v.return);
                  break;
                case 1:
                  Un(v, v.return);
                  var k = v.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (y) {
                      le(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Un(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ys(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (D = x)) : ys(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = hc("display", i)));
              } catch (y) {
                le(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (y) {
                le(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), ut(e), r & 4 && vs(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ir(l, ""), (r.flags &= -33));
          var o = ms(e);
          ou(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ms(e);
          lu(e, u, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wh(e, t, n) {
  (D = e), Qf(e);
}
function Qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || _e;
        u = Pl;
        var s = _e;
        if (((Pl = i), (_e = a) && !s))
          for (D = l; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ws(l)
                : a !== null
                ? ((a.return = i), (D = a))
                : ws(l);
        for (; o !== null; ) (D = o), Qf(o), (o = o.sibling);
        (D = l), (Pl = u), (_e = s);
      }
      gs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : gs(e);
  }
}
function gs(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && es(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                es(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Hr(h);
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
              throw Error(C(163));
          }
        _e || (t.flags & 512 && ru(t));
      } catch (v) {
        le(t, t.return, v);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function ys(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function ws(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Eo(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, l, a);
            }
          }
          var o = t.return;
          try {
            ru(t);
          } catch (a) {
            le(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ru(t);
          } catch (a) {
            le(t, i, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (D = u);
      break;
    }
    D = t.return;
  }
}
var Vh = Math.ceil,
  io = Lt.ReactCurrentDispatcher,
  Xu = Lt.ReactCurrentOwner,
  Qe = Lt.ReactCurrentBatchConfig,
  Q = 0,
  he = null,
  ae = null,
  ye = 0,
  Oe = 0,
  In = Xt(0),
  fe = 0,
  br = null,
  pn = 0,
  _o = 0,
  Ju = 0,
  Mr = null,
  ze = null,
  Zu = 0,
  er = 1 / 0,
  vt = null,
  uo = !1,
  iu = null,
  Ht = null,
  Rl = !1,
  Ft = null,
  ao = 0,
  jr = 0,
  uu = null,
  Il = -1,
  Al = 0;
function Re() {
  return Q & 6 ? ie() : Il !== -1 ? Il : (Il = ie());
}
function Wt(e) {
  return e.mode & 1
    ? Q & 2 && ye !== 0
      ? ye & -ye
      : Rh.transition !== null
      ? (Al === 0 && (Al = Rc()), Al)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jc(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), (uu = null), Error(C(185)));
  rl(e, n, r),
    (!(Q & 2) || e !== he) &&
      (e === he && (!(Q & 2) && (_o |= n), fe === 4 && jt(e, ye)),
      je(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((er = ie() + 500), So && Jt()));
}
function je(e, t) {
  var n = e.callbackNode;
  Rp(e, t);
  var r = Ql(e, e === he ? ye : 0);
  if (r === 0)
    n !== null && Na(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Na(n), t === 1))
      e.tag === 0 ? Ph(Ss.bind(null, e)) : bc(Ss.bind(null, e)),
        kh(function () {
          !(Q & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Nc(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = Cc;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = Pc;
          break;
        default:
          n = Vl;
      }
      n = bf(n, Kf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Kf(e, t) {
  if (((Il = -1), (Al = 0), Q & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === he ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = so(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = Gf();
    (he !== e || ye !== t) && ((vt = null), (er = ie() + 500), an(e, t));
    do
      try {
        Yh();
        break;
      } catch (u) {
        Yf(e, u);
      }
    while (1);
    Fu(),
      (io.current = o),
      (Q = l),
      ae !== null ? (t = 0) : ((he = null), (ye = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ji(e)), l !== 0 && ((r = l), (t = au(e, l)))), t === 1)
    )
      throw ((n = br), an(e, 0), jt(e, r), je(e, ie()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qh(l) &&
          ((t = so(e, r)),
          t === 2 && ((o = ji(e)), o !== 0 && ((r = o), (t = au(e, o)))),
          t === 1))
      )
        throw ((n = br), an(e, 0), jt(e, r), je(e, ie()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          nn(e, ze, vt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Zu + 500 - ie()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Hi(nn.bind(null, e, ze, vt), t);
            break;
          }
          nn(e, ze, vt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - tt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hi(nn.bind(null, e, ze, vt), r);
            break;
          }
          nn(e, ze, vt);
          break;
        case 5:
          nn(e, ze, vt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return je(e, ie()), e.callbackNode === n ? Kf.bind(null, e) : null;
}
function au(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = so(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && su(t)),
    e
  );
}
function su(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Qh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function jt(e, t) {
  for (
    t &= ~Ju,
      t &= ~_o,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ss(e) {
  if (Q & 6) throw Error(C(327));
  Kn();
  var t = Ql(e, 0);
  if (!(t & 1)) return je(e, ie()), null;
  var n = so(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && ((t = r), (n = au(e, r)));
  }
  if (n === 1) throw ((n = br), an(e, 0), jt(e, t), je(e, ie()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, ze, vt),
    je(e, ie()),
    null
  );
}
function qu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((er = ie() + 500), So && Jt());
  }
}
function hn(e) {
  Ft !== null && Ft.tag === 0 && !(Q & 6) && Kn();
  var t = Q;
  Q |= 1;
  var n = Qe.transition,
    r = Y;
  try {
    if (((Qe.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (Qe.transition = n), (Q = t), !(Q & 6) && Jt();
  }
}
function bu() {
  (Oe = In.current), b(In);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xh(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jl();
          break;
        case 3:
          qn(), b(De), b(Ce), Hu();
          break;
        case 5:
          Bu(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          b(te);
          break;
        case 19:
          b(te);
          break;
        case 10:
          Uu(r.type._context);
          break;
        case 22:
        case 23:
          bu();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ae = e = Vt(e.current, null)),
    (ye = Oe = t),
    (fe = 0),
    (br = null),
    (Ju = _o = pn = 0),
    (ze = Mr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Yf(e, t) {
  do {
    var n = ae;
    try {
      if ((Fu(), (Ol.current = oo), lo)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        lo = !1;
      }
      if (
        ((dn = 0),
        (pe = ce = ne = null),
        (Tr = !1),
        (Jr = 0),
        (Xu.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (br = t), (ae = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ye),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = p.alternate;
            v
              ? ((p.updateQueue = v.updateQueue),
                (p.memoizedState = v.memoizedState),
                (p.lanes = v.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = us(i);
          if (x !== null) {
            (x.flags &= -257),
              as(x, i, u, o, t),
              x.mode & 1 && is(o, s, t),
              (t = x),
              (a = s);
            var k = t.updateQueue;
            if (k === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              is(o, s, t), ea();
              break e;
            }
            a = Error(C(426));
          }
        } else if (ee && u.mode & 1) {
          var m = us(i);
          if (m !== null) {
            !(m.flags & 65536) && (m.flags |= 256),
              as(m, i, u, o, t),
              ju(bn(a, u));
            break e;
          }
        }
        (o = a = bn(a, u)),
          fe !== 4 && (fe = 2),
          Mr === null ? (Mr = [o]) : Mr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = zf(o, a, t);
              ba(o, f);
              break e;
            case 1:
              u = a;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Ht === null || !Ht.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Tf(o, u, t);
                ba(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Jf(n);
    } catch (E) {
      (t = E), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Gf() {
  var e = io.current;
  return (io.current = oo), e === null ? oo : e;
}
function ea() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || (!(pn & 268435455) && !(_o & 268435455)) || jt(he, ye);
}
function so(e, t) {
  var n = Q;
  Q |= 2;
  var r = Gf();
  (he !== e || ye !== t) && ((vt = null), an(e, t));
  do
    try {
      Kh();
      break;
    } catch (l) {
      Yf(e, l);
    }
  while (1);
  if ((Fu(), (Q = n), (io.current = r), ae !== null)) throw Error(C(261));
  return (he = null), (ye = 0), fe;
}
function Kh() {
  for (; ae !== null; ) Xf(ae);
}
function Yh() {
  for (; ae !== null && !yp(); ) Xf(ae);
}
function Xf(e) {
  var t = qf(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jf(e) : (ae = t),
    (Xu.current = null);
}
function Jf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $h(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ae = null);
        return;
      }
    } else if (((n = Ah(n, t, Oe)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function nn(e, t, n) {
  var r = Y,
    l = Qe.transition;
  try {
    (Qe.transition = null), (Y = 1), Gh(e, t, n, r);
  } finally {
    (Qe.transition = l), (Y = r);
  }
  return null;
}
function Gh(e, t, n, r) {
  do Kn();
  while (Ft !== null);
  if (Q & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Np(e, o),
    e === he && ((ae = he = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rl ||
      ((Rl = !0),
      bf(Vl, function () {
        return Kn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Qe.transition), (Qe.transition = null);
    var i = Y;
    Y = 1;
    var u = Q;
    (Q |= 4),
      (Xu.current = null),
      Hh(e, n),
      Vf(n, e),
      hh($i),
      (Kl = !!Ai),
      ($i = Ai = null),
      (e.current = n),
      Wh(n),
      wp(),
      (Q = u),
      (Y = i),
      (Qe.transition = o);
  } else e.current = n;
  if (
    (Rl && ((Rl = !1), (Ft = e), (ao = l)),
    (o = e.pendingLanes),
    o === 0 && (Ht = null),
    kp(n.stateNode),
    je(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (uo) throw ((uo = !1), (e = iu), (iu = null), e);
  return (
    ao & 1 && e.tag !== 0 && Kn(),
    (o = e.pendingLanes),
    o & 1 ? (e === uu ? jr++ : ((jr = 0), (uu = e))) : (jr = 0),
    Jt(),
    null
  );
}
function Kn() {
  if (Ft !== null) {
    var e = Nc(ao),
      t = Qe.transition,
      n = Y;
    try {
      if (((Qe.transition = null), (Y = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (ao = 0), Q & 6)) throw Error(C(331));
        var l = Q;
        for (Q |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (D = s; D !== null; ) {
                  var p = D;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (D = h);
                  else
                    for (; D !== null; ) {
                      p = D;
                      var v = p.sibling,
                        x = p.return;
                      if ((Bf(p), p === s)) {
                        D = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (D = v);
                        break;
                      }
                      D = x;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var y = k.child;
                if (y !== null) {
                  k.child = null;
                  do {
                    var m = y.sibling;
                    (y.sibling = null), (y = m);
                  } while (y !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (D = f);
                break e;
              }
              D = o.return;
            }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          i = D;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (D = d);
          else
            e: for (i = c; D !== null; ) {
              if (((u = D), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(9, u);
                  }
                } catch (E) {
                  le(u, u.return, E);
                }
              if (u === i) {
                D = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (D = w);
                break e;
              }
              D = u.return;
            }
        }
        if (
          ((Q = l), Jt(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (Qe.transition = t);
    }
  }
  return !1;
}
function xs(e, t, n) {
  (t = bn(n, t)),
    (t = zf(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Re()),
    e !== null && (rl(e, 1, t), je(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) xs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ht === null || !Ht.has(r)))
        ) {
          (e = bn(n, e)),
            (e = Tf(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Re()),
            t !== null && (rl(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ye & n) === n &&
      (fe === 4 || (fe === 3 && (ye & 130023424) === ye && 500 > ie() - Zu)
        ? an(e, 0)
        : (Ju |= n)),
    je(e, t);
}
function Zf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gl), (gl <<= 1), !(gl & 130023424) && (gl = 4194304))
      : (t = 1));
  var n = Re();
  (e = Pt(e, t)), e !== null && (rl(e, t, n), je(e, n));
}
function Jh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zf(e, n);
}
function Zh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Zf(e, n);
}
var qf;
qf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Ih(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), ee && t.flags & 1048576 && ef(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ul(e, t), (e = t.pendingProps);
      var l = Xn(t, Ce.current);
      Qn(t, n), (l = Vu(null, t, r, e, l, n));
      var o = Qu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), Zl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Au(t),
            (l.updater = xo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xi(t, r, e, n),
            (t = qi(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && Du(t), Pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ul(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = bh(r)),
          (e = qe(r, e)),
          l)
        ) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = fs(null, t, r, e, n);
            break e;
          case 11:
            t = ss(null, t, r, e, n);
            break e;
          case 14:
            t = cs(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : qe(r, l)),
        Zi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : qe(r, l)),
        fs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Of(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          lf(e, t),
          no(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = bn(Error(C(423)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = bn(Error(C(424)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else
            for (
              Fe = $t(t.stateNode.containerInfo.firstChild),
                Ue = t,
                ee = !0,
                et = null,
                n = sf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = Rt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cf(t),
        e === null && Ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Bi(r, l) ? (i = null) : o !== null && Bi(r, o) && (t.flags |= 32),
        jf(e, t),
        Pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ki(t), null;
    case 13:
      return Ff(e, t, n);
    case 4:
      return (
        $u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : qe(r, l)),
        ss(e, t, r, l, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          Z(eo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (rt(o.value, i)) {
            if (o.children === l.children && !De.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = kt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Yi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Yi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (l = Ke(l)),
        (r = r(l)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = qe(r, t.pendingProps)),
        (l = qe(r.type, l)),
        cs(e, t, r, l, n)
      );
    case 15:
      return Df(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : qe(r, l)),
        Ul(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Zl(t)) : (e = !1),
        Qn(t, n),
        uf(t, r, l),
        Xi(t, r, l, n),
        qi(null, t, r, !0, e, n)
      );
    case 19:
      return Uf(e, t, n);
    case 22:
      return Mf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function bf(e, t) {
  return _c(e, t);
}
function qh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new qh(e, t, n, r);
}
function ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bh(e) {
  if (typeof e == "function") return ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Su)) return 11;
    if (e === xu) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $l(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ta(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Nn:
        return sn(n.children, l, o, t);
      case wu:
        (i = 8), (l |= 8);
        break;
      case wi:
        return (
          (e = Ve(12, n, t, l | 2)), (e.elementType = wi), (e.lanes = o), e
        );
      case Si:
        return (e = Ve(13, n, t, l)), (e.elementType = Si), (e.lanes = o), e;
      case xi:
        return (e = Ve(19, n, t, l)), (e.elementType = xi), (e.lanes = o), e;
      case uc:
        return Co(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case oc:
              i = 10;
              break e;
            case ic:
              i = 9;
              break e;
            case Su:
              i = 11;
              break e;
            case xu:
              i = 14;
              break e;
            case Tt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function sn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Co(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = uc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function di(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function em(e, t, n, r, l) {
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
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function na(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new em(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ve(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(o),
    e
  );
}
function tm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ed(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return qc(e, n, t);
  }
  return t;
}
function td(e, t, n, r, l, o, i, u, a) {
  return (
    (e = na(n, r, !0, e, l, o, i, u, a)),
    (e.context = ed(null)),
    (n = e.current),
    (r = Re()),
    (l = Wt(n)),
    (o = kt(r, l)),
    (o.callback = t ?? null),
    Bt(n, o, l),
    (e.current.lanes = l),
    rl(e, l, r),
    je(e, r),
    e
  );
}
function Po(e, t, n, r) {
  var l = t.current,
    o = Re(),
    i = Wt(l);
  return (
    (n = ed(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(l, t, i)),
    e !== null && (nt(e, l, i, o), jl(e, l, i)),
    i
  );
}
function co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ks(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  ks(e, t), (e = e.alternate) && ks(e, t);
}
function nm() {
  return null;
}
var nd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function la(e) {
  this._internalRoot = e;
}
Ro.prototype.render = la.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Po(e, t, null, null);
};
Ro.prototype.unmount = la.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      Po(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function Ro(e) {
  this._internalRoot = e;
}
Ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && Mc(e);
  }
};
function oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function No(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Es() {}
function rm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = co(i);
        o.call(s);
      };
    }
    var i = td(t, r, e, 0, null, !1, !1, "", Es);
    return (
      (e._reactRootContainer = i),
      (e[Ct] = i.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = co(a);
      u.call(s);
    };
  }
  var a = na(e, 0, !1, null, null, !1, !1, "", Es);
  return (
    (e._reactRootContainer = a),
    (e[Ct] = a.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      Po(t, a, n, r);
    }),
    a
  );
}
function Lo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = co(i);
        u.call(a);
      };
    }
    Po(t, i, e, l);
  } else i = rm(n, t, e, l, r);
  return co(i);
}
Lc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (_u(t, n | 1), je(t, ie()), !(Q & 6) && ((er = ie() + 500), Jt()));
      }
      break;
    case 13:
      hn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var l = Re();
          nt(r, e, 1, l);
        }
      }),
        ra(e, 1);
  }
};
Cu = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Re();
      nt(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
zc = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Re();
      nt(n, e, t, r);
    }
    ra(e, t);
  }
};
Tc = function () {
  return Y;
};
Dc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Ti = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_i(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wo(r);
            if (!l) throw Error(C(90));
            sc(r), _i(r, l);
          }
        }
      }
      break;
    case "textarea":
      fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
yc = qu;
wc = hn;
var lm = { usingClientEntryPoint: !1, Events: [ol, Dn, wo, vc, gc, qu] },
  wr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  om = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || nm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber)
    try {
      (mo = Nl.inject(om)), (ft = Nl);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lm;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oa(t)) throw Error(C(200));
  return tm(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!oa(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = nd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = na(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ct] = t.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    new la(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = kc(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return hn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!No(t)) throw Error(C(200));
  return Lo(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!oa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = nd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = td(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ct] = t.current),
    Qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ro(t);
};
Ae.render = function (e, t, n) {
  if (!No(t)) throw Error(C(200));
  return Lo(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!No(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (hn(function () {
        Lo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = qu;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!No(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Lo(e, t, n, !1, r);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function rd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd);
    } catch (e) {
      console.error(e);
    }
}
rd(), (ec.exports = Ae);
var im = ec.exports,
  _s = im;
(gi.createRoot = _s.createRoot), (gi.hydrateRoot = _s.hydrateRoot);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    V.apply(this, arguments)
  );
}
var ue;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ue || (ue = {}));
const Cs = "popstate";
function um(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = "/",
      search: u = "",
      hash: a = "",
    } = pt(l.location.hash.substr(1));
    return el(
      "",
      { pathname: i, search: u, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      u = "";
    if (i && i.getAttribute("href")) {
      let a = l.location.href,
        s = a.indexOf("#");
      u = s === -1 ? a : a.slice(0, s);
    }
    return u + "#" + (typeof o == "string" ? o : Nt(o));
  }
  function r(l, o) {
    mn(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return sm(t, n, r, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function mn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function am() {
  return Math.random().toString(36).substr(2, 8);
}
function Ps(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function el(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    V(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? pt(t) : t,
      { state: n, key: (t && t.key) || r || am() }
    )
  );
}
function Nt(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function pt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function sm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ue.Pop,
    a = null,
    s = p();
  s == null && ((s = 0), i.replaceState(V({}, i.state, { idx: s }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = ue.Pop;
    let m = p(),
      f = m == null ? null : m - s;
    (s = m), a && a({ action: u, location: y.location, delta: f });
  }
  function v(m, f) {
    u = ue.Push;
    let c = el(y.location, m, f);
    n && n(c, m), (s = p() + 1);
    let d = Ps(c, s),
      w = y.createHref(c);
    try {
      i.pushState(d, "", w);
    } catch {
      l.location.assign(w);
    }
    o && a && a({ action: u, location: y.location, delta: 1 });
  }
  function x(m, f) {
    u = ue.Replace;
    let c = el(y.location, m, f);
    n && n(c, m), (s = p());
    let d = Ps(c, s),
      w = y.createHref(c);
    i.replaceState(d, "", w),
      o && a && a({ action: u, location: y.location, delta: 0 });
  }
  function k(m) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof m == "string" ? m : Nt(m);
    return (
      H(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(m) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Cs, h),
        (a = m),
        () => {
          l.removeEventListener(Cs, h), (a = null);
        }
      );
    },
    createHref(m) {
      return t(l, m);
    },
    createURL: k,
    encodeLocation(m) {
      let f = k(m);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: x,
    go(m) {
      return i.go(m);
    },
  };
  return y;
}
var se;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(se || (se = {}));
const cm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function fm(e) {
  return e.index === !0;
}
function ld(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (H(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        H(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        fm(l))
      ) {
        let a = V({}, l, { hasErrorBoundary: t(l), id: u });
        return (r[u] = a), a;
      } else {
        let a = V({}, l, { id: u, hasErrorBoundary: t(l), children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = ld(l.children, t, i, r)), a
        );
      }
    })
  );
}
function An(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? pt(t) : t,
    l = ul(r.pathname || "/", n);
  if (l == null) return null;
  let o = od(e);
  dm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = xm(o[u], _m(l));
  return i;
}
function od(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (H(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Et([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (H(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      od(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: wm(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of id(o.path)) l(o, i, a);
    }),
    t
  );
}
function id(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = id(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function dm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Sm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const pm = /^:\w+$/,
  hm = 3,
  mm = 2,
  vm = 1,
  gm = 10,
  ym = -2,
  Rs = (e) => e === "*";
function wm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Rs) && (r += ym),
    t && (r += mm),
    n
      .filter((l) => !Rs(l))
      .reduce((l, o) => l + (pm.test(o) ? hm : o === "" ? vm : gm), r)
  );
}
function Sm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = km(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: Et([l, p.pathname]),
      pathnameBase: Nm(Et([l, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== "/" && (l = Et([l, p.pathnameBase]));
  }
  return o;
}
function km(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Em(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, h) => {
      if (p === "*") {
        let v = u[h] || "";
        i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      return (s[p] = Cm(u[h] || "", p)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Em(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function _m(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      mn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Cm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      mn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function ul(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Pm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? pt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Rm(n, t)) : t,
    search: Lm(r),
    hash: zm(l),
  };
}
function Rm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zo(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ia(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = pt(e))
    : ((l = V({}, e)),
      H(
        !l.pathname || !l.pathname.includes("?"),
        pi("?", "pathname", "search", l)
      ),
      H(
        !l.pathname || !l.pathname.includes("#"),
        pi("#", "pathname", "hash", l)
      ),
      H(!l.search || !l.search.includes("#"), pi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let v = i.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      l.pathname = v.join("/");
    }
    u = h >= 0 ? t[h] : "/";
  }
  let a = Pm(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const Et = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Nm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Lm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  zm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ua {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function ud(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ad = ["post", "put", "patch", "delete"],
  Tm = new Set(ad),
  Dm = ["get", ...ad],
  Mm = new Set(Dm),
  jm = new Set([301, 302, 303, 307, 308]),
  Om = new Set([307, 308]),
  hi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Fm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Ns = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  sd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cd =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Um = !cd,
  Im = (e) => !!e.hasErrorBoundary;
function Am(e) {
  H(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = e.detectErrorBoundary || Im,
    n = {},
    r = ld(e.routes, t, void 0, n),
    l,
    o = V({ v7_normalizeFormMethod: !1 }, e.future),
    i = null,
    u = new Set(),
    a = null,
    s = null,
    p = null,
    h = e.hydrationData != null,
    v = An(r, e.history.location, e.basename),
    x = null;
  if (v == null) {
    let g = st(404, { pathname: e.history.location.pathname }),
      { matches: S, route: _ } = Os(r);
    (v = S), (x = { [_.id]: g });
  }
  let k =
      !v.some((g) => g.route.lazy) &&
      (!v.some((g) => g.route.loader) || e.hydrationData != null),
    y,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: v,
      initialized: k,
      navigation: hi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || x,
      fetchers: new Map(),
      blockers: new Map(),
    },
    f = ue.Pop,
    c = !1,
    d,
    w = !1,
    E = !1,
    R = [],
    z = [],
    N = new Map(),
    G = 0,
    B = -1,
    me = new Map(),
    lt = new Set(),
    Be = new Map(),
    ot = new Map(),
    it = new Map(),
    Zt = !1;
  function or() {
    return (
      (i = e.history.listen((g) => {
        let { action: S, location: _, delta: M } = g;
        if (Zt) {
          Zt = !1;
          return;
        }
        mn(
          it.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let j = pa({
          currentLocation: m.location,
          nextLocation: _,
          historyAction: S,
        });
        if (j && M != null) {
          (Zt = !0),
            e.history.go(M * -1),
            fl(j, {
              state: "blocked",
              location: _,
              proceed() {
                fl(j, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(M);
              },
              reset() {
                ar(j), O({ blockers: new Map(y.state.blockers) });
              },
            });
          return;
        }
        return Se(S, _);
      })),
      m.initialized || Se(ue.Pop, m.location),
      y
    );
  }
  function T() {
    i && i(),
      u.clear(),
      d && d.abort(),
      m.fetchers.forEach((g, S) => Oo(S)),
      m.blockers.forEach((g, S) => ar(S));
  }
  function A(g) {
    return u.add(g), () => u.delete(g);
  }
  function O(g) {
    (m = V({}, m, g)), u.forEach((S) => S(m));
  }
  function X(g, S) {
    var _, M;
    let j =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        gt(m.navigation.formMethod) &&
        m.navigation.state === "loading" &&
        ((_ = g.state) == null ? void 0 : _._isRedirect) !== !0,
      U;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (U = S.actionData)
        : (U = null)
      : j
      ? (U = m.actionData)
      : (U = null);
    let I = S.loaderData
      ? js(m.loaderData, S.loaderData, S.matches || [], S.errors)
      : m.loaderData;
    for (let [F] of it) ar(F);
    let $ =
      c === !0 ||
      (m.navigation.formMethod != null &&
        gt(m.navigation.formMethod) &&
        ((M = g.state) == null ? void 0 : M._isRedirect) !== !0);
    l && ((r = l), (l = void 0)),
      O(
        V({}, S, {
          actionData: U,
          loaderData: I,
          historyAction: f,
          location: g,
          initialized: !0,
          navigation: hi,
          revalidation: "idle",
          restoreScrollPosition: ha(g, S.matches || m.matches),
          preventScrollReset: $,
          blockers: new Map(m.blockers),
        })
      ),
      w ||
        f === ue.Pop ||
        (f === ue.Push
          ? e.history.push(g, g.state)
          : f === ue.Replace && e.history.replace(g, g.state)),
      (f = ue.Pop),
      (c = !1),
      (w = !1),
      (E = !1),
      (R = []),
      (z = []);
  }
  async function oe(g, S) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let { path: _, submission: M, error: j } = Ls(g, o, S),
      U = m.location,
      I = el(m.location, _, S && S.state);
    I = V({}, I, e.history.encodeLocation(I));
    let $ = S && S.replace != null ? S.replace : void 0,
      F = ue.Push;
    $ === !0
      ? (F = ue.Replace)
      : $ === !1 ||
        (M != null &&
          gt(M.formMethod) &&
          M.formAction === m.location.pathname + m.location.search &&
          (F = ue.Replace));
    let J =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      K = pa({ currentLocation: U, nextLocation: I, historyAction: F });
    if (K) {
      fl(K, {
        state: "blocked",
        location: I,
        proceed() {
          fl(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            oe(g, S);
        },
        reset() {
          ar(K), O({ blockers: new Map(m.blockers) });
        },
      });
      return;
    }
    return await Se(F, I, {
      submission: M,
      pendingError: j,
      preventScrollReset: J,
      replace: S && S.replace,
    });
  }
  function wn() {
    if (
      (Mo(),
      O({ revalidation: "loading" }),
      m.navigation.state !== "submitting")
    ) {
      if (m.navigation.state === "idle") {
        Se(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Se(f || m.historyAction, m.navigation.location, {
        overrideNavigation: m.navigation,
      });
    }
  }
  async function Se(g, S, _) {
    d && d.abort(),
      (d = null),
      (f = g),
      (w = (_ && _.startUninterruptedRevalidation) === !0),
      Ld(m.location, m.matches),
      (c = (_ && _.preventScrollReset) === !0);
    let M = l || r,
      j = _ && _.overrideNavigation,
      U = An(M, S, e.basename);
    if (!U) {
      let de = st(404, { pathname: S.pathname }),
        { matches: ve, route: Xe } = Os(M);
      Fo(), X(S, { matches: ve, loaderData: {}, errors: { [Xe.id]: de } });
      return;
    }
    if (
      Vm(m.location, S) &&
      !(_ && _.submission && gt(_.submission.formMethod))
    ) {
      X(S, { matches: U });
      return;
    }
    d = new AbortController();
    let I = xr(e.history, S, d.signal, _ && _.submission),
      $,
      F;
    if (_ && _.pendingError) F = { [$n(U).route.id]: _.pendingError };
    else if (_ && _.submission && gt(_.submission.formMethod)) {
      let de = await ir(I, S, _.submission, U, { replace: _.replace });
      if (de.shortCircuited) return;
      ($ = de.pendingActionData),
        (F = de.pendingActionError),
        (j = V({ state: "loading", location: S }, _.submission)),
        (I = new Request(I.url, { signal: I.signal }));
    }
    let {
      shortCircuited: J,
      loaderData: K,
      errors: Ge,
    } = await ht(
      I,
      S,
      U,
      j,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      $,
      F
    );
    J ||
      ((d = null),
      X(
        S,
        V({ matches: U }, $ ? { actionData: $ } : {}, {
          loaderData: K,
          errors: Ge,
        })
      ));
  }
  async function ir(g, S, _, M, j) {
    Mo();
    let U = V({ state: "submitting", location: S }, _);
    O({ navigation: U });
    let I,
      $ = cu(M, S);
    if (!$.route.action && !$.route.lazy)
      I = {
        type: se.error,
        error: st(405, {
          method: g.method,
          pathname: S.pathname,
          routeId: $.route.id,
        }),
      };
    else if (
      ((I = await Sr("action", g, $, M, n, t, y.basename)), g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Yn(I)) {
      let F;
      return (
        j && j.replace != null
          ? (F = j.replace)
          : (F = I.location === m.location.pathname + m.location.search),
        await ur(m, I, { submission: _, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Or(I)) {
      let F = $n(M, $.route.id);
      return (
        (j && j.replace) !== !0 && (f = ue.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: I.error } }
      );
    }
    if (un(I)) throw st(400, { type: "defer-action" });
    return { pendingActionData: { [$.route.id]: I.data } };
  }
  async function ht(g, S, _, M, j, U, I, $, F) {
    let J = M;
    J ||
      (J = V(
        {
          state: "loading",
          location: S,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        j
      ));
    let K =
        j || U
          ? j || U
          : J.formMethod && J.formAction && J.formData && J.formEncType
          ? {
              formMethod: J.formMethod,
              formAction: J.formAction,
              formData: J.formData,
              formEncType: J.formEncType,
            }
          : void 0,
      Ge = l || r,
      [de, ve] = zs(e.history, m, _, K, S, E, R, z, Be, Ge, e.basename, $, F);
    if (
      (Fo(
        (xe) =>
          !(_ && _.some((Je) => Je.route.id === xe)) ||
          (de && de.some((Je) => Je.route.id === xe))
      ),
      de.length === 0 && ve.length === 0)
    )
      return (
        X(
          S,
          V(
            { matches: _, loaderData: {}, errors: F || null },
            $ ? { actionData: $ } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    if (!w) {
      ve.forEach((Je) => {
        let bt = m.fetchers.get(Je.key),
          fr = {
            state: "loading",
            data: bt && bt.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        m.fetchers.set(Je.key, fr);
      });
      let xe = $ || m.actionData;
      O(
        V(
          { navigation: J },
          xe
            ? Object.keys(xe).length === 0
              ? { actionData: null }
              : { actionData: xe }
            : {},
          ve.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
        )
      );
    }
    (B = ++G), ve.forEach((xe) => N.set(xe.key, d));
    let {
      results: Xe,
      loaderResults: sr,
      fetcherResults: Uo,
    } = await ca(m.matches, _, de, ve, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    ve.forEach((xe) => N.delete(xe.key));
    let cr = Fs(Xe);
    if (cr) return await ur(m, cr, { replace: I }), { shortCircuited: !0 };
    let { loaderData: Sn, errors: Io } = Ms(m, _, de, sr, F, ve, Uo, ot);
    ot.forEach((xe, Je) => {
      xe.subscribe((bt) => {
        (bt || xe.done) && ot.delete(Je);
      });
    }),
      Pd();
    let Ao = da(B);
    return V(
      { loaderData: Sn, errors: Io },
      Ao || ve.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
    );
  }
  function qt(g) {
    return m.fetchers.get(g) || Fm;
  }
  function Ed(g, S, _, M) {
    if (Um)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    N.has(g) && cl(g);
    let U = An(l || r, _, e.basename);
    if (!U) {
      jo(g, S, st(404, { pathname: _ }));
      return;
    }
    let { path: I, submission: $ } = Ls(_, o, M, !0),
      F = cu(U, I);
    if (((c = (M && M.preventScrollReset) === !0), $ && gt($.formMethod))) {
      _d(g, S, I, F, U, $);
      return;
    }
    Be.set(g, { routeId: S, path: I }), Cd(g, S, I, F, U, $);
  }
  async function _d(g, S, _, M, j, U) {
    if ((Mo(), Be.delete(g), !M.route.action && !M.route.lazy)) {
      let mt = st(405, { method: U.formMethod, pathname: _, routeId: S });
      jo(g, S, mt);
      return;
    }
    let I = m.fetchers.get(g),
      $ = V({ state: "submitting" }, U, {
        data: I && I.data,
        " _hasFetcherDoneAnything ": !0,
      });
    m.fetchers.set(g, $), O({ fetchers: new Map(m.fetchers) });
    let F = new AbortController(),
      J = xr(e.history, _, F.signal, U);
    N.set(g, F);
    let K = await Sr("action", J, M, j, n, t, y.basename);
    if (J.signal.aborted) {
      N.get(g) === F && N.delete(g);
      return;
    }
    if (Yn(K)) {
      N.delete(g), lt.add(g);
      let mt = V({ state: "loading" }, U, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        m.fetchers.set(g, mt),
        O({ fetchers: new Map(m.fetchers) }),
        ur(m, K, { submission: U, isFetchActionRedirect: !0 })
      );
    }
    if (Or(K)) {
      jo(g, S, K.error);
      return;
    }
    if (un(K)) throw st(400, { type: "defer-action" });
    let Ge = m.navigation.location || m.location,
      de = xr(e.history, Ge, F.signal),
      ve = l || r,
      Xe =
        m.navigation.state !== "idle"
          ? An(ve, m.navigation.location, e.basename)
          : m.matches;
    H(Xe, "Didn't find any matches after fetcher action");
    let sr = ++G;
    me.set(g, sr);
    let Uo = V({ state: "loading", data: K.data }, U, {
      " _hasFetcherDoneAnything ": !0,
    });
    m.fetchers.set(g, Uo);
    let [cr, Sn] = zs(
      e.history,
      m,
      Xe,
      U,
      Ge,
      E,
      R,
      z,
      Be,
      ve,
      e.basename,
      { [M.route.id]: K.data },
      void 0
    );
    Sn.filter((mt) => mt.key !== g).forEach((mt) => {
      let $o = mt.key,
        ma = m.fetchers.get($o),
        Md = {
          state: "loading",
          data: ma && ma.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      m.fetchers.set($o, Md), N.set($o, F);
    }),
      O({ fetchers: new Map(m.fetchers) });
    let {
      results: Io,
      loaderResults: Ao,
      fetcherResults: xe,
    } = await ca(m.matches, Xe, cr, Sn, de);
    if (F.signal.aborted) return;
    me.delete(g), N.delete(g), Sn.forEach((mt) => N.delete(mt.key));
    let Je = Fs(Io);
    if (Je) return ur(m, Je);
    let { loaderData: bt, errors: fr } = Ms(
        m,
        m.matches,
        cr,
        Ao,
        void 0,
        Sn,
        xe,
        ot
      ),
      Td = {
        state: "idle",
        data: K.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    m.fetchers.set(g, Td);
    let Dd = da(sr);
    m.navigation.state === "loading" && sr > B
      ? (H(f, "Expected pending action"),
        d && d.abort(),
        X(m.navigation.location, {
          matches: Xe,
          loaderData: bt,
          errors: fr,
          fetchers: new Map(m.fetchers),
        }))
      : (O(
          V(
            { errors: fr, loaderData: js(m.loaderData, bt, Xe, fr) },
            Dd ? { fetchers: new Map(m.fetchers) } : {}
          )
        ),
        (E = !1));
  }
  async function Cd(g, S, _, M, j, U) {
    let I = m.fetchers.get(g),
      $ = V(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        U,
        { data: I && I.data, " _hasFetcherDoneAnything ": !0 }
      );
    m.fetchers.set(g, $), O({ fetchers: new Map(m.fetchers) });
    let F = new AbortController(),
      J = xr(e.history, _, F.signal);
    N.set(g, F);
    let K = await Sr("loader", J, M, j, n, t, y.basename);
    if (
      (un(K) && (K = (await hd(K, J.signal, !0)) || K),
      N.get(g) === F && N.delete(g),
      J.signal.aborted)
    )
      return;
    if (Yn(K)) {
      await ur(m, K);
      return;
    }
    if (Or(K)) {
      let de = $n(m.matches, S);
      m.fetchers.delete(g),
        O({
          fetchers: new Map(m.fetchers),
          errors: { [de.route.id]: K.error },
        });
      return;
    }
    H(!un(K), "Unhandled fetcher deferred data");
    let Ge = {
      state: "idle",
      data: K.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    m.fetchers.set(g, Ge), O({ fetchers: new Map(m.fetchers) });
  }
  async function ur(g, S, _) {
    var M;
    let {
      submission: j,
      replace: U,
      isFetchActionRedirect: I,
    } = _ === void 0 ? {} : _;
    S.revalidate && (E = !0);
    let $ = el(
      g.location,
      S.location,
      V({ _isRedirect: !0 }, I ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (H($, "Expected a location on the redirect navigation"),
      sd.test(S.location) &&
        cd &&
        typeof ((M = window) == null ? void 0 : M.location) < "u")
    ) {
      let ve = e.history.createURL(S.location),
        Xe = ul(ve.pathname, e.basename || "/") == null;
      if (window.location.origin !== ve.origin || Xe) {
        U
          ? window.location.replace(S.location)
          : window.location.assign(S.location);
        return;
      }
    }
    d = null;
    let F = U === !0 ? ue.Replace : ue.Push,
      {
        formMethod: J,
        formAction: K,
        formEncType: Ge,
        formData: de,
      } = g.navigation;
    !j &&
      J &&
      K &&
      de &&
      Ge &&
      (j = { formMethod: J, formAction: K, formEncType: Ge, formData: de }),
      Om.has(S.status) && j && gt(j.formMethod)
        ? await Se(F, $, {
            submission: V({}, j, { formAction: S.location }),
            preventScrollReset: c,
          })
        : I
        ? await Se(F, $, {
            overrideNavigation: {
              state: "loading",
              location: $,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: j,
            preventScrollReset: c,
          })
        : await Se(F, $, {
            overrideNavigation: {
              state: "loading",
              location: $,
              formMethod: j ? j.formMethod : void 0,
              formAction: j ? j.formAction : void 0,
              formEncType: j ? j.formEncType : void 0,
              formData: j ? j.formData : void 0,
            },
            preventScrollReset: c,
          });
  }
  async function ca(g, S, _, M, j) {
    let U = await Promise.all([
        ..._.map((F) => Sr("loader", j, F, S, n, t, y.basename)),
        ...M.map((F) =>
          F.matches && F.match
            ? Sr(
                "loader",
                xr(e.history, F.path, j.signal),
                F.match,
                F.matches,
                n,
                t,
                y.basename
              )
            : { type: se.error, error: st(404, { pathname: F.path }) }
        ),
      ]),
      I = U.slice(0, _.length),
      $ = U.slice(_.length);
    return (
      await Promise.all([
        Us(g, _, I, j.signal, !1, m.loaderData),
        Us(
          g,
          M.map((F) => F.match),
          $,
          j.signal,
          !0
        ),
      ]),
      { results: U, loaderResults: I, fetcherResults: $ }
    );
  }
  function Mo() {
    (E = !0),
      R.push(...Fo()),
      Be.forEach((g, S) => {
        N.has(S) && (z.push(S), cl(S));
      });
  }
  function jo(g, S, _) {
    let M = $n(m.matches, S);
    Oo(g), O({ errors: { [M.route.id]: _ }, fetchers: new Map(m.fetchers) });
  }
  function Oo(g) {
    N.has(g) && cl(g),
      Be.delete(g),
      me.delete(g),
      lt.delete(g),
      m.fetchers.delete(g);
  }
  function cl(g) {
    let S = N.get(g);
    H(S, "Expected fetch controller: " + g), S.abort(), N.delete(g);
  }
  function fa(g) {
    for (let S of g) {
      let M = {
        state: "idle",
        data: qt(S).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      m.fetchers.set(S, M);
    }
  }
  function Pd() {
    let g = [];
    for (let S of lt) {
      let _ = m.fetchers.get(S);
      H(_, "Expected fetcher: " + S),
        _.state === "loading" && (lt.delete(S), g.push(S));
    }
    fa(g);
  }
  function da(g) {
    let S = [];
    for (let [_, M] of me)
      if (M < g) {
        let j = m.fetchers.get(_);
        H(j, "Expected fetcher: " + _),
          j.state === "loading" && (cl(_), me.delete(_), S.push(_));
      }
    return fa(S), S.length > 0;
  }
  function Rd(g, S) {
    let _ = m.blockers.get(g) || Ns;
    return it.get(g) !== S && it.set(g, S), _;
  }
  function ar(g) {
    m.blockers.delete(g), it.delete(g);
  }
  function fl(g, S) {
    let _ = m.blockers.get(g) || Ns;
    H(
      (_.state === "unblocked" && S.state === "blocked") ||
        (_.state === "blocked" && S.state === "blocked") ||
        (_.state === "blocked" && S.state === "proceeding") ||
        (_.state === "blocked" && S.state === "unblocked") ||
        (_.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + S.state
    ),
      m.blockers.set(g, S),
      O({ blockers: new Map(m.blockers) });
  }
  function pa(g) {
    let { currentLocation: S, nextLocation: _, historyAction: M } = g;
    if (it.size === 0) return;
    it.size > 1 && mn(!1, "A router only supports one blocker at a time");
    let j = Array.from(it.entries()),
      [U, I] = j[j.length - 1],
      $ = m.blockers.get(U);
    if (
      !($ && $.state === "proceeding") &&
      I({ currentLocation: S, nextLocation: _, historyAction: M })
    )
      return U;
  }
  function Fo(g) {
    let S = [];
    return (
      ot.forEach((_, M) => {
        (!g || g(M)) && (_.cancel(), S.push(M), ot.delete(M));
      }),
      S
    );
  }
  function Nd(g, S, _) {
    if (
      ((a = g), (p = S), (s = _ || ((M) => M.key)), !h && m.navigation === hi)
    ) {
      h = !0;
      let M = ha(m.location, m.matches);
      M != null && O({ restoreScrollPosition: M });
    }
    return () => {
      (a = null), (p = null), (s = null);
    };
  }
  function Ld(g, S) {
    if (a && s && p) {
      let _ = S.map((j) => Is(j, m.loaderData)),
        M = s(g, _) || g.key;
      a[M] = p();
    }
  }
  function ha(g, S) {
    if (a && s && p) {
      let _ = S.map((U) => Is(U, m.loaderData)),
        M = s(g, _) || g.key,
        j = a[M];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function zd(g) {
    l = g;
  }
  return (
    (y = {
      get basename() {
        return e.basename;
      },
      get state() {
        return m;
      },
      get routes() {
        return r;
      },
      initialize: or,
      subscribe: A,
      enableScrollRestoration: Nd,
      navigate: oe,
      fetch: Ed,
      revalidate: wn,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: qt,
      deleteFetcher: Oo,
      dispose: T,
      getBlocker: Rd,
      deleteBlocker: ar,
      _internalFetchControllers: N,
      _internalActiveDeferreds: ot,
      _internalSetRoutes: zd,
    }),
    y
  );
}
function $m(e) {
  return e != null && "formData" in e;
}
function Ls(e, t, n, r) {
  r === void 0 && (r = !1);
  let l = typeof e == "string" ? e : Nt(e);
  if (!n || !$m(n)) return { path: l };
  if (n.formMethod && !Ym(n.formMethod))
    return { path: l, error: st(405, { method: n.formMethod }) };
  let o;
  if (n.formData) {
    let a = n.formMethod || "get";
    if (
      ((o = {
        formMethod: t.v7_normalizeFormMethod
          ? a.toUpperCase()
          : a.toLowerCase(),
        formAction: pd(l),
        formEncType:
          (n && n.formEncType) || "application/x-www-form-urlencoded",
        formData: n.formData,
      }),
      gt(o.formMethod))
    )
      return { path: l, submission: o };
  }
  let i = pt(l),
    u = dd(n.formData);
  return (
    r && i.search && md(i.search) && u.append("index", ""),
    (i.search = "?" + u),
    { path: Nt(i), submission: o }
  );
}
function Bm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function zs(e, t, n, r, l, o, i, u, a, s, p, h, v) {
  let x = v ? Object.values(v)[0] : h ? Object.values(h)[0] : void 0,
    k = e.createURL(t.location),
    y = e.createURL(l),
    m = o || k.toString() === y.toString() || k.search !== y.search,
    f = v ? Object.keys(v)[0] : void 0,
    d = Bm(n, f).filter((E, R) => {
      if (E.route.lazy) return !0;
      if (E.route.loader == null) return !1;
      if (Hm(t.loaderData, t.matches[R], E) || i.some((G) => G === E.route.id))
        return !0;
      let z = t.matches[R],
        N = E;
      return Ts(
        E,
        V(
          {
            currentUrl: k,
            currentParams: z.params,
            nextUrl: y,
            nextParams: N.params,
          },
          r,
          { actionResult: x, defaultShouldRevalidate: m || fd(z, N) }
        )
      );
    }),
    w = [];
  return (
    a.forEach((E, R) => {
      if (!n.some((B) => B.route.id === E.routeId)) return;
      let z = An(s, E.path, p);
      if (!z) {
        w.push(V({ key: R }, E, { matches: null, match: null }));
        return;
      }
      let N = cu(z, E.path);
      if (u.includes(R)) {
        w.push(V({ key: R, matches: z, match: N }, E));
        return;
      }
      Ts(
        N,
        V(
          {
            currentUrl: k,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: x, defaultShouldRevalidate: m }
        )
      ) && w.push(V({ key: R, matches: z, match: N }, E));
    }),
    [d, w]
  );
}
function Hm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function fd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ts(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Ds(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  H(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== "hasErrorBoundary";
    mn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !cm.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o),
    Object.assign(l, { hasErrorBoundary: t(V({}, l)), lazy: void 0 });
}
async function Sr(e, t, n, r, l, o, i, u, a, s) {
  i === void 0 && (i = "/"), u === void 0 && (u = !1), a === void 0 && (a = !1);
  let p,
    h,
    v,
    x = (m) => {
      let f,
        c = new Promise((d, w) => (f = w));
      return (
        (v = () => f()),
        t.signal.addEventListener("abort", v),
        Promise.race([m({ request: t, params: n.params, context: s }), c])
      );
    };
  try {
    let m = n.route[e];
    if (n.route.lazy)
      if (m) h = (await Promise.all([x(m), Ds(n.route, o, l)]))[0];
      else if ((await Ds(n.route, o, l), (m = n.route[e]), m)) h = await x(m);
      else {
        if (e === "action")
          throw st(405, {
            method: t.method,
            pathname: new URL(t.url).pathname,
            routeId: n.route.id,
          });
        return { type: se.data, data: void 0 };
      }
    else
      H(
        m,
        "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
      ),
        (h = await x(m));
    H(
      h !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (m) {
    (p = se.error), (h = m);
  } finally {
    v && t.signal.removeEventListener("abort", v);
  }
  if (Km(h)) {
    let m = h.status;
    if (jm.has(m)) {
      let d = h.headers.get("Location");
      if (
        (H(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        sd.test(d))
      ) {
        if (!u) {
          let w = new URL(t.url),
            E = d.startsWith("//") ? new URL(w.protocol + d) : new URL(d),
            R = ul(E.pathname, i) != null;
          E.origin === w.origin && R && (d = E.pathname + E.search + E.hash);
        }
      } else {
        let w = r.slice(0, r.indexOf(n) + 1),
          E = zo(w).map((z) => z.pathnameBase),
          R = ia(d, E, new URL(t.url).pathname);
        if ((H(Nt(R), "Unable to resolve redirect location: " + d), i)) {
          let z = R.pathname;
          R.pathname = z === "/" ? i : Et([i, z]);
        }
        d = Nt(R);
      }
      if (u) throw (h.headers.set("Location", d), h);
      return {
        type: se.redirect,
        status: m,
        location: d,
        revalidate: h.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (a) throw { type: p || se.data, response: h };
    let f,
      c = h.headers.get("Content-Type");
    return (
      c && /\bapplication\/json\b/.test(c)
        ? (f = await h.json())
        : (f = await h.text()),
      p === se.error
        ? { type: p, error: new ua(m, h.statusText, f), headers: h.headers }
        : { type: se.data, data: f, statusCode: h.status, headers: h.headers }
    );
  }
  if (p === se.error) return { type: p, error: h };
  if (Qm(h)) {
    var k, y;
    return {
      type: se.deferred,
      deferredData: h,
      statusCode: (k = h.init) == null ? void 0 : k.status,
      headers:
        ((y = h.init) == null ? void 0 : y.headers) &&
        new Headers(h.init.headers),
    };
  }
  return { type: se.data, data: h };
}
function xr(e, t, n, r) {
  let l = e.createURL(pd(t)).toString(),
    o = { signal: n };
  if (r && gt(r.formMethod)) {
    let { formMethod: i, formEncType: u, formData: a } = r;
    (o.method = i.toUpperCase()),
      (o.body = u === "application/x-www-form-urlencoded" ? dd(a) : a);
  }
  return new Request(l, o);
}
function dd(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function Wm(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((p, h) => {
      let v = t[h].route.id;
      if (
        (H(!Yn(p), "Cannot handle redirect results in processLoaderData"),
        Or(p))
      ) {
        let x = $n(e, v),
          k = p.error;
        r && ((k = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[x.route.id] == null && (i[x.route.id] = k),
          (o[v] = void 0),
          a || ((a = !0), (u = ud(p.error) ? p.error.status : 500)),
          p.headers && (s[v] = p.headers);
      } else
        un(p)
          ? (l.set(v, p.deferredData), (o[v] = p.deferredData.data))
          : (o[v] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (u = p.statusCode),
          p.headers && (s[v] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Ms(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = Wm(t, n, r, l, u);
  for (let p = 0; p < o.length; p++) {
    let { key: h, match: v } = o[p];
    H(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let x = i[p];
    if (Or(x)) {
      let k = $n(e.matches, v == null ? void 0 : v.route.id);
      (s && s[k.route.id]) || (s = V({}, s, { [k.route.id]: x.error })),
        e.fetchers.delete(h);
    } else if (Yn(x)) H(!1, "Unhandled fetcher revalidation redirect");
    else if (un(x)) H(!1, "Unhandled fetcher deferred data");
    else {
      let k = {
        state: "idle",
        data: x.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      e.fetchers.set(h, k);
    }
  }
  return { loaderData: a, errors: s };
}
function js(e, t, n, r) {
  let l = V({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function $n(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Os(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function st(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (u = "defer() is not supported in actions"))
      : e === 403
      ? ((i = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ua(e || 500, i, new Error(u), !0)
  );
}
function Fs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Yn(n)) return n;
  }
}
function pd(e) {
  let t = typeof e == "string" ? pt(e) : e;
  return Nt(V({}, t, { hash: "" }));
}
function Vm(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function un(e) {
  return e.type === se.deferred;
}
function Or(e) {
  return e.type === se.error;
}
function Yn(e) {
  return (e && e.type) === se.redirect;
}
function Qm(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Km(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Ym(e) {
  return Mm.has(e.toLowerCase());
}
function gt(e) {
  return Tm.has(e.toLowerCase());
}
async function Us(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((h) => h.route.id === a.route.id),
      p = s != null && !fd(s, a) && (o && o[a.route.id]) !== void 0;
    un(u) &&
      (l || p) &&
      (await hd(u, r, l).then((h) => {
        h && (n[i] = h || n[i]);
      }));
  }
}
async function hd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: se.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: se.error, error: l };
      }
    return { type: se.data, data: e.deferredData.data };
  }
}
function md(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Is(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function cu(e, t) {
  let n = typeof t == "string" ? pt(t).search : t.search;
  if (e[e.length - 1].route.index && md(n || "")) return e[e.length - 1];
  let r = zo(e);
  return r[r.length - 1];
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Xm = typeof Object.is == "function" ? Object.is : Gm,
  { useState: Jm, useEffect: Zm, useLayoutEffect: qm, useDebugValue: bm } = vi;
function ev(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Jm({ inst: { value: r, getSnapshot: t } });
  return (
    qm(() => {
      (l.value = r), (l.getSnapshot = t), mi(l) && o({ inst: l });
    }, [e, r, t]),
    Zm(
      () => (
        mi(l) && o({ inst: l }),
        e(() => {
          mi(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    bm(r),
    r
  );
}
function mi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Xm(n, r);
  } catch {
    return !0;
  }
}
function tv(e, t, n) {
  return t();
}
const nv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  rv = !nv,
  lv = rv ? tv : ev,
  ov = "useSyncExternalStore" in vi ? ((e) => e.useSyncExternalStore)(vi) : lv,
  aa = L.createContext(null),
  To = L.createContext(null),
  lr = L.createContext(null),
  Do = L.createContext(null),
  yn = L.createContext({ outlet: null, matches: [] }),
  vd = L.createContext(null);
function fu() {
  return (
    (fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fu.apply(this, arguments)
  );
}
function iv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  al() || H(!1);
  let { basename: r, navigator: l } = L.useContext(lr),
    { hash: o, pathname: i, search: u } = sa(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Et([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function al() {
  return L.useContext(Do) != null;
}
function sl() {
  return al() || H(!1), L.useContext(Do).location;
}
function uv() {
  al() || H(!1);
  let { basename: e, navigator: t } = L.useContext(lr),
    { matches: n } = L.useContext(yn),
    { pathname: r } = sl(),
    l = JSON.stringify(zo(n).map((u) => u.pathnameBase)),
    o = L.useRef(!1);
  return (
    L.useEffect(() => {
      o.current = !0;
    }),
    L.useCallback(
      function (u, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let s = ia(u, JSON.parse(l), r, a.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : Et([e, s.pathname])),
          (a.replace ? t.replace : t.push)(s, a.state, a);
      },
      [e, t, l, r]
    )
  );
}
const av = L.createContext(null);
function sv(e) {
  let t = L.useContext(yn).outlet;
  return t && L.createElement(av.Provider, { value: e }, t);
}
function sa(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = L.useContext(yn),
    { pathname: l } = sl(),
    o = JSON.stringify(zo(r).map((i) => i.pathnameBase));
  return L.useMemo(() => ia(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function cv(e, t) {
  al() || H(!1);
  let { navigator: n } = L.useContext(lr),
    r = L.useContext(To),
    { matches: l } = L.useContext(yn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = sl(),
    s;
  if (t) {
    var p;
    let y = typeof t == "string" ? pt(t) : t;
    u === "/" || ((p = y.pathname) != null && p.startsWith(u)) || H(!1),
      (s = y);
  } else s = a;
  let h = s.pathname || "/",
    v = u === "/" ? h : h.slice(u.length) || "/",
    x = An(e, { pathname: v }),
    k = hv(
      x &&
        x.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: Et([
              u,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : Et([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && k
    ? L.createElement(
        Do.Provider,
        {
          value: {
            location: fu(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ue.Pop,
          },
        },
        k
      )
    : k;
}
function fv() {
  let e = yv(),
    t = ud(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("h2", null, "Unexpected Application Error!"),
    L.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? L.createElement("pre", { style: l }, n) : null,
    o
  );
}
class dv extends L.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? L.createElement(
          yn.Provider,
          { value: this.props.routeContext },
          L.createElement(vd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function pv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = L.useContext(aa);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    L.createElement(yn.Provider, { value: t }, r)
  );
}
function hv(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || H(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      s = null;
    n &&
      (i.route.ErrorBoundary
        ? (s = L.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (s = i.route.errorElement)
        : (s = L.createElement(fv, null)));
    let p = t.concat(r.slice(0, u + 1)),
      h = () => {
        let v = o;
        return (
          a
            ? (v = s)
            : i.route.Component
            ? (v = L.createElement(i.route.Component, null))
            : i.route.element && (v = i.route.element),
          L.createElement(pv, {
            match: i,
            routeContext: { outlet: o, matches: p },
            children: v,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? L.createElement(dv, {
          location: n.location,
          component: s,
          error: a,
          children: h(),
          routeContext: { outlet: null, matches: p },
        })
      : h();
  }, null);
}
var As;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(As || (As = {}));
var fo;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(fo || (fo = {}));
function mv(e) {
  let t = L.useContext(To);
  return t || H(!1), t;
}
function vv(e) {
  let t = L.useContext(yn);
  return t || H(!1), t;
}
function gv(e) {
  let t = vv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function yv() {
  var e;
  let t = L.useContext(vd),
    n = mv(fo.UseRouteError),
    r = gv(fo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function wv(e) {
  let { fallbackElement: t, router: n } = e,
    r = L.useCallback(() => n.state, [n]),
    l = ov(n.subscribe, r, r),
    o = L.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (a) => n.navigate(a),
        push: (a, s, p) =>
          n.navigate(a, {
            state: s,
            preventScrollReset: p == null ? void 0 : p.preventScrollReset,
          }),
        replace: (a, s, p) =>
          n.navigate(a, {
            replace: !0,
            state: s,
            preventScrollReset: p == null ? void 0 : p.preventScrollReset,
          }),
      }),
      [n]
    ),
    i = n.basename || "/",
    u = L.useMemo(
      () => ({ router: n, navigator: o, static: !1, basename: i }),
      [n, o, i]
    );
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(
      aa.Provider,
      { value: u },
      L.createElement(
        To.Provider,
        { value: l },
        L.createElement(
          xv,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: o,
          },
          n.state.initialized ? L.createElement(kv, null) : t
        )
      )
    ),
    null
  );
}
function Sv(e) {
  return sv(e.context);
}
function Pn(e) {
  H(!1);
}
function xv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ue.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  al() && H(!1);
  let u = t.replace(/^\/*/, "/"),
    a = L.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = pt(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: h = "",
      state: v = null,
      key: x = "default",
    } = r,
    k = L.useMemo(() => {
      let y = ul(s, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: h, state: v, key: x },
            navigationType: l,
          };
    }, [u, s, p, h, v, x, l]);
  return k == null
    ? null
    : L.createElement(
        lr.Provider,
        { value: a },
        L.createElement(Do.Provider, { children: n, value: k })
      );
}
function kv(e) {
  let { children: t, location: n } = e,
    r = L.useContext(aa),
    l = r && !t ? r.router.routes : po(t);
  return cv(l, n);
}
var $s;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})($s || ($s = {}));
new Promise(() => {});
function po(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    L.Children.forEach(e, (r, l) => {
      if (!L.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === L.Fragment) {
        n.push.apply(n, po(r.props.children, o));
        return;
      }
      r.type !== Pn && H(!1), !r.props.index || !r.props.children || H(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = po(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function Ev(e) {
  return !!e.ErrorBoundary || !!e.errorElement;
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
function gd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function _v(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Cv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_v(e);
}
const Pv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Rv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Nv(e, t) {
  return Am({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: um({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Lv(),
    routes: e,
    detectErrorBoundary: Ev,
  }).initialize();
}
function Lv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = tl({}, t, { errors: zv(t.errors) })), t;
}
function zv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ua(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      let o = new Error(l.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = l;
  return n;
}
const Tv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Dv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  yd = L.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
      } = t,
      h = gd(t, Pv),
      { basename: v } = L.useContext(lr),
      x,
      k = !1;
    if (typeof s == "string" && Dv.test(s) && ((x = s), Tv)) {
      let c = new URL(window.location.href),
        d = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s),
        w = ul(d.pathname, v);
      d.origin === c.origin && w != null
        ? (s = w + d.search + d.hash)
        : (k = !0);
    }
    let y = iv(s, { relative: l }),
      m = Mv(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || m(c);
    }
    return L.createElement(
      "a",
      tl({}, h, { href: x || y, onClick: k || o ? r : f, ref: n, target: a })
    );
  }),
  Fr = L.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: a,
        children: s,
      } = t,
      p = gd(t, Rv),
      h = sa(a, { relative: p.relative }),
      v = sl(),
      x = L.useContext(To),
      { navigator: k } = L.useContext(lr),
      y = k.encodeLocation ? k.encodeLocation(h).pathname : h.pathname,
      m = v.pathname,
      f =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (y = y.toLowerCase()));
    let c = m === y || (!i && m.startsWith(y) && m.charAt(y.length) === "/"),
      d =
        f != null &&
        (f === y || (!i && f.startsWith(y) && f.charAt(y.length) === "/")),
      w = c ? r : void 0,
      E;
    typeof o == "function"
      ? (E = o({ isActive: c, isPending: d }))
      : (E = [o, c ? "active" : null, d ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let R = typeof u == "function" ? u({ isActive: c, isPending: d }) : u;
    return L.createElement(
      yd,
      tl({}, p, { "aria-current": w, className: E, ref: n, style: R, to: a }),
      typeof s == "function" ? s({ isActive: c, isPending: d }) : s
    );
  });
var Bs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Bs || (Bs = {}));
var Hs;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Hs || (Hs = {}));
function Mv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = uv(),
    a = sl(),
    s = sa(e, { relative: i });
  return L.useCallback(
    (p) => {
      if (Cv(p, n)) {
        p.preventDefault();
        let h = r !== void 0 ? r : Nt(a) === Nt(s);
        u(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i]
  );
}
const jv = "_main_nm910_8",
  Ov = "_heading_nm910_66",
  kn = {
    main: jv,
    "main-container": "_main-container_nm910_11",
    "column-left": "_column-left_nm910_17",
    "column-right": "_column-right_nm910_56",
    "main-image": "_main-image_nm910_62",
    heading: Ov,
  };
function Fv() {
  return P.jsx(P.Fragment, {
    children: P.jsx("section", {
      className: kn.main,
      children: P.jsxs("div", {
        className: kn["main-container"],
        children: [
          P.jsxs("div", {
            className: kn["column-left"],
            children: [
              P.jsx("h1", {
                className: kn.heading,
                children: "Login To Tick In",
              }),
              P.jsxs("form", {
                action: "",
                children: [
                  P.jsx("label", { htmlFor: "", children: "Email" }),
                  P.jsx("input", { type: "text" }),
                  P.jsx("label", { htmlFor: "", children: "Password" }),
                  P.jsx("input", { type: "password" }),
                ],
              }),
              P.jsx(Fr, {
                to: "/todo",
                children: P.jsx("button", { children: "Login" }),
              }),
            ],
          }),
          P.jsx("div", {
            className: kn["column-right"],
            children: P.jsx("img", {
              src: "./assets/login.svg",
              alt: "illustrator",
              className: kn["main-image"],
            }),
          }),
        ],
      }),
    }),
  });
}
const Uv = "_logo_1itmb_15",
  Iv = { logo: Uv },
  Av = "_logo_1phoe_15",
  $v = "_main_1phoe_31",
  Bv = "_heading_1phoe_80",
  En = {
    logo: Av,
    main: $v,
    "main-container": "_main-container_1phoe_34",
    "column-left": "_column-left_1phoe_40",
    "column-right": "_column-right_1phoe_70",
    "main-image": "_main-image_1phoe_76",
    heading: Bv,
  };
function Hv() {
  return P.jsx(P.Fragment, {
    children: P.jsx("section", {
      className: En.main,
      children: P.jsxs("div", {
        className: En["main-container"],
        children: [
          P.jsxs("div", {
            className: En["column-left"],
            children: [
              P.jsx("h1", {
                className: En.heading,
                children: "Keep Up To Your Tasks",
              }),
              P.jsx("p", {
                children:
                  "Join millions of people to capture ideas, organize life, and do something creative everyday.",
              }),
              P.jsx(yd, {
                to: "signup",
                children: P.jsx("button", { children: "Get Started" }),
              }),
            ],
          }),
          P.jsx("div", {
            className: En["column-right"],
            children: P.jsx("img", {
              src: "./assets/undraw_reminder_re_fe15.svg",
              alt: "illustrator",
              className: En["main-image"],
            }),
          }),
        ],
      }),
    }),
  });
}
function Wv() {
  return P.jsxs(P.Fragment, {
    children: [
      P.jsxs("nav", {
        children: [
          P.jsx(Fr, {
            to: "/",
            children: P.jsx("div", { className: Iv.logo, children: "TODO" }),
          }),
          P.jsxs("div", {
            className: "nav-items",
            children: [
              P.jsx(Fr, { to: "/", children: "Home" }),
              P.jsx(Fr, { to: "login", children: "Login" }),
            ],
          }),
        ],
      }),
      P.jsx(Sv, {}),
    ],
  });
}
const Vv = "_main_xkzvn_8",
  Qv = "_heading_xkzvn_66",
  _n = {
    main: Vv,
    "main-container": "_main-container_xkzvn_11",
    "column-left": "_column-left_xkzvn_17",
    "column-right": "_column-right_xkzvn_56",
    "main-image": "_main-image_xkzvn_62",
    heading: Qv,
  };
function Kv() {
  return P.jsx(P.Fragment, {
    children: P.jsx("section", {
      className: _n.main,
      children: P.jsxs("div", {
        className: _n["main-container"],
        children: [
          P.jsxs("div", {
            className: _n["column-left"],
            children: [
              P.jsx("h1", {
                className: _n.heading,
                children: "SignUp To Organize Everything",
              }),
              P.jsxs("form", {
                action: "",
                children: [
                  P.jsx("label", { htmlFor: "", children: "Name" }),
                  P.jsx("input", { type: "text" }),
                  P.jsx("label", { htmlFor: "", children: "Email" }),
                  P.jsx("input", { type: "text" }),
                  P.jsx("label", { htmlFor: "", children: "Password" }),
                  P.jsx("input", { type: "password" }),
                ],
              }),
              P.jsx(Fr, {
                to: "/login",
                children: P.jsx("button", { children: "SignUp" }),
              }),
            ],
          }),
          P.jsx("div", {
            className: _n["column-right"],
            children: P.jsx("img", {
              src: "./assets/signup.svg",
              alt: "illustrator",
              className: _n["main-image"],
            }),
          }),
        ],
      }),
    }),
  });
}
const Yv = "_edit_oc5tm_38",
  en = {
    "todo-form": "_todo-form_oc5tm_1",
    "todo-input": "_todo-input_oc5tm_5",
    "todo-button": "_todo-button_oc5tm_21",
    edit: Yv,
  };
function wd(e) {
  const [t, n] = L.useState(e.edit ? e.edit.value : ""),
    r = L.useRef(null);
  L.useEffect(() => {
    r.current.focus();
  });
  const l = (i) => {
      n(i.target.value);
    },
    o = (i) => {
      i.preventDefault(),
        e.onSubmit({ id: Math.floor(Math.random() * 1e4), text: t }),
        n("");
    };
  return P.jsx("form", {
    onSubmit: o,
    className: en["todo-form"],
    children: e.edit
      ? P.jsxs(P.Fragment, {
          children: [
            P.jsx("input", {
              placeholder: "Update your item",
              value: t,
              onChange: l,
              name: "text",
              ref: r,
              className: `${en["todo-input"]} ${en.edit}`,
            }),
            P.jsx("button", {
              onClick: o,
              className: `${en["todo-button"]} ${en.edit}`,
              children: "Update",
            }),
          ],
        })
      : P.jsxs(P.Fragment, {
          children: [
            P.jsx("input", {
              placeholder: "Add a todo",
              value: t,
              onChange: l,
              name: "text",
              className: en["todo-input"],
              ref: r,
            }),
            P.jsx("button", {
              onClick: o,
              className: en["todo-button"],
              children: "Add todo",
            }),
          ],
        }),
  });
}
var Sd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ws = xt.createContext && xt.createContext(Sd),
  Qt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Qt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        Qt.apply(this, arguments)
      );
    },
  Gv =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function xd(e) {
  return (
    e &&
    e.map(function (t, n) {
      return xt.createElement(t.tag, Qt({ key: n }, t.attr), xd(t.child));
    })
  );
}
function kd(e) {
  return function (t) {
    return xt.createElement(Xv, Qt({ attr: Qt({}, e.attr) }, t), xd(e.child));
  };
}
function Xv(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      o = e.title,
      i = Gv(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      xt.createElement(
        "svg",
        Qt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: a,
            style: Qt(Qt({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && xt.createElement("title", null, o),
        e.children
      )
    );
  };
  return Ws !== void 0
    ? xt.createElement(Ws.Consumer, null, function (n) {
        return t(n);
      })
    : t(Sd);
}
function Jv(e) {
  return kd({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: {},
        child: [
          { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
          {
            tag: "path",
            attr: {
              d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z",
            },
          },
        ],
      },
    ],
  })(e);
}
function Zv(e) {
  return kd({
    tag: "svg",
    attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z",
        },
      },
    ],
  })(e);
}
const qv = "_complete_1jnnx_48",
  bv = "_icons_1jnnx_52",
  Cn = {
    "todo-container": "_todo-container_1jnnx_1",
    "todo-row": "_todo-row_1jnnx_7",
    complete: qv,
    icons: bv,
    "delete-icon": "_delete-icon_1jnnx_59",
    "edit-icon": "_edit-icon_1jnnx_64",
  },
  eg = ({ todos: e, completeTodo: t, removeTodo: n, updateTodo: r }) => {
    const [l, o] = L.useState({ id: null, value: "" }),
      i = (u) => {
        r(l.id, u), o({ id: null, value: "" });
      };
    return l.id
      ? P.jsx(wd, { edit: l, onSubmit: i })
      : e.map((u, a) =>
          P.jsxs(
            "div",
            {
              className: u.isComplete
                ? `${Cn["todo-row"]} ${Cn.complete}`
                : Cn["todo-row"],
              children: [
                P.jsx(
                  "div",
                  { onClick: () => t(u.id), children: u.text },
                  u.id
                ),
                P.jsxs("div", {
                  className: Cn.icons,
                  children: [
                    P.jsx(Jv, {
                      onClick: () => n(u.id),
                      className: Cn["delete-icon"],
                    }),
                    P.jsx(Zv, {
                      onClick: () => o({ id: u.id, value: u.text }),
                      className: Cn["edit-icon"],
                    }),
                  ],
                }),
              ],
            },
            a
          )
        );
  },
  tg = { "todo-app": "_todo-app_d10lu_1" };
function ng() {
  const [e, t] = L.useState([]),
    n = (i) => {
      if (!i.text || /^\s*$/.test(i.text)) return;
      const u = [i, ...e];
      t(u), console.log(...e);
    },
    r = (i, u) => {
      !u.text ||
        /^\s*$/.test(u.text) ||
        t((a) => a.map((s) => (s.id === i ? u : s)));
    },
    l = (i) => {
      const u = [...e].filter((a) => a.id !== i);
      t(u);
    },
    o = (i) => {
      let u = e.map((a) => (a.id === i && (a.isComplete = !a.isComplete), a));
      t(u);
    };
  return P.jsx(P.Fragment, {
    children: P.jsxs("div", {
      className: tg["todo-app"],
      children: [
        P.jsx("h1", { children: "What's the Plan for Today?" }),
        P.jsx(wd, { onSubmit: n }),
        P.jsx(eg, { todos: e, completeTodo: o, removeTodo: l, updateTodo: r }),
      ],
    }),
  });
}
function rg() {
  const e = Nv(
    po(
      P.jsxs(Pn, {
        path: "/",
        element: P.jsx(Wv, {}),
        children: [
          P.jsx(Pn, { index: !0, element: P.jsx(Hv, {}) }),
          P.jsx(Pn, { path: "signup", element: P.jsx(Kv, {}) }),
          P.jsx(Pn, { path: "login", element: P.jsx(Fv, {}) }),
          P.jsx(Pn, { path: "todo", element: P.jsx(ng, {}) }),
        ],
      })
    )
  );
  return P.jsx(wv, { router: e });
}
const lg = L.createContext(),
  og = (e, t) => {
    switch (t.type) {
      case "LOGIN":
        return { user: t.payload };
      case "LOGOUT":
        return { user: null };
      default:
        return e;
    }
  },
  ig = ({ children: e }) => {
    const [t, n] = L.useReducer(og, { user: null });
    return (
      L.useEffect(() => {
        const r = JSON.parse(localStorage.getItem("user"));
        r && n({ type: "LOGIN", payload: r });
      }, []),
      P.jsx(lg.Provider, { value: { ...t, dispatch: n }, children: e })
    );
  };
gi.createRoot(document.getElementById("root")).render(
  P.jsx(xt.StrictMode, { children: P.jsx(ig, { children: P.jsx(rg, {}) }) })
);
