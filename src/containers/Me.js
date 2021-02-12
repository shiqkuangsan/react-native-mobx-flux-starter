/**
 * Profile
 * created by shiqkuangsan at 2019/10/29
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

export default class extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <Text>
          我的 Page
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
