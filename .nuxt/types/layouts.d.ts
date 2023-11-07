import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "app-configurator" | "app-event-bus" | "app-footer" | "app-menu" | "app-menu-item" | "app-news" | "app-top-bar" | "custom" | "default"
declare module "/home/antoniodell/primevue/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}