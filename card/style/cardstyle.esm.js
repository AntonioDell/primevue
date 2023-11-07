import BaseStyle from 'primevue/base/style';

var classes = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle.extend({
  name: 'card',
  classes: classes
});

export { CardStyle as default };
