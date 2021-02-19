import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import { Router, Stack } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount(): void {
    SplashScreen.hide();
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store } = this.props;

    if (loading) {
      return <Loading/>;
    }

    return (
      <Root>
        <Provider {...store}>
          <StyleProvider style={getTheme(theme)}>
            <Router>
              <Stack key="root">{Routes}</Stack>
            </Router>
          </StyleProvider>
        </Provider>
      </Root>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
