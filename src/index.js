import ResizeObserver from './components/ResizeObserver.vue'

// Install the components
export function install (app, options) {
  app.component('resize-observer', ResizeObserver)
  app.component('ResizeObserver', ResizeObserver)
}

export {
  ResizeObserver,
}

// Plugin
const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
