import { DomHandler } from 'primevue/utils';
import BaseDirective from 'primevue/basedirective';

var BaseAnimateOnScroll = BaseDirective.extend({});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnimateOnScroll = BaseAnimateOnScroll.extend('animateonscroll', {
  created: function created() {
    this.$value = this.$value || {};
    this.$el.style.opacity = this.$value.enterClass ? '0' : '';
  },
  mounted: function mounted() {
    this.$el.setAttribute('data-pd-animateonscroll', true);
    this.bindIntersectionObserver();
  },
  unmounted: function unmounted() {
    this.unbindAnimationEvents();
    this.unbindIntersectionObserver();
  },
  observer: undefined,
  resetObserver: undefined,
  isObserverActive: false,
  animationState: undefined,
  animationEndListener: undefined,
  methods: {
    bindAnimationEvents: function bindAnimationEvents() {
      var _this = this;
      if (!this.animationEndListener) {
        this.animationEndListener = function () {
          DomHandler.removeMultipleClasses(_this.$el, [_this.$value.enterClass, _this.$value.leaveClass]);
          !_this.$modifiers.once && _this.resetObserver.observe(_this.$el);
          _this.unbindAnimationEvents();
        };
        this.$el.addEventListener('animationend', this.animationEndListener);
      }
    },
    bindIntersectionObserver: function bindIntersectionObserver() {
      var _this2 = this;
      var _this$$value = this.$value,
        root = _this$$value.root,
        rootMargin = _this$$value.rootMargin,
        _this$$value$threshol = _this$$value.threshold,
        threshold = _this$$value$threshol === void 0 ? 0.5 : _this$$value$threshol;
      var options = {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      };

      // States
      this.observer = new IntersectionObserver(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];
        if (_this2.isObserverActive) {
          if (entry.boundingClientRect.top > 0) {
            entry.isIntersecting ? _this2.enter() : _this2.leave();
          }
        } else if (entry.isIntersecting) {
          _this2.enter();
        }
        _this2.isObserverActive = true;
      }, options);
      setTimeout(function () {
        return _this2.observer.observe(_this2.$el);
      }, 0);

      // Reset
      this.resetObserver = new IntersectionObserver(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          entry = _ref4[0];
        if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
          _this2.$el.style.opacity = _this2.$value.enterClass ? '0' : '';
          DomHandler.removeMultipleClasses(_this2.$el, [_this2.$value.enterClass, _this2.$value.leaveClass]);
          _this2.resetObserver.unobserve(_this2.$el);
        }
        _this2.animationState = undefined;
      }, _objectSpread(_objectSpread({}, options), {}, {
        threshold: 0
      }));
    },
    enter: function enter() {
      if (this.animationState !== 'enter' && this.$value.enterClass) {
        this.$el.style.opacity = '';
        DomHandler.removeMultipleClasses(this.$el, this.$value.leaveClass);
        DomHandler.addMultipleClasses(this.$el, this.$value.enterClass);
        this.$modifiers.once && this.unbindIntersectionObserver(this.$el);
        this.bindAnimationEvents();
        this.animationState = 'enter';
      }
    },
    leave: function leave() {
      if (this.animationState !== 'leave' && this.$value.leaveClass) {
        this.$el.style.opacity = this.$value.enterClass ? '0' : '';
        DomHandler.removeMultipleClasses(this.$el, this.$value.enterClass);
        DomHandler.addMultipleClasses(this.$el, this.$value.leaveClass);
        this.bindAnimationEvents();
        this.animationState = 'leave';
      }
    },
    unbindAnimationEvents: function unbindAnimationEvents() {
      if (this.animationEndListener) {
        this.$el.removeEventListener('animationend', this.animationEndListener);
        this.animationEndListener = undefined;
      }
    },
    unbindIntersectionObserver: function unbindIntersectionObserver() {
      var _this$observer, _this$resetObserver;
      (_this$observer = this.observer) === null || _this$observer === void 0 || _this$observer.unobserve(this.$el);
      (_this$resetObserver = this.resetObserver) === null || _this$resetObserver === void 0 || _this$resetObserver.unobserve(this.$el);
      this.isObserverActive = false;
    }
  }
});

export { AnimateOnScroll as default };
