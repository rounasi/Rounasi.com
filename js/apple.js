/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
Object.defineProperties = Object.defineProperties || function () {},
function () {
    for (var f = 0, d = ["ms", "moz", "webkit", "o"], e = 0; e < d.length && !window.requestAnimationFrame; ++e) {
        window.requestAnimationFrame = window[d[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d[e] + "CancelAnimationFrame"] || window[d[e] + "CancelRequestAnimationFrame"]
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = function (c) {
        var h = (new Date).getTime(),
            b = Math.max(0, 16 - (h - f)),
            a = window.setTimeout(function () {
                c(h + b)
            }, b);
        return f = h + b, a
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
        clearTimeout(a)
    })
}(),
function (k, e) {
    function h(b, c, d, a) {
        b[l](i + c, "wheel" == j ? d : function (f) {
            !f && (f = k.event);
            var g = {
                originalEvent: f,
                target: f.target || f.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == f.type ? 0 : 1,
                deltaX: 0,
                delatZ: 0,
                preventDefault: function () {
                    f.preventDefault ? f.preventDefault() : f.returnValue = !1
                }
            };
            return "mousewheel" == j ? (g.deltaY = -1 / 40 * f.wheelDelta, f.wheelDeltaX && (g.deltaX = -1 / 40 * f.wheelDeltaX)) : g.deltaY = f.detail, d(g)
        }, a || !1)
    }
    var l, j, i = "";
    k.addEventListener ? l = "addEventListener" : (l = "attachEvent", i = "on"), j = "onwheel" in e.createElement("div") ? "wheel" : void 0 !== e.onmousewheel ? "mousewheel" : "DOMMouseScroll", k.addWheelListener = function (a, c, b) {
        h(a, j, c, b), "DOMMouseScroll" == j && h(a, "MozMousePixelScroll", c, b)
    }
}(window, document), "undefined" == typeof document || "classList" in document.createElement("a") || function (u) {
    if ("HTMLElement" in u || "Element" in u) {
        var d = "classList",
            a = "prototype",
            r = (u.HTMLElement || u.Element)[a],
            m = Object,
            l = String[a].trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }, p = Array[a].indexOf || function (f) {
                for (var g = 0, b = this.length; b > g; g++) {
                    if (g in this && this[g] === f) {
                        return g
                    }
                }
                return -1
            }, c = function (f, b) {
                this.name = f, this.code = DOMException[f], this.message = b
            }, s = function (f, b) {
                if ("" === b) {
                    throw new c("SYNTAX_ERR", "An invalid or illegal string was specified")
                }
                if (/\s/.test(b)) {
                    throw new c("INVALID_CHARACTER_ERR", "String contains an invalid character")
                }
                return p.call(f, b)
            }, n = function (g) {
                for (var j = l.call(g.className), f = j ? j.split(/\s+/) : [], h = 0, b = f.length; b > h; h++) {
                    this.push(f[h])
                }
                this._updateClassName = function () {
                    g.className = this.toString()
                }
            }, e = n[a] = [],
            t = function () {
                return new n(this)
            };
        if (c[a] = Error[a], e.item = function (b) {
            return this[b] || null
        }, e.contains = function (b) {
            return b += "", -1 !== s(this, b)
        }, e.add = function () {
            var g, j = arguments,
                f = 0,
                h = j.length,
                b = !1;
            do {
                g = j[f] + "", -1 === s(this, g) && (this.push(g), b = !0)
            } while (++f < h);
            b && this._updateClassName()
        }, e.remove = function () {
            var g, k = arguments,
                f = 0,
                j = k.length,
                b = !1;
            do {
                g = k[f] + "";
                var h = s(this, g); - 1 !== h && (this.splice(h, 1), b = !0)
            } while (++f < j);
            b && this._updateClassName()
        }, e.toggle = function (f, h) {
            f += "";
            var b = this.contains(f),
                g = b ? h !== !0 && "remove" : h !== !1 && "add";
            return g && this[g](f), !b
        }, e.toString = function () {
            return this.join(" ")
        }, m.defineProperty) {
            var i = {
                get: t,
                enumerable: !0,
                configurable: !0
            };
            try {
                m.defineProperty(r, d, i)
            } catch (o) {
                -2146823252 === o.number && (i.enumerable = !1, m.defineProperty(r, d, i))
            }
        } else {
            m[a].__defineGetter__ && r.__defineGetter__(d, t)
        }
    }
}(self);
var _ = {
    defaults: function (g, e) {
        var f = {};
        e = e || {};
        for (var h in g) {
            g.hasOwnProperty(h) && (f[h] = null != e[h] ? e[h] : g[h])
        }
        return f
    }
};
AC.define("macpro/shared/lib/utils", function () {}), AC.define("macpro/shared/event/Emitter", ["require"], function () {
    function c() {
        this._events = []
    }
    var d = c.prototype;
    return d.on = function (a, b) {
        var e = this._events;
        e[a] || (e[a] = []), e[a].push(b)
    }, d.trigger = function (a, e) {
        var h = this._events,
            b = a.split(":")[0];
        e = e || {}, e.type = a, e.index = parseInt(a.split(":")[1], 10), h[b] && h[b].forEach(function (f) {
            f.call(this, e)
        }.bind(this)), h[a] && a.split(":").length > 1 && h[a].forEach(function (f) {
            f.call(this, e)
        }.bind(this))
    }, c
}), AC.define("macpro/shared/lib/analytics", ["require"], function () {
    function c() {
        this._trackingQueue = [], this._interactionType = null, this._interactionStart = null
    }
    var d = c.prototype;
    return d.flush = function () {
        for (var a; a = this._trackingQueue.shift();) {
            this.trackProps(a)
        }
    }, d.initInteraction = function (a) {
        this._interactionType = a, this._interactionStart = +new Date
    }, d.queueInteraction = function (e, l, m) {
        var i = +new Date,
            b = (i - this._interactionStart) / 10,
            a = AC.Tracking.pageName() + " - " + l.toLowerCase() + " - section " + m,
            n = {
                prop1: e,
                prop3: a,
                prop35: b
            };
        this._trackingQueue.push(n)
    }, d.trackProps = function (a) {
        "string" == typeof a.prop3 && AC.Tracking.trackClick(a, window, "o", a.prop3)
    }, d.trackLink = function (a, b, e) {
        arguments.length < 3 || window.setTimeout(function () {
            AC.Tracking.trackClick({
                prop1: a,
                prop3: AC.Tracking.pageName() + " - " + b.toString().toLowerCase() + " - section " + e
            }, this, "o", AC.Tracking.pageName() + " - " + b.toLowerCase() + " - section " + e)
        }, 1000)
    }, c
}), AC.define("macpro/shared/app/Core", ["require", "macpro/shared/lib/utils", "macpro/shared/event/Emitter", "macpro/shared/lib/analytics"], function (g) {
    function e() {
        this.analyzer = new h, f.call(this)
    }
    g("macpro/shared/lib/utils");
    var f = g("macpro/shared/event/Emitter"),
        h = g("macpro/shared/lib/analytics");
    return e.prototype = new f, e.prototype.addTimelineEvents = function (a) {
        a.filter(function (b) {
            return !isNaN(b.pause)
        }).forEach(function (b, c) {
            b.events && b.events.forEach(function (d) {
                this.sectionController.on(d.type + ":" + c, d.action)
            }, this)
        }, this)
    }, e.prototype.createFadeCurtain = function () {
        var a = document.createElement("div");
        a.id = "curtain", document.getElementById("wrapper").appendChild(a)
    }, e.prototype.convertSectionsToClips = function (a) {
        var b = {};
        return b.clips = [], b.events = {
            pauses: []
        }, a.forEach(function (c) {
            isNaN(c.pause) || b.events.pauses.push(c.pause), b.events.pauses.sort(function (d, k) {
                return d > k ? 1 : -1
            }), b.clips = b.clips.concat(c.clips.map(function (d) {
                return {
                    start: c.time + d.start,
                    end: c.time + d.end,
                    media: d.media,
                    pauses: d.pauses
                }
            }))
        }), b
    }, e.prototype.resizeFluidAreas = function () {
        var a = this.resizeContainers();
        this.resizePlaceholders(a)
    }, e.prototype.enterAnalytics = function () {
        this.analyzer.initInteraction(), clearTimeout(this._analyzerTimeout), this._analyzerTimeout = window.setTimeout(function () {
            this.analyzer.flush()
        }.bind(this), 1000)
    }, e.prototype.exitAnalytics = function (a) {
        clearTimeout(this._analyzerTimeout);
        var c = app.sectionController._pauseTimeline[a.from],
            d = app.sectionController.getSectionFromPausePoint(c).name,
            b = app.uiController._lastInteractionType;
        this.analyzer.queueInteraction(b, d, a.from)
    }, e.prototype.setupFocusEvents = function () {
        var a = this.sectionController._pauses[0];
        this.sectionController.on("pauseenter", function (i) {
            var l = i.section || a,
                d = document.querySelector(l.labelSelector),
                c = d.querySelector(".title"),
                b = d.querySelector(".button");
            c.tabIndex = -1, b && (b.tabIndex = 0), c.focus()
        }.bind(this)), this.sectionController.on("pauseexit", function (d) {
            var i = d.section || a,
                c = document.querySelector(i.labelSelector),
                b = c.querySelector(".button");
            b && (b.tabIndex = -1)
        })
    }, e.prototype.addNextCarets = function () {
        var a = document.querySelector("#hero .caret");
        if (a) {
            var b = [document.querySelector("#hero"), document.querySelector("#comingsoon"), document.querySelector("#measurements")],
                c = document.querySelectorAll("section", this.panelcontainer);
            c = Array.prototype.slice.call(c), c = c.filter(function (d) {
                return -1 === b.indexOf(d)
            }), c.forEach(function (n) {
                var o = a.cloneNode(!0),
                    i = n.querySelector(".copy"),
                    d = o.querySelector(".cta"),
                    r = o.querySelector(".button"),
                    q = function (j) {
                        ("click" === j.type || "keydown" === j.type && 13 === j.keyCode) && this.sectionController.next()
                    }.bind(this);
                r.id = "", r.tabIndex = -1, r.classList.add("next"), d.innerHTML = d.getAttribute("data-next"), o.addEventListener("click", q), o.addEventListener("keydown", q), i.appendChild(o)
            }.bind(this))
        }
    }, e
}), AC.define("macpro/shared/vendor/KeySpline", ["require"], function () {
    function b(n, c, o, t) {
        function r(d, f) {
            return 1 - 3 * f + 3 * d
        }

        function p(d, f) {
            return 3 * f - 6 * d
        }

        function e(d) {
            return 3 * d
        }

        function a(d, g, f) {
            return ((r(g, f) * d + p(g, f)) * d + e(g)) * d
        }

        function i(d, g, f) {
            return 3 * r(g, f) * d * d + 2 * p(g, f) * d + e(g)
        }

        function s(h) {
            for (var d = h, g = 0; 4 > g; ++g) {
                var f = i(d, n, o);
                if (0 === f) {
                    return d
                }
                var j = a(d, n, o) - h;
                d -= j / f
            }
            return d
        }
        this.get = function (d) {
            return n == c && o == t ? d : a(s(d), c, t)
        }
    }
    return b
}), AC.define("macpro/shared/clip/Tween", ["require", "macpro/shared/vendor/KeySpline"], function (k) {
    function e(b, c, d) {
        var a = document.querySelector(b);
        this._el = a && a.nodeType && 1 === a.nodeType ? a : b, this.duration = c, this.props = d || [], this.props.forEach(function (f) {
            var g;
            "keyspline" === f.easing && (g = f.keyspline, f.keyspline = new l(g[0], g[1], g[2], g[3]))
        }), this.beginning = 0
    }
    var h, l = k("macpro/shared/vendor/KeySpline"),
        j = ["transform", "webkitTransform", "MozTransform", "msTransform", "oTransform"],
        i = AC.EasingFunctions;
    return function () {
        var a = document.createElement("div");
        j.some(function (b) {
            return b in a.style ? (h = b, !0) : void 0
        })
    }(), e.prototype = {
        tween: function (b) {
            var d = this.duration,
                c = this.el,
                a = h;
            this.props.length < 1 || this.props.forEach(function (w) {
                var f, v, g, s = w.units,
                    u = w.axis,
                    p = w.property;
                f = w.keyspline ? w.keyspline.get(b / d) * (w.to - w.from) : i[w.easing || "linear"](b, w.from, w.to - w.from, d), "translate" === p ? (v = a, "x" === u ? g = "translate3d(" + f + s + ", 0, 0)" : "y" === u ? g = "translate3d(0, " + f + s + ", 0)" : "z" === u && (g = "translate3d(0, 0, " + f + s + ")")) : "translate2d" === p ? (v = a, g = "translate" + u.toUpperCase() + "(" + f + s + ")") : "scale" === p ? (v = a, g = "x" === u ? "scaleX(" + f + ")" : "y" === u ? "scaleY(" + f + ")" : "z" === u ? "scaleZ(" + f + ")" : "scale(" + f + ")") : (v = p, g = f + (w.units || "")), c.style[v] = g
            })
        }
    }, Object.defineProperties(e.prototype, {
        currentTime: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._currentTime
            },
            set: function (a) {
                this._currentTime = Math.max(0, Math.min(a, this.duration)), this.tween(this._currentTime)
            }
        },
        el: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._el && this._el.nodeType && 1 === this._el.nodeType ? this._el : (!document.querySelector(this._el), this._el = document.querySelector(this._el))
            }
        }
    }), e
}), AC.define("macpro/shared/clip/Basic", [], function () {
    function b(e, f) {
        var a = document.querySelector(e);
        this._el = a && a.nodeType && 1 === a.nodeType ? a : e, this.duration = f, this.beginning = 0, this._currentTime = 0
    }
    return b.prototype = {}, Object.defineProperties(b.prototype, {
        currentTime: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._currentTime
            },
            set: function (a) {
                this._currentTime = Math.max(0, Math.min(a, this.duration))
            }
        },
        el: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._el && this._el.nodeType && 1 === this._el.nodeType ? this._el : this._el = document.querySelector(this._el)
            }
        }
    }), b
}), AC.define("macpro/desktop/timeline/intro", ["require", "macpro/shared/clip/Tween", "macpro/shared/clip/Basic"], function (f) {
    var d = f("macpro/shared/clip/Tween"),
        e = f("macpro/shared/clip/Basic");
    return function () {
        return [{
            start: 0,
            end: 4,
            media: new e("#hero", 1)
        }, {
            start: 2.4,
            end: 4,
            media: new d("#hero .title", 1.1, [{
                property: "opacity",
                from: 0,
                to: 1,
                easing: "easeInQuad"
            }, {
                property: "translate",
                axis: "y",
                from: 0,
                to: 0,
                units: "px"
            }])
        }, {
            start: 2.9,
            end: 4,
            media: new d("#hero .subtitle", 0.6, [{
                property: "opacity",
                from: 0,
                to: 1,
                easing: "easeInQuad"
            }, {
                property: "translate",
                axis: "y",
                from: 0,
                to: 0,
                units: "px"
            }])
        }, {
            start: 2.9,
            end: 4,
            media: new d("#globalheader", 0.6, [{
                property: "opacity",
                from: 0,
                to: 1,
                easing: "easeInQuad"
            }, {
                property: "translate",
                axis: "y",
                from: 0,
                to: 0,
                units: "px"
            }])
        }, {
            start: 3,
            end: 4,
            media: new e("#hero .caret", 0.5)
        }, {
            start: 3,
            end: 4,
            media: new d("#globalheader", 0.5, [{
                property: "opacity",
                from: 0,
                to: 1,
                easing: "easeInQuad"
            }, {
                property: "translate",
                axis: "y",
                from: 0,
                to: 0,
                units: "px"
            }])
        }, {
            start: 3.5,
            end: 4,
            media: new d(".still_1", 0.25, [{
                property: "opacity",
                from: 0,
                to: 1,
                easing: "easeInQuad"
            }])
        }]
    }
}), AC.define("macpro/shared/ComparisonChart", ["require"], function () {
    function b(l) {
        var o, p, m, i, e, a, n;
        if (this._element = AC.Element.getElementById(l), !this._element) {
            return !1
        }
        for (Element.cleanWhitespace(AC.Element.selectAll(".bars", this._element)[0]), AC.Detector.isCSSAvailable("transition") && AC.Element.addClassName(this._element, "can-animate"), a = AC.Element.selectAll(".bars-container")[0], o = AC.Element.selectAll(".bars li", this._element), p = o.length, n = 0; n < o.length; n += 1) {
            if (m = o[n].getAttribute("data-chart-value"), i = o[n].getAttribute("data-chart-label"), e = o[n].getAttribute("data-chart-data"), !m || isNaN(parseFloat(m))) {
                throw "Could not find a valid data-chart-value attribute on one of the bar elements."
            }
            o[n].innerHTML = '<span class="text-value">' + i + '<span class="data-value">' + e + '</span></span><span class="visual-value" role="presentation"></span>', m = parseFloat(o[n].getAttribute("data-chart-value")), o[n].setAttribute("data-animate-height", m)
        }
    }
    return b.prototype = {
        visitorEngaged: function () {
            var d, a = AC.Element.selectAll(".bars li", this._element);
            for (AC.Element.addClassName(this._element, "animate"), d = 0; d < a.length; d += 1) {
                a[d].style.height = a[d].getAttribute("data-animate-height") + "%"
            }
        },
        resetChart: function () {
            if (AC.Detector.isCSSAvailable("transition")) {
                var d, a = AC.Element.selectAll(".bars li", this._element);
                for (AC.Element.removeClassName(this._element, "animate"), d = 0; d < a.length; d += 1) {
                    a[d].style.height = "0%"
                }
            }
        }
    }, b
}), AC.define("macpro/desktop/timeline/timeline", ["require", "macpro/shared/clip/Tween", "macpro/shared/ComparisonChart", "macpro/shared/clip/Basic"], function (g) {
    var e = g("macpro/shared/clip/Tween"),
        f = g("macpro/shared/ComparisonChart"),
        h = g("macpro/shared/clip/Basic");
    return function () {
        var c, n, m, u, p = new f("processor-chart"),
            a = new f("memory-chart"),
            o = new f("graphics-chart"),
            d = new f("storage-chart"),
            b = document.getElementById("hero"),
            l = document.getElementById("measurements"),
            s = document.getElementById("comingsoon");
        return [{
            name: "home",
            pause: 0,
            time: 0,
            labelSelector: "#hero",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_1").classList.add("crossFade"), b.querySelector(".caret").classList.add("show")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    window.setTimeout(function () {
                        b.querySelector(".caret").classList.remove("show")
                    }, 500), p.resetChart(), a.resetChart(), o.resetChart(), d.resetChart()
                }
            }],
            clips: [{
                start: 0,
                end: 0.2,
                media: new e(".still_1", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 0,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.25,
                media: new e("#hero .title", 0.25, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0.25,
                end: 0.75,
                media: new e("#hero .title", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.09,
                media: new e("#hero .title", 0.09, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.09,
                end: 0.75,
                media: new e("#hero .title", 0.66, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.25,
                media: new e("#hero .subtitle", 0.25, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.25,
                media: new e("#hero .subtitle", 0.25, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "linear"
                }])
            }, {
                start: 0.25,
                end: 0.75,
                media: new e("#hero .subtitle", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.09,
                media: new e("#hero .subtitle", 0.09, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.09,
                end: 0.75,
                media: new e("#hero .subtitle", 0.66, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new h("#hero .caret", 0.5, [])
            }, {
                start: 0,
                end: 0.25,
                media: new e("#globalheader", 0.25, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.25,
                media: new e("#globalheader", 0.25, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "linear"
                }])
            }, {
                start: 0.25,
                end: 0.75,
                media: new e("#globalheader", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.09,
                media: new e("#globalheader", 0.09, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    easing: "linear"
                }])
            }, {
                start: 0,
                end: 0.1,
                media: new e("#globalheader", 0.09, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.1,
                end: 0.75,
                media: new e("#globalheader", 0.66, [{
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "intro",
            pause: 2,
            time: 2,
            labelSelector: "#change",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_2").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_2").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_2", 0.2)
            }, {
                start: -0.5,
                end: 0,
                media: new e("#change .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px",
                    easing: "linear"
                }])
            }, {
                start: -0.5,
                end: 47.03,
                media: new e("#sectionNav", 0.5, [{
                    property: "display",
                    from: "none",
                    to: "block"
                }, {
                    property: "opacity",
                    from: 0,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#change .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px",
                    easing: "linear"
                }])
            }]
        }, {
            name: "computing",
            pause: 6,
            time: 6,
            labelSelector: "#power",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_3").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_3").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_3", 0.2)
            }, {
                start: -0.5,
                end: 0,
                media: new e("#power .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#power .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "processor",
            pause: 10,
            time: 10,
            labelSelector: "#processor",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_4").classList.add("crossFade"), window.clearTimeout(c), setTimeout(function () {
                        p.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_4").classList.remove("crossFade"), c = window.setTimeout(function () {
                        p.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_4", 0.2)
            }, {
                start: -0.8,
                end: -0.3,
                media: new e("#processor .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#processor .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#processor .cores", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#processor .pcie", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#processor #processor-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#processor .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#processor .cores", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#processor .pcie", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#processor #processor-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "memory",
            pause: 13,
            time: 13,
            labelSelector: "#memory",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_5").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(n), setTimeout(function () {
                        a.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_5").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    n = window.setTimeout(function () {
                        a.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_5", 0.2)
            }, {
                start: -0.8,
                end: -0.3,
                media: new e("#memory .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#memory .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#memory .bandwidth", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#memory .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#memory #memory-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#memory .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#memory .bandwidth", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#memory .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#memory #memory-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "graphics",
            pause: 17,
            time: 17,
            labelSelector: "#graphics",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_6").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(m), setTimeout(function () {
                        o.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_6").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    m = window.setTimeout(function () {
                        o.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_6", 0.2)
            }, {
                start: -0.8,
                end: -0.3,
                media: new e("#graphics .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#graphics .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#graphics .dual-gpus", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#graphics .teraflops", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#graphics #graphics-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#graphics .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#graphics .dual-gpus", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#graphics .teraflops", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#graphics #graphics-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "storage",
            pause: 19,
            time: 19,
            labelSelector: "#storage",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_7").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(u), setTimeout(function () {
                        d.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_7").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    u = window.setTimeout(function () {
                        d.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_7", 0.2)
            }, {
                start: -0.8,
                end: -0.3,
                media: new e("#storage .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#storage .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#storage .flash", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#storage .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#storage #storage-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#storage .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#storage .flash", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#storage .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#storage #storage-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "thermal core",
            pause: 23,
            time: 23,
            labelSelector: "#thermal",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_8").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_8").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_8", 0.2)
            }, {
                start: -0.5,
                end: 0,
                media: new e("#thermal .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#thermal .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "fan",
            pause: 30,
            time: 30,
            labelSelector: "#fan",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_9").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_9").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.1,
                media: new h(".still_9", 0.2)
            }, {
                start: -0.5,
                end: 0,
                media: new e("#fan .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#fan .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "expansion",
            pause: 36,
            time: 36,
            labelSelector: "#expansion",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 3.2,
                media: new h(".still_10", 3.3)
            }, {
                start: -1.5,
                end: -1,
                media: new e("#expansion .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -1,
                end: 0,
                media: new e("#expansion .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#expansion .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "thunderbolt",
            pause: 37.3,
            time: 37.3,
            labelSelector: "#thunderbolt",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }],
            clips: [{
                start: -0.9,
                end: -0.4,
                media: new e("#thunderbolt .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.4,
                end: 0,
                media: new e("#thunderbolt .copy", 0.4, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#thunderbolt .speeds", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#thunderbolt .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#thunderbolt .daisychain", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#thunderbolt .displays", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#thunderbolt .copy", 0.4, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#thunderbolt .speeds", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#thunderbolt .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#thunderbolt .daisychain", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#thunderbolt .displays", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "io",
            pause: 38.8,
            time: 38.8,
            labelSelector: "#io",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_10").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.9,
                end: -0.4,
                media: new e("#io .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.4,
                end: 0,
                media: new e("#io .copy", 0.4, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.6,
                end: -0.2,
                media: new e("#io .hdmi", 0.4, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.2,
                end: 0,
                media: new e("#io .hdmi", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.6,
                end: -0.2,
                media: new e("#io .gigabit", 0.4, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.2,
                end: 0,
                media: new e("#io .gigabit", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#io .thunderbolt", 0.3, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#io .usb", 0.3, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#io .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                end: 0.9,
                media: new h("#io .copy", 0.4)
            }, {
                start: 0,
                end: 0.4,
                media: new e("#io .thunderbolt", 0.4, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0.4,
                end: 0.9,
                media: new e("#io .thunderbolt", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.4,
                media: new e("#io .usb", 0.4, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0.4,
                end: 0.9,
                media: new e("#io .usb", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.2,
                media: new e("#io .hdmi", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0.2,
                end: 0.7,
                media: new e("#io .hdmi", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.2,
                media: new e("#io .gigabit", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0.2,
                end: 0.7,
                media: new e("#io .gigabit", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "wireless",
            pause: 41,
            time: 41,
            labelSelector: "#wireless",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_13").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    document.getElementById("design").classList.add("show")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_13").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 3.3,
                media: new h(".still_13", 3.4)
            }, {
                start: -0.7,
                end: -0.2,
                media: new e("#wireless .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.2,
                end: 0,
                media: new e("#wireless .copy", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#wireless .ac", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#wireless .bluetooth", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#wireless .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#wireless .ac", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#wireless .bluetooth", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            time: 43,
            events: [{
                type: "pauseenter",
                action: function (i) {
                    callAnalytics(i)
                }
            }],
            clips: [{
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .height .line", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .height .line .line-head", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .height .line .line-tail", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.45,
                end: 0.2,
                media: new e("#measurements .height .line", 0.65, [{
                    property: "height",
                    from: 0,
                    to: 100,
                    units: "%",
                    easing: "keyspline",
                    keyspline: [0.29, 0.01, 0.3, 1]
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#measurements .height .measurement-container", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .width .line", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .width .line-head", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 0.2,
                media: new e("#measurements .width .line-tail", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.45,
                end: 0.2,
                media: new e("#measurements .width .line", 0.65, [{
                    property: "width",
                    from: 0,
                    to: 100,
                    units: "%",
                    easing: "keyspline",
                    keyspline: [0.29, 0.01, 0.3, 1]
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#measurements .width .measurement-container", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .height .line", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .height .line-head", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .height .line-tail", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .height .measurement-container", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .width .line", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .width .line-head", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .width .line-tail", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1,
                    units: "%"
                }])
            }, {
                start: 0,
                end: 1,
                media: new e("#measurements .width .measurement-container", 1, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .height .measurement-container", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .height .line", 0.5, [{
                    property: "height",
                    from: 100,
                    to: 0,
                    units: "%"
                }, {
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .height .line-head", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .height .line-tail", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .width .measurement-container", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .width .line", 0.5, [{
                    property: "width",
                    from: 100,
                    to: 0,
                    units: "%"
                }, {
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .width .line-head", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                end: 1.5,
                media: new e("#measurements .width .line-tail", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "design",
            pause: 45,
            time: 45,
            labelSelector: "#design",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_14").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    l.classList.remove("show")
                }
            }, {
                type: "pauseexit",
                action: function (i) {
                    13 === i.to && l.classList.add("show")
                }
            }],
            clips: [{
                start: -0.1,
                end: 1.4,
                media: new h(".still_14", 1.5)
            }, {
                start: -0.5,
                end: 0,
                media: new e("#design .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#design .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "assembly",
            pause: 46.3,
            time: 46.3,
            labelSelector: "#assembly",
            events: [{
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_14").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.8,
                end: -0.3,
                media: new e("#assembly .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#assembly .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#assembly .thermalcore", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0,
                media: new e("#assembly .enclosure", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#assembly .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#assembly .thermalcore", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0,
                end: 0.5,
                media: new e("#assembly .enclosure", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "later this year",
            pause: 49.03,
            time: 49.03,
            labelSelector: "#comingsoon",
            events: [{
                type: "pauseenter",
                action: function () {
                    s.querySelector(".caret").classList.add("show")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    window.setTimeout(function () {
                        s.querySelector(".caret").classList.remove("show")
                    }, 500)
                }
            }, {
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_15").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_15").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0,
                media: new e(".still_15", 0.1, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -1.3,
                end: 0,
                media: new e("#globalheader", 1.3, [{
                    property: "opacity",
                    from: 0,
                    to: 1,
                    easing: "easeInQuad"
                }, {
                    property: "translate",
                    axis: "y",
                    units: "px",
                    from: 0,
                    to: 0
                }])
            }, {
                start: -1.3,
                end: 0,
                media: new e("#comingsoon .copy", 1.3, [{
                    property: "opacity",
                    from: 0,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: -0.3,
                end: 0,
                media: new e("#comingsoon .copy", 0.3, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -1.3,
                end: 0,
                media: new h("#comingsoon .caret", 1.3)
            }]
        }]
    }
}), AC.define("macpro/shared/controller/Clip", ["require", "macpro/shared/event/Emitter"], function (g) {
    function e(a, b) {
        f.call(this), this._mediaTimer = b, this._clips = [].concat(a), this._update = this._update.bind(this), this._prevTime = this._mediaTimer.currentTime, this._duration = 0, this._clips.forEach(function (c) {
            c.media.el.classList.add("clip"), c.end || (c.end = c.start + c.media.duration, c.pauses && c.pauses.forEach(function (d) {
                c.end += d.to - d.from
            })), this._duration = Math.max(this._duration, c.end)
        }, this)
    }
    var f = g("macpro/shared/event/Emitter"),
        h = e.prototype = new f;
    return h.constructor = e, h._getActiveClips = function (a) {
        return this._clips.filter(function (b) {
            return b.media !== this._mediaTimer && b.start <= a && a <= b.end
        }, this)
    }, h._timeToClipTime = function (a) {
        var b = 0;
        return a.pauses && a.pauses.forEach(function (c) {
            this._mediaTimer.currentTime >= c.from && this._mediaTimer.currentTime >= c.to ? b += c.to - c.from : this._mediaTimer.currentTime >= c.from && this._mediaTimer.currentTime < c.to && (b += this._mediaTimer.currentTime - c.from)
        }.bind(this)), this._mediaTimer.currentTime - a.start - b
    }, h._processTransitoryClips = function (a, c) {
        var d = this._getActiveClips(a),
            b = this._getActiveClips(c);
        d = d.filter(function (j) {
            return -1 === b.indexOf(j)
        }), d.forEach(function (j) {
            j.media.el && j.media.el.classList.remove("visible"), j.media.currentTime = this._timeToClipTime(j)
        }, this), b.forEach(function (j) {
            j.media.el && j.media.el.classList.add("visible"), j.media.currentTime = this._timeToClipTime(j)
        }, this)
    }, h._update = function (a, b) {
        this.currentTime < 0 && (this.trigger("start"), this.pause(), this._mediaTimer.currentTime = 0), this.trigger("timeupdate"), this._mediaTimer.update && this._mediaTimer.update(), (this.currentTime >= this._duration || b) && (this.pause(), this.trigger("ended"), this._mediaTimer.currentTime = this._duration), this._processTransitoryClips(this._prevTime, this.currentTime), this.paused || (this._animationID = window.requestAnimationFrame(this._update)), this._prevTime = this.currentTime
    }, h.play = function () {
        var a = !0;
        if (this.paused) {
            if (this.currentTime < 0.5 && this.playbackRate < 0) {
                return this.currentTime = 0, this.trigger("play"), void 0
            }
            if (this.currentTime > this.duration - 0.5 && this.playbackRate > 0) {
                return this.currentTime = this.duration, this.trigger("play"), void 0
            }
            a = this._mediaTimer.play(), this.trigger("play"), this._animationID = window.requestAnimationFrame(this._update)
        }
        return a
    }, h.pause = function () {
        return this.paused || (this._mediaTimer.pause(), this.trigger("pause"), window.cancelAnimationFrame(this._animationID)), this
    }, Object.defineProperties(e.prototype, {
        currentTime: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._mediaTimer.currentTime
            },
            set: function (a) {
                this._mediaTimer.currentTime = a, this._update()
            }
        },
        playbackRate: {
            get: function () {
                return this._mediaTimer.playbackRate
            },
            set: function (a) {
                this._mediaTimer.playbackRate = a
            }
        },
        paused: {
            get: function () {
                return this._mediaTimer.paused
            },
            set: function () {}
        },
        duration: {
            get: function () {
                return this._duration
            },
            set: function () {}
        }
    }), e
}), AC.define("flow/diff/Loader", ["require", "assetLoader/AssetLoader"], function (g) {
    function e(b, d) {
        var i, c, a = b.match(/#/g).length;
        if (this.imagesUrls = [], !d) {
            throw new Error("0 images provided")
        }
        for (i = 1; d >= i; i++) {
            c = "0000" + i, c = c.substring(c.length - a), this.imagesUrls.push(b.replace(/#{2,}/g, c))
        }
    }
    var f, h = g("assetLoader/AssetLoader");
    return f = e.prototype, f.load = function () {
        return new h(this.imagesUrls).load()
    }, e
}), AC.define("flow/diff/Render", ["require", "flow/diff/Loader", "defer/Deferred"], function (i) {
    function e(a, b) {
        this.flowData = a, this.flowData.imageUrlPattern = b
    }
    var g, j = i("flow/diff/Loader"),
        h = i("defer/Deferred");
    return g = e.prototype, g._storeImages = function (a) {
        return this.images = a, this._blocksPerFullDiff = a[0].width / this.flowData.blockSize * (a[0].height / this.flowData.blockSize), (new h).resolve()
    }, g._applyDiffRange = function (o, G) {
        for (var r, n, l = G.block, c = G.length, b = o.canvas.width / this.flowData.blockSize, u = Math.floor(l / this._blocksPerFullDiff), d = this.images[u].width, m = l % this._blocksPerFullDiff, s = d / this.flowData.blockSize, f = m % s * this.flowData.blockSize, t = Math.floor(m / (s || 1)) * this.flowData.blockSize, a = G.location % b * this.flowData.blockSize, p = Math.floor(G.location / b) * this.flowData.blockSize; c;) {
            r = Math.min(c * this.flowData.blockSize, o.canvas.width - a, d - f), n = r / this.flowData.blockSize, o.drawImage(this.images[u], f, t, r, this.flowData.blockSize, a, p, r, this.flowData.blockSize), c -= n, c && ((f += r) >= d && (f = 0, t += this.flowData.blockSize), (m += n) >= this._blocksPerFullDiff && (m = 0, f = 0, t = 0, u += 1, u === this.flowData.imagesRequired - 1 && (d = this.images[u].width)), (a += r) >= o.canvas.width && (a = 0, p += this.flowData.blockSize), l += n)
        }
    }, g.init = function () {
        return new j(this.flowData.imageUrlPattern, this.flowData.imagesRequired).load().then(this._storeImages.bind(this))
    }, g.renderDiff = function (a, b) {
        var c = a.getContext("2d");
        b -= 1, this.frames[b].forEach(function (d) {
            this._applyDiffRange(c, d)
        }.bind(this))
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(g, {
        frames: {
            get: function () {
                return this.flowData.frames
            },
            set: function (a) {
                this.flowData.frames = a
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/compositor/Sequence", ["require", "assetLoader/AssetLoader", "flow/diff/Render", "defer/Deferred"], function (k) {
    function e(a, b, c) {
        this._keyframes = a, this._imageUrlPattern = b, this._flowDataProvider = c
    }
    var h, l = k("assetLoader/AssetLoader"),
        j = k("flow/diff/Render"),
        i = k("defer/Deferred");
    return h = e.prototype, h._initDiffRender = function (a) {
        this._images = a, this.canvas.height = a[0].height, this.canvas.width = a[0].width, this.applyFrame(a[0])
    }, h.init = function (a) {
        return this.canvas = a || document.createElement("canvas"), new l(this._keyframes).load().then(this._initDiffRender.bind(this)).then(this._flowDataProvider.load.bind(this._flowDataProvider))
    }, h.createDiffRender = function (a) {
        return this._diffRender = new j(a, this._imageUrlPattern), this._diffRender.init()
    }, h.applyFrame = function (a) {
        var b = this.canvas.getContext("2d");
        b.drawImage(a, 0, 0)
    }, h.calculateRenderCount = function (a, b) {
        var c = 0;
        return Math.abs(b - a) >= b ? (a = 1, c = 1) : Math.abs(b - a) >= this.frameCount - b && this._images[1] && (a = this.frameCount - 2, c = 1), b > 0 && b < this.frameCount - 1 ? Math.abs(a - b) + c : c
    }, h.compositeFrames = function (a, c) {
        var d = new i;
        c = this.frameCount < c ? this.frameCount - 1 : 0 > c ? 0 : c, a = this.frameCount - 2 < a ? this.frameCount - 2 : 0 > a ? 0 : a;
        var b;
        if (Math.abs(c - a) >= c ? (a = 1, this.applyFrame(this._images[0])) : Math.abs(c - a) >= this.frameCount - c && this._images[1] && (a = this.frameCount - 2, this.applyFrame(this._images[1])), b = a > c ? -1 : c > a ? 1 : 0, c > 0 && c < this.frameCount - 1) {
            for (; a !== c;) {
                d.progress(a), this._diffRender.renderDiff(this.canvas, a), a += b, d.progress(a)
            }
        }
        return d.resolve(a), d.promise()
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(h, {
        frameCount: {
            get: function () {
                return this._diffRender.frames.length + 2
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._canvas
            },
            set: function (a) {
                return this._canvas = a
            },
            enumerable: !0
        },
        mainCompositor: {
            get: function () {
                for (var a = this; a._compositor;) {
                    a = a._compositor
                }
                return a
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/data/Manifest", [], function () {
    function b() {}
    return b
}), AC.define("flow/data/Block", [], function () {
    function b(d, a) {
        this.location = d, this.length = a
    }
    return b
}), AC.define("flow/data/processor", ["require", "flow/data/Manifest", "flow/data/Block"], function (i) {
    var e, g = i("flow/data/Manifest"),
        j = i("flow/data/Block"),
        h = {
            parseData: function (a) {
                e = 0;
                var b = a.frames.map(this._parseFrame, this);
                return Object.create(g.prototype, {
                    version: {
                        value: a.version
                    },
                    framecount: {
                        value: a.frameCount
                    },
                    blockSize: {
                        value: a.blockSize
                    },
                    imagesRequired: {
                        value: a.imagesRequired
                    },
                    reversible: {
                        value: a.reversible
                    },
                    superframeFrequency: {
                        value: a.superframeFrequency
                    },
                    frames: {
                        value: b
                    }
                })
            },
            _valueForCharAt: function (a, b) {
                var c = a.charCodeAt(b);
                if (c > 64 && 91 > c) {
                    return c - 65
                }
                if (c > 96 && 123 > c) {
                    return c - 71
                }
                if (c > 47 && 58 > c) {
                    return c + 4
                }
                if (43 === c) {
                    return 62
                }
                if (47 === c) {
                    return 63
                }
                throw "Invalid Bas64 character: " + a.charAt(b)
            },
            _createNumberFromBase64Range: function (b, d, f) {
                for (var c, a = 0; f--;) {
                    c = this._valueForCharAt(b, d++), a += c << 6 * f
                }
                return a
            },
            _parseFrame: function (c) {
                var d, b, a, f = [],
                    c = c.value || c;
                for (d = 0; d < c.length; d += 5) {
                    a = this._createNumberFromBase64Range(c, d, 3), b = this._createNumberFromBase64Range(c, d + 3, 2), f.push(Object.create(j.prototype, {
                        location: {
                            value: a,
                            enumerable: !0
                        },
                        length: {
                            value: b,
                            enumerable: !0
                        },
                        block: {
                            value: (e += b) - b,
                            enumerable: !0
                        }
                    }))
                }
                return f
            }
        };
    return h
}), AC.define("flow/data/provider/Async", ["require", "ajax/Ajax", "flow/data/processor"], function (i) {
    function e(a, b) {
        this._url = a, this._ajaxAdaptor = b || new j
    }
    var g, j = i("ajax/Ajax"),
        h = i("flow/data/processor");
    return g = e.prototype, g.load = function () {
        var a = this;
        return this._ajaxAdaptor.get(this._url).then(function (b) {
            try {
                var c = b.response || b.responseText;
                return JSON.parse(c)
            } catch (d) {}
        }).then(function (b) {
            return a._data = b, h.parseData(b)
        })
    }, e
}), AC.define("flow/data/provider/Sync", ["require", "defer/Deferred", "flow/data/processor"], function (i) {
    function e(a) {
        this._data = a
    }
    var g, j = i("defer/Deferred"),
        h = i("flow/data/processor");
    return g = e.prototype, g.load = function () {
        var a = new j;
        return a.resolve(h.parseData(this._data)), a.promise()
    }, e
}), AC.define("flow/Player", ["require", "defer/Deferred"], function (g) {
    function e(a, b) {
        this._flow = b, this._frameRate = 30, this.element = a, this.paused = !0, this.loop = !1
    }
    var f, h = g("defer/Deferred");
    return f = e.prototype, f._dispatchEvent = function (a) {
        var b = document.createEvent("Events");
        return b.initEvent(a, !0, !1), b.data = this, this.element.dispatchEvent(b), b
    }, f._timeToFrame = function (a) {
        var b;
        return b = Math.round(a / this.duration * this._flow.frameCount), b %= this._flow.frameCount + 1, 0 > b ? this._flow.frameCount + b : b
    }, f._advanceToTimeGlobal = function (a) {
        this._prevTime = this._prevTime || a, this._currentTime += (a - this._prevTime) / 1000 * this.playbackRate, this._prevTime = a;
        var b = this._timeToFrame(this._currentTime),
            c = !1;
        return this.loop ? this._currentTime = (this.duration + this._currentTime) % this.duration : this.playbackRate > 0 && this._currentTime > this.duration ? (b = this._flow.frameCount, this._currentTime = this.duration, c = !0) : this.playbackRate < 0 && this._currentTime < 0 && (b = 0, this._currentTime = 0, c = !0), this.paused || this.seeking ? (new h).reject() : this._flow.gotoFrame(b).then(function () {
            this._dispatchEvent("timeupdate"), c ? (this.paused = !0, this._dispatchEvent("ended")) : this._requestAnimationFrame = window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))
        }.bind(this))
    }, f._advanceToTimeLocal = function (a) {
        this.seeking || (this.seeking = !0, this._dispatchEvent("seeking"), this._currentTime = 1 * a, this._prevTime = null, window.cancelAnimationFrame(this._requestAnimationFrame), this._flow.gotoFrame(this._timeToFrame(a)).then(function () {
            this.seeking = !1, this._dispatchEvent("timeupdate"), this._dispatchEvent("seeked"), this._requestAnimationFrame = window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))
        }.bind(this)))
    }, f.load = function () {
        return this._dispatchEvent("loadstart"), this._flow.init(this.element).then(this._dispatchEvent.bind(this, "canplaythrough"))
    }, f.play = function () {
        return this.paused && (this.paused = !1, this._dispatchEvent("play"), this._prevTime = null, this._requestAnimationFrame = window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))), this
    }, f.pause = function () {
        return this.paused || (this.paused = !0, window.cancelAnimationFrame(this._requestAnimationFrame), this._dispatchEvent("pause")), this
    }, f.on = function () {
        this.element.addEventListener.apply(this.element, arguments)
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(f, {
        _currentTime: {
            value: 0,
            enumerable: !1,
            writable: !0
        },
        _playbackRate: {
            value: 1,
            enumerable: !1,
            writable: !0
        },
        currentTime: {
            get: function () {
                return 1 * this._currentTime
            },
            set: f._advanceToTimeLocal,
            enumerable: !0
        },
        frameRate: {
            get: function () {
                return this._frameRate
            },
            set: function (a) {
                isFinite(a) && (this._frameRate = a, this._dispatchEvent("durationchange"))
            },
            enumerable: !0
        },
        playbackRate: {
            get: function () {
                return 1 * this._playbackRate
            },
            set: function (a) {
                isFinite(a) && (this._playbackRate = 1 * a, this._dispatchEvent("ratechange"))
            },
            enumerable: !0
        },
        duration: {
            get: function () {
                return this._flow.frameCount / this.frameRate
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/keyframe/Loader", ["require", "assetLoader/AssetLoader", "defer/Deferred"], function (i) {
    function e(a, c) {
        var d, b = a.match(/#/g).length;
        this._keyframes = {}, a = a.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3"), this._imageUrls = [], c.frames && c.frames.forEach(function (k, f) {
            "keyframe" === k.type && (d = "0000" + f, d = d.substring(d.length - b), this._imageUrls.push(a.replace(/#+/g, d)), this._keyframes[f] = k)
        }.bind(this))
    }
    var g, j = i("assetLoader/AssetLoader"),
        h = i("defer/Deferred");
    return g = e.prototype, g.load = function () {
        return this._imageUrls.length > 0 ? new j(this._imageUrls).load() : (new h).resolve()
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(g, {
        keyframes: {
            get: function () {
                return this._keyframes
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/keyframe/Render", ["require", "flow/keyframe/Loader"], function (g) {
    function e(a, b) {
        this.flowData = a, this.flowData.imageUrlPattern = b
    }
    var f, h = g("flow/keyframe/Loader");
    return f = e.prototype, f._storeImages = function (a) {
        var c, d = 0;
        if (a && a.length > 0) {
            for (var b in this._loader._keyframes) {
                this._loader._keyframes.hasOwnProperty(b) && (c = a[d], this._loader._keyframes[b].image = c, d += 1)
            }
        }
    }, f.init = function () {
        return this._loader = new h(this.flowData.imageUrlPattern, this.flowData), this._loader.load().then(this._storeImages.bind(this))
    }, f.renderKeyframe = function (c, s, d) {
        var p = c.getContext("2d"),
            n = this._loader.keyframes[s],
            i = n.image,
            a = n.x,
            r = n.y,
            b = n.width,
            o = n.height;
        d === !0 ? p.drawImage(i, a, r, b, o, a, r, b, o) : this.flowData.reversible ? p.drawImage(i, 0, 0) : p.drawImage(i, a, r, b, o)
    }, e
}), AC.define("flow/compositor/decorator/Keyframe", ["require", "flow/keyframe/Render", "defer/Deferred"], function (i) {
    function e(a) {
        this._compositor = a, this._flowDataProvider = this.mainCompositor._flowDataProvider
    }
    var g, j = i("flow/keyframe/Render"),
        h = i("defer/Deferred");
    return g = e.prototype, g.init = function () {
        return this._keyframeDiffRender = new j(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern), this._keyframeDiffRender.init()
    }, g.applyFrame = function () {
        return this._compositor.applyFrame.apply(this._compositor, arguments)
    }, g.applyKeyframe = function (a, b) {
        this._keyframeDiffRender.renderKeyframe(this.canvas, a, b)
    }, g.compositeFrames = function (a, b) {
        if (!this._isKeyframeDiff(b - 1)) {
            return this._compositor.compositeFrames.apply(this._compositor, arguments)
        }
        var c = new h;
        return this.applyKeyframe(b - 1), c.resolve(a - 1), c.promise()
    }, g._isKeyframeDiff = function (a) {
        return a in this._keyframeDiffRender._loader._keyframes
    }, g.calculateRenderCount = function () {
        return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(g, {
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._compositor.canvas
            },
            set: function (a) {
                return this._compositor.canvas = a
            },
            enumerable: !0
        },
        mainCompositor: {
            get: function () {
                return this._compositor.mainCompositor
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/compositor/decorator/Superframe", [], function () {
    function c(a, b) {
        this._compositor = a, this._superframeInterval = b || 4
    }
    var d;
    return d = c.prototype, d._getClosestSuperframe = function (a) {
        return Math.round(a / this._superframeInterval) * this._superframeInterval
    }, d.init = function (a) {
        this._screenCanvas = a
    }, d.applyFrame = function () {
        this._compositor.applyFrame.apply(this._compositor, arguments)
    }, d.calculateRenderCount = function (a, b) {
        var e = this._getClosestSuperframe(a);
        return Math.abs(e - b) > this._superframeInterval / 2 ? (a = e + (a > b ? -1 : 1) * this._superframeInterval, this.calculateRenderCount(a, b) + 1) : Math.abs(e - b) + 1
    }, d.compositeFrames = function (a, e) {
        var h, b;
        return (0 >= e || e >= this.frameCount - 2) && this._compositor.compositeFrames(a, e), a > this.frameCount - 2 ? a = this.frameCount - 2 : 0 >= a && (a = 1), b = this._getClosestSuperframe(a), h = this._compositor.calculateRenderCount(a, e) > this.calculateRenderCount(a, e) ? this._compositor.compositeFrames(b, b).then(function () {
            var f = b + (a > e ? -1 : 1) * this._superframeInterval;
            this._compositor.compositeFrames(b, f).then(function () {
                return this.compositeFrames(f, e)
            }.bind(this))
        }.bind(this)) : this._compositor.compositeFrames(a, e).then(function () {}.bind(this)), h.then(function () {}.bind(this)), h
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(d, {
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._compositor.canvas
            },
            set: function (a) {
                return this._compositor.canvas = a
            },
            enumerable: !0
        },
        mainCompositor: {
            get: function () {
                return this._compositor.mainCompositor
            },
            enumerable: !0
        }
    }), c)
}), AC.define("flow/compositor/decorator/SuperKeyframe", ["require", "defer/Deferred"], function (g) {
    function e(a) {
        this._compositor = a, this._frames = this.mainCompositor._flowDataProvider._data.frames, this._superframeInterval = this.mainCompositor._diffRender.flowData.superframeFrequency
    }
    var f, h = g("defer/Deferred");
    return f = e.prototype, f.init = function () {
        return this._compositor.init.apply(this._compositor, arguments)
    }, f.applyFrame = function () {
        return this._compositor.applyFrame.apply(this._compositor, arguments)
    }, f.applyKeyframe = function () {
        this._compositor.applyKeyframe.apply(this._compositor, arguments)
    }, f.compositeFrames = function (c, d) {
        var i, b, a = new h;
        return 1 > d || d > this.frameCount - 2 ? this._compositor.compositeFrames.apply(this._compositor, arguments) : this._isKeyframeDiff(d - 1) ? (i = 1 === Math.abs(c - d) ? !0 : !1, this.applyKeyframe(d - 1, i), a.resolve(c - 1), a.promise()) : Math.abs(d - c) > this._superframeInterval && (b = this._getShortestRender(c, d), this._isKeyframeDiff(b - 1) || 0 >= b || b >= this.frameCount - 2) ? this._compositeFromSuperKeyframe(b, d) : this._compositor.compositeFrames.apply(this._compositor, [c, d])
    }, f._getShortestRender = function (c, i) {
        var m = this._compositor.calculateRenderCount,
            d = this._getClosestSuperKeyframe(i - 1),
            b = m.apply(this._compositor, [d, i]) + 1,
            a = m.apply(this._compositor, [c, i]);
        return a >= b ? d : c
    }, f._compositeFromSuperKeyframe = function (a, c) {
        var d = this.canvas.getContext("2d"),
            b = 0 >= a ? this.mainCompositor._images[0] : a >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[a - 1].image;
        return d.drawImage(b, 0, 0), this._compositor.compositeFrames.call(this._compositor, a, c)
    }, f._getClosestSuperFrame = function (a) {
        return Math.round(a / this._superframeInterval) * this._superframeInterval
    }, f._getClosestSuperKeyframe = function (c) {
        var i, m, d, b, a = this._frames.length;
        if (a + 1 > c && c > 0) {
            for (b = c - 1; b >= 0;) {
                if ("keyframe" === this._frames[b].type) {
                    i = b + 1;
                    break
                }
                b -= 1
            }
            for (b = c + 1; a - 1 >= b;) {
                if ("keyframe" === this._frames[b].type) {
                    m = b + 1;
                    break
                }
                b += 1
            }
        }
        return i = i ? i : 0, m = m ? m : this.frameCount, d = m - c > c - i ? i : m
    }, f._isKeyframeDiff = function () {
        return this._compositor._isKeyframeDiff.apply(this._compositor, arguments)
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(f, {
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._compositor.canvas
            },
            set: function (a) {
                return this._compositor.canvas = a
            },
            enumerable: !0
        },
        mainCompositor: {
            get: function () {
                return this._compositor.mainCompositor
            },
            enumerable: !0
        }
    }), e)
}), AC.define("flow/compositor/decorator/Cache", [], function () {
    function c(a, b) {
        this._compositor = a, this._keyframeInterval = b || 8, this._keyframes = []
    }
    var d;
    return d = c.prototype, d._getClosestKeyframe = function (a) {
        var b = a % this._keyframeInterval,
            e = Math.floor(a / this._keyframeInterval) + (b > this._keyframeInterval / 2 ? 1 : 0);
        return e
    }, d._getFrameFromKeyframe = function (a) {
        return a * this._keyframeInterval
    }, d._saveKeyframe = function (a) {
        var b, e = Math.floor(a / this._keyframeInterval);
        0 !== a % this._keyframeInterval || this._keyframes[e] || (b = document.createElement("canvas"), b.width = this._compositor.canvas.width, b.height = this._compositor.canvas.height, b.getContext("2d").drawImage(this._compositor.canvas, 0, 0), this._keyframes[e] = b)
    }, d.init = function () {
        return this._compositor.init.apply(this._compositor, arguments)
    }, d.applyFrame = function () {
        this._compositor.applyFrame.apply(this._compositor, arguments)
    }, d.calculateRenderCount = function (a, b) {
        return a = this._getFrameFromKeyframe(this._getClosestKeyframe(b)), this._compositor.calculateRenderCount(a, b) + 1
    }, d.compositeFrames = function (a, b) {
        var e = this._getClosestKeyframe(b);
        return this._keyframes[e] && this._compositor.calculateRenderCount(a, b) > this.calculateRenderCount(a, b) ? (a = this._getFrameFromKeyframe(e), this.applyFrame(this._keyframes[e]), this._compositor.compositeFrames(a, b).then(function () {})) : this._compositor.compositeFrames(a, b).then(function () {}, null, this._saveKeyframe.bind(this))
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(d, {
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._compositor.canvas
            },
            set: function (a) {
                return this._compositor.canvas = a
            },
            enumerable: !0
        }
    }), c)
}), AC.define("stats/Benchmark", [], function () {
    function b(a) {
        this.name = a
    }
    return b.prototype.start = function () {}, b.prototype.end = function () {}, b
}), AC.define("flow/compositor/decorator/Benchmark", ["require", "stats/Benchmark"], function (g) {
    function e(a) {
        this._compositor = a
    }
    var f, h = g("stats/Benchmark");
    return f = e.prototype, f.init = function () {
        var a = new h("init");
        return a.start(), this._compositor.init.apply(this._compositor, arguments).then(a.end.bind(a))
    }, f.applyFrame = function () {
        var a = new h("applyFrame");
        a.start(), this._compositor.applyFrame.apply(this._compositor, arguments), a.end.bind(a)
    }, f.calculateRenderCount = function () {
        return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
    }, f.compositeFrames = function () {
        var a = new h("renderFrames");
        return a.start(), this._compositor.compositeFrames.apply(this._compositor, arguments).then(a.end.bind(a))
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(f, {
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        },
        canvas: {
            get: function () {
                return this._compositor.canvas
            },
            set: function (a) {
                return this._compositor.canvas = a
            },
            enumerable: !0
        }
    }), e.prototype = f, e)
}), AC.define("flow/Flow", ["require", "defer/Deferred", "flow/compositor/decorator/Keyframe", "flow/compositor/decorator/Superframe", "flow/compositor/decorator/SuperKeyframe", "flow/compositor/decorator/Cache", "flow/compositor/decorator/Benchmark"], function (n) {
    function c(d, b) {
        this._compositor = d, this.options = b || {}
    }
    var o, r = n("defer/Deferred"),
        q = n("flow/compositor/decorator/Keyframe"),
        p = n("flow/compositor/decorator/Superframe"),
        e = n("flow/compositor/decorator/SuperKeyframe"),
        a = n("flow/compositor/decorator/Cache"),
        i = n("flow/compositor/decorator/Benchmark");
    return o = c.prototype, o.gotoFrame = function (b) {
        return this._rendering ? (new r).resolve() : this._currentFrame === b ? (new r).resolve() : (this._rendering = !0, this._compositor.compositeFrames(this._currentFrame, b).then(function () {
            this._rendering = !1, this._currentFrame = b
        }.bind(this)))
    }, o.init = function (d) {
        var b;
        return "CANVAS" === d.nodeName ? b = d : (b = document.createElement("canvas"), d.appendChild(b)), this._compositor.init(b).then(function (f) {
            return r.all([this._compositor.createDiffRender(f).then(this._decorateCompositor.bind(this))])
        }.bind(this))
    }, o._decorateCompositor = function () {
        var f = this._compositor,
            d = this._compositor._diffRender.flowData,
            b = this._compositor.canvas;
        return d.superframeFrequency && (f = new p(f, d.superframeFrequency)), 3 === d.version && (f = new q(f)), 3 === d.version && d.superframeFrequency && (f = new e(f)), this.options.keyframeCache && (f = new a(f, this.options.keyframeCache)), this.options.benchmark && (f = new i(f)), f === this._compositor ? (new r).resolve() : (this._compositor = f, this._compositor.init(b))
    }, "function" != typeof Object.defineProperties ? function () {} : (Object.defineProperties(o, {
        _currentFrame: {
            value: 0,
            enumerable: !1,
            writable: !0
        },
        frameCount: {
            get: function () {
                return this._compositor.frameCount
            },
            enumerable: !0
        }
    }), c)
}), AC.define("flow/playerFactory", ["require", "flow/compositor/Sequence", "flow/data/provider/Async", "flow/data/provider/Sync", "flow/Player", "flow/Flow"], function (k) {
    function m(h, c, p, d, j) {
        var f, g, b;
        return j = j || {}, j = {
            keyframeCache: "undefined" == typeof j.keyframeCache ? 8 : j.keyframeCache,
            benchmark: "undefined" == typeof j.benchmark ? !1 : j.benchmark,
            preload: "undefined" == typeof j.preload ? !0 : j.preload
        }, c = c || [h.getAttribute("data-start-frame")], h.getAttribute("data-end-frame") && c.push(h.getAttribute("data-end-frame")), p = p || h.getAttribute("data-image-url-pattern"), b = "string" == typeof d ? new l(d) : new i(d), f = new n(c, p, b), g = new e(h, new a(f, j)), j.preload && g.load(), g
    }
    var n = k("flow/compositor/Sequence"),
        l = k("flow/data/provider/Async"),
        i = k("flow/data/provider/Sync"),
        e = k("flow/Player"),
        a = k("flow/Flow");
    return m
}), AC.define("macpro/shared/MediaTimer", [], function () {
    function c() {
        this._currentTimeMS = 0, this._playbackRate = 1, this.playing = !1, this._paused = !0, this._resetStartTime()
    }
    var d = c.prototype;
    return d._updateCurrentTime = function () {
        var a, b = +new Date;
        a = this.paused ? 0 : b - this._startTime, this._currentTimeMS += a * this._playbackRate, this._startTime = b
    }, d._resetStartTime = function () {
        this._startTime = +new Date
    }, d.play = function () {
        return this._resetStartTime(), this.playing = !0, this._paused = !1, this
    }, d.pause = function () {
        return this._updateCurrentTime(), this.playing = !1, this._paused = !0, this
    }, Object.defineProperties(d, {
        currentTime: {
            get: function () {
                return this._updateCurrentTime(), this._currentTimeMS / 1000
            },
            set: function (a) {
                this._resetStartTime(), this._currentTimeMS = 1000 * a
            }
        },
        playbackRate: {
            get: function () {
                return this._playbackRate
            },
            set: function (a) {
                this._resetStartTime(), this._playbackRate = a
            }
        },
        paused: {
            get: function () {
                return this._paused
            },
            set: function () {}
        }
    }), c
}), AC.define("macpro/shared/media/TimedVideo", ["require", "macpro/shared/MediaTimer", "defer/Deferred"], function (i) {
    function e(c, d, b) {
        this._deferred = new j, this._paused = !0, this._playbackRate = 1, this._backwardsTimer = new g, this._video = document.createElement("video"), b && (this._video.poster = b);
        var a = function (f) {
            this._video.removeEventListener("error", a), this._video.parentNode.removeChild(this._video), this._deferred.reject(f)
        }.bind(this);
        this._video.addEventListener("error", a), this._video.addEventListener("canplay", function (f) {
            this._video.removeEventListener("error", a), this.canplay = !0, this._deferred.resolve(f)
        }.bind(this)), this._video.src = d, c.appendChild(this._video)
    }
    var g = i("macpro/shared/MediaTimer"),
        j = i("defer/Deferred"),
        h = e.prototype;
    return h.promise = function () {
        return this._deferred.promise()
    }, h.update = function () {
        this.playbackRate < 0 && (this._video.currentTime = this._backwardsTimer.currentTime)
    }, h.play = function () {
        return this.paused && (this.playbackRate >= 0 ? (this._video.playbackRate = this.playbackRate, this._video.play()) : (this._backwardsTimer.playbackRate = this.playbackRate, this._backwardsTimer.play()), this._paused = !1), !0
    }, h.pause = function () {
        this.paused || (this._video.pause(), this._backwardsTimer.pause(), this.currentTime = this.currentTime, this._paused = !0)
    }, Object.defineProperties(h, {
        currentTime: {
            get: function () {
                return !this.paused && this.playbackRate >= 0 ? this._video.currentTime : this._backwardsTimer.currentTime
            },
            set: function (a) {
                this._video.currentTime = a, this._backwardsTimer.currentTime = a
            }
        },
        playbackRate: {
            get: function () {
                return this._playbackRate
            },
            set: function (a) {
                this._playbackRate = a
            }
        },
        paused: {
            get: function () {
                return this._paused
            },
            set: function () {}
        }
    }), e
}), AC.define("macpro/shared/media/BiVideo", ["require", "defer/Deferred", "macpro/shared/MediaTimer"], function (i) {
    function e(b, o, l, f, s) {
        var n, t = new g,
            m = new g;
        s = s || 0, this._paused = !0, this._playbackRate = 1, this._mediaTimer = new j, this._forwardsVideo = document.createElement("video"), f && (this._forwardsVideo.poster = f), l && (this._backwardsVideo = document.createElement("video")), this._canPlayBackwards = !1, this._canPlayForwards = !1;
        var c = function (k) {
            n = +new Date, document.removeEventListener("touchstart", c), this._forwardsVideo.addEventListener("canplaythrough", function () {
                document.addEventListener("touchstart", a)
            }), this._forwardsVideo.load(), window.app.uiController.next(), k.preventDefault()
        }.bind(this),
            a = function (k) {
                document.removeEventListener("touchstart", a);
                var q = setInterval(function () {
                    var r;
                    try {
                        r = this._forwardsVideo.seekable.end(0)
                    } catch (u) {}
                    r === this._forwardsVideo.duration && this.paused && (clearInterval(q), this._forwardsVideo.addEventListener("seeked", function () {
                        this._forwardsVideo.style.opacity = 1
                    }.bind(this)), this._forwardsVideo.currentTime = s || this.currentTime, this._canPlayForwards = !0, app.uiController.enableInput())
                }.bind(this), 100);
                k.preventDefault()
            }.bind(this),
            d = function (k) {
                this._forwardsVideo.removeEventListener("progress", d), t.resolve(k)
            }.bind(this),
            p = function (k) {
                this._backwardsVideo.removeEventListener("progress", p), m.resolve(k)
            }.bind(this);
        this._forwardsVideo.style.height = "100%", this._forwardsVideo.style.width = "100%", this._forwardsVideo.style.opacity = 0, this._forwardsVideo.controls = !1, l ? (this._backwardsVideo.style.height = "100%", this._backwardsVideo.style.width = "100%", this._backwardsVideo.style.opacity = 0, this._backwardsVideo.controls = !1, this._backwardsVideo.addEventListener("progress", p), this._backwardsVideo.src = l, b.appendChild(this._backwardsVideo)) : m = !0, this._forwardsVideo.addEventListener("progress", d), this._forwardsVideo.src = o, b.appendChild(this._forwardsVideo), this._promise = g.join(t, m).then(function () {
            document.addEventListener("touchstart", c)
        }.bind(this))
    }
    var g = i("defer/Deferred"),
        j = i("macpro/shared/MediaTimer"),
        h = e.prototype;
    return h.promise = function () {
        return this._promise
    }, h.play = function () {
        var a = !1;
        return this.paused && (this.playbackRate >= 0 ? this._canPlayForwards ? (this._forwardsVideo.play(), this._forwardsVideo.style.opacity = "1", this._backwardsVideo && (this._backwardsVideo.style.opacity = "0"), this._paused = !1, a = !0) : (this._mediaTimer.play(), this._paused = !1, a = !0) : this._canPlayBackwards ? (this._backwardsVideo.currentTime = this._backwardsVideo.duration - this._mediaTimer.currentTime, this._backwardsVideo.play(), setTimeout(function () {
            this._forwardsVideo.style.opacity = "0", this._backwardsVideo.style.opacity = "1"
        }.bind(this), 300), this._paused = !1, a = !0) : this._backwardsVideo && (this._backwardsVideo.play(), this._backwardsVideo.pause(), this._backwardsVideo.buffered.end(0) === this._backwardsVideo.duration && (this._canPlayBackwards = !0, this._backwardsVideo.currentTime = this._backwardsVideo.duration - this._mediaTimer.currentTime))), a
    }, h.pause = function () {
        this._playbackRate >= 0 ? this._canPlayForwards && (this._forwardsVideo.pause(), this._mediaTimer.currentTime = this._forwardsVideo.currentTime, this._canPlayBackwards && (this._backwardsVideo.currentTime = this._backwardsVideo.duration - this._mediaTimer.currentTime)) : this._canPlayBackwards && (this._backwardsVideo.pause(), this._mediaTimer.currentTime = this._backwardsVideo.duration - this._backwardsVideo.currentTime, this._forwardsVideo.currentTime = this._mediaTimer.currentTime), this._mediaTimer.pause(), this._paused = !0
    }, Object.defineProperties(h, {
        currentTime: {
            get: function () {
                return this._playbackRate >= 0 && this._canPlayForwards ? this._forwardsVideo.currentTime : this._playbackRate < 0 && this._canPlayBackwards ? this._backwardsVideo.duration - this._backwardsVideo.currentTime : this._mediaTimer.currentTime
            },
            set: function (a) {
                if (this._paused) {
                    this._mediaTimer.currentTime = a;
                    try {
                        this._forwardsVideo.currentTime = a, this._forwardsVideo.play(), this._forwardsVideo.pause()
                    } catch (b) {}
                    if (this._backwardsVideo) {
                        try {
                            this._backwardsVideo.currentTime = this._backwardsVideo.duration - a
                        } catch (b) {}
                    }
                }
            }
        },
        playbackRate: {
            get: function () {
                return this._playbackRate
            },
            set: function (a) {
                if (this._paused) {
                    var b = this.currentTime;
                    this._playbackRate = a, this.currentTime = b
                }
            }
        },
        paused: {
            get: function () {
                return this._paused
            },
            set: function () {}
        }
    }), e
}), AC.define("macpro/shared/ClipContainer", ["require", "macpro/shared/controller/Clip", "flow/playerFactory", "macpro/shared/media/TimedVideo", "macpro/shared/media/BiVideo", "macpro/shared/MediaTimer", "defer/Deferred", "assetLoader/AssetLoader"], function (l) {
    function o(f) {
        var d, c = document.getElementById("stillcontainer");
        for (var b in f) {
            c.querySelector(".still_" + b) || (d = document.createElement("img"), d.src = f[b], d.alt = "", d.className = "still still_" + b, c.appendChild(d))
        }
    }

    function p(b, d, c) {
        this.containerElement = b, this.config = d, this.clips = c
    }
    var m = l("macpro/shared/controller/Clip"),
        i = l("flow/playerFactory"),
        e = l("macpro/shared/media/TimedVideo"),
        a = l("macpro/shared/media/BiVideo"),
        n = (l("macpro/shared/MediaTimer"), l("defer/Deferred"));
    return l("assetLoader/AssetLoader"), p.prototype.constructor = p, p.prototype.initFlow = function (h) {
        var j, c = new n,
            A = "json",
            d = "jpg",
            f = [h.flowKeyFrame, h.flowEndFrame],
            b = h.diffDir,
            k = b + "flow_###." + d,
            g = /^https?:\/\/[^\/]+\//i,
            r = h.manifest.replace(g, "/") + "flow_manifest." + A;
        return h.stills && o(h.stills, h.stillsDir), j = i(this.containerElement, f, k, r, {
            superframes: !1,
            keyframeCache: !1,
            benchmark: !1
        }), j.frameRate = h.fps, j.loop = !1, j.on("canplaythrough", function (q) {
            c.resolve(q)
        }), this.mediaElement = j, c.promise()
    }, p.prototype.initVideo = function (b) {
        return b.stills && o(b.stills), this.mediaElement = new e(this.containerElement, b.file, b.poster), this.mediaElement.promise()
    }, p.prototype.initBiVideo = function (b) {
        return b.stills && o(b.stills), this.mediaElement = new a(this.containerElement, b.file, b.backwards, b.poster, b.startTime), this.mediaElement.promise()
    }, p.prototype.loadExperience = function (b) {
        switch (b.type) {
        case "bivideo":
            return this.initBiVideo(b);
        case "video":
            return this.initVideo(b);
        case "flow":
            return this.initFlow(b)
        }
    }, p.prototype.load = function () {
        var c = new n,
            b = this.config;
        return this.loadExperience(b[0]).then(function () {
            c.resolve()
        }, function () {
            this.loadExperience(b[1]).then(function () {
                c.resolve()
            })
        }.bind(this)), c.promise().then(function () {
            this.clipController = new m(this.clips, this.mediaElement)
        }.bind(this))
    }, p.prototype.play = function () {
        this.clipController.play()
    }, p
}), AC.define("macpro/shared/controller/Section", ["require", "macpro/shared/MediaTimer", "macpro/shared/event/Emitter", "macpro/shared/clip/Tween"], function (l) {
    function o(d, c, b) {
        if (p.call(this), !c || !c) {
            throw new Error("SectionController: timeline is missing or incomplete.")
        }
        this._clipController = d, this._pauseTimeline = c, this._sections = b, this._currentSectionIndex = 0, this._currentPauseIndex = 0, this._seekable = !1, this._update = this._update.bind(this), this._pauses = this._sections.filter(function (f) {
            return "pause" in f
        }), this.fadeOutAnim = new m("#curtain", 0.5, [{
            property: "opacity",
            from: 0,
            to: 1
        }]), this.fadeInAnim = new m("#curtain", 0.5, [{
            property: "opacity",
            from: 1,
            to: 0
        }]), this._curtain = document.getElementById("curtain"), this.on("pauseenter:0", function () {
            this._seekable = !0
        }.bind(this)), this._clipController.on("timeupdate", this._update), this._clipController.on("ended", function () {
            this._currentPauseIndex = this._pauseTimeline.length - 1, this._enableSections(null, !0)
        }.bind(this)), this._clipController.on("play", this._derivePauseIndex.bind(this))
    }
    var p = (l("macpro/shared/MediaTimer"), l("macpro/shared/event/Emitter")),
        m = l("macpro/shared/clip/Tween"),
        i = 500,
        e = "IE" === AC.Environment.Browser.name,
        a = AC.Environment.Feature.cssPropertyAvailable("transition"),
        n = o.prototype = new p;
    return n.constructor = o, n._update = function () {
        var g = this.currentTime,
            j = this._clipController.playbackRate > 0,
            b = !j,
            h = !this.paused || 0 === g || g === this.duration,
            f = j && g >= this._pauseTimeline[this._currentPauseIndex + 1],
            d = b && g <= this._pauseTimeline[this._currentPauseIndex - 1],
            c = h && (f || d);
        c && (this._clipController.pause(), this._currentPauseIndex += j ? 1 : -1, g = this._pauseTimeline[this._currentPauseIndex], this._clipController.currentTime = g), this._enableSections(g), c && this.trigger("pauseenter:" + this._currentPauseIndex, {
            from: this._currentPauseIndex + (j ? -1 : 1),
            to: this._currentPauseIndex,
            section: this._pauses[this._currentPauseIndex]
        })
    }, n._derivePauseIndex = function (c) {
        for (var b = 0; this._pauseTimeline[b] < c;) {
            this._currentPauseIndex = b++
        }
        return this._currentPauseIndex
    }, n._deriveSectionIndex = function (b) {
        var d, c;
        if (b === this.duration) {
            return this._sections.length - 1
        }
        if (0 === b) {
            return 0
        }
        if (this._clipController.playbackRate > 0) {
            for (d = 0; d < this._sections.length && this._sections[d].time < b;) {
                c = ++d
            }
        } else {
            for (d = this._sections.length - 1; d > -1 && this._sections[d].time > b;) {
                c = --d
            }
        }
        return c
    }, n._enableSections = function (f, d) {
        var f = f || this.currentTime,
            c = d ? this._sections.length - 1 : this._deriveSectionIndex(f),
            b = document.querySelectorAll("#panelcontainer > section");
        this._prevSectionIndex !== c && (this._currentSectionIndex = c, [].forEach.call(b, function (j, g) {
            var k = c === g,
                h = c >= g - 1 && g + 1 >= c;
            j.classList[k ? "add" : "remove"]("front"), j.classList[h ? "add" : "remove"]("show")
        }), this._prevSectionIndex = c)
    }, n._fadeOut = function () {
        a ? this._curtain.classList.add("fadeOut") : this._runTimeFade(!0)
    }, n._fadeIn = function () {
        a ? this._curtain.classList.remove("fadeOut") : this._runTimeFade(!1)
    }, n._runTimeFade = function (g) {
        function k(q) {
            c || (c = q), h = (q - c) / 1000, f = h / j * j, b.tween(f), j > h ? window.requestAnimationFrame(k) : g || (d.style.zIndex = 30)
        }
        var c, h, f, b = g ? this.fadeOutAnim : this.fadeInAnim,
            d = this._curtain,
            j = b.duration;
        d.style.zIndex = 10000, window.requestAnimationFrame(k)
    }, n._makeJump = function (b, d, c) {
        return function () {
            var f = this._pauseTimeline.indexOf(b);
            this._clipController.pause(), this.trigger("seek", c), setTimeout(function () {
                this._fadeIn(), this._currentPauseIndex = f, this.currentTime = b, this._enableSections(b), this.trigger("pauseenter:" + f, {
                    from: this._currentPauseIndex,
                    to: f,
                    section: this._pauses[f]
                }), this._seekable = !0, "function" == typeof d && cb.call()
            }.bind(this), i)
        }.bind(this)
    }, n._makeEndJump = function (f, d, c, b) {
        return function () {
            var g = this._pauseTimeline.indexOf(f),
                h = this._clipController._mediaTimer._video;
            b = document.getElementById("wrapper"), b.style.position = "absolute", b.style.top = "0px", this._clipController.pause(), e && (h.play(), h.pause(), h.play(), h.pause()), setTimeout(function () {
                b.style.position = "relative", this.trigger("seek", c), this._currentPauseIndex = g, this.currentTime = f, this._enableSections(), -1 !== g && this.trigger("pauseenter:" + g, {
                    from: this._currentPauseIndex,
                    to: g,
                    section: this._pauses[g]
                }), this._seekable = !0, document.documentElement.classList.add("overflow"), this._fadeIn()
            }.bind(this), i)
        }.bind(this)
    }, n.seek = function (k, d) {
        var r, g = this._pauseTimeline.indexOf(k),
            E = k > this.currentTime ? 1 : -1,
            f = 1 == Math.abs(this._currentPauseIndex - g),
            b = this._currentPauseIndex == this._pauseTimeline.length - 1,
            h = this.currentTime === this.duration,
            c = b || h,
            s = c ? this._pauseTimeline.length - 1 : this._currentPauseIndex,
            j = {
                from: s,
                to: g
            }, t = this[c ? "_makeEndJump" : "_makeJump"].call(this, k, d, j);
        this._currentPauseIndex != g && this._seekable && (document.getElementById("curtain").style.display = "block", document.body.scrollTop > 0 && (document.body.scrollTop = 0), this.trigger("pauseexit:" + s, {
            from: s,
            to: g
        }), !c && this._clipController.paused && (this._clipController.playbackRate = E, r = this._clipController.play()), !c && f && r || (this._fadeOut(), this._seekable = !1, window.setTimeout(t, i)))
    }, n._triggerPauseExit = function () {
        var c = this._currentPauseIndex,
            b = this._clipController.playbackRate > 0 ? c + 1 : c - 1;
        (this._currentPauseIndex > 0 || this._clipController.playbackRate > 0) && this.trigger("pauseexit:" + c, {
                from: c,
                to: b
            })
    }, n.next = function () {
        var b = this._pauseTimeline[this._currentPauseIndex + 1];
        this._currentPauseIndex < this._pauseTimeline.length - 1 && this.seek(b)
    }, n.previous = function () {
        var b = this._pauseTimeline[this._currentPauseIndex - 1];
        this._currentPauseIndex > 0 && this.seek(b)
    }, n.getSectionFromPausePoint = function (b) {
        var d = app.sectionController._sections;
        for (var c in d) {
            if (d[c].pause === b) {
                return d[c]
            }
        }
    }, Object.defineProperties(o.prototype, {
        currentTime: {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return this._clipController.currentTime
            },
            set: function (b) {
                this._clipController.currentTime = b
            }
        },
        paused: {
            get: function () {
                return this._clipController.paused
            },
            set: function () {}
        },
        duration: {
            get: function () {
                return this._clipController.duration
            },
            set: function () {}
        }
    }), o
}), AC.define("macpro/shared/controller/Ui", [], function () {
    function f(a) {
        if (!a) {
            throw new Error("UIController: sectionController required for instantiation.")
        }
        this._sectionController = a, this._pauseTimeline = a._pauseTimeline, this._takeoverThreshold = d, this._bufferDistance = 0, this._inputControllers = [], this._lastInteractionType = null, this._acceptingInput = !0, this._sectionController.on("pauseenter", function () {
            window.setTimeout(function () {
                this._acceptingInput = !0
            }.bind(this), e)
        }.bind(this)), this.update = this.update.bind(this)
    }
    var d = 0.2,
        e = 250;
    return f.prototype = {
        getPauseDiff: function () {
            var a = 1 / 0,
                b = this._sectionController.currentTime;
            return this._pauseTimeline.forEach(function (c) {
                a = Math.min(a, Math.abs(b - c))
            }), a
        },
        update: function (a) {
            this._sectionController.paused && (this._bufferDistance += a, this.getPauseDiff() > this._takeoverThreshold ? a > 0 ? this._sectionController.next() : this._sectionController.previous() : this._sectionController.currentTime + a > 0 ? this._sectionController.currentTime += a : this._sectionController.currentTime = 0)
        },
        next: function () {
            this._sectionController.paused && this._acceptingInput && (this._sectionController.next(), this._acceptingInput = !1)
        },
        previous: function () {
            this._sectionController.paused && this._acceptingInput && (this._sectionController.previous(), this._acceptingInput = !1)
        },
        add: function (a) {
            -1 === this._inputControllers.indexOf(a) && this._inputControllers.push(a)
        },
        disableInput: function () {
            this._inputControllers.forEach(function (a) {
                a.disable()
            })
        },
        enableInput: function () {
            this._inputControllers.forEach(function (a) {
                a.enable()
            })
        }
    }, f
}), AC.define("macpro/shared/controller/Nav", ["require"], function () {
    function b(e, f) {
        var a = this._getNavigatableSections(f);
        this._sectionNav = document.getElementById("sectionNav"), this._navContainer = this._sectionNav.querySelector(".list"), this._navRange = this._sectionNav.querySelector(".range"), this._sectionController = e, this._handleClick = this._handleClick.bind(this), this._handlePauseEnter = this._handlePauseEnter.bind(this), this._handlePauseExit = this._handlePauseExit.bind(this), this._handleTouchMove = this._handleTouchMove.bind(this), this._handleTouchEnd = this._handleTouchEnd.bind(this), this._handleTouchStart = this._handleTouchStart.bind(this), this._handleMouseOver = this._handleMouseOver.bind(this), this._handleMouseOut = this._handleMouseOut.bind(this), this._handleChange = this._handleChange.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this), this._buildNavigation(a), this._sectionController.on("pauseexit", this._handlePauseExit), this._sectionController.on("pauseenter", this._handlePauseEnter), this._sectionNav.addEventListener("touchstart", this._handleTouchStart, !0), this._sectionNav.addEventListener("keydown", this._handleKeyDown), this._navRange && ("IE" === AC.Environment.Browser.name && (this._navRange.style.display = "none"), this._navRange.addEventListener("change", this._handleChange), this._navRange.addEventListener("focus", function () {
            var c = this._sectionNav.querySelector(".active");
            c && this._highlightNavItem(c)
        }.bind(this)), this._navRange.addEventListener("blur", function () {
            var c = this._sectionNav.querySelector(".hover");
            c && this._unhighlightNavItem(c)
        }.bind(this)))
    }
    return b.prototype = {
        constructor: b,
        _getNavigatableSections: function (a) {
            return this._navigatableSections || (this._navigatableSections = a.filter(function (d) {
                return !isNaN(d.pause) && d.labelSelector
            }).map(function (e, f) {
                return e.index = f, e
            })), this._navigatableSections
        },
        _handleKeyDown: function (e) {
            e.stopPropagation();
            var f, a;
            13 === e.keyCode && (f = this._navContainer.querySelector(".hover"), f && (a = parseFloat(f.getAttribute("data-seek-time"))), isNaN(a) || this._sectionController.seek(a))
        },
        _handlePauseEnter: function () {},
        _handleClick: function (e) {
            for (var f, a = e.target || e.srcElement; !a.getAttribute("data-seek-time");) {
                a = a.parentNode
            }
            f = parseFloat(a.getAttribute("data-seek-time")), isNaN(f) || this._sectionController.seek(f), window.app.uiController._lastInteractionType = "bubble-click"
        },
        _handleChange: function () {
            var e = this._navContainer.querySelector(".hover"),
                h = this._getNavigatableSections().length - 1 - this._navRange.value,
                a = this._navContainer.querySelector('[data-seek-index="' + h + '"]'),
                g = parseFloat(a.getAttribute("data-seek-time"));
            e && this._unhighlightNavItem(e), this._highlightNavItem(a), this._navRangeTimeout && clearTimeout(this._navRangeTimeout), this._navRangeTimeout = setTimeout(function () {
                window.app.uiController._lastInteractionType = "bubble-click", this._sectionController.seek(g)
            }.bind(this), 2000)
        },
        _updateRange: function (a) {
            this._navRange && (this._navRange.value = this._getNavigatableSections().length - 1 - a)
        },
        _handlePauseExit: function (e) {
            var h = e.to,
                a = this._navContainer.querySelectorAll(".active"),
                g = this._navContainer.querySelector('[data-seek-index="' + h + '"]');
            this._updateRange(h), [].forEach.call(a, function (c) {
                c.classList.remove("active"), c.classList.remove("hover")
            }), g && window.setTimeout(function () {
                g.classList.add("active")
            }.bind(this), 250)
        },
        _buildNavigation: function (e) {
            var h = document.createDocumentFragment(),
                a = document.getElementById("panelcontainer"),
                g = "touchstart" in window;
            e.forEach(function (f) {
                var d, c = document.createElement("li"),
                    m = a.querySelector(f.labelSelector),
                    l = m.getAttribute("data-section-label");
                m && (c.setAttribute("data-seek-index", f.index), c.setAttribute("data-seek-time", f.pause), c.setAttribute("title", l), c.innerHTML += '<span class="label">' + l + "</span>", c.innerHTML += '<span class="dot" data-nav-item="true"><span class="inner" data-nav-item="true"></span></span>', d = c.querySelector(".dot"), d.addEventListener(g ? "touchstart" : "click", this._handleClick), d.addEventListener("mouseover", this._handleMouseOver), d.addEventListener("mouseout", this._handleMouseOut), h.appendChild(c))
            }.bind(this)), this._navContainer.appendChild(h)
        },
        _handleMouseOver: function (e) {
            var f = e.target || e.srcElement,
                a = f.parentNode;
            this._highlightNavItem(a)
        },
        _highlightNavItem: function (a) {
            a.classList.add("hover")
        },
        _unhighlightNavItem: function (a) {
            a.classList.remove("hover")
        },
        _handleMouseOut: function (e) {
            var f = e.target || e.srcElement,
                a = f.parentNode;
            this._unhighlightNavItem(a)
        },
        _calcSection: function (a) {
            return this._lastSectionCalc = Math.round((a - this._navRect.top) / this._navRect.height * this._navCount), this._lastSectionCalc
        },
        _handleTouchStart: function (a) {
            return a.target || a.srcElement, this._navRect = document.getElementById("sectionNav").getBoundingClientRect(), this._navCount = document.querySelectorAll("#sectionNav li").length, this._updateHover(this._calcSection(a.pageY)), document.body.addEventListener("touchend", this._handleTouchEnd), document.body.addEventListener("touchmove", this._handleTouchMove), a.preventDefault(), a.stopPropagation(), !1
        },
        _updateHover: function (e) {
            var f = document.getElementById("sectionNav");
            [].slice.call(f.querySelectorAll("li.hover")).forEach(function (c) {
                c.querySelector(".label").style.display = "none", c.classList.remove("hover")
            });
            var a = f.querySelector('li[data-seek-index="' + e + '"]');
            a && (a.querySelector(".label").style.display = "block", a.classList.add("hover"))
        },
        _handleTouchMove: function (d) {
            var a;
            return this._throttled || (this._throttled = !0, a = this._calcSection(d.pageY), this._updateHover(a), window.clearTimeout(this._throttledTimeout), this._throttledTimeout = window.setTimeout(function () {
                this._throttled = !1
            }.bind(this), 50)), d.preventDefault(), d.stopPropagation(), !1
        },
        _handleTouchEnd: function (d) {
            var a;
            return document.body.removeEventListener("touchend", this._handleTouchEnd), document.body.removeEventListener("touchmove", this._handleTouchMove), a = document.getElementById("sectionNav").querySelector('li[data-seek-index="' + this._lastSectionCalc + '"]'), app.uiController._lastInteractionType = "bubble-click", a && (this._sectionController.seek(parseFloat(a.getAttribute("data-seek-time"))), a.classList.remove("hover")), d.preventDefault(), d.stopPropagation(), !1
        }
    }, b
}), AC.define("macpro/desktop/input/Wheel", [], function () {
    function f(a) {
        if (this.uiController = a, this.uiController.add(this), this.enabled = !0, this.max = 0, this.pixelToMediaSpeedRatio = e, this.onWheel = this.onWheel.bind(this), !("addWheelListener" in window)) {
            throw new Error("WheelInputController: window.addWheelListener polyfill missing.")
        }
        window.addWheelListener(document, this.onWheel)
    }
    var d = "Firefox" === AC.Environment.Browser.name,
        e = d ? 0.02 : 0.01;
    return f.prototype = {
        onWheel: function (a) {
            var b;
            this.enabled && (a.preventDefault(), b = a.deltaY, d && (b = this._normalize(b)), b *= this.pixelToMediaSpeedRatio, this.uiController.update(b), this.uiController._lastInteractionType = "scroll")
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        _normalize: function (a) {
            var b = this._max || 0.2;
            return a > b ? b = a : -b > a && (b = -a), this._max = b, clearTimeout(this._normalizeTimeout), this._normalizeTimeout = setTimeout(function () {
                this._max = null
            }.bind(this), 100), a / b
        }
    }, f
}), AC.define("macpro/desktop/input/Keyboard", ["require"], function () {
    function b(a) {
        this.uiController = a, this.uiController.add(this), this.enabled = !0, this.onKeyDown = this.onKeyDown.bind(this), document.addEventListener("keydown", this.onKeyDown)
    }
    return b.prototype = {
        keyMapping: {
            37: "previous",
            38: "previous",
            39: "next",
            40: "next",
            32: "next"
        },
        onKeyDown: function (e) {
            var f, a = e.keyCode;
            this.enabled && a in this.keyMapping && (f = this.keyMapping[e.keyCode], this.uiController._lastInteractionType = "scroll", this.uiController[f].call(this.uiController))
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        }
    }, b
}), AC.define("macpro/desktop/input/Click", ["require"], function () {
    function b(a) {
        this.uiController = a, this.uiController.add(this), this.enabled = !0, this.onClick = this.onClick.bind(this), document.addEventListener("click", this.onClick, !0)
    }
    return b.prototype = {
        onClick: function (e) {
            var h = e && e.target || e && e.srcElement,
                a = h && h.getAttribute && h.getAttribute("data-nav-item"),
                g = h && h.getAttribute("data-placeholder");
            window.clearTimeout(this._timeout), g && !a && (this.uiController._lastInteractionType = "image-click", this.uiController.next())
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        }
    }, b
}), AC.define("macpro/desktop/app/Desktop", ["require", "macpro/shared/app/Core", "macpro/desktop/timeline/intro", "macpro/desktop/timeline/timeline", "macpro/shared/ClipContainer", "macpro/shared/controller/Section", "macpro/shared/controller/Ui", "macpro/shared/controller/Nav", "macpro/desktop/input/Wheel", "macpro/desktop/input/Keyboard", "macpro/desktop/input/Click", "macpro/shared/clip/Tween", "macpro/shared/ComparisonChart"], function (f) {
    function t(g, k) {
        for (var b = g.parentNode, j = null; b.parentNode;) {
            if (b.classList && b.classList.contains(k)) {
                j = b;
                break
            }
            b = b.parentNode
        }
        return j
    }

    function p(b) {
        i.call(this), this.introcontainer = document.getElementById("introcontainer"), this.videocontainer = document.getElementById("videocontainer"), this.stillcontainer = document.getElementById("stillcontainer"), this.panelcontainer = document.getElementById("panelcontainer"), y = y(), h = h(), this.touch = "ontouchstart" in window, this.timeline = this.convertSectionsToClips(y), n && (this.timeline = this.addStaticChartClips(this.timeline)), this.introContainer = new s(this.introcontainer, b.intro, h), this.mainContainer = new s(this.videocontainer, b.main, this.timeline.clips), this.curtain = this.createFadeCurtain(), this.preventTouchDefault = this.preventTouchDefault.bind(this), document.addEventListener("touchstart", this.preventTouchDefault), this.revertToStaticDelay = 10000, this.revertToStatic = this.revertToStatic.bind(this), this.revertToStaticTimeout = window.setTimeout(this.revertToStatic, this.revertToStaticDelay), this.dynamic = !0, this.introContainer.load().then(function () {
            window.clearTimeout(this.revertToStaticTimeout), this.initializeInitialStill(), this.resizeFluidAreas(), this.introContainer.clipController && this.introContainer.clipController._mediaTimer && this.introContainer.clipController._mediaTimer._video && this.introContainer.clipController._mediaTimer._video.addEventListener("ended", function () {
                this.introContainer.clipController.currentTime < this.introContainer.clipController.duration && this.introContainer.clipController._update(null, !0)
            }.bind(this)), this.introContainer.clipController.on("ended", function () {
                this.cleanUpInitialStill(), this.mainContainer.load().then(this.initMain.bind(this))
            }.bind(this)), this.introContainer.play()
        }.bind(this)), window.app = this
    }
    var n = "IE" === AC.Environment.Browser.name,
        i = f("macpro/shared/app/Core"),
        h = f("macpro/desktop/timeline/intro"),
        y = f("macpro/desktop/timeline/timeline"),
        s = f("macpro/shared/ClipContainer"),
        d = f("macpro/shared/controller/Section"),
        l = f("macpro/shared/controller/Ui"),
        r = f("macpro/shared/controller/Nav"),
        e = f("macpro/desktop/input/Wheel"),
        c = f("macpro/desktop/input/Keyboard"),
        u = f("macpro/desktop/input/Click"),
        o = f("macpro/shared/clip/Tween"),
        m = f("macpro/shared/ComparisonChart"),
        a = [{
            selector: "processor-chart",
            pausePoint: 10
        }, {
            selector: "memory-chart",
            pausePoint: 13
        }, {
            selector: "graphics-chart",
            pausePoint: 17
        }, {
            selector: "storage-chart",
            pausePoint: 19
        }];
    return p.prototype = new i, p.prototype.constructor = p, p.prototype.revertToStatic = function () {
        var g = document.documentElement,
            b = document.body;
        document.getElementById("wrapper"), this.dynamic = !1, this.uiController && this.uiController.disableInput(), g.classList.remove("enabled"), g.classList.remove("overflow"), b.id = "static", this.setupStaticCharts()
    }, p.prototype.resizeFluidAreas = function (g, j) {
        var b;
        this.resizeContainers(), this.resizeCanvas(), b = this.getVideoHeight(), this.resizePlaceholders(b), this.resizeCallouts(b), this.resizeBottomContainers(), this.resizeDebounceTimeout && clearTimeout(this.resizeDebounceTimeout), j || (this.resizeDebounceTimeout = setTimeout(this.resizeFluidAreas.bind(this, null, !0), 250))
    }, p.prototype.getVideoHeight = function () {
        var g = videocontainer.querySelector("*") || introcontainer.querySelector("*"),
            j = g.getBoundingClientRect(),
            b = j.height;
        return b
    }, p.prototype.resizeContainers = function () {
        var g = window.innerHeight;
        window.innerWidth;
        var k = this.videocontainer,
            v = this.introcontainer,
            j = this.stillcontainer;
        this.panelcontainer;
        var b, q = k.querySelector("*") || v.querySelector("*");
        if (!q) {
            return !1
        }
        if (583 > g) {
            b = "495px"
        } else {
            if (750 > g) {
                var w = 750 - 1.52 * Math.abs(g - 750);
                b = w + "px"
            } else {
                b = "100%"
            }
        }
        j.style.height = b, v.style.height = b, k.style.height = b
    }, p.prototype.resizeCanvas = function () {
        var g, b = this.videocontainer.querySelector("canvas") || this.introcontainer.querySelector("canvas");
        b && (g = videocontainer.getBoundingClientRect().height, b.style.width = g * (b.width / b.height) + "px")
    }, p.prototype.resizeBottomContainers = function () {
        var b = this.panelcontainer.querySelectorAll(".bottom-container");
        [].forEach.call(b, function (g) {
            var j, k = g.querySelector(".copy");
            null !== k && (j = Math.round(k.getBoundingClientRect().height), g.style.minHeight = j + "px")
        })
    }, p.prototype.resizeCallouts = function (g) {
        var b = this.panelcontainer.querySelectorAll(".callout");
        [].forEach.call(b, function (D) {
            var C, H, G, v = 496,
                j = 0.0013,
                x = D.querySelector(".bars-container"),
                W = D.querySelector(".mid"),
                E = t(D, "placeholder-container"),
                z = D.querySelector(".label"),
                F = Math.round(W.getBoundingClientRect().height),
                k = parseFloat(E.getAttribute("data-height-ratio")),
                B = parseFloat(E.getAttribute("data-min-top")),
                A = B / v,
                w = g * k;
            if (null !== x && (G = z.height, x.style.height = F - G + "px"), E.classList.contains("true-center")) {
                D.style.top = "0px", D.style.height = w + "px"
            } else {
                if (window.innerHeight < 750) {
                    var q = 50 - 0.29 * Math.abs(window.innerHeight - 750);
                    0 > q && (q = 0), C = q
                } else {
                    C = g * A * g * j
                }
                H = g * k - (C + 0.3 * C), D.style.top = C + "px", D.style.height = H + "px"
            }
        })
    }, p.prototype.resizePlaceholders = function (g) {
        var b = this.panelcontainer.querySelectorAll(".placeholder-container");
        [].forEach.call(b, function (v) {
            var C, w, j, E = 496,
                x = 185,
                q = v.querySelector(".placeholder-inner"),
                z = parseFloat(v.getAttribute("data-min-top")),
                k = z / E,
                D = parseFloat(v.getAttribute("data-height-ratio")),
                B = parseFloat(v.getAttribute("data-width-ratio")),
                A = v.getAttribute("data-width-ratio-narrow");
            A && (A = parseFloat(A)), isNaN(k) || isNaN(D) || isNaN(B) || (j = E > g ? z : g * k, C = g * D, w = g * B, v.classList.contains("hero") && (k = z / (g + x), j = g * k, v.style.top = j + "px"), v.style.top = v.classList.contains("static-top") ? z + "px" : j + "px", q.style.width = w + "px", q.style.height = C + "px")
        })
    }, p.prototype.getMidVideoY = function () {
        var b = Math.round(document.getElementById("change").querySelector(".copy").getBoundingClientRect().height);
        return 0.07 * (document.documentElement.clientHeight - b)
    }, p.prototype.applyDynamicTranslation = function (g) {
        var j = this.getMidVideoY(),
            b = AC.Environment.Feature.cssPropertyAvailable("transition");
        b || g ? (AC.Element.setVendorPrefixStyle(this.videocontainer, "transform", "translate3d(0," + j + "px,0)"), AC.Element.setVendorPrefixStyle(this.stillcontainer, "transform", "translate3d(0," + j + "px,0)")) : this.applyRuntimeTween(j)
    }, p.prototype.getTranslateValues = function (g, k) {
        this.mainContainer.clipController.playbackRate;
        var b, j = 185;
        return 0 === g && 1 === k ? b = {
            from: j,
            to: this.getMidVideoY()
        } : 1 === g && 0 === k ? b = {
            from: this.getMidVideoY(),
            to: j
        } : 1 === g && 2 === k ? b = {
            from: this.getMidVideoY(),
            to: 0
        } : 2 === g && 1 === k && (b = {
            from: 0,
            to: this.getMidVideoY()
        }), b
    }, p.prototype.applyRuntimeTween = function (g) {
        function k(z) {
            var x = j / b * b;
            v || (v = z), j = (z - v) / 1000, q.tween(x), w.tween(x), b > j && requestAnimationFrame(k)
        }
        var v, j, b, q = new o("#videocontainer", 1.5, [{
                property: "translate2d",
                axis: "y",
                from: g.from,
                to: g.to,
                units: "px"
            }]),
            w = new o("#stillcontainer", 1.5, [{
                property: "translate2d",
                axis: "y",
                from: g.from,
                to: g.to,
                units: "px"
            }]),
            b = q.duration,
            v = null;
        window.requestAnimationFrame(k)
    }, p.prototype.setupMoveableSeekable = function () {
        function A(B) {
            B.classList.add("transition")
        }

        function x(B) {
            B.classList.remove("transition")
        }

        function b(B) {
            B.classList.add("lowered")
        }

        function q(B) {
            B.classList.remove("lowered")
        }

        function j(B) {
            AC.Element.setVendorPrefixStyle(B, "transform", "")
        }
        var g = this.videocontainer,
            z = this.stillcontainer,
            w = this.introcontainer,
            v = [g, z, w],
            k = AC.Environment.Feature.cssPropertyAvailable("transition");
        this.sectionController.on("seek", function (B) {
            0 === B.to ? ((1 !== B.from || 2 !== B.from) && v.forEach(j), v.forEach(x), v.forEach(b)) : 1 === B.to && 2 !== B.from ? (v.forEach(b), setTimeout(function () {
                v.forEach(A)
            }, 10), this.applyDynamicTranslation(!0)) : (v.forEach(x), v.forEach(q), v.forEach(j))
        }.bind(this)), this.sectionController.on("pauseexit:0", function () {
            app.mainContainer.clipController._mediaTimer._forwardsVideo, this.touch;
            var B = function () {
                this.applyDynamicTranslation(), v.forEach(A)
            }.bind(this);
            k ? B() : this.applyRuntimeTween(this.getTranslateValues(0, 1))
        }.bind(this)), this.sectionController.on("pauseexit:1", function (B) {
            2 === B.to ? k ? (v.forEach(q), v.forEach(j)) : this.applyRuntimeTween(this.getTranslateValues(1, 2)) : 0 === B.to && (k ? v.forEach(j) : this.applyRuntimeTween(this.getTranslateValues(1, 0)))
        }.bind(this)), this.sectionController.on("pauseenter:1", function () {
            g.classList.remove("delayed-transition"), g.classList.add("transition")
        }), this.sectionController.on("pauseexit:2", function (B) {
            1 === B.to ? k ? (v.forEach(b), g.classList.add("delayed-transition"), this.applyDynamicTranslation()) : window.setTimeout(function () {
                this.applyRuntimeTween(this.getTranslateValues(2, 1))
            }.bind(this), 1000) : v.forEach(x)
        }.bind(this))
    }, p.prototype.setupEnd = function () {
        var k = document.getElementById("comingsoon").querySelector(".caret .button"),
            v = app.sectionController._pauseTimeline.length - 1;
        this.sectionController.seek.bind(this.sectionController, 0);
        var g = document.getElementById("globalfooter"),
            q = document.querySelector(".sosumi"),
            j = document.getElementById("comingsoon").querySelector(".caret");
        k.addEventListener("click", function (w) {
            return w.preventDefault(), this.sectionController.seek(0), !1
        }.bind(this));
        var b = function () {
            this.uiController.disableInput(), document.documentElement.classList.remove("overflow"), g.classList.add("show"), q.classList.add("show"), j.classList.add("show")
        }.bind(this);
        this.sectionController.on("pauseenter:" + v, b), this.mainContainer.clipController.on("ended", b), this.sectionController.on("pauseexit:" + v, function () {
            g.classList.remove("show"), q.classList.remove("show")
        }), this.sectionController.on("seek", function (w) {
            w.from === v && (this.uiController.enableInput(), this.videocontainer.classList.remove("transition"), this.stillcontainer.classList.remove("transition"))
        }.bind(this))
    }, p.prototype.setupResizeEvents = function () {
        var g = this.applyDynamicTranslation.bind(this),
            b = this.resizeFluidAreas.bind(this);
        this.sectionController.on("pauseenter:1", function () {
            window.addEventListener("resize", g)
        }.bind(this)), this.sectionController.on("pauseexit:1", function () {
            window.removeEventListener("resize", g)
        }.bind(this)), window.addEventListener("resize", b)
    }, p.prototype.setupVideoCrossover = function () {
        var g, b = function () {
                clearTimeout(g), this.videocontainer.style.display = "block", this.introcontainer.style.display = "none"
            };
        app.sectionController.on("pauseexit:0", b.bind(this)), g = setTimeout(b.bind(this), 1200)
    }, p.prototype.setupCaret = function () {
        var b = document.getElementById("hero").querySelector(".caret .button");
        b.addEventListener("click", this.sectionController.seek.bind(this.sectionController, 2)), b.addEventListener("keydown", function (g) {
            13 === g.keyCode && this.sectionController.seek(2)
        }.bind(this))
    }, p.prototype.preventTouchDefault = function (b) {
        b.preventDefault()
    }, p.prototype.addStaticChartClips = function (g) {
        var j, b;
        return j = a.map(function (k) {
            return {
                start: k.pausePoint - 0.5,
                end: k.pausePoint,
                media: new o("#" + k.selector, 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }
        }), b = a.map(function (k) {
            return {
                start: k.pausePoint,
                end: k.pausePoint + 0.5,
                media: new o("#" + k.selector, 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }
        }), g.clips = g.clips.concat(j).concat(b), g
    }, p.prototype.setupStaticCharts = function () {
        a.forEach(function (g) {
            var b = new m(g.selector);
            b.visitorEngaged()
        })
    }, p.prototype.setupForceCurrentTime = function () {
        this.sectionController.on("pauseenter", function (g) {
            var j = null != g.index ? g.index : g.to,
                b = this._pauseTimeline[j];
            setTimeout(function () {
                app.mainContainer.clipController, app.mainContainer.clipController.currentTime = b
            }, 200)
        }.bind(this.sectionController))
    }, p.prototype.initializeInitialStill = function () {
        this.stillcontainer.querySelector(".still_1").classList.add("initial")
    }, p.prototype.cleanUpInitialStill = function () {
        this.stillcontainer.querySelector(".still_1").classList.remove("initial")
    }, p.prototype.initMain = function () {
        if (!this.initialized) {
            this.sectionController = new d(this.mainContainer.clipController, this.timeline.events.pauses, y), this.uiController = new l(this.sectionController), this.dynamic && (this.navController = new r(this.sectionController, y), this.wheelInputController = new e(this.uiController), this.keyboardInputController = new c(this.uiController), this.clickInputController = new u(this.uiController)), this.setupEnd(), this.addTimelineEvents(y), this.setupMoveableSeekable(), this.setupResizeEvents(), this.setupCaret(), this.setupVideoCrossover(), this.addNextCarets(), this.setupFocusEvents(), this.sectionController.on("pauseenter", this.enterAnalytics.bind(this)), this.sectionController.on("pauseexit", this.exitAnalytics.bind(this)), window.addEventListener("beforeunload", function () {
                this.analyzer.flush()
            }.bind(this)), this.mainContainer.clipController.currentTime = 0, this.sectionController.trigger("pauseenter:0"), this.sectionController._update(), n && (this.setupForceCurrentTime(), this.setupStaticCharts());
            var b = document.getElementById("sp-searchtext");
            b && (b.addEventListener("focus", function () {
                app.uiController.disableInput()
            }), b.addEventListener("blur", function () {
                app.uiController.enableInput()
            })), this.sectionController.on("pauseexit", this.resizeFluidAreas.bind(this)), this.sectionController.on("pauseenter", this.resizeFluidAreas.bind(this)), this.sectionController.on("seek", this.resizeFluidAreas.bind(this)), this.initialized = !0
        }
    }, p
}), AC.define("macpro/desktop/config", [], function () {
    var b = "mp4";
    return {
        intro: [{
            type: "video",
            file: window.assetPath + "video/macpro_intro_desktop." + b,
            stills: {
                1: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/04.00.jpg"
            }
        }, {
            type: "flow",
            manifest: "/v/mac-pro/home/a/flow/desktop/intro/",
            diffDir: window.assetPath + "flow/desktop/intro/",
            flowKeyFrame: "http://images.apple.com/v/mac-pro/home/a/flow/desktop/intro/flow_keyframe.jpg",
            flowEndFrame: "http://images.apple.com/v/mac-pro/home/a/flow/desktop/intro/flow_endframe.jpg",
            fps: 30
        }],
        main: [{
            type: "video",
            file: window.assetPath + "video/macpro_main_desktop." + b,
            stills: {
                1: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/04.00.jpg",
                2: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/06.00.jpg",
                3: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/10.00.jpg",
                4: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/14.00.jpg",
                5: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/17.00.jpg",
                6: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/21.00.jpg",
                7: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/23.00.jpg",
                8: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/27.00.jpg",
                9: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/34.00.jpg",
                10: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/40.00.jpg",
                13: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/45.00.jpg",
                14: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/47.00.jpg",
                15: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/49.00.jpg"
            }
        }, {
            type: "flow",
            manifest: "/v/mac-pro/home/a/flow/desktop/main/",
            diffDir: window.assetPath + "flow/desktop/main/",
            fps: 30,
            flowKeyFrame: "http://images.apple.com/v/mac-pro/home/a/flow/desktop/main/flow_keyframe.jpg",
            flowEndFrame: "http://images.apple.com/v/mac-pro/home/a/flow/desktop/main/flow_endframe.jpg",
            stills: {
                1: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/04.00.jpg",
                2: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/06.00.jpg",
                3: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/10.00.jpg",
                4: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/14.00.jpg",
                5: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/17.00.jpg",
                6: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/21.00.jpg",
                7: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/23.00.jpg",
                8: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/27.00.jpg",
                9: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/34.00.jpg",
                10: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/40.00.jpg",
                13: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/45.00.jpg",
                14: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/47.00.jpg",
                15: "http://images.apple.com/v/mac-pro/home/a/images/stills/desktop/49.00.jpg"
            }
        }]
    }
}), AC.define("macpro/bootstrap", ["require", "macpro/desktop/app/Desktop", "macpro/desktop/config", "macpro/shared/ComparisonChart"], function (i) {
    var e = navigator.userAgent,
        g = AC.Environment.Feature.canvasAvailable(),
        j = g && !e.match(/Mobile/i) && !e.match(/Android/i),
        h = {
            dynamic: function () {
                var a = i("macpro/desktop/app/Desktop"),
                    b = i("macpro/desktop/config");
                window.app = new a(b), document.body.id = "desktop", document.body.style.display = "block", document.documentElement.classList.add("enabled"), document.documentElement.classList.add("overflow")
            },
            "static": function () {
                var d = i("macpro/shared/ComparisonChart"),
                    f = new d("processor-chart"),
                    c = new d("memory-chart"),
                    b = new d("graphics-chart"),
                    a = new d("storage-chart");
                document.body.style.display = "block", f.visitorEngaged(), c.visitorEngaged(), b.visitorEngaged(), a.visitorEngaged()
            }
        };
    return {
        load: function () {
            h[j ? "dynamic" : "static"].call(this)
        }
    }
}), AC.define("macpro/ipad/input/Touch", [], function () {
    function b(a) {
        this._uiController = a, this._uiController.add(this), this._pixelToMediaSpeedRatio = 0.003, this._swipeThreshold = 30, this._onEnd = this._onEnd.bind(this), this._onMove = this._onMove.bind(this), this._moveBuffer = 0, this._touchStartOnPlaceholder = !1, this.enabled = !1, document.addEventListener("touchend", this._onEnd), document.addEventListener("touchmove", this._onMove)
    }
    return b.prototype = {
        _onEnd: function () {
            var a;
            this.enabled && (this._active = !1, window.clearTimeout(this._timeout), this._uiController._lastInteractionType = Math.abs(this._moveBuffer) > this._swipeThreshold ? "swipe" : "image-click", this._uiController._sectionController.paused && (a = this._moveBuffer >= 0 ? "next" : "previous", 0 === this._moveBuffer && this._uiController.update(0.01), this._uiController[a].call(this._uiController)), this._moveBuffer = 0)
        },
        _onMove: function (d) {
            var a = d.target;
            if (this.enabled) {
                if (this._uiController._sectionController.paused) {
                    if (!this._active) {
                        return this._uiController.takeoverThreshold = 0.4, this._active = !0, this._prev = d.pageY, void 0
                    }
                    this._delta = this._prev - d.pageY, this._moveBuffer += this._delta, this._touchStartOnPlaceholder = a && !! a.getAttribute("data-placeholder"), window.clearTimeout(this._timeout), this._timeout = window.setTimeout(this._onEnd.bind(this), 500), this._delta && this._uiController.update(this._delta * this._pixelToMediaSpeedRatio), this._prev = d.pageY
                }
                d.preventDefault()
            }
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        }
    }, b
}), AC.define("macpro/ipad/timeline/timeline-ipad", ["require", "macpro/shared/clip/Tween", "macpro/shared/ComparisonChart", "macpro/shared/clip/Basic"], function (g) {
    var e = g("macpro/shared/clip/Tween"),
        f = g("macpro/shared/ComparisonChart"),
        h = g("macpro/shared/clip/Basic");
    return function () {
        var a, m, l, s, o = new f("processor-chart"),
            u = new f("memory-chart"),
            n = new f("graphics-chart"),
            c = new f("storage-chart"),
            z = document.getElementById("hero"),
            d = document.getElementById("measurements"),
            p = document.getElementById("comingsoon"),
            b = document.getElementById("navcontainer");
        return [{
            name: "home",
            pause: 0,
            time: 0,
            labelSelector: "#hero",
            events: [{
                type: "pauseenter",
                action: function () {
                    z.querySelector(".caret").classList.add("show"), z.classList.remove("slide-out"), b.classList.remove("slide-out"), setTimeout(function () {
                        b.style.zIndex = 40000
                    }, 1000)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    z.classList.add("slide-out"), b.classList.add("slide-out"), b.style.zIndex = 10000, app.uiController._lastInteractionType = "image-click", o.resetChart(), u.resetChart(), n.resetChart(), c.resetChart()
                }
            }],
            clips: []
        }, {
            name: "intro",
            pause: 2,
            time: 2,
            labelSelector: "#change",
            clips: [{
                start: -1.95,
                media: new h("#change .hero", 2.55)
            }, {
                start: -2,
                media: new e("#change .copy", 2.5, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: 0,
                    units: "px",
                    easing: "linear"
                }])
            }, {
                start: -0.5,
                end: 53.5,
                media: new e("#sectionNav", 0.5, [{
                    property: "display",
                    from: "none",
                    to: "block"
                }, {
                    property: "opacity",
                    from: 0,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: 0.5,
                media: new e("#change .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px",
                    easing: "linear"
                }])
            }]
        }, {
            name: "computing",
            pause: 6.5,
            time: 6.5,
            labelSelector: "#power",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_3").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_3").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                media: new h(".still_3", 0.7)
            }, {
                start: -0.6,
                end: 0.5,
                media: new e("#power .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#power .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "processor",
            pause: 11,
            time: 11,
            labelSelector: "#processor",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_4").classList.add("crossFade"), window.clearTimeout(a), setTimeout(function () {
                        o.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_4").classList.remove("crossFade"), a = window.setTimeout(function () {
                        o.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_4", 0.7)
            }, {
                start: -0.8,
                end: 0.5,
                media: new e("#processor .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#processor .cores", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#processor .pcie", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#processor #processor-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#processor .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#processor .cores", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#processor .pcie", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#processor #processor-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "memory",
            pause: 14.3,
            time: 14.3,
            labelSelector: "#memory",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_5").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(m), setTimeout(function () {
                        u.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_5").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    m = window.setTimeout(function () {
                        u.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_5", 0.7)
            }, {
                start: -0.8,
                end: 0.5,
                media: new e("#memory .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#memory .bandwidth", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#memory .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#memory #memory-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#memory .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#memory .bandwidth", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#memory .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#memory #memory-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "graphics",
            pause: 19,
            time: 19,
            labelSelector: "#graphics",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_6").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(l), setTimeout(function () {
                        n.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_6").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    l = window.setTimeout(function () {
                        n.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_6", 0.7)
            }, {
                start: -0.8,
                end: 0.5,
                media: new e("#graphics .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#graphics .dual-gpus", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#graphics .teraflops", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#graphics #graphics-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#graphics .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#graphics .dual-gpus", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#graphics .teraflops", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#graphics #graphics-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "storage",
            pause: 21.45,
            time: 21.45,
            labelSelector: "#storage",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_7").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    window.clearTimeout(s), setTimeout(function () {
                        c.visitorEngaged()
                    }, 0)
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_7").classList.remove("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    s = window.setTimeout(function () {
                        c.resetChart()
                    }, 600)
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_7", 0.7)
            }, {
                start: -0.8,
                end: 0.5,
                media: new e("#storage .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#storage .flash", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#storage .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#storage #storage-chart", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#storage .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#storage .flash", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#storage .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#storage #storage-chart", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "thermal core",
            pause: 26,
            time: 26,
            labelSelector: "#thermal",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_8").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_8").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_8", 0.7)
            }, {
                start: -0.6,
                end: 0.5,
                media: new e("#thermal .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#thermal .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "fan",
            pause: 33.5,
            time: 33.5,
            labelSelector: "#fan",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_9").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_9").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.6,
                media: new h(".still_9", 0.7)
            }, {
                start: -0.6,
                end: 0.5,
                media: new e("#fan .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#fan .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "expansion",
            pause: 40,
            time: 40,
            labelSelector: "#expansion",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                media: new h(".still_10", 4.5)
            }, {
                start: -1.5,
                end: 0.5,
                media: new e("#expansion .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#expansion .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "thunderbolt",
            pause: 41.8,
            time: 41.8,
            labelSelector: "#thunderbolt",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }],
            clips: [{
                start: -0.8,
                end: 0.5,
                media: new e("#thunderbolt .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#thunderbolt .speeds", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#thunderbolt .improvement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#thunderbolt .daisychain", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#thunderbolt .displays", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#thunderbolt .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#thunderbolt .speeds", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#thunderbolt .improvement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#thunderbolt .daisychain", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#thunderbolt .displays", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "io",
            pause: 43.8,
            time: 43.8,
            labelSelector: "#io",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_10").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_10").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -1.4,
                end: 0.5,
                media: new e("#io .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -1.2,
                end: 0.7,
                media: new e("#io .hdmi", 1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -1.2,
                end: 0.7,
                media: new e("#io .gigabit", 1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -1,
                end: 0.9,
                media: new e("#io .thunderbolt", 1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -1,
                end: 0.9,
                media: new e("#io .usb", 1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                end: 1.5,
                media: new e("#io .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.9,
                end: 1.5,
                media: new e("#io .thunderbolt", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.9,
                end: 1.5,
                media: new e("#io .usb", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.7,
                end: 1.5,
                media: new e("#io .hdmi", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.7,
                end: 1.5,
                media: new e("#io .gigabit", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "wireless",
            pause: 46.5,
            time: 46.5,
            labelSelector: "#wireless",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_13").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_13").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 3.3,
                media: new h(".still_13", 3.4)
            }, {
                start: -0.7,
                end: 0.5,
                media: new e("#wireless .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.2,
                end: 0.5,
                media: new e("#wireless .copy", 0.2, [{
                    property: "opacity",
                    from: 1,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#wireless .ac", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#wireless .bluetooth", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#wireless .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#wireless .ac", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#wireless .bluetooth", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "measurements",
            time: 48.5,
            clips: [{
                start: -0.7,
                end: 1,
                media: new e("#measurements .height .line", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                media: new e("#measurements .height .line", 0.1, [{
                    property: "height",
                    from: 0,
                    to: 0,
                    units: "%"
                }])
            }, {
                start: -0.45,
                end: 1,
                media: new e("#measurements .height .line", 0.65, [{
                    property: "height",
                    from: 0,
                    to: 100,
                    units: "%",
                    easing: "keyspline",
                    keyspline: [0.29, 0.01, 0.3, 1]
                }])
            }, {
                start: -0.4,
                end: 1.5,
                media: new e("#measurements .height .measurement-container", 0.1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 1,
                media: new e("#measurements .height .measurement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 1,
                media: new e("#measurements .height .measurement", 0.2, [{
                    property: "scale",
                    axis: "y",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 1,
                media: new e("#measurements .width .line", 0.9, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                media: new e("#measurements .width .line", 0.1, [{
                    property: "width",
                    from: 0,
                    to: 0,
                    units: "%"
                }])
            }, {
                start: -0.45,
                end: 1,
                media: new e("#measurements .width .line", 0.65, [{
                    property: "width",
                    from: 0,
                    to: 100,
                    units: "%",
                    easing: "keyspline",
                    keyspline: [0.29, 0.01, 0.3, 1]
                }])
            }, {
                start: -0.8,
                end: 1.5,
                media: new e("#measurements .width .measurement-container", 0.1, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 1,
                media: new e("#measurements .width .measurement", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.7,
                end: 1,
                media: new e("#measurements .width .measurement", 0.2, [{
                    property: "scale",
                    axis: "y",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 1.5,
                media: new e("#measurements .height .measurement-container", 0.1, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                media: new e("#measurements .height .line", 0.5, [{
                    property: "height",
                    from: 100,
                    to: 100,
                    units: "%"
                }, {
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                media: new e("#measurements .height .measurement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1.5,
                media: new e("#measurements .width .measurement-container", 0.1, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                media: new e("#measurements .width .line", 0.5, [{
                    property: "width",
                    from: 100,
                    to: 100,
                    units: "%"
                }, {
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 1,
                media: new e("#measurements .width .measurement", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "design",
            pause: 50.5,
            time: 50.5,
            labelSelector: "#design",
            events: [{
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_14").classList.add("crossFade")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    d.classList.remove("show")
                }
            }, {
                type: "pauseexit",
                action: function (i) {
                    13 === i.to && d.classList.add("show")
                }
            }],
            clips: [{
                start: -0.1,
                end: 1.9,
                media: new h(".still_14", 2)
            }, {
                start: -0.6,
                end: 0.5,
                media: new e("#design .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#design .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }]
        }, {
            name: "assembly",
            pause: 52.3,
            time: 52.3,
            labelSelector: "#assembly",
            events: [{
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_14").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.8,
                end: 0.5,
                media: new e("#assembly .copy", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }, {
                    property: "translate",
                    axis: "y",
                    from: 20,
                    to: 0,
                    units: "px"
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#assembly .thermalcore", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: -0.5,
                end: 0.5,
                media: new e("#assembly .enclosure", 0.5, [{
                    property: "opacity",
                    from: 0,
                    to: 1
                }])
            }, {
                start: 0.5,
                media: new e("#assembly .copy", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }, {
                    property: "translate",
                    axis: "y",
                    from: 0,
                    to: -20,
                    units: "px"
                }])
            }, {
                start: 0.5,
                media: new e("#assembly .thermalcore", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }, {
                start: 0.5,
                media: new e("#assembly .enclosure", 0.5, [{
                    property: "opacity",
                    from: 1,
                    to: 0
                }])
            }]
        }, {
            name: "later this year",
            pause: 55,
            time: 55,
            labelSelector: "#comingsoon",
            events: [{
                type: "pauseenter",
                action: function () {
                    p.querySelector(".caret").classList.add("show"), b.classList.remove("slide-out")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    window.setTimeout(function () {
                        p.querySelector(".caret").classList.remove("show")
                    }, 500), b.classList.add("slide-out")
                }
            }, {
                type: "pauseenter",
                action: function () {
                    document.querySelector(".still_15").classList.add("crossFade")
                }
            }, {
                type: "pauseexit",
                action: function () {
                    document.querySelector(".still_15").classList.remove("crossFade")
                }
            }],
            clips: [{
                start: -0.1,
                end: 0.5,
                media: new h(".still_15", 0.6)
            }, {
                start: -1.3,
                end: 0.5,
                media: new e("#comingsoon .copy", 1.3, [{
                    property: "opacity",
                    from: 0,
                    to: 1,
                    easing: "easeInQuad"
                }])
            }, {
                start: -1.3,
                end: 0.5,
                media: new h("#comingsoon .caret", 1.3)
            }]
        }]
    }
}), AC.define("macpro/ipad/app/iPad", ["require", "macpro/shared/app/Core", "macpro/shared/ClipContainer", "macpro/shared/controller/Section", "macpro/shared/controller/Ui", "macpro/shared/controller/Nav", "macpro/ipad/input/Touch", "defer/Deferred", "assetLoader/AssetLoader", "macpro/ipad/timeline/timeline-ipad"], function (e) {
    function t(d) {
        i.call(this), l = l(), this.introcontainer = document.getElementById("introcontainer"), this.videocontainer = document.getElementById("videocontainer"), this.stillcontainer = document.getElementById("stillcontainer"), this.panelcontainer = document.getElementById("panelcontainer"), this.touch = "ontouchstart" in window, this.timeline = this.convertSectionsToClips(l), this.mainContainer = new r(this.videocontainer, d.main, this.timeline.clips), this.curtain = this.createFadeCurtain(), this.preventTouchDefault = this.preventTouchDefault.bind(this), document.addEventListener("touchstart", this.preventTouchDefault);
        var b = document.getElementById("globalheader");
        b.addEventListener("touchstart", function (f) {
            f.stopPropagation()
        }), b.addEventListener("touchend", function (f) {
            f.stopPropagation()
        }), document.getElementById("navcontainer").style.zIndex = 40000, this.loadIntro(d.intro[0]).then(function () {
            this.mainContainer.load().then(this.initMain.bind(this))
        }.bind(this)), window.app = this
    }
    var i = e("macpro/shared/app/Core"),
        r = e("macpro/shared/ClipContainer"),
        o = e("macpro/shared/controller/Section"),
        n = e("macpro/shared/controller/Ui"),
        a = e("macpro/shared/controller/Nav"),
        s = e("macpro/ipad/input/Touch"),
        c = e("defer/Deferred"),
        p = e("assetLoader/AssetLoader"),
        l = e("macpro/ipad/timeline/timeline-ipad");
    return t.prototype = new i, t.prototype.constructor = t, t.prototype.initAssetLoader = function (d) {
        var f, b = d.assets.map(function (g) {
                return g.url
            });
        return d.assets ? (f = new p(b), f.load().then(function (g) {
            g.forEach(function (k, m) {
                var j = d.assets[m].container,
                    h = document.querySelector(j);
                k.setAttribute("class", d.assets[m].className), h.appendChild(k)
            })
        })) : (new c).resolve()
    }, t.prototype.loadIntro = function (h) {
        var g = new c,
            d = document.getElementById("hero").querySelector(".caret"),
            b = function () {
                d.removeEventListener("webkitTransitionEnd", b), g.resolve(), d.classList.add("no-delay")
            };
        d.addEventListener("webkitTransitionEnd", b);
        var f = this.initAssetLoader(h);
        return f.then(function () {
            this.resizeFluidAreas(), d.classList.add("show"), document.body.classList.remove("intro-hidden")
        }.bind(this)), g.promise()
    }, t.prototype.resizeContainers = function () {
        var f = window.innerHeight;
        window.innerWidth;
        var h, d = this.videocontainer;
        this.introcontainer;
        var g = this.stillcontainer,
            b = this.panelcontainer,
            k = 768 === screen.width && 1024 === screen.height && "number" == typeof window.orientation,
            j = k && (0 === window.orientation || 180 === window.orientation);
        return h = f * (j ? 0.9 : 1), k || (b.style.height = h + "px"), g.style.height = h + "px", d.style.height = h + "px", b.style.height = h + "px", h
    }, t.prototype.resizePlaceholders = function (d) {
        var f = document.querySelectorAll(".placeholder-container"),
            b = 768 === screen.width && 1024 === screen.height && "number" == typeof window.orientation;
        [].forEach.call(f, function (y) {
                var q, N, L, P, v, R = y.querySelector(".placeholder-inner"),
                    m = y.querySelectorAll(".callout"),
                    k = parseFloat(y.getAttribute("data-min-top")),
                    g = 496,
                    u = k / g,
                    M = parseFloat(y.getAttribute("data-height-ratio")),
                    j = parseFloat(y.getAttribute("data-width-ratio")),
                    h = y.getAttribute("data-width-ratio-narrow"),
                    Q = 0.0013,
                    O = 185;
                h && (h = parseFloat(h)), isNaN(u) || isNaN(M) || isNaN(j) || (L = g > d ? k : d * u, q = d * M, N = d * (b && h ? h : j), y.classList.contains("hero") && (u = k / (d + O), L = d * u, y.style.top = L + "px"), y.style.top = y.classList.contains("static-top") ? k + "px" : L + "px", R.style.width = N + "px", R.style.height = q + "px", [].forEach.call(m, function (w) {
                    y.classList.contains("true-center") ? (w.style.top = "0px", w.style.height = q + "px") : (P = g > d ? 0 : d * u * d * Q, v = d * M - (P + 0.3 * P), w.style.top = P + "px", w.style.height = v + "px")
                }))
            })
    }, t.prototype.setupEnd = function () {
        var f = document.getElementById("comingsoon").querySelector(".caret .button"),
            h = app.sectionController._pauseTimeline.length - 1,
            d = function () {
                app.uiController._lastInteractionType = "image-click", this.sectionController.seek(0)
            }, g = document.getElementById("globalfooter"),
            b = document.querySelector(".sosumi"),
            k = document.getElementById("comingsoon").querySelector(".caret");
        f.addEventListener("click", d.bind(this)), f.addEventListener("touchstart", d.bind(this));
        var j = function () {
            this.uiController.disableInput(), document.documentElement.classList.remove("overflow"), document.removeEventListener("touchstart", this.preventTouchDefault), g.classList.add("show"), b.classList.add("show"), k.classList.add("show"), setTimeout(function () {
                document.getElementById("curtain").style.display = "none"
            }, 1000)
        }.bind(this);
        this.sectionController.on("pauseenter:" + h, j), this.mainContainer.clipController.on("ended", j), this.sectionController.on("pauseexit:" + h, function () {
            g.classList.remove("show"), b.classList.remove("show")
        }), this.sectionController.on("seek", function (m) {
            m.from === h && (this.uiController.enableInput(), document.addEventListener("touchstart", this.preventTouchDefault), this.videocontainer.classList.remove("transition"), this.stillcontainer.classList.remove("transition"))
        }.bind(this))
    }, t.prototype.setupResizeEvents = function () {
        var b = this.resizeFluidAreas.bind(this);
        window.addEventListener("orientationchange", b)
    }, t.prototype.setupVideoCrossover = function () {
        var d, b = function () {
                clearTimeout(d), this.videocontainer.style.display = "block", this.introcontainer.style.display = "none"
            };
        app.sectionController.on("pauseexit:0", b.bind(this)), d = setTimeout(b.bind(this), 1300)
    }, t.prototype.setupCaret = function () {
        var b = document.getElementById("hero").querySelector(".caret .button");
        b.addEventListener("click", this.sectionController.seek.bind(this.sectionController, 2))
    }, t.prototype.preventTouchDefault = function (b) {
        b.preventDefault()
    }, t.prototype.pollForAwakeFromSleep = function () {
        var d = (new Date).getTime(),
            b = function () {
                var f = (new Date).getTime();
                f - d > 1000 && this.trigger("awakeFromSleep"), d = f, setTimeout(b, 500)
            }.bind(this);
        b()
    }, t.prototype.resyncVideo = function () {
        var b = this.mainContainer;
        b && b.clipController && !b.clipController.paused && b.clipController._mediaTimer._forwardsVideo.paused && (b.clipController.pause(), b.clipController.play())
    }, t.prototype.initMain = function () {
        this.initialized || (this.sectionController = new o(this.mainContainer.clipController, this.timeline.events.pauses, l), this.uiController = new n(this.sectionController), this.navController = new a(this.sectionController, l), this.touchInputController = new s(this.uiController), this.setupEnd(), this.addTimelineEvents(l), this.setupResizeEvents(), this.setupCaret(), this.setupVideoCrossover(), this.resizeFluidAreas(), this.pollForAwakeFromSleep(), this.setupFocusEvents(), this.sectionController.on("pauseenter", this.enterAnalytics.bind(this)), this.sectionController.on("pauseexit", this.exitAnalytics.bind(this)), window.addEventListener("beforeunload", function () {
            this.analyzer.flush()
        }.bind(this)), this.sectionController.trigger("pauseenter:0"), this.sectionController.on("pauseenter", function (b) {
            app.mainContainer.clipController.currentTime = this.sectionController._pauseTimeline[b.index] + 0.4
        }.bind(this)), this.sectionController.on("pauseexit", function () {
            var b = document.getElementById("sp-searchtext");
            b && b.blur()
        }), this.on("awakeFromSleep", this.resyncVideo.bind(this)), this.sectionController._update(), this.initialized = !0)
    }, t
}), AC.define("macpro/ipad/config", [], function () {
    var b = "mp4";
    return {
        intro: [{
            type: "loadassets",
            assets: [{
                url: "http://images.apple.com/mac-pro/images/static/hero_2x.jpg",
                container: "#hero .hero-container",
                className: "hero"
            }, {
                url: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/06.00.jpg",
                container: "#change .hero-container",
                className: "hero"
            }]
        }],
        main: [{
            type: "bivideo",
            file: window.assetPath + "video/macpro_main_ipad_ext." + b,
            startTime: 2,
            stills: {
                3: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/10.00.jpg",
                4: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/14.00.jpg",
                5: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/17.00.jpg",
                6: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/21.00.jpg",
                7: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/23.00.jpg",
                8: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/27.00.jpg",
                9: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/34.00.jpg",
                10: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/40.00.jpg",
                13: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/45.00.jpg",
                14: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/47.00.jpg",
                15: "http://images.apple.com/v/mac-pro/home/a/images/stills/ipad/49.00.jpg"
            }
        }]
    }
});