! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        u = {},
        c = u.toString,
        f = u.hasOwnProperty,
        h = f.toString,
        d = h.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, o, s = (n = n || i).createElement("script");
        if (s.text = e, t)
            for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function _(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
            return new b.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = _(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.4.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (b.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || b.isPlainObject(n) ? n : {}, r = !1, s[t] = b.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, b.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (E(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                a = [];
            if (E(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, r, o, s, a, l, u, c, f, h, d, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            T = 0,
            x = le(),
            C = le(),
            S = le(),
            D = le(),
            A = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            I = [],
            k = I.pop,
            O = I.push,
            j = I.push,
            L = I.slice,
            H = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
            F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(q + "+", "g"),
            B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            U = new RegExp("^" + q + "*," + q + "*"),
            K = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            Q = new RegExp(q + "|>"),
            $ = new RegExp(F),
            z = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                h()
            },
            se = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            j.apply(I = L.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
        } catch (e) {
            j = {
                apply: I.length ? function(e, t) {
                    O.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, r) {
            var o, a, u, c, f, p, v, y = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), t = t || d, g)) {
                if (11 !== E && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === E) {
                            if (!(u = t.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i
                        } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i
                    } else {
                        if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === E && Q.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = b), a = (p = s(e)).length; a--;) p[a] = "#" + c + " " + _e(p[a]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return j.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, r)
        }

        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ue(e) {
            return e[b] = !0, e
        }

        function ce(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ue(function(t) {
                return t = +t, ue(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, h = ae.setDocument = function(e) {
                var t, r, s = e ? e.ownerDocument || e : w;
                return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), w !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ce(function(e) {
                    return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ce(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + q + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === w && _(w, e) ? -1 : t === d || t.ownerDocument === w && _(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                    if (r === o) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, d) : d
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && h(e), n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    D(t, !0)
                }
                return ae(t, d, null, [e]).length > 0
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && h(e), _(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== d && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, re)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return c = null, e
            }, r = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && x(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = ae.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                _ = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (_ = (d = (u = (c = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop();)
                                        if (1 === h.nodeType && ++_ && h === t) {
                                            c[e] = [E, d, _];
                                            break
                                        }
                                } else if (y && (_ = d = (u = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === _)
                                    for (;
                                        (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, _]), h !== t)););
                                return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = H(e, o[s])] = !(n[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(B, "$1"));
                        return i[b] ? ue(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ue(function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }),
                    contains: ue(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ue(function(e) {
                        return z.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function be(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u, c, f, h = [E, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === E && u[1] === a) return h[2] = u[2];
                                if (c[o] = h, h[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function Te(e, t, n, i, r, o) {
            return i && !i[b] && (i = Te(i)), r && !r[b] && (r = Te(r, o)), ue(function(o, s, a, l) {
                var u, c, f, h = [],
                    d = [],
                    p = s.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : Ee(g, h, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (u = Ee(v, d), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (u = r ? H(o, f) : h[c]) > -1 && (o[u] = !(s[u] = f))
                    }
                } else v = Ee(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : j.apply(s, v)
            })
        }

        function xe(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = be(function(e) {
                    return e === t
                }, a, !0), f = be(function(e) {
                    return H(t, e) > -1
                }, a, !0), h = [function(e, n, i) {
                    var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) h = [be(we(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return Te(l > 1 && we(h), l > 1 && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && _e(e))
                    }
                    h.push(n)
                }
            return we(h)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
            var n, r, o, s, a, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = i.preFilter; a;) {
                for (s in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = K.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, r = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                for (t || (t = s(e)), n = t.length; n--;)(a = xe(t[n]))[b] ? r.push(a) : o.push(a);
                (a = S(e, function(e, t) {
                    var n = t.length > 0,
                        r = e.length > 0,
                        o = function(o, s, a, l, c) {
                            var f, p, m, v = 0,
                                y = "0",
                                _ = o && [],
                                b = [],
                                w = u,
                                T = o || r && i.find.TAG("*", c),
                                x = E += null == w ? 1 : Math.random() || .1,
                                C = T.length;
                            for (c && (u = s === d || s || c); y !== C && null != (f = T[y]); y++) {
                                if (r && f) {
                                    for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];)
                                        if (m(f, s || d, a)) {
                                            l.push(f);
                                            break
                                        }
                                    c && (E = x)
                                }
                                n && ((f = !m && f) && v--, o && _.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (p = 0; m = t[p++];) m(_, b, s, a);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) _[y] || b[y] || (b[y] = k.call(l));
                                    b = Ee(b)
                                }
                                j.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                            }
                            return c && (E = x, u = w), _
                        };
                    return n ? ue(o) : o
                }(o, r))).selector = e
            }
            return a
        }, l = ae.select = function(e, t, n, r) {
            var o, l, u, c, f, h = "function" == typeof e && e,
                d = !r && s(e = h.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                    if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && _e(l))) return j.apply(n, r), n;
                        break
                    }
            }
            return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(P, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    b.find = T, b.expr = T.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = T.uniqueSort, b.text = T.getText, b.isXMLDoc = T.isXML, b.contains = T.contains, b.escapeSelector = T.escape;
    var x = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && b(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = b.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, t, n) {
        return g(t) ? b.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? b.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, b.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, r[t], n);
            return i > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
        }
    });
    var I, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || I, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && b.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, I = b(i);
    var O = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && b(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(b(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, function(e, t) {
        b.fn[e] = function(n, i) {
            var r = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), this.length > 1 && (j[e] || b.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(H) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : b.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            l = function() {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        b.each(n, function(n, i) {
                            g(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== _(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return b.each(arguments, function(e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, b.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return b.Deferred(function(t) {
                            b.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, g(u) ? r ? u.call(e, s(o, n, P, r), s(o, n, q, r)) : (o++, u.call(e, s(o, n, P, r), s(o, n, q, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== q && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred(function(e) {
                            n[0][3].add(s(0, e, g(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : P)), n[2][3].add(s(0, e, g(i) ? i : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                o = {};
            return b.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = b.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
            for (; n--;) R(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = b.Deferred();

    function W() {
        i.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), b.ready()
    }
    b.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            b.readyException(e)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || F.resolveWith(i, [b]))
        }
    }), b.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var B = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === _(n))
                for (a in r = !0, n) B(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, g(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(b(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        K = /-([a-z])/g;

    function Q(e, t) {
        return t.toUpperCase()
    }

    function $(e) {
        return e.replace(U, "ms-").replace(K, Q)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = b.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[$(t)] = n;
            else
                for (i in t) r[$(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var Y = new V,
        X = new V,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                X.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return X.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), b.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = X.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = $(i.slice(5)), Z(o, i, r[i]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                X.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = X.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() {
                    X.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }), b.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, b.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                b.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = b.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = i.documentElement,
        re = function(e) {
            return b.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    ie.getRootNode && (re = function(e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === b.css(e, "display")
        },
        ae = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function le(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return b.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (b.cssNumber[t] || "px" !== u && +l) && te.exec(b.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) b.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, b.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var ue = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = ue[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = b.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ue[i] = r, r)
    }

    function fe(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && se(i) && (r[o] = ce(i))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? b.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, _e, be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === _(o)) b.merge(h, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + b.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            b.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = h[d++];)
            if (i && b.inArray(o, i) > -1) r && r.push(o);
            else if (u = re(o), s = me(f.appendChild(o), "script"), u && ve(s), n)
            for (c = 0; o = s[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (_e = i.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), ye.appendChild(_e), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Se() {
        return !1
    }

    function De(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return b().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = b.guid++)), e.each(function() {
            b.event.add(this, t, r, i, n)
        })
    }

    function Ne(e, t, n) {
        n ? (Y.set(e, t, !1), b.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments), Y.set(this, t, s), i = n(this, t), this[t](), s !== (r = Y.get(this, t)) || i ? Y.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else s.length && (Y.set(this, t, {
                    value: b.event.trigger(b.extend(s[0], b.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && b.event.add(e, t, Ce)
    }
    b.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = Y.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && b.find.matchesSelector(ie, r), n.guid || (n.guid = b.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(H) || [""]).length; u--;) d = g = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = b.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = b.event.special[d] || {}, c = b.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && b.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), b.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                    if (d = g = (a = xe.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = b.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || b.removeEvent(e, d, m.handle), delete l[d])
                    } else
                        for (d in l) b.event.remove(e, d + t[u], n, i, !0);
                b.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = b.event.fix(e),
                l = new Array(arguments.length),
                u = (Y.get(this, "events") || {})[a.type] || [],
                c = b.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = b.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((b.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? b(r, this).index(u) > -1 : b.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && D(t, "input") && Ne(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && D(t, "input") && Ne(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && D(t, "input") && Y.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp), b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        b.event.special[e] = {
            setup: function() {
                return Ne(this, e, De), !1
            },
            trigger: function() {
                return Ne(this, e), !0
            },
            delegateType: t
        }
    }), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || b.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.fn.extend({
        on: function(e, t, n, i) {
            return Ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function qe(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) b.event.add(t, r, u[r][n]);
            X.hasData(e) && (a = X.access(e), l = b.extend({}, a), X.set(t, l))
        }
    }

    function Re(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, u, c, f = 0,
            h = e.length,
            d = h - 1,
            m = t[0],
            v = g(m);
        if (v || h > 1 && "string" == typeof m && !p.checkClone && Oe.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), Re(o, t, n, i)
        });
        if (h && (o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = b.map(me(r, "script"), He)).length; f < h; f++) u = r, f !== d && (u = b.clone(u, !0, !0), l && b.merge(a, me(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument, b.map(a, Pe), f = 0; f < l; f++) u = a[f], pe.test(u.type || "") && !Y.access(u, "globalEval") && b.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? b._evalUrl && !u.noModule && b._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : y(u.textContent.replace(je, ""), u, c))
        }
        return e
    }

    function Me(e, t, n) {
        for (var i, r = t ? b.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || b.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                f = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], l = s[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), s = s || me(c), i = 0, r = o.length; i < r; i++) qe(o[i], s[i]);
                else qe(e, c);
            return (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            for (var n, i = [], r = b(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), b(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(ne.join("|"), "i");

    function Ue(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = b.style(e, t)), !p.pixelBoxStyles() && Fe.test(s) && Be.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ke(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", s = 12 === n(c.offsetWidth / 3), ie.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, u = i.createElement("div"),
            c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        $e = i.createElement("div").style,
        ze = {};

    function Ve(e) {
        var t = b.cssProps[e] || ze[e];
        return t || (e in $e ? e : ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                if ((e = Qe[n] + t) in $e) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += b.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= b.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= b.css(e, "border" + ne[s] + "Width", !0, r))) : (l += b.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += b.css(e, "border" + ne[s] + "Width", !0, r) : a += b.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = We(e),
            r = (!p.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, i),
            o = r,
            s = Ue(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === b.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === b.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ue(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = $(t),
                    l = Xe.test(t),
                    u = e.style;
                if (l || (t = Ve(a)), s = b.cssHooks[t] || b.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = le(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (b.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = $(t);
            return Xe.test(t) || (t = Ve(a)), (s = b.cssHooks[t] || b.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ue(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Ye.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : ae(e, Ge, function() {
                    return tt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = We(e),
                    s = !p.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === b.css(e, "boxSizing", !1, o),
                    l = i ? et(e, t, i, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ze(0, n, l)
            }
        }
    }), b.cssHooks.marginLeft = Ke(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ze)
    }), b.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = We(e), r = t.length; s < r; s++) o[t[s]] = b.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), b.Tween = nt, nt.prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = nt.prototype.init, b.fx.step = {};
    var it, rt, ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;

    function at() {
        rt && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, b.fx.interval), b.fx.tick())
    }

    function lt() {
        return e.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function ut(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ct(e, t, n) {
        for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ft(e, t, n) {
        var i, r, o = 0,
            s = ft.prefilters.length,
            a = b.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = it || lt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = b.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = $(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = b.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); o < s; o++)
            if (i = ft.prefilters[o].call(u, e, c, u.opts)) return g(i.stop) && (b._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return b.map(c, ct, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), b.fx.timer(b.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    b.Animation = b.extend(ft, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(H);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                    h = this,
                    d = {},
                    p = e.style,
                    g = e.nodeType && se(e),
                    m = Y.get(e, "fxshow");
                for (i in n.queue || (null == (s = b._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function() {
                        h.always(function() {
                            s.unqueued--, b.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (r = t[i], ot.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        d[i] = m && m[i] || b.style(e, i)
                    }
                if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                    for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(e, "display")), "none" === (c = b.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = b.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === b.css(e, "float") && (l || (h.done(function() {
                            p.display = u
                        }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                        display: u
                    }), o && (m.hidden = !g), g && fe([e], !0), h.done(function() {
                        for (i in g || fe([e]), Y.remove(e, "fxshow"), d) b.style(e, i, d[i])
                    })), l = ct(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }), b.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
            }, i
        }, b.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = b.isEmptyObject(e),
                    o = b.speed(t, n, i),
                    s = function() {
                        var t = ft(this, b.extend({}, e), o);
                        (r || Y.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = b.timers,
                        s = Y.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && st.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || b.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Y.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = b.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, b.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), b.each(["toggle", "show", "hide"], function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, r)
            }
        }), b.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            b.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), b.timers = [], b.fx.tick = function() {
            var e, t = 0,
                n = b.timers;
            for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), it = void 0
        }, b.fx.timer = function(e) {
            b.timers.push(e), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            rt || (rt = !0, at())
        }, b.fx.stop = function() {
            rt = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(t, n) {
            return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var ht, dt = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return B(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        }
    }), b.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (r = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = b.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = dt[t] || b.find.attr;
        dt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = dt[s], dt[s] = r, r = null != n(e, t, i) ? s : null, dt[s] = o), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(H) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return B(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[b.propFix[e] || e]
            })
        }
    }), b.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, r = b.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, vt(this)))
            });
            if ((t = yt(e)).length)
                for (; n = this[l++];)
                    if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = mt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, vt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
                for (; n = this[l++];)
                    if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = mt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, vt(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = b(this), s = yt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, b(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = b.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : mt(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = b.makeArray(t), s = r.length; s--;)((i = r[s]).selected = b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, p.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, u, c, h, d, p, v = [r || i],
                y = f.call(t, "type") ? t.type : t,
                _ = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[b.expando] ? t : new b.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : b.makeArray(n, [t]), d = b.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !m(r)) {
                    for (u = d.delegateType || y, bt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = s > 1 ? u : d.bindType || y, (h = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && h.apply(a, n), (h = c && a[c]) && h.apply && z(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !z(r) || c && g(r[y]) && !m(r) && ((l = r[c]) && (r[c] = null), b.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, wt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, wt), b.event.triggered = void 0, l && (r[c] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(i, null, t)
        }
    }), b.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    }), p.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Y.access(i, t);
                r || i.addEventListener(e, n, !0), Y.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Y.access(i, t) - 1;
                r ? Y.access(i, t, r) : (i.removeEventListener(e, n, !0), Y.remove(i, t))
            }
        }
    });
    var Et = e.location,
        Tt = Date.now(),
        xt = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        St = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function Nt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) b.each(t, function(t, r) {
            n || Ct.test(e) ? i(e, r) : Nt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== _(t)) i(e, t);
        else
            for (r in t) Nt(e + "[" + r + "]", t[r], n, i)
    }
    b.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Nt(n, e[n], t, r);
        return i.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        kt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Pt = {},
        qt = {},
        Rt = "*/".concat("*"),
        Mt = i.createElement("a");

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(H) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Wt(e, t, n, i) {
        var r = {},
            o = e === qt;

        function s(a) {
            var l;
            return r[a] = !0, b.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Bt(e, t) {
        var n, i, r = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && b.extend(!0, e, i), e
    }
    Mt.href = Et.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, b.ajaxSettings), t) : Bt(b.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Pt),
        ajaxTransport: Ft(qt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, f, h, d, p = b.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                v = b.Deferred(),
                y = b.Callbacks("once memory"),
                _ = p.statusCode || {},
                w = {},
                E = {},
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) x.always(e[x.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || Et.href) + "").replace(Ht, Et.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), Wt(Pt, p, n, x), c) return x;
            for (h in (f = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Lt.test(p.type), o = p.url.replace(kt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (xt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ot, "$1"), d = (xt.test(o) ? "&" : "?") + "_=" + Tt++ + d), p.url = o + d), p.ifModified && (b.lastModified[o] && x.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && x.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
            if (T = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = Wt(qt, p, n, x)) {
                if (x.readyState = 1, f && m.trigger("ajaxSend", [x, p]), c) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(w, C)
                } catch (e) {
                    if (c) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, a) {
                var u, h, d, w, E, T = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, x, i)), w = function(e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, x, u), u ? (p.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (b.lastModified[o] = E), (E = x.getResponseHeader("etag")) && (b.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, h = w.data, u = !(d = w.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", u ? v.resolveWith(g, [h, T, x]) : v.rejectWith(g, [x, T, d]), x.statusCode(_), _ = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : d]), y.fireWith(g, [x, T]), f && (m.trigger("ajaxComplete", [x, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], function(e, t) {
        b[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, b.isPlainObject(e) && e))
        }
    }), b._evalUrl = function(e, t) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                b.globalEval(e, t)
            }
        })
    }, b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Kt = b.ajaxSettings.xhr();
    p.cors = !!Kt && "withCredentials" in Kt, p.ajax = Kt = !!Kt, b.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Kt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, o) {
                t = b("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Qt, $t = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || b.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + r) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || b.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? b(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Qt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, s), s && s.length && b(s).remove(), b.merge([], o.childNodes)));
        var r, o, s
    }, b.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = mt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }, b.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = b.css(e, "position"),
                c = b(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = b.css(e, "top"), l = b.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, b.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = b(e).offset()).top += b.css(e, "borderTopWidth", !0), r.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - b.css(i, "marginTop", !0),
                    left: t.left - r.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(i) {
            return B(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = Ke(p.pixelPosition, function(e, n) {
            if (n) return n = Ue(e, t), Fe.test(n) ? b(e).position()[t] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            b.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return B(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? b.css(t, n, a) : b.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), b.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, r
    }, b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = D, b.isFunction = g, b.isWindow = m, b.camelCase = $, b.type = _, b.now = Date.now, b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var Vt = e.jQuery,
        Yt = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Yt), t && e.jQuery === b && (e.jQuery = Vt), b
    }, t || (e.jQuery = e.$ = b), b
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                var i, r, o;
                i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var o = "transitionend";
    var s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(o)
        },
        supportsTransitionEnd: function() {
            return Boolean(o)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        a = o && s.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? s.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function(e) {
        var n = this,
            i = !1;
        return t(this).one(s.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || s.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[s.TRANSITION_END] = {
        bindType: o,
        delegateType: o,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var a = "alert",
        l = "bs.alert",
        u = "." + l,
        c = t.fn[a],
        f = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        },
        h = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, l), this._element = null
            }, n._getRootElement = function(e) {
                var n = s.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(f.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = s.getTransitionDurationFromElement(e);
                    t(e).one(s.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(f.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(l);
                    r || (r = new e(this), i.data(l, r)), "close" === n && r[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), t.fn[a] = h._jQueryInterface, t.fn[a].Constructor = h, t.fn[a].noConflict = function() {
        return t.fn[a] = c, h._jQueryInterface
    };
    var d = "button",
        p = "bs.button",
        g = "." + p,
        m = ".data-api",
        v = t.fn[d],
        y = "active",
        _ = '[data-toggle^="button"]',
        b = ".btn",
        w = {
            CLICK_DATA_API: "click" + g + m,
            FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(y)) e = !1;
                            else {
                                var o = i.querySelector(".active");
                                o && t(o).removeClass(y)
                            }
                        if (e) {
                            if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            r.checked = !this._element.classList.contains(y), t(r).trigger("change")
                        }
                        r.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && t(this._element).toggleClass(y)
            }, n.dispose = function() {
                t.removeData(this._element, p), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(p);
                    i || (i = new e(this), t(this).data(p, i)), "toggle" === n && i[n]()
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(w.CLICK_DATA_API, _, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(b)), E._jQueryInterface.call(t(n), "toggle")
    }).on(w.FOCUS_BLUR_DATA_API, _, function(e) {
        var n = t(e.target).closest(b)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[d] = E._jQueryInterface, t.fn[d].Constructor = E, t.fn[d].noConflict = function() {
        return t.fn[d] = v, E._jQueryInterface
    };
    var T = "carousel",
        x = "bs.carousel",
        C = "." + x,
        S = ".data-api",
        D = t.fn[T],
        A = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        N = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        I = "next",
        k = "prev",
        O = {
            SLIDE: "slide" + C,
            SLID: "slid" + C,
            KEYDOWN: "keydown" + C,
            MOUSEENTER: "mouseenter" + C,
            MOUSELEAVE: "mouseleave" + C,
            TOUCHSTART: "touchstart" + C,
            TOUCHMOVE: "touchmove" + C,
            TOUCHEND: "touchend" + C,
            POINTERDOWN: "pointerdown" + C,
            POINTERUP: "pointerup" + C,
            DRAG_START: "dragstart" + C,
            LOAD_DATA_API: "load" + C + S,
            CLICK_DATA_API: "click" + C + S
        },
        j = "active",
        L = ".active.carousel-item",
        H = ".carousel-indicators",
        P = {
            TOUCH: "touch",
            PEN: "pen"
        },
        q = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(H), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(I)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(k)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(L);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(O.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = i < e ? I : k;
                        this._slide(r, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(C), t.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = r({}, A, e), s.typeCheckConfig(T, e, N), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(O.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(O.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(O.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(O.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(O.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(O.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(O.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(O.TOUCHMOVE, function(t) {
                        var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(O.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === I,
                    i = e === k,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === k ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(L)),
                    o = t.Event(O.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(j);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(j)
                }
            }, n._slide = function(e, n) {
                var i, r, o, a = this,
                    l = this._element.querySelector(L),
                    u = this._getItemIndex(l),
                    c = n || l && this._getItemByDirection(e, l),
                    f = this._getItemIndex(c),
                    h = Boolean(this._interval);
                if (o = e === I ? (i = "carousel-item-left", r = "carousel-item-next", "left") : (i = "carousel-item-right", r = "carousel-item-prev", "right"), c && t(c).hasClass(j)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
                    var d = t.Event(O.SLID, {
                        relatedTarget: c,
                        direction: o,
                        from: u,
                        to: f
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(c).addClass(r), s.reflow(c), t(l).addClass(i), t(c).addClass(i);
                        var p = parseInt(c.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval;
                        var g = s.getTransitionDurationFromElement(l);
                        t(l).one(s.TRANSITION_END, function() {
                            t(c).removeClass(i + " " + r).addClass(j), t(l).removeClass(j + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                return t(a._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(l).removeClass(j), t(c).addClass(j), this._isSliding = !1, t(this._element).trigger(d);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(x),
                        o = r({}, A, t(this).data());
                    "object" == typeof n && (o = r({}, o, n));
                    var s = "string" == typeof n ? n : o.slide;
                    if (i || (i = new e(this, o), t(this).data(x, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var i = s.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass("carousel")) {
                        var a = r({}, t(o).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), e._jQueryInterface.call(t(o), a), l && t(o).data(x).to(l), n.preventDefault()
                    }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return A
                }
            }]), e
        }();
    t(document).on(O.CLICK_DATA_API, "[data-slide], [data-slide-to]", q._dataApiClickHandler), t(window).on(O.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            q._jQueryInterface.call(r, r.data())
        }
    }), t.fn[T] = q._jQueryInterface, t.fn[T].Constructor = q, t.fn[T].noConflict = function() {
        return t.fn[T] = D, q._jQueryInterface
    };
    var R = "collapse",
        M = "bs.collapse",
        F = "." + M,
        W = t.fn[R],
        B = {
            toggle: !0,
            parent: ""
        },
        U = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        K = {
            SHOW: "show" + F,
            SHOWN: "shown" + F,
            HIDE: "hide" + F,
            HIDDEN: "hidden" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        },
        Q = "show",
        $ = "collapse",
        z = "collapsing",
        V = "collapsed",
        Y = '[data-toggle="collapse"]',
        X = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Y)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        a = s.getSelectorFromElement(o),
                        l = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && 0 < l.length && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(Q) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, r = this;
                if (!(this._isTransitioning || t(this._element).hasClass(Q) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains($)
                    })).length && (n = null), n && (i = t(n).not(this._selector).data(M)) && i._isTransitioning))) {
                    var o = t.Event(K.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(M, null));
                        var a = this._getDimension();
                        t(this._element).removeClass($).addClass(z), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(V).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            u = s.getTransitionDurationFromElement(this._element);
                        t(this._element).one(s.TRANSITION_END, function() {
                            t(r._element).removeClass(z).addClass($).addClass(Q), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(K.SHOWN)
                        }).emulateTransitionEnd(u), this._element.style[a] = this._element[l] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(Q)) {
                    var n = t.Event(K.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), t(this._element).addClass(z).removeClass($).removeClass(Q);
                        var r = this._triggerArray.length;
                        if (0 < r)
                            for (var o = 0; o < r; o++) {
                                var a = this._triggerArray[o],
                                    l = s.getSelectorFromElement(a);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(Q) || t(a).addClass(V).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var u = s.getTransitionDurationFromElement(this._element);
                        t(this._element).one(s.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(z).addClass($).trigger(K.HIDDEN)
                        }).emulateTransitionEnd(u)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, M), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = r({}, B, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(R, e, U), e
            }, n._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, i = this;
                s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(r));
                return t(o).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(Q);
                n.length && t(n).toggleClass(V, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = s.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data(M),
                        s = r({}, B, i.data(), "object" == typeof n && n ? n : {});
                    if (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1), o || (o = new e(this, s), i.data(M, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return B
                }
            }]), e
        }();
    t(document).on(K.CLICK_DATA_API, Y, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = s.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this),
                i = e.data(M) ? "toggle" : n.data();
            X._jQueryInterface.call(e, i)
        })
    }), t.fn[R] = X._jQueryInterface, t.fn[R].Constructor = X, t.fn[R].noConflict = function() {
        return t.fn[R] = W, X._jQueryInterface
    };
    for (var G = "undefined" != typeof window && "undefined" != typeof document, J = ["Edge", "Trident", "Firefox"], Z = 0, ee = 0; ee < J.length; ee += 1)
        if (G && 0 <= navigator.userAgent.indexOf(J[ee])) {
            Z = 1;
            break
        }
    var te = G && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, Z))
        }
    };

    function ne(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function ie(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function re(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function oe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = ie(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : oe(re(e))
    }
    var se = G && !(!window.MSInputMethodContext || !document.documentMode),
        ae = G && /MSIE 10/.test(navigator.userAgent);

    function le(e) {
        return 11 === e ? se : 10 === e ? ae : se || ae
    }

    function ue(e) {
        if (!e) return document.documentElement;
        for (var t = le(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ie(n, "position") ? ue(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function ce(e) {
        return null !== e.parentNode ? ce(e.parentNode) : e
    }

    function fe(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && ue(s.firstElementChild) !== s ? ue(l) : l;
        var u = ce(e);
        return u.host ? fe(u.host, t) : fe(e, ce(t).host)
    }

    function he(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n) return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t]
    }

    function de(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function pe(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], le(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function ge(e) {
        var t = e.body,
            n = e.documentElement,
            i = le(10) && getComputedStyle(n);
        return {
            height: pe("Height", t, n, i),
            width: pe("Width", t, n, i)
        }
    }
    var me = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        ve = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        ye = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function _e(e) {
        return ye({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function be(e) {
        var t = {};
        try {
            if (le(10)) {
                t = e.getBoundingClientRect();
                var n = he(e, "top"),
                    i = he(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? ge(e.ownerDocument) : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            u = e.offsetHeight - a;
        if (l || u) {
            var c = ie(e);
            l -= de(c, "x"), u -= de(c, "y"), r.width -= l, r.height -= u
        }
        return _e(r)
    }

    function we(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = le(10),
            r = "HTML" === t.nodeName,
            o = be(e),
            s = be(t),
            a = oe(e),
            l = ie(t),
            u = parseFloat(l.borderTopWidth, 10),
            c = parseFloat(l.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = _e({
            top: o.top - s.top - u,
            left: o.left - s.left - c,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= u - h, f.bottom -= u - h, f.left -= c - d, f.right -= c - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = he(t, "top"),
                r = he(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function Ee(e) {
        if (!e || !e.parentElement || le()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === ie(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Te(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? Ee(e) : fe(e, t);
        if ("viewport" === i) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = we(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : he(n),
                a = t ? 0 : he(n, "left");
            return _e({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = oe(re(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = we(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === ie(t, "position")) return !0;
                    var i = re(t);
                    return !!i && e(i)
                }(s)) o = l;
            else {
                var u = ge(e.ownerDocument),
                    c = u.height,
                    f = u.width;
                o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        var h = "number" == typeof(n = n || 0);
        return o.left += h ? n : n.left || 0, o.top += h ? n : n.top || 0, o.right -= h ? n : n.right || 0, o.bottom -= h ? n : n.bottom || 0, o
    }

    function xe(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = Te(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return ye({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            c = 0 < u.length ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function Ce(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return we(n, i ? Ee(t) : fe(t, n), i)
    }

    function Se(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function De(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function Ae(e, t, n) {
        n = n.split("-")[0];
        var i = Se(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[De(a)], r
    }

    function Ne(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function Ie(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = Ne(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && ne(n) && (t.offsets.popper = _e(t.offsets.popper), t.offsets.reference = _e(t.offsets.reference), t = n(t, e))
        }), t
    }

    function ke(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function Oe(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function je(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function Le(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function He(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Le(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }
    var Pe = G && /Firefox/i.test(navigator.userAgent);

    function qe(e, t, n) {
        var i = Ne(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var Re = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Me = Re.slice(3);

    function Fe(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Me.indexOf(e),
            i = Me.slice(n + 1).concat(Me.slice(0, n));
        return t ? i.reverse() : i
    }
    var We = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                u = a ? "width" : "height",
                                c = {
                                    start: ve({}, l, o[l]),
                                    end: ve({}, l, o[l] + o[u] - s[u])
                                };
                            e.offsets.popper = ye({}, s, c[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = r.split("-")[0];
                        return n = Le(+i) ? [+i, 0] : function(e, t, n, i) {
                            var r = [0, 0],
                                o = -1 !== ["right", "left"].indexOf(i),
                                s = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                a = s.indexOf(Ne(s, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                            return (u = u.map(function(e, i) {
                                var r = (1 === i ? !o : o) ? "height" : "width",
                                    s = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, i) {
                                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            s = r[2];
                                        if (!o) return e;
                                        if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? o : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                        var a = void 0;
                                        switch (s) {
                                            case "%p":
                                                a = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                a = i
                                        }
                                        return _e(a)[t] / 100 * o
                                    }(e, r, t, n)
                                })
                            })).forEach(function(e, t) {
                                e.forEach(function(n, i) {
                                    Le(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                                })
                            }), r
                        }(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || ue(e.instance.popper);
                        e.instance.reference === n && (n = ue(n));
                        var i = Oe("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var l = Te(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                        var u = t.priority,
                            c = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var n = c[e];
                                    return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), ve({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = c[n];
                                    return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), ve({}, n, i)
                                }
                            };
                        return u.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = ye({}, c, f[t](e))
                        }), e.offsets.popper = c, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            u = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!qe(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            f = c.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Se(i)[u];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = _e(e.offsets.popper);
                        var g = a[f] + a[u] / 2 - p / 2,
                            m = ie(e.instance.popper),
                            v = parseFloat(m["margin" + c], 10),
                            y = parseFloat(m["border" + c + "Width"], 10),
                            _ = g - e.offsets.popper[f] - v - y;
                        return _ = Math.max(Math.min(s[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (ve(n = {}, f, Math.round(_)), ve(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (ke(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = Te(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            r = De(i),
                            o = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case "flip":
                                s = [i, r];
                                break;
                            case "clockwise":
                                s = Fe(i);
                                break;
                            case "counterclockwise":
                                s = Fe(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function(a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = De(i);
                            var u, c = e.offsets.popper,
                                f = e.offsets.reference,
                                h = Math.floor,
                                d = "left" === i && h(c.right) > h(f.left) || "right" === i && h(c.left) < h(f.right) || "top" === i && h(c.bottom) > h(f.top) || "bottom" === i && h(c.top) < h(f.bottom),
                                p = h(c.left) < h(n.left),
                                g = h(c.right) > h(n.right),
                                m = h(c.top) < h(n.top),
                                v = h(c.bottom) > h(n.bottom),
                                y = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v,
                                _ = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (_ && "start" === o && p || _ && "end" === o && g || !_ && "start" === o && m || !_ && "end" === o && v);
                            (d || y || b) && (e.flipped = !0, (d || y) && (i = s[l + 1]), b && (o = "end" === (u = o) ? "start" : "start" === u ? "end" : u), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = ye({}, e.offsets.popper, Ae(e.instance.popper, e.offsets.reference, e.placement)), e = Ie(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = De(t), e.offsets.popper = _e(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!qe(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = Ne(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = Ne(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, u, c, f, h, d, p, g, m, v, y, _, b, w, E = void 0 !== o ? o : t.gpuAcceleration,
                            T = ue(e.instance.popper),
                            x = be(T),
                            C = {
                                position: r.position
                            },
                            S = (s = e, a = window.devicePixelRatio < 2 || !Pe, u = (l = s.offsets).popper, c = l.reference, f = Math.round, h = Math.floor, d = function(e) {
                                return e
                            }, p = f(c.width), g = f(u.width), m = -1 !== ["left", "right"].indexOf(s.placement), v = -1 !== s.placement.indexOf("-"), _ = a ? f : d, {
                                left: (y = a ? m || v || p % 2 == g % 2 ? f : h : d)(p % 2 == 1 && g % 2 == 1 && !v && a ? u.left - 1 : u.left),
                                top: _(u.top),
                                bottom: _(u.bottom),
                                right: y(u.right)
                            }),
                            D = "bottom" === n ? "top" : "bottom",
                            A = "right" === i ? "left" : "right",
                            N = Oe("transform");
                        if (w = "bottom" === D ? "HTML" === T.nodeName ? -T.clientHeight + S.bottom : -x.height + S.bottom : S.top, b = "right" === A ? "HTML" === T.nodeName ? -T.clientWidth + S.right : -x.width + S.right : S.left, E && N) C[N] = "translate3d(" + b + "px, " + w + "px, 0)", C[D] = 0, C[A] = 0, C.willChange = "transform";
                        else {
                            var I = "bottom" === D ? -1 : 1,
                                k = "right" === A ? -1 : 1;
                            C[D] = w * I, C[A] = b * k, C.willChange = D + ", " + A
                        }
                        var O = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ye({}, O, e.attributes), e.styles = ye({}, C, e.styles), e.arrowStyles = ye({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return He(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && He(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = Ce(r, t, e, n.positionFixed),
                            s = xe(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), He(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Be = function() {
            function e(t, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, n) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = te(this.update.bind(this)), this.options = ye({}, e.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ye({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                    i.options.modifiers[t] = ye({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return ye({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && ne(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return me(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = Ce(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = xe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Ae(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Ie(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, ke(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Oe("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = function(e, t, n, i) {
                            n.updateBound = i, je(e).addEventListener("resize", n.updateBound, {
                                passive: !0
                            });
                            var r = oe(e);
                            return function e(t, n, i, r) {
                                var o = "BODY" === t.nodeName,
                                    s = o ? t.ownerDocument.defaultView : t;
                                s.addEventListener(n, i, {
                                    passive: !0
                                }), o || e(oe(s.parentNode), n, i, r), r.push(s)
                            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                        }(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return function() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, je(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), e
        }();
    Be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Be.placements = Re, Be.Defaults = We;
    var Ue = "dropdown",
        Ke = "bs.dropdown",
        Qe = "." + Ke,
        $e = ".data-api",
        ze = t.fn[Ue],
        Ve = new RegExp("38|40|27"),
        Ye = {
            HIDE: "hide" + Qe,
            HIDDEN: "hidden" + Qe,
            SHOW: "show" + Qe,
            SHOWN: "shown" + Qe,
            CLICK: "click" + Qe,
            CLICK_DATA_API: "click" + Qe + $e,
            KEYDOWN_DATA_API: "keydown" + Qe + $e,
            KEYUP_DATA_API: "keyup" + Qe + $e
        },
        Xe = "disabled",
        Ge = "show",
        Je = "dropdown-menu-right",
        Ze = '[data-toggle="dropdown"]',
        et = ".dropdown-menu",
        tt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        nt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        it = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var n = e.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Xe)) {
                    var n = e._getParentFromElement(this._element),
                        i = t(this._menu).hasClass(Ge);
                    if (e._clearMenus(), !i) {
                        var r = {
                                relatedTarget: this._element
                            },
                            o = t.Event(Ye.SHOW, r);
                        if (t(n).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === Be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = n : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass("position-static"), this._popper = new Be(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(n).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(Ge), t(n).toggleClass(Ge).trigger(t.Event(Ye.SHOWN, r))
                        }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(Xe) || t(this._menu).hasClass(Ge))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(Ye.SHOW, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(Ge), t(r).toggleClass(Ge).trigger(t.Event(Ye.SHOWN, n)))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Xe) && t(this._menu).hasClass(Ge)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(Ye.HIDE, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(Ge), t(r).toggleClass(Ge).trigger(t.Event(Ye.HIDDEN, n)))
                }
            }, n.dispose = function() {
                t.removeData(this._element, Ke), t(this._element).off(Qe), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var e = this;
                t(this._element).on(Ye.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, n._getConfig = function(e) {
                return e = r({}, this.constructor.Default, t(this._element).data(), e), s.typeCheckConfig(Ue, e, this.constructor.DefaultType), e
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(et))
                }
                return this._menu
            }, n._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(Je) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(Je) && (n = "bottom-end"), n
            }, n._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, n._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Ke);
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(Ke, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(Ze)), r = 0, o = i.length; r < o; r++) {
                        var s = e._getParentFromElement(i[r]),
                            a = t(i[r]).data(Ke),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var u = a._menu;
                            if (t(s).hasClass(Ge) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var c = t.Event(Ye.HIDE, l);
                                t(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(u).removeClass(Ge), t(s).removeClass(Ge).trigger(t.Event(Ye.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = s.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(et).length)) : Ve.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(Xe))) {
                    var i = e._getParentFromElement(this),
                        r = t(i).hasClass(Ge);
                    if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== o.length) {
                            var s = o.indexOf(n.target);
                            38 === n.which && 0 < s && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(Ze);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return nt
                }
            }]), e
        }();
    t(document).on(Ye.KEYDOWN_DATA_API, Ze, it._dataApiKeydownHandler).on(Ye.KEYDOWN_DATA_API, et, it._dataApiKeydownHandler).on(Ye.CLICK_DATA_API + " " + Ye.KEYUP_DATA_API, it._clearMenus).on(Ye.CLICK_DATA_API, Ze, function(e) {
        e.preventDefault(), e.stopPropagation(), it._jQueryInterface.call(t(this), "toggle")
    }).on(Ye.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[Ue] = it._jQueryInterface, t.fn[Ue].Constructor = it, t.fn[Ue].noConflict = function() {
        return t.fn[Ue] = ze, it._jQueryInterface
    };
    var rt = "modal",
        ot = "bs.modal",
        st = "." + ot,
        at = t.fn[rt],
        lt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ut = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        ct = {
            HIDE: "hide" + st,
            HIDDEN: "hidden" + st,
            SHOW: "show" + st,
            SHOWN: "shown" + st,
            FOCUSIN: "focusin" + st,
            RESIZE: "resize" + st,
            CLICK_DISMISS: "click.dismiss" + st,
            KEYDOWN_DISMISS: "keydown.dismiss" + st,
            MOUSEUP_DISMISS: "mouseup.dismiss" + st,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + st,
            CLICK_DATA_API: "click" + st + ".data-api"
        },
        ft = "modal-open",
        ht = "fade",
        dt = "show",
        pt = ".modal-dialog",
        gt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mt = ".sticky-top",
        vt = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(pt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(ht) && (this._isTransitioning = !0);
                    var i = t.Event(ct.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(ct.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on(ct.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(ct.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(ct.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(ht);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ct.FOCUSIN), t(this._element).removeClass(dt), t(this._element).off(ct.CLICK_DISMISS), t(this._dialog).off(ct.MOUSEDOWN_DISMISS), r) {
                            var o = s.getTransitionDurationFromElement(this._element);
                            t(this._element).one(s.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(st)
                }), t(document).off(ct.FOCUSIN), t.removeData(this._element, ot), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = r({}, lt, e), s.typeCheckConfig(rt, e, ut), e
            }, n._showElement = function(e) {
                var n = this,
                    i = t(this._element).hasClass(ht);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && s.reflow(this._element), t(this._element).addClass(dt), this._config.focus && this._enforceFocus();
                var r = t.Event(ct.SHOWN, {
                        relatedTarget: e
                    }),
                    o = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                    };
                if (i) {
                    var a = s.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off(ct.FOCUSIN).on(ct.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(ct.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(ct.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(ct.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(ct.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(ft), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(ct.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    i = t(this._element).hasClass(ht) ? ht : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(ct.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), i && s.reflow(this._backdrop), t(this._backdrop).addClass(dt), !e) return;
                    if (!i) return void e();
                    var r = s.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(dt);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(ht)) {
                        var a = s.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(gt)),
                        i = [].slice.call(document.querySelectorAll(mt));
                    t(n).each(function(n, i) {
                        var r = i.style.paddingRight,
                            o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                            o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(ft)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(gt));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + mt));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var o = t(this).data(ot),
                        s = r({}, lt, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, s), t(this).data(ot, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else s.show && o.show(i)
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return lt
                }
            }]), e
        }();
    t(document).on(ct.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, i = this,
            o = s.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var a = t(n).data(ot) ? "toggle" : r({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(n).one(ct.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(ct.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        vt._jQueryInterface.call(t(n), a, this)
    }), t.fn[rt] = vt._jQueryInterface, t.fn[rt].Constructor = vt, t.fn[rt].noConflict = function() {
        return t.fn[rt] = at, vt._jQueryInterface
    };
    var yt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        bt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function wt(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                var i = o[e],
                    s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === yt.indexOf(n) || Boolean(e.nodeValue.match(_t) || e.nodeValue.match(bt));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                })
            }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Et = "tooltip",
        Tt = "bs.tooltip",
        xt = "." + Tt,
        Ct = t.fn[Et],
        St = "bs-tooltip",
        Dt = new RegExp("(^|\\s)" + St + "\\S+", "g"),
        At = ["sanitize", "whiteList", "sanitizeFn"],
        Nt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        It = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        kt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Ot = "show",
        jt = {
            HIDE: "hide" + xt,
            HIDDEN: "hidden" + xt,
            SHOW: "show" + xt,
            SHOWN: "shown" + xt,
            INSERTED: "inserted" + xt,
            CLICK: "click" + xt,
            FOCUSIN: "focusin" + xt,
            FOCUSOUT: "focusout" + xt,
            MOUSEENTER: "mouseenter" + xt,
            MOUSELEAVE: "mouseleave" + xt
        },
        Lt = "fade",
        Ht = "show",
        Pt = "hover",
        qt = "focus",
        Rt = function() {
            function e(e, t) {
                if (void 0 === Be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var n = e.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(n);
                    var i = s.findShadowRoot(this.element),
                        r = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !r) return;
                    var o = this.getTipElement(),
                        a = s.getUID(this.constructor.NAME);
                    o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(o).addClass(Lt);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c = this._getContainer();
                    t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Be(this.element, o, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(o).addClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var f = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(Lt)) {
                        var h = s.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(s.TRANSITION_END, f).emulateTransitionEnd(h)
                    } else f()
                }
            }, n.hide = function(e) {
                var n = this,
                    i = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    o = function() {
                        n._hoverState !== Ot && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (t(i).removeClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[qt] = !1, this._activeTrigger[Pt] = !1, t(this.tip).hasClass(Lt)) {
                        var a = s.getTransitionDurationFromElement(i);
                        t(i).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(St + "-" + e)
            }, n.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(Lt + " " + Ht)
            }, n.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = wt(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, n.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, n._getAttachment = function(e) {
                return It[e.toUpperCase()]
            }, n._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var i = n === Pt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = n === Pt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? qt : Pt] = !0), t(n.getTipElement()).hasClass(Ht) || n._hoverState === Ot ? n._hoverState = Ot : (clearTimeout(n._timeout), n._hoverState = Ot, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === Ot && n.show()
                }, n.config.delay.show) : n.show())
            }, n._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? qt : Pt] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, n._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, n._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== At.indexOf(e) && delete n[e]
                }), "number" == typeof(e = r({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), s.typeCheckConfig(Et, e, this.constructor.DefaultType), e.sanitize && (e.template = wt(e.template, e.whiteList, e.sanitizeFn)), e
            }, n._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, n._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Dt);
                null !== n && n.length && e.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, n._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(Lt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Tt),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(Tt, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return kt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Et
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Tt
                }
            }, {
                key: "Event",
                get: function() {
                    return jt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return xt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Nt
                }
            }]), e
        }();
    t.fn[Et] = Rt._jQueryInterface, t.fn[Et].Constructor = Rt, t.fn[Et].noConflict = function() {
        return t.fn[Et] = Ct, Rt._jQueryInterface
    };
    var Mt = "popover",
        Ft = "bs.popover",
        Wt = "." + Ft,
        Bt = t.fn[Mt],
        Ut = "bs-popover",
        Kt = new RegExp("(^|\\s)" + Ut + "\\S+", "g"),
        Qt = r({}, Rt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        $t = r({}, Rt.DefaultType, {
            content: "(string|element|function)"
        }),
        zt = {
            HIDE: "hide" + Wt,
            HIDDEN: "hidden" + Wt,
            SHOW: "show" + Wt,
            SHOWN: "shown" + Wt,
            INSERTED: "inserted" + Wt,
            CLICK: "click" + Wt,
            FOCUSIN: "focusin" + Wt,
            FOCUSOUT: "focusout" + Wt,
            MOUSEENTER: "mouseenter" + Wt,
            MOUSELEAVE: "mouseleave" + Wt
        },
        Vt = function(e) {
            var n, r;

            function o() {
                return e.apply(this, arguments) || this
            }
            r = e, (n = o).prototype = Object.create(r.prototype), (n.prototype.constructor = n).__proto__ = r;
            var s = o.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Ut + "-" + e)
            }, s.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Kt);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(Ft),
                        i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data(Ft, n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, i(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Mt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ft
                }
            }, {
                key: "Event",
                get: function() {
                    return zt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Wt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return $t
                }
            }]), o
        }(Rt);
    t.fn[Mt] = Vt._jQueryInterface, t.fn[Mt].Constructor = Vt, t.fn[Mt].noConflict = function() {
        return t.fn[Mt] = Bt, Vt._jQueryInterface
    };
    var Yt = "scrollspy",
        Xt = "bs.scrollspy",
        Gt = "." + Xt,
        Jt = t.fn[Yt],
        Zt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        en = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        tn = {
            ACTIVATE: "activate" + Gt,
            SCROLL: "scroll" + Gt,
            LOAD_DATA_API: "load" + Gt + ".data-api"
        },
        nn = "active",
        rn = ".nav, .list-group",
        on = ".nav-link",
        sn = ".list-group-item",
        an = ".dropdown-item",
        ln = "position",
        un = function() {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + on + "," + this._config.target + " " + sn + "," + this._config.target + " " + an, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(tn.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : ln,
                    i = "auto" === this._config.method ? n : this._config.method,
                    r = i === ln ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = s.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [t(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, Xt), t(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = r({}, Zt, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = s.getUID(Yt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return s.typeCheckConfig(Yt, e, en), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(nn), i.addClass(nn)) : (i.addClass(nn), i.parents(rn).prev(on + ", " + sn).addClass(nn), i.parents(rn).prev(".nav-item").children(on).addClass(nn)), t(this._scrollElement).trigger(tn.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(nn)
                }).forEach(function(e) {
                    return e.classList.remove(nn)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Xt);
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data(Xt, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Zt
                }
            }]), e
        }();
    t(window).on(tn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var i = t(e[n]);
            un._jQueryInterface.call(i, i.data())
        }
    }), t.fn[Yt] = un._jQueryInterface, t.fn[Yt].Constructor = un, t.fn[Yt].noConflict = function() {
        return t.fn[Yt] = Jt, un._jQueryInterface
    };
    var cn = "bs.tab",
        fn = "." + cn,
        hn = t.fn.tab,
        dn = {
            HIDE: "hide" + fn,
            HIDDEN: "hidden" + fn,
            SHOW: "show" + fn,
            SHOWN: "shown" + fn,
            CLICK_DATA_API: "click" + fn + ".data-api"
        },
        pn = "active",
        gn = ".active",
        mn = "> li > .active",
        vn = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(pn) || t(this._element).hasClass("disabled"))) {
                    var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                        o = s.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? mn : gn;
                        i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                    }
                    var l = t.Event(dn.HIDE, {
                            relatedTarget: this._element
                        }),
                        u = t.Event(dn.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var c = function() {
                            var n = t.Event(dn.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = t.Event(dn.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, c) : c()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, cn), this._element = null
            }, n._activate = function(e, n, i) {
                var r = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(gn) : t(n).find(mn))[0],
                    a = i && o && t(o).hasClass("fade"),
                    l = function() {
                        return r._transitionComplete(e, o, i)
                    };
                if (o && a) {
                    var u = s.getTransitionDurationFromElement(o);
                    t(o).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(u)
                } else l()
            }, n._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(pn);
                    var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass(pn), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(a).addClass(pn)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(cn);
                    if (r || (r = new e(this), i.data(cn, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(dn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), vn._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = vn._jQueryInterface, t.fn.tab.Constructor = vn, t.fn.tab.noConflict = function() {
        return t.fn.tab = hn, vn._jQueryInterface
    };
    var yn = "toast",
        _n = "bs.toast",
        bn = "." + _n,
        wn = t.fn[yn],
        En = {
            CLICK_DISMISS: "click.dismiss" + bn,
            HIDE: "hide" + bn,
            HIDDEN: "hidden" + bn,
            SHOW: "show" + bn,
            SHOWN: "shown" + bn
        },
        Tn = "show",
        xn = "showing",
        Cn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Sn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Dn = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                t(this._element).trigger(En.SHOW), this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    e._element.classList.remove(xn), e._element.classList.add(Tn), t(e._element).trigger(En.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(xn), this._config.animation) {
                    var i = s.getTransitionDurationFromElement(this._element);
                    t(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function(e) {
                var n = this;
                this._element.classList.contains(Tn) && (t(this._element).trigger(En.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Tn) && this._element.classList.remove(Tn), t(this._element).off(En.CLICK_DISMISS), t.removeData(this._element, _n), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = r({}, Sn, t(this._element).data(), "object" == typeof e && e ? e : {}), s.typeCheckConfig(yn, e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(En.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide(!0)
                })
            }, n._close = function() {
                var e = this,
                    n = function() {
                        e._element.classList.add("hide"), t(e._element).trigger(En.HIDDEN)
                    };
                if (this._element.classList.remove(Tn), this._config.animation) {
                    var i = s.getTransitionDurationFromElement(this._element);
                    t(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(_n);
                    if (r || (r = new e(this, "object" == typeof n && n), i.data(_n, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, i(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Cn
                }
            }, {
                key: "Default",
                get: function() {
                    return Sn
                }
            }]), e
        }();
    t.fn[yn] = Dn._jQueryInterface, t.fn[yn].Constructor = Dn, t.fn[yn].noConflict = function() {
            return t.fn[yn] = wn, Dn._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = s, e.Alert = h, e.Button = E, e.Carousel = q, e.Collapse = X, e.Dropdown = it, e.Modal = vt, e.Popover = Vt, e.Scrollspy = un, e.Tab = vn, e.Toast = Dn, e.Tooltip = Rt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = -1,
        n = -1,
        i = function(e) {
            return parseFloat(e) || 0
        },
        r = function(t) {
            var n = e(t),
                r = null,
                o = [];
            return n.each(function() {
                var t = e(this),
                    n = t.offset().top - i(t.css("margin-top")),
                    s = o.length > 0 ? o[o.length - 1] : null;
                null === s ? o.push(t) : Math.floor(Math.abs(r - n)) <= 1 ? o[o.length - 1] = s.add(t) : o.push(t), r = n
            }), o
        },
        o = function(t) {
            var n = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
        },
        s = e.fn.matchHeight = function(t) {
            var n = o(t);
            if (n.remove) {
                var i = this;
                return this.css(n.property, ""), e.each(s._groups, function(e, t) {
                    t.elements = t.elements.not(i)
                }), this
            }
            return this.length <= 1 && !n.target ? this : (s._groups.push({
                elements: this,
                options: n
            }), s._apply(this, n), this)
        };
    s.version = "0.7.2", s._groups = [], s._throttle = 80, s._maintainScroll = !1, s._beforeUpdate = null, s._afterUpdate = null, s._rows = r, s._parse = i, s._parseOptions = o, s._apply = function(t, n) {
        var a = o(n),
            l = e(t),
            u = [l],
            c = e(window).scrollTop(),
            f = e("html").outerHeight(!0),
            h = l.parents().filter(":hidden");
        return h.each(function() {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        }), h.css("display", "block"), a.byRow && !a.target && (l.each(function() {
            var t = e(this),
                n = t.css("display");
            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), t.data("style-cache", t.attr("style")), t.css({
                display: n,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), u = r(l), l.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || "")
        })), e.each(u, function(t, n) {
            var r = e(n),
                o = 0;
            if (a.target) o = a.target.outerHeight(!1);
            else {
                if (a.byRow && r.length <= 1) return void r.css(a.property, "");
                r.each(function() {
                    var t = e(this),
                        n = t.attr("style"),
                        i = t.css("display");
                    "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                    var r = {
                        display: i
                    };
                    r[a.property] = "", t.css(r), t.outerHeight(!1) > o && (o = t.outerHeight(!1)), n ? t.attr("style", n) : t.css("display", "")
                })
            }
            r.each(function() {
                var t = e(this),
                    n = 0;
                a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(a.property, o - n + "px"))
            })
        }), h.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null)
        }), s._maintainScroll && e(window).scrollTop(c / f * e("html").outerHeight(!0)), this
    }, s._applyDataApi = function() {
        var t = {};
        e("[data-match-height], [data-mh]").each(function() {
            var n = e(this),
                i = n.attr("data-mh") || n.attr("data-match-height");
            t[i] = i in t ? t[i].add(n) : n
        }), e.each(t, function() {
            this.matchHeight(!0)
        })
    };
    var a = function(t) {
        s._beforeUpdate && s._beforeUpdate(t, s._groups), e.each(s._groups, function() {
            s._apply(this.elements, this.options)
        }), s._afterUpdate && s._afterUpdate(t, s._groups)
    };
    s._update = function(i, r) {
        if (r && "resize" === r.type) {
            var o = e(window).width();
            if (o === t) return;
            t = o
        }
        i ? -1 === n && (n = setTimeout(function() {
            a(r), n = -1
        }, s._throttle)) : a(r)
    }, e(s._applyDataApi);
    var l = e.fn.on ? "on" : "bind";
    e(window)[l]("load", function(e) {
        s._update(!1, e)
    }), e(window)[l]("resize orientationchange", function(e) {
        s._update(!0, e)
    })
});
//# sourceMappingURL=vendor-210c0905c3.js.map