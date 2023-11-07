import BaseStyle from 'primevue/base/style';

var css = "\n@layer primevue {\n    .p-progress-spinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progress-spinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progress-spinner-svg {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n    }\n}\n";
var classes = {
  root: 'p-progress-spinner',
  spinner: 'p-progress-spinner-svg',
  circle: 'p-progress-spinner-circle'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  css: css,
  classes: classes
});

export { ProgressSpinnerStyle as default };
