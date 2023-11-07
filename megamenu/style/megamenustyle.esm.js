import BaseStyle from 'primevue/base/style';

var css = "\n@layer primevue {\n    .p-megamenu {\n        display: flex;\n    }\n\n    .p-megamenu-root-list {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .p-megamenu-root-list > .p-menuitem {\n        position: relative;\n    }\n\n    .p-megamenu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-megamenu .p-menuitem-text {\n        line-height: 1;\n    }\n\n    .p-megamenu-panel {\n        display: none;\n        position: absolute;\n        width: auto;\n        z-index: 1;\n    }\n\n    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {\n        display: block;\n    }\n\n    .p-megamenu-submenu {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    /* Horizontal */\n    .p-megamenu-horizontal {\n        align-items: center;\n    }\n\n    .p-megamenu-horizontal .p-megamenu-root-list {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n\n    .p-megamenu-horizontal .p-megamenu-end {\n        margin-left: auto;\n        align-self: center;\n    }\n\n    /* Vertical */\n    .p-megamenu-vertical {\n        flex-direction: column;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list {\n        flex-direction: column;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {\n        left: 100%;\n        top: 0;\n    }\n\n    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {\n        margin-left: auto;\n    }\n\n    .p-megamenu-grid {\n        display: flex;\n    }\n\n    .p-megamenu-col-2,\n    .p-megamenu-col-3,\n    .p-megamenu-col-4,\n    .p-megamenu-col-6,\n    .p-megamenu-col-12 {\n        flex: 0 0 auto;\n        padding: 0.5rem;\n    }\n\n    .p-megamenu-col-2 {\n        width: 16.6667%;\n    }\n\n    .p-megamenu-col-3 {\n        width: 25%;\n    }\n\n    .p-megamenu-col-4 {\n        width: 33.3333%;\n    }\n\n    .p-megamenu-col-6 {\n        width: 50%;\n    }\n\n    .p-megamenu-col-12 {\n        width: 100%;\n    }\n}\n";
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
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  menu: 'p-megamenu-root-list',
  submenuHeader: function submenuHeader(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-header p-submenu-header', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  menuitem: function menuitem(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: function action(_ref5) {
    var props = _ref5.props,
      isActive = _ref5.isActive,
      isExactActive = _ref5.isExactActive;
    return ['p-menuitem-link', {
      'router-link-active': isActive,
      'router-link-active-exact': props.exact && isExactActive
    }];
  },
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  panel: 'p-megamenu-panel',
  grid: 'p-megamenu-grid',
  column: function column(_ref6) {
    var instance = _ref6.instance,
      processedItem = _ref6.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    switch (length) {
      case 2:
        columnClass = 'p-megamenu-col-6';
        break;
      case 3:
        columnClass = 'p-megamenu-col-4';
        break;
      case 4:
        columnClass = 'p-megamenu-col-3';
        break;
      case 6:
        columnClass = 'p-megamenu-col-2';
        break;
      default:
        columnClass = 'p-megamenu-col-12';
        break;
    }
    return columnClass;
  },
  submenu: 'p-submenu-list p-megamenu-submenu',
  submenuLabel: 'p-menuitem-text',
  separator: 'p-menuitem-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  css: css,
  classes: classes,
  inlineStyles: inlineStyles
});

export { MegaMenuStyle as default };
