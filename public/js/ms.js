if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        var i = [],
            n = t.document,
            o = i.slice,
            r = i.concat,
            s = i.push,
            a = i.indexOf,
            l = {},
            c = l.toString,
            d = l.hasOwnProperty,
            u = {},
            p = "2.2.4",
            f = function(t, e) {
                return new f.fn.init(t, e)
            },
            h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            g = /^-ms-/,
            v = /-([\da-z])/gi,
            m = function(t, e) {
                return e.toUpperCase()
            };

        function y(t) {
            var e = !!t && "length" in t && t.length,
                i = f.type(t);
            return "function" !== i && !f.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        f.fn = f.prototype = {
            jquery: p,
            constructor: f,
            selector: "",
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this)
            },
            pushStack: function(t) {
                var e = f.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return f.each(this, t)
            },
            map: function(t) {
                return this.pushStack(f.map(this, function(e, i) {
                    return t.call(e, i, e)
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
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: i.sort,
            splice: i.splice
        }, f.extend = f.fn.extend = function() {
            var t, e, i, n, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || f.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (f.isPlainObject(n) || (o = f.isArray(n))) ? (o ? (o = !1, r = i && f.isArray(i) ? i : []) : r = i && f.isPlainObject(i) ? i : {}, s[e] = f.extend(c, r, n)) : void 0 !== n && (s[e] = n));
            return s
        }, f.extend({
            expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === f.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !f.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== f.type(t) || t.nodeType || f.isWindow(t)) return !1;
                if (t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || d.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = f.trim(t)) && (1 === t.indexOf("use strict") ? ((e = n.createElement("script")).text = t, n.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(g, "ms-").replace(v, m)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, n = 0;
                if (y(t))
                    for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(h, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (y(Object(t)) ? f.merge(i, "string" == typeof t ? [t] : t) : s.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : a.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                for (var n = [], o = 0, r = t.length, s = !i; r > o; o++) !e(t[o], o) !== s && n.push(t[o]);
                return n
            },
            map: function(t, e, i) {
                var n, o, s = 0,
                    a = [];
                if (y(t))
                    for (n = t.length; n > s; s++) null != (o = e(t[s], s, i)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
                return r.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), f.isFunction(t) ? (n = o.call(arguments, 2), (r = function() {
                    return t.apply(e || this, n.concat(o.call(arguments)))
                }).guid = t.guid = t.guid || f.guid++, r) : void 0
            },
            now: Date.now,
            support: u
        }), "function" == typeof Symbol && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            l["[object " + e + "]"] = e.toLowerCase()
        });
        var b = function(t) {
            var e, i, n, o, r, s, a, l, c, d, u, p, f, h, g, v, m, y, b, w = "sizzle" + 1 * new Date,
                x = t.document,
                T = 0,
                S = 0,
                k = rt(),
                C = rt(),
                $ = rt(),
                E = function(t, e) {
                    return t === e && (u = !0), 0
                },
                A = 1 << 31,
                N = {}.hasOwnProperty,
                D = [],
                O = D.pop,
                j = D.push,
                P = D.push,
                L = D.slice,
                H = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = "\\[" + M + "*(" + q + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + M + "*\\]",
                F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                z = new RegExp(M + "+", "g"),
                U = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                W = new RegExp("^" + M + "*," + M + "*"),
                B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                _ = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                V = new RegExp(F),
                X = new RegExp("^" + q + "$"),
                Y = {
                    ID: new RegExp("^#(" + q + ")"),
                    CLASS: new RegExp("^\\.(" + q + ")"),
                    TAG: new RegExp("^(" + q + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                it = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                nt = function() {
                    p()
                };
            try {
                P.apply(D = L.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
            } catch (t) {
                P = {
                    apply: D.length ? function(t, e) {
                        j.apply(t, L.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function ot(t, e, n, o) {
                var r, a, c, d, u, h, m, y, T = e && e.ownerDocument,
                    S = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== S && 9 !== S && 11 !== S) return n;
                if (!o && ((e ? e.ownerDocument || e : x) !== f && p(e), e = e || f, g)) {
                    if (11 !== S && (h = Z.exec(t)))
                        if (r = h[1]) {
                            if (9 === S) {
                                if (!(c = e.getElementById(r))) return n;
                                if (c.id === r) return n.push(c), n
                            } else if (T && (c = T.getElementById(r)) && b(e, c) && c.id === r) return n.push(c), n
                        } else {
                            if (h[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (i.qsa && !$[t + " "] && (!v || !v.test(t))) {
                        if (1 !== S) T = e, y = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((d = e.getAttribute("id")) ? d = d.replace(tt, "\\$&") : e.setAttribute("id", d = w), a = (m = s(t)).length, u = X.test(d) ? "#" + d : "[id='" + d + "']"; a--;) m[a] = u + " " + gt(m[a]);
                            y = m.join(","), T = K.test(t) && ft(e.parentNode) || e
                        }
                        if (y) try {
                            return P.apply(n, T.querySelectorAll(y)), n
                        } catch (t) {} finally {
                            d === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(U, "$1"), e, n, o)
            }

            function rt() {
                var t = [];
                return function e(i, o) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
                }
            }

            function st(t) {
                return t[w] = !0, t
            }

            function at(t) {
                var e = f.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function lt(t, e) {
                for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
            }

            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function dt(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ut(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function pt(t) {
                return st(function(e) {
                    return e = +e, st(function(i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function ft(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = ot.support = {}, r = ot.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, p = ot.setDocument = function(t) {
                    var e, o, s = t ? t.ownerDocument || t : x;
                    return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !r(f), (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = at(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = at(function(t) {
                        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = J.test(f.getElementsByClassName), i.getById = at(function(t) {
                        return h.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                    }), i.getById ? (n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete n.find.ID, n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                        return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
                    }, m = [], v = [], (i.qsa = J.test(f.querySelectorAll)) && (at(function(t) {
                        h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
                    }), at(function(t) {
                        var e = f.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (i.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && at(function(t) {
                        i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), m.push("!=", F)
                    }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = J.test(h.compareDocumentPosition), b = e || J.test(h.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, E = e ? function(t, e) {
                        if (t === e) return u = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === f || t.ownerDocument === x && b(x, t) ? -1 : e === f || e.ownerDocument === x && b(x, e) ? 1 : d ? H(d, t) - H(d, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return u = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : d ? H(d, t) - H(d, e) : 0;
                        if (o === r) return ct(t, e);
                        for (i = t; i = i.parentNode;) s.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? ct(s[n], a[n]) : s[n] === x ? -1 : a[n] === x ? 1 : 0
                    }, f) : f
                }, ot.matches = function(t, e) {
                    return ot(t, null, null, e)
                }, ot.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== f && p(t), e = e.replace(_, "='$1']"), i.matchesSelector && g && !$[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return ot(e, f, null, [t]).length > 0
                }, ot.contains = function(t, e) {
                    return (t.ownerDocument || t) !== f && p(t), b(t, e)
                }, ot.attr = function(t, e) {
                    (t.ownerDocument || t) !== f && p(t);
                    var o = n.attrHandle[e.toLowerCase()],
                        r = o && N.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                    return void 0 !== r ? r : i.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, ot.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, ot.uniqueSort = function(t) {
                    var e, n = [],
                        o = 0,
                        r = 0;
                    if (u = !i.detectDuplicates, d = !i.sortStable && t.slice(0), t.sort(E), u) {
                        for (; e = t[r++];) e === t[r] && (o = n.push(r));
                        for (; o--;) t.splice(n[o], 1)
                    }
                    return d = null, t
                }, o = ot.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += o(e);
                    return i
                }, (n = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: Y,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = k[t + " "];
                            return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && k(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(n) {
                                var o = ot.attr(n, t);
                                return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (v) {
                                    if (r) {
                                        for (; g;) {
                                            for (p = e; p = p[g];)
                                                if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                            h = g = "only" === t && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (b = (f = (c = (d = (u = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                            if (1 === p.nodeType && ++b && p === e) {
                                                d[t] = [T, f, b];
                                                break
                                            }
                                    } else if (y && (b = f = (c = (d = (u = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b)
                                        for (;
                                            (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] = [T, b]), p !== e)););
                                    return (b -= o) === n || b % n == 0 && b / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return o[w] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, i) {
                                for (var n, r = o(t, e), s = r.length; s--;) t[n = H(t, r[s])] = !(i[n] = r[s])
                            }) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: st(function(t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(U, "$1"));
                            return n[w] ? st(function(t, e, i, o) {
                                for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, o, r) {
                                return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: st(function(t) {
                            return function(e) {
                                return ot(t, e).length > 0
                            }
                        }),
                        contains: st(function(t) {
                            return t = t.replace(et, it),
                                function(e) {
                                    return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                                }
                        }),
                        lang: st(function(t) {
                            return X.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === h
                        },
                        focus: function(t) {
                            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function(t) {
                            return G.test(t.nodeName)
                        },
                        input: function(t) {
                            return Q.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: pt(function() {
                            return [0]
                        }),
                        last: pt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: pt(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: pt(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: pt(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: pt(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: pt(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = dt(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[e] = ut(e);

            function ht() {}

            function gt(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function vt(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    r = S++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, r)
                } : function(e, i, s) {
                    var a, l, c, d = [T, r];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if ((a = (l = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && a[0] === T && a[1] === r) return d[2] = a[2];
                                if (l[n] = d, d[2] = t(e, i, s)) return !0
                            }
                }
            }

            function mt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function yt(t, e, i, n, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
                return s
            }

            function bt(t, e, i, n, o, r) {
                return n && !n[w] && (n = bt(n)), o && !o[w] && (o = bt(o, r)), st(function(r, s, a, l) {
                    var c, d, u, p = [],
                        f = [],
                        h = s.length,
                        g = r || function(t, e, i) {
                            for (var n = 0, o = e.length; o > n; n++) ot(t, e[n], i);
                            return i
                        }(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !r && e ? g : yt(g, p, t, a, l),
                        m = i ? o || (r ? t : h || n) ? [] : s : v;
                    if (i && i(v, m, a, l), n)
                        for (c = yt(m, f), n(c, [], a, l), d = c.length; d--;)(u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (c = [], d = m.length; d--;)(u = m[d]) && c.push(v[d] = u);
                                o(null, m = [], c, l)
                            }
                            for (d = m.length; d--;)(u = m[d]) && (c = o ? H(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u))
                        }
                    } else m = yt(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, l) : P.apply(s, m)
                })
            }

            function wt(t) {
                for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, d = vt(function(t) {
                        return t === e
                    }, a, !0), u = vt(function(t) {
                        return H(e, t) > -1
                    }, a, !0), p = [function(t, i, n) {
                        var o = !s && (n || i !== c) || ((e = i).nodeType ? d(t, i, n) : u(t, i, n));
                        return e = null, o
                    }]; r > l; l++)
                    if (i = n.relative[t[l].type]) p = [vt(mt(p), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (o = ++l; r > o && !n.relative[t[o].type]; o++);
                            return bt(l > 1 && mt(p), l > 1 && gt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(U, "$1"), i, o > l && wt(t.slice(l, o)), r > o && wt(t = t.slice(o)), r > o && gt(t))
                        }
                        p.push(i)
                    }
                return mt(p)
            }

            function xt(t, e) {
                var i = e.length > 0,
                    o = t.length > 0,
                    r = function(r, s, a, l, d) {
                        var u, h, v, m = 0,
                            y = "0",
                            b = r && [],
                            w = [],
                            x = c,
                            S = r || o && n.find.TAG("*", d),
                            k = T += null == x ? 1 : Math.random() || .1,
                            C = S.length;
                        for (d && (c = s === f || s || d); y !== C && null != (u = S[y]); y++) {
                            if (o && u) {
                                for (h = 0, s || u.ownerDocument === f || (p(u), a = !g); v = t[h++];)
                                    if (v(u, s || f, a)) {
                                        l.push(u);
                                        break
                                    }
                                d && (T = k)
                            }
                            i && ((u = !v && u) && m--, r && b.push(u))
                        }
                        if (m += y, i && y !== m) {
                            for (h = 0; v = e[h++];) v(b, w, s, a);
                            if (r) {
                                if (m > 0)
                                    for (; y--;) b[y] || w[y] || (w[y] = O.call(l));
                                w = yt(w)
                            }
                            P.apply(l, w), d && !r && w.length > 0 && m + e.length > 1 && ot.uniqueSort(l)
                        }
                        return d && (T = k, c = x), b
                    };
                return i ? st(r) : r
            }
            return ht.prototype = n.filters = n.pseudos, n.setFilters = new ht, s = ot.tokenize = function(t, e) {
                var i, o, r, s, a, l, c, d = C[t + " "];
                if (d) return e ? 0 : d.slice(0);
                for (a = t, l = [], c = n.preFilter; a;) {
                    for (s in i && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = B.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(U, " ")
                        }), a = a.slice(i.length)), n.filter) !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? ot.error(t) : C(t, l).slice(0)
            }, a = ot.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    r = $[t + " "];
                if (!r) {
                    for (e || (e = s(t)), i = e.length; i--;)(r = wt(e[i]))[w] ? n.push(r) : o.push(r);
                    (r = $(t, xt(o, n))).selector = t
                }
                return r
            }, l = ot.select = function(t, e, o, r) {
                var l, c, d, u, p, f = "function" == typeof t && t,
                    h = !r && s(t = f.selector || t);
                if (o = o || [], 1 === h.length) {
                    if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = c[0]).type && i.getById && 9 === e.nodeType && g && n.relative[c[1].type]) {
                        if (!(e = (n.find.ID(d.matches[0].replace(et, it), e) || [])[0])) return o;
                        f && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (l = Y.needsContext.test(t) ? 0 : c.length; l-- && (d = c[l], !n.relative[u = d.type]);)
                        if ((p = n.find[u]) && (r = p(d.matches[0].replace(et, it), K.test(c[0].type) && ft(e.parentNode) || e))) {
                            if (c.splice(l, 1), !(t = r.length && gt(c))) return P.apply(o, r), o;
                            break
                        }
                }
                return (f || a(t, h))(r, e, !g, o, !e || K.test(t) && ft(e.parentNode) || e), o
            }, i.sortStable = w.split("").sort(E).join("") === w, i.detectDuplicates = !!u, p(), i.sortDetached = at(function(t) {
                return 1 & t.compareDocumentPosition(f.createElement("div"))
            }), at(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), i.attributes && at(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || lt("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), at(function(t) {
                return null == t.getAttribute("disabled")
            }) || lt(I, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), ot
        }(t);
        f.find = b, f.expr = b.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = b.uniqueSort, f.text = b.getText, f.isXMLDoc = b.isXML, f.contains = b.contains;
        var w = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && f(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            x = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            T = f.expr.match.needsContext,
            S = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            k = /^.[^:#\[\.,]*$/;

        function C(t, e, i) {
            if (f.isFunction(e)) return f.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return f.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (k.test(e)) return f.filter(e, t, i);
                e = f.filter(e, t)
            }
            return f.grep(t, function(t) {
                return a.call(e, t) > -1 !== i
            })
        }
        f.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? f.find.matchesSelector(n, t) ? [n] : [] : f.find.matches(t, f.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, f.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(f(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (f.contains(o[e], this)) return !0
                }));
                for (e = 0; i > e; e++) f.find(t, o[e], n);
                return (n = this.pushStack(i > 1 ? f.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(C(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(C(this, t || [], !0))
            },
            is: function(t) {
                return !!C(this, "string" == typeof t && T.test(t) ? f(t) : t || [], !1).length
            }
        });
        var $, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (f.fn.init = function(t, e, i) {
            var o, r;
            if (!t) return this;
            if (i = i || $, "string" == typeof t) {
                if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (o[1]) {
                    if (e = e instanceof f ? e[0] : e, f.merge(this, f.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), S.test(o[1]) && f.isPlainObject(e))
                        for (o in e) f.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                    return this
                }
                return (r = n.getElementById(o[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = n, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : f.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(f) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), f.makeArray(t, this))
        }).prototype = f.fn, $ = f(n);
        var A = /^(?:parents|prev(?:Until|All))/,
            N = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        f.fn.extend({
            has: function(t) {
                var e = f(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (f.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, r = [], s = T.test(t) || "string" != typeof t ? f(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && f.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
                return this.pushStack(r.length > 1 ? f.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? a.call(f(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), f.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return w(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return w(t, "parentNode", i)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return w(t, "nextSibling")
            },
            prevAll: function(t) {
                return w(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return w(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return w(t, "previousSibling", i)
            },
            siblings: function(t) {
                return x((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return x(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || f.merge([], t.childNodes)
            }
        }, function(t, e) {
            f.fn[t] = function(i, n) {
                var o = f.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = f.filter(n, o)), this.length > 1 && (N[t] || f.uniqueSort(o), A.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var O, j = /\S+/g;

        function P() {
            n.removeEventListener("DOMContentLoaded", P), t.removeEventListener("load", P), f.ready()
        }
        f.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return f.each(t.match(j) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : f.extend({}, t);
            var e, i, n, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = t.once, n = e = !0; s.length; a = -1)
                        for (i = s.shift(); ++a < r.length;) !1 === r[a].apply(i[0], i[1]) && t.stopOnFalse && (a = r.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
                },
                c = {
                    add: function() {
                        return r && (i && !e && (a = r.length - 1, s.push(i)), function e(i) {
                            f.each(i, function(i, n) {
                                f.isFunction(n) ? t.unique && c.has(n) || r.push(n) : n && n.length && "string" !== f.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(t, e) {
                            for (var i;
                                (i = f.inArray(e, r, i)) > -1;) r.splice(i, 1), a >= i && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? f.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = i = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = s = [], i || (r = i = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, i) {
                        return o || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, f.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", f.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return f.Deferred(function(i) {
                                f.each(e, function(e, r) {
                                    var s = f.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && f.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? f.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, f.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    n[r[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? n : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, r = 0,
                    s = o.call(arguments),
                    a = s.length,
                    l = 1 !== a || t && f.isFunction(t.promise) ? a : 0,
                    c = 1 === l ? t : f.Deferred(),
                    d = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? o.call(arguments) : r, n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] && f.isFunction(s[r].promise) ? s[r].promise().progress(d(r, i, e)).done(d(r, n, s)).fail(c.reject) : --l;
                return l || c.resolveWith(n, s), c.promise()
            }
        }), f.fn.ready = function(t) {
            return f.ready.promise().done(t), this
        }, f.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? f.readyWait++ : f.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --f.readyWait : f.isReady) || (f.isReady = !0, !0 !== t && --f.readyWait > 0 || (O.resolveWith(n, [f]), f.fn.triggerHandler && (f(n).triggerHandler("ready"), f(n).off("ready"))))
            }
        }), f.ready.promise = function(e) {
            return O || (O = f.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(f.ready) : (n.addEventListener("DOMContentLoaded", P), t.addEventListener("load", P))), O.promise(e)
        }, f.ready.promise();
        var L = function(t, e, i, n, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === f.type(i))
                    for (a in o = !0, i) L(t, e, a, i[a], !0, r, s);
                else if (void 0 !== n && (o = !0, f.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(f(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
            },
            H = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

        function I() {
            this.expando = f.expando + I.uid++
        }
        I.uid = 1, I.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!H(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, H(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[e] = i;
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, f.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, o, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 === e) this.register(t);
                    else {
                        f.isArray(e) ? n = e.concat(e.map(f.camelCase)) : (o = f.camelCase(e), e in r ? n = [e, o] : n = (n = o) in r ? [n] : n.match(j) || []), i = n.length;
                        for (; i--;) delete r[n[i]]
                    }(void 0 === e || f.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !f.isEmptyObject(e)
            }
        };
        var M = new I,
            q = new I,
            R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            F = /[A-Z]/g;

        function z(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(F, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : R.test(i) ? f.parseJSON(i) : i)
                    } catch (t) {}
                    q.set(t, e, i)
                } else i = void 0;
            return i
        }
        f.extend({
            hasData: function(t) {
                return q.hasData(t) || M.hasData(t)
            },
            data: function(t, e, i) {
                return q.access(t, e, i)
            },
            removeData: function(t, e) {
                q.remove(t, e)
            },
            _data: function(t, e, i) {
                return M.access(t, e, i)
            },
            _removeData: function(t, e) {
                M.remove(t, e)
            }
        }), f.fn.extend({
            data: function(t, e) {
                var i, n, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = q.get(r), 1 === r.nodeType && !M.get(r, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && (n = f.camelCase(n.slice(5)), z(r, n, o[n])));
                        M.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    q.set(this, t)
                }) : L(this, function(e) {
                    var i, n;
                    if (r && void 0 === e) {
                        if (void 0 !== (i = q.get(r, t) || q.get(r, t.replace(F, "-$&").toLowerCase()))) return i;
                        if (n = f.camelCase(t), void 0 !== (i = q.get(r, n))) return i;
                        if (void 0 !== (i = z(r, n, void 0))) return i
                    } else n = f.camelCase(t), this.each(function() {
                        var i = q.get(this, n);
                        q.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && q.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    q.remove(this, t)
                })
            }
        }), f.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = M.get(t, e), i && (!n || f.isArray(i) ? n = M.access(t, e, f.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = f.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = f._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
                    f.dequeue(t, e)
                }, r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return M.get(t, i) || M.access(t, i, {
                    empty: f.Callbacks("once memory").add(function() {
                        M.remove(t, [e + "queue", i])
                    })
                })
            }
        }), f.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? f.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = f.queue(this, t, e);
                    f._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && f.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    f.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = f.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --n || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = M.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            W = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
            B = ["Top", "Right", "Bottom", "Left"],
            _ = function(t, e) {
                return t = e || t, "none" === f.css(t, "display") || !f.contains(t.ownerDocument, t)
            };

        function V(t, e, i, n) {
            var o, r = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return f.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (f.cssNumber[e] ? "" : "px"),
                d = (f.cssNumber[e] || "px" !== c && +l) && W.exec(f.css(t, e));
            if (d && d[3] !== c) {
                c = c || d[3], i = i || [], d = +l || 1;
                do {
                    d /= r = r || ".5", f.style(t, e, d + c)
                } while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
        }
        var X = /^(?:checkbox|radio)$/i,
            Y = /<([\w:-]+)/,
            Q = /^$|\/(?:java|ecma)script/i,
            G = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function J(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && f.nodeName(t, e) ? f.merge([t], i) : i
        }

        function Z(t, e) {
            for (var i = 0, n = t.length; n > i; i++) M.set(t[i], "globalEval", !e || M.get(e[i], "globalEval"))
        }
        G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
        var K = /<|&#?\w+;/;

        function tt(t, e, i, n, o) {
            for (var r, s, a, l, c, d, u = e.createDocumentFragment(), p = [], h = 0, g = t.length; g > h; h++)
                if ((r = t[h]) || 0 === r)
                    if ("object" === f.type(r)) f.merge(p, r.nodeType ? [r] : r);
                    else if (K.test(r)) {
                for (s = s || u.appendChild(e.createElement("div")), a = (Y.exec(r) || ["", ""])[1].toLowerCase(), l = G[a] || G._default, s.innerHTML = l[1] + f.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
                f.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
            } else p.push(e.createTextNode(r));
            for (u.textContent = "", h = 0; r = p[h++];)
                if (n && f.inArray(r, n) > -1) o && o.push(r);
                else if (c = f.contains(r.ownerDocument, r), s = J(u.appendChild(r), "script"), c && Z(s), i)
                for (d = 0; r = s[d++];) Q.test(r.type || "") && i.push(r);
            return u
        }! function() {
            var t = n.createDocumentFragment().appendChild(n.createElement("div")),
                e = n.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var et = /^key/,
            it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^([^.]*)(?:\.(.+)|)/;

        function ot() {
            return !0
        }

        function rt() {
            return !1
        }

        function st() {
            try {
                return n.activeElement
            } catch (t) {}
        }

        function at(t, e, i, n, o, r) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) at(t, a, i, n, e[a], r);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = rt;
            else if (!o) return t;
            return 1 === r && (s = o, (o = function(t) {
                return f().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = f.guid++)), t.each(function() {
                f.event.add(this, e, o, n, i)
            })
        }
        f.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var r, s, a, l, c, d, u, p, h, g, v, m = M.get(t);
                if (m)
                    for (i.handler && (i = (r = i).handler, o = r.selector), i.guid || (i.guid = f.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                            return void 0 !== f && f.event.triggered !== e.type ? f.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(j) || [""]).length; c--;) h = v = (a = nt.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), h && (u = f.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = f.event.special[h] || {}, d = f.extend({
                        type: h,
                        origType: v,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && f.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, g, s) || t.addEventListener && t.addEventListener(h, s)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), f.event.global[h] = !0)
            },
            remove: function(t, e, i, n, o) {
                var r, s, a, l, c, d, u, p, h, g, v, m = M.hasData(t) && M.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(j) || [""]).length; c--;)
                        if (h = v = (a = nt.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), h) {
                            for (u = f.event.special[h] || {}, p = l[h = (n ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && v !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(t, d));
                            s && !p.length && (u.teardown && !1 !== u.teardown.call(t, g, m.handle) || f.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) f.event.remove(t, h + e[c], i, n, !0);
                    f.isEmptyObject(l) && M.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = f.event.fix(t);
                var e, i, n, r, s, a = [],
                    l = o.call(arguments),
                    c = (M.get(this, "events") || {})[t.type] || [],
                    d = f.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
                    for (a = f.event.handlers.call(this, t, c), e = 0;
                        (r = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((f.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) void 0 === n[o = (r = e[i]).selector + " "] && (n[o] = r.needsContext ? f(o, this).index(l) > -1 : f.find(o, this, null, [l]).length), n[o] && n.push(r);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, o, r, s = e.button;
                    return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || n).documentElement, r = i.body, t.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[f.expando]) return t;
                var e, i, o, r = t.type,
                    s = t,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = it.test(r) ? this.mouseHooks : et.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new f.Event(s), e = o.length; e--;) t[i = o[e]] = s[i];
                return t.target || (t.target = n), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== st() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === st() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && f.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return f.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, f.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, f.Event = function(t, e) {
            return this instanceof f.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? ot : rt) : this.type = t, e && f.extend(this, e), this.timeStamp = t && t.timeStamp || f.now(), void(this[f.expando] = !0)) : new f.Event(t, e)
        }, f.Event.prototype = {
            constructor: f.Event,
            isDefaultPrevented: rt,
            isPropagationStopped: rt,
            isImmediatePropagationStopped: rt,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = ot, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = ot, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = ot, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            f.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        o = t.handleObj;
                    return n && (n === this || f.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), f.fn.extend({
            on: function(t, e, i, n) {
                return at(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return at(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, f(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = rt), this.each(function() {
                    f.event.remove(this, t, i, e)
                })
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ct = /<script|<style|<link/i,
            dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ut = /^true\/(.*)/,
            pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function ft(t, e) {
            return f.nodeName(t, "table") && f.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function ht(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function gt(t) {
            var e = ut.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function vt(t, e) {
            var i, n, o, r, s, a, l, c;
            if (1 === e.nodeType) {
                if (M.hasData(t) && (r = M.access(t), s = M.set(e, r), c = r.events))
                    for (o in delete s.handle, s.events = {}, c)
                        for (i = 0, n = c[o].length; n > i; i++) f.event.add(e, o, c[o][i]);
                q.hasData(t) && (a = q.access(t), l = f.extend({}, a), q.set(e, l))
            }
        }

        function mt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && X.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function yt(t, e, i, n) {
            e = r.apply([], e);
            var o, s, a, l, c, d, p = 0,
                h = t.length,
                g = h - 1,
                v = e[0],
                m = f.isFunction(v);
            if (m || h > 1 && "string" == typeof v && !u.checkClone && dt.test(v)) return t.each(function(o) {
                var r = t.eq(o);
                m && (e[0] = v.call(this, o, r.html())), yt(r, e, i, n)
            });
            if (h && (s = (o = tt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
                for (l = (a = f.map(J(o, "script"), ht)).length; h > p; p++) c = o, p !== g && (c = f.clone(c, !0, !0), l && f.merge(a, J(c, "script"))), i.call(t[p], c, p);
                if (l)
                    for (d = a[a.length - 1].ownerDocument, f.map(a, gt), p = 0; l > p; p++) c = a[p], Q.test(c.type || "") && !M.access(c, "globalEval") && f.contains(d, c) && (c.src ? f._evalUrl && f._evalUrl(c.src) : f.globalEval(c.textContent.replace(pt, "")))
            }
            return t
        }

        function bt(t, e, i) {
            for (var n, o = e ? f.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || f.cleanData(J(n)), n.parentNode && (i && f.contains(n.ownerDocument, n) && Z(J(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        f.extend({
            htmlPrefilter: function(t) {
                return t.replace(lt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, o, r, s, a = t.cloneNode(!0),
                    l = f.contains(t.ownerDocument, t);
                if (!(u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || f.isXMLDoc(t)))
                    for (s = J(a), n = 0, o = (r = J(t)).length; o > n; n++) mt(r[n], s[n]);
                if (e)
                    if (i)
                        for (r = r || J(t), s = s || J(a), n = 0, o = r.length; o > n; n++) vt(r[n], s[n]);
                    else vt(t, a);
                return (s = J(a, "script")).length > 0 && Z(s, !l && J(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, o = f.event.special, r = 0; void 0 !== (i = t[r]); r++)
                    if (H(i)) {
                        if (e = i[M.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? f.event.remove(i, n) : f.removeEvent(i, n, e.handle);
                            i[M.expando] = void 0
                        }
                        i[q.expando] && (i[q.expando] = void 0)
                    }
            }
        }), f.fn.extend({
            domManip: yt,
            detach: function(t) {
                return bt(this, t, !0)
            },
            remove: function(t) {
                return bt(this, t)
            },
            text: function(t) {
                return L(this, function(t) {
                    return void 0 === t ? f.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return yt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ft(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return yt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = ft(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return yt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (f.cleanData(J(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return f.clone(this, t, e)
                })
            },
            html: function(t) {
                return L(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ct.test(t) && !G[(Y.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = f.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (f.cleanData(J(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return yt(this, arguments, function(e) {
                    var i = this.parentNode;
                    f.inArray(this, t) < 0 && (f.cleanData(J(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            f.fn[t] = function(t) {
                for (var i, n = [], o = f(t), r = o.length - 1, a = 0; r >= a; a++) i = a === r ? this : this.clone(!0), f(o[a])[e](i), s.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var wt, xt = {
            HTML: "block",
            BODY: "block"
        };

        function Tt(t, e) {
            var i = f(e.createElement(t)).appendTo(e.body),
                n = f.css(i[0], "display");
            return i.detach(), n
        }

        function St(t) {
            var e = n,
                i = xt[t];
            return i || ("none" !== (i = Tt(t, e)) && i || ((e = (wt = (wt || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = Tt(t, e), wt.detach()), xt[t] = i), i
        }
        var kt = /^margin/,
            Ct = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"),
            $t = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Et = function(t, e, i, n) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
                return o
            },
            At = n.documentElement;

        function Nt(t, e, i) {
            var n, o, r, s, a = t.style;
            return "" !== (s = (i = i || $t(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== s || f.contains(t.ownerDocument, t) || (s = f.style(t, e)), i && !u.pixelMarginRight() && Ct.test(s) && kt.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function Dt(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }! function() {
            var e, i, o, r, s = n.createElement("div"),
                a = n.createElement("div");
            if (a.style) {
                function l() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", At.appendChild(s);
                    var n = t.getComputedStyle(a);
                    e = "1%" !== n.top, r = "2px" === n.marginLeft, i = "4px" === n.width, a.style.marginRight = "50%", o = "4px" === n.marginRight, At.removeChild(s)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), f.extend(u, {
                    pixelPosition: function() {
                        return l(), e
                    },
                    boxSizingReliable: function() {
                        return null == i && l(), i
                    },
                    pixelMarginRight: function() {
                        return null == i && l(), o
                    },
                    reliableMarginLeft: function() {
                        return null == i && l(), r
                    },
                    reliableMarginRight: function() {
                        var e, i = a.appendChild(n.createElement("div"));
                        return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", At.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), At.removeChild(s), a.removeChild(i), e
                    }
                })
            }
        }();
        var Ot = /^(none|table(?!-c[ea]).+)/,
            jt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Pt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Lt = ["Webkit", "O", "Moz", "ms"],
            Ht = n.createElement("div").style;

        function It(t) {
            if (t in Ht) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Lt.length; i--;)
                if ((t = Lt[i] + e) in Ht) return t
        }

        function Mt(t, e, i) {
            var n = W.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function qt(t, e, i, n, o) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += f.css(t, i + B[r], !0, o)), n ? ("content" === i && (s -= f.css(t, "padding" + B[r], !0, o)), "margin" !== i && (s -= f.css(t, "border" + B[r] + "Width", !0, o))) : (s += f.css(t, "padding" + B[r], !0, o), "padding" !== i && (s += f.css(t, "border" + B[r] + "Width", !0, o)));
            return s
        }

        function Rt(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = $t(t),
                s = "border-box" === f.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if ((0 > (o = Nt(t, e, r)) || null == o) && (o = t.style[e]), Ct.test(o)) return o;
                n = s && (u.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + qt(t, e, i || (s ? "border" : "content"), n, r) + "px"
        }

        function Ft(t, e) {
            for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++)(n = t[s]).style && (r[s] = M.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && _(n) && (r[s] = M.access(n, "olddisplay", St(n.nodeName)))) : (o = _(n), "none" === i && o || M.set(n, "olddisplay", o ? i : f.css(n, "display"))));
            for (s = 0; a > s; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function zt(t, e, i, n, o) {
            return new zt.prototype.init(t, e, i, n, o)
        }
        f.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Nt(t, "opacity");
                            return "" === i ? "1" : i
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = f.camelCase(e),
                        l = t.style;
                    return e = f.cssProps[a] || (f.cssProps[a] = It(a) || a), s = f.cssHooks[e] || f.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : ("string" === (r = typeof i) && (o = W.exec(i)) && o[1] && (i = V(t, e, o), r = "number"), void(null != i && i == i && ("number" === r && (i += o && o[3] || (f.cssNumber[a] ? "" : "px")), u.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var o, r, s, a = f.camelCase(e);
                return e = f.cssProps[a] || (f.cssProps[a] = It(a) || a), (s = f.cssHooks[e] || f.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = Nt(t, e, n)), "normal" === o && e in Pt && (o = Pt[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
            }
        }), f.each(["height", "width"], function(t, e) {
            f.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Ot.test(f.css(t, "display")) && 0 === t.offsetWidth ? Et(t, jt, function() {
                        return Rt(t, e, n)
                    }) : Rt(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var o, r = n && $t(t),
                        s = n && qt(t, e, n, "border-box" === f.css(t, "boxSizing", !1, r), r);
                    return s && (o = W.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = f.css(t, e)), Mt(0, i, s)
                }
            }
        }), f.cssHooks.marginLeft = Dt(u.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(Nt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), f.cssHooks.marginRight = Dt(u.reliableMarginRight, function(t, e) {
            return e ? Et(t, {
                display: "inline-block"
            }, Nt, [t, "marginRight"]) : void 0
        }), f.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            f.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + B[n] + e] = r[n] || r[n - 2] || r[0];
                    return o
                }
            }, kt.test(t) || (f.cssHooks[t + e].set = Mt)
        }), f.fn.extend({
            css: function(t, e) {
                return L(this, function(t, e, i) {
                    var n, o, r = {},
                        s = 0;
                    if (f.isArray(e)) {
                        for (n = $t(t), o = e.length; o > s; s++) r[e[s]] = f.css(t, e[s], !1, n);
                        return r
                    }
                    return void 0 !== i ? f.style(t, e, i) : f.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return Ft(this, !0)
            },
            hide: function() {
                return Ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    _(this) ? f(this).show() : f(this).hide()
                })
            }
        }), f.Tween = zt, zt.prototype = {
            constructor: zt,
            init: function(t, e, i, n, o, r) {
                this.elem = t, this.prop = i, this.easing = o || f.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (f.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = zt.propHooks[this.prop];
                return t && t.get ? t.get(this) : zt.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = zt.propHooks[this.prop];
                return this.options.duration ? this.pos = e = f.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : zt.propHooks._default.set(this), this
            }
        }, zt.prototype.init.prototype = zt.prototype, zt.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = f.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    f.fx.step[t.prop] ? f.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[f.cssProps[t.prop]] && !f.cssHooks[t.prop] ? t.elem[t.prop] = t.now : f.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, zt.propHooks.scrollTop = zt.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, f.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, f.fx = zt.prototype.init, f.fx.step = {};
        var Ut, Wt, Bt = /^(?:toggle|show|hide)$/,
            _t = /queueHooks$/;

        function Vt() {
            return t.setTimeout(function() {
                Ut = void 0
            }), Ut = f.now()
        }

        function Xt(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) o["margin" + (i = B[n])] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function Yt(t, e, i) {
            for (var n, o = (Qt.tweeners[e] || []).concat(Qt.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (n = o[r].call(i, e, t)) return n
        }

        function Qt(t, e, i) {
            var n, o, r = 0,
                s = Qt.prefilters.length,
                a = f.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Ut || Vt(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(n);
                    return a.notifyWith(t, [c, n, i]), 1 > n && s ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: f.extend({}, e),
                    opts: f.extend(!0, {
                        specialEasing: {},
                        easing: f.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ut || Vt(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = f.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                d = c.props;
            for (function(t, e) {
                    var i, n, o, r, s;
                    for (i in t)
                        if (o = e[n = f.camelCase(i)], r = t[i], f.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = f.cssHooks[n]) && "expand" in s)
                            for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
                        else e[n] = o
                }(d, c.opts.specialEasing); s > r; r++)
                if (n = Qt.prefilters[r].call(c, t, d, c.opts)) return f.isFunction(n.stop) && (f._queueHooks(c.elem, c.opts.queue).stop = f.proxy(n.stop, n)), n;
            return f.map(d, Yt, c), f.isFunction(c.opts.start) && c.opts.start.call(t, c), f.fx.timer(f.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        f.Animation = f.extend(Qt, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return V(i.elem, t, W.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    f.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(j);
                    for (var i, n = 0, o = t.length; o > n; n++) i = t[n], Qt.tweeners[i] = Qt.tweeners[i] || [], Qt.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, o, r, s, a, l, c, d = this,
                        u = {},
                        p = t.style,
                        h = t.nodeType && _(t),
                        g = M.get(t, "fxshow");
                    for (n in i.queue || (null == (a = f._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || l()
                        }), a.unqueued++, d.always(function() {
                            d.always(function() {
                                a.unqueued--, f.queue(t, "fx").length || a.empty.fire()
                            })
                        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = f.css(t, "display")) ? M.get(t, "olddisplay") || St(t.nodeName) : c) && "none" === f.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
                            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                        })), e)
                        if (o = e[n], Bt.exec(o)) {
                            if (delete e[n], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[n]) continue;
                                h = !0
                            }
                            u[n] = g && g[n] || f.style(t, n)
                        } else c = void 0;
                    if (f.isEmptyObject(u)) "inline" === ("none" === c ? St(t.nodeName) : c) && (p.display = c);
                    else
                        for (n in g ? "hidden" in g && (h = g.hidden) : g = M.access(t, "fxshow", {}), r && (g.hidden = !h), h ? f(t).show() : d.done(function() {
                                f(t).hide()
                            }), d.done(function() {
                                var e;
                                for (e in M.remove(t, "fxshow"), u) f.style(t, e, u[e])
                            }), u) s = Yt(h ? g[n] : 0, n, d), n in g || (g[n] = s.start, h && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
                }],
                prefilter: function(t, e) {
                    e ? Qt.prefilters.unshift(t) : Qt.prefilters.push(t)
                }
            }), f.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? f.extend({}, t) : {
                    complete: i || !i && e || f.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !f.isFunction(e) && e
                };
                return n.duration = f.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in f.fx.speeds ? f.fx.speeds[n.duration] : f.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    f.isFunction(n.old) && n.old.call(this), n.queue && f.dequeue(this, n.queue)
                }, n
            }, f.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(_).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var o = f.isEmptyObject(t),
                        r = f.speed(e, i, n),
                        s = function() {
                            var e = Qt(this, f.extend({}, t), r);
                            (o || M.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = f.timers,
                            s = M.get(this);
                        if (o) s[o] && s[o].stop && n(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && _t.test(o) && n(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                        !e && i || f.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = M.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            r = f.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, f.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), f.each(["toggle", "show", "hide"], function(t, e) {
                var i = f.fn[e];
                f.fn[e] = function(t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Xt(e, !0), t, n, o)
                }
            }), f.each({
                slideDown: Xt("show"),
                slideUp: Xt("hide"),
                slideToggle: Xt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                f.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), f.timers = [], f.fx.tick = function() {
                var t, e = 0,
                    i = f.timers;
                for (Ut = f.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || f.fx.stop(), Ut = void 0
            }, f.fx.timer = function(t) {
                f.timers.push(t), t() ? f.fx.start() : f.timers.pop()
            }, f.fx.interval = 13, f.fx.start = function() {
                Wt || (Wt = t.setInterval(f.fx.tick, f.fx.interval))
            }, f.fx.stop = function() {
                t.clearInterval(Wt), Wt = null
            }, f.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, f.fn.delay = function(e, i) {
                return e = f.fx && f.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = n.createElement("input"),
                    e = n.createElement("select"),
                    i = e.appendChild(n.createElement("option"));
                t.type = "checkbox", u.checkOn = "" !== t.value, u.optSelected = i.selected, e.disabled = !0, u.optDisabled = !i.disabled, (t = n.createElement("input")).value = "t", t.type = "radio", u.radioValue = "t" === t.value
            }();
        var Gt, Jt = f.expr.attrHandle;
        f.fn.extend({
            attr: function(t, e) {
                return L(this, f.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    f.removeAttr(this, t)
                })
            }
        }), f.extend({
            attr: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? f.prop(t, e, i) : (1 === r && f.isXMLDoc(t) || (e = e.toLowerCase(), o = f.attrHooks[e] || (f.expr.match.bool.test(e) ? Gt : void 0)), void 0 !== i ? null === i ? void f.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = f.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!u.radioValue && "radio" === e && f.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    r = e && e.match(j);
                if (r && 1 === t.nodeType)
                    for (; i = r[o++];) n = f.propFix[i] || i, f.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), Gt = {
            set: function(t, e, i) {
                return !1 === e ? f.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, f.each(f.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = Jt[e] || f.find.attr;
            Jt[e] = function(t, e, n) {
                var o, r;
                return n || (r = Jt[e], Jt[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, Jt[e] = r), o
            }
        });
        var Zt = /^(?:input|select|textarea|button)$/i,
            Kt = /^(?:a|area)$/i;
        f.fn.extend({
            prop: function(t, e) {
                return L(this, f.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[f.propFix[t] || t]
                })
            }
        }), f.extend({
            prop: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && f.isXMLDoc(t) || (e = f.propFix[e] || e, o = f.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = f.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Zt.test(t.nodeName) || Kt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), u.optSelected || (f.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            f.propFix[this.toLowerCase()] = this
        });
        var te = /[\t\r\n\f]/g;

        function ee(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        f.fn.extend({
            addClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (f.isFunction(t)) return this.each(function(e) {
                    f(this).addClass(t.call(this, e, ee(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(j) || []; i = this[l++];)
                        if (o = ee(i), n = 1 === i.nodeType && (" " + o + " ").replace(te, " ")) {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            o !== (a = f.trim(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (f.isFunction(t)) return this.each(function(e) {
                    f(this).removeClass(t.call(this, e, ee(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(j) || []; i = this[l++];)
                        if (o = ee(i), n = 1 === i.nodeType && (" " + o + " ").replace(te, " ")) {
                            for (s = 0; r = e[s++];)
                                for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                            o !== (a = f.trim(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : f.isFunction(t) ? this.each(function(i) {
                    f(this).toggleClass(t.call(this, i, ee(this), e), e)
                }) : this.each(function() {
                    var e, n, o, r;
                    if ("string" === i)
                        for (n = 0, o = f(this), r = t.match(j) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ee(this)) && M.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : M.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + ee(i) + " ").replace(te, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ie = /\r/g,
            ne = /[\x20\t\r\n\f]+/g;
        f.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = f.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, f(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : f.isArray(o) && (o = f.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = f.valHooks[o.type] || f.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ie, "") : null == i ? "" : i : void 0
            }
        }), f.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = f.find.attr(t, "value");
                        return null != e ? e : f.trim(f.text(t)).replace(ne, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (((i = n[l]).selected || l === o) && (u.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !f.nodeName(i.parentNode, "optgroup"))) {
                                if (e = f(i).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, r = f.makeArray(e), s = o.length; s--;)((n = o[s]).selected = f.inArray(f.valHooks.option.get(n), r) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                set: function(t, e) {
                    return f.isArray(e) ? t.checked = f.inArray(f(t).val(), e) > -1 : void 0
                }
            }, u.checkOn || (f.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var oe = /^(?:focusinfocus|focusoutblur)$/;
        f.extend(f.event, {
            trigger: function(e, i, o, r) {
                var s, a, l, c, u, p, h, g = [o || n],
                    v = d.call(e, "type") ? e.type : e,
                    m = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = l = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !oe.test(v + f.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), u = v.indexOf(":") < 0 && "on" + v, (e = e[f.expando] ? e : new f.Event(v, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), i = null == i ? [e] : f.makeArray(i, [e]), h = f.event.special[v] || {}, r || !h.trigger || !1 !== h.trigger.apply(o, i))) {
                    if (!r && !h.noBubble && !f.isWindow(o)) {
                        for (c = h.delegateType || v, oe.test(c + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (o.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || t)
                    }
                    for (s = 0;
                        (a = g[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : h.bindType || v, (p = (M.get(a, "events") || {})[e.type] && M.get(a, "handle")) && p.apply(a, i), (p = u && a[u]) && p.apply && H(a) && (e.result = p.apply(a, i), !1 === e.result && e.preventDefault());
                    return e.type = v, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), i) || !H(o) || u && f.isFunction(o[v]) && !f.isWindow(o) && ((l = o[u]) && (o[u] = null), f.event.triggered = v, o[v](), f.event.triggered = void 0, l && (o[u] = l)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = f.extend(new f.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                f.event.trigger(n, null, e)
            }
        }), f.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    f.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? f.event.trigger(t, e, i, !0) : void 0
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            f.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), f.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), u.focusin = "onfocusin" in t, u.focusin || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                f.event.simulate(e, t.target, f.event.fix(t))
            };
            f.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        o = M.access(n, e);
                    o || n.addEventListener(t, i, !0), M.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        o = M.access(n, e) - 1;
                    o ? M.access(n, e, o) : (n.removeEventListener(t, i, !0), M.remove(n, e))
                }
            }
        });
        var re = t.location,
            se = f.now(),
            ae = /\?/;
        f.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, f.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + e), i
        };
        var le = /#.*$/,
            ce = /([?&])_=[^&]*/,
            de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ue = /^(?:GET|HEAD)$/,
            pe = /^\/\//,
            fe = {},
            he = {},
            ge = "*/".concat("*"),
            ve = n.createElement("a");

        function me(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    r = e.toLowerCase().match(j) || [];
                if (f.isFunction(i))
                    for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function ye(t, e, i, n) {
            var o = {},
                r = t === he;

            function s(a) {
                var l;
                return o[a] = !0, f.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function be(t, e) {
            var i, n, o = f.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && f.extend(!0, t, n), t
        }
        ve.href = re.href, f.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: re.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(re.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ge,
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
                    "text json": f.parseJSON,
                    "text xml": f.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? be(be(t, f.ajaxSettings), e) : be(f.ajaxSettings, t)
            },
            ajaxPrefilter: me(fe),
            ajaxTransport: me(he),
            ajax: function(e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var o, r, s, a, l, c, d, u, p = f.ajaxSetup({}, i),
                    h = p.context || p,
                    g = p.context && (h.nodeType || h.jquery) ? f(h) : f.event,
                    v = f.Deferred(),
                    m = f.Callbacks("once memory"),
                    y = p.statusCode || {},
                    b = {},
                    w = {},
                    x = 0,
                    T = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = de.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return x || (t = w[i] = w[i] || t, b[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else S.always(t[S.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || T;
                            return o && o.abort(e), k(0, e), this
                        }
                    };
                if (v.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, p.url = ((e || p.url || re.href) + "").replace(le, "").replace(pe, re.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = f.trim(p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                    c = n.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = ve.protocol + "//" + ve.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = f.param(p.data, p.traditional)), ye(fe, p, i, S), 2 === x) return S;
                for (u in (d = f.event && p.global) && 0 == f.active++ && f.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ue.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (ae.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ce.test(r) ? r.replace(ce, "$1_=" + se++) : r + (ae.test(r) ? "&" : "?") + "_=" + se++)), p.ifModified && (f.lastModified[r] && S.setRequestHeader("If-Modified-Since", f.lastModified[r]), f.etag[r] && S.setRequestHeader("If-None-Match", f.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || 2 === x)) return S.abort();
                for (u in T = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) S[u](p[u]);
                if (o = ye(he, p, i, S)) {
                    if (S.readyState = 1, d && g.trigger("ajaxSend", [S, p]), 2 === x) return S;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        S.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, o.send(b, k)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        k(-1, t)
                    }
                } else k(-1, "No Transport");

                function k(e, i, n, a) {
                    var c, u, b, w, T, k = i;
                    2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (w = function(t, e, i) {
                        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (o in a)
                                if (a[o] && a[o].test(n)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0] in i) r = l[0];
                        else {
                            for (o in i) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
                    }(p, S, n)), w = function(t, e, i, n) {
                        var o, r, s, a, l, c = {},
                            d = t.dataTypes.slice();
                        if (d[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (r = d.shift(); r;)
                            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, w, S, c), c ? (p.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (f.lastModified[r] = T), (T = S.getResponseHeader("etag")) && (f.etag[r] = T)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, u = w.data, c = !(b = w.error))) : (b = k, !e && k || (k = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (i || k) + "", c ? v.resolveWith(h, [u, k, S]) : v.rejectWith(h, [S, k, b]), S.statusCode(y), y = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, p, c ? u : b]), m.fireWith(h, [S, k]), d && (g.trigger("ajaxComplete", [S, p]), --f.active || f.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(t, e, i) {
                return f.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return f.get(t, void 0, e, "script")
            }
        }), f.each(["get", "post"], function(t, e) {
            f[e] = function(t, i, n, o) {
                return f.isFunction(i) && (o = o || n, n = i, i = void 0), f.ajax(f.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, f.isPlainObject(t) && t))
            }
        }), f._evalUrl = function(t) {
            return f.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, f.fn.extend({
            wrapAll: function(t) {
                var e;
                return f.isFunction(t) ? this.each(function(e) {
                    f(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = f(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return f.isFunction(t) ? this.each(function(e) {
                    f(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = f(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = f.isFunction(t);
                return this.each(function(i) {
                    f(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            }
        }), f.expr.filters.hidden = function(t) {
            return !f.expr.filters.visible(t)
        }, f.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var we = /%20/g,
            xe = /\[\]$/,
            Te = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            ke = /^(?:input|select|textarea|keygen)/i;

        function Ce(t, e, i, n) {
            var o;
            if (f.isArray(e)) f.each(e, function(e, o) {
                i || xe.test(t) ? n(t, o) : Ce(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== f.type(e)) n(t, e);
            else
                for (o in e) Ce(t + "[" + o + "]", e[o], i, n)
        }
        f.param = function(t, e) {
            var i, n = [],
                o = function(t, e) {
                    e = f.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(t) || t.jquery && !f.isPlainObject(t)) f.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (i in t) Ce(i, t[i], e, o);
            return n.join("&").replace(we, "+")
        }, f.fn.extend({
            serialize: function() {
                return f.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = f.prop(this, "elements");
                    return t ? f.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !f(this).is(":disabled") && ke.test(this.nodeName) && !Se.test(t) && (this.checked || !X.test(t))
                }).map(function(t, e) {
                    var i = f(this).val();
                    return null == i ? null : f.isArray(i) ? f.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Te, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Te, "\r\n")
                    }
                }).get()
            }
        }), f.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var $e = {
                0: 200,
                1223: 204
            },
            Ee = f.ajaxSettings.xhr();
        u.cors = !!Ee && "withCredentials" in Ee, u.ajax = Ee = !!Ee, f.ajaxTransport(function(e) {
            var i, n;
            return u.cors || Ee && !e.crossDomain ? {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return f.globalEval(t), t
                }
            }
        }), f.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), f.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain) return {
                send: function(o, r) {
                    e = f("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), n.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Ae = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ae.pop() || f.expando + "_" + se++;
                return this[t] = !0, t
            }
        }), f.ajaxPrefilter("json jsonp", function(e, i, n) {
            var o, r, s, a = !1 !== e.jsonp && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = f.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + o) : !1 !== e.jsonp && (e.url += (ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || f.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === r ? f(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, Ae.push(o)), s && f.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), f.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || n;
            var o = S.exec(t),
                r = !i && [];
            return o ? [e.createElement(o[1])] : (o = tt([t], e, r), r && r.length && f(r).remove(), f.merge([], o.childNodes))
        };
        var De = f.fn.load;

        function Oe(t) {
            return f.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        f.fn.load = function(t, e, i) {
            if ("string" != typeof t && De) return De.apply(this, arguments);
            var n, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = f.trim(t.slice(a)), t = t.slice(0, a)), f.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && f.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(n ? f("<div>").append(f.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            f.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), f.expr.filters.animated = function(t) {
            return f.grep(f.timers, function(e) {
                return t === e.elem
            }).length
        }, f.offset = {
            setOffset: function(t, e, i) {
                var n, o, r, s, a, l, c = f.css(t, "position"),
                    d = f(t),
                    u = {};
                "static" === c && (t.style.position = "relative"), a = d.offset(), r = f.css(t, "top"), l = f.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (n = d.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), f.isFunction(e) && (e = e.call(t, i, f.extend({}, a))), null != e.top && (u.top = e.top - a.top + s), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : d.css(u)
            }
        }, f.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    f.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = n && n.ownerDocument;
                return r ? (e = r.documentElement, f.contains(e, n) ? (o = n.getBoundingClientRect(), i = Oe(r), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === f.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), f.nodeName(t[0], "html") || (n = t.offset()), n.top += f.css(t[0], "borderTopWidth", !0), n.left += f.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - f.css(i, "marginTop", !0),
                        left: e.left - n.left - f.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === f.css(t, "position");) t = t.offsetParent;
                    return t || At
                })
            }
        }), f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            f.fn[t] = function(n) {
                return L(this, function(t, n, o) {
                    var r = Oe(t);
                    return void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
                }, t, n, arguments.length)
            }
        }), f.each(["top", "left"], function(t, e) {
            f.cssHooks[e] = Dt(u.pixelPosition, function(t, i) {
                return i ? (i = Nt(t, e), Ct.test(i) ? f(t).position()[e] + "px" : i) : void 0
            })
        }), f.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            f.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                f.fn[n] = function(n, o) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        s = i || (!0 === n || !0 === o ? "margin" : "border");
                    return L(this, function(e, i, n) {
                        var o;
                        return f.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? f.css(e, i, s) : f.style(e, i, n, s)
                    }, e, r ? n : void 0, r, null)
                }
            })
        }), f.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return f
        });
        var je = t.jQuery,
            Pe = t.$;
        return f.noConflict = function(e) {
            return t.$ === f && (t.$ = Pe), e && t.jQuery === f && (t.jQuery = je), f
        }, e || (t.jQuery = t.$ = f), f
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(n).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var n = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.button"),
                r = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
            n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.carousel"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var o = this.$element.find(".item.active"),
            r = n || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var o = function(i) {
        var n, o = t(this),
            r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse") ? "toggle" : o.data();
        i.call(r, s)
    })
}(jQuery),
// function(t) {
//     "use strict";
//
//     function e(e) {
//         var i = e.attr("data-target");
//         i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
//         var n = i && t(i);
//         return n && n.length ? n : e.parent()
//     }
//
//     function i(i) {
//         i && 3 === i.which || (t(n).remove(), t(o).each(function() {
//             var n = t(this),
//                 o = e(n),
//                 r = {
//                     relatedTarget: this
//                 };
//             o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
//         }))
//     }
//     var n = ".dropdown-backdrop",
//         o = '[data-toggle="dropdown"]',
//         r = function(e) {
//             t(e).on("click.bs.dropdown", this.toggle);
//         };
//     r.VERSION = "3.3.7", r.prototype.toggle = function(n) {
//         var o = t(this);
//         // if($(e.target).is('.wish_head_list')){
//         //     e.preventDefault();
//         //     return;
//         // }
//         if (!o.is(".disabled, :disabled")) {
//             var r = e(o),
//                 s = r.hasClass("open");
//             if (i(), !s) {
//                 "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
//                 var a = {
//                     relatedTarget: this
//                 };
//                 if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
//                 o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
//             }
//             return !1
//         }
//     }, r.prototype.keydown = function(i) {
//         if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
//             var n = t(this);
//             if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
//                 var r = e(n),
//                     s = r.hasClass("open");
//                 if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && r.find(o).trigger("focus"), n.trigger("click");
//                 var a = r.find(".dropdown-menu li:not(.disabled):visible a");
//                 if (a.length) {
//                     var l = a.index(i.target);
//                     38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
//                 }
//             }
//         }
//     };
//     var s = t.fn.dropdown;
//     t.fn.dropdown = function(e) {
//         return this.each(function() {
//             var i = t(this),
//                 n = i.data("bs.dropdown");
//             n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
//         })
//     }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
//         return t.fn.dropdown = s, this
//     }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
//         t.stopPropagation()
//     }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
// }(jQuery),
function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            o = n.attr("href"),
            r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), n.data());
        n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !n) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                u = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (c) {
                var f = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + p > h.bottom ? "top" : "top" == a && d.top - p < h.top ? "bottom" : "right" == a && d.right + u > h.width ? "left" : "left" == a && d.left - u < h.left ? "right" : a, r.removeClass(f).addClass(a)
            }
            var g = this.getCalculatedOffset(a, d, u, p);
            this.applyPlacement(g, a);
            var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            r = n[0].offsetHeight,
            s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != r && (e.top = e.top + r - c);
        var d = this.getViewportAdjustedDelta(i, e, l, c);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * d.left - o + l : 2 * d.top - r + c,
            f = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][f], u)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        function n() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), i && i()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && i instanceof window.SVGElement,
            s = n ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + n;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                d = e.left + r + i;
            c < s.left ? o.left = s.left - c : d > s.right && (o.left = s.left + s.width - d)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tooltip"),
                r = "object" == typeof i && i;
            !o && /destroy|hide/.test(i) || (o || n.data("bs.tooltip", o = new e(this, r)), "string" == typeof i && o[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.popover"),
                r = "object" == typeof i && i;
            !o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new e(this, r)), "string" == typeof i && o[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = n.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.affix"),
                r = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top;
        return null != i && o <= i ? "top" : null != n && l + (a ? s : e) >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                r = n.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(i).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = e++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * s + (e * a.options.slidesPerRow + i);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, o, r = this,
            s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case "index":
                var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++n;
            else
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, n, o, r = this,
            s = 0;
        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft) return e = r, !1
        }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            i = Math.ceil(e.slideCount / e.options.slidesToShow),
            n = e.getNavigableIndexes().filter(function(t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            var o = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== o && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + o
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(o) {
            var r = n[o];
            t(this).attr({
                role: "presentation"
            }), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + r,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++) e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = t(this).attr("data-srcset"),
                    o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    s = document.createElement("img");
                s.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, i])
                    })
                }, s.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                }, s.src = i
            })
        }
        var i, n, o, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (n > 0 && n--, o <= r.slideCount && o++)), i = r.$slider.find(".slick-slide").slice(n, o), "anticipated" === r.options.lazyLoad)
            for (var s = n - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), i = (i = i.add(l.eq(s))).add(l.eq(a)), s--, a++;
        e(i), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, o, r, s, a = this,
            l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), r = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            o && (i.attr("srcset", o), r && i.attr("sizes", r)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, s.onerror = function() {
            e < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, e.prototype.refresh = function(e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            for (e in o.respondTo = o.options.respondTo || "window", r)
                if (n = o.breakpoints.length - 1, r.hasOwnProperty(e)) {
                    for (i = r[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.setCSS = function(t) {
        var e, i, n = this,
            o = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, o) {
            e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, o, r, s = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
        else if ("multiple" === r) t.each(n, function(t, e) {
            s.options[t] = e
        });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(), s.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, o, r = this;
        if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1 + s, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, o, r, s, a, l = null,
            c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, o, r, s, a = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = n.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), void 0 !== i) return i;
        return n
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";

    function t(t) {
        t.preventDefault()
    }

    function e(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function i(t, e, i) {
        i > 0 && (r(t, e), setTimeout(function() {
            s(t, e)
        }, i))
    }

    function n(t) {
        return Array.isArray(t) ? t : [t]
    }

    function o(t) {
        var e = (t = String(t)).split(".");
        return e.length > 1 ? e[1].length : 0
    }

    function r(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function s(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function a(t) {
        var e = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }

    function l(t, e) {
        return 100 / (e - t)
    }

    function c(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function d(t, e) {
        for (var i = 1; t >= e[i];) i += 1;
        return i
    }

    function u(t, e, i) {
        if (i >= t.slice(-1)[0]) return 100;
        var n, o, r, s, a = d(i, t);
        return n = t[a - 1], o = t[a], r = e[a - 1], s = e[a], r + function(t, e) {
            return c(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
        }([n, o], i) / l(r, s)
    }

    function p(t, e, i, n) {
        if (100 === n) return n;
        var o, r, s = d(n, t);
        return i ? n - (o = t[s - 1]) > ((r = t[s]) - o) / 2 ? r : o : e[s - 1] ? t[s - 1] + function(t, e) {
            return Math.round(t / e) * e
        }(n - t[s - 1], e[s - 1]) : n
    }

    function f(t, i, n) {
        var o;
        if ("number" == typeof i && (i = [i]), "[object Array]" !== Object.prototype.toString.call(i)) throw new Error("noUiSlider (" + q + "): 'range' contains invalid value.");
        if (!e(o = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !e(i[0])) throw new Error("noUiSlider (" + q + "): 'range' value isn't numeric.");
        n.xPct.push(o), n.xVal.push(i[0]), o ? n.xSteps.push(!isNaN(i[1]) && i[1]) : isNaN(i[1]) || (n.xSteps[0] = i[1]), n.xHighestCompleteStep.push(0)
    }

    function h(t, e, i) {
        if (!e) return !0;
        i.xSteps[t] = c([i.xVal[t], i.xVal[t + 1]], e) / l(i.xPct[t], i.xPct[t + 1]);
        var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
            o = Math.ceil(Number(n.toFixed(3)) - 1),
            r = i.xVal[t] + i.xNumSteps[t] * o;
        i.xHighestCompleteStep[t] = r
    }

    function g(t, e, i) {
        this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var n, o = [];
        for (n in t) t.hasOwnProperty(n) && o.push([t[n], n]);
        for (o.sort(o.length && "object" == typeof o[0][0] ? function(t, e) {
                return t[0][0] - e[0][0]
            } : function(t, e) {
                return t[0] - e[0]
            }), n = 0; n < o.length; n++) f(o[n][1], o[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) h(n, this.xNumSteps[n], this)
    }

    function v(t) {
        if (function(t) {
                return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
            }(t)) return !0;
        throw new Error("noUiSlider (" + q + "): 'format' requires 'to' and 'from' methods.")
    }

    function m(t, i) {
        if (!e(i)) throw new Error("noUiSlider (" + q + "): 'step' is not numeric.");
        t.singleStep = i
    }

    function y(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + q + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + q + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + q + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new g(e, t.snap, t.singleStep)
    }

    function b(t, e) {
        if (e = n(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + q + "): 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function w(t, e) {
        if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider (" + q + "): 'snap' option must be a boolean.")
    }

    function x(t, e) {
        if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider (" + q + "): 'animate' option must be a boolean.")
    }

    function T(t, e) {
        if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider (" + q + "): 'animationDuration' option must be a number.")
    }

    function S(t, e) {
        var i, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (i = 1; i < t.handles; i++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + q + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function k(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + q + "): 'orientation' option is invalid.")
        }
    }

    function C(t, i) {
        if (!e(i)) throw new Error("noUiSlider (" + q + "): 'margin' option must be numeric.");
        if (0 !== i && (t.margin = t.spectrum.getMargin(i), !t.margin)) throw new Error("noUiSlider (" + q + "): 'margin' option is only supported on linear sliders.")
    }

    function $(t, i) {
        if (!e(i)) throw new Error("noUiSlider (" + q + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(i), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + q + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function E(t, i) {
        if (!e(i)) throw new Error("noUiSlider (" + q + "): 'padding' option must be numeric.");
        if (0 !== i) {
            if (t.padding = t.spectrum.getMargin(i), !t.padding) throw new Error("noUiSlider (" + q + "): 'padding' option is only supported on linear sliders.");
            if (t.padding < 0) throw new Error("noUiSlider (" + q + "): 'padding' option must be a positive number.");
            if (t.padding >= 50) throw new Error("noUiSlider (" + q + "): 'padding' option must be less than half the range.")
        }
    }

    function A(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + q + "): 'direction' option was not recognized.")
        }
    }

    function N(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + q + "): 'behaviour' must be a string containing options.");
        var i = e.indexOf("tap") >= 0,
            n = e.indexOf("drag") >= 0,
            o = e.indexOf("fixed") >= 0,
            r = e.indexOf("snap") >= 0,
            s = e.indexOf("hover") >= 0;
        if (o) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + q + "): 'fixed' behaviour must be used with 2 handles");
            C(t, t.start[1] - t.start[0])
        }
        t.events = {
            tap: i || r,
            drag: n,
            fixed: o,
            snap: r,
            hover: s
        }
    }

    function D(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var i = 0; i < t.handles; i++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = n(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + q + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + q + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function O(t, e) {
        t.ariaFormat = e, v(e)
    }

    function j(t, e) {
        t.format = e, v(e)
    }

    function P(t, e) {
        if (void 0 !== e && "string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + q + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function L(t, e) {
        if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider (" + q + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var i in t.cssClasses = {}, e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i]);
        else t.cssClasses = e
    }

    function H(t, e) {
        if (!0 !== e && !1 !== e) throw new Error("noUiSlider (" + q + "): 'useRequestAnimationFrame' option should be true (default) or false.");
        t.useRequestAnimationFrame = e
    }

    function I(t) {
        var e = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: R,
                format: R
            },
            i = {
                step: {
                    r: !1,
                    t: m
                },
                start: {
                    r: !0,
                    t: b
                },
                connect: {
                    r: !0,
                    t: S
                },
                direction: {
                    r: !0,
                    t: A
                },
                snap: {
                    r: !1,
                    t: w
                },
                animate: {
                    r: !1,
                    t: x
                },
                animationDuration: {
                    r: !1,
                    t: T
                },
                range: {
                    r: !0,
                    t: y
                },
                orientation: {
                    r: !1,
                    t: k
                },
                margin: {
                    r: !1,
                    t: C
                },
                limit: {
                    r: !1,
                    t: $
                },
                padding: {
                    r: !1,
                    t: E
                },
                behaviour: {
                    r: !0,
                    t: N
                },
                ariaFormat: {
                    r: !1,
                    t: O
                },
                format: {
                    r: !1,
                    t: j
                },
                tooltips: {
                    r: !1,
                    t: D
                },
                cssPrefix: {
                    r: !1,
                    t: P
                },
                cssClasses: {
                    r: !1,
                    t: L
                },
                useRequestAnimationFrame: {
                    r: !1,
                    t: H
                }
            },
            n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                useRequestAnimationFrame: !0
            };
        t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(i).forEach(function(o) {
            if (void 0 === t[o] && void 0 === n[o]) {
                if (i[o].r) throw new Error("noUiSlider (" + q + "): '" + o + "' is required.");
                return !0
            }
            i[o].t(e, void 0 === t[o] ? n[o] : t[o])
        }), e.pips = t.pips;
        var o = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        return e.style = o[e.dir][e.ort], e.styleOposite = o[e.dir ? 0 : 1][e.ort], e
    }
    function get_price_range(a,b){
      if (a && b) {
        document.getElementsByClassName("filt_min")[0].value = a.replace(/[^0-9.,]+/,'');
        document.getElementsByClassName("filt_max")[0].value = b.replace(/[^0-9.,]+/,'');
      }
    }
    function M(e, o, l) {
        function c(t, e) {
            var i = K.createElement("div");
            return e && r(i, e), t.appendChild(i), i
        }

        function d(t, e) {
            var i = c(t, o.cssClasses.origin),
                n = c(i, o.cssClasses.handle);
            return n.setAttribute("data-handle", e), n.setAttribute("tabindex", "0"), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", o.ort ? "vertical" : "horizontal"), 0 === e ? r(n, o.cssClasses.handleLower) : e === o.handles - 1 && r(n, o.cssClasses.handleUpper), i
        }

        function u(t, e) {
            return !!e && c(t, o.cssClasses.connect)
        }

        function p(t, e) {
            return !!o.tooltips[e] && c(t.firstChild, o.cssClasses.tooltip)
        }

        function f(t, e, i) {
            function n(t, e) {
                var i = e === o.cssClasses.value,
                    n = i ? l : d;
                return e + " " + (i ? u : p)[o.ort] + " " + n[t]
            }

            function s(t, r) {
                r[1] = r[1] && e ? e(r[0], r[1]) : r[1];
                var s = c(a, !1);
                s.className = n(r[1], o.cssClasses.marker), s.style[o.style] = t + "%", r[1] && ((s = c(a, !1)).className = n(r[1], o.cssClasses.value), s.style[o.style] = t + "%", s.innerText = i.to(r[0]))
            }
            var a = K.createElement("div"),
                l = [o.cssClasses.valueNormal, o.cssClasses.valueLarge, o.cssClasses.valueSub],
                d = [o.cssClasses.markerNormal, o.cssClasses.markerLarge, o.cssClasses.markerSub],
                u = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
                p = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
            return r(a, o.cssClasses.pips), r(a, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical), Object.keys(t).forEach(function(e) {
                s(e, t[e])
            }), a
        }

        function h() {
            var t;
            U && ((t = U).parentElement.removeChild(t), U = null)
        }

        function g(t) {
            h();
            var e = t.mode,
                i = t.density || 1,
                n = t.filter || !1,
                o = function(t, e, i) {
                    if ("range" === t || "steps" === t) return Q.xVal;
                    if ("count" === t) {
                        if (!e) throw new Error("noUiSlider (" + q + "): 'values' required for mode 'count'.");
                        var n, o = 100 / (e - 1),
                            r = 0;
                        for (e = [];
                            (n = r++ * o) <= 100;) e.push(n);
                        t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return Q.fromStepping(i ? Q.getStep(t) : t)
                    }) : "values" === t ? i ? e.map(function(t) {
                        return Q.fromStepping(Q.getStep(Q.toStepping(t)))
                    }) : e : void 0
                }(e, t.values || !1, t.stepped || !1),
                r = function(t, e, i) {
                    function n(t, e) {
                        return (t + e).toFixed(7) / 1
                    }
                    var o = {},
                        r = Q.xVal[0],
                        s = Q.xVal[Q.xVal.length - 1],
                        a = !1,
                        l = !1,
                        c = 0;
                    return (i = function(t) {
                        return t.filter(function(t) {
                            return !this[t] && (this[t] = !0)
                        }, {})
                    }(i.slice().sort(function(t, e) {
                        return t - e
                    })))[0] !== r && (i.unshift(r), a = !0), i[i.length - 1] !== s && (i.push(s), l = !0), i.forEach(function(r, s) {
                        var d, u, p, f, h, g, v, m, y, b = r,
                            w = i[s + 1];
                        if ("steps" === e && (d = Q.xNumSteps[s]), d || (d = w - b), !1 !== b && void 0 !== w)
                            for (d = Math.max(d, 1e-7), u = b; w >= u; u = n(u, d)) {
                                for (v = (h = (f = Q.toStepping(u)) - c) / t, y = h / (m = Math.round(v)), p = 1; m >= p; p += 1) o[(c + p * y).toFixed(5)] = ["x", 0];
                                g = i.indexOf(u) > -1 ? 1 : "steps" === e ? 2 : 0, !s && a && (g = 0), u === w && l || (o[f.toFixed(5)] = [u, g]), c = f
                            }
                    }), o
                }(i, e, o),
                s = t.format || {
                    to: Math.round
                };
            return U = _.appendChild(f(r, n, s))
        }

        function v() {
            var t = M.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][o.ort];
            return 0 === o.ort ? t.width || M[e] : t.height || M[e]
        }

        function m(t, e, i, n) {
            var r = function(e) {
                    return !_.hasAttribute("disabled") && (! function(t, e) {
                        return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
                    }(_, o.cssClasses.tap) && (!!(e = function(t, e) {
                        var i, n, o = 0 === t.type.indexOf("touch"),
                            r = 0 === t.type.indexOf("mouse"),
                            s = 0 === t.type.indexOf("pointer");
                        if (0 === t.type.indexOf("MSPointer") && (s = !0), o) {
                            if (t.touches.length > 1) return !1;
                            i = t.changedTouches[0].pageX, n = t.changedTouches[0].pageY
                        }
                        return e = e || a(K), (r || s) && (i = t.clientX + e.x, n = t.clientY + e.y), t.pageOffset = e, t.points = [i, n], t.cursor = r || s, t
                    }(e, n.pageOffset)) && (!(t === W.start && void 0 !== e.buttons && e.buttons > 1) && ((!n.hover || !e.buttons) && (B || e.preventDefault(), e.calcPoint = e.points[o.ort], void i(e, n))))))
                },
                s = [];
            return t.split(" ").forEach(function(t) {
                e.addEventListener(t, r, !!B && {
                    passive: !0
                }), s.push([t, r])
            }), s
        }

        function y(t) {
            var e = 100 * (t - function(t, e) {
                var i = t.getBoundingClientRect(),
                    n = t.ownerDocument,
                    o = n.documentElement,
                    r = a(n);
                return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0), e ? i.top + r.y - o.clientTop : i.left + r.x - o.clientLeft
            }(M, o.ort)) / v();
            return o.dir ? 100 - e : e
        }

        function b(t, e, i, n) {
            var o = i.slice(),
                r = [!t, t],
                s = [t, !t];
            n = n.slice(), t && n.reverse(), n.length > 1 ? n.forEach(function(t, i) {
                var n = E(o, t, o[t] + e, r[i], s[i], !1);
                !1 === n ? e = 0 : (e = n - o[t], o[t] = n)
            }) : r = s = [!0];
            var a = !1;
            n.forEach(function(t, n) {
                a = D(t, i[t] + e, r[n], s[n]) || a
            }), a && n.forEach(function(t) {
                w("update", t), w("slide", t)
            })
        }

        function w(t, e, i) {
            Object.keys(J).forEach(function(n) {
                var r = n.split(".")[0];
                t === r && J[n].forEach(function(t) {
                    t.call(z, G.map(o.format.to), e, G.slice(), i || !1, V.slice())
                })
            })
        }

        function x(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && S(t, e)
        }

        function T(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return S(t, e);
            var i = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            b(i > 0, 100 * i / e.baseSize, e.locations, e.handleNumbers)
        }

        function S(e, i) {
            Y && (s(Y, o.cssClasses.active), Y = !1), e.cursor && (et.style.cursor = "", et.removeEventListener("selectstart", t)), Z.forEach(function(t) {
                tt.removeEventListener(t[0], t[1])
            }), s(_, o.cssClasses.drag), N(), i.handleNumbers.forEach(function(t) {
                w("change", t), w("set", t), w("end", t)
            })
        }

        function k(e, i) {
            if (1 === i.handleNumbers.length) {
                var n = R[i.handleNumbers[0]];
                if (n.hasAttribute("disabled")) return !1;
                r(Y = n.children[0], o.cssClasses.active)
            }
            e.stopPropagation();
            var s = m(W.move, tt, T, {
                    startCalcPoint: e.calcPoint,
                    baseSize: v(),
                    pageOffset: e.pageOffset,
                    handleNumbers: i.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: V.slice()
                }),
                a = m(W.end, tt, S, {
                    handleNumbers: i.handleNumbers
                }),
                l = m("mouseout", tt, x, {
                    handleNumbers: i.handleNumbers
                });
            Z = s.concat(a, l), e.cursor && (et.style.cursor = getComputedStyle(e.target).cursor, R.length > 1 && r(_, o.cssClasses.drag), et.addEventListener("selectstart", t, !1)), i.handleNumbers.forEach(function(t) {
                w("start", t)
            })
        }

        function C(t) {
            t.stopPropagation();
            var e = y(t.calcPoint),
                n = function(t) {
                    var e = 100,
                        i = !1;
                    return R.forEach(function(n, o) {
                        if (!n.hasAttribute("disabled")) {
                            var r = Math.abs(V[o] - t);
                            e > r && (i = o, e = r)
                        }
                    }), i
                }(e);
            return !1 !== n && (o.events.snap || i(_, o.cssClasses.tap, o.animationDuration), D(n, e, !0, !0), N(), w("slide", n, !0), w("update", n, !0), w("change", n, !0), w("set", n, !0), void(o.events.snap && k(t, {
                handleNumbers: [n]
            })))
        }

        function $(t) {
            var e = y(t.calcPoint),
                i = Q.getStep(e),
                n = Q.fromStepping(i);
            Object.keys(J).forEach(function(t) {
                "hover" === t.split(".")[0] && J[t].forEach(function(t) {
                    t.call(z, n)
                })
            })
        }

        function E(t, e, i, n, r, s) {
            return R.length > 1 && (n && e > 0 && (i = Math.max(i, t[e - 1] + o.margin)), r && e < R.length - 1 && (i = Math.min(i, t[e + 1] - o.margin))), R.length > 1 && o.limit && (n && e > 0 && (i = Math.min(i, t[e - 1] + o.limit)), r && e < R.length - 1 && (i = Math.max(i, t[e + 1] - o.limit))), o.padding && (0 === e && (i = Math.max(i, o.padding)), e === R.length - 1 && (i = Math.min(i, 100 - o.padding))), !((i = function(t) {
                return Math.max(Math.min(t, 100), 0)
            }(i = Q.getStep(i))) === t[e] && !s) && i
        }

        function A(t) {
            return t + "%"
        }

        function N() {
            X.forEach(function(t) {
                var e = V[t] > 50 ? -1 : 1,
                    i = 3 + (R.length + e * t);
                R[t].childNodes[0].style.zIndex = i
            })
        }

        function D(t, e, i, n) {
            return !1 !== (e = E(V, t, e, i, n, !1)) && (function(t, e) {
                V[t] = e, G[t] = Q.fromStepping(e);
                var i = function() {
                    R[t].style[o.style] = A(e), O(t), O(t + 1)
                };
                window.requestAnimationFrame && o.useRequestAnimationFrame ? window.requestAnimationFrame(i) : i()
            }(t, e), !0)
        }

        function O(t) {
            if (F[t]) {
                var e = 0,
                    i = 100;
                0 !== t && (e = V[t - 1]), t !== F.length - 1 && (i = V[t]), F[t].style[o.style] = A(e), F[t].style[o.styleOposite] = A(100 - i)
            }
        }

        function j(t, e) {
            null !== t && !1 !== t && ("number" == typeof t && (t = String(t)), !1 === (t = o.format.from(t)) || isNaN(t) || D(e, Q.toStepping(t), !1, !1))
        }

        function P(t, e) {
            var r = n(t),
                s = void 0 === V[0];
            e = void 0 === e || !!e, r.forEach(j), o.animate && !s && i(_, o.cssClasses.tap, o.animationDuration), X.forEach(function(t) {
                D(t, V[t], !0, !1)
            }), N(), X.forEach(function(t) {
                w("update", t), null !== r[t] && e && w("set", t)
            })
        }

        function L() {
            var t = G.map(o.format.to);
            return 1 === t.length ? t[0] : t
        }

        function H(t, e) {
            J[t] = J[t] || [], J[t].push(e), "update" === t.split(".")[0] && R.forEach(function(t, e) {
                w("update", e)
            })
        }
        var M, R, F, z, U, W = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            B = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }(),
            _ = e,
            V = [],
            X = [],
            Y = !1,
            Q = o.spectrum,
            G = [],
            J = {},
            Z = null,
            K = e.ownerDocument,
            tt = K.documentElement,
            et = K.body;
        if (_.noUiSlider) throw new Error("noUiSlider (" + q + "): Slider was already initialized.");
        return function(t) {
                r(t, o.cssClasses.target), 0 === o.dir ? r(t, o.cssClasses.ltr) : r(t, o.cssClasses.rtl), 0 === o.ort ? r(t, o.cssClasses.horizontal) : r(t, o.cssClasses.vertical), M = c(t, o.cssClasses.base)
            }(_),
            function(t, e) {
                R = [], (F = []).push(u(e, t[0]));
                for (var i = 0; i < o.handles; i++) R.push(d(e, i)), X[i] = i, F.push(u(e, t[i + 1]))
            }(o.connect, M), z = {
                destroy: function() {
                    for (var t in o.cssClasses) o.cssClasses.hasOwnProperty(t) && s(_, o.cssClasses[t]);
                    for (; _.firstChild;) _.removeChild(_.firstChild);
                    delete _.noUiSlider
                },
                steps: function() {
                    return V.map(function(t, e) {
                        var i = Q.getNearbySteps(t),
                            n = G[e],
                            o = i.thisStep.step,
                            r = null;
                        !1 !== o && n + o > i.stepAfter.startValue && (o = i.stepAfter.startValue - n), r = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep, 100 === t ? o = null : 0 === t && (r = null);
                        var s = Q.countStepDecimals();
                        return null !== o && !1 !== o && (o = Number(o.toFixed(s))), null !== r && !1 !== r && (r = Number(r.toFixed(s))), [r, o]
                    })
                },
                on: H,
                off: function(t) {
                    var e = t && t.split(".")[0],
                        i = e && t.substring(e.length);
                    Object.keys(J).forEach(function(t) {
                        var n = t.split(".")[0],
                            o = t.substring(n.length);
                        e && e !== n || i && i !== o || delete J[t]
                    })
                },
                get: L,
                set: P,
                reset: function(t) {
                    P(o.start, t)
                },
                __moveHandles: function(t, e, i) {
                    b(t, e, V, i)
                },
                options: l,
                updateOptions: function(t, e) {
                    var i = L(),
                        n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    n.forEach(function(e) {
                        void 0 !== t[e] && (l[e] = t[e])
                    });
                    var r = I(l);
                    n.forEach(function(e) {
                        void 0 !== t[e] && (o[e] = r[e])
                    }), Q = r.spectrum, o.margin = r.margin, o.limit = r.limit, o.padding = r.padding, o.pips && g(o.pips), V = [], P(t.start || i, e)
                },
                target: _,
                removePips: h,
                pips: g
            },
            function(t) {
                t.fixed || R.forEach(function(t, e) {
                    m(W.start, t.children[0], k, {
                        handleNumbers: [e]
                    })
                }), t.tap && m(W.start, M, C, {}), t.hover && m(W.move, M, $, {
                    hover: !0
                }), t.drag && F.forEach(function(e, i) {
                    if (!1 !== e && 0 !== i && i !== F.length - 1) {
                        var n = R[i - 1],
                            s = R[i],
                            a = [e];
                        r(e, o.cssClasses.draggable), t.fixed && (a.push(n.children[0]), a.push(s.children[0])), a.forEach(function(t) {
                            m(W.start, t, k, {
                                handles: [n, s],
                                handleNumbers: [i - 1, i]
                            })
                        })
                    }
                })
            }(o.events), P(o.start), o.pips && g(o.pips), o.tooltips && function() {
                var t = R.map(p);
                H("update", function(e, i, n) {
                    if (t[i]) {
                        var r = e[i];
                        !0 !== o.tooltips[i] && (r = o.tooltips[i].to(n[i])), t[i].innerHTML = r
                    }
                })
            }(), H("update", function(t, e, i, n, r) {
                X.forEach(function(t) {
                    var e = R[t],
                        n = E(V, t, 0, !0, !0, !0),
                        s = E(V, t, 100, !0, !0, !0),
                        a = r[t],
                        l = o.ariaFormat.to(i[t]);
                    e.children[0].setAttribute("aria-valuemin", n.toFixed(1)), e.children[0].setAttribute("aria-valuemax", s.toFixed(1)), e.children[0].setAttribute("aria-valuenow", a.toFixed(1)), e.children[0].setAttribute("aria-valuetext", l)
                    get_price_range(document.getElementsByClassName("noUi-handle-lower")[0].getAttribute("aria-valuetext"),document.getElementsByClassName("noUi-handle-upper")[0].getAttribute("aria-valuetext"));
                })
            }), z
    }
    var q = "10.0.0";
    g.prototype.getMargin = function(t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + q + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && c(this.xVal, t)
    }, g.prototype.toStepping = function(t) {
        return u(this.xVal, this.xPct, t)
    }, g.prototype.fromStepping = function(t) {
        return function(t, e, i) {
            if (i >= 100) return t.slice(-1)[0];
            var n, o = d(i, e);
            return function(t, e) {
                return e * (t[1] - t[0]) / 100 + t[0]
            }([t[o - 1], t[o]], (i - (n = e[o - 1])) * l(n, e[o]))
        }(this.xVal, this.xPct, t)
    }, g.prototype.getStep = function(t) {
        return p(this.xPct, this.xSteps, this.snap, t)
    }, g.prototype.getNearbySteps = function(t) {
        var e = d(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e - 0],
                step: this.xNumSteps[e - 0],
                highestStep: this.xHighestCompleteStep[e - 0]
            }
        }
    }, g.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(o);
        return Math.max.apply(null, t)
    }, g.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var R = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };
    return {
        version: q,
        create: function(t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + q + "): create requires a single element, got: " + t);
            var i = M(t, I(e), e);
            return t.noUiSlider = i, i
        }
    }
}),
// function(t) {
//     var e = {
//         url: !1,
//         callback: !1,
//         target: !1,
//         duration: 120,
//         on: "mouseover",
//         touch: !0,
//         onZoomIn: !1,
//         onZoomOut: !1,
//         magnify: 1
//     };
//     t.zoom = function(e, i, n, o) {
//         var r, s, a, l, c, d, u, p = t(e),
//             f = p.css("position"),
//             h = t(i);
//         return e.style.position = /(absolute|fixed)/.test(f) ? f : "relative", e.style.overflow = "hidden", n.style.width = n.style.height = "", t(n).addClass("zoomImg").css({
//             position: "absolute",
//             top: 0,
//             left: 0,
//             opacity: 0,
//             width: n.width * o,
//             height: n.height * o,
//             border: "none",
//             maxWidth: "none",
//             maxHeight: "none"
//         }).appendTo(e), {
//             init: function() {
//                 s = p.outerWidth(), r = p.outerHeight(), i === e ? (l = s, a = r) : (l = h.outerWidth(), a = h.outerHeight()), c = (n.width - s) / l, d = (n.height - r) / a, u = h.offset()
//             },
//             move: function(t) {
//                 var e = t.pageX - u.left,
//                     i = t.pageY - u.top;
//                 i = Math.max(Math.min(i, a), 0), e = Math.max(Math.min(e, l), 0), n.style.left = e * -c + "px", n.style.top = i * -d + "px"
//             }
//         }
//     }, t.fn.zoom = function(i) {
//         return this.each(function() {
//             var n = t.extend({}, e, i || {}),
//                 o = n.target && t(n.target)[0] || this,
//                 r = this,
//                 s = t(r),
//                 a = document.createElement("img"),
//                 l = t(a),
//                 c = "mousemove.zoom",
//                 d = !1,
//                 u = !1;
//             if (!n.url) {
//                 var p = r.querySelector("img");
//                 if (p && (n.url = p.getAttribute("data-src") || p.currentSrc || p.src), !n.url) return
//             }
//             s.one("zoom.destroy", function(t, e) {
//                 s.off(".zoom"), o.style.position = t, o.style.overflow = e, a.onload = null, l.remove()
//             }.bind(this, o.style.position, o.style.overflow)), a.onload = function() {
//                 function e(e) {
//                     p.init(), p.move(e), l.stop().fadeTo(t.support.opacity ? n.duration : 0, 1, !!t.isFunction(n.onZoomIn) && n.onZoomIn.call(a))
//                 }
//
//                 function i() {
//                     l.stop().fadeTo(n.duration, 0, !!t.isFunction(n.onZoomOut) && n.onZoomOut.call(a))
//                 }
//                 var p = t.zoom(o, r, a, n.magnify);
//                 "grab" === n.on ? s.on("mousedown.zoom", function(n) {
//                     1 === n.which && (t(document).one("mouseup.zoom", function() {
//                         i(), t(document).off(c, p.move)
//                     }), e(n), t(document).on(c, p.move), n.preventDefault())
//                 }) : "click" === n.on ? s.on("click.zoom", function(n) {
//                     return d ? void 0 : (d = !0, e(n), t(document).on(c, p.move), t(document).one("click.zoom", function() {
//                         i(), d = !1, t(document).off(c, p.move)
//                     }), !1)
//                 }) : "toggle" === n.on ? s.on("click.zoom", function(t) {
//                     d ? i() : e(t), d = !d
//                 }) : "mouseover" === n.on && (p.init(), s.on("mouseenter.zoom", e).on("mouseleave.zoom", i).on(c, p.move)), n.touch && s.on("touchstart.zoom", function(t) {
//                     t.preventDefault(), u ? (u = !1, i()) : (u = !0, e(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]))
//                 }).on("touchmove.zoom", function(t) {
//                     t.preventDefault(), p.move(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
//                 }).on("touchend.zoom", function(t) {
//                     t.preventDefault(), u && (u = !1, i())
//                 }), t.isFunction(n.callback) && n.callback.call(a)
//             }, a.setAttribute("role", "presentation"), a.src = n.url
//         })
//     }, t.fn.zoom.defaults = e
// }(window.jQuery),
function(t) {
    "use strict";
    var range_limit = [$("#price-slider").data("min"),$("#price-slider").data("max")];
    var e = t("#responsive-nav"),
        i = t("#responsive-nav .category-nav .category-header"),
        n = t("#responsive-nav .category-nav .category-list"),
        o = t("#responsive-nav .menu-nav .menu-header"),
        r = t("#responsive-nav .menu-nav .menu-list");
    i.on("click", function() {
        r.removeClass("open"), n.toggleClass("open")
    }), o.on("click", function() {
        n.removeClass("open"), r.toggleClass("open")
    }), t(document).click(function(i) {
        t(i.target).closest(e).length || (e.hasClass("open") ? (e.removeClass("open"), t("#navigation").removeClass("shadow")) : t(i.target).closest(".nav-toggle > button").length && (r.hasClass("open") || n.hasClass("open") || r.addClass("open"), t("#navigation").addClass("shadow"), e.addClass("open")))
    }), t("#home-slick").slick({
        autoplay: !0,
        infinite: !0,
        speed: 300,
        arrows: !0
    }), t("#product-slick-1").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: !0,
        infinite: !0,
        speed: 300,
        dots: !0,
        arrows: !1,
        appendDots: ".product-slick-dots-1",
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t("#product-slick-2").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: !0,
        infinite: !0,
        speed: 300,
        dots: !0,
        arrows: !1,
        appendDots: ".product-slick-dots-2",
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                dots: !1,
                arrows: !0,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t("#product-main-view").slick({
        infinite: !0,
        speed: 300,
        dots: !1,
        arrows: !0,
        fade: !0,
        asNavFor: "#product-view"
    }), t("#product-view").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        centerMode: !0,
        focusOnSelect: !0,
        asNavFor: "#product-main-view"
    });
    var currency = $("#price-slider").data("c");
    var s = document.getElementById("price-slider");
    s && noUiSlider.create(s, {
        start: range_limit,
        connect: !0,
        tooltips: [!0, !0],
        format: {
            to: function(t) {
                return t.toFixed(2) + " " + currency
            },
            from: function(t) {
                return t
            }
        },
        range: {
            min: range_limit[0],
            max: range_limit[1]
        }
    })
}(jQuery);
$(document).ready(function(){
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  $(".dropdown").click(function(e){
    if (!$(e.target).is('.dropdown .custom-menu') && !$(e.target).is('.dropdown .fa-trash')) {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
      }else{
        $(this).addClass("open");
      }
      $(".dropdown").not(this).removeClass("open");
    }
  });
  const $db = $(document.body);
  const isEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const str_limit = (text, limit) => {
    if (text.length > limit){
        for (let i = limit; i > 0; i--){
            if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
                return text.substring(0, i) + '...';
            }
        }
         return text.substring(0, limit) + '...';
    }
    else
        return text;
  }
  const inNotValidInput = function(input){
    $(input).css({
      boxShadow: '0 0 5px 1px red',
      border: 'red'
    });
  }

  const isValidInput = function(input){
    $(input).css({
      boxShadow: '0px 0px 0px 1px #DADADA inset, 0px 0px 0px 5px transparent',
      border: 'none'
    });
  }
  const isNotNull = function(value){
    return value !== undefined && value !== null && value !== '';
  }
  const btn_spin = (btn,size) =>{
    let sz = isNotNull(size) ? size : '';
    $(btn).html('<i class="fa fa-refresh fa-spin"></i>')
    // .css({
    //   paddingLeft: sz+'px',
    //   paddingRight: sz+'px'
    // });
  }
  const isset = (variable) => {
      return typeof variable !== 'undefined';
  }
  const setCookie = function(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  const getCookie = function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  const eraseCookie = function(name) {
      document.cookie = name+'=; Max-Age=-99999999;';
  }
  const go_to_bottom = function(){
    let $target = $('html,body');
    $target.animate({scrollTop: $target.height()}, 1000);
  }
  // console.log(isNotNull());
  const number_format = function(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  const $header = $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
  const time_diff = (datetime) => {
      var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";
      var datetime = new Date( datetime ).getTime();
      var now = new Date().getTime();
      if( isNaN(datetime) ){return "";}
      if (datetime < now) {var milisec_diff = now - datetime;}else{var milisec_diff = datetime - now;}
      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
      var date_diff = new Date( milisec_diff );
      return days;
  }

  const changeurl = (page, url) => {
        if (typeof (history.pushState) != "undefined") {
            var obj = {Page: page, Url: url};
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            window.location.href = "/panel";
        }
  }
  const filter_url = (arr) => {
    let url = [],link = '',index = 0;
    for (var i = 0; i < arr.length; i++) {
      url.push([Object.keys(arr[i])[0],Object.values(arr[i])[0]]);
      if (Object.values(arr[i])[0] !== '') {
        if (index == 0) {
          link += `?${Object.keys(arr[i])[0]}=${Object.values(arr[i])[0]}`;
        }else{
          link += `&${Object.keys(arr[i])[0]}=${Object.values(arr[i])[0]}`;
        }
        index += 1;
      }
    }
    let lh = location.href;
    changeurl(lh,`${lh.substring(0 , lh.indexOf('?'))}${link}`);
  }
const baseName = (str) => {
     var base = new String(str).substring(str.lastIndexOf('/') + 1);
      if(base.lastIndexOf(".") != -1)
          base = base.substring(0, base.lastIndexOf("."));
     return base;
  }
const $_get = (index) => {
    let vars = location.href.substring(location.href.indexOf("?") + 1).split("&");
    let qs = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof qs[key] === "undefined") {
        qs[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof qs[key] === "string") {
        var arr = [qs[key], decodeURIComponent(value)];
        qs[key] = arr;
        // If third or later entry with this name
      } else {
        qs[key].push(decodeURIComponent(value));
      }
    }
    return qs[index] || "";
  }
  const lang = [];
  const l = (k) => {
    if (lang.length == 0) {
      let res = "";
      $.ajax({
        url: '/get-lang-list',
        type: 'GET',
        data: {token: mt},
        async: false,
        success:function(d){
          let i = 0;
          while (i < d.length) {
            lang.push({key: Object.keys(d[i])[0],val:Object.values(d[i])[0] || ''});
            i++;
          }
          res = isset(lang.filter(a => a.key.includes(k))[0]) ? lang.filter(a => a.key.includes(k))[0].val  : `app.${k}`;
        }
      });
      if (isset(res)) {
        return res;
      }else{
        return l(k);
      }
    }else{
      return isset(lang.filter(it => it.key.includes(k))[0]) ? lang.filter(it => it.key.includes(k))[0].val : `app.${k}`;
    }
  }
  // const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 3000
  //   });
  // const notify_once = (mess,type) => {
  //   // Expected "success", "error", "warning", "info" or "question", got "danger"
  //   Toast.fire({
  //     type: type,
  //     title: mess
  //   });
  // }
  const ucheck = (data) => {
    return document.URL.indexOf(data) > 0 ? true : false;
  }
  const rand = (array) => {
    return array[Math.floor(Math.random()*array.length)];
  }
  const disc = (a,b) => {
    return number_format(((b-a)/b)*100,2);
  }
  const padZero = (str, len) => {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
  }
  const invertColor = (hex) => {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
      }
      var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
          g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
          b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
      return '#' + padZero(r) + padZero(g) + padZero(b);
  }
  const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  const isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]' ;
  }
  let tv_time = 6000;
  const notify = (message,type) => {
    let len = $(".notify").length;
    for (var i = 0; i < len; i++) {
      let bt = 90 + 75 * i;
      let op = 0.6 + 0.4/i;
      $(".notify:eq("+(len - i - 1)+")").animate({bottom: bt+"px",});
    }
    tv_time = 6000;
    $("body").append(`<div class='notify notify_${(len - $(this).index())} notify-${type}' data-index='${(len - $(this).index())}'><a class='close'>&times;</a>${message}</div>`);
  }

  const close_notify = (id) => {
    $(".notify_"+id).fadeOut(700, function() { $(this).remove(); });
  }

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {$('#img_src').attr('src', e.target.result);}
      reader.readAsDataURL(input.files[0]);
    }
  }
  $db.on("click",".notify .close",function(){
    close_notify($(this).parent().data("index"));
    let len = $(".notify:not(:last-child)").length;
    for (var k = 0; k < len; k++) {
      let bt = 20 + 75 * k;
      let op = 0.6 + 0.4*k;
      $(".notify:eq("+(len - k - 1)+")").animate({bottom: bt+"px",opacity:op});
    }
  });
  setInterval(function(){
    let len = $(".notify").length;
    for (var i = 0; i < len; i++) {
      close_notify($(".notify:eq(0)").data("index"));
    }
  },tv_time);

  // $(".header-btns-icon").on("click",function(){
  //   let items = ['success','danger'];
  //   var data = rand(items);
  //   notify("this is for testing notification",data);
  // });
  const wishlist_head = (type) => {
    $.ajax({
      url: '/get-wishlist',
      type: 'GET',data:{type:type},
      success:function(data){
        if (type == 0) {
          let html = "";
          for (var i = 0; i < data.list.length; i++) {
            let vl = data.list[i];
            let img = `<img src='/uploads/pro/small/${vl["image"]}' alt='${vl["productname"]}'>`;
            html += "<div class='product product-widget'><div class='product-thumb'>"+img+"</div><div class='product-body'><h3 class='product-price'>"+vl['price']+" "+data.currency+"<span class='qty'> x "+vl["wquantity"]+"</span></h3><h2 class='product-name'><a href='/product/"+vl["slug"]+"'>"+str_limit(vl["productname"],50)+"</a></h2></div><a class='wdelete cancel-btn' data-id='"+vl["id"]+"'><i class='fa fa-trash'></i></a></div>";
          }
          $("#wishlist_head").html(html);
          // $(".wish_total").html(data.total +data.currency);
          $(".wish_count").html(data.count);
        }else{
          let html = "";let pc = 0;
          for (var i = 0; i < data.list.length; i++) {
            let vl = data.list[i];
            pc += vl['price']*vl['wquantity'];
            let img = "/uploads/pro/small/" + vl['image'];
            html += "<tr><td class='thumb'><img src='"+img+"' alt=''></td><td class='details'><a href='/product/"+vl['slug']+"'>"+vl['productname']+"</a></td><td class='price text-center'><strong>"+vl['price']+data.currency+"</strong><br><del class='font-weak'><small>"+vl['old_price']+data.currency+"</small></del></td><td class='qty text-center'><input class='input' type='number' data-id='"+vl['pid']+"' value='"+vl['wquantity']+"'></td><td class='total text-center'><strong class='primary-color'>"+(parseFloat(vl['price'])*vl['wquantity'])+data.currency+"</strong></td><td class='text-right'><a class='main-btn icon-btn wdelete' data-id='"+vl['id']+"'><i class='fa fa-close'></i></a></td></tr>"
          }
          $("#wsh_total").html(pc+data.currency);
          $("#wishlist_tbody").html(html);
        }
      }
    });
  }
  // $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
  function add_wishls(quantity,prid,th){
    $header;
    // $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
    $.ajax({
      url: '/add-to-wishlist',
      type: 'POST',
      data: {quantity: quantity,prod_id: prid},
      success:function(data){
        wishlist_head(0);
        if (th !== "" & th !== undefined & th !== null) {
          $(th).html('<i class="fa fa-check"></i>');
          notify(data.success,"success");
        }
      },complete:function(){}
    });
  }
  $db.on("click",".add-to-cart",function(){
    let th = this;
    $(th).html('<i class="fa fa-refresh fa-spin"></i>');
    let quantity = "";
    if ($(".quantity").val() !== "") {quantity = $(".quantity").val()}
    add_wishls(quantity,$(this).data("id"),th);
  });
  if ($("#wishlist_tbody").length > 0) {wishlist_head(1);}
  if ($("#wishlist_head").length > 0) {wishlist_head(0);}
  $db.on("focusout",".qty > input",function(){
    add_wishls($(this).val(),$(this).data("id"));
    wishlist_head(0);wishlist_head(1);
  });

  $db.on("click",".wdelete",function(){
    $.ajax({
      url: '/delete-wishlist',
      type: 'GET',data:{id:$(this).data("id")},
      success:function(data){
        notify(data.success,"danger");
        wishlist_head(0);
        wishlist_head(1);
      }
    });
  });
  if (ucheck("category") | ucheck("search-result")) {
    let sortby = 0,	brand_list = [],urls = ['/get-search-result','/get-category-products'],pro_numb = 15,
        $sv = $(".sortby_value"),$fmi = $(".filt_min"),$fma = $(".filt_max"),$smp = $(".show_num_prod");
		let filter = [($_get('sort-by-value') || $sv.val()),($_get('min-price') || $fmi.val()),
                  ($_get('max-price') || $fma.val()),$smp.val(),brand_list];
    let get_prods = (pro_numb,txt_filter,btn_cls) => {
			let u = urls[1];
			if (ucheck("search-result")) {u = urls[0];}
			$.ajax({
				url: u,
				type: 'GET',
				data: {filter: filter,numb:pro_numb,category:$("#prod_list").data("ct")},
				success:function(data){
					let html = "",product_btns = "",id = "#prod_list",vw = $("#prod_list").data("words").split(",")[1],orn = $("#prod_list").data("words").split(",")[3];
					for (var i = 0; i < data.pros.length; i++) {
						let val = data.pros[i],star = "";
            let img = "src='/uploads/pro/small/"+val['image']+"'";
            let new_case = "",discount = "",old_price = "";
            for (var k = 1; k <= 5; k++) {
              if (k <= parseInt(val['rating'])) {star += "<i class='fa fa-star'></i>";}else{star += "<i class='fa fa-star-o empty'></i>";}
            }
            if ($(".wish_head_list").length > 0) {
              product_btns = "<div class='product-btns'><a class='primary-btn add-to-cart' data-id='"+val.id+"'><i class='fa fa-shopping-cart'></i></a> <a href='/order-product/"+val.slug+"' class='main-btn'>"+orn+"</a></div>";
            }
            if (time_diff(val.date) <= 40) {new_case = "<span>"+$(id).data("words").split(",")[0]+"</span>";}
            if (val.old_price !== "" && val.old_price !== null) {
              discount = "<span class='sale'>"+disc(val.price,val.old_price)+"%</span>";
              old_price = " <del class='product-old-price'>"+val.old_price+ val.currency+"</del>";
            }
            if (pro_numb > data.pros.length) {$(".load-section").css("display","none");}
            let loan = val.loan != 0 ? `<i class="ln_head"><b>${val.loan} ${$("#prod_list").data("words").split(",")[4]}</b></i>` : '';
						html += "<div class='col-md-4 col-sm-6 col-xs-6'><div class='product product-single'><div class='product-thumb'><div class='product-label'>"+new_case+discount+"</div>"+loan+"<a class='main-btn quick-view' href='/product/"+val.slug+"'></a><img "+img+" alt='"+val.productname+"'><div class='product-rating'>"+star+"</div></div><div class='product-body'><h3 class='product-name'><a href='/product/"+val.slug+"'>"+str_limit(val.productname,85)+"</a></h3><h2 class='product-price'>"+val.price+val.currency + old_price+" </h2>"+product_btns+"</div></div></div>";
					}
					$(id).html(html);
          // $(id + "img.lazy").lazyload();
          $(".prd_cnt").html(data.count);
          if (data.pros.length == 0) {
            $(id).html("<center class='no-prod-found'>"+data.empty+"</center>")
          }
          if (data.count > pro_numb) {
            $(".load-section").css("display","");
          }else{
            $(".load-section").css("display","none");
          }
				},complete:function(){
          if(isset(txt_filter)){
            if (btn_cls.includes('filter-btn')) {
              $(".sortby_value_btn").html(`<i class="fa fa-arrow-down"></i>`);
              $("#nav_filter").html(txt_filter);
            }else{
              $(".reset-filter").html(txt_filter);
            }
          }$(".load-section a").html(ld_btn_txt)}
			});
		}
		$db.on("click",".reset-filter",function(){
      let txt_filter = $(this).html(),btn_cls = $(this).attr("class");
      btn_spin($(this));
			for (var i = 0; i < $(".filt-by-brands input").length; i++) {
				$($(".filt-by-brands input")[i]).prop("checked", false);
			}
			brand_list = [];
      filter_url([{'brand-list': ''},{'min-price': ''},{'max-price': ''},{'sort-by-value':''}]);
      get_prods(pro_numb,txt_filter,btn_cls);
		});
		let input = ".filt-by-brands input[type='checkbox']";
		$db.on("change",".filt-by-brands input:not(:eq(0))",function(){
				$(input + ":eq(0)").prop("checked",false);
				if ($(input + ":checked").length >= ($(input).length - 1)) {
					$(input + ":eq(0)").prop("checked",true);
				}
				if ($(this).is(':checked')) {
					brand_list.push($(this).val());
				}else{
					brand_list.splice(brand_list.indexOf($(this).val()),1);
				}
		});
    let filter_prod = (txt_filter,btn_cls) => {
      filter = [$sv.val(),$fmi.val(),$fma.val(),$smp.val(),brand_list];
      filter_url([{'brand-list': brand_list},{'min-price': $fmi.val()},{'max-price': $(".filt_max").val()},{'sort-by-value':$sv.find(':selected').data("value")}]);
      // $("#prod_list").html("<div class='loading-gif'><img src='/img/loading.gif' alt='"+$("#prod_list").data("words").split(',')[2]+"'></div>")
      get_prods(pro_numb,txt_filter,btn_cls);
    }
    $db.on("click",".filter-btn,.sortby_value_btn",function(){
        let txt_filter = $("#nav_filter").html(),btn_cls = $(this).attr("class");
        btn_spin($(this));
        filter_prod(txt_filter,btn_cls);
    });
    $(".sortby_value").on("change",function(){
      filter_prod();
    });
    let ld_btn_txt = $(".load-section a").text();
    $db.on("click",".load-section a",function(){
      pro_numb += 15;
      $(this).html('<i class="fa fa-refresh fa-spin"></i> ');
      get_prods(pro_numb);
    });
    $(".load-section a").css("width","");
    // , .filt-by-brands span,
		$db.on("change",input +":eq(0)",function(){
      let fb = ".filt-by-brands b";
			if ($(this).hasClass("chckd")) {
				$(fb+":eq(0)").css("display","");
				$(fb+":eq(1)").css("display","none");
				$(this).removeClass("chckd").siblings("input[type='checkbox']").prop("checked",false);
				brand_list = [];
			}else{
				$(fb+":eq(0)").css("display","none");
				$(fb+":eq(1)").css("display","");
				$(this).removeClass("chckd").siblings("input[type='checkbox']").prop("checked",true);
				$(this).addClass("chckd");
				for (var i = 0; i < $(this).siblings("input[type='checkbox']").length; i++) {
					brand_list.push($(this).siblings("input[type='checkbox']:eq("+i+")").val());
				}
			}
			// console.log(brand_list);
		});
		get_prods(pro_numb);
  }
  $db.on("click",".pages-body > ul > li",function(){
    window.location = $(this).data("url");
  });
  if (ucheck("/product/") | ucheck("news/")) {
    let view_page = 1;
    let rg = "#review_pages";
    const get_news_comments = (news_id,view_page) => {
      $.ajax({
        url: '/get-review-list',
        type: 'GET',
        data:{news_id:news_id,view_page:view_page},
        success:function(data){
          let h = ""; let pgg = "";
          for (var i = 0; i < data.comments.length; i++) {
            let v = data.comments[i];
            let dlt_btn = v['owner'] == 1 ? "<a class='dlt_comment' data-id='"+v['id']+"'><i class='fa fa-trash'></i></a>" : "";
            h += `<div class='single-review'><div class='review-heading'><div><i class='fa fa-user-o'></i> ${v['name']}</div><div><i class='fa fa-clock-o'></i> ${v['time']} ${dlt_btn}</div></div><div class='review-body'><p>${v['comment']}</p></div></div>`;
          }
          for (var pg_index = 0; pg_index < Math.ceil(data.count/6); pg_index++) {
            let fr = ""; if (pg_index == (data.page - 1)) {fr = "class='active'"}
            pgg += "<li "+fr+" data-page='"+(pg_index + 1)+"'>"+(pg_index + 1)+"</li>";
          }
          if (data.count>6) {
            $("#review_pages").css("display","");
          }else{
            $("#review_pages").css("display","none");
          }
          $(rg).html('<li><i class="fa fa-caret-left"></i></li>' + pgg +'<li><i class="fa fa-caret-right"></i></li>');
          $(rg).siblings("div").remove();
          $(rg).before(h);
        }
      });
    }
    $db.on("click",rg+" > li,#rev_pg_pro>li",function(){
      if (!$(this).hasClass("active") && !$(this).is(':last-child') && !$(this).is(':first-child')) {
        $(this).addClass("active");
        $(rg+" > li:not(:eq("+$(this).index()+"))").removeClass("active");
        view_page = $(this).data("page");
        if (typeof news_id !== 'undefined') {
          get_news_comments(news_id,view_page);
        }else{
          get_reviews(view_page);
        }
      }
    });
    $db.on("click",rg+" > li:last-child,#rev_pg_pro>li:last-child,"+rg+" > li:first-child,#rev_pg_pro>li:first-child",function(){
      if ($(this).find("i").hasClass("fa-caret-right")) {
        let $la = $("li.active");
        let $ln = $la.next('li');
        if ($ln.length > 0 && !$ln.is(':last-child') && !$ln.is(':first-child')) {
          $la.removeClass("active");
          $ln.addClass("active");
          view_page = $ln.data("page");
          if (typeof news_id !== 'undefined') {
            get_news_comments(news_id,view_page);
          }else{
            get_reviews(view_page);
          }
        }
      }else{
        let $la = $("li.active");
        let $ln = $la.prev('li');
        if ($ln.length > 0 && !$ln.is(':last-child') && !$ln.is(':first-child')) {
          $la.removeClass("active");
          $ln.addClass("active");
          view_page = $ln.data("page");
          if (typeof news_id !== 'undefined') {
            get_news_comments(news_id,view_page);
          }else{
            get_reviews(view_page);
          }
        }
      }
    });
    if ($(rg).length > 0) {get_news_comments(news_id,view_page);}
    $(".share_comment").on("click",function(){
      let th = this, id, tp,prl="#prod_review_list";
      if ($(prl).length > 0) {
        id = $(prl).data("id");tp="prod";
      }else{
        id = $(".news-commenting").data("id");tp="news";
      }
      let em = "#commenter_email";let nm = "#commenter_name";let com = "#comment_section";
      if (isEmail($(em).val()) && isNotNull($(nm).val())&& isNotNull($(com).val())) {
        $(th).html('<i class="fa fa-refresh fa-spin"></i>');
        $header;
        $.ajax({
          url: '/add-new-comment',type: 'POST',
          data:{id:id,type:tp,name:$(nm).val(),email:$(em).val(),rating:$("input[name='rating']:checked").val(),comment:$(com).val()},
          success:function(data){
            if ($(".custom-menu > #shopping-cart").length == 0) {$("#commenter_name, #commenter_email").val("");}
            $("#comment_section").val("");
            notify(data.success,"success");
            if ($(prl).length > 0) {get_reviews(view_page);}
            if ($(rg).length > 0) {get_news_comments(news_id,view_page);}
          },complete:function(){$(th).html('<i class="fa fa-arrow-right"></i>');}
        });
      }
      if (isEmail($(em).val())) {isValidInput($(em));}else{inNotValidInput($(em))}
      if (isNotNull($(nm).val())) {isValidInput($(nm));}else{inNotValidInput($(nm))}
      if (isNotNull($(com).val())) {isValidInput($(com));}else{inNotValidInput($(com))}
    });
    var pr_tab_url = window.location.hash;
    $(".product-tabs > li > a").on("click",function(){window.location.hash = $(this).attr("href");});
    if (!$(".product-tabs > li > a[href='"+pr_tab_url+"']").parent("li").hasClass("active")) {
      $(".product-tabs > li > a[href='"+pr_tab_url+"']").parent("li").addClass("active").siblings().removeClass("active");
      $("#" + pr_tab_url.replace("#","")).addClass("in active").siblings().removeClass("in active")
    }
    const get_reviews = (view_page) => {
      $.ajax({
        url: '/get-review-list',
        type: 'GET',
        data:{prod_id:$("#prod_review_list").data("id"),view_page:view_page},
        success:function(data){
          let html = "", pgg = "";
          for (var i = 0; i < data.comments.length; i++) {
            let vl = data.comments[i],star = "",dt = new Date(vl['time']),dlt_btn = "";
            for (var k = 1; k <= 5; k++) {
              if (k > parseInt(vl['rating'])) {star += "<i class='fa fa-star-o empty'></i>";}else{star += "<i class='fa fa-star'></i>";}
            }
            dlt_btn = vl['owner'] == 1 ? "<a class='dlt_comment' data-id='"+vl['id']+"'><i class='fa fa-trash'></i></a>" : "";
            html += "<div class='single-review'><div class='review-heading'><div><a href='#'><i class='fa fa-user-o'></i> "+vl['name']+"</a></div><div><a href='#'><i class='fa fa-clock-o'></i> "+dt.toLocaleDateString() +"</a> "+dlt_btn+"</div><div class='review-rating pull-right'>"+star+"</div></div><div class='review-body'><p>"+vl['comment']+"</p></div></div>"
          }
          let str = "";
          for (var z = 1; z <= 5; z++) {if (z > data.rating) {str += "<i class='fa fa-star-o empty'></i>";}else{str += "<i class='fa fa-star'></i>";}}
          $("a[href='#reviews'] b").html(data.comments.length)
          $("#un_product_rating > .product-rating").html(str);
          if (data.count !== 0) {
            $("#rev_pg_pro").siblings("div").remove();
            $("#rev_pg_pro").before(html);
          }else{$(".no_review").css("display","");}
          if (data.count > 6) {
            for (var pg_index = 0; pg_index < Math.ceil(data.count/6); pg_index++) {
              let fr = ""; if (pg_index == (data.page - 1)) {fr = "class='active'"}
              pgg += "<li "+fr+" data-page='"+(pg_index + 1)+"'>"+(pg_index + 1)+"</li>";
            }
            $("#rev_pg_pro").html('<li><i class="fa fa-caret-left"></i></li>' + pgg +'<li><i class="fa fa-caret-right"></i></li>');
          }else{$(".no_review").css("display","none");}
        }
      });
    }
    $db.on("click",".dlt_comment",function(){
      $header;
      $.ajax({
        url: '/delete-comment',
        type: 'DELETE',
        data:{id:$(this).data("id")},
        success:function(t){
          notify(t.mess,"danger");
          if (ucheck("news/")) {
            get_news_comments(news_id,view_page);
          }else{
            get_reviews(view_page);
          }
        }
      });
    });
    if (!ucheck("news/")) {
      get_reviews(view_page);
    }
  }

  $("#image_input").change(function() {
    readURL(this);
  });
  $(".lg-out-btn").on("click",function(){
    event.preventDefault();
    document.getElementById('logout-form').submit();
  });

  let slideIndex = 0;
  const showSlides = function(n) {
    $(".mySlides:eq("+n+")").css("display","");
    $(".mySlides:not(:eq("+n+"))").css("display","none");
  }
  showSlides(slideIndex);
  $(".slideshow-container a.next,.slideshow-container a.prev").on("click",function(){
    if ($(this).hasClass("next")) {
      $(".slideshow-container a.prev").css("display","");
      if (slideIndex != $('.mySlides').length - 1) {
        slideIndex = slideIndex + 1;
        showSlides(slideIndex);
      }else{
        slideIndex = $('.mySlides').length - 1;
      }
    }
    if ($(this).hasClass("prev")) {
      $(".slideshow-container a.next").css("display","");
      if (slideIndex != 0) {
        slideIndex = slideIndex - 1;
        showSlides(slideIndex);
      }else{
        slideIndex = 0;
      }
    }
  });

  const pg_tabs_click = (i) => {
    window.location.hash = $(".pg-tabs:eq("+i+") > a").attr("href");
    let $t = $(".pg-tabs:eq("+i+") > a");
    if ($t.hasClass("active")) {
      $t.removeClass("active").siblings(".panel").css("display","none");
      $t.find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      // $t.parent().siblings(".pg-tabs").find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }else{
      $sbl = $t.parent().siblings(".pg-tabs");
      $t.addClass("active").siblings(".panel").css("display","block");
      $t.find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      $sbl.find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      $sbl.find(".accordion").removeClass("active")
      $sbl.find(".panel").css("display","none");
    }
  }
  for (var i = 0; i < $(".pg-tabs").length; i++) {
    if (window.location.hash === $(".pg-tabs:eq("+i+") > a").attr("href")) {
      pg_tabs_click(i);
      $(".pg-tabs:eq("+i+") > a").addClass("active");
      $(".pg-tabs:eq("+i+") > div").css("display","block");
    }
  }
  $(".pg-tabs a.accordion").on("click",function(){
    pg_tabs_click($(this).parent().index() - 1);
  });
  const cprt = document.getElementById("copyright_year");
  if(cprt){
      var dtt = new Date();
      var dtty = dtt.getFullYear();
      cprt.innerHTML = dtty;
  }

  $("#subscribe_button").on("click",function(){
    let email = "#subscribe_input";
    $header;
    if (isEmail($(email).val())) {
      $.ajax({
        url: '/subscribe',
        type: 'POST',
        data:{email: $(email).val()},
        success:function(t){
          notify(t.mess,"success");
          isValidInput($(email));$(email).val('');
        }
      });
    }else{
      inNotValidInput($(email))
    }
  });
  $db.on("click",".hc-news,.news-item,.product-single > img",function(){
    window.location.href = $(this).find("a").attr("href");
  });
  $("#un_product_rating > a").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 2000);
  });
  $(".pagination").css("width",$(".pagination .page-item").length * 33+"px");
  if (ucheck("contact-us")) {
    let cform = "#contact_form",
        cform_btn = cform + " a.cust-btn",
        btn_name = $(cform_btn).text(),
        btn_size = $(cform_btn).width(),
        em = "#email",nm = "#name",bd = "#body";
    $db.on("click",cform_btn,function(){
      if (isEmail($(em).val()) && isNotNull($(nm).val()) && isNotNull($(bd).val())) {
        $header;btn_spin(cform_btn,btn_size);
        $.ajax({
          url: '/send-message',
          type: 'POST',
          data:{name:$(nm).val(),email:$(em).val(),body:$(bd).val()},
          success:function(data){
            notify(data.success,"success");
            $(cform).find("textarea").val("");
            if (!$(cform).find("input").prop('disabled')) {$(cform).find("input").val("");}
            isValidInput($(cform + " textarea, " + cform + " input"));
          },complete:function(){
            $(cform_btn).html(btn_name);
          }
        });
      }else{
        if (isEmail($(em).val())) {isValidInput($(em));}else{inNotValidInput($(em))}
        if (isNotNull($(nm).val())) {isValidInput($(nm));}else{inNotValidInput($(nm))}
        if (isNotNull($(bd).val())) {isValidInput($(bd));}else{inNotValidInput($(bd))}
      }
    });
  }
  $("#order_product").on("click",function(){
    let ids = [
      "#order_type",
      "#product_id",
      "#name",
      "#email",
      "#surname",
      "#birthdate",
      "#gender",
      "#fathername",
      "#quantity",
      "#address",
      "#region",
      "#contact_number"
    ];
    let loan_id = $(ids[0]).val() ? $(ids[0]).val() : 0;
    $("#order_form div").css("display","none");
    $("#order_form").append("<img class='order-lding' src='/img/loading.gif'>");
    $header;
    $.ajax({
      url: '/order-product',
      type: 'POST',
      data:{
        loan_id:loan_id,product_id:$(ids[1]).val(),name:$(ids[2]).val(),
        email:$(ids[3]).val(),surname:$(ids[4]).val(),birthdate:$(ids[5]).val(),
        gender:$(ids[6]).val(),father_name:$(ids[7]).val(),quantity:$(ids[8]).val(),
        address:$(ids[9]).val(),city: $(ids[10]).val(),contact_number:$(ids[11]).val(),
      },
      success:function(t){
        $("#order_form img").attr('src','/img/confirmed.png').after("<p class='success-text'>"+t.mess+"</p>");
      },complete:function(){
      }
    });
  });
  // var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  const pc_tm = ".pro_countdown";
    var cntdown = setInterval(function() {
        for (var tm_index = 0; tm_index < $(pc_tm).length; tm_index++) {
          let tm = new Date($(pc_tm+":eq("+tm_index+")").data("date")).getTime();
          var now = new Date().getTime();
          var distance = tm - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          $(pc_tm+":eq("+tm_index+") li:eq(0) span").html(days + " D")
          $(pc_tm+":eq("+tm_index+") li:eq(1) span").html(hours + " H")
          $(pc_tm+":eq("+tm_index+") li:eq(2) span").html(minutes + " M")
          $(pc_tm+":eq("+tm_index+") li:eq(3) span").html(seconds + " S")
          if (distance < 0) {
            clearInterval(cntdown);
            $(pc_tm+":eq("+tm_index+")").parents(".deals_of_day").remove();
          }
        }
    }, 1000);
    if ($(".wish_head_list").length == 0) {
      $(".header-btns > .default-dropdown.scnd").css("margin-right","0");
    }
    $(".custom-menu li").on("click",function(){
      window.location.href = $(this).children("a").attr("href");
    });
    // $(".custom-menu").on("click",function(){
    //   console.log("clicked");
    // });
    // $(function() {
    //   $( "#birthdate" ).datetimepicker();
    // });
  // if(ucheck('not-found')){
  //   let e_a = ".error-page > p > a";
  //   let e_h = ".error-page > h2";
  //   let e_p = ".error-page > p";
  //   console.log($(e_h).width())
  //
  //   $(e_p).css("width",($(e_a).width()/$(e_h).width() * $(e_a).width()) + "px");
  // }
  // $(".brand-image").on("click",function(){
  //   window.location.href = $(this).children("img").data("href");
  // });
  $db.on("click",".product-thumb",function(){
    window.location.href = $(this).siblings("div").find("a").attr("href");
  });
  if ($(".deals_of_day_item").length > 0) {
    $(".deals_of_day_parent").removeAttr("style");
  }
});
