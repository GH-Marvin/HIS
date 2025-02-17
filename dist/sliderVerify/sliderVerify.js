layui.define(["jquery", "layer", "form"], function(s) {
    var d = layui.jquery,
        b = layui.form,
        r = layui.layer,
        k = layui.device(),
        h = {
            read: (function() {
                var u = ".slider-item{height:38px;line-height:38px;background-color:#d0d0d0;position:relative;border: 0.01px solid rgb(255,255,255,0.1);}.slider-bg{position:absolute;width:40px;height:100%;z-index:100}.slider-btn{width:40px;height:96%;position:absolute;border:1px solid #ccc;cursor:move;text-align:center;background-color:#fff;user-select:none;color:#666;z-index:120}.slider-btn-success{font-size:26px}.slider-text{position:absolute;text-align:center;width:100%;height:100%;user-select:none;font-size:14px;color:#fff;z-index:120}.slider-error{animation:glow 800ms ease-out infinite alternate;}@keyframes glow{0%{border-color:#e6e6e6}100%{border-color:#ff5722}}",
                    v = document.createElement("style");
                v.innerHTML = u;
                v.type = "text/css";
                (d("head link:last")[0] && d("head link:last").after(v)) || d("head").append(v)
            })()
        },
        m = function(u) { return u[0] },
        o = function() { var u = this; return { isOk: function() { return u.isOk.call(u) }, reset: function() { return u.reset.call(u) }, version: "1.7.1" } },
        g = "sliderVerify",
        i = "slider-btn",
        j = "slider-bg",
        q = "slider-text",
        a = "layui-icon-next",
        t = "layui-icon-ok-circle",
        f = "slider-btn-success",
        n = "layui-bg-green",
        c = "slider-error",
        p = "请拖动滑块验证",
        e = "验证通过",
        l = function(u) {
            var v = this;
            v.config = d.extend({}, v.config, u);
            v.render()
        };
    l.prototype.config = { elem: "", onOk: null, isOk: false, isAutoVerify: true, timer: null, bg: n, text: p };
    l.prototype.render = function() {
        var w = this,
            u = w.config,
            v = d(u.elem);
        if (!v[0]) { return }
        if (u.domid) { u.domid.remove() }
        u.domid = w.createIdNum();
        var x = d(['<div id="' + u.domid + '"' + (u.isAutoVerify ? 'lay-verify="sliderVerify"' : "") + 'class="slider-item">', '<div class="' + j + " " + u.bg + '"></div>', '<div class="' + q + '">' + u.text + "</div>", '<div class="' + i + ' layui-icon layui-icon-next"></div>'].join(""));
        v.hide().after(x);
        u.domid = d("#" + u.domid);
        w.events();
        if (u.isAutoVerify) { b.verify({ sliderVerify: function(y, z) { if (!y) { z.classList.add(c); return u.text } } }) }
    };
    l.prototype.isMobile = function() { return (k.os == "ios" || k.os == "android" || k.android || k.ios) || (k.weixin && typeof k.weixin === Boolean) };
    l.prototype.createIdNum = function() { return (g + (+new Date()).toString() + Math.random().toString().substr(2, 7)) };
    l.prototype.isOk = function() { return this.config.isOk };
    l.prototype.error = function(u) { return r.msg(u, { icon: 5 }) };
    l.prototype.distance = function() { var u = this.config.container; return u.box.offsetWidth - u.btn.offsetWidth };
    l.prototype.reset = function() { this.config.isOk = false; return this.render() };
    l.prototype.resize = function(w) {
        var v = this,
            u = v.config.container;
        var w = w || v.distance();
        u.btn.style.left = w + "px";
        u.bg.style.width = w + "px"
    };
    l.prototype.cancelTransition = function() {
        var u = this.config.container;
        this.config.domid[0].classList.remove(c);
        u.btn.style.transition = "";
        u.bg.style.transition = ""
    };
    l.prototype.down = function(y) {
        var x = this,
            w = x.config,
            v = w.container,
            y = y || window.event,
            z = y.clientX || y.touches[0].clientX;
        x.cancelTransition();
        var u = function(A) { x.move(z, A) };
        x.events.move = u;
        if (x.isMobile()) { document.addEventListener("touchmove", x.events.move) } else { document.onmousemove = u }
        if (navigator.userAgent.indexOf("UCBrowser") > -1) { y.preventDefault() }
    };
    l.prototype.move = function(C, B) {
        var A = this,
            y = A.config,
            u = y.container;
        var B = B || window.event;
        var w = B.clientX || B.touches[0].clientX;
        var z = w - C;
        if (z > u.distance) { z = u.distance } else { if (z < 0) { z = 0 } }
        u.btn.style.left = z + "px";
        u.bg.style.width = z + "px";
        if (z == u.distance) {
            u.text.innerHTML = e;
            var v = window.getComputedStyle ? window.getComputedStyle(u.bg, null) : u.bg.currentStyle;
            u.btn.style.border = "1px solid " + v.backgroundColor;
            u.btn.style.color = v.backgroundColor;
            u.btn.classList.remove(a);
            u.btn.classList.add(t, f);
            y.isOk = true;
            u.box.value = true;
            if (A.isMobile()) {
                u.btn.removeEventListener("touchstart", A.events.down, false);
                document.removeEventListener("touchmove", A.events.move, false)
            } else {
                u.btn.onmousedown = null;
                document.onmousemove = null
            }
            y.onOk && typeof y.onOk == "function" && y.onOk();
            return
        }
        var x = function(D) { A.stop(D) };
        A.events.seup = x;
        if (A.isMobile()) { document.addEventListener("touchend", x) } else { document.onmouseup = x }
    };
    l.prototype.stop = function(x) {
        var w = this,
            v = w.config,
            u = v.container;
        if (w.isOk()) { return } else {
            u.btn.style.left = 0;
            u.bg.style.width = 0;
            u.btn.style.transition = "left 1s";
            u.bg.style.transition = "width 1s"
        }
        document.onmousemove = null;
        document.onmouseup = null;
        if (w.isMobile()) {
            document.removeEventListener("touchmove", w.events.move, false);
            document.removeEventListener("touchend", w.events.seup, false)
        }
    };
    l.prototype.events = function() {
        var z = this,
            y = z.config;
        if (!y.domid) { return z.error("创建滑块验证失败") }
        var x = y.domid.find("." + i),
            w = y.domid.find("." + j),
            A = y.domid.find("." + q),
            v = { box: m(y.domid), btn: m(x), bg: m(w), text: m(A) };
        y.container = v;
        v.distance = z.distance();
        var B = function(C) { z.down(C) };
        z.events.down = B;
        if (z.isMobile()) { v.btn.addEventListener("touchstart", z.events.down) } else { v.btn.onmousedown = B }
        var u = d(window);
        u.on("resize", y.domid, function() {
            if (z.config.isOk) { z.resize() } else {
                clearTimeout(y.timer);
                y.timer = setTimeout(function() { z.render() }, 400)
            }
        })
    };
    h.render = function(u) { var v = new l(u); return o.call(v) };
    s(g, h)
});