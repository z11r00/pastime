(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const f of l.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = t(a);
        fetch(a.href, l)
    }
}
)();
const nt = (r, o) => r === o
  , F = Symbol("solid-proxy")
  , ke = Symbol("solid-track")
  , ne = {
    equals: nt
};
let De = Re;
const M = 1
  , re = 2
  , Ge = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};
var T = null;
let pe = null
  , b = null
  , x = null
  , I = null
  , de = 0;
function rt(r, o) {
    const t = b
      , i = T
      , a = r.length === 0
      , l = o === void 0 ? i : o
      , f = a ? Ge : {
        owned: null,
        cleanups: null,
        context: l ? l.context : null,
        owner: l
    }
      , p = a ? r : () => r( () => H( () => _e(f)));
    T = f,
    b = null;
    try {
        return j(p, !0)
    } finally {
        b = t,
        T = i
    }
}
function D(r, o) {
    o = o ? Object.assign({}, ne, o) : ne;
    const t = {
        value: r,
        observers: null,
        observerSlots: null,
        comparator: o.equals || void 0
    }
      , i = a => (typeof a == "function" && (a = a(t.value)),
    Ne(t, a));
    return [Ve.bind(t), i]
}
function E(r, o, t) {
    const i = be(r, o, !1, M);
    z(i)
}
function Y(r, o, t) {
    De = ut;
    const i = be(r, o, !1, M)
      , a = Pe && at(Pe);
    a && (i.suspense = a),
    (!t || !t.render) && (i.user = !0),
    I ? I.push(i) : z(i)
}
function Oe(r, o, t) {
    t = t ? Object.assign({}, ne, t) : ne;
    const i = be(r, o, !0, 0);
    return i.observers = null,
    i.observerSlots = null,
    i.comparator = t.equals || void 0,
    z(i),
    Ve.bind(i)
}
function ot(r) {
    return j(r, !1)
}
function H(r) {
    if (b === null)
        return r();
    const o = b;
    b = null;
    try {
        return r()
    } finally {
        b = o
    }
}
function it(r) {
    Y( () => H(r))
}
function me() {
    return b
}
function at(r) {
    return T && T.context && T.context[r.id] !== void 0 ? T.context[r.id] : r.defaultValue
}
let Pe;
function Ve() {
    if (this.sources && this.state)
        if (this.state === M)
            z(this);
        else {
            const r = x;
            x = null,
            j( () => ie(this), !1),
            x = r
        }
    if (b) {
        const r = this.observers ? this.observers.length : 0;
        b.sources ? (b.sources.push(this),
        b.sourceSlots.push(r)) : (b.sources = [this],
        b.sourceSlots = [r]),
        this.observers ? (this.observers.push(b),
        this.observerSlots.push(b.sources.length - 1)) : (this.observers = [b],
        this.observerSlots = [b.sources.length - 1])
    }
    return this.value
}
function Ne(r, o, t) {
    let i = r.value;
    return (!r.comparator || !r.comparator(i, o)) && (r.value = o,
    r.observers && r.observers.length && j( () => {
        for (let a = 0; a < r.observers.length; a += 1) {
            const l = r.observers[a]
              , f = pe && pe.running;
            f && pe.disposed.has(l),
            (f ? !l.tState : !l.state) && (l.pure ? x.push(l) : I.push(l),
            l.observers && je(l)),
            f || (l.state = M)
        }
        if (x.length > 1e6)
            throw x = [],
            new Error
    }
    , !1)),
    o
}
function z(r) {
    if (!r.fn)
        return;
    _e(r);
    const o = T
      , t = b
      , i = de;
    b = T = r,
    st(r, r.value, i),
    b = t,
    T = o
}
function st(r, o, t) {
    let i;
    try {
        i = r.fn(o)
    } catch (a) {
        return r.pure && (r.state = M,
        r.owned && r.owned.forEach(_e),
        r.owned = null),
        r.updatedAt = t + 1,
        Xe(a)
    }
    (!r.updatedAt || r.updatedAt <= t) && (r.updatedAt != null && "observers"in r ? Ne(r, i) : r.value = i,
    r.updatedAt = t)
}
function be(r, o, t, i=M, a) {
    const l = {
        fn: r,
        state: i,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: o,
        owner: T,
        context: T ? T.context : null,
        pure: t
    };
    return T === null || T !== Ge && (T.owned ? T.owned.push(l) : T.owned = [l]),
    l
}
function oe(r) {
    if (r.state === 0)
        return;
    if (r.state === re)
        return ie(r);
    if (r.suspense && H(r.suspense.inFallback))
        return r.suspense.effects.push(r);
    const o = [r];
    for (; (r = r.owner) && (!r.updatedAt || r.updatedAt < de); )
        r.state && o.push(r);
    for (let t = o.length - 1; t >= 0; t--)
        if (r = o[t],
        r.state === M)
            z(r);
        else if (r.state === re) {
            const i = x;
            x = null,
            j( () => ie(r, o[0]), !1),
            x = i
        }
}
function j(r, o) {
    if (x)
        return r();
    let t = !1;
    o || (x = []),
    I ? t = !0 : I = [],
    de++;
    try {
        const i = r();
        return lt(t),
        i
    } catch (i) {
        t || (I = null),
        x = null,
        Xe(i)
    }
}
function lt(r) {
    if (x && (Re(x),
    x = null),
    r)
        return;
    const o = I;
    I = null,
    o.length && j( () => De(o), !1)
}
function Re(r) {
    for (let o = 0; o < r.length; o++)
        oe(r[o])
}
function ut(r) {
    let o, t = 0;
    for (o = 0; o < r.length; o++) {
        const i = r[o];
        i.user ? r[t++] = i : oe(i)
    }
    for (o = 0; o < t; o++)
        oe(r[o])
}
function ie(r, o) {
    r.state = 0;
    for (let t = 0; t < r.sources.length; t += 1) {
        const i = r.sources[t];
        if (i.sources) {
            const a = i.state;
            a === M ? i !== o && (!i.updatedAt || i.updatedAt < de) && oe(i) : a === re && ie(i, o)
        }
    }
}
function je(r) {
    for (let o = 0; o < r.observers.length; o += 1) {
        const t = r.observers[o];
        t.state || (t.state = re,
        t.pure ? x.push(t) : I.push(t),
        t.observers && je(t))
    }
}
function _e(r) {
    let o;
    if (r.sources)
        for (; r.sources.length; ) {
            const t = r.sources.pop()
              , i = r.sourceSlots.pop()
              , a = t.observers;
            if (a && a.length) {
                const l = a.pop()
                  , f = t.observerSlots.pop();
                i < a.length && (l.sourceSlots[f] = i,
                a[i] = l,
                t.observerSlots[i] = f)
            }
        }
    if (r.owned) {
        for (o = r.owned.length - 1; o >= 0; o--)
            _e(r.owned[o]);
        r.owned = null
    }
    if (r.cleanups) {
        for (o = r.cleanups.length - 1; o >= 0; o--)
            r.cleanups[o]();
        r.cleanups = null
    }
    r.state = 0
}
function ft(r) {
    return r instanceof Error ? r : new Error(typeof r == "string" ? r : "Unknown error",{
        cause: r
    })
}
function Xe(r, o=T) {
    throw ft(r)
}
function C(r, o) {
    return H( () => r(o || {}))
}
const ct = r => `Stale read from <${r}>.`;
function dt(r) {
    const o = r.keyed
      , t = Oe( () => r.when, void 0, {
        equals: (i, a) => o ? i === a : !i == !a
    });
    return Oe( () => {
        const i = t();
        if (i) {
            const a = r.children;
            return typeof a == "function" && a.length > 0 ? H( () => a(o ? i : () => {
                if (!H(t))
                    throw ct("Show");
                return r.when
            }
            )) : a
        }
        return r.fallback
    }
    , void 0, void 0)
}
function _t(r, o, t) {
    let i = t.length
      , a = o.length
      , l = i
      , f = 0
      , p = 0
      , h = o[a - 1].nextSibling
      , m = null;
    for (; f < a || p < l; ) {
        if (o[f] === t[p]) {
            f++,
            p++;
            continue
        }
        for (; o[a - 1] === t[l - 1]; )
            a--,
            l--;
        if (a === f) {
            const g = l < i ? p ? t[p - 1].nextSibling : t[l - p] : h;
            for (; p < l; )
                r.insertBefore(t[p++], g)
        } else if (l === p)
            for (; f < a; )
                (!m || !m.has(o[f])) && o[f].remove(),
                f++;
        else if (o[f] === t[l - 1] && t[p] === o[a - 1]) {
            const g = o[--a].nextSibling;
            r.insertBefore(t[p++], o[f++].nextSibling),
            r.insertBefore(t[--l], g),
            o[a] = t[l]
        } else {
            if (!m) {
                m = new Map;
                let e = p;
                for (; e < l; )
                    m.set(t[e], e++)
            }
            const g = m.get(o[f]);
            if (g != null)
                if (p < g && g < l) {
                    let e = f, n = 1, s;
                    for (; ++e < a && e < l && !((s = m.get(o[e])) == null || s !== g + n); )
                        n++;
                    if (n > g - p) {
                        const u = o[f];
                        for (; p < g; )
                            r.insertBefore(t[p++], u)
                    } else
                        r.replaceChild(t[p++], o[f++])
                } else
                    f++;
            else
                o[f++].remove()
        }
    }
}
const Ie = "_$DX_DELEGATE";
function pt(r, o, t, i={}) {
    let a;
    return rt(l => {
        a = l,
        o === document ? r() : k(o, r(), o.firstChild ? null : void 0, t)
    }
    , i.owner),
    () => {
        a(),
        o.textContent = ""
    }
}
function L(r, o, t) {
    let i;
    const a = () => {
        const f = document.createElement("template");
        return f.innerHTML = r,
        t ? f.content.firstChild.firstChild : f.content.firstChild
    }
      , l = o ? () => H( () => document.importNode(i || (i = a()), !0)) : () => (i || (i = a())).cloneNode(!0);
    return l.cloneNode = l,
    l
}
function X(r, o=window.document) {
    const t = o[Ie] || (o[Ie] = new Set);
    for (let i = 0, a = r.length; i < a; i++) {
        const l = r[i];
        t.has(l) || (t.add(l),
        o.addEventListener(l, ht))
    }
}
function Ce(r, o, t) {
    t == null ? r.removeAttribute(o) : r.setAttribute(o, t)
}
function Q(r, o) {
    o == null ? r.removeAttribute("class") : r.className = o
}
function ve(r, o, t, i) {
    if (i)
        Array.isArray(t) ? (r[`$$${o}`] = t[0],
        r[`$$${o}Data`] = t[1]) : r[`$$${o}`] = t;
    else if (Array.isArray(t)) {
        const a = t[0];
        r.addEventListener(o, t[0] = l => a.call(r, t[1], l))
    } else
        r.addEventListener(o, t)
}
function Le(r, o, t) {
    return H( () => r(o, t))
}
function k(r, o, t, i) {
    if (t !== void 0 && !i && (i = []),
    typeof o != "function")
        return ae(r, o, i, t);
    E(a => ae(r, o(), a, t), i)
}
function ht(r) {
    const o = `$$${r.type}`;
    let t = r.composedPath && r.composedPath()[0] || r.target;
    for (r.target !== t && Object.defineProperty(r, "target", {
        configurable: !0,
        value: t
    }),
    Object.defineProperty(r, "currentTarget", {
        configurable: !0,
        get() {
            return t || document
        }
    }); t; ) {
        const i = t[o];
        if (i && !t.disabled) {
            const a = t[`${o}Data`];
            if (a !== void 0 ? i.call(t, a, r) : i.call(t, r),
            r.cancelBubble)
                return
        }
        t = t._$host || t.parentNode || t.host
    }
}
function ae(r, o, t, i, a) {
    for (; typeof t == "function"; )
        t = t();
    if (o === t)
        return t;
    const l = typeof o
      , f = i !== void 0;
    if (r = f && t[0] && t[0].parentNode || r,
    l === "string" || l === "number")
        if (l === "number" && (o = o.toString()),
        f) {
            let p = t[0];
            p && p.nodeType === 3 ? p.data = o : p = document.createTextNode(o),
            t = N(r, t, i, p)
        } else
            t !== "" && typeof t == "string" ? t = r.firstChild.data = o : t = r.textContent = o;
    else if (o == null || l === "boolean")
        t = N(r, t, i);
    else {
        if (l === "function")
            return E( () => {
                let p = o();
                for (; typeof p == "function"; )
                    p = p();
                t = ae(r, p, t, i)
            }
            ),
            () => t;
        if (Array.isArray(o)) {
            const p = []
              , h = t && Array.isArray(t);
            if (ge(p, o, t, a))
                return E( () => t = ae(r, p, t, i, !0)),
                () => t;
            if (p.length === 0) {
                if (t = N(r, t, i),
                f)
                    return t
            } else
                h ? t.length === 0 ? Ee(r, p, i) : _t(r, t, p) : (t && N(r),
                Ee(r, p));
            t = p
        } else if (o.nodeType) {
            if (Array.isArray(t)) {
                if (f)
                    return t = N(r, t, i, o);
                N(r, t, null, o)
            } else
                t == null || t === "" || !r.firstChild ? r.appendChild(o) : r.replaceChild(o, r.firstChild);
            t = o
        } else
            console.warn("Unrecognized value. Skipped inserting", o)
    }
    return t
}
function ge(r, o, t, i) {
    let a = !1;
    for (let l = 0, f = o.length; l < f; l++) {
        let p = o[l], h = t && t[l], m;
        if (!(p == null || p === !0 || p === !1))
            if ((m = typeof p) == "object" && p.nodeType)
                r.push(p);
            else if (Array.isArray(p))
                a = ge(r, p, h) || a;
            else if (m === "function")
                if (i) {
                    for (; typeof p == "function"; )
                        p = p();
                    a = ge(r, Array.isArray(p) ? p : [p], Array.isArray(h) ? h : [h]) || a
                } else
                    r.push(p),
                    a = !0;
            else {
                const g = String(p);
                h && h.nodeType === 3 && h.data === g ? r.push(h) : r.push(document.createTextNode(g))
            }
    }
    return a
}
function Ee(r, o, t=null) {
    for (let i = 0, a = o.length; i < a; i++)
        r.insertBefore(o[i], t)
}
function N(r, o, t, i) {
    if (t === void 0)
        return r.textContent = "";
    const a = i || document.createTextNode("");
    if (o.length) {
        let l = !1;
        for (let f = o.length - 1; f >= 0; f--) {
            const p = o[f];
            if (a !== p) {
                const h = p.parentNode === r;
                !l && !f ? h ? r.replaceChild(a, p) : r.insertBefore(a, t) : h && p.remove()
            } else
                l = !0
        }
    } else
        r.insertBefore(a, t);
    return [a]
}
const mt = "_code_8awfp_3"
  , he = {
    code: mt
}
  , vt = "./assets/WoodenFish-5862279a.svg"
  , qe = {
    volume: 30,
    sound: 0,
    count: 0,
    isCount: !0
};
function gt() {
    localStorage.setItem("config", JSON.stringify(qe))
}
function Te() {
    return localStorage.getItem("config") || gt(),
    {
        ...qe,
        ...JSON.parse(localStorage.getItem("config") || "{}")
    }
}
function yt(r, o) {
    localStorage.setItem("config", JSON.stringify({
        ...Te(),
        [r]: o
    }))
}
const ye = Symbol("store-raw")
  , R = Symbol("store-node")
  , P = Symbol("store-has")
  , We = Symbol("store-self");
function Qe(r) {
    let o = r[F];
    if (!o && (Object.defineProperty(r, F, {
        value: o = new Proxy(r,bt)
    }),
    !Array.isArray(r))) {
        const t = Object.keys(r)
          , i = Object.getOwnPropertyDescriptors(r);
        for (let a = 0, l = t.length; a < l; a++) {
            const f = t[a];
            i[f].get && Object.defineProperty(r, f, {
                enumerable: i[f].enumerable,
                get: i[f].get.bind(o)
            })
        }
    }
    return o
}
function se(r) {
    let o;
    return r != null && typeof r == "object" && (r[F] || !(o = Object.getPrototypeOf(r)) || o === Object.prototype || Array.isArray(r))
}
function Z(r, o=new Set) {
    let t, i, a, l;
    if (t = r != null && r[ye])
        return t;
    if (!se(r) || o.has(r))
        return r;
    if (Array.isArray(r)) {
        Object.isFrozen(r) ? r = r.slice(0) : o.add(r);
        for (let f = 0, p = r.length; f < p; f++)
            a = r[f],
            (i = Z(a, o)) !== a && (r[f] = i)
    } else {
        Object.isFrozen(r) ? r = Object.assign({}, r) : o.add(r);
        const f = Object.keys(r)
          , p = Object.getOwnPropertyDescriptors(r);
        for (let h = 0, m = f.length; h < m; h++)
            l = f[h],
            !p[l].get && (a = r[l],
            (i = Z(a, o)) !== a && (r[l] = i))
    }
    return r
}
function le(r, o) {
    let t = r[o];
    return t || Object.defineProperty(r, o, {
        value: t = Object.create(null)
    }),
    t
}
function U(r, o, t) {
    if (r[o])
        return r[o];
    const [i,a] = D(t, {
        equals: !1,
        internal: !0
    });
    return i.$ = a,
    r[o] = i
}
function wt(r, o) {
    const t = Reflect.getOwnPropertyDescriptor(r, o);
    return !t || t.get || !t.configurable || o === F || o === R || (delete t.value,
    delete t.writable,
    t.get = () => r[F][o]),
    t
}
function Ye(r) {
    me() && U(le(r, R), We)()
}
function At(r) {
    return Ye(r),
    Reflect.ownKeys(r)
}
const bt = {
    get(r, o, t) {
        if (o === ye)
            return r;
        if (o === F)
            return t;
        if (o === ke)
            return Ye(r),
            t;
        const i = le(r, R)
          , a = i[o];
        let l = a ? a() : r[o];
        if (o === R || o === P || o === "__proto__")
            return l;
        if (!a) {
            const f = Object.getOwnPropertyDescriptor(r, o);
            me() && (typeof l != "function" || r.hasOwnProperty(o)) && !(f && f.get) && (l = U(i, o, l)())
        }
        return se(l) ? Qe(l) : l
    },
    has(r, o) {
        return o === ye || o === F || o === ke || o === R || o === P || o === "__proto__" ? !0 : (me() && U(le(r, P), o)(),
        o in r)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys: At,
    getOwnPropertyDescriptor: wt
};
function ue(r, o, t, i=!1) {
    if (!i && r[o] === t)
        return;
    const a = r[o]
      , l = r.length;
    t === void 0 ? (delete r[o],
    r[P] && r[P][o] && a !== void 0 && r[P][o].$()) : (r[o] = t,
    r[P] && r[P][o] && a === void 0 && r[P][o].$());
    let f = le(r, R), p;
    if ((p = U(f, o, a)) && p.$( () => t),
    Array.isArray(r) && r.length !== l) {
        for (let h = r.length; h < l; h++)
            (p = f[h]) && p.$();
        (p = U(f, "length", l)) && p.$(r.length)
    }
    (p = f[We]) && p.$()
}
function Ze(r, o) {
    const t = Object.keys(o);
    for (let i = 0; i < t.length; i += 1) {
        const a = t[i];
        ue(r, a, o[a])
    }
}
function Tt(r, o) {
    if (typeof o == "function" && (o = o(r)),
    o = Z(o),
    Array.isArray(o)) {
        if (r === o)
            return;
        let t = 0
          , i = o.length;
        for (; t < i; t++) {
            const a = o[t];
            r[t] !== a && ue(r, t, a)
        }
        ue(r, "length", i)
    } else
        Ze(r, o)
}
function W(r, o, t=[]) {
    let i, a = r;
    if (o.length > 1) {
        i = o.shift();
        const f = typeof i
          , p = Array.isArray(r);
        if (Array.isArray(i)) {
            for (let h = 0; h < i.length; h++)
                W(r, [i[h]].concat(o), t);
            return
        } else if (p && f === "function") {
            for (let h = 0; h < r.length; h++)
                i(r[h], h) && W(r, [h].concat(o), t);
            return
        } else if (p && f === "object") {
            const {from: h=0, to: m=r.length - 1, by: g=1} = i;
            for (let e = h; e <= m; e += g)
                W(r, [e].concat(o), t);
            return
        } else if (o.length > 1) {
            W(r[i], o, [i].concat(t));
            return
        }
        a = r[i],
        t = [i].concat(t)
    }
    let l = o[0];
    typeof l == "function" && (l = l(a, t),
    l === a) || i === void 0 && l == null || (l = Z(l),
    i === void 0 || se(a) && se(l) && !Array.isArray(l) ? Ze(a, l) : ue(r, i, l))
}
function xt(...[r,o]) {
    const t = Z(r || {})
      , i = Array.isArray(t)
      , a = Qe(t);
    function l(...f) {
        ot( () => {
            i && f.length === 1 ? Tt(t, f[0]) : W(t, f)
        }
        )
    }
    return [a, l]
}
const [fe,St] = D(Te())
  , [$t,kt] = D(Ue(fe()));
function Ue(r) {
    const o = Object.keys(r)
      , i = o.filter(a => a.includes("is")).filter(a => !r[a]).map(a => a.substring(2).replace(/^\S/, l => l.toLowerCase()));
    return o.filter(a => !i.includes(a))
}
const [$,K] = xt({
    ...fe()
});
Y( () => {
    $t().forEach(r => {
        yt(r, $[r]),
        r.includes("is") && $[r] !== fe()[r] && (St(Te()),
        kt(Ue(fe())))
    }
    )
}
);
var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , ce = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(r) {
    (function() {
        var o = function() {
            this.init()
        };
        o.prototype = {
            init: function() {
                var e = this || t;
                return e._counter = 1e3,
                e._html5AudioPool = [],
                e.html5PoolSize = 10,
                e._codecs = {},
                e._howls = [],
                e._muted = !1,
                e._volume = 1,
                e._canPlayEvent = "canplaythrough",
                e._navigator = typeof window < "u" && window.navigator ? window.navigator : null,
                e.masterGain = null,
                e.noAudio = !1,
                e.usingWebAudio = !0,
                e.autoSuspend = !0,
                e.ctx = null,
                e.autoUnlock = !0,
                e._setup(),
                e
            },
            volume: function(e) {
                var n = this || t;
                if (e = parseFloat(e),
                n.ctx || g(),
                typeof e < "u" && e >= 0 && e <= 1) {
                    if (n._volume = e,
                    n._muted)
                        return n;
                    n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, t.ctx.currentTime);
                    for (var s = 0; s < n._howls.length; s++)
                        if (!n._howls[s]._webAudio)
                            for (var u = n._howls[s]._getSoundIds(), d = 0; d < u.length; d++) {
                                var _ = n._howls[s]._soundById(u[d]);
                                _ && _._node && (_._node.volume = _._volume * e)
                            }
                    return n
                }
                return n._volume
            },
            mute: function(e) {
                var n = this || t;
                n.ctx || g(),
                n._muted = e,
                n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, t.ctx.currentTime);
                for (var s = 0; s < n._howls.length; s++)
                    if (!n._howls[s]._webAudio)
                        for (var u = n._howls[s]._getSoundIds(), d = 0; d < u.length; d++) {
                            var _ = n._howls[s]._soundById(u[d]);
                            _ && _._node && (_._node.muted = e ? !0 : _._muted)
                        }
                return n
            },
            stop: function() {
                for (var e = this || t, n = 0; n < e._howls.length; n++)
                    e._howls[n].stop();
                return e
            },
            unload: function() {
                for (var e = this || t, n = e._howls.length - 1; n >= 0; n--)
                    e._howls[n].unload();
                return e.usingWebAudio && e.ctx && typeof e.ctx.close < "u" && (e.ctx.close(),
                e.ctx = null,
                g()),
                e
            },
            codecs: function(e) {
                return (this || t)._codecs[e.replace(/^x-/, "")]
            },
            _setup: function() {
                var e = this || t;
                if (e.state = e.ctx && e.ctx.state || "suspended",
                e._autoSuspend(),
                !e.usingWebAudio)
                    if (typeof Audio < "u")
                        try {
                            var n = new Audio;
                            typeof n.oncanplaythrough > "u" && (e._canPlayEvent = "canplay")
                        } catch {
                            e.noAudio = !0
                        }
                    else
                        e.noAudio = !0;
                try {
                    var n = new Audio;
                    n.muted && (e.noAudio = !0)
                } catch {}
                return e.noAudio || e._setupCodecs(),
                e
            },
            _setupCodecs: function() {
                var e = this || t
                  , n = null;
                try {
                    n = typeof Audio < "u" ? new Audio : null
                } catch {
                    return e
                }
                if (!n || typeof n.canPlayType != "function")
                    return e;
                var s = n.canPlayType("audio/mpeg;").replace(/^no$/, "")
                  , u = e._navigator ? e._navigator.userAgent : ""
                  , d = u.match(/OPR\/([0-6].)/g)
                  , _ = d && parseInt(d[0].split("/")[1], 10) < 33
                  , c = u.indexOf("Safari") !== -1 && u.indexOf("Chrome") === -1
                  , v = u.match(/Version\/(.*?) /)
                  , y = c && v && parseInt(v[1], 10) < 15;
                return e._codecs = {
                    mp3: !!(!_ && (s || n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!s,
                    opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(n.canPlayType("audio/x-m4b;") || n.canPlayType("audio/m4b;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!y && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!y && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
                },
                e
            },
            _unlockAudio: function() {
                var e = this || t;
                if (!(e._audioUnlocked || !e.ctx)) {
                    e._audioUnlocked = !1,
                    e.autoUnlock = !1,
                    !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0,
                    e.unload()),
                    e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    var n = function(s) {
                        for (; e._html5AudioPool.length < e.html5PoolSize; )
                            try {
                                var u = new Audio;
                                u._unlocked = !0,
                                e._releaseHtml5Audio(u)
                            } catch {
                                e.noAudio = !0;
                                break
                            }
                        for (var d = 0; d < e._howls.length; d++)
                            if (!e._howls[d]._webAudio)
                                for (var _ = e._howls[d]._getSoundIds(), c = 0; c < _.length; c++) {
                                    var v = e._howls[d]._soundById(_[c]);
                                    v && v._node && !v._node._unlocked && (v._node._unlocked = !0,
                                    v._node.load())
                                }
                        e._autoResume();
                        var y = e.ctx.createBufferSource();
                        y.buffer = e._scratchBuffer,
                        y.connect(e.ctx.destination),
                        typeof y.start > "u" ? y.noteOn(0) : y.start(0),
                        typeof e.ctx.resume == "function" && e.ctx.resume(),
                        y.onended = function() {
                            y.disconnect(0),
                            e._audioUnlocked = !0,
                            document.removeEventListener("touchstart", n, !0),
                            document.removeEventListener("touchend", n, !0),
                            document.removeEventListener("click", n, !0),
                            document.removeEventListener("keydown", n, !0);
                            for (var w = 0; w < e._howls.length; w++)
                                e._howls[w]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", n, !0),
                    document.addEventListener("touchend", n, !0),
                    document.addEventListener("click", n, !0),
                    document.addEventListener("keydown", n, !0),
                    e
                }
            },
            _obtainHtml5Audio: function() {
                var e = this || t;
                if (e._html5AudioPool.length)
                    return e._html5AudioPool.pop();
                var n = new Audio().play();
                return n && typeof Promise < "u" && (n instanceof Promise || typeof n.then == "function") && n.catch(function() {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }),
                new Audio
            },
            _releaseHtml5Audio: function(e) {
                var n = this || t;
                return e._unlocked && n._html5AudioPool.push(e),
                n
            },
            _autoSuspend: function() {
                var e = this;
                if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !t.usingWebAudio)) {
                    for (var n = 0; n < e._howls.length; n++)
                        if (e._howls[n]._webAudio) {
                            for (var s = 0; s < e._howls[n]._sounds.length; s++)
                                if (!e._howls[n]._sounds[s]._paused)
                                    return e
                        }
                    return e._suspendTimer && clearTimeout(e._suspendTimer),
                    e._suspendTimer = setTimeout(function() {
                        if (e.autoSuspend) {
                            e._suspendTimer = null,
                            e.state = "suspending";
                            var u = function() {
                                e.state = "suspended",
                                e._resumeAfterSuspend && (delete e._resumeAfterSuspend,
                                e._autoResume())
                            };
                            e.ctx.suspend().then(u, u)
                        }
                    }, 3e4),
                    e
                }
            },
            _autoResume: function() {
                var e = this;
                if (!(!e.ctx || typeof e.ctx.resume > "u" || !t.usingWebAudio))
                    return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer),
                    e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function() {
                        e.state = "running";
                        for (var n = 0; n < e._howls.length; n++)
                            e._howls[n]._emit("resume")
                    }),
                    e._suspendTimer && (clearTimeout(e._suspendTimer),
                    e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0),
                    e
            }
        };
        var t = new o
          , i = function(e) {
            var n = this;
            if (!e.src || e.src.length === 0) {
                console.error("An array of source files must be passed with any new Howl.");
                return
            }
            n.init(e)
        };
        i.prototype = {
            init: function(e) {
                var n = this;
                return t.ctx || g(),
                n._autoplay = e.autoplay || !1,
                n._format = typeof e.format != "string" ? e.format : [e.format],
                n._html5 = e.html5 || !1,
                n._muted = e.mute || !1,
                n._loop = e.loop || !1,
                n._pool = e.pool || 5,
                n._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0,
                n._rate = e.rate || 1,
                n._sprite = e.sprite || {},
                n._src = typeof e.src != "string" ? e.src : [e.src],
                n._volume = e.volume !== void 0 ? e.volume : 1,
                n._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
                },
                n._duration = 0,
                n._state = "unloaded",
                n._sounds = [],
                n._endTimers = {},
                n._queue = [],
                n._playLock = !1,
                n._onend = e.onend ? [{
                    fn: e.onend
                }] : [],
                n._onfade = e.onfade ? [{
                    fn: e.onfade
                }] : [],
                n._onload = e.onload ? [{
                    fn: e.onload
                }] : [],
                n._onloaderror = e.onloaderror ? [{
                    fn: e.onloaderror
                }] : [],
                n._onplayerror = e.onplayerror ? [{
                    fn: e.onplayerror
                }] : [],
                n._onpause = e.onpause ? [{
                    fn: e.onpause
                }] : [],
                n._onplay = e.onplay ? [{
                    fn: e.onplay
                }] : [],
                n._onstop = e.onstop ? [{
                    fn: e.onstop
                }] : [],
                n._onmute = e.onmute ? [{
                    fn: e.onmute
                }] : [],
                n._onvolume = e.onvolume ? [{
                    fn: e.onvolume
                }] : [],
                n._onrate = e.onrate ? [{
                    fn: e.onrate
                }] : [],
                n._onseek = e.onseek ? [{
                    fn: e.onseek
                }] : [],
                n._onunlock = e.onunlock ? [{
                    fn: e.onunlock
                }] : [],
                n._onresume = [],
                n._webAudio = t.usingWebAudio && !n._html5,
                typeof t.ctx < "u" && t.ctx && t.autoUnlock && t._unlockAudio(),
                t._howls.push(n),
                n._autoplay && n._queue.push({
                    event: "play",
                    action: function() {
                        n.play()
                    }
                }),
                n._preload && n._preload !== "none" && n.load(),
                n
            },
            load: function() {
                var e = this
                  , n = null;
                if (t.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof e._src == "string" && (e._src = [e._src]);
                for (var s = 0; s < e._src.length; s++) {
                    var u, d;
                    if (e._format && e._format[s])
                        u = e._format[s];
                    else {
                        if (d = e._src[s],
                        typeof d != "string") {
                            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        u = /^data:audio\/([^;,]+);/i.exec(d),
                        u || (u = /\.([^.]+)$/.exec(d.split("?", 1)[0])),
                        u && (u = u[1].toLowerCase())
                    }
                    if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),
                    u && t.codecs(u)) {
                        n = e._src[s];
                        break
                    }
                }
                if (!n) {
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return e._src = n,
                e._state = "loading",
                window.location.protocol === "https:" && n.slice(0, 5) === "http:" && (e._html5 = !0,
                e._webAudio = !1),
                new a(e),
                e._webAudio && f(e),
                e
            },
            play: function(e, n) {
                var s = this
                  , u = null;
                if (typeof e == "number")
                    u = e,
                    e = null;
                else {
                    if (typeof e == "string" && s._state === "loaded" && !s._sprite[e])
                        return null;
                    if (typeof e > "u" && (e = "__default",
                    !s._playLock)) {
                        for (var d = 0, _ = 0; _ < s._sounds.length; _++)
                            s._sounds[_]._paused && !s._sounds[_]._ended && (d++,
                            u = s._sounds[_]._id);
                        d === 1 ? e = null : u = null
                    }
                }
                var c = u ? s._soundById(u) : s._inactiveSound();
                if (!c)
                    return null;
                if (u && !e && (e = c._sprite || "__default"),
                s._state !== "loaded") {
                    c._sprite = e,
                    c._ended = !1;
                    var v = c._id;
                    return s._queue.push({
                        event: "play",
                        action: function() {
                            s.play(v)
                        }
                    }),
                    v
                }
                if (u && !c._paused)
                    return n || s._loadQueue("play"),
                    c._id;
                s._webAudio && t._autoResume();
                var y = Math.max(0, c._seek > 0 ? c._seek : s._sprite[e][0] / 1e3)
                  , w = Math.max(0, (s._sprite[e][0] + s._sprite[e][1]) / 1e3 - y)
                  , S = w * 1e3 / Math.abs(c._rate)
                  , O = s._sprite[e][0] / 1e3
                  , B = (s._sprite[e][0] + s._sprite[e][1]) / 1e3;
                c._sprite = e,
                c._ended = !1;
                var G = function() {
                    c._paused = !1,
                    c._seek = y,
                    c._start = O,
                    c._stop = B,
                    c._loop = !!(c._loop || s._sprite[e][2])
                };
                if (y >= B) {
                    s._ended(c);
                    return
                }
                var A = c._node;
                if (s._webAudio) {
                    var xe = function() {
                        s._playLock = !1,
                        G(),
                        s._refreshBuffer(c);
                        var V = c._muted || s._muted ? 0 : c._volume;
                        A.gain.setValueAtTime(V, t.ctx.currentTime),
                        c._playStart = t.ctx.currentTime,
                        typeof A.bufferSource.start > "u" ? c._loop ? A.bufferSource.noteGrainOn(0, y, 86400) : A.bufferSource.noteGrainOn(0, y, w) : c._loop ? A.bufferSource.start(0, y, 86400) : A.bufferSource.start(0, y, w),
                        S !== 1 / 0 && (s._endTimers[c._id] = setTimeout(s._ended.bind(s, c), S)),
                        n || setTimeout(function() {
                            s._emit("play", c._id),
                            s._loadQueue()
                        }, 0)
                    };
                    t.state === "running" && t.ctx.state !== "interrupted" ? xe() : (s._playLock = !0,
                    s.once("resume", xe),
                    s._clearTimer(c._id))
                } else {
                    var Se = function() {
                        A.currentTime = y,
                        A.muted = c._muted || s._muted || t._muted || A.muted,
                        A.volume = c._volume * t.volume(),
                        A.playbackRate = c._rate;
                        try {
                            var V = A.play();
                            if (V && typeof Promise < "u" && (V instanceof Promise || typeof V.then == "function") ? (s._playLock = !0,
                            G(),
                            V.then(function() {
                                s._playLock = !1,
                                A._unlocked = !0,
                                n ? s._loadQueue() : s._emit("play", c._id)
                            }).catch(function() {
                                s._playLock = !1,
                                s._emit("playerror", c._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                c._ended = !0,
                                c._paused = !0
                            })) : n || (s._playLock = !1,
                            G(),
                            s._emit("play", c._id)),
                            A.playbackRate = c._rate,
                            A.paused) {
                                s._emit("playerror", c._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            e !== "__default" || c._loop ? s._endTimers[c._id] = setTimeout(s._ended.bind(s, c), S) : (s._endTimers[c._id] = function() {
                                s._ended(c),
                                A.removeEventListener("ended", s._endTimers[c._id], !1)
                            }
                            ,
                            A.addEventListener("ended", s._endTimers[c._id], !1))
                        } catch (tt) {
                            s._emit("playerror", c._id, tt)
                        }
                    };
                    A.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (A.src = s._src,
                    A.load());
                    var et = window && window.ejecta || !A.readyState && t._navigator.isCocoonJS;
                    if (A.readyState >= 3 || et)
                        Se();
                    else {
                        s._playLock = !0,
                        s._state = "loading";
                        var $e = function() {
                            s._state = "loaded",
                            Se(),
                            A.removeEventListener(t._canPlayEvent, $e, !1)
                        };
                        A.addEventListener(t._canPlayEvent, $e, !1),
                        s._clearTimer(c._id)
                    }
                }
                return c._id
            },
            pause: function(e) {
                var n = this;
                if (n._state !== "loaded" || n._playLock)
                    return n._queue.push({
                        event: "pause",
                        action: function() {
                            n.pause(e)
                        }
                    }),
                    n;
                for (var s = n._getSoundIds(e), u = 0; u < s.length; u++) {
                    n._clearTimer(s[u]);
                    var d = n._soundById(s[u]);
                    if (d && !d._paused && (d._seek = n.seek(s[u]),
                    d._rateSeek = 0,
                    d._paused = !0,
                    n._stopFade(s[u]),
                    d._node))
                        if (n._webAudio) {
                            if (!d._node.bufferSource)
                                continue;
                            typeof d._node.bufferSource.stop > "u" ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0),
                            n._cleanBuffer(d._node)
                        } else
                            (!isNaN(d._node.duration) || d._node.duration === 1 / 0) && d._node.pause();
                    arguments[1] || n._emit("pause", d ? d._id : null)
                }
                return n
            },
            stop: function(e, n) {
                var s = this;
                if (s._state !== "loaded" || s._playLock)
                    return s._queue.push({
                        event: "stop",
                        action: function() {
                            s.stop(e)
                        }
                    }),
                    s;
                for (var u = s._getSoundIds(e), d = 0; d < u.length; d++) {
                    s._clearTimer(u[d]);
                    var _ = s._soundById(u[d]);
                    _ && (_._seek = _._start || 0,
                    _._rateSeek = 0,
                    _._paused = !0,
                    _._ended = !0,
                    s._stopFade(u[d]),
                    _._node && (s._webAudio ? _._node.bufferSource && (typeof _._node.bufferSource.stop > "u" ? _._node.bufferSource.noteOff(0) : _._node.bufferSource.stop(0),
                    s._cleanBuffer(_._node)) : (!isNaN(_._node.duration) || _._node.duration === 1 / 0) && (_._node.currentTime = _._start || 0,
                    _._node.pause(),
                    _._node.duration === 1 / 0 && s._clearSound(_._node))),
                    n || s._emit("stop", _._id))
                }
                return s
            },
            mute: function(e, n) {
                var s = this;
                if (s._state !== "loaded" || s._playLock)
                    return s._queue.push({
                        event: "mute",
                        action: function() {
                            s.mute(e, n)
                        }
                    }),
                    s;
                if (typeof n > "u")
                    if (typeof e == "boolean")
                        s._muted = e;
                    else
                        return s._muted;
                for (var u = s._getSoundIds(n), d = 0; d < u.length; d++) {
                    var _ = s._soundById(u[d]);
                    _ && (_._muted = e,
                    _._interval && s._stopFade(_._id),
                    s._webAudio && _._node ? _._node.gain.setValueAtTime(e ? 0 : _._volume, t.ctx.currentTime) : _._node && (_._node.muted = t._muted ? !0 : e),
                    s._emit("mute", _._id))
                }
                return s
            },
            volume: function() {
                var e = this, n = arguments, s, u;
                if (n.length === 0)
                    return e._volume;
                if (n.length === 1 || n.length === 2 && typeof n[1] > "u") {
                    var d = e._getSoundIds()
                      , _ = d.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : s = parseFloat(n[0])
                } else
                    n.length >= 2 && (s = parseFloat(n[0]),
                    u = parseInt(n[1], 10));
                var c;
                if (typeof s < "u" && s >= 0 && s <= 1) {
                    if (e._state !== "loaded" || e._playLock)
                        return e._queue.push({
                            event: "volume",
                            action: function() {
                                e.volume.apply(e, n)
                            }
                        }),
                        e;
                    typeof u > "u" && (e._volume = s),
                    u = e._getSoundIds(u);
                    for (var v = 0; v < u.length; v++)
                        c = e._soundById(u[v]),
                        c && (c._volume = s,
                        n[2] || e._stopFade(u[v]),
                        e._webAudio && c._node && !c._muted ? c._node.gain.setValueAtTime(s, t.ctx.currentTime) : c._node && !c._muted && (c._node.volume = s * t.volume()),
                        e._emit("volume", c._id))
                } else
                    return c = u ? e._soundById(u) : e._sounds[0],
                    c ? c._volume : 0;
                return e
            },
            fade: function(e, n, s, u) {
                var d = this;
                if (d._state !== "loaded" || d._playLock)
                    return d._queue.push({
                        event: "fade",
                        action: function() {
                            d.fade(e, n, s, u)
                        }
                    }),
                    d;
                e = Math.min(Math.max(0, parseFloat(e)), 1),
                n = Math.min(Math.max(0, parseFloat(n)), 1),
                s = parseFloat(s),
                d.volume(e, u);
                for (var _ = d._getSoundIds(u), c = 0; c < _.length; c++) {
                    var v = d._soundById(_[c]);
                    if (v) {
                        if (u || d._stopFade(_[c]),
                        d._webAudio && !v._muted) {
                            var y = t.ctx.currentTime
                              , w = y + s / 1e3;
                            v._volume = e,
                            v._node.gain.setValueAtTime(e, y),
                            v._node.gain.linearRampToValueAtTime(n, w)
                        }
                        d._startFadeInterval(v, e, n, s, _[c], typeof u > "u")
                    }
                }
                return d
            },
            _startFadeInterval: function(e, n, s, u, d, _) {
                var c = this
                  , v = n
                  , y = s - n
                  , w = Math.abs(y / .01)
                  , S = Math.max(4, w > 0 ? u / w : u)
                  , O = Date.now();
                e._fadeTo = s,
                e._interval = setInterval(function() {
                    var B = (Date.now() - O) / u;
                    O = Date.now(),
                    v += y * B,
                    v = Math.round(v * 100) / 100,
                    y < 0 ? v = Math.max(s, v) : v = Math.min(s, v),
                    c._webAudio ? e._volume = v : c.volume(v, e._id, !0),
                    _ && (c._volume = v),
                    (s < n && v <= s || s > n && v >= s) && (clearInterval(e._interval),
                    e._interval = null,
                    e._fadeTo = null,
                    c.volume(s, e._id),
                    c._emit("fade", e._id))
                }, S)
            },
            _stopFade: function(e) {
                var n = this
                  , s = n._soundById(e);
                return s && s._interval && (n._webAudio && s._node.gain.cancelScheduledValues(t.ctx.currentTime),
                clearInterval(s._interval),
                s._interval = null,
                n.volume(s._fadeTo, e),
                s._fadeTo = null,
                n._emit("fade", e)),
                n
            },
            loop: function() {
                var e = this, n = arguments, s, u, d;
                if (n.length === 0)
                    return e._loop;
                if (n.length === 1)
                    if (typeof n[0] == "boolean")
                        s = n[0],
                        e._loop = s;
                    else
                        return d = e._soundById(parseInt(n[0], 10)),
                        d ? d._loop : !1;
                else
                    n.length === 2 && (s = n[0],
                    u = parseInt(n[1], 10));
                for (var _ = e._getSoundIds(u), c = 0; c < _.length; c++)
                    d = e._soundById(_[c]),
                    d && (d._loop = s,
                    e._webAudio && d._node && d._node.bufferSource && (d._node.bufferSource.loop = s,
                    s && (d._node.bufferSource.loopStart = d._start || 0,
                    d._node.bufferSource.loopEnd = d._stop,
                    e.playing(_[c]) && (e.pause(_[c], !0),
                    e.play(_[c], !0)))));
                return e
            },
            rate: function() {
                var e = this, n = arguments, s, u;
                if (n.length === 0)
                    u = e._sounds[0]._id;
                else if (n.length === 1) {
                    var d = e._getSoundIds()
                      , _ = d.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : s = parseFloat(n[0])
                } else
                    n.length === 2 && (s = parseFloat(n[0]),
                    u = parseInt(n[1], 10));
                var c;
                if (typeof s == "number") {
                    if (e._state !== "loaded" || e._playLock)
                        return e._queue.push({
                            event: "rate",
                            action: function() {
                                e.rate.apply(e, n)
                            }
                        }),
                        e;
                    typeof u > "u" && (e._rate = s),
                    u = e._getSoundIds(u);
                    for (var v = 0; v < u.length; v++)
                        if (c = e._soundById(u[v]),
                        c) {
                            e.playing(u[v]) && (c._rateSeek = e.seek(u[v]),
                            c._playStart = e._webAudio ? t.ctx.currentTime : c._playStart),
                            c._rate = s,
                            e._webAudio && c._node && c._node.bufferSource ? c._node.bufferSource.playbackRate.setValueAtTime(s, t.ctx.currentTime) : c._node && (c._node.playbackRate = s);
                            var y = e.seek(u[v])
                              , w = (e._sprite[c._sprite][0] + e._sprite[c._sprite][1]) / 1e3 - y
                              , S = w * 1e3 / Math.abs(c._rate);
                            (e._endTimers[u[v]] || !c._paused) && (e._clearTimer(u[v]),
                            e._endTimers[u[v]] = setTimeout(e._ended.bind(e, c), S)),
                            e._emit("rate", c._id)
                        }
                } else
                    return c = e._soundById(u),
                    c ? c._rate : e._rate;
                return e
            },
            seek: function() {
                var e = this, n = arguments, s, u;
                if (n.length === 0)
                    e._sounds.length && (u = e._sounds[0]._id);
                else if (n.length === 1) {
                    var d = e._getSoundIds()
                      , _ = d.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : e._sounds.length && (u = e._sounds[0]._id,
                    s = parseFloat(n[0]))
                } else
                    n.length === 2 && (s = parseFloat(n[0]),
                    u = parseInt(n[1], 10));
                if (typeof u > "u")
                    return 0;
                if (typeof s == "number" && (e._state !== "loaded" || e._playLock))
                    return e._queue.push({
                        event: "seek",
                        action: function() {
                            e.seek.apply(e, n)
                        }
                    }),
                    e;
                var c = e._soundById(u);
                if (c)
                    if (typeof s == "number" && s >= 0) {
                        var v = e.playing(u);
                        v && e.pause(u, !0),
                        c._seek = s,
                        c._ended = !1,
                        e._clearTimer(u),
                        !e._webAudio && c._node && !isNaN(c._node.duration) && (c._node.currentTime = s);
                        var y = function() {
                            v && e.play(u, !0),
                            e._emit("seek", u)
                        };
                        if (v && !e._webAudio) {
                            var w = function() {
                                e._playLock ? setTimeout(w, 0) : y()
                            };
                            setTimeout(w, 0)
                        } else
                            y()
                    } else if (e._webAudio) {
                        var S = e.playing(u) ? t.ctx.currentTime - c._playStart : 0
                          , O = c._rateSeek ? c._rateSeek - c._seek : 0;
                        return c._seek + (O + S * Math.abs(c._rate))
                    } else
                        return c._node.currentTime;
                return e
            },
            playing: function(e) {
                var n = this;
                if (typeof e == "number") {
                    var s = n._soundById(e);
                    return s ? !s._paused : !1
                }
                for (var u = 0; u < n._sounds.length; u++)
                    if (!n._sounds[u]._paused)
                        return !0;
                return !1
            },
            duration: function(e) {
                var n = this
                  , s = n._duration
                  , u = n._soundById(e);
                return u && (s = n._sprite[u._sprite][1] / 1e3),
                s
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var e = this, n = e._sounds, s = 0; s < n.length; s++)
                    n[s]._paused || e.stop(n[s]._id),
                    e._webAudio || (e._clearSound(n[s]._node),
                    n[s]._node.removeEventListener("error", n[s]._errorFn, !1),
                    n[s]._node.removeEventListener(t._canPlayEvent, n[s]._loadFn, !1),
                    n[s]._node.removeEventListener("ended", n[s]._endFn, !1),
                    t._releaseHtml5Audio(n[s]._node)),
                    delete n[s]._node,
                    e._clearTimer(n[s]._id);
                var u = t._howls.indexOf(e);
                u >= 0 && t._howls.splice(u, 1);
                var d = !0;
                for (s = 0; s < t._howls.length; s++)
                    if (t._howls[s]._src === e._src || e._src.indexOf(t._howls[s]._src) >= 0) {
                        d = !1;
                        break
                    }
                return l && d && delete l[e._src],
                t.noAudio = !1,
                e._state = "unloaded",
                e._sounds = [],
                e = null,
                null
            },
            on: function(e, n, s, u) {
                var d = this
                  , _ = d["_on" + e];
                return typeof n == "function" && _.push(u ? {
                    id: s,
                    fn: n,
                    once: u
                } : {
                    id: s,
                    fn: n
                }),
                d
            },
            off: function(e, n, s) {
                var u = this
                  , d = u["_on" + e]
                  , _ = 0;
                if (typeof n == "number" && (s = n,
                n = null),
                n || s)
                    for (_ = 0; _ < d.length; _++) {
                        var c = s === d[_].id;
                        if (n === d[_].fn && c || !n && c) {
                            d.splice(_, 1);
                            break
                        }
                    }
                else if (e)
                    u["_on" + e] = [];
                else {
                    var v = Object.keys(u);
                    for (_ = 0; _ < v.length; _++)
                        v[_].indexOf("_on") === 0 && Array.isArray(u[v[_]]) && (u[v[_]] = [])
                }
                return u
            },
            once: function(e, n, s) {
                var u = this;
                return u.on(e, n, s, 1),
                u
            },
            _emit: function(e, n, s) {
                for (var u = this, d = u["_on" + e], _ = d.length - 1; _ >= 0; _--)
                    (!d[_].id || d[_].id === n || e === "load") && (setTimeout(function(c) {
                        c.call(this, n, s)
                    }
                    .bind(u, d[_].fn), 0),
                    d[_].once && u.off(e, d[_].fn, d[_].id));
                return u._loadQueue(e),
                u
            },
            _loadQueue: function(e) {
                var n = this;
                if (n._queue.length > 0) {
                    var s = n._queue[0];
                    s.event === e && (n._queue.shift(),
                    n._loadQueue()),
                    e || s.action()
                }
                return n
            },
            _ended: function(e) {
                var n = this
                  , s = e._sprite;
                if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
                    return setTimeout(n._ended.bind(n, e), 100),
                    n;
                var u = !!(e._loop || n._sprite[s][2]);
                if (n._emit("end", e._id),
                !n._webAudio && u && n.stop(e._id, !0).play(e._id),
                n._webAudio && u) {
                    n._emit("play", e._id),
                    e._seek = e._start || 0,
                    e._rateSeek = 0,
                    e._playStart = t.ctx.currentTime;
                    var d = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                    n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), d)
                }
                return n._webAudio && !u && (e._paused = !0,
                e._ended = !0,
                e._seek = e._start || 0,
                e._rateSeek = 0,
                n._clearTimer(e._id),
                n._cleanBuffer(e._node),
                t._autoSuspend()),
                !n._webAudio && !u && n.stop(e._id, !0),
                n
            },
            _clearTimer: function(e) {
                var n = this;
                if (n._endTimers[e]) {
                    if (typeof n._endTimers[e] != "function")
                        clearTimeout(n._endTimers[e]);
                    else {
                        var s = n._soundById(e);
                        s && s._node && s._node.removeEventListener("ended", n._endTimers[e], !1)
                    }
                    delete n._endTimers[e]
                }
                return n
            },
            _soundById: function(e) {
                for (var n = this, s = 0; s < n._sounds.length; s++)
                    if (e === n._sounds[s]._id)
                        return n._sounds[s];
                return null
            },
            _inactiveSound: function() {
                var e = this;
                e._drain();
                for (var n = 0; n < e._sounds.length; n++)
                    if (e._sounds[n]._ended)
                        return e._sounds[n].reset();
                return new a(e)
            },
            _drain: function() {
                var e = this
                  , n = e._pool
                  , s = 0
                  , u = 0;
                if (!(e._sounds.length < n)) {
                    for (u = 0; u < e._sounds.length; u++)
                        e._sounds[u]._ended && s++;
                    for (u = e._sounds.length - 1; u >= 0; u--) {
                        if (s <= n)
                            return;
                        e._sounds[u]._ended && (e._webAudio && e._sounds[u]._node && e._sounds[u]._node.disconnect(0),
                        e._sounds.splice(u, 1),
                        s--)
                    }
                }
            },
            _getSoundIds: function(e) {
                var n = this;
                if (typeof e > "u") {
                    for (var s = [], u = 0; u < n._sounds.length; u++)
                        s.push(n._sounds[u]._id);
                    return s
                } else
                    return [e]
            },
            _refreshBuffer: function(e) {
                var n = this;
                return e._node.bufferSource = t.ctx.createBufferSource(),
                e._node.bufferSource.buffer = l[n._src],
                e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                e._node.bufferSource.loop = e._loop,
                e._loop && (e._node.bufferSource.loopStart = e._start || 0,
                e._node.bufferSource.loopEnd = e._stop || 0),
                e._node.bufferSource.playbackRate.setValueAtTime(e._rate, t.ctx.currentTime),
                n
            },
            _cleanBuffer: function(e) {
                var n = this
                  , s = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
                if (t._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null,
                e.bufferSource.disconnect(0),
                s))
                    try {
                        e.bufferSource.buffer = t._scratchBuffer
                    } catch {}
                return e.bufferSource = null,
                n
            },
            _clearSound: function(e) {
                var n = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
                n || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var a = function(e) {
            this._parent = e,
            this.init()
        };
        a.prototype = {
            init: function() {
                var e = this
                  , n = e._parent;
                return e._muted = n._muted,
                e._loop = n._loop,
                e._volume = n._volume,
                e._rate = n._rate,
                e._seek = 0,
                e._paused = !0,
                e._ended = !0,
                e._sprite = "__default",
                e._id = ++t._counter,
                n._sounds.push(e),
                e.create(),
                e
            },
            create: function() {
                var e = this
                  , n = e._parent
                  , s = t._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return n._webAudio ? (e._node = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(),
                e._node.gain.setValueAtTime(s, t.ctx.currentTime),
                e._node.paused = !0,
                e._node.connect(t.masterGain)) : t.noAudio || (e._node = t._obtainHtml5Audio(),
                e._errorFn = e._errorListener.bind(e),
                e._node.addEventListener("error", e._errorFn, !1),
                e._loadFn = e._loadListener.bind(e),
                e._node.addEventListener(t._canPlayEvent, e._loadFn, !1),
                e._endFn = e._endListener.bind(e),
                e._node.addEventListener("ended", e._endFn, !1),
                e._node.src = n._src,
                e._node.preload = n._preload === !0 ? "auto" : n._preload,
                e._node.volume = s * t.volume(),
                e._node.load()),
                e
            },
            reset: function() {
                var e = this
                  , n = e._parent;
                return e._muted = n._muted,
                e._loop = n._loop,
                e._volume = n._volume,
                e._rate = n._rate,
                e._seek = 0,
                e._rateSeek = 0,
                e._paused = !0,
                e._ended = !0,
                e._sprite = "__default",
                e._id = ++t._counter,
                e
            },
            _errorListener: function() {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
                e._node.removeEventListener("error", e._errorFn, !1)
            },
            _loadListener: function() {
                var e = this
                  , n = e._parent;
                n._duration = Math.ceil(e._node.duration * 10) / 10,
                Object.keys(n._sprite).length === 0 && (n._sprite = {
                    __default: [0, n._duration * 1e3]
                }),
                n._state !== "loaded" && (n._state = "loaded",
                n._emit("load"),
                n._loadQueue()),
                e._node.removeEventListener(t._canPlayEvent, e._loadFn, !1)
            },
            _endListener: function() {
                var e = this
                  , n = e._parent;
                n._duration === 1 / 0 && (n._duration = Math.ceil(e._node.duration * 10) / 10,
                n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = n._duration * 1e3),
                n._ended(e)),
                e._node.removeEventListener("ended", e._endFn, !1)
            }
        };
        var l = {}
          , f = function(e) {
            var n = e._src;
            if (l[n]) {
                e._duration = l[n].duration,
                m(e);
                return
            }
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var s = atob(n.split(",")[1]), u = new Uint8Array(s.length), d = 0; d < s.length; ++d)
                    u[d] = s.charCodeAt(d);
                h(u.buffer, e)
            } else {
                var _ = new XMLHttpRequest;
                _.open(e._xhr.method, n, !0),
                _.withCredentials = e._xhr.withCredentials,
                _.responseType = "arraybuffer",
                e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(c) {
                    _.setRequestHeader(c, e._xhr.headers[c])
                }),
                _.onload = function() {
                    var c = (_.status + "")[0];
                    if (c !== "0" && c !== "2" && c !== "3") {
                        e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                        return
                    }
                    h(_.response, e)
                }
                ,
                _.onerror = function() {
                    e._webAudio && (e._html5 = !0,
                    e._webAudio = !1,
                    e._sounds = [],
                    delete l[n],
                    e.load())
                }
                ,
                p(_)
            }
        }
          , p = function(e) {
            try {
                e.send()
            } catch {
                e.onerror()
            }
        }
          , h = function(e, n) {
            var s = function() {
                n._emit("loaderror", null, "Decoding audio data failed.")
            }
              , u = function(d) {
                d && n._sounds.length > 0 ? (l[n._src] = d,
                m(n, d)) : s()
            };
            typeof Promise < "u" && t.ctx.decodeAudioData.length === 1 ? t.ctx.decodeAudioData(e).then(u).catch(s) : t.ctx.decodeAudioData(e, u, s)
        }
          , m = function(e, n) {
            n && !e._duration && (e._duration = n.duration),
            Object.keys(e._sprite).length === 0 && (e._sprite = {
                __default: [0, e._duration * 1e3]
            }),
            e._state !== "loaded" && (e._state = "loaded",
            e._emit("load"),
            e._loadQueue())
        }
          , g = function() {
            if (t.usingWebAudio) {
                try {
                    typeof AudioContext < "u" ? t.ctx = new AudioContext : typeof webkitAudioContext < "u" ? t.ctx = new webkitAudioContext : t.usingWebAudio = !1
                } catch {
                    t.usingWebAudio = !1
                }
                t.ctx || (t.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform)
                  , n = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                  , s = n ? parseInt(n[1], 10) : null;
                if (e && s && s < 9) {
                    var u = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
                    t._navigator && !u && (t.usingWebAudio = !1)
                }
                t.usingWebAudio && (t.masterGain = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(),
                t.masterGain.gain.setValueAtTime(t._muted ? 0 : t._volume, t.ctx.currentTime),
                t.masterGain.connect(t.ctx.destination)),
                t._setup()
            }
        };
        r.Howler = t,
        r.Howl = i,
        typeof q < "u" ? (q.HowlerGlobal = o,
        q.Howler = t,
        q.Howl = i,
        q.Sound = a) : typeof window < "u" && (window.HowlerGlobal = o,
        window.Howler = t,
        window.Howl = i,
        window.Sound = a)
    }
    )();
    /*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
    (function() {
        HowlerGlobal.prototype._pos = [0, 0, 0],
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
        HowlerGlobal.prototype.stereo = function(t) {
            var i = this;
            if (!i.ctx || !i.ctx.listener)
                return i;
            for (var a = i._howls.length - 1; a >= 0; a--)
                i._howls[a].stereo(t);
            return i
        }
        ,
        HowlerGlobal.prototype.pos = function(t, i, a) {
            var l = this;
            if (!l.ctx || !l.ctx.listener)
                return l;
            if (i = typeof i != "number" ? l._pos[1] : i,
            a = typeof a != "number" ? l._pos[2] : a,
            typeof t == "number")
                l._pos = [t, i, a],
                typeof l.ctx.listener.positionX < "u" ? (l.ctx.listener.positionX.setTargetAtTime(l._pos[0], Howler.ctx.currentTime, .1),
                l.ctx.listener.positionY.setTargetAtTime(l._pos[1], Howler.ctx.currentTime, .1),
                l.ctx.listener.positionZ.setTargetAtTime(l._pos[2], Howler.ctx.currentTime, .1)) : l.ctx.listener.setPosition(l._pos[0], l._pos[1], l._pos[2]);
            else
                return l._pos;
            return l
        }
        ,
        HowlerGlobal.prototype.orientation = function(t, i, a, l, f, p) {
            var h = this;
            if (!h.ctx || !h.ctx.listener)
                return h;
            var m = h._orientation;
            if (i = typeof i != "number" ? m[1] : i,
            a = typeof a != "number" ? m[2] : a,
            l = typeof l != "number" ? m[3] : l,
            f = typeof f != "number" ? m[4] : f,
            p = typeof p != "number" ? m[5] : p,
            typeof t == "number")
                h._orientation = [t, i, a, l, f, p],
                typeof h.ctx.listener.forwardX < "u" ? (h.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1),
                h.ctx.listener.forwardY.setTargetAtTime(i, Howler.ctx.currentTime, .1),
                h.ctx.listener.forwardZ.setTargetAtTime(a, Howler.ctx.currentTime, .1),
                h.ctx.listener.upX.setTargetAtTime(l, Howler.ctx.currentTime, .1),
                h.ctx.listener.upY.setTargetAtTime(f, Howler.ctx.currentTime, .1),
                h.ctx.listener.upZ.setTargetAtTime(p, Howler.ctx.currentTime, .1)) : h.ctx.listener.setOrientation(t, i, a, l, f, p);
            else
                return m;
            return h
        }
        ,
        Howl.prototype.init = function(t) {
            return function(i) {
                var a = this;
                return a._orientation = i.orientation || [1, 0, 0],
                a._stereo = i.stereo || null,
                a._pos = i.pos || null,
                a._pannerAttr = {
                    coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : 360,
                    coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : 360,
                    coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : 0,
                    distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : "inverse",
                    maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : 1e4,
                    panningModel: typeof i.panningModel < "u" ? i.panningModel : "HRTF",
                    refDistance: typeof i.refDistance < "u" ? i.refDistance : 1,
                    rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : 1
                },
                a._onstereo = i.onstereo ? [{
                    fn: i.onstereo
                }] : [],
                a._onpos = i.onpos ? [{
                    fn: i.onpos
                }] : [],
                a._onorientation = i.onorientation ? [{
                    fn: i.onorientation
                }] : [],
                t.call(this, i)
            }
        }(Howl.prototype.init),
        Howl.prototype.stereo = function(t, i) {
            var a = this;
            if (!a._webAudio)
                return a;
            if (a._state !== "loaded")
                return a._queue.push({
                    event: "stereo",
                    action: function() {
                        a.stereo(t, i)
                    }
                }),
                a;
            var l = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
            if (typeof i > "u")
                if (typeof t == "number")
                    a._stereo = t,
                    a._pos = [t, 0, 0];
                else
                    return a._stereo;
            for (var f = a._getSoundIds(i), p = 0; p < f.length; p++) {
                var h = a._soundById(f[p]);
                if (h)
                    if (typeof t == "number")
                        h._stereo = t,
                        h._pos = [t, 0, 0],
                        h._node && (h._pannerAttr.panningModel = "equalpower",
                        (!h._panner || !h._panner.pan) && o(h, l),
                        l === "spatial" ? typeof h._panner.positionX < "u" ? (h._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                        h._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                        h._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : h._panner.setPosition(t, 0, 0) : h._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
                        a._emit("stereo", h._id);
                    else
                        return h._stereo
            }
            return a
        }
        ,
        Howl.prototype.pos = function(t, i, a, l) {
            var f = this;
            if (!f._webAudio)
                return f;
            if (f._state !== "loaded")
                return f._queue.push({
                    event: "pos",
                    action: function() {
                        f.pos(t, i, a, l)
                    }
                }),
                f;
            if (i = typeof i != "number" ? 0 : i,
            a = typeof a != "number" ? -.5 : a,
            typeof l > "u")
                if (typeof t == "number")
                    f._pos = [t, i, a];
                else
                    return f._pos;
            for (var p = f._getSoundIds(l), h = 0; h < p.length; h++) {
                var m = f._soundById(p[h]);
                if (m)
                    if (typeof t == "number")
                        m._pos = [t, i, a],
                        m._node && ((!m._panner || m._panner.pan) && o(m, "spatial"),
                        typeof m._panner.positionX < "u" ? (m._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime),
                        m._panner.positionY.setValueAtTime(i, Howler.ctx.currentTime),
                        m._panner.positionZ.setValueAtTime(a, Howler.ctx.currentTime)) : m._panner.setPosition(t, i, a)),
                        f._emit("pos", m._id);
                    else
                        return m._pos
            }
            return f
        }
        ,
        Howl.prototype.orientation = function(t, i, a, l) {
            var f = this;
            if (!f._webAudio)
                return f;
            if (f._state !== "loaded")
                return f._queue.push({
                    event: "orientation",
                    action: function() {
                        f.orientation(t, i, a, l)
                    }
                }),
                f;
            if (i = typeof i != "number" ? f._orientation[1] : i,
            a = typeof a != "number" ? f._orientation[2] : a,
            typeof l > "u")
                if (typeof t == "number")
                    f._orientation = [t, i, a];
                else
                    return f._orientation;
            for (var p = f._getSoundIds(l), h = 0; h < p.length; h++) {
                var m = f._soundById(p[h]);
                if (m)
                    if (typeof t == "number")
                        m._orientation = [t, i, a],
                        m._node && (m._panner || (m._pos || (m._pos = f._pos || [0, 0, -.5]),
                        o(m, "spatial")),
                        typeof m._panner.orientationX < "u" ? (m._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime),
                        m._panner.orientationY.setValueAtTime(i, Howler.ctx.currentTime),
                        m._panner.orientationZ.setValueAtTime(a, Howler.ctx.currentTime)) : m._panner.setOrientation(t, i, a)),
                        f._emit("orientation", m._id);
                    else
                        return m._orientation
            }
            return f
        }
        ,
        Howl.prototype.pannerAttr = function() {
            var t = this, i = arguments, a, l, f;
            if (!t._webAudio)
                return t;
            if (i.length === 0)
                return t._pannerAttr;
            if (i.length === 1)
                if (typeof i[0] == "object")
                    a = i[0],
                    typeof l > "u" && (a.pannerAttr || (a.pannerAttr = {
                        coneInnerAngle: a.coneInnerAngle,
                        coneOuterAngle: a.coneOuterAngle,
                        coneOuterGain: a.coneOuterGain,
                        distanceModel: a.distanceModel,
                        maxDistance: a.maxDistance,
                        refDistance: a.refDistance,
                        rolloffFactor: a.rolloffFactor,
                        panningModel: a.panningModel
                    }),
                    t._pannerAttr = {
                        coneInnerAngle: typeof a.pannerAttr.coneInnerAngle < "u" ? a.pannerAttr.coneInnerAngle : t._coneInnerAngle,
                        coneOuterAngle: typeof a.pannerAttr.coneOuterAngle < "u" ? a.pannerAttr.coneOuterAngle : t._coneOuterAngle,
                        coneOuterGain: typeof a.pannerAttr.coneOuterGain < "u" ? a.pannerAttr.coneOuterGain : t._coneOuterGain,
                        distanceModel: typeof a.pannerAttr.distanceModel < "u" ? a.pannerAttr.distanceModel : t._distanceModel,
                        maxDistance: typeof a.pannerAttr.maxDistance < "u" ? a.pannerAttr.maxDistance : t._maxDistance,
                        refDistance: typeof a.pannerAttr.refDistance < "u" ? a.pannerAttr.refDistance : t._refDistance,
                        rolloffFactor: typeof a.pannerAttr.rolloffFactor < "u" ? a.pannerAttr.rolloffFactor : t._rolloffFactor,
                        panningModel: typeof a.pannerAttr.panningModel < "u" ? a.pannerAttr.panningModel : t._panningModel
                    });
                else
                    return f = t._soundById(parseInt(i[0], 10)),
                    f ? f._pannerAttr : t._pannerAttr;
            else
                i.length === 2 && (a = i[0],
                l = parseInt(i[1], 10));
            for (var p = t._getSoundIds(l), h = 0; h < p.length; h++)
                if (f = t._soundById(p[h]),
                f) {
                    var m = f._pannerAttr;
                    m = {
                        coneInnerAngle: typeof a.coneInnerAngle < "u" ? a.coneInnerAngle : m.coneInnerAngle,
                        coneOuterAngle: typeof a.coneOuterAngle < "u" ? a.coneOuterAngle : m.coneOuterAngle,
                        coneOuterGain: typeof a.coneOuterGain < "u" ? a.coneOuterGain : m.coneOuterGain,
                        distanceModel: typeof a.distanceModel < "u" ? a.distanceModel : m.distanceModel,
                        maxDistance: typeof a.maxDistance < "u" ? a.maxDistance : m.maxDistance,
                        refDistance: typeof a.refDistance < "u" ? a.refDistance : m.refDistance,
                        rolloffFactor: typeof a.rolloffFactor < "u" ? a.rolloffFactor : m.rolloffFactor,
                        panningModel: typeof a.panningModel < "u" ? a.panningModel : m.panningModel
                    };
                    var g = f._panner;
                    g ? (g.coneInnerAngle = m.coneInnerAngle,
                    g.coneOuterAngle = m.coneOuterAngle,
                    g.coneOuterGain = m.coneOuterGain,
                    g.distanceModel = m.distanceModel,
                    g.maxDistance = m.maxDistance,
                    g.refDistance = m.refDistance,
                    g.rolloffFactor = m.rolloffFactor,
                    g.panningModel = m.panningModel) : (f._pos || (f._pos = t._pos || [0, 0, -.5]),
                    o(f, "spatial"))
                }
            return t
        }
        ,
        Sound.prototype.init = function(t) {
            return function() {
                var i = this
                  , a = i._parent;
                i._orientation = a._orientation,
                i._stereo = a._stereo,
                i._pos = a._pos,
                i._pannerAttr = a._pannerAttr,
                t.call(this),
                i._stereo ? a.stereo(i._stereo) : i._pos && a.pos(i._pos[0], i._pos[1], i._pos[2], i._id)
            }
        }(Sound.prototype.init),
        Sound.prototype.reset = function(t) {
            return function() {
                var i = this
                  , a = i._parent;
                return i._orientation = a._orientation,
                i._stereo = a._stereo,
                i._pos = a._pos,
                i._pannerAttr = a._pannerAttr,
                i._stereo ? a.stereo(i._stereo) : i._pos ? a.pos(i._pos[0], i._pos[1], i._pos[2], i._id) : i._panner && (i._panner.disconnect(0),
                i._panner = void 0,
                a._refreshBuffer(i)),
                t.call(this)
            }
        }(Sound.prototype.reset);
        var o = function(t, i) {
            i = i || "spatial",
            i === "spatial" ? (t._panner = Howler.ctx.createPanner(),
            t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle,
            t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle,
            t._panner.coneOuterGain = t._pannerAttr.coneOuterGain,
            t._panner.distanceModel = t._pannerAttr.distanceModel,
            t._panner.maxDistance = t._pannerAttr.maxDistance,
            t._panner.refDistance = t._pannerAttr.refDistance,
            t._panner.rolloffFactor = t._pannerAttr.rolloffFactor,
            t._panner.panningModel = t._pannerAttr.panningModel,
            typeof t._panner.positionX < "u" ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime),
            t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime),
            t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]),
            typeof t._panner.orientationX < "u" ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime),
            t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime),
            t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(),
            t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)),
            t._panner.connect(t._node),
            t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
        }
    }
    )()
}
)(ce);
const Ot = "./assets/bgm-ff2cc27b.mp3"
  , Pt = "./assets/sound_1-06d0edcf.mp3"
  , It = "./assets/sound_2-0cad7a06.mp3";
function Ct(r) {
    return new ce.Howl({
        src: [Ot],
        html5: !0,
        loop: !0,
        volume: r
    })
}
class J {
    static HowlList = [Pt, It];
    howl;
    constructor(o) {
        this.howl = new ce.Howl({
            src: [J.HowlList[o]]
        })
    }
    changeHowl(o) {
        this.howl = new ce.Howl({
            src: [J.HowlList[o]]
        })
    }
    play() {
        this.howl && this.howl.play()
    }
}
const Lt = L('<a href="https://image-static.segmentfault.com/170/672/1706722225-666d5d93e0e9d_fix732" target="_blank"><span text-3xl font-bold color-transparent bg-clip-text="!">ZERO开发');
function Et() {
    return ( () => {
        const r = Lt();
        return r.firstChild.style.setProperty("background", "linear-gradient( 315deg, #42d392 25%, #647eff )"),
        r
    }
    )()
}
const Ht = L('<div w-full><div text-3xl mb-10>音效选择</div><div flex="~ wrap" justify-center gap-6>')
  , Mt = L("<div border p-10 rd-2>音效");
function Bt() {
    return ( () => {
        const r = Ht()
          , o = r.firstChild
          , t = o.nextSibling;
        return k(t, () => J.HowlList.map( (i, a) => ( () => {
            const l = Mt();
            return l.firstChild,
            l.$$click = () => K("sound", a),
            k(l, a + 1, null),
            E( () => Q(l, $.sound === a ? "bg-white color-black" : "")),
            l
        }
        )())),
        r
    }
    )()
}
X(["click"]);
const Ft = L('<div h-10px bg-white="/70"><div h-full bg-white flex justify-end items-center relative><div w-10 h-10 bg-white="/80" rd-5 absolute cursor-pointer>');
let ee, He;
function Dt() {
    let r = 0
      , o = 0
      , [t,i] = D(0);
    function a(h) {
        document.addEventListener("touchmove", l),
        document.addEventListener("mousemove", l),
        document.addEventListener("touchend", f),
        document.addEventListener("mouseup", f)
    }
    function l(h) {
        let m = 0;
        h.type === "mousemove" ? m = h?.clientX : h.type === "touchmove" && (m = h?.targetTouches[0]?.clientX),
        m <= 0 ? m = 0 : m >= o && (m = o),
        p(m)
    }
    function f(h) {
        document.removeEventListener("touchmove", l),
        document.removeEventListener("mousemove", l),
        document.removeEventListener("touchend", f),
        document.removeEventListener("mouseup", f)
    }
    it( () => {
        r = ee.offsetLeft,
        o = ee.offsetWidth + r,
        i($.volume)
    }
    );
    function p(h) {
        const m = Math.trunc(h / o * 100);
        i(m),
        K("volume", m)
    }
    return ( () => {
        const h = Ft()
          , m = h.firstChild
          , g = m.firstChild
          , e = ee;
        typeof e == "function" ? Le(e, h) : ee = h,
        g.$$touchstart = a,
        g.$$mousedown = a;
        const n = He;
        return typeof n == "function" ? Le(n, g) : He = g,
        g.style.setProperty("transform", "translateX(20px)"),
        E( () => t() + "%" != null ? m.style.setProperty("width", t() + "%") : m.style.removeProperty("width")),
        h
    }
    )()
}
X(["mousedown", "touchstart"]);
const Gt = L("<div w-full><div text-3xl mb-10>背景音量</div><div>");
function Vt() {
    return ( () => {
        const r = Gt()
          , o = r.firstChild
          , t = o.nextSibling;
        return t.$$click = i => i.stopPropagation(),
        k(t, C(Dt, {})),
        r
    }
    )()
}
X(["click"]);
const Nt = "_slider_3but6_1"
  , Rt = {
    slider: Nt
}
  , jt = L('<div flex><input type="checkbox">');
function Xt(r) {
    return ( () => {
        const o = jt()
          , t = o.firstChild;
        return t.addEventListener("change", i => r.onChange(i.target.checked)),
        E( () => Q(t, Rt.slider)),
        E( () => t.checked = r.checked),
        o
    }
    )()
}
const qt = L("<div w-full><div text-3xl mb-10>其它设置</div><div><div flex justify-center items-center gap-2 mb-2>缓存:</div><div><div color-blue>清除缓存");
function Wt() {
    const [r,o] = D("");
    Y( () => o($.isCount ? "开启" : "关闭"));
    function t(a) {
        K("isCount", a)
    }
    function i() {
        K("count", 0),
        alert("叮 ~ 功德已清空！")
    }
    return ( () => {
        const a = qt()
          , l = a.firstChild
          , f = l.nextSibling
          , p = f.firstChild;
        p.firstChild;
        const h = p.nextSibling
          , m = h.firstChild;
        return p.$$click = g => g.stopPropagation(),
        k(p, C(Xt, {
            get checked() {
                return $.isCount
            },
            onChange: t
        }), null),
        m.$$click = i,
        a
    }
    )()
}
X(["click"]);
const Qt = L('<div w-100vw h-100vh p-10 fixed top-0 left-0 bg-black="/50" flex="~ wrap" gap-6 justify-center items-center>');
function Yt(r) {
    return ( () => {
        const o = Qt();
        return ve(o, "click", r.onClose, !0),
        k(o, C(Bt, {}), null),
        k(o, C(Vt, {}), null),
        k(o, C(Wt, {}), null),
        o
    }
    )()
}
X(["click"]);
const Zt = L('<div w-100vw h-100vh px-6 md:px-10 py-4 md:py-6 text-center bg="#111" color-white flex="~ col" justify-between select-none overflow-hidden><header><div flex justify-between items-center><div text-2xl flex items-center gap-2><i i-carbon-music inline-block cursor-pointer></i><i i-carbon-settings inline-block cursor-pointer></i></div></div><div text-10rem font-bold transition-300></div><div color="#444" text-xl mt-2 font-bold>功德</div></header><main flex justify-center><img alt="WoodenFish" transition-300 cursor-pointer></main><footer color="#444"><div font-bold text-sm><div mb="1.5">按下<code>Space</code>或<code>Click</code>积攒功德</div><div>点击<code>右上角<i i-carbon-music inline-block text="0.6rem" v-middle ml="0.4"></i></code>开启/关闭 沉浸模式</div></div><div flex justify-between md:text-lg mt-6 font-bold><a href="https://pic1.zhimg.com/v2-72f07bbcb171f3a8942ca362ca400170_100w.jpg" target="_blank" color="hover:#eee" flex items-center gap-1><i i-carbon-logo-github inline-block></i><span>忍者疾风转</span></a><a href="https://oscimg.oschina.net/oscnet/up-d8dbe919b0ecb354f207e8e6216f1dc23a5.jpg" color="hover:#eee">实用工具箱')
  , [Me,Ke] = D(!1)
  , [Ut,Be] = D(!1)
  , te = Ct($.volume / 100)
  , Je = new J($.sound)
  , Fe = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
function we() {
    Je.play(),
    K("count", $.count + 1),
    Ke(!0)
}
function Ae() {
    Ke(!1)
}
function Kt() {
    te.playing() ? te.pause() : te.play()
}
document.onkeydown = ze;
document.onkeyup = ze;
function ze({key: r, code: o, type: t}) {
    r !== " " || o !== "Space" || (t === "keydown" ? we() : Ae())
}
const Jt = () => (Y( () => te.volume($.volume / 100)),
Y( () => Je.changeHowl($.sound)),
( () => {
    const r = Zt()
      , o = r.firstChild
      , t = o.firstChild
      , i = t.firstChild
      , a = i.firstChild
      , l = a.nextSibling
      , f = t.nextSibling
      , p = f.nextSibling
      , h = o.nextSibling
      , m = h.firstChild
      , g = h.nextSibling
      , e = g.firstChild
      , n = e.firstChild
      , s = n.firstChild
      , u = s.nextSibling
      , d = u.nextSibling
      , _ = d.nextSibling
      , c = n.nextSibling
      , v = c.firstChild
      , y = v.nextSibling;
    return r.style.setProperty("font-family", "'Roboto', sans-serif"),
    k(t, C(Et, {}), i),
    a.$$click = Kt,
    l.$$click = () => Be(!0),
    f.style.setProperty("line-height", "1"),
    f.style.setProperty("font-family", "'Pacifico', cursive"),
    k(f, () => $.count),
    p.style.setProperty("font-family", "'Pacifico', cursive"),
    m.$$touchend = Ae,
    m.$$touchstart = we,
    ve(m, "mouseup", Fe ? Ae : () => {}
    , !0),
    ve(m, "mousedown", Fe ? we : () => {}
    , !0),
    Ce(m, "src", vt),
    Ce(m, "draggable", !1),
    m.style.setProperty("-webkit-tap-highlight-color", "transparent"),
    k(r, C(dt, {
        get when() {
            return Ut()
        },
        get children() {
            return C(Yt, {
                onClose: () => Be(!1)
            })
        }
    }), null),
    E(w => {
        const S = `scale(${Me() ? 1.1 : 1})`
          , O = `scale(${Me() ? .99 : 1})`
          , B = he.code
          , G = he.code
          , A = he.code;
        return S !== w._v$ && ((w._v$ = S) != null ? f.style.setProperty("transform", S) : f.style.removeProperty("transform")),
        O !== w._v$2 && ((w._v$2 = O) != null ? m.style.setProperty("transform", O) : m.style.removeProperty("transform")),
        B !== w._v$3 && Q(u, w._v$3 = B),
        G !== w._v$4 && Q(_, w._v$4 = G),
        A !== w._v$5 && Q(y, w._v$5 = A),
        w
    }
    , {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0,
        _v$5: void 0
    }),
    r
}
)());
X(["click", "mousedown", "mouseup", "touchstart", "touchend"]);
pt( () => C(Jt, {}), document.getElementById("root"));
