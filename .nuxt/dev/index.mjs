globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///home/antoniodell/primevue/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///home/antoniodell/primevue/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, getQuery, createError } from 'file:///home/antoniodell/primevue/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file:///home/antoniodell/primevue/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file:///home/antoniodell/primevue/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file:///home/antoniodell/primevue/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///home/antoniodell/primevue/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///home/antoniodell/primevue/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/antoniodell/primevue/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/antoniodell/primevue/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/antoniodell/primevue/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///home/antoniodell/primevue/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/antoniodell/primevue/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery } from 'file:///home/antoniodell/primevue/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/antoniodell/primevue/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/antoniodell/primevue/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/antoniodell/primevue/node_modules/radix3/dist/index.mjs';
import { ref, readonly, getCurrentInstance, onMounted, nextTick, watch } from 'file:///home/antoniodell/primevue/node_modules/vue/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{"contextPath":"/","gtag":{"id":"G-48TTQ6G6KV","config":{},"initialConsent":true,"loadingStrategy":"defer"},"primevue":{"usePrimeVue":true,"layerOrder":"primevue","importPT":"","options":{"ripple":true},"components":[{"name":"AutoComplete","as":"AutoComplete","from":"primevue/autocomplete","export":"default","filePath":"@/components/lib/autocomplete/AutoComplete.vue","global":true},{"name":"Calendar","as":"Calendar","from":"primevue/calendar","export":"default","filePath":"@/components/lib/calendar/Calendar.vue","global":true},{"name":"CascadeSelect","as":"CascadeSelect","from":"primevue/cascadeselect","export":"default","filePath":"@/components/lib/cascadeselect/CascadeSelect.vue","global":true},{"name":"Checkbox","as":"Checkbox","from":"primevue/checkbox","export":"default","filePath":"@/components/lib/checkbox/Checkbox.vue","global":true},{"name":"Chips","as":"Chips","from":"primevue/chips","export":"default","filePath":"@/components/lib/chips/Chips.vue","global":true},{"name":"ColorPicker","as":"ColorPicker","from":"primevue/colorpicker","export":"default","filePath":"@/components/lib/colorpicker/ColorPicker.vue","global":true},{"name":"Dropdown","as":"Dropdown","from":"primevue/dropdown","export":"default","filePath":"@/components/lib/dropdown/Dropdown.vue","global":true},{"name":"Editor","as":"Editor","from":"primevue/editor","export":"default","filePath":"@/components/lib/editor/Editor.vue","global":true},{"name":"InputGroup","as":"InputGroup","from":"primevue/inputgroup","export":"default","filePath":"@/components/lib/inputgroup/InputGroup.vue","global":true},{"name":"InputGroupAddon","as":"InputGroupAddon","from":"primevue/inputgroupaddon","export":"default","filePath":"@/components/lib/inputgroupaddon/InputGroupAddon.vue","global":true},{"name":"InputMask","as":"InputMask","from":"primevue/inputmask","export":"default","filePath":"@/components/lib/inputmask/InputMask.vue","global":true},{"name":"InputNumber","as":"InputNumber","from":"primevue/inputnumber","export":"default","filePath":"@/components/lib/inputnumber/InputNumber.vue","global":true},{"name":"InputSwitch","as":"InputSwitch","from":"primevue/inputswitch","export":"default","filePath":"@/components/lib/inputswitch/InputSwitch.vue","global":true},{"name":"InputText","as":"InputText","from":"primevue/inputtext","export":"default","filePath":"@/components/lib/inputtext/InputText.vue","global":true},{"name":"Knob","as":"Knob","from":"primevue/knob","export":"default","filePath":"@/components/lib/knob/Knob.vue","global":true},{"name":"Listbox","as":"Listbox","from":"primevue/listbox","export":"default","filePath":"@/components/lib/listbox/Listbox.vue","global":true},{"name":"MultiSelect","as":"MultiSelect","from":"primevue/multiselect","export":"default","filePath":"@/components/lib/multiselect/MultiSelect.vue","global":true},{"name":"Password","as":"Password","from":"primevue/password","export":"default","filePath":"@/components/lib/password/Password.vue","global":true},{"name":"RadioButton","as":"RadioButton","from":"primevue/radiobutton","export":"default","filePath":"@/components/lib/radiobutton/RadioButton.vue","global":true},{"name":"Rating","as":"Rating","from":"primevue/rating","export":"default","filePath":"@/components/lib/rating/Rating.vue","global":true},{"name":"SelectButton","as":"SelectButton","from":"primevue/selectbutton","export":"default","filePath":"@/components/lib/selectbutton/SelectButton.vue","global":true},{"name":"Slider","as":"Slider","from":"primevue/slider","export":"default","filePath":"@/components/lib/slider/Slider.vue","global":true},{"name":"Textarea","as":"Textarea","from":"primevue/textarea","export":"default","filePath":"@/components/lib/textarea/Textarea.vue","global":true},{"name":"ToggleButton","as":"ToggleButton","from":"primevue/togglebutton","export":"default","filePath":"@/components/lib/togglebutton/ToggleButton.vue","global":true},{"name":"TreeSelect","as":"TreeSelect","from":"primevue/treeselect","export":"default","filePath":"@/components/lib/treeselect/TreeSelect.vue","global":true},{"name":"TriStateCheckbox","as":"TriStateCheckbox","from":"primevue/tristatecheckbox","export":"default","filePath":"@/components/lib/tristatecheckbox/TriStateCheckbox.vue","global":true},{"name":"Button","as":"Button","from":"primevue/button","export":"default","filePath":"@/components/lib/button/Button.vue","global":true},{"name":"SpeedDial","as":"SpeedDial","from":"primevue/speeddial","export":"default","filePath":"@/components/lib/speeddial/SpeedDial.vue","global":true},{"name":"SplitButton","as":"SplitButton","from":"primevue/splitbutton","export":"default","filePath":"@/components/lib/splitbutton/SplitButton.vue","global":true},{"name":"Column","as":"Column","from":"primevue/column","export":"default","filePath":"@/components/lib/column/Column.vue","global":true},{"name":"Row","as":"Row","from":"primevue/row","export":"default","filePath":"@/components/lib/row/Row.vue","global":true},{"name":"ColumnGroup","as":"ColumnGroup","from":"primevue/columngroup","export":"default","filePath":"@/components/lib/columngroup/ColumnGroup.vue","global":true},{"name":"DataTable","as":"DataTable","from":"primevue/datatable","export":"default","filePath":"@/components/lib/datatable/DataTable.vue","global":true},{"name":"DataView","as":"DataView","from":"primevue/dataview","export":"default","filePath":"@/components/lib/dataview/DataView.vue","global":true},{"name":"DataViewLayoutOptions","as":"DataViewLayoutOptions","from":"primevue/dataviewlayoutoptions","export":"default","filePath":"@/components/lib/dataviewlayoutoptions/DataViewLayoutOptions.vue","global":true},{"name":"OrderList","as":"OrderList","from":"primevue/orderlist","export":"default","filePath":"@/components/lib/orderlist/OrderList.vue","global":true},{"name":"OrganizationChart","as":"OrganizationChart","from":"primevue/organizationchart","export":"default","filePath":"@/components/lib/organizationchart/OrganizationChart.vue","global":true},{"name":"Paginator","as":"Paginator","from":"primevue/paginator","export":"default","filePath":"@/components/lib/paginator/Paginator.vue","global":true},{"name":"PickList","as":"PickList","from":"primevue/picklist","export":"default","filePath":"@/components/lib/picklist/PickList.vue","global":true},{"name":"Tree","as":"Tree","from":"primevue/tree","export":"default","filePath":"@/components/lib/tree/Tree.vue","global":true},{"name":"TreeTable","as":"TreeTable","from":"primevue/treetable","export":"default","filePath":"@/components/lib/treetable/TreeTable.vue","global":true},{"name":"Timeline","as":"Timeline","from":"primevue/timeline","export":"default","filePath":"@/components/lib/timeline/Timeline.vue","global":true},{"name":"VirtualScroller","as":"VirtualScroller","from":"primevue/virtualscroller","export":"default","filePath":"@/components/lib/virtualscroller/VirtualScroller.vue","global":true},{"name":"Accordion","as":"Accordion","from":"primevue/accordion","export":"default","filePath":"@/components/lib/accordion/Accordion.vue","global":true},{"name":"AccordionTab","as":"AccordionTab","from":"primevue/accordiontab","export":"default","filePath":"@/components/lib/accordiontab/AccordionTab.vue","global":true},{"name":"Card","as":"Card","from":"primevue/card","export":"default","filePath":"@/components/lib/card/Card.vue","global":true},{"name":"DeferredContent","as":"DeferredContent","from":"primevue/deferredcontent","export":"default","filePath":"@/components/lib/deferredcontent/DeferredContent.vue","global":true},{"name":"Divider","as":"Divider","from":"primevue/divider","export":"default","filePath":"@/components/lib/divider/Divider.vue","global":true},{"name":"Fieldset","as":"Fieldset","from":"primevue/fieldset","export":"default","filePath":"@/components/lib/fieldset/Fieldset.vue","global":true},{"name":"Panel","as":"Panel","from":"primevue/panel","export":"default","filePath":"@/components/lib/panel/Panel.vue","global":true},{"name":"ScrollPanel","as":"ScrollPanel","from":"primevue/scrollpanel","export":"default","filePath":"@/components/lib/scrollpanel/ScrollPanel.vue","global":true},{"name":"Splitter","as":"Splitter","from":"primevue/splitter","export":"default","filePath":"@/components/lib/splitter/Splitter.vue","global":true},{"name":"SplitterPanel","as":"SplitterPanel","from":"primevue/splitterpanel","export":"default","filePath":"@/components/lib/splitterpanel/SplitterPanel.vue","global":true},{"name":"TabView","as":"TabView","from":"primevue/tabview","export":"default","filePath":"@/components/lib/tabview/TabView.vue","global":true},{"name":"TabPanel","as":"TabPanel","from":"primevue/tabpanel","export":"default","filePath":"@/components/lib/tabpanel/TabPanel.vue","global":true},{"name":"Toolbar","as":"Toolbar","from":"primevue/toolbar","export":"default","filePath":"@/components/lib/toolbar/Toolbar.vue","global":true},{"name":"ConfirmDialog","use":{"as":"ConfirmationService"},"as":"ConfirmDialog","from":"primevue/confirmdialog","export":"default","filePath":"@/components/lib/confirmdialog/ConfirmDialog.vue","global":true},{"name":"ConfirmPopup","use":{"as":"ConfirmationService"},"as":"ConfirmPopup","from":"primevue/confirmpopup","export":"default","filePath":"@/components/lib/confirmpopup/ConfirmPopup.vue","global":true},{"name":"Dialog","as":"Dialog","from":"primevue/dialog","export":"default","filePath":"@/components/lib/dialog/Dialog.vue","global":true},{"name":"DynamicDialog","use":{"as":"DialogService"},"as":"DynamicDialog","from":"primevue/dynamicdialog","export":"default","filePath":"@/components/lib/dynamicdialog/DynamicDialog.vue","global":true},{"name":"OverlayPanel","as":"OverlayPanel","from":"primevue/overlaypanel","export":"default","filePath":"@/components/lib/overlaypanel/OverlayPanel.vue","global":true},{"name":"Sidebar","as":"Sidebar","from":"primevue/sidebar","export":"default","filePath":"@/components/lib/sidebar/Sidebar.vue","global":true},{"name":"FileUpload","as":"FileUpload","from":"primevue/fileupload","export":"default","filePath":"@/components/lib/fileupload/FileUpload.vue","global":true},{"name":"Breadcrumb","as":"Breadcrumb","from":"primevue/breadcrumb","export":"default","filePath":"@/components/lib/breadcrumb/Breadcrumb.vue","global":true},{"name":"ContextMenu","as":"ContextMenu","from":"primevue/contextmenu","export":"default","filePath":"@/components/lib/contextmenu/ContextMenu.vue","global":true},{"name":"Dock","as":"Dock","from":"primevue/dock","export":"default","filePath":"@/components/lib/dock/Dock.vue","global":true},{"name":"Menu","as":"Menu","from":"primevue/menu","export":"default","filePath":"@/components/lib/menu/Menu.vue","global":true},{"name":"Menubar","as":"Menubar","from":"primevue/menubar","export":"default","filePath":"@/components/lib/menubar/Menubar.vue","global":true},{"name":"MegaMenu","as":"MegaMenu","from":"primevue/megamenu","export":"default","filePath":"@/components/lib/megamenu/MegaMenu.vue","global":true},{"name":"PanelMenu","as":"PanelMenu","from":"primevue/panelmenu","export":"default","filePath":"@/components/lib/panelmenu/PanelMenu.vue","global":true},{"name":"Steps","as":"Steps","from":"primevue/steps","export":"default","filePath":"@/components/lib/steps/Steps.vue","global":true},{"name":"TabMenu","as":"TabMenu","from":"primevue/tabmenu","export":"default","filePath":"@/components/lib/tabmenu/TabMenu.vue","global":true},{"name":"TieredMenu","as":"TieredMenu","from":"primevue/tieredmenu","export":"default","filePath":"@/components/lib/tieredmenu/TieredMenu.vue","global":true},{"name":"Chart","as":"Chart","from":"primevue/chart","export":"default","filePath":"@/components/lib/chart/Chart.vue","global":true},{"name":"Message","as":"Message","from":"primevue/message","export":"default","filePath":"@/components/lib/message/Message.vue","global":true},{"name":"InlineMessage","as":"InlineMessage","from":"primevue/inlinemessage","export":"default","filePath":"@/components/lib/inlinemessage/InlineMessage.vue","global":true},{"name":"Toast","use":{"as":"ToastService"},"as":"Toast","from":"primevue/toast","export":"default","filePath":"@/components/lib/toast/Toast.vue","global":true},{"name":"Carousel","as":"Carousel","from":"primevue/carousel","export":"default","filePath":"@/components/lib/carousel/Carousel.vue","global":true},{"name":"Galleria","as":"Galleria","from":"primevue/galleria","export":"default","filePath":"@/components/lib/galleria/Galleria.vue","global":true},{"name":"Image","as":"Image","from":"primevue/image","export":"default","filePath":"@/components/lib/image/Image.vue","global":true},{"name":"Avatar","as":"Avatar","from":"primevue/avatar","export":"default","filePath":"@/components/lib/avatar/Avatar.vue","global":true},{"name":"AvatarGroup","as":"AvatarGroup","from":"primevue/avatargroup","export":"default","filePath":"@/components/lib/avatargroup/AvatarGroup.vue","global":true},{"name":"Badge","as":"Badge","from":"primevue/badge","export":"default","filePath":"@/components/lib/badge/Badge.vue","global":true},{"name":"BlockUI","as":"BlockUI","from":"primevue/blockui","export":"default","filePath":"@/components/lib/blockui/BlockUI.vue","global":true},{"name":"Chip","as":"Chip","from":"primevue/chip","export":"default","filePath":"@/components/lib/chip/Chip.vue","global":true},{"name":"Inplace","as":"Inplace","from":"primevue/inplace","export":"default","filePath":"@/components/lib/inplace/Inplace.vue","global":true},{"name":"ScrollTop","as":"ScrollTop","from":"primevue/scrolltop","export":"default","filePath":"@/components/lib/scrolltop/ScrollTop.vue","global":true},{"name":"Skeleton","as":"Skeleton","from":"primevue/skeleton","export":"default","filePath":"@/components/lib/skeleton/Skeleton.vue","global":true},{"name":"ProgressBar","as":"ProgressBar","from":"primevue/progressbar","export":"default","filePath":"@/components/lib/progressbar/ProgressBar.vue","global":true},{"name":"ProgressSpinner","as":"ProgressSpinner","from":"primevue/progressspinner","export":"default","filePath":"@/components/lib/progressspinner/ProgressSpinner.vue","global":true},{"name":"Tag","as":"Tag","from":"primevue/tag","export":"default","filePath":"@/components/lib/tag/Tag.vue","global":true},{"name":"Terminal","as":"Terminal","from":"primevue/terminal","export":"default","filePath":"@/components/lib/terminal/Terminal.vue","global":true}],"directives":[{"name":"badge","as":"BadgeDirective","from":"@/components/lib/badgedirective/BadgeDirective.js"},{"name":"tooltip","as":"Tooltip","from":"@/components/lib/tooltip/Tooltip.js"},{"name":"ripple","as":"Ripple","from":"@/components/lib/ripple/Ripple.js"},{"name":"styleclass","as":"StyleClass","from":"@/components/lib/styleclass/StyleClass.js"},{"name":"focustrap","as":"FocusTrap","from":"@/components/lib/focustrap/FocusTrap.js"},{"name":"animateonscroll","as":"AnimateOnScroll","from":"@/components/lib/animateonscroll/AnimateOnScroll.js"}],"composables":[{"name":"useStyle","as":"useStyle","from":"@/components/lib/usestyle/useStyle.js"}],"config":[{"name":"PrimeVue","as":"PrimeVue","from":"@/components/lib/config/PrimeVue.js"}],"services":[{"name":"ConfirmationService","as":"ConfirmationService","from":"@/components/lib/confirmationservice/ConfirmationService.js"},{"name":"DialogService","as":"DialogService","from":"@/components/lib/dialogservice/DialogService.js"},{"name":"ToastService","as":"ToastService","from":"@/components/lib/toastservice/ToastService.js"}],"styles":[{"name":"BaseStyle","as":"BaseStyle","from":"@/components/lib/base/style/BaseStyle.js"},{"name":"BaseComponentStyle","as":"BaseComponentStyle","from":"@/components/lib/basecomponent/style/BaseComponentStyle.js"},{"name":"AutoCompleteStyle","as":"AutoCompleteStyle","from":"@/components/lib/autocomplete/style/AutoCompleteStyle.js"},{"name":"CalendarStyle","as":"CalendarStyle","from":"@/components/lib/calendar/style/CalendarStyle.js"},{"name":"CascadeSelectStyle","as":"CascadeSelectStyle","from":"@/components/lib/cascadeselect/style/CascadeSelectStyle.js"},{"name":"CheckboxStyle","as":"CheckboxStyle","from":"@/components/lib/checkbox/style/CheckboxStyle.js"},{"name":"ChipsStyle","as":"ChipsStyle","from":"@/components/lib/chips/style/ChipsStyle.js"},{"name":"ColorPickerStyle","as":"ColorPickerStyle","from":"@/components/lib/colorpicker/style/ColorPickerStyle.js"},{"name":"DropdownStyle","as":"DropdownStyle","from":"@/components/lib/dropdown/style/DropdownStyle.js"},{"name":"EditorStyle","as":"EditorStyle","from":"@/components/lib/editor/style/EditorStyle.js"},{"name":"InputGroupStyle","as":"InputGroupStyle","from":"@/components/lib/inputgroup/style/InputGroupStyle.js"},{"name":"InputGroupAddonStyle","as":"InputGroupAddonStyle","from":"@/components/lib/inputgroupaddon/style/InputGroupAddonStyle.js"},{"name":"InputMaskStyle","as":"InputMaskStyle","from":"@/components/lib/inputmask/style/InputMaskStyle.js"},{"name":"InputNumberStyle","as":"InputNumberStyle","from":"@/components/lib/inputnumber/style/InputNumberStyle.js"},{"name":"InputSwitchStyle","as":"InputSwitchStyle","from":"@/components/lib/inputswitch/style/InputSwitchStyle.js"},{"name":"InputTextStyle","as":"InputTextStyle","from":"@/components/lib/inputtext/style/InputTextStyle.js"},{"name":"KnobStyle","as":"KnobStyle","from":"@/components/lib/knob/style/KnobStyle.js"},{"name":"ListboxStyle","as":"ListboxStyle","from":"@/components/lib/listbox/style/ListboxStyle.js"},{"name":"MultiSelectStyle","as":"MultiSelectStyle","from":"@/components/lib/multiselect/style/MultiSelectStyle.js"},{"name":"PasswordStyle","as":"PasswordStyle","from":"@/components/lib/password/style/PasswordStyle.js"},{"name":"RadioButtonStyle","as":"RadioButtonStyle","from":"@/components/lib/radiobutton/style/RadioButtonStyle.js"},{"name":"RatingStyle","as":"RatingStyle","from":"@/components/lib/rating/style/RatingStyle.js"},{"name":"SelectButtonStyle","as":"SelectButtonStyle","from":"@/components/lib/selectbutton/style/SelectButtonStyle.js"},{"name":"SliderStyle","as":"SliderStyle","from":"@/components/lib/slider/style/SliderStyle.js"},{"name":"TextareaStyle","as":"TextareaStyle","from":"@/components/lib/textarea/style/TextareaStyle.js"},{"name":"ToggleButtonStyle","as":"ToggleButtonStyle","from":"@/components/lib/togglebutton/style/ToggleButtonStyle.js"},{"name":"TreeSelectStyle","as":"TreeSelectStyle","from":"@/components/lib/treeselect/style/TreeSelectStyle.js"},{"name":"TriStateCheckboxStyle","as":"TriStateCheckboxStyle","from":"@/components/lib/tristatecheckbox/style/TriStateCheckboxStyle.js"},{"name":"ButtonStyle","as":"ButtonStyle","from":"@/components/lib/button/style/ButtonStyle.js"},{"name":"SpeedDialStyle","as":"SpeedDialStyle","from":"@/components/lib/speeddial/style/SpeedDialStyle.js"},{"name":"SplitButtonStyle","as":"SplitButtonStyle","from":"@/components/lib/splitbutton/style/SplitButtonStyle.js"},{"name":"ColumnStyle","as":"ColumnStyle","from":"@/components/lib/column/style/ColumnStyle.js"},{"name":"RowStyle","as":"RowStyle","from":"@/components/lib/row/style/RowStyle.js"},{"name":"ColumnGroupStyle","as":"ColumnGroupStyle","from":"@/components/lib/columngroup/style/ColumnGroupStyle.js"},{"name":"DataTableStyle","as":"DataTableStyle","from":"@/components/lib/datatable/style/DataTableStyle.js"},{"name":"DataViewStyle","as":"DataViewStyle","from":"@/components/lib/dataview/style/DataViewStyle.js"},{"name":"DataViewLayoutOptionsStyle","as":"DataViewLayoutOptionsStyle","from":"@/components/lib/dataviewlayoutoptions/style/DataViewLayoutOptionsStyle.js"},{"name":"OrderListStyle","as":"OrderListStyle","from":"@/components/lib/orderlist/style/OrderListStyle.js"},{"name":"OrganizationChartStyle","as":"OrganizationChartStyle","from":"@/components/lib/organizationchart/style/OrganizationChartStyle.js"},{"name":"PaginatorStyle","as":"PaginatorStyle","from":"@/components/lib/paginator/style/PaginatorStyle.js"},{"name":"PickListStyle","as":"PickListStyle","from":"@/components/lib/picklist/style/PickListStyle.js"},{"name":"TreeStyle","as":"TreeStyle","from":"@/components/lib/tree/style/TreeStyle.js"},{"name":"TreeTableStyle","as":"TreeTableStyle","from":"@/components/lib/treetable/style/TreeTableStyle.js"},{"name":"TimelineStyle","as":"TimelineStyle","from":"@/components/lib/timeline/style/TimelineStyle.js"},{"name":"VirtualScrollerStyle","as":"VirtualScrollerStyle","from":"@/components/lib/virtualscroller/style/VirtualScrollerStyle.js"},{"name":"AccordionStyle","as":"AccordionStyle","from":"@/components/lib/accordion/style/AccordionStyle.js"},{"name":"AccordionTabStyle","as":"AccordionTabStyle","from":"@/components/lib/accordiontab/style/AccordionTabStyle.js"},{"name":"CardStyle","as":"CardStyle","from":"@/components/lib/card/style/CardStyle.js"},{"name":"DeferredContentStyle","as":"DeferredContentStyle","from":"@/components/lib/deferredcontent/style/DeferredContentStyle.js"},{"name":"DividerStyle","as":"DividerStyle","from":"@/components/lib/divider/style/DividerStyle.js"},{"name":"FieldsetStyle","as":"FieldsetStyle","from":"@/components/lib/fieldset/style/FieldsetStyle.js"},{"name":"PanelStyle","as":"PanelStyle","from":"@/components/lib/panel/style/PanelStyle.js"},{"name":"ScrollPanelStyle","as":"ScrollPanelStyle","from":"@/components/lib/scrollpanel/style/ScrollPanelStyle.js"},{"name":"SplitterStyle","as":"SplitterStyle","from":"@/components/lib/splitter/style/SplitterStyle.js"},{"name":"SplitterPanelStyle","as":"SplitterPanelStyle","from":"@/components/lib/splitterpanel/style/SplitterPanelStyle.js"},{"name":"TabViewStyle","as":"TabViewStyle","from":"@/components/lib/tabview/style/TabViewStyle.js"},{"name":"TabPanelStyle","as":"TabPanelStyle","from":"@/components/lib/tabpanel/style/TabPanelStyle.js"},{"name":"ToolbarStyle","as":"ToolbarStyle","from":"@/components/lib/toolbar/style/ToolbarStyle.js"},{"name":"ConfirmDialogStyle","as":"ConfirmDialogStyle","from":"@/components/lib/confirmdialog/style/ConfirmDialogStyle.js"},{"name":"ConfirmPopupStyle","as":"ConfirmPopupStyle","from":"@/components/lib/confirmpopup/style/ConfirmPopupStyle.js"},{"name":"DialogStyle","as":"DialogStyle","from":"@/components/lib/dialog/style/DialogStyle.js"},{"name":"DynamicDialogStyle","as":"DynamicDialogStyle","from":"@/components/lib/dynamicdialog/style/DynamicDialogStyle.js"},{"name":"OverlayPanelStyle","as":"OverlayPanelStyle","from":"@/components/lib/overlaypanel/style/OverlayPanelStyle.js"},{"name":"SidebarStyle","as":"SidebarStyle","from":"@/components/lib/sidebar/style/SidebarStyle.js"},{"name":"FileUploadStyle","as":"FileUploadStyle","from":"@/components/lib/fileupload/style/FileUploadStyle.js"},{"name":"BreadcrumbStyle","as":"BreadcrumbStyle","from":"@/components/lib/breadcrumb/style/BreadcrumbStyle.js"},{"name":"ContextMenuStyle","as":"ContextMenuStyle","from":"@/components/lib/contextmenu/style/ContextMenuStyle.js"},{"name":"DockStyle","as":"DockStyle","from":"@/components/lib/dock/style/DockStyle.js"},{"name":"MenuStyle","as":"MenuStyle","from":"@/components/lib/menu/style/MenuStyle.js"},{"name":"MenubarStyle","as":"MenubarStyle","from":"@/components/lib/menubar/style/MenubarStyle.js"},{"name":"MegaMenuStyle","as":"MegaMenuStyle","from":"@/components/lib/megamenu/style/MegaMenuStyle.js"},{"name":"PanelMenuStyle","as":"PanelMenuStyle","from":"@/components/lib/panelmenu/style/PanelMenuStyle.js"},{"name":"StepsStyle","as":"StepsStyle","from":"@/components/lib/steps/style/StepsStyle.js"},{"name":"TabMenuStyle","as":"TabMenuStyle","from":"@/components/lib/tabmenu/style/TabMenuStyle.js"},{"name":"TieredMenuStyle","as":"TieredMenuStyle","from":"@/components/lib/tieredmenu/style/TieredMenuStyle.js"},{"name":"ChartStyle","as":"ChartStyle","from":"@/components/lib/chart/style/ChartStyle.js"},{"name":"MessageStyle","as":"MessageStyle","from":"@/components/lib/message/style/MessageStyle.js"},{"name":"InlineMessageStyle","as":"InlineMessageStyle","from":"@/components/lib/inlinemessage/style/InlineMessageStyle.js"},{"name":"ToastStyle","as":"ToastStyle","from":"@/components/lib/toast/style/ToastStyle.js"},{"name":"CarouselStyle","as":"CarouselStyle","from":"@/components/lib/carousel/style/CarouselStyle.js"},{"name":"GalleriaStyle","as":"GalleriaStyle","from":"@/components/lib/galleria/style/GalleriaStyle.js"},{"name":"ImageStyle","as":"ImageStyle","from":"@/components/lib/image/style/ImageStyle.js"},{"name":"AvatarStyle","as":"AvatarStyle","from":"@/components/lib/avatar/style/AvatarStyle.js"},{"name":"AvatarGroupStyle","as":"AvatarGroupStyle","from":"@/components/lib/avatargroup/style/AvatarGroupStyle.js"},{"name":"BadgeStyle","as":"BadgeStyle","from":"@/components/lib/badge/style/BadgeStyle.js"},{"name":"BlockUIStyle","as":"BlockUIStyle","from":"@/components/lib/blockui/style/BlockUIStyle.js"},{"name":"ChipStyle","as":"ChipStyle","from":"@/components/lib/chip/style/ChipStyle.js"},{"name":"InplaceStyle","as":"InplaceStyle","from":"@/components/lib/inplace/style/InplaceStyle.js"},{"name":"ScrollTopStyle","as":"ScrollTopStyle","from":"@/components/lib/scrolltop/style/ScrollTopStyle.js"},{"name":"SkeletonStyle","as":"SkeletonStyle","from":"@/components/lib/skeleton/style/SkeletonStyle.js"},{"name":"ProgressBarStyle","as":"ProgressBarStyle","from":"@/components/lib/progressbar/style/ProgressBarStyle.js"},{"name":"ProgressSpinnerStyle","as":"ProgressSpinnerStyle","from":"@/components/lib/progressspinner/style/ProgressSpinnerStyle.js"},{"name":"TagStyle","as":"TagStyle","from":"@/components/lib/tag/style/TagStyle.js"},{"name":"TerminalStyle","as":"TerminalStyle","from":"@/components/lib/terminal/style/TerminalStyle.js"},{"name":"BadgeDirectiveStyle","as":"BadgeDirectiveStyle","from":"@/components/lib/badgedirective/style/BadgeDirectiveStyle.js"},{"name":"TooltipStyle","as":"TooltipStyle","from":"@/components/lib/tooltip/style/TooltipStyle.js"},{"name":"RippleStyle","as":"RippleStyle","from":"@/components/lib/ripple/style/RippleStyle.js"},{"name":"StyleClassStyle","as":"StyleClassStyle","from":"@/components/lib/styleclass/style/StyleClassStyle.js"},{"name":"FocusTrapStyle","as":"FocusTrapStyle","from":"@/components/lib/focustrap/style/FocusTrapStyle.js"},{"name":"AnimateOnScrollStyle","as":"AnimateOnScrollStyle","from":"@/components/lib/animateonscroll/style/AnimateOnScrollStyle.js"}],"injectStylesAsString":["'<style type=\"text/css\" data-primevue-style-id=\"layer-order\" >@layer primevue</style>'"]}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"/home/antoniodell/primevue/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/antoniodell/primevue","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/antoniodell/primevue/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/antoniodell/primevue/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/antoniodell/primevue/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const DomHandler = {
  innerWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth;
      if (margin) {
        let style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight;
      if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  },
  getOffset(el) {
    if (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index(element) {
    if (element) {
      let children = element.parentNode.childNodes;
      let num = 0;
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num;
        if (children[i].nodeType === 1)
          num++;
      }
    }
    return -1;
  },
  addMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.addClass(element, className)));
    }
  },
  removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  },
  addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  },
  removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  },
  hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  },
  addStyles(element, styles = {}) {
    if (element) {
      Object.entries(styles).forEach(([key, value]) => element.style[key] = value);
    }
  },
  find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  },
  setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  },
  setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        var _a, _b;
        const styles = ((_a = element == null ? void 0 : element.$attrs) == null ? void 0 : _a[rule]) ? [(_b = element == null ? void 0 : element.$attrs) == null ? void 0 : _b[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = typeof v;
            if (type === "string" || type === "number") {
              cv.push(v);
            } else if (type === "object") {
              const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "p-bind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute(element, name) {
    if (this.isElement(element)) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  },
  isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight(el) {
    if (el) {
      let height = el.offsetHeight;
      let style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth(el) {
    if (el) {
      let width = el.offsetWidth;
      let style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition(element, target) {
    if (element) {
      const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      const elementOuterHeight = elementDimensions.height;
      const elementOuterWidth = elementDimensions.width;
      const targetOuterHeight = target.offsetHeight;
      const targetOuterWidth = target.offsetWidth;
      const targetOffset = target.getBoundingClientRect();
      const windowScrollTop = this.getWindowScrollTop();
      const windowScrollLeft = this.getWindowScrollLeft();
      const viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        element.style.transformOrigin = "bottom";
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
        element.style.transformOrigin = "top";
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
      else
        left = targetOffset.left + windowScrollLeft;
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  relativePosition(element, target) {
    if (element) {
      const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
      const targetHeight = target.offsetHeight;
      const targetOffset = target.getBoundingClientRect();
      const viewport = this.getViewport();
      let top, left;
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        element.style.transformOrigin = "bottom";
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
        element.style.transformOrigin = "top";
      }
      if (elementDimensions.width > viewport.width) {
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        left = 0;
      }
      element.style.top = top + "px";
      element.style.left = left + "px";
    }
  },
  getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  },
  getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        try {
          let styleDeclaration = window["getComputedStyle"](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
        } catch (err) {
          return false;
        }
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementHeight = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = "hidden";
      element.style.display = "block";
      let elementWidth = element.offsetWidth;
      element.style.display = "none";
      element.style.visibility = "visible";
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions(element) {
    if (element) {
      let dimensions = {};
      element.style.visibility = "hidden";
      element.style.display = "block";
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = "none";
      element.style.visibility = "visible";
      return dimensions;
    }
    return 0;
  },
  fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      let last = +/* @__PURE__ */ new Date();
      let opacity = 0;
      let tick = function() {
        opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +/* @__PURE__ */ new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut(element, ms) {
    if (element) {
      let opacity = 1, interval = 50, duration = ms, gap = interval / duration;
      let fading = setInterval(() => {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.elElement)
      target.elElement.appendChild(element);
    else
      throw new Error("Cannot append " + target + " to " + element);
  },
  isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  },
  scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  },
  getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let scrollDiv = document.createElement("div");
    this.addStyles(scrollDiv, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    });
    document.body.appendChild(scrollDiv);
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  },
  isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist(element) {
    return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
  },
  isClient() {
    return false;
  },
  focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  },
  getFocusableElements(element, selector = "") {
    let focusableElements = this.find(
      element,
      `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`
    );
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector);
    const index = focusableElements.length > 0 ? focusableElements.findIndex((el) => el === element) : -1;
    const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  isClickable(element) {
    if (element) {
      const targetNode = element.nodeName;
      const parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || !!element.closest(".p-button, .p-checkbox, .p-radiobutton");
    }
    return false;
  },
  applyStyle(element, style) {
    if (typeof style === "string") {
      element.style.cssText = style;
    } else {
      for (let prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation(element) {
    if (element) {
      const style = getComputedStyle(element);
      const animationDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition(element) {
    if (element) {
      const style = getComputedStyle(element);
      const transitionDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV(csv, filename) {
    let blob = new Blob([csv], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + ".csv");
    } else {
      let link = document.createElement("a");
      if (link.download !== void 0) {
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", filename + ".csv");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = "data:text/csv;charset=utf-8," + csv;
        window.open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  },
  unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
};

const ObjectUtils = {
  equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.deepEquals(obj1, obj2);
  },
  deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData(data, field) {
    if (!data || !field) {
      return null;
    }
    try {
      const value = data[field];
      if (this.isNotEmpty(value))
        return value;
    } catch {
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") === -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    }
    return null;
  },
  getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  },
  filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  },
  reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList(value, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  },
  insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
    }
    return str;
  },
  getVNodeProp(vnode, prop) {
    let props = vnode.props;
    if (props) {
      let kebabProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      let propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
      return vnode.type.extends.props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
    }
    return null;
  },
  toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  },
  toKebabCase(str) {
    return this.isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, (c, i) => i === 0 ? c : "-" + c.toLowerCase()).toLowerCase() : str;
  },
  toCapitalCase(str) {
    return this.isString(str, { empty: false }) ? str[0].toUpperCase() + str.slice(1) : str;
  },
  isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
  },
  isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject(value, empty = true) {
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString(value, empty = true) {
    return typeof value === "string" && (empty || value !== "");
  },
  isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  },
  sort(value1, value2, order = 1, comparator, nullSortOrder = 1) {
    const result = this.compare(value1, value2, comparator, order);
    let finalSortOrder = order;
    if (this.isEmpty(value1) || this.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  },
  compare(value1, value2, comparator, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = comparator(value1, value2);
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator() {
    return new Intl.Collator(void 0, { numeric: true }).compare;
  },
  nestedKeys(obj = {}, parentKey = "") {
    return Object.entries(obj).reduce((o, [key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      this.isObject(value) ? o = o.concat(this.nestedKeys(value, currentKey)) : o.push(currentKey);
      return o;
    }, []);
  }
};

function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
let _id = 0;
function useStyle(css, options = {}) {
  const isLoaded = ref(false);
  const cssRef = ref(css);
  const styleRef = ref(null);
  const defaultDocument = DomHandler.isClient() ? window.document : void 0;
  const { document = defaultDocument, immediate = true, manual = false, name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, props = {} } = options;
  let stop = () => {
  };
  const load = (_css, _props = {}) => {
    if (!document)
      return;
    const _styleProps = { ...props, ..._props };
    const [_name, _id2, _nonce] = [_styleProps.name || name, _styleProps.id || id, _styleProps.nonce || nonce];
    styleRef.value = document.querySelector(`style[data-primevue-style-id="${_name}"]`) || document.getElementById(_id2) || document.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css;
      DomHandler.setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      document.head.appendChild(styleRef.value);
      DomHandler.setAttribute(styleRef.value, "data-primevue-style-id", name);
      DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value)
      return;
    stop = watch(
      cssRef,
      (value) => {
        styleRef.value.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  return {
    id,
    name,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}

const css$1a = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;
const classes$1n = {};
const inlineStyles$j = {};
const BaseStyle = {
  name: "base",
  css: css$1a,
  classes: classes$1n,
  inlineStyles: inlineStyles$j,
  loadStyle(options = {}) {
    return this.css ? useStyle(this.css, { name: this.name, ...options }) : {};
  },
  getStyleSheet(extendedCSS = "", props = {}) {
    if (this.css) {
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primevue-style-id="${this.name}" ${_props}>${this.css}${extendedCSS}</style>`;
    }
    return "";
  },
  extend(style) {
    return { ...this, css: void 0, ...style };
  }
};

const buttonCSS = `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`;
const checkboxCSS = `
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: default;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
const inputTextCSS = `
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}


.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`;
const radioButtonCSS = `
.p-radiobutton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton.p-radiobutton-disabled {
    cursor: default;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}
`;
const css$19 = `
@layer primevue {
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default !important;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
${buttonCSS}
${checkboxCSS}
${inputTextCSS}
${radioButtonCSS}
}
`;
const BaseComponentStyle = BaseStyle.extend({
  name: "common",
  css: css$19,
  loadGlobalStyle: (globalCSS, options = {}) => useStyle(globalCSS, { name: "global", ...options })
});

const css$18 = `
@layer primevue {
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-autocomplete-dd .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete-dd .p-autocomplete-input,
    .p-autocomplete-dd .p-autocomplete-multiple-container {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-autocomplete-dd .p-autocomplete-dropdown {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0px;
    }

    .p-autocomplete .p-autocomplete-panel {
        min-width: 100%;
    }

    .p-autocomplete-panel {
        position: absolute;
        overflow: auto;
        top: 0;
        left: 0;
    }

    .p-autocomplete-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-autocomplete-item {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-autocomplete-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-autocomplete-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-autocomplete-token-icon {
        cursor: pointer;
    }

    .p-autocomplete-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }

    .p-autocomplete-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }

    .p-fluid .p-autocomplete {
        display: flex;
    }

    .p-fluid .p-autocomplete-dd .p-autocomplete-input {
        width: 1%;
    }
}
`;
const inlineStyles$i = {
  root: { position: "relative" }
};
const classes$1m = {
  root: ({ instance, props }) => [
    "p-autocomplete p-component p-inputwrapper",
    {
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-autocomplete-dd": props.dropdown,
      "p-autocomplete-multiple": props.multiple,
      "p-inputwrapper-filled": props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
      "p-inputwrapper-focus": instance.focused,
      "p-overlay-open": instance.overlayVisible
    }
  ],
  input: ({ props }) => ["p-autocomplete-input p-inputtext p-component", { "p-autocomplete-dd-input": props.dropdown }],
  container: "p-autocomplete-multiple-container p-component p-inputtext",
  token: ({ instance, i }) => ["p-autocomplete-token", { "p-focus": instance.focusedMultipleOptionIndex === i }],
  tokenLabel: "p-autocomplete-token-label",
  removeTokenIcon: "p-autocomplete-token-icon",
  inputToken: "p-autocomplete-input-token",
  loadingIcon: "p-autocomplete-loader",
  dropdownButton: "p-autocomplete-dropdown",
  panel: ({ instance }) => [
    "p-autocomplete-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  list: "p-autocomplete-items",
  itemGroup: "p-autocomplete-item-group",
  item: ({ instance, option, i, getItemOptions }) => [
    "p-autocomplete-item",
    {
      "p-highlight": instance.isSelected(option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      "p-disabled": instance.isOptionDisabled(option)
    }
  ],
  emptyMessage: "p-autocomplete-empty-message"
};
const AutoCompleteStyle = BaseStyle.extend({
  name: "autocomplete",
  css: css$18,
  classes: classes$1m,
  inlineStyles: inlineStyles$i
});

const css$17 = `
@layer primevue {
    .p-calendar {
        display: inline-flex;
        max-width: 100%;
    }

    .p-calendar .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-calendar-w-btn .p-inputtext {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-calendar-w-btn .p-datepicker-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    /* Fluid */
    .p-fluid .p-calendar {
        display: flex;
    }

    .p-fluid .p-calendar .p-inputtext {
        width: 1%;
    }

    /* Datepicker */
    .p-calendar .p-datepicker {
        min-width: 100%;
    }

    .p-datepicker {
        width: auto;
    }

    .p-datepicker-inline {
        display: inline-block;
        overflow-x: auto;
    }

    /* Header */
    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datepicker-header .p-datepicker-title {
        margin: 0 auto;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {
        flex: 1 1 auto;
    }

    /* DatePicker Table */
    .p-datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .p-datepicker td > span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    /* Month Picker */
    .p-monthpicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /* Year Picker */
    .p-yearpicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /*  Button Bar */
    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Time Picker */
    .p-timepicker {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-timepicker button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-timepicker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* Touch UI */
    .p-datepicker-touch-ui,
    .p-calendar .p-datepicker-touch-ui {
        min-width: 80vw;
    }
}
`;
const inlineStyles$h = {
  root: ({ props }) => ({ position: props.appendTo === "self" ? "relative" : void 0 })
};
const classes$1l = {
  root: ({ props, state }) => [
    "p-calendar p-component p-inputwrapper",
    {
      "p-calendar-w-btn": props.showIcon,
      "p-calendar-timeonly": props.timeOnly,
      "p-calendar-disabled": props.disabled,
      "p-inputwrapper-filled": props.modelValue,
      "p-inputwrapper-focus": state.focused,
      "p-focus": state.focused || state.overlayVisible
    }
  ],
  input: "p-inputtext p-component",
  dropdownButton: "p-datepicker-trigger",
  panel: ({ instance, props, state }) => [
    "p-datepicker p-component",
    {
      "p-datepicker-inline": props.inline,
      "p-disabled": props.disabled,
      "p-datepicker-timeonly": props.timeOnly,
      "p-datepicker-multiple-month": props.numberOfMonths > 1,
      "p-datepicker-monthpicker": state.currentView === "month",
      "p-datepicker-yearpicker": state.currentView === "year",
      "p-datepicker-touch-ui": props.touchUI,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  groupContainer: "p-datepicker-group-container",
  group: "p-datepicker-group",
  header: "p-datepicker-header",
  previousButton: "p-datepicker-prev p-link",
  previousIcon: "p-datepicker-prev-icon",
  title: "p-datepicker-title",
  monthTitle: "p-datepicker-month p-link",
  yearTitle: "p-datepicker-year p-link",
  decadeTitle: "p-datepicker-decade",
  nextButton: "p-datepicker-next p-link",
  nextIcon: "p-datepicker-next-icon",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  day: ({ date }) => [{ "p-datepicker-other-month": date.otherMonth, "p-datepicker-today": date.today }],
  dayLabel: ({ instance, date }) => [{ "p-highlight": instance.isSelected(date) && date.selectable, "p-disabled": !date.selectable }],
  monthPicker: "p-monthpicker",
  month: ({ instance, month, index }) => ["p-monthpicker-month", { "p-highlight": instance.isMonthSelected(index), "p-disabled": !month.selectable }],
  yearPicker: "p-yearpicker",
  year: ({ instance, year }) => ["p-yearpicker-year", { "p-highlight": instance.isYearSelected(year.value), "p-disabled": !year.selectable }],
  timePicker: "p-timepicker",
  hourPicker: "p-hour-picker",
  incrementButton: "p-link",
  decrementButton: "p-link",
  separatorContainer: "p-separator",
  minutePicker: "p-minute-picker",
  secondPicker: "p-second-picker",
  ampmPicker: "p-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  todayButton: "p-button-text",
  clearButton: "p-button-text"
};
const CalendarStyle = BaseStyle.extend({
  name: "calendar",
  css: css$17,
  classes: classes$1l,
  inlineStyles: inlineStyles$h
});

const css$16 = `
@layer primevue {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }

    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }

    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-cascadeselect-group-icon {
        margin-left: auto;
    }

    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }

    .p-fluid .p-cascadeselect {
        display: flex;
    }

    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }

    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-cascadeselect-item-active {
        overflow: visible !important;
    }

    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }
}
`;
const inlineStyles$g = {
  root: ({ props }) => ({ position: props.appendTo === "self" ? "relative" : void 0 })
};
const classes$1k = {
  root: ({ instance, props }) => [
    "p-cascadeselect p-component p-inputwrapper",
    {
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-overlay-open": instance.overlayVisible
    }
  ],
  label: ({ instance, props }) => [
    "p-cascadeselect-label p-inputtext",
    {
      "p-placeholder": instance.label === props.placeholder,
      "p-cascadeselect-label-empty": !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
    }
  ],
  dropdownButton: "p-cascadeselect-trigger",
  loadingIcon: "p-cascadeselect-trigger-icon",
  dropdownIcon: "p-cascadeselect-trigger-icon",
  panel: ({ instance }) => [
    "p-cascadeselect-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  wrapper: "p-cascadeselect-items-wrapper",
  list: "p-cascadeselect-panel p-cascadeselect-items",
  item: ({ instance, processedOption }) => [
    "p-cascadeselect-item",
    {
      "p-cascadeselect-item-group": instance.isOptionGroup(processedOption),
      "p-cascadeselect-item-active p-highlight": instance.isOptionActive(processedOption),
      "p-focus": instance.isOptionFocused(processedOption),
      "p-disabled": instance.isOptionDisabled(processedOption)
    }
  ],
  content: "p-cascadeselect-item-content",
  text: "p-cascadeselect-item-text",
  groupIcon: "p-cascadeselect-group-icon",
  sublist: "p-cascadeselect-sublist"
};
const CascadeSelectStyle = BaseStyle.extend({
  name: "cascadeselect",
  css: css$16,
  classes: classes$1k,
  inlineStyles: inlineStyles$g
});

const classes$1j = {
  root: ({ instance, props }) => [
    "p-checkbox p-component",
    {
      "p-checkbox-checked": instance.checked,
      "p-checkbox-disabled": props.disabled,
      "p-checkbox-focused": instance.focused
    }
  ],
  input: ({ instance, props }) => [
    "p-checkbox-box",
    {
      "p-highlight": instance.checked,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }
  ],
  icon: "p-checkbox-icon"
};
const CheckboxStyle = BaseStyle.extend({
  name: "checkbox",
  classes: classes$1j
});

const css$15 = `
@layer primevue {
    .p-chips {
        display: inline-flex;
    }

    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }

    .p-chips-token-icon {
        cursor: pointer;
    }

    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }

    .p-fluid .p-chips {
        display: flex;
    }
}
`;
const classes$1i = {
  root: ({ instance, props }) => [
    "p-chips p-component p-inputwrapper",
    {
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      "p-inputwrapper-focus": instance.focused
    }
  ],
  container: "p-inputtext p-chips-multiple-container",
  token: ({ state, index }) => ["p-chips-token", { "p-focus": state.focusedIndex === index }],
  label: "p-chips-token-label",
  removeTokenIcon: "p-chips-token-icon",
  inputToken: "p-chips-input-token"
};
const ChipsStyle = BaseStyle.extend({
  name: "chips",
  css: css$15,
  classes: classes$1i
});

const css$14 = `
@layer primevue {
    .p-colorpicker-panel .p-colorpicker-color {
        background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
    }

    .p-colorpicker-panel .p-colorpicker-hue {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
    }
}
`;
const classes$1h = {
  root: ({ props }) => ["p-colorpicker p-component", { "p-colorpicker-overlay": !props.inline }],
  input: ({ props }) => ["p-colorpicker-preview p-inputtext", { "p-disabled": props.disabled }],
  panel: ({ instance, props }) => [
    "p-colorpicker-panel",
    {
      "p-colorpicker-overlay-panel": !props.inline,
      "p-disabled": props.disabled,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  content: "p-colorpicker-content",
  selector: "p-colorpicker-color-selector",
  color: "p-colorpicker-color",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
const ColorPickerStyle = BaseStyle.extend({
  name: "colorpicker",
  css: css$14,
  classes: classes$1h
});

const css$13 = `
@layer primevue {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }

    .p-dropdown-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-dropdown-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-dropdown-label {
        cursor: default;
    }

    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }

    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-dropdown-items-wrapper {
        overflow: auto;
    }

    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-dropdown-item-group {
        cursor: auto;
    }

    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-dropdown-filter {
        width: 100%;
    }

    .p-dropdown-filter-container {
        position: relative;
    }

    .p-dropdown-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-fluid .p-dropdown {
        display: flex;
    }

    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`;
const classes$1g = {
  root: ({ instance, props, state }) => [
    "p-dropdown p-component p-inputwrapper",
    {
      "p-disabled": props.disabled,
      "p-dropdown-clearable": props.showClear && !props.disabled,
      "p-focus": state.focused,
      "p-inputwrapper-filled": instance.hasSelectedOption,
      "p-inputwrapper-focus": state.focused || state.overlayVisible,
      "p-overlay-open": state.overlayVisible
    }
  ],
  input: ({ instance, props }) => [
    "p-dropdown-label p-inputtext",
    {
      "p-placeholder": !props.editable && instance.label === props.placeholder,
      "p-dropdown-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
    }
  ],
  clearIcon: "p-dropdown-clear-icon",
  trigger: "p-dropdown-trigger",
  loadingicon: "p-dropdown-trigger-icon",
  dropdownIcon: "p-dropdown-trigger-icon",
  panel: ({ instance }) => [
    "p-dropdown-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  header: "p-dropdown-header",
  filterContainer: "p-dropdown-filter-container",
  filterInput: "p-dropdown-filter p-inputtext p-component",
  filterIcon: "p-dropdown-filter-icon",
  wrapper: "p-dropdown-items-wrapper",
  list: "p-dropdown-items",
  itemGroup: "p-dropdown-item-group",
  item: ({ instance, state, option, focusedOption }) => [
    "p-dropdown-item",
    {
      "p-highlight": instance.isSelected(option),
      "p-focus": state.focusedOptionIndex === focusedOption,
      "p-disabled": instance.isOptionDisabled(option)
    }
  ],
  emptyMessage: "p-dropdown-empty-message"
};
const DropdownStyle = BaseStyle.extend({
  name: "dropdown",
  css: css$13,
  classes: classes$1g
});

const quillCSS = `
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`;
const classes$1f = {
  root: "p-editor-container",
  toolbar: "p-editor-toolbar",
  content: "p-editor-content"
};
const EditorStyle = BaseStyle.extend({
  name: "editor",
  css: quillCSS,
  classes: classes$1f
});

const classes$1e = {
  root: "p-inputgroup"
};
const InputGroupStyle = BaseStyle.extend({
  name: "inputgroup",
  classes: classes$1e
});

const classes$1d = {
  root: "p-inputgroup-addon"
};
const InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes: classes$1d
});

const classes$1c = {
  root: ({ instance }) => [
    "p-inputmask p-inputtext p-component",
    {
      "p-filled": instance.filled
    }
  ]
};
const InputMaskStyle = BaseStyle.extend({
  name: "inputmask",
  classes: classes$1c
});

const css$12 = `
@layer primevue {
    .p-inputnumber {
        display: inline-flex;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
        display: none;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
        flex: 1 1 auto;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-vertical {
        flex-direction: column;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
        order: 1;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-buttons-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
        order: 3;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-fluid .p-inputnumber {
        width: 100%;
    }

    .p-fluid .p-inputnumber .p-inputnumber-input {
        width: 1%;
    }

    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
        width: 100%;
    }
}
`;
const classes$1b = {
  root: ({ instance, props }) => [
    "p-inputnumber p-component p-inputwrapper",
    {
      "p-inputwrapper-filled": instance.filled,
      "p-inputwrapper-focus": instance.focused,
      "p-inputnumber-buttons-stacked": props.showButtons && props.buttonLayout === "stacked",
      "p-inputnumber-buttons-horizontal": props.showButtons && props.buttonLayout === "horizontal",
      "p-inputnumber-buttons-vertical": props.showButtons && props.buttonLayout === "vertical"
    }
  ],
  input: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: ({ instance, props }) => [
    "p-inputnumber-button p-inputnumber-button-up",
    {
      "p-disabled": props.showButtons && props.max !== null && instance.maxBoundry()
    }
  ],
  decrementButton: ({ instance, props }) => [
    "p-inputnumber-button p-inputnumber-button-down",
    {
      "p-disabled": props.showButtons && props.min !== null && instance.minBoundry()
    }
  ]
};
const InputNumberStyle = BaseStyle.extend({
  name: "inputnumber",
  css: css$12,
  classes: classes$1b
});

const css$11 = `
@layer primevue {
    .p-inputswitch {
        display: inline-block;
    }

    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }

    .p-inputswitch-slider:before {
        position: absolute;
        content: '';
        top: 50%;
    }
}
`;
const inlineStyles$f = {
  root: { position: "relative" }
};
const classes$1a = {
  root: ({ instance, props }) => [
    "p-inputswitch p-component",
    {
      "p-inputswitch-checked": instance.checked,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }
  ],
  slider: "p-inputswitch-slider"
};
const InputSwitchStyle = BaseStyle.extend({
  name: "inputswitch",
  css: css$11,
  classes: classes$1a,
  inlineStyles: inlineStyles$f
});

const classes$19 = {
  root: ({ instance, props }) => [
    "p-inputtext p-component",
    {
      "p-filled": instance.filled,
      "p-inputtext-sm": props.size === "small",
      "p-inputtext-lg": props.size === "large"
    }
  ]
};
const InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  classes: classes$19
});

const css$10 = `
@keyframes dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
@layer primevue {
    .p-knob-range {
        fill: none;
        transition: stroke 0.1s ease-in;
    }
    .p-knob-value {
        animation-name: dash-frame;
        animation-fill-mode: forwards;
        fill: none;
    }
    .p-knob-text {
        font-size: 1.3rem;
        text-align: center;
    }
}
`;
const classes$18 = {
  root: ({ props }) => ["p-knob p-component", { "p-disabled": props.disabled }],
  range: "p-knob-range",
  value: "p-knob-value",
  label: "p-knob-text"
};
const KnobStyle = BaseStyle.extend({
  name: "knob",
  css: css$10,
  classes: classes$18
});

const css$$ = `
@layer primevue {
    .p-listbox-list-wrapper {
        overflow: auto;
    }

    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .p-listbox-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .p-listbox-item-group {
        cursor: auto;
    }

    .p-listbox-filter-container {
        position: relative;
    }

    .p-listbox-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-listbox-filter {
        width: 100%;
    }
}
`;
const classes$17 = {
  root: ({ instance, props }) => [
    "p-listbox p-component",
    {
      "p-focus": instance.focused,
      "p-disabled": props.disabled
    }
  ],
  header: "p-listbox-header",
  filterContainer: "p-listbox-filter-container",
  filterInput: "p-listbox-filter p-inputtext p-component",
  filterIcon: "p-listbox-filter-icon",
  wrapper: "p-listbox-list-wrapper",
  list: "p-listbox-list",
  itemGroup: "p-listbox-item-group",
  item: ({ instance, option, index, getItemOptions }) => [
    "p-listbox-item",
    {
      "p-highlight": instance.isSelected(option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      "p-disabled": instance.isOptionDisabled(option)
    }
  ],
  emptyMessage: "p-listbox-empty-message"
};
const ListboxStyle = BaseStyle.extend({
  name: "listbox",
  css: css$$,
  classes: classes$17
});

const css$_ = `
@layer primevue {
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-multiselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-multiselect-token-icon {
        cursor: pointer;
    }

    .p-multiselect .p-multiselect-panel {
        min-width: 100%;
    }

    .p-multiselect-items-wrapper {
        overflow: auto;
    }

    .p-multiselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-multiselect-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-multiselect-item-group {
        cursor: auto;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-multiselect-filter-container {
        position: relative;
        flex: 1 1 auto;
    }

    .p-multiselect-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-multiselect-filter-container .p-inputtext {
        width: 100%;
    }

    .p-multiselect-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        margin-left: auto;
    }

    .p-fluid .p-multiselect {
        display: flex;
    }
}
`;
const inlineStyles$e = {
  root: ({ props }) => ({ position: props.appendTo === "self" ? "relative" : void 0 })
};
const classes$16 = {
  root: ({ instance, props }) => [
    "p-multiselect p-component p-inputwrapper",
    {
      "p-multiselect-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue && props.modelValue.length,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-overlay-open": instance.overlayVisible
    }
  ],
  labelContainer: "p-multiselect-label-container",
  label: ({ instance, props }) => [
    "p-multiselect-label",
    {
      "p-placeholder": instance.label === props.placeholder,
      "p-multiselect-label-empty": !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
    }
  ],
  token: "p-multiselect-token",
  tokenLabel: "p-multiselect-token-label",
  removeTokenIcon: "p-multiselect-token-icon",
  trigger: "p-multiselect-trigger",
  loadingIcon: "p-multiselect-trigger-icon",
  dropdownIcon: "p-multiselect-trigger-icon",
  panel: ({ instance }) => [
    "p-multiselect-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  header: "p-multiselect-header",
  headerCheckboxContainer: ({ instance }) => [
    "p-checkbox p-component",
    {
      "p-checkbox-checked": instance.allSelected,
      "p-checkbox-focused": instance.headerCheckboxFocused
    }
  ],
  headerCheckbox: ({ instance }) => [
    "p-checkbox-box",
    {
      "p-highlight": instance.allSelected,
      "p-focus": instance.headerCheckboxFocused
    }
  ],
  headerCheckboxIcon: "p-checkbox-icon",
  filterContainer: "p-multiselect-filter-container",
  filterInput: "p-multiselect-filter p-inputtext p-component",
  filterIcon: "p-multiselect-filter-icon",
  closeButton: "p-multiselect-close p-link",
  closeIcon: "p-multiselect-close-icon",
  wrapper: "p-multiselect-items-wrapper",
  list: "p-multiselect-items p-component",
  itemGroup: "p-multiselect-item-group",
  item: ({ instance, option, index, getItemOptions }) => [
    "p-multiselect-item",
    {
      "p-highlight": instance.isSelected(option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      "p-disabled": instance.isOptionDisabled(option)
    }
  ],
  checkboxContainer: "p-checkbox p-component",
  checkbox: ({ instance, option }) => ["p-checkbox-box", { "p-highlight": instance.isSelected(option) }],
  checkboxIcon: "p-checkbox-icon",
  emptyMessage: "p-multiselect-empty-message"
};
const MultiSelectStyle = BaseStyle.extend({
  name: "multiselect",
  css: css$_,
  classes: classes$16,
  inlineStyles: inlineStyles$e
});

const css$Z = `
@layer primevue {
    .p-password {
        display: inline-flex;
    }

    .p-password .p-password-panel {
        min-width: 100%;
    }

    .p-password-meter {
        height: 10px;
    }

    .p-password-strength {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
    }

    .p-fluid .p-password {
        display: flex;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }
}
`;
const inlineStyles$d = {
  root: ({ props }) => ({ position: props.appendTo === "self" ? "relative" : void 0 })
};
const classes$15 = {
  root: ({ instance, props }) => [
    "p-password p-component p-inputwrapper",
    {
      "p-inputwrapper-filled": instance.filled,
      "p-inputwrapper-focus": instance.focused,
      "p-input-icon-right": props.toggleMask
    }
  ],
  input: ({ props }) => [
    "p-password-input",
    {
      "p-disabled": props.disabled
    }
  ],
  panel: ({ instance }) => [
    "p-password-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  meter: "p-password-meter",
  meterLabel: ({ instance }) => `p-password-strength ${instance.meter ? instance.meter.strength : ""}`,
  info: "p-password-info"
};
const PasswordStyle = BaseStyle.extend({
  name: "password",
  css: css$Z,
  classes: classes$15,
  inlineStyles: inlineStyles$d
});

const classes$14 = {
  root: ({ instance, props }) => [
    "p-radiobutton p-component",
    {
      "p-radiobutton-checked": instance.checked,
      "p-radiobutton-disabled": props.disabled,
      "p-radiobutton-focused": instance.focused
    }
  ],
  input: ({ instance, props }) => [
    "p-radiobutton-box",
    {
      "p-highlight": instance.checked,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }
  ],
  icon: "p-radiobutton-icon"
};
const RadioButtonStyle = BaseStyle.extend({
  name: "radiobutton",
  classes: classes$14
});

const css$Y = `
@layer primevue {
    .p-rating {
        position: relative;
        display: flex;
        align-items: center;
    }

    .p-rating-item {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .p-rating.p-readonly .p-rating-item {
        cursor: default;
    }
}
`;
const classes$13 = {
  root: ({ props }) => [
    "p-rating",
    {
      "p-readonly": props.readonly,
      "p-disabled": props.disabled
    }
  ],
  cancelItem: ({ instance }) => [
    "p-rating-item p-rating-cancel-item",
    {
      "p-focus": instance.focusedOptionIndex === 0 && instance.isFocusVisibleItem
    }
  ],
  cancelIcon: "p-rating-icon p-rating-cancel",
  item: ({ instance, props, value }) => [
    "p-rating-item",
    {
      "p-rating-item-active": value <= props.modelValue,
      "p-focus": value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }
  ],
  onIcon: "p-rating-icon",
  offIcon: "p-rating-icon"
};
const RatingStyle = BaseStyle.extend({
  name: "rating",
  css: css$Y,
  classes: classes$13
});

const classes$12 = {
  root: ({ props }) => ["p-selectbutton p-buttonset p-component", { "p-disabled": props.disabled }],
  button: ({ instance, option }) => [
    "p-button p-component",
    {
      "p-highlight": instance.isSelected(option),
      "p-disabled": instance.isOptionDisabled(option)
    }
  ],
  label: "p-button-label"
};
const SelectButtonStyle = BaseStyle.extend({
  name: "selectbutton",
  classes: classes$12
});

const css$X = `
@layer primevue {
    .p-slider {
        position: relative;
    }

    .p-slider .p-slider-handle {
        cursor: grab;
        touch-action: none;
        display: block;
    }

    .p-slider-range {
        display: block;
    }

    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }

    .p-slider-vertical {
        height: 100px;
    }

    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }

    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`;
const inlineStyles$c = {
  handle: { position: "absolute" },
  range: { position: "absolute" }
};
const classes$11 = {
  root: ({ props }) => [
    "p-slider p-component",
    {
      "p-disabled": props.disabled,
      "p-slider-horizontal": props.orientation === "horizontal",
      "p-slider-vertical": props.orientation === "vertical"
    }
  ],
  range: "p-slider-range",
  handle: "p-slider-handle"
};
const SliderStyle = BaseStyle.extend({
  name: "slider",
  css: css$X,
  classes: classes$11,
  inlineStyles: inlineStyles$c
});

const css$W = `
@layer primevue {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`;
const classes$10 = {
  root: ({ instance, props }) => [
    "p-inputtextarea p-inputtext p-component",
    {
      "p-filled": instance.filled,
      "p-inputtextarea-resizable ": props.autoResize
    }
  ]
};
const TextareaStyle = BaseStyle.extend({
  name: "textarea",
  css: css$W,
  classes: classes$10
});

const classes$$ = {
  root: ({ instance, props }) => [
    "p-button p-togglebutton p-component",
    {
      "p-focus": instance.focused,
      "p-button-icon-only": instance.hasIcon && !instance.hasLabel,
      "p-disabled": props.disabled,
      "p-highlight": props.modelValue === true
    }
  ],
  icon: ({ instance, props }) => [
    "p-button-icon",
    {
      "p-button-icon-left": props.iconPos === "left" && instance.label,
      "p-button-icon-right": props.iconPos === "right" && instance.label
    }
  ],
  label: "p-button-label"
};
const ToggleButtonStyle = BaseStyle.extend({
  name: "accordion",
  classes: classes$$
});

const css$V = `
@layer primevue {
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-treeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-treeselect .p-treeselect-panel {
        min-width: 100%;
    }

    .p-treeselect-items-wrapper {
        overflow: auto;
    }

    .p-fluid .p-treeselect {
        display: flex;
    }
}
`;
const inlineStyles$b = {
  root: ({ props }) => ({ position: props.appendTo === "self" ? "relative" : void 0 })
};
const classes$_ = {
  root: ({ instance, props }) => [
    "p-treeselect p-component p-inputwrapper",
    {
      "p-treeselect-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": !instance.emptyValue,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible
    }
  ],
  labelContainer: "p-treeselect-label-container",
  label: ({ instance, props }) => [
    "p-treeselect-label",
    {
      "p-placeholder": instance.label === props.placeholder,
      "p-treeselect-label-empty": !props.placeholder && instance.emptyValue
    }
  ],
  token: "p-treeselect-token",
  tokenLabel: "p-treeselect-token-label",
  trigger: "p-treeselect-trigger",
  triggerIcon: "p-treeselect-trigger-icon",
  panel: ({ instance }) => [
    "p-treeselect-panel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  wrapper: "p-treeselect-items-wrapper",
  emptyMessage: "p-treeselect-empty-message"
};
const TreeSelectStyle = BaseStyle.extend({
  name: "treeselect",
  css: css$V,
  classes: classes$_,
  inlineStyles: inlineStyles$b
});

const classes$Z = {
  root: ({ instance, props }) => [
    "p-checkbox p-component",
    {
      "p-checkbox-checked": props.modelValue === true,
      "p-checkbox-disabled": props.disabled,
      "p-checkbox-focused": instance.focused
    }
  ],
  checkbox: ({ instance, props }) => [
    "p-checkbox-box",
    {
      "p-highlight": props.modelValue != null,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }
  ],
  checkIcon: "p-checkbox-icon",
  uncheckIcon: "p-checkbox-icon",
  nullableIcon: "p-checkbox-icon"
};
const TriStateCheckboxStyle = BaseStyle.extend({
  name: "tristatecheckbox",
  classes: classes$Z
});

const classes$Y = {
  root: ({ instance, props }) => [
    "p-button p-component",
    {
      "p-button-icon-only": instance.hasIcon && !props.label && !props.badge,
      "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
      "p-disabled": instance.$attrs.disabled || instance.$attrs.disabled === "" || props.loading,
      "p-button-loading": props.loading,
      "p-button-loading-label-only": props.loading && !instance.hasIcon && props.label,
      "p-button-link": props.link,
      [`p-button-${props.severity}`]: props.severity,
      "p-button-raised": props.raised,
      "p-button-rounded": props.rounded,
      "p-button-text": props.text,
      "p-button-outlined": props.outlined,
      "p-button-sm": props.size === "small",
      "p-button-lg": props.size === "large",
      "p-button-plain": props.plain
    }
  ],
  loadingIcon: "p-button-loading-icon pi-spin",
  icon: ({ props }) => [
    "p-button-icon",
    {
      "p-button-icon-left": props.iconPos === "left" && props.label,
      "p-button-icon-right": props.iconPos === "right" && props.label,
      "p-button-icon-top": props.iconPos === "top" && props.label,
      "p-button-icon-bottom": props.iconPos === "bottom" && props.label
    }
  ],
  label: "p-button-label"
};
const ButtonStyle = BaseStyle.extend({
  name: "button",
  classes: classes$Y
});

const css$U = `
@layer primevue {
    .p-speeddial {
        position: absolute;
        display: flex;
    }

    .p-speeddial-button {
        z-index: 1;
    }

    .p-speeddial-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0s linear 0.2s;
        pointer-events: none;
        z-index: 2;
    }

    .p-speeddial-item {
        transform: scale(0);
        opacity: 0;
        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
        will-change: transform;
    }

    .p-speeddial-action {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
    }

    .p-speeddial-circle .p-speeddial-item,
    .p-speeddial-semi-circle .p-speeddial-item,
    .p-speeddial-quarter-circle .p-speeddial-item {
        position: absolute;
    }

    .p-speeddial-rotate {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        will-change: transform;
    }

    .p-speeddial-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-mask-visible {
        pointer-events: none;
        opacity: 1;
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-opened .p-speeddial-list {
        pointer-events: auto;
    }

    .p-speeddial-opened .p-speeddial-item {
        transform: scale(1);
        opacity: 1;
    }

    .p-speeddial-opened .p-speeddial-rotate {
        transform: rotate(45deg);
    }
}
`;
const inlineStyles$a = {
  root: ({ props }) => ({
    alignItems: props.direction === "up" || props.direction === "down" ? "center" : "",
    justifyContent: props.direction === "left" || props.direction === "right" ? "center" : "",
    flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
  }),
  menu: ({ props }) => ({
    flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
  })
};
const classes$X = {
  root: ({ instance, props }) => [
    `p-speeddial p-component p-speeddial-${props.type}`,
    {
      [`p-speeddial-direction-${props.direction}`]: props.type !== "circle",
      "p-speeddial-opened": instance.d_visible,
      "p-disabled": props.disabled
    }
  ],
  button: ({ props }) => [
    "p-speeddial-button p-button-rounded",
    {
      "p-speeddial-rotate": props.rotateAnimation && !props.hideIcon
    }
  ],
  menu: "p-speeddial-list",
  menuitem: ({ instance, id }) => [
    "p-speeddial-item",
    {
      "p-focus": instance.isItemActive(id)
    }
  ],
  action: ({ item }) => [
    "p-speeddial-action",
    {
      "p-disabled": item.disabled
    }
  ],
  actionIcon: "p-speeddial-action-icon",
  mask: ({ instance }) => [
    "p-speeddial-mask",
    {
      "p-speeddial-mask-visible": instance.d_visible
    }
  ]
};
const SpeedDialStyle = BaseStyle.extend({
  name: "speeddial",
  css: css$U,
  classes: classes$X,
  inlineStyles: inlineStyles$a
});

const css$T = `
@layer primevue {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton {
        display: flex;
    }
}
`;
const classes$W = {
  root: ({ props }) => [
    "p-splitbutton p-component",
    {
      [`p-button-${props.severity}`]: props.severity,
      "p-button-raised": props.raised,
      "p-button-rounded": props.rounded,
      "p-button-text": props.text,
      "p-button-outlined": props.outlined,
      "p-button-sm": props.size === "small",
      "p-button-lg": props.size === "large"
    }
  ],
  button: "p-splitbutton-defaultbutton",
  menuButton: "p-splitbutton-menubutton"
};
const SplitButtonStyle = BaseStyle.extend({
  name: "splitbutton",
  css: css$T,
  classes: classes$W
});

const ColumnStyle = {};

const RowStyle = {};

const ColumnGroupStyle = {};

const css$S = `
@layer primevue {
    .p-datatable {
        position: relative;
    }

    .p-datatable-table {
        border-spacing: 0px;
        width: 100%;
    }

    .p-datatable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }

    .p-datatable .p-sortable-column .p-column-title,
    .p-datatable .p-sortable-column .p-sortable-column-icon,
    .p-datatable .p-sortable-column .p-sortable-column-badge {
        vertical-align: middle;
    }

    .p-datatable .p-sortable-column .p-sortable-column-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-datatable-hoverable-rows .p-selectable-row {
        cursor: pointer;
    }

    /* Scrollable */
    .p-datatable-scrollable > .p-datatable-wrapper {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        top: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        bottom: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-frozen-column {
        position: sticky;
        background: inherit;
    }

    .p-datatable-scrollable th.p-frozen-column {
        z-index: 1;
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
        position: sticky;
        z-index: 1;
    }

    /* Resizable */
    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
        display: none;
    }

    .p-datatable .p-column-resizer {
        display: block;
        position: absolute !important;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable .p-column-header-content {
        display: flex;
        align-items: center;
    }

    .p-datatable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }

    .p-datatable .p-row-editor-init,
    .p-datatable .p-row-editor-save,
    .p-datatable .p-row-editor-cancel {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Expand */
    .p-datatable .p-row-toggler {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Reorder */
    .p-datatable-reorder-indicator-up,
    .p-datatable-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-reorderable-column,
    .p-datatable-reorderablerow-handle {
        cursor: move;
    }

    /* Loader */
    .p-datatable .p-datatable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    /* Filter */
    .p-column-filter-row {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .p-column-filter-menu {
        display: inline-flex;
        margin-left: auto;
    }

    .p-column-filter-row .p-column-filter-element {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-column-filter-menu-button,
    .p-column-filter-clear-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-column-filter-row-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-column-filter-row-item {
        cursor: pointer;
    }

    .p-column-filter-add-button,
    .p-column-filter-remove-button {
        justify-content: center;
    }

    .p-column-filter-add-button .p-button-label,
    .p-column-filter-remove-button .p-button-label {
        flex-grow: 0;
    }

    .p-column-filter-buttonbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    /* Responsive */
    .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
        display: none;
    }

    /* VirtualScroller */
    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        top: 0;
        left: 0;
    }
}
`;
const classes$V = {
  root: ({ instance, props }) => [
    "p-datatable p-component",
    {
      "p-datatable-hoverable-rows": props.rowHover || props.selectionMode,
      "p-datatable-resizable": props.resizableColumns,
      "p-datatable-resizable-fit": props.resizableColumns && props.columnResizeMode === "fit",
      "p-datatable-scrollable": props.scrollable,
      "p-datatable-flex-scrollable": props.scrollable && props.scrollHeight === "flex",
      "p-datatable-responsive-stack": props.responsiveLayout === "stack",
      "p-datatable-responsive-scroll": props.responsiveLayout === "scroll",
      "p-datatable-striped": props.stripedRows,
      "p-datatable-gridlines": props.showGridlines,
      "p-datatable-grouped-header": instance.headerColumnGroup != null,
      "p-datatable-grouped-footer": instance.footerColumnGroup != null,
      "p-datatable-sm": props.size === "small",
      "p-datatable-lg": props.size === "large"
    }
  ],
  loadingOverlay: "p-datatable-loading-overlay p-component-overlay",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  paginator: ({ instance }) => instance.paginatorTop ? "p-paginator-top" : instance.paginatorBottom ? "p-paginator-bottom" : "",
  wrapper: "p-datatable-wrapper",
  table: ({ props }) => [
    "p-datatable-table",
    {
      "p-datatable-scrollable-table": props.scrollable,
      "p-datatable-resizable-table": props.resizableColumns,
      "p-datatable-resizable-table-fit": props.resizableColumns && props.columnResizeMode === "fit"
    }
  ],
  //tablehead
  thead: "p-datatable-thead",
  // headercell
  headerCell: ({ instance, props, column }) => column && !instance.columnProp(column, "hidden") && (props.rowGroupMode !== "subheader" || props.groupRowsBy !== instance.columnProp(column, "field")) ? [
    "p-filter-column",
    {
      "p-frozen-column": instance.columnProp(column, "frozen")
    }
  ] : [
    {
      "p-sortable-column": instance.columnProp("sortable"),
      "p-resizable-column": instance.resizableColumns,
      "p-highlight": instance.isColumnSorted(),
      "p-filter-column": props.filterColumn,
      "p-frozen-column": instance.columnProp("frozen"),
      "p-reorderable-column": props.reorderableColumns
    }
  ],
  columnResizer: "p-column-resizer",
  headerContent: "p-column-header-content",
  headerTitle: "p-column-title",
  sortIcon: "p-sortable-column-icon",
  sortBadge: "p-sortable-column-badge",
  //headercheckbox
  headerCheckboxWrapper: ({ instance }) => [
    "p-checkbox p-component",
    {
      "p-checkbox-focused": instance.focused,
      "p-disabled": instance.disabled
    }
  ],
  headerCheckbox: ({ instance }) => [
    "p-checkbox-box p-component",
    {
      "p-highlight": instance.checked,
      "p-disabled": instance.disabled,
      "p-focus": instance.focused
    }
  ],
  headerCheckboxIcon: "p-checkbox-icon",
  // columnfilter
  columnFilter: ({ props }) => [
    "p-column-filter p-fluid",
    {
      "p-column-filter-row": props.display === "row",
      "p-column-filter-menu": props.display === "menu"
    }
  ],
  filterInput: "p-fluid p-column-filter-element",
  filterMenuButton: ({ instance }) => [
    "p-column-filter-menu-button p-link",
    {
      "p-column-filter-menu-button-open": instance.overlayVisible,
      "p-column-filter-menu-button-active": instance.hasFilter()
    }
  ],
  headerFilterClearButton: ({ instance }) => [
    "p-column-filter-clear-button p-link",
    {
      "p-hidden-space": !instance.hasRowFilter()
    }
  ],
  filterOverlay: ({ instance, props }) => [
    {
      "p-column-filter-overlay p-component p-fluid": true,
      "p-column-filter-overlay-menu": props.display === "menu",
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  filterRowItems: "p-column-filter-row-items",
  filterRowItem: ({ instance, matchMode }) => [
    "p-column-filter-row-item",
    {
      "p-highlight": matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }
  ],
  filterSeparator: "p-column-filter-separator",
  filterOperator: "p-column-filter-operator",
  filterOperatorDropdown: "p-column-filter-operator-dropdown",
  filterConstraints: "p-column-filter-constraints",
  filterConstraint: "p-column-filter-constraint",
  filterMatchModeDropdown: "p-column-filter-matchmode-dropdown",
  filterRemoveButton: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
  filterAddRule: "p-column-filter-add-rule",
  filterAddRuleButton: "p-column-filter-add-button p-button-text p-button-sm",
  filterButtonbar: "p-column-filter-buttonbar",
  filterClearButton: "p-button-outlined p-button-sm",
  filterApplyButton: "p-button-sm",
  //tablebody
  tbody: ({ props }) => props.frozenRow ? "p-datatable-tbody p-datatable-frozen-tbody" : "p-datatable-tbody",
  rowgroupHeader: "p-rowgroup-header",
  rowGroupToggler: "p-row-toggler p-link",
  rowGroupTogglerIcon: "p-row-toggler-icon",
  row: ({ instance, props, rowData }) => {
    let rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push("p-selectable-row");
    }
    if (props.selection) {
      rowStyleClass.push({
        "p-highlight": instance.isSelected(rowData)
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        "p-highlight-contextmenu": instance.isSelectedWithContextMenu(rowData)
      });
    }
    return rowStyleClass;
  },
  rowExpansion: "p-datatable-row-expansion",
  rowgroupFooter: "p-rowgroup-footer",
  emptyMessage: "p-datatable-emptymessage",
  //bodycell
  bodyCell: ({ instance }) => [
    {
      "p-selection-column": instance.columnProp("selectionMode") != null,
      "p-editable-column": instance.isEditable(),
      "p-cell-editing": instance.d_editing,
      "p-frozen-column": instance.columnProp("frozen")
    }
  ],
  columnTitle: "p-column-title",
  rowReorderIcon: "p-datatable-reorderablerow-handle",
  rowToggler: "p-row-toggler p-link",
  rowTogglerIcon: "p-row-toggler-icon",
  rowEditorInitButton: "p-row-editor-init p-link",
  rowEditorInitIcon: "p-row-editor-init-icon",
  rowEditorSaveButton: "p-row-editor-save p-link",
  rowEditorSaveIcon: "p-row-editor-save-icon",
  rowEditorCancelButton: "p-row-editor-cancel p-link",
  rowEditorCancelIcon: "p-row-editor-cancel-icon",
  //rowcheckbox
  checkboxWrapper: ({ instance }) => [
    "p-checkbox p-component",
    {
      "p-checkbox-focused": instance.focused
    }
  ],
  checkbox: ({ instance }) => [
    "p-checkbox-box p-component",
    {
      "p-highlight": instance.checked,
      "p-disabled": instance.$attrs.disabled,
      "p-focus": instance.focused
    }
  ],
  checkboxIcon: "p-checkbox-icon",
  //rowradiobutton
  radiobuttonWrapper: ({ instance }) => [
    "p-radiobutton p-component",
    {
      "p-radiobutton-focused": instance.focused
    }
  ],
  radiobutton: ({ instance }) => [
    "p-radiobutton-box p-component",
    {
      "p-highlight": instance.checked,
      "p-disabled": instance.$attrs.disabled,
      "p-focus": instance.focused
    }
  ],
  radiobuttonIcon: "p-radiobutton-icon",
  //tablefooter
  tfoot: "p-datatable-tfoot",
  //footercell
  footerCell: ({ instance }) => [
    {
      "p-frozen-column": instance.columnProp("frozen")
    }
  ],
  //datatable
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-footer",
  resizeHelper: "p-column-resizer-helper",
  reorderIndicatorUp: "p-datatable-reorder-indicator-up",
  reorderIndicatorDown: "p-datatable-reorder-indicator-down"
};
const inlineStyles$9 = {
  wrapper: { overflow: "auto" },
  thead: { position: "sticky" },
  tfoot: { position: "sticky" }
};
const DataTableStyle = BaseStyle.extend({
  name: "datatable",
  css: css$S,
  classes: classes$V,
  inlineStyles: inlineStyles$9
});

const classes$U = {
  root: ({ props }) => [
    "p-dataview p-component",
    {
      "p-dataview-list": props.layout === "list",
      "p-dataview-grid": props.layout === "grid"
    }
  ],
  header: "p-dataview-header",
  paginator: ({ instance }) => instance.paginatorTop ? "p-paginator-top" : instance.paginatorBottom ? "p-paginator-bottom" : "",
  content: "p-dataview-content",
  grid: "p-grid p-nogutter grid grid-nogutter",
  column: "p-col col",
  emptyMessage: "p-dataview-emptymessage",
  footer: "p-dataview-footer"
};
const DataViewStyle = BaseStyle.extend({
  name: "dataview",
  classes: classes$U
});

const classes$T = {
  root: "p-dataview-layout-options p-selectbutton p-buttonset",
  listButton: ({ props }) => [
    "p-button p-button-icon-only",
    {
      "p-highlight": props.modelValue === "list"
    }
  ],
  gridButton: ({ props }) => [
    "p-button p-button-icon-only",
    {
      "p-highlight": props.modelValue === "grid"
    }
  ]
};
const DataViewLayoutOptionsStyle = BaseStyle.extend({
  name: "dataviewlayoutoptions",
  classes: classes$T
});

const css$R = `
@layer primevue {
    .p-orderlist {
        display: flex;
    }

    .p-orderlist-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-orderlist-list-container {
        flex: 1 1 auto;
    }

    .p-orderlist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-orderlist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-orderlist.p-state-disabled .p-orderlist-item,
    .p-orderlist.p-state-disabled .p-button {
        cursor: default;
    }

    .p-orderlist.p-state-disabled .p-orderlist-list {
        overflow: hidden;
    }
}
`;
const classes$S = {
  root: ({ props }) => [
    "p-orderlist p-component",
    {
      "p-orderlist-striped": props.stripedRows
    }
  ],
  controls: "p-orderlist-controls",
  header: "p-orderlist-header",
  container: "p-orderlist-list-container",
  list: "p-orderlist-list",
  item: ({ instance, item, id }) => [
    "p-orderlist-item",
    {
      "p-highlight": instance.isSelected(item),
      "p-focus": id === instance.focusedOptionId
    }
  ]
};
const OrderListStyle = BaseStyle.extend({
  name: "orderlist",
  css: css$R,
  classes: classes$S
});

const css$Q = `
@layer primevue {
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 0.75rem;
    }

    .p-organizationchart-node-content {
        display: inline-block;
        position: relative;
    }

    .p-organizationchart-node-content .p-node-toggler {
        position: absolute;
        bottom: -0.75rem;
        margin-left: -0.75rem;
        z-index: 2;
        left: 50%;
        user-select: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
    }

    .p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
        position: relative;
        top: 0.25rem;
    }

    .p-organizationchart-line-down {
        margin: 0 auto;
        height: 20px;
        width: 1px;
    }

    .p-organizationchart-line-right {
        border-radius: 0px;
    }

    .p-organizationchart-line-left {
        border-radius: 0;
    }

    .p-organizationchart-selectable-node {
        cursor: pointer;
    }
}
`;
const classes$R = {
  root: "p-organizationchart p-component",
  table: "p-organizationchart-table",
  node: ({ instance }) => ["p-organizationchart-node-content", { "p-organizationchart-selectable-node": instance.selectable, "p-highlight": instance.selected }],
  nodeToggler: "p-node-toggler",
  nodeTogglerIcon: "p-node-toggler-icon",
  lines: "p-organizationchart-lines",
  lineDown: "p-organizationchart-line-down",
  lineLeft: ({ index }) => ["p-organizationchart-line-left", { "p-organizationchart-line-top": !(index === 0) }],
  lineRight: ({ props, index }) => ["p-organizationchart-line-right", { "p-organizationchart-line-top": !(index === props.node.children.length - 1) }],
  nodes: "p-organizationchart-nodes"
};
const OrganizationChartStyle = BaseStyle.extend({
  name: "organizationchart",
  css: css$Q,
  classes: classes$R
});

const css$P = `
@layer primevue {
    .p-paginator-default {
        display: flex;
    }

    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .p-paginator-left-content {
        margin-right: auto;
    }

    .p-paginator-right-content {
        margin-left: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
    }

    .p-paginator-element:focus {
        z-index: 1;
        position: relative;
    }
}
`;
const classes$Q = {
  paginator: ({ instance, key }) => [
    "p-paginator p-component",
    {
      "p-paginator-default": !instance.hasBreakpoints(),
      [`p-paginator-${key}`]: instance.hasBreakpoints()
    }
  ],
  start: "p-paginator-left-content",
  end: "p-paginator-right-content",
  firstPageButton: ({ instance }) => [
    "p-paginator-first p-paginator-element p-link",
    {
      "p-disabled": instance.$attrs.disabled
    }
  ],
  firstPageIcon: "p-paginator-icon",
  previousPageButton: ({ instance }) => [
    "p-paginator-prev p-paginator-element p-link",
    {
      "p-disabled": instance.$attrs.disabled
    }
  ],
  previousPageIcon: "p-paginator-icon",
  nextPageButton: ({ instance }) => [
    "p-paginator-next p-paginator-element p-link",
    {
      "p-disabled": instance.$attrs.disabled
    }
  ],
  nextPageIcon: "p-paginator-icon",
  lastPageButton: ({ instance }) => [
    "p-paginator-last p-paginator-element p-link",
    {
      "p-disabled": instance.$attrs.disabled
    }
  ],
  lastPageIcon: "p-paginator-icon",
  pages: "p-paginator-pages",
  pageButton: ({ props, pageLink }) => [
    "p-paginator-page p-paginator-element p-link",
    {
      "p-highlight": pageLink - 1 === props.page
    }
  ],
  current: "p-paginator-current",
  rowPerPageDropdown: "p-paginator-rpp-options",
  jumpToPageDropdown: "p-paginator-page-options",
  jumpToPageInput: "p-paginator-page-input"
};
const PaginatorStyle = BaseStyle.extend({
  name: "paginator",
  css: css$P,
  classes: classes$Q
});

const css$O = `
@layer primevue {
    .p-picklist {
        display: flex;
    }

    .p-picklist-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-picklist-list-wrapper {
        flex: 1 1 50%;
    }

    .p-picklist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-picklist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,
    .p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {
        transition: none !important;
    }
}
`;
const classes$P = {
  root: ({ props }) => [
    "p-picklist p-component",
    {
      "p-picklist-striped": props.stripedRows
    }
  ],
  sourceControls: "p-picklist-buttons p-picklist-source-controls",
  sourceWrapper: "p-picklist-list-wrapper p-picklist-source-wrapper",
  sourceHeader: "p-picklist-header",
  sourceList: "p-picklist-list p-picklist-source-list",
  buttons: "p-picklist-buttons p-picklist-transfer-buttons",
  targetWrapper: "p-picklist-list-wrapper p-picklist-target-wrapper",
  targetHeader: "p-picklist-header",
  targetList: "p-picklist-list p-picklist-target",
  item: ({ instance, item, id, listIndex }) => [
    "p-picklist-item",
    {
      "p-highlight": instance.isSelected(item, listIndex),
      "p-focus": id === instance.focusedOptionId
    }
  ],
  targetControls: "p-picklist-buttons p-picklist-target-controls"
};
const PickListStyle = BaseStyle.extend({
  name: "picklist",
  css: css$O,
  classes: classes$P
});

const css$N = `
@layer primevue {
    .p-tree-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: auto;
    }

    .p-treenode-children {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-tree-wrapper {
        overflow: auto;
    }

    .p-treenode-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    .p-treenode-leaf > .p-treenode-content .p-tree-toggler {
        visibility: hidden;
    }

    .p-treenode-content {
        display: flex;
        align-items: center;
    }

    .p-tree-filter {
        width: 100%;
    }

    .p-tree-filter-container {
        position: relative;
        display: block;
        width: 100%;
    }

    .p-tree-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-tree-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-tree .p-tree-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-wrapper {
        flex: 1;
    }
}
`;
const classes$O = {
  root: ({ props }) => [
    "p-tree p-component",
    {
      "p-tree-selectable": props.selectionMode != null,
      "p-tree-loading": props.loading,
      "p-tree-flex-scrollable": props.scrollHeight === "flex"
    }
  ],
  loadingOverlay: "p-tree-loading-overlay p-component-overlay",
  loadingIcon: "p-tree-loading-icon",
  filterContainer: "p-tree-filter-container",
  input: "p-tree-filter p-inputtext p-component",
  searchIcon: "p-tree-filter-icon",
  wrapper: "p-tree-wrapper",
  container: "p-tree-container",
  node: ({ instance }) => ["p-treenode", { "p-treenode-leaf": instance.leaf }],
  content: ({ instance }) => [
    "p-treenode-content",
    instance.node.styleClass,
    {
      "p-treenode-selectable": instance.selectable,
      "p-highlight": instance.checkboxMode ? instance.checked : instance.selected
    }
  ],
  toggler: "p-tree-toggler p-link",
  togglerIcon: "p-tree-toggler-icon",
  checkboxContainer: "p-checkbox p-component",
  checkbox: ({ instance }) => [
    "p-checkbox-box",
    {
      "p-highlight": instance.checked,
      "p-indeterminate": instance.partialChecked
    }
  ],
  checkboxIcon: "p-checkbox-icon",
  nodeIcon: ({ instance }) => ["p-treenode-icon", instance.node.icon],
  label: "p-treenode-label",
  subgroup: "p-treenode-children"
};
const TreeStyle = BaseStyle.extend({
  name: "tree",
  css: css$N,
  classes: classes$O
});

const css$M = `
@layer primevue {
    .p-treetable {
        position: relative;
    }

    .p-treetable table {
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }

    .p-treetable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }

    .p-treetable-responsive-scroll > .p-treetable-wrapper {
        overflow-x: auto;
    }

    .p-treetable-responsive-scroll > .p-treetable-wrapper > table,
    .p-treetable-auto-layout > .p-treetable-wrapper > table {
        table-layout: auto;
    }

    .p-treetable-hoverable-rows .p-treetable-tbody > tr {
        cursor: pointer;
    }

    .p-treetable-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
    }

    .p-treetable-toggler + .p-checkbox {
        vertical-align: middle;
    }

    .p-treetable-toggler + .p-checkbox + span {
        vertical-align: middle;
    }

    /* Resizable */
    .p-treetable-resizable > .p-treetable-wrapper {
        overflow-x: auto;
    }

    .p-treetable-resizable .p-treetable-thead > tr > th,
    .p-treetable-resizable .p-treetable-tfoot > tr > td,
    .p-treetable-resizable .p-treetable-tbody > tr > td {
        overflow: hidden;
    }

    .p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
        display: none;
    }

    .p-treetable .p-column-resizer {
        display: block;
        position: absolute !important;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-treetable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }

    .p-treetable .p-treetable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    /* Scrollable */
    .p-treetable-scrollable .p-treetable-wrapper {
        position: relative;
        overflow: auto;
    }

    .p-treetable-scrollable .p-treetable-table {
        display: block;
    }

    .p-treetable-scrollable .p-treetable-thead,
    .p-treetable-scrollable .p-treetable-tbody,
    .p-treetable-scrollable .p-treetable-tfoot {
        display: block;
    }

    .p-treetable-scrollable .p-treetable-thead > tr,
    .p-treetable-scrollable .p-treetable-tbody > tr,
    .p-treetable-scrollable .p-treetable-tfoot > tr {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }

    .p-treetable-scrollable .p-treetable-thead > tr > th,
    .p-treetable-scrollable .p-treetable-tbody > tr > td,
    .p-treetable-scrollable .p-treetable-tfoot > tr > td {
        display: flex;
        flex: 1 1 0;
        align-items: center;
    }

    .p-treetable-scrollable .p-treetable-thead {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .p-treetable-scrollable .p-treetable-tfoot {
        position: sticky;
        bottom: 0;
        z-index: 1;
    }

    .p-treetable-scrollable .p-frozen-column {
        position: sticky;
        background: inherit;
    }

    .p-treetable-scrollable th.p-frozen-column {
        z-index: 1;
    }

    .p-treetable-scrollable-both .p-treetable-thead > tr > th,
    .p-treetable-scrollable-both .p-treetable-tbody > tr > td,
    .p-treetable-scrollable-both .p-treetable-tfoot > tr > td,
    .p-treetable-scrollable-horizontal .p-treetable-thead > tr > th .p-treetable-scrollable-horizontal .p-treetable-tbody > tr > td,
    .p-treetable-scrollable-horizontal .p-treetable-tfoot > tr > td {
        flex: 0 0 auto;
    }

    .p-treetable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-treetable-flex-scrollable .p-treetable-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }
}
`;
const classes$N = {
  root: ({ instance, props }) => [
    "p-treetable p-component",
    {
      "p-treetable-hoverable-rows": props.rowHover || instance.rowSelectionMode,
      "p-treetable-auto-layout": props.autoLayout,
      "p-treetable-resizable": props.resizableColumns,
      "p-treetable-resizable-fit": props.resizableColumns && props.columnResizeMode === "fit",
      "p-treetable-gridlines": props.showGridlines,
      "p-treetable-scrollable": props.scrollable,
      "p-treetable-scrollable-vertical": props.scrollable && props.scrollDirection === "vertical",
      "p-treetable-scrollable-horizontal": props.scrollable && props.scrollDirection === "horizontal",
      "p-treetable-scrollable-both": props.scrollable && props.scrollDirection === "both",
      "p-treetable-flex-scrollable": props.scrollable && props.scrollHeight === "flex",
      "p-treetable-responsive-scroll": props.responsiveLayout === "scroll",
      "p-treetable-sm": props.size === "small",
      "p-treetable-lg": props.size === "large"
    }
  ],
  loadingWrapper: "p-treetable-loading",
  loadingOverlay: "p-treetable-loading-overlay p-component-overlay",
  loadingIcon: "p-treetable-loading-icon",
  header: "p-treetable-header",
  paginator: ({ instance }) => instance.paginatorTop ? "p-paginator-top" : instance.paginatorBottom ? "p-paginator-bottom" : "",
  wrapper: "p-treetable-wrapper",
  thead: "p-treetable-thead",
  //headercell
  headerCell: ({ instance, props, column }) => column && instance.hasColumnFilter() ? [
    "p-filter-column",
    {
      "p-frozen-column": instance.columnProp(column, "frozen")
    }
  ] : [
    {
      "p-sortable-column": instance.columnProp("sortable"),
      "p-resizable-column": props.resizableColumns,
      "p-highlight": instance.isColumnSorted(),
      "p-frozen-column": instance.columnProp("frozen")
    }
  ],
  columnResizer: "p-column-resizer",
  headerTitle: "p-column-title",
  sortIcon: "p-sortable-column-icon",
  sortBadge: "p-sortable-column-badge",
  tbody: "p-treetable-tbody",
  //ttrow
  row: ({ instance }) => [
    {
      "p-highlight": instance.selected
    }
  ],
  //bodycell
  bodyCell: ({ instance }) => [
    {
      "p-frozen-column": instance.columnProp("frozen")
    }
  ],
  rowToggler: "p-treetable-toggler p-link",
  rowTogglerIcon: "p-tree-toggler-icon",
  checkboxWrapper: ({ instance }) => [
    "p-checkbox p-treetable-checkbox p-component",
    {
      "p-checkbox-focused": instance.checkboxFocused
    }
  ],
  checkbox: ({ instance }) => [
    "p-checkbox-box",
    {
      "p-highlight": instance.checked,
      "p-focus": instance.checkboxFocused,
      "p-indeterminate": instance.partialChecked
    }
  ],
  checkboxicon: "p-checkbox-icon",
  //treetable
  emptyMessage: "p-treetable-emptymessage",
  tfoot: "p-treetable-tfoot",
  //footercell
  footerCell: ({ instance }) => [
    {
      "p-frozen-column": instance.columnProp("frozen")
    }
  ],
  //treetable
  footer: "p-treetable-footer",
  resizeHelper: "p-column-resizer-helper p-highlight"
};
const TreeTableStyle = BaseStyle.extend({
  name: "treetable",
  css: css$M,
  classes: classes$N
});

const css$L = `
@layer primevue {
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: 70px;
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-content {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: flex;
        align-self: baseline;
    }

    .p-timeline-event-connector {
        flex-grow: 1;
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }
}
`;
const classes$M = {
  root: ({ props }) => ["p-timeline p-component", "p-timeline-" + props.align, "p-timeline-" + props.layout],
  event: "p-timeline-event",
  opposite: "p-timeline-event-opposite",
  separator: "p-timeline-event-separator",
  marker: "p-timeline-event-marker",
  connector: "p-timeline-event-connector",
  content: "p-timeline-event-content"
};
const TimelineStyle = BaseStyle.extend({
  name: "timeline",
  css: css$L,
  classes: classes$M
});

const css$K = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;
const VirtualScrollerStyle = BaseStyle.extend({
  name: "virtualscroller",
  css: css$K
});

const css$J = `
@layer primevue {
    .p-accordion-header-action {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-action:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
    }
}
`;
const classes$L = {
  root: "p-accordion p-component",
  tab: {
    root: ({ instance, index }) => [
      "p-accordion-tab",
      {
        "p-accordion-tab-active": instance.isTabActive(index)
      }
    ],
    header: ({ instance, tab, index }) => [
      "p-accordion-header",
      {
        "p-highlight": instance.isTabActive(index),
        "p-disabled": instance.getTabProp(tab, "disabled")
      }
    ],
    headerAction: "p-accordion-header-link p-accordion-header-action",
    headerIcon: "p-accordion-toggle-icon",
    headerTitle: "p-accordion-header-text",
    toggleableContent: "p-toggleable-content",
    content: "p-accordion-content"
  }
};
const AccordionStyle = BaseStyle.extend({
  name: "accordion",
  css: css$J,
  classes: classes$L
});

const AccordionTabStyle = {};

const classes$K = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
const CardStyle = BaseStyle.extend({
  name: "card",
  classes: classes$K
});

const DeferredContentStyle = {};

const css$I = `
@layer primevue {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: '';
    }

    .p-divider-content {
        z-index: 1;
    }

    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: '';
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-left-style: dotted;
    }
}
`;
const inlineStyles$8 = {
  root: ({ props }) => ({
    justifyContent: props.layout === "horizontal" ? props.align === "center" || props.align === null ? "center" : props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : null : null,
    alignItems: props.layout === "vertical" ? props.align === "center" || props.align === null ? "center" : props.align === "top" ? "flex-start" : props.align === "bottom" ? "flex-end" : null : null
  })
};
const classes$J = {
  root: ({ props }) => [
    "p-divider p-component",
    "p-divider-" + props.layout,
    "p-divider-" + props.type,
    { "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left") },
    { "p-divider-center": props.layout === "horizontal" && props.align === "center" },
    { "p-divider-right": props.layout === "horizontal" && props.align === "right" },
    { "p-divider-top": props.layout === "vertical" && props.align === "top" },
    { "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center") },
    { "p-divider-bottom": props.layout === "vertical" && props.align === "bottom" }
  ],
  content: "p-divider-content"
};
const DividerStyle = BaseStyle.extend({
  name: "divider",
  css: css$I,
  classes: classes$J,
  inlineStyles: inlineStyles$8
});

const css$H = `
@layer primevue {
    .p-fieldset-legend > a,
    .p-fieldset-legend > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-fieldset-toggleable .p-fieldset-legend a {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
    }

    .p-fieldset-legend-text {
        line-height: 1;
    }
}
`;
const classes$I = {
  root: ({ props }) => [
    "p-fieldset p-component",
    {
      "p-fieldset-toggleable": props.toggleable
    }
  ],
  legend: "p-fieldset-legend",
  legendtitle: "p-fieldset-legend-text",
  togglericon: "p-fieldset-toggler",
  toggleablecontent: "p-toggleable-content",
  content: "p-fieldset-content"
};
const FieldsetStyle = BaseStyle.extend({
  name: "fieldset",
  css: css$H,
  classes: classes$I
});

const css$G = `
@layer primevue {
    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p-panel-title {
        line-height: 1;
    }

    .p-panel-header-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
}
`;
const classes$H = {
  root: ({ props }) => [
    "p-panel p-component",
    {
      "p-panel-toggleable": props.toggleable
    }
  ],
  header: "p-panel-header",
  title: "p-panel-title",
  icons: "p-panel-icons",
  toggler: "p-panel-header-icon p-panel-toggler p-link",
  toggleablecontent: "p-toggleable-content",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
const PanelStyle = BaseStyle.extend({
  name: "panel",
  css: css$G,
  classes: classes$H
});

const css$F = `
@layer primevue {
    .p-scrollpanel-wrapper {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + 18px);
        width: calc(100% + 18px);
        padding: 0 18px 18px 0;
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        background: #c1c1c1;
        border-radius: 3px;
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.25s linear;
    }

    .p-scrollpanel-bar-y {
        width: 9px;
        top: 0;
    }

    .p-scrollpanel-bar-x {
        height: 9px;
        bottom: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
}
`;
const classes$G = {
  root: "p-scrollpanel p-component",
  wrapper: "p-scrollpanel-wrapper",
  content: "p-scrollpanel-content",
  barx: "p-scrollpanel-bar p-scrollpanel-bar-x",
  bary: "p-scrollpanel-bar p-scrollpanel-bar-y"
};
const ScrollPanelStyle = BaseStyle.extend({
  name: "scrollpanel",
  css: css$F,
  classes: classes$G
});

const css$E = `
@layer primevue {
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: 24px;
        width: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: 24px;
        height: 100%;
    }
}
`;
const classes$F = {
  root: ({ props }) => ["p-splitter p-component", "p-splitter-" + props.layout],
  gutter: "p-splitter-gutter",
  gutterHandler: "p-splitter-gutter-handle"
};
const inlineStyles$7 = {
  root: ({ props }) => [{ display: "flex", "flex-wrap": "nowrap" }, props.layout === "vertical" ? { "flex-direction": "column" } : ""]
};
const SplitterStyle = BaseStyle.extend({
  name: "splitter",
  css: css$E,
  classes: classes$F,
  inlineStyles: inlineStyles$7
});

const css$D = `
@layer primevue {
    .p-splitter-panel {
        flex-grow: 1;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
}
`;
const classes$E = {
  root: ({ instance }) => ["p-splitter-panel", { "p-splitter-panel-nested": instance.isNested }]
};
const SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  css: css$D,
  classes: classes$E
});

const css$C = `
@layer primevue {
    .p-tabview-nav-container {
        position: relative;
    }

    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }

    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }

    .p-tabview-header-action {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabview-header-action:focus {
        z-index: 1;
    }

    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }

    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tabview-nav-prev {
        left: 0;
    }

    .p-tabview-nav-next {
        right: 0;
    }

    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`;
const classes$D = {
  root: ({ props }) => [
    "p-tabview p-component",
    {
      "p-tabview-scrollable": props.scrollable
    }
  ],
  navContainer: "p-tabview-nav-container",
  previousButton: "p-tabview-nav-prev p-tabview-nav-btn p-link",
  navContent: "p-tabview-nav-content",
  nav: "p-tabview-nav",
  tab: {
    header: ({ instance, tab, index }) => [
      "p-tabview-header",
      instance.getTabProp(tab, "headerClass"),
      {
        "p-highlight": instance.d_activeIndex === index,
        "p-disabled": instance.getTabProp(tab, "disabled")
      }
    ],
    headerAction: "p-tabview-nav-link p-tabview-header-action",
    headerTitle: "p-tabview-title",
    content: ({ instance, tab }) => ["p-tabview-panel", instance.getTabProp(tab, "contentClass")]
  },
  inkbar: "p-tabview-ink-bar",
  nextButton: "p-tabview-nav-next p-tabview-nav-btn p-link",
  panelContainer: "p-tabview-panels"
};
const TabViewStyle = BaseStyle.extend({
  name: "tabview",
  css: css$C,
  classes: classes$D
});

const TabPanelStyle = {};

const css$B = `
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`;
const classes$C = {
  root: "p-toolbar p-component",
  start: "p-toolbar-group-start p-toolbar-group-left",
  center: "p-toolbar-group-center",
  end: "p-toolbar-group-end p-toolbar-group-right"
};
const ToolbarStyle = BaseStyle.extend({
  name: "toolbar",
  css: css$B,
  classes: classes$C
});

const classes$B = {
  root: "p-confirm-dialog",
  icon: ({ instance }) => ["p-confirm-dialog-icon", instance.confirmation ? instance.confirmation.icon : null],
  message: "p-confirm-dialog-message",
  rejectButton: ({ instance }) => ["p-confirm-dialog-reject", instance.confirmation && !instance.confirmation.rejectClass ? "p-button-text" : null],
  acceptButton: "p-confirm-dialog-accept"
};
const ConfirmDialogStyle = BaseStyle.extend({
  name: "confirmdialog",
  classes: classes$B
});

const css$A = `
@layer primevue {
    .p-confirm-popup {
        position: absolute;
        margin-top: 10px;
        top: 0;
        left: 0;
    }

    .p-confirm-popup-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }

    /* Animation */
    .p-confirm-popup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirm-popup-leave-to {
        opacity: 0;
    }

    .p-confirm-popup-enter-active {
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirm-popup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirm-popup:after,
    .p-confirm-popup:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirm-popup:after {
        border-width: 8px;
        margin-left: -8px;
    }

    .p-confirm-popup:before {
        border-width: 10px;
        margin-left: -10px;
    }

    .p-confirm-popup-flipped:after,
    .p-confirm-popup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirm-popup.p-confirm-popup-flipped:after {
        border-bottom-color: transparent;
    }

    .p-confirm-popup.p-confirm-popup-flipped:before {
        border-bottom-color: transparent;
    }

    .p-confirm-popup .p-confirm-popup-content {
        display: flex;
        align-items: center;
    }
}
`;
const classes$A = {
  root: ({ instance }) => [
    "p-confirm-popup p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  content: "p-confirm-popup-content",
  icon: ({ instance }) => ["p-confirm-popup-icon", instance.confirmation ? instance.confirmation.icon : null],
  message: "p-confirm-popup-message",
  footer: "p-confirm-popup-footer",
  rejectButton: ({ instance }) => ["p-confirm-popup-reject", instance.confirmation && !instance.confirmation.rejectClass ? "p-button-sm p-button-text" : null],
  acceptButton: ({ instance }) => ["p-confirm-popup-accept", instance.confirmation && !instance.confirmation.acceptClass ? "p-button-sm" : null]
};
const ConfirmPopupStyle = BaseStyle.extend({
  name: "confirmpopup",
  css: css$A,
  classes: classes$A
});

const css$z = `
@layer primevue {
    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-dialog {
        max-height: 90%;
        transform: scale(1);
    }

    .p-dialog-content {
        overflow-y: auto;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
    }

    .p-dialog-footer {
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
    }

    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }

    /* Animation */
    /* Center */
    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }
    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }
    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }
    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }
    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }
    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    /* Maximize */
    .p-dialog-maximized {
        -webkit-transition: none;
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
    }
    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }
}
`;
const inlineStyles$6 = {
  mask: ({ position, modal }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: position === "left" || position === "topleft" || position === "bottomleft" ? "flex-start" : position === "right" || position === "topright" || position === "bottomright" ? "flex-end" : "center",
    alignItems: position === "top" || position === "topleft" || position === "topright" ? "flex-start" : position === "bottom" || position === "bottomleft" || position === "bottomright" ? "flex-end" : "center",
    pointerEvents: modal ? "auto" : "none"
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
const classes$z = {
  mask: ({ props }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const pos = positions.find((item) => item === props.position);
    return [
      "p-dialog-mask",
      {
        "p-component-overlay p-component-overlay-enter": props.modal
      },
      pos ? `p-dialog-${pos}` : ""
    ];
  },
  root: ({ props, instance }) => [
    "p-dialog p-component",
    {
      "p-dialog-rtl": props.rtl,
      "p-dialog-maximized": props.maximizable && instance.maximized,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  header: "p-dialog-header",
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  closeButtonIcon: "p-dialog-header-close-icon",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
};
const DialogStyle = BaseStyle.extend({
  name: "dialog",
  css: css$z,
  classes: classes$z,
  inlineStyles: inlineStyles$6
});

const DynamicDialogStyle = {};

const css$y = `
@layer primevue {
    .p-overlaypanel {
        margin-top: 10px;
    }

    .p-overlaypanel-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }

    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Animation */
    .p-overlaypanel-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-overlaypanel-leave-to {
        opacity: 0;
    }

    .p-overlaypanel-enter-active {
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-overlaypanel-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-overlaypanel:after,
    .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }

    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }

    .p-overlaypanel-flipped:after,
    .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }

    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent;
    }
}
`;
const classes$y = {
  root: ({ instance }) => [
    "p-overlaypanel p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  content: "p-overlaypanel-content",
  closeButton: "p-overlaypanel-close p-link",
  closeIcon: "p-overlaypanel-close-icon"
};
const OverlayPanelStyle = BaseStyle.extend({
  name: "overlaypanel",
  css: css$y,
  classes: classes$y
});

const css$x = `
@layer primevue {
    .p-sidebar-mask {
        display: none;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }

    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-sidebar-visible {
        display: flex;
    }

    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
    }

    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-shrink: 0;
    }

    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    /* Animation */
    /* Center */
    .p-sidebar-left .p-sidebar-enter-from,
    .p-sidebar-left .p-sidebar-leave-to {
        transform: translateX(-100%);
    }
    .p-sidebar-right .p-sidebar-enter-from,
    .p-sidebar-right .p-sidebar-leave-to {
        transform: translateX(100%);
    }
    .p-sidebar-top .p-sidebar-enter-from,
    .p-sidebar-top .p-sidebar-leave-to {
        transform: translateY(-100%);
    }
    .p-sidebar-bottom .p-sidebar-enter-from,
    .p-sidebar-bottom .p-sidebar-leave-to {
        transform: translateY(100%);
    }
    .p-sidebar-full .p-sidebar-enter-from,
    .p-sidebar-full .p-sidebar-leave-to {
        opacity: 0;
    }
    .p-sidebar-full .p-sidebar-enter-active,
    .p-sidebar-full .p-sidebar-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }

    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }

    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }

    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }

    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }

    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }

    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }
}
`;
const inlineStyles$5 = {
  mask: ({ position }) => ({
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: position === "left" ? "flex-start" : position === "right" ? "flex-end" : "center",
    alignItems: position === "top" ? "flex-start" : position === "bottom" ? "flex-end" : "center"
  })
};
const classes$x = {
  mask: ({ instance, props }) => {
    const positions = ["left", "right", "top", "bottom"];
    const pos = positions.find((item) => item === props.position);
    return [
      "p-sidebar-mask",
      {
        "p-component-overlay p-component-overlay-enter": props.modal,
        "p-sidebar-mask-scrollblocker": props.blockScroll,
        "p-sidebar-visible": instance.containerVisible,
        "p-sidebar-full": instance.fullScreen
      },
      pos ? `p-sidebar-${pos}` : ""
    ];
  },
  root: ({ instance }) => [
    "p-sidebar p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false,
      "p-sidebar-full": instance.fullScreen
    }
  ],
  header: "p-sidebar-header",
  headerContent: "p-sidebar-header-content",
  closeButton: "p-sidebar-close p-sidebar-icon p-link",
  closeIcon: "p-sidebar-close-icon",
  content: "p-sidebar-content"
};
const SidebarStyle = BaseStyle.extend({
  name: "sidebar",
  css: css$x,
  classes: classes$x,
  inlineStyles: inlineStyles$5
});

const css$w = `
@layer primevue {
    .p-fileupload-content {
        position: relative;
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-button.p-fileupload-choose {
        position: relative;
        overflow: hidden;
    }

    .p-fileupload-buttonbar {
        display: flex;
        flex-wrap: wrap;
    }

    .p-fileupload > input[type='file'],
    .p-fileupload-basic input[type='file'] {
        display: none;
    }

    .p-fluid .p-fileupload .p-button {
        width: auto;
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-left: auto;
    }
}
`;
const classes$w = {
  root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
  buttonbar: "p-fileupload-buttonbar",
  chooseButton: ({ instance, props }) => [
    "p-button p-component p-fileupload-choose",
    {
      "p-fileupload-choose-selected": props.mode === "basic" && instance.hasFiles,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }
  ],
  chooseIcon: "p-button-icon p-button-icon-left",
  chooseButtonLabel: "p-button-label",
  content: "p-fileupload-content",
  empty: "p-fileupload-empty",
  uploadIcon: "p-button-icon p-button-icon-left",
  label: "p-button-label",
  file: "p-fileupload-file",
  thumbnail: "p-fileupload-file-thumbnail",
  details: "p-fileupload-file-details",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  badge: "p-fileupload-file-badge",
  actions: "p-fileupload-file-actions",
  removeButton: "p-fileupload-file-remove"
};
const FileUploadStyle = BaseStyle.extend({
  name: "fileupload",
  css: css$w,
  classes: classes$w
});

const css$v = `
@layer primevue {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`;
const classes$v = {
  root: "p-breadcrumb p-component",
  menu: "p-breadcrumb-list",
  home: "p-breadcrumb-home",
  separator: "p-menuitem-separator",
  menuitem: ({ instance }) => ["p-menuitem", { "p-disabled": instance.disabled() }],
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text"
};
const BreadcrumbStyle = BaseStyle.extend({
  name: "breadcrumb",
  css: css$v,
  classes: classes$v
});

const css$u = `
@layer primevue {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }

    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-contextmenu .p-menuitem {
        position: relative;
    }

    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-contextmenu-enter-from {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        transition: opacity 250ms;
    }
}
`;
const classes$u = {
  root: ({ instance }) => [
    "p-contextmenu p-component",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  menu: "p-contextmenu-root-list",
  menuitem: ({ instance, processedItem }) => [
    "p-menuitem",
    {
      "p-menuitem-active p-highlight": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  submenu: "p-submenu-list",
  separator: "p-menuitem-separator"
};
const ContextMenuStyle = BaseStyle.extend({
  name: "contextmenu",
  css: css$u,
  classes: classes$u
});

const css$t = `
@layer primevue {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .p-dock-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }

    .p-dock-item-second-prev,
    .p-dock-item-second-next {
        transform: scale(1.2);
    }

    .p-dock-item-prev,
    .p-dock-item-next {
        transform: scale(1.4);
    }

    .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }

    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-top .p-dock-item {
        transform-origin: center top;
    }

    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-bottom .p-dock-item {
        transform-origin: center bottom;
    }

    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-item {
        transform-origin: center right;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-item {
        transform-origin: center left;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }
}
`;
const classes$t = {
  root: ({ props }) => ["p-dock p-component", `p-dock-${props.position}`],
  container: "p-dock-list-container",
  menu: "p-dock-list",
  menuitem: ({ instance, processedItem, index, id }) => [
    "p-dock-item",
    {
      "p-focus": instance.isItemActive(id),
      "p-disabled": instance.disabled(processedItem),
      "p-dock-item-second-prev": instance.currentIndex - 2 === index,
      "p-dock-item-prev": instance.currentIndex - 1 === index,
      "p-dock-item-current": instance.currentIndex === index,
      "p-dock-item-next": instance.currentIndex + 1 === index,
      "p-dock-item-second-next": instance.currentIndex + 2 === index
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-dock-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-dock-icon"
};
const DockStyle = BaseStyle.extend({
  name: "dock",
  css: css$t,
  classes: classes$t
});

const css$s = `
@layer primevue {
    .p-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menu .p-menuitem-text {
        line-height: 1;
    }
}
`;
const classes$s = {
  root: ({ instance, props }) => [
    "p-menu p-component",
    {
      "p-menu-overlay": props.popup,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  start: "p-menu-start",
  menu: "p-menu-list p-reset",
  submenuHeader: "p-submenu-header",
  separator: "p-menuitem-separator",
  end: "p-menu-end",
  menuitem: ({ instance }) => [
    "p-menuitem",
    {
      "p-focus": instance.id === instance.focusedOptionId,
      "p-disabled": instance.disabled()
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text"
};
const MenuStyle = BaseStyle.extend({
  name: "menu",
  css: css$s,
  classes: classes$s
});

const css$r = `
@layer primevue {
    .p-menubar {
        display: flex;
        align-items: center;
    }

    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menubar .p-menuitem-text {
        line-height: 1;
    }

    .p-menubar .p-menuitem {
        position: relative;
    }

    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }

    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }

    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }

    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`;
const inlineStyles$4 = {
  submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? "block" : "none" })
};
const classes$r = {
  root: ({ instance }) => [
    "p-menubar p-component",
    {
      "p-menubar-mobile-active": instance.mobileActive
    }
  ],
  start: "p-menubar-start",
  button: "p-menubar-button",
  menu: "p-menubar-root-list",
  menuitem: ({ instance, processedItem }) => [
    "p-menuitem",
    {
      "p-menuitem-active p-highlight": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  submenu: "p-submenu-list",
  separator: "p-menuitem-separator",
  end: "p-menubar-end"
};
const MenubarStyle = BaseStyle.extend({
  name: "menubar",
  css: css$r,
  classes: classes$r,
  inlineStyles: inlineStyles$4
});

const css$q = `
@layer primevue {
    .p-megamenu {
        display: flex;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu-root-list > .p-menuitem {
        position: relative;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }
}
`;
const inlineStyles$3 = {
  submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? "block" : "none" })
};
const classes$q = {
  root: ({ instance }) => [
    "p-megamenu p-component",
    {
      "p-megamenu-horizontal": instance.horizontal,
      "p-megamenu-vertical": instance.vertical
    }
  ],
  start: "p-megamenu-start",
  menu: "p-megamenu-root-list",
  submenuHeader: ({ instance, processedItem }) => [
    "p-megamenu-submenu-header p-submenu-header",
    {
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  menuitem: ({ instance, processedItem }) => [
    "p-menuitem",
    {
      "p-menuitem-active p-highlight": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  panel: "p-megamenu-panel",
  grid: "p-megamenu-grid",
  column: ({ instance, processedItem }) => {
    let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    switch (length) {
      case 2:
        columnClass = "p-megamenu-col-6";
        break;
      case 3:
        columnClass = "p-megamenu-col-4";
        break;
      case 4:
        columnClass = "p-megamenu-col-3";
        break;
      case 6:
        columnClass = "p-megamenu-col-2";
        break;
      default:
        columnClass = "p-megamenu-col-12";
        break;
    }
    return columnClass;
  },
  submenu: "p-submenu-list p-megamenu-submenu",
  submenuLabel: "p-menuitem-text",
  separator: "p-menuitem-separator",
  end: "p-megamenu-end"
};
const MegaMenuStyle = BaseStyle.extend({
  name: "megamenu",
  css: css$q,
  classes: classes$q,
  inlineStyles: inlineStyles$3
});

const css$p = `
@layer primevue {
    .p-panelmenu .p-panelmenu-header-action {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
    }

    .p-panelmenu .p-panelmenu-header-action:focus {
        z-index: 1;
    }

    .p-panelmenu .p-submenu-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-panelmenu .p-menuitem-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu .p-menuitem-text {
        line-height: 1;
    }
}
`;
const classes$p = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: ({ instance, item }) => [
    "p-panelmenu-header",
    {
      "p-highlight": instance.isItemActive(item),
      "p-disabled": instance.isItemDisabled(item)
    }
  ],
  headerContent: "p-panelmenu-header-content",
  headerAction: ({ instance, isActive, isExactActive }) => [
    "p-panelmenu-header-action",
    {
      "router-link-active": isActive,
      "router-link-active-exact": instance.exact && isExactActive
    }
  ],
  headerIcon: "p-menuitem-icon",
  headerLabel: "p-menuitem-text",
  toggleableContent: "p-toggleable-content",
  menuContent: "p-panelmenu-content",
  menu: "p-panelmenu-root-list",
  menuitem: ({ instance, processedItem }) => [
    "p-menuitem",
    {
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  submenu: "p-submenu-list",
  separator: "p-menuitem-separator"
};
const PanelMenuStyle = BaseStyle.extend({
  name: "panelmenu",
  css: css$p,
  classes: classes$p
});

const css$o = `
@layer primevue {
    .p-steps {
        position: relative;
    }

    .p-steps .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        overflow: hidden;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
    }

    .p-steps.p-steps-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`;
const classes$o = {
  root: ({ props }) => ["p-steps p-component", { "p-readonly": props.readonly }],
  menu: "p-steps-list",
  menuitem: ({ instance, item }) => [
    "p-steps-item",
    {
      "p-highlight p-steps-current": instance.isActive(item),
      "p-disabled": instance.isItemDisabled(item)
    }
  ],
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  step: "p-steps-number",
  label: "p-steps-title"
};
const StepsStyle = BaseStyle.extend({
  name: "steps",
  css: css$o,
  classes: classes$o
});

const css$n = `
@layer primevue {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`;
const classes$n = {
  root: "p-tabmenu p-component",
  menu: "p-tabmenu-nav p-reset",
  menuitem: ({ instance, props, index, item, isActive, isExactActive }) => [
    "p-tabmenuitem",
    {
      "p-highlight": (props.exact ? isExactActive : isActive) || instance.d_activeIndex === index,
      "p-disabled": instance.disabled(item)
    }
  ],
  action: "p-menuitem-link",
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  inkbar: "p-tabmenu-ink-bar"
};
const TabMenuStyle = BaseStyle.extend({
  name: "tabmenu",
  css: css$n,
  classes: classes$n
});

const css$m = `
@layer primevue {
    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-tieredmenu .p-menuitem {
        position: relative;
    }

    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }
}
`;
const inlineStyles$2 = {
  submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? "block" : "none" })
};
const classes$m = {
  root: ({ instance, props }) => [
    "p-tieredmenu p-component",
    {
      "p-tieredmenu-overlay": props.popup,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  start: "p-tieredmenu-start",
  menu: "p-tieredmenu-root-list",
  menuitem: ({ instance, processedItem }) => [
    "p-menuitem",
    {
      "p-menuitem-active p-highlight": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }
  ],
  content: "p-menuitem-content",
  action: ({ props, isActive, isExactActive }) => [
    "p-menuitem-link",
    {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }
  ],
  icon: "p-menuitem-icon",
  text: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  submenu: "p-submenu-list",
  separator: "p-menuitem-separator",
  end: "p-tieredmenu-end"
};
const TieredMenuStyle = BaseStyle.extend({
  name: "tieredmenu",
  css: css$m,
  classes: classes$m,
  inlineStyles: inlineStyles$2
});

const css$l = `
@layer primevue {
    .p-chart {
        position: relative;
    }
}
`;
const classes$l = {
  root: "p-chart"
};
const ChartStyle = BaseStyle.extend({
  name: "chart",
  css: css$l,
  classes: classes$l
});

const css$k = `
@layer primevue {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0 !important;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
    }

    .p-message-leave-active .p-message-close {
        display: none;
    }
}
`;
const classes$k = {
  root: ({ props }) => "p-message p-component p-message-" + props.severity,
  wrapper: "p-message-wrapper",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close p-link",
  closeIcon: "p-message-close-icon"
};
const MessageStyle = BaseStyle.extend({
  name: "message",
  css: css$k,
  classes: classes$k
});

const css$j = `
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`;
const classes$j = {
  root: ({ props, instance }) => ["p-inline-message p-component p-inline-message-" + props.severity, { "p-inline-message-icon-only": !instance.$slots.default }],
  icon: ({ props }) => ["p-inline-message-icon", props.icon],
  text: "p-inline-message-text"
};
const InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  css: css$j,
  classes: classes$j
});

const css$i = `
@layer primevue {
    .p-toast {
        width: 25rem;
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-toast-icon-close.p-link {
        cursor: pointer;
    }

    /* Animations */
    .p-toast-message-enter-from {
        opacity: 0;
        -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
        transform: translateY(50%);
    }

    .p-toast-message-leave-from {
        max-height: 1000px;
    }

    .p-toast .p-toast-message.p-toast-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin-bottom: 0;
        overflow: hidden;
    }

    .p-toast-message-enter-active {
        -webkit-transition: transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
    }

    .p-toast-message-leave-active {
        -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`;
const inlineStyles$1 = {
  root: ({ position }) => ({
    position: "fixed",
    top: position === "top-right" || position === "top-left" || position === "top-center" ? "20px" : position === "center" ? "50%" : null,
    right: (position === "top-right" || position === "bottom-right") && "20px",
    bottom: (position === "bottom-left" || position === "bottom-right" || position === "bottom-center") && "20px",
    left: position === "top-left" || position === "bottom-left" ? "20px" : position === "center" || position === "top-center" || position === "bottom-center" ? "50%" : null
  })
};
const classes$i = {
  root: ({ props, instance }) => [
    "p-toast p-component p-toast-" + props.position,
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  container: ({ props }) => [
    "p-toast-message",
    {
      "p-toast-message-info": props.message.severity === "info" || props.message.severity === void 0,
      "p-toast-message-warn": props.message.severity === "warn",
      "p-toast-message-error": props.message.severity === "error",
      "p-toast-message-success": props.message.severity === "success"
    }
  ],
  content: "p-toast-message-content",
  icon: ({ props }) => [
    "p-toast-message-icon",
    {
      [props.infoIcon]: props.message.severity === "info",
      [props.warnIcon]: props.message.severity === "warn",
      [props.errorIcon]: props.message.severity === "error",
      [props.successIcon]: props.message.severity === "success"
    }
  ],
  text: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-icon-close p-link",
  closeIcon: "p-toast-icon-close-icon"
};
const ToastStyle = BaseStyle.extend({
  name: "toast",
  css: css$i,
  classes: classes$i,
  inlineStyles: inlineStyles$1
});

const css$h = `
@layer primevue {
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-prev,
    .p-carousel-next {
        align-self: center;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-carousel-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-items-content {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-items-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-indicators {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .p-carousel-indicator > button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Vertical */
    .p-carousel-vertical .p-carousel-container {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-items-container {
        flex-direction: column;
        height: 100%;
    }

    /* Keyboard Support */
    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
}
`;
const classes$h = {
  root: ({ instance }) => [
    "p-carousel p-component",
    {
      "p-carousel-vertical": instance.isVertical(),
      "p-carousel-horizontal": !instance.isVertical()
    }
  ],
  header: "p-carousel-header",
  content: "p-carousel-content",
  container: "p-carousel-container",
  previousButton: ({ instance }) => [
    "p-carousel-prev p-link",
    {
      "p-disabled": instance.backwardIsDisabled
    }
  ],
  previousButtonIcon: "p-carousel-next-icon",
  itemsContent: "p-carousel-items-content",
  itemsContainer: "p-carousel-items-container",
  itemCloned: ({ index, value, totalShiftedItems, d_numVisible }) => [
    "p-carousel-item p-carousel-item-cloned",
    {
      "p-carousel-item-active": totalShiftedItems * -1 === value.length + d_numVisible,
      "p-carousel-item-start": index === 0,
      "p-carousel-item-end": value.slice(-1 * d_numVisible).length - 1 === index
    }
  ],
  item: ({ instance, index }) => [
    "p-carousel-item",
    {
      "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
      "p-carousel-item-start": instance.firstIndex() === index,
      "p-carousel-item-end": instance.lastIndex() === index
    }
  ],
  nextButton: ({ instance }) => [
    "p-carousel-next p-link",
    {
      "p-disabled": instance.forwardIsDisabled
    }
  ],
  nextButtonIcon: "p-carousel-prev-icon",
  indicators: "p-carousel-indicators p-reset",
  indicator: ({ instance, index }) => [
    "p-carousel-indicator",
    {
      "p-highlight": instance.d_page === index
    }
  ],
  indicatorButton: "p-link",
  footer: "p-carousel-footer"
};
const CarouselStyle = BaseStyle.extend({
  name: "carousel",
  css: css$h,
  classes: classes$h
});

const css$g = `
@layer primevue {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }

    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }

    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
        z-index: 1;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -0.5rem;
    }

    /* Animation */
    .p-galleria-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-galleria-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-galleria-enter-from,
    .p-galleria-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }

    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`;
const classes$g = {
  mask: ({ instance }) => [
    "p-galleria-mask p-component-overlay p-component-overlay-enter",
    {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }
  ],
  root: ({ instance }) => {
    const thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.$attrs.thumbnailsPosition);
    const indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.$attrs.indicatorsPosition);
    return [
      "p-galleria p-component",
      {
        "p-galleria-fullscreen": instance.$attrs.fullScreen,
        "p-galleria-indicator-onitem": instance.$attrs.showIndicatorsOnItem,
        "p-galleria-item-nav-onhover": instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
      },
      thumbnailsPosClass,
      indicatorPosClass
    ];
  },
  closeButton: "p-galleria-close p-link",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemWrapper: "p-galleria-item-wrapper",
  itemContainer: "p-galleria-item-container",
  previousItemButton: ({ instance }) => [
    "p-galleria-item-prev p-galleria-item-nav p-link",
    {
      "p-disabled": instance.isNavBackwardDisabled()
    }
  ],
  previousItemIcon: "p-galleria-item-prev-icon",
  item: "p-galleria-item",
  nextItemButton: ({ instance }) => [
    "p-galleria-item-next p-galleria-item-nav p-link",
    {
      "p-disabled": instance.isNavForwardDisabled()
    }
  ],
  nextItemIcon: "p-galleria-item-next-icon",
  caption: "p-galleria-caption",
  indicators: "p-galleria-indicators p-reset",
  indicator: ({ instance, index }) => [
    "p-galleria-indicator",
    {
      "p-highlight": instance.isIndicatorItemActive(index)
    }
  ],
  indicatorButton: "p-link",
  thumbnailWrapper: "p-galleria-thumbnail-wrapper",
  thumbnailContainer: "p-galleria-thumbnail-container",
  previousThumbnailButton: ({ instance }) => [
    "p-galleria-thumbnail-prev p-link",
    {
      "p-disabled": instance.isNavBackwardDisabled()
    }
  ],
  previousThumbnailIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailItemsContainer: "p-galleria-thumbnail-items-container",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: ({ instance, index, activeIndex }) => [
    "p-galleria-thumbnail-item",
    {
      "p-galleria-thumbnail-item-current": activeIndex === index,
      "p-galleria-thumbnail-item-active": instance.isItemActive(index),
      "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index,
      "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index
    }
  ],
  thumbnailItemContent: "p-galleria-thumbnail-item-content",
  nextThumbnailButton: ({ instance }) => [
    "p-galleria-thumbnail-next p-link",
    {
      "p-disabled": instance.isNavForwardDisabled()
    }
  ],
  nextThumbnailIcon: "p-galleria-thumbnail-next-icon"
};
const GalleriaStyle = BaseStyle.extend({
  name: "galleria",
  css: css$g,
  classes: classes$g
});

const css$f = `
@layer primevue {
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-image-preview-container {
        position: relative;
        display: inline-block;
        line-height: 0;
    }

    .p-image-preview-indicator {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        border: none;
        padding: 0;
    }

    .p-image-preview-container:hover > .p-image-preview-indicator {
        opacity: 1;
        cursor: pointer;
    }

    .p-image-preview-container > img {
        cursor: pointer;
    }

    .p-image-toolbar {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
    }

    .p-image-action.p-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-image-preview {
        transition: transform 0.15s;
        max-width: 100vw;
        max-height: 100vh;
    }

    .p-image-preview-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    .p-image-preview-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .p-image-preview-enter-from,
    .p-image-preview-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }
}
`;
const classes$f = {
  root: ({ props }) => [
    "p-image p-component",
    {
      "p-image-preview-container": props.preview
    }
  ],
  image: ({ props }) => props.image,
  button: "p-image-preview-indicator",
  icon: "p-image-preview-icon",
  mask: "p-image-mask p-component-overlay p-component-overlay-enter",
  toolbar: "p-image-toolbar",
  rotateRightButton: "p-image-action p-link",
  rotateLeftButton: "p-image-action p-link",
  zoomOutButton: ({ instance }) => [
    "p-image-action p-link",
    {
      "p-disabled": instance.isZoomOutDisabled
    }
  ],
  zoomInButton: ({ instance }) => [
    "p-image-action p-link",
    {
      "p-disabled": instance.isZoomInDisabled
    }
  ],
  closeButton: "p-image-action p-link",
  preview: "p-image-preview"
};
const ImageStyle = BaseStyle.extend({
  name: "image",
  css: css$f,
  classes: classes$f
});

const css$e = `
@layer primevue {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }

    .p-avatar.p-avatar-image {
        background-color: transparent;
    }

    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }
}
`;
const classes$e = {
  root: ({ props }) => [
    "p-avatar p-component",
    {
      "p-avatar-image": props.image != null,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge"
    }
  ],
  label: "p-avatar-text",
  icon: "p-avatar-icon"
};
const AvatarStyle = BaseStyle.extend({
  name: "avatar",
  css: css$e,
  classes: classes$e
});

const css$d = `
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`;
const classes$d = {
  root: "p-avatar-group p-component"
};
const AvatarGroupStyle = BaseStyle.extend({
  name: "avatargroup",
  css: css$d,
  classes: classes$d
});

const css$c = `
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`;
const classes$c = {
  root: ({ props, instance }) => [
    "p-badge p-component",
    {
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge",
      "p-badge-info": props.severity === "info",
      "p-badge-success": props.severity === "success",
      "p-badge-warning": props.severity === "warning",
      "p-badge-danger": props.severity === "danger"
    }
  ]
};
const BadgeStyle = BaseStyle.extend({
  name: "badge",
  css: css$c,
  classes: classes$c
});

const css$b = `
@layer primevue {
    .p-blockui-container {
        position: relative;
    }

    .p-blockui.p-component-overlay {
        position: absolute;
    }

    .p-blockui-document.p-component-overlay {
        position: fixed;
    }
}
`;
const classes$b = {
  root: "p-blockui-container"
};
const BlockUIStyle = BaseStyle.extend({
  name: "blockui",
  css: css$b,
  classes: classes$b
});

const css$a = `
@layer primevue {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }

    .p-chip-text {
        line-height: 1.5;
    }

    .p-chip-icon.pi {
        line-height: 1.5;
    }

    .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }

    .p-chip img {
        border-radius: 50%;
    }
}
`;
const classes$a = {
  root: ({ props }) => [
    "p-chip p-component",
    {
      "p-chip-image": props.image != null
    }
  ],
  icon: "p-chip-icon",
  label: "p-chip-text",
  removeIcon: "p-chip-remove-icon"
};
const ChipStyle = BaseStyle.extend({
  name: "chip",
  css: css$a,
  classes: classes$a
});

const css$9 = `
@layer primevue {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }

    .p-inplace .p-inplace-content {
        display: inline;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
}
`;
const classes$9 = {
  root: ({ props }) => ["p-inplace p-component", { "p-inplace-closable": props.closable }],
  display: ({ props }) => ["p-inplace-display", { "p-disabled": props.disabled }],
  content: "p-inplace-content"
};
const InplaceStyle = BaseStyle.extend({
  name: "inplace",
  css: css$9,
  classes: classes$9
});

const css$8 = `
@layer primevue {
    .p-scrolltop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-scrolltop-sticky {
        position: sticky;
    }

    .p-scrolltop-sticky.p-link {
        margin-left: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
}
`;
const classes$8 = {
  root: ({ props }) => ["p-scrolltop p-link p-component", { "p-scrolltop-sticky": props.target !== "window" }],
  icon: "p-scrolltop-icon"
};
const ScrollTopStyle = BaseStyle.extend({
  name: "scrolltop",
  css: css$8,
  classes: classes$8
});

const css$7 = `
@layer primevue {
    .p-skeleton {
        overflow: hidden;
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }

    .p-skeleton.p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }
}
`;
const inlineStyles = {
  root: { position: "relative" }
};
const classes$7 = {
  root: ({ props }) => [
    "p-skeleton p-component",
    {
      "p-skeleton-circle": props.shape === "circle",
      "p-skeleton-none": props.animation === "none"
    }
  ]
};
const SkeletonStyle = BaseStyle.extend({
  name: "skeleton",
  css: css$7,
  classes: classes$7,
  inlineStyles
});

const css$6 = `
@layer primevue {
    .p-progressbar {
        position: relative;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        border: 0 none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-determinate .p-progressbar-value-animate {
        transition: width 1s ease-in-out;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
}
`;
const classes$6 = {
  root: ({ instance }) => [
    "p-progressbar p-component",
    {
      "p-progressbar-determinate": instance.determinate,
      "p-progressbar-indeterminate": instance.indeterminate
    }
  ],
  container: "p-progressbar-indeterminate-container",
  value: "p-progressbar-value p-progressbar-value-animate",
  label: "p-progressbar-label"
};
const ProgressBarStyle = BaseStyle.extend({
  name: "progressbar",
  css: css$6,
  classes: classes$6
});

const css$5 = `
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`;
const classes$5 = {
  root: "p-progress-spinner",
  spinner: "p-progress-spinner-svg",
  circle: "p-progress-spinner-circle"
};
const ProgressSpinnerStyle = BaseStyle.extend({
  name: "progressspinner",
  css: css$5,
  classes: classes$5
});

const css$4 = `
@layer primevue {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }

    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`;
const classes$4 = {
  root: ({ props }) => [
    "p-tag p-component",
    {
      "p-tag-info": props.severity === "info",
      "p-tag-success": props.severity === "success",
      "p-tag-warning": props.severity === "warning",
      "p-tag-danger": props.severity === "danger",
      "p-tag-rounded": props.rounded
    }
  ],
  icon: "p-tag-icon",
  value: "p-tag-value"
};
const TagStyle = BaseStyle.extend({
  name: "tag",
  css: css$4,
  classes: classes$4
});

const css$3 = `
@layer primevue {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }

    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }

    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }
}
`;
const classes$3 = {
  root: "p-terminal p-component",
  content: "p-terminal-content",
  prompt: "p-terminal-prompt",
  command: "p-terminal-command",
  response: "p-terminal-response",
  container: "p-terminal-prompt-container",
  commandText: "p-terminal-input"
};
const TerminalStyle = BaseStyle.extend({
  name: "terminal",
  css: css$3,
  classes: classes$3
});

const css$2 = `
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`;
const classes$2 = {
  root: "p-badge p-component"
};
const BadgeDirectiveStyle = BaseStyle.extend({
  name: "badge",
  css: css$2,
  classes: classes$2
});

const css$1 = `
@layer primevue {
    .p-tooltip {
        position:absolute;
        display:none;
        padding: .25em .5rem;
        max-width: 12.5rem;
    }

    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }

    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }

    .p-tooltip .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }

    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }
}
`;
const classes$1 = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
const TooltipStyle = BaseStyle.extend({
  name: "tooltip",
  css: css$1,
  classes: classes$1
});

const css = `
@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

@layer primevue {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }
}
`;
const classes = {
  root: "p-ink"
};
const RippleStyle = BaseStyle.extend({
  name: "ripple",
  css,
  classes
});

const StyleClassStyle = {};

const FocusTrapStyle = {};

const AnimateOnScrollStyle = {};

const styles = [
  '<style type="text/css" data-primevue-style-id="layer-order" >@layer primevue</style>',
  BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet() : '',BaseComponentStyle && BaseComponentStyle.getStyleSheet ? BaseComponentStyle.getStyleSheet() : '',AutoCompleteStyle && AutoCompleteStyle.getStyleSheet ? AutoCompleteStyle.getStyleSheet() : '',CalendarStyle && CalendarStyle.getStyleSheet ? CalendarStyle.getStyleSheet() : '',CascadeSelectStyle && CascadeSelectStyle.getStyleSheet ? CascadeSelectStyle.getStyleSheet() : '',CheckboxStyle && CheckboxStyle.getStyleSheet ? CheckboxStyle.getStyleSheet() : '',ChipsStyle && ChipsStyle.getStyleSheet ? ChipsStyle.getStyleSheet() : '',ColorPickerStyle && ColorPickerStyle.getStyleSheet ? ColorPickerStyle.getStyleSheet() : '',DropdownStyle && DropdownStyle.getStyleSheet ? DropdownStyle.getStyleSheet() : '',EditorStyle && EditorStyle.getStyleSheet ? EditorStyle.getStyleSheet() : '',InputGroupStyle && InputGroupStyle.getStyleSheet ? InputGroupStyle.getStyleSheet() : '',InputGroupAddonStyle && InputGroupAddonStyle.getStyleSheet ? InputGroupAddonStyle.getStyleSheet() : '',InputMaskStyle && InputMaskStyle.getStyleSheet ? InputMaskStyle.getStyleSheet() : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet() : '',InputSwitchStyle && InputSwitchStyle.getStyleSheet ? InputSwitchStyle.getStyleSheet() : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet() : '',KnobStyle && KnobStyle.getStyleSheet ? KnobStyle.getStyleSheet() : '',ListboxStyle && ListboxStyle.getStyleSheet ? ListboxStyle.getStyleSheet() : '',MultiSelectStyle && MultiSelectStyle.getStyleSheet ? MultiSelectStyle.getStyleSheet() : '',PasswordStyle && PasswordStyle.getStyleSheet ? PasswordStyle.getStyleSheet() : '',RadioButtonStyle && RadioButtonStyle.getStyleSheet ? RadioButtonStyle.getStyleSheet() : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet() : '',SelectButtonStyle && SelectButtonStyle.getStyleSheet ? SelectButtonStyle.getStyleSheet() : '',SliderStyle && SliderStyle.getStyleSheet ? SliderStyle.getStyleSheet() : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet() : '',ToggleButtonStyle && ToggleButtonStyle.getStyleSheet ? ToggleButtonStyle.getStyleSheet() : '',TreeSelectStyle && TreeSelectStyle.getStyleSheet ? TreeSelectStyle.getStyleSheet() : '',TriStateCheckboxStyle && TriStateCheckboxStyle.getStyleSheet ? TriStateCheckboxStyle.getStyleSheet() : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet() : '',SpeedDialStyle && SpeedDialStyle.getStyleSheet ? SpeedDialStyle.getStyleSheet() : '',SplitButtonStyle && SplitButtonStyle.getStyleSheet ? SplitButtonStyle.getStyleSheet() : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet() : '',RowStyle && RowStyle.getStyleSheet ? RowStyle.getStyleSheet() : '',ColumnGroupStyle && ColumnGroupStyle.getStyleSheet ? ColumnGroupStyle.getStyleSheet() : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet() : '',DataViewStyle && DataViewStyle.getStyleSheet ? DataViewStyle.getStyleSheet() : '',DataViewLayoutOptionsStyle && DataViewLayoutOptionsStyle.getStyleSheet ? DataViewLayoutOptionsStyle.getStyleSheet() : '',OrderListStyle && OrderListStyle.getStyleSheet ? OrderListStyle.getStyleSheet() : '',OrganizationChartStyle && OrganizationChartStyle.getStyleSheet ? OrganizationChartStyle.getStyleSheet() : '',PaginatorStyle && PaginatorStyle.getStyleSheet ? PaginatorStyle.getStyleSheet() : '',PickListStyle && PickListStyle.getStyleSheet ? PickListStyle.getStyleSheet() : '',TreeStyle && TreeStyle.getStyleSheet ? TreeStyle.getStyleSheet() : '',TreeTableStyle && TreeTableStyle.getStyleSheet ? TreeTableStyle.getStyleSheet() : '',TimelineStyle && TimelineStyle.getStyleSheet ? TimelineStyle.getStyleSheet() : '',VirtualScrollerStyle && VirtualScrollerStyle.getStyleSheet ? VirtualScrollerStyle.getStyleSheet() : '',AccordionStyle && AccordionStyle.getStyleSheet ? AccordionStyle.getStyleSheet() : '',AccordionTabStyle && AccordionTabStyle.getStyleSheet ? AccordionTabStyle.getStyleSheet() : '',CardStyle && CardStyle.getStyleSheet ? CardStyle.getStyleSheet() : '',DeferredContentStyle && DeferredContentStyle.getStyleSheet ? DeferredContentStyle.getStyleSheet() : '',DividerStyle && DividerStyle.getStyleSheet ? DividerStyle.getStyleSheet() : '',FieldsetStyle && FieldsetStyle.getStyleSheet ? FieldsetStyle.getStyleSheet() : '',PanelStyle && PanelStyle.getStyleSheet ? PanelStyle.getStyleSheet() : '',ScrollPanelStyle && ScrollPanelStyle.getStyleSheet ? ScrollPanelStyle.getStyleSheet() : '',SplitterStyle && SplitterStyle.getStyleSheet ? SplitterStyle.getStyleSheet() : '',SplitterPanelStyle && SplitterPanelStyle.getStyleSheet ? SplitterPanelStyle.getStyleSheet() : '',TabViewStyle && TabViewStyle.getStyleSheet ? TabViewStyle.getStyleSheet() : '',TabPanelStyle && TabPanelStyle.getStyleSheet ? TabPanelStyle.getStyleSheet() : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet() : '',ConfirmDialogStyle && ConfirmDialogStyle.getStyleSheet ? ConfirmDialogStyle.getStyleSheet() : '',ConfirmPopupStyle && ConfirmPopupStyle.getStyleSheet ? ConfirmPopupStyle.getStyleSheet() : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet() : '',DynamicDialogStyle && DynamicDialogStyle.getStyleSheet ? DynamicDialogStyle.getStyleSheet() : '',OverlayPanelStyle && OverlayPanelStyle.getStyleSheet ? OverlayPanelStyle.getStyleSheet() : '',SidebarStyle && SidebarStyle.getStyleSheet ? SidebarStyle.getStyleSheet() : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet() : '',BreadcrumbStyle && BreadcrumbStyle.getStyleSheet ? BreadcrumbStyle.getStyleSheet() : '',ContextMenuStyle && ContextMenuStyle.getStyleSheet ? ContextMenuStyle.getStyleSheet() : '',DockStyle && DockStyle.getStyleSheet ? DockStyle.getStyleSheet() : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet() : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet() : '',MegaMenuStyle && MegaMenuStyle.getStyleSheet ? MegaMenuStyle.getStyleSheet() : '',PanelMenuStyle && PanelMenuStyle.getStyleSheet ? PanelMenuStyle.getStyleSheet() : '',StepsStyle && StepsStyle.getStyleSheet ? StepsStyle.getStyleSheet() : '',TabMenuStyle && TabMenuStyle.getStyleSheet ? TabMenuStyle.getStyleSheet() : '',TieredMenuStyle && TieredMenuStyle.getStyleSheet ? TieredMenuStyle.getStyleSheet() : '',ChartStyle && ChartStyle.getStyleSheet ? ChartStyle.getStyleSheet() : '',MessageStyle && MessageStyle.getStyleSheet ? MessageStyle.getStyleSheet() : '',InlineMessageStyle && InlineMessageStyle.getStyleSheet ? InlineMessageStyle.getStyleSheet() : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet() : '',CarouselStyle && CarouselStyle.getStyleSheet ? CarouselStyle.getStyleSheet() : '',GalleriaStyle && GalleriaStyle.getStyleSheet ? GalleriaStyle.getStyleSheet() : '',ImageStyle && ImageStyle.getStyleSheet ? ImageStyle.getStyleSheet() : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet() : '',AvatarGroupStyle && AvatarGroupStyle.getStyleSheet ? AvatarGroupStyle.getStyleSheet() : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet() : '',BlockUIStyle && BlockUIStyle.getStyleSheet ? BlockUIStyle.getStyleSheet() : '',ChipStyle && ChipStyle.getStyleSheet ? ChipStyle.getStyleSheet() : '',InplaceStyle && InplaceStyle.getStyleSheet ? InplaceStyle.getStyleSheet() : '',ScrollTopStyle && ScrollTopStyle.getStyleSheet ? ScrollTopStyle.getStyleSheet() : '',SkeletonStyle && SkeletonStyle.getStyleSheet ? SkeletonStyle.getStyleSheet() : '',ProgressBarStyle && ProgressBarStyle.getStyleSheet ? ProgressBarStyle.getStyleSheet() : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getStyleSheet ? ProgressSpinnerStyle.getStyleSheet() : '',TagStyle && TagStyle.getStyleSheet ? TagStyle.getStyleSheet() : '',TerminalStyle && TerminalStyle.getStyleSheet ? TerminalStyle.getStyleSheet() : '',BadgeDirectiveStyle && BadgeDirectiveStyle.getStyleSheet ? BadgeDirectiveStyle.getStyleSheet() : '',TooltipStyle && TooltipStyle.getStyleSheet ? TooltipStyle.getStyleSheet() : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet() : '',StyleClassStyle && StyleClassStyle.getStyleSheet ? StyleClassStyle.getStyleSheet() : '',FocusTrapStyle && FocusTrapStyle.getStyleSheet ? FocusTrapStyle.getStyleSheet() : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getStyleSheet ? AnimateOnScrollStyle.getStyleSheet() : ''
].join('');

const defineNitroPlugin = (def) => def;
const _8T6O9g2QzO = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.push(styles);
  });
});

const plugins = [
  _8T6O9g2QzO
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const _lazy_jnzYmb = () => Promise.resolve().then(function () { return upload$1; });
const _lazy_EZTPbr = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/upload', handler: _lazy_jnzYmb, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_EZTPbr, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_EZTPbr, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});

const upload = defineEventHandler((event) => {
  return {
    headers: { "Access-Control-Allow-Origin": "*" },
    statusCode: 200,
    statusMessage: "Fake Upload Process"
  };
});

const upload$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: upload
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/home/antoniodell/primevue/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/home/antoniodell/primevue/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>PrimeVue - Vue UI Component Library</title>\n<meta name=\"description\" content=\"The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.\">\n<meta name=\"robots\" content=\"index,follow\">\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:site\" content=\"@primevue\">\n<meta name=\"twitter:title\" content=\"PrimeVue | Vue UI Component Library\">\n<meta name=\"twitter:description\" content=\"The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.\">\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"PrimeVue | Vue UI Component Library\">\n<meta property=\"og:url\" content=\"https://primevue.org/\">\n<meta property=\"og:description\" content=\"The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.\">\n<meta property=\"og:image\" content=\"https://www.primefaces.org/static/social/primevue-preview.jpg\">\n<meta property=\"og:ttl\" content=\"604800\">\n<link id=\"home-table-link\" rel=\"stylesheet\" href=\"/styles/landing/themes/lara-light-teal/theme.css\">\n<link id=\"theme-link\" rel=\"stylesheet\" href=\"/themes/lara-light-teal/theme.css\">\n<link rel=\"icon\" href=\"/favicon.ico\">\n<script src=\"/scripts/prism.js\" data-manual=\"true\"></script>","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
