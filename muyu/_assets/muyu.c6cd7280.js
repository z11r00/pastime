let t = document.createElement("style");
t.innerHTML = '#container[data-v-25c83a4e]{width:600px;height:500px;position:relative;transform:translate(0,-40px)}.muyu[data-v-25c83a4e]{width:400px;position:absolute;bottom:75px;left:100px}.gunzi[data-v-25c83a4e]{height:100px;position:absolute;left:280px;top:80px;transform:rotateZ(30deg);transition:transform .5s cubic-bezier(.85,.1,.89,.65)}.muyu:active+.gunzi[data-v-25c83a4e]{transform:rotateZ(12deg);transition:50ms}.gunzi1[data-v-25c83a4e]{height:100px;position:absolute;left:280px;top:80px;transform:rotateZ(30deg);animation:1s cubic-bezier(.85,.1,.89,.65) infinite alternate run-25c83a4e}.bu[data-v-25c83a4e]{position:absolute;bottom:50px;right:10px}@keyframes run-25c83a4e{from{transform:rotateZ(30deg)}to{transform:rotateZ(12deg)}}.show1::after{content:"功德+1";color:#cecece;font-size:28px;position:absolute;top:150px;left:240px;animation:2s ease-in .1s run1}.show2::after{content:"功德+1";color:#cecece;font-size:28px;position:absolute;top:180px;left:240px;animation:2s ease-in 1s run1}@keyframes run1{from{top:150px}to{top:-100px}}',
document.head.appendChild(t);
import {r as e, o as a, a as o, u as s, b as n, c as i, d as r, e as d, f as c, g as u, w as l, h as m, i as p, j as g, t as f} from "./index.100972b7.js";
var v = {
    name: "test1",
    props: [],
    setup() {
        n();
        const t = s();
        let i = e({
            music: 0,
            Intervalflag: 0,
            auto: 0
        });
        function r() {
            if (0 == i.auto) {
                (o = document.getElementById("music")).currentTime = 0,
                o.play(),
                t.commit("gd", 1),
                window.localStorage.setItem("muyutime", t.state.gongde);
                var e = document.getElementById("jia1");
                (s = document.createElement("div")).classList.add("show1");
                var a = e.appendChild(s);
                setTimeout(( () => {
                    e.removeChild(a)
                }
                ), 2e3)
            } else {
                var o;
                (o = document.getElementById("music1")).currentTime = 0,
                o.play(),
                t.commit("gd", 1),
                window.localStorage.setItem("muyutime", t.state.gongde);
                var s;
                e = document.getElementById("jia1");
                (s = document.createElement("div")).classList.add("show2");
                a = e.appendChild(s);
                setTimeout(( () => {
                    e.removeChild(a)
                }
                ), 4e3)
            }
        }
        return a(( () => {}
        )),
        o(( () => {
            clearInterval(i.Intervalflag)
        }
        )),
        {
            data: i,
            play: r,
            autob: function() {
                0 == i.auto ? (i.auto = 1,
                r(),
                i.Intervalflag = setInterval(r, 2e3)) : (clearInterval(i.Intervalflag),
                i.auto = 0,
                document.getElementById("music1").pause())
            }
        }
    }
};
const x = {
    class: "index"
}
  , b = {
    id: "container"
}
  , h = {
    key: 0,
    class: "gunzi",
    src: "./_assets/22.2fd411d2.png"
}
  , y = {
    key: 1,
    class: "gunzi1",
    src: "./_assets/22.2fd411d2.png"
}
  , I = m('<audio id="music" data-v-25c83a4e><source src="./_assets/1.3d23b08f.mp3" data-v-25c83a4e></audio><audio id="music1" data-v-25c83a4e><source src="./_assets/2.5cd3549a.mp3" data-v-25c83a4e></audio><div id="jia1" data-v-25c83a4e></div>', 3);
v.render = function(t, e, a, o, s, n) {
    const m = p("el-button");
    return i(),
    r("div", x, [d("div", b, [d("img", {
        class: "muyu",
        src: "./_assets/11.0f26ad86.png",
        onClick: e[0] || (e[0] = (...t) => o.play && o.play(...t))
    }), o.data.auto ? c("", !0) : (i(),
    r("img", h)), o.data.auto ? (i(),
    r("img", y)) : c("", !0), I, u(m, {
        class: "bu",
        onClick: o.autob
    }, {
        default: l(( () => [g(f(o.data.auto ? "手动" : "自动"), 1)])),
        _: 1
    }, 8, ["onClick"])])])
}
,
v.__scopeId = "data-v-25c83a4e";
export {v as default};
