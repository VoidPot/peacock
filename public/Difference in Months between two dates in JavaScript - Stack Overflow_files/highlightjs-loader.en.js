(() => {
  var e = {
      41279: (e, n) => {
        "use strict";
        function t(e) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (
            (t = function (e) {
              if (
                null === e ||
                ((t = e),
                -1 === Function.toString.call(t).indexOf("[native code]"))
              )
                return e;
              var t;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, r);
              }
              function r() {
                return a(e, arguments, l(this).constructor);
              }
              return (
                (r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                s(r, e)
              );
            }),
            t(e)
          );
        }
        function a(e, n, t) {
          return (
            (a = c()
              ? Reflect.construct
              : function (e, n, t) {
                  var a = [null];
                  a.push.apply(a, n);
                  var r = new (Function.bind.apply(e, a))();
                  return t && s(r, t.prototype), r;
                }),
            a.apply(null, arguments)
          );
        }
        function r(e, n) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == t) return;
              var a,
                r,
                i = [],
                s = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(s = (a = t.next()).done) &&
                  (i.push(a.value), !n || i.length !== n);
                  s = !0
                );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  s || null == t.return || t.return();
                } finally {
                  if (u) throw r;
                }
              }
              return i;
            })(e, n) ||
            g(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function i(e, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            n && s(e, n);
        }
        function s(e, n) {
          return (
            (s =
              Object.setPrototypeOf ||
              function (e, n) {
                return (e.__proto__ = n), e;
              }),
            s(e, n)
          );
        }
        function u(e) {
          var n = c();
          return function () {
            var t,
              a = l(e);
            if (n) {
              var r = l(this).constructor;
              t = Reflect.construct(a, arguments, r);
            } else t = a.apply(this, arguments);
            return o(this, t);
          };
        }
        function o(e, n) {
          if (n && ("object" === E(n) || "function" == typeof n)) return n;
          if (void 0 !== n)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function c() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function l(e) {
          return (
            (l = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            l(e)
          );
        }
        function d(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return D(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            g(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function g(e, n) {
          if (e) {
            if ("string" == typeof e) return D(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? D(e, n)
                : void 0
            );
          }
        }
        function D(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
          return a;
        }
        function b(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function p(e, n, t) {
          return (
            n && m(e.prototype, n),
            t && m(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function E(e) {
          return (
            (E =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            E(e)
          );
        }
        var f = (function () {
          var e = { exports: {} };
          function n(e) {
            return (
              e instanceof Map
                ? (e.clear =
                    e.delete =
                    e.set =
                      function () {
                        throw new Error("map is read-only");
                      })
                : e instanceof Set &&
                  (e.add =
                    e.clear =
                    e.delete =
                      function () {
                        throw new Error("set is read-only");
                      }),
              Object.freeze(e),
              Object.getOwnPropertyNames(e).forEach(function (t) {
                var a = e[t];
                "object" != E(a) || Object.isFrozen(a) || n(a);
              }),
              e
            );
          }
          (e.exports = n), (e.exports.default = n);
          var a = e.exports,
            s = (function () {
              function e(n) {
                b(this, e),
                  void 0 === n.data && (n.data = {}),
                  (this.data = n.data),
                  (this.isMatchIgnored = !1);
              }
              return (
                p(e, [
                  {
                    key: "ignoreMatch",
                    value: function () {
                      this.isMatchIgnored = !0;
                    },
                  },
                ]),
                e
              );
            })();
          function o(e) {
            return e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;");
          }
          function c(e) {
            var n = Object.create(null);
            for (var t in e) n[t] = e[t];
            for (
              var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1;
              i < a;
              i++
            )
              r[i - 1] = arguments[i];
            return (
              r.forEach(function (e) {
                for (var t in e) n[t] = e[t];
              }),
              n
            );
          }
          var l = function (e) {
              return !!e.kind;
            },
            D = (function () {
              function e(n, t) {
                b(this, e),
                  (this.buffer = ""),
                  (this.classPrefix = t.classPrefix),
                  n.walk(this);
              }
              return (
                p(e, [
                  {
                    key: "addText",
                    value: function (e) {
                      this.buffer += o(e);
                    },
                  },
                  {
                    key: "openNode",
                    value: function (e) {
                      if (l(e)) {
                        var n = e.kind;
                        (n = e.sublanguage
                          ? "language-".concat(n)
                          : (function (e, n) {
                              var t = n.prefix;
                              if (e.includes(".")) {
                                var a = e.split(".");
                                return ["".concat(t).concat(a.shift())]
                                  .concat(
                                    d(
                                      a.map(function (e, n) {
                                        return ""
                                          .concat(e)
                                          .concat("_".repeat(n + 1));
                                      })
                                    )
                                  )
                                  .join(" ");
                              }
                              return "".concat(t).concat(e);
                            })(n, { prefix: this.classPrefix })),
                          this.span(n);
                      }
                    },
                  },
                  {
                    key: "closeNode",
                    value: function (e) {
                      l(e) && (this.buffer += "</span>");
                    },
                  },
                  {
                    key: "value",
                    value: function () {
                      return this.buffer;
                    },
                  },
                  {
                    key: "span",
                    value: function (e) {
                      this.buffer += '<span class="'.concat(e, '">');
                    },
                  },
                ]),
                e
              );
            })(),
            m = (function (e) {
              i(t, e);
              var n = u(t);
              function t(e) {
                var a;
                return b(this, t), ((a = n.call(this)).options = e), a;
              }
              return (
                p(t, [
                  {
                    key: "addKeyword",
                    value: function (e, n) {
                      "" !== e &&
                        (this.openNode(n), this.addText(e), this.closeNode());
                    },
                  },
                  {
                    key: "addText",
                    value: function (e) {
                      "" !== e && this.add(e);
                    },
                  },
                  {
                    key: "addSublanguage",
                    value: function (e, n) {
                      var t = e.root;
                      (t.kind = n), (t.sublanguage = !0), this.add(t);
                    },
                  },
                  {
                    key: "toHTML",
                    value: function () {
                      return new D(this, this.options).value();
                    },
                  },
                  {
                    key: "finalize",
                    value: function () {
                      return !0;
                    },
                  },
                ]),
                t
              );
            })(
              (function () {
                function e() {
                  b(this, e),
                    (this.rootNode = { children: [] }),
                    (this.stack = [this.rootNode]);
                }
                return (
                  p(
                    e,
                    [
                      {
                        key: "top",
                        get: function () {
                          return this.stack[this.stack.length - 1];
                        },
                      },
                      {
                        key: "root",
                        get: function () {
                          return this.rootNode;
                        },
                      },
                      {
                        key: "add",
                        value: function (e) {
                          this.top.children.push(e);
                        },
                      },
                      {
                        key: "openNode",
                        value: function (e) {
                          var n = { kind: e, children: [] };
                          this.add(n), this.stack.push(n);
                        },
                      },
                      {
                        key: "closeNode",
                        value: function () {
                          if (this.stack.length > 1) return this.stack.pop();
                        },
                      },
                      {
                        key: "closeAllNodes",
                        value: function () {
                          for (; this.closeNode(); );
                        },
                      },
                      {
                        key: "toJSON",
                        value: function () {
                          return JSON.stringify(this.rootNode, null, 4);
                        },
                      },
                      {
                        key: "walk",
                        value: function (e) {
                          return this.constructor._walk(e, this.rootNode);
                        },
                      },
                    ],
                    [
                      {
                        key: "_walk",
                        value: function (e, n) {
                          var t = this;
                          return (
                            "string" == typeof n
                              ? e.addText(n)
                              : n.children &&
                                (e.openNode(n),
                                n.children.forEach(function (n) {
                                  return t._walk(e, n);
                                }),
                                e.closeNode(n)),
                            e
                          );
                        },
                      },
                      {
                        key: "_collapse",
                        value: function (n) {
                          "string" != typeof n &&
                            n.children &&
                            (n.children.every(function (e) {
                              return "string" == typeof e;
                            })
                              ? (n.children = [n.children.join("")])
                              : n.children.forEach(function (n) {
                                  e._collapse(n);
                                }));
                        },
                      },
                    ]
                  ),
                  e
                );
              })()
            );
          function f(e) {
            return e ? ("string" == typeof e ? e : e.source) : null;
          }
          function h(e) {
            return A("(?=", e, ")");
          }
          function _(e) {
            return A("(?:", e, ")*");
          }
          function C(e) {
            return A("(?:", e, ")?");
          }
          function A() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            var a = n
              .map(function (e) {
                return f(e);
              })
              .join("");
            return a;
          }
          function v(e) {
            var n = e[e.length - 1];
            return "object" === E(n) && n.constructor === Object
              ? (e.splice(e.length - 1, 1), n)
              : {};
          }
          function y() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            var a = v(n),
              r =
                "(" +
                (a.capture ? "" : "?:") +
                n
                  .map(function (e) {
                    return f(e);
                  })
                  .join("|") +
                ")";
            return r;
          }
          function F(e) {
            return new RegExp(e.toString() + "|").exec("").length - 1;
          }
          var w = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
          function N(e, n) {
            var t = n.joinWith,
              a = 0;
            return e
              .map(function (e) {
                for (var n = (a += 1), t = f(e), r = ""; t.length > 0; ) {
                  var i = w.exec(t);
                  if (!i) {
                    r += t;
                    break;
                  }
                  (r += t.substring(0, i.index)),
                    (t = t.substring(i.index + i[0].length)),
                    "\\" === i[0][0] && i[1]
                      ? (r += "\\" + String(Number(i[1]) + n))
                      : ((r += i[0]), "(" === i[0] && a++);
                }
                return r;
              })
              .map(function (e) {
                return "(".concat(e, ")");
              })
              .join(t);
          }
          var B = "[a-zA-Z]\\w*",
            k = "[a-zA-Z_]\\w*",
            x = "\\b\\d+(\\.\\d+)?",
            O =
              "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            M = "\\b(0b[01]+)",
            S = { begin: "\\\\[\\s\\S]", relevance: 0 },
            T = {
              scope: "string",
              begin: "'",
              end: "'",
              illegal: "\\n",
              contains: [S],
            },
            R = {
              scope: "string",
              begin: '"',
              end: '"',
              illegal: "\\n",
              contains: [S],
            },
            I = function (e, n) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                a = c({ scope: "comment", begin: e, end: n, contains: [] }, t);
              a.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0,
              });
              var r = y(
                "I",
                "a",
                "is",
                "so",
                "us",
                "to",
                "at",
                "if",
                "in",
                "it",
                "on",
                /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
                /[A-Za-z]+[-][a-z]+/,
                /[A-Za-z][a-z]{2,}/
              );
              return (
                a.contains.push({
                  begin: A(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
                }),
                a
              );
            },
            L = I("//", "$"),
            z = I("/\\*", "\\*/"),
            j = I("#", "$"),
            P = { scope: "number", begin: x, relevance: 0 },
            U = { scope: "number", begin: O, relevance: 0 },
            $ = { scope: "number", begin: M, relevance: 0 },
            K = {
              begin: /(?=\/[^/\n]*\/)/,
              contains: [
                {
                  scope: "regexp",
                  begin: /\//,
                  end: /\/[gimuy]*/,
                  illegal: /\n/,
                  contains: [
                    S,
                    { begin: /\[/, end: /\]/, relevance: 0, contains: [S] },
                  ],
                },
              ],
            },
            q = { scope: "title", begin: B, relevance: 0 },
            Z = { scope: "title", begin: k, relevance: 0 },
            H = { begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0 },
            G = Object.freeze({
              __proto__: null,
              MATCH_NOTHING_RE: /\b\B/,
              IDENT_RE: B,
              UNDERSCORE_IDENT_RE: k,
              NUMBER_RE: x,
              C_NUMBER_RE: O,
              BINARY_NUMBER_RE: M,
              RE_STARTERS_RE:
                "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
              SHEBANG: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = /^#![ ]*\//;
                return (
                  e.binary && (e.begin = A(n, /.*\b/, e.binary, /\b.*/)),
                  c(
                    {
                      scope: "meta",
                      begin: n,
                      end: /$/,
                      relevance: 0,
                      "on:begin": function (e, n) {
                        0 !== e.index && n.ignoreMatch();
                      },
                    },
                    e
                  )
                );
              },
              BACKSLASH_ESCAPE: S,
              APOS_STRING_MODE: T,
              QUOTE_STRING_MODE: R,
              PHRASAL_WORDS_MODE: {
                begin:
                  /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
              },
              COMMENT: I,
              C_LINE_COMMENT_MODE: L,
              C_BLOCK_COMMENT_MODE: z,
              HASH_COMMENT_MODE: j,
              NUMBER_MODE: P,
              C_NUMBER_MODE: U,
              BINARY_NUMBER_MODE: $,
              REGEXP_MODE: K,
              TITLE_MODE: q,
              UNDERSCORE_TITLE_MODE: Z,
              METHOD_GUARD: H,
              END_SAME_AS_BEGIN: function (e) {
                return Object.assign(e, {
                  "on:begin": function (e, n) {
                    n.data._beginMatch = e[1];
                  },
                  "on:end": function (e, n) {
                    n.data._beginMatch !== e[1] && n.ignoreMatch();
                  },
                });
              },
            });
          function W(e, n) {
            "." === e.input[e.index - 1] && n.ignoreMatch();
          }
          function Q(e, n) {
            void 0 !== e.className &&
              ((e.scope = e.className), delete e.className);
          }
          function X(e, n) {
            n &&
              e.beginKeywords &&
              ((e.begin =
                "\\b(" +
                e.beginKeywords.split(" ").join("|") +
                ")(?!\\.)(?=\\b|\\s)"),
              (e.__beforeBegin = W),
              (e.keywords = e.keywords || e.beginKeywords),
              delete e.beginKeywords,
              void 0 === e.relevance && (e.relevance = 0));
          }
          function V(e, n) {
            Array.isArray(e.illegal) &&
              (e.illegal = y.apply(void 0, d(e.illegal)));
          }
          function J(e, n) {
            if (e.match) {
              if (e.begin || e.end)
                throw new Error("begin & end are not supported with match");
              (e.begin = e.match), delete e.match;
            }
          }
          function Y(e, n) {
            void 0 === e.relevance && (e.relevance = 1);
          }
          var ee = function (e, n) {
              if (e.beforeMatch) {
                if (e.starts)
                  throw new Error("beforeMatch cannot be used with starts");
                var t = Object.assign({}, e);
                Object.keys(e).forEach(function (n) {
                  delete e[n];
                }),
                  (e.keywords = t.keywords),
                  (e.begin = A(t.beforeMatch, h(t.begin))),
                  (e.starts = {
                    relevance: 0,
                    contains: [Object.assign(t, { endsParent: !0 })],
                  }),
                  (e.relevance = 0),
                  delete t.beforeMatch;
              }
            },
            ne = [
              "of",
              "and",
              "for",
              "in",
              "not",
              "or",
              "if",
              "then",
              "parent",
              "list",
              "value",
            ],
            te = "keyword";
          function ae(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : te,
              a = Object.create(null);
            return (
              "string" == typeof e
                ? r(t, e.split(" "))
                : Array.isArray(e)
                ? r(t, e)
                : Object.keys(e).forEach(function (t) {
                    Object.assign(a, ae(e[t], n, t));
                  }),
              a
            );
            function r(e, t) {
              n &&
                (t = t.map(function (e) {
                  return e.toLowerCase();
                })),
                t.forEach(function (n) {
                  var t = n.split("|");
                  a[t[0]] = [e, re(t[0], t[1])];
                });
            }
          }
          function re(e, n) {
            return n
              ? Number(n)
              : (function (e) {
                  return ne.includes(e.toLowerCase());
                })(e)
              ? 0
              : 1;
          }
          var ie = {},
            se = function (e) {
              console.error(e);
            },
            ue = function (e) {
              for (
                var n,
                  t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                a[r - 1] = arguments[r];
              (n = console).log.apply(n, ["WARN: ".concat(e)].concat(a));
            },
            oe = function (e, n) {
              ie["".concat(e, "/").concat(n)] ||
                (console.log("Deprecated as of ".concat(e, ". ").concat(n)),
                (ie["".concat(e, "/").concat(n)] = !0));
            },
            ce = new Error();
          function le(e, n, t) {
            for (
              var a = t.key, r = 0, i = e[a], s = {}, u = {}, o = 1;
              o <= n.length;
              o++
            )
              (u[o + r] = i[o]), (s[o + r] = !0), (r += F(n[o - 1]));
            (e[a] = u), (e[a]._emit = s), (e[a]._multi = !0);
          }
          function de(e) {
            !(function (e) {
              e.scope &&
                "object" === E(e.scope) &&
                null !== e.scope &&
                ((e.beginScope = e.scope), delete e.scope);
            })(e),
              "string" == typeof e.beginScope &&
                (e.beginScope = { _wrap: e.beginScope }),
              "string" == typeof e.endScope &&
                (e.endScope = { _wrap: e.endScope }),
              (function (e) {
                if (Array.isArray(e.begin)) {
                  if (e.skip || e.excludeBegin || e.returnBegin)
                    throw (
                      (se(
                        "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
                      ),
                      ce)
                    );
                  if ("object" !== E(e.beginScope) || null === e.beginScope)
                    throw (se("beginScope must be object"), ce);
                  le(e, e.begin, { key: "beginScope" }),
                    (e.begin = N(e.begin, { joinWith: "" }));
                }
              })(e),
              (function (e) {
                if (Array.isArray(e.end)) {
                  if (e.skip || e.excludeEnd || e.returnEnd)
                    throw (
                      (se(
                        "skip, excludeEnd, returnEnd not compatible with endScope: {}"
                      ),
                      ce)
                    );
                  if ("object" !== E(e.endScope) || null === e.endScope)
                    throw (se("endScope must be object"), ce);
                  le(e, e.end, { key: "endScope" }),
                    (e.end = N(e.end, { joinWith: "" }));
                }
              })(e);
          }
          function ge(e) {
            function n(n, t) {
              return new RegExp(
                f(n),
                "m" +
                  (e.case_insensitive ? "i" : "") +
                  (e.unicodeRegex ? "u" : "") +
                  (t ? "g" : "")
              );
            }
            var t = (function () {
                function e() {
                  b(this, e),
                    (this.matchIndexes = {}),
                    (this.regexes = []),
                    (this.matchAt = 1),
                    (this.position = 0);
                }
                return (
                  p(e, [
                    {
                      key: "addRule",
                      value: function (e, n) {
                        (n.position = this.position++),
                          (this.matchIndexes[this.matchAt] = n),
                          this.regexes.push([n, e]),
                          (this.matchAt += F(e) + 1);
                      },
                    },
                    {
                      key: "compile",
                      value: function () {
                        0 === this.regexes.length &&
                          (this.exec = function () {
                            return null;
                          });
                        var e = this.regexes.map(function (e) {
                          return e[1];
                        });
                        (this.matcherRe = n(N(e, { joinWith: "|" }), !0)),
                          (this.lastIndex = 0);
                      },
                    },
                    {
                      key: "exec",
                      value: function (e) {
                        this.matcherRe.lastIndex = this.lastIndex;
                        var n = this.matcherRe.exec(e);
                        if (!n) return null;
                        var t = n.findIndex(function (e, n) {
                            return n > 0 && void 0 !== e;
                          }),
                          a = this.matchIndexes[t];
                        return n.splice(0, t), Object.assign(n, a);
                      },
                    },
                  ]),
                  e
                );
              })(),
              a = (function () {
                function e() {
                  b(this, e),
                    (this.rules = []),
                    (this.multiRegexes = []),
                    (this.count = 0),
                    (this.lastIndex = 0),
                    (this.regexIndex = 0);
                }
                return (
                  p(e, [
                    {
                      key: "getMatcher",
                      value: function (e) {
                        if (this.multiRegexes[e]) return this.multiRegexes[e];
                        var n = new t();
                        return (
                          this.rules.slice(e).forEach(function (e) {
                            var t = r(e, 2),
                              a = t[0],
                              i = t[1];
                            return n.addRule(a, i);
                          }),
                          n.compile(),
                          (this.multiRegexes[e] = n),
                          n
                        );
                      },
                    },
                    {
                      key: "resumingScanAtSamePosition",
                      value: function () {
                        return 0 !== this.regexIndex;
                      },
                    },
                    {
                      key: "considerAll",
                      value: function () {
                        this.regexIndex = 0;
                      },
                    },
                    {
                      key: "addRule",
                      value: function (e, n) {
                        this.rules.push([e, n]),
                          "begin" === n.type && this.count++;
                      },
                    },
                    {
                      key: "exec",
                      value: function (e) {
                        var n = this.getMatcher(this.regexIndex);
                        n.lastIndex = this.lastIndex;
                        var t = n.exec(e);
                        if (this.resumingScanAtSamePosition())
                          if (t && t.index === this.lastIndex);
                          else {
                            var a = this.getMatcher(0);
                            (a.lastIndex = this.lastIndex + 1), (t = a.exec(e));
                          }
                        return (
                          t &&
                            ((this.regexIndex += t.position + 1),
                            this.regexIndex === this.count &&
                              this.considerAll()),
                          t
                        );
                      },
                    },
                  ]),
                  e
                );
              })();
            if (
              (e.compilerExtensions || (e.compilerExtensions = []),
              e.contains && e.contains.includes("self"))
            )
              throw new Error(
                "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
              );
            return (
              (e.classNameAliases = c(e.classNameAliases || {})),
              (function t(r, i) {
                var s,
                  u = r;
                if (r.isCompiled) return u;
                [Q, J, de, ee].forEach(function (e) {
                  return e(r, i);
                }),
                  e.compilerExtensions.forEach(function (e) {
                    return e(r, i);
                  }),
                  (r.__beforeBegin = null),
                  [X, V, Y].forEach(function (e) {
                    return e(r, i);
                  }),
                  (r.isCompiled = !0);
                var o = null;
                return (
                  "object" === E(r.keywords) &&
                    r.keywords.$pattern &&
                    ((r.keywords = Object.assign({}, r.keywords)),
                    (o = r.keywords.$pattern),
                    delete r.keywords.$pattern),
                  (o = o || /\w+/),
                  r.keywords &&
                    (r.keywords = ae(r.keywords, e.case_insensitive)),
                  (u.keywordPatternRe = n(o, !0)),
                  i &&
                    (r.begin || (r.begin = /\B|\b/),
                    (u.beginRe = n(u.begin)),
                    r.end || r.endsWithParent || (r.end = /\B|\b/),
                    r.end && (u.endRe = n(u.end)),
                    (u.terminatorEnd = f(u.end) || ""),
                    r.endsWithParent &&
                      i.terminatorEnd &&
                      (u.terminatorEnd +=
                        (r.end ? "|" : "") + i.terminatorEnd)),
                  r.illegal && (u.illegalRe = n(r.illegal)),
                  r.contains || (r.contains = []),
                  (r.contains = (s = []).concat.apply(
                    s,
                    d(
                      r.contains.map(function (e) {
                        return (function (e) {
                          e.variants &&
                            !e.cachedVariants &&
                            (e.cachedVariants = e.variants.map(function (n) {
                              return c(e, { variants: null }, n);
                            }));
                          if (e.cachedVariants) return e.cachedVariants;
                          if (De(e))
                            return c(e, {
                              starts: e.starts ? c(e.starts) : null,
                            });
                          if (Object.isFrozen(e)) return c(e);
                          return e;
                        })("self" === e ? r : e);
                      })
                    )
                  )),
                  r.contains.forEach(function (e) {
                    t(e, u);
                  }),
                  r.starts && t(r.starts, i),
                  (u.matcher = (function (e) {
                    var n = new a();
                    return (
                      e.contains.forEach(function (e) {
                        return n.addRule(e.begin, { rule: e, type: "begin" });
                      }),
                      e.terminatorEnd &&
                        n.addRule(e.terminatorEnd, { type: "end" }),
                      e.illegal && n.addRule(e.illegal, { type: "illegal" }),
                      n
                    );
                  })(u)),
                  u
                );
              })(e)
            );
          }
          function De(e) {
            return !!e && (e.endsWithParent || De(e.starts));
          }
          var be = (function (e) {
              i(t, e);
              var n = u(t);
              function t(e, a) {
                var r;
                return (
                  b(this, t),
                  ((r = n.call(this, e)).name = "HTMLInjectionError"),
                  (r.html = a),
                  r
                );
              }
              return p(t);
            })(t(Error)),
            me = o,
            pe = c,
            Ee = Symbol("nomatch"),
            fe = (function (e) {
              var n = Object.create(null),
                t = Object.create(null),
                i = [],
                u = !0,
                o =
                  "Could not find the language '{}', did you forget to load/include a language module?",
                c = { disableAutodetect: !0, name: "Plain text", contains: [] },
                l = {
                  ignoreUnescapedHTML: !1,
                  throwUnescapedHTML: !1,
                  noHighlightRe: /^(no-?highlight)$/i,
                  languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                  classPrefix: "hljs-",
                  cssSelector: "pre code",
                  languages: null,
                  __emitter: m,
                };
              function d(e) {
                return l.noHighlightRe.test(e);
              }
              function g(e, n, t) {
                var a = "",
                  r = "";
                "object" === E(n)
                  ? ((a = e), (t = n.ignoreIllegals), (r = n.language))
                  : (oe(
                      "10.7.0",
                      "highlight(lang, code, ...args) has been deprecated."
                    ),
                    oe(
                      "10.7.0",
                      "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
                    ),
                    (r = e),
                    (a = n)),
                  void 0 === t && (t = !0);
                var i = { code: a, language: r };
                B("before:highlight", i);
                var s = i.result ? i.result : D(i.language, i.code, t);
                return (s.code = i.code), B("after:highlight", s), s;
              }
              function D(e, t, a, i) {
                var c = Object.create(null);
                function d() {
                  if (w.keywords) {
                    var e = 0;
                    w.keywordPatternRe.lastIndex = 0;
                    for (var n, t = w.keywordPatternRe.exec(k), a = ""; t; ) {
                      a += k.substring(e, t.index);
                      var i = A.case_insensitive ? t[0].toLowerCase() : t[0],
                        s = ((n = i), w.keywords[n]);
                      if (s) {
                        var u = r(s, 2),
                          o = u[0],
                          l = u[1];
                        if (
                          (B.addText(a),
                          (a = ""),
                          (c[i] = (c[i] || 0) + 1),
                          c[i] <= 7 && (x += l),
                          o.startsWith("_"))
                        )
                          a += t[0];
                        else {
                          var d = A.classNameAliases[o] || o;
                          B.addKeyword(t[0], d);
                        }
                      } else a += t[0];
                      (e = w.keywordPatternRe.lastIndex),
                        (t = w.keywordPatternRe.exec(k));
                    }
                    (a += k.substr(e)), B.addText(a);
                  } else B.addText(k);
                }
                function g() {
                  null != w.subLanguage
                    ? (function () {
                        if ("" !== k) {
                          var e = null;
                          if ("string" == typeof w.subLanguage) {
                            if (!n[w.subLanguage]) return void B.addText(k);
                            (e = D(w.subLanguage, k, !0, N[w.subLanguage])),
                              (N[w.subLanguage] = e._top);
                          } else
                            e = b(
                              k,
                              w.subLanguage.length ? w.subLanguage : null
                            );
                          w.relevance > 0 && (x += e.relevance),
                            B.addSublanguage(e._emitter, e.language);
                        }
                      })()
                    : d(),
                    (k = "");
                }
                function m(e, n) {
                  for (var t = 1, a = n.length - 1; t <= a; )
                    if (e._emit[t]) {
                      var r = A.classNameAliases[e[t]] || e[t],
                        i = n[t];
                      r ? B.addKeyword(i, r) : ((k = i), d(), (k = "")), t++;
                    } else t++;
                }
                function p(e, n) {
                  return (
                    e.scope &&
                      "string" == typeof e.scope &&
                      B.openNode(A.classNameAliases[e.scope] || e.scope),
                    e.beginScope &&
                      (e.beginScope._wrap
                        ? (B.addKeyword(
                            k,
                            A.classNameAliases[e.beginScope._wrap] ||
                              e.beginScope._wrap
                          ),
                          (k = ""))
                        : e.beginScope._multi &&
                          (m(e.beginScope, n), (k = ""))),
                    (w = Object.create(e, { parent: { value: w } }))
                  );
                }
                function E(e, n, t) {
                  var a = (function (e, n) {
                    var t = e && e.exec(n);
                    return t && 0 === t.index;
                  })(e.endRe, t);
                  if (a) {
                    if (e["on:end"]) {
                      var r = new s(e);
                      e["on:end"](n, r), r.isMatchIgnored && (a = !1);
                    }
                    if (a) {
                      for (; e.endsParent && e.parent; ) e = e.parent;
                      return e;
                    }
                  }
                  if (e.endsWithParent) return E(e.parent, n, t);
                }
                function f(e) {
                  return 0 === w.matcher.regexIndex
                    ? ((k += e[0]), 1)
                    : ((S = !0), 0);
                }
                function h(e) {
                  var n = e[0],
                    a = t.substr(e.index),
                    r = E(w, e, a);
                  if (!r) return Ee;
                  var i = w;
                  w.endScope && w.endScope._wrap
                    ? (g(), B.addKeyword(n, w.endScope._wrap))
                    : w.endScope && w.endScope._multi
                    ? (g(), m(w.endScope, e))
                    : i.skip
                    ? (k += n)
                    : (i.returnEnd || i.excludeEnd || (k += n),
                      g(),
                      i.excludeEnd && (k = n));
                  do {
                    w.scope && B.closeNode(),
                      w.skip || w.subLanguage || (x += w.relevance),
                      (w = w.parent);
                  } while (w !== r.parent);
                  return r.starts && p(r.starts, e), i.returnEnd ? 0 : n.length;
                }
                var _ = {};
                function C(n, r) {
                  var i = r && r[0];
                  if (((k += n), null == i)) return g(), 0;
                  if (
                    "begin" === _.type &&
                    "end" === r.type &&
                    _.index === r.index &&
                    "" === i
                  ) {
                    if (((k += t.slice(r.index, r.index + 1)), !u)) {
                      var o = new Error("0 width match regex (".concat(e, ")"));
                      throw ((o.languageName = e), (o.badRule = _.rule), o);
                    }
                    return 1;
                  }
                  if (((_ = r), "begin" === r.type))
                    return (function (e) {
                      for (
                        var n = e[0],
                          t = e.rule,
                          a = new s(t),
                          r = 0,
                          i = [t.__beforeBegin, t["on:begin"]];
                        r < i.length;
                        r++
                      ) {
                        var u = i[r];
                        if (u && (u(e, a), a.isMatchIgnored)) return f(n);
                      }
                      return (
                        t.skip
                          ? (k += n)
                          : (t.excludeBegin && (k += n),
                            g(),
                            t.returnBegin || t.excludeBegin || (k = n)),
                        p(t, e),
                        t.returnBegin ? 0 : n.length
                      );
                    })(r);
                  if ("illegal" === r.type && !a) {
                    var c = new Error(
                      'Illegal lexeme "' +
                        i +
                        '" for mode "' +
                        (w.scope || "<unnamed>") +
                        '"'
                    );
                    throw ((c.mode = w), c);
                  }
                  if ("end" === r.type) {
                    var l = h(r);
                    if (l !== Ee) return l;
                  }
                  if ("illegal" === r.type && "" === i) return 1;
                  if (M > 1e5 && M > 3 * r.index)
                    throw new Error(
                      "potential infinite loop, way more iterations than matches"
                    );
                  return (k += i), i.length;
                }
                var A = F(e);
                if (!A)
                  throw (
                    (se(o.replace("{}", e)),
                    new Error('Unknown language: "' + e + '"'))
                  );
                var v = ge(A),
                  y = "",
                  w = i || v,
                  N = {},
                  B = new l.__emitter(l);
                !(function () {
                  for (var e = [], n = w; n !== A; n = n.parent)
                    n.scope && e.unshift(n.scope);
                  e.forEach(function (e) {
                    return B.openNode(e);
                  });
                })();
                var k = "",
                  x = 0,
                  O = 0,
                  M = 0,
                  S = !1;
                try {
                  for (w.matcher.considerAll(); ; ) {
                    M++,
                      S ? (S = !1) : w.matcher.considerAll(),
                      (w.matcher.lastIndex = O);
                    var T = w.matcher.exec(t);
                    if (!T) break;
                    var R = C(t.substring(O, T.index), T);
                    O = T.index + R;
                  }
                  return (
                    C(t.substr(O)),
                    B.closeAllNodes(),
                    B.finalize(),
                    (y = B.toHTML()),
                    {
                      language: e,
                      value: y,
                      relevance: x,
                      illegal: !1,
                      _emitter: B,
                      _top: w,
                    }
                  );
                } catch (n) {
                  if (n.message && n.message.includes("Illegal"))
                    return {
                      language: e,
                      value: me(t),
                      illegal: !0,
                      relevance: 0,
                      _illegalBy: {
                        message: n.message,
                        index: O,
                        context: t.slice(O - 100, O + 100),
                        mode: n.mode,
                        resultSoFar: y,
                      },
                      _emitter: B,
                    };
                  if (u)
                    return {
                      language: e,
                      value: me(t),
                      illegal: !1,
                      relevance: 0,
                      errorRaised: n,
                      _emitter: B,
                      _top: w,
                    };
                  throw n;
                }
              }
              function b(e, t) {
                t = t || l.languages || Object.keys(n);
                var a = (function (e) {
                    var n = {
                      value: me(e),
                      illegal: !1,
                      relevance: 0,
                      _top: c,
                      _emitter: new l.__emitter(l),
                    };
                    return n._emitter.addText(e), n;
                  })(e),
                  i = t
                    .filter(F)
                    .filter(N)
                    .map(function (n) {
                      return D(n, e, !1);
                    });
                i.unshift(a);
                var s = r(
                    i.sort(function (e, n) {
                      if (e.relevance !== n.relevance)
                        return n.relevance - e.relevance;
                      if (e.language && n.language) {
                        if (F(e.language).supersetOf === n.language) return 1;
                        if (F(n.language).supersetOf === e.language) return -1;
                      }
                      return 0;
                    }),
                    2
                  ),
                  u = s[0],
                  o = s[1],
                  d = u;
                return (d.secondBest = o), d;
              }
              function p(e) {
                var n = (function (e) {
                  var n = e.className + " ";
                  n += e.parentNode ? e.parentNode.className : "";
                  var t = l.languageDetectRe.exec(n);
                  if (t) {
                    var a = F(t[1]);
                    return (
                      a ||
                        (ue(o.replace("{}", t[1])),
                        ue(
                          "Falling back to no-highlight mode for this block.",
                          e
                        )),
                      a ? t[1] : "no-highlight"
                    );
                  }
                  return n.split(/\s+/).find(function (e) {
                    return d(e) || F(e);
                  });
                })(e);
                if (!d(n)) {
                  if (
                    (B("before:highlightElement", { el: e, language: n }),
                    e.children.length > 0)
                  )
                    if (
                      (l.ignoreUnescapedHTML ||
                        (console.warn(
                          "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
                        ),
                        console.warn(
                          "https://github.com/highlightjs/highlight.js/wiki/security"
                        ),
                        console.warn("The element with unescaped HTML:"),
                        console.warn(e)),
                      l.throwUnescapedHTML)
                    )
                      throw new be(
                        "One of your code blocks includes unescaped HTML.",
                        e.innerHTML
                      );
                  var a = e.textContent,
                    r = n ? g(a, { language: n, ignoreIllegals: !0 }) : b(a);
                  (e.innerHTML = r.value),
                    (function (e, n, a) {
                      var r = (n && t[n]) || a;
                      e.classList.add("hljs"),
                        e.classList.add("language-".concat(r));
                    })(e, n, r.language),
                    (e.result = {
                      language: r.language,
                      re: r.relevance,
                      relevance: r.relevance,
                    }),
                    r.secondBest &&
                      (e.secondBest = {
                        language: r.secondBest.language,
                        relevance: r.secondBest.relevance,
                      }),
                    B("after:highlightElement", { el: e, result: r, text: a });
                }
              }
              var f = !1;
              function v() {
                "loading" !== document.readyState
                  ? document.querySelectorAll(l.cssSelector).forEach(p)
                  : (f = !0);
              }
              function F(e) {
                return (e = (e || "").toLowerCase()), n[e] || n[t[e]];
              }
              function w(e, n) {
                var a = n.languageName;
                "string" == typeof e && (e = [e]),
                  e.forEach(function (e) {
                    t[e.toLowerCase()] = a;
                  });
              }
              function N(e) {
                var n = F(e);
                return n && !n.disableAutodetect;
              }
              function B(e, n) {
                var t = e;
                i.forEach(function (e) {
                  e[t] && e[t](n);
                });
              }
              for (var k in ("undefined" != typeof window &&
                window.addEventListener &&
                window.addEventListener(
                  "DOMContentLoaded",
                  function () {
                    f && v();
                  },
                  !1
                ),
              Object.assign(e, {
                highlight: g,
                highlightAuto: b,
                highlightAll: v,
                highlightElement: p,
                highlightBlock: function (e) {
                  return (
                    oe(
                      "10.7.0",
                      "highlightBlock will be removed entirely in v12.0"
                    ),
                    oe("10.7.0", "Please use highlightElement now."),
                    p(e)
                  );
                },
                configure: function (e) {
                  l = pe(l, e);
                },
                initHighlighting: function () {
                  v(),
                    oe(
                      "10.6.0",
                      "initHighlighting() deprecated.  Use highlightAll() now."
                    );
                },
                initHighlightingOnLoad: function () {
                  v(),
                    oe(
                      "10.6.0",
                      "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
                    );
                },
                registerLanguage: function (t, a) {
                  var r = null;
                  try {
                    r = a(e);
                  } catch (e) {
                    if (
                      (se(
                        "Language definition for '{}' could not be registered.".replace(
                          "{}",
                          t
                        )
                      ),
                      !u)
                    )
                      throw e;
                    se(e), (r = c);
                  }
                  r.name || (r.name = t),
                    (n[t] = r),
                    (r.rawDefinition = a.bind(null, e)),
                    r.aliases && w(r.aliases, { languageName: t });
                },
                unregisterLanguage: function (e) {
                  delete n[e];
                  for (var a = 0, r = Object.keys(t); a < r.length; a++) {
                    var i = r[a];
                    t[i] === e && delete t[i];
                  }
                },
                listLanguages: function () {
                  return Object.keys(n);
                },
                getLanguage: F,
                registerAliases: w,
                autoDetection: N,
                inherit: pe,
                addPlugin: function (e) {
                  !(function (e) {
                    e["before:highlightBlock"] &&
                      !e["before:highlightElement"] &&
                      (e["before:highlightElement"] = function (n) {
                        e["before:highlightBlock"](
                          Object.assign({ block: n.el }, n)
                        );
                      }),
                      e["after:highlightBlock"] &&
                        !e["after:highlightElement"] &&
                        (e["after:highlightElement"] = function (n) {
                          e["after:highlightBlock"](
                            Object.assign({ block: n.el }, n)
                          );
                        });
                  })(e),
                    i.push(e);
                },
              }),
              (e.debugMode = function () {
                u = !1;
              }),
              (e.safeMode = function () {
                u = !0;
              }),
              (e.versionString = "11.5.1"),
              (e.regex = {
                concat: A,
                lookahead: h,
                either: y,
                optional: C,
                anyNumberOfTimes: _,
              }),
              G))
                "object" === E(G[k]) && a(G[k]);
              return Object.assign(e, G), e;
            })({});
          var he = function (e) {
              return {
                IMPORTANT: { scope: "meta", begin: "!important" },
                BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                HEXCOLOR: {
                  scope: "number",
                  begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
                },
                FUNCTION_DISPATCH: {
                  className: "built_in",
                  begin: /[\w-]+(?=\()/,
                },
                ATTRIBUTE_SELECTOR_MODE: {
                  scope: "selector-attr",
                  begin: /\[/,
                  end: /\]/,
                  illegal: "$",
                  contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
                },
                CSS_NUMBER_MODE: {
                  scope: "number",
                  begin:
                    e.NUMBER_RE +
                    "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                  relevance: 0,
                },
                CSS_VARIABLE: {
                  className: "attr",
                  begin: /--[A-Za-z][A-Za-z0-9_-]*/,
                },
              };
            },
            _e = [
              "a",
              "abbr",
              "address",
              "article",
              "aside",
              "audio",
              "b",
              "blockquote",
              "body",
              "button",
              "canvas",
              "caption",
              "cite",
              "code",
              "dd",
              "del",
              "details",
              "dfn",
              "div",
              "dl",
              "dt",
              "em",
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
              "header",
              "hgroup",
              "html",
              "i",
              "iframe",
              "img",
              "input",
              "ins",
              "kbd",
              "label",
              "legend",
              "li",
              "main",
              "mark",
              "menu",
              "nav",
              "object",
              "ol",
              "p",
              "q",
              "quote",
              "samp",
              "section",
              "span",
              "strong",
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
              "tr",
              "ul",
              "var",
              "video",
            ],
            Ce = [
              "any-hover",
              "any-pointer",
              "aspect-ratio",
              "color",
              "color-gamut",
              "color-index",
              "device-aspect-ratio",
              "device-height",
              "device-width",
              "display-mode",
              "forced-colors",
              "grid",
              "height",
              "hover",
              "inverted-colors",
              "monochrome",
              "orientation",
              "overflow-block",
              "overflow-inline",
              "pointer",
              "prefers-color-scheme",
              "prefers-contrast",
              "prefers-reduced-motion",
              "prefers-reduced-transparency",
              "resolution",
              "scan",
              "scripting",
              "update",
              "width",
              "min-width",
              "max-width",
              "min-height",
              "max-height",
            ],
            Ae = [
              "active",
              "any-link",
              "blank",
              "checked",
              "current",
              "default",
              "defined",
              "dir",
              "disabled",
              "drop",
              "empty",
              "enabled",
              "first",
              "first-child",
              "first-of-type",
              "fullscreen",
              "future",
              "focus",
              "focus-visible",
              "focus-within",
              "has",
              "host",
              "host-context",
              "hover",
              "indeterminate",
              "in-range",
              "invalid",
              "is",
              "lang",
              "last-child",
              "last-of-type",
              "left",
              "link",
              "local-link",
              "not",
              "nth-child",
              "nth-col",
              "nth-last-child",
              "nth-last-col",
              "nth-last-of-type",
              "nth-of-type",
              "only-child",
              "only-of-type",
              "optional",
              "out-of-range",
              "past",
              "placeholder-shown",
              "read-only",
              "read-write",
              "required",
              "right",
              "root",
              "scope",
              "target",
              "target-within",
              "user-invalid",
              "valid",
              "visited",
              "where",
            ],
            ve = [
              "after",
              "backdrop",
              "before",
              "cue",
              "cue-region",
              "first-letter",
              "first-line",
              "grammar-error",
              "marker",
              "part",
              "placeholder",
              "selection",
              "slotted",
              "spelling-error",
            ],
            ye = [
              "align-content",
              "align-items",
              "align-self",
              "all",
              "animation",
              "animation-delay",
              "animation-direction",
              "animation-duration",
              "animation-fill-mode",
              "animation-iteration-count",
              "animation-name",
              "animation-play-state",
              "animation-timing-function",
              "backface-visibility",
              "background",
              "background-attachment",
              "background-blend-mode",
              "background-clip",
              "background-color",
              "background-image",
              "background-origin",
              "background-position",
              "background-repeat",
              "background-size",
              "block-size",
              "border",
              "border-block",
              "border-block-color",
              "border-block-end",
              "border-block-end-color",
              "border-block-end-style",
              "border-block-end-width",
              "border-block-start",
              "border-block-start-color",
              "border-block-start-style",
              "border-block-start-width",
              "border-block-style",
              "border-block-width",
              "border-bottom",
              "border-bottom-color",
              "border-bottom-left-radius",
              "border-bottom-right-radius",
              "border-bottom-style",
              "border-bottom-width",
              "border-collapse",
              "border-color",
              "border-image",
              "border-image-outset",
              "border-image-repeat",
              "border-image-slice",
              "border-image-source",
              "border-image-width",
              "border-inline",
              "border-inline-color",
              "border-inline-end",
              "border-inline-end-color",
              "border-inline-end-style",
              "border-inline-end-width",
              "border-inline-start",
              "border-inline-start-color",
              "border-inline-start-style",
              "border-inline-start-width",
              "border-inline-style",
              "border-inline-width",
              "border-left",
              "border-left-color",
              "border-left-style",
              "border-left-width",
              "border-radius",
              "border-right",
              "border-right-color",
              "border-right-style",
              "border-right-width",
              "border-spacing",
              "border-style",
              "border-top",
              "border-top-color",
              "border-top-left-radius",
              "border-top-right-radius",
              "border-top-style",
              "border-top-width",
              "border-width",
              "bottom",
              "box-decoration-break",
              "box-shadow",
              "box-sizing",
              "break-after",
              "break-before",
              "break-inside",
              "caption-side",
              "caret-color",
              "clear",
              "clip",
              "clip-path",
              "clipRule",
              "color",
              "column-count",
              "column-fill",
              "column-gap",
              "column-rule",
              "column-rule-color",
              "column-rule-style",
              "column-rule-width",
              "column-span",
              "column-width",
              "columns",
              "contain",
              "content",
              "content-visibility",
              "counter-increment",
              "counter-reset",
              "cue",
              "cue-after",
              "cue-before",
              "cursor",
              "direction",
              "display",
              "empty-cells",
              "filter",
              "flex",
              "flex-basis",
              "flex-direction",
              "flex-flow",
              "flex-grow",
              "flex-shrink",
              "flex-wrap",
              "float",
              "flow",
              "font",
              "font-display",
              "font-family",
              "font-feature-settings",
              "font-kerning",
              "font-language-override",
              "font-size",
              "font-size-adjust",
              "font-smoothing",
              "font-stretch",
              "font-style",
              "font-synthesis",
              "font-variant",
              "font-variant-caps",
              "font-variant-east-asian",
              "font-variant-ligatures",
              "font-variant-numeric",
              "font-variant-position",
              "font-variation-settings",
              "font-weight",
              "gap",
              "glyph-orientation-vertical",
              "grid",
              "grid-area",
              "grid-auto-columns",
              "grid-auto-flow",
              "grid-auto-rows",
              "grid-column",
              "grid-column-end",
              "grid-column-start",
              "grid-gap",
              "grid-row",
              "grid-row-end",
              "grid-row-start",
              "grid-template",
              "grid-template-areas",
              "grid-template-columns",
              "grid-template-rows",
              "hanging-punctuation",
              "height",
              "hyphens",
              "icon",
              "image-orientation",
              "image-rendering",
              "image-resolution",
              "ime-mode",
              "inline-size",
              "isolation",
              "justify-content",
              "left",
              "letter-spacing",
              "line-break",
              "line-height",
              "list-style",
              "list-style-image",
              "list-style-position",
              "list-style-type",
              "margin",
              "margin-block",
              "margin-block-end",
              "margin-block-start",
              "margin-bottom",
              "margin-inline",
              "margin-inline-end",
              "margin-inline-start",
              "margin-left",
              "margin-right",
              "margin-top",
              "marks",
              "mask",
              "mask-border",
              "mask-border-mode",
              "mask-border-outset",
              "mask-border-repeat",
              "mask-border-slice",
              "mask-border-source",
              "mask-border-width",
              "mask-clip",
              "mask-composite",
              "mask-image",
              "mask-mode",
              "mask-origin",
              "mask-position",
              "mask-repeat",
              "mask-size",
              "mask-type",
              "max-block-size",
              "max-height",
              "max-inline-size",
              "max-width",
              "min-block-size",
              "min-height",
              "min-inline-size",
              "min-width",
              "mix-blend-mode",
              "nav-down",
              "nav-index",
              "nav-left",
              "nav-right",
              "nav-up",
              "none",
              "normal",
              "object-fit",
              "object-position",
              "opacity",
              "order",
              "orphans",
              "outline",
              "outline-color",
              "outline-offset",
              "outline-style",
              "outline-width",
              "overflow",
              "overflow-wrap",
              "overflow-x",
              "overflow-y",
              "padding",
              "padding-block",
              "padding-block-end",
              "padding-block-start",
              "padding-bottom",
              "padding-inline",
              "padding-inline-end",
              "padding-inline-start",
              "padding-left",
              "padding-right",
              "padding-top",
              "page-break-after",
              "page-break-before",
              "page-break-inside",
              "pause",
              "pause-after",
              "pause-before",
              "perspective",
              "perspective-origin",
              "pointer-events",
              "position",
              "quotes",
              "resize",
              "rest",
              "rest-after",
              "rest-before",
              "right",
              "row-gap",
              "scroll-margin",
              "scroll-margin-block",
              "scroll-margin-block-end",
              "scroll-margin-block-start",
              "scroll-margin-bottom",
              "scroll-margin-inline",
              "scroll-margin-inline-end",
              "scroll-margin-inline-start",
              "scroll-margin-left",
              "scroll-margin-right",
              "scroll-margin-top",
              "scroll-padding",
              "scroll-padding-block",
              "scroll-padding-block-end",
              "scroll-padding-block-start",
              "scroll-padding-bottom",
              "scroll-padding-inline",
              "scroll-padding-inline-end",
              "scroll-padding-inline-start",
              "scroll-padding-left",
              "scroll-padding-right",
              "scroll-padding-top",
              "scroll-snap-align",
              "scroll-snap-stop",
              "scroll-snap-type",
              "scrollbar-color",
              "scrollbar-gutter",
              "scrollbar-width",
              "shape-image-threshold",
              "shape-margin",
              "shape-outside",
              "speak",
              "speak-as",
              "src",
              "tab-size",
              "table-layout",
              "text-align",
              "text-align-all",
              "text-align-last",
              "text-combine-upright",
              "text-decoration",
              "text-decoration-color",
              "text-decoration-line",
              "text-decoration-style",
              "text-emphasis",
              "text-emphasis-color",
              "text-emphasis-position",
              "text-emphasis-style",
              "text-indent",
              "text-justify",
              "text-orientation",
              "text-overflow",
              "text-rendering",
              "text-shadow",
              "text-transform",
              "text-underline-position",
              "top",
              "transform",
              "transform-box",
              "transform-origin",
              "transform-style",
              "transition",
              "transition-delay",
              "transition-duration",
              "transition-property",
              "transition-timing-function",
              "unicode-bidi",
              "vertical-align",
              "visibility",
              "voice-balance",
              "voice-duration",
              "voice-family",
              "voice-pitch",
              "voice-range",
              "voice-rate",
              "voice-stress",
              "voice-volume",
              "white-space",
              "widows",
              "width",
              "will-change",
              "word-break",
              "word-spacing",
              "word-wrap",
              "writing-mode",
              "z-index",
            ].reverse(),
            Fe = Ae.concat(ve);
          var we = "[A-Za-z$_][0-9A-Za-z$_]*",
            Ne = [
              "as",
              "in",
              "of",
              "if",
              "for",
              "while",
              "finally",
              "var",
              "new",
              "function",
              "do",
              "return",
              "void",
              "else",
              "break",
              "catch",
              "instanceof",
              "with",
              "throw",
              "case",
              "default",
              "try",
              "switch",
              "continue",
              "typeof",
              "delete",
              "let",
              "yield",
              "const",
              "class",
              "debugger",
              "async",
              "await",
              "static",
              "import",
              "from",
              "export",
              "extends",
            ],
            Be = ["true", "false", "null", "undefined", "NaN", "Infinity"],
            ke = [
              "Object",
              "Function",
              "Boolean",
              "Symbol",
              "Math",
              "Date",
              "Number",
              "BigInt",
              "String",
              "RegExp",
              "Array",
              "Float32Array",
              "Float64Array",
              "Int8Array",
              "Uint8Array",
              "Uint8ClampedArray",
              "Int16Array",
              "Int32Array",
              "Uint16Array",
              "Uint32Array",
              "BigInt64Array",
              "BigUint64Array",
              "Set",
              "Map",
              "WeakSet",
              "WeakMap",
              "ArrayBuffer",
              "SharedArrayBuffer",
              "Atomics",
              "DataView",
              "JSON",
              "Promise",
              "Generator",
              "GeneratorFunction",
              "AsyncFunction",
              "Reflect",
              "Proxy",
              "Intl",
              "WebAssembly",
            ],
            xe = [
              "Error",
              "EvalError",
              "InternalError",
              "RangeError",
              "ReferenceError",
              "SyntaxError",
              "TypeError",
              "URIError",
            ],
            Oe = [
              "setInterval",
              "setTimeout",
              "clearInterval",
              "clearTimeout",
              "require",
              "exports",
              "eval",
              "isFinite",
              "isNaN",
              "parseFloat",
              "parseInt",
              "decodeURI",
              "decodeURIComponent",
              "encodeURI",
              "encodeURIComponent",
              "escape",
              "unescape",
            ],
            Me = [
              "arguments",
              "this",
              "super",
              "console",
              "window",
              "document",
              "localStorage",
              "module",
              "global",
            ],
            Se = [].concat(Oe, ke, xe);
          var Te = "[0-9](_*[0-9])*",
            Re = "\\.(".concat(Te, ")"),
            Ie = "[0-9a-fA-F](_*[0-9a-fA-F])*",
            Le = {
              className: "number",
              variants: [
                {
                  begin:
                    "(\\b("
                      .concat(Te, ")((")
                      .concat(Re, ")|\\.)?|(")
                      .concat(Re, "))") +
                    "[eE][+-]?(".concat(Te, ")[fFdD]?\\b"),
                },
                {
                  begin: "\\b("
                    .concat(Te, ")((")
                    .concat(Re, ")[fFdD]?\\b|\\.([fFdD]\\b)?)"),
                },
                { begin: "(".concat(Re, ")[fFdD]?\\b") },
                { begin: "\\b(".concat(Te, ")[fFdD]\\b") },
                {
                  begin:
                    "\\b0[xX](("
                      .concat(Ie, ")\\.?|(")
                      .concat(Ie, ")?\\.(")
                      .concat(Ie, "))") +
                    "[pP][+-]?(".concat(Te, ")[fFdD]?\\b"),
                },
                { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
                { begin: "\\b0[xX](".concat(Ie, ")[lL]?\\b") },
                { begin: "\\b0(_*[0-7])*[lL]?\\b" },
                { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
              ],
              relevance: 0,
            };
          function ze(e, n, t) {
            return -1 === t
              ? ""
              : e.replace(n, function (a) {
                  return ze(e, n, t - 1);
                });
          }
          function je(e) {
            var n = e.regex,
              t = we,
              a = "<>",
              r = "</>",
              i = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: function (e, n) {
                  var t,
                    a = e[0].length + e.index,
                    r = e.input[a];
                  "<" !== r && "," !== r
                    ? (">" === r &&
                        ((function (e, n) {
                          var t = n.after,
                            a = "</" + e[0].slice(1);
                          return -1 !== e.input.indexOf(a, t);
                        })(e, { after: a }) ||
                          n.ignoreMatch()),
                      (t = e.input.substr(a).match(/^\s+extends\s+/)) &&
                        0 === t.index &&
                        n.ignoreMatch())
                    : n.ignoreMatch();
                },
              },
              s = {
                $pattern: we,
                keyword: Ne,
                literal: Be,
                built_in: Se,
                "variable.language": Me,
              },
              u = "[0-9](_?[0-9])*",
              o = "\\.(".concat(u, ")"),
              c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
              l = {
                className: "number",
                variants: [
                  {
                    begin:
                      "(\\b("
                        .concat(c, ")((")
                        .concat(o, ")|\\.)?|(")
                        .concat(o, "))") + "[eE][+-]?(".concat(u, ")\\b"),
                  },
                  {
                    begin: "\\b("
                      .concat(c, ")\\b((")
                      .concat(o, ")\\b|\\.)?|(")
                      .concat(o, ")\\b"),
                  },
                  { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
                  { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
                  { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
                  { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
                  { begin: "\\b0[0-7]+n?\\b" },
                ],
                relevance: 0,
              },
              d = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: s,
                contains: [],
              },
              g = {
                begin: "html`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, d],
                  subLanguage: "xml",
                },
              },
              D = {
                begin: "css`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, d],
                  subLanguage: "css",
                },
              },
              b = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, d],
              },
              m = {
                className: "comment",
                variants: [
                  e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [
                      {
                        begin: "(?=@[A-Za-z]+)",
                        relevance: 0,
                        contains: [
                          { className: "doctag", begin: "@[A-Za-z]+" },
                          {
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            excludeEnd: !0,
                            excludeBegin: !0,
                            relevance: 0,
                          },
                          {
                            className: "variable",
                            begin: t + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0,
                          },
                          { begin: /(?=[^\n])\s/, relevance: 0 },
                        ],
                      },
                    ],
                  }),
                  e.C_BLOCK_COMMENT_MODE,
                  e.C_LINE_COMMENT_MODE,
                ],
              },
              p = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, D, b, l];
            d.contains = p.concat({
              begin: /\{/,
              end: /\}/,
              keywords: s,
              contains: ["self"].concat(p),
            });
            var E = [].concat(m, d.contains),
              f = E.concat([
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: s,
                  contains: ["self"].concat(E),
                },
              ]),
              h = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: s,
                contains: f,
              },
              _ = {
                variants: [
                  {
                    match: [
                      /class/,
                      /\s+/,
                      t,
                      /\s+/,
                      /extends/,
                      /\s+/,
                      n.concat(t, "(", n.concat(/\./, t), ")*"),
                    ],
                    scope: {
                      1: "keyword",
                      3: "title.class",
                      5: "keyword",
                      7: "title.class.inherited",
                    },
                  },
                  {
                    match: [/class/, /\s+/, t],
                    scope: { 1: "keyword", 3: "title.class" },
                  },
                ],
              },
              C = {
                relevance: 0,
                match: n.either(
                  /\bJSON/,
                  /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
                  /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
                  /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
                ),
                className: "title.class",
                keywords: { _: [].concat(ke, xe) },
              },
              A = {
                variants: [
                  { match: [/function/, /\s+/, t, /(?=\s*\()/] },
                  { match: [/function/, /\s*(?=\()/] },
                ],
                className: { 1: "keyword", 3: "title.function" },
                label: "func.def",
                contains: [h],
                illegal: /%/,
              };
            var v,
              y = {
                match: n.concat(
                  /\b/,
                  ((v = [].concat(Oe, ["super"])),
                  n.concat("(?!", v.join("|"), ")")),
                  t,
                  n.lookahead(/\(/)
                ),
                className: "title.function",
                relevance: 0,
              },
              F = {
                begin: n.concat(
                  /\./,
                  n.lookahead(n.concat(t, /(?![0-9A-Za-z$_(])/))
                ),
                end: t,
                excludeBegin: !0,
                keywords: "prototype",
                className: "property",
                relevance: 0,
              },
              w = {
                match: [/get|set/, /\s+/, t, /(?=\()/],
                className: { 1: "keyword", 3: "title.function" },
                contains: [{ begin: /\(\)/ }, h],
              },
              N =
                "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                e.UNDERSCORE_IDENT_RE +
                ")\\s*=>",
              B = {
                match: [
                  /const|var|let/,
                  /\s+/,
                  t,
                  /\s*/,
                  /=\s*/,
                  /(async\s*)?/,
                  n.lookahead(N),
                ],
                keywords: "async",
                className: { 1: "keyword", 3: "title.function" },
                contains: [h],
              };
            return {
              name: "Javascript",
              aliases: ["js", "jsx", "mjs", "cjs"],
              keywords: s,
              exports: { PARAMS_CONTAINS: f, CLASS_REFERENCE: C },
              illegal: /#(?![$_A-z])/,
              contains: [
                e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
                {
                  label: "use_strict",
                  className: "meta",
                  relevance: 10,
                  begin: /^\s*['"]use (strict|asm)['"]/,
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                g,
                D,
                b,
                m,
                l,
                C,
                {
                  className: "attr",
                  begin: t + n.lookahead(":"),
                  relevance: 0,
                },
                B,
                {
                  begin:
                    "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                  keywords: "return throw case",
                  relevance: 0,
                  contains: [
                    m,
                    e.REGEXP_MODE,
                    {
                      className: "function",
                      begin: N,
                      returnBegin: !0,
                      end: "\\s*=>",
                      contains: [
                        {
                          className: "params",
                          variants: [
                            { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                            { className: null, begin: /\(\s*\)/, skip: !0 },
                            {
                              begin: /\(/,
                              end: /\)/,
                              excludeBegin: !0,
                              excludeEnd: !0,
                              keywords: s,
                              contains: f,
                            },
                          ],
                        },
                      ],
                    },
                    { begin: /,/, relevance: 0 },
                    { match: /\s+/, relevance: 0 },
                    {
                      variants: [
                        { begin: a, end: r },
                        { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                        {
                          begin: i.begin,
                          "on:begin": i.isTrulyOpeningTag,
                          end: i.end,
                        },
                      ],
                      subLanguage: "xml",
                      contains: [
                        {
                          begin: i.begin,
                          end: i.end,
                          skip: !0,
                          contains: ["self"],
                        },
                      ],
                    },
                  ],
                },
                A,
                { beginKeywords: "while if switch catch for" },
                {
                  begin:
                    "\\b(?!function)" +
                    e.UNDERSCORE_IDENT_RE +
                    "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                  returnBegin: !0,
                  label: "func.def",
                  contains: [
                    h,
                    e.inherit(e.TITLE_MODE, {
                      begin: t,
                      className: "title.function",
                    }),
                  ],
                },
                { match: /\.\.\./, relevance: 0 },
                F,
                { match: "\\$" + t, relevance: 0 },
                {
                  match: [/\bconstructor(?=\s*\()/],
                  className: { 1: "title.function" },
                  contains: [h],
                },
                y,
                {
                  relevance: 0,
                  match: /\b[A-Z][A-Z_0-9]+\b/,
                  className: "variable.constant",
                },
                _,
                w,
                { match: /\$[(.]/ },
              ],
            };
          }
          var Pe = function (e) {
              return A(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/);
            },
            Ue = ["Protocol", "Type"].map(Pe),
            $e = ["init", "self"].map(Pe),
            Ke = ["Any", "Self"],
            qe = [
              "actor",
              "associatedtype",
              "async",
              "await",
              /as\?/,
              /as!/,
              "as",
              "break",
              "case",
              "catch",
              "class",
              "continue",
              "convenience",
              "default",
              "defer",
              "deinit",
              "didSet",
              "do",
              "dynamic",
              "else",
              "enum",
              "extension",
              "fallthrough",
              /fileprivate\(set\)/,
              "fileprivate",
              "final",
              "for",
              "func",
              "get",
              "guard",
              "if",
              "import",
              "indirect",
              "infix",
              /init\?/,
              /init!/,
              "inout",
              /internal\(set\)/,
              "internal",
              "in",
              "is",
              "isolated",
              "nonisolated",
              "lazy",
              "let",
              "mutating",
              "nonmutating",
              /open\(set\)/,
              "open",
              "operator",
              "optional",
              "override",
              "postfix",
              "precedencegroup",
              "prefix",
              /private\(set\)/,
              "private",
              "protocol",
              /public\(set\)/,
              "public",
              "repeat",
              "required",
              "rethrows",
              "return",
              "set",
              "some",
              "static",
              "struct",
              "subscript",
              "super",
              "switch",
              "throws",
              "throw",
              /try\?/,
              /try!/,
              "try",
              "typealias",
              /unowned\(safe\)/,
              /unowned\(unsafe\)/,
              "unowned",
              "var",
              "weak",
              "where",
              "while",
              "willSet",
            ],
            Ze = ["false", "nil", "true"],
            He = [
              "assignment",
              "associativity",
              "higherThan",
              "left",
              "lowerThan",
              "none",
              "right",
            ],
            Ge = [
              "#colorLiteral",
              "#column",
              "#dsohandle",
              "#else",
              "#elseif",
              "#endif",
              "#error",
              "#file",
              "#fileID",
              "#fileLiteral",
              "#filePath",
              "#function",
              "#if",
              "#imageLiteral",
              "#keyPath",
              "#line",
              "#selector",
              "#sourceLocation",
              "#warn_unqualified_access",
              "#warning",
            ],
            We = [
              "abs",
              "all",
              "any",
              "assert",
              "assertionFailure",
              "debugPrint",
              "dump",
              "fatalError",
              "getVaList",
              "isKnownUniquelyReferenced",
              "max",
              "min",
              "numericCast",
              "pointwiseMax",
              "pointwiseMin",
              "precondition",
              "preconditionFailure",
              "print",
              "readLine",
              "repeatElement",
              "sequence",
              "stride",
              "swap",
              "swift_unboxFromSwiftValueWithType",
              "transcode",
              "type",
              "unsafeBitCast",
              "unsafeDowncast",
              "withExtendedLifetime",
              "withUnsafeMutablePointer",
              "withUnsafePointer",
              "withVaList",
              "withoutActuallyEscaping",
              "zip",
            ],
            Qe = y(
              /[/=\-+!*%<>&|^~?]/,
              /[\u00A1-\u00A7]/,
              /[\u00A9\u00AB]/,
              /[\u00AC\u00AE]/,
              /[\u00B0\u00B1]/,
              /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
              /[\u2016-\u2017]/,
              /[\u2020-\u2027]/,
              /[\u2030-\u203E]/,
              /[\u2041-\u2053]/,
              /[\u2055-\u205E]/,
              /[\u2190-\u23FF]/,
              /[\u2500-\u2775]/,
              /[\u2794-\u2BFF]/,
              /[\u2E00-\u2E7F]/,
              /[\u3001-\u3003]/,
              /[\u3008-\u3020]/,
              /[\u3030]/
            ),
            Xe = y(
              Qe,
              /[\u0300-\u036F]/,
              /[\u1DC0-\u1DFF]/,
              /[\u20D0-\u20FF]/,
              /[\uFE00-\uFE0F]/,
              /[\uFE20-\uFE2F]/
            ),
            Ve = A(Qe, Xe, "*"),
            Je = y(
              /[a-zA-Z_]/,
              /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
              /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
              /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
              /[\u1E00-\u1FFF]/,
              /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
              /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
              /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
              /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
              /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
              /[\uFE47-\uFEFE\uFF00-\uFFFD]/
            ),
            Ye = y(
              Je,
              /\d/,
              /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
            ),
            en = A(Je, Ye, "*"),
            nn = A(/[A-Z]/, Ye, "*"),
            tn = [
              "autoclosure",
              A(/convention\(/, y("swift", "block", "c"), /\)/),
              "discardableResult",
              "dynamicCallable",
              "dynamicMemberLookup",
              "escaping",
              "frozen",
              "GKInspectable",
              "IBAction",
              "IBDesignable",
              "IBInspectable",
              "IBOutlet",
              "IBSegueAction",
              "inlinable",
              "main",
              "nonobjc",
              "NSApplicationMain",
              "NSCopying",
              "NSManaged",
              A(/objc\(/, en, /\)/),
              "objc",
              "objcMembers",
              "propertyWrapper",
              "requires_stored_property_inits",
              "resultBuilder",
              "testable",
              "UIApplicationMain",
              "unknown",
              "usableFromInline",
            ],
            an = [
              "iOS",
              "iOSApplicationExtension",
              "macOS",
              "macOSApplicationExtension",
              "macCatalyst",
              "macCatalystApplicationExtension",
              "watchOS",
              "watchOSApplicationExtension",
              "tvOS",
              "tvOSApplicationExtension",
              "swift",
            ];
          for (
            var rn = Object.freeze({
                __proto__: null,
                grmr_bash: function (e) {
                  var n = e.regex,
                    t = {},
                    a = {
                      begin: /\$\{/,
                      end: /\}/,
                      contains: ["self", { begin: /:-/, contains: [t] }],
                    };
                  Object.assign(t, {
                    className: "variable",
                    variants: [
                      {
                        begin: n.concat(
                          /\$[\w\d#@][\w\d_]*/,
                          "(?![\\w\\d])(?![$])"
                        ),
                      },
                      a,
                    ],
                  });
                  var r = {
                      className: "subst",
                      begin: /\$\(/,
                      end: /\)/,
                      contains: [e.BACKSLASH_ESCAPE],
                    },
                    i = {
                      begin: /<<-?\s*(?=\w+)/,
                      starts: {
                        contains: [
                          e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            className: "string",
                          }),
                        ],
                      },
                    },
                    s = {
                      className: "string",
                      begin: /"/,
                      end: /"/,
                      contains: [e.BACKSLASH_ESCAPE, t, r],
                    };
                  r.contains.push(s);
                  var u = {
                      begin: /\$\(\(/,
                      end: /\)\)/,
                      contains: [
                        { begin: /\d+#[0-9a-f]+/, className: "number" },
                        e.NUMBER_MODE,
                        t,
                      ],
                    },
                    o = e.SHEBANG({
                      binary: "(".concat(
                        [
                          "fish",
                          "bash",
                          "zsh",
                          "sh",
                          "csh",
                          "ksh",
                          "tcsh",
                          "dash",
                          "scsh",
                        ].join("|"),
                        ")"
                      ),
                      relevance: 10,
                    }),
                    c = {
                      className: "function",
                      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                      returnBegin: !0,
                      contains: [
                        e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ }),
                      ],
                      relevance: 0,
                    };
                  return {
                    name: "Bash",
                    aliases: ["sh"],
                    keywords: {
                      $pattern: /\b[a-z][a-z0-9._-]+\b/,
                      keyword: [
                        "if",
                        "then",
                        "else",
                        "elif",
                        "fi",
                        "for",
                        "while",
                        "in",
                        "do",
                        "done",
                        "case",
                        "esac",
                        "function",
                      ],
                      literal: ["true", "false"],
                      built_in: [].concat(
                        [
                          "break",
                          "cd",
                          "continue",
                          "eval",
                          "exec",
                          "exit",
                          "export",
                          "getopts",
                          "hash",
                          "pwd",
                          "readonly",
                          "return",
                          "shift",
                          "test",
                          "times",
                          "trap",
                          "umask",
                          "unset",
                        ],
                        [
                          "alias",
                          "bind",
                          "builtin",
                          "caller",
                          "command",
                          "declare",
                          "echo",
                          "enable",
                          "help",
                          "let",
                          "local",
                          "logout",
                          "mapfile",
                          "printf",
                          "read",
                          "readarray",
                          "source",
                          "type",
                          "typeset",
                          "ulimit",
                          "unalias",
                        ],
                        ["set", "shopt"],
                        [
                          "autoload",
                          "bg",
                          "bindkey",
                          "bye",
                          "cap",
                          "chdir",
                          "clone",
                          "comparguments",
                          "compcall",
                          "compctl",
                          "compdescribe",
                          "compfiles",
                          "compgroups",
                          "compquote",
                          "comptags",
                          "comptry",
                          "compvalues",
                          "dirs",
                          "disable",
                          "disown",
                          "echotc",
                          "echoti",
                          "emulate",
                          "fc",
                          "fg",
                          "float",
                          "functions",
                          "getcap",
                          "getln",
                          "history",
                          "integer",
                          "jobs",
                          "kill",
                          "limit",
                          "log",
                          "noglob",
                          "popd",
                          "print",
                          "pushd",
                          "pushln",
                          "rehash",
                          "sched",
                          "setcap",
                          "setopt",
                          "stat",
                          "suspend",
                          "ttyctl",
                          "unfunction",
                          "unhash",
                          "unlimit",
                          "unsetopt",
                          "vared",
                          "wait",
                          "whence",
                          "where",
                          "which",
                          "zcompile",
                          "zformat",
                          "zftp",
                          "zle",
                          "zmodload",
                          "zparseopts",
                          "zprof",
                          "zpty",
                          "zregexparse",
                          "zsocket",
                          "zstyle",
                          "ztcp",
                        ],
                        [
                          "chcon",
                          "chgrp",
                          "chown",
                          "chmod",
                          "cp",
                          "dd",
                          "df",
                          "dir",
                          "dircolors",
                          "ln",
                          "ls",
                          "mkdir",
                          "mkfifo",
                          "mknod",
                          "mktemp",
                          "mv",
                          "realpath",
                          "rm",
                          "rmdir",
                          "shred",
                          "sync",
                          "touch",
                          "truncate",
                          "vdir",
                          "b2sum",
                          "base32",
                          "base64",
                          "cat",
                          "cksum",
                          "comm",
                          "csplit",
                          "cut",
                          "expand",
                          "fmt",
                          "fold",
                          "head",
                          "join",
                          "md5sum",
                          "nl",
                          "numfmt",
                          "od",
                          "paste",
                          "ptx",
                          "pr",
                          "sha1sum",
                          "sha224sum",
                          "sha256sum",
                          "sha384sum",
                          "sha512sum",
                          "shuf",
                          "sort",
                          "split",
                          "sum",
                          "tac",
                          "tail",
                          "tr",
                          "tsort",
                          "unexpand",
                          "uniq",
                          "wc",
                          "arch",
                          "basename",
                          "chroot",
                          "date",
                          "dirname",
                          "du",
                          "echo",
                          "env",
                          "expr",
                          "factor",
                          "groups",
                          "hostid",
                          "id",
                          "link",
                          "logname",
                          "nice",
                          "nohup",
                          "nproc",
                          "pathchk",
                          "pinky",
                          "printenv",
                          "printf",
                          "pwd",
                          "readlink",
                          "runcon",
                          "seq",
                          "sleep",
                          "stat",
                          "stdbuf",
                          "stty",
                          "tee",
                          "test",
                          "timeout",
                          "tty",
                          "uname",
                          "unlink",
                          "uptime",
                          "users",
                          "who",
                          "whoami",
                          "yes",
                        ]
                      ),
                    },
                    contains: [
                      o,
                      e.SHEBANG(),
                      c,
                      u,
                      e.HASH_COMMENT_MODE,
                      i,
                      { match: /(\/[a-z._-]+)+/ },
                      s,
                      { className: "", begin: /\\"/ },
                      { className: "string", begin: /'/, end: /'/ },
                      t,
                    ],
                  };
                },
                grmr_c: function (e) {
                  var n = e.regex,
                    t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
                    a = "decltype\\(auto\\)",
                    r = "[a-zA-Z_]\\w*::",
                    i =
                      "(decltype\\(auto\\)|" +
                      n.optional(r) +
                      "[a-zA-Z_]\\w*" +
                      n.optional("<[^<>]+>") +
                      ")",
                    s = {
                      className: "type",
                      variants: [
                        { begin: "\\b[a-z\\d_]*_t\\b" },
                        { match: /\batomic_[a-z]{3,6}\b/ },
                      ],
                    },
                    u = {
                      className: "string",
                      variants: [
                        {
                          begin: '(u8?|U|L)?"',
                          end: '"',
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE],
                        },
                        {
                          begin:
                            "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                          end: "'",
                          illegal: ".",
                        },
                        e.END_SAME_AS_BEGIN({
                          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                          end: /\)([^()\\ ]{0,16})"/,
                        }),
                      ],
                    },
                    o = {
                      className: "number",
                      variants: [
                        { begin: "\\b(0b[01']+)" },
                        {
                          begin:
                            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
                        },
                        {
                          begin:
                            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                        },
                      ],
                      relevance: 0,
                    },
                    c = {
                      className: "meta",
                      begin: /#\s*[a-z]+\b/,
                      end: /$/,
                      keywords: {
                        keyword:
                          "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
                      },
                      contains: [
                        { begin: /\\\n/, relevance: 0 },
                        e.inherit(u, { className: "string" }),
                        { className: "string", begin: /<.*?>/ },
                        t,
                        e.C_BLOCK_COMMENT_MODE,
                      ],
                    },
                    l = {
                      className: "title",
                      begin: n.optional(r) + e.IDENT_RE,
                      relevance: 0,
                    },
                    d = n.optional(r) + e.IDENT_RE + "\\s*\\(",
                    g = {
                      keyword: [
                        "asm",
                        "auto",
                        "break",
                        "case",
                        "continue",
                        "default",
                        "do",
                        "else",
                        "enum",
                        "extern",
                        "for",
                        "fortran",
                        "goto",
                        "if",
                        "inline",
                        "register",
                        "restrict",
                        "return",
                        "sizeof",
                        "struct",
                        "switch",
                        "typedef",
                        "union",
                        "volatile",
                        "while",
                        "_Alignas",
                        "_Alignof",
                        "_Atomic",
                        "_Generic",
                        "_Noreturn",
                        "_Static_assert",
                        "_Thread_local",
                        "alignas",
                        "alignof",
                        "noreturn",
                        "static_assert",
                        "thread_local",
                        "_Pragma",
                      ],
                      type: [
                        "float",
                        "double",
                        "signed",
                        "unsigned",
                        "int",
                        "short",
                        "long",
                        "char",
                        "void",
                        "_Bool",
                        "_Complex",
                        "_Imaginary",
                        "_Decimal32",
                        "_Decimal64",
                        "_Decimal128",
                        "const",
                        "static",
                        "complex",
                        "bool",
                        "imaginary",
                      ],
                      literal: "true false NULL",
                      built_in:
                        "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
                    },
                    D = [c, s, t, e.C_BLOCK_COMMENT_MODE, o, u],
                    b = {
                      variants: [
                        { begin: /=/, end: /;/ },
                        { begin: /\(/, end: /\)/ },
                        { beginKeywords: "new throw return else", end: /;/ },
                      ],
                      keywords: g,
                      contains: D.concat([
                        {
                          begin: /\(/,
                          end: /\)/,
                          keywords: g,
                          contains: D.concat(["self"]),
                          relevance: 0,
                        },
                      ]),
                      relevance: 0,
                    },
                    m = {
                      begin: "(" + i + "[\\*&\\s]+)+" + d,
                      returnBegin: !0,
                      end: /[{;=]/,
                      excludeEnd: !0,
                      keywords: g,
                      illegal: /[^\w\s\*&:<>.]/,
                      contains: [
                        { begin: a, keywords: g, relevance: 0 },
                        {
                          begin: d,
                          returnBegin: !0,
                          contains: [
                            e.inherit(l, { className: "title.function" }),
                          ],
                          relevance: 0,
                        },
                        { relevance: 0, match: /,/ },
                        {
                          className: "params",
                          begin: /\(/,
                          end: /\)/,
                          keywords: g,
                          relevance: 0,
                          contains: [
                            t,
                            e.C_BLOCK_COMMENT_MODE,
                            u,
                            o,
                            s,
                            {
                              begin: /\(/,
                              end: /\)/,
                              keywords: g,
                              relevance: 0,
                              contains: [
                                "self",
                                t,
                                e.C_BLOCK_COMMENT_MODE,
                                u,
                                o,
                                s,
                              ],
                            },
                          ],
                        },
                        s,
                        t,
                        e.C_BLOCK_COMMENT_MODE,
                        c,
                      ],
                    };
                  return {
                    name: "C",
                    aliases: ["h"],
                    keywords: g,
                    disableAutodetect: !0,
                    illegal: "</",
                    contains: [].concat(b, m, D, [
                      c,
                      { begin: e.IDENT_RE + "::", keywords: g },
                      {
                        className: "class",
                        beginKeywords: "enum class struct union",
                        end: /[{;:<>=]/,
                        contains: [
                          { beginKeywords: "final class struct" },
                          e.TITLE_MODE,
                        ],
                      },
                    ]),
                    exports: { preprocessor: c, strings: u, keywords: g },
                  };
                },
                grmr_csharp: function (e) {
                  var n = {
                      keyword: [
                        "abstract",
                        "as",
                        "base",
                        "break",
                        "case",
                        "catch",
                        "class",
                        "const",
                        "continue",
                        "do",
                        "else",
                        "event",
                        "explicit",
                        "extern",
                        "finally",
                        "fixed",
                        "for",
                        "foreach",
                        "goto",
                        "if",
                        "implicit",
                        "in",
                        "interface",
                        "internal",
                        "is",
                        "lock",
                        "namespace",
                        "new",
                        "operator",
                        "out",
                        "override",
                        "params",
                        "private",
                        "protected",
                        "public",
                        "readonly",
                        "record",
                        "ref",
                        "return",
                        "sealed",
                        "sizeof",
                        "stackalloc",
                        "static",
                        "struct",
                        "switch",
                        "this",
                        "throw",
                        "try",
                        "typeof",
                        "unchecked",
                        "unsafe",
                        "using",
                        "virtual",
                        "void",
                        "volatile",
                        "while",
                      ].concat([
                        "add",
                        "alias",
                        "and",
                        "ascending",
                        "async",
                        "await",
                        "by",
                        "descending",
                        "equals",
                        "from",
                        "get",
                        "global",
                        "group",
                        "init",
                        "into",
                        "join",
                        "let",
                        "nameof",
                        "not",
                        "notnull",
                        "on",
                        "or",
                        "orderby",
                        "partial",
                        "remove",
                        "select",
                        "set",
                        "unmanaged",
                        "value|0",
                        "var",
                        "when",
                        "where",
                        "with",
                        "yield",
                      ]),
                      built_in: [
                        "bool",
                        "byte",
                        "char",
                        "decimal",
                        "delegate",
                        "double",
                        "dynamic",
                        "enum",
                        "float",
                        "int",
                        "long",
                        "nint",
                        "nuint",
                        "object",
                        "sbyte",
                        "short",
                        "string",
                        "ulong",
                        "uint",
                        "ushort",
                      ],
                      literal: ["default", "false", "null", "true"],
                    },
                    t = e.inherit(e.TITLE_MODE, {
                      begin: "[a-zA-Z](\\.?\\w)*",
                    }),
                    a = {
                      className: "number",
                      variants: [
                        { begin: "\\b(0b[01']+)" },
                        {
                          begin:
                            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
                        },
                        {
                          begin:
                            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                        },
                      ],
                      relevance: 0,
                    },
                    r = {
                      className: "string",
                      begin: '@"',
                      end: '"',
                      contains: [{ begin: '""' }],
                    },
                    i = e.inherit(r, { illegal: /\n/ }),
                    s = {
                      className: "subst",
                      begin: /\{/,
                      end: /\}/,
                      keywords: n,
                    },
                    u = e.inherit(s, { illegal: /\n/ }),
                    o = {
                      className: "string",
                      begin: /\$"/,
                      end: '"',
                      illegal: /\n/,
                      contains: [
                        { begin: /\{\{/ },
                        { begin: /\}\}/ },
                        e.BACKSLASH_ESCAPE,
                        u,
                      ],
                    },
                    c = {
                      className: "string",
                      begin: /\$@"/,
                      end: '"',
                      contains: [
                        { begin: /\{\{/ },
                        { begin: /\}\}/ },
                        { begin: '""' },
                        s,
                      ],
                    },
                    l = e.inherit(c, {
                      illegal: /\n/,
                      contains: [
                        { begin: /\{\{/ },
                        { begin: /\}\}/ },
                        { begin: '""' },
                        u,
                      ],
                    });
                  (s.contains = [
                    c,
                    o,
                    r,
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    a,
                    e.C_BLOCK_COMMENT_MODE,
                  ]),
                    (u.contains = [
                      l,
                      o,
                      i,
                      e.APOS_STRING_MODE,
                      e.QUOTE_STRING_MODE,
                      a,
                      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
                    ]);
                  var d = {
                      variants: [
                        c,
                        o,
                        r,
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                      ],
                    },
                    g = {
                      begin: "<",
                      end: ">",
                      contains: [{ beginKeywords: "in out" }, t],
                    },
                    D =
                      e.IDENT_RE +
                      "(<" +
                      e.IDENT_RE +
                      "(\\s*,\\s*" +
                      e.IDENT_RE +
                      ")*>)?(\\[\\])?",
                    b = { begin: "@" + e.IDENT_RE, relevance: 0 };
                  return {
                    name: "C#",
                    aliases: ["cs", "c#"],
                    keywords: n,
                    illegal: /::/,
                    contains: [
                      e.COMMENT("///", "$", {
                        returnBegin: !0,
                        contains: [
                          {
                            className: "doctag",
                            variants: [
                              { begin: "///", relevance: 0 },
                              { begin: "\x3c!--|--\x3e" },
                              { begin: "</?", end: ">" },
                            ],
                          },
                        ],
                      }),
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      {
                        className: "meta",
                        begin: "#",
                        end: "$",
                        keywords: {
                          keyword:
                            "if else elif endif define undef warning error line region endregion pragma checksum",
                        },
                      },
                      d,
                      a,
                      {
                        beginKeywords: "class interface",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:,]/,
                        contains: [
                          { beginKeywords: "where class" },
                          t,
                          g,
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [
                          t,
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      {
                        beginKeywords: "record",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [
                          t,
                          g,
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      {
                        className: "meta",
                        begin: "^\\s*\\[(?=[\\w])",
                        excludeBegin: !0,
                        end: "\\]",
                        excludeEnd: !0,
                        contains: [
                          { className: "string", begin: /"/, end: /"/ },
                        ],
                      },
                      {
                        beginKeywords: "new return throw await else",
                        relevance: 0,
                      },
                      {
                        className: "function",
                        begin:
                          "(" +
                          D +
                          "\\s+)+" +
                          e.IDENT_RE +
                          "\\s*(<[^=]+>\\s*)?\\(",
                        returnBegin: !0,
                        end: /\s*[{;=]/,
                        excludeEnd: !0,
                        keywords: n,
                        contains: [
                          {
                            beginKeywords: [
                              "public",
                              "private",
                              "protected",
                              "static",
                              "internal",
                              "protected",
                              "abstract",
                              "async",
                              "extern",
                              "override",
                              "unsafe",
                              "virtual",
                              "new",
                              "sealed",
                              "partial",
                            ].join(" "),
                            relevance: 0,
                          },
                          {
                            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                            returnBegin: !0,
                            contains: [e.TITLE_MODE, g],
                            relevance: 0,
                          },
                          { match: /\(\)/ },
                          {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: n,
                            relevance: 0,
                            contains: [d, a, e.C_BLOCK_COMMENT_MODE],
                          },
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      b,
                    ],
                  };
                },
                grmr_cpp: function (e) {
                  var n = e.regex,
                    t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
                    a = "decltype\\(auto\\)",
                    r = "[a-zA-Z_]\\w*::",
                    i =
                      "(?!struct)(decltype\\(auto\\)|" +
                      n.optional(r) +
                      "[a-zA-Z_]\\w*" +
                      n.optional("<[^<>]+>") +
                      ")",
                    s = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
                    u = {
                      className: "string",
                      variants: [
                        {
                          begin: '(u8?|U|L)?"',
                          end: '"',
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE],
                        },
                        {
                          begin:
                            "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                          end: "'",
                          illegal: ".",
                        },
                        e.END_SAME_AS_BEGIN({
                          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                          end: /\)([^()\\ ]{0,16})"/,
                        }),
                      ],
                    },
                    o = {
                      className: "number",
                      variants: [
                        { begin: "\\b(0b[01']+)" },
                        {
                          begin:
                            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
                        },
                        {
                          begin:
                            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                        },
                      ],
                      relevance: 0,
                    },
                    c = {
                      className: "meta",
                      begin: /#\s*[a-z]+\b/,
                      end: /$/,
                      keywords: {
                        keyword:
                          "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
                      },
                      contains: [
                        { begin: /\\\n/, relevance: 0 },
                        e.inherit(u, { className: "string" }),
                        { className: "string", begin: /<.*?>/ },
                        t,
                        e.C_BLOCK_COMMENT_MODE,
                      ],
                    },
                    l = {
                      className: "title",
                      begin: n.optional(r) + e.IDENT_RE,
                      relevance: 0,
                    },
                    d = n.optional(r) + e.IDENT_RE + "\\s*\\(",
                    g = {
                      type: [
                        "bool",
                        "char",
                        "char16_t",
                        "char32_t",
                        "char8_t",
                        "double",
                        "float",
                        "int",
                        "long",
                        "short",
                        "void",
                        "wchar_t",
                        "unsigned",
                        "signed",
                        "const",
                        "static",
                      ],
                      keyword: [
                        "alignas",
                        "alignof",
                        "and",
                        "and_eq",
                        "asm",
                        "atomic_cancel",
                        "atomic_commit",
                        "atomic_noexcept",
                        "auto",
                        "bitand",
                        "bitor",
                        "break",
                        "case",
                        "catch",
                        "class",
                        "co_await",
                        "co_return",
                        "co_yield",
                        "compl",
                        "concept",
                        "const_cast|10",
                        "consteval",
                        "constexpr",
                        "constinit",
                        "continue",
                        "decltype",
                        "default",
                        "delete",
                        "do",
                        "dynamic_cast|10",
                        "else",
                        "enum",
                        "explicit",
                        "export",
                        "extern",
                        "false",
                        "final",
                        "for",
                        "friend",
                        "goto",
                        "if",
                        "import",
                        "inline",
                        "module",
                        "mutable",
                        "namespace",
                        "new",
                        "noexcept",
                        "not",
                        "not_eq",
                        "nullptr",
                        "operator",
                        "or",
                        "or_eq",
                        "override",
                        "private",
                        "protected",
                        "public",
                        "reflexpr",
                        "register",
                        "reinterpret_cast|10",
                        "requires",
                        "return",
                        "sizeof",
                        "static_assert",
                        "static_cast|10",
                        "struct",
                        "switch",
                        "synchronized",
                        "template",
                        "this",
                        "thread_local",
                        "throw",
                        "transaction_safe",
                        "transaction_safe_dynamic",
                        "true",
                        "try",
                        "typedef",
                        "typeid",
                        "typename",
                        "union",
                        "using",
                        "virtual",
                        "volatile",
                        "while",
                        "xor",
                        "xor_eq",
                      ],
                      literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                      built_in: ["_Pragma"],
                      _type_hints: [
                        "any",
                        "auto_ptr",
                        "barrier",
                        "binary_semaphore",
                        "bitset",
                        "complex",
                        "condition_variable",
                        "condition_variable_any",
                        "counting_semaphore",
                        "deque",
                        "false_type",
                        "future",
                        "imaginary",
                        "initializer_list",
                        "istringstream",
                        "jthread",
                        "latch",
                        "lock_guard",
                        "multimap",
                        "multiset",
                        "mutex",
                        "optional",
                        "ostringstream",
                        "packaged_task",
                        "pair",
                        "promise",
                        "priority_queue",
                        "queue",
                        "recursive_mutex",
                        "recursive_timed_mutex",
                        "scoped_lock",
                        "set",
                        "shared_future",
                        "shared_lock",
                        "shared_mutex",
                        "shared_timed_mutex",
                        "shared_ptr",
                        "stack",
                        "string_view",
                        "stringstream",
                        "timed_mutex",
                        "thread",
                        "true_type",
                        "tuple",
                        "unique_lock",
                        "unique_ptr",
                        "unordered_map",
                        "unordered_multimap",
                        "unordered_multiset",
                        "unordered_set",
                        "variant",
                        "vector",
                        "weak_ptr",
                        "wstring",
                        "wstring_view",
                      ],
                    },
                    D = {
                      className: "function.dispatch",
                      relevance: 0,
                      keywords: {
                        _hint: [
                          "abort",
                          "abs",
                          "acos",
                          "apply",
                          "as_const",
                          "asin",
                          "atan",
                          "atan2",
                          "calloc",
                          "ceil",
                          "cerr",
                          "cin",
                          "clog",
                          "cos",
                          "cosh",
                          "cout",
                          "declval",
                          "endl",
                          "exchange",
                          "exit",
                          "exp",
                          "fabs",
                          "floor",
                          "fmod",
                          "forward",
                          "fprintf",
                          "fputs",
                          "free",
                          "frexp",
                          "fscanf",
                          "future",
                          "invoke",
                          "isalnum",
                          "isalpha",
                          "iscntrl",
                          "isdigit",
                          "isgraph",
                          "islower",
                          "isprint",
                          "ispunct",
                          "isspace",
                          "isupper",
                          "isxdigit",
                          "labs",
                          "launder",
                          "ldexp",
                          "log",
                          "log10",
                          "make_pair",
                          "make_shared",
                          "make_shared_for_overwrite",
                          "make_tuple",
                          "make_unique",
                          "malloc",
                          "memchr",
                          "memcmp",
                          "memcpy",
                          "memset",
                          "modf",
                          "move",
                          "pow",
                          "printf",
                          "putchar",
                          "puts",
                          "realloc",
                          "scanf",
                          "sin",
                          "sinh",
                          "snprintf",
                          "sprintf",
                          "sqrt",
                          "sscanf",
                          "std",
                          "stderr",
                          "stdin",
                          "stdout",
                          "strcat",
                          "strchr",
                          "strcmp",
                          "strcpy",
                          "strcspn",
                          "strlen",
                          "strncat",
                          "strncmp",
                          "strncpy",
                          "strpbrk",
                          "strrchr",
                          "strspn",
                          "strstr",
                          "swap",
                          "tan",
                          "tanh",
                          "terminate",
                          "to_underlying",
                          "tolower",
                          "toupper",
                          "vfprintf",
                          "visit",
                          "vprintf",
                          "vsprintf",
                        ],
                      },
                      begin: n.concat(
                        /\b/,
                        /(?!decltype)/,
                        /(?!if)/,
                        /(?!for)/,
                        /(?!switch)/,
                        /(?!while)/,
                        e.IDENT_RE,
                        n.lookahead(/(<[^<>]+>|)\s*\(/)
                      ),
                    },
                    b = [D, c, s, t, e.C_BLOCK_COMMENT_MODE, o, u],
                    m = {
                      variants: [
                        { begin: /=/, end: /;/ },
                        { begin: /\(/, end: /\)/ },
                        { beginKeywords: "new throw return else", end: /;/ },
                      ],
                      keywords: g,
                      contains: b.concat([
                        {
                          begin: /\(/,
                          end: /\)/,
                          keywords: g,
                          contains: b.concat(["self"]),
                          relevance: 0,
                        },
                      ]),
                      relevance: 0,
                    },
                    p = {
                      className: "function",
                      begin: "(" + i + "[\\*&\\s]+)+" + d,
                      returnBegin: !0,
                      end: /[{;=]/,
                      excludeEnd: !0,
                      keywords: g,
                      illegal: /[^\w\s\*&:<>.]/,
                      contains: [
                        { begin: a, keywords: g, relevance: 0 },
                        {
                          begin: d,
                          returnBegin: !0,
                          contains: [l],
                          relevance: 0,
                        },
                        { begin: /::/, relevance: 0 },
                        { begin: /:/, endsWithParent: !0, contains: [u, o] },
                        { relevance: 0, match: /,/ },
                        {
                          className: "params",
                          begin: /\(/,
                          end: /\)/,
                          keywords: g,
                          relevance: 0,
                          contains: [
                            t,
                            e.C_BLOCK_COMMENT_MODE,
                            u,
                            o,
                            s,
                            {
                              begin: /\(/,
                              end: /\)/,
                              keywords: g,
                              relevance: 0,
                              contains: [
                                "self",
                                t,
                                e.C_BLOCK_COMMENT_MODE,
                                u,
                                o,
                                s,
                              ],
                            },
                          ],
                        },
                        s,
                        t,
                        e.C_BLOCK_COMMENT_MODE,
                        c,
                      ],
                    };
                  return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                    keywords: g,
                    illegal: "</",
                    classNameAliases: { "function.dispatch": "built_in" },
                    contains: [].concat(m, p, D, b, [
                      c,
                      {
                        begin:
                          "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                        end: ">",
                        keywords: g,
                        contains: ["self", s],
                      },
                      { begin: e.IDENT_RE + "::", keywords: g },
                      {
                        match: [
                          /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                          /\s+/,
                          /\w+/,
                        ],
                        className: { 1: "keyword", 3: "title.class" },
                      },
                    ]),
                  };
                },
                grmr_css: function (e) {
                  var n = e.regex,
                    t = he(e),
                    a = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
                  return {
                    name: "CSS",
                    case_insensitive: !0,
                    illegal: /[=|'\$]/,
                    keywords: { keyframePosition: "from to" },
                    classNameAliases: { keyframePosition: "selector-tag" },
                    contains: [
                      t.BLOCK_COMMENT,
                      { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
                      t.CSS_NUMBER_MODE,
                      {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/,
                        relevance: 0,
                      },
                      {
                        className: "selector-class",
                        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0,
                      },
                      t.ATTRIBUTE_SELECTOR_MODE,
                      {
                        className: "selector-pseudo",
                        variants: [
                          { begin: ":(" + Ae.join("|") + ")" },
                          { begin: ":(:)?(" + ve.join("|") + ")" },
                        ],
                      },
                      t.CSS_VARIABLE,
                      {
                        className: "attribute",
                        begin: "\\b(" + ye.join("|") + ")\\b",
                      },
                      {
                        begin: /:/,
                        end: /[;}{]/,
                        contains: [
                          t.BLOCK_COMMENT,
                          t.HEXCOLOR,
                          t.IMPORTANT,
                          t.CSS_NUMBER_MODE,
                        ].concat(a, [
                          {
                            begin: /(url|data-uri)\(/,
                            end: /\)/,
                            relevance: 0,
                            keywords: { built_in: "url data-uri" },
                            contains: [
                              {
                                className: "string",
                                begin: /[^)]/,
                                endsWithParent: !0,
                                excludeEnd: !0,
                              },
                            ],
                          },
                          t.FUNCTION_DISPATCH,
                        ]),
                      },
                      {
                        begin: n.lookahead(/@/),
                        end: "[{;]",
                        relevance: 0,
                        illegal: /:/,
                        contains: [
                          { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
                          {
                            begin: /\s/,
                            endsWithParent: !0,
                            excludeEnd: !0,
                            relevance: 0,
                            keywords: {
                              $pattern: /[a-z-]+/,
                              keyword: "and or not only",
                              attribute: Ce.join(" "),
                            },
                            contains: [
                              { begin: /[a-z-]+(?=:)/, className: "attribute" },
                            ].concat(a, [t.CSS_NUMBER_MODE]),
                          },
                        ],
                      },
                      {
                        className: "selector-tag",
                        begin: "\\b(" + _e.join("|") + ")\\b",
                      },
                    ],
                  };
                },
                grmr_coffeescript: function (e) {
                  var n,
                    t = {
                      keyword: Ne.concat([
                        "then",
                        "unless",
                        "until",
                        "loop",
                        "by",
                        "when",
                        "and",
                        "or",
                        "is",
                        "isnt",
                        "not",
                      ]).filter(
                        ((n = ["var", "const", "let", "function", "static"]),
                        function (e) {
                          return !n.includes(e);
                        })
                      ),
                      literal: Be.concat(["yes", "no", "on", "off"]),
                      built_in: Se.concat(["npm", "print"]),
                    },
                    a = "[A-Za-z$_][0-9A-Za-z$_]*",
                    r = {
                      className: "subst",
                      begin: /#\{/,
                      end: /\}/,
                      keywords: t,
                    },
                    i = [
                      e.BINARY_NUMBER_MODE,
                      e.inherit(e.C_NUMBER_MODE, {
                        starts: { end: "(\\s*/)?", relevance: 0 },
                      }),
                      {
                        className: "string",
                        variants: [
                          {
                            begin: /'''/,
                            end: /'''/,
                            contains: [e.BACKSLASH_ESCAPE],
                          },
                          {
                            begin: /'/,
                            end: /'/,
                            contains: [e.BACKSLASH_ESCAPE],
                          },
                          {
                            begin: /"""/,
                            end: /"""/,
                            contains: [e.BACKSLASH_ESCAPE, r],
                          },
                          {
                            begin: /"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE, r],
                          },
                        ],
                      },
                      {
                        className: "regexp",
                        variants: [
                          {
                            begin: "///",
                            end: "///",
                            contains: [r, e.HASH_COMMENT_MODE],
                          },
                          { begin: "//[gim]{0,3}(?=\\W)", relevance: 0 },
                          { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ },
                        ],
                      },
                      { begin: "@" + a },
                      {
                        subLanguage: "javascript",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        variants: [
                          { begin: "```", end: "```" },
                          { begin: "`", end: "`" },
                        ],
                      },
                    ];
                  r.contains = i;
                  var s = e.inherit(e.TITLE_MODE, { begin: a }),
                    u = "(\\(.*\\)\\s*)?\\B[-=]>",
                    o = {
                      className: "params",
                      begin: "\\([^\\(]",
                      returnBegin: !0,
                      contains: [
                        {
                          begin: /\(/,
                          end: /\)/,
                          keywords: t,
                          contains: ["self"].concat(i),
                        },
                      ],
                    },
                    c = {
                      variants: [
                        { match: [/class\s+/, a, /\s+extends\s+/, a] },
                        { match: [/class\s+/, a] },
                      ],
                      scope: { 2: "title.class", 4: "title.class.inherited" },
                      keywords: t,
                    };
                  return {
                    name: "CoffeeScript",
                    aliases: ["coffee", "cson", "iced"],
                    keywords: t,
                    illegal: /\/\*/,
                    contains: [].concat(i, [
                      e.COMMENT("###", "###"),
                      e.HASH_COMMENT_MODE,
                      {
                        className: "function",
                        begin: "^\\s*" + a + "\\s*=\\s*" + u,
                        end: "[-=]>",
                        returnBegin: !0,
                        contains: [s, o],
                      },
                      {
                        begin: /[:\(,=]\s*/,
                        relevance: 0,
                        contains: [
                          {
                            className: "function",
                            begin: u,
                            end: "[-=]>",
                            returnBegin: !0,
                            contains: [o],
                          },
                        ],
                      },
                      c,
                      {
                        begin: a + ":",
                        end: ":",
                        returnBegin: !0,
                        returnEnd: !0,
                        relevance: 0,
                      },
                    ]),
                  };
                },
                grmr_go: function (e) {
                  var n = {
                    keyword: [
                      "break",
                      "case",
                      "chan",
                      "const",
                      "continue",
                      "default",
                      "defer",
                      "else",
                      "fallthrough",
                      "for",
                      "func",
                      "go",
                      "goto",
                      "if",
                      "import",
                      "interface",
                      "map",
                      "package",
                      "range",
                      "return",
                      "select",
                      "struct",
                      "switch",
                      "type",
                      "var",
                    ],
                    type: [
                      "bool",
                      "byte",
                      "complex64",
                      "complex128",
                      "error",
                      "float32",
                      "float64",
                      "int8",
                      "int16",
                      "int32",
                      "int64",
                      "string",
                      "uint8",
                      "uint16",
                      "uint32",
                      "uint64",
                      "int",
                      "uint",
                      "uintptr",
                      "rune",
                    ],
                    literal: ["true", "false", "iota", "nil"],
                    built_in: [
                      "append",
                      "cap",
                      "close",
                      "complex",
                      "copy",
                      "imag",
                      "len",
                      "make",
                      "new",
                      "panic",
                      "print",
                      "println",
                      "real",
                      "recover",
                      "delete",
                    ],
                  };
                  return {
                    name: "Go",
                    aliases: ["golang"],
                    keywords: n,
                    illegal: "</",
                    contains: [
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      {
                        className: "string",
                        variants: [
                          e.QUOTE_STRING_MODE,
                          e.APOS_STRING_MODE,
                          { begin: "`", end: "`" },
                        ],
                      },
                      {
                        className: "number",
                        variants: [
                          { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
                          e.C_NUMBER_MODE,
                        ],
                      },
                      { begin: /:=/ },
                      {
                        className: "function",
                        beginKeywords: "func",
                        end: "\\s*(\\{|$)",
                        excludeEnd: !0,
                        contains: [
                          e.TITLE_MODE,
                          {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            endsParent: !0,
                            keywords: n,
                            illegal: /["']/,
                          },
                        ],
                      },
                    ],
                  };
                },
                grmr_xml: function (e) {
                  var n = e.regex,
                    t = n.concat(
                      /[A-Z_]/,
                      n.optional(/[A-Z0-9_.-]*:/),
                      /[A-Z0-9_.-]*/
                    ),
                    a = {
                      className: "symbol",
                      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/,
                    },
                    r = {
                      begin: /\s/,
                      contains: [
                        {
                          className: "keyword",
                          begin: /#?[a-z_][a-z1-9_-]+/,
                          illegal: /\n/,
                        },
                      ],
                    },
                    i = e.inherit(r, { begin: /\(/, end: /\)/ }),
                    s = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
                    u = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
                    o = {
                      endsWithParent: !0,
                      illegal: /</,
                      relevance: 0,
                      contains: [
                        {
                          className: "attr",
                          begin: /[A-Za-z0-9._:-]+/,
                          relevance: 0,
                        },
                        {
                          begin: /=\s*/,
                          relevance: 0,
                          contains: [
                            {
                              className: "string",
                              endsParent: !0,
                              variants: [
                                { begin: /"/, end: /"/, contains: [a] },
                                { begin: /'/, end: /'/, contains: [a] },
                                { begin: /[^\s"'=<>`]+/ },
                              ],
                            },
                          ],
                        },
                      ],
                    };
                  return {
                    name: "HTML, XML",
                    aliases: [
                      "html",
                      "xhtml",
                      "rss",
                      "atom",
                      "xjb",
                      "xsd",
                      "xsl",
                      "plist",
                      "wsf",
                      "svg",
                    ],
                    case_insensitive: !0,
                    contains: [
                      {
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        relevance: 10,
                        contains: [
                          r,
                          u,
                          s,
                          i,
                          {
                            begin: /\[/,
                            end: /\]/,
                            contains: [
                              {
                                className: "meta",
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [r, i, u, s],
                              },
                            ],
                          },
                        ],
                      },
                      e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
                      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
                      a,
                      {
                        className: "meta",
                        end: /\?>/,
                        variants: [
                          { begin: /<\?xml/, relevance: 10, contains: [u] },
                          { begin: /<\?[a-z][a-z0-9]+/ },
                        ],
                      },
                      {
                        className: "tag",
                        begin: /<style(?=\s|>)/,
                        end: />/,
                        keywords: { name: "style" },
                        contains: [o],
                        starts: {
                          end: /<\/style>/,
                          returnEnd: !0,
                          subLanguage: ["css", "xml"],
                        },
                      },
                      {
                        className: "tag",
                        begin: /<script(?=\s|>)/,
                        end: />/,
                        keywords: { name: "script" },
                        contains: [o],
                        starts: {
                          end: /<\/script>/,
                          returnEnd: !0,
                          subLanguage: ["javascript", "handlebars", "xml"],
                        },
                      },
                      { className: "tag", begin: /<>|<\/>/ },
                      {
                        className: "tag",
                        begin: n.concat(
                          /</,
                          n.lookahead(n.concat(t, n.either(/\/>/, />/, /\s/)))
                        ),
                        end: /\/?>/,
                        contains: [
                          {
                            className: "name",
                            begin: t,
                            relevance: 0,
                            starts: o,
                          },
                        ],
                      },
                      {
                        className: "tag",
                        begin: n.concat(/<\//, n.lookahead(n.concat(t, />/))),
                        contains: [
                          { className: "name", begin: t, relevance: 0 },
                          { begin: />/, relevance: 0, endsParent: !0 },
                        ],
                      },
                    ],
                  };
                },
                grmr_http: function (e) {
                  var n = "HTTP/(2|1\\.[01])",
                    t = {
                      className: "attribute",
                      begin: e.regex.concat(
                        "^",
                        /[A-Za-z][A-Za-z0-9-]*/,
                        "(?=\\:\\s)"
                      ),
                      starts: {
                        contains: [
                          {
                            className: "punctuation",
                            begin: /: /,
                            relevance: 0,
                            starts: { end: "$", relevance: 0 },
                          },
                        ],
                      },
                    },
                    a = [
                      t,
                      {
                        begin: "\\n\\n",
                        starts: { subLanguage: [], endsWithParent: !0 },
                      },
                    ];
                  return {
                    name: "HTTP",
                    aliases: ["https"],
                    illegal: /\S/,
                    contains: [
                      {
                        begin: "^(?=" + n + " \\d{3})",
                        end: /$/,
                        contains: [
                          { className: "meta", begin: n },
                          { className: "number", begin: "\\b\\d{3}\\b" },
                        ],
                        starts: { end: /\b\B/, illegal: /\S/, contains: a },
                      },
                      {
                        begin: "(?=^[A-Z]+ (.*?) " + n + "$)",
                        end: /$/,
                        contains: [
                          {
                            className: "string",
                            begin: " ",
                            end: " ",
                            excludeBegin: !0,
                            excludeEnd: !0,
                          },
                          { className: "meta", begin: n },
                          { className: "keyword", begin: "[A-Z]+" },
                        ],
                        starts: { end: /\b\B/, illegal: /\S/, contains: a },
                      },
                      e.inherit(t, { relevance: 0 }),
                    ],
                  };
                },
                grmr_json: function (e) {
                  var n = {
                    beginKeywords: ["true", "false", "null"].join(" "),
                  };
                  return {
                    name: "JSON",
                    contains: [
                      {
                        className: "attr",
                        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                        relevance: 1.01,
                      },
                      {
                        match: /[{}[\],:]/,
                        className: "punctuation",
                        relevance: 0,
                      },
                      e.QUOTE_STRING_MODE,
                      n,
                      e.C_NUMBER_MODE,
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                    ],
                    illegal: "\\S",
                  };
                },
                grmr_java: function (e) {
                  var n = e.regex,
                    t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
                    a =
                      t +
                      ze(
                        "(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?",
                        /~~~/g,
                        2
                      ),
                    r = {
                      keyword: [
                        "synchronized",
                        "abstract",
                        "private",
                        "var",
                        "static",
                        "if",
                        "const ",
                        "for",
                        "while",
                        "strictfp",
                        "finally",
                        "protected",
                        "import",
                        "native",
                        "final",
                        "void",
                        "enum",
                        "else",
                        "break",
                        "transient",
                        "catch",
                        "instanceof",
                        "volatile",
                        "case",
                        "assert",
                        "package",
                        "default",
                        "public",
                        "try",
                        "switch",
                        "continue",
                        "throws",
                        "protected",
                        "public",
                        "private",
                        "module",
                        "requires",
                        "exports",
                        "do",
                        "sealed",
                      ],
                      literal: ["false", "true", "null"],
                      type: [
                        "char",
                        "boolean",
                        "long",
                        "float",
                        "int",
                        "byte",
                        "short",
                        "double",
                      ],
                      built_in: ["super", "this"],
                    },
                    i = {
                      className: "meta",
                      begin: "@" + t,
                      contains: [
                        { begin: /\(/, end: /\)/, contains: ["self"] },
                      ],
                    },
                    s = {
                      className: "params",
                      begin: /\(/,
                      end: /\)/,
                      keywords: r,
                      relevance: 0,
                      contains: [e.C_BLOCK_COMMENT_MODE],
                      endsParent: !0,
                    };
                  return {
                    name: "Java",
                    aliases: ["jsp"],
                    keywords: r,
                    illegal: /<\/|#/,
                    contains: [
                      e.COMMENT("/\\*\\*", "\\*/", {
                        relevance: 0,
                        contains: [
                          { begin: /\w+@/, relevance: 0 },
                          { className: "doctag", begin: "@[A-Za-z]+" },
                        ],
                      }),
                      {
                        begin: /import java\.[a-z]+\./,
                        keywords: "import",
                        relevance: 2,
                      },
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      {
                        begin: /"""/,
                        end: /"""/,
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                      },
                      e.APOS_STRING_MODE,
                      e.QUOTE_STRING_MODE,
                      {
                        match: [
                          /\b(?:class|interface|enum|extends|implements|new)/,
                          /\s+/,
                          t,
                        ],
                        className: { 1: "keyword", 3: "title.class" },
                      },
                      { match: /non-sealed/, scope: "keyword" },
                      {
                        begin: [n.concat(/(?!else)/, t), /\s+/, t, /\s+/, /=/],
                        className: { 1: "type", 3: "variable", 5: "operator" },
                      },
                      {
                        begin: [/record/, /\s+/, t],
                        className: { 1: "keyword", 3: "title.class" },
                        contains: [
                          s,
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      { beginKeywords: "new throw return else", relevance: 0 },
                      {
                        begin: [
                          "(?:" + a + "\\s+)",
                          e.UNDERSCORE_IDENT_RE,
                          /\s*(?=\()/,
                        ],
                        className: { 2: "title.function" },
                        keywords: r,
                        contains: [
                          {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: r,
                            relevance: 0,
                            contains: [
                              i,
                              e.APOS_STRING_MODE,
                              e.QUOTE_STRING_MODE,
                              Le,
                              e.C_BLOCK_COMMENT_MODE,
                            ],
                          },
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      Le,
                      i,
                    ],
                  };
                },
                grmr_javascript: je,
                grmr_kotlin: function (e) {
                  var n = {
                      keyword:
                        "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                      built_in:
                        "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                      literal: "true false null",
                    },
                    t = {
                      className: "symbol",
                      begin: e.UNDERSCORE_IDENT_RE + "@",
                    },
                    a = {
                      className: "subst",
                      begin: /\$\{/,
                      end: /\}/,
                      contains: [e.C_NUMBER_MODE],
                    },
                    r = {
                      className: "variable",
                      begin: "\\$" + e.UNDERSCORE_IDENT_RE,
                    },
                    i = {
                      className: "string",
                      variants: [
                        { begin: '"""', end: '"""(?=[^"])', contains: [r, a] },
                        {
                          begin: "'",
                          end: "'",
                          illegal: /\n/,
                          contains: [e.BACKSLASH_ESCAPE],
                        },
                        {
                          begin: '"',
                          end: '"',
                          illegal: /\n/,
                          contains: [e.BACKSLASH_ESCAPE, r, a],
                        },
                      ],
                    };
                  a.contains.push(i);
                  var s = {
                      className: "meta",
                      begin:
                        "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
                        e.UNDERSCORE_IDENT_RE +
                        ")?",
                    },
                    u = {
                      className: "meta",
                      begin: "@" + e.UNDERSCORE_IDENT_RE,
                      contains: [
                        {
                          begin: /\(/,
                          end: /\)/,
                          contains: [e.inherit(i, { className: "string" })],
                        },
                      ],
                    },
                    o = Le,
                    c = e.COMMENT("/\\*", "\\*/", {
                      contains: [e.C_BLOCK_COMMENT_MODE],
                    }),
                    l = {
                      variants: [
                        { className: "type", begin: e.UNDERSCORE_IDENT_RE },
                        { begin: /\(/, end: /\)/, contains: [] },
                      ],
                    },
                    d = l;
                  return (
                    (d.variants[1].contains = [l]),
                    (l.variants[1].contains = [d]),
                    {
                      name: "Kotlin",
                      aliases: ["kt", "kts"],
                      keywords: n,
                      contains: [
                        e.COMMENT("/\\*\\*", "\\*/", {
                          relevance: 0,
                          contains: [
                            { className: "doctag", begin: "@[A-Za-z]+" },
                          ],
                        }),
                        e.C_LINE_COMMENT_MODE,
                        c,
                        {
                          className: "keyword",
                          begin: /\b(break|continue|return|this)\b/,
                          starts: {
                            contains: [{ className: "symbol", begin: /@\w+/ }],
                          },
                        },
                        t,
                        s,
                        u,
                        {
                          className: "function",
                          beginKeywords: "fun",
                          end: "[(]|$",
                          returnBegin: !0,
                          excludeEnd: !0,
                          keywords: n,
                          relevance: 5,
                          contains: [
                            {
                              begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                              returnBegin: !0,
                              relevance: 0,
                              contains: [e.UNDERSCORE_TITLE_MODE],
                            },
                            {
                              className: "type",
                              begin: /</,
                              end: />/,
                              keywords: "reified",
                              relevance: 0,
                            },
                            {
                              className: "params",
                              begin: /\(/,
                              end: /\)/,
                              endsParent: !0,
                              keywords: n,
                              relevance: 0,
                              contains: [
                                {
                                  begin: /:/,
                                  end: /[=,\/]/,
                                  endsWithParent: !0,
                                  contains: [l, e.C_LINE_COMMENT_MODE, c],
                                  relevance: 0,
                                },
                                e.C_LINE_COMMENT_MODE,
                                c,
                                s,
                                u,
                                i,
                                e.C_NUMBER_MODE,
                              ],
                            },
                            c,
                          ],
                        },
                        {
                          className: "class",
                          beginKeywords: "class interface trait",
                          end: /[:\{(]|$/,
                          excludeEnd: !0,
                          illegal: "extends implements",
                          contains: [
                            {
                              beginKeywords:
                                "public protected internal private constructor",
                            },
                            e.UNDERSCORE_TITLE_MODE,
                            {
                              className: "type",
                              begin: /</,
                              end: />/,
                              excludeBegin: !0,
                              excludeEnd: !0,
                              relevance: 0,
                            },
                            {
                              className: "type",
                              begin: /[,:]\s*/,
                              end: /[<\(,]|$/,
                              excludeBegin: !0,
                              returnEnd: !0,
                            },
                            s,
                            u,
                          ],
                        },
                        i,
                        {
                          className: "meta",
                          begin: "^#!/usr/bin/env",
                          end: "$",
                          illegal: "\n",
                        },
                        o,
                      ],
                    }
                  );
                },
                grmr_less: function (e) {
                  var n = he(e),
                    t = Fe,
                    a = "([\\w-]+|@\\{[\\w-]+\\})",
                    r = [],
                    i = [],
                    s = function (e) {
                      return {
                        className: "string",
                        begin: "~?" + e + ".*?" + e,
                      };
                    },
                    u = function (e, n, t) {
                      return { className: e, begin: n, relevance: t };
                    },
                    o = {
                      $pattern: /[a-z-]+/,
                      keyword: "and or not only",
                      attribute: Ce.join(" "),
                    },
                    c = {
                      begin: "\\(",
                      end: "\\)",
                      contains: i,
                      keywords: o,
                      relevance: 0,
                    };
                  i.push(
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    s("'"),
                    s('"'),
                    n.CSS_NUMBER_MODE,
                    {
                      begin: "(url|data-uri)\\(",
                      starts: {
                        className: "string",
                        end: "[\\)\\n]",
                        excludeEnd: !0,
                      },
                    },
                    n.HEXCOLOR,
                    c,
                    u("variable", "@@?[\\w-]+", 10),
                    u("variable", "@\\{[\\w-]+\\}"),
                    u("built_in", "~?`[^`]*?`"),
                    {
                      className: "attribute",
                      begin: "[\\w-]+\\s*:",
                      end: ":",
                      returnBegin: !0,
                      excludeEnd: !0,
                    },
                    n.IMPORTANT
                  );
                  var l = i.concat({ begin: /\{/, end: /\}/, contains: r }),
                    d = {
                      beginKeywords: "when",
                      endsWithParent: !0,
                      contains: [{ beginKeywords: "and not" }].concat(i),
                    },
                    g = {
                      begin: a + "\\s*:",
                      returnBegin: !0,
                      end: /[;}]/,
                      relevance: 0,
                      contains: [
                        { begin: /-(webkit|moz|ms|o)-/ },
                        n.CSS_VARIABLE,
                        {
                          className: "attribute",
                          begin: "\\b(" + ye.join("|") + ")\\b",
                          end: /(?=:)/,
                          starts: {
                            endsWithParent: !0,
                            illegal: "[<=$]",
                            relevance: 0,
                            contains: i,
                          },
                        },
                      ],
                    },
                    D = {
                      className: "keyword",
                      begin:
                        "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                      starts: {
                        end: "[;{}]",
                        keywords: o,
                        returnEnd: !0,
                        contains: i,
                        relevance: 0,
                      },
                    },
                    b = {
                      className: "variable",
                      variants: [
                        { begin: "@[\\w-]+\\s*:", relevance: 15 },
                        { begin: "@[\\w-]+" },
                      ],
                      starts: { end: "[;}]", returnEnd: !0, contains: l },
                    },
                    m = {
                      variants: [
                        { begin: "[\\.#:&\\[>]", end: "[;{}]" },
                        { begin: a, end: /\{/ },
                      ],
                      returnBegin: !0,
                      returnEnd: !0,
                      illegal: "[<='$\"]",
                      relevance: 0,
                      contains: [
                        e.C_LINE_COMMENT_MODE,
                        e.C_BLOCK_COMMENT_MODE,
                        d,
                        u("keyword", "all\\b"),
                        u("variable", "@\\{[\\w-]+\\}"),
                        {
                          begin: "\\b(" + _e.join("|") + ")\\b",
                          className: "selector-tag",
                        },
                        n.CSS_NUMBER_MODE,
                        u("selector-tag", a, 0),
                        u("selector-id", "#" + a),
                        u("selector-class", "\\." + a, 0),
                        u("selector-tag", "&", 0),
                        n.ATTRIBUTE_SELECTOR_MODE,
                        {
                          className: "selector-pseudo",
                          begin: ":(" + Ae.join("|") + ")",
                        },
                        {
                          className: "selector-pseudo",
                          begin: ":(:)?(" + ve.join("|") + ")",
                        },
                        { begin: /\(/, end: /\)/, relevance: 0, contains: l },
                        { begin: "!important" },
                        n.FUNCTION_DISPATCH,
                      ],
                    },
                    p = {
                      begin: "[\\w-]+:(:)?" + "(".concat(t.join("|"), ")"),
                      returnBegin: !0,
                      contains: [m],
                    };
                  return (
                    r.push(
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      D,
                      b,
                      p,
                      g,
                      m
                    ),
                    {
                      name: "Less",
                      case_insensitive: !0,
                      illegal: "[=>'/<($\"]",
                      contains: r,
                    }
                  );
                },
                grmr_lua: function (e) {
                  var n = "\\[=*\\[",
                    t = "\\]=*\\]",
                    a = { begin: n, end: t, contains: ["self"] },
                    r = [
                      e.COMMENT("--(?!\\[=*\\[)", "$"),
                      e.COMMENT("--\\[=*\\[", t, {
                        contains: [a],
                        relevance: 10,
                      }),
                    ];
                  return {
                    name: "Lua",
                    keywords: {
                      $pattern: e.UNDERSCORE_IDENT_RE,
                      literal: "true false nil",
                      keyword:
                        "and break do else elseif end for goto if in local not or repeat return then until while",
                      built_in:
                        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
                    },
                    contains: r.concat([
                      {
                        className: "function",
                        beginKeywords: "function",
                        end: "\\)",
                        contains: [
                          e.inherit(e.TITLE_MODE, {
                            begin:
                              "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
                          }),
                          {
                            className: "params",
                            begin: "\\(",
                            endsWithParent: !0,
                            contains: r,
                          },
                        ].concat(r),
                      },
                      e.C_NUMBER_MODE,
                      e.APOS_STRING_MODE,
                      e.QUOTE_STRING_MODE,
                      {
                        className: "string",
                        begin: n,
                        end: t,
                        contains: [a],
                        relevance: 5,
                      },
                    ]),
                  };
                },
                grmr_makefile: function (e) {
                  var n = {
                      className: "variable",
                      variants: [
                        {
                          begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                          contains: [e.BACKSLASH_ESCAPE],
                        },
                        { begin: /\$[@%<?\^\+\*]/ },
                      ],
                    },
                    t = {
                      className: "string",
                      begin: /"/,
                      end: /"/,
                      contains: [e.BACKSLASH_ESCAPE, n],
                    },
                    a = {
                      className: "variable",
                      begin: /\$\([\w-]+\s/,
                      end: /\)/,
                      keywords: {
                        built_in:
                          "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
                      },
                      contains: [n],
                    },
                    r = {
                      begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)",
                    },
                    i = {
                      className: "section",
                      begin: /^[^\s]+:/,
                      end: /$/,
                      contains: [n],
                    };
                  return {
                    name: "Makefile",
                    aliases: ["mk", "mak", "make"],
                    keywords: {
                      $pattern: /[\w-]+/,
                      keyword:
                        "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
                    },
                    contains: [
                      e.HASH_COMMENT_MODE,
                      n,
                      t,
                      a,
                      r,
                      {
                        className: "meta",
                        begin: /^\.PHONY:/,
                        end: /$/,
                        keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
                      },
                      i,
                    ],
                  };
                },
                grmr_markdown: function (e) {
                  var n = {
                      begin: /<\/?[A-Za-z_]/,
                      end: ">",
                      subLanguage: "xml",
                      relevance: 0,
                    },
                    t = {
                      variants: [
                        { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
                        {
                          begin:
                            /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                          relevance: 2,
                        },
                        {
                          begin: e.regex.concat(
                            /\[.+?\]\(/,
                            /[A-Za-z][A-Za-z0-9+.-]*/,
                            /:\/\/.*?\)/
                          ),
                          relevance: 2,
                        },
                        { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
                        { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
                      ],
                      returnBegin: !0,
                      contains: [
                        { match: /\[(?=\])/ },
                        {
                          className: "string",
                          relevance: 0,
                          begin: "\\[",
                          end: "\\]",
                          excludeBegin: !0,
                          returnEnd: !0,
                        },
                        {
                          className: "link",
                          relevance: 0,
                          begin: "\\]\\(",
                          end: "\\)",
                          excludeBegin: !0,
                          excludeEnd: !0,
                        },
                        {
                          className: "symbol",
                          relevance: 0,
                          begin: "\\]\\[",
                          end: "\\]",
                          excludeBegin: !0,
                          excludeEnd: !0,
                        },
                      ],
                    },
                    a = {
                      className: "strong",
                      contains: [],
                      variants: [
                        { begin: /_{2}/, end: /_{2}/ },
                        { begin: /\*{2}/, end: /\*{2}/ },
                      ],
                    },
                    r = {
                      className: "emphasis",
                      contains: [],
                      variants: [
                        { begin: /\*(?!\*)/, end: /\*/ },
                        { begin: /_(?!_)/, end: /_/, relevance: 0 },
                      ],
                    },
                    i = e.inherit(a, { contains: [] }),
                    s = e.inherit(r, { contains: [] });
                  a.contains.push(s), r.contains.push(i);
                  var u = [n, t];
                  return (
                    [a, r, i, s].forEach(function (e) {
                      e.contains = e.contains.concat(u);
                    }),
                    {
                      name: "Markdown",
                      aliases: ["md", "mkdown", "mkd"],
                      contains: [
                        {
                          className: "section",
                          variants: [
                            {
                              begin: "^#{1,6}",
                              end: "$",
                              contains: (u = u.concat(a, r)),
                            },
                            {
                              begin: "(?=^.+?\\n[=-]{2,}$)",
                              contains: [
                                { begin: "^[=-]*$" },
                                { begin: "^", end: "\\n", contains: u },
                              ],
                            },
                          ],
                        },
                        n,
                        {
                          className: "bullet",
                          begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                          end: "\\s+",
                          excludeEnd: !0,
                        },
                        a,
                        r,
                        {
                          className: "quote",
                          begin: "^>\\s+",
                          contains: u,
                          end: "$",
                        },
                        {
                          className: "code",
                          variants: [
                            { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
                            { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
                            { begin: "```", end: "```+[ ]*$" },
                            { begin: "~~~", end: "~~~+[ ]*$" },
                            { begin: "`.+?`" },
                            {
                              begin: "(?=^( {4}|\\t))",
                              contains: [
                                { begin: "^( {4}|\\t)", end: "(\\n)$" },
                              ],
                              relevance: 0,
                            },
                          ],
                        },
                        { begin: "^[-\\*]{3,}", end: "$" },
                        t,
                        {
                          begin: /^\[[^\n]+\]:/,
                          returnBegin: !0,
                          contains: [
                            {
                              className: "symbol",
                              begin: /\[/,
                              end: /\]/,
                              excludeBegin: !0,
                              excludeEnd: !0,
                            },
                            {
                              className: "link",
                              begin: /:\s*/,
                              end: /$/,
                              excludeBegin: !0,
                            },
                          ],
                        },
                      ],
                    }
                  );
                },
                grmr_objectivec: function (e) {
                  var n = /[a-zA-Z@][a-zA-Z0-9_]*/,
                    t = {
                      $pattern: n,
                      keyword: [
                        "@interface",
                        "@class",
                        "@protocol",
                        "@implementation",
                      ],
                    };
                  return {
                    name: "Objective-C",
                    aliases: [
                      "mm",
                      "objc",
                      "obj-c",
                      "obj-c++",
                      "objective-c++",
                    ],
                    keywords: {
                      "variable.language": ["this", "super"],
                      $pattern: n,
                      keyword: [
                        "while",
                        "export",
                        "sizeof",
                        "typedef",
                        "const",
                        "struct",
                        "for",
                        "union",
                        "volatile",
                        "static",
                        "mutable",
                        "if",
                        "do",
                        "return",
                        "goto",
                        "enum",
                        "else",
                        "break",
                        "extern",
                        "asm",
                        "case",
                        "default",
                        "register",
                        "explicit",
                        "typename",
                        "switch",
                        "continue",
                        "inline",
                        "readonly",
                        "assign",
                        "readwrite",
                        "self",
                        "@synchronized",
                        "id",
                        "typeof",
                        "nonatomic",
                        "IBOutlet",
                        "IBAction",
                        "strong",
                        "weak",
                        "copy",
                        "in",
                        "out",
                        "inout",
                        "bycopy",
                        "byref",
                        "oneway",
                        "__strong",
                        "__weak",
                        "__block",
                        "__autoreleasing",
                        "@private",
                        "@protected",
                        "@public",
                        "@try",
                        "@property",
                        "@end",
                        "@throw",
                        "@catch",
                        "@finally",
                        "@autoreleasepool",
                        "@synthesize",
                        "@dynamic",
                        "@selector",
                        "@optional",
                        "@required",
                        "@encode",
                        "@package",
                        "@import",
                        "@defs",
                        "@compatibility_alias",
                        "__bridge",
                        "__bridge_transfer",
                        "__bridge_retained",
                        "__bridge_retain",
                        "__covariant",
                        "__contravariant",
                        "__kindof",
                        "_Nonnull",
                        "_Nullable",
                        "_Null_unspecified",
                        "__FUNCTION__",
                        "__PRETTY_FUNCTION__",
                        "__attribute__",
                        "getter",
                        "setter",
                        "retain",
                        "unsafe_unretained",
                        "nonnull",
                        "nullable",
                        "null_unspecified",
                        "null_resettable",
                        "class",
                        "instancetype",
                        "NS_DESIGNATED_INITIALIZER",
                        "NS_UNAVAILABLE",
                        "NS_REQUIRES_SUPER",
                        "NS_RETURNS_INNER_POINTER",
                        "NS_INLINE",
                        "NS_AVAILABLE",
                        "NS_DEPRECATED",
                        "NS_ENUM",
                        "NS_OPTIONS",
                        "NS_SWIFT_UNAVAILABLE",
                        "NS_ASSUME_NONNULL_BEGIN",
                        "NS_ASSUME_NONNULL_END",
                        "NS_REFINED_FOR_SWIFT",
                        "NS_SWIFT_NAME",
                        "NS_SWIFT_NOTHROW",
                        "NS_DURING",
                        "NS_HANDLER",
                        "NS_ENDHANDLER",
                        "NS_VALUERETURN",
                        "NS_VOIDRETURN",
                      ],
                      literal: [
                        "false",
                        "true",
                        "FALSE",
                        "TRUE",
                        "nil",
                        "YES",
                        "NO",
                        "NULL",
                      ],
                      built_in: [
                        "dispatch_once_t",
                        "dispatch_queue_t",
                        "dispatch_sync",
                        "dispatch_async",
                        "dispatch_once",
                      ],
                      type: [
                        "int",
                        "float",
                        "char",
                        "unsigned",
                        "signed",
                        "short",
                        "long",
                        "double",
                        "wchar_t",
                        "unichar",
                        "void",
                        "bool",
                        "BOOL",
                        "id|0",
                        "_Bool",
                      ],
                    },
                    illegal: "</",
                    contains: [
                      {
                        className: "built_in",
                        begin:
                          "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
                      },
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      e.C_NUMBER_MODE,
                      e.QUOTE_STRING_MODE,
                      e.APOS_STRING_MODE,
                      {
                        className: "string",
                        variants: [
                          {
                            begin: '@"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE],
                          },
                        ],
                      },
                      {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {
                          keyword:
                            "if else elif endif define undef warning error line pragma ifdef ifndef include",
                        },
                        contains: [
                          { begin: /\\\n/, relevance: 0 },
                          e.inherit(e.QUOTE_STRING_MODE, {
                            className: "string",
                          }),
                          {
                            className: "string",
                            begin: /<.*?>/,
                            end: /$/,
                            illegal: "\\n",
                          },
                          e.C_LINE_COMMENT_MODE,
                          e.C_BLOCK_COMMENT_MODE,
                        ],
                      },
                      {
                        className: "class",
                        begin: "(" + t.keyword.join("|") + ")\\b",
                        end: /(\{|$)/,
                        excludeEnd: !0,
                        keywords: t,
                        contains: [e.UNDERSCORE_TITLE_MODE],
                      },
                      { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    ],
                  };
                },
                grmr_php: function (e) {
                  var n,
                    t,
                    a = e.regex,
                    r = /(?![A-Za-z0-9])(?![$])/,
                    i = a.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, r),
                    s = a.concat(
                      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
                      r
                    ),
                    u = { scope: "variable", match: "\\$+" + i },
                    o = {
                      scope: "subst",
                      variants: [
                        { begin: /\$\w+/ },
                        { begin: /\{\$/, end: /\}/ },
                      ],
                    },
                    c = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
                    l = "[ \t\n]",
                    d = {
                      scope: "string",
                      variants: [
                        e.inherit(e.QUOTE_STRING_MODE, {
                          illegal: null,
                          contains: e.QUOTE_STRING_MODE.contains.concat(o),
                        }),
                        c,
                        e.END_SAME_AS_BEGIN({
                          begin: /<<<[ \t]*(\w+)\n/,
                          end: /[ \t]*(\w+)\b/,
                          contains: e.QUOTE_STRING_MODE.contains.concat(o),
                        }),
                      ],
                    },
                    g = {
                      scope: "number",
                      variants: [
                        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
                        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
                        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
                        {
                          begin:
                            "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?",
                        },
                      ],
                      relevance: 0,
                    },
                    D = ["false", "null", "true"],
                    b = [
                      "__CLASS__",
                      "__DIR__",
                      "__FILE__",
                      "__FUNCTION__",
                      "__COMPILER_HALT_OFFSET__",
                      "__LINE__",
                      "__METHOD__",
                      "__NAMESPACE__",
                      "__TRAIT__",
                      "die",
                      "echo",
                      "exit",
                      "include",
                      "include_once",
                      "print",
                      "require",
                      "require_once",
                      "array",
                      "abstract",
                      "and",
                      "as",
                      "binary",
                      "bool",
                      "boolean",
                      "break",
                      "callable",
                      "case",
                      "catch",
                      "class",
                      "clone",
                      "const",
                      "continue",
                      "declare",
                      "default",
                      "do",
                      "double",
                      "else",
                      "elseif",
                      "empty",
                      "enddeclare",
                      "endfor",
                      "endforeach",
                      "endif",
                      "endswitch",
                      "endwhile",
                      "enum",
                      "eval",
                      "extends",
                      "final",
                      "finally",
                      "float",
                      "for",
                      "foreach",
                      "from",
                      "global",
                      "goto",
                      "if",
                      "implements",
                      "instanceof",
                      "insteadof",
                      "int",
                      "integer",
                      "interface",
                      "isset",
                      "iterable",
                      "list",
                      "match|0",
                      "mixed",
                      "new",
                      "never",
                      "object",
                      "or",
                      "private",
                      "protected",
                      "public",
                      "readonly",
                      "real",
                      "return",
                      "string",
                      "switch",
                      "throw",
                      "trait",
                      "try",
                      "unset",
                      "use",
                      "var",
                      "void",
                      "while",
                      "xor",
                      "yield",
                    ],
                    m = [
                      "Error|0",
                      "AppendIterator",
                      "ArgumentCountError",
                      "ArithmeticError",
                      "ArrayIterator",
                      "ArrayObject",
                      "AssertionError",
                      "BadFunctionCallException",
                      "BadMethodCallException",
                      "CachingIterator",
                      "CallbackFilterIterator",
                      "CompileError",
                      "Countable",
                      "DirectoryIterator",
                      "DivisionByZeroError",
                      "DomainException",
                      "EmptyIterator",
                      "ErrorException",
                      "Exception",
                      "FilesystemIterator",
                      "FilterIterator",
                      "GlobIterator",
                      "InfiniteIterator",
                      "InvalidArgumentException",
                      "IteratorIterator",
                      "LengthException",
                      "LimitIterator",
                      "LogicException",
                      "MultipleIterator",
                      "NoRewindIterator",
                      "OutOfBoundsException",
                      "OutOfRangeException",
                      "OuterIterator",
                      "OverflowException",
                      "ParentIterator",
                      "ParseError",
                      "RangeException",
                      "RecursiveArrayIterator",
                      "RecursiveCachingIterator",
                      "RecursiveCallbackFilterIterator",
                      "RecursiveDirectoryIterator",
                      "RecursiveFilterIterator",
                      "RecursiveIterator",
                      "RecursiveIteratorIterator",
                      "RecursiveRegexIterator",
                      "RecursiveTreeIterator",
                      "RegexIterator",
                      "RuntimeException",
                      "SeekableIterator",
                      "SplDoublyLinkedList",
                      "SplFileInfo",
                      "SplFileObject",
                      "SplFixedArray",
                      "SplHeap",
                      "SplMaxHeap",
                      "SplMinHeap",
                      "SplObjectStorage",
                      "SplObserver",
                      "SplPriorityQueue",
                      "SplQueue",
                      "SplStack",
                      "SplSubject",
                      "SplTempFileObject",
                      "TypeError",
                      "UnderflowException",
                      "UnexpectedValueException",
                      "UnhandledMatchError",
                      "ArrayAccess",
                      "BackedEnum",
                      "Closure",
                      "Fiber",
                      "Generator",
                      "Iterator",
                      "IteratorAggregate",
                      "Serializable",
                      "Stringable",
                      "Throwable",
                      "Traversable",
                      "UnitEnum",
                      "WeakReference",
                      "WeakMap",
                      "Directory",
                      "__PHP_Incomplete_Class",
                      "parent",
                      "php_user_filter",
                      "self",
                      "static",
                      "stdClass",
                    ],
                    p = {
                      keyword: b,
                      literal:
                        ((n = D),
                        (t = []),
                        n.forEach(function (e) {
                          t.push(e),
                            e.toLowerCase() === e
                              ? t.push(e.toUpperCase())
                              : t.push(e.toLowerCase());
                        }),
                        t),
                      built_in: m,
                    },
                    E = function (e) {
                      return e.map(function (e) {
                        return e.replace(/\|\d+$/, "");
                      });
                    },
                    f = {
                      variants: [
                        {
                          match: [
                            /new/,
                            a.concat(l, "+"),
                            a.concat("(?!", E(m).join("\\b|"), "\\b)"),
                            s,
                          ],
                          scope: { 1: "keyword", 4: "title.class" },
                        },
                      ],
                    },
                    h = a.concat(i, "\\b(?!\\()"),
                    _ = {
                      variants: [
                        {
                          match: [
                            a.concat(/::/, a.lookahead(/(?!class\b)/)),
                            h,
                          ],
                          scope: { 2: "variable.constant" },
                        },
                        {
                          match: [/::/, /class/],
                          scope: { 2: "variable.language" },
                        },
                        {
                          match: [
                            s,
                            a.concat(/::/, a.lookahead(/(?!class\b)/)),
                            h,
                          ],
                          scope: { 1: "title.class", 3: "variable.constant" },
                        },
                        {
                          match: [
                            s,
                            a.concat("::", a.lookahead(/(?!class\b)/)),
                          ],
                          scope: { 1: "title.class" },
                        },
                        {
                          match: [s, /::/, /class/],
                          scope: { 1: "title.class", 3: "variable.language" },
                        },
                      ],
                    },
                    C = {
                      scope: "attr",
                      match: a.concat(
                        i,
                        a.lookahead(":"),
                        a.lookahead(/(?!::)/)
                      ),
                    },
                    A = {
                      relevance: 0,
                      begin: /\(/,
                      end: /\)/,
                      keywords: p,
                      contains: [C, u, _, e.C_BLOCK_COMMENT_MODE, d, g, f],
                    },
                    v = {
                      relevance: 0,
                      match: [
                        /\b/,
                        a.concat(
                          "(?!fn\\b|function\\b|",
                          E(b).join("\\b|"),
                          "|",
                          E(m).join("\\b|"),
                          "\\b)"
                        ),
                        i,
                        a.concat(l, "*"),
                        a.lookahead(/(?=\()/),
                      ],
                      scope: { 3: "title.function.invoke" },
                      contains: [A],
                    };
                  A.contains.push(v);
                  var y = [C, _, e.C_BLOCK_COMMENT_MODE, d, g, f];
                  return {
                    case_insensitive: !1,
                    keywords: p,
                    contains: [
                      {
                        begin: a.concat(/#\[\s*/, s),
                        beginScope: "meta",
                        end: /]/,
                        endScope: "meta",
                        keywords: { literal: D, keyword: ["new", "array"] },
                        contains: [
                          {
                            begin: /\[/,
                            end: /]/,
                            keywords: { literal: D, keyword: ["new", "array"] },
                            contains: ["self"].concat(y),
                          },
                        ].concat(y, [{ scope: "meta", match: s }]),
                      },
                      e.HASH_COMMENT_MODE,
                      e.COMMENT("//", "$"),
                      e.COMMENT("/\\*", "\\*/", {
                        contains: [{ scope: "doctag", match: "@[A-Za-z]+" }],
                      }),
                      {
                        match: /__halt_compiler\(\);/,
                        keywords: "__halt_compiler",
                        starts: {
                          scope: "comment",
                          end: e.MATCH_NOTHING_RE,
                          contains: [
                            { match: /\?>/, scope: "meta", endsParent: !0 },
                          ],
                        },
                      },
                      {
                        scope: "meta",
                        variants: [
                          { begin: /<\?php/, relevance: 10 },
                          { begin: /<\?=/ },
                          { begin: /<\?/, relevance: 0.1 },
                          { begin: /\?>/ },
                        ],
                      },
                      { scope: "variable.language", match: /\$this\b/ },
                      u,
                      v,
                      _,
                      {
                        match: [/const/, /\s/, i],
                        scope: { 1: "keyword", 3: "variable.constant" },
                      },
                      f,
                      {
                        scope: "function",
                        relevance: 0,
                        beginKeywords: "fn function",
                        end: /[;{]/,
                        excludeEnd: !0,
                        illegal: "[$%\\[]",
                        contains: [
                          { beginKeywords: "use" },
                          e.UNDERSCORE_TITLE_MODE,
                          { begin: "=>", endsParent: !0 },
                          {
                            scope: "params",
                            begin: "\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: p,
                            contains: [
                              "self",
                              u,
                              _,
                              e.C_BLOCK_COMMENT_MODE,
                              d,
                              g,
                            ],
                          },
                        ],
                      },
                      {
                        scope: "class",
                        variants: [
                          { beginKeywords: "enum", illegal: /[($"]/ },
                          {
                            beginKeywords: "class interface trait",
                            illegal: /[:($"]/,
                          },
                        ],
                        relevance: 0,
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [
                          { beginKeywords: "extends implements" },
                          e.UNDERSCORE_TITLE_MODE,
                        ],
                      },
                      {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: ";",
                        illegal: /[.']/,
                        contains: [
                          e.inherit(e.UNDERSCORE_TITLE_MODE, {
                            scope: "title.class",
                          }),
                        ],
                      },
                      {
                        beginKeywords: "use",
                        relevance: 0,
                        end: ";",
                        contains: [
                          {
                            match: /\b(as|const|function)\b/,
                            scope: "keyword",
                          },
                          e.UNDERSCORE_TITLE_MODE,
                        ],
                      },
                      d,
                      g,
                    ],
                  };
                },
                grmr_php_template: function (e) {
                  return {
                    name: "PHP template",
                    subLanguage: "xml",
                    contains: [
                      {
                        begin: /<\?(php|=)?/,
                        end: /\?>/,
                        subLanguage: "php",
                        contains: [
                          { begin: "/\\*", end: "\\*/", skip: !0 },
                          { begin: 'b"', end: '"', skip: !0 },
                          { begin: "b'", end: "'", skip: !0 },
                          e.inherit(e.APOS_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0,
                          }),
                          e.inherit(e.QUOTE_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0,
                          }),
                        ],
                      },
                    ],
                  };
                },
                grmr_perl: function (e) {
                  var n = e.regex,
                    t = /[dualxmsipngr]{0,12}/,
                    a = {
                      $pattern: /[\w.]+/,
                      keyword: [
                        "abs",
                        "accept",
                        "alarm",
                        "and",
                        "atan2",
                        "bind",
                        "binmode",
                        "bless",
                        "break",
                        "caller",
                        "chdir",
                        "chmod",
                        "chomp",
                        "chop",
                        "chown",
                        "chr",
                        "chroot",
                        "close",
                        "closedir",
                        "connect",
                        "continue",
                        "cos",
                        "crypt",
                        "dbmclose",
                        "dbmopen",
                        "defined",
                        "delete",
                        "die",
                        "do",
                        "dump",
                        "each",
                        "else",
                        "elsif",
                        "endgrent",
                        "endhostent",
                        "endnetent",
                        "endprotoent",
                        "endpwent",
                        "endservent",
                        "eof",
                        "eval",
                        "exec",
                        "exists",
                        "exit",
                        "exp",
                        "fcntl",
                        "fileno",
                        "flock",
                        "for",
                        "foreach",
                        "fork",
                        "format",
                        "formline",
                        "getc",
                        "getgrent",
                        "getgrgid",
                        "getgrnam",
                        "gethostbyaddr",
                        "gethostbyname",
                        "gethostent",
                        "getlogin",
                        "getnetbyaddr",
                        "getnetbyname",
                        "getnetent",
                        "getpeername",
                        "getpgrp",
                        "getpriority",
                        "getprotobyname",
                        "getprotobynumber",
                        "getprotoent",
                        "getpwent",
                        "getpwnam",
                        "getpwuid",
                        "getservbyname",
                        "getservbyport",
                        "getservent",
                        "getsockname",
                        "getsockopt",
                        "given",
                        "glob",
                        "gmtime",
                        "goto",
                        "grep",
                        "gt",
                        "hex",
                        "if",
                        "index",
                        "int",
                        "ioctl",
                        "join",
                        "keys",
                        "kill",
                        "last",
                        "lc",
                        "lcfirst",
                        "length",
                        "link",
                        "listen",
                        "local",
                        "localtime",
                        "log",
                        "lstat",
                        "lt",
                        "ma",
                        "map",
                        "mkdir",
                        "msgctl",
                        "msgget",
                        "msgrcv",
                        "msgsnd",
                        "my",
                        "ne",
                        "next",
                        "no",
                        "not",
                        "oct",
                        "open",
                        "opendir",
                        "or",
                        "ord",
                        "our",
                        "pack",
                        "package",
                        "pipe",
                        "pop",
                        "pos",
                        "print",
                        "printf",
                        "prototype",
                        "push",
                        "q|0",
                        "qq",
                        "quotemeta",
                        "qw",
                        "qx",
                        "rand",
                        "read",
                        "readdir",
                        "readline",
                        "readlink",
                        "readpipe",
                        "recv",
                        "redo",
                        "ref",
                        "rename",
                        "require",
                        "reset",
                        "return",
                        "reverse",
                        "rewinddir",
                        "rindex",
                        "rmdir",
                        "say",
                        "scalar",
                        "seek",
                        "seekdir",
                        "select",
                        "semctl",
                        "semget",
                        "semop",
                        "send",
                        "setgrent",
                        "sethostent",
                        "setnetent",
                        "setpgrp",
                        "setpriority",
                        "setprotoent",
                        "setpwent",
                        "setservent",
                        "setsockopt",
                        "shift",
                        "shmctl",
                        "shmget",
                        "shmread",
                        "shmwrite",
                        "shutdown",
                        "sin",
                        "sleep",
                        "socket",
                        "socketpair",
                        "sort",
                        "splice",
                        "split",
                        "sprintf",
                        "sqrt",
                        "srand",
                        "stat",
                        "state",
                        "study",
                        "sub",
                        "substr",
                        "symlink",
                        "syscall",
                        "sysopen",
                        "sysread",
                        "sysseek",
                        "system",
                        "syswrite",
                        "tell",
                        "telldir",
                        "tie",
                        "tied",
                        "time",
                        "times",
                        "tr",
                        "truncate",
                        "uc",
                        "ucfirst",
                        "umask",
                        "undef",
                        "unless",
                        "unlink",
                        "unpack",
                        "unshift",
                        "untie",
                        "until",
                        "use",
                        "utime",
                        "values",
                        "vec",
                        "wait",
                        "waitpid",
                        "wantarray",
                        "warn",
                        "when",
                        "while",
                        "write",
                        "x|0",
                        "xor",
                        "y|0",
                      ].join(" "),
                    },
                    r = {
                      className: "subst",
                      begin: "[$@]\\{",
                      end: "\\}",
                      keywords: a,
                    },
                    i = { begin: /->\{/, end: /\}/ },
                    s = {
                      variants: [
                        { begin: /\$\d/ },
                        {
                          begin: n.concat(
                            /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
                            "(?![A-Za-z])(?![@$%])"
                          ),
                        },
                        { begin: /[$%@][^\s\w{]/, relevance: 0 },
                      ],
                    },
                    u = [e.BACKSLASH_ESCAPE, r, s],
                    o = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
                    c = function (e, a) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "\\1",
                        i = "\\1" === r ? r : n.concat(r, a);
                      return n.concat(
                        n.concat("(?:", e, ")"),
                        a,
                        /(?:\\.|[^\\\/])*?/,
                        i,
                        /(?:\\.|[^\\\/])*?/,
                        r,
                        t
                      );
                    },
                    l = function (e, a, r) {
                      return n.concat(
                        n.concat("(?:", e, ")"),
                        a,
                        /(?:\\.|[^\\\/])*?/,
                        r,
                        t
                      );
                    },
                    d = [
                      s,
                      e.HASH_COMMENT_MODE,
                      e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
                      i,
                      {
                        className: "string",
                        contains: u,
                        variants: [
                          {
                            begin: "q[qwxr]?\\s*\\(",
                            end: "\\)",
                            relevance: 5,
                          },
                          {
                            begin: "q[qwxr]?\\s*\\[",
                            end: "\\]",
                            relevance: 5,
                          },
                          {
                            begin: "q[qwxr]?\\s*\\{",
                            end: "\\}",
                            relevance: 5,
                          },
                          {
                            begin: "q[qwxr]?\\s*\\|",
                            end: "\\|",
                            relevance: 5,
                          },
                          { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
                          { begin: "qw\\s+q", end: "q", relevance: 5 },
                          {
                            begin: "'",
                            end: "'",
                            contains: [e.BACKSLASH_ESCAPE],
                          },
                          { begin: '"', end: '"' },
                          {
                            begin: "`",
                            end: "`",
                            contains: [e.BACKSLASH_ESCAPE],
                          },
                          { begin: /\{\w+\}/, relevance: 0 },
                          { begin: "-?\\w+\\s*=>", relevance: 0 },
                        ],
                      },
                      {
                        className: "number",
                        begin:
                          "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        relevance: 0,
                      },
                      {
                        begin:
                          "(\\/\\/|" +
                          e.RE_STARTERS_RE +
                          "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                        keywords: "split return print reverse grep",
                        relevance: 0,
                        contains: [
                          e.HASH_COMMENT_MODE,
                          {
                            className: "regexp",
                            variants: [
                              {
                                begin: c(
                                  "s|tr|y",
                                  n.either.apply(n, o.concat([{ capture: !0 }]))
                                ),
                              },
                              { begin: c("s|tr|y", "\\(", "\\)") },
                              { begin: c("s|tr|y", "\\[", "\\]") },
                              { begin: c("s|tr|y", "\\{", "\\}") },
                            ],
                            relevance: 2,
                          },
                          {
                            className: "regexp",
                            variants: [
                              { begin: /(m|qr)\/\//, relevance: 0 },
                              { begin: l("(?:m|qr)?", /\//, /\//) },
                              {
                                begin: l(
                                  "m|qr",
                                  n.either.apply(
                                    n,
                                    o.concat([{ capture: !0 }])
                                  ),
                                  /\1/
                                ),
                              },
                              { begin: l("m|qr", /\(/, /\)/) },
                              { begin: l("m|qr", /\[/, /\]/) },
                              { begin: l("m|qr", /\{/, /\}/) },
                            ],
                          },
                        ],
                      },
                      {
                        className: "function",
                        beginKeywords: "sub",
                        end: "(\\s*\\(.*?\\))?[;{]",
                        excludeEnd: !0,
                        relevance: 5,
                        contains: [e.TITLE_MODE],
                      },
                      { begin: "-\\w\\b", relevance: 0 },
                      {
                        begin: "^__DATA__$",
                        end: "^__END__$",
                        subLanguage: "mojolicious",
                        contains: [
                          { begin: "^@@.*", end: "$", className: "comment" },
                        ],
                      },
                    ];
                  return (
                    (r.contains = d),
                    (i.contains = d),
                    {
                      name: "Perl",
                      aliases: ["pl", "pm"],
                      keywords: a,
                      contains: d,
                    }
                  );
                },
                grmr_plaintext: function (e) {
                  return {
                    name: "Plain text",
                    aliases: ["text", "txt"],
                    disableAutodetect: !0,
                  };
                },
                grmr_python: function (e) {
                  var n = e.regex,
                    t =
                      /(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])(?:[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])*/,
                    a = [
                      "and",
                      "as",
                      "assert",
                      "async",
                      "await",
                      "break",
                      "class",
                      "continue",
                      "def",
                      "del",
                      "elif",
                      "else",
                      "except",
                      "finally",
                      "for",
                      "from",
                      "global",
                      "if",
                      "import",
                      "in",
                      "is",
                      "lambda",
                      "nonlocal|10",
                      "not",
                      "or",
                      "pass",
                      "raise",
                      "return",
                      "try",
                      "while",
                      "with",
                      "yield",
                    ],
                    r = {
                      $pattern: /[A-Za-z]\w+|__\w+__/,
                      keyword: a,
                      built_in: [
                        "__import__",
                        "abs",
                        "all",
                        "any",
                        "ascii",
                        "bin",
                        "bool",
                        "breakpoint",
                        "bytearray",
                        "bytes",
                        "callable",
                        "chr",
                        "classmethod",
                        "compile",
                        "complex",
                        "delattr",
                        "dict",
                        "dir",
                        "divmod",
                        "enumerate",
                        "eval",
                        "exec",
                        "filter",
                        "float",
                        "format",
                        "frozenset",
                        "getattr",
                        "globals",
                        "hasattr",
                        "hash",
                        "help",
                        "hex",
                        "id",
                        "input",
                        "int",
                        "isinstance",
                        "issubclass",
                        "iter",
                        "len",
                        "list",
                        "locals",
                        "map",
                        "max",
                        "memoryview",
                        "min",
                        "next",
                        "object",
                        "oct",
                        "open",
                        "ord",
                        "pow",
                        "print",
                        "property",
                        "range",
                        "repr",
                        "reversed",
                        "round",
                        "set",
                        "setattr",
                        "slice",
                        "sorted",
                        "staticmethod",
                        "str",
                        "sum",
                        "super",
                        "tuple",
                        "type",
                        "vars",
                        "zip",
                      ],
                      literal: [
                        "__debug__",
                        "Ellipsis",
                        "False",
                        "None",
                        "NotImplemented",
                        "True",
                      ],
                      type: [
                        "Any",
                        "Callable",
                        "Coroutine",
                        "Dict",
                        "List",
                        "Literal",
                        "Generic",
                        "Optional",
                        "Sequence",
                        "Set",
                        "Tuple",
                        "Type",
                        "Union",
                      ],
                    },
                    i = { className: "meta", begin: /^(>>>|\.\.\.) / },
                    s = {
                      className: "subst",
                      begin: /\{/,
                      end: /\}/,
                      keywords: r,
                      illegal: /#/,
                    },
                    u = { begin: /\{\{/, relevance: 0 },
                    o = {
                      className: "string",
                      contains: [e.BACKSLASH_ESCAPE],
                      variants: [
                        {
                          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                          end: /'''/,
                          contains: [e.BACKSLASH_ESCAPE, i],
                          relevance: 10,
                        },
                        {
                          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                          end: /"""/,
                          contains: [e.BACKSLASH_ESCAPE, i],
                          relevance: 10,
                        },
                        {
                          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                          end: /'''/,
                          contains: [e.BACKSLASH_ESCAPE, i, u, s],
                        },
                        {
                          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                          end: /"""/,
                          contains: [e.BACKSLASH_ESCAPE, i, u, s],
                        },
                        { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
                        { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
                        { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
                        { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
                        {
                          begin: /([fF][rR]|[rR][fF]|[fF])'/,
                          end: /'/,
                          contains: [e.BACKSLASH_ESCAPE, u, s],
                        },
                        {
                          begin: /([fF][rR]|[rR][fF]|[fF])"/,
                          end: /"/,
                          contains: [e.BACKSLASH_ESCAPE, u, s],
                        },
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                      ],
                    },
                    c = "[0-9](_?[0-9])*",
                    l = "(\\b("
                      .concat(c, "))?\\.(")
                      .concat(c, ")|\\b(")
                      .concat(c, ")\\."),
                    d = "\\b|".concat(a.join("|")),
                    g = {
                      className: "number",
                      relevance: 0,
                      variants: [
                        {
                          begin: "(\\b("
                            .concat(c, ")|(")
                            .concat(l, "))[eE][+-]?(")
                            .concat(c, ")[jJ]?(?=")
                            .concat(d, ")"),
                        },
                        { begin: "(".concat(l, ")[jJ]?") },
                        {
                          begin:
                            "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=".concat(
                              d,
                              ")"
                            ),
                        },
                        { begin: "\\b0[bB](_?[01])+[lL]?(?=".concat(d, ")") },
                        { begin: "\\b0[oO](_?[0-7])+[lL]?(?=".concat(d, ")") },
                        {
                          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=".concat(
                            d,
                            ")"
                          ),
                        },
                        { begin: "\\b(".concat(c, ")[jJ](?=").concat(d, ")") },
                      ],
                    },
                    D = {
                      className: "comment",
                      begin: n.lookahead(/# type:/),
                      end: /$/,
                      keywords: r,
                      contains: [
                        { begin: /# type:/ },
                        { begin: /#/, end: /\b\B/, endsWithParent: !0 },
                      ],
                    },
                    b = {
                      className: "params",
                      variants: [
                        { className: "", begin: /\(\s*\)/, skip: !0 },
                        {
                          begin: /\(/,
                          end: /\)/,
                          excludeBegin: !0,
                          excludeEnd: !0,
                          keywords: r,
                          contains: ["self", i, g, o, e.HASH_COMMENT_MODE],
                        },
                      ],
                    };
                  return (
                    (s.contains = [o, g, i]),
                    {
                      name: "Python",
                      aliases: ["py", "gyp", "ipython"],
                      unicodeRegex: !0,
                      keywords: r,
                      illegal: /(<\/|->|\?)|=>/,
                      contains: [
                        i,
                        g,
                        { begin: /\bself\b/ },
                        { beginKeywords: "if", relevance: 0 },
                        o,
                        D,
                        e.HASH_COMMENT_MODE,
                        {
                          match: [/\bdef/, /\s+/, t],
                          scope: { 1: "keyword", 3: "title.function" },
                          contains: [b],
                        },
                        {
                          variants: [
                            {
                              match: [
                                /\bclass/,
                                /\s+/,
                                t,
                                /\s*/,
                                /\(\s*/,
                                t,
                                /\s*\)/,
                              ],
                            },
                            { match: [/\bclass/, /\s+/, t] },
                          ],
                          scope: {
                            1: "keyword",
                            3: "title.class",
                            6: "title.class.inherited",
                          },
                        },
                        {
                          className: "meta",
                          begin: /^[\t ]*@/,
                          end: /(?=#)|$/,
                          contains: [g, b, o],
                        },
                      ],
                    }
                  );
                },
                grmr_ruby: function (e) {
                  var n = e.regex,
                    t =
                      "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
                    a = n.either(
                      /\b([A-Z]+[a-z0-9]+)+/,
                      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
                    ),
                    r = n.concat(a, /(::\w+)*/),
                    i = {
                      "variable.constant": ["__FILE__", "__LINE__"],
                      "variable.language": ["self", "super"],
                      keyword: [
                        "alias",
                        "and",
                        "attr_accessor",
                        "attr_reader",
                        "attr_writer",
                        "begin",
                        "BEGIN",
                        "break",
                        "case",
                        "class",
                        "defined",
                        "do",
                        "else",
                        "elsif",
                        "end",
                        "END",
                        "ensure",
                        "for",
                        "if",
                        "in",
                        "include",
                        "module",
                        "next",
                        "not",
                        "or",
                        "redo",
                        "require",
                        "rescue",
                        "retry",
                        "return",
                        "then",
                        "undef",
                        "unless",
                        "until",
                        "when",
                        "while",
                        "yield",
                      ],
                      built_in: ["proc", "lambda"],
                      literal: ["true", "false", "nil"],
                    },
                    s = { className: "doctag", begin: "@[A-Za-z]+" },
                    u = { begin: "#<", end: ">" },
                    o = [
                      e.COMMENT("#", "$", { contains: [s] }),
                      e.COMMENT("^=begin", "^=end", {
                        contains: [s],
                        relevance: 10,
                      }),
                      e.COMMENT("^__END__", e.MATCH_NOTHING_RE),
                    ],
                    c = {
                      className: "subst",
                      begin: /#\{/,
                      end: /\}/,
                      keywords: i,
                    },
                    l = {
                      className: "string",
                      contains: [e.BACKSLASH_ESCAPE, c],
                      variants: [
                        { begin: /'/, end: /'/ },
                        { begin: /"/, end: /"/ },
                        { begin: /`/, end: /`/ },
                        { begin: /%[qQwWx]?\(/, end: /\)/ },
                        { begin: /%[qQwWx]?\[/, end: /\]/ },
                        { begin: /%[qQwWx]?\{/, end: /\}/ },
                        { begin: /%[qQwWx]?</, end: />/ },
                        { begin: /%[qQwWx]?\//, end: /\// },
                        { begin: /%[qQwWx]?%/, end: /%/ },
                        { begin: /%[qQwWx]?-/, end: /-/ },
                        { begin: /%[qQwWx]?\|/, end: /\|/ },
                        { begin: /\B\?(\\\d{1,3})/ },
                        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
                        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
                        {
                          begin:
                            /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/,
                        },
                        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
                        { begin: /\B\?\\?\S/ },
                        {
                          begin: n.concat(
                            /<<[-~]?'?/,
                            n.lookahead(
                              /(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/
                            )
                          ),
                          contains: [
                            e.END_SAME_AS_BEGIN({
                              begin: /(\w+)/,
                              end: /(\w+)/,
                              contains: [e.BACKSLASH_ESCAPE, c],
                            }),
                          ],
                        },
                      ],
                    },
                    d = "[0-9](_?[0-9])*",
                    g = {
                      className: "number",
                      relevance: 0,
                      variants: [
                        {
                          begin: "\\b("
                            .concat("[1-9](_?[0-9])*|0", ")(\\.(")
                            .concat(d, "))?([eE][+-]?(")
                            .concat(d, ")|r)?i?\\b"),
                        },
                        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
                        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
                        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
                        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
                        { begin: "\\b0(_?[0-7])+r?i?\\b" },
                      ],
                    },
                    D = {
                      variants: [
                        { match: /\(\)/ },
                        {
                          className: "params",
                          begin: /\(/,
                          end: /(?=\))/,
                          excludeBegin: !0,
                          endsParent: !0,
                          keywords: i,
                        },
                      ],
                    },
                    b = [
                      l,
                      {
                        variants: [
                          { match: [/class\s+/, r, /\s+<\s+/, r] },
                          { match: [/class\s+/, r] },
                        ],
                        scope: { 2: "title.class", 4: "title.class.inherited" },
                        keywords: i,
                      },
                      {
                        relevance: 0,
                        match: [r, /\.new[ (]/],
                        scope: { 1: "title.class" },
                      },
                      {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant",
                      },
                      {
                        match: [/def/, /\s+/, t],
                        scope: { 1: "keyword", 3: "title.function" },
                        contains: [D],
                      },
                      { begin: e.IDENT_RE + "::" },
                      {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                        relevance: 0,
                      },
                      {
                        className: "symbol",
                        begin: ":(?!\\s)",
                        contains: [l, { begin: t }],
                        relevance: 0,
                      },
                      g,
                      {
                        className: "variable",
                        begin:
                          "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
                      },
                      {
                        className: "params",
                        begin: /\|/,
                        end: /\|/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: i,
                      },
                      {
                        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                        keywords: "unless",
                        contains: [
                          {
                            className: "regexp",
                            contains: [e.BACKSLASH_ESCAPE, c],
                            illegal: /\n/,
                            variants: [
                              { begin: "/", end: "/[a-z]*" },
                              { begin: /%r\{/, end: /\}[a-z]*/ },
                              { begin: "%r\\(", end: "\\)[a-z]*" },
                              { begin: "%r!", end: "![a-z]*" },
                              { begin: "%r\\[", end: "\\][a-z]*" },
                            ],
                          },
                        ].concat(u, o),
                        relevance: 0,
                      },
                    ].concat(u, o);
                  (c.contains = b), (D.contains = b);
                  var m = [
                    { begin: /^\s*=>/, starts: { end: "$", contains: b } },
                    {
                      className: "meta.prompt",
                      begin:
                        "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                      starts: { end: "$", keywords: i, contains: b },
                    },
                  ];
                  return (
                    o.unshift(u),
                    {
                      name: "Ruby",
                      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                      keywords: i,
                      illegal: /\/\*/,
                      contains: [e.SHEBANG({ binary: "ruby" })]
                        .concat(m)
                        .concat(o)
                        .concat(b),
                    }
                  );
                },
                grmr_rust: function (e) {
                  var n = e.regex,
                    t = {
                      className: "title.function.invoke",
                      relevance: 0,
                      begin: n.concat(
                        /\b/,
                        /(?!let\b)/,
                        e.IDENT_RE,
                        n.lookahead(/\s*\(/)
                      ),
                    },
                    a = "([ui](8|16|32|64|128|size)|f(32|64))?",
                    r = [
                      "drop ",
                      "Copy",
                      "Send",
                      "Sized",
                      "Sync",
                      "Drop",
                      "Fn",
                      "FnMut",
                      "FnOnce",
                      "ToOwned",
                      "Clone",
                      "Debug",
                      "PartialEq",
                      "PartialOrd",
                      "Eq",
                      "Ord",
                      "AsRef",
                      "AsMut",
                      "Into",
                      "From",
                      "Default",
                      "Iterator",
                      "Extend",
                      "IntoIterator",
                      "DoubleEndedIterator",
                      "ExactSizeIterator",
                      "SliceConcatExt",
                      "ToString",
                      "assert!",
                      "assert_eq!",
                      "bitflags!",
                      "bytes!",
                      "cfg!",
                      "col!",
                      "concat!",
                      "concat_idents!",
                      "debug_assert!",
                      "debug_assert_eq!",
                      "env!",
                      "panic!",
                      "file!",
                      "format!",
                      "format_args!",
                      "include_bin!",
                      "include_str!",
                      "line!",
                      "local_data_key!",
                      "module_path!",
                      "option_env!",
                      "print!",
                      "println!",
                      "select!",
                      "stringify!",
                      "try!",
                      "unimplemented!",
                      "unreachable!",
                      "vec!",
                      "write!",
                      "writeln!",
                      "macro_rules!",
                      "assert_ne!",
                      "debug_assert_ne!",
                    ];
                  return {
                    name: "Rust",
                    aliases: ["rs"],
                    keywords: {
                      $pattern: e.IDENT_RE + "!?",
                      type: [
                        "i8",
                        "i16",
                        "i32",
                        "i64",
                        "i128",
                        "isize",
                        "u8",
                        "u16",
                        "u32",
                        "u64",
                        "u128",
                        "usize",
                        "f32",
                        "f64",
                        "str",
                        "char",
                        "bool",
                        "Box",
                        "Option",
                        "Result",
                        "String",
                        "Vec",
                      ],
                      keyword: [
                        "abstract",
                        "as",
                        "async",
                        "await",
                        "become",
                        "box",
                        "break",
                        "const",
                        "continue",
                        "crate",
                        "do",
                        "dyn",
                        "else",
                        "enum",
                        "extern",
                        "false",
                        "final",
                        "fn",
                        "for",
                        "if",
                        "impl",
                        "in",
                        "let",
                        "loop",
                        "macro",
                        "match",
                        "mod",
                        "move",
                        "mut",
                        "override",
                        "priv",
                        "pub",
                        "ref",
                        "return",
                        "self",
                        "Self",
                        "static",
                        "struct",
                        "super",
                        "trait",
                        "true",
                        "try",
                        "type",
                        "typeof",
                        "unsafe",
                        "unsized",
                        "use",
                        "virtual",
                        "where",
                        "while",
                        "yield",
                      ],
                      literal: ["true", "false", "Some", "None", "Ok", "Err"],
                      built_in: r,
                    },
                    illegal: "</",
                    contains: [
                      e.C_LINE_COMMENT_MODE,
                      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
                      e.inherit(e.QUOTE_STRING_MODE, {
                        begin: /b?"/,
                        illegal: null,
                      }),
                      {
                        className: "string",
                        variants: [
                          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
                          { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
                        ],
                      },
                      { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
                      {
                        className: "number",
                        variants: [
                          { begin: "\\b0b([01_]+)" + a },
                          { begin: "\\b0o([0-7_]+)" + a },
                          { begin: "\\b0x([A-Fa-f0-9_]+)" + a },
                          {
                            begin:
                              "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" +
                              a,
                          },
                        ],
                        relevance: 0,
                      },
                      {
                        begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: { 1: "keyword", 3: "title.function" },
                      },
                      {
                        className: "meta",
                        begin: "#!?\\[",
                        end: "\\]",
                        contains: [
                          { className: "string", begin: /"/, end: /"/ },
                        ],
                      },
                      {
                        begin: [
                          /let/,
                          /\s+/,
                          /(?:mut\s+)?/,
                          e.UNDERSCORE_IDENT_RE,
                        ],
                        className: {
                          1: "keyword",
                          3: "keyword",
                          4: "variable",
                        },
                      },
                      {
                        begin: [
                          /for/,
                          /\s+/,
                          e.UNDERSCORE_IDENT_RE,
                          /\s+/,
                          /in/,
                        ],
                        className: {
                          1: "keyword",
                          3: "variable",
                          5: "keyword",
                        },
                      },
                      {
                        begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: { 1: "keyword", 3: "title.class" },
                      },
                      {
                        begin: [
                          /(?:trait|enum|struct|union|impl|for)/,
                          /\s+/,
                          e.UNDERSCORE_IDENT_RE,
                        ],
                        className: { 1: "keyword", 3: "title.class" },
                      },
                      {
                        begin: e.IDENT_RE + "::",
                        keywords: { keyword: "Self", built_in: r },
                      },
                      { className: "punctuation", begin: "->" },
                      t,
                    ],
                  };
                },
                grmr_scss: function (e) {
                  var n = he(e),
                    t = ve,
                    a = Ae,
                    r = "@[a-z-]+",
                    i = {
                      className: "variable",
                      begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
                      relevance: 0,
                    };
                  return {
                    name: "SCSS",
                    case_insensitive: !0,
                    illegal: "[=/|']",
                    contains: [
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      n.CSS_NUMBER_MODE,
                      {
                        className: "selector-id",
                        begin: "#[A-Za-z0-9_-]+",
                        relevance: 0,
                      },
                      {
                        className: "selector-class",
                        begin: "\\.[A-Za-z0-9_-]+",
                        relevance: 0,
                      },
                      n.ATTRIBUTE_SELECTOR_MODE,
                      {
                        className: "selector-tag",
                        begin: "\\b(" + _e.join("|") + ")\\b",
                        relevance: 0,
                      },
                      {
                        className: "selector-pseudo",
                        begin: ":(" + a.join("|") + ")",
                      },
                      {
                        className: "selector-pseudo",
                        begin: ":(:)?(" + t.join("|") + ")",
                      },
                      i,
                      { begin: /\(/, end: /\)/, contains: [n.CSS_NUMBER_MODE] },
                      n.CSS_VARIABLE,
                      {
                        className: "attribute",
                        begin: "\\b(" + ye.join("|") + ")\\b",
                      },
                      {
                        begin:
                          "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
                      },
                      {
                        begin: /:/,
                        end: /[;}{]/,
                        contains: [
                          n.BLOCK_COMMENT,
                          i,
                          n.HEXCOLOR,
                          n.CSS_NUMBER_MODE,
                          e.QUOTE_STRING_MODE,
                          e.APOS_STRING_MODE,
                          n.IMPORTANT,
                        ],
                      },
                      {
                        begin: "@(page|font-face)",
                        keywords: { $pattern: r, keyword: "@page @font-face" },
                      },
                      {
                        begin: "@",
                        end: "[{;]",
                        returnBegin: !0,
                        keywords: {
                          $pattern: /[a-z-]+/,
                          keyword: "and or not only",
                          attribute: Ce.join(" "),
                        },
                        contains: [
                          { begin: r, className: "keyword" },
                          { begin: /[a-z-]+(?=:)/, className: "attribute" },
                          i,
                          e.QUOTE_STRING_MODE,
                          e.APOS_STRING_MODE,
                          n.HEXCOLOR,
                          n.CSS_NUMBER_MODE,
                        ],
                      },
                      n.FUNCTION_DISPATCH,
                    ],
                  };
                },
                grmr_sql: function (e) {
                  var n = e.regex,
                    t = e.COMMENT("--", "$"),
                    a = ["true", "false", "unknown"],
                    r = [
                      "bigint",
                      "binary",
                      "blob",
                      "boolean",
                      "char",
                      "character",
                      "clob",
                      "date",
                      "dec",
                      "decfloat",
                      "decimal",
                      "float",
                      "int",
                      "integer",
                      "interval",
                      "nchar",
                      "nclob",
                      "national",
                      "numeric",
                      "real",
                      "row",
                      "smallint",
                      "time",
                      "timestamp",
                      "varchar",
                      "varying",
                      "varbinary",
                    ],
                    i = [
                      "abs",
                      "acos",
                      "array_agg",
                      "asin",
                      "atan",
                      "avg",
                      "cast",
                      "ceil",
                      "ceiling",
                      "coalesce",
                      "corr",
                      "cos",
                      "cosh",
                      "count",
                      "covar_pop",
                      "covar_samp",
                      "cume_dist",
                      "dense_rank",
                      "deref",
                      "element",
                      "exp",
                      "extract",
                      "first_value",
                      "floor",
                      "json_array",
                      "json_arrayagg",
                      "json_exists",
                      "json_object",
                      "json_objectagg",
                      "json_query",
                      "json_table",
                      "json_table_primitive",
                      "json_value",
                      "lag",
                      "last_value",
                      "lead",
                      "listagg",
                      "ln",
                      "log",
                      "log10",
                      "lower",
                      "max",
                      "min",
                      "mod",
                      "nth_value",
                      "ntile",
                      "nullif",
                      "percent_rank",
                      "percentile_cont",
                      "percentile_disc",
                      "position",
                      "position_regex",
                      "power",
                      "rank",
                      "regr_avgx",
                      "regr_avgy",
                      "regr_count",
                      "regr_intercept",
                      "regr_r2",
                      "regr_slope",
                      "regr_sxx",
                      "regr_sxy",
                      "regr_syy",
                      "row_number",
                      "sin",
                      "sinh",
                      "sqrt",
                      "stddev_pop",
                      "stddev_samp",
                      "substring",
                      "substring_regex",
                      "sum",
                      "tan",
                      "tanh",
                      "translate",
                      "translate_regex",
                      "treat",
                      "trim",
                      "trim_array",
                      "unnest",
                      "upper",
                      "value_of",
                      "var_pop",
                      "var_samp",
                      "width_bucket",
                    ],
                    s = [
                      "create table",
                      "insert into",
                      "primary key",
                      "foreign key",
                      "not null",
                      "alter table",
                      "add constraint",
                      "grouping sets",
                      "on overflow",
                      "character set",
                      "respect nulls",
                      "ignore nulls",
                      "nulls first",
                      "nulls last",
                      "depth first",
                      "breadth first",
                    ],
                    u = i,
                    o = []
                      .concat(
                        [
                          "abs",
                          "acos",
                          "all",
                          "allocate",
                          "alter",
                          "and",
                          "any",
                          "are",
                          "array",
                          "array_agg",
                          "array_max_cardinality",
                          "as",
                          "asensitive",
                          "asin",
                          "asymmetric",
                          "at",
                          "atan",
                          "atomic",
                          "authorization",
                          "avg",
                          "begin",
                          "begin_frame",
                          "begin_partition",
                          "between",
                          "bigint",
                          "binary",
                          "blob",
                          "boolean",
                          "both",
                          "by",
                          "call",
                          "called",
                          "cardinality",
                          "cascaded",
                          "case",
                          "cast",
                          "ceil",
                          "ceiling",
                          "char",
                          "char_length",
                          "character",
                          "character_length",
                          "check",
                          "classifier",
                          "clob",
                          "close",
                          "coalesce",
                          "collate",
                          "collect",
                          "column",
                          "commit",
                          "condition",
                          "connect",
                          "constraint",
                          "contains",
                          "convert",
                          "copy",
                          "corr",
                          "corresponding",
                          "cos",
                          "cosh",
                          "count",
                          "covar_pop",
                          "covar_samp",
                          "create",
                          "cross",
                          "cube",
                          "cume_dist",
                          "current",
                          "current_catalog",
                          "current_date",
                          "current_default_transform_group",
                          "current_path",
                          "current_role",
                          "current_row",
                          "current_schema",
                          "current_time",
                          "current_timestamp",
                          "current_path",
                          "current_role",
                          "current_transform_group_for_type",
                          "current_user",
                          "cursor",
                          "cycle",
                          "date",
                          "day",
                          "deallocate",
                          "dec",
                          "decimal",
                          "decfloat",
                          "declare",
                          "default",
                          "define",
                          "delete",
                          "dense_rank",
                          "deref",
                          "describe",
                          "deterministic",
                          "disconnect",
                          "distinct",
                          "double",
                          "drop",
                          "dynamic",
                          "each",
                          "element",
                          "else",
                          "empty",
                          "end",
                          "end_frame",
                          "end_partition",
                          "end-exec",
                          "equals",
                          "escape",
                          "every",
                          "except",
                          "exec",
                          "execute",
                          "exists",
                          "exp",
                          "external",
                          "extract",
                          "false",
                          "fetch",
                          "filter",
                          "first_value",
                          "float",
                          "floor",
                          "for",
                          "foreign",
                          "frame_row",
                          "free",
                          "from",
                          "full",
                          "function",
                          "fusion",
                          "get",
                          "global",
                          "grant",
                          "group",
                          "grouping",
                          "groups",
                          "having",
                          "hold",
                          "hour",
                          "identity",
                          "in",
                          "indicator",
                          "initial",
                          "inner",
                          "inout",
                          "insensitive",
                          "insert",
                          "int",
                          "integer",
                          "intersect",
                          "intersection",
                          "interval",
                          "into",
                          "is",
                          "join",
                          "json_array",
                          "json_arrayagg",
                          "json_exists",
                          "json_object",
                          "json_objectagg",
                          "json_query",
                          "json_table",
                          "json_table_primitive",
                          "json_value",
                          "lag",
                          "language",
                          "large",
                          "last_value",
                          "lateral",
                          "lead",
                          "leading",
                          "left",
                          "like",
                          "like_regex",
                          "listagg",
                          "ln",
                          "local",
                          "localtime",
                          "localtimestamp",
                          "log",
                          "log10",
                          "lower",
                          "match",
                          "match_number",
                          "match_recognize",
                          "matches",
                          "max",
                          "member",
                          "merge",
                          "method",
                          "min",
                          "minute",
                          "mod",
                          "modifies",
                          "module",
                          "month",
                          "multiset",
                          "national",
                          "natural",
                          "nchar",
                          "nclob",
                          "new",
                          "no",
                          "none",
                          "normalize",
                          "not",
                          "nth_value",
                          "ntile",
                          "null",
                          "nullif",
                          "numeric",
                          "octet_length",
                          "occurrences_regex",
                          "of",
                          "offset",
                          "old",
                          "omit",
                          "on",
                          "one",
                          "only",
                          "open",
                          "or",
                          "order",
                          "out",
                          "outer",
                          "over",
                          "overlaps",
                          "overlay",
                          "parameter",
                          "partition",
                          "pattern",
                          "per",
                          "percent",
                          "percent_rank",
                          "percentile_cont",
                          "percentile_disc",
                          "period",
                          "portion",
                          "position",
                          "position_regex",
                          "power",
                          "precedes",
                          "precision",
                          "prepare",
                          "primary",
                          "procedure",
                          "ptf",
                          "range",
                          "rank",
                          "reads",
                          "real",
                          "recursive",
                          "ref",
                          "references",
                          "referencing",
                          "regr_avgx",
                          "regr_avgy",
                          "regr_count",
                          "regr_intercept",
                          "regr_r2",
                          "regr_slope",
                          "regr_sxx",
                          "regr_sxy",
                          "regr_syy",
                          "release",
                          "result",
                          "return",
                          "returns",
                          "revoke",
                          "right",
                          "rollback",
                          "rollup",
                          "row",
                          "row_number",
                          "rows",
                          "running",
                          "savepoint",
                          "scope",
                          "scroll",
                          "search",
                          "second",
                          "seek",
                          "select",
                          "sensitive",
                          "session_user",
                          "set",
                          "show",
                          "similar",
                          "sin",
                          "sinh",
                          "skip",
                          "smallint",
                          "some",
                          "specific",
                          "specifictype",
                          "sql",
                          "sqlexception",
                          "sqlstate",
                          "sqlwarning",
                          "sqrt",
                          "start",
                          "static",
                          "stddev_pop",
                          "stddev_samp",
                          "submultiset",
                          "subset",
                          "substring",
                          "substring_regex",
                          "succeeds",
                          "sum",
                          "symmetric",
                          "system",
                          "system_time",
                          "system_user",
                          "table",
                          "tablesample",
                          "tan",
                          "tanh",
                          "then",
                          "time",
                          "timestamp",
                          "timezone_hour",
                          "timezone_minute",
                          "to",
                          "trailing",
                          "translate",
                          "translate_regex",
                          "translation",
                          "treat",
                          "trigger",
                          "trim",
                          "trim_array",
                          "true",
                          "truncate",
                          "uescape",
                          "union",
                          "unique",
                          "unknown",
                          "unnest",
                          "update",
                          "upper",
                          "user",
                          "using",
                          "value",
                          "values",
                          "value_of",
                          "var_pop",
                          "var_samp",
                          "varbinary",
                          "varchar",
                          "varying",
                          "versioning",
                          "when",
                          "whenever",
                          "where",
                          "width_bucket",
                          "window",
                          "with",
                          "within",
                          "without",
                          "year",
                        ],
                        [
                          "add",
                          "asc",
                          "collation",
                          "desc",
                          "final",
                          "first",
                          "last",
                          "view",
                        ]
                      )
                      .filter(function (e) {
                        return !i.includes(e);
                      }),
                    c = {
                      begin: n.concat(/\b/, n.either.apply(n, u), /\s*\(/),
                      relevance: 0,
                      keywords: { built_in: u },
                    };
                  return {
                    name: "SQL",
                    case_insensitive: !0,
                    illegal: /[{}]|<\//,
                    keywords: {
                      $pattern: /\b[\w\.]+/,
                      keyword: (function (e) {
                        var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          t = n.exceptions,
                          a = n.when,
                          r = a;
                        return (
                          (t = t || []),
                          e.map(function (e) {
                            return e.match(/\|\d+$/) || t.includes(e)
                              ? e
                              : r(e)
                              ? "".concat(e, "|0")
                              : e;
                          })
                        );
                      })(o, {
                        when: function (e) {
                          return e.length < 3;
                        },
                      }),
                      literal: a,
                      type: r,
                      built_in: [
                        "current_catalog",
                        "current_date",
                        "current_default_transform_group",
                        "current_path",
                        "current_role",
                        "current_schema",
                        "current_transform_group_for_type",
                        "current_user",
                        "session_user",
                        "system_time",
                        "system_user",
                        "current_time",
                        "localtime",
                        "current_timestamp",
                        "localtimestamp",
                      ],
                    },
                    contains: [
                      {
                        begin: n.either.apply(n, s),
                        relevance: 0,
                        keywords: {
                          $pattern: /[\w\.]+/,
                          keyword: o.concat(s),
                          literal: a,
                          type: r,
                        },
                      },
                      {
                        className: "type",
                        begin: n.either.apply(n, [
                          "double precision",
                          "large object",
                          "with timezone",
                          "without timezone",
                        ]),
                      },
                      c,
                      { className: "variable", begin: /@[a-z0-9]+/ },
                      {
                        className: "string",
                        variants: [
                          { begin: /'/, end: /'/, contains: [{ begin: /''/ }] },
                        ],
                      },
                      { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
                      e.C_NUMBER_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      t,
                      {
                        className: "operator",
                        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                        relevance: 0,
                      },
                    ],
                  };
                },
                grmr_shell: function (e) {
                  return {
                    name: "Shell Session",
                    aliases: ["console", "shellsession"],
                    contains: [
                      {
                        className: "meta.prompt",
                        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                        starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
                      },
                    ],
                  };
                },
                grmr_swift: function (e) {
                  var n = { match: /\s+/, relevance: 0 },
                    t = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
                    a = [e.C_LINE_COMMENT_MODE, t],
                    r = {
                      match: [/\./, y.apply(void 0, d(Ue).concat(d($e)))],
                      className: { 2: "keyword" },
                    },
                    i = { match: A(/\./, y.apply(void 0, qe)), relevance: 0 },
                    s = qe
                      .filter(function (e) {
                        return "string" == typeof e;
                      })
                      .concat(["_|0"]),
                    u = qe
                      .filter(function (e) {
                        return "string" != typeof e;
                      })
                      .concat(Ke)
                      .map(Pe),
                    o = {
                      variants: [
                        {
                          className: "keyword",
                          match: y.apply(void 0, d(u).concat(d($e))),
                        },
                      ],
                    },
                    c = {
                      $pattern: y(/\b\w+/, /#\w+/),
                      keyword: s.concat(Ge),
                      literal: Ze,
                    },
                    l = [r, i, o],
                    D = [
                      { match: A(/\./, y.apply(void 0, We)), relevance: 0 },
                      {
                        className: "built_in",
                        match: A(/\b/, y.apply(void 0, We), /(?=\()/),
                      },
                    ],
                    b = { match: /->/, relevance: 0 },
                    m = [
                      b,
                      {
                        className: "operator",
                        relevance: 0,
                        variants: [
                          { match: Ve },
                          { match: "\\.(\\.|".concat(Xe, ")+") },
                        ],
                      },
                    ],
                    p = "([0-9]_*)+",
                    E = "([0-9a-fA-F]_*)+",
                    f = {
                      className: "number",
                      relevance: 0,
                      variants: [
                        {
                          match:
                            "\\b(".concat(p, ")(\\.(").concat(p, "))?") +
                            "([eE][+-]?(".concat(p, "))?\\b"),
                        },
                        {
                          match:
                            "\\b0x(".concat(E, ")(\\.(").concat(E, "))?") +
                            "([pP][+-]?(".concat(p, "))?\\b"),
                        },
                        { match: /\b0o([0-7]_*)+\b/ },
                        { match: /\b0b([01]_*)+\b/ },
                      ],
                    },
                    _ = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return {
                        className: "subst",
                        variants: [
                          { match: A(/\\/, e, /[0\\tnr"']/) },
                          { match: A(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) },
                        ],
                      };
                    },
                    C = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return {
                        className: "subst",
                        match: A(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/),
                      };
                    },
                    v = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return {
                        className: "subst",
                        label: "interpol",
                        begin: A(/\\/, e, /\(/),
                        end: /\)/,
                      };
                    },
                    F = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return {
                        begin: A(e, /"""/),
                        end: A(/"""/, e),
                        contains: [_(e), C(e), v(e)],
                      };
                    },
                    w = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return {
                        begin: A(e, /"/),
                        end: A(/"/, e),
                        contains: [_(e), v(e)],
                      };
                    },
                    N = {
                      className: "string",
                      variants: [
                        F(),
                        F("#"),
                        F("##"),
                        F("###"),
                        w(),
                        w("#"),
                        w("##"),
                        w("###"),
                      ],
                    },
                    B = { match: A(/`/, en, /`/) },
                    k = [
                      B,
                      { className: "variable", match: /\$\d+/ },
                      { className: "variable", match: "\\$".concat(Ye, "+") },
                    ],
                    x = [
                      {
                        match: /(@|#(un)?)available/,
                        className: "keyword",
                        starts: {
                          contains: [
                            {
                              begin: /\(/,
                              end: /\)/,
                              keywords: an,
                              contains: [].concat(m, [f, N]),
                            },
                          ],
                        },
                      },
                      {
                        className: "keyword",
                        match: A(/@/, y.apply(void 0, tn)),
                      },
                      { className: "meta", match: A(/@/, en) },
                    ],
                    O = {
                      match: h(/\b[A-Z]/),
                      relevance: 0,
                      contains: [
                        {
                          className: "type",
                          match: A(
                            /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
                            Ye,
                            "+"
                          ),
                        },
                        { className: "type", match: nn, relevance: 0 },
                        { match: /[?!]+/, relevance: 0 },
                        { match: /\.\.\./, relevance: 0 },
                        { match: A(/\s+&\s+/, h(nn)), relevance: 0 },
                      ],
                    },
                    M = {
                      begin: /</,
                      end: />/,
                      keywords: c,
                      contains: [].concat(a, l, x, [b, O]),
                    };
                  O.contains.push(M);
                  var S,
                    T = {
                      begin: /\(/,
                      end: /\)/,
                      relevance: 0,
                      keywords: c,
                      contains: [
                        "self",
                        { match: A(en, /\s*:/), keywords: "_|0", relevance: 0 },
                      ].concat(a, l, D, m, [f, N], k, x, [O]),
                    },
                    R = { begin: /</, end: />/, contains: [].concat(a, [O]) },
                    I = {
                      begin: /\(/,
                      end: /\)/,
                      keywords: c,
                      contains: [
                        {
                          begin: y(
                            h(A(en, /\s*:/)),
                            h(A(en, /\s+/, en, /\s*:/))
                          ),
                          end: /:/,
                          relevance: 0,
                          contains: [
                            { className: "keyword", match: /\b_\b/ },
                            { className: "params", match: en },
                          ],
                        },
                      ].concat(a, l, m, [f, N], x, [O, T]),
                      endsParent: !0,
                      illegal: /["']/,
                    },
                    L = {
                      match: [/func/, /\s+/, y(B.match, en, Ve)],
                      className: { 1: "keyword", 3: "title.function" },
                      contains: [R, I, n],
                      illegal: [/\[/, /%/],
                    },
                    z = {
                      match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                      className: { 1: "keyword" },
                      contains: [R, I, n],
                      illegal: /\[|%/,
                    },
                    j = {
                      match: [/operator/, /\s+/, Ve],
                      className: { 1: "keyword", 3: "title" },
                    },
                    P = {
                      begin: [/precedencegroup/, /\s+/, nn],
                      className: { 1: "keyword", 3: "title" },
                      contains: [O],
                      keywords: [].concat(He, Ze),
                      end: /}/,
                    },
                    U = (function (e, n) {
                      var t =
                        ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                      if (!t) {
                        if (
                          Array.isArray(e) ||
                          (t = g(e)) ||
                          (n && e && "number" == typeof e.length)
                        ) {
                          t && (e = t);
                          var a = 0,
                            r = function () {};
                          return {
                            s: r,
                            n: function () {
                              return a >= e.length
                                ? { done: !0 }
                                : { done: !1, value: e[a++] };
                            },
                            e: function (e) {
                              throw e;
                            },
                            f: r,
                          };
                        }
                        throw new TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      }
                      var i,
                        s = !0,
                        u = !1;
                      return {
                        s: function () {
                          t = t.call(e);
                        },
                        n: function () {
                          var e = t.next();
                          return (s = e.done), e;
                        },
                        e: function (e) {
                          (u = !0), (i = e);
                        },
                        f: function () {
                          try {
                            s || null == t.return || t.return();
                          } finally {
                            if (u) throw i;
                          }
                        },
                      };
                    })(N.variants);
                  try {
                    for (U.s(); !(S = U.n()).done; ) {
                      var $ = S.value.contains.find(function (e) {
                        return "interpol" === e.label;
                      });
                      $.keywords = c;
                      var K = [].concat(l, D, m, [f, N], k);
                      $.contains = [].concat(d(K), [
                        {
                          begin: /\(/,
                          end: /\)/,
                          contains: ["self"].concat(d(K)),
                        },
                      ]);
                    }
                  } catch (e) {
                    U.e(e);
                  } finally {
                    U.f();
                  }
                  return {
                    name: "Swift",
                    keywords: c,
                    contains: [].concat(
                      a,
                      [
                        L,
                        z,
                        {
                          beginKeywords:
                            "struct protocol class extension enum actor",
                          end: "\\{",
                          excludeEnd: !0,
                          keywords: c,
                          contains: [
                            e.inherit(e.TITLE_MODE, {
                              className: "title.class",
                              begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
                            }),
                          ].concat(l),
                        },
                        j,
                        P,
                        {
                          beginKeywords: "import",
                          end: /$/,
                          contains: [].concat(a),
                          relevance: 0,
                        },
                      ],
                      l,
                      D,
                      m,
                      [f, N],
                      k,
                      x,
                      [O, T]
                    ),
                  };
                },
                grmr_ini: function (e) {
                  var n = e.regex,
                    t = {
                      className: "number",
                      relevance: 0,
                      variants: [
                        { begin: /([+-]+)?[\d]+_[\d_]+/ },
                        { begin: e.NUMBER_RE },
                      ],
                    },
                    a = e.COMMENT();
                  a.variants = [
                    { begin: /;/, end: /$/ },
                    { begin: /#/, end: /$/ },
                  ];
                  var r = {
                      className: "variable",
                      variants: [
                        { begin: /\$[\w\d"][\w\d_]*/ },
                        { begin: /\$\{(.*?)\}/ },
                      ],
                    },
                    i = {
                      className: "literal",
                      begin: /\bon|off|true|false|yes|no\b/,
                    },
                    s = {
                      className: "string",
                      contains: [e.BACKSLASH_ESCAPE],
                      variants: [
                        { begin: "'''", end: "'''", relevance: 10 },
                        { begin: '"""', end: '"""', relevance: 10 },
                        { begin: '"', end: '"' },
                        { begin: "'", end: "'" },
                      ],
                    },
                    u = {
                      begin: /\[/,
                      end: /\]/,
                      contains: [a, i, r, s, t, "self"],
                      relevance: 0,
                    },
                    o = n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
                  return {
                    name: "TOML, also INI",
                    aliases: ["toml"],
                    case_insensitive: !0,
                    illegal: /\S/,
                    contains: [
                      a,
                      { className: "section", begin: /\[+/, end: /\]+/ },
                      {
                        begin: n.concat(
                          o,
                          "(\\s*\\.\\s*",
                          o,
                          ")*",
                          n.lookahead(/\s*=\s*[^#\s]/)
                        ),
                        className: "attr",
                        starts: { end: /$/, contains: [a, u, i, r, s, t] },
                      },
                    ],
                  };
                },
                grmr_typescript: function (e) {
                  var n = je(e),
                    t = [
                      "any",
                      "void",
                      "number",
                      "boolean",
                      "string",
                      "object",
                      "never",
                      "symbol",
                      "bigint",
                      "unknown",
                    ],
                    a = {
                      beginKeywords: "namespace",
                      end: /\{/,
                      excludeEnd: !0,
                      contains: [n.exports.CLASS_REFERENCE],
                    },
                    r = {
                      beginKeywords: "interface",
                      end: /\{/,
                      excludeEnd: !0,
                      keywords: { keyword: "interface extends", built_in: t },
                      contains: [n.exports.CLASS_REFERENCE],
                    },
                    i = {
                      $pattern: we,
                      keyword: Ne.concat([
                        "type",
                        "namespace",
                        "interface",
                        "public",
                        "private",
                        "protected",
                        "implements",
                        "declare",
                        "abstract",
                        "readonly",
                        "enum",
                        "override",
                      ]),
                      literal: Be,
                      built_in: Se.concat(t),
                      "variable.language": Me,
                    },
                    s = {
                      className: "meta",
                      begin: "@[A-Za-z$_][0-9A-Za-z$_]*",
                    },
                    u = function (e, n, t) {
                      var a = e.contains.findIndex(function (e) {
                        return e.label === n;
                      });
                      if (-1 === a)
                        throw new Error("can not find mode to replace");
                      e.contains.splice(a, 1, t);
                    };
                  return (
                    Object.assign(n.keywords, i),
                    n.exports.PARAMS_CONTAINS.push(s),
                    (n.contains = n.contains.concat([s, a, r])),
                    u(n, "shebang", e.SHEBANG()),
                    u(n, "use_strict", {
                      className: "meta",
                      relevance: 10,
                      begin: /^\s*['"]use strict['"]/,
                    }),
                    (n.contains.find(function (e) {
                      return "func.def" === e.label;
                    }).relevance = 0),
                    Object.assign(n, {
                      name: "TypeScript",
                      aliases: ["ts", "tsx"],
                    }),
                    n
                  );
                },
                grmr_yaml: function (e) {
                  var n = "true false yes no null",
                    t = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
                    a = {
                      className: "string",
                      relevance: 0,
                      variants: [
                        { begin: /'/, end: /'/ },
                        { begin: /"/, end: /"/ },
                        { begin: /\S+/ },
                      ],
                      contains: [
                        e.BACKSLASH_ESCAPE,
                        {
                          className: "template-variable",
                          variants: [
                            { begin: /\{\{/, end: /\}\}/ },
                            { begin: /%\{/, end: /\}/ },
                          ],
                        },
                      ],
                    },
                    r = e.inherit(a, {
                      variants: [
                        { begin: /'/, end: /'/ },
                        { begin: /"/, end: /"/ },
                        { begin: /[^\s,{}[\]]+/ },
                      ],
                    }),
                    i = {
                      className: "number",
                      begin:
                        "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
                    },
                    s = {
                      end: ",",
                      endsWithParent: !0,
                      excludeEnd: !0,
                      keywords: n,
                      relevance: 0,
                    },
                    u = {
                      begin: /\{/,
                      end: /\}/,
                      contains: [s],
                      illegal: "\\n",
                      relevance: 0,
                    },
                    o = {
                      begin: "\\[",
                      end: "\\]",
                      contains: [s],
                      illegal: "\\n",
                      relevance: 0,
                    },
                    c = [
                      {
                        className: "attr",
                        variants: [
                          { begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)" },
                          { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
                          { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" },
                        ],
                      },
                      { className: "meta", begin: "^---\\s*$", relevance: 10 },
                      {
                        className: "string",
                        begin:
                          "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
                      },
                      {
                        begin: "<%[%=-]?",
                        end: "[%-]?%>",
                        subLanguage: "ruby",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                      },
                      { className: "type", begin: "!\\w+!" + t },
                      { className: "type", begin: "!<" + t + ">" },
                      { className: "type", begin: "!" + t },
                      { className: "type", begin: "!!" + t },
                      {
                        className: "meta",
                        begin: "&" + e.UNDERSCORE_IDENT_RE + "$",
                      },
                      {
                        className: "meta",
                        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$",
                      },
                      {
                        className: "bullet",
                        begin: "-(?=[ ]|$)",
                        relevance: 0,
                      },
                      e.HASH_COMMENT_MODE,
                      { beginKeywords: n, keywords: { literal: n } },
                      i,
                      {
                        className: "number",
                        begin: e.C_NUMBER_RE + "\\b",
                        relevance: 0,
                      },
                      u,
                      o,
                      a,
                    ],
                    l = [].concat(c);
                  return (
                    l.pop(),
                    l.push(r),
                    (s.contains = l),
                    {
                      name: "YAML",
                      case_insensitive: !0,
                      aliases: ["yml"],
                      contains: c,
                    }
                  );
                },
                grmr_clojure: function (e) {
                  var n = "a-zA-Z_\\-!.?+*=<>&'",
                    t = "[#]?[" + n + "][" + n + "0-9/;:$#]*",
                    a =
                      "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
                    r = {
                      $pattern: t,
                      built_in:
                        a +
                        " cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize",
                    },
                    i = { begin: t, relevance: 0 },
                    s = {
                      scope: "number",
                      relevance: 0,
                      variants: [
                        { match: /[-+]?0[xX][0-9a-fA-F]+N?/ },
                        { match: /[-+]?0[0-7]+N?/ },
                        { match: /[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/ },
                        { match: /[-+]?[0-9]+\/[0-9]+N?/ },
                        {
                          match:
                            /[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/,
                        },
                        { match: /[-+]?([1-9][0-9]*|0)N?/ },
                      ],
                    },
                    u = {
                      scope: "character",
                      variants: [
                        { match: /\\o[0-3]?[0-7]{1,2}/ },
                        { match: /\\u[0-9a-fA-F]{4}/ },
                        {
                          match:
                            /\\(newline|space|tab|formfeed|backspace|return)/,
                        },
                        { match: /\\\S/, relevance: 0 },
                      ],
                    },
                    o = {
                      scope: "regex",
                      begin: /#"/,
                      end: /"/,
                      contains: [e.BACKSLASH_ESCAPE],
                    },
                    c = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
                    l = { scope: "punctuation", match: /,/, relevance: 0 },
                    d = e.COMMENT(";", "$", { relevance: 0 }),
                    g = { className: "literal", begin: /\b(true|false|nil)\b/ },
                    D = {
                      begin: "\\[|(#::?" + t + ")?\\{",
                      end: "[\\]\\}]",
                      relevance: 0,
                    },
                    b = { className: "symbol", begin: "[:]{1,2}" + t },
                    m = { begin: "\\(", end: "\\)" },
                    p = { endsWithParent: !0, relevance: 0 },
                    E = {
                      keywords: r,
                      className: "name",
                      begin: t,
                      relevance: 0,
                      starts: p,
                    },
                    f = [l, m, u, o, c, d, b, D, s, g, i],
                    h = {
                      beginKeywords: a,
                      keywords: { $pattern: t, keyword: a },
                      end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
                      contains: [
                        {
                          className: "title",
                          begin: t,
                          relevance: 0,
                          excludeEnd: !0,
                          endsParent: !0,
                        },
                      ].concat(f),
                    };
                  return (
                    (m.contains = [h, E, p]),
                    (p.contains = f),
                    (D.contains = f),
                    {
                      name: "Clojure",
                      aliases: ["clj", "edn"],
                      illegal: /\S/,
                      contains: [l, m, u, o, c, d, b, D, s, g],
                    }
                  );
                },
                grmr_dart: function (e) {
                  var n = {
                      className: "subst",
                      variants: [{ begin: "\\$[A-Za-z0-9_]+" }],
                    },
                    t = {
                      className: "subst",
                      variants: [{ begin: /\$\{/, end: /\}/ }],
                      keywords: "true false null this is new super",
                    },
                    a = {
                      className: "string",
                      variants: [
                        { begin: "r'''", end: "'''" },
                        { begin: 'r"""', end: '"""' },
                        { begin: "r'", end: "'", illegal: "\\n" },
                        { begin: 'r"', end: '"', illegal: "\\n" },
                        {
                          begin: "'''",
                          end: "'''",
                          contains: [e.BACKSLASH_ESCAPE, n, t],
                        },
                        {
                          begin: '"""',
                          end: '"""',
                          contains: [e.BACKSLASH_ESCAPE, n, t],
                        },
                        {
                          begin: "'",
                          end: "'",
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE, n, t],
                        },
                        {
                          begin: '"',
                          end: '"',
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE, n, t],
                        },
                      ],
                    };
                  t.contains = [e.C_NUMBER_MODE, a];
                  var r = [
                      "Comparable",
                      "DateTime",
                      "Duration",
                      "Function",
                      "Iterable",
                      "Iterator",
                      "List",
                      "Map",
                      "Match",
                      "Object",
                      "Pattern",
                      "RegExp",
                      "Set",
                      "Stopwatch",
                      "String",
                      "StringBuffer",
                      "StringSink",
                      "Symbol",
                      "Type",
                      "Uri",
                      "bool",
                      "double",
                      "int",
                      "num",
                      "Element",
                      "ElementList",
                    ],
                    i = r.map(function (e) {
                      return "".concat(e, "?");
                    });
                  return {
                    name: "Dart",
                    keywords: {
                      keyword: [
                        "abstract",
                        "as",
                        "assert",
                        "async",
                        "await",
                        "break",
                        "case",
                        "catch",
                        "class",
                        "const",
                        "continue",
                        "covariant",
                        "default",
                        "deferred",
                        "do",
                        "dynamic",
                        "else",
                        "enum",
                        "export",
                        "extends",
                        "extension",
                        "external",
                        "factory",
                        "false",
                        "final",
                        "finally",
                        "for",
                        "Function",
                        "get",
                        "hide",
                        "if",
                        "implements",
                        "import",
                        "in",
                        "inferface",
                        "is",
                        "late",
                        "library",
                        "mixin",
                        "new",
                        "null",
                        "on",
                        "operator",
                        "part",
                        "required",
                        "rethrow",
                        "return",
                        "set",
                        "show",
                        "static",
                        "super",
                        "switch",
                        "sync",
                        "this",
                        "throw",
                        "true",
                        "try",
                        "typedef",
                        "var",
                        "void",
                        "while",
                        "with",
                        "yield",
                      ],
                      built_in: r
                        .concat(i)
                        .concat([
                          "Never",
                          "Null",
                          "dynamic",
                          "print",
                          "document",
                          "querySelector",
                          "querySelectorAll",
                          "window",
                        ]),
                      $pattern: /[A-Za-z][A-Za-z0-9_]*\??/,
                    },
                    contains: [
                      a,
                      e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
                        subLanguage: "markdown",
                        relevance: 0,
                      }),
                      e.COMMENT(/\/{3,} ?/, /$/, {
                        contains: [
                          {
                            subLanguage: "markdown",
                            begin: ".",
                            end: "$",
                            relevance: 0,
                          },
                        ],
                      }),
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      {
                        className: "class",
                        beginKeywords: "class interface",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [
                          { beginKeywords: "extends implements" },
                          e.UNDERSCORE_TITLE_MODE,
                        ],
                      },
                      e.C_NUMBER_MODE,
                      { className: "meta", begin: "@[A-Za-z]+" },
                      { begin: "=>" },
                    ],
                  };
                },
                grmr_delphi: function (e) {
                  var n = [
                      "exports",
                      "register",
                      "file",
                      "shl",
                      "array",
                      "record",
                      "property",
                      "for",
                      "mod",
                      "while",
                      "set",
                      "ally",
                      "label",
                      "uses",
                      "raise",
                      "not",
                      "stored",
                      "class",
                      "safecall",
                      "var",
                      "interface",
                      "or",
                      "private",
                      "static",
                      "exit",
                      "index",
                      "inherited",
                      "to",
                      "else",
                      "stdcall",
                      "override",
                      "shr",
                      "asm",
                      "far",
                      "resourcestring",
                      "finalization",
                      "packed",
                      "virtual",
                      "out",
                      "and",
                      "protected",
                      "library",
                      "do",
                      "xorwrite",
                      "goto",
                      "near",
                      "function",
                      "end",
                      "div",
                      "overload",
                      "object",
                      "unit",
                      "begin",
                      "string",
                      "on",
                      "inline",
                      "repeat",
                      "until",
                      "destructor",
                      "write",
                      "message",
                      "program",
                      "with",
                      "read",
                      "initialization",
                      "except",
                      "default",
                      "nil",
                      "if",
                      "case",
                      "cdecl",
                      "in",
                      "downto",
                      "threadvar",
                      "of",
                      "try",
                      "pascal",
                      "const",
                      "external",
                      "constructor",
                      "type",
                      "public",
                      "then",
                      "implementation",
                      "finally",
                      "published",
                      "procedure",
                      "absolute",
                      "reintroduce",
                      "operator",
                      "as",
                      "is",
                      "abstract",
                      "alias",
                      "assembler",
                      "bitpacked",
                      "break",
                      "continue",
                      "cppdecl",
                      "cvar",
                      "enumerator",
                      "experimental",
                      "platform",
                      "deprecated",
                      "unimplemented",
                      "dynamic",
                      "export",
                      "far16",
                      "forward",
                      "generic",
                      "helper",
                      "implements",
                      "interrupt",
                      "iochecks",
                      "local",
                      "name",
                      "nodefault",
                      "noreturn",
                      "nostackframe",
                      "oldfpccall",
                      "otherwise",
                      "saveregisters",
                      "softfloat",
                      "specialize",
                      "strict",
                      "unaligned",
                      "varargs",
                    ],
                    t = [
                      e.C_LINE_COMMENT_MODE,
                      e.COMMENT(/\{/, /\}/, { relevance: 0 }),
                      e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 }),
                    ],
                    a = {
                      className: "meta",
                      variants: [
                        { begin: /\{\$/, end: /\}/ },
                        { begin: /\(\*\$/, end: /\*\)/ },
                      ],
                    },
                    r = {
                      className: "string",
                      begin: /'/,
                      end: /'/,
                      contains: [{ begin: /''/ }],
                    },
                    i = { className: "string", begin: /(#\d+)+/ },
                    s = {
                      begin: e.IDENT_RE + "\\s*=\\s*class\\s*\\(",
                      returnBegin: !0,
                      contains: [e.TITLE_MODE],
                    },
                    u = {
                      className: "function",
                      beginKeywords:
                        "function constructor destructor procedure",
                      end: /[:;]/,
                      keywords:
                        "function constructor|10 destructor|10 procedure|10",
                      contains: [
                        e.TITLE_MODE,
                        {
                          className: "params",
                          begin: /\(/,
                          end: /\)/,
                          keywords: n,
                          contains: [r, i, a].concat(t),
                        },
                        a,
                      ].concat(t),
                    };
                  return {
                    name: "Delphi",
                    aliases: ["dpr", "dfm", "pas", "pascal"],
                    case_insensitive: !0,
                    keywords: n,
                    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
                    contains: [
                      r,
                      i,
                      e.NUMBER_MODE,
                      {
                        className: "number",
                        relevance: 0,
                        variants: [
                          { begin: "\\$[0-9A-Fa-f]+" },
                          { begin: "&[0-7]+" },
                          { begin: "%[01]+" },
                        ],
                      },
                      s,
                      u,
                      a,
                    ].concat(t),
                  };
                },
                grmr_erlang: function (e) {
                  var n = "[a-z'][a-zA-Z0-9_']*",
                    t = "(" + n + ":" + n + "|" + n + ")",
                    a = {
                      keyword:
                        "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
                      literal: "false true",
                    },
                    r = e.COMMENT("%", "$"),
                    i = {
                      className: "number",
                      begin:
                        "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
                      relevance: 0,
                    },
                    s = { begin: "fun\\s+" + n + "/\\d+" },
                    u = {
                      begin: t + "\\(",
                      end: "\\)",
                      returnBegin: !0,
                      relevance: 0,
                      contains: [
                        { begin: t, relevance: 0 },
                        {
                          begin: "\\(",
                          end: "\\)",
                          endsWithParent: !0,
                          returnEnd: !0,
                          relevance: 0,
                        },
                      ],
                    },
                    o = { begin: /\{/, end: /\}/, relevance: 0 },
                    c = { begin: "\\b_([A-Z][A-Za-z0-9_]*)?", relevance: 0 },
                    l = { begin: "[A-Z][a-zA-Z0-9_]*", relevance: 0 },
                    d = {
                      begin: "#" + e.UNDERSCORE_IDENT_RE,
                      relevance: 0,
                      returnBegin: !0,
                      contains: [
                        { begin: "#" + e.UNDERSCORE_IDENT_RE, relevance: 0 },
                        { begin: /\{/, end: /\}/, relevance: 0 },
                      ],
                    },
                    g = {
                      beginKeywords: "fun receive if try case",
                      end: "end",
                      keywords: a,
                    };
                  g.contains = [
                    r,
                    s,
                    e.inherit(e.APOS_STRING_MODE, { className: "" }),
                    g,
                    u,
                    e.QUOTE_STRING_MODE,
                    i,
                    o,
                    c,
                    l,
                    d,
                  ];
                  var D = [r, s, g, u, e.QUOTE_STRING_MODE, i, o, c, l, d];
                  (u.contains[1].contains = D),
                    (o.contains = D),
                    (d.contains[1].contains = D);
                  var b = {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: D,
                  };
                  return {
                    name: "Erlang",
                    aliases: ["erl"],
                    keywords: a,
                    illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
                    contains: [
                      {
                        className: "function",
                        begin: "^" + n + "\\s*\\(",
                        end: "->",
                        returnBegin: !0,
                        illegal: "\\(|#|//|/\\*|\\\\|:|;",
                        contains: [b, e.inherit(e.TITLE_MODE, { begin: n })],
                        starts: { end: ";|\\.", keywords: a, contains: D },
                      },
                      r,
                      {
                        begin: "^-",
                        end: "\\.",
                        relevance: 0,
                        excludeEnd: !0,
                        returnBegin: !0,
                        keywords: {
                          $pattern: "-" + e.IDENT_RE,
                          keyword: [
                            "-module",
                            "-record",
                            "-undef",
                            "-export",
                            "-ifdef",
                            "-ifndef",
                            "-author",
                            "-copyright",
                            "-doc",
                            "-vsn",
                            "-import",
                            "-include",
                            "-include_lib",
                            "-compile",
                            "-define",
                            "-else",
                            "-endif",
                            "-file",
                            "-behaviour",
                            "-behavior",
                            "-spec",
                          ]
                            .map(function (e) {
                              return "".concat(e, "|1.5");
                            })
                            .join(" "),
                        },
                        contains: [b],
                      },
                      i,
                      e.QUOTE_STRING_MODE,
                      d,
                      c,
                      l,
                      o,
                      { begin: /\.$/ },
                    ],
                  };
                },
                grmr_haskell: function (e) {
                  var n = {
                      variants: [
                        e.COMMENT("--", "$"),
                        e.COMMENT(/\{-/, /-\}/, { contains: ["self"] }),
                      ],
                    },
                    t = { className: "meta", begin: /\{-#/, end: /#-\}/ },
                    a = { className: "meta", begin: "^#", end: "$" },
                    r = {
                      className: "type",
                      begin: "\\b[A-Z][\\w']*",
                      relevance: 0,
                    },
                    i = {
                      begin: "\\(",
                      end: "\\)",
                      illegal: '"',
                      contains: [
                        t,
                        a,
                        {
                          className: "type",
                          begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?",
                        },
                        e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
                        n,
                      ],
                    },
                    s = { begin: /\{/, end: /\}/, contains: i.contains },
                    u = "([0-9]_*)+",
                    o = "([0-9a-fA-F]_*)+",
                    c = {
                      className: "number",
                      relevance: 0,
                      variants: [
                        {
                          match:
                            "\\b(".concat(u, ")(\\.(").concat(u, "))?") +
                            "([eE][+-]?(".concat(u, "))?\\b"),
                        },
                        {
                          match:
                            "\\b0[xX]_*(".concat(o, ")(\\.(").concat(o, "))?") +
                            "([pP][+-]?(".concat(u, "))?\\b"),
                        },
                        { match: "\\b0[oO](".concat("([0-7]_*)+", ")\\b") },
                        { match: "\\b0[bB](".concat("([01]_*)+", ")\\b") },
                      ],
                    };
                  return {
                    name: "Haskell",
                    aliases: ["hs"],
                    keywords:
                      "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
                    contains: [
                      {
                        beginKeywords: "module",
                        end: "where",
                        keywords: "module where",
                        contains: [i, n],
                        illegal: "\\W\\.|;",
                      },
                      {
                        begin: "\\bimport\\b",
                        end: "$",
                        keywords: "import qualified as hiding",
                        contains: [i, n],
                        illegal: "\\W\\.|;",
                      },
                      {
                        className: "class",
                        begin: "^(\\s*)?(class|instance)\\b",
                        end: "where",
                        keywords: "class family instance where",
                        contains: [r, i, n],
                      },
                      {
                        className: "class",
                        begin: "\\b(data|(new)?type)\\b",
                        end: "$",
                        keywords: "data family type newtype deriving",
                        contains: [t, r, i, s, n],
                      },
                      {
                        beginKeywords: "default",
                        end: "$",
                        contains: [r, i, n],
                      },
                      {
                        beginKeywords: "infix infixl infixr",
                        end: "$",
                        contains: [e.C_NUMBER_MODE, n],
                      },
                      {
                        begin: "\\bforeign\\b",
                        end: "$",
                        keywords:
                          "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
                        contains: [r, e.QUOTE_STRING_MODE, n],
                      },
                      {
                        className: "meta",
                        begin: "#!\\/usr\\/bin\\/env runhaskell",
                        end: "$",
                      },
                      t,
                      a,
                      e.QUOTE_STRING_MODE,
                      c,
                      r,
                      e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
                      n,
                      { begin: "->|<-" },
                    ],
                  };
                },
                grmr_latex: function (e) {
                  var n,
                    t = e.regex,
                    a = [
                      { begin: /\^{6}[0-9a-f]{6}/ },
                      { begin: /\^{5}[0-9a-f]{5}/ },
                      { begin: /\^{4}[0-9a-f]{4}/ },
                      { begin: /\^{3}[0-9a-f]{3}/ },
                      { begin: /\^{2}[0-9a-f]{2}/ },
                      { begin: /\^{2}[\u0000-\u007f]/ },
                    ],
                    r = [
                      {
                        className: "keyword",
                        begin: /\\/,
                        relevance: 0,
                        contains: [
                          {
                            endsParent: !0,
                            begin: t.either.apply(
                              t,
                              d(
                                [
                                  "(?:NeedsTeXFormat|RequirePackage|GetIdInfo)",
                                  "Provides(?:Expl)?(?:Package|Class|File)",
                                  "(?:DeclareOption|ProcessOptions)",
                                  "(?:documentclass|usepackage|input|include)",
                                  "makeat(?:letter|other)",
                                  "ExplSyntax(?:On|Off)",
                                  "(?:new|renew|provide)?command",
                                  "(?:re)newenvironment",
                                  "(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand",
                                  "(?:New|Renew|Provide|Declare)DocumentEnvironment",
                                  "(?:(?:e|g|x)?def|let)",
                                  "(?:begin|end)",
                                  "(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)",
                                  "caption",
                                  "(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)",
                                  "(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)",
                                  "(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)",
                                  "(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)",
                                  "(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)",
                                  "(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)",
                                ].map(function (e) {
                                  return e + "(?![a-zA-Z@:_])";
                                })
                              )
                            ),
                          },
                          {
                            endsParent: !0,
                            begin: new RegExp(
                              [
                                "(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*",
                                "[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}",
                                "[qs]__?[a-zA-Z](?:_?[a-zA-Z])+",
                                "use(?:_i)?:[a-zA-Z]*",
                                "(?:else|fi|or):",
                                "(?:if|cs|exp):w",
                                "(?:hbox|vbox):n",
                                "::[a-zA-Z]_unbraced",
                                "::[a-zA-Z:]",
                              ]
                                .map(function (e) {
                                  return e + "(?![a-zA-Z:_])";
                                })
                                .join("|")
                            ),
                          },
                          { endsParent: !0, variants: a },
                          {
                            endsParent: !0,
                            relevance: 0,
                            variants: [
                              { begin: /[a-zA-Z@]+/ },
                              { begin: /[^a-zA-Z@]?/ },
                            ],
                          },
                        ],
                      },
                      { className: "params", relevance: 0, begin: /#+\d?/ },
                      { variants: a },
                      { className: "built_in", relevance: 0, begin: /[$&^_]/ },
                      {
                        className: "meta",
                        begin: /% ?!(T[eE]X|tex|BIB|bib)/,
                        end: "$",
                        relevance: 10,
                      },
                      e.COMMENT("%", "$", { relevance: 0 }),
                    ],
                    i = {
                      begin: /\{/,
                      end: /\}/,
                      relevance: 0,
                      contains: ["self"].concat(r),
                    },
                    s = e.inherit(i, {
                      relevance: 0,
                      endsParent: !0,
                      contains: [i].concat(r),
                    }),
                    u = {
                      begin: /\[/,
                      end: /\]/,
                      endsParent: !0,
                      relevance: 0,
                      contains: [i].concat(r),
                    },
                    o = { begin: /\s+/, relevance: 0 },
                    c = [s],
                    l = [u],
                    g = function (e, n) {
                      return {
                        contains: [o],
                        starts: { relevance: 0, contains: e, starts: n },
                      };
                    },
                    D = function (e, n) {
                      return {
                        begin: "\\\\" + e + "(?![a-zA-Z@:_])",
                        keywords: {
                          $pattern: /\\[a-zA-Z]+/,
                          keyword: "\\" + e,
                        },
                        relevance: 0,
                        contains: [o],
                        starts: n,
                      };
                    },
                    b = function (n, t) {
                      return e.inherit(
                        {
                          begin:
                            "\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{" +
                            n +
                            "\\})",
                          keywords: {
                            $pattern: /\\[a-zA-Z]+/,
                            keyword: "\\begin",
                          },
                          relevance: 0,
                        },
                        g(c, t)
                      );
                    },
                    m = function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "string";
                      return e.END_SAME_AS_BEGIN({
                        className: n,
                        begin: /(.|\r?\n)/,
                        end: /(.|\r?\n)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        endsParent: !0,
                      });
                    },
                    p = function (e) {
                      return {
                        className: "string",
                        end: "(?=\\\\end\\{" + e + "\\})",
                      };
                    },
                    E = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "string";
                      return {
                        relevance: 0,
                        begin: /\{/,
                        starts: {
                          endsParent: !0,
                          contains: [
                            {
                              className: e,
                              end: /(?=\})/,
                              endsParent: !0,
                              contains: [
                                {
                                  begin: /\{/,
                                  end: /\}/,
                                  relevance: 0,
                                  contains: ["self"],
                                },
                              ],
                            },
                          ],
                        },
                      };
                    },
                    f = [].concat(
                      d(
                        ["verb", "lstinline"].map(function (e) {
                          return D(e, { contains: [m()] });
                        })
                      ),
                      [
                        D("mint", g(c, { contains: [m()] })),
                        D("mintinline", g(c, { contains: [E(), m()] })),
                        D("url", { contains: [E("link"), E("link")] }),
                        D("hyperref", { contains: [E("link")] }),
                        D("href", g(l, { contains: [E("link")] })),
                      ],
                      d(
                        (n = []).concat.apply(
                          n,
                          d(
                            ["", "\\*"].map(function (e) {
                              return [
                                b("verbatim" + e, p("verbatim" + e)),
                                b(
                                  "filecontents" + e,
                                  g(c, p("filecontents" + e))
                                ),
                              ].concat(
                                d(
                                  ["", "B", "L"].map(function (n) {
                                    return b(
                                      n + "Verbatim" + e,
                                      g(l, p(n + "Verbatim" + e))
                                    );
                                  })
                                )
                              );
                            })
                          )
                        )
                      ),
                      [b("minted", g(l, g(c, p("minted"))))]
                    );
                  return {
                    name: "LaTeX",
                    aliases: ["tex"],
                    contains: [].concat(d(f), r),
                  };
                },
                grmr_lisp: function (e) {
                  var n = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",
                    t = "\\|[^]*?\\|",
                    a =
                      "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",
                    r = { className: "literal", begin: "\\b(t{1}|nil)\\b" },
                    i = {
                      className: "number",
                      variants: [
                        { begin: a, relevance: 0 },
                        { begin: "#(b|B)[0-1]+(/[0-1]+)?" },
                        { begin: "#(o|O)[0-7]+(/[0-7]+)?" },
                        { begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?" },
                        { begin: "#(c|C)\\(" + a + " +" + a, end: "\\)" },
                      ],
                    },
                    s = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
                    u = e.COMMENT(";", "$", { relevance: 0 }),
                    o = { begin: "\\*", end: "\\*" },
                    c = { className: "symbol", begin: "[:&]" + n },
                    l = { begin: n, relevance: 0 },
                    d = { begin: t },
                    g = {
                      contains: [
                        i,
                        s,
                        o,
                        c,
                        {
                          begin: "\\(",
                          end: "\\)",
                          contains: ["self", r, s, i, l],
                        },
                        l,
                      ],
                      variants: [
                        { begin: "['`]\\(", end: "\\)" },
                        {
                          begin: "\\(quote ",
                          end: "\\)",
                          keywords: { name: "quote" },
                        },
                        { begin: "'" + t },
                      ],
                    },
                    D = {
                      variants: [
                        { begin: "'" + n },
                        { begin: "#'" + n + "(::" + n + ")*" },
                      ],
                    },
                    b = { begin: "\\(\\s*", end: "\\)" },
                    m = { endsWithParent: !0, relevance: 0 };
                  return (
                    (b.contains = [
                      {
                        className: "name",
                        variants: [{ begin: n, relevance: 0 }, { begin: t }],
                      },
                      m,
                    ]),
                    (m.contains = [g, D, b, r, i, s, u, o, c, d, l]),
                    {
                      name: "Lisp",
                      illegal: /\S/,
                      contains: [i, e.SHEBANG(), r, s, u, g, D, b, l],
                    }
                  );
                },
                grmr_matlab: function (e) {
                  var n = "('|\\.')+",
                    t = { relevance: 0, contains: [{ begin: n }] };
                  return {
                    name: "Matlab",
                    keywords: {
                      keyword:
                        "arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while",
                      built_in:
                        "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell ",
                    },
                    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
                    contains: [
                      {
                        className: "function",
                        beginKeywords: "function",
                        end: "$",
                        contains: [
                          e.UNDERSCORE_TITLE_MODE,
                          {
                            className: "params",
                            variants: [
                              { begin: "\\(", end: "\\)" },
                              { begin: "\\[", end: "\\]" },
                            ],
                          },
                        ],
                      },
                      {
                        className: "built_in",
                        begin: /true|false/,
                        relevance: 0,
                        starts: t,
                      },
                      { begin: "[a-zA-Z][a-zA-Z_0-9]*('|\\.')+", relevance: 0 },
                      {
                        className: "number",
                        begin: e.C_NUMBER_RE,
                        relevance: 0,
                        starts: t,
                      },
                      {
                        className: "string",
                        begin: "'",
                        end: "'",
                        contains: [{ begin: "''" }],
                      },
                      { begin: /\]|\}|\)/, relevance: 0, starts: t },
                      {
                        className: "string",
                        begin: '"',
                        end: '"',
                        contains: [{ begin: '""' }],
                        starts: t,
                      },
                      e.COMMENT("^\\s*%\\{\\s*$", "^\\s*%\\}\\s*$"),
                      e.COMMENT("%", "$"),
                    ],
                  };
                },
                grmr_ocaml: function (e) {
                  return {
                    name: "OCaml",
                    aliases: ["ml"],
                    keywords: {
                      $pattern: "[a-z_]\\w*!?",
                      keyword:
                        "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
                      built_in:
                        "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
                      literal: "true false",
                    },
                    illegal: /\/\/|>>/,
                    contains: [
                      {
                        className: "literal",
                        begin: "\\[(\\|\\|)?\\]|\\(\\)",
                        relevance: 0,
                      },
                      e.COMMENT("\\(\\*", "\\*\\)", { contains: ["self"] }),
                      { className: "symbol", begin: "'[A-Za-z_](?!')[\\w']*" },
                      { className: "type", begin: "`[A-Z][\\w']*" },
                      {
                        className: "type",
                        begin: "\\b[A-Z][\\w']*",
                        relevance: 0,
                      },
                      { begin: "[a-z_]\\w*'[\\w']*", relevance: 0 },
                      e.inherit(e.APOS_STRING_MODE, {
                        className: "string",
                        relevance: 0,
                      }),
                      e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
                      {
                        className: "number",
                        begin:
                          "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
                        relevance: 0,
                      },
                      { begin: /->/ },
                    ],
                  };
                },
                grmr_protobuf: function (e) {
                  var n = {
                    match: [/(message|enum|service)\s+/, e.IDENT_RE],
                    scope: { 1: "keyword", 2: "title.class" },
                  };
                  return {
                    name: "Protocol Buffers",
                    keywords: {
                      keyword: [
                        "package",
                        "import",
                        "option",
                        "optional",
                        "required",
                        "repeated",
                        "group",
                        "oneof",
                      ],
                      type: [
                        "double",
                        "float",
                        "int32",
                        "int64",
                        "uint32",
                        "uint64",
                        "sint32",
                        "sint64",
                        "fixed32",
                        "fixed64",
                        "sfixed32",
                        "sfixed64",
                        "bool",
                        "string",
                        "bytes",
                      ],
                      literal: ["true", "false"],
                    },
                    contains: [
                      e.QUOTE_STRING_MODE,
                      e.NUMBER_MODE,
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      n,
                      {
                        className: "function",
                        beginKeywords: "rpc",
                        end: /[{;]/,
                        excludeEnd: !0,
                        keywords: "rpc returns",
                      },
                      { begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/ },
                    ],
                  };
                },
                grmr_r: function (e) {
                  var n = e.regex,
                    t = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
                    a = n.either(
                      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
                      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
                      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
                    ),
                    r =
                      /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
                    i = n.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
                  return {
                    name: "R",
                    keywords: {
                      $pattern: t,
                      keyword:
                        "function if in break next repeat else for while",
                      literal:
                        "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                      built_in:
                        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
                    },
                    contains: [
                      e.COMMENT(/#'/, /$/, {
                        contains: [
                          {
                            scope: "doctag",
                            match: /@examples/,
                            starts: {
                              end: n.lookahead(
                                n.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)
                              ),
                              endsParent: !0,
                            },
                          },
                          {
                            scope: "doctag",
                            begin: "@param",
                            end: /$/,
                            contains: [
                              {
                                scope: "variable",
                                variants: [
                                  { match: t },
                                  { match: /`(?:\\.|[^`\\])+`/ },
                                ],
                                endsParent: !0,
                              },
                            ],
                          },
                          { scope: "doctag", match: /@[a-zA-Z]+/ },
                          { scope: "keyword", match: /\\[a-zA-Z]+/ },
                        ],
                      }),
                      e.HASH_COMMENT_MODE,
                      {
                        scope: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\(/,
                            end: /\)(-*)"/,
                          }),
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\{/,
                            end: /\}(-*)"/,
                          }),
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]"(-*)\[/,
                            end: /\](-*)"/,
                          }),
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\(/,
                            end: /\)(-*)'/,
                          }),
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\{/,
                            end: /\}(-*)'/,
                          }),
                          e.END_SAME_AS_BEGIN({
                            begin: /[rR]'(-*)\[/,
                            end: /\](-*)'/,
                          }),
                          { begin: '"', end: '"', relevance: 0 },
                          { begin: "'", end: "'", relevance: 0 },
                        ],
                      },
                      {
                        relevance: 0,
                        variants: [
                          {
                            scope: { 1: "operator", 2: "number" },
                            match: [r, a],
                          },
                          {
                            scope: { 1: "operator", 2: "number" },
                            match: [/%[^%]*%/, a],
                          },
                          {
                            scope: { 1: "punctuation", 2: "number" },
                            match: [i, a],
                          },
                          {
                            scope: { 2: "number" },
                            match: [/[^a-zA-Z0-9._]|^/, a],
                          },
                        ],
                      },
                      {
                        scope: { 3: "operator" },
                        match: [t, /\s+/, /<-/, /\s+/],
                      },
                      {
                        scope: "operator",
                        relevance: 0,
                        variants: [{ match: r }, { match: /%[^%]*%/ }],
                      },
                      { scope: "punctuation", relevance: 0, match: i },
                      { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
                    ],
                  };
                },
                grmr_scala: function (e) {
                  var n = e.regex,
                    t = {
                      className: "subst",
                      variants: [
                        { begin: "\\$[A-Za-z0-9_]+" },
                        { begin: /\$\{/, end: /\}/ },
                      ],
                    },
                    a = {
                      className: "string",
                      variants: [
                        { begin: '"""', end: '"""' },
                        {
                          begin: '"',
                          end: '"',
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE],
                        },
                        {
                          begin: '[a-z]+"',
                          end: '"',
                          illegal: "\\n",
                          contains: [e.BACKSLASH_ESCAPE, t],
                        },
                        {
                          className: "string",
                          begin: '[a-z]+"""',
                          end: '"""',
                          contains: [t],
                          relevance: 10,
                        },
                      ],
                    },
                    r = {
                      className: "type",
                      begin: "\\b[A-Z][A-Za-z0-9_]*",
                      relevance: 0,
                    },
                    i = {
                      className: "title",
                      begin:
                        /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
                      relevance: 0,
                    },
                    s = {
                      className: "class",
                      beginKeywords: "class object trait type",
                      end: /[:={\[\n;]/,
                      excludeEnd: !0,
                      contains: [
                        e.C_LINE_COMMENT_MODE,
                        e.C_BLOCK_COMMENT_MODE,
                        { beginKeywords: "extends with", relevance: 10 },
                        {
                          begin: /\[/,
                          end: /\]/,
                          excludeBegin: !0,
                          excludeEnd: !0,
                          relevance: 0,
                          contains: [r],
                        },
                        {
                          className: "params",
                          begin: /\(/,
                          end: /\)/,
                          excludeBegin: !0,
                          excludeEnd: !0,
                          relevance: 0,
                          contains: [r],
                        },
                        i,
                      ],
                    },
                    u = {
                      className: "function",
                      beginKeywords: "def",
                      end: n.lookahead(/[:={\[(\n;]/),
                      contains: [i],
                    };
                  return {
                    name: "Scala",
                    keywords: {
                      literal: "true false null",
                      keyword:
                        "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given",
                    },
                    contains: [
                      e.C_LINE_COMMENT_MODE,
                      e.C_BLOCK_COMMENT_MODE,
                      a,
                      r,
                      u,
                      s,
                      e.C_NUMBER_MODE,
                      {
                        begin: [/^\s*/, "extension", /\s+(?=[[(])/],
                        beginScope: { 2: "keyword" },
                      },
                      [
                        {
                          begin: [/^\s*/, /end/, /\s+/, /(extension\b)?/],
                          beginScope: { 2: "keyword", 4: "keyword" },
                        },
                      ],
                    ].concat(
                      [
                        { match: /\.inline\b/ },
                        { begin: /\binline(?=\s)/, keywords: "inline" },
                      ],
                      [
                        {
                          begin: [/\(\s*/, /using/, /\s+(?!\))/],
                          beginScope: { 2: "keyword" },
                        },
                        { className: "meta", begin: "@[A-Za-z]+" },
                      ]
                    ),
                  };
                },
                grmr_scheme: function (e) {
                  var n = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
                    t = "(-|\\+)?\\d+([./]\\d+)?",
                    a = {
                      $pattern: n,
                      built_in:
                        "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?",
                    },
                    r = {
                      className: "literal",
                      begin: "(#t|#f|#\\\\" + n + "|#\\\\.)",
                    },
                    i = {
                      className: "number",
                      variants: [
                        { begin: t, relevance: 0 },
                        {
                          begin:
                            "(-|\\+)?\\d+([./]\\d+)?[+\\-](-|\\+)?\\d+([./]\\d+)?i",
                          relevance: 0,
                        },
                        { begin: "#b[0-1]+(/[0-1]+)?" },
                        { begin: "#o[0-7]+(/[0-7]+)?" },
                        { begin: "#x[0-9a-f]+(/[0-9a-f]+)?" },
                      ],
                    },
                    s = e.QUOTE_STRING_MODE,
                    u = [
                      e.COMMENT(";", "$", { relevance: 0 }),
                      e.COMMENT("#\\|", "\\|#"),
                    ],
                    o = { begin: n, relevance: 0 },
                    c = { className: "symbol", begin: "'" + n },
                    l = { endsWithParent: !0, relevance: 0 },
                    d = {
                      variants: [{ begin: /'/ }, { begin: "`" }],
                      contains: [
                        {
                          begin: "\\(",
                          end: "\\)",
                          contains: ["self", r, s, i, o, c],
                        },
                      ],
                    },
                    g = {
                      className: "name",
                      relevance: 0,
                      begin: n,
                      keywords: a,
                    },
                    D = {
                      variants: [
                        { begin: "\\(", end: "\\)" },
                        { begin: "\\[", end: "\\]" },
                      ],
                      contains: [
                        {
                          begin: /lambda/,
                          endsWithParent: !0,
                          returnBegin: !0,
                          contains: [
                            g,
                            {
                              endsParent: !0,
                              variants: [
                                { begin: /\(/, end: /\)/ },
                                { begin: /\[/, end: /\]/ },
                              ],
                              contains: [o],
                            },
                          ],
                        },
                        g,
                        l,
                      ],
                    };
                  return (
                    (l.contains = [r, i, s, o, c, d, D].concat(u)),
                    {
                      name: "Scheme",
                      illegal: /\S/,
                      contains: [e.SHEBANG(), i, s, c, d, D].concat(u),
                    }
                  );
                },
                grmr_vbnet: function (e) {
                  var n = e.regex,
                    t = /\d{1,2}\/\d{1,2}\/\d{4}/,
                    a = /\d{4}-\d{1,2}-\d{1,2}/,
                    r = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
                    i = /\d{1,2}(:\d{1,2}){1,2}/,
                    s = {
                      className: "literal",
                      variants: [
                        { begin: n.concat(/# */, n.either(a, t), / *#/) },
                        { begin: n.concat(/# */, i, / *#/) },
                        { begin: n.concat(/# */, r, / *#/) },
                        {
                          begin: n.concat(
                            /# */,
                            n.either(a, t),
                            / +/,
                            n.either(r, i),
                            / *#/
                          ),
                        },
                      ],
                    },
                    u = e.COMMENT(/'''/, /$/, {
                      contains: [
                        { className: "doctag", begin: /<\/?/, end: />/ },
                      ],
                    }),
                    o = e.COMMENT(null, /$/, {
                      variants: [
                        { begin: /'/ },
                        { begin: /([\t ]|^)REM(?=\s)/ },
                      ],
                    });
                  return {
                    name: "Visual Basic .NET",
                    aliases: ["vb"],
                    case_insensitive: !0,
                    classNameAliases: { label: "symbol" },
                    keywords: {
                      keyword:
                        "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                      built_in:
                        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                      type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                      literal: "true false nothing",
                    },
                    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
                    contains: [
                      { className: "string", begin: /"(""|[^/n])"C\b/ },
                      {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        illegal: /\n/,
                        contains: [{ begin: /""/ }],
                      },
                      s,
                      {
                        className: "number",
                        relevance: 0,
                        variants: [
                          {
                            begin:
                              /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
                          },
                          { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
                          { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
                          { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
                          { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
                        ],
                      },
                      { className: "label", begin: /^\w+:/ },
                      u,
                      o,
                      {
                        className: "meta",
                        begin:
                          /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                        end: /$/,
                        keywords: {
                          keyword:
                            "const disable else elseif enable end externalsource if region then",
                        },
                        contains: [o],
                      },
                    ],
                  };
                },
                grmr_vhdl: function (e) {
                  return {
                    name: "VHDL",
                    case_insensitive: !0,
                    keywords: {
                      keyword: [
                        "abs",
                        "access",
                        "after",
                        "alias",
                        "all",
                        "and",
                        "architecture",
                        "array",
                        "assert",
                        "assume",
                        "assume_guarantee",
                        "attribute",
                        "begin",
                        "block",
                        "body",
                        "buffer",
                        "bus",
                        "case",
                        "component",
                        "configuration",
                        "constant",
                        "context",
                        "cover",
                        "disconnect",
                        "downto",
                        "default",
                        "else",
                        "elsif",
                        "end",
                        "entity",
                        "exit",
                        "fairness",
                        "file",
                        "for",
                        "force",
                        "function",
                        "generate",
                        "generic",
                        "group",
                        "guarded",
                        "if",
                        "impure",
                        "in",
                        "inertial",
                        "inout",
                        "is",
                        "label",
                        "library",
                        "linkage",
                        "literal",
                        "loop",
                        "map",
                        "mod",
                        "nand",
                        "new",
                        "next",
                        "nor",
                        "not",
                        "null",
                        "of",
                        "on",
                        "open",
                        "or",
                        "others",
                        "out",
                        "package",
                        "parameter",
                        "port",
                        "postponed",
                        "procedure",
                        "process",
                        "property",
                        "protected",
                        "pure",
                        "range",
                        "record",
                        "register",
                        "reject",
                        "release",
                        "rem",
                        "report",
                        "restrict",
                        "restrict_guarantee",
                        "return",
                        "rol",
                        "ror",
                        "select",
                        "sequence",
                        "severity",
                        "shared",
                        "signal",
                        "sla",
                        "sll",
                        "sra",
                        "srl",
                        "strong",
                        "subtype",
                        "then",
                        "to",
                        "transport",
                        "type",
                        "unaffected",
                        "units",
                        "until",
                        "use",
                        "variable",
                        "view",
                        "vmode",
                        "vprop",
                        "vunit",
                        "wait",
                        "when",
                        "while",
                        "with",
                        "xnor",
                        "xor",
                      ],
                      built_in: [
                        "boolean",
                        "bit",
                        "character",
                        "integer",
                        "time",
                        "delay_length",
                        "natural",
                        "positive",
                        "string",
                        "bit_vector",
                        "file_open_kind",
                        "file_open_status",
                        "std_logic",
                        "std_logic_vector",
                        "unsigned",
                        "signed",
                        "boolean_vector",
                        "integer_vector",
                        "std_ulogic",
                        "std_ulogic_vector",
                        "unresolved_unsigned",
                        "u_unsigned",
                        "unresolved_signed",
                        "u_signed",
                        "real_vector",
                        "time_vector",
                      ],
                      literal: [
                        "false",
                        "true",
                        "note",
                        "warning",
                        "error",
                        "failure",
                        "line",
                        "text",
                        "side",
                        "width",
                      ],
                    },
                    illegal: /\{/,
                    contains: [
                      e.C_BLOCK_COMMENT_MODE,
                      e.COMMENT("--", "$"),
                      e.QUOTE_STRING_MODE,
                      {
                        className: "number",
                        begin:
                          "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
                        relevance: 0,
                      },
                      {
                        className: "string",
                        begin: "'(U|X|0|1|Z|W|L|H|-)'",
                        contains: [e.BACKSLASH_ESCAPE],
                      },
                      {
                        className: "symbol",
                        begin: "'[A-Za-z](_?[A-Za-z0-9])*",
                        contains: [e.BACKSLASH_ESCAPE],
                      },
                    ],
                  };
                },
              }),
              sn = fe,
              un = 0,
              on = Object.keys(rn);
            un < on.length;
            un++
          ) {
            var cn = on[un],
              ln = cn.replace("grmr_", "").replace("_", "-");
            sn.registerLanguage(ln, rn[cn]);
          }
          return sn;
        })();
        "object" === E(n) && (e.exports = f);
      },
      32974: (e, n, t) => {
        var a = t(41279),
          r = t(27672);
        void 0 === r.hljs && (r.hljs = a), (e.exports = a);
      },
      27672: (e, n, t) => {
        "use strict";
        e.exports = (function () {
          if ("object" == typeof globalThis) return globalThis;
          var e;
          try {
            e = this || new Function("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
            if ("object" == typeof self) return self;
            if (void 0 !== t.g) return t.g;
          }
          return e;
        })();
      },
    },
    n = {};
  function t(a) {
    var r = n[a];
    if (void 0 !== r) return r.exports;
    var i = (n[a] = { exports: {} });
    return e[a](i, i.exports, t), i.exports;
  }
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (t.p = ""),
    (() => {
      "use strict";
      t.p = document.getElementById("webpack-public-path").innerText + "Js/";
    })(),
    (() => {
      "use strict";
      var e, n;
      t(32974);
      (StackExchange = window.StackExchange = window.StackExchange || {}),
        (StackOverflow = window.StackOverflow = window.StackOverflow || {});
      class a {
        constructor() {
          this.originalStream = null;
        }
        "before:highlightElement"({ el: e }) {
          this.originalStream = this.nodeStream(e);
        }
        "after:highlightElement"({ el: e, result: n, text: t }) {
          if (!this.originalStream.length) return;
          const a = document.createElement("div");
          (a.innerHTML = n.value),
            (n.value = this.mergeStreams(
              this.originalStream,
              this.nodeStream(a),
              t
            )),
            (e.innerHTML = n.value);
        }
        nodeStream(e) {
          const n = [];
          return (
            (function e(t, a) {
              for (let s = t.firstChild; s; s = s.nextSibling)
                s.nodeType === Node.TEXT_NODE
                  ? (a += s.nodeValue.length)
                  : s.nodeType === Node.ELEMENT_NODE &&
                    (n.push(new r("start", a, s)),
                    (a = e(s, a)),
                    i(s).match(/br|hr|img|input/) ||
                      n.push(new r("stop", a, s)));
              return a;
            })(e, 0),
            n
          );
        }
        selectStream(e, n) {
          return e.length && n.length
            ? e[0].offset !== n[0].offset
              ? e[0].offset < n[0].offset
                ? e
                : n
              : "start" === n[0].event
              ? e
              : n
            : e.length
            ? e
            : n;
        }
        mergeStreams(e, n, t) {
          let a = 0,
            r = "";
          const i = [];
          for (; e.length || n.length; ) {
            let u = this.selectStream(e, n);
            if (
              ((r += s(t.substring(a, u[0].offset))),
              (a = u[0].offset),
              u === e)
            ) {
              i.reverse().forEach((e) => (r += e.close()));
              do {
                (r += u.splice(0, 1)[0].render()),
                  (u = this.selectStream(e, n));
              } while (u === e && u.length && u[0].offset === a);
              i.reverse().forEach((e) => (r += e.open()));
            } else
              "start" === u[0].event ? i.push(u[0]) : i.pop(),
                (r += u.splice(0, 1)[0].render());
          }
          return r + s(t.substr(a));
        }
      }
      class r {
        constructor(e, n, t) {
          (this.event = e), (this.offset = n), (this.node = t);
        }
        open() {
          return (
            "<" +
            i(this.node) +
            [].map.call(this.node.attributes, this.attributeString).join("") +
            ">"
          );
        }
        close() {
          return "</" + i(this.node) + ">";
        }
        render() {
          return "start" === this.event ? this.open() : this.close();
        }
        attributeString(e) {
          return " " + e.nodeName + '="' + s(e.value) + '"';
        }
      }
      function i(e) {
        return e.nodeName.toLowerCase();
      }
      function s(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
      }
      (StackExchange = window.StackExchange = window.StackExchange || {}),
        (StackOverflow = window.StackOverflow = window.StackOverflow || {}),
        (StackExchange.highlightjs =
          ((e = {
            none: "plaintext",
            bsh: "bash",
            csh: "bash",
            sh: "bash",
            cc: "cpp",
            cxx: "cpp",
            cyc: "c",
            m: "c",
            "c-like": "c",
            cs: "csharp",
            coffee: "coffeescript",
            html: "xml",
            xsl: "xml",
            js: "javascript",
            pl: "perl",
            py: "python",
            cv: "python",
            rb: "ruby",
            clj: "clojure",
            erl: "erlang",
            hs: "haskell",
            mma: "mathematica",
            tex: "latex",
            cl: "lisp",
            el: "lisp",
            lsp: "lisp",
            scm: "scheme",
            ss: "scheme",
            rkt: "scheme",
            fs: "ocaml",
            ml: "ocaml",
            s: "r",
            rc: "rust",
            rs: "rust",
            vb: "vbnet",
            vbs: "vbnet",
            vhd: "vhdl",
          }),
          (n = window.hljs),
          Object.keys(e).forEach(function (t) {
            n.registerAliases(t, { languageName: e[t] });
          }),
          n.configure({ noHighlightRe: /^none$/, ignoreUnescapedHTML: !0 }),
          n.addPlugin({
            "before:highlight": function (e) {
              "no-highlight" === e.language &&
                (e.result = n.highlightAuto(e.code));
            },
          }),
          n.addPlugin(new a()),
          n.addPlugin({
            "after:highlightElement": function (e) {
              var n = "CODE" === e.el.tagName ? e.el.parentElement : e.el,
                t = /linenums(:\d+)?/.exec(n);
              if (t) {
                var a = 1;
                t[1] && (a = +t[1].slice(1));
                var r = e.el.innerText.trim().split(/\r?\n/),
                  i = document.createElement("code");
                i.classList.add("s-code-block--line-numbers");
                for (var s = 0; s < r.length; s++) {
                  var u = document.createElement("div");
                  (u.innerText = s + a), i.append(u);
                }
                n.prepend(i);
              }
            },
          }),
          { instance: n })),
        (StackExchange = window.StackExchange = window.StackExchange || {}),
        (StackOverflow = window.StackOverflow = window.StackOverflow || {});
    })();
})();
