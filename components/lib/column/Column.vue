<script>
import BaseColumn from './BaseColumn.vue';

export default {
    name: 'Column',
    extends: BaseColumn,
    inject: ['registerColumn', 'unregisterColumn'],
    mounted() {
        if (this.registerColumn) {
            this.registerColumn(this.$.vnode);
        }
    },
    unmounted() {
        if (this.unregisterColumn) {
            this.unregisterColumn(this.$.vnode);
        }
    },
    render() {
        return null;
    }
};
</script>
