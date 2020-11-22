export default {
  target: 'browser',
  // esm: 'babel',
  // cjs: 'babel',
  umd: {
    name: 'test',
    sourcemap: true
  },
  runtimeHelpers: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ],
  ],
};
