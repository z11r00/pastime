(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"], {
    0: function(t, s, a) {
        t.exports = a("56d7")
    },
    "034f": function(t, s, a) {
        "use strict";
        a("85ec")
    },
    1: function(t, s) {},
    2: function(t, s) {},
    "540a": function(t, s, a) {
        "use strict";
        a("877f")
    },
    "56d7": function(t, s, a) {
        "use strict";
        a.r(s);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var i = a("2b0e")
          , e = a("f0e2")
          , c = function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("TVMain")], 1)
        }
          , n = []
          , o = function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                class: "container valentine block load " + (t.enterValentine ? "valentine-enter" : "")
            }, [a("div", {
                staticClass: "balloon-tv",
                on: {
                    click: t.openActivity
                }
            }), t._m(0), a("div", {
                staticClass: "all"
            }, [a("div", {
                class: "old-tv " + (t.tvOn && !t.showMessage ? "load" : t.offAnimation ? "off off-animation" : "off")
            }, [a("div", {
                staticClass: "paycode-btn-left",
                on: {
                    click: function(s) {
                        return t.onShowPayCode("left")
                    }
                }
            }, [a("img", {
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/milktea.svg"
                }
            })]), a("div", {
                staticClass: "paycode-btn",
                on: {
                    click: function(s) {
                        return t.onShowPayCode("right")
                    }
                }
            }, [a("img", {
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/milktea.svg"
                }
            })]), a("div", {
                staticClass: "antenna"
            }), a("main", [a("div", {
                staticClass: "error-noise"
            }, [a("div", {
                staticClass: "error-effect"
            }, [a("video", {
                ref: "player",
                staticClass: "video-js"
            }), a("div", {
                staticClass: "old-tv-content"
            }, [a("div", {
                staticClass: "text-layout"
            }, [t.showMessage ? a("p", [t._v("信号接收中... ")]) : t._e(), t.playbackRate > 1 && t.tvOn ? a("span", {
                staticClass: "corner-text rate"
            }, [t._v(" " + t._s(t.playbackRate) + "x ")]) : t._e()])])])])]), a("div", {
                staticClass: "speaker"
            }), a("div", {
                staticClass: "volume"
            }, [a("input", {
                attrs: {
                    type: "range",
                    min: "0",
                    max: "100"
                },
                on: {
                    input: t.onVolumeChange
                }
            })]), a("nav", {
                staticClass: "channel"
            }, [a("input", {
                attrs: {
                    type: "range",
                    min: "1",
                    max: "2",
                    step: "0.5"
                },
                domProps: {
                    value: t.playbackRate
                },
                on: {
                    input: t.onRateChange
                }
            })]), a("nav", {
                staticClass: "power"
            }, [a("button", {
                on: {
                    click: t.toggleTV
                }
            })]), a("nav"), a("footer")]), t._m(1)]), t._m(2), a("div", {
                staticClass: "close-activity",
                on: {
                    click: t.closeActivity
                }
            }, [a("i", {
                staticClass: "iconfont icon-poweroff"
            })]), null != t.info ? a("div", {
                class: (t.showPayCode ? "fadein-enter-active" : "fadein-leave-active") + " modal paycode",
                style: t.showPayCode ? "" : "display: none;"
            }, [a("p", [t._v(" " + t._s(t.info.head_tips) + " ")]), a("img", {
                attrs: {
                    src: t.qrcode
                }
            }), a("div", {
                staticStyle: {
                    "font-size": "11px",
                    "margin-top": "10px",
                    color: "rgb(102, 102, 102)"
                }
            }, [a("p", [t._v(" " + t._s(t.info.tail_desc) + " ")])]), a("div", {
                staticClass: "close-btn-x",
                on: {
                    click: function(s) {
                        t.showPayCode = !1
                    }
                }
            })]) : t._e()])
        }
          , l = [function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                staticClass: "background"
            }, [a("div", {
                staticClass: "bg1"
            }), a("div", {
                staticClass: "bg2"
            }), a("div", {
                staticClass: "c_1"
            }), a("div", {
                staticClass: "c_2"
            }), a("div", {
                staticClass: "c_3"
            }), a("div", {
                staticClass: "c_4"
            }), a("div", {
                staticClass: "h_1"
            }), a("div", {
                staticClass: "h_2"
            }), a("div", {
                staticClass: "h_3"
            }), a("div", {
                staticClass: "h_4"
            }), a("div", {
                staticClass: "h_5"
            }), a("div", {
                staticClass: "h_6"
            }), a("div", {
                staticClass: "h_7"
            }), a("div", {
                staticClass: "h_8"
            }), a("img", {
                staticClass: "d_1",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot1.svg"
                }
            }), a("img", {
                staticClass: "d_2",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot2.svg"
                }
            }), a("img", {
                staticClass: "d_3",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot3.svg"
                }
            }), a("img", {
                staticClass: "d_4",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot4.svg"
                }
            }), a("img", {
                staticClass: "d_5",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot5.svg"
                }
            }), a("img", {
                staticClass: "d_6",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot6.svg"
                }
            }), a("img", {
                staticClass: "d_7",
                attrs: {
                    src: "https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/img/dot7.svg"
                }
            })])
        }
        , function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                attrs: {
                    id: "table-tv"
                }
            }, [a("div", {
                staticClass: "scene"
            }, [a("div", {
                staticClass: "shape cuboid-1 cub-1"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(255, 255, 255, 0.2) 0px 1px inset"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt"
            }), a("div", {
                staticClass: "face lt"
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 100px 20px inset, rgba(0, 0, 0, 0.3) 0px 300px inset"
                }
            })]), a("div", {
                staticClass: "shape cuboid-3 cub-3"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.6) 0px 300px inset, rgba(0, 0, 0, 0.8) 10px 2px 10px"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt"
            }), a("div", {
                staticClass: "face lt",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.8) 0px 300px inset"
                }
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp"
            })]), a("div", {
                staticClass: "shape cuboid-4 cub-4"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.6) 0px 20px 5px inset, rgba(0, 0, 0, 0.4) 5px 2px 8px"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt"
            }), a("div", {
                staticClass: "face lt",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 300px inset"
                }
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp"
            })]), a("div", {
                staticClass: "shape cuboid-5 cub-5"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.6) 0px 300px inset, rgba(0, 0, 0, 0.8) -10px 2px 10px"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.8) 0px 300px inset"
                }
            }), a("div", {
                staticClass: "face lt"
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp"
            })]), a("div", {
                staticClass: "shape cuboid-6 cub-6"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.6) 0px 20px 5px inset, rgba(0, 0, 0, 0.4) -5px 2px 8px"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 300px inset"
                }
            }), a("div", {
                staticClass: "face lt"
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp"
            })]), a("div", {
                staticClass: "shape cuboid-2 cub-2"
            }, [a("div", {
                staticClass: "face ft",
                staticStyle: {
                    "box-shadow": "rgba(255, 255, 255, 0.2) 0px 1px inset"
                }
            }), a("div", {
                staticClass: "face bk"
            }), a("div", {
                staticClass: "face rt"
            }), a("div", {
                staticClass: "face lt"
            }), a("div", {
                staticClass: "face bm"
            }), a("div", {
                staticClass: "face tp",
                staticStyle: {
                    "box-shadow": "rgba(0, 0, 0, 0.5) 0px 50px 20px inset, rgba(0, 0, 0, 0.4) 0px 150px inset"
                }
            })])])])
        }
        , function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                staticClass: "balloons"
            }, [a("div", {
                staticClass: "balloon"
            }), a("div", {
                staticClass: "balloon"
            }), a("div", {
                staticClass: "balloon"
            }), a("div", {
                staticClass: "balloon"
            }), a("div", {
                staticClass: "balloon"
            })])
        }
        ]
          , r = (a("4de4"),
        a("99af"),
        a("d81d"),
        a("bc3a"))
          , d = a.n(r)
          , p = {
            data: function() {
                return {
                    showPayCode: !1,
                    tvOn: !1,
                    offAnimation: !1,
                    playbackRate: 1,
                    enterValentine: !1,
                    info: null,
                    mediaList: [],
                    qrcode: null,
                    showMessage: !1
                }
            },
            computed: {
                firstSource: function() {
                    var t = this.mediaList.filter((function(t) {
                        return "first" === t.use_on
                    }
                    ));
                    return t.reduce((function(t, s) {
                        return t.concat(s.resource.map((function(t) {
                            return {
                                src: t,
                                type: s.type
                            }
                        }
                        )))
                    }
                    ), [])
                },
                secondSource: function() {
                    var t = this.mediaList.filter((function(t) {
                        return "second" === t.use_on
                    }
                    ));
                    return t.reduce((function(t, s) {
                        return t.concat(s.resource.map((function(t) {
                            return {
                                src: t,
                                type: s.type
                            }
                        }
                        )))
                    }
                    ), [])
                }
            },
            created: function() {
                var t = this
                  , s = ".";
                d.a.get("".concat(s, "/info")).then((function(s) {
                    s.data && (t.info = s.data)
                }
                )).catch((function(t) {
                    console.log(t)
                }
                )),
                d.a.get("".concat(s, "/media")).then((function(s) {
                    s.data && s.data.length > 0 && (t.mediaList = s.data,
                    t.setupPlayer())
                }
                )).catch((function(t) {
                    console.log(t)
                }
                ))
            },
            beforeDestroy: function() {
                this.player && this.player.dispose()
            },
            methods: {
                setupPlayer: function() {
                    this.player = this.$video(this.$refs.player, {
                        playsinline: !0,
                        controls: !1,
                        autoplay: !1,
                        preload: "auto",
                        width: "0px",
                        height: "0px",
                        errorDisplay: !1,
                        posterImage: !1,
                        bigPlayButton: !1,
                        textTrackDisplay: !1,
                        controlBar: !1,
                        loadingSpinner: !1,
                        textTrackSettings: !1
                    }, (function() {
                        console.log("onPlayerReady", this)
                    }
                    ))
                },
                toggleTV: function() {
                    if (!this.showMessage && null != this.player) {
                        if (this.tvOn = !this.tvOn,
                        this.tvOn) {
                            var t = Math.floor(Math.random() * this.firstSource.length);
                            this.playerPlay(this.firstSource[t].src, 1e3)
                        } else
                            this.offAnimation = !0,
                            this.player.pause();
                        var s = new Audio("https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/media/switch.mp3");
                        s.play()
                    }
                },
                onVolumeChange: function(t) {
                    null != this.player && this.player.volume(t.target.value / 100)
                },
                onRateChange: function(t) {
                    null != this.player && (this.playbackRate = t.target.value,
                    this.player.playbackRate(t.target.value))
                },
                onShowPayCode: function(t) {
                    null != this.info && (this.qrcode = "left" === t ? this.info.qrcode_on_left : this.info.qrcode,
                    this.showPayCode = !0)
                },
                openActivity: function() {
                    if (null != this.player) {
                        this.player.pause(),
                        this.enterValentine = !0,
                        this.tvOn = !0;
                        var t = Math.floor(Math.random() * this.secondSource.length);
                        this.playerPlay(this.secondSource[t].src, 2e3)
                    }
                },
                closeActivity: function() {
                    var t = new Audio("https://cdn.jsdelivr.net/gh/knob16/resource@1.2/static/media/switch.mp3");
                    t.play(),
                    this.tvOn = !1,
                    this.player.pause(),
                    this.enterValentine = !1
                },
                playerPlay: function(t, s) {
                    var a = this;
                    this.player.src(t),
                    this.playbackRate = 1,
                    this.player.playbackRate(1),
                    this.showMessage = !0,
                    console.log(this.player),
                    setTimeout((function() {
                        console.log("timeout"),
                        a.showMessage = !1,
                        a.player.play()
                    }
                    ), s)
                }
            }
        }
          , v = p
          , f = (a("540a"),
        a("2877"))
          , u = Object(f["a"])(v, o, l, !1, null, "78ce450f", null)
          , h = u.exports
          , b = {
            name: "App",
            components: {
                TVMain: h
            }
        }
          , C = b
          , g = (a("034f"),
        Object(f["a"])(C, c, n, !1, null, null, null))
          , y = g.exports;
        a("b20f");
        i["a"].prototype.$video = e["a"],
        i["a"].config.productionTip = !1,
        new i["a"]({
            render: function(t) {
                return t(y)
            }
        }).$mount("#app")
    },
    "85ec": function(t, s, a) {},
    "877f": function(t, s, a) {},
    b20f: function(t, s, a) {}
}, [[0, "runtime", "chunk-libs"]]]);
