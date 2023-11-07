import BaseStyle from 'primevue/base/style';

var css = "\n@layer primevue {\n    .p-inplace .p-inplace-display {\n        display: inline;\n        cursor: pointer;\n    }\n\n    .p-inplace .p-inplace-content {\n        display: inline;\n    }\n\n    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {\n        display: flex;\n    }\n\n    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-inplace p-component', {
      'p-inplace-closable': props.closable
    }];
  },
  display: function display(_ref2) {
    var props = _ref2.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  css: css,
  classes: classes
});

export { InplaceStyle as default };
