import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

@inject('store')
@observer
export default class extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log('Activity', this.props.store);
    return (
      <View style={styles.container}>
        <Text> 活动 Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
