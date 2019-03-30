const presets = ['@babel/preset-env', '@babel/preset-react'];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-transform-react-constant-elements',
  'babel-plugin-transform-react-display-name',
  'react-hot-loader/babel'
];

module.exports = api => {
  api.cache(true);
  if (process.env.NODE_ENV === 'development') {
    plugins.push([
      'emotion',
      {
        sourceMap: true
      }
    ]);
  } else {
    plugins.push('emotion');
    plugins.push('transform-react-remove-prop-types');
  }
  return {
    presets,
    plugins
  };
};
