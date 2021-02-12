import React from 'react';
import Root from './src/index';
import store from 'src/store';

export default function App() {
  return <Root store={store}/>;
}
