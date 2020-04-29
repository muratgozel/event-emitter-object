const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/event-emitter-object.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/event-emitter-object.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/event-emitter-object.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/event-emitter-object.iife' + suffix + '.js',
      name: 'EventEmitterObject'
    },
    {
      format: 'umd',
      file: 'dist/event-emitter-object.umd' + suffix + '.js',
      name: 'EventEmitterObject'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser({sourcemap: false})
  ]
}
