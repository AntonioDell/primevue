'use strict';

var BaseStyle = require('primevue/base/style');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default = /*#__PURE__*/_interopDefaultLegacy(BaseStyle);

var css = "\n@layer primevue {\n    .p-tieredmenu ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .p-tieredmenu .p-submenu-list {\n        position: absolute;\n        min-width: 100%;\n        z-index: 1;\n        display: none;\n    }\n\n    .p-tieredmenu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-tieredmenu .p-menuitem-text {\n        line-height: 1;\n    }\n\n    .p-tieredmenu .p-menuitem {\n        position: relative;\n    }\n\n    .p-tieredmenu .p-menuitem-link .p-submenu-icon {\n        margin-left: auto;\n    }\n\n    .p-tieredmenu .p-menuitem-active > .p-submenu-list {\n        display: block;\n        left: 100%;\n        top: 0;\n    }\n}\n";
var inlineStyles = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  start: 'p-tieredmenu-start',
  menu: 'p-tieredmenu-root-list',
  menuitem: function menuitem(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: function action(_ref4) {
    var props = _ref4.props,
      isActive = _ref4.isActive,
      isExactActive = _ref4.isExactActive;
    return ['p-menuitem-link', {
      'router-link-active': isActive,
      'router-link-active-exact': props.exact && isExactActive
    }];
  },
  icon: 'p-menuitem-icon',
  text: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle__default["default"].extend({
  name: 'tieredmenu',
  css: css,
  classes: classes,
  inlineStyles: inlineStyles
});

module.exports = TieredMenuStyle;
