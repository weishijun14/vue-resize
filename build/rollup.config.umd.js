import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-resize',
    file: 'dist/wsj.vue-resize.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
