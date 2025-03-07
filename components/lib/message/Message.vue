<template>
    <transition name="p-message" appear v-bind="ptm('transition')">
        <div v-show="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('root')" data-pc-name="message">
            <slot v-if="$slots.container" name="container" :onClose="close" :closeCallback="close"></slot>
            <div v-else :class="cx('wrapper')" v-bind="ptm('wrapper')">
                <slot name="messageicon" class="p-message-icon">
                    <component :is="icon ? 'span' : iconComponent" :class="[cx('icon'), icon]" v-bind="ptm('icon')"></component>
                </slot>
                <div class="p-message-text" :class="cx('text')" v-bind="ptm('text')">
                    <slot></slot>
                </div>
                <button v-if="closable" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" @click="close($event)" v-bind="{ ...closeButtonProps, ...ptm('button'), ...ptm('closeButton') }">
                    <slot name="closeicon">
                        <i v-if="closeIcon" :class="[cx('closeIcon'), closeIcon]" v-bind="{ ...ptm('buttonIcon'), ...ptm('closeIcon') }" />
                        <TimesIcon v-else :class="[cx('closeIcon'), closeIcon]" v-bind="{ ...ptm('buttonIcon'), ...ptm('closeIcon') }" />
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import InfoCircleIcon from 'primevue/icons/infocircle';
import TimesIcon from 'primevue/icons/times';
import TimesCircleIcon from 'primevue/icons/timescircle';
import Ripple from 'primevue/ripple';
import BaseMessage from './BaseMessage.vue';

export default {
    name: 'Message',
    extends: BaseMessage,
    emits: ['close'],
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    watch: {
        sticky(newValue) {
            if (!newValue) {
                this.closeAfterDelay();
            }
        }
    },
    mounted() {
        if (!this.sticky) {
            this.closeAfterDelay();
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        },
        closeAfterDelay() {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        TimesIcon,
        InfoCircleIcon,
        CheckIcon,
        ExclamationTriangleIcon,
        TimesCircleIcon
    }
};
</script>
