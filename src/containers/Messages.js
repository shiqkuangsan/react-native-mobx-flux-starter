import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class News extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>News</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
