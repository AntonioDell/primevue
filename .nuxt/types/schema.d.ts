import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["primevue"]?: typeof import("/home/antoniodell/primevue/modules/nuxt-primevue/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["/home/antoniodell/primevue/modules/nuxt-primevue/module", Exclude<NuxtConfig["primevue"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   contextPath: string,

   gtag: {
      id: string,

      config: any,

      initialConsent: boolean,

      loadingStrategy: string,
   },

   primevue: {
      usePrimeVue: boolean,

      resolvePath: () => any,

      layerOrder: string,

      importPT: any,

      options: {
         ripple: boolean,
      },

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<{

      }>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<string>,
   },
  }
}