/** eslint-disable */ 
const f2 = (this, function() {
  return function(t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 149)
  }([function(t, e, n) {
    var i = n(48),
      r = {
        upperFirst: n(49),
        lowerFirst: n(50),
        isString: n(51),
        isNumber: n(52),
        isBoolean: n(53),
        isFunction: n(54),
        isDate: n(55),
        isArray: n(17),
        isNil: n(29),
        isObject: n(30),
        isPlainObject: n(31),
        deepMix: n(57),
        mix: n(58),
        each: n(59),
        isObjectValueEqual: function(t, e) {
          t = Object.assign({}, t), e = Object.assign({}, e);
          var n = Object.getOwnPropertyNames(t),
            i = Object.getOwnPropertyNames(e);
          if (n.length !== i.length) return !1;
          for (var r = 0, a = n.length; r < a; r++) {
            var o = n[r];
            if (t[o] !== e[o]) return !1
          }
          return !0
        },
        wrapBehavior: function(t, e) {
          if (t["_wrap_" + e]) return t["_wrap_" + e];
          var n = function(n) {
            t[e](n)
          };
          return t["_wrap_" + e] = n, n
        },
        getWrapBehavior: function(t, e) {
          return t["_wrap_" + e]
        },
        parsePadding: function(t) {
          var e, n, i, a;
          return r.isNumber(t) || r.isString(t) ? e = i = a = n = t : r.isArray(t) && (e = t[0], n = r.isNil(
            t[1]) ? t[0] : t[1], i = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? n : t[3]), [e, n, i,
            a]
        }
      };
    r.Array = {
      merge: function(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) e = e.concat(t[n]);
        return e
      },
      values: function(t, e) {
        for (var n = [], i = {}, a = 0, o = t.length; a < o; a++) {
          var s = t[a][e];
          r.isNil(s) || (r.isArray(s) ? r.each(s, function(t) {
            i[t] || (n.push(t), i[t] = !0)
          }) : i[s] || (n.push(s), i[s] = !0))
        }
        return n
      },
      firstValue: function(t, e) {
        for (var n = null, i = 0, a = t.length; i < a; i++) {
          var o = t[i][e];
          if (!r.isNil(o)) {
            n = r.isArray(o) ? o[0] : o;
            break
          }
        }
        return n
      },
      group: function(t, e, n) {
        if (void 0 === n && (n = {}), !e) return [t];
        var i = r.Array.groupToMap(t, e),
          a = [];
        if (1 === e.length && n[e[0]]) {
          var o = n[e[0]];
          r.each(o, function(t) {
            t = "_" + t, a.push(i[t])
          })
        } else
          for (var s in i) a.push(i[s]);
        return a
      },
      groupToMap: function(t, e) {
        if (!e) return {
          0: t
        };
        for (var n = {}, i = 0, r = t.length; i < r; i++) {
          var a = t[i],
            o = function(t) {
              for (var n = "_", i = 0, r = e.length; i < r; i++) n += t[e[i]] && t[e[i]].toString();
              return n
            }(a);
          n[o] ? n[o].push(a) : n[o] = [a]
        }
        return n
      },
      remove: function(t, e) {
        if (t) {
          var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
        }
      },
      getRange: function(t) {
        if (!t.length) return {
          min: 0,
          max: 0
        };
        var e = Math.max.apply(null, t);
        return {
          min: Math.min.apply(null, t),
          max: e
        }
      }
    }, r.mix(r, i), t.exports = r
  }, function(t, e, n) {
    var i = n(47),
      r = n(0),
      a = {
        version: "3.2.3-beta.5",
        trackable: !0,
        scales: {},
        widthRatio: {
          column: .5,
          rose: .999999,
          multiplePie: .75
        },
        lineDash: [4, 4]
      };
    a.setTheme = function(t) {
      r.deepMix(this, t)
    }, a.setTheme(i), t.exports = a
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1,
            isShape: !0,
            attrs: {}
          }
        }, n.getType = function() {
          return this._attrs.type
        }, n.drawInner = function(t) {
          var e = this,
            n = e.get("attrs");
          e.createPath(t);
          var i = t.globalAlpha;
          if (e.hasFill()) {
            var a = n.fillOpacity;
            r.isNil(a) || 1 === a ? t.fill() : (t.globalAlpha = a, t.fill(), t.globalAlpha = i)
          }
          if (e.hasStroke() && n.lineWidth > 0) {
            var o = n.strokeOpacity;
            r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke()
          }
        }, n.getBBox = function() {
          var t = this._attrs.bbox;
          return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t
            .height = t.maxY - t.minY), this._attrs.bbox = t), t
        }, n.calculateBox = function() {
          return null
        }, n.createPath = function() {}, e
      }(n(25));
    t.exports = a
  }, function(t, e) {
    t.exports = {
      create: function() {
        return [0, 0]
      },
      length: function(t) {
        var e = t[0],
          n = t[1];
        return Math.sqrt(e * e + n * n)
      },
      normalize: function(t, e) {
        var n = this.length(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
      },
      add: function(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
      },
      sub: function(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
      },
      scale: function(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
      },
      dot: function(t, e) {
        return t[0] * e[0] + t[1] * e[1]
      },
      direction: function(t, e) {
        return t[0] * e[1] - e[0] * t[1]
      },
      angle: function(t, e) {
        var n = this.dot(t, e) / (this.length(t) * this.length(e));
        return Math.acos(n)
      },
      angleTo: function(t, e, n) {
        var i = this.angle(t, e),
          r = this.direction(t, e) >= 0;
        return n ? r ? 2 * Math.PI - i : i : r ? i : 2 * Math.PI - i
      },
      zero: function(t) {
        return 0 === t[0] && 0 === t[1]
      },
      distance: function(t, e) {
        var n = e[0] - t[0],
          i = e[1] - t[1];
        return Math.sqrt(n * n + i * i)
      },
      clone: function(t) {
        return [t[0], t[1]]
      },
      min: function(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
      },
      max: function(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
      },
      transformMat2d: function(t, e, n) {
        var i = e[0],
          r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      return a.isArray(t) ? t : a.isString(t) ? t.split("*") : [t]
    }
    var a = n(0),
      o = n(32),
      s = ["color", "size", "shape"],
      c = n(1),
      u = n(63),
      l = n(6),
      h = n(20),
      f = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          return {
            type: null,
            data: null,
            attrs: {},
            scales: {},
            container: null,
            styleOptions: null,
            chart: null,
            shapeType: "",
            generatePoints: !1,
            attrOptions: {},
            sortable: !1,
            startOnZero: !0,
            visible: !0,
            connectNulls: !1
          }
        }, n.init = function() {
          var t = this;
          t._initAttrs();
          var e = t._processData();
          t.get("adjust") && t._adjustData(e), t.set("dataArray", e)
        }, n._getGroupScales = function() {
          var t = this,
            e = [];
          return a.each(s, function(n) {
            var i = t.getAttr(n);
            if (i) {
              var r = i.scales;
              a.each(r, function(t) {
                t && t.isCategory && -1 === e.indexOf(t) && e.push(t)
              })
            }
          }), e
        }, n._groupData = function(t) {
          var e = this,
            n = e.get("colDefs"),
            i = e._getGroupScales();
          if (i.length) {
            var r = {},
              o = [];
            return a.each(i, function(t) {
              var e = t.field;
              o.push(e), n && n[e] && n[e].values && (r[t.field] = n[e].values)
            }), a.Array.group(t, o, r)
          }
          return [t]
        }, n._setAttrOptions = function(t, e) {
          this.get("attrOptions")[t] = e
        }, n._createAttrOption = function(t, e, n, i) {
          var r = {};
          r.field = e, n ? a.isFunction(n) ? r.callback = n : r.values = n : r.values = i, this
            ._setAttrOptions(t, r)
        }, n._initAttrs = function() {
          var t = this,
            e = t.get("attrs"),
            n = t.get("attrOptions"),
            i = t.get("coord");
          for (var o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o],
                c = a.upperFirst(o),
                l = r(s.field);
              "position" === o && (s.coord = i);
              for (var h = [], f = 0, p = l.length; f < p; f++) {
                var g = l[f],
                  d = t._createScale(g);
                h.push(d)
              }
              if ("position" === o) {
                var v = h[1];
                "polar" === i.type && i.transposed && t.hasAdjust("stack") && v.values.length && v.change({
                  nice: !1,
                  min: 0,
                  max: Math.max.apply(null, v.values)
                })
              }
              s.scales = h;
              var y = new u[c](s);
              e[o] = y
            }
        }, n._createScale = function(t) {
          var e = this.get("scales"),
            n = e[t];
          return n || (n = this.get("chart").createScale(t), e[t] = n), n
        }, n._processData = function() {
          for (var t = this, e = this.get("data"), n = [], i = this._groupData(e), r = 0, a = i.length; r <
            a; r++) {
            var o = i[r],
              s = t._saveOrigin(o);
            this.hasAdjust("dodge") && t._numberic(s), n.push(s)
          }
          return n
        }, n._saveOrigin = function(t) {
          for (var e = [], n = 0, i = t.length; n < i; n++) {
            var r = t[n],
              a = {};
            for (var o in r) a[o] = r[o];
            a._origin = r, e.push(a)
          }
          return e
        }, n._numberic = function(t) {
          for (var e = this.getAttr("position").scales, n = 0, i = t.length; n < i; n++)
            for (var r = t[n], a = Math.min(2, e.length), o = 0; o < a; o++) {
              var s = e[o];
              if (s.isCategory) {
                var c = s.field;
                r[c] = s.translate(r[c])
              }
            }
        }, n._adjustData = function(t) {
          var e = this,
            n = e.get("adjust");
          if (n) {
            var i = a.upperFirst(n.type);
            if (!h[i]) throw new Error("not support such adjust : " + n);
            var r = e.getXScale(),
              o = e.getYScale(),
              s = a.mix({
                xField: r.field,
                yField: o.field
              }, n);
            new h[i](s).processAdjust(t), "Stack" === i && e._updateStackRange(o.field, o, t)
          }
        }, n._updateStackRange = function(t, e, n) {
          for (var i = a.Array.merge(n), r = e.min, o = e.max, s = 0, c = i.length; s < c; s++) {
            var u = i[s],
              l = Math.min.apply(null, u[t]),
              h = Math.max.apply(null, u[t]);
            l < r && (r = l), h > o && (o = h)
          }(r < e.min || o > e.max) && e.change({
            min: r,
            max: o
          })
        }, n._sort = function(t) {
          var e = this,
            n = e.getXScale(),
            i = n.field,
            r = n.type;
          "identity" !== r && n.values.length > 1 && a.each(t, function(t) {
            t.sort(function(t, e) {
              return "timeCat" === r ? n._toTimeStamp(t._origin[i]) - n._toTimeStamp(e._origin[i]) : n
                .translate(t._origin[i]) - n.translate(e._origin[i])
            })
          }), e.set("hasSorted", !0), e.set("dataArray", t)
        }, n.paint = function() {
          var t = this,
            e = t.get("dataArray"),
            n = [],
            i = t.getShapeFactory();
          i.setCoord(t.get("coord")), t._beforeMapping(e);
          for (var r = 0, a = e.length; r < a; r++) {
            var o = e[r];
            o.length && (o = t._mapping(o), n.push(o), t.draw(o, i))
          }
          t.set("dataArray", n)
        }, n.getShapeFactory = function() {
          var t = this.get("shapeFactory");
          if (!t) {
            var e = this.get("shapeType");
            t = l.getShapeFactory(e), this.set("shapeFactory", t)
          }
          return t
        }, n._mapping = function(t) {
          for (var e = this, n = e.get("attrs"), i = e.getYScale().field, r = [], o = 0, s = t.length; o <
            s; o++) {
            var c = t[o],
              u = {};
            u._origin = c._origin, u.points = c.points, u._originY = c[i];
            for (var l in n)
              if (n.hasOwnProperty(l)) {
                var h = n[l],
                  f = h.names,
                  p = e._getAttrValues(h, c);
                if (f.length > 1)
                  for (var g = 0, d = p.length; g < d; g++) {
                    var v = p[g];
                    u[f[g]] = a.isArray(v) && 1 === v.length ? v[0] : v
                  } else u[f[0]] = 1 === p.length ? p[0] : p
              } r.push(u)
          }
          return r
        }, n._getAttrValues = function(t, e) {
          for (var n = t.scales, i = [], r = 0, a = n.length; r < a; r++) {
            var o = n[r],
              s = o.field;
            "identity" === o.type ? i.push(o.value) : i.push(e[s])
          }
          return t.mapping.apply(t, i)
        }, n.getAttrValue = function(t, e) {
          var n = this.getAttr(t),
            i = null;
          return n && (i = this._getAttrValues(n, e)[0]), i
        }, n._beforeMapping = function(t) {
          var e = this;
          e.get("sortable") && e._sort(t), e.get("generatePoints") && a.each(t, function(t) {
            e._generatePoints(t)
          })
        }, n.isInCircle = function() {
          var t = this.get("coord");
          return t && t.isPolar
        }, n.getCallbackCfg = function(t, e, n) {
          if (!t) return e;
          var i = {},
            r = t.map(function(t) {
              return n[t]
            });
          return a.each(e, function(t, e) {
            a.isFunction(t) ? i[e] = t.apply(null, r) : i[e] = t
          }), i
        }, n.getDrawCfg = function(t) {
          var e = this,
            n = e.isInCircle(),
            i = {
              origin: t,
              x: t.x,
              y: t.y,
              color: t.color,
              size: t.size,
              shape: t.shape,
              isInCircle: n,
              opacity: t.opacity
            },
            r = e.get("styleOptions");
          return r && r.style && (i.style = e.getCallbackCfg(r.fields, r.style, t._origin)), e.get(
            "generatePoints") && (i.points = t.points), n && (i.center = e.get("coord").center), i
        }, n.draw = function(t, e) {
          var n = this,
            i = n.get("container"),
            r = n.getYScale();
          a.each(t, function(t, o) {
            if (!r || !a.isNil(t._origin[r.field])) {
              t.index = o;
              var s = n.getDrawCfg(t),
                c = t.shape;
              n.drawShape(c, t, s, i, e)
            }
          })
        }, n.drawShape = function(t, e, n, i, r) {
          var o = r.drawShape(t, n, i);
          o && a.each([].concat(o), function(t) {
            t.set("origin", e)
          })
        }, n._generatePoints = function(t) {
          for (var e = this, n = e.getShapeFactory(), i = e.getAttr("shape"), r = 0, a = t.length; r <
            a; r++) {
            var o = t[r],
              s = e.createShapePointsCfg(o),
              c = i ? e._getAttrValues(i, o) : null,
              u = n.getShapePoints(c, s);
            o.points = u
          }
        }, n.createShapePointsCfg = function(t) {
          var e, n = this.getXScale(),
            i = this.getYScale(),
            r = this._normalizeValues(t[n.field], n);
          return e = i ? this._normalizeValues(t[i.field], i) : t.y ? t.y : .1, {
            x: r,
            y: e,
            y0: i ? i.scale(this.getYMinValue()) : void 0
          }
        }, n.getYMinValue = function() {
          var t = this.getYScale(),
            e = t.min,
            n = t.max;
          return this.get("startOnZero") ? n <= 0 && e <= 0 ? n : e >= 0 ? e : 0 : e
        }, n._normalizeValues = function(t, e) {
          var n = [];
          if (a.isArray(t))
            for (var i = 0, r = t.length; i < r; i++) {
              var o = t[i];
              n.push(e.scale(o))
            } else n = e.scale(t);
          return n
        }, n.getAttr = function(t) {
          return this.get("attrs")[t]
        }, n.getXScale = function() {
          return this.getAttr("position").scales[0]
        }, n.getYScale = function() {
          return this.getAttr("position").scales[1]
        }, n.hasAdjust = function(t) {
          return this.get("adjust") && this.get("adjust").type === t
        }, n._getSnap = function(t, e, n) {
          var i, r = 0,
            a = this.getYScale().field;
          if (this.hasAdjust("stack") && t.field === a) {
            i = [], n.forEach(function(t) {
              i.push(t._originY)
            });
            for (var o = i.length; r < o && !(i[0][0] > e); r++) {
              if (i[i.length - 1][1] <= e) {
                r = i.length - 1;
                break
              }
              if (i[r][0] <= e && i[r][1] > e) break
            }
          } else {
            (i = t.values).sort(function(t, e) {
              return t - e
            });
            for (var s = i.length; r < s && !((i[0] + i[1]) / 2 > e) && !((i[r - 1] + i[r]) / 2 <= e && (i[r +
                1] + i[r]) / 2 > e); r++)
              if ((i[i.length - 2] + i[i.length - 1]) / 2 <= e) {
                r = i.length - 1;
                break
              }
          }
          return i[r]
        }, n.getSnapRecords = function(t) {
          var e = this,
            n = e.get("coord"),
            i = e.getXScale(),
            r = e.getYScale(),
            o = i.field,
            s = e.get("dataArray");
          this.get("hasSorted") || this._sort(s);
          var c = [],
            u = n.invertPoint(t),
            l = u.x;
          e.isInCircle() && !n.transposed && l > (1 + i.rangeMax()) / 2 && (l = i.rangeMin());
          var h = i.invert(l);
          i.isCategory || (h = e._getSnap(i, h));
          var f = [];
          if (s.forEach(function(t) {
              t.forEach(function(t) {
                var n = a.isNil(t._origin) ? t[o] : t._origin[o];
                e._isEqual(n, h, i) && f.push(t)
              })
            }), this.hasAdjust("stack") && n.isPolar && n.transposed && 1 === i.values.length) {
            if (l >= 0 && l <= 1) {
              var p = r.invert(u.y);
              p = e._getSnap(r, p, f), f.forEach(function(t) {
                (a.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && c.push(t)
              })
            }
          } else c = f;
          return c
        }, n._isEqual = function(t, e, n) {
          return "timeCat" === n.type ? n._toTimeStamp(t) === e : e === t
        }, n.position = function(t) {
          return this._setAttrOptions("position", {
            field: t
          }), this
        }, n.color = function(t, e) {
          return this._createAttrOption("color", t, e, c.colors), this
        }, n.size = function(t, e) {
          return this._createAttrOption("size", t, e, c.sizes), this
        }, n.shape = function(t, e) {
          var n = this.get("type"),
            i = c.shapes[n] || [];
          return this._createAttrOption("shape", t, e, i), this
        }, n.style = function(t, e) {
          var n = this.get("styleOptions");
          n || (n = {}, this.set("styleOptions", n)), a.isObject(t) && (e = t, t = null);
          var i;
          return t && (i = r(t)), n.fields = i, n.style = e, this
        }, n.adjust = function(t) {
          return a.isString(t) && (t = {
            type: t
          }), this.set("adjust", t), this
        }, n.animate = function(t) {
          return this.set("animateCfg", t), this
        }, n.reset = function() {
          this.set("attrOptions", {}), this.set("adjust", null), this.clearInner()
        }, n.clearInner = function() {
          var t = this.get("container");
          t && (t.clear(), t.setMatrix([1, 0, 0, 1, 0, 0])), t && t.clear(), this.set("attrs", {}), this.set(
            "groupScales", null), this.set("xDistance", null), this.set("_width", null)
        }, n.clear = function() {
          this.clearInner(), this.set("scales", {})
        }, n.destroy = function() {
          this.clear(), t.prototype.destroy.call(this)
        }, n._display = function(t) {
          this.set("visible", t);
          var e = this.get("container"),
            n = e.get("canvas");
          e.set("visible", t), n.draw()
        }, n.show = function() {
          this._display(!0)
        }, n.hide = function() {
          this._display(!1)
        }, e
      }(o);
    t.exports = f
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t, e) {
      return n.call(t) === "[object " + e + "]"
    }
  }, function(t, e, n) {
    var i = n(0),
      r = n(1),
      a = {},
      o = {
        _coord: null,
        draw: function(t, e) {
          this.drawShape && this.drawShape(t, e)
        },
        setCoord: function(t) {
          this._coord = t
        },
        parsePoint: function(t) {
          var e = this._coord;
          return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), e.convertPoint(
            t)
        },
        parsePoints: function(t) {
          if (!t) return !1;
          var e = this,
            n = [];
          return t.forEach(function(t) {
            n.push(e.parsePoint(t))
          }), n
        }
      },
      s = {
        defaultShapeType: null,
        setCoord: function(t) {
          this._coord = t
        },
        getShape: function(t) {
          var e = this;
          i.isArray(t) && (t = t[0]);
          var n = e[t] || e[e.defaultShapeType];
          return n._coord = e._coord, n
        },
        getShapePoints: function(t, e) {
          var n = this.getShape(t);
          return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e)
        },
        getDefaultPoints: function() {
          return []
        },
        drawShape: function(t, e, n) {
          var i = this.getShape(t);
          return e.color || (e.color = r.colors[0]), i.draw(e, n)
        }
      };
    a.registerFactory = function(t, e) {
      var n = i.upperFirst(t),
        r = i.mix({}, s, e);
      return a[n] = r, r.name = t, r
    }, a.registerShape = function(t, e, n) {
      var r = i.upperFirst(t),
        s = a[r],
        c = i.mix({}, o, n);
      return s[e] = c, c
    }, a.registShape = a.registerShape, a.getShapeFactory = function(t) {
      var e = this;
      return t = t || "point", e[i.upperFirst(t)]
    }, t.exports = a
  }, function(t, e, n) {
    var i = {
      Canvas: n(85),
      Group: n(36),
      Shape: n(2),
      Matrix: n(22),
      Vector2: n(3)
    };
    n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), t.exports = i
  }, function(t, e, n) {
    function i(t, e, n, i, a) {
      return {
        x: r(a, t.x, e.x, n.x, i.x),
        y: r(a, t.y, e.y, n.y, i.y)
      }
    }

    function r(t, e, n, i, r) {
      var a = t * t;
      return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * n + t * (-6 * n + 3 * n * t)) * t + (3 * i - 3 * i *
        t) * a + r * (a * t)
    }

    function a(t) {
      for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, a = -1 / 0, o = {
          x: t[0],
          y: t[1]
        }, s = {
          x: t[2],
          y: t[3]
        }, c = {
          x: t[4],
          y: t[5]
        }, u = {
          x: t[6],
          y: t[7]
        }, l = 0; l < 100; l++) {
        var h = i(o, s, c, u, l / 100);
        h.x < e && (e = h.x), h.x > n && (n = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y)
      }
      return {
        minX: e,
        minY: r,
        maxX: n,
        maxY: a
      }
    }
    var o = n(3),
      s = o.create(),
      c = o.create(),
      u = o.create();
    t.exports = {
      getBBoxFromPoints: function(t) {
        if (0 !== t.length) {
          for (var e = t[0], n = e.x, i = e.x, r = e.y, a = e.y, o = t.length, s = 1; s < o; s++) e = t[s],
            n = Math.min(n, e.x), i = Math.max(i, e.x), r = Math.min(r, e.y), a = Math.max(a, e.y);
          return {
            minX: n,
            minY: r,
            maxX: i,
            maxY: a
          }
        }
      },
      getBBoxFromLine: function(t, e, n, i) {
        return {
          minX: Math.min(t, n),
          minY: Math.min(e, i),
          maxX: Math.max(t, n),
          maxY: Math.max(e, i)
        }
      },
      getBBoxFromArc: function(t, e, n, i, r, a) {
        var l = Math.abs(i - r);
        if (l % Math.PI * 2 < 1e-4 && l > 1e-4) return {
          minX: t - n,
          minY: e - n,
          maxX: t + n,
          maxY: e + n
        };
        s[0] = Math.cos(i) * n + t, s[1] = Math.sin(i) * n + e, c[0] = Math.cos(r) * n + t, c[1] = Math.sin(
          r) * n + e;
        var h = [0, 0],
          f = [0, 0];
        if (o.min(h, s, c), o.max(f, s, c), (i %= 2 * Math.PI) < 0 && (i += 2 * Math.PI), (r %= 2 * Math
          .PI) < 0 && (r += 2 * Math.PI), i > r && !a ? r += 2 * Math.PI : i < r && a && (i += 2 * Math.PI),
          a) {
          var p = r;
          r = i, i = p
        }
        for (var g = 0; g < r; g += Math.PI / 2) g > i && (u[0] = Math.cos(g) * n + t, u[1] = Math.sin(g) *
          n + e, o.min(h, u, h), o.max(f, u, f));
        return {
          minX: h[0],
          minY: h[1],
          maxX: f[0],
          maxY: f[1]
        }
      },
      getBBoxFromBezierGroup: function(t) {
        for (var e = 1 / 0, n = -1 / 0, i = 1 / 0, r = -1 / 0, o = 0, s = t.length; o < s; o++) {
          var c = a(t[o]);
          c.minX < e && (e = c.minX), c.maxX > n && (n = c.maxX), c.minY < i && (i = c.minY), c.maxY > r &&
            (r = c.maxY)
        }
        return {
          minX: e,
          minY: i,
          maxX: n,
          maxY: r
        }
      }
    }
  }, function(t, e, n) {
    var i = n(0),
      r = {
        min: 0,
        median: .5,
        max: 1
      },
      a = function() {
        function t(t) {
          this._initDefaultCfg(), i.deepMix(this, t)
        }
        var e = t.prototype;
        return e._initDefaultCfg = function() {}, e._getNormalizedValue = function(t, e) {
          return i.isNil(r[t]) ? e.scale(t) : r[t]
        }, e.parsePercentPoint = function(t, e) {
          var n = parseFloat(e[0]) / 100,
            i = parseFloat(e[1]) / 100,
            r = t.start,
            a = t.end,
            o = Math.abs(r.x - a.x),
            s = Math.abs(r.y - a.y);
          return {
            x: o * n + Math.min(r.x, a.x),
            y: s * i + Math.min(r.y, a.y)
          }
        }, e.parsePoint = function(t, e) {
          var n = this,
            r = n.xScale,
            a = n.yScales;
          if (i.isFunction(e) && (e = e(r, a)), i.isString(e[0]) && -1 !== e[0].indexOf("%")) return this
            .parsePercentPoint(t, e);
          var o = n._getNormalizedValue(e[0], r),
            s = n._getNormalizedValue(e[1], a[0]),
            c = t.convertPoint({
              x: o,
              y: s
            });
          return n.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? c : null : c
        }, e.render = function() {}, e.repaint = function() {
          this.remove();
          var t = this.coord,
            e = this.container,
            n = this.canvas;
          e && !e.isDestroyed() && (this.render(t, e), n.draw())
        }, e.remove = function() {
          var t = this.element;
          t && t.remove(!0)
        }, t
      }();
    t.exports = a
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = n(76),
      a = n(11),
      o = n(23),
      s = n(21),
      c = function() {
        function t(e) {
          i(this, t), this._initDefaultCfg(), r(this, e), this.init()
        }
        return t.prototype._initDefaultCfg = function() {
          this.type = "base", this.formatter = null, this.range = [0, 1], this.ticks = null, this.values = []
        }, t.prototype.init = function() {}, t.prototype.getTicks = function() {
          var t = this,
            e = t.ticks,
            n = [];
          return a(e, function(e) {
            var i = void 0;
            i = o(e) ? e : {
              text: t.getText(e),
              tickValue: e,
              value: t.scale(e)
            }, n.push(i)
          }), n
        }, t.prototype.getText = function(t, e) {
          var n = this.formatter;
          return t = n ? n(t, e) : t, !s(t) && t.toString || (t = ""), t.toString()
        }, t.prototype.rangeMin = function() {
          return this.range[0]
        }, t.prototype.rangeMax = function() {
          var t = this.range;
          return t[t.length - 1]
        }, t.prototype.invert = function(t) {
          return t
        }, t.prototype.translate = function(t) {
          return t
        }, t.prototype.scale = function(t) {
          return t
        }, t.prototype.clone = function() {
          var t = this,
            e = t.constructor,
            n = {};
          return a(t, function(e, i) {
            n[i] = t[i]
          }), new e(n)
        }, t.prototype.change = function(t) {
          return this.ticks = null, r(this, t), this.init(), this
        }, t
      }();
    t.exports = c
  }, function(t, e, n) {
    var i = n(23),
      r = n(77);
    t.exports = function(t, e) {
      if (t)
        if (r(t))
          for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++);
        else if (i(t))
        for (var o in t)
          if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
    }
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      return a(e) ? e : t.invert(t.scale(e))
    }
    var a = n(67),
      o = n(19),
      s = n(68),
      c = n(34),
      u = function() {
        function t(e) {
          i(this, t), this.type = "base", this.name = null, this.method = null, this.values = [], this
            .scales = [], this.linear = null, s(this, e)
        }
        return t.prototype._getAttrValue = function(t, e) {
          var n = this.values;
          if (t.isCategory && !this.linear) return n[t.translate(e) % n.length];
          var i = t.scale(e);
          return this.getLinearValue(i)
        }, t.prototype.getLinearValue = function(t) {
          var e = this.values,
            n = e.length - 1,
            i = Math.floor(n * t),
            r = n * t - i,
            a = e[i];
          return a + ((i === n ? a : e[i + 1]) - a) * r
        }, t.prototype.callback = function(t) {
          var e = this,
            n = e.scales[0];
          return "identity" === n.type ? n.value : e._getAttrValue(n, t)
        }, t.prototype.getNames = function() {
          for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), i = [], r = 0; r <
            n; r++) i.push(e[r]);
          return i
        }, t.prototype.getFields = function() {
          var t = this.scales,
            e = [];
          return c(t, function(t) {
            e.push(t.field)
          }), e
        }, t.prototype.getScale = function(t) {
          return this.scales[this.names.indexOf(t)]
        }, t.prototype.mapping = function() {
          for (var t = this.scales, e = this.callback, n = arguments.length, i = Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          var a = i;
          if (e) {
            for (var o = 0, s = i.length; o < s; o++) i[o] = this._toOriginParam(i[o], t[o]);
            a = e.apply(this, i)
          }
          return a = [].concat(a)
        }, t.prototype._toOriginParam = function(t, e) {
          var n = t;
          if (!e.isLinear)
            if (o(t)) {
              n = [];
              for (var i = 0, a = t.length; i < a; i++) n.push(r(e, t[i]))
            } else n = r(e, t);
          return n
        }, t
      }();
    t.exports = u
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t, e) {
      return n.call(t) === "[object " + e + "]"
    }
  }, function(t, e, n) {
    var i = n(13);
    t.exports = function(t) {
      return i(t, "Number")
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function a(t) {
      var e = t.startAngle,
        n = t.endAngle;
      return !(!l.isNil(e) && !l.isNil(n) && n - e < 2 * Math.PI)
    }

    function o(t, e) {
      return t - e
    }

    function s(t, e) {
      var n = !1;
      return l.each(t, function(t) {
        var i = [].concat(t.values),
          r = [].concat(e.values);
        t.type !== e.type || t.field !== e.field || i.sort(o).toString() !== r.sort(o).toString() || (n = !
          0)
      }), n
    }
    var c = n(32),
      u = n(60),
      l = n(0),
      h = n(61),
      f = n(4),
      p = n(74),
      g = n(82),
      d = n(1),
      v = n(7).Canvas,
      y = n(26),
      m = function(t) {
        function e(e) {
          var n, i = r(r(n = t.call(this, e) || this));
          return l.each(f, function(t, e) {
            var n = l.lowerFirst(e);
            i[n] = function(e) {
              var n = new t(e);
              return i.addGeom(n), n
            }
          }), i._init(), n
        }
        i(e, t), e.initPlugins = function() {
          return {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t)
              }), this._cacheId++
            },
            unregister: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }), this._cacheId++
            },
            clear: function() {
              this._plugins = [], this._cacheId++
            },
            count: function() {
              return this._plugins.length
            },
            getAll: function() {
              return this._plugins
            },
            notify: function(t, e, n) {
              var i, r, a, o, s, c = this.descriptors(t),
                u = c.length;
              for (i = 0; i < u; ++i)
                if (r = c[i], a = r.plugin, "function" == typeof(s = a[e]) && (o = [t].concat(n || []), !
                    1 === s.apply(a, o))) return !1;
              return !0
            },
            descriptors: function(t) {
              var e = t._plugins || (t._plugins = {});
              if (e.id === this._cacheId) return e.descriptors;
              var n = [],
                i = [];
              return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                -1 === n.indexOf(t) && (n.push(t), i.push({
                  plugin: t
                }))
              }), e.descriptors = i, e.id = this._cacheId, i
            }
          }
        };
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          return {
            id: null,
            padding: d.padding,
            data: null,
            scales: {},
            geoms: null,
            colDefs: null,
            pixelRatio: d.pixelRatio,
            filters: null,
            appendPadding: d.appendPadding
          }
        }, n._syncYScales = function() {
          var t = this.get("geoms"),
            e = [],
            n = [],
            i = [];
          l.each(t, function(t) {
            var r = t.getYScale();
            r.isLinear && (e.push(r), n.push(r.min), i.push(r.max))
          }), n = Math.min.apply(null, n), i = Math.max.apply(null, i), l.each(e, function(t) {
            t.min = n, t.max = i
          })
        }, n._getFieldsForLegend = function() {
          var t = [],
            e = this.get("geoms");
          return l.each(e, function(e) {
            var n = e.get("attrOptions").color;
            if (n && n.field && l.isString(n.field)) {
              var i = n.field.split("*");
              l.each(i, function(e) {
                -1 === t.indexOf(e) && t.push(e)
              })
            }
          }), t
        }, n._createScale = function(t, e) {
          return this.get("scaleController").createScale(t, e)
        }, n._adjustScale = function() {
          var t = this,
            e = t.get("coord"),
            n = t.getXScale(),
            i = t.getYScales(),
            r = [];
          n && r.push(n), r = r.concat(i);
          var o = e.isPolar && a(e),
            s = t.get("scaleController").defs;
          l.each(r, function(t) {
            if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) {
              var n, i = t.values.length;
              if (1 === i) n = [.5, 1];
              else {
                var r = 0;
                n = o ? e.transposed ? [(r = 1 / i * d.widthRatio.multiplePie) / 2, 1 - r / 2] : [0, 1 -
                  1 / i
                ] : [r = 1 / i * 1 / 2, 1 - r]
              }
              t.range = n
            }
          });
          for (var c = this.get("geoms"), u = 0; u < c.length; u++) {
            var h = c[u];
            if ("interval" === h.get("type")) {
              var f = h.getYScale(),
                p = f.field,
                g = f.min,
                v = f.max,
                y = f.type;
              s[p] && s[p].min || "time" === y || (g > 0 ? f.change({
                min: 0
              }) : v <= 0 && f.change({
                max: 0
              }))
            }
          }
        }, n._removeGeoms = function() {
          for (var t = this.get("geoms"); t.length > 0;) t.shift().destroy()
        }, n._clearGeoms = function() {
          for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++) t[e].clear()
        }, n._clearInner = function() {
          this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this,
            "clearInner"), this.get("axisController") && this.get("axisController").clear()
        }, n._execFilter = function(t) {
          var e = this.get("filters");
          return e && (t = t.filter(function(t) {
            var n = !0;
            return l.each(e, function(e, i) {
              if (e && !(n = e(t[i], t))) return !1
            }), n
          })), t
        }, n._initGeoms = function(t) {
          for (var e = this.get("coord"), n = this.get("filteredData"), i = this.get("colDefs"), r = 0, a = t
              .length; r < a; r++) {
            var o = t[r];
            o.set("data", n), o.set("coord", e), o.set("colDefs", i), o.init()
          }
        }, n._initCoord = function() {
          var t = this.get("plotRange"),
            e = l.mix({
              type: "cartesian"
            }, this.get("coordCfg"), {
              plot: t
            }),
            n = e.type,
            i = new(0, h[l.upperFirst(n)])(e);
          this.set("coord", i)
        }, n._initLayout = function() {
          var t = this.get("_padding");
          t || (t = this.get("margin") || this.get("padding"), t = l.parsePadding(t));
          var e = "auto" === t[0] ? 0 : t[0],
            n = "auto" === t[1] ? 0 : t[1],
            i = "auto" === t[2] ? 0 : t[2],
            r = "auto" === t[3] ? 0 : t[3],
            a = this.get("width"),
            o = this.get("height"),
            s = new u({
              start: {
                x: r,
                y: e
              },
              end: {
                x: a - n,
                y: o - i
              }
            });
          this.set("plotRange", s), this.set("plot", s)
        }, n._initCanvas = function() {
          var t = this;
          try {
            var n = new v({
              el: t.get("el") || t.get("id"),
              context: t.get("context"),
              pixelRatio: t.get("pixelRatio"),
              width: t.get("width"),
              height: t.get("height"),
              fontFamily: d.fontFamily
            });
            t.set("canvas", n), t.set("width", n.get("width")), t.set("height", n.get("height"))
          } catch (t) {
            throw t
          }
          e.plugins.notify(t, "afterCanvasInit"), t._initLayout()
        }, n._initLayers = function() {
          var t = this.get("canvas");
          this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
            zIndex: 10
          })), this.set("frontPlot", t.addGroup({
            zIndex: 20
          }))
        }, n._init = function() {
          var t = this;
          t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new p), t.set(
            "axisController", new g({
              frontPlot: t.get("frontPlot").addGroup({
                className: "axisContainer"
              }),
              backPlot: t.get("backPlot").addGroup({
                className: "axisContainer"
              }),
              chart: t
            })), e.plugins.notify(t, "init")
        }, n.source = function(t, e) {
          return this.set("data", t), e && this.scale(e), this
        }, n.scale = function(t, e) {
          var n = this.get("colDefs") || {};
          return l.isObject(t) ? l.mix(n, t) : n[t] = e, this.set("colDefs", n), this.get("scaleController")
            .defs = n, this
        }, n.axis = function(t, e) {
          var n = this.get("axisController");
          return t ? (n.axisCfg = n.axisCfg || {}, n.axisCfg[t] = e) : n.axisCfg = null, this
        }, n.coord = function(t, e) {
          var n;
          return l.isObject(t) ? n = t : (n = e || {}).type = t || "cartesian", this.set("coordCfg", n), this
        }, n.filter = function(t, e) {
          var n = this.get("filters") || {};
          n[t] = e, this.set("filters", n)
        }, n.render = function() {
          var t = this.get("canvas"),
            n = this.get("geoms"),
            i = this.get("data") || [],
            r = this._execFilter(i);
          this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), this
            ._initGeoms(n), this.get("syncY") && this._syncYScales(), this._adjustScale(), e.plugins.notify(
              this, "beforeGeomDraw"), this._renderAxis();
          var a = this.get("middlePlot");
          if (this.get("limitInPlot") && !a.attr("clip")) {
            var o = this.get("coord"),
              s = y.getClip(o);
            s.set("canvas", a.get("canvas")), a.attr("clip", s)
          }
          for (var c = 0, u = n.length; c < u; c++) n[c].paint();
          return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), e.plugins
            .notify(this, "beforeCanvasDraw"), t.draw(), this
        }, n.clear = function() {
          return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), this.set("filters",
            null), this.set("isUpdate", !1), this.set("_padding", null), this.get("canvas").draw(), this
        }, n.repaint = function() {
          this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), this.render()
        }, n.changeData = function(t) {
          this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), this
          .repaint()
        }, n.changeSize = function(t, e) {
          return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get(
            "height"), this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this
        }, n.destroy = function() {
          this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), this
            ._interactions && l.each(this._interactions, function(t) {
              t.destroy()
            }), t.prototype.destroy.call(this)
        }, n.getPosition = function(t) {
          var e = this,
            n = e.get("coord"),
            i = e.getXScale(),
            r = e.getYScales()[0],
            a = i.field,
            o = i.scale(t[a]),
            s = r.field,
            c = r.scale(t[s]);
          return n.convertPoint({
            x: o,
            y: c
          })
        }, n.getRecord = function(t) {
          var e = this,
            n = e.get("coord"),
            i = e.getXScale(),
            r = e.getYScales()[0],
            a = n.invertPoint(t),
            o = {};
          return o[i.field] = i.invert(a.x), o[r.field] = r.invert(a.y), o
        }, n.getSnapRecords = function(t) {
          var e = this.get("geoms")[0],
            n = [];
          return e && (n = e.getSnapRecords(t)), n
        }, n.createScale = function(t) {
          var e = this.get("data"),
            n = this.get("filteredData");
          n.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = n);
          var i = this.get("scales");
          return i[t] || (i[t] = this._createScale(t, e)), i[t]
        }, n.addGeom = function(t) {
          var e = this.get("geoms"),
            n = this.get("middlePlot");
          e.push(t), t.set("chart", this), t.set("container", n.addGroup())
        }, n.getXScale = function() {
          return this.get("geoms")[0].getXScale()
        }, n.getYScales = function() {
          var t = this.get("geoms"),
            e = [];
          return l.each(t, function(t) {
            var n = t.getYScale(); - 1 === e.indexOf(n) && e.push(n)
          }), e
        }, n.getLegendItems = function() {
          if (this.get("legendItems")) return this.get("legendItems");
          var t = {},
            e = [],
            n = this.get("geoms");
          return l.each(n, function(n) {
            var i = n.getAttr("color");
            if (i) {
              var r = i.getScale("color");
              if ("identity" !== r.type && !s(e, r)) {
                e.push(r);
                var a = r.field,
                  o = r.getTicks(),
                  c = [];
                l.each(o, function(t) {
                  var e = t.text,
                    n = t.value,
                    a = r.invert(n),
                    o = {
                      fill: i.mapping(a).join("") || d.defaultColor,
                      radius: 3,
                      symbol: "circle",
                      stroke: "#fff"
                    };
                  c.push({
                    name: e,
                    dataValue: a,
                    checked: !0,
                    marker: o
                  })
                }), t[a] = c
              }
            }
          }), this.set("legendItems", t), t
        }, n.registerPlugins = function(t) {
          var n = this,
            i = n.get("plugins") || [];
          l.isArray(i) || (i = [i]), [].concat(t).forEach(function(t) {
            -1 === i.indexOf(t) && (t.init && t.init(n), i.push(t))
          }), e.plugins._cacheId++, n.set("plugins", i)
        }, n._renderAxis = function() {
          var t = this.get("axisController"),
            n = this.getXScale(),
            i = this.getYScales(),
            r = this.get("coord");
          e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, n, i)
        }, n._isAutoPadding = function() {
          if (this.get("_padding")) return !1;
          var t = this.get("padding");
          return l.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t
        }, n._updateLayout = function(t) {
          var e = this.get("width"),
            n = this.get("height"),
            i = {
              x: t[3],
              y: t[0]
            },
            r = {
              x: e - t[1],
              y: n - t[2]
            },
            a = this.get("plot"),
            o = this.get("coord");
          a.reset(i, r), o.reset(a)
        }, e
      }(c);
    m.plugins = m.initPlugins(), t.exports = m
  }, function(t, e, n) {
    var i = n(0),
      r = {
        splitPoints: function(t) {
          var e = [],
            n = t.x,
            r = t.y;
          return (r = i.isArray(r) ? r : [r]).forEach(function(t, r) {
            var a = {
              x: i.isArray(n) ? n[r] : n,
              y: t
            };
            e.push(a)
          }), e
        },
        splitArray: function(t, e, n) {
          if (!t.length) return [];
          var r, a = [],
            o = [];
          return i.each(t, function(t) {
            r = t._origin ? t._origin[e] : t[e], n ? i.isNil(r) || o.push(t) : i.isArray(r) && i.isNil(r[
              0]) || i.isNil(r) ? o.length && (a.push(o), o = []) : o.push(t)
          }), o.length && a.push(o), a
        }
      };
    t.exports = r
  }, function(t, e, n) {
    var i = n(5),
      r = Array.isArray ? Array.isArray : function(t) {
        return i(t, "Array")
      };
    t.exports = r
  }, function(t, e, n) {
    var i = n(0),
      r = function() {
        function t(t) {
          this._initDefaultCfg(), i.mix(this, t);
          var e, n;
          this.plot ? (e = this.plot.bl, n = this.plot.tr, this.start = e, this.end = n) : (e = this.start, n =
            this.end), this.init(e, n)
        }
        var e = t.prototype;
        return e._initDefaultCfg = function() {}, e.init = function() {}, e.convertPoint = function(t) {
          return t
        }, e.invertPoint = function(t) {
          return t
        }, e.reset = function(t) {
          this.plot = t;
          var e = t.bl,
            n = t.tr;
          this.start = e, this.end = n, this.init(e, n)
        }, t
      }();
    t.exports = r
  }, function(t, e, n) {
    var i = n(33),
      r = Array.isArray ? Array.isArray : function(t) {
        return i(t, "Array")
      };
    t.exports = r
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = n(73),
      a = function() {
        function t(e) {
          i(this, t), this._initDefaultCfg(), r(this, e)
        }
        return t.prototype._initDefaultCfg = function() {
          this.adjustNames = ["x", "y"]
        }, t.prototype.processAdjust = function() {}, t
      }();
    t.exports = a
  }, function(t, e) {
    t.exports = function(t) {
      return null === t || void 0 === t
    }
  }, function(t, e) {
    var n = {
      multiply: function(t, e) {
        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[
          2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]
        ]
      },
      scale: function(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[0], t[2] = e[2] * n[1], t[3] = e[3] * n[1], t[4] = e[4],
          t[5] = e[5], t
      },
      rotate: function(t, e, n) {
        var i = Math.cos(n),
          r = Math.sin(n),
          a = e[0] * i + e[2] * r,
          o = e[1] * i + e[3] * r,
          s = e[0] * -r + e[2] * i,
          c = e[1] * -r + e[3] * i;
        return t[0] = a, t[1] = o, t[2] = s, t[3] = c, t[4] = e[4], t[5] = e[5], t
      },
      translate: function(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * n[0] + e[2] * n[1],
          t[5] = e[5] + e[1] * n[0] + e[3] * n[1], t
      },
      transform: function(t, e) {
        for (var i = [].concat(t), r = 0, a = e.length; r < a; r++) {
          var o = e[r];
          switch (o[0]) {
            case "t":
              n.translate(i, i, [o[1], o[2]]);
              break;
            case "s":
              n.scale(i, i, [o[1], o[2]]);
              break;
            case "r":
              n.rotate(i, i, o[1])
          }
        }
        return i
      }
    };
    t.exports = n
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    t.exports = function(t) {
      var e = void 0 === t ? "undefined" : n(t);
      return null !== t && "object" === e || "function" === e
    }
  }, function(t, e, n) {
    var i = n(0),
      r = n(1),
      a = n(3),
      o = function() {
        function t(t) {
          this._initDefaultCfg(), i.mix(this, t), this.draw()
        }
        var e = t.prototype;
        return e._initDefaultCfg = function() {
          this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, this
            .backContainer = null, this.gridPoints = []
        }, e.draw = function() {
          var t = this.line,
            e = this.tickLine,
            n = this.label,
            i = this.grid;
          i && this.drawGrid(i), e && this.drawTicks(e), t && this.drawLine(t), n && this.drawLabels()
        }, e.drawTicks = function(t) {
          var e = this,
            n = e.ticks,
            r = t.length,
            a = e.getContainer(t.top);
          i.each(n, function(n) {
            var o = e.getOffsetPoint(n.value),
              s = e.getSidePoint(o, r);
            a.addShape("line", {
              className: "axis-tick",
              attrs: i.mix({
                x1: o.x,
                y1: o.y,
                x2: s.x,
                y2: s.y
              }, t)
            })._id = e._id + "-ticks"
          })
        }, e.drawLabels = function() {
          var t = this,
            e = t.labelOffset,
            n = t.labels;
          i.each(n, function(n) {
            var r = t.getContainer(n.get("top")),
              a = t.getOffsetPoint(n.get("value")),
              o = t.getSidePoint(a, e),
              s = o.x,
              c = o.y;
            n.attr(i.mix({
                x: s,
                y: c
              }, t.getTextAlignInfo(a, e), n.get("textStyle"))), n._id = t._id + "-" + n.attr("text"), r
              .add(n)
          })
        }, e.drawLine = function() {}, e.drawGrid = function(t) {
          var e = this,
            n = e.gridPoints,
            o = e.ticks,
            s = t,
            c = n.length;
          i.each(n, function(n, u) {
            if (i.isFunction(t)) {
              var l = o[u] || {};
              s = i.mix({}, r._defaultAxis.grid, t(l.text, u, c))
            }
            if (s) {
              var h, f = s.type,
                p = n.points,
                g = e.getContainer(s.top);
              if ("arc" === f) {
                var d = e.center,
                  v = e.startAngle,
                  y = e.endAngle,
                  m = a.length([p[0].x - d.x, p[0].y - d.y]);
                h = g.addShape("Arc", {
                  className: "axis-grid",
                  attrs: i.mix({
                    x: d.x,
                    y: d.y,
                    startAngle: v,
                    endAngle: y,
                    r: m
                  }, s)
                })
              } else h = g.addShape("Polyline", {
                className: "axis-grid",
                attrs: i.mix({
                  points: p
                }, s)
              });
              h._id = n._id
            }
          })
        }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t,
          e) {
          var n = this,
            i = n.getAxisVector(t),
            r = a.normalize([], i),
            o = n.offsetFactor,
            s = [-1 * r[1] * o, r[0] * o];
          return a.scale([], s, e)
        }, e.getSidePoint = function(t, e) {
          var n = this.getOffsetVector(t, e);
          return {
            x: t.x + n[0],
            y: t.y + n[1]
          }
        }, e.getTextAlignInfo = function(t, e) {
          var n, i, r = this.getOffsetVector(t, e);
          return n = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", i = r[1] > 0 ? "top" : r[1] < 0 ?
            "bottom" : "middle", {
              textAlign: n,
              textBaseline: i
            }
        }, e.getContainer = function(t) {
          var e = this.frontContainer,
            n = this.backContainer;
          return t ? e : n
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    function i(t) {
      return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5]
    }
    var r = n(0),
      a = n(22),
      o = n(3),
      s = n(86),
      c = {
        stroke: "strokeStyle",
        fill: "fillStyle",
        opacity: "globalAlpha"
      },
      u = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur",
        "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash"
      ],
      l = ["circle", "sector", "polygon", "rect", "polyline"],
      h = function() {
        function t(t) {
          this._initProperties(), r.mix(this._attrs, t);
          var e = this._attrs.attrs;
          e && this.initAttrs(e), this.initTransform()
        }
        var e = t.prototype;
        return e._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1
          }
        }, e.get = function(t) {
          return this._attrs[t]
        }, e.set = function(t, e) {
          this._attrs[t] = e
        }, e.isGroup = function() {
          return this.get("isGroup")
        }, e.isShape = function() {
          return this.get("isShape")
        }, e.initAttrs = function(t) {
          this.attr(r.mix(this.getDefaultAttrs(), t))
        }, e.getDefaultAttrs = function() {
          return {}
        }, e._setAttr = function(t, e) {
          var n = this._attrs.attrs;
          if ("clip" === t) e = this._setAttrClip(e);
          else {
            var i = c[t];
            i && (n[i] = e)
          }
          n[t] = e
        }, e._getAttr = function(t) {
          return this._attrs.attrs[t]
        }, e._setAttrClip = function(t) {
          return t && l.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)),
            t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null
        }, e.attr = function(t, e) {
          var n = this;
          if (n.get("destroyed")) return null;
          var i = arguments.length;
          if (0 === i) return n._attrs.attrs;
          if (r.isObject(t)) {
            this._attrs.bbox = null;
            for (var a in t) n._setAttr(a, t[a]);
            return n._afterAttrsSet && n._afterAttrsSet(), n
          }
          return 2 === i ? (this._attrs.bbox = null, n._setAttr(t, e), n._afterAttrsSet && n._afterAttrsSet(),
            n) : n._getAttr(t)
        }, e.getParent = function() {
          return this.get("parent")
        }, e.draw = function(t) {
          this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this
            .restoreContext(t))
        }, e.setContext = function(t) {
          var e = this._attrs.attrs.clip;
          t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this
            .resetTransform(t)
        }, e.restoreContext = function(t) {
          t.restore()
        }, e.resetContext = function(t) {
          var e = this._attrs.attrs;
          if (!this._attrs.isGroup)
            for (var n in e)
              if (u.indexOf(n) > -1) {
                var i = e[n];
                "fillStyle" !== n && "strokeStyle" !== n || (i = s.parseStyle(i, this, t)), "lineDash" ===
                  n && t.setLineDash && r.isArray(i) ? t.setLineDash(i) : t[n] = i
              }
        }, e.hasFill = function() {
          return this.get("canFill") && this._attrs.attrs.fillStyle
        }, e.hasStroke = function() {
          return this.get("canStroke") && this._attrs.attrs.strokeStyle
        }, e.drawInner = function() {}, e.show = function() {
          return this.set("visible", !0), this
        }, e.hide = function() {
          return this.set("visible", !1), this
        }, e.isVisible = function() {
          return this.get("visible")
        }, e._removeFromParent = function() {
          var t = this.get("parent");
          if (t) {
            var e = t.get("children");
            r.Array.remove(e, this)
          }
          return this
        }, e.remove = function(t) {
          t ? this.destroy() : this._removeFromParent()
        }, e.destroy = function() {
          if (this.get("destroyed")) return null;
          this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0)
        }, e.getBBox = function() {
          return {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0,
            width: 0,
            height: 0
          }
        }, e.initTransform = function() {
          var t = this._attrs.attrs || {};
          t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = t
        }, e.getMatrix = function() {
          return this._attrs.attrs.matrix
        }, e.setMatrix = function(t) {
          this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]]
        }, e.transform = function(t) {
          var e = this._attrs.attrs.matrix;
          return this._attrs.attrs.matrix = a.transform(e, t), this
        }, e.setTransform = function(t) {
          return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(t)
        }, e.translate = function(t, e) {
          var n = this._attrs.attrs.matrix;
          a.translate(n, n, [t, e])
        }, e.rotate = function(t) {
          var e = this._attrs.attrs.matrix;
          a.rotate(e, e, t)
        }, e.scale = function(t, e) {
          var n = this._attrs.attrs.matrix;
          a.scale(n, n, [t, e])
        }, e.moveTo = function(t, e) {
          var n = this._attrs.x || 0,
            i = this._attrs.y || 0;
          this.translate(t - n, e - i), this.set("x", t), this.set("y", e)
        }, e.apply = function(t) {
          var e = this._attrs.attrs.matrix;
          return o.transformMat2d(t, t, e), this
        }, e.resetTransform = function(t) {
          var e = this._attrs.attrs.matrix;
          i(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        }, e.isDestroyed = function() {
          return this.get("destroyed")
        }, t
      }();
    t.exports = h
  }, function(t, e, n) {
    var i = n(7).Shape;
    t.exports = {
      getClip: function(t) {
        var e, n = t.start,
          r = t.end,
          a = r.x - n.x,
          o = Math.abs(r.y - n.y);
        if (t.isPolar) {
          var s = t.circleRadius,
            c = t.center,
            u = t.startAngle,
            l = t.endAngle;
          e = new i.Sector({
            attrs: {
              x: c.x,
              y: c.y,
              r: s,
              r0: 0,
              startAngle: u,
              endAngle: l
            }
          })
        } else e = new i.Rect({
          attrs: {
            x: n.x,
            y: r.y - 10,
            width: a,
            height: o + 20
          }
        });
        return e.isClip = !0, e
      },
      isPointInPlot: function(t, e) {
        var n = t.x,
          i = t.y,
          r = e.tl,
          a = e.tr,
          o = e.br;
        return n >= r.x && n <= a.x && i >= r.y && i <= o.y
      }
    }
  }, function(t, e, n) {
    var i = n(13);
    t.exports = function(t) {
      return i(t, "String")
    }
  }, function(t, e, n) {
    var i = n(29);
    t.exports = function(t) {
      return i(t) ? "" : t.toString()
    }
  }, function(t, e) {
    t.exports = function(t) {
      return null === t || void 0 === t
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    t.exports = function(t) {
      var e = void 0 === t ? "undefined" : n(t);
      return null !== t && "object" === e || "function" === e
    }
  }, function(t, e, n) {
    var i = n(56),
      r = n(5);
    t.exports = function(t) {
      if (!i(t) || !r(t, "Object")) return !1;
      if (null === Object.getPrototypeOf(t)) return !0;
      for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e
    }
  }, function(t, e, n) {
    var i = n(0),
      r = function() {
        function t(t) {
          var e = {},
            n = this.getDefaultCfg();
          this._attrs = e, i.mix(e, n, t)
        }
        var e = t.prototype;
        return e.getDefaultCfg = function() {
          return {}
        }, e.get = function(t) {
          return this._attrs[t]
        }, e.set = function(t, e) {
          this._attrs[t] = e
        }, e.destroy = function() {
          this._attrs = {}, this.destroyed = !0
        }, t
      }();
    t.exports = r
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t, e) {
      return n.call(t) === "[object " + e + "]"
    }
  }, function(t, e, n) {
    var i = n(66),
      r = n(19);
    t.exports = function(t, e) {
      if (t)
        if (r(t))
          for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++);
        else if (i(t))
        for (var o in t)
          if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
    }
  }, function(t, e, n) {
    function i(t) {
      return function(e, n) {
        var i = t(e, n);
        return 0 === i ? e[s] - n[s] : i
      }
    }
    var r = n(0),
      a = n(2),
      o = {},
      s = "_INDEX";
    t.exports = {
      getGroupClass: function() {},
      getChildren: function() {
        return this.get("children")
      },
      addShape: function(t, e) {
        void 0 === e && (e = {});
        var n = this.get("canvas"),
          i = o[t];
        i || (i = r.upperFirst(t), o[t] = i), e.canvas = n, "Text" === i && n && n.get("fontFamily") && (e
          .attrs.fontFamily = e.attrs.fontFamily || n.get("fontFamily"));
        var s = new a[i](e);
        return this.add(s), s
      },
      addGroup: function(t) {
        var e = this.get("canvas"),
          n = this.getGroupClass();
        (t = r.mix({}, t)).canvas = e, t.parent = this;
        var i = new n(t);
        return this.add(i), i
      },
      contain: function(t) {
        return this.get("children").indexOf(t) > -1
      },
      sort: function() {
        for (var t = this.get("children"), e = 0, n = t.length; e < n; e++) t[e][s] = e;
        return t.sort(i(function(t, e) {
          return t.get("zIndex") - e.get("zIndex")
        })), this
      },
      clear: function() {
        for (var t = this.get("children"); 0 !== t.length;) t[t.length - 1].remove(!0);
        return this
      },
      add: function(t) {
        var e = this,
          n = e.get("children");
        r.isArray(t) || (t = [t]);
        for (var i = 0, a = t.length; i < a; i++) {
          var o = t[i],
            s = o.get("parent");
          if (s) {
            var c = s.get("children");
            r.Array.remove(c, o)
          }
          e._setEvn(o), n.push(o)
        }
        return e
      },
      _setEvn: function(t) {
        var e = this;
        t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
        var n = t._attrs.attrs.clip;
        if (n && (n.set("parent", e), n.set("context", e.get("context"))), t._attrs.isGroup)
          for (var i = t._attrs.children, r = 0, a = i.length; r < a; r++) t._setEvn(i[r])
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(25),
      o = n(35),
      s = n(3),
      c = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          this._attrs = {
            zIndex: 0,
            visible: !0,
            destroyed: !1,
            isGroup: !0,
            children: []
          }
        }, n.drawInner = function(t) {
          for (var e = this.get("children"), n = 0, i = e.length; n < i; n++) e[n].draw(t);
          return this
        }, n.getBBox = function() {
          for (var t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0, r = this.get("children"), a = 0, o = r
            .length; a < o; a++) {
            var c = r[a];
            if (c.get("visible")) {
              var u = c.getBBox();
              if (!u) continue;
              var l = [u.minX, u.minY],
                h = [u.minX, u.maxY],
                f = [u.maxX, u.minY],
                p = [u.maxX, u.maxY],
                g = c.attr("matrix");
              s.transformMat2d(l, l, g), s.transformMat2d(h, h, g), s.transformMat2d(f, f, g), s
                .transformMat2d(p, p, g), t = Math.min(l[0], h[0], f[0], p[0], t), e = Math.max(l[0], h[0], f[
                  0], p[0], e), n = Math.min(l[1], h[1], f[1], p[1], n), i = Math.max(l[1], h[1], f[1], p[1],
                  i)
            }
          }
          return {
            minX: t,
            minY: n,
            maxX: e,
            maxY: i,
            x: t,
            y: n,
            width: e - t,
            height: i - n
          }
        }, n.destroy = function() {
          this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this))
        }, e
      }(a);
    r.mix(c.prototype, o, {
      getGroupClass: function() {
        return c
      }
    }), t.exports = c
  }, function(t, e, n) {
    function i(t) {
      var e = {
        strokeStyle: t.color
      };
      return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, c.shape.line, e)
    }

    function r(t, e, n, i) {
      var r = t.points;
      if (r.length && a.isArray(r[0].y)) {
        for (var o = [], c = [], u = 0, l = r.length; u < l; u++) {
          var h = r[u],
            f = s.splitPoints(h);
          c.push(f[0]), o.push(f[1])
        }
        return t.isInCircle && (o.push(o[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", {
          className: "line",
          attrs: a.mix({
            points: o,
            smooth: i
          }, n)
        }) : [e.addShape("Polyline", {
          className: "line",
          attrs: a.mix({
            points: o,
            smooth: i
          }, n)
        }), e.addShape("Polyline", {
          className: "line",
          attrs: a.mix({
            points: c,
            smooth: i
          }, n)
        })]
      }
      return t.isInCircle && r.push(r[0]), e.addShape("Polyline", {
        className: "line",
        attrs: a.mix({
          points: r,
          smooth: i
        }, n)
      })
    }
    var a = n(0),
      o = n(6),
      s = n(16),
      c = n(1),
      u = o.registerFactory("line", {
        defaultShapeType: "line"
      }),
      l = ["line", "smooth", "dash"];
    a.each(l, function(t) {
      o.registerShape("line", t, {
        draw: function(e, n) {
          var a = "smooth" === t,
            o = i(e);
          return "dash" === t && (o.lineDash = c.lineDash), r(e, n, o, a)
        }
      })
    }), t.exports = u
  }, function(t, e, n) {
    var i = n(103),
      r = Array.isArray ? Array.isArray : function(t) {
        return i(t, "Array")
      };
    t.exports = r
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(10),
      s = n(40),
      c = n(11),
      u = n(14),
      l = n(27),
      h = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, this.isRounding = !
            0
        }, e.prototype.init = function() {
          var t = this,
            e = t.values,
            n = t.tickCount;
          if (c(e, function(t, n) {
              e[n] = t.toString()
            }), !t.ticks) {
            var i = e;
            n && (i = s({
              maxCount: n,
              data: e,
              isRounding: t.isRounding
            }).ticks), this.ticks = i
          }
        }, e.prototype.getText = function(e) {
          return -1 === this.values.indexOf(e) && u(e) && (e = this.values[Math.round(e)]), t.prototype
            .getText.call(this, e)
        }, e.prototype.translate = function(t) {
          var e = this.values.indexOf(t);
          return -1 === e && u(t) ? e = t : -1 === e && (e = NaN), e
        }, e.prototype.scale = function(t) {
          var e = this.rangeMin(),
            n = this.rangeMax(),
            i = void 0;
          return (l(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), i = this.values.length >
            1 ? t / (this.values.length - 1) : t, e + i * (n - e)
        }, e.prototype.invert = function(t) {
          if (l(t)) return t;
          var e = this.rangeMin(),
            n = this.rangeMax();
          t < e && (t = e), t > n && (t = n);
          var i = (t - e) / (n - e),
            r = Math.round(i * (this.values.length - 1)) % this.values.length;
          return r = r || 0, this.values[r]
        }, e
      }(o);
    o.Cat = h, t.exports = h
  }, function(t, e, n) {
    function i(t) {
      var e = [];
      return a(t, function(t) {
        e = e.concat(t)
      }), e
    }

    function r(t, e) {
      var n = void 0;
      for (n = e; n > 0 && t % n != 0; n--);
      if (1 === n)
        for (n = e; n > 0 && (t - 1) % n != 0; n--);
      return n
    }
    var a = n(11);
    t.exports = function(t) {
      var e = {},
        n = [],
        a = t.isRounding,
        o = i(t.data),
        s = o.length,
        c = t.maxCount || 8,
        u = void 0;
      if (a ? 2 === (u = r(s - 1, c - 1) + 1) ? u = c : u < c - 4 && (u = c - 4) : u = c, !a && s <= u + u /
        2) n = [].concat(o);
      else {
        for (var l = parseInt(s / (u - 1), 10), h = o.map(function(t, e) {
            return e % l == 0 ? o.slice(e, e + l) : null
          }).filter(function(t) {
            return t
          }), f = 1, p = h.length; f < p && (a ? f * l < s - l : f < u - 1); f++) n.push(h[f][0]);
        if (o.length) {
          n.unshift(o[0]);
          var g = o[s - 1]; - 1 === n.indexOf(g) && n.push(g)
        }
      }
      return e.categories = o, e.ticks = n, e
    }
  }, function(t, e) {
    t.exports = {
      requestAnimationFrame: "object" == typeof window && window.requestAnimationFrame ? window
        .requestAnimationFrame : function(t) {
          return setTimeout(t, 16)
        }
    }
  }, function(t, e, n) {
    function i(t) {
      return [t.x, t.y]
    }

    function r(t, e, n, r) {
      var o, s, c, u, l, h, f, p, g = [],
        d = !!r;
      if (d) {
        for (c = [1 / 0, 1 / 0], u = [-1 / 0, -1 / 0], p = 0, f = t.length; p < f; p++) l = i(t[p]), a.min(c, c,
          l), a.max(u, u, l);
        a.min(c, c, r[0]), a.max(u, u, r[1])
      }
      for (p = 0, h = t.length; p < h; p++) {
        if (l = i(t[p]), n) o = i(t[p ? p - 1 : h - 1]), s = i(t[(p + 1) % h]);
        else {
          if (0 === p || p === h - 1) {
            g.push([l[0], l[1]]);
            continue
          }
          o = i(t[p - 1]), s = i(t[p + 1])
        }
        var v = a.sub([], s, o);
        a.scale(v, v, e);
        var y = a.distance(l, o),
          m = a.distance(l, s),
          x = y + m;
        0 !== x && (y /= x, m /= x);
        var _ = a.scale([], v, -y),
          S = a.scale([], v, m),
          b = a.add([], l, _),
          w = a.add([], l, S);
        d && (a.max(b, b, c), a.min(b, b, u), a.max(w, w, c), a.min(w, w, u)), g.push([b[0], b[1]]), g.push([w[
          0], w[1]])
      }
      return n && g.push(g.shift()), g
    }
    var a = n(3);
    t.exports = {
      smooth: function(t, e, n) {
        for (var i, a, o, s = !!e, c = r(t, .4, s, n), u = t.length, l = [], h = 0; h < u - 1; h++) i = c[
          2 * h], a = c[2 * h + 1], o = t[h + 1], l.push(["C", i[0], i[1], a[0], a[1], o.x, o.y]);
        return s && (i = c[u], a = c[u + 1], o = t[0], l.push(["C", i[0], i[1], a[0], a[1], o.x, o.y])), l
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(4),
      a = n(16),
      o = n(0);
    n(37);
    var s = function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "path", e.shapeType = "line", e
      }, n.getDrawCfg = function(e) {
        var n = t.prototype.getDrawCfg.call(this, e);
        return n.isStack = this.hasAdjust("stack"), n
      }, n.draw = function(t, e) {
        var n = this,
          i = n.get("container"),
          r = n.getYScale(),
          s = n.get("connectNulls"),
          c = a.splitArray(t, r.field, s),
          u = this.getDrawCfg(t[0]);
        u.origin = t, o.each(c, function(r, a) {
          u.splitedIndex = a, u.points = r, n.drawShape(u.shape, t[0], u, i, e)
        })
      }, e
    }(r);
    r.Path = s, t.exports = s
  }, function(t, e, n) {
    var i = n(1),
      r = n(0),
      a = {
        getDefalutSize: function() {
          var t = this.get("defaultSize");
          if (!t) {
            var e = this.get("coord"),
              n = this.getXScale(),
              r = this.get("dataArray"),
              a = n.values.length,
              o = n.range,
              s = 1 / a,
              c = 1;
            e && e.isPolar ? c = e.transposed && a > 1 ? i.widthRatio.multiplePie : i.widthRatio.rose : (n
                .isLinear && (s *= o[1] - o[0]), c = i.widthRatio.column), s *= c, this.hasAdjust("dodge") &&
              (s /= r.length), t = s, this.set("defaultSize", t)
          }
          return t
        },
        getDimWidth: function(t) {
          var e = this.get("coord"),
            n = e.convertPoint({
              x: 0,
              y: 0
            }),
            i = e.convertPoint({
              x: "x" === t ? 1 : 0,
              y: "x" === t ? 0 : 1
            }),
            r = 0;
          return n && i && (r = Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2))), r
        },
        _getWidth: function() {
          var t = this.get("_width");
          if (!t) {
            var e = this.get("coord");
            t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this
              .getDimWidth("x"), this.set("_width", t)
          }
          return t
        },
        _toNormalizedSize: function(t) {
          return t / this._getWidth()
        },
        _toCoordSize: function(t) {
          return this._getWidth() * t
        },
        getNormalizedSize: function(t) {
          var e = this.getAttrValue("size", t);
          return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e)
        },
        getSize: function(t) {
          var e = this.getAttrValue("size", t);
          if (r.isNil(e)) {
            var n = this.getDefalutSize();
            e = this._toCoordSize(n)
          }
          return e
        }
      };
    t.exports = a
  }, function(t, e, n) {
    var i, r = n(0),
      a = n(15);
    r.isWx || r.isMy || (i = n(155));
    var o = ["touchstart", "touchmove", "touchend"],
      s = function() {
        function t(t, e) {
          var n = this.getDefaultCfg();
          r.deepMix(this, n, t), this.chart = e, this.canvas = e.get("canvas"), this.el = e.get("canvas").get(
            "el"), this._bindEvents()
        }
        var e = t.prototype;
        return e.getDefaultCfg = function() {
            return {
              startEvent: o[0],
              processEvent: o[1],
              endEvent: o[2],
              resetEvent: null
            }
          }, e._start = function(t) {
            this.preStart && this.preStart(t), this.start(t), this.onStart && this.onStart(t)
          }, e._process = function(t) {
            this.preProcess && this.preProcess(t), this.process(t), this.onProcess && this.onProcess(t)
          }, e._end = function(t) {
            this.preEnd && this.preEnd(t), this.end(t), this.onEnd && this.onEnd(t)
          }, e._reset = function(t) {
            this.preReset && this.preReset(t), this.reset(t), this.onReset && this.onReset(t)
          }, e.start = function() {}, e.process = function() {}, e.end = function() {}, e.reset = function() {},
          e._bindEvents = function() {
            this._clearEvents();
            var t = this.startEvent,
              e = this.processEvent,
              n = this.endEvent,
              r = this.resetEvent,
              a = this.el;
            i && (this.hammer = new i(a)), this._bindEvent(t, "_start"), this._bindEvent(e, "_process"), this
              ._bindEvent(n, "_end"), this._bindEvent(r, "_reset")
          }, e._clearEvents = function() {
            var t = this.startEvent,
              e = this.processEvent,
              n = this.endEvent,
              i = this.resetEvent;
            this.hammer && (this.hammer.destroy(), this.hammer = null), this._clearTouchEvent(t, "_start"), this
              ._clearTouchEvent(e, "_process"), this._clearTouchEvent(n, "_end"), this._clearTouchEvent(i,
                "_reset")
          }, e._bindEvent = function(t, e) {
            var n = this.el;
            t && (-1 !== o.indexOf(t) ? r.addEventListener(n, t, r.wrapBehavior(this, e)) : this.hammer && this
              .hammer.on(t, r.wrapBehavior(this, e)))
          }, e._clearTouchEvent = function(t, e) {
            var n = this.el;
            t && -1 !== o.indexOf(t) && r.removeEventListener(n, t, r.getWrapBehavior(this, e))
          }, e.destroy = function() {
            this._clearEvents()
          }, t
      }();
    a._Interactions = {}, a.registerInteraction = function(t, e) {
      a._Interactions[t] = e
    }, a.getInteraction = function(t) {
      return a._Interactions[t]
    }, a.prototype.interaction = function(t, e) {
      var n = this._interactions || {};
      n[t] && n[t].destroy();
      var i = new(a.getInteraction(t))(e, this);
      return n[t] = i, this._interactions = n, this
    }, a.prototype.clearInteraction = function(t) {
      var e = this._interactions;
      if (e) return t ? (e[t] && e[t].destroy(), delete e[t]) : r.each(e, function(t, n) {
        t.destroy(), delete e[n]
      }), this
    }, t.exports = s
  }, function(t, e, n) {
    var i = {},
      r = n(1);
    i.Global = r, i.version = r.version, i.Chart = n(15), i.Shape = n(6), i.G = n(7), i.Util = n(0), i.track =
      function(t) {
        r.trackable = t
      }, n(96), t.exports = i
  }, function(t, e, n) {
    var i = n(0),
      r = {
        label: {
          fill: "#808080",
          fontSize: 10
        },
        line: {
          stroke: "#E8E8E8",
          lineWidth: 1
        },
        grid: {
          type: "line",
          stroke: "#E8E8E8",
          lineWidth: 1,
          lineDash: [2]
        },
        tickLine: null,
        labelOffset: 7.5
      },
      a = {
        fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
        defaultColor: "#1890FF",
        pixelRatio: 1,
        padding: "auto",
        appendPadding: 15,
        colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
        shapes: {
          line: ["line", "dash"],
          point: ["circle", "hollowCircle"]
        },
        sizes: [4, 10],
        axis: {
          bottom: i.mix({}, r, {
            grid: null
          }),
          left: i.mix({}, r, {
            line: null
          }),
          right: i.mix({}, r, {
            line: null
          }),
          circle: i.mix({}, r, {
            line: null
          }),
          radius: i.mix({}, r, {
            labelOffset: 4
          })
        },
        shape: {
          line: {
            lineWidth: 2,
            lineJoin: "round",
            lineCap: "round"
          },
          point: {
            lineWidth: 0,
            size: 3
          },
          area: {
            fillOpacity: .1
          }
        },
        _defaultAxis: r
      };
    t.exports = a
  }, function(t, e) {
    function n(t, e, n, i, r) {
      return {
        type: t,
        chart: e,
        native: r || null,
        x: void 0 !== n ? n : null,
        y: void 0 !== i ? i : null
      }
    }

    function i(t, e) {
      var i = t.type,
        a = {},
        o = t.targetTouches;
      o && o.length > 0 ? (a.x = o[0].clientX, a.y = o[0].clientY) : (a.x = t.clientX, a.y = t.clientY);
      var s = e.get("canvas"),
        c = r.getRelativePosition(a, s);
      return n(i, e, c.x, c.y, t)
    }
    var r, a = !! function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0
          }
        });
        window.addEventListener("e", null, e)
      } catch (t) {}
      return t
    }() && {
      passive: !0
    };
    r = {
      isWx: "object" == typeof wx && "function" == typeof wx.getSystemInfoSync,
      isMy: "object" == typeof my && "function" == typeof my.getSystemInfoSync,
      isNode: void 0 !== t && void 0 !== t.exports,
      isBrowser: "undefined" != typeof window && void 0 !== window.document,
      getPixelRatio: function() {
        return window && window.devicePixelRatio || 1
      },
      getStyle: function(t, e) {
        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null)
          .getPropertyValue(e)
      },
      getWidth: function(t) {
        var e = this.getStyle(t, "width");
        return "auto" === e && (e = t.offsetWidth), parseFloat(e)
      },
      getHeight: function(t) {
        var e = this.getStyle(t, "height");
        return "auto" === e && (e = t.offsetHeight), parseFloat(e)
      },
      getDomById: function(t) {
        return t ? document.getElementById(t) : null
      },
      getRelativePosition: function(t, e) {
        var n = e.get("el"),
          i = n.getBoundingClientRect(),
          r = i.top,
          a = i.right,
          o = i.bottom,
          s = i.left,
          c = parseFloat(this.getStyle(n, "padding-left")),
          u = parseFloat(this.getStyle(n, "padding-top")),
          l = a - s - c - parseFloat(this.getStyle(n, "padding-right")),
          h = o - r - u - parseFloat(this.getStyle(n, "padding-bottom")),
          f = e.get("pixelRatio");
        return {
          x: (t.x - s - c) / l * n.width / f,
          y: (t.y - r - u) / h * n.height / f
        }
      },
      addEventListener: function(t, e, n) {
        r.isBrowser && t.addEventListener(e, n, a)
      },
      removeEventListener: function(t, e, n) {
        r.isBrowser && t.removeEventListener(e, n, a)
      },
      createEvent: function(t, e) {
        return i(t, e)
      },
      measureText: function(t, e, n) {
        return n || (n = document.createElement("canvas").getContext("2d")), n.font = e ||
          "12px sans-serif", n.measureText(t)
      }
    }, t.exports = r
  }, function(t, e, n) {
    var i = n(28);
    t.exports = function(t) {
      var e = i(t);
      return e.charAt(0).toUpperCase() + e.substring(1)
    }
  }, function(t, e, n) {
    var i = n(28);
    t.exports = function(t) {
      var e = i(t);
      return e.charAt(0).toLowerCase() + e.substring(1)
    }
  }, function(t, e, n) {
    var i = n(5);
    t.exports = function(t) {
      return i(t, "String")
    }
  }, function(t, e, n) {
    var i = n(5);
    t.exports = function(t) {
      return i(t, "Number")
    }
  }, function(t, e, n) {
    var i = n(5);
    t.exports = function(t) {
      return i(t, "Boolean")
    }
  }, function(t, e, n) {
    var i = n(5);
    t.exports = function(t) {
      return i(t, "Function")
    }
  }, function(t, e, n) {
    var i = n(5);
    t.exports = function(t) {
      return i(t, "Date")
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    t.exports = function(t) {
      return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t
    }
  }, function(t, e, n) {
    function i(t, e, n, s) {
      n = n || 0, s = s || o;
      for (var c in e)
        if (e.hasOwnProperty(c)) {
          var u = e[c];
          null !== u && r(u) ? (r(t[c]) || (t[c] = {}), n < s ? i(t[c], u, n + 1, s) : t[c] = e[c]) : a(u) ? (t[
            c] = [], t[c] = t[c].concat(u)) : void 0 !== u && (t[c] = u)
        }
    }
    var r = n(31),
      a = n(17),
      o = 5;
    t.exports = function() {
      for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
      for (var r = t[0], a = 1; a < e; a++) i(r, t[a]);
      return r
    }
  }, function(t, e) {
    function n(t, e) {
      for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
    }
    t.exports = function(t, e, i, r) {
      return e && n(t, e), i && n(t, i), r && n(t, r), t
    }
  }, function(t, e, n) {
    var i = n(30),
      r = n(17);
    t.exports = function(t, e) {
      if (t)
        if (r(t))
          for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++);
        else if (i(t))
        for (var o in t)
          if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
    }
  }, function(t, e, n) {
    var i = n(0),
      r = function() {
        function t(t) {
          i.mix(this, t), this._init()
        }
        var e = t.prototype;
        return e._init = function() {
          var t = this,
            e = t.start,
            n = t.end,
            i = Math.min(e.x, n.x),
            r = Math.max(e.x, n.x),
            a = Math.min(e.y, n.y),
            o = Math.max(e.y, n.y);
          this.tl = {
            x: i,
            y: a
          }, this.tr = {
            x: r,
            y: a
          }, this.bl = {
            x: i,
            y: o
          }, this.br = {
            x: r,
            y: o
          }, this.width = r - i, this.height = o - a
        }, e.reset = function(t, e) {
          this.start = t, this.end = e, this._init()
        }, e.isInRange = function(t, e) {
          i.isObject(t) && (e = t.y, t = t.x);
          var n = this.tl,
            r = this.br;
          return n.x <= t && t <= r.x && n.y <= e && e <= r.y
        }, t
      }();
    t.exports = r
  }, function(t, e, n) {
    var i = n(18);
    n(62), t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(18),
      a = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "cartesian", this.transposed = !1, this.isRect = !0
        }, n.init = function(t, e) {
          this.x = {
            start: t.x,
            end: e.x
          }, this.y = {
            start: t.y,
            end: e.y
          }
        }, n.convertPoint = function(t) {
          var e = this,
            n = e.transposed,
            i = n ? "y" : "x",
            r = n ? "x" : "y",
            a = e.x,
            o = e.y;
          return {
            x: a.start + (a.end - a.start) * t[i],
            y: o.start + (o.end - o.start) * t[r]
          }
        }, n.invertPoint = function(t) {
          var e = this,
            n = e.transposed,
            i = n ? "y" : "x",
            r = n ? "x" : "y",
            a = e.x,
            o = e.y,
            s = {};
          return s[i] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), s
        }, e
      }(r);
    r.Cartesian = a, r.Rect = a, t.exports = a
  }, function(t, e, n) {
    t.exports = {
      Position: n(64),
      Shape: n(69),
      Size: n(70),
      Color: n(71)
    }
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(65),
      s = n(19),
      c = n(34),
      u = function(t) {
        function e(n) {
          i(this, e);
          var a = r(this, t.call(this, n));
          return a.names = ["x", "y"], a.type = "position", a
        }
        return a(e, t), e.prototype.mapping = function(t, e) {
          var n = this.scales,
            i = this.coord,
            r = n[0],
            a = n[1],
            u = void 0,
            l = void 0,
            h = void 0;
          if (o(t) || o(e)) return [];
          if (s(e) && s(t)) {
            u = [], l = [];
            for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++, p++) h = i.convertPoint({
              x: r.scale(t[f]),
              y: a.scale(e[p])
            }), u.push(h.x), l.push(h.y)
          } else if (s(e)) t = r.scale(t), l = [], c(e, function(e) {
            e = a.scale(e), h = i.convertPoint({
              x: t,
              y: e
            }), u && u !== h.x ? (s(u) || (u = [u]), u.push(h.x)) : u = h.x, l.push(h.y)
          });
          else if (s(t)) e = a.scale(e), u = [], c(t, function(t) {
            t = r.scale(t), h = i.convertPoint({
              x: t,
              y: e
            }), l && l !== h.y ? (s(l) || (l = [l]), l.push(h.y)) : l = h.y, u.push(h.x)
          });
          else {
            t = r.scale(t), e = a.scale(e);
            var v = i.convertPoint({
              x: t,
              y: e
            });
            u = v.x, l = v.y
          }
          return [u, l]
        }, e
      }(n(12));
    t.exports = u
  }, function(t, e) {
    t.exports = function(t) {
      return null === t || void 0 === t
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    t.exports = function(t) {
      var e = void 0 === t ? "undefined" : n(t);
      return null !== t && "object" === e || "function" === e
    }
  }, function(t, e, n) {
    var i = n(33);
    t.exports = function(t) {
      return i(t, "String")
    }
  }, function(t, e) {
    function n(t, e) {
      for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
    }
    t.exports = function(t, e, i, r) {
      return e && n(t, e), i && n(t, i), r && n(t, r), t
    }
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function(t) {
      function e(n) {
        i(this, e);
        var a = r(this, t.call(this, n));
        return a.names = ["shape"], a.type = "shape", a.gradient = null, a
      }
      return a(e, t), e.prototype.getLinearValue = function(t) {
        var e = this.values;
        return e[Math.round((e.length - 1) * t)]
      }, e
    }(n(12));
    t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function(t) {
      function e(n) {
        i(this, e);
        var a = r(this, t.call(this, n));
        return a.names = ["size"], a.type = "size", a.gradient = null, a
      }
      return a(e, t), e
    }(n(12));
    t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(72),
      o = function(t) {
        function e(e) {
          var n;
          return n = t.call(this, e) || this, n.names = ["color"], n.type = "color", n.gradient = null, r
            .isString(n.values) && (n.linear = !0), n
        }
        return i(e, t), e.prototype.getLinearValue = function(t) {
          var e = this.gradient;
          if (!e) {
            var n = this.values;
            e = a.gradient(n), this.gradient = e
          }
          return e(t)
        }, e
      }(n(12));
    t.exports = o
  }, function(t, e, n) {
    function i(t, e, n, i) {
      return t[i] + (e[i] - t[i]) * n
    }

    function r(t) {
      return "#" + a(t[0]) + a(t[1]) + a(t[2])
    }

    function a(t) {
      return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t
    }

    function o(t, e) {
      var n = t.length - 1,
        a = Math.floor(n * e),
        o = n * e - a,
        s = t[a],
        c = a === n ? s : t[a + 1];
      return r([i(s, c, o, 0), i(s, c, o, 1), i(s, c, o, 2)])
    }

    function s(t) {
      var e = [];
      return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t
        .substr(5, 2), 16)), e
    }
    var c = n(0),
      u = {
        black: "#000000",
        blue: "#0000ff",
        grey: "#808080",
        green: "#008000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        red: "#ff0000",
        white: "#ffffff",
        yellow: "#ffff00"
      },
      l = {
        toHex: function(t) {
          if (u[t]) return u[t];
          if ("#" === t[0]) {
            if (7 === t.length) return t;
            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
              return "#" + e + e + n + n + i + i
            });
            return u[t] = e, e
          }
          var n = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
          return n.shift(), n = r(n), u[t] = n, n
        },
        hex2arr: s,
        gradient: function(t) {
          var e = [];
          return c.isString(t) && (t = t.split("-")), c.each(t, function(t) {
              -1 === t.indexOf("#") && (t = l.toHex(t)), e.push(s(t))
            }),
            function(t) {
              return o(e, t)
            }
        }
      };
    t.exports = l
  }, function(t, e) {
    function n(t, e) {
      for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
    }
    t.exports = function(t, e, i, r) {
      return e && n(t, e), i && n(t, i), r && n(t, r), t
    }
  }, function(t, e, n) {
    var i = n(0),
      r = n(1),
      a = n(75),
      o = {
        linear: "Linear",
        cat: "Cat",
        timeCat: "TimeCat",
        identity: "Identity"
      },
      s = function() {
        function t(t) {
          this.defs = {}, i.mix(this, t)
        }
        var e = t.prototype;
        return e._getDef = function(t) {
          var e = this.defs,
            n = null;
          return (r.scales[t] || e[t]) && (n = i.mix({}, r.scales[t]), i.each(e[t], function(t, e) {
            i.isNil(t) ? delete n[e] : n[e] = t
          })), n
        }, e._getDefaultType = function(t, e, n) {
          if (n && n.type) return n.type;
          var r = "linear",
            a = i.Array.firstValue(e, t);
          return i.isArray(a) && (a = a[0]), i.isString(a) && (r = "cat"), r
        }, e._getScaleCfg = function(t, e, n, r) {
          var a, o = {
            field: e,
            values: a = r && r.values ? r.values : i.Array.values(n, e)
          };
          if (!("cat" === t || "timeCat" === t || r && r.min && r.max)) {
            var s = i.Array.getRange(a),
              c = s.min,
              u = s.max;
            o.min = c, o.max = u, o.nice = !0
          }
          return "cat" !== t && "timeCat" !== t || (o.isRounding = !1), o
        }, e.createScale = function(t, e) {
          var n, r = this,
            s = r._getDef(t);
          if (!e || !e.length) return n = s && s.type ? new a[o[s.type]](s) : new a.Identity({
            value: t,
            field: t.toString(),
            values: [t]
          });
          var c = e[0][t];
          if (null === c && (c = i.Array.firstValue(e, t)), i.isNumber(t) || i.isNil(c) && !s) n = new a
            .Identity({
              value: t,
              field: t.toString(),
              values: [t]
            });
          else {
            var u = r._getDefaultType(t, e, s),
              l = r._getScaleCfg(u, t, e, s);
            s && i.mix(l, s), n = new a[o[u]](l)
          }
          return n
        }, t
      }();
    t.exports = s
  }, function(t, e, n) {
    var i = n(10);
    n(78), n(81), n(39), t.exports = i
  }, function(t, e) {
    function n(t, e) {
      for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
    }
    t.exports = function(t, e, i, r) {
      return e && n(t, e), i && n(t, i), r && n(t, r), t
    }
  }, function(t, e, n) {
    var i = n(13),
      r = Array.isArray ? Array.isArray : function(t) {
        return i(t, "Array")
      };
    t.exports = r
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(21),
      s = n(11),
      c = n(10),
      u = n(79),
      l = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this);
          var e = this;
          e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, e.max = null, e
            .maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, e
            .snapArray = null
        }, e.prototype.init = function() {
          var t = this;
          if (t.ticks) {
            var e = t.ticks,
              n = t.translate(e[0]),
              i = t.translate(e[e.length - 1]);
            (o(t.min) || t.min > n) && (t.min = n), (o(t.max) || t.max < i) && (t.max = i)
          } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks()
        }, e.prototype.calculateTicks = function() {
          var t = this.min,
            e = this.max,
            n = this.minLimit,
            i = this.maxLimit,
            r = this.tickCount,
            a = this.tickInterval,
            o = this.minTickInterval,
            s = this.snapArray;
          if (1 === r) throw new Error("linear scale'tickCount should not be 1");
          if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
          return u({
            min: t,
            max: e,
            minLimit: n,
            maxLimit: i,
            minCount: r,
            maxCount: r,
            interval: a,
            minTickInterval: o,
            snapArray: s
          }).ticks
        }, e.prototype.initTicks = function() {
          var t = this,
            e = t.calculateTicks();
          if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
          else {
            var n = [];
            s(e, function(e) {
              e >= t.min && e <= t.max && n.push(e)
            }), n.length || (n.push(t.min), n.push(t.max)), t.ticks = n
          }
        }, e.prototype.scale = function(t) {
          if (o(t)) return NaN;
          var e = this.max,
            n = this.min;
          if (e === n) return 0;
          var i = (t - n) / (e - n),
            r = this.rangeMin();
          return r + i * (this.rangeMax() - r)
        }, e.prototype.invert = function(t) {
          var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
          return this.min + e * (this.max - this.min)
        }, e
      }(c);
    c.Linear = l, t.exports = l
  }, function(t, e, n) {
    var i = n(21),
      r = n(14),
      a = n(80),
      o = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
      s = [0, 1, 2, 4, 5, 10];
    t.exports = function(t) {
      var e = t.min,
        n = t.max,
        c = t.interval,
        u = t.minTickInterval,
        l = [],
        h = t.minCount || 5,
        f = t.maxCount || 7,
        p = h === f,
        g = i(t.minLimit) ? -1 / 0 : t.minLimit,
        d = i(t.maxLimit) ? 1 / 0 : t.maxLimit,
        v = (h + f) / 2,
        y = v,
        m = t.snapArray ? t.snapArray : p ? o : s;
      if (e === g && n === d && p && (c = (n - e) / (y - 1)), i(e) && (e = 0), i(n) && (n = 0), n === e && (
          0 === e ? n = 1 : e > 0 ? e = 0 : n = 0, n - e < 5 && !c && n - e >= 1 && (c = 1)), i(c)) {
        var x = (n - e) / (v - 1);
        c = a.snapFactorTo(x, m, "ceil"), f !== h && ((y = parseInt((n - e) / c, 10)) > f && (y = f), y < h &&
          (y = h), c = a.snapFactorTo((n - e) / (y - 1), m, "floor"))
      }
      if (r(u) && c < u && (c = u), t.interval || f !== h) n = Math.min(a.snapMultiple(n, c, "ceil"), d), e =
        Math.max(a.snapMultiple(e, c, "floor"), g), y = Math.round((n - e) / c), e = a.fixedBase(e, c), n = a
        .fixedBase(n, c);
      else {
        v = parseInt(v, 10);
        var _ = (n + e) / 2,
          S = a.snapMultiple(_, c, "ceil"),
          b = Math.floor((v - 2) / 2),
          w = S + b * c,
          P = void 0;
        P = v % 2 == 0 ? S - b * c : S - (b + 1) * c, w < n && (w += c), P > e && (P -= c), n = a.fixedBase(w,
          c), e = a.fixedBase(P, c)
      }
      n = Math.min(n, d), e = Math.max(e, g), l.push(e);
      for (var C = 1; C < y; C++) {
        var M = a.fixedBase(c * C + e, c);
        M < n && l.push(M)
      }
      return l[l.length - 1] < n && l.push(n), {
        min: e,
        max: n,
        interval: c,
        count: y,
        ticks: l
      }
    }
  }, function(t, e) {
    function n(t) {
      var e = 1;
      if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
      if (t < 1) {
        for (var n = 0; t < 1;) e /= 10, t *= 10, n++;
        e.toString().length > a && (e = parseFloat(e.toFixed(n)))
      } else
        for (; t > 10;) e *= 10, t /= 10;
      return e
    }

    function i(t, e) {
      var n = t.length;
      if (0 === n) return NaN;
      var i = t[0];
      if (e < t[0]) return NaN;
      if (e >= t[n - 1]) return t[n - 1];
      for (var r = 1; r < t.length && !(e < t[r]); r++) i = t[r];
      return i
    }

    function r(t, e) {
      var n = t.length;
      if (0 === n) return NaN;
      var i = void 0;
      if (e > t[n - 1]) return NaN;
      if (e < t[0]) return t[0];
      for (var r = 1; r < t.length; r++)
        if (e <= t[r]) {
          i = t[r];
          break
        } return i
    }
    var a = 12,
      o = {
        snapFactorTo: function(t, e, i) {
          if (isNaN(t)) return NaN;
          var r = 1;
          if (0 !== t) {
            t < 0 && (r = -1);
            var s = n(t *= r);
            r *= s, t /= s
          }
          var c = (t = "floor" === i ? o.snapFloor(e, t) : "ceil" === i ? o.snapCeiling(e, t) : o.snapTo(e,
            t)) * r;
          return Math.abs(r) < 1 && c.toString().length > a && (c = t / parseInt(1 / r) * (r > 0 ? 1 : -1)), c
        },
        snapMultiple: function(t, e, n) {
          return ("ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e)) * e
        },
        snapTo: function(t, e) {
          var n = i(t, e),
            a = r(t, e);
          if (isNaN(n) || isNaN(a)) {
            if (t[0] >= e) return t[0];
            var o = t[t.length - 1];
            if (o <= e) return o
          }
          return Math.abs(e - n) < Math.abs(a - e) ? n : a
        },
        snapFloor: function(t, e) {
          return i(t, e)
        },
        snapCeiling: function(t, e) {
          return r(t, e)
        },
        fixedBase: function(t, e) {
          var n = e.toString(),
            i = n.indexOf(".");
          if (-1 === i) return Math.round(t);
          var r = n.substr(i + 1).length;
          return r > 20 && (r = 20), parseFloat(t.toFixed(r))
        }
      };
    t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(10),
      s = n(14),
      c = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", this.value =
            null
        }, e.prototype.getText = function() {
          return this.value.toString()
        }, e.prototype.scale = function(t) {
          return this.value !== t && s(t) ? t : this.range[0]
        }, e.prototype.invert = function() {
          return this.value
        }, e
      }(o);
    o.Identity = c, t.exports = c
  }, function(t, e, n) {
    function i(t) {
      var e = t.slice(0);
      if (e.length > 0) {
        var n = e[0],
          i = e[e.length - 1];
        0 !== n.value && e.unshift({
          value: 0
        }), 1 !== i.value && e.push({
          value: 1
        })
      }
      return e
    }
    var r = n(0),
      a = n(83),
      o = n(1),
      s = n(7).Shape,
      c = function() {
        function t(t) {
          this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, r.mix(this, t)
        }
        var e = t.prototype;
        return e._isHide = function(t) {
          var e = this.axisCfg;
          return !e || !1 === e[t]
        }, e._getLinePosition = function(t, e, n, i) {
          var r = "",
            a = t.field,
            o = this.axisCfg;
          return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = i ? "left" : "bottom" : "y" ===
            e && (r = n ? "right" : "left", i && (r = "bottom")), r
        }, e._getLineCfg = function(t, e, n) {
          var i, r, a = 1;
          return "x" === e ? (i = {
            x: 0,
            y: 0
          }, r = {
            x: 1,
            y: 0
          }) : "right" === n ? (i = {
            x: 1,
            y: 0
          }, r = {
            x: 1,
            y: 1
          }) : (i = {
            x: 0,
            y: 0
          }, r = {
            x: 0,
            y: 1
          }, a = -1), t.transposed && (a *= -1), {
            offsetFactor: a,
            start: t.convertPoint(i),
            end: t.convertPoint(r)
          }
        }, e._getCircleCfg = function(t) {
          return {
            startAngle: t.startAngle,
            endAngle: t.endAngle,
            center: t.center,
            radius: t.circleRadius
          }
        }, e._getRadiusCfg = function(t) {
          var e, n;
          return t.transposed ? (e = {
            x: 0,
            y: 0
          }, n = {
            x: 1,
            y: 0
          }) : (e = {
            x: 0,
            y: 0
          }, n = {
            x: 0,
            y: 1
          }), {
            offsetFactor: -1,
            start: t.convertPoint(e),
            end: t.convertPoint(n)
          }
        }, e._getAxisCfg = function(t, e, n, i, a) {
          var c = this,
            u = this.axisCfg,
            l = e.getTicks(),
            h = r.deepMix({
              ticks: l,
              frontContainer: this.frontPlot,
              backContainer: this.backPlot
            }, a, u[e.field]),
            f = [],
            p = h.label,
            g = l.length,
            d = 0,
            v = 0,
            y = p;
          return r.each(l, function(t, e) {
            if (r.isFunction(p)) {
              var n = p(t.text, e, g);
              y = n ? r.mix({}, o._defaultAxis.label, n) : null
            }
            if (y) {
              var i = {};
              y.textAlign && (i.textAlign = y.textAlign), y.textBaseline && (i.textBaseline = y
                .textBaseline);
              var a = new s.Text({
                className: "axis-label",
                attrs: r.mix({
                  x: 0,
                  y: 0,
                  text: t.text,
                  fontFamily: c.chart.get("canvas").get("fontFamily")
                }, y),
                value: t.value,
                textStyle: i,
                top: y.top,
                context: c.chart.get("canvas").get("context")
              });
              f.push(a);
              var u = a.getBBox(),
                l = u.width,
                h = u.height;
              d = Math.max(d, l), v = Math.max(v, h)
            }
          }), h.labels = f, h.maxWidth = d, h.maxHeight = v, h
        }, e._createAxis = function(t, e, n, i, r) {
          void 0 === r && (r = "");
          var a, s, c, u = this,
            l = t.type,
            h = t.transposed;
          if ("cartesian" === l || "rect" === l) {
            var f = u._getLinePosition(e, i, r, h);
            (c = o.axis[f]).position = f, a = "Line", s = f
          } else "x" === i && !h || "y" === i && h ? (c = o.axis.circle, a = "Circle", s = "circle") : (c = o
            .axis.radius, a = "Line", s = "radius");
          var p = u._getAxisCfg(t, e, n, i, c);
          p.type = a, p.dimType = i, p.verticalScale = n, p.index = r, this.axes[s] = p
        }, e.createAxis = function(t, e, n) {
          var o = this;
          e && !o._isHide(e.field) && o._createAxis(t, e, n[0], "x"), r.each(n, function(n, i) {
            o._isHide(n.field) || o._createAxis(t, n, e, "y", i)
          });
          var s = this.axes,
            c = o.chart;
          if (c._isAutoPadding()) {
            var u = r.parsePadding(c.get("padding")),
              l = r.parsePadding(c.get("appendPadding")),
              h = c.get("legendRange") || {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              f = ["auto" === u[0] ? h.top + 2 * l[0] : u[0], "auto" === u[1] ? h.right + l[1] : u[1],
                "auto" === u[2] ? h.bottom + l[2] : u[2], "auto" === u[3] ? h.left + l[3] : u[3]
              ];
            if (t.isPolar) {
              var p = s.circle;
              if (p) {
                var g = p.maxHeight,
                  d = p.maxWidth,
                  v = p.labelOffset;
                f[0] += g + v, f[1] += d + v, f[2] += g + v, f[3] += d + v
              }
            } else {
              if (s.right && "auto" === u[1]) {
                var y = s.right,
                  m = y.maxWidth,
                  x = y.labelOffset;
                f[1] += m + x
              }
              if (s.left && "auto" === u[3]) {
                var _ = s.left,
                  S = _.maxWidth,
                  b = _.labelOffset;
                f[3] += S + b
              }
              if (s.bottom && "auto" === u[2]) {
                var w = s.bottom,
                  P = w.maxHeight,
                  C = w.labelOffset;
                f[2] += P + C
              }
            }
            c.set("_padding", f), c._updateLayout(f)
          }
          r.each(s, function(e) {
            var n, s = e.type,
              c = e.grid,
              u = e.verticalScale,
              l = e.ticks,
              h = e.dimType,
              f = e.position,
              p = e.index;
            if (t.isPolar ? "Line" === s ? n = o._getRadiusCfg(t) : "Circle" === s && (n = o
                ._getCircleCfg(t)) : n = o._getLineCfg(t, h, f), c && u) {
              var g = [],
                d = i(u.getTicks());
              r.each(l, function(e) {
                var n = [];
                r.each(d, function(i) {
                  var r = "x" === h ? e.value : i.value,
                    a = "x" === h ? i.value : e.value,
                    o = t.convertPoint({
                      x: r,
                      y: a
                    });
                  n.push(o)
                }), g.push({
                  points: n,
                  _id: "axis-" + h + p + "-grid-" + e.tickValue
                })
              }), e.gridPoints = g, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, e
                .endAngle = t.endAngle)
            }
            n._id = "axis-" + h, r.isNil(p) || (n._id = "axis-" + h + p), new a[s](r.mix(e, n))
          })
        }, e.clear = function() {
          this.axes = {}, this.frontPlot.clear(), this.backPlot.clear()
        }, t
      }();
    t.exports = c
  }, function(t, e, n) {
    var i = n(24);
    n(84), t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(24),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null
        }, n.getOffsetPoint = function(t) {
          var e = this.start,
            n = this.end;
          return {
            x: e.x + (n.x - e.x) * t,
            y: e.y + (n.y - e.y) * t
          }
        }, n.getAxisVector = function() {
          var t = this.start,
            e = this.end;
          return [e.x - t.x, e.y - t.y]
        }, n.drawLine = function(t) {
          var e = this.getContainer(t.top),
            n = this.start,
            i = this.end;
          e.addShape("line", {
            className: "axis-line",
            attrs: r.mix({
              x1: n.x,
              y1: n.y,
              x2: i.x,
              y2: i.y
            }, t)
          })
        }, e
      }(a);
    a.Line = o, t.exports = o
  }, function(t, e, n) {
    var i = n(0),
      r = n(35),
      a = n(36),
      o = n(41).requestAnimationFrame,
      s = function() {
        function t(t) {
          this._attrs = i.mix({
            type: "canvas",
            children: []
          }, t), this._initPixelRatio(), this._initCanvas()
        }
        var e = t.prototype;
        return e.get = function(t) {
          return this._attrs[t]
        }, e.set = function(t, e) {
          this._attrs[t] = e
        }, e._initPixelRatio = function() {
          this.get("pixelRatio") || this.set("pixelRatio", i.getPixelRatio())
        }, e.beforeDraw = function() {
          var t = this._attrs.context,
            e = this._attrs.el;
          !i.isWx && !i.isMy && t && t.clearRect(0, 0, e.width, e.height)
        }, e._initCanvas = function() {
          var t, e = this,
            n = e.get("el"),
            r = e.get("context");
          if (!(t = r ? r.canvas : i.isString(n) ? i.getDomById(n) : n)) throw new Error(
            "Please specify the id or el of the chart!");
          r && t && !t.getContext && (t.getContext = function() {
            return r
          });
          var a = e.get("width");
          a || (a = i.getWidth(t));
          var o = e.get("height");
          o || (o = i.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t
            .getContext("2d")), e.changeSize(a, o)
        }, e.changeSize = function(t, e) {
          var n = this.get("pixelRatio"),
            r = this.get("el");
          i.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), i.isWx || i.isMy || (r.width =
              t * n, r.height = e * n, 1 !== n && this.get("context").scale(n, n)), this.set("width", t), this
            .set("height", e)
        }, e.getWidth = function() {
          var t = this.get("pixelRatio");
          return this.get("width") * t
        }, e.getHeight = function() {
          var t = this.get("pixelRatio");
          return this.get("height") * t
        }, e.getPointByClient = function(t, e) {
          var n = this.get("el"),
            i = n.getBoundingClientRect(),
            r = i.right - i.left,
            a = i.bottom - i.top;
          return {
            x: (t - i.left) * (n.width / r),
            y: (e - i.top) * (n.height / a)
          }
        }, e._beginDraw = function() {
          this._attrs.toDraw = !0
        }, e._endDraw = function() {
          this._attrs.toDraw = !1
        }, e.draw = function() {
          function t() {
            e.set("animateHandler", o(function() {
              e.set("animateHandler", void 0), e.get("toDraw") && t()
            })), e.beforeDraw();
            try {
              for (var n = e._attrs.context, r = e._attrs.children, a = 0, s = r.length; a < s; a++) r[a]
                .draw(n);
              (i.isWx || i.isMy) && n.draw()
            } catch (t) {
              console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw()
            }
            e._endDraw()
          }
          var e = this;
          e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t())
        }, e.destroy = function() {
          this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0))
        }, e.isDestroyed = function() {
          return this.get("destroyed")
        }, t
      }();
    i.mix(s.prototype, r, {
      getGroupClass: function() {
        return a
      }
    }), t.exports = s
  }, function(t, e, n) {
    function i(t, e) {
      o.each(t, function(t) {
        t = t.split(":"), e.addColorStop(t[0], t[1])
      })
    }

    function r(t, e, n) {
      var r = t.split(" "),
        a = r[0].slice(2, r[0].length - 1);
      a = a * Math.PI / 180;
      var o, s, c = r.slice(1),
        u = e.getBBox(),
        l = u.minX,
        h = u.minY,
        f = u.maxX,
        p = u.maxY;
      a >= 0 && a < .5 * Math.PI ? (o = {
        x: l,
        y: h
      }, s = {
        x: f,
        y: p
      }) : .5 * Math.PI <= a && a < Math.PI ? (o = {
        x: f,
        y: h
      }, s = {
        x: l,
        y: p
      }) : Math.PI <= a && a < 1.5 * Math.PI ? (o = {
        x: f,
        y: p
      }, s = {
        x: l,
        y: h
      }) : (o = {
        x: l,
        y: p
      }, s = {
        x: f,
        y: h
      });
      var g = Math.tan(a),
        d = g * g,
        v = (s.x - o.x + g * (s.y - o.y)) / (d + 1) + o.x,
        y = g * (s.x - o.x + g * (s.y - o.y)) / (d + 1) + o.y,
        m = n.createLinearGradient(o.x, o.y, v, y);
      return i(c, m), m
    }

    function a(t, e, n) {
      var r = t.split(" "),
        a = r[0].slice(2, r[0].length - 1);
      a = a.split(",");
      var o = parseFloat(a[0]),
        s = parseFloat(a[1]),
        c = parseFloat(a[2]),
        u = r.slice(1);
      if (0 === c) return u[u.length - 1].split(":")[1];
      var l = e.getBBox(),
        h = l.width,
        f = l.height,
        p = l.minX,
        g = l.minY,
        d = Math.sqrt(h * h + f * f) / 2,
        v = n.createRadialGradient(p + h * o, g + f * s, c * d, p + h / 2, g + f / 2, d);
      return i(u, v), v
    }
    var o = n(0);
    t.exports = {
      parseStyle: function(t, e, n) {
        if ("(" === t[1]) try {
          var i = t[0];
          if ("l" === i) return r(t, e, n);
          if ("r" === i) return a(t, e, n)
        } catch (t) {
          console.error(
              "error in parsing gradient string, please check if there are any extra whitespaces."),
            console.error(t)
        }
        return t
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(2),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "rect"
        }, n.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            lineWidth: 0
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            i = e.y,
            a = e.width,
            o = e.height;
          t.beginPath();
          var s = e.radius;
          s && a * o ? (s = r.parsePadding(s), t.moveTo(n + s[0], i), t.lineTo(n + a - s[1], i), t.arc(n + a -
            s[1], i + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(n + a, i + o - s[2]), t.arc(n + a - s[2],
            i + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(n + s[3], i + o), t.arc(n + s[3], i + o - s[
            3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(n, i + s[0]), t.arc(n + s[0], i + s[0], s[0],
            Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(n, i, a, o)
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y;
          return {
            minX: e,
            minY: n,
            maxX: e + t.width,
            maxY: n + t.height
          }
        }, e
      }(a);
    a.Rect = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "circle"
        }, n.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            r: 0,
            lineWidth: 0
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            i = e.y,
            r = e.r;
          t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !1), t.closePath()
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            i = t.r;
          return {
            minX: e - i,
            maxX: e + i,
            minY: n - i,
            maxY: n + i
          }
        }, e
      }(r);
    r.Circle = a, t.exports = a
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = n(8),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line"
        }, n.getDefaultAttrs = function() {
          return {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            lineWidth: 1
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x1,
            i = e.y1,
            r = e.x2,
            a = e.y2;
          t.beginPath(), t.moveTo(n, i), t.lineTo(r, a)
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x1,
            n = t.y1,
            i = t.x2,
            r = t.y2;
          return a.getBBoxFromLine(e, n, i, r)
        }, e
      }(r);
    r.Line = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = n(8),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "polygon"
        }, n.getDefaultAttrs = function() {
          return {
            points: null,
            lineWidth: 0
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs").points;
          t.beginPath();
          for (var n = 0, i = e.length; n < i; n++) {
            var r = e[n];
            0 === n ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y)
          }
          t.closePath()
        }, n.calculateBox = function() {
          var t = this.get("attrs").points;
          return a.getBBoxFromPoints(t)
        }, e
      }(r);
    r.Polygon = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = n(42),
      o = n(8),
      s = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "polyline"
        }, n.getDefaultAttrs = function() {
          return {
            points: null,
            lineWidth: 1,
            smooth: !1
          }
        }, n.createPath = function(t) {
          for (var e = this.get("attrs"), n = e.points, i = e.smooth, r = [], o = 0, s = n.length; o <
            s; o++) {
            var c = n[o];
            isNaN(c.x) || isNaN(c.y) || r.push(c)
          }
          if (r.length)
            if (t.beginPath(), t.moveTo(r[0].x, r[0].y), i)
              for (var u = [
                  [0, 0],
                  [1, 1]
                ], l = a.smooth(r, !1, u), h = 0, f = l.length; h < f; h++) {
                var p = l[h];
                t.bezierCurveTo(p[1], p[2], p[3], p[4], p[5], p[6])
              } else {
                var g, d;
                for (g = 1, d = r.length - 1; g < d; g++) t.lineTo(r[g].x, r[g].y);
                t.lineTo(r[d].x, r[d].y)
              }
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.points;
          if (t.smooth) {
            for (var n = [], i = [
                [0, 0],
                [1, 1]
              ], r = a.smooth(e, !1, i), s = 0, c = r.length; s < c; s++) {
              var u = r[s];
              if (0 === s) n.push([e[0].x, e[0].y, u[1], u[2], u[3], u[4], u[5], u[6]]);
              else {
                var l = r[s - 1];
                n.push([l[5], l[6], u[1], u[2], u[3], u[4], u[5], u[6]])
              }
            }
            return o.getBBoxFromBezierGroup(n)
          }
          return o.getBBoxFromPoints(e)
        }, e
      }(r);
    r.Polyline = s, t.exports = s
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = n(8),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "arc"
        }, n.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !1,
            lineWidth: 1
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            i = e.y,
            r = e.r,
            a = e.startAngle,
            o = e.endAngle,
            s = e.clockwise;
          t.beginPath(), t.arc(n, i, r, a, o, s)
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            i = t.r,
            r = t.startAngle,
            o = t.endAngle,
            s = t.clockwise;
          return a.getBBoxFromArc(e, n, i, r, o, s)
        }, e
      }(r);
    r.Arc = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = n(8),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "sector"
        }, n.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            lineWidth: 0,
            r: 0,
            r0: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !1
          }
        }, n.createPath = function(t) {
          var e = this.get("attrs"),
            n = e.x,
            i = e.y,
            r = e.startAngle,
            a = e.endAngle,
            o = e.r,
            s = e.r0,
            c = e.clockwise;
          t.beginPath();
          var u = Math.cos(r),
            l = Math.sin(r);
          t.moveTo(u * s + n, l * s + i), t.lineTo(u * o + n, l * o + i), t.arc(n, i, o, r, a, c), t.lineTo(
            Math.cos(a) * s + n, Math.sin(a) * s + i), 0 !== s && t.arc(n, i, s, a, r, !c), t.closePath()
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            i = t.r,
            r = t.r0,
            o = t.startAngle,
            s = t.endAngle,
            c = t.clockwise,
            u = a.getBBoxFromArc(e, n, i, o, s, c),
            l = a.getBBoxFromArc(e, n, r, o, s, c);
          return {
            minX: Math.min(u.minX, l.minX),
            minY: Math.min(u.minY, l.minY),
            maxX: Math.max(u.maxX, l.maxX),
            maxY: Math.max(u.maxY, l.maxY)
          }
        }, e
      }(r);
    r.Sector = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(2),
      o = 0,
      s = {},
      c = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "text"
        }, n.getDefaultAttrs = function() {
          return {
            lineWidth: 0,
            lineCount: 1,
            fontSize: 12,
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontVariant: "normal",
            textAlign: "start",
            textBaseline: "bottom",
            lineHeight: null,
            textArr: null
          }
        }, n._getFontStyle = function() {
          var t = this._attrs.attrs,
            e = t.fontSize,
            n = t.fontFamily,
            i = t.fontWeight;
          return t.fontStyle + " " + t.fontVariant + " " + i + " " + e + "px " + n
        }, n._afterAttrsSet = function() {
          var t = this._attrs.attrs;
          if (t.font = this._getFontStyle(), t.text) {
            var e = t.text,
              n = null,
              i = 1;
            r.isString(e) && -1 !== e.indexOf("\n") && (i = (n = e.split("\n")).length), t.lineCount = i, t
              .textArr = n
          }
          this.set("attrs", t)
        }, n._getTextHeight = function() {
          var t = this._attrs.attrs;
          if (t.height) return t.height;
          var e = t.lineCount,
            n = 1 * t.fontSize;
          return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
        }, n._getSpaceingY = function() {
          var t = this._attrs.attrs,
            e = t.lineHeight,
            n = 1 * t.fontSize;
          return e ? e - n : .14 * n
        }, n.drawInner = function(t) {
          var e = this,
            n = e._attrs.attrs,
            i = n.text,
            a = n.x,
            o = n.y;
          if (!(r.isNil(i) || isNaN(a) || isNaN(o))) {
            var s = n.textArr,
              c = 1 * n.fontSize,
              u = e._getSpaceingY();
            n.rotate && (t.translate(a, o), t.rotate(n.rotate), a = 0, o = 0);
            var l, h = n.textBaseline;
            s && (l = e._getTextHeight());
            var f;
            if (e.hasFill()) {
              var p = n.fillOpacity;
              if (r.isNil(p) || 1 === p || (t.globalAlpha = p), s)
                for (var g = 0, d = s.length; g < d; g++) {
                  var v = s[g];
                  f = o + g * (u + c) - l + c, "middle" === h && (f += l - c - (l - c) / 2), "top" === h && (
                    f += l - c), t.fillText(v, a, f)
                } else t.fillText(i, a, o)
            }
            if (e.hasStroke())
              if (s)
                for (var y = 0, m = s.length; y < m; y++) {
                  var x = s[y];
                  f = o + y * (u + c) - l + c, "middle" === h && (f += l - c - (l - c) / 2), "top" === h && (
                    f += l - c), t.strokeText(x, a, f)
                } else t.strokeText(i, a, o)
          }
        }, n.calculateBox = function() {
          var t = this,
            e = t._attrs.attrs,
            n = e.x,
            i = e.y,
            r = e.textAlign,
            a = e.textBaseline,
            o = t._getTextWidth();
          if (!o) return {
            minX: n,
            minY: i,
            maxX: n,
            maxY: i
          };
          var s = t._getTextHeight(),
            c = {
              x: n,
              y: i - s
            };
          return r && ("end" === r || "right" === r ? c.x -= o : "center" === r && (c.x -= o / 2)), a && (
            "top" === a ? c.y += s : "middle" === a && (c.y += s / 2)), {
            minX: c.x,
            minY: c.y,
            maxX: c.x + o,
            maxY: c.y + s
          }
        }, n._getTextWidth = function() {
          var t = this._attrs.attrs;
          if (t.width) return t.width;
          var e = t.text,
            n = this.get("context");
          if (!r.isNil(e)) {
            var i = t.font,
              a = t.textArr,
              c = e + "" + i;
            if (s[c]) return s[c];
            var u = 0;
            if (a)
              for (var l = 0, h = a.length; l < h; l++) {
                var f = a[l];
                u = Math.max(u, r.measureText(f, i, n).width)
              } else u = r.measureText(e, i, n).width;
            return o > 5e3 && (o = 0, s = {}), o++, s[c] = u, u
          }
        }, e
      }(a);
    a.Text = c, t.exports = c
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(2),
      a = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.createPath = null, this._attrs.type = "custom"
        }, n.createPath = function(t) {
          var e = this.get("createPath");
          e && e.call(this, t)
        }, n.calculateBox = function() {
          var t = this.get("calculateBox");
          return t && t.call(this)
        }, e
      }(r);
    r.Custom = a, t.exports = a
  }, function(t, e, n) {
    var i = n(1),
      r = n(0);
    setTimeout(function() {
      if (i.trackable && r.isBrowser) {
        var t = new Image,
          e = {
            pg: document.URL,
            r: (new Date).getTime(),
            f2: !0,
            version: i.version,
            page_type: "syslog"
          },
          n = encodeURIComponent(JSON.stringify([e]));
        t.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + n
      }
    }, 3e3)
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(43),
      a = n(4);
    n(37);
    var o = function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      return i(e, t), e.prototype.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "line", e.sortable = !0, e
      }, e
    }(r);
    a.Line = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
    var a = n(4),
      o = n(0),
      s = n(44);
    n(99);
    var c = function(t) {
      function e(e) {
        var n;
        return n = t.call(this, e) || this, o.mix(r(r(n)), s), n
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e
      }, n.createShapePointsCfg = function(e) {
        var n = t.prototype.createShapePointsCfg.call(this, e);
        return n.size = this.getNormalizedSize(e), n
      }, n.clearInner = function() {
        t.prototype.clearInner.call(this), this.set("defaultSize", null)
      }, e
    }(a);
    a.Interval = c, t.exports = c
  }, function(t, e, n) {
    function i(t) {
      var e = t.x,
        n = t.y,
        i = t.y0,
        r = t.size,
        o = i,
        s = n;
      a.isArray(n) && (s = n[1], o = n[0]);
      var c, u;
      return a.isArray(e) ? (c = e[0], u = e[1]) : (c = e - r / 2, u = e + r / 2), [{
        x: c,
        y: o
      }, {
        x: c,
        y: s
      }, {
        x: u,
        y: s
      }, {
        x: u,
        y: o
      }]
    }

    function r(t) {
      for (var e = [], n = [], i = 0, r = t.length; i < r; i++) {
        var a = t[i];
        e.push(a.x), n.push(a.y)
      }
      var o = Math.min.apply(null, e),
        s = Math.min.apply(null, n);
      return {
        x: o,
        y: s,
        width: Math.max.apply(null, e) - o,
        height: Math.max.apply(null, n) - s
      }
    }
    var a = n(0),
      o = n(6),
      s = n(3),
      c = n(1),
      u = o.registerFactory("interval", {
        defaultShapeType: "rect",
        getDefaultPoints: function(t) {
          return i(t)
        }
      });
    o.registerShape("interval", "rect", {
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          i = a.mix({
            fill: t.color
          }, c.shape.interval, t.style);
        if (t.isInCircle) {
          var o = n.slice(0);
          this._coord.transposed && (o = [n[0], n[3], n[2], n[1]]);
          var u = t.center,
            l = u.x,
            h = u.y,
            f = [1, 0],
            p = [o[0].x - l, o[0].y - h],
            g = [o[1].x - l, o[1].y - h],
            d = [o[2].x - l, o[2].y - h],
            v = s.angleTo(f, g),
            y = s.angleTo(f, d),
            m = s.length(p),
            x = s.length(g);
          return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), y >= 1.5 * Math.PI && (y -= 2 * Math.PI), e
            .addShape("Sector", {
              className: "interval",
              attrs: a.mix({
                x: l,
                y: h,
                r: x,
                r0: m,
                startAngle: v,
                endAngle: y
              }, i)
            })
        }
        var _ = r(n);
        return e.addShape("rect", {
          className: "interval",
          attrs: a.mix(_, i)
        })
      }
    }), t.exports = u
  }, function(t, e, n) {
    t.exports = {
      Stack: n(101),
      Dodge: n(105)
    }
  }, function(t, e, n) {
    var i = n(102);
    t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(38),
      s = n(104),
      c = n(20),
      u = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          this.xField = null, this.yField = null
        }, e.prototype.processAdjust = function(t) {
          this.processStack(t)
        }, e.prototype.processStack = function(t) {
          var e = this,
            n = e.xField,
            i = e.yField,
            r = t.length,
            a = {
              positive: {},
              negative: {}
            };
          e.reverseOrder && (t = t.slice(0).reverse());
          for (var c = 0; c < r; c++)
            for (var u = t[c], l = 0, h = u.length; l < h; l++) {
              var f = u[l],
                p = f[n] || 0,
                g = f[i],
                d = p.toString();
              if (g = o(g) ? g[1] : g, !s(g)) {
                var v = g >= 0 ? "positive" : "negative";
                a[v][d] || (a[v][d] = 0), f[i] = [a[v][d], g + a[v][d]], a[v][d] += g
              }
            }
        }, e
      }(c);
    c.Stack = u, t.exports = u
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t, e) {
      return n.call(t) === "[object " + e + "]"
    }
  }, function(t, e) {
    t.exports = function(t) {
      return null === t || void 0 === t
    }
  }, function(t, e, n) {
    var i = n(106);
    t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(20),
      s = n(107),
      c = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = ["x", "y"]
        }, e.prototype.getDodgeOffset = function(t, e, n) {
          var i = this,
            r = t.pre,
            a = t.next,
            o = a - r,
            s = o * i.dodgeRatio / n,
            c = i.marginRatio * s;
          return (r + a) / 2 + (.5 * (o - n * s - (n - 1) * c) + ((e + 1) * s + e * c) - .5 * s - .5 * o)
        }, e.prototype.processAdjust = function(t) {
          var e = this,
            n = t.length,
            i = e.xField;
          s(t, function(t, r) {
            for (var a = 0, o = t.length; a < o; a++) {
              var s = t[a],
                c = s[i],
                u = {
                  pre: c - .5,
                  next: c + .5
                },
                l = e.getDodgeOffset(u, r, n);
              s[i] = l
            }
          })
        }, e
      }(o);
    o.Dodge = c, t.exports = c
  }, function(t, e, n) {
    var i = n(108),
      r = n(38);
    t.exports = function(t, e) {
      if (t)
        if (r(t))
          for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++);
        else if (i(t))
        for (var o in t)
          if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
    }
  }, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    t.exports = function(t) {
      var e = void 0 === t ? "undefined" : n(t);
      return null !== t && "object" === e || "function" === e
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(18),
      a = n(3),
      o = n(22),
      s = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.inner =
            0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, this
            .radius = null
        }, n.init = function(t, e) {
          var n, i, r = this,
            a = r.inner || r.innerRadius,
            o = Math.abs(e.x - t.x),
            s = Math.abs(e.y - t.y);
          r.startAngle === -Math.PI && 0 === r.endAngle ? (n = Math.min(o / 2, s), i = {
            x: (t.x + e.x) / 2,
            y: t.y
          }) : (n = Math.min(o, s) / 2, i = {
            x: (t.x + e.x) / 2,
            y: (t.y + e.y) / 2
          });
          var c = r.radius;
          c > 0 && c <= 1 && (n *= c), this.x = {
            start: r.startAngle,
            end: r.endAngle
          }, this.y = {
            start: n * a,
            end: n
          }, this.center = i, this.circleRadius = n
        }, n.convertPoint = function(t) {
          var e = this,
            n = e.center,
            i = e.transposed,
            r = i ? "y" : "x",
            a = i ? "x" : "y",
            o = e.x,
            s = e.y,
            c = o.start + (o.end - o.start) * t[r],
            u = s.start + (s.end - s.start) * t[a];
          return {
            x: n.x + Math.cos(c) * u,
            y: n.y + Math.sin(c) * u
          }
        }, n.invertPoint = function(t) {
          var e = this,
            n = e.center,
            i = e.transposed,
            r = e.x,
            s = e.y,
            c = i ? "y" : "x",
            u = i ? "x" : "y",
            l = [1, 0, 0, 1, 0, 0];
          o.rotate(l, l, r.start);
          var h = [1, 0];
          a.transformMat2d(h, h, l), h = [h[0], h[1]];
          var f = [t.x - n.x, t.y - n.y];
          if (a.zero(f)) return {
            x: 0,
            y: 0
          };
          var p = a.angleTo(h, f, r.end < r.start);
          Math.abs(p - 2 * Math.PI) < .001 && (p = 0);
          var g = a.length(f),
            d = p / (r.end - r.start);
          d = r.end - r.start > 0 ? d : -d;
          var v = (g - s.start) / (s.end - s.start),
            y = {};
          return y[c] = d, y[u] = v, y
        }, e
      }(r);
    r.Polar = s, t.exports = s
  }, function(t, e, n) {
    var i = n(27),
      r = n(128);
    t.exports = {
      toTimeStamp: function(t) {
        return i(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/"))
          .getTime()), r(t) && (t = t.getTime()), t
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = {
        circle: function(t, e, n, i) {
          i.arc(t, e, n, 0, 2 * Math.PI, !1)
        },
        square: function(t, e, n, i) {
          i.moveTo(t - n, e - n), i.lineTo(t + n, e - n), i.lineTo(t + n, e + n), i.lineTo(t - n, e + n), i
            .closePath()
        }
      },
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initProperties = function() {
          t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this
            ._attrs.type = "marker"
        }, n.getDefaultAttrs = function() {
          return {
            x: 0,
            y: 0,
            lineWidth: 0
          }
        }, n.createPath = function(t) {
          var e, n = this.get("attrs"),
            i = n.x,
            o = n.y,
            s = n.radius,
            c = n.symbol || "circle";
          e = r.isFunction(c) ? c : a[c], t.beginPath(), e(i, o, s, t, this)
        }, n.calculateBox = function() {
          var t = this.get("attrs"),
            e = t.x,
            n = t.y,
            i = t.radius;
          return {
            minX: e - i,
            minY: n - i,
            maxX: e + i,
            maxY: n + i
          }
        }, e
      }(n(7).Shape);
    t.exports = o
  }, function(t, e, n) {
    var i = n(0),
      r = n(7).Group,
      a = n(111),
      o = function() {
        function t(t) {
          i.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems()
        }
        var e = t.prototype;
        return e.getDefaultCfg = function() {
          return {
            showTitle: !1,
            title: null,
            items: null,
            titleGap: 12,
            itemGap: 10,
            itemMarginBottom: 12,
            itemFormatter: null,
            itemWidth: null,
            wordSpace: 6,
            x: 0,
            y: 0,
            layout: "horizontal",
            joinString: ": "
          }
        }, e._init = function() {
          var t = new r({
            zIndex: this.zIndex || 0
          });
          this.container = t;
          var e = t.addGroup();
          this.wrapper = e;
          var n = e.addGroup({
            className: "itemsGroup"
          });
          this.itemsGroup = n, this.parent && this.parent.add(t)
        }, e._renderTitle = function(t) {
          t = t || this.title;
          var e = this.titleShape,
            n = 0;
          if (this.showTitle && t) {
            if (e && !e.get("destroyed")) e.attr("text", t);
            else {
              var r = this.wrapper,
                a = this.titleStyle;
              e = r.addShape("text", {
                className: "title",
                attrs: i.mix({
                  x: 0,
                  y: 0,
                  text: t
                }, a)
              }), this.titleShape = e
            }
            n = e.getBBox().height + this.titleGap
          }
          this._titleHeight = n
        }, e._renderItems = function(t) {
          var e = this;
          (t = t || e.items) && (e.reversed && t.reverse(), i.each(t, function(t, n) {
            e._addItem(t, n)
          }), t.length > 1 && this._adjustItems(), this._renderBackground())
        }, e._renderBackground = function() {
          var t = this.background;
          if (t) {
            var e = this.container,
              n = this.wrapper.getBBox(),
              r = n.minX,
              a = n.minY,
              o = n.width,
              s = n.height,
              c = t.padding || [0, 0, 0, 0];
            c = i.parsePadding(c);
            var u = i.mix({
                x: r - c[3],
                y: a - c[0],
                width: o + c[1] + c[3],
                height: s + c[0] + c[2]
              }, t),
              l = this.backShape;
            l ? l.attr(u) : l = e.addShape("Rect", {
              zIndex: -1,
              attrs: u
            }), this.backShape = l, e.sort()
          }
        }, e._addItem = function(t) {
          var e = this.itemsGroup.addGroup({
              name: t.name,
              value: t.value,
              dataValue: t.dataValue,
              checked: t.checked
            }),
            n = this.unCheckStyle,
            r = this.unCheckColor,
            o = this.nameStyle,
            s = this.valueStyle,
            c = this.wordSpace,
            u = t.marker,
            l = t.value,
            h = 0;
          if (r && (n.fill = r), u) {
            var f = u.radius || 3,
              p = i.mix({
                x: f,
                y: this._titleHeight
              }, u);
            !1 === t.checked && i.mix(p, n);
            var g = new a({
              className: "item-marker",
              attrs: p
            });
            e.add(g), h += g.getBBox().width + c
          }
          var d, v = t.name;
          if (v) {
            var y = this.joinString || "";
            v = l ? v + y : v, d = e.addShape("text", {
              className: "name",
              attrs: i.mix({
                x: h,
                y: this._titleHeight,
                text: this._formatItemValue(v)
              }, o, !1 === t.checked ? n : null)
            })
          }
          if (l) {
            var m = h;
            d && (m += d.getBBox().width), e.addShape("text", {
              className: "value",
              attrs: i.mix({
                x: m,
                y: this._titleHeight,
                text: l
              }, s, !1 === t.checked ? n : null)
            })
          }
          return e
        }, e._formatItemValue = function(t) {
          var e = this.itemFormatter;
          return e && (t = e.call(this, t)), t
        }, e._getMaxItemWidth = function() {
          var t = this.itemWidth;
          if (i.isNumber(t) || i.isNil(t)) return t;
          if ("auto" === t) {
            for (var e = this.itemsGroup.get("children"), n = e.length, r = 0, a = 0; a < n; a++) {
              var o = e[a].getBBox().width;
              r = Math.max(r, o)
            }
            var s = this.maxLength,
              c = this.itemGap,
              u = (s - c) / 2,
              l = (s - 2 * c) / 3;
            return 2 === n ? Math.max(r, u) : r <= l ? l : r <= u ? u : r
          }
        }, e._adjustHorizontal = function() {
          for (var t, e, n = this.maxLength, i = this.itemsGroup.get("children"), r = this.itemGap, a = this
              .itemMarginBottom, o = this._titleHeight, s = 0, c = 0, u = this._getMaxItemWidth(), l = [], h =
              0, f = i.length; h < f; h++) {
            var p = i[h],
              g = p.getBBox(),
              d = g.height,
              v = g.width;
            e = d + a, (t = u || v) - (n - c) > 1e-4 && (s++, c = 0), p.moveTo(c, s * e), l.push({
              x: c,
              y: s * e + o - d / 2,
              width: 1.375 * v,
              height: 1.375 * d
            }), c += t + r
          }
          this.legendHitBoxes = l
        }, e._adjustVertical = function() {
          for (var t, e, n = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom,
              s = this.itemWidth, c = this._titleHeight, u = r.get("children"), l = 0, h = 0, f = 0, p = [],
              g = 0, d = u.length; g < d; g++) {
            var v = u[g],
              y = v.getBBox();
            t = y.width, e = y.height, i.isNumber(s) ? h = s + a : t > h && (h = t + a), n - l < e ? (l = 0,
              f += h, v.moveTo(f, 0), p.push({
                x: f,
                y: c - e / 2,
                width: 1.375 * t,
                height: 1.375 * e
              })) : (v.moveTo(f, l), p.push({
              x: f,
              y: l - e / 2 + c,
              width: 1.375 * t,
              height: 1.375 * e
            })), l += e + o
          }
          this.legendHitBoxes = p
        }, e._adjustItems = function() {
          "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical()
        }, e.moveTo = function(t, e) {
          this.x = t, this.y = e;
          var n = this.container;
          return n && n.moveTo(t, e), this
        }, e.setItems = function(t) {
          this.clearItems(), this._renderItems(t)
        }, e.setTitle = function(t) {
          this._renderTitle(t)
        }, e.clearItems = function() {
          this.itemsGroup.clear()
        }, e.getWidth = function() {
          return this.container.getBBox().width
        }, e.getHeight = function() {
          return this.container.getBBox().height
        }, e.show = function() {
          this.container.show()
        }, e.hide = function() {
          this.container.hide()
        }, e.clear = function() {
          var t = this.container;
          t.clear(), t.remove(!0)
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    var i = n(0),
      r = {
        appear: {
          duration: 450,
          easing: "quadraticOut"
        },
        update: {
          duration: 300,
          easing: "quadraticOut"
        },
        enter: {
          duration: 300,
          easing: "quadraticOut"
        },
        leave: {
          duration: 350,
          easing: "quadraticIn"
        }
      },
      a = {
        defaultCfg: {},
        Action: {},
        getAnimation: function(t, e, n) {
          var r = this.defaultCfg[t];
          if (r) {
            var a = r[n];
            if (i.isFunction(a)) return a(e)
          }
          return !1
        },
        getAnimateCfg: function(t, e) {
          var n = r[e],
            a = this.defaultCfg[t];
          return a && a.cfg && a.cfg[e] ? i.deepMix({}, n, a.cfg[e]) : n
        },
        registerAnimation: function(t, e) {
          this.Action || (this.Action = {}), this.Action[t] = e
        }
      };
    t.exports = a
  }, function(t, e, n) {
    var i = n(7).Matrix,
      r = n(0),
      a = {
        getCoordInfo: function(t) {
          var e = t.start,
            n = t.end;
          return {
            start: e,
            end: n,
            width: n.x - e.x,
            height: Math.abs(n.y - e.y)
          }
        },
        getScaledMatrix: function(t, e, n) {
          var r;
          t.apply(e);
          var a = e[0],
            o = e[1];
          if ("x" === n) {
            t.transform([
              ["t", a, o],
              ["s", .01, 1],
              ["t", -a, -o]
            ]);
            var s = t.getMatrix();
            r = i.transform(s, [
              ["t", a, o],
              ["s", 100, 1],
              ["t", -a, -o]
            ])
          } else if ("y" === n) {
            t.transform([
              ["t", a, o],
              ["s", 1, .01],
              ["t", -a, -o]
            ]);
            var c = t.getMatrix();
            r = i.transform(c, [
              ["t", a, o],
              ["s", 1, 100],
              ["t", -a, -o]
            ])
          } else if ("xy" === n) {
            t.transform([
              ["t", a, o],
              ["s", .01, .01],
              ["t", -a, -o]
            ]);
            var u = t.getMatrix();
            r = i.transform(u, [
              ["t", a, o],
              ["s", 100, 100],
              ["t", -a, -o]
            ])
          }
          return r
        },
        getAnimateParam: function(t, e, n) {
          var i = {};
          return t.delay && (i.delay = r.isFunction(t.delay) ? t.delay(e, n) : t.delay), i.easing = t.easing,
            i.duration = t.duration, i.delay = t.delay, i
        },
        doAnimation: function(t, e, n, i) {
          var r = t._id,
            o = t.get("index"),
            s = a.getAnimateParam(n, o, r),
            c = s.easing,
            u = s.delay,
            l = s.duration,
            h = t.animate().to({
              attrs: e,
              duration: l,
              delay: u,
              easing: c
            });
          i && h.onEnd(function() {
            i()
          })
        }
      };
    t.exports = a
  }, function(t, e, n) {
    var i = n(4);
    n(116), n(43), n(97), n(118), n(98), n(120), n(122), t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(4);
    n(117);
    var o = function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e
      }, n.draw = function(t, e) {
        var n = this,
          i = n.get("container");
        r.each(t, function(t) {
          var a = t.shape,
            o = n.getDrawCfg(t);
          if (r.isArray(t.y)) {
            var s = n.hasAdjust("stack");
            r.each(t.y, function(r, c) {
              o.y = r, s && 0 === c || n.drawShape(a, t, o, i, e)
            })
          } else r.isNil(t.y) || n.drawShape(a, t, o, i, e)
        })
      }, e
    }(a);
    a.Point = o, t.exports = o
  }, function(t, e, n) {
    function i(t) {
      var e = {
        lineWidth: 0,
        stroke: t.color,
        fill: t.color
      };
      return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e)
    }

    function r(t, e, n) {
      if (0 !== t.size) {
        var r = i(t),
          o = r.r || r.size,
          s = t.x,
          c = a.isArray(t.y) ? t.y : [t.y];
        "hollowCircle" === n && (r.lineWidth = 1, r.fill = null);
        for (var u = 0, l = c.length; u < l; u++) return "rect" === n ? e.addShape("Rect", {
          className: "point",
          attrs: a.mix({
            x: s - o,
            y: c[u] - o,
            width: 2 * o,
            height: 2 * o
          }, r)
        }) : e.addShape("Circle", {
          className: "point",
          attrs: a.mix({
            x: s,
            y: c[u],
            r: o
          }, r)
        })
      }
    }
    var a = n(0),
      o = n(1),
      s = n(16),
      c = n(6),
      u = ["circle", "hollowCircle", "rect"],
      l = c.registerFactory("point", {
        defaultShapeType: "circle",
        getDefaultPoints: function(t) {
          return s.splitPoints(t)
        }
      });
    a.each(u, function(t) {
      c.registerShape("point", t, {
        draw: function(e, n) {
          return r(e, n, t)
        }
      })
    }), t.exports = l
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(4),
      a = n(16),
      o = n(0);
    n(119);
    var s = function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e
      }, n.draw = function(t, e) {
        var n = this,
          i = n.get("container"),
          r = this.getDrawCfg(t[0]),
          s = n.getYScale(),
          c = n.get("connectNulls"),
          u = a.splitArray(t, s.field, c);
        r.origin = t, o.each(u, function(a, o) {
          r.splitedIndex = o;
          var s = a.map(function(t) {
            return t.points
          });
          r.points = s, n.drawShape(r.shape, t[0], r, i, e)
        })
      }, e
    }(r);
    r.Area = s, t.exports = s
  }, function(t, e, n) {
    function i(t, e) {
      return Math.abs(t - e) < 1e-5
    }

    function r(t, e) {
      var n = !0;
      return s.each(t, function(t) {
        if (!i(t.x, e.x) || !i(t.y, e.y)) return n = !1, !1
      }), n
    }

    function a(t, e, n, i, r) {
      var a = t.concat(e);
      return r ? n.addShape("Custom", {
        className: "area",
        attrs: s.mix({
          points: a
        }, i),
        createPath: function(t) {
          var e = [
              [0, 0],
              [1, 1]
            ],
            n = this._attrs.attrs.points,
            i = n.length,
            r = n.slice(0, i / 2),
            a = n.slice(i / 2, i),
            o = u.smooth(r, !1, e);
          t.beginPath(), t.moveTo(r[0].x, r[0].y);
          for (var s = 0, c = o.length; s < c; s++) {
            var l = o[s];
            t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6])
          }
          if (a.length) {
            var h = u.smooth(a, !1, e);
            t.lineTo(a[0].x, a[0].y);
            for (var f = 0, p = h.length; f < p; f++) {
              var g = h[f];
              t.bezierCurveTo(g[1], g[2], g[3], g[4], g[5], g[6])
            }
          }
          t.closePath()
        },
        calculateBox: function() {
          var t = this._attrs.attrs.points;
          return l.getBBoxFromPoints(t)
        }
      }) : n.addShape("Polyline", {
        className: "area",
        attrs: s.mix({
          points: a
        }, i)
      })
    }

    function o(t, e, n) {
      var i = this,
        o = t.points,
        c = [],
        u = [];
      s.each(o, function(t) {
        u.push(t[0]), c.push(t[1])
      });
      var l = s.mix({
        fillStyle: t.color
      }, h.shape.area, t.style);
      return u.reverse(), c = i.parsePoints(c), u = i.parsePoints(u), t.isInCircle && (c.push(c[0]), u.unshift(
        u[u.length - 1]), r(u, t.center) && (u = [])), a(c, u, e, l, n)
    }
    var s = n(0),
      c = n(6),
      u = n(42),
      l = n(8),
      h = n(1),
      f = c.registerFactory("area", {
        defaultShapeType: "area",
        getDefaultPoints: function(t) {
          var e = t.x,
            n = t.y,
            i = t.y0;
          n = s.isArray(n) ? n : [i, n];
          var r = [];
          return r.push({
            x: e,
            y: n[0]
          }, {
            x: e,
            y: n[1]
          }), r
        }
      }),
      p = ["area", "smooth"];
    s.each(p, function(t) {
      c.registerShape("area", t, {
        draw: function(e, n) {
          var i = "smooth" === t;
          return o.call(this, e, n, i)
        }
      })
    }), t.exports = f
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(4),
      a = n(0);
    n(121);
    var o = function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e
      }, n.createShapePointsCfg = function(e) {
        var n, i = t.prototype.createShapePointsCfg.call(this, e),
          r = this,
          o = i.x,
          s = i.y;
        if (!a.isArray(o) || !a.isArray(s)) {
          var c = r.getXScale(),
            u = r.getYScale(),
            l = .5 / (c.values ? c.values.length : c.ticks.length),
            h = .5 / (u.values ? u.values.length : u.ticks.length);
          c.isCategory && u.isCategory ? (o = [o - l, o - l, o + l, o + l], s = [s - h, s + h, s + h, s -
            h]) : a.isArray(o) ? (o = [(n = o)[0], n[0], n[1], n[1]], s = [s - h / 2, s + h / 2, s + h /
            2, s - h / 2
          ]) : a.isArray(s) && (s = [(n = s)[0], n[1], n[1], n[0]], o = [o - l / 2, o - l / 2, o + l / 2,
            o + l / 2
          ]), i.x = o, i.y = s
        }
        return i
      }, e
    }(r);
    r.Polygon = o, t.exports = o
  }, function(t, e, n) {
    var i = n(6),
      r = n(0),
      a = i.registerFactory("polygon", {
        defaultShapeType: "polygon",
        getDefaultPoints: function(t) {
          for (var e = [], n = t.x, i = t.y, r = 0, a = n.length; r < a; r++) e.push({
            x: n[r],
            y: i[r]
          });
          return e
        }
      });
    i.registerShape("polygon", "polygon", {
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          i = r.mix({
            fill: t.color,
            points: n
          }, t.style);
        return e.addShape("Polygon", {
          className: "polygon",
          attrs: i
        })
      }
    }), t.exports = a
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
    var a = n(4),
      o = n(0),
      s = n(44);
    n(123);
    var c = function(t) {
      function e(e) {
        var n;
        return n = t.call(this, e) || this, o.mix(r(r(n)), s), n
      }
      i(e, t);
      var n = e.prototype;
      return n.getDefaultCfg = function() {
        var e = t.prototype.getDefaultCfg.call(this);
        return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e
      }, n.createShapePointsCfg = function(e) {
        var n = t.prototype.createShapePointsCfg.call(this, e);
        return n.size = this.getNormalizedSize(e), n
      }, n.clearInner = function() {
        t.prototype.clearInner.call(this), this.set("defaultSize", null)
      }, e
    }(a);
    a.Schema = c, t.exports = c
  }, function(t, e, n) {
    function i(t) {
      var e = t.sort(function(t, e) {
          return t < e ? 1 : -1
        }),
        n = e.length;
      if (n < 4)
        for (var i = e[n - 1], r = 0; r < 4 - n; r++) e.push(i);
      return e
    }

    function r(t, e, n) {
      var r = i(e);
      return [{
        x: t,
        y: r[0]
      }, {
        x: t,
        y: r[1]
      }, {
        x: t - n / 2,
        y: r[2]
      }, {
        x: t - n / 2,
        y: r[1]
      }, {
        x: t + n / 2,
        y: r[1]
      }, {
        x: t + n / 2,
        y: r[2]
      }, {
        x: t,
        y: r[2]
      }, {
        x: t,
        y: r[3]
      }]
    }
    var a = n(6),
      o = n(0),
      s = a.registerFactory("schema", {});
    a.registerShape("schema", "candle", {
      getPoints: function(t) {
        return r(t.x, t.y, t.size)
      },
      draw: function(t, e) {
        var n = this.parsePoints(t.points),
          i = o.mix({
            stroke: t.color,
            fill: t.color,
            lineWidth: 1
          }, t.style);
        return e.addShape("Custom", {
          className: "schema",
          attrs: i,
          createPath: function(t) {
            t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y), t.moveTo(n[2].x, n[2]
              .y);
            for (var e = 3; e < 6; e++) t.lineTo(n[e].x, n[e].y);
            t.closePath(), t.moveTo(n[6].x, n[6].y), t.lineTo(n[7].x, n[7].y)
          }
        })
      }
    }), t.exports = s
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(24),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math
            .PI / 2, this.radius = null, this.center = null
        }, n.getOffsetPoint = function(t) {
          var e = this.startAngle,
            n = e + (this.endAngle - e) * t;
          return this._getCirclePoint(n)
        }, n._getCirclePoint = function(t, e) {
          var n = this,
            i = n.center;
          return e = e || n.radius, {
            x: i.x + Math.cos(t) * e,
            y: i.y + Math.sin(t) * e
          }
        }, n.getTextAlignInfo = function(t, e) {
          var n, i = this.getOffsetVector(t, e),
            r = "middle";
          return i[0] > 0 ? n = "left" : i[0] < 0 ? n = "right" : (n = "center", i[1] > 0 ? r = "top" : i[1] <
            0 && (r = "bottom")), {
            textAlign: n,
            textBaseline: r
          }
        }, n.getAxisVector = function(t) {
          var e = this.center,
            n = this.offsetFactor;
          return [(t.y - e.y) * n, -1 * (t.x - e.x) * n]
        }, n.drawLine = function(t) {
          var e = this.center,
            n = this.radius,
            i = this.startAngle,
            a = this.endAngle;
          this.getContainer(t.top).addShape("arc", {
            className: "axis-line",
            attrs: r.mix({
              x: e.x,
              y: e.y,
              r: n,
              startAngle: i,
              endAngle: a
            }, t)
          })
        }, e
      }(a);
    a.Circle = o, t.exports = o
  }, function(t, e, n) {
    var i = n(126);
    t.exports = i
  }, function(t, e, n) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = n(10),
      s = n(39),
      c = n(127),
      u = n(40),
      l = n(110),
      h = n(11),
      f = n(14),
      p = n(23),
      g = n(27),
      d = function(t) {
        function e() {
          return i(this, e), r(this, t.apply(this, arguments))
        }
        return a(e, t), e.prototype._initDefaultCfg = function() {
          t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, this.tickCount =
            5, this.mask = "YYYY-MM-DD"
        }, e.prototype.init = function() {
          var t = this,
            e = this.values;
          h(e, function(n, i) {
            e[i] = t._toTimeStamp(n)
          }), this.sortable && e.sort(function(t, e) {
            return t - e
          }), t.ticks || (t.ticks = this.calculateTicks())
        }, e.prototype.calculateTicks = function() {
          var t = this,
            e = t.tickCount;
          return e ? u({
            maxCount: e,
            data: t.values,
            isRounding: t.isRounding
          }).ticks : t.values
        }, e.prototype.translate = function(t) {
          t = this._toTimeStamp(t);
          var e = this.values.indexOf(t);
          return -1 === e && (e = f(t) && t < this.values.length ? t : NaN), e
        }, e.prototype.scale = function(t) {
          var e = this.rangeMin(),
            n = this.rangeMax(),
            i = this.translate(t),
            r = void 0;
          return r = 1 === this.values.length || isNaN(i) ? i : i > -1 ? i / (this.values.length - 1) : 0, e +
            r * (n - e)
        }, e.prototype.getText = function(t) {
          var e = "",
            n = this.translate(t);
          e = n > -1 ? this.values[n] : t;
          var i = this.formatter;
          return e = parseInt(e, 10), e = i ? i(e) : c.format(e, this.mask)
        }, e.prototype.getTicks = function() {
          var t = this,
            e = this.ticks,
            n = [];
          return h(e, function(e) {
            var i = void 0;
            i = p(e) ? e : {
              text: g(e) ? e : t.getText(e),
              value: t.scale(e),
              tickValue: e
            }, n.push(i)
          }), n
        }, e.prototype._toTimeStamp = function(t) {
          return l.toTimeStamp(t)
        }, e
      }(s);
    o.TimeCat = d, t.exports = d
  }, function(t, e, n) {
    var i;
    ! function(r) {
      "use strict";

      function a(t, e) {
        for (var n = [], i = 0, r = t.length; i < r; i++) n.push(t[i].substr(0, e));
        return n
      }

      function o(t) {
        return function(e, n, i) {
          var r = i[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
          ~r && (e.month = r)
        }
      }

      function s(t, e) {
        for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
        return t
      }
      var c = {},
        u = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        l = /\d\d?/,
        h = /\d{3}/,
        f = /\d{4}/,
        p =
        /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        g = /\[([^]*?)\]/gm,
        d = function() {},
        v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
          "November", "December"
        ],
        m = a(y, 3),
        x = a(v, 3);
      c.i18n = {
        dayNamesShort: x,
        dayNames: v,
        monthNamesShort: m,
        monthNames: y,
        amPm: ["am", "pm"],
        DoFn: function(t) {
          return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10]
        }
      };
      var _ = {
          D: function(t) {
            return t.getDate()
          },
          DD: function(t) {
            return s(t.getDate())
          },
          Do: function(t, e) {
            return e.DoFn(t.getDate())
          },
          d: function(t) {
            return t.getDay()
          },
          dd: function(t) {
            return s(t.getDay())
          },
          ddd: function(t, e) {
            return e.dayNamesShort[t.getDay()]
          },
          dddd: function(t, e) {
            return e.dayNames[t.getDay()]
          },
          M: function(t) {
            return t.getMonth() + 1
          },
          MM: function(t) {
            return s(t.getMonth() + 1)
          },
          MMM: function(t, e) {
            return e.monthNamesShort[t.getMonth()]
          },
          MMMM: function(t, e) {
            return e.monthNames[t.getMonth()]
          },
          YY: function(t) {
            return String(t.getFullYear()).substr(2)
          },
          YYYY: function(t) {
            return s(t.getFullYear(), 4)
          },
          h: function(t) {
            return t.getHours() % 12 || 12
          },
          hh: function(t) {
            return s(t.getHours() % 12 || 12)
          },
          H: function(t) {
            return t.getHours()
          },
          HH: function(t) {
            return s(t.getHours())
          },
          m: function(t) {
            return t.getMinutes()
          },
          mm: function(t) {
            return s(t.getMinutes())
          },
          s: function(t) {
            return t.getSeconds()
          },
          ss: function(t) {
            return s(t.getSeconds())
          },
          S: function(t) {
            return Math.round(t.getMilliseconds() / 100)
          },
          SS: function(t) {
            return s(Math.round(t.getMilliseconds() / 10), 2)
          },
          SSS: function(t) {
            return s(t.getMilliseconds(), 3)
          },
          a: function(t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1]
          },
          A: function(t, e) {
            return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase()
          },
          ZZ: function(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4)
          }
        },
        S = {
          D: [l, function(t, e) {
            t.day = e
          }],
          Do: [new RegExp(l.source + p.source), function(t, e) {
            t.day = parseInt(e, 10)
          }],
          M: [l, function(t, e) {
            t.month = e - 1
          }],
          YY: [l, function(t, e) {
            var n = +("" + (new Date).getFullYear()).substr(0, 2);
            t.year = "" + (e > 68 ? n - 1 : n) + e
          }],
          h: [l, function(t, e) {
            t.hour = e
          }],
          m: [l, function(t, e) {
            t.minute = e
          }],
          s: [l, function(t, e) {
            t.second = e
          }],
          YYYY: [f, function(t, e) {
            t.year = e
          }],
          S: [/\d/, function(t, e) {
            t.millisecond = 100 * e
          }],
          SS: [/\d{2}/, function(t, e) {
            t.millisecond = 10 * e
          }],
          SSS: [h, function(t, e) {
            t.millisecond = e
          }],
          d: [l, d],
          ddd: [p, d],
          MMM: [p, o("monthNamesShort")],
          MMMM: [p, o("monthNames")],
          a: [p, function(t, e, n) {
            var i = e.toLowerCase();
            i === n.amPm[0] ? t.isPm = !1 : i === n.amPm[1] && (t.isPm = !0)
          }],
          ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
            "Z" === e && (e = "+00:00");
            var n, i = (e + "").match(/([\+\-]|\d\d)/gi);
            i && (n = 60 * i[1] + parseInt(i[2], 10), t.timezoneOffset = "+" === i[0] ? n : -n)
          }]
        };
      S.dd = S.d, S.dddd = S.ddd, S.DD = S.D, S.mm = S.m, S.hh = S.H = S.HH = S.h, S.MM = S.M, S.ss = S.s, S.A =
        S.a, c.masks = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS"
        }, c.format = function(t, e, n) {
          var i = n || c.i18n;
          if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(
            t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
          var r = [];
          return e = (e = c.masks[e] || e || c.masks.default).replace(g, function(t, e) {
            return r.push(e), "??"
          }), (e = e.replace(u, function(e) {
            return e in _ ? _[e](t, i) : e.slice(1, e.length - 1)
          })).replace(/\?\?/g, function() {
            return r.shift()
          })
        }, c.parse = function(t, e, n) {
          var i = n || c.i18n;
          if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
          if (e = c.masks[e] || e, t.length > 1e3) return !1;
          var r = !0,
            a = {};
          if (e.replace(u, function(e) {
              if (S[e]) {
                var n = S[e],
                  o = t.search(n[0]);
                ~o ? t.replace(n[0], function(e) {
                  return n[1](a, e, i), t = t.substr(o + e.length), e
                }) : r = !1
              }
              return S[e] ? "" : e.slice(1, e.length - 1)
            }), !r) return !1;
          var o = new Date;
          !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a
            .hour && (a.hour = 0);
          var s;
          return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, s = new Date(Date
            .UTC(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a
              .second || 0, a.millisecond || 0))) : s = new Date(a.year || o.getFullYear(), a.month || 0, a
            .day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), s
        }, void 0 !== t && t.exports ? t.exports = c : void 0 !== (i = function() {
          return c
        }.call(e, n, e, t)) && (t.exports = i)
    }()
  }, function(t, e, n) {
    var i = n(13);
    t.exports = function(t) {
      return i(t, "Date")
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "arc", this.start = [], this.end = [], this.style = {
            stroke: "#999",
            lineWidth: 1
          }
        }, n.render = function(t, e) {
          var n = this,
            i = n.parsePoint(t, n.start),
            a = n.parsePoint(t, n.end);
          if (i && a) {
            var o = t.center,
              s = Math.sqrt((i.x - o.x) * (i.x - o.x) + (i.y - o.y) * (i.y - o.y)),
              c = Math.atan2(i.y - o.y, i.x - o.x),
              u = Math.atan2(a.y - o.y, a.x - o.x),
              l = e.addShape("arc", {
                className: "guide-arc",
                attrs: r.mix({
                  x: o.x,
                  y: o.y,
                  r: s,
                  startAngle: c,
                  endAngle: u
                }, n.style)
              });
            return n.element = l, l
          }
        }, e
      }(a);
    a.Arc = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t, e, n, i) {
      var r = [];
      return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -n, r[
          1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-i)) : "right" === t &&
        "bottom" === e ? (r[0] = Math.floor(-n), r[1] = Math.floor(-i)) : "right" === t && "middle" === e ? (r[
          0] = Math.floor(-n), r[1] = Math.floor(-i / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] =
          Math.floor(-i / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-n / 2), r[1] = Math
          .floor(-i)) : "center" === t && "top" === e ? (r[0] = Math.floor(-n / 2), r[1] = 0) : (r[0] = Math
          .floor(-n / 2), r[1] = Math.floor(-i / 2)), r
    }

    function a(t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
      return t
    }

    function o(t) {
      var e = document.createElement("div");
      return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0]
    }
    var s = n(0),
      c = n(9),
      u = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", this
            .offsetX = null, this.offsetY = null, this.html = null
        }, n.render = function(t, e) {
          var n = this,
            i = n.parsePoint(t, n.position);
          if (i) {
            var c = o(n.html);
            c = a(c, {
              position: "absolute",
              top: Math.floor(i.y) + "px",
              left: Math.floor(i.x) + "px",
              visibility: "hidden"
            });
            var u = e.get("canvas").get("el"),
              l = u.parentNode;
            l = a(l, {
              position: "relative"
            });
            var h = o('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
            l.appendChild(h), h.appendChild(c);
            var f = u.offsetTop,
              p = u.offsetLeft,
              g = n.alignX,
              d = n.alignY,
              v = n.offsetX,
              y = n.offsetY,
              m = r(g, d, s.getWidth(c), s.getHeight(c));
            i.x = i.x + m[0] + p, i.y = i.y + m[1] + f, v && (i.x += v), y && (i.y += y), a(c, {
              top: Math.floor(i.y) + "px",
              left: Math.floor(i.x) + "px",
              visibility: "visible"
            }), n.element = h
          }
        }, n.remove = function() {
          var t = this.element;
          t && t.parentNode && t.parentNode.removeChild(t)
        }, e
      }(c);
    c.Html = u, t.exports = u
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "line", this.start = [], this.end = [], this.style = {
            stroke: "#000",
            lineWidth: 1
          }
        }, n.render = function(t, e) {
          var n = [];
          if (n[0] = this.parsePoint(t, this.start), n[1] = this.parsePoint(t, this.end), n[0] && n[1]) {
            var i = e.addShape("Line", {
              className: "guide-line",
              attrs: r.mix({
                x1: n[0].x,
                y1: n[0].y,
                x2: n[1].x,
                y2: n[1].y
              }, this.style)
            });
            return this.element = i, i
          }
        }, e
      }(a);
    a.Line = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "rect", this.start = [], this.end = [], this.style = {
            fill: "#CCD7EB",
            opacity: .4
          }
        }, n.render = function(t, e) {
          var n = this.parsePoint(t, this.start),
            i = this.parsePoint(t, this.end);
          if (n && i) {
            var a = e.addShape("rect", {
              className: "guide-rect",
              attrs: r.mix({
                x: Math.min(n.x, i.x),
                y: Math.min(n.y, i.y),
                width: Math.abs(i.x - n.x),
                height: Math.abs(n.y - i.y)
              }, this.style)
            });
            return this.element = a, a
          }
        }, e
      }(a);
    a.Rect = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "text", this.position = null, this.content = null, this.style = {
            fill: "#000"
          }, this.offsetX = 0, this.offsetY = 0
        }, n.render = function(t, e) {
          var n = this.position,
            i = this.parsePoint(t, n);
          if (i) {
            var a = this.content,
              o = this.style,
              s = this.offsetX,
              c = this.offsetY;
            s && (i.x += s), c && (i.y += c);
            var u = e.addShape("text", {
              className: "guide-text",
              attrs: r.mix({
                x: i.x,
                y: i.y,
                text: a
              }, o)
            });
            return this.element = u, u
          }
        }, e
      }(a);
    a.Text = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "tag", this.position = null, this.content = null, this.direct = "tl", this
            .autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = {
              padding: 5,
              radius: 2,
              fill: "#1890FF"
            }, this.textStyle = {
              fontSize: 12,
              fill: "#fff",
              textAlign: "center",
              textBaseline: "middle"
            }, this.withPoint = !0, this.pointStyle = {
              fill: "#1890FF",
              r: 3,
              lineWidth: 1,
              stroke: "#fff"
            }
        }, n._getDirect = function(t, e, n, i) {
          var r = this.direct,
            a = this.side,
            o = t.get("canvas"),
            s = o.get("width"),
            c = o.get("height"),
            u = e.x,
            l = e.y,
            h = r[0],
            f = r[1];
          "t" === h && l - a - i < 0 ? h = "b" : "b" === h && l + a + i > c && (h = "t");
          var p = "c" === h ? a : 0;
          return "l" === f && u - p - n < 0 ? f = "r" : "r" === f && u + p + n > s ? f = "l" : "c" === f && (
            n / 2 + u + p > s ? f = "l" : u - n / 2 - p < 0 && (f = "r")), r = h + f
        }, n.render = function(t, e) {
          var n = this.parsePoint(t, this.position);
          if (n) {
            var i = this.content,
              a = this.background,
              o = this.textStyle,
              s = [],
              c = e.addGroup({
                className: "guide-tag"
              });
            if (this.withPoint) {
              var u = c.addShape("Circle", {
                className: "guide-tag-point",
                attrs: r.mix({
                  x: n.x,
                  y: n.y
                }, this.pointStyle)
              });
              s.push(u)
            }
            var l = c.addGroup(),
              h = l.addShape("text", {
                className: "guide-tag-text",
                zIndex: 1,
                attrs: r.mix({
                  x: 0,
                  y: 0,
                  text: i
                }, o)
              });
            s.push(h);
            var f = h.getBBox(),
              p = r.parsePadding(a.padding),
              g = f.width + p[1] + p[3],
              d = f.height + p[0] + p[2],
              v = f.minY - p[0],
              y = f.minX - p[3],
              m = l.addShape("rect", {
                className: "guide-tag-bg",
                zIndex: -1,
                attrs: r.mix({
                  x: y,
                  y: v,
                  width: g,
                  height: d
                }, a)
              });
            s.push(m);
            var x, _ = this.autoAdjust ? this._getDirect(e, n, g, d) : this.direct,
              S = this.side,
              b = n.x + this.offsetX,
              w = n.y + this.offsetY,
              P = r.parsePadding(a.radius);
            "tl" === _ ? (x = [{
              x: g + y - S - 1,
              y: d + v - 1
            }, {
              x: g + y,
              y: d + v - 1
            }, {
              x: g + y,
              y: d + S + v
            }], P[2] = 0, b -= g, w = w - S - d) : "cl" === _ ? (x = [{
              x: g + y - 1,
              y: (d - S) / 2 + v - 1
            }, {
              x: g + y - 1,
              y: (d + S) / 2 + v + 1
            }, {
              x: g + S + y,
              y: d / 2 + v
            }], b = b - g - S, w -= d / 2) : "bl" === _ ? (x = [{
              x: g + y,
              y: -S + v
            }, {
              x: g + y - S - 1,
              y: v + 1
            }, {
              x: g + y,
              y: v + 1
            }], P[1] = 0, b -= g, w += S) : "bc" === _ ? (x = [{
              x: g / 2 + y,
              y: -S + v
            }, {
              x: (g - S) / 2 + y - 1,
              y: v + 1
            }, {
              x: (g + S) / 2 + y + 1,
              y: v + 1
            }], b -= g / 2, w += S) : "br" === _ ? (x = [{
              x: y,
              y: v - S
            }, {
              x: y,
              y: v + 1
            }, {
              x: y + S + 1,
              y: v + 1
            }], P[0] = 0, w += S) : "cr" === _ ? (x = [{
              x: y - S,
              y: d / 2 + v
            }, {
              x: y + 1,
              y: (d - S) / 2 + v - 1
            }, {
              x: y + 1,
              y: (d + S) / 2 + v + 1
            }], b += S, w -= d / 2) : "tr" === _ ? (x = [{
              x: y,
              y: d + S + v
            }, {
              x: y,
              y: d + v - 1
            }, {
              x: S + y + 1,
              y: d + v - 1
            }], P[3] = 0, w = w - d - S) : "tc" === _ && (x = [{
              x: (g - S) / 2 + y - 1,
              y: d + v - 1
            }, {
              x: (g + S) / 2 + y + 1,
              y: d + v - 1
            }, {
              x: g / 2 + y,
              y: d + S + v
            }], b -= g / 2, w = w - d - S);
            var C = l.addShape("Polygon", {
              className: "guide-tag-side",
              zIndex: 0,
              attrs: {
                points: x,
                fill: a.fill
              }
            });
            return s.push(C), m.attr("radius", P), l.moveTo(b - y, w - v), l.sort(), this.element = c, s
          }
        }, e
      }(a);
    a.Tag = o, t.exports = o
  }, function(t, e, n) {
    function i(t) {
      var e = t.getAttr("color");
      if (e) {
        var n = e.getScale(e.type);
        if (n.isLinear) return n
      }
      var i = t.getXScale(),
        r = t.getYScale();
      return r || i
    }

    function r(t, e) {
      var n, r, a = t._getGroupScales();
      if (a.length && l.each(a, function(t) {
          return r = t, !1
        }), r) {
        var o = r.field;
        n = r.getText(e[o])
      } else {
        var s = i(t);
        n = s.alias || s.field
      }
      return n
    }

    function a(t, e) {
      var n = i(t);
      return n.getText(e[n.field])
    }

    function o(t, e) {
      var n = t.getAttr("position").getFields()[0],
        i = t.get("scales")[n];
      return i.getText(e[i.field])
    }

    function s(t, e) {
      var n = -1;
      return l.each(t, function(t, i) {
        if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color)
        return n = i, !1
      }), n
    }

    function c(t) {
      var e = [];
      return l.each(t, function(t) {
        var n = s(e, t); - 1 === n ? e.push(t) : e[n] = t
      }), e
    }

    function u(t, e) {
      return JSON.stringify(t) === JSON.stringify(e)
    }
    var l = n(0),
      h = n(1),
      f = n(136),
      p = n(26);
    h.tooltip = l.deepMix({
      triggerOn: ["touchstart", "touchmove"],
      alwaysShow: !1,
      showTitle: !1,
      showCrosshairs: !1,
      crosshairsStyle: {
        stroke: "rgba(0, 0, 0, 0.25)",
        lineWidth: 1
      },
      showTooltipMarker: !0,
      background: {
        radius: 1,
        fill: "rgba(0, 0, 0, 0.65)",
        padding: [3, 5]
      },
      titleStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "top"
      },
      nameStyle: {
        fontSize: 12,
        fill: "rgba(255, 255, 255, 0.65)",
        textAlign: "start",
        textBaseline: "middle"
      },
      valueStyle: {
        fontSize: 12,
        fill: "#fff",
        textAlign: "start",
        textBaseline: "middle"
      },
      showItemMarker: !0,
      itemMarkerStyle: {
        radius: 3,
        symbol: "circle",
        lineWidth: 1,
        stroke: "#fff"
      },
      layout: "horizontal"
    }, h.tooltip || {});
    var g = function() {
      function t(t) {
        this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, l.mix(
          this, t);
        var e = this.chart;
        this.canvasDom = e.get("canvas").get("el")
      }
      var e = t.prototype;
      return e._setCrosshairsCfg = function() {
        var t = this.chart,
          e = l.mix({}, h.tooltip),
          n = t.get("geoms"),
          i = [];
        l.each(n, function(t) {
          var e = t.get("type"); - 1 === i.indexOf(e) && i.push(e)
        });
        var r = t.get("coord").type;
        return !n.length || "cartesian" !== r && "rect" !== r || 1 === i.length && -1 !== ["line", "area",
          "path", "point"
        ].indexOf(i[0]) && l.mix(e, {
          showCrosshairs: !0
        }), e
      }, e._getMaxLength = function(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.layout,
          i = e.plotRange;
        return "horizontal" === n ? i.br.x - i.bl.x : i.bl.y - i.tr.y
      }, e.render = function() {
        var t = this;
        if (!t.tooltip) {
          var e = t.chart,
            n = e.get("canvas"),
            i = e.get("frontPlot").addGroup({
              className: "tooltipContainer",
              zIndex: 10
            }),
            r = e.get("backPlot").addGroup({
              className: "tooltipContainer"
            }),
            a = e.get("plotRange"),
            o = e.get("coord"),
            s = t._setCrosshairsCfg(),
            c = t.cfg;
          (c = l.deepMix({
            plotRange: a,
            frontPlot: i,
            backPlot: r,
            canvas: n,
            fixed: o.transposed || o.isPolar
          }, s, c)).maxLength = t._getMaxLength(c), this.cfg = c;
          var u = new f(c);
          t.tooltip = u, t.bindEvents()
        }
      }, e.clear = function() {
        var t = this.tooltip;
        t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, this
          .unBindEvents()
      }, e._getTooltipMarkerStyle = function(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.type,
          i = e.items,
          r = this.cfg;
        if ("rect" === n) {
          var a, o, s, c, u = this.chart,
            h = u.get("plotRange"),
            f = h.tl,
            p = h.br,
            g = u.get("coord"),
            d = i[0],
            v = i[i.length - 1],
            y = d.width;
          g.transposed ? (a = f.x, o = v.y - .75 * y, s = p.x - f.x, c = d.y - v.y + 1.5 * y) : (a = d.x -
            .75 * y, o = f.y, s = v.x - d.x + 1.5 * y, c = p.y - f.y), t.style = l.mix({
            x: a,
            y: o,
            width: s,
            height: c,
            fill: "#CCD6EC",
            opacity: .3
          }, r.tooltipMarkerStyle)
        } else t.style = l.mix({
          radius: 4,
          fill: "#fff",
          lineWidth: 2
        }, r.tooltipMarkerStyle);
        return t
      }, e._setTooltip = function(t, e, n) {
        void 0 === n && (n = {});
        var i = this._lastActive,
          r = this.tooltip,
          a = this.cfg;
        if (e = c(e), a.onShow && a.onShow({
            x: t.x,
            y: t.y,
            tooltip: r,
            items: e,
            tooltipMarkerCfg: n
          }), !u(i, e)) {
          if (this._lastActive = e, (a.onChange || l.isFunction(a.custom)) && (a.onChange || a.custom)({
              x: t.x,
              y: t.y,
              tooltip: r,
              items: e,
              tooltipMarkerCfg: n
            }), !a.custom) {
            var o = e[0],
              s = o.title || o.name;
            r.setContent(s, e)
          }
          r.setPosition(e);
          var h = n.items;
          a.showTooltipMarker && h.length ? (n = this._getTooltipMarkerStyle(n), r.setMarkers(n)) : r
            .clearMarkers(), r.show()
        }
      }, e.showTooltip = function(t) {
        var e, n, i = this,
          s = i.chart,
          c = [],
          u = [],
          f = i.cfg;
        f.showItemMarker && (n = f.itemMarkerStyle);
        var p = s.get("geoms"),
          g = s.get("coord");
        if (l.each(p, function(i) {
            if (i.get("visible")) {
              var s = i.get("type"),
                f = i.getSnapRecords(t);
              l.each(f, function(t) {
                if (t.x && t.y) {
                  var f = t.x,
                    p = t.y,
                    d = t._origin,
                    v = t.color,
                    y = {
                      x: f,
                      y: l.isArray(p) ? p[1] : p,
                      color: v || h.defaultColor,
                      origin: d,
                      name: r(i, d),
                      value: a(i, d),
                      title: o(i, d)
                    };
                  n && (y.marker = l.mix({
                    fill: v || h.defaultColor
                  }, n)), u.push(y), -1 !== ["line", "area", "path"].indexOf(s) ? (e = "circle", c
                    .push(y)) : "interval" !== s || "cartesian" !== g.type && "rect" !== g.type || (
                    e = "rect", y.width = i.getSize(t._origin), c.push(y))
                }
              })
            }
          }), u.length) {
          var d = {
            items: c,
            type: e
          };
          i._setTooltip(t, u, d)
        } else i.hideTooltip()
      }, e.hideTooltip = function() {
        var t = this.cfg;
        this._lastActive = null;
        var e = this.tooltip;
        e && (e.hide(), t.onHide && t.onHide({
          tooltip: e
        }), this.chart.get("canvas").draw())
      }, e.handleShowEvent = function(t) {
        if (this.enable) {
          var e = this.chart,
            n = e.get("plotRange"),
            i = l.createEvent(t, e);
          if (p.isPointInPlot(i, n) || this.cfg.alwaysShow) {
            var r = this.timeStamp,
              a = +new Date;
            a - r > 16 && (this.showTooltip(i), this.timeStamp = a)
          } else this.hideTooltip()
        }
      }, e.handleHideEvent = function() {
        this.enable && this.hideTooltip()
      }, e.handleDocEvent = function(t) {
        if (this.enable) {
          var e = this.canvasDom;
          t.target !== e && this.hideTooltip()
        }
      }, e._handleEvent = function(t, e, n) {
        var i = this.canvasDom;
        l.each([].concat(t), function(t) {
          "bind" === n ? l.addEventListener(i, t, e) : l.removeEventListener(i, t, e)
        })
      }, e.bindEvents = function() {
        var t = this.cfg,
          e = t.triggerOn,
          n = t.triggerOff,
          i = t.alwaysShow,
          r = l.wrapBehavior(this, "handleShowEvent"),
          a = l.wrapBehavior(this, "handleHideEvent");
        if (e && this._handleEvent(e, r, "bind"), n && this._handleEvent(n, a, "bind"), !i) {
          var o = l.wrapBehavior(this, "handleDocEvent");
          l.isBrowser && l.addEventListener(document, "touchstart", o)
        }
      }, e.unBindEvents = function() {
        var t = this.cfg,
          e = t.triggerOn,
          n = t.triggerOff,
          i = t.alwaysShow,
          r = l.getWrapBehavior(this, "handleShowEvent"),
          a = l.getWrapBehavior(this, "handleHideEvent");
        if (e && this._handleEvent(e, r, "unBind"), n && this._handleEvent(n, a, "unBind"), !i) {
          var o = l.getWrapBehavior(this, "handleDocEvent");
          l.isBrowser && l.removeEventListener(document, "touchstart", o)
        }
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new g({
          chart: t
        });
        t.set("tooltipController", e), t.tooltip = function(t, n) {
          return l.isObject(t) && (n = t, t = !0), e.enable = t, n && (e.cfg = n), this
        }
      },
      afterGeomDraw: function(t) {
        var e = t.get("tooltipController");
        e.render(), t.showTooltip = function(t) {
          return e.showTooltip(t), this
        }, t.hideTooltip = function() {
          return e.hideTooltip(), this
        }
      },
      clearInner: function(t) {
        t.get("tooltipController").clear()
      }
    }
  }, function(t, e, n) {
    var i = n(0),
      r = n(111),
      a = n(112),
      o = function() {
        function t(t) {
          i.deepMix(this, this.getDefaultCfg(), t);
          var e = this.frontPlot,
            n = this.plotRange;
          if (!this.custom) {
            var r = new a(i.mix({
              parent: e,
              zIndex: 3
            }, t));
            this.container = r, this.fixed || (this.tooltipArrow = e.addShape("Polygon", {
              className: "tooltip-arrow",
              visible: !1,
              zIndex: 2,
              attrs: {
                points: [],
                fill: this.background.fill
              }
            }))
          }
          if (this.showCrosshairs) {
            var o = this.crosshairsStyle,
              s = e.addShape("Line", {
                className: "tooltip-crosshairs",
                zIndex: 0,
                visible: !1,
                attrs: i.mix({
                  x1: 0,
                  y1: n.bl.y,
                  x2: 0,
                  y2: n.tl.y
                }, o)
              });
            this.crosshairsShape = s
          }
          e.sort()
        }
        var e = t.prototype;
        return e.getDefaultCfg = function() {
          return {
            showCrosshairs: !1,
            crosshairsStyle: {
              stroke: "rgba(0, 0, 0, 0.25)",
              lineWidth: 1
            },
            background: null,
            layout: "horizontal",
            offsetX: 0,
            offsetY: 0
          }
        }, e.setContent = function(t, e) {
          this.title = t, this.items = e;
          var n = this.container;
          n.setTitle(t), n.setItems(e)
        }, e.setPosition = function(t) {
          var e = this.container,
            n = this.plotRange,
            r = this.offsetX,
            a = this.offsetY,
            o = this.crosshairsShape,
            s = this.fixed,
            c = this.tooltipArrow;
          if (o && o.moveTo(t[0].x, 0), e) {
            var u = e.container.getBBox(),
              l = u.minX,
              h = u.minY,
              f = u.width,
              p = u.height,
              g = n.tl,
              d = n.tr,
              v = 0,
              y = g.y - p - 4 + a;
            if (s) v = (g.x + d.x) / 2 - f / 2 + r;
            else {
              var m;
              if (m = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (v = m - f / 2 + r) < g.x && (
                  v = g.x), v + f > d.x && (v = d.x - f), c) {
                c.attr("points", [{
                  x: m - 3,
                  y: g.y - 4 + a
                }, {
                  x: m + 3,
                  y: g.y - 4 + a
                }, {
                  x: m,
                  y: g.y + a
                }]);
                var x = e.backShape,
                  _ = i.parsePadding(x.attr("radius"));
                m === g.x ? (_[3] = 0, c.attr("points", [{
                  x: g.x,
                  y: g.y + a
                }, {
                  x: g.x,
                  y: g.y - 4 + a
                }, {
                  x: g.x + 4,
                  y: g.y - 4 + a
                }])) : m === d.x && (_[2] = 0, c.attr("points", [{
                  x: d.x,
                  y: g.y + a
                }, {
                  x: d.x - 4,
                  y: g.y - 4 + a
                }, {
                  x: d.x,
                  y: g.y - 4 + a
                }])), x.attr("radius", _)
              }
            }
            e.moveTo(v - l, y - h)
          }
        }, e.setMarkers = function(t) {
          void 0 === t && (t = {});
          var e = this,
            n = t,
            a = n.items,
            o = n.style,
            s = n.type,
            c = e._getMarkerGroup(s);
          if ("circle" === s)
            for (var u = 0, l = a.length; u < l; u++) {
              var h = a[u],
                f = new r({
                  className: "tooltip-circle-marker",
                  attrs: i.mix({
                    x: h.x,
                    y: h.y,
                    stroke: h.color
                  }, o)
                });
              c.add(f)
            } else c.addShape("rect", {
              className: "tooltip-rect-marker",
              attrs: o
            })
        }, e.clearMarkers = function() {
          var t = this.markerGroup;
          t && t.clear()
        }, e.show = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            i = this.tooltipArrow,
            r = this.canvas;
          t && t.show(), e && e.show(), n && n.show(), i && i.show(), r.draw()
        }, e.hide = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            i = this.tooltipArrow;
          t && t.hide(), e && e.hide(), n && n.hide(), i && i.hide()
        }, e.destroy = function() {
          var t = this.crosshairsShape,
            e = this.markerGroup,
            n = this.container,
            i = this.tooltipArrow;
          t && t.remove(!0), e && e.remove(!0), n && n.clear(), i && i.remove(!0), this.destroyed = !0
        }, e._getMarkerGroup = function(t) {
          var e = this.markerGroup;
          return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({
            zIndex: 1
          }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), e
        }, t
      }();
    t.exports = o
  }, function(t, e, n) {
    var i = n(0),
      r = n(9),
      a = n(1);
    a.guide = i.deepMix({
      line: {
        style: {
          stroke: "#a3a3a3",
          lineWidth: 1
        },
        top: !0
      },
      text: {
        style: {
          fill: "#787878",
          textAlign: "center",
          textBaseline: "middle"
        },
        offsetX: 0,
        offsetY: 0,
        top: !0
      },
      rect: {
        style: {
          fill: "#fafafa"
        },
        top: !1
      },
      arc: {
        style: {
          stroke: "#a3a3a3"
        },
        top: !0
      },
      html: {
        offsetX: 0,
        offsetY: 0,
        alignX: "center",
        alignY: "middle"
      },
      tag: {
        top: !0,
        offsetX: 0,
        offsetY: 0,
        side: 4,
        background: {
          padding: 5,
          radius: 2,
          fill: "#1890FF"
        },
        textStyle: {
          fontSize: 12,
          fill: "#fff",
          textAlign: "center",
          textBaseline: "middle"
        }
      },
      point: {
        top: !0,
        offsetX: 0,
        offsetY: 0,
        style: {
          fill: "#fff",
          r: 3,
          lineWidth: 2,
          stroke: "#1890ff"
        }
      }
    }, a.guide || {});
    var o = function() {
      function t(t) {
        this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], i.mix(this, t)
      }
      var e = t.prototype;
      return e._toString = function(t) {
        return i.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString()
      }, e._getId = function(t, e) {
        var n = e.id;
        if (!n) {
          var i = e.type;
          n = "arc" === i || "line" === i || "rect" === i ? this._toString(e.start) + "-" + this._toString(e
            .end) : this._toString(e.position)
        }
        return n
      }, e.paint = function(t) {
        var e = this,
          n = e.chart,
          r = e.guides,
          a = e.xScale,
          o = e.yScales,
          s = [];
        i.each(r, function(i, r) {
          i.xScale = a, i.yScales = o;
          var c;
          "regionFilter" === i.type ? i.chart = n : c = i.top ? e.frontPlot : e.backPlot, i.coord = t, i
            .container = c, i.canvas = n.get("canvas");
          var u = i.render(t, c);
          if (u) {
            var l = e._getId(u, i);
            [].concat(u).forEach(function(t) {
              t._id = t.get("className") + "-" + l, t.set("index", r), s.push(t)
            })
          }
        }), e.guideShapes = s
      }, e.clear = function() {
        return this.reset(), this.guides = [], this
      }, e.reset = function() {
        var t = this.guides;
        i.each(t, function(t) {
          t.remove()
        })
      }, e._createGuide = function(t, e) {
        var n = i.upperFirst(t),
          o = new r[n](i.deepMix({}, a.guide[t], e));
        return this.guides.push(o), o
      }, e.line = function(t) {
        return void 0 === t && (t = {}), this._createGuide("line", t)
      }, e.text = function(t) {
        return void 0 === t && (t = {}), this._createGuide("text", t)
      }, e.arc = function(t) {
        return void 0 === t && (t = {}), this._createGuide("arc", t)
      }, e.html = function(t) {
        return void 0 === t && (t = {}), this._createGuide("html", t)
      }, e.rect = function(t) {
        return void 0 === t && (t = {}), this._createGuide("rect", t)
      }, e.tag = function(t) {
        return void 0 === t && (t = {}), this._createGuide("tag", t)
      }, e.point = function(t) {
        return void 0 === t && (t = {}), this._createGuide("point", t)
      }, e.regionFilter = function(t) {
        return void 0 === t && (t = {}), this._createGuide("regionFilter", t)
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new o({
          frontPlot: t.get("frontPlot").addGroup({
            zIndex: 20,
            className: "guideContainer"
          }),
          backPlot: t.get("backPlot").addGroup({
            className: "guideContainer"
          })
        });
        t.set("guideController", e), t.guide = function() {
          return e
        }
      },
      afterGeomDraw: function(t) {
        var e = t.get("guideController");
        if (e.guides.length) {
          var n = t.getXScale(),
            i = t.getYScales(),
            r = t.get("coord");
          e.xScale = n, e.yScales = i, e.chart = t, e.paint(r)
        }
      },
      clear: function(t) {
        t.get("guideController").clear()
      },
      repaint: function(t) {
        t.get("guideController").reset()
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      var n = 0;
      switch (e = r.parsePadding(e), t) {
        case "top":
          n = e[0];
          break;
        case "right":
          n = e[1];
          break;
        case "bottom":
          n = e[2];
          break;
        case "left":
          n = e[3]
      }
      return n
    }
    var r = n(0),
      a = n(112),
      o = n(1),
      s = {
        itemMarginBottom: 12,
        itemGap: 10,
        showTitle: !1,
        titleStyle: {
          fontSize: 12,
          fill: "#808080",
          textAlign: "start",
          textBaseline: "top"
        },
        nameStyle: {
          fill: "#808080",
          fontSize: 12,
          textAlign: "start",
          textBaseline: "middle"
        },
        valueStyle: {
          fill: "#000000",
          fontSize: 12,
          textAlign: "start",
          textBaseline: "middle"
        },
        unCheckStyle: {
          fill: "#bfbfbf"
        },
        itemWidth: "auto",
        wordSpace: 6,
        selectedMode: "multiple"
      };
    o.legend = r.deepMix({
      right: r.mix({
        position: "right",
        layout: "vertical"
      }, s),
      left: r.mix({
        position: "left",
        layout: "vertical"
      }, s),
      top: r.mix({
        position: "top",
        layout: "horizontal"
      }, s),
      bottom: r.mix({
        position: "bottom",
        layout: "horizontal"
      }, s)
    }, o.legend || {});
    var c = function() {
      function t(t) {
        this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t);
        var e = this.chart;
        this.canvasDom = e.get("canvas").get("el"), this.clear()
      }
      var e = t.prototype;
      return e.addLegend = function(t, e, n) {
        var i = this,
          r = i.legendCfg,
          a = t.field,
          o = r[a];
        if (!1 === o) return null;
        if (o && o.custom) i.addCustomLegend(a);
        else {
          var s = r.position || i.position;
          o && o.position && (s = o.position), t.isCategory && i._addCategoryLegend(t, e, s, n)
        }
      }, e.addCustomLegend = function(t) {
        var e = this,
          n = e.legendCfg;
        t && n[t] && (n = n[t]);
        var i = n.position || e.position,
          s = e.legends;
        s[i] = s[i] || [];
        var c = n.items;
        if (!c) return null;
        var u = e.container;
        r.each(c, function(t) {
          r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
            symbol: t.marker || "circle",
            fill: t.fill,
            radius: 3
          }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value
        });
        var l = new a(r.deepMix({}, o.legend[i], n, {
          maxLength: e._getMaxLength(i),
          items: c,
          parent: u
        }));
        s[i].push(l)
      }, e.clear = function() {
        var t = this.legends;
        r.each(t, function(t) {
          r.each(t, function(t) {
            t.clear()
          })
        }), this.legends = {}, this.unBindEvents()
      }, e._isFiltered = function(t, e, n) {
        var i = !1;
        return r.each(e, function(e) {
          if (i = i || t.getText(e) === t.getText(n)) return !1
        }), i
      }, e._getMaxLength = function(t) {
        var e = this.chart,
          n = r.parsePadding(e.get("appendPadding"));
        return "right" === t || "left" === t ? e.get("height") - (n[0] + n[2]) : e.get("width") - (n[1] + n[
          3])
      }, e._addCategoryLegend = function(t, e, n, i) {
        var s = this,
          c = s.legendCfg,
          u = s.legends,
          l = s.container,
          h = s.chart,
          f = t.field;
        u[n] = u[n] || [];
        var p = "circle";
        c[f] && c[f].marker ? p = c[f].marker : c.marker && (p = c.marker), r.each(e, function(e) {
          r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, i && (e.checked = s
            ._isFiltered(t, i, e.dataValue))
        }), h.get("legendItems")[f] = e;
        var g = r.deepMix({}, o.legend[n], c[f] || c, {
          maxLength: s._getMaxLength(n),
          items: e,
          field: f,
          filterVals: i,
          parent: l
        });
        g.showTitle && r.deepMix(g, {
          title: t.alias || t.field
        });
        var d = new a(g);
        return u[n].push(d), d
      }, e._alignLegend = function(t, e, n) {
        var i = this,
          a = i.plotRange,
          o = a.tl,
          s = a.bl,
          c = i.chart,
          u = t.offsetX || 0,
          l = t.offsetY || 0,
          h = c.get("width"),
          f = c.get("height"),
          p = r.parsePadding(c.get("appendPadding")),
          g = t.getHeight(),
          d = t.getWidth(),
          v = 0,
          y = 0;
        if ("left" === n || "right" === n) {
          var m = t.verticalAlign || "middle",
            x = Math.abs(o.y - s.y);
          v = "left" === n ? p[3] : h - d - p[1], y = (x - g) / 2 + o.y, "top" === m ? y = o.y :
            "bottom" === m && (y = s.y - g), e && (y = e.get("y") - g - 12)
        } else {
          var _ = t.align || "left";
          if (v = p[3], "center" === _ ? v = h / 2 - d / 2 : "right" === _ && (v = h - (d + p[1])), y =
            "top" === n ? p[0] + Math.abs(t.container.getBBox().minY) : f - g, e) {
            var S = e.getWidth();
            v = e.x + S + 12
          }
        }
        "bottom" === n && l > 0 && (l = 0), "right" === n && u > 0 && (u = 0), t.moveTo(v + u, y + l)
      }, e.alignLegends = function() {
        var t = this,
          e = t.legends;
        return r.each(e, function(e, n) {
          r.each(e, function(i, r) {
            var a = e[r - 1];
            t._alignLegend(i, a, n)
          })
        }), t
      }, e.handleEvent = function(t) {
        var e = this,
          n = e.chart,
          i = r.createEvent(t, n),
          a = function(t, n) {
            var i = null,
              a = e.legends;
            return r.each(a, function(e) {
              r.each(e, function(e) {
                var a = e.itemsGroup,
                  o = e.legendHitBoxes,
                  s = a.get("children");
                if (s.length) {
                  var c = e.x,
                    u = e.y;
                  r.each(o, function(r, a) {
                    if (t >= r.x + c && t <= r.x + r.width + c && n >= r.y + u && n <= r
                      .height + r.y + u) return i = {
                      clickedItem: s[a],
                      clickedLegend: e
                    }, !1
                  })
                }
              })
            }), i
          }(i.x, i.y);
        if (a && !1 !== a.clickedLegend.clickable) {
          var o = a.clickedItem,
            s = a.clickedLegend;
          if (s.onClick) t.clickedItem = o, s.onClick(t);
          else if (!s.custom) {
            var c = o.get("checked"),
              u = o.get("dataValue"),
              l = s.filterVals,
              h = s.field;
            "single" === s.selectedMode ? n.filter(h, function(t) {
              return t === u
            }) : (c ? r.Array.remove(l, u) : l.push(u), n.filter(h, function(t) {
              return -1 !== l.indexOf(t)
            })), n.repaint()
          }
        }
      }, e.bindEvents = function() {
        var t = this.legendCfg.triggerOn || "touchstart",
          e = r.wrapBehavior(this, "handleEvent");
        r.addEventListener(this.canvasDom, t, e)
      }, e.unBindEvents = function() {
        var t = this.legendCfg.triggerOn || "touchstart",
          e = r.getWrapBehavior(this, "handleEvent");
        r.removeEventListener(this.canvasDom, t, e)
      }, t
    }();
    t.exports = {
      init: function(t) {
        var e = new c({
          container: t.get("backPlot"),
          plotRange: t.get("plotRange"),
          chart: t
        });
        t.set("legendController", e), t.legend = function(t, n) {
          var i = e.legendCfg;
          return e.enable = !0, r.isBoolean(t) ? (e.enable = t, i = n || {}) : r.isObject(t) ? i = t : i[
            t] = n, e.legendCfg = i, this
        }
      },
      beforeGeomDraw: function(t) {
        var e = t.get("legendController");
        if (!e.enable) return null;
        var n = e.legendCfg;
        if (n && n.custom) e.addCustomLegend();
        else {
          var a = t.getLegendItems(),
            o = t.get("scales"),
            s = t.get("filters");
          r.each(a, function(t, n) {
            var i, r = o[n],
              a = r.values;
            i = s && s[n] ? a.filter(s[n]) : a.slice(0), e.addLegend(r, t, i)
          })
        }
        n && !1 !== n.clickable && e.bindEvents();
        var c = e.legends,
          u = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        r.each(c, function(e, n) {
          var a = 0;
          r.each(e, function(t) {
            var e = t.getWidth(),
              i = t.getHeight();
            "top" === n || "bottom" === n ? (a = Math.max(a, i), t.offsetY > 0 && (a += t
              .offsetY)) : (a = Math.max(a, e), t.offsetX > 0 && (a += t.offsetX))
          }), u[n] = a + i(n, t.get("appendPadding"))
        }), t.set("legendRange", u)
      },
      afterGeomDraw: function(t) {
        t.get("legendController").alignLegends()
      },
      clearInner: function(t) {
        t.get("legendController").clear(), t.set("legendRange", null)
      }
    }
  }, function(t, e, n) {
    function i(t, e) {
      var n = {};
      for (var i in e) f.isNumber(t[i]) && t[i] !== e[i] ? n[i] = e[i] : f.isArray(t[i]) && JSON.stringify(t[
        i]) !== JSON.stringify(e[i]) && (n[i] = e[i]);
      return n
    }

    function r(t, e, n) {
      var i, r = t.get("type"),
        a = "geom" + n + "-" + r,
        o = t.getXScale(),
        s = t.getYScale(),
        c = o.field || "x",
        u = s.field || "y",
        l = e[u];
      i = o.isIdentity ? o.value : e[c], a += "interval" === r || "schema" === r ? "-" + i : "line" === r ||
        "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + i : "-" + i + "-" + l;
      var h = t._getGroupScales();
      return f.each(h, function(t) {
        var n = t.field;
        "identity" !== t.type && (a += "-" + e[n])
      }), a
    }

    function a(t, e, n) {
      var i = [];
      return f.each(t, function(t, a) {
        var o = t.get("container").get("children"),
          s = t.get("type"),
          c = f.isNil(t.get("animateCfg")) ? l(s, e) : t.get("animateCfg");
        !1 !== c && f.each(o, function(e, o) {
          e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", n), e
            .set("animateCfg", c), e.set("index", o), i.push(e))
        }), t.set("shapes", o)
      }), i
    }

    function o(t) {
      for (var e = {}, n = 0, i = t.length; n < i; n++) {
        var r = t[n];
        if (r._id && !r.isClip) {
          var a = r._id;
          e[a] = {
            _id: a,
            type: r.get("type"),
            attrs: f.mix({}, r._attrs.attrs),
            className: r.get("className"),
            geomType: r.get("className"),
            index: r.get("index"),
            coord: r.get("coord"),
            animateCfg: r.get("animateCfg")
          }
        }
      }
      return e
    }

    function s(t, e, n, i) {
      return f.isFunction(i) ? i : f.isString(i) ? v.Action[i] : v.getAnimation(t, e, n)
    }

    function c(t, e, n) {
      if (!1 === n || f.isObject(n) && !1 === n[e]) return !1;
      var i = v.getAnimateCfg(t, e);
      return n && n[e] ? f.deepMix({}, i, n[e]) : i
    }

    function u(t, e, n) {
      var r, a, o = [],
        u = [];
      f.each(e, function(e) {
        var n = t[e._id];
        n ? (e.set("cacheShape", n), o.push(e), delete t[e._id]) : u.push(e)
      }), f.each(t, function(t) {
        var e = t.className,
          i = t.coord,
          o = t._id,
          u = t.attrs,
          l = t.index,
          h = t.type;
        if (!1 === (a = c(e, "leave", t.animateCfg))) return !0;
        if (r = s(e, i, "leave", a.animation), f.isFunction(r)) {
          var p = n.addShape(h, {
            attrs: u,
            index: l,
            canvas: n,
            className: e
          });
          p._id = o, r(p, a, i)
        }
      }), f.each(o, function(t) {
        var e = t.get("className");
        if (!1 === (a = c(e, "update", t.get("animateCfg")))) return !0;
        var n = t.get("coord"),
          o = t.get("cacheShape").attrs,
          u = i(o, t._attrs.attrs);
        Object.keys(u).length && (r = s(e, n, "update", a.animation), f.isFunction(r) ? r(t, a, n) : (t
          .attr(o), t.animate().to({
            attrs: u,
            duration: a.duration,
            easing: a.easing,
            delay: a.delay
          }).onEnd(function() {
            t.set("cacheShape", null)
          })))
      }), f.each(u, function(t) {
        var e = t.get("className"),
          n = t.get("coord");
        if (!1 === (a = c(e, "enter", t.get("animateCfg")))) return !0;
        if (r = s(e, n, "enter", a.animation), f.isFunction(r))
          if ("interval" === e && n.isPolar && n.transposed) {
            var i = t.get("index"),
              u = o[i - 1];
            r(t, a, u)
          } else r(t, a, n)
      })
    }

    function l(t, e) {
      if (!t) return null;
      var n = e.get("animate");
      return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(n) ? n[t] : !1 !== n && null
    }
    var h, f = n(0),
      p = n(25),
      g = n(140),
      d = n(141),
      v = n(113),
      y = n(143),
      m = n(144),
      x = n(15);
    p.prototype.animate = function() {
      var t = f.mix({}, this.get("attrs"));
      return new d(this, t, h)
    }, x.prototype.animate = function(t) {
      return this.set("animate", t), this
    }, v.Action = y, v.defaultCfg = {
      interval: {
        enter: function(t) {
          return t.isPolar && t.transposed ? function(t) {
            t.set("zIndex", -1), t.get("parent").sort()
          } : y.fadeIn
        }
      },
      area: {
        enter: function(t) {
          return t.isPolar ? null : y.fadeIn
        }
      },
      line: {
        enter: function(t) {
          return t.isPolar ? null : y.fadeIn
        }
      },
      path: {
        enter: function(t) {
          return t.isPolar ? null : y.fadeIn
        }
      }
    };
    var _ = {
      line: function(t) {
        return t.isPolar ? m.groupScaleInXY : m.groupWaveIn
      },
      area: function(t) {
        return t.isPolar ? m.groupScaleInXY : m.groupWaveIn
      },
      path: function(t) {
        return t.isPolar ? m.groupScaleInXY : m.groupWaveIn
      },
      point: function() {
        return m.shapesScaleInXY
      },
      interval: function(t) {
        var e;
        return t.isPolar ? (e = m.groupScaleInXY, t.transposed && (e = m.groupWaveIn)) : e = t.transposed ?
          m.groupScaleInX : m.groupScaleInY, e
      },
      schema: function() {
        return m.groupWaveIn
      }
    };
    t.exports = {
      afterCanvasInit: function() {
        (h = new g).play()
      },
      beforeCanvasDraw: function(t) {
        if (!1 !== t.get("animate")) {
          var e = t.get("isUpdate"),
            n = t.get("canvas"),
            i = t.get("coord"),
            r = t.get("geoms"),
            h = n.get("caches") || [];
          0 === h.length && (e = !1);
          var p = a(r, t, i),
            g = t.get("axisController"),
            d = g.frontPlot,
            y = g.backPlot,
            x = d.get("children").concat(y.get("children")),
            S = [];
          t.get("guideController") && (S = t.get("guideController").guideShapes);
          var b = [];
          if (x.concat(S).forEach(function(e) {
              var n = l(e.get("className"), t);
              e.set("coord", i), e.set("animateCfg", n), b.push(e), p.push(e)
            }), n.set("caches", o(p)), e) u(h, p, n);
          else {
            var w, P;
            f.each(r, function(e) {
              var n = e.get("type"),
                r = f.isNil(e.get("animateCfg")) ? l(n, t) : e.get("animateCfg");
              if (!1 !== r)
                if (w = c(n, "appear", r), P = s(n, i, "appear", w.animation), f.isFunction(P)) {
                  var a = e.get("shapes");
                  f.each(a, function(t) {
                    P(t, w, i)
                  })
                } else if (_[n]) {
                P = m[w.animation] || _[n](i);
                var o = e.getYScale(),
                  u = i.convertPoint({
                    x: 0,
                    y: o.scale(e.getYMinValue())
                  }),
                  h = e.get("container");
                P && P(h, w, i, u)
              }
            }), f.each(b, function(t) {
              var e = t.get("animateCfg"),
                n = t.get("className");
              if (e && e.appear) {
                var r = v.getAnimateCfg(n, "appear"),
                  a = f.deepMix({}, r, e.appear),
                  o = s(n, i, "appear", a.animation);
                f.isFunction(o) && o(t, a, i)
              }
            })
          }
        }
      },
      afterCanvasDestroyed: function() {
        h.stop()
      }
    }
  }, function(t, e, n) {
    var i = n(41).requestAnimationFrame,
      r = "object" == typeof performance && performance.now ? performance : Date,
      a = function() {
        function t() {
          this.anims = [], this.time = null, this.playing = !1, this.canvas = []
        }
        var e = t.prototype;
        return e.play = function() {
          function t() {
            e.playing && (i(t), e.update())
          }
          var e = this;
          e.time = r.now(), e.playing = !0, i(t)
        }, e.stop = function() {
          this.playing = !1, this.time = null, this.canvas = []
        }, e.update = function() {
          var t = r.now();
          this.canvas = [];
          for (var e = 0; e < this.anims.length; e++) {
            var n = this.anims[e];
            if (!(t < n.startTime || n.hasEnded)) {
              var i = n.shape;
              if (i.get("destroyed")) this.anims.splice(e, 1), e--;
              else {
                var a = n.startState,
                  o = n.endState,
                  s = n.interpolate,
                  c = n.duration;
                t >= n.startTime && !n.hasStarted && (n.hasStarted = !0, n.onStart && n.onStart());
                var u = (t - n.startTime) / c;
                if (u = Math.max(0, Math.min(u, 1)), u = n.easing(u), n.onFrame) n.onFrame(u);
                else
                  for (var l in s) {
                    var h = (0, s[l])(u),
                      f = void 0;
                    if ("points" === l) {
                      f = [];
                      for (var p = Math.max(a.points.length, o.points.length), g = 0; g < p; g += 2) f.push({
                        x: h[g],
                        y: h[g + 1]
                      })
                    } else f = h;
                    i._attrs.attrs[l] = f
                  }
                var d = i.get("canvas"); - 1 === this.canvas.indexOf(d) && this.canvas.push(d), n.onUpdate &&
                  n.onUpdate(u), t >= n.endTime && !n.hasEnded && (n.hasEnded = !0, n.onEnd && n.onEnd()),
                  1 === u && (this.anims.splice(e, 1), e--)
              }
            }
          }
          this.canvas.map(function(t) {
            return t.draw(), t
          }), this.time = r.now()
        }, t
      }();
    t.exports = a
  }, function(t, e, n) {
    function i(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && (e.push(t[n].x), e.push(t[n].y));
      return e
    }

    function r(t, e) {
      return t = +t, e -= t,
        function(n) {
          return t + e * n
        }
    }

    function a(t, e) {
      var n, i = e ? e.length : 0,
        a = t ? Math.min(i, t.length) : 0,
        o = new Array(a),
        s = new Array(i);
      for (n = 0; n < a; ++n) o[n] = r(t[n], e[n]);
      for (; n < i; ++n) s[n] = e[n];
      return function(t) {
        for (n = 0; n < a; ++n) s[n] = o[n](t);
        return s
      }
    }
    var o = n(142),
      s = function() {
        function t(t, e, n) {
          this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = n, this
            .animate = null
        }
        var e = t.prototype;
        return e.to = function(t) {
          void 0 === t && (t = {});
          var e, n = t.delay || 0,
            s = t.attrs || {},
            c = t.duration || 1e3;
          e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear;
          var u = {
              shape: this.shape,
              startTime: this.timeline.time + n,
              duration: c,
              easing: e
            },
            l = {};
          for (var h in s) {
            var f = this.source[h],
              p = s[h];
            "points" === h ? (f = i(f), p = i(p), l.points = a(f, p), this.source.points = f, s.points = p) :
              "matrix" === h ? l.matrix = a(f, p) : l[h] = r(f, p)
          }
          return u.interpolate = l, u.startState = this.source, u.endState = s, u.endTime = u.startTime + c,
            this.timeline.anims.push(u), this.animate = u, this
        }, e.onFrame = function(t) {
          return this.animate && (this.animate.onFrame = function(e) {
            t(e)
          }), this
        }, e.onStart = function(t) {
          return this.animate && (this.animate.onStart = function() {
            t()
          }), this
        }, e.onUpdate = function(t) {
          return this.animate && (this.animate.onUpdate = function(e) {
            t(e)
          }), this
        }, e.onEnd = function(t) {
          return this.animate && (this.animate.onEnd = function() {
            t()
          }), this
        }, t
      }();
    t.exports = s
  }, function(t, e) {
    var n = {
      linear: function(t) {
        return t
      },
      quadraticIn: function(t) {
        return t * t
      },
      quadraticOut: function(t) {
        return t * (2 - t)
      },
      quadraticInOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      },
      cubicIn: function(t) {
        return t * t * t
      },
      cubicOut: function(t) {
        return --t * t * t + 1
      },
      cubicInOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      },
      elasticIn: function(t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 *
          Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math
          .PI) / i))
      },
      elasticOut: function(t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 *
            Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) /
          i) + 1)
      },
      elasticInOut: function(t) {
        var e, n = .1,
          i = .4;
        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 *
          Math.PI) * Math.asin(1 / n), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t -
          e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math
          .PI) / i) * .5 + 1)
      },
      backIn: function(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      },
      backOut: function(t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1
      },
      backInOut: function(t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      },
      bounceIn: function(t) {
        return 1 - n.bounceOut(1 - t)
      },
      bounceOut: function(t) {
        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :
          t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t +
          .984375
      },
      bounceInOut: function(t) {
        return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
      }
    };
    t.exports = n
  }, function(t, e, n) {
    var i = n(0),
      r = n(114);
    t.exports = {
      fadeIn: function(t, e) {
        var n = i.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),
          a = i.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
        t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
        var o = {
          fillOpacity: n,
          strokeOpacity: a
        };
        r.doAnimation(t, o, e)
      }
    }
  }, function(t, e, n) {
    function i(t, e, n, i, r) {
      var o, c, u = a.getCoordInfo(n),
        l = u.start,
        h = u.end,
        f = u.width,
        p = u.height,
        g = new s.Rect({
          attrs: {
            x: l.x,
            y: h.y,
            width: f,
            height: p
          }
        });
      "y" === r ? (o = l.x + f / 2, c = i.y < l.y ? i.y : l.y) : "x" === r ? (o = i.x > l.x ? i.x : l.x, c = l
        .y + p / 2) : "xy" === r && (n.isPolar ? (o = n.center.x, c = n.center.y) : (o = (l.x + h.x) / 2, c =
        (l.y + h.y) / 2));
      var d = a.getScaledMatrix(g, [o, c], r);
      g.isClip = !0, g.endState = {
        matrix: d
      }, g.set("canvas", t.get("canvas")), t.attr("clip", g);
      a.doAnimation(g, g.endState, e, function() {
        t.attr("clip", null), g.remove(!0)
      })
    }

    function r(t, e, n) {
      for (var i, r, o, s = t.get("children"), c = 0, u = s.length; c < u; c++) {
        var l = s[c],
          h = l.getBBox();
        i = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(l, [i, r], n), a
          .doAnimation(l, {
            matrix: o
          }, e)
      }
    }
    var a = n(114),
      o = n(26),
      s = n(7).Shape;
    t.exports = {
      groupWaveIn: function(t, e, n) {
        var i = o.getClip(n);
        i.set("canvas", t.get("canvas")), t.attr("clip", i);
        var r = {};
        if (n.isPolar) {
          var s = n.startAngle,
            c = n.endAngle;
          r.endAngle = c, i.attr("endAngle", s)
        } else {
          var u = n.start,
            l = n.end,
            h = Math.abs(u.x - l.x),
            f = Math.abs(u.y - l.y);
          n.isTransposed ? (i.attr("height", 0), r.height = f) : (i.attr("width", 0), r.width = h)
        }
        a.doAnimation(i, r, e, function() {
          t.attr("clip", null), i.remove(!0)
        })
      },
      groupScaleInX: function(t, e, n, r) {
        i(t, e, n, r, "x")
      },
      groupScaleInY: function(t, e, n, r) {
        i(t, e, n, r, "y")
      },
      groupScaleInXY: function(t, e, n, r) {
        i(t, e, n, r, "xy")
      },
      shapesScaleInX: function(t, e) {
        r(t, e, "x")
      },
      shapesScaleInY: function(t, e) {
        r(t, e, "y")
      },
      shapesScaleInXY: function(t, e) {
        r(t, e, "xy")
      }
    }
  }, function(t, e, n) {
    var i = n(110),
      r = n(0);
    t.exports = {
      directionEnabled: function(t, e) {
        return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e)
      },
      getColDef: function(t, e) {
        var n;
        return t.get("colDefs") && t.get("colDefs")[e] && (n = t.get("colDefs")[e]), n
      },
      _getFieldRange: function(t, e, n) {
        if (!t) return [0, 1];
        var i = 0,
          r = 0;
        if ("linear" === n) {
          var a = e.min,
            o = e.max;
          i = (t.min - a) / (o - a), r = (t.max - a) / (o - a)
        } else {
          var s = e,
            c = t.values,
            u = s.indexOf(c[0]),
            l = s.indexOf(c[c.length - 1]);
          i = u / (s.length - 1), r = l / (s.length - 1)
        }
        return [i, r]
      },
      _getLimitRange: function(t, e) {
        var n, a = e.field,
          o = e.type,
          s = r.Array.values(t, a);
        return "linear" === o ? (n = r.Array.getRange(s), e.min < n.min && (n.min = e.min), e.max > n.max &&
          (n.max = e.max)) : "timeCat" === o ? (r.each(s, function(t, e) {
          s[e] = i.toTimeStamp(t)
        }), s.sort(function(t, e) {
          return t - e
        }), n = s) : n = s, n
      }
    }
  }, function(t, e, n) {
    var i = n(0),
      r = n(110);
    t.exports = {
      beforeGeomInit: function(t) {
        t.set("limitInPlot", !0);
        var e = t.get("data"),
          n = t.get("colDefs");
        if (!n) return e;
        var a = t.get("geoms"),
          o = !1;
        i.each(a, function(t) {
          if (-1 !== ["area", "line", "path"].indexOf(t.get("type"))) return o = !0, !1
        });
        var s = [];
        if (i.each(n, function(t, e) {
            !o && t && (t.values || t.min || t.max) && s.push(e)
          }), 0 === s.length) return e;
        var c = [];
        i.each(e, function(t) {
          var e = !0;
          i.each(s, function(a) {
            var o = t[a];
            if (o) {
              var s = n[a];
              if ("timeCat" === s.type) {
                var c = s.values;
                i.isNumber(c[0]) && (o = r.toTimeStamp(o))
              }(s.values && -1 === s.values.indexOf(o) || s.min && o < s.min || s.max && o > s
              .max) && (e = !1)
            }
          }), e && c.push(t)
        }), t.set("filteredData", c)
      }
    }
  }, , , function(t, e, n) {
    var i = n(46);
    n(115), n(100), n(109), n(124), n(125), n(150);
    var r = n(135),
      a = n(137),
      o = n(138),
      s = n(139),
      c = n(153);
    i.Animate = n(113), i.Chart.plugins.register([r, o, a, s, c]), n(154), i.Interaction = n(45), t.exports = i
  }, function(t, e, n) {
    t.exports = {
      Text: n(133),
      Line: n(131),
      Arc: n(129),
      Rect: n(132),
      Html: n(130),
      Tag: n(134),
      Point: n(151),
      RegionFilter: n(152)
    }
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = {
            fill: "#1890FF",
            r: 3,
            lineWidth: 1,
            stroke: "#fff"
          }
        }, n.render = function(t, e) {
          var n = this.parsePoint(t, this.position),
            i = e.addShape("Circle", {
              className: "guide-point",
              attrs: r.mix({
                x: n.x + this.offsetX,
                y: n.y + this.offsetY
              }, this.style)
            });
          return this.element = i, i
        }, e
      }(a);
    a.Point = o, t.exports = o
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(9),
      o = n(2).Rect,
      s = function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        i(e, t);
        var n = e.prototype;
        return n._initDefaultCfg = function() {
          this.type = "regionFilter", this.start = [], this.end = [], this.color = null, this.style = null
        }, n.render = function(t) {
          var e = this.parsePoint(t, this.start),
            n = this.parsePoint(t, this.end);
          if (e && n) {
            var i = new o({
              attrs: {
                x: Math.min(e.x, n.x),
                y: Math.min(e.y, n.y),
                width: Math.abs(n.x - e.x),
                height: Math.abs(n.y - e.y)
              }
            });
            this.clip = i;
            var a = this.chart,
              s = this.color,
              c = this.style || {},
              u = [];
            a.get("geoms").map(function(t) {
              var e = t.get("container"),
                n = e.get("children"),
                a = e.addGroup({
                  zIndex: 10,
                  className: "guide-region-filter"
                });
              return n.map(function(t) {
                if (t.get("isShape")) {
                  var e = t.get("type"),
                    n = r.mix({}, t.get("attrs"), c);
                  s && (n.fill || n.fillStyle) && (n.fill = n.fillStyle = s), s && (n.stroke || n
                    .strokeStyle) && (n.stroke = n.strokeStyle = s);
                  var i = {
                    attrs: n
                  };
                  "custom" !== e && "Custom" !== e || (i.createPath = t.get("createPath"), i
                    .calculateBox = t.get("calculateBox")), a.addShape(e, i)
                }
                return t
              }), a.attr("clip", i), e.sort(), u.push(a), t
            }), this.element = u
          }
        }, n.remove = function() {
          var t = this.element;
          r.each(t, function(t) {
            t && t.remove(!0)
          }), this.clip && this.clip.remove(!0)
        }, e
      }(a);
    a.RegionFilter = s, t.exports = s
  }, function(t, e, n) {
    var i = n(145),
      r = n(0),
      a = {
        mode: "x",
        xStyle: {
          backgroundColor: "rgba(202, 215, 239, .2)",
          fillerColor: "rgba(202, 215, 239, .5)",
          size: 4,
          lineCap: "round",
          offsetX: 0,
          offsetY: 8
        },
        yStyle: {
          backgroundColor: "rgba(202, 215, 239, .2)",
          fillerColor: "rgba(202, 215, 239, .5)",
          size: 4,
          lineCap: "round",
          offsetX: 8,
          offsetY: 0
        }
      };
    t.exports = {
      init: function(t) {
        t.set("_limitRange", {}), t.scrollBar = function(t) {
          !0 === t ? t = a : r.isObject(t) && (t = r.deepMix({}, a, t)), this.set("_scrollBarCfg", t)
        }
      },
      clear: function(t) {
        t.set("_limitRange", {})
      },
      changeData: function(t) {
        t.set("_limitRange", {})
      },
      clearInner: function(t) {
        var e = t.get("_horizontalBar"),
          n = t.get("_verticalBar");
        e && e.remove(!0), n && n.remove(!0), t.set("_horizontalBar", null), t.set("_verticalBar", null)
      },
      afterGeomDraw: function(t) {
        var e = t.get("_scrollBarCfg");
        if (e) {
          var n = t.get("data"),
            r = t.get("plotRange"),
            a = t.get("backPlot"),
            o = t.get("canvas").get("height"),
            s = t.get("_limitRange"),
            c = e.mode;
          if (i.directionEnabled(c, "x")) {
            var u = e.xStyle,
              l = u.offsetX,
              h = u.offsetY,
              f = u.lineCap,
              p = u.backgroundColor,
              g = u.fillerColor,
              d = u.size,
              v = t.getXScale(),
              y = s[v.field];
            y || (y = i._getLimitRange(n, v), s[v.field] = y);
            var m = i._getFieldRange(v, y, v.type),
              x = t.get("_horizontalBar"),
              _ = o - d / 2 + h;
            x ? x.get("children")[1].attr({
              x1: Math.max(r.bl.x + r.width * m[0] + l, r.bl.x),
              x2: Math.min(r.bl.x + r.width * m[1] + l, r.br.x)
            }) : ((x = a.addGroup({
              className: "horizontalBar"
            })).addShape("line", {
              attrs: {
                x1: r.bl.x + l,
                y1: _,
                x2: r.br.x + l,
                y2: _,
                lineWidth: d,
                stroke: p,
                lineCap: f
              }
            }), x.addShape("line", {
              attrs: {
                x1: Math.max(r.bl.x + r.width * m[0] + l, r.bl.x),
                y1: _,
                x2: Math.min(r.bl.x + r.width * m[1] + l, r.br.x),
                y2: _,
                lineWidth: d,
                stroke: g,
                lineCap: f
              }
            }), t.set("_horizontalBar", x))
          }
          if (i.directionEnabled(c, "y")) {
            var S = e.yStyle,
              b = S.offsetX,
              w = S.offsetY,
              P = S.lineCap,
              C = S.backgroundColor,
              M = S.fillerColor,
              A = S.size,
              T = t.getYScales()[0],
              O = s[T.field];
            O || (O = i._getLimitRange(n, T), s[T.field] = O);
            var D = i._getFieldRange(T, O, T.type),
              k = t.get("_verticalBar"),
              I = A / 2 + b;
            k ? k.get("children")[1].attr({
              y1: Math.max(r.tl.y + r.height * D[0] + w, r.tl.y),
              y2: Math.min(r.tl.y + r.height * D[1] + w, r.bl.y)
            }) : ((k = a.addGroup({
              className: "verticalBar"
            })).addShape("line", {
              attrs: {
                x1: I,
                y1: r.tl.y + w,
                x2: I,
                y2: r.bl.y + w,
                lineWidth: A,
                stroke: C,
                lineCap: P
              }
            }), k.addShape("line", {
              attrs: {
                x1: I,
                y1: Math.max(r.tl.y + r.height * D[0] + w, r.tl.y),
                x2: I,
                y2: Math.min(r.tl.y + r.height * D[1] + w, r.bl.y),
                lineWidth: A,
                stroke: M,
                lineCap: P
              }
            }), t.set("_verticalBar", k))
          }
        }
      }
    }
  }, function(t, e, n) {
    t.exports = {
      Interaction: n(45),
      PieSelect: n(156),
      IntervalSelect: n(157),
      Pan: n(158),
      Pinch: n(159)
    }
  }, function(t, e, n) {
    var i;
    ! function(r, a, o, s) {
      "use strict";

      function c(t, e, n) {
        return setTimeout(p(t, n), e)
      }

      function u(t, e, n) {
        return !!Array.isArray(t) && (l(t, n[e], n), !0)
      }

      function l(t, e, n) {
        var i;
        if (t)
          if (t.forEach) t.forEach(e, n);
          else if (t.length !== s)
          for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
        else
          for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
      }

      function h(t, e, n) {
        var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
        return function() {
          var e = new Error("get-stack-trace"),
            n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(
              /^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
            a = r.console && (r.console.warn || r.console.log);
          return a && a.call(r.console, i, n), t.apply(this, arguments)
        }
      }

      function f(t, e, n) {
        var i, r = e.prototype;
        (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && gt(i, n)
      }

      function p(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      }

      function g(t, e) {
        return typeof t == yt ? t.apply(e ? e[0] || s : s, e) : t
      }

      function d(t, e) {
        return t === s ? e : t
      }

      function v(t, e, n) {
        l(_(e), function(e) {
          t.addEventListener(e, n, !1)
        })
      }

      function y(t, e, n) {
        l(_(e), function(e) {
          t.removeEventListener(e, n, !1)
        })
      }

      function m(t, e) {
        for (; t;) {
          if (t == e) return !0;
          t = t.parentNode
        }
        return !1
      }

      function x(t, e) {
        return t.indexOf(e) > -1
      }

      function _(t) {
        return t.trim().split(/\s+/g)
      }

      function S(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length;) {
          if (n && t[i][n] == e || !n && t[i] === e) return i;
          i++
        }
        return -1
      }

      function b(t) {
        return Array.prototype.slice.call(t, 0)
      }

      function w(t, e, n) {
        for (var i = [], r = [], a = 0; a < t.length;) {
          var o = e ? t[a][e] : t[a];
          S(r, o) < 0 && i.push(t[a]), r[a] = o, a++
        }
        return n && (i = e ? i.sort(function(t, n) {
          return t[e] > n[e]
        }) : i.sort()), i
      }

      function P(t, e) {
        for (var n, i, r = e[0].toUpperCase() + e.slice(1), a = 0; a < dt.length;) {
          if (n = dt[a], (i = n ? n + r : e) in t) return i;
          a++
        }
        return s
      }

      function C() {
        return wt++
      }

      function M(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || r
      }

      function A(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this
          .domHandler = function(e) {
            g(t.options.enable, [t]) && n.handler(e)
          }, this.init()
      }

      function T(t) {
        var e = t.options.inputClass;
        return new(e || (Mt ? L : At ? H : Ct ? q : X))(t, O)
      }

      function O(t, e, n) {
        var i = n.pointers.length,
          r = n.changedPointers.length,
          a = e & Ot && i - r == 0,
          o = e & (kt | It) && i - r == 0;
        n.isFirst = !!a, n.isFinal = !!o, a && (t.session = {}), n.eventType = e, D(t, n), t.emit(
          "hammer.input", n), t.recognize(n), t.session.prevInput = n
      }

      function D(t, e) {
        var n = t.session,
          i = e.pointers,
          r = i.length;
        n.firstInput || (n.firstInput = E(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = E(e) : 1 === r && (
          n.firstMultiple = !1);
        var a = n.firstInput,
          o = n.firstMultiple,
          s = o ? o.center : a.center,
          c = e.center = F(i);
        e.timeStamp = _t(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = R(s, c), e.distance = B(s, c), k(
          n, e), e.offsetDirection = N(e.deltaX, e.deltaY);
        var u = Y(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = xt(u.x) > xt(u.y) ? u.x : u.y, e
          .scale = o ? z(o.pointers, i) : 1, e.rotation = o ? j(o.pointers, i) : 0, e.maxPointers = n
          .prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput
          .maxPointers : e.pointers.length, I(n, e);
        var l = t.element;
        m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
      }

      function k(t, e) {
        var n = e.center,
          i = t.offsetDelta || {},
          r = t.prevDelta || {},
          a = t.prevInput || {};
        e.eventType !== Ot && a.eventType !== kt || (r = t.prevDelta = {
          x: a.deltaX || 0,
          y: a.deltaY || 0
        }, i = t.offsetDelta = {
          x: n.x,
          y: n.y
        }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
      }

      function I(t, e) {
        var n, i, r, a, o = t.lastInterval || e,
          c = e.timeStamp - o.timeStamp;
        if (e.eventType != It && (c > Tt || o.velocity === s)) {
          var u = e.deltaX - o.deltaX,
            l = e.deltaY - o.deltaY,
            h = Y(c, u, l);
          i = h.x, r = h.y, n = xt(h.x) > xt(h.y) ? h.x : h.y, a = N(u, l), t.lastInterval = e
        } else n = o.velocity, i = o.velocityX, r = o.velocityY, a = o.direction;
        e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = a
      }

      function E(t) {
        for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
          clientX: mt(t.pointers[n].clientX),
          clientY: mt(t.pointers[n].clientY)
        }, n++;
        return {
          timeStamp: _t(),
          pointers: e,
          center: F(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY
        }
      }

      function F(t) {
        var e = t.length;
        if (1 === e) return {
          x: mt(t[0].clientX),
          y: mt(t[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
        return {
          x: mt(n / e),
          y: mt(i / e)
        }
      }

      function Y(t, e, n) {
        return {
          x: e / t || 0,
          y: n / t || 0
        }
      }

      function N(t, e) {
        return t === e ? Et : xt(t) >= xt(e) ? t < 0 ? Ft : Yt : e < 0 ? Nt : Bt
      }

      function B(t, e, n) {
        n || (n = Xt);
        var i = e[n[0]] - t[n[0]],
          r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
      }

      function R(t, e, n) {
        n || (n = Xt);
        var i = e[n[0]] - t[n[0]],
          r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
      }

      function j(t, e) {
        return R(e[1], e[0], Lt) + R(t[1], t[0], Lt)
      }

      function z(t, e) {
        return B(e[0], e[1], Lt) / B(t[0], t[1], Lt)
      }

      function X() {
        this.evEl = Gt, this.evWin = Ht, this.pressed = !1, A.apply(this, arguments)
      }

      function L() {
        this.evEl = Ut, this.evWin = Zt, A.apply(this, arguments), this.store = this.manager.session
          .pointerEvents = []
      }

      function W() {
        this.evTarget = $t, this.evWin = Kt, this.started = !1, A.apply(this, arguments)
      }

      function G(t, e) {
        var n = b(t.touches),
          i = b(t.changedTouches);
        return e & (kt | It) && (n = w(n.concat(i), "identifier", !0)), [n, i]
      }

      function H() {
        this.evTarget = te, this.targetIds = {}, A.apply(this, arguments)
      }

      function V(t, e) {
        var n = b(t.touches),
          i = this.targetIds;
        if (e & (Ot | Dt) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, a, o = b(t.changedTouches),
          s = [],
          c = this.target;
        if (a = n.filter(function(t) {
            return m(t.target, c)
          }), e === Ot)
          for (r = 0; r < a.length;) i[a[r].identifier] = !0, r++;
        for (r = 0; r < o.length;) i[o[r].identifier] && s.push(o[r]), e & (kt | It) && delete i[o[r]
          .identifier], r++;
        return s.length ? [w(a.concat(s), "identifier", !0), s] : void 0
      }

      function q() {
        A.apply(this, arguments);
        var t = p(this.handler, this);
        this.touch = new H(this.manager, t), this.mouse = new X(this.manager, t), this.primaryTouch = null, this
          .lastTouches = []
      }

      function U(t, e) {
        t & Ot ? (this.primaryTouch = e.changedPointers[0].identifier, Z.call(this, e)) : t & (kt | It) && Z
          .call(this, e)
      }

      function Z(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var n = {
            x: e.clientX,
            y: e.clientY
          };
          this.lastTouches.push(n);
          var i = this.lastTouches;
          setTimeout(function() {
            var t = i.indexOf(n);
            t > -1 && i.splice(t, 1)
          }, ee)
        }
      }

      function J(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
          var r = this.lastTouches[i],
            a = Math.abs(e - r.x),
            o = Math.abs(n - r.y);
          if (a <= ne && o <= ne) return !0
        }
        return !1
      }

      function $(t, e) {
        this.manager = t, this.set(e)
      }

      function K(t) {
        if (x(t, se)) return se;
        var e = x(t, ce),
          n = x(t, ue);
        return e && n ? se : e || n ? e ? ce : ue : x(t, oe) ? oe : ae
      }

      function Q(t) {
        this.options = gt({}, this.defaults, t || {}), this.id = C(), this.manager = null, this.options.enable =
          d(this.options.enable, !0), this.state = he, this.simultaneous = {}, this.requireFail = []
      }

      function tt(t) {
        return t & ve ? "cancel" : t & ge ? "end" : t & pe ? "move" : t & fe ? "start" : ""
      }

      function et(t) {
        return t == Bt ? "down" : t == Nt ? "up" : t == Ft ? "left" : t == Yt ? "right" : ""
      }

      function nt(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
      }

      function it() {
        Q.apply(this, arguments)
      }

      function rt() {
        it.apply(this, arguments), this.pX = null, this.pY = null
      }

      function at() {
        it.apply(this, arguments)
      }

      function ot() {
        Q.apply(this, arguments), this._timer = null, this._input = null
      }

      function st() {
        it.apply(this, arguments)
      }

      function ct() {
        it.apply(this, arguments)
      }

      function ut() {
        Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null,
          this.count = 0
      }

      function lt(t, e) {
        return e = e || {}, e.recognizers = d(e.recognizers, lt.defaults.preset), new ht(t, e)
      }

      function ht(t, e) {
        this.options = gt({}, lt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t,
          this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t,
          this.input = T(this), this.touchAction = new $(this, this.options.touchAction), ft(this, !0), l(this
            .options.recognizers,
            function(t) {
              var e = this.add(new t[0](t[1]));
              t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
      }

      function ft(t, e) {
        var n = t.element;
        if (n.style) {
          var i;
          l(t.options.cssProps, function(r, a) {
            i = P(n.style, a), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t
              .oldCssProps[i] || ""
          }), e || (t.oldCssProps = {})
        }
      }

      function pt(t, e) {
        var n = a.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
      }
      var gt, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
        vt = a.createElement("div"),
        yt = "function",
        mt = Math.round,
        xt = Math.abs,
        _t = Date.now;
      gt = "function" != typeof Object.assign ? function(t) {
        if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i !== s && null !== i)
            for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
        }
        return e
      } : Object.assign;
      var St = h(function(t, e, n) {
          for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === s) && (t[i[r]] = e[i[r]]),
            r++;
          return t
        }, "extend", "Use `assign`."),
        bt = h(function(t, e) {
          return St(t, e, !0)
        }, "merge", "Use `assign`."),
        wt = 1,
        Pt = /mobile|tablet|ip(ad|hone|od)|android/i,
        Ct = "ontouchstart" in r,
        Mt = P(r, "PointerEvent") !== s,
        At = Ct && Pt.test(navigator.userAgent),
        Tt = 25,
        Ot = 1,
        Dt = 2,
        kt = 4,
        It = 8,
        Et = 1,
        Ft = 2,
        Yt = 4,
        Nt = 8,
        Bt = 16,
        Rt = Ft | Yt,
        jt = Nt | Bt,
        zt = Rt | jt,
        Xt = ["x", "y"],
        Lt = ["clientX", "clientY"];
      A.prototype = {
        handler: function() {},
        init: function() {
          this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this
            .evTarget, this.domHandler), this.evWin && v(M(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
          this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this
            .evTarget, this.domHandler), this.evWin && y(M(this.element), this.evWin, this.domHandler)
        }
      };
      var Wt = {
          mousedown: Ot,
          mousemove: Dt,
          mouseup: kt
        },
        Gt = "mousedown",
        Ht = "mousemove mouseup";
      f(X, A, {
        handler: function(t) {
          var e = Wt[t.type];
          e & Ot && 0 === t.button && (this.pressed = !0), e & Dt && 1 !== t.which && (e = kt), this
            .pressed && (e & kt && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: "mouse",
              srcEvent: t
            }))
        }
      });
      var Vt = {
          pointerdown: Ot,
          pointermove: Dt,
          pointerup: kt,
          pointercancel: It,
          pointerout: It
        },
        qt = {
          2: "touch",
          3: "pen",
          4: "mouse",
          5: "kinect"
        },
        Ut = "pointerdown",
        Zt = "pointermove pointerup pointercancel";
      r.MSPointerEvent && !r.PointerEvent && (Ut = "MSPointerDown", Zt =
        "MSPointerMove MSPointerUp MSPointerCancel"), f(L, A, {
        handler: function(t) {
          var e = this.store,
            n = !1,
            i = t.type.toLowerCase().replace("ms", ""),
            r = Vt[i],
            a = qt[t.pointerType] || t.pointerType,
            o = "touch" == a,
            s = S(e, t.pointerId, "pointerId");
          r & Ot && (0 === t.button || o) ? s < 0 && (e.push(t), s = e.length - 1) : r & (kt | It) && (
            n = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, {
            pointers: e,
            changedPointers: [t],
            pointerType: a,
            srcEvent: t
          }), n && e.splice(s, 1))
        }
      });
      var Jt = {
          touchstart: Ot,
          touchmove: Dt,
          touchend: kt,
          touchcancel: It
        },
        $t = "touchstart",
        Kt = "touchstart touchmove touchend touchcancel";
      f(W, A, {
        handler: function(t) {
          var e = Jt[t.type];
          if (e === Ot && (this.started = !0), this.started) {
            var n = G.call(this, t, e);
            e & (kt | It) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this
              .manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: t
              })
          }
        }
      });
      var Qt = {
          touchstart: Ot,
          touchmove: Dt,
          touchend: kt,
          touchcancel: It
        },
        te = "touchstart touchmove touchend touchcancel";
      f(H, A, {
        handler: function(t) {
          var e = Qt[t.type],
            n = V.call(this, t, e);
          n && this.callback(this.manager, e, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: "touch",
            srcEvent: t
          })
        }
      });
      var ee = 2500,
        ne = 25;
      f(q, A, {
        handler: function(t, e, n) {
          var i = "touch" == n.pointerType,
            r = "mouse" == n.pointerType;
          if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (i) U.call(this, e, n);
            else if (r && J.call(this, n)) return;
            this.callback(t, e, n)
          }
        },
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy()
        }
      });
      var ie = P(vt.style, "touchAction"),
        re = ie !== s,
        ae = "auto",
        oe = "manipulation",
        se = "none",
        ce = "pan-x",
        ue = "pan-y",
        le = function() {
          if (!re) return !1;
          var t = {},
            e = r.CSS && r.CSS.supports;
          return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            t[n] = !e || r.CSS.supports("touch-action", n)
          }), t
        }();
      $.prototype = {
        set: function(t) {
          "compute" == t && (t = this.compute()), re && this.manager.element.style && le[t] && (this.manager
            .element.style[ie] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
          this.set(this.manager.options.touchAction)
        },
        compute: function() {
          var t = [];
          return l(this.manager.recognizers, function(e) {
            g(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
          }), K(t.join(" "))
        },
        preventDefaults: function(t) {
          var e = t.srcEvent,
            n = t.offsetDirection;
          if (this.manager.session.prevented) e.preventDefault();
          else {
            var i = this.actions,
              r = x(i, se) && !le[se],
              a = x(i, ue) && !le[ue],
              o = x(i, ce) && !le[ce];
            if (r) {
              var s = 1 === t.pointers.length,
                c = t.distance < 2,
                u = t.deltaTime < 250;
              if (s && c && u) return
            }
            if (!o || !a) return r || a && n & Rt || o && n & jt ? this.preventSrc(e) : void 0
          }
        },
        preventSrc: function(t) {
          this.manager.session.prevented = !0, t.preventDefault()
        }
      };
      var he = 1,
        fe = 2,
        pe = 4,
        ge = 8,
        de = ge,
        ve = 16;
      Q.prototype = {
        defaults: {},
        set: function(t) {
          return gt(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
          if (u(t, "recognizeWith", this)) return this;
          var e = this.simultaneous;
          return t = nt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
          return u(t, "dropRecognizeWith", this) ? this : (t = nt(t, this), delete this.simultaneous[t.id],
            this)
        },
        requireFailure: function(t) {
          if (u(t, "requireFailure", this)) return this;
          var e = this.requireFail;
          return t = nt(t, this), -1 === S(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
          if (u(t, "dropRequireFailure", this)) return this;
          t = nt(t, this);
          var e = S(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
          return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
          return !!this.simultaneous[t.id]
        },
        emit: function(t) {
          function e(e) {
            n.manager.emit(e, t)
          }
          var n = this,
            i = this.state;
          i < ge && e(n.options.event + tt(i)), e(n.options.event), t.additionalEvent && e(t
            .additionalEvent), i >= ge && e(n.options.event + tt(i))
        },
        tryEmit: function(t) {
          if (this.canEmit()) return this.emit(t);
          this.state = 32
        },
        canEmit: function() {
          for (var t = 0; t < this.requireFail.length;) {
            if (!(this.requireFail[t].state & (32 | he))) return !1;
            t++
          }
          return !0
        },
        recognize: function(t) {
          var e = gt({}, t);
          if (!g(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
          this.state & (de | ve | 32) && (this.state = he), this.state = this.process(e), this.state & (fe |
            pe | ge | ve) && this.tryEmit(e)
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
      }, f(it, Q, {
        defaults: {
          pointers: 1
        },
        attrTest: function(t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e
        },
        process: function(t) {
          var e = this.state,
            n = t.eventType,
            i = e & (fe | pe),
            r = this.attrTest(t);
          return i && (n & It || !r) ? e | ve : i || r ? n & kt ? e | ge : e & fe ? e | pe : fe : 32
        }
      }), f(rt, it, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: zt
        },
        getTouchAction: function() {
          var t = this.options.direction,
            e = [];
          return t & Rt && e.push(ue), t & jt && e.push(ce), e
        },
        directionTest: function(t) {
          var e = this.options,
            n = !0,
            i = t.distance,
            r = t.direction,
            a = t.deltaX,
            o = t.deltaY;
          return r & e.direction || (e.direction & Rt ? (r = 0 === a ? Et : a < 0 ? Ft : Yt, n = a != this
            .pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? Et : o < 0 ? Nt : Bt, n = o != this.pY, i =
            Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        },
        attrTest: function(t) {
          return it.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this
            .directionTest(t))
        },
        emit: function(t) {
          this.pX = t.deltaX, this.pY = t.deltaY;
          var e = et(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
      }), f(at, it, {
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [se]
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold ||
            this.state & fe)
        },
        emit: function(t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e
          }
          this._super.emit.call(this, t)
        }
      }), f(ot, Q, {
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9
        },
        getTouchAction: function() {
          return [ae]
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            i = t.distance < e.threshold,
            r = t.deltaTime > e.time;
          if (this._input = t, !i || !n || t.eventType & (kt | It) && !r) this.reset();
          else if (t.eventType & Ot) this.reset(), this._timer = c(function() {
            this.state = de, this.tryEmit()
          }, e.time, this);
          else if (t.eventType & kt) return de;
          return 32
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function(t) {
          this.state === de && (t && t.eventType & kt ? this.manager.emit(this.options.event + "up", t) :
            (this._input.timeStamp = _t(), this.manager.emit(this.options.event, this._input)))
        }
      }), f(st, it, {
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [se]
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold ||
            this.state & fe)
        }
      }), f(ct, it, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: .3,
          direction: Rt | jt,
          pointers: 1
        },
        getTouchAction: function() {
          return rt.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
          var e, n = this.options.direction;
          return n & (Rt | jt) ? e = t.overallVelocity : n & Rt ? e = t.overallVelocityX : n & jt && (e =
              t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t
            .distance > this.options.threshold && t.maxPointers == this.options.pointers && xt(e) > this
            .options.velocity && t.eventType & kt
        },
        emit: function(t) {
          var e = et(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
      }), f(ut, Q, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        },
        getTouchAction: function() {
          return [oe]
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            i = t.distance < e.threshold,
            r = t.deltaTime < e.time;
          if (this.reset(), t.eventType & Ot && 0 === this.count) return this.failTimeout();
          if (i && r && n) {
            if (t.eventType != kt) return this.failTimeout();
            var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
              o = !this.pCenter || B(this.pCenter, t.center) < e.posThreshold;
            if (this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count =
              1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this
              ._timer = c(function() {
                this.state = de, this.tryEmit()
              }, e.interval, this), fe) : de
          }
          return 32
        },
        failTimeout: function() {
          return this._timer = c(function() {
            this.state = 32
          }, this.options.interval, this), 32
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function() {
          this.state == de && (this._input.tapCount = this.count, this.manager.emit(this.options.event,
            this._input))
        }
      }), lt.VERSION = "2.0.7", lt.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [st, {
            enable: !1
          }],
          [at, {
              enable: !1
            },
            ["rotate"]
          ],
          [ct, {
            direction: Rt
          }],
          [rt, {
              direction: Rt
            },
            ["swipe"]
          ],
          [ut],
          [ut, {
              event: "doubletap",
              taps: 2
            },
            ["tap"]
          ],
          [ot]
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      ht.prototype = {
        set: function(t) {
          return gt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this
            .input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
          this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
          var e = this.session;
          if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var n, i = this.recognizers,
              r = e.curRecognizer;
            (!r || r && r.state & de) && (r = e.curRecognizer = null);
            for (var a = 0; a < i.length;) n = i[a], 2 === e.stopped || r && n != r && !n.canRecognizeWith(
                r) ? n.reset() : n.recognize(t), !r && n.state & (fe | pe | ge) && (r = e.curRecognizer =
              n), a++
          }
        },
        get: function(t) {
          if (t instanceof Q) return t;
          for (var e = this.recognizers, n = 0; n < e.length; n++)
            if (e[n].options.event == t) return e[n];
          return null
        },
        add: function(t) {
          if (u(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(),
            t
        },
        remove: function(t) {
          if (u(t, "remove", this)) return this;
          if (t = this.get(t)) {
            var e = this.recognizers,
              n = S(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
          }
          return this
        },
        on: function(t, e) {
          if (t !== s && e !== s) {
            var n = this.handlers;
            return l(_(t), function(t) {
              n[t] = n[t] || [], n[t].push(e)
            }), this
          }
        },
        off: function(t, e) {
          if (t !== s) {
            var n = this.handlers;
            return l(_(t), function(t) {
              e ? n[t] && n[t].splice(S(n[t], e), 1) : delete n[t]
            }), this
          }
        },
        emit: function(t, e) {
          this.options.domEvents && pt(t, e);
          var n = this.handlers[t] && this.handlers[t].slice();
          if (n && n.length) {
            e.type = t, e.preventDefault = function() {
              e.srcEvent.preventDefault()
            };
            for (var i = 0; i < n.length;) n[i](e), i++
          }
        },
        destroy: function() {
          this.element && ft(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this
            .element = null
        }
      }, gt(lt, {
        INPUT_START: Ot,
        INPUT_MOVE: Dt,
        INPUT_END: kt,
        INPUT_CANCEL: It,
        STATE_POSSIBLE: he,
        STATE_BEGAN: fe,
        STATE_CHANGED: pe,
        STATE_ENDED: ge,
        STATE_RECOGNIZED: de,
        STATE_CANCELLED: ve,
        STATE_FAILED: 32,
        DIRECTION_NONE: Et,
        DIRECTION_LEFT: Ft,
        DIRECTION_RIGHT: Yt,
        DIRECTION_UP: Nt,
        DIRECTION_DOWN: Bt,
        DIRECTION_HORIZONTAL: Rt,
        DIRECTION_VERTICAL: jt,
        DIRECTION_ALL: zt,
        Manager: ht,
        Input: A,
        TouchAction: $,
        TouchInput: H,
        MouseInput: X,
        PointerEventInput: L,
        TouchMouseInput: q,
        SingleTouchInput: W,
        Recognizer: Q,
        AttrRecognizer: it,
        Tap: ut,
        Pan: rt,
        Swipe: ct,
        Pinch: at,
        Rotate: st,
        Press: ot,
        on: v,
        off: y,
        each: l,
        merge: bt,
        extend: St,
        assign: gt,
        inherit: f,
        bindFn: p,
        prefixed: P
      }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = lt, (i = function() {
        return lt
      }.call(e, n, e, t)) !== s && (t.exports = i)
    }(window, document)
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
    var a = n(0),
      o = n(45),
      s = n(15),
      c = function(t) {
        function e(e, n) {
          var i, o = r(r(i = t.call(this, e, n) || this));
          n.registerPlugins({
            clearInner: function() {
              o.halo && o.halo.remove(!0), o.selected = !1, o.selectedShape = null, o.lastShape = null, o
                .halo = null, o.defaultSelected = null
            }
          });
          var s = o.defaultSelected;
          if (a.isObject(s)) {
            var c = o._getSelectedShapeByData(s);
            c && o._selectedShape(c), i.canvas.draw()
          }
          return i
        }
        i(e, t);
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          var e = t.prototype.getDefaultCfg.call(this);
          return e = a.mix({}, e, {
            startEvent: "tap",
            processEvent: null,
            animate: !1,
            offset: 1,
            appendRadius: 8,
            style: {
              fillOpacity: .5
            },
            cancelable: !0,
            defaultSelected: null
          }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e
        }, n._getSelectedShapeByData = function(t) {
          var e = null,
            n = this.chart.get("geoms")[0],
            i = n.get("container").get("children");
          return a.each(i, function(i) {
            if (i.get("isShape") && i.get("className") === n.get("type")) {
              var r = i.get("origin")._origin;
              if (a.isObjectValueEqual(r, t)) return e = i, !1
            }
          }), e
        }, n._selectedShape = function(t) {
          var e = this.offset,
            n = this.style,
            i = this.appendRadius,
            r = this.chart;
          this.lastShape = t;
          var o = t._attrs.attrs,
            s = o.x,
            c = o.y,
            u = o.startAngle,
            l = o.endAngle,
            h = o.r,
            f = o.fill,
            p = r.get("frontPlot").addShape("sector", {
              attrs: a.mix({
                x: s,
                y: c,
                r: h + e + i,
                r0: h + e,
                fill: f,
                startAngle: u,
                endAngle: l
              }, n)
            });
          this.halo = p;
          var g = this.animate;
          g && (!0 === g && (g = {
            duration: 300
          }), p.attr("r", h + e), p.animate().to(a.mix({
            attrs: {
              r: h + e + i
            }
          }, g)))
        }, n.start = function(t) {
          var e = this.chart;
          "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
          var n = a.createEvent(t, e),
            i = n.x,
            r = n.y;
          this.halo && this.halo.remove(!0);
          var o = e.getSnapRecords({
            x: i,
            y: r
          });
          if (!o.length) return this.selected = !1, void(this.selectedShape = null);
          var s = o[0]._origin,
            c = this._getSelectedShapeByData(s),
            u = this.lastShape;
          if (this.selectedShape = c, this.selected = !0, c === u) {
            if (!this.cancelable) return;
            this.halo && this.halo.remove(!0), this.lastShape = null, this.selected = !1
          } else this._selectedShape(c);
          this.canvas.draw()
        }, n.end = function(t) {
          var e = this.selectedShape;
          e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t
            .shape = e, t.selected = !!this.selected)
        }, e
      }(o);
    s.registerInteraction("pie-select", c), t.exports = c
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r = n(0),
      a = n(26),
      o = n(45),
      s = n(15),
      c = function(t) {
        function e(e, n) {
          var i, a = (i = t.call(this, e, n) || this).defaultSelected;
          if (r.isObject(a)) {
            var o = i._selectShapesByData(a),
              s = o.selectedShape,
              c = o.unSelectedShapes;
            s && i._selectShapes(s, c), i.selectedShape = s
          }
          return i
        }
        i(e, t);
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          var e = t.prototype.getDefaultCfg.call(this);
          return e = r.mix({}, e, {
            startEvent: "tap",
            processEvent: null,
            selectAxis: !0,
            selectAxisStyle: {
              fontWeight: "bold"
            },
            mode: "shape",
            selectStyle: {
              fillOpacity: 1
            },
            unSelectStyle: {
              fillOpacity: .4
            },
            cancelable: !0,
            defaultSelected: null
          }), (r.isWx || r.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e
        }, n._resetShape = function(t) {
          var e = t.get("_originAttrs");
          e && (t._attrs.attrs = e, t.set("_originAttrs", null))
        }, n._setEventData = function(t) {
          var e = this.selectedShape;
          e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t
            .shape = e, t.selected = !!e.get("_selected"))
        }, n._selectShapesByData = function(t) {
          var e = this.chart.get("geoms")[0],
            n = e.get("container").get("children"),
            i = null,
            a = [];
          return r.each(n, function(n) {
            if (n.get("isShape") && n.get("className") === e.get("type")) {
              var o = n.get("origin")._origin;
              r.isObjectValueEqual(o, t) ? i = n : a.push(n)
            }
          }), {
            selectedShape: i,
            unSelectedShapes: a
          }
        }, n._selectShapes = function(t, e) {
          var n = this.selectStyle,
            i = this.unSelectStyle,
            a = this.selectAxisStyle,
            o = this.chart;
          if (!t.get("_originAttrs")) {
            var s = Object.assign({}, t.attr());
            t.set("_originAttrs", s)
          }
          if (t.attr(n), r.each(e, function(t) {
              if (t.get("_originAttrs")) t.attr(t.get("_originAttrs"));
              else {
                var e = Object.assign({}, t.attr());
                t.set("_originAttrs", e)
              }
              t.set("_selected", !1), i && t.attr(i)
            }), t.set("_selected", !0), this.selectAxis) {
            this.selectedAxisShape && this._resetShape(this.selectedAxisShape);
            var c, u = o.get("geoms")[0].getXScale(),
              l = t.get("origin")._origin,
              h = o.get("axisController"),
              f = h.frontPlot,
              p = h.backPlot;
            r.each(f.get("children").concat(p.get("children")), function(t) {
              if (t.get("value") === u.scale(l[u.field])) return c = t, !1
            }), this.selectedAxisShape = c, c.set("_originAttrs", Object.assign({}, c.attr())), c.attr(a)
          }
          this.canvas.draw()
        }, n.reset = function() {
          var t = this;
          if (t.selectedShape) {
            var e = t.chart.get("geoms")[0].get("container").get("children");
            r.each(e, function(e) {
                t._resetShape(e), e.set("_selected", !1)
              }), t.selectedAxisShape && t._resetShape(t.selectedAxisShape), t.canvas.draw(), t
              .selectedShape = null, t.selectedAxisShape = null
          }
        }, n.start = function(t) {
          var e = this.chart;
          "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
          var n, i = r.createEvent(t, e),
            o = i.x,
            s = i.y,
            c = this.mode,
            u = e.get("geoms")[0].get("container").get("children"),
            l = [];
          if ("shape" === c) {
            var h = e.get("plotRange");
            if (!a.isPointInPlot({
                x: o,
                y: s
              }, h)) return void this.reset();
            r.each(u, function(t) {
              var e = t.getBBox();
              o >= e.x && o <= e.x + e.width && s >= e.y && s <= e.height + e.y ? n = t : l.push(t)
            })
          } else if ("range" === c) {
            var f = e.getSnapRecords({
              x: o,
              y: s
            });
            if (!f.length) return void this.reset();
            var p = f[0]._origin,
              g = this._selectShapesByData(p);
            n = g.selectedShape, l = g.unSelectedShapes
          }
          if (n)
            if (this.selectedShape = n, n.get("_selected")) {
              if (!this.cancelable) return void this._setEventData(t);
              this.reset()
            } else this._selectShapes(n, l);
          else this.reset();
          this._setEventData(t)
        }, n.end = function(t) {
          this._setEventData(t)
        }, e
      }(o);
    s.registerInteraction("interval-select", c), t.exports = c
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
    var a = n(0),
      o = n(145),
      s = n(45),
      c = n(15),
      u = n(146),
      l = ["touchstart", "touchmove", "touchend", "touchStart", "touchMove", "touchEnd"],
      h = function(t) {
        function e(e, n) {
          var i, o = r(r(i = t.call(this, e, n) || this)),
            s = o.hammer,
            c = o.panThreshold,
            l = o.pressThreshold,
            h = o.pressTime;
          s && s.get("pan").set({
            threshold: c
          });
          var f = n.get("tooltipController");
          return f && f.enable && (n.tooltip(!1), s ? (s.get("press").set({
            threshold: l,
            time: h
          }), s.on("press", a.wrapBehavior(r(r(i)), "_handlePress"))) : a.addEventListener(i.el, "press", a
            .wrapBehavior(r(r(i)), "_handlePress"))), n.registerPlugins([u, {
            changeData: function() {
              o.limitRange = {}
            },
            clear: function() {
              o.limitRange = {}
            }
          }]), i
        }
        i(e, t);
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          var e = t.prototype.getDefaultCfg.call(this);
          return e = a.mix({}, e, {
            startEvent: "panstart",
            processEvent: "panmove",
            endEvent: "panend",
            resetEvent: "touchend",
            mode: "x",
            panThreshold: 10,
            pressThreshold: 9,
            pressTime: 251,
            currentDeltaX: null,
            currentDeltaY: null,
            panning: !1,
            limitRange: {},
            _timestamp: 0,
            lastPoint: null
          }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.processEvent = "touchmove", e.endEvent =
            "touchend"), e
        }, n.start = function(t) {
          this.pressed || (this.currentDeltaX = 0, this.currentDeltaY = 0, "touchstart" !== t.type &&
            "touchStart" !== t.type || (this.lastPoint = t.touches[0]), this._handlePan(t))
        }, n.process = function(t) {
          this.pressed || this._handlePan(t)
        }, n.end = function() {
          this.pressed || (this.currentDeltaX = null, this.currentDeltaY = null, this.lastPoint = null)
        }, n.reset = function() {
          var t = this.chart;
          t.get("tooltipController") && (this.pressed = !1, t.hideTooltip(), t.tooltip(!1))
        }, n._handlePress = function(t) {
          this.pressed = !0;
          var e = t.center || t.touches[0];
          this.chart.tooltip(!0), this.chart.showTooltip(e)
        }, n._handlePan = function(t) {
          var e, n, i = this.currentDeltaX,
            r = this.currentDeltaY,
            o = this.lastPoint;
          if (-1 !== l.indexOf(t.type)) {
            var s = t.touches[0];
            e = s.x - o.x, n = s.y - o.y, this.lastPoint = s
          } else null !== i && null !== r && (this.panning = !0, e = t.deltaX - i, n = t.deltaY - r, this
            .currentDeltaX = t.deltaX, this.currentDeltaY = t.deltaY);
          if (!a.isNil(e) || !a.isNil(n)) {
            var c = this._timestamp,
              u = +new Date;
            u - c > 16 && (this._doPan(e, n), this._timestamp = u)
          }
        }, n._doPan = function(t, e) {
          var n = this,
            i = n.mode,
            r = n.chart,
            s = n.limitRange,
            c = r.get("coord"),
            u = c.start,
            l = c.end,
            h = r.get("data");
          if (o.directionEnabled(i, "x") && 0 !== t) {
            var f = r.getXScale(),
              p = f.field;
            s[p] || (s[p] = o._getLimitRange(h, f));
            var g = l.x - u.x;
            f.isCategory ? n._panCatScale(f, t, g) : f.isLinear && n._panLinearScale(f, t, g, "x");
            var d = o.getColDef(r, p);
            this.xRange = o._getFieldRange(d, s[p], f.type)
          }
          if (o.directionEnabled(i, "y") && 0 !== e) {
            var v = u.y - l.y,
              y = r.getYScales();
            a.each(y, function(t) {
              var i = t.field;
              s[i] || (s[i] = o._getLimitRange(h, t)), t.isLinear && n._panLinearScale(t, e, v, "y")
            });
            var m = o.getColDef(r, y[0].field);
            this.yRange = o._getFieldRange(m, s[y[0].field], y[0].type)
          }
          r.repaint()
        }, n._panLinearScale = function(t, e, n, i) {
          var r = t.field,
            s = t.min,
            c = t.max,
            u = this.limitRange;
          if (s !== u[r].min || c !== u[r].max) {
            var l = this.chart,
              h = e / n * (c - s),
              f = "x" === i ? c - h : c + h,
              p = "x" === i ? s - h : s + h;
            u[r] && !a.isNil(u[r].min) && p <= u[r].min && (f = c - s + (p = u[r].min)), u[r] && !a.isNil(u[r]
              .max) && f >= u[r].max && (p = (f = u[r].max) - (c - s));
            var g = o.getColDef(l, r);
            l.scale(r, a.mix({}, g, {
              min: p,
              max: f,
              nice: !1
            }))
          }
        }, n._panCatScale = function(t, e, n) {
          var i = this.chart,
            r = t.type,
            s = t.field,
            c = t.values,
            u = t.ticks,
            l = o.getColDef(i, s),
            h = this.limitRange[s],
            f = e / n,
            p = c.length,
            g = Math.max(1, Math.abs(parseInt(f * p))),
            d = h.indexOf(c[0]),
            v = h.indexOf(c[p - 1]);
          if (e > 0 && d >= 0) {
            for (var y = 0; y < g && d > 0; y++) d -= 1, v -= 1;
            var m = h.slice(d, v + 1),
              x = null;
            if ("timeCat" === r) {
              for (var _ = u.length > 2 ? u[1] - u[0] : 864e5, S = u[0] - _; S >= m[0]; S -= _) u.unshift(S);
              x = u
            }
            i.scale(s, a.mix({}, l, {
              values: m,
              ticks: x
            }))
          } else if (e < 0 && v <= h.length - 1) {
            for (var b = 0; b < g && v < h.length - 1; b++) d += 1, v += 1;
            var w = h.slice(d, v + 1),
              P = null;
            if ("timeCat" === r) {
              for (var C = u.length > 2 ? u[1] - u[0] : 864e5, M = u[u.length - 1] + C; M <= w[w.length -
                1]; M += C) u.push(M);
              P = u
            }
            i.scale(s, a.mix({}, l, {
              values: w,
              ticks: P
            }))
          }
        }, e
      }(s);
    c.registerInteraction("pan", h), t.exports = h
  }, function(t, e, n) {
    function i(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function r(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }
    var a = n(0),
      o = n(145),
      s = n(45),
      c = n(15),
      u = n(146),
      l = function(t) {
        function e(e, n) {
          var i, o = r(r(i = t.call(this, e, n) || this)),
            s = o.hammer,
            c = o.pressThreshold,
            l = o.pressTime;
          s.get("pinch").set({
            enable: !0
          }), n.registerPlugins([u, {
            changeData: function() {
              o.limitRange = {}, o.originTicks = null
            },
            clear: function() {
              o.limitRange = {}, o.originTicks = null
            }
          }]);
          var h = n.get("tooltipController");
          return h && h.enable && (n.tooltip(!1), s.get("press").set({
            threshold: c,
            time: l
          }), s.on("press", a.wrapBehavior(r(r(i)), "_handlePress"))), i
        }
        i(e, t);
        var n = e.prototype;
        return n.getDefaultCfg = function() {
          var e = t.prototype.getDefaultCfg.call(this);
          return a.mix({}, e, {
            startEvent: "pinchstart",
            processEvent: "pinch",
            endEvent: "pinchend",
            resetEvent: "touchend",
            pressThreshold: 9,
            pressTime: 251,
            mode: "x",
            currentPinchScaling: null,
            originValues: null,
            minScale: null,
            maxScale: null,
            _timestamp: 0,
            limitRange: {}
          })
        }, n.start = function() {
          this.pressed || (this.currentPinchScaling = 1)
        }, n.process = function(t) {
          this.pressed || this._handlePinch(t)
        }, n.end = function(t) {
          this.pressed || (this._handlePinch(t), this.currentPinchScaling = null)
        }, n.reset = function() {
          var t = this.chart;
          t.get("tooltipController") && (this.pressed = !1, t.hideTooltip(), t.tooltip(!1))
        }, n._handlePress = function(t) {
          this.pressed = !0;
          var e = t.center;
          this.chart.tooltip(!0), this.chart.showTooltip(e)
        }, n._handlePinch = function(t) {
          var e, n = 1 / this.currentPinchScaling * t.scale,
            i = t.target.getBoundingClientRect(),
            r = {
              x: t.center.x - i.left,
              y: t.center.y - i.top
            },
            a = Math.abs(t.pointers[0].clientX - t.pointers[1].clientX),
            o = Math.abs(t.pointers[0].clientY - t.pointers[1].clientY),
            s = a / o;
          e = s > .3 && s < 1.7 ? "xy" : a > o ? "x" : "y";
          var c = this._timestamp,
            u = +new Date;
          u - c > 16 && (this._doZoom(n, r, e), this._timestamp = u), this.currentPinchScaling = t.scale
        }, n._doZoom = function(t, e, n) {
          var i, r = this,
            s = r.mode,
            c = r.chart,
            u = r.limitRange;
          i = "xy" === s && void 0 !== n ? n : "xy";
          var l = c.get("data");
          if (o.directionEnabled(s, "x") && o.directionEnabled(i, "x")) {
            var h = c.getXScale(),
              f = h.field;
            u[f] || (u[f] = o._getLimitRange(l, h)), h.isCategory ? r._zoomCatScale(h, t, e) : h.isLinear && r
              ._zoomLinearScale(h, t, e, "x");
            var p = o.getColDef(c, f);
            this.xRange = o._getFieldRange(p, u[f], h.type)
          }
          if (o.directionEnabled(s, "y") && o.directionEnabled(i, "y")) {
            var g = c.getYScales();
            a.each(g, function(n) {
              var i = n.field;
              u[i] || (u[i] = o._getLimitRange(l, n)), n.isLinear && r._zoomLinearScale(n, t, e, "y")
            });
            var d = o.getColDef(c, g[0].field);
            this.yRange = o._getFieldRange(d, u[g[0].field], g[0].type)
          }
          c.repaint()
        }, n._zoomLinearScale = function(t, e, n, i) {
          if ("linear" === t.type) {
            var r = t.field,
              s = this.chart,
              c = t.min,
              u = t.max,
              l = u - c,
              h = this.limitRange,
              f = h[r].max - h[r].min,
              p = s.get("coord"),
              g = o.getColDef(s, r),
              d = l * (e - 1);
            if (this.minScale && e < 1) {
              var v = f / this.minScale;
              d = Math.max(l - v, d)
            }
            if (this.maxScale && e >= 1) {
              var y = f / this.maxScale;
              d = Math.min(l - y, d)
            }
            var m = p.invertPoint(n),
              x = "x" === i ? m.x : m.y,
              _ = u - d * (1 - x),
              S = c + d * x;
            s.scale(r, a.mix({}, g, {
              min: S,
              max: _,
              nice: !1
            }))
          }
        }, n._zoomCatScale = function(t, e, n) {
          var i = t.field,
            r = t.values,
            s = this.chart,
            c = s.get("coord"),
            u = o.getColDef(s, i);
          this.originTicks || (this.originTicks = t.ticks);
          var l = this.originTicks,
            h = this.limitRange[i],
            f = h.length,
            p = f / (this.maxScale || 4),
            g = f / (this.minScale || 1),
            d = r.length,
            v = c.invertPoint(n).x,
            y = parseInt(d * Math.abs(e - 1)),
            m = parseInt(y * v),
            x = y - m;
          if (e >= 1 && d >= p) {
            var _ = r.slice(m, d - x);
            s.scale(i, a.mix({}, u, {
              values: _,
              ticks: l
            }))
          } else if (e < 1 && d <= g) {
            var S = h.indexOf(r[0]),
              b = h.indexOf(r[d - 1]),
              w = Math.max(0, S - m),
              P = Math.min(b + x, f),
              C = h.slice(w, P);
            s.scale(i, a.mix({}, u, {
              values: C,
              ticks: l
            }))
          }
        }, e
      }(s);
    c.registerInteraction("pinch", l), t.exports = l
  }])
})

var F2 = f2();
exports.F2 = F2;

export default F2


