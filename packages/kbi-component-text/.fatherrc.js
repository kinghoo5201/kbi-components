export default {
  entry: 'src/index.tsx',
  file: 'index',
  umd: {
    name: process.env.npm_package_name,
    file: 'index',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  autoprefixer: {
    browsers: ['ie>8', 'Safari >= 6'],
  },
};
