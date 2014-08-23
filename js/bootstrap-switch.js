/* ========================================================================
 * bootstrap-switch - v3.0.1
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */
(function () {
    var t = [].slice;
    ! function (e, s) {
        "use strict";
        var o;
        return o = function () {
            function t(t, s) {
                null == s && (s = {}), this.$element = e(t), this.options = e.extend({}, e.fn.bootstrapSwitch.defaults, s, {
                    state: this.$element.is(":checked"),
                    size: this.$element.data("size"),
                    animate: this.$element.data("animate"),
                    disabled: this.$element.is(":disabled"),
                    readonly: this.$element.is("[readonly]"),
                    indeterminate: this.$element.data("indeterminate"),
                    onColor: this.$element.data("on-color"),
                    offColor: this.$element.data("off-color"),
                    onText: this.$element.data("on-text"),
                    offText: this.$element.data("off-text"),
                    labelText: this.$element.data("label-text"),
                    baseClass: this.$element.data("base-class"),
                    wrapperClass: this.$element.data("wrapper-class")
                }), this.$wrapper = e("<div>", {
                    "class": function (t) {
                        return function () {
                            var e;
                            return e = ["" + t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)), e.push(t.options.state ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), null != t.options.size && e.push("" + t.options.baseClass + "-" + t.options.size), t.options.animate && e.push("" + t.options.baseClass + "-animate"), t.options.disabled && e.push("" + t.options.baseClass + "-disabled"), t.options.readonly && e.push("" + t.options.baseClass + "-readonly"), t.options.indeterminate && e.push("" + t.options.baseClass + "-indeterminate"), t.$element.attr("id") && e.push("" + t.options.baseClass + "-id-" + t.$element.attr("id")), e.join(" ")
                        }
                    }(this)()
                }), this.$container = e("<div>", {
                    "class": "" + this.options.baseClass + "-container"
                }), this.$on = e("<span>", {
                    html: this.options.onText,
                    "class": "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor
                }), this.$off = e("<span>", {
                    html: this.options.offText,
                    "class": "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor
                }), this.$label = e("<label>", {
                    "for": this.$element.attr("id"),
                    html: this.options.labelText,
                    "class": "" + this.options.baseClass + "-label"
                }), this.options.indeterminate && this.$element.prop("indeterminate", !0), this.$element.on("init.bootstrapSwitch", function (e) {
                    return function () {
                        return e.options.onInit.apply(t, arguments)
                    }
                }(this)), this.$element.on("switchChange.bootstrapSwitch", function (e) {
                    return function () {
                        return e.options.onSwitchChange.apply(t, arguments)
                    }
                }(this)), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.$on).before(this.$label).before(this.$off).trigger("init.bootstrapSwitch"), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler()
            }
            return t.prototype._constructor = t, t.prototype.state = function (t, e) {
                return "undefined" == typeof t ? this.options.state : this.options.disabled || this.options.readonly || this.options.indeterminate ? this.$element : (t = !!t, this.$element.prop("checked", t).trigger("change.bootstrapSwitch", e), this.$element)
            }, t.prototype.toggleState = function (t) {
                return this.options.disabled || this.options.readonly || this.options.indeterminate ? this.$element : this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", t)
            }, t.prototype.size = function (t) {
                return "undefined" == typeof t ? this.options.size : (null != this.options.size && this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size), t && this.$wrapper.addClass("" + this.options.baseClass + "-" + t), this.options.size = t, this.$element)
            }, t.prototype.animate = function (t) {
                return "undefined" == typeof t ? this.options.animate : (t = !!t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-animate"), this.options.animate = t, this.$element)
            }, t.prototype.disabled = function (t) {
                return "undefined" == typeof t ? this.options.disabled : (t = !!t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-disabled"), this.$element.prop("disabled", t), this.options.disabled = t, this.$element)
            }, t.prototype.toggleDisabled = function () {
                return this.$element.prop("disabled", !this.options.disabled), this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled"), this.options.disabled = !this.options.disabled, this.$element
            }, t.prototype.readonly = function (t) {
                return "undefined" == typeof t ? this.options.readonly : (t = !!t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-readonly"), this.$element.prop("readonly", t), this.options.readonly = t, this.$element)
            }, t.prototype.toggleReadonly = function () {
                return this.$element.prop("readonly", !this.options.readonly), this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly"), this.options.readonly = !this.options.readonly, this.$element
            }, t.prototype.indeterminate = function (t) {
                return "undefined" == typeof t ? this.options.indeterminate : (t = !!t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-indeterminate"), this.$element.prop("indeterminate", t), this.options.indeterminate = t, this.$element)
            }, t.prototype.toggleIndeterminate = function () {
                return this.$element.prop("indeterminate", !this.options.indeterminate), this.$wrapper.toggleClass("" + this.options.baseClass + "-indeterminate"), this.options.indeterminate = !this.options.indeterminate, this.$element
            }, t.prototype.onColor = function (t) {
                var e;
                return e = this.options.onColor, "undefined" == typeof t ? e : (null != e && this.$on.removeClass("" + this.options.baseClass + "-" + e), this.$on.addClass("" + this.options.baseClass + "-" + t), this.options.onColor = t, this.$element)
            }, t.prototype.offColor = function (t) {
                var e;
                return e = this.options.offColor, "undefined" == typeof t ? e : (null != e && this.$off.removeClass("" + this.options.baseClass + "-" + e), this.$off.addClass("" + this.options.baseClass + "-" + t), this.options.offColor = t, this.$element)
            }, t.prototype.onText = function (t) {
                return "undefined" == typeof t ? this.options.onText : (this.$on.html(t), this.options.onText = t, this.$element)
            }, t.prototype.offText = function (t) {
                return "undefined" == typeof t ? this.options.offText : (this.$off.html(t), this.options.offText = t, this.$element)
            }, t.prototype.labelText = function (t) {
                return "undefined" == typeof t ? this.options.labelText : (this.$label.html(t), this.options.labelText = t, this.$element)
            }, t.prototype.baseClass = function () {
                return this.options.baseClass
            }, t.prototype.wrapperClass = function (t) {
                return "undefined" == typeof t ? this.options.wrapperClass : (t || (t = e.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")), this.$wrapper.addClass(this._getClasses(t).join(" ")), this.options.wrapperClass = t, this.$element)
            }, t.prototype.destroy = function () {
                var t;
                return t = this.$element.closest("form"), t.length && t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"), this.$element
            }, t.prototype._elementHandlers = function () {
                return this.$element.on({
                    "change.bootstrapSwitch": function (t) {
                        return function (s, o) {
                            var n;
                            return s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), n = t.$element.is(":checked"), n !== t.options.state ? (t.options.state = n, t.$wrapper.removeClass(n ? "" + t.options.baseClass + "-off" : "" + t.options.baseClass + "-on").addClass(n ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), o ? void 0 : (t.$element.is(":radio") && e("[name='" + t.$element.attr("name") + "']").not(t.$element).prop("checked", !1).trigger("change.bootstrapSwitch", !0), t.$element.trigger("switchChange.bootstrapSwitch", [n]))) : void 0
                        }
                    }(this),
                    "focus.bootstrapSwitch": function (t) {
                        return function (e) {
                            return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.$wrapper.addClass("" + t.options.baseClass + "-focused")
                        }
                    }(this),
                    "blur.bootstrapSwitch": function (t) {
                        return function (e) {
                            return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.$wrapper.removeClass("" + t.options.baseClass + "-focused")
                        }
                    }(this),
                    "keydown.bootstrapSwitch": function (t) {
                        return function (e) {
                            if (e.which && !t.options.disabled && !t.options.readonly && !t.options.indeterminate) switch (e.which) {
                                case 32:
                                    return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.toggleState();
                                case 37:
                                    return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.state(!1);
                                case 39:
                                    return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.state(!0)
                            }
                        }
                    }(this)
                })
            }, t.prototype._handleHandlers = function () {
                return this.$on.on("click.bootstrapSwitch", function (t) {
                    return function () {
                        return t.state(!1), t.$element.trigger("focus.bootstrapSwitch")
                    }
                }(this)), this.$off.on("click.bootstrapSwitch", function (t) {
                    return function () {
                        return t.state(!0), t.$element.trigger("focus.bootstrapSwitch")
                    }
                }(this))
            }, t.prototype._labelHandlers = function () {
                return this.$label.on({
                    "mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function (t) {
                        return function (e) {
                            var s, o, n, i;
                            if (t.drag) return e.preventDefault(), o = e.pageX || e.originalEvent.touches[0].pageX, n = (o - t.$wrapper.offset().left) / t.$wrapper.width() * 100, s = 25, i = 75, s > n ? n = s : n > i && (n = i), t.$container.css("margin-left", "" + (n - i) + "%"), t.$element.trigger("focus.bootstrapSwitch")
                        }
                    }(this),
                    "mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function (t) {
                        return function (e) {
                            return t.drag || t.options.disabled || t.options.readonly || t.options.indeterminate ? void 0 : (e.preventDefault(), t.drag = !0, t.options.animate && t.$wrapper.removeClass("" + t.options.baseClass + "-animate"), t.$element.trigger("focus.bootstrapSwitch"))
                        }
                    }(this),
                    "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function (t) {
                        return function (e) {
                            return t.drag ? (e.preventDefault(), t.drag = !1, t.$element.prop("checked", parseInt(t.$container.css("margin-left"), 10) > -(t.$container.width() / 6)).trigger("change.bootstrapSwitch"), t.$container.css("margin-left", ""), t.options.animate ? t.$wrapper.addClass("" + t.options.baseClass + "-animate") : void 0) : void 0
                        }
                    }(this),
                    "mouseleave.bootstrapSwitch": function (t) {
                        return function () {
                            return t.$label.trigger("mouseup.bootstrapSwitch")
                        }
                    }(this),
                    "click.bootstrapSwitch": function (t) {
                        return function () {
                            return t.toggleState(), t.$element.trigger("focus.bootstrapSwitch")
                        }
                    }(this)
                })
            }, t.prototype._formHandler = function () {
                var t;
                return t = this.$element.closest("form"), t.data("bootstrap-switch") ? void 0 : t.on("reset.bootstrapSwitch", function () {
                    return s.setTimeout(function () {
                        return t.find("input").filter(function () {
                            return e(this).data("bootstrap-switch")
                        }).each(function () {
                            return e(this).bootstrapSwitch("state", this.checked)
                        })
                    }, 1)
                }).data("bootstrap-switch", !0)
            }, t.prototype._getClasses = function (t) {
                var s, o, n, i;
                if (!e.isArray(t)) return ["" + this.options.baseClass + "-" + t];
                for (o = [], n = 0, i = t.length; i > n; n++) s = t[n], o.push("" + this.options.baseClass + "-" + s);
                return o
            }, t
        }(), e.fn.bootstrapSwitch = function () {
            var s, n, i;
            return n = arguments[0], s = 2 <= arguments.length ? t.call(arguments, 1) : [], i = this, this.each(function () {
                var t, a;
                return t = e(this), a = t.data("bootstrap-switch"), a || t.data("bootstrap-switch", a = new o(this, n)), "string" == typeof n ? i = a[n].apply(a, s) : void 0
            }), i
        }, e.fn.bootstrapSwitch.Constructor = o, e.fn.bootstrapSwitch.defaults = {
            state: !0,
            size: null,
            animate: !0,
            disabled: !1,
            readonly: !1,
            indeterminate: !1,
            onColor: "primary",
            offColor: "default",
            onText: "ON",
            offText: "OFF",
            labelText: "&nbsp;",
            baseClass: "bootstrap-switch",
            wrapperClass: "wrapper",
            onInit: function () {},
            onSwitchChange: function () {}
        }
    }(window.jQuery, window)
}).call(this);