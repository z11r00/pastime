var normal = document.getElementById('normal');
!function() {
    var imgs = ['images/light.png', 'images/btnselect2.png', 'images/btnselect2.png', 'images/btnselect2.png', 'images/btnselect1.png', 'images/btnselect.png', 'images/bg.png', 'images/machine.png', 'images/machine_b.png', 'images/wat.png', 'images/star1.png', 'images/star2.png', 'images/spatter.png', 'images/replay.png', 'images/plates.png', 'images/next.png', 'images/dot.png', 'images/dead.png', 'images/btn1.png', 'images/btn.png', 'images/btn3.png', 'images/menu.png', 'images/terminal.png'];
    resourceDir = '';
    function loadImg(urls, progress) {
        var loadCount = 0;
        var loaded = function() {
            ++loadCount;
            if (progress)
                progress(urls.length, loadCount, this);
        };
        for (var i = 0; i < urls.length; ++i) {
            if (!urls[i]) {
                loaded();
                return;
            }
            var img = new Image();
            img.onload = loaded;
            img.onabort = loaded;
            img.onerror = loaded;
            img.src = resourceDir + urls[i];
        }
    }
    loadImg(imgs, function(n, i, img) {
        if (i != n) {
            return;
        } else {}
    })
}();
var background = document.getElementById('background');
var bgm = document.getElementById('bgm');
var box = document.getElementsByClassName('box');
var musicLoad = false;
bgm.addEventListener('canplaythrough', function() {
    if (!musicLoad) {
        musicLoad = true;
        for (var i = 1; i < box.length; i++) {
            box[i].style.display = 'none';
        }
        if (musicLoad) {
            indexFn();
        }
    }
})
var highest = location.hash.substr(1).split('/')[3] || 1;
var max = 0;
var arrImg = ['images/white.png', 'images/red.png', 'images/green.png', 'images/blue.png']
function indexFn() {
    var index = document.getElementsByClassName('index')[0];
    var main = document.getElementsByClassName('main')[0];
    index.style.display = 'block';
    var mode = location.hash ? location.hash.substr(1).split('/')[0] : 0;
    var charact = location.hash ? location.hash.substr(1).split('/')[1] : 'whiteC';
    var levels = location.hash ? location.hash.substr(1).split('/')[2] : '1';
    var character = index.getElementsByClassName('character')[0];
    var characters = character.getElementsByTagName('span');
    normal.play();
    for (var i = 0; i < characters.length; i++) {
        characters[i].style.cssText = '';
        if (characters[i].className.indexOf(charact) != -1) {
            var prev = characters[i];
        }
        if (characters[i].className.indexOf(charact) != -1) {
            characters[i].parentNode.classList.add('selected');
        }
        characters[i].onOff = true;
        characters[i].onmouseenter = function() {
            this.parentNode.classList.add('selected');
        }
        characters[i].onmouseleave = function() {
            this.parentNode.classList.remove('selected');
            prev.parentNode.classList.add('selected');
        }
        characters[i].onclick = function() {
            if (this.onOff) {
                this.onOff = false;
                charact = this.className;
                if (prev) {
                    prev.parentNode.classList.remove('selected');
                }
                prev = this;
                this.parentNode.classList.add('selected');
                var t = this.offsetTop;
                var n = -30;
                var that = this;
                that.timer = setInterval(function() {
                    that.style.top = t + (n++) + 'px';
                    if (that.offsetTop == 28) {
                        clearInterval(that.timer);
                        that.onOff = true;
                    }
                }, 10);
            }
        }
    }
    indexLogo();
    var btns = index.getElementsByClassName('btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
        btns[i].num = i;
        btns[i].onmouseenter = function() {
            this.classList.add('selected');
        }
        btns[i].onmouseleave = function() {
            this.classList.remove('selected');
        }
        btns[0].onclick = function() {
            if (levels < 1) {
                levels = 1;
            }
            location.hash = '0/' + charact + '/' + levels + '/' + highest;
            trans(index, levelFn);
        }
        btns[1].onclick = function() {
            mode = this.num;
            location.hash = '1/' + charact + '/' + levels + '/' + highest;
            trans(index, mainFn);
        }
    }
    var newer = document.getElementsByClassName('new')[0];
    newer.onmouseenter = function() {
        this.classList.add('selected');
    }
    newer.onmouseleave = function() {
        this.classList.remove('selected');
    }
    newer.onclick = function() {
        mode = 2;
        location.hash = mode + '/' + charact + '/0' + '/1';
        trans(index, mainFn);
    }
}
function indexLogo() {
    var index = document.getElementsByClassName('index')[0];
    var toRight = index.getElementsByClassName('toRight')[0];
    var toLeft = index.getElementsByClassName('toLeft')[0];
    var spatter = index.getElementsByClassName('spatter')[0];
    var timer = null;
    moving({
        obj: toRight,
        attrs: {
            left: 200
        },
        duration: 700,
        callBack: function() {
            bossMove();
        }
    })
    setTimeout(function() {
        moving({
            obj: toLeft,
            attrs: {
                right: 255
            },
            duration: 500
        })
    }, 1500)
    function bossMove() {
        var boss = document.createElement('div');
        spatter.style.cssText = '';
        index.appendChild(boss);
        boss.className = 'boss';
        var n = 1;
        timer = setInterval(function() {
            starBlack(boss, index);
        }, 50)
        fn();
        function fn() {
            n++;
            moving({
                obj: boss,
                attrs: {
                    top: 20,
                    left: 300 + 60 * n
                },
                duration: 200,
                callBack: function() {
                    n++;
                    moving({
                        obj: boss,
                        attrs: {
                            top: 80,
                            left: 300 + 60 * n
                        },
                        duration: 200,
                        callBack: function() {
                            if (n <= 8) {
                                fn();
                            } else {
                                index.removeChild(boss);
                                clearInterval(timer);
                                spatter.style.display = 'block';
                            }
                        }
                    })
                }
            })
        }
    }
    function starBlack(box, father) {
        var div = document.createElement('div');
        var l = box.offsetLeft;
        var t = Math.round(Math.random() * 30) + box.offsetTop;
        div.style.left = l + 'px';
        div.style.top = t + 'px';
        div.className = 'bubble';
        var x = -6;
        var size = Math.round(Math.random() * 20);
        div.style.width = size;
        div.style.height = size;
        div.style.borderRadius = '50%';
        father.appendChild(div);
        div.timer = setInterval(function() {
            div.style.left = (l += x) + 'px';
            div.style.width = (size -= 1) + 'px';
            div.style.height = (size -= 1) + 'px';
            if (size <= 0) {
                clearInterval(div.timer);
                father.removeChild(div);
            }
        }, 80)
    }
}
function victoryFn() {
    var victory = document.getElementsByClassName('victory')[0];
    var right = document.getElementsByClassName('right')[0];
    var character = right.getElementsByClassName('character')[0];
    var stars = victory.getElementsByClassName('stars')[0];
    var plate = victory.getElementsByClassName('plate')[0];
    var menu = victory.getElementsByClassName('menu')[0];
    var btns = victory.getElementsByClassName('btns')[0];
    var ink = right.getElementsByClassName('ink')[0];
    var i = ink.children[0];
    var gulu = document.getElementById('gulu');
    i.style.cssText = '';
    ink.style.cssText = '';
    plate.style.cssText = '';
    stars.innerHTML = '';
    character.style.cssText = '';
    victory.style.display = 'block';
    chooseCharacter(character);
    btnsBack(victory);
    setTimeout(function() {
        moving({
            obj: character,
            attrs: {
                top: 327,
                width: 0,
                height: 0,
                left: 397
            },
            duration: 1000,
            callBack: function() {
                plate.style.opacity = 1;
                stars.timer = setInterval(function() {
                    var urls = ['images/star1.png', 'images/star2.png'];
                    var ii = document.createElement('i');
                    stars.appendChild(ii);
                    var pos = {};
                    pos.left = Math.round(Math.random() * 1800 - 400);
                    pos.top = Math.round(Math.random() * 950 - 300);
                    pos.size = Math.round(Math.random() * 70);
                    moving({
                        obj: ii,
                        attrs: {
                            left: pos.left,
                            top: pos.top,
                            width: pos.size,
                            height: pos.size
                        },
                        duration: 1800,
                        fx: 'easeIn',
                        callBack: function() {
                            stars.removeChild(this);
                        }
                    });
                    ii.style.zIndex = Math.round(Math.random() * 4);
                    ii.style.background = 'url(' + urls[Math.round(Math.random())] + ') no-repeat center';
                    ii.style.backgroundSize = '100%';
                    ii.style.transform = 'rotate(540deg)';
                }, 50);
                replayNext(victory);
            }
        });
        setTimeout(function() {
            moving({
                obj: ink,
                attrs: {
                    height: 35
                },
                duration: 1200,
                callBack: function() {
                    gulu.play();
                    plate.style.zIndex = 80;
                    i.style.display = 'block';
                    var n = -12;
                    var m = 0;
                    i.timer = setInterval(function() {
                        if (i.offsetHeight > 53) {
                            m = -3;
                        }
                        if (i.offsetLeft > 40) {
                            n = -12;
                        }
                        i.style.height = i.offsetHeight + (m += 0.3) + 'px';
                        i.style.left = i.offsetLeft + (n++) + 'px';
                    }, 200);
                }
            });
        }, 500);
    }, 1000);
    btns.addEventListener('click', function() {
        clearInterval(stars.timer);
        clearInterval(i.timer);
        gulu.pause();
    }, false);
    menu.addEventListener('click', function() {
        clearInterval(stars.timer);
        clearInterval(i.timer);
        gulu.pause();
    }, false);
}
function chooseCharacter(obj) {
    var hash = location.hash ? location.hash.substr(1).split('/')[1] : 'whiteC';
    switch (hash) {
    case 'whiteC':
        obj.style.background = 'url(' + arrImg[0] + ') no-repeat center'
        break;
    case 'redC':
        obj.style.background = 'url(' + arrImg[1] + ') no-repeat center'
        break;
    case 'greenC':
        obj.style.background = 'url(' + arrImg[2] + ') no-repeat center'
        break;
    case 'blueC':
        obj.style.background = 'url(' + arrImg[3] + ') no-repeat center'
        break;
    }
}
function replayNext(obj, fn) {
    var replay = obj.getElementsByClassName('replay')[0];
    var next = obj.getElementsByClassName('next')[0];
    var menu = obj.getElementsByClassName('menu')[0];
    var btn = replay.parentNode;
    var progress = obj.getElementsByClassName('progress')[0];
    var hash = location.hash.substr(1).split('/');
    next.style.display = (hash[2] == hash[3] || hash[0] != 0) ? 'none' : '';
    moving({
        obj: btn,
        attrs: {
            right: 85
        },
        duration: 400
    });
    moving({
        obj: menu,
        attrs: {
            right: 28
        },
        duration: 400
    });
    moving({
        obj: progress,
        attrs: {
            right: 120
        },
        duration: 400
    });
    replay.onmouseenter = function() {
        this.classList.add('selected');
    }
    next.onmouseenter = function() {
        this.classList.add('selected');
    }
    replay.onmouseleave = function() {
        this.classList.remove('selected');
    }
    next.onmouseleave = function() {
        this.classList.remove('selected');
    }
    next.onclick = function() {
        var l = hash[2];
        if (hash[2] < hash[3]) {
            hash[2]++;
            var addr = hash.slice(0, -1).join('/') + '/' + highest;
            location.hash = addr;
            trans(obj, mainFn);
        }
    }
    replay.onclick = function() {
        var addr = hash.slice(0, -1).join('/');
        location.hash = addr;
        trans(obj, mainFn);
    }
    menu.onclick = function() {
        trans(obj, indexFn);
    }
}
function trans(obj, fn) {
    var transition = document.getElementsByClassName('transiton')[0];
    transition.style.left = background.offsetLeft + 'px';
    transition.style.display = 'block';
    transition.children[0].classList.add('left');
    transition.children[4].classList.add('right');
    for (var i = 1; i < transition.children.length / 2; i++) {
        transition.children[i].classList.add('up');
    }
    for (var i = transition.children.length / 2 + 1; i < transition.children.length; i++) {
        transition.children[i].classList.add('down');
    }
    changePage(obj, fn);
    setTimeout(function() {
        transition.style.display = 'none';
        for (var i = 0; i < transition.children.length; i++) {
            transition.children[i].className = '';
        }
    }, 2000);
}
function changePage(obj, fn) {
    setTimeout(function() {
        obj.style.display = 'none';
        fn();
    }, 1000)
}
function changePageTwo(obj, fn) {
    obj.style.display = 'none';
    fn();
}
function deadFn() {
    var dead = document.getElementsByClassName('dead')[0];
    var bg = dead.getElementsByClassName('bg')[0];
    var monster = dead.getElementsByClassName('monster')[0];
    var ems = Array.from(monster.getElementsByTagName('em'));
    var btns = dead.getElementsByClassName('btns')[0];
    var menu = dead.getElementsByClassName('menu')[0];
    var eyes = dead.getElementsByTagName('audio')[0];
    var timer = null;
    monster.classList.toggle('moveDown');
    bg.style.cssText = '';
    ems[0].style.cssText = '';
    ems[1].style.cssText = '';
    dead.style.display = 'block';
    btnsBack(dead);
    timer = setInterval(function() {
        ems.forEach(function(a) {
            moving({
                obj: a,
                attrs: {
                    height: 0,
                    top: 110
                },
                duration: 50,
                callBack: function() {
                    eyes.play();
                    moving({
                        obj: a,
                        attrs: {
                            height: 10,
                            top: 100
                        },
                        duration: 50
                    });
                }
            });
        })
    }, 2000);
    moving({
        obj: bg,
        attrs: {
            width: 3500,
            height: 2400,
            left: -1350,
            bottom: -1000
        },
        duration: 1800,
        callBack: function() {
            this.style.borderRadius = 0;
            this.style.left = 0;
            this.style.top = 0;
            this.style.width = '1156px';
            this.style.height = '650px';
            monster.classList.add('moveDown');
            replayNext(dead);
        }
    });
    btns.addEventListener('click', function() {
        clearInterval(timer);
    }, false);
    menu.addEventListener('click', function() {
        clearInterval(timer);
    }, false);
}
function levelFn() {
    var level = document.getElementsByClassName('level')[0];
    level.style.display = 'block';
    var choose = level.getElementsByClassName('chooseLevel')[0];
    var theLevel = choose.getElementsByTagName('div');
    var hash = location.hash ? location.hash.substr(1).split('/') : null;
    var highest = hash ? hash[3] : 1;
    var menu = level.getElementsByClassName('menu')[0];
    for (var i = 0; i < highest; i++) {
        theLevel[i].innerHTML = i + 1;
        theLevel[i].className = 'levelOpen';
        theLevel[i].onclick = function() {
            location.hash = hash[0] + '/' + hash[1] + '/' + this.innerHTML + '/' + highest;
            trans(level, mainFn);
        }
    }
    menu.onclick = function() {
        trans(level, indexFn);
    }
}
function btnsBack(obj) {
    var menu = obj.getElementsByClassName('menu')[0];
    var replay = obj.getElementsByClassName('replay')[0];
    var btn = replay.parentNode;
    var progress = obj.getElementsByClassName('progress')[0];
    var hash = location.hash.substr(1).split('/');
    if (hash[0] == '2' && hash[4] != '100%') {
        progress.innerHTML = '加油!';
    } else if (hash[0] == '2' && hash[4] == '100%') {
        progress.innerHTML = '棒!';
    } else if (hash[0] == '1') {
        progress.innerHTML = hash[4] + '个';
    } else {
        progress.innerHTML = hash[4];
    }
    menu.style.cssText = '';
    btn.style.cssText = '';
    progress.style.cssText = '';
}
function mainFn() {
    var main = document.getElementsByClassName('main')[0];
    var content = document.getElementById('content');
    var menu = main.getElementsByClassName('mainMenu')[0];
    normal.pause();
    content.innerHTML = '';
    content.style.cssText = '';
    menu.style.display = '';
    main.style.display = "block";
    menu.onclick = function() {
        trans(main, indexFn);
    }
    var nums = location.hash.substr(1).split('/')[2];
    var charc = location.hash.substr(1).split('/')[1];
    var hash0 = location.hash.substr(1).split('/')[0];
    function checkpoint(j) {
        document.onmousedown = function(ev) {
            ev.preventDefault();
        }
        var Data = data[j.num];
        if (j.pattern) {
            Data = [];
            for (var k in data) {
                if (k == '0') {
                    continue;
                }
                Data = Data.concat(data[k]);
                Data.pop();
            }
            Data.push(0);
        }
        var num = 25;
        var fre = 1;
        var objNum = 0;
        function rander(num) {
            while (objNum < num * fre) {
                var li = document.createElement('li');
                switch (Data[objNum]) {
                case 1:
                    li.innerHTML = '<div><span class="y"></span><i class="green"></i></div>';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 2:
                    li.innerHTML = '<div><span class="fire"></span><i class="red"></i></div>'
                    li.className = '_2';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 3:
                    li.innerHTML = '<div> <span class="y"></span><i class="green di_gb"></i></div><strong class="di"></strong>'
                    li.className = '_3';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 4:
                    li.innerHTML = '<div><span class="fire"></span><i class="red di_gb"></i></div><strong class="di"></strong>'
                    li.className = '_4';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 5:
                    li.innerHTML = '<div><span class="y"></span><i class="green zhong_bg"></i></div> <strong class="zhong"></strong>'
                    li.className = '_5';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 6:
                    li.innerHTML = '<div><span class="fire"></span><i class="red zhong_bg"></i></div><strong class="zhong"></strong>'
                    li.className = '_6';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 7:
                    li.innerHTML = '<div><span class="y"></span><i class="green gao_bg"></i></div> <strong class="gao"></strong>'
                    li.className = '_7';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 8:
                    li.innerHTML = '<div><span class="fire"></span><i class="red gao_bg"></i></div><strong class="gao"></strong>'
                    li.className = '_8';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 9:
                    li.innerHTML = '<div><span class="y"></span><i class="green"></i></div><div><em></em><i class="red huo_d"></i></div>'
                    li.className = '_9';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 10:
                    li.innerHTML = '<div><span class="y"></span><i></i></div><div><em></em><i class="red huo_g"></i></div>'
                    li.className = '_10';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 11:
                    li.innerHTML = '<div><span class="y"></span><i class="green zhong_bg"></i></div><strong class="zhong"></strong><div><em></em><i class="red huo_g"></i></div>'
                    li.className = '_11';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                case 0:
                    li.innerHTML = '<span></span>';
                    li.className = '_0';
                    li.style.left = objNum * 100 + 300 + 'px';
                    break;
                }
                content.append(li);
                objNum++;
                if (objNum >= Data.length) {
                    objNum = Data.length;
                    return;
                }
            }
        }
        rander(num);
        var boss = document.getElementById('boss');
        boss.style.cssText = '';
        var character = boss.getElementsByTagName('div')[0];
        j.character = j.character || 'images/white.png';
        switch (j.character) {
        case 'whiteC':
            character.style.backgroundImage = 'url(' + arrImg[0] + ')'
            break;
        case 'redC':
            character.style.backgroundImage = 'url(' + arrImg[1] + ')'
            break;
        case 'greenC':
            character.style.backgroundImage = 'url(' + arrImg[2] + ')'
            break;
        case 'blueC':
            character.style.backgroundImage = 'url(' + arrImg[3] + ')'
            break;
        }
        var explain = main.getElementsByClassName('explain')[0];
        var pattern = explain.getElementsByClassName('pattern')[0];
        var point = explain.getElementsByClassName('point')[0];
        if (j.novice) {
            pattern.innerHTML = '新手教程';
            point.innerHTML = '';
        } else if (j.pattern) {
            pattern.innerHTML = '挑战模式';
            point.innerHTML = '最高纪录：' + max;
        } else {
            pattern.innerHTML = '闯关模式';
            point.innerHTML = '第' + j.num + '关';
        }
        explain.style.cssText = '';
        var trigger = main.getElementsByClassName('trigger')[0];
        var lnk = trigger.getElementsByClassName('lnk')[0];
        trigger.style.cssText = '';
        lnk.style.cssText = '';
        var water = trigger.getElementsByClassName('water')[0];
        water.style.cssText = '';
        var space = document.getElementsByClassName('space')[0];
        space.style.cssText = '';
        var p = space.getElementsByTagName('p')[0];
        var percentage = document.getElementsByClassName('percentage')[0];
        if (j.pattern) {
            percentage.innerHTML = '0';
        } else {
            percentage.innerHTML = '0%';
        }
        var onoff = false;
        var lis = content.getElementsByTagName('li');
        var span = content.getElementsByTagName('span');
        var n = 0;
        var m = 0;
        content.style.width = Data.length * 100 + 'px';
        var ems = content.getElementsByTagName('em');
        var bgm = document.getElementById('bgm');
        var nbgm = document.getElementById('nbgm');
        var sbgm = document.getElementById('sbgm');
        var jbgm = document.getElementById('jbgm');
        var gbgm = document.getElementById('gbgm');
        var cbgm = document.getElementById('cbgm');
        var star = true;
        var down = false;
        var peng = false;
        var play = 1;
        function getHeight() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].height = getLiHeight(i);
                lis[i].style.height = lis[i].height + 'px';
                lis[i].t = lis[i].getBoundingClientRect().top;
            }
            for (var i = 0; i < span.length; i++) {
                span[i].b = parseFloat(getComputedStyle(span[i]).bottom);
            }
        }
        getHeight();
        function getLiHeight(i) {
            var h = 0;
            var span = lis[i].getElementsByTagName('span')[0];
            var strong = lis[i].getElementsByTagName('strong')[0];
            var span_h = span.getBoundingClientRect().height;
            if (strong) {
                var strong_h = strong.getBoundingClientRect().height;
                h = span_h + strong_h - 15;
            } else {
                h = span_h;
            }
            return h;
        }
        var tager = 0;
        var tagerNext = 0;
        var timer = null;
        var timer2 = null;
        function jump(obj, novice) {
            if (m >= num * fre - 10 && num * fre < Data.length) {
                fre++;
                rander(num);
                lis = content.getElementsByTagName('li');
                span = content.getElementsByTagName('span');
                ems = content.getElementsByTagName('em');
                getHeight();
            }
            for (var i = 0; i < lis.length; i++) {
                if (lis[i].offsetLeft + 100 <= -content.offsetLeft) {
                    content.removeChild(lis[0]);
                    n--;
                }
            }
            if (novice) {
                if ((lis[n + 4] && lis[n + 4].height > lis[n].height && lis[n + 4].className != '_0') || (lis[n + 3] && lis[n + 3].height > lis[n].height && lis[n + 3].className != '_0') || (lis[n + 2] && lis[n + 2].height > lis[n].height && lis[n + 2].className != '_0')) {
                    space.style.color = '#00ff00';
                    space.style.display = 'block';
                    p.innerHTML = '空格准备';
                }
                if (lis[n + 2] && lis[n + 2].height > lis[n].height) {
                    p.innerHTML = '按下空格';
                    space.style.color = '#ffb600';
                }
                if (((lis[n + 2] && lis[n + 2].height) > lis[n].height) && ((lis[n + 2] && lis[n + 2].height) < (lis[n + 3] && lis[n + 3].height))) {
                    p.innerHTML = '双击空格';
                }
                play = 1.8;
                percentage.style.display = 'none';
            } else {
                percentage.style.display = 'block';
            }
            if (onoff) {
                if (lis[n + 1].height - lis[n].height > 50) {
                    tager = lis[n].t - 50 - 100;
                    n++;
                    m++;
                    if (n >= Data.length) {
                        n = 0;
                        m = 0;
                    }
                    tagerNext = lis[n].t - 50;
                    timer = setInterval(function() {
                        move({
                            obj: obj,
                            speedTop: 8.3,
                            tagMaxTop: -((m - 1) * 100) - 50,
                            speedBottom: 2,
                            tagMaxBottom: -m * 100,
                            boardspeed: 3.1,
                            callback: function() {
                                jump(obj, novice)
                            }
                        })
                    }, 10 * play)
                } else {
                    tager = lis[n].t - 50 - 100;
                    n += 2;
                    m += 2;
                    if (n >= Data.length) {
                        n = 0;
                        m = 0;
                    }
                    tagerNext = lis[n].t - 50;
                    if (tagerNext < tager + 79) {
                        peng = true;
                    }
                    down = false;
                    timer = setInterval(function() {
                        move({
                            obj: obj,
                            speedTop: 7.3,
                            tagMaxTop: -((m - 1) * 100),
                            speedBottom: Math.abs(tager - tagerNext) / 15,
                            tagMaxBottom: -m * 100,
                            boardspeed: 3.1 * 2,
                            callback: function() {
                                jump(obj, novice)
                            }
                        })
                    }, 10 * play)
                }
            } else {
                var old = lis[n];
                n++;
                m++;
                if (n >= Data.length) {
                    n = 0;
                    m = 0;
                }
                var New = lis[n];
                if (New > old) {
                    tager = old.t - 50 - 60;
                    tagerNext = old.t - 50;
                } else {
                    tager = old.t - 50 - 60;
                    if (n == lis.length - 1) {
                        tagerNext = 410;
                    } else {
                        tagerNext = New.t - 50;
                    }
                }
                down = false;
                timer = setInterval(function() {
                    move({
                        obj: obj,
                        speedTop: 5,
                        tagMaxTop: -((m - 1) * 100) - 50,
                        speedBottom: Math.abs(tager - tagerNext) / 15,
                        tagMaxBottom: -m * 100,
                        boardspeed: 3.1,
                        callback: function() {
                            jump(obj, novice)
                        }
                    })
                }, 10 * play)
            }
        }
        document.onkeydown = function(ev) {
            if (ev.keyCode == 32) {
                if (boss.style.display == 'block') {
                    menu.style.display = 'none';
                    if (star) {
                        star = false;
                        var timer = setInterval(function() {
                            var l = trigger.offsetLeft;
                            trigger.style.left = l - 3.1 + 'px';
                            if (l + trigger.offsetWidth <= 0) {
                                clearInterval(timer);
                            }
                        }, 10);
                        var timer2 = setInterval(function() {
                            var l = explain.offsetLeft;
                            explain.style.left = l - 15 + 'px';
                            if (l + explain.offsetWidth <= 0) {
                                clearInterval(timer2);
                            }
                        }, 10);
                        jump(boss, j.novice);
                        blackBall();
                        if (play == 1) {
                            bgm.currentTime = 0;
                            bgm.play();
                        } else {
                            nbgm.currentTime = 0;
                            nbgm.play();
                        }
                    } else {
                        if (down) {
                            onoff = true;
                            space.style.display = '';
                            jbgm.play();
                        }
                    }
                }
            }
        }
        function duang(obj1, obj2) {
            var pos1 = obj1.getBoundingClientRect();
            var pos2 = obj2.getBoundingClientRect();
            if (pos1.right < pos2.left || pos1.left > pos2.right || pos1.top > pos2.bottom || pos1.bottom < pos2.top) {
                return false;
            } else {
                return true;
            }
        }
        function move(init) {
            var t = init.obj.offsetTop;
            init.obj.style.top = t - init.speedTop + 'px';
            var l = parseFloat(getComputedStyle(content).left);
            var tag = l - init.boardspeed;
            if (tag <= init.tagMaxTop) {
                tag = init.tagMaxTop
            }
            if (tager > lis[n].t - 50 && n != lis.length - 1 && t < lis[n].t - 10) {
                clearInterval(timer);
                bgm.pause();
                nbgm.pause();
                sbgm.play();
                clearInterval(timer2);
                document.onkeydown = null;
                if (j.pattern) {
                    if (m > max)
                        max = m - 1;
                    percentage.innerHTML = m - 1;
                }
                location.hash = progressFn() + '/' + percentage.innerHTML;
                changePageTwo(main, deadFn);
            }
            for (var i = 0; i < ems.length; i++) {
                if (duang(init.obj, ems[i])) {
                    bgm.pause();
                    nbgm.pause();
                    sbgm.play();
                    clearInterval(timer);
                    clearInterval(timer2);
                    document.onkeydown = null;
                    if (j.pattern) {
                        if (m > max)
                            max = m - 1;
                        percentage.innerHTML = m - 1;
                    }
                    location.hash = progressFn() + '/' + percentage.innerHTML;
                    changePageTwo(main, deadFn);
                }
            }
            content.style.left = tag + 'px';
            if (t <= tager) {
                clearInterval(timer);
                down = true;
                onoff = false;
                timer = setInterval(function() {
                    var t = init.obj.offsetTop;
                    init.obj.style.top = t + init.speedBottom + 'px';
                    var l = parseFloat(getComputedStyle(content).left);
                    var tag = l - init.boardspeed;
                    if (tag <= init.tagMaxBottom) {
                        tag = init.tagMaxBottom;
                    }
                    content.style.left = tag + 'px';
                    if (j.pattern) {
                        percentage.innerHTML = m;
                    } else {
                        percentage.innerHTML = Math.floor((m + 1) / Data.length * 100) + '%';
                    }
                    if (peng && t < lis[n].t - 20) {
                        setTimeout(function() {
                            clearInterval(timer);
                        }, 50)
                        bgm.pause();
                        nbgm.pause();
                        sbgm.play();
                        clearInterval(timer2);
                        document.onkeydown = null;
                        if (j.pattern) {
                            if (m > max)
                                max = m - 1;
                            percentage.innerHTML = m - 1;
                        }
                        location.hash = progressFn() + '/' + percentage.innerHTML;
                        changePageTwo(main, deadFn);
                    }
                    if (duang(init.obj, span[n])) {
                        if (span[n].className == 'fire') {
                            clearInterval(timer);
                            clearInterval(timer2);
                            bgm.pause();
                            nbgm.pause();
                            sbgm.play();
                            document.onkeydown = null;
                            if (j.pattern) {
                                if (m > max)
                                    max = m - 1;
                                percentage.innerHTML = m - 1;
                            }
                            location.hash = progressFn() + '/' + percentage.innerHTML;
                            changePageTwo(main, deadFn);
                        } else {
                            span[n].classList.add('hover');
                            if (span[n].nextElementSibling) {
                                span[n].nextElementSibling.style.display = 'block';
                            }
                            span[n].style.bottom = span[n].b - 5 + 'px';
                        }
                    }
                    if (t >= tagerNext) {
                        span[n].style.bottom = span[n].b + 'px';
                        clearInterval(timer);
                        if (m >= Data.length - 1) {
                            bgm.pause();
                            nbgm.pause();
                            gbgm.play();
                            clearInterval(timer);
                            clearInterval(timer2);
                            document.onkeydown = null;
                            if (j.pattern) {
                                if (m > max) {
                                    max = m;
                                }
                            } else {
                                percentage.innerHTML = '100%';
                            }
                            if (nums == highest) {
                                highest++;
                            }
                            location.hash = hash0 + '/' + charc + '/' + nums + '/' + highest + '/' + percentage.innerHTML;
                            changePageTwo(main, victoryFn);
                        } else {
                            typeof init.callback == 'function' && init.callback();
                        }
                    }
                }, 10 * play)
            }
        }
        function progressFn() {
            var hash = location.hash.substr(1).split('/');
            var str = '';
            str = hash[0] + '/' + hash[1] + '/' + hash[2] + '/' + hash[3];
            return str;
        }
        function starBlack(box, father) {
            var div = document.createElement('div');
            var l = box.offsetLeft;
            var t = Math.round(Math.random() * 30) + box.offsetTop;
            div.style.left = l + 'px';
            div.style.top = t + 'px';
            div.className = 'bubble';
            var x = -8;
            var size = Math.round(Math.random() * 20);
            div.style.width = size;
            div.style.height = size;
            div.style.borderRadius = '50%';
            father.appendChild(div);
            div.timer = setInterval(function() {
                div.style.left = (l += x) + 'px';
                div.style.width = (size -= 1) + 'px';
                div.style.height = (size -= 1) + 'px';
                if (size <= 0) {
                    clearInterval(div.timer);
                    father.removeChild(div);
                }
            }, 80)
        }
        function blackBall() {
            timer2 = setInterval(function() {
                starBlack(boss, j.box);
                if (main.style.display == 'none') {
                    clearInterval(timer2);
                }
            }, 50);
        }
        function watering() {
            cbgm.play();
            moving({
                obj: water,
                attrs: {
                    top: 384,
                    width: 60,
                    height: 90,
                    left: 100
                },
                duration: 1200,
                callBack: function() {
                    setTimeout(function() {
                        water.style.display = 'none';
                    }, 0)
                    boss.style.display = 'block';
                    span[n].classList.add('hover');
                    span[n].nextElementSibling.style.display = 'block';
                }
            });
            moving({
                obj: lnk,
                attrs: {
                    height: 0
                },
                duration: 1200
            })
        }
        setTimeout(function() {
            watering();
            Explain();
        }, 1200);
        function Explain() {
            moving({
                obj: explain,
                attrs: {
                    left: 600
                },
                duration: 700
            })
        }
    }
    if (hash0 == 0) {
        var pattern = false;
        checkpoint({
            box: main,
            num: nums,
            character: charc,
            pattern: pattern
        });
    } else if (hash0 == 1) {
        var pattern = true;
        checkpoint({
            box: main,
            character: charc,
            pattern: pattern
        });
    } else {
        var nov = true;
        checkpoint({
            box: main,
            num: 0,
            character: charc,
            novice: nov
        });
    }
}
