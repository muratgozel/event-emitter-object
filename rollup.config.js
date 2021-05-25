const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  input: 'src/index.js',
  output: [
    {
      exports: 'default',
      format: 'amd',
      file: 'dist/event-emitter-object.amd' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'cjs',
      file: 'dist/event-emitter-object.cjs' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'es',
      file: 'dist/event-emitter-object.es' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'iife',
      file: 'dist/event-emitter-object.iife' + suffix + '.js',
      name: 'EventEmitterObject'
    },
    {
      exports: 'default',
      format: 'umd',
      file: 'dist/event-emitter-object.umd' + suffix + '.js',
      name: 'EventEmitterObject'
    }
  ],
  plugins: [
    nodeResolve({browser: true}),
    commonjs(),
    babel(),
    terser()
  ]
}
