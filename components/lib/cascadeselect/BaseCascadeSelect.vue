<script>
import BaseComponent from 'primevue/basecomponent';
import CascadeSelectStyle from 'primevue/cascadeselect/style';

export default {
    name: 'BaseCascadeSelect',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        placeholder: String,
        disabled: Boolean,
        dataKey: null,
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        panelClass: {
            type: [String, Object],
            default: null
        },
        panelStyle: {
            type: Object,
            default: null
        },
        panelProps: {
            type: null,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        loading: {
            type: Boolean,
            default: false
        },
        dropdownIcon: {
            type: String,
            default: undefined
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        optionGroupIcon: {
            type: String,
            default: undefined
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        searchLocale: {
            type: String,
            default: undefined
        },
        searchMessage: {
            type: String,
            default: null
        },
        selectionMessage: {
            type: String,
            default: null
        },
        emptySelectionMessage: {
            type: String,
            default: null
        },
        emptySearchMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    style: CascadeSelectStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
