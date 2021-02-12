import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
'Deprecation in '
]);

AppRegistry.registerComponent(appName, () => App);
