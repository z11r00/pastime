var _$_c406 = ["length", "getElementById", "POST", "GET", "open", "onreadystatechange", "readyState", "status", "responseText", "send", "drawImage", "src", "face", "\x1E", "\x1F", "up4.php", "2d", "getContext", "00", "0", "toString", "width", "charAt", "paf", "rm", "es", "getBoundingClientRect", "clientX", "left", "floor", "clientY", "top", "button", "touches", "changedTouches", "now", "preventDefault", "returnValue", "event", "mp1", "getItem", "mp2", "tpn", "opn", "style", "p42", "px", "height", "onmousedown", "onmouseup", "ontouchstart", "ontouchmove", "ontouchend", "oncontextmenu", "onselectstart", "random", "ceil", "href", "location", "df5", "value", "hm", "vm", "mm", ";", "split", "ch7", "uid", ".", "setItem", "innerHTML", "on3.php", "innerText", "sum", "uid2.php", "clientWidth", "body", "clientHeight", "display", "custom", "", "none", "ss", "scores.htm#"];
function _am8(_0x1ABD9, _0x1ABB4) {
    for (var _0x1ABFE = 0; _0x1ABFE < C[_$_c406[0]]; _0x1ABFE++) {
        var _0x1AB8F = _0x1ABD9 + C[_0x1ABFE][0];
        var _0x1AB6A = _0x1ABB4 + C[_0x1ABFE][1];
        if (_0x1AB8F >= 0 && _0x1AB8F < Y && _0x1AB6A >= 0 && _0x1AB6A < X) {
            d31[_0x1AB8F][_0x1AB6A][2]++
        }
    }
}
function $(_0x1A989) {
    return document[_$_c406[1]](_0x1A989)
}
function gets(_0x1AE4E, _0x1AE04, _0x1AE29) {
    var _0x1AE73 = new XMLHttpRequest();
    _0x1AE73[_$_c406[4]](_0x1AE04 != null ? _$_c406[2] : _$_c406[3], _0x1AE4E, true);
    _0x1AE73[_$_c406[5]] = function() {
        if (_0x1AE73[_$_c406[6]] == 4 && (_0x1AE73[_$_c406[7]] == 200 || _0x1AE73[_$_c406[7]] == 304)) {
            _0x1AE29(_0x1AE73[_$_c406[8]])
        }
    }
    ;
    _0x1AE73[_$_c406[9]](_0x1AE04)
}
var d31 = [];
var X, Y, M;
var C = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
var _gs;
function S98(_0x1AAD6, _0x1AAFB) {
    ctx[_$_c406[10]](gfb[0], _0x1AAD6 * 25, _0x1AAFB * 25);
    setTimeout(function() {
        if (d31[_0x1AAFB][_0x1AAD6][0] == 0) {
            ctx[_$_c406[10]](gfs[0], _0x1AAD6 * 25, _0x1AAFB * 25)
        }
    }, 120)
}
function c67(_0x1AAD6, _0x1AAFB) {
    if (d31[_0x1AAFB][_0x1AAD6][0] != 1) {
        return
    }
    ;var _0x1ACB7 = 0
      , _0x1ACDC = 0;
    for (var _0x1ABFE = 0; _0x1ABFE < C[_$_c406[0]]; _0x1ABFE++) {
        var _0x1AB8F = _0x1AAFB + C[_0x1ABFE][0];
        var _0x1AB6A = _0x1AAD6 + C[_0x1ABFE][1];
        if (_0x1AB8F >= 0 && _0x1AB8F < Y && _0x1AB6A >= 0 && _0x1AB6A < X) {
            if (d31[_0x1AB8F][_0x1AB6A][0] == 2) {
                _0x1ACB7++
            } else {
                if (d31[_0x1AB8F][_0x1AB6A][0] == 0 && d31[_0x1AB8F][_0x1AB6A][1] == 1) {
                    _0x1ACDC++
                }
            }
        }
    }
    ;_0x1ACB7 = _0x1ACB7 >= d31[_0x1AAFB][_0x1AAD6][2] ? 1 : 0;
    for (var _0x1ABFE = 0; _0x1ABFE < C[_$_c406[0]]; _0x1ABFE++) {
        var _0x1AB8F = _0x1AAFB + C[_0x1ABFE][0];
        var _0x1AB6A = _0x1AAD6 + C[_0x1ABFE][1];
        if (_0x1AB8F >= 0 && _0x1AB8F < Y && _0x1AB6A >= 0 && _0x1AB6A < X) {
            if (d31[_0x1AB8F][_0x1AB6A][0] == 0) {
                if (_0x1ACB7) {
                    if (_0x1ACDC) {
                        if (d31[_0x1AB8F][_0x1AB6A][1] == 1) {
                            o0o(_0x1AB6A, _0x1AB8F)
                        }
                    } else {
                        o0o(_0x1AB6A, _0x1AB8F)
                    }
                } else {
                    S98(_0x1AB6A, _0x1AB8F)
                }
            }
        }
    }
    ;if (_0x1ACB7 && _0x1ACDC) {
        f17()
    }
}
function f17() {
    _edn();
    $(_$_c406[12])[_$_c406[11]] = gif[2];
    _gs = 2;
    for (var _0x1AAFB = 0; _0x1AAFB < Y; _0x1AAFB++) {
        for (var _0x1AAD6 = 0; _0x1AAD6 < X; _0x1AAD6++) {
            if (d31[_0x1AAFB][_0x1AAD6][0] == 0) {
                if (d31[_0x1AAFB][_0x1AAD6][1] == 1) {
                    ctx[_$_c406[10]](gfs[3], _0x1AAD6 * 25, _0x1AAFB * 25)
                } else {}
            } else {
                if (d31[_0x1AAFB][_0x1AAD6][0] == 2) {
                    if (d31[_0x1AAFB][_0x1AAD6][1] == 0) {
                        h_f[f_n++] = setInterval(function(_0x1AAD6, _0x1AAFB) {
                            var _0x1ADDF = 0;
                            return function() {
                                ctx[_$_c406[10]](_0x1ADDF == 0 ? gfb[d31[_0x1AAFB][_0x1AAD6][2]] : gfs[1], _0x1AAD6 * 25, _0x1AAFB * 25);
                                _0x1ADDF = !_0x1ADDF
                            }
                        }(_0x1AAD6, _0x1AAFB), 800)
                    } else {}
                }
            }
        }
    }
}
function o0o(_0x1AAD6, _0x1AAFB) {
    d31[_0x1AAFB][_0x1AAD6][0] = 1;
    if (d31[_0x1AAFB][_0x1AAD6][1] == 1) {
        ctx[_$_c406[10]](gfs[2], _0x1AAD6 * 25, _0x1AAFB * 25);
        return 1
    } else {
        ctx[_$_c406[10]](gfb[d31[_0x1AAFB][_0x1AAD6][2]], _0x1AAD6 * 25, _0x1AAFB * 25);
        if (d31[_0x1AAFB][_0x1AAD6][2] == 0) {
            for (var _0x1ABFE = 0; _0x1ABFE < C[_$_c406[0]]; _0x1ABFE++) {
                var _0x1AB8F = _0x1AAFB + C[_0x1ABFE][0];
                var _0x1AB6A = _0x1AAD6 + C[_0x1ABFE][1];
                if (_0x1AB8F >= 0 && _0x1AB8F < Y && _0x1AB6A >= 0 && _0x1AB6A < X) {
                    if (d31[_0x1AB8F][_0x1AB6A][0] == 0) {
                        o0o(_0x1AB6A, _0x1AB8F)
                    }
                }
            }
        }
        ;RB--;
        if (RB == 0) {
            $(_$_c406[12])[_$_c406[11]] = gif[1];
            _gs = 1;
            _edn();
            for (var _0x1AA42 = 0; _0x1AA42 < Y; _0x1AA42++) {
                for (var _0x1AC23 = 0; _0x1AC23 < X; _0x1AC23++) {
                    if (d31[_0x1AA42][_0x1AC23][0] == 0 && d31[_0x1AA42][_0x1AC23][1] == 1) {
                        M5k(_0x1AC23, _0x1AA42)
                    }
                }
            }
            ;up()
        }
        ;return 0
    }
}
var _v;
function up() {
    if (_v > 3 && _t0 < 10) {
        return
    }
    ;var _0x1AF51 = un();
    if (_0x1AF51 == null) {
        getuid();
        return
    }
    ;var _0x1AF76 = _v + _$_c406[13] + _0x1AF51 + _$_c406[14] + _t0;
    if (_v > 3) {
        _0x1AF76 += _$_c406[14] + X + _$_c406[14] + Y + _$_c406[14] + M
    }
    ;gets(_$_c406[15], _0x1AF76, function(_0x1AE98) {})
}
function DS(_0x1AD01) {
    var _0x1AD26 = $(_0x1AD01);
    var _0x1AD70 = _0x1AD26[_$_c406[17]](_$_c406[16]);
    var _0x1AD4B = 3;
    return function(_0x1ADBA) {
        if (_0x1ADBA < 10) {
            _0x1ADBA = _$_c406[18] + _0x1ADBA
        } else {
            if (_0x1ADBA < 100) {
                _0x1ADBA = _$_c406[19] + _0x1ADBA
            } else {
                _0x1ADBA = _0x1ADBA[_$_c406[20]]()
            }
        }
        ;var _0x1AD95 = _0x1ADBA[_$_c406[0]];
        if (_0x1AD95 != _0x1AD4B) {
            _0x1AD26[_$_c406[21]] = _0x1AD95 * 13;
            _0x1AD4B = _0x1AD95
        }
        ;for (var _0x1AA42 = 0; _0x1AA42 < _0x1AD95; _0x1AA42++) {
            _0x1AD70[_$_c406[10]](gfd[parseInt(_0x1ADBA[_$_c406[22]](_0x1AA42))], _0x1AA42 * 13, 0)
        }
    }
}
function _gnt() {
    for (var _0x1AAFB = 0; _0x1AAFB < Y; _0x1AAFB++) {
        d31[_0x1AAFB] = [];
        for (var _0x1AAD6 = 0; _0x1AAD6 < X; _0x1AAD6++) {
            d31[_0x1AAFB][_0x1AAD6] = [0, 0, 0]
        }
    }
    ;_gs = 0;
    for (var _0x1AC6D = 0; _0x1AC6D < M; _0x1AC6D++) {
        do {
            rx = _r39(X);
            ry = _r39(Y)
        } while (d31[ry][rx][1] == 1);
        ;d31[ry][rx][1] = 1;
        _am8(ry, rx)
    }
    ;RM = M;
    RB = X * Y - M
}
var h_f = [];
var f_n = 0;
function _45() {
    clearInterval(he);
    he = 0;
    for (var _0x1AA42 = 0; _0x1AA42 < f_n; _0x1AA42++) {
        clearInterval(h_f[_0x1AA42])
    }
    ;_gnt();
    _d46();
    _x0 = -1;
    _y0 = -1;
    sopen()
}
var _mp1, _mp2;
var paf = $(_$_c406[23]);
var ctx = paf[_$_c406[17]](_$_c406[16]);
var crm = DS(_$_c406[24]);
var ces = DS(_$_c406[25]);
var _x0;
var _y0;
function _65(_0x1AA67) {
    if (_tch || _gs != 0) {
        return
    }
    ;var _0x1AA8C = paf[_$_c406[26]]();
    var _0x1AAD6 = Math[_$_c406[29]]((_0x1AA67[_$_c406[27]] - _0x1AA8C[_$_c406[28]]) / 25);
    var _0x1AAFB = Math[_$_c406[29]]((_0x1AA67[_$_c406[30]] - _0x1AA8C[_$_c406[31]]) / 25);
    _x0 = _0x1AAD6;
    _y0 = _0x1AAFB;
    var _0x1AAB1 = d31[_0x1AAFB][_0x1AAD6][0];
    if (he == 0 && _0x1AAB1 == 0) {
        _es()
    }
    ;if (_0x1AA67[_$_c406[32]] == 2) {
        if (_mp2 != 1) {
            if (_0x1AAB1 == 1) {
                c67(_0x1AAD6, _0x1AAFB)
            } else {
                M5k(_0x1AAD6, _0x1AAFB)
            }
        }
    } else {
        if (_mp1 != 1) {
            if (_0x1AAB1 == 1) {
                c67(_0x1AAD6, _0x1AAFB)
            } else {
                if (_0x1AAB1 == 2) {
                    M5k(_0x1AAD6, _0x1AAFB)
                } else {
                    if (o0o(_0x1AAD6, _0x1AAFB)) {
                        f17()
                    }
                }
            }
        }
    }
}
function _67(_0x1AA67) {
    if (_tch || _gs != 0) {
        return
    }
    ;var _0x1AA8C = paf[_$_c406[26]]();
    var _0x1AAD6 = Math[_$_c406[29]]((_0x1AA67[_$_c406[27]] - _0x1AA8C[_$_c406[28]]) / 25);
    var _0x1AAFB = Math[_$_c406[29]]((_0x1AA67[_$_c406[30]] - _0x1AA8C[_$_c406[31]]) / 25);
    var _0x1AAB1 = d31[_0x1AAFB][_0x1AAD6][0];
    if (_0x1AA67[_$_c406[32]] == 2) {
        if (_mp2 != null) {
            if (_mp2 == 2 && _0x1AAD6 == _x0 && _0x1AAFB == _y0) {
                return
            }
            ;if (_0x1AAB1 == 1) {
                c67(_0x1AAD6, _0x1AAFB)
            } else {
                M5k(_0x1AAD6, _0x1AAFB)
            }
        }
    } else {
        if (_mp1 != null) {
            if (_mp1 == 2 && _0x1AAD6 == _x0 && _0x1AAFB == _y0) {
                return
            }
            ;if (_0x1AAB1 == 1) {
                c67(_0x1AAD6, _0x1AAFB)
            } else {
                if (_0x1AAB1 == 2) {
                    M5k(_0x1AAD6, _0x1AAFB)
                } else {
                    if (o0o(_0x1AAD6, _0x1AAFB)) {
                        f17()
                    }
                }
            }
        }
    }
}
function _77(_0x1AA67) {
    if (_gs != 0) {
        return
    }
    ;_tch = 1;
    var _0x1AA8C = paf[_$_c406[26]]();
    var _0x1AAD6 = Math[_$_c406[29]]((_0x1AA67[_$_c406[33]][0][_$_c406[27]] - _0x1AA8C[_$_c406[28]]) / 25);
    var _0x1AAFB = Math[_$_c406[29]]((_0x1AA67[_$_c406[33]][0][_$_c406[30]] - _0x1AA8C[_$_c406[31]]) / 25);
    if (d31[_0x1AAFB][_0x1AAD6][0] == 1) {
        c67(_0x1AAD6, _0x1AAFB)
    } else {
        _hl = setTimeout(function() {
            return lgt(_0x1AAD6, _0x1AAFB)
        }, 340)
    }
}
var _hl;
function lgt(_0x1AAD6, _0x1AAFB) {
    if (_opn == 1 && _tpn == null) {
        return
    }
    ;_tch = 3;
    var _0x1AAB1 = d31[_0x1AAFB][_0x1AAD6][0];
    if (he == 0 && _0x1AAB1 == 0) {
        _es()
    }
    ;if (_tpn == null) {
        if (_0x1AAB1 == 2) {
            crm(++RM)
        }
        ;if (o0o(_0x1AAD6, _0x1AAFB)) {
            f17()
        }
    } else {
        M5k(_0x1AAD6, _0x1AAFB)
    }
}
var tc0 = 0;
function _75(_0x1AA67) {
    if (_tch == 1) {
        var _0x1AA8C = paf[_$_c406[26]]();
        var _0x1AAD6 = Math[_$_c406[29]]((_0x1AA67[_$_c406[34]][0][_$_c406[27]] - _0x1AA8C[_$_c406[28]]) / 25);
        var _0x1AAFB = Math[_$_c406[29]]((_0x1AA67[_$_c406[34]][0][_$_c406[30]] - _0x1AA8C[_$_c406[31]]) / 25);
        var _0x1AAB1 = d31[_0x1AAFB][_0x1AAD6][0];
        if (he == 0 && _0x1AAB1 == 0) {
            _es()
        }
        ;if (_0x1AAB1 != 1) {
            if (_tpn == null) {
                var _0x1AB20 = Date[_$_c406[35]]();
                var _0x1AB45;
                if (_0x1AAD6 == _x0 && _0x1AAFB == _y0) {
                    _0x1AB45 = _0x1AB20 - tc0
                } else {
                    _x0 = _0x1AAD6;
                    _y0 = _0x1AAFB;
                    tc0 = Date[_$_c406[35]]();
                    _0x1AB45 = 1000
                }
                ;if (_opn == 1 && _0x1AB45 < 400 && _0x1AAB1 == 0) {
                    if (o0o(_0x1AAD6, _0x1AAFB)) {
                        f17()
                    }
                } else {
                    M5k(_0x1AAD6, _0x1AAFB)
                }
            } else {
                if (_0x1AAB1 != 2) {
                    if (o0o(_0x1AAD6, _0x1AAFB)) {
                        f17()
                    }
                }
            }
        }
        ;_tch = 3;
        clearTimeout(_hl);
        tc0 = _0x1AB20
    }
    ;if (_0x1AA67[_$_c406[36]]) {
        _0x1AA67[_$_c406[36]]()
    } else {
        window[_$_c406[38]][_$_c406[37]] = false
    }
}
function _d46() {
    _edn();
    he = 0;
    _tch = 0;
    _mp1 = localStorage[_$_c406[40]](_$_c406[39]);
    _mp2 = localStorage[_$_c406[40]](_$_c406[41]);
    _tpn = localStorage[_$_c406[40]](_$_c406[42]);
    _opn = localStorage[_$_c406[40]](_$_c406[43]);
    var _0x1AC48 = X * 25;
    $(_$_c406[45])[_$_c406[44]][_$_c406[21]] = _0x1AC48 + 4 + _$_c406[46];
    paf[_$_c406[21]] = _0x1AC48;
    paf[_$_c406[47]] = Y * 25;
    $(_$_c406[12])[_$_c406[11]] = gif[0];
    for (var _0x1AA42 = 0; _0x1AA42 < X; _0x1AA42++) {
        for (var _0x1AC23 = 0; _0x1AC23 < Y; _0x1AC23++) {
            ctx[_$_c406[10]](gfs[0], _0x1AA42 * 25, _0x1AC23 * 25)
        }
    }
    ;paf[_$_c406[48]] = function(_0x1AA67) {
        _65(_0x1AA67)
    }
    ;
    paf[_$_c406[49]] = function(_0x1AA67) {
        _67(_0x1AA67)
    }
    ;
    ;;paf[_$_c406[50]] = function(_0x1AA67) {
        _77(_0x1AA67)
    }
    ;
    paf[_$_c406[51]] = function() {
        _tch = 2;
        clearTimeout(_hl)
    }
    ;
    paf[_$_c406[52]] = function(_0x1AA67) {
        _75(_0x1AA67)
    }
    ;
    crm(RM);
    ces(0)
}
document[_$_c406[53]] = function() {
    return false
}
;
document[_$_c406[54]] = function() {
    return false
}
;
function sopen() {
    var _0x1AEBD = 0;
    var _0x1AEE2 = -1
      , _0x1AF07 = -1;
    for (var _0x1AA42 = 0; _0x1AA42 < X; _0x1AA42++) {
        var _0x1AF2C = 0;
        for (var _0x1AC23 = 0; _0x1AC23 < Y; _0x1AC23++) {
            if (d31[_0x1AC23][_0x1AA42][2] == 0 && d31[_0x1AC23][_0x1AA42][1] == 0) {
                _0x1AF2C++
            } else {
                if (_0x1AF2C > _0x1AEBD) {
                    _0x1AEBD = _0x1AF2C;
                    _0x1AEE2 = _0x1AA42;
                    _0x1AF07 = _0x1AC23 - 1
                }
                ;_0x1AF2C = 0
            }
        }
        ;if (_0x1AF2C > _0x1AEBD) {
            _0x1AEBD = _0x1AF2C;
            _0x1AEE2 = _0x1AA42;
            _0x1AF07 = _0x1AC23 - 1
        }
    }
    ;if (_0x1AEE2 >= 0 && _0x1AF07 >= 0) {
        o0o(_0x1AEE2, _0x1AF07)
    }
}
function _r39(_0x1AC92) {
    return Math[_$_c406[29]](Math[_$_c406[55]]() * _0x1AC92)
}
function _edn() {
    if (he > 0) {
        clearInterval(he);
        _t0 = Date[_$_c406[35]]() - _t0;
        ces(parseInt(_t0 / 1000));
        _t0 = Math[_$_c406[56]](_t0 / 100)
    } else {
        _t0 = 0
    }
    ;he = -1
}
var he = -1;
var _t0;
var e33;
function _es() {
    _t0 = Date[_$_c406[35]]();
    e33 = 0;
    he = setInterval(function() {
        ces(++e33)
    }, 1000)
}
var _tpn;
var _opn;
var _tch;
_h = window[_$_c406[58]][_$_c406[57]];
var RM;
var RB;
function M5k(_0x1AAD6, _0x1AAFB) {
    if (d31[_0x1AAFB][_0x1AAD6][0] == 0) {
        if (RM > 0) {
            ctx[_$_c406[10]](gfs[1], _0x1AAD6 * 25, _0x1AAFB * 25);
            d31[_0x1AAFB][_0x1AAD6][0] = 2;
            RM--
        }
    } else {
        if (d31[_0x1AAFB][_0x1AAD6][0] == 2) {
            RM++;
            ctx[_$_c406[10]](gfs[0], _0x1AAD6 * 25, _0x1AAFB * 25);
            d31[_0x1AAFB][_0x1AAD6][0] = 0
        }
    }
    ;crm(RM)
}
var df5 = localStorage[_$_c406[40]](_$_c406[59]);
if (df5 == null) {
    $(_$_c406[61])[_$_c406[60]] = 15;
    $(_$_c406[62])[_$_c406[60]] = 15;
    $(_$_c406[63])[_$_c406[60]] = 20
} else {
    var cv = df5[_$_c406[65]](_$_c406[64]);
    $(_$_c406[61])[_$_c406[60]] = cv[0];
    $(_$_c406[62])[_$_c406[60]] = cv[1];
    $(_$_c406[63])[_$_c406[60]] = cv[2]
}
;function start() {
    _123(localStorage[_$_c406[40]](_$_c406[66]));
    on();
    sid();
    ad()
}
function un() {
    var _0x1AF51 = localStorage[_$_c406[40]](_$_c406[67]);
    if (_0x1AF51 != null) {
        var _0x1AE98 = _0x1AF51[_$_c406[65]](_$_c406[68]);
        if (_0x1AE98[_$_c406[0]] > 1) {
            _0x1AF51 = _0x1AE98[0];
            localStorage[_$_c406[69]](_$_c406[67], _0x1AF51)
        }
        ;if (_0x1AF51[_$_c406[0]] < 2 || isNaN(_0x1AF51)) {
            _0x1AF51 = null
        }
    }
    ;return _0x1AF51
}
function sid() {
    $(_$_c406[67])[_$_c406[70]] = un()
}
function on() {
    gets(_$_c406[71], un(), function(_0x1AE98) {
        $(_$_c406[73])[_$_c406[72]] = _0x1AE98
    });
    setTimeout(on, 180000)
}
function getuid() {
    gets(_$_c406[74], null, function(_0x1AE98) {
        localStorage[_$_c406[69]](_$_c406[67], _0x1AE98);
        up();
        sid()
    })
}
function _123(_0x1A9F8) {
    var _0x1A9D3 = document[_$_c406[76]][_$_c406[75]];
    var _0x1A9AE = document[_$_c406[76]][_$_c406[77]];
    if (_0x1A9F8 == null) {
        _0x1A9F8 = _0x1A9D3 < 560 ? 1 : 2
    }
    ;_v = _0x1A9F8;
    $(_$_c406[79])[_$_c406[44]][_$_c406[78]] = _0x1A9F8 == 5 ? _$_c406[80] : _$_c406[81];
    if (_0x1A9F8 == 1) {
        X = 9;
        Y = 9;
        M = 10
    } else {
        if (_0x1A9F8 == 2) {
            X = 16;
            Y = 16;
            M = 40
        } else {
            if (_0x1A9F8 == 3) {
                M = 99;
                if (_0x1A9D3 >= _0x1A9AE) {
                    X = 30;
                    Y = 16
                } else {
                    X = 16;
                    Y = 30
                }
            } else {
                if (_0x1A9F8 == 4) {
                    X = parseInt((_0x1A9D3 - 18) / 25);
                    Y = parseInt((_0x1A9AE - 54) / 25);
                    var _0x1AA1D = X * Y;
                    if (_0x1AA1D >= 480) {
                        M = _0x1AA1D * 0.20625
                    } else {
                        M = _0x1AA1D * _0x1AA1D / 5760 + _0x1AA1D / 8
                    }
                    ;M = parseInt(M)
                } else {
                    if (_0x1A9F8 == 5) {
                        X = $(_$_c406[61])[_$_c406[60]];
                        Y = $(_$_c406[62])[_$_c406[60]];
                        M = $(_$_c406[63])[_$_c406[60]];
                        if (M > X * Y) {
                            M = X * Y
                        }
                    } else {
                        return
                    }
                }
            }
        }
    }
    ;_45();
    localStorage[_$_c406[69]](_$_c406[66], _0x1A9F8);
    $(_$_c406[82])[_$_c406[57]] = _$_c406[83] + _v
}
function udf() {
    _123(5);
    localStorage[_$_c406[69]](_$_c406[59], $(_$_c406[61])[_$_c406[60]] + _$_c406[64] + $(_$_c406[62])[_$_c406[60]] + _$_c406[64] + $(_$_c406[63])[_$_c406[60]])
}
