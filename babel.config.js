module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'mobx',
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',  // error this._callListeners.bind
  ]
};
