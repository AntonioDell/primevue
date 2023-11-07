this.primevue = this.primevue || {};
this.primevue.tag = (function (BaseComponent, TagStyle, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
    var TagStyle__default = /*#__PURE__*/_interopDefaultLegacy(TagStyle);

    var script$1 = {
      name: 'BaseTag',
      "extends": BaseComponent__default["default"],
      props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
      },
      style: TagStyle__default["default"],
      provide: function provide() {
        return {
          $parentInstance: this
        };
      }
    };

    var script = {
      name: 'Tag',
      "extends": script$1
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
        "class": _ctx.cx('root')
      }, _ctx.ptm('root'), {
        "data-pc-name": "tag"
      }), [_ctx.$slots.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.$slots.icon), vue.mergeProps({
        key: 0,
        "class": _ctx.cx('icon')
      }, _ctx.ptm('icon')), null, 16, ["class"])) : _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
        key: 1,
        "class": [_ctx.cx('icon'), _ctx.icon]
      }, _ctx.ptm('icon')), null, 16)) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "default", {}, function () {
        return [vue.createElementVNode("span", vue.mergeProps({
          "class": _ctx.cx('value')
        }, _ctx.ptm('value')), vue.toDisplayString(_ctx.value), 17)];
      })], 16);
    }

    script.render = render;

    return script;

})(primevue.basecomponent, primevue.tag.style, Vue);
