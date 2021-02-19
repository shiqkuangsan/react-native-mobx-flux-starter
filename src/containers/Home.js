/**
 * Home
 * created by shiqkuangsan at 2019/10/29
 */

import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-native-elements';

@inject('homeStore')
@observer
export default class extends Component {

  // @observable title = 'Home';

  constructor(props) {
    super(props);
    // makeObservable(this)
  }

  componentDidMount(): void {
  }

  onPress = () => {
    const { homeStore } = this.props;
    homeStore.changeTitle();
  };

  render() {
    const { homeStore } = this.props;
    return (
      <>
        <StatusBar barStyle={'dark-content'}/>
        <View style={styles.container}>
          <Button
            title={`点击切换title: ${homeStore.title}`}
            style={{ marginVertical: 20 }}
            onPress={this.onPress}
            activeOpacity={0.8}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
